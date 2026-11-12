((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Q,A0,S,A9,L,H,E,P,Aa,T,Ab,U,Ac,Ad,A1,Ae,Af,R,M,A2,Ag,A3,A4,Ah,A5,Ai,Aj,Ak,A6,Al,Am,A7,An,G,Ao,Ap,Aq,A8,Ar,V,O,As,W,At,Au,X,Y,F,Av,I,K,Z,C={
bFF(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFF=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vQ(null,""),$async$bFF)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nk(b1)
s=A.c_(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dq(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cQ(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.J)(h),++d){a0=h[d]
f.push(A.I(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Y.aw(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rf(t,a1,B.hY,"book",E.GB),$async$bFF)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Rr(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LS(l)?y.k:y.y)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a3(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3A(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFF,v)},
ai1(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ai1=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vQ(null,""),$async$ai1)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nk(b6)
s=x.S
r=A.cW(c1,0,A.dB(4,"count",s),A.U(c1).c)
q=H.a3n(new A.N(r,new C.fOj(),r.$ti.k("N<ak.E,n>")).aM(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fOi(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.aw(b7,null)+"\nAllowed values: style one of "+B.d.aM(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ai1)
case 6:l=c5
k=H.Rr(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apC(s,D.dDT,r.b(k.h(0,"cover"))?A.a3(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dq(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.I(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Y.aw(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ai1)
case 10:l=c5
k=l==null?null:H.Rr(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.lj(a5,a2.k("lj<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a5(a9)
b1=A.aH(b0.h(a9,"index"))
i=b1==null?null:B.i.L(b1)
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
p=A.cE(new A.b7(h,s),new C.fOk(),s.k("M.E"),p)
p=H.a3n(A.pF(p,3,A.a4(p).k("M.E")).aM(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3A(s,b9),$async$ai1)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apC(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai1,v)},
hF5(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fXS(e,f),d,null,!0,!0,x.g2)},
apC:function apC(d,e,f){this.a=d
this.b=e
this.c=f},
fOj:function fOj(){},
fOi:function fOi(d){this.a=d},
fOk:function fOk(){},
fXS:function fXS(d,e){this.a=d
this.b=e},
bDt(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDt=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fBt())){u=null
w=1
break}t=B.d.cD(b1,new C.fBu())
s=$.Q()
r=new A.pZ(new A.py())
q=A.zu(r,D.aRz)
p=A.K()
p.r=B.c.gp(0)
q.ar(D.aRz,p)
o=A.K()
o.r=B.T.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bw
o.e=B.dP
n=new C.fBz(t)
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
s=$.Q()
p=A.a([],x.v)
a3=new A.aF(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
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
a3=new A.aF(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
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
return A.b(r.o0().xD(520,160),$async$bDt)
case 4:w=3
return A.b(b3.hs(B.hh),$async$bDt)
case 3:b0=b3
u=b0==null?null:J.eS(B.dN.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDt,v)},
fM_(d){return C.ikg(d)},
ikg(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fM_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjF()
n=d.x!=null&&d.zH(null).length===0
if(d.x!=null)t=n?D.Al:D.JJ
else t=d.gUC()?D.JJ:D.aMs
w=3
return A.b(C.bDt(d.ax),$async$fM_)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aog(s)
r=A.a5l(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aMs}else{p.c=C.xk(q,!0)
p.b=n?D.Al:D.JJ}r.a45(A.h7m(new C.fM1(p,d,new C.fM2(),t,n,o),null,D.bG7,B.x2))
u=r.hL(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fM_,v)},
fSE(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fSE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fM_(d),$async$fSE)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aC(q,0,40)
u=Af.Hr(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSE,v)},
fBt:function fBt(){},
fBu:function fBu(){},
fBz:function fBz(d){this.a=d},
fM2:function fM2(){},
fM1:function fM1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fM0:function fM0(){},
fYk(d,e){var w=0,v=A.j(x.H)
var $async$fYk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fYo(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYk)
case 2:return A.h(null,v)}})
return A.i($async$fYk,v)},
bG4(d,e,f,g){return C.isr(d,e,f,g)},
isr(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bG4=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gan(e.split(",")):e
r=B.cI.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.M(x.q).f.U(D.fkt)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fYg(g,r,f),d,null,!0,!0,x.H),$async$bG4)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bG4,v)},
fYp(d,e){var w=0,v=A.j(x.H)
var $async$fYp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fYs(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYp)
case 2:return A.h(null,v)}})
return A.i($async$fYp,v)},
b_G:function b_G(d,e){this.c=d
this.a=e},
c8k:function c8k(){},
bcT:function bcT(d,e){this.b=d
this.a=e},
fYo:function fYo(d,e){this.a=d
this.b=e},
fYl:function fYl(d){this.a=d},
fYm:function fYm(d,e,f){this.a=d
this.b=e
this.c=f},
fYn:function fYn(d,e){this.a=d
this.b=e},
fYg:function fYg(d,e,f){this.a=d
this.b=e
this.c=f},
fYe:function fYe(d){this.a=d},
fYf:function fYf(d,e,f){this.a=d
this.b=e
this.c=f},
fYs:function fYs(d,e){this.a=d
this.b=e},
fYq:function fYq(d){this.a=d},
fYr:function fYr(d,e,f){this.a=d
this.b=e
this.c=f},
fGh(d,e){var w=0,v=A.j(x.y),u,t
var $async$fGh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a38(d),$async$fGh)
case 3:t=g
J.nQ(t,new C.fGi(e))
u=A.aiG(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGh,v)},
fGi:function fGi(d){this.a=d},
apO:function apO(d,e,f){this.c=d
this.d=e
this.a=f},
aEx:function aEx(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQi:function dQi(d,e,f){this.a=d
this.b=e
this.c=f},
dQh:function dQh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQd:function dQd(){},
dQe:function dQe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQc:function dQc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPY:function dPY(d){this.a=d},
dPZ:function dPZ(d,e,f){this.a=d
this.b=e
this.c=f},
dQ_:function dQ_(d,e){this.a=d
this.b=e},
dPX:function dPX(d){this.a=d},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dPW:function dPW(d){this.a=d},
dQ5:function dQ5(d,e,f){this.a=d
this.b=e
this.c=f},
dQ6:function dQ6(d,e,f){this.a=d
this.b=e
this.c=f},
dPV:function dPV(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d,e,f){this.a=d
this.b=e
this.c=f},
dPU:function dPU(d,e){this.a=d
this.b=e},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dPT:function dPT(d){this.a=d},
dQ9:function dQ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPR:function dPR(){},
dPL:function dPL(d){this.a=d},
dPM:function dPM(d){this.a=d},
dPS:function dPS(d,e){this.a=d
this.b=e},
dQa:function dQa(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d){this.a=d},
dQb:function dQb(d){this.a=d},
dPP:function dPP(){},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dPO:function dPO(d){this.a=d},
dQ1:function dQ1(d,e,f){this.a=d
this.b=e
this.c=f},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPK:function dPK(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d){this.a=d},
dQ3:function dQ3(d,e,f){this.a=d
this.b=e
this.c=f},
dQx:function dQx(){},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQv:function dQv(d){this.a=d},
dQw:function dQw(d){this.a=d},
dQr:function dQr(d,e){this.a=d
this.b=e},
dQs:function dQs(d){this.a=d},
dQk:function dQk(d,e,f){this.a=d
this.b=e
this.c=f},
dQl:function dQl(d,e,f){this.a=d
this.b=e
this.c=f},
dQm:function dQm(d,e,f){this.a=d
this.b=e
this.c=f},
dQn:function dQn(d,e,f){this.a=d
this.b=e
this.c=f},
dQo:function dQo(d,e,f){this.a=d
this.b=e
this.c=f},
dQp:function dQp(d,e,f){this.a=d
this.b=e
this.c=f},
dQq:function dQq(d,e,f){this.a=d
this.b=e
this.c=f},
dQz:function dQz(){},
dQA:function dQA(){},
dQB:function dQB(){},
dQC:function dQC(d){this.a=d},
dQt:function dQt(d,e){this.a=d
this.b=e},
hAX(d){return B.d.dP(D.a4D,new C.fH6(d),new C.fH7())},
uP:function uP(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fH6:function fH6(d){this.a=d},
fH7:function fH7(){},
alR:function alR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWp:function aWp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TU:function TU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgw:function bgw(){this.d=$
this.c=this.a=null},
dga:function dga(d,e){this.a=d
this.b=e},
dg8:function dg8(d,e){this.a=d
this.b=e},
dg9:function dg9(){},
dgb:function dgb(d,e){this.a=d
this.b=e},
hlk(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nv(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LE(d,e){return C.iiT(d,e)},
iiT(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LE)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Y.aQ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cE(o,new C.fJB(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fJC(),n),n.k("M.E"))
B.d.aZ(o,new C.fJD())
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
return A.i($async$LE,v)},
By(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$By=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$By)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.fWV(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.aw(r,null)),$async$By)
case 4:case 1:return A.h(u,v)}})
return A.i($async$By,v)},
aSs(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSs=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LE(d,e),$async$aSs)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h4l(f))
if(s===-1)t.c3(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.By(d,e,u),$async$aSs)
case 3:return A.h(null,v)}})
return A.i($async$aSs,v)},
bDW(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LE(d,e),$async$bDW)
case 2:u=h
J.nQ(u,new C.fG9(f))
w=3
return A.b(C.By(d,e,u),$async$bDW)
case 3:return A.h(null,v)}})
return A.i($async$bDW,v)},
bEa(d,e){return C.iiS(d,e)},
iiS(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEa=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bEa)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OJ
w=1
break}p=B.Y.aQ(0,q,null)
if(x.f.b(p)){o=A.a3(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aH(o.h(0,"emblem"))
k=k==null?null:B.i.L(k)
if(k==null)k=0
if(D.DG.al(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aH(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a6l,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5F,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5B,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d5H,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Ip(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OJ
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OJ
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEa,v)},
Sx(d,e,f){return C.irW(d,e,f)},
irW(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Sx=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Sx)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.aw(f.aj(),null)),$async$Sx)
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
return A.i($async$Sx,v)},
S0(d,e){return C.iiU(d,e)},
iiU(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$S0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$S0)
case 7:r=g
q=r.tS("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LE(d,e),$async$S0)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lJ(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$S0)
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
return A.i($async$S0,v)},
ahk(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S0(d,e),$async$ahk)
case 3:s=g
r=J.a5(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.az(),$async$ahk)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahk)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahk,v)},
a3N(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3N=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.S0(d,e),$async$a3N)
case 2:s=h
J.hk(s,f)
w=3
return A.b(A.az(),$async$a3N)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3N)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3N)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3N)
case 6:return A.h(null,v)}})
return A.i($async$a3N,v)},
nv:function nv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJB:function fJB(){},
fJC:function fJC(){},
fJD:function fJD(){},
fWV:function fWV(){},
h4l:function h4l(d){this.a=d},
fG9:function fG9(d){this.a=d},
Ip:function Ip(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bRh:function bRh(d){this.a=d},
isg(d,e,f,g,h,i,j){return A.a7(d,!1).ca(A.e9(new C.fXw(j,i,f,e,h,g),!0,null,x.H))},
RW(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RW=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S0(h,g),$async$RW)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.M(x.q).f.U(D.aTT)
u=!1
w=1
break}w=4
return A.b(C.hF5(d,f,e),$async$RW)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahk(h,g),$async$RW)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nv(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.By(h,r,p),$async$RW)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Sx(h,r,new C.Ip("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RW)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RW,v)},
fXw:function fXw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_v:function a_v(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBv:function aBv(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dgQ:function dgQ(d){this.a=d},
dgP:function dgP(d,e){this.a=d
this.b=e},
dgE:function dgE(d,e){this.a=d
this.b=e},
dgB:function dgB(d,e){this.a=d
this.b=e},
dgc:function dgc(d){this.a=d},
dgd:function dgd(d,e){this.a=d
this.b=e},
dgF:function dgF(d){this.a=d},
dgl:function dgl(d){this.a=d},
dgj:function dgj(d){this.a=d},
dgk:function dgk(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgD:function dgD(){},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d,e){this.a=d
this.b=e},
dgn:function dgn(d){this.a=d},
dgo:function dgo(d,e){this.a=d
this.b=e},
dgO:function dgO(d){this.a=d},
dgN:function dgN(d,e){this.a=d
this.b=e},
dgM:function dgM(d){this.a=d},
dgy:function dgy(d){this.a=d},
dgx:function dgx(d){this.a=d},
dgz:function dgz(d){this.a=d},
dge:function dge(d,e){this.a=d
this.b=e},
dgA:function dgA(d,e){this.a=d
this.b=e},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgq:function dgq(){},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgv:function dgv(d,e){this.a=d
this.b=e},
dgw:function dgw(d,e,f){this.a=d
this.b=e
this.c=f},
dgp:function dgp(d,e){this.a=d
this.b=e},
dgH:function dgH(d){this.a=d},
dgG:function dgG(){},
dgI:function dgI(d){this.a=d},
dgJ:function dgJ(d){this.a=d},
dgK:function dgK(d){this.a=d},
dgL:function dgL(d,e){this.a=d
this.b=e},
dgf:function dgf(d){this.a=d},
dgg:function dgg(d){this.a=d},
a_z:function a_z(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgV:function bgV(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
diC:function diC(d){this.a=d},
diD:function diD(d){this.a=d},
diB:function diB(d){this.a=d},
diE:function diE(d){this.a=d},
diA:function diA(d){this.a=d},
diF:function diF(d){this.a=d},
diz:function diz(d){this.a=d},
diG:function diG(d,e){this.a=d
this.b=e},
diy:function diy(d,e){this.a=d
this.b=e},
diH:function diH(d,e){this.a=d
this.b=e},
a_x:function a_x(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afJ:function afJ(d,e,f){this.a=d
this.b=e
this.c=f},
aBy:function aBy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dh4:function dh4(d,e){this.a=d
this.b=e},
dh3:function dh3(d,e){this.a=d
this.b=e},
dh8:function dh8(d){this.a=d},
dh7:function dh7(d,e){this.a=d
this.b=e},
dh5:function dh5(d){this.a=d},
dh6:function dh6(d){this.a=d},
dh9:function dh9(d){this.a=d},
dha:function dha(d){this.a=d},
dh2:function dh2(d,e){this.a=d
this.b=e},
dh1:function dh1(d,e){this.a=d
this.b=e},
KM:function KM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZN:function ZN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPs:function cPs(d){this.a=d},
cPt:function cPt(){},
cPu:function cPu(d){this.a=d},
be7:function be7(d,e,f){this.b=d
this.c=e
this.a=f},
bdZ:function bdZ(d,e){this.b=d
this.a=e},
uQ:function uQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_5:function a_5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be5:function be5(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d81:function d81(d,e,f){this.a=d
this.b=e
this.c=f},
d80:function d80(d,e){this.a=d
this.b=e},
d8q:function d8q(d){this.a=d},
d8d:function d8d(){},
d8r:function d8r(d){this.a=d},
d8c:function d8c(){},
d8s:function d8s(d,e){this.a=d
this.b=e},
d8b:function d8b(d,e){this.a=d
this.b=e},
d8t:function d8t(d,e){this.a=d
this.b=e},
d8a:function d8a(d,e){this.a=d
this.b=e},
d8u:function d8u(d){this.a=d},
d89:function d89(){},
d8v:function d8v(d,e){this.a=d
this.b=e},
d88:function d88(d,e){this.a=d
this.b=e},
d8w:function d8w(d){this.a=d},
d8l:function d8l(d,e){this.a=d
this.b=e},
d8x:function d8x(d){this.a=d},
d8y:function d8y(d){this.a=d},
d8A:function d8A(d){this.a=d},
d8B:function d8B(d){this.a=d},
d8k:function d8k(d,e){this.a=d
this.b=e},
d8C:function d8C(d,e){this.a=d
this.b=e},
aIy:function aIy(d){this.a=d},
bjt:function bjt(d){this.a=d},
bcf:function bcf(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alS:function alS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1M:function a1M(d,e){this.a=d
this.b=e},
alT:function alT(d,e,f,g,h,i){var _=this
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
_.bx$=h
_.a9$=i
_.c=_.a=null},
bRr:function bRr(d){this.a=d},
bRl:function bRl(d){this.a=d},
bRk:function bRk(d,e){this.a=d
this.b=e},
bRu:function bRu(d){this.a=d},
bRm:function bRm(d){this.a=d},
bRn:function bRn(d){this.a=d},
bRq:function bRq(d){this.a=d},
bRp:function bRp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRs:function bRs(d,e){this.a=d
this.b=e},
bRt:function bRt(){},
bRo:function bRo(d){this.a=d},
bRi:function bRi(d,e){this.a=d
this.b=e},
bRj:function bRj(d){this.a=d},
bp1:function bp1(d,e){this.b=d
this.a=e},
aBw:function aBw(){},
iw(d,e){var w
$.Q()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bw
w.e=B.dP
return w},
bDv(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bp(j.save())
j.translate(e.a,e.b)
d.pj(0,a0?-f:f,f)
w=A.bs(B.ij,8,36)
v=B.w.j(0.3)
u=$.Q()
t=A.K()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.X8
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.epu,new A.o(-4+v,-2),C.iw(q,5))
d.ah(D.en4,new A.o(4-v,-2),C.iw(q,5))}else{t=A.bs(B.Jz,14,40)
p=A.K()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.c6(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.c6(15,-40,11,t))
o.E(new A.bv())
t=A.K()
t.r=w.gp(0)
d.af(o,t)
u=new A.aF(v,B.ai,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bv())
v=A.K()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b0E){n=-52+w*14
d.ah(new A.o(10,n-22),new A.o(10,n+44),C.iw(F.FN,3.4))
d.ah(D.epM,new A.o(9,n),C.iw(q,4))
d.ah(D.ent,new A.o(10,n),C.iw(q,4))}else if(a1===D.b0F){d.ah(D.eoz,new A.o(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.elx,new A.o(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.eoE,new A.o(-12-w,v),C.iw(q,4))
d.ah(D.aLu,new A.o(12+w,v),C.iw(q,4))}w=A.K()
w.r=q.gp(0)
d.ar(D.f7p,w)
m=new A.o(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a5(0,K.vm),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a5(0,D.elr)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a5(0,B.tm),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cC(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.epK),m.a5(0,D.eox),C.iw(v,2.2))
d.ah(m.a5(0,D.ens),m.a5(0,D.elo),C.iw(v,2.2))}if(w===4){w=m.a5(0,D.epO)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a5(0,D.enu)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a5(0,D.eok)
v=A.K()
v.r=B.ia.gp(0)
d.N(w,0.9,v)
v=m.a5(0,D.eo8)
w=A.K()
w.r=B.ia.gp(0)
d.N(v,0.9,w)
if(i){l=m.a5(0,K.a8h)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lD.gp(0)
d.bZ(w,v)
v=A.bs(l.a5(0,K.aLr),5,12)
w=A.K()
w.r=D.bfN.gp(0)
d.bZ(v,w)
d.ah(l.a5(0,D.epG),l.a5(0,K.aLO),C.iw(B.cO,1.4))
d.ah(D.aLu,new A.o(15,-88-r),C.iw(q,3.6))}j.restore()},
hzy(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bp(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bU(0,f)
v=A.bs(B.dG,18,96)
u=B.w.j(0.28)
$.Q()
t=A.K()
t.r=u.gp(0)
d.bZ(v,t)
t=A.bs(B.dG,11,70)
v=B.w.j(0.2)
u=A.K()
u.r=v.gp(0)
d.bZ(t,u)
d.lx(D.aRD,A.K())
C.i77(d,g,h,i,j)
s=(k==null?D.a8n:k).a-w>=0?1:-1
w=A.K()
w.a=B.LP
w.sav(A.jy(new A.o(s*70,-60),new A.o(-s*70,-60),A.a([D.ai9.j(0.5),D.ai9.j(0.12),D.bn4.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aRD,w)
r.restore()
r.restore()},
i77(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
a0.toString
w=A.ar(d,B.c,0.16)
w.toString
v=a2.b
u=A.ar(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bl(D.f7q,B.tq)
p=$.Q()
o=A.K()
o.r=u.gp(0)
a1.am(s,o)
o=A.bl(D.f7l,B.hO)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.am(o,n)
n=A.bl(D.f7z,B.hO)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.am(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f7s,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f6b,s)
s=a1.c
J.bp(s.save())
s.translate(a3.w,0)
J.bp(s.save())
a1.pj(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aF(p.r,B.ai,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.c6(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.c6(m+3,-62,m-2,-58))
l.E(new A.c6(0,-70,k,-58))
l.E(new A.bv())
k=A.K()
k.r=v.gp(0)
a1.af(l,k)
J.bp(s.save())
a1.mQ(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dco[j]
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(-34+u,-64),new A.o(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ap(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.Q()
f=new A.ao(B.O,B.M,B.R,B.S,B.P)
f.r=i.gp(0)
a1.N(new A.o(g,h),3.6,f)
f=new A.ao(B.O,B.M,B.R,B.S,B.P)
f.r=u.gp(0)
a1.N(new A.o(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(g,-64),new A.o(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(-30,h),new A.o(30,h),i)}break
default:a1.ah(D.ep9,D.emc,C.iw(a2.c.j(0.9),3))}a1.ah(D.epH,D.eoG,C.iw(B.w.j(0.18),1.6))
a1.ah(D.elw,K.aLw,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.Q()
i=A.K()
i.r=u.gp(0)
a1.ar(D.f67,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.ar(D.f6l,i)
n=new A.aF(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c6(0,-57,9,-66))
n.E(new A.c6(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cC(D.f6u,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8r
n=25*q
k=23*q
i=9*q
C.hvP(a1,new A.o(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.E6:o
C.hvP(a1,new A.o(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.emX,D.emT,C.iw(D.aj9,4))
a1.ah(D.emV,D.emR,C.iw(D.Gb.j(0.7),1.4))
u=A.K()
u.r=B.cO.gp(0)
a1.N(D.emU,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bp(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hX(0,a3.f)
a1.bU(0,r)
C.i74(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hvP(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.ij:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.o(o,w)
if(o*i<0)v=new A.o(-o,-w)
u=e.a5(0,q.aO(0,n)).a5(0,v.aO(0,m))
t=e.a5(0,q.aO(0,p))
d.ah(e,u,C.iw(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.ah(e,u,C.iw(o,l*0.35))
d.ah(u,t,C.iw(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.ah(u,t,C.iw(o,l*0.22))
$.Q()
o=A.K()
o.r=j.gp(0)
d.N(u,l*0.55,o)
o=A.bs(t,l*1.15,l)
w=A.K()
w.r=k.gp(0)
d.bZ(o,w)
w=-l
w=t.a5(0,new A.o(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i74(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vl,40,38)
$.Q()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.Q()
w=A.K()
w.r=c0.gp(0)
c2.N(D.eoQ,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.elN,9.5,w)}w=A.bs(D.eq3,10,6)
v=$.Q()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.eoh,10,6)
w=A.K()
w.r=c8.gp(0)
c2.bZ(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kR(13,-20,17,-9,16,2))
t.E(new A.kR(15,13,8,20,0,20))
t.E(new A.kR(-8,20,-15,13,-16,2))
t.E(new A.kR(-17,-9,-13,-20,0,-20))
t.E(new A.bv())
u=A.K()
u.sav(A.w9(D.epw,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cC(D.f7B,3.455751918948773,2.5132741228718345,!1,s)
c2.cC(D.f6e,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eoN,D.eoB,s)
c2.ah(D.elJ,D.elA,s)
c2.cC(D.f6t,2.2,1.4,!1,s)
c2.cC(D.f6c,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=c0.gp(0)
c2.N(new A.o(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cC(D.f6H,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c6(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c6(0,-12,-13,-6))
p.E(new A.bv())
o=A.K()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eoC,D.elB,C.iw(G.np,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.eoT,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.elO,3,o)
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c6(-12,22,0,26))
o.E(new A.c6(12,22,13,6))
o.E(new A.c6(8,13,0,12))
o.E(new A.c6(-8,13,-13,6))
o.E(new A.bv())
p=A.K()
p.r=B.iC.gp(0)
c2.af(o,p)
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c6(0,6,7,8))
p.E(new A.c6(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.c6(-20,-27,0,-29))
p.E(new A.c6(20,-27,17,-4))
p.E(new A.c6(0,-14,-17,-4))
p.E(new A.bv())
o=A.K()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cC(D.f6O,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cC(D.f6B,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c6(27,-34,25,-19))
o.E(new A.c6(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aF(v,B.ai,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.c6(24,-12,27,-26))
n.E(new A.c6(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.K()
p.r=o.gp(0)
c2.af(n,p)
p=A.K()
p.r=c3.c.gp(0)
c2.N(D.elC,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f6L,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bw
o.e=B.dP
c2.ah(new A.o(r*3.6,-19+Math.abs(r)*0.8),new A.o(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aCk[l]
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bw
o.e=B.dP
c2.ah(new A.o(k,0),new A.o(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=p.gp(0)
c2.N(new A.o(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f6K,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8h,K.a8g,C.iw(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f6f,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bs(D.epQ,5,8)
o=D.afs.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.eot,5,8)
p=D.afs.j(i)
o=A.K()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.c6(h-3.4,6,h-2.6,7.4))
o.E(new A.c6(h,8.8,h+2.6,7.4))
c2.af(o,C.iw(c8.j(0.75),1.1))
o=A.K()
o.r=c8.gp(0)
c2.N(new A.o(h-1.5,7.2),0.7,o)
o=A.K()
o.r=c8.gp(0)
c2.N(new A.o(h+1.5,7.2),0.7,o)
g=B.i.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fJ[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bs(new A.o(a5,-3),a3,7)
a6=new A.ao(B.O,B.M,B.R,B.S,B.P)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bp(d.save())
a6=A.a([],w)
a4=new A.aF(v,B.ai,b9,b9,a6)
a6.push(new A.jP(A.bs(new A.o(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.E6(a4.glV().a.snapshot())
d.clipPath(a3.a,$.no(),!0)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=D.bjx.gp(0)
c2.N(new A.o(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.w.gp(0)
c2.N(new A.o(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.c.gp(0)
c2.N(new A.o(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Z9:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.S,B.P)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bw
a9.e=B.dP
a3=p?0.8:0
c2.cC(A.bs(new A.o(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.e7
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.O,B.M,B.R,B.S,B.P)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bw
b2.e=B.dP
c2.ah(new A.o(a5-a4,b0-a6+0.4),new A.o(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.btt
else{u=A.ar(c8,D.bn6,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aF(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c6(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c6(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bv())
v=A.K()
v.r=D.bmq.gp(0)
c2.af(b8,v)
J.bp(d.save())
c2.mQ(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.o(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.bty.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iw(b4,1.1))}else{u=new A.aF(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.c6(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iw(b4,1.5))
if(b5>0.6){w=new A.aF(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.c6(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.c6(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cC(D.f6s,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cC(D.f6h,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.eoa,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.eo6,1.7,w)}},
icH(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.Q(),f=new A.pZ(new A.py()),e=A.zu(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jy(B.I,new A.o(0,a0*0.46),D.d9a,D.d0I,B.x,h))
e.ar(new A.a1(0,0,0+d,0+a0),a2)
a2=e.c
J.bp(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e1()
w.cY(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.o(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bp(a2.save())
a2.translate(200,120)
e.hX(0,-0.5)
d=A.K()
a0=x.O
d.sav(A.w9(B.I,230,A.a([D.bii,B.L],a0),h,B.x,h,h,0))
e.bZ(D.f6Y,d)
a2.restore()
d=A.K()
d.sav(A.w9(D.a8q,58,A.a([D.blt,B.L],a0),h,B.x,h,h,0))
e.N(D.a8q,58,d)
d=A.K()
d.r=D.bh0.gp(0)
e.N(D.a8q,24,d)
d=A.K()
d.r=D.Zy.gp(0)
e.N(D.emw,5,d)
d=A.K()
d.r=D.Zy.gp(0)
e.N(D.emA,3.4,d)
d=A.K()
d.r=D.Zy.gp(0)
e.N(D.emz,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aF(g.r,B.ai,h,h,u)
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
g=new A.bv()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bfA,D.bhA,D.bnq][s]
u=$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cvD[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.b=B.a9
u.c=2.4
u.r=D.ZP.gp(0)
u.d=B.bw
u.e=B.dP
e.ah(new A.o(o,k),new A.o(g,d),u)
g=A.bs(new A.o(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.ZP.gp(0)
e.bZ(g,u)
d=A.bs(new A.o(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.ZP.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.bh3.j(0.8).gp(0)
e.N(new A.o(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jy(D.el5,D.el7,D.d2G,B.Dr,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e1()
j.cY(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bs(new A.o(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h8()?B.c:B.w
d=new A.ao(B.O,B.M,B.R,B.S,B.P)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bp(a2.save())
a2.translate(225,590)
e.pj(0,1,0.34)
g=A.K()
g.sav(A.w9(B.I,250,A.a([D.bom,D.bhV,D.bqf],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.I,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ahS,D.bgy,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.P)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bw
a0.e=B.dP
e.ah(new A.o(o+i*2,k),new A.o(o+i*5,g+Math.abs(i)*3),a0)}}C.i5d(e)
for(l=0;l<3;++l)C.i8F(e,D.aA6[l])
C.i8u(e,D.emq)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.P)
a0.b=B.a9
a0.c=2.4
a0.r=D.ZL.gp(0)
a0.d=B.bw
a0.e=B.dP
e.ah(new A.o(o,452+g),new A.o(o+1,436+d),a0)}e.ah(D.ely,D.elS,C.iw(D.bhh,1.6))
a2.restore()
return f.o0()},
i5d(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q().r,g=x.v,f=new A.aF(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kR(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kR(416,382,432,422,428,462))
f.E(new A.bv())
w=A.K()
w.sav(A.jy(new A.o(354,0),new A.o(430,0),D.dwN,U.zN,B.x,i))
d.af(f,w)
v=new A.e1()
v.cY(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bw
p.e=B.dP
d.ah(new A.o(t,s),new A.o(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.ddM[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aF(h,B.ai,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.c6(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.b=B.a9
r.c=8
r.r=D.agb.gp(0)
r.d=B.bw
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=A.ar(D.bh9,D.bnp,v.ai()).j(0.92).gp(0)
d.N(new A.o(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.b=B.a9
r.c=1.2
r.r=D.ZL.gp(0)
r.d=B.bw
r.e=B.dP
d.ah(new A.o(w,q+8),new A.o(w,q+22),r)
q=A.bs(new A.o(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.S,B.P)
w.r=D.boF.gp(0)
d.bZ(q,w)}},
i8F(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.o(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.Q(),b3=A.K()
b3.r=b1.gp(0)
b4.bZ(b0,b3)
b2=b2.r
b3=x.v
w=new A.aF(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.c6(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bv())
u=A.K()
u.sav(A.jy(new A.o(b0,0),new A.o(v,0),D.ddS,U.zN,B.x,a4))
b4.af(w,u)
t=new A.e1()
t.cY(B.o.V(a5*7))
v=b4.c
J.bp(v.save())
b4.mQ(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bw
n.e=B.dP
b4.ah(new A.o(r,q),new A.o(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahN.j(0.75)
n=A.K()
n.r=o.gp(0)
b4.ar(new A.a1(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aF(b2,B.ai,a4,a4,j)
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
h=new A.bv()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=D.lD.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aF(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iw(D.ahN.j(0.7),1.6))
v.restore()
b0=$.Q().r
b2=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.c6(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bv())
m=A.K()
m.r=D.ahZ.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.ahZ.gp(0)
b4.N(new A.o(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.c6(a5-a9,n,a5,u))
e.E(new A.c6(a5+a9,n,p,j))
e.E(new A.c6(a5,b1+a7*0.34,o,j))
e.E(new A.bv())
b1=A.K()
n=a7*1.4
b1.sav(A.jy(new A.o(a5-n,0),new A.o(a5+n,0),D.dhm,U.zN,B.x,a4))
b4.af(e,b1)
J.bp(v.save())
b4.mQ(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h8()?B.w:D.bgH).j(0.16)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=0.9
i.r=n.gp(0)
i.d=B.bw
i.e=B.dP
b4.ah(new A.o(a5+(p-0.5)*3,u),new A.o(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aF(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.c6(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.b=B.a9
n.c=1.2
n.r=b1.gp(0)
n.d=B.bw
n.e=B.dP
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ao(B.O,B.M,B.R,B.S,B.P)
v.b=B.a9
v.c=1.1
v.r=D.bnQ.gp(0)
v.d=B.bw
v.e=B.dP
b4.ah(new A.o(a2,a3),new A.o(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bv())
b0=A.K()
b0.r=D.bk2.gp(0)
b4.af(a9,b0)},
i8u(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aCh[s]
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.b=B.a9
q.c=3
q.r=D.ZL.gp(0)
q.d=B.bw
q.e=B.dP
d.ah(new A.o(r,u),new A.o(r,t),q)}u=A.bs(e.a5(0,K.aLq),24,36)
t=$.Q()
r=A.K()
r.r=D.bsJ.gp(0)
d.bZ(u,r)
t=new A.aF(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.c6(w,v-24,r,u))
t.E(new A.bv())
u=A.K()
u.r=D.agS.gp(0)
d.af(t,u)},
i7M(d){switch(B.o.F(d,8)){case 0:return D.b0c
case 1:return D.b0a
case 2:return D.b09
case 3:return D.b08
case 4:return D.b0b
case 5:return D.b0d
case 6:return D.hwq
default:return D.hwp}},
Sv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bp2()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8r:j
w.as=k==null?D.E6:k
C.hzy(d,e,p,C.i7M(m),w,s,m,l)},
hB2(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bT5:function bT5(){var _=this
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
bp2:function bp2(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ama:function ama(){this.b=this.a=null},
aWu:function aWu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bSY:function bSY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSZ:function bSZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT_:function bT_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT0:function bT0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT1:function bT1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT2:function bT2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT3:function bT3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT4:function bT4(){},
bSX:function bSX(d){this.a=d},
afS:function afS(d,e){this.a=d
this.b=e},
adR:function adR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N0(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRH(s)
s.bBJ(d)
return s},
H0(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d4(new A.Y(g,new C.fun(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("cj.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dB(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lr(e,v,B.d.co(v,f),h,i,"tree",j)},
itR(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h4c(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jz(c4,c0)
t=A.C(c4,A.a4(c4).k("cj.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jz(c4,c0)
r=A.C(c4,A.a4(c4).k("cj.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jz(c4,c0)
q=A.C(c4,A.a4(c4).k("cj.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.J)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wo)g="father"
else g=h===D.os?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h4e(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H0(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h4f(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lr("True or false: "+h+" is the "+g+" of "+l+".",D.aB8,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lr("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aB8,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G7(m)
h=a0.length
if(h!==0){a1=a0[c6.az(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h4g(l,a0,c5),v),s)
e=a1.c
if(e===D.wo)e="son"
else e=e===D.os?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H0(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ez([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mw(a5,a5.r,f.k("mw<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H0(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iu<1>"),a3=new A.iu(a0,1,b3,a2),a3.n5(a0,1,b3,e.c),a3=new A.bP(a3,a3.gI(0),a2.k("bP<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H0(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arq(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h4h(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H0(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h4i(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wo
if(e)a2=b7
else a2=f===D.os?b8:b9
if(e)f=b7
else f=f===D.os?b8:b9
c2.$2("grand",C.H0(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN5(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.az(k)].b)
j=A.C(new A.Y(t,new C.h4j(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H0(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cOj)
h=l+" was born in "+k
c2.$2("place",C.H0(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d3J)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H0(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H0(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iX(b1,b3,b3)
c2.$2("year",C.H0(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bE6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N0(d),l=new A.e1()
l.cY(f)
w=C.itR(m,l,g)
for(v=new A.dr(w,w.r,w.e);v.C();)J.hjo(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fHI(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.J)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.J(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.az8,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hzF(o,l))}}else if(!g&&v>3){o=C.hzF(D.az8[l.az(14)],l)
t[t.length-1-l.az(3)]=o}return t},
hzF(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lr(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hED(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N0(a2),a1=new A.e1()
a1.cY(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.G7(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.G7(n)
l=A.U(m)
k=new A.iu(m,0,5,l.k("iu<1>"))
k.n5(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fVV(),A.U(j).k("N<1,G>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aSd(a0,j[i]))
w.push(new C.auc("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c5(e.c4(0,a0.amB(q),new C.fVW()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fi(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dB(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bP(u,u.gI(0),t.k("bP<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.J)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aSd(a0,v[r]))
w.push(new C.auc("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQI(d){return B.d.ao3(D.aBE,new C.fDA(d))},
ijp(d){return A.nz(new A.Y(D.aBE,new C.fKv(d),x.av))},
bSv(d){return C.hOl(d)},
hOl(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSv=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSv)
case 7:r=f
q=B.a.i(d)
q=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bSv,v)},
BT(d,e){return C.hOi(d,e)},
hOi(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BT)
case 7:r=g
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BT)
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
return A.i($async$BT,v)},
bSu(d,e,f){return C.hOj(d,e,f)},
hOj(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSu=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSu)
case 7:r=h
q=B.a.i(d)
q=A.eo(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bSu,v)},
BU(d,e,f,g){return C.hOk(d,e,f,g)},
hOk(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BU=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BU)
case 7:r=i
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BU)
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
return A.i($async$BU,v)},
bGk(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h6f(d,e,f,g){return new C.akM(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hMp(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aU(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.ck)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dB(4,"count",x.S),u).dn(0)
B.d.v(w,A.c_(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aH(d.h(0,"c"))
v=v==null?null:B.i.L(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aH(d.h(0,"s"))
u=u==null?null:B.i.L(u)
return C.h6f(w,v,B.o.D(u==null?20:u,5,60),t)},
hky(d){var w,v,u,t,s,r,q=J.a5(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aU(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.ck)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hMp(A.a3(r,t,s)))}return new C.MK(p,w,v)},
heJ(d){var w,v=A.a([],x.c)
for(w=J.aU(d.z);w.C();)v.push(C.hky(w.gR(w)))
return v},
aSd(d,e){var w=e.c===D.os
if(d.amB(e)===0&&d.G7(e).length!==0)return w?0:1
if(d.G7(e).length!==0||d.arq(e)!=null)return w?2:3
return w?4:5},
hFK(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N0(a4),a3=new A.e1()
a3.cY(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.J)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.J)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.G7(m)
g=a2.arq(m)
f=a2.aN5(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wo)k="father"
else k=k===D.os?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wo)k="father"
else k=k===D.os?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h4C())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h4D(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n5(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aSd(a2,m)
i=new A.iu(l,0,4,p)
i.n5(l,0,4,r)
w.push(new C.bau(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hxh(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hEQ(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N0(a4),a3=new A.e1()
a3.cY(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.G7(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.G7(l)
j=A.U(k)
i=new A.iu(k,0,4,j.k("iu<1>"))
i.n5(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fWr(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n5(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSd(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aSd(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aSd(a2,f[g]))
w.push(new C.a9W(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lr:function lr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRH:function bRH(d){this.b=d
this.c=$},
bRI:function bRI(){},
bRJ:function bRJ(d){this.a=d},
fun:function fun(d){this.a=d},
h4c:function h4c(d){this.a=d},
h4d:function h4d(){},
h4e:function h4e(d){this.a=d},
h4f:function h4f(d,e){this.a=d
this.b=e},
h4g:function h4g(d,e,f){this.a=d
this.b=e
this.c=f},
h4b:function h4b(d,e){this.a=d
this.b=e},
h4h:function h4h(d){this.a=d},
h4i:function h4i(d){this.a=d},
h4j:function h4j(d,e,f){this.a=d
this.b=e
this.c=f},
h4a:function h4a(d,e){this.a=d
this.b=e},
fHI:function fHI(d,e){this.a=d
this.b=e},
auc:function auc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fVV:function fVV(){},
fVW:function fVW(){},
zD:function zD(d,e,f){this.a=d
this.b=e
this.c=f},
fDA:function fDA(d){this.a=d},
fKv:function fKv(d){this.a=d},
akM:function akM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMv:function bMv(){},
MK:function MK(d,e,f){this.a=d
this.b=e
this.c=f},
bau:function bau(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h4C:function h4C(){},
h4D:function h4D(d){this.a=d},
a9W:function a9W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWr:function fWr(d){this.a=d},
bhL:function bhL(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afQ:function afQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ak4:function ak4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ak5:function ak5(d,e,f,g,h){var _=this
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
_.bx$=g
_.a9$=h
_.c=_.a=null},
bKG:function bKG(d){this.a=d},
bKB:function bKB(){},
bKH:function bKH(){},
bKz:function bKz(){},
bKA:function bKA(){},
bKF:function bKF(d){this.a=d},
bKC:function bKC(d,e){this.a=d
this.b=e},
bKE:function bKE(d,e){this.a=d
this.b=e},
bKD:function bKD(d,e){this.a=d
this.b=e},
bKy:function bKy(d){this.a=d},
bcV:function bcV(d,e){this.b=d
this.a=e},
QE:function QE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBu:function aBu(d,e,f){this.b=d
this.c=e
this.a=f},
azZ:function azZ(d,e,f){this.a=d
this.b=e
this.c=f},
auO:function auO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auP:function auP(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cR$=e
_.b9$=f
_.c=_.a=null},
cqx:function cqx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqy:function cqy(d){this.a=d},
cqw:function cqw(d){this.a=d},
cqz:function cqz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqA:function cqA(){},
cqB:function cqB(d,e){this.a=d
this.b=e},
cqC:function cqC(){},
cqD:function cqD(d){this.a=d},
cqt:function cqt(d){this.a=d},
cqu:function cqu(d,e){this.a=d
this.b=e},
cqv:function cqv(d,e,f){this.a=d
this.b=e
this.c=f},
cqo:function cqo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqq:function cqq(d,e){this.a=d
this.b=e},
cqr:function cqr(d,e){this.a=d
this.b=e},
cqp:function cqp(d,e){this.a=d
this.b=e},
cqn:function cqn(){},
cqs:function cqs(){},
bco:function bco(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQw:function cQw(){},
ayL:function ayL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayM:function ayM(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cFt:function cFt(d){this.a=d},
cFs:function cFs(d){this.a=d},
cFB:function cFB(d,e){this.a=d
this.b=e},
cFC:function cFC(d,e){this.a=d
this.b=e},
cFD:function cFD(d){this.a=d},
cFA:function cFA(d){this.a=d},
cFE:function cFE(d){this.a=d},
cFF:function cFF(d,e){this.a=d
this.b=e},
cFG:function cFG(){},
cFH:function cFH(d){this.a=d},
cFv:function cFv(d){this.a=d},
cFw:function cFw(d,e){this.a=d
this.b=e},
cFu:function cFu(d,e){this.a=d
this.b=e},
cFx:function cFx(){},
cFy:function cFy(){},
cFz:function cFz(d,e){this.a=d
this.b=e},
azK:function azK(){},
aGX:function aGX(){},
hct(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bro((w-450*u)/2,(v-900*u)/2,u)},
afE:function afE(){},
f6W:function f6W(d){this.a=d},
aKK:function aKK(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fh4:function fh4(d){this.a=d},
am0:function am0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am1:function am1(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q8$=f
_.LU$=g
_.an7$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSt:function bSt(d){this.a=d},
bSs:function bSs(){},
bSq:function bSq(d){this.a=d},
bSo:function bSo(){},
bSp:function bSp(d){this.a=d},
bSl:function bSl(d,e){this.a=d
this.b=e},
bSm:function bSm(){},
bSn:function bSn(d){this.a=d},
bSr:function bSr(d,e){this.a=d
this.b=e},
bSk:function bSk(d){this.a=d},
bt4:function bt4(d,e){this.b=d
this.a=e},
f6X:function f6X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f6Y:function f6Y(d,e,f){this.a=d
this.b=e
this.c=f},
f6Z:function f6Z(d,e,f){this.a=d
this.b=e
this.c=f},
f7_:function f7_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f70:function f70(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f71:function f71(){},
alZ:function alZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am_:function am_(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q8$=f
_.LU$=g
_.an7$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bS6:function bS6(){},
bSh:function bSh(d,e){this.a=d
this.b=e},
bSi:function bSi(d){this.a=d},
bSj:function bSj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSd:function bSd(){},
bSc:function bSc(d,e){this.a=d
this.b=e},
bSe:function bSe(d,e){this.a=d
this.b=e},
bSf:function bSf(){},
bSg:function bSg(d){this.a=d},
bS8:function bS8(d){this.a=d},
bS9:function bS9(d){this.a=d},
bSa:function bSa(d){this.a=d},
bS7:function bS7(d,e){this.a=d
this.b=e},
bSb:function bSb(d){this.a=d},
bjB:function bjB(d,e){this.b=d
this.a=e},
drP:function drP(){},
a24:function a24(d,e){this.a=d
this.b=e},
alV:function alV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alW:function alW(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q8$=e
_.LU$=f
_.an7$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bRT:function bRT(d){this.a=d},
bRS:function bRS(){},
bRR:function bRR(){},
bRL:function bRL(){},
bRM:function bRM(){},
bRQ:function bRQ(d,e,f){this.a=d
this.b=e
this.c=f},
bRP:function bRP(d){this.a=d},
bRN:function bRN(d,e){this.a=d
this.b=e},
bRO:function bRO(d){this.a=d},
bj0:function bj0(d,e){this.b=d
this.a=e},
aBx:function aBx(){},
bgy:function bgy(){},
aBz:function aBz(){},
bgz:function bgz(){},
aBA:function aBA(){},
bgA:function bgA(){},
uu(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.ja,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.Q,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.n),u,u,u,u,B.Oo,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hll(d,e,f,g,h,i,j){return new C.alX(i,h,d,j,e,f,g,null)},
a6u:function a6u(d,e){this.c=d
this.a=e},
bj7:function bj7(d){this.a=d},
tF:function tF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRK:function bRK(d){this.a=d},
Ir:function Ir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wf:function Wf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blT:function blT(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1I:function e1I(d){this.a=d},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1F:function e1F(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1K:function e1K(d){this.a=d},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e){this.a=d
this.b=e},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1R:function e1R(d,e){this.a=d
this.b=e},
e1S:function e1S(d,e){this.a=d
this.b=e},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e,f){this.a=d
this.b=e
this.c=f},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e){this.a=d
this.b=e},
e1O:function e1O(d){this.a=d},
e1P:function e1P(d){this.a=d},
a_X:function a_X(d,e){this.a=d
this.b=e},
alX:function alX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alY:function alY(d){var _=this
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
bS4:function bS4(d){this.a=d},
bS5:function bS5(d){this.a=d},
bS3:function bS3(d){this.a=d},
bRV:function bRV(d){this.a=d},
bRW:function bRW(d){this.a=d},
bRU:function bRU(d){this.a=d},
bS0:function bS0(d,e,f){this.a=d
this.b=e
this.c=f},
bS1:function bS1(d){this.a=d},
bRY:function bRY(d,e){this.a=d
this.b=e},
bRZ:function bRZ(d,e,f){this.a=d
this.b=e
this.c=f},
bS2:function bS2(){},
bS_:function bS_(d,e){this.a=d
this.b=e},
bRX:function bRX(d){this.a=d},
TV:function TV(d,e){this.c=d
this.a=e},
alU:function alU(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bRv:function bRv(d){this.a=d},
bRw:function bRw(d){this.a=d},
bRG:function bRG(){},
bRF:function bRF(d,e,f){this.a=d
this.b=e
this.c=f},
bRA:function bRA(d,e){this.a=d
this.b=e},
bRz:function bRz(d,e){this.a=d
this.b=e},
bRB:function bRB(d){this.a=d},
bRC:function bRC(d,e){this.a=d
this.b=e},
bRD:function bRD(d,e){this.a=d
this.b=e},
bRy:function bRy(d,e){this.a=d
this.b=e},
bRE:function bRE(d,e,f){this.a=d
this.b=e
this.c=f},
bRx:function bRx(d,e){this.a=d
this.b=e},
ihR(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiU(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fHa(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yW)m.push(l===D.wo?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cE(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cE(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.iX(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.iX(h,a2,a2)-A.iX(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.al(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fH8(u,f),p),new C.fH9(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aM(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aM(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aC(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ihS(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiU(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fHf(v,e)
q=new C.fHd(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.J)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.J)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.J)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.al(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.al(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b7<2>")
d=A.d4(new A.b7(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("cj.E"))
B.d.fi(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eG(l,new C.fHe(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aM(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i2z(d,e,f,g){var w,v,u=C.ihT(d,e)
if(u<=0||f.length<=u)return new A.afi(!1,D.Dt,f)
if(g.q(0,e.a))return new A.afi(!1,D.Dt,f)
w=A.U(f).c
v=A.cW(f,0,A.dB(u,"count",x.S),w).dn(0)
return new A.afi(!0,A.cW(f,u,null,w).dn(0),v)},
i2A(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiU(d3),d2=d1.length
if(d2===0)return D.htv
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.dhh(t))}s=new C.dhy(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhq(r)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dhp(r)
l=A.T(w,x.do)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c4(0,k,new C.dhi()),o)}h=new C.dho(s)
g=new C.dhn(l,r)
p=v.$ti.k("b7<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b7(v,p),new C.dhj(h),o),o.k("M.E"))
e=f.length===0?new A.b7(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.J)(f),++u){t=f[u]
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
a9=new C.dhw(new C.dhs(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dr(v,v.r,v.e),j=a2.gam6(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ez([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.al(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nz(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dhg(a2,new C.dhx(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.J)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dr(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cx<1>")
d2=A.C(new A.cx(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GA(o,new A.o(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KT(c5.a,new A.o(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dhk(c6,b4))
for(d2=new A.ch(a4,a4.$ti.k("ch<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gR(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.o(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eG(j,new C.dhl(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dhm())
c6.push(new C.aKF(new A.o(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bgE(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hAm(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
huw(d,e,f,g,h,i,j,k,l,m,n){return new C.a09(k,f,j,e,l,n,m,d,g,h,i,null)},
aDx(d,e,f,g,h,i,j){return new C.bkr(i,d,e,f,j,h,g,null)},
aqZ:function aqZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF5:function aF5(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e3m:function e3m(d){this.a=d},
e3l:function e3l(d){this.a=d},
e3o:function e3o(d,e){this.a=d
this.b=e},
e3p:function e3p(d,e){this.a=d
this.b=e},
e3q:function e3q(d){this.a=d},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3n:function e3n(d){this.a=d},
e3s:function e3s(d){this.a=d},
e3r:function e3r(d,e){this.a=d
this.b=e},
aqT:function aqT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF2:function aF2(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e2N:function e2N(d){this.a=d},
e2L:function e2L(d){this.a=d},
e2M:function e2M(d){this.a=d},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2I:function e2I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e29:function e29(d){this.a=d},
e2a:function e2a(d,e){this.a=d
this.b=e},
e2r:function e2r(d){this.a=d},
e2p:function e2p(d){this.a=d},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2s:function e2s(d){this.a=d},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2H:function e2H(d,e){this.a=d
this.b=e},
e2o:function e2o(d){this.a=d},
e2n:function e2n(d){this.a=d},
e2m:function e2m(d,e){this.a=d
this.b=e},
e2E:function e2E(){},
e2F:function e2F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2D:function e2D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2x:function e2x(d){this.a=d},
e2y:function e2y(d,e,f){this.a=d
this.b=e
this.c=f},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2v:function e2v(){},
e2A:function e2A(d,e){this.a=d
this.b=e},
e2B:function e2B(d){this.a=d},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2G:function e2G(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d,e){this.a=d
this.b=e},
e2Q:function e2Q(d,e,f){this.a=d
this.b=e
this.c=f},
e2K:function e2K(d,e,f){this.a=d
this.b=e
this.c=f},
e2J:function e2J(d){this.a=d},
e2_:function e2_(d){this.a=d},
e20:function e20(d){this.a=d},
e21:function e21(){},
e22:function e22(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e26:function e26(d,e){this.a=d
this.b=e},
e25:function e25(d,e){this.a=d
this.b=e},
e24:function e24(d){this.a=d},
e27:function e27(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e2P:function e2P(d){this.a=d},
e2j:function e2j(){},
e2k:function e2k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2i:function e2i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2e:function e2e(d,e,f){this.a=d
this.b=e
this.c=f},
e2d:function e2d(d,e,f){this.a=d
this.b=e
this.c=f},
e2b:function e2b(d,e){this.a=d
this.b=e},
e2f:function e2f(d){this.a=d},
e2g:function e2g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2h:function e2h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2X:function e2X(){},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d){this.a=d},
e3_:function e3_(d,e){this.a=d
this.b=e},
e2T:function e2T(d){this.a=d},
e2R:function e2R(d,e){this.a=d
this.b=e},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2V:function e2V(d,e){this.a=d
this.b=e},
e2W:function e2W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e30:function e30(d){this.a=d},
e2S:function e2S(d){this.a=d},
e28:function e28(d){this.a=d},
bgC:function bgC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dhe:function dhe(d){this.a=d},
dhd:function dhd(d,e){this.a=d
this.b=e},
dhf:function dhf(d){this.a=d},
dhc:function dhc(d,e){this.a=d
this.b=e},
fHa:function fHa(d,e){this.a=d
this.b=e},
fHb:function fHb(d){this.a=d},
fHc:function fHc(){},
fH8:function fH8(d,e){this.a=d
this.b=e},
fH9:function fH9(){},
fHf:function fHf(d,e){this.a=d
this.b=e},
fHg:function fHg(d){this.a=d},
fHh:function fHh(){},
fHd:function fHd(d){this.a=d},
fHe:function fHe(d,e){this.a=d
this.b=e},
KT:function KT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GA:function GA(d,e){this.a=d
this.b=e},
bgE:function bgE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhh:function dhh(d){this.a=d},
dhy:function dhy(d){this.a=d},
dhq:function dhq(d){this.a=d},
dhr:function dhr(){},
dhp:function dhp(d){this.a=d},
dhi:function dhi(){},
dho:function dho(d){this.a=d},
dhn:function dhn(d,e){this.a=d
this.b=e},
dhj:function dhj(d){this.a=d},
dhs:function dhs(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dht:function dht(d){this.a=d},
dhu:function dhu(d){this.a=d},
dhv:function dhv(){},
dhw:function dhw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhx:function dhx(){},
dhg:function dhg(d,e,f,g,h,i,j,k,l,m){var _=this
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
dhk:function dhk(d,e){this.a=d
this.b=e},
dhl:function dhl(d){this.a=d},
dhm:function dhm(){},
aKF:function aKF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgF:function bgF(d,e){this.b=d
this.a=e},
dhz:function dhz(){},
dhA:function dhA(d){this.a=d},
dhB:function dhB(d){this.a=d},
dhC:function dhC(){},
bks:function bks(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfH:function bfH(d,e){this.b=d
this.a=e},
byq:function byq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fmF:function fmF(d){this.a=d},
bnL:function bnL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eXO:function eXO(d){this.a=d},
eXN:function eXN(d,e){this.a=d
this.b=e},
a09:function a09(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDv:function aDv(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxu:function dxu(d,e){this.a=d
this.b=e},
dxt:function dxt(d){this.a=d},
dxr:function dxr(d){this.a=d},
dxs:function dxs(d){this.a=d},
dxD:function dxD(d){this.a=d},
dxE:function dxE(d){this.a=d},
dxC:function dxC(d,e){this.a=d
this.b=e},
dxF:function dxF(){},
dxI:function dxI(d){this.a=d},
dxB:function dxB(d,e){this.a=d
this.b=e},
dxH:function dxH(){},
dxJ:function dxJ(d){this.a=d},
dxA:function dxA(d,e){this.a=d
this.b=e},
dxK:function dxK(d){this.a=d},
dxz:function dxz(d){this.a=d},
dxL:function dxL(d){this.a=d},
dxy:function dxy(d){this.a=d},
dxM:function dxM(d){this.a=d},
dxx:function dxx(d){this.a=d},
dxN:function dxN(d){this.a=d},
dxw:function dxw(d){this.a=d},
dxO:function dxO(d){this.a=d},
dxv:function dxv(d,e){this.a=d
this.b=e},
dxG:function dxG(d){this.a=d},
aec:function aec(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkr:function bkr(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeb:function aeb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkq:function bkq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxP:function dxP(d){this.a=d},
dxQ:function dxQ(d,e){this.a=d
this.b=e},
aDw:function aDw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJH:function aJH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aed:function aed(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxZ:function dxZ(d){this.a=d},
Gw:function Gw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hpo(d){var w=d.T,v=x.N
return w.jr(w,new C.cfk(),v,v)},
hUY(d){var w=d.bF
if(w>=0)return w
return 5},
hpq(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hpo(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hpp(d,e){var w=C.hpq(d,e)
if(w!=null&&w.cf(new A.V(Date.now(),0,!1)))return!0
return!1},
hUZ(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a3(C.hpo(d),w,w)
u=C.hpq(d,e)
t=u!=null&&u.cf(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dp(30,0,0,0,0,0).a).aa().ag())
d.T=v},
b17(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b17=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ly(t,B.Jt),$async$b17)
case 3:if(l){u=!0
w=1
break}u=A.lc(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jt,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b17,v)},
cfk:function cfk(){},
hUW(){var w,v=$.or(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
Jn(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$Jn)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bL),$async$Jn)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a3(q,x.N,x.z)
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
return A.i($async$Jn,v)},
a8a(d){return C.hUX(d)},
hUX(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8a=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a8a)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.I(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cL,null),$async$a8a)
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
return A.i($async$a8a,v)},
cfj(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jn(),$async$cfj)
case 3:t=m.hT(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a5(q)
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
return A.i($async$cfj,v)},
Oi(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfj(d),$async$Oi)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jn(),$async$Oi)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dM(A.a3(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8a(s),$async$Oi)
case 9:case 8:u=t
w=1
break
case 5:n=C.hUW()
w=10
return A.b(C.Jn(),$async$Oi)
case 10:s=f
J.aK(s,n,A.I(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8a(s),$async$Oi)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oi,v)},
b16(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b16=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jn(),$async$b16)
case 3:t=f
for(s=J.dm(t),r=s.gdO(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8a(t),$async$b16)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b16,v)},
a8b(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8b=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqY(d,e),$async$a8b)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oi(d),$async$a8b)
case 7:w=4
break
case 5:w=8
return A.b(C.b16(d),$async$a8b)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8b,v)},
aqS(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqS=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqY(f,e),$async$aqS)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aqS)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jn(),$async$aqS)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a5(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqS,v)},
b15(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b15=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b15)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jn(),$async$b15)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a5(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b15,v)},
hV_(){var w,v=$.or(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
aqV(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aqV)
case 3:if(!g){u=null
w=1
break}t=C.hV_()
w=4
return A.b(A.Wg(),$async$aqV)
case 4:s=g
r=B.dS.aN(B.Y.aw(d.f2(),null))
r=B.cP.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.I(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8c(s),$async$aqV)
case 5:p=e?999:2
u=new A.a1k("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqV,v)},
aqU(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqU=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wg(),$async$aqU)
case 3:p=a0
o=J.a5(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a5(n)
l=A.aH(m.h(n,"usesRemaining"))
k=l==null?null:B.i.L(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b15(J.k(l==null?"":l),j),$async$aqU)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c9.cI(0,B.cI.aN(t))
s=C.hpr(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dM(A.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8c(p),$async$aqU)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqU,v)},
hpr(d){var w,v,u,t,s=null
try{w=B.Y.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hV1(A.a3(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h8q(d){var w=0,v=A.j(x.m),u,t,s
var $async$h8q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqU(t[1])
w=1
break}u=null
w=1
break}u=C.hpr(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8q,v)},
hV1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cE(u,new C.cfm(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cfn(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.hT(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cE(n,new C.cfo(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cfp(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqW(h,w,s,r,q)},
aqY(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.O9(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bn(d),$async$aqY)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqY,v)},
cfv(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bn(d),$async$cfv)
case 3:t=s.b8(f,new C.cfw(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cfx())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfv,v)},
Wh(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wh=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqY(e,d),$async$Wh)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oi(e),$async$Wh)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bn(e),$async$Wh)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cft(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a5(r)
if(t.gau(r)){u=null
w=1
break}t=t.dL(r,new C.cfu(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LE(e,o),$async$Wh)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.aqW(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wh,v)},
b1a(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1a=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wh(d,e,f,g),$async$b1a)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hf(A.KP(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1a,v)},
b19(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b19=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wh(d,e,f,g),$async$b19)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqV(r,f),$async$b19)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHI(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b19,v)},
Wi(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wi=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h8q(a0),$async$Wi)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqS(g.a,d,e,f,s,r),$async$Wi)
case 6:if(!a2){if(r)throw A.W(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bDN(e,j),$async$Wi)
case 12:case 11:w=13
return A.b(C.aiE(e,j,s),$async$Wi)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.By(e,i,h),$async$Wi)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bru(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wi,v)},
aqW:function aqW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfr:function cfr(){},
cfs:function cfs(){},
cfq:function cfq(){},
cfm:function cfm(){},
cfn:function cfn(){},
cfo:function cfo(){},
cfp:function cfp(){},
cfw:function cfw(){},
cfx:function cfx(){},
cft:function cft(d){this.a=d},
cfu:function cfu(d){this.a=d},
hhm(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.aqX(w,e,g,i,f,h,null),!0,null,x.H)},
dhb(d,e,f,g,h,i,j,k){return new C.bgB(i,e,k,j,g,f,h,d,null)},
aqX:function aqX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF4:function aF4(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e39:function e39(d){this.a=d},
e3a:function e3a(d,e,f){this.a=d
this.b=e
this.c=f},
e3e:function e3e(d,e){this.a=d
this.b=e},
e3f:function e3f(d){this.a=d},
e36:function e36(d){this.a=d},
e37:function e37(d,e){this.a=d
this.b=e},
e38:function e38(d,e){this.a=d
this.b=e},
e3d:function e3d(d){this.a=d},
e3c:function e3c(d,e){this.a=d
this.b=e},
e3b:function e3b(){},
e3h:function e3h(d){this.a=d},
e3i:function e3i(d,e){this.a=d
this.b=e},
e3g:function e3g(d,e){this.a=d
this.b=e},
dhD:function dhD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgD:function bgD(d,e,f){this.d=d
this.e=e
this.a=f},
ads:function ads(d,e,f){this.c=d
this.d=e
this.a=f},
bgB:function bgB(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgG:function bgG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0t:function a0t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aF3:function aF3(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e31:function e31(d,e){this.a=d
this.b=e},
e32:function e32(d){this.a=d},
e33:function e33(d){this.a=d},
e34:function e34(d){this.a=d},
e35:function e35(d){this.a=d},
a0u:function a0u(d){this.a=d},
blU:function blU(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3j:function e3j(d,e){this.a=d
this.b=e},
b_F(d,e){return new C.b_E(d,e,null)},
b_E:function b_E(d,e,f){this.c=d
this.d=e
this.a=f},
ikl(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
isq(d){return A.bT(B.L,null,new C.fXZ(new C.ui(A.S(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hrl(d,e){return new C.au0(e,d,null)},
aS6(d,e,f,g,h,i,j){var w=C.ikl(i)
if(w!=null)return A.by(e,new A.a6(j,f,new C.a7g(w,!0,null),null),B.aq)
return N.aRs(e,B.c_,f,g,h,i,j)},
lV:function lV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7g:function a7g(d,e,f){this.c=d
this.d=e
this.a=f},
blA:function blA(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
dPC:function dPC(d){this.a=d},
dPD:function dPD(){},
dPE:function dPE(d,e){this.a=d
this.b=e},
blz:function blz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fXZ:function fXZ(d){this.a=d},
fXY:function fXY(d,e){this.a=d
this.b=e},
fXX:function fXX(d,e){this.a=d
this.b=e},
fXW:function fXW(d,e){this.a=d
this.b=e},
au0:function au0(d,e,f){this.c=d
this.d=e
this.a=f},
coP:function coP(d,e){this.a=d
this.b=e},
aN6:function aN6(){},
isa(d){var w=null
return A.cf(w,w,!0,w,new C.fXl(),d,w,!0,!0,x.e2)},
itn(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.h3U(h,g,f,e),d,w,!0,!0,x.N)},
isd(d,e){var w=null
return A.cf(w,w,!0,w,new C.fXq(e),d,w,!0,!0,x.dY)},
isc(d){var w=null
return A.cf(w,w,!0,w,new C.fXp(),d,w,!0,!0,x.c5)},
aV5:function aV5(d,e){this.a=d
this.b=e},
aV4:function aV4(d){this.a=d},
aT5:function aT5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXl:function fXl(){},
h3U:function h3U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXq:function fXq(d){this.a=d},
fXp:function fXp(){},
a_7:function a_7(d,e){this.c=d
this.a=e},
aAf:function aAf(){var _=this
_.d=$
_.c=_.a=_.e=null},
d8O:function d8O(d){this.a=d},
d8P:function d8P(d){this.a=d},
d8N:function d8N(d,e){this.a=d
this.b=e},
d8Q:function d8Q(d){this.a=d},
d8R:function d8R(d){this.a=d},
a_6:function a_6(d){this.a=d},
aAe:function aAe(){this.d=$
this.c=this.a=null},
d8K:function d8K(d){this.a=d},
d8L:function d8L(d){this.a=d},
d8M:function d8M(d){this.a=d},
ZE:function ZE(d){this.a=d},
ayZ:function ayZ(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cH9:function cH9(){},
cHf:function cHf(d){this.a=d},
cHg:function cHg(d){this.a=d},
cHh:function cHh(d){this.a=d},
cHe:function cHe(){},
cHi:function cHi(d){this.a=d},
cHj:function cHj(d){this.a=d},
cHd:function cHd(){},
cHk:function cHk(d,e){this.a=d
this.b=e},
cHc:function cHc(d,e){this.a=d
this.b=e},
cHa:function cHa(d,e){this.a=d
this.b=e},
cHl:function cHl(d){this.a=d},
cHb:function cHb(){},
cHm:function cHm(d){this.a=d},
a2g:function a2g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byi:function byi(){this.d=$
this.c=this.a=null},
fma:function fma(d,e){this.a=d
this.b=e},
fmb:function fmb(d){this.a=d},
fmc:function fmc(d,e){this.a=d
this.b=e},
acv:function acv(d,e){this.a=d
this.b=e},
Gk:function Gk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byg:function byg(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fm8:function fm8(d,e){this.a=d
this.b=e},
ayS:function ayS(d,e){this.c=d
this.a=e},
byh:function byh(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fm9:function fm9(d){this.a=d},
byf:function byf(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPc:function aPc(){},
aPd:function aPd(){},
bFL(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bh(u),s=B.o.D(B.i.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p3(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fVI(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Z1(A.cP(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRI(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l8(85,1280,B.eO),$async$aRI)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fp(),$async$aRI)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hrk()
w=9
return A.b(C.coO(q,r),$async$aRI)
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
return A.i($async$aRI,v)},
aS4(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aS4=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.coL(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gan(g.split(",")):g
p=B.cI.aN(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hg(p,!0,null,o).dg(0,B.h2),$async$aS4)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aS4)
case 10:m=a1
w=11
return A.b(m.b.hs(B.hh),$async$aS4)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eS(B.dN.gaU(l))
k="data:image/png;base64,"+B.cP.gcu().aN(i)
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
return A.i($async$aS4,v)},
fVI:function fVI(){},
ui:function ui(d){this.a=d},
au_:function au_(d,e,f){this.c=d
this.d=e
this.a=f},
aGy:function aGy(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eUY:function eUY(d,e){this.a=d
this.b=e},
eUP:function eUP(d){this.a=d},
eUQ:function eUQ(d){this.a=d},
eUW:function eUW(d,e){this.a=d
this.b=e},
eUV:function eUV(d,e){this.a=d
this.b=e},
eUS:function eUS(d,e){this.a=d
this.b=e},
eUR:function eUR(d,e){this.a=d
this.b=e},
eUT:function eUT(d){this.a=d},
eUU:function eUU(d,e){this.a=d
this.b=e},
eUX:function eUX(d,e){this.a=d
this.b=e},
eUK:function eUK(d,e){this.a=d
this.b=e},
eUO:function eUO(d){this.a=d},
eUN:function eUN(d,e){this.a=d
this.b=e},
eUM:function eUM(d){this.a=d},
eUZ:function eUZ(d,e){this.a=d
this.b=e},
eV_:function eV_(d,e){this.a=d
this.b=e},
eUL:function eUL(d,e){this.a=d
this.b=e},
hEr(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.I(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fVJ(d,e,f){var w=0,v=A.j(x.N),u
var $async$fVJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.aw(C.hEr(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVJ,v)},
bFN(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fVJ(!0,d,e),$async$bFN)
case 4:w=3
return A.b(r.atY(g,d,e.a),$async$bFN)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dS.aN(B.Y.aw(C.hEr(d,e,null),null))
u="NGMY_WS:"+B.kI.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFN,v)},
hvV(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hgY(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.eH(s,t))return!0
if(J.d3(s,"{"))try{w=B.Y.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ipt(d){var w,v,u,t=C.hvV(d)
if(t==null)return null
if(C.hgY(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hgY(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hgY(v))return v}return null},
hgX(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.c9.cI(0,B.cI.aN(J.np(q,8)))
w=t.a(B.Y.aQ(0,v,r))}else w=t.a(B.Y.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hb3(A.a3(u,x.N,x.z))
return t}catch(s){return r}},
bFM(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atX(t[1]),$async$bFM)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hgX(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hgX(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFM,v)},
hgW(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lC(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFi(){var w=0,v=A.j(x.o),u,t
var $async$bFi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hs(),$async$bFi)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hgX(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFi,v)},
hFt(d,e,f,g){return A.bT(B.L,null,new C.h3H(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h3H:function h3H(d,e,f){this.a=d
this.b=e
this.c=f},
aey:function aey(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eV1:function eV1(d,e){this.a=d
this.b=e},
eV2:function eV2(d,e){this.a=d
this.b=e},
eV3:function eV3(d,e){this.a=d
this.b=e},
eV4:function eV4(d,e){this.a=d
this.b=e},
eV0:function eV0(d){this.a=d},
atU:function atU(d,e,f){this.c=d
this.d=e
this.a=f},
bng:function bng(){var _=this
_.c=_.a=_.e=_.d=null},
eUF:function eUF(d,e){this.a=d
this.b=e},
eUG:function eUG(d){this.a=d},
eUH:function eUH(d){this.a=d},
atZ:function atZ(d){this.a=d},
aGx:function aGx(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eUJ:function eUJ(d){this.a=d},
eUI:function eUI(d){this.a=d},
hYf(d,e,f,g,h){return new C.OX(h,g,d,e,f,null)},
aLr:function aLr(d,e){this.a=d
this.b=e},
OX:function OX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGz:function aGz(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eVr:function eVr(){},
eVn:function eVn(d,e){this.a=d
this.b=e},
eVo:function eVo(d){this.a=d},
eV8:function eV8(d){this.a=d},
eV6:function eV6(d){this.a=d},
eV7:function eV7(d){this.a=d},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVe:function eVe(d,e){this.a=d
this.b=e},
eVf:function eVf(d,e){this.a=d
this.b=e},
eVg:function eVg(d,e,f){this.a=d
this.b=e
this.c=f},
eVc:function eVc(d,e,f){this.a=d
this.b=e
this.c=f},
eVa:function eVa(d){this.a=d},
eVb:function eVb(d){this.a=d},
eVd:function eVd(d){this.a=d},
eVu:function eVu(d){this.a=d},
eVt:function eVt(d){this.a=d},
eVv:function eVv(d){this.a=d},
eVs:function eVs(d){this.a=d},
eV5:function eV5(d){this.a=d},
eV9:function eV9(d,e){this.a=d
this.b=e},
eVq:function eVq(d,e){this.a=d
this.b=e},
eVp:function eVp(d,e){this.a=d
this.b=e},
eVk:function eVk(d){this.a=d},
eVl:function eVl(d){this.a=d},
eVm:function eVm(d,e){this.a=d
this.b=e},
eVj:function eVj(d,e){this.a=d
this.b=e},
eVi:function eVi(d,e,f){this.a=d
this.b=e
this.c=f},
bA3:function bA3(){},
Bb(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ah1(d,e,f){return C.idD(d,e,f)},
idD(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ah1=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$ah1)
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
return A.i($async$ah1,v)},
ah0(d,e){return C.idC(d,e)},
idC(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ah0=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ah0)
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
return A.i($async$ah0,v)},
ics(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TA(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCM(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCM=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4n(q),$async$bCM)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aS4(q,!1),$async$bCM)
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
return A.i($async$bCM,v)},
hLF(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aH(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aH(d.h(0,"quantity"))
if(w==null)w=null
v=A.aH(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rn(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rn(p,J.k(u==null?"":u),1,o,q)},
hb3(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cE(w,new C.cGr(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cGs(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lC(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ihN(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wo
case"female":case"f":return D.os
default:return D.yW}},
hAY(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hlm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ihN(v==null?j:J.k(v))
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
m=A.aH(d.h(0,"birthOrder"))
m=m==null?j:B.i.L(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aH(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.L(k)
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ihP(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OK
case"viewer":return D.kX
default:return D.uB}},
ihQ(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hh(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQP(d,e){return B.a.i(e.toLowerCase())===C.Hh(d,e)&&d.y!==D.kX},
uv(d,e){var w,v=d.y
if(v===D.kX)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hh(d,e))return!0
if(v===D.OK)return!0
v=d.e
return new A.N(v,A.hh2(),A.U(v).k("N<1,n>")).q(0,w)},
ih9(d){return J.dI(d,new C.fG_()).gI(0)},
h4s(d){var w=0,v=A.j(x.y),u,t
var $async$h4s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bn(d),$async$h4s)
case 3:u=t.ri(f,new C.h4t(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4s,v)},
bDN(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bn(d),$async$bDN)
case 3:t=g
if(J.ri(t,new C.fDz(e))){w=1
break}if(C.ih9(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDN,v)},
am3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cE(w,new C.bSw(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSx(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bSy(),x.N)
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
p=A.aH(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.L(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ihP(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aU(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.ck)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a3(i,k,j))}return new C.kT(w,v,s,!r,t,g,q,p,o,n,m)},
hBc(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aC(v,0,8)},
Dz(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Dz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Su(d),$async$Dz)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Dz)
case 4:t=f
w=5
return A.b(t.a7e(0),$async$Dz)
case 5:w=6
return A.b(C.ftY(t,l),$async$Dz)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hwv(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p2(l,n),$async$Dz)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hwv(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p2(l,n),$async$Dz)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dz,v)},
ftY(d,e){return C.i9P(d,e)},
i9P(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ftY=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bb(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Y.aQ(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aU(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bb(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Y.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hb3(A.a3(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bb(a9)+"_"+n))
i=C.ics(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4n(h),$async$ftY)
case 17:g=b1
if(g!=null){i=i.TA(g)
p=!0}case 16:J.c5(q,i)
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
case 8:J.SD(q,new C.ftZ())
if(p&&J.ad(q)!==0)C.p2(a9,q)
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
return A.i($async$ftY,v)},
bEe(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Su(d),$async$bEe)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Dz(r),$async$bEe)
case 4:t=p.aU(g)
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
return A.i($async$bEe,v)},
hwv(d){var w,v,u,t
try{w=B.Y.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cE(v,new C.fpJ(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fpK(),u),u.k("M.E"))
B.d.aZ(v,new C.fpL())
return v}catch(t){v=A.a([],x.D)
return v}},
p2(d,e){return C.is_(d,e)},
is_(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p2=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Su(b2),$async$p2)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$p2)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bb(a8)
p=A.aS(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.Y.aQ(0,p,null)),new C.fX9(),a2).fM(0)
a2=J.b8(b3,new C.fXa(),a2).bY(0,new C.fXb())
n=A.d4(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eH(n,m)?17:18
break
case 17:a5=C.Bb(a8)
l=A.aS(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9t(l),$async$p2)
case 19:t=21
a5=C.Bb(a8)
k=A.aS(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Y.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9t(a5==null?null:J.k(a5)),$async$p2)
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
return A.b(C.ah0(r,"ngmy_worksheet_item_v3_"+C.Bb(a8)+"_"+m),$async$p2)
case 29:w=30
return A.b(C.ah0(r,"ngmy_worksheet_thumb_v3_"+C.Bb(a8)+"_"+m),$async$p2)
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
case 14:case 10:a2=J.cC(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bCM(h),$async$p2)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ah1(r,"ngmy_worksheet_thumb_v3_"+C.Bb(a8)+"_"+a4,f),$async$p2)
case 40:g=i.TA(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ah0(r,"ngmy_worksheet_thumb_v3_"+C.Bb(a8)+"_"+a4),$async$p2)
case 41:g=i.TA(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ah0(r,"ngmy_worksheet_thumb_v3_"+C.Bb(a8)+"_"+a4),$async$p2)
case 42:case 34:a4=i.a
w=43
return A.b(C.ah1(r,"ngmy_worksheet_item_v3_"+C.Bb(a8)+"_"+a4,B.Y.aw(g.aj(),null)),$async$p2)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ah1(r,"ngmy_worksheets_index_v3_"+C.Bb(a8),B.Y.aw(q,null)),$async$p2)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fXc(q))
a4=a3.$ti.k("cM<1,a8<n,@>>")
a7=A.C(new A.cM(a3,new C.fXd(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ah1(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.aw(a0,null)),$async$p2)
case 45:w=46
return A.b(J.hKJ(r),$async$p2)
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
return A.i($async$p2,v)},
M4(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$M4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Dz(d),$async$M4)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h4r(e))
if(r===-1)s.c3(t,0,e)
else s.n(t,r,e)
u=C.p2(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$M4,v)},
bE_(d,e){var w=0,v=A.j(x.H),u
var $async$bE_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Dz(d),$async$bE_)
case 2:u=g
J.nQ(u,new C.fGt(e))
w=3
return A.b(C.p2(d,u),$async$bE_)
case 3:return A.h(null,v)}})
return A.i($async$bE_,v)},
Hj(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hj)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aS(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aQ(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cE(j,new C.fJH(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fJI(),s),s.k("M.E"))
B.d.aZ(r,new C.fJJ())
k=r}}catch(h){}w=4
return A.b(C.fqw(d),$async$Hj)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.iac(k,p,d)
j=A.U(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fJK(),s),s.k("ak.E"))
n=B.Y.aw(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RF(d,o),$async$Hj)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fJL(d),j),j.k("M.E"))
if(m.length!==0)C.aQz(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hj,v)},
fWW(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fWW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RF(d,e),$async$fWW)
case 3:t=J.dI(e,new C.fWX(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQz(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWW,v)},
a3T(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3T=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3T)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aS(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aQ(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cE(m,new C.h4m(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h4n(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qD(o,new C.h4o(e))
if(B.a.i(e.x).length===0&&C.uv(e,d)){m=B.a.i(d.toLowerCase())
p=e.aG6(e.y===D.kX?D.kX:D.uB,m)}else p=e
if(q===-1)J.pW(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RF(d,o),$async$a3T)
case 3:w=C.uv(p,d)?4:5
break
case 4:w=6
return A.b(C.aQy(C.Hh(p,d),p),$async$a3T)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3T,v)},
aQL(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hj(d),$async$aQL)
case 2:u=g
t=J.cC(u)
s=A.nz(t.eP(u,new C.fGa(e)))
t.bt(u,new C.fGb(e))
w=3
return A.b(C.RF(d,u),$async$aQL)
case 3:w=s!=null&&C.aQP(s,d)?4:5
break
case 4:w=6
return A.b(C.fpN(e),$async$aQL)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQL,v)},
aiU(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h4x(),v),v.k("M.E"))
return w},
hex(d,e){var w,v=d.f,u=A.nz(new A.Y(v,new C.fFF(e),A.U(v).k("Y<1>")))
v=C.aiU(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fFG(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fFH())
return v},
ihT(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hFx(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hex(d,u),new C.h3V(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ijq(d,e){var w
if(e==null||e.length===0)return 1
w=C.hex(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fKw(),A.U(w).k("N<1,G>")).f1(0,B.xM)+1},
irT(d){var w,v=C.aiU(d)
if(v.length===0)return null
w=new A.Y(v,new C.fWQ(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ihO(d){return A.I(["id",d.a,"name",d.b,"gender",C.hAY(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ijl(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.J)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yW?n:q.c
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
d=q.aG1(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPT(a1,w,a3.d,a2.y,s,a0,v)},
Bn(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bn)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aS(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Y.aQ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cE(p,new C.fJE(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fJF(),s),s.k("M.E"))
B.d.aZ(p,new C.fJG())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bn,v)},
aiE(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiE=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uB:D.kX
a7=C.Hh(b2,b3)
w=2
return A.b(C.Bn(b1),$async$aiE)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fWL(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDN(b1,b2),$async$aiE)
case 5:case 4:if(b0===-1){u=b2.aG6(a6,a7)
a9.c3(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.yW?i:l.c
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
s.n(0,m,l.aG1(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b7<2>")
s=A.C(new A.b7(s,k),k.k("M.E"))
k=a5?D.uB:D.kX
u=t.cPV(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RF(b1,a8),$async$aiE)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQy(B.a.i(b3.toLowerCase()),u),$async$aiE)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiE,v)},
hwU(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hEA(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.I(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.I(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hwV(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hEA(),t),t.k("ak.E"))
return A.I(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i7D(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.am3(A.a3(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hh2(),A.U(j).k("N<1,n>")).bY(0,new C.fqj())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uB
else s=B.d.q(t,u)?D.OK:D.kX
return w.aG6(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.am3(A.a3(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cE(h,new C.fqk(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fql(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fqm(),x.N).bY(0,new C.fqn())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uB
else s=B.d.q(t,u)?D.OK:D.kX
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
j=A.aH(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.L(j)
if(j==null)j=0
return new C.kT(h,r,p,!m,t,o,l,j,v,s,B.cd)},
fqw(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fqw=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fqA()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.lH("family_trees","*",null,A.I(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bL),r.$2(A.lH("family_trees","*",A.I(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bL),"collaborator"),r.$2(A.lH("family_trees","*",null,A.I(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bL),"public")],x.cl),x.fO),$async$fqw)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h7(l,o)
J.h7(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b7<2>")
h=A.cE(new A.b7(l,h),new C.fqx(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fqy(),l),l.k("M.E"))
B.d.aZ(l,new C.fqz())
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
return A.i($async$fqw,v)},
iac(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dL(e,new C.fuG(),v).bY(0,new C.fuH())
t=A.d4(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hh(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kX){m=q.e
m=!new A.N(m,A.hh2(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ijl(l,v)
o=C.Hh(k,w)
p=v.d
s.n(0,u,o===w?k.bfm(p,D.uB):k.bfm(p,v.y))}j=s.$ti.k("b7<2>")
j=A.C(new A.b7(s,j),j.k("M.E"))
B.d.aZ(j,new C.fuI())
return j},
RF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RF)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fxz(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.aw(s,null)),$async$RF)
case 3:return A.h(null,v)}})
return A.i($async$RF,v)},
aQy(d,e){return C.ifx(d,e)},
ifx(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQy=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mc("family_trees",A.a([C.hwU(e,d)],p),null,B.cL),$async$aQy)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mc("family_trees",A.a([C.hwV(e,d)],p),null,B.cL),$async$aQy)
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
return A.i($async$aQy,v)},
aQz(d,e){return C.ify(d,e)},
ify(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQz=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fCP(d),n),m)
r=l
w=7
return A.b(A.mc("family_trees",r,null,B.cL),$async$aQz)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fCQ(d),n),m)
p=k
w=8
return A.b(A.mc("family_trees",p,null,B.cL),$async$aQz)
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
return A.i($async$aQz,v)},
fpN(d){return C.i6R(d)},
i6R(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fpN=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.S4("family_trees",A.I(["id",d],x.N,x.z),null,B.cL),$async$fpN)
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
return A.i($async$fpN,v)},
rn:function rn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lC:function lC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cGu:function cGu(){},
cGt:function cGt(){},
cGr:function cGr(){},
cGs:function cGs(){},
Iq:function Iq(d,e){this.a=d
this.b=e},
hV:function hV(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
am2:function am2(d,e){this.a=d
this.b=e},
fG_:function fG_(){},
h4t:function h4t(d){this.a=d},
fDz:function fDz(d){this.a=d},
kT:function kT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bSA:function bSA(){},
bSz:function bSz(){},
bSw:function bSw(){},
bSx:function bSx(){},
bSy:function bSy(){},
ftZ:function ftZ(){},
fpJ:function fpJ(){},
fpK:function fpK(){},
fpL:function fpL(){},
fX9:function fX9(){},
fXa:function fXa(){},
fXb:function fXb(){},
fXc:function fXc(d){this.a=d},
fXd:function fXd(){},
h4r:function h4r(d){this.a=d},
fGt:function fGt(d){this.a=d},
fJH:function fJH(){},
fJI:function fJI(){},
fJJ:function fJJ(){},
fJK:function fJK(){},
fJL:function fJL(d){this.a=d},
fWX:function fWX(d){this.a=d},
h4m:function h4m(){},
h4n:function h4n(){},
h4o:function h4o(d){this.a=d},
fGa:function fGa(d){this.a=d},
fGb:function fGb(d){this.a=d},
h4x:function h4x(){},
fFF:function fFF(d){this.a=d},
fFG:function fFG(d,e){this.a=d
this.b=e},
fFH:function fFH(){},
h3V:function h3V(d){this.a=d},
fKw:function fKw(){},
fWQ:function fWQ(){},
fJE:function fJE(){},
fJF:function fJF(){},
fJG:function fJG(){},
fWL:function fWL(d){this.a=d},
fqj:function fqj(){},
fqk:function fqk(){},
fql:function fql(){},
fqm:function fqm(){},
fqn:function fqn(){},
fqA:function fqA(){},
fqB:function fqB(d){this.a=d},
fqx:function fqx(d){this.a=d},
fqy:function fqy(){},
fqz:function fqz(){},
fuG:function fuG(){},
fuH:function fuH(){},
fuI:function fuI(){},
fxz:function fxz(){},
fCP:function fCP(d){this.a=d},
fCQ:function fCQ(d){this.a=d},
cGv:function cGv(d,e){this.a=d
this.b=e},
cGw:function cGw(d,e){this.a=d
this.b=e},
aID:function aID(d,e,f){this.a=d
this.b=e
this.c=f},
baH:function baH(){this.b=this.a=0},
baG:function baG(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byj:function byj(){},
xk(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gnt()),2,"0")+":"+B.a.b_(B.o.u(w.gGL()),2,"0")},
hYc(){var w,v=$.or(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.he(u)},
atV(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atV)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bL),$async$atV)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a3(q,x.N,x.z)
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
return A.i($async$atV,v)},
atW(d){return C.hYd(d)},
hYd(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atW)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.I(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cL,null),$async$atW)
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
return A.i($async$atW,v)},
atY(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$atY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atY)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hYc()
w=4
return A.b(C.atV(),$async$atY)
case 4:r=h
q=B.a.i(e)
p=B.dS.aN(t)
J.aK(r,s,A.I(["ownerEmail",q,"projectId",f,"payload",B.cP.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.atW(r),$async$atY)
case 5:u=new A.a1k("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atY,v)},
atX(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$atX)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atV(),$async$atX)
case 4:q=f
p=J.a5(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a5(o)
m=A.aH(n.h(o,"usesRemaining"))
l=m==null?null:B.i.L(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.c9.cI(0,B.cI.aN(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dM(A.a3(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.atW(q),$async$atX)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atX,v)},
hrk(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cN.az(999999)},
hYe(d){var w,v,u,t,s,r,q
try{w=A.ahw(d)
if(w==null)return d
v=w
if(J.Ma(v)>960||J.M9(v)>960){s=v
r=J.Ma(v)>=J.M9(v)?960:null
v=A.aht(s,J.M9(v)>J.Ma(v)?960:null,B.Q7,r)}s=v
u=A.ano(82).TX(s,B.zA)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
coO(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$coO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hYe(e)
$.coK.n(0,s,t)
u=C.bFP(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coO,v)},
b4n(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4n=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.eH(l,",")?B.d.gan(J.lL(l,",")):l
q=B.cI.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hrk()
w=7
return A.b(C.coO(p,q),$async$b4n)
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
return A.i($async$b4n,v)},
coL(d){var w=0,v=A.j(x.T),u,t,s
var $async$coL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.coN(s),$async$coL)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coL,v)},
a9t(d){var w=0,v=A.j(x.H),u,t
var $async$a9t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hEs(d)
if(t==null){w=1
break}$.coK.W(0,t)
w=3
return A.b(C.bFO(t),$async$a9t)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9t,v)},
bFP(d,e){return C.ipw(d,e)},
ipw(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFP=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPq
w=7
return A.b(n==null?$.aPq=N.hdm():n,$async$bFP)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.n0(r,"thumbs","readwrite")
B.j9.mx(J.n_(p,"thumbs"),q,l)
w=8
return A.b(J.pV(p),$async$bFP)
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
return A.i($async$bFP,v)},
bFO(d){return C.ipu(d)},
ipu(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFO=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPq
w=7
return A.b(o==null?$.aPq=N.hdm():o,$async$bFO)
case 7:r=f
q=J.n0(r,"thumbs","readwrite")
B.j9.Gk(J.n_(q,"thumbs"),m)
w=8
return A.b(J.pV(q),$async$bFO)
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
return A.i($async$bFO,v)}},D,Aw,Ax,A_,Ay,Az,N
J=c[1]
A=c[0]
B=c[2]
Q=c[257]
A0=c[163]
S=c[60]
A9=c[232]
L=c[212]
H=c[35]
E=c[222]
P=c[119]
Aa=c[235]
T=c[132]
Ab=c[134]
U=c[228]
Ac=c[114]
Ad=c[198]
A1=c[116]
Ae=c[231]
Af=c[44]
R=c[230]
M=c[90]
A2=c[87]
Ag=c[169]
A3=c[128]
A4=c[172]
Ah=c[121]
A5=c[199]
Ai=c[251]
Aj=c[189]
Ak=c[202]
A6=c[197]
Al=c[254]
Am=c[73]
A7=c[256]
An=c[79]
G=c[255]
Ao=c[259]
Ap=c[133]
Aq=c[118]
A8=c[216]
Ar=c[34]
V=c[117]
O=c[192]
As=c[203]
W=c[258]
At=c[155]
Au=c[124]
X=c[244]
Y=c[43]
F=c[96]
Av=c[33]
I=c[104]
K=c[138]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[250]
Aw=c[78]
Ax=c[210]
A_=c[253]
Ay=c[252]
Az=c[64]
N=c[61]
C.apC.prototype={}
C.b_G.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjF(),f=h.x!=null&&h.zH(i).length===0
if(h.x!=null)w=f?B.b1:B.bC
else w=h.gUC()?B.bC:B.dX
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.L(D.boG,B.r,1)
s=x.p
r=A.q(i,A.x(A.a([A.q(i,D.f8T,B.f,i,i,new A.p(B.b1.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.hb,i,i,i),B.X,D.fEE,B.ay,A.d(C.xk(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fAl,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,D.b7_,i,i,i,i,B.a0n,i,i,i)
q=A.m(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b1.j(0.28),B.r,1)
n=A.hfB(h.d)
o=A.q(B.A,C.b_F(A.fMR(h.e,n),30),B.f,i,i,new A.p(B.m7,i,o,i,i,i,B.a7),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fvq,B.K,i,i)
m=A.m(14)
l=A.L(B.aO,B.r,1)
q=A.q(i,A.x(A.a([o,B.U,n,B.bH,D.fEX,B.af,A.q(i,A.x(A.a([D.fV8,B.bH,A.d(A.Bp(h.c),i,i,i,i,i,i,D.fq7,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.alJ,i,i,i)
p=A.m(16)
m=A.L(B.aO,B.r,1)
l=j.aTh("Original due",C.xk(h.r,!1))
n=j.aTh("Current due",C.xk(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.X,A.q(i,A.x(A.a([l,B.U,n,B.X,A.q(i,A.d(h.gaNh(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.n),i,i,i,i,B.C8,i,i,1/0),B.X,j.ckH(),B.U,j.c7t(g,f)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bi,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fFU,B.ay,A.d(q,i,i,i,i,i,i,D.fuD,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bi,i,i,1/0)],s))}if(h.gaHN()){q=A.m(14)
o=A.L(B.cu,B.r,1.6)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fWt,B.U,A.by(A.m(12),A.e8(new A.a6(1/0,88,A.b4(i,i,i,new A.X2(h.ax,B.T,D.fdD,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GK,i,i,i)],s))}p.push(B.aB)
p.push(D.fOg)
return A.q(i,A.x(A.a([r,new A.D(B.a0c,A.x(p,B.al,i,B.e,B.j,0,B.p),i)],s),B.al,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.p(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTh(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abk,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fra,w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
ckH(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aat(B.dX,u,"Not paid yet")
w=t.zH(null).length
v=w===0?B.b1:B.bC
return this.aat(v,u,C.xk(t.x,!0))},
c7t(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aat(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aat(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abk,u,u,u)
v=A.U(d).k("N<1,h2>")
v=A.C(new A.N(d,new C.c8k(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bV(B.bG,v,B.bs,u,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
aat(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abk,w,w,w),1),new A.dq(1,B.cr,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e_,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.bcT.prototype={
a4(d,e){new A.X2(this.b,B.T,e,!0,3.5,null).a4(d,e)},
aD(d){return d.b!==this.b}}
C.apO.prototype={
S(){return new C.aEx(A.a([],x.bp))},
ge3(){return this.c}}
C.aEx.prototype={
Y(){this.a2()
this.Jg()},
Jg(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a38(t.a.c),$async$Jg)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQu(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jg,v)},
aVe(d,e){var w,v=null,u=this.a.d.a,t=u?B.T:B.aP,s=A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bq).j(0.22)
w=A.m(10)
return A.bt(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bi,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bq).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b4D),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVd(d){return this.aVe(d,null)},
Q3(d){return this.cok(d)},
cok(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I2:B.eO
w=7
return A.b(new A.hW().CH(72,900,900,n),$async$Q3)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fp(),$async$Q3)
case 8:p=f
n=B.cP.gcu().aN(p)
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
if(n!=null)n.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q3,v)},
b3o(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.T:B.aP,o=A.m(10),n=A.L((q?B.bu:B.bq).j(0.18),B.r,1)
if(d)q=B.cG
else q=s.a.d.a?B.bu:B.bq
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cG
else u=s.a.d.a?B.bu:B.bq
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cG,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cf)
q=A.a([q,B.ae,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bu:B.bq,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cf))
return A.q(r,A.A(q,B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.n),r,r,r,B.jG,D.bBy,r,r,r)},
DE(d){return this.bDS(d)},
bDR(){return this.DE(null)},
bDS(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DE=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b6,B.aQ),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.iZ(a4)
p=a5.c
a4=a4===q?B.o.u(B.i.L(p)):B.i.ac(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aQ),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aQ),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.bZ(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.bZ(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hfB(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wY?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",a4,new C.dQd(),new C.dQe(a2,t,a5,r,new C.dQf(a2,t),o,n,j),B.eH,!0,x.y),$async$DE)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d1(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.M(x.q).f.U(D.fk9)
w=1
break}a0=a2.d
if(a0==null){t.c.M(x.q).f.U(D.fiP)
w=1
break}a1=A.fMR(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wY?"male":"female"
w=7
return A.b(A.aiT(a3,A.ho1(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DE)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wY?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bZ(a3.gcl(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bZ(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cSg(a2.a)
w=8
return A.b(A.aiT(t.a.c,a5),$async$DE)
case 8:case 5:w=9
return A.b(t.Jg(),$async$DE)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DE,v)},
aVU(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cG.j(0.14)
else w=this.a.d.a?B.T:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cG
else s=(this.a.d.a?B.bu:B.bq).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_F(d,18)
if(g)q=B.cG
else q=this.a.d.a?B.aP:B.as
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,A.q(p,A.A(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bc,B.j,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SU(d){return this.cGd(d)},
cGd(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",s,new C.dQx(),new C.dQy(t,d),B.h1,!0,x.y),$async$SU)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiT(t.a.c,d),$async$SU)
case 7:w=8
return A.b(t.Jg(),$async$SU)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SU,v)},
Q2(d,e){return this.bOJ(0,e)},
bOJ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lo(s,"Cancel","Delete",e.b+" \xb7 "+A.Bp(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q2)
case 3:if(!g){w=1
break}w=4
return A.b(C.fGh(t.a.c,e.a),$async$Q2)
case 4:w=5
return A.b(t.Jg(),$async$Q2)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
agh(d){return this.ci6(d)},
ci6(d){var w=0,v=A.j(x.H),u=this,t
var $async$agh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dQr(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agh)
case 2:return A.h(null,v)}})
return A.i($async$agh,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.erG
w=J.dI(m.d,new C.dQz())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dQA())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dQB())
w=A.m(18)
s=m.a.d.a
r=s?D.cBb:D.aCG
q=A.L(s?B.cG.j(0.35):B.cG.j(0.18),B.r,1)
s=A.q(l,D.c23,B.f,l,l,new A.p(B.cG.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aJ(!1,B.a3,!0,A.m(12),A.aP(!1,A.m(12),!0,D.er1,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQC(m),l,l,l,l,l,l,l),B.f,B.cG,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.j,0,l,l)
o=A.E(m.cCi("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bp(t)
r=A.a([A.q(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9y(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a9(B.aA,B.aF,B.x,r,l,l),B.n),l,l,l,l,B.alG,l,l,l),B.aB],p)
if(J.cq(m.d)){w=m.a.d.a
s=w?B.ec:B.c
q=A.m(18)
o=A.L((w?B.bu:B.bq).j(0.12),B.r,1)
n=A.q(l,D.bXR,B.f,l,l,new A.p(B.cG.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.x(A.a([n,B.af,w,B.ay,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bq,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.n),l,l,l,l,D.bEa,l,l,1/0))}else{w=m.gcnB()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bFR,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bq,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.j,0,B.p)},
b9y(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.L((v.a.d.a?B.bu:B.bq).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bq,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cG
else w=v.a.d.a?B.aP:B.as
return A.q(u,A.x(A.a([q,B.bH,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.n),u,u,u,u,B.ey,u,u,u)},
cCi(d,e){return this.b9y(!1,d,e)},
cnC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zH(j).length,h=d.biV()
if(d.x!=null){w=d.zH(j).length
v=w===0?B.cG:B.bC}else if(d.gUC())v=B.bC
else{if(h)w=B.cG
else w=k.a.d.a?B.bu:B.bq
v=w}if(d.x!=null){w=d.zH(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xk(u,!1)}else{u.toString
t="Paid "+C.xk(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xk(w,!1)+" \xb7 "+i+" missed":"Due "+C.xk(w,!1)}w=k.a.d.a?B.ec:B.c
u=A.m(18)
if(d.gUC()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bu:B.bq).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bp:B.m7
o=A.L(d.gUC()&&d.x==null?B.bC.j(0.45):B.cG.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hfB(d.d)
o=A.q(B.A,A.da(C.b_F(A.fMR(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a7),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.as
m=x.p
n=A.a([new A.dq(1,B.cr,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHN())B.d.v(n,A.a([B.e3,A.X(B.Pb,B.cG.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.j,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.Bp(d.c)
l=k.a.d.a?B.aP:B.as
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aJ(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Ai.alu,A.A(A.a([o,B.be,p,B.ae,A.x(A.a([n,B.bH,A.X(B.eJ,(k.a.d.a?B.bu:B.bq).j(0.5),j,j,j,18)],m),B.dL,j,B.e,B.j,0,B.p)],m),B.l,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQt(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.p(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uP.prototype={}
C.alR.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bn
u=v?B.E:B.l
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.q(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a7),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a6:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iK,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayP,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H0,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.A(l,B.l,a0,B.e,B.Q,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bAJ,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cH:B.bt,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fI,A.x(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.fer)
a2=A.a([A.A(n,B.l,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.we,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a9(B.a6,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lN,A.x(a2,B.l,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hu,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a9(B.aA,B.aF,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bC0,a0,a0,a0,a0)}}
C.aWp.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bn?B.bn:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bt:B.cH,q,B.V,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.j,0,q,q),B.cU,n],m)
if(p.z)o.push(new A.D(B.us,n,q))
return new A.D(B.d3,A.x(o,B.l,q,B.e,B.Q,0,B.p),q)}}
C.TU.prototype={
S(){return new C.bgw()}}
C.bgw.prototype={
gc2h(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.erB,D.erH],l)
for(w=0;w<8;++w){v=D.a4D[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HO:B.zi
q=t===s
r=A.X(r,q?B.eL:B.bW,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bm,A.d(v.b,n,n,n,n,n,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bd,A.d(v.c,n,1,B.a2,n,n,n,B.AJ,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.eL,2,B.r,-1)
s=new A.p(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eI,A.x(A.a([new A.D(B.n0,new A.c7(B.aL,B.e,B.j,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dy(!0,new C.alR(v,q.d,q.e,new C.dg9(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dga(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bCl,A.bI(D.h1_,n,new C.dgb(o,d),A.bo(B.b9,n,n,n,n,B.oT,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cd(k,n,n,D.bGJ,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nv.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bfy(d,e,f){return new C.nv(this.a,e,d,f)}}
C.Ip.prototype={
wW(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ip(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFV(d){var w=null
return this.wW(w,w,w,w,w,d,w,w,w,w,w,w)},
cNS(d){var w=null
return this.wW(w,w,w,w,d,w,w,w,w,w,w,w)},
bfw(d,e,f){var w=null
return this.wW(d,w,w,w,w,w,w,w,e,w,f,w)},
cOw(d){var w=null
return this.wW(w,w,w,w,w,w,d,w,w,w,w,w)},
cOF(d){var w=null
return this.wW(w,w,w,w,w,w,w,w,w,d,w,w)},
cNQ(d){var w=null
return this.wW(w,w,w,d,w,w,w,w,w,w,w,w)},
cOH(d){var w=null
return this.wW(w,w,w,w,w,w,w,w,w,w,w,d)},
cNN(d){var w=null
return this.wW(w,w,d,w,w,w,w,w,w,w,w,w)},
cNI(d){var w=null
return this.wW(w,d,w,w,w,w,w,w,w,w,w,w)},
Gc(d){var w=null
return this.wW(w,w,w,w,w,w,w,d,w,w,w,w)},
cOP(d,e,f,g,h,i,j,k,l,m,n){return this.wW(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.I(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLm(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRh(d),k=A.aH(d.h(0,"emblem")),j=k==null?o:B.i.L(k),i=A.aH(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DG.geu(D.DG))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a6l)
q=l.$2("frame",D.a5F)
l=l.$2("texture",D.a5B)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOP(p,u,t,q,r,A.rc(d.h(0,"ribbon"))?A.GU(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_v.prototype={
S(){return new C.aBv(A.a([],x.I),D.OJ)},
ge3(){return this.c}}
C.aBv.prototype={
Y(){var w,v=this
v.a2()
v.f=A.Ag(0,1)
w=$.aw()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lh()
w=v.a
C.bEa(w.c,w.d).bG(new C.dgQ(v),x.fL)},
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
v.a3()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LE(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dgE(t,r))
t.axE()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gaud(){var w,v=this
if(!J.cq(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axE(){var w,v,u=this.gaud(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cgx(d){this.m(new C.dgB(this,d))
this.axE()},
NX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nv(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSs(r.c,r.d,s),$async$NX)
case 3:w=4
return A.b(t.lh(),$async$NX)
case 4:if(t.c==null||J.cq(t.d)){w=1
break}q=J.qD(t.d,new C.dgc(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dgd(t,p))
t.axE()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BH(p+1,B.cw,B.kT),$async$NX)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NX,v)},
Bn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaud()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSs(o.c,o.d,new C.nv(s,r,q,new A.V(p,0,!1))),$async$Bn)
case 3:w=4
return A.b(t.lh(),$async$Bn)
case 4:if(t.c==null){w=1
break}t.m(new C.dgF(t))
case 1:return A.h(u,v)}})
return A.i($async$Bn,v)},
OD(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaud()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dgl(r),s,null,!0,!0,x.y),$async$OD)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDW(s.c,s.d,r.a),$async$OD)
case 4:t.m(new C.dgm(t))
w=5
return A.b(t.lh(),$async$OD)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UF(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OD,v)},
z3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bn(),$async$z3)
case 5:case 4:if(t.c==null){w=1
break}w=J.cI(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.RW(s,r.r,o,p,q),$async$z3)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hF5(s,r.x,r.r),$async$z3)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LE(s.c,s.d),$async$z3)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nv(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.By(r.c,r.d,l),$async$z3)
case 11:w=12
return A.b(t.lh(),$async$z3)
case 12:r=t.c
if(r==null){w=1
break}r.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z3,v)},
a1t(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bn(),$async$a1t)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz1(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zL,new C.dgC(t),new C.dgD())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mO("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gR(o)
p.push(new H.mO(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hhi(o,new H.rL(s,r,"",p,new H.v4(q.d,null,null,null,null,"","","")),null),$async$a1t)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
Ol(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Ol=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bn(),$async$Ol)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.agq,null,new C.dgh(t),s,!0,!0,!0,I.a9s,!1,!1,x.N),$async$Ol)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNS(r)
t.m(new C.dgi(t,q))
s=t.a
w=7
return A.b(C.Sx(s.c,s.d,q),$async$Ol)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ol,v)},
XU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.agq,null,new C.dgn(t),r,!0,!0,!0,I.a9s,!1,!1,x.e),$async$XU)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dgo(t,s))
r=t.a
w=4
return A.b(C.Sx(r.c,r.d,s),$async$XU)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BH(0,B.dH,B.mX)
case 1:return A.h(u,v)}})
return A.i($async$XU,v)},
bUs(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcw()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz1(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1v()
if(r.e)w=D.af7
else if(J.cq(r.d)){w=r.y
v=r.gz1(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fpt,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.D(X.amI,new C.ZN(w,v,0,q),q),q),B.bA,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bA],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.f8F,B.f,q,q,new A.p(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dK.j(0.45),B.I,18)],x.V),E.wQ,B.n),q,q,q,q,B.Oo,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKn(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bTX,D.h0r,r.gaOZ(),q))
B.d.v(u,w)}w=A.at(A.ci(A.x(u,B.l,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dW:B.Bj
u=A.x(A.a([new A.D(D.bDq,w,q),A.E(A.JO(v,new C.dgO(r),J.ad(r.d)+1,q,r.gcgw(),u,B.aL),1),r.bGM()],x.p),B.l,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c4(q,D.Z9,new A.an(B.a0,q,B.b2,B.t,A.a([D.aQ5,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1v(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KM(B.ed,"AI",h.gbEE(),!0))
if(h.a.f)f.push(new C.KM(B.ml,"Cover",h.gbPl(),!1))
if(h.a.f)f.push(new C.KM(B.wK,"Header",h.gbKi(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KM(B.uS,"Print",h.gcpE(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hI:B.j4
t=v?"Save":"Edit"
f.push(new C.KM(u,t,v?h.gcvY():new C.dgy(h),!1))}if(h.a.f)f.push(new C.KM(B.hW,"Add page",h.gaOZ(),!1))
v=C.hAX(h.y.Q)
u=h.gz1(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dGk
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ko.j(0.5),1,B.r,-1)
j=A.q(g,A.X(l.a,D.kO,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a9(B.a6,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kO.j(0.85)
p.push(new A.bz(1,B.bd,A.aA(B.c5,A.x(A.a([k,B.bH,A.d(l.b,g,1,g,g,g,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.alR(v,u,t+" \xb7 "+s+" "+r,new C.dgz(h),A.A(p,B.l,g,B.e,B.j,0,g,g),g)},
Am(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Am=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bn(),$async$Am)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3n(B.d.aM(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dge(t,p),s,null,!0,!0,x.N),$async$Am)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z3(),$async$Am)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ee(),$async$Am)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FQ("Swahili (Kiswahili)",!0),$async$Am)
case 18:w=16
break
case 17:w=19
return A.b(t.cGR(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Am)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Am,v)},
ZP(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.L(E.ko.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aP(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.wQ,B.a7),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KG,w,w,w),A.d(g,w,w,w,w,w,w,B.AK,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.l,w,B.e,B.j,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.bi,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgA(d,h),w,w,w,w,w,w,w),w)},
Ee(){return this.bTW()},
bTW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ee=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dgr(r),a7,null,!0,!0,x.ei),$async$Ee)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dgs(o),a7,null,!0,!0,x.H).fv(new C.dgt(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.c5(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zL[a1]
J.c5(j,i.a)}w=8
return A.b(C.ai1(a0,a7,new C.dgu(o),d,l,e,j),$async$Ee)
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
if(l!=null&&a6.a)A.a7(l,!0).eO()
l=o
l.sig($.aw())
J.aSV(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.M(x.q).f
j=n
l.U(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.al(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bfy(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.By(j.c,j.d,l),$async$Ee)
case 11:w=12
return A.b(r.lh(),$async$Ee)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zL[a1].a)
a5=l.cLm(j,12,a7)
l=r.a
w=15
return A.b(C.Sx(l.c,l.d,a5),$async$Ee)
case 15:if(r.c!=null)r.m(new C.dgv(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BH(0,B.dH,B.mX)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.M(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cAi("Undo",new C.dgw(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.el,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ee,v)},
FQ(d,e){return this.cGS(d,e)},
cGR(d){return this.FQ(d,!1)},
cGS(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FQ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dgH(a0),k,null,!0,!0,x.H).fv(new C.dgI(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3A(m,new C.dgJ(a0)),$async$FQ)
case 10:w=8
break
case 9:w=11
return A.b(C.bFF(new C.dgK(a0),m,a2),$async$FQ)
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
if(o!=null&&f.a)A.a7(o,!0).eO()
o=a0
o.sig($.aw())
J.aSV(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.M(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfy(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.By(k.c,k.d,o),$async$FQ)
case 12:w=13
return A.b(r.lh(),$async$FQ)
case 13:o=r.c
if(o==null){w=1
break}o=o.M(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cAi("Undo",new C.dgL(r,d),null),null,null,null,null,B.t,null,k,null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FQ,v)},
bGM(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dgf(v):u
r=A.aG(u,u,u,u,A.X(D.bPE,s?D.kO:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.wt,B.Gm,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOT(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kO.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dgg(v):u
return A.bm(!0,new A.D(D.bDe,A.A(A.a([r,s,A.aG(u,u,u,u,A.X(B.eJ,t<J.ad(v.d)?D.kO:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_z.prototype={
S(){return new C.bgV(new A.au(B.ax,$.aw()))}}
C.bgV.prototype={
ga2B(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
gbSx(){switch(this.ga2B()){case"cover":var w=D.d7E
break
case"book":w=D.d30
break
default:w=D.dyQ
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.ko.j(0.5),m=x.p,l=A.A(A.a([D.dGl,B.au,D.bIY,A.aG(p,p,p,p,B.lq,p,p,p,new C.diC(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.j,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jl(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.diD(q),q.ga2B()==="page",p,p,p,p))
if(q.a.d)k.push(A.jl(p,p,p,D.fVZ,p,new C.diE(q),q.ga2B()==="book",p,p,p,p))
k.push(A.jl(p,p,p,D.fIC,p,new C.diF(q),q.ga2B()==="cover",p,p,p,p))
k=A.bV(B.bG,k,B.bs,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bt(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.jO,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSx(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KD,p,p,p)
w.push(A.n1(p,B.c.j(0.08),r,B.hj,new C.diG(q,s),p,p,p,p))}return A.eO(p,E.BO,A.ci(A.x(A.a([l,B.X,D.fZi,B.am,k,B.af,j,B.U,A.bV(B.bG,w,B.bs,p,6,6),B.aB,A.dg(D.bTU,p,D.h_5,new C.diH(q,d),A.bo(B.b9,p,p,p,p,B.oT,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.ay,D.fUc],m),B.E,p,B.e,B.Q,0,B.p),B.t,p,B.y,p,B.fs,p,p,B.ah),p,p,p,I.a0q,B.d7,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_x.prototype={
S(){return new C.aBy(A.a([],x.gA))},
ge3(){return this.c}}
C.afJ.prototype={}
C.aBy.prototype={
Y(){this.a2()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.S0(p.c,p.d),$async$lh)
case 3:o=e
n=A.a([],x.gA)
p=J.aU(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bEa(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LE(t.a.c,q),$async$lh)
case 7:m.push(new l.afJ(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dh4(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
baP(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QR(d,e){return this.ci4(0,e)},
ci4(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).ca(A.e9(new C.dh3(u,e),!0,null,x.y)),$async$QR)
case 2:t=g
w=3
return A.b(u.lh(),$async$QR)
case 3:if(t===!0&&u.c!=null)u.c.M(x.q).f.U(D.aTX)
return A.h(null,v)}})
return A.i($async$QR,v)},
FS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.M(x.q).f.U(D.aTT)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahk(s.c,s.d),$async$FS)
case 5:q=e
w=6
return A.b(t.lh(),$async$FS)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QR(0,B.d.fa(t.d,new C.dh8(q))),$async$FS)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RW(p,s.f,r,n,o),$async$FS)
case 10:m=e
w=11
return A.b(t.lh(),$async$FS)
case 11:if(m&&t.c!=null)t.c.M(x.q).f.U(D.aTX)
case 1:return A.h(u,v)}})
return A.i($async$FS,v)},
Qi(d,e){return this.ctG(0,e)},
ctG(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dh7(t,e),s,null,!0,!0,x.y),$async$Qi)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3N(s.c,s.d,e.a),$async$Qi)
case 4:w=5
return A.b(t.lh(),$async$Qi)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qi,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGP(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.L(E.ko.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fF(0.7142857142857143,A.q(n,A.x(A.a([D.dGm,B.af,D.eqD,B.ay,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kO.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bc,B.j,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcKj(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.L(E.ko.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c0R,B.f,n,n,new A.p(B.w.j(0.3),n,A.L(E.ko.j(0.6),B.r,1),n,n,n,B.a7),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dh9(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.L(E.ko.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.be,D.bJl,A.q(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fot,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.n),n,n,n,n,B.hb,n,n,n)],l),B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.c6K,B.n),n,n,n,Ay.O6,D.bBd,n,n,n)
if(o.e)k=D.af7
else k=k.length===0?D.bc8:A.ct(new C.dha(k))
return A.c4(n,D.Z9,new A.an(B.a0,n,B.b2,B.t,A.a([D.aQ5,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGP(d){var w,v,u=this,t=null,s=u.baP(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.ev(B.A,new A.a6(300,420,new C.ZN(d.b,s,r,t),t),B.f,B.dB),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.q(t,D.c0a,B.f,t,t,new A.p(B.w.j(0.55),t,A.L(B.aT,B.r,1),t,t,t,B.a7),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dh1(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fo2,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fF(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.U,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kO.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dh2(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KM.prototype={}
C.ZN.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zL,new C.cPs(m),new C.cPt()),j=m.c,i=D.DG.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mt:B.bc
v=new C.cPu(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.enj,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.be7(j.x,h,l),B.az),0,0,0),A.ap(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.a6,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amJ,8,0.85,2.2),v.$4(D.bG9,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amJ,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bG5,A.b4(l,l,l,new C.bdZ(h,l),B.az),l),0,0,0))
r=A.X(D.aBC[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayP,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cH,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bGA,A.x(o,B.l,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aIy(l),D.fdw),l,l,l,46,0,l))
return A.q(l,A.by(D.adL,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.p(l,l,l,D.adL,i,new A.a9(B.aA,B.aF,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.be7.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e1()
g.cY(11)
switch(this.b){case"plain":return
case"linen":$.Q()
w=A.K()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.o(0,t),new A.o(u,t),w)
$.Q()
s=A.K()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.o(r,0),new A.o(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.Q()
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.N(new A.o(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.Q()
l=A.a([],n)
j=new A.aF(m.r,B.ai,null,null,l)
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
m=new A.bv()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.Q()
w=A.K()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.N(new A.o(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.Q()
h=A.K()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.N(new A.o(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bdZ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.Q(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bw
for(w=e.a,v=e.b,v=[D.f39,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(k,B.ai,null,null,s)
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
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=i.j(0.9).gp(0)
d.N(new A.o(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uQ.prototype={}
C.a_5.prototype={
S(){return new C.be5()}}
C.be5.prototype={
goo(){var w=this.d
return w===$?this.d=this.a.c:w},
gz1(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aQ),$.aw())}return v},
gaD6(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aQ),$.aw())}return v},
gasL(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aQ),$.aw())}return v},
t(){var w=this,v=w.gz1(0),u=v.T$=$.aw()
v.P$=0
v=w.gaD6()
v.T$=u
v.P$=0
v=w.gasL()
v.T$=u
v.P$=0
w.a3()},
ato(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jl(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d81(this,f,u),e===u,s,s,s,s))}return A.bV(B.bG,r,B.bs,s,6,8)},
az6(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lX,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goo(),a0=f.gz1(0),a1=a0.a.a,a2=f.gaD6(),a3=a2.a.a,a4=f.gasL(),a5=d.bfw(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a6(190,260,A.ev(B.A,new A.a6(270,370,new C.ZN(a5,d,f.a.e,e),e),B.f,B.dB),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.az6("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8q(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.az6("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8r(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zL[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bG(o,o,o,o),e,e,new A.a9(B.aA,B.aF,B.x,t.c,e,e),B.a7),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.aA(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.H(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8s(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bV(B.bG,v,B.bs,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b9.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eL:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.X(D.aBC[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8t(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bV(B.bG,q,B.bs,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.az6("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8u(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vB,e,e,e)
m=A.a([],w)
for(l=D.DG.gdO(D.DG),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eL:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bG(o,o,o,o),e,e,e,B.a7),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.aA(e,A.x(A.a([j,B.bH,A.d(i,e,e,e,e,e,e,new A.H(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8v(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bV(B.bG,m,B.bs,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vB,e,e,e)
k=f.goo()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cd(A.a([D.fTE,B.af,d,B.aR,a0,B.X,a2,B.aB,D.fZS,B.U,v,B.aB,D.fTN,B.U,q,B.aB,a4,B.aB,p,B.U,m,B.aB,l,A.kV(e,9,""+B.i.V(f.goo().f),36,18,new C.d8w(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vB,e,e,e),B.am,f.ato(D.a6l,f.goo().r,new C.d8x(f),D.dC3),B.af,A.d("BORDER",e,e,e,e,e,e,M.vB,e,e,e),B.am,f.ato(D.a5F,f.goo().w,new C.d8y(f),D.dC9),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vB,e,e,e),B.am,f.ato(D.a5B,f.goo().x,new C.d8A(f),D.dDH),B.am,A.iQ(e,B.b9,e,B.ag,e,new C.d8B(f),e,e,e,D.fNM,f.goo().z),B.bA,A.bI(D.fSh,e,new C.d8C(f,a6),A.bo(B.b9,e,e,e,e,B.oT,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,A_.amg,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIy.prototype={
a4(d,e){var w,v,u,t=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bv())
u=A.K()
u.sav(D.c7p.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bjt.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.Q()
w=A.K()
w.sav(D.c6q.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.i.cL(a1/112)
u=new A.e1()
u.cY(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d7D[u.az(9)]
j=u.az(14)
J.bp(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bl(i,B.hy)
g=new A.ao(B.O,B.M,B.R,B.S,B.P)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a9(B.a6,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.am(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.O,B.M,B.R,B.S,B.P)
e.r=E.ko.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.S,B.P)
e.r=E.ko.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.sav(D.c5O.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.w.j(0.5).gp(0)
p.y=B.kW
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bfX.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.c0(B.A,0.5,B.x,d,0,A.a([D.boa.j(0.22),B.L],w),d,d).aK(0,A.bY(new A.o(t,a1),a0)))
a4.N(new A.o(t,a1),a0,a3)},
aD(d){return!1}}
C.bcf.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.l5(new A.p(A.ar(D.kO,D.btd,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LR,o,o,B.n),B.bj,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLG,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.ko.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.q(o,A.x(t,B.l,o,B.qS,B.j,0,B.p),B.f,o,o,new A.p(o,o,o,D.b4l,u,D.c7n,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dv,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aIy(o),D.fdr),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWp(p.y,r,L.iZ,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fCJ,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.ftn,!0,B.a5,B.AD,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fCB,o,o,o),B.ay,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.5),o,o,o,o,o,o,o,o,11,B.cH,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.U,A.A(A.a([A.E(A.q(o,o,B.f,D.G5.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fI,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.G5.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.G5.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Z1(A.cP(A.a([A.cP(o,o,o,o,o,o,o,o,o,D.fwA,B.a.aC(k,0,1)),A.cP(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iZ.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ci(A.x(n,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hU,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.by(B.LR,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bFC,A.x(s,B.al,o,B.e,B.j,0,B.p),o),A.ap(0,A.c3(o,new A.p(o,o,o,o,o,new A.a9(B.a6,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bj),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.p(o,o,o,B.LR,v,D.c7U,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.alS.prototype={
S(){return new C.alT(new A.eA(0,$.aw()),new C.bT5(),new C.ama(),D.hB8,null,null)},
gd1(){return this.d}}
C.a1M.prototype={
a7(){return"_Step."+this.b}}
C.alT.prototype={
gCt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE6(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTW(){var w=this.ghb(0)
return w.gzm()==null?"Babu":B.a.i(w.gzm().b)},
Y(){var w,v=this
v.a2()
w=v.ghb(0).gzm()
w=w==null?null:w.c
v.r.b=w===D.os
w=v.q_(new C.bRr(v))
w.fO(0)
v.x!==$&&A.aQ()
v.x=w
v.a2y("Come closer, my children. I am "+v.gTW()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.T$=$.aw()
v.P$=0
w.bwd()},
a2y(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dc(D.akU,new C.bRl(w))},
bsA(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRu(v))},
adW(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bss(){return this.bam()},
bam(){var w=this,v=w.gCt()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRm(w))
w.a2y(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.mb,new C.bRn(w))},
cLt(){var w=this
w.m(new C.bRq(w))
w.a2y(w.gCt()[w.as].a)},
L1(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acW)return
w=p.gCt()
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
t.r=s.a+1.5}q=new A.e1()
q.cY(v*7+d)
p.m(new C.bRp(p,d,u,q))
p.a2y(u?D.dnp[q.az(4)]+" "+w[p.as].d:D.djX[q.az(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCt()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGk(t.at,t.ay,p)
t.m(new C.bRs(t,s))
t.a2y(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BT(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BU(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRt())
w=1
break
case 4:++t.as
t.bam()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.Yf,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.em(A.b4(v,v,v,new C.aWu(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cc7(0),B.b3,w.bRH()],t),B.l,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cc7(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.Q3,s,s,s,new C.bRo(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCt().length;++w){v=t.as
if(w<v||t.Q===D.b0H)v=B.cO
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bAX,s,s,s,22))}p=A.E(A.x(A.a([D.fKw,A.A(p,B.l,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.m(14)
u=A.L(B.fp,B.r,1)
return new A.D(D.bGN,A.A(A.a([r,p,A.q(s,A.d("\ud83d\udd25 "+B.i.V(t.cy*100)+"%",s,s,s,s,s,s,B.iy,s,s,s),B.f,s,s,new A.p(B.aU,s,u,v,s,s,B.n),s,s,s,s,B.hb,s,s,s)],q),B.l,s,B.e,B.j,0,s,s),s)},
bRH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzm()
if(h==null)w=1
else w=h.c===D.os?0:1
v=j.dx
u=j.db
t=D.qg.j(0.96)
s=A.m(22)
r=A.L(B.cO,B.r,3)
q=A.b4(i,i,i,new C.bp1(w,i),B.az)
p=A.d(j.Q===D.acW?j.gTW()+" asks":"Elder "+j.gTW(),i,i,i,i,i,i,D.aV8,i,i,i)
o=j.db
o=B.a.aC(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c5,A.A(A.a([new A.a6(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bH,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aVm,i,i,i)],n),B.E,i,B.e,B.j,0,B.p),1)],n),B.E,i,B.e,B.j,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsz(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aa0("Sit down by the fire",j.gbsr()),i,i,i)
break
case 1:v=A.at(j.aa0("Ask me, Elder",j.gcLs()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCt()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lD,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.d(u[m],i,i,i,i,i,i,D.aVi,B.K,i,i),B.f,i,D.aem,new A.p(D.ajR,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,V.wh,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRi(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bV(B.bG,v,B.bs,i,8,8)
break
case 3:v=j.fr
u=v?B.kv:Al.apN
u=A.X(u,v?B.eq:D.lD,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.eq:D.lD,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCt().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aa0(v,j.gqm(j))],n),B.l,i,B.e,B.j,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCt().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVC,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQI(u)
q=C.aQI(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abm,i,i,i))}v.push(B.U)
v.push(j.aa0("Back to the games",new C.bRj(j)))
v=A.x(v,B.l,i,B.e,B.j,0,B.p)
break
default:v=i}return A.q(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.Q,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aDa,i,B.n),i,i,i,B.yA,B.bi,i,i,i)},
aa0(d,e){var w=null,v=A.m(16),u=A.L(B.cO,B.r,2)
return A.aA(w,A.q(w,A.d(d,w,w,w,w,w,w,A2.KG,w,w,w),B.f,w,w,new A.p(D.lD,w,u,v,w,w,B.n),w,w,w,w,D.bEv,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bp1.prototype={
a4(d,e){Y.fW2(d,e.el(B.I),e.gdA()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aBw.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bT5.prototype={}
C.td.prototype={}
C.bp2.prototype={}
C.ama.prototype={
Mu(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.icH(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWu.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zl(l.d.Mu(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bp(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAW(d,j)
l.bQf(d,j)
l.cJe(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bp(t.save())
t.translate(225,580)
d.pj(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.Q()
q=A.K()
p=x.O
o=x.n
q.sav(A.w9(B.I,r,A.a([D.bs2.j(0.55*s),F.Nl.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.I,r,q)
t.restore()
n=A.a([new A.y(528,new C.bSY(l,d,j,i)),new A.y(540,new C.bSZ(l,d,j,i)),new A.y(546,new C.bT_(l,d,j,i)),new A.y(574,new C.bT0(l,d,j,i)),new A.y(612,new C.bT1(l,d,j,i)),new A.y(650,new C.bT2(l,d,j,i)),new A.y(656,new C.bT3(l,d,j,i))],x.E)
B.d.aZ(n,new C.bT4())
for(m=0;m<7;++m)n[m].b.$0()
l.bH7(d,j,i)
l.bTU(d,j)
t.restore()
$.Q()
t=A.K()
t.sav(A.w9(new A.o(w/2,v*0.6),e.gaoc()*0.75,A.a([B.L,D.bfR],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cAW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e1()
h.cY(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=t.gp(0)
d.N(new A.o(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.o(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.emS),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.Q()
k=A.a([],t)
l=new A.aF(l.r,B.ai,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.c6(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.c6(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.b=B.a9
s.c=1.6
s.r=D.biy.gp(0)
s.d=B.bw
s.e=B.dP
d.af(l,s)}},
bQf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aA6[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.o(p,m),n*0.74,q*0.5)
k=Ab.yj.j(v)
$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.o(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=T.xX.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=D.ahb.j(0.16*(1-h)).gp(0)
d.N(new A.o(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDv(d,D.emO,0.9,e,D.hws,!1,!1,D.b0E,1,!1)
w=$.Q().r
v=x.v
u=new A.aF(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bv())
t=A.K()
t.r=D.aj9.gp(0)
d.af(u,t)
C.bDv(d,D.emQ,0.95,e,D.hwn,!1,!1,D.b0F,1,!0)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c6(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c6(431,553,421,548))
t.E(new A.bv())
u=A.K()
u.r=F.FN.gp(0)
d.af(t,u)
u=A.bs(D.emP,8,28)
t=A.K()
t.r=D.bui.gp(0)
d.bZ(u,t)
C.bDv(d,new A.o(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hwt,!0,!1,D.X8,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.o(s+q*16,r-6),16,11),C.iw(D.aj_,1.8))
u=q<0
C.bDv(d,new A.o(s-q*6,r),0.62,e,D.hwv,!1,u,D.X8,2.2,!1)
C.bDv(d,new A.o(s-q*32,r+4),0.58,e+1,D.hwr,!1,u,D.X8,2.2,!1)
this.bWD(d,D.emt,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.o(o,n),8,11)
k=p===1
j=k?D.aiW:D.ajz
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.aiW:D.ajz
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=l.gp(0)
d.N(new A.o(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.b=B.a9
k.c=1
k.r=B.aw.gp(0)
k.d=B.bw
k.e=B.dP
d.ah(new A.o(o+7.5,n+(-2+m)),new A.o(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.b=B.a9
k.c=1
k.r=B.aw.gp(0)
k.d=B.bw
k.e=B.dP
d.ah(new A.o(o,n+4),new A.o(o,n+8),k)}h=e<f.f
u=A.bs(D.a8k,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahA.gp(0)
d.bZ(u,t)
u=A.bs(D.a8k.a5(0,new A.o(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bkC.gp(0)
d.bZ(u,t)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bv())
u=A.K()
u.r=D.bkM.gp(0)
d.af(t,u)
u=D.a8k.a5(0,new A.o(-17,h?-9:-2))
t=A.K()
t.r=B.ia.gp(0)
d.N(u,1.1,t)
v=new A.aF(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c6(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahA,3.5))},
bWD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.o(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.b=B.a9
m.c=2
m.r=D.Yr.gp(0)
m.d=B.bw
m.e=B.dP
d.ah(new A.o(u+o,s),new A.o(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.Q()
r=A.K()
r.r=D.FL.gp(0)
d.bZ(w,r)
r=A.bs(k.a5(0,D.elV),7,26)
w=A.ar(D.FL,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aF(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bv())
s=A.K()
s.r=D.FL.gp(0)
d.af(v,s)
s=A.bs(k.a5(0,new A.o(24,-7+l)),9,12)
v=A.K()
v.r=D.FL.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a5(0,new A.o(22,v)),k.a5(0,new A.o(21,-17+l)),C.iw(D.Yr,1.6))
d.ah(k.a5(0,new A.o(26,v)),k.a5(0,new A.o(28,-16+l)),C.iw(D.Yr,1.6))
v=k.a5(0,new A.o(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a5(0,new A.o(26,-3+l)),k.a5(0,new A.o(26,1+l)),C.iw(D.bnt,1.4))
d.ah(k.a5(0,D.eoR),k.a5(0,new A.o(-19,-7+Math.sin(f*7)*2)),C.iw(D.FL,2.4))},
bTS(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.o(225+u*36,574+(t*13+6)),8,11)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.bt_.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a8n.a5(0,B.cA),17,52)
$.Q()
t=A.K()
t.r=D.bfo.gp(0)
a6.bZ(u,t)
t=A.bs(D.a8n.a5(0,B.cA),12,44)
u=D.biW.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.djp[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=7
o.r=D.FZ.gp(0)
o.d=B.bw
o.e=B.dP
a6.ah(new A.o(u+t*24,579+s*4),new A.o(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Bw.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bw
n.e=B.dP
a6.ah(new A.o(u+o*24,579+(p*4-2)),new A.o(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f_g,D.f_S,D.f0Y,D.f1i,D.f0W]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bqq,D.bmP,D.bsr][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.Q()
f=A.a([],q)
a2=new A.aF(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kR(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kR(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bv()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ao(B.O,B.M,B.R,B.S,B.P)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajx.j((1-a5)*0.9)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=p.gp(0)
a6.N(new A.o(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahb.j(0.1*(1-a5))
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=q.gp(0)
a6.N(new A.o(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTU(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bus.j(0.18*p)
$.Q()
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=o.gp(0)
d.N(new A.o(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=D.bof.j(0.9*p).gp(0)
d.N(new A.o(r,q),1.4,n)}},
c5D(d,e){switch(d){case 0:return e.b?D.hwo:D.b0c
case 1:return e.b?D.hwu:D.b0a
case 2:return D.b09
case 3:return D.b08
case 4:return D.b0b
default:return D.b0d}},
aDk(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Ra(d,e,f,g){var w,v=this,u=D.a5N[e],t=v.c5D(e,g),s=new C.bp2(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5N[e],l=e===0
m=B.i.D(((l?D.aLz:D.aLE).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8r
s.as=D.E6
if(l){s.a=o?v.aDk(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.o(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.o(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.E6
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.o(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.o(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.o(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.o(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.em2
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.enn
if(e===4)s.as=new A.o(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.o(-3-m,p)
s.as=new A.o(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.epN
s.as=D.aLR}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDk(f,5)
s.b=0.4
s.as=new A.o(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDk(f,e*3)
s.b=0.5
s.c=0.4}}C.hzy(d,u.a,u.b*1.2,t,s,f,e,null)},
bH7(d,e,f){var w=new C.bSX(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gde(d){return this.c}}
C.afS.prototype={
a7(){return"_Stand."+this.b}}
C.adR.prototype={}
C.lr.prototype={}
C.bRH.prototype={
bBJ(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G7(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRI())
return r},
arq(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN5(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amB(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.J(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzm(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRJ(this))
return B.d.gH(w)}}
C.auc.prototype={}
C.zD.prototype={}
C.akM.prototype={
gC0(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bMv(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.I(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MK.prototype={
gaps(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gC0(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.I(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.I(["id",this.a,"title",q,"qs",p],u,t)},
d1I(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaps(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lr(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bau.prototype={}
C.a9W.prototype={}
C.bhL.prototype={}
C.afQ.prototype={}
C.ak4.prototype={
S(){return new C.ak5(B.bE,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ak5.prototype={
gMM(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE6(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbaI(){var w,v=this,u=v.e
if(u===$){w=v.q_(v.gcc9())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Y(){this.a2()
this.gbaI().fO(0)},
t(){this.gbaI().t()
this.bw8()},
fO(d){this.m(new C.bKG(this))},
cca(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKB())},
b93(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMM()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhL(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bt(w,new C.bKH())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8t()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMM()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asY(v,0.8,B.cO)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asY(m.cy,0.8,G.np)
m.aZE("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asY(q,0.88,D.lD)
p=m.gMM()[m.x]
n=p.c
if(u===n){m.aZE("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asY(d,e,f){var w,v,u,t=new A.e1()
t.cY(B.i.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.afQ(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZE(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qj()}},
c8t(){var w=this
if(w.x+1>=w.gMM().length){w.Qj()
return}++w.x
w.b93()},
Qj(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMM().length
r=C.bGk(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKz())
w=2
return A.b(C.BT(u.a.d,r),$async$Qj)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BU(t.d,t.c.a,"catch",u.z),$async$Qj)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKA())
return A.h(null,v)}})
return A.i($async$Qj,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cc8()
else w=v.ch?v.ccb():A.at(new A.D(B.ez,A.x(A.a([D.aWz,B.U,D.fMa,B.X,D.fSm,B.dY,C.uu("Play",v.geY(v),B.cO,B.hw,D.fy)],x.p),B.l,u,B.e,B.Q,0,B.p),u),u,u,u)
return new C.tF("Calabash Catch",w,B.f6,u)},
ccb(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hJ:B.Hx
p.push(A.X(u,v?B.av:B.bW,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMM()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aV6,r,r,r))
p.push(B.be)
v=A.m(14)
p.push(A.q(r,A.d(""+s.z,r,r,r,r,r,r,B.iy,r,r,r),B.f,r,r,new A.p(B.by,r,r,v,r,r,B.n),r,r,r,r,B.GL,r,r,r))
p=A.A(p,B.l,r,B.e,B.j,0,r,r)
v=A.m(18)
t=A.L(B.cO,B.r,3)
return A.x(A.a([new A.D(D.bCg,p,r),A.q(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fws,B.K,r,r),B.f,r,r,new A.p(D.qg,r,t,v,r,r,B.n),r,r,r,B.f3,B.bi,r,r,1/0),B.am,A.E(A.ct(new C.bKF(s)),1)],q),B.l,r,B.e,B.j,0,B.p)},
cc8(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pT,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMM().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vz,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cd(A.a([D.bcQ,u,t,B.aR,new C.Ir(s,r,w.cx,v),B.aR,A.at(C.uu("Back to the games",new C.bKy(w),B.cO,B.k6,D.fy),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bcV.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.Q(),a3=A.K()
a3.sav(A.jy(B.I,new A.o(0,a0),D.d1y,G.aAo,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Np.gp(0)
a4.N(new A.o(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aF(a2.r,B.ai,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ak(s)
v.ab()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.Q()
w=A.K()
w.r=D.bjR.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aF(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.c6(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.c6(r+14,t,r+26,w))
a2.E(new A.bv())
w=A.K()
w.r=D.age.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cni[q]
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.age.gp(0)
s.c=7
s.d=B.bw
a4.ah(new A.o(r,a2),new A.o(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.afA.gp(0)
a4.N(new A.o(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bkK.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.ahS.gp(0)
t.c=2
a4.ah(new A.o(w,a1),new A.o(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.J)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bs(new A.o(u,s),12,54)
$.Q()
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.lD.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bp(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.agW.gp(0)
a4.N(D.elh,14,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.bpr.gp(0)
m.c=4
m.d=B.bw
a4.ah(D.eli,D.emp,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.sav(new A.alD(D.eoy,46,D.da5,B.Dp,B.x,e,e,0))
a4.N(B.I,34,m)
m=A.bs(D.eoF,8,12)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iH(new A.en(n.c,e,e,B.cJ,e,e,e,e,e,e,D.fui),B.K,B.bX,new A.jg(1),e,e,3,e,B.bY,e,B.cs)
k.o5(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bl(A.bs(B.cM,m.gba(m)+8,l),B.fL)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.qg.gp(0)
a4.am(j,l)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.lD.gp(0)
l.b=B.a9
l.c=1.5
a4.am(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.o(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
Y.Bk(a4,new A.o(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dK,F.mV,!1,(w+1)/2)
h=A.bs(new A.o(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aF($.Q().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.c6(h.gbw().a,s+8,w+8,s))
a3.E(new A.bv())
m=A.K()
m.r=D.Zg.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.Bw.gp(0)
m.c=1.4
a4.ah(new A.o(t,a2),new A.o(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.np.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bjX.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.N(new A.o(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fq(e,B.cs,e,e,e,A.cP(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cO.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Dj,e,e),"+"+a2),B.a5,B.bX,e,B.dz,B.bY)
k.e5()
k.a4(a4,new A.o(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.QE.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBu(w.c,w.f,v),B.az),s=A.m(10),r=A.L(B.bD,B.r,1.4)
return new A.a6(u+22,v,A.x(A.a([new A.a6(u,u,t,v),B.cU,A.q(v,A.d(w.d,v,1,B.a2,v,v,v,D.fmW,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n1,v,v,v)],x.p),B.l,v,B.e,B.Q,0,B.p),v)},
gZ(d){return this.e}}
C.aBu.prototype={
a4(d,e){var w=e.el(B.I),v=e.gdA(),u=this.c?0.8:0
return Y.fW2(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.azZ.prototype={}
C.auO.prototype={
S(){return new C.auP(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auP.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hEQ(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaFn(){var w=this.z
return w===$?this.z=this.Xn(0):w},
gj2(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c_(w,-1,!1,x.S)}return v},
Xn(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azZ(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azZ(v[t],u[t],-1))
v=new A.e1()
v.cY(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dr(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.gov()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qD()}this.bwC()},
cRA(d,e){var w,v,u,t,s,r=this
if(d>=r.gj2().length||r.gj2()[d]!==-1||B.d.q(r.gj2(),e))return
w=r.gaFn()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqx(r,e,w,v))
A.cy(B.lJ,new C.cqy(r))
return}++r.r
u=A.bn(null,B.hF,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqz(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.cqA())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqB(t,r))
w=5
return A.b(C.BT(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BU(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqC())
w=1
break
case 4:for(o=t.as,n=new A.dr(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.gov()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qD()}o.a8(0)
t.m(new C.cqD(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pT,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vz,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tF(q,A.cd(A.a([D.af5,w,v,B.aR,new C.Ir(u,t,r.ch,p),B.aR,A.at(C.uu("Back to the games",new C.cqt(d),B.cO,B.k6,D.fy),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f6,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tF(q,new A.D(B.uv,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aV1,B.K,p,p),A.E(A.ct(new C.cqu(r,s)),1)],x.p),B.l,p,B.e,B.j,0,B.p),p),B.f6,p)}}
C.bco.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQw(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a5(0,B.Jy)
$.Q()
w=A.K()
w.r=D.lE.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.el4)
u=A.K()
u.r=B.oj.j(0.5).gp(0)
u.c=10
u.d=B.bw
b6.ah(new A.o(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dH.aA(0,B.i.D(b2[p],0,1))
l=$.Q().r
k=A.a([],s)
j=new A.aF(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.c6((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aF(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),i=new A.rv(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jG(b1));--h
g=new A.BR(i,h)
f=0
for(;;){i.iz()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.iz()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.Q()
a1=new A.ao(B.O,B.M,B.R,B.S,B.P)
a1.r=B.aT.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aF(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aF(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),k=new A.rv(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jG(b1));--a0
k.iz()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.Q()
a4=new A.ao(B.O,B.M,B.R,B.S,B.P)
a4.r=D.Gb.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bw
b6.af(new A.aF(l,a2,b0,new A.cu([new A.BR(k,a0),0,a1*m,!0]),a3),a4)
k.iz()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iz()
a5=n[a0].De(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.o(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.b5.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iH(D.fmo,B.a5,B.bX,new A.jg(1),b0,b0,b0,b0,B.bY,b0,B.cs)
a8.e5()
a8.a4(b6,new A.o(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.ayL.prototype={
S(){return new C.ayM(A.aR(x.S))},
gd1(){return this.d}}
C.ayM.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hFK(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Y(){this.a2()
this.b9c()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b9c(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dc(B.rN,new C.cFt(this))},
bq9(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cFB(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFC(v,d))
A.cy(B.it,new C.cFD(v))}},
cX2(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cFE(w))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkS()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cFF(t,s))
w=5
return A.b(C.BT(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BU(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFG())
w=1
break
case 4:t.m(new C.cFH(t))
t.b9c()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.pT,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vz,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tF(a1,A.cd(A.a([D.bd1,w,v,B.aR,new C.Ir(u,t,a0.ax,a2),B.aR,A.at(C.uu("Back to the games",new C.cFv(a3),B.cO,B.k6,D.fy),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f6,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KP,B.K,a2,a2),B.X,A.at(A.lB(new C.cFw(a0,r),a2,B.b4,B.hF,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cO,2,B.r,-1)
k=o+1
w.push(new A.r3(new A.br(0,1,u),new C.cFx(),A.q(a2,new A.c7(B.aL,B.e,B.j,B.l,a2,B.p,a2,0,A.a([new A.qE(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nY,a2,a2,a2),D.lD,a2,12,a2),B.au,new A.bz(1,B.bd,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fz2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.qg,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cx,B.bi,a2,a2,a2),B.b4,B.it,a2,new A.bJ("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bN(!1,D.h_h,a2,a2,!0,a2,a2,a2,a0.gcX1(),a2,a2),a2,a2,a2))
w.push(B.U)
if(a0.as){u=D.lE.j(0.2)
q=A.m(16)
p=A.L(D.lE,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fE,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.x(A.a([m,B.X,C.uu(v,a0.gqm(a0),B.cO,B.jq,D.fy)],t),B.l,a2,B.e,B.j,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dk:B.cO.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fh:B.cO,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xd:a2
t.push(new A.r3(new A.br(0,i,u),new C.cFy(),A.aA(a2,A.q(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aef,new A.p(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jo,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFz(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b4,B.md,a2,new A.bJ("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bV(B.fO,t,B.bs,a2,10,10))}return new C.tF(a1,A.cd(w,a2,a2,B.alS,a2,a2,B.ah,!1),B.f6,a2)}}
C.azK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aGX.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.afE.prototype={
aqY(d){},
aru(){var w=this,v=w.q_(new C.f6W(w))
v.fO(0)
w.LU$!==$&&A.aQ()
w.LU$=v}}
C.aKK.prototype={
gbmA(d){var w=this.c
return B.a.aC(w,0,Math.min(this.d,w.length))},
VW(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dc(D.akU,new C.fh4(w))},
bsy(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.am0.prototype={
S(){return new C.am1(new C.ama(),A.a([],x.t),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am1.prototype={
gMK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE6(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqu(){var w=this.r
return w===$?this.r=new C.aKK(new C.bSt(this)):w},
gapO(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMK()[v].c)u.push(1)
return u.length},
gblT(){var w=this.ghb(0)
return w.gzm()==null?"Elder":B.a.i(w.gzm().b)},
Y(){this.a2()
this.aru()},
t(){var w,v=this
v.gqu().t()
v.f.t()
w=v.LU$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bwg()},
cLF(){var w=this
w.m(new C.bSq(w))
w.gqu().VW(w.gMK()[w.x].a)},
L1(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqu()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q8$.a
v.ax=u
v.ay=u+1
v.m(new C.bSo())
A.cy(B.hF,new C.bSp(v))},
bq5(){var w=this.gapO(0)/this.gMK().length*100
if(w>=90)return D.eX2
if(w>=75)return D.eV4
if(w>=60)return D.eLH
if(w>=45)return D.eP7
return D.eG4},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cu9()
w=A.bR(0,new A.em(A.b4(m,m,m,new C.bt4(n,n.q8$),B.az),m),0,0,0)
if(!n.Q){v=D.qg.j(0.96)
u=A.m(20)
t=A.L(B.cO,B.r,3)
u=A.q(m,A.x(A.a([A.d("Elder "+n.gblT()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aVW,B.K,m,m),B.X,C.uu("Start the test",n.gBR(),B.cO,B.j4,D.fy)],x.p),B.l,m,B.e,B.Q,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.n),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gMK()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aVY,m,m,m)
if(n.Q){t=n.gqu()
t=t.d<t.c.length}else t=!1
if(t)u=D.feR
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.Bw,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.d(q[r],m,m,m,m,m,m,D.fqa,B.K,m,m),B.f,m,D.aef,new A.p(D.bfW,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Oe,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSr(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bV(B.fO,s,B.bs,new A.bJ("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.p7(u,B.mW,A.qx(),B.b4,B.b4,A.LB())],x.p),B.l,m,B.e,B.Q,0,B.p)
v=u}return new C.tF("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f6,m)},
cu9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bq5(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMK()[v].c)g.push(v)
u=A.m(22)
t=A.L(B.cO,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fuB,B.K,i,i)
r=A.d("Signed by Elder "+j.gblT(),i,i,i,i,i,i,D.ftf,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fyo,i,i,i),D.exZ],q)
o=A.d(h.b,i,i,i,i,i,i,D.fAg,i,i,i)
n=j.gapO(0)
m=j.gMK()
u=A.q(i,A.x(A.a([D.fLr,B.ay,s,r,B.X,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abm,i,i,i),B.U,D.asG],q),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(D.qg,i,t,u,i,i,B.n),i,i,i,i,B.fs,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Ir(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aR,D.h0l,B.U],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.by,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.fY,i,i,i),B.ay,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fvM,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fy0,i,i,i)],q),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.dk,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cx,B.bi,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.at(C.uu("Back to the games",new C.bSk(j),B.cO,B.k6,D.fy),i,i,i))
return new C.tF("Village School",A.cd(s,i,i,B.bQ,i,i,B.ah,!1),B.f6,i)}}
C.bt4.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q8$.a
a0.zl(e.f.Mu(a1))
w=C.hct(a1)
v=a0.c
J.bp(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqu()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cWS[s]-6
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=D.FZ.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bl(D.a9l.cn(10),B.i_)
$.Q()
r=A.K()
r.r=D.Bw.gp(0)
a0.am(u,r)
r=A.bl(D.a9l,B.hQ)
u=A.K()
u.sav(A.jy(new A.o(30,96),new A.o(420,346),D.dfp,f,B.x,f))
a0.am(r,u)
q=new A.e1()
q.cY(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bs(new A.o(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.K()
u.r=I.aiG.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aP.gp(0)
a0.ar(D.f6g,u)
u=A.K()
u.r=B.bN.gp(0)
a0.ar(D.f6k,u)
u=A.bl(D.f6a,B.hP)
r=A.K()
r.r=D.Zg.gp(0)
a0.am(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqu().gbmA(0)
m=A.fq(f,B.cs,f,7,f,A.cP(f,f,f,f,f,f,f,f,f,D.fCt,u+(t?"|":"")),B.a5,B.bX,f,B.dz,B.bY)
m.o5(346)
J.bp(v.save())
u=A.hS(D.a9l)
r=$.mf()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.o(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bl(new A.a1(u,r,u+40,r+90),B.fL)
u=A.K()
u.r=D.bve.gp(0)
a0.am(r,u)}}else{m=A.fq(f,B.cs,f,f,f,D.fmE,B.K,B.bX,f,B.dz,B.bY)
m.o5(340)
m.a4(a0,new A.o(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqu().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.o(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzm()
i=(u==null?f:u.c)===D.os?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f6X(d,a0,i,t,h,D.eme)),new A.y(520,new C.f6Y(a0,d,t)),new A.y(575,new C.f6Z(a0,d,t)),new A.y(585,new C.f7_(this,a0,d,t)),new A.y(615,new C.f70(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f71())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ccc(d,e){var w,v,u,t,s,r,q,p=$.Q(),o=A.a([],x.v),n=new A.aF(p.r,B.ai,null,null,o)
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
n.ab()}}n.E(new A.bv())
return n},
aD(d){return!1}}
C.alZ.prototype={
S(){return new C.am_(new C.ama(),A.T(x.S,x.i),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am_.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hED(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj2(){var w=this.z
return w===$?this.z=this.FG(0):w},
gaLF(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FG(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FG(0):r).length);++v}s.Q=w
r=w}return r},
FG(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e1()
u.cY(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bS6())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a2()
this.aru()},
t(){var w,v=this
v.e.t()
w=v.LU$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bwf()},
aqY(d){var w,v,u,t,s,r=this,q=r.gj2().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FG(0):u,v)
s=r.gaLF()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLF()[v])*Math.min(1,w)}},
d1n(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj2().length)return
w=v.y
if(w===-1){v.m(new C.bSh(v,d))
return}if(w===d){v.m(new C.bSi(v))
return}v.m(new C.bSj(v,B.d.co(v.gj2(),v.y),d,B.d.co(v.gj2(),d)))},
cMm(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FG(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FG(0):u)[v]]===v);++v}s.m(new C.bSc(s,B.d.cD(w,new C.bSd())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSe(t,s))
w=5
return A.b(C.BT(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BU(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSf())
w=1
break
case 4:t.m(new C.bSg(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.pT,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tF("Line Up",A.cd(A.a([D.af5,w,B.aR,new C.Ir(v,u,l.ch,k),B.aR,A.at(C.uu("Back to the games",new C.bS8(d),B.cO,B.k6,D.fy),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f6,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bS9(l))
u=A.bR(0,A.ct(new C.bSa(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aVY,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fv2,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fxf,B.K,k,k)],q),B.l,k,B.e,B.j,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.L(n?D.lE:G.np,B.r,2)
r.push(A.q(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSb(l),x.cM).aM(0,", then ")+".",k,k,k,k,k,k,D.fzp,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bi,k,k,1/0))}if(!l.at)r.push(C.uu("That is my line!",l.gcMl(l),B.cO,B.hI,D.fy))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uu(w,l.gqm(l),B.cO,B.jq,D.fy))}return new C.tF("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.Q,0,B.p),k,k,12,12,k,k)],q),k),B.f6,k)}}
C.bjB.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q8$.a
c7.zl(c5.e.Mu(c8))
w=C.hct(c8)
v=c7.c
J.bp(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj2().length
t=$.Q().r
s=x.v
r=new A.aF(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c6(225,500,440,470))
q=A.K()
q.r=D.Zg.gp(0)
q.b=B.a9
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aF(t,B.ai,c4,c4,l)
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
m=new A.bv()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=[B.cO,G.np,D.lE,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1i(c7,"OLDEST",D.enc,B.cO)
this.b1i(c7,"YOUNGEST",D.emF,B.b5)
t=A.bl(D.f64,B.fL)
s=A.K()
s.r=D.FZ.gp(0)
c7.am(t,s)
s=A.bl(D.f63,B.hQ)
t=A.K()
t.r=D.Bw.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.drP())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FG(0):a1,f)
o=c5.gaLF()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkS()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkS()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.Q()
a9=new A.ao(B.O,B.M,B.R,B.S,B.P)
a9.r=B.cO.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.o(o,520),54,a9)}a9=D.djd[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.o(-3-b2*8,-56)
else b9=a3?D.epj:c4
if(b1)c0=new A.o(3+b2*8,-56)
else if(h&&a7)c0=D.aLR
else c0=a3?new A.o(30,-104+Math.sin(e)*5):c4
C.Sv(c7,new A.o(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JA,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iH(new A.en(a8,c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.fsM),B.a5,B.bX,new A.jg(1),"\u2026",c4,1,c4,B.bY,c4,B.cs)
c1.o5(q)
c2=A.bl(A.bs(new A.o(o,650),24,c1.b.c+16),B.fL)
$.Q()
a8=new A.ao(B.O,B.M,B.R,B.S,B.P)
if(a6)a9=B.i8
else a9=a7?B.rH:D.qg
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.S,B.P)
if(a6)a9=D.lE
else a9=a7?G.np:D.lD
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.am(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.o(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iH(new A.en(""+(a2+1),c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.ft4),B.a5,B.bX,new A.jg(1),c4,c4,c4,c4,B.bY,c4,B.cs)
c3.e5()
c3.a4(c7,new A.o(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bp(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.I,4,8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=[B.cO,G.np,D.lE,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b1i(d,e,f,g){var w,v,u=null,t=A.fq(u,B.cs,u,u,u,A.cP(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Dj,u,u),e),B.a5,B.bX,u,B.dz,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.o(v/2,w.gba(w)/2)))},
aD(d){return!1}}
C.a24.prototype={
a7(){return"_Trip."+this.b}}
C.alV.prototype={
S(){return new C.alW(D.Xd,new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alW.prototype={
gDr(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE6(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqu(){var w=this.f
return w===$?this.f=new C.aKK(new C.bRT(this)):w},
gTW(){var w=this.ghb(0)
return w.gzm()==null?"Grandma":B.a.i(w.gzm().b)},
Y(){this.a2()
this.aru()},
t(){var w,v=this
v.gqu().t()
w=v.LU$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bwe()},
aqY(d){var w,v,u,t=this
if(t.r!==D.ad5)return
w=B.dC.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDr()
if(v+1>=u.length){t.r=D.ad6
t.WS()}else{++t.w
t.ay=!1
t.r=D.Xe
t.gqu().VW(u[t.w].a)}if(t.c!=null)t.m(new C.bRR())}},
WS(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqu().VW("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDr().length
r=C.bGk(t,u.z,s)
u.as=r
w=2
return A.b(C.BT(u.a.d,r),$async$WS)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BU(s.d,s.c.a,"journey",u.x*10),$async$WS)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRL())
return A.h(null,v)}})
return A.i($async$WS,v)},
brp(){this.aUp()},
aUp(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ad5
if(w.c!=null)w.m(new C.bRM())},
L1(d){var w,v,u,t,s=this
if(s.r!==D.Xe)return
w=s.gDr()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRQ(s,d,v))
u=s.gqu()
t=s.w
u.VW(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRz(){if(this.r!==D.B4)return
this.aUp()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.em(A.b4(s,s,s,new C.bj0(t,t.q8$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDr().length;++w){v=t.w
if(w<v||t.r===D.ad6)v=B.cO
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(new A.bz(1,B.bd,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wl,s,s,s,s),s))}p.push(B.bm)
p.push(D.fN4)
return new C.tF("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.j,0,s,s),s,s,12,12,2,s),A.ap(10,t.clM(),s,s,10,10,s,s)],q),s),B.f6,s)},
clM(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRP(o),l=D.qg.j(0.96),k=A.m(22),j=A.L(B.cO,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTW()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aVW,B.K,n,n),B.X,C.uu("Start the journey",o.gbro(),B.cO,D.bPW,D.fy)],x.p),B.l,n,B.e,B.Q,0,B.p)
break
case 3:w=D.bcB
break
case 1:w=o.w
v=o.gDr()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lD,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.d(r[s],n,n,n,n,n,n,D.aVi,B.K,n,n),B.f,n,D.aem,new A.p(D.ajR,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,V.wh,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRN(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.U,A.bV(B.bG,t,B.bs,n,8,8)],u),B.E,n,B.e,B.Q,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDr().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.U,new A.bM(B.aa,n,n,C.uu(v,o.gcRy(),B.cO,B.jq,D.fy),n)],x.p),B.E,n,B.e,B.Q,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTW()),B.U,A.d(""+o.x+" of "+o.gDr().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVC,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQI(v)
u=C.aQI(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abm,n,n,n))}w.push(B.U)
w.push(A.at(C.uu("Back to the games",new C.bRO(o),B.cO,B.k6,D.fy),n,n,n))
w=A.x(w,B.E,n,B.e,B.Q,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aDa,n,B.n),n,n,n,n,B.bi,n,n,n)}}
C.bj0.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q8$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDr(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ad5,d2=c7*0.5
c8=A.ar(D.bho,D.brK,d0)
c8.toString
w=A.ar(D.Yt,G.ahs,d0)
w.toString
v=A.ar(B.u4,D.bqb,d0)
v.toString
$.Q()
u=A.K()
t=x.O
u.sav(A.jy(B.I,new A.o(0,d2),A.a([c8,w,v],t),G.a4g,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.o(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.w9(s,60,A.a([D.bqA,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.YF.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dyr[o]
$.Q()
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.o(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.Q()
j=A.a([],m)
i=new A.aF(k.r,B.ai,c3,c3,j)
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
$.Q()
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=A.ar(l===0?D.bfY:D.buG,D.bkR,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ccd(d3,new A.o(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.Q()
w=A.K()
v=A.ar(D.aj_,D.Gb,d0)
v.toString
w.sav(A.jy(new A.o(0,d2),new A.o(0,c7),A.a([v,D.bqC],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bka.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.bum.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=I.MG.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.Q()
b2=new A.ao(B.O,B.M,B.R,B.S,B.P)
b2.r=D.bfD.gp(0)
d3.ar(new A.a1(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aF(b1.r,B.ai,c3,c3,b2)
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
b0=new A.bv()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.bsA.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.S,B.P)
b1.r=D.fy.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.FZ.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bl(new A.a1(b0,a4,b0+60,a5),B.ix)
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.bvK.gp(0)
d3.am(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.Bw.gp(0)
b0.b=B.a9
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iH(new A.en(b6,c3,c3,B.cJ,c3,c3,c3,c3,c3,c3,D.frf),B.a5,B.bX,new A.jg(1),c3,c3,c3,c3,B.bY,c3,B.cs)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.o(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.ad6
else if(r===c4.w){b0=c4.r
b0=b0===D.Xe||b0===D.B4
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzm()
b9=(b0==null?c3:b0.c)===D.os?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqu()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B4
b0=c0?C.hB2(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xe?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.o(40,-110+Math.sin(g)*10)
else a7=c0?new A.o(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Sv(d3,new A.o(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.o(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIv(d3,new A.o(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.btR.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Xd)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B4&&c4.ax){b7=A.fq(c3,B.cs,c3,c3,c3,A.cP(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cO,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Iz,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dz,B.bY)
b7.e5()
b7.a4(d3,new A.o(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ccd(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bq5,D.bjt,g)
o.toString
if(f){w=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.c6(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.c6(v+9,t,v+16,u))
w.E(new A.bv())
t=A.K()
t.r=D.ZH.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d_Q[r]
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=D.ZH.gp(0)
p.c=4
p.d=B.bw
d.ah(new A.o(w,t),new A.o(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=o.gp(0)
d.N(new A.o(v+q*26,u),10,p)}}else{w=e.a5(0,D.epg)
$.Q()
v=A.K()
v.r=D.bfF.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a5(0,D.eph),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIv(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Xd?0.045:0,a1=a2.c
J.bp(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hX(0,a0)
for(w=0;w<2;++w){v=D.dqU[w]
u=d.ay&&d.r!==D.Xd&&v>0
J.bp(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.Q()
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.buy.gp(0)
a2.N(B.I,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.bmV.gp(0)
a2.N(B.I,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.bq.gp(0)
q.c=2
a2.ah(B.I,new A.o(s*9,t*9),q)}a1.restore()}p=A.u2(D.f6r,B.fL,B.fL,B.ik,B.hO)
$.Q()
t=A.K()
t.sav(A.jy(D.elk,B.a8f,D.dgK,G.a4g,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.daQ[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.B4&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bp(a1.save())
a1.clipRRect(A.nO(A.bl(l,B.mx)),$.no(),!0)
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=D.Yt.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B4?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Sv(a2,new A.o(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLI,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bl(l,B.mx)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=D.ajT.gp(0)
i.b=B.a9
i.c=2
a2.am(j,i)}d=A.bl(D.UF,B.mx)
t=A.K()
t.r=D.Yt.gp(0)
a2.am(d,t)
J.bp(a1.save())
a1.clipRRect(A.nO(A.bl(D.UF,B.mx)),$.no(),!0)
C.Sv(a2,new A.o(D.UF.gbw().a,-10),0,0,0.7,-0.1,f,f,D.aLI,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bl(D.UF,B.mx)
d=A.K()
d.r=D.ajT.gp(0)
d.b=B.a9
d.c=2
a2.am(t,d)
d=A.K()
d.r=Ap.Gc.gp(0)
a2.N(D.enq,4,d)
d=A.K()
d.r=D.FZ.gp(0)
a2.ar(D.f7A,d)
for(w=0;w<3;++w){v=D.dqW[w]
d=A.bl(new A.a1(v,-96,v+28,-79),B.ix)
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.Gb.gp(0)
a2.am(d,t)}a1.restore()},
aD(d){return!1}}
C.aBx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgy.prototype={}
C.aBz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgz.prototype={}
C.aBA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgA.prototype={}
C.a6u.prototype={
B(d){var w=null
return new A.a6(1/0,this.c,A.b4(w,w,w,new C.bj7(w),B.az),w)}}
C.bj7.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.doS[B.o.F(n,6)]
k=$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=l.gp(0)
d.ar(new A.a1(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aF(k.r,B.ai,null,null,j)
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
k=new A.bv()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tF.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.Q3,w,w,w,new C.bRK(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fox,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Yf,A.q(w,A.bm(!0,A.x(A.a([D.c4s,new A.D(D.bGR,A.A(u,B.l,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b84,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ir.prototype={
B(d){var w=null,v=this.d,u=C.aQI(v),t=C.ijp(v),s=B.c.j(0.08),r=A.m(18),q=A.L(B.cO.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fr0,w,w,w)],x.p)
if(this.e)p.push(D.erJ)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fY,w,w,w))
if(t!=null)p.push(new A.D(B.ut,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AK,w,w,w),w))
return A.q(w,A.x(p,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.n),w,w,w,w,B.bF,w,w,w)}}
C.Wf.prototype={
S(){return new C.blT(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYr(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blT.prototype={
gSV(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a2()
this.Pu()},
Pu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bSv(u.a.d),$async$Pu)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.deO[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSu(p,(o===$?u.d=q.c:o).a,r),$async$Pu)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e1H(u,n))
return A.h(null,v)}})
return A.i($async$Pu,v)},
ux(d){return this.coP(d)},
coP(d){var w=0,v=A.j(x.H),u=this,t
var $async$ux=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).ca(A.e9(new C.e1I(d),!1,null,x.H)),$async$ux)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pu()
return A.h(null,v)}})
return A.i($async$ux,v)},
gb6B(){var w,v,u,t=C.N0(this.gSV()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2r(d){return this.cw2(d)},
cw2(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYr(r),$async$a2r)
case 2:if(u.c!=null)u.m(new C.e1J(u,r))
return A.h(null,v)}})
return A.i($async$a2r,v)},
OO(d){return this.bRd(d)},
bRd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.heJ(t.gSV())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MK("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).ca(A.e9(new C.e1F(q),!1,null,r)),$async$OO)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e1G(p))
o=s.length
B.d.c3(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2r(A.cW(s,0,A.dB(2,"count",x.S),r).dn(0)),$async$OO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
XP(d,e){return this.bOK(0,e)},
bOK(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e1E(e),o,null,!0,!0,x.y),$async$XP)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.heJ(u.gSV()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2r(o),$async$XP)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XP,v)},
aa8(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e1B(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.L(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vu,p,p,p),B.b3],s)
q=A.m(10)
r.push(A.q(p,A.d(i,p,p,p,p,p,p,D.fpq,p,p,p),B.f,p,p,new A.p(B.ht,p,p,q,p,p,B.n),p,p,p,p,B.Ck,p,p,p))
return A.aA(p,A.da(A.q(p,A.x(A.a([A.A(r,B.l,p,B.e,B.j,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fx8,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.fq8,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a9(B.aA,B.aF,B.x,w,p,p),B.n),p,p,p,p,B.yF,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xh(d,e,f,g,h,i){return this.aa8(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N0(s.gSV()),p=s.gSV(),o=C.aQI(s.e),n=C.heJ(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e1K(s),k=C.hED(p,1).length,j=C.hEQ(p,1).length,i=C.hFK(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.L(B.cO.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abb,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fuF,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.be,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,K.ab7,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pT,r,r,r),D.fTq],a1),B.l,r,B.e,B.j,0,B.p)],a1),B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.n),r,r,r,r,B.bF,r,r,r)
f=s.Xh("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aE,new C.e1L(s,p),l.$1("kahoot"))
h=s.Xh("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lD,new C.e1M(s,p),l.$1("fire"))
a0=s.Xh("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.BT,new C.e1N(s,p),l.$1("catch"))
j=j!==0?new C.e1Q(s,p):r
j=s.aa8("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hp,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e1R(s,p):r
i=s.aa8("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kL,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xh("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eX,new C.e1S(s,p),l.$1("journey"))
k=k!==0?new C.e1T(s,p):r
k=A.a([g,B.aR,D.fXq,B.U,A.kU(0.98,A.a([f,h,a0,j,i,e,s.aa8("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xh("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.cZ,new C.e1U(s,p),l.$1("school"))],a1),2,12,12,r,B.dW,!0),B.d8,A.A(A.a([D.bIH,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fpu,r,r,r)],a1),B.l,r,B.e,B.j,0,r,r),B.U],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fE2,B.be,new A.bz(1,B.bd,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hl,r,r,r),A.d(""+v.gaps(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AK,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),r)],a1)
if(v.gaps(0).length>=2){f=D.lE.j(0.2)
t=new A.ay(D.lE,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.X(B.hw,D.lE,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1V(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cO.j(0.2)
t=new A.ay(B.cO,1,B.r,-1)
f=A.aA(r,A.q(r,A.X(B.j4,B.cO,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1W(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fh.j(0.2)
t=new A.ay(B.fh,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aA(r,A.q(r,A.X(B.ei,B.fh,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1X(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c7(B.aL,B.e,B.j,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bi,r,r,r))}if(s.a.e){j=m?new C.e1O(s):new C.e1P(a2)
i=A.m(18)
h=A.L(m?B.cO:B.aT,B.r,2)
g=m?B.cO.j(0.12):B.dk
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cO:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.n),r,r,r,r,B.O0,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fYm)
k.push(B.aB)
k.push(D.asG)
return new C.tF("Family Games \xb7 "+p.b,A.cd(k,r,r,D.bCR,r,r,B.ah,!1),B.f6,r)}}
C.a_X.prototype={
a7(){return"_KPhase."+this.b}}
C.alX.prototype={
S(){return new C.alY(D.b03)},
gd1(){return this.e}}
C.alY.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fO(d){var w,v=this
v.m(new C.bS4(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dc(B.fA,new C.bS5(v))},
aPV(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRV(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dc(B.ff,new C.bRW(w))},
L1(d){var w
if(this.d!==D.acC)return
w=this.at
if(w!=null)w.a1(0)
this.b6x(d)},
b6x(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.V(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bS0(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rN,v.giy(v))},
cKZ(d){var w=this
if(w.d!==D.WM)return
if(w.e+1>=w.a.w.length)w.YA()
else{w.m(new C.bS1(w))
w.aPV()}},
YA(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGk(p,u.w,t)
u.m(new C.bRY(u,s))
w=2
return A.b(C.BT(u.a.e,s),$async$YA)
case 2:r=e
t=u.a
w=3
return A.b(C.BU(t.e,t.f,t.r,u.f),$async$YA)
case 3:q=e
if(u.c!=null)u.m(new C.bRZ(u,r,q))
return A.h(null,v)}})
return A.i($async$YA,v)},
cLO(){var w,v,u,t,s=this,r=s.a,q=new A.e1()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dB(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bP(r,r.gI(0),u.k("bP<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.i.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bS2())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b03===r){w=A.a([D.fTP,B.X,A.d(s,t,t,t,t,t,t,B.KS,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fpC,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xl,B.K,t,t))
w.push(B.dY)
w.push(C.uu("Play",u.geY(u),B.cO,B.hw,D.fy))
w=A.at(new A.D(B.ez,A.x(w,B.l,t,B.e,B.Q,0,B.p),t),t,t,t)
break A}if(D.b04===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fxF,t,t,t),t,t,t)
break A}if(D.acC===r||D.WM===r){w=u.crq()
break A}if(D.b05===r){w=u.cce()
break A}w=t}return new C.tF(s,w,B.f6,t)},
crq(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WM,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aV6,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KP,j,j,j))
g.push(B.au)
f=A.m(14)
g.push(A.q(j,A.d(""+k.f,j,j,j,j,j,j,B.iy,j,j,j),B.f,j,j,new A.p(B.by,j,j,f,j,j,B.n),j,j,j,j,B.GL,j,j,j))
g=A.A(g,B.l,j,B.e,B.j,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.k9(B.by,j,k.as<5?B.fh:B.cO,9,j,w,j),B.aq)
w=A.m(22)
v=A.L(B.cO,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lE:G.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.U,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.foG,B.K,j,j)],h),B.l,j,B.e,B.Q,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fzN,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.qg,j,v,w,j,j,B.n),j,j,j,j,B.fs,j,j,1/0),3)
v=A.a([],h)
for(u=k.giy(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bS_(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCO[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aD7[o],j,j,j,j,j,j,D.fqC,j,j,j),B.au,new A.bz(1,B.bd,A.d(r[t],j,3,B.a2,j,j,j,D.fpz,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.arb)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bXl)
v.push(A.aA(j,new A.SL(A.q(j,new A.c7(B.aL,B.e,B.j,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),W.aBa,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b4,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.kU(1.45,v,2,10,10,j,B.dW,!1),4)],h)
if(i)h.push(D.eqZ)
return new A.D(B.a0c,A.x(h,B.l,j,B.e,B.j,0,B.p),j)},
cce(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLO(),m=x.p,l=A.a([D.bbT,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pT,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vz,o,o,o),o,o,o),B.aR],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cO.j(0.25):B.dk
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cO:B.by,1,B.r,-1)
q=A.d(w<3?D.dh1[w]:""+(w+1),o,o,o,o,o,o,B.nf,o,o,o)
s=s?B.u:B.V
l.push(A.q(o,new A.c7(B.aL,B.e,B.j,B.l,o,B.p,o,0,A.a([new A.a6(34,o,q,o),new A.bz(1,B.bd,A.d(t.a,o,o,o,o,o,o,new A.H(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iy,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cx,B.eY,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ir(m,v,p.CW,o))
l.push(B.aR)
l.push(A.at(C.uu("Back to the games",new C.bRX(p),B.cO,B.k6,D.fy),o,o,o))
return A.cd(l,o,o,B.fs,o,o,B.ah,!1)}}
C.TV.prototype={
S(){return new C.alU(A.T(x.de,x.er))}}
C.alU.prototype={
gD3(){var w,v=this,u=v.d
if(u===$){w=C.hky(v.a.c.aj())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glR(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD3().b
v=$.aw()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.ba(w,B.b6,B.aQ),v)}return t},
cfe(d){return this.f.c4(0,d,new C.bRv(d))},
Y(){this.a2()
var w=this.gD3().c
if(w.length===0)w.push(C.h6f(null,0,20,""))},
t(){var w,v,u=this.glR(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.dr(u,u.r,u.e);u.C();)for(w=J.aU(u.d);w.C();){v=w.gR(w)
v.T$=$.aw()
v.P$=0}this.a3()},
cKP(){if(this.gD3().c.length>=12)return
this.m(new C.bRw(this))},
hL(d){var w,v,u=this,t=u.gD3()
t.b=B.a.i(u.glR(0).a.a)
w=t.gaps(0)
if(t.b.length===0||w.length<2){u.c.M(x.q).f.U(D.fhA)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a7(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRG(),r=x.p,q=A.a([A.bN(!1,D.fJ_,t,t,!0,t,t,t,u.gbqg(u),t,t)],r),p=A.a([D.fXY,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glR(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.fY,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD3().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRF(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uu("\uff0b Add a question",u.gcKO(),B.aT,t,B.c),t,t,t))
return new C.tF("Make your game",A.cd(p,t,t,D.bCO,t,t,B.ah,!1),q,t)}}
C.aqZ.prototype={
S(){return new C.aF5(A.a([],x._))},
bv(){return this.r.$0()},
qn(){return this.w.$0()},
ge3(){return this.c}}
C.aF5.prototype={
Y(){var w,v
this.a2()
this.wt()
w=this.a
v=w.c
if(v.length!==0)C.a8b(v,w.e,w.d.w)},
wj(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhm(r,t.e,!1,s.w,new C.e3m(u),null,s),$async$wj)
case 2:w=3
return A.b(u.wt(),$async$wj)
case 3:return A.h(null,v)}})
return A.i($async$wj,v)},
a0D(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhm(r,t.e,!0,s.w,new C.e3l(u),null,s),$async$a0D)
case 2:w=3
return A.b(u.wt(),$async$a0D)
case 3:return A.h(null,v)}})
return A.i($async$a0D,v)},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bn(q.a.c),$async$wt)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.e3o(q,p))
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
return A.b(C.Hj(q.a.c).dg(0,B.qs),$async$wt)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e3p(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e3q(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
P9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$P9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.M(s).f.U(D.fha)
w=3
return A.b(C.Hj(t.a.c),$async$P9)
case 3:r=e
w=4
return A.b(C.fWW(t.a.c,r),$async$P9)
case 4:q=e
w=5
return A.b(C.Hj(t.a.c),$async$P9)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e3k(t,p))
o=t.c.M(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dI:B.cY,null,B.t,null,s,null,B.mZ,null,null,null,null,null,null,null,null,null,null))
t.a.qn()
case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
It(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$It=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isc(l),$async$It)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hUY(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b17(q,p.e,l,"Each family tree costs $"+B.i.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$It)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hBc(r)
o=Date.now()
n=t.a.c
m=new C.kT(l,r.toUpperCase(),p,!0,B.Z,D.Dt,new A.V(o,0,!1),0,n,D.uB,B.cd)
w=5
return A.b(C.a3T(n,m),$async$It)
case 5:w=6
return A.b(t.wt(),$async$It)
case 6:t.a.bv()
t.a.qn()
if(t.c==null){w=1
break}t.F0(m)
case 1:return A.h(u,v)}})
return A.i($async$It,v)},
F0(d){return this.ck8(d)},
ck8(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bn(u.a.c),$async$F0)
case 2:n=l.nz(k.dI(f,new C.e3n(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.aqT(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F0)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3T(u.a.c,o),$async$F0)
case 6:case 5:w=7
return A.b(u.wt(),$async$F0)
case 7:u.a.qn()
return A.h(null,v)}})
return A.i($async$F0,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=new C.ui(p)
if(r.e)return A.at(A.n3(q,p?B.bu:B.bq,q,q,q,q,q,q,q,q),q,q,q)
if(J.cq(r.d)){w=p?B.ec:B.c
v=A.m(15)
u=A.aJ(!1,B.a3,!0,q,A.aP(!1,q,!0,A.q(q,D.bV_,B.f,q,q,new A.p(B.aY.j(0.12),q,A.L(B.aY,B.r,2),q,q,q,B.a7),q,52,q,q,q,q,q,52),B.cR,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcjc(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gk(A.q(q,A.x(A.a([u,B.aR,t,B.U,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bq,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dY,A.bI(D.h0b,q,r.gaTc(),A.bo(B.bR,q,q,q,q,q,Ax.a0B,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.j,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.n),q,q,q,q,D.bFy,q,q,1/0),15,B.ag,1.05,D.aco,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zs,B.aY,q,q,q,q),q,q,q,new C.e3s(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zm,B.aY,q,q,q,q),q,q,q,r.gagX(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dg(E.as5,q,D.fGk,r.gaTc(),A.bo(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gk(r.cGY(J.t(r.d,s),o),14,B.ag,1,D.aco,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cGY(d,e){var w=null,v=e.a,u=v?B.ec:B.c,t=A.m(14),s=A.L((v?B.eg:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.m(14),p=A.q(w,D.bU1,B.f,w,w,new A.p(B.aY.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqs(),m=d.d?"":" \xb7 Public",l=d.y===D.kX?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bH,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.q(w,A.aJ(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bF,A.A(A.a([p,B.be,l,A.X(B.OW,v?B.bu:B.bq,w,w,w,w)],k),B.l,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e3r(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.p(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqT.prototype={
S(){return new C.aF2(A.a([],x._),A.aR(x.N),A.b9S())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aF2.prototype={
Y(){var w,v,u=this
u.a2()
u.d=u.a.w
u.adD()
w=u.a
v=w.c
if(v.length!==0)C.a8b(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a3()},
a3C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yu("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e2N(r),s,null,!0,!0,x.y),$async$a3C)
case 3:if(e!==!0||t.c==null){w=1
break}t.K_()
t.m(new C.e2O(t,r))
w=4
return A.b(t.ut(),$async$a3C)
case 4:t.a.bv()
t.yu(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3C,v)},
cwC(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e2I(w,f,d,e))},
aVu(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.ds()
u.ej(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bd9(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e7(r)
w=q.D8()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.ds()
t.ej(r,u,0,1)
t.k5(v,v,1,1)
t.ej(-r,-u,0,1)
t.iX(0,q)
s.sp(0,t)},
adD(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bn(u.a.c),$async$adD)
case 2:t=s.nz(r.dI(e,new C.e29(u)))
if(t!=null&&u.c!=null)u.m(new C.e2a(u,t))
return A.h(null,v)}})
return A.i($async$adD,v)},
yu(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
wj(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hhm(o,t,!1,r,new C.e2r(u),q.a,s),$async$wj)
case 2:n=A
m=J
w=3
return A.b(C.Hj(u.a.c),$async$wj)
case 3:p=n.nz(m.dI(e,new C.e2s(u)))
if(p!=null&&u.c!=null)u.m(new C.e2t(u,p))
return A.h(null,v)}})
return A.i($async$wj,v)},
K_(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cB(w,0)},
ut(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ut=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3T(t,s),$async$ut)
case 2:return A.h(null,v)}})
return A.i($async$ut,v)},
a27(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a27=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uv(q,t.a.c)){t.yu("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.itn(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a27)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K_()
t.m(new C.e2H(t,r))
w=4
return A.b(t.ut(),$async$a27)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a27,v)},
b3e(){var w=this.c
w.toString
A.a7(w,!1).ca(A.e9(new C.e2o(this),!1,null,x.H))},
a0R(){return this.cka()},
cka(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uv(m,t.a.c)){t.yu("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.S(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e2E(),A.U(s).k("Y<1>")).gI(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cj.E"))
B.d.fi(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e2F(n,t,new C.ui(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0R)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K_()
t.m(new C.e2G(t,o))
w=6
return A.b(t.ut(),$async$a0R)
case 6:case 5:if(o.a&&t.c!=null)t.b3e()
case 1:return A.h(u,v)}})
return A.i($async$a0R,v)},
WC(d){return this.bDP(d)},
bDP(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uv(r,t.a.c)){t.yu("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1Y(t,d),r,null,!0,!0,x.P),$async$WC)
case 3:s=f
if(s==null){w=1
break}t.K_()
t.m(new C.e1Z(t,s))
w=4
return A.b(t.ut(),$async$WC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
a3Y(d){return this.cJc(d)},
cJc(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.S(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e2Q(u,d,new C.ui(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3Y)
case 2:return A.h(null,v)}})
return A.i($async$a3Y,v)},
cgr(d){var w=this,v=w.d
v===$&&A.c()
if(C.uv(v,w.a.c))w.OP(d)
else w.a3Y(d)},
ajs(d,e){return this.cAz(d,e)},
cAz(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.S(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e2K(new C.ui(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajs)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajs,v)},
Iy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Iy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kX?3:5
break
case 3:w=6
return A.b(C.h4s(t.a.c),$async$Iy)
case 6:s=e
o=t.a
r=C.hpp(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajs(!s,!r),$async$Iy)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQP(o,t.a.c)){t.yu("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lo(o,"Cancel","Remove",q.y===D.kX?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Iy)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQL(t.a.c,t.d.a),$async$Iy)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j_(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Iy,v)},
ab5(d){return this.bP0(d)},
bP0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uv(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e2_(p))){o=A.U(s)
p.a=A.nz(new A.cM(new A.Y(s,new C.e20(d),o.k("Y<1>")),new C.e21(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.K_()
t.m(new C.e22(t,s,d,q))
w=3
return A.b(t.ut(),$async$ab5)
case 3:t.yu(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab5,v)},
OP(d){return this.bRh(d)},
bRh(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uv(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3Y(d),$async$OP)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e26(t,d),r,null,!0,!0,x.P),$async$OP)
case 6:s=f
if(s==null){w=1
break}t.K_()
t.m(new C.e27(t,s))
w=7
return A.b(t.ut(),$async$OP)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
cHn(){var w=this,v=w.d
v===$&&A.c()
if(!C.uv(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e2P(w))
w.ut()},
ZB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQP(n,t.a.c)){t.yu("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.S(n)
s=$.aw()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceV(),A.U(q).k("N<1,n>")).bY(0,new C.e2j()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e2k(t,new C.ui(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$ZB)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K_()
t.m(new C.e2l(t,p))
w=4
return A.b(t.ut(),$async$ZB)
case 4:t.yu("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZB,v)},
ceW(d){return B.a.i(d.toLowerCase())},
ciX(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uv(v,w)
t=r.d
s=C.ihS(t)
C.isg(q,t.b,u,C.ihR(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.ui(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e2X(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c3:B.iC
v=A.X(B.a1L,n?B.bu:B.bq,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Ca,A.aP(!1,o,!0,new A.D(B.hG,A.A(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e2Y(p,d),o,o,o,o,o,o,o),o),new A.D(B.nE,p.c1w(m),o)],u)
if(p.d.y===D.kX){t=B.te.j(0.15)
s=A.m(12)
r=A.L(B.te.j(0.45),B.r,1)
q=C.Hh(p.d,p.a.c)
v.push(new A.D(B.yI,A.q(o,A.A(A.a([D.bZs,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.n),o,o,o,o,B.iu,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uv(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gw("Undo",B.pu,p.gcHm(),m,o,o))
u.push(new C.Gw("Family Book",D.bOM,p.gciW(),m,B.u5,o))
u.push(new C.Gw("Family games",B.oy,p.gcj7(),m,B.aE,o))
if(C.uv(p.d,p.a.c))u.push(new C.Gw("Display settings",B.D0,p.gck9(),m,B.b1,o))
u.push(new C.Gw("Sync",B.zm,p.gagX(),m,o,o))
t=p.d
if(t.y===D.kX||C.aQP(t,p.a.c)){t=p.d.y===D.kX?"Remove shared tree":"Delete tree"
u.push(new C.Gw(t,B.ei,p.gbPa(),m,B.fh,o))}if(C.uv(p.d,p.a.c))u.push(new C.Gw("Add member",B.wE,new C.e2Z(p),m,B.bR,o))
v.push(new A.D(A_.alT,A.A(u,B.l,o,B.e,B.j,0,o,o),o))
if(p.d.gaqs()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ct(new C.e3_(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1P:A6.OX,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e30(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1w(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fR.j(0.35),B.dv,18)],x.V)
u=A.m(22)
t=A.ap(-26,A.X(B.zf,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aJ(!1,B.a3,!0,m,A.aP(!1,m,!0,A.q(m,D.c1B,B.f,m,m,new A.p(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a7),m,46,m,m,m,m,m,46),B.cR,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagX(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.frD,m,m,m)
r=r.gaqs()
p=n.d.gaqs()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bH,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.uv(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bZF,m,m,m,n.gctZ(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j5:B.n4
r=r?"Private":"Public"
r=A.E(n.ax_(q,"Privacy",r,n.a.d.w?n.gcGh():m),1)
q=A.E(n.ax_(B.zn,"Tree code",n.d.c,new C.e28(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.ax_(D.bQs,"Collaborators",p,n.gc6i()),1)],o),B.l,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kX){s=B.c.j(0.15)
B.d.v(p,A.a([B.U,A.aJ(!1,B.a3,!0,A.m(999),A.aP(!1,A.m(999),!0,new A.D(B.hc,A.A(A.a([A.X(B.oA,B.c,m,m,m,14),B.e3,A.d("View only",m,m,m,m,m,m,B.aVc,m,m,m)],o),B.l,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.q(m,A.by(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.GO,A.x(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.p(m,m,m,w,v,D.c5T,B.n),m,m,m,m,m,m,m,1/0)},
ax_(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aJ(!1,B.a3,!0,A.m(14),A.aP(!1,A.m(14),!0,new A.D(K.an1,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ay,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vv,A.d(f,w,1,B.a2,w,w,w,Aq.AH,w,w,w)],x.p),B.l,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgC.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgF(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dL(r,new C.dhe(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dhf(this),A.U(r).k("N<1,v>")))
return new A.D(B.ux,new A.a6(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.KT.prototype={}
C.GA.prototype={}
C.bgE.prototype={
gblF(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKF.prototype={}
C.bgF.prototype={
bQT(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.Q()
v=A.K()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bw
d.ah(new A.o(n,w),new A.o(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kR(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kR(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bv())
q=A.K()
q.r=B.c.gp(0)
d.N(new A.o(u,w),9,q)
q=A.K()
q.r=B.bD.gp(0)
d.af(t,q)},
bQQ(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhz())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dhA(f))
t=new A.N(a0,new C.dhB(f),A.U(a0).k("N<1,F>")).bY(0,new C.dhC()).cF(0,1/0,B.tR)
w=f.a
d.ah(f,new A.o(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.J)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.o(o,v),p,e)
continue}l=J.mZ(n)
k=Math.min(10,m/2)
m=$.Q()
j=A.a([],r)
i=new A.aF(m.r,B.ai,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.c6(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.c6(o,v,o,v+k)
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
$.Q()
w=A.K()
w.r=B.bR.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bw
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.J)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQQ(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQT(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bks.prototype={
gccg(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aDn
switch(w.c.a){case 0:return D.cZz
case 1:return D.daK
case 2:return D.dsK}},
gccj(){var w=this.c,v=C.hAm(w.w),u=C.hAm(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=t.gccg(),p=t.c,o=N.bEY(p.f),n=t.gccj(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gan(q).j(0.35),B.cM,10)],m),k=r?B.as:B.c,j=A.L(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tJ(B.A,s,B.cj,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gan(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gan(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a9(B.a6,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.hU(w,B.aq),B.f,s,s,new A.p(k,s,j,s,s,s,B.a7),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a9(B.aA,B.aF,B.x,q,s,s),B.a7),s,56,s,s,B.H3,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.L(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.q(s,A.d(""+k,s,s,s,s,s,s,D.fCb,s,s,s),B.f,s,s,new A.p(B.ch,s,w,j,s,s,B.n),s,s,s,s,D.bHw,s,s,s),s,s,s,-6,-4,s))}k=r?B.cq:B.c
j=A.m(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cq,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bq,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a6(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ay,A.q(s,A.x(p,B.l,s,B.e,B.Q,0,B.p),B.f,s,D.b6f,new A.p(k,s,w,j,m,s,B.n),s,s,s,s,D.bHH,s,s,s)],v),B.l,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfH.prototype={
a4(d,e){var w,v,u,t,s
$.Q()
w=A.K()
v=this.b
u=v?B.c:D.bj5
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.o(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.byq.prototype={
B(d){var w=this,v=null,u=new C.fmF(w),t=w.c,s=t?B.cq:B.c,r=A.m(12),q=u.$3(B.hW,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.by:B.fq,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wG,"Zoom out",w.e)
return A.aJ(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.q(v,v,B.f,t?B.by:B.fq,v,v,v,1,v,v,v,v,v,22),u.$3(B.apB,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.ds,v,v,v,B.aj)}}
C.bnL.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.L(B.bR,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.x(A.a([A.X(s?O.a1P:A6.OX,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fyk,v,v,v)],r),B.l,v,B.bc,B.j,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fw9,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eXO(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a6(84,v,A.x(u,B.l,v,B.e,B.j,0,B.p),v)}}
C.a09.prototype={
S(){return new C.aDv()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDv.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.c
r.y=t==null?D.yW:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ijq(w.r,w.f)
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
v.a3()},
Qk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hpp(p.y,p.w)
w=3
return A.b(A.ly(t.a.w,B.Jt),$async$Qk)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b17(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qk)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hUZ(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Az.Ht(78,800),$async$Qk)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxu(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qk,v)},
cci(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.yW,null,null,null,"","","","","",1,!1,0)
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
s=v.aG1(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).O(s)},
aaH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dxt(r),s,null,!0,!0,x.y),$async$aaH)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===B.J,i=new C.ui(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dxD(l),g),g.k("M.E"))
h=j?B.ec:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bFV,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.hb(A.aP(!1,k,!0,new A.D(B.mg,A.X(B.ei,B.pe,k,k,k,17),k),B.cR,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLN(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jV:B.jm
t=N.bEY(l.as)
if(l.as==null)s=A.X(B.pl,j?B.bu:B.bq,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.h8(u,t,s,k,42),A.ap(0,A.h8(B.bR,k,D.bT6,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gccf(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDx(t,"Full name",B.n2,1,1,i,B.mA)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bkq(i,u,new C.dxE(l),k)],v),B.l,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bzg],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dxF(),A.U(o).k("N<1,eI<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bzi],q)
B.d.v(q,new A.N(f,new C.dxH(),A.U(f).k("N<1,eI<n?>>")))
o=A.x(A.a([t,B.am,new C.aeb(i,r,"Who is their parent?",p,new C.dxI(l),k,o),B.aB,n,B.am,new C.aeb(i,m,"Who is their spouse / partner?",q,new C.dxJ(l),k,o)],v),B.al,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDx(q,"Birth date",D.aoG,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDx(m,"Birth place",B.a23,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDx(n,"Date of death (if deceased)",D.aqR,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDx(p,"Occupation",B.a3f,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aB,s,B.bA,new C.aec(i,"Identity",u,k),B.af,new C.aec(i,"Family links",o,k),B.af,new C.aec(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDx(r,"Notes",B.lm,5,3,i,k)],v),B.l,k,B.e,B.j,0,B.p),k),B.af,new C.aDw(i,"Child order",l.cko(l.at),new C.dxK(l),new C.dxL(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hex(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dxM(l):k
B.d.v(r,A.a([B.X,new C.aDw(i,"Visible in tree",u,w,new C.dxN(l),k)],v))}r.push(B.X)
w=j?B.jV:B.jm
u=A.m(14)
t=A.L(j?B.eg:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.iQ(k,B.bR,k,B.ag,k,new C.dxO(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.n),k,k,k,k,O.aly,k,k,k))
r.push(B.bA)
w=j?B.aP:B.as
j=j?B.eg:B.bP
r.push(A.A(A.a([A.E(A.dU(B.nZ,new C.dxG(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.m(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.be,A.E(A.bI(D.f8P,k,l.gcch(),A.bo(B.aY,k,k,0,B.c,k,B.cp,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.j,0,k,k))
r.push(B.ay)
return A.eg(B.f6,k,B.ag,h,new A.a6(420,k,A.ci(A.x(r,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.amm,k,B.alK,new A.b9(g,B.a1),k,k)},
cko(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aec.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jV:B.jm,s=A.m(16)
return A.x(A.a([new A.D(D.amM,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.L(v?B.eg:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bi,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.bkr.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ec:B.c,r=A.m(12),q=A.L((t?B.eg:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bt(u,B.eK,u,B.wf,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bq,u,u,u,u,u,u,u,u,u,u,u,B.cC,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aeb.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ec:B.c,s=A.m(12),r=A.L((u?B.eg:B.bP).j(0.85),B.r,1),q=A.X(B.rZ,u?B.bu:B.bq,v,v,v,v),p=A.l(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ec:B.c
return A.q(v,new A.Em(A.a5o(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,v,v,v,B.cC,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.n),v,v,v,v,B.kt,v,v,v)}}
C.bkq.prototype={
B(d){var w=new C.dxP(this)
return A.A(A.a([w.$3(D.wo,"Male",B.PH),B.ae,w.$3(D.os,"Female",B.Pr),B.ae,w.$3(D.yW,"Other",B.nJ)],x.p),B.l,null,B.e,B.j,0,null,null)}}
C.aDw.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jV:B.jm,r=A.m(14),q=A.L(t?B.eg:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aJH(u,B.wG,w.f,v),B.bm,new C.aJH(u,B.hW,w.r,v)],o),B.l,v,B.e,B.j,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.n),v,v,v,v,B.ey,v,v,v)}}
C.aJH.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.ec:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bu:B.bq).j(0.4)
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a6(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aed.prototype={
bV4(d){switch(d.a){case 0:return B.bR
case 1:return B.bD
case 2:return B.d0}},
bV5(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_1(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AJ(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ec:B.c
u=A.m(12)
t=A.L((w?B.eg:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bq,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ay,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.q(p,A.A(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.n),p,p,p,B.cx,B.yE,p,p,1/0)},
afj(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jV:B.jm,s=A.m(16),r=A.L(v?B.eg:B.bP,B.r,1)
return A.x(A.a([new A.D(D.amM,u,w),A.q(w,A.x(e,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hFx(r,q),o=q.c,n=t.bV4(o),m=N.bEY(q.f),l=t.e.a,k=l?B.ec:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kX?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bq,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.h8(u,m,m==null?A.X(B.pl,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a7),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.d(t.bV5(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,B.me,s,s,s),s,s,s)
u=x.p
i=A.a([t.AJ("Full name",i,B.n2)],u)
if(p>0)i.push(t.AJ("Child order","#"+p,B.Px))
r=A.a([h,B.ay,r,B.aR,l,B.X,v,B.bA,t.afj("Identity",i),B.af,t.afj("Life details",A.a([t.AJ("Birth date",q.w,D.aoG),t.AJ("Birth place",q.x,B.a23),t.AJ("Date of death",q.y,D.aqR),t.AJ("Occupation",q.z,B.a3f)],u)),B.af,t.afj("Family links",A.a([t.AJ("1. Parent",t.b_1(q.d),B.Hj),t.AJ("2. Spouse",t.b_1(q.e),B.Hx)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.afj("Notes",A.a([t.AJ("Notes",q,B.lm)],u))],u))
r.push(B.bA)
r.push(A.bI(B.KZ,s,new C.dxZ(d),A.bo(B.aY,s,s,s,s,s,B.cp,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eO(s,k,new A.cS(B.m2,A.ci(A.x(r,B.al,s,B.e,B.Q,0,B.p),B.t,s,B.y,s,B.yL,s,s,B.ah),s),s,s,s,B.GR,B.d7,s,new A.b9(j,B.a1),s)}}
C.Gw.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bq
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uz,A.hb(A.aJ(!1,B.a3,!0,A.m(8),A.aP(!1,A.m(8),!0,new A.a6(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqW.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.cfr(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jr(w,new C.cfs(),t,x.fO))
return s}}
C.aqX.prototype={
S(){return new C.aF4(A.a([],x.bF))},
gd1(){return this.c}}
C.aF4.prototype={
Y(){this.a2()
this.K6()},
K6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$K6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfv(t.a.c),$async$K6)
case 3:r=e
w=4
return A.b(C.Bn(t.a.c),$async$K6)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.ri(q,new C.e39(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e3a(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$K6,v)},
z2(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
KU(d,e){return this.cJT(d,e)},
cJT(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3e(q,e))
t=3
w=6
return A.b(d.$0(),$async$KU)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3f(q))
$.eW.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KU,v)},
Yo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pu(r,s.c,s.e),$async$Yo)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KU(new C.e36(t),"Preparing download\u2026"),$async$Yo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yo,v)},
Ys(d){return this.bSX(d)},
bSX(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ys=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pu(r,s.c,s.e),$async$Ys)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KU(new C.e37(t,d),"Preparing file\u2026"),$async$Ys)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ys,v)},
ahj(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xM.cq().MF(B.SE,B.uC,!0),$async$ahj)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jI(o,0,null)
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
case 6:u=A.Hs()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahj,v)},
Z4(d){return this.c2r(d)},
c2r(d){var w=0,v=A.j(x.H),u=this
var $async$Z4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KU(new C.e38(u,d),"Restoring family trees\u2026"),$async$Z4)
case 2:return A.h(null,v)}})
return A.i($async$Z4,v)},
Z3(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahj(),$async$Z3)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z4(s),$async$Z3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z3,v)},
a2Z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pu(r,s.c,s.e),$async$a2Z)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KU(new C.e3d(t),"Creating QR code\u2026"),$async$a2Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2Z,v)},
a2A(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DA()){t.z2("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).ca(A.e9(new C.e3b(),!0,null,x.N)),$async$a2A)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z4(r),$async$a2A)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2A,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=o?B.BE:B.iC,m=o?D.ajZ:B.aP,l=o?B.aM:B.bP,k=o?B.aP:B.as,j=new C.dhD(n,m,l,k,o?B.bK:B.bq)
l=A.aG(p,p,p,p,A.X(B.eN,k,p,p,p,20),p,p,p,new C.e3h(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eE(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dhb(!0,B.jI,B.aH,B.aH,q.r?p:q.gcAn(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwx()
t.push(A.E(C.dhb(!s,B.jr,B.b9,B.br,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dhb(!1,B.hX,B.aY,B.bR,q.r?p:q.gbSQ(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dhb(!1,R.zo,B.aw,B.aV,q.r?p:q.gc2o(),j,s,"Upload backup file"),1))
l=A.a([new C.bgD(v,l,p),B.l5,new C.ads(j,"QR restore",p),B.X,t,B.d8,new C.ads(j,"Backup files",p),B.X,A.A(r,B.l,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l5,new C.ads(j,"One tree",p),B.X],u)
B.d.v(v,J.b8(q.d,new C.e3i(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cd(l,p,p,B.a0y,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.L(B.aY.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.q(p,A.A(A.a([O.aTD,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.n),p,p,p,p,B.Cg,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dhD.prototype={}
C.bgD.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aY.j(0.32),B.kB,28)],x.V)
t=A.ap(p,A.X(B.uU,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.q(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.q(p,D.c17,B.f,p,p,new A.p(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oU,A.E(A.x(A.a([D.fHj,B.U,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.c92,B.n),p,p,p,p,p,p,p,p)}}
C.ads.prototype={
B(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)}}
C.bgB.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aJ(!1,B.a3,!0,q,A.aP(!1,o,!0,A.eJ(A.da(new A.D(E.a0a,A.x(A.a([A.q(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.n),q,q,q,q,B.rV,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bH,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cC,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgG.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aY.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,A.eJ(new A.D(B.eY,A.A(A.a([A.q(v,D.c0m,B.f,v,v,new A.p(q,v,A.L(B.aY.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rV,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.X(B.hX,o,v,v,v,20)],n),B.l,v,B.e,B.j,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0t.prototype={
S(){return new C.aF3()},
gd1(){return this.c}}
C.aF3.prototype={
Y(){this.a2()
this.aae()},
aae(){var w=0,v=A.j(x.H),u=this,t
var $async$aae=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3M(u.a.c,B.E3),$async$aae)
case 2:t=e
if(u.c!=null)u.m(new C.e31(u,t))
return A.h(null,v)}})
return A.i($async$aae,v)},
aiL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e32(q))
t=4
p=A.hr5(q.a.d,B.E3)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atf(n.e,m,l,B.E3,p,n.f),$async$aiL)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e33(q))
q.c.M(x.q).f.U(D.fin)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ei(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e34(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiL,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=p?B.jC:B.qh,n=p?B.iB:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eE(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fXS,q,q,q,1,q,!0)
w=A.m(24)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.qa(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aY,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.x(A.a([B.U,u,B.bA,t,B.U,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bc,B.j,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcwg()
if(u)u=B.Kp
else u=A.X(r.e===!0?B.hI:B.aoF,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a6(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aY,q,B.h5,q,q,q,new A.ay(B.aY.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hU,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aD:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a6(1/0,q,A.bI(B.AQ,q,new C.e35(d),A.bo(B.aY,q,q,q,q,B.h5,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a0u.prototype={
S(){return new C.blU(A.zV(B.ys,B.o4,B.v1))}}
C.blU.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eE(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fPz,w,w,w,1,w,!0),B.w,A.zU(this.d,B.c_,new C.e3j(this,d)),w,!1,!1,w,w)}}
C.b_E.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.S8,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lV.prototype={}
C.a7g.prototype={
S(){return new C.blA(null,null)}}
C.blA.prototype={
Y(){var w=this,v=null
w.a2()
w.d=A.bn(v,B.rN,v,1,v,w)
w.e=A.bn(v,B.qr,v,1,v,w)
w.a.toString
w.d.cP(0)
w.e.cP(0)},
bz(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cP(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cP(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bz5()},
B(d){var w,v,u=this,t=B.d.dP(D.a6a,new C.dPC(u),new C.dPD())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cD2(A.c9(new A.h6(A.a([w,v],x.dS)),new C.dPE(u,t),null),!0)}}
C.blz.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3F(d,e)
break
case"house":p.mg(d,e,D.dfL)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.Q()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.o(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mm(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bu(d,e,12)
p.yE(d,e,B.lf,5,14)
break
case"grocery":p.cl7(d,e)
break
case"calculator":p.ckP(d,e)
break
case"lumber":p.clf(d,e)
break
case"kitchen":p.cla(d,e)
break
case"landscape":p.mg(d,e,D.dgm)
s=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.c6(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.c6(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bv())
w=A.K()
w.r=B.eq.j(0.85).gp(0)
d.af(s,w)
p.Bu(d,e,8)
p.yE(d,e,B.i8,4,18)
break
case"plumbing":p.clo(d,e)
break
case"electrical":p.mg(d,e,D.drX)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.Q()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mm(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mm(d,e,B.m5.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bu(d,e,10)
break
case"store":p.cly(d,e)
break
case"paint_remodel":p.clj(d,e)
break
case"roofing":p.clq(d,e)
break
case"warehouse":p.clF(d,e)
break
case"vehicles":p.clD(d,e)
break
case"farm":p.cl1(d,e)
break
case"restaurant":p.clp(d,e)
break
case"tools":p.clB(d,e)
break
case"wallet":p.clE(d,e)
break
case"concrete":p.ckV(d,e)
break
case"blueprint":p.ckN(d,e)
break
default:p.b3F(d,e)}},
mg(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.Q()
w=A.K()
w.sav(new A.a9(B.aA,B.aF,B.x,f,null,null).aK(0,v))
d.ar(v,w)},
mm(d,e,f,g,h){var w,v,u,t=new A.o(e.a/2,e.b/2),s=e.gdA()/2-h
$.Q()
w=A.K()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cC(A.bY(t,s),u,u+0.1439896632895322-u,!1,w)}},
yE(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.o(q+t*o,p+s*o),3.5,r)}},
Bu(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.o(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3F(d,e){var w,v=this
v.mg(d,e,D.dqi)
w=v.c
v.mm(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mm(d,e,B.bN.j(0.45),-w*3.141592653589793*1.4,22)
v.bQM(d,e,B.i5,w)
v.yE(d,e,B.c.j(0.7),6,8)},
bQM(d,e,f,g){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
cl7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.cuL)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ap(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.ddW[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.o(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mm(d,e,B.c.j(0.35),w,16)
l.yE(d,e,B.i8,5,12)},
ckP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mg(d,e,D.cuT)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdA()
$.Q()
q=A.K()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.N(new A.o(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fq(h,B.cs,h,h,h,h,B.a5,B.bX,h,B.dz,B.bY)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dia[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.en(r,h,h,B.cJ,h,h,h,h,h,h,new A.H(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a4(d,new A.o(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ap(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cuV[o]
l=B.kM.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.en(m,h,h,B.cJ,h,h,h,h,h,h,new A.H(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a4(d,new A.o(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ap(o,3)*0.38)+Math.sin(n)*6))}i.mm(d,e,B.c.j(0.35),w*1.5,14)
i.mm(d,e,B.eL.j(0.55),-v*3.141592653589793*2,8)
i.mm(d,e,B.y6.j(0.4),r*2.8,22)
i.yE(d,e,B.q8,8,10)
i.Bu(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.Q()
v=new A.ao(B.O,B.M,B.R,B.S,B.P)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.o(12,j),new A.o(t,j),v)}},
clf(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,W.aAt)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bl(new A.a1(20,r,u,r+10),B.hP)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=A.ar(B.h_,B.o9,(s+1)/2).gp(0)
d.am(q,p)}o.mm(d,e,B.h_.j(0.35),w,15)
o.Bu(d,e,8)},
cla(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.deq)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.o(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mm(d,e,B.bN.j(0.4),-w*3.141592653589793*2.2,11)
l.yE(d,e,B.q5,4,14)},
clo(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mg(d,e,D.d2B)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.o(w,u),q*(0.12+r*0.14+p),o)}n.yE(d,e,B.pd,6,12)
n.mm(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cly(d,e){var w,v,u,t,s,r,q,p=this
p.mg(d,e,D.cIC)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bl(new A.a1(r,14,r+u,22),B.ix)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.fn,B.bN,(s+1)/2).gp(0)
d.am(r,q)}p.mm(d,e,B.c.j(0.3),w,16)
p.Bu(d,e,8)
p.yE(d,e,B.w_,5,13)},
clj(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d8V)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bl(new A.a1(r,q,r+8,q+(18+s*22)),B.hQ)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=[B.iq,B.dl,B.bN,B.ev][t].j(0.85).gp(0)
d.am(q,r)}this.mm(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
clq(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d6i)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.o(u*(0.1+r),s),new A.o(u*(0.18+r),s+10),q)}this.yE(d,e,B.cu,7,11)},
clF(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.cLm)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bl(new A.a1(q,p,q+(t-s*8),p+16),B.hP)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.cu,B.aP,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mm(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clD(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dw8)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bl(new A.a1(s,r,s+28,r+8),B.hP)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bu(d,e,6)},
cl1(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dd_)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.Q()
s=A.K()
s.r=B.m5.j(0.75).gp(0)
d.N(new A.o(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.hp.j(0.85).gp(0)
p.c=3
d.ah(new A.o(q,v),new A.o(q+s*6,t),p)}this.mm(d,e,B.m5.j(0.35),w,14)},
clp(d,e){var w,v,u,t,s,r,q=this
q.mg(d,e,D.dfA)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.o(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yE(d,e,B.q5,5,16)
q.Bu(d,e,7)},
clB(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dtw)
w=o.c
v=w*3.141592653589793
o.mm(d,e,B.o9.j(0.55),v*3,10)
o.mm(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.o9.j(0.8).gp(0)
d.N(new A.o(v+r*34,u+q*22),4,p)}},
clE(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dwO)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bl(new A.a1(q,p,q+36,p+22),B.ix)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.i8,B.m5,r).gp(0)
d.am(p,q)}o.Bu(d,e,9)
o.mm(d,e,B.c.j(0.4),w*2.2,12)},
ckV(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dl6)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.o(v,u),34)
$.Q()
s=A.K()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cC(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.o(v+t*34,u+s*34),3,p)}},
ckN(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dgG)
$.Q()
w=A.K()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.o(t,0),new A.o(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.o(0,s),new A.o(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.Q()
u=A.K()
u.r=B.dl.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mm(d,e,B.lf.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.au0.prototype={
a0e(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRI(),$async$a0e)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9t(s),$async$a0e)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0e,v)},
ahk(d){return this.cnX(d)},
cnX(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.isq(d),$async$ahk)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahk,v)},
B(d){var w,v,u,t=null,s=A.S(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jV:B.jm
w=x.p
v=A.a([C.aS6(!0,B.rj,1/0,B.qD,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bM(B.b7,t,t,new A.D(B.ur,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.V,t,t,!0,t,t,t,t,t,B.aBs,t,t),t,t,t),t),t),new A.p(t,t,t,t,t,new A.a9(B.b7,B.ba,B.x,u,t,t),B.n),B.bj))}v.push(A.ap(8,A.A(A.a([A.E(A.dg(D.bUS,t,D.fDz,new C.coP(this,d),A.bo(B.aY,t,t,t,B.c,t,B.k1,t,t,t,t,B.cf)),1),B.ae,A.E(A.es(D.c2n,D.fSM,this.gceT(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.k1,t,t,D.b4N,t,t,t,B.cf)),1)],w),B.l,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aJ(!1,B.a3,!0,B.rj,new A.an(B.a0,t,B.b2,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.aj),t)}}
C.aN6.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.aV5.prototype={}
C.aV4.prototype={}
C.aT5.prototype={}
C.a_7.prototype={
S(){return new C.aAf()}}
C.aAf.prototype={
Y(){var w,v,u=this
u.a2()
u.a.toString
w=new A.ba("",B.b6,B.aQ)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KK(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.M(x.q).f.U(D.fiS)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).O(new C.aV5(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.S(d).ax.a===B.J,l=m?B.ec:B.c,k=A.m(20),j=A.q(n,D.c22,B.f,n,n,new A.p(B.aY.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bH,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.be,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bu:B.bq,n,n,n,n),n,n,n,new C.d8O(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,11,n,n,B.cC,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hrl(new C.d8P(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jV:B.jm
r=A.m(12)
q=A.m(12)
p=m?B.eg:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bt(n,new A.b6(4,r,B.dq),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d8Q(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A0.Kw,n,n,n,n)
u=m?B.aP:B.as
m=m?B.eg:B.bP
return A.eO(n,l,new A.cS(B.m2,A.ci(A.x(A.a([j,B.aR,i,B.ay,w,B.U,v,B.aR,t,B.bA,A.A(A.a([A.E(A.dU(B.dn,new C.d8R(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cp,n,new A.b9(A.m(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bI(D.fT1,n,o.ga3l(),A.bo(B.aY,n,n,n,B.c,n,B.cp,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.Q,0,B.p),B.t,n,B.y,n,B.Ch,n,n,B.ah),n),n,n,n,A5.Ci,B.d7,n,new A.b9(k,B.a1),n)}}
C.a_6.prototype={
S(){return new C.aAe()}}
C.aAe.prototype={
Y(){this.a2()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KK(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.M(x.q).f.U(D.fgv)
return}v=this.c
v.toString
A.a7(v,!1).O(new C.aV4(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.S(d).ax.a===B.J,o=p?B.ec:B.c,n=A.m(20),m=A.q(q,D.bZx,B.f,q,q,new A.p(B.bR.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bH,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bq,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.be,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bu:B.bq,q,q,q,q),q,q,q,new C.d8K(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.j,0,q,q)
l=B.aY.j(p?0.12:0.08)
w=A.m(12)
v=A.L(B.aY.j(0.25),B.r,1)
u=A.X(B.aor,B.aY.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.j,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.n),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jV:B.jm
t=A.m(12)
s=A.m(12)
r=p?B.eg:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bt(q,new A.b6(4,t,B.dq),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d8L(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l6,q,q,q,q)
w=p?B.aP:B.as
p=p?B.eg:B.bP
return A.eO(q,o,new A.cS(B.m2,A.ci(A.x(A.a([m,B.aR,l,B.aB,v,B.bA,A.A(A.a([A.E(A.dU(B.dn,new C.d8M(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cp,q,new A.b9(A.m(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bI(D.h_8,q,this.ga3l(),A.bo(B.bR,q,q,q,B.c,q,B.cp,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.Ch,q,q,B.ah),q),q,q,q,A5.Ci,B.d7,q,new A.b9(n,B.a1),q)}}
C.ZE.prototype={
S(){return new C.ayZ()}}
C.ayZ.prototype={
Y(){var w,v=this
v.a2()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aQ),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.ax,w)},
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
v.a3()},
gK1(){var w,v=this.e
v===$&&A.c()
w=A.d1(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakw(){var w=this.f
w===$&&A.c()
w=A.d1(B.a.i(w.a.a))
return w==null?0:w},
gb6s(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQP(d){var w,v=B.i.D(this.gK1()+d,0.25,999999),u=B.i.iZ(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.i.L(v))
else{u=B.i.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cH9())},
azJ(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aY,w,w,w,20):w,u=d.a,t=u?B.jV:B.jm,s=A.m(14),r=A.m(14)
u=u?B.eg:B.bP
return A.bt(w,new A.b6(4,s,B.dq),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.adR),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceU(d,e,f){return this.azJ(d,e,f,null)},
KK(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakw()<=0){s.c.M(x.q).f.U(D.fkK)
return}r=s.c
r.toString
v=s.gK1()
u=s.gakw()
t=s.gb6s()
A.a7(r,!1).O(new C.aT5(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.ui(n),l=n?B.ec:B.c,k=A.m(24),j=x.O,i=A.a([B.aY.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.q(o,D.bSN,B.f,o,o,new A.p(o,o,A.L(B.aY.j(0.35),B.r,1),h,o,new A.a9(B.a6,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bH,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.cC,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.be,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bu:B.bq,o,o,o,o),o,o,o,new C.cHf(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azJ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PF),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A0.Kw,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jV:B.jm
t=A.m(14)
s=A.L(n?B.eg:B.bP,B.r,1)
r=A.aG(o,o,o,o,A.X(B.wG,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cHg(p),o,o,o,o,o,B.cf)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c3W,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cHh(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aG(o,o,o,o,A.X(B.hW,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cHi(p),o,o,o,o,o,B.cf)],w),B.l,o,B.e,B.Q,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azJ(m,"Amount","0.00",B.ic),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cHj(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.N(D.d9r,new C.cHk(p,m),t),t.k("ak.E"))
i=A.a([i,B.bA,v,B.aB,h,B.U,s,B.af,A.bV(B.bG,u,B.bs,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceU(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cHl(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l6,o,o,o,o)],w))}i.push(B.aR)
h=B.aY.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK1()===B.i.iZ(p.gK1())?B.i.L(p.gK1()):p.gK1()
s=p.gb6s()
r=A.Bp(p.gakw())
i.push(A.q(o,A.A(A.a([A.E(A.x(A.a([u,B.ay,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bFL(p.gK1()*p.gakw(),B.b1,!1,B.u)],w),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a9(B.a6,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jo,o,o,o))
i.push(B.bA)
j=A.m(14)
h=n?B.eg:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cp,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cHm(d),h),1),B.au,A.E(A.dg(D.arY,o,D.fW1,p.ga3l(),A.bo(B.aY,o,o,0,B.c,o,B.cp,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.j,0,o,o))
return A.eO(o,l,new A.cS(Ah.XB,A.ci(A.x(i,B.al,o,B.e,B.Q,0,B.p),B.t,o,B.y,o,Ak.rT,o,o,B.ah),o),o,o,o,B.Oi,B.d7,o,new A.b9(k,B.a1),o)}}
C.a2g.prototype={
S(){return new C.byi()}}
C.byi.prototype={
Y(){var w,v,u=this
u.a2()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aQ),v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=r?B.ec:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jV:B.jm
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bt(s,new A.b6(4,A.m(12),B.dq),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fma(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dn,new C.fmb(d),s),1)
r=A.bo(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eO(s,q,new A.D(B.Ch,A.x(A.a([o,B.aB,v,B.aR,A.A(A.a([u,B.au,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fmc(t,d),r),1)],w),B.l,s,B.e,B.j,0,s,s)],w),B.l,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d7,s,new A.b9(p,B.a1),s)}}
C.acv.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gk.prototype={
S(){return new C.byg(null,null)}}
C.byg.prototype={
Y(){var w,v=this
v.a2()
w=A.bn(null,D.bzQ,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBo()},
gbCZ(){switch(this.a.r.a){case 1:return A.a([B.aY,B.bR,B.b1],x.O)
case 2:return A.a([B.bx,B.aY,B.b1],x.O)
case 3:return A.a([B.aH,B.ch,B.jW],x.O)
case 4:return A.a([B.hq,B.bR,B.fo],x.O)
case 0:return A.a([B.aY,B.bR,B.b1],x.O)}},
B(d){var w=A.S(d),v=this.d
v===$&&A.c()
return new A.em(A.c9(v,new C.fm8(this,new C.ui(w.ax.a===B.J)),null),null)}}
C.ayS.prototype={
S(){return new C.byh(null,null)}}
C.byh.prototype={
Y(){var w,v=this
v.a2()
w=A.bn(null,B.nB,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBp()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.fm9(this),null)}}
C.byf.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bl(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aN(w,w))
u=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
u.E(new A.j8(v))
w=A.K()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.am(v,w)
w=A.K()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.xJ(u)
t=A.a([],x.U)
w=new A.rv(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jG(y.B));--r
q=new A.BR(w,r)
w.iz()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUm(d,q,r,o,0,0.2,4.2,0.92)
p.aUm(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUm(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hNZ(e.a.a,e,t,t+f*i,!0),r=A.bE5(s.glV().a.getBounds())
$.Q()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bw
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a9(B.a6,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Iv,null).aK(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aPc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aPd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.ui.prototype={}
C.au_.prototype={
S(){return new C.aGy()},
ge3(){return this.c}}
C.aGy.prototype={
Y(){var w=this
w.a2()
w.d=w.a.d
w.aia()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.M4(w,v)
this.a3()},
aia(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aia=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEe(t.c,t.d.a),$async$aia)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eUY(u,s))
return A.h(null,v)}})
return A.i($async$aia,v)},
QM(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eUP(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.M4(t,s),$async$QM)
case 2:if(u.c!=null)u.m(new C.eUQ(u))
return A.h(null,v)}})
return A.i($async$QM,v)},
Rj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.S(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eUW(t,new C.ui(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Rj)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9t(q),$async$Rj)
case 6:case 5:t.m(new C.eUX(t,r))
w=7
return A.b(t.QM(),$async$Rj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rj,v)},
Ww(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ww=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.isa(r),$async$Ww)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eUK(t,new C.rn(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QM(),$async$Ww)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ww,v)},
cjZ(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hFt(t,new C.eUO(u),w,v)},
ac2(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b4z,w,w,B.n),w,22,w,w,w,w,w,22)},
ab4(d){return this.bOY(d)},
bOY(d){var w=0,v=A.j(x.H),u=this
var $async$ab4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eUN(u,d))
w=2
return A.b(u.QM(),$async$ab4)
case 2:return A.h(null,v)}})
return A.i($async$ab4,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.S(a2).ax.a===B.J,e=f?B.c3:B.iC,d=A.m(8),a0=A.X(Z.a1M,f?B.bu:B.bq,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.GY,A.A(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bq,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eUZ(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b2,B.t,A.a([A.by(A.m(22),C.aS6(!0,A.m(22),1/0,B.qD,g,d,1/0),B.aq),A.ap(10,A.dg(D.bXu,g,D.fYq,h.gb4o(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hd,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aY.j(f?0.5:0.38),B.f_,22),new A.ac(-4,B.G,B.bR.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.q(g,A.q(g,A.by(s,new A.an(B.a0,g,B.b2,B.t,A.a([C.aS6(!0,A.m(16),1/0,B.P7,g,r.c,1/0),A.c3(g,new A.p(g,g,g,g,g,new A.a9(B.b7,B.ba,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bj),A.ap(g,h.ac2(!0),g,g,8,g,8,g),A.ap(g,A.cDN(h.ac2(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cDN(h.ac2(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cDN(h.ac2(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dg(D.bTn,g,D.fRH,h.gb4o(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hd,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.c5D,B.n),g,g,g,g,B.mg,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bfi,B.od,B.ha],u):A.a([B.b1,B.aY,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aY.j(f?0.45:0.35),B.f_,24)],t)
r=A.m(22)
p=A.ap(g,A.X(B.k5,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.n),g,g,g,g,B.hb,g,g,g)],a1),B.l,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bFL(h.d.gxF(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.U,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cC,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.L(B.hs.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cM,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.q(g,A.by(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bEG,A.A(A.a([o,B.au,A.aJ(!1,B.a3,!0,g,A.aP(!1,n,!0,A.eJ(new A.D(V.wh,A.x(A.a([A.q(g,D.ary,B.f,g,g,new A.p(j,g,A.L(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fM,D.fGn],a1),B.l,g,B.e,B.Q,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjY(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,g,v,s,new A.a9(B.aA,B.aF,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aR,w,B.U,u,B.bA,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dg(Aw.a3D,g,D.fEd,h.gbDs(),A.bo(B.aY,g,g,g,B.c,g,B.iu,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.j,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ec:B.c
v=A.m(14)
u=A.L(f?B.eg:B.bP,B.r,1)
t=A.X(B.a26,f?B.bu:B.bq,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.x(A.a([t,B.X,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bq,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.j,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.n),g,g,g,g,B.qz,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eV_(h,new C.ui(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.C7,A.at(A.n3(g,f?B.bu:B.bq,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Ca,a0,g),A.E(A.ci(A.x(d,B.E,g,B.e,B.j,0,B.p),B.t,g,B.y,g,E.yM,g,g,B.ah),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bH8(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ec:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.m(16),m=A.q(u,u,B.f,u,u,D.b7k,u,u,u,u,u,u,u,5),l=B.aY.j(r?0.22:0.12),k=A.m(12)
l=A.q(u,A.X(s?B.id:B.hf,B.b1,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_x()
v=A.Bp(d.d)
B.d.v(t,A.a([B.ay,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bq,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.bc,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aY.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.q(u,C.bFL(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a9(B.a6,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hd,u,u,u)
w=x.p
return A.q(u,A.by(n,new A.EK(A.A(A.a([m,A.E(new A.D(B.alr,A.A(A.a([l,B.be,t,B.ae,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bu:B.bq).j(0.75),u,u,u,20),u,u,u,new C.eUL(this,d),u,u,u,u,u,B.cf)],w),B.l,u,B.e,B.j,0,u,u),u),1)],w),B.al,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b6b,new A.p(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aey.prototype={
EW(d){return this.bQo(d)},
bQo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pu(d,o,!1),$async$EW)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).O(null)
w=4
return A.b(A.bQ(Aj.C5,null,x.H),$async$EW)
case 4:s=t.d
w=5
return A.b(C.fVJ(!0,o,s),$async$EW)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hf(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EW)
case 6:p=f
w=7
return A.b(A.pt(o,!1),$async$EW)
case 7:if(d.e==null){w=1
break}d.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EW,v)},
a0g(d){return this.cAo(d)},
cAo(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pu(d,s,!1),$async$a0g)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).O(null)
A.hE(d,new C.atU(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pt(s,!1),$async$a0g)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0g,v)},
QN(d){return this.cws(d)},
cws(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aL6,!0,"NgmyWorksheetProjectScan",x.N),$async$QN)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFM(s),$async$QN)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.M(x.q).f.U(D.fjS)
w=1
break}q=C.hgW(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$QN)
case 5:if(d.e==null){w=1
break}d.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QN,v)},
a0h(d){return this.cIJ(d)},
cIJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).O(null)
w=3
return A.b(C.bFi(),$async$a0h)
case 3:s=f
if(s==null){w=1
break}r=C.hgW(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$a0h)
case 4:if(d.e==null){w=1
break}d.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0h,v)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=new C.ui(u),s=w.d.d.length,r=u?B.ec:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kB,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wg,A.q(v,A.x(A.a([w.cyY(d,t,s),new A.D(D.bE4,A.x(A.a([w.b7n(t,"QR restore"),B.X,A.A(A.a([w.b2n(t,!0,B.jI,B.aH,B.aH,new C.eV1(w,d),"Show to scan","QR code"),B.au,w.azK(t,B.jr,B.b9,B.br,new C.eV2(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.j,0,v,v),B.d8,w.b7n(t,"Backup files"),B.X,A.A(A.a([w.azK(t,B.hX,B.aY,B.bR,new C.eV3(w,d),"Full copy","Backup file"),B.au,w.azK(t,R.zo,B.aw,B.aV,new C.eV4(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.l,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.p(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eV,B.cG,B.fR],k):A.a([B.b1,B.aY,B.bR],k)
w=A.ap(l,A.X(B.uU,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.m(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.q(l,C.aS6(!0,A.m(13),64,D.bOF,l,r.c,64),B.aq,l,l,new A.p(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abi,l,l,l)
r=C.bFL(r.gxF(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bEs,A.x(A.a([v,A.A(A.a([s,B.ex,A.E(A.x(A.a([u,B.ay,t,B.U,A.A(A.a([r,B.ae,A.q(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.n),l,l,l,l,B.fV,l,l,l)],m),B.l,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eV0(d),l,l,l,A.nZ(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aTr,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.l,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.aA,B.aF,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7n(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bq,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
b2n(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ajZ:B.aP
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eg:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.L(h.j(0.35),B.r,1)
t=A.q(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.n),r,r,r,r,B.rV,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aJ(!1,B.a3,!0,r,A.aP(!1,q,!0,A.eJ(new A.D(E.a0a,A.x(A.a([t,B.af,u,B.bH,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bq,r,r,r,r,r,r,r,r,11,r,r,B.cC,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azK(d,e,f,g,h,i,j){return this.b2n(d,!1,e,f,g,h,i,j)}}
C.atU.prototype={
S(){return new C.bng()}}
C.bng.prototype={
Y(){this.a2()
this.ag4()},
ag4(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag4=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFN(p.c,p.d),$async$ag4)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eUF(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eUG(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag4,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.S(d).ax.a===B.J,f=g?B.BE:B.iC,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eN,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eUH(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.T,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.x8],u),B.l,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eV,B.cG,B.fR],s):A.a([B.b1,B.aY,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aY.j(g?0.4:0.3),B.f_,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.di,B.K,h,h)
p=C.bFL(p.gxF(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.q(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.q(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.n),h,h,h,h,B.fV,h,h,h)],u),B.l,h,B.bc,B.j,0,h,h)],u),B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a9(B.aA,B.aF,B.x,s,h,h),B.n),h,h,h,h,E.a0x,h,h,1/0)
t=g?D.bqu:B.c
q=A.m(24)
p=A.L(w?B.aH.j(0.4):B.aY.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vt,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.er2)
else{m=A.m(20)
l=A.L(B.aO,B.r,1)
o.push(A.q(h,A.qa(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aR)
n=w?B.aH:B.aY
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.L((w?B.aH:B.aY).j(0.35),B.r,1)
k=w?B.Pl:B.PT
k=A.X(k,w?B.aH:B.aY,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.j,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.n),h,h,h,h,B.iu,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ae.Ou,e,h),A.E(A.ci(A.x(A.a([s,B.aR,A.q(h,A.x(o,B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.n),h,h,h,h,B.uy,h,h,1/0)],u),B.l,h,B.e,B.j,0,B.p),B.t,h,B.y,h,E.amx,h,h,B.ah),1)],u),B.l,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.atZ.prototype={
S(){return new C.aGx(A.zV(B.NI,B.o4,B.v1))}}
C.aGx.prototype={
t(){this.d.t()
this.a3()},
aOK(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j_(w,d)},
cfM(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.ipt(t)
if(s!=null){this.aOK(s)
return}r=C.hvV(t)
if(r!=null)q=A.cQ(r,p,0)
else q=!1
if(q){this.aOK(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eE(A.a([A.aG(t,t,t,t,A.X(u.f?B.uL:A9.Pt,t,t,t,t,t),t,t,t,new C.eUJ(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BE,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fRA,t,t,t,1,t,!0),q=A.zU(u.d,B.c_,u.gcfL()),p=A.m(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.L(B.aY,B.r,3),p,A.a([new A.ac(2,B.G,B.aY.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b2,B.t,A.a([q,p,A.ap(32,A.q(t,D.fQl,B.f,t,t,new A.p(w,t,A.L(B.aY.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jo,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLr.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.OX.prototype={
S(){return new C.aGz(D.ad9,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGz.prototype={
gcGv(){return J.bGT(this.e,0,new C.eVr())},
Y(){this.a2()
$.aW.c1$.push(this)
this.wi()},
t(){$.aW.hW(this)
this.a3()},
jm(d){if(d===B.fQ)this.wi()},
wi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Dz(q.a.c).dg(0,B.k0),$async$wi)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eVn(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eVo(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wi,v)},
Is(d){return this.bN5(d)},
bN4(){return this.Is(null)},
bN5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Is=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isd(l,d),$async$Is)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lC(l,r,q,D.dlm,new A.V(Date.now(),0,!1))
w=4
return A.b(C.M4(t.a.c,p),$async$Is)
case 4:o=f
w=5
return A.b(t.wi(),$async$Is)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.M(x.q).f.U(D.fgZ)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.M(q).f.U(D.fiM)
else n.M(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.F_(m)
case 1:return A.h(u,v)}})
return A.i($async$Is,v)},
F_(d){return this.cjK(d)},
cjK(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.au_(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F_)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.M4(u.a.c,t),$async$F_)
case 5:case 4:w=6
return A.b(u.wi(),$async$F_)
case 6:return A.h(null,v)}})
return A.i($async$F_,v)},
w3(d){return this.c2t(d)},
c2t(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFi(),$async$w3)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aL6,!0,"NgmyWorksheetProjectScan",x.N),$async$w3)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFM(q),$async$w3)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.M(x.q).f
r.U(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hgW(s)
w=15
return A.b(C.M4(t.a.c,p),$async$w3)
case 15:o=f
w=16
return A.b(t.wi(),$async$w3)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.M(x.q).f.U(D.fiR)
w=1
break}r.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.F_(p)
case 1:return A.h(u,v)}})
return A.i($async$w3,v)},
Op(d){return this.bLK(d)},
bLK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Op=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eV8(d),s,null,!0,!0,x.y),$async$Op)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p2(t.a.c,A.a([],x.D)),$async$Op)
case 6:w=7
return A.b(t.wi(),$async$Op)
case 7:s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fh3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
cjX(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eVh(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8_(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jV
else w=B.c
v=A.m(16)
u=A.L(p?B.eg:B.bP,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.q(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aJ(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(r,A.x(A.a([s,B.af,t,B.bH,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bq,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.n),r,r,r,r,B.wf,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0M(d,e){return this.cjL(d,e)},
cjL(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0M=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eVc(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0M)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hFt(r,new C.eVd(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Or(d,e),$async$a0M)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0M,v)},
b50(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.q(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.av
else t=h.a?B.aP:B.as
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bq,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aJ(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cg,A.A(A.a([s,B.be,t,A.X(B.eJ,w?B.bu:B.bq,u,u,u,u)],v),B.l,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqG(d,e,f,g,h,i){return this.b50(!1,d,e,f,g,h,i)},
Or(d,e){return this.bLU(d,e)},
bLU(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Or=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lo(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Or)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bE_(t.a.c,d.a),$async$Or)
case 6:w=7
return A.b(t.wi(),$async$Or)
case 7:r=t.c
if(r==null){w=1
break}r.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=new C.ui(o),m=o?B.c3:B.iC
if(q.f)o=D.bd4
else{w=q.bGf(n)
v=q.c1x(n)
u=q.gbDl()
if(o)t=B.jV
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.af,v,B.aR,new C.Gk(A.q(p,A.A(A.a([q.aDi(Q.P6,"Projects",n,D.ad9),q.aDi(B.wv,"Cashier",n,D.b14),q.aDi(B.Hj,"Family Tree",n,D.hDa)],r),B.l,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eA,0.95,u,p),B.bA],r)
w=q.d
if(w===D.ad9){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.as,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.ayS(q.gaT7(),p)],r),B.l,p,B.e,B.j,0,p,p),B.aB,q.cqI(n)],r))}else{o=q.a
if(w===D.b14)u.push(new C.apO(o.c,n,p))
else{w=q.r
u.push(new C.aqZ(o.c,o.d,o.e,o.f,new C.eVu(q),new C.eVv(q),new A.bJ(w,x.b4)))}}o=A.ci(A.x(u,B.E,p,B.e,B.j,0,B.p),B.t,p,B.y,p,Am.On,p,p,B.ah)}return A.c4(p,m,A.bm(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bGf(d){var w=null,v=A.m(8),u=d.a,t=A.X(Z.a1M,u?B.bu:B.bq,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kV,A.A(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bq,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eV5(this),w,w,w,w,w,w,w)},
gbDl(){switch(this.d.a){case 0:return D.acn
case 1:return D.hrA
case 2:return D.aco}},
c1x(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.bZn,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bJ3,A.aJ(!1,B.a3,!0,w,A.aP(!1,A.m(12),!0,A.q(w,D.bWN,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eV9(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.j,0,w,w),r=B.b1.j(0.55),q=A.m(12)
return new C.Gk(A.q(w,A.x(A.a([new A.D(P.Og,s,w),A.q(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ay,A.d(A.Bp(this.gcGv()),w,w,w,w,w,w,D.fAu,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.n),w,w,w,B.uv,B.jo,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(B.aY,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hrz,w)},
aDi(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aY:B.L,q=A.m(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aY.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bq
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bq
return A.E(A.aJ(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e3,new A.dq(1,B.cr,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bc,B.j,0,u,u),u,u,B.cw,new A.p(r,u,p,q,o,u,B.n),B.iI,u,u,u,u,B.GZ,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVq(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqI(d){var w,v,u,t,s,r,q=this,p=null
if(J.cq(q.e)){w=d.a
v=w?B.ec:B.c
u=A.m(15)
t=A.q(p,D.bWT,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aY.j(0.5),B.f_,28)],x.V),D.c82,B.a7),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gk(A.q(p,A.x(A.a([t,B.d8,s,B.U,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bq,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dY,A.A(A.a([A.E(q.aUI(B.jr,"Scan QR",new C.eVk(q),d),1),B.au,A.E(q.aUI(R.zo,"Upload file",new C.eVl(q),d),1)],r),B.l,p,B.e,B.j,0,p,p),B.aB,A.bI(D.h16,p,q.gaT7(),A.bo(B.aY,p,p,p,B.c,B.h5,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bFx,1.05,D.acn,p)}w=J.b8(q.e,new C.eVm(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gk(A.x(w,B.l,p,B.e,B.j,0,B.p),16,B.bV,1,D.acn,p)},
aUI(d,e,f,g){var w=null,v=B.aY.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.L(B.aY.j(0.45),B.r,1)
return A.aJ(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.U,A.d(e,w,w,w,w,w,w,D.fyM,B.K,w,w)],x.p),B.l,w,B.e,B.Q,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.n),w,w,w,w,B.alk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqH(d,e){var w,v,u=null,t=e.a,s=t?B.ec:B.c,r=A.m(14),q=A.L(t?B.eg:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.m(14),n=t?B.bu:B.bq
n=A.by(B.Xv,new A.fF(1.7777777777777777,C.aS6(!0,B.fj,1/0,Q.P6,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ay,A.d(""+d.d.length+" budget items \xb7 "+A.Bp(d.gxF()),u,u,u,u,u,u,D.fwJ,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.q(u,A.aJ(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.A(A.a([v,A.aG(u,u,u,u,A.X(An.a2P,t?B.bu:B.bq,u,u,u,u),u,u,u,new C.eVi(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVj(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.p(s,u,q,r,p,u,B.n),u,u,u,B.eh,u,u,u,1/0)}}
C.bA3.prototype={}
C.rn.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.I(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_x(){var w,v,u,t,s=this.c
if(s===B.i.iZ(s))w=B.o.u(B.i.L(s))
else{v=B.i.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lC.prototype={
gxF(){return B.d.cF(this.d,0,new C.cGu())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cGt(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfn(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lC(w.a,w.b,v,u,w.e)},
bf5(d){return this.bfn(d,null)},
TA(d){return this.bfn(null,d)}}
C.Iq.prototype={
a7(){return"FamilyGender."+this.b}}
C.hV.prototype={
aj(){var w=this
return A.I(["id",w.a,"name",w.b,"gender",C.hAY(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG1(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.am2.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kT.prototype={
gaqs(){var w=this.f
return new A.Y(w,new C.bSA(),A.U(w).k("Y<1>")).gI(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bSz(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ihQ(w.y),"games",w.z],x.N,x.z)},
wY(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kT(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfm(d,e){var w=null
return this.wY(w,w,w,d,e,w,w,w,w)},
cPT(d,e,f,g,h,i,j){return this.wY(d,e,null,f,g,h,i,j,null)},
aG6(d,e){var w=null
return this.wY(w,w,w,w,d,w,w,e,w)},
cPV(d,e,f,g,h,i,j,k){return this.wY(d,e,null,f,g,h,i,j,k)},
cOo(d){var w=null
return this.wY(w,w,w,w,w,w,w,d,w)},
cOM(d){var w=null
return this.wY(w,w,w,w,w,w,w,w,d)},
bf_(d){var w=null
return this.wY(w,w,d,w,w,w,w,w,w)},
aFS(d){var w=null
return this.wY(w,w,w,w,w,d,w,w,w)},
cPq(d,e,f){var w=null
return this.wY(w,d,w,w,e,w,w,f,w)},
cOb(d){var w=null
return this.wY(w,w,w,d,w,w,w,w,w)},
cOY(d,e){var w=null
return this.wY(d,w,w,w,w,w,e,w,w)}}
C.cGv.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGw.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aID.prototype={}
C.baH.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.baH()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b2(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.baG.prototype={
gwQ(){return!0},
gGx(){return this.z.b<this.b.length},
aWn(d){switch(0){case 0:return d.a.c}},
aW3(d){switch(0){case 0:return d.a.d}},
bVZ(d,e){switch(0){case 0:return new A.hO(d,e)}},
bVm(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iO(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ia(b4)
switch(0){case 0:v=b5.b
u=new A.kP(0,v,0,1/0)
t=w===B.Vk
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aWn(g)
f.toString
e=b1.aW3(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aID(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aID(k,j,i))}d=s.length
switch(0){case 0:q=b5.cz(new A.hO(m,l))
a0=q.a
a1=q.b
b1.a=new A.iO(0,0,a0,a1)
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
for(q=B.d.fP(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.J)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWn(g)
e=b1.aW3(g)
e.toString
a9=b1.bVm(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVZ(a6,a3+a9)
b0=g.a
g.a=new A.iO(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fW(d){var w,v,u,t,s,r=this
r.lA(d)
w=d.b
w.it()
v=A.ds()
u=r.a
v.ej(u.a,u.b,0,1)
w.pm(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fW(d)
w.ny(0)},
H1(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
it(){return this.z}}
C.byj.prototype={}
var z=a.updateTypes(["aB<~>()","P(hV)","~()","P(kT)","P(nv)","a8<n,@>(kT)","G(kT,kT)","G(hV,hV)","n(hV)","kT(a8<@,@>)","P(lC)","nv(a8<@,@>)","a8<n,@>(nv)","P(uQ)","uQ()","G(hV)","ai<hV>()","P(zD)","a09(Z)","n?(hV)","eI<n?>(hV)","aB<~>(lC)","P(rn)","a8<n,@>(hV)","hV(a8<@,@>)","G(lC,lC)","P(afQ)","~(bd)","v(oF)","G(G,a9W)","P(qG<G>)","~(qG<G>)","TV(Z)","P(MK)","P(uP)","~(hV)","n(n)","Wf(Z)","TU(Z)","aed(Z)","a_5(Z)","hV(hV)","cL(bB<n,GA>)","cL(KT)","a_z(Z)","G?(hV)","hV()","P(KT)","D(hV)","~(Iq)","a_v(Z)","v(Iq,n,a_)","P(afJ)","bB<n,ai<a8<n,@>>>(n,ai<nv>)","a_x(Z)","+count,id,name(G,n,n)(kT)","n(kT)","a0t(Z)","a0u(Z)","P(lV)","lV()","ZE(Z)","a2g(Z)","a_7(Z)","a_6(Z)","~(G)","~(n,lr?)","v(rn)","aey(Z)","~(mi)","aB<~>([n?])","F(F,lC)","v(lC)","F(F,rn)","a8<n,@>(rn)","rn(a8<@,@>)","ai<lr>()","uP()","n(V)","lC(a8<@,@>)","cr(Ip)","n(lC)","a8<n,@>(lC)","G(nv,nv)","kT(a8<n,@>)","kT(kT)"])
C.fOj.prototype={
$1(d){return d.a+" "+d.b},
$S:131}
C.fOi.prototype={
boF(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rf(s,d,B.hY,"book",E.GB),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LS(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.boF(d)},
$S:278}
C.fOk.prototype={
$1(d){return d.b},
$S:131}
C.fXS.prototype={
$1(d){var w=null
return A.eO(w,B.L,new H.Qm(this.a,this.b,w),w,w,0,B.a0b,B.d7,w,w,w)},
$S:48}
C.fBt.prototype={
$1(d){return d!=null},
$S:207}
C.fBu.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:207}
C.fBz.prototype={
$1(d){if(this.a)return new A.o(d.a*520,d.b*160)
return d},
$S:172}
C.fM2.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.to,w,w,w,w,w,w,w,B.dD,w,w,10.5,w,B.eB,w,!0,w,w,w,w),w),u=f?B.eB:B.wp
return new A.o9(D.bAU,A.aaK(A.a([new A.fV(130,w,v),new A.zC(1,B.Hc,A.fc(e,w,w,w,A.ha(w,g==null?D.etA:g,w,w,w,w,w,w,w,B.dD,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yo,B.lT))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1961}
C.fM1.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vY(999)
f=A.xB(A.lQ(h,A.fc("Cashier",h,h,h,A.ha(h,D.Al,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),h,new A.kQ(D.etr,h,f,B.i1,h),h,h,D.bBp,h))
w=A.xB(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,22,h,B.eB,h,!0,h,h,h,h),h))
v=A.xB(A.fc(C.xk(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaQ,h))
u=A.vY(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaQ,h)
q=A.vY(10)
p=x.Z
u=A.lQ(h,A.zv(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lQ(h,A.zv(A.a([A.fc("Amount owed",h,h,h,D.aaQ,h),new A.fV(h,2,h),A.fc(A.Bp(t.c),h,h,h,A.ha(h,D.Al,h,h,h,h,h,h,h,B.dD,h,h,20,h,B.eB,h,!0,h,h,h,h),h)],p),B.rJ,B.lT),h,new A.kQ(B.pH,h,q,B.i1,h),h,h,D.bAA,1/0)],p),B.rJ,B.lT),h,new A.kQ(E.aMt,h,u,B.i1,h),h,h,D.bCw,1/0)
q=new A.nS(D.etu,0.9,B.la)
r=A.vY(12)
s=i.c
o=s.$2("Original due",C.xk(t.r,!1))
n=s.$2("Current due",C.xk(t.f,!1))
m=i.d
l=new A.nS(m,1.1,B.la)
k=A.vY(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lQ(h,A.xB(A.fc(t.gaNh(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dD,h,h,11,h,B.eB,h,!0,0.5,h,h,h),h)),h,new A.kQ(h,new A.pY(l,l,l,l),k,B.i1,h),h,h,D.bBx,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Al))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Al))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.to,h,h,h,h,h,h,h,B.dD,h,h,10.5,h,B.eB,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,Tt>")
o=A.C(new A.N(o,new C.fM0(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.baG(5,5,new C.baH(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lQ(h,A.zv(k,B.yo,B.lT),h,new A.kQ(h,new A.pY(q,q,q,q),r,B.i1,h),h,h,B.alv,1/0)],p)
w=j.a
if(w!=null){v=new A.nS(B.JI,1,B.la)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.to,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lQ(h,new A.IK(w,B.XG,h,h),h,new A.kQ(h,new A.pY(v,v,v,v),A.vY(6),B.i1,h),82,h,B.Os,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fpa,h))
f.push(new A.fV(h,18,h))
f.push(A.xB(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.Al,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,1.8,h,h,h),h)))
return f},
$S:362}
C.fM0.prototype={
$1(d){var w=null,v=new A.nS(D.JJ,0.7,B.la),u=A.vY(999)
return A.lQ(w,A.fc(C.xk(d,!1),w,w,w,A.ha(w,D.JJ,w,w,w,w,w,w,w,B.dD,w,w,9.5,w,B.eB,w,!0,w,w,w,w),w),w,new A.kQ(w,new A.pY(v,v,v,v),u,B.i1,w),w,w,D.bGY,w)},
$S:1962}
C.c8k.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.m(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.q(w,A.d(C.xk(d,!1),w,w,w,w,w,w,D.fwd,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1963}
C.fYo.prototype={
$1(d){var w=null,v=A.aI(d,B.c1,x.w).w,u=A.m(26),t=A.aG(w,w,w,w,D.c_k,w,w,w,new C.fYl(d),w,w,w,w,w,B.cf),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eO(w,B.L,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aJ(!1,B.a3,!0,u,new A.D(B.a0_,A.x(A.a([new A.bM(B.aa,w,w,t,w),new A.dq(1,B.cr,A.ci(A.x(A.a([new A.em(new C.b_G(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zx,D.fYl,new C.fYm(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b9(A.m(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dg(B.a3t,w,D.fUJ,new C.fYn(r,d),A.bo(B.b1,w,w,w,B.c,w,B.fg,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.j,0,w,w)],p),B.l,w,B.e,B.Q,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.Q,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,As.a0o,B.d7,w,w,w)},
$S:48}
C.fYl.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fYm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.aq$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hh),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eS(B.dN.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aC(o,0,32)
w=5
return A.b(A.to(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fSE(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.M(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYg.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eO(w,B.as,A.x(A.a([new A.D(D.bCk,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nh,w,w,w),1),A.aG(w,w,w,w,B.lq,w,w,w,new C.fYe(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cr,new A.D(B.f3,A.by(A.m(14),A.fR(t,B.A,w,w,B.cj,B.dB,!1,w,!1,w,w),B.aq),w),w),new A.D(B.O4,new A.a6(1/0,w,A.dg(B.oD,w,D.aWI,new C.fYf(t,this.c,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.Q,0,B.p),w,w,w,B.Oj,B.d7,w,new A.b9(v,B.a1),w)},
$S:48}
C.fYe.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fYf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.to(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYs.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eO(w,B.as,new A.D(D.bCs,A.x(A.a([A.A(A.a([D.bI9,A.aG(w,w,w,w,B.lq,w,w,w,new C.fYq(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),B.U,new A.em(A.by(A.m(14),A.q(w,A.b4(w,w,w,new C.bcT(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a6(1/0,w,A.dg(B.oD,w,D.aWI,new C.fYr(t,s,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:48}
C.fYq.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fYr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.aq$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hh),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aC(p,0,32)
r=J.eS(B.dN.gaU(s))
w=5
return A.b(A.to(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGi.prototype={
$1(d){return d.a===this.a},
$S:262}
C.dQu.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQf.prototype={
bnT(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ec:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dQi(s,q,e),p,!0,!0,!1,B.K_,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQj(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnT(d,e)},
$S:1964}
C.dQi.prototype={
$1(d){var w,v=null,u=this.c===B.wY,t=u?D.dsd:D.dnQ
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.as,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.am0,A.x(A.a([u,B.ay,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bq,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.im(!0,v,v,B.y,D.ffF,new C.dQh(this.a,w,t,d),t.length,v,B.dW,B.ah,!0)],x.p),B.al,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQh.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cG.j(0.14)
else w=t.b.a.d.a?B.T:B.aP
v=A.m(14)
if(q)u=B.cG
else u=(t.b.a.d.a?B.bu:B.bq).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.q(B.A,C.b_F(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQg(t.d,r),s,s,s,s,s,s,s)},
$S:183}
C.dQg.prototype={
$0(){A.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.dQj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQd.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:97}
C.dQe.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cw,e,v)
return new A.d0(e,!1,A.it(B.A,A.at(A.aJ(!1,B.a3,!0,v,new A.dY(new C.dQc(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:34}
C.dQc.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ec:B.c,f=A.m(14),e=A.L((h?B.bu:B.bq).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.eA,A.X(B.cz,i.a.d.a?B.bu:B.bq,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPY(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVd("Name")
r=l.a
q=r.d==null?k:new C.dPZ(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bp:B.m7
n=A.L(B.cG.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bff(new A.D(B.fB,A.aP(!1,p,!0,A.q(B.A,C.b_F(m==null?"\ud83d\udc64":A.fMR(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a7),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l6,k,B.aaE,k,k)
v=A.a([v,B.af,t,B.U,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aVU("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQ_(r,a0),r.d===B.wY),1),B.ae,A.E(i.aVU("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQ4(r,a0),r.d===B.a7k),1)],u),B.l,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.U,new A.bM(B.a6,k,k,A.ho(D.bYC,D.fWD,new C.dQ5(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cG,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cf)),k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uT(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVe("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ea,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.T:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.L((t?B.bu:B.bq).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xk(r.a,!1)
v.push(A.aJ(!1,B.a3,!0,q,A.aP(!1,p,!0,A.q(k,A.A(A.a([A.E(A.x(A.a([t,B.bH,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bVj],u),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.n),k,k,k,k,B.bi,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQ6(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.U,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVd("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3o(r.b.length!==0,B.n2,new C.dQ7(r,i,a0),new C.dQ8(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3o(r.c.length!==0,D.bOD,new C.dQ9(r,i,d,a0),new C.dQa(r,a0),"Camera or gallery","Selfie"))
v.push(B.U)
t=l.w
v.push(new Ar.a8z("Signature (optional)",t,new C.dQb(a0),new C.dQ0(a0,t),new C.dQ1(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bq
s=(i?B.bu:B.bq).j(0.28)
s=A.E(A.dU(E.aWB,new C.dQ2(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qx,k,new A.b9(A.m(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cG,k,k,k,B.c,k,B.qx,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vy,k,k,k),k,new C.dQ3(r,w,d),t),1)],u),B.l,k,B.e,B.j,0,k,k))
return A.q(k,A.ci(A.x(v,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.n),k,k,k,B.rS,B.jo,k,k,360)},
$S:162}
C.dPY.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dPZ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQ_.prototype={
$0(){return this.b.$1(new C.dPX(this.a))},
$S:0}
C.dPX.prototype={
$0(){var w=this.a
w.d=B.wY
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQ4.prototype={
$0(){return this.b.$1(new C.dPW(this.a))},
$S:0}
C.dPW.prototype={
$0(){var w=this.a
w.d=B.a7k
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQ5.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQ6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xo(null,u.b,A.bZ(2020,1,1,0,0,0,0,0),null,s,A.bZ(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dPV(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPV.prototype={
$0(){var w=this.b
return this.a.a=A.bZ(w.gcl(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dQ7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q3(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dPU(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPU.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dQ8.prototype={
$0(){return this.b.$1(new C.dPT(this.a))},
$S:0}
C.dPT.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQ9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ec:B.c
w=3
return A.b(A.bT(q,null,new C.dPR(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q3(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dPS(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPR.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arp,w,w,w,w,new C.dPL(d),!1,w,w,w,w,w,w,w,D.fMD,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arn,w,w,w,w,new C.dPM(d),!1,w,w,w,w,w,w,w,D.fTK,w,w,w)],x.p),B.l,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dPL.prototype={
$0(){A.a7(this.a,!1).O("camera")
return null},
$S:0}
C.dPM.prototype={
$0(){A.a7(this.a,!1).O("gallery")
return null},
$S:0}
C.dPS.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQa.prototype={
$0(){return this.b.$1(new C.dPQ(this.a))},
$S:0}
C.dPQ.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQb.prototype={
$0(){return this.a.$1(new C.dPP())},
$S:0}
C.dPP.prototype={
$0(){},
$S:0}
C.dQ0.prototype={
$0(){return this.a.$1(new C.dPO(this.b))},
$S:0}
C.dPO.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQ1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiL(u.a,null,null,new C.dPN(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPN.prototype={
$4(d,e,f,g){this.a.$1(new C.dPK(this.b,d))},
$S:404}
C.dPK.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dQ2.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dQ3.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.M(x.q).f.U(D.fkJ)
return}if(w.a.d==null){w.c.M(x.q).f.U(D.fhC)
return}A.a7(w.c,!1).O(!0)},
$S:0}
C.dQx.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:97}
C.dQy.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ec:B.c,n=A.m(14),m=A.L((p?B.bu:B.bq).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bp(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bq,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zH(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zH(r).length>0?B.bC:B.cG,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bq
t=(q?B.bu:B.bq).j(0.28)
s=x.p
return new A.d0(e,!1,A.at(A.aJ(!1,B.a3,!0,r,A.q(r,A.x(A.a([p,B.U,v,u,B.aB,A.A(A.a([A.E(A.dU(B.nZ,new C.dQv(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k1,r,new A.b9(A.m(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.fUa,r,new C.dQw(d),A.bo(B.cG,r,r,r,B.c,r,B.k1,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.j,0,r,r)],s),B.al,r,B.e,B.Q,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.n),r,r,r,B.Cj,P.Og,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dQv.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dQw.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.dQr.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQs(r),p=r.a.d.a,o=p?B.ec:B.c,n=A.m(14),m=A.L((p?B.bu:B.bq).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.as,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bp(l.c),s,s,s,s,s,s,D.fxO,s,s,s)],p),B.l,s,B.e,B.j,0,s,s)
w=A.iK((r.a.d.a?B.bu:B.bq).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a26,"View receipt",new C.dQk(r,d,l))
u=l.x!=null
t=u?B.pu:B.qG
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bCp,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQl(r,d,l)),q.$3$icon$label$onTap(B.Cw,"Edit",new C.dQm(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.n2,"View / download ID",new C.dQn(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bOC,"View / download selfie",new C.dQo(r,d,l)))
if(l.gaHN())p.push(q.$3$icon$label$onTap(Ad.a3j,"View / download signature",new C.dQp(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.ei,"Delete",new C.dQq(r,d,l)))
p.push(B.ay)
return A.bm(!0,new A.D(B.uv,A.q(s,A.x(p,B.l,s,B.e,B.Q,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dQs.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.eY,A.A(A.a([A.X(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1965}
C.dQk.prototype={
$0(){A.a7(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYk(w,this.c)},
$S:0}
C.dQl.prototype={
$0(){A.a7(this.b,!1).O(null)
this.a.SU(this.c)},
$S:0}
C.dQm.prototype={
$0(){A.a7(this.b,!1).O(null)
this.a.DE(this.c)},
$S:0}
C.dQn.prototype={
$0(){var w,v,u
A.a7(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bG4(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQo.prototype={
$0(){var w,v,u
A.a7(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bG4(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQp.prototype={
$0(){A.a7(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYp(w,this.c)},
$S:0}
C.dQq.prototype={
$0(){A.a7(this.b,!1).O(null)
this.a.Q2(0,this.c)},
$S:0}
C.dQz.prototype={
$1(d){return d.x==null},
$S:262}
C.dQA.prototype={
$1(d){return d.x!=null},
$S:262}
C.dQB.prototype={
$2(d,e){return d+e.c},
$S:1966}
C.dQC.prototype={
$0(){return this.a.bDR()},
$S:0}
C.dQt.prototype={
$0(){return this.a.agh(this.b)},
$S:0}
C.fH6.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fH7.prototype={
$0(){return B.d.gH(D.a4D)},
$S:z+77}
C.dga.prototype={
$0(){var w=this.a
return w.m(new C.dg8(w,this.b))},
$S:0}
C.dg8.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dg9.prototype={
$0(){},
$S:0}
C.dgb.prototype={
$0(){var w=this.a.gc2h()
A.a7(this.b,!1).O(w)
return null},
$S:0}
C.fJB.prototype={
$1(d){return C.hlk(A.a3(d,x.N,x.z))},
$S:z+11}
C.fJC.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fJD.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fWV.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h4l.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fG9.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRh.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eH(e,v)?v:null},
$S:1967}
C.fXw.prototype={
$1(d){var w=this
return new C.a_x(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dgQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dgP(w,d))},
$S:z+80}
C.dgP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgE.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgB.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dgc.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dgd.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgF.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dgl.prototype={
$1(d){var w=null,v=A.S(d).ax.a===B.J,u=v?B.ec:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dgj(d),w,w),A.bI(B.xm,w,new C.dgk(d),A.bo(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dgj.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dgk.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.dgm.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgC.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgD.prototype={
$0(){return B.d.gH(D.zL)},
$S:z+14}
C.dgh.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz1(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.TU(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dgi.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgn.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_5(v,u,J.ad(w.d),null)},
$S:z+40}
C.dgo.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgO.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.ZN(r.y,r.gz1(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dgM(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcf(v,e,w,u,t,r.gbUr(),C.hAX(r.y.Q),r.gz1(0),s)
w=t}return A.c9(q,new C.dgN(r,e),new A.D(B.a0g,w,s))},
$S:1968}
C.dgN.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvm(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.ds()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fx(B.a6,A.da(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dgM.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIY(B.qp,B.j2)},
$S:0}
C.dgy.prototype={
$0(){var w=this.a
return w.m(new C.dgx(w))},
$S:0}
C.dgx.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgz.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).O(null)
return null},
$S:0}
C.dge.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.ko.j(0.5),r=x.p,q=A.a([D.fLc,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cq(p.d)?"Write this book":"Write a new book"
q.push(p.ZP(d,B.ed,w,J.cq(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZP(d,K.aph,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZP(d,X.aqm,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZP(d,B.qN,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZP(d,B.qN,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eO(u,E.BO,A.bm(!0,new A.D(Ac.yJ,A.x(q,B.E,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,I.a0q,B.d7,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:48}
C.dgA.prototype={
$0(){A.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.dgr.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.a_z(v,J.cI(w.d),w.r+1,null)},
$S:z+44}
C.dgs.prototype={
$1(d){var w=null
return A.oK(!1,A.eg(w,w,w,E.BO,new A.k1(this.a,new C.dgq(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:287}
C.dgq.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aaj,B.oU,A.E(A.d(e,w,w,w,w,w,w,B.jx,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:751}
C.dgt.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dgu.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.dgv.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.By(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Sx(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dgp(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgp.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgH.prototype={
$1(d){var w=null
return A.oK(!1,A.eg(w,w,w,E.BO,new A.k1(this.a,new C.dgG(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:287}
C.dgG.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aaj,B.oU,A.E(A.d(e,w,w,w,w,w,w,B.jx,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:751}
C.dgI.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dgJ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.dgK.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.dgL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.By(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgf.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkO(B.qp,A4.NR)},
$S:0}
C.dgg.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIY(B.qp,A4.NR)},
$S:0}
C.diC.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.diD.prototype={
$1(d){var w=this.a
return w.m(new C.diB(w))},
$S:9}
C.diB.prototype={
$0(){return this.a.e="page"},
$S:0}
C.diE.prototype={
$1(d){var w=this.a
return w.m(new C.diA(w))},
$S:9}
C.diA.prototype={
$0(){return this.a.e="book"},
$S:0}
C.diF.prototype={
$1(d){var w=this.a
return w.m(new C.diz(w))},
$S:9}
C.diz.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.diG.prototype={
$0(){var w=this.a
return w.m(new C.diy(w,this.b))},
$S:0}
C.diy.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.diH.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2B()
A.a7(this.b,!1).O(new A.br7(w,v))},
$S:0}
C.dh4.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dh3.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_v(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dh8.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dh7.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baP(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.dh5(d),v,v),A.bI(B.xm,v,new C.dh6(d),A.bo(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BO,w,v,v,v,v,D.fJY,v)},
$S:18}
C.dh5.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dh6.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.dh9.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.dha.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.ci(A.bV(B.bG,r,B.bs,t,18,14),B.t,t,B.y,t,D.bDo,t,t,B.ah)},
$S:314}
C.dh2.prototype={
$0(){return this.a.QR(0,this.b)},
$S:0}
C.dh1.prototype={
$0(){return this.a.Qi(0,this.b)},
$S:0}
C.cPs.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPt.prototype={
$0(){return B.d.gH(D.zL)},
$S:z+14}
C.cPu.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bR(0,new A.D(d,A.c3(w,new A.p(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bj),w),0,0,0)},
$S:1970}
C.d81.prototype={
$1(d){return this.a.m(new C.d80(this.b,this.c))},
$S:9}
C.d80.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8q.prototype={
$1(d){return this.a.m(new C.d8d())},
$S:2}
C.d8d.prototype={
$0(){},
$S:0}
C.d8r.prototype={
$1(d){return this.a.m(new C.d8c())},
$S:2}
C.d8c.prototype={
$0(){},
$S:0}
C.d8s.prototype={
$0(){var w=this.a
return w.m(new C.d8b(w,this.b))},
$S:0}
C.d8b.prototype={
$0(){var w=this.a
return w.d=w.goo().Gc(this.b.a)},
$S:0}
C.d8t.prototype={
$0(){var w=this.a
return w.m(new C.d8a(w,this.b))},
$S:0}
C.d8a.prototype={
$0(){var w=this.a
return w.d=w.goo().cNI(this.b)},
$S:0}
C.d8u.prototype={
$1(d){return this.a.m(new C.d89())},
$S:2}
C.d89.prototype={
$0(){},
$S:0}
C.d8v.prototype={
$0(){var w=this.a
return w.m(new C.d88(w,this.b))},
$S:0}
C.d88.prototype={
$0(){var w=this.a
return w.d=w.goo().cNN(this.b.a)},
$S:0}
C.d8w.prototype={
$1(d){var w=this.a
return w.m(new C.d8l(w,d))},
$S:6}
C.d8l.prototype={
$0(){var w=this.a
return w.d=w.goo().cOH(this.b)},
$S:0}
C.d8x.prototype={
$1(d){var w=this.a
return w.d=w.goo().aFV(d)},
$S:2}
C.d8y.prototype={
$1(d){var w=this.a
return w.d=w.goo().cNQ(d)},
$S:2}
C.d8A.prototype={
$1(d){var w=this.a
return w.d=w.goo().cOF(d)},
$S:2}
C.d8B.prototype={
$1(d){var w=this.a
return w.m(new C.d8k(w,d))},
$S:9}
C.d8k.prototype={
$0(){var w=this.a
return w.d=w.goo().cOw(this.b)},
$S:0}
C.d8C.prototype={
$0(){var w=this.a,v=w.goo(),u=B.a.i(w.gz1(0).a.a),t=B.a.i(w.gaD6().a.a)
u=v.bfw(B.a.i(w.gasL().a.a),t,u)
A.a7(this.b,!1).O(u)
return null},
$S:0}
C.bRr.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRl.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRk(w,d))},
$S:11}
C.bRk.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRu.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRm.prototype={
$0(){var w=this.a
w.Q=D.b0G
w.adW(1)
w.r.x=null},
$S:0}
C.bRn.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0G)return
w=new A.e1()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.az(3)
v.z=D.d3a[w.az(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRq.prototype={
$0(){var w=this.a
w.Q=D.acW
w.adW(2)
w.r.z=null},
$S:0}
C.bRp.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hB9
t.adW(3)
w=t.r
w.d=s
w.x="I say: "+t.gCt()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.az(3)
w.z=s?D.d9D[v.az(4)]:D.duJ[v.az(3)]
w.as=t.a+2.8},
$S:0}
C.bRs.prototype={
$0(){var w=this.a
w.Q=D.b0H
w.CW=this.b
w.cy=1
w.adW(4)
w.r.f=w.f.a+5},
$S:0}
C.bRt.prototype={
$0(){},
$S:0}
C.bRo.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.bRi.prototype={
$0(){return this.a.L1(this.b)},
$S:0}
C.bRj.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.bSY.prototype={
$0(){var w=this
return w.a.Ra(w.b,0,w.c,w.d)},
$S:0}
C.bSZ.prototype={
$0(){var w=this
return w.a.Ra(w.b,3,w.c,w.d)},
$S:0}
C.bT_.prototype={
$0(){var w=this
return w.a.Ra(w.b,1,w.c,w.d)},
$S:0}
C.bT0.prototype={
$0(){var w=this
return w.a.bTS(w.b,w.c,w.d)},
$S:0}
C.bT1.prototype={
$0(){var w=this
return w.a.Ra(w.b,4,w.c,w.d)},
$S:0}
C.bT2.prototype={
$0(){var w=this
return w.a.Ra(w.b,2,w.c,w.d)},
$S:0}
C.bT3.prototype={
$0(){var w=this
return w.a.Ra(w.b,5,w.c,w.d)},
$S:0}
C.bT4.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:752}
C.bSX.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5N[d],p=q.a.a5(0,new A.o(0,-q.b*1.2*124)),o=A.fq(r,B.cs,r,3,r,A.cP(r,r,r,r,r,r,r,r,r,D.foR,e),B.a5,B.bX,r,B.dz,B.bY)
o.o5(130)
w=o.b.a.c
w=p.aJ(0,new A.o(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bl(A.bs(w,v.gba(v)+12,u+18),B.i_)
u=this.a
v=t.eQ(B.dG)
w=$.Q()
s=A.K()
s.r=B.ds.gp(0)
u.am(v,s)
s=A.K()
s.r=D.qg.gp(0)
u.am(t,s)
w=new A.aF(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bv())
v=A.K()
v.r=D.qg.gp(0)
u.af(w,v)
o.a4(u,new A.o(t.a+9,t.b+6))},
$S:753}
C.bRI.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRJ.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amB(d),w.amB(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fun.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h4c.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c4(0,d,new C.h4d()),e)},
$S:z+66}
C.h4d.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h4e.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4f.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h4g.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4b(this.c,d))},
$S:3}
C.h4b.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h4h.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4i.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4j.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4a(this.c,d))},
$S:3}
C.h4a.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fHI.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fVV.prototype={
$1(d){return d.Q},
$S:z+15}
C.fVW.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fDA.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fKv.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bMv.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h4C.prototype={
$2(d,e){return B.o.aS(C.hxh(d),C.hxh(e))},
$S:215}
C.h4D.prototype={
$1(d){return d!==this.a},
$S:3}
C.fWr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKG.prototype={
$0(){var w=this.a
w.ch=!0
w.b93()},
$S:0}
C.bKB.prototype={
$0(){},
$S:0}
C.bKH.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKz.prototype={
$0(){},
$S:0}
C.bKA.prototype={
$0(){},
$S:0}
C.bKF.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bcV(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ap(u,A.q(u,A.d(t.dy,u,u,u,u,u,u,D.fwp,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.aA(B.c5,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKC(t,e),u,u,u,u,u,u,u,new C.bKD(t,e),u,u,u,u,u,u,u,u,u,new C.bKE(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bKC.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKE.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bKD.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKy.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.cqx.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqy.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqw(w))},
$S:0}
C.cqw.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqz.prototype={
$0(){var w=this,v=w.a
v.gj2()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqA.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqB.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqC.prototype={
$0(){},
$S:0}
C.cqD.prototype={
$0(){var w=this.a
w.z=w.Xn(++w.e)
w.Q=A.c_(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cqt.prototype={
$0(){return A.a7(this.a,!1).hV()},
$S:0}
C.cqu.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj2().length,e=i/2,d=new C.cqv(i,f,h),a0=g.as,a1=A.a4(a0).k("b7<2>")
a0=A.C(new A.b7(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c9(new A.h6(a0),new C.cqo(g,new A.o(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj2().length!==0&&!B.d.q(g.gj2(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QE(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cL(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MS(new C.cqp(g,u),new C.cqq(g,u),new C.cqr(g,u),j,j,new A.bJ("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fh:B.b5,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj2().length!==0&&!B.d.q(g.gj2(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.at(C.uu(a0,g.gqm(g),B.cO,B.jq,D.fy),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xn(0):s).length))break
if(!B.d.q(g.gj2(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xn(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.QE(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xn(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r3(new A.br(0,p,t),new C.cqs(),new S.El(u,j,new C.QE(l.b,k,62,!1,j),new A.kH(0.25,new C.QE(m.b,k,62,!1,j),j),new A.ka(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.I,S.hAP(),!0,!0,j,j,j,j,j,j,!1,B.iL,j,new A.bJ("chip-"+r,a0),w),B.b4,B.it,j,new A.bJ("t"+r+"-"+q,a0),v))}++u}g=A.bV(B.fO,a1,B.bs,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:67}
C.cqv.prototype={
$1(d){return new A.o(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:740}
C.cqo.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj2().length!==0&&!B.d.q(t.gj2(),-1)
return A.b4(p,p,p,new C.bco(q.b,o,v,w,p),B.az)},
$S:59}
C.cqq.prototype={
$1(d){return this.a.gj2()[this.b]===-1},
$S:z+30}
C.cqr.prototype={
$1(d){return this.a.cRA(this.b,d.a)},
$S:z+31}
C.cqp.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj2()[t]!==-1,r=A.m(18),q=e.length!==0?B.cO.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cO:B.jY,B.r,2)
u=s?A.lB(new C.cqn(),A.at(new C.QE(u.gaFn()[u.gj2()[t]].b,u.gaFn()[u.gj2()[t]].a,62,!1,v),v,v,v),B.lb,B.it,v,v,new A.br(0.3,1,x.X),x.i):D.bbI
return A.cT(v,u,v,v,B.b4,new A.p(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1973}
C.cqn.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:113}
C.cqs.prototype={
$3(d,e,f){return A.dP(f,new A.o(Math.sin(e*24)*8*(1-e),0))},
$S:113}
C.cQw.prototype={
$1(d){return d>=1},
$S:119}
C.cFt.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cFs(w))},
$S:11}
C.cFs.prototype={
$0(){return this.a.f++},
$S:0}
C.cFB.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFC.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cFD.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFA(w))},
$S:0}
C.cFA.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFE.prototype={
$0(){return this.a.f++},
$S:0}
C.cFF.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFG.prototype={
$0(){},
$S:0}
C.cFH.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFv.prototype={
$0(){return A.a7(this.a,!1).hV()},
$S:0}
C.cFw.prototype={
$3(d,e,f){var w=null
return A.lB(new C.cFu(this.a,e),w,B.b4,B.hF,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1974}
C.cFu.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cO.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.I,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.hU(new A.BI(new A.uO(B.w.j(e),B.LP,v,B.Y9),H.bX9(A.b4(v,v,v,new C.aBu(u.gkS()[u.e].c,u.as,v),B.az),new A.Eq(w,w,B.W7)),v),B.aq),B.f,v,v,new A.p(v,v,v,v,t,v,B.a7),v,190,v,v,v,v,v,190)},
$S:1975}
C.cFx.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,14*(1-e))),e)},
$S:100}
C.cFy.prototype={
$3(d,e,f){return A.dP(f,new A.o(Math.sin(e*22)*8*(1-e),0))},
$S:113}
C.cFz.prototype={
$0(){return this.a.bq9(this.b)},
$S:0}
C.f6W.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an7$)
v.an7$=w
v.q8$.sp(0,w)
v.aqY(u)},
$S:7}
C.fh4.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSt.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSs())},
$S:0}
C.bSs.prototype={
$0(){},
$S:0}
C.bSq.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSo.prototype={
$0(){},
$S:0}
C.bSp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMK()
w=s+1>=r.length?3:5
break
case 3:q=C.bGk(p.gapO(0),0,r.length)
p.m(new C.bSl(p,q))
o=p
w=6
return A.b(C.BT(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BU(s.d,s.c.a,"school",p.gapO(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSm())
w=4
break
case 5:p.m(new C.bSn(p))
p.gqu().VW(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSl.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSm.prototype={
$0(){},
$S:0}
C.bSn.prototype={
$0(){return this.a.x++},
$S:0}
C.bSr.prototype={
$0(){return this.a.L1(this.b)},
$S:0}
C.bSk.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.f6X.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.o(t,s),q=v.b,p=v.d,o=p?C.hB2(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.E6
C.Sv(q,D.emE,0,0.2,-0.6,-0.2,null,w,D.eln,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.o(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.Q()
p=A.K()
p.r=D.Gb.gp(0)
p.c=3
p.d=B.bw
q.ah(new A.o(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f6Y.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Sv(this.a,D.elK,0,u,0.7,-0.5,null,null,D.JA,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f6Z.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Sv(this.a,D.enp,0,0,0.8,-0.5,null,null,D.JA,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f7_.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Sv(w.b,D.emy,0,v,-0.8,-0.5,null,null,D.JA,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f70.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.o(34,-122+Math.sin(w*5)*5)
else v=v?D.emC:D.E6
C.Sv(p,D.em3,0,t,0,-0.6,null,v,D.JA,3,0,s,1.3,u,0,w,0)
q=q.ccc(new A.o(222,455),9)
$.Q()
w=A.K()
w.r=B.cO.gp(0)
p.af(q,w)},
$S:0}
C.f71.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:752}
C.bS6.prototype={
$2(d,e){return d+e},
$S:64}
C.bSh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSi.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSj.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj2()[u.b]=s
t.gj2()[u.d]=t.y
w=t.as
v=t.q8$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSd.prototype={
$1(d){return d},
$S:93}
C.bSc.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q8$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSe.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSf.prototype={
$0(){},
$S:0}
C.bSg.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FG(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.co(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bS8.prototype={
$0(){return A.a7(this.a,!1).hV()},
$S:0}
C.bS9.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:64}
C.bSa.prototype={
$2(d,e){var w=null,v=C.hct(new A.av(A.aT(1/0,e.a,e.b),A.aT(1/0,e.c,e.d))),u=this.a
return A.aA(B.c5,new A.em(A.b4(w,w,w,new C.bjB(u,u.q8$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bS7(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bS7.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj2().length
u=B.o.D(B.i.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1n(w.gj2()[u])}},
$S:23}
C.bSb.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:78}
C.drP.prototype={
$2(d,e){return 0},
$S:64}
C.bRT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRS())},
$S:0}
C.bRS.prototype={
$0(){},
$S:0}
C.bRR.prototype={
$0(){},
$S:0}
C.bRL.prototype={
$0(){},
$S:0}
C.bRM.prototype={
$0(){},
$S:0}
C.bRQ.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B4},
$S:0}
C.bRP.prototype={
$1(d){var w=null,v=this.a.gqu(),u=A.d(d,w,w,w,w,w,w,D.aV8,w,w,w),t=v.gbmA(0)
return A.aA(B.c5,A.x(A.a([u,B.bH,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aVm,w,w,w)],x.p),B.E,w,B.e,B.j,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsx(v),w,w,w,w,w,w,!1,B.a4)},
$S:139}
C.bRN.prototype={
$0(){return this.a.L1(this.b)},
$S:0}
C.bRO.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.bRK.prototype={
$0(){return A.a7(this.a,!1).hV()},
$S:0}
C.e1H.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1I.prototype={
$1(d){return this.a},
$S:39}
C.e1J.prototype={
$0(){var w=this.a
return w.d=w.gSV().bf_(this.b)},
$S:0}
C.e1F.prototype={
$1(d){return new C.TV(this.a,null)},
$S:z+32}
C.e1G.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e1E.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hj,w,w,w)
return A.eg(A.a([A.bN(!1,E.aWL,w,w,!0,w,w,w,new C.e1C(d),w,w),A.bN(!1,D.fRz,w,w,!0,w,w,w,new C.e1D(d),w,w)],x.p),w,w,D.fy,v,w,w,w,w,D.fE6,w)},
$S:18}
C.e1C.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.e1D.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.e1B.prototype={
$0(){var w=null,v=this.a.c.M(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e1K.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e1L.prototype={
$0(){var w=this.a,v=this.b,u=C.bE6(v,10,w.r,!1)
return w.ux(C.hll(w.a.d,"kahoot",u,w.gb6B(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e1M.prototype={
$0(){var w=this.a
return w.ux(new C.alS(this.b,w.a.d,w.r,null))},
$S:0}
C.e1N.prototype={
$0(){var w=this.a
return w.ux(new C.ak4(this.b,w.a.d,w.r,null))},
$S:0}
C.e1Q.prototype={
$0(){var w=this.a
return w.ux(new C.auO(this.b,w.a.d,w.r,null))},
$S:0}
C.e1R.prototype={
$0(){var w=this.a
return w.ux(new C.ayL(this.b,w.a.d,w.r,null))},
$S:0}
C.e1S.prototype={
$0(){var w=this.a
return w.ux(new C.alV(this.b,w.a.d,w.r,null))},
$S:0}
C.e1T.prototype={
$0(){var w=this.a
return w.ux(new C.alZ(this.b,w.a.d,w.r,null))},
$S:0}
C.e1U.prototype={
$0(){var w=this.a
return w.ux(new C.am0(this.b,w.a.d,w.r,null))},
$S:0}
C.e1V.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1I()
return v.ux(C.hll(v.a.d,"creator_"+u.a,w,v.gb6B(),"A game by the family",t,this.c.a))},
$S:0}
C.e1W.prototype={
$0(){return this.a.OO(this.b)},
$S:0}
C.e1X.prototype={
$0(){return this.a.XP(0,this.b)},
$S:0}
C.e1O.prototype={
$0(){return this.a.OO(null)},
$S:0}
C.e1P.prototype={
$0(){return this.a.M(x.q).f.U(D.fhI)},
$S:0}
C.bS4.prototype={
$0(){var w=this.a
w.d=D.b04
w.z=3},
$S:0}
C.bS5.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPV()}else w.m(new C.bS3(w))},
$S:11}
C.bS3.prototype={
$0(){return this.a.z--},
$S:0}
C.bRV.prototype={
$0(){var w=this.a
w.d=D.acC
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRW.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRU(w))
if(w.as<=0){d.a1(0)
w.b6x(-1)}},
$S:11}
C.bRU.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bS0.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WM},
$S:0}
C.bS1.prototype={
$0(){return this.a.e++},
$S:0}
C.bRY.prototype={
$0(){var w=this.a
w.d=D.b05
w.ay=this.b},
$S:0}
C.bRZ.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bS2.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1976}
C.bS_.prototype={
$0(){return this.a.L1(this.b)},
$S:0}
C.bRX.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.bRv.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b6,B.aQ),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aQ),r))}return s},
$S:1977}
C.bRw.prototype={
$0(){return this.a.gD3().c.push(C.h6f(null,0,20,""))},
$S:0}
C.bRG.prototype={
$1(d){var w=null
return A.bt(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dk,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VH,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:254}
C.bRF.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD3().c,m=this.b,l=n[m],k=o.cfe(l),j=B.c.j(0.06),i=A.m(18),h=A.L(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KP,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.ara,p,p,p,new C.bRA(o,m),p,p,p,p,p,p))
n=J.a5(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.j,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRB(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),B.U],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aD7[v]
t=D.aCO[v]
s=v+1
f.push(new A.D(B.eM,new A.c7(B.aL,B.e,B.j,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.H(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bd,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRC(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),p),new Av.Pi(v,l.c,new C.bRD(o,l),p,!1,D.lE,p,p,p,p,p,!1,!1,p,I.b0u,p,p,p,p,p,w)],g),p),p))}f.push(D.fJC)
f.push(B.am)
n=A.a([D.fDc,B.ae],g)
for(r=0;r<3;++r){q=D.cdl[r]
n.push(new A.D(B.fB,A.jl(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRE(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.j,0,p,p))
return A.q(p,A.x(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.n),p,p,p,B.kU,B.bi,p,p,p)},
$S:149}
C.bRA.prototype={
$0(){var w=this.a
return w.m(new C.bRz(w,this.b))},
$S:0}
C.bRz.prototype={
$0(){return B.d.cB(this.a.gD3().c,this.b)},
$S:0}
C.bRB.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRC.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRD.prototype={
$1(d){return this.a.m(new C.bRy(this.b,d))},
$S:152}
C.bRy.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRE.prototype={
$1(d){return this.a.m(new C.bRx(this.b,this.c))},
$S:9}
C.bRx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3m.prototype={
$0(){var w=this.a
w.wt()
w.a.bv()
w.a.qn()},
$S:0}
C.e3l.prototype={
$0(){var w=this.a
w.wt()
w.a.bv()
w.a.qn()},
$S:0}
C.e3o.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cq(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e3p.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3q.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e3k.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e3n.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e3s.prototype={
$0(){this.a.P9()
return null},
$S:0}
C.e3r.prototype={
$0(){return this.a.F0(this.b)},
$S:0}
C.e2N.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.dn,w,w,!0,w,w,w,new C.e2L(d),w,w),r=A.bo(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e2M(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e2L.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.e2M.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.e2O.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cOb(this.b)},
$S:0}
C.e2I.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVu(w.b,w.c,w.d)},
$S:7}
C.e29.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e2a.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2r.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hj(t.a.c),$async$$0)
case 2:s=r.nz(q.dI(e,new C.e2p(t)))
if(s!=null&&t.c!=null)t.m(new C.e2q(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2p.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2q.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2s.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2t.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2H.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cOY(C.hBc(w),w)},
$S:0}
C.e2o.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wf(u,w,C.aQP(u,w),new C.e2n(v),null)},
$S:z+37}
C.e2n.prototype={
$1(d){return this.bo_(d)},
bo_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e2m(s,d))
w=3
return A.b(s.ut(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:539}
C.e2m.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bf_(this.b)},
$S:0}
C.e2E.prototype={
$1(d){return d.as},
$S:z+1}
C.e2F.prototype={
$1(d){var w=this
return new A.dY(new C.e2D(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e2D.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ec:B.c,h=A.m(26),g=A.L(B.bR.j(0.5),B.r,1.5),f=A.q(k,D.bTt,B.f,k,k,new A.p(B.bR.j(0.18),k,k,k,k,k,B.a7),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.A(A.a([f,B.be,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bu:B.bq,k,k,k,k),k,k,k,new C.e2x(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.aA(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b4,new A.p(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h1,k,k,k,k,B.Cc,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2y(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bV(B.bG,a0,B.bs,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c4r,new A.D(D.bDO,f,k),new A.D(D.bDF,e,k),new A.D(B.rS,a0,k),new A.D(X.amq,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ag.ap1,j?B.bu:B.bq,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bDH,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b90(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e2z(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.j,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aE.j(0.35),B.ja,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.fDy,B.be,D.bI6,D.bU8],w),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.c85,B.n),k,k,k,B.hV,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2A(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yL,A.A(A.a([A.E(A.dU(B.dn,new C.e2B(a1),k),1),B.au,A.E(A.bI(M.aXc,k,new C.e2C(t,a1),A.bo(B.bR,k,k,k,k,k,B.cp,k,k,k,k,k)),1)],w),B.l,k,B.e,B.j,0,k,k),k))
return A.bm(!0,A.q(k,A.ci(A.x(f,B.E,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.p(i,k,g,h,k,k,B.n),k,k,k,B.yA,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:87}
C.e2x.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e2y.prototype={
$0(){return this.b.$1(new C.e2w(this.a,this.c))},
$S:0}
C.e2w.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e2z.prototype={
$1(d){var w=this.a
w.m(new C.e2u(w,d))
this.b.$1(new C.e2v())},
$S:9}
C.e2u.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2v.prototype={
$0(){},
$S:0}
C.e2A.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).O(new A.aHy(!0,w))
return null},
$S:0}
C.e2B.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e2C.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).O(new A.aHy(!1,w))
return null},
$S:0}
C.e2G.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOM(this.b.b)
w.r.a8(0)},
$S:0}
C.e1Y.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiU(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.huw(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e1Z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFS(w)},
$S:0}
C.e2Q.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aed(this.b,w,this.c,null)},
$S:z+39}
C.e2K.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ec:B.c,t=A.m(20),s=A.X(B.lQ,B.aY,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.Q,0,B.p)
return A.eg(A.a([A.bI(D.fVn,w,new C.e2J(d),A.bo(B.aY,w,w,w,w,w,w,w,w,w,w,w))],o),B.bc,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e2J.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e2_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e20.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e21.prototype={
$1(d){return d.a},
$S:z+8}
C.e22.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFS(w)},
$S:0}
C.e26.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiU(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e24(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.huw(v.e,null,r,v.f,v.r,new C.e25(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e25.prototype={
$0(){return this.a.ab5(this.b)},
$S:0}
C.e24.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e27.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hV>")
w=A.C(new A.N(w,new C.e23(this.b),v),v.k("ak.E"))
u.d=t.aFS(w)},
$S:0}
C.e23.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e2P.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2j.prototype={
$1(d){return d.length!==0},
$S:3}
C.e2k.prototype={
$1(d){var w=this
return new A.dY(new C.e2i(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e2i.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ec:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e2e(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.U)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(12),B.dq),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.Q,0,B.p)
t=w.a
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.e2f(d),v,v),A.bI(B.L0,v,new C.e2g(t,u,o,e),A.bo(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fHZ,v,new C.e2h(t,u,o,d),A.bo(B.aY,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:195}
C.e2e.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.c1h,w,w,w,new C.e2d(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1978}
C.e2d.prototype={
$0(){return this.a.$1(new C.e2b(this.b,this.c))},
$S:0}
C.e2b.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2f.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.e2g.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e2c(w.c,u))
v.bP(0,B.ce)}},
$S:0}
C.e2c.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e2h.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).O(!0)},
$S:0}
C.e2l.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPq(this.b,D.uB,C.Hh(v,w.a.c))},
$S:0}
C.e2X.prototype={
$1(d){return d.as},
$S:z+1}
C.e2Y.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j_(this.b,w)},
$S:0}
C.e2Z.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.irT(v)
return w.WC(v==null?null:v.a)},
$S:0}
C.e3_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i2A(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aT(1/0,e.a,e.b)
s=A.aT(1/0,e.c,e.d)
l.cwC(new A.av(u,t),v.gblF(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d1_:D.d_d
q=A.L(s?B.dk:D.bjr,B.r,1)
p=A.m(22)
o=A.bR(0,A.b4(m,m,m,new C.bfH(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.by(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.uZ(new A.R(n,n,n,n),new A.a6(u,t,new C.bgC(l.d,v,l.f,w,new C.e2T(l),l.gcgq(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byq(s,new C.e2U(l,e),new C.e2V(l,e),new C.e2W(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.p(m,m,q,k,m,new A.a9(B.b7,B.ba,B.x,r,m,m),B.n),m,m,m,A_.alz,m,m,m,m)},
$S:228}
C.e2T.prototype={
$1(d){var w=this.a
w.m(new C.e2R(w,d))},
$S:2}
C.e2R.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e2U.prototype={
$0(){var w=this.b
return this.a.bd9(1.25,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e2V.prototype={
$0(){var w=this.b
return this.a.bd9(0.8,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e2W.prototype={
$0(){var w=this,v=w.b
return w.a.aVu(new A.av(A.aT(1/0,v.a,v.b),A.aT(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblF())},
$S:0}
C.e30.prototype={
$0(){var w=this.a
return w.m(new C.e2S(w))},
$S:0}
C.e2S.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e28.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fG(new A.fA(s.c)),$async$$0)
case 2:t.yu("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhe.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bks(u,C.hFx(v.c,u),new C.dhd(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dhd.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dhf.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnL(d.d,d.c,u.f.q(0,d.a),new C.dhc(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dhc.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fHa.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nz(new A.cM(new A.Y(v,new C.fHb(d),w.k("Y<1>")),new C.fHc(),w.k("cM<1,n>")))},
$S:z+19}
C.fHb.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHc.prototype={
$1(d){return d.a},
$S:z+8}
C.fH8.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fH9.prototype={
$1(d){return d.b},
$S:z+8}
C.fHf.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nz(new A.cM(new A.Y(v,new C.fHg(d),w.k("Y<1>")),new C.fHh(),w.k("cM<1,n>")))},
$S:z+19}
C.fHg.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHh.prototype={
$1(d){return d.a},
$S:z+8}
C.fHd.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fHe.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dhh.prototype={
$0(){return this.a},
$S:z+46}
C.dhy.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:257}
C.dhq.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.dhr()),v=J.a5(w)
if(!v.q(w,e))v.J(w,e)},
$S:118}
C.dhr.prototype={
$0(){return A.a([],x.s)},
$S:754}
C.dhp.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eH(w,e)
return w===!0},
$S:307}
C.dhi.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dho.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dhn.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.Dt:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.Dt:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1980}
C.dhj.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhs.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aU(u==null?B.Z:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gR(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aU(t==null?D.Dt:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dht(r)))w.push(r)}}B.d.bt(w,new C.dhu(a8))
B.d.aZ(w,new C.dhv())
q=C.i2z(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eTK],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.J)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.J)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gH(k)+B.d.gan(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bqS(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1981}
C.dht.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhu.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhv.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b7(v,A.a4(v).k("b7<2>")).cF(0,0,B.q0)+88-w.gH(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:666}
C.dhx.prototype={
$1(d){return 16+d*156},
$S:134}
C.dhg.prototype={
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
t.n(0,d,new C.GA(r,new A.o(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GA(s,new A.o(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GA(s,new A.o(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KT(d,new A.o(e+t,w),s,s.length))}},
$S:190}
C.dhk.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKF(new A.o(v.a,v.b+28),new A.o(w.a,w.b+28),!0,null))},
$S:118}
C.dhl.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dhm.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:755}
C.dhz.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:755}
C.dhA.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:369}
C.dhB.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:189}
C.dhC.prototype={
$1(d){return d>=0.5},
$S:119}
C.fmF.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hb(A.aP(!1,v,!0,new A.a6(38,38,A.X(d,this.a.c?B.c:B.cq,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1983}
C.eXO.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.D(B.n_,A.aP(!1,v,!0,A.q(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fth,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.n),w,w,w,w,B.Or,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXN(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eXN.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxu.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxt.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nX,B.K,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dxr(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mP,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxs(d),w,w)],x.p),B.bc,B.C9,w,u,D.bEI,w,D.bGF,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxr.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dxs.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.dxD.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dxE.prototype={
$1(d){var w=this.a
return w.m(new C.dxC(w,d))},
$S:z+49}
C.dxC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dxF.prototype={
$1(d){var w=null
return A.qH(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxI.prototype={
$1(d){var w=this.a
return w.m(new C.dxB(w,d))},
$S:35}
C.dxB.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dxH.prototype={
$1(d){var w=null
return A.qH(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxJ.prototype={
$1(d){var w=this.a
return w.m(new C.dxA(w,d))},
$S:35}
C.dxA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dxK.prototype={
$0(){var w=this.a
return w.m(new C.dxz(w))},
$S:0}
C.dxz.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dxL.prototype={
$0(){var w=this.a
return w.m(new C.dxy(w))},
$S:0}
C.dxy.prototype={
$0(){return++this.a.at},
$S:0}
C.dxM.prototype={
$0(){var w=this.a
return w.m(new C.dxx(w))},
$S:0}
C.dxx.prototype={
$0(){return--this.a.ax},
$S:0}
C.dxN.prototype={
$0(){var w=this.a
return w.m(new C.dxw(w))},
$S:0}
C.dxw.prototype={
$0(){return++this.a.ax},
$S:0}
C.dxO.prototype={
$1(d){var w=this.a
return w.m(new C.dxv(w,d))},
$S:9}
C.dxv.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dxG.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.dxP.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.ec:B.c
v=A.m(12)
if(p)u=B.bR
else u=(q.c.a?B.eg:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bu:B.bq
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bu:B.bq
return A.E(A.aJ(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.ay,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.j,0,B.p),r,r,B.b4,new A.p(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k1,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dxQ(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dxQ.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dxZ.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.cfk.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.cfr.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cfs.prototype={
$2(d,e){var w=J.b8(e,new C.cfq(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.cfq.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cfm.prototype={
$1(d){return C.am3(A.a3(d,x.N,x.z))},
$S:z+9}
C.cfn.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cfo.prototype={
$1(d){return C.hlk(A.a3(d,x.N,x.z))},
$S:z+11}
C.cfp.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cfw.prototype={
$1(d){return new A.aHK(d.f.length,d.a,d.b)},
$S:z+55}
C.cfx.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:573}
C.cft.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cfu.prototype={
$1(d){return d.cOo(C.Hh(d,this.a))},
$S:z+85}
C.e39.prototype={
$1(d){return C.uv(d,this.a.a.c)},
$S:z+3}
C.e3a.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3e.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3f.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e36.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1a(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z2("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pt(r.c,r.e),$async$$0)
case 4:s.z2(p)
w=5
return A.b(s.K6(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e37.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1a(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z2("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pt(r.c,r.e),$async$$0)
case 4:s.z2(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e38.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wi(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z2("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z2("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z2("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.K6(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z2(B.a.ei(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e3d.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b19(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z2("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).ca(A.e9(new C.e3c(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pt(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3c.prototype={
$1(d){var w=this.b
return new C.a0t(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e3b.prototype={
$1(d){return D.hx8},
$S:z+58}
C.e3h.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e3i.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3g(w,d)
return new A.D(B.d3,new C.bgG(this.b,d.c,d.a,w,null),null)},
$S:1984}
C.e3g.prototype={
$0(){return this.a.Ys(this.b.b)},
$S:0}
C.e31.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e32.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e33.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e34.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e35.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e3j.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cQ(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).O(s)
return}},
$S:199}
C.dPC.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPD.prototype={
$0(){return B.d.gH(D.a6a)},
$S:z+60}
C.dPE.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d7P,44),w,w,w),w,w,new C.blz(u,t,v,w),B.az)},
$S:59}
C.fXZ.prototype={
$1(d){return A.pd(new C.fXY(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:140}
C.fXY.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ec:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tn,24)],x.V),o=r?B.eg:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aY.j(0.25),B.bR.j(0.18)],x.O)
w=A.q(t,D.bWA,B.f,t,t,new A.p(t,t,t,A.m(12),t,new A.a9(B.a6,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.x(A.a([B.X,o,new A.D(E.amv,A.A(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bq,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.l,t,B.e,B.j,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.ffN,new C.fXX(this.b,s),20,B.am4,t,B.ah,!1),1)],u),B.l,t,B.e,B.j,0,B.p),B.f,t,t,new A.p(q,t,t,B.l9,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:120}
C.fXX.prototype={
$2(d,e){var w=null,v=D.a6a[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.L(s?B.eg:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.m(15),o=A.E(new C.a7g(v.a,!0,w),1),n=s?B.jV:B.jm,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.as,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aJ(!1,B.a3,!0,w,A.aP(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.q(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.k2,w,w,w)],l),B.al,w,B.e,B.j,0,B.p),B.aq),w,new A.p(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fXW(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:79}
C.fXW.prototype={
$0(){A.a7(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.coP.prototype={
$0(){return this.a.ahk(this.b)},
$S:0}
C.fXl.prototype={
$1(d){return D.hrY},
$S:z+61}
C.h3U.prototype={
$1(d){var w=this
return new C.a2g(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fXq.prototype={
$1(d){return new C.a_7(this.a,null)},
$S:z+63}
C.fXp.prototype={
$1(d){return D.hsZ},
$S:z+64}
C.d8O.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.d8P.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8N(w,d))},
$S:35}
C.d8N.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8Q.prototype={
$1(d){return this.a.KK()},
$S:2}
C.d8R.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.d8K.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.d8L.prototype={
$1(d){return this.a.KK()},
$S:2}
C.d8M.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.cH9.prototype={
$0(){},
$S:0}
C.cHf.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.cHg.prototype={
$0(){return this.a.aQP(-1)},
$S:0}
C.cHh.prototype={
$1(d){return this.a.m(new C.cHe())},
$S:2}
C.cHe.prototype={
$0(){},
$S:0}
C.cHi.prototype={
$0(){return this.a.aQP(1)},
$S:0}
C.cHj.prototype={
$1(d){return this.a.m(new C.cHd())},
$S:2}
C.cHd.prototype={
$0(){},
$S:0}
C.cHk.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aY.j(0.2)
if(s)v=B.aY
else v=this.b.a?B.eg:B.bP
return A.uS(u,u,B.b1,r,u,new C.cHc(t,d),B.wl,s,w,u,new A.ay(v,1,B.r,-1),B.cf)},
$S:1985}
C.cHc.prototype={
$1(d){var w=this.a
return w.m(new C.cHa(w,this.b))},
$S:9}
C.cHa.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cHl.prototype={
$1(d){return this.a.m(new C.cHb())},
$S:2}
C.cHb.prototype={
$0(){},
$S:0}
C.cHm.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fma.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).O(w)},
$S:2}
C.fmb.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fmc.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).O(w)},
$S:0}
C.fm8.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCZ()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bGE,new A.em(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byf(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.fm9.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.aA(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aY,B.bR,w)
s.toString
s=A.a([B.b1,s,B.aY],x.O)
return A.aJ(!1,B.a3,!0,p,A.aP(!1,v,!0,A.eJ(D.erg,r,new A.p(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:141}
C.fVI.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eUY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUP.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eUQ.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eUW.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eUV(w,this.b),null)},
$S:20}
C.eUV.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ec:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eO(w,u,new A.D(B.amo,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hrl(new C.eUS(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dn,new C.eUT(d),w),1),B.au,A.E(A.bI(B.W0,w,new C.eUU(r,d),A.bo(B.aY,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.j,0,w,w)],q),B.al,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(t,B.a1),w)},
$S:101}
C.eUS.prototype={
$1(d){return this.b.$1(new C.eUR(this.a,d))},
$S:35}
C.eUR.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eUT.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.eUU.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).O(w)
return null},
$S:0}
C.eUX.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TA(this.b)},
$S:0}
C.eUK.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bf5(w)},
$S:0}
C.eUO.prototype={
$1(d){return this.bom(d)},
bom(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M4(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j_(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUN.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eUM(this.b),v),v.k("M.E"))
u.d=t.bf5(w)},
$S:0}
C.eUM.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eUZ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j_(this.b,w)},
$S:0}
C.eV_.prototype={
$1(d){return this.a.bH8(d,this.b)},
$S:z+67}
C.eUL.prototype={
$0(){return this.a.ab4(this.b)},
$S:0}
C.h3H.prototype={
$1(d){return new C.aey(this.a,this.b,this.c,null)},
$S:z+68}
C.eV1.prototype={
$0(){return this.a.a0g(this.b)},
$S:0}
C.eV2.prototype={
$0(){return this.a.QN(this.b)},
$S:0}
C.eV3.prototype={
$0(){return this.a.EW(this.b)},
$S:0}
C.eV4.prototype={
$0(){return this.a.a0h(this.b)},
$S:0}
C.eV0.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.eUF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUG.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eUH.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.eUJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eUI(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUI.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eVr.prototype={
$2(d,e){return d+e.gxF()},
$S:z+71}
C.eVn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eVo.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eV8.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ec:B.c,s=A.m(24),r=A.q(v,D.bX2,B.f,v,v,new A.p(B.av.j(u?0.18:0.08),v,A.L(B.av.j(0.28),B.r,1),v,v,v,B.a7),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.as
u=u?B.eg:B.bP
w=x.p
return A.eO(v,t,new A.D(B.yN,A.x(A.a([r,B.aR,q,B.U,p,B.d8,A.A(A.a([A.E(A.dU(B.nZ,new C.eV6(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b9(A.m(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bI(D.fZf,v,new C.eV7(d),A.bo(B.av,v,v,v,v,v,B.fg,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.j,0,v,v)],w),B.l,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d7,v,new A.b9(s,B.a1),v)},
$S:48}
C.eV6.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.eV7.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.eVh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ec:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h4,28)],x.V),g=k?D.df_:B.a5u,f=x.p
g=A.q(m,A.x(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f8U,B.ay,new A.bM(B.a6,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cC,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.j,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a9(B.aA,B.aF,B.x,g,m,m),B.n),m,m,m,m,E.ams,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8_(B.b9,B.jr,new C.eVe(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b8_(B.cy,R.zo,new C.eVf(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.av.j(k?0.14:0.06)
q=A.m(16)
p=A.L(B.av.j(0.28),B.r,1)
o=A.q(m,D.bWo,B.f,m,m,new A.p(B.av.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.as,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.wg,A.q(m,A.x(A.a([g,new A.D(B.amp,A.x(A.a([w,B.X,u,B.bA,t,B.X,A.aJ(!1,B.a3,!0,m,A.aP(!1,s,!0,A.q(m,A.A(A.a([o,B.be,n,A.X(B.eJ,k?B.bu:B.bq,m,m,m,m)],f),B.l,m,B.e,B.j,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eVg(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.l,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.p(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eVe.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).O(null)
w=2
return A.b(u.a.w3("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVf.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).O(null)
w=2
return A.b(u.a.w3("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVg.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).O(null)
w=2
return A.b(u.a.Op(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVc.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ec:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.f_,24)],x.V),k=o?B.eg:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bq
u=A.by(w,new A.a6(48,48,C.aS6(!0,A.m(12),48,Q.P6,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bp(v.gxF())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wg,A.q(q,A.x(A.a([B.X,k,new A.D(D.amm,A.A(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bq,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.l,q,B.e,B.j,0,q,q),q),B.C0,r.cqG(B.uU,B.aY,new C.eVa(d),p,"QR code or backup file","Transfer project"),r.b50(!0,B.ei,B.av,new C.eVb(d),p,"Remove from this device","Delete project"),B.X],s),B.l,q,B.e,B.Q,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eVa.prototype={
$0(){A.a7(this.a,!1).O("transfer")
return null},
$S:0}
C.eVb.prototype={
$0(){A.a7(this.a,!1).O("delete")
return null},
$S:0}
C.eVd.prototype={
$1(d){return this.bon(d)},
bon(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.M4(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wi(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVu.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eVt(w))},
$S:0}
C.eVt.prototype={
$0(){return this.a.r++},
$S:0}
C.eVv.prototype={
$0(){var w=this.a
return w.m(new C.eVs(w))},
$S:0}
C.eVs.prototype={
$0(){return this.a.r++},
$S:0}
C.eV5.prototype={
$0(){var w=this.a.c
w.toString
return A.j_(w,null)},
$S:0}
C.eV9.prototype={
$0(){return this.a.cjX(this.b)},
$S:0}
C.eVq.prototype={
$0(){var w=this.a
return w.m(new C.eVp(w,this.b))},
$S:0}
C.eVp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVk.prototype={
$0(){return this.a.w3("scan")},
$S:0}
C.eVl.prototype={
$0(){return this.a.w3("file")},
$S:0}
C.eVm.prototype={
$1(d){return this.a.cqH(d,this.b)},
$S:z+72}
C.eVj.prototype={
$0(){return this.a.F_(this.b)},
$S:0}
C.eVi.prototype={
$0(){return this.a.a0M(this.b,this.c)},
$S:0}
C.cGu.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGt.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cGr.prototype={
$1(d){return C.hLF(A.a3(d,x.N,x.z))},
$S:z+75}
C.cGs.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fG_.prototype={
$1(d){return d.y===D.kX},
$S:z+3}
C.h4t.prototype={
$1(d){return C.aQP(d,this.a)},
$S:z+3}
C.fDz.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSA.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSz.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bSw.prototype={
$1(d){return C.hlm(A.a3(d,x.N,x.z))},
$S:z+24}
C.bSx.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSy.prototype={
$1(d){return J.k(d)},
$S:17}
C.ftZ.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fpJ.prototype={
$1(d){return C.hb3(A.a3(d,x.N,x.z))},
$S:z+79}
C.fpK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fpL.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fX9.prototype={
$1(d){return J.k(d)},
$S:17}
C.fXa.prototype={
$1(d){return d.a},
$S:z+81}
C.fXb.prototype={
$1(d){return d.length!==0},
$S:3}
C.fXc.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fXd.prototype={
$1(d){return d.TA(null).aj()},
$S:z+82}
C.h4r.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fGt.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fJH.prototype={
$1(d){return C.am3(A.a3(d,x.N,x.z))},
$S:z+9}
C.fJI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJJ.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fJK.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fJL.prototype={
$1(d){return C.uv(d,this.a)},
$S:z+3}
C.fWX.prototype={
$1(d){return C.uv(d,this.a)},
$S:z+3}
C.h4m.prototype={
$1(d){return C.am3(A.a3(d,x.N,x.z))},
$S:z+9}
C.h4n.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h4o.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fGa.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fGb.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h4x.prototype={
$1(d){return!d.as},
$S:z+1}
C.fFF.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fFG.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fFH.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h3V.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fKw.prototype={
$1(d){return d.Q},
$S:z+15}
C.fWQ.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fJE.prototype={
$1(d){return C.am3(A.a3(d,x.N,x.z))},
$S:z+9}
C.fJF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJG.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fWL.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fqj.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqk.prototype={
$1(d){return C.hlm(A.a3(d,x.N,x.z))},
$S:z+24}
C.fql.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fqm.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fqn.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqA.prototype={
$2(d,e){return d.eM(new C.fqB(e))},
$S:1986}
C.fqB.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cd},
$S:1987}
C.fqx.prototype={
$1(d){return C.i7D(d,this.a)},
$S:z+84}
C.fqy.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fqz.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fuG.prototype={
$1(d){return d.a},
$S:z+56}
C.fuH.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuI.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fxz.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fCP.prototype={
$1(d){return C.hwU(d,C.Hh(d,this.a))},
$S:z+5}
C.fCQ.prototype={
$1(d){return C.hwV(d,C.Hh(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBw.prototype
w.bwd=w.t
w=C.azK.prototype
w.bw8=w.t
w=C.aGX.prototype
w.bwC=w.t
w=C.aBx.prototype
w.bwe=w.t
w=C.aBz.prototype
w.bwf=w.t
w=C.aBA.prototype
w.bwg=w.t
w=C.aN6.prototype
w.bz5=w.t
w=C.aPc.prototype
w.bBo=w.t
w=C.aPd.prototype
w.bBp=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEx.prototype,"gcnB","cnC",28)
var r
w(r=C.aBv.prototype,"gcgw","cgx",65)
v(r,"gaOZ","NX",0)
v(r,"gcvY","Bn",0)
v(r,"gbOT","OD",0)
v(r,"gcKn","z3",0)
v(r,"gcpE","a1t",0)
v(r,"gbKi","Ol",0)
v(r,"gbPl","XU",0)
w(r,"gbUr","bUs",78)
v(r,"gbEE","Am",0)
v(C.aBy.prototype,"gcKj","FS",0)
v(r=C.alT.prototype,"gbsz","bsA",2)
v(r,"gbsr","bss",2)
v(r,"gcLs","cLt",2)
u(r,"gqm","kN",0)
u(r=C.ak5.prototype,"geY","fO",2)
w(r,"gcc9","cca",27)
u(C.auP.prototype,"gqm","kN",0)
v(r=C.ayM.prototype,"gcX1","cX2",2)
u(r,"gqm","kN",0)
u(C.aKK.prototype,"gbsx","bsy",2)
v(C.am1.prototype,"gBR","cLF",2)
u(r=C.am_.prototype,"gcMl","cMm",2)
u(r,"gqm","kN",0)
v(r=C.alW.prototype,"gbro","brp",2)
v(r,"gcRy","cRz",2)
u(r=C.alY.prototype,"geY","fO",2)
u(r,"giy","cKZ",2)
v(r=C.alU.prototype,"gcKO","cKP",2)
u(r,"gbqg","hL",2)
v(r=C.aF5.prototype,"gagX","wj",0)
v(r,"gcjc","a0D",0)
v(r,"gaTc","It",0)
v(r=C.aF2.prototype,"gcGh","a3C",0)
v(r,"gagX","wj",0)
v(r,"gctZ","a27",0)
v(r,"gcj7","b3e",2)
v(r,"gck9","a0R",0)
w(r,"gcgq","cgr",35)
v(r,"gbPa","Iy",0)
v(r,"gcHm","cHn",2)
v(r,"gc6i","ZB",0)
w(r,"gceV","ceW",36)
v(r,"gciW","ciX",2)
v(r=C.aDv.prototype,"gccf","Qk",0)
v(r,"gcch","cci",2)
v(r,"gbLN","aaH",0)
v(r=C.aF4.prototype,"gbSQ","Yo",0)
v(r,"gc2o","Z3",0)
v(r,"gcAn","a2Z",0)
v(r,"gcwx","a2A",0)
v(C.aF3.prototype,"gcwg","aiL",0)
v(C.au0.prototype,"gceT","a0e",0)
v(C.aAf.prototype,"ga3l","KK",2)
v(C.aAe.prototype,"ga3l","KK",2)
v(C.ayZ.prototype,"ga3l","KK",2)
v(r=C.aGy.prototype,"gb4o","Rj",0)
v(r,"gbDs","Ww",0)
v(r,"gcjY","cjZ",2)
w(C.aGx.prototype,"gcfL","cfM",69)
t(C.aGz.prototype,"gaT7",0,0,null,["$1","$0"],["Is","bN4"],70,0,0)
s(C,"hEA","ihO",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apC,C.uP,C.nv,C.Ip,C.afJ,C.KM,C.uQ,C.bT5,C.td,C.bp2,C.ama,C.adR,C.lr,C.bRH,C.auc,C.zD,C.akM,C.MK,C.bau,C.a9W,C.bhL,C.afQ,C.azZ,C.afE,C.aKK,C.KT,C.GA,C.bgE,C.aKF,C.aqW,C.dhD,C.lV,C.aV5,C.aV4,C.aT5,C.ui,C.rn,C.lC,C.hV,C.kT,C.aID])
u(A.ht,[C.fOj,C.fOi,C.fOk,C.fXS,C.fBt,C.fBu,C.fBz,C.fM2,C.fM1,C.fM0,C.c8k,C.fYo,C.fYg,C.fYs,C.fGi,C.dQi,C.dQd,C.dQe,C.dPR,C.dPN,C.dQx,C.dQy,C.dQr,C.dQs,C.dQz,C.dQA,C.fH6,C.fJB,C.fJC,C.fWV,C.h4l,C.fG9,C.fXw,C.dgQ,C.dgc,C.dgl,C.dgC,C.dgh,C.dgn,C.dge,C.dgr,C.dgs,C.dgq,C.dgH,C.dgG,C.diD,C.diE,C.diF,C.dh3,C.dh8,C.dh7,C.cPs,C.cPu,C.d81,C.d8q,C.d8r,C.d8u,C.d8w,C.d8x,C.d8y,C.d8A,C.d8B,C.bRr,C.bRl,C.fun,C.h4e,C.h4f,C.h4g,C.h4b,C.h4h,C.h4i,C.h4j,C.h4a,C.fHI,C.fVV,C.fDA,C.fKv,C.bMv,C.h4D,C.fWr,C.bKH,C.bKC,C.bKE,C.bKD,C.cqv,C.cqq,C.cqr,C.cqp,C.cqn,C.cqs,C.cQw,C.cFt,C.cFw,C.cFu,C.cFx,C.cFy,C.f6W,C.fh4,C.bSd,C.bS7,C.bSb,C.bRP,C.e1I,C.e1F,C.e1G,C.e1E,C.e1K,C.bS5,C.bRW,C.bRG,C.bRF,C.bRB,C.bRC,C.bRD,C.bRE,C.e3n,C.e2N,C.e2I,C.e29,C.e2p,C.e2s,C.e2o,C.e2n,C.e2E,C.e2F,C.e2z,C.e1Y,C.e2Q,C.e2K,C.e2_,C.e20,C.e21,C.e26,C.e24,C.e23,C.e2j,C.e2k,C.e2e,C.e2X,C.e2T,C.dhe,C.dhf,C.fHa,C.fHb,C.fHc,C.fH8,C.fH9,C.fHf,C.fHg,C.fHh,C.fHd,C.fHe,C.dhy,C.dho,C.dhj,C.dht,C.dhu,C.dhx,C.dhl,C.dhA,C.dhB,C.dhC,C.fmF,C.eXO,C.dxt,C.dxD,C.dxE,C.dxF,C.dxI,C.dxH,C.dxJ,C.dxO,C.dxP,C.cfr,C.cfq,C.cfm,C.cfn,C.cfo,C.cfp,C.cfw,C.cft,C.cfu,C.e39,C.e3c,C.e3b,C.e3i,C.e3j,C.dPC,C.fXZ,C.fXl,C.h3U,C.fXq,C.fXp,C.d8P,C.d8Q,C.d8L,C.cHh,C.cHj,C.cHk,C.cHc,C.cHl,C.fma,C.fVI,C.eUW,C.eUS,C.eUO,C.eUM,C.eV_,C.h3H,C.eV8,C.eVh,C.eVc,C.eVd,C.eVm,C.cGt,C.cGr,C.cGs,C.fG_,C.h4t,C.fDz,C.bSA,C.bSz,C.bSw,C.bSx,C.bSy,C.fpJ,C.fpK,C.fX9,C.fXa,C.fXb,C.fXc,C.fXd,C.h4r,C.fGt,C.fJH,C.fJI,C.fJK,C.fJL,C.fWX,C.h4m,C.h4n,C.h4o,C.fGa,C.fGb,C.h4x,C.fFF,C.fFG,C.h3V,C.fKw,C.fWQ,C.fJE,C.fJF,C.fWL,C.fqj,C.fqk,C.fql,C.fqm,C.fqn,C.fqB,C.fqx,C.fqy,C.fuG,C.fuH,C.fxz,C.fCP,C.fCQ])
u(A.ax,[C.b_G,C.alR,C.aWp,C.ZN,C.bcf,C.QE,C.a6u,C.tF,C.Ir,C.bgC,C.bks,C.byq,C.bnL,C.aec,C.bkr,C.aeb,C.bkq,C.aDw,C.aJH,C.aed,C.Gw,C.bgD,C.ads,C.bgB,C.bgG,C.b_E,C.au0,C.aey])
u(A.mk,[C.bcT,C.be7,C.bdZ,C.aIy,C.bjt,C.bp1,C.aWu,C.bcV,C.aBu,C.bco,C.bt4,C.bjB,C.bj0,C.bj7,C.bgF,C.bfH,C.blz,C.byf])
u(A.iJ,[C.fYl,C.fYm,C.fYn,C.fYe,C.fYf,C.fYq,C.fYr,C.dQu,C.dQg,C.dQj,C.dPY,C.dPZ,C.dQ_,C.dPX,C.dQ4,C.dPW,C.dQ5,C.dQ6,C.dPV,C.dQ7,C.dPU,C.dQ8,C.dPT,C.dQ9,C.dPL,C.dPM,C.dPS,C.dQa,C.dPQ,C.dQb,C.dPP,C.dQ0,C.dPO,C.dQ1,C.dPK,C.dQ2,C.dQ3,C.dQv,C.dQw,C.dQk,C.dQl,C.dQm,C.dQn,C.dQo,C.dQp,C.dQq,C.dQC,C.dQt,C.fH7,C.dga,C.dg8,C.dg9,C.dgb,C.dgP,C.dgE,C.dgB,C.dgd,C.dgF,C.dgj,C.dgk,C.dgm,C.dgD,C.dgi,C.dgo,C.dgM,C.dgy,C.dgx,C.dgz,C.dgA,C.dgt,C.dgv,C.dgw,C.dgp,C.dgI,C.dgL,C.dgf,C.dgg,C.diC,C.diB,C.diA,C.diz,C.diG,C.diy,C.diH,C.dh4,C.dh5,C.dh6,C.dh9,C.dh2,C.dh1,C.cPt,C.d80,C.d8d,C.d8c,C.d8s,C.d8b,C.d8t,C.d8a,C.d89,C.d8v,C.d88,C.d8l,C.d8k,C.d8C,C.bRk,C.bRu,C.bRm,C.bRn,C.bRq,C.bRp,C.bRs,C.bRt,C.bRo,C.bRi,C.bRj,C.bSY,C.bSZ,C.bT_,C.bT0,C.bT1,C.bT2,C.bT3,C.h4d,C.fVW,C.bKG,C.bKB,C.bKz,C.bKA,C.bKy,C.cqx,C.cqy,C.cqw,C.cqz,C.cqB,C.cqC,C.cqD,C.cqt,C.cFs,C.cFB,C.cFC,C.cFD,C.cFA,C.cFE,C.cFF,C.cFG,C.cFH,C.cFv,C.cFz,C.bSt,C.bSs,C.bSq,C.bSo,C.bSp,C.bSl,C.bSm,C.bSn,C.bSr,C.bSk,C.f6X,C.f6Y,C.f6Z,C.f7_,C.f70,C.bSh,C.bSi,C.bSj,C.bSc,C.bSe,C.bSf,C.bSg,C.bS8,C.bRT,C.bRS,C.bRR,C.bRL,C.bRM,C.bRQ,C.bRN,C.bRO,C.bRK,C.e1H,C.e1J,C.e1C,C.e1D,C.e1B,C.e1L,C.e1M,C.e1N,C.e1Q,C.e1R,C.e1S,C.e1T,C.e1U,C.e1V,C.e1W,C.e1X,C.e1O,C.e1P,C.bS4,C.bS3,C.bRV,C.bRU,C.bS0,C.bS1,C.bRY,C.bRZ,C.bS_,C.bRX,C.bRv,C.bRw,C.bRA,C.bRz,C.bRy,C.bRx,C.e3m,C.e3l,C.e3o,C.e3p,C.e3q,C.e3k,C.e3s,C.e3r,C.e2L,C.e2M,C.e2O,C.e2a,C.e2r,C.e2q,C.e2t,C.e2H,C.e2m,C.e2x,C.e2y,C.e2w,C.e2u,C.e2v,C.e2A,C.e2B,C.e2C,C.e2G,C.e1Z,C.e2J,C.e22,C.e25,C.e27,C.e2P,C.e2d,C.e2b,C.e2f,C.e2g,C.e2c,C.e2h,C.e2l,C.e2Y,C.e2Z,C.e2R,C.e2U,C.e2V,C.e2W,C.e30,C.e2S,C.e28,C.dhd,C.dhc,C.dhh,C.dhr,C.dhi,C.eXN,C.dxu,C.dxr,C.dxs,C.dxC,C.dxB,C.dxA,C.dxK,C.dxz,C.dxL,C.dxy,C.dxM,C.dxx,C.dxN,C.dxw,C.dxv,C.dxG,C.dxQ,C.dxZ,C.e3a,C.e3e,C.e3f,C.e36,C.e37,C.e38,C.e3d,C.e3h,C.e3g,C.e31,C.e32,C.e33,C.e34,C.e35,C.dPD,C.fXW,C.coP,C.d8O,C.d8N,C.d8R,C.d8K,C.d8M,C.cH9,C.cHf,C.cHg,C.cHe,C.cHi,C.cHd,C.cHa,C.cHb,C.cHm,C.fmb,C.fmc,C.eUY,C.eUP,C.eUQ,C.eUR,C.eUT,C.eUU,C.eUX,C.eUK,C.eUN,C.eUZ,C.eUL,C.eV1,C.eV2,C.eV3,C.eV4,C.eV0,C.eUF,C.eUG,C.eUH,C.eUJ,C.eUI,C.eVn,C.eVo,C.eV6,C.eV7,C.eVe,C.eVf,C.eVg,C.eVa,C.eVb,C.eVu,C.eVt,C.eVv,C.eVs,C.eV5,C.eV9,C.eVq,C.eVp,C.eVk,C.eVl,C.eVj,C.eVi])
u(A.ag,[C.apO,C.TU,C.a_v,C.a_z,C.a_x,C.a_5,C.alS,C.ak4,C.auO,C.ayL,C.am0,C.alZ,C.alV,C.Wf,C.alX,C.TV,C.aqZ,C.aqT,C.a09,C.aqX,C.a0t,C.a0u,C.a7g,C.a_7,C.a_6,C.ZE,C.a2g,C.Gk,C.ayS,C.au_,C.atU,C.atZ,C.OX])
u(A.ah,[C.aEx,C.bgw,C.aBv,C.bgV,C.aBy,C.be5,C.aBw,C.azK,C.aGX,C.ayM,C.aBA,C.aBz,C.aBx,C.blT,C.alY,C.alU,C.aF5,C.aF2,C.aDv,C.aF4,C.aF3,C.blU,C.aN6,C.aAf,C.aAe,C.ayZ,C.byi,C.aPc,C.aPd,C.aGy,C.bng,C.aGx,C.bA3])
u(A.jw,[C.dQf,C.dQh,C.dQc,C.dQB,C.fJD,C.bRh,C.dgO,C.dgN,C.dgu,C.dgJ,C.dgK,C.dha,C.bT4,C.bSX,C.bRI,C.bRJ,C.h4c,C.h4C,C.bKF,C.cqA,C.cqu,C.cqo,C.f71,C.bS6,C.bS9,C.bSa,C.drP,C.bS2,C.e2D,C.e2i,C.e3_,C.dhq,C.dhp,C.dhn,C.dhs,C.dhv,C.dhw,C.dhg,C.dhk,C.dhm,C.dhz,C.cfk,C.cfs,C.cfx,C.dPE,C.fXY,C.fXX,C.fm8,C.fm9,C.eUV,C.eVr,C.cGu,C.ftZ,C.fpL,C.fJJ,C.fFH,C.fJG,C.fqA,C.fqz,C.fuI])
u(A.lD,[C.a1M,C.afS,C.a24,C.a_X,C.acv,C.aLr,C.Iq,C.am2,C.cGv,C.cGw])
t(C.alT,C.aBw)
t(C.ak5,C.azK)
t(C.auP,C.aGX)
t(C.bgA,C.aBA)
t(C.am1,C.bgA)
t(C.bgz,C.aBz)
t(C.am_,C.bgz)
t(C.bgy,C.aBx)
t(C.alW,C.bgy)
t(C.blA,C.aN6)
t(C.byg,C.aPc)
t(C.byh,C.aPd)
t(C.aGz,C.bA3)
t(C.baH,A.bav)
t(C.byj,A.a6W)
t(C.baG,C.byj)
w(C.aBw,A.cb)
w(C.azK,A.cb)
w(C.aGX,A.eQ)
w(C.aBx,A.cb)
v(C.bgy,C.afE)
w(C.aBz,A.cb)
v(C.bgz,C.afE)
w(C.aBA,A.cb)
v(C.bgA,C.afE)
w(C.aN6,A.eQ)
w(C.aPc,A.cb)
w(C.aPd,A.cb)
v(C.bA3,A.eB)
v(C.byj,A.jf)})()
A.iT(b.typeUniverse,JSON.parse('{"b_G":{"ax":[],"v":[]},"bcT":{"aC":[]},"apO":{"ag":[],"v":[]},"aEx":{"ah":["apO"]},"TU":{"ag":[],"v":[]},"alR":{"ax":[],"v":[]},"aWp":{"ax":[],"v":[]},"bgw":{"ah":["TU"]},"a_v":{"ag":[],"v":[]},"a_z":{"ag":[],"v":[]},"a_x":{"ag":[],"v":[]},"a_5":{"ag":[],"v":[]},"aBv":{"ah":["a_v"]},"bgV":{"ah":["a_z"]},"aBy":{"ah":["a_x"]},"ZN":{"ax":[],"v":[]},"be7":{"aC":[]},"bdZ":{"aC":[]},"be5":{"ah":["a_5"]},"aIy":{"aC":[]},"bjt":{"aC":[]},"bcf":{"ax":[],"v":[]},"alS":{"ag":[],"v":[]},"alT":{"ah":["alS"]},"bp1":{"aC":[]},"aWu":{"aC":[]},"ak4":{"ag":[],"v":[]},"auO":{"ag":[],"v":[]},"ayL":{"ag":[],"v":[]},"ak5":{"ah":["ak4"]},"bcV":{"aC":[]},"QE":{"ax":[],"v":[]},"aBu":{"aC":[]},"auP":{"ah":["auO"]},"bco":{"aC":[]},"ayM":{"ah":["ayL"]},"am0":{"ag":[],"v":[]},"alZ":{"ag":[],"v":[]},"alV":{"ag":[],"v":[]},"am1":{"ah":["am0"]},"bt4":{"aC":[]},"am_":{"ah":["alZ"]},"bjB":{"aC":[]},"alW":{"ah":["alV"]},"bj0":{"aC":[]},"Wf":{"ag":[],"v":[]},"alX":{"ag":[],"v":[]},"TV":{"ag":[],"v":[]},"a6u":{"ax":[],"v":[]},"bj7":{"aC":[]},"tF":{"ax":[],"v":[]},"Ir":{"ax":[],"v":[]},"blT":{"ah":["Wf"]},"alY":{"ah":["alX"]},"alU":{"ah":["TV"]},"aqZ":{"ag":[],"v":[]},"aqT":{"ag":[],"v":[]},"a09":{"ag":[],"v":[]},"aed":{"ax":[],"v":[]},"aF5":{"ah":["aqZ"]},"aF2":{"ah":["aqT"]},"bgC":{"ax":[],"v":[]},"bgF":{"aC":[]},"bks":{"ax":[],"v":[]},"bfH":{"aC":[]},"byq":{"ax":[],"v":[]},"bnL":{"ax":[],"v":[]},"aDv":{"ah":["a09"]},"aec":{"ax":[],"v":[]},"bkr":{"ax":[],"v":[]},"aeb":{"ax":[],"v":[]},"bkq":{"ax":[],"v":[]},"aDw":{"ax":[],"v":[]},"aJH":{"ax":[],"v":[]},"Gw":{"ax":[],"v":[]},"aqX":{"ag":[],"v":[]},"a0t":{"ag":[],"v":[]},"a0u":{"ag":[],"v":[]},"aF4":{"ah":["aqX"]},"bgD":{"ax":[],"v":[]},"ads":{"ax":[],"v":[]},"bgB":{"ax":[],"v":[]},"bgG":{"ax":[],"v":[]},"aF3":{"ah":["a0t"]},"blU":{"ah":["a0u"]},"b_E":{"ax":[],"v":[]},"a7g":{"ag":[],"v":[]},"blA":{"ah":["a7g"]},"blz":{"aC":[]},"au0":{"ax":[],"v":[]},"a_7":{"ag":[],"v":[]},"a_6":{"ag":[],"v":[]},"ZE":{"ag":[],"v":[]},"a2g":{"ag":[],"v":[]},"aAf":{"ah":["a_7"]},"aAe":{"ah":["a_6"]},"ayZ":{"ah":["ZE"]},"byi":{"ah":["a2g"]},"Gk":{"ag":[],"v":[]},"ayS":{"ag":[],"v":[]},"byg":{"ah":["Gk"]},"byh":{"ah":["ayS"]},"byf":{"aC":[]},"au_":{"ag":[],"v":[]},"aGy":{"ah":["au_"]},"aey":{"ax":[],"v":[]},"atU":{"ag":[],"v":[]},"atZ":{"ag":[],"v":[]},"bng":{"ah":["atU"]},"aGx":{"ah":["atZ"]},"OX":{"ag":[],"v":[]},"aGz":{"ah":["OX"],"eB":[]},"baG":{"jf":[],"fi":[]}}'))
A.Dh(b.typeUniverse,JSON.parse('{"afE":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aT5"),cq:w("mg"),Q:w("rn"),r:w("bu<n,n>"),c5:w("aV4"),dY:w("aV5"),fH:w("MK"),de:w("akM"),dN:w("MS<G>"),gc:w("El<G>"),A:w("eI<n?>"),e:w("Ip"),B:w("nv"),P:w("hV"),df:w("lr"),k:w("kT"),x:w("aB<~>"),U:w("O<SR>"),V:w("O<ac>"),C:w("O<rn>"),O:w("O<u>"),c:w("O<MK>"),b:w("O<akM>"),ac:w("O<eI<n?>>"),I:w("O<nv>"),u:w("O<hV>"),J:w("O<lr>"),_:w("O<kT>"),cl:w("O<aB<ai<a8<n,@>>>>"),R:w("O<ny>"),eU:w("O<ai<+(F,F)>>"),ez:w("O<a8<n,aE>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mO>"),bp:w("O<oF>"),g:w("O<o>"),ar:w("O<auc>"),v:w("O<fT>"),gy:w("O<a9W>"),L:w("O<+(n,n)>"),G:w("O<+(F,F)>"),E:w("O<+(F,~())>"),bd:w("O<+(n,G,P)>"),bF:w("O<+count,id,name(G,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j2>"),dT:w("O<bau>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lC>"),h:w("O<azZ>"),cC:w("O<bhL>"),fp:w("O<KM>"),M:w("O<KT>"),gZ:w("O<aID>"),gA:w("O<afJ>"),e4:w("O<afQ>"),dE:w("O<aKF>"),f7:w("O<P>"),n:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<ag>>"),d:w("ai<nv>"),do:w("ai<hV>"),cg:w("ai<lr>"),ax:w("ai<kT>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lC>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,Is>"),cM:w("N<G,n>"),w:w("iC"),g2:w("rL"),bV:w("apC"),fL:w("cr"),K:w("aE"),dc:w("fT"),fo:w("Pi<G>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,G)"),d9:w("+dx,hidden(F,ai<hV>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),fT:w("iu<hV>"),ec:w("iu<n>"),gW:w("r3<F>"),X:w("br<F>"),bW:w("dK"),W:w("bJ<n>"),b4:w("bJ<G>"),cI:w("k1<n>"),av:w("Y<zD>"),cc:w("Y<n>"),l:w("v"),gF:w("fi"),fA:w("lC"),dO:w("GA"),bw:w("aeb<n?>"),cy:w("KV"),q:w("my"),y:w("P"),i:w("F"),z:w("@"),S:w("G"),eK:w("ai<kT>?"),m:w("aqW?"),cT:w("o?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),he:w("+qrPayload,token,usesRemaining(n,n,G)?"),gG:w("+members,trees,viewOnly(G,G,P)?"),az:w("qi?"),T:w("n?"),aD:w("dK?"),o:w("lC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4l=new A.be(B.fL,B.bI,B.fL,B.bI)
D.adL=new A.be(B.fL,B.ik,B.fL,B.ik)
D.b4z=new A.be(B.ix,B.bI,B.bI,B.bI)
D.b4D=new A.ay(B.cG,1.4,B.r,-1)
D.b4N=new A.ay(B.ab,1,B.r,-1)
D.aef=new A.aY(140,1/0,0,1/0)
D.b6b=new A.aY(0,1/0,64,1/0)
D.b6f=new A.aY(0,84,0,1/0)
D.aem=new A.aY(130,1/0,0,1/0)
D.aCG=w([B.m7,B.rG,B.c],x.O)
D.c7c=new A.a9(B.aA,B.aF,B.x,D.aCG,null,null)
D.b7_=new A.p(null,null,null,null,null,D.c7c,B.n)
D.dep=w([B.aY,B.bR],x.O)
D.c9h=new A.a9(B.b7,B.ba,B.x,D.dep,null,null)
D.b7k=new A.p(null,null,null,null,null,D.c9h,B.n)
D.Yf=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fy=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dip=w([B.dx,D.Yf,D.fy],x.O)
D.c6p=new A.a9(B.b7,B.ba,B.x,D.dip,null,null)
D.b84=new A.p(null,null,null,null,null,D.c6p,B.n)
D.fqz=new A.H(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0L=new A.B("?",null,D.fqz,null,null,null,null,null,null,null,null,null)
D.bbI=new A.cg(B.A,null,null,D.h0L,null)
D.VT=new A.H(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJK=new A.B("\ud83c\udf33",null,D.VT,null,null,null,null,null,null,null,null,null)
D.af5=new A.cg(B.A,null,null,D.fJK,null)
D.fMn=new A.B("\ud83c\udfc6",null,At.KE,null,null,null,null,null,null,null,null,null)
D.bbT=new A.cg(B.A,null,null,D.fMn,null)
D.bdJ=new A.fk(null,null,null,null,null,E.ko,null,null,null,null)
D.af7=new A.cg(B.A,null,null,D.bdJ,null)
D.kO=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fr7=new A.H(!0,D.kO,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLq=new A.B("No books on the shelf yet.",null,D.fr7,null,null,null,null,null,null,null,null,null)
D.erh=new A.D(B.nG,D.fLq,null)
D.bc8=new A.cg(B.A,null,null,D.erh,null)
D.fy6=new A.H(!0,D.fy,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1F=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fy6,null,null,null,null,null,null,null,null,null)
D.erS=new A.D(B.cm,D.h1F,null)
D.bcB=new A.cg(B.A,null,null,D.erS,null)
D.aWz=new A.B("\ud83e\uddfa",null,D.VT,null,null,null,null,null,null,null,null,null)
D.bcQ=new A.cg(B.A,null,null,D.aWz,null)
D.fOS=new A.B("\ud83c\udfad",null,D.VT,null,null,null,null,null,null,null,null,null)
D.bd1=new A.cg(B.A,null,null,D.fOS,null)
D.bd4=new A.cg(B.A,null,null,A8.Y3,null)
D.afs=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afA=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bfi=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bfo=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bfA=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bfD=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bfF=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bfN=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lD=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bfR=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bfW=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bfX=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bfY=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lE=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bgy=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Bw=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgH=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bh0=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bh3=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bh9=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bhh=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.agb=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bho=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yr=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.age=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bhA=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yt=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bhV=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agq=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bii=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.biy=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.biW=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bj5=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FL=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bjr=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bjt=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bjx=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agS=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bjR=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bjX=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bk2=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agW=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bka=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bkC=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkK=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bkM=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bkR=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahb=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.blt=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahA=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bmq=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahN=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmP=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FZ=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bmV=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bn4=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bn6=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahS=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bnp=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bnq=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bnt=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ahZ=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Z9=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bnQ=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.boa=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bof=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ai9=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bom=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Zg=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.boF=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.boG=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G5=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bpr=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bq5=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bqb=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bqf=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qg=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bqq=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bqu=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bqA=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bqC=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiW=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aj_=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gb=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zy=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aj9=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.brK=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bs2=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bsr=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bsA=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajz=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.ZH=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bsJ=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bt_=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.ZL=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.btd=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.btt=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZP=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bty=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajR=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajT=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.btR=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ajZ=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bui=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bum=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bus=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.buy=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.buG=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bve=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bvK=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fFC=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bzg=new A.eI(null,D.fFC,B.fc,null,x.A)
D.fOJ=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bzi=new A.eI(null,D.fOJ,B.fc,null,x.A)
D.akU=new A.bd(3e4)
D.bzQ=new A.bd(38e5)
D.bAA=new A.ik(0,10,0,10)
D.bAJ=new A.R(0,1,0,0)
D.bAU=new A.ik(0,4,0,4)
D.bAX=new A.R(0,4,5,0)
D.bBd=new A.R(10,10,14,10)
D.bBp=new A.ik(10,4,10,4)
D.bBx=new A.ik(10,8,10,8)
D.bBy=new A.R(10,8,8,8)
D.bC0=new A.R(12,6,12,2)
D.bCg=new A.R(14,0,14,6)
D.bCk=new A.R(14,10,6,6)
D.bCl=new A.R(14,12,14,0)
D.bCp=new A.R(14,12,14,8)
D.bCs=new A.R(14,12,8,14)
D.bCw=new A.ik(14,14,14,14)
D.bCO=new A.R(14,6,14,40)
D.bCR=new A.R(14,8,14,30)
D.bDe=new A.R(16,2,16,10)
D.bDo=new A.R(16,6,16,30)
D.bDq=new A.R(16,6,16,8)
D.bDF=new A.R(18,10,18,4)
D.bDH=new A.R(18,12,18,0)
D.bDO=new A.R(18,14,12,4)
D.amm=new A.R(18,16,18,8)
D.bE4=new A.R(18,20,18,22)
D.bEa=new A.R(18,30,18,30)
D.bEs=new A.R(20,10,12,20)
D.bEv=new A.R(20,11,20,11)
D.bEG=new A.R(20,18,16,18)
D.bEI=new A.R(20,18,20,6)
D.bFx=new A.R(24,32,24,28)
D.bFy=new A.R(24,36,24,32)
D.bFC=new A.R(26,26,24,14)
D.bFR=new A.R(2,4,2,8)
D.bFV=new A.R(30,0,30,0)
D.bG5=new A.R(38,22,22,22)
D.amJ=new A.R(40,24,24,24)
D.bG7=new A.ik(40,40,40,40)
D.bG9=new A.R(46,30,30,30)
D.amM=new A.R(4,0,0,8)
D.bGA=new A.R(56,40,40,40)
D.bGE=new A.R(1.25,1.25,1.25,1.25)
D.bGF=new A.R(60,0,60,0)
D.bGJ=new A.R(6,14,6,16)
D.bGN=new A.R(6,4,12,0)
D.bGR=new A.R(6,6,10,2)
D.bGY=new A.ik(7,3,7,3)
D.bHw=new A.R(5,1.5,5,1.5)
D.bHH=new A.R(6,2.5,6,2.5)
D.fWW=new A.B("Family Games",null,B.jN,null,null,null,null,null,null,null,null,null)
D.fEe=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,K.ab7,null,null,null,null,null,null,null,null,null)
D.cIk=w([D.fWW,D.fEe],x.p)
D.bwM=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.cIk,null)
D.bI6=new A.bz(1,B.bd,D.bwM,null)
D.h0h=new A.B("Signature",null,B.nh,null,null,null,null,null,null,null,null,null)
D.bI9=new A.bz(1,B.bd,D.h0h,null)
D.fTv=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,P.tD,null,null,null,null,null,null,null,null,null)
D.bIH=new A.bz(1,B.bd,D.fTv,null)
D.fYo=new A.B("Tell the AI what to fix",null,B.di,null,null,null,null,null,null,null,null,null)
D.bIY=new A.bz(1,B.bd,D.fYo,null)
D.fyT=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_m=new A.B("Worksheets",null,D.fyT,null,null,null,null,null,null,null,null,null)
D.fz3=new A.H(!0,E.afW,null,null,null,null,13,B.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZd=new A.B("Track your project spending",null,D.fz3,null,null,null,null,null,null,null,null,null)
D.d5R=w([D.h_m,B.ay,D.fZd],x.p)
D.bwp=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.d5R,null)
D.bJ3=new A.bz(1,B.bd,D.bwp,null)
D.ftS=new A.H(!0,E.ko,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEO=new A.B("FAMILY LIBRARY",null,D.ftS,null,null,null,null,null,null,null,null,null)
D.bJl=new A.bz(1,B.bd,D.fEO,null)
D.OJ=new C.Ip("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wo=new C.Iq(0,"male")
D.os=new C.Iq(1,"female")
D.yW=new C.Iq(2,"unknown")
D.uB=new C.am2(0,"owner")
D.OK=new C.am2(1,"editor")
D.kX=new C.am2(2,"viewer")
D.aoG=new A.a_(61199,"MaterialIcons",!1)
D.bOC=new A.a_(61504,"MaterialIcons",!1)
D.bOD=new A.a_(61505,"MaterialIcons",!1)
D.bOF=new A.a_(61587,"MaterialIcons",!1)
D.bOM=new A.a_(61890,"MaterialIcons",!1)
D.bPE=new A.a_(63034,"MaterialIcons",!0)
D.bPW=new A.a_(63153,"MaterialIcons",!1)
D.bQs=new A.a_(63429,"MaterialIcons",!1)
D.aqR=new A.a_(984520,"MaterialIcons",!1)
D.bPa=new A.a_(62776,"MaterialIcons",!1)
D.bSN=new A.ae(D.bPa,26,B.b1,null,null,null)
D.bNA=new A.a_(57648,"MaterialIcons",!1)
D.bT6=new A.ae(D.bNA,14,B.c,null,null,null)
D.bTn=new A.ae(B.Hl,17,null,null,null,null)
D.bTt=new A.ae(B.a2c,null,B.bR,null,null,null)
D.bTU=new A.ae(E.a2k,null,null,null,null,null)
D.bTX=new A.ae(B.j4,18,E.ko,null,null,null)
D.a22=new A.a_(62044,"MaterialIcons",!1)
D.bU1=new A.ae(D.a22,null,B.aY,null,null,null)
D.bU8=new A.ae(B.z8,18,B.c,null,null,null)
D.bUS=new A.ae(B.ed,16,null,null,null,null)
D.bV_=new A.ae(D.a22,32,B.aY,null,null,null)
D.bVj=new A.ae(E.aoH,18,B.cG,null,null,null)
D.bWo=new A.ae(B.Hv,22,B.av,null,null,null)
D.bWA=new A.ae(B.ed,22,B.b1,null,null,null)
D.bWN=new A.ae(Z.a27,22,B.c,null,null,null)
D.bWT=new A.ae(B.uM,52,B.c,null,null,null)
D.bX2=new A.ae(B.Hv,30,B.av,null,null,null)
D.bXl=new A.ae(B.a2p,null,B.c,null,null,null)
D.ary=new A.ae(B.uU,22,B.c,null,null,null)
D.bXu=new A.ae(B.ed,17,null,null,null,null)
D.bXR=new A.ae(B.wE,26,B.cG,null,null,null)
D.bYC=new A.ae(B.a2x,16,null,null,null,null)
D.bZn=new A.ae(B.uM,24,B.c,null,null,null)
D.bZs=new A.ae(B.Pc,20,B.te,null,null,null)
D.bZx=new A.ae(B.Hj,null,B.bR,null,null,null)
D.bZF=new A.ae(B.j4,18,B.c,null,null,null)
D.c_k=new A.ae(B.cz,22,B.ab,null,null,null)
D.c0a=new A.ae(B.ei,16,B.ab,null,null,null)
D.c0m=new A.ae(D.a22,20,B.aY,null,null,null)
D.arY=new A.ae(B.hI,20,null,null,null,null)
D.c0R=new A.ae(B.cz,18,D.kO,null,null,null)
D.c17=new A.ae(B.zf,28,B.c,null,null,null)
D.c1h=new A.ae(B.P2,null,B.fh,null,null,null)
D.c1B=new A.ae(B.zf,24,B.c,null,null,null)
D.c22=new A.ae(B.uM,null,B.aY,null,null,null)
D.c23=new A.ae(B.k5,20,B.cG,null,null,null)
D.c2n=new A.ae(B.Hl,16,null,null,null,null)
D.c3W=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eK,!0,null,null,null,null)
D.asG=new C.a6u(10,null)
D.c4r=new C.a6u(12,null)
D.c4s=new C.a6u(14,null)
D.dmy=w([B.bx,B.aY,B.fo,B.b1],x.O)
D.c5D=new A.a9(B.aA,B.aF,B.x,D.dmy,null,null)
D.bpd=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bvl=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d2k=w([D.bpd,D.bvl],x.O)
D.c5O=new A.a9(B.b7,B.ba,B.x,D.d2k,null,null)
D.dgp=w([B.eV,B.fR,B.fo],x.O)
D.c5T=new A.a9(B.aA,B.aF,B.x,D.dgp,null,null)
D.aiK=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bfZ=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d4z=w([D.aiK,D.bfZ],x.O)
D.c6q=new A.a9(B.b7,B.ba,B.x,D.d4z,null,null)
D.bjH=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBW=w([D.bjH,D.aiK],x.O)
D.c6K=new A.a9(B.aA,B.aF,B.x,D.aBW,null,null)
D.aht=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bmh=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dfu=w([D.aht,D.bmh],x.O)
D.c7n=new A.a9(B.a6,B.aa,B.x,D.dfu,null,null)
D.dtv=w([B.bC,B.mQ],x.O)
D.c7p=new A.a9(B.b7,B.ba,B.x,D.dtv,null,null)
D.bp8=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dus=w([D.bp8,D.kO,D.kO,I.N8],x.O)
D.dwY=w([0,0.07,0.9,1],x.n)
D.c7U=new A.a9(B.a6,B.aa,B.x,D.dus,D.dwY,null)
D.c82=new A.a9(B.aA,B.aF,B.x,B.SR,null,null)
D.d06=w([B.aE,D.lD],x.O)
D.c85=new A.a9(B.a6,B.aa,B.x,D.d06,null,null)
D.dt3=w([B.b1,B.aY,B.bR],x.O)
D.c92=new A.a9(B.aA,B.aF,B.x,D.dt3,null,null)
D.cdl=w([10,20,30],x.t)
D.cni=w([-1,-0.4,0.3,1],x.n)
D.cuL=w([B.bx,B.b1,B.eV],x.O)
D.cuT=w([B.br,B.aE,B.kn],x.O)
D.cuV=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cvD=w([30,140,262,360],x.n)
D.bnz=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cBb=w([D.bnz,E.aii],x.O)
D.elT=new A.o(1,2)
D.fbT=new A.cU(B.aU,D.elT,3)
D.ayP=w([D.fbT],x.F)
D.cIC=w([B.ho,B.ch,B.fn],x.O)
D.cLm=w([B.bK,B.bv,B.bp],x.O)
D.bKb=new C.uP("classic","Classic leather","Gold-edged brown leather",D.aBW,E.ko,E.ko,"\u2766",B.K,!0,!1,!1,!1)
D.bf2=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bu8=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d7y=w([D.bf2,D.bu8],x.O)
D.ain=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bK6=new C.uP("ornate","Ornate gold","Double gold border and flourishes",D.d7y,D.ain,D.ain,"\u2726",B.K,!0,!0,!0,!1)
D.bjf=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bq_=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d_1=w([D.bjf,D.bq_],x.O)
D.bK5=new C.uP("parchment","Parchment","Old paper with dark ink",D.d_1,D.G5,L.iZ,"\u2767",B.K,!0,!1,!1,!0)
D.afC=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bso=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dri=w([D.afC,D.bso],x.O)
D.bn1=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.brF=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bK8=new C.uP("minimal","Clean paper","Plain and elegant, like a printed book",D.dri,D.bn1,D.brF,"",B.K,!0,!0,!1,!0)
D.bKa=new C.uP("midnight","Midnight","Deep blue with silver stars",K.aCf,B.cu,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bK4=new C.uP("emerald","Emerald library","Green cloth, title on the left",W.azd,E.ko,B.h_,"\u25c6",B.bn,!0,!1,!1,!1)
D.bsS=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dpj=w([B.ek,D.bsS],x.O)
D.bol=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bpy=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bK9=new C.uP("rose","Rose vintage","Burgundy with rose-gold lettering",D.dpj,D.bol,D.bpy,"\u2740",B.K,!0,!1,!0,!1)
D.du2=w([B.cq,B.m8],x.O)
D.bK7=new C.uP("modern","Modern","Dark, bold, left-aligned",D.du2,B.aH,B.c,"",B.bn,!1,!0,!1,!1)
D.a4D=w([D.bKb,D.bK6,D.bK5,D.bK8,D.bKa,D.bK4,D.bK9,D.bK7],A.as("O<uP>"))
D.cOj=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dtQ=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bKm=new C.lr('What does "Ubuntu" mean?',D.dtQ,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d0M=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bKp=new C.lr("In Swahili, what do we call a grandmother?",D.d0M,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d0D=w(["Babu","Mama","Baba","Dada"],x.s)
D.bKk=new C.lr("In Swahili, what do we call a grandfather?",D.d0D,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d1V=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bKo=new C.lr("What is a sister called in Swahili?",D.d1V,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d7_=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bKl=new C.lr("What is a brother called in Swahili?",D.d7_,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d0C=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bKw=new C.lr("Which word means father in Swahili?",D.d0C,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dv1=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bKv=new C.lr('"Umoja ni nguvu" means...',D.dv1,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.drZ=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bKx=new C.lr('"Haba na haba hujaza kibaba" teaches us...',D.drZ,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d4H=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bKu=new C.lr('The African saying "It takes a village to raise a child" means...',D.d4H,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dvl=w(["The elders","The market","The river","The drum"],x.s)
D.bKq=new C.lr("Who is the traditional keeper of the family stories?",D.dvl,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cSu=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bKn=new C.lr("Why do families sit round the fire at night?",D.cSu,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.du4=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bKs=new C.lr('What does "Harambee" mean?',D.du4,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d9O=w(["An elder","A baby","A market","A cow"],x.s)
D.bKr=new C.lr('"Mzee" is a respectful word for...',D.d9O,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dpa=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bKt=new C.lr('What does "Shikamoo" show?',D.dpa,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.az8=w([D.bKm,D.bKp,D.bKk,D.bKo,D.bKl,D.bKw,D.bKv,D.bKx,D.bKu,D.bKq,D.bKn,D.bKs,D.bKr,D.bKt],x.J)
D.cWS=w([90,360],x.n)
D.cZz=w([B.bR,B.bl],x.O)
D.boX=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d_d=w([D.afC,D.boX],x.O)
D.d_Q=w([-1,-0.3,0.4,1],x.n)
D.d0I=w([0,0.45,0.72,0.92,1],x.n)
D.bjb=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d1_=w([D.bjb,B.dh],x.O)
D.bgW=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ak8=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d1y=w([B.dx,D.bgW,D.ak8],x.O)
D.d2B=w([B.bb,B.jj,B.p8],x.O)
D.bjJ=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.brw=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bgC=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d2G=w([D.bjJ,D.brw,D.bgC],x.O)
D.d30=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d3a=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.huc=new C.adR(78,424,48,44,56)
D.hua=new C.adR(214,396,34,34,42)
D.hub=new C.adR(442,452,56,50,64)
D.aA6=w([D.huc,D.hua,D.hub],A.as("O<adR>"))
D.d3J=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bfT=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bls=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dwU=w([D.aht,D.bfT,D.bls],x.O)
D.bKc=new C.uQ("leather","Leather",D.dwU,"vintage")
D.daP=w([B.d6,B.FX,Aa.YH],x.O)
D.bKj=new C.uQ("midnight","Midnight",D.daP,"starry")
D.d2C=w([B.eq,B.e5,B.lh],x.O)
D.bKi=new C.uQ("forest","Forest",D.d2C,"story")
D.dyU=w([B.er,B.ek,B.kq],x.O)
D.bKf=new C.uQ("burgundy","Burgundy",D.dyU,"royal")
D.cKV=w([B.aE,B.oh,B.o5],x.O)
D.bKg=new C.uQ("royal","Royal",D.cKV,"royal")
D.d5c=w([B.bv,B.cq,B.m8],x.O)
D.bKd=new C.uQ("charcoal","Charcoal",D.d5c,"geo")
D.dx2=w([B.cc,B.dK,B.y9],x.O)
D.bKh=new C.uQ("sunset","Sunset",D.dx2,"sunset")
D.dxJ=w([B.jj,B.G6,B.YK],x.O)
D.bKe=new C.uQ("ocean","Ocean",D.dxJ,"band")
D.zL=w([D.bKc,D.bKj,D.bKi,D.bKf,D.bKg,D.bKd,D.bKh,D.bKe],A.as("O<uQ>"))
D.d5H=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d6i=w([B.an,B.aM,B.T],x.O)
D.d7D=w([B.ek,B.e5,B.d6,B.h9,B.yd,B.cG,B.kr,B.e6,B.cZ],x.O)
D.d7E=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fbU=new A.cU(B.ds,B.dG,8)
D.d7P=w([D.fbU],x.F)
D.d8V=w([B.bT,B.dK,B.km],x.O)
D.bhO=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blK=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bpV=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d9a=w([D.bhO,G.aiT,D.blK,D.bpV,D.ak8],x.O)
D.d9r=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d9D=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bfd=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bl6=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.da5=w([D.bfd,D.agW,D.bl6],x.O)
D.daK=w([B.bT,B.hD],x.O)
D.daQ=w([G.np,B.ia,G.afN,B.cO],x.O)
D.dco=w([B.cO,G.np,B.ia,D.lE,B.cO],x.O)
D.dd_=w([B.aV,B.w2,B.xY],x.O)
D.aB8=w(["True","False"],x.s)
D.eJc=new A.y(-0.65,0.6)
D.eVW=new A.y(-0.2,0.95)
D.eX0=new A.y(0.25,0.95)
D.eMH=new A.y(0.7,0.6)
D.eXA=new A.y(1,0.1)
D.ddM=w([Au.UE,D.eJc,D.eVW,D.eX0,D.eMH,D.eXA],x.G)
D.bnR=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bu0=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.biN=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.ddS=w([D.bnR,D.bu0,D.biN],x.O)
D.ddW=w([B.bN,B.c0,B.dl,B.aV],x.O)
D.deq=w([B.hT,B.cc,B.rx],x.O)
D.deO=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.df_=w([B.eV,B.cG],x.O)
D.bph=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dfp=w([D.bph,D.afA],x.O)
D.dfA=w([B.cF,B.fp,B.hE],x.O)
D.dfL=w([B.aH,B.bl,B.d6],x.O)
D.dgm=w([B.ev,B.cX,B.e5],x.O)
D.dgG=w([B.dJ,B.d6,B.FX],x.O)
D.dgK=w([B.bh,B.mL,B.cZ],x.O)
D.dh1=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bow=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmL=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dhm=w([D.bow,D.agS,D.bmL],x.O)
D.dia=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.djd=w([1,0,7,6,3,2],x.t)
D.a5B=w(["leather","linen","plain","stars","rays"],x.s)
D.djp=w([0.5,2,3.6],x.n)
D.djX=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bSt=new A.a_(985219,"MaterialIcons",!1)
D.bS0=new A.a_(983781,"MaterialIcons",!1)
D.aBC=w([B.a2c,B.hJ,B.lP,B.ie,D.bSt,B.HG,B.qF,D.bS0,K.aqF,B.CS,B.qH,B.mj],A.as("O<a_>"))
D.a5F=w(["double","single","corners","none"],x.s)
D.bK1=new C.zD("Little Seed","\ud83c\udf31",0)
D.bK3=new C.zD("Young Listener","\ud83d\udc42",40)
D.bK2=new C.zD("Storyteller","\ud83e\ude98",120)
D.bK0=new C.zD("Village Pride","\ud83c\udfe1",300)
D.bJZ=new C.zD("Keeper of Roots","\ud83c\udf33",700)
D.bK_=new C.zD("Elder of the Fire","\ud83d\udd25",1500)
D.aBE=w([D.bK1,D.bK3,D.bK2,D.bK0,D.bJZ,D.bK_],A.as("O<zD>"))
D.dl6=w([B.db,B.bq,B.e6],x.O)
D.dlm=w([],x.C)
D.Dt=w([],x.u)
D.aLE=new A.o(225,528)
D.eKT=new A.y(D.aLE,1)
D.emD=new A.o(350,548)
D.eRd=new A.y(D.emD,0.95)
D.aLz=new A.o(158,656)
D.eR5=new A.y(D.aLz,1.12)
D.eno=new A.o(92,544)
D.eGp=new A.y(D.eno,0.93)
D.emG=new A.o(398,614)
D.eN3=new A.y(D.emG,1.04)
D.emu=new A.o(318,662)
D.eBR=new A.y(D.emu,1.1)
D.a5N=w([D.eKT,D.eRd,D.eR5,D.eGp,D.eN3,D.eBR],A.as("O<+(o,F)>"))
D.dnp=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dnQ=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.doS=w([B.cO,G.np,B.ia,D.lE,B.cO,B.ia],x.O)
D.dqi=w([B.aw,B.fp,B.h9],x.O)
D.dqU=w([-70,58],x.n)
D.dqW=w([-70,-30,20],x.n)
D.drX=w([B.bh,B.mL,B.Gh],x.O)
D.dsd=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dLW=new C.lV("construction","Construction","Jobsite & builds",B.uJ)
D.dM2=new C.lV("house","Home Build","Houses & rooms",B.wz)
D.dLT=new C.lV("grocery","Grocery","Store & pantry",B.a36)
D.dLS=new C.lV("calculator","Calculations","Math & estimates",B.Pj)
D.dM0=new C.lV("lumber","Materials","Lumber & supplies",B.PD)
D.dLP=new C.lV("kitchen","Kitchen","Remodel & meals",A3.PE)
D.bRZ=new A.a_(983756,"MaterialIcons",!1)
D.dLU=new C.lV("landscape","Landscaping","Yard & garden",D.bRZ)
D.dLO=new C.lV("plumbing","Plumbing","Pipes & water",B.px)
D.dM3=new C.lV("electrical","Electrical","Wiring & power",B.hv)
D.dLM=new C.lV("store","Retail Shop","Daily business",B.ln)
D.dLN=new C.lV("paint_remodel","Paint & Remodel","Colors & walls",A3.Py)
D.bRp=new A.a_(983311,"MaterialIcons",!1)
D.dM_=new C.lV("roofing","Roofing","Roofs & exteriors",D.bRp)
D.bSb=new A.a_(983986,"MaterialIcons",!1)
D.dLL=new C.lV("warehouse","Warehouse","Storage & stock",D.bSb)
D.dLY=new C.lV("vehicles","Vehicles","Fleet & transport",B.HH)
D.bPc=new A.a_(62785,"MaterialIcons",!1)
D.dLR=new C.lV("farm","Farm","Crops & livestock",D.bPc)
D.dLQ=new C.lV("restaurant","Restaurant","Food & catering",B.wI)
D.dLX=new C.lV("tools","Tools","Workshop gear",B.HC)
D.dM1=new C.lV("wallet","Cash & Wallet","Quick spending",B.k5)
D.bQn=new A.a_(63395,"MaterialIcons",!1)
D.dLZ=new C.lV("concrete","Concrete","Foundation work",D.bQn)
D.dLV=new C.lV("blueprint","Blueprint","Plans & design",Ao.apa)
D.a6a=w([D.dLW,D.dM2,D.dLT,D.dLS,D.dM0,D.dLP,D.dLU,D.dLO,D.dM3,D.dLM,D.dLN,D.dM_,D.dLL,D.dLY,D.dLR,D.dLQ,D.dLX,D.dM1,D.dLZ,D.dLV],A.as("O<lV>"))
D.dsK=w([B.bu,B.bq],x.O)
D.dtw=w([B.iA,B.oc,B.dT],x.O)
D.ahH=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aiF=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bn5=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.beK=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCO=w([D.ahH,D.aiF,D.bn5,D.beK],x.O)
D.duJ=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a6l=w(["top","middle","bottom"],x.s)
D.dw8=w([B.co,B.bl,B.d6],x.O)
D.aD7=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b8x=new A.ac(0,B.G,B.aU,B.I,14)
D.aDa=w([D.b8x],x.V)
D.bm_=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dwN=w([D.agb,D.ZH,D.bm_],x.O)
D.dwO=w([B.b5,B.cX,B.e5],x.O)
D.emd=new A.o(24,-8)
D.emW=new A.o(48,0)
D.em9=new A.o(24,6)
D.dyr=w([B.I,D.emd,D.emW,D.em9],x.g)
D.dyQ=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eiJ={top:0,middle:1,bottom:2}
D.dC3=new A.bu(D.eiJ,["Top","Middle","Bottom"],x.r)
D.eik={double:0,single:1,corners:2,none:3}
D.dC9=new A.bu(D.eik,["Double line","One line","Corners","None"],x.r)
D.ejy={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dDH=new A.bu(D.ejy,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dDT=new A.bu(B.hZ,[],A.as("bu<G,+(n,n)>"))
D.eiB={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DG=new A.bu(D.eiB,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bu<n,G>"))
D.dGk=new H.NO(32,null)
D.dGl=new H.NO(40,null)
D.dGm=new H.NO(46,null)
D.aL6=new C.atZ(null)
D.el4=new A.o(0,40)
D.el5=new A.o(0,412)
D.el7=new A.o(0,900)
D.elh=new A.o(0,-34)
D.eli=new A.o(0,-46)
D.elk=new A.o(0,-74)
D.eln=new A.o(100,300)
D.elo=new A.o(10,14)
D.elr=new A.o(10,-10)
D.elw=new A.o(10,-46)
D.elx=new A.o(10,-58)
D.ely=new A.o(116,442)
D.elA=new A.o(11,-1)
D.elB=new A.o(11,-10)
D.elC=new A.o(11,-21)
D.aLu=new A.o(11,-60)
D.elJ=new A.o(14,-2)
D.elK=new A.o(150,520)
D.a8k=new A.o(150,592)
D.elN=new A.o(15,-15)
D.elO=new A.o(16,-1)
D.elS=new A.o(190,444)
D.elV=new A.o(1,5)
D.em2=new A.o(21,-78)
D.em3=new A.o(222,615)
D.JA=new A.o(225,300)
D.a8n=new A.o(225,574)
D.emc=new A.o(24,-52)
D.eme=new A.o(250,210)
D.emp=new A.o(2,-56)
D.aLI=new A.o(300,0)
D.emq=new A.o(300,440)
D.emt=new A.o(318,476)
D.emw=new A.o(324,144)
D.a8q=new A.o(332,150)
D.emy=new A.o(335,585)
D.emz=new A.o(338,140)
D.emA=new A.o(340,158)
D.emC=new A.o(34,-60)
D.E6=new A.o(36,-24)
D.emE=new A.o(372,470)
D.emF=new A.o(390,455)
D.emO=new A.o(42,468)
D.emP=new A.o(431,510)
D.emQ=new A.o(431,520)
D.emR=new A.o(45,-92)
D.emS=new A.o(46,20)
D.emT=new A.o(46,-92)
D.emU=new A.o(46,-94)
D.emV=new A.o(47,-4)
D.emX=new A.o(48,-4)
D.en4=new A.o(4,-26)
D.enc=new A.o(60,455)
D.enj=new A.o(8,14)
D.enn=new A.o(8,-76)
D.enp=new A.o(95,575)
D.enq=new A.o(98,-24)
D.ens=new A.o(9,-2)
D.ent=new A.o(9,-58)
D.aLR=new A.o(9,-79)
D.enu=new A.o(9,-9)
D.eo6=new A.o(16.5,8)
D.eo8=new A.o(3.2,0)
D.eoa=new A.o(-16.5,8)
D.eoh=new A.o(16.5,2)
D.eok=new A.o(-3.2,0)
D.eot=new A.o(9.5,6)
D.eox=new A.o(-10,14)
D.eoy=new A.o(-10,-12)
D.eoz=new A.o(-10,-58)
D.eoB=new A.o(-11,-1)
D.eoC=new A.o(-11,-10)
D.eoE=new A.o(-11,-60)
D.eoF=new A.o(-12,-14)
D.eoG=new A.o(-12,-16)
D.eoN=new A.o(-14,-2)
D.eoQ=new A.o(-15,-15)
D.eoR=new A.o(-15,-3)
D.eoT=new A.o(-16,-1)
D.ep9=new A.o(-24,-52)
D.epg=new A.o(-2,-34)
D.eph=new A.o(-2,-38)
D.epj=new A.o(-30,-100)
D.a8r=new A.o(-36,-24)
D.epu=new A.o(-4,-26)
D.epw=new A.o(-4,-6)
D.epG=new A.o(-8,-3)
D.epH=new A.o(-8,-48)
D.epK=new A.o(-9,-2)
D.epM=new A.o(-9,-58)
D.epN=new A.o(-9,-79)
D.epO=new A.o(-9,-9)
D.epQ=new A.o(-9.5,6)
D.eq3=new A.o(-16.5,2)
D.fM3=new A.B("Write a new book",null,B.hl,null,B.K,null,null,null,null,null,null,null)
D.eqD=new A.D(B.kt,D.fM3,null)
D.h_Q=new A.B("Tap to go on",null,B.vx,null,null,null,null,null,null,null,null,null)
D.eqZ=new A.D(B.li,D.h_Q,null)
D.ar6=new A.ae(B.hW,18,B.c,null,null,null)
D.fF8=new A.B("Add",null,B.kE,null,null,null,null,null,null,null,null,null)
D.de9=w([D.ar6,B.r4,D.fF8],x.p)
D.f90=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.de9,null)
D.er1=new A.D(B.nD,D.f90,null)
D.er2=new A.D(E.alg,A8.Y3,null)
D.fyO=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIi=new A.B("New Project",null,D.fyO,null,null,null,null,null,null,null,null,null)
D.dix=w([D.ar6,B.ae,D.fIi],x.p)
D.f93=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.dix,null)
D.erg=new A.D(B.iu,D.f93,null)
D.fKR=new A.B("Choose your header",null,A1.vw,null,null,null,null,null,null,null,null,null)
D.erB=new A.D(B.hV,D.fKR,null)
D.bdY=new A.fk(2.2,null,null,null,null,B.cG,null,null,null,null)
D.feL=new A.a6(22,22,D.bdY,null)
D.bc3=new A.cg(B.A,null,null,D.feL,null)
D.erG=new A.D(B.a_X,D.bc3,null)
D.bCG=new A.R(14,2,14,6)
D.fYX=new A.B("The top of your book. Tap a design to see it.",null,B.pO,null,null,null,null,null,null,null,null,null)
D.erH=new A.D(D.bCG,D.fYX,null)
D.fJZ=new A.B("\ud83c\udfc6 A new record!",null,B.fY,null,null,null,null,null,null,null,null,null)
D.erJ=new A.D(B.li,D.fJZ,null)
D.etr=new A.j0(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.etu=new A.j0(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aMs=new A.j0(1,0.9607843137254902,0.48627450980392156,0)
D.JJ=new A.j0(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Al=new A.j0(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.etA=new A.j0(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hwl=new C.bjt(null)
D.bxy=new A.mE(D.hwl,null,B.az,null,null)
D.aQ5=new A.cL(0,0,0,0,null,null,D.bxy,null)
D.fFa=new A.B("\ud83c\udfc5",null,B.aaL,null,null,null,null,null,null,null,null,null)
D.exZ=new A.cL(null,0,-34,null,null,null,D.fFa,null)
D.eG4=new A.y("E","Sit by the fire again")
D.eLH=new A.y("C","Good Learner")
D.eP7=new A.y("D","Still Growing")
D.eTK=new A.y(-42,42)
D.eV4=new A.y("B","Faithful Listener")
D.eX2=new A.y("A","Keeper of the Family")
D.f_g=new A.b5(-17,0.7,0)
D.f_S=new A.b5(-8,0.95,1.3)
D.f0W=new A.b5(18,0.65,5.2)
D.f0Y=new A.b5(0,1.15,2.6)
D.f1i=new A.b5(9,0.9,3.9)
D.f39=new A.cu([0,0,1,1])
D.aRz=new A.a1(0,0,520,160)
D.f63=new A.a1(10,612,440,618)
D.f64=new A.a1(10,612,440,628)
D.f67=new A.a1(14,-64,34,-12)
D.f6a=new A.a1(300,336,350,348)
D.a9l=new A.a1(30,96,420,346)
D.f6b=new A.a1(30,-9,46,1)
D.f6c=new A.a1(4,2,11,14)
D.f6e=new A.a1(-8,-12.5,8,-7)
D.f6f=new A.a1(-16.5,-21,16.5,1)
D.f6g=new A.a1(60,342,88,348)
D.UF=new A.a1(66,-66,94,-36)
D.f6h=new A.a1(6,8,10,14)
D.f6k=new A.a1(95,343,115,348)
D.f6l=new A.a1(-6.5,-74,6.5,-58)
D.f6r=new A.a1(-100,-74,100,-12)
D.f6s=new A.a1(-10,8,-6,14)
D.f6t=new A.a1(-11,2,-4,14)
D.f6u=new A.a1(-11,-70,11,-56)
D.f6B=new A.a1(-13,-24,13,-4)
D.f6H=new A.a1(-15,-21,15,0)
D.f6K=new A.a1(-16,-21,16,1)
D.f6L=new A.a1(-16,-21,16,2)
D.f6O=new A.a1(-16,-26,16,-6)
D.f6Y=new A.a1(-230,-26,230,26)
D.f7l=new A.a1(-38,-26,12,-6)
D.f7p=new A.a1(-3,-70,3,-63)
D.f7q=new A.a1(-44,-22,44,0)
D.f7s=new A.a1(-46,-9,-30,1)
D.aRD=new A.a1(-80,-190,80,20)
D.f7z=new A.a1(-8,-26,40,-6)
D.f7A=new A.a1(-98,-80,92,-75)
D.f7B=new A.a1(-9,-15,9,-9)
D.fYv=new A.B("Let the AI write it from your tree",null,B.iy,null,B.K,null,null,null,null,null,null,null)
D.bL3=new A.dq(1,B.cr,D.fYv,null)
D.daJ=w([E.a3B,B.ae,D.bL3],x.p)
D.f8F=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.daJ,null)
D.fEP=new A.B("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dqE=w([D.arY,B.ae,D.fEP],x.p)
D.f8P=new A.c7(B.aL,B.bc,B.j,B.l,null,B.p,null,0,D.dqE,null)
D.bWG=new A.ae(B.id,14,B.b1,null,null,null)
D.fsq=new A.H(!0,B.b1,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fII=new A.B("Cashier",null,D.fsq,null,null,null,null,null,null,null,null,null)
D.dj3=w([D.bWG,B.bm,D.fII],x.p)
D.f8T=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.dj3,null)
D.fEQ=new A.B("Transfer & settings",null,B.di,null,null,null,null,null,null,null,null,null)
D.bIO=new A.bz(1,B.bd,D.fEQ,null)
D.d23=w([D.ary,B.au,D.bIO],x.p)
D.f8U=new A.c7(B.aL,B.e,B.j,B.l,null,B.p,null,0,D.d23,null)
D.fdr=new A.av(16,40)
D.fdw=new A.av(22,64)
D.fdD=new A.av(280,88)
D.fer=new A.a6(30,null,null,null)
D.fDV=new A.B("The teacher is writing\u2026",null,B.AG,null,null,null,null,null,null,null,null,null)
D.bdb=new A.cg(B.A,null,null,D.fDV,null)
D.hqf=new A.bJ("w",x.W)
D.feR=new A.a6(null,56,D.bdb,D.hqf)
D.ffF=new A.hG(5,8,8,1,null)
D.ffN=new A.hG(2,12,12,1.05,null)
D.fIo=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fgv=new A.b1(D.fIo,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fID=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTT=new A.b1(D.fID,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fR5=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fgZ=new A.b1(D.fR5,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h0T=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new A.b1(D.h0T,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fKP=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fha=new A.b1(D.fKP,null,null,null,null,null,null,null,null,null,null,null,null,B.h2,!1,null,null,null,B.t,null)
D.fZ9=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aTX=new A.b1(D.fZ9,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fKN=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fhA=new A.b1(D.fKN,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fFr=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fhC=new A.b1(D.fFr,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fOx=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fhI=new A.b1(D.fOx,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h1C=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fin=new A.b1(D.h1C,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fXp=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fiM=new A.b1(D.fXp,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h0X=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fiP=new A.b1(D.h0X,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fSL=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fiR=new A.b1(D.fSL,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMH=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fiS=new A.b1(D.fMH,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMI=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fjS=new A.b1(D.fMI,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIq=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fk9=new A.b1(D.fIq,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fKr=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new A.b1(D.fKr,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fSb=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fkJ=new A.b1(D.fSb,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fNx=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fkK=new A.b1(D.fNx,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fxv=new A.H(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmo=new A.en("\u2665",null,null,B.cJ,null,null,null,null,null,null,D.fxv)
D.fuI=new A.H(!0,B.aP,null,null,null,null,28,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmE=new A.en("Today: how well do you know the family?",null,null,B.cJ,null,null,null,null,null,null,D.fuI)
D.fmW=new A.H(!0,B.q4,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo2=new A.H(!0,D.kO,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fot=new A.H(!0,D.kO,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fox=new A.H(!0,B.cO,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foG=new A.H(!0,D.fy,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foR=new A.H(!0,D.fy,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpa=new A.t5(!0,B.to,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpq=new A.H(!0,B.cO,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpt=new A.H(!0,D.kO,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpu=new A.H(!0,B.cO,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpz=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpC=new A.H(!0,B.cO,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq7=new A.H(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq8=new A.H(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqa=new A.H(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqC=new A.H(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV6=new A.H(!0,B.aS,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV8=new A.H(!0,D.lD,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr0=new A.H(!0,B.cO,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaQ=new A.t5(!0,B.Ua,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vz=new A.H(!0,B.cO,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fra=new A.H(!0,B.T,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frf=new A.H(!0,D.fy,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsM=new A.H(!0,D.fy,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVi=new A.H(!0,D.fy,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft4=new A.H(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftf=new A.H(!0,D.fy,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fth=new A.H(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftn=new A.H(!0,L.iZ,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVm=new A.H(!0,D.fy,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fui=new A.H(!0,D.fy,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuB=new A.H(!0,D.fy,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuD=new A.H(!0,B.T,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuF=new A.H(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv2=new A.H(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Iz,null,null,null)
D.aVC=new A.H(!0,D.fy,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvq=new A.H(!0,B.T,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvM=new A.H(!0,B.fh,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw9=new A.H(!0,B.bR,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwd=new A.H(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fws=new A.H(!0,D.fy,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwA=new A.H(!0,D.G5,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwJ=new A.H(!0,B.b1,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx8=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxf=new A.H(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dj,null,null,null)
D.fxF=new A.H(!0,B.cO,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new A.H(!0,B.cG,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy0=new A.H(!0,D.lE,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVW=new A.H(!0,D.fy,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KP=new A.H(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVY=new A.H(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dj,null,null,null)
D.fyk=new A.H(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyo=new A.H(!0,G.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new A.H(!0,B.b1,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz2=new A.H(!0,D.fy,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzp=new A.H(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new A.H(!0,D.fy,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAg=new A.H(!0,D.fy,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAl=new A.H(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAu=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abk=new A.H(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abm=new A.H(!0,D.lD,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCb=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCt=new A.H(!0,B.aP,null,null,null,null,27,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCB=new A.H(!0,L.iZ,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCJ=new A.H(!0,L.iZ,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new A.B("Time:",null,B.hj,null,null,null,null,null,null,null,null,null)
D.fDy=new A.B("\ud83c\udfae",null,K.abb,null,null,null,null,null,null,null,null,null)
D.fDz=new A.B("Themes",null,B.pM,null,null,null,null,null,null,null,null,null)
D.fE2=new A.B("\ud83c\udfb2",null,B.xj,null,null,null,null,null,null,null,null,null)
D.fE6=new A.B("Delete this game?",null,B.iy,null,null,null,null,null,null,null,null,null)
D.fEd=new A.B("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.ft_=new A.H(!0,B.T,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEE=new A.B("Debt receipt",null,D.ft_,null,B.K,null,null,null,null,null,null,null)
D.aWb=new A.H(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEX=new A.B("Person who owes",null,D.aWb,null,null,null,null,null,null,null,null,null)
D.fFU=new A.B("Notes",null,B.aaZ,null,null,null,null,null,null,null,null,null)
D.fGk=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.frU=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGn=new A.B("Share",null,D.frU,null,null,null,null,null,null,null,null,null)
D.fHj=new A.B("Move your family trees",null,I.abi,null,null,null,null,null,null,null,null,null)
D.fHZ=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fIC=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fJ_=new A.B("SAVE",null,D.KP,null,null,null,null,null,null,null,null,null)
D.fJC=new A.B("The round button is the right answer.",null,T.xg,null,null,null,null,null,null,null,null,null)
D.fJY=new A.B("Remove this book?",null,B.fY,null,null,null,null,null,null,null,null,null)
D.fyJ=new A.H(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dj,null,null,null)
D.fKw=new A.B("Fireside Stories",null,D.fyJ,null,null,null,null,null,null,null,null,null)
D.aWI=new A.B("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fLc=new A.B("What should the AI do?",null,B.di,null,null,null,null,null,null,null,null,null)
D.fry=new A.H(!0,D.lD,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLr=new A.B("REPORT CARD",null,D.fry,null,null,null,null,null,null,null,null,null)
D.fMa=new A.B("Calabash Catch",null,B.KS,null,null,null,null,null,null,null,null,null)
D.fMD=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fN4=new A.B("\ud83c\udfe1",null,B.EE,null,null,null,null,null,null,null,null,null)
D.fNM=new A.B("Ribbon bookmark",null,B.jx,null,null,null,null,null,null,null,null,null)
D.fAf=new A.H(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOg=new A.B("NGMY.ORG",null,D.fAf,null,B.K,null,null,null,null,null,null,null)
D.fPz=new A.B("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fwt=new A.H(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQl=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fwt,null,B.K,null,null,null,null,null,null,null)
D.fRz=new A.B("Delete",null,B.Vt,null,null,null,null,null,null,null,null,null)
D.fRA=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRH=new A.B("Thumbnail",null,B.pM,null,null,null,null,null,null,null,null,null)
D.fSh=new A.B("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fSm=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xl,null,B.K,null,null,null,null,null,null,null)
D.fSM=new A.B("Your photos",null,B.pM,null,null,null,null,null,null,null,null,null)
D.fT1=new A.B("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fTq=new A.B("\u2b50 stars",null,B.VF,null,null,null,null,null,null,null,null,null)
D.fTE=new A.B("Design your cover",null,A1.vw,null,null,null,null,null,null,null,null,null)
D.fTK=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fTN=new A.B("PICTURE",null,M.vB,null,null,null,null,null,null,null,null,null)
D.fTP=new A.B("\ud83c\udfaf",null,D.VT,null,null,null,null,null,null,null,null,null)
D.fUa=new A.B("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fUc=new A.B("You can undo it right after.",null,T.xg,null,null,null,null,null,null,null,null,null)
D.fUJ=new A.B("Print",null,B.vy,null,null,null,null,null,null,null,null,null)
D.fV8=new A.B("Amount owed",null,D.aWb,null,null,null,null,null,null,null,null,null)
D.fVn=new A.B("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fVZ=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fW1=new A.B("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fWt=new A.B("Debtor signature",null,B.aaZ,null,null,null,null,null,null,null,null,null)
D.fWD=new A.B("Change icon",null,B.aaY,null,null,null,null,null,null,null,null,null)
D.fXq=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,P.tD,null,null,null,null,null,null,null,null,null)
D.fXS=new A.B("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fXY=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VS,null,null,null,null,null,null,null,null,null)
D.fYl=new A.B("Download",null,B.vy,null,null,null,null,null,null,null,null,null)
D.fYm=new A.B("The person who planted this tree has not made a game yet.",null,B.AP,null,null,null,null,null,null,null,null,null)
D.fYq=new A.B("Change",null,B.pM,null,null,null,null,null,null,null,null,null)
D.fZf=new A.B("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fZi=new A.B("WHAT SHOULD IT CHANGE?",null,M.vB,null,null,null,null,null,null,null,null,null)
D.fZS=new A.B("COLOUR",null,M.vB,null,null,null,null,null,null,null,null,null)
D.h_5=new A.B("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.h_8=new A.B("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.h_h=new A.B("Give me another clue",null,D.KP,null,null,null,null,null,null,null,null,null)
D.h0b=new A.B("Create Family Tree",null,B.fa,null,null,null,null,null,null,null,null,null)
D.h0l=new A.B("THE TEACHER EXPLAINS THESE",null,P.tD,null,null,null,null,null,null,null,null,null)
D.fmV=new A.H(!0,E.ko,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0r=new A.B("Write the first page myself",null,D.fmV,null,null,null,null,null,null,null,null,null)
D.h1_=new A.B("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.h16=new A.B("Create Project",null,E.aVT,null,null,null,null,null,null,null,null,null)
D.hrz=new C.acv(1,"header")
D.acn=new C.acv(2,"projects")
D.hrA=new C.acv(3,"cashier")
D.aco=new C.acv(4,"familyTree")
D.hFh=new C.cGv(0,"start")
D.hFi=new C.cGw(0,"start")
D.hrY=new C.ZE(null)
D.hsZ=new C.a_6(null)
D.dDQ=new A.bu(B.hZ,[],A.as("bu<n,GA>"))
D.dlM=w([],x.dE)
D.dlN=w([],x.M)
D.htv=new C.bgE(D.dDQ,D.dlM,D.dlN,0,0,null,null)
D.b03=new C.a_X(0,"intro")
D.b04=new C.a_X(1,"countdown")
D.acC=new C.a_X(2,"ask")
D.WM=new C.a_X(3,"reveal")
D.b05=new C.a_X(4,"end")
D.hwn=new C.td(F.Ge,D.lE,B.cO,F.lF,5,!1,!1,!1,0,null)
D.hwo=new C.td(F.Ge,B.er,B.cO,B.bP,2,!0,!0,!1,2,B.cO)
D.hwp=new C.td(B.oj,B.cG,B.cO,F.lF,2,!0,!1,!1,2,B.aw)
D.hwq=new C.td(F.Ge,B.dJ,B.cO,F.lF,5,!1,!1,!1,1,null)
D.hwr=new C.td(F.ZW,D.aiF,B.cO,F.lF,4,!0,!1,!0,0,null)
D.b08=new C.td(F.ZW,B.dK,B.cO,F.lF,3,!0,!1,!0,2,null)
D.b09=new C.td(F.mV,D.lE,B.c,F.lF,0,!1,!1,!0,0,null)
D.b0a=new C.td(B.oj,B.aE,B.cO,B.bP,2,!0,!0,!1,2,B.dK)
D.b0b=new C.td(B.oj,G.np,B.ia,F.lF,5,!1,!1,!0,3,null)
D.hws=new C.td(B.oj,B.dK,B.cO,F.lF,0,!0,!1,!1,0,B.aE)
D.b0c=new C.td(F.Ge,B.er,B.cO,B.bP,1,!1,!0,!1,1,null)
D.b0d=new C.td(F.FN,B.aw,B.aE,F.lF,4,!0,!1,!0,2,null)
D.hwt=new C.td(F.mV,B.aw,B.er,F.lF,3,!0,!1,!1,0,null)
D.hwu=new C.td(B.oj,B.dJ,B.cO,B.bP,1,!1,!0,!1,1,null)
D.hwv=new C.td(F.FN,D.ahH,B.c,F.lF,5,!1,!1,!0,0,null)
D.hx8=new C.a0u(null)
D.hFq=new C.afS(0,"still")
D.X8=new C.afS(1,"walk")
D.b0E=new C.afS(2,"pound")
D.b0F=new C.afS(3,"drum")
D.hB8=new C.a1M(0,"greet")
D.b0G=new C.a1M(1,"teach")
D.acW=new C.a1M(2,"ask")
D.hB9=new C.a1M(3,"feedback")
D.b0H=new C.a1M(4,"end")
D.Xd=new C.a24(0,"intro")
D.Xe=new C.a24(1,"asking")
D.B4=new C.a24(2,"reacting")
D.ad5=new C.a24(3,"driving")
D.ad6=new C.a24(4,"arrived")
D.ad9=new C.aLr(0,"projects")
D.b14=new C.aLr(1,"cashier")
D.hDa=new C.aLr(2,"familyTree")})()};
(a=>{a["ZuuDceBLeO2B6p0CbDnmdQCfjOY="]=a.current})($__dart_deferred_initializers__);