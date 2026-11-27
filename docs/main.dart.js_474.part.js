((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,Z,Aa,P,A_,T,M,Ab,L,A0,U,H,E,Ac,V,Ad,A1,Ae,Af,Ag,Ah,Ai,Q,Aj,Ak,N,A2,Al,A3,A4,A5,W,A6,Am,An,Ao,G,Ap,Aq,Ar,A7,As,At,Au,Av,X,O,F,Aw,I,A8,K,Ax,Y,R,Ay,C={
bIX(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bIX=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uW(null,""),$async$bIX)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nk(b1)
s=A.c4(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dw(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cX(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.U.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qX(t,a1,B.i6,"book",E.HJ),$async$bIX)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Sk(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.HW(l)?y.k:y.y)
for(j=J.a1(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a0(r.a(j.h(a2,a7)),q,p):B.cD
g=a8.h(0,"title")
a9=B.a.i(A.v(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.v(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4V(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIX,v)},
aju(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aju=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uW(null,""),$async$aju)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nk(b6)
s=x.S
r=A.cJ(c1,0,A.dx(4,"count",s),A.T(c1).c)
q=H.a4E(new A.O(r,new C.h_D(),r.$ti.k("O<aj.E,o>")).aJ(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.h_C(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.U.au(b7,null)+"\nAllowed values: style one of "+B.d.aJ(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aju)
case 6:l=c5
k=H.Sk(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.arl(s,D.dQv,r.b(k.h(0,"cover"))?A.a0(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.Y("There is no page to change.")
h=A.S(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dw(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.U.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aju)
case 10:l=c5
k=l==null?null:H.Sk(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cL(a8,d),a5=J.aP(a2.a),a2=a2.$ti,a7=new A.jB(a5,a2.k("jB<1>")),a2=a2.c;a7.B();){a9=a2.a(a5.gP(a5))
b0=J.a1(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.h.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.v(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.v(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("b9<2>")
p=A.ct(new A.b9(h,s),new C.h_E(),s.k("M.E"),p)
p=H.a4E(A.pk(p,3,A.a3(p).k("M.E")).aJ(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.B(new A.cv(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4V(s,b9),$async$aju)
case 13:b5=c5
for(s=J.a1(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.arl(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aju,v)},
hUU(d,e,f){return A.cf(null,B.v.j(0.65),!1,null,new C.hat(e,f),d,null,!0,!0,x.g2)},
arl:function arl(d,e,f){this.a=d
this.b=e
this.c=f},
h_D:function h_D(){},
h_C:function h_C(d){this.a=d},
h_E:function h_E(){},
hat:function hat(d,e){this.a=d
this.b=e},
bGD(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bGD=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fMS())){u=null
w=1
break}t=B.d.cC(b1,new C.fMT())
s=$.U()
r=new A.p2(new A.oC())
q=A.va(r,D.aVa)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aVa,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bG
o.e=B.dQ
n=new C.fMY(t)
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
s=$.U()
p=A.a([],x.v)
a3=new A.aI(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aI(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}w=4
return A.b(r.n9().vW(520,160),$async$bGD)
case 4:w=3
return A.b(b3.hr(B.hq),$async$bGD)
case 3:b0=b3
u=b0==null?null:J.eX(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGD,v)},
fY7(d){return C.iAV(d)},
iAV(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fY7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bmt()
n=d.x!=null&&d.Ag(null).length===0
if(d.x!=null)t=n?D.Bh:D.KN
else t=d.gVC()?D.KN:D.aQ_
w=3
return A.b(C.bGD(d.ax),$async$fY7)
case 3:s=f
p.a=null
if(s!=null)p.a=A.apZ(s)
r=A.a6F(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aQ_}else{p.c=C.xH(q,!0)
p.b=n?D.Bh:D.KN}r.a5C(A.hlk(new C.fY9(p,d,new C.fYa(),t,n,o),null,D.bLJ,B.we))
u=r.jC(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fY7,v)},
h4L(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h4L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fY7(d),$async$h4L)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aD(s,r,"_")
if(q.length>40)q=B.a.av(q,0,40)
u=Ai.HV(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4L,v)},
fMS:function fMS(){},
fMT:function fMT(){},
fMY:function fMY(d){this.a=d},
fYa:function fYa(){},
fY9:function fY9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fY8:function fY8(){},
haX(d,e){var w=0,v=A.j(x.H)
var $async$haX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.v.j(0.55),!0,null,new C.hb0(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$haX)
case 2:return A.h(null,v)}})
return A.i($async$haX,v)},
bJp(d,e,f,g){return C.iJ4(d,e,f,g)},
iJ4(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bJp=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cM.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fHt)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.haT(g,r,f),d,null,!0,!0,x.H),$async$bJp)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bJp,v)},
hb1(d,e){var w=0,v=A.j(x.H)
var $async$hb1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.hb4(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hb1)
case 2:return A.h(null,v)}})
return A.i($async$hb1,v)},
b27:function b27(d,e){this.c=d
this.a=e},
cbp:function cbp(){},
bfz:function bfz(d,e){this.b=d
this.a=e},
hb0:function hb0(d,e){this.a=d
this.b=e},
haY:function haY(d){this.a=d},
haZ:function haZ(d,e,f){this.a=d
this.b=e
this.c=f},
hb_:function hb_(d,e){this.a=d
this.b=e},
haT:function haT(d,e,f){this.a=d
this.b=e
this.c=f},
haR:function haR(d){this.a=d},
haS:function haS(d,e,f){this.a=d
this.b=e
this.c=f},
hb4:function hb4(d,e){this.a=d
this.b=e},
hb2:function hb2(d){this.a=d},
hb3:function hb3(d,e,f){this.a=d
this.b=e
this.c=f},
fRR(d,e){var w=0,v=A.j(x.y),u,t
var $async$fRR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4o(d),$async$fRR)
case 3:t=g
J.mH(t,new C.fRS(e))
u=A.akb(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRR,v)},
fRS:function fRS(d){this.a=d},
ary:function ary(d,e,f){this.c=d
this.d=e
this.a=f},
aGu:function aGu(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dWh:function dWh(d,e){this.a=d
this.b=e},
dW2:function dW2(d,e){this.a=d
this.b=e},
dW5:function dW5(d,e,f){this.a=d
this.b=e
this.c=f},
dW4:function dW4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dW3:function dW3(d,e){this.a=d
this.b=e},
dW6:function dW6(d,e){this.a=d
this.b=e},
dW0:function dW0(){},
dW1:function dW1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dW_:function dW_(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dVL:function dVL(d){this.a=d},
dVM:function dVM(d,e,f){this.a=d
this.b=e
this.c=f},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVK:function dVK(d){this.a=d},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVJ:function dVJ(d){this.a=d},
dVT:function dVT(d,e,f){this.a=d
this.b=e
this.c=f},
dVU:function dVU(d,e,f){this.a=d
this.b=e
this.c=f},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVV:function dVV(d,e,f){this.a=d
this.b=e
this.c=f},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVW:function dVW(d,e){this.a=d
this.b=e},
dVG:function dVG(d){this.a=d},
dVX:function dVX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVE:function dVE(){},
dVy:function dVy(d){this.a=d},
dVz:function dVz(d){this.a=d},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVY:function dVY(d,e){this.a=d
this.b=e},
dVD:function dVD(d){this.a=d},
dVZ:function dVZ(d){this.a=d},
dVC:function dVC(){},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVB:function dVB(d){this.a=d},
dVP:function dVP(d,e,f){this.a=d
this.b=e
this.c=f},
dVA:function dVA(d,e){this.a=d
this.b=e},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVQ:function dVQ(d){this.a=d},
dVR:function dVR(d,e,f){this.a=d
this.b=e
this.c=f},
dWk:function dWk(){},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWi:function dWi(d){this.a=d},
dWj:function dWj(d){this.a=d},
dWe:function dWe(d,e){this.a=d
this.b=e},
dWf:function dWf(d){this.a=d},
dW7:function dW7(d,e,f){this.a=d
this.b=e
this.c=f},
dW8:function dW8(d,e,f){this.a=d
this.b=e
this.c=f},
dW9:function dW9(d,e,f){this.a=d
this.b=e
this.c=f},
dWa:function dWa(d,e,f){this.a=d
this.b=e
this.c=f},
dWb:function dWb(d,e,f){this.a=d
this.b=e
this.c=f},
dWc:function dWc(d,e,f){this.a=d
this.b=e
this.c=f},
dWd:function dWd(d,e,f){this.a=d
this.b=e
this.c=f},
dWm:function dWm(){},
dWn:function dWn(){},
dWo:function dWo(){},
dWp:function dWp(d){this.a=d},
dWg:function dWg(d,e){this.a=d
this.b=e},
hQe(d){return B.d.ds(D.a6J,new C.fSD(d),new C.fSE())},
vf:function vf(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fSD:function fSD(d){this.a=d},
fSE:function fSE(){},
any:function any(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYN:function aYN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
US:function US(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjf:function bjf(){this.d=$
this.c=this.a=null},
dle:function dle(d,e){this.a=d
this.b=e},
dlc:function dlc(d,e){this.a=d
this.b=e},
dld:function dld(){},
dlf:function dlf(d,e){this.a=d
this.b=e},
hzO(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bf(J.k(u==null?"":u))
return new C.nR(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
Mh(d,e){return C.izw(d,e)},
izw(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Mh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$Mh)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.U.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cL(p,x.f)
o=A.ct(o,new C.fVx(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fVy(),n),n.k("M.E"))
B.d.b_(o,new C.fVz())
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
return A.i($async$Mh,v)},
BS(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BS)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h9v(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.U.au(r,null)),$async$BS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BS,v)},
aUT(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aUT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mh(d,e),$async$aUT)
case 2:u=h
t=J.cK(u)
s=t.bn(u,new C.hih(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BS(d,e,u),$async$aUT)
case 3:return A.h(null,v)}})
return A.i($async$aUT,v)},
bH7(d,e,f){var w=0,v=A.j(x.H),u
var $async$bH7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mh(d,e),$async$bH7)
case 2:u=h
J.mH(u,new C.fRJ(f))
w=3
return A.b(C.BS(d,e,u),$async$bH7)
case 3:return A.h(null,v)}})
return A.i($async$bH7,v)},
bHn(d,e){return C.izv(d,e)},
izv(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bHn=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bHn)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Q4
w=1
break}p=B.U.aN(0,q,null)
if(x.f.b(p)){o=A.a0(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.h.M(k)
if(k==null)k=0
if(D.EP.am(0,o.h(0,"foil")))j=A.cV(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a8w,o.h(0,"position"))?A.cV(o.h(0,"position")):"middle"
g=B.d.q(D.a7Q,o.h(0,"frame"))?A.cV(o.h(0,"frame")):"double"
f=B.d.q(D.a7M,o.h(0,"texture"))?A.cV(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dex,o.h(0,"header"))?A.cV(o.h(0,"header")):"classic"
o=new C.IV(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Q4
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Q4
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHn,v)},
Tw(d,e,f){return C.iIz(d,e,f)},
iIz(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Tw=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$Tw)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.U.au(f.ak(),null)),$async$Tw)
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
return A.i($async$Tw,v)},
SW(d,e){return C.izx(d,e)},
izx(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$SW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$SW)
case 7:r=g
q=r.nQ("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Mh(d,e),$async$SW)
case 8:if(!j.cM(g)){n=B.a.i(d.toLowerCase())
m=J.lK(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$SW)
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
return A.i($async$SW,v)},
aiP(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aiP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SW(d,e),$async$aiP)
case 3:s=g
r=J.a1(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.K(s,t)
w=5
return A.b(A.aB(),$async$aiP)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aiP)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiP,v)},
a55(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a55=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.SW(d,e),$async$a55)
case 2:s=h
J.fO(s,f)
w=3
return A.b(A.aB(),$async$a55)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a55)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a55)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a55)
case 6:return A.h(null,v)}})
return A.i($async$a55,v)},
nR:function nR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVx:function fVx(){},
fVy:function fVy(){},
fVz:function fVz(){},
h9v:function h9v(){},
hih:function hih(d){this.a=d},
fRJ:function fRJ(d){this.a=d},
IV:function IV(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bUM:function bUM(d){this.a=d},
iIT(d,e,f,g,h,i,j){return A.a7(d,!1).ca(A.e4(new C.ha6(j,i,f,e,h,g),!0,null,x.H))},
SS(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$SS=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SW(h,g),$async$SS)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.L(x.q).f.T(D.aXz)
u=!1
w=1
break}w=4
return A.b(C.hUU(d,f,e),$async$SS)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aiP(h,g),$async$SS)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nR(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BS(h,r,p),$async$SS)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Tw(h,r,new C.IV("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$SS)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SS,v)},
ha6:function ha6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0E:function a0E(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDr:function aDr(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dlU:function dlU(d){this.a=d},
dlT:function dlT(d,e){this.a=d
this.b=e},
dlI:function dlI(d,e){this.a=d
this.b=e},
dlF:function dlF(d,e){this.a=d
this.b=e},
dlg:function dlg(d){this.a=d},
dlh:function dlh(d,e){this.a=d
this.b=e},
dlJ:function dlJ(d){this.a=d},
dlp:function dlp(d){this.a=d},
dln:function dln(d){this.a=d},
dlo:function dlo(d){this.a=d},
dlq:function dlq(d){this.a=d},
dlG:function dlG(d){this.a=d},
dlH:function dlH(){},
dll:function dll(d){this.a=d},
dlm:function dlm(d,e){this.a=d
this.b=e},
dlr:function dlr(d){this.a=d},
dls:function dls(d,e){this.a=d
this.b=e},
dlS:function dlS(d){this.a=d},
dlR:function dlR(d,e){this.a=d
this.b=e},
dlQ:function dlQ(d){this.a=d},
dlC:function dlC(d){this.a=d},
dlB:function dlB(d){this.a=d},
dlD:function dlD(d){this.a=d},
dli:function dli(d,e){this.a=d
this.b=e},
dlE:function dlE(d,e){this.a=d
this.b=e},
dlv:function dlv(d){this.a=d},
dlw:function dlw(d){this.a=d},
dlu:function dlu(){},
dlx:function dlx(d){this.a=d},
dly:function dly(d){this.a=d},
dlz:function dlz(d,e){this.a=d
this.b=e},
dlA:function dlA(d,e,f){this.a=d
this.b=e
this.c=f},
dlt:function dlt(d,e){this.a=d
this.b=e},
dlL:function dlL(d){this.a=d},
dlK:function dlK(){},
dlM:function dlM(d){this.a=d},
dlN:function dlN(d){this.a=d},
dlO:function dlO(d){this.a=d},
dlP:function dlP(d,e){this.a=d
this.b=e},
dlj:function dlj(d){this.a=d},
dlk:function dlk(d){this.a=d},
a0I:function a0I(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjE:function bjE(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dnG:function dnG(d){this.a=d},
dnH:function dnH(d){this.a=d},
dnF:function dnF(d){this.a=d},
dnI:function dnI(d){this.a=d},
dnE:function dnE(d){this.a=d},
dnJ:function dnJ(d){this.a=d},
dnD:function dnD(d){this.a=d},
dnK:function dnK(d,e){this.a=d
this.b=e},
dnC:function dnC(d,e){this.a=d
this.b=e},
dnL:function dnL(d,e){this.a=d
this.b=e},
a0G:function a0G(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahe:function ahe(d,e,f){this.a=d
this.b=e
this.c=f},
aDu:function aDu(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dm8:function dm8(d,e){this.a=d
this.b=e},
dm7:function dm7(d,e){this.a=d
this.b=e},
dmc:function dmc(d){this.a=d},
dmb:function dmb(d,e){this.a=d
this.b=e},
dm9:function dm9(d){this.a=d},
dma:function dma(d){this.a=d},
dmd:function dmd(d){this.a=d},
dme:function dme(d){this.a=d},
dm6:function dm6(d,e){this.a=d
this.b=e},
dm5:function dm5(d,e){this.a=d
this.b=e},
Li:function Li(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_Q:function a_Q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cTq:function cTq(d){this.a=d},
cTr:function cTr(){},
cTs:function cTs(d){this.a=d},
bgO:function bgO(d,e,f){this.b=d
this.c=e
this.a=f},
bgF:function bgF(d,e){this.b=d
this.a=e},
vg:function vg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0b:function a0b(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgM:function bgM(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dct:function dct(d,e,f){this.a=d
this.b=e
this.c=f},
dcs:function dcs(d,e){this.a=d
this.b=e},
dcS:function dcS(d){this.a=d},
dcF:function dcF(){},
dcT:function dcT(d){this.a=d},
dcE:function dcE(){},
dcU:function dcU(d,e){this.a=d
this.b=e},
dcD:function dcD(d,e){this.a=d
this.b=e},
dcV:function dcV(d,e){this.a=d
this.b=e},
dcC:function dcC(d,e){this.a=d
this.b=e},
dcW:function dcW(d){this.a=d},
dcB:function dcB(){},
dcX:function dcX(d,e){this.a=d
this.b=e},
dcA:function dcA(d,e){this.a=d
this.b=e},
dcY:function dcY(d){this.a=d},
dcN:function dcN(d,e){this.a=d
this.b=e},
dcZ:function dcZ(d){this.a=d},
dd_:function dd_(d){this.a=d},
dd1:function dd1(d){this.a=d},
dd2:function dd2(d){this.a=d},
dcM:function dcM(d,e){this.a=d
this.b=e},
dd3:function dd3(d,e){this.a=d
this.b=e},
aKG:function aKG(d){this.a=d},
bmc:function bmc(d){this.a=d},
beU:function beU(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
anz:function anz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2X:function a2X(d,e){this.a=d
this.b=e},
anA:function anA(d,e,f,g,h,i){var _=this
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
_.bv$=h
_.ab$=i
_.c=_.a=null},
bUW:function bUW(d){this.a=d},
bUQ:function bUQ(d){this.a=d},
bUP:function bUP(d,e){this.a=d
this.b=e},
bUZ:function bUZ(d){this.a=d},
bUR:function bUR(d){this.a=d},
bUS:function bUS(d){this.a=d},
bUV:function bUV(d){this.a=d},
bUU:function bUU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUX:function bUX(d,e){this.a=d
this.b=e},
bUY:function bUY(){},
bUT:function bUT(d){this.a=d},
bUN:function bUN(d,e){this.a=d
this.b=e},
bUO:function bUO(d){this.a=d},
brQ:function brQ(d,e){this.b=d
this.a=e},
aDs:function aDs(){},
iV(d,e){var w
$.U()
w=A.L()
w.b=B.ae
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dQ
return w},
bGF(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nT(0,a0?-f:f,f)
w=A.c1(B.hF,8,36)
v=B.v.j(0.3)
u=$.U()
t=A.L()
t.r=v.gp(0)
d.c2(w,t)
w=a1===D.YS
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eIh,new A.m(-4+v,-2),C.iV(q,5))
d.ah(D.eFS,new A.m(4-v,-2),C.iV(q,5))}else{t=A.c1(B.KF,14,40)
p=A.L()
p.r=v.gp(0)
d.c2(t,p)}v=u.r
u=x.v
o=new A.aI(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.cm(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cm(15,-40,11,t))
o.E(new A.bz())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aI(v,B.ak,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bz())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b4Z){n=-52+w*14
d.ah(new A.m(10,n-22),new A.m(10,n+44),C.iV(F.GV,3.4))
d.ah(D.eIy,new A.m(9,n),C.iV(q,4))
d.ah(D.eGi,new A.m(10,n),C.iV(q,4))}else if(a1===D.b5_){d.ah(D.eHo,new A.m(-8,-26-Math.max(0,w)*6),C.iV(q,4))
d.ah(D.eEk,new A.m(8,-26-Math.max(0,-w)*6),C.iV(q,4))}else{w=s*3
v=-38-r
d.ah(D.eHs,new A.m(-12-w,v),C.iV(q,4))
d.ah(D.aOX,new A.m(12+w,v),C.iV(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fub,w)
m=new A.m(0,-77-r)
w=A.c1(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c2(w,v)
w=h.y
if(w!=null){v=A.c1(m.a6(0,K.wd),15,24)
u=A.L()
u.r=w.gp(0)
d.c2(v,u)
u=m.a6(0,D.eEe)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.c1(m.a6(0,B.uj),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cR(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a6(0,D.eIw),m.a6(0,D.eHm),C.iV(v,2.2))
d.ah(m.a6(0,D.eGh),m.a6(0,D.eEb),C.iV(v,2.2))}if(w===4){w=m.a6(0,D.eIA)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a6(0,D.eGj)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a6(0,D.eHb)
v=A.L()
v.r=B.iu.gp(0)
d.O(w,0.9,v)
v=m.a6(0,D.eH0)
w=A.L()
w.r=B.iu.gp(0)
d.O(v,0.9,w)
if(i){l=m.a6(0,K.aaJ)
w=A.c1(l,21,22)
v=A.L()
v.r=D.lX.gp(0)
d.c2(w,v)
v=A.c1(l.a6(0,K.aOU),5,12)
w=A.L()
w.r=D.bkp.gp(0)
d.c2(v,w)
d.ah(l.a6(0,D.eIs),l.a6(0,K.aPh),C.iV(B.d0,1.4))
d.ah(D.aOX,new A.m(15,-88-r),C.iV(q,3.6))}j.restore()},
hON(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.c1(B.dP,18,96)
u=B.v.j(0.28)
$.U()
t=A.L()
t.r=u.gp(0)
d.c2(v,t)
t=A.c1(B.dP,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c2(t,u)
d.lF(D.aVe,A.L())
C.inz(d,g,h,i,j)
s=(k==null?D.aaO:k).a-w>=0?1:-1
w=A.L()
w.a=B.N3
w.san(A.jT(new A.m(s*70,-60),new A.m(-s*70,-60),A.a([D.akV.j(0.5),D.akV.j(0.12),D.bs7.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.w,null))
d.aE(D.aVe,w)
r.restore()
r.restore()},
inz(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.v,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bx(D.fuc,B.uo)
p=$.U()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fu7,B.hT)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.ful,B.hT)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c2(D.fue,s)
s=A.L()
s.r=d.gp(0)
a1.c2(D.fsW,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.nT(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aI(p.r,B.ak,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.cm(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.cm(m+3,-62,m-2,-58))
l.E(new A.cm(0,-70,k,-58))
l.E(new A.bz())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mI(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dmd[j]
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.m(-34+u,-64),new A.m(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.n.F(B.n.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.U()
f=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f.r=i.gp(0)
a1.O(new A.m(g,h),3.6,f)
f=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f.r=u.gp(0)
a1.O(new A.m(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.m(g,-64),new A.m(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.m(-30,h),new A.m(30,h),i)}break
default:a1.ah(D.eHV,D.eF_,C.iV(a2.c.j(0.9),3))}a1.ah(D.eIt,D.eHu,C.iV(B.v.j(0.18),1.6))
a1.ah(D.eEj,K.aOZ,C.iV(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.U()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fsS,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.ft5,i)
n=new A.aI(k.r,B.ak,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.cm(0,-57,9,-66))
n.E(new A.cm(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cR(D.ftg,0.1,2.941592653589793,!1,C.iV(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aaU
n=25*q
k=23*q
i=9*q
C.hKt(a1,new A.m(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Fh:o
C.hKt(a1,new A.m(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eFK,D.eFG,C.iV(D.alU,4))
a1.ah(D.eFI,D.eFE,C.iV(D.Hl.j(0.7),1.4))
u=A.L()
u.r=B.d0.gp(0)
a1.O(D.eFH,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jy(0,a3.f)
a1.bW(0,r)
C.inv(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hKt(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcE(),q=r===0?B.hF:s.eE(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.m(o,w)
if(o*i<0)v=new A.m(-o,-w)
u=e.a6(0,q.aM(0,n)).a6(0,v.aM(0,m))
t=e.a6(0,q.aM(0,p))
d.ah(e,u,C.iV(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iV(o,l*0.35))
d.ah(u,t,C.iV(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iV(o,l*0.22))
$.U()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.c1(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c2(o,w)
w=-l
w=t.a6(0,new A.m(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
inv(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.c1(B.wc,40,38)
$.U()
v=A.L()
v.r=c0.gp(0)
c2.c2(w,v)}if(c1===4){$.U()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eHC,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eEA,9.5,w)}w=A.c1(D.eIR,10,6)
v=$.U()
u=A.L()
u.r=c8.gp(0)
c2.c2(w,u)
u=A.c1(D.eH8,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c2(u,w)
v=v.r
w=x.v
t=new A.aI(v,B.ak,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i6(13,-20,17,-9,16,2))
t.E(new A.i6(15,13,8,20,0,20))
t.E(new A.i6(-8,20,-15,13,-16,2))
t.E(new A.i6(-17,-9,-13,-20,0,-20))
t.E(new A.bz())
u=A.L()
u.san(A.wC(D.eIj,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.w,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iV(c8.j(0.5),0.8)
c2.cR(D.fun,3.455751918948773,2.5132741228718345,!1,s)
c2.cR(D.fsZ,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eHz,K.aPs,s)
c2.ah(D.eEw,D.eEn,s)
c2.cR(D.ftf,2.2,1.4,!1,s)
c2.cR(D.fsX,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.O(new A.m(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cR(D.ftu,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.cm(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cm(0,-12,-13,-6))
p.E(new A.bz())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eHq,D.eEo,C.iV(G.nP,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eHF,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eEB,3,o)
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.cm(-12,22,0,26))
o.E(new A.cm(12,22,13,6))
o.E(new A.cm(8,13,0,12))
o.E(new A.cm(-8,13,-13,6))
o.E(new A.bz())
p=A.L()
p.r=B.hX.gp(0)
c2.af(o,p)
p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.cm(0,6,7,8))
p.E(new A.cm(0,10.5,-7,8))
o=A.L()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.cm(-20,-27,0,-29))
p.E(new A.cm(20,-27,17,-4))
p.E(new A.cm(0,-14,-17,-4))
p.E(new A.bz())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cR(D.ftB,3.4,2.5,!1,C.iV(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cR(D.ftn,3.6,2.2,!1,C.iV(o,1.2))
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.cm(27,-34,25,-19))
o.E(new A.cm(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aI(v,B.ak,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.cm(24,-12,27,-26))
n.E(new A.cm(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.eEp,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cR(D.fty,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.m(r*3.6,-19+Math.abs(r)*0.8),new A.m(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aFw[l]
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.m(k,0),new A.m(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.O(new A.m(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cR(D.ftx,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aaJ,K.aaI,C.iV(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cR(D.ft_,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.c1(D.eID,5,8)
o=D.ai5.j(i)
n=A.L()
n.r=o.gp(0)
c2.c2(p,n)
n=A.c1(D.eHj,5,8)
p=D.ai5.j(i)
o=A.L()
o.r=p.gp(0)
c2.c2(n,o)
h=c4.e*2.4
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.cm(h-3.4,6,h-2.6,7.4))
o.E(new A.cm(h,8.8,h+2.6,7.4))
c2.af(o,C.iV(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.m(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.m(h+1.5,7.2),0.7,o)
g=B.h.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hr[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.c1(new A.m(a5,-3),a3,7)
a6=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a6.r=B.c.j(0.96).gp(0)
c2.c2(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aI(v,B.ak,b9,b9,a6)
a6.push(new A.jO(A.c1(new A.m(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.ED(a4.gli().a.snapshot())
d.clipPath(a3.a,$.n_(),!0)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=D.bol.gp(0)
c2.O(new A.m(a7,a8),2.1,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.O(new A.m(a7,a8),1.05,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.O(new A.m(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a03:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.b=B.ae
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dQ
a3=p?0.8:0
c2.cR(A.c1(new A.m(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dW
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.b=B.ae
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dQ
c2.ah(new A.m(a5-a4,b0-a6+0.4),new A.m(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.byW
else{u=A.ap(c8,D.bs9,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aI(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.cm(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cm(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bz())
v=A.L()
v.r=D.brs.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mI(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a4(w,11,w+b6*2,13.2),u)
u=A.c1(new A.m(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bz0.gp(0)
c2.c2(u,w)
d.restore()
c2.af(b8,C.iV(b4,1.1))}else{u=new A.aI(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.cm(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iV(b4,1.5))
if(b5>0.6){w=new A.aI(v,B.ak,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.cm(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cm(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cR(D.fte,-1.2,2.2,!1,C.iV(c8.j(0.5),0.8))
c2.cR(D.ft1,2.141592653589793,2.2,!1,C.iV(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eH1,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eGZ,1.7,w)}},
itk(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.U(),f=new A.p2(new A.oC()),e=A.va(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jT(B.J,new A.m(0,a0*0.46),D.diC,D.d8V,B.w,h))
e.aE(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bW(0,a1)
w=new A.e6()
w.cW(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.m(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jy(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wC(B.J,230,A.a([D.bmZ,B.L],a0),h,B.w,h,h,0))
e.c2(D.ftJ,d)
a2.restore()
d=A.L()
d.san(A.wC(D.aaR,58,A.a([D.bqs,B.L],a0),h,B.w,h,h,0))
e.O(D.aaR,58,d)
d=A.L()
d.r=D.blH.gp(0)
e.O(D.aaR,24,d)
d=A.L()
d.r=D.a0u.gp(0)
e.O(D.eFj,5,d)
d=A.L()
d.r=D.a0u.gp(0)
e.O(D.eFn,3.4,d)
d=A.L()
d.r=D.a0u.gp(0)
e.O(D.eFm,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aI(g.r,B.ak,h,h,u)
u.push(new A.aZ(-60,420))
r.ac()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.aj(m)
r.ac()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.bz()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ac()
g=[D.bkd,D.bmf,D.bst][s]
u=$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cCO[l]
k=384+B.n.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.b=B.ae
u.c=2.4
u.r=D.a0Q.gp(0)
u.d=B.bG
u.e=B.dQ
e.ah(new A.m(o,k),new A.m(g,d),u)
g=A.c1(new A.m(g,k-27),11,46)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a0Q.gp(0)
e.c2(g,u)
d=A.c1(new A.m(o-12,d),8,24)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a0Q.gp(0)
e.c2(d,u)}for(v=0;v<9;++v){g=B.n.F(v,3)
d=B.n.F(v,4)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.blK.j(0.8).gp(0)
e.O(new A.m(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jT(D.eDT,D.eDW,D.dbc,B.xP,B.w,h))
e.aE(new A.a4(-200,412,650,1300),g)
j=new A.e6()
j.cW(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.c1(new A.m(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.hc()?B.c:B.v
d=new A.ar(B.V,B.R,B.X,B.Y,B.W)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c2(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nT(0,1,0.34)
g=A.L()
g.san(A.wC(B.J,250,A.a([D.btt,D.bmA,D.bvq],a0),A.a([0,0.8,1],x.n),B.w,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.akB,D.ble,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.ae
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.m(o+i*2,k),new A.m(o+i*5,g+Math.abs(i)*3),a0)}}C.ilE(e)
for(l=0;l<3;++l)C.ip6(e,D.aDh[l])
C.ioV(e,D.eFd)
for(o=118;o<190;o+=11){g=B.n.F(o,3)
d=B.n.F(o,4)
$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.ae
a0.c=2.4
a0.r=D.a0M.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.m(o,452+g),new A.m(o+1,436+d),a0)}e.ah(D.eEl,D.eEE,C.iV(D.blY,1.6))
a2.restore()
return f.n9()},
ilE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.U().r,g=x.v,f=new A.aI(h,B.ak,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i6(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i6(416,382,432,422,428,462))
f.E(new A.bz())
w=A.L()
w.san(A.jT(new A.m(354,0),new A.m(430,0),D.dIP,B.mc,B.w,i))
d.af(f,w)
v=new A.e6()
v.cW(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.b=B.ae
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dQ
d.ah(new A.m(t,s),new A.m(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dnM[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aI(h,B.ak,i,i,l)
l.push(new A.aZ(r,336))
k.ac()
r=new A.cm(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.ae
r.c=8
r.r=D.aiS.gp(0)
r.d=B.bG
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=A.ap(D.blQ,D.bsr,v.ai()).j(0.92).gp(0)
d.O(new A.m(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.ae
r.c=1.2
r.r=D.a0M.gp(0)
r.d=B.bG
r.e=B.dQ
d.ah(new A.m(w,q+8),new A.m(w,q+22),r)
q=A.c1(new A.m(w,q+28),13,7)
w=new A.ar(B.V,B.R,B.X,B.Y,B.W)
w.r=D.btQ.gp(0)
d.c2(q,w)}},
ip6(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.c1(new A.m(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.U(),b3=A.L()
b3.r=b1.gp(0)
b4.c2(b0,b3)
b2=b2.r
b3=x.v
w=new A.aI(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.cm(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bz())
u=A.L()
u.san(A.jT(new A.m(b0,0),new A.m(v,0),D.dnT,B.mc,B.w,a4))
b4.af(w,u)
t=new A.e6()
t.cW(B.n.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mI(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.ae
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dQ
b4.ah(new A.m(r,q),new A.m(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.akx.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a4(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.bb(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aI(b2,B.ak,a4,a4,j)
j.push(new A.aZ(k,o))
i.ac()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.bz()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ac()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=D.lX.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aI(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.h.bb(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iV(D.akx.j(0.7),1.6))
v.restore()
b0=$.U().r
b2=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.cm(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bz())
m=A.L()
m.r=D.akJ.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.akJ.gp(0)
b4.O(new A.m(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.cm(a5-a9,n,a5,u))
e.E(new A.cm(a5+a9,n,p,j))
e.E(new A.cm(a5,b1+a7*0.34,o,j))
e.E(new A.bz())
b1=A.L()
n=a7*1.4
b1.san(A.jT(new A.m(a5-n,0),new A.m(a5+n,0),D.drI,B.mc,B.w,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mI(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.hc()?B.v:D.bln).j(0.16)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dQ
b4.ah(new A.m(a5+(p-0.5)*3,u),new A.m(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aI(b0,B.ak,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.cm(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.ae
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
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.b=B.ae
v.c=1.1
v.r=D.bsV.gp(0)
v.d=B.bG
v.e=B.dQ
b4.ah(new A.m(a2,a3),new A.m(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bz())
b0=A.L()
b0.r=D.boQ.gp(0)
b4.af(a9,b0)},
ioV(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aFt[s]
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.b=B.ae
q.c=3
q.r=D.a0M.gp(0)
q.d=B.bG
q.e=B.dQ
d.ah(new A.m(r,u),new A.m(r,t),q)}u=A.c1(e.a6(0,K.aOT),24,36)
t=$.U()
r=A.L()
r.r=D.by7.gp(0)
d.c2(u,r)
t=new A.aI(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cm(w,v-24,r,u))
t.E(new A.bz())
u=A.L()
u.r=D.ajB.gp(0)
d.af(t,u)},
iof(d){switch(B.n.F(d,8)){case 0:return D.b4e
case 1:return D.b4c
case 2:return D.b4b
case 3:return D.b4a
case 4:return D.b4d
case 5:return D.b4f
case 6:return D.hVT
default:return D.hVS}},
Tt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.brR()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aaU:j
w.as=k==null?D.Fh:k
C.hON(d,e,p,C.iof(m),w,s,m,l)},
hQk(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bWA:function bWA(){var _=this
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
tz:function tz(d,e,f,g,h,i,j,k,l,m){var _=this
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
brR:function brR(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
anS:function anS(){this.b=this.a=null},
aYS:function aYS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bWs:function bWs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWt:function bWt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWu:function bWu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWv:function bWv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWw:function bWw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWx:function bWx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWy:function bWy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWz:function bWz(){},
bWr:function bWr(d){this.a=d},
ahn:function ahn(d,e){this.a=d
this.b=e},
afh:function afh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NE(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bVb(s)
s.bEG(d)
return s},
Hy(d,e,f,g,h,i,j){var w,v=A.T(g).k("X<1>")
v=A.d8(new A.X(g,new C.fFt(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ck.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cJ(w,0,A.dx(3,"count",x.S),A.T(w).c))
B.d.e0(v,d)
return new C.lR(e,v,B.d.c9(v,f),h,i,"tree",j)},
iKA(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hi7(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jw(c4,c0)
t=A.B(c4,A.a3(c4).k("ck.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jw(c4,c0)
r=A.B(c4,A.a3(c4).k("ck.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jw(c4,c0)
q=A.B(c4,A.a3(c4).k("ck.E"))
for(c4=w.length,v=A.T(t).k("X<1>"),s=v.k("M.E"),p=A.T(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.xk)g="father"
else g=h===D.p2?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hi9(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hy(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hia(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lR("True or false: "+h+" is the "+g+" of "+l+".",A5.TJ,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lR("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",A5.TJ,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.GS(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hib(l,a0,c5),v),s)
e=a1.c
if(e===D.xk)e="son"
else e=e===D.p2?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hy(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ez([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.m5(a5,a5.r,f.k("m5<1>")),e.c=a5.e,f=f.c;e.B();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hy(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("ia<1>"),a3=new A.ia(a0,1,b3,a2),a3.mw(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gI(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.B();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hy(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.atf(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hic(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hy(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.hid(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xk
if(e)a2=b7
else a2=f===D.p2?b8:b9
if(e)f=b7
else f=f===D.p2?b8:b9
c2.$2("grand",C.Hy(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aPh(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.X(t,new C.hie(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hy(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cVS)
h=l+" was born in "+k
c2.$2("place",C.Hy(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dck)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hy(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hy(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jb(b1,b3,b3)
c2.$2("year",C.Hy(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bHj(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.NE(d),l=new A.e6()
l.cW(f)
w=C.iKA(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.B();)J.hxR(v.d,l)
v=A.a3(w).k("cv<1>")
u=A.B(new A.cv(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fTg(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.aa(p)>n.a){p=w.h(0,q)
p.toString
p=s.K(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.B(D.aCj,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hOU(o,l))}}else if(!g&&v>3){o=C.hOU(D.aCj[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hOU(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e0(w,e)
return new C.lR(d.a,w,B.d.c9(w,v),d.d,d.e,d.f,d.r)},
hUt(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.NE(a2),a1=new A.e6()
a1.cW(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.GS(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.GS(n)
l=A.T(m)
k=new A.ia(m,0,5,l.k("ia<1>"))
k.mw(m,0,5,l.c)
j=k.de(0)
if(new A.O(j,new C.h8p(),A.T(j).k("O<1,F>")).fG(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aUD(a0,j[i]))
w.push(new C.aw1("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.bX(e.c0(0,a0.aon(q),new C.h8q()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.B(new A.cv(e,t),t.k("M.E"))
B.d.fg(d)
v=A.a([],v)
for(u=A.cJ(d,0,A.dx(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bQ(u,u.gI(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.B();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cK(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aUD(a0,v[r]))
w.push(new C.aw1("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aT3(d){return B.d.apQ(D.aEO,new C.fP4(d))},
iA0(d){return A.nU(new A.X(D.aEO,new C.fWt(d),x.av))},
bW_(d){return C.i3o(d)},
i3o(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bW_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bW_)
case 7:r=f
q=B.a.i(d)
q=A.ev(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bW_,v)},
Cc(d,e){return C.i3l(d,e)},
i3l(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Cc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Cc)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Cc)
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
return A.i($async$Cc,v)},
bVZ(d,e,f){return C.i3m(d,e,f)},
i3m(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bVZ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bVZ)
case 7:r=h
q=B.a.i(d)
q=A.ev(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bVZ,v)},
Cd(d,e,f,g){return C.i3n(d,e,f,g)},
i3n(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Cd=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Cd)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Cd)
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
return A.i($async$Cd,v)},
bJD(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hkd(d,e,f,g){return new C.amp(g,d==null?A.a(["","","",""],x.s):d,e,f)},
i1p(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aP(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bN)
while(u.B())w.push(J.k(u.gP(u)))
u=x.N
w=A.cJ(w,0,A.dx(4,"count",x.S),u).de(0)
B.d.u(w,A.c4(Math.max(0,4-(v.b(d.h(0,"a"))?J.aa(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.h.M(v)
v=B.n.D(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.h.M(u)
return C.hkd(w,v,B.n.D(u==null?20:u,5,60),t)},
hz1(d){var w,v,u,t,s,r,q=J.a1(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aP(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.bN)
u=x.f
t=x.N
s=x.z
while(q.B()){r=q.gP(q)
if(u.b(r))v.push(C.i1p(A.a0(r,t,s)))}return new C.Nm(p,w,v)},
ht_(d){var w,v=A.a([],x.c)
for(w=J.aP(d.z);w.B();)v.push(C.hz1(w.gP(w)))
return v},
aUD(d,e){var w=e.c===D.p2
if(d.aon(e)===0&&d.GS(e).length!==0)return w?0:1
if(d.GS(e).length!==0||d.atf(e)!=null)return w?2:3
return w?4:5},
hVz(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NE(a4),a3=new A.e6()
a3.cW(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.GS(m)
g=a2.atf(m)
f=a2.aPh(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.xk)k="father"
else k=k===D.p2?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.xk)k="father"
else k=k===D.p2?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b_(l,new C.hiy())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hiz(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.ia(a0,0,3,i.k("ia<1>"))
a1.mw(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aUD(a2,m)
i=new A.ia(l,0,4,p)
i.mw(l,0,4,r)
w.push(new C.bd3(d,a1,i.de(0),k))
if(w.length>=5)break}return w},
hM7(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hUE(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NE(a4),a3=new A.e6()
a3.cW(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.GS(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.GS(l)
j=A.T(k)
i=new A.ia(k,0,4,j.k("ia<1>"))
i.mw(k,0,4,j.c)
h=i.de(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h91(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ia(i,0,k,m)
j.mw(i,0,k,n)
f=j.de(0)
j=B.a.i(l.b)
k=C.aUD(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aUD(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aUD(a2,f[g]))
w.push(new C.abj(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lR:function lR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bVb:function bVb(d){this.b=d
this.c=$},
bVc:function bVc(){},
bVd:function bVd(d){this.a=d},
fFt:function fFt(d){this.a=d},
hi7:function hi7(d){this.a=d},
hi8:function hi8(){},
hi9:function hi9(d){this.a=d},
hia:function hia(d,e){this.a=d
this.b=e},
hib:function hib(d,e,f){this.a=d
this.b=e
this.c=f},
hi6:function hi6(d,e){this.a=d
this.b=e},
hic:function hic(d){this.a=d},
hid:function hid(d){this.a=d},
hie:function hie(d,e,f){this.a=d
this.b=e
this.c=f},
hi5:function hi5(d,e){this.a=d
this.b=e},
fTg:function fTg(d,e){this.a=d
this.b=e},
aw1:function aw1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h8p:function h8p(){},
h8q:function h8q(){},
A_:function A_(d,e,f){this.a=d
this.b=e
this.c=f},
fP4:function fP4(d){this.a=d},
fWt:function fWt(d){this.a=d},
amp:function amp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPY:function bPY(){},
Nm:function Nm(d,e,f){this.a=d
this.b=e
this.c=f},
bd3:function bd3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hiy:function hiy(){},
hiz:function hiz(d){this.a=d},
abj:function abj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h91:function h91(d){this.a=d},
bku:function bku(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ahl:function ahl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
alH:function alH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alI:function alI(d,e,f,g,h){var _=this
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
_.bv$=g
_.ab$=h
_.c=_.a=null},
bO5:function bO5(d){this.a=d},
bO0:function bO0(){},
bO6:function bO6(){},
bNZ:function bNZ(){},
bO_:function bO_(){},
bO4:function bO4(d){this.a=d},
bO1:function bO1(d,e){this.a=d
this.b=e},
bO3:function bO3(d,e){this.a=d
this.b=e},
bO2:function bO2(d,e){this.a=d
this.b=e},
bNY:function bNY(d){this.a=d},
bfB:function bfB(d,e){this.b=d
this.a=e},
Rw:function Rw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDq:function aDq(d,e,f){this.b=d
this.c=e
this.a=f},
aBN:function aBN(d,e,f){this.a=d
this.b=e
this.c=f},
awC:function awC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awD:function awD(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.dt$=e
_.bd$=f
_.c=_.a=null},
cu9:function cu9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cua:function cua(d){this.a=d},
cu8:function cu8(d){this.a=d},
cub:function cub(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuc:function cuc(){},
cud:function cud(d,e){this.a=d
this.b=e},
cue:function cue(){},
cuf:function cuf(d){this.a=d},
cu5:function cu5(d){this.a=d},
cu6:function cu6(d,e){this.a=d
this.b=e},
cu7:function cu7(d,e,f){this.a=d
this.b=e
this.c=f},
cu0:function cu0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cu2:function cu2(d,e){this.a=d
this.b=e},
cu3:function cu3(d,e){this.a=d
this.b=e},
cu1:function cu1(d,e){this.a=d
this.b=e},
cu_:function cu_(){},
cu4:function cu4(){},
bf2:function bf2(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cUu:function cUu(){},
aAy:function aAy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAz:function aAz(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cJ4:function cJ4(d){this.a=d},
cJ3:function cJ3(d){this.a=d},
cJc:function cJc(d,e){this.a=d
this.b=e},
cJd:function cJd(d,e){this.a=d
this.b=e},
cJe:function cJe(d){this.a=d},
cJb:function cJb(d){this.a=d},
cJf:function cJf(d){this.a=d},
cJg:function cJg(d,e){this.a=d
this.b=e},
cJh:function cJh(){},
cJi:function cJi(d){this.a=d},
cJ6:function cJ6(d){this.a=d},
cJ7:function cJ7(d,e){this.a=d
this.b=e},
cJ5:function cJ5(d,e){this.a=d
this.b=e},
cJ8:function cJ8(){},
cJ9:function cJ9(){},
cJa:function cJa(d,e){this.a=d
this.b=e},
aBx:function aBx(){},
aJ2:function aJ2(){},
hqz(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bue((w-450*u)/2,(v-900*u)/2,u)},
ah9:function ah9(){},
fhz:function fhz(d){this.a=d},
aMW:function aMW(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
frW:function frW(d){this.a=d},
anI:function anI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anJ:function anJ(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qp$=f
_.MS$=g
_.aoV$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bVY:function bVY(d){this.a=d},
bVX:function bVX(){},
bVV:function bVV(d){this.a=d},
bVT:function bVT(){},
bVU:function bVU(d){this.a=d},
bVQ:function bVQ(d,e){this.a=d
this.b=e},
bVR:function bVR(){},
bVS:function bVS(d){this.a=d},
bVW:function bVW(d,e){this.a=d
this.b=e},
bVP:function bVP(d){this.a=d},
bw_:function bw_(d,e){this.b=d
this.a=e},
fhA:function fhA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fhB:function fhB(d,e,f){this.a=d
this.b=e
this.c=f},
fhC:function fhC(d,e,f){this.a=d
this.b=e
this.c=f},
fhD:function fhD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhE:function fhE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhF:function fhF(){},
anG:function anG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anH:function anH(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qp$=f
_.MS$=g
_.aoV$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bVB:function bVB(){},
bVM:function bVM(d,e){this.a=d
this.b=e},
bVN:function bVN(d){this.a=d},
bVO:function bVO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVI:function bVI(){},
bVH:function bVH(d,e){this.a=d
this.b=e},
bVJ:function bVJ(d,e){this.a=d
this.b=e},
bVK:function bVK(){},
bVL:function bVL(d){this.a=d},
bVD:function bVD(d){this.a=d},
bVE:function bVE(d){this.a=d},
bVF:function bVF(d){this.a=d},
bVC:function bVC(d,e){this.a=d
this.b=e},
bVG:function bVG(d){this.a=d},
bmk:function bmk(d,e){this.b=d
this.a=e},
dx9:function dx9(){},
a3f:function a3f(d,e){this.a=d
this.b=e},
anC:function anC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anD:function anD(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qp$=e
_.MS$=f
_.aoV$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
bVn:function bVn(d){this.a=d},
bVm:function bVm(){},
bVl:function bVl(){},
bVf:function bVf(){},
bVg:function bVg(){},
bVk:function bVk(d,e,f){this.a=d
this.b=e
this.c=f},
bVj:function bVj(d){this.a=d},
bVh:function bVh(d,e){this.a=d
this.b=e},
bVi:function bVi(d){this.a=d},
blK:function blK(d,e){this.b=d
this.a=e},
aDt:function aDt(){},
bjh:function bjh(){},
aDv:function aDv(){},
bji:function bji(){},
aDw:function aDw(){},
bjj:function bjj(){},
uP(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ab(0,B.H,f.j(0.4),B.hS,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.m),u,u,u,u,B.PJ,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hzP(d,e,f,g,h,i,j){return new C.anE(i,h,d,j,e,f,g,null)},
a7M:function a7M(d,e){this.c=d
this.a=e},
blR:function blR(d){this.a=d},
tZ:function tZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVe:function bVe(d){this.a=d},
IX:function IX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Xd:function Xd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
boF:function boF(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e80:function e80(d,e){this.a=d
this.b=e},
e81:function e81(d){this.a=d},
e82:function e82(d,e){this.a=d
this.b=e},
e7Z:function e7Z(d){this.a=d},
e8_:function e8_(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e7W:function e7W(d){this.a=d},
e7X:function e7X(d){this.a=d},
e7V:function e7V(d,e){this.a=d
this.b=e},
e83:function e83(d){this.a=d},
e84:function e84(d,e){this.a=d
this.b=e},
e85:function e85(d,e){this.a=d
this.b=e},
e86:function e86(d,e){this.a=d
this.b=e},
e89:function e89(d,e){this.a=d
this.b=e},
e8a:function e8a(d,e){this.a=d
this.b=e},
e8b:function e8b(d,e){this.a=d
this.b=e},
e8c:function e8c(d,e){this.a=d
this.b=e},
e8d:function e8d(d,e){this.a=d
this.b=e},
e8e:function e8e(d,e,f){this.a=d
this.b=e
this.c=f},
e8f:function e8f(d,e){this.a=d
this.b=e},
e8g:function e8g(d,e){this.a=d
this.b=e},
e87:function e87(d){this.a=d},
e88:function e88(d){this.a=d},
a15:function a15(d,e){this.a=d
this.b=e},
anE:function anE(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anF:function anF(d){var _=this
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
bVz:function bVz(d){this.a=d},
bVA:function bVA(d){this.a=d},
bVy:function bVy(d){this.a=d},
bVp:function bVp(d){this.a=d},
bVq:function bVq(d){this.a=d},
bVo:function bVo(d){this.a=d},
bVv:function bVv(d,e,f){this.a=d
this.b=e
this.c=f},
bVw:function bVw(d){this.a=d},
bVs:function bVs(d,e){this.a=d
this.b=e},
bVt:function bVt(d,e,f){this.a=d
this.b=e
this.c=f},
bVx:function bVx(){},
bVu:function bVu(d,e){this.a=d
this.b=e},
bVr:function bVr(d){this.a=d},
UT:function UT(d,e){this.c=d
this.a=e},
anB:function anB(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bV_:function bV_(d){this.a=d},
bV0:function bV0(d){this.a=d},
bVa:function bVa(){},
bV9:function bV9(d,e,f){this.a=d
this.b=e
this.c=f},
bV4:function bV4(d,e){this.a=d
this.b=e},
bV3:function bV3(d,e){this.a=d
this.b=e},
bV5:function bV5(d){this.a=d},
bV6:function bV6(d,e){this.a=d
this.b=e},
bV7:function bV7(d,e){this.a=d
this.b=e},
bV2:function bV2(d,e){this.a=d
this.b=e},
bV8:function bV8(d,e,f){this.a=d
this.b=e
this.c=f},
bV1:function bV1(d,e){this.a=d
this.b=e},
iyt(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.akr(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fSH(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("X<1>"),q=q.k("cP<1,o>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zQ)m.push(l===D.xk?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cF(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cF(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jb(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jb(h,a2,a2)-A.jb(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cP(new A.X(a4,new C.fSF(u,f),p),new C.fSG(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aJ(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aJ(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.av(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iyu(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akr(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fSM(v,e)
q=new C.fSK(v)
p=A.S(w,x.S)
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
p.n(0,s.a,d)}}d=p.$ti.k("b9<2>")
d=A.d8(new A.b9(p,d),d.k("M.E"))
n=A.B(d,A.a3(d).k("ck.E"))
B.d.fg(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eT(l,new C.fSL(p,m));k.B();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aJ(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
iiU(d,e,f,g){var w,v,u=C.iyv(d,e)
if(u<=0||f.length<=u)return new A.agO(!1,D.EA,f)
if(g.q(0,e.a))return new A.agO(!1,D.EA,f)
w=A.T(f).c
v=A.cJ(f,0,A.dx(u,"count",x.S),w).de(0)
return new A.agO(!0,A.cJ(f,u,null,w).de(0),v)},
iiV(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.akr(d3),d2=d1.length
if(d2===0)return D.hST
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c0(0,t.a,new C.dml(t))}s=new C.dmC(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dmu(r)
for(p=new A.ds(v,v.r,v.e);p.B();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dmt(r)
l=A.S(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.B();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.bX(l.c0(0,k,new C.dmm()),o)}h=new C.dms(s)
g=new C.dmr(l,r)
p=v.$ti.k("b9<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.b9(v,p),new C.dmn(h),o),o.k("M.E"))
e=f.length===0?new A.b9(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.i
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.dmA(new C.dmw(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.ganT(a2);o.B();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ez([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nU(J.dO(i==null?B.M:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dmk(a2,new C.dmB(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.ds(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.B();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cv<1>")
d2=A.B(new A.cv(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.H5(o,new A.m(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lp(c5.a,new A.m(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.B(new A.cv(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dmo(c6,b4))
for(d2=new A.ch(a4,a4.$ti.k("ch<1,2>")).gae(0),w=x.g;d2.B();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aP(c7.b);j.B();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.m(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eT(j,new C.dmp(c8));i.B();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dmq())
c6.push(new C.aMQ(new A.m(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bjn(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hPH(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hJ7(d,e,f,g,h,i,j,k,l,m,n){return new C.a1j(k,f,j,e,l,n,m,d,g,h,i,null)},
aFu(d,e,f,g,h,i,j){return new C.bna(i,d,e,f,j,h,g,null)},
asM:function asM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aH4:function aH4(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e9G:function e9G(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9J:function e9J(d,e){this.a=d
this.b=e},
e9K:function e9K(d){this.a=d},
e9E:function e9E(d,e){this.a=d
this.b=e},
e9H:function e9H(d){this.a=d},
e9M:function e9M(d){this.a=d},
e9L:function e9L(d,e){this.a=d
this.b=e},
asG:function asG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aH1:function aH1(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e96:function e96(d){this.a=d},
e94:function e94(d){this.a=d},
e95:function e95(d){this.a=d},
e97:function e97(d,e){this.a=d
this.b=e},
e91:function e91(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8t:function e8t(d){this.a=d},
e8u:function e8u(d,e){this.a=d
this.b=e},
e8L:function e8L(d){this.a=d},
e8J:function e8J(d){this.a=d},
e8K:function e8K(d,e){this.a=d
this.b=e},
e8M:function e8M(d){this.a=d},
e8N:function e8N(d,e){this.a=d
this.b=e},
e90:function e90(d,e){this.a=d
this.b=e},
e8I:function e8I(d){this.a=d},
e8H:function e8H(d){this.a=d},
e8G:function e8G(d,e){this.a=d
this.b=e},
e8Y:function e8Y(){},
e8Z:function e8Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e8X:function e8X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e8R:function e8R(d){this.a=d},
e8S:function e8S(d,e,f){this.a=d
this.b=e
this.c=f},
e8Q:function e8Q(d,e){this.a=d
this.b=e},
e8T:function e8T(d,e){this.a=d
this.b=e},
e8O:function e8O(d,e){this.a=d
this.b=e},
e8P:function e8P(){},
e8U:function e8U(d,e){this.a=d
this.b=e},
e8V:function e8V(d){this.a=d},
e8W:function e8W(d,e){this.a=d
this.b=e},
e9_:function e9_(d,e){this.a=d
this.b=e},
e8h:function e8h(d,e){this.a=d
this.b=e},
e8i:function e8i(d,e){this.a=d
this.b=e},
e99:function e99(d,e,f){this.a=d
this.b=e
this.c=f},
e93:function e93(d,e,f){this.a=d
this.b=e
this.c=f},
e92:function e92(d){this.a=d},
e8j:function e8j(d){this.a=d},
e8k:function e8k(d){this.a=d},
e8l:function e8l(){},
e8m:function e8m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8q:function e8q(d,e){this.a=d
this.b=e},
e8p:function e8p(d,e){this.a=d
this.b=e},
e8o:function e8o(d){this.a=d},
e8r:function e8r(d,e){this.a=d
this.b=e},
e8n:function e8n(d){this.a=d},
e98:function e98(d){this.a=d},
e8D:function e8D(){},
e8E:function e8E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8C:function e8C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8y:function e8y(d,e,f){this.a=d
this.b=e
this.c=f},
e8x:function e8x(d,e,f){this.a=d
this.b=e
this.c=f},
e8v:function e8v(d,e){this.a=d
this.b=e},
e8z:function e8z(d){this.a=d},
e8A:function e8A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8w:function e8w(d,e){this.a=d
this.b=e},
e8B:function e8B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8F:function e8F(d,e){this.a=d
this.b=e},
e9g:function e9g(){},
e9h:function e9h(d,e){this.a=d
this.b=e},
e9i:function e9i(d){this.a=d},
e9j:function e9j(d,e){this.a=d
this.b=e},
e9c:function e9c(d){this.a=d},
e9a:function e9a(d,e){this.a=d
this.b=e},
e9d:function e9d(d,e){this.a=d
this.b=e},
e9e:function e9e(d,e){this.a=d
this.b=e},
e9f:function e9f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9k:function e9k(d){this.a=d},
e9b:function e9b(d){this.a=d},
e8s:function e8s(d){this.a=d},
bjl:function bjl(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dmi:function dmi(d){this.a=d},
dmh:function dmh(d,e){this.a=d
this.b=e},
dmj:function dmj(d){this.a=d},
dmg:function dmg(d,e){this.a=d
this.b=e},
fSH:function fSH(d,e){this.a=d
this.b=e},
fSI:function fSI(d){this.a=d},
fSJ:function fSJ(){},
fSF:function fSF(d,e){this.a=d
this.b=e},
fSG:function fSG(){},
fSM:function fSM(d,e){this.a=d
this.b=e},
fSN:function fSN(d){this.a=d},
fSO:function fSO(){},
fSK:function fSK(d){this.a=d},
fSL:function fSL(d,e){this.a=d
this.b=e},
Lp:function Lp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
H5:function H5(d,e){this.a=d
this.b=e},
bjn:function bjn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dml:function dml(d){this.a=d},
dmC:function dmC(d){this.a=d},
dmu:function dmu(d){this.a=d},
dmv:function dmv(){},
dmt:function dmt(d){this.a=d},
dmm:function dmm(){},
dms:function dms(d){this.a=d},
dmr:function dmr(d,e){this.a=d
this.b=e},
dmn:function dmn(d){this.a=d},
dmw:function dmw(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dmx:function dmx(d){this.a=d},
dmy:function dmy(d){this.a=d},
dmz:function dmz(){},
dmA:function dmA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dmB:function dmB(){},
dmk:function dmk(d,e,f,g,h,i,j,k,l,m){var _=this
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
dmo:function dmo(d,e){this.a=d
this.b=e},
dmp:function dmp(d){this.a=d},
dmq:function dmq(){},
aMQ:function aMQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjo:function bjo(d,e){this.b=d
this.a=e},
dmD:function dmD(){},
dmE:function dmE(d){this.a=d},
dmF:function dmF(d){this.a=d},
dmG:function dmG(){},
bnb:function bnb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bio:function bio(d,e){this.b=d
this.a=e},
bBo:function bBo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fxw:function fxw(d){this.a=d},
bqz:function bqz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f7i:function f7i(d){this.a=d},
f7h:function f7h(d,e){this.a=d
this.b=e},
a1j:function a1j(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aFs:function aFs(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dCW:function dCW(d,e){this.a=d
this.b=e},
dCV:function dCV(d){this.a=d},
dCT:function dCT(d){this.a=d},
dCU:function dCU(d){this.a=d},
dD4:function dD4(d){this.a=d},
dD5:function dD5(d){this.a=d},
dD3:function dD3(d,e){this.a=d
this.b=e},
dD6:function dD6(){},
dD9:function dD9(d){this.a=d},
dD2:function dD2(d,e){this.a=d
this.b=e},
dD8:function dD8(){},
dDa:function dDa(d){this.a=d},
dD1:function dD1(d,e){this.a=d
this.b=e},
dDb:function dDb(d){this.a=d},
dD0:function dD0(d){this.a=d},
dDc:function dDc(d){this.a=d},
dD_:function dD_(d){this.a=d},
dDd:function dDd(d){this.a=d},
dCZ:function dCZ(d){this.a=d},
dDe:function dDe(d){this.a=d},
dCY:function dCY(d){this.a=d},
dDf:function dDf(d){this.a=d},
dCX:function dCX(d,e){this.a=d
this.b=e},
dD7:function dD7(d){this.a=d},
afE:function afE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bna:function bna(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afD:function afD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bn9:function bn9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dDg:function dDg(d){this.a=d},
dDh:function dDh(d,e){this.a=d
this.b=e},
aFt:function aFt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLS:function aLS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afF:function afF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dDq:function dDq(d){this.a=d},
H1:function H1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hDT(d){var w=d.cK,v=x.N
return w.j2(w,new C.cit(),v,v)},
ia5(d){var w=d.bF
if(w>=0)return w
return 5},
hDV(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hDT(d).h(0,v)
if(w==null||w.length===0)return null
return A.bf(w)},
hDU(d,e){var w=C.hDV(d,e)
if(w!=null&&w.cb(new A.W(Date.now(),0,!1)))return!0
return!1},
ia6(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a0(C.hDT(d),w,w)
u=C.hDV(d,e)
t=u!=null&&u.cb(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bL(A.dw(30,0,0,0,0,0).a).aa().ag())
d.cK=v},
b3B(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b3B=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.m_(t,B.Ky),$async$b3B)
case 3:if(l){u=!0
w=1
break}u=A.lz(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ky,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3B,v)},
cit:function cit(){},
ia3(){var w,v=$.oh(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.ho(u)},
JT(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$JT)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_family_tree_backup_codes_v1",null,!1,B.bM),$async$JT)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ad(m)
$.an.$1("[family tree sync codes] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JT,v)},
a9v(d){return C.ia4(d)},
ia4(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a9v=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$a9v)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i1("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cZ,null),$async$a9v)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ad(p)
$.an.$1("[family tree sync codes] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a9v,v)},
cis(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cis=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JT(),$async$cis)
case 3:t=m.ik(f),t=t.gae(t),s=x.f
case 4:if(!t.B()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a1(q)
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
return A.i($async$cis,v)},
P_(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$P_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cis(d),$async$P_)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JT(),$async$P_)
case 6:s=f
r=J.a1(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dE(A.a0(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a9v(s),$async$P_)
case 9:case 8:u=t
w=1
break
case 5:n=C.ia3()
w=10
return A.b(C.JT(),$async$P_)
case 10:s=f
J.aL(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a9v(s),$async$P_)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P_,v)},
b3A(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b3A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JT(),$async$b3A)
case 3:t=f
for(s=J.dy(t),r=s.gdW(t),r=r.de(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a9v(t),$async$b3A)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b3A,v)},
a9w(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9w=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.asL(d,e),$async$a9w)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.P_(d),$async$a9w)
case 7:w=4
break
case 5:w=8
return A.b(C.b3A(d),$async$a9w)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9w,v)},
asF(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$asF=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.asL(f,e),$async$asF)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ce(),$async$asF)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JT(),$async$asF)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a1(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asF,v)},
b3z(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b3z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ce(),$async$b3z)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JT(),$async$b3z)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a1(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3z,v)},
ia7(){var w,v=$.oh(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.ho(u)},
asI(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$asI)
case 3:if(!g){u=null
w=1
break}t=C.ia7()
w=4
return A.b(A.Xe(),$async$asI)
case 4:s=g
r=B.e3.aL(B.U.au(d.f7(),null))
r=B.cS.gcq().aL(r)
q=e?999:2
J.aL(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a9x(s),$async$asI)
case 5:p=e?999:2
u=new A.a2v("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asI,v)},
asH(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$asH=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Xe(),$async$asH)
case 3:p=a0
o=J.a1(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a1(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.h.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b3z(J.k(l==null?"":l),j),$async$asH)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cJ(0,B.cM.aL(t))
s=C.hDW(r)}catch(f){q=A.ad(f)
$.an.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dE(A.a0(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a9x(p),$async$asH)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asH,v)},
hDW(d){var w,v,u,t,s=null
try{w=B.U.aN(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.ia9(A.a0(w,x.N,x.z))
return u}catch(t){v=A.ad(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
hml(d){var w=0,v=A.j(x.m),u,t,s
var $async$hml=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.asH(t[1])
w=1
break}u=null
w=1
break}u=C.hDW(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hml,v)},
ia9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cL(v,x.f)
u=A.ct(u,new C.civ(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.ciw(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bf(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ik(p),t=t.gae(t),o=x.B;t.B();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cL(l,u)
n=A.ct(n,new C.cix(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.ciy(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.asJ(h,w,s,r,q)},
asL(d,e){var w=0,v=A.j(x.y),u,t
var $async$asL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OQ(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BI(d),$async$asL)
case 3:u=t.cM(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asL,v)},
ciE(d){var w=0,v=A.j(x.bC),u,t,s
var $async$ciE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BI(d),$async$ciE)
case 3:t=s.b8(f,new C.ciF(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.ciG())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ciE,v)},
Xf(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Xf=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.asL(e,d),$async$Xf)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.P_(e),$async$Xf)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BI(e),$async$Xf)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dO(r,new C.ciC(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a1(r)
if(t.gar(r)){u=null
w=1
break}t=t.dS(r,new C.ciD(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Mh(e,o),$async$Xf)
case 14:n=i
if(J.cM(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.asJ(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xf,v)},
b3E(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b3E=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xf(d,e,f,g),$async$b3E)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aD(t,s,"_")
r=q.a
u=A.HM(A.Ll(q.f7(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3E,v)},
b3D(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b3D=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xf(d,e,f,g),$async$b3D)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.asI(r,f),$async$b3D)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aJP(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3D,v)},
Xg(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Xg=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hml(a0),$async$Xg)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.asF(g.a,d,e,f,s,r),$async$Xg)
case 6:if(!a2){if(r)throw A.Y(A.be("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.be("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bGY(e,j),$async$Xg)
case 12:case 11:w=13
return A.b(C.ak9(e,j,s),$async$Xg)
case 13:h=n.h(0,i)
w=h!=null&&J.cM(h)?14:15
break
case 14:w=16
return A.b(C.BS(e,i,h),$async$Xg)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.buk(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xg,v)},
asJ:function asJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ciA:function ciA(){},
ciB:function ciB(){},
ciz:function ciz(){},
civ:function civ(){},
ciw:function ciw(){},
cix:function cix(){},
ciy:function ciy(){},
ciF:function ciF(){},
ciG:function ciG(){},
ciC:function ciC(d){this.a=d},
ciD:function ciD(d){this.a=d},
hvW(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fc(null,x.H)
return A.he(d,new C.asK(w,e,g,i,f,h,null),!0,null,x.H)},
dmf(d,e,f,g,h,i,j,k){return new C.bjk(i,e,k,j,g,f,h,d,null)},
asK:function asK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aH3:function aH3(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e9t:function e9t(d){this.a=d},
e9u:function e9u(d,e,f){this.a=d
this.b=e
this.c=f},
e9y:function e9y(d,e){this.a=d
this.b=e},
e9z:function e9z(d){this.a=d},
e9q:function e9q(d){this.a=d},
e9r:function e9r(d,e){this.a=d
this.b=e},
e9s:function e9s(d,e){this.a=d
this.b=e},
e9x:function e9x(d){this.a=d},
e9w:function e9w(d,e){this.a=d
this.b=e},
e9v:function e9v(){},
e9B:function e9B(d){this.a=d},
e9C:function e9C(d,e){this.a=d
this.b=e},
e9A:function e9A(d,e){this.a=d
this.b=e},
dmH:function dmH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjm:function bjm(d,e,f){this.d=d
this.e=e
this.a=f},
aeT:function aeT(d,e,f){this.c=d
this.d=e
this.a=f},
bjk:function bjk(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bjp:function bjp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1D:function a1D(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aH2:function aH2(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e9l:function e9l(d,e){this.a=d
this.b=e},
e9m:function e9m(d){this.a=d},
e9n:function e9n(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9p:function e9p(d){this.a=d},
a1E:function a1E(d){this.a=d},
boG:function boG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e9D:function e9D(d,e){this.a=d
this.b=e},
b26(d,e){return new C.b25(d,e,null)},
b25:function b25(d,e,f){this.c=d
this.d=e
this.a=f},
iB0(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iJ3(d){return A.bV(B.L,null,new C.haA(new C.uA(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hFZ(d,e){return new C.avQ(e,d,null)},
aUx(d,e,f,g,h,i,j){var w=C.iB0(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a8y(w,!0,null),null),B.ap)
return A.aTR(e,B.c0,f,g,h,i,j)},
mp:function mp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8y:function a8y(d,e,f){this.c=d
this.d=e
this.a=f},
bok:function bok(d,e){var _=this
_.e=_.d=$
_.dt$=d
_.bd$=e
_.c=_.a=null},
dVo:function dVo(d){this.a=d},
dVp:function dVp(){},
dVq:function dVq(d,e){this.a=d
this.b=e},
boj:function boj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
haA:function haA(d){this.a=d},
haz:function haz(d,e){this.a=d
this.b=e},
hay:function hay(d,e){this.a=d
this.b=e},
hax:function hax(d,e){this.a=d
this.b=e},
avQ:function avQ(d,e,f){this.c=d
this.d=e
this.a=f},
csr:function csr(d,e){this.a=d
this.b=e},
aPi:function aPi(){},
iIO(d){var w=null
return A.cf(w,w,!0,w,new C.h9X(),d,w,!0,!0,x.e2)},
iK5(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.hhQ(h,g,f,e),d,w,!0,!0,x.N)},
iIQ(d,e){var w=null
return A.cf(w,w,!0,w,new C.ha0(e),d,w,!0,!0,x.dY)},
iIP(d){var w=null
return A.cf(w,w,!0,w,new C.ha_(),d,w,!0,!0,x.c5)},
aXv:function aXv(d,e){this.a=d
this.b=e},
aXu:function aXu(d){this.a=d},
aVy:function aVy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h9X:function h9X(){},
hhQ:function hhQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ha0:function ha0(d){this.a=d},
ha_:function ha_(){},
a0g:function a0g(d,e){this.c=d
this.a=e},
aC9:function aC9(){var _=this
_.d=$
_.c=_.a=_.e=null},
ddL:function ddL(d){this.a=d},
ddM:function ddM(d){this.a=d},
ddK:function ddK(d,e){this.a=d
this.b=e},
ddN:function ddN(d){this.a=d},
ddO:function ddO(d){this.a=d},
a0f:function a0f(d){this.a=d},
aC8:function aC8(){this.d=$
this.c=this.a=null},
ddH:function ddH(d){this.a=d},
ddI:function ddI(d){this.a=d},
ddJ:function ddJ(d){this.a=d},
a_G:function a_G(d){this.a=d},
aAL:function aAL(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cKK:function cKK(){},
cKQ:function cKQ(d){this.a=d},
cKR:function cKR(d){this.a=d},
cKS:function cKS(d){this.a=d},
cKP:function cKP(){},
cKT:function cKT(d){this.a=d},
cKU:function cKU(d){this.a=d},
cKO:function cKO(){},
cKV:function cKV(d,e){this.a=d
this.b=e},
cKN:function cKN(d,e){this.a=d
this.b=e},
cKL:function cKL(d,e){this.a=d
this.b=e},
cKW:function cKW(d){this.a=d},
cKM:function cKM(){},
cKX:function cKX(d){this.a=d},
a3r:function a3r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bBg:function bBg(){this.d=$
this.c=this.a=null},
fx1:function fx1(d,e){this.a=d
this.b=e},
fx2:function fx2(d){this.a=d},
fx3:function fx3(d,e){this.a=d
this.b=e},
adU:function adU(d,e){this.a=d
this.b=e},
GR:function GR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bBe:function bBe(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fx_:function fx_(d,e){this.a=d
this.b=e},
aAE:function aAE(d,e){this.c=d
this.a=e},
bBf:function bBf(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fx0:function fx0(d){this.a=d},
bBd:function bBd(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aRq:function aRq(){},
aRr:function aRr(){},
bJ3(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.bb(u),s=B.n.D(B.h.S((u-t)*100),0,99),r=d<0?"-":"",q=A.of(B.n.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h8c(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aY(B.n.v(s),2,"0")
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.GI(A.cW(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aU9(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aU9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ie().lc(85,1280,B.f4),$async$aU9)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fB(),$async$aU9)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.hFY()
w=9
return A.b(C.csq(q,r),$async$aU9)
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
o=A.ad(l)
$.an.$1("[worksheets] pick photo failed: "+A.v(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aU9,v)},
aUv(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aUv=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.csn(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cM.aL(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HN(p,!0,null,o).d9(0,B.fP),$async$aUv)
case 9:n=a1
w=10
return A.b(n.lg(),$async$aUv)
case 10:m=a1
w=11
return A.b(m.b.hr(B.hq),$async$aUv)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eX(B.dM.gaS(l))
k="data:image/png;base64,"+B.cS.gcq().aL(i)
if(J.aa(k)<=r){u=k
w=1
break}o=B.h.S(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ad(f)
$.an.$1("[worksheets] thumbnail shrink failed: "+A.v(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aUv,v)},
h8c:function h8c(){},
uA:function uA(d){this.a=d},
avP:function avP(d,e,f){this.c=d
this.d=e
this.a=f},
aID:function aID(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f4s:function f4s(d,e){this.a=d
this.b=e},
f4j:function f4j(d){this.a=d},
f4k:function f4k(d){this.a=d},
f4q:function f4q(d,e){this.a=d
this.b=e},
f4p:function f4p(d,e){this.a=d
this.b=e},
f4m:function f4m(d,e){this.a=d
this.b=e},
f4l:function f4l(d,e){this.a=d
this.b=e},
f4n:function f4n(d){this.a=d},
f4o:function f4o(d,e){this.a=d
this.b=e},
f4r:function f4r(d,e){this.a=d
this.b=e},
f4e:function f4e(d,e){this.a=d
this.b=e},
f4i:function f4i(d){this.a=d},
f4h:function f4h(d,e){this.a=d
this.b=e},
f4g:function f4g(d){this.a=d},
f4t:function f4t(d,e){this.a=d
this.b=e},
f4u:function f4u(d,e){this.a=d
this.b=e},
f4f:function f4f(d,e){this.a=d
this.b=e},
hU2(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h8d(d,e,f){var w=0,v=A.j(x.N),u
var $async$h8d=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.U.au(C.hU2(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8d,v)},
bJ5(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bJ5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h8d(!0,d,e),$async$bJ5)
case 4:w=3
return A.b(r.avN(g,d,e.a),$async$bJ5)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e3.aL(B.U.au(C.hU2(d,e,null),null))
u="NGMY_WS:"+B.l1.gcq().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJ5,v)},
hKz(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hvx(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.dc(s,"NGMYWSSYNC2|"))return!0
if(J.dc(s,"NGMY_WS:"))return!0
if(J.eG(s,t))return!0
if(J.dc(s,"{"))try{w=B.U.aN(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iGJ(d){var w,v,u,t=C.hKz(d)
if(t==null)return null
if(C.hvx(t))return t
w=B.a.c9(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.hvx(v))return v}u=B.a.c9(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.hvx(v))return v}return null},
hvw(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.dc(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.dc(q,"NGMY_WS:")){v=B.cg.cJ(0,B.cM.aL(J.nn(q,8)))
w=t.a(B.U.aN(0,v,r))}else w=t.a(B.U.aN(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hp6(A.a0(u,x.N,x.z))
return t}catch(s){return r}},
bJ4(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bJ4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.avM(t[1]),$async$bJ4)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hvw(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hvw(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJ4,v)},
hvv(d){var w=B.n.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.m4(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bIy(){var w=0,v=A.j(x.o),u,t
var $async$bIy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HX(),$async$bIy)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hvw(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIy,v)},
hVi(d,e,f,g){return A.bV(B.L,null,new C.hhD(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hhD:function hhD(d,e,f){this.a=d
this.b=e
this.c=f},
ag_:function ag_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f4w:function f4w(d,e){this.a=d
this.b=e},
f4x:function f4x(d,e){this.a=d
this.b=e},
f4y:function f4y(d,e){this.a=d
this.b=e},
f4z:function f4z(d,e){this.a=d
this.b=e},
f4v:function f4v(d){this.a=d},
avJ:function avJ(d,e,f){this.c=d
this.d=e
this.a=f},
bq4:function bq4(){var _=this
_.c=_.a=_.e=_.d=null},
f49:function f49(d,e){this.a=d
this.b=e},
f4a:function f4a(d){this.a=d},
f4b:function f4b(d){this.a=d},
avO:function avO(d){this.a=d},
aIC:function aIC(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f4d:function f4d(d){this.a=d},
f4c:function f4c(d){this.a=d},
idz(d,e,f,g,h){return new C.PK(h,g,d,e,f,null)},
aND:function aND(d,e){this.a=d
this.b=e},
PK:function PK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIE:function aIE(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f4W:function f4W(){},
f4S:function f4S(d,e){this.a=d
this.b=e},
f4T:function f4T(d){this.a=d},
f4D:function f4D(d){this.a=d},
f4B:function f4B(d){this.a=d},
f4C:function f4C(d){this.a=d},
f4M:function f4M(d,e){this.a=d
this.b=e},
f4J:function f4J(d,e){this.a=d
this.b=e},
f4K:function f4K(d,e){this.a=d
this.b=e},
f4L:function f4L(d,e,f){this.a=d
this.b=e
this.c=f},
f4H:function f4H(d,e,f){this.a=d
this.b=e
this.c=f},
f4F:function f4F(d){this.a=d},
f4G:function f4G(d){this.a=d},
f4I:function f4I(d){this.a=d},
f4Z:function f4Z(d){this.a=d},
f4Y:function f4Y(d){this.a=d},
f5_:function f5_(d){this.a=d},
f4X:function f4X(d){this.a=d},
f4A:function f4A(d){this.a=d},
f4E:function f4E(d,e){this.a=d
this.b=e},
f4V:function f4V(d,e){this.a=d
this.b=e},
f4U:function f4U(d,e){this.a=d
this.b=e},
f4P:function f4P(d){this.a=d},
f4Q:function f4Q(d){this.a=d},
f4R:function f4R(d,e){this.a=d
this.b=e},
f4O:function f4O(d,e){this.a=d
this.b=e},
f4N:function f4N(d,e,f){this.a=d
this.b=e
this.c=f},
bD2:function bD2(){},
Bv(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aD(v,w,"_")},
aiD(d,e,f){return C.iug(d,e,f)},
iug(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aiD=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$aiD)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ad(o)
$.an.$1("[worksheets] setString failed for "+e+": "+A.v(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiD,v)},
aiC(d,e){return C.iuf(d,e)},
iuf(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aiC=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$aiC)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ad(q)
$.an.$1("[worksheets] remove failed for "+e+": "+A.v(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aiC,v)},
it4(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.UC(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bFR(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bFR=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b6V(q),$async$bFR)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aUv(q,!1),$async$bFR)
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
return A.i($async$bFR,v)},
i0F(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rO(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rO(p,J.k(u==null?"":u),1,o,q)},
hp6(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cL(s,x.f)
w=A.ct(w,new C.cK2(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cK3(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bf(J.k(t==null?"":t))
return new C.m4(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
iyp(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xk
case"female":case"f":return D.p2
default:return D.zQ}},
hQf(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hzQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iyp(v==null?j:J.k(v))
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
m=m==null?j:B.h.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.h.M(k)
return new C.id(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
iyr(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Q5
case"viewer":return D.le
default:return D.vs}},
iys(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HO(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aT8(d,e){return B.a.i(e.toLowerCase())===C.HO(d,e)&&d.y!==D.le},
uQ(d,e){var w,v=d.y
if(v===D.le)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HO(d,e))return!0
if(v===D.Q5)return!0
v=d.e
return new A.O(v,A.hvD(),A.T(v).k("O<1,o>")).q(0,w)},
ixM(d){return J.dO(d,new C.fRz()).gI(0)},
hio(d){var w=0,v=A.j(x.y),u,t
var $async$hio=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BI(d),$async$hio)
case 3:u=t.rJ(f,new C.hip(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hio,v)},
bGY(d,e){var w=0,v=A.j(x.H),u,t
var $async$bGY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BI(d),$async$bGY)
case 3:t=g
if(J.rJ(t,new C.fP3(e))){w=1
break}if(C.ixM(t)>=2)throw A.Y(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bGY,v)},
anL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cL(h,x.f)
w=A.ct(w,new C.bW0(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bW1(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bW2(),x.N)
t=A.B(w,w.$ti.k("aj.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bf(J.k(q==null?"":q))
if(q==null)q=new A.W(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.h.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.iyr(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aP(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bN)
l=x.f
k=x.N
j=x.z
while(f.B()){i=f.gP(f)
if(l.b(i))m.push(A.a0(i,k,j))}return new C.lh(w,v,s,!r,t,g,q,p,o,n,m)},
hQu(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.av(v,0,8)},
E2(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$E2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ts(d),$async$E2)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$E2)
case 4:t=f
w=5
return A.b(t.a8M(0),$async$E2)
case 5:w=6
return A.b(C.fF_(t,l),$async$E2)
case 6:s=f
if(J.cM(s)){u=s
w=1
break}r=B.a.ga_(B.a.i(l.toLowerCase()))
q=t.a
p=J.a1(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hLd(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pz(l,n),$async$E2)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.ga_(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hLd(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pz(l,n),$async$E2)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$E2,v)},
fF_(d,e){return C.iqh(d,e)},
iqh(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fF_=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a1(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bv(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.U.aN(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aP(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.B()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.aa(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bv(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.U.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hp6(A.a0(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bv(a9)+"_"+n))
i=C.it4(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b6V(h),$async$fF_)
case 17:g=b1
if(g!=null){i=i.UC(g)
p=!0}case 16:J.bX(q,i)
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
case 8:J.TC(q,new C.fF0())
if(p&&J.aa(q)!==0)C.pz(a9,q)
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
return A.i($async$fF_,v)},
bHr(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bHr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ts(d),$async$bHr)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.E2(r),$async$bHr)
case 4:t=p.aP(g)
case 5:if(!t.B()){w=6
break}s=t.gP(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHr,v)},
hLd(d){var w,v,u,t
try{w=B.U.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cL(w,x.f)
v=A.ct(v,new C.fAu(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fAv(),u),u.k("M.E"))
B.d.b_(v,new C.fAw())
return v}catch(t){v=A.a([],x.D)
return v}},
pz(d,e){return C.iID(d,e)},
iID(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pz=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Ts(b2),$async$pz)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pz)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bv(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.U.aN(0,p,null)),new C.h9L(),a2).fG(0)
a2=J.b8(b3,new C.h9M(),a2).c1(0,new C.h9N())
n=A.d8(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e8(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.B()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eG(n,m)?17:18
break
case 17:a5=C.Bv(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aaS(l),$async$pz)
case 19:t=21
a5=C.Bv(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.U.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aaS(a5==null?null:J.k(a5)),$async$pz)
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
return A.b(C.aiC(r,"ngmy_worksheet_item_v3_"+C.Bv(a8)+"_"+m),$async$pz)
case 29:w=30
return A.b(C.aiC(r,"ngmy_worksheet_thumb_v3_"+C.Bv(a8)+"_"+m),$async$pz)
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
case 14:case 10:a2=J.cK(b3),a3=a2.gae(b3)
case 31:if(!a3.B()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bFR(h),$async$pz)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aiD(r,"ngmy_worksheet_thumb_v3_"+C.Bv(a8)+"_"+a4,f),$async$pz)
case 40:g=i.UC(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aiC(r,"ngmy_worksheet_thumb_v3_"+C.Bv(a8)+"_"+a4),$async$pz)
case 41:g=i.UC(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aiC(r,"ngmy_worksheet_thumb_v3_"+C.Bv(a8)+"_"+a4),$async$pz)
case 42:case 34:a4=i.a
w=43
return A.b(C.aiD(r,"ngmy_worksheet_item_v3_"+C.Bv(a8)+"_"+a4,B.U.au(g.ak(),null)),$async$pz)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.bX(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aiD(r,"ngmy_worksheets_index_v3_"+C.Bv(a8),B.U.au(q,null)),$async$pz)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eW(b3,new C.h9O(q))
a4=a3.$ti.k("cP<1,a9<o,@>>")
a7=A.B(new A.cP(a3,new C.h9P(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.aiD(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.ga_(B.a.i(a8.toLowerCase()))),B.U.au(a0,null)),$async$pz)
case 45:w=46
return A.b(J.i_K(r),$async$pz)
case 46:if(a2.gco(b3)&&J.aa(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.ad(b1)
$.an.$1("[worksheets] saveWorksheetProjects error: "+A.v(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$pz,v)},
ML(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$ML=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.E2(d),$async$ML)
case 3:t=g
s=J.cK(t)
r=s.bn(t,new C.hin(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.pz(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ML,v)},
bHd(d,e){var w=0,v=A.j(x.H),u
var $async$bHd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.E2(d),$async$bHd)
case 2:u=g
J.mH(u,new C.fS2(e))
w=3
return A.b(C.pz(d,u),$async$bHd)
case 3:return A.h(null,v)}})
return A.i($async$bHd,v)},
HQ(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HQ)
case 3:l=f
k=A.a([],x._)
j=B.a.ga_(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.U.aN(0,i,null)
if(x.j.b(t)){j=J.cL(t,x.f)
j=A.ct(j,new C.fVD(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fVE(),s),s.k("M.E"))
B.d.b_(r,new C.fVF())
k=r}}catch(h){}w=4
return A.b(C.fBj(d),$async$HQ)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.iqE(k,p,d)
j=A.T(o)
s=j.k("O<1,a9<o,@>>")
s=A.B(new A.O(o,new C.fVG(),s),s.k("aj.E"))
n=B.U.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Sy(d,o),$async$HQ)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fVH(d),j),j.k("M.E"))
if(m.length!==0)C.aSV(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HQ,v)},
h9w(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h9w=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sy(d,e),$async$h9w)
case 3:t=J.dO(e,new C.h9x(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aSV(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h9w,v)},
a59(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a59=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a59)
case 2:n=g
m=B.a.ga_(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.U.aN(0,l,null)
if(x.j.b(u)){m=J.cL(u,x.f)
m=A.ct(m,new C.hii(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hij(),t),t.k("M.E"))
o=s}}catch(k){}q=J.nM(o,new C.hik(e))
if(B.a.i(e.x).length===0&&C.uQ(e,d)){m=B.a.i(d.toLowerCase())
p=e.aIj(e.y===D.le?D.le:D.vs,m)}else p=e
if(q===-1)J.lt(o,0,p)
else J.aL(o,q,p)
w=3
return A.b(C.Sy(d,o),$async$a59)
case 3:w=C.uQ(p,d)?4:5
break
case 4:w=6
return A.b(C.aSU(C.HO(p,d),p),$async$a59)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a59,v)},
aT6(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aT6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HQ(d),$async$aT6)
case 2:u=g
t=J.cK(u)
s=A.nU(t.eW(u,new C.fRK(e)))
t.br(u,new C.fRL(e))
w=3
return A.b(C.Sy(d,u),$async$aT6)
case 3:w=s!=null&&C.aT8(s,d)?4:5
break
case 4:w=6
return A.b(C.fAy(e),$async$aT6)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aT6,v)},
akr(d){var w=d.f,v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.hit(),v),v.k("M.E"))
return w},
hsO(d,e){var w,v=d.f,u=A.nU(new A.X(v,new C.fRe(e),A.T(v).k("X<1>")))
v=C.akr(d)
w=A.T(v).k("X<1>")
v=A.B(new A.X(v,new C.fRf(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fRg())
return v},
iyv(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hVm(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bn(C.hsO(d,u),new C.hhR(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iA1(d,e){var w
if(e==null||e.length===0)return 1
w=C.hsO(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fWu(),A.T(w).k("O<1,F>")).eL(0,B.yO)+1},
iIw(d){var w,v=C.akr(d)
if(v.length===0)return null
w=new A.X(v,new C.h9q(),A.T(v).k("X<1>"))
if(!w.gar(0))return w.gH(0)
return B.d.gH(v)},
iyq(d){return A.J(["id",d.a,"name",d.b,"gender",C.hQf(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
izX(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.K(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zQ?n:q.c
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
d=q.aIe(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cUQ(a1,w,a3.d,a2.y,s,a0,v)},
BI(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$BI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$BI)
case 3:q=f
p=B.a.ga_(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.U.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cL(t,x.f)
p=A.ct(p,new C.fVA(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fVB(),s),s.k("M.E"))
B.d.b_(p,new C.fVC())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BI,v)},
ak9(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ak9=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vs:D.le
a7=C.HO(b2,b3)
w=2
return A.b(C.BI(b1),$async$ak9)
case 2:a8=b5
a9=J.cK(a8)
b0=a9.bn(a8,new C.h9l(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bGY(b1,b2),$async$ak9)
case 5:case 4:if(b0===-1){u=b2.aIj(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
s=A.S(x.N,x.P)
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
i=i!==D.zQ?i:l.c
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
s.n(0,m,l.aIe(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b9<2>")
s=A.B(new A.b9(s,k),k.k("M.E"))
k=a5?D.vs:D.le
u=t.cUS(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Sy(b1,a8),$async$ak9)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aSU(B.a.i(b3.toLowerCase()),u),$async$ak9)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ak9,v)},
hLH(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("O<1,a9<o,@>>"),k=A.B(new A.O(m,C.hUq(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hLI(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("O<1,a9<o,@>>")
u=A.B(new A.O(u,C.hUq(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
io3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a1(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.anL(A.a0(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hvD(),A.T(j).k("O<1,o>")).c1(0,new C.fB5())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vs
else s=B.d.q(t,u)?D.Q5:D.le
return w.aIj(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.anL(A.a0(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cL(q,h)
h=A.ct(h,new C.fB6(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fB7(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fB8(),x.N).c1(0,new C.fB9())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vs
else s=B.d.q(t,u)?D.Q5:D.le
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bf(J.k(l==null?"":l))
if(l==null)l=new A.W(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.h.M(j)
if(j==null)j=0
return new C.lh(h,r,p,!m,t,o,l,j,v,s,B.co)},
fBj(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fBj=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.fBn()
h=x.N
g=x.z
w=7
return A.b(A.hc(A.a([A.mb("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bM),r.$2(A.mb("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bM),"collaborator"),r.$2(A.mb("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bM),"public")],x.cl),x.fO),$async$fBj)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.fV(l,o)
J.fV(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.aa(j)!==0)J.aL(m,j,k)}l=m
h=A.a3(l).k("b9<2>")
h=A.ct(new A.b9(l,h),new C.fBk(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fBl(),l),l.k("M.E"))
B.d.b_(l,new C.fBm())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ad(a1)
d=J.k(i)
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
h=$.an
if(l)h.$1("[family_trees] table missing \u2014 run supabase/family_trees_table.sql")
else h.$1("[family_trees] fetch error: "+A.v(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fBj,v)},
iqE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a1(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dS(e,new C.fFM(),v).c1(0,new C.fFN())
t=A.d8(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HO(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.le){m=q.e
m=!new A.O(m,A.hvD(),A.T(m).k("O<1,o>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.B();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.izX(l,v)
o=C.HO(k,w)
p=v.d
s.n(0,u,o===w?k.bi5(p,D.vs):k.bi5(p,v.y))}j=s.$ti.k("b9<2>")
j=A.B(new A.b9(s,j),j.k("M.E"))
B.d.b_(j,new C.fFO())
return j},
Sy(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Sy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$Sy)
case 2:u=g
t=B.a.ga_(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fIO(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.U.au(s,null)),$async$Sy)
case 3:return A.h(null,v)}})
return A.i($async$Sy,v)},
aSU(d,e){return C.iwb(d,e)},
iwb(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aSU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mE("family_trees",A.a([C.hLH(e,d)],p),null,B.cZ),$async$aSU)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mE("family_trees",A.a([C.hLI(e,d)],p),null,B.cZ),$async$aSU)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ad(n)
$.an.$1("[family_trees] upsert error: "+A.v(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSU,v)},
aSV(d,e){return C.iwc(d,e)},
iwc(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aSV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("O<1,a9<o,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fOh(d),n),m)
r=l
w=7
return A.b(A.mE("family_trees",r,null,B.cZ),$async$aSV)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fOi(d),n),m)
p=k
w=8
return A.b(A.mE("family_trees",p,null,B.cZ),$async$aSV)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ad(i)
$.an.$1("[family_trees] bulk upsert error: "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSV,v)},
fAy(d){return C.inc(d)},
inc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fAy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.T_("family_trees",A.J(["id",d],x.N,x.z),null,B.cZ),$async$fAy)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ad(p)
$.an.$1("[family_trees] delete error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fAy,v)},
rO:function rO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
m4:function m4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cK5:function cK5(){},
cK4:function cK4(){},
cK2:function cK2(){},
cK3:function cK3(){},
IW:function IW(d,e){this.a=d
this.b=e},
id:function id(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
anK:function anK(d,e){this.a=d
this.b=e},
fRz:function fRz(){},
hip:function hip(d){this.a=d},
fP3:function fP3(d){this.a=d},
lh:function lh(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bW4:function bW4(){},
bW3:function bW3(){},
bW0:function bW0(){},
bW1:function bW1(){},
bW2:function bW2(){},
fF0:function fF0(){},
fAu:function fAu(){},
fAv:function fAv(){},
fAw:function fAw(){},
h9L:function h9L(){},
h9M:function h9M(){},
h9N:function h9N(){},
h9O:function h9O(d){this.a=d},
h9P:function h9P(){},
hin:function hin(d){this.a=d},
fS2:function fS2(d){this.a=d},
fVD:function fVD(){},
fVE:function fVE(){},
fVF:function fVF(){},
fVG:function fVG(){},
fVH:function fVH(d){this.a=d},
h9x:function h9x(d){this.a=d},
hii:function hii(){},
hij:function hij(){},
hik:function hik(d){this.a=d},
fRK:function fRK(d){this.a=d},
fRL:function fRL(d){this.a=d},
hit:function hit(){},
fRe:function fRe(d){this.a=d},
fRf:function fRf(d,e){this.a=d
this.b=e},
fRg:function fRg(){},
hhR:function hhR(d){this.a=d},
fWu:function fWu(){},
h9q:function h9q(){},
fVA:function fVA(){},
fVB:function fVB(){},
fVC:function fVC(){},
h9l:function h9l(d){this.a=d},
fB5:function fB5(){},
fB6:function fB6(){},
fB7:function fB7(){},
fB8:function fB8(){},
fB9:function fB9(){},
fBn:function fBn(){},
fBo:function fBo(d){this.a=d},
fBk:function fBk(d){this.a=d},
fBl:function fBl(){},
fBm:function fBm(){},
fFM:function fFM(){},
fFN:function fFN(){},
fFO:function fFO(){},
fIO:function fIO(){},
fOh:function fOh(d){this.a=d},
fOi:function fOi(d){this.a=d},
cK6:function cK6(d,e){this.a=d
this.b=e},
cK7:function cK7(d,e){this.a=d
this.b=e},
aKM:function aKM(d,e,f){this.a=d
this.b=e
this.c=f},
bdh:function bdh(){this.b=this.a=0},
bdg:function bdg(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bBh:function bBh(){},
xH(d,e){var w,v
if(d==null)return""
w=d.bV()
v=""+w.gci()+"/"+w.gcB()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.aY(B.n.v(w.gnG()),2,"0")+":"+B.a.aY(B.n.v(w.gHx()),2,"0")},
ixi(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.c1(new A.m(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.U()
u=A.L()
u.r=v.gp(0)
a5.c2(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.hr[l]*a7*0.075
j=k-w
j=A.bx(new A.a4(j,u,j+t,s),new A.aQ(r,r))
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a4(k,p,k+o,n),new A.aQ(m,m))
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a4(w,u,s,u+t),new A.aQ(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a4(w,q,s,q+a7*0.045),new A.aQ(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.m(v*0.15,s)
f=new A.m(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a6(0,new A.m(s,a7*0.17)),O.aiB(F.tw,t))
s=g.a6(0,new A.m(s,a7*0.18))
q=A.L()
q.r=F.tw.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a6(0,new A.m(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.aiB(F.tw,t))
w=A.L()
w.r=F.tw.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.m(0,v)
a1=a7*0.22
if(b1===1){w=a0.a6(0,new A.m(0,-a1*0.12))
u=A.L()
u.r=F.mo.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.tw.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.c0(a0,a1)
u=A.L()
u.r=F.mo.gp(0)
a5.cR(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.c0(a0,a1)
u=A.L()
u.r=F.mo.gp(0)
a5.cR(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hr[l]
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=F.mo.gp(0)
a5.O(new A.m(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hr[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
k.c=1.6
k.r=B.br.gp(0)
k.d=B.bG
a5.ah(new A.m(m+q,p),new A.m(m+o,p),k)}else{k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=B.c.gp(0)
a5.O(new A.m(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.v.gp(0)
a5.O(new A.m(m+k*a1*0.06,p),r,j)}m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.hZ.j(0.5).gp(0)
a5.O(new A.m(0+n*0.62,w),u,m)}a5.cR(A.c1(a0.a6(0,new A.m(0,a1*0.5)).aI(0,new A.m(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.aiB(B.br,1.8))
a4.restore()},
idw(){var w,v=$.oh(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.ho(u)},
avK(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$avK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avK)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bM),$async$avK)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ad(m)
$.an.$1("[worksheet qr stash] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$avK,v)},
avL(d){return C.idx(d)},
idx(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$avL=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avL)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i1("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cZ,null),$async$avL)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ad(p)
$.an.$1("[worksheet qr stash] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$avL,v)},
avN(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$avN=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avN)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.idw()
w=4
return A.b(C.avK(),$async$avN)
case 4:r=h
q=B.a.i(e)
p=B.e3.aL(t)
J.aL(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcq().aL(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.avL(r),$async$avN)
case 5:u=new A.a2v("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avN,v)},
avM(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$avM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ce(),$async$avM)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.avK(),$async$avM)
case 4:q=f
p=J.a1(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a1(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.h.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=B.cg.cJ(0,B.cM.aL(t))}catch(h){r=A.ad(h)
$.an.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dE(A.a0(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.avL(q),$async$avM)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avM,v)},
hFY(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cW.aw(999999)},
idy(d){var w,v,u,t,s,r,q
try{w=A.BG(d)
if(w==null)return d
v=w
if(J.MR(v)>960||J.MQ(v)>960){s=v
r=J.MR(v)>=J.MQ(v)?960:null
v=A.SU(s,J.MQ(v)>J.MR(v)?960:null,B.J2,r)}s=v
u=A.Jh(82).zX(s,B.rD)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ad(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
csq(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$csq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.idy(e)
$.csm.n(0,s,t)
u=C.bJ7(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$csq,v)},
b6V(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b6V=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.dc(l,"data:image")){u=null
w=1
break}t=4
r=J.eG(l,",")?B.d.gal(J.mf(l,",")):l
q=B.cM.aL(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.hFY()
w=7
return A.b(C.csq(p,q),$async$b6V)
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
n=A.ad(k)
$.an.$1("[worksheet-thumb] persistDataUrl failed: "+A.v(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b6V,v)},
csn(d){var w=0,v=A.j(x.T),u,t,s
var $async$csn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.csp(s),$async$csn)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcq().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$csn,v)},
aaS(d){var w=0,v=A.j(x.H),u,t
var $async$aaS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hU3(d)
if(t==null){w=1
break}$.csm.X(0,t)
w=3
return A.b(C.bJ6(t),$async$aaS)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaS,v)},
bJ7(d,e){return C.iGM(d,e)},
iGM(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bJ7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aRI
w=7
return A.b(n==null?$.aRI=A.hrA():n,$async$bJ7)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mI(r,"thumbs","readwrite")
B.iW.mr(J.mG(p,"thumbs"),q,l)
w=8
return A.b(J.oY(p),$async$bJ7)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ad(k)
$.an.$1("[worksheet-thumb idb put] "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bJ7,v)},
bJ6(d){return C.iGK(d)},
iGK(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bJ6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aRI
w=7
return A.b(o==null?$.aRI=A.hrA():o,$async$bJ6)
case 7:r=f
q=J.mI(r,"thumbs","readwrite")
B.iW.H5(J.mG(q,"thumbs"),m)
w=8
return A.b(J.oY(q),$async$bJ6)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ad(l)
$.an.$1("[worksheet-thumb idb delete] "+A.v(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bJ6,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[85]
S=c[295]
Z=c[112]
Aa=c[294]
P=c[299]
A_=c[205]
T=c[66]
M=c[69]
Ab=c[271]
L=c[243]
A0=c[120]
U=c[156]
H=c[41]
E=c[259]
Ac=c[274]
V=c[139]
Ad=c[169]
A1=c[115]
Ae=c[105]
Af=c[107]
Ag=c[72]
Ah=c[270]
Ai=c[50]
Q=c[269]
Aj=c[293]
Ak=c[239]
N=c[97]
A2=c[93]
Al=c[212]
A3=c[165]
A4=c[217]
A5=c[255]
W=c[300]
A6=c[298]
Am=c[161]
An=c[296]
Ao=c[86]
G=c[297]
Ap=c[168]
Aq=c[155]
Ar=c[301]
A7=c[247]
As=c[40]
At=c[198]
Au=c[114]
Av=c[235]
X=c[286]
O=c[49]
F=c[131]
Aw=c[39]
I=c[138]
A8=c[119]
K=c[174]
Ax=c[121]
Y=c[83]
R=c[38]
Ay=c[117]
C=a.updateHolder(c[7],C)
D=c[292]
C.arl.prototype={}
C.b27.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bmt(),f=h.x!=null&&h.Ag(i).length===0
if(h.x!=null)w=f?B.b7:B.bC
else w=h.gVC()?B.bC:B.ee
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.btR,B.r,1)
s=x.p
r=A.q(i,A.w(A.a([A.q(i,D.fvK,B.f,i,i,new A.p(B.b7.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.ho,i,i,i),B.S,D.h1e,B.at,A.c(C.xH(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fXM,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.bbo,i,i,i,i,B.PG,i,i,i)
q=A.n(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b7.j(0.28),B.r,1)
n=A.htY(h.d)
o=A.q(B.z,C.b26(A.fZ0(h.e,n),30),B.f,i,i,new A.p(B.mr,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fSG,B.K,i,i)
m=A.n(14)
l=A.K(B.bn,B.r,1)
q=A.q(i,A.w(A.a([o,B.N,n,B.bs,D.h1x,B.af,A.q(i,A.w(A.a([D.hi1,B.bs,A.c(A.BL(h.c),i,i,i,i,i,i,D.fN6,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fc,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a2l,i,i,i)
p=A.n(16)
m=A.K(B.bn,B.r,1)
l=j.aVv("Original due",C.xH(h.r,!1))
n=j.aVv("Current due",C.xH(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.q(i,A.w(A.a([l,B.N,n,B.S,A.q(i,A.c(h.gaPs(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.m),i,i,i,i,B.xa,i,i,1/0),B.S,j.coX(),B.N,j.cb1(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.h2y,B.at,A.c(q,i,i,i,i,i,i,D.fRP,i,i,i)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaJZ()){q=A.n(14)
o=A.K(B.cF,B.r,1.6)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.hjm,B.N,A.bv(A.n(12),A.el(new A.a5(1/0,88,A.b4(i,i,i,new A.Y6(h.ax,B.a_,D.fAx,!0,3.5,i),B.aB),i),B.c,!0),B.ap)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.m),i,i,i,i,B.Dd,i,i,i)],s))}p.push(B.az)
p.push(D.hb5)
return A.q(i,A.w(A.a([r,new A.C(B.a2n,A.w(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.ap,i,i,new A.p(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aVv(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.adO,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fOc,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
coX(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.ac5(B.ee,u,"Not paid yet")
w=t.Ag(null).length
v=w===0?B.b7:B.bC
return this.ac5(v,u,C.xH(t.x,!0))},
cb1(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.ac5(B.b7,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.ac5(B.b7,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.adO,u,u,u)
v=A.T(d).k("O<1,hu>")
v=A.B(new A.O(d,new C.cbp(),v),v.k("aj.E"))
return A.w(A.a([w,B.aj,A.bY(B.bI,v,B.bq,u,6,6)],x.p),B.B,u,B.e,B.i,0,B.p)},
ac5(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.adO,w,w,w),1),new A.d_(1,B.c8,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dR,w,w),w)],x.p),B.B,w,B.e,B.i,0,w,w)}}
C.bfz.prototype={
a5(d,e){new A.Y6(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.ary.prototype={
R(){return new C.aGu(A.a([],x.bp))},
geb(){return this.c}}
C.aGu.prototype={
Z(){this.a4()
this.K7()},
K7(){var w=0,v=A.j(x.H),u,t=this,s
var $async$K7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4o(t.a.c),$async$K7)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dWh(t,s))
case 1:return A.h(u,v)}})
return A.i($async$K7,v)},
aXx(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bv:B.bl).j(0.22)
w=A.n(10)
return A.bB(v,new A.b5(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b5(4,w,new A.ax((this.a.d.a?B.bv:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.n(10),D.b93),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aXw(d){return this.aXx(d,null)},
R4(d){return this.csI(d)},
csI(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$R4=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.J1:B.f4
w=7
return A.b(new A.ie().Dr(72,900,900,n),$async$R4)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fB(),$async$R4)
case 8:p=f
n=B.cS.gcq().aL(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ad(l)
n=r.c
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$R4,v)},
b5X(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.n(10),n=A.K((q?B.bv:B.bl).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bv:B.bl
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bv:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cp)
q=A.a([q,B.aa,u,A.bK(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aJ(r,r,r,r,A.V(B.cC,s.a.d.a?B.bv:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cp))
return A.q(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.m),r,r,r,B.jE,D.bH6,r,r,r)},
En(d){return this.bGQ(d)},
bGP(){return this.En(null)},
bGQ(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$En=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ay()
r=new A.au(new A.bd(a4,B.b9,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.bN(a4)
p=a5.c
a4=a4===q?B.n.v(B.h.M(p)):B.h.a1(p,2)}o=new A.au(new A.bd(a4,B.b9,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bd(a4,B.b9,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bL(6048e8)
m=A.c3(a4.gcl(),a4.gci(),a4.gcB(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gcl(),a4.gci(),a4.gcB(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.htY(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xV?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i2(B.v.j(0.55),!0,"Dismiss",a4,new C.dW0(),new C.dW1(a2,t,a5,r,new C.dW2(a2,t),o,n,j),B.eL,!0,x.y),$async$En)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cA(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.W$=0
o.V$=s
o.W$=0
n.V$=s
n.W$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fH9)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fFO)
w=1
break}a1=A.fZ0(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xV?"male":"female"
w=7
return A.b(A.akq(a3,A.hCw(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$En)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xV?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c3(a3.gcl(),a3.gci(),a3.gcB(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c3(a4.gcl(),a4.gci(),a4.gcB(),0,0,0,0,0)))a5.cXe(a2.a)
w=8
return A.b(A.akq(t.a.c,a5),$async$En)
case 8:case 5:w=9
return A.b(t.K7(),$async$En)
case 9:case 1:return A.h(u,v)}})
return A.i($async$En,v)},
aYc(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bv:B.bl).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b26(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aS:B.ax
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.q(p,A.A(A.a([r,B.b6,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.m),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
TV(d){return this.cL4(d)},
cL4(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$TV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i2(B.v.j(0.55),!0,"Dismiss",s,new C.dWk(),new C.dWl(t,d),B.hn,!0,x.y),$async$TV)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.akq(t.a.c,d),$async$TV)
case 7:w=8
return A.b(t.K7(),$async$TV)
case 8:case 1:return A.h(u,v)}})
return A.i($async$TV,v)},
R3(d,e){return this.bRZ(0,e)},
bRZ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$R3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lH(s,"Cancel","Delete",e.b+" \xb7 "+A.BL(e.c)+" will be removed from this device.","Delete this debt?"),$async$R3)
case 3:if(!g){w=1
break}w=4
return A.b(C.fRR(t.a.c,e.a),$async$R3)
case 4:w=5
return A.b(t.K7(),$async$R3)
case 5:case 1:return A.h(u,v)}})
return A.i($async$R3,v)},
ai6(d){return this.cmd(d)},
cmd(d){var w=0,v=A.j(x.H),u=this,t
var $async$ai6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dWe(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ai6)
case 2:return A.h(null,v)}})
return A.i($async$ai6,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eKv
w=J.dO(m.d,new C.dWm())
v=A.B(w,w.$ti.k("M.E"))
w=J.dO(m.d,new C.dWn())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cG(v,0,new C.dWo())
w=A.n(18)
s=m.a.d.a
r=s?D.cIq:D.aFS
q=A.K(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.q(l,D.c8C,B.f,l,l,new A.p(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.n(12),A.aM(!1,A.n(12),!0,D.eJP,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dWp(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cH3("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BL(t)
r=A.a([A.q(l,A.w(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bcc(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.B,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a6(B.aw,B.aD,B.w,r,l,l),B.m),l,l,l,l,B.aot,l,l,l),B.az],p)
if(J.ci(m.d)){w=m.a.d.a
s=w?B.em:B.c
q=A.n(18)
o=A.K((w?B.bv:B.bl).j(0.12),B.r,1)
n=A.q(l,D.c35,B.f,l,l,new A.p(B.cY.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.w(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.m),l,l,l,l,D.bJO,l,l,1/0))}else{w=m.gcrV()
s=A.B(new A.O(v,w,A.T(v).k("O<1,x>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.C(D.bLs,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.T(u).k("O<1,x>")))
B.d.u(s,q)}B.d.u(r,s)}return A.w(r,B.al,l,B.e,B.i,0,B.p)},
bcc(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bv:B.bl).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aS:B.ax
return A.q(u,A.w(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.m),u,u,u,u,B.er,u,u,u)},
cH3(d,e){return this.bcc(!1,d,e)},
crW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.Ag(j).length,h=d.blI()
if(d.x!=null){w=d.Ag(j).length
v=w===0?B.cY:B.bC}else if(d.gVC())v=B.bC
else{if(h)w=B.cY
else w=k.a.d.a?B.bv:B.bl
v=w}if(d.x!=null){w=d.Ag(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xH(u,!1)}else{u.toString
t="Paid "+C.xH(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xH(w,!1)+" \xb7 "+i+" missed":"Due "+C.xH(w,!1)}w=k.a.d.a?B.em:B.c
u=A.n(18)
if(d.gVC()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bl).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.H,B.v.j(0.04),B.cN,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bt:B.mr
o=A.K(d.gVC()&&d.x==null?B.bC.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.htY(d.d)
o=A.q(B.z,A.d3(C.b26(A.fZ0(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.ax
m=x.p
n=A.a([new A.d_(1,B.c8,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaJZ())B.d.u(n,A.a([B.dU,A.V(B.Qx,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cR,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.i,0,B.p),1)
n=A.BL(d.c)
l=k.a.d.a?B.aS:B.ax
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.C(Aj.aof,A.A(A.a([o,B.bc,p,B.aa,A.w(A.a([n,B.bs,A.V(B.eN,(k.a.d.a?B.bv:B.bl).j(0.5),j,j,j,18)],m),B.dr,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dWg(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.p(w,j,s,u,r,j,B.m),j,j,j,B.d3,j,j,j,j)}}
C.vf.prototype={}
C.any.prototype={
C(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.aY
u=v?B.B:B.l
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.H,B.v.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.q(a0,A.V(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.iv,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aBY,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Dr,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.d7(B.dn,m,B.f,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(B.ao_,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cQ:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fD,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fBl)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.C(B.vk,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a6(B.a5,B.a9,B.w,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lF,A.w(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hN,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a6(B.aw,B.aD,B.w,a1.d,a0,a0),B.m),a0,a0,a0,D.bHB,a0,a0,a0,a0)}}
C.aYN.prototype={
C(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.aY?B.aY:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cQ,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cR,n],m)
if(p.z)o.push(new A.C(B.tF,n,q))
return new A.C(B.d3,A.w(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.US.prototype={
R(){return new C.bjf()}}
C.bjf.prototype={
gc5x(){var w=this.d
return w===$?this.d=this.a.c:w},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.eKq,D.eKw],l)
for(w=0;w<8;++w){v=D.a6J[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IP:B.Ah
q=t===s
r=A.V(r,q?B.eK:B.bX,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.b6,A.c(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b8,A.c(v.c,n,1,B.a2,n,n,n,B.BD,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ax(B.eK,2,B.r,-1)
s=new A.p(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.C(B.f3,A.w(A.a([new A.C(B.mz,new A.c_(B.aJ,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dn(!0,new C.any(v,q.d,q.e,new C.dld(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dle(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.C(D.bHZ,A.bH(D.hp3,n,new C.dlf(o,d),A.bp(B.b1,n,n,n,n,B.ps,n,n,new A.ba(A.n(16),B.a1),n,n,n)),n))
return A.bn(!0,new A.cR(new A.aX(0,1/0,0,m.a.b*0.9),A.cn(k,n,n,D.bMl,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nR.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bii(d,e,f){return new C.nR(this.a,e,d,f)}}
C.IV.prototype={
xq(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IV(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aI6(d){var w=null
return this.xq(w,w,w,w,w,d,w,w,w,w,w,w)},
cSP(d){var w=null
return this.xq(w,w,w,w,d,w,w,w,w,w,w,w)},
bif(d,e,f){var w=null
return this.xq(d,w,w,w,w,w,w,w,e,w,f,w)},
cTt(d){var w=null
return this.xq(w,w,w,w,w,w,d,w,w,w,w,w)},
cTC(d){var w=null
return this.xq(w,w,w,w,w,w,w,w,w,d,w,w)},
cSN(d){var w=null
return this.xq(w,w,w,d,w,w,w,w,w,w,w,w)},
cTE(d){var w=null
return this.xq(w,w,w,w,w,w,w,w,w,w,w,d)},
cSK(d){var w=null
return this.xq(w,w,d,w,w,w,w,w,w,w,w,w)},
cSF(d){var w=null
return this.xq(w,d,w,w,w,w,w,w,w,w,w,w)},
GX(d){var w=null
return this.xq(w,w,w,w,w,w,w,d,w,w,w,w)},
cTM(d,e,f,g,h,i,j,k,l,m,n){return this.xq(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cQi(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bUM(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.h.M(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cV(d.h(0,n))).length!==0?B.a.i(A.cV(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cV(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EP.geD(D.EP))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a8w)
q=l.$2("frame",D.a7Q)
l=l.$2("texture",D.a7M)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cV(d.h(0,"author"))):o
return this.cTM(p,u,t,q,r,A.rD(d.h(0,"ribbon"))?A.Hr(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0E.prototype={
R(){return new C.aDr(A.a([],x.I),D.Q4)},
geb(){return this.c}}
C.aDr.prototype={
Z(){var w,v=this
v.a4()
v.f=A.AD(0,1)
w=$.ay()
v.z=new A.au(B.ay,w)
v.Q=new A.au(B.ay,w)
v.ll()
w=v.a
C.bHn(w.c,w.d).bD(new C.dlU(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.d()
u.t()
u=v.z
u===$&&A.d()
w=$.ay()
u.V$=w
u.W$=0
u=v.Q
u===$&&A.d()
u.V$=w
u.W$=0
v.a3()},
ll(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ll=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mh(s.c,s.d),$async$ll)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dlI(t,r))
t.azx()
case 1:return A.h(u,v)}})
return A.i($async$ll,v)},
gaw4(){var w,v=this
if(!J.ci(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
azx(){var w,v,u=this.gaw4(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
ckx(d){this.l(new C.dlF(this,d))
this.azx()},
OU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nR(B.n.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aUT(r.c,r.d,s),$async$OU)
case 3:w=4
return A.b(t.ll(),$async$OU)
case 4:if(t.c==null||J.ci(t.d)){w=1
break}q=J.nM(t.d,new C.dlg(s))
p=q>=0?q:J.aa(t.d)-1
t.l(new C.dlh(t,p))
t.azx()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Cq(p+1,B.cn,B.lb),$async$OU)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
C2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$C2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaw4()
s=s==null?null:s.a
if(s==null)s=B.n.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aUT(o.c,o.d,new C.nR(s,r,q,new A.W(p,0,!1))),$async$C2)
case 3:w=4
return A.b(t.ll(),$async$C2)
case 4:if(t.c==null){w=1
break}t.l(new C.dlJ(t))
case 1:return A.h(u,v)}})
return A.i($async$C2,v)},
PC(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaw4()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dlp(r),s,null,!0,!0,x.y),$async$PC)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bH7(s.c,s.d,r.a),$async$PC)
case 4:t.l(new C.dlq(t))
w=5
return A.b(t.ll(),$async$PC)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.VF(B.n.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$PC,v)},
zE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.C2(),$async$zE)
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
return A.b(C.SS(s,r.r,o,p,q),$async$zE)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hUU(s,r.x,r.r),$async$zE)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Mh(s.c,s.d),$async$zE)
case 10:l=e
for(s=n.d,r=J.cK(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.nR(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BS(r.c,r.d,l),$async$zE)
case 11:w=12
return A.b(t.ll(),$async$zE)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zE,v)},
a2Y(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.C2(),$async$a2Y)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzC(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.ds(D.AI,new C.dlG(t),new C.dlH())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.nc("Our Family",o,"",""))
for(o=J.aP(t.d);o.B();){n=o.gP(o)
p.push(new H.nc(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hvT(o,new H.t9(s,r,"",p,new H.vx(q.d,null,null,null,null,"","","")),null),$async$a2Y)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2Y,v)},
Pj(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Pj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.C2(),$async$Pj)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.aj6,null,new C.dll(t),s,!0,!0,!0,I.abU,!1,!1,x.N),$async$Pj)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cSP(r)
t.l(new C.dlm(t,q))
s=t.a
w=7
return A.b(C.Tw(s.c,s.d,q),$async$Pj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pj,v)},
YY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.aj6,null,new C.dlr(t),r,!0,!0,!0,I.abU,!1,!1,x.e),$async$YY)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dls(t,s))
r=t.a
w=4
return A.b(C.Tw(r.c,r.d,s),$async$YY)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.Cq(0,B.ec,B.nk)
case 1:return A.h(u,v)}})
return A.i($async$YY,v)},
bXH(d){var w=d.bV(),v=B.a.aY(B.n.v(w.gci()),2,"0"),u=B.a.aY(B.n.v(w.gcB()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gzC(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
C(d){var w,v,u,t,s,r=this,q=null,p=r.c4L()
if(r.e)w=D.ahM
else if(J.ci(r.d)){w=r.y
v=r.gzC(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fMr,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.C(X.apG,new C.a_Q(w,v,0,q),q),q),B.bx,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l6.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.fvv,B.f,q,q,new A.p(q,q,q,A.n(18),A.a([new A.ab(0,B.H,B.e0.j(0.45),B.J,18)],x.V),E.xL,B.m),q,q,q,q,B.PJ,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcPl(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hy(D.c_1,D.hov,r.gaR9(),q))
B.d.u(u,w)}w=A.at(A.cc(A.w(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l6.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.ea:B.yN
u=A.w(A.a([new A.C(D.bJ4,w,q),A.E(A.Kj(v,new C.dlS(r),J.aa(r.d)+1,q,r.gckw(),u,B.aJ),1),r.bJP()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.a03,new A.am(B.a0,q,B.b5,B.t,A.a([D.aTD,A.bn(!0,A.w(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c4L(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cM(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Li(B.e8,"AI",h.gbHC(),!0))
if(h.a.f)f.push(new C.Li(B.m8,"Cover",h.gbSy(),!1))
if(h.a.f)f.push(new C.Li(B.xD,"Header",h.gbNr(),!1))
if(J.cM(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Li(B.vI,"Print",h.gcu5(),!1))
if(h.a.f&&J.cM(h.d)&&h.r>=0){v=h.w
u=v?B.h2:B.jm
t=v?"Save":"Edit"
f.push(new C.Li(u,t,v?h.gcAv():new C.dlC(h),!1))}if(h.a.f)f.push(new C.Li(B.ih,"Add page",h.gaR9(),!1))
v=C.hQe(h.y.Q)
u=h.gzC(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.aa(h.d)
r=J.aa(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dUP
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kI.j(0.5),1,B.r,-1)
j=A.q(g,A.V(l.a,D.l6,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a6(B.a5,B.a9,B.w,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l6.j(0.85)
p.push(new A.bu(1,B.b8,A.aA(B.c_,A.w(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.C,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.any(v,u,t+" \xb7 "+s+" "+r,new C.dlD(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
AV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.C2(),$async$AV)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aP(t.d);r.B();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a4E(B.d.aJ(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dli(t,p),s,null,!0,!0,x.N),$async$AV)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zE(),$async$AV)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.EX(),$async$AV)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.GA("Swahili (Kiswahili)",!0),$async$AV)
case 18:w=16
break
case 17:w=19
return A.b(t.cLK(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AV)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AV,v)},
a_Z(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kI.j(0.3),B.r,1),r=x.p
return new A.C(B.cA,A.aM(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.xL,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.w(A.a([A.c(f,w,w,w,w,w,w,A2.LU,w,w,w),A.c(g,w,w,w,w,w,w,B.BE,w,w,w)],r),B.B,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dlE(d,h),w,w,w,w,w,w,w),w)},
EX(){return this.bXa()},
bXa(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$EX=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dlv(r),a7,null,!0,!0,x.ei),$async$EX)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eO("Working on it\u2026",$.ay())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dlw(o),a7,null,!0,!0,x.H).fD(new C.dlx(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.bX(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.AI[a1]
J.bX(j,i.a)}w=8
return A.b(C.aju(a0,a7,new C.dly(o),d,l,e,j),$async$EX)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ad(a8)
n=A.v(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a7(l,!0).dZ()
l=o
l.sir($.ay())
J.aVo(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gco(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bii(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BS(j.c,j.d,l),$async$EX)
case 11:w=12
return A.b(r.ll(),$async$EX)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.AI[a1].a)
a5=l.cQi(j,12,a7)
l=r.a
w=15
return A.b(C.Tw(l.c,l.d,a5),$async$EX)
case 15:if(r.c!=null)r.l(new C.dlz(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.Cq(0,B.ec,B.nk)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cDW("Undo",new C.dlA(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.en,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EX,v)},
GA(d,e){return this.cLL(d,e)},
cLK(d){return this.GA(d,!1)},
cLL(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$GA=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eO("Starting\u2026",$.ay())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dlL(a0),k,null,!0,!0,x.H).fD(new C.dlM(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.bX(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4V(m,new C.dlN(a0)),$async$GA)
case 10:w=8
break
case 9:w=11
return A.b(C.bIX(new C.dlO(a0),m,a2),$async$GA)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ad(a1)
q=A.v(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a7(o,!0).dZ()
o=a0
o.sir($.ay())
J.aVo(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bii(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BS(k.c,k.d,o),$async$GA)
case 12:w=13
return A.b(r.ll(),$async$GA)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cDW("Undo",new C.dlP(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GA,v)},
bJP(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dlj(v):u
r=A.aJ(u,u,u,u,A.V(D.bVv,s?D.l6:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cM(v.d)&&!v.w&&v.r>=0)s=A.hy(A.V(B.xp,B.Hv,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hv,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbS8(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l6.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.aa(v.d)?new C.dlk(v):u
return A.bn(!0,new A.C(D.bIU,A.A(A.a([r,s,A.aJ(u,u,u,u,A.V(B.eN,t<J.aa(v.d)?D.l6:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0I.prototype={
R(){return new C.bjE(new A.au(B.ay,$.ay()))}}
C.bjE.prototype={
ga47(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ay()
w.W$=0
this.a3()},
gbVK(){switch(this.ga47()){case"cover":var w=D.dgP
break
case"book":w=D.dbA
break
default:w=D.dL9
break}return w},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kI.j(0.5),m=x.p,l=A.A(A.a([D.dUQ,B.ar,D.bOz,A.aJ(p,p,p,p,B.lJ,p,p,p,new C.dnG(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jc(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dnH(q),q.ga47()==="page",p,p,p,p))
if(q.a.d)k.push(A.jc(p,p,p,D.hiU,p,new C.dnI(q),q.ga47()==="book",p,p,p,p))
k.push(A.jc(p,p,p,D.h5o,p,new C.dnJ(q),q.ga47()==="cover",p,p,p,p))
k=A.bY(B.bI,k,B.bq,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bB(p,new A.b5(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.jP,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbVK(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Ae.LR,p,p,p)
w.push(A.lL(p,B.c.j(0.08),p,r,B.hH,new C.dnK(q,s),p,p,p,p))}return A.eC(p,E.CN,A.cc(A.w(A.a([l,B.S,D.hmi,B.aj,k,B.af,j,B.N,A.bY(B.bI,w,B.bq,p,6,6),B.az,A.df(D.bZZ,p,D.hn5,new C.dnL(q,d),A.bp(B.b1,p,p,p,p,B.ps,p,p,new A.ba(A.n(16),B.a1),p,p,p)),B.at,D.hh2],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f7,p,p,B.ah),p,p,p,B.PH,p,B.db,p,new A.ba(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0G.prototype={
R(){return new C.aDu(A.a([],x.gA))},
geb(){return this.c}}
C.ahe.prototype={}
C.aDu.prototype={
Z(){this.a4()
this.ll()},
ll(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$ll=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.SW(p.c,p.d),$async$ll)
case 3:o=e
n=A.a([],x.gA)
p=J.aP(o)
case 4:if(!p.B()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bHn(r.c,q),$async$ll)
case 6:j=e
i=J
w=7
return A.b(C.Mh(t.a.c,q),$async$ll)
case 7:m.push(new l.ahe(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dm8(t,n))
case 1:return A.h(u,v)}})
return A.i($async$ll,v)},
bdw(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
RW(d,e){return this.cma(0,e)},
cma(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$RW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).ca(A.e4(new C.dm7(u,e),!0,null,x.y)),$async$RW)
case 2:t=g
w=3
return A.b(u.ll(),$async$RW)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aXE)
return A.h(null,v)}})
return A.i($async$RW,v)},
GC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$GC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aXz)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aiP(s.c,s.d),$async$GC)
case 5:q=e
w=6
return A.b(t.ll(),$async$GC)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.RW(0,B.d.f6(t.d,new C.dmc(q))),$async$GC)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.SS(p,s.f,r,n,o),$async$GC)
case 10:m=e
w=11
return A.b(t.ll(),$async$GC)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aXE)
case 1:return A.h(u,v)}})
return A.i($async$GC,v)},
Rj(d,e){return this.cy9(0,e)},
cy9(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dmb(t,e),s,null,!0,!0,x.y),$async$Rj)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a55(s.c,s.d,e.a),$async$Rj)
case 4:w=5
return A.b(t.ll(),$async$Rj)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Rj,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bJS(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kI.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fK(0.7142857142857143,A.q(n,A.w(A.a([D.dUR,B.af,D.eJq,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l6.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcPh(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kI.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c7m,B.f,n,n,new A.p(B.v.j(0.3),n,A.K(E.kI.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dmd(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kI.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bc,D.bOY,A.q(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fLp,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.m),n,n,n,n,B.ho,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.cdp,B.m),n,n,n,Aa.Pu,D.bGM,n,n,n)
if(o.e)k=D.ahM
else k=k.length===0?D.bgL:A.cg(new C.dme(k))
return A.c6(n,D.a03,new A.am(B.a0,n,B.b5,B.t,A.a([D.aTD,A.bn(!0,A.w(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bJS(d){var w,v,u=this,t=null,s=u.bdw(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.d7(B.dE,B.z,B.f,new A.a5(300,420,new C.a_Q(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.q(t,D.c6B,B.f,t,t,new A.p(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dm5(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fL1,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.w(A.a([new A.fK(0.7142857142857143,new A.am(B.a0,t,B.ab,B.t,p,t),t),B.N,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l6.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dm6(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Li.prototype={}
C.a_Q.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.ds(D.AI,new C.cTq(m),new C.cTr()),j=m.c,i=D.EP.h(0,j.e),h=A.b_(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mM:B.bb
v=new C.cTs(h)
i=A.a([new A.ab(0,B.H,B.v.j(0.6),D.eG8,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bgO(j.x,h,l),B.aB),0,0,0),A.ao(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cS(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.apH,8,0.85,2.2),v.$4(D.bLL,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.apH,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.C(D.bLH,A.b4(l,l,l,new C.bgF(h,l),B.aB),l),0,0,0))
r=A.V(D.aEM[B.n.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aBY,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.az,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cQ,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aN,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.C,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.C(D.bMd,A.w(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aKG(l),D.fAq),l,l,l,46,0,l))
return A.q(l,A.bv(D.agj,new A.am(B.a0,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.p(l,l,l,D.agj,i,new A.a6(B.aw,B.aD,B.w,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bgO.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e6()
g.cW(11)
switch(this.b){case"plain":return
case"linen":$.U()
w=A.L()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.m(0,t),new A.m(u,t),w)
$.U()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.m(r,0),new A.m(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.U()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.m(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.U()
l=A.a([],n)
j=new A.aI(m.r,B.ak,null,null,l)
l.push(new A.aZ(v,q))
j.ac()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=new A.bz()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.ac()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.U()
w=A.L()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.m(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.U()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.m(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bgF.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.U(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ae
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fnb,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aI(k,B.ak,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ac()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.aj(l)
n.ac()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.aj(s)
n.ac()
d.af(n,j)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=i.j(0.9).gp(0)
d.O(new A.m(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.vg.prototype={}
C.a0b.prototype={
R(){return new C.bgM()}}
C.bgM.prototype={
goN(){var w=this.d
return w===$?this.d=this.a.c:w},
gzC(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.b9,B.aP),$.ay())}return v},
gaFf(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.b9,B.aP),$.ay())}return v},
gauB(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.b9,B.aP),$.ay())}return v},
t(){var w=this,v=w.gzC(0),u=v.V$=$.ay()
v.W$=0
v=w.gaFf()
v.V$=u
v.W$=0
v=w.gauB()
v.V$=u
v.W$=0
w.a3()},
avf(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jc(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dct(this,f,u),e===u,s,s,s,s))}return A.bY(B.bI,r,B.bq,s,6,8)},
aB2(d){var w=null,v=B.c.j(0.07)
return A.bB(w,new A.b5(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mg,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goN(),a0=f.gzC(0),a1=a0.a.a,a2=f.gaFf(),a3=a2.a.a,a4=f.gauB(),a5=d.bif(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,new A.d7(B.dE,B.z,B.f,new A.a5(270,370,new C.a_Q(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aB2("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcS(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aB2("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcT(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.AI[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bE(o,o,o,o),e,e,new A.a6(B.aw,B.aD,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.aA(e,A.w(A.a([p,B.cR,A.c(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcU(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bY(B.bI,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b1.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eK:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.V(D.aEM[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcV(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bY(B.bI,q,B.bq,e,8,8)
a4=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aB2("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcW(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wr,e,e,e)
m=A.a([],w)
for(l=D.EP.gdW(D.EP),l=l.gae(l);l.B();){k=l.gP(l)
j=A.b_(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eK:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.aA(e,A.w(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcX(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bY(B.bI,m,B.bq,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wr,e,e,e)
k=f.goN()
return new A.C(new A.R(0,0,0,a3.f.d),A.bn(!0,new A.cR(new A.aX(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.hgt,B.af,d,B.aN,a0,B.S,a2,B.az,D.hmR,B.N,v,B.az,D.hgC,B.N,q,B.az,a4,B.az,p,B.N,m,B.az,l,A.lj(e,9,""+B.h.S(f.goN().f),36,18,new C.dcY(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wr,e,e,e),B.aj,f.avf(D.a8w,f.goN().r,new C.dcZ(f),D.dOx),B.af,A.c("BORDER",e,e,e,e,e,e,N.wr,e,e,e),B.aj,f.avf(D.a7Q,f.goN().w,new C.dd_(f),D.dOE),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wr,e,e,e),B.aj,f.avf(D.a7M,f.goN().x,new C.dd1(f),D.dQj),B.aj,A.jh(e,B.b1,e,B.ag,e,new C.dd2(f),e,e,e,D.haB,f.goN().z),B.bx,A.bH(D.hf8,e,new C.dd3(f,a6),A.bp(B.b1,e,e,e,e,B.ps,e,e,new A.ba(A.n(16),B.a1),e,e,e))],w),e,e,S.ap8,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aKG.prototype={
a5(d,e){var w,v,u,t=new A.aI($.U().r,B.ak,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bz())
u=A.L()
u.san(D.ce6.az(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bmc.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.U()
w=A.L()
w.san(D.cd6.az(0,new A.a4(0,0,a2,a3)))
a4.aE(new A.a4(0,0,a2,a3),w)
v=B.h.cH(a1/112)
u=new A.e6()
u.cW(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dgO[u.aw(9)]
j=u.aw(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.bx(i,B.hG)
g=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a6(B.a5,B.a9,B.w,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.V,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.55).gp(0)
a4.aE(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.V,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.4).gp(0)
a4.aE(new A.a4(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.san(D.cco.az(0,new A.a4(0,r,a2,q)))
a4.aE(new A.a4(0,r,a2,q),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.ld
a4.aE(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bkA.j(0.72).gp(0)
a4.aE(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bU(B.z,0.5,B.w,d,0,A.a([D.bth.j(0.22),B.L],w),d,d).az(0,A.c0(new A.m(t,a1),a0)))
a4.O(new A.m(t,a1),a0,a3)},
aD(d){return!1}}
C.beU.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aD(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cS(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.p(A.ap(D.l6,D.byF,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.N5,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.H,B.v.j(0.35),B.aP9,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.kI.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.q(o,A.w(t,B.l,o,B.rH,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b8L,u,D.ce4,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.H,B.v.j(0.4),B.dv,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aKG(o),D.fAl),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aYN(p.y,r,L.ji,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bB(o,B.eY,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.h_h,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bB(o,B.eY,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.am,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fQx,!0,B.a7,B.BA,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.h_9,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,11,B.cQ,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.q(o,o,B.f,D.Hf.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.Hf.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.Hf.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.az],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.GI(A.cW(A.a([A.cW(o,o,o,o,o,o,o,o,o,D.fTR,B.a.av(k,0,1)),A.cW(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.ji.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.w(n,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hA,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.bv(B.N5,new A.am(B.a0,o,B.ab,B.t,A.a([t,new A.C(D.bLe,A.w(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bP(new A.p(o,o,o,o,o,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.p(o,o,o,B.N5,v,D.ceC,B.m),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.am(B.a0,o,B.ab,B.t,l,o)}}
C.anz.prototype={
R(){return new C.anA(new A.eO(0,$.ay()),new C.bWA(),new C.anS(),D.i1j,null,null)},
gd8(){return this.d}}
C.a2X.prototype={
a9(){return"_Step."+this.b}}
C.anA.prototype={
gDe(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHj(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghl(d){var w,v=this,u=v.e
if(u===$){w=C.NE(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUX(){var w=this.ghl(0)
return w.gzV()==null?"Babu":B.a.i(w.gzV().b)},
Z(){var w,v=this
v.a4()
w=v.ghl(0).gzV()
w=w==null?null:w.c
v.r.b=w===D.p2
w=v.qi(new C.bUW(v))
w.fU(0)
v.x!==$&&A.aT()
v.x=w
v.a43("Come closer, my children. I am "+v.gUX()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a2(0)
v=w.z
if(v!=null)v.a2(0)
w.w.t()
v=w.f
v.V$=$.ay()
v.W$=0
w.bz7()},
a43(d){var w=this,v=w.y
if(v!=null)v.a2(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d5(E.a1N,new C.bUQ(w))},
bvt(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a2(0)
v.l(new C.bUZ(v))},
afC(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bvl(){return this.bd3()},
bd3(){var w=this,v=w.gDe()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bUR(w))
w.a43(u)
v=w.z
if(v!=null)v.a2(0)
w.z=A.cC(B.o2,new C.bUS(w))},
cQp(){var w=this
w.l(new C.bUV(w))
w.a43(w.gDe()[w.as].a)},
M3(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.afp)return
w=p.gDe()
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
q.cW(v*7+d)
p.l(new C.bUU(p,d,u,q))
p.a43(u?D.dyk[q.aw(4)]+" "+w[p.as].d:D.duA[q.aw(3)]+" "+w[p.as].d)},
kR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gDe()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bJD(t.at,t.ay,p)
t.l(new C.bUX(t,s))
t.a43(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Cc(t.a.d,s),$async$kR)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Cd(r.d,r.c.a,"fire",t.at*10),$async$kR)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bUY())
w=1
break
case 4:++t.as
t.bd3()
case 1:return A.h(u,v)}})
return A.i($async$kR,v)},
C(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.a_4,new A.am(B.a0,v,B.ab,B.t,A.a([A.bS(0,new A.e9(A.b4(v,v,v,new C.aYS(u,w.r,w.w,u),B.aB),v),0,0,0),A.bn(!0,A.w(A.a([w.cfV(0),B.aX,w.bUV()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cfV(d){var w,v,u,t=this,s=null,r=A.aJ(s,s,s,s,B.RC,s,s,s,new C.bUT(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gDe().length;++w){v=t.as
if(w<v||t.Q===D.b51)v=B.d0
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bGw,s,s,s,22))}p=A.E(A.w(A.a([D.h7i,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.B,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.K(B.fN,B.r,1)
return new A.C(D.bMp,A.A(A.a([r,p,A.q(s,A.c("\ud83d\udd25 "+B.h.S(t.cy*100)+"%",s,s,s,s,s,s,B.iY,s,s,s),B.f,s,s,new A.p(B.ba,s,u,v,s,s,B.m),s,s,s,s,B.ho,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bUV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghl(0).gzV()
if(h==null)w=1
else w=h.c===D.p2?0:1
v=j.dx
u=j.db
t=D.r1.j(0.96)
s=A.n(22)
r=A.K(B.d0,B.r,3)
q=A.b4(i,i,i,new C.brQ(w,i),B.aB)
p=A.c(j.Q===D.afp?j.gUX()+" asks":"Elder "+j.gUX(),i,i,i,i,i,i,D.aYX,i,i,i)
o=j.db
o=B.a.av(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c_,A.A(A.a([new A.a5(62,62,q,i),B.ar,A.E(A.w(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aZa,i,i,i)],n),B.B,i,B.e,B.i,0,B.p),1)],n),B.B,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbvs(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.abE("Sit down by the fire",j.gbvk()),i,i,i)
break
case 1:v=A.at(j.abE("Ask me, Elder",j.gcQo()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gDe()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ax(D.lX,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.c(u[m],i,i,i,i,i,i,D.aZ6,B.K,i,i),B.f,i,D.ah_,new A.p(D.amE,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,B.xd,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bUN(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bY(B.bI,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.ko:An.asK
u=A.V(u,v?B.ev:D.lX,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.ev:D.lX,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gDe().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.abE(v,j.gqC(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gDe().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aZp,i,i,i)],n)
u=j.cx
if(u>0){u=C.aT3(u)
q=C.aT3(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adR,i,i,i))}v.push(B.N)
v.push(j.abE("Back to the games",new C.bUO(j)))
v=A.w(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.w(A.a([o,B.S,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aGn,i,B.m),i,i,i,B.zv,B.bg,i,i,i)},
abE(d,e){var w=null,v=A.n(16),u=A.K(B.d0,B.r,2)
return A.aA(w,A.q(w,A.c(d,w,w,w,w,w,w,A2.LU,w,w,w),B.f,w,w,new A.p(D.lX,w,u,v,w,w,B.m),w,w,w,w,D.bK8,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.brQ.prototype={
a5(d,e){O.hvE(d,e.eq(B.J),e.gdm()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aDs.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bWA.prototype={}
C.tz.prototype={}
C.brR.prototype={}
C.anS.prototype={
Nr(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.itk(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aYS.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.CX(l.d.Nr(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bW(0,u)
l.cFG(d,j)
l.bTt(d,j)
l.cOa(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nT(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.U()
q=A.L()
p=x.O
o=x.n
q.san(A.wC(B.J,r,A.a([D.bxj.j(0.55*s),F.OJ.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.w,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bWs(l,d,j,i)),new A.y(540,new C.bWt(l,d,j,i)),new A.y(546,new C.bWu(l,d,j,i)),new A.y(574,new C.bWv(l,d,j,i)),new A.y(612,new C.bWw(l,d,j,i)),new A.y(650,new C.bWx(l,d,j,i)),new A.y(656,new C.bWy(l,d,j,i))],x.E)
B.d.b_(n,new C.bWz())
for(m=0;m<7;++m)n[m].b.$0()
l.bKa(d,j,i)
l.bX8(d,j)
t.restore()
$.U()
t=A.L()
t.san(A.wC(new A.m(w/2,v*0.6),e.gapZ()*0.75,A.a([B.L,D.bkt],p),A.a([0.55,1],o),B.w,k,k,0))
d.aE(new A.a4(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cFG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e6()
h.cW(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=t.gp(0)
d.O(new A.m(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.m(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eFF),C.iV(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.U()
k=A.a([],t)
l=new A.aI(l.r,B.ak,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ac()
j=r-3
r=new A.cm(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.cm(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.b=B.ae
s.c=1.6
s.r=D.bne.gp(0)
s.d=B.bG
s.e=B.dQ
d.af(l,s)}},
bTt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aDh[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.c1(new A.m(p,m),n*0.74,q*0.5)
k=Ad.zh.j(v)
$.U()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=k.gp(0)
d.c2(l,j)
q=A.c1(new A.m(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.wQ.j(u).gp(0)
d.c2(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.h.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=D.ajW.j(0.16*(1-h)).gp(0)
d.O(new A.m(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cOa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bGF(d,D.eFB,0.9,e,D.hW_,!1,!1,D.b4Z,1,!1)
w=$.U().r
v=x.v
u=new A.aI(w,B.ak,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bz())
t=A.L()
t.r=D.alU.gp(0)
d.af(u,t)
C.bGF(d,D.eFD,0.95,e,D.hVO,!1,!1,D.b5_,1,!0)
t=new A.aI(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.cm(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cm(431,553,421,548))
t.E(new A.bz())
u=A.L()
u.r=F.GV.gp(0)
d.af(t,u)
u=A.c1(D.eFC,8,28)
t=A.L()
t.r=D.bzM.gp(0)
d.c2(u,t)
C.bGF(d,new A.m(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hW1,!0,!1,D.YS,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c2(A.c1(new A.m(s+q*16,r-6),16,11),C.iV(D.alL,1.8))
u=q<0
C.bGF(d,new A.m(s-q*6,r),0.62,e,D.hW4,!1,u,D.YS,2.2,!1)
C.bGF(d,new A.m(s-q*32,r+4),0.58,e+1,D.hVW,!1,u,D.YS,2.2,!1)
this.bZT(d,D.eFg,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.n.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.c1(new A.m(o,n),8,11)
k=p===1
j=k?D.alH:D.amk
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c2(l,i)
l=k?D.alH:D.amk
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=l.gp(0)
d.O(new A.m(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.m(o+7.5,n+(-2+m)),new A.m(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.m(o,n+4),new A.m(o,n+8),k)}h=e<f.f
u=A.c1(D.aaM,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.akk.gp(0)
d.c2(u,t)
u=A.c1(D.aaM.a6(0,new A.m(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bpt.gp(0)
d.c2(u,t)
t=new A.aI(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bz())
u=A.L()
u.r=D.bpG.gp(0)
d.af(t,u)
u=D.aaM.a6(0,new A.m(-17,h?-9:-2))
t=A.L()
t.r=B.iu.gp(0)
d.O(u,1.1,t)
v=new A.aI(w,B.ak,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.cm(180,588+w*(h?6:0),178,595))
d.af(v,C.iV(D.akk,3.5))},
bZT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a6(0,new A.m(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.b=B.ae
m.c=2
m.r=D.a_i.gp(0)
m.d=B.bG
m.e=B.dQ
d.ah(new A.m(u+o,s),new A.m(u+(o+n*1.5),q),m)}w=A.c1(k,17,32)
v=$.U()
r=A.L()
r.r=D.GT.gp(0)
d.c2(w,r)
r=A.c1(k.a6(0,D.eEH),7,26)
w=A.ap(D.GT,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c2(r,q)
v=new A.aI(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bz())
s=A.L()
s.r=D.GT.gp(0)
d.af(v,s)
s=A.c1(k.a6(0,new A.m(24,-7+l)),9,12)
v=A.L()
v.r=D.GT.gp(0)
d.c2(s,v)
v=-11+l
d.ah(k.a6(0,new A.m(22,v)),k.a6(0,new A.m(21,-17+l)),C.iV(D.a_i,1.6))
d.ah(k.a6(0,new A.m(26,v)),k.a6(0,new A.m(28,-16+l)),C.iV(D.a_i,1.6))
v=k.a6(0,new A.m(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a6(0,new A.m(26,-3+l)),k.a6(0,new A.m(26,1+l)),C.iV(D.bsw,1.4))
d.ah(k.a6(0,D.eHD),k.a6(0,new A.m(-19,-7+Math.sin(f*7)*2)),C.iV(D.GT,2.4))},
bX6(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.c1(new A.m(225+u*36,574+(t*13+6)),8,11)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.byn.gp(0)
a6.c2(u,t)}}u=A.c1(D.aaO.a6(0,B.cy),17,52)
$.U()
t=A.L()
t.r=D.bk1.gp(0)
a6.c2(u,t)
t=A.c1(D.aaO.a6(0,B.cy),12,44)
u=D.bnF.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c2(t,s)
for(r=0;r<3;++r){v=D.du_[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=7
o.r=D.H6.gp(0)
o.d=B.bG
o.e=B.dQ
a6.ah(new A.m(u+t*24,579+s*4),new A.m(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Cr.j(0.6)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.ae
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dQ
a6.ah(new A.m(u+o*24,579+(p*4-2)),new A.m(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fj7,D.fjI,D.fkS,D.flc,D.fkQ]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bvB,D.brR,D.bxN][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.U()
f=A.a([],q)
a2=new A.aI(g.r,B.ak,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i6(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i6(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bz()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.V,B.R,B.X,B.Y,B.W)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.h.F(a7*(0.35+B.n.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.n.F(w,3)
p=G.ami.j((1-a5)*0.9)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.O(new A.m(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ajW.j(0.1*(1-a5))
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.O(new A.m(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bX8(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.n.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bzX.j(0.18*p)
$.U()
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=o.gp(0)
d.O(new A.m(r,q),5,n)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=D.btm.j(0.9*p).gp(0)
d.O(new A.m(r,q),1.4,n)}},
c98(d,e){switch(d){case 0:return e.b?D.hVQ:D.b4e
case 1:return e.b?D.hW3:D.b4c
case 2:return D.b4b
case 3:return D.b4a
case 4:return D.b4d
default:return D.b4f}},
aFu(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Se(d,e,f,g){var w,v=this,u=D.a7Y[e],t=v.c98(e,g),s=new C.brR(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7Y[e],l=e===0
m=B.h.D(((l?D.aP1:D.aP7).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aaU
s.as=D.Fh
if(l){s.a=o?v.aFu(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.m(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.m(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Fh
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.m(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.m(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.m(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.m(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eEP
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eGc
if(e===4)s.as=new A.m(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.m(-3-m,p)
s.as=new A.m(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.eIz
s.as=D.aPk}if(e===2&&g.x!=null&&f<g.y){s.a=v.aFu(f,5)
s.b=0.4
s.as=new A.m(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aFu(f,e*3)
s.b=0.5
s.c=0.4}}C.hON(d,u.a,u.b*1.2,t,s,f,e,null)},
bKa(d,e,f){var w=new C.bWr(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd5(d){return this.c}}
C.ahn.prototype={
a9(){return"_Stand."+this.b}}
C.afh.prototype={}
C.lR.prototype={}
C.bVb.prototype={
bEG(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aT()
this.c=s},
GS(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bVc())
return r},
atf(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aPh(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aon(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.d()
v=v.h(0,w)!=null&&u.K(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.d()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzV(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bVd(this))
return B.d.gH(w)}}
C.aw1.prototype={}
C.A_.prototype={}
C.amp.prototype={
gCK(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bPY(),A.T(w).k("X<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Nm.prototype={
garj(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCK(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d6V(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.garj(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lR(B.a.i(s.a),p,B.d.c9(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bd3.prototype={}
C.abj.prototype={}
C.bku.prototype={}
C.ahl.prototype={}
C.alH.prototype={
R(){return new C.alI(B.bH,A.a([],x.cC),A.a([],x.e4),null,null)},
gd8(){return this.d}}
C.alI.prototype={
gNJ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHj(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbdp(){var w,v=this,u=v.e
if(u===$){w=v.qi(v.gclz())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbdp().fU(0)},
t(){this.gbdp().t()
this.bz2()},
fU(d){this.l(new C.bO5(this))},
clA(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fO(0,v)
if(w.c!=null)w.l(new C.bO0())},
bbI(){var w,v,u,t=this,s=t.r
B.d.a7(s)
w=t.gNJ()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bku(u,(u+0.5)/v,w[t.x].b[u]))},
fO(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bO6())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.cc1()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNJ()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.auN(v,0.8,B.d0)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.auN(m.cy,0.8,G.nP)
m.b0V("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.auN(q,0.88,D.lX)
p=m.gNJ()[m.x]
n=p.c
if(u===n){m.b0V("The right gourd fell! It was "+p.b[n]+".")
return}}}},
auN(d,e,f){var w,v,u,t=new A.e6()
t.cW(B.h.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ahl(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b0V(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Rk()}},
cc1(){var w=this
if(w.x+1>=w.gNJ().length){w.Rk()
return}++w.x
w.bbI()},
Rk(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Rk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNJ().length
r=C.bJD(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bNZ())
w=2
return A.b(C.Cc(u.a.d,r),$async$Rk)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Cd(t.d,t.c.a,"catch",u.z),$async$Rk)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bO_())
return A.h(null,v)}})
return A.i($async$Rk,v)},
C(d){var w,v=this,u=null
if(v.CW)w=v.cfW()
else w=v.ch?v.cfX():A.at(new A.C(B.ez,A.w(A.a([D.b_p,B.N,D.h90,B.S,D.hfd,B.ed,C.uP("Play",v.gf3(v),B.d0,B.fR,D.fM)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tZ("Calabash Catch",w,B.fh,u)},
cfX(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.Iz
p.push(A.V(u,v?B.aC:B.bX,r,r,r,22))}p.push(B.aX)
v=s.x
u=s.gNJ()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aYW,r,r,r))
p.push(B.bc)
v=A.n(14)
p.push(A.q(r,A.c(""+s.z,r,r,r,r,r,r,B.iY,r,r,r),B.f,r,r,new A.p(B.by,r,r,v,r,r,B.m),r,r,r,r,A0.De,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.K(B.d0,B.r,3)
return A.w(A.a([new A.C(D.bHU,p,r),A.q(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fTJ,B.K,r,r),B.f,r,r,new A.p(D.r1,r,t,v,r,r,B.m),r,r,r,B.eM,B.bg,r,r,1/0),B.aj,A.E(A.cg(new C.bO4(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cfW(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qC,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNJ().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Xe,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bhs,u,t,B.aN,new C.IX(s,r,w.cx,v),B.aN,A.at(C.uP("Back to the games",new C.bNY(w),B.d0,B.kn,D.fM),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bfB.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.U(),a3=A.L()
a3.san(A.jT(B.J,new A.m(0,a0),D.d9W,G.aDy,B.w,e))
a4.aE(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.ON.gp(0)
a4.O(new A.m(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aI(a2.r,B.ak,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ac()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.U()
w=A.L()
w.r=D.boD.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aI(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cm(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cm(r+14,t,r+26,w))
a2.E(new A.bz())
w=A.L()
w.r=D.aiV.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cul[q]
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.aiV.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.m(r,a2),new A.m(r+p*46,w),s)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.aic.gp(0)
a4.O(new A.m(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bpD.gp(0)
a4.aE(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.akB.gp(0)
t.c=2
a4.ah(new A.m(w,a1),new A.m(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.c1(new A.m(u,s),12,54)
$.U()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lX.j(0.6).gp(0)
a4.c2(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.ajF.gp(0)
a4.O(D.eE4,14,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.buF.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.eE5,D.eFc,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.san(new A.anj(D.eHn,46,D.djI,B.vS,B.w,e,e,0))
a4.O(B.J,34,m)
m=A.c1(D.eHt,8,12)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c2(m,l)
k=new A.iT(new A.eE(n.c,e,e,B.cV,e,e,e,e,e,e,D.fRu),B.K,B.ca,new A.k3(1),e,e,3,e,B.cb,e,B.cK)
k.nH(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.c1(B.cN,m.gb4(m)+8,l),B.h5)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.r1.gp(0)
a4.aq(j,l)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lX.gp(0)
l.b=B.ae
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.m(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.ixi(a4,new A.m(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.e0,(w+1)/2)
h=A.c1(new A.m(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aI($.U().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cm(h.gbE().a,s+8,w+8,s))
a3.E(new A.bz())
m=A.L()
m.r=D.a08.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.Cr.gp(0)
m.c=1.4
a4.ah(new A.m(t,a2),new A.m(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nP.gp(0)
a4.aE(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.boJ.gp(0)
a4.c2(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.O(new A.m(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h0(e,B.cK,e,e,e,A.cW(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d0.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Er,e,e),"+"+a2),B.a7,B.ca,e,B.e4,B.cb)
k.eJ()
k.a5(a4,new A.m(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.Rw.prototype={
C(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aDq(w.c,w.f,v),B.aB),s=A.n(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.w(A.a([new A.a5(u,u,t,v),B.cR,A.q(v,A.c(w.d,v,1,B.a2,v,v,v,D.fJQ,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nm,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aDq.prototype={
a5(d,e){var w=e.eq(B.J),v=e.gdm(),u=this.c?0.8:0
return O.hvE(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aBN.prototype={}
C.awC.prototype={
R(){return new C.awD(A.S(x.S,x.cq),null,null)},
gd8(){return this.d}}
C.awD.prototype={
gkW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hUE(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaHy(){var w=this.z
return w===$?this.z=this.Yr(0):w},
gj7(){var w,v=this.Q
if(v===$){w=this.gkW()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c4(w,-1,!1,x.S)}return v},
Yr(d){var w,v,u,t,s=this.gkW()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aBN(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aBN(v[t],u[t],-1))
v=new A.e6()
v.cW(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.ds(w,w.r,w.e);w.B();){v=w.d
v.r.t()
v.r=null
u=v.eU$
u.b=!1
B.d.a7(u.a)
u=u.goU()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e3$.a.a7(0)
v.qT()}this.bzv()},
cWw(d,e){var w,v,u,t,s,r=this
if(d>=r.gj7().length||r.gj7()[d]!==-1||B.d.q(r.gj7(),e))return
w=r.gaHy()[e]
v=r.gkW()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.cu9(r,e,w,v))
A.cC(B.m3,new C.cua(r))
return}++r.r
u=A.br(null,B.hz,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.cub(r,d,e,w,v))
u.ct(0)},
kR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkW()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cG(n,0,new C.cuc())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.cud(t,r))
w=5
return A.b(C.Cc(t.a.d,r),$async$kR)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Cd(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kR)
case 6:t.ch=f
if(t.c!=null)t.l(new C.cue())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.B();){q=n.d
q.r.t()
q.r=null
p=q.eU$
p.b=!1
B.d.a7(p.a)
p=p.goU()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e3$.a.a7(0)
q.qT()}o.a7(0)
t.l(new C.cuf(t))
case 1:return A.h(u,v)}})
return A.i($async$kR,v)},
C(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qC,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Xe,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tZ(q,A.cn(A.a([D.ahL,w,v,B.aN,new C.IX(u,t,r.ch,p),B.aN,A.at(C.uP("Back to the games",new C.cu5(d),B.d0,B.kn,D.fM),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.fh,p)}w=r.gkW()
v=r.e
s=w[v]
return new C.tZ(q,new A.C(B.tI,A.w(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aYR,B.K,p,p),A.E(A.cg(new C.cu6(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.fh,p)}}
C.bf2.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cUu(),A.T(b2).k("X<1>")).gI(0),b4=a9.b,b5=b4.a6(0,B.KD)
$.U()
w=A.L()
w.r=D.lY.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a6(0,D.eDS)
u=A.L()
u.r=B.r2.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.m(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.ec.aA(0,B.h.D(b2[p],0,1))
l=$.U().r
k=A.a([],s)
j=new A.aI(l,B.ak,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.cm((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aI(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.ve(o,!1,n);i.B();){h=i.c
if(h===0||i.f)A.bi(A.k_(b1));--h
g=new A.C9(i,h)
f=0
for(;;){i.jX()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jX()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.U()
a1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a1.r=B.aT.gp(0)
a1.b=B.ae
a1.c=3
b6.af(new A.aI(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aI(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.ve(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.B();){a0=k.c
if(a0===0||k.f)A.bi(A.k_(b1));--a0
k.jX()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.U()
a4=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a4.r=D.Hl.gp(0)
a4.b=B.ae
a4.c=h
a4.d=B.bG
b6.af(new A.aI(l,a2,b0,new A.b7([new A.C9(k,a0),0,a1*m,!0]),a3),a4)
k.jX()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jX()
a5=n[a0].WS(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.c1(new A.m(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c2(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iT(D.fJj,B.a7,B.ca,new A.k3(1),b0,b0,b0,b0,B.cb,b0,B.cK)
a8.eJ()
a8.a5(b6,new A.m(w*(0.15+p*0.14),b2-B.n.F(p,3)*14))}},
aD(d){return!0}}
C.aAy.prototype={
R(){return new C.aAz(A.aR(x.S))},
gd8(){return this.d}}
C.aAz.prototype={
gkW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hVz(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.bbR()},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.a3()},
bbR(){var w=this.ch
if(w!=null)w.a2(0)
this.ch=A.d5(B.tC,new C.cJ4(this))},
bt4(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkW()[v.e]
if(w.e[d]===w.b)v.l(new C.cJc(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cJd(v,d))
A.cC(B.j5,new C.cJe(v))}},
d14(){var w=this
if(!w.as&&w.f<w.gkW()[w.e].d.length)w.l(new C.cJf(w))},
kR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkW()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a2(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cJg(t,s))
w=5
return A.b(C.Cc(t.a.d,s),$async$kR)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Cd(q.d,q.c.a,"who",t.r),$async$kR)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cJh())
w=1
break
case 4:t.l(new C.cJi(t))
t.bbR()
case 1:return A.h(u,v)}})
return A.i($async$kR,v)},
C(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkW().length+" guessed",a2,a2,a2,a2,a2,a2,B.qC,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Xe,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tZ(a1,A.cn(A.a([D.bhD,w,v,B.aN,new C.IX(u,t,a0.ax,a2),B.aN,A.at(C.uP("Back to the games",new C.cJ6(a3),B.d0,B.kn,D.fM),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.fh,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkW()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.M0,B.K,a2,a2),B.S,A.at(A.l4(new C.cJ7(a0,r),a2,B.b0,B.hz,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.az],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ax(B.d0,2,B.r,-1)
k=o+1
w.push(new A.rv(new A.bq(0,1,u),new C.cJ8(),A.q(a2,new A.c_(B.aJ,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.r0(A.c(""+k,a2,a2,a2,a2,a2,a2,B.oz,a2,a2,a2),D.lX,a2,12,a2),B.ar,new A.bu(1,B.b8,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fWm,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.r1,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cA,B.bg,a2,a2,a2),B.b0,B.j5,a2,new A.bb("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bK(!1,D.hnk,a2,a2,!0,a2,a2,a2,a0.gd13(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.lY.j(0.2)
q=A.n(16)
p=A.K(D.lY,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fT,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.w(A.a([m,B.S,C.uP(v,a0.gqC(a0),B.d0,B.jH,D.fM)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dA:B.d0.j(0.2)
g=new A.aQ(16,16)
l=new A.ax(n.q(0,o)?B.fs:B.d0,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.y8:a2
t.push(new A.rv(new A.bq(0,i,u),new C.cJ9(),A.aA(a2,A.q(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.agS,new A.p(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jF,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cJa(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mw,a2,new A.bb("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bY(B.fX,t,B.bq,a2,10,10))}return new C.tZ(a1,A.cn(w,a2,a2,B.aoF,a2,a2,B.ah,!1),B.fh,a2)}}
C.aBx.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aJ2.prototype={
b0(){this.b8()
this.b5()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdP())
w.bd$=null
w.a3()}}
C.ah9.prototype={
asP(d){},
atj(){var w=this,v=w.qi(new C.fhz(w))
v.fU(0)
w.MS$!==$&&A.aT()
w.MS$=v}}
C.aMW.prototype={
gbpq(d){var w=this.c
return B.a.av(w,0,Math.min(this.d,w.length))},
X_(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.c=d
w.d=0
w.b=A.d5(E.a1N,new C.frW(w))},
bvr(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a2(0)}}
C.anI.prototype={
R(){return new C.anJ(new C.anS(),A.a([],x.t),new A.eO(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anJ.prototype={
gNH(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHj(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghl(d){var w,v=this,u=v.e
if(u===$){w=C.NE(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqK(){var w=this.r
return w===$?this.r=new C.aMW(new C.bVY(this)):w},
garF(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNH()[v].c)u.push(1)
return u.length},
gboG(){var w=this.ghl(0)
return w.gzV()==null?"Elder":B.a.i(w.gzV().b)},
Z(){this.a4()
this.atj()},
t(){var w,v=this
v.gqK().t()
v.f.t()
w=v.MS$
w===$&&A.d()
w.t()
w=v.qp$
w.V$=$.ay()
w.W$=0
v.bza()},
cQB(){var w=this
w.l(new C.bVV(w))
w.gqK().X_(w.gNH()[w.x].a)},
M3(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqK()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qp$.a
v.ax=u
v.ay=u+1
v.l(new C.bVT())
A.cC(B.hz,new C.bVU(v))},
bt0(){var w=this.garF(0)/this.gNH().length*100
if(w>=90)return D.ffT
if(w>=75)return D.fdK
if(w>=60)return D.f3X
if(w>=45)return D.f7x
return D.eZa},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cyD()
w=A.bS(0,new A.e9(A.b4(m,m,m,new C.bw_(n,n.qp$),B.aB),m),0,0,0)
if(!n.Q){v=D.r1.j(0.96)
u=A.n(20)
t=A.K(B.d0,B.r,3)
u=A.q(m,A.w(A.a([A.c("Elder "+n.gboG()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aZO,B.K,m,m),B.S,C.uP("Start the test",n.gCA(),B.d0,B.jm,D.fM)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.m),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gNH()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aZQ,m,m,m)
if(n.Q){t=n.gqK()
t=t.d<t.c.length}else t=!1
if(t)u=D.fBL
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aQ(10,10)
o=new A.ax(D.Cr,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.c(q[r],m,m,m,m,m,m,D.fN9,B.K,m,m),B.f,m,D.agS,new A.p(D.bky,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.PA,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bVW(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bY(B.fX,s,B.bq,new A.bb("o"+t,x.W),8,8)}u=A.w(A.a([v,B.aj,A.p0(u,B.nj,A.qd(),B.b0,B.b0,A.Me())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tZ("Village School",new A.am(B.a0,m,B.ab,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fh,m)},
cyD(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bt0(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNH()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.d0,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fRN,B.K,i,i)
r=A.c("Signed by Elder "+j.gboG(),i,i,i,i,i,i,D.fQo,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fVI,i,i,i),D.eQJ],q)
o=A.c(h.b,i,i,i,i,i,i,D.fXH,i,i,i)
n=j.garF(0)
m=j.gNH()
u=A.q(i,A.w(A.a([D.h8d,B.at,s,r,B.S,new A.am(B.z,i,B.ab,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adR,i,i,i),B.N,D.avL],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.r1,i,t,u,i,i,B.m),i,i,i,i,B.f7,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.az,new C.IX(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.hop,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aQ(14,14)
k=new A.ax(B.by,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.w(A.a([A.c(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fT1,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fVj,i,i,i)],q),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dA,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cA,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.az)
s.push(A.at(C.uP("Back to the games",new C.bVP(j),B.d0,B.kn,D.fM),i,i,i))
return new C.tZ("Village School",A.cn(s,i,i,B.bR,i,i,B.ah,!1),B.fh,i)}}
C.bw_.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qp$.a
a0.CX(e.f.Nr(a1))
w=C.hqz(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bW(0,w.c)
if(e.Q){u=e.gqK()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d3H[s]-6
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=D.H6.gp(0)
a0.aE(new A.a4(u,340,u+12,450),r)}u=A.bx(D.abN.cu(10),B.il)
$.U()
r=A.L()
r.r=D.Cr.gp(0)
a0.aq(u,r)
r=A.bx(D.abN,B.iE)
u=A.L()
u.san(A.jT(new A.m(30,96),new A.m(420,346),D.dpC,f,B.w,f))
a0.aq(r,u)
q=new A.e6()
q.cW(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.c1(new A.m(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c2(o,r)}u=A.L()
u.r=I.alr.gp(0)
a0.aE(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.ft0,u)
u=A.L()
u.r=B.bO.gp(0)
a0.aE(D.ft4,u)
u=A.bx(D.fsV,B.ht)
r=A.L()
r.r=D.a08.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqK().gbpq(0)
m=A.h0(f,B.cK,f,7,f,A.cW(f,f,f,f,f,f,f,f,f,D.h_2,u+(t?"|":"")),B.a7,B.ca,f,B.e4,B.cb)
m.nH(346)
J.bs(v.save())
u=A.hS(D.abN)
r=$.lI()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.m(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a4(u,r,u+40,r+90),B.h5)
u=A.L()
u.r=D.bAR.gp(0)
a0.aq(r,u)}}else{m=A.h0(f,B.cK,f,f,f,D.fJz,B.K,B.ca,f,B.e4,B.cb)
m.nH(340)
m.a5(a0,new A.m(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.n.F(e.gqK().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.m(70+o+k*6,166+l*70),1.6,j)}u=e.ghl(0).gzV()
i=(u==null?f:u.c)===D.p2?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fhA(d,a0,i,t,h,D.eF1)),new A.y(520,new C.fhB(a0,d,t)),new A.y(575,new C.fhC(a0,d,t)),new A.y(585,new C.fhD(this,a0,d,t)),new A.y(615,new C.fhE(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fhF())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cfY(d,e){var w,v,u,t,s,r,q,p=$.U(),o=A.a([],x.v),n=new A.aI(p.r,B.ak,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}}n.E(new A.bz())
return n},
aD(d){return!1}}
C.anG.prototype={
R(){return new C.anH(new C.anS(),A.S(x.S,x.i),new A.eO(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anH.prototype={
gkW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hUt(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj7(){var w=this.z
return w===$?this.z=this.Gq(0):w},
gaNR(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Gq(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.c9(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Gq(0):r).length);++v}s.Q=w
r=w}return r},
Gq(d){var w,v,u,t,s=this.gkW()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e6()
u.cW(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eL(u,new C.bVB())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.atj()},
t(){var w,v=this
v.e.t()
w=v.MS$
w===$&&A.d()
w.t()
w=v.qp$
w.V$=$.ay()
w.W$=0
v.bz9()},
asP(d){var w,v,u,t,s,r=this,q=r.gj7().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.c9(u===$?r.z=r.Gq(0):u,v)
s=r.gaNR()
s[v]=s[v]+(450*(t+0.5)/q-r.gaNR()[v])*Math.min(1,w)}},
d6v(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj7().length)return
w=v.y
if(w===-1){v.l(new C.bVM(v,d))
return}if(w===d){v.l(new C.bVN(v))
return}v.l(new C.bVO(v,B.d.c9(v.gj7(),v.y),d,B.d.c9(v.gj7(),d)))},
cRj(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Gq(0):u).length))break
t=s.gkW()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Gq(0):u)[v]]===v);++v}s.l(new C.bVH(s,B.d.cC(w,new C.bVI())))},
kR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkW().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bVJ(t,s))
w=5
return A.b(C.Cc(t.a.d,s),$async$kR)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Cd(q.d,q.c.a,"lineup",t.r*10),$async$kR)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bVK())
w=1
break
case 4:t.l(new C.bVL(t))
case 1:return A.h(u,v)}})
return A.i($async$kR,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkW().length+" lines right",k,k,k,k,k,k,B.qC,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tZ("Line Up",A.cn(A.a([D.ahL,w,B.aN,new C.IX(v,u,l.ch,k),B.aN,A.at(C.uP("Back to the games",new C.bVD(d),B.d0,B.kn,D.fM),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.fh,k)}w=A.a([],x.t)
for(t=0;v=l.gkW(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bVE(l))
u=A.bS(0,A.cg(new C.bVF(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aZQ,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.w(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fSf,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fUy,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lY:G.nP,B.r,2)
r.push(A.q(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bVG(l),x.cM).aJ(0,", then ")+".",k,k,k,k,k,k,D.fWL,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.m),k,k,k,B.d3,B.bg,k,k,1/0))}if(!l.at)r.push(C.uP("That is my line!",l.gcRi(l),B.d0,B.h2,D.fM))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uP(w,l.gqC(l),B.d0,B.jH,D.fM))}return new C.tZ("Line Up",new A.am(B.a0,k,B.ab,B.t,A.a([u,s,A.ao(12,A.w(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fh,k)}}
C.bmk.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qp$.a
c7.CX(c5.e.Nr(c8))
w=C.hqz(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bW(0,w.c)
u=c5.gj7().length
t=$.U().r
s=x.v
r=new A.aI(t,B.ak,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.cm(225,500,440,470))
q=A.L()
q.r=D.a08.gp(0)
q.b=B.ae
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aI(t,B.ak,c4,c4,l)
l.push(new A.aZ(o,n))
k.ac()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.bz()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ac()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=[B.d0,G.nP,D.lY,B.aH][B.n.F(p,4)].gp(0)
c7.af(k,m)}this.b3I(c7,"OLDEST",D.eG_,B.d0)
this.b3I(c7,"YOUNGEST",D.eFs,B.bf)
t=A.bx(D.fsP,B.h5)
s=A.L()
s.r=D.H6.gp(0)
c7.aq(t,s)
s=A.bx(D.fsO,B.iE)
t=A.L()
t.r=D.Cr.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dx9())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.c9(a1===$?c5.z=c5.Gq(0):a1,f)
o=c5.gaNR()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkW()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkW()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.U()
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.r=B.d0.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.m(o,520),54,a9)}a9=D.dtO[B.n.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.m(-3-b2*8,-56)
else b9=a3?D.eI6:c4
if(b1)c0=new A.m(3+b2*8,-56)
else if(h&&a7)c0=D.aPk
else c0=a3?new A.m(30,-104+Math.sin(e)*5):c4
C.Tt(c7,new A.m(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.KG,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iT(new A.eE(a8,c4,c4,B.cV,c4,c4,c4,c4,c4,c4,D.fPT),B.a7,B.ca,new A.k3(1),"\u2026",c4,1,c4,B.cb,c4,B.cK)
c1.nH(q)
c2=A.bx(A.c1(new A.m(o,650),24,c1.b.c+16),B.h5)
$.U()
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=B.iN
else a9=a7?B.tv:D.r1
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=D.lY
else a9=a7?G.nP:D.lX
a8.r=a9.gp(0)
a8.b=B.ae
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.m(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.iT(new A.eE(""+(a2+1),c4,c4,B.cV,c4,c4,c4,c4,c4,c4,D.fQc),B.a7,B.ca,new A.k3(1),c4,c4,c4,c4,B.cb,c4,B.cK)
c3.eJ()
c3.a5(c7,new A.m(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.c1(B.J,4,8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=[B.d0,G.nP,D.lY,B.aH,B.c][B.n.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b3I(d,e,f,g){var w,v,u=null,t=A.h0(u,B.cK,u,u,u,A.cW(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Er,u,u),e),B.a7,B.ca,u,B.e4,B.cb)
t.eJ()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aI(0,new A.m(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a3f.prototype={
a9(){return"_Trip."+this.b}}
C.anC.prototype={
R(){return new C.anD(D.YZ,new A.eO(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anD.prototype={
gEa(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHj(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghl(d){var w,v=this,u=v.e
if(u===$){w=C.NE(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqK(){var w=this.f
return w===$?this.f=new C.aMW(new C.bVn(this)):w},
gUX(){var w=this.ghl(0)
return w.gzV()==null?"Grandma":B.a.i(w.gzV().b)},
Z(){this.a4()
this.atj()},
t(){var w,v=this
v.gqK().t()
w=v.MS$
w===$&&A.d()
w.t()
w=v.qp$
w.V$=$.ay()
w.W$=0
v.bz8()},
asP(d){var w,v,u,t=this
if(t.r!==D.afA)return
w=B.dS.aA(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gEa()
if(v+1>=u.length){t.r=D.afB
t.XX()}else{++t.w
t.ay=!1
t.r=D.Z_
t.gqK().X_(u[t.w].a)}if(t.c!=null)t.l(new C.bVl())}},
XX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$XX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqK().X_("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gEa().length
r=C.bJD(t,u.z,s)
u.as=r
w=2
return A.b(C.Cc(u.a.d,r),$async$XX)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Cd(s.d,s.c.a,"journey",u.x*10),$async$XX)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bVf())
return A.h(null,v)}})
return A.i($async$XX,v)},
buj(){this.aWH()},
aWH(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.afA
if(w.c!=null)w.l(new C.bVg())},
M3(d){var w,v,u,t,s=this
if(s.r!==D.Z_)return
w=s.gEa()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bVk(s,d,v))
u=s.gqK()
t=s.w
u.X_(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cWv(){if(this.r!==D.C_)return
this.aWH()},
C(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e9(A.b4(s,s,s,new C.blK(t,t.qp$),B.aB),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gEa().length;++w){v=t.w
if(w<v||t.r===D.afB)v=B.d0
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(new A.bu(1,B.b8,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.xi,s,s,s,s),s))}p.push(B.b6)
p.push(D.h9U)
return new C.tZ("Safari Journey",new A.am(B.a0,s,B.ab,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cq4(),s,s,10,10,s,s)],q),s),B.fh,s)},
cq4(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bVj(o),l=D.r1.j(0.96),k=A.n(22),j=A.K(B.d0,B.r,3)
switch(o.r.a){case 0:w=A.w(A.a([A.c("A long drive to the village of Elder "+o.gUX()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aZO,B.K,n,n),B.S,C.uP("Start the journey",o.gbui(),B.d0,D.bVN,D.fM)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bhd
break
case 1:w=o.w
v=o.gEa()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aQ(14,14)
p=new A.ax(D.lX,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.c(r[s],n,n,n,n,n,n,D.aZ6,B.K,n,n),B.f,n,D.ah_,new A.p(D.amE,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,B.xd,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bVh(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.w(A.a([w,B.N,A.bY(B.bI,t,B.bq,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gEa().length?"Drive home":"Drive on"
v=A.w(A.a([w,B.N,new A.bJ(B.a9,n,n,C.uP(v,o.gcWu(),B.d0,B.jH,D.fM),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUX()),B.N,A.c(""+o.x+" of "+o.gEa().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aZp,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aT3(v)
u=C.aT3(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adR,n,n,n))}w.push(B.N)
w.push(A.at(C.uP("Back to the games",new C.bVi(o),B.d0,B.kn,D.fM),n,n,n))
w=A.w(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aGn,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.blK.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qp$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gEa(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.afA,d2=c7*0.5
c8=A.ap(D.bm4,D.bx1,d0)
c8.toString
w=A.ap(D.a_k,G.akb,d0)
w.toString
v=A.ap(B.v_,D.bvm,d0)
v.toString
$.U()
u=A.L()
t=x.O
u.san(A.jT(B.J,new A.m(0,d2),A.a([c8,w,v],t),G.a6l,B.w,c3))
d3.aE(new A.a4(0,0,0+c6,0+c7),u)
s=new A.m(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wC(s,60,A.a([D.bvL,B.L],t),c3,B.w,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_x.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.n.F(r,3)*22
for(o=0;o<4;++o){n=D.dKI[o]
$.U()
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.m(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.U()
j=A.a([],m)
i=new A.aI(k.r,B.ak,c3,c3,j)
j.push(new A.aZ(0,v))
i.ac()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.aj(d)
i.ac()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
$.U()
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=A.ap(l===0?D.bkB:D.bAe,D.bpM,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cfZ(d3,new A.m(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.U()
w=A.L()
v=A.ap(D.alL,D.Hl,d0)
v.toString
w.san(A.jT(new A.m(0,d2),new A.m(0,c7),A.a([v,D.bvN],t),c3,B.w,c3))
d3.aE(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.boZ.gp(0)
d3.aE(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.bzQ.gp(0)
d3.aE(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=I.O_.gp(0)
d3.aE(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.U()
b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.r=D.bkf.gp(0)
d3.aE(new A.a4(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aI(b1.r,B.ak,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ac()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.bz()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ac()
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.bxW.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b1.r=D.fM.gp(0)
d3.aE(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.H6.gp(0)
d3.aE(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a4(b0,a4,b0+60,a5),B.jL)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.bBm.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.Cr.gp(0)
b0.b=B.ae
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iT(new A.eE(b6,c3,c3,B.cV,c3,c3,c3,c3,c3,c3,D.fOh),B.a7,B.ca,new A.k3(1),c3,c3,c3,c3,B.cb,c3,B.cK)
b7.eJ()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.m(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.afB
else if(r===c4.w){b0=c4.r
b0=b0===D.Z_||b0===D.C_
b8=b0}else b8=!1
if(a7){b0=c4.ghl(0).gzV()
b9=(b0==null?c3:b0.c)===D.p2?1:0}else b9=[0,3,6,7,2,1,4,5][B.n.F(r,8)]
b0=c4.gqK()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.C_
b0=c0?C.hQk(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Z_?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.m(40,-110+Math.sin(g)*10)
else a7=c0?new A.m(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Tt(d3,new A.m(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.m(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bLy(d3,new A.m(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.bzj.j(0.5*(1-c2)).gp(0)
d3.O(new A.m(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.YZ)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.m(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.C_&&c4.ax){b7=A.h0(c3,B.cK,c3,c3,c3,A.cW(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d0,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.JC,c3,c3),"BEEP BEEP!"),B.a7,B.ca,c3,B.e4,B.cb)
b7.eJ()
b7.a5(d3,new A.m(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cfZ(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bvg,D.boh,g)
o.toString
if(f){w=new A.aI($.U().r,B.ak,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.cm(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.cm(v+9,t,v+16,u))
w.E(new A.bz())
t=A.L()
t.r=D.a0G.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d7V[r]
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=D.a0G.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.m(w,t),new A.m(v+q*24,s),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=o.gp(0)
d.O(new A.m(v+q*26,u),10,p)}}else{w=e.a6(0,D.eI3)
$.U()
v=A.L()
v.r=D.bkh.gp(0)
v.c=4
d.ah(e,w,v)
v=A.c1(e.a6(0,D.eI4),16,60)
w=A.L()
w.r=o.gp(0)
d.c2(v,w)}},
bLy(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.YZ?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jy(0,a0)
for(w=0;w<2;++w){v=D.dCc[w]
u=d.ay&&d.r!==D.YZ&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.U()
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bA5.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.brY.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.bl.gp(0)
q.c=2
a2.ah(B.J,new A.m(s*9,t*9),q)}a1.restore()}p=A.rj(D.ftd,B.h5,B.h5,B.i9,B.hT)
$.U()
t=A.L()
t.san(A.jT(D.eE7,B.aaH,D.dr4,G.a6l,B.w,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.dkv[B.n.F(o,4)].gp(0)
a2.aE(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.C_&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nm(A.bx(l,B.pp)),$.n_(),!0)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=D.a_k.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.C_?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Tt(a2,new A.m(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aPb,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.pp)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=D.amG.gp(0)
i.b=B.ae
i.c=2
a2.aq(j,i)}d=A.bx(D.Wk,B.pp)
t=A.L()
t.r=D.a_k.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nm(A.bx(D.Wk,B.pp)),$.n_(),!0)
C.Tt(a2,new A.m(D.Wk.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aPb,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.Wk,B.pp)
d=A.L()
d.r=D.amG.gp(0)
d.b=B.ae
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Ap.CR.gp(0)
a2.O(D.eGf,4,d)
d=A.L()
d.r=D.H6.gp(0)
a2.aE(D.fum,d)
for(w=0;w<3;++w){v=D.dCe[w]
d=A.bx(new A.a4(v,-96,v+28,-79),B.jL)
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.Hl.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aDt.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bjh.prototype={}
C.aDv.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bji.prototype={}
C.aDw.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bjj.prototype={}
C.a7M.prototype={
C(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.blR(w),B.aB),w)}}
C.blR.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dA1[B.n.F(n,6)]
k=$.U()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=l.gp(0)
d.aE(new A.a4(m,0,m+v,u),j)
if(B.n.F(n,3)===0){j=A.a([],o)
i=new A.aI(k.r,B.ak,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ac()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.bz()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tZ.prototype={
C(d){var w=null,v=x.p,u=A.a([A.aJ(w,w,w,w,B.RC,w,w,w,new C.bVe(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fLt,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.a_4,A.q(w,A.bn(!0,A.w(A.a([D.cb1,new A.C(D.bMt,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bct,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IX.prototype={
C(d){var w=null,v=this.d,u=C.aT3(v),t=C.iA0(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.d0.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fO2,w,w,w)],x.p)
if(this.e)p.push(D.eKy)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.C(B.ri,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.BE,w,w,w),w))
return A.q(w,A.w(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.m),w,w,w,w,B.bD,w,w,w)}}
C.Xd.prototype={
R(){return new C.boF(A.S(x.N,x.S),B.n.F(Date.now(),1e5))},
d2u(d){return this.f.$1(d)},
geb(){return this.d}}
C.boF.prototype={
gTX(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.Qt()},
Qt(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Qt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bW_(u.a.d),$async$Qt)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.doY[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bVZ(p,(o===$?u.d=q.c:o).a,r),$async$Qt)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e80(u,n))
return A.h(null,v)}})
return A.i($async$Qt,v)},
uU(d){return this.ctd(d)},
ctd(d){var w=0,v=A.j(x.H),u=this,t
var $async$uU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).ca(A.e4(new C.e81(d),!1,null,x.H)),$async$uU)
case 2:u.r=B.n.F(Date.now(),1e5)
if(u.c!=null)u.Qt()
return A.h(null,v)}})
return A.i($async$uU,v)},
gb9c(){var w,v,u,t=C.NE(this.gTX()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3X(d){return this.cAA(d)},
cAA(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d2u(r),$async$a3X)
case 2:if(u.c!=null)u.l(new C.e82(u,r))
return A.h(null,v)}})
return A.i($async$a3X,v)},
PM(d){return this.bUr(d)},
bUr(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$PM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.ht_(t.gTX())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Nm("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).ca(A.e4(new C.e7Z(q),!1,null,r)),$async$PM)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bn(j,new C.e8_(p))
o=s.length
B.d.ck(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3X(A.cJ(s,0,A.dx(2,"count",x.S),r).de(0)),$async$PM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
YT(d,e){return this.bS_(0,e)},
bS_(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$YT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e7Y(e),o,null,!0,!0,x.y),$async$YT)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.ht_(u.gTX()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3X(o),$async$YT)
case 5:case 3:return A.h(null,v)}})
return A.i($async$YT,v)},
abM(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e7V(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.H,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.X9,p,p,p),B.aX],s)
q=A.n(10)
r.push(A.q(p,A.c(i,p,p,p,p,p,p,D.fMn,p,p,p),B.f,p,p,new A.p(B.i0,p,p,q,p,p,B.m),p,p,p,p,B.zJ,p,p,p))
return A.aA(p,A.d3(A.q(p,A.w(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.aX,A.c(e,p,2,p,p,p,p,D.fUr,p,p,p),B.cR,A.c(f,p,3,B.a2,p,p,p,D.fN7,p,p,p)],s),B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a6(B.aw,B.aD,B.w,w,p,p),B.m),p,p,p,p,B.xb,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Ym(d,e,f,g,h,i){return this.abM(d,e,f,g,h,i,null)},
C(a2){var w,v,u,t,s=this,r=null,q=C.NE(s.gTX()),p=s.gTX(),o=C.aT3(s.e),n=C.ht_(p),m=s.a.e&&J.aa(p.z)<2,l=new C.e83(s),k=C.hUt(p,1).length,j=C.hUE(p,1).length,i=C.hVz(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.d0.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.adD,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fRR,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bc,A.E(A.w(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Xr,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),1),A.w(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qC,r,r,r),D.hgf],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.m),r,r,r,r,B.bD,r,r,r)
f=s.Ym("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aA,new C.e84(s,p),l.$1("kahoot"))
h=s.Ym("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lX,new C.e85(s,p),l.$1("fire"))
a0=s.Ym("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.vd,new C.e86(s,p),l.$1("catch"))
j=j!==0?new C.e89(s,p):r
j=s.abM("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hY,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e8a(s,p):r
i=s.abM("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lW,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Ym("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ex,new C.e8b(s,p),l.$1("journey"))
k=k!==0?new C.e8c(s,p):r
k=A.a([g,B.aN,D.hko,B.N,A.li(0.98,A.a([f,h,a0,j,i,e,s.abM("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ev,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Ym("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e8d(s,p),l.$1("school"))],a1),2,12,12,r,B.ea,!0),B.df,A.A(A.a([D.bOi,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fMs,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.h0D,B.bc,new A.bu(1,B.b8,A.w(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hj,r,r,r),A.c(""+v.garj(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.BE,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),r)],a1)
if(v.garj(0).length>=2){f=D.lY.j(0.2)
t=new A.ax(D.lY,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.V(B.fR,D.lY,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e8e(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d0.j(0.2)
t=new A.ax(B.d0,1,B.r,-1)
f=A.aA(r,A.q(r,A.V(B.jm,B.d0,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e8f(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fs.j(0.2)
t=new A.ax(B.fs,1,B.r,-1)
B.d.u(g,A.a([B.b6,f,B.b6,A.aA(r,A.q(r,A.V(B.es,B.fs,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e8g(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c_(B.aJ,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d3,B.bg,r,r,r))}if(s.a.e){j=m?new C.e87(s):new C.e88(a2)
i=A.n(18)
h=A.K(m?B.d0:B.aT,B.r,2)
g=m?B.d0.j(0.12):B.dA
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d0:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.m),r,r,r,r,B.Pp,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hlk)
k.push(B.az)
k.push(D.avL)
return new C.tZ("Family Games \xb7 "+p.b,A.cn(k,r,r,D.bIw,r,r,B.ah,!1),B.fh,r)}}
C.a15.prototype={
a9(){return"_KPhase."+this.b}}
C.anE.prototype={
R(){return new C.anF(D.b45)},
gd8(){return this.e}}
C.anF.prototype={
t(){var w=this.at
if(w!=null)w.a2(0)
w=this.ax
if(w!=null)w.a2(0)
this.a3()},
fU(d){var w,v=this
v.l(new C.bVz(v))
w=v.at
if(w!=null)w.a2(0)
v.at=A.d5(B.fr,new C.bVA(v))},
aS5(){var w=this,v=w.ax
if(v!=null)v.a2(0)
w.l(new C.bVp(w))
v=w.at
if(v!=null)v.a2(0)
w.at=A.d5(B.fq,new C.bVq(w))},
M3(d){var w
if(this.d!==D.af5)return
w=this.at
if(w!=null)w.a2(0)
this.b98(d)},
b98(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.S(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bVv(u,v,d))
u=v.ax
if(u!=null)u.a2(0)
v.ax=A.cC(B.tC,v.giH(v))},
cPV(d){var w=this
if(w.d!==D.Yv)return
if(w.e+1>=w.a.w.length)w.ZG()
else{w.l(new C.bVw(w))
w.aS5()}},
ZG(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$ZG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a2(0)
p=u.x
t=u.a.w.length
s=C.bJD(p,u.w,t)
u.l(new C.bVs(u,s))
w=2
return A.b(C.Cc(u.a.e,s),$async$ZG)
case 2:r=e
t=u.a
w=3
return A.b(C.Cd(t.e,t.f,t.r,u.f),$async$ZG)
case 3:q=e
if(u.c!=null)u.l(new C.bVt(u,r,q))
return A.h(null,v)}})
return A.i($async$ZG,v)},
cQK(){var w,v,u,t,s=this,r=s.a,q=new A.e6()
q.cW(r.w.length*31+B.a.ga_(r.f))
w=s.a.w.length*900
v=A.a([new A.b1("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cJ(r,0,A.dx(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.B();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b1(t,B.h.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bVx())
return v},
C(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b45===r){w=A.a([D.hgE,B.S,A.c(s,t,t,t,t,t,t,B.XA,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fMA,t,t,t))
w.push(B.az)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BJ,B.K,t,t))
w.push(B.ed)
w.push(C.uP("Play",u.gf3(u),B.d0,B.fR,D.fM))
w=A.at(new A.C(B.ez,A.w(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b46===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fUZ,t,t,t),t,t,t)
break A}if(D.af5===r||D.Yv===r){w=u.cvT()
break A}if(D.b47===r){w=u.cg_()
break A}w=t}return new C.tZ(s,w,B.fh,t)},
cvT(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Yv,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aYW,j,j,j),B.aX],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.M0,j,j,j))
g.push(B.ar)
f=A.n(14)
g.push(A.q(j,A.c(""+k.f,j,j,j,j,j,j,B.iY,j,j,j),B.f,j,j,new A.p(B.by,j,j,f,j,j,B.m),j,j,j,j,A0.De,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jK(B.by,j,k.as<5?B.fs:B.d0,9,j,w,j),B.ap)
w=A.n(22)
v=A.K(B.d0,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.w(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lY:G.nP,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fLC,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fXa,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.r1,j,v,w,j,j,B.m),j,j,j,j,B.f7,j,j,1/0),3)
v=A.a([],h)
for(u=k.giH(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bVu(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.n.F(t,4)
n=D.aG_[o]
m=new A.aQ(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aGj[o],j,j,j,j,j,j,D.fNC,j,j,j),B.ar,new A.bu(1,B.b8,A.c(r[t],j,3,B.a2,j,j,j,D.fMx,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aub)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c2y)
v.push(A.aA(j,new A.TK(A.q(j,new A.c_(B.aJ,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),W.aEl,j,B.m),j,j,j,j,B.eM,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.li(1.45,v,2,10,10,j,B.ea,!1),4)],h)
if(i)h.push(D.eJM)
return new A.C(B.a2n,A.w(h,B.l,j,B.e,B.i,0,B.p),j)},
cg_(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cQK(),m=x.p,l=A.a([D.bgu,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qC,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Xe,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d0.j(0.25):B.dA
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d0:B.by,1,B.r,-1)
q=A.c(w<3?D.drl[w]:""+(w+1),o,o,o,o,o,o,B.mf,o,o,o)
s=s?B.u:B.O
l.push(A.q(o,new A.c_(B.aJ,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bu(1,B.b8,A.c(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iY,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cA,B.f2,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IX(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.uP("Back to the games",new C.bVr(p),B.d0,B.kn,D.fM),o,o,o))
return A.cn(l,o,o,B.f7,o,o,B.ah,!1)}}
C.UT.prototype={
R(){return new C.anB(A.S(x.de,x.er))}}
C.anB.prototype={
gDQ(){var w,v=this,u=v.d
if(u===$){w=C.hz1(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gm4(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDQ().b
v=$.ay()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.b9,B.aP),v)}return t},
cje(d){return this.f.c0(0,d,new C.bV_(d))},
Z(){this.a4()
var w=this.gDQ().c
if(w.length===0)w.push(C.hkd(null,0,20,""))},
t(){var w,v,u=this.gm4(0)
u.V$=$.ay()
u.W$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.B();)for(w=J.aP(u.d);w.B();){v=w.gP(w)
v.V$=$.ay()
v.W$=0}this.a3()},
cPL(){if(this.gDQ().c.length>=12)return
this.l(new C.bV0(this))},
jC(d){var w,v,u=this,t=u.gDQ()
t.b=B.a.i(u.gm4(0).a.a)
w=t.garj(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fEx)
return}v=t.c
B.d.a7(v)
B.d.u(v,w)
v=u.c
v.toString
A.a7(v,!1).N(t)},
C(d){var w,v,u=this,t=null,s=new C.bVa(),r=x.p,q=A.a([A.bK(!1,D.h5M,t,t,!0,t,t,t,u.gbtb(u),t,t)],r),p=A.a([D.hkW,B.af,A.aN(t,B.M,!1,t,!0,B.t,t,A.aO(),u.gm4(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.am,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a7,t,B.ao,t,t,t,t),B.az],r)
for(w=0;v=u.gDQ().c.length,w<v;++w)B.d.u(p,A.a([new A.fo(new C.bV9(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uP("\uff0b Add a question",u.gcPK(),B.aT,t,B.c),t,t,t))
return new C.tZ("Make your game",A.cn(p,t,t,D.bIt,t,t,B.ah,!1),q,t)}}
C.asM.prototype={
R(){return new C.aH4(A.a([],x._))},
bw(){return this.r.$0()},
qD(){return this.w.$0()},
geb(){return this.c}}
C.aH4.prototype={
Z(){var w,v
this.a4()
this.wU()
w=this.a
v=w.c
if(v.length!==0)C.a9w(v,w.e,w.d.w)},
wK(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hvW(r,t.e,!1,s.w,new C.e9G(u),null,s),$async$wK)
case 2:w=3
return A.b(u.wU(),$async$wK)
case 3:return A.h(null,v)}})
return A.i($async$wK,v)},
a23(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a23=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hvW(r,t.e,!0,s.w,new C.e9F(u),null,s),$async$a23)
case 2:w=3
return A.b(u.wU(),$async$a23)
case 3:return A.h(null,v)}})
return A.i($async$a23,v)},
wU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BI(q.a.c),$async$wU)
case 7:p=e
if(q.c!=null)n=q.e||J.cM(p)
else n=!1
if(n)q.l(new C.e9I(q,p))
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
return A.b(C.HQ(q.a.c).d9(0,B.re),$async$wU)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e9J(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e9K(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wU,v)},
Q7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Q7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fE7)
w=3
return A.b(C.HQ(t.a.c),$async$Q7)
case 3:r=e
w=4
return A.b(C.h9w(t.a.c,r),$async$Q7)
case 4:q=e
w=5
return A.b(C.HQ(t.a.c),$async$Q7)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e9E(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dT:B.d9,null,B.t,null,s,null,B.lC,null,null,null,null,null,null,null,null,null,null))
t.a.qD()
case 1:return A.h(u,v)}})
return A.i($async$Q7,v)},
Jg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iIP(l),$async$Jg)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.ia5(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b3B(q,p.e,l,"Each family tree costs $"+B.h.a1(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Jg)
case 4:if(!e||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
p=C.hQu(r)
o=Date.now()
n=t.a.c
m=new C.lh(l,r.toUpperCase(),p,!0,B.M,D.EA,new A.W(o,0,!1),0,n,D.vs,B.co)
w=5
return A.b(C.a59(n,m),$async$Jg)
case 5:w=6
return A.b(t.wU(),$async$Jg)
case 6:t.a.bw()
t.a.qD()
if(t.c==null){w=1
break}t.FK(m)
case 1:return A.h(u,v)}})
return A.i($async$Jg,v)},
FK(d){return this.com(d)},
com(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$FK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BI(u.a.c),$async$FK)
case 2:n=l.nU(k.dO(f,new C.e9H(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.he(m,new C.asG(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$FK)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a59(u.a.c,o),$async$FK)
case 6:case 5:w=7
return A.b(u.wU(),$async$FK)
case 7:u.a.qD()
return A.h(null,v)}})
return A.i($async$FK,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.uA(p)
if(r.e)return A.at(A.np(q,p?B.bv:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.ci(r.d)){w=p?B.em:B.c
v=A.n(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.q(q,D.c02,B.f,q,q,new A.p(B.aW.j(0.12),q,A.K(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cH,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcnm(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GR(A.q(q,A.w(A.a([u,B.aN,t,B.N,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ed,A.bH(D.hof,q,r.gaVq(),A.bp(B.bU,q,q,q,q,q,B.a2O,q,new A.ba(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.m),q,q,q,q,D.bLb,q,q,1/0),15,B.ag,1.05,D.aeT,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aX],v)
if(J.cM(r.d))w.push(A.aJ(q,q,q,q,A.V(B.Aq,B.aW,q,q,q,q),q,q,q,new C.e9M(r),q,q,q,q,"Sync family trees with database",q))
if(J.cM(r.d))w.push(A.aJ(q,q,q,q,A.V(B.Am,B.aW,q,q,q,q),q,q,q,r.gaiN(),q,q,q,q,"Transfer / backup file",q))
w.push(A.df(E.av8,q,D.h32,r.gaVq(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GR(r.cLR(J.t(r.d,s),o),14,B.ag,1,D.aeT,q))
B.d.u(w,u)}return A.w(A.a([p,B.az,A.w(w,B.l,q,B.e,B.i,0,B.p)],v),B.B,q,B.e,B.i,0,B.p)},
cLR(d,e){var w=null,v=e.a,u=v?B.em:B.c,t=A.n(14),s=A.K((v?B.eq:B.bP).j(0.55),B.r,1),r=A.a([new A.ab(0,B.H,B.v.j(v?0.35:0.08),B.eH,10)],x.V),q=A.n(14),p=A.q(w,D.c_7,B.f,w,w,new A.p(B.aW.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gasj(),m=d.d?"":" \xb7 Public",l=d.y===D.le?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.C(B.bD,A.A(A.a([p,B.bc,l,A.V(B.Qh,v?B.bv:B.bl,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e9L(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.p(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.asG.prototype={
R(){return new C.aH1(A.a([],x._),A.aR(x.N),A.bcr())},
bw(){return this.r.$0()},
geb(){return this.c}}
C.aH1.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.afi()
w=u.a
v=w.c
if(v.length!==0)C.a9w(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ay()
w.W$=0
this.a3()},
a59(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a59=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.z1("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e96(r),s,null,!0,!0,x.y),$async$a59)
case 3:if(e!==!0||t.c==null){w=1
break}t.KY()
t.l(new C.e97(t,r))
w=4
return A.b(t.uQ(),$async$a59)
case 4:t.a.bw()
t.z1(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a59,v)},
cBc(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.U$.push(new C.e91(w,f,d,e))},
aXN(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dA()
u.ek(w,v,0,1)
u.kc(q,q,1,1)
this.w.sp(0,u)},
bfS(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eU(new Float64Array(16))
q.ef(r)
w=q.DV()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dA()
t.ek(r,u,0,1)
t.kc(v,v,1,1)
t.ek(-r,-u,0,1)
t.j3(0,q)
s.sp(0,t)},
afi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$afi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BI(u.a.c),$async$afi)
case 2:t=s.nU(r.dO(e,new C.e8t(u)))
if(t!=null&&u.c!=null)u.l(new C.e8u(u,t))
return A.h(null,v)}})
return A.i($async$afi,v)},
z1(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wK(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hvW(o,t,!1,r,new C.e8L(u),q.a,s),$async$wK)
case 2:n=A
m=J
w=3
return A.b(C.HQ(u.a.c),$async$wK)
case 3:p=n.nU(m.dO(e,new C.e8M(u)))
if(p!=null&&u.c!=null)u.l(new C.e8N(u,p))
return A.h(null,v)}})
return A.i($async$wK,v)},
KY(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cP(w,0)},
uQ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a59(t,s),$async$uQ)
case 2:return A.h(null,v)}})
return A.i($async$uQ,v)},
a3D(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a3D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uQ(q,t.a.c)){t.z1("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iK5(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a3D)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.KY()
t.l(new C.e90(t,r))
w=4
return A.b(t.uQ(),$async$a3D)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3D,v)},
b5M(){var w=this.c
w.toString
A.a7(w,!1).ca(A.e4(new C.e8I(this),!1,null,x.H))},
a2j(){return this.coo()},
coo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a2j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uQ(m,t.a.c)){t.z1("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e8Y(),A.T(s).k("X<1>")).gI(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ck.E"))
B.d.fg(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.e8Z(n,t,new C.uA(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a2j)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.KY()
t.l(new C.e9_(t,o))
w=6
return A.b(t.uQ(),$async$a2j)
case 6:case 5:if(o.a&&t.c!=null)t.b5M()
case 1:return A.h(u,v)}})
return A.i($async$a2j,v)},
XF(d){return this.bGN(d)},
bGN(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uQ(r,t.a.c)){t.z1("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e8h(t,d),r,null,!0,!0,x.P),$async$XF)
case 3:s=f
if(s==null){w=1
break}t.KY()
t.l(new C.e8i(t,s))
w=4
return A.b(t.uQ(),$async$XF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XF,v)},
a5u(d){return this.cO8(d)},
cO8(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a5u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e99(u,d,new C.uA(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a5u)
case 2:return A.h(null,v)}})
return A.i($async$a5u,v)},
ckr(d){var w=this,v=w.d
v===$&&A.d()
if(C.uQ(v,w.a.c))w.PN(d)
else w.a5u(d)},
alg(d,e){return this.cFg(d,e)},
cFg(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$alg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e93(new C.uA(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$alg)
case 3:case 1:return A.h(u,v)}})
return A.i($async$alg,v)},
Jl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Jl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.le?3:5
break
case 3:w=6
return A.b(C.hio(t.a.c),$async$Jl)
case 6:s=e
o=t.a
r=C.hDU(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.alg(!s,!r),$async$Jl)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aT8(o,t.a.c)){t.z1("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lH(o,"Cancel","Remove",q.y===D.le?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Jl)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aT6(t.a.c,t.d.a),$async$Jl)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.j7(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Jl,v)},
acI(d){return this.bSg(d)},
bSg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$acI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uQ(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e8j(p))){o=A.T(s)
p.a=A.nU(new A.cP(new A.X(s,new C.e8k(d),o.k("X<1>")),new C.e8l(),o.k("cP<1,o>")))}q=p.a
if(q==null)q=d.d
t.KY()
t.l(new C.e8m(t,s,d,q))
w=3
return A.b(t.uQ(),$async$acI)
case 3:t.z1(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$acI,v)},
PN(d){return this.bUv(d)},
bUv(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uQ(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a5u(d),$async$PN)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e8q(t,d),r,null,!0,!0,x.P),$async$PN)
case 6:s=f
if(s==null){w=1
break}t.KY()
t.l(new C.e8r(t,s))
w=7
return A.b(t.uQ(),$async$PN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PN,v)},
cMj(){var w=this,v=w.d
v===$&&A.d()
if(!C.uQ(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e98(w))
w.uQ()},
a_M(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aT8(n,t.a.c)){t.z1("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.ay()
r=new A.au(B.ay,s)
q=t.d.e
p=A.bt(new A.O(q,t.gciV(),A.T(q).k("O<1,o>")).c1(0,new C.e8D()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e8E(t,new C.uA(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_M)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.KY()
t.l(new C.e8F(t,p))
w=4
return A.b(t.uQ(),$async$a_M)
case 4:t.z1("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_M,v)},
ciW(d){return B.a.i(d.toLowerCase())},
cn3(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uQ(v,w)
t=r.d
s=C.iyu(t)
C.iIT(q,t.b,u,C.iyt(r.d),s,v.a,w)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uA(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e9g(),A.T(l).k("X<1>")).gI(0)
l=n?B.c7:B.hX
v=A.V(B.a3Y,n?B.bv:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.C(Z.Df,A.aM(!1,o,!0,new A.C(B.hB,A.A(A.a([v,B.b6,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e9h(p,d),o,o,o,o,o,o,o),o),new A.C(B.o8,p.c4M(m),o)],u)
if(p.d.y===D.le){t=B.ua.j(0.15)
s=A.n(12)
r=A.K(B.ua.j(0.45),B.r,1)
q=C.HO(p.d,p.a.c)
v.push(new A.C(B.zC,A.q(o,A.A(A.a([D.c4K,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.m),o,o,o,o,B.hp,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX],u)
if(C.uQ(p.d,p.a.c)&&p.e.length!==0)u.push(new C.H1("Undo",B.q9,p.gcMi(),m,o,o))
u.push(new C.H1("Family Book",E.arR,p.gcn2(),m,B.v1,o))
u.push(new C.H1("Family games",B.oi,p.gcne(),m,B.aA,o))
if(C.uQ(p.d,p.a.c))u.push(new C.H1("Display settings",B.E6,p.gcon(),m,B.b7,o))
u.push(new C.H1("Sync",B.Am,p.gaiN(),m,o,o))
t=p.d
if(t.y===D.le||C.aT8(t,p.a.c)){t=p.d.y===D.le?"Remove shared tree":"Delete tree"
u.push(new C.H1(t,B.es,p.gbSq(),m,B.fs,o))}if(C.uQ(p.d,p.a.c))u.push(new C.H1("Add member",B.xx,new C.e9i(p),m,B.bU,o))
v.push(new A.C(S.aoH,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gasj()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cg(new C.e9j(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a41:B.Qi,o,o,o,o,o)
v.push(A.at(A.hy(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e9k(p),o),o,o,o))}return A.c6(o,l,A.bn(!0,A.w(v,B.B,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c4M(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.ab(0,B.H,B.h9.j(0.35),B.dv,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.V(B.Ad,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.q(m,D.c88,B.f,m,m,new A.p(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cH,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaiN(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fOJ,m,m,m)
r=r.gasj()
p=n.d.gasj()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.w(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.i,0,B.p),1)],o)
if(C.uQ(n.d,n.a.c))p.push(A.aJ(m,m,m,m,D.c4Z,m,m,m,n.gcys(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.j8:B.np
r=r?"Private":"Public"
r=A.E(n.ayS(q,"Privacy",r,n.a.d.w?n.gcL8():m),1)
q=A.E(n.ayS(B.xC,"Tree code",n.d.c,new C.e8s(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.ayS(D.bWj,"Collaborators",p,n.gc9Q()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.le){s=B.c.j(0.15)
B.d.u(p,A.a([B.N,A.aG(!1,B.a3,!0,A.n(999),A.aM(!1,A.n(999),!0,new A.C(B.h0,A.A(A.a([A.V(B.oj,B.c,m,m,m,14),B.dU,A.c("View only",m,m,m,m,m,m,B.adi,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.q(m,A.bv(u,new A.am(B.a0,m,B.ab,B.t,A.a([t,new A.C(B.HT,A.w(p,B.B,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.p(m,m,m,w,v,D.ccu,B.m),m,m,m,m,m,m,m,1/0)},
ayS(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.n(14),A.aM(!1,A.n(14),!0,new A.C(K.aq3,A.w(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rT,A.c(f,w,1,B.a2,w,w,w,Aq.yb,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bjl.prototype={
C(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bjo(s,t),new A.av(w,v))],x.p)
r=r.gdW(r)
B.d.u(u,r.dS(r,new C.dmi(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dmj(this),A.T(r).k("O<1,x>")))
return new A.C(B.vo,new A.a5(w,v,new A.am(B.a0,t,B.ab,B.f,u,t),t),t)}}
C.Lp.prototype={}
C.H5.prototype={}
C.bjn.prototype={
gbos(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aMQ.prototype={}
C.bjo.prototype={
bU6(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.U()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.m(n,w),new A.m(m,w),v)
u=(n+m)/2
t=new A.aI(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i6(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i6(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bz())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.m(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bU3(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dmD())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aR(a0,new C.dmE(f))
t=new A.O(a0,new C.dmF(f),A.T(a0).k("O<1,H>")).c1(0,new C.dmG()).cG(0,1/0,B.pG)
w=f.a
d.ah(f,new A.m(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.m(o,v),p,e)
continue}l=J.md(n)
k=Math.min(10,m/2)
m=$.U()
j=A.a([],r)
i=new A.aI(m.r,B.ak,null,null,j)
j.push(new A.aZ(w,v-k))
i.ac()
m=l*k
h=new A.cm(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.cm(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.aj(m)
i.ac()
d.af(i,e)}},
a5(d,e){var w,v,u,t,s,r
$.U()
w=A.L()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bG
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bU3(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bU6(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bnb.prototype={
gcg1(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aGC
switch(w.c.a){case 0:return D.d6o
case 1:return D.dkp
case 2:return D.dEn}},
gcg4(){var w=this.c,v=C.hPH(w.w),u=C.hPH(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
C(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gcg1(),p=t.c,o=A.bIc(p.f),n=t.gcg4(),m=x.V,l=A.a([new A.ab(0,B.H,B.d.gal(q).j(0.35),B.cN,10)],m),k=r?B.ax:B.c,j=A.K(r?B.ax:B.c,B.r,2)
if(o!=null)w=A.u2(B.z,s,B.cr,B.c0,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a6(B.a5,B.a9,B.w,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.ic(w,B.ap),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a6(B.aw,B.aD,B.w,q,s,s),B.a6),s,56,s,s,B.Dv,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.ax:B.c,B.r,1.5)
l.push(A.ao(s,A.q(s,A.c(""+k,s,s,s,s,s,s,D.fZI,s,s,s),B.f,s,s,new A.p(B.ci,s,w,j,s,s,B.m),s,s,s,s,D.bN6,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.n(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.H,B.v.j(r?0.3:0.06),B.dP,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.C,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.w(A.a([new A.am(B.a0,s,B.ab,B.f,l,s),B.at,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.baC,new A.p(k,s,w,j,m,s,B.m),s,s,s,s,D.bNh,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bio.prototype={
a5(d,e){var w,v,u,t,s
$.U()
w=A.L()
v=this.b
u=v?B.c:D.bnQ
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.m(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bBo.prototype={
C(d){var w=this,v=null,u=new C.fxw(w),t=w.c,s=t?B.cx:B.c,r=A.n(12),q=u.$3(B.ih,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xz,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.w(A.a([q,p,o,A.q(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.asx,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.bqz.prototype={
C(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.w(A.a([A.V(s?B.a41:B.Qi,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fVE,v,v,v)],r),B.l,v,B.bb,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fTp,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f7i(w),A.T(s).k("O<1,x>")))
B.d.u(u,t)}return new A.a5(84,v,A.w(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a1j.prototype={
R(){return new C.aFs()},
bw(){return this.Q.$0()},
geb(){return this.w}}
C.aFs.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ay()
r.d!==$&&A.aT()
r.d=new A.au(new A.bd(t,B.b9,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aT()
r.e=new A.au(new A.bd(t,B.b9,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aT()
r.f=new A.au(new A.bd(t,B.b9,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aT()
r.r=new A.au(new A.bd(t,B.b9,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aT()
r.w=new A.au(new A.bd(t,B.b9,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aT()
r.x=new A.au(new A.bd(t,B.b9,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zQ:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iA1(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ay()
u.W$=0
u=v.e
u===$&&A.d()
u.V$=w
u.W$=0
u=v.f
u===$&&A.d()
u.V$=w
u.W$=0
u=v.r
u===$&&A.d()
u.V$=w
u.W$=0
u=v.w
u===$&&A.d()
u.V$=w
u.W$=0
u=v.x
u===$&&A.d()
u.V$=w
u.W$=0
v.a3()},
Rl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Rl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hDU(p.y,p.w)
w=3
return A.b(A.m_(t.a.w,B.Ky),$async$Rl)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b3B(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Rl)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.ia6(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(A.E5(78,800),$async$Rl)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dCW(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Rl,v)},
cg3(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.id(B.n.v(1000*Date.now()),w,D.zQ,null,null,null,"","","","","",1,!1,0)
u=l.y
u===$&&A.d()
t=l.z
s=l.Q
r=l.as
q=l.e
q===$&&A.d()
q=B.a.i(q.a.a)
p=l.f
p===$&&A.d()
p=B.a.i(p.a.a)
o=l.r
o===$&&A.d()
o=B.a.i(o.a.a)
n=l.w
n===$&&A.d()
n=B.a.i(n.a.a)
m=l.x
m===$&&A.d()
m=B.a.i(m.a.a)
s=v.aIe(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).N(s)},
acj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dCV(r),s,null,!0,!0,x.y),$async$acj)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$acj,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.uA(j),h=l.a.e,g=A.T(h).k("X<1>"),f=A.B(new A.X(h,new C.dD4(l),g),g.k("M.E"))
h=j?B.em:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bLw,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.h5(A.aM(!1,k,!0,new A.C(B.m5,A.V(B.es,B.pT,k,k,k,17),k),B.cH,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbOW(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.kc:B.iM
t=A.bIc(l.as)
if(l.as==null)s=A.V(B.q3,j?B.bv:B.bl,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ab,B.t,A.a([A.hp(u,t,s,k,42),A.ao(0,A.hp(B.bU,k,D.bZ9,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcg0(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aFu(t,"Full name",B.mB,1,1,i,B.mS)
u=l.y
u===$&&A.d()
u=A.w(A.a([t,B.S,new C.bn9(i,u,new C.dD5(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bES],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dD6(),A.T(o).k("O<1,eR<o?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bEU],q)
B.d.u(q,new A.O(f,new C.dD8(),A.T(f).k("O<1,eR<o?>>")))
o=A.w(A.a([t,B.aj,new C.afD(i,r,"Who is their parent?",p,new C.dD9(l),k,o),B.az,n,B.aj,new C.afD(i,m,"Who is their spouse / partner?",q,new C.dDa(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.d()
q=C.aFu(q,"Birth date",D.arH,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aFu(m,"Birth place",B.a4i,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aFu(n,"Date of death (if deceased)",D.atP,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aFu(p,"Occupation",A8.Rq,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ab,B.t,w,k),B.az,s,B.bx,new C.afE(i,"Identity",u,k),B.af,new C.afE(i,"Family links",o,k),B.af,new C.afE(i,"Life details",A.w(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aFu(r,"Notes",B.lg,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aFt(i,"Child order",l.coE(l.at),new C.dDb(l),new C.dDc(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hsO(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dDd(l):k
B.d.u(r,A.a([B.S,new C.aFt(i,"Visible in tree",u,w,new C.dDe(l),k)],v))}r.push(B.S)
w=j?B.kc:B.iM
u=A.n(14)
t=A.K(j?B.eq:B.bP,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.jh(k,B.bU,k,B.ag,k,new C.dDf(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.m),k,k,k,k,B.aok,k,k,k))
r.push(B.bx)
w=j?B.aS:B.ax
j=j?B.eq:B.bP
r.push(A.A(A.a([A.E(A.dV(B.oA,new C.dD7(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.ba(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bH(D.fvG,k,l.gcg2(),A.bp(B.aW,k,k,0,B.c,k,B.cq,k,new A.ba(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.at)
return A.ek(B.fh,k,B.ag,h,new A.a5(420,k,A.cc(A.w(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.apg,k,B.aow,new A.ba(g,B.a1),k,k)},
coE(d){var w=B.n.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.n.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.afE.prototype={
C(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kc:B.iM,s=A.n(16)
return A.w(A.a([new A.C(B.a2S,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.K(v?B.eq:B.bP,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)}}
C.bna.prototype={
C(d){var w,v=this,u=null,t=v.c.a,s=t?B.em:B.c,r=A.n(12),q=A.K((t?B.eq:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aN(u,B.M,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bB(u,B.eY,u,B.tJ,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.am,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afD.prototype={
C(d){var w=this,v=null,u=w.c.a,t=u?B.em:B.c,s=A.n(12),r=A.K((u?B.eq:B.bP).j(0.85),B.r,1),q=A.V(B.tS,u?B.bv:B.bl,v,v,v,v),p=A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.em:B.c
return A.q(v,new A.EU(A.a6H(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.m),v,v,v,v,B.lc,v,v,v)}}
C.bn9.prototype={
C(d){var w=new C.dDg(this)
return A.A(A.a([w.$3(D.xk,"Male",B.R8),B.aa,w.$3(D.p2,"Female",B.QT),B.aa,w.$3(D.zQ,"Other",B.og)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aFt.prototype={
C(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.kc:B.iM,r=A.n(14),q=A.K(t?B.eq:B.bP,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.w(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.i,0,B.p),1),new C.aLS(u,B.xz,w.f,v),B.b6,new C.aLS(u,B.ih,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.m),v,v,v,v,B.er,v,v,v)}}
C.aLS.prototype={
C(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.em:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bl).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afF.prototype={
bYj(d){switch(d.a){case 0:return B.bU
case 1:return B.bE
case 2:return B.cG}},
bYk(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b1j(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Bi(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.em:B.c
u=A.n(12)
t=A.K((w?B.eq:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.V(f,B.bU,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.C,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.i,0,B.p),1))
return A.q(p,A.A(r,B.B,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.m),p,p,p,B.cA,B.zz,p,p,1/0)},
ah5(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kc:B.iM,s=A.n(16),r=A.K(v?B.eq:B.bP,B.r,1)
return A.w(A.a([new A.C(B.a2S,u,w),A.q(w,A.w(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)},
C(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hVm(r,q),o=q.c,n=t.bYj(o),m=A.bIc(q.f),l=t.e.a,k=l?B.em:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.le?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.hp(u,m,m==null?A.V(B.q3,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eF,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.c(t.bYk(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,B.lE,s,s,s),s,s,s)
u=x.p
i=A.a([t.Bi("Full name",i,B.mB)],u)
if(p>0)i.push(t.Bi("Child order","#"+p,B.QZ))
r=A.a([h,B.at,r,B.aN,l,B.S,v,B.bx,t.ah5("Identity",i),B.af,t.ah5("Life details",A.a([t.Bi("Birth date",q.w,D.arH),t.Bi("Birth place",q.x,B.a4i),t.Bi("Date of death",q.y,D.atP),t.Bi("Occupation",q.z,A8.Rq)],u)),B.af,t.ah5("Family links",A.a([t.Bi("1. Parent",t.b1j(q.d),B.Ii),t.Bi("2. Spouse",t.b1j(q.e),B.Iz)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.ah5("Notes",A.a([t.Bi("Notes",q,B.lg)],u))],u))
r.push(B.bx)
r.push(A.bH(B.M8,s,new C.dDq(d),A.bp(B.aW,s,s,s,s,s,B.cq,s,new A.ba(A.n(14),B.a1),s,s,s)))
return A.eC(s,k,new A.cR(B.mm,A.cc(A.w(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.xf,s,s,B.ah),s),s,s,s,B.HW,s,B.db,s,new A.ba(j,B.a1),s)}}
C.H1.prototype={
C(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.tM,A.h5(A.aG(!1,B.a3,!0,A.n(8),A.aM(!1,A.n(8),!0,new A.a5(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.asJ.prototype={
f7(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("O<1,a9<o,@>>")
w=A.B(new A.O(w,new C.ciA(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j2(w,new C.ciB(),t,x.fO))
return s}}
C.asK.prototype={
R(){return new C.aH3(A.a([],x.bF))},
gd8(){return this.c}}
C.aH3.prototype={
Z(){this.a4()
this.L4()},
L4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$L4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ciE(t.a.c),$async$L4)
case 3:r=e
w=4
return A.b(C.BI(t.a.c),$async$L4)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rJ(q,new C.e9t(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e9u(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$L4,v)},
zD(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
LV(d,e){return this.cOR(d,e)},
cOR(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$LV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e9y(q,e))
t=3
w=6
return A.b(d.$0(),$async$LV)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e9z(q))
$.eY.mT()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LV,v)},
Zt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$Zt)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.LV(new C.e9q(t),"Preparing download\u2026"),$async$Zt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zt,v)},
Zx(d){return this.bW9(d)},
bW9(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$Zx)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.LV(new C.e9r(t,d),"Preparing file\u2026"),$async$Zx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zx,v)},
aj9(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aj9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y8.cr().NB(B.Ug,B.vt,!0),$async$aj9)
case 7:r=e
o=r
q=o==null?null:J.eH(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
o=A.k1(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ad(m)
$.an.$1("[family tree sync pick] file_picker: "+A.v(p))
w=6
break
case 3:w=2
break
case 6:u=A.HX()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aj9,v)},
a_a(d){return this.c5H(d)},
c5H(d){var w=0,v=A.j(x.H),u=this
var $async$a_a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.LV(new C.e9s(u,d),"Restoring family trees\u2026"),$async$a_a)
case 2:return A.h(null,v)}})
return A.i($async$a_a,v)},
a_9(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aj9(),$async$a_9)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.a_a(s),$async$a_9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_9,v)},
a4x(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$a4x)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.LV(new C.e9x(t),"Creating QR code\u2026"),$async$a4x)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a4x,v)},
a46(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a46=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.E3()){t.zD("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).ca(A.e4(new C.e9v(),!0,null,x.N)),$async$a46)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.a_a(r),$async$a46)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a46,v)},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.CD:B.hX,m=o?D.amN:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.ax,j=new C.dmH(n,m,l,k,o?B.bQ:B.bl)
l=A.aJ(p,p,p,p,A.V(B.eG,k,p,p,p,20),p,p,p,new C.e9B(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eQ(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dmf(!0,B.jI,B.aH,B.aH,q.r?p:q.gcF4(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcB6()
t.push(A.E(C.dmf(!s,B.jJ,B.b1,B.bk,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dmf(!1,B.hP,B.aW,B.bU,q.r?p:q.gbW2(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dmf(!1,Q.An,B.as,B.aQ,q.r?p:q.gc5E(),j,s,"Upload backup file"),1))
l=A.a([new C.bjm(v,l,p),B.lp,new C.aeT(j,"QR restore",p),B.S,t,B.df,new C.aeT(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.lp,new C.aeT(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.e9C(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cn(l,p,p,Au.a2K,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aW.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.H,B.v.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.q(p,A.A(A.a([Av.aXg,B.bc,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.m),p,p,p,p,A1.Dm,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.am(B.a0,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.dmH.prototype={}
C.bjm.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ab(0,B.H,B.aW.j(0.32),B.ky,28)],x.V)
t=A.ao(p,A.V(B.vM,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.q(p,new A.am(B.a0,p,B.ab,B.t,A.a([t,new A.C(B.ad,A.A(A.a([A.q(p,D.c7D,B.f,p,p,new A.p(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pt,A.E(A.w(A.a([D.h45,B.N,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.i,0,B.p),1)],q),B.B,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.cfT,B.m),p,p,p,p,p,p,p,p)}}
C.aeT.prototype={
C(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aW,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bjk.prototype={
C(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.H,B.aH.j(0.1),B.cN,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eJ(A.d3(new A.C(E.a2k,A.w(A.a([A.q(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.m),q,q,q,q,B.tN,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bjp.prototype={
C(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aW.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eJ(new A.C(B.f2,A.A(A.a([A.q(v,D.c6N,B.f,v,v,new A.p(q,v,A.K(B.aW.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tN,v,v,v),B.bc,A.E(A.w(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.i,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1D.prototype={
R(){return new C.aH2()},
gd8(){return this.c}}
C.aH2.prototype={
Z(){this.a4()
this.abR()},
abR(){var w=0,v=A.j(x.H),u=this,t
var $async$abR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b6i(u.a.c,B.Fe),$async$abR)
case 2:t=e
if(u.c!=null)u.l(new C.e9l(u,t))
return A.h(null,v)}})
return A.i($async$abR,v)},
akA(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$akA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e9m(q))
t=4
p=R.hFJ(q.a.d,B.Fe)
if(p==null){n=A.be("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.av4(n.e,m,l,B.Fe,p,n.f),$async$akA)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e9n(q))
q.c.L(x.q).f.T(D.fFl)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ad(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.es(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e9o(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$akA,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nY:B.nh,n=p?B.j_:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eQ(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hkQ,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.qx(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.w(A.a([B.N,u,B.bx,t,B.N,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.m),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcAO()
if(u)u=B.Ly
else u=A.V(r.e===!0?B.h2:Ay.arG,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.en(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aW,q,B.hu,q,q,q,new A.ax(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hA,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a5(1/0,q,A.bH(Ag.BL,q,new C.e9p(d),A.bp(B.aW,q,q,q,q,B.hu,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.C(B.ad,A.w(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a1E.prototype={
R(){return new C.boG(A.Ag(B.zo,B.oH,B.vT))}}
C.boG.prototype={
t(){this.d.t()
this.a3()},
C(d){var w=null
return A.c6(A.eQ(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.hco,w,w,w,1,w,!0),B.v,A.Af(this.d,B.c0,new C.e9D(this,d)),w,!1,!1,w,w)}}
C.b25.prototype={
C(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.TI,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mp.prototype={}
C.a8y.prototype={
R(){return new C.bok(null,null)}}
C.bok.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.br(v,B.tC,v,1,v,w)
w.e=A.br(v,B.o1,v,1,v,w)
w.a.toString
w.d.cU(0)
w.e.cU(0)},
by(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cU(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cU(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bBZ()},
C(d){var w,v,u=this,t=B.d.ds(D.a8m,new C.dVo(u),new C.dVp())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cGG(A.ca(new A.hB(A.a([w,v],x.dS)),new C.dVq(u,t),null),!0)}}
C.boj.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b6d(d,e)
break
case"house":p.my(d,e,D.dq0)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdm()
$.U()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.m(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mE(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.C9(d,e,12)
p.zd(d,e,B.lz,5,14)
break
case"grocery":p.cpo(d,e)
break
case"calculator":p.cp5(d,e)
break
case"lumber":p.cpw(d,e)
break
case"kitchen":p.cpr(d,e)
break
case"landscape":p.my(d,e,D.dqC)
s=new A.aI($.U().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cm(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cm(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bz())
w=A.L()
w.r=B.ev.j(0.85).gp(0)
d.af(s,w)
p.C9(d,e,8)
p.zd(d,e,B.iN,4,18)
break
case"plumbing":p.cpG(d,e)
break
case"electrical":p.my(d,e,D.dDo)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.U()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a4(0,0,0+e.a,0+e.b),u)
p.mE(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mE(d,e,B.oV.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.C9(d,e,10)
break
case"store":p.cpQ(d,e)
break
case"paint_remodel":p.cpB(d,e)
break
case"roofing":p.cpI(d,e)
break
case"warehouse":p.cpX(d,e)
break
case"vehicles":p.cpV(d,e)
break
case"farm":p.cpi(d,e)
break
case"restaurant":p.cpH(d,e)
break
case"tools":p.cpT(d,e)
break
case"wallet":p.cpW(d,e)
break
case"concrete":p.cpb(d,e)
break
case"blueprint":p.cp3(d,e)
break
default:p.b6d(d,e)}},
my(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.U()
w=A.L()
w.san(new A.a6(B.aw,B.aD,B.w,f,null,null).az(0,v))
d.aE(v,w)},
mE(d,e,f,g,h){var w,v,u,t=new A.m(e.a/2,e.b/2),s=e.gdm()/2-h
$.U()
w=A.L()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cR(A.c0(t,s),u,u+0.1439896632895322-u,!1,w)}},
zd(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdm()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.m(q+t*o,p+s*o),3.5,r)}},
C9(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.m(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b6d(d,e){var w,v=this
v.my(d,e,D.dBv)
w=v.c
v.mE(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mE(d,e,B.bO.j(0.45),-w*3.141592653589793*1.4,22)
v.bU_(d,e,B.i_,w)
v.zd(d,e,B.c.j(0.7),6,8)},
bU_(d,e,f,g){var w,v,u,t,s,r
$.U()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a4(16,r,t,r+3),w)}},
cpo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.my(d,e,D.cBV)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.n.F(t,3)
q=Math.sin(s)
p=B.n.ao(t,3)
o=Math.cos(s*0.8)
n=B.n.F(t,2)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.dnZ[B.n.F(t,4)].j(0.85).gp(0)
d.O(new A.m(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mE(d,e,B.c.j(0.35),w,16)
l.zd(d,e,B.iN,5,12)},
cp5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.my(d,e,D.cC2)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdm()
$.U()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.m(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h0(h,B.cK,h,h,h,h,B.a7,B.ca,h,B.e4,B.cb)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dsC[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.n.F(o,2)
p.sb1(0,new A.eE(r,h,h,B.cV,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eJ()
p.a5(d,new A.m(t*(0.08+B.n.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.n.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cC4[o]
l=B.l4.j(0.28+0.3*Math.sin(n))
k=B.n.F(o,2)
p.sb1(0,new A.eE(m,h,h,B.cV,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eJ()
p.a5(d,new A.m(t*(0.55+B.n.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.n.ao(o,3)*0.38)+Math.sin(n)*6))}i.mE(d,e,B.c.j(0.35),w*1.5,14)
i.mE(d,e,B.eK.j(0.55),-v*3.141592653589793*2,8)
i.mE(d,e,B.oP.j(0.4),r*2.8,22)
i.zd(d,e,B.pO,8,10)
i.C9(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.U()
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.m(12,j),new A.m(t,j),v)}},
cpw(d,e){var w,v,u,t,s,r,q,p,o=this
o.my(d,e,W.aDE)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a4(20,r,u,r+10),B.ht)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=A.ap(B.hb,B.nN,(s+1)/2).gp(0)
d.aq(q,p)}o.mE(d,e,B.hb.j(0.35),w,15)
o.C9(d,e,8)},
cpr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.my(d,e,D.doy)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.m(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mE(d,e,B.bO.j(0.4),-w*3.141592653589793*2.2,11)
l.zd(d,e,B.qQ,4,14)},
cpG(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.my(d,e,D.db6)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.m(w,u),q*(0.12+r*0.14+p),o)}n.zd(d,e,B.pS,6,12)
n.mE(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cpQ(d,e){var w,v,u,t,s,r,q,p=this
p.my(d,e,D.cPY)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a4(r,14,r+u,22),B.jL)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.fy,B.bO,(s+1)/2).gp(0)
d.aq(r,q)}p.mE(d,e,B.c.j(0.3),w,16)
p.C9(d,e,8)
p.zd(d,e,B.wV,5,13)},
cpB(d,e){var w,v,u,t,s,r,q
this.my(d,e,D.dik)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a4(r,q,r+8,q+(18+s*22)),B.iE)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=[B.iK,B.dH,B.bO,B.el][t].j(0.85).gp(0)
d.aq(q,r)}this.mE(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cpI(d,e){var w,v,u,t,s,r,q
this.my(d,e,D.dfg)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.n.F(t,4)*0.22
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.m(u*(0.1+r),s),new A.m(u*(0.18+r),s+10),q)}this.zd(d,e,B.cF,7,11)},
cpX(d,e){var w,v,u,t,s,r,q,p
this.my(d,e,D.cSO)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a4(q,p,q+(t-s*8),p+16),B.ht)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.cF,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mE(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cpV(d,e){var w,v,u,t,s,r,q
this.my(d,e,D.dI4)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.n.F(t,2)*0.08)
r=A.bx(new A.a4(s,r,s+28,r+8),B.ht)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.C9(d,e,6)},
cpi(d,e){var w,v,u,t,s,r,q,p
this.my(d,e,D.dmU)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.U()
s=A.L()
s.r=B.oV.j(0.75).gp(0)
d.O(new A.m(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.hY.j(0.85).gp(0)
p.c=3
d.ah(new A.m(q,v),new A.m(q+s*6,t),p)}this.mE(d,e,B.oV.j(0.35),w,14)},
cpH(d,e){var w,v,u,t,s,r,q=this
q.my(d,e,D.dpO)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.c1(new A.m(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c2(s,r)}q.zd(d,e,B.qQ,5,16)
q.C9(d,e,7)},
cpT(d,e){var w,v,u,t,s,r,q,p,o=this
o.my(d,e,D.dFg)
w=o.c
v=w*3.141592653589793
o.mE(d,e,B.nN.j(0.55),v*3,10)
o.mE(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.nN.j(0.8).gp(0)
d.O(new A.m(v+r*34,u+q*22),4,p)}},
cpW(d,e){var w,v,u,t,s,r,q,p,o=this
o.my(d,e,D.dIQ)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a4(q,p,q+36,p+22),B.jL)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.iN,B.oV,r).gp(0)
d.aq(p,q)}o.C9(d,e,9)
o.mE(d,e,B.c.j(0.4),w*2.2,12)},
cpb(d,e){var w,v,u,t,s,r,q,p
this.my(d,e,D.dvS)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c0(new A.m(v,u),34)
$.U()
s=A.L()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cR(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.bP.j(0.85).gp(0)
d.O(new A.m(v+t*34,u+s*34),3,p)}},
cp3(d,e){var w,v,u,t,s,r,q
this.my(d,e,D.dr0)
$.U()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.m(t,0),new A.m(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.m(0,s),new A.m(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.U()
u=A.L()
u.r=B.dH.j(0.45).gp(0)
d.aE(new A.a4(0,q,0+v,q+6),u)
this.mE(d,e,B.lz.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.avQ.prototype={
a1D(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aU9(),$async$a1D)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aaS(s),$async$a1D)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a1D,v)},
aja(d){return this.csh(d)},
csh(d){var w=0,v=A.j(x.H),u=this,t
var $async$aja=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iJ3(d),$async$aja)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aja,v)},
C(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.kc:B.iM
w=x.p
v=A.a([C.aUx(!0,B.t2,1/0,B.ro,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.p(u,u,u,u,u,new A.a6(B.aU,B.b_,B.w,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bJ(B.aU,u,u,new A.C(B.tE,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aEC,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.df(D.c_W,u,D.h07,new C.csr(this,d),A.bp(B.aW,u,u,u,B.c,u,B.jD,u,u,u,u,B.cp)),1),B.aa,A.E(A.en(D.c8W,u,D.hfC,this.gciT(),A.dj(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jD,u,u,D.b9e,u,u,u,B.cp)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fK(1.7777777777777777,A.aG(!1,B.a3,!0,B.t2,new A.am(B.a0,u,B.b5,B.t,v,u),B.ap,t,0,u,u,u,u,u,B.ai),u)}}
C.aPi.prototype={
b0(){this.b8()
this.b5()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdP())
w.bd$=null
w.a3()}}
C.aXv.prototype={}
C.aXu.prototype={}
C.aVy.prototype={}
C.a0g.prototype={
R(){return new C.aC9()}}
C.aC9.prototype={
Z(){var w,v,u=this
u.a4()
u.a.toString
w=new A.bd("",B.b9,B.aP)
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
LI(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fFR)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).N(new C.aXv(w,v))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.em:B.c,k=A.n(20),j=A.q(n,D.c8B,B.f,n,n,new A.p(B.aW.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aJ(n,n,n,n,A.V(B.cC,m?B.bv:B.bl,n,n,n,n),n,n,n,new C.ddL(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hFZ(new C.ddM(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.kc:B.iM
r=A.n(12)
q=A.n(12)
p=m?B.eq:B.bP
t=A.aN(n,B.M,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bB(n,new A.b5(4,r,B.dz),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.am,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.ddN(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A_.LH,n,n,n,n)
u=m?B.aS:B.ax
m=m?B.eq:B.bP
return A.eC(n,l,new A.cR(B.mm,A.cc(A.w(A.a([j,B.aN,i,B.at,w,B.N,v,B.aN,t,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.ddO(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.ba(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bH(D.hfT,n,o.ga4S(),A.bp(B.aW,n,n,n,B.c,n,B.cq,n,new A.ba(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Dp,n,n,B.ah),n),n,n,n,B.Dq,n,B.db,n,new A.ba(k,B.a1),n)}}
C.a0f.prototype={
R(){return new C.aC8()}}
C.aC8.prototype={
Z(){this.a4()
var w=$.ay()
this.d!==$&&A.aT()
this.d=new A.au(B.ay,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
LI(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fDs)
return}v=this.c
v.toString
A.a7(v,!1).N(new C.aXu(w))},
C(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.em:B.c,n=A.n(20),m=A.q(q,D.c4Q,B.f,q,q,new A.p(B.bU.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aJ(q,q,q,q,A.V(B.cC,p?B.bv:B.bl,q,q,q,q),q,q,q,new C.ddH(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aW.j(0.25),B.r,1)
u=A.V(B.ars,B.aW.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.m),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.kc:B.iM
t=A.n(12)
s=A.n(12)
r=p?B.eq:B.bP
v=A.aN(q,B.M,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bB(q,new A.b5(4,t,B.dz),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.am,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.ddI(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lq,q,q,q,q)
w=p?B.aS:B.ax
p=p?B.eq:B.bP
return A.eC(q,o,new A.cR(B.mm,A.cc(A.w(A.a([m,B.aN,l,B.az,v,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.ddJ(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.ba(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bH(D.hn9,q,this.ga4S(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.ba(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Dp,q,q,B.ah),q),q,q,q,B.Dq,q,B.db,q,new A.ba(n,B.a1),q)}}
C.a_G.prototype={
R(){return new C.aAL()}}
C.aAL.prototype={
Z(){var w,v=this
v.a4()
w=$.ay()
v.d!==$&&A.aT()
v.d=new A.au(B.ay,w)
v.e!==$&&A.aT()
v.e=new A.au(new A.bd("1",B.b9,B.aP),w)
v.f!==$&&A.aT()
v.f=new A.au(B.ay,w)
v.r!==$&&A.aT()
v.r=new A.au(B.ay,w)},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ay()
u.W$=0
u=v.e
u===$&&A.d()
u.V$=w
u.W$=0
u=v.f
u===$&&A.d()
u.V$=w
u.W$=0
u=v.r
u===$&&A.d()
u.V$=w
u.W$=0
v.a3()},
gL_(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gamk(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb93(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aSZ(d){var w,v=B.h.D(this.gL_()+d,0.25,999999),u=B.h.bN(v),t=this.e
t===$&&A.d()
if(v===u)u=B.n.v(B.h.M(v))
else{u=B.h.a1(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aD(u,w,"")}t.sb1(0,u)
this.l(new C.cKK())},
aBP(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.kc:B.iM,s=A.n(14),r=A.n(14)
u=u?B.eq:B.bP
return A.bB(w,new A.b5(4,s,B.dz),w,B.bD,w,w,w,w,!0,new A.b5(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.n(14),B.agp),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ciU(d,e,f){return this.aBP(d,e,f,null)},
LI(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.gamk()<=0){s.c.L(x.q).f.T(D.fHL)
return}r=s.c
r.toString
v=s.gL_()
u=s.gamk()
t=s.gb93()
A.a7(r,!1).N(new C.aVy(w,v,u,t))},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uA(n),l=n?B.em:B.c,k=A.n(24),j=x.O,i=A.a([B.aW.j(0.22),B.bU.j(0.14)],j),h=A.n(14)
i=A.q(o,D.bYO,B.f,o,o,new A.p(o,o,A.K(B.aW.j(0.35),B.r,1),h,o,new A.a6(B.a5,B.a9,B.w,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aJ(o,o,o,o,A.V(B.cC,n?B.bv:B.bl,o,o,o,o),o,o,o,new C.cKQ(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.M,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aBP(m,"Item name (optional)","Lumber, paint, labor\u2026",B.R6),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A_.LH,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.C,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.kc:B.iM
t=A.n(14)
s=A.K(n?B.eq:B.bP,B.r,1)
r=A.aJ(o,o,o,o,A.V(B.xz,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cKR(p),o,o,o,o,o,B.cp)
q=p.e
q===$&&A.d()
q=A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.cau,B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ei,o,o,o,1,o,o,!1,"\u2022",o,new C.cKS(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aJ(o,o,o,o,A.V(B.ih,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cKT(p),o,o,o,o,o,B.cp)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aBP(m,"Amount","0.00",B.hC),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ei,o,o,o,1,o,o,!1,"\u2022",o,new C.cKU(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.O(D.diV,new C.cKV(p,m),t),t.k("aj.E"))
i=A.a([i,B.bx,v,B.az,h,B.N,s,B.af,A.bY(B.bI,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ciU(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cKW(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lq,o,o,o,o)],w))}i.push(B.aN)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gL_()===B.h.bN(p.gL_())?B.h.M(p.gL_()):p.gL_()
s=p.gb93()
r=A.BL(p.gamk())
i.push(A.q(o,A.A(A.a([A.E(A.w(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1),C.bJ3(p.gL_()*p.gamk(),B.b7,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a6(B.a5,B.a9,B.w,j,o,o),B.m),o,o,o,o,B.jF,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.eq:B.bP
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.ba(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cKX(d),h),1),B.ar,A.E(A.df(D.av_,o,D.hiX,p.ga4S(),A.bp(B.aW,o,o,0,B.c,o,B.cq,o,new A.ba(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eC(o,l,new A.cR(B.Na,A.cc(A.w(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Ak.tK,o,o,B.ah),o),o,o,o,B.PD,o,B.db,o,new A.ba(k,B.a1),o)}}
C.a3r.prototype={
R(){return new C.bBg()}}
C.bBg.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bd(w,B.b9,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
C(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=r?B.em:B.c,p=A.n(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.kc:B.iM
v=A.aN(s,B.M,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bB(s,new A.b5(4,A.n(12),B.dz),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fx1(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.dy,new C.fx2(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eC(s,q,new A.C(B.Dp,A.w(A.a([o,B.az,v,B.aN,A.A(A.a([u,B.ar,A.E(A.bH(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fx3(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.db,s,new A.ba(p,B.a1),s)}}
C.adU.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GR.prototype={
R(){return new C.bBe(null,null)}}
C.bBe.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,D.bFr,null,1,null,v)
w.cU(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bEj()},
gbFW(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bU,B.b7],x.O)
case 2:return A.a([B.bw,B.aW,B.b7],x.O)
case 3:return A.a([B.aH,B.ci,B.jU],x.O)
case 4:return A.a([B.fL,B.bU,B.fz],x.O)
case 0:return A.a([B.aW,B.bU,B.b7],x.O)}},
C(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.e9(A.ca(v,new C.fx_(this,new C.uA(w.ax.a===B.I)),null),null)}}
C.aAE.prototype={
R(){return new C.bBf(null,null)}}
C.bBf.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,B.o3,null,1,null,v)
w.cU(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bEk()},
C(d){var w=this.d
w===$&&A.d()
return A.ca(w,new C.fx0(this),null)}}
C.bBd.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aI($.U().r,B.ak,null,null,A.a([],x.v))
u.E(new A.jt(v))
w=A.L()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zY(u)
t=A.a([],x.U)
w=new A.ve(w,!1,t)
for(o=p.b,s=-o*0.85;w.B();){r=w.c
if(r===0||w.f)A.bi(A.k_(y.B));--r
q=new A.C9(w,r)
w.jX()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aWE(d,q,r,o,0,0.2,4.2,0.92)
p.aWE(d,q,r,s,0.52,0.11,3.2,0.58)}},
aWE(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.i3_(e.a.a,e,t,t+f*i,!0),r=A.aj3(s.gli().a.getBounds())
$.U()
w=A.L()
w.b=B.ae
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a6(B.a5,B.a9,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jv,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aRq.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aRr.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.uA.prototype={}
C.avP.prototype={
R(){return new C.aID()},
geb(){return this.c}}
C.aID.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.ak0()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.ML(w,v)
this.a3()},
ak0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ak0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bHr(t.c,t.d.a),$async$ak0)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f4s(u,s))
return A.h(null,v)}})
return A.i($async$ak0,v)},
RR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$RR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f4j(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.ML(t,s),$async$RR)
case 2:if(u.c!=null)u.l(new C.f4k(u))
return A.h(null,v)}})
return A.i($async$RR,v)},
Sn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Sn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.f4q(t,new C.uA(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Sn)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aaS(q),$async$Sn)
case 6:case 5:t.l(new C.f4r(t,r))
w=7
return A.b(t.RR(),$async$Sn)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Sn,v)},
Xz(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iIO(r),$async$Xz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f4e(t,new C.rO(B.n.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.RR(),$async$Xz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xz,v)},
coc(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hVi(t,new C.f4i(u),w,v)},
adH(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b9_,w,w,B.m),w,22,w,w,w,w,w,22)},
acH(d){return this.bSd(d)},
bSd(d){var w=0,v=A.j(x.H),u=this
var $async$acH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f4h(u,d))
w=2
return A.b(u.RR(),$async$acH)
case 2:return A.h(null,v)}})
return A.i($async$acH,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c7:B.hX,d=A.n(8),a0=A.V(Y.a3Z,f?B.bv:B.bl,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.C(B.I1,A.A(A.a([a0,B.b6,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f4t(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b5,B.t,A.a([A.bv(A.n(22),C.aUx(!0,A.n(22),1/0,B.ro,g,d,1/0),B.ap),A.ao(10,A.df(D.c2H,g,D.hlo,h.gb6Z(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.ba(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ab(0,B.H,B.aW.j(f?0.5:0.38),B.eR,22),new A.ab(-4,B.H,B.bU.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.q(g,A.q(g,A.bv(s,new A.am(B.a0,g,B.b5,B.t,A.a([C.aUx(!0,A.n(16),1/0,B.Qt,g,r.c,1/0),new A.bP(new A.p(g,g,g,g,g,new A.a6(B.aU,B.b_,B.w,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.adH(!0),g,g,8,g,8,g),A.ao(g,A.cHp(h.adH(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cHp(h.adH(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cHp(h.adH(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.df(D.bZr,g,D.hez,h.gb6Z(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.ba(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.ccb,B.m),g,g,g,g,B.m5,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bjX,B.oN,B.hy],u):A.a([B.b7,B.aW,B.bU],u)
t=x.V
s=A.a([new A.ab(0,B.H,B.aW.j(f?0.45:0.35),B.eR,24)],t)
r=A.n(22)
p=A.ao(g,A.V(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.m),g,g,g,g,B.ho,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.az,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bJ3(h.d.gyb(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.N,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.B,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hm.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.H,B.aH.j(0.28),B.cN,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.q(g,A.bv(r,new A.am(B.a0,g,B.ab,B.t,A.a([p,new A.C(D.bKk,A.A(A.a([o,B.ar,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eJ(new A.C(B.xd,A.w(A.a([A.q(g,D.auz,B.f,g,g,new A.p(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.ct,g,g,g),B.fS,D.h34],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcob(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,g,v,s,new A.a6(B.aw,B.aD,B.w,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aN,w,B.N,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aX,A.df(A9.a5J,g,D.h0O,h.gbGq(),A.bp(B.aW,g,g,g,B.c,g,B.hp,g,new A.ba(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.em:B.c
v=A.n(14)
u=A.K(f?B.eq:B.bP,B.r,1)
t=A.V(B.a4l,f?B.bv:B.bl,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.w(A.a([t,B.S,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.m),g,g,g,g,B.q0,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f4u(h,new C.uA(f)),A.T(w).k("O<1,x>")))
if(h.e)d.push(new A.C(B.zt,A.at(A.np(g,f?B.bv:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bn(!0,A.w(A.a([new A.C(Z.Df,a0,g),A.E(A.cc(A.w(d,B.B,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,E.zF,g,g,B.ah),1)],a1),B.B,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bKb(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.em:B.c,p=A.n(16),o=A.a([new A.ab(0,B.H,B.v.j(r?0.35:0.08),B.cN,12)],x.V),n=A.n(16),m=A.q(u,u,B.f,u,u,D.bbJ,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.n(12)
l=A.q(u,A.V(s?B.ix:B.h4,B.b7,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd4D()
v=A.BL(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.B,u,B.bb,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bU.j(0.1)],x.O)
w=A.n(12)
k=A.q(u,C.bJ3(d.c*d.d,B.b7,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a6(B.a5,B.a9,B.w,k,u,u),B.m),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.q(u,A.bv(n,new A.Fi(A.A(A.a([m,A.E(new A.C(B.aoc,A.A(A.a([l,B.bc,t,B.aa,k,A.aJ(u,u,u,u,A.V(B.cC,(r?B.bv:B.bl).j(0.75),u,u,u,20),u,u,u,new C.f4f(this,d),u,u,u,u,u,B.cp)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.bay,new A.p(q,u,u,p,o,u,B.m),u,u,u,B.d3,u,u,u,u)}}
C.ag_.prototype={
FE(d){return this.bTC(d)},
bTC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$FE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pX(d,o,!1),$async$FE)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
w=4
return A.b(A.bM(B.D7,null,x.H),$async$FE)
case 4:s=t.d
w=5
return A.b(C.h8d(!0,o,s),$async$FE)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HM(r,"ngmy_project_"+A.aD(s.b,q,"_"),!1),$async$FE)
case 6:p=f
w=7
return A.b(M.pW(o,!1),$async$FE)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$FE,v)},
a1F(d){return this.cF5(d)},
cF5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pX(d,s,!1),$async$a1F)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
A.he(d,new C.avJ(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pW(s,!1),$async$a1F)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1F,v)},
RS(d){return this.cB0(d)},
cB0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(A.he(d,D.aOA,!0,"NgmyWorksheetProjectScan",x.N),$async$RS)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bJ4(s),$async$RS)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fGS)
w=1
break}q=C.hvv(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$RS)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$RS,v)},
a1G(d){return this.cNF(d)},
cNF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(C.bIy(),$async$a1G)
case 3:s=f
if(s==null){w=1
break}r=C.hvv(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a1G)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1G,v)},
C(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.uA(u),s=w.d.d.length,r=u?B.em:B.c,q=A.n(28),p=A.a([new A.ab(0,B.H,B.v.j(u?0.35:0.08),B.ky,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.xc,A.q(v,A.w(A.a([w.cDF(d,t,s),new A.C(D.bJJ,A.w(A.a([w.b4W(t,"QR restore"),B.S,A.A(A.a([w.b4V(t,!0,B.jI,B.aH,B.aH,new C.f4w(w,d),"Show to scan","QR code"),B.ar,w.aBQ(t,B.jJ,B.b1,B.bk,new C.f4x(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.df,w.b4W(t,"Backup files"),B.S,A.A(A.a([w.aBQ(t,B.hP,B.aW,B.bU,new C.f4y(w,d),"Full copy","Backup file"),B.ar,w.aBQ(t,Q.An,B.as,B.aQ,new C.f4z(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.B,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.ap,v,v,new A.p(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cDF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fo,B.cY,B.h9],k):A.a([B.b7,B.aW,B.bU],k)
w=A.ao(l,A.V(B.vM,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.H,B.v.j(0.2),B.cN,12)],x.V)
r=this.d
s=A.q(l,C.aUx(!0,A.n(13),64,D.bUp,l,r.c,64),B.ap,l,l,new A.p(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.C,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.adL,l,l,l)
r=C.bJ3(r.gyb(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.am(B.a0,l,B.ab,B.t,A.a([w,new A.C(D.bK5,A.w(A.a([v,A.A(A.a([s,B.et,A.E(A.w(A.a([u,B.at,t,B.N,A.A(A.a([r,B.aa,A.q(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.m),l,l,l,l,B.f8,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.B,l,B.e,B.i,0,B.p),1),A.aJ(l,l,l,l,A.V(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.f4v(d),l,l,l,A.nu(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aX5,l,l,l,l),l,l)],m),B.B,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.aw,B.aD,B.w,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b4W(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aW,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b4V(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.amN:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eq:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.H,B.aH.j(0.12),B.cN,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.q(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.m),r,r,r,r,B.tN,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eJ(new A.C(E.a2k,A.w(A.a([t,B.af,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aBQ(d,e,f,g,h,i,j){return this.b4V(d,!1,e,f,g,h,i,j)}}
C.avJ.prototype={
R(){return new C.bq4()}}
C.bq4.prototype={
Z(){this.a4()
this.ahU()},
ahU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ahU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bJ5(p.c,p.d),$async$ahU)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f49(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f4a(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahU,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.CD:B.hX,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aJ(h,h,h,h,A.V(B.eG,g?B.ac:B.an,h,h,h,18),h,h,h,new C.f4b(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uw],u),B.l,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fo,B.cY,B.h9],s):A.a([B.b7,B.aW,B.bU],s)
r=x.V
q=A.a([new A.ab(0,B.H,B.aW.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dw,B.K,h,h)
p=C.bJ3(p.gyb(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.q(h,A.w(A.a([o,B.aj,A.A(A.a([p,B.aa,A.q(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.m),h,h,h,h,B.f8,h,h,h)],u),B.l,h,B.bb,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a6(B.aw,B.aD,B.w,s,h,h),B.m),h,h,h,h,E.a2J,h,h,1/0)
t=g?D.bvF:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.H,B.v.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.X8,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eJR)
else{m=A.n(20)
l=A.K(B.bn,B.r,1)
o.push(A.q(h,A.qx(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aN)
n=w?B.aH:B.aW
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aW).j(0.35),B.r,1)
k=w?B.QM:B.Rp
k=A.V(k,w?B.aH:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.m),h,h,h,h,B.hp,h,h,h))
return A.c6(h,f,A.bn(!0,A.w(A.a([new A.C(Ah.PQ,e,h),A.E(A.cc(A.w(A.a([s,B.aN,A.q(h,A.w(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.m),h,h,h,h,B.vq,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,E.aps,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.avO.prototype={
R(){return new C.aIC(A.Ag(B.P5,B.oH,B.vT))}}
C.aIC.prototype={
t(){this.d.t()
this.a3()},
aQV(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j7(w,d)},
cjM(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iGJ(t)
if(s!=null){this.aQV(s)
return}r=C.hKz(t)
if(r!=null)q=A.cX(r,p,0)
else q=!1
if(q){this.aQV(B.a.i(B.a.aV(r,B.a.c9(r,p))))
return}}},
C(d){var w,v,u=this,t=null,s=x.p,r=A.eQ(A.a([A.aJ(t,t,t,t,A.V(u.f?B.rw:Ab.QV,t,t,t,t,t),t,t,t,new C.f4d(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.CD,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.her,t,t,t,1,t,!0),q=A.Af(u.d,B.c0,u.gcjL()),p=A.n(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.K(B.aW,B.r,3),p,A.a([new A.ab(2,B.H,B.aW.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c6(r,B.v,new A.am(B.a0,t,B.b5,B.t,A.a([q,p,A.ao(32,A.q(t,D.hdb,B.f,t,t,new A.p(w,t,A.K(B.aW.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jF,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aND.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.PK.prototype={
R(){return new C.aIE(D.afJ,A.a([],x.D))},
bw(){return this.r.$0()},
geb(){return this.c}}
C.aIE.prototype={
gcLm(){return J.bKd(this.e,0,new C.f4W())},
Z(){this.a4()
$.aS.cT$.push(this)
this.wJ()},
t(){$.aS.hP(this)
this.a3()},
jf(d){if(d===B.fY)this.wJ()},
wJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.E2(q.a.c).d9(0,B.kj),$async$wJ)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f4S(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f4T(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wJ,v)},
Jf(d){return this.bQh(d)},
bQg(){return this.Jf(null)},
bQh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iIQ(l,d),$async$Jf)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
r=s.a
q=s.b
p=new C.m4(l,r,q,D.dw9,new A.W(Date.now(),0,!1))
w=4
return A.b(C.ML(t.a.c,p),$async$Jf)
case 4:o=f
w=5
return A.b(t.wJ(),$async$Jf)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fDW)
w=1
break}n=J.aP(t.e)
for(;;){if(!n.B()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fFL)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.FI(m)
case 1:return A.h(u,v)}})
return A.i($async$Jf,v)},
FI(d){return this.cnX(d)},
cnX(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$FI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.he(s,new C.avP(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$FI)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.ML(u.a.c,t),$async$FI)
case 5:case 4:w=6
return A.b(u.wJ(),$async$FI)
case 6:return A.h(null,v)}})
return A.i($async$FI,v)},
wt(d){return this.c5J(d)},
c5J(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bIy(),$async$wt)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.he(r,D.aOA,!0,"NgmyWorksheetProjectScan",x.N),$async$wt)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bJ4(q),$async$wt)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hvv(s)
w=15
return A.b(C.ML(t.a.c,p),$async$wt)
case 15:o=f
w=16
return A.b(t.wJ(),$async$wt)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fFQ)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.FI(p)
case 1:return A.h(u,v)}})
return A.i($async$wt,v)},
Pn(d){return this.bOT(d)},
bOT(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.f4D(d),s,null,!0,!0,x.y),$async$Pn)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pz(t.a.c,A.a([],x.D)),$async$Pn)
case 6:w=7
return A.b(t.wJ(),$async$Pn)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fE0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pn,v)},
coa(d){var w=this.c
w.toString
A.bV(B.L,null,new C.f4M(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
baE(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.kc
else w=B.c
v=A.n(16)
u=A.K(p?B.eq:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.q(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.m),r,r,r,r,B.bS,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.q(r,A.w(A.a([s,B.af,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.m),r,r,r,r,B.tJ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a2d(d,e){return this.cnY(d,e)},
cnY(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2d=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.f4H(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a2d)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hVi(r,new C.f4I(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Pp(d,e),$async$a2d)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2d,v)},
b7B(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.q(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.m),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.ax
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.i,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.C(A1.Dm,A.A(A.a([s,B.bc,t,A.V(B.eN,w?B.bv:B.bl,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cv7(d,e,f,g,h,i){return this.b7B(!1,d,e,f,g,h,i)},
Pp(d,e){return this.bP2(d,e)},
bP2(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lH(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Pp)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bHd(t.a.c,d.a),$async$Pp)
case 6:w=7
return A.b(t.wJ(),$async$Pp)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pp,v)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uA(n),l=n?B.c7:B.hX
if(p.f)n=D.bhG
else{w=A.aF(d,B.dL,x.w).w
v=p.bJh(m)
u=p.c4N(m)
t=p.gbGi()
if(n)s=B.kc
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.af,u,B.aN,new C.GR(A.q(o,A.A(A.a([p.aFs(P.Qs,"Projects",m,D.afJ),p.aFs(B.vw,"Cashier",m,D.b5r),p.aFs(B.Ii,"Family Tree",m,D.i3p)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eF,0.95,t,o),B.bx],q)
v=p.d
if(v===D.afJ){v=J.aa(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX,new C.aAE(p.gaVl(),o)],q),B.l,o,B.e,B.i,0,o,o),B.az,p.cv9(m)],q))}else{n=p.a
if(v===D.b5r)t.push(new C.ary(n.c,m,o))
else{v=p.r
t.push(new C.asM(n.c,n.d,n.e,n.f,new C.f4Z(p),new C.f5_(p),new A.bb(v,x.b4)))}}n=A.cc(A.w(t,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bn(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bJh(d){var w=null,v=A.n(8),u=d.a,t=A.V(Y.a3Z,u?B.bv:B.bl,w,w,w,16)
return A.aM(!1,v,!0,new A.C(B.jZ,A.A(A.a([t,B.b6,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f4A(this),w,w,w,w,w,w,w)},
gbGi(){switch(this.d.a){case 0:return D.aeS
case 1:return D.hQZ
case 2:return D.aeT}},
c4N(d){var w=null,v=A.n(15),u=A.a([new A.ab(0,B.H,B.aW.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.c4E,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bc,D.bOF,A.aG(!1,B.a3,!0,w,A.aM(!1,A.n(12),!0,A.q(w,D.c1W,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f4E(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.i,0,w,w),r=B.b7.j(0.55),q=A.n(12)
return new C.GR(A.q(w,A.w(A.a([new A.C(B.HV,s,w),A.q(w,A.w(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BL(this.gcLm()),w,w,w,w,w,w,D.fXW,w,w,w)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.m),w,w,w,B.tI,B.jF,w,w,1/0)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aW,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hQY,w)},
aFs(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aW:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.H,B.aW.j(0.42),B.cN,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bl
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bl
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cZ(u,A.A(A.a([w,B.dU,new A.d_(1,B.c8,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.i,0,u,u),u,u,B.cn,new A.p(r,u,p,q,o,u,B.m),B.iP,u,u,u,u,B.I2,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f4V(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cv9(d){var w,v,u,t,s,r,q=this,p=null
if(J.ci(q.e)){w=d.a
v=w?B.em:B.c
u=A.n(15)
t=A.q(p,D.c22,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ab(2,B.H,B.aW.j(0.5),B.eR,28)],x.V),D.ceL,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GR(A.q(p,A.w(A.a([t,B.df,s,B.N,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ed,A.A(A.a([A.E(q.aX_(B.jJ,"Scan QR",new C.f4P(q),d),1),B.ar,A.E(q.aX_(Q.An,"Upload file",new C.f4Q(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.az,A.bH(D.hpa,p,q.gaVl(),A.bp(B.aW,p,p,p,B.c,B.hu,p,p,new A.ba(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bLa,1.05,D.aeS,p)}w=J.b8(q.e,new C.f4R(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GR(A.w(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.aeS,p)},
aX_(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aW.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.q(w,A.w(A.a([A.V(d,B.b7,w,w,w,26),B.N,A.c(e,w,w,w,w,w,w,D.fW5,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.m),w,w,w,w,Ax.a26,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cv8(d,e){var w,v,u=null,t=e.a,s=t?B.em:B.c,r=A.n(14),q=A.K(t?B.eq:B.bP,B.r,1),p=A.a([new A.ab(0,B.H,B.v.j(t?0.35:0.08),B.eH,10)],x.V),o=A.n(14),n=t?B.bv:B.bl
n=A.bv(B.Zh,new A.fK(1.7777777777777777,C.aUx(!0,B.ft,1/0,P.Qs,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.w(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BL(d.gyb()),u,u,u,u,u,u,D.fU2,u,u,u)],w),B.B,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.w(A.a([n,new A.C(B.bD,A.A(A.a([v,A.aJ(u,u,u,u,A.V(Ao.a50,t?B.bv:B.bl,u,u,u,u),u,u,u,new C.f4N(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.B,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f4O(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.p(s,u,q,r,p,u,B.m),u,u,u,B.dX,u,u,u,1/0)}}
C.bD2.prototype={}
C.rO.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd4D(){var w,v,u,t,s=this.c
if(s===B.h.bN(s))w=B.n.v(B.h.M(s))
else{v=B.h.a1(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aD(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.m4.prototype={
gyb(){return B.d.cG(this.d,0,new C.cK5())},
ak(){var w=this,v=w.d,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.cK4(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bi6(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.m4(w.a,w.b,v,u,w.e)},
bhQ(d){return this.bi6(d,null)},
UC(d){return this.bi6(null,d)}}
C.IW.prototype={
a9(){return"FamilyGender."+this.b}}
C.id.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hQf(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aIe(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.id(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.anK.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.lh.prototype={
gasj(){var w=this.f
return new A.X(w,new C.bW4(),A.T(w).k("X<1>")).gI(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.bW3(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iys(w.y),"games",w.z],x.N,x.z)},
xt(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.lh(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bi5(d,e){var w=null
return this.xt(w,w,w,d,e,w,w,w,w)},
cUQ(d,e,f,g,h,i,j){return this.xt(d,e,null,f,g,h,i,j,null)},
aIj(d,e){var w=null
return this.xt(w,w,w,w,d,w,w,e,w)},
cUS(d,e,f,g,h,i,j,k){return this.xt(d,e,null,f,g,h,i,j,k)},
cTl(d){var w=null
return this.xt(w,w,w,w,w,w,w,d,w)},
cTJ(d){var w=null
return this.xt(w,w,w,w,w,w,w,w,d)},
bhK(d){var w=null
return this.xt(w,w,d,w,w,w,w,w,w)},
aI3(d){var w=null
return this.xt(w,w,w,w,w,d,w,w,w)},
cUn(d,e,f){var w=null
return this.xt(w,d,w,w,e,w,w,f,w)},
cT8(d){var w=null
return this.xt(w,w,w,d,w,w,w,w,w)},
cTV(d,e){var w=null
return this.xt(d,w,w,w,w,w,e,w,w)}}
C.cK6.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cK7.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aKM.prototype={}
C.bdh.prototype={
aj(d){this.a=d.a
this.b=d.b},
d3(d){var w=new C.bdh()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b6(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bdg.prototype={
gxj(){return!0},
gHi(){return this.z.b<this.b.length},
aYG(d){switch(0){case 0:return d.a.c}},
aYm(d){switch(0){case 0:return d.a.d}},
bZd(d,e){switch(0){case 0:return new A.hY(d,e)}},
bYB(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hp(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.jf(0,0,B.n.D(0,b5.a,b5.b),B.n.D(0,b5.c,b5.d))
return}w=A.IF(b4)
switch(0){case 0:v=b5.b
u=new A.le(0,v,0,1/0)
t=w===B.X_
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fE(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hp(b4,u,!0)
f=b1.aYG(g)
f.toString
e=b1.aYm(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aKM(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aKM(k,j,i))}d=s.length
switch(0){case 0:q=b5.cI(new A.hY(m,l))
a0=q.a
a1=q.b
b1.a=new A.jf(0,0,a0,a1)
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
for(q=B.d.fE(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aYG(g)
e=b1.aYm(g)
e.toString
a9=b1.bYB(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bZd(a6,a3+a9)
b0=g.a
g.a=new A.jf(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h1(d){var w,v,u,t,s,r=this
r.lI(d)
w=d.b
w.iD()
v=A.dA()
u=r.a
v.ek(u.a,u.b,0,1)
w.pF(0,v)
for(u=r.z,u=B.d.dw(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h1(d)
w.nL(0)},
HQ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iD(){return this.z}}
C.bBh.prototype={}
var z=a.updateTypes(["az<~>()","P(id)","~()","P(lh)","P(nR)","a9<o,@>(lh)","F(lh,lh)","F(id,id)","o(id)","lh(a9<@,@>)","P(m4)","nR(a9<@,@>)","a9<o,@>(nR)","P(vg)","vg()","F(id)","ah<id>()","P(A_)","a1j(Z)","o?(id)","eR<o?>(id)","az<~>(m4)","P(rO)","a9<o,@>(id)","id(a9<@,@>)","F(m4,m4)","P(ahl)","~(bh)","x(pb)","F(F,abj)","P(r2<F>)","~(r2<F>)","UT(Z)","P(Nm)","P(vf)","~(id)","o(o)","Xd(Z)","US(Z)","afF(Z)","a0b(Z)","id(id)","cS(bw<o,H5>)","cS(Lp)","a0I(Z)","F?(id)","id()","P(Lp)","C(id)","~(IW)","a0E(Z)","x(IW,o,a_)","P(ahe)","bw<o,ah<a9<o,@>>>(o,ah<nR>)","a0G(Z)","+count,id,name(F,o,o)(lh)","o(lh)","a1D(Z)","a1E(Z)","P(mp)","mp()","a_G(Z)","a3r(Z)","a0g(Z)","a0f(Z)","~(F)","~(o,lR?)","x(rO)","ag_(Z)","~(lN)","az<~>([o?])","H(H,m4)","x(m4)","H(H,rO)","a9<o,@>(rO)","rO(a9<@,@>)","ah<lR>()","vf()","o(W)","m4(a9<@,@>)","cr(IV)","o(m4)","a9<o,@>(m4)","F(nR,nR)","lh(a9<o,@>)","lh(lh)"])
C.h_D.prototype={
$1(d){return d.a+" "+d.b},
$S:127}
C.h_C.prototype={
bry(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qX(s,d,B.i6,"book",E.HJ),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.HW(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bry(d)},
$S:264}
C.h_E.prototype={
$1(d){return d.b},
$S:127}
C.hat.prototype={
$1(d){var w=null
return A.eC(w,B.L,new H.Rc(this.a,this.b,w),w,w,0,B.a2m,w,B.db,w,w,w)},
$S:46}
C.fMS.prototype={
$1(d){return d!=null},
$S:212}
C.fMT.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:212}
C.fMY.prototype={
$1(d){if(this.a)return new A.m(d.a*520,d.b*160)
return d},
$S:174}
C.fYa.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.ff(d,w,w,w,A.hm(w,B.um,w,w,w,w,w,w,w,B.dK,w,w,10.5,w,B.eP,w,!0,w,w,w,w),w),u=f?B.eP:B.xl
return new A.oA(D.bGt,A.ac7(A.a([new A.h4(130,w,v),new A.zZ(1,B.Ic,A.ff(e,w,w,w,A.hm(w,g==null?D.eMj:g,w,w,w,w,w,w,w,B.dK,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.zl,B.md))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2023}
C.fY9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wr(999)
f=A.y0(A.mj(h,A.ff("Cashier",h,h,h,A.hm(h,D.Bh,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eP,h,!0,h,h,h,h),h),h,new A.lf(D.eM9,h,f,B.io,h),h,h,D.bGX,h))
w=A.y0(A.ff("Debt receipt",h,h,h,A.hm(h,h,h,h,h,h,h,h,h,B.dK,h,h,22,h,B.eP,h,!0,h,h,h,h),h))
v=A.y0(A.ff(C.xH(new A.W(Date.now(),0,!1),!0),h,h,h,D.adf,h))
u=A.wr(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.ff(s,h,h,h,A.hm(h,h,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eP,h,!0,h,h,h,h),h)
r=A.ff("Person who owes",h,h,h,D.adf,h)
q=A.wr(10)
p=x.Z
u=A.mj(h,A.zR(A.a([s,new A.h4(h,2,h),r,new A.h4(h,10,h),A.mj(h,A.zR(A.a([A.ff("Amount owed",h,h,h,D.adf,h),new A.h4(h,2,h),A.ff(A.BL(t.c),h,h,h,A.hm(h,D.Bh,h,h,h,h,h,h,h,B.dK,h,h,20,h,B.eP,h,!0,h,h,h,h),h)],p),B.ty,B.md),h,new A.lf(B.qq,h,q,B.io,h),h,h,D.bG9,1/0)],p),B.ty,B.md),h,new A.lf(E.aQ0,h,u,B.io,h),h,h,D.bI9,1/0)
q=new A.oj(D.eMc,0.9,B.lv)
r=A.wr(12)
s=i.c
o=s.$2("Original due",C.xH(t.r,!1))
n=s.$2("Current due",C.xH(t.f,!1))
m=i.d
l=new A.oj(m,1.1,B.lv)
k=A.wr(8)
j=i.a
k=A.a([o,n,new A.h4(h,6,h),A.mj(h,A.y0(A.ff(t.gaPs(),h,h,h,A.hm(h,m,h,h,h,h,h,h,h,B.dK,h,h,11,h,B.eP,h,!0,0.5,h,h,h),h)),h,new A.lf(h,new A.qm(l,l,l,l),k,B.io,h),h,h,D.bH5,1/0),new A.h4(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Bh))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Bh))
else{n=A.ff("Missed days ("+n+")",h,h,h,A.hm(h,B.um,h,h,h,h,h,h,h,B.dK,h,h,10.5,h,B.eP,h,!0,h,h,h,h),h)
m=A.T(o).k("O<1,Us>")
o=A.B(new A.O(o,new C.fY8(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h4(h,4,h),n,new A.h4(h,6,h),new C.bdg(5,5,new C.bdh(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h4(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h4(h,8,h),w,new A.h4(h,3,h),v,new A.h4(h,16,h),u,new A.h4(h,10,h),A.mj(h,A.zR(k,B.zl,B.md),h,new A.lf(h,new A.qm(q,q,q,q),r,B.io,h),h,h,B.aog,1/0)],p)
w=j.a
if(w!=null){v=new A.oj(B.KM,1,B.lv)
B.d.u(f,A.a([new A.h4(h,16,h),A.ff("Debtor signature",h,h,h,A.hm(h,B.um,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eP,h,!0,h,h,h,h),h),new A.h4(h,6,h),A.mj(h,new A.Jc(w,B.Zt,h,h),h,new A.lf(h,new A.qm(v,v,v,v),A.wr(6),B.io,h),82,h,B.PN,1/0)],p))}f.push(new A.h4(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.ff(w,h,h,h,D.fM7,h))
f.push(new A.h4(h,18,h))
f.push(A.y0(A.ff("NGMY.ORG",h,h,h,A.hm(h,D.Bh,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eP,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.fY8.prototype={
$1(d){var w=null,v=new A.oj(D.KN,0.7,B.lv),u=A.wr(999)
return A.mj(w,A.ff(C.xH(d,!1),w,w,w,A.hm(w,D.KN,w,w,w,w,w,w,w,B.dK,w,w,9.5,w,B.eP,w,!0,w,w,w,w),w),w,new A.lf(w,new A.qm(v,v,v,v),u,B.io,w),w,w,D.bMA,w)},
$S:2024}
C.cbp.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.n(999),t=A.K(B.bC.j(0.28),B.r,1)
return A.q(w,A.c(C.xH(d,!1),w,w,w,w,w,w,D.fTu,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,w,B.f3,w,w,w)},
$S:2025}
C.hb0.prototype={
$1(d){var w=null,v=A.aF(d,B.bZ,x.w).w,u=A.n(26),t=A.aJ(w,w,w,w,D.c5G,w,w,w,new C.haY(d),w,w,w,w,w,B.cp),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eC(w,B.L,new A.cR(new A.aX(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.C(B.a27,A.w(A.a([new A.bJ(B.a9,w,w,t,w),new A.d_(1,B.c8,A.cc(A.w(A.a([new A.e9(new C.b27(r,w),s),B.S,A.A(A.a([A.E(A.en(B.Av,w,D.hlj,new C.haZ(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fc,w,new A.ba(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.df(B.a5A,w,D.hhC,new C.hb_(r,d),A.bp(B.b7,w,w,w,B.c,w,B.fc,w,new A.ba(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ai),w),w,w,0,B.a2B,w,B.db,w,w,w)},
$S:46}
C.haY.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.haZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.bl$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lC(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eX(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aD(q,p,"_")
if(o.length>32)o=B.a.av(o,0,32)
w=5
return A.b(A.rH(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.hb_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h4L(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.haT.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eC(w,B.ax,A.w(A.a([new A.C(D.bHY,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nF,w,w,w),1),A.aJ(w,w,w,w,B.lJ,w,w,w,new C.haR(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.d_(1,B.c8,new A.C(B.eM,A.bv(A.n(14),A.h9(t,B.z,w,w,B.cr,B.dE,!1,w,!1,w,w),B.ap),w),w),new A.C(B.Ps,new A.a5(1/0,w,A.df(B.ol,w,D.b_y,new C.haS(t,this.c,d),A.bp(B.b7,w,w,w,B.c,w,w,w,new A.ba(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.PE,w,B.db,w,new A.ba(v,B.a1),w)},
$S:46}
C.haR.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.haS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rH(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.hb4.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eC(w,B.ax,new A.C(D.bI5,A.w(A.a([A.A(A.a([D.bNL,A.aJ(w,w,w,w,B.lJ,w,w,w,new C.hb2(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.N,new A.e9(A.bv(A.n(14),A.q(w,A.b4(w,w,w,new C.bfz(s.ax,w),B.aB),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.af,new A.a5(1/0,w,A.df(B.ol,w,D.b_y,new C.hb3(t,s,d),A.bp(B.b7,w,w,w,B.c,w,w,w,new A.ba(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.ba(v,B.a1),w)},
$S:46}
C.hb2.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hb3.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.bl$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lC(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aD(r,q,"_")
if(p.length>32)p=B.a.av(p,0,32)
r=J.eX(B.dM.gaS(s))
w=5
return A.b(A.rH(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fRS.prototype={
$1(d){return d.a===this.a},
$S:262}
C.dWh.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dW2.prototype={
bqK(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.em:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dW5(s,q,e),p,!0,!0,!1,B.L6,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dW6(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bqK(d,e)},
$S:2026}
C.dW5.prototype={
$1(d){var w,v=null,u=this.c===B.xV,t=u?D.dDG:D.dyU
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(B.aoP,A.w(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iB(!0,v,v,B.y,D.fCx,new C.dW4(this.a,w,t,d),t.length,v,B.ea,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:32}
C.dW4.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.n(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bv:B.bl).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.q(B.z,C.b26(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dW3(t.d,r),s,s,s,s,s,s,s)},
$S:164}
C.dW3.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dW6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dW0.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:88}
C.dW1.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cN(B.cn,e,v)
return new A.de(e,!1,A.iF(B.z,A.at(A.aG(!1,B.a3,!0,v,new A.eb(new C.dW_(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bT.T>"))),v)},
$S:34}
C.dW_.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.em:B.c,f=A.n(14),e=A.K((h?B.bv:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.C(B.eF,A.V(B.cC,i.a.d.a?B.bv:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dVL(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aXw("Name")
r=l.a
q=r.d==null?k:new C.dVM(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bt:B.mr
n=A.K(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.M,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.aIb(new A.C(B.f1,A.aM(!1,p,!0,A.q(B.z,C.b26(m==null?"\ud83d\udc64":A.fZ0(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.ct,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lq,k,B.ad4,k,k)
v=A.a([v,B.af,t,B.N,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aYc("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dVN(r,a0),r.d===B.xV),1),B.aa,A.E(i.aYc("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dVS(r,a0),r.d===B.a9z),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.N,new A.bJ(B.a5,k,k,A.hy(D.c3S,D.hjy,new C.dVT(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cp)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.vj(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aXx("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.am,k,k,s,k,k,B.ei,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bv:B.bl).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xH(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.q(k,A.A(A.a([A.E(A.w(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.i,0,B.p),1),D.c0m],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dVU(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.N,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aXw("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b5X(r.b.length!==0,B.mB,new C.dVV(r,i,a0),new C.dVW(r,a0),"Upload from gallery","ID photo"))
v.push(i.b5X(r.c.length!==0,D.bUm,new C.dVX(r,i,d,a0),new C.dVY(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new As.a9Y("Signature (optional)",t,new C.dVZ(a0),new C.dVO(a0,t),new C.dVP(d,t,a0),k))
v.push(B.az)
i=i.a.d.a
t=i?B.bv:B.bl
s=(i?B.bv:B.bl).j(0.28)
s=A.E(A.dV(E.b_r,new C.dVQ(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.rh,k,new A.ba(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cY,k,k,k,B.c,k,B.rh,k,new A.ba(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bH(A.c(h?"Save":"Update",k,k,k,k,k,k,B.wp,k,k,k),k,new C.dVR(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.q(k,A.cc(A.w(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.m),k,k,k,B.rk,B.jF,k,k,360)},
$S:179}
C.dVL.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dVM.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dVN.prototype={
$0(){return this.b.$1(new C.dVK(this.a))},
$S:0}
C.dVK.prototype={
$0(){var w=this.a
w.d=B.xV
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dVS.prototype={
$0(){return this.b.$1(new C.dVJ(this.a))},
$S:0}
C.dVJ.prototype={
$0(){var w=this.a
w.d=B.a9z
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dVT.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dVU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wn(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dVI(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVI.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gcl(),w.gci(),w.gcB(),0,0,0,0,0)},
$S:0}
C.dVV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.R4(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dVH(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVH.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dVW.prototype={
$0(){return this.b.$1(new C.dVG(this.a))},
$S:0}
C.dVG.prototype={
$0(){return this.a.b=""},
$S:0}
C.dVX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.em:B.c
w=3
return A.b(A.bV(q,null,new C.dVE(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.R4(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dVF(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVE.prototype={
$1(d){var w=null
return A.bn(!0,A.w(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.aup,w,w,w,w,new C.dVy(d),!1,w,w,w,w,w,w,w,D.h9s,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.aun,w,w,w,w,new C.dVz(d),!1,w,w,w,w,w,w,w,D.hgz,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:32}
C.dVy.prototype={
$0(){A.a7(this.a,!1).N("camera")
return null},
$S:0}
C.dVz.prototype={
$0(){A.a7(this.a,!1).N("gallery")
return null},
$S:0}
C.dVF.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dVY.prototype={
$0(){return this.b.$1(new C.dVD(this.a))},
$S:0}
C.dVD.prototype={
$0(){return this.a.c=""},
$S:0}
C.dVZ.prototype={
$0(){return this.a.$1(new C.dVC())},
$S:0}
C.dVC.prototype={
$0(){},
$S:0}
C.dVO.prototype={
$0(){return this.a.$1(new C.dVB(this.b))},
$S:0}
C.dVB.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dVP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.akg(u.a,null,null,new C.dVA(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVA.prototype={
$4(d,e,f,g){this.a.$1(new C.dVx(this.b,d))},
$S:452}
C.dVx.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.u(w,this.b)},
$S:0}
C.dVQ.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dVR.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fHK)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fEz)
return}A.a7(w.c,!1).N(!0)},
$S:0}
C.dWk.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:88}
C.dWl.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.em:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BL(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.Ag(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.Ag(r).length>0?B.bC:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bl
t=(q?B.bv:B.bl).j(0.28)
s=x.p
return new A.de(e,!1,A.at(A.aG(!1,B.a3,!0,r,A.q(r,A.w(A.a([p,B.N,v,u,B.az,A.A(A.a([A.E(A.dV(B.oA,new C.dWi(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.jD,r,new A.ba(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bH(D.hh0,r,new C.dWj(d),A.bp(B.cY,r,r,r,B.c,r,B.jD,r,new A.ba(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.m),r,r,r,B.zG,B.HV,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dWi.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dWj.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dWe.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dWf(r),p=r.a.d.a,o=p?B.em:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BL(l.c),s,s,s,s,s,s,D.fV6,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.jd((r.a.d.a?B.bv:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a4l,"View receipt",new C.dW7(r,d,l))
u=l.x!=null
t=u?B.q9:B.rs
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bI2,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dW8(r,d,l)),q.$3$icon$label$onTap(B.DG,"Edit",new C.dW9(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mB,"View / download ID",new C.dWa(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bUl,"View / download selfie",new C.dWb(r,d,l)))
if(l.gaJZ())p.push(q.$3$icon$label$onTap(B.a5q,"View / download signature",new C.dWc(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.es,"Delete",new C.dWd(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.tI,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:32}
C.dWf.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.ax
else w=d
return A.aM(!1,v,!0,new A.C(B.f2,A.A(A.a([A.V(e,w,v,v,v,20),B.bc,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2027}
C.dW7.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.haX(w,this.c)},
$S:0}
C.dW8.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.TV(this.c)},
$S:0}
C.dW9.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.En(this.c)},
$S:0}
C.dWa.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJp(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dWb.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJp(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dWc.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hb1(w,this.c)},
$S:0}
C.dWd.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.R3(0,this.c)},
$S:0}
C.dWm.prototype={
$1(d){return d.x==null},
$S:262}
C.dWn.prototype={
$1(d){return d.x!=null},
$S:262}
C.dWo.prototype={
$2(d,e){return d+e.c},
$S:2028}
C.dWp.prototype={
$0(){return this.a.bGP()},
$S:0}
C.dWg.prototype={
$0(){return this.a.ai6(this.b)},
$S:0}
C.fSD.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fSE.prototype={
$0(){return B.d.gH(D.a6J)},
$S:z+77}
C.dle.prototype={
$0(){var w=this.a
return w.l(new C.dlc(w,this.b))},
$S:0}
C.dlc.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dld.prototype={
$0(){},
$S:0}
C.dlf.prototype={
$0(){var w=this.a.gc5x()
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.fVx.prototype={
$1(d){return C.hzO(A.a0(d,x.N,x.z))},
$S:z+11}
C.fVy.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fVz.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.n.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h9v.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hih.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fRJ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bUM.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eG(e,v)?v:null},
$S:2029}
C.ha6.prototype={
$1(d){var w=this
return new C.a0G(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dlU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dlT(w,d))},
$S:z+80}
C.dlT.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dlI.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cM(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.dlF.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dlg.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dlh.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dlJ.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dlp.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.em:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.dy,w,w,!0,w,w,w,new C.dln(d),w,w),A.bH(B.ym,w,new C.dlo(d),A.bp(B.nQ,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:17}
C.dln.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dlo.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dlq.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.n.D(w.r-1,-1,999)},
$S:0}
C.dlG.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dlH.prototype={
$0(){return B.d.gH(D.AI)},
$S:z+14}
C.dll.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzC(0),t=J.aa(w.d)
w=J.aa(w.d)===1?"page":"pages"
return new C.US(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dlm.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dlr.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a0b(v,u,J.aa(w.d),null)},
$S:z+40}
C.dls.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dlS.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_Q(r.y,r.gzC(0),J.aa(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dlQ(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.beU(v,e,w,u,t,r.gbXG(),C.hQe(r.y.Q),r.gzC(0),s)
w=t}return A.ca(q,new C.dlR(r,e),new A.C(B.a2s,w,s))},
$S:2030}
C.dlR.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd2(t).ay){t=this.b
u=x.cy.a(B.d.gd2(u.f.f)).gvJ(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dA()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fM(v*3.141592653589793*0.5)
return A.fG(B.a5,A.d3(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.dlQ.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLa(B.rc,B.iQ)},
$S:0}
C.dlC.prototype={
$0(){var w=this.a
return w.l(new C.dlB(w))},
$S:0}
C.dlB.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dlD.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).N(null)
return null},
$S:0}
C.dli.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kI.j(0.5),r=x.p,q=A.a([D.h7Z,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ci(p.d)?"Write this book":"Write a new book"
q.push(p.a_Z(d,B.e8,w,J.ci(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_Z(d,K.ash,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cM(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cA,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cA,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_Z(d,X.ath,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_Z(d,B.p9,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_Z(d,B.p9,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eC(u,E.CN,A.bn(!0,new A.C(B.xe,A.w(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.PH,u,B.db,u,new A.ba(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dlE.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dlv.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cM(w.d)
return new C.a0I(v,J.cM(w.d),w.r+1,null)},
$S:z+44}
C.dlw.prototype={
$1(d){var w=null
return A.pg(!1,A.ek(w,w,w,E.CN,new A.km(this.a,new C.dlu(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:348}
C.dlu.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acK,B.pt,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:783}
C.dlx.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dly.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:199}
C.dlz.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dlA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BS(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Tw(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.dlt(s,t))
w=4
return A.b(s.ll(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dlt.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dlL.prototype={
$1(d){var w=null
return A.pg(!1,A.ek(w,w,w,E.CN,new A.km(this.a,new C.dlK(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:348}
C.dlK.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acK,B.pt,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:783}
C.dlM.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dlN.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:199}
C.dlO.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:199}
C.dlP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BS(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.ll(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dlj.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bnB(B.rc,A4.Pf)},
$S:0}
C.dlk.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLa(B.rc,A4.Pf)},
$S:0}
C.dnG.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dnH.prototype={
$1(d){var w=this.a
return w.l(new C.dnF(w))},
$S:9}
C.dnF.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dnI.prototype={
$1(d){var w=this.a
return w.l(new C.dnE(w))},
$S:9}
C.dnE.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dnJ.prototype={
$1(d){var w=this.a
return w.l(new C.dnD(w))},
$S:9}
C.dnD.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dnK.prototype={
$0(){var w=this.a
return w.l(new C.dnC(w,this.b))},
$S:0}
C.dnC.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dnL.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga47()
A.a7(this.b,!1).N(new A.btZ(w,v))},
$S:0}
C.dm8.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dm7.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0E(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dmc.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dmb.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bdw(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hH,v,v,v)
return A.ek(A.a([A.bK(!1,B.dy,v,v,!0,v,v,v,new C.dm9(d),v,v),A.bH(B.ym,v,new C.dma(d),A.bp(B.nQ,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CN,w,v,v,v,v,D.h6K,v)},
$S:17}
C.dm9.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dma.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dmd.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dme.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cc(A.bY(B.bI,r,B.bq,t,18,14),B.t,t,B.y,t,t,D.bJ2,t,t,B.ah)},
$S:321}
C.dm6.prototype={
$0(){return this.a.RW(0,this.b)},
$S:0}
C.dm5.prototype={
$0(){return this.a.Rj(0,this.b)},
$S:0}
C.cTq.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cTr.prototype={
$0(){return B.d.gH(D.AI)},
$S:z+14}
C.cTs.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bS(0,new A.C(d,new A.bP(new A.p(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2032}
C.dct.prototype={
$1(d){return this.a.l(new C.dcs(this.b,this.c))},
$S:9}
C.dcs.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dcS.prototype={
$1(d){return this.a.l(new C.dcF())},
$S:2}
C.dcF.prototype={
$0(){},
$S:0}
C.dcT.prototype={
$1(d){return this.a.l(new C.dcE())},
$S:2}
C.dcE.prototype={
$0(){},
$S:0}
C.dcU.prototype={
$0(){var w=this.a
return w.l(new C.dcD(w,this.b))},
$S:0}
C.dcD.prototype={
$0(){var w=this.a
return w.d=w.goN().GX(this.b.a)},
$S:0}
C.dcV.prototype={
$0(){var w=this.a
return w.l(new C.dcC(w,this.b))},
$S:0}
C.dcC.prototype={
$0(){var w=this.a
return w.d=w.goN().cSF(this.b)},
$S:0}
C.dcW.prototype={
$1(d){return this.a.l(new C.dcB())},
$S:2}
C.dcB.prototype={
$0(){},
$S:0}
C.dcX.prototype={
$0(){var w=this.a
return w.l(new C.dcA(w,this.b))},
$S:0}
C.dcA.prototype={
$0(){var w=this.a
return w.d=w.goN().cSK(this.b.a)},
$S:0}
C.dcY.prototype={
$1(d){var w=this.a
return w.l(new C.dcN(w,d))},
$S:6}
C.dcN.prototype={
$0(){var w=this.a
return w.d=w.goN().cTE(this.b)},
$S:0}
C.dcZ.prototype={
$1(d){var w=this.a
return w.d=w.goN().aI6(d)},
$S:2}
C.dd_.prototype={
$1(d){var w=this.a
return w.d=w.goN().cSN(d)},
$S:2}
C.dd1.prototype={
$1(d){var w=this.a
return w.d=w.goN().cTC(d)},
$S:2}
C.dd2.prototype={
$1(d){var w=this.a
return w.l(new C.dcM(w,d))},
$S:9}
C.dcM.prototype={
$0(){var w=this.a
return w.d=w.goN().cTt(this.b)},
$S:0}
C.dd3.prototype={
$0(){var w=this.a,v=w.goN(),u=B.a.i(w.gzC(0).a.a),t=B.a.i(w.gaFf().a.a)
u=v.bif(B.a.i(w.gauB().a.a),t,u)
A.a7(this.b,!1).N(u)
return null},
$S:0}
C.bUW.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bUQ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUP(w,d))},
$S:10}
C.bUP.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a2(0)}},
$S:0}
C.bUZ.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bUR.prototype={
$0(){var w=this.a
w.Q=D.b50
w.afC(1)
w.r.x=null},
$S:0}
C.bUS.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b50)return
w=new A.e6()
w.cW(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.dbK[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bUV.prototype={
$0(){var w=this.a
w.Q=D.afp
w.afC(2)
w.r.z=null},
$S:0}
C.bUU.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.i1k
t.afC(3)
w=t.r
w.d=s
w.x="I say: "+t.gDe()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dja[v.aw(4)]:D.dGw[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bUX.prototype={
$0(){var w=this.a
w.Q=D.b51
w.CW=this.b
w.cy=1
w.afC(4)
w.r.f=w.f.a+5},
$S:0}
C.bUY.prototype={
$0(){},
$S:0}
C.bUT.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i1()},
$S:0}
C.bUN.prototype={
$0(){return this.a.M3(this.b)},
$S:0}
C.bUO.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i1()},
$S:0}
C.bWs.prototype={
$0(){var w=this
return w.a.Se(w.b,0,w.c,w.d)},
$S:0}
C.bWt.prototype={
$0(){var w=this
return w.a.Se(w.b,3,w.c,w.d)},
$S:0}
C.bWu.prototype={
$0(){var w=this
return w.a.Se(w.b,1,w.c,w.d)},
$S:0}
C.bWv.prototype={
$0(){var w=this
return w.a.bX6(w.b,w.c,w.d)},
$S:0}
C.bWw.prototype={
$0(){var w=this
return w.a.Se(w.b,4,w.c,w.d)},
$S:0}
C.bWx.prototype={
$0(){var w=this
return w.a.Se(w.b,2,w.c,w.d)},
$S:0}
C.bWy.prototype={
$0(){var w=this
return w.a.Se(w.b,5,w.c,w.d)},
$S:0}
C.bWz.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:784}
C.bWr.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7Y[d],p=q.a.a6(0,new A.m(0,-q.b*1.2*124)),o=A.h0(r,B.cK,r,3,r,A.cW(r,r,r,r,r,r,r,r,r,D.fLN,e),B.a7,B.ca,r,B.e4,B.cb)
o.nH(130)
w=o.b.a.c
w=p.aI(0,new A.m(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.c1(w,v.gb4(v)+12,u+18),B.il)
u=this.a
v=t.eM(B.dP)
w=$.U()
s=A.L()
s.r=B.dJ.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.r1.gp(0)
u.aq(t,s)
w=new A.aI(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bz())
v=A.L()
v.r=D.r1.gp(0)
u.af(w,v)
o.a5(u,new A.m(t.a+9,t.b+6))},
$S:785}
C.bVc.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.bVd.prototype={
$2(d,e){var w=this.a,v=B.n.aQ(w.aon(d),w.aon(e))
if(v!==0)return v
return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.fFt.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hi7.prototype={
$2(d,e){if(e!=null)J.bX(this.a.c0(0,d,new C.hi8()),e)},
$S:z+66}
C.hi8.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hi9.prototype={
$1(d){return d!==this.a},
$S:3}
C.hia.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hib.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hi6(this.c,d))},
$S:3}
C.hi6.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hic.prototype={
$1(d){return d!==this.a},
$S:3}
C.hid.prototype={
$1(d){return d!==this.a},
$S:3}
C.hie.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hi5(this.c,d))},
$S:3}
C.hi5.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fTg.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.aa(w)>this.a.a},
$S:3}
C.h8p.prototype={
$1(d){return d.Q},
$S:z+15}
C.h8q.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fP4.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fWt.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bPY.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hiy.prototype={
$2(d,e){return B.n.aQ(C.hM7(d),C.hM7(e))},
$S:224}
C.hiz.prototype={
$1(d){return d!==this.a},
$S:3}
C.h91.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bO5.prototype={
$0(){var w=this.a
w.ch=!0
w.bbI()},
$S:0}
C.bO0.prototype={
$0(){},
$S:0}
C.bO6.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bNZ.prototype={
$0(){},
$S:0}
C.bO_.prototype={
$0(){},
$S:0}
C.bO4.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bfB(t,u),B.aB),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.q(u,A.c(t.dy,u,u,u,u,u,u,D.fTG,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.m),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aA(B.c_,new A.am(B.a0,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bO1(t,e),u,u,u,u,u,u,u,new C.bO2(t,e),u,u,u,u,u,u,u,u,u,new C.bO3(t,e),u,u,u,u,!1,B.a4)},
$S:35}
C.bO1.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bO3.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bO2.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bNY.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i1()},
$S:0}
C.cu9.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cua.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cu8(w))},
$S:0}
C.cu8.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cub.prototype={
$0(){var w=this,v=w.a
v.gj7()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cuc.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cud.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cue.prototype={
$0(){},
$S:0}
C.cuf.prototype={
$0(){var w=this.a
w.z=w.Yr(++w.e)
w.Q=A.c4(w.gkW()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cu5.prototype={
$0(){return A.a7(this.a,!1).i1()},
$S:0}
C.cu6.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj7().length,e=i/2,d=new C.cu7(i,f,h),a0=g.as,a1=A.a3(a0).k("b9<2>")
a0=A.B(new A.b9(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.ca(new A.hB(a0),new C.cu0(g,new A.m(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj7().length!==0&&!B.d.q(g.gj7(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Rw(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cS(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.Nv(new C.cu1(g,u),new C.cu2(g,u),new C.cu3(g,u),j,j,new A.bb("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fs:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj7().length!==0&&!B.d.q(g.gj7(),-1)){a0=g.e+1>=g.gkW().length?"See my result":"Next family"
g=A.at(C.uP(a0,g.gqC(g),B.d0,B.jH,D.fM),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Yr(0):s).length))break
if(!B.d.q(g.gj7(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Yr(0)
o=s}else o=s
n=s[u]
n=A.e0(B.z,new C.Rw(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Yr(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rv(new A.bq(0,p,t),new C.cu4(),new T.ET(u,j,new C.Rw(l.b,k,62,!1,j),new A.l1(0.25,new C.Rw(m.b,k,62,!1,j),j),new A.kv(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hQ6(),!0,!0,j,j,j,j,j,j,!1,B.j6,j,new A.bb("chip-"+r,a0),w),B.b0,B.j5,j,new A.bb("t"+r+"-"+q,a0),v))}++u}g=A.bY(B.fX,a1,B.bq,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ab,B.t,e,j)},
$S:63}
C.cu7.prototype={
$1(d){return new A.m(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:775}
C.cu0.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj7().length!==0&&!B.d.q(t.gj7(),-1)
return A.b4(p,p,p,new C.bf2(q.b,o,v,w,p),B.aB)},
$S:52}
C.cu2.prototype={
$1(d){return this.a.gj7()[this.b]===-1},
$S:z+30}
C.cu3.prototype={
$1(d){return this.a.cWw(this.b,d.a)},
$S:z+31}
C.cu1.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj7()[t]!==-1,r=A.n(18),q=e.length!==0?B.d0.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d0:B.jX,B.r,2)
u=s?A.l4(new C.cu_(),A.at(new C.Rw(u.gaHy()[u.gj7()[t]].b,u.gaHy()[u.gj7()[t]].a,62,!1,v),v,v,v),B.n1,B.j5,v,v,new A.bq(0.3,1,x.X),x.i):D.bgj
return A.cZ(v,u,v,v,B.b0,new A.p(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2035}
C.cu_.prototype={
$3(d,e,f){return A.e0(B.z,f,e,null,null)},
$S:111}
C.cu4.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*24)*8*(1-e),0))},
$S:111}
C.cUu.prototype={
$1(d){return d>=1},
$S:124}
C.cJ4.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkW()[w.e].d.length)w.l(new C.cJ3(w))},
$S:10}
C.cJ3.prototype={
$0(){return this.a.f++},
$S:0}
C.cJc.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cJd.prototype={
$0(){var w=this.a,v=this.b
w.z.K(0,v)
w.Q=v},
$S:0}
C.cJe.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cJb(w))},
$S:0}
C.cJb.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cJf.prototype={
$0(){return this.a.f++},
$S:0}
C.cJg.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cJh.prototype={
$0(){},
$S:0}
C.cJi.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a7(0)
w.as=!1
w.ay=0},
$S:0}
C.cJ6.prototype={
$0(){return A.a7(this.a,!1).i1()},
$S:0}
C.cJ7.prototype={
$3(d,e,f){var w=null
return A.l4(new C.cJ5(this.a,e),w,B.b0,B.hz,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2036}
C.cJ5.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d0.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.ic(new A.C1(new A.vd(B.v.j(e),B.N3,v,B.ZW),H.c_I(A.b4(v,v,v,new C.aDq(u.gkW()[u.e].c,u.as,v),B.aB),new A.EY(w,w,B.XP)),v),B.ap),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2037}
C.cJ8.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,14*(1-e))),e)},
$S:95}
C.cJ9.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*22)*8*(1-e),0))},
$S:111}
C.cJa.prototype={
$0(){return this.a.bt4(this.b)},
$S:0}
C.fhz.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.aoV$)
v.aoV$=w
v.qp$.sp(0,w)
v.asP(u)},
$S:7}
C.frW.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a2(0)
w.a.$0()},
$S:10}
C.bVY.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVX())},
$S:0}
C.bVX.prototype={
$0(){},
$S:0}
C.bVV.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bVT.prototype={
$0(){},
$S:0}
C.bVU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNH()
w=s+1>=r.length?3:5
break
case 3:q=C.bJD(p.garF(0),0,r.length)
p.l(new C.bVQ(p,q))
o=p
w=6
return A.b(C.Cc(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Cd(s.d,s.c.a,"school",p.garF(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bVR())
w=4
break
case 5:p.l(new C.bVS(p))
p.gqK().X_(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bVQ.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bVR.prototype={
$0(){},
$S:0}
C.bVS.prototype={
$0(){return this.a.x++},
$S:0}
C.bVW.prototype={
$0(){return this.a.M3(this.b)},
$S:0}
C.bVP.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i1()},
$S:0}
C.fhA.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.m(t,s),q=v.b,p=v.d,o=p?C.hQk(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Fh
C.Tt(q,D.eFr,0,0.2,-0.6,-0.2,null,w,D.eEa,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a6(0,new A.m(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.U()
p=A.L()
p.r=D.Hl.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.m(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fhB.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Tt(this.a,D.eEx,0,u,0.7,-0.5,null,null,D.KG,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fhC.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Tt(this.a,D.eGe,0,0,0.8,-0.5,null,null,D.KG,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fhD.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Tt(w.b,D.eFl,0,v,-0.8,-0.5,null,null,D.KG,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fhE.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.m(34,-122+Math.sin(w*5)*5)
else v=v?D.eFp:D.Fh
C.Tt(p,D.eEQ,0,t,0,-0.6,null,v,D.KG,3,0,s,1.3,u,0,w,0)
q=q.cfY(new A.m(222,455),9)
$.U()
w=A.L()
w.r=B.d0.gp(0)
p.af(q,w)},
$S:0}
C.fhF.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:784}
C.bVB.prototype={
$2(d,e){return d+e},
$S:65}
C.bVM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bVN.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bVO.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj7()[u.b]=s
t.gj7()[u.d]=t.y
w=t.as
v=t.qp$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bVI.prototype={
$1(d){return d},
$S:96}
C.bVH.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qp$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bVJ.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bVK.prototype={
$0(){},
$S:0}
C.bVL.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Gq(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.c9(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a7(0)},
$S:0}
C.bVD.prototype={
$0(){return A.a7(this.a,!1).i1()},
$S:0}
C.bVE.prototype={
$2(d,e){var w=this.a
w=w.gkW()[w.f].e
return B.n.aQ(w[d],w[e])},
$S:65}
C.bVF.prototype={
$2(d,e){var w=null,v=C.hqz(new A.av(A.aU(1/0,e.a,e.b),A.aU(1/0,e.c,e.d))),u=this.a
return A.aA(B.c_,new A.e9(A.b4(w,w,w,new C.bmk(u,u.qp$),B.aB),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bVC(u,v),w,w,w,w,!1,B.a4)},
$S:35}
C.bVC.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj7().length
u=B.n.D(B.h.bb((t.a-s.a)/r/450*v),0,v-1)
w.d6v(w.gj7()[u])}},
$S:24}
C.bVG.prototype={
$1(d){var w=this.a
return w.gkW()[w.f].d[d]},
$S:77}
C.dx9.prototype={
$2(d,e){return 0},
$S:65}
C.bVn.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVm())},
$S:0}
C.bVm.prototype={
$0(){},
$S:0}
C.bVl.prototype={
$0(){},
$S:0}
C.bVf.prototype={
$0(){},
$S:0}
C.bVg.prototype={
$0(){},
$S:0}
C.bVk.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.C_},
$S:0}
C.bVj.prototype={
$1(d){var w=null,v=this.a.gqK(),u=A.c(d,w,w,w,w,w,w,D.aYX,w,w,w),t=v.gbpq(0)
return A.aA(B.c_,A.w(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aZa,w,w,w)],x.p),B.B,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbvq(v),w,w,w,w,w,w,!1,B.a4)},
$S:121}
C.bVh.prototype={
$0(){return this.a.M3(this.b)},
$S:0}
C.bVi.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i1()},
$S:0}
C.bVe.prototype={
$0(){return A.a7(this.a,!1).i1()},
$S:0}
C.e80.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e81.prototype={
$1(d){return this.a},
$S:41}
C.e82.prototype={
$0(){var w=this.a
return w.d=w.gTX().bhK(this.b)},
$S:0}
C.e7Z.prototype={
$1(d){return new C.UT(this.a,null)},
$S:z+32}
C.e8_.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e7Y.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hH,w,w,w)
return A.ek(A.a([A.bK(!1,E.b_B,w,w,!0,w,w,w,new C.e7W(d),w,w),A.bK(!1,D.heq,w,w,!0,w,w,w,new C.e7X(d),w,w)],x.p),w,w,D.fM,v,w,w,w,w,D.h0H,w)},
$S:17}
C.e7W.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e7X.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e7V.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e83.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e84.prototype={
$0(){var w=this.a,v=this.b,u=C.bHj(v,10,w.r,!1)
return w.uU(C.hzP(w.a.d,"kahoot",u,w.gb9c(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e85.prototype={
$0(){var w=this.a
return w.uU(new C.anz(this.b,w.a.d,w.r,null))},
$S:0}
C.e86.prototype={
$0(){var w=this.a
return w.uU(new C.alH(this.b,w.a.d,w.r,null))},
$S:0}
C.e89.prototype={
$0(){var w=this.a
return w.uU(new C.awC(this.b,w.a.d,w.r,null))},
$S:0}
C.e8a.prototype={
$0(){var w=this.a
return w.uU(new C.aAy(this.b,w.a.d,w.r,null))},
$S:0}
C.e8b.prototype={
$0(){var w=this.a
return w.uU(new C.anC(this.b,w.a.d,w.r,null))},
$S:0}
C.e8c.prototype={
$0(){var w=this.a
return w.uU(new C.anG(this.b,w.a.d,w.r,null))},
$S:0}
C.e8d.prototype={
$0(){var w=this.a
return w.uU(new C.anI(this.b,w.a.d,w.r,null))},
$S:0}
C.e8e.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d6V()
return v.uU(C.hzP(v.a.d,"creator_"+u.a,w,v.gb9c(),"A game by the family",t,this.c.a))},
$S:0}
C.e8f.prototype={
$0(){return this.a.PM(this.b)},
$S:0}
C.e8g.prototype={
$0(){return this.a.YT(0,this.b)},
$S:0}
C.e87.prototype={
$0(){return this.a.PM(null)},
$S:0}
C.e88.prototype={
$0(){return this.a.L(x.q).f.T(D.fEF)},
$S:0}
C.bVz.prototype={
$0(){var w=this.a
w.d=D.b46
w.z=3},
$S:0}
C.bVA.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a2(0)
w.aS5()}else w.l(new C.bVy(w))},
$S:10}
C.bVy.prototype={
$0(){return this.a.z--},
$S:0}
C.bVp.prototype={
$0(){var w=this.a
w.d=D.af5
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bVq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVo(w))
if(w.as<=0){d.a2(0)
w.b98(-1)}},
$S:10}
C.bVo.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bVv.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Yv},
$S:0}
C.bVw.prototype={
$0(){return this.a.e++},
$S:0}
C.bVs.prototype={
$0(){var w=this.a
w.d=D.b47
w.ay=this.b},
$S:0}
C.bVt.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bVx.prototype={
$2(d,e){return B.n.aQ(e.b,d.b)},
$S:2038}
C.bVu.prototype={
$0(){return this.a.M3(this.b)},
$S:0}
C.bVr.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i1()},
$S:0}
C.bV_.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ay()
s=A.a([new A.au(new A.bd(s,B.b9,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.b9,B.aP),r))}return s},
$S:2039}
C.bV0.prototype={
$0(){return this.a.gDQ().c.push(C.hkd(null,0,20,""))},
$S:0}
C.bVa.prototype={
$1(d){var w=null
return A.bB(w,new A.b5(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dA,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FP,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:272}
C.bV9.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDQ().c,m=this.b,l=n[m],k=o.cje(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.M0,p,p,p),B.aX],g)
if(n.length>1)f.push(A.aJ(p,p,p,p,B.aua,p,p,p,new C.bV4(o,m),p,p,p,p,p,p))
n=J.a1(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bV5(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aGj[v]
t=D.aG_[v]
s=v+1
f.push(new A.C(B.ey,new A.c_(B.aJ,B.e,B.i,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b8,A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bV6(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p),p),new Aw.Q7(v,l.c,new C.bV7(o,l),p,!1,D.lY,p,p,p,p,p,!1,!1,p,I.b4P,p,p,p,p,p,w)],g),p),p))}f.push(D.h6p)
f.push(B.aj)
n=A.a([D.h_L,B.aa],g)
for(r=0;r<3;++r){q=D.ckj[r]
n.push(new A.C(B.f1,A.jc(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bV8(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.q(p,A.w(f,B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.m),p,p,p,B.kM,B.bg,p,p,p)},
$S:154}
C.bV4.prototype={
$0(){var w=this.a
return w.l(new C.bV3(w,this.b))},
$S:0}
C.bV3.prototype={
$0(){return B.d.cP(this.a.gDQ().c,this.b)},
$S:0}
C.bV5.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bV6.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bV7.prototype={
$1(d){return this.a.l(new C.bV2(this.b,d))},
$S:156}
C.bV2.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bV8.prototype={
$1(d){return this.a.l(new C.bV1(this.b,this.c))},
$S:9}
C.bV1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9G.prototype={
$0(){var w=this.a
w.wU()
w.a.bw()
w.a.qD()},
$S:0}
C.e9F.prototype={
$0(){var w=this.a
w.wU()
w.a.bw()
w.a.qD()},
$S:0}
C.e9I.prototype={
$0(){var w=this,v=w.b
if(J.cM(v)||J.ci(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e9J.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9K.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e9E.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e9H.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e9M.prototype={
$0(){this.a.Q7()
return null},
$S:0}
C.e9L.prototype={
$0(){return this.a.FK(this.b)},
$S:0}
C.e96.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dy,w,w,!0,w,w,w,new C.e94(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bH(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e95(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:17}
C.e94.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e95.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e97.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cT8(this.b)},
$S:0}
C.e91.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aXN(w.b,w.c,w.d)},
$S:7}
C.e8t.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e8u.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8L.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HQ(t.a.c),$async$$0)
case 2:s=r.nU(q.dO(e,new C.e8J(t)))
if(s!=null&&t.c!=null)t.l(new C.e8K(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8J.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e8K.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8M.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e8N.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e90.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cTV(C.hQu(w),w)},
$S:0}
C.e8I.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.Xd(u,w,C.aT8(u,w),new C.e8H(v),null)},
$S:z+37}
C.e8H.prototype={
$1(d){return this.bqR(d)},
bqR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e8G(s,d))
w=3
return A.b(s.uQ(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:557}
C.e8G.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bhK(this.b)},
$S:0}
C.e8Y.prototype={
$1(d){return d.as},
$S:z+1}
C.e8Z.prototype={
$1(d){var w=this
return new A.eb(new C.e8X(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e8X.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.em:B.c,h=A.n(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.q(k,D.bZy,B.f,k,k,new A.p(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.w(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aJ(k,k,k,k,A.V(B.cC,j?B.bv:B.bl,k,k,k,k),k,k,k,new C.e8R(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cZ(k,A.c(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.p(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.hn,k,k,k,k,B.Di,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e8S(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bY(B.bI,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.cb0,new A.C(D.bJs,f,k),new A.C(D.bJj,e,k),new A.C(B.rk,a0,k),new A.C(X.apl,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Al.as3,j?B.bv:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.C(D.bJl,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,k,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.azi(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e8T(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.az)
j=A.n(20)
e=A.a([new A.ab(0,B.H,B.aA.j(0.35),B.hS,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.h06,B.bc,D.bNI,D.c_e],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.ceO,B.m),k,k,k,B.ig,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e8U(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.C(B.xf,A.A(A.a([A.E(A.dV(B.dy,new C.e8V(a1),k),1),B.ar,A.E(A.bH(N.b02,k,new C.e8W(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bn(!0,A.q(k,A.cc(A.w(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.ap,k,k,new A.p(i,k,g,h,k,k,B.m),k,k,k,B.zv,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:87}
C.e8R.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e8S.prototype={
$0(){return this.b.$1(new C.e8Q(this.a,this.c))},
$S:0}
C.e8Q.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e8T.prototype={
$1(d){var w=this.a
w.l(new C.e8O(w,d))
this.b.$1(new C.e8P())},
$S:9}
C.e8O.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e8P.prototype={
$0(){},
$S:0}
C.e8U.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aJE(!0,w))
return null},
$S:0}
C.e8V.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e8W.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aJE(!1,w))
return null},
$S:0}
C.e9_.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cTJ(this.b.b)
w.r.a7(0)},
$S:0}
C.e8h.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.akr(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hJ7(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e8i.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aI3(w)},
$S:0}
C.e99.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afF(this.b,w,this.c,null)},
$S:z+39}
C.e93.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.em:B.c,t=A.n(20),s=A.V(B.kR,B.aW,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.w(p,B.l,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bH(D.hih,w,new C.e92(d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:17}
C.e92.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e8j.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e8k.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e8l.prototype={
$1(d){return d.a},
$S:z+8}
C.e8m.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.id(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aI3(w)},
$S:0}
C.e8q.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.akr(q)
w=A.T(q).k("X<1>")
q=A.B(new A.X(q,new C.e8o(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hJ7(v.e,null,r,v.f,v.r,new C.e8p(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e8p.prototype={
$0(){return this.a.acI(this.b)},
$S:0}
C.e8o.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e8r.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("O<1,id>")
w=A.B(new A.O(w,new C.e8n(this.b),v),v.k("aj.E"))
u.d=t.aI3(w)},
$S:0}
C.e8n.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e98.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e8D.prototype={
$1(d){return d.length!==0},
$S:3}
C.e8E.prototype={
$1(d){var w=this
return new A.eb(new C.e8C(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e8C.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.em:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e8y(u,e,o),A.T(o).k("O<1,x>")))
p.push(B.N)
u=w.d
p.push(A.aN(v,B.M,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(12),B.dz),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.am,v,v,v,v,v,B.mT,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.w(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.dy,v,v,!0,v,v,v,new C.e8z(d),v,v),A.bH(B.Ma,v,new C.e8A(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.h4L,v,new C.e8B(t,u,o,d),A.bp(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:216}
C.e8y.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aJ(w,w,w,w,D.c7P,w,w,w,new C.e8x(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2040}
C.e8x.prototype={
$0(){return this.a.$1(new C.e8v(this.b,this.c))},
$S:0}
C.e8v.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e8z.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e8A.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e8w(w.c,u))
v.bM(0,B.ck)}},
$S:0}
C.e8w.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e8B.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).N(!0)},
$S:0}
C.e8F.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cUn(this.b,D.vs,C.HO(v,w.a.c))},
$S:0}
C.e9g.prototype={
$1(d){return d.as},
$S:z+1}
C.e9h.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j7(this.b,w)},
$S:0}
C.e9i.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iIw(v)
return w.XF(v==null?null:v.a)},
$S:0}
C.e9j.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.iiV(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aU(1/0,e.a,e.b)
s=A.aU(1/0,e.c,e.d)
l.cBc(new A.av(u,t),v.gbos(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d9g:D.d78
q=A.K(s?B.dA:D.boe,B.r,1)
p=A.n(22)
o=A.bS(0,A.b4(m,m,m,new C.bio(s,m),B.aB),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.bv(p,new A.am(B.a0,m,B.ab,B.t,A.a([o,A.bS(0,A.u5(new A.R(n,n,n,n),new A.a5(u,t,new C.bjl(l.d,v,l.f,w,new C.e9c(l),l.gckq(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bBo(s,new C.e9d(l,e),new C.e9e(l,e),new C.e9f(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.p(m,m,q,k,m,new A.a6(B.aU,B.b_,B.w,r,m,m),B.m),m,m,m,S.aol,m,m,m,m)},
$S:167}
C.e9c.prototype={
$1(d){var w=this.a
w.l(new C.e9a(w,d))},
$S:2}
C.e9a.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.K(0,v)},
$S:0}
C.e9d.prototype={
$0(){var w=this.b
return this.a.bfS(1.25,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e9e.prototype={
$0(){var w=this.b
return this.a.bfS(0.8,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e9f.prototype={
$0(){var w=this,v=w.b
return w.a.aXN(new A.av(A.aU(1/0,v.a,v.b),A.aU(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbos())},
$S:0}
C.e9k.prototype={
$0(){var w=this.a
return w.l(new C.e9b(w))},
$S:0}
C.e9b.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e8s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fP(new A.fD(s.c)),$async$$0)
case 2:t.z1("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dmi.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bnb(u,C.hVm(v.c,u),new C.dmh(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dmh.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dmj.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bqz(d.d,d.c,u.f.q(0,d.a),new C.dmg(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dmg.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fSH.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cP(new A.X(v,new C.fSI(d),w.k("X<1>")),new C.fSJ(),w.k("cP<1,o>")))},
$S:z+19}
C.fSI.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fSJ.prototype={
$1(d){return d.a},
$S:z+8}
C.fSF.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fSG.prototype={
$1(d){return d.b},
$S:z+8}
C.fSM.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cP(new A.X(v,new C.fSN(d),w.k("X<1>")),new C.fSO(),w.k("cP<1,o>")))},
$S:z+19}
C.fSN.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fSO.prototype={
$1(d){return d.a},
$S:z+8}
C.fSK.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fSL.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dml.prototype={
$0(){return this.a},
$S:z+46}
C.dmC.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:274}
C.dmu.prototype={
$2(d,e){var w=this.a.c0(0,d,new C.dmv()),v=J.a1(w)
if(!v.q(w,e))v.K(w,e)},
$S:119}
C.dmv.prototype={
$0(){return A.a([],x.s)},
$S:786}
C.dmt.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eG(w,e)
return w===!0},
$S:260}
C.dmm.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dms.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dmr.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aP(v==null?D.EA:v)
u=1
while(v.B())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aP(v==null?B.M:v)
while(v.B()){t=v.gP(v)
if(e.q(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aP(t==null?D.EA:t)
while(t.B())u+=s.$2(t.gP(t).a,e)}return u},
$S:2042}
C.dmn.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dmw.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aP(u==null?B.M:u)
t=v.d
for(;;){if(!u.B()){s=null
break}A:{s=u.gP(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aP(t==null?D.EA:t)
while(t.B()){r=t.gP(t)
if(r.a!==a9&&!B.d.aR(w,new C.dmx(r)))w.push(r)}}B.d.br(w,new C.dmy(a8))
B.d.b_(w,new C.dmz())
q=C.iiU(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.fck],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.btH(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2043}
C.dmx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dmy.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dmz.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.dmA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a1(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b9(v,A.a3(v).k("b9<2>")).cG(0,0,B.oF)+88-w.gH(n).a}else u=0
for(w=J.a1(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:577}
C.dmB.prototype={
$1(d){return 16+d*156},
$S:161}
C.dmk.prototype={
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
t.n(0,d,new C.H5(r,new A.m(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.H5(s,new A.m(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.H5(s,new A.m(e,v)))}t=o.r.h(0,d)
t=J.aP(t==null?B.M:t)
s=o.w
while(t.B()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lp(d,new A.m(e+t,w),s,s.length))}},
$S:199}
C.dmo.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aMQ(new A.m(v.a,v.b+28),new A.m(w.a,w.b+28),!0,null))},
$S:119}
C.dmp.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dmq.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:787}
C.dmD.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:787}
C.dmE.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:475}
C.dmF.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:197}
C.dmG.prototype={
$1(d){return d>=0.5},
$S:124}
C.fxw.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.h5(A.aM(!1,v,!0,new A.a5(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2045}
C.f7i.prototype={
$1(d){var w=null,v=A.n(8),u=B.bU.j(0.12),t=A.n(8)
return new A.C(B.kN,A.aM(!1,v,!0,A.q(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fQq,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.PM,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f7h(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f7h.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dCW.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dCV.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mU,B.K,w,w)
return A.ek(A.a([A.bK(!1,B.dy,w,w,!0,w,w,w,new C.dCT(d),w,w),A.bK(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.nd,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dCU(d),w,w)],x.p),B.bb,B.Dc,w,u,D.bKm,w,D.bMh,new A.ba(v,B.a1),w,w)},
$S:17}
C.dCT.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dCU.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dD4.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dD5.prototype={
$1(d){var w=this.a
return w.l(new C.dD3(w,d))},
$S:z+49}
C.dD3.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dD6.prototype={
$1(d){var w=null
return A.r3(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dD9.prototype={
$1(d){var w=this.a
return w.l(new C.dD2(w,d))},
$S:36}
C.dD2.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dD8.prototype={
$1(d){var w=null
return A.r3(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dDa.prototype={
$1(d){var w=this.a
return w.l(new C.dD1(w,d))},
$S:36}
C.dD1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dDb.prototype={
$0(){var w=this.a
return w.l(new C.dD0(w))},
$S:0}
C.dD0.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dDc.prototype={
$0(){var w=this.a
return w.l(new C.dD_(w))},
$S:0}
C.dD_.prototype={
$0(){return++this.a.at},
$S:0}
C.dDd.prototype={
$0(){var w=this.a
return w.l(new C.dCZ(w))},
$S:0}
C.dCZ.prototype={
$0(){return--this.a.ax},
$S:0}
C.dDe.prototype={
$0(){var w=this.a
return w.l(new C.dCY(w))},
$S:0}
C.dCY.prototype={
$0(){return++this.a.ax},
$S:0}
C.dDf.prototype={
$1(d){var w=this.a
return w.l(new C.dCX(w,d))},
$S:9}
C.dCX.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dD7.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dDg.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.em:B.c
v=A.n(12)
if(p)u=B.bU
else u=(q.c.a?B.eq:B.bP).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bv:B.bl
t=A.V(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bv:B.bl
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cZ(r,A.w(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b0,new A.p(w,r,u,v,r,r,B.m),B.eL,r,r,r,r,B.jD,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dDh(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dDh.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dDq.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cit.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:102}
C.ciA.prototype={
$1(d){return d.ak()},
$S:z+5}
C.ciB.prototype={
$2(d,e){var w=J.b8(e,new C.ciz(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bw(d,w,x.d2)},
$S:z+53}
C.ciz.prototype={
$1(d){return d.ak()},
$S:z+12}
C.civ.prototype={
$1(d){return C.anL(A.a0(d,x.N,x.z))},
$S:z+9}
C.ciw.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cix.prototype={
$1(d){return C.hzO(A.a0(d,x.N,x.z))},
$S:z+11}
C.ciy.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ciF.prototype={
$1(d){return new A.aJR(d.f.length,d.a,d.b)},
$S:z+55}
C.ciG.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:732}
C.ciC.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ciD.prototype={
$1(d){return d.cTl(C.HO(d,this.a))},
$S:z+85}
C.e9t.prototype={
$1(d){return C.uQ(d,this.a.a.c)},
$S:z+3}
C.e9u.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e9y.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e9z.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e9q.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3E(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zD("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pW(r.c,r.e),$async$$0)
case 4:s.zD(p)
w=5
return A.b(s.L4(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e9r.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3E(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zD("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pW(r.c,r.e),$async$$0)
case 4:s.zD(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e9s.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Xg(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zD("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zD("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zD("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.L4(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ad(j)
o=r.a
if(o.c==null){w=1
break}o.zD(B.a.es(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e9x.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3D(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zD("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).ca(A.e4(new C.e9w(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pW(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e9w.prototype={
$1(d){var w=this.b
return new C.a1D(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e9v.prototype={
$1(d){return D.hWJ},
$S:z+58}
C.e9B.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9C.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e9A(w,d)
return new A.C(B.d3,new C.bjp(this.b,d.c,d.a,w,null),null)},
$S:2046}
C.e9A.prototype={
$0(){return this.a.Zx(this.b.b)},
$S:0}
C.e9l.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e9m.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e9n.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e9o.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e9p.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9D.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cX(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).N(s)
return}},
$S:219}
C.dVo.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dVp.prototype={
$0(){return B.d.gH(D.a8m)},
$S:z+60}
C.dVq.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.dh1,44),w,w,w),w,w,new C.boj(u,t,v,w),B.aB)},
$S:52}
C.haA.prototype={
$1(d){return A.om(new C.haz(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:130}
C.haz.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.em:B.c,p=A.a([new A.ab(0,B.H,B.v.j(r?0.35:0.08),B.uk,24)],x.V),o=r?B.eq:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bU.j(0.18)],x.O)
w=A.q(t,D.c1J,B.f,t,t,new A.p(t,t,t,A.n(12),t,new A.a6(B.a5,B.a9,B.w,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.w(A.a([B.S,o,new A.C(E.app,A.A(A.a([w,B.bc,A.E(A.w(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.iB(!0,t,e,B.y,D.fCF,new C.hay(this.b,s),20,B.aoU,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.lu,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:116}
C.hay.prototype={
$2(d,e){var w=null,v=D.a8m[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.eq:B.bP,B.r,1),q=A.a([new A.ab(0,B.H,B.v.j(s?0.35:0.08),B.eH,8)],x.V),p=A.n(15),o=A.E(new C.a8y(v.a,!0,w),1),n=s?B.kc:B.iM,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eJ(A.bv(p,A.w(A.a([o,A.q(w,A.w(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.iR,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.ap),w,new A.p(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.hax(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.hax.prototype={
$0(){A.a7(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.csr.prototype={
$0(){return this.a.aja(this.b)},
$S:0}
C.h9X.prototype={
$1(d){return D.hRb},
$S:z+61}
C.hhQ.prototype={
$1(d){var w=this
return new C.a3r(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.ha0.prototype={
$1(d){return new C.a0g(this.a,null)},
$S:z+63}
C.ha_.prototype={
$1(d){return D.hSd},
$S:z+64}
C.ddL.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.ddM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.ddK(w,d))},
$S:36}
C.ddK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ddN.prototype={
$1(d){return this.a.LI()},
$S:2}
C.ddO.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.ddH.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.ddI.prototype={
$1(d){return this.a.LI()},
$S:2}
C.ddJ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cKK.prototype={
$0(){},
$S:0}
C.cKQ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cKR.prototype={
$0(){return this.a.aSZ(-1)},
$S:0}
C.cKS.prototype={
$1(d){return this.a.l(new C.cKP())},
$S:2}
C.cKP.prototype={
$0(){},
$S:0}
C.cKT.prototype={
$0(){return this.a.aSZ(1)},
$S:0}
C.cKU.prototype={
$1(d){return this.a.l(new C.cKO())},
$S:2}
C.cKO.prototype={
$0(){},
$S:0}
C.cKV.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.eq:B.bP
return A.vi(u,u,B.b7,r,u,new C.cKN(t,d),B.xi,s,w,u,new A.ax(v,1,B.r,-1),B.cp)},
$S:2047}
C.cKN.prototype={
$1(d){var w=this.a
return w.l(new C.cKL(w,this.b))},
$S:9}
C.cKL.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cKW.prototype={
$1(d){return this.a.l(new C.cKM())},
$S:2}
C.cKM.prototype={
$0(){},
$S:0}
C.cKX.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fx1.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).N(w)},
$S:2}
C.fx2.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fx3.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).N(w)},
$S:0}
C.fx_.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbFW()
w=w.e
s=A.n(B.n.D(v-1,0,v))
return A.b4(new A.C(D.bMg,new A.e9(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bBd(p,v,this.b.a,u,t,r),r,r,B.aB)},
$S:52}
C.fx0.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dS.aA(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ap(B.aW,B.bU,w)
s.toString
s=A.a([B.b7,s,B.aW],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eJ(D.eK5,r,new A.p(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.dl(-1.2+t,-0.5),new A.dl(1.2-t,0.8),B.w,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:139}
C.h8c.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:58}
C.f4s.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f4j.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f4k.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f4q.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.eb(new C.f4p(w,this.b),null)},
$S:20}
C.f4p.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.em:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eC(w,u,new A.C(B.api,A.w(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hFZ(new C.f4m(r,e),r.a),B.az,A.A(A.a([A.E(A.dV(B.dy,new C.f4n(d),w),1),B.ar,A.E(A.bH(B.XJ,w,new C.f4o(r,d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.ba(t,B.a1),w)},
$S:106}
C.f4m.prototype={
$1(d){return this.b.$1(new C.f4l(this.a,d))},
$S:36}
C.f4l.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f4n.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f4o.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.f4r.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.UC(this.b)},
$S:0}
C.f4e.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bhQ(w)},
$S:0}
C.f4i.prototype={
$1(d){return this.bre(d)},
bre(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.ML(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j7(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f4h.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.f4g(this.b),v),v.k("M.E"))
u.d=t.bhQ(w)},
$S:0}
C.f4g.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f4t.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j7(this.b,w)},
$S:0}
C.f4u.prototype={
$1(d){return this.a.bKb(d,this.b)},
$S:z+67}
C.f4f.prototype={
$0(){return this.a.acH(this.b)},
$S:0}
C.hhD.prototype={
$1(d){return new C.ag_(this.a,this.b,this.c,null)},
$S:z+68}
C.f4w.prototype={
$0(){return this.a.a1F(this.b)},
$S:0}
C.f4x.prototype={
$0(){return this.a.RS(this.b)},
$S:0}
C.f4y.prototype={
$0(){return this.a.FE(this.b)},
$S:0}
C.f4z.prototype={
$0(){return this.a.a1G(this.b)},
$S:0}
C.f4v.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f49.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f4a.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f4b.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f4d.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qJ(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f4c(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f4c.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f4W.prototype={
$2(d,e){return d+e.gyb()},
$S:z+71}
C.f4S.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f4T.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f4D.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.em:B.c,s=A.n(24),r=A.q(v,D.c2c,B.f,v,v,new A.p(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.ax
u=u?B.eq:B.bP
w=x.p
return A.eC(v,t,new A.C(B.xh,A.w(A.a([r,B.aN,q,B.N,p,B.df,A.A(A.a([A.E(A.dV(B.oA,new C.f4B(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fc,v,new A.ba(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bH(D.hmf,v,new C.f4C(d),A.bp(B.aC,v,v,v,v,v,B.fc,v,new A.ba(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.db,v,new A.ba(s,B.a1),v)},
$S:46}
C.f4B.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.f4C.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.f4M.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.em:B.c,i=A.n(28),h=A.a([new A.ab(0,B.H,B.v.j(k?0.35:0.08),B.fF,28)],x.V),g=k?D.dp9:At.a7D,f=x.p
g=A.q(m,A.w(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.az,D.fvL,B.at,new A.bJ(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a6(B.aw,B.aD,B.w,g,m,m),B.m),m,m,m,m,E.apn,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.baE(B.b1,B.jJ,new C.f4J(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.baE(B.cJ,Q.An,new C.f4K(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aC.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.q(m,D.c1u,B.f,m,m,new A.p(B.aC.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bS,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.i,0,B.p),1)
return A.bn(!0,new A.C(B.xc,A.q(m,A.w(A.a([g,new A.C(B.apj,A.w(A.a([w,B.S,u,B.bx,t,B.S,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.q(m,A.A(A.a([o,B.bc,n,A.V(B.eN,k?B.bv:B.bl,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.m),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f4L(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.ap,m,m,new A.p(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:32}
C.f4J.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wt("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f4K.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wt("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f4L.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.Pn(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f4H.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.em:B.c,m=A.n(24),l=A.a([new A.ab(0,B.H,B.v.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.eq:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bv:B.bl
u=A.bv(w,new A.a5(48,48,C.aUx(!0,A.n(12),48,P.Qs,u,v.c,48),q),B.ap)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BL(v.gyb())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.xc,A.q(q,A.w(A.a([B.S,k,new A.C(D.apg,A.A(A.a([u,B.bc,A.E(A.w(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.D2,r.cv7(B.vM,B.aW,new C.f4F(d),p,"QR code or backup file","Transfer project"),r.b7B(!0,B.es,B.aC,new C.f4G(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:32}
C.f4F.prototype={
$0(){A.a7(this.a,!1).N("transfer")
return null},
$S:0}
C.f4G.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
C.f4I.prototype={
$1(d){return this.brf(d)},
brf(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.ML(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wJ(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f4Z.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f4Y(w))},
$S:0}
C.f4Y.prototype={
$0(){return this.a.r++},
$S:0}
C.f5_.prototype={
$0(){var w=this.a
return w.l(new C.f4X(w))},
$S:0}
C.f4X.prototype={
$0(){return this.a.r++},
$S:0}
C.f4A.prototype={
$0(){var w=this.a.c
w.toString
return A.j7(w,null)},
$S:0}
C.f4E.prototype={
$0(){return this.a.coa(this.b)},
$S:0}
C.f4V.prototype={
$0(){var w=this.a
return w.l(new C.f4U(w,this.b))},
$S:0}
C.f4U.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f4P.prototype={
$0(){return this.a.wt("scan")},
$S:0}
C.f4Q.prototype={
$0(){return this.a.wt("file")},
$S:0}
C.f4R.prototype={
$1(d){return this.a.cv8(d,this.b)},
$S:z+72}
C.f4O.prototype={
$0(){return this.a.FI(this.b)},
$S:0}
C.f4N.prototype={
$0(){return this.a.a2d(this.b,this.c)},
$S:0}
C.cK5.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cK4.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cK2.prototype={
$1(d){return C.i0F(A.a0(d,x.N,x.z))},
$S:z+75}
C.cK3.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fRz.prototype={
$1(d){return d.y===D.le},
$S:z+3}
C.hip.prototype={
$1(d){return C.aT8(d,this.a)},
$S:z+3}
C.fP3.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bW4.prototype={
$1(d){return!d.as},
$S:z+1}
C.bW3.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bW0.prototype={
$1(d){return C.hzQ(A.a0(d,x.N,x.z))},
$S:z+24}
C.bW1.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bW2.prototype={
$1(d){return J.k(d)},
$S:15}
C.fF0.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fAu.prototype={
$1(d){return C.hp6(A.a0(d,x.N,x.z))},
$S:z+79}
C.fAv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fAw.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h9L.prototype={
$1(d){return J.k(d)},
$S:15}
C.h9M.prototype={
$1(d){return d.a},
$S:z+81}
C.h9N.prototype={
$1(d){return d.length!==0},
$S:3}
C.h9O.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h9P.prototype={
$1(d){return d.UC(null).ak()},
$S:z+82}
C.hin.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fS2.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fVD.prototype={
$1(d){return C.anL(A.a0(d,x.N,x.z))},
$S:z+9}
C.fVE.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fVF.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fVG.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fVH.prototype={
$1(d){return C.uQ(d,this.a)},
$S:z+3}
C.h9x.prototype={
$1(d){return C.uQ(d,this.a)},
$S:z+3}
C.hii.prototype={
$1(d){return C.anL(A.a0(d,x.N,x.z))},
$S:z+9}
C.hij.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hik.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fRK.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fRL.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hit.prototype={
$1(d){return!d.as},
$S:z+1}
C.fRe.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fRf.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fRg.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.hhR.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fWu.prototype={
$1(d){return d.Q},
$S:z+15}
C.h9q.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fVA.prototype={
$1(d){return C.anL(A.a0(d,x.N,x.z))},
$S:z+9}
C.fVB.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fVC.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h9l.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fB5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fB6.prototype={
$1(d){return C.hzQ(A.a0(d,x.N,x.z))},
$S:z+24}
C.fB7.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fB8.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fB9.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBn.prototype={
$2(d,e){return d.eG(new C.fBo(e))},
$S:2048}
C.fBo.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.co},
$S:2049}
C.fBk.prototype={
$1(d){return C.io3(d,this.a)},
$S:z+84}
C.fBl.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fBm.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fFM.prototype={
$1(d){return d.a},
$S:z+56}
C.fFN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fFO.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fIO.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fOh.prototype={
$1(d){return C.hLH(d,C.HO(d,this.a))},
$S:z+5}
C.fOi.prototype={
$1(d){return C.hLI(d,C.HO(d,this.a))},
$S:z+5};(function aliases(){var w=C.aDs.prototype
w.bz7=w.t
w=C.aBx.prototype
w.bz2=w.t
w=C.aJ2.prototype
w.bzv=w.t
w=C.aDt.prototype
w.bz8=w.t
w=C.aDv.prototype
w.bz9=w.t
w=C.aDw.prototype
w.bza=w.t
w=C.aPi.prototype
w.bBZ=w.t
w=C.aRq.prototype
w.bEj=w.t
w=C.aRr.prototype
w.bEk=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aGu.prototype,"gcrV","crW",28)
var r
w(r=C.aDr.prototype,"gckw","ckx",65)
v(r,"gaR9","OU",0)
v(r,"gcAv","C2",0)
v(r,"gbS8","PC",0)
v(r,"gcPl","zE",0)
v(r,"gcu5","a2Y",0)
v(r,"gbNr","Pj",0)
v(r,"gbSy","YY",0)
w(r,"gbXG","bXH",78)
v(r,"gbHC","AV",0)
v(C.aDu.prototype,"gcPh","GC",0)
v(r=C.anA.prototype,"gbvs","bvt",2)
v(r,"gbvk","bvl",2)
v(r,"gcQo","cQp",2)
u(r,"gqC","kR",0)
u(r=C.alI.prototype,"gf3","fU",2)
w(r,"gclz","clA",27)
u(C.awD.prototype,"gqC","kR",0)
v(r=C.aAz.prototype,"gd13","d14",2)
u(r,"gqC","kR",0)
u(C.aMW.prototype,"gbvq","bvr",2)
v(C.anJ.prototype,"gCA","cQB",2)
u(r=C.anH.prototype,"gcRi","cRj",2)
u(r,"gqC","kR",0)
v(r=C.anD.prototype,"gbui","buj",2)
v(r,"gcWu","cWv",2)
u(r=C.anF.prototype,"gf3","fU",2)
u(r,"giH","cPV",2)
v(r=C.anB.prototype,"gcPK","cPL",2)
u(r,"gbtb","jC",2)
v(r=C.aH4.prototype,"gaiN","wK",0)
v(r,"gcnm","a23",0)
v(r,"gaVq","Jg",0)
v(r=C.aH1.prototype,"gcL8","a59",0)
v(r,"gaiN","wK",0)
v(r,"gcys","a3D",0)
v(r,"gcne","b5M",2)
v(r,"gcon","a2j",0)
w(r,"gckq","ckr",35)
v(r,"gbSq","Jl",0)
v(r,"gcMi","cMj",2)
v(r,"gc9Q","a_M",0)
w(r,"gciV","ciW",36)
v(r,"gcn2","cn3",2)
v(r=C.aFs.prototype,"gcg0","Rl",0)
v(r,"gcg2","cg3",2)
v(r,"gbOW","acj",0)
v(r=C.aH3.prototype,"gbW2","Zt",0)
v(r,"gc5E","a_9",0)
v(r,"gcF4","a4x",0)
v(r,"gcB6","a46",0)
v(C.aH2.prototype,"gcAO","akA",0)
v(C.avQ.prototype,"gciT","a1D",0)
v(C.aC9.prototype,"ga4S","LI",2)
v(C.aC8.prototype,"ga4S","LI",2)
v(C.aAL.prototype,"ga4S","LI",2)
v(r=C.aID.prototype,"gb6Z","Sn",0)
v(r,"gbGq","Xz",0)
v(r,"gcob","coc",2)
w(C.aIC.prototype,"gcjL","cjM",69)
t(C.aIE.prototype,"gaVl",0,0,null,["$1","$0"],["Jf","bQg"],70,0,0)
s(C,"hUq","iyq",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aH,[C.arl,C.vf,C.nR,C.IV,C.ahe,C.Li,C.vg,C.bWA,C.tz,C.brR,C.anS,C.afh,C.lR,C.bVb,C.aw1,C.A_,C.amp,C.Nm,C.bd3,C.abj,C.bku,C.ahl,C.aBN,C.ah9,C.aMW,C.Lp,C.H5,C.bjn,C.aMQ,C.asJ,C.dmH,C.mp,C.aXv,C.aXu,C.aVy,C.uA,C.rO,C.m4,C.id,C.lh,C.aKM])
u(A.hq,[C.h_D,C.h_C,C.h_E,C.hat,C.fMS,C.fMT,C.fMY,C.fYa,C.fY9,C.fY8,C.cbp,C.hb0,C.haT,C.hb4,C.fRS,C.dW5,C.dW0,C.dW1,C.dVE,C.dVA,C.dWk,C.dWl,C.dWe,C.dWf,C.dWm,C.dWn,C.fSD,C.fVx,C.fVy,C.h9v,C.hih,C.fRJ,C.ha6,C.dlU,C.dlg,C.dlp,C.dlG,C.dll,C.dlr,C.dli,C.dlv,C.dlw,C.dlu,C.dlL,C.dlK,C.dnH,C.dnI,C.dnJ,C.dm7,C.dmc,C.dmb,C.cTq,C.cTs,C.dct,C.dcS,C.dcT,C.dcW,C.dcY,C.dcZ,C.dd_,C.dd1,C.dd2,C.bUW,C.bUQ,C.fFt,C.hi9,C.hia,C.hib,C.hi6,C.hic,C.hid,C.hie,C.hi5,C.fTg,C.h8p,C.fP4,C.fWt,C.bPY,C.hiz,C.h91,C.bO6,C.bO1,C.bO3,C.bO2,C.cu7,C.cu2,C.cu3,C.cu1,C.cu_,C.cu4,C.cUu,C.cJ4,C.cJ7,C.cJ5,C.cJ8,C.cJ9,C.fhz,C.frW,C.bVI,C.bVC,C.bVG,C.bVj,C.e81,C.e7Z,C.e8_,C.e7Y,C.e83,C.bVA,C.bVq,C.bVa,C.bV9,C.bV5,C.bV6,C.bV7,C.bV8,C.e9H,C.e96,C.e91,C.e8t,C.e8J,C.e8M,C.e8I,C.e8H,C.e8Y,C.e8Z,C.e8T,C.e8h,C.e99,C.e93,C.e8j,C.e8k,C.e8l,C.e8q,C.e8o,C.e8n,C.e8D,C.e8E,C.e8y,C.e9g,C.e9c,C.dmi,C.dmj,C.fSH,C.fSI,C.fSJ,C.fSF,C.fSG,C.fSM,C.fSN,C.fSO,C.fSK,C.fSL,C.dmC,C.dms,C.dmn,C.dmx,C.dmy,C.dmB,C.dmp,C.dmE,C.dmF,C.dmG,C.fxw,C.f7i,C.dCV,C.dD4,C.dD5,C.dD6,C.dD9,C.dD8,C.dDa,C.dDf,C.dDg,C.ciA,C.ciz,C.civ,C.ciw,C.cix,C.ciy,C.ciF,C.ciC,C.ciD,C.e9t,C.e9w,C.e9v,C.e9C,C.e9D,C.dVo,C.haA,C.h9X,C.hhQ,C.ha0,C.ha_,C.ddM,C.ddN,C.ddI,C.cKS,C.cKU,C.cKV,C.cKN,C.cKW,C.fx1,C.h8c,C.f4q,C.f4m,C.f4i,C.f4g,C.f4u,C.hhD,C.f4D,C.f4M,C.f4H,C.f4I,C.f4R,C.cK4,C.cK2,C.cK3,C.fRz,C.hip,C.fP3,C.bW4,C.bW3,C.bW0,C.bW1,C.bW2,C.fAu,C.fAv,C.h9L,C.h9M,C.h9N,C.h9O,C.h9P,C.hin,C.fS2,C.fVD,C.fVE,C.fVG,C.fVH,C.h9x,C.hii,C.hij,C.hik,C.fRK,C.fRL,C.hit,C.fRe,C.fRf,C.hhR,C.fWu,C.h9q,C.fVA,C.fVB,C.h9l,C.fB5,C.fB6,C.fB7,C.fB8,C.fB9,C.fBo,C.fBk,C.fBl,C.fFM,C.fFN,C.fIO,C.fOh,C.fOi])
u(A.aw,[C.b27,C.any,C.aYN,C.a_Q,C.beU,C.Rw,C.a7M,C.tZ,C.IX,C.bjl,C.bnb,C.bBo,C.bqz,C.afE,C.bna,C.afD,C.bn9,C.aFt,C.aLS,C.afF,C.H1,C.bjm,C.aeT,C.bjk,C.bjp,C.b25,C.avQ,C.ag_])
u(A.lQ,[C.bfz,C.bgO,C.bgF,C.aKG,C.bmc,C.brQ,C.aYS,C.bfB,C.aDq,C.bf2,C.bw_,C.bmk,C.blK,C.blR,C.bjo,C.bio,C.boj,C.bBd])
u(A.j_,[C.haY,C.haZ,C.hb_,C.haR,C.haS,C.hb2,C.hb3,C.dWh,C.dW3,C.dW6,C.dVL,C.dVM,C.dVN,C.dVK,C.dVS,C.dVJ,C.dVT,C.dVU,C.dVI,C.dVV,C.dVH,C.dVW,C.dVG,C.dVX,C.dVy,C.dVz,C.dVF,C.dVY,C.dVD,C.dVZ,C.dVC,C.dVO,C.dVB,C.dVP,C.dVx,C.dVQ,C.dVR,C.dWi,C.dWj,C.dW7,C.dW8,C.dW9,C.dWa,C.dWb,C.dWc,C.dWd,C.dWp,C.dWg,C.fSE,C.dle,C.dlc,C.dld,C.dlf,C.dlT,C.dlI,C.dlF,C.dlh,C.dlJ,C.dln,C.dlo,C.dlq,C.dlH,C.dlm,C.dls,C.dlQ,C.dlC,C.dlB,C.dlD,C.dlE,C.dlx,C.dlz,C.dlA,C.dlt,C.dlM,C.dlP,C.dlj,C.dlk,C.dnG,C.dnF,C.dnE,C.dnD,C.dnK,C.dnC,C.dnL,C.dm8,C.dm9,C.dma,C.dmd,C.dm6,C.dm5,C.cTr,C.dcs,C.dcF,C.dcE,C.dcU,C.dcD,C.dcV,C.dcC,C.dcB,C.dcX,C.dcA,C.dcN,C.dcM,C.dd3,C.bUP,C.bUZ,C.bUR,C.bUS,C.bUV,C.bUU,C.bUX,C.bUY,C.bUT,C.bUN,C.bUO,C.bWs,C.bWt,C.bWu,C.bWv,C.bWw,C.bWx,C.bWy,C.hi8,C.h8q,C.bO5,C.bO0,C.bNZ,C.bO_,C.bNY,C.cu9,C.cua,C.cu8,C.cub,C.cud,C.cue,C.cuf,C.cu5,C.cJ3,C.cJc,C.cJd,C.cJe,C.cJb,C.cJf,C.cJg,C.cJh,C.cJi,C.cJ6,C.cJa,C.bVY,C.bVX,C.bVV,C.bVT,C.bVU,C.bVQ,C.bVR,C.bVS,C.bVW,C.bVP,C.fhA,C.fhB,C.fhC,C.fhD,C.fhE,C.bVM,C.bVN,C.bVO,C.bVH,C.bVJ,C.bVK,C.bVL,C.bVD,C.bVn,C.bVm,C.bVl,C.bVf,C.bVg,C.bVk,C.bVh,C.bVi,C.bVe,C.e80,C.e82,C.e7W,C.e7X,C.e7V,C.e84,C.e85,C.e86,C.e89,C.e8a,C.e8b,C.e8c,C.e8d,C.e8e,C.e8f,C.e8g,C.e87,C.e88,C.bVz,C.bVy,C.bVp,C.bVo,C.bVv,C.bVw,C.bVs,C.bVt,C.bVu,C.bVr,C.bV_,C.bV0,C.bV4,C.bV3,C.bV2,C.bV1,C.e9G,C.e9F,C.e9I,C.e9J,C.e9K,C.e9E,C.e9M,C.e9L,C.e94,C.e95,C.e97,C.e8u,C.e8L,C.e8K,C.e8N,C.e90,C.e8G,C.e8R,C.e8S,C.e8Q,C.e8O,C.e8P,C.e8U,C.e8V,C.e8W,C.e9_,C.e8i,C.e92,C.e8m,C.e8p,C.e8r,C.e98,C.e8x,C.e8v,C.e8z,C.e8A,C.e8w,C.e8B,C.e8F,C.e9h,C.e9i,C.e9a,C.e9d,C.e9e,C.e9f,C.e9k,C.e9b,C.e8s,C.dmh,C.dmg,C.dml,C.dmv,C.dmm,C.f7h,C.dCW,C.dCT,C.dCU,C.dD3,C.dD2,C.dD1,C.dDb,C.dD0,C.dDc,C.dD_,C.dDd,C.dCZ,C.dDe,C.dCY,C.dCX,C.dD7,C.dDh,C.dDq,C.e9u,C.e9y,C.e9z,C.e9q,C.e9r,C.e9s,C.e9x,C.e9B,C.e9A,C.e9l,C.e9m,C.e9n,C.e9o,C.e9p,C.dVp,C.hax,C.csr,C.ddL,C.ddK,C.ddO,C.ddH,C.ddJ,C.cKK,C.cKQ,C.cKR,C.cKP,C.cKT,C.cKO,C.cKL,C.cKM,C.cKX,C.fx2,C.fx3,C.f4s,C.f4j,C.f4k,C.f4l,C.f4n,C.f4o,C.f4r,C.f4e,C.f4h,C.f4t,C.f4f,C.f4w,C.f4x,C.f4y,C.f4z,C.f4v,C.f49,C.f4a,C.f4b,C.f4d,C.f4c,C.f4S,C.f4T,C.f4B,C.f4C,C.f4J,C.f4K,C.f4L,C.f4F,C.f4G,C.f4Z,C.f4Y,C.f5_,C.f4X,C.f4A,C.f4E,C.f4V,C.f4U,C.f4P,C.f4Q,C.f4O,C.f4N])
u(A.af,[C.ary,C.US,C.a0E,C.a0I,C.a0G,C.a0b,C.anz,C.alH,C.awC,C.aAy,C.anI,C.anG,C.anC,C.Xd,C.anE,C.UT,C.asM,C.asG,C.a1j,C.asK,C.a1D,C.a1E,C.a8y,C.a0g,C.a0f,C.a_G,C.a3r,C.GR,C.aAE,C.avP,C.avJ,C.avO,C.PK])
u(A.ai,[C.aGu,C.bjf,C.aDr,C.bjE,C.aDu,C.bgM,C.aDs,C.aBx,C.aJ2,C.aAz,C.aDw,C.aDv,C.aDt,C.boF,C.anF,C.anB,C.aH4,C.aH1,C.aFs,C.aH3,C.aH2,C.boG,C.aPi,C.aC9,C.aC8,C.aAL,C.bBg,C.aRq,C.aRr,C.aID,C.bq4,C.aIC,C.bD2])
u(A.j0,[C.dW2,C.dW4,C.dW_,C.dWo,C.fVz,C.bUM,C.dlS,C.dlR,C.dly,C.dlN,C.dlO,C.dme,C.bWz,C.bWr,C.bVc,C.bVd,C.hi7,C.hiy,C.bO4,C.cuc,C.cu6,C.cu0,C.fhF,C.bVB,C.bVE,C.bVF,C.dx9,C.bVx,C.e8X,C.e8C,C.e9j,C.dmu,C.dmt,C.dmr,C.dmw,C.dmz,C.dmA,C.dmk,C.dmo,C.dmq,C.dmD,C.cit,C.ciB,C.ciG,C.dVq,C.haz,C.hay,C.fx_,C.fx0,C.f4p,C.f4W,C.cK5,C.fF0,C.fAw,C.fVF,C.fRg,C.fVC,C.fBn,C.fBm,C.fFO])
u(A.ln,[C.a2X,C.ahn,C.a3f,C.a15,C.adU,C.aND,C.IW,C.anK,C.cK6,C.cK7])
t(C.anA,C.aDs)
t(C.alI,C.aBx)
t(C.awD,C.aJ2)
t(C.bjj,C.aDw)
t(C.anJ,C.bjj)
t(C.bji,C.aDv)
t(C.anH,C.bji)
t(C.bjh,C.aDt)
t(C.anD,C.bjh)
t(C.bok,C.aPi)
t(C.bBe,C.aRq)
t(C.bBf,C.aRr)
t(C.aIE,C.bD2)
t(C.bdh,A.bd4)
t(C.bBh,A.a8c)
t(C.bdg,C.bBh)
w(C.aDs,A.cl)
w(C.aBx,A.cl)
w(C.aJ2,A.eZ)
w(C.aDt,A.cl)
v(C.bjh,C.ah9)
w(C.aDv,A.cl)
v(C.bji,C.ah9)
w(C.aDw,A.cl)
v(C.bjj,C.ah9)
w(C.aPi,A.eZ)
w(C.aRq,A.cl)
w(C.aRr,A.cl)
v(C.bD2,A.eF)
v(C.bBh,A.jA)})()
A.jj(b.typeUniverse,JSON.parse('{"b27":{"aw":[],"x":[]},"bfz":{"aC":[]},"ary":{"af":[],"x":[]},"aGu":{"ai":["ary"]},"US":{"af":[],"x":[]},"any":{"aw":[],"x":[]},"aYN":{"aw":[],"x":[]},"bjf":{"ai":["US"]},"a0E":{"af":[],"x":[]},"a0I":{"af":[],"x":[]},"a0G":{"af":[],"x":[]},"a0b":{"af":[],"x":[]},"aDr":{"ai":["a0E"]},"bjE":{"ai":["a0I"]},"aDu":{"ai":["a0G"]},"a_Q":{"aw":[],"x":[]},"bgO":{"aC":[]},"bgF":{"aC":[]},"bgM":{"ai":["a0b"]},"aKG":{"aC":[]},"bmc":{"aC":[]},"beU":{"aw":[],"x":[]},"anz":{"af":[],"x":[]},"anA":{"ai":["anz"]},"brQ":{"aC":[]},"aYS":{"aC":[]},"alH":{"af":[],"x":[]},"awC":{"af":[],"x":[]},"aAy":{"af":[],"x":[]},"alI":{"ai":["alH"]},"bfB":{"aC":[]},"Rw":{"aw":[],"x":[]},"aDq":{"aC":[]},"awD":{"ai":["awC"]},"bf2":{"aC":[]},"aAz":{"ai":["aAy"]},"anI":{"af":[],"x":[]},"anG":{"af":[],"x":[]},"anC":{"af":[],"x":[]},"anJ":{"ai":["anI"]},"bw_":{"aC":[]},"anH":{"ai":["anG"]},"bmk":{"aC":[]},"anD":{"ai":["anC"]},"blK":{"aC":[]},"Xd":{"af":[],"x":[]},"anE":{"af":[],"x":[]},"UT":{"af":[],"x":[]},"a7M":{"aw":[],"x":[]},"blR":{"aC":[]},"tZ":{"aw":[],"x":[]},"IX":{"aw":[],"x":[]},"boF":{"ai":["Xd"]},"anF":{"ai":["anE"]},"anB":{"ai":["UT"]},"asM":{"af":[],"x":[]},"asG":{"af":[],"x":[]},"a1j":{"af":[],"x":[]},"afF":{"aw":[],"x":[]},"aH4":{"ai":["asM"]},"aH1":{"ai":["asG"]},"bjl":{"aw":[],"x":[]},"bjo":{"aC":[]},"bnb":{"aw":[],"x":[]},"bio":{"aC":[]},"bBo":{"aw":[],"x":[]},"bqz":{"aw":[],"x":[]},"aFs":{"ai":["a1j"]},"afE":{"aw":[],"x":[]},"bna":{"aw":[],"x":[]},"afD":{"aw":[],"x":[]},"bn9":{"aw":[],"x":[]},"aFt":{"aw":[],"x":[]},"aLS":{"aw":[],"x":[]},"H1":{"aw":[],"x":[]},"asK":{"af":[],"x":[]},"a1D":{"af":[],"x":[]},"a1E":{"af":[],"x":[]},"aH3":{"ai":["asK"]},"bjm":{"aw":[],"x":[]},"aeT":{"aw":[],"x":[]},"bjk":{"aw":[],"x":[]},"bjp":{"aw":[],"x":[]},"aH2":{"ai":["a1D"]},"boG":{"ai":["a1E"]},"b25":{"aw":[],"x":[]},"a8y":{"af":[],"x":[]},"bok":{"ai":["a8y"]},"boj":{"aC":[]},"avQ":{"aw":[],"x":[]},"a0g":{"af":[],"x":[]},"a0f":{"af":[],"x":[]},"a_G":{"af":[],"x":[]},"a3r":{"af":[],"x":[]},"aC9":{"ai":["a0g"]},"aC8":{"ai":["a0f"]},"aAL":{"ai":["a_G"]},"bBg":{"ai":["a3r"]},"GR":{"af":[],"x":[]},"aAE":{"af":[],"x":[]},"bBe":{"ai":["GR"]},"bBf":{"ai":["aAE"]},"bBd":{"aC":[]},"avP":{"af":[],"x":[]},"aID":{"ai":["avP"]},"ag_":{"aw":[],"x":[]},"avJ":{"af":[],"x":[]},"avO":{"af":[],"x":[]},"bq4":{"ai":["avJ"]},"aIC":{"ai":["avO"]},"PK":{"af":[],"x":[]},"aIE":{"ai":["PK"],"eF":[]},"bdg":{"jA":[],"fs":[]}}'))
A.S4(b.typeUniverse,JSON.parse('{"ah9":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aVy"),cq:w("mJ"),Q:w("rO"),r:w("bl<o,o>"),c5:w("aXu"),dY:w("aXv"),fH:w("Nm"),de:w("amp"),dN:w("Nv<F>"),gc:w("ET<F>"),A:w("eR<o?>"),e:w("IV"),B:w("nR"),P:w("id"),df:w("lR"),k:w("lh"),x:w("az<~>"),U:w("N<a5z>"),V:w("N<ab>"),C:w("N<rO>"),O:w("N<u>"),c:w("N<Nm>"),b:w("N<amp>"),ac:w("N<eR<o?>>"),I:w("N<nR>"),u:w("N<id>"),J:w("N<lR>"),_:w("N<lh>"),cl:w("N<az<ah<a9<o,@>>>>"),R:w("N<mN>"),eU:w("N<ah<+(H,H)>>"),ez:w("N<a9<o,aH>>"),gE:w("N<a9<o,o>>"),Y:w("N<a9<o,@>>"),fD:w("N<nc>"),bp:w("N<pb>"),g:w("N<m>"),ar:w("N<aw1>"),v:w("N<h_>"),gy:w("N<abj>"),L:w("N<+(o,o)>"),G:w("N<+(H,H)>"),E:w("N<+(H,~())>"),bd:w("N<+(o,F,P)>"),bF:w("N<+count,id,name(F,o,o)>"),F:w("N<d4>"),s:w("N<o>"),cF:w("N<au>"),aS:w("N<jq>"),dT:w("N<bd3>"),p:w("N<x>"),Z:w("N<fs>"),D:w("N<m4>"),h:w("N<aBN>"),cC:w("N<bku>"),fp:w("N<Li>"),M:w("N<Lp>"),gZ:w("N<aKM>"),gA:w("N<ahe>"),e4:w("N<ahl>"),dE:w("N<aMQ>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<o?>"),eF:w("cB<ai<af>>"),d:w("ah<nR>"),do:w("ah<id>"),cg:w("ah<lR>"),ax:w("ah<lh>"),fO:w("ah<a9<o,@>>"),cz:w("ah<+(o,o)>"),bC:w("ah<+count,id,name(F,o,o)>"),dy:w("ah<o>"),er:w("ah<au>"),gk:w("ah<m4>"),j:w("ah<@>"),fK:w("bw<o,o>"),d2:w("bw<o,ah<a9<o,@>>>"),a:w("a9<o,@>"),f:w("a9<@,@>"),gv:w("O<o,IY>"),cM:w("O<F,o>"),w:w("ip"),g2:w("t9"),bV:w("arl"),fL:w("cr"),K:w("aH"),dc:w("h_"),fo:w("Q7<F>"),fz:w("+(o,o)"),ei:w("+scope,text(o,o)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(H,ah<id>)"),cs:w("+count,id,name(F,o,o)"),N:w("o"),fT:w("ia<id>"),ec:w("ia<o>"),gW:w("rv<H>"),X:w("bq<H>"),bW:w("dG"),W:w("bb<o>"),b4:w("bb<F>"),cI:w("km<o>"),av:w("X<A_>"),cc:w("X<o>"),l:w("x"),gF:w("fs"),fA:w("m4"),dO:w("H5"),bw:w("afD<o?>"),cy:w("Lr"),q:w("l5"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),eK:w("ah<lh>?"),m:w("asJ?"),cT:w("m?"),h5:w("+(o,o)?"),eo:w("+code,qrPayload,usesRemaining(o,o,F)?"),he:w("+qrPayload,token,usesRemaining(o,o,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oE?"),T:w("o?"),aD:w("dG?"),o:w("m4?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b8L=new A.bc(B.h5,B.bJ,B.h5,B.bJ)
D.agj=new A.bc(B.h5,B.i9,B.h5,B.i9)
D.b9_=new A.bc(B.jL,B.bJ,B.bJ,B.bJ)
D.b93=new A.ax(B.cY,1.4,B.r,-1)
D.b9e=new A.ax(B.ac,1,B.r,-1)
D.agS=new A.aX(140,1/0,0,1/0)
D.bay=new A.aX(0,1/0,64,1/0)
D.baC=new A.aX(0,84,0,1/0)
D.ah_=new A.aX(130,1/0,0,1/0)
D.aFS=w([B.mr,B.tu,B.c],x.O)
D.cdU=new A.a6(B.aw,B.aD,B.w,D.aFS,null,null)
D.bbo=new A.p(null,null,null,null,null,D.cdU,B.m)
D.dox=w([B.aW,B.bU],x.O)
D.cg6=new A.a6(B.aU,B.b_,B.w,D.dox,null,null)
D.bbJ=new A.p(null,null,null,null,null,D.cg6,B.m)
D.a_4=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fM=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dsU=w([B.dD,D.a_4,D.fM],x.O)
D.cd5=new A.a6(B.aU,B.b_,B.w,D.dsU,null,null)
D.bct=new A.p(null,null,null,null,null,D.cd5,B.m)
D.fNA=new A.G(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hoO=new A.D("?",null,D.fNA,null,null,null,null,null,null,null,null,null)
D.bgj=new A.cq(B.z,null,null,D.hoO,null)
D.Xz=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6w=new A.D("\ud83c\udf33",null,D.Xz,null,null,null,null,null,null,null,null,null)
D.ahL=new A.cq(B.z,null,null,D.h6w,null)
D.h9d=new A.D("\ud83c\udfc6",null,B.LS,null,null,null,null,null,null,null,null,null)
D.bgu=new A.cq(B.z,null,null,D.h9d,null)
D.bik=new A.fp(null,null,null,null,null,E.kI,null,null,null,null)
D.ahM=new A.cq(B.z,null,null,D.bik,null)
D.l6=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fO9=new A.G(!0,D.l6,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8c=new A.D("No books on the shelf yet.",null,D.fO9,null,null,null,null,null,null,null,null,null)
D.eK6=new A.C(B.oa,D.h8c,null)
D.bgL=new A.cq(B.z,null,null,D.eK6,null)
D.fVq=new A.G(!0,D.fM,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hpM=new A.D("\ud83d\ude8c  On the road\u2026",null,D.fVq,null,null,null,null,null,null,null,null,null)
D.eKG=new A.C(B.ct,D.hpM,null)
D.bhd=new A.cq(B.z,null,null,D.eKG,null)
D.b_p=new A.D("\ud83e\uddfa",null,D.Xz,null,null,null,null,null,null,null,null,null)
D.bhs=new A.cq(B.z,null,null,D.b_p,null)
D.hbH=new A.D("\ud83c\udfad",null,D.Xz,null,null,null,null,null,null,null,null,null)
D.bhD=new A.cq(B.z,null,null,D.hbH,null)
D.bhG=new A.cq(B.z,null,null,A7.ZQ,null)
D.ai5=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aic=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bjX=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bk1=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bkd=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bkf=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bkh=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bkp=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lX=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bkt=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bky=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bkA=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bkB=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lY=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.ble=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cr=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bln=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.blH=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.blK=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.blQ=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.blY=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aiS=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bm4=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.a_i=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aiV=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bmf=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.a_k=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bmA=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aj6=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bmZ=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bne=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bnF=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bnQ=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GT=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.boe=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.boh=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bol=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ajB=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.boD=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.boJ=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.boQ=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ajF=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.boZ=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bpt=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bpD=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bpG=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bpM=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajW=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bqs=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.akk=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.brs=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.akx=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.brR=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.H6=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.brY=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bs7=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bs9=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.akB=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bsr=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bst=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bsw=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.akJ=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a03=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bsV=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bth=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.btm=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.akV=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.btt=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a08=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.btQ=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.btR=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Hf=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.buF=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bvg=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bvm=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bvq=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.r1=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bvB=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bvF=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bvL=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bvN=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.alH=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.alL=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Hl=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a0u=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.alU=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bx1=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bxj=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bxN=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bxW=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.amk=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0G=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.by7=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.byn=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0M=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.byF=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.byW=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0Q=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bz0=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.amE=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.amG=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bzj=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.amN=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bzM=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bzQ=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bzX=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bA5=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bAe=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bAR=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bBm=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.h2f=new A.D("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bES=new A.eR(null,D.h2f,B.fm,null,x.A)
D.hby=new A.D("None",null,null,null,null,null,null,null,null,null,null,null)
D.bEU=new A.eR(null,D.hby,B.fm,null,x.A)
D.bFr=new A.bh(38e5)
D.bG9=new A.iO(0,10,0,10)
D.bGt=new A.iO(0,4,0,4)
D.bGw=new A.R(0,4,5,0)
D.bGM=new A.R(10,10,14,10)
D.bGX=new A.iO(10,4,10,4)
D.bH5=new A.iO(10,8,10,8)
D.bH6=new A.R(10,8,8,8)
D.bHB=new A.R(12,6,12,2)
D.bHU=new A.R(14,0,14,6)
D.bHY=new A.R(14,10,6,6)
D.bHZ=new A.R(14,12,14,0)
D.bI2=new A.R(14,12,14,8)
D.bI5=new A.R(14,12,8,14)
D.bI9=new A.iO(14,14,14,14)
D.bIt=new A.R(14,6,14,40)
D.bIw=new A.R(14,8,14,30)
D.bIU=new A.R(16,2,16,10)
D.bJ2=new A.R(16,6,16,30)
D.bJ4=new A.R(16,6,16,8)
D.bJj=new A.R(18,10,18,4)
D.bJl=new A.R(18,12,18,0)
D.bJs=new A.R(18,14,12,4)
D.apg=new A.R(18,16,18,8)
D.bJJ=new A.R(18,20,18,22)
D.bJO=new A.R(18,30,18,30)
D.bK5=new A.R(20,10,12,20)
D.bK8=new A.R(20,11,20,11)
D.bKk=new A.R(20,18,16,18)
D.bKm=new A.R(20,18,20,6)
D.bLa=new A.R(24,32,24,28)
D.bLb=new A.R(24,36,24,32)
D.bLe=new A.R(26,26,24,14)
D.bLs=new A.R(2,4,2,8)
D.bLw=new A.R(30,0,30,0)
D.bLH=new A.R(38,22,22,22)
D.apH=new A.R(40,24,24,24)
D.bLJ=new A.iO(40,40,40,40)
D.bLL=new A.R(46,30,30,30)
D.bMd=new A.R(56,40,40,40)
D.bMg=new A.R(1.25,1.25,1.25,1.25)
D.bMh=new A.R(60,0,60,0)
D.bMl=new A.R(6,14,6,16)
D.bMp=new A.R(6,4,12,0)
D.bMt=new A.R(6,6,10,2)
D.bMA=new A.iO(7,3,7,3)
D.bN6=new A.R(5,1.5,5,1.5)
D.bNh=new A.R(6,2.5,6,2.5)
D.hjT=new A.D("Family Games",null,B.jr,null,null,null,null,null,null,null,null,null)
D.h0P=new A.D("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Xr,null,null,null,null,null,null,null,null,null)
D.cPG=w([D.hjT,D.h0P],x.p)
D.bCl=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.cPG,null)
D.bNI=new A.bu(1,B.b8,D.bCl,null)
D.hol=new A.D("Signature",null,B.nF,null,null,null,null,null,null,null,null,null)
D.bNL=new A.bu(1,B.b8,D.hol,null)
D.hgk=new A.D("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uC,null,null,null,null,null,null,null,null,null)
D.bOi=new A.bu(1,B.b8,D.hgk,null)
D.hlm=new A.D("Tell the AI what to fix",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOz=new A.bu(1,B.b8,D.hlm,null)
D.hnp=new A.D("Worksheets",null,B.aZU,null,null,null,null,null,null,null,null,null)
D.fWn=new A.G(!0,E.aiB,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hmd=new A.D("Track your project spending",null,D.fWn,null,null,null,null,null,null,null,null,null)
D.deL=w([D.hnp,B.at,D.hmd],x.p)
D.bBZ=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.deL,null)
D.bOF=new A.bu(1,B.b8,D.bBZ,null)
D.fR3=new A.G(!0,E.kI,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1o=new A.D("FAMILY LIBRARY",null,D.fR3,null,null,null,null,null,null,null,null,null)
D.bOY=new A.bu(1,B.b8,D.h1o,null)
D.Q4=new C.IV("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xk=new C.IW(0,"male")
D.p2=new C.IW(1,"female")
D.zQ=new C.IW(2,"unknown")
D.vs=new C.anK(0,"owner")
D.Q5=new C.anK(1,"editor")
D.le=new C.anK(2,"viewer")
D.arH=new A.a_(61199,"MaterialIcons",!1)
D.bUl=new A.a_(61504,"MaterialIcons",!1)
D.bUm=new A.a_(61505,"MaterialIcons",!1)
D.bUp=new A.a_(61587,"MaterialIcons",!1)
D.bVv=new A.a_(63034,"MaterialIcons",!0)
D.bVN=new A.a_(63153,"MaterialIcons",!1)
D.bWj=new A.a_(63429,"MaterialIcons",!1)
D.atP=new A.a_(984520,"MaterialIcons",!1)
D.bV1=new A.a_(62776,"MaterialIcons",!1)
D.bYO=new A.ae(D.bV1,26,B.b7,null,null,null)
D.bTg=new A.a_(57648,"MaterialIcons",!1)
D.bZ9=new A.ae(D.bTg,14,B.c,null,null,null)
D.bZr=new A.ae(B.Ik,17,null,null,null,null)
D.bZy=new A.ae(B.QB,null,B.bU,null,null,null)
D.bZZ=new A.ae(E.a4x,null,null,null,null,null)
D.c_1=new A.ae(B.jm,18,E.kI,null,null,null)
D.a4h=new A.a_(62044,"MaterialIcons",!1)
D.c_7=new A.ae(D.a4h,null,B.aW,null,null,null)
D.c_e=new A.ae(B.A2,18,B.c,null,null,null)
D.c_W=new A.ae(B.e8,16,null,null,null,null)
D.c02=new A.ae(D.a4h,32,B.aW,null,null,null)
D.c0m=new A.ae(E.arI,18,B.cY,null,null,null)
D.c1u=new A.ae(B.Iw,22,B.aC,null,null,null)
D.c1J=new A.ae(B.e8,22,B.b7,null,null,null)
D.c1W=new A.ae(Y.a4m,22,B.c,null,null,null)
D.c22=new A.ae(B.vA,52,B.c,null,null,null)
D.c2c=new A.ae(B.Iw,30,B.aC,null,null,null)
D.c2y=new A.ae(B.It,null,B.c,null,null,null)
D.auz=new A.ae(B.vM,22,B.c,null,null,null)
D.c2H=new A.ae(B.e8,17,null,null,null,null)
D.c35=new A.ae(B.xx,26,B.cY,null,null,null)
D.c3S=new A.ae(B.a4K,16,null,null,null,null)
D.c4E=new A.ae(B.vA,24,B.c,null,null,null)
D.c4K=new A.ae(B.Qz,20,B.ua,null,null,null)
D.c4Q=new A.ae(B.Ii,null,B.bU,null,null,null)
D.c4Z=new A.ae(B.jm,18,B.c,null,null,null)
D.c5G=new A.ae(B.cC,22,B.ac,null,null,null)
D.c6B=new A.ae(B.es,16,B.ac,null,null,null)
D.c6N=new A.ae(D.a4h,20,B.aW,null,null,null)
D.av_=new A.ae(B.h2,20,null,null,null,null)
D.c7m=new A.ae(B.cC,18,D.l6,null,null,null)
D.c7D=new A.ae(B.Ad,28,B.c,null,null,null)
D.c7P=new A.ae(B.Qo,null,B.fs,null,null,null)
D.c88=new A.ae(B.Ad,24,B.c,null,null,null)
D.c8B=new A.ae(B.vA,null,B.aW,null,null,null)
D.c8C=new A.ae(B.jG,20,B.cY,null,null,null)
D.c8W=new A.ae(B.Ik,16,null,null,null,null)
D.cau=new A.ed(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eY,!0,null,null,null,null)
D.avL=new C.a7M(10,null)
D.cb0=new C.a7M(12,null)
D.cb1=new C.a7M(14,null)
D.dxp=w([B.bw,B.aW,B.fz,B.b7],x.O)
D.ccb=new A.a6(B.aw,B.aD,B.w,D.dxp,null,null)
D.bur=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bAY=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.daN=w([D.bur,D.bAY],x.O)
D.cco=new A.a6(B.aU,B.b_,B.w,D.daN,null,null)
D.dqF=w([B.fo,B.h9,B.fz],x.O)
D.ccu=new A.a6(B.aw,B.aD,B.w,D.dqF,null,null)
D.alw=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bkC=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.ddg=w([D.alw,D.bkC],x.O)
D.cd6=new A.a6(B.aU,B.b_,B.w,D.ddg,null,null)
D.bou=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aF7=w([D.bou,D.alw],x.O)
D.cdp=new A.a6(B.aw,B.aD,B.w,D.aF7,null,null)
D.akc=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.brj=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dpH=w([D.akc,D.brj],x.O)
D.ce4=new A.a6(B.a5,B.a9,B.w,D.dpH,null,null)
D.dFf=w([B.bC,B.nW],x.O)
D.ce6=new A.a6(B.aU,B.b_,B.w,D.dFf,null,null)
D.bum=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dGf=w([D.bum,D.l6,D.l6,I.Ox],x.O)
D.dJ0=w([0,0.07,0.9,1],x.n)
D.ceC=new A.a6(B.a5,B.a9,B.w,D.dGf,D.dJ0,null)
D.ceL=new A.a6(B.aw,B.aD,B.w,B.Uv,null,null)
D.d8c=w([B.aA,D.lX],x.O)
D.ceO=new A.a6(B.a5,B.a9,B.w,D.d8c,null,null)
D.dEM=w([B.b7,B.aW,B.bU],x.O)
D.cfT=new A.a6(B.aw,B.aD,B.w,D.dEM,null,null)
D.ckj=w([10,20,30],x.t)
D.cul=w([-1,-0.4,0.3,1],x.n)
D.cBV=w([B.bw,B.b7,B.fo],x.O)
D.cC2=w([B.bk,B.aA,B.kH],x.O)
D.cC4=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cCO=w([30,140,262,360],x.n)
D.bsC=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cIq=w([D.bsC,E.al4],x.O)
D.eEF=new A.m(1,2)
D.fyO=new A.d4(B.ba,D.eEF,3)
D.aBY=w([D.fyO],x.F)
D.cPY=w([B.hl,B.ci,B.fy],x.O)
D.cSO=w([B.bQ,B.bz,B.bt],x.O)
D.bPO=new C.vf("classic","Classic leather","Gold-edged brown leather",D.aF7,E.kI,E.kI,"\u2766",B.K,!0,!1,!1,!1)
D.bjH=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bzC=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dgI=w([D.bjH,D.bzC],x.O)
D.al7=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bPJ=new C.vf("ornate","Ornate gold","Double gold border and flourishes",D.dgI,D.al7,D.al7,"\u2726",B.K,!0,!0,!0,!1)
D.bo0=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bva=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d6T=w([D.bo0,D.bva],x.O)
D.bPI=new C.vf("parchment","Parchment","Old paper with dark ink",D.d6T,D.Hf,L.ji,"\u2767",B.K,!0,!1,!1,!0)
D.aie=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bxK=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dCE=w([D.aie,D.bxK],x.O)
D.bs4=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bwW=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bPL=new C.vf("minimal","Clean paper","Plain and elegant, like a printed book",D.dCE,D.bs4,D.bwW,"",B.K,!0,!0,!1,!0)
D.bPN=new C.vf("midnight","Midnight","Deep blue with silver stars",K.aFr,B.cF,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bPH=new C.vf("emerald","Emerald library","Green cloth, title on the left",W.aCo,E.kI,B.hb,"\u25c6",B.aY,!0,!1,!1,!1)
D.byg=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dAy=w([B.eD,D.byg],x.O)
D.bts=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.buK=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bPM=new C.vf("rose","Rose vintage","Burgundy with rose-gold lettering",D.dAy,D.bts,D.buK,"\u2740",B.K,!0,!1,!0,!1)
D.dFR=w([B.cx,F.ni],x.O)
D.bPK=new C.vf("modern","Modern","Dark, bold, left-aligned",D.dFR,B.aH,B.c,"",B.aY,!1,!0,!1,!1)
D.a6J=w([D.bPO,D.bPJ,D.bPI,D.bPL,D.bPN,D.bPH,D.bPM,D.bPK],A.as("N<vf>"))
D.cVS=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dFD=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bPZ=new C.lR('What does "Ubuntu" mean?',D.dFD,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d8Y=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bQ1=new C.lR("In Swahili, what do we call a grandmother?",D.d8Y,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d8P=w(["Babu","Mama","Baba","Dada"],x.s)
D.bPX=new C.lR("In Swahili, what do we call a grandfather?",D.d8P,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.dai=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bQ0=new C.lR("What is a sister called in Swahili?",D.dai,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dg3=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bPY=new C.lR("What is a brother called in Swahili?",D.dg3,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d8O=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bQ8=new C.lR("Which word means father in Swahili?",D.d8O,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dGR=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bQ7=new C.lR('"Umoja ni nguvu" means...',D.dGR,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dDr=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bQ9=new C.lR('"Haba na haba hujaza kibaba" teaches us...',D.dDr,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.ddp=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bQ6=new C.lR('The African saying "It takes a village to raise a child" means...',D.ddp,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dH9=w(["The elders","The market","The river","The drum"],x.s)
D.bQ2=new C.lR("Who is the traditional keeper of the family stories?",D.dH9,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.d_d=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bQ_=new C.lR("Why do families sit round the fire at night?",D.d_d,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dFT=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bQ4=new C.lR('What does "Harambee" mean?',D.dFT,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.djo=w(["An elder","A baby","A market","A cow"],x.s)
D.bQ3=new C.lR('"Mzee" is a respectful word for...',D.djo,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dAn=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bQ5=new C.lR('What does "Shikamoo" show?',D.dAn,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aCj=w([D.bPZ,D.bQ1,D.bPX,D.bQ0,D.bPY,D.bQ8,D.bQ7,D.bQ9,D.bQ6,D.bQ2,D.bQ_,D.bQ4,D.bQ3,D.bQ5],x.J)
D.d3H=w([90,360],x.n)
D.d6o=w([B.bU,B.bp],x.O)
D.bu8=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d78=w([D.aie,D.bu8],x.O)
D.d7V=w([-1,-0.3,0.4,1],x.n)
D.d8V=w([0,0.45,0.72,0.92,1],x.n)
D.bnX=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d9g=w([D.bnX,B.bF],x.O)
D.blC=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.amX=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d9W=w([B.dD,D.blC,D.amX],x.O)
D.db6=w([B.be,B.jx,B.pM],x.O)
D.bow=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bwO=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bli=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.dbc=w([D.bow,D.bwO,D.bli],x.O)
D.dbA=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.dbK=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hTA=new C.afh(78,424,48,44,56)
D.hTy=new C.afh(214,396,34,34,42)
D.hTz=new C.afh(442,452,56,50,64)
D.aDh=w([D.hTA,D.hTy,D.hTz],A.as("N<afh>"))
D.dck=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bkv=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bqr=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dIX=w([D.akc,D.bkv,D.bqr],x.O)
D.bPP=new C.vg("leather","Leather",D.dIX,"vintage")
D.dku=w([B.dl,B.H4,Ac.a_z],x.O)
D.bPW=new C.vg("midnight","Midnight",D.dku,"starry")
D.db7=w([B.ev,B.ej,B.lA],x.O)
D.bPV=new C.vg("forest","Forest",D.db7,"story")
D.dLe=w([B.ew,B.eD,B.kK],x.O)
D.bPS=new C.vg("burgundy","Burgundy",D.dLe,"royal")
D.cSk=w([B.aA,B.nb,B.nM],x.O)
D.bPT=new C.vg("royal","Royal",D.cSk,"royal")
D.ddZ=w([B.bz,B.cx,F.ni],x.O)
D.bPQ=new C.vg("charcoal","Charcoal",D.ddZ,"geo")
D.dJ5=w([B.c9,B.e0,B.wW],x.O)
D.bPU=new C.vg("sunset","Sunset",D.dJ5,"sunset")
D.dJT=w([B.jx,B.z9,B.a_D],x.O)
D.bPR=new C.vg("ocean","Ocean",D.dJT,"band")
D.AI=w([D.bPP,D.bPW,D.bPV,D.bPS,D.bPT,D.bPQ,D.bPU,D.bPR],A.as("N<vg>"))
D.dex=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dfg=w([B.an,B.aM,B.a_],x.O)
D.dgO=w([B.eD,B.ej,B.dl,B.j1,B.zb,B.cY,B.ke,B.cU,B.de],x.O)
D.dgP=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fyP=new A.d4(B.dJ,B.dP,8)
D.dh1=w([D.fyP],x.F)
D.dik=w([B.c5,B.e0,B.ka],x.O)
D.bmt=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bqK=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bv5=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.diC=w([D.bmt,G.alE,D.bqK,D.bv5,D.amX],x.O)
D.diV=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dja=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bjT=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bq2=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.djI=w([D.bjT,D.ajF,D.bq2],x.O)
D.dkp=w([B.c5,B.hK],x.O)
D.dkv=w([G.nP,B.iu,G.aiq,B.d0],x.O)
D.dmd=w([B.d0,G.nP,B.iu,D.lY,B.d0],x.O)
D.dmU=w([B.aQ,B.z7,B.yZ],x.O)
D.f1o=new A.y(-0.65,0.6)
D.feH=new A.y(-0.2,0.95)
D.ffR=new A.y(0.25,0.95)
D.f4Y=new A.y(0.7,0.6)
D.fgr=new A.y(1,0.1)
D.dnM=w([Am.Wj,D.f1o,D.feH,D.ffR,D.f4Y,D.fgr],x.G)
D.bsW=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bzu=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bnu=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dnT=w([D.bsW,D.bzu,D.bnu],x.O)
D.dnZ=w([B.bO,B.c1,B.dH,B.aQ],x.O)
D.doy=w([B.hZ,B.c9,B.v2],x.O)
D.doY=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dp9=w([B.fo,B.cY],x.O)
D.buv=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dpC=w([D.buv,D.aic],x.O)
D.dpO=w([B.cX,B.fN,B.h_],x.O)
D.dq0=w([B.aH,B.bp,B.dl],x.O)
D.dqC=w([B.el,B.dq,B.ej],x.O)
D.dr0=w([B.dV,B.dl,B.H4],x.O)
D.dr4=w([B.bu,B.n8,B.de],x.O)
D.drl=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.btH=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.brN=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.drI=w([D.btH,D.ajB,D.brN],x.O)
D.dsC=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dtO=w([1,0,7,6,3,2],x.t)
D.a7M=w(["leather","linen","plain","stars","rays"],x.s)
D.du_=w([0.5,2,3.6],x.n)
D.duA=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bY3=new A.a_(983781,"MaterialIcons",!1)
D.aEM=w([B.QB,B.hQ,B.kQ,B.ii,F.atX,B.IH,B.rp,D.bY3,K.atA,B.E0,B.rv,B.m6],A.as("N<a_>"))
D.a7Q=w(["double","single","corners","none"],x.s)
D.bPE=new C.A_("Little Seed","\ud83c\udf31",0)
D.bPG=new C.A_("Young Listener","\ud83d\udc42",40)
D.bPF=new C.A_("Storyteller","\ud83e\ude98",120)
D.bPD=new C.A_("Village Pride","\ud83c\udfe1",300)
D.bPB=new C.A_("Keeper of Roots","\ud83c\udf33",700)
D.bPC=new C.A_("Elder of the Fire","\ud83d\udd25",1500)
D.aEO=w([D.bPE,D.bPG,D.bPF,D.bPD,D.bPB,D.bPC],A.as("N<A_>"))
D.dvS=w([B.d1,B.bl,B.cU],x.O)
D.dw9=w([],x.C)
D.EA=w([],x.u)
D.aP7=new A.m(225,528)
D.f35=new A.y(D.aP7,1)
D.eFq=new A.m(350,548)
D.f9C=new A.y(D.eFq,0.95)
D.aP1=new A.m(158,656)
D.f9v=new A.y(D.aP1,1.12)
D.eGd=new A.m(92,544)
D.eZx=new A.y(D.eGd,0.93)
D.eFt=new A.m(398,614)
D.f5l=new A.y(D.eFt,1.04)
D.eFh=new A.m(318,662)
D.eUL=new A.y(D.eFh,1.1)
D.a7Y=w([D.f35,D.f9C,D.f9v,D.eZx,D.f5l,D.eUL],A.as("N<+(m,H)>"))
D.dyk=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dyU=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dA1=w([B.d0,G.nP,B.iu,D.lY,B.d0,B.iu],x.O)
D.dBv=w([B.as,B.fN,B.j1],x.O)
D.dCc=w([-70,58],x.n)
D.dCe=w([-70,-30,20],x.n)
D.dDo=w([B.bu,B.n8,B.a0H],x.O)
D.dDG=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.e_q=new C.mp("construction","Construction","Jobsite & builds",B.rt)
D.e_x=new C.mp("house","Home Build","Houses & rooms",B.vD)
D.e_n=new C.mp("grocery","Grocery","Store & pantry",B.a5d)
D.e_m=new C.mp("calculator","Calculations","Math & estimates",B.QI)
D.e_v=new C.mp("lumber","Materials","Lumber & supplies",B.IE)
D.e_j=new C.mp("kitchen","Kitchen","Remodel & meals",A3.R5)
D.bY0=new A.a_(983756,"MaterialIcons",!1)
D.e_o=new C.mp("landscape","Landscaping","Yard & garden",D.bY0)
D.e_i=new C.mp("plumbing","Plumbing","Pipes & water",B.qd)
D.e_y=new C.mp("electrical","Electrical","Wiring & power",B.fQ)
D.e_g=new C.mp("store","Retail Shop","Daily business",B.kq)
D.e_h=new C.mp("paint_remodel","Paint & Remodel","Colors & walls",A3.R_)
D.bXl=new A.a_(983311,"MaterialIcons",!1)
D.e_u=new C.mp("roofing","Roofing","Roofs & exteriors",D.bXl)
D.bYd=new A.a_(983986,"MaterialIcons",!1)
D.e_f=new C.mp("warehouse","Warehouse","Storage & stock",D.bYd)
D.e_s=new C.mp("vehicles","Vehicles","Fleet & transport",B.DX)
D.bV3=new A.a_(62785,"MaterialIcons",!1)
D.e_l=new C.mp("farm","Farm","Crops & livestock",D.bV3)
D.e_k=new C.mp("restaurant","Restaurant","Food & catering",B.vK)
D.e_r=new C.mp("tools","Tools","Workshop gear",B.DT)
D.e_w=new C.mp("wallet","Cash & Wallet","Quick spending",B.jG)
D.e_t=new C.mp("concrete","Concrete","Foundation work",F.asF)
D.e_p=new C.mp("blueprint","Blueprint","Plans & design",Ar.asc)
D.a8m=w([D.e_q,D.e_x,D.e_n,D.e_m,D.e_v,D.e_j,D.e_o,D.e_i,D.e_y,D.e_g,D.e_h,D.e_u,D.e_f,D.e_s,D.e_l,D.e_k,D.e_r,D.e_w,D.e_t,D.e_p],A.as("N<mp>"))
D.dEn=w([B.bv,B.bl],x.O)
D.dFg=w([B.iJ,B.oL,B.e5],x.O)
D.akq=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.alq=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bs8=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bjn=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aG_=w([D.akq,D.alq,D.bs8,D.bjn],x.O)
D.dGw=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a8w=w(["top","middle","bottom"],x.s)
D.dI4=w([B.cw,B.bp,B.dl],x.O)
D.aGj=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bcX=new A.ab(0,B.H,B.ba,B.J,14)
D.aGn=w([D.bcX],x.V)
D.bqZ=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dIP=w([D.aiS,D.a0G,D.bqZ],x.O)
D.dIQ=w([B.bf,B.dq,B.ej],x.O)
D.eF0=new A.m(24,-8)
D.eFJ=new A.m(48,0)
D.eEX=new A.m(24,6)
D.dKI=w([B.J,D.eF0,D.eFJ,D.eEX],x.g)
D.dL9=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eBq={top:0,middle:1,bottom:2}
D.dOx=new A.bl(D.eBq,["Top","Middle","Bottom"],x.r)
D.eAX={double:0,single:1,corners:2,none:3}
D.dOE=new A.bl(D.eAX,["Double line","One line","Corners","None"],x.r)
D.eCe={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dQj=new A.bl(D.eCe,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dQv=new A.bl(B.ik,[],A.as("bl<F,+(o,o)>"))
D.eBh={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EP=new A.bl(D.eBh,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bl<o,F>"))
D.dUP=new H.Ou(32,null)
D.dUQ=new H.Ou(40,null)
D.dUR=new H.Ou(46,null)
D.aOA=new C.avO(null)
D.eDS=new A.m(0,40)
D.eDT=new A.m(0,412)
D.eDW=new A.m(0,900)
D.eE4=new A.m(0,-34)
D.eE5=new A.m(0,-46)
D.eE7=new A.m(0,-74)
D.eEa=new A.m(100,300)
D.eEb=new A.m(10,14)
D.eEe=new A.m(10,-10)
D.eEj=new A.m(10,-46)
D.eEk=new A.m(10,-58)
D.eEl=new A.m(116,442)
D.eEn=new A.m(11,-1)
D.eEo=new A.m(11,-10)
D.eEp=new A.m(11,-21)
D.aOX=new A.m(11,-60)
D.eEw=new A.m(14,-2)
D.eEx=new A.m(150,520)
D.aaM=new A.m(150,592)
D.eEA=new A.m(15,-15)
D.eEB=new A.m(16,-1)
D.eEE=new A.m(190,444)
D.eEH=new A.m(1,5)
D.eEP=new A.m(21,-78)
D.eEQ=new A.m(222,615)
D.KG=new A.m(225,300)
D.aaO=new A.m(225,574)
D.eF_=new A.m(24,-52)
D.eF1=new A.m(250,210)
D.eFc=new A.m(2,-56)
D.aPb=new A.m(300,0)
D.eFd=new A.m(300,440)
D.eFg=new A.m(318,476)
D.eFj=new A.m(324,144)
D.aaR=new A.m(332,150)
D.eFl=new A.m(335,585)
D.eFm=new A.m(338,140)
D.eFn=new A.m(340,158)
D.eFp=new A.m(34,-60)
D.Fh=new A.m(36,-24)
D.eFr=new A.m(372,470)
D.eFs=new A.m(390,455)
D.eFB=new A.m(42,468)
D.eFC=new A.m(431,510)
D.eFD=new A.m(431,520)
D.eFE=new A.m(45,-92)
D.eFF=new A.m(46,20)
D.eFG=new A.m(46,-92)
D.eFH=new A.m(46,-94)
D.eFI=new A.m(47,-4)
D.eFK=new A.m(48,-4)
D.eFS=new A.m(4,-26)
D.eG_=new A.m(60,455)
D.eG8=new A.m(8,14)
D.eGc=new A.m(8,-76)
D.eGe=new A.m(95,575)
D.eGf=new A.m(98,-24)
D.eGh=new A.m(9,-2)
D.eGi=new A.m(9,-58)
D.aPk=new A.m(9,-79)
D.eGj=new A.m(9,-9)
D.eGZ=new A.m(16.5,8)
D.eH0=new A.m(3.2,0)
D.eH1=new A.m(-16.5,8)
D.eH8=new A.m(16.5,2)
D.eHb=new A.m(-3.2,0)
D.eHj=new A.m(9.5,6)
D.eHm=new A.m(-10,14)
D.eHn=new A.m(-10,-12)
D.eHo=new A.m(-10,-58)
D.eHq=new A.m(-11,-10)
D.eHs=new A.m(-11,-60)
D.eHt=new A.m(-12,-14)
D.eHu=new A.m(-12,-16)
D.eHz=new A.m(-14,-2)
D.eHC=new A.m(-15,-15)
D.eHD=new A.m(-15,-3)
D.eHF=new A.m(-16,-1)
D.eHV=new A.m(-24,-52)
D.eI3=new A.m(-2,-34)
D.eI4=new A.m(-2,-38)
D.eI6=new A.m(-30,-100)
D.aaU=new A.m(-36,-24)
D.eIh=new A.m(-4,-26)
D.eIj=new A.m(-4,-6)
D.eIs=new A.m(-8,-3)
D.eIt=new A.m(-8,-48)
D.eIw=new A.m(-9,-2)
D.eIy=new A.m(-9,-58)
D.eIz=new A.m(-9,-79)
D.eIA=new A.m(-9,-9)
D.eID=new A.m(-9.5,6)
D.eIR=new A.m(-16.5,2)
D.h8U=new A.D("Write a new book",null,B.hj,null,B.K,null,null,null,null,null,null,null)
D.eJq=new A.C(B.lc,D.h8U,null)
D.hnU=new A.D("Tap to go on",null,B.wo,null,null,null,null,null,null,null,null,null)
D.eJM=new A.C(B.kP,D.hnU,null)
D.au6=new A.ae(B.ih,18,B.c,null,null,null)
D.h1M=new A.D("Add",null,B.kY,null,null,null,null,null,null,null,null,null)
D.doe=w([D.au6,B.pu,D.h1M],x.p)
D.fvS=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.doe,null)
D.eJP=new A.C(B.o7,D.fvS,null)
D.eJR=new A.C(E.ao3,A7.ZQ,null)
D.fW7=new A.G(!0,B.c,null,null,null,null,13.5,B.C,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h53=new A.D("New Project",null,D.fW7,null,null,null,null,null,null,null,null,null)
D.dt3=w([D.au6,B.aa,D.h53],x.p)
D.fvV=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dt3,null)
D.eK5=new A.C(B.hp,D.fvV,null)
D.h7C=new A.D("Choose your header",null,B.uz,null,null,null,null,null,null,null,null,null)
D.eKq=new A.C(B.ig,D.h7C,null)
D.biA=new A.fp(2.2,null,null,null,null,B.cY,null,null,null,null)
D.fBH=new A.a5(22,22,D.biA,null)
D.bgG=new A.cq(B.z,null,null,D.fBH,null)
D.eKv=new A.C(B.a23,D.bgG,null)
D.bIk=new A.R(14,2,14,6)
D.hlX=new A.D("The top of your book. Tap a design to see it.",null,V.uA,null,null,null,null,null,null,null,null,null)
D.eKw=new A.C(D.bIk,D.hlX,null)
D.h6L=new A.D("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.eKy=new A.C(B.kP,D.h6L,null)
D.eM9=new A.j9(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eMc=new A.j9(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aQ_=new A.j9(1,0.9607843137254902,0.48627450980392156,0)
D.KN=new A.j9(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Bh=new A.j9(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eMj=new A.j9(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hVM=new C.bmc(null)
D.bD7=new A.n2(D.hVM,null,B.aB,null,null)
D.aTD=new A.cS(0,0,0,0,null,null,D.bD7,null)
D.h1O=new A.D("\ud83c\udfc5",null,B.ada,null,null,null,null,null,null,null,null,null)
D.eQJ=new A.cS(null,0,-34,null,null,null,D.h1O,null)
D.eZa=new A.y("E","Sit by the fire again")
D.f3X=new A.y("C","Good Learner")
D.f7x=new A.y("D","Still Growing")
D.fck=new A.y(-42,42)
D.fdK=new A.y("B","Faithful Listener")
D.ffT=new A.y("A","Keeper of the Family")
D.fj7=new A.b1(-17,0.7,0)
D.fjI=new A.b1(-8,0.95,1.3)
D.fkQ=new A.b1(18,0.65,5.2)
D.fkS=new A.b1(0,1.15,2.6)
D.flc=new A.b1(9,0.9,3.9)
D.fnb=new A.b7([0,0,1,1])
D.aVa=new A.a4(0,0,520,160)
D.fsO=new A.a4(10,612,440,618)
D.fsP=new A.a4(10,612,440,628)
D.fsS=new A.a4(14,-64,34,-12)
D.fsV=new A.a4(300,336,350,348)
D.abN=new A.a4(30,96,420,346)
D.fsW=new A.a4(30,-9,46,1)
D.fsX=new A.a4(4,2,11,14)
D.fsZ=new A.a4(-8,-12.5,8,-7)
D.ft_=new A.a4(-16.5,-21,16.5,1)
D.ft0=new A.a4(60,342,88,348)
D.Wk=new A.a4(66,-66,94,-36)
D.ft1=new A.a4(6,8,10,14)
D.ft4=new A.a4(95,343,115,348)
D.ft5=new A.a4(-6.5,-74,6.5,-58)
D.ftd=new A.a4(-100,-74,100,-12)
D.fte=new A.a4(-10,8,-6,14)
D.ftf=new A.a4(-11,2,-4,14)
D.ftg=new A.a4(-11,-70,11,-56)
D.ftn=new A.a4(-13,-24,13,-4)
D.ftu=new A.a4(-15,-21,15,0)
D.ftx=new A.a4(-16,-21,16,1)
D.fty=new A.a4(-16,-21,16,2)
D.ftB=new A.a4(-16,-26,16,-6)
D.ftJ=new A.a4(-230,-26,230,26)
D.fu7=new A.a4(-38,-26,12,-6)
D.fub=new A.a4(-3,-70,3,-63)
D.fuc=new A.a4(-44,-22,44,0)
D.fue=new A.a4(-46,-9,-30,1)
D.aVe=new A.a4(-80,-190,80,20)
D.ful=new A.a4(-8,-26,40,-6)
D.fum=new A.a4(-98,-80,92,-75)
D.fun=new A.a4(-9,-15,9,-9)
D.hlt=new A.D("Let the AI write it from your tree",null,B.iY,null,B.K,null,null,null,null,null,null,null)
D.bQJ=new A.d_(1,B.c8,D.hlt,null)
D.dko=w([E.Rx,B.aa,D.bQJ],x.p)
D.fvv=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dko,null)
D.h1p=new A.D("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dBW=w([D.av_,B.aa,D.h1p],x.p)
D.fvG=new A.c_(B.aJ,B.bb,B.i,B.l,null,B.p,null,0,D.dBW,null)
D.c1P=new A.ae(B.ix,14,B.b7,null,null,null)
D.fPz=new A.G(!0,B.b7,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5u=new A.D("Cashier",null,D.fPz,null,null,null,null,null,null,null,null,null)
D.dtD=w([D.c1P,B.b6,D.h5u],x.p)
D.fvK=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dtD,null)
D.h1q=new A.D("Transfer & settings",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOp=new A.bu(1,B.b8,D.h1q,null)
D.das=w([D.auz,B.ar,D.bOp],x.p)
D.fvL=new A.c_(B.aJ,B.e,B.i,B.l,null,B.p,null,0,D.das,null)
D.fAl=new A.av(16,40)
D.fAq=new A.av(22,64)
D.fAx=new A.av(280,88)
D.fBl=new A.a5(30,null,null,null)
D.h0v=new A.D("The teacher is writing\u2026",null,B.ya,null,null,null,null,null,null,null,null,null)
D.bhM=new A.cq(B.z,null,null,D.h0v,null)
D.hPt=new A.bb("w",x.W)
D.fBL=new A.a5(null,56,D.bhM,D.hPt)
D.fCx=new A.hZ(5,8,8,1,null)
D.fCF=new A.hZ(2,12,12,1.05,null)
D.h59=new A.D("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fDs=new A.b3(D.h59,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h5p=new A.D("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aXz=new A.b3(D.h5p,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hdX=new A.D("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fDW=new A.b3(D.hdX,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hoX=new A.D("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fE0=new A.b3(D.hoX,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7A=new A.D("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fE7=new A.b3(D.h7A,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.t,null)
D.hm9=new A.D("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aXE=new A.b3(D.hm9,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7y=new A.D("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fEx=new A.b3(D.h7y,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h24=new A.D("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fEz=new A.b3(D.h24,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbm=new A.D("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fEF=new A.b3(D.hbm,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hpJ=new A.D("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fFl=new A.b3(D.hpJ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hkn=new A.D("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fFL=new A.b3(D.hkn,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hp0=new A.D("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fFO=new A.b3(D.hp0,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hfB=new A.D("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fFQ=new A.b3(D.hfB,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9w=new A.D("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fFR=new A.b3(D.h9w,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9x=new A.D("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fGS=new A.b3(D.h9x,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h5b=new A.D("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fH9=new A.b3(D.h5b,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7d=new A.D("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fHt=new A.b3(D.h7d,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hf3=new A.D("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fHK=new A.b3(D.hf3,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.ham=new A.D("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fHL=new A.b3(D.ham,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fUO=new A.G(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJj=new A.eE("\u2665",null,null,B.cV,null,null,null,null,null,null,D.fUO)
D.fRU=new A.G(!0,B.aS,null,null,null,null,28,B.O,B.cQ,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJz=new A.eE("Today: how well do you know the family?",null,null,B.cV,null,null,null,null,null,null,D.fRU)
D.fJQ=new A.G(!0,B.qP,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL1=new A.G(!0,D.l6,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLp=new A.G(!0,D.l6,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLt=new A.G(!0,B.d0,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new A.G(!0,D.fM,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLN=new A.G(!0,D.fM,null,null,null,null,13,B.C,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM7=new A.tq(!0,B.um,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMn=new A.G(!0,B.d0,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMr=new A.G(!0,D.l6,null,null,null,null,18,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMs=new A.G(!0,B.d0,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMx=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMA=new A.G(!0,B.d0,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN6=new A.G(!0,B.b7,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN7=new A.G(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN9=new A.G(!0,B.aS,null,null,null,null,15.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNC=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYW=new A.G(!0,B.aR,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYX=new A.G(!0,D.lX,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO2=new A.G(!0,B.d0,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adf=new A.tq(!0,B.VR,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Xe=new A.G(!0,B.d0,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOc=new A.G(!0,B.a_,null,null,null,null,12.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOh=new A.G(!0,D.fM,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOJ=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPT=new A.G(!0,D.fM,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ6=new A.G(!0,D.fM,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQc=new A.G(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQo=new A.G(!0,D.fM,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQq=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQx=new A.G(!0,L.ji,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZa=new A.G(!0,D.fM,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRu=new A.G(!0,D.fM,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRN=new A.G(!0,D.fM,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRP=new A.G(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRR=new A.G(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSf=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.JC,null,null,null)
D.aZp=new A.G(!0,D.fM,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSG=new A.G(!0,B.a_,null,null,null,null,17,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT1=new A.G(!0,B.fs,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTp=new A.G(!0,B.bU,null,null,null,null,8,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTu=new A.G(!0,B.bC,null,null,null,null,11,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTG=new A.G(!0,B.c,null,null,null,null,13.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTJ=new A.G(!0,D.fM,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTR=new A.G(!0,D.Hf,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU2=new A.G(!0,B.b7,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUr=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUy=new A.G(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Er,null,null,null)
D.fUZ=new A.G(!0,B.d0,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV6=new A.G(!0,B.cY,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVj=new A.G(!0,D.lY,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZO=new A.G(!0,D.fM,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.M0=new A.G(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZQ=new A.G(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Er,null,null,null)
D.fVE=new A.G(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVI=new A.G(!0,G.nP,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW5=new A.G(!0,B.b7,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWm=new A.G(!0,D.fM,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWL=new A.G(!0,B.c,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXa=new A.G(!0,D.fM,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXH=new A.G(!0,D.fM,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXM=new A.G(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXW=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adO=new A.G(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adR=new A.G(!0,D.lX,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZI=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_2=new A.G(!0,B.aS,null,null,null,null,27,B.O,B.cQ,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_9=new A.G(!0,L.ji,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_h=new A.G(!0,L.ji,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_L=new A.D("Time:",null,B.hH,null,null,null,null,null,null,null,null,null)
D.h06=new A.D("\ud83c\udfae",null,K.adD,null,null,null,null,null,null,null,null,null)
D.h07=new A.D("Themes",null,B.px,null,null,null,null,null,null,null,null,null)
D.h0D=new A.D("\ud83c\udfb2",null,B.yk,null,null,null,null,null,null,null,null,null)
D.h0H=new A.D("Delete this game?",null,B.iY,null,null,null,null,null,null,null,null,null)
D.h0O=new A.D("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fQ6=new A.G(!0,B.a_,null,null,null,null,22,B.C,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1e=new A.D("Debt receipt",null,D.fQ6,null,B.K,null,null,null,null,null,null,null)
D.b_3=new A.G(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1x=new A.D("Person who owes",null,D.b_3,null,null,null,null,null,null,null,null,null)
D.h2y=new A.D("Notes",null,B.adr,null,null,null,null,null,null,null,null,null)
D.h32=new A.D("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fP1=new A.G(!0,B.c,null,null,null,null,11,B.C,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h34=new A.D("Share",null,D.fP1,null,null,null,null,null,null,null,null,null)
D.h45=new A.D("Move your family trees",null,I.adL,null,null,null,null,null,null,null,null,null)
D.h4L=new A.D("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h5o=new A.D("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h5M=new A.D("SAVE",null,D.M0,null,null,null,null,null,null,null,null,null)
D.h6p=new A.D("The round button is the right answer.",null,V.yf,null,null,null,null,null,null,null,null,null)
D.h6K=new A.D("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fW2=new A.G(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Er,null,null,null)
D.h7i=new A.D("Fireside Stories",null,D.fW2,null,null,null,null,null,null,null,null,null)
D.b_y=new A.D("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h7Z=new A.D("What should the AI do?",null,B.dw,null,null,null,null,null,null,null,null,null)
D.fOC=new A.G(!0,D.lX,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8d=new A.D("REPORT CARD",null,D.fOC,null,null,null,null,null,null,null,null,null)
D.h90=new A.D("Calabash Catch",null,B.XA,null,null,null,null,null,null,null,null,null)
D.h9s=new A.D("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h9U=new A.D("\ud83c\udfe1",null,B.FN,null,null,null,null,null,null,null,null,null)
D.haB=new A.D("Ribbon bookmark",null,B.jO,null,null,null,null,null,null,null,null,null)
D.fXG=new A.G(!0,B.b7,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hb5=new A.D("NGMY.ORG",null,D.fXG,null,B.K,null,null,null,null,null,null,null)
D.hco=new A.D("Scan family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.fTK=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdb=new A.D("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fTK,null,B.K,null,null,null,null,null,null,null)
D.heq=new A.D("Delete",null,B.X8,null,null,null,null,null,null,null,null,null)
D.her=new A.D("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.hez=new A.D("Thumbnail",null,B.px,null,null,null,null,null,null,null,null,null)
D.hf8=new A.D("Save the cover",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hfd=new A.D("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BJ,null,B.K,null,null,null,null,null,null,null)
D.hfC=new A.D("Your photos",null,B.px,null,null,null,null,null,null,null,null,null)
D.hfT=new A.D("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hgf=new A.D("\u2b50 stars",null,B.FO,null,null,null,null,null,null,null,null,null)
D.hgt=new A.D("Design your cover",null,B.uz,null,null,null,null,null,null,null,null,null)
D.hgz=new A.D("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.hgC=new A.D("PICTURE",null,N.wr,null,null,null,null,null,null,null,null,null)
D.hgE=new A.D("\ud83c\udfaf",null,D.Xz,null,null,null,null,null,null,null,null,null)
D.hh0=new A.D("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hh2=new A.D("You can undo it right after.",null,V.yf,null,null,null,null,null,null,null,null,null)
D.hhC=new A.D("Print",null,B.wp,null,null,null,null,null,null,null,null,null)
D.hi1=new A.D("Amount owed",null,D.b_3,null,null,null,null,null,null,null,null,null)
D.hih=new A.D("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hiU=new A.D("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hiX=new A.D("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hjm=new A.D("Debtor signature",null,B.adr,null,null,null,null,null,null,null,null,null)
D.hjy=new A.D("Change icon",null,B.adq,null,null,null,null,null,null,null,null,null)
D.hko=new A.D("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uC,null,null,null,null,null,null,null,null,null)
D.hkQ=new A.D("Family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hkW=new A.D("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Xy,null,null,null,null,null,null,null,null,null)
D.hlj=new A.D("Download",null,B.wp,null,null,null,null,null,null,null,null,null)
D.hlk=new A.D("The person who planted this tree has not made a game yet.",null,Af.yj,null,null,null,null,null,null,null,null,null)
D.hlo=new A.D("Change",null,B.px,null,null,null,null,null,null,null,null,null)
D.hmf=new A.D("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hmi=new A.D("WHAT SHOULD IT CHANGE?",null,N.wr,null,null,null,null,null,null,null,null,null)
D.hmR=new A.D("COLOUR",null,N.wr,null,null,null,null,null,null,null,null,null)
D.hn5=new A.D("Do it",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hn9=new A.D("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hnk=new A.D("Give me another clue",null,D.M0,null,null,null,null,null,null,null,null,null)
D.hof=new A.D("Create Family Tree",null,B.fk,null,null,null,null,null,null,null,null,null)
D.hop=new A.D("THE TEACHER EXPLAINS THESE",null,U.uC,null,null,null,null,null,null,null,null,null)
D.fJP=new A.G(!0,E.kI,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hov=new A.D("Write the first page myself",null,D.fJP,null,null,null,null,null,null,null,null,null)
D.hp3=new A.D("Use this header",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hpa=new A.D("Create Project",null,E.aZI,null,null,null,null,null,null,null,null,null)
D.hQY=new C.adU(1,"header")
D.aeS=new C.adU(2,"projects")
D.hQZ=new C.adU(3,"cashier")
D.aeT=new C.adU(4,"familyTree")
D.i5G=new C.cK6(0,"start")
D.i5H=new C.cK7(0,"start")
D.hRb=new C.a_G(null)
D.hSd=new C.a0f(null)
D.dQs=new A.bl(B.ik,[],A.as("bl<o,H5>"))
D.dw0=w([],x.dE)
D.dw1=w([],x.M)
D.hST=new C.bjn(D.dQs,D.dw0,D.dw1,0,0,null,null)
D.b45=new C.a15(0,"intro")
D.b46=new C.a15(1,"countdown")
D.af5=new C.a15(2,"ask")
D.Yv=new C.a15(3,"reveal")
D.b47=new C.a15(4,"end")
D.hVO=new C.tz(F.Ho,D.lY,B.d0,F.mo,5,!1,!1,!1,0,null)
D.hVQ=new C.tz(F.Ho,B.ew,B.d0,B.bP,2,!0,!0,!1,2,B.d0)
D.hVS=new C.tz(B.r2,B.cY,B.d0,F.mo,2,!0,!1,!1,2,B.as)
D.hVT=new C.tz(F.Ho,B.dV,B.d0,F.mo,5,!1,!1,!1,1,null)
D.hVW=new C.tz(F.a0X,D.alq,B.d0,F.mo,4,!0,!1,!0,0,null)
D.b4a=new C.tz(F.a0X,B.e0,B.d0,F.mo,3,!0,!1,!0,2,null)
D.b4b=new C.tz(F.tw,D.lY,B.c,F.mo,0,!1,!1,!0,0,null)
D.b4c=new C.tz(B.r2,B.aA,B.d0,B.bP,2,!0,!0,!1,2,B.e0)
D.b4d=new C.tz(B.r2,G.nP,B.iu,F.mo,5,!1,!1,!0,3,null)
D.hW_=new C.tz(B.r2,B.e0,B.d0,F.mo,0,!0,!1,!1,0,B.aA)
D.b4e=new C.tz(F.Ho,B.ew,B.d0,B.bP,1,!1,!0,!1,1,null)
D.b4f=new C.tz(F.GV,B.as,B.aA,F.mo,4,!0,!1,!0,2,null)
D.hW1=new C.tz(F.tw,B.as,B.ew,F.mo,3,!0,!1,!1,0,null)
D.hW3=new C.tz(B.r2,B.dV,B.d0,B.bP,1,!1,!0,!1,1,null)
D.hW4=new C.tz(F.GV,D.akq,B.c,F.mo,5,!1,!1,!0,0,null)
D.hWJ=new C.a1E(null)
D.i5P=new C.ahn(0,"still")
D.YS=new C.ahn(1,"walk")
D.b4Z=new C.ahn(2,"pound")
D.b5_=new C.ahn(3,"drum")
D.i1j=new C.a2X(0,"greet")
D.b50=new C.a2X(1,"teach")
D.afp=new C.a2X(2,"ask")
D.i1k=new C.a2X(3,"feedback")
D.b51=new C.a2X(4,"end")
D.YZ=new C.a3f(0,"intro")
D.Z_=new C.a3f(1,"asking")
D.C_=new C.a3f(2,"reacting")
D.afA=new C.a3f(3,"driving")
D.afB=new C.a3f(4,"arrived")
D.afJ=new C.aND(0,"projects")
D.b5r=new C.aND(1,"cashier")
D.i3p=new C.aND(2,"familyTree")})()};
(a=>{a["qGHwYZXFVvkHWivdhx/TdvlcmiM="]=a.current})($__dart_deferred_initializers__);