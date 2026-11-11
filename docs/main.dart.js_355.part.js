((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,P,A0,S,Aa,L,H,E,T,Ab,Q,Ac,U,Ad,Ae,A1,Af,Ag,R,M,A2,A3,Ah,A4,A5,A6,Ai,Aj,A7,Ak,Al,A8,Am,G,An,Ao,Ap,A9,Aq,V,O,Ar,As,W,At,X,Y,F,Au,K,I,Z,C={
bFd(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFd=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vK(null,""),$async$bFd)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nl(b1)
s=A.bZ(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cV(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.H(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aq(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.re(t,a1,B.hV,"book",E.Gs),$async$bFd)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.R9(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LA(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cB
g=a8.h(0,"title")
a9=B.a.i(A.w(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.w(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a35(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFd,v)},
ahE(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahE=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vK(null,""),$async$ahE)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nl(b6)
s=x.S
r=A.d2(c1,0,A.dz(4,"count",s),A.T(c1).c)
q=H.a2T(new A.N(r,new C.fLN(),r.$ti.k("N<ak.E,m>")).aI(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fLM(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aq(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahE)
case 6:l=c5
k=H.R9(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apb(s,D.dBU,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.du(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aq(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahE)
case 10:l=c5
k=l==null?null:H.R9(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aX(a2.a),a2=a2.$ti,a7=new A.le(a5,a2.k("le<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
b0=J.a7(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.w(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.w(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("b9<2>")
p=A.cH(new A.b9(h,s),new C.fLO(),s.k("M.E"),p)
p=H.a2T(A.pA(p,3,A.a6(p).k("M.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cy<1>")
b4=A.C(new A.cy(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a35(s,b9),$async$ahE)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apb(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahE,v)},
hBT(d,e,f){return A.ch(null,B.w.j(0.65),!1,null,new C.fVe(e,f),d,null,!0,!0,x.g2)},
apb:function apb(d,e,f){this.a=d
this.b=e
this.c=f},
fLN:function fLN(){},
fLM:function fLM(d){this.a=d},
fLO:function fLO(){},
fVe:function fVe(d,e){this.a=d
this.b=e},
bD1(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bD1=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b_(b1,new C.fzp())){u=null
w=1
break}t=B.d.cJ(b1,new C.fzq())
s=$.S()
r=new A.p7()
q=A.zd(r,D.aR_)
p=A.J()
p.r=B.c.gp(0)
q.aQ(D.aR_,p)
o=A.J()
o.r=B.O.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.by
o.e=B.dQ
n=new C.fzv(t)
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
s=$.S()
p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aY(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aK(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aY(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aK(a3,o)}w=4
return A.b(r.nk().xh(520,160),$async$bD1)
case 4:w=3
return A.b(b3.hA(B.hb),$async$bD1)
case 3:b0=b3
u=b0==null?null:J.eT(B.dK.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD1,v)},
fJt(d){return C.ig9(d)},
ig9(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fJt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bit()
n=d.x!=null&&d.zk(null).length===0
if(d.x!=null)t=n?D.A4:D.Jz
else t=d.gUl()?D.Jz:D.aLS
w=3
return A.b(C.bD1(d.ax),$async$fJt)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anS(s)
r=A.a51(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aLS}else{p.c=C.x9(q,!0)
p.b=n?D.A4:D.Jz}r.a3T(A.h4G(new C.fJv(p,d,new C.fJw(),t,n,o),null,D.bER,B.wW))
u=r.jF(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJt,v)},
fQ7(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fQ7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fJt(d),$async$fQ7)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.au(q,0,40)
u=Ag.Ha(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQ7,v)},
fzp:function fzp(){},
fzq:function fzq(){},
fzv:function fzv(d){this.a=d},
fJw:function fJw(){},
fJv:function fJv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJu:function fJu(){},
fVH(d,e){var w=0,v=A.j(x.H)
var $async$fVH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ch(null,B.w.j(0.55),!0,null,new C.fVL(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$fVH)
case 2:return A.h(null,v)}})
return A.i($async$fVH,v)},
bFG(d,e,f,g){return C.inK(d,e,f,g)},
inK(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bFG=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aP(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fhs)
w=1
break}w=3
return A.b(A.ch(null,null,!0,null,new C.fVD(g,r,f),d,null,!0,!0,x.H),$async$bFG)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bFG,v)},
fVM(d,e){var w=0,v=A.j(x.H)
var $async$fVM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ch(null,null,!0,null,new C.fVP(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$fVM)
case 2:return A.h(null,v)}})
return A.i($async$fVM,v)},
b_g:function b_g(d,e){this.c=d
this.a=e},
c7i:function c7i(){},
bcv:function bcv(d,e){this.b=d
this.a=e},
fVL:function fVL(d,e){this.a=d
this.b=e},
fVI:function fVI(d){this.a=d},
fVJ:function fVJ(d,e,f){this.a=d
this.b=e
this.c=f},
fVK:function fVK(d,e){this.a=d
this.b=e},
fVD:function fVD(d,e,f){this.a=d
this.b=e
this.c=f},
fVB:function fVB(d){this.a=d},
fVC:function fVC(d,e,f){this.a=d
this.b=e
this.c=f},
fVP:function fVP(d,e){this.a=d
this.b=e},
fVN:function fVN(d){this.a=d},
fVO:function fVO(d,e,f){this.a=d
this.b=e
this.c=f},
fDX(d,e){var w=0,v=A.j(x.y),u,t
var $async$fDX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2E(d),$async$fDX)
case 3:t=g
J.nJ(t,new C.fDY(e))
u=A.aii(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fDX,v)},
fDY:function fDY(d){this.a=d},
apn:function apn(d,e,f){this.c=d
this.d=e
this.a=f},
aE9:function aE9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dOw:function dOw(d,e){this.a=d
this.b=e},
dOh:function dOh(d,e){this.a=d
this.b=e},
dOk:function dOk(d,e,f){this.a=d
this.b=e
this.c=f},
dOj:function dOj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOi:function dOi(d,e){this.a=d
this.b=e},
dOl:function dOl(d,e){this.a=d
this.b=e},
dOf:function dOf(){},
dOg:function dOg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dOe:function dOe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dO_:function dO_(d){this.a=d},
dO0:function dO0(d,e,f){this.a=d
this.b=e
this.c=f},
dO1:function dO1(d,e){this.a=d
this.b=e},
dNZ:function dNZ(d){this.a=d},
dO6:function dO6(d,e){this.a=d
this.b=e},
dNY:function dNY(d){this.a=d},
dO7:function dO7(d,e,f){this.a=d
this.b=e
this.c=f},
dO8:function dO8(d,e,f){this.a=d
this.b=e
this.c=f},
dNX:function dNX(d,e){this.a=d
this.b=e},
dO9:function dO9(d,e,f){this.a=d
this.b=e
this.c=f},
dNW:function dNW(d,e){this.a=d
this.b=e},
dOa:function dOa(d,e){this.a=d
this.b=e},
dNV:function dNV(d){this.a=d},
dOb:function dOb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNT:function dNT(){},
dNN:function dNN(d){this.a=d},
dNO:function dNO(d){this.a=d},
dNU:function dNU(d,e){this.a=d
this.b=e},
dOc:function dOc(d,e){this.a=d
this.b=e},
dNS:function dNS(d){this.a=d},
dOd:function dOd(d){this.a=d},
dNR:function dNR(){},
dO2:function dO2(d,e){this.a=d
this.b=e},
dNQ:function dNQ(d){this.a=d},
dO3:function dO3(d,e,f){this.a=d
this.b=e
this.c=f},
dNP:function dNP(d,e){this.a=d
this.b=e},
dNM:function dNM(d,e){this.a=d
this.b=e},
dO4:function dO4(d){this.a=d},
dO5:function dO5(d,e,f){this.a=d
this.b=e
this.c=f},
dOz:function dOz(){},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOx:function dOx(d){this.a=d},
dOy:function dOy(d){this.a=d},
dOt:function dOt(d,e){this.a=d
this.b=e},
dOu:function dOu(d){this.a=d},
dOm:function dOm(d,e,f){this.a=d
this.b=e
this.c=f},
dOn:function dOn(d,e,f){this.a=d
this.b=e
this.c=f},
dOo:function dOo(d,e,f){this.a=d
this.b=e
this.c=f},
dOp:function dOp(d,e,f){this.a=d
this.b=e
this.c=f},
dOq:function dOq(d,e,f){this.a=d
this.b=e
this.c=f},
dOr:function dOr(d,e,f){this.a=d
this.b=e
this.c=f},
dOs:function dOs(d,e,f){this.a=d
this.b=e
this.c=f},
dOB:function dOB(){},
dOC:function dOC(){},
dOD:function dOD(){},
dOE:function dOE(d){this.a=d},
dOv:function dOv(d,e){this.a=d
this.b=e},
hxP(d){return B.d.dN(D.a4h,new C.fEE(d),new C.fEF())},
uI:function uI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fEE:function fEE(d){this.a=d},
fEF:function fEF(){},
alp:function alp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aW1:function aW1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tq:function Tq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg7:function bg7(){this.d=$
this.c=this.a=null},
dei:function dei(d,e){this.a=d
this.b=e},
deg:function deg(d,e){this.a=d
this.b=e},
deh:function deh(){},
dej:function dej(d,e){this.a=d
this.b=e},
hih(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bk(J.k(u==null?"":u))
return new C.nt(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lm(d,e){return C.ieM(d,e)},
ieM(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lm)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cH(o,new C.fH3(),o.$ti.k("M.E"),x.B)
n=A.a6(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fH4(),n),n.k("M.E"))
B.d.aX(o,new C.fH5())
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
return A.i($async$Lm,v)},
Bg(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bg=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bg)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b7(f,new C.fUl(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aq(r,null)),$async$Bg)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bg,v)},
aS3(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aS3=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lm(d,e),$async$aS3)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.h1H(f))
if(s===-1)t.c6(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bg(d,e,u),$async$aS3)
case 3:return A.h(null,v)}})
return A.i($async$aS3,v)},
bDv(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDv=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lm(d,e),$async$bDv)
case 2:u=h
J.nJ(u,new C.fDP(f))
w=3
return A.b(C.Bg(d,e,u),$async$bDv)
case 3:return A.h(null,v)}})
return A.i($async$bDv,v)},
bDK(d,e){return C.ieL(d,e)},
ieL(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bDK=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bDK)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Og
w=1
break}p=B.X.aN(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Dv.aj(0,o.h(0,"foil")))j=A.cR(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.q(D.a5W,o.h(0,"position"))?A.cR(o.h(0,"position")):"middle"
g=B.d.q(D.a5i,o.h(0,"frame"))?A.cR(o.h(0,"frame")):"double"
f=B.d.q(D.a5e,o.h(0,"texture"))?A.cR(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.q(D.d3Z,o.h(0,"header"))?A.cR(o.h(0,"header")):"classic"
o=new C.I6(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Og
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Og
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bDK,v)},
Sf(d,e,f){return C.ing(d,e,f)},
ing(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Sf=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Sf)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aq(f.ah(),null)),$async$Sf)
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
return A.i($async$Sf,v)},
RI(d,e){return C.ieN(d,e)},
ieN(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$RI=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$RI)
case 7:r=g
q=r.tH("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lm(d,e),$async$RI)
case 8:if(!j.cM(g)){n=B.a.i(d.toLowerCase())
m=J.lF(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$RI)
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
return A.i($async$RI,v)},
agY(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RI(d,e),$async$agY)
case 3:s=g
r=J.a7(s)
if(r.gK(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gK(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agY)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agY)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agY,v)},
a3h(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3h=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.RI(d,e),$async$a3h)
case 2:s=h
J.hv(s,f)
w=3
return A.b(A.az(),$async$a3h)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3h)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3h)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3h)
case 6:return A.h(null,v)}})
return A.i($async$a3h,v)},
nt:function nt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fH3:function fH3(){},
fH4:function fH4(){},
fH5:function fH5(){},
fUl:function fUl(){},
h1H:function h1H(d){this.a=d},
fDP:function fDP(d){this.a=d},
I6:function I6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bQM:function bQM(d){this.a=d},
inz(d,e,f,g,h,i,j){return A.a5(d,!1).cc(A.ej(new C.fUT(j,i,f,e,h,g),!0,null,x.H))},
RE(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RE=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RI(h,g),$async$RE)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aT5)
u=!1
w=1
break}w=4
return A.b(C.hBT(d,f,e),$async$RE)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agY(h,g),$async$RE)
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
return A.b(C.Bg(h,r,p),$async$RE)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Sf(h,r,new C.I6("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RE)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RE,v)},
fUT:function fUT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_0:function a_0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aB9:function aB9(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
deY:function deY(d){this.a=d},
deX:function deX(d,e){this.a=d
this.b=e},
deM:function deM(d,e){this.a=d
this.b=e},
deJ:function deJ(d,e){this.a=d
this.b=e},
dek:function dek(d){this.a=d},
del:function del(d,e){this.a=d
this.b=e},
deN:function deN(d){this.a=d},
det:function det(d){this.a=d},
der:function der(d){this.a=d},
des:function des(d){this.a=d},
deu:function deu(d){this.a=d},
deK:function deK(d){this.a=d},
deL:function deL(){},
dep:function dep(d){this.a=d},
deq:function deq(d,e){this.a=d
this.b=e},
dev:function dev(d){this.a=d},
dew:function dew(d,e){this.a=d
this.b=e},
deW:function deW(d){this.a=d},
deV:function deV(d,e){this.a=d
this.b=e},
deU:function deU(d){this.a=d},
deG:function deG(d){this.a=d},
deF:function deF(d){this.a=d},
deH:function deH(d){this.a=d},
dem:function dem(d,e){this.a=d
this.b=e},
deI:function deI(d,e){this.a=d
this.b=e},
dez:function dez(d){this.a=d},
deA:function deA(d){this.a=d},
dey:function dey(){},
deB:function deB(d){this.a=d},
deC:function deC(d){this.a=d},
deD:function deD(d,e){this.a=d
this.b=e},
deE:function deE(d,e,f){this.a=d
this.b=e
this.c=f},
dex:function dex(d,e){this.a=d
this.b=e},
deP:function deP(d){this.a=d},
deO:function deO(){},
deQ:function deQ(d){this.a=d},
deR:function deR(d){this.a=d},
deS:function deS(d){this.a=d},
deT:function deT(d,e){this.a=d
this.b=e},
den:function den(d){this.a=d},
deo:function deo(d){this.a=d},
a_4:function a_4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgw:function bgw(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dgJ:function dgJ(d){this.a=d},
dgK:function dgK(d){this.a=d},
dgI:function dgI(d){this.a=d},
dgL:function dgL(d){this.a=d},
dgH:function dgH(d){this.a=d},
dgM:function dgM(d){this.a=d},
dgG:function dgG(d){this.a=d},
dgN:function dgN(d,e){this.a=d
this.b=e},
dgF:function dgF(d,e){this.a=d
this.b=e},
dgO:function dgO(d,e){this.a=d
this.b=e},
a_2:function a_2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afk:function afk(d,e,f){this.a=d
this.b=e
this.c=f},
aBc:function aBc(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dfc:function dfc(d,e){this.a=d
this.b=e},
dfb:function dfb(d,e){this.a=d
this.b=e},
dfg:function dfg(d){this.a=d},
dff:function dff(d,e){this.a=d
this.b=e},
dfd:function dfd(d){this.a=d},
dfe:function dfe(d){this.a=d},
dfh:function dfh(d){this.a=d},
dfi:function dfi(d){this.a=d},
dfa:function dfa(d,e){this.a=d
this.b=e},
df9:function df9(d,e){this.a=d
this.b=e},
Ks:function Ks(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zi:function Zi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cNx:function cNx(d){this.a=d},
cNy:function cNy(){},
cNz:function cNz(d){this.a=d},
bdI:function bdI(d,e,f){this.b=d
this.c=e
this.a=f},
bdz:function bdz(d,e){this.b=d
this.a=e},
uJ:function uJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZB:function ZB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdG:function bdG(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d66:function d66(d,e,f){this.a=d
this.b=e
this.c=f},
d65:function d65(d,e){this.a=d
this.b=e},
d6v:function d6v(d){this.a=d},
d6i:function d6i(){},
d6w:function d6w(d){this.a=d},
d6h:function d6h(){},
d6x:function d6x(d,e){this.a=d
this.b=e},
d6g:function d6g(d,e){this.a=d
this.b=e},
d6y:function d6y(d,e){this.a=d
this.b=e},
d6f:function d6f(d,e){this.a=d
this.b=e},
d6z:function d6z(d){this.a=d},
d6e:function d6e(){},
d6A:function d6A(d,e){this.a=d
this.b=e},
d6d:function d6d(d,e){this.a=d
this.b=e},
d6B:function d6B(d){this.a=d},
d6q:function d6q(d,e){this.a=d
this.b=e},
d6C:function d6C(d){this.a=d},
d6D:function d6D(d){this.a=d},
d6F:function d6F(d){this.a=d},
d6G:function d6G(d){this.a=d},
d6p:function d6p(d,e){this.a=d
this.b=e},
d6H:function d6H(d,e){this.a=d
this.b=e},
aIb:function aIb(d){this.a=d},
bj4:function bj4(d){this.a=d},
bbT:function bbT(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alq:function alq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1i:function a1i(d,e){this.a=d
this.b=e},
alr:function alr(d,e,f,g,h,i){var _=this
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
_.a8$=i
_.c=_.a=null},
bQW:function bQW(d){this.a=d},
bQQ:function bQQ(d){this.a=d},
bQP:function bQP(d,e){this.a=d
this.b=e},
bQZ:function bQZ(d){this.a=d},
bQR:function bQR(d){this.a=d},
bQS:function bQS(d){this.a=d},
bQV:function bQV(d){this.a=d},
bQU:function bQU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQX:function bQX(d,e){this.a=d
this.b=e},
bQY:function bQY(){},
bQT:function bQT(d){this.a=d},
bQN:function bQN(d,e){this.a=d
this.b=e},
bQO:function bQO(d){this.a=d},
boE:function boE(d,e){this.b=d
this.a=e},
aBa:function aBa(){},
ix(d,e){var w
$.S()
w=A.J()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.by
w.e=B.dQ
return w},
bD3(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bl(j.save())
j.translate(e.a,e.b)
d.pc(0,a0?-f:f,f)
w=A.bK(B.ig,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.J()
t.r=v.gp(0)
d.dQ(w,t)
w=a1===D.WQ
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.eng,new A.u(-4+v,-2),C.ix(q,5))
d.bo(D.ekR,new A.u(4-v,-2),C.ix(q,5))}else{t=A.bK(B.Jp,14,40)
p=A.J()
p.r=v.gp(0)
d.dQ(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ag,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c5(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c5(15,-40,11,t))
o.D(new A.bt())
t=A.J()
t.r=w.gp(0)
d.aK(o,t)
u=new A.aF(v,B.ag,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bt())
v=A.J()
v.r=h.c.gp(0)
d.aK(u,v)
A:{if(D.acm===a1){w=Math.sin(g*3.4)
break A}if(D.acn===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.acm){n=-52+w*14
d.bo(new A.u(10,n-22),new A.u(10,n+44),C.ix(F.FD,3.4))
d.bo(D.enx,new A.u(9,n),C.ix(q,4))
d.bo(D.elg,new A.u(10,n),C.ix(q,4))}else if(a1===D.acn){d.bo(D.emm,new A.u(-8,-26-Math.max(0,w)*6),C.ix(q,4))
d.bo(D.ejk,new A.u(8,-26-Math.max(0,-w)*6),C.ix(q,4))}else{w=s*3
v=-38-r
d.bo(D.emq,new A.u(-12-w,v),C.ix(q,4))
d.bo(D.aKV,new A.u(12+w,v),C.ix(q,4))}w=A.J()
w.r=q.gp(0)
d.aQ(D.f4O,w)
m=new A.u(0,-77-r)
w=A.bK(m,22,19)
v=A.J()
v.r=q.gp(0)
d.dQ(w,v)
w=h.y
if(w!=null){v=A.bK(m.a7(0,I.ve),15,24)
u=A.J()
u.r=w.gp(0)
d.dQ(v,u)
u=m.a7(0,D.ejf)
v=A.J()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bK(m.a7(0,B.ta),23,20)
v=h.d
u=A.J()
u.r=v.gp(0)
d.e4(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a7(0,D.env),m.a7(0,D.emk),C.ix(v,2.2))
d.bo(m.a7(0,D.elf),m.a7(0,D.ejc),C.ix(v,2.2))}if(w===4){w=m.a7(0,D.enz)
u=A.J()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a7(0,D.elh)
w=A.J()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a7(0,D.em7)
v=A.J()
v.r=B.i5.gp(0)
d.ad(w,0.9,v)
v=m.a7(0,D.elW)
w=A.J()
w.r=B.i5.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a7(0,I.a7R)
w=A.bK(l,21,22)
v=A.J()
v.r=D.ly.gp(0)
d.dQ(w,v)
v=A.bK(l.a7(0,I.aKS),5,12)
w=A.J()
w.r=D.beF.gp(0)
d.dQ(v,w)
d.bo(l.a7(0,D.enr),l.a7(0,I.aLe),C.ix(B.cJ,1.4))
d.bo(D.aKV,new A.u(15,-88-r),C.ix(q,3.6))}j.restore()},
hwr(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bl(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bK(B.dC,18,96)
u=B.w.j(0.28)
$.S()
t=A.J()
t.r=u.gp(0)
d.dQ(v,t)
t=A.bK(B.dC,11,70)
v=B.w.j(0.2)
u=A.J()
u.r=v.gp(0)
d.dQ(t,u)
d.lu(D.aR3,A.J())
C.i39(d,g,h,i,j)
s=(k==null?D.a7W:k).a-w>=0?1:-1
w=A.J()
w.a=B.LA
w.sam(A.jy(new A.u(s*70,-60),new A.u(-s*70,-60),A.a([D.ahG.j(0.5),D.ahG.j(0.12),D.blZ.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aQ(D.aR3,w)
r.restore()
r.restore()},
i39(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
a1.toString
w=A.ar(a0,B.c,0.16)
w.toString
v=a3.b
u=A.ar(v,B.w,0.32)
u.toString
t=Math.sin(a5*1.9+a6)*0.8
s=a3.w
r=s?1.06:1
q=s?0.86:1
s=A.br(D.f4P,B.te)
p=$.S()
o=A.J()
o.r=u.gp(0)
a2.az(s,o)
o=A.br(D.f4K,B.hG)
s=A.ar(v,B.w,0.18)
s.toString
n=A.J()
n.r=s.gp(0)
a2.az(o,n)
n=A.br(D.f4Y,B.hG)
o=A.ar(v,B.w,0.1)
o.toString
s=A.J()
s.r=o.gp(0)
a2.az(n,s)
s=A.J()
s.r=a0.gp(0)
a2.dQ(D.f4R,s)
s=A.J()
s.r=a0.gp(0)
a2.dQ(D.f3A,s)
s=a2.a
J.bl(s.save())
s.translate(a4.w,0)
J.bl(s.save())
a2.pc(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ag,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c5(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c5(m+3,-62,m-2,-58))
l.D(new A.c5(0,-70,k,-58))
l.D(new A.bt())
k=A.J()
k.r=v.gp(0)
a2.aK(l,k)
J.bl(s.save())
a2.mM(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.daE[j]
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.emW,D.ejY,C.ix(a3.c.j(0.9),3))}a2.bo(D.ens,D.ems,C.ix(B.w.j(0.18),1.6))
a2.bo(D.ejj,I.aKX,C.ix(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.J()
i.r=u.gp(0)
a2.aQ(D.f3w,i)
s.restore()
i=A.J()
i.r=a1.gp(0)
a2.aQ(D.f3K,i)
n=new A.aF(k.r,B.ag,d,d,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c5(0,-57,9,-66))
n.D(new A.c5(0,-60,-9,-66))
k=A.J()
k.r=a0.gp(0)
a2.aK(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e4(D.f3T,0.1,2.941592653589793,!1,C.ix(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a8_
n=25*q
k=23*q
i=9*q
C.hsE(a2,new A.u(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.DY:o
C.hsE(a2,new A.u(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.ekJ,D.ekF,C.ix(D.aiF,4))
a2.bo(D.ekH,D.ekD,C.ix(D.G3.j(0.7),1.4))
u=A.J()
u.r=B.cJ.gp(0)
a2.ad(D.ekG,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bl(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.io(0,a4.f)
a2.bW(0,r)
C.i36(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hsE(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aG(0,e),r=s.gcC(),q=r===0?B.ig:s.eV(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.u(o,w)
if(o*i<0)v=new A.u(-o,-w)
u=e.a7(0,q.aJ(0,n)).a7(0,v.aJ(0,m))
t=e.a7(0,q.aJ(0,p))
d.bo(e,u,C.ix(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.bo(e,u,C.ix(o,l*0.35))
d.bo(u,t,C.ix(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.bo(u,t,C.ix(o,l*0.22))
$.S()
o=A.J()
o.r=j.gp(0)
d.ad(u,l*0.55,o)
o=A.bK(t,l*1.15,l)
w=A.J()
w.r=k.gp(0)
d.dQ(o,w)
w=-l
w=t.a7(0,new A.u(i*w*0.45,w*0.1))
o=A.J()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
i36(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bK(B.vd,40,38)
$.S()
v=A.J()
v.r=c1.gp(0)
c3.dQ(w,v)}if(c2===4){$.S()
w=A.J()
w.r=c1.gp(0)
c3.ad(D.emC,9.5,w)
w=A.J()
w.r=c1.gp(0)
c3.ad(D.ejy,9.5,w)}w=A.bK(D.enP,10,6)
v=$.S()
u=A.J()
u.r=c9.gp(0)
c3.dQ(w,u)
u=A.bK(D.em4,10,6)
w=A.J()
w.r=c9.gp(0)
c3.dQ(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ag,c0,c0,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.kO(13,-20,17,-9,16,2))
t.D(new A.kO(15,13,8,20,0,20))
t.D(new A.kO(-8,20,-15,13,-16,2))
t.D(new A.kO(-17,-9,-13,-20,0,-20))
t.D(new A.bt())
u=A.J()
u.sam(A.tz(D.eni,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aK(t,u)
u=c4.r
if(u){s=C.ix(c9.j(0.5),0.8)
c3.e4(D.f5_,3.455751918948773,2.5132741228718345,!1,s)
c3.e4(D.f3D,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.emz,D.emn,s)
c3.bo(D.eju,D.ejm,s)
c3.e4(D.f3S,2.2,1.4,!1,s)
c3.e4(D.f3B,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.J()
r.r=c1.gp(0)
c3.e4(D.f45,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-15,-11))
r.D(new A.c5(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c5(0,-12,-13,-6))
r.D(new A.bt())
o=A.J()
o.r=c4.c.gp(0)
c3.aK(r,o)
c3.bo(D.emo,D.ejn,C.ix(G.nc,1.4))
o=A.J()
o.r=c1.gp(0)
c3.ad(D.emF,3,o)
o=A.J()
o.r=c1.gp(0)
c3.ad(D.ejz,3,o)
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c5(-12,22,0,26))
o.D(new A.c5(12,22,13,6))
o.D(new A.c5(8,13,0,12))
o.D(new A.c5(-8,13,-13,6))
o.D(new A.bt())
r=A.J()
r.r=B.iA.gp(0)
c3.aK(o,r)
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-7,8))
r.D(new A.c5(0,6,7,8))
r.D(new A.c5(0,10.5,-7,8))
o=A.J()
o.r=B.bO.gp(0)
c3.aK(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-17,-4))
r.D(new A.c5(-20,-27,0,-29))
r.D(new A.c5(20,-27,17,-4))
r.D(new A.c5(0,-14,-17,-4))
r.D(new A.bt())
o=A.J()
o.r=k.gp(0)
c3.aK(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e4(D.f4c,3.4,2.5,!1,C.ix(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e4(D.f4_,3.6,2.2,!1,C.ix(o,1.2))
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c5(27,-34,25,-19))
o.D(new A.c5(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.J()
n.r=r.gp(0)
c3.aK(o,n)
n=new A.aF(v,B.ag,c0,c0,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c5(24,-12,27,-26))
n.D(new A.c5(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.J()
r.r=o.gp(0)
c3.aK(n,r)
r=A.J()
r.r=c4.c.gp(0)
c3.ad(D.ejo,3,r)
break
case 3:r=A.J()
r.r=c1.gp(0)
c3.e4(D.f49,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=0.9
n.r=o.gp(0)
n.d=B.by
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.doF[j]
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=4.5
n.r=c1.gp(0)
n.d=B.by
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.J()
r.r=c1.gp(0)
c3.e4(D.f48,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(I.a7R,I.a7Q,C.ix(r,1))
break
default:r=A.J()
r.r=c1.gp(0)
c3.e4(D.f3E,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bK(D.enB,5,8)
o=D.aeY.j(g)
n=A.J()
n.r=o.gp(0)
c3.dQ(r,n)
n=A.bK(D.emg,5,8)
r=D.aeY.j(g)
o=A.J()
o.r=r.gp(0)
c3.dQ(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(f-0.6,-2))
o.D(new A.c5(f-3.4,6,f-2.6,7.4))
o.D(new A.c5(f,8.8,f+2.6,7.4))
c3.aK(o,C.ix(c9.j(0.75),1.1))
o=A.J()
o.r=c9.gp(0)
c3.ad(new A.u(f-1.5,7.2),0.7,o)
o=A.J()
o.r=c9.gp(0)
c3.ad(new A.u(f+1.5,7.2),0.7,o)
e=B.k.F(c6*0.33+c7*0.37,1)>0.965?1:0
r=c5.d
o=c5.c>0.8?1.25:1
d=(1-e)*(1-r*0.6)*o
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=F.hd[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bK(new A.u(a6,-3),a4,7)
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bH(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bl(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ag,c0,c0,a5)
a5.push(new A.jM(A.bK(new A.u(a6,-3),a4,7)))
a4=a7.gbu().a.snapshot()
a4=a7.e=new A.cd(a4)
r.clipPath(a4.a,$.nI(),!0)
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=D.bis.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.YO:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b0.b=B.a9
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.by
b0.e=B.dQ
a4=o?0.8:0
a4=A.bK(new A.u(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.G()
r.drawArc.apply(r,[A.bH(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e2
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.b=B.a9
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.by
b3.e=B.dQ
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bsi
else{u=A.ar(c9,D.bm0,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ag,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aY(w,11.5))
b9.D(new A.c5(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c5(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bt())
v=A.J()
v.r=D.blk.gp(0)
c3.aK(b9,v)
J.bl(r.save())
c3.mM(0,b9)
v=B.c.j(0.95)
u=A.J()
u.r=v.gp(0)
c3.aQ(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bK(new A.u(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.J()
w.r=D.bsn.gp(0)
c3.dQ(u,w)
r.restore()
c3.aK(b9,C.ix(b5,1.1))}else{u=new A.aF(v,B.ag,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aY(-5.2,r))
u.D(new A.c5(0,13.1+b6*2.8,5.2,r))
c3.aK(u,C.ix(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ag,c0,c0,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c5(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c5(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.J()
u.r=v.gp(0)
c3.aK(w,u)}}if(c5.b>0.2){c3.e4(D.f3R,-1.2,2.2,!1,C.ix(c9.j(0.5),0.8))
c3.e4(D.f3G,2.141592653589793,2.2,!1,C.ix(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.J()
w.r=c2.gp(0)
c3.ad(D.elY,1.7,w)
w=A.J()
w.r=c2.gp(0)
c3.ad(D.elU,1.7,w)}},
i8B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.p7(),d=A.zd(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.J()
a3.sam(A.jy(B.I,new A.u(0,a1*0.46),D.d7u,D.d_5,B.x,g))
d.aQ(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bl(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e6()
w.cZ(8)
for(v=0;v<120;++v){a0=w.ag()
a1=w.ag()
u=w.ag()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.2+w.ag()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bl(a3.save())
a3.translate(200,120)
d.io(0,-0.5)
a0=A.J()
a1=x.O
a0.sam(A.tz(B.I,230,A.a([D.bhd,B.L],a1),g,B.x,g,g,0))
d.dQ(D.f4m,a0)
a3.restore()
a0=A.J()
a0.sam(A.tz(D.a7Z,58,A.a([D.bkn,B.L],a1),g,B.x,g,g,0))
d.ad(D.a7Z,58,a0)
a0=A.J()
a0.r=D.bfU.gp(0)
d.ad(D.a7Z,24,a0)
a0=A.J()
a0.r=D.Za.gp(0)
d.ad(D.eki,5,a0)
a0=A.J()
a0.r=D.Za.gp(0)
d.ad(D.ekm,3.4,a0)
a0=A.J()
a0.r=D.Za.gp(0)
d.ad(D.ekl,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ag,g,g,u)
u.push(new A.aY(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.bx(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.bx(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.bx(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bt()
u.push(f)
u=q.f
if(u!=null)f.bx(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bet,D.bgu,D.bmj][r]
u=$.S()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.cd(q.gbu().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.cu6[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.b=B.a9
u.c=2.4
u.r=D.Zq.gp(0)
u.d=B.by
u.e=B.dQ
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bK(new A.u(f,j-27),11,46)
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.r=D.Zq.gp(0)
s=u.G()
a3.drawOval(A.bH(f),s)
s.delete()
a0=A.bK(new A.u(n-12,a0),8,24)
f=new A.ao(B.Q,B.M,B.S,B.T,B.R)
f.r=D.Zq.gp(0)
s=f.G()
a3.drawOval(A.bH(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ao(B.Q,B.M,B.S,B.T,B.R)
u.r=D.bfX.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.J()
f.sam(A.jy(D.eiW,D.eiY,D.d0Z,B.Dg,B.x,g))
d.aQ(new A.a3(-200,412,650,1300),f)
i=new A.e6()
i.cZ(21)
for(v=0;v<260;++v){f=i.ag()
j=420+i.ag()*480
a0=i.ag()
u=j/900+0.4
u=A.bK(new A.u(f*450,j),1+i.ag()*2*u,1.5+a0*4*u)
f=i.ha()?B.c:B.w
a0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a0.r=f.j(0.06+i.ag()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bH(u),s)
s.delete()}J.bl(a3.save())
a3.translate(225,590)
d.pc(0,1,0.34)
f=A.J()
f.sam(A.tz(B.I,250,A.a([D.bnc,D.bgQ,D.bp4],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.ag()*450
j=640+i.ag()*260
f=i.ag()
a0=A.ar(D.ahm,D.bfr,i.ag())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.by
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.i1m(d)
for(k=0;k<3;++k)C.i4B(d,D.azs[k])
C.i4q(d,D.ekc)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=2.4
a1.r=D.Zm.gp(0)
a1.d=B.by
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.ejl,D.ejD,C.ix(D.bga,1.6))
a3.restore()
return e.nk()},
i1m(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ag,g,g,A.a([],e))
d.D(new A.aY(358,462))
d.D(new A.kO(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.kO(416,382,432,422,428,462))
d.D(new A.bt())
w=A.J()
w.sam(A.jy(new A.u(354,0),new A.u(430,0),D.duQ,U.zx,B.x,g))
a0.aK(d,w)
v=new A.e6()
v.cZ(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.ag()*56
s=462-v.ag()*126
r=v.ag()
q=v.ag()
p=B.w.j(0.18)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.b=B.a9
o.c=1.1
o.r=p.gp(0)
o.d=B.by
o.e=B.dQ
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.dc1[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aF(f,B.ag,g,g,j)
j.push(new A.aY(q,336))
j.push(new A.c5(o,k,r,p))
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=8
q.r=D.afI.gp(0)
q.d=B.by
q.e=B.dQ
n=q.G()
q=i.gbu().a.snapshot()
w.drawPath((i.e=new A.cd(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.ag()
o=v.ag()
k=v.ag()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=A.ar(D.bg2,D.bmi,v.ag()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=1.2
q.r=D.Zm.gp(0)
q.d=B.by
q.e=B.dQ
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bK(new A.u(r,p+28),13,7)
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.r=D.bnv.gp(0)
n=r.G()
w.drawOval(A.bH(p),n)
n.delete()}},
i4B(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bK(new A.u(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.J()
b2.r=b0.gp(0)
b3.dQ(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ag,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aY(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c5(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bt())
u=A.J()
u.sam(A.jy(new A.u(a9,0),new A.u(v,0),D.dc7,U.zx,B.x,a3))
b3.aK(w,u)
t=new A.e6()
t.cZ(B.o.V(a4*7))
v=b3.a
J.bl(v.save())
b3.mM(0,w)
for(s=0;s<40;++s){r=a9+t.ag()*a6*2
q=b0+t.ag()*a7
u=t.ag()
p=t.ag()
o=B.w.j(0.14)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.by
n.e=B.dQ
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.ahh.j(0.75)
n=A.J()
n.r=o.gp(0)
b3.aQ(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bf(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ag,a3,a3,i)
i.push(new A.aY(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bt())
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=D.ly.j(0.85).gp(0)
m=i.G()
i=h.gbu().a.snapshot()
v.drawPath((h.e=new A.cd(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ag,a3,a3,u)
b1=a5-8
g.D(new A.aY(a9,b1))
for(p/=6,k=0;k<=B.k.bf(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.bx(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aK(g,C.ix(D.ahh.j(0.7),1.6))
v.restore()
a9=$.S().r
b1=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.aY(n,l))
i=a5-a7*0.55
b1.D(new A.aq(n,i))
o=p+o
b1.D(new A.c5(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bt())
l=A.J()
l.r=D.aht.gp(0)
b3.aK(b1,l)
l=A.J()
l.r=D.aht.gp(0)
b3.ad(new A.u(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
f.D(new A.aY(o,i))
n=b0-l*0.55
f.D(new A.c5(a4-a8,n,a4,u))
f.D(new A.c5(a4+a8,n,p,i))
f.D(new A.c5(a4,b0+a6*0.34,o,i))
f.D(new A.bt())
b0=A.J()
n=a6*1.4
b0.sam(A.jy(new A.u(a4-n,0),new A.u(a4+n,0),D.dfy,U.zx,B.x,a3))
b3.aK(f,b0)
J.bl(v.save())
b3.mM(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.ag()
n=(t.ha()?B.w:D.bfA).j(0.16)
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.b=B.a9
h.c=0.9
h.r=n.gp(0)
h.d=B.by
h.e=B.dQ
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ag,a3,a3,b0)
n=d+2
b0.push(new A.aY(a4-a0,n))
b0.push(new A.c5(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1.2
n.r=b0.gp(0)
n.d=B.by
n.e=B.dQ
m=n.G()
b0=p.gbu().a.snapshot()
v.drawPath((p.e=new A.cd(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.ag()
b1=t.ag()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=1.1
p.r=D.bmG.gp(0)
p.d=B.by
p.e=B.dQ
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aY(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bt())
a9=A.J()
a9.r=D.biX.gp(0)
b3.aK(a8,a9)},
i4q(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.doC[r]
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=3
p.r=D.Zm.gp(0)
p.d=B.by
p.e=B.dQ
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bK(e.a7(0,I.aKR),24,36)
t=$.S()
s=A.J()
s.r=D.bry.gp(0)
d.dQ(u,s)
t=new A.aF(t.r,B.ag,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aY(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c5(w,v-24,s,u))
t.D(new A.bt())
u=A.J()
u.r=D.ago.gp(0)
d.aK(t,u)},
i3L(d){switch(B.o.F(d,8)){case 0:return D.b_n
case 1:return D.b_l
case 2:return D.b_k
case 3:return D.b_j
case 4:return D.b_m
case 5:return D.b_o
case 6:return D.hsr
default:return D.hsq}},
Sc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.boF()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8_:j
w.as=k==null?D.DY:k
C.hwr(d,e,p,C.i3L(m),w,s,m,l)},
hxV(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bSA:function bSA(){var _=this
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
t9:function t9(d,e,f,g,h,i,j,k,l,m){var _=this
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
boF:function boF(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
alJ:function alJ(){this.b=this.a=null},
aW6:function aW6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bSs:function bSs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSt:function bSt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSu:function bSu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSv:function bSv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSw:function bSw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSx:function bSx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSy:function bSy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSz:function bSz(){},
bSr:function bSr(d){this.a=d},
aft:function aft(d,e){this.a=d
this.b=e},
ads:function ads(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MI(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRb(s)
s.bAj(d)
return s},
GK(d,e,f,g,h,i,j){var w,v=A.T(g).k("Y<1>")
v=A.dh(new A.Y(g,new C.fsf(f),v),v.k("M.E"))
w=A.C(v,A.a6(v).k("cs.E"))
B.d.e_(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d2(w,0,A.dz(3,"count",x.S),A.T(w).c))
B.d.e_(v,d)
return new C.lo(e,v,B.d.cp(v,f),h,i,"tree",j)},
ip7(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.h1y(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jU(c4,c0)
t=A.C(c4,A.a6(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jU(c4,c0)
r=A.C(c4,A.a6(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jU(c4,c0)
q=A.C(c4,A.a6(c4).k("cs.E"))
for(c4=w.length,v=A.T(t).k("Y<1>"),s=v.k("M.E"),p=A.T(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.K)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wh)g="father"
else g=h===D.oj?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h1A(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GK(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h1B(i,m),p),o)
B.d.e_(d,c6)
c2.$2(b4,new C.lo("True or false: "+h+" is the "+g+" of "+l+".",D.aAv,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lo("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.aAv,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FW(m)
h=a0.length
if(h!==0){a1=a0[c6.ap(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h1C(l,a0,c5),v),s)
e=a1.c
if(e===D.wh)e="son"
else e=e===D.oj?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.GK(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eD([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mt(a5,a5.r,f.k("mt<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.GK(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jf<1>"),a3=new A.jf(a0,1,b3,a2),a3.of(a0,1,b3,e.c),a3=new A.bS(a3,a3.gK(0),a2.k("bS<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.GK(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqN(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h1D(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.GK(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h1E(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wh
if(e)a2=b7
else a2=f===D.oj?b8:b9
if(e)f=b7
else f=f===D.oj?b8:b9
c2.$2("grand",C.GK(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aMe(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.ap(k)].b)
j=A.C(new A.Y(t,new C.h1F(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GK(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cMI)
h=l+" was born in "+k
c2.$2("place",C.GK(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d21)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GK(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.K)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GK(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jL(b1,b3,b3)
c2.$2("year",C.GK(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bDG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.MI(d),l=new A.e6()
l.cZ(f)
w=C.ip7(m,l,g)
for(v=new A.du(w,w.r,w.e);v.C();)J.hgq(v.d,l)
v=A.a6(w).k("cy<1>")
u=A.C(new A.cy(w,v),v.k("M.E"))
B.d.e_(u,l)
t=A.a([],x.J)
s=A.aV(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b_(u,new C.fFd(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.K)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.r(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.r(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.ayt,x.df)
B.d.e_(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.K)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hwy(o,l))}}else if(!g&&v>3){o=C.hwy(D.ayt[l.ap(14)],l)
t[t.length-1-l.ap(3)]=o}return t},
hwy(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e_(w,e)
return new C.lo(d.a,w,B.d.cp(w,v),d.d,d.e,d.f,d.r)},
hBr(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.MI(a2),a1=new A.e6()
a1.cZ(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(a0.FW(q).length>=2)u.push(q)}B.d.e_(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.K)(u),++r){n=u[r]
m=a0.FW(n)
l=A.T(m)
k=new A.jf(m,0,5,l.k("jf<1>"))
k.of(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fTo(),A.T(j).k("N<1,G>")).fO(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.K)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.K)(j),++i)g.push(C.aRO(a0,j[i]))
w.push(new C.atM("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
J.cc(e.c3(0,a0.ama(q),new C.fTp()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cy<1>")
d=A.C(new A.cy(e,t),t.k("M.E"))
B.d.fh(d)
v=A.a([],v)
for(u=A.d2(d,0,A.dz(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bS(u,u.gK(0),t.k("bS<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cF(s)
m.e_(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.K)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.K)(v),++r)s.push(C.aRO(a0,v[r]))
w.push(new C.atM("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQh(d){return B.d.anA(D.aAZ,new C.fBl(d))},
ifi(d){return A.ow(new A.Y(D.aAZ,new C.fHZ(d),x.av))},
bS_(d){return C.hKP(d)},
hKP(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bS_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bS_)
case 7:r=f
q=B.a.i(d)
q=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bS_,v)},
BC(d,e){return C.hKM(d,e)},
hKM(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BC=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BC)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.ar("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BC)
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
return A.i($async$BC,v)},
bRZ(d,e,f){return C.hKN(d,e,f)},
hKN(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRZ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRZ)
case 7:r=h
q=B.a.i(d)
q=A.ev(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bRZ,v)},
BD(d,e,f,g){return C.hKO(d,e,f,g)},
hKO(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BD=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BD)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.ar("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BD)
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
return A.i($async$BD,v)},
bFX(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h3z(d,e,f,g){return new C.ako(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hIU(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aX(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cv)
while(u.C())w.push(J.k(u.gS(u)))
u=x.N
w=A.d2(w,0,A.dz(4,"count",x.S),u).dq(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.h3z(w,v,B.o.E(u==null?20:u,5,60),t)},
hhu(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aX(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cv)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gS(q)
if(u.b(r))v.push(C.hIU(A.a2(r,t,s)))}return new C.Mq(p,w,v)},
hbS(d){var w,v=A.a([],x.c)
for(w=J.aX(d.z);w.C();)v.push(C.hhu(w.gS(w)))
return v},
aRO(d,e){var w=e.c===D.oj
if(d.ama(e)===0&&d.FW(e).length!==0)return w?0:1
if(d.FW(e).length!==0||d.aqN(e)!=null)return w?2:3
return w?4:5},
hCy(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.MI(a4),a3=new A.e6()
a3.cZ(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e_(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.K)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.K)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FW(m)
g=a2.aqN(m)
f=a2.aMe(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wh)k="father"
else k=k===D.oj?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.wh)k="father"
else k=k===D.oj?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e_(l,a3)
B.d.aX(l,new C.h1Y())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h1Z(d),o),n)
B.d.e_(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jf(a0,0,3,i.k("jf<1>"))
a1.of(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e_(k,a3)
a1=C.aRO(a2,m)
i=new A.jf(l,0,4,p)
i.of(l,0,4,r)
w.push(new C.ba8(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hu6(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hBD(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.MI(a4),a3=new A.e6()
a3.cZ(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(a2.FW(q).length>=2)u.push(q)}B.d.e_(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.K)(u),++r){l=u[r]
k=a2.FW(l)
j=A.T(k)
i=new A.jf(k,0,4,j.k("jf<1>"))
i.of(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.K)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b_(h,new C.fTU(q))&&q.d!==j)i.push(q)}B.d.e_(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jf(i,0,k,m)
j.of(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aRO(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.K)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.K)(h),++g)e.push(C.aRO(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.K)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.K)(f),++g)a0.push(C.aRO(a2,f[g]))
w.push(new C.a9A(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lo:function lo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRb:function bRb(d){this.b=d
this.c=$},
bRc:function bRc(){},
bRd:function bRd(d){this.a=d},
fsf:function fsf(d){this.a=d},
h1y:function h1y(d){this.a=d},
h1z:function h1z(){},
h1A:function h1A(d){this.a=d},
h1B:function h1B(d,e){this.a=d
this.b=e},
h1C:function h1C(d,e,f){this.a=d
this.b=e
this.c=f},
h1x:function h1x(d,e){this.a=d
this.b=e},
h1D:function h1D(d){this.a=d},
h1E:function h1E(d){this.a=d},
h1F:function h1F(d,e,f){this.a=d
this.b=e
this.c=f},
h1w:function h1w(d,e){this.a=d
this.b=e},
fFd:function fFd(d,e){this.a=d
this.b=e},
atM:function atM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fTo:function fTo(){},
fTp:function fTp(){},
zm:function zm(d,e,f){this.a=d
this.b=e
this.c=f},
fBl:function fBl(d){this.a=d},
fHZ:function fHZ(d){this.a=d},
ako:function ako(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bM1:function bM1(){},
Mq:function Mq(d,e,f){this.a=d
this.b=e
this.c=f},
ba8:function ba8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h1Y:function h1Y(){},
h1Z:function h1Z(d){this.a=d},
a9A:function a9A(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fTU:function fTU(d){this.a=d},
bhn:function bhn(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afr:function afr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajD:function ajD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajE:function ajE(d,e,f,g,h){var _=this
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
_.a8$=h
_.c=_.a=null},
bKb:function bKb(d){this.a=d},
bK6:function bK6(){},
bKc:function bKc(){},
bK4:function bK4(){},
bK5:function bK5(){},
bKa:function bKa(d){this.a=d},
bK7:function bK7(d,e){this.a=d
this.b=e},
bK9:function bK9(d,e){this.a=d
this.b=e},
bK8:function bK8(d,e){this.a=d
this.b=e},
bK3:function bK3(d){this.a=d},
bcw:function bcw(d,e){this.b=d
this.a=e},
Qm:function Qm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB8:function aB8(d,e,f){this.b=d
this.c=e
this.a=f},
azz:function azz(d,e,f){this.a=d
this.b=e
this.c=f},
aun:function aun(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auo:function auo(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cP$=e
_.b7$=f
_.c=_.a=null},
cp1:function cp1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp2:function cp2(d){this.a=d},
cp0:function cp0(d){this.a=d},
cp3:function cp3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cp4:function cp4(){},
cp5:function cp5(d,e){this.a=d
this.b=e},
cp6:function cp6(){},
cp7:function cp7(d){this.a=d},
coY:function coY(d){this.a=d},
coZ:function coZ(d,e){this.a=d
this.b=e},
cp_:function cp_(d,e,f){this.a=d
this.b=e
this.c=f},
coT:function coT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coV:function coV(d,e){this.a=d
this.b=e},
coW:function coW(d,e){this.a=d
this.b=e},
coU:function coU(d,e){this.a=d
this.b=e},
coS:function coS(){},
coX:function coX(){},
bc1:function bc1(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cOB:function cOB(){},
ayj:function ayj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayk:function ayk(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cDW:function cDW(d){this.a=d},
cDV:function cDV(d){this.a=d},
cE3:function cE3(d,e){this.a=d
this.b=e},
cE4:function cE4(d,e){this.a=d
this.b=e},
cE5:function cE5(d){this.a=d},
cE2:function cE2(d){this.a=d},
cE6:function cE6(d){this.a=d},
cE7:function cE7(d,e){this.a=d
this.b=e},
cE8:function cE8(){},
cE9:function cE9(d){this.a=d},
cDY:function cDY(d){this.a=d},
cDZ:function cDZ(d,e){this.a=d
this.b=e},
cDX:function cDX(d,e){this.a=d
this.b=e},
cE_:function cE_(){},
cE0:function cE0(){},
cE1:function cE1(d,e){this.a=d
this.b=e},
azk:function azk(){},
aGz:function aGz(){},
h9K(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqY((w-450*u)/2,(v-900*u)/2,u)},
aff:function aff(){},
f4V:function f4V(d){this.a=d},
aKn:function aKn(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
ff0:function ff0(d){this.a=d},
alz:function alz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alA:function alA(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q2$=f
_.LP$=g
_.amH$=h
_.bw$=i
_.a8$=j
_.c=_.a=null},
bRY:function bRY(d){this.a=d},
bRX:function bRX(){},
bRV:function bRV(d){this.a=d},
bRT:function bRT(){},
bRU:function bRU(d){this.a=d},
bRQ:function bRQ(d,e){this.a=d
this.b=e},
bRR:function bRR(){},
bRS:function bRS(d){this.a=d},
bRW:function bRW(d,e){this.a=d
this.b=e},
bRP:function bRP(d){this.a=d},
bsE:function bsE(d,e){this.b=d
this.a=e},
f4W:function f4W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f4X:function f4X(d,e,f){this.a=d
this.b=e
this.c=f},
f4Y:function f4Y(d,e,f){this.a=d
this.b=e
this.c=f},
f4Z:function f4Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5_:function f5_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f50:function f50(){},
alx:function alx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aly:function aly(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q2$=f
_.LP$=g
_.amH$=h
_.bw$=i
_.a8$=j
_.c=_.a=null},
bRB:function bRB(){},
bRM:function bRM(d,e){this.a=d
this.b=e},
bRN:function bRN(d){this.a=d},
bRO:function bRO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRI:function bRI(){},
bRH:function bRH(d,e){this.a=d
this.b=e},
bRJ:function bRJ(d,e){this.a=d
this.b=e},
bRK:function bRK(){},
bRL:function bRL(d){this.a=d},
bRD:function bRD(d){this.a=d},
bRE:function bRE(d){this.a=d},
bRF:function bRF(d){this.a=d},
bRC:function bRC(d,e){this.a=d
this.b=e},
bRG:function bRG(d){this.a=d},
bjc:function bjc(d,e){this.b=d
this.a=e},
dpU:function dpU(){},
a1B:function a1B(d,e){this.a=d
this.b=e},
alt:function alt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alu:function alu(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q2$=e
_.LP$=f
_.amH$=g
_.bw$=h
_.a8$=i
_.c=_.a=null},
bRn:function bRn(d){this.a=d},
bRm:function bRm(){},
bRl:function bRl(){},
bRf:function bRf(){},
bRg:function bRg(){},
bRk:function bRk(d,e,f){this.a=d
this.b=e
this.c=f},
bRj:function bRj(d){this.a=d},
bRh:function bRh(d,e){this.a=d
this.b=e},
bRi:function bRi(d){this.a=d},
biC:function biC(d,e){this.b=d
this.a=e},
aBb:function aBb(){},
bg9:function bg9(){},
aBd:function aBd(){},
bga:function bga(){},
aBe:function aBe(){},
bgb:function bgb(){},
up(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j6,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ad],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.B(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.O_,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a3)},
hii(d,e,f,g,h,i,j){return new C.alv(i,h,d,j,e,f,g,null)},
a66:function a66(d,e){this.c=d
this.a=e},
biK:function biK(d){this.a=d},
tx:function tx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRe:function bRe(d){this.a=d},
I8:function I8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
VM:function VM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blv:function blv(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e_J:function e_J(d,e){this.a=d
this.b=e},
e_K:function e_K(d){this.a=d},
e_L:function e_L(d,e){this.a=d
this.b=e},
e_H:function e_H(d){this.a=d},
e_I:function e_I(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_E:function e_E(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_D:function e_D(d,e){this.a=d
this.b=e},
e_M:function e_M(d){this.a=d},
e_N:function e_N(d,e){this.a=d
this.b=e},
e_O:function e_O(d,e){this.a=d
this.b=e},
e_P:function e_P(d,e){this.a=d
this.b=e},
e_S:function e_S(d,e){this.a=d
this.b=e},
e_T:function e_T(d,e){this.a=d
this.b=e},
e_U:function e_U(d,e){this.a=d
this.b=e},
e_V:function e_V(d,e){this.a=d
this.b=e},
e_W:function e_W(d,e){this.a=d
this.b=e},
e_X:function e_X(d,e,f){this.a=d
this.b=e
this.c=f},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
e_Z:function e_Z(d,e){this.a=d
this.b=e},
e_Q:function e_Q(d){this.a=d},
e_R:function e_R(d){this.a=d},
a_s:function a_s(d,e){this.a=d
this.b=e},
alv:function alv(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alw:function alw(d){var _=this
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
bRz:function bRz(d){this.a=d},
bRA:function bRA(d){this.a=d},
bRy:function bRy(d){this.a=d},
bRp:function bRp(d){this.a=d},
bRq:function bRq(d){this.a=d},
bRo:function bRo(d){this.a=d},
bRv:function bRv(d,e,f){this.a=d
this.b=e
this.c=f},
bRw:function bRw(d){this.a=d},
bRs:function bRs(d,e){this.a=d
this.b=e},
bRt:function bRt(d,e,f){this.a=d
this.b=e
this.c=f},
bRx:function bRx(){},
bRu:function bRu(d,e){this.a=d
this.b=e},
bRr:function bRr(d){this.a=d},
Tr:function Tr(d,e){this.c=d
this.a=e},
als:function als(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bR_:function bR_(d){this.a=d},
bR0:function bR0(d){this.a=d},
bRa:function bRa(){},
bR9:function bR9(d,e,f){this.a=d
this.b=e
this.c=f},
bR4:function bR4(d,e){this.a=d
this.b=e},
bR3:function bR3(d,e){this.a=d
this.b=e},
bR5:function bR5(d){this.a=d},
bR6:function bR6(d,e){this.a=d
this.b=e},
bR7:function bR7(d,e){this.a=d
this.b=e},
bR2:function bR2(d,e){this.a=d
this.b=e},
bR8:function bR8(d,e,f){this.a=d
this.b=e
this.c=f},
bR1:function bR1(d,e){this.a=d
this.b=e},
idK(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiv(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fEI(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Y<1>"),q=q.k("cP<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yK)m.push(l===D.wh?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cD(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cD(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jL(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jL(h,a2,a2)-A.jL(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.aj(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cP(new A.Y(a4,new C.fEG(u,f),p),new C.fEH(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.au(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
idL(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiv(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fEN(v,e)
q=new C.fEL(v)
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
if(d!=null&&v.aj(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.aj(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b9<2>")
d=A.dh(new A.b9(p,d),d.k("M.E"))
n=A.C(d,A.a6(d).k("cs.E"))
B.d.fh(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.eR(l,new C.fEM(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hZO(d,e,f,g){var w,v,u=C.idM(d,e)
if(u<=0||f.length<=u)return new A.aeU(!1,D.Dh,f)
if(g.q(0,e.a))return new A.aeU(!1,D.Dh,f)
w=A.T(f).c
v=A.d2(f,0,A.dz(u,"count",x.S),w).dq(0)
return new A.aeU(!0,A.d2(f,u,null,w).dq(0),v)},
hZP(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiv(d3),d2=d1.length
if(d2===0)return D.hpx
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dfp(t))}s=new C.dfG(v)
d2=x.dy
r=A.U(w,d2)
q=new C.dfy(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dfx(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cc(l.c3(0,k,new C.dfq()),o)}h=new C.dfw(s)
g=new C.dfv(l,r)
p=v.$ti.k("b9<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b9(v,p),new C.dfr(h),o),o.k("M.E"))
e=f.length===0?new A.b9(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aV(w))
if(a0>d){d=a0
e=t}}a1=A.aV(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.i
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.dfE(new C.dfA(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.galE(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eD([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.ow(J.dJ(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.dfo(a2,new C.dfF(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cy<1>")
d2=A.C(new A.cy(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Gj(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KA(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cy<1>")
d2=A.C(new A.cy(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.dfs(c6,b4))
for(d2=new A.cE(a4,a4.$ti.k("cE<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aX(c7.b);j.C();){i=j.gS(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.eR(j,new C.dft(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.aX(o,new C.dfu())
c6.push(new C.aKi(new A.u(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bgf(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hxe(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
hrm(d,e,f,g,h,i,j,k,l,m,n){return new C.a_F(k,f,j,e,l,n,m,d,g,h,i,null)},
aDa(d,e,f,g,h,i,j){return new C.bk2(i,d,e,f,j,h,g,null)},
aqy:function aqy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEI:function aEI(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e1o:function e1o(d){this.a=d},
e1n:function e1n(d){this.a=d},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1s:function e1s(d){this.a=d},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1p:function e1p(d){this.a=d},
e1u:function e1u(d){this.a=d},
e1t:function e1t(d,e){this.a=d
this.b=e},
aqs:function aqs(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEF:function aEF(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e0P:function e0P(d){this.a=d},
e0N:function e0N(d){this.a=d},
e0O:function e0O(d){this.a=d},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
e0K:function e0K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0b:function e0b(d){this.a=d},
e0c:function e0c(d,e){this.a=d
this.b=e},
e0t:function e0t(d){this.a=d},
e0r:function e0r(d){this.a=d},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0u:function e0u(d){this.a=d},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0q:function e0q(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0G:function e0G(){},
e0H:function e0H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e0F:function e0F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e0z:function e0z(d){this.a=d},
e0A:function e0A(d,e,f){this.a=d
this.b=e
this.c=f},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0B:function e0B(d,e){this.a=d
this.b=e},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0x:function e0x(){},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0D:function e0D(d){this.a=d},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0I:function e0I(d,e){this.a=d
this.b=e},
e0_:function e0_(d,e){this.a=d
this.b=e},
e00:function e00(d,e){this.a=d
this.b=e},
e0S:function e0S(d,e,f){this.a=d
this.b=e
this.c=f},
e0M:function e0M(d,e,f){this.a=d
this.b=e
this.c=f},
e0L:function e0L(d){this.a=d},
e01:function e01(d){this.a=d},
e02:function e02(d){this.a=d},
e03:function e03(){},
e04:function e04(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e08:function e08(d,e){this.a=d
this.b=e},
e07:function e07(d,e){this.a=d
this.b=e},
e06:function e06(d){this.a=d},
e09:function e09(d,e){this.a=d
this.b=e},
e05:function e05(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0l:function e0l(){},
e0m:function e0m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0k:function e0k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0g:function e0g(d,e,f){this.a=d
this.b=e
this.c=f},
e0f:function e0f(d,e,f){this.a=d
this.b=e
this.c=f},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0h:function e0h(d){this.a=d},
e0i:function e0i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0e:function e0e(d,e){this.a=d
this.b=e},
e0j:function e0j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0n:function e0n(d,e){this.a=d
this.b=e},
e0Z:function e0Z(){},
e1_:function e1_(d,e){this.a=d
this.b=e},
e10:function e10(d){this.a=d},
e11:function e11(d,e){this.a=d
this.b=e},
e0V:function e0V(d){this.a=d},
e0T:function e0T(d,e){this.a=d
this.b=e},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e12:function e12(d){this.a=d},
e0U:function e0U(d){this.a=d},
e0a:function e0a(d){this.a=d},
bgd:function bgd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dfm:function dfm(d){this.a=d},
dfl:function dfl(d,e){this.a=d
this.b=e},
dfn:function dfn(d){this.a=d},
dfk:function dfk(d,e){this.a=d
this.b=e},
fEI:function fEI(d,e){this.a=d
this.b=e},
fEJ:function fEJ(d){this.a=d},
fEK:function fEK(){},
fEG:function fEG(d,e){this.a=d
this.b=e},
fEH:function fEH(){},
fEN:function fEN(d,e){this.a=d
this.b=e},
fEO:function fEO(d){this.a=d},
fEP:function fEP(){},
fEL:function fEL(d){this.a=d},
fEM:function fEM(d,e){this.a=d
this.b=e},
KA:function KA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Gj:function Gj(d,e){this.a=d
this.b=e},
bgf:function bgf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dfp:function dfp(d){this.a=d},
dfG:function dfG(d){this.a=d},
dfy:function dfy(d){this.a=d},
dfz:function dfz(){},
dfx:function dfx(d){this.a=d},
dfq:function dfq(){},
dfw:function dfw(d){this.a=d},
dfv:function dfv(d,e){this.a=d
this.b=e},
dfr:function dfr(d){this.a=d},
dfA:function dfA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dfB:function dfB(d){this.a=d},
dfC:function dfC(d){this.a=d},
dfD:function dfD(){},
dfE:function dfE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dfF:function dfF(){},
dfo:function dfo(d,e,f,g,h,i,j,k,l,m){var _=this
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
dfs:function dfs(d,e){this.a=d
this.b=e},
dft:function dft(d){this.a=d},
dfu:function dfu(){},
aKi:function aKi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgg:function bgg(d,e){this.b=d
this.a=e},
dfH:function dfH(){},
dfI:function dfI(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(){},
bk3:function bk3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfi:function bfi(d,e){this.b=d
this.a=e},
by_:function by_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fkP:function fkP(d){this.a=d},
bnn:function bnn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eVJ:function eVJ(d){this.a=d},
eVI:function eVI(d,e){this.a=d
this.b=e},
a_F:function a_F(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aD8:function aD8(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dvz:function dvz(d,e){this.a=d
this.b=e},
dvy:function dvy(d){this.a=d},
dvw:function dvw(d){this.a=d},
dvx:function dvx(d){this.a=d},
dvI:function dvI(d){this.a=d},
dvJ:function dvJ(d){this.a=d},
dvH:function dvH(d,e){this.a=d
this.b=e},
dvK:function dvK(){},
dvN:function dvN(d){this.a=d},
dvG:function dvG(d,e){this.a=d
this.b=e},
dvM:function dvM(){},
dvO:function dvO(d){this.a=d},
dvF:function dvF(d,e){this.a=d
this.b=e},
dvP:function dvP(d){this.a=d},
dvE:function dvE(d){this.a=d},
dvQ:function dvQ(d){this.a=d},
dvD:function dvD(d){this.a=d},
dvR:function dvR(d){this.a=d},
dvC:function dvC(d){this.a=d},
dvS:function dvS(d){this.a=d},
dvB:function dvB(d){this.a=d},
dvT:function dvT(d){this.a=d},
dvA:function dvA(d,e){this.a=d
this.b=e},
dvL:function dvL(d){this.a=d},
adO:function adO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bk2:function bk2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adN:function adN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bk1:function bk1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dvU:function dvU(d){this.a=d},
dvV:function dvV(d,e){this.a=d
this.b=e},
aD9:function aD9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJk:function aJk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adP:function adP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dw3:function dw3(d){this.a=d},
Gf:function Gf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hmg(d){var w=d.T,v=x.N
return w.jn(w,new C.cee(),v,v)},
hRj(d){var w=d.bD
if(w>=0)return w
return 5},
hmi(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hmg(d).h(0,v)
if(w==null||w.length===0)return null
return A.bk(w)},
hmh(d,e){var w=C.hmi(d,e)
if(w!=null&&w.ce(new A.V(Date.now(),0,!1)))return!0
return!1},
hRk(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hmg(d),w,w)
u=C.hmi(d,e)
t=u!=null&&u.ce(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dA(30,0,0,0,0,0).a).a9().ae())
d.T=v},
b0I(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0I=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lv(t,B.Jj),$async$b0I)
case 3:if(l){u=!0
w=1
break}u=A.l8(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jj,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0I,v)},
cee:function cee(){},
hRh(){var w,v=$.ok(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hf(u)},
J2(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$J2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$J2)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$J2)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.r(r,"codes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
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
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$J2,v)},
a7P(d){return C.hRi(d)},
hRi(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7P=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7P)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hO("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.z),!1,!1,B.cH,null),$async$a7P)
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
return A.i($async$a7P,v)},
ced(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ced=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.J2(),$async$ced)
case 3:t=m.k2(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gS(t)
q=r.b
if(s.b(q)){p=J.a7(q)
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
return A.i($async$ced,v)},
O2(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$O2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ced(d),$async$O2)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.J2(),$async$O2)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a9().ae())
r.n(s,t,o)
w=9
return A.b(C.a7P(s),$async$O2)
case 9:case 8:u=t
w=1
break
case 5:n=C.hRh()
w=10
return A.b(C.J2(),$async$O2)
case 10:s=f
J.aJ(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a9().ae(),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=11
return A.b(C.a7P(s),$async$O2)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
b0H(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.J2(),$async$b0H)
case 3:t=f
for(s=J.dq(t),r=s.gdR(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7P(t),$async$b0H)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0H,v)},
a7Q(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7Q=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqx(d,e),$async$a7Q)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.O2(d),$async$a7Q)
case 7:w=4
break
case 5:w=8
return A.b(C.b0H(d),$async$a7Q)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7Q,v)},
aqr(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqr=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqx(f,e),$async$aqr)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aqr)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.J2(),$async$aqr)
case 7:q=o.r(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a7(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqr,v)},
b0G(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0G=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b0G)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.J2(),$async$b0G)
case 4:t=q.r(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a7(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0G,v)},
hRl(){var w,v=$.ok(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hf(u)},
aqu(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aqu)
case 3:if(!g){u=null
w=1
break}t=C.hRl()
w=4
return A.b(A.VN(),$async$aqu)
case 4:s=g
r=B.dO.aP(B.X.aq(d.f_(),null))
r=B.cK.gcu().aP(r)
q=e?999:2
J.aJ(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=5
return A.b(A.a7R(s),$async$aqu)
case 5:p=e?999:2
u=new A.a0R("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqu,v)},
aqt(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqt=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.VN(),$async$aqt)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b0G(J.k(l==null?"":l),j),$async$aqt)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cB(0,B.cF.aP(t))
s=C.hmj(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
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
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a9().ae())
o.n(p,g,l)}w=5
return A.b(A.a7R(p),$async$aqt)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqt,v)},
hmj(d){var w,v,u,t,s=null
try{w=B.X.aN(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hRn(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h5K(d){var w=0,v=A.j(x.m),u,t,s
var $async$h5K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqt(t[1])
w=1
break}u=null
w=1
break}u=C.hmj(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h5K,v)},
hRn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cH(u,new C.ceg(),u.$ti.k("M.E"),x.k)
t=A.a6(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.ceh(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bk(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.k2(p),t=t.gaf(t),o=x.B;t.C();){n=t.gS(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cH(n,new C.cei(),n.$ti.k("M.E"),o)
k=A.a6(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cej(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqv(h,w,s,r,q)},
aqx(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NU(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.B5(d),$async$aqx)
case 3:u=t.cM(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqx,v)},
cep(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cep=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.B5(d),$async$cep)
case 3:t=s.b7(f,new C.ceq(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aX(t,new C.cer())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cep,v)},
VO(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$VO=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqx(e,d),$async$VO)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.O2(e),$async$VO)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.B5(e),$async$VO)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.cen(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gan(r)){u=null
w=1
break}t=t.dH(r,new C.ceo(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lm(e,o),$async$VO)
case 14:n=i
if(J.cM(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.aqv(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VO,v)},
b0L(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0L=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VO(d,e,f,g),$async$b0L)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.H_(A.Kw(q.f_(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0L,v)},
b0K(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0K=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VO(d,e,f,g),$async$b0K)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqu(r,f),$async$b0K)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHk(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0K,v)},
VP(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VP=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h5K(a0),$async$VP)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqr(g.a,d,e,f,s,r),$async$VP)
case 6:if(!a2){if(r)throw A.W(A.be("This backup expired or the sender's tree is no longer available."))
throw A.W(A.be("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bDl(e,j),$async$VP)
case 12:case 11:w=13
return A.b(C.aig(e,j,s),$async$VP)
case 13:h=n.h(0,i)
w=h!=null&&J.cM(h)?14:15
break
case 14:w=16
return A.b(C.Bg(e,i,h),$async$VP)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.br3(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VP,v)},
aqv:function aqv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cel:function cel(){},
cem:function cem(){},
cek:function cek(){},
ceg:function ceg(){},
ceh:function ceh(){},
cei:function cei(){},
cej:function cej(){},
ceq:function ceq(){},
cer:function cer(){},
cen:function cen(d){this.a=d},
ceo:function ceo(d){this.a=d},
hep(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hI(d,new C.aqw(w,e,g,i,f,h,null),!0,null,x.H)},
dfj(d,e,f,g,h,i,j,k){return new C.bgc(i,e,k,j,g,f,h,d,null)},
aqw:function aqw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEH:function aEH(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e1b:function e1b(d){this.a=d},
e1c:function e1c(d,e,f){this.a=d
this.b=e
this.c=f},
e1g:function e1g(d,e){this.a=d
this.b=e},
e1h:function e1h(d){this.a=d},
e18:function e18(d){this.a=d},
e19:function e19(d,e){this.a=d
this.b=e},
e1a:function e1a(d,e){this.a=d
this.b=e},
e1f:function e1f(d){this.a=d},
e1e:function e1e(d,e){this.a=d
this.b=e},
e1d:function e1d(){},
e1j:function e1j(d){this.a=d},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1i:function e1i(d,e){this.a=d
this.b=e},
dfL:function dfL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bge:function bge(d,e,f){this.d=d
this.e=e
this.a=f},
ad3:function ad3(d,e,f){this.c=d
this.d=e
this.a=f},
bgc:function bgc(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgh:function bgh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0_:function a0_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEG:function aEG(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e13:function e13(d,e){this.a=d
this.b=e},
e14:function e14(d){this.a=d},
e15:function e15(d){this.a=d},
e16:function e16(d){this.a=d},
e17:function e17(d){this.a=d},
a00:function a00(d){this.a=d},
blw:function blw(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e1l:function e1l(d,e){this.a=d
this.b=e},
b_f(d,e){return new C.b_e(d,e,null)},
b_e:function b_e(d,e,f){this.c=d
this.d=e
this.a=f},
ige(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b3(d,11)},
inJ(d){return A.bV(B.L,null,new C.fVl(new C.uc(A.R(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hod(d,e){return new C.atA(e,d,null)},
aRI(d,e,f,g,h,i,j){var w=C.ige(i)
if(w!=null)return A.bx(e,new A.a4(j,f,new C.a6V(w,!0,null),null),B.ap)
return N.aR3(e,B.bY,f,g,h,i,j)},
lR:function lR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6V:function a6V(d,e,f){this.c=d
this.d=e
this.a=f},
blc:function blc(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b7$=e
_.c=_.a=null},
dNE:function dNE(d){this.a=d},
dNF:function dNF(){},
dNG:function dNG(d,e){this.a=d
this.b=e},
blb:function blb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fVl:function fVl(d){this.a=d},
fVk:function fVk(d,e){this.a=d
this.b=e},
fVj:function fVj(d,e){this.a=d
this.b=e},
fVi:function fVi(d,e){this.a=d
this.b=e},
atA:function atA(d,e,f){this.c=d
this.d=e
this.a=f},
cnj:function cnj(d,e){this.a=d
this.b=e},
aML:function aML(){},
inu(d){var w=null
return A.ch(w,w,!0,w,new C.fUJ(),d,w,!0,!0,x.e2)},
ioF(d,e,f,g,h){var w=null
return A.ch(w,w,!0,w,new C.h1d(h,g,f,e),d,w,!0,!0,x.N)},
inw(d,e){var w=null
return A.ch(w,w,!0,w,new C.fUN(e),d,w,!0,!0,x.dY)},
inv(d){var w=null
return A.ch(w,w,!0,w,new C.fUM(),d,w,!0,!0,x.c5)},
aUL:function aUL(d,e){this.a=d
this.b=e},
aUK:function aUK(d){this.a=d},
aSI:function aSI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fUJ:function fUJ(){},
h1d:function h1d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fUN:function fUN(d){this.a=d},
fUM:function fUM(){},
ZD:function ZD(d,e){this.c=d
this.a=e},
azT:function azT(){var _=this
_.d=$
_.c=_.a=_.e=null},
d6T:function d6T(d){this.a=d},
d6U:function d6U(d){this.a=d},
d6S:function d6S(d,e){this.a=d
this.b=e},
d6V:function d6V(d){this.a=d},
d6W:function d6W(d){this.a=d},
ZC:function ZC(d){this.a=d},
azS:function azS(){this.d=$
this.c=this.a=null},
d6P:function d6P(d){this.a=d},
d6Q:function d6Q(d){this.a=d},
d6R:function d6R(d){this.a=d},
Z9:function Z9(d){this.a=d},
ayy:function ayy(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cFj:function cFj(){},
cFp:function cFp(d){this.a=d},
cFq:function cFq(d){this.a=d},
cFr:function cFr(d){this.a=d},
cFo:function cFo(){},
cFs:function cFs(d){this.a=d},
cFt:function cFt(d){this.a=d},
cFn:function cFn(){},
cFu:function cFu(d,e){this.a=d
this.b=e},
cFm:function cFm(d,e){this.a=d
this.b=e},
cFk:function cFk(d,e){this.a=d
this.b=e},
cFv:function cFv(d){this.a=d},
cFl:function cFl(){},
cFw:function cFw(d){this.a=d},
a1N:function a1N(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxQ:function bxQ(){this.d=$
this.c=this.a=null},
fk8:function fk8(d,e){this.a=d
this.b=e},
fk9:function fk9(d){this.a=d},
fka:function fka(d,e){this.a=d
this.b=e},
ac7:function ac7(d,e){this.a=d
this.b=e},
G4:function G4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxO:function bxO(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
fk6:function fk6(d,e){this.a=d
this.b=e},
ayr:function ayr(d,e){this.c=d
this.a=e},
bxP:function bxP(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
fk7:function fk7(d){this.a=d},
bxN:function bxN(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOR:function aOR(){},
aOS:function aOS(){},
bFj(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bf(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p_(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fTb(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cT(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cT(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cT(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aY(B.o.u(s),2,"0")
n.push(A.cT(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yv(A.cT(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRj(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hY().l6(85,1280,B.eL),$async$aRj)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fn(),$async$aRj)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hoc()
w=9
return A.b(C.cni(q,r),$async$aRj)
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
return A.i($async$aRj,v)},
aRG(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRG=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cnf(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aP(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().M7(p,!0,null,i).dc(0,B.fY),$async$aRG)
case 9:n=a1
w=10
return A.b(n.lP(),$async$aRG)
case 10:m=a1
w=11
return A.b(J.a3u(m).hA(B.hb),$async$aRG)
case 11:l=a1
J.a3u(m).t()
if(l==null){w=8
break}i=J.eT(B.dK.gaS(l))
k="data:image/png;base64,"+B.cK.gcu().aP(i)
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
return A.i($async$aRG,v)},
fTb:function fTb(){},
uc:function uc(d){this.a=d},
atz:function atz(d,e,f){this.c=d
this.d=e
this.a=f},
aGa:function aGa(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eST:function eST(d,e){this.a=d
this.b=e},
eSK:function eSK(d){this.a=d},
eSL:function eSL(d){this.a=d},
eSR:function eSR(d,e){this.a=d
this.b=e},
eSQ:function eSQ(d,e){this.a=d
this.b=e},
eSN:function eSN(d,e){this.a=d
this.b=e},
eSM:function eSM(d,e){this.a=d
this.b=e},
eSO:function eSO(d){this.a=d},
eSP:function eSP(d,e){this.a=d
this.b=e},
eSS:function eSS(d,e){this.a=d
this.b=e},
eSF:function eSF(d,e){this.a=d
this.b=e},
eSJ:function eSJ(d){this.a=d},
eSI:function eSI(d,e){this.a=d
this.b=e},
eSH:function eSH(d){this.a=d},
eSU:function eSU(d,e){this.a=d
this.b=e},
eSV:function eSV(d,e){this.a=d
this.b=e},
eSG:function eSG(d,e){this.a=d
this.b=e},
hBf(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a9().ae(),"project",v],x.N,x.z)},
fTc(d,e,f){var w=0,v=A.j(x.N),u
var $async$fTc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aq(C.hBf(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTc,v)},
bFl(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fTc(!0,d,e),$async$bFl)
case 4:w=3
return A.b(r.atx(g,d,e.a),$async$bFl)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dO.aP(B.X.aq(C.hBf(d,e,null),null))
u="NGMY_WS:"+B.kD.gcu().aP(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFl,v)},
hsK(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
he3(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.f2(s,t))return!0
if(J.d3(s,"{"))try{w=B.X.aN(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ilm(d){var w,v,u,t=C.hsK(d)
if(t==null)return null
if(C.he3(t))return t
w=B.a.cp(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b3(t,w))
if(C.he3(v))return v}u=B.a.cp(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b3(t,u))
if(C.he3(v))return v}return null},
he2(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.ch.cB(0,B.cF.aP(J.nn(q,8)))
w=t.a(B.X.aN(0,v,r))}else w=t.a(B.X.aN(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.h8o(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bFk(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atw(t[1]),$async$bFk)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.he2(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.he2(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFk,v)},
he1(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lz(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bER(){var w=0,v=A.j(x.o),u,t
var $async$bER=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hb(),$async$bER)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.he2(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bER,v)},
hCg(d,e,f,g){return A.bV(B.L,null,new C.h13(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h13:function h13(d,e,f){this.a=d
this.b=e
this.c=f},
ae9:function ae9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eSX:function eSX(d,e){this.a=d
this.b=e},
eSY:function eSY(d,e){this.a=d
this.b=e},
eSZ:function eSZ(d,e){this.a=d
this.b=e},
eT_:function eT_(d,e){this.a=d
this.b=e},
eSW:function eSW(d){this.a=d},
att:function att(d,e,f){this.c=d
this.d=e
this.a=f},
bmT:function bmT(){var _=this
_.c=_.a=_.e=_.d=null},
eSA:function eSA(d,e){this.a=d
this.b=e},
eSB:function eSB(d){this.a=d},
eSC:function eSC(d){this.a=d},
aty:function aty(d){this.a=d},
aG9:function aG9(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eSE:function eSE(d){this.a=d},
eSD:function eSD(d){this.a=d},
hUB(d,e,f,g,h){return new C.OH(h,g,d,e,f,null)},
aL5:function aL5(d,e){this.a=d
this.b=e},
OH:function OH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGb:function aGb(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eTm:function eTm(){},
eTi:function eTi(d,e){this.a=d
this.b=e},
eTj:function eTj(d){this.a=d},
eT3:function eT3(d){this.a=d},
eT1:function eT1(d){this.a=d},
eT2:function eT2(d){this.a=d},
eTc:function eTc(d,e){this.a=d
this.b=e},
eT9:function eT9(d,e){this.a=d
this.b=e},
eTa:function eTa(d,e){this.a=d
this.b=e},
eTb:function eTb(d,e,f){this.a=d
this.b=e
this.c=f},
eT7:function eT7(d,e,f){this.a=d
this.b=e
this.c=f},
eT5:function eT5(d){this.a=d},
eT6:function eT6(d){this.a=d},
eT8:function eT8(d){this.a=d},
eTp:function eTp(d){this.a=d},
eTo:function eTo(d){this.a=d},
eTq:function eTq(d){this.a=d},
eTn:function eTn(d){this.a=d},
eT0:function eT0(d){this.a=d},
eT4:function eT4(d,e){this.a=d
this.b=e},
eTl:function eTl(d,e){this.a=d
this.b=e},
eTk:function eTk(d,e){this.a=d
this.b=e},
eTf:function eTf(d){this.a=d},
eTg:function eTg(d){this.a=d},
eTh:function eTh(d,e){this.a=d
this.b=e},
eTe:function eTe(d,e){this.a=d
this.b=e},
eTd:function eTd(d,e,f){this.a=d
this.b=e
this.c=f},
bzD:function bzD(){},
AV(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
agG(d,e,f){return C.i9B(d,e,f)},
i9B(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$agG=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$agG)
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
return A.i($async$agG,v)},
agF(d,e){return C.i9A(d,e)},
i9A(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agF=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agF)
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
return A.i($async$agF,v)},
i8l(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tl(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCk(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCk=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b3Y(q),$async$bCk)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRG(q,!1),$async$bCk)
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
return A.i($async$bCk,v)},
hId(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aK(d.h(0,"quantity"))
if(w==null)w=null
v=A.aK(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rm(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rm(p,J.k(u==null?"":u),1,o,q)},
h8o(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cH(w,new C.cEG(),w.$ti.k("M.E"),x.Q)
v=A.a6(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cEH(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bk(J.k(t==null?"":t))
return new C.lz(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
idG(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wh
case"female":case"f":return D.oj
default:return D.yK}},
hxQ(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hij(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.idG(v==null?j:J.k(v))
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
m=A.aK(d.h(0,"birthOrder"))
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hX(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
idI(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Oh
case"viewer":return D.kP
default:return D.ur}},
idJ(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
H0(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQq(d,e){return B.a.i(e.toLowerCase())===C.H0(d,e)&&d.y!==D.kP},
uq(d,e){var w,v=d.y
if(v===D.kP)return!1
w=B.a.i(e.toLowerCase())
if(w===C.H0(d,e))return!0
if(v===D.Oh)return!0
v=d.e
return new A.N(v,A.he8(),A.T(v).k("N<1,m>")).q(0,w)},
id7(d){return J.dJ(d,new C.fDF()).gK(0)},
h1O(d){var w=0,v=A.j(x.y),u,t
var $async$h1O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.B5(d),$async$h1O)
case 3:u=t.rh(f,new C.h1P(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h1O,v)},
bDl(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.B5(d),$async$bDl)
case 3:t=g
if(J.rh(t,new C.fBk(e))){w=1
break}if(C.id7(t)>=2)throw A.W(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDl,v)},
alC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cH(w,new C.bS0(),w.$ti.k("M.E"),x.P)
v=A.a6(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bS1(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bS2(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bk(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.N(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.idI(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aX(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cv)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gS(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kQ(w,v,s,!r,t,g,q,p,o,n,m)},
hy4(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.au(v,0,8)},
Dl(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Dl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sb(d),$async$Dl)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Dl)
case 4:t=f
w=5
return A.b(t.a71(0),$async$Dl)
case 5:w=6
return A.b(C.frR(t,l),$async$Dl)
case 6:s=f
if(J.cM(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.htk(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oZ(l,n),$async$Dl)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.htk(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oZ(l,n),$async$Dl)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dl,v)},
frR(d,e){return C.i5K(d,e)},
i5K(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$frR=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AV(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aN(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aX(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gS(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AV(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h8o(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AV(a9)+"_"+n))
i=C.i8l(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b3Y(h),$async$frR)
case 17:g=b1
if(g!=null){i=i.Tl(g)
p=!0}case 16:J.cc(q,i)
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
case 8:J.Sn(q,new C.frS())
if(p&&J.ad(q)!==0)C.oZ(a9,q)
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
return A.i($async$frR,v)},
bDN(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bDN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sb(d),$async$bDN)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Dl(r),$async$bDN)
case 4:t=p.aX(g)
case 5:if(!t.C()){w=6
break}s=t.gS(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDN,v)},
htk(d){var w,v,u,t
try{w=B.X.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cH(v,new C.fnH(),v.$ti.k("M.E"),x.fA)
u=A.a6(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fnI(),u),u.k("M.E"))
B.d.aX(v,new C.fnJ())
return v}catch(t){v=A.a([],x.D)
return v}},
oZ(d,e){return C.ink(d,e)},
ink(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oZ=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Sb(b2),$async$oZ)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oZ)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AV(a8)
p=A.aS(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.X.aN(0,p,null)),new C.fUA(),a2).fO(0)
a2=J.b7(b3,new C.fUB(),a2).bZ(0,new C.fUC())
n=A.dh(a2,a2.$ti.k("M.E"))
a2=o,a2=A.eg(a2,a2.r,A.a6(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f2(n,m)?17:18
break
case 17:a5=C.AV(a8)
l=A.aS(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a97(l),$async$oZ)
case 19:t=21
a5=C.AV(a8)
k=A.aS(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a97(a5==null?null:J.k(a5)),$async$oZ)
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
return A.b(C.agF(r,"ngmy_worksheet_item_v3_"+C.AV(a8)+"_"+m),$async$oZ)
case 29:w=30
return A.b(C.agF(r,"ngmy_worksheet_thumb_v3_"+C.AV(a8)+"_"+m),$async$oZ)
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
case 14:case 10:a2=J.cF(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gS(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bCk(h),$async$oZ)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.agG(r,"ngmy_worksheet_thumb_v3_"+C.AV(a8)+"_"+a4,f),$async$oZ)
case 40:g=i.Tl(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agF(r,"ngmy_worksheet_thumb_v3_"+C.AV(a8)+"_"+a4),$async$oZ)
case 41:g=i.Tl(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agF(r,"ngmy_worksheet_thumb_v3_"+C.AV(a8)+"_"+a4),$async$oZ)
case 42:case 34:a4=i.a
w=43
return A.b(C.agG(r,"ngmy_worksheet_item_v3_"+C.AV(a8)+"_"+a4,B.X.aq(g.ah(),null)),$async$oZ)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cc(q,i.a)
w=31
break
case 32:w=44
return A.b(C.agG(r,"ngmy_worksheets_index_v3_"+C.AV(a8),B.X.aq(q,null)),$async$oZ)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.fUD(q))
a4=a3.$ti.k("cP<1,a8<m,@>>")
a7=A.C(new A.cP(a3,new C.fUE(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.agG(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aq(a0,null)),$async$oZ)
case 45:w=46
return A.b(J.hHj(r),$async$oZ)
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
return A.i($async$oZ,v)},
LM(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Dl(d),$async$LM)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.h1N(e))
if(r===-1)s.c6(t,0,e)
else s.n(t,r,e)
u=C.oZ(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LM,v)},
bDz(d,e){var w=0,v=A.j(x.H),u
var $async$bDz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Dl(d),$async$bDz)
case 2:u=g
J.nJ(u,new C.fE8(e))
w=3
return A.b(C.oZ(d,u),$async$bDz)
case 3:return A.h(null,v)}})
return A.i($async$bDz,v)},
H2(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$H2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$H2)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aS(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aN(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cH(j,new C.fH9(),j.$ti.k("M.E"),x.k)
s=A.a6(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fHa(),s),s.k("M.E"))
B.d.aX(r,new C.fHb())
k=r}}catch(h){}w=4
return A.b(C.fos(d),$async$H2)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i66(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<m,@>>")
s=A.C(new A.N(o,new C.fHc(),s),s.k("ak.E"))
n=B.X.aq(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Rn(d,o),$async$H2)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fHd(d),j),j.k("M.E"))
if(m.length!==0)C.aQ9(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$H2,v)},
fUm(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fUm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rn(d,e),$async$fUm)
case 3:t=J.dJ(e,new C.fUn(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQ9(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUm,v)},
a3n(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3n)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aS(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aN(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cH(m,new C.h1I(),m.$ti.k("M.E"),x.k)
t=A.a6(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h1J(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qC(o,new C.h1K(e))
if(B.a.i(e.x).length===0&&C.uq(e,d)){m=B.a.i(d.toLowerCase())
p=e.aFq(e.y===D.kP?D.kP:D.ur,m)}else p=e
if(q===-1)J.pR(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.Rn(d,o),$async$a3n)
case 3:w=C.uq(p,d)?4:5
break
case 4:w=6
return A.b(C.aQ8(C.H0(p,d),p),$async$a3n)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3n,v)},
aQm(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.H2(d),$async$aQm)
case 2:u=g
t=J.cF(u)
s=A.ow(t.eO(u,new C.fDQ(e)))
t.bs(u,new C.fDR(e))
w=3
return A.b(C.Rn(d,u),$async$aQm)
case 3:w=s!=null&&C.aQq(s,d)?4:5
break
case 4:w=6
return A.b(C.fnL(e),$async$aQm)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQm,v)},
aiv(d){var w=d.f,v=A.T(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h1T(),v),v.k("M.E"))
return w},
hbG(d,e){var w,v=d.f,u=A.ow(new A.Y(v,new C.fDk(e),A.T(v).k("Y<1>")))
v=C.aiv(d)
w=A.T(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fDl(e,u),w),w.k("M.E"))
B.d.aX(v,new C.fDm())
return v},
idM(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hCk(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.hbG(d,u),new C.h1e(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ifj(d,e){var w
if(e==null||e.length===0)return 1
w=C.hbG(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fI_(),A.T(w).k("N<1,G>")).f6(0,B.xI)+1},
ind(d){var w,v=C.aiv(d)
if(v.length===0)return null
w=new A.Y(v,new C.fUg(),A.T(v).k("Y<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
idH(d){return A.H(["id",d.a,"name",d.b,"gender",C.hxQ(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ife(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aV(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yK?n:q.c
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
d=q.aFl(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cNY(a1,w,a3.d,a2.y,s,a0,v)},
B5(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$B5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$B5)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aS(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cH(p,new C.fH6(),p.$ti.k("M.E"),x.k)
s=A.a6(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fH7(),s),s.k("M.E"))
B.d.aX(p,new C.fH8())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$B5,v)},
aig(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aig=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.ur:D.kP
a7=C.H0(b2,b3)
w=2
return A.b(C.B5(b1),$async$aig)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fUb(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDl(b1,b2),$async$aig)
case 5:case 4:if(b0===-1){u=b2.aFq(a6,a7)
a9.c6(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.yK?i:l.c
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
s.n(0,m,l.aFl(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b9<2>")
s=A.C(new A.b9(s,k),k.k("M.E"))
k=a5?D.ur:D.kP
u=t.cO_(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Rn(b1,a8),$async$aig)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQ8(B.a.i(b3.toLowerCase()),u),$async$aig)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aig,v)},
htJ(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a9().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<m,@>>"),k=A.C(new A.N(m,C.hBo(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a9().ae(),"updatedAt",o],r,x.K),"createdAt",s.a9().ae(),"updatedAt",o],r,x.z)},
htK(d,e){var w=new A.V(Date.now(),0,!1).a9().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<m,@>>")
u=A.C(new A.N(u,C.hBo(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a9().ae(),"updatedAt",w],x.N,x.z)},
i3B(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.alC(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.he8(),A.T(j).k("N<1,m>")).bZ(0,new C.foe())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.ur
else s=B.d.q(t,u)?D.Oh:D.kP
return w.aFq(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.alC(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cH(h,new C.fof(),h.$ti.k("M.E"),x.P)
p=A.a6(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fog(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.foh(),x.N).bZ(0,new C.foi())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ur
else s=B.d.q(t,u)?D.Oh:D.kP
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bk(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kQ(h,r,p,!m,t,o,l,j,v,s,B.ca)},
fos(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fos=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fow()
h=x.N
g=x.z
w=7
return A.b(A.iX(A.a([A.lE("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.lE("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.lE("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.fO),$async$fos)
case 7:q=a4
p=J.r(q,0)
o=J.r(q,1)
n=J.r(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.ha(l,o)
J.ha(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.r(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a6(l).k("b9<2>")
h=A.cH(new A.b9(l,h),new C.fot(a0),h.k("M.E"),x.k)
l=A.a6(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fou(),l),l.k("M.E"))
B.d.aX(l,new C.fov())
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
return A.i($async$fos,v)},
i66(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dH(e,new C.fsy(),v).bZ(0,new C.fsz())
t=A.dh(u,u.$ti.k("M.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.H0(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kP){m=q.e
m=!new A.N(m,A.he8(),A.T(m).k("N<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ife(l,v)
o=C.H0(k,w)
p=v.d
s.n(0,u,o===w?k.be7(p,D.ur):k.be7(p,v.y))}j=s.$ti.k("b9<2>")
j=A.C(new A.b9(s,j),j.k("M.E"))
B.d.aX(j,new C.fsA())
return j},
Rn(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Rn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Rn)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fvr(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aq(s,null)),$async$Rn)
case 3:return A.h(null,v)}})
return A.i($async$Rn,v)},
aQ8(d,e){return C.ibq(d,e)},
ibq(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQ8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m9("family_trees",A.a([C.htJ(e,d)],p),null,B.cH),$async$aQ8)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m9("family_trees",A.a([C.htK(e,d)],p),null,B.cH),$async$aQ8)
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
return A.i($async$aQ8,v)},
aQ9(d,e){return C.ibr(d,e)},
ibr(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQ9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fAE(d),n),m)
r=l
w=7
return A.b(A.m9("family_trees",r,null,B.cH),$async$aQ9)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fAF(d),n),m)
p=k
w=8
return A.b(A.m9("family_trees",p,null,B.cH),$async$aQ9)
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
return A.i($async$aQ9,v)},
fnL(d){return C.i2T(d)},
i2T(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fnL=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.RM("family_trees",A.H(["id",d],x.N,x.z),null,B.cH),$async$fnL)
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
return A.i($async$fnL,v)},
rm:function rm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lz:function lz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cEJ:function cEJ(){},
cEI:function cEI(){},
cEG:function cEG(){},
cEH:function cEH(){},
I7:function I7(d,e){this.a=d
this.b=e},
hX:function hX(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alB:function alB(d,e){this.a=d
this.b=e},
fDF:function fDF(){},
h1P:function h1P(d){this.a=d},
fBk:function fBk(d){this.a=d},
kQ:function kQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bS4:function bS4(){},
bS3:function bS3(){},
bS0:function bS0(){},
bS1:function bS1(){},
bS2:function bS2(){},
frS:function frS(){},
fnH:function fnH(){},
fnI:function fnI(){},
fnJ:function fnJ(){},
fUA:function fUA(){},
fUB:function fUB(){},
fUC:function fUC(){},
fUD:function fUD(d){this.a=d},
fUE:function fUE(){},
h1N:function h1N(d){this.a=d},
fE8:function fE8(d){this.a=d},
fH9:function fH9(){},
fHa:function fHa(){},
fHb:function fHb(){},
fHc:function fHc(){},
fHd:function fHd(d){this.a=d},
fUn:function fUn(d){this.a=d},
h1I:function h1I(){},
h1J:function h1J(){},
h1K:function h1K(d){this.a=d},
fDQ:function fDQ(d){this.a=d},
fDR:function fDR(d){this.a=d},
h1T:function h1T(){},
fDk:function fDk(d){this.a=d},
fDl:function fDl(d,e){this.a=d
this.b=e},
fDm:function fDm(){},
h1e:function h1e(d){this.a=d},
fI_:function fI_(){},
fUg:function fUg(){},
fH6:function fH6(){},
fH7:function fH7(){},
fH8:function fH8(){},
fUb:function fUb(d){this.a=d},
foe:function foe(){},
fof:function fof(){},
fog:function fog(){},
foh:function foh(){},
foi:function foi(){},
fow:function fow(){},
fox:function fox(d){this.a=d},
fot:function fot(d){this.a=d},
fou:function fou(){},
fov:function fov(){},
fsy:function fsy(){},
fsz:function fsz(){},
fsA:function fsA(){},
fvr:function fvr(){},
fAE:function fAE(d){this.a=d},
fAF:function fAF(d){this.a=d},
cEK:function cEK(d,e){this.a=d
this.b=e},
cEL:function cEL(d,e){this.a=d
this.b=e},
aIg:function aIg(d,e,f){this.a=d
this.b=e
this.c=f},
bam:function bam(){this.b=this.a=0},
bal:function bal(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bxR:function bxR(){},
x9(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aY(B.o.u(w.gnp()),2,"0")+":"+B.a.aY(B.o.u(w.gGB()),2,"0")},
hUy(){var w,v=$.ok(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"WS"+B.d.hf(u)},
atu(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atu)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$atu)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.r(r,"stashes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
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
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$atu,v)},
atv(d){return C.hUz(d)},
hUz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atv=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atv)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hO("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.z),!1,!1,B.cH,null),$async$atv)
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
return A.i($async$atv,v)},
atx(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$atx=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atx)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hUy()
w=4
return A.b(C.atu(),$async$atx)
case 4:r=h
q=B.a.i(e)
p=B.dO.aP(t)
J.aJ(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cK.gcu().aP(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=5
return A.b(C.atv(r),$async$atx)
case 5:u=new A.a0R("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atx,v)},
atw(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$atw)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atu(),$async$atw)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.ch.cB(0,B.cF.aP(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
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
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a9().ae())
p.n(q,i,m)}w=5
return A.b(C.atv(q),$async$atw)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atw,v)},
hoc(){var w=new A.V(Date.now(),0,!1).a9()
return"wst_"+(1000*w.a+w.b)+"_"+B.cM.ap(999999)},
hUA(d){var w,v,u,t,s,r,q
try{w=A.ah7(d)
if(w==null)return d
v=w
if(J.LR(v)>960||J.LQ(v)>960){s=v
r=J.LR(v)>=J.LQ(v)?960:null
v=A.ah6(s,J.LQ(v)>J.LR(v)?960:null,B.PG,r)}s=v
u=A.an_(82).TI(s,B.zm)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cn(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cni(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cni=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hUA(e)
$.cne.n(0,s,t)
u=C.bFn(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cni,v)},
b3Y(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b3Y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.f2(l,",")?B.d.gak(J.lH(l,",")):l
q=B.cF.aP(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hoc()
w=7
return A.b(C.cni(p,q),$async$b3Y)
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
return A.i($async$b3Y,v)},
cnf(d){var w=0,v=A.j(x.T),u,t,s
var $async$cnf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cnh(s),$async$cnf)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cK.gcu().aP(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cnf,v)},
a97(d){var w=0,v=A.j(x.H),u,t
var $async$a97=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hBg(d)
if(t==null){w=1
break}$.cne.W(0,t)
w=3
return A.b(C.bFm(t),$async$a97)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a97,v)},
bFn(d,e){return C.ilp(d,e)},
ilp(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFn=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aP3
w=7
return A.b(n==null?$.aP3=N.haD():n,$async$bFn)
case 7:r=g
q=new Uint8Array(A.cn(e))
p=J.n_(r,"thumbs","readwrite")
B.j5.mu(J.mZ(p,"thumbs"),q,l)
w=8
return A.b(J.pQ(p),$async$bFn)
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
return A.i($async$bFn,v)},
bFm(d){return C.iln(d)},
iln(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFm=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aP3
w=7
return A.b(o==null?$.aP3=N.haD():o,$async$bFm)
case 7:r=f
q=J.n_(r,"thumbs","readwrite")
B.j5.G8(J.mZ(q,"thumbs"),m)
w=8
return A.b(J.pQ(q),$async$bFm)
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
return A.i($async$bFm,v)}},D,Av,Aw,A_,Ax,Ay
J=c[1]
A=c[0]
B=c[2]
N=c[61]
P=c[257]
A0=c[163]
S=c[60]
Aa=c[232]
L=c[212]
H=c[35]
E=c[222]
T=c[122]
Ab=c[235]
Q=c[106]
Ac=c[135]
U=c[228]
Ad=c[117]
Ae=c[198]
A1=c[119]
Af=c[231]
Ag=c[43]
R=c[230]
M=c[91]
A2=c[87]
A3=c[169]
Ah=c[130]
A4=c[172]
A5=c[251]
A6=c[199]
Ai=c[190]
Aj=c[202]
A7=c[197]
Ak=c[254]
Al=c[73]
A8=c[256]
Am=c[79]
G=c[255]
An=c[134]
Ao=c[259]
Ap=c[121]
A9=c[216]
Aq=c[34]
V=c[120]
O=c[192]
Ar=c[203]
As=c[126]
W=c[258]
At=c[155]
X=c[244]
Y=c[42]
F=c[97]
Au=c[33]
K=c[105]
I=c[139]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[250]
Av=c[78]
Aw=c[210]
A_=c[253]
Ax=c[252]
Ay=c[64]
C.apb.prototype={}
C.b_g.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bit(),f=h.x!=null&&h.zk(i).length===0
if(h.x!=null)w=f?B.b1:B.bB
else w=h.gUl()?B.bB:B.dZ
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.L(D.bnw,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f6g,B.f,i,i,new A.o(B.b1.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h6,i,i,i),B.W,D.fBy,B.av,A.d(C.x9(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fxd,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b5S,i,i,i,i,B.a0_,i,i,i)
q=A.n(16)
p=A.L(B.aN,B.r,1)
o=A.L(B.b1.j(0.28),B.r,1)
n=A.hcH(h.d)
o=A.p(B.A,C.b_f(A.fKk(h.e,n),30),B.f,i,i,new A.o(B.m3,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fsj,B.K,i,i)
m=A.n(14)
l=A.L(B.aN,B.r,1)
q=A.p(i,A.x(A.a([o,B.N,n,B.bF,D.fBR,B.ae,A.p(i,A.x(A.a([D.fRS,B.bF,A.d(A.B7(h.c),i,i,i,i,i,i,D.fn1,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.alh,i,i,i)
p=A.n(16)
m=A.L(B.aN,B.r,1)
l=j.aSi("Original due",C.x9(h.r,!1))
n=j.aSi("Current due",C.x9(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.N,n,B.W,A.p(i,A.d(h.gaMp(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BV,i,i,1/0),B.W,j.ciU(),B.N,j.c5T(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.L(B.aN,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fCP,B.av,A.d(q,i,i,i,i,i,i,D.frx,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaH5()){q=A.n(14)
o=A.L(B.cq,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fTc,B.N,A.bx(A.n(12),A.ec(new A.a4(1/0,88,A.b4(i,i,i,new A.Wz(h.ax,B.O,D.faD,!0,3.5,i),B.ax),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GA,i,i,i)],s))}p.push(B.aB)
p.push(D.fL5)
return A.p(i,A.x(A.a([r,new A.D(B.a_O,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.P,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aSi(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aaM,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fo4,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
ciU(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aad(B.dZ,u,"Not paid yet")
w=t.zk(null).length
v=w===0?B.b1:B.bB
return this.aad(v,u,C.x9(t.x,!0))},
c5T(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aad(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aad(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aaM,u,u,u)
v=A.T(d).k("N<1,h4>")
v=A.C(new A.N(d,new C.c7i(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bG,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aad(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aaM,w,w,w),1),new A.ds(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dV,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bcv.prototype={
a4(d,e){new A.Wz(this.b,B.O,e,!0,3.5,null).a4(d,e)},
av(d){return d.b!==this.b}}
C.apn.prototype={
R(){return new C.aE9(A.a([],x.bp))},
ge2(){return this.c}}
C.aE9.prototype={
Z(){this.a3()
this.J8()},
J8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2E(t.a.c),$async$J8)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dOw(t,s))
case 1:return A.h(u,v)}})
return A.i($async$J8,v)},
aUf(d,e){var w,v=null,u=this.a.d.a,t=u?B.O:B.aP,s=A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bu:B.bn).j(0.22)
w=A.n(10)
return A.bs(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bn).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b3w),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aUe(d){return this.aUf(d,null)},
PV(d){return this.cmx(d)},
cmx(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HP:B.eL
w=7
return A.b(new A.hY().Co(72,900,900,n),$async$PV)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fn(),$async$PV)
case 8:p=f
n=B.cK.gcu().aP(p)
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
if(n!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$PV,v)},
b2f(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.O:B.aP,o=A.n(10),n=A.L((q?B.bu:B.bn).j(0.18),B.r,1)
if(d)q=B.cQ
else q=s.a.d.a?B.bu:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.au,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cQ
else u=s.a.d.a?B.bu:B.bn
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fy(r,r,r,r,r,r,r,r,r,r,r,B.cQ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ad,u,A.bM(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cx,s.a.d.a?B.bu:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jB,D.bAj,r,r,r)},
Dp(d){return this.bCo(d)},
bCn(){return this.Dp(null)},
bCo(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dp=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.bb(a4,B.b4,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jo(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.au(new A.bb(a4,B.b4,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bb(a4,B.b4,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.hcH(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wR?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i3(B.w.j(0.55),!0,"Dismiss",a4,new C.dOf(),new C.dOg(a2,t,a5,r,new C.dOh(a2,t),o,n,j),B.eH,!0,x.y),$async$Dp)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d5(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fh8)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.ffO)
w=1
break}a1=A.fKk(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wR?"male":"female"
w=7
return A.b(A.aiu(a3,A.hkU(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dp)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wR?"male":"female"
a5.e=a1
a3=a5.ax
B.d.aa(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c3(a3.gck(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cQh(a2.a)
w=8
return A.b(A.aiu(t.a.c,a5),$async$Dp)
case 8:case 5:w=9
return A.b(t.J8(),$async$Dp)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dp,v)},
aUT(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cQ.j(0.14)
else w=this.a.d.a?B.O:B.aP
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cQ
else s=(this.a.d.a?B.bu:B.bn).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_f(d,18)
if(g)q=B.cQ
else q=this.a.d.a?B.aP:B.au
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
SG(d){return this.cEn(d)},
cEn(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i3(B.w.j(0.55),!0,"Dismiss",s,new C.dOz(),new C.dOA(t,d),B.h5,!0,x.y),$async$SG)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiu(t.a.c,d),$async$SG)
case 7:w=8
return A.b(t.J8(),$async$SG)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SG,v)},
PU(d,e){return this.bNg(0,e)},
bNg(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lj(s,"Cancel","Delete",e.b+" \xb7 "+A.B7(e.c)+" will be removed from this device.","Delete this debt?"),$async$PU)
case 3:if(!g){w=1
break}w=4
return A.b(C.fDX(t.a.c,e.a),$async$PU)
case 4:w=5
return A.b(t.J8(),$async$PU)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PU,v)},
afW(d){return this.cgk(d)},
cgk(d){var w=0,v=A.j(x.H),u=this,t
var $async$afW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dOt(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afW)
case 2:return A.h(null,v)}})
return A.i($async$afW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.epr
w=J.dJ(m.d,new C.dOB())
v=A.C(w,w.$ti.k("M.E"))
w=J.dJ(m.d,new C.dOC())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cG(v,0,new C.dOD())
w=A.n(18)
s=m.a.d.a
r=s?D.czD:D.aC_
q=A.L(s?B.cQ.j(0.35):B.cQ.j(0.18),B.r,1)
s=A.p(l,D.c0u,B.f,l,l,new A.o(B.cQ.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.au,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a2,!0,A.n(12),A.aO(!1,A.n(12),!0,D.eoN,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dOE(m),l,l,l,l,l,l,l),B.f,B.cQ,0,l,l,l,l,l,B.ai)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.cAw("Open",""+v.length),1)
n=v.length===0?"$0.00":A.B7(t)
r=A.a([A.p(l,A.x(A.a([s,B.ae,A.B(A.a([o,B.ad,A.E(m.b8n(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.az,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.ale,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.e4:B.c
q=A.n(18)
o=A.L((w?B.bu:B.bn).j(0.12),B.r,1)
n=A.p(l,D.bWi,B.f,l,l,new A.o(B.cQ.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.au,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.ae,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bCU,l,l,1/0))}else{w=m.gclN()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bEA,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b8n(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.L((v.a.d.a?B.bu:B.bn).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cQ
else w=v.a.d.a?B.aP:B.au
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eB,u,u,u)},
cAw(d,e){return this.b8n(!1,d,e)},
clO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zk(j).length,h=d.bhG()
if(d.x!=null){w=d.zk(j).length
v=w===0?B.cQ:B.bB}else if(d.gUl())v=B.bB
else{if(h)w=B.cQ
else w=k.a.d.a?B.bu:B.bn
v=w}if(d.x!=null){w=d.zk(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.x9(u,!1)}else{u.toString
t="Paid "+C.x9(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.x9(w,!1)+" \xb7 "+i+" missed":"Due "+C.x9(w,!1)}w=k.a.d.a?B.e4:B.c
u=A.n(18)
if(d.gUl()&&d.x==null)s=B.bB.j(0.35)
else s=(k.a.d.a?B.bu:B.bn).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cI,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bo:B.m3
o=A.L(d.gUl()&&d.x==null?B.bB.j(0.45):B.cQ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hcH(d.d)
o=A.p(B.A,A.db(C.b_f(A.fKk(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.au
m=x.p
n=A.a([new A.ds(1,B.cn,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaH5())B.d.v(n,A.a([B.ec,A.X(B.OJ,B.cQ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.B7(d.c)
l=k.a.d.a?B.aP:B.au
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aI(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A5.al1,A.B(A.a([o,B.bd,p,B.ad,A.x(A.a([n,B.bF,A.X(B.eE,(k.a.d.a?B.bu:B.bn).j(0.5),j,j,j,18)],m),B.dI,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dOv(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d1,j,j,j,j)}}
C.uI.prototype={}
C.alp.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bj
u=v?B.E:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.X(B.cx,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a3))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iJ,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ay9,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.GR,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eO(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e3)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bzu,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fbr)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.w8,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lH,A.x(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hn,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.az,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bAM,a0,a0,a0,a0)}}
C.aW1.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bj?B.bj:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cD,q,B.U,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.ui,n,q))
return new A.D(B.d1,A.x(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.Tq.prototype={
R(){return new C.bg7()}}
C.bg7.prototype={
gc0N(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.epm,D.eps],l)
for(w=0;w<8;++w){v=D.a4h[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HB:B.CF
q=t===s
r=A.X(r,q?B.eG:B.bU,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bm,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ad,new A.by(1,B.bb,new A.y(v.c,n,B.Ar,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bG(p,p,p,p),new A.bh(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eJ,A.x(A.a([new A.D(B.mM,new A.ca(B.aL,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.BM(!0,new C.alp(v,q.d,q.e,new C.deh(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dei(o,v),n,n,n,n,n,n,!1,B.a3))}k.push(new A.D(D.bB6,A.bI(D.fYJ,n,new C.dej(o,d),A.bo(B.b7,n,n,n,n,B.oL,n,n,new A.b8(A.n(16),B.a0),n,n,n)),n))
return A.bn(!0,new A.cU(new A.aZ(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bFs,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.nt.prototype={
ah(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a9().ae()],x.N,x.z)},
bej(d,e,f){return new C.nt(this.a,e,d,f)}}
C.I6.prototype={
wD(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.I6(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFe(d){var w=null
return this.wD(w,w,w,w,w,d,w,w,w,w,w,w)},
cLW(d){var w=null
return this.wD(w,w,w,w,d,w,w,w,w,w,w,w)},
beh(d,e,f){var w=null
return this.wD(d,w,w,w,w,w,w,w,e,w,f,w)},
cMA(d){var w=null
return this.wD(w,w,w,w,w,w,d,w,w,w,w,w)},
cMJ(d){var w=null
return this.wD(w,w,w,w,w,w,w,w,w,d,w,w)},
cLU(d){var w=null
return this.wD(w,w,w,d,w,w,w,w,w,w,w,w)},
cML(d){var w=null
return this.wD(w,w,w,w,w,w,w,w,w,w,w,d)},
cLR(d){var w=null
return this.wD(w,w,d,w,w,w,w,w,w,w,w,w)},
cLM(d){var w=null
return this.wD(w,d,w,w,w,w,w,w,w,w,w,w)},
G0(d){var w=null
return this.wD(w,w,w,w,w,w,w,d,w,w,w,w)},
cMT(d,e,f,g,h,i,j,k,l,m,n){return this.wD(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cJq(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bQM(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cR(d.h(0,n))).length!==0?B.a.i(A.cR(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cR(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Dv.gev(D.Dv))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a5W)
q=l.$2("frame",D.a5i)
l=l.$2("texture",D.a5e)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cR(d.h(0,"author"))):o
return this.cMT(p,u,t,q,r,A.ra(d.h(0,"ribbon"))?A.GD(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_0.prototype={
R(){return new C.aB9(A.a([],x.I),D.Og)},
ge2(){return this.c}}
C.aB9.prototype={
Z(){var w,v=this
v.a3()
v.f=A.A0(0,1)
w=$.aw()
v.z=new A.au(B.at,w)
v.Q=new A.au(B.at,w)
v.lf()
w=v.a
C.bDK(w.c,w.d).bJ(new C.deY(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.aw()
u.T$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.T$=w
u.P$=0
v.a1()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lm(s.c,s.d),$async$lf)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.deM(t,r))
t.awV()
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
gatv(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awV(){var w,v,u=this.gatv(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saZ(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saZ(0,w==null?"":w)},
ceL(d){this.m(new C.deJ(this,d))
this.awV()},
NR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nt(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aS3(r.c,r.d,s),$async$NR)
case 3:w=4
return A.b(t.lf(),$async$NR)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.qC(t.d,new C.dek(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.del(t,p))
t.awV()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bm(p+1,B.cu,B.kL),$async$NR)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
B2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$B2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gatv()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aS3(o.c,o.d,new C.nt(s,r,q,new A.V(p,0,!1))),$async$B2)
case 3:w=4
return A.b(t.lf(),$async$B2)
case 4:if(t.c==null){w=1
break}t.m(new C.deN(t))
case 1:return A.h(u,v)}})
return A.i($async$B2,v)},
Ov(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ov=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gatv()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.det(r),s,null,!0,!0,x.y),$async$Ov)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDv(s.c,s.d,r.a),$async$Ov)
case 4:t.m(new C.deu(t))
w=5
return A.b(t.lf(),$async$Ov)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Uo(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Ov,v)},
yH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.B2(),$async$yH)
case 5:case 4:if(t.c==null){w=1
break}w=J.cM(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.RE(s,r.r,o,p,q),$async$yH)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hBT(s,r.x,r.r),$async$yH)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lm(s.c,s.d),$async$yH)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nt(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bg(r.c,r.d,l),$async$yH)
case 11:w=12
return A.b(t.lf(),$async$yH)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yH,v)},
a1h(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.B2(),$async$a1h)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyF(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dN(D.zv,new C.deK(t),new C.deL())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mM("Our Family",o,"",""))
for(o=J.aX(t.d);o.C();){n=o.gS(o)
p.push(new H.mM(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hel(o,new H.rH(s,r,"",p,new H.uY(q.d,null,null,null,null,"","","")),null),$async$a1h)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1h,v)},
Oe(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Oe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.B2(),$async$Oe)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.afW,null,new C.dep(t),s,!0,!0,!0,K.a90,!1,!1,x.N),$async$Oe)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cLW(r)
t.m(new C.deq(t,q))
s=t.a
w=7
return A.b(C.Sf(s.c,s.d,q),$async$Oe)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oe,v)},
XJ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.afW,null,new C.dev(t),r,!0,!0,!0,K.a90,!1,!1,x.e),$async$XJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dew(t,s))
r=t.a
w=4
return A.b(C.Sf(r.c,r.d,s),$async$XJ)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bm(0,B.dU,B.nr)
case 1:return A.h(u,v)}})
return A.i($async$XJ,v)},
bSS(d){var w=d.bU(),v=B.a.aY(B.o.u(w.gcg()),2,"0"),u=B.a.aY(B.o.u(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyF(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c00()
if(r.e)w=D.aeD
else if(J.ct(r.d)){w=r.y
v=r.gyF(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fmo,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.D(X.amh,new C.Zi(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kH.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.f63,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dH.j(0.45),B.I,18)],x.V),E.wI,B.n),q,q,q,q,B.O_,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcIt(),q,q,q,q,q,q,!1,B.a3))
w.push(B.W)
w.push(A.ht(D.bSs,D.fYa,r.gaO8(),q))
B.d.v(u,w)}w=A.at(A.ci(A.x(u,B.m,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.eu,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kH.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.B0
u=A.x(A.a([new A.D(D.bCa,w,q),A.E(A.Jt(v,new C.deW(r),J.ad(r.d)+1,q,r.gceK(),u,B.aL),1),r.bFi()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.YO,new A.an(B.a_,q,B.b3,B.t,A.a([D.aPv,A.bn(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
c00(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cM(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Ks(B.e5,"AI",h.gbDa(),!0))
if(h.a.f)f.push(new C.Ks(B.md,"Cover",h.gbNQ(),!1))
if(h.a.f)f.push(new C.Ks(B.wD,"Header",h.gbIP(),!1))
if(J.cM(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Ks(B.uI,"Print",h.gcnQ(),!1))
if(h.a.f&&J.cM(h.d)&&h.r>=0){v=h.w
u=v?B.hB:B.j1
t=v?"Save":"Edit"
f.push(new C.Ks(u,t,v?h.gcua():new C.deG(h),!1))}if(h.a.f)f.push(new C.Ks(B.hT,"Add page",h.gaO8(),!1))
v=C.hxP(h.y.Q)
u=h.gyF(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dEr
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kg.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kH,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bG(i,i,i,i),new A.bh(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kH.j(0.85)
p.push(new A.by(1,B.bb,A.aA(B.c6,A.x(A.a([k,B.bF,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a3),g))}return new C.alp(v,u,t+" \xb7 "+s+" "+r,new C.deH(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
A3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$A3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.B2(),$async$A3)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aX(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=H.a2T(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ch(null,null,!0,null,new C.dem(t,p),s,null,!0,!0,x.N),$async$A3)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yH(),$async$A3)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.E1(),$async$A3)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FD("Swahili (Kiswahili)",!0),$async$A3)
case 18:w=16
break
case 17:w=19
return A.b(t.cF0(o==="sw"?"Swahili (Kiswahili)":"English"),$async$A3)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$A3,v)},
ZE(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.L(E.kg.j(0.3),B.r,1),r=x.p
return new A.D(B.ct,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wI,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.Ks,w,w,w),A.d(g,w,w,w,w,w,w,B.As,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.deI(d,h),w,w,w,w,w,w,w),w)},
E1(){return this.bSm()},
bSm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$E1=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dez(r),a7,null,!0,!0,x.ei),$async$E1)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eC("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ch(null,null,!1,null,new C.deA(o),a7,null,!0,!0,x.H).fs(new C.deB(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cc(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zv[a1]
J.cc(j,i.a)}w=8
return A.b(C.ahE(a0,a7,new C.deC(o),d,l,e,j),$async$E1)
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
if(l!=null&&a6.a)A.a5(l,!0).eN()
l=o
l.sia($.aw())
J.aSw(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.U(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.aj(0,a4)){j=J.r(p,a4)
a7=m.b.h(0,a4).a
a7=j.bej(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bg(j.c,j.d,l),$async$E1)
case 11:w=12
return A.b(r.lf(),$async$E1)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zv[a1].a)
a5=l.cJq(j,12,a7)
l=r.a
w=15
return A.b(C.Sf(l.c,l.d,a5),$async$E1)
case 15:if(r.c!=null)r.m(new C.deD(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bm(0,B.dU,B.nr)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cyJ("Undo",new C.deE(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.eq,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$E1,v)},
FD(d,e){return this.cF1(d,e)},
cF0(d){return this.FD(d,!1)},
cF1(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FD=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eC("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ch(null,null,!1,null,new C.deP(a0),k,null,!0,!0,x.H).fs(new C.deQ(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cc(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a35(m,new C.deR(a0)),$async$FD)
case 10:w=8
break
case 9:w=11
return A.b(C.bFd(new C.deS(a0),m,a2),$async$FD)
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
if(o!=null&&f.a)A.a5(o,!0).eN()
o=a0
o.sia($.aw())
J.aSw(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bej(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bg(k.c,k.d,o),$async$FD)
case 12:w=13
return A.b(r.lf(),$async$FD)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cyJ("Undo",new C.deT(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FD,v)},
bFi(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.den(v):u
r=A.aH(u,u,u,u,A.X(D.bO8,s?D.kH:B.aX,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cM(v.d)&&!v.w&&v.r>=0)s=A.ht(A.X(B.wm,B.Gd,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gd,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbNq(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kH.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.deo(v):u
return A.bn(!0,new A.D(D.bBZ,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kH:B.aX,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.a_4.prototype={
R(){return new C.bgw(new A.au(B.at,$.aw()))}}
C.bgw.prototype={
ga2q(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a1()},
gbQZ(){var w,v=this.ga2q()
A:{if("cover"===v){w=D.d5X
break A}if("book"===v){w=D.d1j
break A}w=D.dwU
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.kg.j(0.5),n=x.p,m=A.B(A.a([D.dEs,B.as,D.bHA,A.aH(q,q,q,q,B.li,q,q,q,new C.dgJ(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jw(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.dgK(r),r.ga2q()==="page",q,q,q,q))
if(r.a.d)l.push(A.jw(q,q,q,D.fSI,q,new C.dgL(r),r.ga2q()==="book",q,q,q,q))
l.push(A.jw(q,q,q,D.fFw,q,new C.dgM(r),r.ga2q()==="cover",q,q,q,q))
l=A.bX(B.bG,l,B.br,q,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.Y,!1,q,!0,B.t,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b6(4,A.n(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kz,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbQZ(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.n0(q,B.c.j(0.08),new A.y(s,q,B.Kp,q,q,q,q,q,q,q,q,q),B.he,new C.dgN(r,s),q,q,q,q))}return A.eU(q,E.Bw,A.ci(A.x(A.a([m,B.W,D.fW1,B.am,l,B.ae,k,B.N,A.bX(B.bG,w,B.br,q,6,6),B.aB,A.dj(D.bSp,D.fWP,new C.dgO(r,d),A.bo(B.b7,q,q,q,q,B.oL,q,q,new A.b8(A.n(16),B.a0),q,q,q)),B.av,D.fQX],n),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.fm,q,q,B.ah),q,q,q,D.alZ,B.d8,q,new A.b8(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.a_2.prototype={
R(){return new C.aBc(A.a([],x.gA))},
ge2(){return this.c}}
C.afk.prototype={}
C.aBc.prototype={
Z(){this.a3()
this.lf()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.RI(p.c,p.d),$async$lf)
case 3:o=e
n=A.a([],x.gA)
p=J.aX(o)
case 4:if(!p.C()){w=5
break}s=p.gS(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bDK(r.c,q),$async$lf)
case 6:j=e
i=J
w=7
return A.b(C.Lm(t.a.c,q),$async$lf)
case 7:m.push(new l.afk(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dfc(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
b9E(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QF(d,e){return this.cgi(0,e)},
cgi(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).cc(A.ej(new C.dfb(u,e),!0,null,x.y)),$async$QF)
case 2:t=g
w=3
return A.b(u.lf(),$async$QF)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aT9)
return A.h(null,v)}})
return A.i($async$QF,v)},
FG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aT5)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agY(s.c,s.d),$async$FG)
case 5:q=e
w=6
return A.b(t.lf(),$async$FG)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QF(0,B.d.fG(t.d,new C.dfg(q))),$async$FG)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RE(p,s.f,r,n,o),$async$FG)
case 10:m=e
w=11
return A.b(t.lf(),$async$FG)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aT9)
case 1:return A.h(u,v)}})
return A.i($async$FG,v)},
Q7(d,e){return this.crQ(0,e)},
crQ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dff(t,e),s,null,!0,!0,x.y),$async$Q7)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3h(s.c,s.d,e.a),$async$Q7)
case 4:w=5
return A.b(t.lf(),$async$Q7)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q7,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bFl(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.L(E.kg.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fK(0.7142857142857143,A.p(n,A.x(A.a([D.dEt,B.ae,D.eoo,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kH.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcIp(),n,n,n,n,n,n,!1,B.a3))}w=A.n(22)
v=A.L(E.kg.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c_h,B.f,n,n,new A.o(B.w.j(0.3),n,A.L(E.kg.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dfh(d),n,n,n,n,n,n,!1,B.a3)
r=A.n(14)
q=B.w.j(0.3)
p=A.L(E.kg.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bHY,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.flo,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h6,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c5d,B.n),n,n,n,Ax.NK,D.bzZ,n,n,n)
if(o.e)k=D.aeD
else k=k.length===0?D.bb2:A.cu(new C.dfi(k))
return A.c6(n,D.YO,new A.an(B.a_,n,B.b3,B.t,A.a([D.aPv,A.bn(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bFl(d){var w,v,u=this,t=null,s=u.b9E(d),r=d.c,q=x.p,p=A.a([A.bT(0,A.eO(B.A,new A.a4(300,420,new C.Zi(d.b,s,r,t),t),B.f,B.dz),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.p(t,D.bZB,B.f,t,t,new A.o(B.w.j(0.55),t,A.L(B.aX,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.df9(u,d),t,t,t,t,t,t,!1,B.a3),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.fkZ,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fK(0.7142857142857143,new A.an(B.a_,t,B.ab,B.t,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kH.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dfa(u,d),t,t,t,t,t,t,!1,B.a3)}}
C.Ks.prototype={}
C.Zi.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dN(D.zv,new C.cNx(m),new C.cNy()),j=m.c,i=D.Dv.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mk:B.b9
v=new C.cNz(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.el6,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bdI(j.x,h,l),B.ax),0,0,0),A.ap(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cO(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bh(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ami,8,0.85,2.2),v.$4(D.bET,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ami,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.D(D.bEP,A.b4(l,l,l,new C.bdz(h,l),B.ax),l),0,0,0))
r=A.X(D.aAX[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ay9,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bT(0,new A.D(D.bFj,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aIb(l),D.faw),l,l,l,46,0,l))
return A.p(l,A.bx(D.ade,new A.an(B.a_,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.ade,i,new A.a9(B.az,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdI.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e6()
f.cZ(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.J()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.G()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.S()
q=A.J()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.G()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ag()
l=f.ag()
k=f.ag()
$.S()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=t.j(0.25+f.ag()*0.5).gp(0)
r=j.G()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.S()
j=A.a([],l)
h=new A.aF(k.r,B.ag,null,null,j)
j.push(new A.aY(v,t))
k=i-0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bt())
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbu().a.snapshot()
o.drawPath((h.e=new A.cd(k)).a,r)
r.delete()}break
default:$.S()
w=A.J()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.J()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bdz.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.J(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.a9
k.c=2.4
k.d=B.by
for(w=e.a,v=e.b,v=[D.f0y,new A.cw([w,0,-1,1]),new A.cw([0,v,1,-1]),new A.cw([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(l,B.ag,null,null,s)
s.push(new A.aY(r+p*34,q))
s.push(new A.aq(r,q))
s.push(new A.aq(r,q+o*34))
m=k.G()
s=n.gbu().a.snapshot()
w.drawPath((n.e=new A.cd(s)).a,m)
m.delete()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uJ.prototype={}
C.ZB.prototype={
R(){return new C.bdG()}}
C.bdG.prototype={
goh(){var w=this.d
return w===$?this.d=this.a.c:w},
gyF(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bb(w.b,B.b4,B.aO),$.aw())}return v},
gaCn(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bb(w.c,B.b4,B.aO),$.aw())}return v},
gas2(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bb(w.y,B.b4,B.aO),$.aw())}return v},
t(){var w=this,v=w.gyF(0),u=v.T$=$.aw()
v.P$=0
v=w.gaCn()
v.T$=u
v.P$=0
v=w.gas2()
v.T$=u
v.P$=0
w.a1()},
asH(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jw(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d66(this,f,u),e===u,s,s,s,s))}return A.bX(B.bG,r,B.br,s,6,8)},
ayn(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b6(4,A.n(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.ms,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goh(),a0=f.gyF(0),a1=a0.a.a,a2=f.gaCn(),a3=a2.a.a,a4=f.gas2(),a5=d.beh(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a4(190,260,A.eO(B.A,new A.a4(270,370,new C.Zi(a5,d,f.a.e,e),e),B.f,B.dz),e),e,e,e)
a0=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.ayn("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d6v(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.ayn("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d6w(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zv[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aX
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bG(o,o,o,o),e,e,new A.a9(B.az,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aC
v.push(A.aA(e,A.x(A.a([p,B.cS,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d6x(f,t),e,e,e,e,e,e,!1,B.a3))}v=A.bX(B.bG,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eG:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.X(D.aAX[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bG(o,o,o,o),new A.bh(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d6y(f,n),e,e,e,e,e,e,!1,B.a3))}q=A.bX(B.bG,q,B.br,e,8,8)
a4=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.ayn("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d6z(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vw,e,e,e)
m=A.a([],w)
for(l=D.Dv.gdR(D.Dv),l=l.gaf(l);l.C();){k=l.gS(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aX
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bG(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aC
m.push(A.aA(e,A.x(A.a([j,B.bF,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d6A(f,k),e,e,e,e,e,e,!1,B.a3))}m=A.bX(B.bG,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vw,e,e,e)
k=f.goh()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cU(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fQp,B.ae,d,B.aQ,a0,B.W,a2,B.aB,D.fWB,B.N,v,B.aB,D.fQy,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.kS(e,9,""+B.k.V(f.goh().f),36,18,new C.d6B(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vw,e,e,e),B.am,f.asH(D.a5W,f.goh().r,new C.d6C(f),D.dA6),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vw,e,e,e),B.am,f.asH(D.a5i,f.goh().w,new C.d6D(f),D.dAc),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vw,e,e,e),B.am,f.asH(D.a5e,f.goh().x,new C.d6F(f),D.dBH),B.am,A.iP(e,B.b7,e,B.af,e,new C.d6G(f),e,e,e,D.fKC,f.goh().z),B.bx,A.bI(D.fP7,e,new C.d6H(f,a6),A.bo(B.b7,e,e,e,e,B.oL,e,e,new A.b8(A.n(16),B.a0),e,e,e))],w),e,e,A_.alP,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aIb.prototype={
a4(d,e){var w,v,u,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bt())
u=A.J()
u.sam(D.c5U.aA(0,new A.a3(0,0,0+w,0+v)))
d.aK(t,u)},
av(d){return!1}}
C.bj4.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.J()
w.sam(D.c4U.aA(0,new A.a3(0,0,a3,a4)))
a5.aQ(new A.a3(0,0,a3,a4),w)
v=B.k.cO(a2/112)
u=new A.e6()
u.cZ(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ag()*20
l=56+u.ag()*40
k=D.d5W[u.ap(9)]
j=u.ap(14)
J.bl(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.br(i,B.ht)
g=new A.ao(B.Q,B.M,B.S,B.T,B.R)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a5,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.G()
w.drawRRect(A.e7(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ao(B.Q,B.M,B.S,B.T,B.R)
e.r=E.kg.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bH(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=E.kg.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bH(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.ap(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.sam(D.c4f.aA(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bH(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.w.j(0.5).gp(0)
p.z=B.kS
d=p.G()
w.drawRect(A.bH(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.J()
w.r=D.beP.j(0.72).gp(0)
a5.aQ(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.J()
a4.sam(new A.c_(B.A,0.5,B.x,a0,0,A.a([D.bn0.j(0.22),B.L],t),a0,a0).aA(0,A.bY(new A.u(w,a2),a1)))
a5.ad(new A.u(w,a2),a1,a4)},
av(d){return!1}}
C.bbT.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cO(14,w*2,v*2.2,v*2,o,o,new A.l2(new A.o(A.ar(D.kH,D.bs2,w/4),o,new A.bG(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.LC,o,o,B.n),B.bh,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aL6,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kg.j(0.6),o,o,new A.bh(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qK,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b3e,u,D.c5S,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.ds,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aIb(o),D.far),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aW1(p.y,r,L.iX,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iX.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fzC,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iX.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iX.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fqh,!0,B.a4,B.Al,B.an,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fzu,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iX.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.FX.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.FX.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.FX.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iX.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yv(A.cT(A.a([A.cT(o,o,o,o,o,o,o,o,o,D.ftt,B.a.au(k,0,1)),A.cT(o,o,o,o,o,o,o,o,o,o,B.a.b3(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iX.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ci(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i7,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iX.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.LC,new A.an(B.a_,o,B.ab,B.t,A.a([t,new A.D(D.bEl,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ap(0,A.c4(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bh),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.LC,v,D.c6p,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.ab,B.t,l,o)}}
C.alq.prototype={
R(){return new C.alr(new A.eC(0,$.aw()),new C.bSA(),new C.alJ(),D.hwE,null,null)},
gd0(){return this.d}}
C.a1i.prototype={
a6(){return"_Step."+this.b}}
C.alr.prototype={
gCa(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDG(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.MI(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gTH(){var w=this.ghd(0)
return w.gz_()==null?"Babu":B.a.i(w.gz_().b)},
Z(){var w,v=this
v.a3()
w=v.ghd(0).gz_()
w=w==null?null:w.c
v.r.b=w===D.oj
w=v.pW(new C.bQW(v))
w.fZ(0)
v.x!==$&&A.aQ()
v.x=w
v.a2n("Come closer, my children. I am "+v.gTH()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a2(0)
v=w.z
if(v!=null)v.a2(0)
w.w.t()
v=w.f
v.T$=$.aw()
v.P$=0
w.buQ()},
a2n(d){var w=this,v=w.y
if(v!=null)v.a2(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.df(D.akr,new C.bQQ(w))},
brg(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a2(0)
v.m(new C.bQZ(v))},
adE(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
br9(){return this.b9b()},
b9b(){var w=this,v=w.gCa()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bQR(w))
w.a2n(u)
v=w.z
if(v!=null)v.a2(0)
w.z=A.cD(B.m6,new C.bQS(w))},
cJx(){var w=this
w.m(new C.bQV(w))
w.a2n(w.gCa()[w.as].a)},
KR(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aco)return
w=p.gCa()
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
t.r=s.a+1.5}q=new A.e6()
q.cZ(v*7+d)
p.m(new C.bQU(p,d,u,q))
p.a2n(u?D.dlp[q.ap(4)]+" "+w[p.as].d:D.di4[q.ap(3)]+" "+w[p.as].d)},
kK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCa()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFX(t.at,t.ay,p)
t.m(new C.bQX(t,s))
t.a2n(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BC(t.a.d,s),$async$kK)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BD(r.d,r.c.a,"fire",t.at*10),$async$kK)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bQY())
w=1
break
case 4:++t.as
t.b9b()
case 1:return A.h(u,v)}})
return A.i($async$kK,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.XV,new A.an(B.a_,v,B.ab,B.t,A.a([A.bT(0,new A.er(A.b4(v,v,v,new C.aW6(u,w.r,w.w,u),B.ax),v),0,0,0),A.bn(!0,A.x(A.a([w.cat(0),B.b2,w.bQa()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
cat(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.PC,s,s,s,new C.bQT(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCa().length;++w){v=t.as
if(w<v||t.Q===D.b_P)v=B.cJ
else v=w===v?B.c:B.aX
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bh(u,u,u,u),s,s,B.n),s,7,s,D.bzI,s,s,s,22))}p=A.E(A.x(A.a([D.fHo,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.L(B.fs,B.r,1)
return new A.D(D.bFw,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iw,s,s,s),B.f,s,s,new A.o(B.aS,s,u,v,s,s,B.n),s,s,s,s,B.h6,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bQa(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghd(0).gz_()
if(h==null)w=1
else w=h.c===D.oj?0:1
v=j.dx
u=j.db
t=D.q9.j(0.96)
s=A.n(22)
r=A.L(B.cJ,B.r,3)
q=A.b4(i,i,i,new C.boE(w,i),B.ax)
p=A.d(j.Q===D.aco?j.gTH()+" asks":"Elder "+j.gTH(),i,i,i,i,i,i,D.aUm,i,i,i)
o=j.db
o=B.a.au(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c6,A.B(A.a([new A.a4(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aUB,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbrf(),i,i,i,i,i,i,!1,B.a3)
switch(j.Q.a){case 0:v=A.at(j.a9N("Sit down by the fire",j.gbr8()),i,i,i)
break
case 1:v=A.at(j.a9N("Ask me, Elder",j.gcJw()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCa()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.ly,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,new A.y(u[m],i,D.aUx,i,B.K,i,i,i,i,i,i,i),B.f,i,D.adR,new A.o(D.ajm,i,new A.bG(l,l,l,l),new A.bh(q,q,q,q),i,i,B.n),i,i,i,i,V.wb,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bQN(j,m),i,i,i,i,i,i,!1,B.a3))}v=A.bX(B.bG,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kp:Ak.ape
u=A.X(u,v?B.ej:D.ly,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ej:D.ly,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCa().length?"Finish":"Next story"
v=A.B(A.a([u,B.ad,q,j.a9N(v,j.gqe(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCa().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aUQ,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQh(u)
q=C.aQh(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aaO,i,i,i))}v.push(B.N)
v.push(j.a9N("Back to the games",new C.bQO(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aCt,i,B.n),i,i,i,B.BW,B.bg,i,i,i)},
a9N(d,e){var w=null,v=A.n(16),u=A.L(B.cJ,B.r,2)
return A.aA(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.Ks,w,w,w),B.f,w,w,new A.o(D.ly,w,u,v,w,w,B.n),w,w,w,w,D.bDe,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a3)}}
C.boE.prototype={
a4(d,e){Y.fTw(d,e.ek(B.I),e.gdE()*0.45,this.b,0,0.4)},
av(d){return d.b!==this.b}}
C.aBa.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bSA.prototype={}
C.t9.prototype={}
C.boF.prototype={}
C.alJ.prototype={
Mq(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.i8B(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aW6.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Mq(e).b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
j.drawPicture(i)
i=e.a
w=e.b
v=Math.min(i/450,w/900)
J.bl(j.save())
j.translate((i-450*v)/2,(w-900*v)/2)
d.bW(0,v)
n.cz9(d,l)
n.bOK(d,l)
n.cHk(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bl(j.save())
j.translate(225,580)
d.pc(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.J()
r=x.O
q=x.n
s.sam(A.tz(B.I,t,A.a([D.bqR.j(0.55*u),F.N_.j(0.2*u),B.L],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bSs(n,d,l,k)),new A.z(540,new C.bSt(n,d,l,k)),new A.z(546,new C.bSu(n,d,l,k)),new A.z(574,new C.bSv(n,d,l,k)),new A.z(612,new C.bSw(n,d,l,k)),new A.z(650,new C.bSx(n,d,l,k)),new A.z(656,new C.bSy(n,d,l,k))],x.E)
B.d.aX(p,new C.bSz())
for(o=0;o<7;++o)p[o].b.$0()
n.bFE(d,l,k)
n.bSk(d,l)
j.restore()
$.S()
j=A.J()
j.sam(A.tz(new A.u(i/2,w*0.6),e.ganJ()*0.75,A.a([B.L,D.beJ],r),A.a([0.55,1],q),B.x,m,m,0))
d.aQ(new A.a3(0,0,0+i,0+w),j)},
av(d){return d.c!==this.c||d.d!==this.d},
cz9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e6()
g.cZ(3)
for(w=d.a,v=0;v<36;++v){u=g.ag()
t=g.ag()
s=Math.sin(e*(1.5+g.ag()*2)+v)
r=g.ag()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.u(60+o*220,70+o*90)
d.bo(n,n.aG(0,D.ekE),C.ix(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ag,null,null,i)
k=q+k*4
i.push(new A.aY(r-6,k))
h=q-3
i.push(new A.c5(r-2,h,r,q))
i.push(new A.c5(r+2,h,r+6,k))
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.b=B.a9
r.c=1.6
r.r=D.bht.gp(0)
r.d=B.by
r.e=B.dQ
p=r.G()
r=j.gbu().a.snapshot()
w.drawPath((j.e=new A.cd(r)).a,p)
p.delete()}},
bOK(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.azs[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bK(new A.u(o,l),m*0.74,p*0.5)
j=Ac.G6.j(u)
$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bH(k),h)
h.delete()
p=A.bK(new A.u(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=Q.xR.j(t).gp(0)
h=l.G()
v.drawOval(A.bH(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=D.agI.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cHk(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bD3(d,D.ekA,0.9,a0,D.hst,!1,!1,D.acm,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ag,e,e,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bt())
t=A.J()
t.r=D.aiF.gp(0)
d.aK(u,t)
C.bD3(d,D.ekC,0.95,a0,D.hso,!1,!1,D.acn,1,!0)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c5(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c5(431,553,421,548))
t.D(new A.bt())
u=A.J()
u.r=F.FD.gp(0)
d.aK(t,u)
u=A.bK(D.ekB,8,28)
t=A.J()
t.r=D.bt7.gp(0)
d.dQ(u,t)
C.bD3(d,new A.u(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hsu,!0,!1,D.WQ,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dQ(A.bK(new A.u(s+q*16,r-6),16,11),C.ix(D.aiv,1.8))
u=q<0
C.bD3(d,new A.u(s-q*6,r),0.62,a0,D.hsw,!1,u,D.WQ,2.2,!1)
C.bD3(d,new A.u(s-q*32,r+4),0.58,a0+1,D.hss,!1,u,D.WQ,2.2,!1)
this.bV2(d,D.ekf,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bK(new A.u(n,m),8,11)
j=o===1
i=j?D.aiq:D.aj2
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bH(k),g)
g.delete()
k=j?D.aiq:D.aj2
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.ay.gp(0)
j.d=B.by
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.ay.gp(0)
j.d=B.by
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bK(D.a7U,15+Math.sin(a0*2)*0.8,40)
t=A.J()
t.r=D.ah3.gp(0)
d.dQ(u,t)
u=A.bK(D.a7U.a7(0,new A.u(-14,f?-9:-2)),12,15)
t=A.J()
t.r=D.bjw.gp(0)
d.dQ(u,t)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bt())
u=A.J()
u.r=D.bjG.gp(0)
d.aK(t,u)
u=D.a7U.a7(0,new A.u(-17,f?-9:-2))
t=A.J()
t.r=B.i5.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ag,e,e,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(a0*8)
v.D(new A.c5(180,588+w*(f?6:0),178,595))
d.aK(v,C.ix(D.ah3,3.5))},
bV2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a7(0,new A.u(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=2
m.r=D.Y5.gp(0)
m.d=B.by
m.e=B.dQ
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bK(j,17,32)
s=$.S()
r=A.J()
r.r=D.FB.gp(0)
d.dQ(w,r)
r=A.bK(j.a7(0,D.ejG),7,26)
w=A.ar(D.FB,B.w,0.12)
w.toString
q=A.J()
q.r=w.gp(0)
d.dQ(r,q)
s=new A.aF(s.r,B.ag,null,null,A.a([],x.v))
s.D(new A.aY(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bt())
t=A.J()
t.r=D.FB.gp(0)
d.aK(s,t)
t=A.bK(j.a7(0,new A.u(24,-7+k)),9,12)
s=A.J()
s.r=D.FB.gp(0)
d.dQ(t,s)
s=-11+k
d.bo(j.a7(0,new A.u(22,s)),j.a7(0,new A.u(21,-17+k)),C.ix(D.Y5,1.6))
d.bo(j.a7(0,new A.u(26,s)),j.a7(0,new A.u(28,-16+k)),C.ix(D.Y5,1.6))
s=j.a7(0,new A.u(26,-8+k))
t=A.J()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a7(0,new A.u(26,-3+k)),j.a7(0,new A.u(26,1+k)),C.ix(D.bmm,1.4))
d.bo(j.a7(0,D.emD),j.a7(0,new A.u(-19,-7+Math.sin(f*7)*2)),C.ix(D.FB,2.4))},
bSi(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bK(new A.u(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.brP.gp(0)
r=s.G()
w.drawOval(A.bH(t),r)
r.delete()}}t=A.bK(D.a7W.a7(0,B.cy),17,52)
$.S()
s=A.J()
s.r=D.beh.gp(0)
a5.dQ(t,s)
s=A.bK(D.a7W.a7(0,B.cy),12,44)
t=D.bhR.j(0.6+0.3*Math.sin(a6*6))
q=A.J()
q.r=t.gp(0)
a5.dQ(s,q)
for(p=0;p<3;++p){u=D.dhy[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=7
m.r=D.FQ.gp(0)
m.d=B.by
m.e=B.dQ
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.Be.j(0.6)
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.b=B.a9
l.c=2
l.r=m.gp(0)
l.d=B.by
l.e=B.dQ
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eXF,D.eYd,D.eZm,D.eZH,D.eZk]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bpe,D.blJ,D.brg][i]
for(n=i===0,m=1-i*0.15,p=0;p<5;++p){f=j[p]
l=f.b
e=f.c
d=k*l*h*(0.9+0.12*Math.sin(t+e)+0.06*Math.sin(s+e*2))
a0=Math.sin(q+e)*5*(d/k)
a1=225+f.a*m
a2=(12+8*a7.w)*l*h
l=$.S()
e=A.a([],o)
a3=new A.aF(l.r,B.ag,null,null,e)
e.push(new A.aY(a1-a2,578))
l=a1+a0*0.6
e.push(new A.kO(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.kO(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bt())
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbu().a.snapshot()
w.drawPath((a3.e=new A.cd(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=G.aj0.j((1-a4)*0.9)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.agI.j(0.1*(1-a4))
$.S()
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bSk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.bth.j(0.18*o)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=D.bn5.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c42(d,e){switch(d){case 0:return e.b?D.hsp:D.b_n
case 1:return e.b?D.hsv:D.b_l
case 2:return D.b_k
case 3:return D.b_j
case 4:return D.b_m
default:return D.b_o}},
aCB(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QY(d,e,f,g){var w,v=this,u=D.a5q[e],t=v.c42(e,g),s=new C.boF(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5q[e],l=e===0
m=B.k.E(((l?D.aL_:D.aL4).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8_
s.as=D.DY
if(l){s.a=o?v.aCB(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.u(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.u(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.DY
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.u(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.u(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.u(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.u(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ejO
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ela
if(e===4)s.as=new A.u(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.u(-3-m,p)
s.as=new A.u(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.eny
s.as=D.aLh}if(e===2&&g.x!=null&&f<g.y){s.a=v.aCB(f,5)
s.b=0.4
s.as=new A.u(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aCB(f,e*3)
s.b=0.5
s.c=0.4}}C.hwr(d,u.a,u.b*1.2,t,s,f,e,null)},
bFE(d,e,f){var w=new C.bSr(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdd(d){return this.c}}
C.aft.prototype={
a6(){return"_Stand."+this.b}}
C.ads.prototype={}
C.lo.prototype={}
C.bRb.prototype={
bAj(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
FW(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aX(r,new C.bRc())
return r},
aqN(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aMe(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
ama(d){var w,v,u=A.aV(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.M(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gz_(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aX(w,new C.bRd(this))
return B.d.gI(w)}}
C.atM.prototype={}
C.zm.prototype={}
C.ako.prototype={
gBH(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bM1(),A.T(w).k("Y<1>")).gK(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ah(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mq.prototype={
gaoU(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
if(t.gBH(0))s.push(t)}return s},
ah(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
d_C(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaoU(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.K)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lo(B.a.i(s.a),p,B.d.cp(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.ba8.prototype={}
C.a9A.prototype={}
C.bhn.prototype={}
C.afr.prototype={}
C.ajD.prototype={
R(){return new C.ajE(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd0(){return this.d}}
C.ajE.prototype={
gMJ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDG(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gb9x(){var w,v=this,u=v.e
if(u===$){w=v.pW(v.gcav())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Z(){this.a3()
this.gb9x().fZ(0)},
t(){this.gb9x().t()
this.buL()},
fZ(d){this.m(new C.bKb(this))},
caw(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fB(0,v)
if(w.c!=null)w.m(new C.bK6())},
b7T(){var w,v,u,t=this,s=t.r
B.d.aa(s)
w=t.gMJ()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhn(u,(u+0.5)/v,w[t.x].b[u]))},
fB(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bKc())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c6S()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMJ()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asf(v,0.8,B.cJ)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asf(m.cy,0.8,G.nc)
m.aYy("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asf(q,0.88,D.ly)
p=m.gMJ()[m.x]
n=p.c
if(u===n){m.aYy("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asf(d,e,f){var w,v,u,t=new A.e6()
t.cZ(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ag()*3.141592653589793*2
w.push(new C.afr(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aYy(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Q8()}},
c6S(){var w=this
if(w.x+1>=w.gMJ().length){w.Q8()
return}++w.x
w.b7T()},
Q8(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Q8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMJ().length
r=C.bFX(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bK4())
w=2
return A.b(C.BC(u.a.d,r),$async$Q8)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BD(t.d,t.c.a,"catch",u.z),$async$Q8)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bK5())
return A.h(null,v)}})
return A.i($async$Q8,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cau()
else w=v.ch?v.cax():A.at(new A.D(B.eu,A.x(A.a([D.aVL,B.N,D.fJ1,B.W,D.fPc,B.dT,C.up("Play",v.geX(v),B.cJ,B.hp,D.fr)],x.p),B.m,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tx("Calabash Catch",w,B.f2,u)},
cax(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hC:B.Hl
p.push(A.X(u,v?B.aw:B.bU,r,r,r,22))}p.push(B.b2)
v=s.x
u=s.gMJ()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aUk,r,r,r))
p.push(B.bd)
v=A.n(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iw,r,r,r),B.f,r,r,new A.o(B.bz,r,r,v,r,r,B.n),r,r,r,r,B.GB,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.L(B.cJ,B.r,3)
return A.x(A.a([new A.D(D.bB1,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.ftl,B.K,r,r),B.f,r,r,new A.o(D.q9,r,t,v,r,r,B.n),r,r,r,B.eZ,B.bg,r,r,1/0),B.am,A.E(A.cu(new C.bKa(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
cau(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pK,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMJ().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vf,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bbL,u,t,B.aQ,new C.I8(s,r,w.cx,v),B.aQ,A.at(C.up("Back to the games",new C.bK3(w),B.cJ,B.ko,D.fr),v,v,v)],x.p),v,v,B.aa,v,v,B.ah,!1)}}
C.bcw.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.J()
a4.sam(A.jy(B.I,new A.u(0,a1),D.d_V,G.azK,B.x,d))
a5.aQ(new A.a3(0,0,a2,0+a1),a4)
a4=A.J()
a4.r=G.N3.gp(0)
a5.ad(new A.u(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ag,d,d,w)
a3=a1*0.7
v.D(new A.aY(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.bx(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.J()
w.r=D.biL.gp(0)
a5.aK(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ag,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aY(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c5(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c5(r+14,t,r+26,w))
a3.D(new A.bt())
w=A.J()
w.r=D.afL.gp(0)
a5.aK(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.clN[q]
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.afL.gp(0)
o.c=7
o.d=B.by
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.af4.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.J()
w.r=D.bjE.gp(0)
a5.aQ(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.ahm.gp(0)
s.c=2
n=s.G()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.K)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bK(new A.u(u,s),12,54)
$.S()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.ly.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bH(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bl(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.ags.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.boh.gp(0)
o.c=4
o.d=B.by
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.sam(A.tz(D.eml,46,D.d8m,B.De,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bK(D.emr,8,12)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bH(o),n)
n.delete()
j=new A.iH(new A.es(l.c,d,d,B.cL,d,d,d,d,d,d,D.frc),B.K,B.bX,new A.jg(1),d,d,3,d,B.bV,d)
j.o2(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.br(A.bK(B.cI,o.gba(o)+8,k),B.fE)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.q9.gp(0)
n=k.G()
t.drawRRect(A.e7(i),n)
n.delete()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.ly.gp(0)
k.b=B.a9
k.c=1.5
n=k.G()
t.drawRRect(A.e7(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a4(a5,new A.u(-o/2,4-k.gba(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
Y.B2(a5,new A.u(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dH,F.mH,!1,(w+1)/2)
g=A.bK(new A.u(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ag,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aY(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c5(g.gbL().a,o+8,w+8,o))
a4.D(new A.bt())
k=A.J()
k.r=D.YU.gp(0)
a5.aK(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=D.Be.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.J()
o.r=G.nc.gp(0)
a5.aQ(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.J()
o.r=D.biR.gp(0)
a5.dQ(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.K)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fz(d,d,d,d,A.cT(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cJ.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,K.D7,d,d),"+"+a3),B.a4,B.bX,d,B.dA,B.bV)
j.eg()
j.a4(a5,new A.u(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
av(d){return!0}}
C.Qm.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aB8(w.c,w.f,v),B.ax),s=A.n(10),r=A.L(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.x(A.a([new A.a4(u,u,t,v),B.cS,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.fjS,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mN,v,v,v)],x.p),B.m,v,B.e,B.P,0,B.p),v)},
gY(d){return this.e}}
C.aB8.prototype={
a4(d,e){var w=e.ek(B.I),v=e.gdE(),u=this.c?0.8:0
return Y.fTw(d,w,v*0.44,this.b,0,u)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.azz.prototype={}
C.aun.prototype={
R(){return new C.auo(A.U(x.S,x.cq),null,null)},
gd0(){return this.d}}
C.auo.prototype={
gkP(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hBD(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaEI(){var w=this.z
return w===$?this.z=this.Xc(0):w},
giZ(){var w,v=this.Q
if(v===$){w=this.gkP()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
Xc(d){var w,v,u,t,s=this.gkP()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azz(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azz(v[t],u[t],-1))
v=new A.e6()
v.cZ(this.a.e*31+d)
B.d.e_(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.du(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eL$
u.b=!1
B.d.aa(u.a)
u=u.gop()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dU$.a.aa(0)
v.qu()}this.bvd()},
cPD(d,e){var w,v,u,t,s,r=this
if(d>=r.giZ().length||r.giZ()[d]!==-1||B.d.q(r.giZ(),e))return
w=r.gaEI()[e]
v=r.gkP()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cp1(r,e,w,v))
A.cD(B.lE,new C.cp2(r))
return}++r.r
u=A.bm(null,B.hz,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cp3(r,d,e,w,v))
u.cq(0)},
kK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkP()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cG(n,0,new C.cp4())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cp5(t,r))
w=5
return A.b(C.BC(t.a.d,r),$async$kK)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BD(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kK)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cp6())
w=1
break
case 4:for(o=t.as,n=new A.du(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eL$
p.b=!1
B.d.aa(p.a)
p=p.gop()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dU$.a.aa(0)
q.qu()}o.aa(0)
t.m(new C.cp7(t))
case 1:return A.h(u,v)}})
return A.i($async$kK,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pK,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vf,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tx(q,A.cl(A.a([D.aeB,w,v,B.aQ,new C.I8(u,t,r.ch,p),B.aQ,A.at(C.up("Back to the games",new C.coY(d),B.cJ,B.ko,D.fr),p,p,p)],x.p),p,p,B.aa,p,p,B.ah,!1),B.f2,p)}w=r.gkP()
v=r.e
s=w[v]
return new C.tx(q,new A.D(B.ul,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aUf,B.K,p,p),A.E(A.cu(new C.coZ(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f2,p)}}
C.bc1.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Y(b3,new C.cOB(),A.T(b3).k("Y<1>")).gK(0),b5=b0.b,b6=b5.a7(0,B.Jo)
$.S()
w=A.J()
w.r=D.lz.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a7(0,D.eiV)
u=A.J()
u.r=B.oc.j(0.5).gp(0)
u.c=10
u.d=B.by
b7.bo(new A.u(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dU.aw(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ag,b1,b1,j)
j.push(new A.aY(u,b5))
j.push(new A.c5((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ag,b1,b1,A.bp(j,!0,r)),m=A.a([],q),h=new A.rs(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.ba(A.jE(b2));--g
f=new A.BA(h,g)
e=0
for(;;){h.ii()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.ii()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cw([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a0.r=B.aX.gp(0)
a0.b=B.a9
a0.c=3
a1=a0.G()
a0=d.gbu().a.snapshot()
p.drawPath((d.e=new A.cd(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bp(j,!0,r)),m=A.a([],q),j=new A.rs(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.ba(A.jE(b2));--a2
j.ii()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cw([new A.BA(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a4.r=D.G3.gp(0)
a4.b=B.a9
a4.c=g
a4.d=B.by
a1=a4.G()
a4=a3.gbu().a.snapshot()
p.drawPath((a3.e=new A.cd(a4)).a,a1)
a1.delete()
j.ii()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.ii()
a5=m[a2].Hj(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bK(new A.u(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a8.r=B.ba.gp(0)
a1=a8.G()
p.drawOval(A.bH(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.iH(D.fjl,B.a4,B.bX,new A.jg(1),b1,b1,b1,b1,B.bV,b1)
a9.eg()
a9.a4(b7,new A.u(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
av(d){return!0}}
C.ayj.prototype={
R(){return new C.ayk(A.aV(x.S))},
gd0(){return this.d}}
C.ayk.prototype={
gkP(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hCy(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Z(){this.a3()
this.b81()},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.a1()},
b81(){var w=this.ch
if(w!=null)w.a2(0)
this.ch=A.df(B.rC,new C.cDW(this))},
boT(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkP()[v.e]
if(w.e[d]===w.b)v.m(new C.cE3(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cE4(v,d))
A.cD(B.iI,new C.cE5(v))}},
cV6(){var w=this
if(!w.as&&w.f<w.gkP()[w.e].d.length)w.m(new C.cE6(w))},
kK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkP()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a2(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cE7(t,s))
w=5
return A.b(C.BC(t.a.d,s),$async$kK)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BD(q.d,q.c.a,"who",t.r),$async$kK)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cE8())
w=1
break
case 4:t.m(new C.cE9(t))
t.b81()
case 1:return A.h(u,v)}})
return A.i($async$kK,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkP().length+" guessed",a2,a2,a2,a2,a2,a2,B.pK,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vf,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tx(a1,A.cl(A.a([D.bbX,w,v,B.aQ,new C.I8(u,t,a0.ax,a2),B.aQ,A.at(C.up("Back to the games",new C.cDY(a3),B.cJ,B.ko,D.fr),a2,a2,a2)],x.p),a2,a2,B.aa,a2,a2,B.ah,!1),B.f2,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkP()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KA,B.K,a2,a2),B.W,A.at(A.ly(new C.cDZ(a0,r),a2,B.b5,B.hz,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cJ,2,B.r,-1)
k=o+1
w.push(new A.r1(new A.bq(0,1,u),new C.cE_(),A.p(a2,new A.ca(B.aL,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qD(new A.y(""+k,a2,B.nO,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.ly,a2,12,a2),B.as,new A.by(1,B.bb,new A.y(v[n].d[o],a2,D.fvV,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.q9,a2,new A.bG(l,l,l,l),new A.bh(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.ct,B.bg,a2,a2,a2),B.b5,B.iI,a2,new A.bQ("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.fX0,a2,a2,!0,a2,a2,a2,a0.gcV5(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.lz.j(0.2)
q=A.n(16)
p=A.L(D.lz,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fx,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.up(v,a0.gqe(a0),B.cJ,B.jD,D.fr)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dr:B.cJ.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.fb:B.cJ,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bU:B.c
d=n.q(0,o)?B.x4:a2
t.push(new A.r1(new A.bq(0,i,u),new C.cE0(),A.aA(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.K,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.adJ,new A.o(h,a2,new A.bG(l,l,l,l),new A.bh(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jj,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cE1(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a3),B.b5,B.m8,a2,new A.bQ("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fI,t,B.br,a2,10,10))}return new C.tx(a1,A.cl(w,a2,a2,B.alq,a2,a2,B.ah,!1),B.f2,a2)}}
C.azk.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.aGz.prototype={
aV(){this.b2()
this.b1()
this.dK()},
t(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.aff.prototype={
aqm(d){},
aqR(){var w=this,v=w.pW(new C.f4V(w))
v.fZ(0)
w.LP$!==$&&A.aQ()
w.LP$=v}}
C.aKn.prototype={
gblk(d){var w=this.c
return B.a.au(w,0,Math.min(this.d,w.length))},
VL(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.c=d
w.d=0
w.b=A.df(D.akr,new C.ff0(w))},
bre(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a2(0)}}
C.alz.prototype={
R(){return new C.alA(new C.alJ(),A.a([],x.t),new A.eC(0,$.aw()),$,0,null,null)},
gd0(){return this.d}}
C.alA.prototype={
gMH(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDG(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.MI(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gql(){var w=this.r
return w===$?this.r=new C.aKn(new C.bRY(this)):w},
gapb(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMH()[v].c)u.push(1)
return u.length},
gbkD(){var w=this.ghd(0)
return w.gz_()==null?"Elder":B.a.i(w.gz_().b)},
Z(){this.a3()
this.aqR()},
t(){var w,v=this
v.gql().t()
v.f.t()
w=v.LP$
w===$&&A.c()
w.t()
w=v.q2$
w.T$=$.aw()
w.P$=0
v.buT()},
cJJ(){var w=this
w.m(new C.bRV(w))
w.gql().VL(w.gMH()[w.x].a)},
KR(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gql()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q2$.a
v.ax=u
v.ay=u+1
v.m(new C.bRT())
A.cD(B.hz,new C.bRU(v))},
boP(){var w=this.gapb(0)/this.gMH().length*100
if(w>=90)return D.eUw
if(w>=75)return D.eSy
if(w>=60)return D.eJg
if(w>=45)return D.eMF
return D.eDG},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.csj()
w=A.bT(0,new A.er(A.b4(m,m,m,new C.bsE(n,n.q2$),B.ax),m),0,0,0)
if(!n.Q){v=D.q9.j(0.96)
u=A.n(20)
t=A.L(B.cJ,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbkD()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aV9,B.K,m,m),B.W,C.up("Start the test",n.gBw(),B.cJ,B.j1,D.fr)],x.p),B.m,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gMH()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aVb,m,m,m)
if(n.Q){t=n.gql()
t=t.d<t.c.length}else t=!1
if(t)u=D.fbR
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.Be,4,B.r,-1)
s.push(A.aA(m,A.p(m,new A.y(q[r],m,D.fn4,m,B.K,m,m,m,m,m,m,m),B.f,m,D.adJ,new A.o(D.beO,m,new A.bG(o,o,o,o),new A.bh(p,p,p,p),m,m,B.n),m,m,m,m,B.NR,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bRW(n,r),m,m,m,m,m,m,!1,B.a3))}u=A.bX(B.fI,s,B.br,new A.bQ("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.p4(u,B.mI,A.qv(),B.b5,B.b5,A.Li())],x.p),B.m,m,B.e,B.P,0,B.p)
v=u}return new C.tx("Village School",new A.an(B.a_,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f2,m)},
csj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.boP(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMH()[v].c)g.push(v)
u=A.n(22)
t=A.L(B.cJ,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.frv,B.K,i,i)
r=A.d("Signed by Elder "+j.gbkD(),i,i,i,i,i,i,D.fq9,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fvg,i,i,i),D.evB],q)
o=A.d(h.b,i,i,i,i,i,i,D.fx7,i,i,i)
n=j.gapb(0)
m=j.gMH()
u=A.p(i,A.x(A.a([D.fIk,B.av,s,r,B.W,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.aaO,i,i,i),B.N,D.as3],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.q9,i,t,u,i,i,B.n),i,i,i,i,B.fm,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.I8(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.fY4,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.K)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bz,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fS,i,i,i,i,i,i,i,i,i),B.av,new A.y("You said: "+p.b[w[v]],i,D.fsF,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.fuT,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dr,i,new A.bG(k,k,k,k),new A.bh(r,r,r,r),i,i,B.n),i,i,i,B.ct,B.bg,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.at(C.up("Back to the games",new C.bRP(j),B.cJ,B.ko,D.fr),i,i,i))
return new C.tx("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f2,i)}}
C.bsE.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.q2$.a,d=a1.a,a0=f.f.Mq(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h9K(a2)
J.bl(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gql()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cVf[u]-6
$.S()
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.FQ.gp(0)
s=t.G()
d.drawRect(A.bH(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.br(D.a8U.cr(10),B.hX)
$.S()
t=A.J()
t.r=D.Be.gp(0)
a1.az(a0,t)
t=A.br(D.a8U,B.hI)
a0=A.J()
a0.sam(A.jy(new A.u(30,96),new A.u(420,346),D.ddD,g,B.x,g))
a1.az(t,a0)
r=new A.e6()
r.cZ(2)
for(q=0;q<18;++q){a0=r.ag()
t=r.ag()
p=r.ag()
p=A.bK(new A.u(30+a0*390,96+t*250),8+r.ag()*14,30+p*60)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bH(p),s)
s.delete()}a0=A.J()
a0.r=K.aib.gp(0)
a1.aQ(new A.a3(30,354,420,362),a0)
a0=A.J()
a0.r=B.aP.gp(0)
a1.aQ(D.f3F,a0)
a0=A.J()
a0.r=B.bM.gp(0)
a1.aQ(D.f3J,a0)
a0=A.br(D.f3z,B.hH)
t=A.J()
t.r=D.YU.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gql().gblk(0)
n=A.fz(g,g,7,g,A.cT(g,g,g,g,g,g,g,g,g,D.fzm,a0+(v?"|":"")),B.a4,B.bX,g,B.dA,B.bV)
n.o2(346)
J.bl(d.save())
a0=A.bH(D.a8U)
t=$.mA()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bH(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a4(a1,new A.u(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.br(new A.a3(a0,t,a0+40,t+90),B.fE)
a0=A.J()
a0.r=D.bu2.gp(0)
a1.az(t,a0)}}else{n=A.fz(g,g,g,g,D.fjB,B.K,B.bX,g,B.dA,B.bV)
n.o2(340)
n.a4(a1,new A.u(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gql().d*9,310)
l=Math.sin(q+t)
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.ghd(0).gz_()
j=(a0==null?g:a0.c)===D.oj?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f4W(e,a1,j,v,i,D.ek_)),new A.z(520,new C.f4X(a1,e,v)),new A.z(575,new C.f4Y(a1,e,v)),new A.z(585,new C.f4Z(this,a1,e,v)),new A.z(615,new C.f5_(this,v,a1,e,i))],x.E)
B.d.aX(h,new C.f50())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
cay(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ag,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bt())
return n},
av(d){return!1}}
C.alx.prototype={
R(){return new C.aly(new C.alJ(),A.U(x.S,x.i),new A.eC(0,$.aw()),$,0,null,null)},
gd0(){return this.d}}
C.aly.prototype={
gkP(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hBr(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
giZ(){var w=this.z
return w===$?this.z=this.Ft(0):w},
gaKQ(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Ft(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cp(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Ft(0):r).length);++v}s.Q=w
r=w}return r},
Ft(d){var w,v,u,t,s=this.gkP()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e0(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e6()
u.cZ(this.a.e+d*7)
B.d.e_(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f6(u,new C.bRB())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a3()
this.aqR()},
t(){var w,v=this
v.e.t()
w=v.LP$
w===$&&A.c()
w.t()
w=v.q2$
w.T$=$.aw()
w.P$=0
v.buS()},
aqm(d){var w,v,u,t,s,r=this,q=r.giZ().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cp(u===$?r.z=r.Ft(0):u,v)
s=r.gaKQ()
s[v]=s[v]+(450*(t+0.5)/q-r.gaKQ()[v])*Math.min(1,w)}},
d_h(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giZ().length)return
w=v.y
if(w===-1){v.m(new C.bRM(v,d))
return}if(w===d){v.m(new C.bRN(v))
return}v.m(new C.bRO(v,B.d.cp(v.giZ(),v.y),d,B.d.cp(v.giZ(),d)))},
cKp(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Ft(0):u).length))break
t=s.gkP()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Ft(0):u)[v]]===v);++v}s.m(new C.bRH(s,B.d.cJ(w,new C.bRI())))},
kK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkP().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bRJ(t,s))
w=5
return A.b(C.BC(t.a.d,s),$async$kK)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BD(q.d,q.c.a,"lineup",t.r*10),$async$kK)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bRK())
w=1
break
case 4:t.m(new C.bRL(t))
case 1:return A.h(u,v)}})
return A.i($async$kK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkP().length+" lines right",k,k,k,k,k,k,B.pK,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tx("Line Up",A.cl(A.a([D.aeB,w,B.aQ,new C.I8(v,u,l.ch,k),B.aQ,A.at(C.up("Back to the games",new C.bRD(d),B.cJ,B.ko,D.fr),k,k,k)],x.p),k,k,B.aa,k,k,B.ah,!1),B.f2,k)}w=A.a([],x.t)
for(t=0;v=l.gkP(),t<v[l.f].d.length;++t)w.push(t)
B.d.aX(w,new C.bRE(l))
u=A.bT(0,A.cu(new C.bRF(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aVb,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.frW,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fu7,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.n(16)
n=l.ax
m=A.L(n?D.lz:G.nc,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bRG(l),x.cM).aI(0,", then ")+".",k,k,k,k,k,k,D.fwh,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d1,B.bg,k,k,1/0))}if(!l.at)r.push(C.up("That is my line!",l.gcKo(l),B.cJ,B.hB,D.fr))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.up(w,l.gqe(l),B.cJ,B.jD,D.fr))}return new C.tx("Line Up",new A.an(B.a_,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.f2,k)}}
C.bjc.prototype={
a4(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q2$.a,c6=c8.a,c7=c4.e.Mq(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h9K(c9)
J.bl(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giZ().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ag,c3,c3,A.a([],u))
t.D(new A.aY(10,470))
t.D(new A.c5(225,500,440,470))
s=A.J()
s.r=D.YU.gp(0)
s.b=B.a9
s.c=4
c8.aK(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aF(c7,B.ag,c3,c3,n)
n.push(new A.aY(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.bt())
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=[B.cJ,G.nc,D.lz,B.aJ][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbu().a.snapshot()
c6.drawPath((m.e=new A.cd(o)).a,l)
l.delete()}this.b0d(c8,"OLDEST",D.el_,B.cJ)
this.b0d(c8,"YOUNGEST",D.ekr,B.ba)
c7=A.br(D.f3t,B.fE)
u=A.J()
u.r=D.FQ.gp(0)
c8.az(c7,u)
u=A.br(D.f3s,B.hI)
c7=A.J()
c7.r=D.Be.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aX(c7,new C.dpU())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.K)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cp(a0===$?c4.z=c4.Ft(0):a0,h)
q=c4.gaKQ()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkP()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkP()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ao(B.Q,B.M,B.S,B.T,B.R)
a8.r=B.cJ.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.dhm[B.o.F(a9,6)]
if(b0)b2=1
else b2=a6?-0.4:0.35
if(b0)b3=0.4+0.4*b1
else b3=j&&a6?0.5:0
if(j&&a6)b4=1
else b4=a2?0.6:0
b5=b0?0.5:0
b6=a6?Math.sin(e)*0.5:0
b7=b0?a3+b1*8:a3
if(b0)b8=new A.u(-3-b1*8,-56)
else b8=a2?D.en5:c3
if(b0)b9=new A.u(3+b1*8,-56)
else if(j&&a6)b9=D.aLh
else b9=a2?new A.u(30,-104+Math.sin(f)*5):c3
C.Sc(c8,new A.u(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.Jq,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.iH(new A.es(a7,c3,c3,B.cL,c3,c3,c3,c3,c3,c3,D.fpG),B.a4,B.bX,new A.jg(1),"\u2026",c3,1,c3,B.bV,c3)
c0.o2(s)
c1=A.br(A.bK(new A.u(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
if(a5)a8=B.ir
else a8=a6?B.rx:D.q9
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.e7(c1),l)
l.delete()
a7=new A.ao(B.Q,B.M,B.S,B.T,B.R)
if(a5)a8=D.lz
else a8=a6?G.nc:D.ly
a7.r=a8.gp(0)
a7.b=B.a9
a7.c=2
l=a7.G()
c6.drawRRect(A.e7(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a4(c8,new A.u(q-a8/2,650-a7.gba(a7)/2))
c2=new A.iH(new A.es(""+(a1+1),c3,c3,B.cL,c3,c3,c3,c3,c3,c3,D.fpZ),B.a4,B.bX,new A.jg(1),c3,c3,c3,c3,B.bV,c3)
c2.eg()
c2.a4(c8,new A.u(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bl(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bK(B.I,4,8)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=[B.cJ,G.nc,D.lz,B.aJ,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bH(s),l)
l.delete()
c6.restore()}c6.restore()},
b0d(d,e,f,g){var w,v,u=null,t=A.fz(u,u,u,u,A.cT(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.D7,u,u),e),B.a4,B.bX,u,B.dA,B.bV)
t.eg()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aG(0,new A.u(v/2,w.gba(w)/2)))},
av(d){return!1}}
C.a1B.prototype={
a6(){return"_Trip."+this.b}}
C.alt.prototype={
R(){return new C.alu(D.WV,new A.eC(0,$.aw()),$,0,null,null)},
gd0(){return this.d}}
C.alu.prototype={
gDb(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDG(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.MI(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gql(){var w=this.f
return w===$?this.f=new C.aKn(new C.bRn(this)):w},
gTH(){var w=this.ghd(0)
return w.gz_()==null?"Grandma":B.a.i(w.gz_().b)},
Z(){this.a3()
this.aqR()},
t(){var w,v=this
v.gql().t()
w=v.LP$
w===$&&A.c()
w.t()
w=v.q2$
w.T$=$.aw()
w.P$=0
v.buR()},
aqm(d){var w,v,u,t=this
if(t.r!==D.acy)return
w=B.dw.aw(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDb()
if(v+1>=u.length){t.r=D.acz
t.WI()}else{++t.w
t.ay=!1
t.r=D.WW
t.gql().VL(u[t.w].a)}if(t.c!=null)t.m(new C.bRl())}},
WI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gql().VL("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDb().length
r=C.bFX(t,u.z,s)
u.as=r
w=2
return A.b(C.BC(u.a.d,r),$async$WI)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BD(s.d,s.c.a,"journey",u.x*10),$async$WI)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRf())
return A.h(null,v)}})
return A.i($async$WI,v)},
bq8(){this.aTp()},
aTp(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.acy
if(w.c!=null)w.m(new C.bRg())},
KR(d){var w,v,u,t,s=this
if(s.r!==D.WW)return
w=s.gDb()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRk(s,d,v))
u=s.gql()
t=s.w
u.VL(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cPC(){if(this.r!==D.AN)return
this.aTp()},
B(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.er(A.b4(s,s,s,new C.biC(t,t.q2$),B.ax),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDb().length;++w){v=t.w
if(w<v||t.r===D.acz)v=B.cJ
else v=w===v?B.c:B.aX
u=new A.aP(4,4)
p.push(new A.by(1,B.bb,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bh(u,u,u,u),s,s,B.n),s,7,s,B.yB,s,s,s,s),s))}p.push(B.bm)
p.push(D.fJV)
return new C.tx("Safari Journey",new A.an(B.a_,s,B.ab,B.t,A.a([r,A.ap(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.cjZ(),s,s,10,10,s,s)],q),s),B.f2,s)},
cjZ(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRj(o),l=D.q9.j(0.96),k=A.n(22),j=A.L(B.cJ,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTH()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aV9,B.K,n,n),B.W,C.up("Start the journey",o.gbq7(),B.cJ,D.bOq,D.fr)],x.p),B.m,n,B.e,B.P,0,B.p)
break
case 3:w=D.bbv
break
case 1:w=o.w
v=o.gDb()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.ly,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,new A.y(r[s],n,D.aUx,n,B.K,n,n,n,n,n,n,n),B.f,n,D.adR,new A.o(D.ajm,n,new A.bG(p,p,p,p),new A.bh(q,q,q,q),n,n,B.n),n,n,n,n,V.wb,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRh(o,s),n,n,n,n,n,n,!1,B.a3))}w=A.x(A.a([w,B.N,A.bX(B.bG,t,B.br,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDb().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.N,new A.bN(B.a8,n,n,C.up(v,o.gcPB(),B.cJ,B.jD,D.fr),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTH()),B.N,A.d(""+o.x+" of "+o.gDb().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aUQ,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQh(v)
u=C.aQh(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.aaO,n,n,n))}w.push(B.N)
w.push(A.at(C.up("Back to the games",new C.bRi(o),B.cJ,B.ko,D.fr),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aCt,n,B.n),n,n,n,n,B.bg,n,n,n)}}
C.biC.prototype={
a4(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.q2$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gDb(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.acy,d4=c9*0.5
d0=A.ar(D.bgh,D.bqy,d2)
d0.toString
w=A.ar(D.Y7,G.agX,d2)
w.toString
v=A.ar(B.tT,D.bp0,d2)
v.toString
$.S()
u=A.J()
t=x.O
u.sam(A.jy(B.I,new A.u(0,d4),A.a([d0,w,v],t),G.a3U,B.x,c5))
d5.aQ(new A.a3(0,0,0+c8,0+c9),u)
s=new A.u(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.J()
u.sam(A.tz(s,60,A.a([D.bpo,B.L],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.J()
u.r=B.Yi.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dwv[o]
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=B.c.j(0.75).gp(0)
l=m.G()
d0.drawCircle(q+n.a,p+n.b,18,l)
l.delete()}}for(v=d2*0.7,u=d4+4,m=d4-16,k=x.v,j=0;j<2;++j){i=$.S()
h=A.a([],k)
g=new A.aF(i.r,B.ag,c5,c5,h)
h.push(new A.aY(0,u))
for(i=m-j*12,f=0.12+j*0.1,e=70+j*30,d=14-j*3,q=0;q<=c8;q+=6){a0=new A.aq(q,i+Math.sin((q+c6.CW*f)/e)*d)
h.push(a0)
a1=g.f
if(a1!=null)a0.bx(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.bx(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=A.ar(j===0?D.beQ:D.btv,D.bjL,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.cd(g.gbu().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.caz(d5,new A.u(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.J()
u=A.ar(D.aiv,D.G3,d2)
u.toString
v.sam(A.jy(new A.u(0,d4),new A.u(0,c9),A.a([u,D.bpq],t),c5,B.x,c5))
d5.aQ(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.J()
v.r=D.bj4.gp(0)
d5.aQ(new A.a3(0,a2,c8,a3),v)
v=A.J()
v.r=D.btb.gp(0)
d5.aQ(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=K.Mo.gp(0)
l=t.G()
d0.drawRect(A.bH(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b4.r=D.bev.gp(0)
l=b4.G()
d0.drawRect(A.bH(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ag,c5,c5,b2)
b2.push(new A.aY(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bt())
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.brp.gp(0)
l=b2.G()
b2=b3.gbu().a.snapshot()
d0.drawPath((b3.e=new A.cd(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.r=D.fr.gp(0)
l=b3.G()
d0.drawRect(A.bH(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b3.r=D.FQ.gp(0)
l=b3.G()
d0.drawRect(A.bH(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.br(new A.a3(b2,a6,b2+60,a7),B.ii)
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.bux.gp(0)
l=b2.G()
d0.drawRRect(A.e7(b6),l)
l.delete()
b2=new A.ao(B.Q,B.M,B.S,B.T,B.R)
b2.r=D.Be.gp(0)
b2.b=B.a9
b2.c=2
l=b2.G()
d0.drawRRect(A.e7(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.iH(new A.es(b7,c5,c5,B.cL,c5,c5,c5,c5,c5,c5,D.fo9),B.a4,B.bX,new A.jg(1),c5,c5,c5,c5,B.bV,c5)
b8.eg()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a4(d5,new A.u(b5-b3/2,a4-b2.gba(b2)/2))
if(a9)b9=c6.r===D.acz
else if(r===c6.w){b2=c6.r
b2=b2===D.WW||b2===D.AN
b9=b2}else b9=!1
if(a9){b2=c6.ghd(0).gz_()
c0=(b2==null?c5:b2.c)===D.oj?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gql()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.AN
b2=c1?C.hxV(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.WW?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.u(40,-110+Math.sin(e)*10)
else a9=c1?new A.u(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.Sc(d5,new A.u(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.u(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bH1(d5,new A.u(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ao(B.Q,B.M,B.S,B.T,B.R)
m.r=D.bsG.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.WV)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ao(B.Q,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.AN&&c6.ax){b8=A.fz(c5,c5,c5,c5,A.cT(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cJ,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A8.Im,c5,c5),"BEEP BEEP!"),B.a4,B.bX,c5,B.dA,B.bV)
b8.eg()
b8.a4(d5,new A.u(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
caz(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.boV,D.bio,g)
m.toString
if(f){w=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c5(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c5(v+9,t,v+16,u))
w.D(new A.bt())
t=A.J()
t.r=D.Zj.gp(0)
d.aK(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cZd[q]
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=D.Zj.gp(0)
o.c=4
o.d=B.by
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a7(0,D.en2)
$.S()
v=A.J()
v.r=D.bex.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bK(e.a7(0,D.en3),16,60)
w=A.J()
w.r=m.gp(0)
d.dQ(v,w)}},
bH1(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.WV?0.045:0,a2=a3.a
J.bl(a2.save())
a2.translate(a4.a,a4.b+d)
a3.io(0,a1)
for(w=0;w<2;++w){v=D.doX[w]
u=a0.ay&&a0.r!==D.WV&&v>0
J.bl(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.btn.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.blP.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.bn.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.tW(D.f3Q,B.fE,B.fE,B.ih,B.hG)
$.S()
t=A.J()
t.sam(A.jy(D.ej8,B.a7P,D.deZ,G.a3U,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ao(B.Q,B.M,B.S,B.T,B.R)
s.r=D.d96[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bH(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.AN&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bl(a2.save())
a2.clipRRect(A.e7(A.br(k,B.mZ)),$.nI(),!0)
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=D.Y7.gp(0)
r=j.G()
a2.drawRect(A.bH(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.AN?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.Sc(a3,new A.u(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aL8,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.br(k,B.mZ)
h=new A.ao(B.Q,B.M,B.S,B.T,B.R)
h.r=D.ajp.gp(0)
h.b=B.a9
h.c=2
r=h.G()
a2.drawRRect(A.e7(i),r)
r.delete()}a0=A.br(D.Ue,B.mZ)
t=A.J()
t.r=D.Y7.gp(0)
a3.az(a0,t)
J.bl(a2.save())
a2.clipRRect(A.e7(A.br(D.Ue,B.mZ)),$.nI(),!0)
C.Sc(a3,new A.u(D.Ue.gbL().a,-10),0,0,0.7,-0.1,e,e,D.aL8,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.br(D.Ue,B.mZ)
a0=A.J()
a0.r=D.ajp.gp(0)
a0.b=B.a9
a0.c=2
a3.az(t,a0)
a0=A.J()
a0.r=An.G4.gp(0)
a3.ad(D.eld,4,a0)
a0=A.J()
a0.r=D.FQ.gp(0)
a3.aQ(D.f4Z,a0)
for(w=0;w<3;++w){v=D.doZ[w]
a0=A.br(new A.a3(v,-96,v+28,-79),B.ii)
t=new A.ao(B.Q,B.M,B.S,B.T,B.R)
t.r=D.G3.gp(0)
r=t.G()
a2.drawRRect(A.e7(a0),r)
r.delete()}a2.restore()},
av(d){return!1}}
C.aBb.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bg9.prototype={}
C.aBd.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bga.prototype={}
C.aBe.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bgb.prototype={}
C.a66.prototype={
B(d){var w=null
return new A.a4(1/0,this.c,A.b4(w,w,w,new C.biK(w),B.ax),w)}}
C.biK.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dmT[B.o.F(m,6)]
j=$.S()
i=new A.ao(B.Q,B.M,B.S,B.T,B.R)
i.r=k.gp(0)
h=i.G()
t.drawRect(A.bH(new A.a3(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aF(j.r,B.ag,null,null,i)
j=l+q
i.push(new A.aY(j,f))
i.push(new A.aq(l+o,r))
i.push(new A.aq(j,p))
i.push(new A.aq(l+s,r))
i.push(new A.bt())
j=new A.ao(B.Q,B.M,B.S,B.T,B.R)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbu().a.snapshot()
t.drawPath((g.e=new A.cd(j)).a,h)
h.delete()}++m}},
av(d){return!1}}
C.tx.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.PC,w,w,w,new C.bRe(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fls,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c6(w,D.XV,A.p(w,A.bn(!0,A.x(A.a([D.c2U,new A.D(D.bFA,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b6X,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.I8.prototype={
B(d){var w=null,v=this.d,u=C.aQh(v),t=C.ifi(v),s=B.c.j(0.08),r=A.n(18),q=A.L(B.cJ.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fnV,w,w,w)],x.p)
if(this.e)p.push(D.epu)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fS,w,w,w))
if(t!=null)p.push(new A.D(B.uj,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.As,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bD,w,w,w)}}
C.VM.prototype={
R(){return new C.blv(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cWv(d){return this.f.$1(d)},
ge2(){return this.d}}
C.blv.prototype={
gSH(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a3()
this.Pm()},
Pm(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bS_(u.a.d),$async$Pm)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dd2[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bRZ(p,(o===$?u.d=q.c:o).a,r),$async$Pm)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e_J(u,n))
return A.h(null,v)}})
return A.i($async$Pm,v)},
ui(d){return this.cn0(d)},
cn0(d){var w=0,v=A.j(x.H),u=this,t
var $async$ui=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a5(t,!1).cc(A.ej(new C.e_K(d),!1,null,x.H)),$async$ui)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pm()
return A.h(null,v)}})
return A.i($async$ui,v)},
gb5s(){var w,v,u,t=C.MI(this.gSH()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2g(d){return this.cuf(d)},
cuf(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.K)(d),++s)r.push(d[s].ah())
w=2
return A.b(u.a.cWv(r),$async$a2g)
case 2:if(u.c!=null)u.m(new C.e_L(u,r))
return A.h(null,v)}})
return A.i($async$a2g,v)},
OF(d){return this.bPH(d)},
bPH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hbS(t.gSH())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mq("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a5(s,!1).cc(A.ej(new C.e_H(q),!1,null,r)),$async$OF)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.K)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bg(j,new C.e_I(p))
o=s.length
B.d.c6(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2g(A.d2(s,0,A.dz(2,"count",x.S),r).dq(0)),$async$OF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
XE(d,e){return this.bNh(0,e)},
bNh(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ch(null,null,!0,null,new C.e_G(e),o,null,!0,!0,x.y),$async$XE)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hbS(u.gSH()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.K)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2g(o),$async$XE)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XE,v)},
a9V(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e_D(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.L(B.aX,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Va,p,p,p),B.b2],s)
q=A.n(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fml,p,p,p),B.f,p,p,new A.o(B.hy,p,p,q,p,p,B.n),p,p,p,p,B.C7,p,p,p))
return A.aA(p,A.db(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b2,A.d(e,p,2,p,p,p,p,D.fu1,p,p,p),B.cS,A.d(f,p,3,B.a1,p,p,p,D.fn2,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.az,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yt,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a3)},
X7(d,e,f,g,h,i){return this.a9V(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.MI(s.gSH()),p=s.gSH(),o=C.aQh(s.e),n=C.hbS(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e_M(s),k=C.hBr(p,1).length,j=C.hBD(p,1).length,i=C.hCy(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.L(B.cJ.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aaD,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.frz,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.aaz,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pK,r,r,r),D.fQb],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bD,r,r,r)
f=s.X7("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e_N(s,p),l.$1("kahoot"))
h=s.X7("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.ly,new C.e_O(s,p),l.$1("fire"))
a0=s.X7("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.BD,new C.e_P(s,p),l.$1("catch"))
j=j!==0?new C.e_S(s,p):r
j=s.a9V("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hi,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e_T(s,p):r
i=s.a9V("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l4,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.X7("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eP,new C.e_U(s,p),l.$1("journey"))
k=k!==0?new C.e_V(s,p):r
k=A.a([g,B.aQ,D.fU9,B.N,A.kR(0.98,A.a([f,h,a0,j,i,e,s.a9V("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ej,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.X7("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d0,new C.e_W(s,p),l.$1("school"))],a1),2,12,12,r,B.dS,!0),B.d4,A.B(A.a([D.bHj,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fmp,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.K)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aX,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fAX,B.bd,new A.by(1,B.bb,A.x(A.a([new A.y(g,r,B.hv,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaoU(0).length+" questions \xb7 Kahoot style",r,B.As,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaoU(0).length>=2){f=D.lz.j(0.2)
t=new A.ay(D.lz,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.X(B.hp,D.lz,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e_X(s,v,p),r,r,r,r,r,r,!1,B.a3))}if(s.a.e){f=B.cJ.j(0.2)
t=new A.ay(B.cJ,1,B.r,-1)
f=A.aA(r,A.p(r,A.X(B.j1,B.cJ,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e_Y(s,v),r,r,r,r,r,r,!1,B.a3)
e=B.fb.j(0.2)
t=new A.ay(B.fb,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aA(r,A.p(r,A.X(B.eb,B.fb,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e_Z(s,v),r,r,r,r,r,r,!1,B.a3)],a1))}k.push(A.p(r,new A.ca(B.aL,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bG(u,u,u,u),new A.bh(h,h,h,h),r,r,B.n),r,r,r,B.d1,B.bg,r,r,r))}if(s.a.e){j=m?new C.e_Q(s):new C.e_R(a2)
i=A.n(18)
h=A.L(m?B.cJ:B.aX,B.r,2)
g=m?B.cJ.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cJ:B.aC,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.NF,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a3))}else if(i===0)k.push(D.fV5)
k.push(B.aB)
k.push(D.as3)
return new C.tx("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bBB,r,r,B.ah,!1),B.f2,r)}}
C.a_s.prototype={
a6(){return"_KPhase."+this.b}}
C.alv.prototype={
R(){return new C.alw(D.b_e)},
gd0(){return this.e}}
C.alw.prototype={
t(){var w=this.at
if(w!=null)w.a2(0)
w=this.ax
if(w!=null)w.a2(0)
this.a1()},
fZ(d){var w,v=this
v.m(new C.bRz(v))
w=v.at
if(w!=null)w.a2(0)
v.at=A.df(B.fB,new C.bRA(v))},
aP3(){var w=this,v=w.ax
if(v!=null)v.a2(0)
w.m(new C.bRp(w))
v=w.at
if(v!=null)v.a2(0)
w.at=A.df(B.fu,new C.bRq(w))},
KR(d){var w
if(this.d!==D.ac2)return
w=this.at
if(w!=null)w.a2(0)
this.b5o(d)},
b5o(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bRv(u,v,d))
u=v.ax
if(u!=null)u.a2(0)
v.ax=A.cD(B.rC,v.gkB(v))},
cJ2(d){var w=this
if(w.d!==D.Wt)return
if(w.e+1>=w.a.w.length)w.Yp()
else{w.m(new C.bRw(w))
w.aP3()}},
Yp(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a2(0)
p=u.x
t=u.a.w.length
s=C.bFX(p,u.w,t)
u.m(new C.bRs(u,s))
w=2
return A.b(C.BC(u.a.e,s),$async$Yp)
case 2:r=e
t=u.a
w=3
return A.b(C.BD(t.e,t.f,t.r,u.f),$async$Yp)
case 3:q=e
if(u.c!=null)u.m(new C.bRt(u,r,q))
return A.h(null,v)}})
return A.i($async$Yp,v)},
cJR(){var w,v,u,t,s=this,r=s.a,q=new A.e6()
q.cZ(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e_(r,q)
for(r=A.d2(r,0,A.dz(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bS(r,r.gK(0),u.k("bS<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.k.V(w*(0.35+q.ag()*0.5)),!1))}B.d.aX(v,new C.bRx())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b_e===r){w=A.a([D.fQA,B.W,A.d(s,t,t,t,t,t,t,B.KD,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fmx,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xc,B.K,t,t))
w.push(B.dT)
w.push(C.up("Play",u.geX(u),B.cJ,B.hp,D.fr))
w=A.at(new A.D(B.eu,A.x(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b_f===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fux,t,t,t),t,t,t)
break A}if(D.ac2===r||D.Wt===r){w=u.cpC()
break A}if(D.b_g===r){w=u.caA()
break A}w=t}return new C.tx(s,w,B.f2,t)},
cpC(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Wt,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aUk,j,j,j),B.b2],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KA,j,j,j))
g.push(B.as)
f=A.n(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iw,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.GB,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kk(B.bz,j,k.as<5?B.fb:B.cJ,9,j,w,j),B.ap)
w=A.n(22)
v=A.L(B.cJ,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lz:G.nc,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.flB,B.K,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fwF,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.q9,j,v,w,j,j,B.n),j,j,j,j,B.fm,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkB(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bRu(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aC7[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([new A.y(D.aCq[o],j,D.fnw,j,j,j,j,j,j,j,j,j),B.as,new A.by(1,B.bb,new A.y(r[t],j,D.fmu,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aqA)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bVN)
v.push(A.aA(j,new A.Su(A.p(j,new A.ca(B.aL,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bG(l,l,l,l),new A.bh(m,m,m,m),W.aAx,j,B.n),j,j,j,j,B.eZ,j,j,j),p,B.b5,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a3))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.kR(1.45,v,2,10,10,j,B.dS,!1),4)],h)
if(i)h.push(D.eoK)
return new A.D(B.a_O,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
caA(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cJR(),m=x.p,l=A.a([D.baN,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pK,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vf,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cJ.j(0.25):B.dr
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cJ:B.bz,1,B.r,-1)
q=w<3?D.dff[w]:""+(w+1)
s=s?B.u:B.U
l.push(A.p(o,new A.ca(B.aL,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a4(34,o,new A.y(q,o,B.n3,o,o,o,o,o,o,o,o,o),o),new A.by(1,B.bb,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iw,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bG(r,r,r,r),new A.bh(u,u,u,u),o,o,B.n),o,o,o,B.ct,B.eS,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.I8(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.at(C.up("Back to the games",new C.bRr(p),B.cJ,B.ko,D.fr),o,o,o))
return A.cl(l,o,o,B.fm,o,o,B.ah,!1)}}
C.Tr.prototype={
R(){return new C.als(A.U(x.de,x.er))}}
C.als.prototype={
gCO(){var w,v=this,u=v.d
if(u===$){w=C.hhu(v.a.c.ah())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
gl7(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCO().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.au(new A.bb(w,B.b4,B.aO),v)}return t},
cds(d){return this.f.c3(0,d,new C.bR_(d))},
Z(){this.a3()
var w=this.gCO().c
if(w.length===0)w.push(C.h3z(null,0,20,""))},
t(){var w,v,u=this.gl7(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.du(u,u.r,u.e);u.C();)for(w=J.aX(u.d);w.C();){v=w.gS(w)
v.T$=$.aw()
v.P$=0}this.a1()},
cIT(){if(this.gCO().c.length>=12)return
this.m(new C.bR0(this))},
jF(d){var w,v,u=this,t=u.gCO()
t.b=B.a.i(u.gl7(0).a.a)
w=t.gaoU(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fez)
return}v=t.c
B.d.aa(v)
B.d.v(v,w)
v=u.c
v.toString
A.a5(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRa(),r=x.p,q=A.a([A.bM(!1,D.fFU,t,t,!0,t,t,t,u.gbp_(u),t,t)],r),p=A.a([D.fUH,B.ae,A.aM(t,B.Y,!1,t,!0,B.t,t,A.aN(),u.gl7(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.aa,t,t,t,t,t,t,t,t,t,t,t,B.fS,!0,B.a4,t,B.an,t,t,t,t),B.aB],r)
for(w=0;v=u.gCO().c.length,w<v;++w)B.d.v(p,A.a([new A.fg(new C.bR9(u,w,s),t)],r))
if(v<12)p.push(A.at(C.up("\uff0b Add a question",u.gcIS(),B.aX,t,B.c),t,t,t))
return new C.tx("Make your game",A.cl(p,t,t,D.bBy,t,t,B.ah,!1),q,t)}}
C.aqy.prototype={
R(){return new C.aEI(A.a([],x._))},
bv(){return this.r.$0()},
qf(){return this.w.$0()},
ge2(){return this.c}}
C.aEI.prototype={
Z(){var w,v
this.a3()
this.wb()
w=this.a
v=w.c
if(v.length!==0)C.a7Q(v,w.e,w.d.w)},
w1(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$w1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hep(r,t.e,!1,s.w,new C.e1o(u),null,s),$async$w1)
case 2:w=3
return A.b(u.wb(),$async$w1)
case 3:return A.h(null,v)}})
return A.i($async$w1,v)},
a0q(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hep(r,t.e,!0,s.w,new C.e1n(u),null,s),$async$a0q)
case 2:w=3
return A.b(u.wb(),$async$a0q)
case 3:return A.h(null,v)}})
return A.i($async$a0q,v)},
wb(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.B5(q.a.c),$async$wb)
case 7:p=e
if(q.c!=null)n=q.e||J.cM(p)
else n=!1
if(n)q.m(new C.e1q(q,p))
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
return A.b(C.H2(q.a.c).dc(0,B.qi),$async$wb)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e1r(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e1s(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wb,v)},
P0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$P0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.fe9)
w=3
return A.b(C.H2(t.a.c),$async$P0)
case 3:r=e
w=4
return A.b(C.fUm(t.a.c,r),$async$P0)
case 4:q=e
w=5
return A.b(C.H2(t.a.c),$async$P0)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e1m(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dE:B.cW,null,B.t,null,s,null,B.mK,null,null,null,null,null,null,null,null,null,null))
t.a.qf()
case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
Ik(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ik=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.inv(l),$async$Ik)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hRj(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0I(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ik)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hy4(r)
o=Date.now()
n=t.a.c
m=new C.kQ(l,r.toUpperCase(),p,!0,B.Y,D.Dh,new A.V(o,0,!1),0,n,D.ur,B.ca)
w=5
return A.b(C.a3n(n,m),$async$Ik)
case 5:w=6
return A.b(t.wb(),$async$Ik)
case 6:t.a.bv()
t.a.qf()
if(t.c==null){w=1
break}t.EP(m)
case 1:return A.h(u,v)}})
return A.i($async$Ik,v)},
EP(d){return this.cil(d)},
cil(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.B5(u.a.c),$async$EP)
case 2:n=l.ow(k.dJ(f,new C.e1p(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hI(m,new C.aqs(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EP)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3n(u.a.c,o),$async$EP)
case 6:case 5:w=7
return A.b(u.wb(),$async$EP)
case 7:u.a.qf()
return A.h(null,v)}})
return A.i($async$EP,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.J,o=new C.uc(p)
if(r.e)return A.at(A.n2(q,p?B.bu:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.e4:B.c
v=A.n(15)
u=A.aI(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bTt,B.f,q,q,new A.o(B.aW.j(0.12),q,A.L(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cO,!0,q,q,q,q,q,q,q,q,q,q,q,r.gchp(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.G4(A.p(q,A.x(A.a([u,B.aQ,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dT,A.bI(D.fXV,q,r.gaSe(),A.bo(B.bP,q,q,q,q,q,Aw.a0c,q,new A.b8(A.n(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bEh,q,q,1/0),15,B.af,1.05,D.abP,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b2],v)
if(J.cM(r.d))w.push(A.aH(q,q,q,q,A.X(B.ze,B.aW,q,q,q,q),q,q,q,new C.e1u(r),q,q,q,q,"Sync family trees with database",q))
if(J.cM(r.d))w.push(A.aH(q,q,q,q,A.X(B.z8,B.aW,q,q,q,q),q,q,q,r.gagB(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dj(E.aru,D.fDf,r.gaSe(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.G4(r.cF7(J.r(r.d,s),o),14,B.af,1,D.abP,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cF7(d,e){var w=null,v=e.a,u=v?B.e4:B.c,t=A.n(14),s=A.L((v?B.ea:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.en,10)],x.V),q=A.n(14),p=A.p(w,D.bSx,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gapP(),m=d.d?"":" \xb7 Public",l=d.y===D.kP?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aI(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bD,A.B(A.a([p,B.bd,l,A.X(B.Ot,v?B.bu:B.bn,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e1t(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqs.prototype={
R(){return new C.aEF(A.a([],x._),A.aV(x.N),A.b9t())},
bv(){return this.r.$0()},
ge2(){return this.c}}
C.aEF.prototype={
Z(){var w,v,u=this
u.a3()
u.d=u.a.w
u.adl()
w=u.a
v=w.c
if(v.length!==0)C.a7Q(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a1()},
a3p(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.y8("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.e0P(r),s,null,!0,!0,x.y),$async$a3p)
case 3:if(e!==!0||t.c==null){w=1
break}t.JS()
t.m(new C.e0Q(t,r))
w=4
return A.b(t.ue(),$async$a3p)
case 4:t.a.bv()
t.y8(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3p,v)},
cuQ(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e0K(w,f,d,e))},
aUu(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dt()
u.eh(w,v,0,1)
u.k0(q,q,1,1)
this.w.sp(0,u)},
bbY(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eL(new Float64Array(16))
q.e7(r)
w=q.CT()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dt()
t.eh(r,u,0,1)
t.k0(v,v,1,1)
t.eh(-r,-u,0,1)
t.iT(0,q)
s.sp(0,t)},
adl(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.B5(u.a.c),$async$adl)
case 2:t=s.ow(r.dJ(e,new C.e0b(u)))
if(t!=null&&u.c!=null)u.m(new C.e0c(u,t))
return A.h(null,v)}})
return A.i($async$adl,v)},
y8(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
w1(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$w1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hep(o,t,!1,r,new C.e0t(u),q.a,s),$async$w1)
case 2:n=A
m=J
w=3
return A.b(C.H2(u.a.c),$async$w1)
case 3:p=n.ow(m.dJ(e,new C.e0u(u)))
if(p!=null&&u.c!=null)u.m(new C.e0v(u,p))
return A.h(null,v)}})
return A.i($async$w1,v)},
JS(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
ue(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ue=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3n(t,s),$async$ue)
case 2:return A.h(null,v)}})
return A.i($async$ue,v)},
a1W(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uq(q,t.a.c)){t.y8("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ioF(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1W)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JS()
t.m(new C.e0J(t,r))
w=4
return A.b(t.ue(),$async$a1W)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1W,v)},
b25(){var w=this.c
w.toString
A.a5(w,!1).cc(A.ej(new C.e0q(this),!1,null,x.H))},
a0E(){return this.cin()},
cin(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uq(m,t.a.c)){t.y8("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.R(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e0G(),A.T(s).k("Y<1>")).gK(0)
s=A.eD([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cs.E"))
B.d.fh(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.e0H(n,t,new C.uc(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0E)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JS()
t.m(new C.e0I(t,o))
w=6
return A.b(t.ue(),$async$a0E)
case 6:case 5:if(o.a&&t.c!=null)t.b25()
case 1:return A.h(u,v)}})
return A.i($async$a0E,v)},
Wv(d){return this.bCl(d)},
bCl(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uq(r,t.a.c)){t.y8("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.e0_(t,d),r,null,!0,!0,x.P),$async$Wv)
case 3:s=f
if(s==null){w=1
break}t.JS()
t.m(new C.e00(t,s))
w=4
return A.b(t.ue(),$async$Wv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
a3L(d){return this.cHi(d)},
cHi(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.R(s)
t=u.c
t.toString
w=2
return A.b(A.ch(null,null,!0,null,new C.e0S(u,d,new C.uc(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3L)
case 2:return A.h(null,v)}})
return A.i($async$a3L,v)},
ceF(d){var w=this,v=w.d
v===$&&A.c()
if(C.uq(v,w.a.c))w.OG(d)
else w.a3L(d)},
aj4(d,e){return this.cyO(d,e)},
cyO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aj4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.R(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ch(null,null,!0,null,new C.e0M(new C.uc(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aj4)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aj4,v)},
Ip(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ip=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kP?3:5
break
case 3:w=6
return A.b(C.h1O(t.a.c),$async$Ip)
case 6:s=e
o=t.a
r=C.hmh(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aj4(!s,!r),$async$Ip)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQq(o,t.a.c)){t.y8("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lj(o,"Cancel","Remove",q.y===D.kP?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ip)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQm(t.a.c,t.d.a),$async$Ip)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.iZ(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ip,v)},
aaQ(d){return this.bNy(d)},
bNy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uq(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b_(s,new C.e01(p))){o=A.T(s)
p.a=A.ow(new A.cP(new A.Y(s,new C.e02(d),o.k("Y<1>")),new C.e03(),o.k("cP<1,m>")))}q=p.a
if(q==null)q=d.d
t.JS()
t.m(new C.e04(t,s,d,q))
w=3
return A.b(t.ue(),$async$aaQ)
case 3:t.y8(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaQ,v)},
OG(d){return this.bPL(d)},
bPL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uq(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3L(d),$async$OG)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ch(null,null,!0,null,new C.e08(t,d),r,null,!0,!0,x.P),$async$OG)
case 6:s=f
if(s==null){w=1
break}t.JS()
t.m(new C.e09(t,s))
w=7
return A.b(t.ue(),$async$OG)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OG,v)},
cFx(){var w=this,v=w.d
v===$&&A.c()
if(!C.uq(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e0R(w))
w.ue()},
Zq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQq(n,t.a.c)){t.y8("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.R(n)
s=$.aw()
r=new A.au(B.at,s)
q=t.d.e
p=A.bp(new A.N(q,t.gcd7(),A.T(q).k("N<1,m>")).bZ(0,new C.e0l()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.e0m(t,new C.uc(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zq)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JS()
t.m(new C.e0n(t,p))
w=4
return A.b(t.ue(),$async$Zq)
case 4:t.y8("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zq,v)},
cd8(d){return B.a.i(d.toLowerCase())},
ch9(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uq(v,w)
t=r.d
s=C.idL(t)
C.inz(q,t.b,u,C.idK(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.J,m=new C.uc(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e0Z(),A.T(l).k("Y<1>")).gK(0)
l=n?B.c2:B.iA
v=A.X(B.a1o,n?B.bu:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BY,A.aO(!1,o,!0,new A.D(B.hA,A.B(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e1_(p,d),o,o,o,o,o,o,o),o),new A.D(B.nv,p.c01(m),o)],u)
if(p.d.y===D.kP){t=B.t2.j(0.15)
s=A.n(12)
r=A.L(B.t2.j(0.45),B.r,1)
q=C.H0(p.d,p.a.c)
v.push(new A.D(B.yw,A.p(o,A.B(A.a([D.bXU,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.it,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b2],u)
if(C.uq(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gf("Undo",B.pl,p.gcFw(),m,o,o))
u.push(new C.Gf("Family Book",D.bNg,p.gch8(),m,B.tU,o))
u.push(new C.Gf("Family games",B.or,p.gchk(),m,B.aD,o))
if(C.uq(p.d,p.a.c))u.push(new C.Gf("Display settings",B.CN,p.gcim(),m,B.b1,o))
u.push(new C.Gf("Sync",B.z8,p.gagB(),m,o,o))
t=p.d
if(t.y===D.kP||C.aQq(t,p.a.c)){t=p.d.y===D.kP?"Remove shared tree":"Delete tree"
u.push(new C.Gf(t,B.eb,p.gbNI(),m,B.fb,o))}if(C.uq(p.d,p.a.c))u.push(new C.Gf("Add member",B.wx,new C.e10(p),m,B.bP,o))
v.push(new A.D(A_.alr,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gapP()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cu(new C.e11(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1s:A7.Ou,o,o,o,o,o)
v.push(A.at(A.ht(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e12(p),o),o,o,o))}return A.c6(o,l,A.bn(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
c01(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fM.j(0.35),B.ds,18)],x.V)
u=A.n(22)
t=A.ap(-26,A.X(B.z3,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.c01,B.f,m,m,new A.o(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cO,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagB(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.foy,m,m,m)
r=r.gapP()
p=n.d.gapP()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uq(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bY6,m,m,m,n.gcs8(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jE:B.mR
r=r?"Private":"Public"
r=A.E(n.awi(q,"Privacy",r,n.a.d.w?n.gcEr():m),1)
q=A.E(n.awi(B.z9,"Tree code",n.d.c,new C.e0a(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.B(A.a([r,B.ad,q,B.ad,A.E(n.awi(D.bOX,"Collaborators",p,n.gc4I()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kP){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aI(!1,B.a2,!0,A.n(999),A.aO(!1,A.n(999),!0,new A.D(B.h7,A.B(A.a([A.X(B.pm,B.c,m,m,m,14),B.ec,A.d("View only",m,m,m,m,m,m,B.aUq,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.ab,B.t,A.a([t,new A.D(B.GE,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c4l,B.n),m,m,m,m,m,m,m,1/0)},
awi(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a2,!0,A.n(14),A.aO(!1,A.n(14),!0,new A.D(I.amB,A.x(A.a([A.X(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vq,A.d(f,w,1,B.a1,w,w,w,Ap.Ap,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bgd.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgg(s,t),new A.av(w,v))],x.p)
r=r.gdR(r)
B.d.v(u,r.dH(r,new C.dfm(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dfn(this),A.T(r).k("N<1,v>")))
return new A.D(B.un,new A.a4(w,v,new A.an(B.a_,t,B.ab,B.f,u,t),t),t)}}
C.KA.prototype={}
C.Gj.prototype={}
C.bgf.prototype={
gbkp(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKi.prototype={}
C.bgg.prototype={
bPm(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.J()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.by
d.bo(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ag,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kO(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kO(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bt())
q=A.J()
q.r=B.c.gp(0)
d.ad(new A.u(u,w),9,q)
q=A.J()
q.r=B.bE.gp(0)
d.aK(t,q)},
bPk(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aX(a0,new C.dfH())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b_(a0,new C.dfI(f))
t=new A.N(a0,new C.dfJ(f),A.T(a0).k("N<1,I>")).bZ(0,new C.dfK()).cG(0,1/0,B.vN)
w=f.a
d.bo(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mY(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ag,null,null,h)
h.push(new A.aY(w,v-i))
l=j*i
h.push(new A.c5(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c5(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbu().a.snapshot()
r.drawPath((g.e=new A.cd(n)).a,k)
k.delete()}},
a4(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.J()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.by
w.e=B.dQ
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bPk(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bPm(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bk3.prototype={
gcaC(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aCG
switch(w.c.a){case 0:return D.cXW
case 1:return D.d90
case 2:return D.dqO}},
gcaF(){var w=this.c,v=C.hxe(w.w),u=C.hxe(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.J,q=t.gcaC(),p=t.c,o=N.bEw(p.f),n=t.gcaF(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cI,10)],m),k=r?B.au:B.c,j=A.L(r?B.au:B.c,B.r,2)
if(o!=null)w=A.tB(B.A,s,B.ci,B.bY,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hW(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.az,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.GU,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.L(r?B.au:B.c,B.r,1.5)
l.push(A.ap(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fz4,s,s,s),B.f,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bGf,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.n(8)
w=A.L(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dC,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.x(A.a([new A.an(B.a_,s,B.ab,B.f,l,s),B.av,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b58,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bGq,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a3)}}
C.bfi.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.S()
w=A.J()
v=this.b
u=v?B.c:D.bi0
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.by_.prototype={
B(d){var w=this,v=null,u=new C.fkP(w),t=w.c,s=t?B.cr:B.c,r=A.n(12),q=u.$3(B.hT,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.fj,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wz,"Zoom out",w.e)
return A.aI(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.fj,v,v,v,1,v,v,v,v,v,22),u.$3(B.ap2,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.ai)}}
C.bnn.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.L(B.bP,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.X(s?O.a1s:A7.Ou,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fvc,v,v,v)],r),B.m,v,B.b9,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a3)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.ft2,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eVJ(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a4(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_F.prototype={
R(){return new C.aD8()},
bv(){return this.Q.$0()},
ge2(){return this.w}}
C.aD8.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.bb(t,B.b4,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yK:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ifj(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
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
v.a1()},
Q9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hmh(p.y,p.w)
w=3
return A.b(A.lv(t.a.w,B.Jj),$async$Q9)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0I(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Q9)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hRk(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ay.Hc(78,800),$async$Q9)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dvz(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Q9,v)},
caE(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hX(B.o.u(1000*Date.now()),w,D.yK,null,null,null,"","","","","",1,!1,0)
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
s=v.aFl(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
aar(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aar=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dvy(r),s,null,!0,!0,x.y),$async$aar)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aar,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===B.J,i=new C.uc(j),h=l.a.e,g=A.T(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dvI(l),g),g.k("M.E"))
h=j?B.e4:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bEE,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.hf(A.aO(!1,k,!0,new A.D(B.mb,A.X(B.eb,B.p8,k,k,k,17),k),B.cO,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbKj(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jQ:B.jg
t=N.bEw(l.as)
if(l.as==null)s=A.X(B.pe,j?B.bu:B.bn,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a_,k,B.ab,B.t,A.a([A.hb(u,t,s,k,42),A.ap(0,A.hb(B.bP,k,D.bRB,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcaB(),k,k,k,k,k,k,!1,B.a3),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDa(t,"Full name",B.mO,1,1,i,B.mq)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bk1(i,u,new C.dvJ(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.by1],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dvK(),A.T(o).k("N<1,eJ<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.by3],q)
B.d.v(q,new A.N(f,new C.dvM(),A.T(f).k("N<1,eJ<m?>>")))
o=A.x(A.a([t,B.am,new C.adN(i,r,"Who is their parent?",p,new C.dvN(l),k,o),B.aB,n,B.am,new C.adN(i,m,"Who is their spouse / partner?",q,new C.dvO(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDa(q,"Birth date",D.ao7,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDa(m,"Birth place",B.a1H,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDa(n,"Date of death (if deceased)",D.aqg,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDa(p,"Occupation",B.a2T,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aB,s,B.bx,new C.adO(i,"Identity",u,k),B.ae,new C.adO(i,"Family links",o,k),B.ae,new C.adO(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aDa(r,"Notes",B.ld,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ae,new C.aD9(i,"Child order",l.ciB(l.at),new C.dvP(l),new C.dvQ(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hbG(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dvR(l):k
B.d.v(r,A.a([B.W,new C.aD9(i,"Visible in tree",u,w,new C.dvS(l),k)],v))}r.push(B.W)
w=j?B.jQ:B.jg
u=A.n(14)
t=A.L(j?B.ea:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iP(k,B.bP,k,B.af,k,new C.dvT(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.al5,k,k,k))
r.push(B.bx)
w=j?B.aP:B.au
j=j?B.ea:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nP,new C.dvL(d),A.dk(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b8(A.n(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bI(D.f6d,k,l.gcaD(),A.bo(B.aW,k,k,0,B.c,k,B.cm,k,new A.b8(A.n(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.av)
return A.ei(B.f2,k,B.af,h,new A.a4(420,k,A.ci(A.x(r,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.alV,k,B.ali,new A.b8(g,B.a0),k,k)},
ciB(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adO.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jQ:B.jg,s=A.n(16)
return A.x(A.a([new A.D(D.aml,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.L(v?B.ea:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bg,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bk2.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e4:B.c,r=A.n(12),q=A.L((t?B.ea:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.au,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Y,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eF,u,B.w9,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cA,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.aa,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adN.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e4:B.c,s=A.n(12),r=A.L((u?B.ea:B.bO).j(0.85),B.r,1),q=A.X(B.rN,u?B.bu:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.au,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e4:B.c
return A.p(v,new A.E5(A.a53(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cA,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.km,v,v,v)}}
C.bk1.prototype={
B(d){var w=new C.dvU(this)
return A.B(A.a([w.$3(D.wh,"Male",B.Pd),B.ad,w.$3(D.oj,"Female",B.OY),B.ad,w.$3(D.yK,"Other",B.nz)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aD9.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jQ:B.jg,r=A.n(14),q=A.L(t?B.ea:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.au,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJk(u,B.wz,w.f,v),B.bm,new C.aJk(u,B.hT,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eB,v,v,v)}}
C.aJk.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e4:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bP
else t=(s.c.a?B.bu:B.bn).j(0.4)
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a4(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.adP.prototype={
bTu(d){switch(d.a){case 0:return B.bP
case 1:return B.bE
case 2:return B.cY}},
bTv(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aYX(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ap(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e4:B.c
u=A.n(12)
t=A.L((w?B.ea:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.au,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.ct,B.ys,p,p,1/0)},
af1(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jQ:B.jg,s=A.n(16),r=A.L(v?B.ea:B.bO,B.r,1)
return A.x(A.a([new A.D(D.aml,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hCk(r,q),o=q.c,n=t.bTu(o),m=N.bEw(q.f),l=t.e.a,k=l?B.e4:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kP?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hb(u,m,m==null?A.X(B.pe,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bTv(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mL,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ap("Full name",i,B.mO)],u)
if(p>0)i.push(t.Ap("Child order","#"+p,B.P3))
r=A.a([h,B.av,r,B.aQ,l,B.W,v,B.bx,t.af1("Identity",i),B.ae,t.af1("Life details",A.a([t.Ap("Birth date",q.w,D.ao7),t.Ap("Birth place",q.x,B.a1H),t.Ap("Date of death",q.y,D.aqg),t.Ap("Occupation",q.z,B.a2T)],u)),B.ae,t.af1("Family links",A.a([t.Ap("1. Parent",t.aYX(q.d),B.H7),t.Ap("2. Spouse",t.aYX(q.e),B.Hl)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ae,t.af1("Notes",A.a([t.Ap("Notes",q,B.ld)],u))],u))
r.push(B.bx)
r.push(A.bI(B.KJ,s,new C.dw3(d),A.bo(B.aW,s,s,s,s,s,B.cm,s,new A.b8(A.n(14),B.a0),s,s,s)))
return A.eU(s,k,new A.cU(B.lW,A.ci(A.x(r,B.ak,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.wd,s,s,B.ah),s),s,s,s,B.GH,B.d8,s,new A.b8(j,B.a0),s)}}
C.Gf.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uq,A.hf(A.aI(!1,B.a2,!0,A.n(8),A.aO(!1,A.n(8),!0,new A.a4(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.aqv.prototype={
f_(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a9().ae())
w=u.c
v=A.T(w).k("N<1,a8<m,@>>")
w=A.C(new A.N(w,new C.cel(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jn(w,new C.cem(),t,x.fO))
return s}}
C.aqw.prototype={
R(){return new C.aEH(A.a([],x.bF))},
gd0(){return this.c}}
C.aEH.prototype={
Z(){this.a3()
this.JZ()},
JZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cep(t.a.c),$async$JZ)
case 3:r=e
w=4
return A.b(C.B5(t.a.c),$async$JZ)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rh(q,new C.e1b(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e1c(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JZ,v)},
yG(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
KJ(d,e){return this.cHZ(d,e)},
cHZ(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KJ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e1g(q,e))
t=3
w=6
return A.b(d.$0(),$async$KJ)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e1h(q))
$.eY.mA()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KJ,v)},
Yd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$Yd)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KJ(new C.e18(t),"Preparing download\u2026"),$async$Yd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yd,v)},
Yh(d){return this.bRo(d)},
bRo(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$Yh)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KJ(new C.e19(t,d),"Preparing file\u2026"),$async$Yh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yh,v)},
agY(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xB.ca().MC(B.Sb,B.us,!0),$async$agY)
case 7:r=e
o=r
q=o==null?null:J.fv(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jG(o,0,null)
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
case 6:u=A.Hb()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agY,v)},
YU(d){return this.c0X(d)},
c0X(d){var w=0,v=A.j(x.H),u=this
var $async$YU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KJ(new C.e1a(u,d),"Restoring family trees\u2026"),$async$YU)
case 2:return A.h(null,v)}})
return A.i($async$YU,v)},
YT(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agY(),$async$YT)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YU(s),$async$YT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YT,v)},
a2O(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$a2O)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KJ(new C.e1f(t),"Creating QR code\u2026"),$async$a2O)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2O,v)},
a2p(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dm()){t.yG("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).cc(A.ej(new C.e1d(),!0,null,x.N)),$async$a2p)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YU(r),$async$a2p)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2p,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.J,n=o?B.Bl:B.iA,m=o?D.ajv:B.aP,l=o?B.aK:B.bO,k=o?B.aP:B.au,j=new C.dfL(n,m,l,k,o?B.bL:B.bn)
l=A.aH(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.e1j(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eI(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dfj(!0,B.jG,B.aJ,B.aJ,q.r?p:q.gcyC(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcuL()
t.push(A.E(C.dfj(!s,B.jk,B.b7,B.bq,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dfj(!1,B.hU,B.aW,B.bP,q.r?p:q.gbRh(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dfj(!1,R.za,B.ay,B.aT,q.r?p:q.gc0U(),j,s,"Upload backup file"),1))
l=A.a([new C.bge(v,l,p),B.kX,new C.ad3(j,"QR restore",p),B.W,t,B.d4,new C.ad3(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kX,new C.ad3(j,"One tree",p),B.W],u)
B.d.v(v,J.b7(q.d,new C.e1k(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a09,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.L(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.ds,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bn(!0,A.p(p,A.B(A.a([O.aSQ,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.C3,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.a_,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.dfL.prototype={}
C.bge.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.kv,28)],x.V)
t=A.ap(p,A.X(B.uM,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.ab,B.t,A.a([t,new A.D(B.aa,A.B(A.a([A.p(p,D.c_y,B.f,p,p,new A.o(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oM,A.E(A.x(A.a([D.fEe,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c7A,B.n),p,p,p,p,p,p,p,p)}}
C.ad3.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ad,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bgc.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aJ.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aJ.j(0.1),B.cI,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aI(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eK(A.db(new A.D(E.a_M,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rJ,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cA,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bgh.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aW.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eK(new A.D(B.eS,A.B(A.a([A.p(v,D.bZN,B.f,v,v,new A.o(q,v,A.L(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rJ,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hU,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a0_.prototype={
R(){return new C.aEG()},
gd0(){return this.c}}
C.aEG.prototype={
Z(){this.a3()
this.a9Z()},
a9Z(){var w=0,v=A.j(x.H),u=this,t
var $async$a9Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3m(u.a.c,B.DV),$async$a9Z)
case 2:t=e
if(u.c!=null)u.m(new C.e13(u,t))
return A.h(null,v)}})
return A.i($async$a9Z,v)},
aim(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aim=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e14(q))
t=4
p=A.hnY(q.a.d,B.DV)
if(p==null){n=A.be("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asP(n.e,m,l,B.DV,p,n.f),$async$aim)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e15(q))
q.c.L(x.q).f.U(D.ffm)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.em(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e16(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aim,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.J,o=p?B.jw:B.qa,n=p?B.iz:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eI(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fUB,q,q,q,1,q,!0)
w=A.n(24)
v=A.L(B.aW.j(0.35),B.r,1)
u=A.q6(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.N,u,B.bx,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.b9,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.aa,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bt,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcut()
if(u)u=B.Kb
else u=A.X(r.e===!0?B.hB:B.ao6,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a4(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dk(q,q,q,q,q,q,q,q,q,B.aW,q,B.h0,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i7,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aC:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a4(1/0,q,A.bI(B.Ax,q,new C.e17(d),A.bo(B.aW,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.aa,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a00.prototype={
R(){return new C.blw(A.zF(B.yh,B.nV,B.uT))}}
C.blw.prototype={
t(){this.d.t()
this.a1()},
B(d){var w=null
return A.c6(A.eI(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fMq,w,w,w,1,w,!0),B.w,A.zE(this.d,B.bY,new C.e1l(this,d)),w,!1,!1,w,w)}}
C.b_e.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.RF,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lR.prototype={}
C.a6V.prototype={
R(){return new C.blc(null,null)}}
C.blc.prototype={
Z(){var w=this,v=null
w.a3()
w.d=A.bm(v,B.rC,v,1,v,w)
w.e=A.bm(v,B.qh,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bz(d){var w,v,u=this
u.bH(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bxI()},
B(d){var w,v,u=this,t=B.d.dN(D.a5L,new C.dNE(u),new C.dNF())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cBx(A.cb(new A.h9(A.a([w,v],x.dS)),new C.dNG(u,t),null),!0)}}
C.blb.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b2w(d,e)
break
case"house":p.mc(d,e,D.ddZ)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdE()
$.S()
t=A.J()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mi(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B9(d,e,12)
p.yi(d,e,B.l6,5,14)
break
case"grocery":p.cjk(d,e)
break
case"calculator":p.cj1(d,e)
break
case"lumber":p.cjs(d,e)
break
case"kitchen":p.cjn(d,e)
break
case"landscape":p.mc(d,e,D.deA)
s=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c5(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c5(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bt())
w=A.J()
w.r=B.ej.j(0.85).gp(0)
d.aK(s,w)
p.B9(d,e,8)
p.yi(d,e,B.ir,4,18)
break
case"plumbing":p.cjB(d,e)
break
case"electrical":p.mc(d,e,D.dq1)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.J()
u.r=B.c.j(q*0.12).gp(0)
d.aQ(new A.a3(0,0,0+e.a,0+e.b),u)
p.mi(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mi(d,e,B.m1.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B9(d,e,10)
break
case"store":p.cjL(d,e)
break
case"paint_remodel":p.cjw(d,e)
break
case"roofing":p.cjD(d,e)
break
case"warehouse":p.cjS(d,e)
break
case"vehicles":p.cjQ(d,e)
break
case"farm":p.cje(d,e)
break
case"restaurant":p.cjC(d,e)
break
case"tools":p.cjO(d,e)
break
case"wallet":p.cjR(d,e)
break
case"concrete":p.cj7(d,e)
break
case"blueprint":p.cj_(d,e)
break
default:p.b2w(d,e)}},
mc(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.J()
w.sam(new A.a9(B.az,B.aE,B.x,f,null,null).aA(0,v))
d.aQ(v,w)},
mi(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gdE()/2-h
$.S()
w=A.J()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bY(q,p)
r=w.G()
v.drawArc.apply(v,[A.bH(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
yi(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdE()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B9(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b2w(d,e){var w,v=this
v.mc(d,e,D.dok)
w=v.c
v.mi(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mi(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bPg(d,e,B.i2,w)
v.yi(d,e,B.c.j(0.7),6,8)},
bPg(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.J()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bH(new A.a3(16,q,t,q+3)),p)
p.delete()}},
cjk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.mc(d,e,D.ctg)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=D.dcb[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mi(d,e,B.c.j(0.35),w,16)
j.yi(d,e,B.ir,5,12)},
cj1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.mc(d,e,D.cto)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdE()
$.S()
q=A.J()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ad(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fz(g,g,g,g,g,B.a4,B.bX,g,B.dA,B.bV)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dgj[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saZ(0,new A.es(r,g,g,B.cL,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eg()
p.a4(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ctq[o]
l=B.kF.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saZ(0,new A.es(m,g,g,B.cL,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eg()
p.a4(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.mi(d,e,B.c.j(0.35),w*1.5,14)
h.mi(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
h.mi(d,e,B.y1.j(0.4),r*2.8,22)
h.yi(d,e,B.q_,8,10)
h.B9(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ao(B.Q,B.M,B.S,B.T,B.R)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cjs(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.mc(d,e,W.azP)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.br(new A.a3(20,q,u,q+10),B.hH)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=A.ar(B.fU,B.o0,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.e7(p),n)
n.delete()}m.mi(d,e,B.fU.j(0.35),w,15)
m.B9(d,e,8)},
cjn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.mc(d,e,D.dcG)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ao(B.Q,B.M,B.S,B.T,B.R)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.mi(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
j.yi(d,e,B.pX,4,14)},
cjB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mc(d,e,D.d0U)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ao(B.Q,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.yi(d,e,B.p6,6,12)
l.mi(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cjL(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mc(d,e,D.cH1)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.br(new A.a3(q,14,q+u,22),B.ii)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.fe,B.bM,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.e7(q),o)
o.delete()}n.mi(d,e,B.c.j(0.3),w,16)
n.B9(d,e,8)
n.yi(d,e,B.vU,5,13)},
cjw(d,e){var w,v,u,t,s,r,q,p,o
this.mc(d,e,D.d7e)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.br(new A.a3(q,p,q+8,p+(18+r*22)),B.hI)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=[B.io,B.du,B.bM,B.ep][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.e7(p),o)
o.delete()}this.mi(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cjD(d,e){var w,v,u,t,s,r,q,p,o
this.mc(d,e,D.d4A)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.yi(d,e,B.cq,7,11)},
cjS(d,e){var w,v,u,t,s,r,q,p,o,n
this.mc(d,e,D.cJL)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.br(new A.a3(p,o,p+(t-r*8),o+16),B.hH)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.e7(o),n)
n.delete()}this.mi(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cjQ(d,e){var w,v,u,t,s,r,q,p,o
this.mc(d,e,D.dua)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.br(new A.a3(r,q,r+28,q+8),B.hH)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.e7(q),o)
o.delete()}this.B9(d,e,6)},
cje(d,e){var w,v,u,t,s,r,q,p,o,n
this.mc(d,e,D.dbe)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.J()
s.r=B.m1.j(0.75).gp(0)
d.ad(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.hi.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mi(d,e,B.m1.j(0.35),w,14)},
cjC(d,e){var w,v,u,t,s,r,q,p,o=this
o.mc(d,e,D.ddO)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bK(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ao(B.Q,B.M,B.S,B.T,B.R)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bH(r),p)
p.delete()}o.yi(d,e,B.pX,5,16)
o.B9(d,e,7)},
cjO(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.mc(d,e,D.drA)
w=m.c
v=w*3.141592653589793
m.mi(d,e,B.o0.j(0.55),v*3,10)
m.mi(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.o0.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cjR(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.mc(d,e,D.duR)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.br(new A.a3(p,o,p+36,o+22),B.ii)
$.S()
p=new A.ao(B.Q,B.M,B.S,B.T,B.R)
p.r=A.ar(B.ir,B.m1,q).gp(0)
n=p.G()
s.drawRRect(A.e7(o),n)
n.delete()}m.B9(d,e,9)
m.mi(d,e,B.c.j(0.4),w*2.2,12)},
cj7(d,e){var w,v,u,t,s,r,q,p,o,n
this.mc(d,e,D.djc)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.u(v,u),34)
$.S()
s=A.J()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e4(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ao(B.Q,B.M,B.S,B.T,B.R)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cj_(d,e){var w,v,u,t,s,r,q,p
this.mc(d,e,D.deV)
$.S()
w=A.J()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.G()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.G()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.S()
u=A.J()
u.r=B.du.j(0.45).gp(0)
d.aQ(new A.a3(0,p,0+v,p+6),u)
this.mi(d,e,B.l6.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.atA.prototype={
a01(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a01=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRj(),$async$a01)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a97(s),$async$a01)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a01,v)},
agZ(d){return this.cm8(d)},
cm8(d){var w=0,v=A.j(x.H),u=this,t
var $async$agZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.inJ(d),$async$agZ)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agZ,v)},
B(d){var w,v,u,t=null,s=A.R(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jQ:B.jg
w=x.p
v=A.a([C.aRI(!0,B.rc,1/0,B.qt,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c4(new A.bN(B.b0,t,t,new A.D(B.w5,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.U,t,t,!0,t,t,t,t,t,B.aAN,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b0,B.b6,B.x,u,t,t),B.n),B.bh))}v.push(A.ap(8,A.B(A.a([A.E(A.dj(D.bTm,D.fAs,new C.cnj(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jW,t,t,t,t,B.cc)),1),B.ad,A.E(A.ex(D.c0O,D.fPA,this.gcd5(),A.dk(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jW,t,t,D.b3G,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fK(1.7777777777777777,A.aI(!1,B.a2,!0,B.rc,new A.an(B.a_,t,B.b3,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.ai),t)}}
C.aML.prototype={
aV(){this.b2()
this.b1()
this.dK()},
t(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.aUL.prototype={}
C.aUK.prototype={}
C.aSI.prototype={}
C.ZD.prototype={
R(){return new C.azT()}}
C.azT.prototype={
Z(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bb("",B.b4,B.aO)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a1()},
Kz(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.ffR)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aUL(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.R(d).ax.a===B.J,l=m?B.e4:B.c,k=A.n(20),j=A.p(n,D.c0t,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.au,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cx,m?B.bu:B.bn,n,n,n,n),n,n,n,new C.d6T(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cA,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hod(new C.d6U(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.au,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jQ:B.jg
r=A.n(12)
q=A.n(12)
p=m?B.ea:B.bO
t=A.aM(n,B.Y,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b6(4,r,B.dk),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d6V(o),n,!1,n,n,!1,n,!0,n,B.aa,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,A0.Ki,n,n,n,n)
u=m?B.aP:B.au
m=m?B.ea:B.bO
return A.eU(n,l,new A.cU(B.lW,A.ci(A.x(A.a([j,B.aQ,i,B.av,w,B.N,v,B.aQ,t,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d6W(d),A.dk(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b8(A.n(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bI(D.fPP,n,o.ga38(),A.bo(B.aW,n,n,n,B.c,n,B.cm,n,new A.b8(A.n(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.C4,n,n,B.ah),n),n,n,n,A6.C5,B.d8,n,new A.b8(k,B.a0),n)}}
C.ZC.prototype={
R(){return new C.azS()}}
C.azS.prototype={
Z(){this.a3()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.at,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a1()},
Kz(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.fdu)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aUK(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.R(d).ax.a===B.J,o=p?B.e4:B.c,n=A.n(20),m=A.p(q,D.bXZ,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cx,p?B.bu:B.bn,q,q,q,q),q,q,q,new C.d6P(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.n(12)
v=A.L(B.aW.j(0.25),B.r,1)
u=A.X(B.anT,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.au,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jQ:B.jg
t=A.n(12)
s=A.n(12)
r=p?B.ea:B.bO
v=A.aM(q,B.Y,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b6(4,t,B.dk),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d6Q(this),q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kY,q,q,q,q)
w=p?B.aP:B.au
p=p?B.ea:B.bO
return A.eU(q,o,new A.cU(B.lW,A.ci(A.x(A.a([m,B.aQ,l,B.aB,v,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d6R(d),A.dk(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b8(A.n(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bI(D.fWS,q,this.ga38(),A.bo(B.bP,q,q,q,B.c,q,B.cm,q,new A.b8(A.n(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.C4,q,q,B.ah),q),q,q,q,A6.C5,B.d8,q,new A.b8(n,B.a0),q)}}
C.Z9.prototype={
R(){return new C.ayy()}}
C.ayy.prototype={
Z(){var w,v=this
v.a3()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.at,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.bb("1",B.b4,B.aO),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.at,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.at,w)},
t(){var w,v=this,u=v.d
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
v.a1()},
gJU(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gak8(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb5j(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aPV(d){var w,v=B.k.E(this.gJU()+d,0.25,999999),u=B.k.jo(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saZ(0,u)
this.m(new C.cFj())},
az_(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jQ:B.jg,s=A.n(14),r=A.n(14)
u=u?B.ea:B.bO
return A.bs(w,new A.b6(4,s,B.dk),w,B.bD,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.adk),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cd6(d,e,f){return this.az_(d,e,f,null)},
Kz(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gak8()<=0){s.c.L(x.q).f.U(D.fhJ)
return}r=s.c
r.toString
v=s.gJU()
u=s.gak8()
t=s.gb5j()
A.a5(r,!1).O(new C.aSI(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.J,m=new C.uc(n),l=n?B.e4:B.c,k=A.n(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bRh,B.f,o,o,new A.o(o,o,A.L(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cA,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cx,n?B.bu:B.bn,o,o,o,o),o,o,o,new C.cFp(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Y,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.az_(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Pb),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,A0.Ki,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jQ:B.jg
t=A.n(14)
s=A.L(n?B.ea:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.wz,n?B.aP:B.au,o,o,o,20),o,o,o,new C.cFq(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c2n,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cFr(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a4(52,o,q,o),A.aH(o,o,o,o,A.X(B.hT,n?B.aP:B.au,o,o,o,20),o,o,o,new C.cFs(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.az_(m,"Amount","0.00",B.i8),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cFt(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d7K,new C.cFu(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.N,s,B.ae,A.bX(B.bG,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.cd6(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cFv(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kY,o,o,o,o)],w))}i.push(B.aQ)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.L(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJU()===B.k.jo(p.gJU())?B.k.N(p.gJU()):p.gJU()
s=p.gb5j()
r=A.B7(p.gak8())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.av,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bFj(p.gJU()*p.gak8(),B.b1,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jj,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.ea:B.bO
h=A.dk(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b8(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.au,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cFw(d),h),1),B.as,A.E(A.dj(D.arm,D.fSL,p.ga38(),A.bo(B.aW,o,o,0,B.c,o,B.cm,o,new A.b8(A.n(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eU(o,l,new A.cU(A5.adK,A.ci(A.x(i,B.ak,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Aj.rI,o,o,B.ah),o),o,o,o,B.NU,B.d8,o,new A.b8(k,B.a0),o)}}
C.a1N.prototype={
R(){return new C.bxQ()}}
C.bxQ.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.bb(w,B.b4,B.aO),v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.J,q=r?B.e4:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.au,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jQ:B.jg
v=A.aM(s,B.Y,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b6(4,A.n(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fk8(t,d),s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.di,new C.fk9(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eU(s,q,new A.D(B.C4,A.x(A.a([o,B.aB,v,B.aQ,A.B(A.a([u,B.as,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fka(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d8,s,new A.b8(p,B.a0),s)}}
C.ac7.prototype={
a6(){return"WorksheetFrameStyle."+this.b}}
C.G4.prototype={
R(){return new C.bxO(null,null)}}
C.bxO.prototype={
Z(){var w,v=this
v.a3()
w=A.bm(null,D.byB,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bA0()},
gbBw(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b1],x.O)
case 2:return A.a([B.bv,B.aW,B.b1],x.O)
case 3:return A.a([B.aJ,B.cf,B.kh],x.O)
case 4:return A.a([B.hj,B.bP,B.fi],x.O)
case 0:return A.a([B.aW,B.bP,B.b1],x.O)}},
B(d){var w=A.R(d),v=this.d
v===$&&A.c()
return new A.er(A.cb(v,new C.fk6(this,new C.uc(w.ax.a===B.J)),null),null)}}
C.ayr.prototype={
R(){return new C.bxP(null,null)}}
C.bxP.prototype={
Z(){var w,v=this
v.a3()
w=A.bm(null,B.np,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bA1()},
B(d){var w=this.d
w===$&&A.c()
return A.cb(w,new C.fk7(this),null)}}
C.bxN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.br(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
u.D(new A.iV(v))
w=A.J()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.az(v,w)
w=A.J()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aK(u,w)
w=A.xz(u)
t=A.a([],x.U)
w=new A.rs(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jE(y.B));--r
q=new A.BA(w,r)
w.ii()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aTm(d,q,r,o,0,0.2,4.2,0.92)
p.aTm(d,q,r,s,0.52,0.11,3.2,0.58)}},
aTm(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hKs(e.a.a,e,t,t+f*i,!0),r=A.bDF(s.gbu().a.getBounds())
$.S()
w=A.J()
w.b=B.a9
w.c=j
w.d=B.by
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Ii,null).aA(0,r))
d.aK(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aOR.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.aOS.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.uc.prototype={}
C.atz.prototype={
R(){return new C.aGa()},
ge2(){return this.c}}
C.aGa.prototype={
Z(){var w=this
w.a3()
w.d=w.a.d
w.ahP()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LM(w,v)
this.a1()},
ahP(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bDN(t.c,t.d.a),$async$ahP)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eST(u,s))
return A.h(null,v)}})
return A.i($async$ahP,v)},
QA(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eSK(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LM(t,s),$async$QA)
case 2:if(u.c!=null)u.m(new C.eSL(u))
return A.h(null,v)}})
return A.i($async$QA,v)},
R6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$R6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.R(p)
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.eSR(t,new C.uc(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$R6)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a97(q),$async$R6)
case 6:case 5:t.m(new C.eSS(t,r))
w=7
return A.b(t.QA(),$async$R6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$R6,v)},
Wp(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.inu(r),$async$Wp)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eSF(t,new C.rm(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QA(),$async$Wp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wp,v)},
cib(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hCg(t,new C.eSJ(u),w,v)},
abL(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b3s,w,w,B.n),w,22,w,w,w,w,w,22)},
aaP(d){return this.bNv(d)},
bNv(d){var w=0,v=A.j(x.H),u=this
var $async$aaP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eSI(u,d))
w=2
return A.b(u.QA(),$async$aaP)
case 2:return A.h(null,v)}})
return A.i($async$aaP,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.R(a2).ax.a===B.J,e=f?B.c2:B.iA,d=A.n(8),a0=A.X(Z.a1p,f?B.bu:B.bn,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.GO,A.B(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eSU(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b3,B.t,A.a([A.bx(A.n(22),C.aRI(!0,A.n(22),1/0,B.qt,g,d,1/0),B.ap),A.ap(10,A.dj(D.bVW,D.fV9,h.gb3e(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b8(A.n(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.eU,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.n(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b3,B.t,A.a([C.aRI(!0,A.n(16),1/0,B.OF,g,r.c,1/0),A.c4(g,new A.o(g,g,g,g,g,new A.a9(B.b0,B.b6,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bh),A.ap(g,h.abL(!0),g,g,8,g,8,g),A.ap(g,A.cCh(h.abL(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cCh(h.abL(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cCh(h.abL(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dj(D.bRS,D.fOw,h.gb3e(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b8(A.n(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c44,B.n),g,g,g,g,B.mb,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bec,B.o4,B.h4],u):A.a([B.b1,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.eU,24)],t)
r=A.n(22)
p=A.ap(g,A.X(B.jZ,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h6,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bFj(h.d.gxj(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cA,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.L(B.hl.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aJ.j(0.28),B.cI,14)],t)
j=B.aJ.j(0.22)
i=A.n(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.ab,B.t,A.a([p,new A.D(D.bDp,A.B(A.a([o,B.as,A.aI(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eK(new A.D(V.wb,A.x(A.a([A.p(g,D.aqX,B.f,g,g,new A.o(j,g,A.L(B.aJ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.fG,D.fDi],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcia(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.az,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aQ,w,B.N,u,B.bx,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b2,A.dj(Av.a3g,D.fB7,h.gbBZ(),A.bo(B.aW,g,g,g,B.c,g,B.it,g,new A.b8(A.n(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.e4:B.c
v=A.n(14)
u=A.L(f?B.ea:B.bO,B.r,1)
t=A.X(B.a1K,f?B.bu:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.au,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qp,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eSV(h,new C.uc(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BU,A.at(A.n2(g,f?B.bu:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bn(!0,A.x(A.a([new A.D(B.BY,a0,g),A.E(A.ci(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yz,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bFF(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e4:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cI,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b6c,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.i9:B.hq,B.b1,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.au,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcYz()
v=A.B7(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bFj(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h8,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.Ev(A.B(A.a([m,A.E(new A.D(B.akZ,A.B(A.a([l,B.bd,t,B.ad,k,A.aH(u,u,u,u,A.X(B.cx,(r?B.bu:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eSG(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b54,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d1,u,u,u,u)}}
C.ae9.prototype={
EK(d){return this.bOT(d)},
bOT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pr(d,o,!1),$async$EK)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bP(Ai.BS,null,x.H),$async$EK)
case 4:s=t.d
w=5
return A.b(C.fTc(!0,o,s),$async$EK)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.H_(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EK)
case 6:p=f
w=7
return A.b(A.pq(o,!1),$async$EK)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EK,v)},
a03(d){return this.cyD(d)},
cyD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a03=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pr(d,s,!1),$async$a03)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hI(d,new C.att(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pq(s,!1),$async$a03)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a03,v)},
QB(d){return this.cuG(d)},
cuG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hI(d,D.aKy,!0,"NgmyWorksheetProjectScan",x.N),$async$QB)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFk(s),$async$QB)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fgR)
w=1
break}q=C.he1(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dV(p,x.H),$async$QB)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QB,v)},
a04(d){return this.cGP(d)},
cGP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a04=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bER(),$async$a04)
case 3:s=f
if(s==null){w=1
break}r=C.he1(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dV(q,x.H),$async$a04)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a04,v)},
B(d){var w=this,v=null,u=A.R(d).ax.a===B.J,t=new C.uc(u),s=w.d.d.length,r=u?B.e4:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kv,36)],x.V),o=x.p
return A.bn(!0,new A.D(B.wa,A.p(v,A.x(A.a([w.cxc(d,t,s),new A.D(D.bCO,A.x(A.a([w.b6f(t,"QR restore"),B.W,A.B(A.a([w.b1e(t,!0,B.jG,B.aJ,B.aJ,new C.eSX(w,d),"Show to scan","QR code"),B.as,w.az0(t,B.jk,B.b7,B.bq,new C.eSY(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b6f(t,"Backup files"),B.W,A.B(A.a([w.az0(t,B.hU,B.aW,B.bP,new C.eSZ(w,d),"Full copy","Backup file"),B.as,w.az0(t,R.za,B.ay,B.aT,new C.eT_(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cxc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f9,B.cQ,B.fM],k):A.a([B.b1,B.aW,B.bP],k)
w=A.ap(l,A.X(B.uM,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.n(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cI,12)],x.V)
r=this.d
s=A.p(l,C.aRI(!0,A.n(13),64,D.bN9,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,K.aaK,l,l,l)
r=C.bFj(r.gxj(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.ab,B.t,A.a([w,new A.D(D.bDb,A.x(A.a([v,A.B(A.a([s,B.es,A.E(A.x(A.a([u,B.av,t,B.N,A.B(A.a([r,B.ad,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fP,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eSW(d),l,l,l,A.nS(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aSE,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.az,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b6f(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ad,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b1e(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.ajv:B.aP
if(e)w=B.aJ.j(o?0.45:0.35)
else{w=o?B.ea:B.bO
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aJ.j(0.12),B.cI,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.L(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rJ,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.au,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eK(new A.D(E.a_M,A.x(A.a([t,B.ae,u,B.bF,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cA,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
az0(d,e,f,g,h,i,j){return this.b1e(d,!1,e,f,g,h,i,j)}}
C.att.prototype={
R(){return new C.bmT()}}
C.bmT.prototype={
Z(){this.a3()
this.afJ()},
afJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFl(p.c,p.d),$async$afJ)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eSA(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eSB(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.R(d).ax.a===B.J,f=g?B.Bl:B.iA,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eK,g?B.ac:B.al,h,h,h,18),h,h,h,new C.eSC(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.O,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.Aj],u),B.m,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f9,B.cQ,B.fM],s):A.a([B.b1,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.K,h,h)
p=C.bFj(p.gxj(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ad,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fP,h,h,h)],u),B.m,h,B.b9,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.az,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a08,h,h,1/0)
t=g?D.bpi:B.c
q=A.n(24)
p=A.L(w?B.aJ.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.ds,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.V8,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eoO)
else{m=A.n(20)
l=A.L(B.aN,B.r,1)
o.push(A.p(h,A.q6(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aJ:B.aW
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.L((w?B.aJ:B.aW).j(0.35),B.r,1)
k=w?B.OT:B.Ps
k=A.X(k,w?B.aJ:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.it,h,h,h))
return A.c6(h,f,A.bn(!0,A.x(A.a([new A.D(Af.O5,e,h),A.E(A.ci(A.x(A.a([s,B.aQ,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.up,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.am6,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.aty.prototype={
R(){return new C.aG9(A.zF(B.Nn,B.nV,B.uT))}}
C.aG9.prototype={
t(){this.d.t()
this.a1()},
aNU(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iZ(w,d)},
ce_(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.ilm(t)
if(s!=null){this.aNU(s)
return}r=C.hsK(t)
if(r!=null)q=A.cV(r,p,0)
else q=!1
if(q){this.aNU(B.a.i(B.a.b3(r,B.a.cp(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eI(A.a([A.aH(t,t,t,t,A.X(u.f?B.uB:Aa.P_,t,t,t,t,t),t,t,t,new C.eSE(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Bl,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fOp,t,t,t,1,t,!0),q=A.zE(u.d,B.bY,u.gcdZ()),p=A.n(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.L(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c6(r,B.w,new A.an(B.a_,t,B.b3,B.t,A.a([q,p,A.ap(32,A.p(t,D.fNa,B.f,t,t,new A.o(w,t,A.L(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jj,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aL5.prototype={
a6(){return"_WorksheetTab."+this.b}}
C.OH.prototype={
R(){return new C.aGb(D.acC,A.a([],x.D))},
bv(){return this.r.$0()},
ge2(){return this.c}}
C.aGb.prototype={
gcEF(){return J.bGt(this.e,0,new C.eTm())},
Z(){this.a3()
$.aW.c1$.push(this)
this.w0()},
t(){$.aW.hV(this)
this.a1()},
ji(d){if(d===B.fK)this.w0()},
w0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$w0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Dl(q.a.c).dc(0,B.jA),$async$w0)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eTi(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eTj(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w0,v)},
Ij(d){return this.bLC(d)},
bLB(){return this.Ij(null)},
bLC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ij=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.inw(l,d),$async$Ij)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lz(l,r,q,D.djq,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LM(t.a.c,p),$async$Ij)
case 4:o=f
w=5
return A.b(t.w0(),$async$Ij)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.fdY)
w=1
break}n=J.aX(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.ffL)
else n.L(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EO(m)
case 1:return A.h(u,v)}})
return A.i($async$Ij,v)},
EO(d){return this.chX(d)},
chX(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hI(s,new C.atz(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EO)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LM(u.a.c,t),$async$EO)
case 5:case 4:w=6
return A.b(u.w0(),$async$EO)
case 6:return A.h(null,v)}})
return A.i($async$EO,v)},
vO(d){return this.c0Z(d)},
c0Z(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bER(),$async$vO)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hI(r,D.aKy,!0,"NgmyWorksheetProjectScan",x.N),$async$vO)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFk(q),$async$vO)
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
r.U(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.he1(s)
w=15
return A.b(C.LM(t.a.c,p),$async$vO)
case 15:o=f
w=16
return A.b(t.w0(),$async$vO)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.ffQ)
w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EO(p)
case 1:return A.h(u,v)}})
return A.i($async$vO,v)},
Oi(d){return this.bKg(d)},
bKg(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ch(null,null,!0,null,new C.eT3(d),s,null,!0,!0,x.y),$async$Oi)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oZ(t.a.c,A.a([],x.D)),$async$Oi)
case 6:w=7
return A.b(t.w0(),$async$Oi)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fe2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oi,v)},
ci9(d){var w=this.c
w.toString
A.bV(B.L,null,new C.eTc(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b6R(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jQ
else w=B.c
v=A.n(16)
u=A.L(p?B.ea:B.bO,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.au,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ae,t,B.bF,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.w9,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a0z(d,e){return this.chY(d,e)},
chY(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.eT7(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0z)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hCg(r,new C.eT8(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ok(d,e),$async$a0z)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0z,v)},
b3R(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aw
else t=h.a?B.aP:B.au
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.C3,A.B(A.a([s,B.bd,t,A.X(B.eE,w?B.bu:B.bn,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
coS(d,e,f,g,h,i){return this.b3R(!1,d,e,f,g,h,i)},
Ok(d,e){return this.bKq(d,e)},
bKq(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ok=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lj(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ok)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDz(t.a.c,d.a),$async$Ok)
case 6:w=7
return A.b(t.w0(),$async$Ok)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ok,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.J,n=new C.uc(o),m=o?B.c2:B.iA
if(q.f)o=D.bc_
else{w=q.bEM(n)
v=q.c02(n)
u=q.gbBT()
if(o)t=B.jQ
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ae,v,B.aQ,new C.G4(A.p(p,A.B(A.a([q.aCz(P.OE,"Projects",n,D.acC),q.aCz(B.wo,"Cashier",n,D.b0c),q.aCz(B.H7,"Family Tree",n,D.hyH)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bx],r)
w=q.d
if(w===D.acC){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.au,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b2,new C.ayr(q.gaS8(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aB,q.coU(n)],r))}else{o=q.a
if(w===D.b0c)u.push(new C.apn(o.c,n,p))
else{w=q.r
u.push(new C.aqy(o.c,o.d,o.e,o.f,new C.eTp(q),new C.eTq(q),new A.bQ(w,x.b4)))}}o=A.ci(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Al.NZ,p,p,B.ah)}return A.c6(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bEM(d){var w=null,v=A.n(8),u=d.a,t=A.X(Z.a1p,u?B.bu:B.bn,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kN,A.B(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eT0(this),w,w,w,w,w,w,w)},
gbBT(){switch(this.d.a){case 0:return D.abO
case 1:return D.hnE
case 2:return D.abP}},
c02(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cy,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bXP,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bHG,A.aI(!1,B.a2,!0,w,A.aO(!1,A.n(12),!0,A.p(w,D.bVe,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eT4(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b1.j(0.55),q=A.n(12)
return new C.G4(A.p(w,A.x(A.a([new A.D(E.a_S,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.B7(this.gcEF()),w,w,w,w,w,w,D.fxm,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.ul,B.jj,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hnD,w)},
aCz(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aW:B.L,q=A.n(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cI,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bn
return A.E(A.aI(!1,B.a2,!0,u,A.aO(!1,s,!0,A.cY(u,A.B(A.a([w,B.ec,new A.ds(1,B.cn,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.i,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iG,u,u,u,u,B.GP,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eTl(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
coU(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.e4:B.c
u=A.n(15)
t=A.p(p,D.bVk,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.eU,28)],x.V),D.c6z,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.au,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.G4(A.p(p,A.x(A.a([t,B.d4,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dT,A.B(A.a([A.E(q.aTI(B.jk,"Scan QR",new C.eTf(q),d),1),B.as,A.E(q.aTI(R.za,"Upload file",new C.eTg(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aB,A.bI(D.fYQ,p,q.gaS8(),A.bo(B.aW,p,p,p,B.c,B.h0,p,p,new A.b8(A.n(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bEg,1.05,D.abO,p)}w=J.b7(q.e,new C.eTh(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.G4(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bT,1,D.abO,p)},
aTI(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.L(B.aW.j(0.45),B.r,1)
return A.aI(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.fvE,B.K,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.akS,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
coT(d,e){var w,v,u=null,t=e.a,s=t?B.e4:B.c,r=A.n(14),q=A.L(t?B.ea:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.en,10)],x.V),o=A.n(14),n=t?B.bu:B.bn
n=A.bx(B.Xc,new A.fK(1.7777777777777777,C.aRI(!0,B.fL,1/0,P.OE,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.au,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.B7(d.gxj()),u,u,u,u,u,u,D.ftC,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aI(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bD,A.B(A.a([v,A.aH(u,u,u,u,A.X(Am.a2s,t?B.bu:B.bn,u,u,u,u),u,u,u,new C.eTd(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eTe(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ee,u,u,u,1/0)}}
C.bzD.prototype={}
C.rm.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcYz(){var w,v,u,t,s=this.c
if(s===B.k.jo(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lz.prototype={
gxj(){return B.d.cG(this.d,0,new C.cEJ())},
ah(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.cEI(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
be8(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lz(w.a,w.b,v,u,w.e)},
bdR(d){return this.be8(d,null)},
Tl(d){return this.be8(null,d)}}
C.I7.prototype={
a6(){return"FamilyGender."+this.b}}
C.hX.prototype={
ah(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.hxQ(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aFl(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hX(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alB.prototype={
a6(){return"FamilyTreeAccessRole."+this.b}}
C.kQ.prototype={
gapP(){var w=this.f
return new A.Y(w,new C.bS4(),A.T(w).k("Y<1>")).gK(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.bS3(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.idJ(w.y),"games",w.z],x.N,x.z)},
wF(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kQ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
be7(d,e){var w=null
return this.wF(w,w,w,d,e,w,w,w,w)},
cNY(d,e,f,g,h,i,j){return this.wF(d,e,null,f,g,h,i,j,null)},
aFq(d,e){var w=null
return this.wF(w,w,w,w,d,w,w,e,w)},
cO_(d,e,f,g,h,i,j,k){return this.wF(d,e,null,f,g,h,i,j,k)},
cMs(d){var w=null
return this.wF(w,w,w,w,w,w,w,d,w)},
cMQ(d){var w=null
return this.wF(w,w,w,w,w,w,w,w,d)},
bdL(d){var w=null
return this.wF(w,w,d,w,w,w,w,w,w)},
aFb(d){var w=null
return this.wF(w,w,w,w,w,d,w,w,w)},
cNu(d,e,f){var w=null
return this.wF(w,d,w,w,e,w,w,f,w)},
cMf(d){var w=null
return this.wF(w,w,w,d,w,w,w,w,w)},
cN2(d,e){var w=null
return this.wF(d,w,w,w,w,w,e,w,w)}}
C.cEK.prototype={
a6(){return"WrapAlignment."+this.b}}
C.cEL.prototype={
a6(){return"WrapCrossAlignment."+this.b}}
C.aIg.prototype={}
C.bam.prototype={
bx(d){this.a=d.a
this.b=d.b},
cX(d){var w=new C.bam()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.bal.prototype={
gwx(){return!0},
gGm(){return this.z.b<this.b.length},
aVl(d){switch(0){case 0:return d.a.c}},
aV2(d){switch(0){case 0:return d.a.d}},
bUo(d,e){switch(0){case 0:return new A.hT(d,e)}},
bTM(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hg(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iN(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HT(b4)
switch(0){case 0:v=b5.b
u=new A.kM(0,v,0,1/0)
t=w===B.V_
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fQ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.hg(b4,u,!0)
f=b1.aVl(g)
f.toString
e=b1.aV2(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIg(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIg(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hT(m,l))
a0=q.a
a1=q.b
b1.a=new A.iN(0,0,a0,a1)
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
a8=b1.aVl(g)
e=b1.aV2(g)
e.toString
a9=b1.bTM(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bUo(a6,a3+a9)
b0=g.a
g.a=new A.iN(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fX(d){var w,v,u,t,s,r=this
r.lx(d)
w=d.b
w.ip()
v=A.dt()
u=r.a
v.eh(u.a,u.b,0,1)
w.pf(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fX(d)
w.nu(0)},
GQ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ip(){return this.z}}
C.bxR.prototype={}
var z=a.updateTypes(["aB<~>()","P(hX)","~()","P(kQ)","P(nt)","a8<m,@>(kQ)","G(kQ,kQ)","G(hX,hX)","m(hX)","kQ(a8<@,@>)","P(lz)","nt(a8<@,@>)","a8<m,@>(nt)","P(uJ)","uJ()","G(hX)","ai<hX>()","P(zm)","a_F(Z)","m?(hX)","eJ<m?>(hX)","aB<~>(lz)","P(rm)","a8<m,@>(hX)","hX(a8<@,@>)","G(lz,lz)","P(afr)","~(bc)","v(oA)","G(G,a9A)","P(qF<G>)","~(qF<G>)","Tr(Z)","P(Mq)","P(uI)","~(hX)","m(m)","VM(Z)","Tq(Z)","adP(Z)","ZB(Z)","hX(hX)","cO(bA<m,Gj>)","cO(KA)","a_4(Z)","G?(hX)","hX()","P(KA)","D(hX)","~(I7)","a_0(Z)","v(I7,m,a0)","P(afk)","bA<m,ai<a8<m,@>>>(m,ai<nt>)","a_2(Z)","+count,id,name(G,m,m)(kQ)","m(kQ)","a0_(Z)","a00(Z)","P(lR)","lR()","Z9(Z)","a1N(Z)","ZD(Z)","ZC(Z)","~(G)","~(m,lo?)","v(rm)","ae9(Z)","~(mf)","aB<~>([m?])","I(I,lz)","v(lz)","I(I,rm)","a8<m,@>(rm)","rm(a8<@,@>)","ai<lo>()","uI()","m(V)","lz(a8<@,@>)","cv(I6)","m(lz)","a8<m,@>(lz)","G(nt,nt)","kQ(a8<m,@>)","kQ(kQ)"])
C.fLN.prototype={
$1(d){return d.a+" "+d.b},
$S:127}
C.fLM.prototype={
bnn(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.re(s,d,B.hV,"book",E.Gs),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LA(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bnn(d)},
$S:316}
C.fLO.prototype={
$1(d){return d.b},
$S:127}
C.fVe.prototype={
$1(d){var w=null
return A.eU(w,B.L,new H.Q5(this.a,this.b,w),w,w,0,B.a_N,B.d8,w,w,w)},
$S:49}
C.fzp.prototype={
$1(d){return d!=null},
$S:226}
C.fzq.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:226}
C.fzv.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:172}
C.fJw.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.he(w,B.tc,w,w,w,w,w,w,w,B.dx,w,w,10.5,w,B.ew,w,!0,w,w,w,w),w),u=f?B.ew:B.wi
return new A.o2(D.bzF,A.aao(A.a([new A.fY(130,w,v),new A.zl(1,B.H0,A.fe(e,w,w,w,A.he(w,g==null?D.erc:g,w,w,w,w,w,w,w,B.dx,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yd,B.lN))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1944}
C.fJv.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vV(999)
f=A.xq(A.lM(h,A.fe("Cashier",h,h,h,A.he(h,D.A4,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),h,new A.kN(D.er3,h,f,B.hY,h),h,h,D.bAa,h))
w=A.xq(A.fe("Debt receipt",h,h,h,A.he(h,h,h,h,h,h,h,h,h,B.dx,h,h,22,h,B.ew,h,!0,h,h,h,h),h))
v=A.xq(A.fe(C.x9(new A.V(Date.now(),0,!1),!0),h,h,h,D.aai,h))
u=A.vV(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.he(h,h,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.aai,h)
q=A.vV(10)
p=x.Z
u=A.lM(h,A.ze(A.a([s,new A.fY(h,2,h),r,new A.fY(h,10,h),A.lM(h,A.ze(A.a([A.fe("Amount owed",h,h,h,D.aai,h),new A.fY(h,2,h),A.fe(A.B7(t.c),h,h,h,A.he(h,D.A4,h,h,h,h,h,h,h,B.dx,h,h,20,h,B.ew,h,!0,h,h,h,h),h)],p),B.rz,B.lN),h,new A.kN(B.py,h,q,B.hY,h),h,h,D.bzl,1/0)],p),B.rz,B.lN),h,new A.kN(E.aLT,h,u,B.hY,h),h,h,D.bBh,1/0)
q=new A.nL(D.er6,0.9,B.l1)
r=A.vV(12)
s=i.c
o=s.$2("Original due",C.x9(t.r,!1))
n=s.$2("Current due",C.x9(t.f,!1))
m=i.d
l=new A.nL(m,1.1,B.l1)
k=A.vV(8)
j=i.a
k=A.a([o,n,new A.fY(h,6,h),A.lM(h,A.xq(A.fe(t.gaMp(),h,h,h,A.he(h,m,h,h,h,h,h,h,h,B.dx,h,h,11,h,B.ew,h,!0,0.5,h,h,h),h)),h,new A.kN(h,new A.pT(l,l,l,l),k,B.hY,h),h,h,D.bAi,1/0),new A.fY(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.A4))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.A4))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.he(h,B.tc,h,h,h,h,h,h,h,B.dx,h,h,10.5,h,B.ew,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,T0>")
o=A.C(new A.N(o,new C.fJu(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fY(h,4,h),n,new A.fY(h,6,h),new C.bal(5,5,new C.bam(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fY(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fY(h,8,h),w,new A.fY(h,3,h),v,new A.fY(h,16,h),u,new A.fY(h,10,h),A.lM(h,A.ze(k,B.yd,B.lN),h,new A.kN(h,new A.pT(q,q,q,q),r,B.hY,h),h,h,B.al2,1/0)],p)
w=j.a
if(w!=null){v=new A.nL(B.Jy,1,B.l1)
B.d.v(f,A.a([new A.fY(h,16,h),A.fe("Debtor signature",h,h,h,A.he(h,B.tc,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),new A.fY(h,6,h),A.lM(h,new A.Ip(w,B.Xm,h,h),h,new A.kN(h,new A.pT(v,v,v,v),A.vV(6),B.hY,h),82,h,B.O3,1/0)],p))}f.push(new A.fY(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fm5,h))
f.push(new A.fY(h,18,h))
f.push(A.xq(A.fe("NGMY.ORG",h,h,h,A.he(h,D.A4,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,1.8,h,h,h),h)))
return f},
$S:466}
C.fJu.prototype={
$1(d){var w=null,v=new A.nL(D.Jz,0.7,B.l1),u=A.vV(999)
return A.lM(w,A.fe(C.x9(d,!1),w,w,w,A.he(w,D.Jz,w,w,w,w,w,w,w,B.dx,w,w,9.5,w,B.ew,w,!0,w,w,w,w),w),w,new A.kN(w,new A.pT(v,v,v,v),u,B.hY,w),w,w,D.bFH,w)},
$S:1945}
C.c7i.prototype={
$1(d){var w=null,v=B.bB.j(0.08),u=A.n(999),t=A.L(B.bB.j(0.28),B.r,1)
return A.p(w,A.d(C.x9(d,!1),w,w,w,w,w,w,D.ft6,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eJ,w,w,w)},
$S:1946}
C.fVL.prototype={
$1(d){var w=null,v=A.aG(d,B.bZ,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bYL,w,w,w,new C.fVI(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eU(w,B.L,new A.cU(new A.aZ(0,380,0,v.a.b*0.9),A.aI(!1,B.a2,!0,u,new A.D(B.a_B,A.x(A.a([new A.bN(B.a8,w,w,t,w),new A.ds(1,B.cn,A.ci(A.x(A.a([new A.er(new C.b_g(r,w),s),B.W,A.B(A.a([A.E(A.ex(B.zj,D.fV4,new C.fVJ(s,r,d),A.dk(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b8(A.n(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ad,A.E(A.dj(B.a36,D.fRt,new C.fVK(r,d),A.bo(B.b1,w,w,w,B.c,w,B.fg,w,new A.b8(A.n(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.au,0,w,w,w,w,w,B.ai),w),w,w,0,Ar.a00,B.d8,w,w,w)},
$S:49}
C.fVI.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fVJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m9(2.5),$async$$0)
case 4:w=3
return A.b(e.hA(B.hb),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dK.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.au(o,0,32)
w=5
return A.b(A.th(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fVK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fQ7(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fVD.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eU(w,B.au,A.x(A.a([new A.D(D.bB5,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n5,w,w,w),1),A.aH(w,w,w,w,B.li,w,w,w,new C.fVB(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.ds(1,B.cn,new A.D(B.eZ,A.bx(A.n(14),A.fU(t,B.A,w,w,B.ci,B.dz,!1,w,!1,w,w),B.ap),w),w),new A.D(B.NI,new A.a4(1/0,w,A.dj(B.ov,D.aVU,new C.fVC(t,this.c,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b8(A.n(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.NV,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fVB.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fVC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.th(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fVP.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eU(w,B.au,new A.D(D.bBd,A.x(A.a([A.B(A.a([D.bGL,A.aH(w,w,w,w,B.li,w,w,w,new C.fVN(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.N,new A.er(A.bx(A.n(14),A.p(w,A.b4(w,w,w,new C.bcv(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a4(1/0,w,A.dj(B.ov,D.aVU,new C.fVO(t,s,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b8(A.n(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fVN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fVO.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m9(2.5),$async$$0)
case 4:w=3
return A.b(e.hA(B.hb),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.au(p,0,32)
r=J.eT(B.dK.gaS(s))
w=5
return A.b(A.th(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fDY.prototype={
$1(d){return d.a===this.a},
$S:266}
C.dOw.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dOh.prototype={
bmB(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e4:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dOk(s,q,e),p,!0,!0,!1,B.JQ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dOl(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bmB(d,e)},
$S:1947}
C.dOk.prototype={
$1(d){var w,v=null,u=this.c===B.wR,t=u?D.dqi:D.dlQ
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.au,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.D(O.alz,A.x(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.ip(!0,v,v,B.y,D.fcE,new C.dOj(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ak,v,B.e,B.P,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dOj.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cQ.j(0.14)
else w=t.b.a.d.a?B.O:B.aP
v=A.n(14)
if(q)u=B.cQ
else u=(t.b.a.d.a?B.bu:B.bn).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.b_f(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dOi(t.d,r),s,s,s,s,s,s,s)},
$S:191}
C.dOi.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dOl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dOf.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:97}
C.dOg.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cK(B.cu,e,v)
return new A.d1(e,!1,A.iv(B.A,A.at(A.aI(!1,B.a2,!0,v,new A.e2(new C.dOe(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bg(t,new A.bq(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:33}
C.dOe.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e4:B.c,f=A.n(14),e=A.L((h?B.bu:B.bn).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.ev,A.X(B.cx,i.a.d.a?B.bu:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dO_(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aUe("Name")
r=l.a
q=r.d==null?k:new C.dO0(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bo:B.m3
n=A.L(B.cQ.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Y,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.be0(new A.D(B.fv,A.aO(!1,p,!0,A.p(B.A,C.b_f(m==null?"\ud83d\udc64":A.fKk(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kY,k,B.aa7,k,k)
v=A.a([v,B.ae,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aUT("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dO1(r,a0),r.d===B.wR),1),B.ad,A.E(i.aUT("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dO6(r,a0),r.d===B.a6V),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bN(B.a5,k,k,A.ht(D.bX3,D.fTm,new C.dO7(r,l.e,a0),A.fy(k,k,k,k,k,k,k,k,k,k,k,B.cQ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uM(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aUf("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.O:B.aP
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.L((t?B.bu:B.bn).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.x9(r.a,!1)
v.push(A.aI(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bTM],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dO8(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aUe("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.au,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b2f(r.b.length!==0,B.mO,new C.dO9(r,i,a0),new C.dOa(r,a0),"Upload from gallery","ID photo"))
v.push(i.b2f(r.c.length!==0,D.bN7,new C.dOb(r,i,d,a0),new C.dOc(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Aq.a8d("Signature (optional)",t,new C.dOd(a0),new C.dO2(a0,t),new C.dO3(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bn
s=(i?B.bu:B.bn).j(0.28)
s=A.E(A.dT(E.aVN,new C.dO4(d),A.dk(k,k,k,k,k,k,k,k,k,t,k,k,B.rF,k,new A.b8(A.n(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cQ,k,k,k,B.c,k,B.rF,k,new A.b8(A.n(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ad,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vt,k,k,k),k,new C.dO5(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.ci(A.x(v,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rH,B.jj,k,k,360)},
$S:174}
C.dO_.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dO0.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dO1.prototype={
$0(){return this.b.$1(new C.dNZ(this.a))},
$S:0}
C.dNZ.prototype={
$0(){var w=this.a
w.d=B.wR
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dO6.prototype={
$0(){return this.b.$1(new C.dNY(this.a))},
$S:0}
C.dNY.prototype={
$0(){var w=this.a
w.d=B.a6V
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dO7.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dO8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xd(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dNX(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dNX.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gck(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dO9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PV(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dNW(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dNW.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dOa.prototype={
$0(){return this.b.$1(new C.dNV(this.a))},
$S:0}
C.dNV.prototype={
$0(){return this.a.b=""},
$S:0}
C.dOb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e4:B.c
w=3
return A.b(A.bV(q,null,new C.dNT(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PV(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dNU(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dNT.prototype={
$1(d){var w=null
return A.bn(!0,A.x(A.a([A.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.aqO,w,w,w,w,new C.dNN(d),!1,w,w,w,w,w,w,w,D.fJu,w,w,w),A.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.aqM,w,w,w,w,new C.dNO(d),!1,w,w,w,w,w,w,w,D.fQv,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dNN.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dNO.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dNU.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dOc.prototype={
$0(){return this.b.$1(new C.dNS(this.a))},
$S:0}
C.dNS.prototype={
$0(){return this.a.c=""},
$S:0}
C.dOd.prototype={
$0(){return this.a.$1(new C.dNR())},
$S:0}
C.dNR.prototype={
$0(){},
$S:0}
C.dO2.prototype={
$0(){return this.a.$1(new C.dNQ(this.b))},
$S:0}
C.dNQ.prototype={
$0(){return B.d.aa(this.a)},
$S:0}
C.dO3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ain(u.a,null,null,new C.dNP(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dNP.prototype={
$4(d,e,f,g){this.a.$1(new C.dNM(this.b,d))},
$S:409}
C.dNM.prototype={
$0(){var w=this.a
B.d.aa(w)
B.d.v(w,this.b)},
$S:0}
C.dO4.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dO5.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fhI)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.feB)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dOz.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:97}
C.dOA.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e4:B.c,n=A.n(14),m=A.L((p?B.bu:B.bn).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.au,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.B7(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zk(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zk(r).length>0?B.bB:B.cQ,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bn
t=(q?B.bu:B.bn).j(0.28)
s=x.p
return new A.d1(e,!1,A.at(A.aI(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.N,v,u,B.aB,A.B(A.a([A.E(A.dT(B.nP,new C.dOx(d),A.dk(r,r,r,r,r,r,r,r,r,w,r,r,B.jW,r,new A.b8(A.n(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ad,A.E(A.bI(D.fQV,r,new C.dOy(d),A.bo(B.cQ,r,r,r,B.c,r,B.jW,r,new A.b8(A.n(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.C6,E.a_S,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:33}
C.dOx.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dOy.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dOt.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dOu(r),p=r.a.d.a,o=p?B.e4:B.c,n=A.n(14),m=A.L((p?B.bu:B.bn).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.au,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.B7(l.c),s,s,s,s,s,s,D.fuG,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iJ((r.a.d.a?B.bu:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1K,"View receipt",new C.dOm(r,d,l))
u=l.x!=null
t=u?B.pl:B.qw
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bBa,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dOn(r,d,l)),q.$3$icon$label$onTap(B.Ci,"Edit",new C.dOo(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mO,"View / download ID",new C.dOp(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bN6,"View / download selfie",new C.dOq(r,d,l)))
if(l.gaH5())p.push(q.$3$icon$label$onTap(Ae.a2X,"View / download signature",new C.dOr(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bB,B.eb,"Delete",new C.dOs(r,d,l)))
p.push(B.av)
return A.bn(!0,new A.D(B.ul,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dOu.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.au
else w=d
return A.aO(!1,v,!0,new A.D(B.eS,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1948}
C.dOm.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fVH(w,this.c)},
$S:0}
C.dOn.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.SG(this.c)},
$S:0}
C.dOo.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.Dp(this.c)},
$S:0}
C.dOp.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFG(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dOq.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFG(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dOr.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fVM(w,this.c)},
$S:0}
C.dOs.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.PU(0,this.c)},
$S:0}
C.dOB.prototype={
$1(d){return d.x==null},
$S:266}
C.dOC.prototype={
$1(d){return d.x!=null},
$S:266}
C.dOD.prototype={
$2(d,e){return d+e.c},
$S:1949}
C.dOE.prototype={
$0(){return this.a.bCn()},
$S:0}
C.dOv.prototype={
$0(){return this.a.afW(this.b)},
$S:0}
C.fEE.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fEF.prototype={
$0(){return B.d.gI(D.a4h)},
$S:z+77}
C.dei.prototype={
$0(){var w=this.a
return w.m(new C.deg(w,this.b))},
$S:0}
C.deg.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.deh.prototype={
$0(){},
$S:0}
C.dej.prototype={
$0(){var w=this.a.gc0N()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fH3.prototype={
$1(d){return C.hih(A.a2(d,x.N,x.z))},
$S:z+11}
C.fH4.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fH5.prototype={
$2(d,e){var w=A.ce(d.a,null),v=A.ce(e.a,null)
if(w!=null&&v!=null)return B.o.aO(w,v)
return d.d.aO(0,e.d)},
$S:z+83}
C.fUl.prototype={
$1(d){return d.ah()},
$S:z+12}
C.h1H.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fDP.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bQM.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f2(e,v)?v:null},
$S:1950}
C.fUT.prototype={
$1(d){var w=this
return new C.a_2(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.deY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.deX(w,d))},
$S:z+80}
C.deX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deM.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cM(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.deJ.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dek.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.del.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.deN.prototype={
$0(){return this.a.w=!1},
$S:0}
C.det.prototype={
$1(d){var w=null,v=A.R(d).ax.a===B.J,u=v?B.e4:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ei(A.a([A.bM(!1,B.di,w,w,!0,w,w,w,new C.der(d),w,w),A.bI(B.xe,w,new C.des(d),A.bo(B.ne,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.der.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.des.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.deu.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.deK.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.deL.prototype={
$0(){return B.d.gI(D.zv)},
$S:z+14}
C.dep.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyF(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Tq(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.deq.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dev.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.ZB(v,u,J.ad(w.d),null)},
$S:z+40}
C.dew.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deW.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.Zi(r.y,r.gyF(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.deU(r),s,s,s,s,s,s,!1,B.a3)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbT(v,e,w,u,t,r.gbSR(),C.hxP(r.y.Q),r.gyF(0),s)
w=t}return A.cb(q,new C.deV(r,e),new A.D(B.a_T,w,s))},
$S:1951}
C.deV.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd4(t).ay){t=this.b
u=x.cy.a(B.d.gd4(u.f.f)).gv8(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dt()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fN(v*3.141592653589793*0.5)
return A.fA(B.a5,A.db(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.deU.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIe(B.qf,B.j_)},
$S:0}
C.deG.prototype={
$0(){var w=this.a
return w.m(new C.deF(w))},
$S:0}
C.deF.prototype={
$0(){return this.a.w=!0},
$S:0}
C.deH.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.dem.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kg.j(0.5),r=x.p,q=A.a([D.fI5,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.ZE(d,B.e5,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZE(d,I.aoK,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cM(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.ct,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kH.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.ct,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kH.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZE(d,X.apN,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZE(d,B.qD,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZE(d,B.qD,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eU(u,E.Bw,A.bn(!0,new A.D(Ad.yx,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.alZ,B.d8,u,new A.b8(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.deI.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dez.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cM(w.d)
return new C.a_4(v,J.cM(w.d),w.r+1,null)},
$S:z+44}
C.deA.prototype={
$1(d){var w=null
return A.oG(!1,A.ei(w,w,w,E.Bw,new A.jZ(this.a,new C.dey(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:343}
C.dey.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9N,B.oM,A.E(A.d(e,w,w,w,w,w,w,B.jq,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:515}
C.deB.prototype={
$0(){return this.a.a=!1},
$S:50}
C.deC.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.deD.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bg(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Sf(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dex(s,t))
w=4
return A.b(s.lf(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dex.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deP.prototype={
$1(d){var w=null
return A.oG(!1,A.ei(w,w,w,E.Bw,new A.jZ(this.a,new C.deO(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:343}
C.deO.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9N,B.oM,A.E(A.d(e,w,w,w,w,w,w,B.jq,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:515}
C.deQ.prototype={
$0(){return this.a.a=!1},
$S:50}
C.deR.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.deS.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.deT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bg(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lf(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.den.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bjz(B.qf,A4.Nw)},
$S:0}
C.deo.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIe(B.qf,A4.Nw)},
$S:0}
C.dgJ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dgK.prototype={
$1(d){var w=this.a
return w.m(new C.dgI(w))},
$S:9}
C.dgI.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dgL.prototype={
$1(d){var w=this.a
return w.m(new C.dgH(w))},
$S:9}
C.dgH.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dgM.prototype={
$1(d){var w=this.a
return w.m(new C.dgG(w))},
$S:9}
C.dgG.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dgN.prototype={
$0(){var w=this.a
return w.m(new C.dgF(w,this.b))},
$S:0}
C.dgF.prototype={
$0(){var w=this.b
this.a.d.saZ(0,w)
return w},
$S:0}
C.dgO.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2q()
A.a5(this.b,!1).O(new A.bqJ(w,v))},
$S:0}
C.dfc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dfb.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_0(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dfg.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dff.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b9E(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.he,v,v,v)
return A.ei(A.a([A.bM(!1,B.di,v,v,!0,v,v,v,new C.dfd(d),v,v),A.bI(B.xe,v,new C.dfe(d),A.bo(B.ne,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Bw,w,v,v,v,v,D.fGR,v)},
$S:18}
C.dfd.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dfe.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dfh.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dfi.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.ci(A.bX(B.bG,r,B.br,t,18,14),B.t,t,B.y,t,D.bC8,t,t,B.ah)},
$S:317}
C.dfa.prototype={
$0(){return this.a.QF(0,this.b)},
$S:0}
C.df9.prototype={
$0(){return this.a.Q7(0,this.b)},
$S:0}
C.cNx.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cNy.prototype={
$0(){return B.d.gI(D.zv)},
$S:z+14}
C.cNz.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bT(0,new A.D(d,A.c4(w,new A.o(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bh),w),0,0,0)},
$S:1953}
C.d66.prototype={
$1(d){return this.a.m(new C.d65(this.b,this.c))},
$S:9}
C.d65.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d6v.prototype={
$1(d){return this.a.m(new C.d6i())},
$S:2}
C.d6i.prototype={
$0(){},
$S:0}
C.d6w.prototype={
$1(d){return this.a.m(new C.d6h())},
$S:2}
C.d6h.prototype={
$0(){},
$S:0}
C.d6x.prototype={
$0(){var w=this.a
return w.m(new C.d6g(w,this.b))},
$S:0}
C.d6g.prototype={
$0(){var w=this.a
return w.d=w.goh().G0(this.b.a)},
$S:0}
C.d6y.prototype={
$0(){var w=this.a
return w.m(new C.d6f(w,this.b))},
$S:0}
C.d6f.prototype={
$0(){var w=this.a
return w.d=w.goh().cLM(this.b)},
$S:0}
C.d6z.prototype={
$1(d){return this.a.m(new C.d6e())},
$S:2}
C.d6e.prototype={
$0(){},
$S:0}
C.d6A.prototype={
$0(){var w=this.a
return w.m(new C.d6d(w,this.b))},
$S:0}
C.d6d.prototype={
$0(){var w=this.a
return w.d=w.goh().cLR(this.b.a)},
$S:0}
C.d6B.prototype={
$1(d){var w=this.a
return w.m(new C.d6q(w,d))},
$S:6}
C.d6q.prototype={
$0(){var w=this.a
return w.d=w.goh().cML(this.b)},
$S:0}
C.d6C.prototype={
$1(d){var w=this.a
return w.d=w.goh().aFe(d)},
$S:2}
C.d6D.prototype={
$1(d){var w=this.a
return w.d=w.goh().cLU(d)},
$S:2}
C.d6F.prototype={
$1(d){var w=this.a
return w.d=w.goh().cMJ(d)},
$S:2}
C.d6G.prototype={
$1(d){var w=this.a
return w.m(new C.d6p(w,d))},
$S:9}
C.d6p.prototype={
$0(){var w=this.a
return w.d=w.goh().cMA(this.b)},
$S:0}
C.d6H.prototype={
$0(){var w=this.a,v=w.goh(),u=B.a.i(w.gyF(0).a.a),t=B.a.i(w.gaCn().a.a)
u=v.beh(B.a.i(w.gas2().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.bQW.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bQQ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQP(w,d))},
$S:11}
C.bQP.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a2(0)}},
$S:0}
C.bQZ.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bQR.prototype={
$0(){var w=this.a
w.Q=D.b_O
w.adE(1)
w.r.x=null},
$S:0}
C.bQS.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b_O)return
w=new A.e6()
w.cZ(u.as*13+u.a.e)
v=u.r
v.Q=3+w.ap(3)
v.z=D.d1t[w.ap(6)]
v.as=u.f.a+2.6},
$S:0}
C.bQV.prototype={
$0(){var w=this.a
w.Q=D.aco
w.adE(2)
w.r.z=null},
$S:0}
C.bQU.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hwF
t.adE(3)
w=t.r
w.d=s
w.x="I say: "+t.gCa()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.ap(3)
w.z=s?D.d7V[v.ap(4)]:D.dsL[v.ap(3)]
w.as=t.a+2.8},
$S:0}
C.bQX.prototype={
$0(){var w=this.a
w.Q=D.b_P
w.CW=this.b
w.cy=1
w.adE(4)
w.r.f=w.f.a+5},
$S:0}
C.bQY.prototype={
$0(){},
$S:0}
C.bQT.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).im()},
$S:0}
C.bQN.prototype={
$0(){return this.a.KR(this.b)},
$S:0}
C.bQO.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).im()},
$S:0}
C.bSs.prototype={
$0(){var w=this
return w.a.QY(w.b,0,w.c,w.d)},
$S:0}
C.bSt.prototype={
$0(){var w=this
return w.a.QY(w.b,3,w.c,w.d)},
$S:0}
C.bSu.prototype={
$0(){var w=this
return w.a.QY(w.b,1,w.c,w.d)},
$S:0}
C.bSv.prototype={
$0(){var w=this
return w.a.bSi(w.b,w.c,w.d)},
$S:0}
C.bSw.prototype={
$0(){var w=this
return w.a.QY(w.b,4,w.c,w.d)},
$S:0}
C.bSx.prototype={
$0(){var w=this
return w.a.QY(w.b,2,w.c,w.d)},
$S:0}
C.bSy.prototype={
$0(){var w=this
return w.a.QY(w.b,5,w.c,w.d)},
$S:0}
C.bSz.prototype={
$2(d,e){return B.k.aO(d.a,e.a)},
$S:523}
C.bSr.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5q[d],p=q.a.a7(0,new A.u(0,-q.b*1.2*124)),o=A.fz(r,r,3,r,A.cT(r,r,r,r,r,r,r,r,r,D.flM,e),B.a4,B.bX,r,B.dA,B.bV)
o.o2(130)
w=o.b.a.c
w=p.aG(0,new A.u(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.br(A.bK(w,v.gba(v)+12,u+18),B.hX)
u=this.a
v=t.eP(B.dC)
w=$.S()
s=A.J()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.J()
s.r=D.q9.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ag,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bt())
v=A.J()
v.r=D.q9.gp(0)
u.aK(w,v)
o.a4(u,new A.u(t.a+9,t.b+6))},
$S:573}
C.bRc.prototype={
$2(d,e){return B.o.aO(d.Q,e.Q)},
$S:z+7}
C.bRd.prototype={
$2(d,e){var w=this.a,v=B.o.aO(w.ama(d),w.ama(e))
if(v!==0)return v
return B.o.aO(d.Q,e.Q)},
$S:z+7}
C.fsf.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h1y.prototype={
$2(d,e){if(e!=null)J.cc(this.a.c3(0,d,new C.h1z()),e)},
$S:z+66}
C.h1z.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h1A.prototype={
$1(d){return d!==this.a},
$S:3}
C.h1B.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h1C.prototype={
$1(d){return d!==this.a&&!B.d.b_(this.b,new C.h1x(this.c,d))},
$S:3}
C.h1x.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h1D.prototype={
$1(d){return d!==this.a},
$S:3}
C.h1E.prototype={
$1(d){return d!==this.a},
$S:3}
C.h1F.prototype={
$1(d){return d!==this.a&&!B.d.b_(this.b,new C.h1w(this.c,d))},
$S:3}
C.h1w.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fFd.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fTo.prototype={
$1(d){return d.Q},
$S:z+15}
C.fTp.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fBl.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fHZ.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bM1.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h1Y.prototype={
$2(d,e){return B.o.aO(C.hu6(d),C.hu6(e))},
$S:230}
C.h1Z.prototype={
$1(d){return d!==this.a},
$S:3}
C.fTU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKb.prototype={
$0(){var w=this.a
w.ch=!0
w.b7T()},
$S:0}
C.bK6.prototype={
$0(){},
$S:0}
C.bKc.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bK4.prototype={
$0(){},
$S:0}
C.bK5.prototype={
$0(){},
$S:0}
C.bKa.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.bcw(t,u),B.ax),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.n(14)
s.push(A.ap(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fti,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aA(B.c6,new A.an(B.a_,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bK7(t,e),u,u,u,u,u,u,u,new C.bK8(t,e),u,u,u,u,u,u,u,u,u,new C.bK9(t,e),u,u,u,u,!1,B.a3)},
$S:36}
C.bK7.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bK9.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bK8.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bK3.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).im()},
$S:0}
C.cp1.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cp2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cp0(w))},
$S:0}
C.cp0.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cp3.prototype={
$0(){var w=this,v=w.a
v.giZ()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cp4.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cp5.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cp6.prototype={
$0(){},
$S:0}
C.cp7.prototype={
$0(){var w=this.a
w.z=w.Xc(++w.e)
w.Q=A.bZ(w.gkP()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.coY.prototype={
$0(){return A.a5(this.a,!1).im()},
$S:0}
C.coZ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giZ().length,e=i/2,d=new C.cp_(i,f,h),a0=g.as,a1=A.a6(a0).k("b9<2>")
a0=A.C(new A.b9(a0,a1),a1.k("M.E"))
a0=A.bT(0,A.cb(new A.h9(a0),new C.coT(g,new A.u(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giZ().length!==0&&!B.d.q(g.giZ(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.Qm(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cO(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mz(new C.coU(g,u),new C.coV(g,u),new C.coW(g,u),j,j,new A.bQ("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fb:B.ba,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.giZ().length!==0&&!B.d.q(g.giZ(),-1)){a0=g.e+1>=g.gkP().length?"See my result":"Next family"
g=A.at(C.up(a0,g.gqe(g),B.cJ,B.jD,D.fr),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xc(0):s).length))break
if(!B.d.q(g.giZ(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xc(0)
o=s}else o=s
n=s[u]
n=A.ee(B.A,new C.Qm(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xc(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r1(new A.bq(0,p,t),new C.coX(),new S.E4(u,j,new C.Qm(l.b,k,62,!1,j),new A.kC(0.25,new C.Qm(m.b,k,62,!1,j),j),new A.k7(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.hxH(),!0,!0,j,j,j,j,j,j,!1,B.iK,j,new A.bQ("chip-"+r,a0),w),B.b5,B.iI,j,new A.bQ("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fI,a1,B.br,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.ab,B.t,e,j)},
$S:66}
C.cp_.prototype={
$1(d){return new A.u(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:597}
C.coT.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giZ().length!==0&&!B.d.q(t.giZ(),-1)
return A.b4(p,p,p,new C.bc1(q.b,o,v,w,p),B.ax)},
$S:63}
C.coV.prototype={
$1(d){return this.a.giZ()[this.b]===-1},
$S:z+30}
C.coW.prototype={
$1(d){return this.a.cPD(this.b,d.a)},
$S:z+31}
C.coU.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giZ()[t]!==-1,r=A.n(18),q=e.length!==0?B.cJ.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cJ:B.jS,B.r,2)
u=s?A.ly(new C.coS(),A.at(new C.Qm(u.gaEI()[u.giZ()[t]].b,u.gaEI()[u.giZ()[t]].a,62,!1,v),v,v,v),B.lw,B.iI,v,v,new A.bq(0.3,1,x.X),x.i):D.baC
return A.cY(v,u,v,v,B.b5,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,v,88)},
$S:1956}
C.coS.prototype={
$3(d,e,f){return A.ee(B.A,f,e,null,null)},
$S:110}
C.coX.prototype={
$3(d,e,f){return A.dR(f,new A.u(Math.sin(e*24)*8*(1-e),0))},
$S:110}
C.cOB.prototype={
$1(d){return d>=1},
$S:114}
C.cDW.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkP()[w.e].d.length)w.m(new C.cDV(w))},
$S:11}
C.cDV.prototype={
$0(){return this.a.f++},
$S:0}
C.cE3.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cE4.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cE5.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cE2(w))},
$S:0}
C.cE2.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cE6.prototype={
$0(){return this.a.f++},
$S:0}
C.cE7.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cE8.prototype={
$0(){},
$S:0}
C.cE9.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.aa(0)
w.as=!1
w.ay=0},
$S:0}
C.cDY.prototype={
$0(){return A.a5(this.a,!1).im()},
$S:0}
C.cDZ.prototype={
$3(d,e,f){var w=null
return A.ly(new C.cDX(this.a,e),w,B.b5,B.hz,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1957}
C.cDX.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cJ.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TZ(v,v,B.VQ)
return A.p(u,A.hW(new A.Bs(new A.xy(w,B.LA,u,B.XQ),H.bWG(A.b4(u,u,u,new C.aB8(t.gkP()[t.e].c,t.as,u),B.ax),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1958}
C.cE_.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.u(0,14*(1-e))),e)},
$S:101}
C.cE0.prototype={
$3(d,e,f){return A.dR(f,new A.u(Math.sin(e*22)*8*(1-e),0))},
$S:110}
C.cE1.prototype={
$0(){return this.a.boT(this.b)},
$S:0}
C.f4V.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amH$)
v.amH$=w
v.q2$.sp(0,w)
v.aqm(u)},
$S:7}
C.ff0.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a2(0)
w.a.$0()},
$S:11}
C.bRY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRX())},
$S:0}
C.bRX.prototype={
$0(){},
$S:0}
C.bRV.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bRT.prototype={
$0(){},
$S:0}
C.bRU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMH()
w=s+1>=r.length?3:5
break
case 3:q=C.bFX(p.gapb(0),0,r.length)
p.m(new C.bRQ(p,q))
o=p
w=6
return A.b(C.BC(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BD(s.d,s.c.a,"school",p.gapb(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bRR())
w=4
break
case 5:p.m(new C.bRS(p))
p.gql().VL(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bRQ.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bRR.prototype={
$0(){},
$S:0}
C.bRS.prototype={
$0(){return this.a.x++},
$S:0}
C.bRW.prototype={
$0(){return this.a.KR(this.b)},
$S:0}
C.bRP.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).im()},
$S:0}
C.f4W.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.u(t,s),q=v.b,p=v.d,o=p?C.hxV(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.DY
C.Sc(q,D.ekq,0,0.2,-0.6,-0.2,null,w,D.ejb,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.u(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.J()
p.r=D.G3.gp(0)
p.c=3
p.d=B.by
q.bo(new A.u(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f4X.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Sc(this.a,D.ejv,0,u,0.7,-0.5,null,null,D.Jq,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f4Y.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Sc(this.a,D.elc,0,0,0.8,-0.5,null,null,D.Jq,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f4Z.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Sc(w.b,D.ekk,0,v,-0.8,-0.5,null,null,D.Jq,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f5_.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.u(34,-122+Math.sin(w*5)*5)
else v=v?D.eko:D.DY
C.Sc(p,D.ejP,0,t,0,-0.6,null,v,D.Jq,3,0,s,1.3,u,0,w,0)
q=q.cay(new A.u(222,455),9)
$.S()
w=A.J()
w.r=B.cJ.gp(0)
p.aK(q,w)},
$S:0}
C.f50.prototype={
$2(d,e){return B.k.aO(d.a,e.a)},
$S:523}
C.bRB.prototype={
$2(d,e){return d+e},
$S:65}
C.bRM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bRN.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bRO.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giZ()[u.b]=s
t.giZ()[u.d]=t.y
w=t.as
v=t.q2$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bRI.prototype={
$1(d){return d},
$S:99}
C.bRH.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q2$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bRJ.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bRK.prototype={
$0(){},
$S:0}
C.bRL.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Ft(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cp(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.aa(0)},
$S:0}
C.bRD.prototype={
$0(){return A.a5(this.a,!1).im()},
$S:0}
C.bRE.prototype={
$2(d,e){var w=this.a
w=w.gkP()[w.f].e
return B.o.aO(w[d],w[e])},
$S:65}
C.bRF.prototype={
$2(d,e){var w=null,v=C.h9K(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aA(B.c6,new A.er(A.b4(w,w,w,new C.bjc(u,u.q2$),B.ax),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bRC(u,v),w,w,w,w,!1,B.a3)},
$S:36}
C.bRC.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giZ().length
u=B.o.E(B.k.bf((t.a-s.a)/r/450*v),0,v-1)
w.d_h(w.giZ()[u])}},
$S:22}
C.bRG.prototype={
$1(d){var w=this.a
return w.gkP()[w.f].d[d]},
$S:73}
C.dpU.prototype={
$2(d,e){return 0},
$S:65}
C.bRn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRm())},
$S:0}
C.bRm.prototype={
$0(){},
$S:0}
C.bRl.prototype={
$0(){},
$S:0}
C.bRf.prototype={
$0(){},
$S:0}
C.bRg.prototype={
$0(){},
$S:0}
C.bRk.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.AN},
$S:0}
C.bRj.prototype={
$1(d){var w=null,v=this.a.gql(),u=A.d(d,w,w,w,w,w,w,D.aUm,w,w,w),t=v.gblk(0)
return A.aA(B.c6,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aUB,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbrd(v),w,w,w,w,w,w,!1,B.a3)},
$S:136}
C.bRh.prototype={
$0(){return this.a.KR(this.b)},
$S:0}
C.bRi.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).im()},
$S:0}
C.bRe.prototype={
$0(){return A.a5(this.a,!1).im()},
$S:0}
C.e_J.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e_K.prototype={
$1(d){return this.a},
$S:39}
C.e_L.prototype={
$0(){var w=this.a
return w.d=w.gSH().bdL(this.b)},
$S:0}
C.e_H.prototype={
$1(d){return new C.Tr(this.a,null)},
$S:z+32}
C.e_I.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e_G.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.he,w,w,w)
return A.ei(A.a([A.bM(!1,E.aVX,w,w,!0,w,w,w,new C.e_E(d),w,w),A.bM(!1,D.fOo,w,w,!0,w,w,w,new C.e_F(d),w,w)],x.p),w,w,D.fr,v,w,w,w,w,D.fB0,w)},
$S:18}
C.e_E.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e_F.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e_D.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e_M.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e_N.prototype={
$0(){var w=this.a,v=this.b,u=C.bDG(v,10,w.r,!1)
return w.ui(C.hii(w.a.d,"kahoot",u,w.gb5s(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e_O.prototype={
$0(){var w=this.a
return w.ui(new C.alq(this.b,w.a.d,w.r,null))},
$S:0}
C.e_P.prototype={
$0(){var w=this.a
return w.ui(new C.ajD(this.b,w.a.d,w.r,null))},
$S:0}
C.e_S.prototype={
$0(){var w=this.a
return w.ui(new C.aun(this.b,w.a.d,w.r,null))},
$S:0}
C.e_T.prototype={
$0(){var w=this.a
return w.ui(new C.ayj(this.b,w.a.d,w.r,null))},
$S:0}
C.e_U.prototype={
$0(){var w=this.a
return w.ui(new C.alt(this.b,w.a.d,w.r,null))},
$S:0}
C.e_V.prototype={
$0(){var w=this.a
return w.ui(new C.alx(this.b,w.a.d,w.r,null))},
$S:0}
C.e_W.prototype={
$0(){var w=this.a
return w.ui(new C.alz(this.b,w.a.d,w.r,null))},
$S:0}
C.e_X.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d_C()
return v.ui(C.hii(v.a.d,"creator_"+u.a,w,v.gb5s(),"A game by the family",t,this.c.a))},
$S:0}
C.e_Y.prototype={
$0(){return this.a.OF(this.b)},
$S:0}
C.e_Z.prototype={
$0(){return this.a.XE(0,this.b)},
$S:0}
C.e_Q.prototype={
$0(){return this.a.OF(null)},
$S:0}
C.e_R.prototype={
$0(){return this.a.L(x.q).f.U(D.feH)},
$S:0}
C.bRz.prototype={
$0(){var w=this.a
w.d=D.b_f
w.z=3},
$S:0}
C.bRA.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a2(0)
w.aP3()}else w.m(new C.bRy(w))},
$S:11}
C.bRy.prototype={
$0(){return this.a.z--},
$S:0}
C.bRp.prototype={
$0(){var w=this.a
w.d=D.ac2
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRo(w))
if(w.as<=0){d.a2(0)
w.b5o(-1)}},
$S:11}
C.bRo.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bRv.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Wt},
$S:0}
C.bRw.prototype={
$0(){return this.a.e++},
$S:0}
C.bRs.prototype={
$0(){var w=this.a
w.d=D.b_g
w.ay=this.b},
$S:0}
C.bRt.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bRx.prototype={
$2(d,e){return B.o.aO(e.b,d.b)},
$S:1959}
C.bRu.prototype={
$0(){return this.a.KR(this.b)},
$S:0}
C.bRr.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).im()},
$S:0}
C.bR_.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.bb(s,B.b4,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.K)(t),++v){u=t[v]
s.push(new A.au(new A.bb(u,B.b4,B.aO),r))}return s},
$S:1960}
C.bR0.prototype={
$0(){return this.a.gCO().c.push(C.h3z(null,0,20,""))},
$S:0}
C.bRa.prototype={
$1(d){var w=null
return A.bs(w,new A.b6(4,A.n(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Vo,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:253}
C.bR9.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCO().c,m=this.b,l=n[m],k=o.cds(l),j=B.c.j(0.06),i=A.n(18),h=A.L(B.aX,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KA,p,p,p),B.b2],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.aqz,p,p,p,new C.bR4(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bR5(l),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aCq[v]
t=D.aC7[v]
s=v+1
f.push(new A.D(B.eI,new A.ca(B.aL,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ad,new A.by(1,B.bb,A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bR6(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),p),new Au.P2(v,l.c,new C.bR7(o,l),p,!1,D.lz,p,p,p,p,p,!1,!1,p,K.b_E,p,p,p,p,p,w)],g),p),p))}f.push(D.fGw)
f.push(B.am)
n=A.a([D.fA5,B.ad],g)
for(r=0;r<3;++r){q=D.cbP[r]
n.push(new A.D(B.fv,A.jw(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bR8(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kM,B.bg,p,p,p)},
$S:147}
C.bR4.prototype={
$0(){var w=this.a
return w.m(new C.bR3(w,this.b))},
$S:0}
C.bR3.prototype={
$0(){return B.d.cz(this.a.gCO().c,this.b)},
$S:0}
C.bR5.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bR6.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bR7.prototype={
$1(d){return this.a.m(new C.bR2(this.b,d))},
$S:163}
C.bR2.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bR8.prototype={
$1(d){return this.a.m(new C.bR1(this.b,this.c))},
$S:9}
C.bR1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1o.prototype={
$0(){var w=this.a
w.wb()
w.a.bv()
w.a.qf()},
$S:0}
C.e1n.prototype={
$0(){var w=this.a
w.wb()
w.a.bv()
w.a.qf()},
$S:0}
C.e1q.prototype={
$0(){var w=this,v=w.b
if(J.cM(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e1r.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1s.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e1m.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e1p.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e1u.prototype={
$0(){this.a.P0()
return null},
$S:0}
C.e1t.prototype={
$0(){return this.a.EP(this.b)},
$S:0}
C.e0P.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.di,w,w,!0,w,w,w,new C.e0N(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.ei(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e0O(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e0N.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e0O.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e0Q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cMf(this.b)},
$S:0}
C.e0K.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aUu(w.b,w.c,w.d)},
$S:7}
C.e0b.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e0c.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e0t.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.H2(t.a.c),$async$$0)
case 2:s=r.ow(q.dJ(e,new C.e0r(t)))
if(s!=null&&t.c!=null)t.m(new C.e0s(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e0r.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e0s.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e0u.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e0v.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e0J.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cN2(C.hy4(w),w)},
$S:0}
C.e0q.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.VM(u,w,C.aQq(u,w),new C.e0p(v),null)},
$S:z+37}
C.e0p.prototype={
$1(d){return this.bmI(d)},
bmI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e0o(s,d))
w=3
return A.b(s.ue(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:723}
C.e0o.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bdL(this.b)},
$S:0}
C.e0G.prototype={
$1(d){return d.as},
$S:z+1}
C.e0H.prototype={
$1(d){var w=this
return new A.e2(new C.e0F(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e0F.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e4:B.c,h=A.n(26),g=A.L(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bRY,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bd,a0,A.aH(k,k,k,k,A.X(B.cx,j?B.bu:B.bn,k,k,k,k),k,k,k,new C.e0z(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.K)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aA(k,A.cY(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b5,new A.o(q,k,new A.bG(n,n,n,n),new A.bh(p,p,p,p),k,k,B.n),B.h5,k,k,k,k,B.C_,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e0A(t,a2,r),k,k,k,k,k,k,!1,B.a3))}a0=A.bX(B.bG,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c2T,new A.D(D.bCx,f,k),new A.D(D.bCo,e,k),new A.D(B.rH,a0,k),new A.D(X.am_,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A3.aot,j?B.bu:B.bn,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bCq,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.au,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8E(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.e0B(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.j6,12)],x.V)
f.push(A.aA(k,A.p(k,A.B(A.a([D.fAr,B.bd,D.bGI,D.bSE],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c6C,B.n),k,k,k,B.hR,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e0C(t,a1),k,k,k,k,k,k,!1,B.a3))
f.push(new A.D(B.wd,A.B(A.a([A.E(A.dT(B.di,new C.e0D(a1),k),1),B.as,A.E(A.bI(M.aWn,k,new C.e0E(t,a1),A.bo(B.bP,k,k,k,k,k,B.cm,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bn(!0,A.p(k,A.ci(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.BW,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:87}
C.e0z.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e0A.prototype={
$0(){return this.b.$1(new C.e0y(this.a,this.c))},
$S:0}
C.e0y.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e0B.prototype={
$1(d){var w=this.a
w.m(new C.e0w(w,d))
this.b.$1(new C.e0x())},
$S:9}
C.e0w.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e0x.prototype={
$0(){},
$S:0}
C.e0C.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(new A.aHa(!0,w))
return null},
$S:0}
C.e0D.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e0E.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(new A.aHa(!1,w))
return null},
$S:0}
C.e0I.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cMQ(this.b.b)
w.r.aa(0)},
$S:0}
C.e0_.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiv(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hrm(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e00.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFb(w)},
$S:0}
C.e0S.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adP(this.b,w,this.c,null)},
$S:z+39}
C.e0M.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e4:B.c,t=A.n(20),s=A.X(B.lK,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.P,0,B.p)
return A.ei(A.a([A.bI(D.fS6,w,new C.e0L(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b8(t,B.a0),r,w)},
$S:18}
C.e0L.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e01.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e02.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e03.prototype={
$1(d){return d.a},
$S:z+8}
C.e04.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hX(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFb(w)},
$S:0}
C.e08.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiv(q)
w=A.T(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e06(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hrm(v.e,null,r,v.f,v.r,new C.e07(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e07.prototype={
$0(){return this.a.aaQ(this.b)},
$S:0}
C.e06.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e09.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hX>")
w=A.C(new A.N(w,new C.e05(this.b),v),v.k("ak.E"))
u.d=t.aFb(w)},
$S:0}
C.e05.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e0R.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e0l.prototype={
$1(d){return d.length!==0},
$S:3}
C.e0m.prototype={
$1(d){var w=this
return new A.e2(new C.e0k(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e0k.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e4:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.au,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e0g(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.Y,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mr,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.P,0,B.p)
t=w.a
return A.ei(A.a([A.bM(!1,B.di,v,v,!0,v,v,v,new C.e0h(d),v,v),A.bI(B.KL,v,new C.e0i(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fEU,v,new C.e0j(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:178}
C.e0g.prototype={
$1(d){var w=null
return A.dH(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.au,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c_I,w,w,w,new C.e0f(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1961}
C.e0f.prototype={
$0(){return this.a.$1(new C.e0d(this.b,this.c))},
$S:0}
C.e0d.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e0h.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e0i.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e0e(w.c,u))
v.bP(0,B.cb)}},
$S:0}
C.e0e.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e0j.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.e0n.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cNu(this.b,D.ur,C.H0(v,w.a.c))},
$S:0}
C.e0Z.prototype={
$1(d){return d.as},
$S:z+1}
C.e1_.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iZ(this.b,w)},
$S:0}
C.e10.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ind(v)
return w.Wv(v==null?null:v.a)},
$S:0}
C.e11.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hZP(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.cuQ(new A.av(u,t),v.gbkp(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d_n:D.cYA
q=A.L(s?B.dr:D.bim,B.r,1)
p=A.n(22)
o=A.bT(0,A.b4(m,m,m,new C.bfi(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.ab,B.t,A.a([o,A.bT(0,A.uT(new A.Q(n,n,n,n),new A.a4(u,t,new C.bgd(l.d,v,l.f,w,new C.e0V(l),l.gceE(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.by_(s,new C.e0W(l,e),new C.e0X(l,e),new C.e0Y(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b0,B.b6,B.x,r,m,m),B.n),m,m,m,A_.al6,m,m,m,m)},
$S:219}
C.e0V.prototype={
$1(d){var w=this.a
w.m(new C.e0T(w,d))},
$S:2}
C.e0T.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.e0W.prototype={
$0(){var w=this.b
return this.a.bbY(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e0X.prototype={
$0(){var w=this.b
return this.a.bbY(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e0Y.prototype={
$0(){var w=this,v=w.b
return w.a.aUu(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbkp())},
$S:0}
C.e12.prototype={
$0(){var w=this.a
return w.m(new C.e0U(w))},
$S:0}
C.e0U.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e0a.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fL(new A.fE(s.c)),$async$$0)
case 2:t.y8("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfm.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bk3(u,C.hCk(v.c,u),new C.dfl(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dfl.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dfn.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnn(d.d,d.c,u.f.q(0,d.a),new C.dfk(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dfk.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fEI.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.ow(new A.cP(new A.Y(v,new C.fEJ(d),w.k("Y<1>")),new C.fEK(),w.k("cP<1,m>")))},
$S:z+19}
C.fEJ.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fEK.prototype={
$1(d){return d.a},
$S:z+8}
C.fEG.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fEH.prototype={
$1(d){return d.b},
$S:z+8}
C.fEN.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.ow(new A.cP(new A.Y(v,new C.fEO(d),w.k("Y<1>")),new C.fEP(),w.k("cP<1,m>")))},
$S:z+19}
C.fEO.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fEP.prototype={
$1(d){return d.a},
$S:z+8}
C.fEL.prototype={
$1(d){var w,v=A.eD([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fEM.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dfp.prototype={
$0(){return this.a},
$S:z+46}
C.dfG.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:256}
C.dfy.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dfz()),v=J.a7(w)
if(!v.q(w,e))v.M(w,e)},
$S:115}
C.dfz.prototype={
$0(){return A.a([],x.s)},
$S:626}
C.dfx.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f2(w,e)
return w===!0},
$S:299}
C.dfq.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dfw.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dfv.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aX(v==null?D.Dh:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aX(v==null?B.Y:v)
while(v.C()){t=v.gS(v)
if(e.q(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aX(t==null?D.Dh:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1963}
C.dfr.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dfA.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aX(u==null?B.Y:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gS(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aX(t==null?D.Dh:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b_(w,new C.dfB(r)))w.push(r)}}B.d.bs(w,new C.dfC(a8))
B.d.aX(w,new C.dfD())
q=C.hZO(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eRd],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.K)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gI(k)+B.d.gak(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bqt(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1964}
C.dfB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dfC.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dfD.prototype={
$2(d,e){return B.o.aO(d.Q,e.Q)},
$S:z+7}
C.dfE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gK(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b9(v,A.a6(v).k("b9<2>")).cG(0,0,B.pS)+88-w.gI(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gK(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:678}
C.dfF.prototype={
$1(d){return 16+d*156},
$S:187}
C.dfo.prototype={
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
t.n(0,d,new C.Gj(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Gj(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Gj(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aX(t==null?B.Y:t)
s=o.w
while(t.C()){r=t.gS(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KA(d,new A.u(e+t,w),s,s.length))}},
$S:198}
C.dfs.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKi(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:115}
C.dft.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dfu.prototype={
$2(d,e){return B.k.aO(d.a,e.a)},
$S:629}
C.dfH.prototype={
$2(d,e){return B.k.aO(d.a,e.a)},
$S:629}
C.dfI.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:363}
C.dfJ.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:179}
C.dfK.prototype={
$1(d){return d>=0.5},
$S:114}
C.fkP.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hf(A.aO(!1,v,!0,new A.a4(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1966}
C.eVJ.prototype={
$1(d){var w=null,v=A.n(8),u=B.bP.j(0.12),t=A.n(8)
return new A.D(B.ns,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fqb,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.O2,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVI(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eVI.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dvz.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dvy.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nM,B.K,w,w)
return A.ei(A.a([A.bM(!1,B.di,w,w,!0,w,w,w,new C.dvw(d),w,w),A.bM(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mC,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dvx(d),w,w)],x.p),B.b9,B.BX,w,u,D.bDr,w,D.bFo,new A.b8(v,B.a0),w,w)},
$S:18}
C.dvw.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dvx.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dvI.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dvJ.prototype={
$1(d){var w=this.a
return w.m(new C.dvH(w,d))},
$S:z+49}
C.dvH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dvK.prototype={
$1(d){var w=null
return A.qG(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dvN.prototype={
$1(d){var w=this.a
return w.m(new C.dvG(w,d))},
$S:35}
C.dvG.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dvM.prototype={
$1(d){var w=null
return A.qG(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dvO.prototype={
$1(d){var w=this.a
return w.m(new C.dvF(w,d))},
$S:35}
C.dvF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dvP.prototype={
$0(){var w=this.a
return w.m(new C.dvE(w))},
$S:0}
C.dvE.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dvQ.prototype={
$0(){var w=this.a
return w.m(new C.dvD(w))},
$S:0}
C.dvD.prototype={
$0(){return++this.a.at},
$S:0}
C.dvR.prototype={
$0(){var w=this.a
return w.m(new C.dvC(w))},
$S:0}
C.dvC.prototype={
$0(){return--this.a.ax},
$S:0}
C.dvS.prototype={
$0(){var w=this.a
return w.m(new C.dvB(w))},
$S:0}
C.dvB.prototype={
$0(){return++this.a.ax},
$S:0}
C.dvT.prototype={
$1(d){var w=this.a
return w.m(new C.dvA(w,d))},
$S:9}
C.dvA.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dvL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dvU.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e4:B.c
v=A.n(12)
if(p)u=B.bP
else u=(q.c.a?B.ea:B.bO).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bu:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bu:B.bn
return A.E(A.aI(!1,B.a2,!0,r,A.aO(!1,o,!0,A.cY(r,A.x(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b5,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.jW,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dvV(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dvV.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dw3.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cee.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.cel.prototype={
$1(d){return d.ah()},
$S:z+5}
C.cem.prototype={
$2(d,e){var w=J.b7(e,new C.cek(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cek.prototype={
$1(d){return d.ah()},
$S:z+12}
C.ceg.prototype={
$1(d){return C.alC(A.a2(d,x.N,x.z))},
$S:z+9}
C.ceh.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cei.prototype={
$1(d){return C.hih(A.a2(d,x.N,x.z))},
$S:z+11}
C.cej.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ceq.prototype={
$1(d){return new A.aHm(d.f.length,d.a,d.b)},
$S:z+55}
C.cer.prototype={
$2(d,e){return B.a.aO(d.c,e.c)},
$S:527}
C.cen.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ceo.prototype={
$1(d){return d.cMs(C.H0(d,this.a))},
$S:z+85}
C.e1b.prototype={
$1(d){return C.uq(d,this.a.a.c)},
$S:z+3}
C.e1c.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e1g.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e1h.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e18.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0L(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yG("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pq(r.c,r.e),$async$$0)
case 4:s.yG(p)
w=5
return A.b(s.JZ(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e19.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0L(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yG("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pq(r.c,r.e),$async$$0)
case 4:s.yG(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1a.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.VP(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yG("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yG("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yG("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JZ(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yG(B.a.em(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e1f.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0K(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yG("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).cc(A.ej(new C.e1e(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pq(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1e.prototype={
$1(d){var w=this.b
return new C.a0_(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e1d.prototype={
$1(d){return D.ht9},
$S:z+58}
C.e1j.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e1k.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e1i(w,d)
return new A.D(B.d1,new C.bgh(this.b,d.c,d.a,w,null),null)},
$S:1967}
C.e1i.prototype={
$0(){return this.a.Yh(this.b.b)},
$S:0}
C.e13.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e14.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e15.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e16.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e17.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e1l.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cV(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).O(s)
return}},
$S:199}
C.dNE.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dNF.prototype={
$0(){return B.d.gI(D.a5L)},
$S:z+60}
C.dNG.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d67,44),w,w,w),w,w,new C.blb(u,t,v,w),B.ax)},
$S:63}
C.fVl.prototype={
$1(d){return A.pa(new C.fVk(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:142}
C.fVk.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e4:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tb,24)],x.V),o=r?B.ea:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bV1,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.au,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.am4,A.B(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.ip(!0,t,e,B.y,D.fcM,new C.fVj(this.b,s),20,B.alD,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.l0,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:118}
C.fVj.prototype={
$2(d,e){var w=null,v=D.a5L[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.L(s?B.ea:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.en,8)],x.V),p=A.n(15),o=A.E(new C.a6V(v.a,!0,w),1),n=s?B.jQ:B.jg,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.au,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eK(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.kO,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fVi(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.fVi.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cnj.prototype={
$0(){return this.a.agZ(this.b)},
$S:0}
C.fUJ.prototype={
$1(d){return D.ho1},
$S:z+61}
C.h1d.prototype={
$1(d){var w=this
return new C.a1N(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fUN.prototype={
$1(d){return new C.ZD(this.a,null)},
$S:z+63}
C.fUM.prototype={
$1(d){return D.hp0},
$S:z+64}
C.d6T.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d6U.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d6S(w,d))},
$S:35}
C.d6S.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d6V.prototype={
$1(d){return this.a.Kz()},
$S:2}
C.d6W.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d6P.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d6Q.prototype={
$1(d){return this.a.Kz()},
$S:2}
C.d6R.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cFj.prototype={
$0(){},
$S:0}
C.cFp.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cFq.prototype={
$0(){return this.a.aPV(-1)},
$S:0}
C.cFr.prototype={
$1(d){return this.a.m(new C.cFo())},
$S:2}
C.cFo.prototype={
$0(){},
$S:0}
C.cFs.prototype={
$0(){return this.a.aPV(1)},
$S:0}
C.cFt.prototype={
$1(d){return this.a.m(new C.cFn())},
$S:2}
C.cFn.prototype={
$0(){},
$S:0}
C.cFu.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.ea:B.bO
return A.uL(u,u,B.b1,r,u,new C.cFm(t,d),B.yB,s,w,u,new A.ay(v,1,B.r,-1),B.cc)},
$S:1968}
C.cFm.prototype={
$1(d){var w=this.a
return w.m(new C.cFk(w,this.b))},
$S:9}
C.cFk.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cFv.prototype={
$1(d){return this.a.m(new C.cFl())},
$S:2}
C.cFl.prototype={
$0(){},
$S:0}
C.cFw.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fk8.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.fk9.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fka.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fk6.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbBw()
w=w.e
s=A.n(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bFn,new A.er(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxN(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:63}
C.fk7.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dw.aw(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b1,s,B.aW],x.O)
return A.aI(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eK(D.ep1,r,new A.o(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:141}
C.fTb.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:75}
C.eST.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eSK.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eSL.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eSR.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e2(new C.eSQ(w,this.b),null)},
$S:20}
C.eSQ.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e4:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.au,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eU(w,u,new A.D(B.alX,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hod(new C.eSN(r,e),r.a),B.aB,A.B(A.a([A.E(A.dT(B.di,new C.eSO(d),w),1),B.as,A.E(A.bI(B.VJ,w,new C.eSP(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(t,B.a0),w)},
$S:102}
C.eSN.prototype={
$1(d){return this.b.$1(new C.eSM(this.a,d))},
$S:35}
C.eSM.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eSO.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eSP.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eSS.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tl(this.b)},
$S:0}
C.eSF.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bdR(w)},
$S:0}
C.eSJ.prototype={
$1(d){return this.bn4(d)},
bn4(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LM(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iZ(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eSI.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eSH(this.b),v),v.k("M.E"))
u.d=t.bdR(w)},
$S:0}
C.eSH.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eSU.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iZ(this.b,w)},
$S:0}
C.eSV.prototype={
$1(d){return this.a.bFF(d,this.b)},
$S:z+67}
C.eSG.prototype={
$0(){return this.a.aaP(this.b)},
$S:0}
C.h13.prototype={
$1(d){return new C.ae9(this.a,this.b,this.c,null)},
$S:z+68}
C.eSX.prototype={
$0(){return this.a.a03(this.b)},
$S:0}
C.eSY.prototype={
$0(){return this.a.QB(this.b)},
$S:0}
C.eSZ.prototype={
$0(){return this.a.EK(this.b)},
$S:0}
C.eT_.prototype={
$0(){return this.a.a04(this.b)},
$S:0}
C.eSW.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eSA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eSB.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eSC.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eSE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qk(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eSD(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eSD.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eTm.prototype={
$2(d,e){return d+e.gxj()},
$S:z+71}
C.eTi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eTj.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eT3.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e4:B.c,s=A.n(24),r=A.p(v,D.bVu,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.L(B.aw.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.au,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.au
u=u?B.ea:B.bO
w=x.p
return A.eU(v,t,new A.D(B.yA,A.x(A.a([r,B.aQ,q,B.N,p,B.d4,A.B(A.a([A.E(A.dT(B.nP,new C.eT1(d),A.dk(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b8(A.n(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bI(D.fVZ,v,new C.eT2(d),A.bo(B.aw,v,v,v,v,v,B.fg,v,new A.b8(A.n(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d8,v,new A.b8(s,B.a0),v)},
$S:49}
C.eT1.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eT2.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eTc.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e4:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h_,28)],x.V),g=k?D.ddd:B.a57,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f6h,B.av,new A.bN(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cA,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.az,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.am1,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b6R(B.b7,B.jk,new C.eT9(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b6R(B.cw,R.za,new C.eTa(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aw.j(k?0.14:0.06)
q=A.n(16)
p=A.L(B.aw.j(0.28),B.r,1)
o=A.p(m,D.bUQ,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.au,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bn(!0,new A.D(B.wa,A.p(m,A.x(A.a([g,new A.D(B.alY,A.x(A.a([w,B.W,u,B.bx,t,B.W,A.aI(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.eE,k?B.bu:B.bn,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eTb(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eT9.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vO("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTa.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vO("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTb.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Oi(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eT7.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e4:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.ea:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bu:B.bn
u=A.bx(w,new A.a4(48,48,C.aRI(!0,A.n(12),48,P.OE,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.au,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.B7(v.gxj())
s=x.p
r=this.a
return A.bn(!0,new A.D(B.wa,A.p(q,A.x(A.a([B.W,k,new A.D(D.alV,A.B(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BN,r.coS(B.uM,B.aW,new C.eT5(d),p,"QR code or backup file","Transfer project"),r.b3R(!0,B.eb,B.aw,new C.eT6(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eT5.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eT6.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eT8.prototype={
$1(d){return this.bn5(d)},
bn5(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LM(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.w0(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eTp.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eTo(w))},
$S:0}
C.eTo.prototype={
$0(){return this.a.r++},
$S:0}
C.eTq.prototype={
$0(){var w=this.a
return w.m(new C.eTn(w))},
$S:0}
C.eTn.prototype={
$0(){return this.a.r++},
$S:0}
C.eT0.prototype={
$0(){var w=this.a.c
w.toString
return A.iZ(w,null)},
$S:0}
C.eT4.prototype={
$0(){return this.a.ci9(this.b)},
$S:0}
C.eTl.prototype={
$0(){var w=this.a
return w.m(new C.eTk(w,this.b))},
$S:0}
C.eTk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTf.prototype={
$0(){return this.a.vO("scan")},
$S:0}
C.eTg.prototype={
$0(){return this.a.vO("file")},
$S:0}
C.eTh.prototype={
$1(d){return this.a.coT(d,this.b)},
$S:z+72}
C.eTe.prototype={
$0(){return this.a.EO(this.b)},
$S:0}
C.eTd.prototype={
$0(){return this.a.a0z(this.b,this.c)},
$S:0}
C.cEJ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cEI.prototype={
$1(d){return d.ah()},
$S:z+74}
C.cEG.prototype={
$1(d){return C.hId(A.a2(d,x.N,x.z))},
$S:z+75}
C.cEH.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fDF.prototype={
$1(d){return d.y===D.kP},
$S:z+3}
C.h1P.prototype={
$1(d){return C.aQq(d,this.a)},
$S:z+3}
C.fBk.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bS4.prototype={
$1(d){return!d.as},
$S:z+1}
C.bS3.prototype={
$1(d){return d.ah()},
$S:z+23}
C.bS0.prototype={
$1(d){return C.hij(A.a2(d,x.N,x.z))},
$S:z+24}
C.bS1.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bS2.prototype={
$1(d){return J.k(d)},
$S:17}
C.frS.prototype={
$2(d,e){return e.e.aO(0,d.e)},
$S:z+25}
C.fnH.prototype={
$1(d){return C.h8o(A.a2(d,x.N,x.z))},
$S:z+79}
C.fnI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fnJ.prototype={
$2(d,e){return e.e.aO(0,d.e)},
$S:z+25}
C.fUA.prototype={
$1(d){return J.k(d)},
$S:17}
C.fUB.prototype={
$1(d){return d.a},
$S:z+81}
C.fUC.prototype={
$1(d){return d.length!==0},
$S:3}
C.fUD.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fUE.prototype={
$1(d){return d.Tl(null).ah()},
$S:z+82}
C.h1N.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fE8.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fH9.prototype={
$1(d){return C.alC(A.a2(d,x.N,x.z))},
$S:z+9}
C.fHa.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fHb.prototype={
$2(d,e){return e.r.aO(0,d.r)},
$S:z+6}
C.fHc.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fHd.prototype={
$1(d){return C.uq(d,this.a)},
$S:z+3}
C.fUn.prototype={
$1(d){return C.uq(d,this.a)},
$S:z+3}
C.h1I.prototype={
$1(d){return C.alC(A.a2(d,x.N,x.z))},
$S:z+9}
C.h1J.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h1K.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fDQ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fDR.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h1T.prototype={
$1(d){return!d.as},
$S:z+1}
C.fDk.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fDl.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fDm.prototype={
$2(d,e){return B.o.aO(d.Q,e.Q)},
$S:z+7}
C.h1e.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fI_.prototype={
$1(d){return d.Q},
$S:z+15}
C.fUg.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fH6.prototype={
$1(d){return C.alC(A.a2(d,x.N,x.z))},
$S:z+9}
C.fH7.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fH8.prototype={
$2(d,e){return e.r.aO(0,d.r)},
$S:z+6}
C.fUb.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.foe.prototype={
$1(d){return d.length!==0},
$S:3}
C.fof.prototype={
$1(d){return C.hij(A.a2(d,x.N,x.z))},
$S:z+24}
C.fog.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.foh.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.foi.prototype={
$1(d){return d.length!==0},
$S:3}
C.fow.prototype={
$2(d,e){return d.eK(new C.fox(e))},
$S:1969}
C.fox.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1970}
C.fot.prototype={
$1(d){return C.i3B(d,this.a)},
$S:z+84}
C.fou.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fov.prototype={
$2(d,e){return e.r.aO(0,d.r)},
$S:z+6}
C.fsy.prototype={
$1(d){return d.a},
$S:z+56}
C.fsz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsA.prototype={
$2(d,e){return e.r.aO(0,d.r)},
$S:z+6}
C.fvr.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fAE.prototype={
$1(d){return C.htJ(d,C.H0(d,this.a))},
$S:z+5}
C.fAF.prototype={
$1(d){return C.htK(d,C.H0(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBa.prototype
w.buQ=w.t
w=C.azk.prototype
w.buL=w.t
w=C.aGz.prototype
w.bvd=w.t
w=C.aBb.prototype
w.buR=w.t
w=C.aBd.prototype
w.buS=w.t
w=C.aBe.prototype
w.buT=w.t
w=C.aML.prototype
w.bxI=w.t
w=C.aOR.prototype
w.bA0=w.t
w=C.aOS.prototype
w.bA1=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aE9.prototype,"gclN","clO",28)
var r
w(r=C.aB9.prototype,"gceK","ceL",65)
v(r,"gaO8","NR",0)
v(r,"gcua","B2",0)
v(r,"gbNq","Ov",0)
v(r,"gcIt","yH",0)
v(r,"gcnQ","a1h",0)
v(r,"gbIP","Oe",0)
v(r,"gbNQ","XJ",0)
w(r,"gbSR","bSS",78)
v(r,"gbDa","A3",0)
v(C.aBc.prototype,"gcIp","FG",0)
v(r=C.alr.prototype,"gbrf","brg",2)
v(r,"gbr8","br9",2)
v(r,"gcJw","cJx",2)
u(r,"gqe","kK",0)
u(r=C.ajE.prototype,"geX","fZ",2)
w(r,"gcav","caw",27)
u(C.auo.prototype,"gqe","kK",0)
v(r=C.ayk.prototype,"gcV5","cV6",2)
u(r,"gqe","kK",0)
u(C.aKn.prototype,"gbrd","bre",2)
v(C.alA.prototype,"gBw","cJJ",2)
u(r=C.aly.prototype,"gcKo","cKp",2)
u(r,"gqe","kK",0)
v(r=C.alu.prototype,"gbq7","bq8",2)
v(r,"gcPB","cPC",2)
u(r=C.alw.prototype,"geX","fZ",2)
u(r,"gkB","cJ2",2)
v(r=C.als.prototype,"gcIS","cIT",2)
u(r,"gbp_","jF",2)
v(r=C.aEI.prototype,"gagB","w1",0)
v(r,"gchp","a0q",0)
v(r,"gaSe","Ik",0)
v(r=C.aEF.prototype,"gcEr","a3p",0)
v(r,"gagB","w1",0)
v(r,"gcs8","a1W",0)
v(r,"gchk","b25",2)
v(r,"gcim","a0E",0)
w(r,"gceE","ceF",35)
v(r,"gbNI","Ip",0)
v(r,"gcFw","cFx",2)
v(r,"gc4I","Zq",0)
w(r,"gcd7","cd8",36)
v(r,"gch8","ch9",2)
v(r=C.aD8.prototype,"gcaB","Q9",0)
v(r,"gcaD","caE",2)
v(r,"gbKj","aar",0)
v(r=C.aEH.prototype,"gbRh","Yd",0)
v(r,"gc0U","YT",0)
v(r,"gcyC","a2O",0)
v(r,"gcuL","a2p",0)
v(C.aEG.prototype,"gcut","aim",0)
v(C.atA.prototype,"gcd5","a01",0)
v(C.azT.prototype,"ga38","Kz",2)
v(C.azS.prototype,"ga38","Kz",2)
v(C.ayy.prototype,"ga38","Kz",2)
v(r=C.aGa.prototype,"gb3e","R6",0)
v(r,"gbBZ","Wp",0)
v(r,"gcia","cib",2)
w(C.aG9.prototype,"gcdZ","ce_",69)
t(C.aGb.prototype,"gaS8",0,0,null,["$1","$0"],["Ij","bLB"],70,0,0)
s(C,"hBo","idH",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.apb,C.uI,C.nt,C.I6,C.afk,C.Ks,C.uJ,C.bSA,C.t9,C.boF,C.alJ,C.ads,C.lo,C.bRb,C.atM,C.zm,C.ako,C.Mq,C.ba8,C.a9A,C.bhn,C.afr,C.azz,C.aff,C.aKn,C.KA,C.Gj,C.bgf,C.aKi,C.aqv,C.dfL,C.lR,C.aUL,C.aUK,C.aSI,C.uc,C.rm,C.lz,C.hX,C.kQ,C.aIg])
u(A.hz,[C.fLN,C.fLM,C.fLO,C.fVe,C.fzp,C.fzq,C.fzv,C.fJw,C.fJv,C.fJu,C.c7i,C.fVL,C.fVD,C.fVP,C.fDY,C.dOk,C.dOf,C.dOg,C.dNT,C.dNP,C.dOz,C.dOA,C.dOt,C.dOu,C.dOB,C.dOC,C.fEE,C.fH3,C.fH4,C.fUl,C.h1H,C.fDP,C.fUT,C.deY,C.dek,C.det,C.deK,C.dep,C.dev,C.dem,C.dez,C.deA,C.dey,C.deP,C.deO,C.dgK,C.dgL,C.dgM,C.dfb,C.dfg,C.dff,C.cNx,C.cNz,C.d66,C.d6v,C.d6w,C.d6z,C.d6B,C.d6C,C.d6D,C.d6F,C.d6G,C.bQW,C.bQQ,C.fsf,C.h1A,C.h1B,C.h1C,C.h1x,C.h1D,C.h1E,C.h1F,C.h1w,C.fFd,C.fTo,C.fBl,C.fHZ,C.bM1,C.h1Z,C.fTU,C.bKc,C.bK7,C.bK9,C.bK8,C.cp_,C.coV,C.coW,C.coU,C.coS,C.coX,C.cOB,C.cDW,C.cDZ,C.cDX,C.cE_,C.cE0,C.f4V,C.ff0,C.bRI,C.bRC,C.bRG,C.bRj,C.e_K,C.e_H,C.e_I,C.e_G,C.e_M,C.bRA,C.bRq,C.bRa,C.bR9,C.bR5,C.bR6,C.bR7,C.bR8,C.e1p,C.e0P,C.e0K,C.e0b,C.e0r,C.e0u,C.e0q,C.e0p,C.e0G,C.e0H,C.e0B,C.e0_,C.e0S,C.e0M,C.e01,C.e02,C.e03,C.e08,C.e06,C.e05,C.e0l,C.e0m,C.e0g,C.e0Z,C.e0V,C.dfm,C.dfn,C.fEI,C.fEJ,C.fEK,C.fEG,C.fEH,C.fEN,C.fEO,C.fEP,C.fEL,C.fEM,C.dfG,C.dfw,C.dfr,C.dfB,C.dfC,C.dfF,C.dft,C.dfI,C.dfJ,C.dfK,C.fkP,C.eVJ,C.dvy,C.dvI,C.dvJ,C.dvK,C.dvN,C.dvM,C.dvO,C.dvT,C.dvU,C.cel,C.cek,C.ceg,C.ceh,C.cei,C.cej,C.ceq,C.cen,C.ceo,C.e1b,C.e1e,C.e1d,C.e1k,C.e1l,C.dNE,C.fVl,C.fUJ,C.h1d,C.fUN,C.fUM,C.d6U,C.d6V,C.d6Q,C.cFr,C.cFt,C.cFu,C.cFm,C.cFv,C.fk8,C.fTb,C.eSR,C.eSN,C.eSJ,C.eSH,C.eSV,C.h13,C.eT3,C.eTc,C.eT7,C.eT8,C.eTh,C.cEI,C.cEG,C.cEH,C.fDF,C.h1P,C.fBk,C.bS4,C.bS3,C.bS0,C.bS1,C.bS2,C.fnH,C.fnI,C.fUA,C.fUB,C.fUC,C.fUD,C.fUE,C.h1N,C.fE8,C.fH9,C.fHa,C.fHc,C.fHd,C.fUn,C.h1I,C.h1J,C.h1K,C.fDQ,C.fDR,C.h1T,C.fDk,C.fDl,C.h1e,C.fI_,C.fUg,C.fH6,C.fH7,C.fUb,C.foe,C.fof,C.fog,C.foh,C.foi,C.fox,C.fot,C.fou,C.fsy,C.fsz,C.fvr,C.fAE,C.fAF])
u(A.ax,[C.b_g,C.alp,C.aW1,C.Zi,C.bbT,C.Qm,C.a66,C.tx,C.I8,C.bgd,C.bk3,C.by_,C.bnn,C.adO,C.bk2,C.adN,C.bk1,C.aD9,C.aJk,C.adP,C.Gf,C.bge,C.ad3,C.bgc,C.bgh,C.b_e,C.atA,C.ae9])
u(A.mh,[C.bcv,C.bdI,C.bdz,C.aIb,C.bj4,C.boE,C.aW6,C.bcw,C.aB8,C.bc1,C.bsE,C.bjc,C.biC,C.biK,C.bgg,C.bfi,C.blb,C.bxN])
u(A.iI,[C.fVI,C.fVJ,C.fVK,C.fVB,C.fVC,C.fVN,C.fVO,C.dOw,C.dOi,C.dOl,C.dO_,C.dO0,C.dO1,C.dNZ,C.dO6,C.dNY,C.dO7,C.dO8,C.dNX,C.dO9,C.dNW,C.dOa,C.dNV,C.dOb,C.dNN,C.dNO,C.dNU,C.dOc,C.dNS,C.dOd,C.dNR,C.dO2,C.dNQ,C.dO3,C.dNM,C.dO4,C.dO5,C.dOx,C.dOy,C.dOm,C.dOn,C.dOo,C.dOp,C.dOq,C.dOr,C.dOs,C.dOE,C.dOv,C.fEF,C.dei,C.deg,C.deh,C.dej,C.deX,C.deM,C.deJ,C.del,C.deN,C.der,C.des,C.deu,C.deL,C.deq,C.dew,C.deU,C.deG,C.deF,C.deH,C.deI,C.deB,C.deD,C.deE,C.dex,C.deQ,C.deT,C.den,C.deo,C.dgJ,C.dgI,C.dgH,C.dgG,C.dgN,C.dgF,C.dgO,C.dfc,C.dfd,C.dfe,C.dfh,C.dfa,C.df9,C.cNy,C.d65,C.d6i,C.d6h,C.d6x,C.d6g,C.d6y,C.d6f,C.d6e,C.d6A,C.d6d,C.d6q,C.d6p,C.d6H,C.bQP,C.bQZ,C.bQR,C.bQS,C.bQV,C.bQU,C.bQX,C.bQY,C.bQT,C.bQN,C.bQO,C.bSs,C.bSt,C.bSu,C.bSv,C.bSw,C.bSx,C.bSy,C.h1z,C.fTp,C.bKb,C.bK6,C.bK4,C.bK5,C.bK3,C.cp1,C.cp2,C.cp0,C.cp3,C.cp5,C.cp6,C.cp7,C.coY,C.cDV,C.cE3,C.cE4,C.cE5,C.cE2,C.cE6,C.cE7,C.cE8,C.cE9,C.cDY,C.cE1,C.bRY,C.bRX,C.bRV,C.bRT,C.bRU,C.bRQ,C.bRR,C.bRS,C.bRW,C.bRP,C.f4W,C.f4X,C.f4Y,C.f4Z,C.f5_,C.bRM,C.bRN,C.bRO,C.bRH,C.bRJ,C.bRK,C.bRL,C.bRD,C.bRn,C.bRm,C.bRl,C.bRf,C.bRg,C.bRk,C.bRh,C.bRi,C.bRe,C.e_J,C.e_L,C.e_E,C.e_F,C.e_D,C.e_N,C.e_O,C.e_P,C.e_S,C.e_T,C.e_U,C.e_V,C.e_W,C.e_X,C.e_Y,C.e_Z,C.e_Q,C.e_R,C.bRz,C.bRy,C.bRp,C.bRo,C.bRv,C.bRw,C.bRs,C.bRt,C.bRu,C.bRr,C.bR_,C.bR0,C.bR4,C.bR3,C.bR2,C.bR1,C.e1o,C.e1n,C.e1q,C.e1r,C.e1s,C.e1m,C.e1u,C.e1t,C.e0N,C.e0O,C.e0Q,C.e0c,C.e0t,C.e0s,C.e0v,C.e0J,C.e0o,C.e0z,C.e0A,C.e0y,C.e0w,C.e0x,C.e0C,C.e0D,C.e0E,C.e0I,C.e00,C.e0L,C.e04,C.e07,C.e09,C.e0R,C.e0f,C.e0d,C.e0h,C.e0i,C.e0e,C.e0j,C.e0n,C.e1_,C.e10,C.e0T,C.e0W,C.e0X,C.e0Y,C.e12,C.e0U,C.e0a,C.dfl,C.dfk,C.dfp,C.dfz,C.dfq,C.eVI,C.dvz,C.dvw,C.dvx,C.dvH,C.dvG,C.dvF,C.dvP,C.dvE,C.dvQ,C.dvD,C.dvR,C.dvC,C.dvS,C.dvB,C.dvA,C.dvL,C.dvV,C.dw3,C.e1c,C.e1g,C.e1h,C.e18,C.e19,C.e1a,C.e1f,C.e1j,C.e1i,C.e13,C.e14,C.e15,C.e16,C.e17,C.dNF,C.fVi,C.cnj,C.d6T,C.d6S,C.d6W,C.d6P,C.d6R,C.cFj,C.cFp,C.cFq,C.cFo,C.cFs,C.cFn,C.cFk,C.cFl,C.cFw,C.fk9,C.fka,C.eST,C.eSK,C.eSL,C.eSM,C.eSO,C.eSP,C.eSS,C.eSF,C.eSI,C.eSU,C.eSG,C.eSX,C.eSY,C.eSZ,C.eT_,C.eSW,C.eSA,C.eSB,C.eSC,C.eSE,C.eSD,C.eTi,C.eTj,C.eT1,C.eT2,C.eT9,C.eTa,C.eTb,C.eT5,C.eT6,C.eTp,C.eTo,C.eTq,C.eTn,C.eT0,C.eT4,C.eTl,C.eTk,C.eTf,C.eTg,C.eTe,C.eTd])
u(A.af,[C.apn,C.Tq,C.a_0,C.a_4,C.a_2,C.ZB,C.alq,C.ajD,C.aun,C.ayj,C.alz,C.alx,C.alt,C.VM,C.alv,C.Tr,C.aqy,C.aqs,C.a_F,C.aqw,C.a0_,C.a00,C.a6V,C.ZD,C.ZC,C.Z9,C.a1N,C.G4,C.ayr,C.atz,C.att,C.aty,C.OH])
u(A.ah,[C.aE9,C.bg7,C.aB9,C.bgw,C.aBc,C.bdG,C.aBa,C.azk,C.aGz,C.ayk,C.aBe,C.aBd,C.aBb,C.blv,C.alw,C.als,C.aEI,C.aEF,C.aD8,C.aEH,C.aEG,C.blw,C.aML,C.azT,C.azS,C.ayy,C.bxQ,C.aOR,C.aOS,C.aGa,C.bmT,C.aG9,C.bzD])
u(A.jx,[C.dOh,C.dOj,C.dOe,C.dOD,C.fH5,C.bQM,C.deW,C.deV,C.deC,C.deR,C.deS,C.dfi,C.bSz,C.bSr,C.bRc,C.bRd,C.h1y,C.h1Y,C.bKa,C.cp4,C.coZ,C.coT,C.f50,C.bRB,C.bRE,C.bRF,C.dpU,C.bRx,C.e0F,C.e0k,C.e11,C.dfy,C.dfx,C.dfv,C.dfA,C.dfD,C.dfE,C.dfo,C.dfs,C.dfu,C.dfH,C.cee,C.cem,C.cer,C.dNG,C.fVk,C.fVj,C.fk6,C.fk7,C.eSQ,C.eTm,C.cEJ,C.frS,C.fnJ,C.fHb,C.fDm,C.fH8,C.fow,C.fov,C.fsA])
u(A.lB,[C.a1i,C.aft,C.a1B,C.a_s,C.ac7,C.aL5,C.I7,C.alB,C.cEK,C.cEL])
t(C.alr,C.aBa)
t(C.ajE,C.azk)
t(C.auo,C.aGz)
t(C.bgb,C.aBe)
t(C.alA,C.bgb)
t(C.bga,C.aBd)
t(C.aly,C.bga)
t(C.bg9,C.aBb)
t(C.alu,C.bg9)
t(C.blc,C.aML)
t(C.bxO,C.aOR)
t(C.bxP,C.aOS)
t(C.aGb,C.bzD)
t(C.bam,A.ba9)
t(C.bxR,A.a6A)
t(C.bal,C.bxR)
w(C.aBa,A.cg)
w(C.azk,A.cg)
w(C.aGz,A.eQ)
w(C.aBb,A.cg)
v(C.bg9,C.aff)
w(C.aBd,A.cg)
v(C.bga,C.aff)
w(C.aBe,A.cg)
v(C.bgb,C.aff)
w(C.aML,A.eQ)
w(C.aOR,A.cg)
w(C.aOS,A.cg)
v(C.bzD,A.eE)
v(C.bxR,A.je)})()
A.j2(b.typeUniverse,JSON.parse('{"b_g":{"ax":[],"v":[]},"bcv":{"aC":[]},"apn":{"af":[],"v":[]},"aE9":{"ah":["apn"]},"Tq":{"af":[],"v":[]},"alp":{"ax":[],"v":[]},"aW1":{"ax":[],"v":[]},"bg7":{"ah":["Tq"]},"a_0":{"af":[],"v":[]},"a_4":{"af":[],"v":[]},"a_2":{"af":[],"v":[]},"ZB":{"af":[],"v":[]},"aB9":{"ah":["a_0"]},"bgw":{"ah":["a_4"]},"aBc":{"ah":["a_2"]},"Zi":{"ax":[],"v":[]},"bdI":{"aC":[]},"bdz":{"aC":[]},"bdG":{"ah":["ZB"]},"aIb":{"aC":[]},"bj4":{"aC":[]},"bbT":{"ax":[],"v":[]},"alq":{"af":[],"v":[]},"alr":{"ah":["alq"]},"boE":{"aC":[]},"aW6":{"aC":[]},"ajD":{"af":[],"v":[]},"aun":{"af":[],"v":[]},"ayj":{"af":[],"v":[]},"ajE":{"ah":["ajD"]},"bcw":{"aC":[]},"Qm":{"ax":[],"v":[]},"aB8":{"aC":[]},"auo":{"ah":["aun"]},"bc1":{"aC":[]},"ayk":{"ah":["ayj"]},"alz":{"af":[],"v":[]},"alx":{"af":[],"v":[]},"alt":{"af":[],"v":[]},"alA":{"ah":["alz"]},"bsE":{"aC":[]},"aly":{"ah":["alx"]},"bjc":{"aC":[]},"alu":{"ah":["alt"]},"biC":{"aC":[]},"VM":{"af":[],"v":[]},"alv":{"af":[],"v":[]},"Tr":{"af":[],"v":[]},"a66":{"ax":[],"v":[]},"biK":{"aC":[]},"tx":{"ax":[],"v":[]},"I8":{"ax":[],"v":[]},"blv":{"ah":["VM"]},"alw":{"ah":["alv"]},"als":{"ah":["Tr"]},"aqy":{"af":[],"v":[]},"aqs":{"af":[],"v":[]},"a_F":{"af":[],"v":[]},"adP":{"ax":[],"v":[]},"aEI":{"ah":["aqy"]},"aEF":{"ah":["aqs"]},"bgd":{"ax":[],"v":[]},"bgg":{"aC":[]},"bk3":{"ax":[],"v":[]},"bfi":{"aC":[]},"by_":{"ax":[],"v":[]},"bnn":{"ax":[],"v":[]},"aD8":{"ah":["a_F"]},"adO":{"ax":[],"v":[]},"bk2":{"ax":[],"v":[]},"adN":{"ax":[],"v":[]},"bk1":{"ax":[],"v":[]},"aD9":{"ax":[],"v":[]},"aJk":{"ax":[],"v":[]},"Gf":{"ax":[],"v":[]},"aqw":{"af":[],"v":[]},"a0_":{"af":[],"v":[]},"a00":{"af":[],"v":[]},"aEH":{"ah":["aqw"]},"bge":{"ax":[],"v":[]},"ad3":{"ax":[],"v":[]},"bgc":{"ax":[],"v":[]},"bgh":{"ax":[],"v":[]},"aEG":{"ah":["a0_"]},"blw":{"ah":["a00"]},"b_e":{"ax":[],"v":[]},"a6V":{"af":[],"v":[]},"blc":{"ah":["a6V"]},"blb":{"aC":[]},"atA":{"ax":[],"v":[]},"ZD":{"af":[],"v":[]},"ZC":{"af":[],"v":[]},"Z9":{"af":[],"v":[]},"a1N":{"af":[],"v":[]},"azT":{"ah":["ZD"]},"azS":{"ah":["ZC"]},"ayy":{"ah":["Z9"]},"bxQ":{"ah":["a1N"]},"G4":{"af":[],"v":[]},"ayr":{"af":[],"v":[]},"bxO":{"ah":["G4"]},"bxP":{"ah":["ayr"]},"bxN":{"aC":[]},"atz":{"af":[],"v":[]},"aGa":{"ah":["atz"]},"ae9":{"ax":[],"v":[]},"att":{"af":[],"v":[]},"aty":{"af":[],"v":[]},"bmT":{"ah":["att"]},"aG9":{"ah":["aty"]},"OH":{"af":[],"v":[]},"aGb":{"ah":["OH"],"eE":[]},"bal":{"je":[],"fj":[]}}'))
A.D2(b.typeUniverse,JSON.parse('{"aff":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aSI"),cq:w("md"),Q:w("rm"),r:w("bu<m,m>"),c5:w("aUK"),dY:w("aUL"),fH:w("Mq"),de:w("ako"),dN:w("Mz<G>"),gc:w("E4<G>"),A:w("eJ<m?>"),e:w("I6"),B:w("nt"),P:w("hX"),df:w("lo"),k:w("kQ"),x:w("aB<~>"),U:w("O<SA>"),V:w("O<ac>"),C:w("O<rm>"),O:w("O<t>"),c:w("O<Mq>"),b:w("O<ako>"),ac:w("O<eJ<m?>>"),I:w("O<nt>"),u:w("O<hX>"),J:w("O<lo>"),_:w("O<kQ>"),cl:w("O<aB<ai<a8<m,@>>>>"),R:w("O<nv>"),eU:w("O<ai<+(I,I)>>"),ez:w("O<a8<m,aD>>"),gE:w("O<a8<m,m>>"),Y:w("O<a8<m,@>>"),fD:w("O<mM>"),bp:w("O<oA>"),g:w("O<u>"),ar:w("O<atM>"),v:w("O<fW>"),gy:w("O<a9A>"),L:w("O<+(m,m)>"),G:w("O<+(I,I)>"),E:w("O<+(I,~())>"),bd:w("O<+(m,G,P)>"),bF:w("O<+count,id,name(G,m,m)>"),F:w("O<cW>"),s:w("O<m>"),cF:w("O<au>"),aS:w("O<j1>"),dT:w("O<ba8>"),p:w("O<v>"),Z:w("O<fj>"),D:w("O<lz>"),h:w("O<azz>"),cC:w("O<bhn>"),fp:w("O<Ks>"),M:w("O<KA>"),gZ:w("O<aIg>"),gA:w("O<afk>"),e4:w("O<afr>"),dE:w("O<aKi>"),f7:w("O<P>"),n:w("O<I>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cx<ah<af>>"),d:w("ai<nt>"),do:w("ai<hX>"),cg:w("ai<lo>"),ax:w("ai<kQ>"),fO:w("ai<a8<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lz>"),j:w("ai<@>"),fK:w("bA<m,m>"),d2:w("bA<m,ai<a8<m,@>>>"),a:w("a8<m,@>"),f:w("a8<@,@>"),gv:w("N<m,I9>"),cM:w("N<G,m>"),w:w("iC"),g2:w("rH"),bV:w("apb"),fL:w("cv"),K:w("aD"),dc:w("fW"),fo:w("P2<G>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,G)"),d9:w("+dx,hidden(I,ai<hX>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),fT:w("jf<hX>"),ec:w("jf<m>"),gW:w("r1<I>"),X:w("bq<I>"),bW:w("dL"),W:w("bQ<m>"),b4:w("bQ<G>"),cI:w("jZ<m>"),av:w("Y<zm>"),cc:w("Y<m>"),l:w("v"),gF:w("fj"),fA:w("lz"),dO:w("Gj"),bw:w("adN<m?>"),cy:w("KC"),q:w("mv"),y:w("P"),i:w("I"),z:w("@"),S:w("G"),eK:w("ai<kQ>?"),m:w("aqv?"),cT:w("u?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),he:w("+qrPayload,token,usesRemaining(m,m,G)?"),gG:w("+members,trees,viewOnly(G,G,P)?"),az:w("qe?"),T:w("m?"),aD:w("dL?"),o:w("lz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3e=new A.bh(B.fE,B.bH,B.fE,B.bH)
D.ade=new A.bh(B.fE,B.ih,B.fE,B.ih)
D.b3s=new A.bh(B.ii,B.bH,B.bH,B.bH)
D.b3w=new A.ay(B.cQ,1.4,B.r,-1)
D.b3G=new A.ay(B.ac,1,B.r,-1)
D.adJ=new A.aZ(140,1/0,0,1/0)
D.b54=new A.aZ(0,1/0,64,1/0)
D.b58=new A.aZ(0,84,0,1/0)
D.adR=new A.aZ(130,1/0,0,1/0)
D.aC_=w([B.m3,B.rw,B.c],x.O)
D.c5H=new A.a9(B.az,B.aE,B.x,D.aC_,null,null)
D.b5S=new A.o(null,null,null,null,null,D.c5H,B.n)
D.dcF=w([B.aW,B.bP],x.O)
D.c7P=new A.a9(B.b0,B.b6,B.x,D.dcF,null,null)
D.b6c=new A.o(null,null,null,null,null,D.c7P,B.n)
D.XV=new A.t(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fr=new A.t(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dgy=w([B.dv,D.XV,D.fr],x.O)
D.c4T=new A.a9(B.b0,B.b6,B.x,D.dgy,null,null)
D.b6X=new A.o(null,null,null,null,null,D.c4T,B.n)
D.fnt=new A.F(!0,B.bU,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYu=new A.y("?",null,D.fnt,null,null,null,null,null,null,null,null,null)
D.baC=new A.cf(B.A,null,null,D.fYu,null)
D.VB=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGD=new A.y("\ud83c\udf33",null,D.VB,null,null,null,null,null,null,null,null,null)
D.aeB=new A.cf(B.A,null,null,D.fGD,null)
D.fJe=new A.y("\ud83c\udfc6",null,At.Kq,null,null,null,null,null,null,null,null,null)
D.baN=new A.cf(B.A,null,null,D.fJe,null)
D.bcE=new A.fl(null,null,null,null,null,E.kg,null,null,null,null)
D.aeD=new A.cf(B.A,null,null,D.bcE,null)
D.kH=new A.t(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fo1=new A.F(!0,D.kH,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIj=new A.y("No books on the shelf yet.",null,D.fo1,null,null,null,null,null,null,null,null,null)
D.ep2=new A.D(B.nx,D.fIj,null)
D.bb2=new A.cf(B.A,null,null,D.ep2,null)
D.fuZ=new A.F(!0,D.fr,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZp=new A.y("\ud83d\ude8c  On the road\u2026",null,D.fuZ,null,null,null,null,null,null,null,null,null)
D.epD=new A.D(B.ck,D.fZp,null)
D.bbv=new A.cf(B.A,null,null,D.epD,null)
D.aVL=new A.y("\ud83e\uddfa",null,D.VB,null,null,null,null,null,null,null,null,null)
D.bbL=new A.cf(B.A,null,null,D.aVL,null)
D.fLH=new A.y("\ud83c\udfad",null,D.VB,null,null,null,null,null,null,null,null,null)
D.bbX=new A.cf(B.A,null,null,D.fLH,null)
D.bc_=new A.cf(B.A,null,null,A9.XK,null)
D.aeY=new A.t(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.af4=new A.t(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bec=new A.t(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.beh=new A.t(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bet=new A.t(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bev=new A.t(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bex=new A.t(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.beF=new A.t(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.ly=new A.t(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.beJ=new A.t(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.beO=new A.t(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.beP=new A.t(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.beQ=new A.t(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lz=new A.t(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bfr=new A.t(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Be=new A.t(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bfA=new A.t(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bfU=new A.t(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bfX=new A.t(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bg2=new A.t(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bga=new A.t(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.afI=new A.t(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bgh=new A.t(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Y5=new A.t(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.afL=new A.t(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bgu=new A.t(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Y7=new A.t(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bgQ=new A.t(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.afW=new A.t(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bhd=new A.t(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bht=new A.t(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bhR=new A.t(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bi0=new A.t(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FB=new A.t(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bim=new A.t(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bio=new A.t(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bis=new A.t(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ago=new A.t(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.biL=new A.t(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.biR=new A.t(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.biX=new A.t(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ags=new A.t(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bj4=new A.t(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bjw=new A.t(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bjE=new A.t(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bjG=new A.t(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bjL=new A.t(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.agI=new A.t(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bkn=new A.t(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ah3=new A.t(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.blk=new A.t(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahh=new A.t(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.blJ=new A.t(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FQ=new A.t(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.blP=new A.t(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.blZ=new A.t(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bm0=new A.t(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahm=new A.t(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bmi=new A.t(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bmj=new A.t(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bmm=new A.t(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.aht=new A.t(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.YO=new A.t(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bmG=new A.t(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bn0=new A.t(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bn5=new A.t(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ahG=new A.t(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bnc=new A.t(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.YU=new A.t(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bnv=new A.t(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bnw=new A.t(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.FX=new A.t(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.boh=new A.t(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.boV=new A.t(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bp0=new A.t(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bp4=new A.t(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.q9=new A.t(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bpe=new A.t(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bpi=new A.t(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bpo=new A.t(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bpq=new A.t(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiq=new A.t(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aiv=new A.t(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.G3=new A.t(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Za=new A.t(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aiF=new A.t(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bqy=new A.t(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bqR=new A.t(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.brg=new A.t(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.brp=new A.t(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.aj2=new A.t(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.Zj=new A.t(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bry=new A.t(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.brP=new A.t(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.Zm=new A.t(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bs2=new A.t(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bsi=new A.t(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.Zq=new A.t(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bsn=new A.t(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajm=new A.t(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajp=new A.t(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bsG=new A.t(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ajv=new A.t(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bt7=new A.t(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.btb=new A.t(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bth=new A.t(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.btn=new A.t(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.btv=new A.t(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bu2=new A.t(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bux=new A.t(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fCx=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.by1=new A.eJ(null,D.fCx,B.f7,null,x.A)
D.fLy=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.by3=new A.eJ(null,D.fLy,B.f7,null,x.A)
D.akr=new A.bc(3e4)
D.byB=new A.bc(38e5)
D.bzl=new A.il(0,10,0,10)
D.bzu=new A.Q(0,1,0,0)
D.bzF=new A.il(0,4,0,4)
D.bzI=new A.Q(0,4,5,0)
D.bzZ=new A.Q(10,10,14,10)
D.bAa=new A.il(10,4,10,4)
D.bAi=new A.il(10,8,10,8)
D.bAj=new A.Q(10,8,8,8)
D.bAM=new A.Q(12,6,12,2)
D.bB1=new A.Q(14,0,14,6)
D.bB5=new A.Q(14,10,6,6)
D.bB6=new A.Q(14,12,14,0)
D.bBa=new A.Q(14,12,14,8)
D.bBd=new A.Q(14,12,8,14)
D.bBh=new A.il(14,14,14,14)
D.bBy=new A.Q(14,6,14,40)
D.bBB=new A.Q(14,8,14,30)
D.bBZ=new A.Q(16,2,16,10)
D.bC8=new A.Q(16,6,16,30)
D.bCa=new A.Q(16,6,16,8)
D.bCo=new A.Q(18,10,18,4)
D.bCq=new A.Q(18,12,18,0)
D.bCx=new A.Q(18,14,12,4)
D.alV=new A.Q(18,16,18,8)
D.bCO=new A.Q(18,20,18,22)
D.alZ=new A.Q(18,24,18,24)
D.bCU=new A.Q(18,30,18,30)
D.bDb=new A.Q(20,10,12,20)
D.bDe=new A.Q(20,11,20,11)
D.bDp=new A.Q(20,18,16,18)
D.bDr=new A.Q(20,18,20,6)
D.bEg=new A.Q(24,32,24,28)
D.bEh=new A.Q(24,36,24,32)
D.bEl=new A.Q(26,26,24,14)
D.bEA=new A.Q(2,4,2,8)
D.bEE=new A.Q(30,0,30,0)
D.bEP=new A.Q(38,22,22,22)
D.ami=new A.Q(40,24,24,24)
D.bER=new A.il(40,40,40,40)
D.bET=new A.Q(46,30,30,30)
D.aml=new A.Q(4,0,0,8)
D.bFj=new A.Q(56,40,40,40)
D.bFn=new A.Q(1.25,1.25,1.25,1.25)
D.bFo=new A.Q(60,0,60,0)
D.bFs=new A.Q(6,14,6,16)
D.bFw=new A.Q(6,4,12,0)
D.bFA=new A.Q(6,6,10,2)
D.bFH=new A.il(7,3,7,3)
D.bGf=new A.Q(5,1.5,5,1.5)
D.bGq=new A.Q(6,2.5,6,2.5)
D.fTF=new A.y("Family Games",null,B.ka,null,null,null,null,null,null,null,null,null)
D.fB8=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.aaz,null,null,null,null,null,null,null,null,null)
D.cGK=w([D.fTF,D.fB8],x.p)
D.bvz=new A.fk(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cGK,null)
D.bGI=new A.by(1,B.bb,D.bvz,null)
D.fY0=new A.y("Signature",null,B.n5,null,null,null,null,null,null,null,null,null)
D.bGL=new A.by(1,B.bb,D.fY0,null)
D.fQg=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.ts,null,null,null,null,null,null,null,null,null)
D.bHj=new A.by(1,B.bb,D.fQg,null)
D.fV7=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bHA=new A.by(1,B.bb,D.fV7,null)
D.fvL=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX5=new A.y("Worksheets",null,D.fvL,null,null,null,null,null,null,null,null,null)
D.fvW=new A.F(!0,E.afr,null,null,null,null,13,B.cA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVX=new A.y("Track your project spending",null,D.fvW,null,null,null,null,null,null,null,null,null)
D.d48=w([D.fX5,B.av,D.fVX],x.p)
D.bvb=new A.fk(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d48,null)
D.bHG=new A.by(1,B.bb,D.bvb,null)
D.fqM=new A.F(!0,E.kg,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBI=new A.y("FAMILY LIBRARY",null,D.fqM,null,null,null,null,null,null,null,null,null)
D.bHY=new A.by(1,B.bb,D.fBI,null)
D.Og=new C.I6("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wh=new C.I7(0,"male")
D.oj=new C.I7(1,"female")
D.yK=new C.I7(2,"unknown")
D.ur=new C.alB(0,"owner")
D.Oh=new C.alB(1,"editor")
D.kP=new C.alB(2,"viewer")
D.ao7=new A.a0(61199,"MaterialIcons",!1)
D.bN6=new A.a0(61504,"MaterialIcons",!1)
D.bN7=new A.a0(61505,"MaterialIcons",!1)
D.bN9=new A.a0(61587,"MaterialIcons",!1)
D.bNg=new A.a0(61890,"MaterialIcons",!1)
D.bO8=new A.a0(63034,"MaterialIcons",!0)
D.bOq=new A.a0(63153,"MaterialIcons",!1)
D.bOX=new A.a0(63429,"MaterialIcons",!1)
D.aqg=new A.a0(984520,"MaterialIcons",!1)
D.bNF=new A.a0(62776,"MaterialIcons",!1)
D.bRh=new A.ae(D.bNF,26,B.b1,null,null,null)
D.bM4=new A.a0(57648,"MaterialIcons",!1)
D.bRB=new A.ae(D.bM4,14,B.c,null,null,null)
D.bRS=new A.ae(B.H9,17,null,null,null,null)
D.bRY=new A.ae(B.a1Q,null,B.bP,null,null,null)
D.bSp=new A.ae(E.a1W,null,null,null,null,null)
D.bSs=new A.ae(B.j1,18,E.kg,null,null,null)
D.a1G=new A.a0(62044,"MaterialIcons",!1)
D.bSx=new A.ae(D.a1G,null,B.aW,null,null,null)
D.bSE=new A.ae(B.yX,18,B.c,null,null,null)
D.bTm=new A.ae(B.e5,16,null,null,null,null)
D.bTt=new A.ae(D.a1G,32,B.aW,null,null,null)
D.bTM=new A.ae(E.ao8,18,B.cQ,null,null,null)
D.bUQ=new A.ae(B.Hj,22,B.aw,null,null,null)
D.bV1=new A.ae(B.e5,22,B.b1,null,null,null)
D.bVe=new A.ae(Z.a1L,22,B.c,null,null,null)
D.bVk=new A.ae(B.uC,52,B.c,null,null,null)
D.bVu=new A.ae(B.Hj,30,B.aw,null,null,null)
D.bVN=new A.ae(B.a21,null,B.c,null,null,null)
D.aqX=new A.ae(B.uM,22,B.c,null,null,null)
D.bVW=new A.ae(B.e5,17,null,null,null,null)
D.bWi=new A.ae(B.wx,26,B.cQ,null,null,null)
D.bX3=new A.ae(B.a2a,16,null,null,null,null)
D.bXP=new A.ae(B.uC,24,B.c,null,null,null)
D.bXU=new A.ae(B.OK,20,B.t2,null,null,null)
D.bXZ=new A.ae(B.H7,null,B.bP,null,null,null)
D.bY6=new A.ae(B.j1,18,B.c,null,null,null)
D.bYL=new A.ae(B.cx,22,B.ac,null,null,null)
D.bZB=new A.ae(B.eb,16,B.ac,null,null,null)
D.bZN=new A.ae(D.a1G,20,B.aW,null,null,null)
D.arm=new A.ae(B.hB,20,null,null,null,null)
D.c_h=new A.ae(B.cx,18,D.kH,null,null,null)
D.c_y=new A.ae(B.z3,28,B.c,null,null,null)
D.c_I=new A.ae(B.OA,null,B.fb,null,null,null)
D.c01=new A.ae(B.z3,24,B.c,null,null,null)
D.c0t=new A.ae(B.uC,null,B.aW,null,null,null)
D.c0u=new A.ae(B.jZ,20,B.cQ,null,null,null)
D.c0O=new A.ae(B.H9,16,null,null,null,null)
D.c2n=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eF,!0,null,null,null,null)
D.as3=new C.a66(10,null)
D.c2T=new C.a66(12,null)
D.c2U=new C.a66(14,null)
D.dky=w([B.bv,B.aW,B.fi,B.b1],x.O)
D.c44=new A.a9(B.az,B.aE,B.x,D.dky,null,null)
D.bo2=new A.t(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bu8=new A.t(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d0E=w([D.bo2,D.bu8],x.O)
D.c4f=new A.a9(B.b0,B.b6,B.x,D.d0E,null,null)
D.deD=w([B.f9,B.fM,B.fi],x.O)
D.c4l=new A.a9(B.az,B.aE,B.x,D.deD,null,null)
D.aif=new A.t(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.beR=new A.t(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d2R=w([D.aif,D.beR],x.O)
D.c4U=new A.a9(B.b0,B.b6,B.x,D.d2R,null,null)
D.biB=new A.t(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBh=w([D.biB,D.aif],x.O)
D.c5d=new A.a9(B.az,B.aE,B.x,D.aBh,null,null)
D.agY=new A.t(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.blb=new A.t(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.ddI=w([D.agY,D.blb],x.O)
D.c5S=new A.a9(B.a5,B.a8,B.x,D.ddI,null,null)
D.drz=w([B.bB,B.nj],x.O)
D.c5U=new A.a9(B.b0,B.b6,B.x,D.drz,null,null)
D.bnY=new A.t(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dsv=w([D.bnY,D.kH,D.kH,K.Z9],x.O)
D.dv0=w([0,0.07,0.9,1],x.n)
D.c6p=new A.a9(B.a5,B.a8,B.x,D.dsv,D.dv0,null)
D.c6z=new A.a9(B.az,B.aE,B.x,B.So,null,null)
D.cZu=w([B.aD,D.ly],x.O)
D.c6C=new A.a9(B.a5,B.a8,B.x,D.cZu,null,null)
D.dr8=w([B.b1,B.aW,B.bP],x.O)
D.c7A=new A.a9(B.az,B.aE,B.x,D.dr8,null,null)
D.cbP=w([10,20,30],x.t)
D.clN=w([-1,-0.4,0.3,1],x.n)
D.ctg=w([B.bv,B.b1,B.f9],x.O)
D.cto=w([B.bq,B.aD,B.ju],x.O)
D.ctq=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cu6=w([30,140,262,360],x.n)
D.bms=new A.t(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.czD=w([D.bms,E.ahS],x.O)
D.ejE=new A.u(1,2)
D.f8T=new A.cW(B.aS,D.ejE,3)
D.ay9=w([D.f8T],x.F)
D.cH1=w([B.hh,B.cf,B.fe],x.O)
D.cJL=w([B.bL,B.bt,B.bo],x.O)
D.bIG=new C.uI("classic","Classic leather","Gold-edged brown leather",D.aBh,E.kg,E.kg,"\u2766",B.K,!0,!1,!1,!1)
D.bdX=new A.t(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bsY=new A.t(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d5R=w([D.bdX,D.bsY],x.O)
D.ahW=new A.t(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bIB=new C.uI("ornate","Ornate gold","Double gold border and flourishes",D.d5R,D.ahW,D.ahW,"\u2726",B.K,!0,!0,!0,!1)
D.bia=new A.t(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.boQ=new A.t(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cYo=w([D.bia,D.boQ],x.O)
D.bIA=new C.uI("parchment","Parchment","Old paper with dark ink",D.cYo,D.FX,L.iX,"\u2767",B.K,!0,!1,!1,!0)
D.af6=new A.t(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.brc=new A.t(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dpm=w([D.af6,D.brc],x.O)
D.blW=new A.t(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bqt=new A.t(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bID=new C.uI("minimal","Clean paper","Plain and elegant, like a printed book",D.dpm,D.blW,D.bqt,"",B.K,!0,!0,!1,!0)
D.bIF=new C.uI("midnight","Midnight","Deep blue with silver stars",I.aBA,B.cq,B.bN,"\u2727",B.K,!0,!0,!1,!1)
D.bIz=new C.uI("emerald","Emerald library","Green cloth, title on the left",W.ayy,E.kg,B.fU,"\u25c6",B.bj,!0,!1,!1,!1)
D.brH=new A.t(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dnk=w([B.ek,D.brH],x.O)
D.bnb=new A.t(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.boo=new A.t(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bIE=new C.uI("rose","Rose vintage","Burgundy with rose-gold lettering",D.dnk,D.bnb,D.boo,"\u2740",B.K,!0,!1,!0,!1)
D.ds6=w([B.cr,F.nk],x.O)
D.bIC=new C.uI("modern","Modern","Dark, bold, left-aligned",D.ds6,B.aJ,B.c,"",B.bj,!1,!0,!1,!1)
D.a4h=w([D.bIG,D.bIB,D.bIA,D.bID,D.bIF,D.bIz,D.bIE,D.bIC],A.as("O<uI>"))
D.cMI=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.drU=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bIR=new C.lo('What does "Ubuntu" mean?',D.drU,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d_9=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bIU=new C.lo("In Swahili, what do we call a grandmother?",D.d_9,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d_0=w(["Babu","Mama","Baba","Dada"],x.s)
D.bIP=new C.lo("In Swahili, what do we call a grandfather?",D.d_0,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d0f=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bIT=new C.lo("What is a sister called in Swahili?",D.d0f,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d5i=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bIQ=new C.lo("What is a brother called in Swahili?",D.d5i,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d__=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bJ0=new C.lo("Which word means father in Swahili?",D.d__,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dt1=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bJ_=new C.lo('"Umoja ni nguvu" means...',D.dt1,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dq3=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bJ1=new C.lo('"Haba na haba hujaza kibaba" teaches us...',D.dq3,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d2Z=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bIZ=new C.lo('The African saying "It takes a village to raise a child" means...',D.d2Z,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dtl=w(["The elders","The market","The river","The drum"],x.s)
D.bIV=new C.lo("Who is the traditional keeper of the family stories?",D.dtl,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cQT=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bIS=new C.lo("Why do families sit round the fire at night?",D.cQT,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.ds8=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bIX=new C.lo('What does "Harambee" mean?',D.ds8,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d84=w(["An elder","A baby","A market","A cow"],x.s)
D.bIW=new C.lo('"Mzee" is a respectful word for...',D.d84,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dnb=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bIY=new C.lo('What does "Shikamoo" show?',D.dnb,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.ayt=w([D.bIR,D.bIU,D.bIP,D.bIT,D.bIQ,D.bJ0,D.bJ_,D.bJ1,D.bIZ,D.bIV,D.bIS,D.bIX,D.bIW,D.bIY],x.J)
D.cVf=w([90,360],x.n)
D.cXW=w([B.bP,B.bl],x.O)
D.bnN=new A.t(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cYA=w([D.af6,D.bnN],x.O)
D.cZd=w([-1,-0.3,0.4,1],x.n)
D.d_5=w([0,0.45,0.72,0.92,1],x.n)
D.bi6=new A.t(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d_n=w([D.bi6,B.dd],x.O)
D.bfP=new A.t(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ajF=new A.t(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d_V=w([B.dv,D.bfP,D.ajF],x.O)
D.d0U=w([B.b8,B.jd,B.p1],x.O)
D.biD=new A.t(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bqk=new A.t(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bfv=new A.t(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d0Z=w([D.biD,D.bqk,D.bfv],x.O)
D.d1j=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d1t=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hqi=new C.ads(78,424,48,44,56)
D.hqg=new C.ads(214,396,34,34,42)
D.hqh=new C.ads(442,452,56,50,64)
D.azs=w([D.hqi,D.hqg,D.hqh],A.as("O<ads>"))
D.d21=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.beL=new A.t(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bkm=new A.t(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.duX=w([D.agY,D.beL,D.bkm],x.O)
D.bIH=new C.uJ("leather","Leather",D.duX,"vintage")
D.d95=w([B.d7,B.Mv,Ab.Yk],x.O)
D.bIO=new C.uJ("midnight","Midnight",D.d95,"starry")
D.d0V=w([B.ej,B.dY,B.l8],x.O)
D.bIN=new C.uJ("forest","Forest",D.d0V,"story")
D.dwY=w([B.el,B.ek,B.jR],x.O)
D.bIK=new C.uJ("burgundy","Burgundy",D.dwY,"royal")
D.cJj=w([B.aD,B.oa,B.nW],x.O)
D.bIL=new C.uJ("royal","Royal",D.cJj,"royal")
D.d3u=w([B.bt,B.cr,F.nk],x.O)
D.bII=new C.uJ("charcoal","Charcoal",D.d3u,"geo")
D.dv5=w([B.cd,B.dH,B.y2],x.O)
D.bIM=new C.uJ("sunset","Sunset",D.dv5,"sunset")
D.dvN=w([B.jd,B.FY,B.Ym],x.O)
D.bIJ=new C.uJ("ocean","Ocean",D.dvN,"band")
D.zv=w([D.bIH,D.bIO,D.bIN,D.bIK,D.bIL,D.bII,D.bIM,D.bIJ],A.as("O<uJ>"))
D.d3Z=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d4A=w([B.al,B.aK,B.O],x.O)
D.d5W=w([B.ek,B.dY,B.d7,B.fV,B.y5,B.cQ,B.kj,B.e9,B.d0],x.O)
D.d5X=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f8U=new A.cW(B.dm,B.dC,8)
D.d67=w([D.f8U],x.F)
D.d7e=w([B.c_,B.dH,B.kf],x.O)
D.bgJ=new A.t(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bkE=new A.t(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.boL=new A.t(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d7u=w([D.bgJ,G.ain,D.bkE,D.boL,D.ajF],x.O)
D.d7K=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d7V=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.be7=new A.t(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bk0=new A.t(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d8m=w([D.be7,D.ags,D.bk0],x.O)
D.d90=w([B.c_,B.hx],x.O)
D.d96=w([G.nc,B.i5,G.afh,B.cJ],x.O)
D.daE=w([B.cJ,G.nc,B.i5,D.lz,B.cJ],x.O)
D.dbe=w([B.aT,B.vX,B.xS],x.O)
D.aAv=w(["True","False"],x.s)
D.eGN=new A.z(-0.65,0.6)
D.eTp=new A.z(-0.2,0.95)
D.eUu=new A.z(0.25,0.95)
D.eKg=new A.z(0.7,0.6)
D.eV3=new A.z(1,0.1)
D.dc1=w([As.Ud,D.eGN,D.eTp,D.eUu,D.eKg,D.eV3],x.G)
D.bmH=new A.t(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bsQ=new A.t(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bhI=new A.t(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dc7=w([D.bmH,D.bsQ,D.bhI],x.O)
D.dcb=w([B.bM,B.c0,B.du,B.aT],x.O)
D.dcG=w([B.i1,B.cd,B.tV],x.O)
D.dd2=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.ddd=w([B.f9,B.cQ],x.O)
D.bo6=new A.t(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.ddD=w([D.bo6,D.af4],x.O)
D.ddO=w([B.cG,B.fs,B.hQ],x.O)
D.ddZ=w([B.aJ,B.bl,B.d7],x.O)
D.deA=w([B.ep,B.cT,B.dY],x.O)
D.deV=w([B.dF,B.d7,B.Mv],x.O)
D.deZ=w([B.bs,B.m0,B.d0],x.O)
D.dff=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bnm=new A.t(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.blF=new A.t(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dfy=w([D.bnm,D.ago,D.blF],x.O)
D.dgj=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dhm=w([1,0,7,6,3,2],x.t)
D.a5e=w(["leather","linen","plain","stars","rays"],x.s)
D.dhy=w([0.5,2,3.6],x.n)
D.di4=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bQZ=new A.a0(985219,"MaterialIcons",!1)
D.bQv=new A.a0(983781,"MaterialIcons",!1)
D.aAX=w([B.a1Q,B.hC,B.lJ,B.ia,D.bQZ,B.Ht,B.qv,D.bQv,I.aq4,B.CE,B.qx,B.mP],A.as("O<a0>"))
D.a5i=w(["double","single","corners","none"],x.s)
D.bIw=new C.zm("Little Seed","\ud83c\udf31",0)
D.bIy=new C.zm("Young Listener","\ud83d\udc42",40)
D.bIx=new C.zm("Storyteller","\ud83e\ude98",120)
D.bIv=new C.zm("Village Pride","\ud83c\udfe1",300)
D.bIt=new C.zm("Keeper of Roots","\ud83c\udf33",700)
D.bIu=new C.zm("Elder of the Fire","\ud83d\udd25",1500)
D.aAZ=w([D.bIw,D.bIy,D.bIx,D.bIv,D.bIt,D.bIu],A.as("O<zm>"))
D.djc=w([B.dn,B.bn,B.e9],x.O)
D.djq=w([],x.C)
D.Dh=w([],x.u)
D.aL4=new A.u(225,528)
D.eIs=new A.z(D.aL4,1)
D.ekp=new A.u(350,548)
D.eOI=new A.z(D.ekp,0.95)
D.aL_=new A.u(158,656)
D.eOB=new A.z(D.aL_,1.12)
D.elb=new A.u(92,544)
D.eE0=new A.z(D.elb,0.93)
D.eks=new A.u(398,614)
D.eKD=new A.z(D.eks,1.04)
D.ekg=new A.u(318,662)
D.ezu=new A.z(D.ekg,1.1)
D.a5q=w([D.eIs,D.eOI,D.eOB,D.eE0,D.eKD,D.ezu],A.as("O<+(u,I)>"))
D.dlp=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dlQ=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dmT=w([B.cJ,G.nc,B.i5,D.lz,B.cJ,B.i5],x.O)
D.dok=w([B.ay,B.fs,B.fV],x.O)
D.doC=w([-12,12],x.n)
D.doF=w([-17,17],x.n)
D.doX=w([-70,58],x.n)
D.doZ=w([-70,-30,20],x.n)
D.dq1=w([B.bs,B.m0,B.Zk],x.O)
D.dqi=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dK2=new C.lR("construction","Construction","Jobsite & builds",B.uz)
D.dK9=new C.lR("house","Home Build","Houses & rooms",B.ws)
D.dK_=new C.lR("grocery","Grocery","Store & pantry",B.a2J)
D.dJZ=new C.lR("calculator","Calculations","Math & estimates",B.OR)
D.dK7=new C.lR("lumber","Materials","Lumber & supplies",B.Pa)
D.dJW=new C.lR("kitchen","Kitchen","Remodel & meals",A3.apj)
D.bQt=new A.a0(983756,"MaterialIcons",!1)
D.dK0=new C.lR("landscape","Landscaping","Yard & garden",D.bQt)
D.dJV=new C.lR("plumbing","Plumbing","Pipes & water",B.pp)
D.dKa=new C.lR("electrical","Electrical","Wiring & power",B.ho)
D.dJT=new C.lR("store","Retail Shop","Daily business",B.le)
D.dJU=new C.lR("paint_remodel","Paint & Remodel","Colors & walls",Ah.P4)
D.bPU=new A.a0(983311,"MaterialIcons",!1)
D.dK6=new C.lR("roofing","Roofing","Roofs & exteriors",D.bPU)
D.bQG=new A.a0(983986,"MaterialIcons",!1)
D.dJS=new C.lR("warehouse","Warehouse","Storage & stock",D.bQG)
D.dK4=new C.lR("vehicles","Vehicles","Fleet & transport",B.Hu)
D.bNH=new A.a0(62785,"MaterialIcons",!1)
D.dJY=new C.lR("farm","Farm","Crops & livestock",D.bNH)
D.dJX=new C.lR("restaurant","Restaurant","Food & catering",B.wB)
D.dK3=new C.lR("tools","Tools","Workshop gear",B.Hq)
D.dK8=new C.lR("wallet","Cash & Wallet","Quick spending",B.jZ)
D.bOS=new A.a0(63395,"MaterialIcons",!1)
D.dK5=new C.lR("concrete","Concrete","Foundation work",D.bOS)
D.dK1=new C.lR("blueprint","Blueprint","Plans & design",Ao.aoD)
D.a5L=w([D.dK2,D.dK9,D.dK_,D.dJZ,D.dK7,D.dJW,D.dK0,D.dJV,D.dKa,D.dJT,D.dJU,D.dK6,D.dJS,D.dK4,D.dJY,D.dJX,D.dK3,D.dK8,D.dK5,D.dK1],A.as("O<lR>"))
D.dqO=w([B.bu,B.bn],x.O)
D.drA=w([B.iy,B.o3,B.dP],x.O)
D.aha=new A.t(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aia=new A.t(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bm_=new A.t(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bdE=new A.t(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aC7=w([D.aha,D.aia,D.bm_,D.bdE],x.O)
D.dsL=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a5W=w(["top","middle","bottom"],x.s)
D.dua=w([B.cp,B.bl,B.d7],x.O)
D.aCq=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b7p=new A.ac(0,B.G,B.aS,B.I,14)
D.aCt=w([D.b7p],x.V)
D.bkT=new A.t(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.duQ=w([D.afI,D.Zj,D.bkT],x.O)
D.duR=w([B.ba,B.cT,B.dY],x.O)
D.ejZ=new A.u(24,-8)
D.ekI=new A.u(48,0)
D.ejV=new A.u(24,6)
D.dwv=w([B.I,D.ejZ,D.ekI,D.ejV],x.g)
D.dwU=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.egG={top:0,middle:1,bottom:2}
D.dA6=new A.bu(D.egG,["Top","Middle","Bottom"],x.r)
D.egi={double:0,single:1,corners:2,none:3}
D.dAc=new A.bu(D.egi,["Double line","One line","Corners","None"],x.r)
D.ehq={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dBH=new A.bu(D.ehq,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dBU=new A.bu(B.hW,[],A.as("bu<G,+(m,m)>"))
D.egy={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Dv=new A.bu(D.egy,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bu<m,G>"))
D.dEr=new H.Ny(32,null)
D.dEs=new H.Ny(40,null)
D.dEt=new H.Ny(46,null)
D.aKy=new C.aty(null)
D.eiV=new A.u(0,40)
D.eiW=new A.u(0,412)
D.eiY=new A.u(0,900)
D.ej8=new A.u(0,-74)
D.ejb=new A.u(100,300)
D.ejc=new A.u(10,14)
D.ejf=new A.u(10,-10)
D.ejj=new A.u(10,-46)
D.ejk=new A.u(10,-58)
D.ejl=new A.u(116,442)
D.ejm=new A.u(11,-1)
D.ejn=new A.u(11,-10)
D.ejo=new A.u(11,-21)
D.aKV=new A.u(11,-60)
D.eju=new A.u(14,-2)
D.ejv=new A.u(150,520)
D.a7U=new A.u(150,592)
D.ejy=new A.u(15,-15)
D.ejz=new A.u(16,-1)
D.ejD=new A.u(190,444)
D.ejG=new A.u(1,5)
D.ejO=new A.u(21,-78)
D.ejP=new A.u(222,615)
D.Jq=new A.u(225,300)
D.a7W=new A.u(225,574)
D.ejY=new A.u(24,-52)
D.ek_=new A.u(250,210)
D.aL8=new A.u(300,0)
D.ekc=new A.u(300,440)
D.ekf=new A.u(318,476)
D.eki=new A.u(324,144)
D.a7Z=new A.u(332,150)
D.ekk=new A.u(335,585)
D.ekl=new A.u(338,140)
D.ekm=new A.u(340,158)
D.eko=new A.u(34,-60)
D.DY=new A.u(36,-24)
D.ekq=new A.u(372,470)
D.ekr=new A.u(390,455)
D.ekA=new A.u(42,468)
D.ekB=new A.u(431,510)
D.ekC=new A.u(431,520)
D.ekD=new A.u(45,-92)
D.ekE=new A.u(46,20)
D.ekF=new A.u(46,-92)
D.ekG=new A.u(46,-94)
D.ekH=new A.u(47,-4)
D.ekJ=new A.u(48,-4)
D.ekR=new A.u(4,-26)
D.el_=new A.u(60,455)
D.el6=new A.u(8,14)
D.ela=new A.u(8,-76)
D.elc=new A.u(95,575)
D.eld=new A.u(98,-24)
D.elf=new A.u(9,-2)
D.elg=new A.u(9,-58)
D.aLh=new A.u(9,-79)
D.elh=new A.u(9,-9)
D.elU=new A.u(16.5,8)
D.elW=new A.u(3.2,0)
D.elY=new A.u(-16.5,8)
D.em4=new A.u(16.5,2)
D.em7=new A.u(-3.2,0)
D.emg=new A.u(9.5,6)
D.emk=new A.u(-10,14)
D.eml=new A.u(-10,-12)
D.emm=new A.u(-10,-58)
D.emn=new A.u(-11,-1)
D.emo=new A.u(-11,-10)
D.emq=new A.u(-11,-60)
D.emr=new A.u(-12,-14)
D.ems=new A.u(-12,-16)
D.emz=new A.u(-14,-2)
D.emC=new A.u(-15,-15)
D.emD=new A.u(-15,-3)
D.emF=new A.u(-16,-1)
D.emW=new A.u(-24,-52)
D.en2=new A.u(-2,-34)
D.en3=new A.u(-2,-38)
D.en5=new A.u(-30,-100)
D.a8_=new A.u(-36,-24)
D.eng=new A.u(-4,-26)
D.eni=new A.u(-4,-6)
D.enr=new A.u(-8,-3)
D.ens=new A.u(-8,-48)
D.env=new A.u(-9,-2)
D.enx=new A.u(-9,-58)
D.eny=new A.u(-9,-79)
D.enz=new A.u(-9,-9)
D.enB=new A.u(-9.5,6)
D.enP=new A.u(-16.5,2)
D.fIW=new A.y("Write a new book",null,B.hv,null,B.K,null,null,null,null,null,null,null)
D.eoo=new A.D(B.km,D.fIW,null)
D.fXz=new A.y("Tap to go on",null,B.vs,null,null,null,null,null,null,null,null,null)
D.eoK=new A.D(B.l9,D.fXz,null)
D.aqv=new A.ae(B.hT,18,B.c,null,null,null)
D.fC3=new A.y("Add",null,B.lr,null,null,null,null,null,null,null,null,null)
D.dcp=w([D.aqv,B.qY,D.fC3],x.p)
D.f6o=new A.ca(B.aL,B.e,B.P,B.m,null,B.p,null,0,D.dcp,null)
D.eoN=new A.D(B.nu,D.f6o,null)
D.eoO=new A.D(E.akO,A9.XK,null)
D.fvG=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFc=new A.y("New Project",null,D.fvG,null,null,null,null,null,null,null,null,null)
D.dgG=w([D.aqv,B.ad,D.fFc],x.p)
D.f6r=new A.ca(B.aL,B.e,B.P,B.m,null,B.p,null,0,D.dgG,null)
D.ep1=new A.D(B.it,D.f6r,null)
D.fHJ=new A.y("Choose your header",null,A1.tp,null,null,null,null,null,null,null,null,null)
D.epm=new A.D(B.hR,D.fHJ,null)
D.bcT=new A.fl(2.2,null,null,null,null,B.cQ,null,null,null,null)
D.fbL=new A.a4(22,22,D.bcT,null)
D.baY=new A.cf(B.A,null,null,D.fbL,null)
D.epr=new A.D(B.a_x,D.baY,null)
D.bBr=new A.Q(14,2,14,6)
D.fVG=new A.y("The top of your book. Tap a design to see it.",null,Q.tq,null,null,null,null,null,null,null,null,null)
D.eps=new A.D(D.bBr,D.fVG,null)
D.fGS=new A.y("\ud83c\udfc6 A new record!",null,B.fS,null,null,null,null,null,null,null,null,null)
D.epu=new A.D(B.l9,D.fGS,null)
D.er3=new A.j_(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.er6=new A.j_(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aLS=new A.j_(1,0.9607843137254902,0.48627450980392156,0)
D.Jz=new A.j_(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.A4=new A.j_(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.erc=new A.j_(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hsm=new C.bj4(null)
D.bwl=new A.mC(D.hsm,null,B.ax,null,null)
D.aPv=new A.cO(0,0,0,0,null,null,D.bwl,null)
D.fC5=new A.y("\ud83c\udfc5",null,B.aad,null,null,null,null,null,null,null,null,null)
D.evB=new A.cO(null,0,-34,null,null,null,D.fC5,null)
D.eDG=new A.z("E","Sit by the fire again")
D.eJg=new A.z("C","Good Learner")
D.eMF=new A.z("D","Still Growing")
D.eRd=new A.z(-42,42)
D.eSy=new A.z("B","Faithful Listener")
D.eUw=new A.z("A","Keeper of the Family")
D.eXF=new A.b5(-17,0.7,0)
D.eYd=new A.b5(-8,0.95,1.3)
D.eZk=new A.b5(18,0.65,5.2)
D.eZm=new A.b5(0,1.15,2.6)
D.eZH=new A.b5(9,0.9,3.9)
D.f0y=new A.cw([0,0,1,1])
D.aR_=new A.a3(0,0,520,160)
D.f3s=new A.a3(10,612,440,618)
D.f3t=new A.a3(10,612,440,628)
D.f3w=new A.a3(14,-64,34,-12)
D.f3z=new A.a3(300,336,350,348)
D.a8U=new A.a3(30,96,420,346)
D.f3A=new A.a3(30,-9,46,1)
D.f3B=new A.a3(4,2,11,14)
D.f3D=new A.a3(-8,-12.5,8,-7)
D.f3E=new A.a3(-16.5,-21,16.5,1)
D.f3F=new A.a3(60,342,88,348)
D.Ue=new A.a3(66,-66,94,-36)
D.f3G=new A.a3(6,8,10,14)
D.f3J=new A.a3(95,343,115,348)
D.f3K=new A.a3(-6.5,-74,6.5,-58)
D.f3Q=new A.a3(-100,-74,100,-12)
D.f3R=new A.a3(-10,8,-6,14)
D.f3S=new A.a3(-11,2,-4,14)
D.f3T=new A.a3(-11,-70,11,-56)
D.f4_=new A.a3(-13,-24,13,-4)
D.f45=new A.a3(-15,-21,15,0)
D.f48=new A.a3(-16,-21,16,1)
D.f49=new A.a3(-16,-21,16,2)
D.f4c=new A.a3(-16,-26,16,-6)
D.f4m=new A.a3(-230,-26,230,26)
D.f4K=new A.a3(-38,-26,12,-6)
D.f4O=new A.a3(-3,-70,3,-63)
D.f4P=new A.a3(-44,-22,44,0)
D.f4R=new A.a3(-46,-9,-30,1)
D.aR3=new A.a3(-80,-190,80,20)
D.f4Y=new A.a3(-8,-26,40,-6)
D.f4Z=new A.a3(-98,-80,92,-75)
D.f5_=new A.a3(-9,-15,9,-9)
D.fVe=new A.y("Let the AI write it from your tree",null,B.iw,null,B.K,null,null,null,null,null,null,null)
D.bJy=new A.ds(1,B.cn,D.fVe,null)
D.d9_=w([E.a3e,B.ad,D.bJy],x.p)
D.f63=new A.ca(B.aL,B.e,B.P,B.m,null,B.p,null,0,D.d9_,null)
D.fBJ=new A.y("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.doH=w([D.arm,B.ad,D.fBJ],x.p)
D.f6d=new A.ca(B.aL,B.b9,B.i,B.m,null,B.p,null,0,D.doH,null)
D.bV7=new A.ae(B.i9,14,B.b1,null,null,null)
D.fpl=new A.F(!0,B.b1,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFC=new A.y("Cashier",null,D.fpl,null,null,null,null,null,null,null,null,null)
D.dhc=w([D.bV7,B.bm,D.fFC],x.p)
D.f6g=new A.ca(B.aL,B.e,B.P,B.m,null,B.p,null,0,D.dhc,null)
D.fBK=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bHq=new A.by(1,B.bb,D.fBK,null)
D.d0o=w([D.aqX,B.as,D.bHq],x.p)
D.f6h=new A.ca(B.aL,B.e,B.i,B.m,null,B.p,null,0,D.d0o,null)
D.far=new A.av(16,40)
D.faw=new A.av(22,64)
D.faD=new A.av(280,88)
D.fbr=new A.a4(30,null,null,null)
D.fAP=new A.y("The teacher is writing\u2026",null,B.Ao,null,null,null,null,null,null,null,null,null)
D.bc6=new A.cf(B.A,null,null,D.fAP,null)
D.hmp=new A.bQ("w",x.W)
D.fbR=new A.a4(null,56,D.bc6,D.hmp)
D.fcE=new A.hL(5,8,8,1,null)
D.fcM=new A.hL(2,12,12,1.05,null)
D.fFi=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fdu=new A.b2(D.fFi,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFx=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aT5=new A.b2(D.fFx,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fNV=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fdY=new A.b2(D.fNV,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fYC=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fe2=new A.b2(D.fYC,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHH=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fe9=new A.b2(D.fHH,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.fVT=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aT9=new A.b2(D.fVT,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHF=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fez=new A.b2(D.fHF,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCm=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.feB=new A.b2(D.fCm,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLm=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.feH=new A.b2(D.fLm,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fZm=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.ffm=new A.b2(D.fZm,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fU8=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ffL=new A.b2(D.fU8,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fYG=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ffO=new A.b2(D.fYG,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fPz=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ffQ=new A.b2(D.fPz,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJy=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ffR=new A.b2(D.fJy,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJz=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fgR=new A.b2(D.fJz,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFk=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fh8=new A.b2(D.fFk,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHj=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new A.b2(D.fHj,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fP1=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fhI=new A.b2(D.fP1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fKn=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fhJ=new A.b2(D.fKn,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fun=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjl=new A.es("\u2665",null,null,B.cL,null,null,null,null,null,null,D.fun)
D.frC=new A.F(!0,B.aP,null,null,null,null,28,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjB=new A.es("Today: how well do you know the family?",null,null,B.cL,null,null,null,null,null,null,D.frC)
D.fjS=new A.F(!0,B.pW,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkZ=new A.F(!0,D.kH,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flo=new A.F(!0,D.kH,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fls=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flB=new A.F(!0,D.fr,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flM=new A.F(!0,D.fr,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm5=new A.t1(!0,B.tc,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fml=new A.F(!0,B.cJ,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmo=new A.F(!0,D.kH,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmp=new A.F(!0,B.cJ,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmx=new A.F(!0,B.cJ,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn1=new A.F(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn4=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnw=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUk=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUm=new A.F(!0,D.ly,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new A.F(!0,B.cJ,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aai=new A.t1(!0,B.TK,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vf=new A.F(!0,B.cJ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo4=new A.F(!0,B.O,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo9=new A.F(!0,D.fr,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foy=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpG=new A.F(!0,D.fr,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUx=new A.F(!0,D.fr,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpZ=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq9=new A.F(!0,D.fr,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqb=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqh=new A.F(!0,L.iX,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUB=new A.F(!0,D.fr,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frc=new A.F(!0,D.fr,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frv=new A.F(!0,D.fr,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frx=new A.F(!0,B.O,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frz=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frW=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.Im,null,null,null)
D.aUQ=new A.F(!0,D.fr,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsj=new A.F(!0,B.O,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsF=new A.F(!0,B.fb,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft2=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new A.F(!0,B.bB,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fti=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftl=new A.F(!0,D.fr,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftt=new A.F(!0,D.FX,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftC=new A.F(!0,B.b1,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu1=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu7=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D7,null,null,null)
D.fux=new A.F(!0,B.cJ,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuG=new A.F(!0,B.cQ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuT=new A.F(!0,D.lz,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV9=new A.F(!0,D.fr,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KA=new A.F(!0,B.cJ,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVb=new A.F(!0,B.cJ,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D7,null,null,null)
D.fvc=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new A.F(!0,G.nc,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvE=new A.F(!0,B.b1,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvV=new A.F(!0,D.fr,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwh=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwF=new A.F(!0,D.fr,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new A.F(!0,D.fr,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxd=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxm=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaM=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaO=new A.F(!0,D.ly,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz4=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzm=new A.F(!0,B.aP,null,null,null,null,27,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzu=new A.F(!0,L.iX,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzC=new A.F(!0,L.iX,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA5=new A.y("Time:",null,B.he,null,null,null,null,null,null,null,null,null)
D.fAr=new A.y("\ud83c\udfae",null,I.aaD,null,null,null,null,null,null,null,null,null)
D.fAs=new A.y("Themes",null,B.pE,null,null,null,null,null,null,null,null,null)
D.fAX=new A.y("\ud83c\udfb2",null,B.xa,null,null,null,null,null,null,null,null,null)
D.fB0=new A.y("Delete this game?",null,B.iw,null,null,null,null,null,null,null,null,null)
D.fB7=new A.y("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fpU=new A.F(!0,B.O,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBy=new A.y("Debt receipt",null,D.fpU,null,B.K,null,null,null,null,null,null,null)
D.aVp=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBR=new A.y("Person who owes",null,D.aVp,null,null,null,null,null,null,null,null,null)
D.fCP=new A.y("Notes",null,B.aaq,null,null,null,null,null,null,null,null,null)
D.fDf=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.foP=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDi=new A.y("Share",null,D.foP,null,null,null,null,null,null,null,null,null)
D.fEe=new A.y("Move your family trees",null,K.aaK,null,null,null,null,null,null,null,null,null)
D.fEU=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fFw=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fFU=new A.y("SAVE",null,D.KA,null,null,null,null,null,null,null,null,null)
D.fGw=new A.y("The round button is the right answer.",null,Q.Ew,null,null,null,null,null,null,null,null,null)
D.fGR=new A.y("Remove this book?",null,B.fS,null,null,null,null,null,null,null,null,null)
D.fvB=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D7,null,null,null)
D.fHo=new A.y("Fireside Stories",null,D.fvB,null,null,null,null,null,null,null,null,null)
D.aVU=new A.y("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fI5=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fot=new A.F(!0,D.ly,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.y("REPORT CARD",null,D.fot,null,null,null,null,null,null,null,null,null)
D.fJ1=new A.y("Calabash Catch",null,B.KD,null,null,null,null,null,null,null,null,null)
D.fJu=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fJV=new A.y("\ud83c\udfe1",null,B.Ev,null,null,null,null,null,null,null,null,null)
D.fKC=new A.y("Ribbon bookmark",null,B.jq,null,null,null,null,null,null,null,null,null)
D.fx6=new A.F(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL5=new A.y("NGMY.ORG",null,D.fx6,null,B.K,null,null,null,null,null,null,null)
D.fMq=new A.y("Scan family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.ftm=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNa=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.ftm,null,B.K,null,null,null,null,null,null,null)
D.fOo=new A.y("Delete",null,B.V8,null,null,null,null,null,null,null,null,null)
D.fOp=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fOw=new A.y("Thumbnail",null,B.pE,null,null,null,null,null,null,null,null,null)
D.fP7=new A.y("Save the cover",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fPc=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xc,null,B.K,null,null,null,null,null,null,null)
D.fPA=new A.y("Your photos",null,B.pE,null,null,null,null,null,null,null,null,null)
D.fPP=new A.y("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fQb=new A.y("\u2b50 stars",null,B.Vm,null,null,null,null,null,null,null,null,null)
D.fQp=new A.y("Design your cover",null,A1.tp,null,null,null,null,null,null,null,null,null)
D.fQv=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fQy=new A.y("PICTURE",null,M.vw,null,null,null,null,null,null,null,null,null)
D.fQA=new A.y("\ud83c\udfaf",null,D.VB,null,null,null,null,null,null,null,null,null)
D.fQV=new A.y("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fQX=new A.y("You can undo it right after.",null,Q.Ew,null,null,null,null,null,null,null,null,null)
D.fRt=new A.y("Print",null,B.vt,null,null,null,null,null,null,null,null,null)
D.fRS=new A.y("Amount owed",null,D.aVp,null,null,null,null,null,null,null,null,null)
D.fS6=new A.y("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fSI=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fSL=new A.y("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fTc=new A.y("Debtor signature",null,B.aaq,null,null,null,null,null,null,null,null,null)
D.fTm=new A.y("Change icon",null,B.aap,null,null,null,null,null,null,null,null,null)
D.fU9=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.ts,null,null,null,null,null,null,null,null,null)
D.fUB=new A.y("Family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fUH=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VA,null,null,null,null,null,null,null,null,null)
D.fV4=new A.y("Download",null,B.vt,null,null,null,null,null,null,null,null,null)
D.fV5=new A.y("The person who planted this tree has not made a game yet.",null,B.x9,null,null,null,null,null,null,null,null,null)
D.fV9=new A.y("Change",null,B.pE,null,null,null,null,null,null,null,null,null)
D.fVZ=new A.y("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fW1=new A.y("WHAT SHOULD IT CHANGE?",null,M.vw,null,null,null,null,null,null,null,null,null)
D.fWB=new A.y("COLOUR",null,M.vw,null,null,null,null,null,null,null,null,null)
D.fWP=new A.y("Do it",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fWS=new A.y("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fX0=new A.y("Give me another clue",null,D.KA,null,null,null,null,null,null,null,null,null)
D.fXV=new A.y("Create Family Tree",null,B.f5,null,null,null,null,null,null,null,null,null)
D.fY4=new A.y("THE TEACHER EXPLAINS THESE",null,T.ts,null,null,null,null,null,null,null,null,null)
D.fjR=new A.F(!0,E.kg,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYa=new A.y("Write the first page myself",null,D.fjR,null,null,null,null,null,null,null,null,null)
D.fYJ=new A.y("Use this header",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fYQ=new A.y("Create Project",null,E.aV6,null,null,null,null,null,null,null,null,null)
D.hnD=new C.ac7(1,"header")
D.abO=new C.ac7(2,"projects")
D.hnE=new C.ac7(3,"cashier")
D.abP=new C.ac7(4,"familyTree")
D.hB2=new C.cEK(0,"start")
D.hB3=new C.cEL(0,"start")
D.ho1=new C.Z9(null)
D.hp0=new C.ZC(null)
D.dBR=new A.bu(B.hW,[],A.as("bu<m,Gj>"))
D.djO=w([],x.dE)
D.djP=w([],x.M)
D.hpx=new C.bgf(D.dBR,D.djO,D.djP,0,0,null,null)
D.b_e=new C.a_s(0,"intro")
D.b_f=new C.a_s(1,"countdown")
D.ac2=new C.a_s(2,"ask")
D.Wt=new C.a_s(3,"reveal")
D.b_g=new C.a_s(4,"end")
D.hso=new C.t9(F.G7,D.lz,B.cJ,F.lA,5,!1,!1,!1,0,null)
D.hsp=new C.t9(F.G7,B.el,B.cJ,B.bO,2,!0,!0,!1,2,B.cJ)
D.hsq=new C.t9(B.oc,B.cQ,B.cJ,F.lA,2,!0,!1,!1,2,B.ay)
D.hsr=new C.t9(F.G7,B.dF,B.cJ,F.lA,5,!1,!1,!1,1,null)
D.hss=new C.t9(F.Zw,D.aia,B.cJ,F.lA,4,!0,!1,!0,0,null)
D.b_j=new C.t9(F.Zw,B.dH,B.cJ,F.lA,3,!0,!1,!0,2,null)
D.b_k=new C.t9(F.mH,D.lz,B.c,F.lA,0,!1,!1,!0,0,null)
D.b_l=new C.t9(B.oc,B.aD,B.cJ,B.bO,2,!0,!0,!1,2,B.dH)
D.b_m=new C.t9(B.oc,G.nc,B.i5,F.lA,5,!1,!1,!0,3,null)
D.hst=new C.t9(B.oc,B.dH,B.cJ,F.lA,0,!0,!1,!1,0,B.aD)
D.b_n=new C.t9(F.G7,B.el,B.cJ,B.bO,1,!1,!0,!1,1,null)
D.b_o=new C.t9(F.FD,B.ay,B.aD,F.lA,4,!0,!1,!0,2,null)
D.hsu=new C.t9(F.mH,B.ay,B.el,F.lA,3,!0,!1,!1,0,null)
D.hsv=new C.t9(B.oc,B.dF,B.cJ,B.bO,1,!1,!0,!1,1,null)
D.hsw=new C.t9(F.FD,D.aha,B.c,F.lA,5,!1,!1,!0,0,null)
D.ht9=new C.a00(null)
D.hBb=new C.aft(0,"still")
D.WQ=new C.aft(1,"walk")
D.acm=new C.aft(2,"pound")
D.acn=new C.aft(3,"drum")
D.hwE=new C.a1i(0,"greet")
D.b_O=new C.a1i(1,"teach")
D.aco=new C.a1i(2,"ask")
D.hwF=new C.a1i(3,"feedback")
D.b_P=new C.a1i(4,"end")
D.WV=new C.a1B(0,"intro")
D.WW=new C.a1B(1,"asking")
D.AN=new C.a1B(2,"reacting")
D.acy=new C.a1B(3,"driving")
D.acz=new C.a1B(4,"arrived")
D.acC=new C.aL5(0,"projects")
D.b0c=new C.aL5(1,"cashier")
D.hyH=new C.aL5(2,"familyTree")})()};
(a=>{a["GQktL2L7SmVKVnJ+jMtsMT1CACU="]=a.current})($__dart_deferred_initializers__);