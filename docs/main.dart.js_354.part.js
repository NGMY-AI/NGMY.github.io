((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,S,A8,L,H,E,T,A9,Q,Aa,Ab,Ac,A0,Ad,Ae,R,Af,A1,Ag,Ah,Ai,M,A2,Aj,A3,A4,A5,Ak,A6,Al,G,Am,An,Ao,A7,Ap,U,O,Aq,V,Ar,As,W,X,F,At,I,K,Y,C={
bFH(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFH=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$bFH)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nn(b1)
s=A.c_(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cS(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.J)(h),++d){a0=h[d]
f.push(A.I(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Y.aw(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rh(t,a1,B.i0,"book",E.GB),$async$bFH)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RA(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LY(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cB
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3H(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFH,v)},
ai7(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ai7=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vW(null,""),$async$ai7)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nn(b6)
s=x.S
r=A.cW(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a3u(new A.N(r,new C.fOt(),r.$ti.k("N<ak.E,m>")).aO(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fOs(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.aw(b7,null)+"\nAllowed values: style one of "+B.d.aO(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ai7)
case 6:l=c5
k=H.RA(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apG(s,D.dEa,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.I(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Y.aw(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ai7)
case 10:l=c5
k=l==null?null:H.RA(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kJ(a5,a2.k("kJ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
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
p=A.cF(new A.b7(h,s),new C.fOu(),s.k("M.E"),p)
p=H.a3u(A.pK(p,3,A.a4(p).k("M.E")).aO(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3H(s,b9),$async$ai7)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apG(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai7,v)},
hFn(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fY2(e,f),d,null,!0,!0,x.g2)},
apG:function apG(d,e,f){this.a=d
this.b=e
this.c=f},
fOt:function fOt(){},
fOs:function fOs(d){this.a=d},
fOu:function fOu(){},
fY2:function fY2(d,e){this.a=d
this.b=e},
bDv(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDv=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fBD())){u=null
w=1
break}t=B.d.cD(b1,new C.fBE())
s=$.Q()
r=new A.q1(new A.pD())
q=A.zy(r,D.aRD)
p=A.K()
p.r=B.c.gp(0)
q.ar(D.aRD,p)
o=A.K()
o.r=B.U.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bu
o.e=B.dQ
n=new C.fBJ(t)
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
a3=new A.aG(s.r,B.ai,null,null,p)
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
a3=new A.aG(s.r,B.ai,null,null,p)
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
return A.b(r.o1().xE(520,160),$async$bDv)
case 4:w=3
return A.b(b3.hs(B.hi),$async$bDv)
case 3:b0=b3
u=b0==null?null:J.eT(B.dN.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDv,v)},
fM9(d){return C.iky(d)},
iky(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fM9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjB()
n=d.x!=null&&d.zJ(null).length===0
if(d.x!=null)t=n?D.An:D.JH
else t=d.gUB()?D.JH:D.aMv
w=3
return A.b(C.bDv(d.ax),$async$fM9)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aol(s)
r=A.a5t(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aMv}else{p.c=C.xo(q,!0)
p.b=n?D.An:D.JH}r.a45(A.h7E(new C.fMb(p,d,new C.fMc(),t,n,o),null,D.bGh,B.x9))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fM9,v)},
fSR(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fSR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fM9(d),$async$fSR)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=Ae.Hw(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSR,v)},
fBD:function fBD(){},
fBE:function fBE(){},
fBJ:function fBJ(d){this.a=d},
fMc:function fMc(){},
fMb:function fMb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fMa:function fMa(){},
fYv(d,e){var w=0,v=A.j(x.H)
var $async$fYv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fYz(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYv)
case 2:return A.h(null,v)}})
return A.i($async$fYv,v)},
bG8(d,e,f,g){return C.isL(d,e,f,g)},
isL(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bG8=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gan(e.split(",")):e
r=B.cI.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fkN)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fYr(g,r,f),d,null,!0,!0,x.H),$async$bG8)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bG8,v)},
fYA(d,e){var w=0,v=A.j(x.H)
var $async$fYA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fYD(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYA)
case 2:return A.h(null,v)}})
return A.i($async$fYA,v)},
b_K:function b_K(d,e){this.c=d
this.a=e},
c7S:function c7S(){},
bcV:function bcV(d,e){this.b=d
this.a=e},
fYz:function fYz(d,e){this.a=d
this.b=e},
fYw:function fYw(d){this.a=d},
fYx:function fYx(d,e,f){this.a=d
this.b=e
this.c=f},
fYy:function fYy(d,e){this.a=d
this.b=e},
fYr:function fYr(d,e,f){this.a=d
this.b=e
this.c=f},
fYp:function fYp(d){this.a=d},
fYq:function fYq(d,e,f){this.a=d
this.b=e
this.c=f},
fYD:function fYD(d,e){this.a=d
this.b=e},
fYB:function fYB(d){this.a=d},
fYC:function fYC(d,e,f){this.a=d
this.b=e
this.c=f},
fGt(d,e){var w=0,v=A.j(x.y),u,t
var $async$fGt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3f(d),$async$fGt)
case 3:t=g
J.nT(t,new C.fGu(e))
u=A.aiL(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGt,v)},
fGu:function fGu(d){this.a=d},
apS:function apS(d,e,f){this.c=d
this.d=e
this.a=f},
aEz:function aEz(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQc:function dQc(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e,f){this.a=d
this.b=e
this.c=f},
dQ_:function dQ_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dPW:function dPW(){},
dPX:function dPX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPV:function dPV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPG:function dPG(d){this.a=d},
dPH:function dPH(d,e,f){this.a=d
this.b=e
this.c=f},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPF:function dPF(d){this.a=d},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPE:function dPE(d){this.a=d},
dPO:function dPO(d,e,f){this.a=d
this.b=e
this.c=f},
dPP:function dPP(d,e,f){this.a=d
this.b=e
this.c=f},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d,e,f){this.a=d
this.b=e
this.c=f},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPB:function dPB(d){this.a=d},
dPS:function dPS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPz:function dPz(){},
dPt:function dPt(d){this.a=d},
dPu:function dPu(d){this.a=d},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPy:function dPy(d){this.a=d},
dPU:function dPU(d){this.a=d},
dPx:function dPx(){},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPw:function dPw(d){this.a=d},
dPK:function dPK(d,e,f){this.a=d
this.b=e
this.c=f},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPL:function dPL(d){this.a=d},
dPM:function dPM(d,e,f){this.a=d
this.b=e
this.c=f},
dQf:function dQf(){},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQd:function dQd(d){this.a=d},
dQe:function dQe(d){this.a=d},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQa:function dQa(d){this.a=d},
dQ2:function dQ2(d,e,f){this.a=d
this.b=e
this.c=f},
dQ3:function dQ3(d,e,f){this.a=d
this.b=e
this.c=f},
dQ4:function dQ4(d,e,f){this.a=d
this.b=e
this.c=f},
dQ5:function dQ5(d,e,f){this.a=d
this.b=e
this.c=f},
dQ6:function dQ6(d,e,f){this.a=d
this.b=e
this.c=f},
dQ7:function dQ7(d,e,f){this.a=d
this.b=e
this.c=f},
dQ8:function dQ8(d,e,f){this.a=d
this.b=e
this.c=f},
dQh:function dQh(){},
dQi:function dQi(){},
dQj:function dQj(){},
dQk:function dQk(d){this.a=d},
dQb:function dQb(d,e){this.a=d
this.b=e},
hBe(d){return B.d.dP(D.a4K,new C.fHf(d),new C.fHg())},
uT:function uT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fHf:function fHf(d){this.a=d},
fHg:function fHg(){},
alX:function alX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWs:function aWs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U4:function U4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgx:function bgx(){this.d=$
this.c=this.a=null},
dfT:function dfT(d,e){this.a=d
this.b=e},
dfR:function dfR(d,e){this.a=d
this.b=e},
dfS:function dfS(){},
dfU:function dfU(d,e){this.a=d
this.b=e},
hly(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nx(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LK(d,e){return C.ij8(d,e)},
ij8(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$LK)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Y.aQ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cF(o,new C.fJK(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fJL(),n),n.k("M.E"))
B.d.aZ(o,new C.fJM())
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
return A.i($async$LK,v)},
BC(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BC=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$BC)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.fX6(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.aw(r,null)),$async$BC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BC,v)},
aSx(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSx=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LK(d,e),$async$aSx)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h4D(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BC(d,e,u),$async$aSx)
case 3:return A.h(null,v)}})
return A.i($async$aSx,v)},
bDY(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LK(d,e),$async$bDY)
case 2:u=h
J.nT(u,new C.fGl(f))
w=3
return A.b(C.BC(d,e,u),$async$bDY)
case 3:return A.h(null,v)}})
return A.i($async$bDY,v)},
bEc(d,e){return C.ij7(d,e)},
ij7(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEc=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bEc)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OB
w=1
break}p=B.Y.aQ(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.DK.al(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a6q,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5L,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5H,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d5Z,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Iv(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OB
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OB
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEc,v)},
SH(d,e,f){return C.isg(d,e,f)},
isg(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SH=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$SH)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.aw(f.aj(),null)),$async$SH)
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
return A.i($async$SH,v)},
S9(d,e){return C.ij9(d,e)},
ij9(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$S9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$S9)
case 7:r=g
q=r.tS("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LK(d,e),$async$S9)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lK(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$S9)
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
return A.i($async$S9,v)},
ahr(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S9(d,e),$async$ahr)
case 3:s=g
r=J.a7(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.aA(),$async$ahr)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahr)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahr,v)},
a3V(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3V=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.S9(d,e),$async$a3V)
case 2:s=h
J.h9(s,f)
w=3
return A.b(A.aA(),$async$a3V)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3V)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3V)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3V)
case 6:return A.h(null,v)}})
return A.i($async$a3V,v)},
nx:function nx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJK:function fJK(){},
fJL:function fJL(){},
fJM:function fJM(){},
fX6:function fX6(){},
h4D:function h4D(d){this.a=d},
fGl:function fGl(d){this.a=d},
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
bRk:function bRk(d){this.a=d},
isA(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ec(new C.fXH(j,i,f,e,h,g),!0,null,x.H))},
S4(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$S4=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S9(h,g),$async$S4)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aTY)
u=!1
w=1
break}w=4
return A.b(C.hFn(d,f,e),$async$S4)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahr(h,g),$async$S4)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nx(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.BC(h,r,p),$async$S4)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SH(h,r,new C.Iv("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$S4)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$S4,v)},
fXH:function fXH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_D:function a_D(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBy:function aBy(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dgy:function dgy(d){this.a=d},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgm:function dgm(d,e){this.a=d
this.b=e},
dgj:function dgj(d,e){this.a=d
this.b=e},
dfV:function dfV(d){this.a=d},
dfW:function dfW(d,e){this.a=d
this.b=e},
dgn:function dgn(d){this.a=d},
dg3:function dg3(d){this.a=d},
dg1:function dg1(d){this.a=d},
dg2:function dg2(d){this.a=d},
dg4:function dg4(d){this.a=d},
dgk:function dgk(d){this.a=d},
dgl:function dgl(){},
dg_:function dg_(d){this.a=d},
dg0:function dg0(d,e){this.a=d
this.b=e},
dg5:function dg5(d){this.a=d},
dg6:function dg6(d,e){this.a=d
this.b=e},
dgw:function dgw(d){this.a=d},
dgv:function dgv(d,e){this.a=d
this.b=e},
dgu:function dgu(d){this.a=d},
dgg:function dgg(d){this.a=d},
dgf:function dgf(d){this.a=d},
dgh:function dgh(d){this.a=d},
dfX:function dfX(d,e){this.a=d
this.b=e},
dgi:function dgi(d,e){this.a=d
this.b=e},
dg9:function dg9(d){this.a=d},
dga:function dga(d){this.a=d},
dg8:function dg8(){},
dgb:function dgb(d){this.a=d},
dgc:function dgc(d){this.a=d},
dgd:function dgd(d,e){this.a=d
this.b=e},
dge:function dge(d,e,f){this.a=d
this.b=e
this.c=f},
dg7:function dg7(d,e){this.a=d
this.b=e},
dgp:function dgp(d){this.a=d},
dgo:function dgo(){},
dgq:function dgq(d){this.a=d},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d,e){this.a=d
this.b=e},
dfY:function dfY(d){this.a=d},
dfZ:function dfZ(d){this.a=d},
a_H:function a_H(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgW:function bgW(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dik:function dik(d){this.a=d},
dil:function dil(d){this.a=d},
dij:function dij(d){this.a=d},
dim:function dim(d){this.a=d},
dii:function dii(d){this.a=d},
din:function din(d){this.a=d},
dih:function dih(d){this.a=d},
dio:function dio(d,e){this.a=d
this.b=e},
dig:function dig(d,e){this.a=d
this.b=e},
dip:function dip(d,e){this.a=d
this.b=e},
a_F:function a_F(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afU:function afU(d,e,f){this.a=d
this.b=e
this.c=f},
aBB:function aBB(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dgN:function dgN(d,e){this.a=d
this.b=e},
dgM:function dgM(d,e){this.a=d
this.b=e},
dgR:function dgR(d){this.a=d},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgO:function dgO(d){this.a=d},
dgP:function dgP(d){this.a=d},
dgS:function dgS(d){this.a=d},
dgT:function dgT(d){this.a=d},
dgL:function dgL(d,e){this.a=d
this.b=e},
dgK:function dgK(d,e){this.a=d
this.b=e},
KS:function KS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZV:function ZV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cP6:function cP6(d){this.a=d},
cP7:function cP7(){},
cP8:function cP8(d){this.a=d},
be8:function be8(d,e,f){this.b=d
this.c=e
this.a=f},
be_:function be_(d,e){this.b=d
this.a=e},
uU:function uU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_d:function a_d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be6:function be6(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d7K:function d7K(d,e,f){this.a=d
this.b=e
this.c=f},
d7J:function d7J(d,e){this.a=d
this.b=e},
d88:function d88(d){this.a=d},
d7W:function d7W(){},
d89:function d89(d){this.a=d},
d7V:function d7V(){},
d8a:function d8a(d,e){this.a=d
this.b=e},
d7U:function d7U(d,e){this.a=d
this.b=e},
d8b:function d8b(d,e){this.a=d
this.b=e},
d7T:function d7T(d,e){this.a=d
this.b=e},
d8c:function d8c(d){this.a=d},
d7S:function d7S(){},
d8d:function d8d(d,e){this.a=d
this.b=e},
d7R:function d7R(d,e){this.a=d
this.b=e},
d8e:function d8e(d){this.a=d},
d83:function d83(d,e){this.a=d
this.b=e},
d8f:function d8f(d){this.a=d},
d8g:function d8g(d){this.a=d},
d8i:function d8i(d){this.a=d},
d8j:function d8j(d){this.a=d},
d82:function d82(d,e){this.a=d
this.b=e},
d8k:function d8k(d,e){this.a=d
this.b=e},
aIz:function aIz(d){this.a=d},
bjt:function bjt(d){this.a=d},
bch:function bch(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alY:function alY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1T:function a1T(d,e){this.a=d
this.b=e},
alZ:function alZ(d,e,f,g,h,i){var _=this
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
bRu:function bRu(d){this.a=d},
bRo:function bRo(d){this.a=d},
bRn:function bRn(d,e){this.a=d
this.b=e},
bRx:function bRx(d){this.a=d},
bRp:function bRp(d){this.a=d},
bRq:function bRq(d){this.a=d},
bRt:function bRt(d){this.a=d},
bRs:function bRs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRv:function bRv(d,e){this.a=d
this.b=e},
bRw:function bRw(){},
bRr:function bRr(d){this.a=d},
bRl:function bRl(d,e){this.a=d
this.b=e},
bRm:function bRm(d){this.a=d},
bp3:function bp3(d,e){this.b=d
this.a=e},
aBz:function aBz(){},
iw(d,e){var w
$.Q()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bu
w.e=B.dQ
return w},
bDx(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bo(j.save())
j.translate(e.a,e.b)
d.pj(0,a0?-f:f,f)
w=A.bs(B.ik,8,36)
v=B.w.j(0.3)
u=$.Q()
t=A.K()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.X4
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eq6,new A.o(-4+v,-2),C.iw(q,5))
d.ah(D.enH,new A.o(4-v,-2),C.iw(q,5))}else{t=A.bs(B.Jx,14,40)
p=A.K()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.c6(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.c6(15,-40,11,t))
o.E(new A.bv())
t=A.K()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.ai,k,k,A.a([],u))
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
break}if(a1===D.b0M){n=-52+w*14
d.ah(new A.o(10,n-22),new A.o(10,n+44),C.iw(F.FO,3.4))
d.ah(D.eqo,new A.o(9,n),C.iw(q,4))
d.ah(D.eo5,new A.o(10,n),C.iw(q,4))}else if(a1===D.b0N){d.ah(D.epb,new A.o(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.em9,new A.o(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.epg,new A.o(-12-w,v),C.iw(q,4))
d.ah(D.aLx,new A.o(12+w,v),C.iw(q,4))}w=A.K()
w.r=q.gp(0)
d.ar(D.f7H,w)
m=new A.o(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a2(0,K.vn),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a2(0,D.em3)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a2(0,B.to),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cC(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a2(0,D.eqm),m.a2(0,D.ep9),C.iw(v,2.2))
d.ah(m.a2(0,D.eo4),m.a2(0,D.em0),C.iw(v,2.2))}if(w===4){w=m.a2(0,D.eqq)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a2(0,D.eo6)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a2(0,D.eoX)
v=A.K()
v.r=B.ib.gp(0)
d.N(w,0.9,v)
v=m.a2(0,D.eoL)
w=A.K()
w.r=B.ib.gp(0)
d.N(v,0.9,w)
if(i){l=m.a2(0,K.a8m)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lB.gp(0)
d.bZ(w,v)
v=A.bs(l.a2(0,K.aLu),5,12)
w=A.K()
w.r=D.bfV.gp(0)
d.bZ(v,w)
d.ah(l.a2(0,D.eqi),l.a2(0,K.aLR),C.iw(B.cO,1.4))
d.ah(D.aLx,new A.o(15,-88-r),C.iw(q,3.6))}j.restore()},
hzQ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bo(r.save())
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
d.lx(D.aRH,A.K())
C.i7p(d,g,h,i,j)
s=(k==null?D.a8s:k).a-w>=0?1:-1
w=A.K()
w.a=B.LN
w.sav(A.jz(new A.o(s*70,-60),new A.o(-s*70,-60),A.a([D.aia.j(0.5),D.aia.j(0.12),D.bnd.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aRH,w)
r.restore()
r.restore()},
i7p(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.bn(D.f7I,B.ts)
p=$.Q()
o=A.K()
o.r=u.gp(0)
a1.am(s,o)
o=A.bn(D.f7D,B.hP)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.am(o,n)
n=A.bn(D.f7R,B.hP)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.am(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f7K,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f6t,s)
s=a1.c
J.bo(s.save())
s.translate(a3.w,0)
J.bo(s.save())
a1.pj(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.ai,e,e,A.a([],n))
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
J.bo(s.save())
a1.mR(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dcI[j]
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bu
i.e=B.dQ
a1.ah(new A.o(-34+u,-64),new A.o(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.Q()
f=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f.r=i.gp(0)
a1.N(new A.o(g,h),3.6,f)
f=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f.r=u.gp(0)
a1.N(new A.o(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bu
i.e=B.dQ
a1.ah(new A.o(g,-64),new A.o(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bu
i.e=B.dQ
a1.ah(new A.o(-30,h),new A.o(30,h),i)}break
default:a1.ah(D.epM,D.emP,C.iw(a2.c.j(0.9),3))}a1.ah(D.eqj,D.epi,C.iw(B.w.j(0.18),1.6))
a1.ah(D.em8,K.aLz,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.Q()
i=A.K()
i.r=u.gp(0)
a1.ar(D.f6p,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.ar(D.f6D,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c6(0,-57,9,-66))
n.E(new A.c6(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cC(D.f6M,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8w
n=25*q
k=23*q
i=9*q
C.hw5(a1,new A.o(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Ea:o
C.hw5(a1,new A.o(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.enz,D.env,C.iw(D.aj9,4))
a1.ah(D.enx,D.ent,C.iw(D.Gb.j(0.7),1.4))
u=A.K()
u.r=B.cO.gp(0)
a1.N(D.enw,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bo(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i7m(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hw5(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.ik:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.o(o,w)
if(o*i<0)v=new A.o(-o,-w)
u=e.a2(0,q.aM(0,n)).a2(0,v.aM(0,m))
t=e.a2(0,q.aM(0,p))
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
w=t.a2(0,new A.o(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i7m(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vm,40,38)
$.Q()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.Q()
w=A.K()
w.r=c0.gp(0)
c2.N(D.eps,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.emp,9.5,w)}w=A.bs(D.eqG,10,6)
v=$.Q()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.eoU,10,6)
w=A.K()
w.r=c8.gp(0)
c2.bZ(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kT(13,-20,17,-9,16,2))
t.E(new A.kT(15,13,8,20,0,20))
t.E(new A.kT(-8,20,-15,13,-16,2))
t.E(new A.kT(-17,-9,-13,-20,0,-20))
t.E(new A.bv())
u=A.K()
u.sav(A.wf(D.eq8,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cC(D.f7T,3.455751918948773,2.5132741228718345,!1,s)
c2.cC(D.f6w,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.epp,D.epd,s)
c2.ah(D.eml,D.emc,s)
c2.cC(D.f6L,2.2,1.4,!1,s)
c2.cC(D.f6u,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=c0.gp(0)
c2.N(new A.o(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cC(D.f6Z,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c6(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c6(0,-12,-13,-6))
p.E(new A.bv())
o=A.K()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.epe,D.emd,C.iw(G.no,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.epv,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.emq,3,o)
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c6(-12,22,0,26))
o.E(new A.c6(12,22,13,6))
o.E(new A.c6(8,13,0,12))
o.E(new A.c6(-8,13,-13,6))
o.E(new A.bv())
p=A.K()
p.r=B.iG.gp(0)
c2.af(o,p)
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c6(0,6,7,8))
p.E(new A.c6(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
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
c2.cC(D.f75,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cC(D.f6T,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c6(27,-34,25,-19))
o.E(new A.c6(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.ai,b9,b9,A.a([],w))
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
c2.N(D.eme,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f72,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bu
o.e=B.dQ
c2.ah(new A.o(r*3.6,-19+Math.abs(r)*0.8),new A.o(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aCh[l]
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bu
o.e=B.dQ
c2.ah(new A.o(k,0),new A.o(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
c2.N(new A.o(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f71,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8m,K.a8l,C.iw(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f6x,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bs(D.eqs,5,8)
o=D.aft.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.ep5,5,8)
p=D.aft.j(i)
o=A.K()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fK[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bs(new A.o(a5,-3),a3,7)
a6=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bo(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.ai,b9,b9,a6)
a6.push(new A.jS(A.bs(new A.o(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Eb(a4.glV().a.snapshot())
d.clipPath(a3.a,$.nq(),!0)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=D.bjG.gp(0)
c2.N(new A.o(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.w.gp(0)
c2.N(new A.o(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.c.gp(0)
c2.N(new A.o(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Z6:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bu
a9.e=B.dQ
a3=p?0.8:0
c2.cC(A.bs(new A.o(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.eb
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bu
b2.e=B.dQ
c2.ah(new A.o(a5-a4,b0-a6+0.4),new A.o(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.btD
else{u=A.ar(c8,D.bnf,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c6(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c6(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bv())
v=A.K()
v.r=D.bmz.gp(0)
c2.af(b8,v)
J.bo(d.save())
c2.mR(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.o(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.btI.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iw(b4,1.1))}else{u=new A.aG(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.c6(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iw(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.c6(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.c6(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cC(D.f6K,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cC(D.f6z,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.eoN,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.eoJ,1.7,w)}},
icZ(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.Q(),f=new A.q1(new A.pD()),e=A.zy(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jz(B.H,new A.o(0,a0*0.46),D.d9t,D.d1_,B.x,h))
e.ar(new A.a1(0,0,0+d,0+a0),a2)
a2=e.c
J.bo(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e5()
w.d_(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.o(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bo(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.K()
a0=x.O
d.sav(A.wf(B.H,230,A.a([D.bir,B.L],a0),h,B.x,h,h,0))
e.bZ(D.f7f,d)
a2.restore()
d=A.K()
d.sav(A.wf(D.a8v,58,A.a([D.blC,B.L],a0),h,B.x,h,h,0))
e.N(D.a8v,58,d)
d=A.K()
d.r=D.bh8.gp(0)
e.N(D.a8v,24,d)
d=A.K()
d.r=D.Zw.gp(0)
e.N(D.en8,5,d)
d=A.K()
d.r=D.Zw.gp(0)
e.N(D.enc,3.4,d)
d=A.K()
d.r=D.Zw.gp(0)
e.N(D.enb,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.ai,h,h,u)
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
g=[D.bfI,D.bhI,D.bnz][s]
u=$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cvU[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.b=B.a9
u.c=2.4
u.r=D.ZP.gp(0)
u.d=B.bu
u.e=B.dQ
e.ah(new A.o(o,k),new A.o(g,d),u)
g=A.bs(new A.o(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.ZP.gp(0)
e.bZ(g,u)
d=A.bs(new A.o(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.ZP.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.bhb.j(0.8).gp(0)
e.N(new A.o(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jz(D.elI,D.elK,D.d2X,B.Dv,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e5()
j.d_(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bs(new A.o(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h8()?B.c:B.w
d=new A.ao(B.O,B.M,B.R,B.S,B.Q)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bo(a2.save())
a2.translate(225,590)
e.pj(0,1,0.34)
g=A.K()
g.sav(A.wf(B.H,250,A.a([D.bov,D.bi2,D.bqp],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.H,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ahS,D.bgG,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bu
a0.e=B.dQ
e.ah(new A.o(o+i*2,k),new A.o(o+i*5,g+Math.abs(i)*3),a0)}}C.i5u(e)
for(l=0;l<3;++l)C.i8X(e,D.aA5[l])
C.i8M(e,D.en2)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a0.b=B.a9
a0.c=2.4
a0.r=D.ZK.gp(0)
a0.d=B.bu
a0.e=B.dQ
e.ah(new A.o(o,452+g),new A.o(o+1,436+d),a0)}e.ah(D.ema,D.emu,C.iw(D.bhp,1.6))
a2.restore()
return f.o1()},
i5u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kT(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kT(416,382,432,422,428,462))
f.E(new A.bv())
w=A.K()
w.sav(A.jz(new A.o(354,0),new A.o(430,0),D.dx3,B.nK,B.x,i))
d.af(f,w)
v=new A.e5()
v.d_(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bu
p.e=B.dQ
d.ah(new A.o(t,s),new A.o(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.de4[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aG(h,B.ai,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.c6(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=8
r.r=D.agb.gp(0)
r.d=B.bu
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=A.ar(D.bhh,D.bny,v.ai()).j(0.92).gp(0)
d.N(new A.o(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.b=B.a9
r.c=1.2
r.r=D.ZK.gp(0)
r.d=B.bu
r.e=B.dQ
d.ah(new A.o(w,q+8),new A.o(w,q+22),r)
q=A.bs(new A.o(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.S,B.Q)
w.r=D.boO.gp(0)
d.bZ(q,w)}},
i8X(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.o(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.Q(),b3=A.K()
b3.r=b1.gp(0)
b4.bZ(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.c6(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bv())
u=A.K()
u.sav(A.jz(new A.o(b0,0),new A.o(v,0),D.dea,B.nK,B.x,a4))
b4.af(w,u)
t=new A.e5()
t.d_(B.o.V(a5*7))
v=b4.c
J.bo(v.save())
b4.mR(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bu
n.e=B.dQ
b4.ah(new A.o(r,q),new A.o(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahN.j(0.75)
n=A.K()
n.r=o.gp(0)
b4.ar(new A.a1(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.ai,a4,a4,j)
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
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=D.lB.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.ai,a4,a4,u)
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
b2=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
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
m.r=D.ai_.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.ai_.gp(0)
b4.N(new A.o(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.c6(a5-a9,n,a5,u))
e.E(new A.c6(a5+a9,n,p,j))
e.E(new A.c6(a5,b1+a7*0.34,o,j))
e.E(new A.bv())
b1=A.K()
n=a7*1.4
b1.sav(A.jz(new A.o(a5-n,0),new A.o(a5+n,0),D.dhF,B.nK,B.x,a4))
b4.af(e,b1)
J.bo(v.save())
b4.mR(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h8()?B.w:D.bgP).j(0.16)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=0.9
i.r=n.gp(0)
i.d=B.bu
i.e=B.dQ
b4.ah(new A.o(a5+(p-0.5)*3,u),new A.o(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.c6(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1.2
n.r=b1.gp(0)
n.d=B.bu
n.e=B.dQ
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
v.b=B.a9
v.c=1.1
v.r=D.bnZ.gp(0)
v.d=B.bu
v.e=B.dQ
b4.ah(new A.o(a2,a3),new A.o(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bv())
b0=A.K()
b0.r=D.bkb.gp(0)
b4.af(a9,b0)},
i8M(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aCe[s]
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.b=B.a9
q.c=3
q.r=D.ZK.gp(0)
q.d=B.bu
q.e=B.dQ
d.ah(new A.o(r,u),new A.o(r,t),q)}u=A.bs(e.a2(0,K.aLt),24,36)
t=$.Q()
r=A.K()
r.r=D.bsS.gp(0)
d.bZ(u,r)
t=new A.aG(t.r,B.ai,null,null,A.a([],x.v))
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
i83(d){switch(B.o.F(d,8)){case 0:return D.b0k
case 1:return D.b0i
case 2:return D.b0h
case 3:return D.b0g
case 4:return D.b0j
case 5:return D.b0l
case 6:return D.hx0
default:return D.hx_}},
SF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bp4()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8w:j
w.as=k==null?D.Ea:k
C.hzQ(d,e,p,C.i83(m),w,s,m,l)},
hBk(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bT8:function bT8(){var _=this
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
tg:function tg(d,e,f,g,h,i,j,k,l,m){var _=this
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
bp4:function bp4(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amg:function amg(){this.b=this.a=null},
aWx:function aWx(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
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
bT4:function bT4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT5:function bT5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT6:function bT6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT7:function bT7(){},
bT_:function bT_(d){this.a=d},
ag2:function ag2(d,e){this.a=d
this.b=e},
ae0:function ae0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N5(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRK(s)
s.bBE(d)
return s},
H5(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d2(new A.Y(g,new C.fup(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.ls(e,v,B.d.co(v,f),h,i,"tree",j)},
iuc(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h4u(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jA(c4,c0)
t=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
r=A.C(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
q=A.C(c4,A.a4(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.J)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wu)g="father"
else g=h===D.ot?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h4w(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H5(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h4x(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.ls("True or false: "+h+" is the "+g+" of "+l+".",D.aB6,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ls("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aB6,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G9(m)
h=a0.length
if(h!==0){a1=a0[c6.az(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h4y(l,a0,c5),v),s)
e=a1.c
if(e===D.wu)e="son"
else e=e===D.ot?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H5(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ez([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mA(a5,a5.r,f.k("mA<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H5(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iu<1>"),a3=new A.iu(a0,1,b3,a2),a3.n6(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gI(0),a2.k("bQ<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H5(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arp(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h4z(l),v),s)
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
j=A.C(new A.Y(t,new C.h4A(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wu
if(e)a2=b7
else a2=f===D.ot?b8:b9
if(e)f=b7
else f=f===D.ot?b8:b9
c2.$2("grand",C.H5(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN4(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.az(k)].b)
j=A.C(new A.Y(t,new C.h4B(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H5(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cOB)
h=l+" was born in "+k
c2.$2("place",C.H5(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d4_)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H5(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H5(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iX(b1,b3,b3)
c2.$2("year",C.H5(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bE8(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N5(d),l=new A.e5()
l.d_(f)
w=C.iuc(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hjD(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fHR(n,w))))break
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
if(v<e){v=A.C(D.az7,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hzX(o,l))}}else if(!g&&v>3){o=C.hzX(D.az7[l.az(14)],l)
t[t.length-1-l.az(3)]=o}return t},
hzX(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.ls(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hEW(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N5(a2),a1=new A.e5()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.G9(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.G9(n)
l=A.U(m)
k=new A.iu(m,0,5,l.k("iu<1>"))
k.n6(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fW7(),A.U(j).k("N<1,H>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aSj(a0,j[i]))
w.push(new C.aue("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c7(e.c3(0,a0.amy(q),new C.fW8()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fi(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gI(0),t.k("bQ<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.J)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aSj(a0,v[r]))
w.push(new C.aue("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQP(d){return B.d.ao0(D.aBB,new C.fDK(d))},
ijG(d){return A.nB(new A.Y(D.aBB,new C.fKF(d),x.av))},
bSy(d){return C.hOB(d)},
hOB(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bSy)
case 7:r=f
q=B.a.i(d)
q=A.el(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bSy,v)},
BV(d,e){return C.hOy(d,e)},
hOy(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BV)
case 7:r=g
p=B.a.i(d)
o=A.el(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BV)
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
return A.i($async$BV,v)},
bSx(d,e,f){return C.hOz(d,e,f)},
hOz(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSx=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bSx)
case 7:r=h
q=B.a.i(d)
q=A.el(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bSx,v)},
BW(d,e,f,g){return C.hOA(d,e,f,g)},
hOA(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BW=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$BW)
case 7:r=i
p=B.a.i(d)
o=A.el(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BW)
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
return A.i($async$BW,v)},
bGo(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h6x(d,e,f,g){return new C.akS(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hMF(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cq)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dn(0)
B.d.v(w,A.c_(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.h6x(w,v,B.o.D(u==null?20:u,5,60),t)},
hkM(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cq)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hMF(A.a2(r,t,s)))}return new C.MP(p,w,v)},
heZ(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hkM(w.gR(w)))
return v},
aSj(d,e){var w=e.c===D.ot
if(d.amy(e)===0&&d.G9(e).length!==0)return w?0:1
if(d.G9(e).length!==0||d.arp(e)!=null)return w?2:3
return w?4:5},
hG1(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N5(a4),a3=new A.e5()
a3.d_(a5)
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
j=i.h(0,k)}h=a2.G9(m)
g=a2.arp(m)
f=a2.aN4(m)
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
if(k===D.wu)k="father"
else k=k===D.ot?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wu)k="father"
else k=k===D.ot?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h4U())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h4V(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n6(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aSj(a2,m)
i=new A.iu(l,0,4,p)
i.n6(l,0,4,r)
w.push(new C.baw(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hxy(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a_(d,"My ")?1:0},
hF7(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N5(a4),a3=new A.e5()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.G9(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.G9(l)
j=A.U(k)
i=new A.iu(k,0,4,j.k("iu<1>"))
i.n6(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fWD(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n6(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSj(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aSj(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aSj(a2,f[g]))
w.push(new C.aa5(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ls:function ls(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRK:function bRK(d){this.b=d
this.c=$},
bRL:function bRL(){},
bRM:function bRM(d){this.a=d},
fup:function fup(d){this.a=d},
h4u:function h4u(d){this.a=d},
h4v:function h4v(){},
h4w:function h4w(d){this.a=d},
h4x:function h4x(d,e){this.a=d
this.b=e},
h4y:function h4y(d,e,f){this.a=d
this.b=e
this.c=f},
h4t:function h4t(d,e){this.a=d
this.b=e},
h4z:function h4z(d){this.a=d},
h4A:function h4A(d){this.a=d},
h4B:function h4B(d,e,f){this.a=d
this.b=e
this.c=f},
h4s:function h4s(d,e){this.a=d
this.b=e},
fHR:function fHR(d,e){this.a=d
this.b=e},
aue:function aue(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fW7:function fW7(){},
fW8:function fW8(){},
zH:function zH(d,e,f){this.a=d
this.b=e
this.c=f},
fDK:function fDK(d){this.a=d},
fKF:function fKF(d){this.a=d},
akS:function akS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMy:function bMy(){},
MP:function MP(d,e,f){this.a=d
this.b=e
this.c=f},
baw:function baw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h4U:function h4U(){},
h4V:function h4V(d){this.a=d},
aa5:function aa5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWD:function fWD(d){this.a=d},
bhM:function bhM(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ag0:function ag0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
aka:function aka(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akb:function akb(d,e,f,g,h){var _=this
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
bKI:function bKI(d){this.a=d},
bKD:function bKD(){},
bKJ:function bKJ(){},
bKB:function bKB(){},
bKC:function bKC(){},
bKH:function bKH(d){this.a=d},
bKE:function bKE(d,e){this.a=d
this.b=e},
bKG:function bKG(d,e){this.a=d
this.b=e},
bKF:function bKF(d,e){this.a=d
this.b=e},
bKA:function bKA(d){this.a=d},
bcX:function bcX(d,e){this.b=d
this.a=e},
QM:function QM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBx:function aBx(d,e,f){this.b=d
this.c=e
this.a=f},
aA1:function aA1(d,e,f){this.a=d
this.b=e
this.c=f},
auQ:function auQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auR:function auR(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cQ$=e
_.b7$=f
_.c=_.a=null},
cq9:function cq9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqa:function cqa(d){this.a=d},
cq8:function cq8(d){this.a=d},
cqb:function cqb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqc:function cqc(){},
cqd:function cqd(d,e){this.a=d
this.b=e},
cqe:function cqe(){},
cqf:function cqf(d){this.a=d},
cq5:function cq5(d){this.a=d},
cq6:function cq6(d,e){this.a=d
this.b=e},
cq7:function cq7(d,e,f){this.a=d
this.b=e
this.c=f},
cq0:function cq0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cq2:function cq2(d,e){this.a=d
this.b=e},
cq3:function cq3(d,e){this.a=d
this.b=e},
cq1:function cq1(d,e){this.a=d
this.b=e},
cq_:function cq_(){},
cq4:function cq4(){},
bcq:function bcq(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQa:function cQa(){},
ayN:function ayN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayO:function ayO(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cF7:function cF7(d){this.a=d},
cF6:function cF6(d){this.a=d},
cFf:function cFf(d,e){this.a=d
this.b=e},
cFg:function cFg(d,e){this.a=d
this.b=e},
cFh:function cFh(d){this.a=d},
cFe:function cFe(d){this.a=d},
cFi:function cFi(d){this.a=d},
cFj:function cFj(d,e){this.a=d
this.b=e},
cFk:function cFk(){},
cFl:function cFl(d){this.a=d},
cF9:function cF9(d){this.a=d},
cFa:function cFa(d,e){this.a=d
this.b=e},
cF8:function cF8(d,e){this.a=d
this.b=e},
cFb:function cFb(){},
cFc:function cFc(){},
cFd:function cFd(d,e){this.a=d
this.b=e},
azN:function azN(){},
aGZ:function aGZ(){},
hcJ(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brq((w-450*u)/2,(v-900*u)/2,u)},
afP:function afP(){},
f6Z:function f6Z(d){this.a=d},
aKM:function aKM(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fh7:function fh7(d){this.a=d},
am6:function am6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am7:function am7(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q8$=f
_.LX$=g
_.an4$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSw:function bSw(d){this.a=d},
bSv:function bSv(){},
bSt:function bSt(d){this.a=d},
bSr:function bSr(){},
bSs:function bSs(d){this.a=d},
bSo:function bSo(d,e){this.a=d
this.b=e},
bSp:function bSp(){},
bSq:function bSq(d){this.a=d},
bSu:function bSu(d,e){this.a=d
this.b=e},
bSn:function bSn(d){this.a=d},
bt6:function bt6(d,e){this.b=d
this.a=e},
f7_:function f7_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f70:function f70(d,e,f){this.a=d
this.b=e
this.c=f},
f71:function f71(d,e,f){this.a=d
this.b=e
this.c=f},
f72:function f72(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f73:function f73(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f74:function f74(){},
am4:function am4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am5:function am5(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q8$=f
_.LX$=g
_.an4$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bS9:function bS9(){},
bSk:function bSk(d,e){this.a=d
this.b=e},
bSl:function bSl(d){this.a=d},
bSm:function bSm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSg:function bSg(){},
bSf:function bSf(d,e){this.a=d
this.b=e},
bSh:function bSh(d,e){this.a=d
this.b=e},
bSi:function bSi(){},
bSj:function bSj(d){this.a=d},
bSb:function bSb(d){this.a=d},
bSc:function bSc(d){this.a=d},
bSd:function bSd(d){this.a=d},
bSa:function bSa(d,e){this.a=d
this.b=e},
bSe:function bSe(d){this.a=d},
bjB:function bjB(d,e){this.b=d
this.a=e},
drv:function drv(){},
a2b:function a2b(d,e){this.a=d
this.b=e},
am0:function am0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am1:function am1(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q8$=e
_.LX$=f
_.an4$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bRW:function bRW(d){this.a=d},
bRV:function bRV(){},
bRU:function bRU(){},
bRO:function bRO(){},
bRP:function bRP(){},
bRT:function bRT(d,e,f){this.a=d
this.b=e
this.c=f},
bRS:function bRS(d){this.a=d},
bRQ:function bRQ(d,e){this.a=d
this.b=e},
bRR:function bRR(d){this.a=d},
bj1:function bj1(d,e){this.b=d
this.a=e},
aBA:function aBA(){},
bgz:function bgz(){},
aBC:function aBC(){},
bgA:function bgA(){},
aBD:function aBD(){},
bgB:function bgB(){},
ux(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j8,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.n(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.az(u,A.q(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.n),u,u,u,u,B.Og,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hlz(d,e,f,g,h,i,j){return new C.am2(i,h,d,j,e,f,g,null)},
a6C:function a6C(d,e){this.c=d
this.a=e},
bj8:function bj8(d){this.a=d},
tH:function tH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRN:function bRN(d){this.a=d},
Ix:function Ix(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wp:function Wp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blV:function blV(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1E:function e1E(d){this.a=d},
e1F:function e1F(d,e){this.a=d
this.b=e},
e1B:function e1B(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1A:function e1A(d){this.a=d},
e1y:function e1y(d){this.a=d},
e1z:function e1z(d){this.a=d},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1G:function e1G(d){this.a=d},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e){this.a=d
this.b=e},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1O:function e1O(d,e){this.a=d
this.b=e},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1R:function e1R(d,e,f){this.a=d
this.b=e
this.c=f},
e1S:function e1S(d,e){this.a=d
this.b=e},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1K:function e1K(d){this.a=d},
e1L:function e1L(d){this.a=d},
a04:function a04(d,e){this.a=d
this.b=e},
am2:function am2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
am3:function am3(d){var _=this
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
bS7:function bS7(d){this.a=d},
bS8:function bS8(d){this.a=d},
bS6:function bS6(d){this.a=d},
bRY:function bRY(d){this.a=d},
bRZ:function bRZ(d){this.a=d},
bRX:function bRX(d){this.a=d},
bS3:function bS3(d,e,f){this.a=d
this.b=e
this.c=f},
bS4:function bS4(d){this.a=d},
bS0:function bS0(d,e){this.a=d
this.b=e},
bS1:function bS1(d,e,f){this.a=d
this.b=e
this.c=f},
bS5:function bS5(){},
bS2:function bS2(d,e){this.a=d
this.b=e},
bS_:function bS_(d){this.a=d},
U5:function U5(d,e){this.c=d
this.a=e},
am_:function am_(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bRy:function bRy(d){this.a=d},
bRz:function bRz(d){this.a=d},
bRJ:function bRJ(){},
bRI:function bRI(d,e,f){this.a=d
this.b=e
this.c=f},
bRD:function bRD(d,e){this.a=d
this.b=e},
bRC:function bRC(d,e){this.a=d
this.b=e},
bRE:function bRE(d){this.a=d},
bRF:function bRF(d,e){this.a=d
this.b=e},
bRG:function bRG(d,e){this.a=d
this.b=e},
bRB:function bRB(d,e){this.a=d
this.b=e},
bRH:function bRH(d,e,f){this.a=d
this.b=e
this.c=f},
bRA:function bRA(d,e){this.a=d
this.b=e},
ii6(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiZ(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fHj(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.z_)m.push(l===D.wu?"male":"female")
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fHh(u,f),p),new C.fHi(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aO(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aO(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ii7(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiZ(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fHo(v,e)
q=new C.fHm(v)
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
d=A.d2(new A.b7(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("ci.E"))
B.d.fi(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eF(l,new C.fHn(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aO(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i2Q(d,e,f,g){var w,v,u=C.ii8(d,e)
if(u<=0||f.length<=u)return new A.aft(!1,D.Dx,f)
if(g.q(0,e.a))return new A.aft(!1,D.Dx,f)
w=A.U(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dn(0)
return new A.aft(!0,A.cW(f,u,null,w).dn(0),v)},
i2R(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiZ(d3),d2=d1.length
if(d2===0)return D.hu5
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dh_(t))}s=new C.dhg(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dh8(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dh7(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c7(l.c3(0,k,new C.dh0()),o)}h=new C.dh6(s)
g=new C.dh5(l,r)
p=v.$ti.k("b7<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b7(v,p),new C.dh1(h),o),o.k("M.E"))
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
a9=new C.dhe(new C.dha(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gam3(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ez([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.al(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nB(J.dI(i==null?B.a_:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dgZ(a2,new C.dhf(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.J)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dq(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
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
b4.n(0,b8,new C.GF(o,new A.o(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KZ(c5.a,new A.o(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dh2(c6,b4))
for(d2=new A.cb(a4,a4.$ti.k("cb<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gR(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.o(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eF(j,new C.dh3(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dh4())
c6.push(new C.aKH(new A.o(c9,b4.h(0,c8).b.b+112),B.H,!1,o))}return new C.bgF(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hAF(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
huN(d,e,f,g,h,i,j,k,l,m,n){return new C.a0h(k,f,j,e,l,n,m,d,g,h,i,null)},
aDA(d,e,f,g,h,i,j){return new C.bkr(i,d,e,f,j,h,g,null)},
ar4:function ar4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF7:function aF7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e3i:function e3i(d){this.a=d},
e3h:function e3h(d){this.a=d},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3l:function e3l(d,e){this.a=d
this.b=e},
e3m:function e3m(d){this.a=d},
e3g:function e3g(d,e){this.a=d
this.b=e},
e3j:function e3j(d){this.a=d},
e3o:function e3o(d){this.a=d},
e3n:function e3n(d,e){this.a=d
this.b=e},
aqZ:function aqZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF4:function aF4(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e2J:function e2J(d){this.a=d},
e2H:function e2H(d){this.a=d},
e2I:function e2I(d){this.a=d},
e2K:function e2K(d,e){this.a=d
this.b=e},
e2E:function e2E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e25:function e25(d){this.a=d},
e26:function e26(d,e){this.a=d
this.b=e},
e2n:function e2n(d){this.a=d},
e2l:function e2l(d){this.a=d},
e2m:function e2m(d,e){this.a=d
this.b=e},
e2o:function e2o(d){this.a=d},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2k:function e2k(d){this.a=d},
e2j:function e2j(d){this.a=d},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2A:function e2A(){},
e2B:function e2B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2z:function e2z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2t:function e2t(d){this.a=d},
e2u:function e2u(d,e,f){this.a=d
this.b=e
this.c=f},
e2s:function e2s(d,e){this.a=d
this.b=e},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2r:function e2r(){},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2x:function e2x(d){this.a=d},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e){this.a=d
this.b=e},
e2M:function e2M(d,e,f){this.a=d
this.b=e
this.c=f},
e2G:function e2G(d,e,f){this.a=d
this.b=e
this.c=f},
e2F:function e2F(d){this.a=d},
e1W:function e1W(d){this.a=d},
e1X:function e1X(d){this.a=d},
e1Y:function e1Y(){},
e1Z:function e1Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e22:function e22(d,e){this.a=d
this.b=e},
e21:function e21(d,e){this.a=d
this.b=e},
e20:function e20(d){this.a=d},
e23:function e23(d,e){this.a=d
this.b=e},
e2_:function e2_(d){this.a=d},
e2L:function e2L(d){this.a=d},
e2f:function e2f(){},
e2g:function e2g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2e:function e2e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2a:function e2a(d,e,f){this.a=d
this.b=e
this.c=f},
e29:function e29(d,e,f){this.a=d
this.b=e
this.c=f},
e27:function e27(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e2c:function e2c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e28:function e28(d,e){this.a=d
this.b=e},
e2d:function e2d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2T:function e2T(){},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2V:function e2V(d){this.a=d},
e2W:function e2W(d,e){this.a=d
this.b=e},
e2P:function e2P(d){this.a=d},
e2N:function e2N(d,e){this.a=d
this.b=e},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2R:function e2R(d,e){this.a=d
this.b=e},
e2S:function e2S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2X:function e2X(d){this.a=d},
e2O:function e2O(d){this.a=d},
e24:function e24(d){this.a=d},
bgD:function bgD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgX:function dgX(d){this.a=d},
dgW:function dgW(d,e){this.a=d
this.b=e},
dgY:function dgY(d){this.a=d},
dgV:function dgV(d,e){this.a=d
this.b=e},
fHj:function fHj(d,e){this.a=d
this.b=e},
fHk:function fHk(d){this.a=d},
fHl:function fHl(){},
fHh:function fHh(d,e){this.a=d
this.b=e},
fHi:function fHi(){},
fHo:function fHo(d,e){this.a=d
this.b=e},
fHp:function fHp(d){this.a=d},
fHq:function fHq(){},
fHm:function fHm(d){this.a=d},
fHn:function fHn(d,e){this.a=d
this.b=e},
KZ:function KZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GF:function GF(d,e){this.a=d
this.b=e},
bgF:function bgF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dh_:function dh_(d){this.a=d},
dhg:function dhg(d){this.a=d},
dh8:function dh8(d){this.a=d},
dh9:function dh9(){},
dh7:function dh7(d){this.a=d},
dh0:function dh0(){},
dh6:function dh6(d){this.a=d},
dh5:function dh5(d,e){this.a=d
this.b=e},
dh1:function dh1(d){this.a=d},
dha:function dha(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhb:function dhb(d){this.a=d},
dhc:function dhc(d){this.a=d},
dhd:function dhd(){},
dhe:function dhe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhf:function dhf(){},
dgZ:function dgZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
dh2:function dh2(d,e){this.a=d
this.b=e},
dh3:function dh3(d){this.a=d},
dh4:function dh4(){},
aKH:function aKH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgG:function bgG(d,e){this.b=d
this.a=e},
dhh:function dhh(){},
dhi:function dhi(d){this.a=d},
dhj:function dhj(d){this.a=d},
dhk:function dhk(){},
bks:function bks(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfI:function bfI(d,e){this.b=d
this.a=e},
bys:function bys(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fmI:function fmI(d){this.a=d},
bnN:function bnN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eXL:function eXL(d){this.a=d},
eXK:function eXK(d,e){this.a=d
this.b=e},
a0h:function a0h(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDy:function aDy(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxd:function dxd(d,e){this.a=d
this.b=e},
dxc:function dxc(d){this.a=d},
dxa:function dxa(d){this.a=d},
dxb:function dxb(d){this.a=d},
dxm:function dxm(d){this.a=d},
dxn:function dxn(d){this.a=d},
dxl:function dxl(d,e){this.a=d
this.b=e},
dxo:function dxo(){},
dxr:function dxr(d){this.a=d},
dxk:function dxk(d,e){this.a=d
this.b=e},
dxq:function dxq(){},
dxs:function dxs(d){this.a=d},
dxj:function dxj(d,e){this.a=d
this.b=e},
dxt:function dxt(d){this.a=d},
dxi:function dxi(d){this.a=d},
dxu:function dxu(d){this.a=d},
dxh:function dxh(d){this.a=d},
dxv:function dxv(d){this.a=d},
dxg:function dxg(d){this.a=d},
dxw:function dxw(d){this.a=d},
dxf:function dxf(d){this.a=d},
dxx:function dxx(d){this.a=d},
dxe:function dxe(d,e){this.a=d
this.b=e},
dxp:function dxp(d){this.a=d},
aem:function aem(d,e,f,g){var _=this
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
ael:function ael(d,e,f,g,h,i,j){var _=this
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
dxy:function dxy(d){this.a=d},
dxz:function dxz(d,e){this.a=d
this.b=e},
aDz:function aDz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJJ:function aJJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aen:function aen(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxI:function dxI(d){this.a=d},
GB:function GB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hpD(d){var w=d.U,v=x.N
return w.jq(w,new C.ceT(),v,v)},
hVd(d){var w=d.bF
if(w>=0)return w
return 5},
hpF(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hpD(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hpE(d,e){var w=C.hpF(d,e)
if(w!=null&&w.ca(new A.V(Date.now(),0,!1)))return!0
return!1},
hVe(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hpD(d),w,w)
u=C.hpF(d,e)
t=u!=null&&u.ca(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dw(30,0,0,0,0,0).a).aa().ag())
d.U=v},
b1b(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b1b=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lz(t,B.Jr),$async$b1b)
case 3:if(l){u=!0
w=1
break}u=A.le(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jr,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1b,v)},
ceT:function ceT(){},
hVb(){var w,v=$.ot(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
Jt(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Jt)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Jt)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"codes")
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
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jt,v)},
a8i(d){return C.hVc(d)},
hVc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8i=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8i)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.I(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cM,null),$async$a8i)
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
return A.i($async$a8i,v)},
ceS(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ceS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jt(),$async$ceS)
case 3:t=m.i1(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a7(q)
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
return A.i($async$ceS,v)},
On(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$On=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ceS(d),$async$On)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jt(),$async$On)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8i(s),$async$On)
case 9:case 8:u=t
w=1
break
case 5:n=C.hVb()
w=10
return A.b(C.Jt(),$async$On)
case 10:s=f
J.aK(s,n,A.I(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8i(s),$async$On)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$On,v)},
b1a(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b1a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jt(),$async$b1a)
case 3:t=f
for(s=J.dn(t),r=s.gdO(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8i(t),$async$b1a)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b1a,v)},
a8j(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8j=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ar3(d,e),$async$a8j)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.On(d),$async$a8j)
case 7:w=4
break
case 5:w=8
return A.b(C.b1a(d),$async$a8j)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8j,v)},
aqY(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqY=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ar3(f,e),$async$aqY)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$aqY)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jt(),$async$aqY)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a7(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqY,v)},
b19(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b19=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b19)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jt(),$async$b19)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a7(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b19,v)},
hVf(){var w,v=$.ot(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
ar0(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ar0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$ar0)
case 3:if(!g){u=null
w=1
break}t=C.hVf()
w=4
return A.b(A.Wq(),$async$ar0)
case 4:s=g
r=B.dT.aN(B.Y.aw(d.f2(),null))
r=B.cP.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.I(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8k(s),$async$ar0)
case 5:p=e?999:2
u=new A.a1r("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar0,v)},
ar_(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ar_=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wq(),$async$ar_)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b19(J.k(l==null?"":l),j),$async$ar_)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cI(0,B.cI.aN(t))
s=C.hpG(r)}catch(f){q=A.ab(f)
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
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8k(p),$async$ar_)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar_,v)},
hpG(d){var w,v,u,t,s=null
try{w=B.Y.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hVh(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h8G(d){var w=0,v=A.j(x.m),u,t,s
var $async$h8G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ar_(t[1])
w=1
break}u=null
w=1
break}u=C.hpG(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8G,v)},
hVh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cF(u,new C.ceV(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.ceW(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i1(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cF(n,new C.ceX(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.ceY(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ar1(h,w,s,r,q)},
ar3(d,e){var w=0,v=A.j(x.y),u,t
var $async$ar3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oe(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Br(d),$async$ar3)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar3,v)},
cf3(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cf3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Br(d),$async$cf3)
case 3:t=s.b8(f,new C.cf4(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cf5())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cf3,v)},
Wr(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wr=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ar3(e,d),$async$Wr)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.On(e),$async$Wr)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Br(e),$async$Wr)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cf1(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dM(r,new C.cf2(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LK(e,o),$async$Wr)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.ar1(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wr,v)},
b1e(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1e=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wr(d,e,f,g),$async$b1e)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hk(A.KV(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1e,v)},
b1d(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1d=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wr(d,e,f,g),$async$b1d)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ar0(r,f),$async$b1d)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHJ(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1d,v)},
Ws(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ws=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h8G(a0),$async$Ws)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqY(g.a,d,e,f,s,r),$async$Ws)
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
return A.b(C.bDP(e,j),$async$Ws)
case 12:case 11:w=13
return A.b(C.aiJ(e,j,s),$async$Ws)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.BC(e,i,h),$async$Ws)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brw(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ws,v)},
ar1:function ar1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cf_:function cf_(){},
cf0:function cf0(){},
ceZ:function ceZ(){},
ceV:function ceV(){},
ceW:function ceW(){},
ceX:function ceX(){},
ceY:function ceY(){},
cf4:function cf4(){},
cf5:function cf5(){},
cf1:function cf1(d){this.a=d},
cf2:function cf2(d){this.a=d},
hhB(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hy(d,new C.ar2(w,e,g,i,f,h,null),!0,null,x.H)},
dgU(d,e,f,g,h,i,j,k){return new C.bgC(i,e,k,j,g,f,h,d,null)},
ar2:function ar2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF6:function aF6(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e35:function e35(d){this.a=d},
e36:function e36(d,e,f){this.a=d
this.b=e
this.c=f},
e3a:function e3a(d,e){this.a=d
this.b=e},
e3b:function e3b(d){this.a=d},
e32:function e32(d){this.a=d},
e33:function e33(d,e){this.a=d
this.b=e},
e34:function e34(d,e){this.a=d
this.b=e},
e39:function e39(d){this.a=d},
e38:function e38(d,e){this.a=d
this.b=e},
e37:function e37(){},
e3d:function e3d(d){this.a=d},
e3e:function e3e(d,e){this.a=d
this.b=e},
e3c:function e3c(d,e){this.a=d
this.b=e},
dhl:function dhl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgE:function bgE(d,e,f){this.d=d
this.e=e
this.a=f},
adC:function adC(d,e,f){this.c=d
this.d=e
this.a=f},
bgC:function bgC(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgH:function bgH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0B:function a0B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aF5:function aF5(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d){this.a=d},
e3_:function e3_(d){this.a=d},
e30:function e30(d){this.a=d},
e31:function e31(d){this.a=d},
a0C:function a0C(d){this.a=d},
blW:function blW(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3f:function e3f(d,e){this.a=d
this.b=e},
b_J(d,e){return new C.b_I(d,e,null)},
b_I:function b_I(d,e,f){this.c=d
this.d=e
this.a=f},
ikD(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
isK(d){return A.bT(B.L,null,new C.fY9(new C.uj(A.S(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hrC(d,e){return new C.au2(e,d,null)},
aSc(d,e,f,g,h,i,j){var w=C.ikD(i)
if(w!=null)return A.by(e,new A.a5(j,f,new C.a7o(w,!0,null),null),B.aq)
return N.aRz(e,B.c_,f,g,h,i,j)},
lW:function lW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7o:function a7o(d,e,f){this.c=d
this.d=e
this.a=f},
blA:function blA(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dPk:function dPk(d){this.a=d},
dPl:function dPl(){},
dPm:function dPm(d,e){this.a=d
this.b=e},
blz:function blz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fY9:function fY9(d){this.a=d},
fY8:function fY8(d,e){this.a=d
this.b=e},
fY7:function fY7(d,e){this.a=d
this.b=e},
fY6:function fY6(d,e){this.a=d
this.b=e},
au2:function au2(d,e,f){this.c=d
this.d=e
this.a=f},
cor:function cor(d,e){this.a=d
this.b=e},
aN8:function aN8(){},
isv(d){var w=null
return A.cg(w,w,!0,w,new C.fXx(),d,w,!0,!0,x.e2)},
itJ(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h4b(h,g,f,e),d,w,!0,!0,x.N)},
isx(d,e){var w=null
return A.cg(w,w,!0,w,new C.fXB(e),d,w,!0,!0,x.dY)},
isw(d){var w=null
return A.cg(w,w,!0,w,new C.fXA(),d,w,!0,!0,x.c5)},
aV8:function aV8(d,e){this.a=d
this.b=e},
aV7:function aV7(d){this.a=d},
aTa:function aTa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXx:function fXx(){},
h4b:function h4b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXB:function fXB(d){this.a=d},
fXA:function fXA(){},
a_f:function a_f(d,e){this.c=d
this.a=e},
aAi:function aAi(){var _=this
_.d=$
_.c=_.a=_.e=null},
d8w:function d8w(d){this.a=d},
d8x:function d8x(d){this.a=d},
d8v:function d8v(d,e){this.a=d
this.b=e},
d8y:function d8y(d){this.a=d},
d8z:function d8z(d){this.a=d},
a_e:function a_e(d){this.a=d},
aAh:function aAh(){this.d=$
this.c=this.a=null},
d8s:function d8s(d){this.a=d},
d8t:function d8t(d){this.a=d},
d8u:function d8u(d){this.a=d},
ZM:function ZM(d){this.a=d},
az0:function az0(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cGO:function cGO(){},
cGU:function cGU(d){this.a=d},
cGV:function cGV(d){this.a=d},
cGW:function cGW(d){this.a=d},
cGT:function cGT(){},
cGX:function cGX(d){this.a=d},
cGY:function cGY(d){this.a=d},
cGS:function cGS(){},
cGZ:function cGZ(d,e){this.a=d
this.b=e},
cGR:function cGR(d,e){this.a=d
this.b=e},
cGP:function cGP(d,e){this.a=d
this.b=e},
cH_:function cH_(d){this.a=d},
cGQ:function cGQ(){},
cH0:function cH0(d){this.a=d},
a2n:function a2n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byk:function byk(){this.d=$
this.c=this.a=null},
fmd:function fmd(d,e){this.a=d
this.b=e},
fme:function fme(d){this.a=d},
fmf:function fmf(d,e){this.a=d
this.b=e},
acF:function acF(d,e){this.a=d
this.b=e},
Gp:function Gp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byi:function byi(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fmb:function fmb(d,e){this.a=d
this.b=e},
ayU:function ayU(d,e){this.c=d
this.a=e},
byj:function byj(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fmc:function fmc(d){this.a=d},
byh:function byh(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPg:function aPg(){},
aPh:function aPh(){},
bFN(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bh(u),s=B.o.D(B.i.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p8(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fVV(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.n(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.n(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.n(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.n(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Z9(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRP(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hX().l8(85,1280,B.eO),$async$aRP)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fp(),$async$aRP)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hrB()
w=9
return A.b(C.coq(q,r),$async$aRP)
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
return A.i($async$aRP,v)},
aSa(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aSa=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.con(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
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
return A.b(A.Hl(p,!0,null,o).dh(0,B.h3),$async$aSa)
case 9:n=a1
w=10
return A.b(n.lb(),$async$aSa)
case 10:m=a1
w=11
return A.b(m.b.hs(B.hi),$async$aSa)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eT(B.dN.gaU(l))
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
return A.i($async$aSa,v)},
fVV:function fVV(){},
uj:function uj(d){this.a=d},
au1:function au1(d,e,f){this.c=d
this.d=e
this.a=f},
aGA:function aGA(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eUV:function eUV(d,e){this.a=d
this.b=e},
eUM:function eUM(d){this.a=d},
eUN:function eUN(d){this.a=d},
eUT:function eUT(d,e){this.a=d
this.b=e},
eUS:function eUS(d,e){this.a=d
this.b=e},
eUP:function eUP(d,e){this.a=d
this.b=e},
eUO:function eUO(d,e){this.a=d
this.b=e},
eUQ:function eUQ(d){this.a=d},
eUR:function eUR(d,e){this.a=d
this.b=e},
eUU:function eUU(d,e){this.a=d
this.b=e},
eUH:function eUH(d,e){this.a=d
this.b=e},
eUL:function eUL(d){this.a=d},
eUK:function eUK(d,e){this.a=d
this.b=e},
eUJ:function eUJ(d){this.a=d},
eUW:function eUW(d,e){this.a=d
this.b=e},
eUX:function eUX(d,e){this.a=d
this.b=e},
eUI:function eUI(d,e){this.a=d
this.b=e},
hEK(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.I(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fVW(d,e,f){var w=0,v=A.j(x.N),u
var $async$fVW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.aw(C.hEK(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVW,v)},
bFP(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fVW(!0,d,e),$async$bFP)
case 4:w=3
return A.b(r.au_(g,d,e.a),$async$bFP)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dT.aN(B.Y.aw(C.hEK(d,e,null),null))
u="NGMY_WS:"+B.kH.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFP,v)},
hwb(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hhc(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eG(s,t))return!0
if(J.d5(s,"{"))try{w=B.Y.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ipP(d){var w,v,u,t=C.hwb(d)
if(t==null)return null
if(C.hhc(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hhc(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hhc(v))return v}return null},
hhb(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cI(0,B.cI.aN(J.nr(q,8)))
w=t.a(B.Y.aQ(0,v,r))}else w=t.a(B.Y.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hbj(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bFO(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atZ(t[1]),$async$bFO)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hhb(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hhb(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFO,v)},
hha(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lD(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFk(){var w=0,v=A.j(x.o),u,t
var $async$bFk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hx(),$async$bFk)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hhb(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFk,v)},
hFL(d,e,f,g){return A.bT(B.L,null,new C.h3Z(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h3Z:function h3Z(d,e,f){this.a=d
this.b=e
this.c=f},
aeI:function aeI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eUZ:function eUZ(d,e){this.a=d
this.b=e},
eV_:function eV_(d,e){this.a=d
this.b=e},
eV0:function eV0(d,e){this.a=d
this.b=e},
eV1:function eV1(d,e){this.a=d
this.b=e},
eUY:function eUY(d){this.a=d},
atW:function atW(d,e,f){this.c=d
this.d=e
this.a=f},
bni:function bni(){var _=this
_.c=_.a=_.e=_.d=null},
eUC:function eUC(d,e){this.a=d
this.b=e},
eUD:function eUD(d){this.a=d},
eUE:function eUE(d){this.a=d},
au0:function au0(d){this.a=d},
aGz:function aGz(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eUG:function eUG(d){this.a=d},
eUF:function eUF(d){this.a=d},
hYw(d,e,f,g,h){return new C.P3(h,g,d,e,f,null)},
aLt:function aLt(d,e){this.a=d
this.b=e},
P3:function P3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGB:function aGB(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eVo:function eVo(){},
eVk:function eVk(d,e){this.a=d
this.b=e},
eVl:function eVl(d){this.a=d},
eV5:function eV5(d){this.a=d},
eV3:function eV3(d){this.a=d},
eV4:function eV4(d){this.a=d},
eVe:function eVe(d,e){this.a=d
this.b=e},
eVb:function eVb(d,e){this.a=d
this.b=e},
eVc:function eVc(d,e){this.a=d
this.b=e},
eVd:function eVd(d,e,f){this.a=d
this.b=e
this.c=f},
eV9:function eV9(d,e,f){this.a=d
this.b=e
this.c=f},
eV7:function eV7(d){this.a=d},
eV8:function eV8(d){this.a=d},
eVa:function eVa(d){this.a=d},
eVr:function eVr(d){this.a=d},
eVq:function eVq(d){this.a=d},
eVs:function eVs(d){this.a=d},
eVp:function eVp(d){this.a=d},
eV2:function eV2(d){this.a=d},
eV6:function eV6(d,e){this.a=d
this.b=e},
eVn:function eVn(d,e){this.a=d
this.b=e},
eVm:function eVm(d,e){this.a=d
this.b=e},
eVh:function eVh(d){this.a=d},
eVi:function eVi(d){this.a=d},
eVj:function eVj(d,e){this.a=d
this.b=e},
eVg:function eVg(d,e){this.a=d
this.b=e},
eVf:function eVf(d,e,f){this.a=d
this.b=e
this.c=f},
bA5:function bA5(){},
Be(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahd(d,e,f){return C.idV(d,e,f)},
idV(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahd=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahd)
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
return A.i($async$ahd,v)},
ahc(d,e){return C.idU(d,e)},
idU(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahc=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahc)
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
return A.i($async$ahc,v)},
icK(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tz(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCO(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCO=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4r(q),$async$bCO)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aSa(q,!1),$async$bCO)
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
return A.i($async$bCO,v)},
hLV(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rq(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rq(p,J.k(u==null?"":u),1,o,q)},
hbj(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cF(w,new C.cG5(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cG6(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lD(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ii2(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wu
case"female":case"f":return D.ot
default:return D.z_}},
hBf(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hlA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ii2(v==null?j:J.k(v))
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
return new C.hW(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ii4(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OC
case"viewer":return D.kV
default:return D.uA}},
ii5(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hm(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQW(d,e){return B.a.i(e.toLowerCase())===C.Hm(d,e)&&d.y!==D.kV},
uy(d,e){var w,v=d.y
if(v===D.kV)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hm(d,e))return!0
if(v===D.OC)return!0
v=d.e
return new A.N(v,A.hhh(),A.U(v).k("N<1,m>")).q(0,w)},
ihp(d){return J.dI(d,new C.fGb()).gI(0)},
h4K(d){var w=0,v=A.j(x.y),u,t
var $async$h4K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Br(d),$async$h4K)
case 3:u=t.rl(f,new C.h4L(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4K,v)},
bDP(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Br(d),$async$bDP)
case 3:t=g
if(J.rl(t,new C.fDJ(e))){w=1
break}if(C.ihp(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDP,v)},
am9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cF(w,new C.bSz(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSA(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bSB(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bh(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ii4(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cq)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kW(w,v,s,!r,t,g,q,p,o,n,m)},
hBu(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aB(v,0,8)},
DE(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SE(d),$async$DE)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$DE)
case 4:t=f
w=5
return A.b(t.a7d(0),$async$DE)
case 5:w=6
return A.b(C.fu_(t,l),$async$DE)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hwM(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p7(l,n),$async$DE)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hwM(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p7(l,n),$async$DE)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DE,v)},
fu_(d,e){return C.ia6(d,e)},
ia6(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fu_=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Be(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Y.aQ(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aT(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Be(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Y.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hbj(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Be(a9)+"_"+n))
i=C.icK(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4r(h),$async$fu_)
case 17:g=b1
if(g!=null){i=i.Tz(g)
p=!0}case 16:J.c7(q,i)
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
case 8:J.SN(q,new C.fu0())
if(p&&J.ad(q)!==0)C.p7(a9,q)
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
return A.i($async$fu_,v)},
bEg(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SE(d),$async$bEg)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DE(r),$async$bEg)
case 4:t=p.aT(g)
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
return A.i($async$bEg,v)},
hwM(d){var w,v,u,t
try{w=B.Y.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cF(v,new C.fpM(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fpN(),u),u.k("M.E"))
B.d.aZ(v,new C.fpO())
return v}catch(t){v=A.a([],x.D)
return v}},
p7(d,e){return C.isk(d,e)},
isk(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p7=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SE(b2),$async$p7)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$p7)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Be(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.Y.aQ(0,p,null)),new C.fXl(),a2).fM(0)
a2=J.b8(b3,new C.fXm(),a2).bY(0,new C.fXn())
n=A.d2(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eG(n,m)?17:18
break
case 17:a5=C.Be(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9D(l),$async$p7)
case 19:t=21
a5=C.Be(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Y.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9D(a5==null?null:J.k(a5)),$async$p7)
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
return A.b(C.ahc(r,"ngmy_worksheet_item_v3_"+C.Be(a8)+"_"+m),$async$p7)
case 29:w=30
return A.b(C.ahc(r,"ngmy_worksheet_thumb_v3_"+C.Be(a8)+"_"+m),$async$p7)
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
return A.b(C.bCO(h),$async$p7)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahd(r,"ngmy_worksheet_thumb_v3_"+C.Be(a8)+"_"+a4,f),$async$p7)
case 40:g=i.Tz(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahc(r,"ngmy_worksheet_thumb_v3_"+C.Be(a8)+"_"+a4),$async$p7)
case 41:g=i.Tz(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahc(r,"ngmy_worksheet_thumb_v3_"+C.Be(a8)+"_"+a4),$async$p7)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahd(r,"ngmy_worksheet_item_v3_"+C.Be(a8)+"_"+a4,B.Y.aw(g.aj(),null)),$async$p7)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c7(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahd(r,"ngmy_worksheets_index_v3_"+C.Be(a8),B.Y.aw(q,null)),$async$p7)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fXo(q))
a4=a3.$ti.k("cM<1,a9<m,@>>")
a7=A.C(new A.cM(a3,new C.fXp(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahd(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.aw(a0,null)),$async$p7)
case 45:w=46
return A.b(J.hL0(r),$async$p7)
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
return A.i($async$p7,v)},
M9(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$M9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DE(d),$async$M9)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h4J(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.p7(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$M9,v)},
bE1(d,e){var w=0,v=A.j(x.H),u
var $async$bE1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DE(d),$async$bE1)
case 2:u=g
J.nT(u,new C.fGF(e))
w=3
return A.b(C.p7(d,u),$async$bE1)
case 3:return A.h(null,v)}})
return A.i($async$bE1,v)},
Ho(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ho=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Ho)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aQ(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cF(j,new C.fJQ(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fJR(),s),s.k("M.E"))
B.d.aZ(r,new C.fJS())
k=r}}catch(h){}w=4
return A.b(C.fqz(d),$async$Ho)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.iau(k,p,d)
j=A.U(o)
s=j.k("N<1,a9<m,@>>")
s=A.C(new A.N(o,new C.fJT(),s),s.k("ak.E"))
n=B.Y.aw(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RO(d,o),$async$Ho)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fJU(d),j),j.k("M.E"))
if(m.length!==0)C.aQG(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ho,v)},
fX7(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fX7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RO(d,e),$async$fX7)
case 3:t=J.dI(e,new C.fX8(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQG(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fX7,v)},
a40(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a40=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a40)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aQ(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cF(m,new C.h4E(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h4F(),t),t.k("M.E"))
o=s}}catch(k){}q=J.ox(o,new C.h4G(e))
if(B.a.i(e.x).length===0&&C.uy(e,d)){m=B.a.i(d.toLowerCase())
p=e.aG8(e.y===D.kV?D.kV:D.uA,m)}else p=e
if(q===-1)J.n3(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RO(d,o),$async$a40)
case 3:w=C.uy(p,d)?4:5
break
case 4:w=6
return A.b(C.aQF(C.Hm(p,d),p),$async$a40)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a40,v)},
aQS(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ho(d),$async$aQS)
case 2:u=g
t=J.cC(u)
s=A.nB(t.eP(u,new C.fGm(e)))
t.br(u,new C.fGn(e))
w=3
return A.b(C.RO(d,u),$async$aQS)
case 3:w=s!=null&&C.aQW(s,d)?4:5
break
case 4:w=6
return A.b(C.fpQ(e),$async$aQS)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQS,v)},
aiZ(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h4P(),v),v.k("M.E"))
return w},
heN(d,e){var w,v=d.f,u=A.nB(new A.Y(v,new C.fFR(e),A.U(v).k("Y<1>")))
v=C.aiZ(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fFS(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fFT())
return v},
ii8(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hFP(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.heN(d,u),new C.h4c(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ijH(d,e){var w
if(e==null||e.length===0)return 1
w=C.heN(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fKG(),A.U(w).k("N<1,H>")).f1(0,B.xS)+1},
isd(d){var w,v=C.aiZ(d)
if(v.length===0)return null
w=new A.Y(v,new C.fX1(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ii3(d){return A.I(["id",d.a,"name",d.b,"gender",C.hBf(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ijB(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.z_?n:q.c
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
d=q.aG3(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPI(a1,w,a3.d,a2.y,s,a0,v)},
Br(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Br=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Br)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Y.aQ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cF(p,new C.fJN(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fJO(),s),s.k("M.E"))
B.d.aZ(p,new C.fJP())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Br,v)},
aiJ(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiJ=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uA:D.kV
a7=C.Hm(b2,b3)
w=2
return A.b(C.Br(b1),$async$aiJ)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fWX(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDP(b1,b2),$async$aiJ)
case 5:case 4:if(b0===-1){u=b2.aG8(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.z_?i:l.c
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
s.n(0,m,l.aG3(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b7<2>")
s=A.C(new A.b7(s,k),k.k("M.E"))
k=a5?D.uA:D.kV
u=t.cPK(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RO(b1,a8),$async$aiJ)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQF(B.a.i(b3.toLowerCase()),u),$async$aiJ)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiJ,v)},
hxa(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a9<m,@>>"),k=A.C(new A.N(m,C.hET(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.I(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.I(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hxb(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a9<m,@>>")
u=A.C(new A.N(u,C.hET(),t),t.k("ak.E"))
return A.I(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i7V(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.am9(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hhh(),A.U(j).k("N<1,m>")).bY(0,new C.fqm())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uA
else s=B.d.q(t,u)?D.OC:D.kV
return w.aG8(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.am9(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cF(h,new C.fqn(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fqo(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fqp(),x.N).bY(0,new C.fqq())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uA
else s=B.d.q(t,u)?D.OC:D.kV
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bh(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.kW(h,r,p,!m,t,o,l,j,v,s,B.cd)},
fqz(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fqz=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fqD()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.lI("family_trees","*",null,A.I(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lI("family_trees","*",A.I(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lI("family_trees","*",null,A.I(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fqz)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.fW(l,o)
J.fW(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b7<2>")
h=A.cF(new A.b7(l,h),new C.fqA(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fqB(),l),l.k("M.E"))
B.d.aZ(l,new C.fqC())
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
return A.i($async$fqz,v)},
iau(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dM(e,new C.fuI(),v).bY(0,new C.fuJ())
t=A.d2(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hm(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kV){m=q.e
m=!new A.N(m,A.hhh(),A.U(m).k("N<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ijB(l,v)
o=C.Hm(k,w)
p=v.d
s.n(0,u,o===w?k.bfh(p,D.uA):k.bfh(p,v.y))}j=s.$ti.k("b7<2>")
j=A.C(new A.b7(s,j),j.k("M.E"))
B.d.aZ(j,new C.fuK())
return j},
RO(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$RO)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fxI(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.aw(s,null)),$async$RO)
case 3:return A.h(null,v)}})
return A.i($async$RO,v)},
aQF(d,e){return C.ifO(d,e)},
ifO(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQF=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.me("family_trees",A.a([C.hxa(e,d)],p),null,B.cM),$async$aQF)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.me("family_trees",A.a([C.hxb(e,d)],p),null,B.cM),$async$aQF)
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
return A.i($async$aQF,v)},
aQG(d,e){return C.ifP(d,e)},
ifP(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQG=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a9<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fCZ(d),n),m)
r=l
w=7
return A.b(A.me("family_trees",r,null,B.cM),$async$aQG)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fD_(d),n),m)
p=k
w=8
return A.b(A.me("family_trees",p,null,B.cM),$async$aQG)
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
return A.i($async$aQG,v)},
fpQ(d){return C.i78(d)},
i78(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fpQ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sd("family_trees",A.I(["id",d],x.N,x.z),null,B.cM),$async$fpQ)
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
return A.i($async$fpQ,v)},
rq:function rq(d,e,f,g,h){var _=this
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
cG8:function cG8(){},
cG7:function cG7(){},
cG5:function cG5(){},
cG6:function cG6(){},
Iw:function Iw(d,e){this.a=d
this.b=e},
hW:function hW(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
am8:function am8(d,e){this.a=d
this.b=e},
fGb:function fGb(){},
h4L:function h4L(d){this.a=d},
fDJ:function fDJ(d){this.a=d},
kW:function kW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bSD:function bSD(){},
bSC:function bSC(){},
bSz:function bSz(){},
bSA:function bSA(){},
bSB:function bSB(){},
fu0:function fu0(){},
fpM:function fpM(){},
fpN:function fpN(){},
fpO:function fpO(){},
fXl:function fXl(){},
fXm:function fXm(){},
fXn:function fXn(){},
fXo:function fXo(d){this.a=d},
fXp:function fXp(){},
h4J:function h4J(d){this.a=d},
fGF:function fGF(d){this.a=d},
fJQ:function fJQ(){},
fJR:function fJR(){},
fJS:function fJS(){},
fJT:function fJT(){},
fJU:function fJU(d){this.a=d},
fX8:function fX8(d){this.a=d},
h4E:function h4E(){},
h4F:function h4F(){},
h4G:function h4G(d){this.a=d},
fGm:function fGm(d){this.a=d},
fGn:function fGn(d){this.a=d},
h4P:function h4P(){},
fFR:function fFR(d){this.a=d},
fFS:function fFS(d,e){this.a=d
this.b=e},
fFT:function fFT(){},
h4c:function h4c(d){this.a=d},
fKG:function fKG(){},
fX1:function fX1(){},
fJN:function fJN(){},
fJO:function fJO(){},
fJP:function fJP(){},
fWX:function fWX(d){this.a=d},
fqm:function fqm(){},
fqn:function fqn(){},
fqo:function fqo(){},
fqp:function fqp(){},
fqq:function fqq(){},
fqD:function fqD(){},
fqE:function fqE(d){this.a=d},
fqA:function fqA(d){this.a=d},
fqB:function fqB(){},
fqC:function fqC(){},
fuI:function fuI(){},
fuJ:function fuJ(){},
fuK:function fuK(){},
fxI:function fxI(){},
fCZ:function fCZ(d){this.a=d},
fD_:function fD_(d){this.a=d},
cG9:function cG9(d,e){this.a=d
this.b=e},
cGa:function cGa(d,e){this.a=d
this.b=e},
aIF:function aIF(d,e,f){this.a=d
this.b=e
this.c=f},
baJ:function baJ(){this.b=this.a=0},
baI:function baI(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byl:function byl(){},
xo(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gnt()),2,"0")+":"+B.a.b_(B.o.u(w.gGM()),2,"0")},
hYt(){var w,v=$.ot(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.he(u)},
atX(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$atX)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$atX)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
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
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$atX,v)},
atY(d){return C.hYu(d)},
hYu(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$atY)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.I(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cM,null),$async$atY)
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
return A.i($async$atY,v)},
au_(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$au_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$au_)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hYt()
w=4
return A.b(C.atX(),$async$au_)
case 4:r=h
q=B.a.i(e)
p=B.dT.aN(t)
J.aK(r,s,A.I(["ownerEmail",q,"projectId",f,"payload",B.cP.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.atY(r),$async$au_)
case 5:u=new A.a1r("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$au_,v)},
atZ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$atZ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atX(),$async$atZ)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
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
try{s=B.ca.cI(0,B.cI.aN(t))}catch(h){r=A.ab(h)
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
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.atY(q),$async$atZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atZ,v)},
hrB(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cN.az(999999)},
hYv(d){var w,v,u,t,s,r,q
try{w=A.ahD(d)
if(w==null)return d
v=w
if(J.Mf(v)>960||J.Me(v)>960){s=v
r=J.Mf(v)>=J.Me(v)?960:null
v=A.ahA(s,J.Me(v)>J.Mf(v)?960:null,B.Q_,r)}s=v
u=A.anu(82).TW(s,B.zD)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
coq(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$coq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hYv(e)
$.com.n(0,s,t)
u=C.bFR(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coq,v)},
b4r(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4r=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eG(l,",")?B.d.gan(J.lM(l,",")):l
q=B.cI.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hrB()
w=7
return A.b(C.coq(p,q),$async$b4r)
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
return A.i($async$b4r,v)},
con(d){var w=0,v=A.j(x.T),u,t,s
var $async$con=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cop(s),$async$con)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$con,v)},
a9D(d){var w=0,v=A.j(x.H),u,t
var $async$a9D=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hEL(d)
if(t==null){w=1
break}$.com.W(0,t)
w=3
return A.b(C.bFQ(t),$async$a9D)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9D,v)},
bFR(d,e){return C.ipS(d,e)},
ipS(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPu
w=7
return A.b(n==null?$.aPu=N.hdC():n,$async$bFR)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mj(r,"thumbs","readwrite")
B.iA.mb(J.mi(p,"thumbs"),q,l)
w=8
return A.b(J.ow(p),$async$bFR)
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
return A.i($async$bFR,v)},
bFQ(d){return C.ipQ(d)},
ipQ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFQ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPu
w=7
return A.b(o==null?$.aPu=N.hdC():o,$async$bFQ)
case 7:r=f
q=J.mj(r,"thumbs","readwrite")
B.iA.Gm(J.mi(q,"thumbs"),m)
w=8
return A.b(J.ow(q),$async$bFQ)
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
return A.i($async$bFQ,v)}},D,Au,Av,Z,Aw,Ax,N
J=c[1]
A=c[0]
B=c[2]
P=c[259]
A_=c[166]
S=c[60]
A8=c[234]
L=c[215]
H=c[35]
E=c[225]
T=c[122]
A9=c[237]
Q=c[106]
Aa=c[137]
Ab=c[117]
Ac=c[201]
A0=c[119]
Ad=c[233]
Ae=c[44]
R=c[232]
Af=c[125]
A1=c[202]
Ag=c[253]
Ah=c[192]
Ai=c[205]
M=c[91]
A2=c[87]
Aj=c[172]
A3=c[132]
A4=c[175]
A5=c[200]
Ak=c[256]
A6=c[258]
Al=c[79]
G=c[257]
Am=c[136]
An=c[261]
Ao=c[121]
A7=c[219]
Ap=c[34]
U=c[120]
O=c[195]
Aq=c[206]
V=c[260]
Ar=c[158]
As=c[128]
W=c[246]
X=c[43]
F=c[97]
At=c[33]
I=c[105]
K=c[141]
Y=c[77]
C=a.updateHolder(c[7],C)
D=c[252]
Au=c[78]
Av=c[213]
Z=c[255]
Aw=c[254]
Ax=c[64]
N=c[61]
C.apG.prototype={}
C.b_K.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjB(),f=h.x!=null&&h.zJ(i).length===0
if(h.x!=null)w=f?B.b2:B.bC
else w=h.gUB()?B.bC:B.dY
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.L(D.boP,B.r,1)
s=x.p
r=A.q(i,A.x(A.a([A.q(i,D.f9b,B.f,i,i,new A.p(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hd,i,i,i),B.X,D.fF_,B.ax,A.d(C.xo(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fAJ,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,D.b78,i,i,i,i,B.a0t,i,i,i)
q=A.l(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b2.j(0.28),B.r,1)
n=A.hfQ(h.d)
o=A.q(B.A,C.b_J(A.fN0(h.e,n),30),B.f,i,i,new A.p(B.m6,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fvL,B.K,i,i)
m=A.l(14)
l=A.L(B.aO,B.r,1)
q=A.q(i,A.x(A.a([o,B.T,n,B.bH,D.fFi,B.af,A.q(i,A.x(A.a([D.fVv,B.bH,A.d(A.Bt(h.c),i,i,i,i,i,i,D.fqp,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.alI,i,i,i)
p=A.l(16)
m=A.L(B.aO,B.r,1)
l=j.aTd("Original due",C.xo(h.r,!1))
n=j.aTd("Current due",C.xo(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.X,A.q(i,A.x(A.a([l,B.T,n,B.X,A.q(i,A.d(h.gaNf(),i,i,i,i,i,i,A.n(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.n),i,i,i,i,B.Cb,i,i,1/0),B.X,j.ckz(),B.T,j.c7l(g,f)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bh,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fGf,B.ax,A.d(q,i,i,i,i,i,i,D.fuZ,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bh,i,i,1/0)],s))}if(h.gaHP()){q=A.l(14)
o=A.L(B.cu,B.r,1.6)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fWQ,B.T,A.by(A.l(12),A.e9(new A.a5(1/0,88,A.b4(i,i,i,new A.Xd(h.ax,B.U,D.fdW,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GJ,i,i,i)],s))}p.push(B.aB)
p.push(D.fOD)
return A.q(i,A.x(A.a([r,new A.D(B.a0i,A.x(p,B.al,i,B.e,B.j,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.aq,i,i,new A.p(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTd(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abl,w,w,w),1),A.d(e,w,w,w,w,w,w,D.frt,w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
ckz(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aas(B.dY,u,"Not paid yet")
w=t.zJ(null).length
v=w===0?B.b2:B.bC
return this.aas(v,u,C.xo(t.x,!0))},
c7l(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aas(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aas(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abl,u,u,u)
v=A.U(d).k("N<1,h2>")
v=A.C(new A.N(d,new C.c7S(),v),v.k("ak.E"))
return A.x(A.a([w,B.an,A.bV(B.bG,v,B.bs,u,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
aas(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abl,w,w,w),1),new A.dl(1,B.cm,A.d(f,w,w,w,w,w,w,A.n(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e1,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.bcV.prototype={
a5(d,e){new A.Xd(this.b,B.U,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.apS.prototype={
S(){return new C.aEz(A.a([],x.bp))},
ge3(){return this.c}}
C.aEz.prototype={
Y(){this.a4()
this.Jj()},
Jj(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3f(t.a.c),$async$Jj)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQc(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jj,v)},
aVb(d,e){var w,v=null,u=this.a.d.a,t=u?B.U:B.aP,s=A.n(v,v,u?B.bv:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bv:B.br).j(0.22)
w=A.l(10)
return A.bt(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bh,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bv:B.br).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b4M),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVa(d){return this.aVb(d,null)},
Q3(d){return this.coc(d)},
coc(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I0:B.eO
w=7
return A.b(new A.hX().CJ(72,900,900,n),$async$Q3)
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
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
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
b3j(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.U:B.aP,o=A.l(10),n=A.L((q?B.bv:B.br).j(0.18),B.r,1)
if(d)q=B.cG
else q=s.a.d.a?B.bv:B.br
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.n(r,r,s.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cG
else u=s.a.d.a?B.bv:B.br
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.n(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cG,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cf)
q=A.a([q,B.ae,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cy,s.a.d.a?B.bv:B.br,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cf))
return A.q(r,A.A(q,B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.n),r,r,r,B.jF,D.bBI,r,r,r)},
DG(d){return this.bDN(d)},
bDM(){return this.DG(null)},
bDN(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DG=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b6,B.aR),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.iH(a4)
p=a5.c
a4=a4===q?B.o.u(B.i.M(p)):B.i.ad(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aR),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aR),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hfQ(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.x4?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hK(B.w.j(0.55),!0,"Dismiss",a4,new C.dPW(),new C.dPX(a2,t,a5,r,new C.dPY(a2,t),o,n,j),B.eH,!0,x.y),$async$DG)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cX(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fkt)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fj7)
w=1
break}a1=A.fN0(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.x4?"male":"female"
w=7
return A.b(A.aiY(a3,A.hof(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DG)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.x4?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cS4(a2.a)
w=8
return A.b(A.aiY(t.a.c,a5),$async$DG)
case 8:case 5:w=9
return A.b(t.Jj(),$async$DG)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DG,v)},
aVR(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cG.j(0.14)
else w=this.a.d.a?B.U:B.aP
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cG
else s=(this.a.d.a?B.bv:B.br).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_J(d,18)
if(g)q=B.cG
else q=this.a.d.a?B.aP:B.as
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.q(p,A.A(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.n(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.j,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
ST(d){return this.cG2(d)},
cG2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ST=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hK(B.w.j(0.55),!0,"Dismiss",s,new C.dQf(),new C.dQg(t,d),B.h2,!0,x.y),$async$ST)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiY(t.a.c,d),$async$ST)
case 7:w=8
return A.b(t.Jj(),$async$ST)
case 8:case 1:return A.h(u,v)}})
return A.i($async$ST,v)},
Q2(d,e){return this.bOG(0,e)},
bOG(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lo(s,"Cancel","Delete",e.b+" \xb7 "+A.Bt(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q2)
case 3:if(!g){w=1
break}w=4
return A.b(C.fGt(t.a.c,e.a),$async$Q2)
case 4:w=5
return A.b(t.Jj(),$async$Q2)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
agf(d){return this.chZ(d)},
chZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$agf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dQ9(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agf)
case 2:return A.h(null,v)}})
return A.i($async$agf,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.esj
w=J.dI(m.d,new C.dQh())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dQi())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dQj())
w=A.l(18)
s=m.a.d.a
r=s?D.cBs:D.aCD
q=A.L(s?B.cG.j(0.35):B.cG.j(0.18),B.r,1)
s=A.q(l,D.c2j,B.f,l,l,new A.p(B.cG.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.n(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a3,!0,A.l(12),A.aP(!1,A.l(12),!0,D.erE,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQk(m),l,l,l,l,l,l,l),B.f,B.cG,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.j,0,l,l)
o=A.E(m.cC8("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bt(t)
r=A.a([A.q(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9t(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a8(B.aA,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.alF,l,l,l),B.aB],p)
if(J.cr(m.d)){w=m.a.d.a
s=w?B.ee:B.c
q=A.l(18)
o=A.L((w?B.bv:B.br).j(0.12),B.r,1)
n=A.q(l,D.bY2,B.f,l,l,new A.p(B.cG.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.n(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.n(l,l,m.a.d.a?B.bv:B.br,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.n),l,l,l,l,D.bEk,l,l,1/0))}else{w=m.gcnt()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.D(D.bG0,A.d("Paid",l,l,l,l,l,l,A.n(l,l,m.a.d.a?B.bv:B.br,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.j,0,B.p)},
b9t(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.L((v.a.d.a?B.bv:B.br).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.n(u,u,v.a.d.a?B.bv:B.br,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cG
else w=v.a.d.a?B.aP:B.as
return A.q(u,A.x(A.a([q,B.bH,A.d(f,u,1,B.a2,u,u,u,A.n(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.n),u,u,u,u,B.ey,u,u,u)},
cC8(d,e){return this.b9t(!1,d,e)},
cnu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zJ(j).length,h=d.biR()
if(d.x!=null){w=d.zJ(j).length
v=w===0?B.cG:B.bC}else if(d.gUB())v=B.bC
else{if(h)w=B.cG
else w=k.a.d.a?B.bv:B.br
v=w}if(d.x!=null){w=d.zJ(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xo(u,!1)}else{u.toString
t="Paid "+C.xo(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xo(w,!1)+" \xb7 "+i+" missed":"Due "+C.xo(w,!1)}w=k.a.d.a?B.ee:B.c
u=A.l(18)
if(d.gUB()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.br).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cL,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bq:B.m6
o=A.L(d.gUB()&&d.x==null?B.bC.j(0.45):B.cG.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hfQ(d.d)
o=A.q(B.A,A.d3(C.b_J(A.fN0(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.as
m=x.p
n=A.a([new A.dl(1,B.cm,A.d(p,j,1,B.a2,j,j,j,A.n(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHP())B.d.v(n,A.a([B.e5,A.X(B.P3,B.cG.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.j,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.n(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.Bt(d.c)
l=k.a.d.a?B.aP:B.as
n=A.d(n,j,j,j,j,j,j,A.n(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aI(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Ag.alt,A.A(A.a([o,B.bd,p,B.ae,A.x(A.a([n,B.bH,A.X(B.eJ,(k.a.d.a?B.bv:B.br).j(0.5),j,j,j,18)],m),B.dL,j,B.e,B.j,0,B.p)],m),B.l,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQb(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.p(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uT.prototype={}
C.alX.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bn
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.az(a0,A.q(a0,A.X(B.cy,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a7:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iN,A.d(k,a0,a0,a0,a0,a0,a0,A.n(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.n(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayO,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H0,A.d(k,a0,a0,a0,a0,a0,a0,A.n(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),B.f,B.e4)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bAT,A.d(v,a0,1,B.a2,a0,a0,a0,A.n(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cH:B.bt,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fI,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.feK)
a2=A.a([A.A(n,B.l,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wk,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a8(B.a7,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lL,A.x(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hv,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a8(B.aA,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bCb,a0,a0,a0,a0)}}
C.aWs.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.n(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bn?B.bn:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.n(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bt:B.cH,q,B.V,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.n(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.j,0,q,q),B.cU,n],m)
if(p.z)o.push(new A.D(B.ur,n,q))
return new A.D(B.d3,A.x(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.U4.prototype={
S(){return new C.bgx()}}
C.bgx.prototype={
gc2b(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.ese,D.esk],l)
for(w=0;w<8;++w){v=D.a4K[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HN:B.zm
q=t===s
r=A.X(r,q?B.eL:B.bW,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bm,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bc,A.d(v.c,n,1,B.a2,n,n,n,B.AM,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.eL,2,B.r,-1)
s=new A.p(n,n,new A.bH(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.az(n,new A.D(B.eI,A.x(A.a([new A.D(B.n_,new A.c8(B.aL,B.e,B.j,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.du(!0,new C.alX(v,q.d,q.e,new C.dfS(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dfT(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bCx,A.bJ(D.h1m,n,new C.dfU(o,d),A.bp(B.b8,n,n,n,n,B.oV,n,n,new A.b9(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cP(new A.aY(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bGT,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nx.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bft(d,e,f){return new C.nx(this.a,e,d,f)}}
C.Iv.prototype={
wX(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iv(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFX(d){var w=null
return this.wX(w,w,w,w,w,d,w,w,w,w,w,w)},
cNH(d){var w=null
return this.wX(w,w,w,w,d,w,w,w,w,w,w,w)},
bfr(d,e,f){var w=null
return this.wX(d,w,w,w,w,w,w,w,e,w,f,w)},
cOl(d){var w=null
return this.wX(w,w,w,w,w,w,d,w,w,w,w,w)},
cOu(d){var w=null
return this.wX(w,w,w,w,w,w,w,w,w,d,w,w)},
cNF(d){var w=null
return this.wX(w,w,w,d,w,w,w,w,w,w,w,w)},
cOw(d){var w=null
return this.wX(w,w,w,w,w,w,w,w,w,w,w,d)},
cNC(d){var w=null
return this.wX(w,w,d,w,w,w,w,w,w,w,w,w)},
cNx(d){var w=null
return this.wX(w,d,w,w,w,w,w,w,w,w,w,w)},
Ge(d){var w=null
return this.wX(w,w,w,w,w,w,w,d,w,w,w,w)},
cOE(d,e,f,g,h,i,j,k,l,m,n){return this.wX(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.I(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLb(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRk(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DK.gev(D.DK))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a6q)
q=l.$2("frame",D.a5L)
l=l.$2("texture",D.a5H)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOE(p,u,t,q,r,A.re(d.h(0,"ribbon"))?A.GZ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_D.prototype={
S(){return new C.aBy(A.a([],x.I),D.OB)},
ge3(){return this.c}}
C.aBy.prototype={
Y(){var w,v=this
v.a4()
v.f=A.Aj(0,1)
w=$.aw()
v.z=new A.au(B.aw,w)
v.Q=new A.au(B.aw,w)
v.lg()
w=v.a
C.bEc(w.c,w.d).bG(new C.dgy(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.aw()
u.U$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.P$=0
v.a3()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LK(s.c,s.d),$async$lg)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dgm(t,r))
t.axE()
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
gaud(){var w,v=this
if(!J.cr(v.d)){w=v.r
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
cgo(d){this.m(new C.dgj(this,d))
this.axE()},
NZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nx(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSx(r.c,r.d,s),$async$NZ)
case 3:w=4
return A.b(t.lg(),$async$NZ)
case 4:if(t.c==null||J.cr(t.d)){w=1
break}q=J.ox(t.d,new C.dfV(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dfW(t,p))
t.axE()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BI(p+1,B.cw,B.kR),$async$NZ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NZ,v)},
Bo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bo=A.e(function(d,e){if(d===1)return A.f(e,v)
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
return A.b(C.aSx(o.c,o.d,new C.nx(s,r,q,new A.V(p,0,!1))),$async$Bo)
case 3:w=4
return A.b(t.lg(),$async$Bo)
case 4:if(t.c==null){w=1
break}t.m(new C.dgn(t))
case 1:return A.h(u,v)}})
return A.i($async$Bo,v)},
OF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaud()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dg3(r),s,null,!0,!0,x.y),$async$OF)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDY(s.c,s.d,r.a),$async$OF)
case 4:t.m(new C.dg4(t))
w=5
return A.b(t.lg(),$async$OF)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UE(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
z5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bo(),$async$z5)
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
return A.b(C.S4(s,r.r,o,p,q),$async$z5)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hFn(s,r.x,r.r),$async$z5)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LK(s.c,s.d),$async$z5)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nx(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BC(r.c,r.d,l),$async$z5)
case 11:w=12
return A.b(t.lg(),$async$z5)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z5,v)},
a1u(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bo(),$async$a1u)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz3(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zO,new C.dgk(t),new C.dgl())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mS("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gR(o)
p.push(new H.mS(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hhx(o,new H.rO(s,r,"",p,new H.v8(q.d,null,null,null,null,"","","")),null),$async$a1u)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1u,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bo(),$async$On)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.agq,null,new C.dg_(t),s,!0,!0,!0,I.a9x,!1,!1,x.N),$async$On)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNH(r)
t.m(new C.dg0(t,q))
s=t.a
w=7
return A.b(C.SH(s.c,s.d,q),$async$On)
case 7:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
XS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.agq,null,new C.dg5(t),r,!0,!0,!0,I.a9x,!1,!1,x.e),$async$XS)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dg6(t,s))
r=t.a
w=4
return A.b(C.SH(r.c,r.d,s),$async$XS)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BI(0,B.dH,B.mW)
case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
bUm(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz3(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1p()
if(r.e)w=D.af8
else if(J.cr(r.d)){w=r.y
v=r.gz3(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fpL,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(W.amL,new C.ZV(w,v,0,q),q),q),B.bz,t,B.an,A.d(u,q,q,q,q,q,q,A.n(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bz],s)
if(B.a.i(r.a.x).length!==0)w.push(A.az(q,A.q(q,D.f8X,B.f,q,q,new A.p(q,q,q,A.l(18),A.a([new A.ac(0,B.G,B.dK.j(0.45),B.H,18)],x.V),E.wX,B.n),q,q,q,q,B.Og,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKc(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bU9,D.h0O,r.gaOV(),q))
B.d.v(u,w)}w=A.as(A.ce(A.x(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.n(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dX:B.Bm
u=A.x(A.a([new A.D(D.bDB,w,q),A.E(A.JU(v,new C.dgw(r),J.ad(r.d)+1,q,r.gcgn(),u,B.aL),1),r.bGH()],x.p),B.l,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c4(q,D.Z6,new A.an(B.a0,q,B.b3,B.t,A.a([D.aQ8,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1p(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KS(B.ef,"AI",h.gbEz(),!0))
if(h.a.f)f.push(new C.KS(B.mi,"Cover",h.gbPf(),!1))
if(h.a.f)f.push(new C.KS(B.wQ,"Header",h.gbKe(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KS(B.uR,"Print",h.gcpw(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hJ:B.j3
t=v?"Save":"Edit"
f.push(new C.KS(u,t,v?h.gcvP():new C.dgg(h),!1))}if(h.a.f)f.push(new C.KS(B.hY,"Add page",h.gaOV(),!1))
v=C.hBe(h.y.Q)
u=h.gz3(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dGS
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kq.j(0.5),1,B.r,-1)
j=A.q(g,A.X(l.a,D.kM,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bH(i,i,i,i),new A.be(k,k,k,k),g,new A.a8(B.a7,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kM.j(0.85)
p.push(new A.bz(1,B.bc,A.az(B.c3,A.x(A.a([k,B.bH,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.alX(v,u,t+" \xb7 "+s+" "+r,new C.dgh(h),A.A(p,B.l,g,B.e,B.j,0,g,g),g)},
An(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$An=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bo(),$async$An)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3u(B.d.aO(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dfX(t,p),s,null,!0,!0,x.N),$async$An)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z5(),$async$An)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eg(),$async$An)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FS("Swahili (Kiswahili)",!0),$async$An)
case 18:w=16
break
case 17:w=19
return A.b(t.cGG(o==="sw"?"Swahili (Kiswahili)":"English"),$async$An)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$An,v)},
ZP(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.L(E.kq.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aP(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.wX,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KG,w,w,w),A.d(g,w,w,w,w,w,w,B.AN,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.l,w,B.e,B.j,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgi(d,h),w,w,w,w,w,w,w),w)},
Eg(){return this.bTQ()},
bTQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eg=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dg9(r),a7,null,!0,!0,x.ei),$async$Eg)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dga(o),a7,null,!0,!0,x.H).fv(new C.dgb(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.c7(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zO[a1]
J.c7(j,i.a)}w=8
return A.b(C.ai7(a0,a7,new C.dgc(o),d,l,e,j),$async$Eg)
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
if(l!=null&&a6.a)A.a6(l,!0).eA()
l=o
l.sic($.aw())
J.aT_(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.al(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bft(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BC(j.c,j.d,l),$async$Eg)
case 11:w=12
return A.b(r.lg(),$async$Eg)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zO[a1].a)
a5=l.cLb(j,12,a7)
l=r.a
w=15
return A.b(C.SH(l.c,l.d,a5),$async$Eg)
case 15:if(r.c!=null)r.m(new C.dgd(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BI(0,B.dH,B.mW)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.czV("Undo",new C.dge(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.el,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eg,v)},
FS(d,e){return this.cGH(d,e)},
cGG(d){return this.FS(d,!1)},
cGH(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FS=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dgp(a0),k,null,!0,!0,x.H).fv(new C.dgq(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c7(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3H(m,new C.dgr(a0)),$async$FS)
case 10:w=8
break
case 9:w=11
return A.b(C.bFH(new C.dgs(a0),m,a2),$async$FS)
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
if(o!=null&&f.a)A.a6(o,!0).eA()
o=a0
o.sic($.aw())
J.aT_(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bft(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BC(k.c,k.d,o),$async$FS)
case 12:w=13
return A.b(r.lg(),$async$FS)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.czV("Undo",new C.dgt(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FS,v)},
bGH(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dfY(v):u
r=A.aH(u,u,u,u,A.X(D.bPR,s?D.kM:B.aU,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.wz,B.Gm,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.n(u,u,B.Gm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOQ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.n(u,u,D.kM.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dfZ(v):u
return A.bm(!0,new A.D(D.bDq,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.eJ,t<J.ad(v.d)?D.kM:B.aU,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_H.prototype={
S(){return new C.bgW(new A.au(B.aw,$.aw()))}}
C.bgW.prototype={
ga2C(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a3()},
gbSr(){switch(this.ga2C()){case"cover":var w=D.d7W
break
case"book":w=D.d3h
break
default:w=D.dz8
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=E.kq.j(0.5),m=x.p,l=A.A(A.a([D.dGT,B.au,D.bJ7,A.aH(p,p,p,p,B.lp,p,p,p,new C.dik(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.j,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jw(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dil(q),q.ga2C()==="page",p,p,p,p))
if(q.a.d)k.push(A.jw(p,p,p,D.fWl,p,new C.dim(q),q.ga2C()==="book",p,p,p,p))
k.push(A.jw(p,p,p,D.fIZ,p,new C.din(q),q.ga2C()==="cover",p,p,p,p))
k=A.bV(B.bG,k,B.bs,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.a_,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bt(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kj,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSr(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KD,p,p,p)
w.push(A.n4(p,B.c.j(0.08),r,B.hk,new C.dio(q,s),p,p,p,p))}return A.eP(p,E.BR,A.ce(A.x(A.a([l,B.X,D.fZF,B.an,k,B.af,j,B.T,A.bV(B.bG,w,B.bs,p,6,6),B.aB,A.dh(D.bU6,D.h_r,new C.dip(q,d),A.bp(B.b8,p,p,p,p,B.oV,p,p,new A.b9(A.l(16),B.a1),p,p,p)),B.ax,D.fUz],m),B.E,p,B.e,B.P,0,B.p),B.t,p,B.y,p,B.fs,p,p,B.ah),p,p,p,I.a0w,B.d7,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_F.prototype={
S(){return new C.aBB(A.a([],x.gA))},
ge3(){return this.c}}
C.afU.prototype={}
C.aBB.prototype={
Y(){this.a4()
this.lg()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.S9(p.c,p.d),$async$lg)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bEc(r.c,q),$async$lg)
case 6:j=e
i=J
w=7
return A.b(C.LK(t.a.c,q),$async$lg)
case 7:m.push(new l.afU(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dgN(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
baK(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QQ(d,e){return this.chW(0,e)},
chW(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ec(new C.dgM(u,e),!0,null,x.y)),$async$QQ)
case 2:t=g
w=3
return A.b(u.lg(),$async$QQ)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aU1)
return A.h(null,v)}})
return A.i($async$QQ,v)},
FU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aTY)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahr(s.c,s.d),$async$FU)
case 5:q=e
w=6
return A.b(t.lg(),$async$FU)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QQ(0,B.d.fe(t.d,new C.dgR(q))),$async$FU)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.S4(p,s.f,r,n,o),$async$FU)
case 10:m=e
w=11
return A.b(t.lg(),$async$FU)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aU1)
case 1:return A.h(u,v)}})
return A.i($async$FU,v)},
Qh(d,e){return this.ctx(0,e)},
ctx(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dgQ(t,e),s,null,!0,!0,x.y),$async$Qh)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3V(s.c,s.d,e.a),$async$Qh)
case 4:w=5
return A.b(t.lg(),$async$Qh)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qh,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGK(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.L(E.kq.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.az(n,new A.fH(0.7142857142857143,A.q(n,A.x(A.a([D.dGU,B.af,D.erf,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.n(n,n,D.kM.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.j,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcK8(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.L(E.kq.j(0.85),B.r,1.6)
s=A.az(n,A.q(n,D.c14,B.f,n,n,new A.p(B.w.j(0.3),n,A.L(E.kq.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgS(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.L(E.kq.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bJw,A.q(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.foL,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.n),n,n,n,n,B.hd,n,n,n)],l),B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.c7_,B.n),n,n,n,Aw.O1,D.bBn,n,n,n)
if(o.e)k=D.af8
else k=k.length===0?D.bch:A.cs(new C.dgT(k))
return A.c4(n,D.Z6,new A.an(B.a0,n,B.b3,B.t,A.a([D.aQ8,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGK(d){var w,v,u=this,t=null,s=u.baK(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.ev(B.A,new A.a5(300,420,new C.ZV(d.b,s,r,t),t),B.f,B.dB),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.az(t,A.q(t,D.c0n,B.f,t,t,new A.p(B.w.j(0.55),t,A.L(B.aU,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgK(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fok,t,t,t)
v=r===1?"page":"pages"
return A.az(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a0,t,B.ab,B.t,p,t),t),B.T,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.n(t,t,D.kM.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgL(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KS.prototype={}
C.ZV.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zO,new C.cP6(m),new C.cP7()),j=m.c,i=D.DK.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mr:B.bb
v=new C.cP8(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.enW,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.be8(j.x,h,l),B.az),0,0,0),A.ap(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amM,8,0.85,2.2),v.$4(D.bGj,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amM,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bGf,A.b4(l,l,l,new C.be_(h,l),B.az),l),0,0,0))
r=A.X(D.aBz[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.n(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayO,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.n(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cH,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.n(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bGK,A.x(o,B.l,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aIz(l),D.fdP),l,l,l,46,0,l))
return A.q(l,A.by(D.adM,new A.an(B.a0,l,B.ab,B.t,t,l),B.aq),B.f,l,l,new A.p(l,l,l,D.adM,i,new A.a8(B.aA,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.be8.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e5()
g.d_(11)
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
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.N(new A.o(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.Q()
l=A.a([],n)
j=new A.aG(m.r,B.ai,null,null,l)
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
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
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
C.be_.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.Q(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bu
for(w=e.a,v=e.b,v=[D.f3r,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.ai,null,null,s)
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
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=i.j(0.9).gp(0)
d.N(new A.o(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uU.prototype={}
C.a_d.prototype={
S(){return new C.be6()}}
C.be6.prototype={
goq(){var w=this.d
return w===$?this.d=this.a.c:w},
gz3(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aR),$.aw())}return v},
gaD8(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aR),$.aw())}return v},
gasL(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aR),$.aw())}return v},
t(){var w=this,v=w.gz3(0),u=v.U$=$.aw()
v.P$=0
v=w.gaD8()
v.U$=u
v.P$=0
v=w.gasL()
v.U$=u
v.P$=0
w.a3()},
ato(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jw(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d7K(this,f,u),e===u,s,s,s,s))}return A.bV(B.bG,r,B.bs,s,6,8)},
az8(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lV,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goq(),a0=f.gz3(0),a1=a0.a.a,a2=f.gaD8(),a3=a2.a.a,a4=f.gasL(),a5=d.bfr(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,A.ev(B.A,new A.a5(270,370,new C.ZV(a5,d,f.a.e,e),e),B.f,B.dB),e),e,e,e)
a0=A.aM(e,B.a_,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.az8("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d88(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.a_,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.az8("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d89(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zO[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aU
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bH(o,o,o,o),e,e,new A.a8(B.aA,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.az(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8a(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bV(B.bG,v,B.bs,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eL:B.L,2,B.r,-1)
q.push(A.az(e,A.q(e,A.X(D.aBz[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bH(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8b(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bV(B.bG,q,B.bs,e,8,8)
a4=A.aM(e,B.a_,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.az8("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8c(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vD,e,e,e)
m=A.a([],w)
for(l=D.DK.gdO(D.DK),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eL:B.aU
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.az(e,A.x(A.a([j,B.bH,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8d(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bV(B.bG,m,B.bs,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vD,e,e,e)
k=f.goq()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cP(new A.aY(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fU0,B.af,d,B.aQ,a0,B.X,a2,B.aB,D.h_d,B.T,v,B.aB,D.fU9,B.T,q,B.aB,a4,B.aB,p,B.T,m,B.aB,l,A.kY(e,9,""+B.i.V(f.goq().f),36,18,new C.d8e(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vD,e,e,e),B.an,f.ato(D.a6q,f.goq().r,new C.d8f(f),D.dCn),B.af,A.d("BORDER",e,e,e,e,e,e,M.vD,e,e,e),B.an,f.ato(D.a5L,f.goq().w,new C.d8g(f),D.dCt),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vD,e,e,e),B.an,f.ato(D.a5H,f.goq().x,new C.d8i(f),D.dDZ),B.an,A.iQ(e,B.b8,e,B.ag,e,new C.d8j(f),e,e,e,D.fO7,f.goq().z),B.bz,A.bJ(D.fSF,e,new C.d8k(f,a6),A.bp(B.b8,e,e,e,e,B.oV,e,e,new A.b9(A.l(16),B.a1),e,e,e))],w),e,e,Z.amh,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIz.prototype={
a5(d,e){var w,v,u,t=new A.aG($.Q().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bv())
u=A.K()
u.sav(D.c7F.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bjt.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.Q()
w=A.K()
w.sav(D.c6G.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.i.cL(a1/112)
u=new A.e5()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d7V[u.az(9)]
j=u.az(14)
J.bo(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bn(i,B.hA)
g=new A.ao(B.O,B.M,B.R,B.S,B.Q)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a7,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.am(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=E.kq.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=E.kq.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.sav(D.c63.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.w.j(0.5).gp(0)
p.y=B.kU
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bg4.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.bY(B.A,0.5,B.x,d,0,A.a([D.boj.j(0.22),B.L],w),d,d).aK(0,A.bX(new A.o(t,a1),a0)))
a4.N(new A.o(t,a1),a0,a3)},
aD(d){return!1}}
C.bch.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kU(new A.p(A.ar(D.kM,D.btn,w/4),o,new A.bH(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LP,o,o,B.n),B.bj,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLJ,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.kq.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.q(o,A.x(t,B.l,o,B.qV,B.j,0,B.p),B.f,o,o,new A.p(o,o,o,D.b4u,u,D.c7D,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dv,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aIz(o),D.fdK),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWs(p.y,r,L.j_,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.n(o,o,L.j_.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fD5,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.n(o,o,L.j_.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.n(o,o,L.j_.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.ftJ,!0,B.a5,B.AG,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fCY,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.n(o,o,L.j_.j(0.5),o,o,o,o,o,o,o,o,11,B.cH,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.A(A.a([A.E(A.q(o,o,B.f,D.G5.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fI,A.d("\u2766",o,o,o,o,o,o,A.n(o,o,D.G5.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.G5.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.n(o,o,L.j_.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Z9(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fwV,B.a.aB(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.n(o,o,L.j_.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ce(A.x(n,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hW,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.n(o,o,L.j_.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.by(B.LP,new A.an(B.a0,o,B.ab,B.t,A.a([t,new A.D(D.bFM,A.x(s,B.al,o,B.e,B.j,0,B.p),o),A.ap(0,A.c2(o,new A.p(o,o,o,o,o,new A.a8(B.a7,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bj),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.p(o,o,o,B.LP,v,D.c89,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,o,o))
return new A.an(B.a0,o,B.ab,B.t,l,o)}}
C.alY.prototype={
S(){return new C.alZ(new A.eA(0,$.aw()),new C.bT8(),new C.amg(),D.hBJ,null,null)},
gd1(){return this.d}}
C.a1T.prototype={
a7(){return"_Step."+this.b}}
C.alZ.prototype={
gCv(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE8(w.c,6,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N5(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gTV(){var w=this.ghb(0)
return w.gzo()==null?"Babu":B.a.i(w.gzo().b)},
Y(){var w,v=this
v.a4()
w=v.ghb(0).gzo()
w=w==null?null:w.c
v.r.b=w===D.ot
w=v.q_(new C.bRu(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2z("Come closer, my children. I am "+v.gTV()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.U$=$.aw()
v.P$=0
w.bw6()},
a2z(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.df(D.akS,new C.bRo(w))},
bst(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRx(v))},
adU(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsl(){return this.bah()},
bah(){var w=this,v=w.gCv()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRp(w))
w.a2z(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.m9,new C.bRq(w))},
cLi(){var w=this
w.m(new C.bRt(w))
w.a2z(w.gCv()[w.as].a)},
L5(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acX)return
w=p.gCv()
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
t.r=s.a+1.5}q=new A.e5()
q.d_(v*7+d)
p.m(new C.bRs(p,d,u,q))
p.a2z(u?D.dnH[q.az(4)]+" "+w[p.as].d:D.dkg[q.az(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCv()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGo(t.at,t.ay,p)
t.m(new C.bRv(t,s))
t.a2z(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BV(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BW(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRw())
w=1
break
case 4:++t.as
t.bah()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.Yc,new A.an(B.a0,v,B.ab,B.t,A.a([A.bR(0,new A.en(A.b4(v,v,v,new C.aWx(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cbZ(0),B.b5,w.bRB()],t),B.l,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cbZ(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.PW,s,s,s,new C.bRr(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCv().length;++w){v=t.as
if(w<v||t.Q===D.b0P)v=B.cO
else v=w===v?B.c:B.aU
u=new A.aN(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bB6,s,s,s,22))}p=A.E(A.x(A.a([D.fKR,A.A(p,B.l,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.l(14)
u=A.L(B.fp,B.r,1)
return new A.D(D.bGX,A.A(A.a([r,p,A.q(s,A.d("\ud83d\udd25 "+B.i.V(t.cy*100)+"%",s,s,s,s,s,s,B.iC,s,s,s),B.f,s,s,new A.p(B.aV,s,u,v,s,s,B.n),s,s,s,s,B.hd,s,s,s)],q),B.l,s,B.e,B.j,0,s,s),s)},
bRB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzo()
if(h==null)w=1
else w=h.c===D.ot?0:1
v=j.dx
u=j.db
t=D.qk.j(0.96)
s=A.l(22)
r=A.L(B.cO,B.r,3)
q=A.b4(i,i,i,new C.bp3(w,i),B.az)
p=A.d(j.Q===D.acX?j.gTV()+" asks":"Elder "+j.gTV(),i,i,i,i,i,i,D.aVf,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.az(B.c3,A.A(A.a([new A.a5(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bH,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aVt,i,i,i)],n),B.E,i,B.e,B.j,0,B.p),1)],n),B.E,i,B.e,B.j,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbss(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aa0("Sit down by the fire",j.gbsk()),i,i,i)
break
case 1:v=A.as(j.aa0("Ask me, Elder",j.gcLh()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCv()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.az(i,A.q(i,A.d(u[m],i,i,i,i,i,i,D.aVp,B.K,i,i),B.f,i,D.aen,new A.p(D.ajR,i,new A.bH(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,U.wn,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRl(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bV(B.bG,v,B.bs,i,8,8)
break
case 3:v=j.fr
u=v?B.k7:Ak.apO
u=A.X(u,v?B.eq:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.n(i,i,v?B.eq:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCv().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aa0(v,j.gqm(j))],n),B.l,i,B.e,B.j,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCv().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVI,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQP(u)
q=C.aQP(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abn,i,i,i))}v.push(B.T)
v.push(j.aa0("Back to the games",new C.bRm(j)))
v=A.x(v,B.l,i,B.e,B.j,0,B.p)
break
default:v=i}return A.q(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aD8,i,B.n),i,i,i,B.yE,B.bh,i,i,i)},
aa0(d,e){var w=null,v=A.l(16),u=A.L(B.cO,B.r,2)
return A.az(w,A.q(w,A.d(d,w,w,w,w,w,w,A2.KG,w,w,w),B.f,w,w,new A.p(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bEE,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bp3.prototype={
a5(d,e){X.fWf(d,e.ei(B.H),e.gdA()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aBz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bT8.prototype={}
C.tg.prototype={}
C.bp4.prototype={}
C.amg.prototype={
Mx(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.icZ(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWx.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zn(l.d.Mx(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bo(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAM(d,j)
l.bQ9(d,j)
l.cJ3(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bo(t.save())
t.translate(225,580)
d.pj(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.Q()
q=A.K()
p=x.O
o=x.n
q.sav(A.wf(B.H,r,A.a([D.bsb.j(0.55*s),F.Ni.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.H,r,q)
t.restore()
n=A.a([new A.y(528,new C.bT0(l,d,j,i)),new A.y(540,new C.bT1(l,d,j,i)),new A.y(546,new C.bT2(l,d,j,i)),new A.y(574,new C.bT3(l,d,j,i)),new A.y(612,new C.bT4(l,d,j,i)),new A.y(650,new C.bT5(l,d,j,i)),new A.y(656,new C.bT6(l,d,j,i))],x.E)
B.d.aZ(n,new C.bT7())
for(m=0;m<7;++m)n[m].b.$0()
l.bH2(d,j,i)
l.bTO(d,j)
t.restore()
$.Q()
t=A.K()
t.sav(A.wf(new A.o(w/2,v*0.6),e.gao9()*0.75,A.a([B.L,D.bfZ],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cAM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e5()
h.d_(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=t.gp(0)
d.N(new A.o(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.o(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.enu),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.Q()
k=A.a([],t)
l=new A.aG(l.r,B.ai,null,null,k)
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
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.b=B.a9
s.c=1.6
s.r=D.biH.gp(0)
s.d=B.bu
s.e=B.dQ
d.af(l,s)}},
bQ9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aA5[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.o(p,m),n*0.74,q*0.5)
k=Aa.yp.j(v)
$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.o(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=Q.y2.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=D.ahb.j(0.16*(1-h)).gp(0)
d.N(new A.o(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJ3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDx(d,D.enq,0.9,e,D.hx2,!1,!1,D.b0M,1,!1)
w=$.Q().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bv())
t=A.K()
t.r=D.aj9.gp(0)
d.af(u,t)
C.bDx(d,D.ens,0.95,e,D.hwY,!1,!1,D.b0N,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c6(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c6(431,553,421,548))
t.E(new A.bv())
u=A.K()
u.r=F.FO.gp(0)
d.af(t,u)
u=A.bs(D.enr,8,28)
t=A.K()
t.r=D.bus.gp(0)
d.bZ(u,t)
C.bDx(d,new A.o(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hx3,!0,!1,D.X4,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.o(s+q*16,r-6),16,11),C.iw(D.aj0,1.8))
u=q<0
C.bDx(d,new A.o(s-q*6,r),0.62,e,D.hx5,!1,u,D.X4,2.2,!1)
C.bDx(d,new A.o(s-q*32,r+4),0.58,e+1,D.hx1,!1,u,D.X4,2.2,!1)
this.bWx(d,D.en5,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.o(o,n),8,11)
k=p===1
j=k?D.aiX:D.ajz
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.aiX:D.ajz
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=l.gp(0)
d.N(new A.o(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bu
k.e=B.dQ
d.ah(new A.o(o+7.5,n+(-2+m)),new A.o(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bu
k.e=B.dQ
d.ah(new A.o(o,n+4),new A.o(o,n+8),k)}h=e<f.f
u=A.bs(D.a8p,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahA.gp(0)
d.bZ(u,t)
u=A.bs(D.a8p.a2(0,new A.o(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bkL.gp(0)
d.bZ(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bv())
u=A.K()
u.r=D.bkV.gp(0)
d.af(t,u)
u=D.a8p.a2(0,new A.o(-17,h?-9:-2))
t=A.K()
t.r=B.ib.gp(0)
d.N(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c6(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahA,3.5))},
bWx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a2(0,new A.o(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.b=B.a9
m.c=2
m.r=D.Yo.gp(0)
m.d=B.bu
m.e=B.dQ
d.ah(new A.o(u+o,s),new A.o(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.Q()
r=A.K()
r.r=D.FM.gp(0)
d.bZ(w,r)
r=A.bs(k.a2(0,D.emx),7,26)
w=A.ar(D.FM,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aG(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bv())
s=A.K()
s.r=D.FM.gp(0)
d.af(v,s)
s=A.bs(k.a2(0,new A.o(24,-7+l)),9,12)
v=A.K()
v.r=D.FM.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a2(0,new A.o(22,v)),k.a2(0,new A.o(21,-17+l)),C.iw(D.Yo,1.6))
d.ah(k.a2(0,new A.o(26,v)),k.a2(0,new A.o(28,-16+l)),C.iw(D.Yo,1.6))
v=k.a2(0,new A.o(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a2(0,new A.o(26,-3+l)),k.a2(0,new A.o(26,1+l)),C.iw(D.bnC,1.4))
d.ah(k.a2(0,D.ept),k.a2(0,new A.o(-19,-7+Math.sin(f*7)*2)),C.iw(D.FM,2.4))},
bTM(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.o(225+u*36,574+(t*13+6)),8,11)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.bt9.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a8s.a2(0,B.cA),17,52)
$.Q()
t=A.K()
t.r=D.bfw.gp(0)
a6.bZ(u,t)
t=A.bs(D.a8s.a2(0,B.cA),12,44)
u=D.bj4.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.djJ[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=7
o.r=D.FZ.gp(0)
o.d=B.bu
o.e=B.dQ
a6.ah(new A.o(u+t*24,579+s*4),new A.o(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Bz.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bu
n.e=B.dQ
a6.ah(new A.o(u+o*24,579+(p*4-2)),new A.o(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f_C,D.f0b,D.f1g,D.f1A,D.f1e]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bqA,D.bmY,D.bsA][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.Q()
f=A.a([],q)
a2=new A.aG(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kT(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kT(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bv()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ao(B.O,B.M,B.R,B.S,B.Q)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajx.j((1-a5)*0.9)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.r=p.gp(0)
a6.N(new A.o(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahb.j(0.1*(1-a5))
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=q.gp(0)
a6.N(new A.o(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTO(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.buC.j(0.18*p)
$.Q()
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=o.gp(0)
d.N(new A.o(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.r=D.boo.j(0.9*p).gp(0)
d.N(new A.o(r,q),1.4,n)}},
c5v(d,e){switch(d){case 0:return e.b?D.hwZ:D.b0k
case 1:return e.b?D.hx4:D.b0i
case 2:return D.b0h
case 3:return D.b0g
case 4:return D.b0j
default:return D.b0l}},
aDm(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R9(d,e,f,g){var w,v=this,u=D.a5T[e],t=v.c5v(e,g),s=new C.bp4(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5T[e],l=e===0
m=B.i.D(((l?D.aLC:D.aLH).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8w
s.as=D.Ea
if(l){s.a=o?v.aDm(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.o(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.o(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Ea
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.emF
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eo_
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
s.Q=D.eqp
s.as=D.aLU}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDm(f,5)
s.b=0.4
s.as=new A.o(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDm(f,e*3)
s.b=0.5
s.c=0.4}}C.hzQ(d,u.a,u.b*1.2,t,s,f,e,null)},
bH2(d,e,f){var w=new C.bT_(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.ag2.prototype={
a7(){return"_Stand."+this.b}}
C.ae0.prototype={}
C.ls.prototype={}
C.bRK.prototype={
bBE(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G9(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRL())
return r},
arp(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN4(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amy(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzo(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRM(this))
return B.d.gH(w)}}
C.aue.prototype={}
C.zH.prototype={}
C.akS.prototype={
gC1(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bMy(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.I(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MP.prototype={
gapr(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gC1(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.I(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.I(["id",this.a,"title",q,"qs",p],u,t)},
d1x(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapr(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ls(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.baw.prototype={}
C.aa5.prototype={}
C.bhM.prototype={}
C.ag0.prototype={}
C.aka.prototype={
S(){return new C.akb(B.bE,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akb.prototype={
gMO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE8(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gbaD(){var w,v=this,u=v.e
if(u===$){w=v.q_(v.gcc0())
v.e!==$&&A.bD()
v.e=w
u=w}return u},
Y(){this.a4()
this.gbaD().fX(0)},
t(){this.gbaD().t()
this.bw1()},
fX(d){this.m(new C.bKI(this))},
cc1(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKD())},
b8Z(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMO()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhM(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bKJ())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8l()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMO()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asX(v,0.8,B.cO)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asX(m.cy,0.8,G.no)
m.aZB("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asX(q,0.88,D.lB)
p=m.gMO()[m.x]
n=p.c
if(u===n){m.aZB("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asX(d,e,f){var w,v,u,t=new A.e5()
t.d_(B.i.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ag0(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZB(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qi()}},
c8l(){var w=this
if(w.x+1>=w.gMO().length){w.Qi()
return}++w.x
w.b8Z()},
Qi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMO().length
r=C.bGo(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKB())
w=2
return A.b(C.BV(u.a.d,r),$async$Qi)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BW(t.d,t.c.a,"catch",u.z),$async$Qi)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKC())
return A.h(null,v)}})
return A.i($async$Qi,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cc_()
else w=v.ch?v.cc2():A.as(new A.D(B.ez,A.x(A.a([D.aWF,B.T,D.fMx,B.X,D.fSK,B.e0,C.ux("Play",v.geY(v),B.cO,B.hx,D.fz)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tH("Calabash Catch",w,B.f6,u)},
cc2(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hK:B.Hx
p.push(A.X(u,v?B.ay:B.bW,r,r,r,22))}p.push(B.b5)
v=s.x
u=s.gMO()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aVe,r,r,r))
p.push(B.bd)
v=A.l(14)
p.push(A.q(r,A.d(""+s.z,r,r,r,r,r,r,B.iC,r,r,r),B.f,r,r,new A.p(B.bA,r,r,v,r,r,B.n),r,r,r,r,B.GK,r,r,r))
p=A.A(p,B.l,r,B.e,B.j,0,r,r)
v=A.l(18)
t=A.L(B.cO,B.r,3)
return A.x(A.a([new A.D(D.bCs,p,r),A.q(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fwN,B.K,r,r),B.f,r,r,new A.p(D.qk,r,t,v,r,r,B.n),r,r,r,B.f3,B.bh,r,r,1/0),B.an,A.E(A.cs(new C.bKH(s)),1)],q),B.l,r,B.e,B.j,0,B.p)},
cc_(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pX,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMO().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vr,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bcZ,u,t,B.aQ,new C.Ix(s,r,w.cx,v),B.aQ,A.as(C.ux("Back to the games",new C.bKA(w),B.cO,B.k6,D.fz),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bcX.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.Q(),a3=A.K()
a3.sav(A.jz(B.H,new A.o(0,a0),D.d1Q,G.aAn,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Nm.gp(0)
a4.N(new A.o(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.ai,e,e,w)
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
w.r=D.bk_.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.ai,e,e,A.a([],a3))
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
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cnz[q]
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.age.gp(0)
s.c=7
s.d=B.bu
a4.ah(new A.o(r,a2),new A.o(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.afA.gp(0)
a4.N(new A.o(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bkT.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.ahS.gp(0)
t.c=2
a4.ah(new A.o(w,a1),new A.o(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.J)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bs(new A.o(u,s),12,54)
$.Q()
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.lB.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bo(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.agW.gp(0)
a4.N(D.elU,14,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.bpB.gp(0)
m.c=4
m.d=B.bu
a4.ah(D.elV,D.en1,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.sav(new A.alJ(D.epa,46,D.dao,B.Dt,B.x,e,e,0))
a4.N(B.H,34,m)
m=A.bs(D.eph,8,12)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iH(new A.eo(n.c,e,e,B.cJ,e,e,e,e,e,e,D.fuE),B.K,B.bX,new A.jg(1),e,e,3,e,B.bY,e,B.cs)
k.o6(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bn(A.bs(B.cL,m.gba(m)+8,l),B.fM)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.qk.gp(0)
a4.am(j,l)
l=new A.ao(B.O,B.M,B.R,B.S,B.Q)
l.r=D.lB.gp(0)
l.b=B.a9
l.c=1.5
a4.am(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.o(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
X.Bo(a4,new A.o(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dK,F.mU,!1,(w+1)/2)
h=A.bs(new A.o(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.Q().r,B.ai,e,e,A.a([],a3))
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
m.r=D.Zd.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.Bz.gp(0)
m.c=1.4
a4.ah(new A.o(t,a2),new A.o(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.no.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bk5.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.N(new A.o(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fq(e,B.cs,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.n(e,e,B.cO.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Dn,e,e),"+"+a2),B.a5,B.bX,e,B.dz,B.bY)
k.e5()
k.a5(a4,new A.o(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.QM.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBx(w.c,w.f,v),B.az),s=A.l(10),r=A.L(B.bD,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cU,A.q(v,A.d(w.d,v,1,B.a2,v,v,v,D.fnc,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n0,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
gZ(d){return this.e}}
C.aBx.prototype={
a5(d,e){var w=e.ei(B.H),v=e.gdA(),u=this.c?0.8:0
return X.fWf(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aA1.prototype={}
C.auQ.prototype={
S(){return new C.auR(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auR.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hF7(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gaFp(){var w=this.z
return w===$?this.z=this.Xl(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c_(w,-1,!1,x.S)}return v},
Xl(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aA1(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aA1(v[t],u[t],-1))
v=new A.e5()
v.d_(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eO$
u.b=!1
B.d.a8(u.a)
u=u.gox()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qD()}this.bwu()},
cRo(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFp()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cq9(r,e,w,v))
A.cy(B.lH,new C.cqa(r))
return}++r.r
u=A.bl(null,B.hG,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqb(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.cqc())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqd(t,r))
w=5
return A.b(C.BV(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BW(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqe())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eO$
p.b=!1
B.d.a8(p.a)
p=p.gox()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qD()}o.a8(0)
t.m(new C.cqf(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pX,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vr,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tH(q,A.cl(A.a([D.af6,w,v,B.aQ,new C.Ix(u,t,r.ch,p),B.aQ,A.as(C.ux("Back to the games",new C.cq5(d),B.cO,B.k6,D.fz),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.f6,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tH(q,new A.D(B.uu,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aV9,B.K,p,p),A.E(A.cs(new C.cq6(r,s)),1)],x.p),B.l,p,B.e,B.j,0,B.p),p),B.f6,p)}}
C.bcq.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQa(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a2(0,B.Jw)
$.Q()
w=A.K()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a2(0,D.elH)
u=A.K()
u.r=B.oj.j(0.5).gp(0)
u.c=10
u.d=B.bu
b6.ah(new A.o(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dH.aA(0,B.i.D(b2[p],0,1))
l=$.Q().r
k=A.a([],s)
j=new A.aG(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.c6((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),i=new A.ry(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jI(b1));--h
g=new A.BT(i,h)
f=0
for(;;){i.iy()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.iy()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.Q()
a1=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a1.r=B.aU.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aG(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),k=new A.ry(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jI(b1));--a0
k.iy()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.Q()
a4=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a4.r=D.Gb.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bu
b6.af(new A.aG(l,a2,b0,new A.cu([new A.BT(k,a0),0,a1*m,!0]),a3),a4)
k.iy()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iy()
a5=n[a0].Dg(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.o(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a3.r=B.b4.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iH(D.fmG,B.a5,B.bX,new A.jg(1),b0,b0,b0,b0,B.bY,b0,B.cs)
a8.e5()
a8.a5(b6,new A.o(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.ayN.prototype={
S(){return new C.ayO(A.aR(x.S))},
gd1(){return this.d}}
C.ayO.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hG1(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
Y(){this.a4()
this.b97()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b97(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.df(B.rR,new C.cF7(this))},
bq3(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cFf(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFg(v,d))
A.cy(B.iM,new C.cFh(v))}},
cWR(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cFi(w))},
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
t.m(new C.cFj(t,s))
w=5
return A.b(C.BV(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BW(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFk())
w=1
break
case 4:t.m(new C.cFl(t))
t.b97()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.pX,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vr,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tH(a1,A.cl(A.a([D.bda,w,v,B.aQ,new C.Ix(u,t,a0.ax,a2),B.aQ,A.as(C.ux("Back to the games",new C.cF9(a3),B.cO,B.k6,D.fz),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.f6,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KO,B.K,a2,a2),B.X,A.as(A.lC(new C.cFa(a0,r),a2,B.b1,B.hG,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cO,2,B.r,-1)
k=o+1
w.push(new A.r6(new A.br(0,1,u),new C.cFb(),A.q(a2,new A.c8(B.aL,B.e,B.j,B.l,a2,B.p,a2,0,A.a([new A.qH(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nY,a2,a2,a2),D.lB,a2,12,a2),B.au,new A.bz(1,B.bc,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fzn,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.qk,a2,new A.bH(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cx,B.bh,a2,a2,a2),B.b1,B.iM,a2,new A.bE("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bN(!1,D.h_E,a2,a2,!0,a2,a2,a2,a0.gcWQ(),a2,a2),a2,a2,a2))
w.push(B.T)
if(a0.as){u=D.lC.j(0.2)
q=A.l(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fP,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.x(A.a([m,B.X,C.ux(v,a0.gqm(a0),B.cO,B.jH,D.fz)],t),B.l,a2,B.e,B.j,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dl:B.cO.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fh:B.cO,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xi:a2
t.push(new A.r6(new A.br(0,i,u),new C.cFc(),A.az(a2,A.q(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aeg,new A.p(h,a2,new A.bH(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jo,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFd(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b1,B.mb,a2,new A.bE("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bV(B.fR,t,B.bs,a2,10,10))}return new C.tH(a1,A.cl(w,a2,a2,B.alR,a2,a2,B.ah,!1),B.f6,a2)}}
C.azN.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aGZ.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.afP.prototype={
aqX(d){},
art(){var w=this,v=w.q_(new C.f6Z(w))
v.fX(0)
w.LX$!==$&&A.aQ()
w.LX$=v}}
C.aKM.prototype={
gbmv(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
VV(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.df(D.akS,new C.fh7(w))},
bsr(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.am6.prototype={
S(){return new C.am7(new C.amg(),A.a([],x.t),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am7.prototype={
gMM(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE8(w.c,10,w.e,!0)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N5(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqu(){var w=this.r
return w===$?this.r=new C.aKM(new C.bSw(this)):w},
gapN(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMM()[v].c)u.push(1)
return u.length},
gblP(){var w=this.ghb(0)
return w.gzo()==null?"Elder":B.a.i(w.gzo().b)},
Y(){this.a4()
this.art()},
t(){var w,v=this
v.gqu().t()
v.f.t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q8$
w.U$=$.aw()
w.P$=0
v.bw9()},
cLu(){var w=this
w.m(new C.bSt(w))
w.gqu().VV(w.gMM()[w.x].a)},
L5(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqu()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q8$.a
v.ax=u
v.ay=u+1
v.m(new C.bSr())
A.cy(B.hG,new C.bSs(v))},
bq_(){var w=this.gapN(0)/this.gMM().length*100
if(w>=90)return D.eXs
if(w>=75)return D.eVu
if(w>=60)return D.eM9
if(w>=45)return D.ePA
return D.eGz},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cu0()
w=A.bR(0,new A.en(A.b4(m,m,m,new C.bt6(n,n.q8$),B.az),m),0,0,0)
if(!n.Q){v=D.qk.j(0.96)
u=A.l(20)
t=A.L(B.cO,B.r,3)
u=A.q(m,A.x(A.a([A.d("Elder "+n.gblP()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aW2,B.K,m,m),B.X,C.ux("Start the test",n.gBS(),B.cO,B.j3,D.fz)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.n),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gMM()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aW4,m,m,m)
if(n.Q){t=n.gqu()
t=t.d<t.c.length}else t=!1
if(t)u=D.ff9
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.Bz,4,B.r,-1)
s.push(A.az(m,A.q(m,A.d(q[r],m,m,m,m,m,m,D.fqs,B.K,m,m),B.f,m,D.aeg,new A.p(D.bg3,m,new A.bH(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.O8,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSu(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bV(B.fR,s,B.bs,new A.bE("o"+t,x.W),8,8)}u=A.x(A.a([v,B.an,A.oz(u,B.mV,A.pV(),B.b1,B.b1,A.LH())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tH("Village School",new A.an(B.a0,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f6,m)},
cu0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bq_(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMM()[v].c)g.push(v)
u=A.l(22)
t=A.L(B.cO,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fuX,B.K,i,i)
r=A.d("Signed by Elder "+j.gblP(),i,i,i,i,i,i,D.ftB,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fyI,i,i,i),D.eyu],q)
o=A.d(h.b,i,i,i,i,i,i,D.fAE,i,i,i)
n=j.gapN(0)
m=j.gMM()
u=A.q(i,A.x(A.a([D.fLM,B.ax,s,r,B.X,new A.an(B.A,i,B.ab,B.t,p,i),o,B.an,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abn,i,i,i),B.T,D.asF],q),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(D.qk,i,t,u,i,i,B.n),i,i,i,i,B.fs,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Ix(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.h0I,B.T],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.bA,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h_,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fw6,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fyk,i,i,i)],q),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.dl,i,new A.bH(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cx,B.bh,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.as(C.ux("Back to the games",new C.bSn(j),B.cO,B.k6,D.fz),i,i,i))
return new C.tH("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f6,i)}}
C.bt6.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q8$.a
a0.zn(e.f.Mx(a1))
w=C.hcJ(a1)
v=a0.c
J.bo(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqu()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cX9[s]-6
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=D.FZ.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bn(D.a9q.cn(10),B.i2)
$.Q()
r=A.K()
r.r=D.Bz.gp(0)
a0.am(u,r)
r=A.bn(D.a9q,B.hR)
u=A.K()
u.sav(A.jz(new A.o(30,96),new A.o(420,346),D.dfI,f,B.x,f))
a0.am(r,u)
q=new A.e5()
q.d_(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bs(new A.o(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.K()
u.r=I.aiH.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aP.gp(0)
a0.ar(D.f6y,u)
u=A.K()
u.r=B.bM.gp(0)
a0.ar(D.f6C,u)
u=A.bn(D.f6s,B.hQ)
r=A.K()
r.r=D.Zd.gp(0)
a0.am(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqu().gbmv(0)
m=A.fq(f,B.cs,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fCR,u+(t?"|":"")),B.a5,B.bX,f,B.dz,B.bY)
m.o6(346)
J.bo(v.save())
u=A.hU(D.a9q)
r=$.mh()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hU(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.o(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bn(new A.a1(u,r,u+40,r+90),B.fM)
u=A.K()
u.r=D.bvo.gp(0)
a0.am(r,u)}}else{m=A.fq(f,B.cs,f,f,f,D.fmW,B.K,B.bX,f,B.dz,B.bY)
m.o6(340)
m.a5(a0,new A.o(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqu().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.o(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzo()
i=(u==null?f:u.c)===D.ot?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f7_(d,a0,i,t,h,D.emR)),new A.y(520,new C.f70(a0,d,t)),new A.y(575,new C.f71(a0,d,t)),new A.y(585,new C.f72(this,a0,d,t)),new A.y(615,new C.f73(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f74())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cc3(d,e){var w,v,u,t,s,r,q,p=$.Q(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
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
C.am4.prototype={
S(){return new C.am5(new C.amg(),A.T(x.S,x.i),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am5.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hEW(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FI(0):w},
gaLF(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FI(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FI(0):r).length);++v}s.Q=w
r=w}return r},
FI(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e5()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bS9())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a4()
this.art()},
t(){var w,v=this
v.e.t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q8$
w.U$=$.aw()
w.P$=0
v.bw8()},
aqX(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FI(0):u,v)
s=r.gaLF()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLF()[v])*Math.min(1,w)}},
d1c(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bSk(v,d))
return}if(w===d){v.m(new C.bSl(v))
return}v.m(new C.bSm(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cMb(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FI(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FI(0):u)[v]]===v);++v}s.m(new C.bSf(s,B.d.cD(w,new C.bSg())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSh(t,s))
w=5
return A.b(C.BV(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BW(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSi())
w=1
break
case 4:t.m(new C.bSj(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.pX,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tH("Line Up",A.cl(A.a([D.af6,w,B.aQ,new C.Ix(v,u,l.ch,k),B.aQ,A.as(C.ux("Back to the games",new C.bSb(d),B.cO,B.k6,D.fz),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.f6,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bSc(l))
u=A.bR(0,A.cs(new C.bSd(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aW4,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fvn,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fxy,B.K,k,k)],q),B.l,k,B.e,B.j,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.L(n?D.lC:G.no,B.r,2)
r.push(A.q(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSe(l),x.cM).aO(0,", then ")+".",k,k,k,k,k,k,D.fzK,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bh,k,k,1/0))}if(!l.at)r.push(C.ux("That is my line!",l.gcMa(l),B.cO,B.hJ,D.fz))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ux(w,l.gqm(l),B.cO,B.jH,D.fz))}return new C.tH("Line Up",new A.an(B.a0,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.f6,k)}}
C.bjB.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q8$.a
c7.zn(c5.e.Mx(c8))
w=C.hcJ(c8)
v=c7.c
J.bo(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.Q().r
s=x.v
r=new A.aG(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c6(225,500,440,470))
q=A.K()
q.r=D.Zd.gp(0)
q.b=B.a9
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.ai,c4,c4,l)
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
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=[B.cO,G.no,D.lC,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1d(c7,"OLDEST",D.enP,B.cO)
this.b1d(c7,"YOUNGEST",D.enh,B.b4)
t=A.bn(D.f6m,B.fM)
s=A.K()
s.r=D.FZ.gp(0)
c7.am(t,s)
s=A.bn(D.f6l,B.hR)
t=A.K()
t.r=D.Bz.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.drv())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FI(0):a1,f)
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
a9=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a9.r=B.cO.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.o(o,520),54,a9)}a9=D.djx[B.o.F(b0,6)]
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
else b9=a3?D.epW:c4
if(b1)c0=new A.o(3+b2*8,-56)
else if(h&&a7)c0=D.aLU
else c0=a3?new A.o(30,-104+Math.sin(e)*5):c4
C.SF(c7,new A.o(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Jy,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iH(new A.eo(a8,c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.ft6),B.a5,B.bX,new A.jg(1),"\u2026",c4,1,c4,B.bY,c4,B.cs)
c1.o6(q)
c2=A.bn(A.bs(new A.o(o,650),24,c1.b.c+16),B.fM)
$.Q()
a8=new A.ao(B.O,B.M,B.R,B.S,B.Q)
if(a6)a9=B.i9
else a9=a7?B.rL:D.qk
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.S,B.Q)
if(a6)a9=D.lC
else a9=a7?G.no:D.lB
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.am(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.o(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iH(new A.eo(""+(a2+1),c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.ftq),B.a5,B.bX,new A.jg(1),c4,c4,c4,c4,B.bY,c4,B.cs)
c3.e5()
c3.a5(c7,new A.o(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bo(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.H,4,8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=[B.cO,G.no,D.lC,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b1d(d,e,f,g){var w,v,u=null,t=A.fq(u,B.cs,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.n(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Dn,u,u),e),B.a5,B.bX,u,B.dz,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aJ(0,new A.o(v/2,w.gba(w)/2)))},
aD(d){return!1}}
C.a2b.prototype={
a7(){return"_Trip."+this.b}}
C.am0.prototype={
S(){return new C.am1(D.X9,new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am1.prototype={
gDt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE8(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N5(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqu(){var w=this.f
return w===$?this.f=new C.aKM(new C.bRW(this)):w},
gTV(){var w=this.ghb(0)
return w.gzo()==null?"Grandma":B.a.i(w.gzo().b)},
Y(){this.a4()
this.art()},
t(){var w,v=this
v.gqu().t()
w=v.LX$
w===$&&A.c()
w.t()
w=v.q8$
w.U$=$.aw()
w.P$=0
v.bw7()},
aqX(d){var w,v,u,t=this
if(t.r!==D.ad6)return
w=B.dC.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDt()
if(v+1>=u.length){t.r=D.ad7
t.WR()}else{++t.w
t.ay=!1
t.r=D.Xa
t.gqu().VV(u[t.w].a)}if(t.c!=null)t.m(new C.bRU())}},
WR(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqu().VV("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDt().length
r=C.bGo(t,u.z,s)
u.as=r
w=2
return A.b(C.BV(u.a.d,r),$async$WR)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BW(s.d,s.c.a,"journey",u.x*10),$async$WR)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRO())
return A.h(null,v)}})
return A.i($async$WR,v)},
brj(){this.aUl()},
aUl(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ad6
if(w.c!=null)w.m(new C.bRP())},
L5(d){var w,v,u,t,s=this
if(s.r!==D.Xa)return
w=s.gDt()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRT(s,d,v))
u=s.gqu()
t=s.w
u.VV(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRn(){if(this.r!==D.B7)return
this.aUl()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.en(A.b4(s,s,s,new C.bj1(t,t.q8$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDt().length;++w){v=t.w
if(w<v||t.r===D.ad7)v=B.cO
else v=w===v?B.c:B.aU
u=new A.aN(4,4)
p.push(new A.bz(1,B.bc,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wr,s,s,s,s),s))}p.push(B.bm)
p.push(D.fNq)
return new C.tH("Safari Journey",new A.an(B.a0,s,B.ab,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.j,0,s,s),s,s,12,12,2,s),A.ap(10,t.clE(),s,s,10,10,s,s)],q),s),B.f6,s)},
clE(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRS(o),l=D.qk.j(0.96),k=A.l(22),j=A.L(B.cO,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTV()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aW2,B.K,n,n),B.X,C.ux("Start the journey",o.gbri(),B.cO,D.bQ8,D.fz)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bcK
break
case 1:w=o.w
v=o.gDt()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.az(n,A.q(n,A.d(r[s],n,n,n,n,n,n,D.aVp,B.K,n,n),B.f,n,D.aen,new A.p(D.ajR,n,new A.bH(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,U.wn,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRQ(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.T,A.bV(B.bG,t,B.bs,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDt().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.T,new A.bM(B.aa,n,n,C.ux(v,o.gcRm(),B.cO,B.jH,D.fz),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTV()),B.T,A.d(""+o.x+" of "+o.gDt().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVI,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQP(v)
u=C.aQP(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abn,n,n,n))}w.push(B.T)
w.push(A.as(C.ux("Back to the games",new C.bRR(o),B.cO,B.k6,D.fz),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aD8,n,B.n),n,n,n,n,B.bh,n,n,n)}}
C.bj1.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q8$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDt(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ad6,d2=c7*0.5
c8=A.ar(D.bhw,D.brT,d0)
c8.toString
w=A.ar(D.Yq,G.ahs,d0)
w.toString
v=A.ar(B.u6,D.bql,d0)
v.toString
$.Q()
u=A.K()
t=x.O
u.sav(A.jz(B.H,new A.o(0,d2),A.a([c8,w,v],t),G.a4n,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.o(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.wf(s,60,A.a([D.bqK,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.YC.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dyK[o]
$.Q()
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.o(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.Q()
j=A.a([],m)
i=new A.aG(k.r,B.ai,c3,c3,j)
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
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=A.ar(l===0?D.bg5:D.buQ,D.bl_,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cc4(d3,new A.o(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.Q()
w=A.K()
v=A.ar(D.aj0,D.Gb,d0)
v.toString
w.sav(A.jz(new A.o(0,d2),new A.o(0,c7),A.a([v,D.bqM],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bkj.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.buw.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=I.MF.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.Q()
b2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b2.r=D.bfL.gp(0)
d3.ar(new A.a1(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.ai,c3,c3,b2)
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
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.bsJ.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b1.r=D.fz.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.FZ.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bn(new A.a1(b0,a4,b0+60,a5),B.iB)
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.bvU.gp(0)
d3.am(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.S,B.Q)
b0.r=D.Bz.gp(0)
b0.b=B.a9
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iH(new A.eo(b6,c3,c3,B.cJ,c3,c3,c3,c3,c3,c3,D.fry),B.a5,B.bX,new A.jg(1),c3,c3,c3,c3,B.bY,c3,B.cs)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.o(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.ad7
else if(r===c4.w){b0=c4.r
b0=b0===D.Xa||b0===D.B7
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzo()
b9=(b0==null?c3:b0.c)===D.ot?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqu()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B7
b0=c0?C.hBk(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xa?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.o(40,-110+Math.sin(g)*10)
else a7=c0?new A.o(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SF(d3,new A.o(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.o(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIq(d3,new A.o(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.bu0.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.X9)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B7&&c4.ax){b7=A.fq(c3,B.cs,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.n(c3,c3,B.cO,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.Iy,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dz,B.bY)
b7.e5()
b7.a5(d3,new A.o(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cc4(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bqf,D.bjC,g)
o.toString
if(f){w=new A.aG($.Q().r,B.ai,null,null,A.a([],x.v))
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
t.r=D.ZG.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d07[r]
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=D.ZG.gp(0)
p.c=4
p.d=B.bu
d.ah(new A.o(w,t),new A.o(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=o.gp(0)
d.N(new A.o(v+q*26,u),10,p)}}else{w=e.a2(0,D.epT)
$.Q()
v=A.K()
v.r=D.bfN.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a2(0,D.epU),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIq(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.X9?0.045:0,a1=a2.c
J.bo(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.drb[w]
u=d.ay&&d.r!==D.X9&&v>0
J.bo(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.Q()
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.buI.gp(0)
a2.N(B.H,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.bn3.gp(0)
a2.N(B.H,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.br.gp(0)
q.c=2
a2.ah(B.H,new A.o(s*9,t*9),q)}a1.restore()}p=A.u4(D.f6J,B.fM,B.fM,B.il,B.hP)
$.Q()
t=A.K()
t.sav(A.jz(D.elX,B.a8k,D.dh3,G.a4n,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.S,B.Q)
s.r=D.db8[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.B7&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bo(a1.save())
a1.clipRRect(A.nR(A.bn(l,B.mw)),$.nq(),!0)
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=D.Yq.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B7?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SF(a2,new A.o(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLL,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bn(l,B.mw)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=D.ajT.gp(0)
i.b=B.a9
i.c=2
a2.am(j,i)}d=A.bn(D.Ux,B.mw)
t=A.K()
t.r=D.Yq.gp(0)
a2.am(d,t)
J.bo(a1.save())
a1.clipRRect(A.nR(A.bn(D.Ux,B.mw)),$.nq(),!0)
C.SF(a2,new A.o(D.Ux.gbw().a,-10),0,0,0.7,-0.1,f,f,D.aLL,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bn(D.Ux,B.mw)
d=A.K()
d.r=D.ajT.gp(0)
d.b=B.a9
d.c=2
a2.am(t,d)
d=A.K()
d.r=Am.Gc.gp(0)
a2.N(D.eo2,4,d)
d=A.K()
d.r=D.FZ.gp(0)
a2.ar(D.f7S,d)
for(w=0;w<3;++w){v=D.drd[w]
d=A.bn(new A.a1(v,-96,v+28,-79),B.iB)
t=new A.ao(B.O,B.M,B.R,B.S,B.Q)
t.r=D.Gb.gp(0)
a2.am(d,t)}a1.restore()},
aD(d){return!1}}
C.aBA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgz.prototype={}
C.aBC.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgA.prototype={}
C.aBD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgB.prototype={}
C.a6C.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bj8(w),B.az),w)}}
C.bj8.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dpa[B.o.F(n,6)]
k=$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.Q)
j.r=l.gp(0)
d.ar(new A.a1(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.ai,null,null,j)
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
k=new A.ao(B.O,B.M,B.R,B.S,B.Q)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tH.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.PW,w,w,w,new C.bRN(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.foP,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Yc,A.q(w,A.bm(!0,A.x(A.a([D.c4I,new A.D(D.bH0,A.A(u,B.l,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b8d,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ix.prototype={
B(d){var w=null,v=this.d,u=C.aQP(v),t=C.ijG(v),s=B.c.j(0.08),r=A.l(18),q=A.L(B.cO.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.frj,w,w,w)],x.p)
if(this.e)p.push(D.esm)
p.push(B.an)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h_,w,w,w))
if(t!=null)p.push(new A.D(B.us,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AN,w,w,w),w))
return A.q(w,A.x(p,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.n),w,w,w,w,B.bF,w,w,w)}}
C.Wp.prototype={
S(){return new C.blV(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYf(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blV.prototype={
gSU(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a4()
this.Pv()},
Pv(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bSy(u.a.d),$async$Pv)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.df6[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSx(p,(o===$?u.d=q.c:o).a,r),$async$Pv)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e1D(u,n))
return A.h(null,v)}})
return A.i($async$Pv,v)},
uy(d){return this.coH(d)},
coH(d){var w=0,v=A.j(x.H),u=this,t
var $async$uy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ec(new C.e1E(d),!1,null,x.H)),$async$uy)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pv()
return A.h(null,v)}})
return A.i($async$uy,v)},
gb6w(){var w,v,u,t=C.N5(this.gSU()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2s(d){return this.cvU(d)},
cvU(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYf(r),$async$a2s)
case 2:if(u.c!=null)u.m(new C.e1F(u,r))
return A.h(null,v)}})
return A.i($async$a2s,v)},
OP(d){return this.bR7(d)},
bR7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.heZ(t.gSU())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MP("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e1B(q),!1,null,r)),$async$OP)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e1C(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2s(A.cW(s,0,A.dA(2,"count",x.S),r).dn(0)),$async$OP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
XN(d,e){return this.bOH(0,e)},
bOH(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e1A(e),o,null,!0,!0,x.y),$async$XN)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.heZ(u.gSU()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2s(o),$async$XN)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XN,v)},
aa8(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e1x(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.L(B.aU,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vm,p,p,p),B.b5],s)
q=A.l(10)
r.push(A.q(p,A.d(i,p,p,p,p,p,p,D.fpI,p,p,p),B.f,p,p,new A.p(B.hu,p,p,q,p,p,B.n),p,p,p,p,B.Cn,p,p,p))
return A.az(p,A.d3(A.q(p,A.x(A.a([A.A(r,B.l,p,B.e,B.j,0,p,p),B.b5,A.d(e,p,2,p,p,p,p,D.fxr,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.fqq,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a8(B.aA,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yJ,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xg(d,e,f,g,h,i){return this.aa8(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N5(s.gSU()),p=s.gSU(),o=C.aQP(s.e),n=C.heZ(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e1G(s),k=C.hEW(p,1).length,j=C.hF7(p,1).length,i=C.hG1(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.L(B.cO.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abc,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fv0,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.VE,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pX,r,r,r),D.fTN],a1),B.l,r,B.e,B.j,0,B.p)],a1),B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.n),r,r,r,r,B.bF,r,r,r)
f=s.Xg("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aF,new C.e1H(s,p),l.$1("kahoot"))
h=s.Xg("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e1I(s,p),l.$1("fire"))
a0=s.Xg("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wa,new C.e1J(s,p),l.$1("catch"))
j=j!==0?new C.e1M(s,p):r
j=s.aa8("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hq,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e1N(s,p):r
i=s.aa8("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kJ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xg("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eX,new C.e1O(s,p),l.$1("journey"))
k=k!==0?new C.e1P(s,p):r
k=A.a([g,B.aQ,D.fXN,B.T,A.kX(0.98,A.a([f,h,a0,j,i,e,s.aa8("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xg("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.cZ,new C.e1Q(s,p),l.$1("school"))],a1),2,12,12,r,B.dX,!0),B.d8,A.A(A.a([D.bIQ,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fpM,r,r,r)],a1),B.l,r,B.e,B.j,0,r,r),B.T],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aU,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fEo,B.bd,new A.bz(1,B.bc,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.h7,r,r,r),A.d(""+v.gapr(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AN,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),r)],a1)
if(v.gapr(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.az(r,A.q(r,A.X(B.hx,D.lC,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1R(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cO.j(0.2)
t=new A.ay(B.cO,1,B.r,-1)
f=A.az(r,A.q(r,A.X(B.j3,B.cO,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1S(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fh.j(0.2)
t=new A.ay(B.fh,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.az(r,A.q(r,A.X(B.ei,B.fh,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1T(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c8(B.aL,B.e,B.j,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bH(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bh,r,r,r))}if(s.a.e){j=m?new C.e1K(s):new C.e1L(a2)
i=A.l(18)
h=A.L(m?B.cO:B.aU,B.r,2)
g=m?B.cO.j(0.12):B.dl
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.az(r,A.q(r,A.as(A.d(f,r,r,r,r,r,r,A.n(r,r,m?B.cO:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.n),r,r,r,r,B.NX,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fYJ)
k.push(B.aB)
k.push(D.asF)
return new C.tH("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bD2,r,r,B.ah,!1),B.f6,r)}}
C.a04.prototype={
a7(){return"_KPhase."+this.b}}
C.am2.prototype={
S(){return new C.am3(D.b0b)},
gd1(){return this.e}}
C.am3.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bS7(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.df(B.fH,new C.bS8(v))},
aPR(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRY(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.df(B.ff,new C.bRZ(w))},
L5(d){var w
if(this.d!==D.acD)return
w=this.at
if(w!=null)w.a1(0)
this.b6s(d)},
b6s(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.V(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bS3(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rR,v.gix(v))},
cKO(d){var w=this
if(w.d!==D.WI)return
if(w.e+1>=w.a.w.length)w.Yy()
else{w.m(new C.bS4(w))
w.aPR()}},
Yy(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGo(p,u.w,t)
u.m(new C.bS0(u,s))
w=2
return A.b(C.BV(u.a.e,s),$async$Yy)
case 2:r=e
t=u.a
w=3
return A.b(C.BW(t.e,t.f,t.r,u.f),$async$Yy)
case 3:q=e
if(u.c!=null)u.m(new C.bS1(u,r,q))
return A.h(null,v)}})
return A.i($async$Yy,v)},
cLD(){var w,v,u,t,s=this,r=s.a,q=new A.e5()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.i.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bS5())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b0b===r){w=A.a([D.fUb,B.X,A.d(s,t,t,t,t,t,t,B.KR,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fpU,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xq,B.K,t,t))
w.push(B.e0)
w.push(C.ux("Play",u.geY(u),B.cO,B.hx,D.fz))
w=A.as(new A.D(B.ez,A.x(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b0c===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fxZ,t,t,t),t,t,t)
break A}if(D.acD===r||D.WI===r){w=u.cri()
break A}if(D.b0d===r){w=u.cc5()
break A}w=t}return new C.tH(s,w,B.f6,t)},
cri(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WI,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aVe,j,j,j),B.b5],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KO,j,j,j))
g.push(B.au)
f=A.l(14)
g.push(A.q(j,A.d(""+k.f,j,j,j,j,j,j,B.iC,j,j,j),B.f,j,j,new A.p(B.bA,j,j,f,j,j,B.n),j,j,j,j,B.GK,j,j,j))
g=A.A(g,B.l,j,B.e,B.j,0,j,j)
f=A.l(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.kp(B.bA,j,k.as<5?B.fh:B.cO,9,j,w,j),B.aq)
w=A.l(22)
v=A.L(B.cO,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.n(j,j,e?D.lC:G.no,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.T,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.foY,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fA8,B.K,j,j)
w=A.E(A.q(j,A.as(u,j,j,j),B.f,j,j,new A.p(D.qk,j,v,w,j,j,B.n),j,j,j,j,B.fs,j,j,1/0),3)
v=A.a([],h)
for(u=k.gix(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bS2(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCL[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aD5[o],j,j,j,j,j,j,D.fqU,j,j,j),B.au,new A.bz(1,B.bc,A.d(r[t],j,3,B.a2,j,j,j,D.fpR,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.ara)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bXv)
v.push(A.az(j,new A.SV(A.q(j,new A.c8(B.aL,B.e,B.j,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bH(l,l,l,l),new A.be(m,m,m,m),V.aB8,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b1,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.an,f,B.af,w,B.af,A.E(A.kX(1.45,v,2,10,10,j,B.dX,!1),4)],h)
if(i)h.push(D.erB)
return new A.D(B.a0i,A.x(h,B.l,j,B.e,B.j,0,B.p),j)},
cc5(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLD(),m=x.p,l=A.a([D.bc1,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pX,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vr,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cO.j(0.25):B.dl
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cO:B.bA,1,B.r,-1)
q=A.d(w<3?D.dhl[w]:""+(w+1),o,o,o,o,o,o,B.ne,o,o,o)
s=s?B.u:B.V
l.push(A.q(o,new A.c8(B.aL,B.e,B.j,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bc,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iC,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bH(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cx,B.eY,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ix(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.as(C.ux("Back to the games",new C.bS_(p),B.cO,B.k6,D.fz),o,o,o))
return A.cl(l,o,o,B.fs,o,o,B.ah,!1)}}
C.U5.prototype={
S(){return new C.am_(A.T(x.de,x.er))}}
C.am_.prototype={
gD5(){var w,v=this,u=v.d
if(u===$){w=C.hkM(v.a.c.aj())
v.d!==$&&A.bD()
v.d=w
u=w}return u},
glR(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD5().b
v=$.aw()
u.e!==$&&A.bD()
t=u.e=new A.au(new A.ba(w,B.b6,B.aR),v)}return t},
cf5(d){return this.f.c3(0,d,new C.bRy(d))},
Y(){this.a4()
var w=this.gD5().c
if(w.length===0)w.push(C.h6x(null,0,20,""))},
t(){var w,v,u=this.glR(0)
u.U$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gR(w)
v.U$=$.aw()
v.P$=0}this.a3()},
cKE(){if(this.gD5().c.length>=12)return
this.m(new C.bRz(this))},
jH(d){var w,v,u=this,t=u.gD5()
t.b=B.a.i(u.glR(0).a.a)
w=t.gapr(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fhS)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRJ(),r=x.p,q=A.a([A.bN(!1,D.fJm,t,t,!0,t,t,t,u.gbqa(u),t,t)],r),p=A.a([D.fYk,B.af,A.aM(t,B.a_,!1,t,!0,B.t,t,A.aO(),u.glR(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h_,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD5().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRI(u,w,s),t)],r))
if(v<12)p.push(A.as(C.ux("\uff0b Add a question",u.gcKD(),B.aU,t,B.c),t,t,t))
return new C.tH("Make your game",A.cl(p,t,t,D.bD_,t,t,B.ah,!1),q,t)}}
C.ar4.prototype={
S(){return new C.aF7(A.a([],x._))},
bv(){return this.r.$0()},
qn(){return this.w.$0()},
ge3(){return this.c}}
C.aF7.prototype={
Y(){var w,v
this.a4()
this.wu()
w=this.a
v=w.c
if(v.length!==0)C.a8j(v,w.e,w.d.w)},
wk(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhB(r,t.e,!1,s.w,new C.e3i(u),null,s),$async$wk)
case 2:w=3
return A.b(u.wu(),$async$wk)
case 3:return A.h(null,v)}})
return A.i($async$wk,v)},
a0E(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhB(r,t.e,!0,s.w,new C.e3h(u),null,s),$async$a0E)
case 2:w=3
return A.b(u.wu(),$async$a0E)
case 3:return A.h(null,v)}})
return A.i($async$a0E,v)},
wu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Br(q.a.c),$async$wu)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e3k(q,p))
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
return A.b(C.Ho(q.a.c).dh(0,B.qw),$async$wu)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e3l(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e3m(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wu,v)},
Pa(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fhs)
w=3
return A.b(C.Ho(t.a.c),$async$Pa)
case 3:r=e
w=4
return A.b(C.fX7(t.a.c,r),$async$Pa)
case 4:q=e
w=5
return A.b(C.Ho(t.a.c),$async$Pa)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e3g(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dI:B.cY,null,B.t,null,s,null,B.mY,null,null,null,null,null,null,null,null,null,null))
t.a.qn()
case 1:return A.h(u,v)}})
return A.i($async$Pa,v)},
Iv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isw(l),$async$Iv)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hVd(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b1b(q,p.e,l,"Each family tree costs $"+B.i.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iv)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hBu(r)
o=Date.now()
n=t.a.c
m=new C.kW(l,r.toUpperCase(),p,!0,B.a_,D.Dx,new A.V(o,0,!1),0,n,D.uA,B.cd)
w=5
return A.b(C.a40(n,m),$async$Iv)
case 5:w=6
return A.b(t.wu(),$async$Iv)
case 6:t.a.bv()
t.a.qn()
if(t.c==null){w=1
break}t.F2(m)
case 1:return A.h(u,v)}})
return A.i($async$Iv,v)},
F2(d){return this.ck0(d)},
ck0(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Br(u.a.c),$async$F2)
case 2:n=l.nB(k.dI(f,new C.e3j(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hy(m,new C.aqZ(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F2)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a40(u.a.c,o),$async$F2)
case 6:case 5:w=7
return A.b(u.wu(),$async$F2)
case 7:u.a.qn()
return A.h(null,v)}})
return A.i($async$F2,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=new C.uj(p)
if(r.e)return A.as(A.n6(q,p?B.bv:B.br,q,q,q,q,q,q,q,q),q,q,q)
if(J.cr(r.d)){w=p?B.ee:B.c
v=A.l(15)
u=A.aI(!1,B.a3,!0,q,A.aP(!1,q,!0,A.q(q,D.bVa,B.f,q,q,new A.p(B.aX.j(0.12),q,A.L(B.aX,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cR,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcj4(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.n(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gp(A.q(q,A.x(A.a([u,B.aQ,t,B.T,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.n(q,q,p?B.bv:B.br,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e0,A.bJ(D.h0y,q,r.gaT8(),A.bp(B.bR,q,q,q,q,q,Av.a0H,q,new A.b9(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.j,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.n),q,q,q,q,D.bFI,q,q,1/0),15,B.ag,1.05,D.acp,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.n(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b5],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zw,B.aX,q,q,q,q),q,q,q,new C.e3o(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zq,B.aX,q,q,q,q),q,q,q,r.gagV(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.as4,D.fGG,r.gaT8(),A.bp(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gp(r.cGN(J.t(r.d,s),o),14,B.ag,1,D.acp,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cGN(d,e){var w=null,v=e.a,u=v?B.ee:B.c,t=A.l(14),s=A.L((v?B.eh:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.eu,10)],x.V),q=A.l(14),p=A.q(w,D.bUe,B.f,w,w,new A.p(B.aX.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.n(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqr(),m=d.d?"":" \xb7 Public",l=d.y===D.kV?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bH,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.n(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.q(w,A.aI(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bF,A.A(A.a([p,B.bd,l,A.X(B.OO,v?B.bv:B.br,w,w,w,w)],k),B.l,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e3n(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.p(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqZ.prototype={
S(){return new C.aF4(A.a([],x._),A.aR(x.N),A.b9U())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aF4.prototype={
Y(){var w,v,u=this
u.a4()
u.d=u.a.w
u.adB()
w=u.a
v=w.c
if(v.length!==0)C.a8j(v,w.e,w.d.w)},
t(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a3()},
a3C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yw("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2J(r),s,null,!0,!0,x.y),$async$a3C)
case 3:if(e!==!0||t.c==null){w=1
break}t.K3()
t.m(new C.e2K(t,r))
w=4
return A.b(t.uu(),$async$a3C)
case 4:t.a.bv()
t.yw(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3C,v)},
cwt(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e2E(w,f,d,e))},
aVr(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ej(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bd4(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e7(r)
w=q.Da()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ej(r,u,0,1)
t.k5(v,v,1,1)
t.ej(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adB(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Br(u.a.c),$async$adB)
case 2:t=s.nB(r.dI(e,new C.e25(u)))
if(t!=null&&u.c!=null)u.m(new C.e26(u,t))
return A.h(null,v)}})
return A.i($async$adB,v)},
yw(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wk(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hhB(o,t,!1,r,new C.e2n(u),q.a,s),$async$wk)
case 2:n=A
m=J
w=3
return A.b(C.Ho(u.a.c),$async$wk)
case 3:p=n.nB(m.dI(e,new C.e2o(u)))
if(p!=null&&u.c!=null)u.m(new C.e2p(u,p))
return A.h(null,v)}})
return A.i($async$wk,v)},
K3(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cG(w,0)},
uu(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a40(t,s),$async$uu)
case 2:return A.h(null,v)}})
return A.i($async$uu,v)},
a28(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a28=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uy(q,t.a.c)){t.yw("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.itJ(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a28)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K3()
t.m(new C.e2D(t,r))
w=4
return A.b(t.uu(),$async$a28)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a28,v)},
b39(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ec(new C.e2k(this),!1,null,x.H))},
a0S(){return this.ck2()},
ck2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uy(m,t.a.c)){t.yw("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.S(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e2A(),A.U(s).k("Y<1>")).gI(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ci.E"))
B.d.fi(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e2B(n,t,new C.uj(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0S)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K3()
t.m(new C.e2C(t,o))
w=6
return A.b(t.uu(),$async$a0S)
case 6:case 5:if(o.a&&t.c!=null)t.b39()
case 1:return A.h(u,v)}})
return A.i($async$a0S,v)},
WB(d){return this.bDK(d)},
bDK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uy(r,t.a.c)){t.yw("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e1U(t,d),r,null,!0,!0,x.P),$async$WB)
case 3:s=f
if(s==null){w=1
break}t.K3()
t.m(new C.e1V(t,s))
w=4
return A.b(t.uu(),$async$WB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WB,v)},
a3Y(d){return this.cJ1(d)},
cJ1(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.S(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e2M(u,d,new C.uj(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3Y)
case 2:return A.h(null,v)}})
return A.i($async$a3Y,v)},
cgi(d){var w=this,v=w.d
v===$&&A.c()
if(C.uy(v,w.a.c))w.OQ(d)
else w.a3Y(d)},
ajq(d,e){return this.cAq(d,e)},
cAq(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.S(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e2G(new C.uj(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajq)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajq,v)},
IA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kV?3:5
break
case 3:w=6
return A.b(C.h4K(t.a.c),$async$IA)
case 6:s=e
o=t.a
r=C.hpE(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajq(!s,!r),$async$IA)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQW(o,t.a.c)){t.yw("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lo(o,"Cancel","Remove",q.y===D.kV?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IA)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQS(t.a.c,t.d.a),$async$IA)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j1(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
ab4(d){return this.bOY(d)},
bOY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uy(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e1W(p))){o=A.U(s)
p.a=A.nB(new A.cM(new A.Y(s,new C.e1X(d),o.k("Y<1>")),new C.e1Y(),o.k("cM<1,m>")))}q=p.a
if(q==null)q=d.d
t.K3()
t.m(new C.e1Z(t,s,d,q))
w=3
return A.b(t.uu(),$async$ab4)
case 3:t.yw(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab4,v)},
OQ(d){return this.bRb(d)},
bRb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uy(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3Y(d),$async$OQ)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e22(t,d),r,null,!0,!0,x.P),$async$OQ)
case 6:s=f
if(s==null){w=1
break}t.K3()
t.m(new C.e23(t,s))
w=7
return A.b(t.uu(),$async$OQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
cHc(){var w=this,v=w.d
v===$&&A.c()
if(!C.uy(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e2L(w))
w.uu()},
ZB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQW(n,t.a.c)){t.yw("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.S(n)
s=$.aw()
r=new A.au(B.aw,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceM(),A.U(q).k("N<1,m>")).bY(0,new C.e2f()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e2g(t,new C.uj(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$ZB)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K3()
t.m(new C.e2h(t,p))
w=4
return A.b(t.uu(),$async$ZB)
case 4:t.yw("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZB,v)},
ceN(d){return B.a.i(d.toLowerCase())},
ciP(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uy(v,w)
t=r.d
s=C.ii7(t)
C.isA(q,t.b,u,C.ii6(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.uj(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e2T(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c5:B.iG
v=A.X(B.a1S,n?B.bv:B.br,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cd,A.aP(!1,o,!0,new A.D(B.hH,A.A(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e2U(p,d),o,o,o,o,o,o,o),o),new A.D(B.nF,p.c1q(m),o)],u)
if(p.d.y===D.kV){t=B.tg.j(0.15)
s=A.l(12)
r=A.L(B.tg.j(0.45),B.r,1)
q=C.Hm(p.d,p.a.c)
v.push(new A.D(B.yM,A.q(o,A.A(A.a([D.bZE,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.n),o,o,o,o,B.iw,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b5],u)
if(C.uy(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GB("Undo",B.py,p.gcHb(),m,o,o))
u.push(new C.GB("Family Book",D.bOZ,p.gciO(),m,B.u7,o))
u.push(new C.GB("Family games",B.oB,p.gcj_(),m,B.aF,o))
if(C.uy(p.d,p.a.c))u.push(new C.GB("Display settings",B.D4,p.gck1(),m,B.b2,o))
u.push(new C.GB("Sync",B.zq,p.gagV(),m,o,o))
t=p.d
if(t.y===D.kV||C.aQW(t,p.a.c)){t=p.d.y===D.kV?"Remove shared tree":"Delete tree"
u.push(new C.GB(t,B.ei,p.gbP7(),m,B.fh,o))}if(C.uy(p.d,p.a.c))u.push(new C.GB("Add member",B.wK,new C.e2V(p),m,B.bR,o))
v.push(new A.D(Z.alS,A.A(u,B.l,o,B.e,B.j,0,o,o),o))
if(p.d.gaqr()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cs(new C.e2W(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1W:A5.OP,o,o,o,o,o)
v.push(A.as(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e2X(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1q(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ac(0,B.G,B.fU.j(0.35),B.dv,18)],x.V)
u=A.l(22)
t=A.ap(-26,A.X(B.zj,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a3,!0,m,A.aP(!1,m,!0,A.q(m,D.c1R,B.f,m,m,new A.p(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cR,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagV(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.frW,m,m,m)
r=r.gaqr()
p=n.d.gaqr()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bH,A.d(""+r+" "+p,m,m,m,m,m,m,A.n(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.uy(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bZS,m,m,m,n.gctQ(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jI:B.n4
r=r?"Private":"Public"
r=A.E(n.ax_(q,"Privacy",r,n.a.d.w?n.gcG6():m),1)
q=A.E(n.ax_(B.zr,"Tree code",n.d.c,new C.e24(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.ax_(D.bQF,"Collaborators",p,n.gc6a()),1)],o),B.l,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kV){s=B.c.j(0.15)
B.d.v(p,A.a([B.T,A.aI(!1,B.a3,!0,A.l(999),A.aP(!1,A.l(999),!0,new A.D(B.he,A.A(A.a([A.X(B.pz,B.c,m,m,m,14),B.e5,A.d("View only",m,m,m,m,m,m,B.aVj,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.q(m,A.by(u,new A.an(B.a0,m,B.ab,B.t,A.a([t,new A.D(B.GN,A.x(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.p(m,m,m,w,v,D.c68,B.n),m,m,m,m,m,m,m,1/0)},
ax_(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a3,!0,A.l(14),A.aP(!1,A.l(14),!0,new A.D(K.an3,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.n(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vx,A.d(f,w,1,B.a2,w,w,w,Ao.AK,w,w,w)],x.p),B.l,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgD.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgG(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dM(r,new C.dgX(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dgY(this),A.U(r).k("N<1,v>")))
return new A.D(B.uw,new A.a5(w,v,new A.an(B.a0,t,B.ab,B.f,u,t),t),t)}}
C.KZ.prototype={}
C.GF.prototype={}
C.bgF.prototype={
gblB(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKH.prototype={}
C.bgG.prototype={
bQN(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.Q()
v=A.K()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bu
d.ah(new A.o(n,w),new A.o(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kT(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kT(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bv())
q=A.K()
q.r=B.c.gp(0)
d.N(new A.o(u,w),9,q)
q=A.K()
q.r=B.bD.gp(0)
d.af(t,q)},
bQK(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhh())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dhi(f))
t=new A.N(a0,new C.dhj(f),A.U(a0).k("N<1,F>")).bY(0,new C.dhk()).cF(0,1/0,B.rp)
w=f.a
d.ah(f,new A.o(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.J)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.o(o,v),p,e)
continue}l=J.n2(n)
k=Math.min(10,m/2)
m=$.Q()
j=A.a([],r)
i=new A.aG(m.r,B.ai,null,null,j)
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
a5(d,e){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=B.bR.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bu
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.J)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQK(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQN(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bks.prototype={
gcc7(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aDl
switch(w.c.a){case 0:return D.cZR
case 1:return D.db2
case 2:return D.dt1}},
gcca(){var w=this.c,v=C.hAF(w.w),u=C.hAF(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=t.gcc7(),p=t.c,o=N.bF_(p.f),n=t.gcca(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gan(q).j(0.35),B.cL,10)],m),k=r?B.as:B.c,j=A.L(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tL(B.A,s,B.cj,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gan(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.A,A.d(v,s,s,s,s,s,s,A.n(s,s,B.d.gan(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a8(B.a7,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.hV(w,B.aq),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a8(B.aA,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.H3,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.L(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.q(s,A.d(""+k,s,s,s,s,s,s,D.fCz,s,s,s),B.f,s,s,new A.p(B.cg,s,w,j,s,s,B.n),s,s,s,s,D.bHF,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.l(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.n(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.n(s,s,r?B.aT:B.br,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.az(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ab,B.f,l,s),B.ax,A.q(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.b6o,new A.p(k,s,w,j,m,s,B.n),s,s,s,s,D.bHQ,s,s,s)],v),B.l,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfI.prototype={
a5(d,e){var w,v,u,t,s
$.Q()
w=A.K()
v=this.b
u=v?B.c:D.bje
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.o(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bys.prototype={
B(d){var w=this,v=null,u=new C.fmI(w),t=w.c,s=t?B.cr:B.c,r=A.l(12),q=u.$3(B.hY,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.bA:B.fq,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wM,"Zoom out",w.e)
return A.aI(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.q(v,v,B.f,t?B.bA:B.fq,v,v,v,1,v,v,v,v,v,22),u.$3(B.apC,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.ds,v,v,v,B.aj)}}
C.bnN.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.L(B.bR,B.r,2),s=w.e,r=x.p
t=A.az(v,A.q(v,A.x(A.a([A.X(s?O.a1W:A5.OP,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fyE,v,v,v)],r),B.l,v,B.bb,B.j,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fwu,B.K,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.N(s,new C.eXL(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.j,0,B.p),v)}}
C.a0h.prototype={
S(){return new C.aDy()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDy.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.c
r.y=t==null?D.z_:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ijH(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
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
v.a3()},
Qj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hpE(p.y,p.w)
w=3
return A.b(A.lz(t.a.w,B.Jr),$async$Qj)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b1b(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qj)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hVe(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ax.Hy(78,800),$async$Qj)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxd(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
cc9(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hW(B.o.u(1000*Date.now()),w,D.z_,null,null,null,"","","","","",1,!1,0)
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
s=v.aG3(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aaG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dxc(r),s,null,!0,!0,x.y),$async$aaG)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===B.J,i=new C.uj(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dxm(l),g),g.k("M.E"))
h=j?B.ee:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bG4,A.d(w,k,k,k,k,k,k,A.n(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.h6(A.aP(!1,k,!0,new A.D(B.me,A.X(B.ei,B.ph,k,k,k,17),k),B.cR,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLJ(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jW:B.jk
t=N.bF_(l.as)
if(l.as==null)s=A.X(B.pp,j?B.bv:B.br,k,k,k,40)
else s=k
s=A.as(A.az(k,new A.an(B.a0,k,B.ab,B.t,A.a([A.ha(u,t,s,k,42),A.ap(0,A.ha(B.bR,k,D.bTj,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcc6(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDA(t,"Full name",B.n1,1,1,i,B.mz)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bkq(i,u,new C.dxn(l),k)],v),B.l,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.n(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bzr],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dxo(),A.U(o).k("N<1,eI<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.n(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bzt],q)
B.d.v(q,new A.N(f,new C.dxq(),A.U(f).k("N<1,eI<m?>>")))
o=A.x(A.a([t,B.an,new C.ael(i,r,"Who is their parent?",p,new C.dxr(l),k,o),B.aB,n,B.an,new C.ael(i,m,"Who is their spouse / partner?",q,new C.dxs(l),k,o)],v),B.al,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDA(q,"Birth date",D.aoI,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDA(m,"Birth place",B.a2a,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDA(n,"Date of death (if deceased)",D.aqQ,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDA(p,"Occupation",B.a3m,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aB,s,B.bz,new C.aem(i,"Identity",u,k),B.af,new C.aem(i,"Family links",o,k),B.af,new C.aem(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDA(r,"Notes",B.lk,5,3,i,k)],v),B.l,k,B.e,B.j,0,B.p),k),B.af,new C.aDz(i,"Child order",l.ckg(l.at),new C.dxt(l),new C.dxu(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.heN(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dxv(l):k
B.d.v(r,A.a([B.X,new C.aDz(i,"Visible in tree",u,w,new C.dxw(l),k)],v))}r.push(B.X)
w=j?B.jW:B.jk
u=A.l(14)
t=A.L(j?B.eh:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.n(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.iQ(k,B.bR,k,B.ag,k,new C.dxx(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.n(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.n),k,k,k,k,O.alx,k,k,k))
r.push(B.bz)
w=j?B.aP:B.as
j=j?B.eh:B.bP
r.push(A.A(A.a([A.E(A.dU(B.nZ,new C.dxp(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.l(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bJ(D.f97,k,l.gcc8(),A.bp(B.aX,k,k,0,B.c,k,B.cp,k,new A.b9(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.j,0,k,k))
r.push(B.ax)
return A.eg(B.f6,k,B.ag,h,new A.a5(420,k,A.ce(A.x(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.amo,k,B.alJ,new A.b9(g,B.a1),k,k)},
ckg(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aem.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.n(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jW:B.jk,s=A.l(16)
return A.x(A.a([new A.D(B.a0M,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.L(v?B.eh:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bh,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.bkr.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ee:B.c,r=A.l(12),q=A.L((t?B.eh:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.n(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aM(u,B.a_,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bt(u,B.eK,u,B.wl,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.n(u,u,t?B.bv:B.br,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ael.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ee:B.c,s=A.l(12),r=A.L((u?B.eh:B.bP).j(0.85),B.r,1),q=A.X(B.t1,u?B.bv:B.br,v,v,v,v),p=A.n(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ee:B.c
return A.q(v,new A.Er(A.a5w(v,o,A.d(w.f,v,v,v,v,v,v,A.n(v,v,u?B.bv:B.br,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.n),v,v,v,v,B.kv,v,v,v)}}
C.bkq.prototype={
B(d){var w=new C.dxy(this)
return A.A(A.a([w.$3(D.wu,"Male",B.Pz),B.ae,w.$3(D.ot,"Female",B.Pj),B.ae,w.$3(D.z_,"Other",B.nJ)],x.p),B.l,null,B.e,B.j,0,null,null)}}
C.aDz.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jW:B.jk,r=A.l(14),q=A.L(t?B.eh:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.n(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.n(v,v,t?B.bv:B.br,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aJJ(u,B.wM,w.f,v),B.bm,new C.aJJ(u,B.hY,w.r,v)],o),B.l,v,B.e,B.j,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.n),v,v,v,v,B.ey,v,v,v)}}
C.aJJ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.ee:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bR
else t=(s.c.a?B.bv:B.br).j(0.4)
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aen.prototype={
bUZ(d){switch(d.a){case 0:return B.bR
case 1:return B.bD
case 2:return B.d0}},
bV_(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZZ(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AK(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ee:B.c
u=A.l(12)
t=A.L((w?B.eh:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.n(p,p,w?B.bv:B.br,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.n(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.q(p,A.A(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.n),p,p,p,B.cx,B.yI,p,p,1/0)},
afh(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.n(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jW:B.jk,s=A.l(16),r=A.L(v?B.eh:B.bP,B.r,1)
return A.x(A.a([new A.D(B.a0M,u,w),A.q(w,A.x(e,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hFP(r,q),o=q.c,n=t.bUZ(o),m=N.bF_(q.f),l=t.e.a,k=l?B.ee:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.n(s,s,l?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kV?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.n(s,s,l?B.bv:B.br,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.H,12)],x.V)
u=n.j(0.12)
l=A.as(A.q(s,A.ha(u,m,m==null?A.X(B.pp,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.L(n.j(0.45),B.r,1)
v=A.as(A.q(s,A.d(t.bV_(o),s,s,s,s,s,s,A.n(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,B.mc,s,s,s),s,s,s)
u=x.p
i=A.a([t.AK("Full name",i,B.n1)],u)
if(p>0)i.push(t.AK("Child order","#"+p,B.Pp))
r=A.a([h,B.ax,r,B.aQ,l,B.X,v,B.bz,t.afh("Identity",i),B.af,t.afh("Life details",A.a([t.AK("Birth date",q.w,D.aoI),t.AK("Birth place",q.x,B.a2a),t.AK("Date of death",q.y,D.aqQ),t.AK("Occupation",q.z,B.a3m)],u)),B.af,t.afh("Family links",A.a([t.AK("1. Parent",t.aZZ(q.d),B.Hj),t.AK("2. Spouse",t.aZZ(q.e),B.Hx)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.afh("Notes",A.a([t.AK("Notes",q,B.lk)],u))],u))
r.push(B.bz)
r.push(A.bJ(B.KX,s,new C.dxI(d),A.bp(B.aX,s,s,s,s,s,B.cp,s,new A.b9(A.l(14),B.a1),s,s,s)))
return A.eP(s,k,new A.cP(B.m0,A.ce(A.x(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.yP,s,s,B.ah),s),s,s,s,B.GR,B.d7,s,new A.b9(j,B.a1),s)}}
C.GB.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.br
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uy,A.h6(A.aI(!1,B.a3,!0,A.l(8),A.aP(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.ar1.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a9<m,@>>")
w=A.C(new A.N(w,new C.cf_(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jq(w,new C.cf0(),t,x.fO))
return s}}
C.ar2.prototype={
S(){return new C.aF6(A.a([],x.bF))},
gd1(){return this.c}}
C.aF6.prototype={
Y(){this.a4()
this.Ka()},
Ka(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ka=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cf3(t.a.c),$async$Ka)
case 3:r=e
w=4
return A.b(C.Br(t.a.c),$async$Ka)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rl(q,new C.e35(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e36(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Ka,v)},
z4(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
KY(d,e){return this.cJI(d,e)},
cJI(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3a(q,e))
t=3
w=6
return A.b(d.$0(),$async$KY)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3b(q))
$.eX.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KY,v)},
Ym(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$Ym)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e32(t),"Preparing download\u2026"),$async$Ym)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ym,v)},
Yq(d){return this.bSR(d)},
bSR(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$Yq)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e33(t,d),"Preparing file\u2026"),$async$Yq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yq,v)},
ahh(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xR.cq().MH(B.Sw,B.uB,!0),$async$ahh)
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
o=A.jK(o,0,null)
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
case 6:u=A.Hx()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahh,v)},
Z3(d){return this.c2l(d)},
c2l(d){var w=0,v=A.j(x.H),u=this
var $async$Z3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KY(new C.e34(u,d),"Restoring family trees\u2026"),$async$Z3)
case 2:return A.h(null,v)}})
return A.i($async$Z3,v)},
Z2(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahh(),$async$Z2)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z3(s),$async$Z2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z2,v)},
a3_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pz(r,s.c,s.e),$async$a3_)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KY(new C.e39(t),"Creating QR code\u2026"),$async$a3_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3_,v)},
a2B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DF()){t.z4("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.e37(),!0,null,x.N)),$async$a2B)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z3(r),$async$a2B)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2B,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=o?B.BH:B.iG,m=o?D.ajZ:B.aP,l=o?B.aM:B.bP,k=o?B.aP:B.as,j=new C.dhl(n,m,l,k,o?B.bK:B.br)
l=A.aH(p,p,p,p,A.X(B.eN,k,p,p,p,20),p,p,p,new C.e3d(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eH(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.n(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dgU(!0,B.jK,B.aH,B.aH,q.r?p:q.gcAe(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwo()
t.push(A.E(C.dgU(!s,B.jq,B.b8,B.bp,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dgU(!1,B.i_,B.aX,B.bR,q.r?p:q.gbSK(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dgU(!1,R.zs,B.av,B.aS,q.r?p:q.gc2i(),j,s,"Upload backup file"),1))
l=A.a([new C.bgE(v,l,p),B.l2,new C.adC(j,"QR restore",p),B.X,t,B.d8,new C.adC(j,"Backup files",p),B.X,A.A(r,B.l,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l2,new C.adC(j,"One tree",p),B.X],u)
B.d.v(v,J.b8(q.d,new C.e3e(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a0E,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.L(B.aX.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.q(p,A.A(A.a([O.aTH,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.n(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.n),p,p,p,p,B.Cj,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.dhl.prototype={}
C.bgE.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ac(0,B.G,B.aX.j(0.32),B.kB,28)],x.V)
t=A.ap(p,A.X(B.uV,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.q(p,new A.an(B.a0,p,B.ab,B.t,A.a([t,new A.D(B.ad,A.A(A.a([A.q(p,D.c1l,B.f,p,p,new A.p(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oW,A.E(A.x(A.a([D.fHH,B.T,A.d(w,p,p,p,p,p,p,A.n(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.c9k,B.n),p,p,p,p,p,p,p,p)}}
C.adC.prototype={
B(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aX,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.n(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)}}
C.bgC.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cL,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aI(!1,B.a3,!0,q,A.aP(!1,o,!0,A.eJ(A.d3(new A.D(E.a0g,A.x(A.a([A.q(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.n),q,q,q,q,B.rY,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.n(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bH,A.d(r.f,q,q,q,q,q,q,A.n(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgH.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aX.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.eJ(new A.D(B.eY,A.A(A.a([A.q(v,D.c0z,B.f,v,v,new A.p(q,v,A.L(B.aX.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rY,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.n(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.n(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.X(B.i_,o,v,v,v,20)],n),B.l,v,B.e,B.j,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0B.prototype={
S(){return new C.aF5()},
gd1(){return this.c}}
C.aF5.prototype={
Y(){this.a4()
this.aad()},
aad(){var w=0,v=A.j(x.H),u=this,t
var $async$aad=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3Q(u.a.c,B.E7),$async$aad)
case 2:t=e
if(u.c!=null)u.m(new C.e2Y(u,t))
return A.h(null,v)}})
return A.i($async$aad,v)},
aiJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e2Z(q))
t=4
p=A.hrm(q.a.d,B.E7)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ath(n.e,m,l,B.E7,p,n.f),$async$aiJ)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e3_(q))
q.c.L(x.q).f.T(D.fiF)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.en(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e30(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiJ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=p?B.jB:B.ql,n=p?B.iF:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eH(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fYe,q,q,q,1,q,!0)
w=A.l(24)
v=A.L(B.aX.j(0.35),B.r,1)
u=A.qd(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.n(q,q,B.aX,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.x(A.a([B.T,u,B.bz,t,B.T,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.n(q,q,p?B.aT:B.am,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.j,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.n),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.n(q,q,p?B.ac:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcw7()
if(u)u=B.Kn
else u=A.X(r.e===!0?B.hJ:B.aoH,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ch,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aX,q,B.h6,q,q,q,new A.ay(B.aX.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hW,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.n(q,q,p?B.aD:B.am,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a5(1/0,q,A.bJ(B.AT,q,new C.e31(d),A.bp(B.aX,q,q,q,q,B.h6,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ad,A.x(w,B.l,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a0C.prototype={
S(){return new C.blW(A.zZ(B.yx,B.o4,B.v2))}}
C.blW.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eH(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fPW,w,w,w,1,w,!0),B.w,A.zY(this.d,B.c_,new C.e3f(this,d)),w,!1,!1,w,w)}}
C.b_I.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.n(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.S0,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lW.prototype={}
C.a7o.prototype={
S(){return new C.blA(null,null)}}
C.blA.prototype={
Y(){var w=this,v=null
w.a4()
w.d=A.bl(v,B.rR,v,1,v,w)
w.e=A.bl(v,B.on,v,1,v,w)
w.a.toString
w.d.cO(0)
w.e.cO(0)},
bz(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cO(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cO(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.byY()},
B(d){var w,v,u=this,t=B.d.dP(D.a6f,new C.dPk(u),new C.dPl())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cCH(A.c5(new A.h7(A.a([w,v],x.dS)),new C.dPm(u,t),null),!0)}}
C.blz.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3A(d,e)
break
case"house":p.mh(d,e,D.dg3)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.Q()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.o(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mn(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bv(d,e,12)
p.yG(d,e,B.ld,5,14)
break
case"grocery":p.cl_(d,e)
break
case"calculator":p.ckH(d,e)
break
case"lumber":p.cl7(d,e)
break
case"kitchen":p.cl2(d,e)
break
case"landscape":p.mh(d,e,D.dgG)
s=new A.aG($.Q().r,B.ai,null,null,A.a([],x.v))
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
p.Bv(d,e,8)
p.yG(d,e,B.i9,4,18)
break
case"plumbing":p.clg(d,e)
break
case"electrical":p.mh(d,e,D.dse)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.Q()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mn(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mn(d,e,B.m4.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bv(d,e,10)
break
case"store":p.clq(d,e)
break
case"paint_remodel":p.clb(d,e)
break
case"roofing":p.cli(d,e)
break
case"warehouse":p.clx(d,e)
break
case"vehicles":p.clv(d,e)
break
case"farm":p.ckU(d,e)
break
case"restaurant":p.clh(d,e)
break
case"tools":p.clt(d,e)
break
case"wallet":p.clw(d,e)
break
case"concrete":p.ckN(d,e)
break
case"blueprint":p.ckF(d,e)
break
default:p.b3A(d,e)}},
mh(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.Q()
w=A.K()
w.sav(new A.a8(B.aA,B.aE,B.x,f,null,null).aK(0,v))
d.ar(v,w)},
mn(d,e,f,g,h){var w,v,u,t=new A.o(e.a/2,e.b/2),s=e.gdA()/2-h
$.Q()
w=A.K()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cC(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yG(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.o(q+t*o,p+s*o),3.5,r)}},
Bv(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.o(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3A(d,e){var w,v=this
v.mh(d,e,D.dqA)
w=v.c
v.mn(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mn(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bQG(d,e,B.hF,w)
v.yG(d,e,B.c.j(0.7),6,8)},
bQG(d,e,f,g){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
cl_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mh(d,e,D.cv1)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=D.dee[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.o(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mn(d,e,B.c.j(0.35),w,16)
l.yG(d,e,B.i9,5,12)},
ckH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mh(d,e,D.cva)
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
r=D.diu[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eo(r,h,h,B.cJ,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cvc[o]
l=B.kK.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eo(m,h,h,B.cJ,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mn(d,e,B.c.j(0.35),w*1.5,14)
i.mn(d,e,B.eL.j(0.55),-v*3.141592653589793*2,8)
i.mn(d,e,B.yc.j(0.4),r*2.8,22)
i.yG(d,e,B.qc,8,10)
i.Bv(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.Q()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.o(12,j),new A.o(t,j),v)}},
cl7(d,e){var w,v,u,t,s,r,q,p,o=this
o.mh(d,e,V.aAs)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bn(new A.a1(20,r,u,r+10),B.hQ)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=A.ar(B.fy,B.o9,(s+1)/2).gp(0)
d.am(q,p)}o.mn(d,e,B.fy.j(0.35),w,15)
o.Bv(d,e,8)},
cl2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mh(d,e,D.deJ)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.Q)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.o(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mn(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yG(d,e,B.q9,4,14)},
clg(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mh(d,e,D.d2S)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.Q)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.o(w,u),q*(0.12+r*0.14+p),o)}n.yG(d,e,B.pg,6,12)
n.mn(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clq(d,e){var w,v,u,t,s,r,q,p=this
p.mh(d,e,D.cIU)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bn(new A.a1(r,14,r+u,22),B.iB)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.fn,B.bM,(s+1)/2).gp(0)
d.am(r,q)}p.mn(d,e,B.c.j(0.3),w,16)
p.Bv(d,e,8)
p.yG(d,e,B.w1,5,13)},
clb(d,e){var w,v,u,t,s,r,q
this.mh(d,e,D.d9d)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bn(new A.a1(r,q,r+8,q+(18+s*22)),B.hR)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=[B.ir,B.dj,B.bM,B.er][t].j(0.85).gp(0)
d.am(q,r)}this.mn(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cli(d,e){var w,v,u,t,s,r,q
this.mh(d,e,D.d6A)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.o(u*(0.1+r),s),new A.o(u*(0.18+r),s+10),q)}this.yG(d,e,B.cu,7,11)},
clx(d,e){var w,v,u,t,s,r,q,p
this.mh(d,e,D.cLE)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bn(new A.a1(q,p,q+(t-s*8),p+16),B.hQ)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.cu,B.aP,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mn(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clv(d,e){var w,v,u,t,s,r,q
this.mh(d,e,D.dwp)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bn(new A.a1(s,r,s+28,r+8),B.hQ)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bv(d,e,6)},
ckU(d,e){var w,v,u,t,s,r,q,p
this.mh(d,e,D.ddj)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.Q()
s=A.K()
s.r=B.m4.j(0.75).gp(0)
d.N(new A.o(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.hq.j(0.85).gp(0)
p.c=3
d.ah(new A.o(q,v),new A.o(q+s*6,t),p)}this.mn(d,e,B.m4.j(0.35),w,14)},
clh(d,e){var w,v,u,t,s,r,q=this
q.mh(d,e,D.dfT)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.o(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yG(d,e,B.q9,5,16)
q.Bv(d,e,7)},
clt(d,e){var w,v,u,t,s,r,q,p,o=this
o.mh(d,e,D.dtO)
w=o.c
v=w*3.141592653589793
o.mn(d,e,B.o9.j(0.55),v*3,10)
o.mn(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.o9.j(0.8).gp(0)
d.N(new A.o(v+r*34,u+q*22),4,p)}},
clw(d,e){var w,v,u,t,s,r,q,p,o=this
o.mh(d,e,D.dx4)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bn(new A.a1(q,p,q+36,p+22),B.iB)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=A.ar(B.i9,B.m4,r).gp(0)
d.am(p,q)}o.Bv(d,e,9)
o.mn(d,e,B.c.j(0.4),w*2.2,12)},
ckN(d,e){var w,v,u,t,s,r,q,p
this.mh(d,e,D.dlp)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.o(v,u),34)
$.Q()
s=A.K()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cC(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.o(v+t*34,u+s*34),3,p)}},
ckF(d,e){var w,v,u,t,s,r,q
this.mh(d,e,D.dh_)
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
u.r=B.dj.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mn(d,e,B.ld.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.au2.prototype={
a0f(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRP(),$async$a0f)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9D(s),$async$a0f)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0f,v)},
ahi(d){return this.cnP(d)},
cnP(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.isK(d),$async$ahi)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahi,v)},
B(d){var w,v,u,t=null,s=A.S(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jW:B.jk
w=x.p
v=A.a([C.aSc(!0,B.rm,1/0,B.qH,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c2(new A.bM(B.b7,t,t,new A.D(B.uq,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.n(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.V,t,t,!0,t,t,t,t,t,B.aBp,t,t),t,t,t),t),t),new A.p(t,t,t,t,t,new A.a8(B.b7,B.b9,B.x,u,t,t),B.n),B.bj))}v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bV3,D.fDV,new C.cor(this,d),A.bp(B.aX,t,t,t,B.c,t,B.k2,t,t,t,t,B.cf)),1),B.ae,A.E(A.es(D.c2D,D.fT9,this.gceK(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.k2,t,t,D.b4W,t,t,t,B.cf)),1)],w),B.l,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fH(1.7777777777777777,A.aI(!1,B.a3,!0,B.rm,new A.an(B.a0,t,B.b3,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.aj),t)}}
C.aN8.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aV8.prototype={}
C.aV7.prototype={}
C.aTa.prototype={}
C.a_f.prototype={
S(){return new C.aAi()}}
C.aAi.prototype={
Y(){var w,v,u=this
u.a4()
u.a.toString
w=new A.ba("",B.b6,B.aR)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
KO(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fja)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aV8(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.S(d).ax.a===B.J,l=m?B.ee:B.c,k=A.l(20),j=A.q(n,D.c2i,B.f,n,n,new A.p(B.aX.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.n(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bH,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.n(n,n,m?B.bv:B.br,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cy,m?B.bv:B.br,n,n,n,n),n,n,n,new C.d8w(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.n(n,n,m?B.bv:B.br,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.n(n,n,m?B.bv:B.br,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hrC(new C.d8x(o),o.e)
u=o.d
u===$&&A.c()
t=A.n(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jW:B.jk
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bP
t=A.aM(n,B.a_,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bt(n,new A.b6(4,r,B.dq),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d8y(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.Kv,n,n,n,n)
u=m?B.aP:B.as
m=m?B.eh:B.bP
return A.eP(n,l,new A.cP(B.m0,A.ce(A.x(A.a([j,B.aQ,i,B.ax,w,B.T,v,B.aQ,t,B.bz,A.A(A.a([A.E(A.dU(B.dn,new C.d8z(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cp,n,new A.b9(A.l(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bJ(D.fTp,n,o.ga3l(),A.bp(B.aX,n,n,n,B.c,n,B.cp,n,new A.b9(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.Ck,n,n,B.ah),n),n,n,n,A1.Cl,B.d7,n,new A.b9(k,B.a1),n)}}
C.a_e.prototype={
S(){return new C.aAh()}}
C.aAh.prototype={
Y(){this.a4()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
KO(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fgN)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aV7(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.S(d).ax.a===B.J,o=p?B.ee:B.c,n=A.l(20),m=A.q(q,D.bZJ,B.f,q,q,new A.p(B.bR.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.n(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bH,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.n(q,q,p?B.bv:B.br,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cy,p?B.bv:B.br,q,q,q,q),q,q,q,new C.d8s(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.j,0,q,q)
l=B.aX.j(p?0.12:0.08)
w=A.l(12)
v=A.L(B.aX.j(0.25),B.r,1)
u=A.X(B.aot,B.aX.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.n(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.j,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.n),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.n(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jW:B.jk
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bP
v=A.aM(q,B.a_,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bt(q,new A.b6(4,t,B.dq),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d8t(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l3,q,q,q,q)
w=p?B.aP:B.as
p=p?B.eh:B.bP
return A.eP(q,o,new A.cP(B.m0,A.ce(A.x(A.a([m,B.aQ,l,B.aB,v,B.bz,A.A(A.a([A.E(A.dU(B.dn,new C.d8u(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cp,q,new A.b9(A.l(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bJ(D.h_u,q,this.ga3l(),A.bp(B.bR,q,q,q,B.c,q,B.cp,q,new A.b9(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.Ck,q,q,B.ah),q),q,q,q,A1.Cl,B.d7,q,new A.b9(n,B.a1),q)}}
C.ZM.prototype={
S(){return new C.az0()}}
C.az0.prototype={
Y(){var w,v=this
v.a4()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aR),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.aw,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.aw,w)},
t(){var w,v=this,u=v.d
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
v.a3()},
gK5(){var w,v=this.e
v===$&&A.c()
w=A.cX(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakt(){var w=this.f
w===$&&A.c()
w=A.cX(B.a.i(w.a.a))
return w==null?0:w},
gb6n(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQJ(d){var w,v=B.i.D(this.gK5()+d,0.25,999999),u=B.i.iH(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.i.M(v))
else{u=B.i.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cGO())},
azL(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aX,w,w,w,20):w,u=d.a,t=u?B.jW:B.jk,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bP
return A.bt(w,new A.b6(4,s,B.dq),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.adS),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceL(d,e,f){return this.azL(d,e,f,null)},
KO(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakt()<=0){s.c.L(x.q).f.T(D.fl4)
return}r=s.c
r.toString
v=s.gK5()
u=s.gakt()
t=s.gb6n()
A.a6(r,!1).O(new C.aTa(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.uj(n),l=n?B.ee:B.c,k=A.l(24),j=x.O,i=A.a([B.aX.j(0.22),B.bR.j(0.14)],j),h=A.l(14)
i=A.q(o,D.bT_,B.f,o,o,new A.p(o,o,A.L(B.aX.j(0.35),B.r,1),h,o,new A.a8(B.a7,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bH,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cy,n?B.bv:B.br,o,o,o,o),o,o,o,new C.cGU(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.a_,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azL(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Px),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.Kv,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jW:B.jk
t=A.l(14)
s=A.L(n?B.eh:B.bP,B.r,1)
r=A.aH(o,o,o,o,A.X(B.wM,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cGV(p),o,o,o,o,o,B.cf)
q=p.e
q===$&&A.c()
q=A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c4b,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cGW(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.X(B.hY,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cGX(p),o,o,o,o,o,B.cf)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azL(m,"Amount","0.00",B.hZ),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ea,o,o,o,1,o,o,!1,"\u2022",o,new C.cGY(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.N(D.d9K,new C.cGZ(p,m),t),t.k("ak.E"))
i=A.a([i,B.bz,v,B.aB,h,B.T,s,B.af,A.bV(B.bG,u,B.bs,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.a_,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceL(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cH_(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l3,o,o,o,o)],w))}i.push(B.aQ)
h=B.aX.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.L(B.aX.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.n(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK5()===B.i.iH(p.gK5())?B.i.M(p.gK5()):p.gK5()
s=p.gb6n()
r=A.Bt(p.gakt())
i.push(A.q(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.n(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bFN(p.gK5()*p.gakt(),B.b2,!1,B.u)],w),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a8(B.a7,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jo,o,o,o))
i.push(B.bz)
j=A.l(14)
h=n?B.eh:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cp,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cH0(d),h),1),B.au,A.E(A.dh(D.arX,D.fWo,p.ga3l(),A.bp(B.aX,o,o,0,B.c,o,B.cp,o,new A.b9(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.j,0,o,o))
return A.eP(o,l,new A.cP(Af.Xx,A.ce(A.x(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Ai.rW,o,o,B.ah),o),o,o,o,B.Ob,B.d7,o,new A.b9(k,B.a1),o)}}
C.a2n.prototype={
S(){return new C.byk()}}
C.byk.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aR),v)},
t(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=r?B.ee:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.n(s,s,r?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.n(s,s,r?B.aP:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jW:B.jk
v=A.aM(s,B.a_,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bt(s,new A.b6(4,A.l(12),B.dq),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fmd(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dn,new C.fme(d),s),1)
r=A.bp(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eP(s,q,new A.D(B.Ck,A.x(A.a([o,B.aB,v,B.aQ,A.A(A.a([u,B.au,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fmf(t,d),r),1)],w),B.l,s,B.e,B.j,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d7,s,new A.b9(p,B.a1),s)}}
C.acF.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gp.prototype={
S(){return new C.byi(null,null)}}
C.byi.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bA0,null,1,null,v)
w.cO(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBi()},
gbCU(){switch(this.a.r.a){case 1:return A.a([B.aX,B.bR,B.b2],x.O)
case 2:return A.a([B.bx,B.aX,B.b2],x.O)
case 3:return A.a([B.aH,B.cg,B.jX],x.O)
case 4:return A.a([B.hr,B.bR,B.fo],x.O)
case 0:return A.a([B.aX,B.bR,B.b2],x.O)}},
B(d){var w=A.S(d),v=this.d
v===$&&A.c()
return new A.en(A.c5(v,new C.fmb(this,new C.uj(w.ax.a===B.J)),null),null)}}
C.ayU.prototype={
S(){return new C.byj(null,null)}}
C.byj.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nC,null,1,null,v)
w.cO(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBj()},
B(d){var w=this.d
w===$&&A.c()
return A.c5(w,new C.fmc(this),null)}}
C.byh.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bn(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aN(w,w))
u=new A.aG($.Q().r,B.ai,null,null,A.a([],x.v))
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
w=A.xO(u)
t=A.a([],x.U)
w=new A.ry(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jI(y.B));--r
q=new A.BT(w,r)
w.iy()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUi(d,q,r,o,0,0.2,4.2,0.92)
p.aUi(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUi(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hOe(e.a.a,e,t,t+f*i,!0),r=A.bE7(s.glV().a.getBounds())
$.Q()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bu
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a7,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Iu,null).aK(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aPg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.uj.prototype={}
C.au1.prototype={
S(){return new C.aGA()},
ge3(){return this.c}}
C.aGA.prototype={
Y(){var w=this
w.a4()
w.d=w.a.d
w.ai8()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.M9(w,v)
this.a3()},
ai8(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ai8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEg(t.c,t.d.a),$async$ai8)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eUV(u,s))
return A.h(null,v)}})
return A.i($async$ai8,v)},
QL(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eUM(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.M9(t,s),$async$QL)
case 2:if(u.c!=null)u.m(new C.eUN(u))
return A.h(null,v)}})
return A.i($async$QL,v)},
Ri(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ri=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.S(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eUT(t,new C.uj(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Ri)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9D(q),$async$Ri)
case 6:case 5:t.m(new C.eUU(t,r))
w=7
return A.b(t.QL(),$async$Ri)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ri,v)},
Wv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.isv(r),$async$Wv)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eUH(t,new C.rq(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QL(),$async$Wv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
cjR(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hFL(t,new C.eUL(u),w,v)},
ac1(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b4I,w,w,B.n),w,22,w,w,w,w,w,22)},
ab3(d){return this.bOV(d)},
bOV(d){var w=0,v=A.j(x.H),u=this
var $async$ab3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eUK(u,d))
w=2
return A.b(u.QL(),$async$ab3)
case 2:return A.h(null,v)}})
return A.i($async$ab3,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.S(a2).ax.a===B.J,e=f?B.c5:B.iG,d=A.l(8),a0=A.X(Y.a1T,f?B.bv:B.br,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.GY,A.A(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.n(g,g,f?B.bv:B.br,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eUW(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b3,B.t,A.a([A.by(A.l(22),C.aSc(!0,A.l(22),1/0,B.qH,g,d,1/0),B.aq),A.ap(10,A.dh(D.bXE,D.fYN,h.gb4j(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hf,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aX.j(f?0.5:0.38),B.f_,22),new A.ac(-4,B.G,B.bR.j(0.2),B.H,32)],w)
u=A.l(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.H,10)],w)
s=A.l(16)
r=h.d
v=A.q(g,A.q(g,A.by(s,new A.an(B.a0,g,B.b3,B.t,A.a([C.aSc(!0,A.l(16),1/0,B.P_,g,r.c,1/0),A.c2(g,new A.p(g,g,g,g,g,new A.a8(B.b7,B.b9,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bj),A.ap(g,h.ac1(!0),g,g,8,g,8,g),A.ap(g,A.cDr(h.ac1(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cDr(h.ac1(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cDr(h.ac1(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bTA,D.fS4,h.gb4j(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hf,g,new A.b9(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.c5T,B.n),g,g,g,g,B.me,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.n(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bfr,B.od,B.hc],u):A.a([B.b2,B.aX,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aX.j(f?0.45:0.35),B.f_,24)],t)
r=A.l(22)
p=A.ap(g,A.X(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.n(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.n),g,g,g,g,B.hd,g,g,g)],a1),B.l,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.n(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bFN(h.d.gxG(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.T,A.d("Sum of all budget line items",g,g,g,g,g,g,A.n(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.L(B.ht.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cL,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.q(g,A.by(r,new A.an(B.a0,g,B.ab,B.t,A.a([p,new A.D(D.bEQ,A.A(A.a([o,B.au,A.aI(!1,B.a3,!0,g,A.aP(!1,n,!0,A.eJ(new A.D(U.wn,A.x(A.a([A.q(g,D.arx,B.f,g,g,new A.p(j,g,A.L(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fO,D.fGJ],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjQ(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,g,v,s,new A.a8(B.aA,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aQ,w,B.T,u,B.bz,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.n(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b5,A.dh(Au.a3K,D.fEz,h.gbDn(),A.bp(B.aX,g,g,g,B.c,g,B.iw,g,new A.b9(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.j,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ee:B.c
v=A.l(14)
u=A.L(f?B.eh:B.bP,B.r,1)
t=A.X(B.a2d,f?B.bv:B.br,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.n(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.x(A.a([t,B.X,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.n(g,g,f?B.bv:B.br,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.j,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.n),g,g,g,g,B.qD,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eUX(h,new C.uj(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Ca,A.as(A.n6(g,f?B.bv:B.br,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cd,a0,g),A.E(A.ce(A.x(d,B.E,g,B.e,B.j,0,B.p),B.t,g,B.y,g,E.yQ,g,g,B.ah),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bH3(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ee:B.c,p=A.l(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cL,12)],x.V),n=A.l(16),m=A.q(u,u,B.f,u,u,D.b7t,u,u,u,u,u,u,u,5),l=B.aX.j(r?0.22:0.12),k=A.l(12)
l=A.q(u,A.X(s?B.id:B.hy,B.b2,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.n(u,u,r?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_m()
v=A.Bt(d.d)
B.d.v(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.n(u,u,r?B.bv:B.br,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.bb,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aX.j(0.14),B.bR.j(0.1)],x.O)
w=A.l(12)
k=A.q(u,C.bFN(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a8(B.a7,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hf,u,u,u)
w=x.p
return A.q(u,A.by(n,new A.EP(A.A(A.a([m,A.E(new A.D(B.alq,A.A(A.a([l,B.bd,t,B.ae,k,A.aH(u,u,u,u,A.X(B.cy,(r?B.bv:B.br).j(0.75),u,u,u,20),u,u,u,new C.eUI(this,d),u,u,u,u,u,B.cf)],w),B.l,u,B.e,B.j,0,u,u),u),1)],w),B.al,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b6k,new A.p(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aeI.prototype={
EY(d){return this.bQi(d)},
bQi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pz(d,o,!1),$async$EY)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bP(Ah.C8,null,x.H),$async$EY)
case 4:s=t.d
w=5
return A.b(C.fVW(!0,o,s),$async$EY)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hk(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EY)
case 6:p=f
w=7
return A.b(A.py(o,!1),$async$EY)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EY,v)},
a0h(d){return this.cAf(d)},
cAf(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pz(d,s,!1),$async$a0h)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hy(d,new C.atW(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.py(s,!1),$async$a0h)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0h,v)},
QM(d){return this.cwj(d)},
cwj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hy(d,D.aL9,!0,"NgmyWorksheetProjectScan",x.N),$async$QM)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFO(s),$async$QM)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fkb)
w=1
break}q=C.hha(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$QM)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QM,v)},
a0i(d){return this.cIy(d)},
cIy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bFk(),$async$a0i)
case 3:s=f
if(s==null){w=1
break}r=C.hha(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0i)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0i,v)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=new C.uj(u),s=w.d.d.length,r=u?B.ee:B.c,q=A.l(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kB,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wm,A.q(v,A.x(A.a([w.cyP(d,t,s),new A.D(D.bEe,A.x(A.a([w.b7i(t,"QR restore"),B.X,A.A(A.a([w.b2i(t,!0,B.jK,B.aH,B.aH,new C.eUZ(w,d),"Show to scan","QR code"),B.au,w.azM(t,B.jq,B.b8,B.bp,new C.eV_(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.j,0,v,v),B.d8,w.b7i(t,"Backup files"),B.X,A.A(A.a([w.azM(t,B.i_,B.aX,B.bR,new C.eV0(w,d),"Full copy","Backup file"),B.au,w.azM(t,R.zs,B.av,B.aS,new C.eV1(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.aq,v,v,new A.p(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eV,B.cG,B.fU],k):A.a([B.b2,B.aX,B.bR],k)
w=A.ap(l,A.X(B.uV,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kS,l,l,l,36),l,l,l)
u=A.l(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cL,12)],x.V)
r=this.d
s=A.q(l,C.aSc(!0,A.l(13),64,D.bOS,l,r.c,64),B.aq,l,l,new A.p(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.n(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abj,l,l,l)
r=C.bFN(r.gxG(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.an(B.a0,l,B.ab,B.t,A.a([w,new A.D(D.bEB,A.x(A.a([v,A.A(A.a([s,B.ex,A.E(A.x(A.a([u,B.ax,t,B.T,A.A(A.a([r,B.ae,A.q(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.n(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.n),l,l,l,l,B.fY,l,l,l)],m),B.l,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cy,B.c.j(0.85),l,l,l,l),l,l,l,new C.eUY(d),l,l,l,A.o1(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aTv,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.l,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a8(B.aA,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7i(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aX,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.n(w,w,d.a?B.bv:B.br,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
b2i(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.ajZ:B.aP
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eh:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cL,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.L(h.j(0.35),B.r,1)
t=A.q(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.n),r,r,r,r,B.rY,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.n(r,r,o?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.eJ(new A.D(E.a0g,A.x(A.a([t,B.af,u,B.bH,A.d(j,r,r,r,r,r,r,A.n(r,r,o?B.bv:B.br,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azM(d,e,f,g,h,i,j){return this.b2i(d,!1,e,f,g,h,i,j)}}
C.atW.prototype={
S(){return new C.bni()}}
C.bni.prototype={
Y(){this.a4()
this.ag2()},
ag2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFP(p.c,p.d),$async$ag2)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eUC(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eUD(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.S(d).ax.a===B.J,f=g?B.BH:B.iG,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eN,g?B.ac:B.am,h,h,h,18),h,h,h,new C.eUE(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.n(h,h,g?B.c:B.U,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tz],u),B.l,h,B.e,B.j,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.eV,B.cG,B.fU],s):A.a([B.b2,B.aX,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aX.j(g?0.4:0.3),B.f_,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dk,B.K,h,h)
p=C.bFN(p.gxG(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.q(h,A.x(A.a([o,B.an,A.A(A.a([p,B.ae,A.q(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.n(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.n),h,h,h,h,B.fY,h,h,h)],u),B.l,h,B.bb,B.j,0,h,h)],u),B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a8(B.aA,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a0D,h,h,1/0)
t=g?D.bqE:B.c
q=A.l(24)
p=A.L(w?B.aH.j(0.4):B.aX.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vl,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.erF)
else{m=A.l(20)
l=A.L(B.aO,B.r,1)
o.push(A.q(h,A.qd(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aH:B.aX
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.L((w?B.aH:B.aX).j(0.35),B.r,1)
k=w?B.Pd:B.PM
k=A.X(k,w?B.aH:B.aX,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.n(h,h,g?B.ac:B.am,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.j,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.n),h,h,h,h,B.iw,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ad.Om,e,h),A.E(A.ce(A.x(A.a([s,B.aQ,A.q(h,A.x(o,B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.n),h,h,h,h,B.ux,h,h,1/0)],u),B.l,h,B.e,B.j,0,B.p),B.t,h,B.y,h,E.amy,h,h,B.ah),1)],u),B.l,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.au0.prototype={
S(){return new C.aGz(A.zZ(B.NF,B.o4,B.v2))}}
C.aGz.prototype={
t(){this.d.t()
this.a3()},
aOH(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j1(w,d)},
cfD(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.ipP(t)
if(s!=null){this.aOH(s)
return}r=C.hwb(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOH(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eH(A.a([A.aH(t,t,t,t,A.X(u.f?B.uK:A8.Pl,t,t,t,t,t),t,t,t,new C.eUG(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BH,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fRX,t,t,t,1,t,!0),q=A.zY(u.d,B.c_,u.gcfC()),p=A.l(28)
p=A.as(A.q(t,t,B.f,t,t,new A.p(t,t,A.L(B.aX,B.r,3),p,A.a([new A.ac(2,B.G,B.aX.j(0.35),B.H,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b3,B.t,A.a([q,p,A.ap(32,A.q(t,D.fQI,B.f,t,t,new A.p(w,t,A.L(B.aX.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jo,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLt.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P3.prototype={
S(){return new C.aGB(D.ada,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGB.prototype={
gcGk(){return J.bGX(this.e,0,new C.eVo())},
Y(){this.a4()
$.aW.c1$.push(this)
this.wj()},
t(){$.aW.hV(this)
this.a3()},
jl(d){if(d===B.fT)this.wj()},
wj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DE(q.a.c).dh(0,B.k1),$async$wj)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eVk(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eVl(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wj,v)},
Iu(d){return this.bN2(d)},
bN1(){return this.Iu(null)},
bN2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isx(l,d),$async$Iu)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lD(l,r,q,D.dlF,new A.V(Date.now(),0,!1))
w=4
return A.b(C.M9(t.a.c,p),$async$Iu)
case 4:o=f
w=5
return A.b(t.wj(),$async$Iu)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fhg)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fj4)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.F1(m)
case 1:return A.h(u,v)}})
return A.i($async$Iu,v)},
F1(d){return this.cjC(d)},
cjC(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hy(s,new C.au1(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F1)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.M9(u.a.c,t),$async$F1)
case 5:case 4:w=6
return A.b(u.wj(),$async$F1)
case 6:return A.h(null,v)}})
return A.i($async$F1,v)},
w4(d){return this.c2n(d)},
c2n(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFk(),$async$w4)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hy(r,D.aL9,!0,"NgmyWorksheetProjectScan",x.N),$async$w4)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFO(q),$async$w4)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hha(s)
w=15
return A.b(C.M9(t.a.c,p),$async$w4)
case 15:o=f
w=16
return A.b(t.wj(),$async$w4)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fj9)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.F1(p)
case 1:return A.h(u,v)}})
return A.i($async$w4,v)},
Or(d){return this.bLG(d)},
bLG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Or=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eV5(d),s,null,!0,!0,x.y),$async$Or)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p7(t.a.c,A.a([],x.D)),$async$Or)
case 6:w=7
return A.b(t.wj(),$async$Or)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fhl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
cjP(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eVe(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7V(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jW
else w=B.c
v=A.l(16)
u=A.L(p?B.eh:B.bP,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.q(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.n(r,r,p?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(r,A.x(A.a([s,B.af,t,B.bH,A.d(h,r,r,r,r,r,r,A.n(r,r,p?B.bv:B.br,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.n),r,r,r,r,B.wl,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0N(d,e){return this.cjD(d,e)},
cjD(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0N=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eV9(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0N)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hFL(r,new C.eVa(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ot(d,e),$async$a0N)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0N,v)},
b4W(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.q(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.as
t=A.d(j,u,u,u,u,u,u,A.n(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.n(u,u,w?B.bv:B.br,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cj,A.A(A.a([s,B.bd,t,A.X(B.eJ,w?B.bv:B.br,u,u,u,u)],v),B.l,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqy(d,e,f,g,h,i){return this.b4W(!1,d,e,f,g,h,i)},
Ot(d,e){return this.bLQ(d,e)},
bLQ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ot=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lo(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ot)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bE1(t.a.c,d.a),$async$Ot)
case 6:w=7
return A.b(t.wj(),$async$Ot)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.uj(n),l=n?B.c5:B.iG
if(p.f)n=D.bdd
else{w=A.aF(d,B.dO,x.w).w
v=p.bGa(m)
u=p.c1r(m)
t=p.gbDg()
if(n)s=B.jW
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aQ,new C.Gp(A.q(o,A.A(A.a([p.aDk(P.OZ,"Projects",m,D.ada),p.aDk(B.wB,"Cashier",m,D.b1c),p.aDk(B.Hj,"Family Tree",m,D.hDL)],q),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eA,0.95,t,o),B.bz],q)
v=p.d
if(v===D.ada){v=J.ad(p.e)
B.d.v(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.n(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b5,new C.ayU(p.gaT3(),o)],q),B.l,o,B.e,B.j,0,o,o),B.aB,p.cqA(m)],q))}else{n=p.a
if(v===D.b1c)t.push(new C.apS(n.c,m,o))
else{v=p.r
t.push(new C.ar4(n.c,n.d,n.e,n.f,new C.eVr(p),new C.eVs(p),new A.bE(v,x.b4)))}}n=A.ce(A.x(t,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c4(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGa(d){var w=null,v=A.l(8),u=d.a,t=A.X(Y.a1T,u?B.bv:B.br,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kT,A.A(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.n(w,w,u?B.bv:B.br,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eV2(this),w,w,w,w,w,w,w)},
gbDg(){switch(this.d.a){case 0:return D.aco
case 1:return D.hsa
case 2:return D.acp}},
c1r(d){var w=null,v=A.l(15),u=A.a([new A.ac(0,B.G,B.aX.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.bZz,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bJd,A.aI(!1,B.a3,!0,w,A.aP(!1,A.l(12),!0,A.q(w,D.bWX,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eV6(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.j,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gp(A.q(w,A.x(A.a([new A.D(B.GP,s,w),A.q(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.n(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bt(this.gcGk()),w,w,w,w,w,w,D.fAS,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.n),w,w,w,B.uu,B.jo,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(B.aX,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hs9,w)},
aDk(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aX:B.L,q=A.l(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aX.j(0.42),B.cL,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.br
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.br
return A.E(A.aI(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e5,new A.dl(1,B.cm,A.d(e,u,1,B.a2,u,u,u,A.n(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.j,0,u,u),u,u,B.cw,new A.p(r,u,p,q,o,u,B.n),B.iL,u,u,u,u,B.GZ,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVn(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqA(d){var w,v,u,t,s,r,q=this,p=null
if(J.cr(q.e)){w=d.a
v=w?B.ee:B.c
u=A.l(15)
t=A.q(p,D.bX2,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aX.j(0.5),B.f_,28)],x.V),D.c8i,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.n(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gp(A.q(p,A.x(A.a([t,B.d8,s,B.T,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.n(p,p,w?B.bv:B.br,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e0,A.A(A.a([A.E(q.aUE(B.jq,"Scan QR",new C.eVh(q),d),1),B.au,A.E(q.aUE(R.zs,"Upload file",new C.eVi(q),d),1)],r),B.l,p,B.e,B.j,0,p,p),B.aB,A.bJ(D.h1t,p,q.gaT3(),A.bp(B.aX,p,p,p,B.c,B.h6,p,p,new A.b9(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bFH,1.05,D.aco,p)}w=J.b8(q.e,new C.eVj(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gp(A.x(w,B.l,p,B.e,B.j,0,B.p),16,B.bV,1,D.aco,p)},
aUE(d,e,f,g){var w=null,v=B.aX.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.L(B.aX.j(0.45),B.r,1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(w,A.x(A.a([A.X(d,B.b2,w,w,w,26),B.T,A.d(e,w,w,w,w,w,w,D.fz5,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.n),w,w,w,w,B.alj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqz(d,e){var w,v,u=null,t=e.a,s=t?B.ee:B.c,r=A.l(14),q=A.L(t?B.eh:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.eu,10)],x.V),o=A.l(14),n=t?B.bv:B.br
n=A.by(B.Xr,new A.fH(1.7777777777777777,C.aSc(!0,B.fj,1/0,P.OZ,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.n(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bt(d.gxG()),u,u,u,u,u,u,D.fx3,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.q(u,A.aI(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.A(A.a([v,A.aH(u,u,u,u,A.X(Al.a2W,t?B.bv:B.br,u,u,u,u),u,u,u,new C.eVf(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVg(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.p(s,u,q,r,p,u,B.n),u,u,u,B.em,u,u,u,1/0)}}
C.bA5.prototype={}
C.rq.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.I(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_m(){var w,v,u,t,s=this.c
if(s===B.i.iH(s))w=B.o.u(B.i.M(s))
else{v=B.i.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lD.prototype={
gxG(){return B.d.cF(this.d,0,new C.cG8())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a9<m,@>>")
v=A.C(new A.N(v,new C.cG7(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfi(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lD(w.a,w.b,v,u,w.e)},
bf0(d){return this.bfi(d,null)},
Tz(d){return this.bfi(null,d)}}
C.Iw.prototype={
a7(){return"FamilyGender."+this.b}}
C.hW.prototype={
aj(){var w=this
return A.I(["id",w.a,"name",w.b,"gender",C.hBf(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG3(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hW(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.am8.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kW.prototype={
gaqr(){var w=this.f
return new A.Y(w,new C.bSD(),A.U(w).k("Y<1>")).gI(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a9<m,@>>")
v=A.C(new A.N(v,new C.bSC(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ii5(w.y),"games",w.z],x.N,x.z)},
wZ(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kW(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfh(d,e){var w=null
return this.wZ(w,w,w,d,e,w,w,w,w)},
cPI(d,e,f,g,h,i,j){return this.wZ(d,e,null,f,g,h,i,j,null)},
aG8(d,e){var w=null
return this.wZ(w,w,w,w,d,w,w,e,w)},
cPK(d,e,f,g,h,i,j,k){return this.wZ(d,e,null,f,g,h,i,j,k)},
cOd(d){var w=null
return this.wZ(w,w,w,w,w,w,w,d,w)},
cOB(d){var w=null
return this.wZ(w,w,w,w,w,w,w,w,d)},
beV(d){var w=null
return this.wZ(w,w,d,w,w,w,w,w,w)},
aFU(d){var w=null
return this.wZ(w,w,w,w,w,d,w,w,w)},
cPf(d,e,f){var w=null
return this.wZ(w,d,w,w,e,w,w,f,w)},
cO0(d){var w=null
return this.wZ(w,w,w,d,w,w,w,w,w)},
cON(d,e){var w=null
return this.wZ(d,w,w,w,w,w,e,w,w)}}
C.cG9.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGa.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIF.prototype={}
C.baJ.prototype={
ak(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.baJ()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b3(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.baI.prototype={
gwR(){return!0},
gGy(){return this.z.b<this.b.length},
aWk(d){switch(0){case 0:return d.a.c}},
aW0(d){switch(0){case 0:return d.a.d}},
bVT(d,e){switch(0){case 0:return new A.hR(d,e)}},
bVg(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iO(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ig(b4)
switch(0){case 0:v=b5.b
u=new A.kR(0,v,0,1/0)
t=w===B.Vc
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aWk(g)
f.toString
e=b1.aW0(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIF(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIF(k,j,i))}d=s.length
switch(0){case 0:q=b5.cB(new A.hR(m,l))
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.J)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWk(g)
e=b1.aW0(g)
e.toString
a9=b1.bVg(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVT(a6,a3+a9)
b0=g.a
g.a=new A.iO(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lA(d)
w=d.b
w.is()
v=A.dr()
u=r.a
v.ej(u.a,u.b,0,1)
w.pm(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fV(d)
w.ny(0)},
H3(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.byl.prototype={}
var z=a.updateTypes(["aB<~>()","P(hW)","~()","P(kW)","P(nx)","a9<m,@>(kW)","H(kW,kW)","H(hW,hW)","m(hW)","kW(a9<@,@>)","P(lD)","nx(a9<@,@>)","a9<m,@>(nx)","P(uU)","uU()","H(hW)","ai<hW>()","P(zH)","a0h(Z)","m?(hW)","eI<m?>(hW)","aB<~>(lD)","P(rq)","a9<m,@>(hW)","hW(a9<@,@>)","H(lD,lD)","P(ag0)","~(bd)","v(oK)","H(H,aa5)","P(qJ<H>)","~(qJ<H>)","U5(Z)","P(MP)","P(uT)","~(hW)","m(m)","Wp(Z)","U4(Z)","aen(Z)","a_d(Z)","hW(hW)","cK(bA<m,GF>)","cK(KZ)","a_H(Z)","H?(hW)","hW()","P(KZ)","D(hW)","~(Iw)","a_D(Z)","v(Iw,m,a0)","P(afU)","bA<m,ai<a9<m,@>>>(m,ai<nx>)","a_F(Z)","+count,id,name(H,m,m)(kW)","m(kW)","a0B(Z)","a0C(Z)","P(lW)","lW()","ZM(Z)","a2n(Z)","a_f(Z)","a_e(Z)","~(H)","~(m,ls?)","v(rq)","aeI(Z)","~(ml)","aB<~>([m?])","F(F,lD)","v(lD)","F(F,rq)","a9<m,@>(rq)","rq(a9<@,@>)","ai<ls>()","uT()","m(V)","lD(a9<@,@>)","ct(Iv)","m(lD)","a9<m,@>(lD)","H(nx,nx)","kW(a9<m,@>)","kW(kW)"])
C.fOt.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.fOs.prototype={
boz(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rh(s,d,B.i0,"book",E.GB),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LY(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.boz(d)},
$S:309}
C.fOu.prototype={
$1(d){return d.b},
$S:126}
C.fY2.prototype={
$1(d){var w=null
return A.eP(w,B.L,new H.Qu(this.a,this.b,w),w,w,0,B.a0h,B.d7,w,w,w)},
$S:49}
C.fBD.prototype={
$1(d){return d!=null},
$S:232}
C.fBE.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:232}
C.fBJ.prototype={
$1(d){if(this.a)return new A.o(d.a*520,d.b*160)
return d},
$S:179}
C.fMc.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.hc(w,B.tq,w,w,w,w,w,w,w,B.dD,w,w,10.5,w,B.eB,w,!0,w,w,w,w),w),u=f?B.eB:B.wv
return new A.oc(D.bB3,A.aaV(A.a([new A.fV(130,w,v),new A.zG(1,B.Hc,A.fc(e,w,w,w,A.hc(w,g==null?D.eu4:g,w,w,w,w,w,w,w,B.dD,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yu,B.lR))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1958}
C.fMb.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w3(999)
f=A.xG(A.lR(h,A.fc("Cashier",h,h,h,A.hc(h,D.An,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),h,new A.kS(D.etW,h,f,B.i4,h),h,h,D.bBz,h))
w=A.xG(A.fc("Debt receipt",h,h,h,A.hc(h,h,h,h,h,h,h,h,h,B.dD,h,h,22,h,B.eB,h,!0,h,h,h,h),h))
v=A.xG(A.fc(C.xo(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaT,h))
u=A.w3(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.hc(h,h,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaT,h)
q=A.w3(10)
p=x.Z
u=A.lR(h,A.zz(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lR(h,A.zz(A.a([A.fc("Amount owed",h,h,h,D.aaT,h),new A.fV(h,2,h),A.fc(A.Bt(t.c),h,h,h,A.hc(h,D.An,h,h,h,h,h,h,h,B.dD,h,h,20,h,B.eB,h,!0,h,h,h,h),h)],p),B.rN,B.lR),h,new A.kS(B.pM,h,q,B.i4,h),h,h,D.bAK,1/0)],p),B.rN,B.lR),h,new A.kS(E.aMw,h,u,B.i4,h),h,h,D.bCI,1/0)
q=new A.nV(D.etZ,0.9,B.l8)
r=A.w3(12)
s=i.c
o=s.$2("Original due",C.xo(t.r,!1))
n=s.$2("Current due",C.xo(t.f,!1))
m=i.d
l=new A.nV(m,1.1,B.l8)
k=A.w3(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lR(h,A.xG(A.fc(t.gaNf(),h,h,h,A.hc(h,m,h,h,h,h,h,h,h,B.dD,h,h,11,h,B.eB,h,!0,0.5,h,h,h),h)),h,new A.kS(h,new A.q0(l,l,l,l),k,B.i4,h),h,h,D.bBH,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.An))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.An))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.hc(h,B.tq,h,h,h,h,h,h,h,B.dD,h,h,10.5,h,B.eB,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TE>")
o=A.C(new A.N(o,new C.fMa(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.baI(5,5,new C.baJ(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lR(h,A.zz(k,B.yu,B.lR),h,new A.kS(h,new A.q0(q,q,q,q),r,B.i4,h),h,h,B.alu,1/0)],p)
w=j.a
if(w!=null){v=new A.nV(B.JG,1,B.l8)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.hc(h,B.tq,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lR(h,new A.IQ(w,B.XD,h,h),h,new A.kS(h,new A.q0(v,v,v,v),A.w3(6),B.i4,h),82,h,B.Ok,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fps,h))
f.push(new A.fV(h,18,h))
f.push(A.xG(A.fc("NGMY.ORG",h,h,h,A.hc(h,D.An,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.fMa.prototype={
$1(d){var w=null,v=new A.nV(D.JH,0.7,B.l8),u=A.w3(999)
return A.lR(w,A.fc(C.xo(d,!1),w,w,w,A.hc(w,D.JH,w,w,w,w,w,w,w,B.dD,w,w,9.5,w,B.eB,w,!0,w,w,w,w),w),w,new A.kS(w,new A.q0(v,v,v,v),u,B.i4,w),w,w,D.bH7,w)},
$S:1959}
C.c7S.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.l(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.q(w,A.d(C.xo(d,!1),w,w,w,w,w,w,D.fwy,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1960}
C.fYz.prototype={
$1(d){var w=null,v=A.aF(d,B.c1,x.w).w,u=A.l(26),t=A.aH(w,w,w,w,D.c_x,w,w,w,new C.fYw(d),w,w,w,w,w,B.cf),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eP(w,B.L,new A.cP(new A.aY(0,380,0,v.a.b*0.9),A.aI(!1,B.a3,!0,u,new A.D(B.a04,A.x(A.a([new A.bM(B.aa,w,w,t,w),new A.dl(1,B.cm,A.ce(A.x(A.a([new A.en(new C.b_K(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zB,D.fYI,new C.fYx(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b9(A.l(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3A,D.fV6,new C.fYy(r,d),A.bp(B.b2,w,w,w,B.c,w,B.fg,w,new A.b9(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.j,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,Aq.a0u,B.d7,w,w,w)},
$S:49}
C.fYw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.me(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hi),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dN.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aB(o,0,32)
w=5
return A.b(A.tq(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fSR(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYr.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eP(w,B.as,A.x(A.a([new A.D(D.bCw,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.ng,w,w,w),1),A.aH(w,w,w,w,B.lp,w,w,w,new C.fYp(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),w),new A.dl(1,B.cm,new A.D(B.f3,A.by(A.l(14),A.fR(t,B.A,w,w,B.cj,B.dB,!1,w,!1,w,w),B.aq),w),w),new A.D(B.O_,new A.a5(1/0,w,A.dh(B.oF,D.aWO,new C.fYq(t,this.c,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.Oc,B.d7,w,new A.b9(v,B.a1),w)},
$S:49}
C.fYp.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tq(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYD.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eP(w,B.as,new A.D(D.bCE,A.x(A.a([A.A(A.a([D.bIi,A.aH(w,w,w,w,B.lp,w,w,w,new C.fYB(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),B.T,new A.en(A.by(A.l(14),A.q(w,A.b4(w,w,w,new C.bcV(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oF,D.aWO,new C.fYC(t,s,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:49}
C.fYB.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.me(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hi),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aB(p,0,32)
r=J.eT(B.dN.gaU(s))
w=5
return A.b(A.tq(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGu.prototype={
$1(d){return d.a===this.a},
$S:267}
C.dQc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dPY.prototype={
bnN(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ee:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dQ0(s,q,e),p,!0,!0,!1,B.JY,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQ1(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnN(d,e)},
$S:1961}
C.dQ0.prototype={
$1(d){var w,v=null,u=this.c===B.x4,t=u?D.dsv:D.do8
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.n(v,v,w.a.d.a?B.aP:B.as,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.am0,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.n(v,v,w.a.d.a?B.bv:B.br,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.ip(!0,v,v,B.y,D.ffX,new C.dQ_(this.a,w,t,d),t.length,v,B.dX,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQ_.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cG.j(0.14)
else w=t.b.a.d.a?B.U:B.aP
v=A.l(14)
if(q)u=B.cG
else u=(t.b.a.d.a?B.bv:B.br).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.q(B.A,C.b_J(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dPZ(t.d,r),s,s,s,s,s,s,s)},
$S:181}
C.dPZ.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dQ1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPW.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:88}
C.dPX.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cw,e,v)
return new A.d1(e,!1,A.ig(B.A,A.as(A.aI(!1,B.a3,!0,v,new A.dY(new C.dPV(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:33}
C.dPV.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ee:B.c,f=A.l(14),e=A.L((h?B.bv:B.br).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.eA,A.X(B.cy,i.a.d.a?B.bv:B.br,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPG(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.j,0,k,k)
w=l.d
t=A.n(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVa("Name")
r=l.a
q=r.d==null?k:new C.dPH(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bq:B.m6
n=A.L(B.cG.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.a_,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfa(new A.D(B.fB,A.aP(!1,p,!0,A.q(B.A,C.b_J(m==null?"\ud83d\udc64":A.fN0(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l3,k,B.aaI,k,k)
v=A.a([v,B.af,t,B.T,A.d("Gender (required)",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.bv:B.br,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aVR("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dPI(r,a0),r.d===B.x4),1),B.ae,A.E(i.aVR("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dPN(r,a0),r.d===B.a7p),1)],u),B.l,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.T,new A.bM(B.a7,k,k,A.ho(D.bYO,D.fX_,new C.dPO(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cG,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cf)),k)],u))
v.push(B.X)
t=A.n(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uX(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.a_,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVb("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ea,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.U:B.aP
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.L((t?B.bv:B.br).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xo(r.a,!1)
v.push(A.aI(!1,B.a3,!0,q,A.aP(!1,p,!0,A.q(k,A.A(A.a([A.E(A.x(A.a([t,B.bH,A.d(m,k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bVt],u),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.n),k,k,k,k,B.bh,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPP(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.T,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.n(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.a_,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVa("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.n(k,k,i.a.d.a?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3j(r.b.length!==0,B.n1,new C.dPQ(r,i,a0),new C.dPR(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3j(r.c.length!==0,D.bOQ,new C.dPS(r,i,d,a0),new C.dPT(r,a0),"Camera or gallery","Selfie"))
v.push(B.T)
t=l.w
v.push(new Ap.a8J("Signature (optional)",t,new C.dPU(a0),new C.dPJ(a0,t),new C.dPK(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.br
s=(i?B.bv:B.br).j(0.28)
s=A.E(A.dU(E.aWH,new C.dPL(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qB,k,new A.b9(A.l(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cG,k,k,k,B.c,k,B.qB,k,new A.b9(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vA,k,k,k),k,new C.dPM(r,w,d),t),1)],u),B.l,k,B.e,B.j,0,k,k))
return A.q(k,A.ce(A.x(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.n),k,k,k,B.rV,B.jo,k,k,360)},
$S:172}
C.dPG.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPH.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPI.prototype={
$0(){return this.b.$1(new C.dPF(this.a))},
$S:0}
C.dPF.prototype={
$0(){var w=this.a
w.d=B.x4
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPN.prototype={
$0(){return this.b.$1(new C.dPE(this.a))},
$S:0}
C.dPE.prototype={
$0(){var w=this.a
w.d=B.a7p
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPO.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xt(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dPD(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPD.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dPQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q3(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dPC(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPC.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dPR.prototype={
$0(){return this.b.$1(new C.dPB(this.a))},
$S:0}
C.dPB.prototype={
$0(){return this.a.b=""},
$S:0}
C.dPS.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ee:B.c
w=3
return A.b(A.bT(q,null,new C.dPz(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q3(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dPA(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPz.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aro,w,w,w,w,new C.dPt(d),!1,w,w,w,w,w,w,w,D.fMZ,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arm,w,w,w,w,new C.dPu(d),!1,w,w,w,w,w,w,w,D.fU6,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPt.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dPu.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dPA.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dPT.prototype={
$0(){return this.b.$1(new C.dPy(this.a))},
$S:0}
C.dPy.prototype={
$0(){return this.a.c=""},
$S:0}
C.dPU.prototype={
$0(){return this.a.$1(new C.dPx())},
$S:0}
C.dPx.prototype={
$0(){},
$S:0}
C.dPJ.prototype={
$0(){return this.a.$1(new C.dPw(this.b))},
$S:0}
C.dPw.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dPK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiQ(u.a,null,null,new C.dPv(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPv.prototype={
$4(d,e,f,g){this.a.$1(new C.dPs(this.b,d))},
$S:444}
C.dPs.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dPL.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPM.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fl3)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fhU)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dQf.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:88}
C.dQg.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ee:B.c,n=A.l(14),m=A.L((p?B.bv:B.br).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.n(r,r,q.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bt(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.n(r,r,q.a.d.a?B.bv:B.br,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zJ(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.n(r,r,w.zJ(r).length>0?B.bC:B.cG,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.br
t=(q?B.bv:B.br).j(0.28)
s=x.p
return new A.d1(e,!1,A.as(A.aI(!1,B.a3,!0,r,A.q(r,A.x(A.a([p,B.T,v,u,B.aB,A.A(A.a([A.E(A.dU(B.nZ,new C.dQd(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k2,r,new A.b9(A.l(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.fUx,r,new C.dQe(d),A.bp(B.cG,r,r,r,B.c,r,B.k2,r,new A.b9(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.j,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.n),r,r,r,B.Cm,B.GP,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:33}
C.dQd.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dQe.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dQ9.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQa(r),p=r.a.d.a,o=p?B.ee:B.c,n=A.l(14),m=A.L((p?B.bv:B.br).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.n(s,s,r.a.d.a?B.aP:B.as,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bt(l.c),s,s,s,s,s,s,D.fy7,s,s,s)],p),B.l,s,B.e,B.j,0,s,s)
w=A.iK((r.a.d.a?B.bv:B.br).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2d,"View receipt",new C.dQ2(r,d,l))
u=l.x!=null
t=u?B.py:B.qK
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bCB,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQ3(r,d,l)),q.$3$icon$label$onTap(B.Cz,"Edit",new C.dQ4(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.n1,"View / download ID",new C.dQ5(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bOP,"View / download selfie",new C.dQ6(r,d,l)))
if(l.gaHP())p.push(q.$3$icon$label$onTap(Ac.a3q,"View / download signature",new C.dQ7(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.ei,"Delete",new C.dQ8(r,d,l)))
p.push(B.ax)
return A.bm(!0,new A.D(B.uu,A.q(s,A.x(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQa.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.eY,A.A(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.n(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1962}
C.dQ2.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYv(w,this.c)},
$S:0}
C.dQ3.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.ST(this.c)},
$S:0}
C.dQ4.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DG(this.c)},
$S:0}
C.dQ5.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bG8(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQ6.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bG8(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQ7.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYA(w,this.c)},
$S:0}
C.dQ8.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Q2(0,this.c)},
$S:0}
C.dQh.prototype={
$1(d){return d.x==null},
$S:267}
C.dQi.prototype={
$1(d){return d.x!=null},
$S:267}
C.dQj.prototype={
$2(d,e){return d+e.c},
$S:1963}
C.dQk.prototype={
$0(){return this.a.bDM()},
$S:0}
C.dQb.prototype={
$0(){return this.a.agf(this.b)},
$S:0}
C.fHf.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fHg.prototype={
$0(){return B.d.gH(D.a4K)},
$S:z+77}
C.dfT.prototype={
$0(){var w=this.a
return w.m(new C.dfR(w,this.b))},
$S:0}
C.dfR.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfS.prototype={
$0(){},
$S:0}
C.dfU.prototype={
$0(){var w=this.a.gc2b()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fJK.prototype={
$1(d){return C.hly(A.a2(d,x.N,x.z))},
$S:z+11}
C.fJL.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fJM.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fX6.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h4D.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fGl.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRk.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eG(e,v)?v:null},
$S:1964}
C.fXH.prototype={
$1(d){var w=this
return new C.a_F(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dgy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dgx(w,d))},
$S:z+80}
C.dgx.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgm.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgj.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dfV.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dfW.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgn.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dg3.prototype={
$1(d){var w=null,v=A.S(d).ax.a===B.J,u=v?B.ee:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.n(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.n(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dg1(d),w,w),A.bJ(B.xr,w,new C.dg2(d),A.bp(B.nq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dg1.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dg2.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dg4.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgk.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgl.prototype={
$0(){return B.d.gH(D.zO)},
$S:z+14}
C.dg_.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz3(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.U4(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dg0.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg5.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_d(v,u,J.ad(w.d),null)},
$S:z+40}
C.dg6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgw.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.az(s,new C.ZV(r.y,r.gz3(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dgu(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bch(v,e,w,u,t,r.gbUl(),C.hBe(r.y.Q),r.gz3(0),s)
w=t}return A.c5(q,new C.dgv(r,e),new A.D(B.a0m,w,s))},
$S:1965}
C.dgv.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvn(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fz(B.a7,A.d3(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.dgu.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ0(B.qt,B.iv)},
$S:0}
C.dgg.prototype={
$0(){var w=this.a
return w.m(new C.dgf(w))},
$S:0}
C.dgf.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgh.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dfX.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=E.kq.j(0.5),r=x.p,q=A.a([D.fLx,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cr(p.d)?"Write this book":"Write a new book"
q.push(p.ZP(d,B.ef,w,J.cr(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZP(d,K.apj,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.d("Your book is in English.",u,u,u,u,u,u,A.n(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.n(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZP(d,W.aqm,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZP(d,B.qP,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZP(d,B.qP,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eP(u,E.BR,A.bm(!0,new A.D(Ab.yN,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,I.a0w,B.d7,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dgi.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dg9.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_H(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dga.prototype={
$1(d){var w=null
return A.oP(!1,A.eg(w,w,w,E.BR,new A.k4(this.a,new C.dg8(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:323}
C.dg8.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aan,B.oW,A.E(A.d(e,w,w,w,w,w,w,B.jw,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:760}
C.dgb.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dgc.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:192}
C.dgd.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dge.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BC(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SH(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dg7(s,t))
w=4
return A.b(s.lg(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dg7.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgp.prototype={
$1(d){var w=null
return A.oP(!1,A.eg(w,w,w,E.BR,new A.k4(this.a,new C.dgo(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:323}
C.dgo.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aan,B.oW,A.E(A.d(e,w,w,w,w,w,w,B.jw,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:760}
C.dgq.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dgr.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:192}
C.dgs.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:192}
C.dgt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BC(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lg(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfY.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkK(B.qt,A4.NO)},
$S:0}
C.dfZ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ0(B.qt,A4.NO)},
$S:0}
C.dik.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dil.prototype={
$1(d){var w=this.a
return w.m(new C.dij(w))},
$S:9}
C.dij.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dim.prototype={
$1(d){var w=this.a
return w.m(new C.dii(w))},
$S:9}
C.dii.prototype={
$0(){return this.a.e="book"},
$S:0}
C.din.prototype={
$1(d){var w=this.a
return w.m(new C.dih(w))},
$S:9}
C.dih.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dio.prototype={
$0(){var w=this.a
return w.m(new C.dig(w,this.b))},
$S:0}
C.dig.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dip.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2C()
A.a6(this.b,!1).O(new A.bra(w,v))},
$S:0}
C.dgN.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dgM.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_D(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dgR.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dgQ.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baK(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hk,v,v,v)
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.dgO(d),v,v),A.bJ(B.xr,v,new C.dgP(d),A.bp(B.nq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BR,w,v,v,v,v,D.fKj,v)},
$S:18}
C.dgO.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgP.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dgT.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ce(A.bV(B.bG,r,B.bs,t,18,14),B.t,t,B.y,t,D.bDz,t,t,B.ah)},
$S:302}
C.dgL.prototype={
$0(){return this.a.QQ(0,this.b)},
$S:0}
C.dgK.prototype={
$0(){return this.a.Qh(0,this.b)},
$S:0}
C.cP6.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cP7.prototype={
$0(){return B.d.gH(D.zO)},
$S:z+14}
C.cP8.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bR(0,new A.D(d,A.c2(w,new A.p(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bj),w),0,0,0)},
$S:1967}
C.d7K.prototype={
$1(d){return this.a.m(new C.d7J(this.b,this.c))},
$S:9}
C.d7J.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d88.prototype={
$1(d){return this.a.m(new C.d7W())},
$S:2}
C.d7W.prototype={
$0(){},
$S:0}
C.d89.prototype={
$1(d){return this.a.m(new C.d7V())},
$S:2}
C.d7V.prototype={
$0(){},
$S:0}
C.d8a.prototype={
$0(){var w=this.a
return w.m(new C.d7U(w,this.b))},
$S:0}
C.d7U.prototype={
$0(){var w=this.a
return w.d=w.goq().Ge(this.b.a)},
$S:0}
C.d8b.prototype={
$0(){var w=this.a
return w.m(new C.d7T(w,this.b))},
$S:0}
C.d7T.prototype={
$0(){var w=this.a
return w.d=w.goq().cNx(this.b)},
$S:0}
C.d8c.prototype={
$1(d){return this.a.m(new C.d7S())},
$S:2}
C.d7S.prototype={
$0(){},
$S:0}
C.d8d.prototype={
$0(){var w=this.a
return w.m(new C.d7R(w,this.b))},
$S:0}
C.d7R.prototype={
$0(){var w=this.a
return w.d=w.goq().cNC(this.b.a)},
$S:0}
C.d8e.prototype={
$1(d){var w=this.a
return w.m(new C.d83(w,d))},
$S:6}
C.d83.prototype={
$0(){var w=this.a
return w.d=w.goq().cOw(this.b)},
$S:0}
C.d8f.prototype={
$1(d){var w=this.a
return w.d=w.goq().aFX(d)},
$S:2}
C.d8g.prototype={
$1(d){var w=this.a
return w.d=w.goq().cNF(d)},
$S:2}
C.d8i.prototype={
$1(d){var w=this.a
return w.d=w.goq().cOu(d)},
$S:2}
C.d8j.prototype={
$1(d){var w=this.a
return w.m(new C.d82(w,d))},
$S:9}
C.d82.prototype={
$0(){var w=this.a
return w.d=w.goq().cOl(this.b)},
$S:0}
C.d8k.prototype={
$0(){var w=this.a,v=w.goq(),u=B.a.i(w.gz3(0).a.a),t=B.a.i(w.gaD8().a.a)
u=v.bfr(B.a.i(w.gasL().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bRu.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:8}
C.bRo.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRn(w,d))},
$S:11}
C.bRn.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRx.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRp.prototype={
$0(){var w=this.a
w.Q=D.b0O
w.adU(1)
w.r.x=null},
$S:0}
C.bRq.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0O)return
w=new A.e5()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.az(3)
v.z=D.d3r[w.az(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRt.prototype={
$0(){var w=this.a
w.Q=D.acX
w.adU(2)
w.r.z=null},
$S:0}
C.bRs.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hBK
t.adU(3)
w=t.r
w.d=s
w.x="I say: "+t.gCv()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.az(3)
w.z=s?D.d9W[v.az(4)]:D.dv_[v.az(3)]
w.as=t.a+2.8},
$S:0}
C.bRv.prototype={
$0(){var w=this.a
w.Q=D.b0P
w.CW=this.b
w.cy=1
w.adU(4)
w.r.f=w.f.a+5},
$S:0}
C.bRw.prototype={
$0(){},
$S:0}
C.bRr.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRl.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bRm.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bT0.prototype={
$0(){var w=this
return w.a.R9(w.b,0,w.c,w.d)},
$S:0}
C.bT1.prototype={
$0(){var w=this
return w.a.R9(w.b,3,w.c,w.d)},
$S:0}
C.bT2.prototype={
$0(){var w=this
return w.a.R9(w.b,1,w.c,w.d)},
$S:0}
C.bT3.prototype={
$0(){var w=this
return w.a.bTM(w.b,w.c,w.d)},
$S:0}
C.bT4.prototype={
$0(){var w=this
return w.a.R9(w.b,4,w.c,w.d)},
$S:0}
C.bT5.prototype={
$0(){var w=this
return w.a.R9(w.b,2,w.c,w.d)},
$S:0}
C.bT6.prototype={
$0(){var w=this
return w.a.R9(w.b,5,w.c,w.d)},
$S:0}
C.bT7.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:761}
C.bT_.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5T[d],p=q.a.a2(0,new A.o(0,-q.b*1.2*124)),o=A.fq(r,B.cs,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fp8,e),B.a5,B.bX,r,B.dz,B.bY)
o.o6(130)
w=o.b.a.c
w=p.aJ(0,new A.o(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bn(A.bs(w,v.gba(v)+12,u+18),B.i2)
u=this.a
v=t.eQ(B.dG)
w=$.Q()
s=A.K()
s.r=B.ds.gp(0)
u.am(v,s)
s=A.K()
s.r=D.qk.gp(0)
u.am(t,s)
w=new A.aG(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bv())
v=A.K()
v.r=D.qk.gp(0)
u.af(w,v)
o.a5(u,new A.o(t.a+9,t.b+6))},
$S:762}
C.bRL.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRM.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amy(d),w.amy(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fup.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h4u.prototype={
$2(d,e){if(e!=null)J.c7(this.a.c3(0,d,new C.h4v()),e)},
$S:z+66}
C.h4v.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h4w.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4x.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h4y.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4t(this.c,d))},
$S:3}
C.h4t.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h4z.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4A.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4B.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4s(this.c,d))},
$S:3}
C.h4s.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fHR.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fW7.prototype={
$1(d){return d.Q},
$S:z+15}
C.fW8.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fDK.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fKF.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bMy.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h4U.prototype={
$2(d,e){return B.o.aS(C.hxy(d),C.hxy(e))},
$S:210}
C.h4V.prototype={
$1(d){return d!==this.a},
$S:3}
C.fWD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKI.prototype={
$0(){var w=this.a
w.ch=!0
w.b8Z()},
$S:0}
C.bKD.prototype={
$0(){},
$S:0}
C.bKJ.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKB.prototype={
$0(){},
$S:0}
C.bKC.prototype={
$0(){},
$S:0}
C.bKH.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bcX(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ap(u,A.q(u,A.d(t.dy,u,u,u,u,u,u,D.fwK,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.az(B.c3,new A.an(B.a0,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKE(t,e),u,u,u,u,u,u,u,new C.bKF(t,e),u,u,u,u,u,u,u,u,u,new C.bKG(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bKE.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKG.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bKF.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKA.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cq9.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqa.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cq8(w))},
$S:0}
C.cq8.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqb.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqc.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqd.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqe.prototype={
$0(){},
$S:0}
C.cqf.prototype={
$0(){var w=this.a
w.z=w.Xl(++w.e)
w.Q=A.c_(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cq5.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cq6.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cq7(i,f,h),a0=g.as,a1=A.a4(a0).k("b7<2>")
a0=A.C(new A.b7(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c5(new A.h7(a0),new C.cq0(g,new A.o(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QM(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MX(new C.cq1(g,u),new C.cq2(g,u),new C.cq3(g,u),j,j,new A.bE("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.n(j,j,B.a.q(a1,"not a child")?B.fh:B.b4,j,j,j,j,j,j,j,j,13,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.ux(a0,g.gqm(g),B.cO,B.jH,D.fz),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xl(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xl(0)
o=s}else o=s
n=s[u]
n=A.e1(B.A,new C.QM(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xl(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r6(new A.br(0,p,t),new C.cq4(),new S.Eq(u,j,new C.QM(l.b,k,62,!1,j),new A.kG(0.25,new C.QM(m.b,k,62,!1,j),j),new A.kb(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.H,S.hB6(),!0,!0,j,j,j,j,j,j,!1,B.iO,j,new A.bE("chip-"+r,a0),w),B.b1,B.iM,j,new A.bE("t"+r+"-"+q,a0),v))}++u}g=A.bV(B.fR,a1,B.bs,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ab,B.t,e,j)},
$S:68}
C.cq7.prototype={
$1(d){return new A.o(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:753}
C.cq0.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bcq(q.b,o,v,w,p),B.az)},
$S:55}
C.cq2.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cq3.prototype={
$1(d){return this.a.cRo(this.b,d.a)},
$S:z+31}
C.cq1.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.l(18),q=e.length!==0?B.cO.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cO:B.jZ,B.r,2)
u=s?A.lC(new C.cq_(),A.as(new C.QM(u.gaFp()[u.gj1()[t]].b,u.gaFp()[u.gj1()[t]].a,62,!1,v),v,v,v),B.l9,B.iM,v,v,new A.br(0.3,1,x.X),x.i):D.bbR
return A.cT(v,u,v,v,B.b1,new A.p(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1970}
C.cq_.prototype={
$3(d,e,f){return A.e1(B.A,f,e,null,null)},
$S:110}
C.cq4.prototype={
$3(d,e,f){return A.dN(f,new A.o(Math.sin(e*24)*8*(1-e),0))},
$S:110}
C.cQa.prototype={
$1(d){return d>=1},
$S:118}
C.cF7.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cF6(w))},
$S:11}
C.cF6.prototype={
$0(){return this.a.f++},
$S:0}
C.cFf.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFg.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cFh.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFe(w))},
$S:0}
C.cFe.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFi.prototype={
$0(){return this.a.f++},
$S:0}
C.cFj.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFk.prototype={
$0(){},
$S:0}
C.cFl.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cF9.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cFa.prototype={
$3(d,e,f){var w=null
return A.lC(new C.cF8(this.a,e),w,B.b1,B.hG,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1971}
C.cF8.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cO.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.H,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.hV(new A.BK(new A.uS(B.w.j(e),B.LN,v,B.Y6),H.bXc(A.b4(v,v,v,new C.aBx(u.gkS()[u.e].c,u.as,v),B.az),new A.Ev(w,w,B.W3)),v),B.aq),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1972}
C.cFb.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,14*(1-e))),e)},
$S:103}
C.cFc.prototype={
$3(d,e,f){return A.dN(f,new A.o(Math.sin(e*22)*8*(1-e),0))},
$S:110}
C.cFd.prototype={
$0(){return this.a.bq3(this.b)},
$S:0}
C.f6Z.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an4$)
v.an4$=w
v.q8$.sp(0,w)
v.aqX(u)},
$S:8}
C.fh7.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSv())},
$S:0}
C.bSv.prototype={
$0(){},
$S:0}
C.bSt.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSr.prototype={
$0(){},
$S:0}
C.bSs.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMM()
w=s+1>=r.length?3:5
break
case 3:q=C.bGo(p.gapN(0),0,r.length)
p.m(new C.bSo(p,q))
o=p
w=6
return A.b(C.BV(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BW(s.d,s.c.a,"school",p.gapN(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSp())
w=4
break
case 5:p.m(new C.bSq(p))
p.gqu().VV(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSo.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSp.prototype={
$0(){},
$S:0}
C.bSq.prototype={
$0(){return this.a.x++},
$S:0}
C.bSu.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bSn.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f7_.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.o(t,s),q=v.b,p=v.d,o=p?C.hBk(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Ea
C.SF(q,D.eng,0,0.2,-0.6,-0.2,null,w,D.em_,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a2(0,new A.o(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.Q()
p=A.K()
p.r=D.Gb.gp(0)
p.c=3
p.d=B.bu
q.ah(new A.o(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f70.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SF(this.a,D.emm,0,u,0.7,-0.5,null,null,D.Jy,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f71.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SF(this.a,D.eo1,0,0,0.8,-0.5,null,null,D.Jy,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f72.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SF(w.b,D.ena,0,v,-0.8,-0.5,null,null,D.Jy,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f73.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.o(34,-122+Math.sin(w*5)*5)
else v=v?D.ene:D.Ea
C.SF(p,D.emG,0,t,0,-0.6,null,v,D.Jy,3,0,s,1.3,u,0,w,0)
q=q.cc3(new A.o(222,455),9)
$.Q()
w=A.K()
w.r=B.cO.gp(0)
p.af(q,w)},
$S:0}
C.f74.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:761}
C.bS9.prototype={
$2(d,e){return d+e},
$S:62}
C.bSk.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSl.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSm.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.q8$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSg.prototype={
$1(d){return d},
$S:98}
C.bSf.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q8$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSh.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSi.prototype={
$0(){},
$S:0}
C.bSj.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FI(++s.f)
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
C.bSb.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bSc.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:62}
C.bSd.prototype={
$2(d,e){var w=null,v=C.hcJ(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.az(B.c3,new A.en(A.b4(w,w,w,new C.bjB(u,u.q8$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bSa(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bSa.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.i.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1c(w.gj1()[u])}},
$S:22}
C.bSe.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:76}
C.drv.prototype={
$2(d,e){return 0},
$S:62}
C.bRW.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRV())},
$S:0}
C.bRV.prototype={
$0(){},
$S:0}
C.bRU.prototype={
$0(){},
$S:0}
C.bRO.prototype={
$0(){},
$S:0}
C.bRP.prototype={
$0(){},
$S:0}
C.bRT.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B7},
$S:0}
C.bRS.prototype={
$1(d){var w=null,v=this.a.gqu(),u=A.d(d,w,w,w,w,w,w,D.aVf,w,w,w),t=v.gbmv(0)
return A.az(B.c3,A.x(A.a([u,B.bH,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aVt,w,w,w)],x.p),B.E,w,B.e,B.j,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsq(v),w,w,w,w,w,w,!1,B.a4)},
$S:141}
C.bRQ.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bRR.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRN.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e1D.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1E.prototype={
$1(d){return this.a},
$S:39}
C.e1F.prototype={
$0(){var w=this.a
return w.d=w.gSU().beV(this.b)},
$S:0}
C.e1B.prototype={
$1(d){return new C.U5(this.a,null)},
$S:z+32}
C.e1C.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e1A.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hk,w,w,w)
return A.eg(A.a([A.bN(!1,E.aWR,w,w,!0,w,w,w,new C.e1y(d),w,w),A.bN(!1,D.fRW,w,w,!0,w,w,w,new C.e1z(d),w,w)],x.p),w,w,D.fz,v,w,w,w,w,D.fEs,w)},
$S:18}
C.e1y.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1z.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e1x.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e1G.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e1H.prototype={
$0(){var w=this.a,v=this.b,u=C.bE8(v,10,w.r,!1)
return w.uy(C.hlz(w.a.d,"kahoot",u,w.gb6w(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e1I.prototype={
$0(){var w=this.a
return w.uy(new C.alY(this.b,w.a.d,w.r,null))},
$S:0}
C.e1J.prototype={
$0(){var w=this.a
return w.uy(new C.aka(this.b,w.a.d,w.r,null))},
$S:0}
C.e1M.prototype={
$0(){var w=this.a
return w.uy(new C.auQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e1N.prototype={
$0(){var w=this.a
return w.uy(new C.ayN(this.b,w.a.d,w.r,null))},
$S:0}
C.e1O.prototype={
$0(){var w=this.a
return w.uy(new C.am0(this.b,w.a.d,w.r,null))},
$S:0}
C.e1P.prototype={
$0(){var w=this.a
return w.uy(new C.am4(this.b,w.a.d,w.r,null))},
$S:0}
C.e1Q.prototype={
$0(){var w=this.a
return w.uy(new C.am6(this.b,w.a.d,w.r,null))},
$S:0}
C.e1R.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1x()
return v.uy(C.hlz(v.a.d,"creator_"+u.a,w,v.gb6w(),"A game by the family",t,this.c.a))},
$S:0}
C.e1S.prototype={
$0(){return this.a.OP(this.b)},
$S:0}
C.e1T.prototype={
$0(){return this.a.XN(0,this.b)},
$S:0}
C.e1K.prototype={
$0(){return this.a.OP(null)},
$S:0}
C.e1L.prototype={
$0(){return this.a.L(x.q).f.T(D.fi_)},
$S:0}
C.bS7.prototype={
$0(){var w=this.a
w.d=D.b0c
w.z=3},
$S:0}
C.bS8.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPR()}else w.m(new C.bS6(w))},
$S:11}
C.bS6.prototype={
$0(){return this.a.z--},
$S:0}
C.bRY.prototype={
$0(){var w=this.a
w.d=D.acD
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRX(w))
if(w.as<=0){d.a1(0)
w.b6s(-1)}},
$S:11}
C.bRX.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bS3.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WI},
$S:0}
C.bS4.prototype={
$0(){return this.a.e++},
$S:0}
C.bS0.prototype={
$0(){var w=this.a
w.d=D.b0d
w.ay=this.b},
$S:0}
C.bS1.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bS5.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1973}
C.bS2.prototype={
$0(){return this.a.L5(this.b)},
$S:0}
C.bS_.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRy.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b6,B.aR),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aR),r))}return s},
$S:1974}
C.bRz.prototype={
$0(){return this.a.gD5().c.push(C.h6x(null,0,20,""))},
$S:0}
C.bRJ.prototype={
$1(d){var w=null
return A.bt(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dl,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VB,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:268}
C.bRI.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD5().c,m=this.b,l=n[m],k=o.cf5(l),j=B.c.j(0.06),i=A.l(18),h=A.L(B.aU,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KO,p,p,p),B.b5],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.ar9,p,p,p,new C.bRD(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.j,0,p,p),A.aM(p,B.a_,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRE(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),B.T],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aD5[v]
t=D.aCL[v]
s=v+1
f.push(new A.D(B.eM,new A.c8(B.aL,B.e,B.j,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bc,A.aM(p,B.a_,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRF(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),p),new At.Pp(v,l.c,new C.bRG(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,I.b0C,p,p,p,p,p,w)],g),p),p))}f.push(D.fJZ)
f.push(B.an)
n=A.a([D.fDz,B.ae],g)
for(r=0;r<3;++r){q=D.cdD[r]
n.push(new A.D(B.fB,A.jw(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRH(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.j,0,p,p))
return A.q(p,A.x(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.n),p,p,p,B.kS,B.bh,p,p,p)},
$S:149}
C.bRD.prototype={
$0(){var w=this.a
return w.m(new C.bRC(w,this.b))},
$S:0}
C.bRC.prototype={
$0(){return B.d.cG(this.a.gD5().c,this.b)},
$S:0}
C.bRE.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRF.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRG.prototype={
$1(d){return this.a.m(new C.bRB(this.b,d))},
$S:151}
C.bRB.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRH.prototype={
$1(d){return this.a.m(new C.bRA(this.b,this.c))},
$S:9}
C.bRA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3i.prototype={
$0(){var w=this.a
w.wu()
w.a.bv()
w.a.qn()},
$S:0}
C.e3h.prototype={
$0(){var w=this.a
w.wu()
w.a.bv()
w.a.qn()},
$S:0}
C.e3k.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cr(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e3l.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3m.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e3g.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e3j.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e3o.prototype={
$0(){this.a.Pa()
return null},
$S:0}
C.e3n.prototype={
$0(){return this.a.F2(this.b)},
$S:0}
C.e2J.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.dn,w,w,!0,w,w,w,new C.e2H(d),w,w),r=A.bp(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e2I(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e2H.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2I.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e2K.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cO0(this.b)},
$S:0}
C.e2E.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVr(w.b,w.c,w.d)},
$S:8}
C.e25.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e26.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2n.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Ho(t.a.c),$async$$0)
case 2:s=r.nB(q.dI(e,new C.e2l(t)))
if(s!=null&&t.c!=null)t.m(new C.e2m(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2l.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2o.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2p.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2D.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cON(C.hBu(w),w)},
$S:0}
C.e2k.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wp(u,w,C.aQW(u,w),new C.e2j(v),null)},
$S:z+37}
C.e2j.prototype={
$1(d){return this.bnU(d)},
bnU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e2i(s,d))
w=3
return A.b(s.uu(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:546}
C.e2i.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.beV(this.b)},
$S:0}
C.e2A.prototype={
$1(d){return d.as},
$S:z+1}
C.e2B.prototype={
$1(d){var w=this
return new A.dY(new C.e2z(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e2z.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ee:B.c,h=A.l(26),g=A.L(B.bR.j(0.5),B.r,1.5),f=A.q(k,D.bTG,B.f,k,k,new A.p(B.bR.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.n(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.n(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aH(k,k,k,k,A.X(B.cy,j?B.bv:B.br,k,k,k,k),k,k,k,new C.e2t(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.n(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.az(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b1,new A.p(q,k,new A.bH(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h2,k,k,k,k,B.Cf,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2u(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bV(B.bG,a0,B.bs,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c4H,new A.D(D.bDZ,f,k),new A.D(D.bDQ,e,k),new A.D(B.rV,a0,k),new A.D(W.ams,A.d(v,k,k,k,k,k,k,A.n(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Aj.ap3,j?B.bv:B.br,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bDS,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.n(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,k,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b94(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e2v(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.j,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ac(0,B.G,B.aF.j(0.35),B.j8,12)],x.V)
f.push(A.az(k,A.q(k,A.A(A.a([D.fDU,B.bd,D.bIf,D.bUl],w),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.c8l,B.n),k,k,k,B.hX,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2w(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yP,A.A(A.a([A.E(A.dU(B.dn,new C.e2x(a1),k),1),B.au,A.E(A.bJ(M.aXi,k,new C.e2y(t,a1),A.bp(B.bR,k,k,k,k,k,B.cp,k,k,k,k,k)),1)],w),B.l,k,B.e,B.j,0,k,k),k))
return A.bm(!0,A.q(k,A.ce(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.p(i,k,g,h,k,k,B.n),k,k,k,B.yE,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:89}
C.e2t.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2u.prototype={
$0(){return this.b.$1(new C.e2s(this.a,this.c))},
$S:0}
C.e2s.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e2v.prototype={
$1(d){var w=this.a
w.m(new C.e2q(w,d))
this.b.$1(new C.e2r())},
$S:9}
C.e2q.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2r.prototype={
$0(){},
$S:0}
C.e2w.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHz(!0,w))
return null},
$S:0}
C.e2x.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2y.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHz(!1,w))
return null},
$S:0}
C.e2C.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOB(this.b.b)
w.r.a8(0)},
$S:0}
C.e1U.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiZ(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.huN(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e1V.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFU(w)},
$S:0}
C.e2M.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aen(this.b,w,this.c,null)},
$S:z+39}
C.e2G.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ee:B.c,t=A.l(20),s=A.X(B.lO,B.aX,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.n(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.n(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.n(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.P,0,B.p)
return A.eg(A.a([A.bJ(D.fVK,w,new C.e2F(d),A.bp(B.aX,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e2F.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1W.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e1X.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e1Y.prototype={
$1(d){return d.a},
$S:z+8}
C.e1Z.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hW(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFU(w)},
$S:0}
C.e22.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiZ(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e20(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.huN(v.e,null,r,v.f,v.r,new C.e21(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e21.prototype={
$0(){return this.a.ab4(this.b)},
$S:0}
C.e20.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e23.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hW>")
w=A.C(new A.N(w,new C.e2_(this.b),v),v.k("ak.E"))
u.d=t.aFU(w)},
$S:0}
C.e2_.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e2L.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2f.prototype={
$1(d){return d.length!==0},
$S:3}
C.e2g.prototype={
$1(d){var w=this
return new A.dY(new C.e2e(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e2e.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ee:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.n(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.n(v,v,t?B.bv:B.br,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.n(v,v,t?B.bv:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e2a(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.T)
u=w.d
p.push(A.aM(v,B.a_,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(12),B.dq),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mA,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.e2b(d),v,v),A.bJ(B.KZ,v,new C.e2c(t,u,o,e),A.bp(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fIm,v,new C.e2d(t,u,o,d),A.bp(B.aX,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:200}
C.e2a.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.n(w,w,this.a.a?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c1w,w,w,w,new C.e29(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1975}
C.e29.prototype={
$0(){return this.a.$1(new C.e27(this.b,this.c))},
$S:0}
C.e27.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2b.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2c.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e28(w.c,u))
v.bP(0,B.ce)}},
$S:0}
C.e28.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e2d.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e2h.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPf(this.b,D.uA,C.Hm(v,w.a.c))},
$S:0}
C.e2T.prototype={
$1(d){return d.as},
$S:z+1}
C.e2U.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j1(this.b,w)},
$S:0}
C.e2V.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.isd(v)
return w.WB(v==null?null:v.a)},
$S:0}
C.e2W.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i2R(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cwt(new A.av(u,t),v.gblB(),new A.av(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d1h:D.d_v
q=A.L(s?B.dl:D.bjA,B.r,1)
p=A.l(22)
o=A.bR(0,A.b4(m,m,m,new C.bfI(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.by(p,new A.an(B.a0,m,B.ab,B.t,A.a([o,A.bR(0,A.v2(new A.R(n,n,n,n),new A.a5(u,t,new C.bgD(l.d,v,l.f,w,new C.e2P(l),l.gcgh(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.bys(s,new C.e2Q(l,e),new C.e2R(l,e),new C.e2S(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.p(m,m,q,k,m,new A.a8(B.b7,B.b9,B.x,r,m,m),B.n),m,m,m,Z.aly,m,m,m,m)},
$S:219}
C.e2P.prototype={
$1(d){var w=this.a
w.m(new C.e2N(w,d))},
$S:2}
C.e2N.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e2Q.prototype={
$0(){var w=this.b
return this.a.bd4(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e2R.prototype={
$0(){var w=this.b
return this.a.bd4(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e2S.prototype={
$0(){var w=this,v=w.b
return w.a.aVr(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblB())},
$S:0}
C.e2X.prototype={
$0(){var w=this.a
return w.m(new C.e2O(w))},
$S:0}
C.e2O.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e24.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fF(new A.fx(s.c)),$async$$0)
case 2:t.yw("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgX.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bks(u,C.hFP(v.c,u),new C.dgW(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dgW.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dgY.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnN(d.d,d.c,u.f.q(0,d.a),new C.dgV(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dgV.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fHj.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nB(new A.cM(new A.Y(v,new C.fHk(d),w.k("Y<1>")),new C.fHl(),w.k("cM<1,m>")))},
$S:z+19}
C.fHk.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHl.prototype={
$1(d){return d.a},
$S:z+8}
C.fHh.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fHi.prototype={
$1(d){return d.b},
$S:z+8}
C.fHo.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nB(new A.cM(new A.Y(v,new C.fHp(d),w.k("Y<1>")),new C.fHq(),w.k("cM<1,m>")))},
$S:z+19}
C.fHp.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHq.prototype={
$1(d){return d.a},
$S:z+8}
C.fHm.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fHn.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dh_.prototype={
$0(){return this.a},
$S:z+46}
C.dhg.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:276}
C.dh8.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dh9()),v=J.a7(w)
if(!v.q(w,e))v.J(w,e)},
$S:120}
C.dh9.prototype={
$0(){return A.a([],x.s)},
$S:763}
C.dh7.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eG(w,e)
return w===!0},
$S:290}
C.dh0.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dh6.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dh5.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.Dx:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.a_:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.Dx:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1977}
C.dh1.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dha.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aT(u==null?B.a_:u)
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
t=J.aT(t==null?D.Dx:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dhb(r)))w.push(r)}}B.d.br(w,new C.dhc(a8))
B.d.aZ(w,new C.dhd())
q=C.i2Q(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eU9],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bqV(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1978}
C.dhb.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhc.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhd.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b7(v,A.a4(v).k("b7<2>")).cF(0,0,B.q4)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:705}
C.dhf.prototype={
$1(d){return 16+d*156},
$S:171}
C.dgZ.prototype={
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
t.n(0,d,new C.GF(r,new A.o(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GF(s,new A.o(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GF(s,new A.o(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.a_:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KZ(d,new A.o(e+t,w),s,s.length))}},
$S:192}
C.dh2.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKH(new A.o(v.a,v.b+28),new A.o(w.a,w.b+28),!0,null))},
$S:120}
C.dh3.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dh4.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:764}
C.dhh.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:764}
C.dhi.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:466}
C.dhj.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:194}
C.dhk.prototype={
$1(d){return d>=0.5},
$S:118}
C.fmI.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.h6(A.aP(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1980}
C.eXL.prototype={
$1(d){var w=null,v=A.l(8),u=B.bR.j(0.12),t=A.l(8)
return new A.D(B.mZ,A.aP(!1,v,!0,A.q(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.ftD,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.n),w,w,w,w,B.Oj,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXK(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eXK.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxd.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxc.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nX,B.K,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dxa(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.n(w,w,B.mO,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxb(d),w,w)],x.p),B.bb,B.Cc,w,u,D.bES,w,D.bGP,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxa.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dxb.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dxm.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dxn.prototype={
$1(d){var w=this.a
return w.m(new C.dxl(w,d))},
$S:z+49}
C.dxl.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dxo.prototype={
$1(d){var w=null
return A.qK(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxr.prototype={
$1(d){var w=this.a
return w.m(new C.dxk(w,d))},
$S:35}
C.dxk.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dxq.prototype={
$1(d){var w=null
return A.qK(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxs.prototype={
$1(d){var w=this.a
return w.m(new C.dxj(w,d))},
$S:35}
C.dxj.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dxt.prototype={
$0(){var w=this.a
return w.m(new C.dxi(w))},
$S:0}
C.dxi.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dxu.prototype={
$0(){var w=this.a
return w.m(new C.dxh(w))},
$S:0}
C.dxh.prototype={
$0(){return++this.a.at},
$S:0}
C.dxv.prototype={
$0(){var w=this.a
return w.m(new C.dxg(w))},
$S:0}
C.dxg.prototype={
$0(){return--this.a.ax},
$S:0}
C.dxw.prototype={
$0(){var w=this.a
return w.m(new C.dxf(w))},
$S:0}
C.dxf.prototype={
$0(){return++this.a.ax},
$S:0}
C.dxx.prototype={
$1(d){var w=this.a
return w.m(new C.dxe(w,d))},
$S:9}
C.dxe.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dxp.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dxy.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.ee:B.c
v=A.l(12)
if(p)u=B.bR
else u=(q.c.a?B.eh:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bv:B.br
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bv:B.br
return A.E(A.aI(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.n(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.j,0,B.p),r,r,B.b1,new A.p(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k2,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dxz(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dxz.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dxI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.ceT.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.cf_.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cf0.prototype={
$2(d,e){var w=J.b8(e,new C.ceZ(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.ceZ.prototype={
$1(d){return d.aj()},
$S:z+12}
C.ceV.prototype={
$1(d){return C.am9(A.a2(d,x.N,x.z))},
$S:z+9}
C.ceW.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ceX.prototype={
$1(d){return C.hly(A.a2(d,x.N,x.z))},
$S:z+11}
C.ceY.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cf4.prototype={
$1(d){return new A.aHL(d.f.length,d.a,d.b)},
$S:z+55}
C.cf5.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:650}
C.cf1.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cf2.prototype={
$1(d){return d.cOd(C.Hm(d,this.a))},
$S:z+85}
C.e35.prototype={
$1(d){return C.uy(d,this.a.a.c)},
$S:z+3}
C.e36.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3a.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3b.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e32.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1e(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z4("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.py(r.c,r.e),$async$$0)
case 4:s.z4(p)
w=5
return A.b(s.Ka(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e33.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1e(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z4("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.py(r.c,r.e),$async$$0)
case 4:s.z4(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e34.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ws(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z4("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z4("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z4("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Ka(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z4(B.a.en(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e39.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1d(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z4("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ec(new C.e38(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.py(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e38.prototype={
$1(d){var w=this.b
return new C.a0B(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e37.prototype={
$1(d){return D.hxJ},
$S:z+58}
C.e3d.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3e.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3c(w,d)
return new A.D(B.d3,new C.bgH(this.b,d.c,d.a,w,null),null)},
$S:1981}
C.e3c.prototype={
$0(){return this.a.Yq(this.b.b)},
$S:0}
C.e2Y.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2Z.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e3_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e30.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e31.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3f.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:198}
C.dPk.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPl.prototype={
$0(){return B.d.gH(D.a6f)},
$S:z+60}
C.dPm.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.d86,44),w,w,w),w,w,new C.blz(u,t,v,w),B.az)},
$S:55}
C.fY9.prototype={
$1(d){return A.pi(new C.fY8(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:135}
C.fY8.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ee:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tp,24)],x.V),o=r?B.eh:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aX.j(0.25),B.bR.j(0.18)],x.O)
w=A.q(t,D.bWK,B.f,t,t,new A.p(t,t,t,A.l(12),t,new A.a8(B.a7,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.n(t,t,r?B.aP:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.x(A.a([B.X,o,new A.D(E.amw,A.A(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.n(t,t,r?B.bv:B.br,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.l,t,B.e,B.j,0,t,t),t),A.E(A.ip(!0,t,e,B.y,D.fg4,new C.fY7(this.b,s),20,B.am4,t,B.ah,!1),1)],u),B.l,t,B.e,B.j,0,B.p),B.f,t,t,new A.p(q,t,t,B.l7,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:116}
C.fY7.prototype={
$2(d,e){var w=null,v=D.a6f[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.L(s?B.eh:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.eu,8)],x.V),p=A.l(15),o=A.E(new C.a7o(v.a,!0,w),1),n=s?B.jW:B.jk,m=A.d(v.b,w,1,B.a2,w,w,w,A.n(w,w,s?B.aP:B.as,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a3,!0,w,A.aP(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.q(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.n(w,w,s?B.bv:B.br,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.k3,w,w,w)],l),B.al,w,B.e,B.j,0,B.p),B.aq),w,new A.p(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fY6(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:80}
C.fY6.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cor.prototype={
$0(){return this.a.ahi(this.b)},
$S:0}
C.fXx.prototype={
$1(d){return D.hsy},
$S:z+61}
C.h4b.prototype={
$1(d){var w=this
return new C.a2n(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fXB.prototype={
$1(d){return new C.a_f(this.a,null)},
$S:z+63}
C.fXA.prototype={
$1(d){return D.htz},
$S:z+64}
C.d8w.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8x.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8v(w,d))},
$S:35}
C.d8v.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8y.prototype={
$1(d){return this.a.KO()},
$S:2}
C.d8z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8s.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8t.prototype={
$1(d){return this.a.KO()},
$S:2}
C.d8u.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGO.prototype={
$0(){},
$S:0}
C.cGU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGV.prototype={
$0(){return this.a.aQJ(-1)},
$S:0}
C.cGW.prototype={
$1(d){return this.a.m(new C.cGT())},
$S:2}
C.cGT.prototype={
$0(){},
$S:0}
C.cGX.prototype={
$0(){return this.a.aQJ(1)},
$S:0}
C.cGY.prototype={
$1(d){return this.a.m(new C.cGS())},
$S:2}
C.cGS.prototype={
$0(){},
$S:0}
C.cGZ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.n(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aX.j(0.2)
if(s)v=B.aX
else v=this.b.a?B.eh:B.bP
return A.uW(u,u,B.b2,r,u,new C.cGR(t,d),B.wr,s,w,u,new A.ay(v,1,B.r,-1),B.cf)},
$S:1982}
C.cGR.prototype={
$1(d){var w=this.a
return w.m(new C.cGP(w,this.b))},
$S:9}
C.cGP.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cH_.prototype={
$1(d){return this.a.m(new C.cGQ())},
$S:2}
C.cGQ.prototype={
$0(){},
$S:0}
C.cH0.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fmd.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fme.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fmf.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fmb.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCU()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bGO,new A.en(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byh(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:55}
C.fmc.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.aA(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ar(B.aX,B.bR,w)
s.toString
s=A.a([B.b2,s,B.aX],x.O)
return A.aI(!1,B.a3,!0,p,A.aP(!1,v,!0,A.eJ(D.erT,r,new A.p(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:137}
C.fVV.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:59}
C.eUV.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUM.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eUN.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eUT.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eUS(w,this.b),null)},
$S:20}
C.eUS.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ee:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.n(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eP(w,u,new A.D(B.amq,A.x(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.n(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hrC(new C.eUP(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dn,new C.eUQ(d),w),1),B.au,A.E(A.bJ(B.VX,w,new C.eUR(r,d),A.bp(B.aX,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.j,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(t,B.a1),w)},
$S:101}
C.eUP.prototype={
$1(d){return this.b.$1(new C.eUO(this.a,d))},
$S:35}
C.eUO.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eUQ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUR.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eUU.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tz(this.b)},
$S:0}
C.eUH.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bf0(w)},
$S:0}
C.eUL.prototype={
$1(d){return this.bog(d)},
bog(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M9(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j1(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUK.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eUJ(this.b),v),v.k("M.E"))
u.d=t.bf0(w)},
$S:0}
C.eUJ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eUW.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j1(this.b,w)},
$S:0}
C.eUX.prototype={
$1(d){return this.a.bH3(d,this.b)},
$S:z+67}
C.eUI.prototype={
$0(){return this.a.ab3(this.b)},
$S:0}
C.h3Z.prototype={
$1(d){return new C.aeI(this.a,this.b,this.c,null)},
$S:z+68}
C.eUZ.prototype={
$0(){return this.a.a0h(this.b)},
$S:0}
C.eV_.prototype={
$0(){return this.a.QM(this.b)},
$S:0}
C.eV0.prototype={
$0(){return this.a.EY(this.b)},
$S:0}
C.eV1.prototype={
$0(){return this.a.a0i(this.b)},
$S:0}
C.eUY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUD.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eUE.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eUF(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUF.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eVo.prototype={
$2(d,e){return d+e.gxG()},
$S:z+71}
C.eVk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eVl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eV5.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ee:B.c,s=A.l(24),r=A.q(v,D.bXc,B.f,v,v,new A.p(B.ay.j(u?0.18:0.08),v,A.L(B.ay.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.n(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.n(v,v,u?B.bv:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.as
u=u?B.eh:B.bP
w=x.p
return A.eP(v,t,new A.D(B.yR,A.x(A.a([r,B.aQ,q,B.T,p,B.d8,A.A(A.a([A.E(A.dU(B.nZ,new C.eV3(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b9(A.l(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bJ(D.fZC,v,new C.eV4(d),A.bp(B.ay,v,v,v,v,v,B.fg,v,new A.b9(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.j,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d7,v,new A.b9(s,B.a1),v)},
$S:49}
C.eV3.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eV4.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eVe.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ee:B.c,i=A.l(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h5,28)],x.V),g=k?D.dfi:B.a5A,f=x.p
g=A.q(m,A.x(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f9c,B.ax,new A.bM(B.a7,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.n(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.j,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a8(B.aA,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.amu,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.n(m,m,k?B.bv:B.br,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7V(B.b8,B.jq,new C.eVb(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b7V(B.cz,R.zs,new C.eVc(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.n(m,m,k?B.bv:B.br,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.ay.j(k?0.14:0.06)
q=A.l(16)
p=A.L(B.ay.j(0.28),B.r,1)
o=A.q(m,D.bWy,B.f,m,m,new A.p(B.ay.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.n(m,m,k?B.aP:B.as,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.n(m,m,k?B.bv:B.br,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.wm,A.q(m,A.x(A.a([g,new A.D(B.amr,A.x(A.a([w,B.X,u,B.bz,t,B.X,A.aI(!1,B.a3,!0,m,A.aP(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.X(B.eJ,k?B.bv:B.br,m,m,m,m)],f),B.l,m,B.e,B.j,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eVd(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.aq,m,m,new A.p(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVb.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w4("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVc.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w4("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVd.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Or(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eV9.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ee:B.c,m=A.l(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.f_,24)],x.V),k=o?B.eh:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bv:B.br
u=A.by(w,new A.a5(48,48,C.aSc(!0,A.l(12),48,P.OZ,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.n(q,q,o?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bt(v.gxG())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wm,A.q(q,A.x(A.a([B.X,k,new A.D(D.amo,A.A(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.n(q,q,o?B.bv:B.br,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.l,q,B.e,B.j,0,q,q),q),B.C3,r.cqy(B.uV,B.aX,new C.eV7(d),p,"QR code or backup file","Transfer project"),r.b4W(!0,B.ei,B.ay,new C.eV8(d),p,"Remove from this device","Delete project"),B.X],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eV7.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eV8.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eVa.prototype={
$1(d){return this.boh(d)},
boh(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.M9(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wj(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVr.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eVq(w))},
$S:0}
C.eVq.prototype={
$0(){return this.a.r++},
$S:0}
C.eVs.prototype={
$0(){var w=this.a
return w.m(new C.eVp(w))},
$S:0}
C.eVp.prototype={
$0(){return this.a.r++},
$S:0}
C.eV2.prototype={
$0(){var w=this.a.c
w.toString
return A.j1(w,null)},
$S:0}
C.eV6.prototype={
$0(){return this.a.cjP(this.b)},
$S:0}
C.eVn.prototype={
$0(){var w=this.a
return w.m(new C.eVm(w,this.b))},
$S:0}
C.eVm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVh.prototype={
$0(){return this.a.w4("scan")},
$S:0}
C.eVi.prototype={
$0(){return this.a.w4("file")},
$S:0}
C.eVj.prototype={
$1(d){return this.a.cqz(d,this.b)},
$S:z+72}
C.eVg.prototype={
$0(){return this.a.F1(this.b)},
$S:0}
C.eVf.prototype={
$0(){return this.a.a0N(this.b,this.c)},
$S:0}
C.cG8.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cG7.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cG5.prototype={
$1(d){return C.hLV(A.a2(d,x.N,x.z))},
$S:z+75}
C.cG6.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fGb.prototype={
$1(d){return d.y===D.kV},
$S:z+3}
C.h4L.prototype={
$1(d){return C.aQW(d,this.a)},
$S:z+3}
C.fDJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSD.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSC.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bSz.prototype={
$1(d){return C.hlA(A.a2(d,x.N,x.z))},
$S:z+24}
C.bSA.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSB.prototype={
$1(d){return J.k(d)},
$S:17}
C.fu0.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fpM.prototype={
$1(d){return C.hbj(A.a2(d,x.N,x.z))},
$S:z+79}
C.fpN.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fpO.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fXl.prototype={
$1(d){return J.k(d)},
$S:17}
C.fXm.prototype={
$1(d){return d.a},
$S:z+81}
C.fXn.prototype={
$1(d){return d.length!==0},
$S:3}
C.fXo.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fXp.prototype={
$1(d){return d.Tz(null).aj()},
$S:z+82}
C.h4J.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fGF.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fJQ.prototype={
$1(d){return C.am9(A.a2(d,x.N,x.z))},
$S:z+9}
C.fJR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJS.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fJT.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fJU.prototype={
$1(d){return C.uy(d,this.a)},
$S:z+3}
C.fX8.prototype={
$1(d){return C.uy(d,this.a)},
$S:z+3}
C.h4E.prototype={
$1(d){return C.am9(A.a2(d,x.N,x.z))},
$S:z+9}
C.h4F.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h4G.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fGm.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fGn.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h4P.prototype={
$1(d){return!d.as},
$S:z+1}
C.fFR.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fFS.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fFT.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h4c.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fKG.prototype={
$1(d){return d.Q},
$S:z+15}
C.fX1.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fJN.prototype={
$1(d){return C.am9(A.a2(d,x.N,x.z))},
$S:z+9}
C.fJO.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJP.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fWX.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fqm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqn.prototype={
$1(d){return C.hlA(A.a2(d,x.N,x.z))},
$S:z+24}
C.fqo.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fqp.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fqq.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqD.prototype={
$2(d,e){return d.eB(new C.fqE(e))},
$S:1983}
C.fqE.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cd},
$S:1984}
C.fqA.prototype={
$1(d){return C.i7V(d,this.a)},
$S:z+84}
C.fqB.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fqC.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fuI.prototype={
$1(d){return d.a},
$S:z+56}
C.fuJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuK.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fxI.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fCZ.prototype={
$1(d){return C.hxa(d,C.Hm(d,this.a))},
$S:z+5}
C.fD_.prototype={
$1(d){return C.hxb(d,C.Hm(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBz.prototype
w.bw6=w.t
w=C.azN.prototype
w.bw1=w.t
w=C.aGZ.prototype
w.bwu=w.t
w=C.aBA.prototype
w.bw7=w.t
w=C.aBC.prototype
w.bw8=w.t
w=C.aBD.prototype
w.bw9=w.t
w=C.aN8.prototype
w.byY=w.t
w=C.aPg.prototype
w.bBi=w.t
w=C.aPh.prototype
w.bBj=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEz.prototype,"gcnt","cnu",28)
var r
w(r=C.aBy.prototype,"gcgn","cgo",65)
v(r,"gaOV","NZ",0)
v(r,"gcvP","Bo",0)
v(r,"gbOQ","OF",0)
v(r,"gcKc","z5",0)
v(r,"gcpw","a1u",0)
v(r,"gbKe","On",0)
v(r,"gbPf","XS",0)
w(r,"gbUl","bUm",78)
v(r,"gbEz","An",0)
v(C.aBB.prototype,"gcK8","FU",0)
v(r=C.alZ.prototype,"gbss","bst",2)
v(r,"gbsk","bsl",2)
v(r,"gcLh","cLi",2)
u(r,"gqm","kN",0)
u(r=C.akb.prototype,"geY","fX",2)
w(r,"gcc0","cc1",27)
u(C.auR.prototype,"gqm","kN",0)
v(r=C.ayO.prototype,"gcWQ","cWR",2)
u(r,"gqm","kN",0)
u(C.aKM.prototype,"gbsq","bsr",2)
v(C.am7.prototype,"gBS","cLu",2)
u(r=C.am5.prototype,"gcMa","cMb",2)
u(r,"gqm","kN",0)
v(r=C.am1.prototype,"gbri","brj",2)
v(r,"gcRm","cRn",2)
u(r=C.am3.prototype,"geY","fX",2)
u(r,"gix","cKO",2)
v(r=C.am_.prototype,"gcKD","cKE",2)
u(r,"gbqa","jH",2)
v(r=C.aF7.prototype,"gagV","wk",0)
v(r,"gcj4","a0E",0)
v(r,"gaT8","Iv",0)
v(r=C.aF4.prototype,"gcG6","a3C",0)
v(r,"gagV","wk",0)
v(r,"gctQ","a28",0)
v(r,"gcj_","b39",2)
v(r,"gck1","a0S",0)
w(r,"gcgh","cgi",35)
v(r,"gbP7","IA",0)
v(r,"gcHb","cHc",2)
v(r,"gc6a","ZB",0)
w(r,"gceM","ceN",36)
v(r,"gciO","ciP",2)
v(r=C.aDy.prototype,"gcc6","Qj",0)
v(r,"gcc8","cc9",2)
v(r,"gbLJ","aaG",0)
v(r=C.aF6.prototype,"gbSK","Ym",0)
v(r,"gc2i","Z2",0)
v(r,"gcAe","a3_",0)
v(r,"gcwo","a2B",0)
v(C.aF5.prototype,"gcw7","aiJ",0)
v(C.au2.prototype,"gceK","a0f",0)
v(C.aAi.prototype,"ga3l","KO",2)
v(C.aAh.prototype,"ga3l","KO",2)
v(C.az0.prototype,"ga3l","KO",2)
v(r=C.aGA.prototype,"gb4j","Ri",0)
v(r,"gbDn","Wv",0)
v(r,"gcjQ","cjR",2)
w(C.aGz.prototype,"gcfC","cfD",69)
t(C.aGB.prototype,"gaT3",0,0,null,["$1","$0"],["Iu","bN1"],70,0,0)
s(C,"hET","ii3",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apG,C.uT,C.nx,C.Iv,C.afU,C.KS,C.uU,C.bT8,C.tg,C.bp4,C.amg,C.ae0,C.ls,C.bRK,C.aue,C.zH,C.akS,C.MP,C.baw,C.aa5,C.bhM,C.ag0,C.aA1,C.afP,C.aKM,C.KZ,C.GF,C.bgF,C.aKH,C.ar1,C.dhl,C.lW,C.aV8,C.aV7,C.aTa,C.uj,C.rq,C.lD,C.hW,C.kW,C.aIF])
u(A.ht,[C.fOt,C.fOs,C.fOu,C.fY2,C.fBD,C.fBE,C.fBJ,C.fMc,C.fMb,C.fMa,C.c7S,C.fYz,C.fYr,C.fYD,C.fGu,C.dQ0,C.dPW,C.dPX,C.dPz,C.dPv,C.dQf,C.dQg,C.dQ9,C.dQa,C.dQh,C.dQi,C.fHf,C.fJK,C.fJL,C.fX6,C.h4D,C.fGl,C.fXH,C.dgy,C.dfV,C.dg3,C.dgk,C.dg_,C.dg5,C.dfX,C.dg9,C.dga,C.dg8,C.dgp,C.dgo,C.dil,C.dim,C.din,C.dgM,C.dgR,C.dgQ,C.cP6,C.cP8,C.d7K,C.d88,C.d89,C.d8c,C.d8e,C.d8f,C.d8g,C.d8i,C.d8j,C.bRu,C.bRo,C.fup,C.h4w,C.h4x,C.h4y,C.h4t,C.h4z,C.h4A,C.h4B,C.h4s,C.fHR,C.fW7,C.fDK,C.fKF,C.bMy,C.h4V,C.fWD,C.bKJ,C.bKE,C.bKG,C.bKF,C.cq7,C.cq2,C.cq3,C.cq1,C.cq_,C.cq4,C.cQa,C.cF7,C.cFa,C.cF8,C.cFb,C.cFc,C.f6Z,C.fh7,C.bSg,C.bSa,C.bSe,C.bRS,C.e1E,C.e1B,C.e1C,C.e1A,C.e1G,C.bS8,C.bRZ,C.bRJ,C.bRI,C.bRE,C.bRF,C.bRG,C.bRH,C.e3j,C.e2J,C.e2E,C.e25,C.e2l,C.e2o,C.e2k,C.e2j,C.e2A,C.e2B,C.e2v,C.e1U,C.e2M,C.e2G,C.e1W,C.e1X,C.e1Y,C.e22,C.e20,C.e2_,C.e2f,C.e2g,C.e2a,C.e2T,C.e2P,C.dgX,C.dgY,C.fHj,C.fHk,C.fHl,C.fHh,C.fHi,C.fHo,C.fHp,C.fHq,C.fHm,C.fHn,C.dhg,C.dh6,C.dh1,C.dhb,C.dhc,C.dhf,C.dh3,C.dhi,C.dhj,C.dhk,C.fmI,C.eXL,C.dxc,C.dxm,C.dxn,C.dxo,C.dxr,C.dxq,C.dxs,C.dxx,C.dxy,C.cf_,C.ceZ,C.ceV,C.ceW,C.ceX,C.ceY,C.cf4,C.cf1,C.cf2,C.e35,C.e38,C.e37,C.e3e,C.e3f,C.dPk,C.fY9,C.fXx,C.h4b,C.fXB,C.fXA,C.d8x,C.d8y,C.d8t,C.cGW,C.cGY,C.cGZ,C.cGR,C.cH_,C.fmd,C.fVV,C.eUT,C.eUP,C.eUL,C.eUJ,C.eUX,C.h3Z,C.eV5,C.eVe,C.eV9,C.eVa,C.eVj,C.cG7,C.cG5,C.cG6,C.fGb,C.h4L,C.fDJ,C.bSD,C.bSC,C.bSz,C.bSA,C.bSB,C.fpM,C.fpN,C.fXl,C.fXm,C.fXn,C.fXo,C.fXp,C.h4J,C.fGF,C.fJQ,C.fJR,C.fJT,C.fJU,C.fX8,C.h4E,C.h4F,C.h4G,C.fGm,C.fGn,C.h4P,C.fFR,C.fFS,C.h4c,C.fKG,C.fX1,C.fJN,C.fJO,C.fWX,C.fqm,C.fqn,C.fqo,C.fqp,C.fqq,C.fqE,C.fqA,C.fqB,C.fuI,C.fuJ,C.fxI,C.fCZ,C.fD_])
u(A.ax,[C.b_K,C.alX,C.aWs,C.ZV,C.bch,C.QM,C.a6C,C.tH,C.Ix,C.bgD,C.bks,C.bys,C.bnN,C.aem,C.bkr,C.ael,C.bkq,C.aDz,C.aJJ,C.aen,C.GB,C.bgE,C.adC,C.bgC,C.bgH,C.b_I,C.au2,C.aeI])
u(A.mn,[C.bcV,C.be8,C.be_,C.aIz,C.bjt,C.bp3,C.aWx,C.bcX,C.aBx,C.bcq,C.bt6,C.bjB,C.bj1,C.bj8,C.bgG,C.bfI,C.blz,C.byh])
u(A.iJ,[C.fYw,C.fYx,C.fYy,C.fYp,C.fYq,C.fYB,C.fYC,C.dQc,C.dPZ,C.dQ1,C.dPG,C.dPH,C.dPI,C.dPF,C.dPN,C.dPE,C.dPO,C.dPP,C.dPD,C.dPQ,C.dPC,C.dPR,C.dPB,C.dPS,C.dPt,C.dPu,C.dPA,C.dPT,C.dPy,C.dPU,C.dPx,C.dPJ,C.dPw,C.dPK,C.dPs,C.dPL,C.dPM,C.dQd,C.dQe,C.dQ2,C.dQ3,C.dQ4,C.dQ5,C.dQ6,C.dQ7,C.dQ8,C.dQk,C.dQb,C.fHg,C.dfT,C.dfR,C.dfS,C.dfU,C.dgx,C.dgm,C.dgj,C.dfW,C.dgn,C.dg1,C.dg2,C.dg4,C.dgl,C.dg0,C.dg6,C.dgu,C.dgg,C.dgf,C.dgh,C.dgi,C.dgb,C.dgd,C.dge,C.dg7,C.dgq,C.dgt,C.dfY,C.dfZ,C.dik,C.dij,C.dii,C.dih,C.dio,C.dig,C.dip,C.dgN,C.dgO,C.dgP,C.dgS,C.dgL,C.dgK,C.cP7,C.d7J,C.d7W,C.d7V,C.d8a,C.d7U,C.d8b,C.d7T,C.d7S,C.d8d,C.d7R,C.d83,C.d82,C.d8k,C.bRn,C.bRx,C.bRp,C.bRq,C.bRt,C.bRs,C.bRv,C.bRw,C.bRr,C.bRl,C.bRm,C.bT0,C.bT1,C.bT2,C.bT3,C.bT4,C.bT5,C.bT6,C.h4v,C.fW8,C.bKI,C.bKD,C.bKB,C.bKC,C.bKA,C.cq9,C.cqa,C.cq8,C.cqb,C.cqd,C.cqe,C.cqf,C.cq5,C.cF6,C.cFf,C.cFg,C.cFh,C.cFe,C.cFi,C.cFj,C.cFk,C.cFl,C.cF9,C.cFd,C.bSw,C.bSv,C.bSt,C.bSr,C.bSs,C.bSo,C.bSp,C.bSq,C.bSu,C.bSn,C.f7_,C.f70,C.f71,C.f72,C.f73,C.bSk,C.bSl,C.bSm,C.bSf,C.bSh,C.bSi,C.bSj,C.bSb,C.bRW,C.bRV,C.bRU,C.bRO,C.bRP,C.bRT,C.bRQ,C.bRR,C.bRN,C.e1D,C.e1F,C.e1y,C.e1z,C.e1x,C.e1H,C.e1I,C.e1J,C.e1M,C.e1N,C.e1O,C.e1P,C.e1Q,C.e1R,C.e1S,C.e1T,C.e1K,C.e1L,C.bS7,C.bS6,C.bRY,C.bRX,C.bS3,C.bS4,C.bS0,C.bS1,C.bS2,C.bS_,C.bRy,C.bRz,C.bRD,C.bRC,C.bRB,C.bRA,C.e3i,C.e3h,C.e3k,C.e3l,C.e3m,C.e3g,C.e3o,C.e3n,C.e2H,C.e2I,C.e2K,C.e26,C.e2n,C.e2m,C.e2p,C.e2D,C.e2i,C.e2t,C.e2u,C.e2s,C.e2q,C.e2r,C.e2w,C.e2x,C.e2y,C.e2C,C.e1V,C.e2F,C.e1Z,C.e21,C.e23,C.e2L,C.e29,C.e27,C.e2b,C.e2c,C.e28,C.e2d,C.e2h,C.e2U,C.e2V,C.e2N,C.e2Q,C.e2R,C.e2S,C.e2X,C.e2O,C.e24,C.dgW,C.dgV,C.dh_,C.dh9,C.dh0,C.eXK,C.dxd,C.dxa,C.dxb,C.dxl,C.dxk,C.dxj,C.dxt,C.dxi,C.dxu,C.dxh,C.dxv,C.dxg,C.dxw,C.dxf,C.dxe,C.dxp,C.dxz,C.dxI,C.e36,C.e3a,C.e3b,C.e32,C.e33,C.e34,C.e39,C.e3d,C.e3c,C.e2Y,C.e2Z,C.e3_,C.e30,C.e31,C.dPl,C.fY6,C.cor,C.d8w,C.d8v,C.d8z,C.d8s,C.d8u,C.cGO,C.cGU,C.cGV,C.cGT,C.cGX,C.cGS,C.cGP,C.cGQ,C.cH0,C.fme,C.fmf,C.eUV,C.eUM,C.eUN,C.eUO,C.eUQ,C.eUR,C.eUU,C.eUH,C.eUK,C.eUW,C.eUI,C.eUZ,C.eV_,C.eV0,C.eV1,C.eUY,C.eUC,C.eUD,C.eUE,C.eUG,C.eUF,C.eVk,C.eVl,C.eV3,C.eV4,C.eVb,C.eVc,C.eVd,C.eV7,C.eV8,C.eVr,C.eVq,C.eVs,C.eVp,C.eV2,C.eV6,C.eVn,C.eVm,C.eVh,C.eVi,C.eVg,C.eVf])
u(A.af,[C.apS,C.U4,C.a_D,C.a_H,C.a_F,C.a_d,C.alY,C.aka,C.auQ,C.ayN,C.am6,C.am4,C.am0,C.Wp,C.am2,C.U5,C.ar4,C.aqZ,C.a0h,C.ar2,C.a0B,C.a0C,C.a7o,C.a_f,C.a_e,C.ZM,C.a2n,C.Gp,C.ayU,C.au1,C.atW,C.au0,C.P3])
u(A.ah,[C.aEz,C.bgx,C.aBy,C.bgW,C.aBB,C.be6,C.aBz,C.azN,C.aGZ,C.ayO,C.aBD,C.aBC,C.aBA,C.blV,C.am3,C.am_,C.aF7,C.aF4,C.aDy,C.aF6,C.aF5,C.blW,C.aN8,C.aAi,C.aAh,C.az0,C.byk,C.aPg,C.aPh,C.aGA,C.bni,C.aGz,C.bA5])
u(A.jx,[C.dPY,C.dQ_,C.dPV,C.dQj,C.fJM,C.bRk,C.dgw,C.dgv,C.dgc,C.dgr,C.dgs,C.dgT,C.bT7,C.bT_,C.bRL,C.bRM,C.h4u,C.h4U,C.bKH,C.cqc,C.cq6,C.cq0,C.f74,C.bS9,C.bSc,C.bSd,C.drv,C.bS5,C.e2z,C.e2e,C.e2W,C.dh8,C.dh7,C.dh5,C.dha,C.dhd,C.dhe,C.dgZ,C.dh2,C.dh4,C.dhh,C.ceT,C.cf0,C.cf5,C.dPm,C.fY8,C.fY7,C.fmb,C.fmc,C.eUS,C.eVo,C.cG8,C.fu0,C.fpO,C.fJS,C.fFT,C.fJP,C.fqD,C.fqC,C.fuK])
u(A.lE,[C.a1T,C.ag2,C.a2b,C.a04,C.acF,C.aLt,C.Iw,C.am8,C.cG9,C.cGa])
t(C.alZ,C.aBz)
t(C.akb,C.azN)
t(C.auR,C.aGZ)
t(C.bgB,C.aBD)
t(C.am7,C.bgB)
t(C.bgA,C.aBC)
t(C.am5,C.bgA)
t(C.bgz,C.aBA)
t(C.am1,C.bgz)
t(C.blA,C.aN8)
t(C.byi,C.aPg)
t(C.byj,C.aPh)
t(C.aGB,C.bA5)
t(C.baJ,A.bax)
t(C.byl,A.a73)
t(C.baI,C.byl)
w(C.aBz,A.cc)
w(C.azN,A.cc)
w(C.aGZ,A.eM)
w(C.aBA,A.cc)
v(C.bgz,C.afP)
w(C.aBC,A.cc)
v(C.bgA,C.afP)
w(C.aBD,A.cc)
v(C.bgB,C.afP)
w(C.aN8,A.eM)
w(C.aPg,A.cc)
w(C.aPh,A.cc)
v(C.bA5,A.eB)
v(C.byl,A.jf)})()
A.iT(b.typeUniverse,JSON.parse('{"b_K":{"ax":[],"v":[]},"bcV":{"aC":[]},"apS":{"af":[],"v":[]},"aEz":{"ah":["apS"]},"U4":{"af":[],"v":[]},"alX":{"ax":[],"v":[]},"aWs":{"ax":[],"v":[]},"bgx":{"ah":["U4"]},"a_D":{"af":[],"v":[]},"a_H":{"af":[],"v":[]},"a_F":{"af":[],"v":[]},"a_d":{"af":[],"v":[]},"aBy":{"ah":["a_D"]},"bgW":{"ah":["a_H"]},"aBB":{"ah":["a_F"]},"ZV":{"ax":[],"v":[]},"be8":{"aC":[]},"be_":{"aC":[]},"be6":{"ah":["a_d"]},"aIz":{"aC":[]},"bjt":{"aC":[]},"bch":{"ax":[],"v":[]},"alY":{"af":[],"v":[]},"alZ":{"ah":["alY"]},"bp3":{"aC":[]},"aWx":{"aC":[]},"aka":{"af":[],"v":[]},"auQ":{"af":[],"v":[]},"ayN":{"af":[],"v":[]},"akb":{"ah":["aka"]},"bcX":{"aC":[]},"QM":{"ax":[],"v":[]},"aBx":{"aC":[]},"auR":{"ah":["auQ"]},"bcq":{"aC":[]},"ayO":{"ah":["ayN"]},"am6":{"af":[],"v":[]},"am4":{"af":[],"v":[]},"am0":{"af":[],"v":[]},"am7":{"ah":["am6"]},"bt6":{"aC":[]},"am5":{"ah":["am4"]},"bjB":{"aC":[]},"am1":{"ah":["am0"]},"bj1":{"aC":[]},"Wp":{"af":[],"v":[]},"am2":{"af":[],"v":[]},"U5":{"af":[],"v":[]},"a6C":{"ax":[],"v":[]},"bj8":{"aC":[]},"tH":{"ax":[],"v":[]},"Ix":{"ax":[],"v":[]},"blV":{"ah":["Wp"]},"am3":{"ah":["am2"]},"am_":{"ah":["U5"]},"ar4":{"af":[],"v":[]},"aqZ":{"af":[],"v":[]},"a0h":{"af":[],"v":[]},"aen":{"ax":[],"v":[]},"aF7":{"ah":["ar4"]},"aF4":{"ah":["aqZ"]},"bgD":{"ax":[],"v":[]},"bgG":{"aC":[]},"bks":{"ax":[],"v":[]},"bfI":{"aC":[]},"bys":{"ax":[],"v":[]},"bnN":{"ax":[],"v":[]},"aDy":{"ah":["a0h"]},"aem":{"ax":[],"v":[]},"bkr":{"ax":[],"v":[]},"ael":{"ax":[],"v":[]},"bkq":{"ax":[],"v":[]},"aDz":{"ax":[],"v":[]},"aJJ":{"ax":[],"v":[]},"GB":{"ax":[],"v":[]},"ar2":{"af":[],"v":[]},"a0B":{"af":[],"v":[]},"a0C":{"af":[],"v":[]},"aF6":{"ah":["ar2"]},"bgE":{"ax":[],"v":[]},"adC":{"ax":[],"v":[]},"bgC":{"ax":[],"v":[]},"bgH":{"ax":[],"v":[]},"aF5":{"ah":["a0B"]},"blW":{"ah":["a0C"]},"b_I":{"ax":[],"v":[]},"a7o":{"af":[],"v":[]},"blA":{"ah":["a7o"]},"blz":{"aC":[]},"au2":{"ax":[],"v":[]},"a_f":{"af":[],"v":[]},"a_e":{"af":[],"v":[]},"ZM":{"af":[],"v":[]},"a2n":{"af":[],"v":[]},"aAi":{"ah":["a_f"]},"aAh":{"ah":["a_e"]},"az0":{"ah":["ZM"]},"byk":{"ah":["a2n"]},"Gp":{"af":[],"v":[]},"ayU":{"af":[],"v":[]},"byi":{"ah":["Gp"]},"byj":{"ah":["ayU"]},"byh":{"aC":[]},"au1":{"af":[],"v":[]},"aGA":{"ah":["au1"]},"aeI":{"ax":[],"v":[]},"atW":{"af":[],"v":[]},"au0":{"af":[],"v":[]},"bni":{"ah":["atW"]},"aGz":{"ah":["au0"]},"P3":{"af":[],"v":[]},"aGB":{"ah":["P3"],"eB":[]},"baI":{"jf":[],"fi":[]}}'))
A.Dm(b.typeUniverse,JSON.parse('{"afP":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aTa"),cq:w("mk"),Q:w("rq"),r:w("bu<m,m>"),c5:w("aV7"),dY:w("aV8"),fH:w("MP"),de:w("akS"),dN:w("MX<H>"),gc:w("Eq<H>"),A:w("eI<m?>"),e:w("Iv"),B:w("nx"),P:w("hW"),df:w("ls"),k:w("kW"),x:w("aB<~>"),U:w("O<T1>"),V:w("O<ac>"),C:w("O<rq>"),O:w("O<u>"),c:w("O<MP>"),b:w("O<akS>"),ac:w("O<eI<m?>>"),I:w("O<nx>"),u:w("O<hW>"),J:w("O<ls>"),_:w("O<kW>"),cl:w("O<aB<ai<a9<m,@>>>>"),R:w("O<nA>"),eU:w("O<ai<+(F,F)>>"),ez:w("O<a9<m,aE>>"),gE:w("O<a9<m,m>>"),Y:w("O<a9<m,@>>"),fD:w("O<mS>"),bp:w("O<oK>"),g:w("O<o>"),ar:w("O<aue>"),v:w("O<fT>"),gy:w("O<aa5>"),L:w("O<+(m,m)>"),G:w("O<+(F,F)>"),E:w("O<+(F,~())>"),bd:w("O<+(m,H,P)>"),bF:w("O<+count,id,name(H,m,m)>"),F:w("O<cU>"),s:w("O<m>"),cF:w("O<au>"),aS:w("O<j4>"),dT:w("O<baw>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lD>"),h:w("O<aA1>"),cC:w("O<bhM>"),fp:w("O<KS>"),M:w("O<KZ>"),gZ:w("O<aIF>"),gA:w("O<afU>"),e4:w("O<ag0>"),dE:w("O<aKH>"),f7:w("O<P>"),n:w("O<F>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cw<ah<af>>"),d:w("ai<nx>"),do:w("ai<hW>"),cg:w("ai<ls>"),ax:w("ai<kW>"),fO:w("ai<a9<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(H,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lD>"),j:w("ai<@>"),fK:w("bA<m,m>"),d2:w("bA<m,ai<a9<m,@>>>"),a:w("a9<m,@>"),f:w("a9<@,@>"),gv:w("N<m,Iy>"),cM:w("N<H,m>"),w:w("iC"),g2:w("rO"),bV:w("apG"),fL:w("ct"),K:w("aE"),dc:w("fT"),fo:w("Pp<H>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,H)"),d9:w("+dx,hidden(F,ai<hW>)"),cs:w("+count,id,name(H,m,m)"),N:w("m"),fT:w("iu<hW>"),ec:w("iu<m>"),gW:w("r6<F>"),X:w("br<F>"),bW:w("dK"),W:w("bE<m>"),b4:w("bE<H>"),cI:w("k4<m>"),av:w("Y<zH>"),cc:w("Y<m>"),l:w("v"),gF:w("fi"),fA:w("lD"),dO:w("GF"),bw:w("ael<m?>"),cy:w("L0"),q:w("mC"),y:w("P"),i:w("F"),z:w("@"),S:w("H"),eK:w("ai<kW>?"),m:w("ar1?"),cT:w("o?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,H)?"),he:w("+qrPayload,token,usesRemaining(m,m,H)?"),gG:w("+members,trees,viewOnly(H,H,P)?"),az:w("ql?"),T:w("m?"),aD:w("dK?"),o:w("lD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4u=new A.be(B.fM,B.bI,B.fM,B.bI)
D.adM=new A.be(B.fM,B.il,B.fM,B.il)
D.b4I=new A.be(B.iB,B.bI,B.bI,B.bI)
D.b4M=new A.ay(B.cG,1.4,B.r,-1)
D.b4W=new A.ay(B.ac,1,B.r,-1)
D.aeg=new A.aY(140,1/0,0,1/0)
D.b6k=new A.aY(0,1/0,64,1/0)
D.b6o=new A.aY(0,84,0,1/0)
D.aen=new A.aY(130,1/0,0,1/0)
D.aCD=w([B.m6,B.rK,B.c],x.O)
D.c7s=new A.a8(B.aA,B.aE,B.x,D.aCD,null,null)
D.b78=new A.p(null,null,null,null,null,D.c7s,B.n)
D.deI=w([B.aX,B.bR],x.O)
D.c9z=new A.a8(B.b7,B.b9,B.x,D.deI,null,null)
D.b7t=new A.p(null,null,null,null,null,D.c9z,B.n)
D.Yc=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fz=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.diJ=w([B.dx,D.Yc,D.fz],x.O)
D.c6F=new A.a8(B.b7,B.b9,B.x,D.diJ,null,null)
D.b8d=new A.p(null,null,null,null,null,D.c6F,B.n)
D.fqR=new A.G(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h17=new A.B("?",null,D.fqR,null,null,null,null,null,null,null,null,null)
D.bbR=new A.ch(B.A,null,null,D.h17,null)
D.VO=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK5=new A.B("\ud83c\udf33",null,D.VO,null,null,null,null,null,null,null,null,null)
D.af6=new A.ch(B.A,null,null,D.fK5,null)
D.fMK=new A.B("\ud83c\udfc6",null,Ar.KE,null,null,null,null,null,null,null,null,null)
D.bc1=new A.ch(B.A,null,null,D.fMK,null)
D.bdS=new A.fk(null,null,null,null,null,E.kq,null,null,null,null)
D.af8=new A.ch(B.A,null,null,D.bdS,null)
D.kM=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.frq=new A.G(!0,D.kM,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLL=new A.B("No books on the shelf yet.",null,D.frq,null,null,null,null,null,null,null,null,null)
D.erU=new A.D(B.nH,D.fLL,null)
D.bch=new A.ch(B.A,null,null,D.erU,null)
D.fyq=new A.G(!0,D.fz,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h22=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fyq,null,null,null,null,null,null,null,null,null)
D.esv=new A.D(B.cl,D.h22,null)
D.bcK=new A.ch(B.A,null,null,D.esv,null)
D.aWF=new A.B("\ud83e\uddfa",null,D.VO,null,null,null,null,null,null,null,null,null)
D.bcZ=new A.ch(B.A,null,null,D.aWF,null)
D.fPe=new A.B("\ud83c\udfad",null,D.VO,null,null,null,null,null,null,null,null,null)
D.bda=new A.ch(B.A,null,null,D.fPe,null)
D.bdd=new A.ch(B.A,null,null,A7.Y0,null)
D.aft=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afA=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bfr=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bfw=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bfI=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bfL=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bfN=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bfV=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bfZ=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bg3=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bg4=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bg5=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bgG=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Bz=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgP=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bh8=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bhb=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bhh=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bhp=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.agb=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bhw=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yo=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.age=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bhI=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yq=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bi2=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agq=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bir=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.biH=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bj4=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bje=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FM=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bjA=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bjC=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bjG=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agS=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bk_=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bk5=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bkb=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agW=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bkj=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bkL=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkT=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bkV=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bl_=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahb=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.blC=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahA=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bmz=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahN=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmY=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FZ=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bn3=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bnd=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bnf=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahS=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bny=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bnz=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bnC=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ai_=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Z6=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bnZ=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.boj=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.boo=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aia=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bov=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Zd=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.boO=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.boP=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G5=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bpB=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bqf=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bql=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bqp=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qk=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bqA=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bqE=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bqK=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bqM=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiX=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aj0=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gb=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zw=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aj9=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.brT=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bsb=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bsA=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bsJ=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajz=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.ZG=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bsS=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bt9=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.ZK=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.btn=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.btD=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZP=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.btI=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajR=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajT=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bu0=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ajZ=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bus=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.buw=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.buC=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.buI=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.buQ=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bvo=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bvU=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fFY=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bzr=new A.eI(null,D.fFY,B.fc,null,x.A)
D.fP5=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bzt=new A.eI(null,D.fP5,B.fc,null,x.A)
D.akS=new A.bd(3e4)
D.bA0=new A.bd(38e5)
D.bAK=new A.im(0,10,0,10)
D.bAT=new A.R(0,1,0,0)
D.bB3=new A.im(0,4,0,4)
D.bB6=new A.R(0,4,5,0)
D.bBn=new A.R(10,10,14,10)
D.bBz=new A.im(10,4,10,4)
D.bBH=new A.im(10,8,10,8)
D.bBI=new A.R(10,8,8,8)
D.bCb=new A.R(12,6,12,2)
D.bCs=new A.R(14,0,14,6)
D.bCw=new A.R(14,10,6,6)
D.bCx=new A.R(14,12,14,0)
D.bCB=new A.R(14,12,14,8)
D.bCE=new A.R(14,12,8,14)
D.bCI=new A.im(14,14,14,14)
D.bD_=new A.R(14,6,14,40)
D.bD2=new A.R(14,8,14,30)
D.bDq=new A.R(16,2,16,10)
D.bDz=new A.R(16,6,16,30)
D.bDB=new A.R(16,6,16,8)
D.bDQ=new A.R(18,10,18,4)
D.bDS=new A.R(18,12,18,0)
D.bDZ=new A.R(18,14,12,4)
D.amo=new A.R(18,16,18,8)
D.bEe=new A.R(18,20,18,22)
D.bEk=new A.R(18,30,18,30)
D.bEB=new A.R(20,10,12,20)
D.bEE=new A.R(20,11,20,11)
D.bEQ=new A.R(20,18,16,18)
D.bES=new A.R(20,18,20,6)
D.bFH=new A.R(24,32,24,28)
D.bFI=new A.R(24,36,24,32)
D.bFM=new A.R(26,26,24,14)
D.bG0=new A.R(2,4,2,8)
D.bG4=new A.R(30,0,30,0)
D.bGf=new A.R(38,22,22,22)
D.amM=new A.R(40,24,24,24)
D.bGh=new A.im(40,40,40,40)
D.bGj=new A.R(46,30,30,30)
D.bGK=new A.R(56,40,40,40)
D.bGO=new A.R(1.25,1.25,1.25,1.25)
D.bGP=new A.R(60,0,60,0)
D.bGT=new A.R(6,14,6,16)
D.bGX=new A.R(6,4,12,0)
D.bH0=new A.R(6,6,10,2)
D.bH7=new A.im(7,3,7,3)
D.bHF=new A.R(5,1.5,5,1.5)
D.bHQ=new A.R(6,2.5,6,2.5)
D.fXi=new A.B("Family Games",null,B.jP,null,null,null,null,null,null,null,null,null)
D.fEA=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.VE,null,null,null,null,null,null,null,null,null)
D.cIC=w([D.fXi,D.fEA],x.p)
D.bwV=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.cIC,null)
D.bIf=new A.bz(1,B.bc,D.bwV,null)
D.h0E=new A.B("Signature",null,B.ng,null,null,null,null,null,null,null,null,null)
D.bIi=new A.bz(1,B.bc,D.h0E,null)
D.fTS=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tG,null,null,null,null,null,null,null,null,null)
D.bIQ=new A.bz(1,B.bc,D.fTS,null)
D.fYL=new A.B("Tell the AI what to fix",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bJ7=new A.bz(1,B.bc,D.fYL,null)
D.fzc=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_J=new A.B("Worksheets",null,D.fzc,null,null,null,null,null,null,null,null,null)
D.fzo=new A.G(!0,E.afW,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZA=new A.B("Track your project spending",null,D.fzo,null,null,null,null,null,null,null,null,null)
D.d68=w([D.h_J,B.ax,D.fZA],x.p)
D.bwz=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.d68,null)
D.bJd=new A.bz(1,B.bc,D.bwz,null)
D.fud=new A.G(!0,E.kq,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF9=new A.B("FAMILY LIBRARY",null,D.fud,null,null,null,null,null,null,null,null,null)
D.bJw=new A.bz(1,B.bc,D.fF9,null)
D.OB=new C.Iv("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wu=new C.Iw(0,"male")
D.ot=new C.Iw(1,"female")
D.z_=new C.Iw(2,"unknown")
D.uA=new C.am8(0,"owner")
D.OC=new C.am8(1,"editor")
D.kV=new C.am8(2,"viewer")
D.aoI=new A.a0(61199,"MaterialIcons",!1)
D.bOP=new A.a0(61504,"MaterialIcons",!1)
D.bOQ=new A.a0(61505,"MaterialIcons",!1)
D.bOS=new A.a0(61587,"MaterialIcons",!1)
D.bOZ=new A.a0(61890,"MaterialIcons",!1)
D.bPR=new A.a0(63034,"MaterialIcons",!0)
D.bQ8=new A.a0(63153,"MaterialIcons",!1)
D.bQF=new A.a0(63429,"MaterialIcons",!1)
D.aqQ=new A.a0(984520,"MaterialIcons",!1)
D.bPn=new A.a0(62776,"MaterialIcons",!1)
D.bT_=new A.ae(D.bPn,26,B.b2,null,null,null)
D.bNN=new A.a0(57648,"MaterialIcons",!1)
D.bTj=new A.ae(D.bNN,14,B.c,null,null,null)
D.bTA=new A.ae(B.Hl,17,null,null,null,null)
D.bTG=new A.ae(B.a2j,null,B.bR,null,null,null)
D.bU6=new A.ae(E.a2r,null,null,null,null,null)
D.bU9=new A.ae(B.j3,18,E.kq,null,null,null)
D.a29=new A.a0(62044,"MaterialIcons",!1)
D.bUe=new A.ae(D.a29,null,B.aX,null,null,null)
D.bUl=new A.ae(B.zc,18,B.c,null,null,null)
D.bV3=new A.ae(B.ef,16,null,null,null,null)
D.bVa=new A.ae(D.a29,32,B.aX,null,null,null)
D.bVt=new A.ae(E.aoJ,18,B.cG,null,null,null)
D.bWy=new A.ae(B.Hv,22,B.ay,null,null,null)
D.bWK=new A.ae(B.ef,22,B.b2,null,null,null)
D.bWX=new A.ae(Y.a2e,22,B.c,null,null,null)
D.bX2=new A.ae(B.uL,52,B.c,null,null,null)
D.bXc=new A.ae(B.Hv,30,B.ay,null,null,null)
D.bXv=new A.ae(B.a2w,null,B.c,null,null,null)
D.arx=new A.ae(B.uV,22,B.c,null,null,null)
D.bXE=new A.ae(B.ef,17,null,null,null,null)
D.bY2=new A.ae(B.wK,26,B.cG,null,null,null)
D.bYO=new A.ae(B.a2E,16,null,null,null,null)
D.bZz=new A.ae(B.uL,24,B.c,null,null,null)
D.bZE=new A.ae(B.P4,20,B.tg,null,null,null)
D.bZJ=new A.ae(B.Hj,null,B.bR,null,null,null)
D.bZS=new A.ae(B.j3,18,B.c,null,null,null)
D.c_x=new A.ae(B.cy,22,B.ac,null,null,null)
D.c0n=new A.ae(B.ei,16,B.ac,null,null,null)
D.c0z=new A.ae(D.a29,20,B.aX,null,null,null)
D.arX=new A.ae(B.hJ,20,null,null,null,null)
D.c14=new A.ae(B.cy,18,D.kM,null,null,null)
D.c1l=new A.ae(B.zj,28,B.c,null,null,null)
D.c1w=new A.ae(B.OV,null,B.fh,null,null,null)
D.c1R=new A.ae(B.zj,24,B.c,null,null,null)
D.c2i=new A.ae(B.uL,null,B.aX,null,null,null)
D.c2j=new A.ae(B.jG,20,B.cG,null,null,null)
D.c2D=new A.ae(B.Hl,16,null,null,null,null)
D.c4b=new A.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eK,!0,null,null,null,null)
D.asF=new C.a6C(10,null)
D.c4H=new C.a6C(12,null)
D.c4I=new C.a6C(14,null)
D.dmQ=w([B.bx,B.aX,B.fo,B.b2],x.O)
D.c5T=new A.a8(B.aA,B.aE,B.x,D.dmQ,null,null)
D.bpn=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bvv=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d2C=w([D.bpn,D.bvv],x.O)
D.c63=new A.a8(B.b7,B.b9,B.x,D.d2C,null,null)
D.dgJ=w([B.eV,B.fU,B.fo],x.O)
D.c68=new A.a8(B.aA,B.aE,B.x,D.dgJ,null,null)
D.aiL=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bg6=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d4Q=w([D.aiL,D.bg6],x.O)
D.c6G=new A.a8(B.b7,B.b9,B.x,D.d4Q,null,null)
D.bjQ=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBT=w([D.bjQ,D.aiL],x.O)
D.c7_=new A.a8(B.aA,B.aE,B.x,D.aBT,null,null)
D.aht=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bmq=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dfN=w([D.aht,D.bmq],x.O)
D.c7D=new A.a8(B.a7,B.aa,B.x,D.dfN,null,null)
D.dtN=w([B.bC,B.mP],x.O)
D.c7F=new A.a8(B.b7,B.b9,B.x,D.dtN,null,null)
D.bpi=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.duJ=w([D.bpi,D.kM,D.kM,I.N6],x.O)
D.dxe=w([0,0.07,0.9,1],x.n)
D.c89=new A.a8(B.a7,B.aa,B.x,D.duJ,D.dxe,null)
D.c8i=new A.a8(B.aA,B.aE,B.x,B.SJ,null,null)
D.d0o=w([B.aF,D.lB],x.O)
D.c8l=new A.a8(B.a7,B.aa,B.x,D.d0o,null,null)
D.dtl=w([B.b2,B.aX,B.bR],x.O)
D.c9k=new A.a8(B.aA,B.aE,B.x,D.dtl,null,null)
D.cdD=w([10,20,30],x.t)
D.cnz=w([-1,-0.4,0.3,1],x.n)
D.cv1=w([B.bx,B.b2,B.eV],x.O)
D.cva=w([B.bp,B.aF,B.kp],x.O)
D.cvc=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cvU=w([30,140,262,360],x.n)
D.bnI=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cBs=w([D.bnI,E.aij],x.O)
D.emv=new A.o(1,2)
D.fcb=new A.cU(B.aV,D.emv,3)
D.ayO=w([D.fcb],x.F)
D.cIU=w([B.hp,B.cg,B.fn],x.O)
D.cLE=w([B.bK,B.bw,B.bq],x.O)
D.bKm=new C.uT("classic","Classic leather","Gold-edged brown leather",D.aBT,E.kq,E.kq,"\u2766",B.K,!0,!1,!1,!1)
D.bfb=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bui=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d7Q=w([D.bfb,D.bui],x.O)
D.aio=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bKh=new C.uT("ornate","Ornate gold","Double gold border and flourishes",D.d7Q,D.aio,D.aio,"\u2726",B.K,!0,!0,!0,!1)
D.bjo=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bq9=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d_j=w([D.bjo,D.bq9],x.O)
D.bKg=new C.uT("parchment","Parchment","Old paper with dark ink",D.d_j,D.G5,L.j_,"\u2767",B.K,!0,!1,!1,!0)
D.afC=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bsx=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.drA=w([D.afC,D.bsx],x.O)
D.bna=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.brO=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bKj=new C.uT("minimal","Clean paper","Plain and elegant, like a printed book",D.drA,D.bna,D.brO,"",B.K,!0,!0,!1,!0)
D.bKl=new C.uT("midnight","Midnight","Deep blue with silver stars",K.aCc,B.cu,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bKf=new C.uT("emerald","Emerald library","Green cloth, title on the left",V.azc,E.kq,B.fy,"\u25c6",B.bn,!0,!1,!1,!1)
D.bt1=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dpB=w([B.ek,D.bt1],x.O)
D.bou=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bpI=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bKk=new C.uT("rose","Rose vintage","Burgundy with rose-gold lettering",D.dpB,D.bou,D.bpI,"\u2740",B.K,!0,!1,!0,!1)
D.duj=w([B.cr,F.nx],x.O)
D.bKi=new C.uT("modern","Modern","Dark, bold, left-aligned",D.duj,B.aH,B.c,"",B.bn,!1,!0,!1,!1)
D.a4K=w([D.bKm,D.bKh,D.bKg,D.bKj,D.bKl,D.bKf,D.bKk,D.bKi],A.at("O<uT>"))
D.cOB=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.du7=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bKx=new C.ls('What does "Ubuntu" mean?',D.du7,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d13=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bKA=new C.ls("In Swahili, what do we call a grandmother?",D.d13,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d0V=w(["Babu","Mama","Baba","Dada"],x.s)
D.bKv=new C.ls("In Swahili, what do we call a grandfather?",D.d0V,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d2c=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bKz=new C.ls("What is a sister called in Swahili?",D.d2c,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d7h=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bKw=new C.ls("What is a brother called in Swahili?",D.d7h,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d0U=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bKH=new C.ls("Which word means father in Swahili?",D.d0U,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dvi=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bKG=new C.ls('"Umoja ni nguvu" means...',D.dvi,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dsg=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bKI=new C.ls('"Haba na haba hujaza kibaba" teaches us...',D.dsg,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d4Y=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bKF=new C.ls('The African saying "It takes a village to raise a child" means...',D.d4Y,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dvC=w(["The elders","The market","The river","The drum"],x.s)
D.bKB=new C.ls("Who is the traditional keeper of the family stories?",D.dvC,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cSM=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bKy=new C.ls("Why do families sit round the fire at night?",D.cSM,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dul=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bKD=new C.ls('What does "Harambee" mean?',D.dul,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.da6=w(["An elder","A baby","A market","A cow"],x.s)
D.bKC=new C.ls('"Mzee" is a respectful word for...',D.da6,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dps=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bKE=new C.ls('What does "Shikamoo" show?',D.dps,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.az7=w([D.bKx,D.bKA,D.bKv,D.bKz,D.bKw,D.bKH,D.bKG,D.bKI,D.bKF,D.bKB,D.bKy,D.bKD,D.bKC,D.bKE],x.J)
D.cX9=w([90,360],x.n)
D.cZR=w([B.bR,B.bl],x.O)
D.bp6=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d_v=w([D.afC,D.bp6],x.O)
D.d07=w([-1,-0.3,0.4,1],x.n)
D.d1_=w([0,0.45,0.72,0.92,1],x.n)
D.bjk=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d1h=w([D.bjk,B.dh],x.O)
D.bh3=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ak7=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d1Q=w([B.dx,D.bh3,D.ak7],x.O)
D.d2S=w([B.ba,B.jh,B.pa],x.O)
D.bjS=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.brF=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bgK=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d2X=w([D.bjS,D.brF,D.bgK],x.O)
D.d3h=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d3r=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.huN=new C.ae0(78,424,48,44,56)
D.huL=new C.ae0(214,396,34,34,42)
D.huM=new C.ae0(442,452,56,50,64)
D.aA5=w([D.huN,D.huL,D.huM],A.at("O<ae0>"))
D.d4_=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bg0=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.blB=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dxa=w([D.aht,D.bg0,D.blB],x.O)
D.bKn=new C.uU("leather","Leather",D.dxa,"vintage")
D.db7=w([B.d6,B.FX,A9.YE],x.O)
D.bKu=new C.uU("midnight","Midnight",D.db7,"starry")
D.d2T=w([B.eq,B.e7,B.lf],x.O)
D.bKt=new C.uU("forest","Forest",D.d2T,"story")
D.dzc=w([B.es,B.ek,B.ks],x.O)
D.bKq=new C.uU("burgundy","Burgundy",D.dzc,"royal")
D.cLc=w([B.aF,B.oh,B.o5],x.O)
D.bKr=new C.uU("royal","Royal",D.cLc,"royal")
D.d5t=w([B.bw,B.cr,F.nx],x.O)
D.bKo=new C.uU("charcoal","Charcoal",D.d5t,"geo")
D.dxj=w([B.c6,B.dK,B.yf],x.O)
D.bKs=new C.uU("sunset","Sunset",D.dxj,"sunset")
D.dy0=w([B.jh,B.G6,B.YH],x.O)
D.bKp=new C.uU("ocean","Ocean",D.dy0,"band")
D.zO=w([D.bKn,D.bKu,D.bKt,D.bKq,D.bKr,D.bKo,D.bKs,D.bKp],A.at("O<uU>"))
D.d5Z=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d6A=w([B.am,B.aM,B.U],x.O)
D.d7V=w([B.ek,B.e7,B.d6,B.hb,B.yj,B.cG,B.kt,B.e8,B.cZ],x.O)
D.d7W=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fcc=new A.cU(B.ds,B.dG,8)
D.d86=w([D.fcc],x.F)
D.d9d=w([B.bT,B.dK,B.ko],x.O)
D.bhW=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blT=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bq4=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d9t=w([D.bhW,G.aiU,D.blT,D.bq4,D.ak7],x.O)
D.d9K=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d9W=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bfm=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.blf=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dao=w([D.bfm,D.agW,D.blf],x.O)
D.db2=w([B.bT,B.hE],x.O)
D.db8=w([G.no,B.ib,G.afN,B.cO],x.O)
D.dcI=w([B.cO,G.no,B.ib,D.lC,B.cO],x.O)
D.ddj=w([B.aS,B.w4,B.y3],x.O)
D.aB6=w(["True","False"],x.s)
D.eJG=new A.y(-0.65,0.6)
D.eWl=new A.y(-0.2,0.95)
D.eXq=new A.y(0.25,0.95)
D.eN9=new A.y(0.7,0.6)
D.eY_=new A.y(1,0.1)
D.de4=w([As.Uw,D.eJG,D.eWl,D.eXq,D.eN9,D.eY_],x.G)
D.bo_=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bua=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.biW=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dea=w([D.bo_,D.bua,D.biW],x.O)
D.dee=w([B.bM,B.c0,B.dj,B.aS],x.O)
D.deJ=w([B.hV,B.c6,B.rB],x.O)
D.df6=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dfi=w([B.eV,B.cG],x.O)
D.bpr=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dfI=w([D.bpr,D.afA],x.O)
D.dfT=w([B.cF,B.fp,B.fF],x.O)
D.dg3=w([B.aH,B.bl,B.d6],x.O)
D.dgG=w([B.er,B.cX,B.e7],x.O)
D.dh_=w([B.dJ,B.d6,B.FX],x.O)
D.dh3=w([B.bi,B.mK,B.cZ],x.O)
D.dhl=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.boF=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmU=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dhF=w([D.boF,D.agS,D.bmU],x.O)
D.diu=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.djx=w([1,0,7,6,3,2],x.t)
D.a5H=w(["leather","linen","plain","stars","rays"],x.s)
D.djJ=w([0.5,2,3.6],x.n)
D.dkg=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bSH=new A.a0(985219,"MaterialIcons",!1)
D.bSe=new A.a0(983781,"MaterialIcons",!1)
D.aBz=w([B.a2j,B.hK,B.lN,B.ie,D.bSH,B.HF,B.qJ,D.bSe,K.aqE,B.CW,B.qL,B.n2],A.at("O<a0>"))
D.a5L=w(["double","single","corners","none"],x.s)
D.bKc=new C.zH("Little Seed","\ud83c\udf31",0)
D.bKe=new C.zH("Young Listener","\ud83d\udc42",40)
D.bKd=new C.zH("Storyteller","\ud83e\ude98",120)
D.bKb=new C.zH("Village Pride","\ud83c\udfe1",300)
D.bK9=new C.zH("Keeper of Roots","\ud83c\udf33",700)
D.bKa=new C.zH("Elder of the Fire","\ud83d\udd25",1500)
D.aBB=w([D.bKc,D.bKe,D.bKd,D.bKb,D.bK9,D.bKa],A.at("O<zH>"))
D.dlp=w([B.db,B.br,B.e8],x.O)
D.dlF=w([],x.C)
D.Dx=w([],x.u)
D.aLH=new A.o(225,528)
D.eLl=new A.y(D.aLH,1)
D.enf=new A.o(350,548)
D.eRD=new A.y(D.enf,0.95)
D.aLC=new A.o(158,656)
D.eRw=new A.y(D.aLC,1.12)
D.eo0=new A.o(92,544)
D.eGU=new A.y(D.eo0,0.93)
D.eni=new A.o(398,614)
D.eNw=new A.y(D.eni,1.04)
D.en6=new A.o(318,662)
D.eCm=new A.y(D.en6,1.1)
D.a5T=w([D.eLl,D.eRD,D.eRw,D.eGU,D.eNw,D.eCm],A.at("O<+(o,F)>"))
D.dnH=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.do8=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dpa=w([B.cO,G.no,B.ib,D.lC,B.cO,B.ib],x.O)
D.dqA=w([B.av,B.fp,B.hb],x.O)
D.drb=w([-70,58],x.n)
D.drd=w([-70,-30,20],x.n)
D.dse=w([B.bi,B.mK,B.Gh],x.O)
D.dsv=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dMt=new C.lW("construction","Construction","Jobsite & builds",B.uI)
D.dMA=new C.lW("house","Home Build","Houses & rooms",B.wF)
D.dMq=new C.lW("grocery","Grocery","Store & pantry",B.a3d)
D.dMp=new C.lW("calculator","Calculations","Math & estimates",B.Pb)
D.dMy=new C.lW("lumber","Materials","Lumber & supplies",B.Pv)
D.dMm=new C.lW("kitchen","Kitchen","Remodel & meals",A3.Pw)
D.bSc=new A.a0(983756,"MaterialIcons",!1)
D.dMr=new C.lW("landscape","Landscaping","Yard & garden",D.bSc)
D.dMl=new C.lW("plumbing","Plumbing","Pipes & water",B.pC)
D.dMB=new C.lW("electrical","Electrical","Wiring & power",B.hw)
D.dMj=new C.lW("store","Retail Shop","Daily business",B.ll)
D.dMk=new C.lW("paint_remodel","Paint & Remodel","Colors & walls",A3.Pq)
D.bRC=new A.a0(983311,"MaterialIcons",!1)
D.dMx=new C.lW("roofing","Roofing","Roofs & exteriors",D.bRC)
D.bSp=new A.a0(983986,"MaterialIcons",!1)
D.dMi=new C.lW("warehouse","Warehouse","Storage & stock",D.bSp)
D.dMv=new C.lW("vehicles","Vehicles","Fleet & transport",B.HG)
D.bPp=new A.a0(62785,"MaterialIcons",!1)
D.dMo=new C.lW("farm","Farm","Crops & livestock",D.bPp)
D.dMn=new C.lW("restaurant","Restaurant","Food & catering",B.wO)
D.dMu=new C.lW("tools","Tools","Workshop gear",B.HC)
D.dMz=new C.lW("wallet","Cash & Wallet","Quick spending",B.jG)
D.bQA=new A.a0(63395,"MaterialIcons",!1)
D.dMw=new C.lW("concrete","Concrete","Foundation work",D.bQA)
D.dMs=new C.lW("blueprint","Blueprint","Plans & design",An.apc)
D.a6f=w([D.dMt,D.dMA,D.dMq,D.dMp,D.dMy,D.dMm,D.dMr,D.dMl,D.dMB,D.dMj,D.dMk,D.dMx,D.dMi,D.dMv,D.dMo,D.dMn,D.dMu,D.dMz,D.dMw,D.dMs],A.at("O<lW>"))
D.dt1=w([B.bv,B.br],x.O)
D.dtO=w([B.iE,B.oc,B.dU],x.O)
D.ahH=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aiG=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bne=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.beT=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCL=w([D.ahH,D.aiG,D.bne,D.beT],x.O)
D.dv_=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a6q=w(["top","middle","bottom"],x.s)
D.dwp=w([B.co,B.bl,B.d6],x.O)
D.aD5=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b8G=new A.ac(0,B.G,B.aV,B.H,14)
D.aD8=w([D.b8G],x.V)
D.bm8=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dx3=w([D.agb,D.ZG,D.bm8],x.O)
D.dx4=w([B.b4,B.cX,B.e7],x.O)
D.emQ=new A.o(24,-8)
D.eny=new A.o(48,0)
D.emM=new A.o(24,6)
D.dyK=w([B.H,D.emQ,D.eny,D.emM],x.g)
D.dz8=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ejl={top:0,middle:1,bottom:2}
D.dCn=new A.bu(D.ejl,["Top","Middle","Bottom"],x.r)
D.eiW={double:0,single:1,corners:2,none:3}
D.dCt=new A.bu(D.eiW,["Double line","One line","Corners","None"],x.r)
D.ekb={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dDZ=new A.bu(D.ekb,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dEa=new A.bu(B.i1,[],A.at("bu<H,+(m,m)>"))
D.ejd={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DK=new A.bu(D.ejd,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bu<m,H>"))
D.dGS=new H.NT(32,null)
D.dGT=new H.NT(40,null)
D.dGU=new H.NT(46,null)
D.aL9=new C.au0(null)
D.elH=new A.o(0,40)
D.elI=new A.o(0,412)
D.elK=new A.o(0,900)
D.elU=new A.o(0,-34)
D.elV=new A.o(0,-46)
D.elX=new A.o(0,-74)
D.em_=new A.o(100,300)
D.em0=new A.o(10,14)
D.em3=new A.o(10,-10)
D.em8=new A.o(10,-46)
D.em9=new A.o(10,-58)
D.ema=new A.o(116,442)
D.emc=new A.o(11,-1)
D.emd=new A.o(11,-10)
D.eme=new A.o(11,-21)
D.aLx=new A.o(11,-60)
D.eml=new A.o(14,-2)
D.emm=new A.o(150,520)
D.a8p=new A.o(150,592)
D.emp=new A.o(15,-15)
D.emq=new A.o(16,-1)
D.emu=new A.o(190,444)
D.emx=new A.o(1,5)
D.emF=new A.o(21,-78)
D.emG=new A.o(222,615)
D.Jy=new A.o(225,300)
D.a8s=new A.o(225,574)
D.emP=new A.o(24,-52)
D.emR=new A.o(250,210)
D.en1=new A.o(2,-56)
D.aLL=new A.o(300,0)
D.en2=new A.o(300,440)
D.en5=new A.o(318,476)
D.en8=new A.o(324,144)
D.a8v=new A.o(332,150)
D.ena=new A.o(335,585)
D.enb=new A.o(338,140)
D.enc=new A.o(340,158)
D.ene=new A.o(34,-60)
D.Ea=new A.o(36,-24)
D.eng=new A.o(372,470)
D.enh=new A.o(390,455)
D.enq=new A.o(42,468)
D.enr=new A.o(431,510)
D.ens=new A.o(431,520)
D.ent=new A.o(45,-92)
D.enu=new A.o(46,20)
D.env=new A.o(46,-92)
D.enw=new A.o(46,-94)
D.enx=new A.o(47,-4)
D.enz=new A.o(48,-4)
D.enH=new A.o(4,-26)
D.enP=new A.o(60,455)
D.enW=new A.o(8,14)
D.eo_=new A.o(8,-76)
D.eo1=new A.o(95,575)
D.eo2=new A.o(98,-24)
D.eo4=new A.o(9,-2)
D.eo5=new A.o(9,-58)
D.aLU=new A.o(9,-79)
D.eo6=new A.o(9,-9)
D.eoJ=new A.o(16.5,8)
D.eoL=new A.o(3.2,0)
D.eoN=new A.o(-16.5,8)
D.eoU=new A.o(16.5,2)
D.eoX=new A.o(-3.2,0)
D.ep5=new A.o(9.5,6)
D.ep9=new A.o(-10,14)
D.epa=new A.o(-10,-12)
D.epb=new A.o(-10,-58)
D.epd=new A.o(-11,-1)
D.epe=new A.o(-11,-10)
D.epg=new A.o(-11,-60)
D.eph=new A.o(-12,-14)
D.epi=new A.o(-12,-16)
D.epp=new A.o(-14,-2)
D.eps=new A.o(-15,-15)
D.ept=new A.o(-15,-3)
D.epv=new A.o(-16,-1)
D.epM=new A.o(-24,-52)
D.epT=new A.o(-2,-34)
D.epU=new A.o(-2,-38)
D.epW=new A.o(-30,-100)
D.a8w=new A.o(-36,-24)
D.eq6=new A.o(-4,-26)
D.eq8=new A.o(-4,-6)
D.eqi=new A.o(-8,-3)
D.eqj=new A.o(-8,-48)
D.eqm=new A.o(-9,-2)
D.eqo=new A.o(-9,-58)
D.eqp=new A.o(-9,-79)
D.eqq=new A.o(-9,-9)
D.eqs=new A.o(-9.5,6)
D.eqG=new A.o(-16.5,2)
D.fMq=new A.B("Write a new book",null,B.h7,null,B.K,null,null,null,null,null,null,null)
D.erf=new A.D(B.kv,D.fMq,null)
D.h0c=new A.B("Tap to go on",null,B.vz,null,null,null,null,null,null,null,null,null)
D.erB=new A.D(B.lg,D.h0c,null)
D.ar5=new A.ae(B.hY,18,B.c,null,null,null)
D.fFu=new A.B("Add",null,B.l4,null,null,null,null,null,null,null,null,null)
D.des=w([D.ar5,B.r7,D.fFu],x.p)
D.f9j=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.des,null)
D.erE=new A.D(B.nE,D.f9j,null)
D.erF=new A.D(E.alf,A7.Y0,null)
D.fz7=new A.G(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIF=new A.B("New Project",null,D.fz7,null,null,null,null,null,null,null,null,null)
D.diR=w([D.ar5,B.ae,D.fIF],x.p)
D.f9m=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.diR,null)
D.erT=new A.D(B.iw,D.f9m,null)
D.fLa=new A.B("Choose your header",null,A0.vy,null,null,null,null,null,null,null,null,null)
D.ese=new A.D(B.hX,D.fLa,null)
D.be6=new A.fk(2.2,null,null,null,null,B.cG,null,null,null,null)
D.ff3=new A.a5(22,22,D.be6,null)
D.bcc=new A.ch(B.A,null,null,D.ff3,null)
D.esj=new A.D(B.a00,D.bcc,null)
D.bCS=new A.R(14,2,14,6)
D.fZj=new A.B("The top of your book. Tap a design to see it.",null,Q.tE,null,null,null,null,null,null,null,null,null)
D.esk=new A.D(D.bCS,D.fZj,null)
D.fKk=new A.B("\ud83c\udfc6 A new record!",null,B.h_,null,null,null,null,null,null,null,null,null)
D.esm=new A.D(B.lg,D.fKk,null)
D.etW=new A.j2(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.etZ=new A.j2(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aMv=new A.j2(1,0.9607843137254902,0.48627450980392156,0)
D.JH=new A.j2(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.An=new A.j2(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eu4=new A.j2(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hwW=new C.bjt(null)
D.bxI=new A.mJ(D.hwW,null,B.az,null,null)
D.aQ8=new A.cK(0,0,0,0,null,null,D.bxI,null)
D.fFw=new A.B("\ud83c\udfc5",null,B.aaO,null,null,null,null,null,null,null,null,null)
D.eyu=new A.cK(null,0,-34,null,null,null,D.fFw,null)
D.eGz=new A.y("E","Sit by the fire again")
D.eM9=new A.y("C","Good Learner")
D.ePA=new A.y("D","Still Growing")
D.eU9=new A.y(-42,42)
D.eVu=new A.y("B","Faithful Listener")
D.eXs=new A.y("A","Keeper of the Family")
D.f_C=new A.b5(-17,0.7,0)
D.f0b=new A.b5(-8,0.95,1.3)
D.f1e=new A.b5(18,0.65,5.2)
D.f1g=new A.b5(0,1.15,2.6)
D.f1A=new A.b5(9,0.9,3.9)
D.f3r=new A.cu([0,0,1,1])
D.aRD=new A.a1(0,0,520,160)
D.f6l=new A.a1(10,612,440,618)
D.f6m=new A.a1(10,612,440,628)
D.f6p=new A.a1(14,-64,34,-12)
D.f6s=new A.a1(300,336,350,348)
D.a9q=new A.a1(30,96,420,346)
D.f6t=new A.a1(30,-9,46,1)
D.f6u=new A.a1(4,2,11,14)
D.f6w=new A.a1(-8,-12.5,8,-7)
D.f6x=new A.a1(-16.5,-21,16.5,1)
D.f6y=new A.a1(60,342,88,348)
D.Ux=new A.a1(66,-66,94,-36)
D.f6z=new A.a1(6,8,10,14)
D.f6C=new A.a1(95,343,115,348)
D.f6D=new A.a1(-6.5,-74,6.5,-58)
D.f6J=new A.a1(-100,-74,100,-12)
D.f6K=new A.a1(-10,8,-6,14)
D.f6L=new A.a1(-11,2,-4,14)
D.f6M=new A.a1(-11,-70,11,-56)
D.f6T=new A.a1(-13,-24,13,-4)
D.f6Z=new A.a1(-15,-21,15,0)
D.f71=new A.a1(-16,-21,16,1)
D.f72=new A.a1(-16,-21,16,2)
D.f75=new A.a1(-16,-26,16,-6)
D.f7f=new A.a1(-230,-26,230,26)
D.f7D=new A.a1(-38,-26,12,-6)
D.f7H=new A.a1(-3,-70,3,-63)
D.f7I=new A.a1(-44,-22,44,0)
D.f7K=new A.a1(-46,-9,-30,1)
D.aRH=new A.a1(-80,-190,80,20)
D.f7R=new A.a1(-8,-26,40,-6)
D.f7S=new A.a1(-98,-80,92,-75)
D.f7T=new A.a1(-9,-15,9,-9)
D.fYS=new A.B("Let the AI write it from your tree",null,B.iC,null,B.K,null,null,null,null,null,null,null)
D.bLf=new A.dl(1,B.cm,D.fYS,null)
D.db1=w([E.a3I,B.ae,D.bLf],x.p)
D.f8X=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.db1,null)
D.fFa=new A.B("Save member",null,B.ch,null,null,null,null,null,null,null,null,null)
D.dqW=w([D.arX,B.ae,D.fFa],x.p)
D.f97=new A.c8(B.aL,B.bb,B.j,B.l,null,B.p,null,0,D.dqW,null)
D.bWQ=new A.ae(B.id,14,B.b2,null,null,null)
D.fsL=new A.G(!0,B.b2,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ4=new A.B("Cashier",null,D.fsL,null,null,null,null,null,null,null,null,null)
D.djn=w([D.bWQ,B.bm,D.fJ4],x.p)
D.f9b=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.djn,null)
D.fFb=new A.B("Transfer & settings",null,B.dk,null,null,null,null,null,null,null,null,null)
D.bIX=new A.bz(1,B.bc,D.fFb,null)
D.d2l=w([D.arx,B.au,D.bIX],x.p)
D.f9c=new A.c8(B.aL,B.e,B.j,B.l,null,B.p,null,0,D.d2l,null)
D.fdK=new A.av(16,40)
D.fdP=new A.av(22,64)
D.fdW=new A.av(280,88)
D.feK=new A.a5(30,null,null,null)
D.fEg=new A.B("The teacher is writing\u2026",null,B.AJ,null,null,null,null,null,null,null,null,null)
D.bdk=new A.ch(B.A,null,null,D.fEg,null)
D.hqP=new A.bE("w",x.W)
D.ff9=new A.a5(null,56,D.bdk,D.hqP)
D.ffX=new A.hG(5,8,8,1,null)
D.fg4=new A.hG(2,12,12,1.05,null)
D.fIL=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fgN=new A.b0(D.fIL,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJ_=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTY=new A.b0(D.fJ_,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fRs=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhg=new A.b0(D.fRs,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h1f=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new A.b0(D.h1f,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fL8=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new A.b0(D.fL8,null,null,null,null,null,null,null,null,null,null,null,null,B.h3,!1,null,null,null,B.t,null)
D.fZw=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aU1=new A.b0(D.fZw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fL6=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fhS=new A.b0(D.fL6,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFN=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new A.b0(D.fFN,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fOU=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fi_=new A.b0(D.fOU,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h2_=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fiF=new A.b0(D.h2_,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fXM=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.b0(D.fXM,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h1j=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fj7=new A.b0(D.h1j,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fT8=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fj9=new A.b0(D.fT8,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fN2=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fja=new A.b0(D.fN2,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fN3=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fkb=new A.b0(D.fN3,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fIN=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new A.b0(D.fIN,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fKM=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fkN=new A.b0(D.fKM,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fSz=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new A.b0(D.fSz,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fNT=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new A.b0(D.fNT,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fxO=new A.G(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmG=new A.eo("\u2665",null,null,B.cJ,null,null,null,null,null,null,D.fxO)
D.fv3=new A.G(!0,B.aP,null,null,null,null,28,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmW=new A.eo("Today: how well do you know the family?",null,null,B.cJ,null,null,null,null,null,null,D.fv3)
D.fnc=new A.G(!0,B.q8,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fok=new A.G(!0,D.kM,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foL=new A.G(!0,D.kM,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foP=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foY=new A.G(!0,D.fz,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp8=new A.G(!0,D.fz,null,null,null,null,13,B.I,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fps=new A.t8(!0,B.tq,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpI=new A.G(!0,B.cO,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new A.G(!0,D.kM,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpM=new A.G(!0,B.cO,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpR=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpU=new A.G(!0,B.cO,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqp=new A.G(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqq=new A.G(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqs=new A.G(!0,B.aP,null,null,null,null,15.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqU=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVe=new A.G(!0,B.aT,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVf=new A.G(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frj=new A.G(!0,B.cO,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaT=new A.t8(!0,B.U2,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vr=new A.G(!0,B.cO,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frt=new A.G(!0,B.U,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fry=new A.G(!0,D.fz,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frW=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new A.G(!0,D.fz,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVp=new A.G(!0,D.fz,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftq=new A.G(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftB=new A.G(!0,D.fz,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftD=new A.G(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftJ=new A.G(!0,L.j_,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVt=new A.G(!0,D.fz,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuE=new A.G(!0,D.fz,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuX=new A.G(!0,D.fz,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new A.G(!0,B.U,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvn=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.Iy,null,null,null)
D.aVI=new A.G(!0,D.fz,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvL=new A.G(!0,B.U,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw6=new A.G(!0,B.fh,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwu=new A.G(!0,B.bR,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwy=new A.G(!0,B.bC,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwK=new A.G(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwN=new A.G(!0,D.fz,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwV=new A.G(!0,D.G5,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx3=new A.G(!0,B.b2,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxr=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxy=new A.G(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dn,null,null,null)
D.fxZ=new A.G(!0,B.cO,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy7=new A.G(!0,B.cG,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyk=new A.G(!0,D.lC,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW2=new A.G(!0,D.fz,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KO=new A.G(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW4=new A.G(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dn,null,null,null)
D.fyE=new A.G(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyI=new A.G(!0,G.no,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz5=new A.G(!0,B.b2,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzn=new A.G(!0,D.fz,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzK=new A.G(!0,B.c,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA8=new A.G(!0,D.fz,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAE=new A.G(!0,D.fz,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAJ=new A.G(!0,B.am,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAS=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abl=new A.G(!0,B.am,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abn=new A.G(!0,D.lB,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCz=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new A.G(!0,B.aP,null,null,null,null,27,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCY=new A.G(!0,L.j_,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD5=new A.G(!0,L.j_,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDz=new A.B("Time:",null,B.hk,null,null,null,null,null,null,null,null,null)
D.fDU=new A.B("\ud83c\udfae",null,K.abc,null,null,null,null,null,null,null,null,null)
D.fDV=new A.B("Themes",null,B.pR,null,null,null,null,null,null,null,null,null)
D.fEo=new A.B("\ud83c\udfb2",null,B.xo,null,null,null,null,null,null,null,null,null)
D.fEs=new A.B("Delete this game?",null,B.iC,null,null,null,null,null,null,null,null,null)
D.fEz=new A.B("Add Item",null,B.ch,null,null,null,null,null,null,null,null,null)
D.ftk=new A.G(!0,B.U,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF_=new A.B("Debt receipt",null,D.ftk,null,B.K,null,null,null,null,null,null,null)
D.aWi=new A.G(!0,B.am,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFi=new A.B("Person who owes",null,D.aWi,null,null,null,null,null,null,null,null,null)
D.fGf=new A.B("Notes",null,B.ab0,null,null,null,null,null,null,null,null,null)
D.fGG=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fsc=new A.G(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGJ=new A.B("Share",null,D.fsc,null,null,null,null,null,null,null,null,null)
D.fHH=new A.B("Move your family trees",null,I.abj,null,null,null,null,null,null,null,null,null)
D.fIm=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fJm=new A.B("SAVE",null,D.KO,null,null,null,null,null,null,null,null,null)
D.fJZ=new A.B("The round button is the right answer.",null,Q.xl,null,null,null,null,null,null,null,null,null)
D.fKj=new A.B("Remove this book?",null,B.h_,null,null,null,null,null,null,null,null,null)
D.fz2=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dn,null,null,null)
D.fKR=new A.B("Fireside Stories",null,D.fz2,null,null,null,null,null,null,null,null,null)
D.aWO=new A.B("Download",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fLx=new A.B("What should the AI do?",null,B.dk,null,null,null,null,null,null,null,null,null)
D.frR=new A.G(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLM=new A.B("REPORT CARD",null,D.frR,null,null,null,null,null,null,null,null,null)
D.fMx=new A.B("Calabash Catch",null,B.KR,null,null,null,null,null,null,null,null,null)
D.fMZ=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fNq=new A.B("\ud83c\udfe1",null,B.EH,null,null,null,null,null,null,null,null,null)
D.fO7=new A.B("Ribbon bookmark",null,B.jw,null,null,null,null,null,null,null,null,null)
D.fAD=new A.G(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOD=new A.B("NGMY.ORG",null,D.fAD,null,B.K,null,null,null,null,null,null,null)
D.fPW=new A.B("Scan family tree QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fwO=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQI=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fwO,null,B.K,null,null,null,null,null,null,null)
D.fRW=new A.B("Delete",null,B.Vl,null,null,null,null,null,null,null,null,null)
D.fRX=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fS4=new A.B("Thumbnail",null,B.pR,null,null,null,null,null,null,null,null,null)
D.fSF=new A.B("Save the cover",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fSK=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xq,null,B.K,null,null,null,null,null,null,null)
D.fT9=new A.B("Your photos",null,B.pR,null,null,null,null,null,null,null,null,null)
D.fTp=new A.B("Create Project",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fTN=new A.B("\u2b50 stars",null,B.Vz,null,null,null,null,null,null,null,null,null)
D.fU0=new A.B("Design your cover",null,A0.vy,null,null,null,null,null,null,null,null,null)
D.fU6=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fU9=new A.B("PICTURE",null,M.vD,null,null,null,null,null,null,null,null,null)
D.fUb=new A.B("\ud83c\udfaf",null,D.VO,null,null,null,null,null,null,null,null,null)
D.fUx=new A.B("Paid",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fUz=new A.B("You can undo it right after.",null,Q.xl,null,null,null,null,null,null,null,null,null)
D.fV6=new A.B("Print",null,B.vA,null,null,null,null,null,null,null,null,null)
D.fVv=new A.B("Amount owed",null,D.aWi,null,null,null,null,null,null,null,null,null)
D.fVK=new A.B("Got it",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fWl=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fWo=new A.B("Add to budget",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fWQ=new A.B("Debtor signature",null,B.ab0,null,null,null,null,null,null,null,null,null)
D.fX_=new A.B("Change icon",null,B.ab_,null,null,null,null,null,null,null,null,null)
D.fXN=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tG,null,null,null,null,null,null,null,null,null)
D.fYe=new A.B("Family tree QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fYk=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VN,null,null,null,null,null,null,null,null,null)
D.fYI=new A.B("Download",null,B.vA,null,null,null,null,null,null,null,null,null)
D.fYJ=new A.B("The person who planted this tree has not made a game yet.",null,B.AS,null,null,null,null,null,null,null,null,null)
D.fYN=new A.B("Change",null,B.pR,null,null,null,null,null,null,null,null,null)
D.fZC=new A.B("Clear all",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fZF=new A.B("WHAT SHOULD IT CHANGE?",null,M.vD,null,null,null,null,null,null,null,null,null)
D.h_d=new A.B("COLOUR",null,M.vD,null,null,null,null,null,null,null,null,null)
D.h_r=new A.B("Do it",null,B.cC,null,null,null,null,null,null,null,null,null)
D.h_u=new A.B("Create Tree",null,B.ch,null,null,null,null,null,null,null,null,null)
D.h_E=new A.B("Give me another clue",null,D.KO,null,null,null,null,null,null,null,null,null)
D.h0y=new A.B("Create Family Tree",null,B.fa,null,null,null,null,null,null,null,null,null)
D.h0I=new A.B("THE TEACHER EXPLAINS THESE",null,T.tG,null,null,null,null,null,null,null,null,null)
D.fnb=new A.G(!0,E.kq,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0O=new A.B("Write the first page myself",null,D.fnb,null,null,null,null,null,null,null,null,null)
D.h1m=new A.B("Use this header",null,B.cC,null,null,null,null,null,null,null,null,null)
D.h1t=new A.B("Create Project",null,E.aW_,null,null,null,null,null,null,null,null,null)
D.hs9=new C.acF(1,"header")
D.aco=new C.acF(2,"projects")
D.hsa=new C.acF(3,"cashier")
D.acp=new C.acF(4,"familyTree")
D.hFS=new C.cG9(0,"start")
D.hFT=new C.cGa(0,"start")
D.hsy=new C.ZM(null)
D.htz=new C.a_e(null)
D.dE7=new A.bu(B.i1,[],A.at("bu<m,GF>"))
D.dm3=w([],x.dE)
D.dm4=w([],x.M)
D.hu5=new C.bgF(D.dE7,D.dm3,D.dm4,0,0,null,null)
D.b0b=new C.a04(0,"intro")
D.b0c=new C.a04(1,"countdown")
D.acD=new C.a04(2,"ask")
D.WI=new C.a04(3,"reveal")
D.b0d=new C.a04(4,"end")
D.hwY=new C.tg(F.Ge,D.lC,B.cO,F.lD,5,!1,!1,!1,0,null)
D.hwZ=new C.tg(F.Ge,B.es,B.cO,B.bP,2,!0,!0,!1,2,B.cO)
D.hx_=new C.tg(B.oj,B.cG,B.cO,F.lD,2,!0,!1,!1,2,B.av)
D.hx0=new C.tg(F.Ge,B.dJ,B.cO,F.lD,5,!1,!1,!1,1,null)
D.hx1=new C.tg(F.ZW,D.aiG,B.cO,F.lD,4,!0,!1,!0,0,null)
D.b0g=new C.tg(F.ZW,B.dK,B.cO,F.lD,3,!0,!1,!0,2,null)
D.b0h=new C.tg(F.mU,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b0i=new C.tg(B.oj,B.aF,B.cO,B.bP,2,!0,!0,!1,2,B.dK)
D.b0j=new C.tg(B.oj,G.no,B.ib,F.lD,5,!1,!1,!0,3,null)
D.hx2=new C.tg(B.oj,B.dK,B.cO,F.lD,0,!0,!1,!1,0,B.aF)
D.b0k=new C.tg(F.Ge,B.es,B.cO,B.bP,1,!1,!0,!1,1,null)
D.b0l=new C.tg(F.FO,B.av,B.aF,F.lD,4,!0,!1,!0,2,null)
D.hx3=new C.tg(F.mU,B.av,B.es,F.lD,3,!0,!1,!1,0,null)
D.hx4=new C.tg(B.oj,B.dJ,B.cO,B.bP,1,!1,!0,!1,1,null)
D.hx5=new C.tg(F.FO,D.ahH,B.c,F.lD,5,!1,!1,!0,0,null)
D.hxJ=new C.a0C(null)
D.hG0=new C.ag2(0,"still")
D.X4=new C.ag2(1,"walk")
D.b0M=new C.ag2(2,"pound")
D.b0N=new C.ag2(3,"drum")
D.hBJ=new C.a1T(0,"greet")
D.b0O=new C.a1T(1,"teach")
D.acX=new C.a1T(2,"ask")
D.hBK=new C.a1T(3,"feedback")
D.b0P=new C.a1T(4,"end")
D.X9=new C.a2b(0,"intro")
D.Xa=new C.a2b(1,"asking")
D.B7=new C.a2b(2,"reacting")
D.ad6=new C.a2b(3,"driving")
D.ad7=new C.a2b(4,"arrived")
D.ada=new C.aLt(0,"projects")
D.b1c=new C.aLt(1,"cashier")
D.hDL=new C.aLt(2,"familyTree")})()};
(a=>{a["iNGGECyXYBtp/0bKyV0tnDM1uFI="]=a.current})($__dart_deferred_initializers__);