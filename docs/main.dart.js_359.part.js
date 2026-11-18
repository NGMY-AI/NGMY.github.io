((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A8,N,Q,A_,S,A9,L,H,E,T,Aa,U,Ab,Ac,Ad,A0,Ae,Af,R,A1,Ag,Ah,Ai,M,A2,Aj,A3,A4,A5,Ak,A6,Al,G,Am,An,A7,Ao,Ap,V,O,Aq,Ar,W,As,X,P,F,At,I,K,Y,C={
bGv(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bGv=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$bGv)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.X(y.z)
t=A.ns(b1)
s=A.c1(b3.length,null,!1,x.h5)
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
return A.b(A.rm(t,a1,B.i1,"book",E.GY),$async$bGv)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RF(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.X(l!=null&&A.M3(l)?y.k:y.y)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3S(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGv,v)},
air(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$air=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$air)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.X(y.z)
t=A.ns(b6)
s=x.S
r=A.cY(c1,0,A.dD(4,"count",s),A.U(c1).c)
q=H.a3D(new A.N(r,new C.fQg(),r.$ti.k("N<ak.E,n>")).aM(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fQf(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.W.av(b7,null)+"\nAllowed values: style one of "+B.d.aM(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$air)
case 6:l=c5
k=H.RF(l==null?"":l)
if(k==null)throw A.X("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aq8(s,D.dIf,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.X("There is no page to change.")
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
return A.b(m.$1(f+B.W.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$air)
case 10:l=c5
k=l==null?null:H.RF(l)
if(k==null)throw A.X(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kQ(a5,a2.k("kQ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a8(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.i.M(b1)
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
case 9:if(h.a!==0){s=h.$ti.k("b7<2>")
p=A.cF(new A.b7(h,s),new C.fQh(),s.k("M.E"),p)
p=H.a3D(A.pO(p,3,A.a3(p).k("M.E")).aM(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.C(new A.cr(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3S(s,b9),$async$air)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aq8(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$air,v)},
hIw(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.h_b(e,f),d,null,!0,!0,x.g2)},
aq8:function aq8(d,e,f){this.a=d
this.b=e
this.c=f},
fQg:function fQg(){},
fQf:function fQf(d){this.a=d},
fQh:function fQh(){},
h_b:function h_b(d,e){this.a=d
this.b=e},
bEh(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEh=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aU(b1,new C.fDl())){u=null
w=1
break}t=B.d.cD(b1,new C.fDm())
s=$.S()
r=new A.q7(new A.pH())
q=A.zt(r,D.aT7)
p=A.L()
p.r=B.c.gp(0)
q.aF(D.aT7,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bG
o.e=B.dQ
n=new C.fDr(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.i.D(k-m,1,1e4)
d=B.i.D(j-l,1,1e4)
a0=B.i.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aH(s.r,B.aj,null,null,p)
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
a3=new A.aH(s.r,B.aj,null,null,p)
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
return A.b(r.o8().xI(520,160),$async$bEh)
case 4:w=3
return A.b(b3.hj(B.hf),$async$bEh)
case 3:b0=b3
u=b0==null?null:J.eR(B.dI.gaT(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEh,v)},
fNX(d){return C.in9(d)},
in9(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fNX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bka()
n=d.x!=null&&d.zO(null).length===0
if(d.x!=null)t=n?D.AE:D.K1
else t=d.gUN()?D.K1:D.aO_
w=3
return A.b(C.bEh(d.ax),$async$fNX)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoN(s)
r=A.a5D(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aO_}else{p.c=C.xn(q,!0)
p.b=n?D.AE:D.K1}r.a4o(A.h9T(new C.fNZ(p,d,new C.fO_(),t,n,o),null,D.bIX,B.xo))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNX,v)},
fUM(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fUM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fNX(d),$async$fUM)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aA(q,0,40)
u=Af.Hw(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUM,v)},
fDl:function fDl(){},
fDm:function fDm(){},
fDr:function fDr(d){this.a=d},
fO_:function fO_(){},
fNZ:function fNZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNY:function fNY(){},
h_E(d,e){var w=0,v=A.j(x.H)
var $async$h_E=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.h_I(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h_E)
case 2:return A.h(null,v)}})
return A.i($async$h_E,v)},
bGY(d,e,f,g){return C.iuK(d,e,f,g)},
iuK(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bGY=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cL.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.frf)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h_A(g,r,f),d,null,!0,!0,x.H),$async$bGY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bGY,v)},
h_J(d,e){var w=0,v=A.j(x.H)
var $async$h_J=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h_M(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h_J)
case 2:return A.h(null,v)}})
return A.i($async$h_J,v)},
b0q:function b0q(d,e){this.c=d
this.a=e},
c8V:function c8V(){},
bdC:function bdC(d,e){this.b=d
this.a=e},
h_I:function h_I(d,e){this.a=d
this.b=e},
h_F:function h_F(d){this.a=d},
h_G:function h_G(d,e,f){this.a=d
this.b=e
this.c=f},
h_H:function h_H(d,e){this.a=d
this.b=e},
h_A:function h_A(d,e,f){this.a=d
this.b=e
this.c=f},
h_y:function h_y(d){this.a=d},
h_z:function h_z(d,e,f){this.a=d
this.b=e
this.c=f},
h_M:function h_M(d,e){this.a=d
this.b=e},
h_K:function h_K(d){this.a=d},
h_L:function h_L(d,e,f){this.a=d
this.b=e
this.c=f},
fId(d,e){var w=0,v=A.j(x.y),u,t
var $async$fId=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3n(d),$async$fId)
case 3:t=g
J.nY(t,new C.fIe(e))
u=A.aj4(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fId,v)},
fIe:function fIe(d){this.a=d},
aql:function aql(d,e,f){this.c=d
this.d=e
this.a=f},
aF9:function aF9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRl:function dRl(d,e){this.a=d
this.b=e},
dR6:function dR6(d,e){this.a=d
this.b=e},
dR9:function dR9(d,e,f){this.a=d
this.b=e
this.c=f},
dR8:function dR8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dR7:function dR7(d,e){this.a=d
this.b=e},
dRa:function dRa(d,e){this.a=d
this.b=e},
dR4:function dR4(){},
dR5:function dR5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dR3:function dR3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQP:function dQP(d){this.a=d},
dQQ:function dQQ(d,e,f){this.a=d
this.b=e
this.c=f},
dQR:function dQR(d,e){this.a=d
this.b=e},
dQO:function dQO(d){this.a=d},
dQW:function dQW(d,e){this.a=d
this.b=e},
dQN:function dQN(d){this.a=d},
dQX:function dQX(d,e,f){this.a=d
this.b=e
this.c=f},
dQY:function dQY(d,e,f){this.a=d
this.b=e
this.c=f},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d,e,f){this.a=d
this.b=e
this.c=f},
dQL:function dQL(d,e){this.a=d
this.b=e},
dR_:function dR_(d,e){this.a=d
this.b=e},
dQK:function dQK(d){this.a=d},
dR0:function dR0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQI:function dQI(){},
dQC:function dQC(d){this.a=d},
dQD:function dQD(d){this.a=d},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dR1:function dR1(d,e){this.a=d
this.b=e},
dQH:function dQH(d){this.a=d},
dR2:function dR2(d){this.a=d},
dQG:function dQG(){},
dQS:function dQS(d,e){this.a=d
this.b=e},
dQF:function dQF(d){this.a=d},
dQT:function dQT(d,e,f){this.a=d
this.b=e
this.c=f},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQU:function dQU(d){this.a=d},
dQV:function dQV(d,e,f){this.a=d
this.b=e
this.c=f},
dRo:function dRo(){},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRm:function dRm(d){this.a=d},
dRn:function dRn(d){this.a=d},
dRi:function dRi(d,e){this.a=d
this.b=e},
dRj:function dRj(d){this.a=d},
dRb:function dRb(d,e,f){this.a=d
this.b=e
this.c=f},
dRc:function dRc(d,e,f){this.a=d
this.b=e
this.c=f},
dRd:function dRd(d,e,f){this.a=d
this.b=e
this.c=f},
dRe:function dRe(d,e,f){this.a=d
this.b=e
this.c=f},
dRf:function dRf(d,e,f){this.a=d
this.b=e
this.c=f},
dRg:function dRg(d,e,f){this.a=d
this.b=e
this.c=f},
dRh:function dRh(d,e,f){this.a=d
this.b=e
this.c=f},
dRq:function dRq(){},
dRr:function dRr(){},
dRs:function dRs(){},
dRt:function dRt(d){this.a=d},
dRk:function dRk(d,e){this.a=d
this.b=e},
hE2(d){return B.d.dL(D.a5x,new C.fJ_(d),new C.fJ0())},
uU:function uU(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fJ_:function fJ_(d){this.a=d},
fJ0:function fJ0(){},
amm:function amm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aX8:function aX8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ua:function Ua(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhd:function bhd(){this.d=$
this.c=this.a=null},
dh0:function dh0(d,e){this.a=d
this.b=e},
dgZ:function dgZ(d,e){this.a=d
this.b=e},
dh_:function dh_(){},
dh1:function dh1(d,e){this.a=d
this.b=e},
ho4(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nB(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LQ(d,e){return C.ilP(d,e)},
ilP(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LQ)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.u(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.W.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cF(o,new C.fLw(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fLx(),n),n.k("M.E"))
B.d.b_(o,new C.fLy())
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
Bw(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$Bw)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.fZf(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.W.av(r,null)),$async$Bw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bw,v)},
aTd(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTd=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$aTd)
case 2:u=h
t=J.cE(u)
s=t.bk(u,new C.h6S(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bw(d,e,u),$async$aTd)
case 3:return A.h(null,v)}})
return A.i($async$aTd,v)},
bEL(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$bEL)
case 2:u=h
J.nY(u,new C.fI5(f))
w=3
return A.b(C.Bw(d,e,u),$async$bEL)
case 3:return A.h(null,v)}})
return A.i($async$bEL,v)},
bEZ(d,e){return C.ilO(d,e)},
ilO(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEZ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEZ)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.u(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.P3
w=1
break}p=B.W.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.Eb.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7g,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6A,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6w,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d9q,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Ix(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.P3
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.P3
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEZ,v)},
SO(d,e,f){return C.iuf(d,e,f)},
iuf(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SO=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SO)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.W.av(f.aj(),null)),$async$SO)
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
return A.i($async$SO,v)},
Sg(d,e){return C.ilQ(d,e)},
ilQ(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sg=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Sg)
case 7:r=g
q=r.rA("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LQ(d,e),$async$Sg)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lN(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sg)
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
return A.i($async$Sg,v)},
ahJ(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sg(d,e),$async$ahJ)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aA(),$async$ahJ)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahJ)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahJ,v)},
a43(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a43=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sg(d,e),$async$a43)
case 2:s=h
J.h7(s,f)
w=3
return A.b(A.aA(),$async$a43)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a43)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a43)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a43)
case 6:return A.h(null,v)}})
return A.i($async$a43,v)},
nB:function nB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLw:function fLw(){},
fLx:function fLx(){},
fLy:function fLy(){},
fZf:function fZf(){},
h6S:function h6S(d){this.a=d},
fI5:function fI5(d){this.a=d},
Ix:function Ix(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bSf:function bSf(d){this.a=d},
iuz(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ee(new C.fZQ(j,i,f,e,h,g),!0,null,x.H))},
Sb(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sb=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sg(h,g),$async$Sb)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aVu)
u=!1
w=1
break}w=4
return A.b(C.hIw(d,f,e),$async$Sb)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahJ(h,g),$async$Sb)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nB(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bw(h,r,p),$async$Sb)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SO(h,r,new C.Ix("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Sb)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Sb,v)},
fZQ:function fZQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_L:function a_L(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aC7:function aC7(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dhG:function dhG(d){this.a=d},
dhF:function dhF(d,e){this.a=d
this.b=e},
dhu:function dhu(d,e){this.a=d
this.b=e},
dhr:function dhr(d,e){this.a=d
this.b=e},
dh2:function dh2(d){this.a=d},
dh3:function dh3(d,e){this.a=d
this.b=e},
dhv:function dhv(d){this.a=d},
dhb:function dhb(d){this.a=d},
dh9:function dh9(d){this.a=d},
dha:function dha(d){this.a=d},
dhc:function dhc(d){this.a=d},
dhs:function dhs(d){this.a=d},
dht:function dht(){},
dh7:function dh7(d){this.a=d},
dh8:function dh8(d,e){this.a=d
this.b=e},
dhd:function dhd(d){this.a=d},
dhe:function dhe(d,e){this.a=d
this.b=e},
dhE:function dhE(d){this.a=d},
dhD:function dhD(d,e){this.a=d
this.b=e},
dhC:function dhC(d){this.a=d},
dho:function dho(d){this.a=d},
dhn:function dhn(d){this.a=d},
dhp:function dhp(d){this.a=d},
dh4:function dh4(d,e){this.a=d
this.b=e},
dhq:function dhq(d,e){this.a=d
this.b=e},
dhh:function dhh(d){this.a=d},
dhi:function dhi(d){this.a=d},
dhg:function dhg(){},
dhj:function dhj(d){this.a=d},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d,e){this.a=d
this.b=e},
dhm:function dhm(d,e,f){this.a=d
this.b=e
this.c=f},
dhf:function dhf(d,e){this.a=d
this.b=e},
dhx:function dhx(d){this.a=d},
dhw:function dhw(){},
dhy:function dhy(d){this.a=d},
dhz:function dhz(d){this.a=d},
dhA:function dhA(d){this.a=d},
dhB:function dhB(d,e){this.a=d
this.b=e},
dh5:function dh5(d){this.a=d},
dh6:function dh6(d){this.a=d},
a_P:function a_P(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhC:function bhC(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
djs:function djs(d){this.a=d},
djt:function djt(d){this.a=d},
djr:function djr(d){this.a=d},
dju:function dju(d){this.a=d},
djq:function djq(d){this.a=d},
djv:function djv(d){this.a=d},
djp:function djp(d){this.a=d},
djw:function djw(d,e){this.a=d
this.b=e},
djo:function djo(d,e){this.a=d
this.b=e},
djx:function djx(d,e){this.a=d
this.b=e},
a_N:function a_N(d,e,f,g,h,i,j){var _=this
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
aCa:function aCa(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dhV:function dhV(d,e){this.a=d
this.b=e},
dhU:function dhU(d,e){this.a=d
this.b=e},
dhZ:function dhZ(d){this.a=d},
dhY:function dhY(d,e){this.a=d
this.b=e},
dhW:function dhW(d){this.a=d},
dhX:function dhX(d){this.a=d},
di_:function di_(d){this.a=d},
di0:function di0(d){this.a=d},
dhT:function dhT(d,e){this.a=d
this.b=e},
dhS:function dhS(d,e){this.a=d
this.b=e},
KU:function KU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_2:function a_2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cQj:function cQj(d){this.a=d},
cQk:function cQk(){},
cQl:function cQl(d){this.a=d},
beP:function beP(d,e,f){this.b=d
this.c=e
this.a=f},
beG:function beG(d,e){this.b=d
this.a=e},
uV:function uV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_l:function a_l(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beN:function beN(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d8S:function d8S(d,e,f){this.a=d
this.b=e
this.c=f},
d8R:function d8R(d,e){this.a=d
this.b=e},
d9g:function d9g(d){this.a=d},
d93:function d93(){},
d9h:function d9h(d){this.a=d},
d92:function d92(){},
d9i:function d9i(d,e){this.a=d
this.b=e},
d91:function d91(d,e){this.a=d
this.b=e},
d9j:function d9j(d,e){this.a=d
this.b=e},
d90:function d90(d,e){this.a=d
this.b=e},
d9k:function d9k(d){this.a=d},
d9_:function d9_(){},
d9l:function d9l(d,e){this.a=d
this.b=e},
d8Z:function d8Z(d,e){this.a=d
this.b=e},
d9m:function d9m(d){this.a=d},
d9b:function d9b(d,e){this.a=d
this.b=e},
d9n:function d9n(d){this.a=d},
d9o:function d9o(d){this.a=d},
d9q:function d9q(d){this.a=d},
d9r:function d9r(d){this.a=d},
d9a:function d9a(d,e){this.a=d
this.b=e},
d9s:function d9s(d,e){this.a=d
this.b=e},
aJd:function aJd(d){this.a=d},
bk8:function bk8(d){this.a=d},
bcZ:function bcZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amn:function amn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a20:function a20(d,e){this.a=d
this.b=e},
amo:function amo(d,e,f,g,h,i){var _=this
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
bSp:function bSp(d){this.a=d},
bSj:function bSj(d){this.a=d},
bSi:function bSi(d,e){this.a=d
this.b=e},
bSs:function bSs(d){this.a=d},
bSk:function bSk(d){this.a=d},
bSl:function bSl(d){this.a=d},
bSo:function bSo(d){this.a=d},
bSn:function bSn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSq:function bSq(d,e){this.a=d
this.b=e},
bSr:function bSr(){},
bSm:function bSm(d){this.a=d},
bSg:function bSg(d,e){this.a=d
this.b=e},
bSh:function bSh(d){this.a=d},
bpK:function bpK(d,e){this.b=d
this.a=e},
aC8:function aC8(){},
iH(d,e){var w
$.S()
w=A.L()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dQ
return w},
bEj(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.op(0,a0?-f:f,f)
w=A.bW(B.hr,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.c0(w,t)
w=a1===D.XG
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.evY,new A.r(-4+v,-2),C.iH(q,5))
d.ah(D.etx,new A.r(4-v,-2),C.iH(q,5))}else{t=A.bW(B.JT,14,40)
p=A.L()
p.r=v.gp(0)
d.c0(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ce(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ce(15,-40,11,t))
o.E(new A.bw())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aH(v,B.aj,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bw())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b2s){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iH(F.Ga,3.4))
d.ah(D.ewf,new A.r(9,n),C.iH(q,4))
d.ah(D.etX,new A.r(10,n),C.iH(q,4))}else if(a1===D.b2t){d.ah(D.ev2,new A.r(-8,-26-Math.max(0,w)*6),C.iH(q,4))
d.ah(D.es_,new A.r(8,-26-Math.max(0,-w)*6),C.iH(q,4))}else{w=s*3
v=-38-r
d.ah(D.ev7,new A.r(-12-w,v),C.iH(q,4))
d.ah(D.aN1,new A.r(12+w,v),C.iH(q,4))}w=A.L()
w.r=q.gp(0)
d.aF(D.fe5,w)
m=new A.r(0,-77-r)
w=A.bW(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c0(w,v)
w=h.y
if(w!=null){v=A.bW(m.a5(0,K.vF),15,24)
u=A.L()
u.r=w.gp(0)
d.c0(v,u)
u=m.a5(0,D.erU)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bW(m.a5(0,B.tK),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.ewd),m.a5(0,D.ev0),C.iH(v,2.2))
d.ah(m.a5(0,D.etW),m.a5(0,D.erR),C.iH(v,2.2))}if(w===4){w=m.a5(0,D.ewh)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.etY)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.euP)
v=A.L()
v.r=B.ic.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.euD)
w=A.L()
w.r=B.ic.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,K.a9p)
w=A.bW(l,21,22)
v=A.L()
v.r=D.lG.gp(0)
d.c0(w,v)
v=A.bW(l.a5(0,K.aMZ),5,12)
w=A.L()
w.r=D.bhR.gp(0)
d.c0(v,w)
d.ah(l.a5(0,D.ew9),l.a5(0,K.aNm),C.iH(B.cV,1.4))
d.ah(D.aN1,new A.r(15,-88-r),C.iH(q,3.6))}j.restore()},
hCE(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bW(B.dL,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.c0(v,t)
t=A.bW(B.dL,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c0(t,u)
d.lB(D.aTb,A.L())
C.iar(d,g,h,i,j)
s=(k==null?D.a9u:k).a-w>=0?1:-1
w=A.L()
w.a=B.Mc
w.san(A.jG(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.aju.j(0.5),D.aju.j(0.12),D.bpr.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aF(D.aTb,w)
r.restore()
r.restore()},
iar(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
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
s=A.bx(D.fe6,B.tP)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fe1,B.hU)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fef,B.hU)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c0(D.fe8,s)
s=A.L()
s.r=d.gp(0)
a1.c0(D.fcS,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.op(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aH(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ce(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ce(m+3,-62,m-2,-58))
l.E(new A.ce(0,-70,k,-58))
l.E(new A.bw())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.br(s.save())
a1.mx(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dgg[j]
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
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
default:a1.ah(D.evD,D.esF,C.iH(a2.c.j(0.9),3))}a1.ah(D.ewa,D.ev9,C.iH(B.w.j(0.18),1.6))
a1.ah(D.erZ,K.aN3,C.iH(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.aF(D.fcO,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aF(D.fd1,i)
n=new A.aH(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ce(0,-57,9,-66))
n.E(new A.ce(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fda,0.1,2.941592653589793,!1,C.iH(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9z
n=25*q
k=23*q
i=9*q
C.hyE(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EC:o
C.hyE(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.etp,D.etl,C.iH(D.akr,4))
a1.ah(D.etn,D.etj,C.iH(D.Gy.j(0.7),1.4))
u=A.L()
u.r=B.cV.gp(0)
a1.O(D.etm,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.iam(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hyE(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hr:s.eV(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aL(0,n)).a5(0,v.aL(0,m))
t=e.a5(0,q.aL(0,p))
d.ah(e,u,C.iH(j,l))
o=A.ap(j,B.w,0.2)
o.toString
d.ah(e,u,C.iH(o,l*0.35))
d.ah(u,t,C.iH(k,l*0.78))
o=A.ap(k,B.w,0.22)
o.toString
d.ah(u,t,C.iH(o,l*0.22))
$.S()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bW(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c0(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
iam(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bW(B.vE,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.c0(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.O(D.evj,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.esf,9.5,w)}w=A.bW(D.eww,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.c0(w,u)
u=A.bW(D.euM,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c0(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kq(13,-20,17,-9,16,2))
t.E(new A.kq(15,13,8,20,0,20))
t.E(new A.kq(-8,20,-15,13,-16,2))
t.E(new A.kq(-17,-9,-13,-20,0,-20))
t.E(new A.bw())
u=A.L()
u.san(A.we(D.ew_,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iH(c8.j(0.5),0.8)
c2.cQ(D.feh,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fcV,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.evg,D.ev4,s)
c2.ah(D.esb,D.es2,s)
c2.cQ(D.fd9,2.2,1.4,!1,s)
c2.cQ(D.fcT,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fdn,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ce(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ce(0,-12,-13,-6))
p.E(new A.bw())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ev5,D.es3,C.iH(G.np,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.evm,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.esg,3,o)
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ce(-12,22,0,26))
o.E(new A.ce(12,22,13,6))
o.E(new A.ce(8,13,0,12))
o.E(new A.ce(-8,13,-13,6))
o.E(new A.bw())
p=A.L()
p.r=B.hY.gp(0)
c2.af(o,p)
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ce(0,6,7,8))
p.E(new A.ce(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ce(-20,-27,0,-29))
p.E(new A.ce(20,-27,17,-4))
p.E(new A.ce(0,-14,-17,-4))
p.E(new A.bw())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.w,0.3)
o.toString
c2.cQ(D.fdu,3.4,2.5,!1,C.iH(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fdh,3.6,2.2,!1,C.iH(o,1.2))
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ce(27,-34,25,-19))
o.E(new A.ce(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.aj,b9,b9,A.a([],w))
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
c2.O(D.es4,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fdr,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aDE[l]
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
c2.cQ(D.fdq,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.a9p,K.a9o,C.iH(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fcW,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bW(D.ewj,5,8)
o=D.agH.j(i)
n=A.L()
n.r=o.gp(0)
c2.c0(p,n)
n=A.bW(D.euX,5,8)
p=D.agH.j(i)
o=A.L()
o.r=p.gp(0)
c2.c0(n,o)
h=c4.e*2.4
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ce(h-3.4,6,h-2.6,7.4))
o.E(new A.ce(h,8.8,h+2.6,7.4))
c2.af(o,C.iH(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.i.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fP[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bW(new A.r(a5,-3),a3,7)
a6=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c0(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.aj,b9,b9,a6)
a6.push(new A.jA(A.bW(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ec(a4.glg().a.snapshot())
d.clipPath(a3.a,$.mK(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=D.blM.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.ZT:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dQ
a3=p?0.8:0
c2.cQ(A.bW(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
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
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bwc
else{u=A.ap(c8,D.bpt,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ce(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ce(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bw())
v=A.L()
v.r=D.boL.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mx(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aF(new A.a4(w,11,w+b6*2,13.2),u)
u=A.bW(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bwh.gp(0)
c2.c0(u,w)
d.restore()
c2.af(b8,C.iH(b4,1.1))}else{u=new A.aH(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ce(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iH(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ce(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ce(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fd8,-1.2,2.2,!1,C.iH(c8.j(0.5),0.8))
c2.cQ(D.fcY,2.141592653589793,2.2,!1,C.iH(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.euF,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.euB,1.7,w)}},
ifP(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q7(new A.pH()),e=A.zt(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jG(B.J,new A.r(0,a0*0.46),D.dd1,D.d4m,B.x,h))
e.aF(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e0()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.san(A.we(B.J,230,A.a([D.bkq,B.L],a0),h,B.x,h,h,0))
e.c0(D.fdE,d)
a2.restore()
d=A.L()
d.san(A.we(D.a9x,58,A.a([D.bnN,B.L],a0),h,B.x,h,h,0))
e.O(D.a9x,58,d)
d=A.L()
d.r=D.bj8.gp(0)
e.O(D.a9x,24,d)
d=A.L()
d.r=D.a_j.gp(0)
e.O(D.esZ,5,d)
d=A.L()
d.r=D.a_j.gp(0)
e.O(D.et2,3.4,d)
d=A.L()
d.r=D.a_j.gp(0)
e.O(D.et1,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aH(g.r,B.aj,h,h,u)
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
g=new A.bw()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bhF,D.bjH,D.bpN][s]
u=$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cz3[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.b=B.aa
u.c=2.4
u.r=D.a_G.gp(0)
u.d=B.bG
u.e=B.dQ
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bW(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_G.gp(0)
e.c0(g,u)
d=A.bW(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_G.gp(0)
e.c0(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.bjb.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jG(D.erx,D.erA,D.d6n,B.xd,B.x,h))
e.aF(new A.a4(-200,412,650,1300),g)
j=new A.e0()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bW(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h4()?B.c:B.w
d=new A.ar(B.S,B.Q,B.V,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c0(u,d)}J.br(a2.save())
a2.translate(225,590)
e.op(0,1,0.34)
g=A.L()
g.san(A.we(B.J,250,A.a([D.bqL,D.bk1,D.bsL],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.aj9,D.biG,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.i8D(e)
for(l=0;l<3;++l)C.ibO(e,D.aBs[l])
C.ibD(e,D.esT)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=2.4
a0.r=D.a_B.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.es0,D.esk,C.iH(D.bjp,1.6))
a2.restore()
return f.o8()},
i8D(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aH(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kq(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kq(416,382,432,422,428,462))
f.E(new A.bw())
w=A.L()
w.san(A.jG(new A.r(354,0),new A.r(430,0),D.dB8,B.mp,B.x,i))
d.af(f,w)
v=new A.e0()
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
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dhE[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aH(h,B.aj,i,i,l)
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
r.r=D.ahs.gp(0)
r.d=B.bG
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=A.ap(D.bjh,D.bpL,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=1.2
r.r=D.a_B.gp(0)
r.d=B.bG
r.e=B.dQ
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bW(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.X,B.U)
w.r=D.br7.gp(0)
d.c0(q,w)}},
ibO(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bW(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
b3.r=b1.gp(0)
b4.c0(b0,b3)
b2=b2.r
b3=x.v
w=new A.aH(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ce(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bw())
u=A.L()
u.san(A.jG(new A.r(b0,0),new A.r(v,0),D.dhK,B.mp,B.x,a4))
b4.af(w,u)
t=new A.e0()
t.cU(B.o.V(a5*7))
v=b4.c
J.br(v.save())
b4.mx(0,w)
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
o=D.aj5.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aF(new A.a4(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bg(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aH(b2,B.aj,a4,a4,j)
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
h=new A.bw()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=D.lG.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aH(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bg(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iH(D.aj5.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
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
b2.E(new A.bw())
m=A.L()
m.r=D.ajh.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajh.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ce(a5-a9,n,a5,u))
e.E(new A.ce(a5+a9,n,p,j))
e.E(new A.ce(a5,b1+a7*0.34,o,j))
e.E(new A.bw())
b1=A.L()
n=a7*1.4
b1.san(A.jG(new A.r(a5-n,0),new A.r(a5+n,0),D.dli,B.mp,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mx(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h4()?B.w:D.biP).j(0.16)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dQ
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aH(b0,B.aj,a4,a4,b1)
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
v.r=D.bqd.gp(0)
v.d=B.bG
v.e=B.dQ
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bw())
b0=A.L()
b0.r=D.bmf.gp(0)
b4.af(a9,b0)},
ibD(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aDB[s]
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.b=B.aa
q.c=3
q.r=D.a_B.gp(0)
q.d=B.bG
q.e=B.dQ
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bW(e.a5(0,K.aMY),24,36)
t=$.S()
r=A.L()
r.r=D.bvo.gp(0)
d.c0(u,r)
t=new A.aH(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ce(w,v-24,r,u))
t.E(new A.bw())
u=A.L()
u.r=D.aia.gp(0)
d.af(t,u)},
ib_(d){switch(B.o.F(d,8)){case 0:return D.b20
case 1:return D.b1Z
case 2:return D.b1Y
case 3:return D.b1X
case 4:return D.b2_
case 5:return D.b21
case 6:return D.hEg
default:return D.hEf}},
SM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpL()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9z:j
w.as=k==null?D.EC:k
C.hCE(d,e,p,C.ib_(m),w,s,m,l)},
hE8(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bU3:function bU3(){var _=this
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
tj:function tj(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpL:function bpL(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amG:function amG(){this.b=this.a=null},
aXd:function aXd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bTW:function bTW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTX:function bTX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTY:function bTY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTZ:function bTZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU_:function bU_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU0:function bU0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU1:function bU1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU2:function bU2(){},
bTV:function bTV(d){this.a=d},
agi:function agi(d,e){this.a=d
this.b=e},
aef:function aef(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Na(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSF(s)
s.bCe(d)
return s},
H5(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fw6(f),v),v.k("M.E"))
w=A.C(v,A.a3(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cY(w,0,A.dD(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.ly(e,v,B.d.cn(v,f),h,i,"tree",j)},
iwb(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h6J(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jH(c4,c0)
t=A.C(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jH(c4,c0)
r=A.C(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jH(c4,c0)
q=A.C(c4,A.a3(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wL)g="father"
else g=h===D.oB?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h6L(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H5(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h6M(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.ly("True or false: "+h+" is the "+g+" of "+l+".",D.aCu,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ly("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCu,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ge(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h6N(l,a0,c5),v),s)
e=a1.c
if(e===D.wL)e="son"
else e=e===D.oB?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H5(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ev([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mD(a5,a5.r,f.k("mD<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H5(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iE<1>"),a3=new A.iE(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gJ(0),a2.k("bQ<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H5(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arN(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h6O(l),v),s)
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
j=A.C(new A.Y(t,new C.h6P(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wL
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H5(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNs(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h6Q(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H5(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.u(j,D.cRS)
h=l+" was born in "+k
c2.$2("place",C.H5(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.u(j,D.d7r)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H5(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H5(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j4(b1,b3,b3)
c2.$2("year",C.H5(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bEV(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Na(d),l=new A.e0()
l.cU(f)
w=C.iwb(m,l,g)
for(v=new A.dn(w,w.r,w.e);v.C();)J.hm9(v.d,l)
v=A.a3(w).k("cr<1>")
u=A.C(new A.cr(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aU(u,new C.fJC(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.I(0,J.u(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.u(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.aAu,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hCL(o,l))}}else if(!g&&v>3){o=C.hCL(D.aAu[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hCL(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.ly(d.a,w,B.d.cn(w,v),d.d,d.e,d.f,d.r)},
hI5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Na(a2),a1=new A.e0()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Ge(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Ge(n)
l=A.U(m)
k=new A.iE(m,0,5,l.k("iE<1>"))
k.nb(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fY9(),A.U(j).k("N<1,F>")).fL(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aSZ(a0,j[i]))
w.push(new C.auL("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c4(e.c1(0,a0.amV(q),new C.fYa()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
d=A.C(new A.cr(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cY(d,0,A.dD(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gJ(0),t.k("bQ<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aSZ(a0,v[r]))
w.push(new C.auL("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRt(d){return B.d.aoo(D.aD_,new C.fFr(d))},
imh(d){return A.nF(new A.Y(D.aD_,new C.fMs(d),x.av))},
bTt(d){return C.hRN(d)},
hRN(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTt=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bTt)
case 7:r=f
q=B.a.i(d)
q=A.ep(J.u(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bTt,v)},
BS(d,e){return C.hRK(d,e)},
hRK(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BS)
case 7:r=g
p=B.a.i(d)
o=A.ep(J.u(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BS)
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
return A.i($async$BS,v)},
bTs(d,e,f){return C.hRL(d,e,f)},
hRL(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTs=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bTs)
case 7:r=h
q=B.a.i(d)
q=A.ep(J.u(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bTs,v)},
BT(d,e,f,g){return C.hRM(d,e,f,g)},
hRM(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BT=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BT)
case 7:r=i
p=B.a.i(d)
o=A.ep(J.u(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BT)
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
return A.i($async$BT,v)},
bHb(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h8M(d,e,f,g){return new C.alf(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hPR(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cu)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cY(w,0,A.dD(4,"count",x.S),u).dq(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.h8M(w,v,B.o.D(u==null?20:u,5,60),t)},
hni(d){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hPR(A.a1(r,t,s)))}return new C.MV(p,w,v)},
hhj(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hni(w.gP(w)))
return v},
aSZ(d,e){var w=e.c===D.oB
if(d.amV(e)===0&&d.Ge(e).length!==0)return w?0:1
if(d.Ge(e).length!==0||d.arN(e)!=null)return w?2:3
return w?4:5},
hJa(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Na(a4),a3=new A.e0()
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
j=i.h(0,k)}h=a2.Ge(m)
g=a2.arN(m)
f=a2.aNs(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wL)k="father"
else k=k===D.oB?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wL)k="father"
else k=k===D.oB?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b_(l,new C.h78())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h79(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iE(a0,0,3,i.k("iE<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aSZ(a2,m)
i=new A.iE(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bbb(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hAa(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hIg(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Na(a4),a3=new A.e0()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Ge(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Ge(l)
j=A.U(k)
i=new A.iE(k,0,4,j.k("iE<1>"))
i.nb(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aU(h,new C.fYM(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iE(i,0,k,m)
j.nb(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aSZ(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aSZ(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aSZ(a2,f[g]))
w.push(new C.aai(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ly:function ly(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSF:function bSF(d){this.b=d
this.c=$},
bSG:function bSG(){},
bSH:function bSH(d){this.a=d},
fw6:function fw6(d){this.a=d},
h6J:function h6J(d){this.a=d},
h6K:function h6K(){},
h6L:function h6L(d){this.a=d},
h6M:function h6M(d,e){this.a=d
this.b=e},
h6N:function h6N(d,e,f){this.a=d
this.b=e
this.c=f},
h6I:function h6I(d,e){this.a=d
this.b=e},
h6O:function h6O(d){this.a=d},
h6P:function h6P(d){this.a=d},
h6Q:function h6Q(d,e,f){this.a=d
this.b=e
this.c=f},
h6H:function h6H(d,e){this.a=d
this.b=e},
fJC:function fJC(d,e){this.a=d
this.b=e},
auL:function auL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fY9:function fY9(){},
fYa:function fYa(){},
zC:function zC(d,e,f){this.a=d
this.b=e
this.c=f},
fFr:function fFr(d){this.a=d},
fMs:function fMs(d){this.a=d},
alf:function alf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNt:function bNt(){},
MV:function MV(d,e,f){this.a=d
this.b=e
this.c=f},
bbb:function bbb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h78:function h78(){},
h79:function h79(d){this.a=d},
aai:function aai(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fYM:function fYM(d){this.a=d},
bis:function bis(d,e,f){var _=this
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
bLC:function bLC(d){this.a=d},
bLx:function bLx(){},
bLD:function bLD(){},
bLv:function bLv(){},
bLw:function bLw(){},
bLB:function bLB(d){this.a=d},
bLy:function bLy(d,e){this.a=d
this.b=e},
bLA:function bLA(d,e){this.a=d
this.b=e},
bLz:function bLz(d,e){this.a=d
this.b=e},
bLu:function bLu(d){this.a=d},
bdE:function bdE(d,e){this.b=d
this.a=e},
QS:function QS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC6:function aC6(d,e,f){this.b=d
this.c=e
this.a=f},
aAA:function aAA(d,e,f){this.a=d
this.b=e
this.c=f},
avm:function avm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avn:function avn(d,e,f){var _=this
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
crj:function crj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crk:function crk(d){this.a=d},
cri:function cri(d){this.a=d},
crl:function crl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crm:function crm(){},
crn:function crn(d,e){this.a=d
this.b=e},
cro:function cro(){},
crp:function crp(d){this.a=d},
crf:function crf(d){this.a=d},
crg:function crg(d,e){this.a=d
this.b=e},
crh:function crh(d,e,f){this.a=d
this.b=e
this.c=f},
cra:function cra(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crc:function crc(d,e){this.a=d
this.b=e},
crd:function crd(d,e){this.a=d
this.b=e},
crb:function crb(d,e){this.a=d
this.b=e},
cr9:function cr9(){},
cre:function cre(){},
bd7:function bd7(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cRn:function cRn(){},
azk:function azk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azl:function azl(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cGg:function cGg(d){this.a=d},
cGf:function cGf(d){this.a=d},
cGo:function cGo(d,e){this.a=d
this.b=e},
cGp:function cGp(d,e){this.a=d
this.b=e},
cGq:function cGq(d){this.a=d},
cGn:function cGn(d){this.a=d},
cGr:function cGr(d){this.a=d},
cGs:function cGs(d,e){this.a=d
this.b=e},
cGt:function cGt(){},
cGu:function cGu(d){this.a=d},
cGi:function cGi(d){this.a=d},
cGj:function cGj(d,e){this.a=d
this.b=e},
cGh:function cGh(d,e){this.a=d
this.b=e},
cGk:function cGk(){},
cGl:function cGl(){},
cGm:function cGm(d,e){this.a=d
this.b=e},
aAk:function aAk(){},
aHC:function aHC(){},
heZ(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bs5((w-450*u)/2,(v-900*u)/2,u)},
ag4:function ag4(){},
f8G:function f8G(d){this.a=d},
aLq:function aLq(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fiQ:function fiQ(d){this.a=d},
amw:function amw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amx:function amx(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qe$=f
_.M4$=g
_.anr$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTr:function bTr(d){this.a=d},
bTq:function bTq(){},
bTo:function bTo(d){this.a=d},
bTm:function bTm(){},
bTn:function bTn(d){this.a=d},
bTj:function bTj(d,e){this.a=d
this.b=e},
bTk:function bTk(){},
bTl:function bTl(d){this.a=d},
bTp:function bTp(d,e){this.a=d
this.b=e},
bTi:function bTi(d){this.a=d},
btO:function btO(d,e){this.b=d
this.a=e},
f8H:function f8H(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8I:function f8I(d,e,f){this.a=d
this.b=e
this.c=f},
f8J:function f8J(d,e,f){this.a=d
this.b=e
this.c=f},
f8K:function f8K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8L:function f8L(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8M:function f8M(){},
amu:function amu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amv:function amv(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qe$=f
_.M4$=g
_.anr$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bT4:function bT4(){},
bTf:function bTf(d,e){this.a=d
this.b=e},
bTg:function bTg(d){this.a=d},
bTh:function bTh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTb:function bTb(){},
bTa:function bTa(d,e){this.a=d
this.b=e},
bTc:function bTc(d,e){this.a=d
this.b=e},
bTd:function bTd(){},
bTe:function bTe(d){this.a=d},
bT6:function bT6(d){this.a=d},
bT7:function bT7(d){this.a=d},
bT8:function bT8(d){this.a=d},
bT5:function bT5(d,e){this.a=d
this.b=e},
bT9:function bT9(d){this.a=d},
bkg:function bkg(d,e){this.b=d
this.a=e},
dsC:function dsC(){},
a2j:function a2j(d,e){this.a=d
this.b=e},
amq:function amq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amr:function amr(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qe$=e
_.M4$=f
_.anr$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bSR:function bSR(d){this.a=d},
bSQ:function bSQ(){},
bSP:function bSP(){},
bSJ:function bSJ(){},
bSK:function bSK(){},
bSO:function bSO(d,e,f){this.a=d
this.b=e
this.c=f},
bSN:function bSN(d){this.a=d},
bSL:function bSL(d,e){this.a=d
this.b=e},
bSM:function bSM(d){this.a=d},
bjH:function bjH(d,e){this.b=d
this.a=e},
aC9:function aC9(){},
bhf:function bhf(){},
aCb:function aCb(){},
bhg:function bhg(){},
aCc:function aCc(){},
bhh:function bhh(){},
uz(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ab(0,B.G,f.j(0.4),B.i3,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.p(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.OH,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
ho5(d,e,f,g,h,i,j){return new C.ams(i,h,d,j,e,f,g,null)},
a6L:function a6L(d,e){this.c=d
this.a=e},
bjO:function bjO(d){this.a=d},
tI:function tI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSI:function bSI(d){this.a=d},
Iz:function Iz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ww:function Ww(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmB:function bmB(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e2Z:function e2Z(d,e){this.a=d
this.b=e},
e3_:function e3_(d){this.a=d},
e30:function e30(d,e){this.a=d
this.b=e},
e2X:function e2X(d){this.a=d},
e2Y:function e2Y(d){this.a=d},
e2W:function e2W(d){this.a=d},
e2U:function e2U(d){this.a=d},
e2V:function e2V(d){this.a=d},
e2T:function e2T(d,e){this.a=d
this.b=e},
e31:function e31(d){this.a=d},
e32:function e32(d,e){this.a=d
this.b=e},
e33:function e33(d,e){this.a=d
this.b=e},
e34:function e34(d,e){this.a=d
this.b=e},
e37:function e37(d,e){this.a=d
this.b=e},
e38:function e38(d,e){this.a=d
this.b=e},
e39:function e39(d,e){this.a=d
this.b=e},
e3a:function e3a(d,e){this.a=d
this.b=e},
e3b:function e3b(d,e){this.a=d
this.b=e},
e3c:function e3c(d,e,f){this.a=d
this.b=e
this.c=f},
e3d:function e3d(d,e){this.a=d
this.b=e},
e3e:function e3e(d,e){this.a=d
this.b=e},
e35:function e35(d){this.a=d},
e36:function e36(d){this.a=d},
a0c:function a0c(d,e){this.a=d
this.b=e},
ams:function ams(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amt:function amt(d){var _=this
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
bT2:function bT2(d){this.a=d},
bT3:function bT3(d){this.a=d},
bT1:function bT1(d){this.a=d},
bST:function bST(d){this.a=d},
bSU:function bSU(d){this.a=d},
bSS:function bSS(d){this.a=d},
bSZ:function bSZ(d,e,f){this.a=d
this.b=e
this.c=f},
bT_:function bT_(d){this.a=d},
bSW:function bSW(d,e){this.a=d
this.b=e},
bSX:function bSX(d,e,f){this.a=d
this.b=e
this.c=f},
bT0:function bT0(){},
bSY:function bSY(d,e){this.a=d
this.b=e},
bSV:function bSV(d){this.a=d},
Ub:function Ub(d,e){this.c=d
this.a=e},
amp:function amp(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bSt:function bSt(d){this.a=d},
bSu:function bSu(d){this.a=d},
bSE:function bSE(){},
bSD:function bSD(d,e,f){this.a=d
this.b=e
this.c=f},
bSy:function bSy(d,e){this.a=d
this.b=e},
bSx:function bSx(d,e){this.a=d
this.b=e},
bSz:function bSz(d){this.a=d},
bSA:function bSA(d,e){this.a=d
this.b=e},
bSB:function bSB(d,e){this.a=d
this.b=e},
bSw:function bSw(d,e){this.a=d
this.b=e},
bSC:function bSC(d,e,f){this.a=d
this.b=e
this.c=f},
bSv:function bSv(d,e){this.a=d
this.b=e},
ikN(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajj(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fJ3(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zb)m.push(l===D.wL?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cE(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cE(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.j4(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j4(h,a2,a2)-A.j4(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fJ1(u,f),p),new C.fJ2(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aM(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aM(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aA(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ikO(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajj(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fJ8(v,e)
q=new C.fJ6(v)
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
p.n(0,s.a,d)}}d=p.$ti.k("b7<2>")
d=A.d0(new A.b7(p,d),d.k("M.E"))
n=A.C(d,A.a3(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eL(l,new C.fJ7(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aM(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i60(d,e,f,g){var w,v,u=C.ikP(d,e)
if(u<=0||f.length<=u)return new A.afJ(!1,D.DX,f)
if(g.q(0,e.a))return new A.afJ(!1,D.DX,f)
w=A.U(f).c
v=A.cY(f,0,A.dD(u,"count",x.S),w).dq(0)
return new A.afJ(!0,A.cY(f,u,null,w).dq(0),v)},
i61(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajj(d3),d2=d1.length
if(d2===0)return D.hBs
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c1(0,t.a,new C.di7(t))}s=new C.dio(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dig(r)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dif(r)
l=A.T(w,x.do)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c4(l.c1(0,k,new C.di8()),o)}h=new C.die(s)
g=new C.did(l,r)
p=v.$ti.k("b7<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b7(v,p),new C.di9(h),o),o.k("M.E"))
e=f.length===0?new A.b7(v,p).gH(0):B.d.gH(f)
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
a9=new C.dim(new C.dii(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dn(v,v.r,v.e),j=a2.gamq(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ev([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nF(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.di6(a2,new C.din(),b6,a3,b4,v,a4,a5,a6,b5)
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
b5[c4]=new C.L0(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.C(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dia(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.dib(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dic())
c6.push(new C.aLl(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhl(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hDt(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hxl(d,e,f,g,h,i,j,k,l,m,n){return new C.a0p(k,f,j,e,l,n,m,d,g,h,i,null)},
aEa(d,e,f,g,h,i,j){return new C.bl6(i,d,e,f,j,h,g,null)},
arz:function arz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFJ:function aFJ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e4E:function e4E(d){this.a=d},
e4D:function e4D(d){this.a=d},
e4G:function e4G(d,e){this.a=d
this.b=e},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4I:function e4I(d){this.a=d},
e4C:function e4C(d,e){this.a=d
this.b=e},
e4F:function e4F(d){this.a=d},
e4K:function e4K(d){this.a=d},
e4J:function e4J(d,e){this.a=d
this.b=e},
art:function art(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFG:function aFG(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e44:function e44(d){this.a=d},
e42:function e42(d){this.a=d},
e43:function e43(d){this.a=d},
e45:function e45(d,e){this.a=d
this.b=e},
e4_:function e4_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3r:function e3r(d){this.a=d},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3J:function e3J(d){this.a=d},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d,e){this.a=d
this.b=e},
e3K:function e3K(d){this.a=d},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e3G:function e3G(d){this.a=d},
e3F:function e3F(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3W:function e3W(){},
e3X:function e3X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3V:function e3V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3P:function e3P(d){this.a=d},
e3Q:function e3Q(d,e,f){this.a=d
this.b=e
this.c=f},
e3O:function e3O(d,e){this.a=d
this.b=e},
e3R:function e3R(d,e){this.a=d
this.b=e},
e3M:function e3M(d,e){this.a=d
this.b=e},
e3N:function e3N(){},
e3S:function e3S(d,e){this.a=d
this.b=e},
e3T:function e3T(d){this.a=d},
e3U:function e3U(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3f:function e3f(d,e){this.a=d
this.b=e},
e3g:function e3g(d,e){this.a=d
this.b=e},
e47:function e47(d,e,f){this.a=d
this.b=e
this.c=f},
e41:function e41(d,e,f){this.a=d
this.b=e
this.c=f},
e40:function e40(d){this.a=d},
e3h:function e3h(d){this.a=d},
e3i:function e3i(d){this.a=d},
e3j:function e3j(){},
e3k:function e3k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3o:function e3o(d,e){this.a=d
this.b=e},
e3n:function e3n(d,e){this.a=d
this.b=e},
e3m:function e3m(d){this.a=d},
e3p:function e3p(d,e){this.a=d
this.b=e},
e3l:function e3l(d){this.a=d},
e46:function e46(d){this.a=d},
e3B:function e3B(){},
e3C:function e3C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3A:function e3A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3w:function e3w(d,e,f){this.a=d
this.b=e
this.c=f},
e3v:function e3v(d,e,f){this.a=d
this.b=e
this.c=f},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3x:function e3x(d){this.a=d},
e3y:function e3y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3z:function e3z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3D:function e3D(d,e){this.a=d
this.b=e},
e4e:function e4e(){},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4g:function e4g(d){this.a=d},
e4h:function e4h(d,e){this.a=d
this.b=e},
e4a:function e4a(d){this.a=d},
e48:function e48(d,e){this.a=d
this.b=e},
e4b:function e4b(d,e){this.a=d
this.b=e},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4d:function e4d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4i:function e4i(d){this.a=d},
e49:function e49(d){this.a=d},
e3q:function e3q(d){this.a=d},
bhj:function bhj(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
di4:function di4(d){this.a=d},
di3:function di3(d,e){this.a=d
this.b=e},
di5:function di5(d){this.a=d},
di2:function di2(d,e){this.a=d
this.b=e},
fJ3:function fJ3(d,e){this.a=d
this.b=e},
fJ4:function fJ4(d){this.a=d},
fJ5:function fJ5(){},
fJ1:function fJ1(d,e){this.a=d
this.b=e},
fJ2:function fJ2(){},
fJ8:function fJ8(d,e){this.a=d
this.b=e},
fJ9:function fJ9(d){this.a=d},
fJa:function fJa(){},
fJ6:function fJ6(d){this.a=d},
fJ7:function fJ7(d,e){this.a=d
this.b=e},
L0:function L0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GF:function GF(d,e){this.a=d
this.b=e},
bhl:function bhl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
di7:function di7(d){this.a=d},
dio:function dio(d){this.a=d},
dig:function dig(d){this.a=d},
dih:function dih(){},
dif:function dif(d){this.a=d},
di8:function di8(){},
die:function die(d){this.a=d},
did:function did(d,e){this.a=d
this.b=e},
di9:function di9(d){this.a=d},
dii:function dii(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dij:function dij(d){this.a=d},
dik:function dik(d){this.a=d},
dil:function dil(){},
dim:function dim(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
din:function din(){},
di6:function di6(d,e,f,g,h,i,j,k,l,m){var _=this
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
dia:function dia(d,e){this.a=d
this.b=e},
dib:function dib(d){this.a=d},
dic:function dic(){},
aLl:function aLl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhm:function bhm(d,e){this.b=d
this.a=e},
dip:function dip(){},
diq:function diq(d){this.a=d},
dir:function dir(d){this.a=d},
dis:function dis(){},
bl7:function bl7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgo:function bgo(d,e){this.b=d
this.a=e},
bzb:function bzb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
foq:function foq(d){this.a=d},
bot:function bot(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eZs:function eZs(d){this.a=d},
eZr:function eZr(d,e){this.a=d
this.b=e},
a0p:function a0p(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aE8:function aE8(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dym:function dym(d,e){this.a=d
this.b=e},
dyl:function dyl(d){this.a=d},
dyj:function dyj(d){this.a=d},
dyk:function dyk(d){this.a=d},
dyv:function dyv(d){this.a=d},
dyw:function dyw(d){this.a=d},
dyu:function dyu(d,e){this.a=d
this.b=e},
dyx:function dyx(){},
dyA:function dyA(d){this.a=d},
dyt:function dyt(d,e){this.a=d
this.b=e},
dyz:function dyz(){},
dyB:function dyB(d){this.a=d},
dys:function dys(d,e){this.a=d
this.b=e},
dyC:function dyC(d){this.a=d},
dyr:function dyr(d){this.a=d},
dyD:function dyD(d){this.a=d},
dyq:function dyq(d){this.a=d},
dyE:function dyE(d){this.a=d},
dyp:function dyp(d){this.a=d},
dyF:function dyF(d){this.a=d},
dyo:function dyo(d){this.a=d},
dyG:function dyG(d){this.a=d},
dyn:function dyn(d,e){this.a=d
this.b=e},
dyy:function dyy(d){this.a=d},
aeC:function aeC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bl6:function bl6(d,e,f,g,h,i,j,k){var _=this
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
bl5:function bl5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyH:function dyH(d){this.a=d},
dyI:function dyI(d,e){this.a=d
this.b=e},
aE9:function aE9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKn:function aKn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeD:function aeD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dyR:function dyR(d){this.a=d},
GB:function GB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hs9(d){var w=d.U,v=x.N
return w.jp(w,new C.cfZ(),v,v)},
hYp(d){var w=d.bI
if(w>=0)return w
return 5},
hsb(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hs9(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hsa(d,e){var w=C.hsb(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hYq(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hs9(d),w,w)
u=C.hsb(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1T(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1T=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lF(t,B.JN),$async$b1T)
case 3:if(l){u=!0
w=1
break}u=A.lk(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JN,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1T,v)},
cfZ:function cfZ(){},
hYn(){var w,v=$.oz(),u=J.e6(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
Jv(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$Jv)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Jv)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.u(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
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
return A.i($async$Jv,v)},
a8u(d){return C.hYo(d)},
hYo(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8u=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a8u)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hO("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cP,null),$async$a8u)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a8u,v)},
cfY(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jv(),$async$cfY)
case 3:t=m.i7(f),t=t.gae(t),s=x.f
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
return A.i($async$cfY,v)},
Os(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Os=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfY(d),$async$Os)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jv(),$async$Os)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dL(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8u(s),$async$Os)
case 9:case 8:u=t
w=1
break
case 5:n=C.hYn()
w=10
return A.b(C.Jv(),$async$Os)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8u(s),$async$Os)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Os,v)},
b1S(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jv(),$async$b1S)
case 3:t=f
for(s=J.dq(t),r=s.gdP(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.u(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8u(t),$async$b1S)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1S,v)},
a8v(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8v=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ary(d,e),$async$a8v)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Os(d),$async$a8v)
case 7:w=4
break
case 5:w=8
return A.b(C.b1S(d),$async$a8v)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8v,v)},
ars(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ars=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ary(f,e),$async$ars)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$ars)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jv(),$async$ars)
case 7:q=o.u(k,t)
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
return A.i($async$ars,v)},
b1R(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b1R=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b1R)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jv(),$async$b1R)
case 4:t=q.u(g,r)
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
return A.i($async$b1R,v)},
hYr(){var w,v=$.oz(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
arv(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$arv)
case 3:if(!g){u=null
w=1
break}t=C.hYr()
w=4
return A.b(A.Wx(),$async$arv)
case 4:s=g
r=B.dV.aN(B.W.av(d.f2(),null))
r=B.cQ.gcr().aN(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8w(s),$async$arv)
case 5:p=e?999:2
u=new A.a1z("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arv,v)},
aru(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aru=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wx(),$async$aru)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b1R(J.k(l==null?"":l),j),$async$aru)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cb.cC(0,B.cL.aN(t))
s=C.hsc(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dL(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8w(p),$async$aru)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aru,v)},
hsc(d){var w,v,u,t,s=null
try{w=B.W.aP(0,d,s)
if(!x.f.b(w))return s
u=J.u(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hYt(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
haW(d){var w=0,v=A.j(x.m),u,t,s
var $async$haW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aru(t[1])
w=1
break}u=null
w=1
break}u=C.hsc(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$haW,v)},
hYt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cF(u,new C.cg0(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cg1(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i7(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cF(n,new C.cg2(),n.$ti.k("M.E"),o)
k=A.a3(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cg3(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arw(h,w,s,r,q)},
ary(d,e){var w=0,v=A.j(x.y),u,t
var $async$ary=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oj(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bl(d),$async$ary)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ary,v)},
cg9(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cg9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bl(d),$async$cg9)
case 3:t=s.b8(f,new C.cga(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.cgb())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cg9,v)},
Wy(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wy=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ary(e,d),$async$Wy)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Os(e),$async$Wy)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bl(e),$async$Wy)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cg7(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a8(r)
if(t.gau(r)){u=null
w=1
break}t=t.dN(r,new C.cg8(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LQ(e,o),$async$Wy)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arw(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wy,v)},
b1W(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1W=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wy(d,e,f,g),$async$b1W)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hk(A.KX(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1W,v)},
b1V(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1V=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wy(d,e,f,g),$async$b1V)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arv(r,f),$async$b1V)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIn(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1V,v)},
Wz(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wz=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.haW(a0),$async$Wz)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ars(g.a,d,e,f,s,r),$async$Wz)
case 6:if(!a2){if(r)throw A.X(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.X(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bEC(e,j),$async$Wz)
case 12:case 11:w=13
return A.b(C.aj2(e,j,s),$async$Wz)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bw(e,i,h),$async$Wz)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bsb(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wz,v)},
arw:function arw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cg5:function cg5(){},
cg6:function cg6(){},
cg4:function cg4(){},
cg0:function cg0(){},
cg1:function cg1(){},
cg2:function cg2(){},
cg3:function cg3(){},
cga:function cga(){},
cgb:function cgb(){},
cg7:function cg7(d){this.a=d},
cg8:function cg8(d){this.a=d},
hk7(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f4(null,x.H)
return A.hE(d,new C.arx(w,e,g,i,f,h,null),!0,null,x.H)},
di1(d,e,f,g,h,i,j,k){return new C.bhi(i,e,k,j,g,f,h,d,null)},
arx:function arx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFI:function aFI(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e4r:function e4r(d){this.a=d},
e4s:function e4s(d,e,f){this.a=d
this.b=e
this.c=f},
e4w:function e4w(d,e){this.a=d
this.b=e},
e4x:function e4x(d){this.a=d},
e4o:function e4o(d){this.a=d},
e4p:function e4p(d,e){this.a=d
this.b=e},
e4q:function e4q(d,e){this.a=d
this.b=e},
e4v:function e4v(d){this.a=d},
e4u:function e4u(d,e){this.a=d
this.b=e},
e4t:function e4t(){},
e4z:function e4z(d){this.a=d},
e4A:function e4A(d,e){this.a=d
this.b=e},
e4y:function e4y(d,e){this.a=d
this.b=e},
dit:function dit(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhk:function bhk(d,e,f){this.d=d
this.e=e
this.a=f},
adR:function adR(d,e,f){this.c=d
this.d=e
this.a=f},
bhi:function bhi(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhn:function bhn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0J:function a0J(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFH:function aFH(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4k:function e4k(d){this.a=d},
e4l:function e4l(d){this.a=d},
e4m:function e4m(d){this.a=d},
e4n:function e4n(d){this.a=d},
a0K:function a0K(d){this.a=d},
bmC:function bmC(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e4B:function e4B(d,e){this.a=d
this.b=e},
b0p(d,e){return new C.b0o(d,e,null)},
b0o:function b0o(d,e,f){this.c=d
this.d=e
this.a=f},
ine(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b3(d,11)},
iuJ(d){return A.bT(B.L,null,new C.h_i(new C.ul(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hua(d,e){return new C.auz(e,d,null)},
aSS(d,e,f,g,h,i,j){var w=C.ine(i)
if(w!=null)return A.bu(e,new A.a5(j,f,new C.a7x(w,!0,null),null),B.aq)
return N.aSe(e,B.c_,f,g,h,i,j)},
m0:function m0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7x:function a7x(d,e,f){this.c=d
this.d=e
this.a=f},
bmg:function bmg(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dQt:function dQt(d){this.a=d},
dQu:function dQu(){},
dQv:function dQv(d,e){this.a=d
this.b=e},
bmf:function bmf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h_i:function h_i(d){this.a=d},
h_h:function h_h(d,e){this.a=d
this.b=e},
h_g:function h_g(d,e){this.a=d
this.b=e},
h_f:function h_f(d,e){this.a=d
this.b=e},
auz:function auz(d,e,f){this.c=d
this.d=e
this.a=f},
cpB:function cpB(d,e){this.a=d
this.b=e},
aNN:function aNN(){},
iuu(d){var w=null
return A.cg(w,w,!0,w,new C.fZG(),d,w,!0,!0,x.e2)},
ivI(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h6r(h,g,f,e),d,w,!0,!0,x.N)},
iuw(d,e){var w=null
return A.cg(w,w,!0,w,new C.fZK(e),d,w,!0,!0,x.dY)},
iuv(d){var w=null
return A.cg(w,w,!0,w,new C.fZJ(),d,w,!0,!0,x.c5)},
aVP:function aVP(d,e){this.a=d
this.b=e},
aVO:function aVO(d){this.a=d},
aTR:function aTR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZG:function fZG(){},
h6r:function h6r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZK:function fZK(d){this.a=d},
fZJ:function fZJ(){},
a_n:function a_n(d,e){this.c=d
this.a=e},
aAS:function aAS(){var _=this
_.d=$
_.c=_.a=_.e=null},
d9E:function d9E(d){this.a=d},
d9F:function d9F(d){this.a=d},
d9D:function d9D(d,e){this.a=d
this.b=e},
d9G:function d9G(d){this.a=d},
d9H:function d9H(d){this.a=d},
a_m:function a_m(d){this.a=d},
aAR:function aAR(){this.d=$
this.c=this.a=null},
d9A:function d9A(d){this.a=d},
d9B:function d9B(d){this.a=d},
d9C:function d9C(d){this.a=d},
ZU:function ZU(d){this.a=d},
azy:function azy(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cHW:function cHW(){},
cI1:function cI1(d){this.a=d},
cI2:function cI2(d){this.a=d},
cI3:function cI3(d){this.a=d},
cI0:function cI0(){},
cI4:function cI4(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI_:function cI_(){},
cI6:function cI6(d,e){this.a=d
this.b=e},
cHZ:function cHZ(d,e){this.a=d
this.b=e},
cHX:function cHX(d,e){this.a=d
this.b=e},
cI7:function cI7(d){this.a=d},
cHY:function cHY(){},
cI8:function cI8(d){this.a=d},
a2v:function a2v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bz3:function bz3(){this.d=$
this.c=this.a=null},
fnW:function fnW(d,e){this.a=d
this.b=e},
fnX:function fnX(d){this.a=d},
fnY:function fnY(d,e){this.a=d
this.b=e},
acT:function acT(d,e){this.a=d
this.b=e},
Gp:function Gp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bz1:function bz1(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fnU:function fnU(d,e){this.a=d
this.b=e},
azr:function azr(d,e){this.c=d
this.a=e},
bz2:function bz2(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fnV:function fnV(d){this.a=d},
bz0:function bz0(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPV:function aPV(){},
aPW:function aPW(){},
bGC(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bg(u),s=B.o.D(B.i.V((u-t)*100),0,99),r=d<0?"-":"",q=A.ox(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fXX(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b0(B.o.v(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zh(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSu(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i2().la(85,1280,B.eQ),$async$aSu)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aSu)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hu9()
w=9
return A.b(C.cpA(q,r),$async$aSu)
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
o=A.ac(l)
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
return A.i($async$aSu,v)},
aSQ(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSQ=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cpx(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cL.aN(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hl(p,!0,null,o).dg(0,B.hb),$async$aSQ)
case 9:n=a1
w=10
return A.b(n.le(),$async$aSQ)
case 10:m=a1
w=11
return A.b(m.b.hj(B.hf),$async$aSQ)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eR(B.dI.gaT(l))
k="data:image/png;base64,"+B.cQ.gcr().aN(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.V(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ac(f)
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
return A.i($async$aSQ,v)},
fXX:function fXX(){},
ul:function ul(d){this.a=d},
auy:function auy(d,e,f){this.c=d
this.d=e
this.a=f},
aHd:function aHd(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eWC:function eWC(d,e){this.a=d
this.b=e},
eWt:function eWt(d){this.a=d},
eWu:function eWu(d){this.a=d},
eWA:function eWA(d,e){this.a=d
this.b=e},
eWz:function eWz(d,e){this.a=d
this.b=e},
eWw:function eWw(d,e){this.a=d
this.b=e},
eWv:function eWv(d,e){this.a=d
this.b=e},
eWx:function eWx(d){this.a=d},
eWy:function eWy(d,e){this.a=d
this.b=e},
eWB:function eWB(d,e){this.a=d
this.b=e},
eWo:function eWo(d,e){this.a=d
this.b=e},
eWs:function eWs(d){this.a=d},
eWr:function eWr(d,e){this.a=d
this.b=e},
eWq:function eWq(d){this.a=d},
eWD:function eWD(d,e){this.a=d
this.b=e},
eWE:function eWE(d,e){this.a=d
this.b=e},
eWp:function eWp(d,e){this.a=d
this.b=e},
hHI(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fXY(d,e,f){var w=0,v=A.j(x.N),u
var $async$fXY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.W.av(C.hHI(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXY,v)},
bGE(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fXY(!0,d,e),$async$bGE)
case 4:w=3
return A.b(r.auw(g,d,e.a),$async$bGE)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dV.aN(B.W.av(C.hHI(d,e,null),null))
u="NGMY_WS:"+B.kM.gcr().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGE,v)},
hyK(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hjH(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eB(s,t))return!0
if(J.d5(s,"{"))try{w=B.W.aP(0,s,null)
if(x.f.b(w)){v=J.u(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
isx(d){var w,v,u,t=C.hyK(d)
if(t==null)return null
if(C.hjH(t))return t
w=B.a.cn(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b3(t,w))
if(C.hjH(v))return v}u=B.a.cn(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b3(t,u))
if(C.hjH(v))return v}return null},
hjG(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.cb.cC(0,B.cL.aN(J.nv(q,8)))
w=t.a(B.W.aP(0,v,r))}else w=t.a(B.W.aP(0,q,r))
t=J.u(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.u(w,"project")
if(!x.f.b(u))return r
t=C.hdB(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bGD(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auv(t[1]),$async$bGD)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hjG(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hjG(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGD,v)},
hjF(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lI(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bG7(){var w=0,v=A.j(x.o),u,t
var $async$bG7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hx(),$async$bG7)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hjG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bG7,v)},
hIU(d,e,f,g){return A.bT(B.L,null,new C.h6e(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h6e:function h6e(d,e,f){this.a=d
this.b=e
this.c=f},
aeY:function aeY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWG:function eWG(d,e){this.a=d
this.b=e},
eWH:function eWH(d,e){this.a=d
this.b=e},
eWI:function eWI(d,e){this.a=d
this.b=e},
eWJ:function eWJ(d,e){this.a=d
this.b=e},
eWF:function eWF(d){this.a=d},
aus:function aus(d,e,f){this.c=d
this.d=e
this.a=f},
bnZ:function bnZ(){var _=this
_.c=_.a=_.e=_.d=null},
eWj:function eWj(d,e){this.a=d
this.b=e},
eWk:function eWk(d){this.a=d},
eWl:function eWl(d){this.a=d},
aux:function aux(d){this.a=d},
aHc:function aHc(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eWn:function eWn(d){this.a=d},
eWm:function eWm(d){this.a=d},
i0I(d,e,f,g,h){return new C.P8(h,g,d,e,f,null)},
aM7:function aM7(d,e){this.a=d
this.b=e},
P8:function P8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHe:function aHe(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eX5:function eX5(){},
eX1:function eX1(d,e){this.a=d
this.b=e},
eX2:function eX2(d){this.a=d},
eWN:function eWN(d){this.a=d},
eWL:function eWL(d){this.a=d},
eWM:function eWM(d){this.a=d},
eWW:function eWW(d,e){this.a=d
this.b=e},
eWT:function eWT(d,e){this.a=d
this.b=e},
eWU:function eWU(d,e){this.a=d
this.b=e},
eWV:function eWV(d,e,f){this.a=d
this.b=e
this.c=f},
eWR:function eWR(d,e,f){this.a=d
this.b=e
this.c=f},
eWP:function eWP(d){this.a=d},
eWQ:function eWQ(d){this.a=d},
eWS:function eWS(d){this.a=d},
eX8:function eX8(d){this.a=d},
eX7:function eX7(d){this.a=d},
eX9:function eX9(d){this.a=d},
eX6:function eX6(d){this.a=d},
eWK:function eWK(d){this.a=d},
eWO:function eWO(d,e){this.a=d
this.b=e},
eX4:function eX4(d,e){this.a=d
this.b=e},
eX3:function eX3(d,e){this.a=d
this.b=e},
eWZ:function eWZ(d){this.a=d},
eX_:function eX_(d){this.a=d},
eX0:function eX0(d,e){this.a=d
this.b=e},
eWY:function eWY(d,e){this.a=d
this.b=e},
eWX:function eWX(d,e,f){this.a=d
this.b=e
this.c=f},
bAP:function bAP(){},
B9(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahw(d,e,f){return C.igM(d,e,f)},
igM(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
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
r=A.ac(o)
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
ahv(d,e){return C.igL(d,e)},
igL(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahv=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahv)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ac(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ahv,v)},
ifA(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TK(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDz(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDz=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b58(q),$async$bDz)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSQ(q,!1),$async$bDz)
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
return A.i($async$bDz,v)},
hP6(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rv(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rv(p,J.k(u==null?"":u),1,o,q)},
hdB(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cF(w,new C.cHe(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cHf(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lI(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ikJ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wL
case"female":case"f":return D.oB
default:return D.zb}},
hE3(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
ho6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ikJ(v==null?j:J.k(v))
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
m=m==null?j:B.i.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.M(k)
return new C.i1(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ikL(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.P4
case"viewer":return D.kZ
default:return D.uR}},
ikM(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hm(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRA(d,e){return B.a.i(e.toLowerCase())===C.Hm(d,e)&&d.y!==D.kZ},
uA(d,e){var w,v=d.y
if(v===D.kZ)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hm(d,e))return!0
if(v===D.P4)return!0
v=d.e
return new A.N(v,A.hjN(),A.U(v).k("N<1,n>")).q(0,w)},
ik5(d){return J.dI(d,new C.fHW()).gJ(0)},
h6Z(d){var w=0,v=A.j(x.y),u,t
var $async$h6Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bl(d),$async$h6Z)
case 3:u=t.rq(f,new C.h7_(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6Z,v)},
bEC(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bl(d),$async$bEC)
case 3:t=g
if(J.rq(t,new C.fFq(e))){w=1
break}if(C.ik5(t)>=2)throw A.X(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEC,v)},
amz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cF(w,new C.bTu(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bTv(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bTw(),x.N)
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
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ikL(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cu)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.l1(w,v,s,!r,t,g,q,p,o,n,m)},
hEi(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aA(v,0,8)},
DE(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SL(d),$async$DE)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DE)
case 4:t=f
w=5
return A.b(t.a7v(0),$async$DE)
case 5:w=6
return A.b(C.fvH(t,l),$async$DE)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hzl(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pc(l,n),$async$DE)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hzl(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pc(l,n),$async$DE)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DE,v)},
fvH(d,e){return C.icW(d,e)},
icW(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fvH=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.B9(a9)))
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
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.B9(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.W.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hdB(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B9(a9)+"_"+n))
i=C.ifA(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b58(h),$async$fvH)
case 17:g=b1
if(g!=null){i=i.TK(g)
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
case 8:J.SU(q,new C.fvI())
if(p&&J.ad(q)!==0)C.pc(a9,q)
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
return A.i($async$fvH,v)},
bF2(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bF2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SL(d),$async$bF2)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DE(r),$async$bF2)
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
return A.i($async$bF2,v)},
hzl(d){var w,v,u,t
try{w=B.W.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cF(v,new C.fro(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.frp(),u),u.k("M.E"))
B.d.b_(v,new C.frq())
return v}catch(t){v=A.a([],x.D)
return v}},
pc(d,e){return C.iuj(d,e)},
iuj(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pc=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SL(b2),$async$pc)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$pc)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B9(a8)
p=A.aV(J.u(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.W.aP(0,p,null)),new C.fZu(),a2).fL(0)
a2=J.b8(b3,new C.fZv(),a2).c_(0,new C.fZw())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e_(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eB(n,m)?17:18
break
case 17:a5=C.B9(a8)
l=A.aV(J.u(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9R(l),$async$pc)
case 19:t=21
a5=C.B9(a8)
k=A.aV(J.u(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.W.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.u(j,"thumbnailPath")
w=28
return A.b(C.a9R(a5==null?null:J.k(a5)),$async$pc)
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
return A.b(C.ahv(r,"ngmy_worksheet_item_v3_"+C.B9(a8)+"_"+m),$async$pc)
case 29:w=30
return A.b(C.ahv(r,"ngmy_worksheet_thumb_v3_"+C.B9(a8)+"_"+m),$async$pc)
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
return A.b(C.bDz(h),$async$pc)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahw(r,"ngmy_worksheet_thumb_v3_"+C.B9(a8)+"_"+a4,f),$async$pc)
case 40:g=i.TK(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahv(r,"ngmy_worksheet_thumb_v3_"+C.B9(a8)+"_"+a4),$async$pc)
case 41:g=i.TK(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahv(r,"ngmy_worksheet_thumb_v3_"+C.B9(a8)+"_"+a4),$async$pc)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahw(r,"ngmy_worksheet_item_v3_"+C.B9(a8)+"_"+a4,B.W.av(g.aj(),null)),$async$pc)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c4(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahw(r,"ngmy_worksheets_index_v3_"+C.B9(a8),B.W.av(q,null)),$async$pc)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.fZx(q))
a4=a3.$ti.k("cM<1,a9<n,@>>")
a7=A.C(new A.cM(a3,new C.fZy(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahw(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.W.av(a0,null)),$async$pc)
case 45:w=46
return A.b(J.hOb(r),$async$pc)
case 46:if(a2.gcm(b3)&&J.ad(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.ac(b1)
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
return A.i($async$pc,v)},
Mh(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DE(d),$async$Mh)
case 3:t=g
s=J.cE(t)
r=s.bk(t,new C.h6Y(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.pc(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mh,v)},
bEP(d,e){var w=0,v=A.j(x.H),u
var $async$bEP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DE(d),$async$bEP)
case 2:u=g
J.nY(u,new C.fIp(e))
w=3
return A.b(C.pc(d,u),$async$bEP)
case 3:return A.h(null,v)}})
return A.i($async$bEP,v)},
Ho(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ho=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Ho)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.u(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.W.aP(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cF(j,new C.fLC(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fLD(),s),s.k("M.E"))
B.d.b_(r,new C.fLE())
k=r}}catch(h){}w=4
return A.b(C.fs7(d),$async$Ho)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.idj(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<n,@>>")
s=A.C(new A.N(o,new C.fLF(),s),s.k("ak.E"))
n=B.W.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RT(d,o),$async$Ho)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fLG(d),j),j.k("M.E"))
if(m.length!==0)C.aRk(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ho,v)},
fZg(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fZg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RT(d,e),$async$fZg)
case 3:t=J.dI(e,new C.fZh(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRk(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZg,v)},
a49(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a49=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a49)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.u(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.W.aP(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cF(m,new C.h6T(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h6U(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oD(o,new C.h6V(e))
if(B.a.i(e.x).length===0&&C.uA(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGw(e.y===D.kZ?D.kZ:D.uR,m)}else p=e
if(q===-1)J.n7(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RT(d,o),$async$a49)
case 3:w=C.uA(p,d)?4:5
break
case 4:w=6
return A.b(C.aRj(C.Hm(p,d),p),$async$a49)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a49,v)},
aRw(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ho(d),$async$aRw)
case 2:u=g
t=J.cE(u)
s=A.nF(t.eO(u,new C.fI6(e)))
t.bq(u,new C.fI7(e))
w=3
return A.b(C.RT(d,u),$async$aRw)
case 3:w=s!=null&&C.aRA(s,d)?4:5
break
case 4:w=6
return A.b(C.frs(e),$async$aRw)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRw,v)},
ajj(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h73(),v),v.k("M.E"))
return w},
hh7(d,e){var w,v=d.f,u=A.nF(new A.Y(v,new C.fHB(e),A.U(v).k("Y<1>")))
v=C.ajj(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fHC(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fHD())
return v},
ikP(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hIY(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hh7(d,u),new C.h6s(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
imi(d,e){var w
if(e==null||e.length===0)return 1
w=C.hh7(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fMt(),A.U(w).k("N<1,F>")).f0(0,B.y8)+1},
iuc(d){var w,v=C.ajj(d)
if(v.length===0)return null
w=new A.Y(v,new C.fZa(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ikK(d){return A.J(["id",d.a,"name",d.b,"gender",C.hE3(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
imd(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.zb?n:q.c
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
d=q.aGr(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cQH(a1,w,a3.d,a2.y,s,a0,v)},
Bl(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Bl)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.u(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.W.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cF(p,new C.fLz(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fLA(),s),s.k("M.E"))
B.d.b_(p,new C.fLB())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bl,v)},
aj2(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aj2=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uR:D.kZ
a7=C.Hm(b2,b3)
w=2
return A.b(C.Bl(b1),$async$aj2)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bk(a8,new C.fZ5(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEC(b1,b2),$async$aj2)
case 5:case 4:if(b0===-1){u=b2.aGw(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zb?i:l.c
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
s.n(0,m,l.aGr(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b7<2>")
s=A.C(new A.b7(s,k),k.k("M.E"))
k=a5?D.uR:D.kZ
u=t.cQJ(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RT(b1,a8),$async$aj2)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRj(B.a.i(b3.toLowerCase()),u),$async$aj2)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aj2,v)},
hzL(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<n,@>>"),k=A.C(new A.N(m,C.hI2(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hzM(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,C.hI2(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
iaR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amz(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hjN(),A.U(j).k("N<1,n>")).c_(0,new C.frV())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uR
else s=B.d.q(t,u)?D.P4:D.kZ
return w.aGw(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amz(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cF(h,new C.frW(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.frX(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.frY(),x.N).c_(0,new C.frZ())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uR
else s=B.d.q(t,u)?D.P4:D.kZ
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
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.l1(h,r,p,!m,t,o,l,j,v,s,B.ce)},
fs7(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fs7=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fsb()
h=x.N
g=x.z
w=7
return A.b(A.iw(A.a([A.lM("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lM("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lM("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fs7)
case 7:q=a4
p=J.u(q,0)
o=J.u(q,1)
n=J.u(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h1(l,o)
J.h1(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.u(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a3(l).k("b7<2>")
h=A.cF(new A.b7(l,h),new C.fs8(a0),h.k("M.E"),x.k)
l=A.a3(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fs9(),l),l.k("M.E"))
B.d.b_(l,new C.fsa())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ac(a1)
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
return A.i($async$fs7,v)},
idj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dN(e,new C.fwp(),v).c_(0,new C.fwq())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hm(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kZ){m=q.e
m=!new A.N(m,A.hjN(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.imd(l,v)
o=C.Hm(k,w)
p=v.d
s.n(0,u,o===w?k.bfR(p,D.uR):k.bfR(p,v.y))}j=s.$ti.k("b7<2>")
j=A.C(new A.b7(s,j),j.k("M.E"))
B.d.b_(j,new C.fwr())
return j},
RT(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RT)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fzp(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.W.av(s,null)),$async$RT)
case 3:return A.h(null,v)}})
return A.i($async$RT,v)},
aRj(d,e){return C.iiy(d,e)},
iiy(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mk("family_trees",A.a([C.hzL(e,d)],p),null,B.cP),$async$aRj)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mk("family_trees",A.a([C.hzM(e,d)],p),null,B.cP),$async$aRj)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ac(n)
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
return A.i($async$aRj,v)},
aRk(d,e){return C.iiz(d,e)},
iiz(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fEF(d),n),m)
r=l
w=7
return A.b(A.mk("family_trees",r,null,B.cP),$async$aRk)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fEG(d),n),m)
p=k
w=8
return A.b(A.mk("family_trees",p,null,B.cP),$async$aRk)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ac(i)
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
return A.i($async$aRk,v)},
frs(d){return C.ia6(d)},
ia6(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$frs=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sk("family_trees",A.J(["id",d],x.N,x.z),null,B.cP),$async$frs)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ac(p)
$.am.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$frs,v)},
rv:function rv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lI:function lI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cHh:function cHh(){},
cHg:function cHg(){},
cHe:function cHe(){},
cHf:function cHf(){},
Iy:function Iy(d,e){this.a=d
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
amy:function amy(d,e){this.a=d
this.b=e},
fHW:function fHW(){},
h7_:function h7_(d){this.a=d},
fFq:function fFq(d){this.a=d},
l1:function l1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bTy:function bTy(){},
bTx:function bTx(){},
bTu:function bTu(){},
bTv:function bTv(){},
bTw:function bTw(){},
fvI:function fvI(){},
fro:function fro(){},
frp:function frp(){},
frq:function frq(){},
fZu:function fZu(){},
fZv:function fZv(){},
fZw:function fZw(){},
fZx:function fZx(d){this.a=d},
fZy:function fZy(){},
h6Y:function h6Y(d){this.a=d},
fIp:function fIp(d){this.a=d},
fLC:function fLC(){},
fLD:function fLD(){},
fLE:function fLE(){},
fLF:function fLF(){},
fLG:function fLG(d){this.a=d},
fZh:function fZh(d){this.a=d},
h6T:function h6T(){},
h6U:function h6U(){},
h6V:function h6V(d){this.a=d},
fI6:function fI6(d){this.a=d},
fI7:function fI7(d){this.a=d},
h73:function h73(){},
fHB:function fHB(d){this.a=d},
fHC:function fHC(d,e){this.a=d
this.b=e},
fHD:function fHD(){},
h6s:function h6s(d){this.a=d},
fMt:function fMt(){},
fZa:function fZa(){},
fLz:function fLz(){},
fLA:function fLA(){},
fLB:function fLB(){},
fZ5:function fZ5(d){this.a=d},
frV:function frV(){},
frW:function frW(){},
frX:function frX(){},
frY:function frY(){},
frZ:function frZ(){},
fsb:function fsb(){},
fsc:function fsc(d){this.a=d},
fs8:function fs8(d){this.a=d},
fs9:function fs9(){},
fsa:function fsa(){},
fwp:function fwp(){},
fwq:function fwq(){},
fwr:function fwr(){},
fzp:function fzp(){},
fEF:function fEF(d){this.a=d},
fEG:function fEG(d){this.a=d},
cHi:function cHi(d,e){this.a=d
this.b=e},
cHj:function cHj(d,e){this.a=d
this.b=e},
aJj:function aJj(d,e,f){this.a=d
this.b=e
this.c=f},
bbo:function bbo(){this.b=this.a=0},
bbn:function bbn(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bz4:function bz4(){},
xn(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b0(B.o.v(w.gnz()),2,"0")+":"+B.a.b0(B.o.v(w.gGS()),2,"0")},
ijC(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bW(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.S()
u=A.L()
u.r=v.gp(0)
a5.c0(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.fP[l]*a7*0.075
j=k-w
j=A.bx(new A.a4(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.dh.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a4(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a4(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a4(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),P.ahu(F.rX,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.rX.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,P.ahu(F.rX,t))
w=A.L()
w.r=F.rX.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.m7.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.rX.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bV(a0,a1)
u=A.L()
u.r=F.m7.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bV(a0,a1)
u=A.L()
u.r=F.m7.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.fP[l]
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=F.m7.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.fP[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1.6
k.r=B.bp.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.w.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.hK.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bW(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,P.ahu(B.bp,1.8))
a4.restore()},
i0F(){var w,v=$.oz(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hg(u)},
aut(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aut=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aut)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$aut)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.u(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
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
return A.i($async$aut,v)},
auu(d){return C.i0G(d)},
i0G(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auu=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$auu)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hO("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cP,null),$async$auu)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.am.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auu,v)},
auw(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$auw)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i0F()
w=4
return A.b(C.aut(),$async$auw)
case 4:r=h
q=B.a.i(e)
p=B.dV.aN(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cQ.gcr().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.auu(r),$async$auw)
case 5:u=new A.a1z("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auw,v)},
auv(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$auv)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aut(),$async$auv)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.i.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cb.cC(0,B.cL.aN(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dL(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.auu(q),$async$auv)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auv,v)},
hu9(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cT.aw(999999)},
i0H(d){var w,v,u,t,s,r,q
try{w=A.ahV(d)
if(w==null)return d
v=w
if(J.Mn(v)>960||J.Mm(v)>960){s=v
r=J.Mn(v)>=J.Mm(v)?960:null
v=A.ahS(s,J.Mm(v)>J.Mn(v)?960:null,B.Qu,r)}s=v
u=A.anW(82).U6(s,B.zT)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cpA(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cpA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i0H(e)
$.cpw.n(0,s,t)
u=C.bGG(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpA,v)},
b58(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b58=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eB(l,",")?B.d.gal(J.lQ(l,",")):l
q=B.cL.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hu9()
w=7
return A.b(C.cpA(p,q),$async$b58)
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
n=A.ac(k)
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
return A.i($async$b58,v)},
cpx(d){var w=0,v=A.j(x.T),u,t,s
var $async$cpx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cpz(s),$async$cpx)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cQ.gcr().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpx,v)},
a9R(d){var w=0,v=A.j(x.H),u,t
var $async$a9R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hHJ(d)
if(t==null){w=1
break}$.cpw.W(0,t)
w=3
return A.b(C.bGF(t),$async$a9R)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9R,v)},
bGG(d,e){return C.isA(d,e)},
isA(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGG=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQ9
w=7
return A.b(n==null?$.aQ9=N.hfY():n,$async$bGG)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.mp(r,"thumbs","readwrite")
B.iE.mh(J.mo(p,"thumbs"),q,l)
w=8
return A.b(J.oC(p),$async$bGG)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ac(k)
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
return A.i($async$bGG,v)},
bGF(d){return C.isy(d)},
isy(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQ9
w=7
return A.b(o==null?$.aQ9=N.hfY():o,$async$bGF)
case 7:r=f
q=J.mp(r,"thumbs","readwrite")
B.iE.Gr(J.mo(q,"thumbs"),m)
w=8
return A.b(J.oC(q),$async$bGF)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGF,v)}},D,Au,Av,Z,Aw
J=c[1]
A=c[0]
B=c[2]
A8=c[65]
N=c[62]
Q=c[266]
A_=c[169]
S=c[61]
A9=c[240]
L=c[219]
H=c[35]
E=c[229]
T=c[125]
Aa=c[243]
U=c[108]
Ab=c[138]
Ac=c[120]
Ad=c[205]
A0=c[122]
Ae=c[239]
Af=c[45]
R=c[238]
A1=c[206]
Ag=c[260]
Ah=c[196]
Ai=c[209]
M=c[93]
A2=c[89]
Aj=c[176]
A3=c[134]
A4=c[179]
A5=c[204]
Ak=c[263]
A6=c[265]
Al=c[81]
G=c[264]
Am=c[137]
An=c[124]
A7=c[223]
Ao=c[34]
Ap=c[268]
V=c[123]
O=c[199]
Aq=c[210]
Ar=c[130]
W=c[267]
As=c[160]
X=c[253]
P=c[44]
F=c[99]
At=c[33]
I=c[107]
K=c[143]
Y=c[79]
C=a.updateHolder(c[7],C)
D=c[259]
Au=c[80]
Av=c[217]
Z=c[262]
Aw=c[261]
C.aq8.prototype={}
C.b0q.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bka(),f=h.x!=null&&h.zO(i).length===0
if(h.x!=null)w=f?B.b2:B.bD
else w=h.gUN()?B.bD:B.e2
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.br8,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.ffz,B.f,i,i,new A.o(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hl,i,i,i),B.T,D.fLE,B.ax,A.d(C.xn(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fHg,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.b8R,i,i,i,i,B.OD,i,i,i)
q=A.l(16)
p=A.K(B.bm,B.r,1)
o=A.K(B.b2.j(0.28),B.r,1)
n=A.hif(h.d)
o=A.p(B.z,C.b0p(A.fOO(h.e,n),30),B.f,i,i,new A.o(B.ma,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fCc,B.K,i,i)
m=A.l(14)
l=A.K(B.bm,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bF,D.fLX,B.af,A.p(i,A.x(A.a([D.h19,B.bF,A.d(A.Bn(h.c),i,i,i,i,i,i,D.fwP,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fi,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.n),i,i,i,i,O.an_,i,i,i)
p=A.l(16)
m=A.K(B.bm,B.r,1)
l=j.aTE("Original due",C.xn(h.r,!1))
n=j.aTE("Current due",C.xn(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.T,A.p(i,A.x(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaND(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Cz,i,i,1/0),B.T,j.clu(),B.P,j.c82(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bm,B.r,1)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.fMV,B.ax,A.d(q,i,i,i,i,i,i,D.fBp,i,i,i)],s),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIc()){q=A.l(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.T,A.p(i,A.x(A.a([D.h2s,B.P,A.bu(A.l(12),A.eb(new A.a5(1/0,88,A.b5(i,i,i,new A.Xk(h.ax,B.a_,D.fkl,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CB,i,i,i)],s))}p.push(B.aB)
p.push(D.fVj)
return A.p(i,A.x(A.a([r,new A.D(B.a18,A.x(p,B.al,i,B.e,B.h,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTE(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.acq,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fxS,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
clu(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaL(B.e2,u,"Not paid yet")
w=t.zO(null).length
v=w===0?B.b2:B.bD
return this.aaL(v,u,C.xn(t.x,!0))},
c82(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaL(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaL(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.acq,u,u,u)
v=A.U(d).k("N<1,h9>")
v=A.C(new A.N(d,new C.c8V(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.h,0,B.p)},
aaL(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.acq,w,w,w),1),new A.di(1,B.cn,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e4,w,w),w)],x.p),B.E,w,B.e,B.h,0,w,w)}}
C.bdC.prototype={
a4(d,e){new A.Xk(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.aql.prototype={
S(){return new C.aF9(A.a([],x.bp))},
ge3(){return this.c}}
C.aF9.prototype={
Y(){this.a3()
this.Jq()},
Jq(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3n(t.a.c),$async$Jq)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dRl(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jq,v)},
aVC(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bj).j(0.22)
w=A.l(10)
return A.bz(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bj).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b6u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVB(d){return this.aVC(d,null)},
Qg(d){return this.cp8(d)},
cp8(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qg=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Ii:B.eQ
w=7
return A.b(new A.i2().CT(72,900,900,n),$async$Qg)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Qg)
case 8:p=f
n=B.cQ.gcr().aN(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ac(l)
n=r.c
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qg,v)},
b3Q(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bj).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bu:B.bj
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bu:B.bj
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.h,0,B.p),1)
v=A.fs(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cg)
q=A.a([q,B.ae,u,A.bO(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.W(B.cB,s.a.d.a?B.bu:B.bj,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cg))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bEk,r,r,r)},
DM(d){return this.bEn(d)},
bEm(){return this.DM(null)},
bEn(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DM=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fK(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.ad(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c_(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c_(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.hif(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xj?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hP(B.w.j(0.55),!0,"Dismiss",a4,new C.dR4(),new C.dR5(a2,t,a5,r,new C.dR6(a2,t),o,n,j),B.eH,!0,x.y),$async$DM)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cX(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.R$=0
o.U$=s
o.R$=0
n.U$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fqW)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fpA)
w=1
break}a1=A.fOO(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xj?"male":"female"
w=7
return A.b(A.aji(a3,A.hqN(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DM)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xj?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c_(a3.gcl(),a3.gci(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)))a5.cT3(a2.a)
w=8
return A.b(A.aji(t.a.c,a5),$async$DM)
case 8:case 5:w=9
return A.b(t.Jq(),$async$DM)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DM,v)},
aWh(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bu:B.bj).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0p(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aS:B.av
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b8,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
T2(d){return this.cH2(d)},
cH2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$T2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hP(B.w.j(0.55),!0,"Dismiss",s,new C.dRo(),new C.dRp(t,d),B.ha,!0,x.y),$async$T2)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aji(t.a.c,d),$async$T2)
case 7:w=8
return A.b(t.Jq(),$async$T2)
case 8:case 1:return A.h(u,v)}})
return A.i($async$T2,v)},
Qf(d,e){return this.bPj(0,e)},
bPj(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lt(s,"Cancel","Delete",e.b+" \xb7 "+A.Bn(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qf)
case 3:if(!g){w=1
break}w=4
return A.b(C.fId(t.a.c,e.a),$async$Qf)
case 4:w=5
return A.b(t.Jq(),$async$Qf)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qf,v)},
agD(d){return this.ciV(d)},
ciV(d){var w=0,v=A.j(x.H),u=this,t
var $async$agD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dRi(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agD)
case 2:return A.h(null,v)}})
return A.i($async$agD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ey8
w=J.dI(m.d,new C.dRq())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dRr())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dRs())
w=A.l(18)
s=m.a.d.a
r=s?D.cEC:D.aE_
q=A.K(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.c5i,B.f,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.exu,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dRt(m),l,l,l,l,l,l,l),B.f,B.cW,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cD5("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bn(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.ba0(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.E,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.amX,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bj).j(0.12),B.r,1)
n=A.p(l,D.c_T,B.f,l,l,new A.o(B.cW.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bH_,l,l,1/0))}else{w=m.gcop()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bIG,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.h,0,B.p)},
ba0(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bj).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bj,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aS:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cD5(d,e){return this.ba0(!1,d,e)},
coq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zO(j).length,h=d.bjq()
if(d.x!=null){w=d.zO(j).length
v=w===0?B.cW:B.bD}else if(d.gUN())v=B.bD
else{if(h)w=B.cW
else w=k.a.d.a?B.bu:B.bj
v=w}if(d.x!=null){w=d.zO(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xn(u,!1)}else{u.toString
t="Paid "+C.xn(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xn(w,!1)+" \xb7 "+i+" missed":"Due "+C.xn(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUN()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bj).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cK,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.ma
o=A.K(d.gUN()&&d.x==null?B.bD.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hif(d.d)
o=A.p(B.z,A.d3(C.b0p(A.fOO(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.di(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIc())B.d.u(n,A.a([B.e7,A.W(B.Pv,B.cW.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.h,0,B.p),1)
n=A.Bn(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Ag.amL,A.A(A.a([o,B.bb,p,B.ae,A.x(A.a([n,B.bF,A.W(B.eI,(k.a.d.a?B.bu:B.bj).j(0.5),j,j,j,18)],m),B.dO,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dRk(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uU.prototype={}
C.amm.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bd
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.az(a0,A.p(a0,A.W(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aA9,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Hj,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dx(B.dM,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bDw,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cJ:B.bq,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.fl9)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wB,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lR,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hy,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bEP,a0,a0,a0,a0)}}
C.aX8.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bd?B.bd:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bq:B.cJ,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.uI,n,q))
return new A.D(B.da,A.x(o,B.l,q,B.e,B.N,0,B.p),q)}}
C.Ua.prototype={
S(){return new C.bhd()}}
C.bhd.prototype={
gc2P(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.ey3,D.ey9],l)
for(w=0;w<8;++w){v=D.a5x[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.I5:B.zD
q=t===s
r=A.W(r,q?B.ey:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.by(1,B.ba,A.d(v.c,n,1,B.a2,n,n,n,B.B1,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eP,A.x(A.a([new A.D(B.n2,new A.c7(B.aM,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dt(!0,new C.amm(v,q.d,q.e,new C.dh_(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dh0(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bFb,A.bI(D.h8_,n,new C.dh1(o,d),A.bo(B.b7,n,n,n,n,B.p4,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,n,D.bJz,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nB.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bg2(d,e,f){return new C.nB(this.a,e,d,f)}}
C.Ix.prototype={
x3(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ix(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGk(d){var w=null
return this.x3(w,w,w,w,w,d,w,w,w,w,w,w)},
cOG(d){var w=null
return this.x3(w,w,w,w,d,w,w,w,w,w,w,w)},
bg0(d,e,f){var w=null
return this.x3(d,w,w,w,w,w,w,w,e,w,f,w)},
cPk(d){var w=null
return this.x3(w,w,w,w,w,w,d,w,w,w,w,w)},
cPt(d){var w=null
return this.x3(w,w,w,w,w,w,w,w,w,d,w,w)},
cOE(d){var w=null
return this.x3(w,w,w,d,w,w,w,w,w,w,w,w)},
cPv(d){var w=null
return this.x3(w,w,w,w,w,w,w,w,w,w,w,d)},
cOB(d){var w=null
return this.x3(w,w,d,w,w,w,w,w,w,w,w,w)},
cOw(d){var w=null
return this.x3(w,d,w,w,w,w,w,w,w,w,w,w)},
Gj(d){var w=null
return this.x3(w,w,w,w,w,w,w,d,w,w,w,w)},
cPD(d,e,f,g,h,i,j,k,l,m,n){return this.x3(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cMa(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bSf(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Eb.gew(D.Eb))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7g)
q=l.$2("frame",D.a6A)
l=l.$2("texture",D.a6w)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cPD(p,u,t,q,r,A.rj(d.h(0,"ribbon"))?A.GZ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_L.prototype={
S(){return new C.aC7(A.a([],x.I),D.P3)},
ge3(){return this.c}}
C.aC7.prototype={
Y(){var w,v=this
v.a3()
v.f=A.Af(0,1)
w=$.ax()
v.z=new A.au(B.aw,w)
v.Q=new A.au(B.aw,w)
v.lj()
w=v.a
C.bEZ(w.c,w.d).bG(new C.dhG(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.ax()
u.U$=w
u.R$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.R$=0
v.a2()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LQ(s.c,s.d),$async$lj)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dhu(t,r))
t.ay1()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
gauA(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.u(v.d,v.r)},
ay1(){var w,v,u=this.gauA(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb4(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb4(0,w==null?"":w)},
chj(d){this.m(new C.dhr(this,d))
this.ay1()},
O8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nB(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTd(r.c,r.d,s),$async$O8)
case 3:w=4
return A.b(t.lj(),$async$O8)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oD(t.d,new C.dh2(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dh3(t,p))
t.ay1()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BS(p+1,B.cj,B.kV),$async$O8)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
Bw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauA()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTd(o.c,o.d,new C.nB(s,r,q,new A.V(p,0,!1))),$async$Bw)
case 3:w=4
return A.b(t.lj(),$async$Bw)
case 4:if(t.c==null){w=1
break}t.m(new C.dhv(t))
case 1:return A.h(u,v)}})
return A.i($async$Bw,v)},
OQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauA()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhb(r),s,null,!0,!0,x.y),$async$OQ)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEL(s.c,s.d,r.a),$async$OQ)
case 4:t.m(new C.dhc(t))
w=5
return A.b(t.lj(),$async$OQ)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UQ(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
za(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$za=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bw(),$async$za)
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
return A.b(C.Sb(s,r.r,o,p,q),$async$za)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hIw(s,r.x,r.r),$async$za)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LQ(s.c,s.d),$async$za)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nB(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bw(r.c,r.d,l),$async$za)
case 11:w=12
return A.b(t.lj(),$async$za)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$za,v)},
a1O(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bw(),$async$a1O)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz8(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.A3,new C.dhs(t),new C.dht())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mW("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new H.mW(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hk3(o,new H.rT(s,r,"",p,new H.v9(q.d,null,null,null,null,"","","")),null),$async$a1O)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1O,v)},
Oy(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Oy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bw(),$async$Oy)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.ahH,null,new C.dh7(t),s,!0,!0,!0,I.aaA,!1,!1,x.N),$async$Oy)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cOG(r)
t.m(new C.dh8(t,q))
s=t.a
w=7
return A.b(C.SO(s.c,s.d,q),$async$Oy)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
Y6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.ahH,null,new C.dhd(t),r,!0,!0,!0,I.aaA,!1,!1,x.e),$async$Y6)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dhe(t,s))
r=t.a
w=4
return A.b(C.SO(r.c,r.d,s),$async$Y6)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BS(0,B.e6,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$Y6,v)},
bV_(d){var w=d.bU(),v=B.a.b0(B.o.v(w.gci()),2,"0"),u=B.a.b0(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz8(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c22()
if(r.e)w=D.agl
else if(J.ct(r.d)){w=r.y
v=r.gz8(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fwa,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.ao3,new C.a_2(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.p(q,D.ffl,B.f,q,q,new A.o(q,q,q,A.l(18),A.a([new A.ab(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.xa,B.n),q,q,q,q,B.OH,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcLb(),q,q,q,q,q,q,!1,B.a4))
w.push(B.T)
w.push(A.hv(D.bWX,D.h7s,r.gaPj(),q))
B.d.u(u,w)}w=A.as(A.c9(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e0:B.BE
u=A.x(A.a([new A.D(D.bGg,w,q),A.E(A.JV(v,new C.dhE(r),J.ad(r.d)+1,q,r.gchi(),u,B.aM),1),r.bHh()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c5(q,D.ZT,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRD,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c22(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KU(B.e9,"AI",h.gbF9(),!0))
if(h.a.f)f.push(new C.KU(B.lT,"Cover",h.gbPT(),!1))
if(h.a.f)f.push(new C.KU(B.x2,"Header",h.gbKQ(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KU(B.v8,"Print",h.gcqs(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hd:B.jb
t=v?"Save":"Edit"
f.push(new C.KU(u,t,v?h.gcwL():new C.dho(h),!1))}if(h.a.f)f.push(new C.KU(B.i_,"Add page",h.gaPj(),!1))
v=C.hE2(h.y.Q)
u=h.gz8(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dMw
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kw.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.kQ,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kQ.j(0.85)
p.push(new A.by(1,B.ba,A.az(B.bY,A.x(A.a([k,B.bF,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amm(v,u,t+" \xb7 "+s+" "+r,new C.dhp(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
At(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$At=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bw(),$async$At)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a3D(B.d.aM(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dh4(t,p),s,null,!0,!0,x.N),$async$At)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.za(),$async$At)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.El(),$async$At)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FX("Swahili (Kiswahili)",!0),$async$At)
case 18:w=16
break
case 17:w=19
return A.b(t.cHF(o==="sw"?"Swahili (Kiswahili)":"English"),$async$At)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$At,v)},
a_5(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(E.kw.j(0.3),B.r,1),r=x.p
return new A.D(B.cw,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xa,B.a6),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.L2,w,w,w),A.d(g,w,w,w,w,w,w,B.F5,w,w,w)],r),B.E,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dhq(d,h),w,w,w,w,w,w,w),w)},
El(){return this.bUt()},
bUt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$El=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhh(r),a7,null,!0,!0,x.ei),$async$El)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eE("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dhi(o),a7,null,!0,!0,x.H).fv(new C.dhj(a6))
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
for(a1=0;a1<8;++a1){i=D.A3[a1]
J.c4(j,i.a)}w=8
return A.b(C.air(a0,a7,new C.dhk(o),d,l,e,j),$async$El)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ac(a8)
n=A.w(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).eq()
l=o
l.sih($.ax())
J.aTG(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.u(p,a4)
a7=m.b.h(0,a4).a
a7=j.bg2(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.u(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bw(j.c,j.d,l),$async$El)
case 11:w=12
return A.b(r.lj(),$async$El)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A3[a1].a)
a5=l.cMa(j,12,a7)
l=r.a
w=15
return A.b(C.SO(l.c,l.d,a5),$async$El)
case 15:if(r.c!=null)r.m(new C.dhl(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BS(0,B.e6,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cB4("Undo",new C.dhm(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$El,v)},
FX(d,e){return this.cHG(d,e)},
cHF(d){return this.FX(d,!1)},
cHG(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FX=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eE("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dhx(a0),k,null,!0,!0,x.H).fv(new C.dhy(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c4(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3S(m,new C.dhz(a0)),$async$FX)
case 10:w=8
break
case 9:w=11
return A.b(C.bGv(new C.dhA(a0),m,a2),$async$FX)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ac(a1)
q=A.w(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).eq()
o=a0
o.sih($.ax())
J.aTG(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.u(d,g)
j=J.u(p,g)
o.push(k.bg2(J.u(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bw(k.c,k.d,o),$async$FX)
case 12:w=13
return A.b(r.lj(),$async$FX)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cB4("Undo",new C.dhB(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FX,v)},
bHh(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dh5(v):u
r=A.aI(u,u,u,u,A.W(D.bSA,s?D.kQ:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hv(A.W(B.wQ,B.GJ,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GJ,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPt(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dh6(v):u
return A.bm(!0,new A.D(D.bG5,A.A(A.a([r,s,A.aI(u,u,u,u,A.W(B.eI,t<J.ad(v.d)?D.kQ:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_P.prototype={
S(){return new C.bhC(new A.au(B.aw,$.ax()))}}
C.bhC.prototype={
ga2W(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.a2()},
gbT4(){switch(this.ga2W()){case"cover":var w=D.dbt
break
case"book":w=D.d6I
break
default:w=D.dDg
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.kw.j(0.5),m=x.p,l=A.A(A.a([D.dMx,B.as,D.bLO,A.aI(p,p,p,p,B.lt,p,p,p,new C.djs(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jD(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.djt(q),q.ga2W()==="page",p,p,p,p))
if(q.a.d)k.push(A.jD(p,p,p,D.h2_,p,new C.dju(q),q.ga2W()==="book",p,p,p,p))
k.push(A.jD(p,p,p,D.fPG,p,new C.djv(q),q.ga2W()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bz(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kq,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbT4(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.L_,p,p,p)
w.push(A.n8(p,B.c.j(0.08),r,B.hs,new C.djw(q,s),p,p,p,p))}return A.eH(p,E.Cc,A.c9(A.x(A.a([l,B.T,D.h5j,B.am,k,B.af,j,B.P,A.bZ(B.bI,w,B.br,p,6,6),B.aB,A.dh(D.bWU,p,D.h65,new C.djx(q,d),A.bo(B.b7,p,p,p,p,B.p4,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.ax,D.h0d],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,p,B.fu,p,p,B.ah),p,p,p,B.OE,p,B.d7,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_N.prototype={
S(){return new C.aCa(A.a([],x.gA))},
ge3(){return this.c}}
C.ag9.prototype={}
C.aCa.prototype={
Y(){this.a3()
this.lj()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sg(p.c,p.d),$async$lj)
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
return A.b(C.bEZ(r.c,q),$async$lj)
case 6:j=e
i=J
w=7
return A.b(C.LQ(t.a.c,q),$async$lj)
case 7:m.push(new l.ag9(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dhV(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
bbh(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
R2(d,e){return this.ciS(0,e)},
ciS(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$R2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ee(new C.dhU(u,e),!0,null,x.y)),$async$R2)
case 2:t=g
w=3
return A.b(u.lj(),$async$R2)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aVz)
return A.h(null,v)}})
return A.i($async$R2,v)},
FZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aVu)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahJ(s.c,s.d),$async$FZ)
case 5:q=e
w=6
return A.b(t.lj(),$async$FZ)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.R2(0,B.d.fb(t.d,new C.dhZ(q))),$async$FZ)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sb(p,s.f,r,n,o),$async$FZ)
case 10:m=e
w=11
return A.b(t.lj(),$async$FZ)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aVz)
case 1:return A.h(u,v)}})
return A.i($async$FZ,v)},
Qu(d,e){return this.cuu(0,e)},
cuu(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhY(t,e),s,null,!0,!0,x.y),$async$Qu)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a43(s.c,s.d,e.a),$async$Qu)
case 4:w=5
return A.b(t.lj(),$async$Qu)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qu,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHk(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(E.kw.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.p(n,A.x(A.a([D.dMy,B.af,D.ex5,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kQ.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b8,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcL7(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(E.kw.j(0.85),B.r,1.6)
s=A.az(n,A.p(n,D.c41,B.f,n,n,new A.o(B.w.j(0.3),n,A.K(E.kw.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.di_(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(E.kw.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bb,D.bMc,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fva,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.hl,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.ca3,B.n),n,n,n,Aw.Oq,D.bE_,n,n,n)
if(o.e)k=D.agl
else k=k.length===0?D.bec:A.cm(new C.di0(k))
return A.c5(n,D.ZT,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRD,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHk(d){var w,v,u=this,t=null,s=u.bbh(d),r=d.c,q=x.p,p=A.a([A.bR(0,new A.dx(B.dC,B.z,B.f,new A.a5(300,420,new C.a_2(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.az(t,A.p(t,D.c3j,B.f,t,t,new A.o(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhS(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fuO,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kQ.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dhT(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KU.prototype={}
C.a_2.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.A3,new C.cQj(m),new C.cQk()),j=m.c,i=D.Eb.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mt:B.b8
v=new C.cQl(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.etN,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b5(l,l,l,new C.beP(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.ao4,8,0.85,2.2),v.$4(D.bIZ,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ao4,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bIV,A.b5(l,l,l,new C.beG(h,l),B.az),l),0,0,0))
r=A.W(D.aCY[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aA9,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cJ,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bJq,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b5(l,l,l,new C.aJd(l),D.fke),l,l,l,46,0,l))
return A.p(l,A.bu(D.aeX,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aeX,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.beP.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e0()
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
j=new A.aH(m.r,B.aj,null,null,l)
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
m=new A.bw()
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
C.beG.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.f9A,new A.ca([w,0,-1,1]),new A.ca([0,v,1,-1]),new A.ca([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aH(k,B.aj,null,null,s)
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
C.uV.prototype={}
C.a_l.prototype={
S(){return new C.beN()}}
C.beN.prototype={
gox(){var w=this.d
return w===$?this.d=this.a.c:w},
gz8(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aP),$.ax())}return v},
gaDw(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aP),$.ax())}return v},
gat7(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aP),$.ax())}return v},
t(){var w=this,v=w.gz8(0),u=v.U$=$.ax()
v.R$=0
v=w.gaDw()
v.U$=u
v.R$=0
v=w.gat7()
v.U$=u
v.R$=0
w.a2()},
atL(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jD(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d8S(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
azw(d){var w=null,v=B.c.j(0.07)
return A.bz(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gox(),a0=f.gz8(0),a1=a0.a.a,a2=f.gaDw(),a3=a2.a.a,a4=f.gat7(),a5=d.bg0(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dx(B.dC,B.z,B.f,new A.a5(270,370,new C.a_2(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azw("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9g(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azw("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9h(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.A3[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bG(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.az(e,A.x(A.a([p,B.cS,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9i(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.az(e,A.p(e,A.W(D.aCY[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9j(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azw("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9k(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vS,e,e,e)
m=A.a([],w)
for(l=D.Eb.gdP(D.Eb),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bG(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.az(e,A.x(A.a([j,B.bF,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9l(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vS,e,e,e)
k=f.gox()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.h_E,B.af,d,B.aO,a0,B.T,a2,B.aB,D.h5R,B.P,v,B.aB,D.h_N,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l3(e,9,""+B.i.V(f.gox().f),36,18,new C.d9m(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vS,e,e,e),B.am,f.atL(D.a7g,f.gox().r,new C.d9n(f),D.dGv),B.af,A.d("BORDER",e,e,e,e,e,e,M.vS,e,e,e),B.am,f.atL(D.a6A,f.gox().w,new C.d9o(f),D.dGB),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vS,e,e,e),B.am,f.atL(D.a6w,f.gox().x,new C.d9q(f),D.dI3),B.am,A.iZ(e,B.b7,e,B.ag,e,new C.d9r(f),e,e,e,D.fUP,f.gox().z),B.bx,A.bI(D.fZl,e,new C.d9s(f,a6),A.bo(B.b7,e,e,e,e,B.p4,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.anz,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJd.prototype={
a4(d,e){var w,v,u,t=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bw())
u=A.L()
u.san(D.caL.aD(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bk8.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.san(D.c9L.aD(0,new A.a4(0,0,a2,a3)))
a4.aF(new A.a4(0,0,a2,a3),w)
v=B.i.cB(a1/112)
u=new A.e0()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dbs[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.bx(i,B.hE)
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.w,0.45)
e.toString
g.san(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).aD(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=E.kw.j(0.55).gp(0)
a4.aF(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=E.kw.j(0.4).gp(0)
a4.aF(new A.a4(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.san(D.c93.aD(0,new A.a4(0,r,a2,q)))
a4.aF(new A.a4(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.w.j(0.5).gp(0)
p.y=B.kY
a4.aF(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bi0.j(0.72).gp(0)
a4.aF(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bS(B.z,0.5,B.x,d,0,A.a([D.bqz.j(0.22),B.L],w),d,d).aD(0,A.bV(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aE(d){return!1}}
C.bcZ.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bM(new A.o(A.ap(D.kQ,D.bvW,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.Me,o,o,B.n),B.bk,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aNe,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kw.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.r0,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b6c,u,D.caJ,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b5(o,o,o,new C.aJd(o),D.fk9),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aX8(p.y,r,L.j6,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bz(o,B.eM,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fJI,!0,B.a7,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bz(o,B.eM,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,L.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fA9,!0,B.a7,B.AX,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fJA,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,11,B.cJ,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.p(o,o,B.f,D.Gt.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.Gt.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Gt.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zh(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fDn,B.a.aA(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b3(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,L.j6.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.c9(A.x(n,B.E,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.ig,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,L.j6.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bu(B.Me,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bIr,A.x(s,B.al,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bM(new A.o(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bk,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Me,v,D.cbg,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amn.prototype={
S(){return new C.amo(new A.eE(0,$.ax()),new C.bU3(),new C.amG(),D.hIE,null,null)},
gd1(){return this.d}}
C.a20.prototype={
a7(){return"_Step."+this.b}}
C.amo.prototype={
gCF(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEV(w.c,6,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gU5(){var w=this.ghd(0)
return w.gzs()==null?"Babu":B.a.i(w.gzs().b)},
Y(){var w,v=this
v.a3()
w=v.ghd(0).gzs()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.q6(new C.bSp(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2T("Come closer, my children. I am "+v.gU5()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.U$=$.ax()
v.R$=0
w.bwH()},
a2T(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dg(D.am9,new C.bSj(w))},
bt3(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bSs(v))},
aed(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsW(){return this.baP()},
baP(){var w=this,v=w.gCF()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bSk(w))
w.a2T(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.me,new C.bSl(w))},
cMh(){var w=this
w.m(new C.bSo(w))
w.a2T(w.gCF()[w.as].a)},
Ld(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.ae2)return
w=p.gCF()
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
t.r=s.a+1.5}q=new A.e0()
q.cU(v*7+d)
p.m(new C.bSn(p,d,u,q))
p.a2T(u?D.drn[q.aw(4)]+" "+w[p.as].d:D.dnW[q.aw(3)]+" "+w[p.as].d)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCF()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHb(t.at,t.ay,p)
t.m(new C.bSq(t,s))
t.a2T(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BS(t.a.d,s),$async$kO)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BT(r.d,r.c.a,"fire",t.at*10),$async$kO)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bSr())
w=1
break
case 4:++t.as
t.baP()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.YT,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.eo(A.b5(v,v,v,new C.aXd(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.ccT(0),B.b3,w.bSe()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ccT(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Qq,s,s,s,new C.bSm(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCF().length;++w){v=t.as
if(w<v||t.Q===D.b2v)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bDK,s,s,s,22))}p=A.E(A.x(A.a([D.fRy,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.E,s,B.e,B.h,0,B.p),1)
v=A.l(14)
u=A.K(B.fL,B.r,1)
return new A.D(D.bJD,A.A(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.i.V(t.cy*100)+"%",s,s,s,s,s,s,B.iH,s,s,s),B.f,s,s,new A.o(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hl,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bSe(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghd(0).gzs()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qq.j(0.96)
s=A.l(22)
r=A.K(B.cV,B.r,3)
q=A.b5(i,i,i,new C.bpK(w,i),B.az)
p=A.d(j.Q===D.ae2?j.gU5()+" asks":"Elder "+j.gU5(),i,i,i,i,i,i,D.aWO,i,i,i)
o=j.db
o=B.a.aA(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.bY,A.A(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aX1,i,i,i)],n),B.E,i,B.e,B.h,0,B.p),1)],n),B.E,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbt2(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aaj("Sit down by the fire",j.gbsV()),i,i,i)
break
case 1:v=A.as(j.aaj("Ask me, Elder",j.gcMg()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCF()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lG,2.5,B.r,-1)
v.push(A.az(i,A.p(i,A.d(u[m],i,i,i,i,i,i,D.aWY,B.K,i,i),B.f,i,D.afz,new A.o(D.al7,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,V.wD,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bSg(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kc:Ak.ar4
u=A.W(u,v?B.ep:D.lG,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.ep:D.lG,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCF().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aaj(v,j.gqs(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCF().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aXf,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRt(u)
q=C.aRt(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.act,i,i,i))}v.push(B.P)
v.push(j.aaj("Back to the games",new C.bSh(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.T,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aEv,i,B.n),i,i,i,B.yR,B.bl,i,i,i)},
aaj(d,e){var w=null,v=A.l(16),u=A.K(B.cV,B.r,2)
return A.az(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.L2,w,w,w),B.f,w,w,new A.o(D.lG,w,u,v,w,w,B.n),w,w,w,w,D.bHk,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpK.prototype={
a4(d,e){P.hjO(d,e.ej(B.J),e.gdk()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aC8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bU3.prototype={}
C.tj.prototype={}
C.bpL.prototype={}
C.amG.prototype={
MG(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ifP(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXd.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.Gy(l.d.MG(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cBJ(d,j)
l.bQN(d,j)
l.cK2(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.op(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.san(A.we(B.J,r,A.a([D.buE.j(0.55*s),F.NH.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bTW(l,d,j,i)),new A.y(540,new C.bTX(l,d,j,i)),new A.y(546,new C.bTY(l,d,j,i)),new A.y(574,new C.bTZ(l,d,j,i)),new A.y(612,new C.bU_(l,d,j,i)),new A.y(650,new C.bU0(l,d,j,i)),new A.y(656,new C.bU1(l,d,j,i))],x.E)
B.d.b_(n,new C.bU2())
for(m=0;m<7;++m)n[m].b.$0()
l.bHD(d,j,i)
l.bUr(d,j)
t.restore()
$.S()
t=A.L()
t.san(A.we(new A.r(w/2,v*0.6),e.gaox()*0.75,A.a([B.L,D.bhV],p),A.a([0.55,1],o),B.x,k,k,0))
d.aF(new A.a4(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cBJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e0()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.etk),C.iH(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aH(l.r,B.aj,null,null,k)
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
s.r=D.bkG.gp(0)
s.d=B.bG
s.e=B.dQ
d.af(l,s)}},
bQN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBs[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bW(new A.r(p,m),n*0.74,q*0.5)
k=Ab.yD.j(v)
$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=k.gp(0)
d.c0(l,j)
q=A.bW(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.wh.j(u).gp(0)
d.c0(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=D.aiu.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cK2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bEj(d,D.etg,0.9,e,D.hEi,!1,!1,D.b2s,1,!1)
w=$.S().r
v=x.v
u=new A.aH(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bw())
t=A.L()
t.r=D.akr.gp(0)
d.af(u,t)
C.bEj(d,D.eti,0.95,e,D.hEd,!1,!1,D.b2t,1,!0)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ce(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ce(431,553,421,548))
t.E(new A.bw())
u=A.L()
u.r=F.Ga.gp(0)
d.af(t,u)
u=A.bW(D.eth,8,28)
t=A.L()
t.r=D.bx1.gp(0)
d.c0(u,t)
C.bEj(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hEj,!0,!1,D.XG,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c0(A.bW(new A.r(s+q*16,r-6),16,11),C.iH(D.aki,1.8))
u=q<0
C.bEj(d,new A.r(s-q*6,r),0.62,e,D.hEl,!1,u,D.XG,2.2,!1)
C.bEj(d,new A.r(s-q*32,r+4),0.58,e+1,D.hEh,!1,u,D.XG,2.2,!1)
this.bXa(d,D.esW,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bW(new A.r(o,n),8,11)
k=p===1
j=k?D.ake:D.akQ
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=j.gp(0)
d.c0(l,i)
l=k?D.ake:D.akQ
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
u=A.bW(D.a9s,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aiT.gp(0)
d.c0(u,t)
u=A.bW(D.a9s.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bmS.gp(0)
d.c0(u,t)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bw())
u=A.L()
u.r=D.bn3.gp(0)
d.af(t,u)
u=D.a9s.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ic.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ce(180,588+w*(h?6:0),178,595))
d.af(v,C.iH(D.aiT,3.5))},
bXa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.b=B.aa
m.c=2
m.r=D.Z6.gp(0)
m.d=B.bG
m.e=B.dQ
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bW(k,17,32)
v=$.S()
r=A.L()
r.r=D.G8.gp(0)
d.c0(w,r)
r=A.bW(k.a5(0,D.esn),7,26)
w=A.ap(D.G8,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c0(r,q)
v=new A.aH(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bw())
s=A.L()
s.r=D.G8.gp(0)
d.af(v,s)
s=A.bW(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.G8.gp(0)
d.c0(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iH(D.Z6,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iH(D.Z6,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iH(D.bpQ,1.4))
d.ah(k.a5(0,D.evk),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iH(D.G8,2.4))},
bUp(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bW(new A.r(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bvF.gp(0)
a6.c0(u,t)}}u=A.bW(D.a9u.a5(0,B.cz),17,52)
$.S()
t=A.L()
t.r=D.bht.gp(0)
a6.c0(u,t)
t=A.bW(D.a9u.a5(0,B.cz),12,44)
u=D.bl5.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c0(t,s)
for(r=0;r<3;++r){v=D.dnn[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=7
o.r=D.Gl.gp(0)
o.d=B.bG
o.e=B.dQ
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BR.j(0.6)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dQ
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f5G,D.f6e,D.f7k,D.f7F,D.f7i]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bsW,D.bpa,D.bv5][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aH(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kq(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kq(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bw()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.akO.j((1-a5)*0.9)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aiu.j(0.1*(1-a5))
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bUr(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bxc.j(0.18*p)
$.S()
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=D.bqE.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c6d(d,e){switch(d){case 0:return e.b?D.hEe:D.b20
case 1:return e.b?D.hEk:D.b1Z
case 2:return D.b1Y
case 3:return D.b1X
case 4:return D.b2_
default:return D.b21}},
aDK(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rm(d,e,f,g){var w,v=this,u=D.a6I[e],t=v.c6d(e,g),s=new C.bpL(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6I[e],l=e===0
m=B.i.D(((l?D.aN6:D.aNc).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9z
s.as=D.EC
if(l){s.a=o?v.aDK(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.EC
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.esv
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.etR
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
s.Q=D.ewg
s.as=D.aNp}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDK(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDK(f,e*3)
s.b=0.5
s.c=0.4}}C.hCE(d,u.a,u.b*1.2,t,s,f,e,null)},
bHD(d,e,f){var w=new C.bTV(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.agi.prototype={
a7(){return"_Stand."+this.b}}
C.aef.prototype={}
C.ly.prototype={}
C.bSF.prototype={
bCe(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Ge(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bSG())
return r},
arN(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNs(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amV(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzs(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.b_(w,new C.bSH(this))
return B.d.gH(w)}}
C.auL.prototype={}
C.zC.prototype={}
C.alf.prototype={
gCb(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bNt(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MV.prototype={
gapP(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCb(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d2y(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapP(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ly(B.a.i(s.a),p,B.d.cn(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbb.prototype={}
C.aai.prototype={}
C.bis.prototype={}
C.agg.prototype={}
C.aky.prototype={
S(){return new C.akz(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akz.prototype={
gMX(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEV(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gbba(){var w,v=this,u=v.e
if(u===$){w=v.q6(v.gccV())
v.e!==$&&A.bD()
v.e=w
u=w}return u},
Y(){this.a3()
this.gbba().fX(0)},
t(){this.gbba().t()
this.bwC()},
fX(d){this.m(new C.bLC(this))},
ccW(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fG(0,v)
if(w.c!=null)w.m(new C.bLx())},
b9w(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMX()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bis(u,(u+0.5)/v,w[t.x].b[u]))},
fG(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLD())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c92()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMX()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atj(v,0.8,B.cV)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atj(m.cy,0.8,G.np)
m.b_1("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atj(q,0.88,D.lG)
p=m.gMX()[m.x]
n=p.c
if(u===n){m.b_1("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atj(d,e,f){var w,v,u,t=new A.e0()
t.cU(B.i.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agg(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_1(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qv()}},
c92(){var w=this
if(w.x+1>=w.gMX().length){w.Qv()
return}++w.x
w.b9w()},
Qv(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMX().length
r=C.bHb(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bLv())
w=2
return A.b(C.BS(u.a.d,r),$async$Qv)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BT(t.d,t.c.a,"catch",u.z),$async$Qv)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bLw())
return A.h(null,v)}})
return A.i($async$Qv,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ccU()
else w=v.ch?v.ccX():A.as(new A.D(B.eA,A.x(A.a([D.aYd,B.P,D.fTf,B.T,D.fZq,B.e3,C.uz("Play",v.geX(v),B.cV,B.he,D.fB)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tI("Calabash Catch",w,B.f7,u)},
ccX(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hC:B.HP
p.push(A.W(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMX()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aWN,r,r,r))
p.push(B.bb)
v=A.l(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iH,r,r,r),B.f,r,r,new A.o(B.bw,r,r,v,r,r,B.n),r,r,r,r,B.CC,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.l(18)
t=A.K(B.cV,B.r,3)
return A.x(A.a([new A.D(D.bF6,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fDf,B.K,r,r),B.f,r,r,new A.o(D.qq,r,t,v,r,r,B.n),r,r,r,B.f2,B.bl,r,r,1/0),B.am,A.E(A.cm(new C.bLB(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ccU(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q2,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMX().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.W0,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cw(A.a([D.beU,u,t,B.aO,new C.Iz(s,r,w.cx,v),B.aO,A.as(C.uz("Back to the games",new C.bLu(w),B.cV,B.kb,D.fB),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdE.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.san(A.jG(B.J,new A.r(0,a0),D.d5g,G.aBJ,B.x,e))
a4.aF(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.NL.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aH(a2.r,B.aj,e,e,w)
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
w.r=D.bm2.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ce(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ce(r+14,t,r+26,w))
a2.E(new A.bw())
w=A.L()
w.r=D.ahv.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cqJ[q]
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.ahv.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.agO.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bn0.gp(0)
a4.aF(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.aj9.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bW(new A.r(u,s),12,54)
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lG.j(0.6).gp(0)
a4.c0(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.aie.gp(0)
a4.O(D.erK,14,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.brY.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.erL,D.esS,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.san(new A.am7(D.ev1,46,D.ddW,B.vj,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bW(D.ev8,8,12)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c0(m,l)
k=new A.iF(new A.er(n.c,e,e,B.cM,e,e,e,e,e,e,D.fB4),B.K,B.c1,new A.jo(1),e,e,3,e,B.c2,e,B.cx)
k.nB(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.bW(B.cK,m.gba(m)+8,l),B.fR)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.qq.gp(0)
a4.aq(j,l)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lG.gp(0)
l.b=B.aa
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.ijC(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dN,(w+1)/2)
h=A.bW(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.S().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ce(h.gbE().a,s+8,w+8,s))
a3.E(new A.bw())
m=A.L()
m.r=D.ZZ.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.BR.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.np.gp(0)
a4.aF(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bm8.gp(0)
a4.c0(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fE(e,B.cx,e,e,e,A.cS(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cV.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.DP,e,e),"+"+a2),B.a7,B.c1,e,B.dJ,B.c2)
k.eo()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QS.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b5(v,v,v,new C.aC6(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cS,A.p(v,A.d(w.d,v,1,B.a2,v,v,v,D.ftC,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n3,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
gZ(d){return this.e}}
C.aC6.prototype={
a4(d,e){var w=e.ej(B.J),v=e.gdk(),u=this.c?0.8:0
return P.hjO(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAA.prototype={}
C.avm.prototype={
S(){return new C.avn(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.avn.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hIg(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gaFN(){var w=this.z
return w===$?this.z=this.XA(0):w},
gj2(){var w,v=this.Q
if(v===$){w=this.gkT()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
XA(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAA(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAA(v[t],u[t],-1))
v=new A.e0()
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
u=u.goE()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qJ()}this.bx4()},
cSn(d,e){var w,v,u,t,s,r=this
if(d>=r.gj2().length||r.gj2()[d]!==-1||B.d.q(r.gj2(),e))return
w=r.gaFN()[e]
v=r.gkT()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.crj(r,e,w,v))
A.cz(B.lM,new C.crk(r))
return}++r.r
u=A.bn(null,B.hN,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.crl(r,d,e,w,v))
u.cs(0)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkT()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.crm())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.crn(t,r))
w=5
return A.b(C.BS(t.a.d,r),$async$kO)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BT(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cro())
w=1
break
case 4:for(o=t.as,n=new A.dn(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goE()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qJ()}o.a8(0)
t.m(new C.crp(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q2,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.W0,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tI(q,A.cw(A.a([D.agj,w,v,B.aO,new C.Iz(u,t,r.ch,p),B.aO,A.as(C.uz("Back to the games",new C.crf(d),B.cV,B.kb,D.fB),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f7,p)}w=r.gkT()
v=r.e
s=w[v]
return new C.tI(q,new A.D(B.t7,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aWI,B.K,p,p),A.E(A.cm(new C.crg(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.f7,p)}}
C.bd7.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cRn(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.JS)
$.S()
w=A.L()
w.r=D.lH.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.erw)
u=A.L()
u.r=B.qs.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e6.az(0,B.i.D(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aH(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.ce((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),i=new A.uT(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jN(b1));--h
g=new A.BP(i,h)
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
b6.af(new A.aH(l,d,b0,new A.ca([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),k=new A.uT(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jN(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a4.r=D.Gy.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bG
b6.af(new A.aH(l,a2,b0,new A.ca([new A.BP(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.jP()
a5=n[a0].W0(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bW(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.bc.gp(0)
b6.c0(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iF(D.ft5,B.a7,B.c1,new A.jo(1),b0,b0,b0,b0,B.c2,b0,B.cx)
a8.eo()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.azk.prototype={
S(){return new C.azl(A.aR(x.S))},
gd1(){return this.d}}
C.azl.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJa(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
Y(){this.a3()
this.b9F()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9F(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dg(B.t2,new C.cGg(this))},
bqE(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkT()[v.e]
if(w.e[d]===w.b)v.m(new C.cGo(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cGp(v,d))
A.cz(B.iR,new C.cGq(v))}},
cXR(){var w=this
if(!w.as&&w.f<w.gkT()[w.e].d.length)w.m(new C.cGr(w))},
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
t.m(new C.cGs(t,s))
w=5
return A.b(C.BS(t.a.d,s),$async$kO)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BT(q.d,q.c.a,"who",t.r),$async$kO)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cGt())
w=1
break
case 4:t.m(new C.cGu(t))
t.b9F()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkT().length+" guessed",a2,a2,a2,a2,a2,a2,B.q2,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.W0,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tI(a1,A.cw(A.a([D.bf4,w,v,B.aO,new C.Iz(u,t,a0.ax,a2),B.aO,A.as(C.uz("Back to the games",new C.cGi(a3),B.cV,B.kb,D.fB),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f7,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkT()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.L8,B.K,a2,a2),B.T,A.as(A.lH(new C.cGj(a0,r),a2,B.b0,B.hN,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cV,2,B.r,-1)
k=o+1
w.push(new A.rb(new A.bq(0,1,u),new C.cGk(),A.p(a2,new A.c7(B.aM,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qM(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o6,a2,a2,a2),D.lG,a2,12,a2),B.as,new A.by(1,B.ba,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fFU,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qq,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cw,B.bl,a2,a2,a2),B.b0,B.iR,a2,new A.bf("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.h6i,a2,a2,!0,a2,a2,a2,a0.gcXQ(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lH.j(0.2)
q=A.l(16)
p=A.K(D.lH,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.T,C.uz(v,a0.gqs(a0),B.cV,B.jt,D.fB)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cV.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.fj:B.cV,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xz:a2
t.push(new A.rb(new A.bq(0,i,u),new C.cGl(),A.az(a2,A.p(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afs,new A.o(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cGm(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mf,a2,new A.bf("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fU,t,B.br,a2,10,10))}return new C.tI(a1,A.cw(w,a2,a2,B.an8,a2,a2,B.ah,!1),B.f7,a2)}}
C.aAk.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aHC.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.ag4.prototype={
arl(d){},
arR(){var w=this,v=w.q6(new C.f8G(w))
v.fX(0)
w.M4$!==$&&A.aQ()
w.M4$=v}}
C.aLq.prototype={
gbn4(d){var w=this.c
return B.a.aA(w,0,Math.min(this.d,w.length))},
W8(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dg(D.am9,new C.fiQ(w))},
bt1(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amw.prototype={
S(){return new C.amx(new C.amG(),A.a([],x.t),new A.eE(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amx.prototype={
gMV(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEV(w.c,10,w.e,!0)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqA(){var w=this.r
return w===$?this.r=new C.aLq(new C.bTr(this)):w},
gaqa(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMV()[v].c)u.push(1)
return u.length},
gbmo(){var w=this.ghd(0)
return w.gzs()==null?"Elder":B.a.i(w.gzs().b)},
Y(){this.a3()
this.arR()},
t(){var w,v=this
v.gqA().t()
v.f.t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwK()},
cMt(){var w=this
w.m(new C.bTo(w))
w.gqA().W8(w.gMV()[w.x].a)},
Ld(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqA()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qe$.a
v.ax=u
v.ay=u+1
v.m(new C.bTm())
A.cz(B.hN,new C.bTn(v))},
bqA(){var w=this.gaqa(0)/this.gMV().length*100
if(w>=90)return D.f2x
if(w>=75)return D.f0x
if(w>=60)return D.eSa
if(w>=45)return D.eVA
return D.eMA},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cuY()
w=A.bR(0,new A.eo(A.b5(m,m,m,new C.btO(n,n.qe$),B.az),m),0,0,0)
if(!n.Q){v=D.qq.j(0.96)
u=A.l(20)
t=A.K(B.cV,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbmo()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aXC,B.K,m,m),B.T,C.uz("Start the test",n.gC1(),B.cV,B.jb,D.fB)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gMV()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXE,m,m,m)
if(n.Q){t=n.gqA()
t=t.d<t.c.length}else t=!1
if(t)u=D.fly
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.BR,4,B.r,-1)
s.push(A.az(m,A.p(m,A.d(q[r],m,m,m,m,m,m,D.fwS,B.K,m,m),B.f,m,D.afs,new A.o(D.bi_,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Ox,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bTp(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fU,s,B.br,new A.bf("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oF(u,B.n_,A.pZ(),B.b0,B.b0,A.LN())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tI("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f7,m)},
cuY(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqA(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMV()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cV,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fBn,B.K,i,i)
r=A.d("Signed by Elder "+j.gbmo(),i,i,i,i,i,i,D.fA1,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fFe,i,i,i),D.eEi],q)
o=A.d(h.b,i,i,i,i,i,i,D.fHb,i,i,i)
n=j.gaqa(0)
m=j.gMV()
u=A.p(i,A.x(A.a([D.fSt,B.ax,s,r,B.T,new A.an(B.z,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.act,i,i,i),B.P,D.au0],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qq,i,t,u,i,i,B.n),i,i,i,i,B.fu,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Iz(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.h7m,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bw,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fCy,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fEQ,i,i,i)],q),B.E,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dq,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cw,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uz("Back to the games",new C.bTi(j),B.cV,B.kb,D.fB),i,i,i))
return new C.tI("Village School",A.cw(s,i,i,B.bS,i,i,B.ah,!1),B.f7,i)}}
C.btO.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qe$.a
a0.Gy(e.f.MG(a1))
w=C.heZ(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqA()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d_s[s]-6
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=D.Gl.gp(0)
a0.aF(new A.a4(u,340,u+12,450),r)}u=A.bx(D.aat.cq(10),B.i4)
$.S()
r=A.L()
r.r=D.BR.gp(0)
a0.aq(u,r)
r=A.bx(D.aat,B.ir)
u=A.L()
u.san(A.jG(new A.r(30,96),new A.r(420,346),D.djk,f,B.x,f))
a0.aq(r,u)
q=new A.e0()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bW(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c0(o,r)}u=A.L()
u.r=I.ajZ.gp(0)
a0.aF(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aF(D.fcX,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aF(D.fd0,u)
u=A.bx(D.fcR,B.iF)
r=A.L()
r.r=D.ZZ.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqA().gbn4(0)
m=A.fE(f,B.cx,f,7,f,A.cS(f,f,f,f,f,f,f,f,f,D.fJt,u+(t?"|":"")),B.a7,B.c1,f,B.dJ,B.c2)
m.nB(346)
J.br(v.save())
u=A.i_(D.aat)
r=$.mn()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i_(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a4(u,r,u+40,r+90),B.fR)
u=A.L()
u.r=D.by2.gp(0)
a0.aq(r,u)}}else{m=A.fE(f,B.cx,f,f,f,D.ftl,B.K,B.c1,f,B.dJ,B.c2)
m.nB(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqA().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghd(0).gzs()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f8H(d,a0,i,t,h,D.esH)),new A.y(520,new C.f8I(a0,d,t)),new A.y(575,new C.f8J(a0,d,t)),new A.y(585,new C.f8K(this,a0,d,t)),new A.y(615,new C.f8L(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.f8M())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ccY(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aH(p.r,B.aj,null,null,o)
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
n.ab()}}n.E(new A.bw())
return n},
aE(d){return!1}}
C.amu.prototype={
S(){return new C.amv(new C.amG(),A.T(x.S,x.i),new A.eE(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amv.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hI5(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gj2(){var w=this.z
return w===$?this.z=this.FN(0):w},
gaM2(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FN(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cn(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FN(0):r).length);++v}s.Q=w
r=w}return r},
FN(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e6(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e0()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f0(u,new C.bT4())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a3()
this.arR()},
t(){var w,v=this
v.e.t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwJ()},
arl(d){var w,v,u,t,s,r=this,q=r.gj2().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cn(u===$?r.z=r.FN(0):u,v)
s=r.gaM2()
s[v]=s[v]+(450*(t+0.5)/q-r.gaM2()[v])*Math.min(1,w)}},
d2d(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj2().length)return
w=v.y
if(w===-1){v.m(new C.bTf(v,d))
return}if(w===d){v.m(new C.bTg(v))
return}v.m(new C.bTh(v,B.d.cn(v.gj2(),v.y),d,B.d.cn(v.gj2(),d)))},
cNa(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FN(0):u).length))break
t=s.gkT()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FN(0):u)[v]]===v);++v}s.m(new C.bTa(s,B.d.cD(w,new C.bTb())))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkT().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bTc(t,s))
w=5
return A.b(C.BS(t.a.d,s),$async$kO)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BT(q.d,q.c.a,"lineup",t.r*10),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bTd())
w=1
break
case 4:t.m(new C.bTe(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkT().length+" lines right",k,k,k,k,k,k,B.q2,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tI("Line Up",A.cw(A.a([D.agj,w,B.aO,new C.Iz(v,u,l.ch,k),B.aO,A.as(C.uz("Back to the games",new C.bT6(d),B.cV,B.kb,D.fB),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f7,k)}w=A.a([],x.t)
for(t=0;v=l.gkT(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bT7(l))
u=A.bR(0,A.cm(new C.bT8(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXE,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fBP,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fE4,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lH:G.np,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bT9(l),x.cM).aM(0,", then ")+".",k,k,k,k,k,k,D.fGh,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.da,B.bl,k,k,1/0))}if(!l.at)r.push(C.uz("That is my line!",l.gcN9(l),B.cV,B.hd,D.fB))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uz(w,l.gqs(l),B.cV,B.jt,D.fB))}return new C.tI("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f7,k)}}
C.bkg.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qe$.a
c7.Gy(c5.e.MG(c8))
w=C.heZ(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj2().length
t=$.S().r
s=x.v
r=new A.aH(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ce(225,500,440,470))
q=A.L()
q.r=D.ZZ.gp(0)
q.b=B.aa
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aH(t,B.aj,c4,c4,l)
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
m=new A.bw()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cV,G.np,D.lH,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1K(c7,"OLDEST",D.etF,B.cV)
this.b1K(c7,"YOUNGEST",D.et7,B.bc)
t=A.bx(D.fcL,B.fR)
s=A.L()
s.r=D.Gl.gp(0)
c7.aq(t,s)
s=A.bx(D.fcK,B.ir)
t=A.L()
t.r=D.BR.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dsC())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cn(a1===$?c5.z=c5.FN(0):a1,f)
o=c5.gaM2()[f]
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
c7.O(new A.r(o,520),54,a9)}a9=D.dnb[B.o.F(b0,6)]
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
else b9=a3?D.evN:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aNp
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SM(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JU,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iF(new A.er(a8,c4,c4,B.cM,c4,c4,c4,c4,c4,c4,D.fzw),B.a7,B.c1,new A.jo(1),"\u2026",c4,1,c4,B.c2,c4,B.cx)
c1.nB(q)
c2=A.bx(A.bW(new A.r(o,650),24,c1.b.c+16),B.fR)
$.S()
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=B.iz
else a9=a7?B.rW:D.qq
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=D.lH
else a9=a7?G.np:D.lG
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iF(new A.er(""+(a2+1),c4,c4,B.cM,c4,c4,c4,c4,c4,c4,D.fzQ),B.a7,B.c1,new A.jo(1),c4,c4,c4,c4,B.c2,c4,B.cx)
c3.eo()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bW(B.J,4,8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cV,G.np,D.lH,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aF(q,m)
v.restore()}v.restore()},
b1K(d,e,f,g){var w,v,u=null,t=A.fE(u,B.cx,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.DP,u,u),e),B.a7,B.c1,u,B.dJ,B.c2)
t.eo()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.r(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2j.prototype={
a7(){return"_Trip."+this.b}}
C.amq.prototype={
S(){return new C.amr(D.XM,new A.eE(0,$.ax()),$,0,null,null)},
gd1(){return this.d}}
C.amr.prototype={
gDz(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bEV(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Na(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqA(){var w=this.f
return w===$?this.f=new C.aLq(new C.bSR(this)):w},
gU5(){var w=this.ghd(0)
return w.gzs()==null?"Grandma":B.a.i(w.gzs().b)},
Y(){this.a3()
this.arR()},
t(){var w,v=this
v.gqA().t()
w=v.M4$
w===$&&A.c()
w.t()
w=v.qe$
w.U$=$.ax()
w.R$=0
v.bwI()},
arl(d){var w,v,u,t=this
if(t.r!==D.aee)return
w=B.dH.az(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDz()
if(v+1>=u.length){t.r=D.aef
t.X5()}else{++t.w
t.ay=!1
t.r=D.XN
t.gqA().W8(u[t.w].a)}if(t.c!=null)t.m(new C.bSP())}},
X5(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$X5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqA().W8("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDz().length
r=C.bHb(t,u.z,s)
u.as=r
w=2
return A.b(C.BS(u.a.d,r),$async$X5)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BT(s.d,s.c.a,"journey",u.x*10),$async$X5)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSJ())
return A.h(null,v)}})
return A.i($async$X5,v)},
brU(){this.aUM()},
aUM(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aee
if(w.c!=null)w.m(new C.bSK())},
Ld(d){var w,v,u,t,s=this
if(s.r!==D.XN)return
w=s.gDz()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bSO(s,d,v))
u=s.gqA()
t=s.w
u.W8(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cSm(){if(this.r!==D.Bo)return
this.aUM()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.eo(A.b5(s,s,s,new C.bjH(t,t.qe$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDz().length;++w){v=t.w
if(w<v||t.r===D.aef)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.by(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wJ,s,s,s,s),s))}p.push(B.bn)
p.push(D.fU7)
return new C.tI("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cmB(),s,s,10,10,s,s)],q),s),B.f7,s)},
cmB(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bSN(o),l=D.qq.j(0.96),k=A.l(22),j=A.K(B.cV,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gU5()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aXC,B.K,n,n),B.T,C.uz("Start the journey",o.gbrT(),B.cV,D.bSS,D.fB)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.beF
break
case 1:w=o.w
v=o.gDz()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lG,2.5,B.r,-1)
t.push(A.az(n,A.p(n,A.d(r[s],n,n,n,n,n,n,D.aWY,B.K,n,n),B.f,n,D.afz,new A.o(D.al7,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,V.wD,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSL(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bZ(B.bI,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDz().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uz(v,o.gcSl(),B.cV,B.jt,D.fB),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gU5()),B.P,A.d(""+o.x+" of "+o.gDz().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aXf,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRt(v)
u=C.aRt(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.act,n,n,n))}w.push(B.P)
w.push(A.as(C.uz("Back to the games",new C.bSM(o),B.cV,B.kb,D.fB),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aEv,n,B.n),n,n,n,n,B.bl,n,n,n)}}
C.bjH.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qe$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDz(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aee,d2=c7*0.5
c8=A.ap(D.bjw,D.bul,d0)
c8.toString
w=A.ap(D.Z8,G.aiL,d0)
w.toString
v=A.ap(B.uq,D.bsH,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.san(A.jG(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a5a,B.x,c3))
d3.aF(new A.a4(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.we(s,60,A.a([D.bt5,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zl.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dCR[o]
$.S()
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aH(k.r,B.aj,c3,c3,j)
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
k.r=A.ap(l===0?D.bi1:D.bxt,D.bn9,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ccZ(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ap(D.aki,D.Gy,d0)
v.toString
w.san(A.jG(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bt7],t),c3,B.x,c3))
d3.aF(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bmo.gp(0)
d3.aF(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.bx5.gp(0)
d3.aF(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=I.N4.gp(0)
d3.aF(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.r=D.bhH.gp(0)
d3.aF(new A.a4(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aH(b1.r,B.aj,c3,c3,b2)
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
b0=new A.bw()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.bve.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b1.r=D.fB.gp(0)
d3.aF(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.Gl.gp(0)
d3.aF(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a4(b0,a4,b0+60,a5),B.jy)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.byy.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.BR.gp(0)
b0.b=B.aa
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iF(new A.er(b6,c3,c3,B.cM,c3,c3,c3,c3,c3,c3,D.fxX),B.a7,B.c1,new A.jo(1),c3,c3,c3,c3,B.c2,c3,B.cx)
b7.eo()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.aef
else if(r===c4.w){b0=c4.r
b0=b0===D.XN||b0===D.Bo
b8=b0}else b8=!1
if(a7){b0=c4.ghd(0).gzs()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqA()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Bo
b0=c0?C.hE8(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XN?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SM(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJ0(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bwA.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XM)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Bo&&c4.ax){b7=A.fE(c3,B.cx,c3,c3,c3,A.cS(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cV,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.IT,c3,c3),"BEEP BEEP!"),B.a7,B.c1,c3,B.dJ,B.c2)
b7.eo()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ccZ(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bsB,D.blI,g)
o.toString
if(f){w=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ce(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ce(v+9,t,v+16,u))
w.E(new A.bw())
t=A.L()
t.r=D.a_v.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d3t[r]
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=D.a_v.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.evK)
$.S()
v=A.L()
v.r=D.bhJ.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bW(e.a5(0,D.evL),16,60)
w=A.L()
w.r=o.gp(0)
d.c0(v,w)}},
bJ0(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XM?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dv_[w]
u=d.ay&&d.r!==D.XM&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bxk.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bph.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.bj.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.u6(D.fd7,B.fR,B.fR,B.iq,B.hU)
$.S()
t=A.L()
t.san(A.jG(D.erN,B.a9n,D.dkH,G.a5a,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.deF[B.o.F(o,4)].gp(0)
a2.aF(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.Bo&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.n6(A.bx(l,B.nZ)),$.mK(),!0)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=D.Z8.gp(0)
a2.aF(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Bo?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SM(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aNg,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.nZ)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=D.al9.gp(0)
i.b=B.aa
i.c=2
a2.aq(j,i)}d=A.bx(D.V6,B.nZ)
t=A.L()
t.r=D.Z8.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.n6(A.bx(D.V6,B.nZ)),$.mK(),!0)
C.SM(a2,new A.r(D.V6.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aNg,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.V6,B.nZ)
d=A.L()
d.r=D.al9.gp(0)
d.b=B.aa
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Am.Cg.gp(0)
a2.O(D.etU,4,d)
d=A.L()
d.r=D.Gl.gp(0)
a2.aF(D.feg,d)
for(w=0;w<3;++w){v=D.dv1[w]
d=A.bx(new A.a4(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.Gy.gp(0)
a2.aq(d,t)}a1.restore()},
aE(d){return!1}}
C.aC9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bhf.prototype={}
C.aCb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bhg.prototype={}
C.aCc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bhh.prototype={}
C.a6L.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b5(w,w,w,new C.bjO(w),B.az),w)}}
C.bjO.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dsW[B.o.F(n,6)]
k=$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=l.gp(0)
d.aF(new A.a4(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aH(k.r,B.aj,null,null,j)
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
k=new A.bw()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tI.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Qq,w,w,w,new C.bSI(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fve,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.YT,A.p(w,A.bm(!0,A.x(A.a([D.c7H,new A.D(D.bJH,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b9W,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iz.prototype={
B(d){var w=null,v=this.d,u=C.aRt(v),t=C.imh(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cV.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fxI,w,w,w)],x.p)
if(this.e)p.push(D.eyb)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.D(B.uJ,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.F5,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bH,w,w,w)}}
C.Ww.prototype={
S(){return new C.bmB(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cZf(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmB.prototype={
gT4(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a3()
this.PH()},
PH(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bTt(u.a.d),$async$PH)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.diJ[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bTs(p,(o===$?u.d=q.c:o).a,r),$async$PH)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e2Z(u,n))
return A.h(null,v)}})
return A.i($async$PH,v)},
uD(d){return this.cpD(d)},
cpD(d){var w=0,v=A.j(x.H),u=this,t
var $async$uD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ee(new C.e3_(d),!1,null,x.H)),$async$uD)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PH()
return A.h(null,v)}})
return A.i($async$uD,v)},
gb73(){var w,v,u,t=C.Na(this.gT4()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2M(d){return this.cwQ(d)},
cwQ(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZf(r),$async$a2M)
case 2:if(u.c!=null)u.m(new C.e30(u,r))
return A.h(null,v)}})
return A.i($async$a2M,v)},
P_(d){return this.bRL(d)},
bRL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$P_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hhj(t.gT4())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MV("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ee(new C.e2X(q),!1,null,r)),$async$P_)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e2Y(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2M(A.cY(s,0,A.dD(2,"count",x.S),r).dq(0)),$async$P_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P_,v)},
Y1(d,e){return this.bPk(0,e)},
bPk(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Y1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e2W(e),o,null,!0,!0,x.y),$async$Y1)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hhj(u.gT4()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2M(o),$async$Y1)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Y1,v)},
aar(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e2T(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.VW,p,p,p),B.b3],s)
q=A.l(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fw7,p,p,p),B.f,p,p,new A.o(B.hM,p,p,q,p,p,B.n),p,p,p,p,B.z4,p,p,p))
return A.az(p,A.d3(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fDY,p,p,p),B.cS,A.d(f,p,3,B.a2,p,p,p,D.fwQ,p,p,p)],s),B.E,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.yW,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xv(d,e,f,g,h,i){return this.aar(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Na(s.gT4()),p=s.gT4(),o=C.aRt(s.e),n=C.hhj(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e31(s),k=C.hI5(p,1).length,j=C.hIg(p,1).length,i=C.hJa(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cV.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.ach,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fBr,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bb,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.We,r,r,r)],a1),B.E,r,B.e,B.h,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q2,r,r,r),D.h_q],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bH,r,r,r)
f=s.Xv("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e32(s,p),l.$1("kahoot"))
h=s.Xv("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lG,new C.e33(s,p),l.$1("fire"))
a0=s.Xv("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wr,new C.e34(s,p),l.$1("catch"))
j=j!==0?new C.e37(s,p):r
j=s.aar("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hJ,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e38(s,p):r
i=s.aar("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lF,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xv("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fn,new C.e39(s,p),l.$1("journey"))
k=k!==0?new C.e3a(s,p):r
k=A.a([g,B.aO,D.h3q,B.P,A.l2(0.98,A.a([f,h,a0,j,i,e,s.aar("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xv("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d6,new C.e3b(s,p),l.$1("school"))],a1),2,12,12,r,B.e0,!0),B.db,A.A(A.a([D.bLw,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fwb,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fL2,B.bb,new A.by(1,B.ba,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hu,r,r,r),A.d(""+v.gapP(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.F5,r,r,r)],a1),B.E,r,B.e,B.h,0,B.p),r)],a1)
if(v.gapP(0).length>=2){f=D.lH.j(0.2)
t=new A.ay(D.lH,1,B.r,-1)
g.push(A.az(r,A.p(r,A.W(B.he,D.lH,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3c(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cV.j(0.2)
t=new A.ay(B.cV,1,B.r,-1)
f=A.az(r,A.p(r,A.W(B.jb,B.cV,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3d(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fj.j(0.2)
t=new A.ay(B.fj,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.az(r,A.p(r,A.W(B.ej,B.fj,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3e(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c7(B.aM,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.da,B.bl,r,r,r))}if(s.a.e){j=m?new C.e35(s):new C.e36(a2)
i=A.l(18)
h=A.K(m?B.cV:B.aT,B.r,2)
g=m?B.cV.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.p(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cV:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Ol,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h4m)
k.push(B.aB)
k.push(D.au0)
return new C.tI("Family Games \xb7 "+p.b,A.cw(k,r,r,D.bFI,r,r,B.ah,!1),B.f7,r)}}
C.a0c.prototype={
a7(){return"_KPhase."+this.b}}
C.ams.prototype={
S(){return new C.amt(D.b1S)},
gd1(){return this.e}}
C.amt.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bT2(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dg(B.fM,new C.bT3(v))},
aQg(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bST(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dg(B.fh,new C.bSU(w))},
Ld(d){var w
if(this.d!==D.adJ)return
w=this.at
if(w!=null)w.a1(0)
this.b7_(d)},
b7_(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.V(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bSZ(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.t2,v.giA(v))},
cLN(d){var w=this
if(w.d!==D.Xj)return
if(w.e+1>=w.a.w.length)w.YO()
else{w.m(new C.bT_(w))
w.aQg()}},
YO(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHb(p,u.w,t)
u.m(new C.bSW(u,s))
w=2
return A.b(C.BS(u.a.e,s),$async$YO)
case 2:r=e
t=u.a
w=3
return A.b(C.BT(t.e,t.f,t.r,u.f),$async$YO)
case 3:q=e
if(u.c!=null)u.m(new C.bSX(u,r,q))
return A.h(null,v)}})
return A.i($async$YO,v)},
cMC(){var w,v,u,t,s=this,r=s.a,q=new A.e0()
q.cU(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b3("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cY(r,0,A.dD(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gJ(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b3(t,B.i.V(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bT0())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1S===r){w=A.a([D.h_P,B.T,A.d(s,t,t,t,t,t,t,B.Wo,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fwj,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.B8,B.K,t,t))
w.push(B.e3)
w.push(C.uz("Play",u.geX(u),B.cV,B.he,D.fB))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b1T===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fEv,t,t,t),t,t,t)
break A}if(D.adJ===r||D.Xj===r){w=u.cse()
break A}if(D.b1U===r){w=u.cd_()
break A}w=t}return new C.tI(s,w,B.f7,t)},
cse(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xj,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aWN,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.L8,j,j,j))
g.push(B.as)
f=A.l(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iH,j,j,j),B.f,j,j,new A.o(B.bw,j,j,f,j,j,B.n),j,j,j,j,B.CC,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.l(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bu(f,A.ku(B.bw,j,k.as<5?B.fj:B.cV,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cV,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lH:G.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fvn,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fGG,B.K,j,j)
w=A.E(A.p(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.qq,j,v,w,j,j,B.n),j,j,j,j,B.fu,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bSY(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aE7[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aEr[o],j,j,j,j,j,j,D.fxi,j,j,j),B.as,new A.by(1,B.ba,A.d(r[t],j,3,B.a2,j,j,j,D.fwg,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.asu)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c_m)
v.push(A.az(j,new A.T1(A.p(j,new A.c7(B.aM,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),W.aCw,j,B.n),j,j,j,j,B.f2,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l2(1.45,v,2,10,10,j,B.e0,!1),4)],h)
if(i)h.push(D.exr)
return new A.D(B.a18,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
cd_(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cMC(),m=x.p,l=A.a([D.bdX,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q2,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.W0,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cV.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cV:B.bw,1,B.r,-1)
q=A.d(w<3?D.dkY[w]:""+(w+1),o,o,o,o,o,o,B.mC,o,o,o)
s=s?B.u:B.O
l.push(A.p(o,new A.c7(B.aM,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.by(1,B.ba,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iH,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cw,B.eV,o,o,o))}l.push(B.T)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iz(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uz("Back to the games",new C.bSV(p),B.cV,B.kb,D.fB),o,o,o))
return A.cw(l,o,o,B.fu,o,o,B.ah,!1)}}
C.Ub.prototype={
S(){return new C.amp(A.T(x.de,x.er))}}
C.amp.prototype={
gDe(){var w,v=this,u=v.d
if(u===$){w=C.hni(v.a.c.aj())
v.d!==$&&A.bD()
v.d=w
u=w}return u},
glW(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDe().b
v=$.ax()
u.e!==$&&A.bD()
t=u.e=new A.au(new A.ba(w,B.b6,B.aP),v)}return t},
cg0(d){return this.f.c1(0,d,new C.bSt(d))},
Y(){this.a3()
var w=this.gDe().c
if(w.length===0)w.push(C.h8M(null,0,20,""))},
t(){var w,v,u=this.glW(0)
u.U$=$.ax()
u.R$=0
for(u=this.f,u=new A.dn(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.U$=$.ax()
v.R$=0}this.a2()},
cLD(){if(this.gDe().c.length>=12)return
this.m(new C.bSu(this))},
jH(d){var w,v,u=this,t=u.gDe()
t.b=B.a.i(u.glW(0).a.a)
w=t.gapP(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.foi)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bSE(),r=x.p,q=A.a([A.bO(!1,D.fQ3,t,t,!0,t,t,t,u.gbqL(u),t,t)],r),p=A.a([D.h3Y,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glW(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDe().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSD(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uz("\uff0b Add a question",u.gcLC(),B.aT,t,B.c),t,t,t))
return new C.tI("Make your game",A.cw(p,t,t,D.bFF,t,t,B.ah,!1),q,t)}}
C.arz.prototype={
S(){return new C.aFJ(A.a([],x._))},
bv(){return this.r.$0()},
qt(){return this.w.$0()},
ge3(){return this.c}}
C.aFJ.prototype={
Y(){var w,v
this.a3()
this.wz()
w=this.a
v=w.c
if(v.length!==0)C.a8v(v,w.e,w.d.w)},
wp(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hk7(r,t.e,!1,s.w,new C.e4E(u),null,s),$async$wp)
case 2:w=3
return A.b(u.wz(),$async$wp)
case 3:return A.h(null,v)}})
return A.i($async$wp,v)},
a0Y(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hk7(r,t.e,!0,s.w,new C.e4D(u),null,s),$async$a0Y)
case 2:w=3
return A.b(u.wz(),$async$a0Y)
case 3:return A.h(null,v)}})
return A.i($async$a0Y,v)},
wz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bl(q.a.c),$async$wz)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e4G(q,p))
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
return A.b(C.Ho(q.a.c).dg(0,B.qC),$async$wz)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e4H(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e4I(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wz,v)},
Pl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fnT)
w=3
return A.b(C.Ho(t.a.c),$async$Pl)
case 3:r=e
w=4
return A.b(C.fZg(t.a.c,r),$async$Pl)
case 4:q=e
w=5
return A.b(C.Ho(t.a.c),$async$Pl)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e4C(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dK:B.d2,null,B.t,null,s,null,B.lL,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$Pl,v)},
IA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iuv(l),$async$IA)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hYp(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1T(q,p.e,l,"Each family tree costs $"+B.i.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IA)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hEi(r)
o=Date.now()
n=t.a.c
m=new C.l1(l,r.toUpperCase(),p,!0,B.Z,D.DX,new A.V(o,0,!1),0,n,D.uR,B.ce)
w=5
return A.b(C.a49(n,m),$async$IA)
case 5:w=6
return A.b(t.wz(),$async$IA)
case 6:t.a.bv()
t.a.qt()
if(t.c==null){w=1
break}t.F6(m)
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
F6(d){return this.ckW(d)},
ckW(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bl(u.a.c),$async$F6)
case 2:n=l.nF(k.dI(f,new C.e4F(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.art(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F6)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a49(u.a.c,o),$async$F6)
case 6:case 5:w=7
return A.b(u.wz(),$async$F6)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$F6,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.ul(p)
if(r.e)return A.as(A.na(q,p?B.bu:B.bj,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bXY,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cU,!0,q,q,q,q,q,q,q,q,q,q,q,r.gck_(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gp(A.p(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e3,A.bI(D.h7c,q,r.gaTz(),A.bo(B.bQ,q,q,q,q,q,Av.a1w,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bIo,q,q,1/0),15,B.ag,1.05,D.adw,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.W(B.zM,B.aV,q,q,q,q),q,q,q,new C.e4K(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.W(B.zI,B.aV,q,q,q,q),q,q,q,r.gahi(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.atp,q,D.fNl,r.gaTz(),A.bo(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gp(r.cHM(J.u(r.d,s),o),14,B.ag,1,D.adw,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.E,q,B.e,B.h,0,B.p)},
cHM(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.l(14),p=A.p(w,D.bX2,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqP(),m=d.d?"":" \xb7 Public",l=d.y===D.kZ?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bb,l,A.W(B.Pg,v?B.bu:B.bj,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e4J(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.art.prototype={
S(){return new C.aFG(A.a([],x._),A.aR(x.N),A.baA())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFG.prototype={
Y(){var w,v,u=this
u.a3()
u.d=u.a.w
u.adV()
w=u.a
v=w.c
if(v.length!==0)C.a8v(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.ax()
w.R$=0
this.a2()},
a3W(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yB("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e44(r),s,null,!0,!0,x.y),$async$a3W)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ka()
t.m(new C.e45(t,r))
w=4
return A.b(t.uz(),$async$a3W)
case 4:t.a.bv()
t.yB(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3W,v)},
cxp(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e4_(w,f,d,e))},
aVS(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.eb(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bdE(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eN(new Float64Array(16))
q.e6(r)
w=q.Dj()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.eb(r,u,0,1)
t.k7(v,v,1,1)
t.eb(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
adV(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bl(u.a.c),$async$adV)
case 2:t=s.nF(r.dI(e,new C.e3r(u)))
if(t!=null&&u.c!=null)u.m(new C.e3s(u,t))
return A.h(null,v)}})
return A.i($async$adV,v)},
yB(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wp(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hk7(o,t,!1,r,new C.e3J(u),q.a,s),$async$wp)
case 2:n=A
m=J
w=3
return A.b(C.Ho(u.a.c),$async$wp)
case 3:p=n.nF(m.dI(e,new C.e3K(u)))
if(p!=null&&u.c!=null)u.m(new C.e3L(u,p))
return A.h(null,v)}})
return A.i($async$wp,v)},
Ka(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uz(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a49(t,s),$async$uz)
case 2:return A.h(null,v)}})
return A.i($async$uz,v)},
a2s(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uA(q,t.a.c)){t.yB("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ivI(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2s)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ka()
t.m(new C.e3Z(t,r))
w=4
return A.b(t.uz(),$async$a2s)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2s,v)},
b3G(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ee(new C.e3G(this),!1,null,x.H))},
a1b(){return this.ckY()},
ckY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uA(m,t.a.c)){t.yB("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e3W(),A.U(s).k("Y<1>")).gJ(0)
s=A.ev([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e3X(n,t,new C.ul(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1b)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Ka()
t.m(new C.e3Y(t,o))
w=6
return A.b(t.uz(),$async$a1b)
case 6:case 5:if(o.a&&t.c!=null)t.b3G()
case 1:return A.h(u,v)}})
return A.i($async$a1b,v)},
WP(d){return this.bEk(d)},
bEk(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uA(r,t.a.c)){t.yB("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3f(t,d),r,null,!0,!0,x.P),$async$WP)
case 3:s=f
if(s==null){w=1
break}t.Ka()
t.m(new C.e3g(t,s))
w=4
return A.b(t.uz(),$async$WP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WP,v)},
a4g(d){return this.cK0(d)},
cK0(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e47(u,d,new C.ul(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4g)
case 2:return A.h(null,v)}})
return A.i($async$a4g,v)},
chd(d){var w=this,v=w.d
v===$&&A.c()
if(C.uA(v,w.a.c))w.P0(d)
else w.a4g(d)},
ajO(d,e){return this.cBn(d,e)},
cBn(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e41(new C.ul(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajO)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajO,v)},
IF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kZ?3:5
break
case 3:w=6
return A.b(C.h6Z(t.a.c),$async$IF)
case 6:s=e
o=t.a
r=C.hsa(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajO(!s,!r),$async$IF)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRA(o,t.a.c)){t.yB("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lt(o,"Cancel","Remove",q.y===D.kZ?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IF)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRw(t.a.c,t.d.a),$async$IF)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j8(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IF,v)},
abn(d){return this.bPB(d)},
bPB(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uA(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aU(s,new C.e3h(p))){o=A.U(s)
p.a=A.nF(new A.cM(new A.Y(s,new C.e3i(d),o.k("Y<1>")),new C.e3j(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.Ka()
t.m(new C.e3k(t,s,d,q))
w=3
return A.b(t.uz(),$async$abn)
case 3:t.yB(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abn,v)},
P0(d){return this.bRP(d)},
bRP(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uA(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4g(d),$async$P0)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e3o(t,d),r,null,!0,!0,x.P),$async$P0)
case 6:s=f
if(s==null){w=1
break}t.Ka()
t.m(new C.e3p(t,s))
w=7
return A.b(t.uz(),$async$P0)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
cIb(){var w=this,v=w.d
v===$&&A.c()
if(!C.uA(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e46(w))
w.uz()},
ZS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRA(n,t.a.c)){t.yB("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.au(B.aw,s)
q=t.d.e
p=A.bp(new A.N(q,t.gcfH(),A.U(q).k("N<1,n>")).c_(0,new C.e3B()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3C(t,new C.ul(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$ZS)
case 3:o=e
r.U$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Ka()
t.m(new C.e3D(t,p))
w=4
return A.b(t.uz(),$async$ZS)
case 4:t.yB("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZS,v)},
cfI(d){return B.a.i(d.toLowerCase())},
cjK(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uA(v,w)
t=r.d
s=C.ikO(t)
C.iuz(q,t.b,u,C.ikN(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.ul(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e4e(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c6:B.hY
v=A.W(B.a2G,n?B.bu:B.bj,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CD,A.aM(!1,o,!0,new A.D(B.hO,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e4f(p,d),o,o,o,o,o,o,o),o),new A.D(B.nI,p.c23(m),o)],u)
if(p.d.y===D.kZ){t=B.tB.j(0.15)
s=A.l(12)
r=A.K(B.tB.j(0.45),B.r,1)
q=C.Hm(p.d,p.a.c)
v.push(new A.D(B.yZ,A.p(o,A.A(A.a([D.c1w,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.hP,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uA(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GB("Undo",B.pE,p.gcIa(),m,o,o))
u.push(new C.GB("Family Book",D.bRH,p.gcjJ(),m,B.ur,o))
u.push(new C.GB("Family games",B.nO,p.gcjV(),m,B.aD,o))
if(C.uA(p.d,p.a.c))u.push(new C.GB("Display settings",B.Dv,p.gckX(),m,B.b2,o))
u.push(new C.GB("Sync",B.zI,p.gahi(),m,o,o))
t=p.d
if(t.y===D.kZ||C.aRA(t,p.a.c)){t=p.d.y===D.kZ?"Remove shared tree":"Delete tree"
u.push(new C.GB(t,B.ej,p.gbPL(),m,B.fj,o))}if(C.uA(p.d,p.a.c))u.push(new C.GB("Add member",B.wX,new C.e4g(p),m,B.bQ,o))
v.push(new A.D(Z.an9,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.gaqP()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.e4h(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?O.a2K:A5.Ph,o,o,o,o,o)
v.push(A.as(A.hv(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e4i(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c23(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ab(0,B.G,B.fX.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.W(B.zz,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c4Q,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cU,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahi(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fyl,m,m,m)
r=r.gaqP()
p=n.d.gaqP()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.h,0,B.p),1)],o)
if(C.uA(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c1K,m,m,m,n.gcuN(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jL:B.n5
r=r?"Private":"Public"
r=A.E(n.axn(q,"Privacy",r,n.a.d.w?n.gcH6():m),1)
q=A.E(n.axn(B.x1,"Tree code",n.d.c,new C.e3q(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axn(D.bTp,"Collaborators",p,n.gc6T()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.kZ){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aG(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.hm,A.A(A.a([A.W(B.nP,B.c,m,m,m,14),B.e7,A.d("View only",m,m,m,m,m,m,B.aWS,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bu(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.H8,A.x(p,B.E,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c99,B.n),m,m,m,m,m,m,m,1/0)},
axn(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(K.aoo,A.x(A.a([A.W(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rg,A.d(f,w,1,B.a2,w,w,w,An.xB,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bhj.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b5(t,t,t,new C.bhm(s,t),new A.av(w,v))],x.p)
r=r.gdP(r)
B.d.u(u,r.dN(r,new C.di4(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.di5(this),A.U(r).k("N<1,v>")))
return new A.D(B.uN,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L0.prototype={}
C.GF.prototype={}
C.bhl.prototype={
gbma(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLl.prototype={}
C.bhm.prototype={
bRq(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kq(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kq(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bw())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bRn(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dip())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aU(a0,new C.diq(f))
t=new A.N(a0,new C.dir(f),A.U(a0).k("N<1,H>")).c_(0,new C.dis()).cF(0,1/0,B.rw)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lO(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aH(m.r,B.aj,null,null,j)
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
if(s!=null&&s.length!==0)this.bRn(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRq(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bl7.prototype={
gcd1(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aEI
switch(w.c.a){case 0:return D.d28
case 1:return D.dez
case 2:return D.dwU}},
gcd4(){var w=this.c,v=C.hDt(w.w),u=C.hDt(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gcd1(),p=t.c,o=N.bFN(p.f),n=t.gcd4(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gal(q).j(0.35),B.cK,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tM(B.z,s,B.cm,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.i0(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.CS,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fJ9,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.n),s,s,s,s,D.bKk,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dL,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bj,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ax,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b85,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bKv,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgo.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.blg
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.bzb.prototype={
B(d){var w=this,v=null,u=new C.foq(w),t=w.c,s=t?B.ct:B.c,r=A.l(12),q=u.$3(B.i_,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wZ,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqS,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dB,v,v,v,B.ai)}}
C.bot.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.az(v,A.p(v,A.x(A.a([A.W(s?O.a2K:A5.Ph,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fFa,v,v,v)],r),B.l,v,B.b8,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fCW,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.eZs(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0p.prototype={
S(){return new C.aE8()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aE8.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zb:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.imi(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
u.R$=0
u=v.e
u===$&&A.c()
u.U$=w
u.R$=0
u=v.f
u===$&&A.c()
u.U$=w
u.R$=0
u=v.r
u===$&&A.c()
u.U$=w
u.R$=0
u=v.w
u===$&&A.c()
u.U$=w
u.R$=0
u=v.x
u===$&&A.c()
u.U$=w
u.R$=0
v.a2()},
Qw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hsa(p.y,p.w)
w=3
return A.b(A.lF(t.a.w,B.JN),$async$Qw)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1T(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qw)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hYq(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A8.Hy(78,800),$async$Qw)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dym(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qw,v)},
cd3(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i1(B.o.v(1000*Date.now()),w,D.zb,null,null,null,"","","","","",1,!1,0)
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
s=v.aGr(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
aaZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dyl(r),s,null,!0,!0,x.y),$async$aaZ)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.ul(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dyv(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bIK,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hd(A.aM(!1,k,!0,new A.D(B.lQ,A.W(B.ej,B.pr,k,k,k,17),k),B.cU,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMk(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jZ:B.iO
t=N.bFN(l.as)
if(l.as==null)s=A.W(B.py,j?B.bu:B.bj,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hg(u,t,s,k,42),A.ao(0,A.hg(B.bQ,k,D.bW6,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcd0(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aEa(t,"Full name",B.mi,1,1,i,B.mA)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.T,new C.bl5(i,u,new C.dyw(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bC4],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dyx(),A.U(o).k("N<1,eM<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bC6],q)
B.d.u(q,new A.N(f,new C.dyz(),A.U(f).k("N<1,eM<n?>>")))
o=A.x(A.a([t,B.am,new C.aeB(i,r,"Who is their parent?",p,new C.dyA(l),k,o),B.aB,n,B.am,new C.aeB(i,m,"Who is their spouse / partner?",q,new C.dyB(l),k,o)],v),B.al,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.c()
q=C.aEa(q,"Birth date",D.aq1,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aEa(m,"Birth place",B.a3_,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aEa(n,"Date of death (if deceased)",D.as7,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aEa(p,"Occupation",B.Qg,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aeC(i,"Identity",u,k),B.af,new C.aeC(i,"Family links",o,k),B.af,new C.aeC(i,"Life details",A.x(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.aEa(r,"Notes",B.l0,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aE9(i,"Child order",l.clb(l.at),new C.dyC(l),new C.dyD(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hh7(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dyE(l):k
B.d.u(r,A.a([B.T,new C.aE9(i,"Visible in tree",u,w,new C.dyF(l),k)],v))}r.push(B.T)
w=j?B.jZ:B.iO
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iZ(k,B.bQ,k,B.ag,k,new C.dyG(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.amP,k,k,k))
r.push(B.bx)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dW(B.o7,new C.dyy(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bI(D.ffv,k,l.gcd2(),A.bo(B.aV,k,k,0,B.c,k,B.cp,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.ax)
return A.ek(B.f7,k,B.ag,h,new A.a5(420,k,A.c9(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.anH,k,B.an0,new A.b9(g,B.a1),k,k)},
clb(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeC.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16)
return A.x(A.a([new A.D(B.a1A,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.E,w,B.e,B.h,0,B.p)}}
C.bl6.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bz(u,B.eM,u,B.t8,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bj,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aeB.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.W(B.tj,u?B.bu:B.bj,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.p(v,new A.Es(A.a5G(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kX,v,v,v)}}
C.bl5.prototype={
B(d){var w=new C.dyH(this)
return A.A(A.a([w.$3(D.wL,"Male",B.Q1),B.ae,w.$3(D.oB,"Female",B.PO),B.ae,w.$3(D.zb,"Other",B.nM)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aE9.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jZ:B.iO,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.h,0,B.p),1),new C.aKn(u,B.wZ,w.f,v),B.bn,new C.aKn(u,B.i_,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aKn.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ef:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bj).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeD.prototype={
bVC(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cC}},
bVD(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_p(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AQ(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ef:B.c
u=A.l(12)
t=A.K((w?B.eh:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bQ,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.E,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.yV,p,p,1/0)},
afF(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1A,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.E,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hIY(r,q),o=q.c,n=t.bVC(o),m=N.bFN(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kZ?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bj,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.hg(u,m,m==null?A.W(B.py,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bVD(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.lO,s,s,s),s,s,s)
u=x.p
i=A.a([t.AQ("Full name",i,B.mi)],u)
if(p>0)i.push(t.AQ("Child order","#"+p,B.PU))
r=A.a([h,B.ax,r,B.aO,l,B.T,v,B.bx,t.afF("Identity",i),B.af,t.afF("Life details",A.a([t.AQ("Birth date",q.w,D.aq1),t.AQ("Birth place",q.x,B.a3_),t.AQ("Date of death",q.y,D.as7),t.AQ("Occupation",q.z,B.Qg)],u)),B.af,t.afF("Family links",A.a([t.AQ("1. Parent",t.b_p(q.d),B.Hz),t.AQ("2. Spouse",t.b_p(q.e),B.HP)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afF("Notes",A.a([t.AQ("Notes",q,B.l0)],u))],u))
r.push(B.bx)
r.push(A.bI(B.Li,s,new C.dyR(d),A.bo(B.aV,s,s,s,s,s,B.cp,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eH(s,k,new A.cN(B.m3,A.c9(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,s,B.wF,s,s,B.ah),s),s,s,s,B.Hb,s,B.d7,s,new A.b9(j,B.a1),s)}}
C.GB.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bj
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uP,A.hd(A.aG(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a5(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.arw.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.cg5(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cg6(),t,x.fO))
return s}}
C.arx.prototype={
S(){return new C.aFI(A.a([],x.bF))},
gd1(){return this.c}}
C.aFI.prototype={
Y(){this.a3()
this.Kh()},
Kh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cg9(t.a.c),$async$Kh)
case 3:r=e
w=4
return A.b(C.Bl(t.a.c),$async$Kh)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rq(q,new C.e4r(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e4s(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kh,v)},
z9(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
L5(d,e){return this.cKH(d,e)},
cKH(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$L5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e4w(q,e))
t=3
w=6
return A.b(d.$0(),$async$L5)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e4x(q))
$.eY.mJ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$L5,v)},
YC(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$YC)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e4o(t),"Preparing download\u2026"),$async$YC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YC,v)},
YG(d){return this.bTu(d)},
bTu(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$YG)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e4p(t,d),"Preparing file\u2026"),$async$YG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YG,v)},
ahF(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xQ.cp().MQ(B.T1,B.uS,!0),$async$ahF)
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
o=A.jP(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ac(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.Hx()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahF,v)},
Zk(d){return this.c2Z(d)},
c2Z(d){var w=0,v=A.j(x.H),u=this
var $async$Zk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.L5(new C.e4q(u,d),"Restoring family trees\u2026"),$async$Zk)
case 2:return A.h(null,v)}})
return A.i($async$Zk,v)},
Zj(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahF(),$async$Zj)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zk(s),$async$Zj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zj,v)},
a3j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$a3j)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.L5(new C.e4v(t),"Creating QR code\u2026"),$async$a3j)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3j,v)},
a2V(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DF()){t.z9("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ee(new C.e4t(),!0,null,x.N)),$async$a2V)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zk(r),$async$a2V)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2V,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.C1:B.hY,m=o?D.alf:B.aS,l=o?B.aL:B.bO,k=o?B.aS:B.av,j=new C.dit(n,m,l,k,o?B.bP:B.bj)
l=A.aI(p,p,p,p,A.W(B.eK,k,p,p,p,20),p,p,p,new C.e4z(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eS(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.di1(!0,B.ju,B.aH,B.aH,q.r?p:q.gcBb(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcxk()
t.push(A.E(C.di1(!s,B.jv,B.b7,B.bh,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.di1(!1,B.hB,B.aV,B.bQ,q.r?p:q.gbTn(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.di1(!1,R.zJ,B.at,B.aQ,q.r?p:q.gc2W(),j,s,"Upload backup file"),1))
l=A.a([new C.bhk(v,l,p),B.lb,new C.adR(j,"QR restore",p),B.T,t,B.db,new C.adR(j,"Backup files",p),B.T,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lb,new C.adR(j,"One tree",p),B.T],u)
B.d.u(v,J.b8(q.d,new C.e4A(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cw(l,p,p,B.a1s,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.A(A.a([O.aVd,B.bb,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.CK,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dit.prototype={}
C.bhk.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ab(0,B.G,B.aV.j(0.32),B.kF,28)],x.V)
t=A.ao(p,A.W(B.vc,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.p(p,D.c4j,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p5,A.E(A.x(A.a([D.fOo,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.h,0,B.p),1)],q),B.E,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cct,B.n),p,p,p,p,p,p,p,p)}}
C.adR.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bhi.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aH.j(0.1),B.cK,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eD(A.d3(new A.D(E.a16,A.x(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.tc,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bhn.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eD(new A.D(B.eV,A.A(A.a([A.p(v,D.c3v,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.tc,v,v,v),B.bb,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.h,0,B.p),1),A.W(B.hB,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a0J.prototype={
S(){return new C.aFH()},
gd1(){return this.c}}
C.aFH.prototype={
Y(){this.a3()
this.aaw()},
aaw(){var w=0,v=A.j(x.H),u=this,t
var $async$aaw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4x(u.a.c,B.Ez),$async$aaw)
case 2:t=e
if(u.c!=null)u.m(new C.e4j(u,t))
return A.h(null,v)}})
return A.i($async$aaw,v)},
aj6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aj6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e4k(q))
t=4
p=A.htV(q.a.d,B.Ez)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.X(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atO(n.e,m,l,B.Ez,p,n.f),$async$aj6)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e4l(q))
q.c.L(x.q).f.T(D.fp7)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.ek(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e4m(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aj6,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.ny:B.qr,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eS(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h3S,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qj(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b8,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.by,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcx3()
if(u)u=B.KI
else u=A.W(r.e===!0?B.hd:B.aq0,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.en(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cd,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hg,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ig,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.T)
w.push(new A.a5(1/0,q,A.bI(B.B9,q,new C.e4n(d),A.bo(B.aV,q,q,q,q,B.hg,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a0K.prototype={
S(){return new C.bmC(A.zU(B.yK,B.oe,B.vk))}}
C.bmC.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eS(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fWC,w,w,w,1,w,!0),B.w,A.zT(this.d,B.c_,new C.e4B(this,d)),w,!1,!1,w,w)}}
C.b0o.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Sw,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.m0.prototype={}
C.a7x.prototype={
S(){return new C.bmg(null,null)}}
C.bmg.prototype={
Y(){var w=this,v=null
w.a3()
w.d=A.bn(v,B.t2,v,1,v,w)
w.e=A.bn(v,B.nC,v,1,v,w)
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
this.bzy()},
B(d){var w,v,u=this,t=B.d.dL(D.a76,new C.dQt(u),new C.dQu())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cDR(A.c6(new A.he(A.a([w,v],x.dS)),new C.dQv(u,t),null),!0)}}
C.bmf.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b46(d,e)
break
case"house":p.mm(d,e,D.djI)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdk()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.ms(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BD(d,e,12)
p.yL(d,e,B.lk,5,14)
break
case"grocery":p.clV(d,e)
break
case"calculator":p.clC(d,e)
break
case"lumber":p.cm2(d,e)
break
case"kitchen":p.clY(d,e)
break
case"landscape":p.mm(d,e,D.dkj)
s=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ce(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ce(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bw())
w=A.L()
w.r=B.ep.j(0.85).gp(0)
d.af(s,w)
p.BD(d,e,8)
p.yL(d,e,B.iz,4,18)
break
case"plumbing":p.cmb(d,e)
break
case"electrical":p.mm(d,e,D.dw4)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aF(new A.a4(0,0,0+e.a,0+e.b),u)
p.ms(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.ms(d,e,B.or.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BD(d,e,10)
break
case"store":p.cml(d,e)
break
case"paint_remodel":p.cm6(d,e)
break
case"roofing":p.cmd(d,e)
break
case"warehouse":p.cmt(d,e)
break
case"vehicles":p.cmr(d,e)
break
case"farm":p.clP(d,e)
break
case"restaurant":p.cmc(d,e)
break
case"tools":p.cmo(d,e)
break
case"wallet":p.cms(d,e)
break
case"concrete":p.clI(d,e)
break
case"blueprint":p.clA(d,e)
break
default:p.b46(d,e)}},
mm(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).aD(0,v))
d.aF(v,w)},
ms(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdk()/2-h
$.S()
w=A.L()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bV(t,s),u,u+0.1439896632895322-u,!1,w)}},
yL(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdk()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BD(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b46(d,e){var w,v=this
v.mm(d,e,D.dul)
w=v.c
v.ms(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.ms(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bRj(d,e,B.hL,w)
v.yL(d,e,B.c.j(0.7),6,8)},
bRj(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aF(new A.a4(16,r,t,r+3),w)}},
clV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mm(d,e,D.cyb)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.dhP[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.ms(d,e,B.c.j(0.35),w,16)
l.yL(d,e,B.iz,5,12)},
clC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mm(d,e,D.cyj)
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
p=A.fE(h,B.cx,h,h,h,h,B.a7,B.c1,h,B.dJ,B.c2)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dm8[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb4(0,new A.er(r,h,h,B.cM,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eo()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cyl[o]
l=B.kO.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb4(0,new A.er(m,h,h,B.cM,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eo()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.ms(d,e,B.c.j(0.35),w*1.5,14)
i.ms(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.ms(d,e,B.on.j(0.4),r*2.8,22)
i.yL(d,e,B.pm,8,10)
i.BD(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.S()
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cm2(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,W.aBP)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a4(20,r,u,r+10),B.iF)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=A.ap(B.fZ,B.oh,(s+1)/2).gp(0)
d.aq(q,p)}o.ms(d,e,B.fZ.j(0.35),w,15)
o.BD(d,e,8)},
clY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mm(d,e,D.dik)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.ms(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yL(d,e,B.qg,4,14)},
cmb(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mm(d,e,D.d6i)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yL(d,e,B.pq,6,12)
n.ms(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cml(d,e){var w,v,u,t,s,r,q,p=this
p.mm(d,e,D.cM4)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a4(r,14,r+u,22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.fA,B.bL,(s+1)/2).gp(0)
d.aq(r,q)}p.ms(d,e,B.c.j(0.3),w,16)
p.BD(d,e,8)
p.yL(d,e,B.wl,5,13)},
cm6(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dcM)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a4(r,q,r+8,q+(18+s*22)),B.ir)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=[B.ix,B.dy,B.bL,B.ew][t].j(0.85).gp(0)
d.aq(q,r)}this.ms(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cmd(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.da5)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yL(d,e,B.cA,7,11)},
cmt(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.cOR)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a4(q,p,q+(t-s*8),p+16),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.ms(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cmr(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dAq)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bx(new A.a4(s,r,s+28,r+8),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BD(d,e,6)},
clP(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.dgT)
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
p.r=B.hJ.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.ms(d,e,B.or.j(0.35),w,14)},
cmc(d,e){var w,v,u,t,s,r,q=this
q.mm(d,e,D.djw)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bW(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c0(s,r)}q.yL(d,e,B.qg,5,16)
q.BD(d,e,7)},
cmo(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,D.dxI)
w=o.c
v=w*3.141592653589793
o.ms(d,e,B.oh.j(0.55),v*3,10)
o.ms(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.oh.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cms(d,e){var w,v,u,t,s,r,q,p,o=this
o.mm(d,e,D.dB9)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a4(q,p,q+36,p+22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.iz,B.or,r).gp(0)
d.aq(p,q)}o.BD(d,e,9)
o.ms(d,e,B.c.j(0.4),w*2.2,12)},
clI(d,e){var w,v,u,t,s,r,q,p
this.mm(d,e,D.dp6)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bV(new A.r(v,u),34)
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
clA(d,e){var w,v,u,t,s,r,q
this.mm(d,e,D.dkD)
$.S()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.S()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aF(new A.a4(0,q,0+v,q+6),u)
this.ms(d,e,B.lk.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auz.prototype={
a0z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSu(),$async$a0z)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9R(s),$async$a0z)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0z,v)},
ahG(d){return this.coL(d)},
coL(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iuJ(d),$async$ahG)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahG,v)},
B(d){var w,v,u=null,t=A.P(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jZ:B.iO
w=x.p
v=A.a([C.aSS(!0,B.rt,1/0,B.qN,u,s,1/0)],w)
if(!r)v.push(new A.bM(new A.o(u,u,u,u,u,new A.a7(B.aZ,B.b4,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bk,new A.bK(B.aZ,u,u,new A.D(B.t5,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCO,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dh(D.bXR,u,D.fKx,new C.cpB(this,d),A.bo(B.aV,u,u,u,B.c,u,B.k6,u,u,u,u,B.cg)),1),B.ae,A.E(A.en(D.c5C,u,D.fZO,this.gcfF(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k6,u,u,D.b6E,u,u,u,B.cg)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fH(1.7777777777777777,A.aG(!1,B.a3,!0,B.rt,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aNN.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.aVP.prototype={}
C.aVO.prototype={}
C.aTR.prototype={}
C.a_n.prototype={
S(){return new C.aAS()}}
C.aAS.prototype={
Y(){var w,v,u=this
u.a3()
u.a.toString
w=new A.ba("",B.b6,B.aP)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.R$=0
this.a2()},
KV(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fpD)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aVP(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.ef:B.c,k=A.l(20),j=A.p(n,D.c5h,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aI(n,n,n,n,A.W(B.cB,m?B.bu:B.bj,n,n,n,n),n,n,n,new C.d9E(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hua(new C.d9F(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jZ:B.iO
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bz(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d9G(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A_.KR,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eH(n,l,new A.cN(B.m3,A.c9(A.x(A.a([j,B.aO,i,B.ax,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dW(B.ds,new C.d9H(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cp,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bI(D.h_3,n,o.ga3F(),A.bo(B.aV,n,n,n,B.c,n,B.cp,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,n,B.CM,n,n,B.ah),n),n,n,n,A1.CN,n,B.d7,n,new A.b9(k,B.a1),n)}}
C.a_m.prototype={
S(){return new C.aAR()}}
C.aAR.prototype={
Y(){this.a3()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.R$=0
this.a2()},
KV(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fnd)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aVO(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.ef:B.c,n=A.l(20),m=A.p(q,D.c1B,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aI(q,q,q,q,A.W(B.cB,p?B.bu:B.bj,q,q,q,q),q,q,q,new C.d9A(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.W(B.apN,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jZ:B.iO
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bz(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d9B(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lc,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eH(q,o,new A.cN(B.m3,A.c9(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dW(B.ds,new C.d9C(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cp,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bI(D.h68,q,this.ga3F(),A.bo(B.bQ,q,q,q,B.c,q,B.cp,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.CM,q,q,B.ah),q),q,q,q,A1.CN,q,B.d7,q,new A.b9(n,B.a1),q)}}
C.ZU.prototype={
S(){return new C.azy()}}
C.azy.prototype={
Y(){var w,v=this
v.a3()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.aw,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.aw,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.U$=$.ax()
u.R$=0
u=v.e
u===$&&A.c()
u.U$=w
u.R$=0
u=v.f
u===$&&A.c()
u.U$=w
u.R$=0
u=v.r
u===$&&A.c()
u.U$=w
u.R$=0
v.a2()},
gKc(){var w,v=this.e
v===$&&A.c()
w=A.cX(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakQ(){var w=this.f
w===$&&A.c()
w=A.cX(B.a.i(w.a.a))
return w==null?0:w},
gb6V(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aR8(d){var w,v=B.i.D(this.gKc()+d,0.25,999999),u=B.i.fK(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb4(0,u)
this.m(new C.cHW())},
aA8(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jZ:B.iO,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bz(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.af2),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cfG(d,e,f){return this.aA8(d,e,f,null)},
KV(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakQ()<=0){s.c.L(x.q).f.T(D.frx)
return}r=s.c
r.toString
v=s.gKc()
u=s.gakQ()
t=s.gb6V()
A.a6(r,!1).N(new C.aTR(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.ul(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.p(o,D.bVN,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aI(o,o,o,o,A.W(B.cB,n?B.bu:B.bj,o,o,o,o),o,o,o,new C.cI1(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aA8(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Q_),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A_.KR,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jZ:B.iO
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.W(B.wZ,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cI2(p),o,o,o,o,o,B.cg)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c7a,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cI3(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.W(B.i_,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cI4(p),o,o,o,o,o,B.cg)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aA8(m,"Amount","0.00",B.hA),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cI5(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.h,0,o,o)
t=x.gv
u=A.C(new A.N(D.ddi,new C.cI6(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.T,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cfG(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cI7(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lc,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKc()===B.i.fK(p.gKc())?B.i.M(p.gKc()):p.gKc()
s=p.gb6V()
r=A.Bn(p.gakQ())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.h,0,B.p),1),C.bGC(p.gKc()*p.gakQ(),B.b2,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bx)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cp,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dW(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cI8(d),h),1),B.as,A.E(A.dh(D.ath,o,D.h22,p.ga3F(),A.bo(B.aV,o,o,0,B.c,o,B.cp,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eH(o,l,new A.cN(B.Mh,A.c9(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,o,Ai.ta,o,o,B.ah),o),o,o,o,B.OA,o,B.d7,o,new A.b9(k,B.a1),o)}}
C.a2v.prototype={
S(){return new C.bz3()}}
C.bz3.prototype={
Y(){var w,v,u=this
u.a3()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.ef:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jZ:B.iO
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bz(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fnW(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dW(B.ds,new C.fnX(d),s),1)
r=A.bo(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eH(s,q,new A.D(B.CM,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fnY(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d7,s,new A.b9(p,B.a1),s)}}
C.acT.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gp.prototype={
S(){return new C.bz1(null,null)}}
C.bz1.prototype={
Y(){var w,v=this
v.a3()
w=A.bn(null,D.bCE,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBT()},
gbDu(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b2],x.O)
case 2:return A.a([B.bv,B.aV,B.b2],x.O)
case 3:return A.a([B.aH,B.ci,B.jG],x.O)
case 4:return A.a([B.fK,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b2],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.eo(A.c6(v,new C.fnU(this,new C.ul(w.ax.a===B.I)),null),null)}}
C.azr.prototype={
S(){return new C.bz2(null,null)}}
C.bz2.prototype={
Y(){var w,v=this
v.a3()
w=A.bn(null,B.nD,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBU()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fnV(this),null)}}
C.bz0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aH($.S().r,B.aj,null,null,A.a([],x.v))
u.E(new A.jf(v))
w=A.L()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.BO(u)
t=A.a([],x.U)
w=new A.uT(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jN(y.B));--r
q=new A.BP(w,r)
w.jP()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUJ(d,q,r,o,0,0.2,4.2,0.92)
p.aUJ(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUJ(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hRq(e.a.a,e,t,t+f*i,!0),r=A.ai0(s.glg().a.getBounds())
$.S()
w=A.L()
w.b=B.aa
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IM,null).aD(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aPV.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aPW.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.ul.prototype={}
C.auy.prototype={
S(){return new C.aHd()},
ge3(){return this.c}}
C.aHd.prototype={
Y(){var w=this
w.a3()
w.d=w.a.d
w.aix()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mh(w,v)
this.a2()},
aix(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aix=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bF2(t.c,t.d.a),$async$aix)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eWC(u,s))
return A.h(null,v)}})
return A.i($async$aix,v)},
QY(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eWt(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mh(t,s),$async$QY)
case 2:if(u.c!=null)u.m(new C.eWu(u))
return A.h(null,v)}})
return A.i($async$QY,v)},
Rv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eWA(t,new C.ul(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Rv)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9R(q),$async$Rv)
case 6:case 5:t.m(new C.eWB(t,r))
w=7
return A.b(t.QY(),$async$Rv)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rv,v)},
WJ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iuu(r),$async$WJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eWo(t,new C.rv(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QY(),$async$WJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WJ,v)},
ckM(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hIU(t,new C.eWs(u),w,v)},
ack(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b6q,w,w,B.n),w,22,w,w,w,w,w,22)},
abm(d){return this.bPy(d)},
bPy(d){var w=0,v=A.j(x.H),u=this
var $async$abm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eWr(u,d))
w=2
return A.b(u.QY(),$async$abm)
case 2:return A.h(null,v)}})
return A.i($async$abm,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c6:B.hY,d=A.l(8),a0=A.W(Y.a2H,f?B.bu:B.bj,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.Hh,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eWD(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bu(A.l(22),C.aSS(!0,A.l(22),1/0,B.qN,g,d,1/0),B.aq),A.ao(10,A.dh(D.c_v,g,D.h4q,h.gb4R(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hn,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aV.j(f?0.5:0.38),B.eR,22),new A.ab(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aSS(!0,A.l(16),1/0,B.Ps,g,r.c,1/0),new A.bM(new A.o(g,g,g,g,g,new A.a7(B.aZ,B.b4,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bk,g,g),A.ao(g,h.ack(!0),g,g,8,g,8,g),A.ao(g,A.cEB(h.ack(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cEB(h.ack(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cEB(h.ack(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dh(D.bWo,g,D.fYM,h.gb4R(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hn,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c8S,B.n),g,g,g,g,B.lQ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bho,B.ol,B.hk],u):A.a([B.b2,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aV.j(f?0.45:0.35),B.eR,24)],t)
r=A.l(22)
p=A.ao(g,A.W(B.js,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.hl,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGC(h.d.gxK(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.h,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.h9.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aH.j(0.28),B.cK,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.p(g,A.bu(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bHw,A.A(A.a([o,B.as,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eD(new A.D(V.wD,A.x(A.a([A.p(g,D.asR,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fE,D.fNn],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gckL(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(Au.a4x,g,D.fLd,h.gbDY(),A.bo(B.aV,g,g,g,B.c,g,B.hP,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.W(B.a32,f?B.bu:B.bj,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.T,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qJ,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eWE(h,new C.ul(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Cy,A.as(A.na(g,f?B.bu:B.bj,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.CD,a0,g),A.E(A.c9(A.x(d,B.E,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.z1,g,g,B.ah),1)],a1),B.E,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHE(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cK,12)],x.V),n=A.l(16),m=A.p(u,u,B.f,u,u,D.b9b,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.p(u,A.W(s?B.ii:B.h3,B.b2,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd0m()
v=A.Bn(d.d)
B.d.u(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.p(u,C.bGC(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.hn,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.EP(A.A(A.a([m,A.E(new A.D(B.amI,A.A(A.a([l,B.bb,t,B.ae,k,A.aI(u,u,u,u,A.W(B.cB,(r?B.bu:B.bj).j(0.75),u,u,u,20),u,u,u,new C.eWp(this,d),u,u,u,u,u,B.cg)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.al,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b81,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.aeY.prototype={
F1(d){return this.bQW(d)},
bQW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pD(d,o,!1),$async$F1)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bN(Ah.Cw,null,x.H),$async$F1)
case 4:s=t.d
w=5
return A.b(C.fXY(!0,o,s),$async$F1)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hk(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F1)
case 6:p=f
w=7
return A.b(A.pC(o,!1),$async$F1)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F1,v)},
a0B(d){return this.cBc(d)},
cBc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pD(d,s,!1),$async$a0B)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hE(d,new C.aus(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pC(s,!1),$async$a0B)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0B,v)},
QZ(d){return this.cxf(d)},
cxf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hE(d,D.aME,!0,"NgmyWorksheetProjectScan",x.N),$async$QZ)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGD(s),$async$QZ)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fqE)
w=1
break}q=C.hjF(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dN(p,x.H),$async$QZ)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QZ,v)},
a0C(d){return this.cJx(d)},
cJx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bG7(),$async$a0C)
case 3:s=f
if(s==null){w=1
break}r=C.hjF(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dN(q,x.H),$async$a0C)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0C,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.ul(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.kF,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wC,A.p(v,A.x(A.a([w.czM(d,t,s),new A.D(D.bGU,A.x(A.a([w.b7Q(t,"QR restore"),B.T,A.A(A.a([w.b2Q(t,!0,B.ju,B.aH,B.aH,new C.eWG(w,d),"Show to scan","QR code"),B.as,w.aA9(t,B.jv,B.b7,B.bh,new C.eWH(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.db,w.b7Q(t,"Backup files"),B.T,A.A(A.a([w.aA9(t,B.hB,B.aV,B.bQ,new C.eWI(w,d),"Full copy","Backup file"),B.as,w.aA9(t,R.zJ,B.at,B.aQ,new C.eWJ(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.E,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
czM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.ff,B.cW,B.fX],k):A.a([B.b2,B.aV,B.bQ],k)
w=A.ao(l,A.W(B.vc,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kA,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cK,12)],x.V)
r=this.d
s=A.p(l,C.aSS(!0,A.l(13),64,D.bRA,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.acn,l,l,l)
r=C.bGC(r.gxK(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bHh,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.ax,t,B.P,A.A(A.a([r,B.ae,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fN,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.E,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.W(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eWF(d),l,l,l,A.ne(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aV0,l,l,l,l),l,l)],m),B.E,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7Q(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b2Q(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.alf:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aH.j(0.12),B.cK,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.tc,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eD(new A.D(E.a16,A.x(A.a([t,B.af,u,B.bF,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aA9(d,e,f,g,h,i,j){return this.b2Q(d,!1,e,f,g,h,i,j)}}
C.aus.prototype={
S(){return new C.bnZ()}}
C.bnZ.prototype={
Y(){this.a3()
this.agq()},
agq(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGE(p.c,p.d),$async$agq)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eWj(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eWk(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agq,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.C1:B.hY,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.W(B.eK,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eWl(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tW],u),B.l,h,B.e,B.h,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.ff,B.cW,B.fX],s):A.a([B.b2,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aV.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.K,h,h)
p=C.bGC(p.gxK(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fN,h,h,h)],u),B.l,h,B.b8,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.a1r,h,h,1/0)
t=g?D.bt_:B.c
q=A.l(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.VV,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.exv)
else{m=A.l(20)
l=A.K(B.bm,B.r,1)
o.push(A.p(h,A.qj(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.PI:B.Qf
k=A.W(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.hP,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(Ae.OO,e,h),A.E(A.c9(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uO,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.anS,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aux.prototype={
S(){return new C.aHc(A.zU(B.O3,B.oe,B.vk))}}
C.aHc.prototype={
t(){this.d.t()
this.a2()},
aP5(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j8(w,d)},
cgy(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.isx(t)
if(s!=null){this.aP5(s)
return}r=C.hyK(t)
if(r!=null)q=A.cR(r,p,0)
else q=!1
if(q){this.aP5(B.a.i(B.a.b3(r,B.a.cn(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eS(A.a([A.aI(t,t,t,t,A.W(u.f?B.v_:A9.PQ,t,t,t,t,t),t,t,t,new C.eWn(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C1,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fYE,t,t,t,1,t,!0),q=A.zT(u.d,B.c_,u.gcgx()),p=A.l(28)
p=A.as(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ab(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c5(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.p(t,D.fXp,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aM7.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P8.prototype={
S(){return new C.aHe(D.aen,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aHe.prototype={
gcHk(){return J.bHN(this.e,0,new C.eX5())},
Y(){this.a3()
$.aU.bZ$.push(this)
this.wo()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.fW)this.wo()},
wo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DE(q.a.c).dg(0,B.k5),$async$wo)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eX1(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eX2(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wo,v)},
Iz(d){return this.bNF(d)},
bNE(){return this.Iz(null)},
bNF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iuw(l,d),$async$Iz)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lI(l,r,q,D.dpm,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mh(t.a.c,p),$async$Iz)
case 4:o=f
w=5
return A.b(t.wo(),$async$Iz)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fnH)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fpx)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F5(m)
case 1:return A.h(u,v)}})
return A.i($async$Iz,v)},
F5(d){return this.ckx(d)},
ckx(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.auy(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F5)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mh(u.a.c,t),$async$F5)
case 5:case 4:w=6
return A.b(u.wo(),$async$F5)
case 6:return A.h(null,v)}})
return A.i($async$F5,v)},
w9(d){return this.c30(d)},
c30(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bG7(),$async$w9)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aME,!0,"NgmyWorksheetProjectScan",x.N),$async$w9)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGD(q),$async$w9)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.L(x.q).f
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hjF(s)
w=15
return A.b(C.Mh(t.a.c,p),$async$w9)
case 15:o=f
w=16
return A.b(t.wo(),$async$w9)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fpC)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F5(p)
case 1:return A.h(u,v)}})
return A.i($async$w9,v)},
OC(d){return this.bMh(d)},
bMh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eWN(d),s,null,!0,!0,x.y),$async$OC)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pc(t.a.c,A.a([],x.D)),$async$OC)
case 6:w=7
return A.b(t.wo(),$async$OC)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fnM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OC,v)},
ckK(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eWW(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8s(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jZ
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bF,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.t8,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a16(d,e){return this.cky(d,e)},
cky(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a16=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eWR(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a16)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hIU(r,new C.eWS(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OE(d,e),$async$a16)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a16,v)},
b5t(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CK,A.A(A.a([s,B.bb,t,A.W(B.eI,w?B.bu:B.bj,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cru(d,e,f,g,h,i){return this.b5t(!1,d,e,f,g,h,i)},
OE(d,e){return this.bMr(d,e)},
bMr(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lt(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OE)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bEP(t.a.c,d.a),$async$OE)
case 6:w=7
return A.b(t.wo(),$async$OE)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.ul(n),l=n?B.c6:B.hY
if(p.f)n=D.bf7
else{w=A.aE(d,B.dD,x.w).w
v=p.bGL(m)
u=p.c24(m)
t=p.gbDR()
if(n)s=B.jZ
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gp(A.p(o,A.A(A.a([p.aDI(Q.Pr,"Projects",m,D.aen),p.aDI(B.uU,"Cashier",m,D.b2V),p.aDI(B.Hz,"Family Tree",m,D.hKK)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.aen){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3,new C.azr(p.gaTu(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.crw(m)],q))}else{n=p.a
if(v===D.b2V)t.push(new C.aql(n.c,m,o))
else{v=p.r
t.push(new C.arz(n.c,n.d,n.e,n.f,new C.eX8(p),new C.eX9(p),new A.bf(v,x.b4)))}}n=A.c9(A.x(t,B.E,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGL(d){var w=null,v=A.l(8),u=d.a,t=A.W(Y.a2H,u?B.bu:B.bj,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kB,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWK(this),w,w,w,w,w,w,w)},
gbDR(){switch(this.d.a){case 0:return D.adv
case 1:return D.hzG
case 2:return D.adw}},
c24(d){var w=null,v=A.l(15),u=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c1r,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bb,D.bLU,A.aG(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.p(w,D.bZM,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWO(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.h,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gp(A.p(w,A.x(A.a([new A.D(B.Ha,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bn(this.gcHk()),w,w,w,w,w,w,D.fHq,w,w,w)],t),B.E,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.t7,B.jr,w,w,1/0)],t),B.E,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hzF,w)},
aDI(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aV.j(0.42),B.cK,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bj
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bj
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cT(u,A.A(A.a([w,B.e7,new A.di(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b8,B.h,0,u,u),u,u,B.cj,new A.o(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.Hi,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eX4(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
crw(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.p(p,D.bZT,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aV.j(0.5),B.eR,28)],x.V),D.cbp,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gp(A.p(p,A.x(A.a([t,B.db,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e3,A.A(A.a([A.E(q.aV4(B.jv,"Scan QR",new C.eWZ(q),d),1),B.as,A.E(q.aV4(R.zJ,"Upload file",new C.eX_(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bI(D.h86,p,q.gaTu(),A.bo(B.aV,p,p,p,B.c,B.hg,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bIn,1.05,D.adv,p)}w=J.b8(q.e,new C.eX0(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gp(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bU,1,D.adv,p)},
aV4(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.W(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fFC,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.a0V,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
crv(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.l(14),n=t?B.bu:B.bj
n=A.bu(B.Y4,new A.fH(1.7777777777777777,C.aSS(!0,B.fk,1/0,Q.Pr,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bn(d.gxK()),u,u,u,u,u,u,D.fDz,u,u,u)],w),B.E,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aI(u,u,u,u,A.W(Al.a3L,t?B.bu:B.bj,u,u,u,u),u,u,u,new C.eWX(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.E,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eWY(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bAP.prototype={}
C.rv.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd0m(){var w,v,u,t,s=this.c
if(s===B.i.fK(s))w=B.o.v(B.i.M(s))
else{v=B.i.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lI.prototype={
gxK(){return B.d.cF(this.d,0,new C.cHh())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.cHg(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfS(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lI(w.a,w.b,v,u,w.e)},
bfA(d){return this.bfS(d,null)},
TK(d){return this.bfS(null,d)}}
C.Iy.prototype={
a7(){return"FamilyGender."+this.b}}
C.i1.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hE3(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGr(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i1(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amy.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.l1.prototype={
gaqP(){var w=this.f
return new A.Y(w,new C.bTy(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.bTx(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ikM(w.y),"games",w.z],x.N,x.z)},
x5(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.l1(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfR(d,e){var w=null
return this.x5(w,w,w,d,e,w,w,w,w)},
cQH(d,e,f,g,h,i,j){return this.x5(d,e,null,f,g,h,i,j,null)},
aGw(d,e){var w=null
return this.x5(w,w,w,w,d,w,w,e,w)},
cQJ(d,e,f,g,h,i,j,k){return this.x5(d,e,null,f,g,h,i,j,k)},
cPc(d){var w=null
return this.x5(w,w,w,w,w,w,w,d,w)},
cPA(d){var w=null
return this.x5(w,w,w,w,w,w,w,w,d)},
bfu(d){var w=null
return this.x5(w,w,d,w,w,w,w,w,w)},
aGh(d){var w=null
return this.x5(w,w,w,w,w,d,w,w,w)},
cQe(d,e,f){var w=null
return this.x5(w,d,w,w,e,w,w,f,w)},
cP_(d){var w=null
return this.x5(w,w,w,d,w,w,w,w,w)},
cPM(d,e){var w=null
return this.x5(d,w,w,w,w,w,e,w,w)}}
C.cHi.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cHj.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJj.prototype={}
C.bbo.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bbo()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b4(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbn.prototype={
gwW(){return!0},
gGE(){return this.z.b<this.b.length},
aWL(d){switch(0){case 0:return d.a.c}},
aWr(d){switch(0){case 0:return d.a.d}},
bWw(d,e){switch(0){case 0:return new A.hX(d,e)}},
bVU(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hh(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iX(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ih(b4)
switch(0){case 0:v=b5.b
u=new A.kZ(0,v,0,1/0)
t=w===B.VN
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hh(b4,u,!0)
f=b1.aWL(g)
f.toString
e=b1.aWr(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJj(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJj(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hX(m,l))
a0=q.a
a1=q.b
b1.a=new A.iX(0,0,a0,a1)
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
a8=b1.aWL(g)
e=b1.aWr(g)
e.toString
a9=b1.bVU(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWw(a6,a3+a9)
b0=g.a
g.a=new A.iX(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iw()
v=A.dr()
u=r.a
v.eb(u.a,u.b,0,1)
w.pu(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nF(0)},
Ha(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iw(){return this.z}}
C.bz4.prototype={}
var z=a.updateTypes(["aB<~>()","Q(i1)","~()","Q(l1)","Q(nB)","a9<n,@>(l1)","F(l1,l1)","F(i1,i1)","n(i1)","l1(a9<@,@>)","Q(lI)","nB(a9<@,@>)","a9<n,@>(nB)","Q(uV)","uV()","F(i1)","ai<i1>()","Q(zC)","a0p(Z)","n?(i1)","eM<n?>(i1)","aB<~>(lI)","Q(rv)","a9<n,@>(i1)","i1(a9<@,@>)","F(lI,lI)","Q(agg)","~(bd)","v(oP)","F(F,aai)","Q(qO<F>)","~(qO<F>)","Ub(Z)","Q(MV)","Q(uU)","~(i1)","n(n)","Ww(Z)","Ua(Z)","aeD(Z)","a_l(Z)","i1(i1)","cK(bA<n,GF>)","cK(L0)","a_P(Z)","F?(i1)","i1()","Q(L0)","D(i1)","~(Iy)","a_L(Z)","v(Iy,n,a_)","Q(ag9)","bA<n,ai<a9<n,@>>>(n,ai<nB>)","a_N(Z)","+count,id,name(F,n,n)(l1)","n(l1)","a0J(Z)","a0K(Z)","Q(m0)","m0()","ZU(Z)","a2v(Z)","a_n(Z)","a_m(Z)","~(F)","~(n,ly?)","v(rv)","aeY(Z)","~(mr)","aB<~>([n?])","H(H,lI)","v(lI)","H(H,rv)","a9<n,@>(rv)","rv(a9<@,@>)","ai<ly>()","uU()","n(V)","lI(a9<@,@>)","cu(Ix)","n(lI)","a9<n,@>(lI)","F(nB,nB)","l1(a9<n,@>)","l1(l1)"])
C.fQg.prototype={
$1(d){return d.a+" "+d.b},
$S:130}
C.fQf.prototype={
bp9(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rm(s,d,B.i1,"book",E.GY),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.X(r!=null&&A.M3(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bp9(d)},
$S:253}
C.fQh.prototype={
$1(d){return d.b},
$S:130}
C.h_b.prototype={
$1(d){var w=null
return A.eH(w,B.L,new H.QA(this.a,this.b,w),w,w,0,B.a17,w,B.d7,w,w,w)},
$S:46}
C.fDl.prototype={
$1(d){return d!=null},
$S:221}
C.fDm.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:221}
C.fDr.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:176}
C.fO_.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hi(w,B.tN,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wM
return new A.og(D.bDH,A.ab8(A.a([new A.h0(130,w,v),new A.zB(1,B.Hs,A.fe(e,w,w,w,A.hi(w,g==null?D.ezT:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yH,B.lW))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1979}
C.fNZ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w2(999)
f=A.xH(A.lV(h,A.fe("Cashier",h,h,h,A.hi(h,D.AE,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.l_(D.ezK,h,f,B.i6,h),h,h,D.bEa,h))
w=A.xH(A.fe("Debt receipt",h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xH(A.fe(C.xn(new A.V(Date.now(),0,!1),!0),h,h,h,D.abW,h))
u=A.w2(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.abW,h)
q=A.w2(10)
p=x.Z
u=A.lV(h,A.zu(A.a([s,new A.h0(h,2,h),r,new A.h0(h,10,h),A.lV(h,A.zu(A.a([A.fe("Amount owed",h,h,h,D.abW,h),new A.h0(h,2,h),A.fe(A.Bn(t.c),h,h,h,A.hi(h,D.AE,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rZ,B.lW),h,new A.l_(B.pR,h,q,B.i6,h),h,h,D.bDn,1/0)],p),B.rZ,B.lW),h,new A.l_(E.aO0,h,u,B.i6,h),h,h,D.bFm,1/0)
q=new A.o_(D.ezN,0.9,B.lg)
r=A.w2(12)
s=i.c
o=s.$2("Original due",C.xn(t.r,!1))
n=s.$2("Current due",C.xn(t.f,!1))
m=i.d
l=new A.o_(m,1.1,B.lg)
k=A.w2(8)
j=i.a
k=A.a([o,n,new A.h0(h,6,h),A.lV(h,A.xH(A.fe(t.gaND(),h,h,h,A.hi(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.l_(h,new A.q6(l,l,l,l),k,B.i6,h),h,h,D.bEj,1/0),new A.h0(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AE))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AE))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hi(h,B.tN,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TL>")
o=A.C(new A.N(o,new C.fNY(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h0(h,4,h),n,new A.h0(h,6,h),new C.bbn(5,5,new C.bbo(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h0(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h0(h,8,h),w,new A.h0(h,3,h),v,new A.h0(h,16,h),u,new A.h0(h,10,h),A.lV(h,A.zu(k,B.yH,B.lW),h,new A.l_(h,new A.q6(q,q,q,q),r,B.i6,h),h,h,B.amM,1/0)],p)
w=j.a
if(w!=null){v=new A.o_(B.K0,1,B.lg)
B.d.u(f,A.a([new A.h0(h,16,h),A.fe("Debtor signature",h,h,h,A.hi(h,B.tN,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.h0(h,6,h),A.lV(h,new A.IR(w,B.Yh,h,h),h,new A.l_(h,new A.q6(v,v,v,v),A.w2(6),B.i6,h),82,h,B.OL,1/0)],p))}f.push(new A.h0(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fvS,h))
f.push(new A.h0(h,18,h))
f.push(A.xH(A.fe("NGMY.ORG",h,h,h,A.hi(h,D.AE,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:388}
C.fNY.prototype={
$1(d){var w=null,v=new A.o_(D.K1,0.7,B.lg),u=A.w2(999)
return A.lV(w,A.fe(C.xn(d,!1),w,w,w,A.hi(w,D.K1,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.l_(w,new A.q6(v,v,v,v),u,B.i6,w),w,w,D.bJO,w)},
$S:1980}
C.c8V.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.p(w,A.d(C.xn(d,!1),w,w,w,w,w,w,D.fD0,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eP,w,w,w)},
$S:1981}
C.h_I.prototype={
$1(d){var w=null,v=A.aE(d,B.bZ,x.w).w,u=A.l(26),t=A.aI(w,w,w,w,D.c2q,w,w,w,new C.h_F(d),w,w,w,w,w,B.cg),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eH(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a0W,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.di(1,B.cn,A.c9(A.x(A.a([new A.eo(new C.b0q(r,w),s),B.T,A.A(A.a([A.E(A.en(B.zR,w,D.h4l,new C.h_G(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fi,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a4n,w,D.h0L,new C.h_H(r,d),A.bo(B.b2,w,w,w,B.c,w,B.fi,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Aq.a1j,w,B.d7,w,w,w)},
$S:46}
C.h_F.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h_G.prototype={
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
break}r=J.eR(B.dI.gaT(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aA(o,0,32)
w=5
return A.b(A.rp(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h_H.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fUM(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h_A.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eH(w,B.av,A.x(A.a([new A.D(D.bFa,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nf,w,w,w),1),A.aI(w,w,w,w,B.lt,w,w,w,new C.h_y(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.di(1,B.cn,new A.D(B.f2,A.bu(A.l(14),A.fX(t,B.z,w,w,B.cm,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Oo,new A.a5(1/0,w,A.dh(B.oP,w,D.aYm,new C.h_z(t,this.c,d),A.bo(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.OB,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:46}
C.h_y.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h_z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rp(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h_M.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eH(w,B.av,new A.D(D.bFi,A.x(A.a([A.A(A.a([D.bKZ,A.aI(w,w,w,w,B.lt,w,w,w,new C.h_K(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.eo(A.bu(A.l(14),A.p(w,A.b5(w,w,w,new C.bdC(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oP,w,D.aYm,new C.h_L(t,s,d),A.bo(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:46}
C.h_K.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h_L.prototype={
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
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aA(p,0,32)
r=J.eR(B.dI.gaT(s))
w=5
return A.b(A.rp(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fIe.prototype={
$1(d){return d.a===this.a},
$S:252}
C.dRl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dR6.prototype={
bon(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dR9(s,q,e),p,!0,!0,!1,B.Ki,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dRa(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bon(d,e)},
$S:1982}
C.dR9.prototype={
$1(d){var w,v=null,u=this.c===B.xj,t=u?D.dwm:D.drR
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.ani,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.ix(!0,v,v,B.y,D.fmm,new C.dR8(this.a,w,t,d),t.length,v,B.e0,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dR8.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bu:B.bj).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b0p(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dR7(t.d,r),s,s,s,s,s,s,s)},
$S:193}
C.dR7.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dRa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dR4.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:88}
C.dR5.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cj,e,v)
return new A.d2(e,!1,A.io(B.z,A.as(A.aG(!1,B.a3,!0,v,new A.e3(new C.dR3(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bh(t,new A.bq(0.96,1,u),u.k("bh<bP.T>"))),v)},
$S:34}
C.dR3.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.K((h?B.bu:B.bj).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.W(B.cB,i.a.d.a?B.bu:B.bj,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQP(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVB("Name")
r=l.a
q=r.d==null?k:new C.dQQ(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.ma
n=A.K(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfK(new A.D(B.f1,A.aM(!1,p,!0,A.p(B.z,C.b0p(m==null?"\ud83d\udc64":A.fOO(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lc,k,B.abL,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aWh("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQR(r,a0),r.d===B.xj),1),B.ae,A.E(i.aWh("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQW(r,a0),r.d===B.a8h),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.hv(D.c0F,D.h2C,new C.dQX(r,l.e,a0),A.fs(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cg)),k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uY(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVC("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ea,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bj).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xn(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.h,0,B.p),1),D.bYg],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQY(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVB("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3Q(r.b.length!==0,B.mi,new C.dQZ(r,i,a0),new C.dR_(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3Q(r.c.length!==0,D.bRy,new C.dR0(r,i,d,a0),new C.dR1(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ao.a8X("Signature (optional)",t,new C.dR2(a0),new C.dQS(a0,t),new C.dQT(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bj
s=(i?B.bu:B.bj).j(0.28)
s=A.E(A.dW(E.aYf,new C.dQU(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qH,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cW,k,k,k,B.c,k,B.qH,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vQ,k,k,k),k,new C.dQV(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.c9(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.t9,B.jr,k,k,360)},
$S:162}
C.dQP.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dQQ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQR.prototype={
$0(){return this.b.$1(new C.dQO(this.a))},
$S:0}
C.dQO.prototype={
$0(){var w=this.a
w.d=B.xj
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQW.prototype={
$0(){return this.b.$1(new C.dQN(this.a))},
$S:0}
C.dQN.prototype={
$0(){var w=this.a
w.d=B.a8h
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQX.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xs(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dQM(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQM.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gcl(),w.gci(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dQZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qg(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dQL(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQL.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dR_.prototype={
$0(){return this.b.$1(new C.dQK(this.a))},
$S:0}
C.dQK.prototype={
$0(){return this.a.b=""},
$S:0}
C.dR0.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bT(q,null,new C.dQI(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qg(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dQJ(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQI.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asI,w,w,w,w,new C.dQC(d),!1,w,w,w,w,w,w,w,D.fTH,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.asG,w,w,w,w,new C.dQD(d),!1,w,w,w,w,w,w,w,D.h_K,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQC.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dQD.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dQJ.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dR1.prototype={
$0(){return this.b.$1(new C.dQH(this.a))},
$S:0}
C.dQH.prototype={
$0(){return this.a.c=""},
$S:0}
C.dR2.prototype={
$0(){return this.a.$1(new C.dQG())},
$S:0}
C.dQG.prototype={
$0(){},
$S:0}
C.dQS.prototype={
$0(){return this.a.$1(new C.dQF(this.b))},
$S:0}
C.dQF.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aj9(u.a,null,null,new C.dQE(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQE.prototype={
$4(d,e,f,g){this.a.$1(new C.dQB(this.b,d))},
$S:482}
C.dQB.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dQU.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dQV.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.frw)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fok)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dRo.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:88}
C.dRp.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bj).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bn(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bj,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zO(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zO(r).length>0?B.bD:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bj
t=(q?B.bu:B.bj).j(0.28)
s=x.p
return new A.d2(e,!1,A.as(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dW(B.o7,new C.dRm(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k6,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.h0b,r,new C.dRn(d),A.bo(B.cW,r,r,r,B.c,r,B.k6,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.CO,B.Ha,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dRm.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRn.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dRi.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dRj(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bj).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bn(l.c),s,s,s,s,s,s,D.fED,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.iU((r.a.d.a?B.bu:B.bj).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a32,"View receipt",new C.dRb(r,d,l))
u=l.x!=null
t=u?B.pE:B.qQ
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bFf,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dRc(r,d,l)),q.$3$icon$label$onTap(B.D2,"Edit",new C.dRd(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dRe(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bRx,"View / download selfie",new C.dRf(r,d,l)))
if(l.gaIc())p.push(q.$3$icon$label$onTap(Ad.a4d,"View / download signature",new C.dRg(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ej,"Delete",new C.dRh(r,d,l)))
p.push(B.ax)
return A.bm(!0,new A.D(B.t7,A.p(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dRj.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eV,A.A(A.a([A.W(e,w,v,v,v,20),B.bb,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1983}
C.dRb.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h_E(w,this.c)},
$S:0}
C.dRc.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.T2(this.c)},
$S:0}
C.dRd.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DM(this.c)},
$S:0}
C.dRe.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGY(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dRf.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bGY(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dRg.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h_J(w,this.c)},
$S:0}
C.dRh.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qf(0,this.c)},
$S:0}
C.dRq.prototype={
$1(d){return d.x==null},
$S:252}
C.dRr.prototype={
$1(d){return d.x!=null},
$S:252}
C.dRs.prototype={
$2(d,e){return d+e.c},
$S:1984}
C.dRt.prototype={
$0(){return this.a.bEm()},
$S:0}
C.dRk.prototype={
$0(){return this.a.agD(this.b)},
$S:0}
C.fJ_.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fJ0.prototype={
$0(){return B.d.gH(D.a5x)},
$S:z+77}
C.dh0.prototype={
$0(){var w=this.a
return w.m(new C.dgZ(w,this.b))},
$S:0}
C.dgZ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dh_.prototype={
$0(){},
$S:0}
C.dh1.prototype={
$0(){var w=this.a.gc2P()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fLw.prototype={
$1(d){return C.ho4(A.a1(d,x.N,x.z))},
$S:z+11}
C.fLx.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fLy.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.fZf.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h6S.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fI5.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bSf.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eB(e,v)?v:null},
$S:1985}
C.fZQ.prototype={
$1(d){var w=this
return new C.a_N(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dhG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dhF(w,d))},
$S:z+80}
C.dhF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhu.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dhr.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dh2.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dh3.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dhv.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dhb.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bO(!1,B.ds,w,w,!0,w,w,w,new C.dh9(d),w,w),A.bI(B.xI,w,new C.dha(d),A.bo(B.nq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dh9.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dha.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhc.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dhs.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dht.prototype={
$0(){return B.d.gH(D.A3)},
$S:z+14}
C.dh7.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz8(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ua(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dh8.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhd.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_l(v,u,J.ad(w.d),null)},
$S:z+40}
C.dhe.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhE.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.a_2(r.y,r.gz8(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dhC(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.u(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcZ(v,e,w,u,t,r.gbUZ(),C.hE2(r.y.Q),r.gz8(0),s)
w=t}return A.c6(q,new C.dhD(r,e),new A.D(B.a1c,w,s))},
$S:1986}
C.dhD.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvs(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fA(B.a5,A.d3(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dhC.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJo(B.qz,B.iB)},
$S:0}
C.dho.prototype={
$0(){var w=this.a
return w.m(new C.dhn(w))},
$S:0}
C.dhn.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dhp.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dh4.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.kw.j(0.5),r=x.p,q=A.a([D.fSe,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_5(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_5(d,K.aqD,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_5(d,X.arB,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_5(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_5(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eH(u,E.Cc,A.bm(!0,new A.D(Ac.z_,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.OE,u,B.d7,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.dhq.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dhh.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_P(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dhi.prototype={
$1(d){var w=null
return A.oU(!1,A.ek(w,w,w,E.Cc,new A.k7(this.a,new C.dhg(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:310}
C.dhg.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.abp,B.p5,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:764}
C.dhj.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dhk.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dhl.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bw(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SO(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dhf(s,t))
w=4
return A.b(s.lj(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhx.prototype={
$1(d){var w=null
return A.oU(!1,A.ek(w,w,w,E.Cc,new A.k7(this.a,new C.dhw(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:310}
C.dhw.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.abp,B.p5,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:764}
C.dhy.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dhz.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dhA.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dhB.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bw(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lj(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dh5.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.blj(B.qz,A4.Oc)},
$S:0}
C.dh6.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJo(B.qz,A4.Oc)},
$S:0}
C.djs.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.djt.prototype={
$1(d){var w=this.a
return w.m(new C.djr(w))},
$S:9}
C.djr.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dju.prototype={
$1(d){var w=this.a
return w.m(new C.djq(w))},
$S:9}
C.djq.prototype={
$0(){return this.a.e="book"},
$S:0}
C.djv.prototype={
$1(d){var w=this.a
return w.m(new C.djp(w))},
$S:9}
C.djp.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.djw.prototype={
$0(){var w=this.a
return w.m(new C.djo(w,this.b))},
$S:0}
C.djo.prototype={
$0(){var w=this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.djx.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2W()
A.a6(this.b,!1).N(new A.brQ(w,v))},
$S:0}
C.dhV.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dhU.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_L(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dhZ.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dhY.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bbh(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hs,v,v,v)
return A.ek(A.a([A.bO(!1,B.ds,v,v,!0,v,v,v,new C.dhW(d),v,v),A.bI(B.xI,v,new C.dhX(d),A.bo(B.nq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Cc,w,v,v,v,v,D.fR0,v)},
$S:18}
C.dhW.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dhX.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.di_.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.di0.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.c9(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bGe,t,t,B.ah)},
$S:299}
C.dhT.prototype={
$0(){return this.a.R2(0,this.b)},
$S:0}
C.dhS.prototype={
$0(){return this.a.Qu(0,this.b)},
$S:0}
C.cQj.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cQk.prototype={
$0(){return B.d.gH(D.A3)},
$S:z+14}
C.cQl.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bR(0,new A.D(d,new A.bM(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bk,w,w),w),0,0,0)},
$S:1988}
C.d8S.prototype={
$1(d){return this.a.m(new C.d8R(this.b,this.c))},
$S:9}
C.d8R.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d9g.prototype={
$1(d){return this.a.m(new C.d93())},
$S:2}
C.d93.prototype={
$0(){},
$S:0}
C.d9h.prototype={
$1(d){return this.a.m(new C.d92())},
$S:2}
C.d92.prototype={
$0(){},
$S:0}
C.d9i.prototype={
$0(){var w=this.a
return w.m(new C.d91(w,this.b))},
$S:0}
C.d91.prototype={
$0(){var w=this.a
return w.d=w.gox().Gj(this.b.a)},
$S:0}
C.d9j.prototype={
$0(){var w=this.a
return w.m(new C.d90(w,this.b))},
$S:0}
C.d90.prototype={
$0(){var w=this.a
return w.d=w.gox().cOw(this.b)},
$S:0}
C.d9k.prototype={
$1(d){return this.a.m(new C.d9_())},
$S:2}
C.d9_.prototype={
$0(){},
$S:0}
C.d9l.prototype={
$0(){var w=this.a
return w.m(new C.d8Z(w,this.b))},
$S:0}
C.d8Z.prototype={
$0(){var w=this.a
return w.d=w.gox().cOB(this.b.a)},
$S:0}
C.d9m.prototype={
$1(d){var w=this.a
return w.m(new C.d9b(w,d))},
$S:6}
C.d9b.prototype={
$0(){var w=this.a
return w.d=w.gox().cPv(this.b)},
$S:0}
C.d9n.prototype={
$1(d){var w=this.a
return w.d=w.gox().aGk(d)},
$S:2}
C.d9o.prototype={
$1(d){var w=this.a
return w.d=w.gox().cOE(d)},
$S:2}
C.d9q.prototype={
$1(d){var w=this.a
return w.d=w.gox().cPt(d)},
$S:2}
C.d9r.prototype={
$1(d){var w=this.a
return w.m(new C.d9a(w,d))},
$S:9}
C.d9a.prototype={
$0(){var w=this.a
return w.d=w.gox().cPk(this.b)},
$S:0}
C.d9s.prototype={
$0(){var w=this.a,v=w.gox(),u=B.a.i(w.gz8(0).a.a),t=B.a.i(w.gaDw().a.a)
u=v.bg0(B.a.i(w.gat7().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bSp.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:8}
C.bSj.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSi(w,d))},
$S:11}
C.bSi.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bSs.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bSk.prototype={
$0(){var w=this.a
w.Q=D.b2u
w.aed(1)
w.r.x=null},
$S:0}
C.bSl.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b2u)return
w=new A.e0()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d6S[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bSo.prototype={
$0(){var w=this.a
w.Q=D.ae2
w.aed(2)
w.r.z=null},
$S:0}
C.bSn.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hIF
t.aed(3)
w=t.r
w.d=s
w.x="I say: "+t.gCF()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.ddt[v.aw(4)]:D.dyV[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bSq.prototype={
$0(){var w=this.a
w.Q=D.b2v
w.CW=this.b
w.cy=1
w.aed(4)
w.r.f=w.f.a+5},
$S:0}
C.bSr.prototype={
$0(){},
$S:0}
C.bSm.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSg.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bSh.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bTW.prototype={
$0(){var w=this
return w.a.Rm(w.b,0,w.c,w.d)},
$S:0}
C.bTX.prototype={
$0(){var w=this
return w.a.Rm(w.b,3,w.c,w.d)},
$S:0}
C.bTY.prototype={
$0(){var w=this
return w.a.Rm(w.b,1,w.c,w.d)},
$S:0}
C.bTZ.prototype={
$0(){var w=this
return w.a.bUp(w.b,w.c,w.d)},
$S:0}
C.bU_.prototype={
$0(){var w=this
return w.a.Rm(w.b,4,w.c,w.d)},
$S:0}
C.bU0.prototype={
$0(){var w=this
return w.a.Rm(w.b,2,w.c,w.d)},
$S:0}
C.bU1.prototype={
$0(){var w=this
return w.a.Rm(w.b,5,w.c,w.d)},
$S:0}
C.bU2.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:763}
C.bTV.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6I[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fE(r,B.cx,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fvy,e),B.a7,B.c1,r,B.dJ,B.c2)
o.nB(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.bW(w,v.gba(v)+12,u+18),B.i4)
u=this.a
v=t.eD(B.dL)
w=$.S()
s=A.L()
s.r=B.dB.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qq.gp(0)
u.aq(t,s)
w=new A.aH(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bw())
v=A.L()
v.r=D.qq.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:762}
C.bSG.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bSH.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.amV(d),w.amV(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fw6.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h6J.prototype={
$2(d,e){if(e!=null)J.c4(this.a.c1(0,d,new C.h6K()),e)},
$S:z+66}
C.h6K.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h6L.prototype={
$1(d){return d!==this.a},
$S:3}
C.h6M.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h6N.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h6I(this.c,d))},
$S:3}
C.h6I.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h6O.prototype={
$1(d){return d!==this.a},
$S:3}
C.h6P.prototype={
$1(d){return d!==this.a},
$S:3}
C.h6Q.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h6H(this.c,d))},
$S:3}
C.h6H.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fJC.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fY9.prototype={
$1(d){return d.Q},
$S:z+15}
C.fYa.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fFr.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fMs.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bNt.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h78.prototype={
$2(d,e){return B.o.aQ(C.hAa(d),C.hAa(e))},
$S:217}
C.h79.prototype={
$1(d){return d!==this.a},
$S:3}
C.fYM.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLC.prototype={
$0(){var w=this.a
w.ch=!0
w.b9w()},
$S:0}
C.bLx.prototype={
$0(){},
$S:0}
C.bLD.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bLv.prototype={
$0(){},
$S:0}
C.bLw.prototype={
$0(){},
$S:0}
C.bLB.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b5(u,u,u,new C.bdE(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fDc,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bU,u,u,u),u,u,14,14,6,u))}return A.az(B.bY,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bLy(t,e),u,u,u,u,u,u,u,new C.bLz(t,e),u,u,u,u,u,u,u,u,u,new C.bLA(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bLy.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLA.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bLz.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLu.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.crj.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.crk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cri(w))},
$S:0}
C.cri.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.crl.prototype={
$0(){var w=this,v=w.a
v.gj2()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.crm.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.crn.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cro.prototype={
$0(){},
$S:0}
C.crp.prototype={
$0(){var w=this.a
w.z=w.XA(++w.e)
w.Q=A.c1(w.gkT()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.crf.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.crg.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj2().length,e=i/2,d=new C.crh(i,f,h),a0=g.as,a1=A.a3(a0).k("b7<2>")
a0=A.C(new A.b7(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c6(new A.he(a0),new C.cra(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj2().length!==0&&!B.d.q(g.gj2(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QS(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.N2(new C.crb(g,u),new C.crc(g,u),new C.crd(g,u),j,j,new A.bf("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fj:B.bc,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj2().length!==0&&!B.d.q(g.gj2(),-1)){a0=g.e+1>=g.gkT().length?"See my result":"Next family"
g=A.as(C.uz(a0,g.gqs(g),B.cV,B.jt,D.fB),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XA(0):s).length))break
if(!B.d.q(g.gj2(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XA(0)
o=s}else o=s
n=s[u]
n=A.e4(B.z,new C.QS(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XA(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rb(new A.bq(0,p,t),new C.cre(),new S.Er(u,j,new C.QS(l.b,k,62,!1,j),new A.kN(0.25,new C.QS(m.b,k,62,!1,j),j),new A.ke(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,S.hDV(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bf("chip-"+r,a0),w),B.b0,B.iR,j,new A.bf("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:62}
C.crh.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:527}
C.cra.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj2().length!==0&&!B.d.q(t.gj2(),-1)
return A.b5(p,p,p,new C.bd7(q.b,o,v,w,p),B.az)},
$S:56}
C.crc.prototype={
$1(d){return this.a.gj2()[this.b]===-1},
$S:z+30}
C.crd.prototype={
$1(d){return this.a.cSn(this.b,d.a)},
$S:z+31}
C.crb.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj2()[t]!==-1,r=A.l(18),q=e.length!==0?B.cV.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cV:B.k0,B.r,2)
u=s?A.lH(new C.cr9(),A.as(new C.QS(u.gaFN()[u.gj2()[t]].b,u.gaFN()[u.gj2()[t]].a,62,!1,v),v,v,v),B.nk,B.iR,v,v,new A.bq(0.3,1,x.X),x.i):D.bdM
return A.cT(v,u,v,v,B.b0,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1991}
C.cr9.prototype={
$3(d,e,f){return A.e4(B.z,f,e,null,null)},
$S:112}
C.cre.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cRn.prototype={
$1(d){return d>=1},
$S:122}
C.cGg.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkT()[w.e].d.length)w.m(new C.cGf(w))},
$S:11}
C.cGf.prototype={
$0(){return this.a.f++},
$S:0}
C.cGo.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cGp.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cGq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGn(w))},
$S:0}
C.cGn.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cGr.prototype={
$0(){return this.a.f++},
$S:0}
C.cGs.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cGt.prototype={
$0(){},
$S:0}
C.cGu.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cGi.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cGj.prototype={
$3(d,e,f){var w=null
return A.lH(new C.cGh(this.a,e),w,B.b0,B.hN,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1992}
C.cGh.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cV.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.i0(new A.BF(new A.uS(B.w.j(e),B.Mc,v,B.YL),H.bYc(A.b5(v,v,v,new C.aC6(u.gkT()[u.e].c,u.as,v),B.az),new A.Ew(w,w,B.WD)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1993}
C.cGk.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,14*(1-e))),e)},
$S:103}
C.cGl.prototype={
$3(d,e,f){return A.dP(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cGm.prototype={
$0(){return this.a.bqE(this.b)},
$S:0}
C.f8G.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anr$)
v.anr$=w
v.qe$.sp(0,w)
v.arl(u)},
$S:8}
C.fiQ.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bTr.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTq())},
$S:0}
C.bTq.prototype={
$0(){},
$S:0}
C.bTo.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bTm.prototype={
$0(){},
$S:0}
C.bTn.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMV()
w=s+1>=r.length?3:5
break
case 3:q=C.bHb(p.gaqa(0),0,r.length)
p.m(new C.bTj(p,q))
o=p
w=6
return A.b(C.BS(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BT(s.d,s.c.a,"school",p.gaqa(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bTk())
w=4
break
case 5:p.m(new C.bTl(p))
p.gqA().W8(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bTj.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bTk.prototype={
$0(){},
$S:0}
C.bTl.prototype={
$0(){return this.a.x++},
$S:0}
C.bTp.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bTi.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.f8H.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hE8(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EC
C.SM(q,D.et6,0,0.2,-0.6,-0.2,null,w,D.erQ,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.Gy.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f8I.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SM(this.a,D.esc,0,u,0.7,-0.5,null,null,D.JU,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f8J.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SM(this.a,D.etT,0,0,0.8,-0.5,null,null,D.JU,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f8K.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SM(w.b,D.et0,0,v,-0.8,-0.5,null,null,D.JU,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f8L.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.et4:D.EC
C.SM(p,D.esw,0,t,0,-0.6,null,v,D.JU,3,0,s,1.3,u,0,w,0)
q=q.ccY(new A.r(222,455),9)
$.S()
w=A.L()
w.r=B.cV.gp(0)
p.af(q,w)},
$S:0}
C.f8M.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:763}
C.bT4.prototype={
$2(d,e){return d+e},
$S:66}
C.bTf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bTg.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bTh.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj2()[u.b]=s
t.gj2()[u.d]=t.y
w=t.as
v=t.qe$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bTb.prototype={
$1(d){return d},
$S:96}
C.bTa.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qe$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bTc.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bTd.prototype={
$0(){},
$S:0}
C.bTe.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FN(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cn(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bT6.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bT7.prototype={
$2(d,e){var w=this.a
w=w.gkT()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:66}
C.bT8.prototype={
$2(d,e){var w=null,v=C.heZ(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.bY,new A.eo(A.b5(w,w,w,new C.bkg(u,u.qe$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bT5(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bT5.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj2().length
u=B.o.D(B.i.bg((t.a-s.a)/r/450*v),0,v-1)
w.d2d(w.gj2()[u])}},
$S:23}
C.bT9.prototype={
$1(d){var w=this.a
return w.gkT()[w.f].d[d]},
$S:76}
C.dsC.prototype={
$2(d,e){return 0},
$S:66}
C.bSR.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSQ())},
$S:0}
C.bSQ.prototype={
$0(){},
$S:0}
C.bSP.prototype={
$0(){},
$S:0}
C.bSJ.prototype={
$0(){},
$S:0}
C.bSK.prototype={
$0(){},
$S:0}
C.bSO.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Bo},
$S:0}
C.bSN.prototype={
$1(d){var w=null,v=this.a.gqA(),u=A.d(d,w,w,w,w,w,w,D.aWO,w,w,w),t=v.gbn4(0)
return A.az(B.bY,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aX1,w,w,w)],x.p),B.E,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbt0(v),w,w,w,w,w,w,!1,B.a4)},
$S:133}
C.bSL.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bSM.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSI.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e2Z.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3_.prototype={
$1(d){return this.a},
$S:39}
C.e30.prototype={
$0(){var w=this.a
return w.d=w.gT4().bfu(this.b)},
$S:0}
C.e2X.prototype={
$1(d){return new C.Ub(this.a,null)},
$S:z+32}
C.e2Y.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e2W.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hs,w,w,w)
return A.ek(A.a([A.bO(!1,E.aYp,w,w,!0,w,w,w,new C.e2U(d),w,w),A.bO(!1,D.fYD,w,w,!0,w,w,w,new C.e2V(d),w,w)],x.p),w,w,D.fB,v,w,w,w,w,D.fL6,w)},
$S:18}
C.e2U.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e2V.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e2T.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e31.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e32.prototype={
$0(){var w=this.a,v=this.b,u=C.bEV(v,10,w.r,!1)
return w.uD(C.ho5(w.a.d,"kahoot",u,w.gb73(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e33.prototype={
$0(){var w=this.a
return w.uD(new C.amn(this.b,w.a.d,w.r,null))},
$S:0}
C.e34.prototype={
$0(){var w=this.a
return w.uD(new C.aky(this.b,w.a.d,w.r,null))},
$S:0}
C.e37.prototype={
$0(){var w=this.a
return w.uD(new C.avm(this.b,w.a.d,w.r,null))},
$S:0}
C.e38.prototype={
$0(){var w=this.a
return w.uD(new C.azk(this.b,w.a.d,w.r,null))},
$S:0}
C.e39.prototype={
$0(){var w=this.a
return w.uD(new C.amq(this.b,w.a.d,w.r,null))},
$S:0}
C.e3a.prototype={
$0(){var w=this.a
return w.uD(new C.amu(this.b,w.a.d,w.r,null))},
$S:0}
C.e3b.prototype={
$0(){var w=this.a
return w.uD(new C.amw(this.b,w.a.d,w.r,null))},
$S:0}
C.e3c.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d2y()
return v.uD(C.ho5(v.a.d,"creator_"+u.a,w,v.gb73(),"A game by the family",t,this.c.a))},
$S:0}
C.e3d.prototype={
$0(){return this.a.P_(this.b)},
$S:0}
C.e3e.prototype={
$0(){return this.a.Y1(0,this.b)},
$S:0}
C.e35.prototype={
$0(){return this.a.P_(null)},
$S:0}
C.e36.prototype={
$0(){return this.a.L(x.q).f.T(D.foq)},
$S:0}
C.bT2.prototype={
$0(){var w=this.a
w.d=D.b1T
w.z=3},
$S:0}
C.bT3.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQg()}else w.m(new C.bT1(w))},
$S:11}
C.bT1.prototype={
$0(){return this.a.z--},
$S:0}
C.bST.prototype={
$0(){var w=this.a
w.d=D.adJ
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bSU.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSS(w))
if(w.as<=0){d.a1(0)
w.b7_(-1)}},
$S:11}
C.bSS.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bSZ.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xj},
$S:0}
C.bT_.prototype={
$0(){return this.a.e++},
$S:0}
C.bSW.prototype={
$0(){var w=this.a
w.d=D.b1U
w.ay=this.b},
$S:0}
C.bSX.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bT0.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:1994}
C.bSY.prototype={
$0(){return this.a.Ld(this.b)},
$S:0}
C.bSV.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSt.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aP),r))}return s},
$S:1995}
C.bSu.prototype={
$0(){return this.a.gDe().c.push(C.h8M(null,0,20,""))},
$S:0}
C.bSE.prototype={
$1(d){var w=null
return A.bz(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Wa,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:247}
C.bSD.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDe().c,m=this.b,l=n[m],k=o.cg0(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.L8,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.ast,p,p,p,new C.bSy(o,m),p,p,p,p,p,p))
n=J.a8(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSz(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aEr[v]
t=D.aE7[v]
s=v+1
f.push(new A.D(B.eO,new A.c7(B.aM,B.e,B.h,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.by(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSA(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),p),new At.Pw(v,l.c,new C.bSB(o,l),p,!1,D.lH,p,p,p,p,p,!1,!1,p,I.b2i,p,p,p,p,p,w)],g),p),p))}f.push(D.fQG)
f.push(B.am)
n=A.a([D.fKb,B.ae],g)
for(r=0;r<3;++r){q=D.cgM[r]
n.push(new A.D(B.f1,A.jD(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bSC(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kA,B.bl,p,p,p)},
$S:157}
C.bSy.prototype={
$0(){var w=this.a
return w.m(new C.bSx(w,this.b))},
$S:0}
C.bSx.prototype={
$0(){return B.d.cH(this.a.gDe().c,this.b)},
$S:0}
C.bSz.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bSA.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bSB.prototype={
$1(d){return this.a.m(new C.bSw(this.b,d))},
$S:151}
C.bSw.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bSC.prototype={
$1(d){return this.a.m(new C.bSv(this.b,this.c))},
$S:9}
C.bSv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4E.prototype={
$0(){var w=this.a
w.wz()
w.a.bv()
w.a.qt()},
$S:0}
C.e4D.prototype={
$0(){var w=this.a
w.wz()
w.a.bv()
w.a.qt()},
$S:0}
C.e4G.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e4H.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4I.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e4C.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e4F.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e4K.prototype={
$0(){this.a.Pl()
return null},
$S:0}
C.e4J.prototype={
$0(){return this.a.F6(this.b)},
$S:0}
C.e44.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.ds,w,w,!0,w,w,w,new C.e42(d),w,w),r=A.bo(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e43(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e42.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e43.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e45.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cP_(this.b)},
$S:0}
C.e4_.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVS(w.b,w.c,w.d)},
$S:8}
C.e3r.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e3s.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3J.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Ho(t.a.c),$async$$0)
case 2:s=r.nF(q.dI(e,new C.e3H(t)))
if(s!=null&&t.c!=null)t.m(new C.e3I(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3H.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e3I.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3K.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e3L.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3Z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cPM(C.hEi(w),w)},
$S:0}
C.e3G.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Ww(u,w,C.aRA(u,w),new C.e3F(v),null)},
$S:z+37}
C.e3F.prototype={
$1(d){return this.bou(d)},
bou(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e3E(s,d))
w=3
return A.b(s.uz(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:729}
C.e3E.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bfu(this.b)},
$S:0}
C.e3W.prototype={
$1(d){return d.as},
$S:z+1}
C.e3X.prototype={
$1(d){var w=this
return new A.e3(new C.e3V(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e3V.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.p(k,D.bWu,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bb,a0,A.aI(k,k,k,k,A.W(B.cB,j?B.bu:B.bj,k,k,k,k),k,k,k,new C.e3P(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.o(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.ha,k,k,k,k,B.CF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3Q(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c7G,new A.D(D.bGE,f,k),new A.D(D.bGv,e,k),new A.D(B.t9,a0,k),new A.D(X.anL,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(Aj.aqn,j?B.bu:B.bj,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bGx,A.A(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b9L(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e3R(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ab(0,B.G,B.aD.j(0.35),B.i3,12)],x.V)
f.push(A.az(k,A.p(k,A.A(A.a([D.fKw,B.bb,D.bKW,D.bX9],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cbs,B.n),k,k,k,B.hZ,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e3S(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wF,A.A(A.a([A.E(A.dW(B.ds,new C.e3T(a1),k),1),B.as,A.E(A.bI(M.aYQ,k,new C.e3U(t,a1),A.bo(B.bQ,k,k,k,k,k,B.cp,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bm(!0,A.p(k,A.c9(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yR,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:89}
C.e3P.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3Q.prototype={
$0(){return this.b.$1(new C.e3O(this.a,this.c))},
$S:0}
C.e3O.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e3R.prototype={
$1(d){var w=this.a
w.m(new C.e3M(w,d))
this.b.$1(new C.e3N())},
$S:9}
C.e3M.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e3N.prototype={
$0(){},
$S:0}
C.e3S.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aId(!0,w))
return null},
$S:0}
C.e3T.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3U.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aId(!1,w))
return null},
$S:0}
C.e3Y.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPA(this.b.b)
w.r.a8(0)},
$S:0}
C.e3f.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ajj(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hxl(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e3g.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aGh(w)},
$S:0}
C.e47.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeD(this.b,w,this.c,null)},
$S:z+39}
C.e41.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.W(B.l_,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.ek(A.a([A.bI(D.h1o,w,new C.e40(d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e40.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3h.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e3i.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e3j.prototype={
$1(d){return d.a},
$S:z+8}
C.e3k.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i1(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGh(w)},
$S:0}
C.e3o.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ajj(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e3m(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hxl(v.e,null,r,v.f,v.r,new C.e3n(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e3n.prototype={
$0(){return this.a.abn(this.b)},
$S:0}
C.e3m.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e3p.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,i1>")
w=A.C(new A.N(w,new C.e3l(this.b),v),v.k("ak.E"))
u.d=t.aGh(w)},
$S:0}
C.e3l.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e46.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e3B.prototype={
$1(d){return d.length!==0},
$S:3}
C.e3C.prototype={
$1(d){var w=this
return new A.e3(new C.e3A(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e3A.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e3w(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.ek(A.a([A.bO(!1,B.ds,v,v,!0,v,v,v,new C.e3x(d),v,v),A.bI(B.Lk,v,new C.e3y(t,u,o,e),A.bo(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fP2,v,new C.e3z(t,u,o,d),A.bo(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:240}
C.e3w.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c4v,w,w,w,new C.e3v(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1996}
C.e3v.prototype={
$0(){return this.a.$1(new C.e3t(this.b,this.c))},
$S:0}
C.e3t.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e3x.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3y.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e3u(w.c,u))
v.bP(0,B.cf)}},
$S:0}
C.e3u.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e3z.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e3D.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQe(this.b,D.uR,C.Hm(v,w.a.c))},
$S:0}
C.e4e.prototype={
$1(d){return d.as},
$S:z+1}
C.e4f.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j8(this.b,w)},
$S:0}
C.e4g.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iuc(v)
return w.WP(v==null?null:v.a)},
$S:0}
C.e4h.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i61(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxp(new A.av(u,t),v.gbma(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d4F:D.d2N
q=A.K(s?B.dq:D.blF,B.r,1)
p=A.l(22)
o=A.bR(0,A.b5(m,m,m,new C.bgo(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.v3(new A.R(n,n,n,n),new A.a5(u,t,new C.bhj(l.d,v,l.f,w,new C.e4a(l),l.gchc(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzb(s,new C.e4b(l,e),new C.e4c(l,e),new C.e4d(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.aZ,B.b4,B.x,r,m,m),B.n),m,m,m,Z.amQ,m,m,m,m)},
$S:160}
C.e4a.prototype={
$1(d){var w=this.a
w.m(new C.e48(w,d))},
$S:2}
C.e48.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e4b.prototype={
$0(){var w=this.b
return this.a.bdE(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e4c.prototype={
$0(){var w=this.b
return this.a.bdE(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e4d.prototype={
$0(){var w=this,v=w.b
return w.a.aVS(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbma())},
$S:0}
C.e4i.prototype={
$0(){var w=this.a
return w.m(new C.e49(w))},
$S:0}
C.e49.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e3q.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fx(s.c)),$async$$0)
case 2:t.yB("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.di4.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bl7(u,C.hIY(v.c,u),new C.di3(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.di3.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.di5.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bot(d.d,d.c,u.f.q(0,d.a),new C.di2(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.di2.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fJ3.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nF(new A.cM(new A.Y(v,new C.fJ4(d),w.k("Y<1>")),new C.fJ5(),w.k("cM<1,n>")))},
$S:z+19}
C.fJ4.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fJ5.prototype={
$1(d){return d.a},
$S:z+8}
C.fJ1.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fJ2.prototype={
$1(d){return d.b},
$S:z+8}
C.fJ8.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nF(new A.cM(new A.Y(v,new C.fJ9(d),w.k("Y<1>")),new C.fJa(),w.k("cM<1,n>")))},
$S:z+19}
C.fJ9.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fJa.prototype={
$1(d){return d.a},
$S:z+8}
C.fJ6.prototype={
$1(d){var w,v=A.ev([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fJ7.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.di7.prototype={
$0(){return this.a},
$S:z+46}
C.dio.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:268}
C.dig.prototype={
$2(d,e){var w=this.a.c1(0,d,new C.dih()),v=J.a8(w)
if(!v.q(w,e))v.I(w,e)},
$S:118}
C.dih.prototype={
$0(){return A.a([],x.s)},
$S:757}
C.dif.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eB(w,e)
return w===!0},
$S:348}
C.di8.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.die.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.did.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.DX:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.DX:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:1998}
C.di9.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dii.prototype={
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
t=J.aT(t==null?D.DX:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aU(w,new C.dij(r)))w.push(r)}}B.d.bq(w,new C.dik(a8))
B.d.b_(w,new C.dil())
q=C.i60(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f_a],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brA(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1999}
C.dij.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dik.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dil.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dim.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b7(v,A.a3(v).k("b7<2>")).cF(0,0,B.qb)+88-w.gH(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:679}
C.din.prototype={
$1(d){return 16+d*156},
$S:175}
C.di6.prototype={
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
o.y.push(new C.L0(d,new A.r(e+t,w),s,s.length))}},
$S:186}
C.dia.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLl(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:118}
C.dib.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dic.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:649}
C.dip.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:649}
C.diq.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:392}
C.dir.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:197}
C.dis.prototype={
$1(d){return d>=0.5},
$S:122}
C.foq.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.hd(A.aM(!1,v,!0,new A.a5(38,38,A.W(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2001}
C.eZs.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.nE,A.aM(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fA3,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.OK,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZr(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eZr.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dym.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dyl.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o5,B.K,w,w)
return A.ek(A.a([A.bO(!1,B.ds,w,w,!0,w,w,w,new C.dyj(d),w,w),A.bO(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mU,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dyk(d),w,w)],x.p),B.b8,B.CA,w,u,D.bHy,w,D.bJv,new A.b9(v,B.a1),w,w)},
$S:18}
C.dyj.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dyk.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dyv.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dyw.prototype={
$1(d){var w=this.a
return w.m(new C.dyu(w,d))},
$S:z+49}
C.dyu.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dyx.prototype={
$1(d){var w=null
return A.qP(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dyA.prototype={
$1(d){var w=this.a
return w.m(new C.dyt(w,d))},
$S:35}
C.dyt.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dyz.prototype={
$1(d){var w=null
return A.qP(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dyB.prototype={
$1(d){var w=this.a
return w.m(new C.dys(w,d))},
$S:35}
C.dys.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dyC.prototype={
$0(){var w=this.a
return w.m(new C.dyr(w))},
$S:0}
C.dyr.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dyD.prototype={
$0(){var w=this.a
return w.m(new C.dyq(w))},
$S:0}
C.dyq.prototype={
$0(){return++this.a.at},
$S:0}
C.dyE.prototype={
$0(){var w=this.a
return w.m(new C.dyp(w))},
$S:0}
C.dyp.prototype={
$0(){return--this.a.ax},
$S:0}
C.dyF.prototype={
$0(){var w=this.a
return w.m(new C.dyo(w))},
$S:0}
C.dyo.prototype={
$0(){return++this.a.ax},
$S:0}
C.dyG.prototype={
$1(d){var w=this.a
return w.m(new C.dyn(w,d))},
$S:9}
C.dyn.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dyy.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dyH.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ef:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.eh:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bj
t=A.W(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bj
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cT(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b0,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dyI(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dyI.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dyR.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cfZ.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.cg5.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cg6.prototype={
$2(d,e){var w=J.b8(e,new C.cg4(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cg4.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cg0.prototype={
$1(d){return C.amz(A.a1(d,x.N,x.z))},
$S:z+9}
C.cg1.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cg2.prototype={
$1(d){return C.ho4(A.a1(d,x.N,x.z))},
$S:z+11}
C.cg3.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cga.prototype={
$1(d){return new A.aIp(d.f.length,d.a,d.b)},
$S:z+55}
C.cgb.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:652}
C.cg7.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cg8.prototype={
$1(d){return d.cPc(C.Hm(d,this.a))},
$S:z+85}
C.e4r.prototype={
$1(d){return C.uA(d,this.a.a.c)},
$S:z+3}
C.e4s.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e4w.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e4x.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e4o.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1W(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z9("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pC(r.c,r.e),$async$$0)
case 4:s.z9(p)
w=5
return A.b(s.Kh(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4p.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1W(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z9("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pC(r.c,r.e),$async$$0)
case 4:s.z9(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4q.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wz(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z9("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z9("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z9("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kh(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.z9(B.a.ek(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e4v.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1V(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z9("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ee(new C.e4u(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pC(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4u.prototype={
$1(d){var w=this.b
return new C.a0J(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e4t.prototype={
$1(d){return D.hEZ},
$S:z+58}
C.e4z.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4A.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e4y(w,d)
return new A.D(B.da,new C.bhn(this.b,d.c,d.a,w,null),null)},
$S:2002}
C.e4y.prototype={
$0(){return this.a.YG(this.b.b)},
$S:0}
C.e4j.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e4k.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e4l.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e4m.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e4n.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4B.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.cR(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).N(s)
return}},
$S:200}
C.dQt.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dQu.prototype={
$0(){return B.d.gH(D.a76)},
$S:z+60}
C.dQv.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b5(A.as(A.W(this.b.d,B.c.j(0.95),w,w,D.dbD,44),w,w,w),w,w,new C.bmf(u,t,v,w),B.az)},
$S:56}
C.h_i.prototype={
$1(d){return A.pm(new C.h_h(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.h_h.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.tL,24)],x.V),o=r?B.eh:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.p(t,D.bZz,B.f,t,t,new A.o(t,t,t,A.l(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.T,o,new A.D(E.anP,A.A(A.a([w,B.bb,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bj,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.ix(!0,t,e,B.y,D.fmu,new C.h_g(this.b,s),20,B.anm,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.lf,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:119}
C.h_g.prototype={
$2(d,e){var w=null,v=D.a76[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.l(15),o=A.E(new C.a7x(v.a,!0,w),1),n=s?B.jZ:B.iO,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eD(A.bu(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.k7,w,w,w)],l),B.al,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h_f(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.h_f.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cpB.prototype={
$0(){return this.a.ahG(this.b)},
$S:0}
C.fZG.prototype={
$1(d){return D.hzT},
$S:z+61}
C.h6r.prototype={
$1(d){var w=this
return new C.a2v(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fZK.prototype={
$1(d){return new C.a_n(this.a,null)},
$S:z+63}
C.fZJ.prototype={
$1(d){return D.hAU},
$S:z+64}
C.d9E.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9F.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d9D(w,d))},
$S:35}
C.d9D.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d9G.prototype={
$1(d){return this.a.KV()},
$S:2}
C.d9H.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9A.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.d9B.prototype={
$1(d){return this.a.KV()},
$S:2}
C.d9C.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cHW.prototype={
$0(){},
$S:0}
C.cI1.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cI2.prototype={
$0(){return this.a.aR8(-1)},
$S:0}
C.cI3.prototype={
$1(d){return this.a.m(new C.cI0())},
$S:2}
C.cI0.prototype={
$0(){},
$S:0}
C.cI4.prototype={
$0(){return this.a.aR8(1)},
$S:0}
C.cI5.prototype={
$1(d){return this.a.m(new C.cI_())},
$S:2}
C.cI_.prototype={
$0(){},
$S:0}
C.cI6.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uX(u,u,B.b2,r,u,new C.cHZ(t,d),B.wJ,s,w,u,new A.ay(v,1,B.r,-1),B.cg)},
$S:2003}
C.cHZ.prototype={
$1(d){var w=this.a
return w.m(new C.cHX(w,this.b))},
$S:9}
C.cHX.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cI7.prototype={
$1(d){return this.a.m(new C.cHY())},
$S:2}
C.cHY.prototype={
$0(){},
$S:0}
C.cI8.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fnW.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.fnX.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fnY.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.fnU.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDu()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b5(new A.D(D.bJu,new A.eo(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bz0(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:56}
C.fnV.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dH.az(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ap(B.aV,B.bQ,w)
s.toString
s=A.a([B.b2,s,B.aV],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eD(D.exJ,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d7(-1.2+t,-0.5),new A.d7(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:148}
C.fXX.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eWC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWt.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eWu.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eWA.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e3(new C.eWz(w,this.b),null)},
$S:20}
C.eWz.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eH(w,u,new A.D(B.anJ,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hua(new C.eWw(r,e),r.a),B.aB,A.A(A.a([A.E(A.dW(B.ds,new C.eWx(d),w),1),B.as,A.E(A.bI(B.Ww,w,new C.eWy(r,d),A.bo(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.b9(t,B.a1),w)},
$S:104}
C.eWw.prototype={
$1(d){return this.b.$1(new C.eWv(this.a,d))},
$S:35}
C.eWv.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eWx.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eWy.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eWB.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TK(this.b)},
$S:0}
C.eWo.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bfA(w)},
$S:0}
C.eWs.prototype={
$1(d){return this.boR(d)},
boR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mh(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j8(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eWr.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eWq(this.b),v),v.k("M.E"))
u.d=t.bfA(w)},
$S:0}
C.eWq.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eWD.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j8(this.b,w)},
$S:0}
C.eWE.prototype={
$1(d){return this.a.bHE(d,this.b)},
$S:z+67}
C.eWp.prototype={
$0(){return this.a.abm(this.b)},
$S:0}
C.h6e.prototype={
$1(d){return new C.aeY(this.a,this.b,this.c,null)},
$S:z+68}
C.eWG.prototype={
$0(){return this.a.a0B(this.b)},
$S:0}
C.eWH.prototype={
$0(){return this.a.QZ(this.b)},
$S:0}
C.eWI.prototype={
$0(){return this.a.F1(this.b)},
$S:0}
C.eWJ.prototype={
$0(){return this.a.a0C(this.b)},
$S:0}
C.eWF.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eWj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWk.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eWl.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eWn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eWm(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWm.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eX5.prototype={
$2(d,e){return d+e.gxK()},
$S:z+71}
C.eX1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eX2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eWN.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.p(v,D.c_2,B.f,v,v,new A.o(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eH(v,t,new A.D(B.wI,A.x(A.a([r,B.aO,q,B.P,p,B.db,A.A(A.a([A.E(A.dW(B.o7,new C.eWL(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fi,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bI(D.h5g,v,new C.eWM(d),A.bo(B.aA,v,v,v,v,v,B.fi,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d7,v,new A.b9(s,B.a1),v)},
$S:46}
C.eWL.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eWM.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eWW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.diU:B.a6p,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.ffA,B.ax,new A.bK(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.anN,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8s(B.b7,B.jv,new C.eWT(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b8s(B.cF,R.zJ,new C.eWU(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.p(m,D.bZm,B.f,m,m,new A.o(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.h,0,B.p),1)
return A.bm(!0,new A.D(B.wC,A.p(m,A.x(A.a([g,new A.D(B.anK,A.x(A.a([w,B.T,u,B.bx,t,B.T,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bb,n,A.W(B.eI,k?B.bu:B.bj,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eWV(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eWT.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.w9("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWU.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.w9("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWV.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.OC(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eWR.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.eh:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bj
u=A.bu(w,new A.a5(48,48,C.aSS(!0,A.l(12),48,Q.Pr,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bn(v.gxK())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wC,A.p(q,A.x(A.a([B.T,k,new A.D(D.anH,A.A(A.a([u,B.bb,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.Cr,r.cru(B.vc,B.aV,new C.eWP(d),p,"QR code or backup file","Transfer project"),r.b5t(!0,B.ej,B.aA,new C.eWQ(d),p,"Remove from this device","Delete project"),B.T],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eWP.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eWQ.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eWS.prototype={
$1(d){return this.boS(d)},
boS(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mh(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wo(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eX8.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eX7(w))},
$S:0}
C.eX7.prototype={
$0(){return this.a.r++},
$S:0}
C.eX9.prototype={
$0(){var w=this.a
return w.m(new C.eX6(w))},
$S:0}
C.eX6.prototype={
$0(){return this.a.r++},
$S:0}
C.eWK.prototype={
$0(){var w=this.a.c
w.toString
return A.j8(w,null)},
$S:0}
C.eWO.prototype={
$0(){return this.a.ckK(this.b)},
$S:0}
C.eX4.prototype={
$0(){var w=this.a
return w.m(new C.eX3(w,this.b))},
$S:0}
C.eX3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eWZ.prototype={
$0(){return this.a.w9("scan")},
$S:0}
C.eX_.prototype={
$0(){return this.a.w9("file")},
$S:0}
C.eX0.prototype={
$1(d){return this.a.crv(d,this.b)},
$S:z+72}
C.eWY.prototype={
$0(){return this.a.F5(this.b)},
$S:0}
C.eWX.prototype={
$0(){return this.a.a16(this.b,this.c)},
$S:0}
C.cHh.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cHg.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cHe.prototype={
$1(d){return C.hP6(A.a1(d,x.N,x.z))},
$S:z+75}
C.cHf.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fHW.prototype={
$1(d){return d.y===D.kZ},
$S:z+3}
C.h7_.prototype={
$1(d){return C.aRA(d,this.a)},
$S:z+3}
C.fFq.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bTy.prototype={
$1(d){return!d.as},
$S:z+1}
C.bTx.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bTu.prototype={
$1(d){return C.ho6(A.a1(d,x.N,x.z))},
$S:z+24}
C.bTv.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bTw.prototype={
$1(d){return J.k(d)},
$S:17}
C.fvI.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fro.prototype={
$1(d){return C.hdB(A.a1(d,x.N,x.z))},
$S:z+79}
C.frp.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.frq.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fZu.prototype={
$1(d){return J.k(d)},
$S:17}
C.fZv.prototype={
$1(d){return d.a},
$S:z+81}
C.fZw.prototype={
$1(d){return d.length!==0},
$S:3}
C.fZx.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fZy.prototype={
$1(d){return d.TK(null).aj()},
$S:z+82}
C.h6Y.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fIp.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fLC.prototype={
$1(d){return C.amz(A.a1(d,x.N,x.z))},
$S:z+9}
C.fLD.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fLE.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fLF.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fLG.prototype={
$1(d){return C.uA(d,this.a)},
$S:z+3}
C.fZh.prototype={
$1(d){return C.uA(d,this.a)},
$S:z+3}
C.h6T.prototype={
$1(d){return C.amz(A.a1(d,x.N,x.z))},
$S:z+9}
C.h6U.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h6V.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fI6.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fI7.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h73.prototype={
$1(d){return!d.as},
$S:z+1}
C.fHB.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fHC.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fHD.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h6s.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fMt.prototype={
$1(d){return d.Q},
$S:z+15}
C.fZa.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fLz.prototype={
$1(d){return C.amz(A.a1(d,x.N,x.z))},
$S:z+9}
C.fLA.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fLB.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fZ5.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.frV.prototype={
$1(d){return d.length!==0},
$S:3}
C.frW.prototype={
$1(d){return C.ho6(A.a1(d,x.N,x.z))},
$S:z+24}
C.frX.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.frY.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.frZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsb.prototype={
$2(d,e){return d.eF(new C.fsc(e))},
$S:2004}
C.fsc.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ce},
$S:2005}
C.fs8.prototype={
$1(d){return C.iaR(d,this.a)},
$S:z+84}
C.fs9.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fsa.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fwp.prototype={
$1(d){return d.a},
$S:z+56}
C.fwq.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwr.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fzp.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fEF.prototype={
$1(d){return C.hzL(d,C.Hm(d,this.a))},
$S:z+5}
C.fEG.prototype={
$1(d){return C.hzM(d,C.Hm(d,this.a))},
$S:z+5};(function aliases(){var w=C.aC8.prototype
w.bwH=w.t
w=C.aAk.prototype
w.bwC=w.t
w=C.aHC.prototype
w.bx4=w.t
w=C.aC9.prototype
w.bwI=w.t
w=C.aCb.prototype
w.bwJ=w.t
w=C.aCc.prototype
w.bwK=w.t
w=C.aNN.prototype
w.bzy=w.t
w=C.aPV.prototype
w.bBT=w.t
w=C.aPW.prototype
w.bBU=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aF9.prototype,"gcop","coq",28)
var r
w(r=C.aC7.prototype,"gchi","chj",65)
v(r,"gaPj","O8",0)
v(r,"gcwL","Bw",0)
v(r,"gbPt","OQ",0)
v(r,"gcLb","za",0)
v(r,"gcqs","a1O",0)
v(r,"gbKQ","Oy",0)
v(r,"gbPT","Y6",0)
w(r,"gbUZ","bV_",78)
v(r,"gbF9","At",0)
v(C.aCa.prototype,"gcL7","FZ",0)
v(r=C.amo.prototype,"gbt2","bt3",2)
v(r,"gbsV","bsW",2)
v(r,"gcMg","cMh",2)
u(r,"gqs","kO",0)
u(r=C.akz.prototype,"geX","fX",2)
w(r,"gccV","ccW",27)
u(C.avn.prototype,"gqs","kO",0)
v(r=C.azl.prototype,"gcXQ","cXR",2)
u(r,"gqs","kO",0)
u(C.aLq.prototype,"gbt0","bt1",2)
v(C.amx.prototype,"gC1","cMt",2)
u(r=C.amv.prototype,"gcN9","cNa",2)
u(r,"gqs","kO",0)
v(r=C.amr.prototype,"gbrT","brU",2)
v(r,"gcSl","cSm",2)
u(r=C.amt.prototype,"geX","fX",2)
u(r,"giA","cLN",2)
v(r=C.amp.prototype,"gcLC","cLD",2)
u(r,"gbqL","jH",2)
v(r=C.aFJ.prototype,"gahi","wp",0)
v(r,"gck_","a0Y",0)
v(r,"gaTz","IA",0)
v(r=C.aFG.prototype,"gcH6","a3W",0)
v(r,"gahi","wp",0)
v(r,"gcuN","a2s",0)
v(r,"gcjV","b3G",2)
v(r,"gckX","a1b",0)
w(r,"gchc","chd",35)
v(r,"gbPL","IF",0)
v(r,"gcIa","cIb",2)
v(r,"gc6T","ZS",0)
w(r,"gcfH","cfI",36)
v(r,"gcjJ","cjK",2)
v(r=C.aE8.prototype,"gcd0","Qw",0)
v(r,"gcd2","cd3",2)
v(r,"gbMk","aaZ",0)
v(r=C.aFI.prototype,"gbTn","YC",0)
v(r,"gc2W","Zj",0)
v(r,"gcBb","a3j",0)
v(r,"gcxk","a2V",0)
v(C.aFH.prototype,"gcx3","aj6",0)
v(C.auz.prototype,"gcfF","a0z",0)
v(C.aAS.prototype,"ga3F","KV",2)
v(C.aAR.prototype,"ga3F","KV",2)
v(C.azy.prototype,"ga3F","KV",2)
v(r=C.aHd.prototype,"gb4R","Rv",0)
v(r,"gbDY","WJ",0)
v(r,"gckL","ckM",2)
w(C.aHc.prototype,"gcgx","cgy",69)
t(C.aHe.prototype,"gaTu",0,0,null,["$1","$0"],["Iz","bNE"],70,0,0)
s(C,"hI2","ikK",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.aq8,C.uU,C.nB,C.Ix,C.ag9,C.KU,C.uV,C.bU3,C.tj,C.bpL,C.amG,C.aef,C.ly,C.bSF,C.auL,C.zC,C.alf,C.MV,C.bbb,C.aai,C.bis,C.agg,C.aAA,C.ag4,C.aLq,C.L0,C.GF,C.bhl,C.aLl,C.arw,C.dit,C.m0,C.aVP,C.aVO,C.aTR,C.ul,C.rv,C.lI,C.i1,C.l1,C.aJj])
u(A.ht,[C.fQg,C.fQf,C.fQh,C.h_b,C.fDl,C.fDm,C.fDr,C.fO_,C.fNZ,C.fNY,C.c8V,C.h_I,C.h_A,C.h_M,C.fIe,C.dR9,C.dR4,C.dR5,C.dQI,C.dQE,C.dRo,C.dRp,C.dRi,C.dRj,C.dRq,C.dRr,C.fJ_,C.fLw,C.fLx,C.fZf,C.h6S,C.fI5,C.fZQ,C.dhG,C.dh2,C.dhb,C.dhs,C.dh7,C.dhd,C.dh4,C.dhh,C.dhi,C.dhg,C.dhx,C.dhw,C.djt,C.dju,C.djv,C.dhU,C.dhZ,C.dhY,C.cQj,C.cQl,C.d8S,C.d9g,C.d9h,C.d9k,C.d9m,C.d9n,C.d9o,C.d9q,C.d9r,C.bSp,C.bSj,C.fw6,C.h6L,C.h6M,C.h6N,C.h6I,C.h6O,C.h6P,C.h6Q,C.h6H,C.fJC,C.fY9,C.fFr,C.fMs,C.bNt,C.h79,C.fYM,C.bLD,C.bLy,C.bLA,C.bLz,C.crh,C.crc,C.crd,C.crb,C.cr9,C.cre,C.cRn,C.cGg,C.cGj,C.cGh,C.cGk,C.cGl,C.f8G,C.fiQ,C.bTb,C.bT5,C.bT9,C.bSN,C.e3_,C.e2X,C.e2Y,C.e2W,C.e31,C.bT3,C.bSU,C.bSE,C.bSD,C.bSz,C.bSA,C.bSB,C.bSC,C.e4F,C.e44,C.e4_,C.e3r,C.e3H,C.e3K,C.e3G,C.e3F,C.e3W,C.e3X,C.e3R,C.e3f,C.e47,C.e41,C.e3h,C.e3i,C.e3j,C.e3o,C.e3m,C.e3l,C.e3B,C.e3C,C.e3w,C.e4e,C.e4a,C.di4,C.di5,C.fJ3,C.fJ4,C.fJ5,C.fJ1,C.fJ2,C.fJ8,C.fJ9,C.fJa,C.fJ6,C.fJ7,C.dio,C.die,C.di9,C.dij,C.dik,C.din,C.dib,C.diq,C.dir,C.dis,C.foq,C.eZs,C.dyl,C.dyv,C.dyw,C.dyx,C.dyA,C.dyz,C.dyB,C.dyG,C.dyH,C.cg5,C.cg4,C.cg0,C.cg1,C.cg2,C.cg3,C.cga,C.cg7,C.cg8,C.e4r,C.e4u,C.e4t,C.e4A,C.e4B,C.dQt,C.h_i,C.fZG,C.h6r,C.fZK,C.fZJ,C.d9F,C.d9G,C.d9B,C.cI3,C.cI5,C.cI6,C.cHZ,C.cI7,C.fnW,C.fXX,C.eWA,C.eWw,C.eWs,C.eWq,C.eWE,C.h6e,C.eWN,C.eWW,C.eWR,C.eWS,C.eX0,C.cHg,C.cHe,C.cHf,C.fHW,C.h7_,C.fFq,C.bTy,C.bTx,C.bTu,C.bTv,C.bTw,C.fro,C.frp,C.fZu,C.fZv,C.fZw,C.fZx,C.fZy,C.h6Y,C.fIp,C.fLC,C.fLD,C.fLF,C.fLG,C.fZh,C.h6T,C.h6U,C.h6V,C.fI6,C.fI7,C.h73,C.fHB,C.fHC,C.h6s,C.fMt,C.fZa,C.fLz,C.fLA,C.fZ5,C.frV,C.frW,C.frX,C.frY,C.frZ,C.fsc,C.fs8,C.fs9,C.fwp,C.fwq,C.fzp,C.fEF,C.fEG])
u(A.aw,[C.b0q,C.amm,C.aX8,C.a_2,C.bcZ,C.QS,C.a6L,C.tI,C.Iz,C.bhj,C.bl7,C.bzb,C.bot,C.aeC,C.bl6,C.aeB,C.bl5,C.aE9,C.aKn,C.aeD,C.GB,C.bhk,C.adR,C.bhi,C.bhn,C.b0o,C.auz,C.aeY])
u(A.mt,[C.bdC,C.beP,C.beG,C.aJd,C.bk8,C.bpK,C.aXd,C.bdE,C.aC6,C.bd7,C.btO,C.bkg,C.bjH,C.bjO,C.bhm,C.bgo,C.bmf,C.bz0])
u(A.iT,[C.h_F,C.h_G,C.h_H,C.h_y,C.h_z,C.h_K,C.h_L,C.dRl,C.dR7,C.dRa,C.dQP,C.dQQ,C.dQR,C.dQO,C.dQW,C.dQN,C.dQX,C.dQY,C.dQM,C.dQZ,C.dQL,C.dR_,C.dQK,C.dR0,C.dQC,C.dQD,C.dQJ,C.dR1,C.dQH,C.dR2,C.dQG,C.dQS,C.dQF,C.dQT,C.dQB,C.dQU,C.dQV,C.dRm,C.dRn,C.dRb,C.dRc,C.dRd,C.dRe,C.dRf,C.dRg,C.dRh,C.dRt,C.dRk,C.fJ0,C.dh0,C.dgZ,C.dh_,C.dh1,C.dhF,C.dhu,C.dhr,C.dh3,C.dhv,C.dh9,C.dha,C.dhc,C.dht,C.dh8,C.dhe,C.dhC,C.dho,C.dhn,C.dhp,C.dhq,C.dhj,C.dhl,C.dhm,C.dhf,C.dhy,C.dhB,C.dh5,C.dh6,C.djs,C.djr,C.djq,C.djp,C.djw,C.djo,C.djx,C.dhV,C.dhW,C.dhX,C.di_,C.dhT,C.dhS,C.cQk,C.d8R,C.d93,C.d92,C.d9i,C.d91,C.d9j,C.d90,C.d9_,C.d9l,C.d8Z,C.d9b,C.d9a,C.d9s,C.bSi,C.bSs,C.bSk,C.bSl,C.bSo,C.bSn,C.bSq,C.bSr,C.bSm,C.bSg,C.bSh,C.bTW,C.bTX,C.bTY,C.bTZ,C.bU_,C.bU0,C.bU1,C.h6K,C.fYa,C.bLC,C.bLx,C.bLv,C.bLw,C.bLu,C.crj,C.crk,C.cri,C.crl,C.crn,C.cro,C.crp,C.crf,C.cGf,C.cGo,C.cGp,C.cGq,C.cGn,C.cGr,C.cGs,C.cGt,C.cGu,C.cGi,C.cGm,C.bTr,C.bTq,C.bTo,C.bTm,C.bTn,C.bTj,C.bTk,C.bTl,C.bTp,C.bTi,C.f8H,C.f8I,C.f8J,C.f8K,C.f8L,C.bTf,C.bTg,C.bTh,C.bTa,C.bTc,C.bTd,C.bTe,C.bT6,C.bSR,C.bSQ,C.bSP,C.bSJ,C.bSK,C.bSO,C.bSL,C.bSM,C.bSI,C.e2Z,C.e30,C.e2U,C.e2V,C.e2T,C.e32,C.e33,C.e34,C.e37,C.e38,C.e39,C.e3a,C.e3b,C.e3c,C.e3d,C.e3e,C.e35,C.e36,C.bT2,C.bT1,C.bST,C.bSS,C.bSZ,C.bT_,C.bSW,C.bSX,C.bSY,C.bSV,C.bSt,C.bSu,C.bSy,C.bSx,C.bSw,C.bSv,C.e4E,C.e4D,C.e4G,C.e4H,C.e4I,C.e4C,C.e4K,C.e4J,C.e42,C.e43,C.e45,C.e3s,C.e3J,C.e3I,C.e3L,C.e3Z,C.e3E,C.e3P,C.e3Q,C.e3O,C.e3M,C.e3N,C.e3S,C.e3T,C.e3U,C.e3Y,C.e3g,C.e40,C.e3k,C.e3n,C.e3p,C.e46,C.e3v,C.e3t,C.e3x,C.e3y,C.e3u,C.e3z,C.e3D,C.e4f,C.e4g,C.e48,C.e4b,C.e4c,C.e4d,C.e4i,C.e49,C.e3q,C.di3,C.di2,C.di7,C.dih,C.di8,C.eZr,C.dym,C.dyj,C.dyk,C.dyu,C.dyt,C.dys,C.dyC,C.dyr,C.dyD,C.dyq,C.dyE,C.dyp,C.dyF,C.dyo,C.dyn,C.dyy,C.dyI,C.dyR,C.e4s,C.e4w,C.e4x,C.e4o,C.e4p,C.e4q,C.e4v,C.e4z,C.e4y,C.e4j,C.e4k,C.e4l,C.e4m,C.e4n,C.dQu,C.h_f,C.cpB,C.d9E,C.d9D,C.d9H,C.d9A,C.d9C,C.cHW,C.cI1,C.cI2,C.cI0,C.cI4,C.cI_,C.cHX,C.cHY,C.cI8,C.fnX,C.fnY,C.eWC,C.eWt,C.eWu,C.eWv,C.eWx,C.eWy,C.eWB,C.eWo,C.eWr,C.eWD,C.eWp,C.eWG,C.eWH,C.eWI,C.eWJ,C.eWF,C.eWj,C.eWk,C.eWl,C.eWn,C.eWm,C.eX1,C.eX2,C.eWL,C.eWM,C.eWT,C.eWU,C.eWV,C.eWP,C.eWQ,C.eX8,C.eX7,C.eX9,C.eX6,C.eWK,C.eWO,C.eX4,C.eX3,C.eWZ,C.eX_,C.eWY,C.eWX])
u(A.af,[C.aql,C.Ua,C.a_L,C.a_P,C.a_N,C.a_l,C.amn,C.aky,C.avm,C.azk,C.amw,C.amu,C.amq,C.Ww,C.ams,C.Ub,C.arz,C.art,C.a0p,C.arx,C.a0J,C.a0K,C.a7x,C.a_n,C.a_m,C.ZU,C.a2v,C.Gp,C.azr,C.auy,C.aus,C.aux,C.P8])
u(A.ah,[C.aF9,C.bhd,C.aC7,C.bhC,C.aCa,C.beN,C.aC8,C.aAk,C.aHC,C.azl,C.aCc,C.aCb,C.aC9,C.bmB,C.amt,C.amp,C.aFJ,C.aFG,C.aE8,C.aFI,C.aFH,C.bmC,C.aNN,C.aAS,C.aAR,C.azy,C.bz3,C.aPV,C.aPW,C.aHd,C.bnZ,C.aHc,C.bAP])
u(A.jE,[C.dR6,C.dR8,C.dR3,C.dRs,C.fLy,C.bSf,C.dhE,C.dhD,C.dhk,C.dhz,C.dhA,C.di0,C.bU2,C.bTV,C.bSG,C.bSH,C.h6J,C.h78,C.bLB,C.crm,C.crg,C.cra,C.f8M,C.bT4,C.bT7,C.bT8,C.dsC,C.bT0,C.e3V,C.e3A,C.e4h,C.dig,C.dif,C.did,C.dii,C.dil,C.dim,C.di6,C.dia,C.dic,C.dip,C.cfZ,C.cg6,C.cgb,C.dQv,C.h_h,C.h_g,C.fnU,C.fnV,C.eWz,C.eX5,C.cHh,C.fvI,C.frq,C.fLE,C.fHD,C.fLB,C.fsb,C.fsa,C.fwr])
u(A.l6,[C.a20,C.agi,C.a2j,C.a0c,C.acT,C.aM7,C.Iy,C.amy,C.cHi,C.cHj])
t(C.amo,C.aC8)
t(C.akz,C.aAk)
t(C.avn,C.aHC)
t(C.bhh,C.aCc)
t(C.amx,C.bhh)
t(C.bhg,C.aCb)
t(C.amv,C.bhg)
t(C.bhf,C.aC9)
t(C.amr,C.bhf)
t(C.bmg,C.aNN)
t(C.bz1,C.aPV)
t(C.bz2,C.aPW)
t(C.aHe,C.bAP)
t(C.bbo,A.bbc)
t(C.bz4,A.a7c)
t(C.bbn,C.bz4)
w(C.aC8,A.cf)
w(C.aAk,A.cf)
w(C.aHC,A.eP)
w(C.aC9,A.cf)
v(C.bhf,C.ag4)
w(C.aCb,A.cf)
v(C.bhg,C.ag4)
w(C.aCc,A.cf)
v(C.bhh,C.ag4)
w(C.aNN,A.eP)
w(C.aPV,A.cf)
w(C.aPW,A.cf)
v(C.bAP,A.eF)
v(C.bz4,A.jn)})()
A.j0(b.typeUniverse,JSON.parse('{"b0q":{"aw":[],"v":[]},"bdC":{"aC":[]},"aql":{"af":[],"v":[]},"aF9":{"ah":["aql"]},"Ua":{"af":[],"v":[]},"amm":{"aw":[],"v":[]},"aX8":{"aw":[],"v":[]},"bhd":{"ah":["Ua"]},"a_L":{"af":[],"v":[]},"a_P":{"af":[],"v":[]},"a_N":{"af":[],"v":[]},"a_l":{"af":[],"v":[]},"aC7":{"ah":["a_L"]},"bhC":{"ah":["a_P"]},"aCa":{"ah":["a_N"]},"a_2":{"aw":[],"v":[]},"beP":{"aC":[]},"beG":{"aC":[]},"beN":{"ah":["a_l"]},"aJd":{"aC":[]},"bk8":{"aC":[]},"bcZ":{"aw":[],"v":[]},"amn":{"af":[],"v":[]},"amo":{"ah":["amn"]},"bpK":{"aC":[]},"aXd":{"aC":[]},"aky":{"af":[],"v":[]},"avm":{"af":[],"v":[]},"azk":{"af":[],"v":[]},"akz":{"ah":["aky"]},"bdE":{"aC":[]},"QS":{"aw":[],"v":[]},"aC6":{"aC":[]},"avn":{"ah":["avm"]},"bd7":{"aC":[]},"azl":{"ah":["azk"]},"amw":{"af":[],"v":[]},"amu":{"af":[],"v":[]},"amq":{"af":[],"v":[]},"amx":{"ah":["amw"]},"btO":{"aC":[]},"amv":{"ah":["amu"]},"bkg":{"aC":[]},"amr":{"ah":["amq"]},"bjH":{"aC":[]},"Ww":{"af":[],"v":[]},"ams":{"af":[],"v":[]},"Ub":{"af":[],"v":[]},"a6L":{"aw":[],"v":[]},"bjO":{"aC":[]},"tI":{"aw":[],"v":[]},"Iz":{"aw":[],"v":[]},"bmB":{"ah":["Ww"]},"amt":{"ah":["ams"]},"amp":{"ah":["Ub"]},"arz":{"af":[],"v":[]},"art":{"af":[],"v":[]},"a0p":{"af":[],"v":[]},"aeD":{"aw":[],"v":[]},"aFJ":{"ah":["arz"]},"aFG":{"ah":["art"]},"bhj":{"aw":[],"v":[]},"bhm":{"aC":[]},"bl7":{"aw":[],"v":[]},"bgo":{"aC":[]},"bzb":{"aw":[],"v":[]},"bot":{"aw":[],"v":[]},"aE8":{"ah":["a0p"]},"aeC":{"aw":[],"v":[]},"bl6":{"aw":[],"v":[]},"aeB":{"aw":[],"v":[]},"bl5":{"aw":[],"v":[]},"aE9":{"aw":[],"v":[]},"aKn":{"aw":[],"v":[]},"GB":{"aw":[],"v":[]},"arx":{"af":[],"v":[]},"a0J":{"af":[],"v":[]},"a0K":{"af":[],"v":[]},"aFI":{"ah":["arx"]},"bhk":{"aw":[],"v":[]},"adR":{"aw":[],"v":[]},"bhi":{"aw":[],"v":[]},"bhn":{"aw":[],"v":[]},"aFH":{"ah":["a0J"]},"bmC":{"ah":["a0K"]},"b0o":{"aw":[],"v":[]},"a7x":{"af":[],"v":[]},"bmg":{"ah":["a7x"]},"bmf":{"aC":[]},"auz":{"aw":[],"v":[]},"a_n":{"af":[],"v":[]},"a_m":{"af":[],"v":[]},"ZU":{"af":[],"v":[]},"a2v":{"af":[],"v":[]},"aAS":{"ah":["a_n"]},"aAR":{"ah":["a_m"]},"azy":{"ah":["ZU"]},"bz3":{"ah":["a2v"]},"Gp":{"af":[],"v":[]},"azr":{"af":[],"v":[]},"bz1":{"ah":["Gp"]},"bz2":{"ah":["azr"]},"bz0":{"aC":[]},"auy":{"af":[],"v":[]},"aHd":{"ah":["auy"]},"aeY":{"aw":[],"v":[]},"aus":{"af":[],"v":[]},"aux":{"af":[],"v":[]},"bnZ":{"ah":["aus"]},"aHc":{"ah":["aux"]},"P8":{"af":[],"v":[]},"aHe":{"ah":["P8"],"eF":[]},"bbn":{"jn":[],"fl":[]}}'))
A.Dm(b.typeUniverse,JSON.parse('{"ag4":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTR"),cq:w("mq"),Q:w("rv"),r:w("bs<n,n>"),c5:w("aVO"),dY:w("aVP"),fH:w("MV"),de:w("alf"),dN:w("N2<F>"),gc:w("Er<F>"),A:w("eM<n?>"),e:w("Ix"),B:w("nB"),P:w("i1"),df:w("ly"),k:w("l1"),x:w("aB<~>"),U:w("O<a4x>"),V:w("O<ab>"),C:w("O<rv>"),O:w("O<t>"),c:w("O<MV>"),b:w("O<alf>"),ac:w("O<eM<n?>>"),I:w("O<nB>"),u:w("O<i1>"),J:w("O<ly>"),_:w("O<l1>"),cl:w("O<aB<ai<a9<n,@>>>>"),R:w("O<nE>"),eU:w("O<ai<+(H,H)>>"),ez:w("O<a9<n,aF>>"),gE:w("O<a9<n,n>>"),Y:w("O<a9<n,@>>"),fD:w("O<mW>"),bp:w("O<oP>"),g:w("O<r>"),ar:w("O<auL>"),v:w("O<fZ>"),gy:w("O<aai>"),L:w("O<+(n,n)>"),G:w("O<+(H,H)>"),E:w("O<+(H,~())>"),bd:w("O<+(n,F,Q)>"),bF:w("O<+count,id,name(F,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<jb>"),dT:w("O<bbb>"),p:w("O<v>"),Z:w("O<fl>"),D:w("O<lI>"),h:w("O<aAA>"),cC:w("O<bis>"),fp:w("O<KU>"),M:w("O<L0>"),gZ:w("O<aJj>"),gA:w("O<ag9>"),e4:w("O<agg>"),dE:w("O<aLl>"),f7:w("O<Q>"),n:w("O<H>"),t:w("O<F>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cx<ah<af>>"),d:w("ai<nB>"),do:w("ai<i1>"),cg:w("ai<ly>"),ax:w("ai<l1>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(F,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lI>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("N<n,IA>"),cM:w("N<F,n>"),w:w("iz"),g2:w("rT"),bV:w("aq8"),fL:w("cu"),K:w("aF"),dc:w("fZ"),fo:w("Pw<F>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(Q,F)"),d9:w("+dx,hidden(H,ai<i1>)"),cs:w("+count,id,name(F,n,n)"),N:w("n"),fT:w("iE<i1>"),ec:w("iE<n>"),gW:w("rb<H>"),X:w("bq<H>"),bW:w("dH"),W:w("bf<n>"),b4:w("bf<F>"),cI:w("k7<n>"),av:w("Y<zC>"),cc:w("Y<n>"),l:w("v"),gF:w("fl"),fA:w("lI"),dO:w("GF"),bw:w("aeB<n?>"),cy:w("L2"),q:w("me"),y:w("Q"),i:w("H"),z:w("@"),S:w("F"),eK:w("ai<l1>?"),m:w("arw?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,F)?"),he:w("+qrPayload,token,usesRemaining(n,n,F)?"),gG:w("+members,trees,viewOnly(F,F,Q)?"),az:w("qr?"),T:w("n?"),aD:w("dH?"),o:w("lI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6c=new A.be(B.fR,B.bJ,B.fR,B.bJ)
D.aeX=new A.be(B.fR,B.iq,B.fR,B.iq)
D.b6q=new A.be(B.jy,B.bJ,B.bJ,B.bJ)
D.b6u=new A.ay(B.cW,1.4,B.r,-1)
D.b6E=new A.ay(B.ab,1,B.r,-1)
D.afs=new A.aY(140,1/0,0,1/0)
D.b81=new A.aY(0,1/0,64,1/0)
D.b85=new A.aY(0,84,0,1/0)
D.afz=new A.aY(130,1/0,0,1/0)
D.aE_=w([B.ma,B.rV,B.c],x.O)
D.cax=new A.a7(B.ay,B.aC,B.x,D.aE_,null,null)
D.b8R=new A.o(null,null,null,null,null,D.cax,B.n)
D.dij=w([B.aV,B.bQ],x.O)
D.ccG=new A.a7(B.aZ,B.b4,B.x,D.dij,null,null)
D.b9b=new A.o(null,null,null,null,null,D.ccG,B.n)
D.YT=new A.t(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fB=new A.t(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dmo=w([B.dA,D.YT,D.fB],x.O)
D.c9K=new A.a7(B.aZ,B.b4,B.x,D.dmo,null,null)
D.b9W=new A.o(null,null,null,null,null,D.c9K,B.n)
D.fxg=new A.G(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7L=new A.B("?",null,D.fxg,null,null,null,null,null,null,null,null,null)
D.bdM=new A.cj(B.z,null,null,D.h7L,null)
D.Wn=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQN=new A.B("\ud83c\udf33",null,D.Wn,null,null,null,null,null,null,null,null,null)
D.agj=new A.cj(B.z,null,null,D.fQN,null)
D.fTs=new A.B("\ud83c\udfc6",null,As.L0,null,null,null,null,null,null,null,null,null)
D.bdX=new A.cj(B.z,null,null,D.fTs,null)
D.bfM=new A.fn(null,null,null,null,null,E.kw,null,null,null,null)
D.agl=new A.cj(B.z,null,null,D.bfM,null)
D.kQ=new A.t(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fxP=new A.G(!0,D.kQ,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSs=new A.B("No books on the shelf yet.",null,D.fxP,null,null,null,null,null,null,null,null,null)
D.exK=new A.D(B.nK,D.fSs,null)
D.bec=new A.cj(B.z,null,null,D.exK,null)
D.fEX=new A.G(!0,D.fB,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8G=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fEX,null,null,null,null,null,null,null,null,null)
D.eyj=new A.D(B.cq,D.h8G,null)
D.beF=new A.cj(B.z,null,null,D.eyj,null)
D.aYd=new A.B("\ud83e\uddfa",null,D.Wn,null,null,null,null,null,null,null,null,null)
D.beU=new A.cj(B.z,null,null,D.aYd,null)
D.fVV=new A.B("\ud83c\udfad",null,D.Wn,null,null,null,null,null,null,null,null,null)
D.bf4=new A.cj(B.z,null,null,D.fVV,null)
D.bf7=new A.cj(B.z,null,null,A7.YF,null)
D.agH=new A.t(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agO=new A.t(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bho=new A.t(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bht=new A.t(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bhF=new A.t(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhH=new A.t(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhJ=new A.t(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bhR=new A.t(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lG=new A.t(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bhV=new A.t(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bi_=new A.t(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bi0=new A.t(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bi1=new A.t(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lH=new A.t(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.biG=new A.t(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BR=new A.t(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.biP=new A.t(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bj8=new A.t(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bjb=new A.t(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bjh=new A.t(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bjp=new A.t(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahs=new A.t(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bjw=new A.t(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Z6=new A.t(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahv=new A.t(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bjH=new A.t(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Z8=new A.t(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bk1=new A.t(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahH=new A.t(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bkq=new A.t(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bkG=new A.t(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bl5=new A.t(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.blg=new A.t(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.G8=new A.t(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.blF=new A.t(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.blI=new A.t(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.blM=new A.t(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aia=new A.t(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bm2=new A.t(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bm8=new A.t(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bmf=new A.t(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aie=new A.t(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bmo=new A.t(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bmS=new A.t(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bn0=new A.t(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bn3=new A.t(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bn9=new A.t(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aiu=new A.t(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bnN=new A.t(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aiT=new A.t(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.boL=new A.t(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.aj5=new A.t(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bpa=new A.t(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gl=new A.t(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bph=new A.t(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bpr=new A.t(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bpt=new A.t(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aj9=new A.t(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bpL=new A.t(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bpN=new A.t(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bpQ=new A.t(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajh=new A.t(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.ZT=new A.t(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bqd=new A.t(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bqz=new A.t(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bqE=new A.t(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aju=new A.t(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bqL=new A.t(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.ZZ=new A.t(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.br7=new A.t(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.br8=new A.t(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Gt=new A.t(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.brY=new A.t(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bsB=new A.t(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bsH=new A.t(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bsL=new A.t(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qq=new A.t(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bsW=new A.t(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bt_=new A.t(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bt5=new A.t(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bt7=new A.t(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ake=new A.t(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aki=new A.t(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gy=new A.t(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_j=new A.t(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.akr=new A.t(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bul=new A.t(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.buE=new A.t(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bv5=new A.t(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bve=new A.t(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akQ=new A.t(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_v=new A.t(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bvo=new A.t(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bvF=new A.t(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_B=new A.t(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bvW=new A.t(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bwc=new A.t(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_G=new A.t(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bwh=new A.t(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.al7=new A.t(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.al9=new A.t(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bwA=new A.t(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alf=new A.t(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bx1=new A.t(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bx5=new A.t(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bxc=new A.t(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bxk=new A.t(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bxt=new A.t(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.by2=new A.t(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.byy=new A.t(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fMC=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bC4=new A.eM(null,D.fMC,B.fd,null,x.A)
D.fVM=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bC6=new A.eM(null,D.fVM,B.fd,null,x.A)
D.am9=new A.bd(3e4)
D.bCE=new A.bd(38e5)
D.bDn=new A.iu(0,10,0,10)
D.bDw=new A.R(0,1,0,0)
D.bDH=new A.iu(0,4,0,4)
D.bDK=new A.R(0,4,5,0)
D.bE_=new A.R(10,10,14,10)
D.bEa=new A.iu(10,4,10,4)
D.bEj=new A.iu(10,8,10,8)
D.bEk=new A.R(10,8,8,8)
D.bEP=new A.R(12,6,12,2)
D.bF6=new A.R(14,0,14,6)
D.bFa=new A.R(14,10,6,6)
D.bFb=new A.R(14,12,14,0)
D.bFf=new A.R(14,12,14,8)
D.bFi=new A.R(14,12,8,14)
D.bFm=new A.iu(14,14,14,14)
D.bFF=new A.R(14,6,14,40)
D.bFI=new A.R(14,8,14,30)
D.bG5=new A.R(16,2,16,10)
D.bGe=new A.R(16,6,16,30)
D.bGg=new A.R(16,6,16,8)
D.bGv=new A.R(18,10,18,4)
D.bGx=new A.R(18,12,18,0)
D.bGE=new A.R(18,14,12,4)
D.anH=new A.R(18,16,18,8)
D.bGU=new A.R(18,20,18,22)
D.bH_=new A.R(18,30,18,30)
D.bHh=new A.R(20,10,12,20)
D.bHk=new A.R(20,11,20,11)
D.bHw=new A.R(20,18,16,18)
D.bHy=new A.R(20,18,20,6)
D.bIn=new A.R(24,32,24,28)
D.bIo=new A.R(24,36,24,32)
D.bIr=new A.R(26,26,24,14)
D.bIG=new A.R(2,4,2,8)
D.bIK=new A.R(30,0,30,0)
D.bIV=new A.R(38,22,22,22)
D.ao4=new A.R(40,24,24,24)
D.bIX=new A.iu(40,40,40,40)
D.bIZ=new A.R(46,30,30,30)
D.bJq=new A.R(56,40,40,40)
D.bJu=new A.R(1.25,1.25,1.25,1.25)
D.bJv=new A.R(60,0,60,0)
D.bJz=new A.R(6,14,6,16)
D.bJD=new A.R(6,4,12,0)
D.bJH=new A.R(6,6,10,2)
D.bJO=new A.iu(7,3,7,3)
D.bKk=new A.R(5,1.5,5,1.5)
D.bKv=new A.R(6,2.5,6,2.5)
D.h2W=new A.B("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fLe=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.We,null,null,null,null,null,null,null,null,null)
D.cLO=w([D.h2W,D.fLe],x.p)
D.bzy=new A.fp(B.ah,B.e,B.h,B.E,null,B.p,null,0,D.cLO,null)
D.bKW=new A.by(1,B.ba,D.bzy,null)
D.h7i=new A.B("Signature",null,B.nf,null,null,null,null,null,null,null,null,null)
D.bKZ=new A.by(1,B.ba,D.h7i,null)
D.h_v=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.u1,null,null,null,null,null,null,null,null,null)
D.bLw=new A.by(1,B.ba,D.h_v,null)
D.h4o=new A.B("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bLO=new A.by(1,B.ba,D.h4o,null)
D.fFJ=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6n=new A.B("Worksheets",null,D.fFJ,null,null,null,null,null,null,null,null,null)
D.fFV=new A.G(!0,E.ahb,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5e=new A.B("Track your project spending",null,D.fFV,null,null,null,null,null,null,null,null,null)
D.d9B=w([D.h6n,B.ax,D.h5e],x.p)
D.bzb=new A.fp(B.ah,B.e,B.h,B.E,null,B.p,null,0,D.d9B,null)
D.bLU=new A.by(1,B.ba,D.bzb,null)
D.fAF=new A.G(!0,E.kw,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLO=new A.B("FAMILY LIBRARY",null,D.fAF,null,null,null,null,null,null,null,null,null)
D.bMc=new A.by(1,B.ba,D.fLO,null)
D.P3=new C.Ix("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wL=new C.Iy(0,"male")
D.oB=new C.Iy(1,"female")
D.zb=new C.Iy(2,"unknown")
D.uR=new C.amy(0,"owner")
D.P4=new C.amy(1,"editor")
D.kZ=new C.amy(2,"viewer")
D.aq1=new A.a_(61199,"MaterialIcons",!1)
D.bRx=new A.a_(61504,"MaterialIcons",!1)
D.bRy=new A.a_(61505,"MaterialIcons",!1)
D.bRA=new A.a_(61587,"MaterialIcons",!1)
D.bRH=new A.a_(61890,"MaterialIcons",!1)
D.bSA=new A.a_(63034,"MaterialIcons",!0)
D.bSS=new A.a_(63153,"MaterialIcons",!1)
D.bTp=new A.a_(63429,"MaterialIcons",!1)
D.as7=new A.a_(984520,"MaterialIcons",!1)
D.bS5=new A.a_(62776,"MaterialIcons",!1)
D.bVN=new A.ae(D.bS5,26,B.b2,null,null,null)
D.bQv=new A.a_(57648,"MaterialIcons",!1)
D.bW6=new A.ae(D.bQv,14,B.c,null,null,null)
D.bWo=new A.ae(B.HB,17,null,null,null,null)
D.bWu=new A.ae(B.Pz,null,B.bQ,null,null,null)
D.bWU=new A.ae(E.a3e,null,null,null,null,null)
D.bWX=new A.ae(B.jb,18,E.kw,null,null,null)
D.a2Z=new A.a_(62044,"MaterialIcons",!1)
D.bX2=new A.ae(D.a2Z,null,B.aV,null,null,null)
D.bX9=new A.ae(B.zp,18,B.c,null,null,null)
D.bXR=new A.ae(B.e9,16,null,null,null,null)
D.bXY=new A.ae(D.a2Z,32,B.aV,null,null,null)
D.bYg=new A.ae(E.aq2,18,B.cW,null,null,null)
D.bZm=new A.ae(B.HM,22,B.aA,null,null,null)
D.bZz=new A.ae(B.e9,22,B.b2,null,null,null)
D.bZM=new A.ae(Y.a33,22,B.c,null,null,null)
D.bZT=new A.ae(B.v0,52,B.c,null,null,null)
D.c_2=new A.ae(B.HM,30,B.aA,null,null,null)
D.c_m=new A.ae(B.a3i,null,B.c,null,null,null)
D.asR=new A.ae(B.vc,22,B.c,null,null,null)
D.c_v=new A.ae(B.e9,17,null,null,null,null)
D.c_T=new A.ae(B.wX,26,B.cW,null,null,null)
D.c0F=new A.ae(B.a3t,16,null,null,null,null)
D.c1r=new A.ae(B.v0,24,B.c,null,null,null)
D.c1w=new A.ae(B.Px,20,B.tB,null,null,null)
D.c1B=new A.ae(B.Hz,null,B.bQ,null,null,null)
D.c1K=new A.ae(B.jb,18,B.c,null,null,null)
D.c2q=new A.ae(B.cB,22,B.ab,null,null,null)
D.c3j=new A.ae(B.ej,16,B.ab,null,null,null)
D.c3v=new A.ae(D.a2Z,20,B.aV,null,null,null)
D.ath=new A.ae(B.hd,20,null,null,null,null)
D.c41=new A.ae(B.cB,18,D.kQ,null,null,null)
D.c4j=new A.ae(B.zz,28,B.c,null,null,null)
D.c4v=new A.ae(B.Pn,null,B.fj,null,null,null)
D.c4Q=new A.ae(B.zz,24,B.c,null,null,null)
D.c5h=new A.ae(B.v0,null,B.aV,null,null,null)
D.c5i=new A.ae(B.js,20,B.cW,null,null,null)
D.c5C=new A.ae(B.HB,16,null,null,null,null)
D.c7a=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eM,!0,null,null,null,null)
D.au0=new C.a6L(10,null)
D.c7G=new C.a6L(12,null)
D.c7H=new C.a6L(14,null)
D.dqx=w([B.bv,B.aV,B.fq,B.b2],x.O)
D.c8S=new A.a7(B.ay,B.aC,B.x,D.dqx,null,null)
D.brJ=new A.t(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.by9=new A.t(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d61=w([D.brJ,D.by9],x.O)
D.c93=new A.a7(B.aZ,B.b4,B.x,D.d61,null,null)
D.dkm=w([B.ff,B.fX,B.fq],x.O)
D.c99=new A.a7(B.ay,B.aC,B.x,D.dkm,null,null)
D.ak2=new A.t(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bi3=new A.t(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d8f=w([D.ak2,D.bi3],x.O)
D.c9L=new A.a7(B.aZ,B.b4,B.x,D.d8f,null,null)
D.blV=new A.t(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aDh=w([D.blV,D.ak2],x.O)
D.ca3=new A.a7(B.ay,B.aC,B.x,D.aDh,null,null)
D.aiM=new A.t(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.boC=new A.t(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.djp=w([D.aiM,D.boC],x.O)
D.caJ=new A.a7(B.a5,B.a9,B.x,D.djp,null,null)
D.dxH=w([B.bD,B.nw],x.O)
D.caL=new A.a7(B.aZ,B.b4,B.x,D.dxH,null,null)
D.brE=new A.t(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dyE=w([D.brE,D.kQ,D.kQ,I.Ny],x.O)
D.dBj=w([0,0.07,0.9,1],x.n)
D.cbg=new A.a7(B.a5,B.a9,B.x,D.dyE,D.dBj,null)
D.cbp=new A.a7(B.ay,B.aC,B.x,B.Tg,null,null)
D.d3K=w([B.aD,D.lG],x.O)
D.cbs=new A.a7(B.a5,B.a9,B.x,D.d3K,null,null)
D.dxe=w([B.b2,B.aV,B.bQ],x.O)
D.cct=new A.a7(B.ay,B.aC,B.x,D.dxe,null,null)
D.cgM=w([10,20,30],x.t)
D.cqJ=w([-1,-0.4,0.3,1],x.n)
D.cyb=w([B.bv,B.b2,B.ff],x.O)
D.cyj=w([B.bh,B.aD,B.kv],x.O)
D.cyl=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cz3=w([30,140,262,360],x.n)
D.bpW=new A.t(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cEC=w([D.bpW,E.ajD],x.O)
D.esl=new A.r(1,2)
D.fiB=new A.cU(B.b5,D.esl,3)
D.aA9=w([D.fiB],x.F)
D.cM4=w([B.h8,B.ci,B.fA],x.O)
D.cOR=w([B.bP,B.by,B.bs],x.O)
D.bN2=new C.uU("classic","Classic leather","Gold-edged brown leather",D.aDh,E.kw,E.kw,"\u2766",B.K,!0,!1,!1,!1)
D.bh8=new A.t(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bwS=new A.t(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dbn=w([D.bh8,D.bwS],x.O)
D.ajG=new A.t(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bMY=new C.uU("ornate","Ornate gold","Double gold border and flourishes",D.dbn,D.ajG,D.ajG,"\u2726",B.K,!0,!0,!0,!1)
D.blr=new A.t(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bsv=new A.t(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d2B=w([D.blr,D.bsv],x.O)
D.bMX=new C.uU("parchment","Parchment","Old paper with dark ink",D.d2B,D.Gt,L.j6,"\u2767",B.K,!0,!1,!1,!0)
D.agQ=new A.t(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bv2=new A.t(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dvo=w([D.agQ,D.bv2],x.O)
D.bpo=new A.t(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.buf=new A.t(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bN_=new C.uU("minimal","Clean paper","Plain and elegant, like a printed book",D.dvo,D.bpo,D.buf,"",B.K,!0,!0,!1,!0)
D.bN1=new C.uU("midnight","Midnight","Deep blue with silver stars",K.aDz,B.cA,B.ch,"\u2727",B.K,!0,!0,!1,!1)
D.bMW=new C.uU("emerald","Emerald library","Green cloth, title on the left",W.aAz,E.kw,B.fZ,"\u25c6",B.bd,!0,!1,!1,!1)
D.bvx=new A.t(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dtn=w([B.eq,D.bvx],x.O)
D.bqK=new A.t(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bs2=new A.t(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bN0=new C.uU("rose","Rose vintage","Burgundy with rose-gold lettering",D.dtn,D.bqK,D.bs2,"\u2740",B.K,!0,!1,!0,!1)
D.dye=w([B.ct,F.mX],x.O)
D.bMZ=new C.uU("modern","Modern","Dark, bold, left-aligned",D.dye,B.aH,B.c,"",B.bd,!1,!0,!1,!1)
D.a5x=w([D.bN2,D.bMY,D.bMX,D.bN_,D.bN1,D.bMW,D.bN0,D.bMZ],A.at("O<uU>"))
D.cRS=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dy2=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bNd=new C.ly('What does "Ubuntu" mean?',D.dy2,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d4q=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bNg=new C.ly("In Swahili, what do we call a grandmother?",D.d4q,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d4h=w(["Babu","Mama","Baba","Dada"],x.s)
D.bNb=new C.ly("In Swahili, what do we call a grandfather?",D.d4h,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d5C=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bNf=new C.ly("What is a sister called in Swahili?",D.d5C,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.daO=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bNc=new C.ly("What is a brother called in Swahili?",D.daO,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d4g=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bNn=new C.ly("Which word means father in Swahili?",D.d4g,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dze=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bNm=new C.ly('"Umoja ni nguvu" means...',D.dze,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dw7=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bNo=new C.ly('"Haba na haba hujaza kibaba" teaches us...',D.dw7,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d8o=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bNl=new C.ly('The African saying "It takes a village to raise a child" means...',D.d8o,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dzy=w(["The elders","The market","The river","The drum"],x.s)
D.bNh=new C.ly("Who is the traditional keeper of the family stories?",D.dzy,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cW3=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bNe=new C.ly("Why do families sit round the fire at night?",D.cW3,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dyg=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bNj=new C.ly('What does "Harambee" mean?',D.dyg,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.ddD=w(["An elder","A baby","A market","A cow"],x.s)
D.bNi=new C.ly('"Mzee" is a respectful word for...',D.ddD,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dtd=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bNk=new C.ly('What does "Shikamoo" show?',D.dtd,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAu=w([D.bNd,D.bNg,D.bNb,D.bNf,D.bNc,D.bNn,D.bNm,D.bNo,D.bNl,D.bNh,D.bNe,D.bNj,D.bNi,D.bNk],x.J)
D.d_s=w([90,360],x.n)
D.d28=w([B.bQ,B.bo],x.O)
D.brr=new A.t(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d2N=w([D.agQ,D.brr],x.O)
D.d3t=w([-1,-0.3,0.4,1],x.n)
D.d4m=w([0,0.45,0.72,0.92,1],x.n)
D.bln=new A.t(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d4F=w([D.bln,B.bA],x.O)
D.bj3=new A.t(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.alp=new A.t(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d5g=w([B.dA,D.bj3,D.alp],x.O)
D.d6i=w([B.b9,B.jl,B.pk],x.O)
D.blW=new A.t(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bu6=new A.t(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.biK=new A.t(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d6n=w([D.blW,D.bu6,D.biK],x.O)
D.d6I=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d6S=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hC9=new C.aef(78,424,48,44,56)
D.hC7=new C.aef(214,396,34,34,42)
D.hC8=new C.aef(442,452,56,50,64)
D.aBs=w([D.hC9,D.hC7,D.hC8],A.at("O<aef>"))
D.d7r=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bhX=new A.t(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bnM=new A.t(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dBf=w([D.aiM,D.bhX,D.bnM],x.O)
D.bN3=new C.uV("leather","Leather",D.dBf,"vintage")
D.deE=w([B.dh,B.Gj,Aa.Zn],x.O)
D.bNa=new C.uV("midnight","Midnight",D.deE,"starry")
D.d6j=w([B.ep,B.eb,B.ll],x.O)
D.bN9=new C.uV("forest","Forest",D.d6j,"story")
D.dDk=w([B.er,B.eq,B.ky],x.O)
D.bN6=new C.uV("burgundy","Burgundy",D.dDk,"royal")
D.cOp=w([B.aD,B.mR,B.nn],x.O)
D.bN7=new C.uV("royal","Royal",D.cOp,"royal")
D.d8V=w([B.by,B.ct,F.mX],x.O)
D.bN4=new C.uV("charcoal","Charcoal",D.d8V,"geo")
D.dBo=w([B.c9,B.dN,B.ys],x.O)
D.bN8=new C.uV("sunset","Sunset",D.dBo,"sunset")
D.dC7=w([B.jl,B.yv,B.Zr],x.O)
D.bN5=new C.uV("ocean","Ocean",D.dC7,"band")
D.A3=w([D.bN3,D.bNa,D.bN9,D.bN6,D.bN7,D.bN4,D.bN8,D.bN5],A.at("O<uV>"))
D.d9q=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.da5=w([B.an,B.aL,B.a_],x.O)
D.dbs=w([B.eq,B.eb,B.dh,B.iL,B.yx,B.cW,B.k1,B.cR,B.d6],x.O)
D.dbt=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fiC=new A.cU(B.dB,B.dL,8)
D.dbD=w([D.fiC],x.F)
D.dcM=w([B.c4,B.dN,B.jX],x.O)
D.bjV=new A.t(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bo4=new A.t(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bsq=new A.t(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dd1=w([D.bjV,G.akb,D.bo4,D.bsq,D.alp],x.O)
D.ddi=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.ddt=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bhk=new A.t(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bnq=new A.t(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.ddW=w([D.bhk,D.aie,D.bnq],x.O)
D.dez=w([B.c4,B.hI],x.O)
D.deF=w([G.np,B.ic,G.ah1,B.cV],x.O)
D.dgg=w([B.cV,G.np,B.ic,D.lH,B.cV],x.O)
D.dgT=w([B.aQ,B.yt,B.yj],x.O)
D.aCu=w(["True","False"],x.s)
D.ePG=new A.y(-0.65,0.6)
D.f1o=new A.y(-0.2,0.95)
D.f2v=new A.y(0.25,0.95)
D.eTa=new A.y(0.7,0.6)
D.f34=new A.y(1,0.1)
D.dhE=w([Ar.V5,D.ePG,D.f1o,D.f2v,D.eTa,D.f34],x.G)
D.bqe=new A.t(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bwK=new A.t(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bkV=new A.t(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dhK=w([D.bqe,D.bwK,D.bkV],x.O)
D.dhP=w([B.bL,B.bX,B.dy,B.aQ],x.O)
D.dik=w([B.hK,B.c9,B.us],x.O)
D.diJ=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.diU=w([B.ff,B.cW],x.O)
D.brN=new A.t(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.djk=w([D.brN,D.agO],x.O)
D.djw=w([B.cO,B.fL,B.h_],x.O)
D.djI=w([B.aH,B.bo,B.dh],x.O)
D.dkj=w([B.ew,B.dn,B.eb],x.O)
D.dkD=w([B.dX,B.dh,B.Gj],x.O)
D.dkH=w([B.bt,B.mO,B.d6],x.O)
D.dkY=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bqZ=new A.t(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bp6=new A.t(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dli=w([D.bqZ,D.aia,D.bp6],x.O)
D.dm8=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dnb=w([1,0,7,6,3,2],x.t)
D.a6w=w(["leather","linen","plain","stars","rays"],x.s)
D.dnn=w([0.5,2,3.6],x.n)
D.dnW=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bV5=new A.a_(983781,"MaterialIcons",!1)
D.aCY=w([B.Pz,B.hC,B.kC,B.i0,F.asf,B.HY,B.qP,D.bV5,K.arT,B.Dn,B.qS,B.mk],A.at("O<a_>"))
D.a6A=w(["double","single","corners","none"],x.s)
D.bMT=new C.zC("Little Seed","\ud83c\udf31",0)
D.bMV=new C.zC("Young Listener","\ud83d\udc42",40)
D.bMU=new C.zC("Storyteller","\ud83e\ude98",120)
D.bMS=new C.zC("Village Pride","\ud83c\udfe1",300)
D.bMQ=new C.zC("Keeper of Roots","\ud83c\udf33",700)
D.bMR=new C.zC("Elder of the Fire","\ud83d\udd25",1500)
D.aD_=w([D.bMT,D.bMV,D.bMU,D.bMS,D.bMQ,D.bMR],A.at("O<zC>"))
D.dp6=w([B.d_,B.bj,B.cR],x.O)
D.dpm=w([],x.C)
D.DX=w([],x.u)
D.aNc=new A.r(225,528)
D.eRm=new A.y(D.aNc,1)
D.et5=new A.r(350,548)
D.eXC=new A.y(D.et5,0.95)
D.aN6=new A.r(158,656)
D.eXv=new A.y(D.aN6,1.12)
D.etS=new A.r(92,544)
D.eMW=new A.y(D.etS,0.93)
D.et8=new A.r(398,614)
D.eTx=new A.y(D.et8,1.04)
D.esX=new A.r(318,662)
D.eIg=new A.y(D.esX,1.1)
D.a6I=w([D.eRm,D.eXC,D.eXv,D.eMW,D.eTx,D.eIg],A.at("O<+(r,H)>"))
D.drn=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.drR=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dsW=w([B.cV,G.np,B.ic,D.lH,B.cV,B.ic],x.O)
D.dul=w([B.at,B.fL,B.iL],x.O)
D.dv_=w([-70,58],x.n)
D.dv1=w([-70,-30,20],x.n)
D.dw4=w([B.bt,B.mO,B.a_w],x.O)
D.dwm=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dS7=new C.m0("construction","Construction","Jobsite & builds",B.qR)
D.dSe=new C.m0("house","Home Build","Houses & rooms",B.v2)
D.dS4=new C.m0("grocery","Grocery","Store & pantry",B.a41)
D.dS3=new C.m0("calculator","Calculations","Math & estimates",B.PF)
D.dSc=new C.m0("lumber","Materials","Lumber & supplies",B.HV)
D.dS0=new C.m0("kitchen","Kitchen","Remodel & meals",A3.PZ)
D.bV3=new A.a_(983756,"MaterialIcons",!1)
D.dS5=new C.m0("landscape","Landscaping","Yard & garden",D.bV3)
D.dS_=new C.m0("plumbing","Plumbing","Pipes & water",B.pH)
D.dSf=new C.m0("electrical","Electrical","Wiring & power",B.ho)
D.dRY=new C.m0("store","Retail Shop","Daily business",B.kf)
D.dRZ=new C.m0("paint_remodel","Paint & Remodel","Colors & walls",A3.PV)
D.bUq=new A.a_(983311,"MaterialIcons",!1)
D.dSb=new C.m0("roofing","Roofing","Roofs & exteriors",D.bUq)
D.bVe=new A.a_(983986,"MaterialIcons",!1)
D.dRX=new C.m0("warehouse","Warehouse","Storage & stock",D.bVe)
D.dS9=new C.m0("vehicles","Vehicles","Fleet & transport",B.Dj)
D.bS7=new A.a_(62785,"MaterialIcons",!1)
D.dS2=new C.m0("farm","Farm","Crops & livestock",D.bS7)
D.dS1=new C.m0("restaurant","Restaurant","Food & catering",B.va)
D.dS8=new C.m0("tools","Tools","Workshop gear",B.Df)
D.dSd=new C.m0("wallet","Cash & Wallet","Quick spending",B.js)
D.dSa=new C.m0("concrete","Concrete","Foundation work",F.ar_)
D.dS6=new C.m0("blueprint","Blueprint","Plans & design",Ap.aqw)
D.a76=w([D.dS7,D.dSe,D.dS4,D.dS3,D.dSc,D.dS0,D.dS5,D.dS_,D.dSf,D.dRY,D.dRZ,D.dSb,D.dRX,D.dS9,D.dS2,D.dS1,D.dS8,D.dSd,D.dSa,D.dS6],A.at("O<m0>"))
D.dwU=w([B.bu,B.bj],x.O)
D.dxI=w([B.iw,B.oj,B.dW],x.O)
D.aj_=new A.t(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ajY=new A.t(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bps=new A.t(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bgO=new A.t(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aE7=w([D.aj_,D.ajY,D.bps,D.bgO],x.O)
D.dyV=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7g=w(["top","middle","bottom"],x.s)
D.dAq=w([B.cs,B.bo,B.dh],x.O)
D.aEr=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bap=new A.ab(0,B.G,B.b5,B.J,14)
D.aEv=w([D.bap],x.V)
D.boj=new A.t(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dB8=w([D.ahs,D.a_v,D.boj],x.O)
D.dB9=w([B.bc,B.dn,B.eb],x.O)
D.esG=new A.r(24,-8)
D.eto=new A.r(48,0)
D.esC=new A.r(24,6)
D.dCR=w([B.J,D.esG,D.eto,D.esC],x.g)
D.dDg=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.epa={top:0,middle:1,bottom:2}
D.dGv=new A.bs(D.epa,["Top","Middle","Bottom"],x.r)
D.eoL={double:0,single:1,corners:2,none:3}
D.dGB=new A.bs(D.eoL,["Double line","One line","Corners","None"],x.r)
D.epZ={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dI3=new A.bs(D.epZ,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dIf=new A.bs(B.i2,[],A.at("bs<F,+(n,n)>"))
D.ep2={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Eb=new A.bs(D.ep2,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bs<n,F>"))
D.dMw=new H.NY(32,null)
D.dMx=new H.NY(40,null)
D.dMy=new H.NY(46,null)
D.aME=new C.aux(null)
D.erw=new A.r(0,40)
D.erx=new A.r(0,412)
D.erA=new A.r(0,900)
D.erK=new A.r(0,-34)
D.erL=new A.r(0,-46)
D.erN=new A.r(0,-74)
D.erQ=new A.r(100,300)
D.erR=new A.r(10,14)
D.erU=new A.r(10,-10)
D.erZ=new A.r(10,-46)
D.es_=new A.r(10,-58)
D.es0=new A.r(116,442)
D.es2=new A.r(11,-1)
D.es3=new A.r(11,-10)
D.es4=new A.r(11,-21)
D.aN1=new A.r(11,-60)
D.esb=new A.r(14,-2)
D.esc=new A.r(150,520)
D.a9s=new A.r(150,592)
D.esf=new A.r(15,-15)
D.esg=new A.r(16,-1)
D.esk=new A.r(190,444)
D.esn=new A.r(1,5)
D.esv=new A.r(21,-78)
D.esw=new A.r(222,615)
D.JU=new A.r(225,300)
D.a9u=new A.r(225,574)
D.esF=new A.r(24,-52)
D.esH=new A.r(250,210)
D.esS=new A.r(2,-56)
D.aNg=new A.r(300,0)
D.esT=new A.r(300,440)
D.esW=new A.r(318,476)
D.esZ=new A.r(324,144)
D.a9x=new A.r(332,150)
D.et0=new A.r(335,585)
D.et1=new A.r(338,140)
D.et2=new A.r(340,158)
D.et4=new A.r(34,-60)
D.EC=new A.r(36,-24)
D.et6=new A.r(372,470)
D.et7=new A.r(390,455)
D.etg=new A.r(42,468)
D.eth=new A.r(431,510)
D.eti=new A.r(431,520)
D.etj=new A.r(45,-92)
D.etk=new A.r(46,20)
D.etl=new A.r(46,-92)
D.etm=new A.r(46,-94)
D.etn=new A.r(47,-4)
D.etp=new A.r(48,-4)
D.etx=new A.r(4,-26)
D.etF=new A.r(60,455)
D.etN=new A.r(8,14)
D.etR=new A.r(8,-76)
D.etT=new A.r(95,575)
D.etU=new A.r(98,-24)
D.etW=new A.r(9,-2)
D.etX=new A.r(9,-58)
D.aNp=new A.r(9,-79)
D.etY=new A.r(9,-9)
D.euB=new A.r(16.5,8)
D.euD=new A.r(3.2,0)
D.euF=new A.r(-16.5,8)
D.euM=new A.r(16.5,2)
D.euP=new A.r(-3.2,0)
D.euX=new A.r(9.5,6)
D.ev0=new A.r(-10,14)
D.ev1=new A.r(-10,-12)
D.ev2=new A.r(-10,-58)
D.ev4=new A.r(-11,-1)
D.ev5=new A.r(-11,-10)
D.ev7=new A.r(-11,-60)
D.ev8=new A.r(-12,-14)
D.ev9=new A.r(-12,-16)
D.evg=new A.r(-14,-2)
D.evj=new A.r(-15,-15)
D.evk=new A.r(-15,-3)
D.evm=new A.r(-16,-1)
D.evD=new A.r(-24,-52)
D.evK=new A.r(-2,-34)
D.evL=new A.r(-2,-38)
D.evN=new A.r(-30,-100)
D.a9z=new A.r(-36,-24)
D.evY=new A.r(-4,-26)
D.ew_=new A.r(-4,-6)
D.ew9=new A.r(-8,-3)
D.ewa=new A.r(-8,-48)
D.ewd=new A.r(-9,-2)
D.ewf=new A.r(-9,-58)
D.ewg=new A.r(-9,-79)
D.ewh=new A.r(-9,-9)
D.ewj=new A.r(-9.5,6)
D.eww=new A.r(-16.5,2)
D.fT8=new A.B("Write a new book",null,B.hu,null,B.K,null,null,null,null,null,null,null)
D.ex5=new A.D(B.kX,D.fT8,null)
D.h6R=new A.B("Tap to go on",null,B.vP,null,null,null,null,null,null,null,null,null)
D.exr=new A.D(B.ln,D.h6R,null)
D.asp=new A.ae(B.i_,18,B.c,null,null,null)
D.fM8=new A.B("Add",null,B.kI,null,null,null,null,null,null,null,null,null)
D.di2=w([D.asp,B.rd,D.fM8],x.p)
D.ffH=new A.c7(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.di2,null)
D.exu=new A.D(B.nH,D.ffH,null)
D.exv=new A.D(E.amx,A7.YF,null)
D.fFE=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPl=new A.B("New Project",null,D.fFE,null,null,null,null,null,null,null,null,null)
D.dmw=w([D.asp,B.ae,D.fPl],x.p)
D.ffK=new A.c7(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dmw,null)
D.exJ=new A.D(B.hP,D.ffK,null)
D.fRS=new A.B("Choose your header",null,A0.vO,null,null,null,null,null,null,null,null,null)
D.ey3=new A.D(B.hZ,D.fRS,null)
D.bg0=new A.fn(2.2,null,null,null,null,B.cW,null,null,null,null)
D.flt=new A.a5(22,22,D.bg0,null)
D.be7=new A.cj(B.z,null,null,D.flt,null)
D.ey8=new A.D(B.a0S,D.be7,null)
D.bFx=new A.R(14,2,14,6)
D.h4Y=new A.B("The top of your book. Tap a design to see it.",null,U.u_,null,null,null,null,null,null,null,null,null)
D.ey9=new A.D(D.bFx,D.h4Y,null)
D.fR1=new A.B("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.eyb=new A.D(B.ln,D.fR1,null)
D.ezK=new A.j9(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.ezN=new A.j9(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aO_=new A.j9(1,0.9607843137254902,0.48627450980392156,0)
D.K1=new A.j9(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AE=new A.j9(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.ezT=new A.j9(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hEb=new C.bk8(null)
D.bAk=new A.mN(D.hEb,null,B.az,null,null)
D.aRD=new A.cK(0,0,0,0,null,null,D.bAk,null)
D.fMa=new A.B("\ud83c\udfc5",null,B.abR,null,null,null,null,null,null,null,null,null)
D.eEi=new A.cK(null,0,-34,null,null,null,D.fMa,null)
D.eMA=new A.y("E","Sit by the fire again")
D.eSa=new A.y("C","Good Learner")
D.eVA=new A.y("D","Still Growing")
D.f_a=new A.y(-42,42)
D.f0x=new A.y("B","Faithful Listener")
D.f2x=new A.y("A","Keeper of the Family")
D.f5G=new A.b3(-17,0.7,0)
D.f6e=new A.b3(-8,0.95,1.3)
D.f7i=new A.b3(18,0.65,5.2)
D.f7k=new A.b3(0,1.15,2.6)
D.f7F=new A.b3(9,0.9,3.9)
D.f9A=new A.ca([0,0,1,1])
D.aT7=new A.a4(0,0,520,160)
D.fcK=new A.a4(10,612,440,618)
D.fcL=new A.a4(10,612,440,628)
D.fcO=new A.a4(14,-64,34,-12)
D.fcR=new A.a4(300,336,350,348)
D.aat=new A.a4(30,96,420,346)
D.fcS=new A.a4(30,-9,46,1)
D.fcT=new A.a4(4,2,11,14)
D.fcV=new A.a4(-8,-12.5,8,-7)
D.fcW=new A.a4(-16.5,-21,16.5,1)
D.fcX=new A.a4(60,342,88,348)
D.V6=new A.a4(66,-66,94,-36)
D.fcY=new A.a4(6,8,10,14)
D.fd0=new A.a4(95,343,115,348)
D.fd1=new A.a4(-6.5,-74,6.5,-58)
D.fd7=new A.a4(-100,-74,100,-12)
D.fd8=new A.a4(-10,8,-6,14)
D.fd9=new A.a4(-11,2,-4,14)
D.fda=new A.a4(-11,-70,11,-56)
D.fdh=new A.a4(-13,-24,13,-4)
D.fdn=new A.a4(-15,-21,15,0)
D.fdq=new A.a4(-16,-21,16,1)
D.fdr=new A.a4(-16,-21,16,2)
D.fdu=new A.a4(-16,-26,16,-6)
D.fdE=new A.a4(-230,-26,230,26)
D.fe1=new A.a4(-38,-26,12,-6)
D.fe5=new A.a4(-3,-70,3,-63)
D.fe6=new A.a4(-44,-22,44,0)
D.fe8=new A.a4(-46,-9,-30,1)
D.aTb=new A.a4(-80,-190,80,20)
D.fef=new A.a4(-8,-26,40,-6)
D.feg=new A.a4(-98,-80,92,-75)
D.feh=new A.a4(-9,-15,9,-9)
D.h4v=new A.B("Let the AI write it from your tree",null,B.iH,null,B.K,null,null,null,null,null,null,null)
D.bNY=new A.di(1,B.cn,D.h4v,null)
D.dey=w([E.a4v,B.ae,D.bNY],x.p)
D.ffl=new A.c7(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dey,null)
D.fLP=new A.B("Save member",null,B.cd,null,null,null,null,null,null,null,null,null)
D.duK=w([D.ath,B.ae,D.fLP],x.p)
D.ffv=new A.c7(B.aM,B.b8,B.h,B.l,null,B.p,null,0,D.duK,null)
D.bZF=new A.ae(B.ii,14,B.b2,null,null,null)
D.fzb=new A.G(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPM=new A.B("Cashier",null,D.fzb,null,null,null,null,null,null,null,null,null)
D.dn2=w([D.bZF,B.bn,D.fPM],x.p)
D.ffz=new A.c7(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dn2,null)
D.fLQ=new A.B("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bLD=new A.by(1,B.ba,D.fLQ,null)
D.d5L=w([D.asR,B.as,D.bLD],x.p)
D.ffA=new A.c7(B.aM,B.e,B.h,B.l,null,B.p,null,0,D.d5L,null)
D.fk9=new A.av(16,40)
D.fke=new A.av(22,64)
D.fkl=new A.av(280,88)
D.fl9=new A.a5(30,null,null,null)
D.fKV=new A.B("The teacher is writing\u2026",null,B.B_,null,null,null,null,null,null,null,null,null)
D.bfe=new A.cj(B.z,null,null,D.fKV,null)
D.hyb=new A.bf("w",x.W)
D.fly=new A.a5(null,56,D.bfe,D.hyb)
D.fmm=new A.hL(5,8,8,1,null)
D.fmu=new A.hL(2,12,12,1.05,null)
D.fPr=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fnd=new A.b0(D.fPr,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fPH=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aVu=new A.b0(D.fPH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fY9=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fnH=new A.b0(D.fY9,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7T=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fnM=new A.b0(D.h7T,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRQ=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fnT=new A.b0(D.fRQ,null,null,null,null,null,null,null,null,null,null,null,null,B.hb,!1,null,null,null,B.t,null)
D.h5a=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aVz=new A.b0(D.h5a,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRO=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.foi=new A.b0(D.fRO,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fMr=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fok=new A.b0(D.fMr,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVA=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.foq=new A.b0(D.fVA,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h8D=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fp7=new A.b0(D.h8D,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h3p=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fpx=new A.b0(D.h3p,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7X=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fpA=new A.b0(D.h7X,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZN=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fpC=new A.b0(D.fZN,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTL=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fpD=new A.b0(D.fTL,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTM=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fqE=new A.b0(D.fTM,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fPt=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fqW=new A.b0(D.fPt,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fRt=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.frf=new A.b0(D.fRt,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZg=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.b0(D.fZg,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fUA=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.frx=new A.b0(D.fUA,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fEk=new A.G(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft5=new A.er("\u2665",null,null,B.cM,null,null,null,null,null,null,D.fEk)
D.fBu=new A.G(!0,B.aS,null,null,null,null,28,B.O,B.cJ,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftl=new A.er("Today: how well do you know the family?",null,null,B.cM,null,null,null,null,null,null,D.fBu)
D.ftC=new A.G(!0,B.qf,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new A.G(!0,D.kQ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fva=new A.G(!0,D.kQ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fve=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvn=new A.G(!0,D.fB,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvy=new A.G(!0,D.fB,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvS=new A.tb(!0,B.tN,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw7=new A.G(!0,B.cV,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwa=new A.G(!0,D.kQ,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwb=new A.G(!0,B.cV,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwg=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwj=new A.G(!0,B.cV,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new A.G(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwQ=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwS=new A.G(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxi=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWN=new A.G(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWO=new A.G(!0,D.lG,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxI=new A.G(!0,B.cV,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abW=new A.tb(!0,B.UC,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.W0=new A.G(!0,B.cV,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxS=new A.G(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxX=new A.G(!0,D.fB,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyl=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzw=new A.G(!0,D.fB,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWY=new A.G(!0,D.fB,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzQ=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA1=new A.G(!0,D.fB,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA9=new A.G(!0,L.j6,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX1=new A.G(!0,D.fB,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB4=new A.G(!0,D.fB,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBn=new A.G(!0,D.fB,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBp=new A.G(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBr=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBP=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.IT,null,null,null)
D.aXf=new A.G(!0,D.fB,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCc=new A.G(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCy=new A.G(!0,B.fj,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCW=new A.G(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD0=new A.G(!0,B.bD,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDf=new A.G(!0,D.fB,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDn=new A.G(!0,D.Gt,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDz=new A.G(!0,B.b2,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDY=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE4=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DP,null,null,null)
D.fEv=new A.G(!0,B.cV,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fED=new A.G(!0,B.cW,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEQ=new A.G(!0,D.lH,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXC=new A.G(!0,D.fB,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.L8=new A.G(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXE=new A.G(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DP,null,null,null)
D.fFa=new A.G(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFe=new A.G(!0,G.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFC=new A.G(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFU=new A.G(!0,D.fB,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGh=new A.G(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGG=new A.G(!0,D.fB,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHb=new A.G(!0,D.fB,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHg=new A.G(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHq=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acq=new A.G(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.act=new A.G(!0,D.lG,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ9=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJt=new A.G(!0,B.aS,null,null,null,null,27,B.O,B.cJ,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJA=new A.G(!0,L.j6,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new A.G(!0,L.j6,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKb=new A.B("Time:",null,B.hs,null,null,null,null,null,null,null,null,null)
D.fKw=new A.B("\ud83c\udfae",null,K.ach,null,null,null,null,null,null,null,null,null)
D.fKx=new A.B("Themes",null,B.pX,null,null,null,null,null,null,null,null,null)
D.fL2=new A.B("\ud83c\udfb2",null,B.xG,null,null,null,null,null,null,null,null,null)
D.fL6=new A.B("Delete this game?",null,B.iH,null,null,null,null,null,null,null,null,null)
D.fLd=new A.B("Add Item",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fzK=new A.G(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLE=new A.B("Debt receipt",null,D.fzK,null,B.K,null,null,null,null,null,null,null)
D.aXT=new A.G(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLX=new A.B("Person who owes",null,D.aXT,null,null,null,null,null,null,null,null,null)
D.fMV=new A.B("Notes",null,B.ac5,null,null,null,null,null,null,null,null,null)
D.fNl=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fyD=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNn=new A.B("Share",null,D.fyD,null,null,null,null,null,null,null,null,null)
D.fOo=new A.B("Move your family trees",null,I.acn,null,null,null,null,null,null,null,null,null)
D.fP2=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fPG=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fQ3=new A.B("SAVE",null,D.L8,null,null,null,null,null,null,null,null,null)
D.fQG=new A.B("The round button is the right answer.",null,U.B4,null,null,null,null,null,null,null,null,null)
D.fR0=new A.B("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fFz=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.DP,null,null,null)
D.fRy=new A.B("Fireside Stories",null,D.fFz,null,null,null,null,null,null,null,null,null)
D.aYm=new A.B("Download",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fSe=new A.B("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fyg=new A.G(!0,D.lG,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSt=new A.B("REPORT CARD",null,D.fyg,null,null,null,null,null,null,null,null,null)
D.fTf=new A.B("Calabash Catch",null,B.Wo,null,null,null,null,null,null,null,null,null)
D.fTH=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fU7=new A.B("\ud83c\udfe1",null,B.F7,null,null,null,null,null,null,null,null,null)
D.fUP=new A.B("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fHa=new A.G(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVj=new A.B("NGMY.ORG",null,D.fHa,null,B.K,null,null,null,null,null,null,null)
D.fWC=new A.B("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fDg=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXp=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fDg,null,B.K,null,null,null,null,null,null,null)
D.fYD=new A.B("Delete",null,B.VV,null,null,null,null,null,null,null,null,null)
D.fYE=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fYM=new A.B("Thumbnail",null,B.pX,null,null,null,null,null,null,null,null,null)
D.fZl=new A.B("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fZq=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.B8,null,B.K,null,null,null,null,null,null,null)
D.fZO=new A.B("Your photos",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h_3=new A.B("Create Project",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h_q=new A.B("\u2b50 stars",null,B.W8,null,null,null,null,null,null,null,null,null)
D.h_E=new A.B("Design your cover",null,A0.vO,null,null,null,null,null,null,null,null,null)
D.h_K=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h_N=new A.B("PICTURE",null,M.vS,null,null,null,null,null,null,null,null,null)
D.h_P=new A.B("\ud83c\udfaf",null,D.Wn,null,null,null,null,null,null,null,null,null)
D.h0b=new A.B("Paid",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h0d=new A.B("You can undo it right after.",null,U.B4,null,null,null,null,null,null,null,null,null)
D.h0L=new A.B("Print",null,B.vQ,null,null,null,null,null,null,null,null,null)
D.h19=new A.B("Amount owed",null,D.aXT,null,null,null,null,null,null,null,null,null)
D.h1o=new A.B("Got it",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h2_=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h22=new A.B("Add to budget",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h2s=new A.B("Debtor signature",null,B.ac5,null,null,null,null,null,null,null,null,null)
D.h2C=new A.B("Change icon",null,B.ac4,null,null,null,null,null,null,null,null,null)
D.h3q=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.u1,null,null,null,null,null,null,null,null,null)
D.h3S=new A.B("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h3Y=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Wm,null,null,null,null,null,null,null,null,null)
D.h4l=new A.B("Download",null,B.vQ,null,null,null,null,null,null,null,null,null)
D.h4m=new A.B("The person who planted this tree has not made a game yet.",null,B.B6,null,null,null,null,null,null,null,null,null)
D.h4q=new A.B("Change",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h5g=new A.B("Clear all",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h5j=new A.B("WHAT SHOULD IT CHANGE?",null,M.vS,null,null,null,null,null,null,null,null,null)
D.h5R=new A.B("COLOUR",null,M.vS,null,null,null,null,null,null,null,null,null)
D.h65=new A.B("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h68=new A.B("Create Tree",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h6i=new A.B("Give me another clue",null,D.L8,null,null,null,null,null,null,null,null,null)
D.h7c=new A.B("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.h7m=new A.B("THE TEACHER EXPLAINS THESE",null,T.u1,null,null,null,null,null,null,null,null,null)
D.ftB=new A.G(!0,E.kw,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7s=new A.B("Write the first page myself",null,D.ftB,null,null,null,null,null,null,null,null,null)
D.h8_=new A.B("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h86=new A.B("Create Project",null,E.aXy,null,null,null,null,null,null,null,null,null)
D.hzF=new C.acT(1,"header")
D.adv=new C.acT(2,"projects")
D.hzG=new C.acT(3,"cashier")
D.adw=new C.acT(4,"familyTree")
D.hN1=new C.cHi(0,"start")
D.hN2=new C.cHj(0,"start")
D.hzT=new C.ZU(null)
D.hAU=new C.a_m(null)
D.dIc=new A.bs(B.i2,[],A.at("bs<n,GF>"))
D.dpL=w([],x.dE)
D.dpM=w([],x.M)
D.hBs=new C.bhl(D.dIc,D.dpL,D.dpM,0,0,null,null)
D.b1S=new C.a0c(0,"intro")
D.b1T=new C.a0c(1,"countdown")
D.adJ=new C.a0c(2,"ask")
D.Xj=new C.a0c(3,"reveal")
D.b1U=new C.a0c(4,"end")
D.hEd=new C.tj(F.GB,D.lH,B.cV,F.m7,5,!1,!1,!1,0,null)
D.hEe=new C.tj(F.GB,B.er,B.cV,B.bO,2,!0,!0,!1,2,B.cV)
D.hEf=new C.tj(B.qs,B.cW,B.cV,F.m7,2,!0,!1,!1,2,B.at)
D.hEg=new C.tj(F.GB,B.dX,B.cV,F.m7,5,!1,!1,!1,1,null)
D.hEh=new C.tj(F.a_N,D.ajY,B.cV,F.m7,4,!0,!1,!0,0,null)
D.b1X=new C.tj(F.a_N,B.dN,B.cV,F.m7,3,!0,!1,!0,2,null)
D.b1Y=new C.tj(F.rX,D.lH,B.c,F.m7,0,!1,!1,!0,0,null)
D.b1Z=new C.tj(B.qs,B.aD,B.cV,B.bO,2,!0,!0,!1,2,B.dN)
D.b2_=new C.tj(B.qs,G.np,B.ic,F.m7,5,!1,!1,!0,3,null)
D.hEi=new C.tj(B.qs,B.dN,B.cV,F.m7,0,!0,!1,!1,0,B.aD)
D.b20=new C.tj(F.GB,B.er,B.cV,B.bO,1,!1,!0,!1,1,null)
D.b21=new C.tj(F.Ga,B.at,B.aD,F.m7,4,!0,!1,!0,2,null)
D.hEj=new C.tj(F.rX,B.at,B.er,F.m7,3,!0,!1,!1,0,null)
D.hEk=new C.tj(B.qs,B.dX,B.cV,B.bO,1,!1,!0,!1,1,null)
D.hEl=new C.tj(F.Ga,D.aj_,B.c,F.m7,5,!1,!1,!0,0,null)
D.hEZ=new C.a0K(null)
D.hNa=new C.agi(0,"still")
D.XG=new C.agi(1,"walk")
D.b2s=new C.agi(2,"pound")
D.b2t=new C.agi(3,"drum")
D.hIE=new C.a20(0,"greet")
D.b2u=new C.a20(1,"teach")
D.ae2=new C.a20(2,"ask")
D.hIF=new C.a20(3,"feedback")
D.b2v=new C.a20(4,"end")
D.XM=new C.a2j(0,"intro")
D.XN=new C.a2j(1,"asking")
D.Bo=new C.a2j(2,"reacting")
D.aee=new C.a2j(3,"driving")
D.aef=new C.a2j(4,"arrived")
D.aen=new C.aM7(0,"projects")
D.b2V=new C.aM7(1,"cashier")
D.hKK=new C.aM7(2,"familyTree")})()};
(a=>{a["rO1p7fvlleM/ehJwwx2b5dcZbX4="]=a.current})($__dart_deferred_initializers__);