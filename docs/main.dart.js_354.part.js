((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,P,A0,S,Aa,L,H,E,T,Ab,Q,Ac,U,Ad,Ae,A1,Af,Ag,R,M,A2,Ah,A3,A4,A5,A6,Ai,Aj,A7,Ak,Al,A8,Am,G,An,Ao,Ap,A9,Aq,V,O,Ar,W,As,At,X,Y,F,Au,K,I,Z,C={
bFl(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFl=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vK(null,""),$async$bFl)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nh(b1)
s=A.bZ(b3.length,null,!1,x.h5)
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
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.H(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Y.az(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rb(t,a1,B.hX,"book",E.Gw),$async$bFl)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Rl(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LL(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3t(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFl,v)},
ahT(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahT=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vK(null,""),$async$ahT)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nh(b6)
s=x.S
r=A.cW(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a3g(new A.N(r,new C.fMV(),r.$ti.k("N<ak.E,m>")).aO(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fMU(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.az(b7,null)+"\nAllowed values: style one of "+B.d.aO(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahT)
case 6:l=c5
k=H.Rl(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aps(s,D.dCW,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Y.az(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahT)
case 10:l=c5
k=l==null?null:H.Rl(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.lh(a5,a2.k("lh<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
b1=A.aI(b0.h(a9,"index"))
i=b1==null?null:B.j.M(b1)
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
p=A.cE(new A.b8(h,s),new C.fMW(),s.k("M.E"),p)
p=H.a3g(A.pC(p,3,A.a4(p).k("M.E")).aO(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3t(s,b9),$async$ahT)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aps(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahT,v)},
hDn(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fWp(e,f),d,null,!0,!0,x.g2)},
aps:function aps(d,e,f){this.a=d
this.b=e
this.c=f},
fMV:function fMV(){},
fMU:function fMU(d){this.a=d},
fMW:function fMW(){},
fWp:function fWp(d,e){this.a=d
this.b=e},
bD9(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bD9=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aW(b1,new C.fAg())){u=null
w=1
break}t=B.d.cC(b1,new C.fAh())
s=$.S()
r=new A.pW(new A.pv())
q=A.zn(r,D.aRf)
p=A.J()
p.r=B.c.gp(0)
q.aq(D.aRf,p)
o=A.J()
o.r=B.O.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bB
o.e=B.dO
n=new C.fAm(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.j.E(k-m,1,1e4)
d=B.j.E(j-l,1,1e4)
a0=B.j.E(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aF(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.aa()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.aa()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.aa()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.aa()}}q.af(a3,o)}w=4
return A.b(r.o0().xC(520,160),$async$bD9)
case 4:w=3
return A.b(b3.hs(B.hd),$async$bD9)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dM.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bD9,v)},
fKB(d){return C.ii0(d)},
ii0(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fKB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjg()
n=d.x!=null&&d.zG(null).length===0
if(d.x!=null)t=n?D.Ah:D.Jy
else t=d.gUx()?D.Jy:D.aM8
w=3
return A.b(C.bD9(d.ax),$async$fKB)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ao7(s)
r=A.a5c(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aM8}else{p.c=C.xe(q,!0)
p.b=n?D.Ah:D.Jy}r.a3Y(A.h5R(new C.fKD(p,d,new C.fKE(),t,n,o),null,D.bFH,B.x1))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKB,v)},
fRf(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fRf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fKB(d),$async$fRf)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aB(q,0,40)
u=Ag.Hl(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRf,v)},
fAg:function fAg(){},
fAh:function fAh(){},
fAm:function fAm(d){this.a=d},
fKE:function fKE(){},
fKD:function fKD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKC:function fKC(){},
fWS(d,e){var w=0,v=A.j(x.H)
var $async$fWS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fWW(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fWS)
case 2:return A.h(null,v)}})
return A.i($async$fWS,v)},
bFL(d,e,f,g){return C.ipB(d,e,f,g)},
ipB(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bFL=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fj2)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fWO(g,r,f),d,null,!0,!0,x.H),$async$bFL)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bFL,v)},
fWX(d,e){var w=0,v=A.j(x.H)
var $async$fWX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fX_(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fWX)
case 2:return A.h(null,v)}})
return A.i($async$fWX,v)},
b_r:function b_r(d,e){this.c=d
this.a=e},
c7t:function c7t(){},
bcC:function bcC(d,e){this.b=d
this.a=e},
fWW:function fWW(d,e){this.a=d
this.b=e},
fWT:function fWT(d){this.a=d},
fWU:function fWU(d,e,f){this.a=d
this.b=e
this.c=f},
fWV:function fWV(d,e){this.a=d
this.b=e},
fWO:function fWO(d,e,f){this.a=d
this.b=e
this.c=f},
fWM:function fWM(d){this.a=d},
fWN:function fWN(d,e,f){this.a=d
this.b=e
this.c=f},
fX_:function fX_(d,e){this.a=d
this.b=e},
fWY:function fWY(d){this.a=d},
fWZ:function fWZ(d,e,f){this.a=d
this.b=e
this.c=f},
fEX(d,e){var w=0,v=A.j(x.y),u,t
var $async$fEX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a31(d),$async$fEX)
case 3:t=g
J.nM(t,new C.fEY(e))
u=A.aiy(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fEX,v)},
fEY:function fEY(d){this.a=d},
apE:function apE(d,e,f){this.c=d
this.d=e
this.a=f},
aEm:function aEm(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPn:function dPn(d,e,f){this.a=d
this.b=e
this.c=f},
dPm:function dPm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPi:function dPi(){},
dPj:function dPj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPh:function dPh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dP2:function dP2(d){this.a=d},
dP3:function dP3(d,e,f){this.a=d
this.b=e
this.c=f},
dP4:function dP4(d,e){this.a=d
this.b=e},
dP1:function dP1(d){this.a=d},
dP9:function dP9(d,e){this.a=d
this.b=e},
dP0:function dP0(d){this.a=d},
dPa:function dPa(d,e,f){this.a=d
this.b=e
this.c=f},
dPb:function dPb(d,e,f){this.a=d
this.b=e
this.c=f},
dP_:function dP_(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e,f){this.a=d
this.b=e
this.c=f},
dOZ:function dOZ(d,e){this.a=d
this.b=e},
dPd:function dPd(d,e){this.a=d
this.b=e},
dOY:function dOY(d){this.a=d},
dPe:function dPe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOW:function dOW(){},
dOQ:function dOQ(d){this.a=d},
dOR:function dOR(d){this.a=d},
dOX:function dOX(d,e){this.a=d
this.b=e},
dPf:function dPf(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dPg:function dPg(d){this.a=d},
dOU:function dOU(){},
dP5:function dP5(d,e){this.a=d
this.b=e},
dOT:function dOT(d){this.a=d},
dP6:function dP6(d,e,f){this.a=d
this.b=e
this.c=f},
dOS:function dOS(d,e){this.a=d
this.b=e},
dOP:function dOP(d,e){this.a=d
this.b=e},
dP7:function dP7(d){this.a=d},
dP8:function dP8(d,e,f){this.a=d
this.b=e
this.c=f},
dPC:function dPC(){},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPA:function dPA(d){this.a=d},
dPB:function dPB(d){this.a=d},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPx:function dPx(d){this.a=d},
dPp:function dPp(d,e,f){this.a=d
this.b=e
this.c=f},
dPq:function dPq(d,e,f){this.a=d
this.b=e
this.c=f},
dPr:function dPr(d,e,f){this.a=d
this.b=e
this.c=f},
dPs:function dPs(d,e,f){this.a=d
this.b=e
this.c=f},
dPt:function dPt(d,e,f){this.a=d
this.b=e
this.c=f},
dPu:function dPu(d,e,f){this.a=d
this.b=e
this.c=f},
dPv:function dPv(d,e,f){this.a=d
this.b=e
this.c=f},
dPE:function dPE(){},
dPF:function dPF(){},
dPG:function dPG(){},
dPH:function dPH(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
hzf(d){return B.d.dP(D.a4r,new C.fFI(d),new C.fFJ())},
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
fFI:function fFI(d){this.a=d},
fFJ:function fFJ(){},
alI:function alI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWb:function aWb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TP:function TP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bge:function bge(){this.d=$
this.c=this.a=null},
dfk:function dfk(d,e){this.a=d
this.b=e},
dfi:function dfi(d,e){this.a=d
this.b=e},
dfj:function dfj(){},
dfl:function dfl(d,e){this.a=d
this.b=e},
hjJ(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nr(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lx(d,e){return C.igD(d,e)},
igD(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lx)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Y.aQ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cE(o,new C.fIc(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fId(),n),n.k("M.E"))
B.d.aZ(o,new C.fIe())
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
return A.i($async$Lx,v)},
Bq(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bq)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b7(f,new C.fVv(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aA("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.az(r,null)),$async$Bq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bq,v)},
aSd(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSd=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lx(d,e),$async$aSd)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h2Q(f))
if(s===-1)t.c4(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bq(d,e,u),$async$aSd)
case 3:return A.h(null,v)}})
return A.i($async$aSd,v)},
bDC(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDC=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lx(d,e),$async$bDC)
case 2:u=h
J.nM(u,new C.fEP(f))
w=3
return A.b(C.Bq(d,e,u),$async$bDC)
case 3:return A.h(null,v)}})
return A.i($async$bDC,v)},
bDR(d,e){return C.igC(d,e)},
igC(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bDR=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bDR)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Or
w=1
break}p=B.Y.aQ(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aI(o.h(0,"emblem"))
k=k==null?null:B.j.M(k)
if(k==null)k=0
if(D.DE.ao(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.E(i==null?25:i,18,36)
h=B.d.q(D.a68,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5t,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5p,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d52,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Ij(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Or
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Or
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bDR,v)},
Ss(d,e,f){return C.ip8(d,e,f)},
ip8(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Ss=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Ss)
case 7:r=h
w=8
return A.b(r.aA("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.az(f.ak(),null)),$async$Ss)
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
return A.i($async$Ss,v)},
RW(d,e){return C.igE(d,e)},
igE(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$RW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$RW)
case 7:r=g
q=r.tQ("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lx(d,e),$async$RW)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lG(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aA("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$RW)
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
return A.i($async$RW,v)},
ahb(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RW(d,e),$async$ahb)
case 3:s=g
r=J.a7(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.az(),$async$ahb)
case 5:w=4
return A.b(g.aA("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahb)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahb,v)},
a3F(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3F=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.RW(d,e),$async$a3F)
case 2:s=h
J.hk(s,f)
w=3
return A.b(A.az(),$async$a3F)
case 3:u=h
w=4
return A.b(u.aA("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3F)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3F)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3F)
case 6:return A.h(null,v)}})
return A.i($async$a3F,v)},
nr:function nr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIc:function fIc(){},
fId:function fId(){},
fIe:function fIe(){},
fVv:function fVv(){},
h2Q:function h2Q(d){this.a=d},
fEP:function fEP(d){this.a=d},
Ij:function Ij(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bQW:function bQW(d){this.a=d},
ipq(d,e,f,g,h,i,j){return A.a6(d,!1).cd(A.eb(new C.fW3(j,i,f,e,h,g),!0,null,x.H))},
RR(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RR=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RW(h,g),$async$RR)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aTw)
u=!1
w=1
break}w=4
return A.b(C.hDn(d,f,e),$async$RR)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahb(h,g),$async$RR)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nr(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bq(h,r,p),$async$RR)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Ss(h,r,new C.Ij("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RR)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RR,v)},
fW3:function fW3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_n:function a_n(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBl:function aBl(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dg_:function dg_(d){this.a=d},
dfZ:function dfZ(d,e){this.a=d
this.b=e},
dfO:function dfO(d,e){this.a=d
this.b=e},
dfL:function dfL(d,e){this.a=d
this.b=e},
dfm:function dfm(d){this.a=d},
dfn:function dfn(d,e){this.a=d
this.b=e},
dfP:function dfP(d){this.a=d},
dfv:function dfv(d){this.a=d},
dft:function dft(d){this.a=d},
dfu:function dfu(d){this.a=d},
dfw:function dfw(d){this.a=d},
dfM:function dfM(d){this.a=d},
dfN:function dfN(){},
dfr:function dfr(d){this.a=d},
dfs:function dfs(d,e){this.a=d
this.b=e},
dfx:function dfx(d){this.a=d},
dfy:function dfy(d,e){this.a=d
this.b=e},
dfY:function dfY(d){this.a=d},
dfX:function dfX(d,e){this.a=d
this.b=e},
dfW:function dfW(d){this.a=d},
dfI:function dfI(d){this.a=d},
dfH:function dfH(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfK:function dfK(d,e){this.a=d
this.b=e},
dfB:function dfB(d){this.a=d},
dfC:function dfC(d){this.a=d},
dfA:function dfA(){},
dfD:function dfD(d){this.a=d},
dfE:function dfE(d){this.a=d},
dfF:function dfF(d,e){this.a=d
this.b=e},
dfG:function dfG(d,e,f){this.a=d
this.b=e
this.c=f},
dfz:function dfz(d,e){this.a=d
this.b=e},
dfR:function dfR(d){this.a=d},
dfQ:function dfQ(){},
dfS:function dfS(d){this.a=d},
dfT:function dfT(d){this.a=d},
dfU:function dfU(d){this.a=d},
dfV:function dfV(d,e){this.a=d
this.b=e},
dfp:function dfp(d){this.a=d},
dfq:function dfq(d){this.a=d},
a_r:function a_r(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgD:function bgD(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dhM:function dhM(d){this.a=d},
dhN:function dhN(d){this.a=d},
dhL:function dhL(d){this.a=d},
dhO:function dhO(d){this.a=d},
dhK:function dhK(d){this.a=d},
dhP:function dhP(d){this.a=d},
dhJ:function dhJ(d){this.a=d},
dhQ:function dhQ(d,e){this.a=d
this.b=e},
dhI:function dhI(d,e){this.a=d
this.b=e},
dhR:function dhR(d,e){this.a=d
this.b=e},
a_p:function a_p(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afA:function afA(d,e,f){this.a=d
this.b=e
this.c=f},
aBo:function aBo(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dge:function dge(d,e){this.a=d
this.b=e},
dgd:function dgd(d,e){this.a=d
this.b=e},
dgi:function dgi(d){this.a=d},
dgh:function dgh(d,e){this.a=d
this.b=e},
dgf:function dgf(d){this.a=d},
dgg:function dgg(d){this.a=d},
dgj:function dgj(d){this.a=d},
dgk:function dgk(d){this.a=d},
dgc:function dgc(d,e){this.a=d
this.b=e},
dgb:function dgb(d,e){this.a=d
this.b=e},
KF:function KF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZF:function ZF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cOD:function cOD(d){this.a=d},
cOE:function cOE(){},
cOF:function cOF(d){this.a=d},
bdQ:function bdQ(d,e,f){this.b=d
this.c=e
this.a=f},
bdH:function bdH(d,e){this.b=d
this.a=e},
uJ:function uJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZY:function ZY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdO:function bdO(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d7b:function d7b(d,e,f){this.a=d
this.b=e
this.c=f},
d7a:function d7a(d,e){this.a=d
this.b=e},
d7A:function d7A(d){this.a=d},
d7n:function d7n(){},
d7B:function d7B(d){this.a=d},
d7m:function d7m(){},
d7C:function d7C(d,e){this.a=d
this.b=e},
d7l:function d7l(d,e){this.a=d
this.b=e},
d7D:function d7D(d,e){this.a=d
this.b=e},
d7k:function d7k(d,e){this.a=d
this.b=e},
d7E:function d7E(d){this.a=d},
d7j:function d7j(){},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7i:function d7i(d,e){this.a=d
this.b=e},
d7G:function d7G(d){this.a=d},
d7v:function d7v(d,e){this.a=d
this.b=e},
d7H:function d7H(d){this.a=d},
d7I:function d7I(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7u:function d7u(d,e){this.a=d
this.b=e},
d7M:function d7M(d,e){this.a=d
this.b=e},
aIm:function aIm(d){this.a=d},
bja:function bja(d){this.a=d},
bbZ:function bbZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alJ:function alJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1E:function a1E(d,e){this.a=d
this.b=e},
alK:function alK(d,e,f,g,h,i){var _=this
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
bR5:function bR5(d){this.a=d},
bR_:function bR_(d){this.a=d},
bQZ:function bQZ(d,e){this.a=d
this.b=e},
bR8:function bR8(d){this.a=d},
bR0:function bR0(d){this.a=d},
bR1:function bR1(d){this.a=d},
bR4:function bR4(d){this.a=d},
bR3:function bR3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR6:function bR6(d,e){this.a=d
this.b=e},
bR7:function bR7(){},
bR2:function bR2(d){this.a=d},
bQX:function bQX(d,e){this.a=d
this.b=e},
bQY:function bQY(d){this.a=d},
boJ:function boJ(d,e){this.b=d
this.a=e},
aBm:function aBm(){},
iw(d,e){var w
$.S()
w=A.J()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bB
w.e=B.dO
return w},
bDb(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.og(0,a0?-f:f,f)
w=A.bB(B.ih,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.J()
t.r=v.gp(0)
d.bY(w,t)
w=a1===D.WU
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eos,new A.p(-4+v,-2),C.iw(q,5))
d.ah(D.em2,new A.p(4-v,-2),C.iw(q,5))}else{t=A.bB(B.Jo,14,40)
p=A.J()
p.r=v.gp(0)
d.bY(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ai,k,k,A.a([],u))
t=-64-r
o.D(new A.aZ(-11,t))
o.D(new A.c8(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c8(15,-40,11,t))
o.D(new A.bv())
t=A.J()
t.r=w.gp(0)
d.af(o,t)
u=new A.aF(v,B.ai,k,k,A.a([],u))
u.D(new A.aZ(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bv())
v=A.J()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b0g){n=-52+w*14
d.ah(new A.p(10,n-22),new A.p(10,n+44),C.iw(F.FJ,3.4))
d.ah(D.eoK,new A.p(9,n),C.iw(q,4))
d.ah(D.emr,new A.p(10,n),C.iw(q,4))}else if(a1===D.b0h){d.ah(D.enx,new A.p(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.ekv,new A.p(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.enC,new A.p(-12-w,v),C.iw(q,4))
d.ah(D.aLa,new A.p(12+w,v),C.iw(q,4))}w=A.J()
w.r=q.gp(0)
d.aq(D.f5Y,w)
m=new A.p(0,-77-r)
w=A.bB(m,22,19)
v=A.J()
v.r=q.gp(0)
d.bY(w,v)
w=h.y
if(w!=null){v=A.bB(m.a5(0,I.vk),15,24)
u=A.J()
u.r=w.gp(0)
d.bY(v,u)
u=m.a5(0,D.ekp)
v=A.J()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bB(m.a5(0,B.th),23,20)
v=h.d
u=A.J()
u.r=v.gp(0)
d.cM(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.eoI),m.a5(0,D.env),C.iw(v,2.2))
d.ah(m.a5(0,D.emq),m.a5(0,D.ekm),C.iw(v,2.2))}if(w===4){w=m.a5(0,D.eoM)
u=A.J()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a5(0,D.ems)
w=A.J()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a5(0,D.eni)
v=A.J()
v.r=B.i7.gp(0)
d.N(w,0.9,v)
v=m.a5(0,D.en6)
w=A.J()
w.r=B.i7.gp(0)
d.N(v,0.9,w)
if(i){l=m.a5(0,I.a84)
w=A.bB(l,21,22)
v=A.J()
v.r=D.lB.gp(0)
d.bY(w,v)
v=A.bB(l.a5(0,I.aL7),5,12)
w=A.J()
w.r=D.bfn.gp(0)
d.bY(v,w)
d.ah(l.a5(0,D.eoE),l.a5(0,I.aLu),C.iw(B.cN,1.4))
d.ah(D.aLa,new A.p(15,-88-r),C.iw(q,3.6))}j.restore()},
hxT(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bU(0,f)
v=A.bB(B.dG,18,96)
u=B.w.j(0.28)
$.S()
t=A.J()
t.r=u.gp(0)
d.bY(v,t)
t=A.bB(B.dG,11,70)
v=B.w.j(0.2)
u=A.J()
u.r=v.gp(0)
d.bY(t,u)
d.lx(D.aRj,A.J())
C.i5b(d,g,h,i,j)
s=(k==null?D.a8a:k).a-w>=0?1:-1
w=A.J()
w.a=B.LD
w.sav(A.jw(new A.p(s*70,-60),new A.p(-s*70,-60),A.a([D.ahW.j(0.5),D.ahW.j(0.12),D.bmE.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aq(D.aRj,w)
r.restore()
r.restore()},
i5b(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.bn(D.f5Z,B.tl)
p=$.S()
o=A.J()
o.r=u.gp(0)
a1.am(s,o)
o=A.bn(D.f5U,B.hO)
s=A.ar(v,B.w,0.18)
s.toString
n=A.J()
n.r=s.gp(0)
a1.am(o,n)
n=A.bn(D.f67,B.hO)
o=A.ar(v,B.w,0.1)
o.toString
s=A.J()
s.r=o.gp(0)
a1.am(n,s)
s=A.J()
s.r=d.gp(0)
a1.bY(D.f60,s)
s=A.J()
s.r=d.gp(0)
a1.bY(D.f4K,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.og(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aF(p.r,B.ai,e,e,A.a([],n))
p=-m
k=p+2
l.D(new A.aZ(k,-58))
l.D(new A.c8(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c8(m+3,-62,m-2,-58))
l.D(new A.c8(0,-70,k,-58))
l.D(new A.bv())
k=A.J()
k.r=v.gp(0)
a1.af(l,k)
J.br(s.save())
a1.mQ(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dbJ[j]
i=new A.ap(B.S,B.N,B.U,B.V,B.T)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bB
i.e=B.dO
a1.ah(new A.p(-34+u,-64),new A.p(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ap(B.S,B.N,B.U,B.V,B.T)
f.r=i.gp(0)
a1.N(new A.p(g,h),3.6,f)
f=new A.ap(B.S,B.N,B.U,B.V,B.T)
f.r=u.gp(0)
a1.N(new A.p(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ap(B.S,B.N,B.U,B.V,B.T)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bB
i.e=B.dO
a1.ah(new A.p(g,-64),new A.p(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ap(B.S,B.N,B.U,B.V,B.T)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bB
i.e=B.dO
a1.ah(new A.p(-30,h),new A.p(30,h),i)}break
default:a1.ah(D.eo7,D.ela,C.iw(a2.c.j(0.9),3))}a1.ah(D.eoF,D.enE,C.iw(B.w.j(0.18),1.6))
a1.ah(D.eku,I.aLc,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.J()
i.r=u.gp(0)
a1.aq(D.f4G,i)
s.restore()
i=A.J()
i.r=a0.gp(0)
a1.aq(D.f4U,i)
n=new A.aF(k.r,B.ai,e,e,A.a([],n))
n.D(new A.aZ(-9,-66))
n.D(new A.c8(0,-57,9,-66))
n.D(new A.c8(0,-60,-9,-66))
k=A.J()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cM(D.f52,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8e
n=25*q
k=23*q
i=9*q
C.hu9(a1,new A.p(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.E4:o
C.hu9(a1,new A.p(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.elV,D.elR,C.iw(D.aiU,4))
a1.ah(D.elT,D.elP,C.iw(D.G7.j(0.7),1.4))
u=A.J()
u.r=B.cN.gp(0)
a1.N(D.elS,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i58(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hu9(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aK(0,e),r=s.gcH(),q=r===0?B.ih:s.eW(0,r),p=B.j.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.p(o,w)
if(o*i<0)v=new A.p(-o,-w)
u=e.a5(0,q.aN(0,n)).a5(0,v.aN(0,m))
t=e.a5(0,q.aN(0,p))
d.ah(e,u,C.iw(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.ah(e,u,C.iw(o,l*0.35))
d.ah(u,t,C.iw(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.ah(u,t,C.iw(o,l*0.22))
$.S()
o=A.J()
o.r=j.gp(0)
d.N(u,l*0.55,o)
o=A.bB(t,l*1.15,l)
w=A.J()
w.r=k.gp(0)
d.bY(o,w)
w=-l
w=t.a5(0,new A.p(i*w*0.45,w*0.1))
o=A.J()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i58(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bB(B.vj,40,38)
$.S()
v=A.J()
v.r=c0.gp(0)
c2.bY(w,v)}if(c1===4){$.S()
w=A.J()
w.r=c0.gp(0)
c2.N(D.enO,9.5,w)
w=A.J()
w.r=c0.gp(0)
c2.N(D.ekL,9.5,w)}w=A.bB(D.ep1,10,6)
v=$.S()
u=A.J()
u.r=c8.gp(0)
c2.bY(w,u)
u=A.bB(D.enf,10,6)
w=A.J()
w.r=c8.gp(0)
c2.bY(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ai,b9,b9,A.a([],w))
t.D(new A.aZ(0,-20))
t.D(new A.kP(13,-20,17,-9,16,2))
t.D(new A.kP(15,13,8,20,0,20))
t.D(new A.kP(-8,20,-15,13,-16,2))
t.D(new A.kP(-17,-9,-13,-20,0,-20))
t.D(new A.bv())
u=A.J()
u.sav(A.w4(D.eou,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cM(D.f69,3.455751918948773,2.5132741228718345,!1,s)
c2.cM(D.f4N,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.enL,D.enz,s)
c2.ah(D.ekH,D.eky,s)
c2.cM(D.f51,2.2,1.4,!1,s)
c2.cM(D.f4L,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ap(B.S,B.N,B.U,B.V,B.T)
n.r=c0.gp(0)
c2.N(new A.p(p*14.5,-3+o*17.5),4.3,n)}p=A.J()
p.r=c0.gp(0)
c2.cM(D.f5f,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.D(new A.aZ(-15,-11))
p.D(new A.c8(0,-30,15,-11))
p.D(new A.aq(13,-6))
p.D(new A.c8(0,-12,-13,-6))
p.D(new A.bv())
o=A.J()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.enA,D.ekz,C.iw(G.nj,1.4))
o=A.J()
o.r=c0.gp(0)
c2.N(D.enR,3,o)
o=A.J()
o.r=c0.gp(0)
c2.N(D.ekM,3,o)
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.D(new A.aZ(-13,6))
o.D(new A.c8(-12,22,0,26))
o.D(new A.c8(12,22,13,6))
o.D(new A.c8(8,13,0,12))
o.D(new A.c8(-8,13,-13,6))
o.D(new A.bv())
p=A.J()
p.r=B.iB.gp(0)
c2.af(o,p)
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.D(new A.aZ(-7,8))
p.D(new A.c8(0,6,7,8))
p.D(new A.c8(0,10.5,-7,8))
o=A.J()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.D(new A.aZ(-17,-4))
p.D(new A.c8(-20,-27,0,-29))
p.D(new A.c8(20,-27,17,-4))
p.D(new A.c8(0,-14,-17,-4))
p.D(new A.bv())
o=A.J()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cM(D.f5m,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cM(D.f59,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.D(new A.aZ(11,-22))
o.D(new A.c8(27,-34,25,-19))
o.D(new A.c8(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.J()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aF(v,B.ai,b9,b9,A.a([],w))
n.D(new A.aZ(11,-22))
n.D(new A.c8(24,-12,27,-26))
n.D(new A.c8(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.J()
p.r=o.gp(0)
c2.af(n,p)
p=A.J()
p.r=c3.c.gp(0)
c2.N(D.ekA,3,p)
break
case 3:p=A.J()
p.r=c0.gp(0)
c2.cM(D.f5j,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ap(B.S,B.N,B.U,B.V,B.T)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bB
o.e=B.dO
c2.ah(new A.p(r*3.6,-19+Math.abs(r)*0.8),new A.p(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=D.dpN[l]
o=new A.ap(B.S,B.N,B.U,B.V,B.T)
o.b=B.aa
o.c=4.5
o.r=c0.gp(0)
o.d=B.bB
o.e=B.dO
c2.ah(new A.p(k,0),new A.p(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ap(B.S,B.N,B.U,B.V,B.T)
o.r=p.gp(0)
c2.N(new A.p(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.J()
p.r=c0.gp(0)
c2.cM(D.f5i,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(I.a84,I.a83,C.iw(p,1))
break
default:p=A.J()
p.r=c0.gp(0)
c2.cM(D.f4O,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.E(c4.b,0,1)*0.4+0.1
p=A.bB(D.eoO,5,8)
o=D.afg.j(i)
n=A.J()
n.r=o.gp(0)
c2.bY(p,n)
n=A.bB(D.enr,5,8)
p=D.afg.j(i)
o=A.J()
o.r=p.gp(0)
c2.bY(n,o)
h=c4.e*2.4
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.D(new A.aZ(h-0.6,-2))
o.D(new A.c8(h-3.4,6,h-2.6,7.4))
o.D(new A.c8(h,8.8,h+2.6,7.4))
c2.af(o,C.iw(c8.j(0.75),1.1))
o=A.J()
o.r=c8.gp(0)
c2.N(new A.p(h-1.5,7.2),0.7,o)
o=A.J()
o.r=c8.gp(0)
c2.N(new A.p(h+1.5,7.2),0.7,o)
g=B.j.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hL[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bB(new A.p(a5,-3),a3,7)
a6=new A.ap(B.S,B.N,B.U,B.V,B.T)
a6.r=B.c.j(0.96).gp(0)
c2.bY(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aF(v,B.ai,b9,b9,a6)
a6.push(new A.jN(A.bB(new A.p(a5,-3),a3,7)))
a4.aa()
a3=a4.e
if(a3==null)a3=a4.e=new A.E0(a4.glV().a.snapshot())
d.clipPath(a3.a,$.nL(),!0)
a3=new A.ap(B.S,B.N,B.U,B.V,B.T)
a3.r=D.bj7.gp(0)
c2.N(new A.p(a7,a8),2.1,a3)
a3=new A.ap(B.S,B.N,B.U,B.V,B.T)
a3.r=B.w.gp(0)
c2.N(new A.p(a7,a8),1.05,a3)
a3=new A.ap(B.S,B.N,B.U,B.V,B.T)
a3.r=B.c.gp(0)
c2.N(new A.p(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.YT:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ap(B.S,B.N,B.U,B.V,B.T)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bB
a9.e=B.dO
a3=p?0.8:0
c2.cM(A.bB(new A.p(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.e6
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ap(B.S,B.N,B.U,B.V,B.T)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bB
b2.e=B.dO
c2.ah(new A.p(a5-a4,b0-a6+0.4),new A.p(a5+a4,b0-0.6-a3),b2)}b3=B.j.E(c4.a,0,1)
if(o)b4=D.bt2
else{u=A.ar(c8,D.bmG,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.E(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aF(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.D(new A.aZ(w,11.5))
b8.D(new A.c8(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.D(new A.c8(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.D(new A.bv())
v=A.J()
v.r=D.bm_.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mQ(0,b8)
v=B.c.j(0.95)
u=A.J()
u.r=v.gp(0)
c2.aq(new A.a3(w,11,w+b6*2,13.2),u)
u=A.bB(new A.p(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.J()
w.r=D.bt7.gp(0)
c2.bY(u,w)
d.restore()
c2.af(b8,C.iw(b4,1.1))}else{u=new A.aF(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.D(new A.aZ(-5.2,p))
u.D(new A.c8(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iw(b4,1.5))
if(b5>0.6){w=new A.aF(v,B.ai,b9,b9,A.a([],w))
w.D(new A.aZ(-4.6,11.8))
w.D(new A.c8(0,15.1+b5*1.4,4.6,11.8))
w.D(new A.c8(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.J()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cM(D.f50,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cM(D.f4Q,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.J()
w.r=c1.gp(0)
c2.N(D.en8,1.7,w)
w=A.J()
w.r=c1.gp(0)
c2.N(D.en4,1.7,w)}},
iaD(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.pW(new A.pv()),e=A.zn(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.J()
a2.sav(A.jw(B.H,new A.p(0,a0*0.46),D.d8x,D.d06,B.x,h))
e.aq(new A.a3(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e4()
w.d_(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ap(B.S,B.N,B.U,B.V,B.T)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.p(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.J()
a0=x.O
d.sav(A.w4(B.H,230,A.a([D.bhT,B.L],a0),h,B.x,h,h,0))
e.bY(D.f5w,d)
a2.restore()
d=A.J()
d.sav(A.w4(D.a8d,58,A.a([D.bl2,B.L],a0),h,B.x,h,h,0))
e.N(D.a8d,58,d)
d=A.J()
d.r=D.bgB.gp(0)
e.N(D.a8d,24,d)
d=A.J()
d.r=D.Zh.gp(0)
e.N(D.elu,5,d)
d=A.J()
d.r=D.Zh.gp(0)
e.N(D.ely,3.4,d)
d=A.J()
d.r=D.Zh.gp(0)
e.N(D.elx,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aF(g.r,B.ai,h,h,u)
u.push(new A.aZ(-60,420))
r.aa()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.aj(m)
r.aa()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.aa()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.aa()
g=new A.bv()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.aa()
g=[D.bfa,D.bha,D.bn_][s]
u=$.S()
t=new A.ap(B.S,B.N,B.U,B.V,B.T)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cv5[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ap(B.S,B.N,B.U,B.V,B.T)
u.b=B.aa
u.c=2.4
u.r=D.ZA.gp(0)
u.d=B.bB
u.e=B.dO
e.ah(new A.p(o,k),new A.p(g,d),u)
g=A.bB(new A.p(g,k-27),11,46)
u=new A.ap(B.S,B.N,B.U,B.V,B.T)
u.r=D.ZA.gp(0)
e.bY(g,u)
d=A.bB(new A.p(o-12,d),8,24)
u=new A.ap(B.S,B.N,B.U,B.V,B.T)
u.r=D.ZA.gp(0)
e.bY(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ap(B.S,B.N,B.U,B.V,B.T)
u.r=D.bgE.j(0.8).gp(0)
e.N(new A.p(20+v*52+g*7,400+d*5),1.2,u)}g=A.J()
g.sav(A.jw(D.ek3,D.ek5,D.d22,B.Dp,B.x,h))
e.aq(new A.a3(-200,412,650,1300),g)
j=new A.e4()
j.d_(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bB(new A.p(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h2()?B.c:B.w
d=new A.ap(B.S,B.N,B.U,B.V,B.T)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bY(u,d)}J.br(a2.save())
a2.translate(225,590)
e.og(0,1,0.34)
g=A.J()
g.sav(A.w4(B.H,250,A.a([D.bnU,D.bhv,D.bpP],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.H,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ahE,D.bg8,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ap(B.S,B.N,B.U,B.V,B.T)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bB
a0.e=B.dO
e.ah(new A.p(o+i*2,k),new A.p(o+i*5,g+Math.abs(i)*3),a0)}}C.i3n(e)
for(l=0;l<3;++l)C.i6D(e,D.azO[l])
C.i6s(e,D.elo)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ap(B.S,B.N,B.U,B.V,B.T)
a0.b=B.aa
a0.c=2.4
a0.r=D.Zw.gp(0)
a0.d=B.bB
a0.e=B.dO
e.ah(new A.p(o,452+g),new A.p(o+1,436+d),a0)}e.ah(D.ekw,D.ekQ,C.iw(D.bgS,1.6))
a2.restore()
return f.o0()},
i3n(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aF(h,B.ai,i,i,A.a([],g))
f.D(new A.aZ(358,462))
f.D(new A.kP(354,422,370,382,374,332))
f.D(new A.aq(410,332))
f.D(new A.kP(416,382,432,422,428,462))
f.D(new A.bv())
w=A.J()
w.sav(A.jw(new A.p(354,0),new A.p(430,0),D.dvT,U.zJ,B.x,i))
d.af(f,w)
v=new A.e4()
v.d_(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.b=B.aa
p.c=1.1
p.r=q.gp(0)
p.d=B.bB
p.e=B.dO
d.ah(new A.p(t,s),new A.p(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dd5[o]
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
k.aa()
r=new A.c8(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.aa()
r=new A.ap(B.S,B.N,B.U,B.V,B.T)
r.b=B.aa
r.c=8
r.r=D.afZ.gp(0)
r.d=B.bB
r.e=B.dO
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ap(B.S,B.N,B.U,B.V,B.T)
l.r=A.ar(D.bgK,D.bmZ,v.ai()).j(0.92).gp(0)
d.N(new A.p(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ap(B.S,B.N,B.U,B.V,B.T)
r.b=B.aa
r.c=1.2
r.r=D.Zw.gp(0)
r.d=B.bB
r.e=B.dO
d.ah(new A.p(w,q+8),new A.p(w,q+22),r)
q=A.bB(new A.p(w,q+28),13,7)
w=new A.ap(B.S,B.N,B.U,B.V,B.T)
w.r=D.boc.gp(0)
d.bY(q,w)}},
i6D(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bB(new A.p(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.J()
b3.r=b1.gp(0)
b4.bY(b0,b3)
b2=b2.r
b3=x.v
w=new A.aF(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.D(new A.aZ(b0,b1))
w.D(new A.aq(b0,a6))
v=a5+a7
w.D(new A.c8(a5,a6+a7*0.22,v,a6))
w.D(new A.aq(v,b1))
w.D(new A.bv())
u=A.J()
u.sav(A.jw(new A.p(b0,0),new A.p(v,0),D.ddb,U.zJ,B.x,a4))
b4.af(w,u)
t=new A.e4()
t.d_(B.o.V(a5*7))
v=b4.c
J.br(v.save())
b4.mQ(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ap(B.S,B.N,B.U,B.V,B.T)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bB
n.e=B.dO
b4.ah(new A.p(r,q),new A.p(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahz.j(0.75)
n=A.J()
n.r=o.gp(0)
b4.aq(new A.a3(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.j.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aF(b2,B.ai,a4,a4,j)
j.push(new A.aZ(k,o))
i.aa()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.aa()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.aa()
h=new A.bv()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.aa()
j=new A.ap(B.S,B.N,B.U,B.V,B.T)
j.r=D.lB.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aF(b2,B.ai,a4,a4,u)
b2=a6-8
f.D(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.j.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.aa()}b4.af(f,C.iw(D.ahz.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.D(new A.aZ(n,m))
j=a6-a8*0.55
b2.D(new A.aq(n,j))
o=p+o
b2.D(new A.c8(p,a6-a8*0.82,o,j))
b2.D(new A.aq(o,m))
b2.D(new A.bv())
m=A.J()
m.r=D.ahL.gp(0)
b4.af(b2,m)
m=A.J()
m.r=D.ahL.gp(0)
b4.N(new A.p(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
e.D(new A.aZ(o,j))
n=b1-m*0.55
e.D(new A.c8(a5-a9,n,a5,u))
e.D(new A.c8(a5+a9,n,p,j))
e.D(new A.c8(a5,b1+a7*0.34,o,j))
e.D(new A.bv())
b1=A.J()
n=a7*1.4
b1.sav(A.jw(new A.p(a5-n,0),new A.p(a5+n,0),D.dgC,U.zJ,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mQ(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h2()?B.w:D.bgh).j(0.16)
i=new A.ap(B.S,B.N,B.U,B.V,B.T)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bB
i.e=B.dO
b4.ah(new A.p(a5+(p-0.5)*3,u),new A.p(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aF(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.aa()
n=new A.c8(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.aa()
b1=B.w.j(0.22)
n=new A.ap(B.S,B.N,B.U,B.V,B.T)
n.b=B.aa
n.c=1.2
n.r=b1.gp(0)
n.d=B.bB
n.e=B.dO
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ap(B.S,B.N,B.U,B.V,B.T)
v.b=B.aa
v.c=1.1
v.r=D.bnn.gp(0)
v.d=B.bB
v.e=B.dO
b4.ah(new A.p(a2,a3),new A.p(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.D(new A.aZ(a5-2.5,b0))
a9.D(new A.aq(a5,u-7))
a9.D(new A.aq(a5+2.5,b0))
a9.D(new A.bv())
b0=A.J()
b0.r=D.bjC.gp(0)
b4.af(a9,b0)},
i6s(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+K.aBY[s]
$.S()
q=new A.ap(B.S,B.N,B.U,B.V,B.T)
q.b=B.aa
q.c=3
q.r=D.Zw.gp(0)
q.d=B.bB
q.e=B.dO
d.ah(new A.p(r,u),new A.p(r,t),q)}u=A.bB(e.a5(0,I.aL6),24,36)
t=$.S()
r=A.J()
r.r=D.bsi.gp(0)
d.bY(u,r)
t=new A.aF(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.D(new A.aZ(r,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c8(w,v-24,r,u))
t.D(new A.bv())
u=A.J()
u.r=D.agF.gp(0)
d.af(t,u)},
i5N(d){switch(B.o.F(d,8)){case 0:return D.b_P
case 1:return D.b_N
case 2:return D.b_M
case 3:return D.b_L
case 4:return D.b_O
case 5:return D.b_Q
case 6:return D.huw
default:return D.huv}},
Sq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.boK()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8e:j
w.as=k==null?D.E4:k
C.hxT(d,e,p,C.i5N(m),w,s,m,l)},
hzl(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bSK:function bSK(){var _=this
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
boK:function boK(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
am1:function am1(){this.b=this.a=null},
aWg:function aWg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bSC:function bSC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSD:function bSD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSE:function bSE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSF:function bSF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSG:function bSG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSH:function bSH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSI:function bSI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSJ:function bSJ(){},
bSB:function bSB(d){this.a=d},
afJ:function afJ(d,e){this.a=d
this.b=e},
adI:function adI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MU(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRl(s)
s.bBh(d)
return s},
GV(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d4(new A.Y(g,new C.fta(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("cg.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lp(e,v,B.d.cq(v,f),h,i,"tree",j)},
ir_(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h2H(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jx(c4,c0)
t=A.C(c4,A.a4(c4).k("cg.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jx(c4,c0)
r=A.C(c4,A.a4(c4).k("cg.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jx(c4,c0)
q=A.C(c4,A.a4(c4).k("cg.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.K)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wn)g="father"
else g=h===D.oq?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h2J(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GV(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h2K(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lp("True or false: "+h+" is the "+g+" of "+l+".",D.aAQ,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lp("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aAQ,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G6(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h2L(l,a0,c5),v),s)
e=a1.c
if(e===D.wn)e="son"
else e=e===D.oq?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.GV(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ez([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.ms(a5,a5.r,f.k("ms<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.GV(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iu<1>"),a3=new A.iu(a0,1,b3,a2),a3.n5(a0,1,b3,e.c),a3=new A.bO(a3,a3.gI(0),a2.k("bO<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.GV(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.are(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h2M(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.GV(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h2N(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wn
if(e)a2=b7
else a2=f===D.oq?b8:b9
if(e)f=b7
else f=f===D.oq?b8:b9
c2.$2("grand",C.GV(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aMN(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h2O(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GV(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cNK)
h=l+" was born in "+k
c2.$2("place",C.GV(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d35)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GV(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.K)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GV(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iV(b1,b3,b3)
c2.$2("year",C.GV(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bDN(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.MU(d),l=new A.e4()
l.d_(f)
w=C.ir_(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hhN(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aW(u,new C.fGj(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.K)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.J(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.ayQ,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.K)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hy_(o,l))}}else if(!g&&v>3){o=C.hy_(D.ayQ[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hy_(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lp(d.a,w,B.d.cq(w,v),d.d,d.e,d.f,d.r)},
hCW(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.MU(a2),a1=new A.e4()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(a0.G6(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.K)(u),++r){n=u[r]
m=a0.G6(n)
l=A.U(m)
k=new A.iu(m,0,5,l.k("iu<1>"))
k.n5(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fUw(),A.U(j).k("N<1,F>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.K)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.K)(j),++i)g.push(C.aRZ(a0,j[i]))
w.push(new C.au2("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
J.c5(e.c3(0,a0.amr(q),new C.fUx()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fi(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bO(u,u.gI(0),t.k("bO<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.K)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.K)(v),++r)s.push(C.aRZ(a0,v[r]))
w.push(new C.au2("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQt(d){return B.d.anS(D.aBk,new C.fCj(d))},
ih9(d){return A.nv(new A.Y(D.aBk,new C.fJ6(d),x.av))},
bS9(d){return C.hMA(d)},
hMA(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bS9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bS9)
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
return A.i($async$bS9,v)},
BM(d,e){return C.hMx(d,e)},
hMx(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BM)
case 7:r=g
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aA("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BM)
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
return A.i($async$BM,v)},
bS8(d,e,f){return C.hMy(d,e,f)},
hMy(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bS8=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bS8)
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
return A.i($async$bS8,v)},
BN(d,e,f,g){return C.hMz(d,e,f,g)},
hMz(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BN=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BN)
case 7:r=i
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aA("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BN)
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
return A.i($async$BN,v)},
bG0(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h4K(d,e,f,g){return new C.akD(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hKE(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aU(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cp)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dq(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.j.M(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.j.M(u)
return C.h4K(w,v,B.o.E(u==null?20:u,5,60),t)},
hiX(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aU(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cp)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hKE(A.a2(r,t,s)))}return new C.MD(p,w,v)},
hd9(d){var w,v=A.a([],x.c)
for(w=J.aU(d.z);w.C();)v.push(C.hiX(w.gR(w)))
return v},
aRZ(d,e){var w=e.c===D.oq
if(d.amr(e)===0&&d.G6(e).length!==0)return w?0:1
if(d.G6(e).length!==0||d.are(e)!=null)return w?2:3
return w?4:5},
hE1(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.MU(a4),a3=new A.e4()
a3.d_(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.K)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.K)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.G6(m)
g=a2.are(m)
f=a2.aMN(m)
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
if(k===D.wn)k="father"
else k=k===D.oq?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wn)k="father"
else k=k===D.oq?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h36())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h37(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n5(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aRZ(a2,m)
i=new A.iu(l,0,4,p)
i.n5(l,0,4,r)
w.push(new C.bad(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hvC(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hD7(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.MU(a4),a3=new A.e4()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(a2.G6(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.K)(u),++r){l=u[r]
k=a2.G6(l)
j=A.U(k)
i=new A.iu(k,0,4,j.k("iu<1>"))
i.n5(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.K)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aW(h,new C.fV1(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n5(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aRZ(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.K)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.K)(h),++g)e.push(C.aRZ(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.K)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.K)(f),++g)a0.push(C.aRZ(a2,f[g]))
w.push(new C.a9N(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lp:function lp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRl:function bRl(d){this.b=d
this.c=$},
bRm:function bRm(){},
bRn:function bRn(d){this.a=d},
fta:function fta(d){this.a=d},
h2H:function h2H(d){this.a=d},
h2I:function h2I(){},
h2J:function h2J(d){this.a=d},
h2K:function h2K(d,e){this.a=d
this.b=e},
h2L:function h2L(d,e,f){this.a=d
this.b=e
this.c=f},
h2G:function h2G(d,e){this.a=d
this.b=e},
h2M:function h2M(d){this.a=d},
h2N:function h2N(d){this.a=d},
h2O:function h2O(d,e,f){this.a=d
this.b=e
this.c=f},
h2F:function h2F(d,e){this.a=d
this.b=e},
fGj:function fGj(d,e){this.a=d
this.b=e},
au2:function au2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fUw:function fUw(){},
fUx:function fUx(){},
zw:function zw(d,e,f){this.a=d
this.b=e
this.c=f},
fCj:function fCj(d){this.a=d},
fJ6:function fJ6(d){this.a=d},
akD:function akD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bM9:function bM9(){},
MD:function MD(d,e,f){this.a=d
this.b=e
this.c=f},
bad:function bad(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h36:function h36(){},
h37:function h37(d){this.a=d},
a9N:function a9N(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fV1:function fV1(d){this.a=d},
bht:function bht(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afH:function afH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajW:function ajW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajX:function ajX(d,e,f,g,h){var _=this
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
bKk:function bKk(d){this.a=d},
bKf:function bKf(){},
bKl:function bKl(){},
bKd:function bKd(){},
bKe:function bKe(){},
bKj:function bKj(d){this.a=d},
bKg:function bKg(d,e){this.a=d
this.b=e},
bKi:function bKi(d,e){this.a=d
this.b=e},
bKh:function bKh(d,e){this.a=d
this.b=e},
bKc:function bKc(d){this.a=d},
bcE:function bcE(d,e){this.b=d
this.a=e},
Qy:function Qy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBk:function aBk(d,e,f){this.b=d
this.c=e
this.a=f},
azP:function azP(d,e,f){this.a=d
this.b=e
this.c=f},
auE:function auE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auF:function auF(d,e,f){var _=this
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
cpG:function cpG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpH:function cpH(d){this.a=d},
cpF:function cpF(d){this.a=d},
cpI:function cpI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpJ:function cpJ(){},
cpK:function cpK(d,e){this.a=d
this.b=e},
cpL:function cpL(){},
cpM:function cpM(d){this.a=d},
cpC:function cpC(d){this.a=d},
cpD:function cpD(d,e){this.a=d
this.b=e},
cpE:function cpE(d,e,f){this.a=d
this.b=e
this.c=f},
cpx:function cpx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpz:function cpz(d,e){this.a=d
this.b=e},
cpA:function cpA(d,e){this.a=d
this.b=e},
cpy:function cpy(d,e){this.a=d
this.b=e},
cpw:function cpw(){},
cpB:function cpB(){},
bc7:function bc7(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cPH:function cPH(){},
ayB:function ayB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayC:function ayC(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cEE:function cEE(d){this.a=d},
cED:function cED(d){this.a=d},
cEM:function cEM(d,e){this.a=d
this.b=e},
cEN:function cEN(d,e){this.a=d
this.b=e},
cEO:function cEO(d){this.a=d},
cEL:function cEL(d){this.a=d},
cEP:function cEP(d){this.a=d},
cEQ:function cEQ(d,e){this.a=d
this.b=e},
cER:function cER(){},
cES:function cES(d){this.a=d},
cEG:function cEG(d){this.a=d},
cEH:function cEH(d,e){this.a=d
this.b=e},
cEF:function cEF(d,e){this.a=d
this.b=e},
cEI:function cEI(){},
cEJ:function cEJ(){},
cEK:function cEK(d,e){this.a=d
this.b=e},
azA:function azA(){},
aGM:function aGM(){},
haX(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.br4((w-450*u)/2,(v-900*u)/2,u)},
afv:function afv(){},
f5U:function f5U(d){this.a=d},
aKy:function aKy(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fg2:function fg2(d){this.a=d},
alS:function alS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alT:function alT(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q7$=f
_.LR$=g
_.amY$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bS7:function bS7(d){this.a=d},
bS6:function bS6(){},
bS4:function bS4(d){this.a=d},
bS2:function bS2(){},
bS3:function bS3(d){this.a=d},
bS_:function bS_(d,e){this.a=d
this.b=e},
bS0:function bS0(){},
bS1:function bS1(d){this.a=d},
bS5:function bS5(d,e){this.a=d
this.b=e},
bRZ:function bRZ(d){this.a=d},
bsL:function bsL(d,e){this.b=d
this.a=e},
f5V:function f5V(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f5W:function f5W(d,e,f){this.a=d
this.b=e
this.c=f},
f5X:function f5X(d,e,f){this.a=d
this.b=e
this.c=f},
f5Y:function f5Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5Z:function f5Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6_:function f6_(){},
alQ:function alQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alR:function alR(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q7$=f
_.LR$=g
_.amY$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bRL:function bRL(){},
bRW:function bRW(d,e){this.a=d
this.b=e},
bRX:function bRX(d){this.a=d},
bRY:function bRY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRS:function bRS(){},
bRR:function bRR(d,e){this.a=d
this.b=e},
bRT:function bRT(d,e){this.a=d
this.b=e},
bRU:function bRU(){},
bRV:function bRV(d){this.a=d},
bRN:function bRN(d){this.a=d},
bRO:function bRO(d){this.a=d},
bRP:function bRP(d){this.a=d},
bRM:function bRM(d,e){this.a=d
this.b=e},
bRQ:function bRQ(d){this.a=d},
bji:function bji(d,e){this.b=d
this.a=e},
dqX:function dqX(){},
a1X:function a1X(d,e){this.a=d
this.b=e},
alM:function alM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alN:function alN(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q7$=e
_.LR$=f
_.amY$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bRx:function bRx(d){this.a=d},
bRw:function bRw(){},
bRv:function bRv(){},
bRp:function bRp(){},
bRq:function bRq(){},
bRu:function bRu(d,e,f){this.a=d
this.b=e
this.c=f},
bRt:function bRt(d){this.a=d},
bRr:function bRr(d,e){this.a=d
this.b=e},
bRs:function bRs(d){this.a=d},
biJ:function biJ(d,e){this.b=d
this.a=e},
aBn:function aBn(){},
bgg:function bgg(){},
aBp:function aBp(){},
bgh:function bgh(){},
aBq:function aBq(){},
bgi:function bgi(){},
up(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j7,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.O6,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hjK(d,e,f,g,h,i,j){return new C.alO(i,h,d,j,e,f,g,null)},
a6l:function a6l(d,e){this.c=d
this.a=e},
biQ:function biQ(d){this.a=d},
tB:function tB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRo:function bRo(d){this.a=d},
Il:function Il(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
W9:function W9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blA:function blA(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0N:function e0N(d){this.a=d},
e0O:function e0O(d,e){this.a=d
this.b=e},
e0K:function e0K(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0P:function e0P(d){this.a=d},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
e0R:function e0R(d,e){this.a=d
this.b=e},
e0S:function e0S(d,e){this.a=d
this.b=e},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e1_:function e1_(d,e,f){this.a=d
this.b=e
this.c=f},
e10:function e10(d,e){this.a=d
this.b=e},
e11:function e11(d,e){this.a=d
this.b=e},
e0T:function e0T(d){this.a=d},
e0U:function e0U(d){this.a=d},
a_P:function a_P(d,e){this.a=d
this.b=e},
alO:function alO(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alP:function alP(d){var _=this
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
bRJ:function bRJ(d){this.a=d},
bRK:function bRK(d){this.a=d},
bRI:function bRI(d){this.a=d},
bRz:function bRz(d){this.a=d},
bRA:function bRA(d){this.a=d},
bRy:function bRy(d){this.a=d},
bRF:function bRF(d,e,f){this.a=d
this.b=e
this.c=f},
bRG:function bRG(d){this.a=d},
bRC:function bRC(d,e){this.a=d
this.b=e},
bRD:function bRD(d,e,f){this.a=d
this.b=e
this.c=f},
bRH:function bRH(){},
bRE:function bRE(d,e){this.a=d
this.b=e},
bRB:function bRB(d){this.a=d},
TQ:function TQ(d,e){this.c=d
this.a=e},
alL:function alL(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bR9:function bR9(d){this.a=d},
bRa:function bRa(d){this.a=d},
bRk:function bRk(){},
bRj:function bRj(d,e,f){this.a=d
this.b=e
this.c=f},
bRe:function bRe(d,e){this.a=d
this.b=e},
bRd:function bRd(d,e){this.a=d
this.b=e},
bRf:function bRf(d){this.a=d},
bRg:function bRg(d,e){this.a=d
this.b=e},
bRh:function bRh(d,e){this.a=d
this.b=e},
bRc:function bRc(d,e){this.a=d
this.b=e},
bRi:function bRi(d,e,f){this.a=d
this.b=e
this.c=f},
bRb:function bRb(d,e){this.a=d
this.b=e},
ifB(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiM(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fFM(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yS)m.push(l===D.wn?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.iV(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.iV(h,a2,a2)-A.iV(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ao(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fFK(u,f),p),new C.fFL(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aO(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aO(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aB(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ifC(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiM(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fFR(v,e)
q=new C.fFP(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ao(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ao(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d4(new A.b8(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("cg.E"))
B.d.fi(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eB(l,new C.fFQ(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ao(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aO(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i0N(d,e,f,g){var w,v,u=C.ifD(d,e)
if(u<=0||f.length<=u)return new A.af9(!1,D.Dr,f)
if(g.q(0,e.a))return new A.af9(!1,D.Dr,f)
w=A.U(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dq(0)
return new A.af9(!0,A.cW(f,u,null,w).dq(0),v)},
i0O(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiM(d3),d2=d1.length
if(d2===0)return D.hrB
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dgr(t))}s=new C.dgI(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dgA(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dgz(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c3(0,k,new C.dgs()),o)}h=new C.dgy(s)
g=new C.dgx(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dgt(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
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
a9=new C.dgG(new C.dgC(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.galX(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ez([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.ao(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nv(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dgq(a2,new C.dgH(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
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
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Gu(o,new A.p(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KM(c5.a,new A.p(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dgu(c6,b4))
for(d2=new A.ck(a4,a4.$ti.k("ck<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gR(j)
if(b6.ao(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.p(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eB(j,new C.dgv(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dgw())
c6.push(new C.aKt(new A.p(c9,b4.h(0,c8).b.b+112),B.H,!1,o))}return new C.bgm(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hyG(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
hsR(d,e,f,g,h,i,j,k,l,m,n){return new C.a01(k,f,j,e,l,n,m,d,g,h,i,null)},
aDn(d,e,f,g,h,i,j){return new C.bk8(i,d,e,f,j,h,g,null)},
aqP:function aqP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEV:function aEV(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e2r:function e2r(d){this.a=d},
e2q:function e2q(d){this.a=d},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2v:function e2v(d){this.a=d},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2s:function e2s(d){this.a=d},
e2x:function e2x(d){this.a=d},
e2w:function e2w(d,e){this.a=d
this.b=e},
aqJ:function aqJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aES:function aES(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e1S:function e1S(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1N:function e1N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1e:function e1e(d){this.a=d},
e1f:function e1f(d,e){this.a=d
this.b=e},
e1w:function e1w(d){this.a=d},
e1u:function e1u(d){this.a=d},
e1v:function e1v(d,e){this.a=d
this.b=e},
e1x:function e1x(d){this.a=d},
e1y:function e1y(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e){this.a=d
this.b=e},
e1t:function e1t(d){this.a=d},
e1s:function e1s(d){this.a=d},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1J:function e1J(){},
e1K:function e1K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1I:function e1I(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1C:function e1C(d){this.a=d},
e1D:function e1D(d,e,f){this.a=d
this.b=e
this.c=f},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1A:function e1A(){},
e1F:function e1F(d,e){this.a=d
this.b=e},
e1G:function e1G(d){this.a=d},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1L:function e1L(d,e){this.a=d
this.b=e},
e12:function e12(d,e){this.a=d
this.b=e},
e13:function e13(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e,f){this.a=d
this.b=e
this.c=f},
e1P:function e1P(d,e,f){this.a=d
this.b=e
this.c=f},
e1O:function e1O(d){this.a=d},
e14:function e14(d){this.a=d},
e15:function e15(d){this.a=d},
e16:function e16(){},
e17:function e17(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1b:function e1b(d,e){this.a=d
this.b=e},
e1a:function e1a(d,e){this.a=d
this.b=e},
e19:function e19(d){this.a=d},
e1c:function e1c(d,e){this.a=d
this.b=e},
e18:function e18(d){this.a=d},
e1U:function e1U(d){this.a=d},
e1o:function e1o(){},
e1p:function e1p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1n:function e1n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1j:function e1j(d,e,f){this.a=d
this.b=e
this.c=f},
e1i:function e1i(d,e,f){this.a=d
this.b=e
this.c=f},
e1g:function e1g(d,e){this.a=d
this.b=e},
e1k:function e1k(d){this.a=d},
e1l:function e1l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1h:function e1h(d,e){this.a=d
this.b=e},
e1m:function e1m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1q:function e1q(d,e){this.a=d
this.b=e},
e21:function e21(){},
e22:function e22(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e24:function e24(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d){this.a=d},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d,e){this.a=d
this.b=e},
e2_:function e2_(d,e){this.a=d
this.b=e},
e20:function e20(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e25:function e25(d){this.a=d},
e1X:function e1X(d){this.a=d},
e1d:function e1d(d){this.a=d},
bgk:function bgk(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgo:function dgo(d){this.a=d},
dgn:function dgn(d,e){this.a=d
this.b=e},
dgp:function dgp(d){this.a=d},
dgm:function dgm(d,e){this.a=d
this.b=e},
fFM:function fFM(d,e){this.a=d
this.b=e},
fFN:function fFN(d){this.a=d},
fFO:function fFO(){},
fFK:function fFK(d,e){this.a=d
this.b=e},
fFL:function fFL(){},
fFR:function fFR(d,e){this.a=d
this.b=e},
fFS:function fFS(d){this.a=d},
fFT:function fFT(){},
fFP:function fFP(d){this.a=d},
fFQ:function fFQ(d,e){this.a=d
this.b=e},
KM:function KM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Gu:function Gu(d,e){this.a=d
this.b=e},
bgm:function bgm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dgr:function dgr(d){this.a=d},
dgI:function dgI(d){this.a=d},
dgA:function dgA(d){this.a=d},
dgB:function dgB(){},
dgz:function dgz(d){this.a=d},
dgs:function dgs(){},
dgy:function dgy(d){this.a=d},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgt:function dgt(d){this.a=d},
dgC:function dgC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgD:function dgD(d){this.a=d},
dgE:function dgE(d){this.a=d},
dgF:function dgF(){},
dgG:function dgG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dgH:function dgH(){},
dgq:function dgq(d,e,f,g,h,i,j,k,l,m){var _=this
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
dgu:function dgu(d,e){this.a=d
this.b=e},
dgv:function dgv(d){this.a=d},
dgw:function dgw(){},
aKt:function aKt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgn:function bgn(d,e){this.b=d
this.a=e},
dgJ:function dgJ(){},
dgK:function dgK(d){this.a=d},
dgL:function dgL(d){this.a=d},
dgM:function dgM(){},
bk9:function bk9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfp:function bfp(d,e){this.b=d
this.a=e},
by6:function by6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
flD:function flD(d){this.a=d},
bns:function bns(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eWM:function eWM(d){this.a=d},
eWL:function eWL(d,e){this.a=d
this.b=e},
a01:function a01(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDl:function aDl(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dwC:function dwC(d,e){this.a=d
this.b=e},
dwB:function dwB(d){this.a=d},
dwz:function dwz(d){this.a=d},
dwA:function dwA(d){this.a=d},
dwL:function dwL(d){this.a=d},
dwM:function dwM(d){this.a=d},
dwK:function dwK(d,e){this.a=d
this.b=e},
dwN:function dwN(){},
dwQ:function dwQ(d){this.a=d},
dwJ:function dwJ(d,e){this.a=d
this.b=e},
dwP:function dwP(){},
dwR:function dwR(d){this.a=d},
dwI:function dwI(d,e){this.a=d
this.b=e},
dwS:function dwS(d){this.a=d},
dwH:function dwH(d){this.a=d},
dwT:function dwT(d){this.a=d},
dwG:function dwG(d){this.a=d},
dwU:function dwU(d){this.a=d},
dwF:function dwF(d){this.a=d},
dwV:function dwV(d){this.a=d},
dwE:function dwE(d){this.a=d},
dwW:function dwW(d){this.a=d},
dwD:function dwD(d,e){this.a=d
this.b=e},
dwO:function dwO(d){this.a=d},
ae3:function ae3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bk8:function bk8(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ae2:function ae2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bk7:function bk7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dwX:function dwX(d){this.a=d},
dwY:function dwY(d,e){this.a=d
this.b=e},
aDm:function aDm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJv:function aJv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ae4:function ae4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dx6:function dx6(d){this.a=d},
Gq:function Gq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hnM(d){var w=d.T,v=x.N
return w.jq(w,new C.cet(),v,v)},
hTb(d){var w=d.bD
if(w>=0)return w
return 5},
hnO(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hnM(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hnN(d,e){var w=C.hnO(d,e)
if(w!=null&&w.cf(new A.V(Date.now(),0,!1)))return!0
return!1},
hTc(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hnM(d),w,w)
u=C.hnO(d,e)
t=u!=null&&u.cf(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dv(30,0,0,0,0,0).a).ab().ag())
d.T=v},
b0T(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0T=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lw(t,B.Ji),$async$b0T)
case 3:if(l){u=!0
w=1
break}u=A.la(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ji,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0T,v)},
cet:function cet(){},
hT9(){var w,v=$.oo(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
Jg(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$Jg)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$Jg)
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
return A.i($async$Jg,v)},
a81(d){return C.hTa(d)},
hTa(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a81=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$a81)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cK,null),$async$a81)
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
return A.i($async$a81,v)},
ces(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ces=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jg(),$async$ces)
case 3:t=m.i7(f),t=t.gae(t),s=x.f
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
return A.i($async$ces,v)},
Oc(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ces(d),$async$Oc)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jg(),$async$Oc)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dM(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,t,o)
w=9
return A.b(C.a81(s),$async$Oc)
case 9:case 8:u=t
w=1
break
case 5:n=C.hT9()
w=10
return A.b(C.Jg(),$async$Oc)
case 10:s=f
J.aK(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=11
return A.b(C.a81(s),$async$Oc)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
b0S(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jg(),$async$b0S)
case 3:t=f
for(s=J.dm(t),r=s.gdO(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a81(t),$async$b0S)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0S,v)},
a82(d,e,f){var w=0,v=A.j(x.H),u
var $async$a82=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqO(d,e),$async$a82)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oc(d),$async$a82)
case 7:w=4
break
case 5:w=8
return A.b(C.b0S(d),$async$a82)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a82,v)},
aqI(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqI=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqO(f,e),$async$aqI)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c7(),$async$aqI)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jg(),$async$aqI)
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
return A.i($async$aqI,v)},
b0R(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0R=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c7(),$async$b0R)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jg(),$async$b0R)
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
return A.i($async$b0R,v)},
hTd(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
aqL(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$aqL)
case 3:if(!g){u=null
w=1
break}t=C.hTd()
w=4
return A.b(A.Wa(),$async$aqL)
case 4:s=g
r=B.dR.aM(B.Y.az(d.f2(),null))
r=B.cP.gcu().aM(r)
q=e?999:2
J.aK(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(A.a83(s),$async$aqL)
case 5:p=e?999:2
u=new A.a1c("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqL,v)},
aqK(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqK=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wa(),$async$aqK)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.j.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b0R(J.k(l==null?"":l),j),$async$aqK)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c9.cG(0,B.cG.aM(t))
s=C.hnP(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dM(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
o.n(p,g,l)}w=5
return A.b(A.a83(p),$async$aqK)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqK,v)},
hnP(d){var w,v,u,t,s=null
try{w=B.Y.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hTf(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h6V(d){var w=0,v=A.j(x.m),u,t,s
var $async$h6V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqK(t[1])
w=1
break}u=null
w=1
break}u=C.hnP(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6V,v)},
hTf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cE(u,new C.cev(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cew(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i7(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cE(n,new C.cex(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cey(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqM(h,w,s,r,q)},
aqO(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.O3(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bf(d),$async$aqO)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqO,v)},
ceE(d){var w=0,v=A.j(x.bC),u,t,s
var $async$ceE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bf(d),$async$ceE)
case 3:t=s.b7(f,new C.ceF(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.ceG())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ceE,v)},
Wb(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wb=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqO(e,d),$async$Wb)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oc(e),$async$Wb)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bf(e),$async$Wb)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.ceC(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dL(r,new C.ceD(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lx(e,o),$async$Wb)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.aqM(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wb,v)},
b0W(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0W=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wb(d,e,f,g),$async$b0W)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.H9(A.KI(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0W,v)},
b0V(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0V=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wb(d,e,f,g),$async$b0V)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqL(r,f),$async$b0V)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHw(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0V,v)},
Wc(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wc=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h6V(a0),$async$Wc)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqI(g.a,d,e,f,s,r),$async$Wc)
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
return A.b(C.bDt(e,j),$async$Wc)
case 12:case 11:w=13
return A.b(C.aiw(e,j,s),$async$Wc)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.Bq(e,i,h),$async$Wc)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bra(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wc,v)},
aqM:function aqM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ceA:function ceA(){},
ceB:function ceB(){},
cez:function cez(){},
cev:function cev(){},
cew:function cew(){},
cex:function cex(){},
cey:function cey(){},
ceF:function ceF(){},
ceG:function ceG(){},
ceC:function ceC(d){this.a=d},
ceD:function ceD(d){this.a=d},
hfL(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.aqN(w,e,g,i,f,h,null),!0,null,x.H)},
dgl(d,e,f,g,h,i,j,k){return new C.bgj(i,e,k,j,g,f,h,d,null)},
aqN:function aqN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEU:function aEU(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d,e,f){this.a=d
this.b=e
this.c=f},
e2j:function e2j(d,e){this.a=d
this.b=e},
e2k:function e2k(d){this.a=d},
e2b:function e2b(d){this.a=d},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2i:function e2i(d){this.a=d},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2g:function e2g(){},
e2m:function e2m(d){this.a=d},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2l:function e2l(d,e){this.a=d
this.b=e},
dgN:function dgN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgl:function bgl(d,e,f){this.d=d
this.e=e
this.a=f},
adj:function adj(d,e,f){this.c=d
this.d=e
this.a=f},
bgj:function bgj(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgo:function bgo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0l:function a0l(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aET:function aET(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e26:function e26(d,e){this.a=d
this.b=e},
e27:function e27(d){this.a=d},
e28:function e28(d){this.a=d},
e29:function e29(d){this.a=d},
e2a:function e2a(d){this.a=d},
a0m:function a0m(d){this.a=d},
blB:function blB(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e2o:function e2o(d,e){this.a=d
this.b=e},
b_q(d,e){return new C.b_p(d,e,null)},
b_p:function b_p(d,e,f){this.c=d
this.d=e
this.a=f},
ii5(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
ipA(d){return A.bT(B.L,null,new C.fWw(new C.ud(A.R(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hpJ(d,e){return new C.atR(e,d,null)},
aRS(d,e,f,g,h,i,j){var w=C.ii5(i)
if(w!=null)return A.bx(e,new A.a5(j,f,new C.a77(w,!0,null),null),B.aq)
return N.aRd(e,B.bZ,f,g,h,i,j)},
lS:function lS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a77:function a77(d,e,f){this.c=d
this.d=e
this.a=f},
blh:function blh(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
dOH:function dOH(d){this.a=d},
dOI:function dOI(){},
dOJ:function dOJ(d,e){this.a=d
this.b=e},
blg:function blg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fWw:function fWw(d){this.a=d},
fWv:function fWv(d,e){this.a=d
this.b=e},
fWu:function fWu(d,e){this.a=d
this.b=e},
fWt:function fWt(d,e){this.a=d
this.b=e},
atR:function atR(d,e,f){this.c=d
this.d=e
this.a=f},
cnY:function cnY(d,e){this.a=d
this.b=e},
aMV:function aMV(){},
ipl(d){var w=null
return A.cf(w,w,!0,w,new C.fVU(),d,w,!0,!0,x.e2)},
iqw(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.h2o(h,g,f,e),d,w,!0,!0,x.N)},
ipn(d,e){var w=null
return A.cf(w,w,!0,w,new C.fVY(e),d,w,!0,!0,x.dY)},
ipm(d){var w=null
return A.cf(w,w,!0,w,new C.fVX(),d,w,!0,!0,x.c5)},
aUS:function aUS(d,e){this.a=d
this.b=e},
aUR:function aUR(d){this.a=d},
aSS:function aSS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVU:function fVU(){},
h2o:function h2o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVY:function fVY(d){this.a=d},
fVX:function fVX(){},
a__:function a__(d,e){this.c=d
this.a=e},
aA5:function aA5(){var _=this
_.d=$
_.c=_.a=_.e=null},
d7Y:function d7Y(d){this.a=d},
d7Z:function d7Z(d){this.a=d},
d7X:function d7X(d,e){this.a=d
this.b=e},
d8_:function d8_(d){this.a=d},
d80:function d80(d){this.a=d},
ZZ:function ZZ(d){this.a=d},
aA4:function aA4(){this.d=$
this.c=this.a=null},
d7U:function d7U(d){this.a=d},
d7V:function d7V(d){this.a=d},
d7W:function d7W(d){this.a=d},
Zw:function Zw(d){this.a=d},
ayP:function ayP(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cGk:function cGk(){},
cGq:function cGq(d){this.a=d},
cGr:function cGr(d){this.a=d},
cGs:function cGs(d){this.a=d},
cGp:function cGp(){},
cGt:function cGt(d){this.a=d},
cGu:function cGu(d){this.a=d},
cGo:function cGo(){},
cGv:function cGv(d,e){this.a=d
this.b=e},
cGn:function cGn(d,e){this.a=d
this.b=e},
cGl:function cGl(d,e){this.a=d
this.b=e},
cGw:function cGw(d){this.a=d},
cGm:function cGm(){},
cGx:function cGx(d){this.a=d},
a28:function a28(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxZ:function bxZ(){this.d=$
this.c=this.a=null},
fl8:function fl8(d,e){this.a=d
this.b=e},
fl9:function fl9(d){this.a=d},
fla:function fla(d,e){this.a=d
this.b=e},
acm:function acm(d,e){this.a=d
this.b=e},
Ge:function Ge(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxX:function bxX(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fl6:function fl6(d,e){this.a=d
this.b=e},
ayI:function ayI(d,e){this.c=d
this.a=e},
bxY:function bxY(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fl7:function fl7(d){this.a=d},
bxW:function bxW(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aP0:function aP0(){},
aP1:function aP1(){},
bFr(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bh(u),s=B.o.E(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p0(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fUj(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.R,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.YU(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRt(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().l8(85,1280,B.eN),$async$aRt)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fp(),$async$aRt)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hpI()
w=9
return A.b(C.cnX(q,r),$async$aRt)
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
return A.i($async$aRt,v)},
aRQ(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRQ=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cnU(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cG.aM(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Ha(p,!0,null,o).df(0,B.h_),$async$aRQ)
case 9:n=a1
w=10
return A.b(n.lb(),$async$aRQ)
case 10:m=a1
w=11
return A.b(m.b.hs(B.hd),$async$aRQ)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dM.gaU(l))
k="data:image/png;base64,"+B.cP.gcu().aM(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.j.V(o*0.72)
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
return A.i($async$aRQ,v)},
fUj:function fUj(){},
ud:function ud(d){this.a=d},
atQ:function atQ(d,e,f){this.c=d
this.d=e
this.a=f},
aGn:function aGn(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eTW:function eTW(d,e){this.a=d
this.b=e},
eTN:function eTN(d){this.a=d},
eTO:function eTO(d){this.a=d},
eTU:function eTU(d,e){this.a=d
this.b=e},
eTT:function eTT(d,e){this.a=d
this.b=e},
eTQ:function eTQ(d,e){this.a=d
this.b=e},
eTP:function eTP(d,e){this.a=d
this.b=e},
eTR:function eTR(d){this.a=d},
eTS:function eTS(d,e){this.a=d
this.b=e},
eTV:function eTV(d,e){this.a=d
this.b=e},
eTI:function eTI(d,e){this.a=d
this.b=e},
eTM:function eTM(d){this.a=d},
eTL:function eTL(d,e){this.a=d
this.b=e},
eTK:function eTK(d){this.a=d},
eTX:function eTX(d,e){this.a=d
this.b=e},
eTY:function eTY(d,e){this.a=d
this.b=e},
eTJ:function eTJ(d,e){this.a=d
this.b=e},
hCK(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).ab().ag(),"project",v],x.N,x.z)},
fUk(d,e,f){var w=0,v=A.j(x.N),u
var $async$fUk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.az(C.hCK(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUk,v)},
bFt(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fUk(!0,d,e),$async$bFt)
case 4:w=3
return A.b(r.atO(g,d,e.a),$async$bFt)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dR.aM(B.Y.az(C.hCK(d,e,null),null))
u="NGMY_WS:"+B.kI.gcu().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFt,v)},
huf(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hfm(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d3(s,"{"))try{w=B.Y.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ind(d){var w,v,u,t=C.huf(d)
if(t==null)return null
if(C.hfm(t))return t
w=B.a.cq(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hfm(v))return v}u=B.a.cq(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hfm(v))return v}return null},
hfl(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.c9.cG(0,B.cG.aM(J.nl(q,8)))
w=t.a(B.Y.aQ(0,v,r))}else w=t.a(B.Y.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.h9y(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bFs(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atN(t[1]),$async$bFs)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hfl(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hfl(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFs,v)},
hfk(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lA(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bEZ(){var w=0,v=A.j(x.o),u,t
var $async$bEZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hm(),$async$bEZ)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hfl(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEZ,v)},
hDL(d,e,f,g){return A.bT(B.L,null,new C.h2e(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h2e:function h2e(d,e,f){this.a=d
this.b=e
this.c=f},
aep:function aep(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eU_:function eU_(d,e){this.a=d
this.b=e},
eU0:function eU0(d,e){this.a=d
this.b=e},
eU1:function eU1(d,e){this.a=d
this.b=e},
eU2:function eU2(d,e){this.a=d
this.b=e},
eTZ:function eTZ(d){this.a=d},
atK:function atK(d,e,f){this.c=d
this.d=e
this.a=f},
bmY:function bmY(){var _=this
_.c=_.a=_.e=_.d=null},
eTD:function eTD(d,e){this.a=d
this.b=e},
eTE:function eTE(d){this.a=d},
eTF:function eTF(d){this.a=d},
atP:function atP(d){this.a=d},
aGm:function aGm(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eTH:function eTH(d){this.a=d},
eTG:function eTG(d){this.a=d},
hWt(d,e,f,g,h){return new C.OR(h,g,d,e,f,null)},
aLf:function aLf(d,e){this.a=d
this.b=e},
OR:function OR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGo:function aGo(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eUp:function eUp(){},
eUl:function eUl(d,e){this.a=d
this.b=e},
eUm:function eUm(d){this.a=d},
eU6:function eU6(d){this.a=d},
eU4:function eU4(d){this.a=d},
eU5:function eU5(d){this.a=d},
eUf:function eUf(d,e){this.a=d
this.b=e},
eUc:function eUc(d,e){this.a=d
this.b=e},
eUd:function eUd(d,e){this.a=d
this.b=e},
eUe:function eUe(d,e,f){this.a=d
this.b=e
this.c=f},
eUa:function eUa(d,e,f){this.a=d
this.b=e
this.c=f},
eU8:function eU8(d){this.a=d},
eU9:function eU9(d){this.a=d},
eUb:function eUb(d){this.a=d},
eUs:function eUs(d){this.a=d},
eUr:function eUr(d){this.a=d},
eUt:function eUt(d){this.a=d},
eUq:function eUq(d){this.a=d},
eU3:function eU3(d){this.a=d},
eU7:function eU7(d,e){this.a=d
this.b=e},
eUo:function eUo(d,e){this.a=d
this.b=e},
eUn:function eUn(d,e){this.a=d
this.b=e},
eUi:function eUi(d){this.a=d},
eUj:function eUj(d){this.a=d},
eUk:function eUk(d,e){this.a=d
this.b=e},
eUh:function eUh(d,e){this.a=d
this.b=e},
eUg:function eUg(d,e,f){this.a=d
this.b=e
this.c=f},
bzK:function bzK(){},
B4(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
agU(d,e,f){return C.ibz(d,e,f)},
ibz(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$agU=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aA("String",e,f),$async$agU)
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
return A.i($async$agU,v)},
agT(d,e){return C.iby(d,e)},
iby(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agT=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agT)
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
return A.i($async$agT,v)},
iao(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tv(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCs(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCs=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b48(q),$async$bCs)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRQ(q,!1),$async$bCs)
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
return A.i($async$bCs,v)},
hJU(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rj(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rj(p,J.k(u==null?"":u),1,o,q)},
h9y(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cE(w,new C.cFC(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cFD(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lA(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ifx(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wn
case"female":case"f":return D.oq
default:return D.yS}},
hzg(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hjL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ifx(v==null?j:J.k(v))
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
m=m==null?j:B.j.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aI(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.j.M(k)
return new C.hS(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ifz(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Os
case"viewer":return D.kX
default:return D.ux}},
ifA(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hb(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQA(d,e){return B.a.i(e.toLowerCase())===C.Hb(d,e)&&d.y!==D.kX},
uq(d,e){var w,v=d.y
if(v===D.kX)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hb(d,e))return!0
if(v===D.Os)return!0
v=d.e
return new A.N(v,A.hfr(),A.U(v).k("N<1,m>")).q(0,w)},
ieU(d){return J.dI(d,new C.fEF()).gI(0)},
h2X(d){var w=0,v=A.j(x.y),u,t
var $async$h2X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bf(d),$async$h2X)
case 3:u=t.re(f,new C.h2Y(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2X,v)},
bDt(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bf(d),$async$bDt)
case 3:t=g
if(J.re(t,new C.fCi(e))){w=1
break}if(C.ieU(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDt,v)},
alV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cE(w,new C.bSa(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSb(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bSc(),x.N)
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
p=p==null?null:B.j.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ifz(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aU(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cp)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kR(w,v,s,!r,t,g,q,p,o,n,m)},
hzv(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aB(v,0,8)},
Dt(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Dt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sp(d),$async$Dt)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Dt)
case 4:t=f
w=5
return A.b(t.a75(0),$async$Dt)
case 5:w=6
return A.b(C.fsL(t,l),$async$Dt)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.huQ(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p_(l,n),$async$Dt)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.huQ(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p_(l,n),$async$Dt)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dt,v)},
fsL(d,e){return C.i7N(d,e)},
i7N(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fsL=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.B4(a9)))
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
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.B4(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Y.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h9y(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B4(a9)+"_"+n))
i=C.iao(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b48(h),$async$fsL)
case 17:g=b1
if(g!=null){i=i.Tv(g)
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
case 8:J.Sy(q,new C.fsM())
if(p&&J.ad(q)!==0)C.p_(a9,q)
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
return A.i($async$fsL,v)},
bDV(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bDV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sp(d),$async$bDV)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Dt(r),$async$bDV)
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
return A.i($async$bDV,v)},
huQ(d){var w,v,u,t
try{w=B.Y.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cE(v,new C.foz(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.foA(),u),u.k("M.E"))
B.d.aZ(v,new C.foB())
return v}catch(t){v=A.a([],x.D)
return v}},
p_(d,e){return C.ipc(d,e)},
ipc(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p_=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Sp(b2),$async$p_)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$p_)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B4(a8)
p=A.aT(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.Y.aQ(0,p,null)),new C.fVK(),a2).fM(0)
a2=J.b7(b3,new C.fVL(),a2).bZ(0,new C.fVM())
n=A.d4(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dY(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.B4(a8)
l=A.aT(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9k(l),$async$p_)
case 19:t=21
a5=C.B4(a8)
k=A.aT(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Y.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9k(a5==null?null:J.k(a5)),$async$p_)
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
return A.b(C.agT(r,"ngmy_worksheet_item_v3_"+C.B4(a8)+"_"+m),$async$p_)
case 29:w=30
return A.b(C.agT(r,"ngmy_worksheet_thumb_v3_"+C.B4(a8)+"_"+m),$async$p_)
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
return A.b(C.bCs(h),$async$p_)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.agU(r,"ngmy_worksheet_thumb_v3_"+C.B4(a8)+"_"+a4,f),$async$p_)
case 40:g=i.Tv(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agT(r,"ngmy_worksheet_thumb_v3_"+C.B4(a8)+"_"+a4),$async$p_)
case 41:g=i.Tv(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agT(r,"ngmy_worksheet_thumb_v3_"+C.B4(a8)+"_"+a4),$async$p_)
case 42:case 34:a4=i.a
w=43
return A.b(C.agU(r,"ngmy_worksheet_item_v3_"+C.B4(a8)+"_"+a4,B.Y.az(g.ak(),null)),$async$p_)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.agU(r,"ngmy_worksheets_index_v3_"+C.B4(a8),B.Y.az(q,null)),$async$p_)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fVN(q))
a4=a3.$ti.k("cM<1,a8<m,@>>")
a7=A.C(new A.cM(a3,new C.fVO(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.agU(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.az(a0,null)),$async$p_)
case 45:w=46
return A.b(J.hJ_(r),$async$p_)
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
return A.i($async$p_,v)},
LY(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Dt(d),$async$LY)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h2W(e))
if(r===-1)s.c4(t,0,e)
else s.n(t,r,e)
u=C.p_(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LY,v)},
bDG(d,e){var w=0,v=A.j(x.H),u
var $async$bDG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Dt(d),$async$bDG)
case 2:u=g
J.nM(u,new C.fF8(e))
w=3
return A.b(C.p_(d,u),$async$bDG)
case 3:return A.h(null,v)}})
return A.i($async$bDG,v)},
Hd(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hd)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aQ(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cE(j,new C.fIi(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fIj(),s),s.k("M.E"))
B.d.aZ(r,new C.fIk())
k=r}}catch(h){}w=4
return A.b(C.fpj(d),$async$Hd)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i8a(k,p,d)
j=A.U(o)
s=j.k("N<1,a8<m,@>>")
s=A.C(new A.N(o,new C.fIl(),s),s.k("ak.E"))
n=B.Y.az(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Rz(d,o),$async$Hd)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fIm(d),j),j.k("M.E"))
if(m.length!==0)C.aQk(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hd,v)},
fVw(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fVw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rz(d,e),$async$fVw)
case 3:t=J.dI(e,new C.fVx(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQk(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVw,v)},
a3L(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3L=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3L)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aQ(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cE(m,new C.h2R(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h2S(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qz(o,new C.h2T(e))
if(B.a.i(e.x).length===0&&C.uq(e,d)){m=B.a.i(d.toLowerCase())
p=e.aFS(e.y===D.kX?D.kX:D.ux,m)}else p=e
if(q===-1)J.pT(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.Rz(d,o),$async$a3L)
case 3:w=C.uq(p,d)?4:5
break
case 4:w=6
return A.b(C.aQj(C.Hb(p,d),p),$async$a3L)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3L,v)},
aQw(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hd(d),$async$aQw)
case 2:u=g
t=J.cC(u)
s=A.nv(t.eP(u,new C.fEQ(e)))
t.bt(u,new C.fER(e))
w=3
return A.b(C.Rz(d,u),$async$aQw)
case 3:w=s!=null&&C.aQA(s,d)?4:5
break
case 4:w=6
return A.b(C.foD(e),$async$aQw)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQw,v)},
aiM(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h31(),v),v.k("M.E"))
return w},
hcY(d,e){var w,v=d.f,u=A.nv(new A.Y(v,new C.fEk(e),A.U(v).k("Y<1>")))
v=C.aiM(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fEl(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fEm())
return v},
ifD(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hDP(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hcY(d,u),new C.h2p(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iha(d,e){var w
if(e==null||e.length===0)return 1
w=C.hcY(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fJ7(),A.U(w).k("N<1,F>")).f1(0,B.xK)+1},
ip5(d){var w,v=C.aiM(d)
if(v.length===0)return null
w=new A.Y(v,new C.fVq(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ify(d){return A.H(["id",d.a,"name",d.b,"gender",C.hzg(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ih5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yS?n:q.c
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
d=q.aFN(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPc(a1,w,a3.d,a2.y,s,a0,v)},
Bf(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bf)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Y.aQ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cE(p,new C.fIf(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fIg(),s),s.k("M.E"))
B.d.aZ(p,new C.fIh())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bf,v)},
aiw(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiw=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.ux:D.kX
a7=C.Hb(b2,b3)
w=2
return A.b(C.Bf(b1),$async$aiw)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fVl(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDt(b1,b2),$async$aiw)
case 5:case 4:if(b0===-1){u=b2.aFS(a6,a7)
a9.c4(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
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
i=i!==D.yS?i:l.c
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
s.n(0,m,l.aFN(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.ux:D.kX
u=t.cPe(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Rz(b1,a8),$async$aiw)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQj(B.a.i(b3.toLowerCase()),u),$async$aiw)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiw,v)},
hve(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).ab().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a8<m,@>>"),k=A.C(new A.N(m,C.hCT(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.ab().ag(),"updatedAt",o],r,x.K),"createdAt",s.ab().ag(),"updatedAt",o],r,x.z)},
hvf(d,e){var w=new A.V(Date.now(),0,!1).ab().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a8<m,@>>")
u=A.C(new A.N(u,C.hCT(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.ab().ag(),"updatedAt",w],x.N,x.z)},
i5E(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.alV(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hfr(),A.U(j).k("N<1,m>")).bZ(0,new C.fp6())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.ux
else s=B.d.q(t,u)?D.Os:D.kX
return w.aFS(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.alV(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cE(h,new C.fp7(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fp8(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.fp9(),x.N).bZ(0,new C.fpa())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ux
else s=B.d.q(t,u)?D.Os:D.kX
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
j=j==null?null:B.j.M(j)
if(j==null)j=0
return new C.kR(h,r,p,!m,t,o,l,j,v,s,B.cc)},
fpj(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fpj=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fpn()
h=x.N
g=x.z
w=7
return A.b(A.iK(A.a([A.lE("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lE("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lE("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fpj)
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
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cE(new A.b8(l,h),new C.fpk(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fpl(),l),l.k("M.E"))
B.d.aZ(l,new C.fpm())
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
return A.i($async$fpj,v)},
i8a(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dL(e,new C.ftt(),v).bZ(0,new C.ftu())
t=A.d4(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hb(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kX){m=q.e
m=!new A.N(m,A.hfr(),A.U(m).k("N<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ih5(l,v)
o=C.Hb(k,w)
p=v.d
s.n(0,u,o===w?k.beX(p,D.ux):k.beX(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.ftv())
return j},
Rz(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Rz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Rz)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fwm(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aA("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.az(s,null)),$async$Rz)
case 3:return A.h(null,v)}})
return A.i($async$Rz,v)},
aQj(d,e){return C.idn(d,e)},
idn(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m9("family_trees",A.a([C.hve(e,d)],p),null,B.cK),$async$aQj)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m9("family_trees",A.a([C.hvf(e,d)],p),null,B.cK),$async$aQj)
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
return A.i($async$aQj,v)},
aQk(d,e){return C.ido(d,e)},
ido(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a8<m,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fBy(d),n),m)
r=l
w=7
return A.b(A.m9("family_trees",r,null,B.cK),$async$aQk)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fBz(d),n),m)
p=k
w=8
return A.b(A.m9("family_trees",p,null,B.cK),$async$aQk)
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
return A.i($async$aQk,v)},
foD(d){return C.i4V(d)},
i4V(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$foD=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.S_("family_trees",A.H(["id",d],x.N,x.z),null,B.cK),$async$foD)
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
return A.i($async$foD,v)},
rj:function rj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lA:function lA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cFF:function cFF(){},
cFE:function cFE(){},
cFC:function cFC(){},
cFD:function cFD(){},
Ik:function Ik(d,e){this.a=d
this.b=e},
hS:function hS(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alU:function alU(d,e){this.a=d
this.b=e},
fEF:function fEF(){},
h2Y:function h2Y(d){this.a=d},
fCi:function fCi(d){this.a=d},
kR:function kR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bSe:function bSe(){},
bSd:function bSd(){},
bSa:function bSa(){},
bSb:function bSb(){},
bSc:function bSc(){},
fsM:function fsM(){},
foz:function foz(){},
foA:function foA(){},
foB:function foB(){},
fVK:function fVK(){},
fVL:function fVL(){},
fVM:function fVM(){},
fVN:function fVN(d){this.a=d},
fVO:function fVO(){},
h2W:function h2W(d){this.a=d},
fF8:function fF8(d){this.a=d},
fIi:function fIi(){},
fIj:function fIj(){},
fIk:function fIk(){},
fIl:function fIl(){},
fIm:function fIm(d){this.a=d},
fVx:function fVx(d){this.a=d},
h2R:function h2R(){},
h2S:function h2S(){},
h2T:function h2T(d){this.a=d},
fEQ:function fEQ(d){this.a=d},
fER:function fER(d){this.a=d},
h31:function h31(){},
fEk:function fEk(d){this.a=d},
fEl:function fEl(d,e){this.a=d
this.b=e},
fEm:function fEm(){},
h2p:function h2p(d){this.a=d},
fJ7:function fJ7(){},
fVq:function fVq(){},
fIf:function fIf(){},
fIg:function fIg(){},
fIh:function fIh(){},
fVl:function fVl(d){this.a=d},
fp6:function fp6(){},
fp7:function fp7(){},
fp8:function fp8(){},
fp9:function fp9(){},
fpa:function fpa(){},
fpn:function fpn(){},
fpo:function fpo(d){this.a=d},
fpk:function fpk(d){this.a=d},
fpl:function fpl(){},
fpm:function fpm(){},
ftt:function ftt(){},
ftu:function ftu(){},
ftv:function ftv(){},
fwm:function fwm(){},
fBy:function fBy(d){this.a=d},
fBz:function fBz(d){this.a=d},
cFG:function cFG(d,e){this.a=d
this.b=e},
cFH:function cFH(d,e){this.a=d
this.b=e},
aIr:function aIr(d,e,f){this.a=d
this.b=e
this.c=f},
baq:function baq(){this.b=this.a=0},
bap:function bap(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
by_:function by_(){},
xe(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gnt()),2,"0")+":"+B.a.b_(B.o.u(w.gGI()),2,"0")},
hWq(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.he(u)},
atL(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$atL)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$atL)
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
return A.i($async$atL,v)},
atM(d){return C.hWr(d)},
hWr(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$atM)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cK,null),$async$atM)
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
return A.i($async$atM,v)},
atO(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$atO=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c7(),$async$atO)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hWq()
w=4
return A.b(C.atL(),$async$atO)
case 4:r=h
q=B.a.i(e)
p=B.dR.aM(t)
J.aK(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cP.gcu().aM(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(C.atM(r),$async$atO)
case 5:u=new A.a1c("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atO,v)},
atN(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c7(),$async$atN)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atL(),$async$atN)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aI(n.h(o,"usesRemaining"))
l=m==null?null:B.j.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.c9.cG(0,B.cG.aM(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dM(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
p.n(q,i,m)}w=5
return A.b(C.atM(q),$async$atN)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atN,v)},
hpI(){var w=new A.V(Date.now(),0,!1).ab()
return"wst_"+(1000*w.a+w.b)+"_"+B.cM.aw(999999)},
hWs(d){var w,v,u,t,s,r,q
try{w=A.ahn(d)
if(w==null)return d
v=w
if(J.M3(v)>960||J.M2(v)>960){s=v
r=J.M3(v)>=J.M2(v)?960:null
v=A.ahk(s,J.M2(v)>J.M3(v)?960:null,B.PQ,r)}s=v
u=A.anf(82).TS(s,B.zw)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cb(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cnX(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cnX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hWs(e)
$.cnT.n(0,s,t)
u=C.bFv(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cnX,v)},
b48(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b48=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gal(J.lI(l,",")):l
q=B.cG.aM(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hpI()
w=7
return A.b(C.cnX(p,q),$async$b48)
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
return A.i($async$b48,v)},
cnU(d){var w=0,v=A.j(x.T),u,t,s
var $async$cnU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.cnW(s),$async$cnU)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcu().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cnU,v)},
a9k(d){var w=0,v=A.j(x.H),u,t
var $async$a9k=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hCL(d)
if(t==null){w=1
break}$.cnT.W(0,t)
w=3
return A.b(C.bFu(t),$async$a9k)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9k,v)},
bFv(d,e){return C.ing(d,e)},
ing(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFv=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPd
w=7
return A.b(n==null?$.aPd=N.hbQ():n,$async$bFv)
case 7:r=g
q=new Uint8Array(A.cb(e))
p=J.mY(r,"thumbs","readwrite")
B.j6.mx(J.mX(p,"thumbs"),q,l)
w=8
return A.b(J.pS(p),$async$bFv)
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
return A.i($async$bFv,v)},
bFu(d){return C.ine(d)},
ine(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFu=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPd
w=7
return A.b(o==null?$.aPd=N.hbQ():o,$async$bFu)
case 7:r=f
q=J.mY(r,"thumbs","readwrite")
B.j6.Gi(J.mX(q,"thumbs"),m)
w=8
return A.b(J.pS(q),$async$bFu)
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
return A.i($async$bFu,v)}},D,Av,Aw,A_,Ax,Ay
J=c[1]
A=c[0]
B=c[2]
N=c[60]
P=c[257]
A0=c[163]
S=c[59]
Aa=c[232]
L=c[212]
H=c[35]
E=c[222]
T=c[121]
Ab=c[235]
Q=c[105]
Ac=c[134]
U=c[228]
Ad=c[116]
Ae=c[198]
A1=c[118]
Af=c[231]
Ag=c[43]
R=c[230]
M=c[90]
A2=c[86]
Ah=c[169]
A3=c[129]
A4=c[172]
A5=c[251]
A6=c[199]
Ai=c[190]
Aj=c[202]
A7=c[197]
Ak=c[254]
Al=c[72]
A8=c[256]
Am=c[78]
G=c[255]
An=c[133]
Ao=c[259]
Ap=c[120]
A9=c[216]
Aq=c[34]
V=c[119]
O=c[192]
Ar=c[203]
W=c[258]
As=c[155]
At=c[125]
X=c[244]
Y=c[42]
F=c[96]
Au=c[33]
K=c[104]
I=c[138]
Z=c[76]
C=a.updateHolder(c[7],C)
D=c[250]
Av=c[77]
Aw=c[210]
A_=c[253]
Ax=c[252]
Ay=c[63]
C.aps.prototype={}
C.b_r.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjg(),f=h.x!=null&&h.zG(i).length===0
if(h.x!=null)w=f?B.b1:B.bD
else w=h.gUx()?B.bD:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.L(D.bod,B.r,1)
s=x.p
r=A.q(i,A.x(A.a([A.q(i,D.f7r,B.f,i,i,new A.o(B.b1.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h8,i,i,i),B.X,D.fD7,B.aw,A.d(C.xe(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fyP,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b6A,i,i,i,i,B.a0b,i,i,i)
q=A.n(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b1.j(0.28),B.r,1)
n=A.he_(h.d)
o=A.q(B.A,C.b_q(A.fLs(h.e,n),30),B.f,i,i,new A.o(B.m5,i,o,i,i,i,B.a7),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.ftV,B.K,i,i)
m=A.n(14)
l=A.L(B.aO,B.r,1)
q=A.q(i,A.x(A.a([o,B.Q,n,B.bG,D.fDq,B.af,A.q(i,A.x(A.a([D.fTr,B.bG,A.d(A.Bh(h.c),i,i,i,i,i,i,D.foD,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fl,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,O.alu,i,i,i)
p=A.n(16)
m=A.L(B.aO,B.r,1)
l=j.aSU("Original due",C.xe(h.r,!1))
n=j.aSU("Current due",C.xe(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.X,A.q(i,A.x(A.a([l,B.Q,n,B.X,A.q(i,A.d(h.gaMY(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.C6,i,i,1/0),B.X,j.ck3(),B.Q,j.c6U(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bh,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fEn,B.aw,A.d(q,i,i,i,i,i,i,D.ft8,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bh,i,i,1/0)],s))}if(h.gaHy()){q=A.n(14)
o=A.L(B.cu,B.r,1.6)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fUM,B.Q,A.bx(A.n(12),A.e8(new A.a5(1/0,88,A.b4(i,i,i,new A.WX(h.ax,B.O,D.fcd,!0,3.5,i),B.ay),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GE,i,i,i)],s))}p.push(B.aC)
p.push(D.fMF)
return A.q(i,A.x(A.a([r,new A.D(B.a0_,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aSU(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.ab5,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fpG,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
ck3(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaj(B.e1,u,"Not paid yet")
w=t.zG(null).length
v=w===0?B.b1:B.bD
return this.aaj(v,u,C.xe(t.x,!0))},
c6U(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaj(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaj(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.ab5,u,u,u)
v=A.U(d).k("N<1,h1>")
v=A.C(new A.N(d,new C.c7t(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bW(B.bH,v,B.bt,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaj(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.ab5,w,w,w),1),new A.dn(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dX,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bcC.prototype={
a4(d,e){new A.WX(this.b,B.O,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.apE.prototype={
S(){return new C.aEm(A.a([],x.bp))},
ge3(){return this.c}}
C.aEm.prototype={
Y(){this.a3()
this.Jc()},
Jc(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a31(t.a.c),$async$Jc)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dPz(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jc,v)},
aUR(d,e){var w,v=null,u=this.a.d.a,t=u?B.O:B.aQ,s=A.l(v,v,u?B.bu:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bu:B.bo).j(0.22)
w=A.n(10)
return A.bs(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bh,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bo).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b4e),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aUQ(d){return this.aUR(d,null)},
Q_(d){return this.cnH(d)},
cnH(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HV:B.eN
w=7
return A.b(new A.hT().CF(72,900,900,n),$async$Q_)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fp(),$async$Q_)
case 8:p=f
n=B.cP.gcu().aM(p)
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
if(n!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q_,v)},
b3_(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.O:B.aQ,o=A.n(10),n=A.L((q?B.bu:B.bo).j(0.18),B.r,1)
if(d)q=B.cO
else q=s.a.d.a?B.bu:B.bo
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.au,r,r,r,r,r,r,r,r,12.5,r,r,B.R,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cO
else u=s.a.d.a?B.bu:B.bo
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fs(r,r,r,r,r,r,r,r,r,r,r,B.cO,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ae,u,A.bM(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bu:B.bo,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.q(r,A.A(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jC,D.bB7,r,r,r)},
DC(d){return this.bDq(d)},
bDp(){return this.DC(null)},
bDq(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DC=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b5,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.j.iY(a4)
p=a5.c
a4=a4===q?B.o.u(B.j.M(p)):B.j.ad(p,2)}o=new A.au(new A.ba(a4,B.b5,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b5,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.he_(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wX?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",a4,new C.dPi(),new C.dPj(a2,t,a5,r,new C.dPk(a2,t),o,n,j),B.eG,!0,x.y),$async$DC)
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
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fiJ)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fho)
w=1
break}a1=A.fLs(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wX?"male":"female"
w=7
return A.b(A.aiL(a3,A.hmp(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DC)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wX?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcl(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cRz(a2.a)
w=8
return A.b(A.aiL(t.a.c,a5),$async$DC)
case 8:case 5:w=9
return A.b(t.Jc(),$async$DC)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DC,v)},
aVw(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cO.j(0.14)
else w=this.a.d.a?B.O:B.aQ
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cO
else s=(this.a.d.a?B.bu:B.bo).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_q(d,18)
if(g)q=B.cO
else q=this.a.d.a?B.aQ:B.au
return A.aJ(!1,B.a3,!0,v,A.aO(!1,u,!0,A.q(p,A.A(A.a([r,B.bl,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.ba,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SP(d){return this.cFx(d)},
cFx(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",s,new C.dPC(),new C.dPD(t,d),B.fZ,!0,x.y),$async$SP)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiL(t.a.c,d),$async$SP)
case 7:w=8
return A.b(t.Jc(),$async$SP)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SP,v)},
PZ(d,e){return this.bOh(0,e)},
bOh(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lm(s,"Cancel","Delete",e.b+" \xb7 "+A.Bh(e.c)+" will be removed from this device.","Delete this debt?"),$async$PZ)
case 3:if(!g){w=1
break}w=4
return A.b(C.fEX(t.a.c,e.a),$async$PZ)
case 4:w=5
return A.b(t.Jc(),$async$PZ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PZ,v)},
ag8(d){return this.cht(d)},
cht(d){var w=0,v=A.j(x.H),u=this,t
var $async$ag8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dPw(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ag8)
case 2:return A.h(null,v)}})
return A.i($async$ag8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eqE
w=J.dI(m.d,new C.dPE())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dPF())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cI(v,0,new C.dPG())
w=A.n(18)
s=m.a.d.a
r=s?D.cAD:D.aCm
q=A.L(s?B.cO.j(0.35):B.cO.j(0.18),B.r,1)
s=A.q(l,D.c1z,B.f,l,l,new A.o(B.cO.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.au,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aJ(!1,B.a3,!0,A.n(12),A.aO(!1,A.n(12),!0,D.eq_,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dPH(m),l,l,l,l,l,l,l),B.f,B.cO,0,l,l,l,l,l,B.aj)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.cBD("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bh(t)
r=A.a([A.q(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b98(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.aA,B.aF,B.x,r,l,l),B.n),l,l,l,l,B.alr,l,l,l),B.aC],p)
if(J.cr(m.d)){w=m.a.d.a
s=w?B.e8:B.c
q=A.n(18)
o=A.L((w?B.bu:B.bo).j(0.12),B.r,1)
n=A.q(l,D.bXn,B.f,l,l,new A.o(B.cO.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.au,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.x(A.a([n,B.af,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bo,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bDK,l,l,1/0))}else{w=m.gcmY()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bFq,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bo,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b98(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.L((v.a.d.a?B.bu:B.bo).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bo,u,u,u,u,u,u,u,u,11,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cO
else w=v.a.d.a?B.aQ:B.au
return A.q(u,A.x(A.a([q,B.bG,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eD,u,u,u)},
cBD(d,e){return this.b98(!1,d,e)},
cmZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zG(j).length,h=d.biw()
if(d.x!=null){w=d.zG(j).length
v=w===0?B.cO:B.bD}else if(d.gUx())v=B.bD
else{if(h)w=B.cO
else w=k.a.d.a?B.bu:B.bo
v=w}if(d.x!=null){w=d.zG(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xe(u,!1)}else{u.toString
t="Paid "+C.xe(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xe(w,!1)+" \xb7 "+i+" missed":"Due "+C.xe(w,!1)}w=k.a.d.a?B.e8:B.c
u=A.n(18)
if(d.gUx()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bo).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cL,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bp:B.m5
o=A.L(d.gUx()&&d.x==null?B.bD.j(0.45):B.cO.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.he_(d.d)
o=A.q(B.A,A.da(C.b_q(A.fLs(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a7),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.au
m=x.p
n=A.a([new A.dn(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHy())B.d.v(n,A.a([B.e2,A.X(B.OU,B.cO.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.m,j,B.e,B.i,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.R,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bh(d.c)
l=k.a.d.a?B.aQ:B.au
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aJ(!1,B.a3,!0,j,A.aO(!1,q,!0,new A.D(A5.ale,A.A(A.a([o,B.bd,p,B.ae,A.x(A.a([n,B.bG,A.X(B.eI,(k.a.d.a?B.bu:B.bo).j(0.5),j,j,j,18)],m),B.dK,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dPy(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uI.prototype={}
C.alI.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bk
u=v?B.E:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.q(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a7),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayv,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.GV,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.A(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e_)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bAi,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bs,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fG,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fd1)
a2=A.a([A.A(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wd,A.q(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a6,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lK,A.x(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.o(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hq,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.aA,B.aF,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bBA,a0,a0,a0,a0)}}
C.aWb.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bk?B.bk:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bs:B.cF,q,B.R,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.i,0,q,q),B.cU,n],m)
if(p.z)o.push(new A.D(B.uo,n,q))
return new A.D(B.d3,A.x(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.TP.prototype={
S(){return new C.bge()}}
C.bge.prototype={
gc1K(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.eqz,D.eqF],l)
for(w=0;w<8;++w){v=D.a4r[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HH:B.ze
q=t===s
r=A.X(r,q?B.eK:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bl,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.by(1,B.bb,A.d(v.c,n,1,B.a2,n,n,n,B.AF,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eK,2,B.r,-1)
s=new A.o(n,n,new A.bH(p,p,p,p),new A.bg(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eH,A.x(A.a([new A.D(B.mU,new A.c6(B.aL,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.q(n,new A.dx(!0,new C.alI(v,q.d,q.e,new C.dfj(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dfk(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bBV,A.bI(D.h_i,n,new C.dfl(o,d),A.bo(B.b7,n,n,n,n,B.oS,n,n,new A.b9(A.n(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cR(new A.aY(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bGi,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nr.prototype={
ak(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.ab().ag()],x.N,x.z)},
bf8(d,e,f){return new C.nr(this.a,e,d,f)}}
C.Ij.prototype={
wV(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ij(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFG(d){var w=null
return this.wV(w,w,w,w,w,d,w,w,w,w,w,w)},
cNb(d){var w=null
return this.wV(w,w,w,w,d,w,w,w,w,w,w,w)},
bf6(d,e,f){var w=null
return this.wV(d,w,w,w,w,w,w,w,e,w,f,w)},
cNQ(d){var w=null
return this.wV(w,w,w,w,w,w,d,w,w,w,w,w)},
cNZ(d){var w=null
return this.wV(w,w,w,w,w,w,w,w,w,d,w,w)},
cN9(d){var w=null
return this.wV(w,w,w,d,w,w,w,w,w,w,w,w)},
cO0(d){var w=null
return this.wV(w,w,w,w,w,w,w,w,w,w,w,d)},
cN6(d){var w=null
return this.wV(w,w,d,w,w,w,w,w,w,w,w,w)},
cN1(d){var w=null
return this.wV(w,d,w,w,w,w,w,w,w,w,w,w)},
Gb(d){var w=null
return this.wV(w,w,w,w,w,w,w,d,w,w,w,w)},
cO8(d,e,f,g,h,i,j,k,l,m,n){return this.wV(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cKG(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bQW(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DE.geu(D.DE))
s=i==null?o:B.j.E(i,18,36)
r=l.$2("position",D.a68)
q=l.$2("frame",D.a5t)
l=l.$2("texture",D.a5p)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cO8(p,u,t,q,r,A.r8(d.h(0,"ribbon"))?A.GO(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_n.prototype={
S(){return new C.aBl(A.a([],x.I),D.Or)},
ge3(){return this.c}}
C.aBl.prototype={
Y(){var w,v=this
v.a3()
v.f=A.A9(0,1)
w=$.aw()
v.z=new A.au(B.av,w)
v.Q=new A.au(B.av,w)
v.lg()
w=v.a
C.bDR(w.c,w.d).bG(new C.dg_(v),x.fL)},
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
v.a2()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lx(s.c,s.d),$async$lg)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dfO(t,r))
t.axq()
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
gau0(){var w,v=this
if(!J.cr(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axq(){var w,v,u=this.gau0(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cfU(d){this.m(new C.dfL(this,d))
this.axq()},
NV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nr(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSd(r.c,r.d,s),$async$NV)
case 3:w=4
return A.b(t.lg(),$async$NV)
case 4:if(t.c==null||J.cr(t.d)){w=1
break}q=J.qz(t.d,new C.dfm(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dfn(t,p))
t.axq()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BF(p+1,B.cx,B.kT),$async$NV)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NV,v)},
Bl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gau0()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSd(o.c,o.d,new C.nr(s,r,q,new A.V(p,0,!1))),$async$Bl)
case 3:w=4
return A.b(t.lg(),$async$Bl)
case 4:if(t.c==null){w=1
break}t.m(new C.dfP(t))
case 1:return A.h(u,v)}})
return A.i($async$Bl,v)},
OB(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gau0()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfv(r),s,null,!0,!0,x.y),$async$OB)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDC(s.c,s.d,r.a),$async$OB)
case 4:t.m(new C.dfw(t))
w=5
return A.b(t.lg(),$async$OB)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UA(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OB,v)},
z1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bl(),$async$z1)
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
return A.b(C.RR(s,r.r,o,p,q),$async$z1)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hDn(s,r.x,r.r),$async$z1)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lx(s.c,s.d),$async$z1)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nr(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bq(r.c,r.d,l),$async$z1)
case 11:w=12
return A.b(t.lg(),$async$z1)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z1,v)},
a1m(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bl(),$async$a1m)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz_(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zH,new C.dfM(t),new C.dfN())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mL("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gR(o)
p.push(new H.mL(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hfH(o,new H.rH(s,r,"",p,new H.uY(q.d,null,null,null,null,"","","")),null),$async$a1m)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1m,v)},
Oj(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Oj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bl(),$async$Oj)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.agd,null,new C.dfr(t),s,!0,!0,!0,K.a9f,!1,!1,x.N),$async$Oj)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNb(r)
t.m(new C.dfs(t,q))
s=t.a
w=7
return A.b(C.Ss(s.c,s.d,q),$async$Oj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
XO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.agd,null,new C.dfx(t),r,!0,!0,!0,K.a9f,!1,!1,x.e),$async$XO)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dfy(t,s))
r=t.a
w=4
return A.b(C.Ss(r.c,r.d,s),$async$XO)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BF(0,B.dV,B.ny)
case 1:return A.h(u,v)}})
return A.i($async$XO,v)},
bTV(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcw()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz_(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c0Y()
if(r.e)w=D.aeW
else if(J.cr(r.d)){w=r.y
v=r.gz_(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fnY,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.amu,new C.ZF(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.f7d,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dJ.j(0.45),B.H,18)],x.V),E.wP,B.n),q,q,q,q,B.O6,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcJH(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bTx,D.fZK,r.gaOE(),q))
B.d.v(u,w)}w=A.at(A.ch(A.x(u,B.m,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.ex,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.R,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dU:B.Bf
u=A.x(A.a([new A.D(D.bD_,w,q),A.E(A.JH(v,new C.dfY(r),J.ad(r.d)+1,q,r.gcfT(),u,B.aL),1),r.bGk()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c4(q,D.YT,new A.an(B.a0,q,B.b2,B.t,A.a([D.aPM,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c0Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KF(B.e9,"AI",h.gbEc(),!0))
if(h.a.f)f.push(new C.KF(B.mh,"Cover",h.gbOR(),!1))
if(h.a.f)f.push(new C.KF(B.wJ,"Header",h.gbJR(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KF(B.uO,"Print",h.gcp0(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hH:B.j2
t=v?"Save":"Edit"
f.push(new C.KF(u,t,v?h.gcvj():new C.dfI(h),!1))}if(h.a.f)f.push(new C.KF(B.hV,"Add page",h.gaOE(),!1))
v=C.hzf(h.y.Q)
u=h.gz_(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dFm
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.km.j(0.5),1,B.r,-1)
j=A.q(g,A.X(l.a,D.kO,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bH(i,i,i,i),new A.bg(k,k,k,k),g,new A.a9(B.a6,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kO.j(0.85)
p.push(new A.by(1,B.bb,A.aA(B.c5,A.x(A.a([k,B.bG,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.alI(v,u,t+" \xb7 "+s+" "+r,new C.dfJ(h),A.A(p,B.m,g,B.e,B.i,0,g,g),g)},
Al(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Al=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bl(),$async$Al)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3g(B.d.aO(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dfo(t,p),s,null,!0,!0,x.N),$async$Al)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z1(),$async$Al)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ed(),$async$Al)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FP("Swahili (Kiswahili)",!0),$async$Al)
case 18:w=16
break
case 17:w=19
return A.b(t.cGa(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Al)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Al,v)},
ZJ(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.L(E.km.j(0.3),B.r,1),r=x.p
return new A.D(B.cw,A.aO(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wP,B.a7),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.Kv,w,w,w),A.d(g,w,w,w,w,w,w,B.AG,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dfK(d,h),w,w,w,w,w,w,w),w)},
Ed(){return this.bTo()},
bTo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ed=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfB(r),a7,null,!0,!0,x.ei),$async$Ed)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dfC(o),a7,null,!0,!0,x.H).fv(new C.dfD(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.c5(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zH[a1]
J.c5(j,i.a)}w=8
return A.b(C.ahT(a0,a7,new C.dfE(o),d,l,e,j),$async$Ed)
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
if(l!=null&&a6.a)A.a6(l,!0).eO()
l=o
l.sic($.aw())
J.aSH(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.U(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ao(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bf8(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bq(j.c,j.d,l),$async$Ed)
case 11:w=12
return A.b(r.lg(),$async$Ed)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zH[a1].a)
a5=l.cKG(j,12,a7)
l=r.a
w=15
return A.b(C.Ss(l.c,l.d,a5),$async$Ed)
case 15:if(r.c!=null)r.m(new C.dfF(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BF(0,B.dV,B.ny)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.czr("Undo",new C.dfG(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.eh,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ed,v)},
FP(d,e){return this.cGb(d,e)},
cGa(d){return this.FP(d,!1)},
cGb(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FP=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dfR(a0),k,null,!0,!0,x.H).fv(new C.dfS(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3t(m,new C.dfT(a0)),$async$FP)
case 10:w=8
break
case 9:w=11
return A.b(C.bFl(new C.dfU(a0),m,a2),$async$FP)
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
if(o!=null&&f.a)A.a6(o,!0).eO()
o=a0
o.sic($.aw())
J.aSH(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bf8(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bq(k.c,k.d,o),$async$FP)
case 12:w=13
return A.b(r.lg(),$async$FP)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.czr("Undo",new C.dfV(r,d),null),null,null,null,null,B.t,null,k,null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FP,v)},
bGk(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dfp(v):u
r=A.aG(u,u,u,u,A.X(D.bPe,s?D.kO:B.aV,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.ws,B.Gh,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOr(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kO.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dfq(v):u
return A.bm(!0,new A.D(D.bCO,A.A(A.a([r,s,A.aG(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kO:B.aV,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_r.prototype={
S(){return new C.bgD(new A.au(B.av,$.aw()))}}
C.bgD.prototype={
ga2u(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbS1(){switch(this.ga2u()){case"cover":var w=D.d7_
break
case"book":w=D.d2n
break
default:w=D.dxW
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.km.j(0.5),m=x.p,l=A.A(A.a([D.dFn,B.at,D.bIy,A.aG(p,p,p,p,B.lo,p,p,p,new C.dhM(d),p,p,p,p,p,p)],m),B.m,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jt(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dhN(q),q.ga2u()==="page",p,p,p,p))
if(q.a.d)k.push(A.jt(p,p,p,D.fUh,p,new C.dhO(q),q.ga2u()==="book",p,p,p,p))
k.push(A.jt(p,p,p,D.fH4,p,new C.dhP(q),q.ga2u()==="cover",p,p,p,p))
k=A.bW(B.bH,k,B.bt,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),q.d,p,p,p,p,p,2,A.bs(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kE,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbS1(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.Ks,p,p,p)
w.push(A.mZ(p,B.c.j(0.08),r,B.hf,new C.dhQ(q,s),p,p,p,p))}return A.eR(p,E.BL,A.ch(A.x(A.a([l,B.X,D.fXB,B.am,k,B.af,j,B.Q,A.bW(B.bH,w,B.bt,p,6,6),B.aC,A.dh(D.bTu,D.fYo,new C.dhR(q,d),A.bo(B.b7,p,p,p,p,B.oS,p,p,new A.b9(A.n(16),B.a1),p,p,p)),B.aw,D.fSw],m),B.E,p,B.e,B.P,0,B.p),B.t,p,B.y,p,B.fq,p,p,B.ah),p,p,p,D.amb,B.da,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_p.prototype={
S(){return new C.aBo(A.a([],x.gA))},
ge3(){return this.c}}
C.afA.prototype={}
C.aBo.prototype={
Y(){this.a3()
this.lg()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.RW(p.c,p.d),$async$lg)
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
return A.b(C.bDR(r.c,q),$async$lg)
case 6:j=e
i=J
w=7
return A.b(C.Lx(t.a.c,q),$async$lg)
case 7:m.push(new l.afA(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dge(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
bap(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QM(d,e){return this.chr(0,e)},
chr(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cd(A.eb(new C.dgd(u,e),!0,null,x.y)),$async$QM)
case 2:t=g
w=3
return A.b(u.lg(),$async$QM)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aTA)
return A.h(null,v)}})
return A.i($async$QM,v)},
FR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aTw)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahb(s.c,s.d),$async$FR)
case 5:q=e
w=6
return A.b(t.lg(),$async$FR)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QM(0,B.d.fe(t.d,new C.dgi(q))),$async$FR)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RR(p,s.f,r,n,o),$async$FR)
case 10:m=e
w=11
return A.b(t.lg(),$async$FR)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aTA)
case 1:return A.h(u,v)}})
return A.i($async$FR,v)},
Qd(d,e){return this.ct0(0,e)},
ct0(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dgh(t,e),s,null,!0,!0,x.y),$async$Qd)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3F(s.c,s.d,e.a),$async$Qd)
case 4:w=5
return A.b(t.lg(),$async$Qd)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qd,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bGn(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.L(E.km.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fF(0.7142857142857143,A.q(n,A.x(A.a([D.dFo,B.af,D.epB,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kO.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.ba,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcJD(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.L(E.km.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c0m,B.f,n,n,new A.o(B.w.j(0.3),n,A.L(E.km.j(0.6),B.r,1),n,n,n,B.a7),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgj(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.w.j(0.3)
p=A.L(E.km.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bIW,A.q(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fmY,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h8,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c6i,B.n),n,n,n,Ax.NR,D.bAN,n,n,n)
if(o.e)k=D.aeW
else k=k.length===0?D.bbK:A.cs(new C.dgk(k))
return A.c4(n,D.YT,new A.an(B.a0,n,B.b2,B.t,A.a([D.aPM,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGn(d){var w,v,u=this,t=null,s=u.bap(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.ev(B.A,new A.a5(300,420,new C.ZF(d.b,s,r,t),t),B.f,B.dz),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.q(t,D.c_G,B.f,t,t,new A.o(B.w.j(0.55),t,A.L(B.aV,B.r,1),t,t,t,B.a7),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgb(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fmy,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fF(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.Q,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kO.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgc(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KF.prototype={}
C.ZF.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zH,new C.cOD(m),new C.cOE()),j=m.c,i=D.DE.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mp:B.ba
v=new C.cOF(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.emh,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.bdQ(j.x,h,l),B.ay),0,0,0),A.ao(0,A.q(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a6,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bg(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amv,8,0.85,2.2),v.$4(D.bFJ,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amv,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bFF,A.b4(l,l,l,new C.bdH(h,l),B.ay),l),0,0,0))
r=A.X(D.aBi[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayv,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aC,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bG9,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aIm(l),D.fc6),l,l,l,46,0,l))
return A.q(l,A.bx(D.ady,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.ady,i,new A.a9(B.aA,B.aF,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdQ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e4()
g.d_(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.J()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.p(0,t),new A.p(u,t),w)
$.S()
s=A.J()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.p(r,0),new A.p(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.S()
l=new A.ap(B.S,B.N,B.U,B.V,B.T)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.N(new A.p(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
l=A.a([],n)
j=new A.aF(m.r,B.ai,null,null,l)
l.push(new A.aZ(v,q))
j.aa()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.aa()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.aa()
m=new A.bv()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.aa()
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.S()
w=A.J()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.N(new A.p(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.J()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.N(new A.p(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bdH.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.J(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bB
for(w=e.a,v=e.b,v=[D.f1I,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(k,B.ai,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.aa()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.aj(l)
n.aa()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.aj(s)
n.aa()
d.af(n,j)
s=new A.ap(B.S,B.N,B.U,B.V,B.T)
s.r=i.j(0.9).gp(0)
d.N(new A.p(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uJ.prototype={}
C.ZY.prototype={
S(){return new C.bdO()}}
C.bdO.prototype={
gop(){var w=this.d
return w===$?this.d=this.a.c:w},
gz_(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b5,B.aP),$.aw())}return v},
gaCS(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b5,B.aP),$.aw())}return v},
gasy(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b5,B.aP),$.aw())}return v},
t(){var w=this,v=w.gz_(0),u=v.T$=$.aw()
v.P$=0
v=w.gaCS()
v.T$=u
v.P$=0
v=w.gasy()
v.T$=u
v.P$=0
w.a2()},
atb(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jt(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d7b(this,f,u),e===u,s,s,s,s))}return A.bW(B.bH,r,B.bt,s,6,8)},
ayT(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mz,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gop(),a0=f.gz_(0),a1=a0.a.a,a2=f.gaCS(),a3=a2.a.a,a4=f.gasy(),a5=d.bf6(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,A.ev(B.A,new A.a5(270,370,new C.ZF(a5,d,f.a.e,e),e),B.f,B.dz),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.ayT("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7A(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.ayT("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7B(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zH[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aV
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.o(e,e,new A.bH(o,o,o,o),e,e,new A.a9(B.aA,B.aF,B.x,t.c,e,e),B.a7),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.aA(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.R,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7C(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bW(B.bH,v,B.bt,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eK:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.X(D.aBi[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bH(o,o,o,o),new A.bg(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7D(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bW(B.bH,q,B.bt,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.ayT("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7E(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vz,e,e,e)
m=A.a([],w)
for(l=D.DE.gdO(D.DE),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eK:B.aV
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.o(j,e,new A.bH(o,o,o,o),e,e,e,B.a7),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.aA(e,A.x(A.a([j,B.bG,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.R,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7F(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bW(B.bH,m,B.bt,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vz,e,e,e)
k=f.gop()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cR(new A.aY(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fRY,B.af,d,B.aR,a0,B.X,a2,B.aC,D.fYa,B.Q,v,B.aC,D.fS6,B.Q,q,B.aC,a4,B.aC,p,B.Q,m,B.aC,l,A.kT(e,9,""+B.j.V(f.gop().f),36,18,new C.d7G(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vz,e,e,e),B.am,f.atb(D.a68,f.gop().r,new C.d7H(f),D.dB8),B.af,A.d("BORDER",e,e,e,e,e,e,M.vz,e,e,e),B.am,f.atb(D.a5t,f.gop().w,new C.d7I(f),D.dBe),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vz,e,e,e),B.am,f.atb(D.a5p,f.gop().x,new C.d7K(f),D.dCK),B.am,A.iP(e,B.b7,e,B.ag,e,new C.d7L(f),e,e,e,D.fMb,f.gop().z),B.by,A.bI(D.fQE,e,new C.d7M(f,a6),A.bo(B.b7,e,e,e,e,B.oS,e,e,new A.b9(A.n(16),B.a1),e,e,e))],w),e,e,A_.am1,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIm.prototype={
a4(d,e){var w,v,u,t=new A.aF($.S().r,B.ai,null,null,A.a([],x.v))
t.D(new A.aZ(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bv())
u=A.J()
u.sav(D.c6Y.aJ(0,new A.a3(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bja.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.J()
w.sav(D.c5Z.aJ(0,new A.a3(0,0,a2,a3)))
a4.aq(new A.a3(0,0,a2,a3),w)
v=B.j.cK(a1/112)
u=new A.e4()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d6Z[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bn(i,B.hv)
g=new A.ap(B.S,B.N,B.U,B.V,B.T)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a9(B.a6,B.a9,B.x,A.a([f,k,e],w),d,d).aJ(0,i))
a4.am(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ap(B.S,B.N,B.U,B.V,B.T)
e.r=E.km.j(0.55).gp(0)
a4.aq(new A.a3(g,j,h,j+2),e)
e=new A.ap(B.S,B.N,B.U,B.V,B.T)
e.r=E.km.j(0.4).gp(0)
a4.aq(new A.a3(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.sav(D.c5l.aJ(0,new A.a3(0,r,a2,q)))
a4.aq(new A.a3(0,r,a2,q),p)
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=B.w.j(0.5).gp(0)
p.y=B.kW
a4.aq(new A.a3(0,q,a2,q+14),p)}t=A.J()
t.r=D.bfx.j(0.72).gp(0)
a4.aq(new A.a3(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.J()
a3.sav(new A.c0(B.A,0.5,B.x,d,0,A.a([D.bnI.j(0.22),B.L],w),d,d).aJ(0,A.bX(new A.p(t,a1),a0)))
a4.N(new A.p(t,a1),a0,a3)},
aE(d){return!1}}
C.bbZ.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.l3(new A.o(A.ar(D.kO,D.bsN,w/4),o,new A.bH(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LF,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLm,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.q(o,o,B.f,o,o,new A.o(E.km.j(0.6),o,o,new A.bg(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.q(o,A.x(t,B.m,o,B.qR,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b3X,u,D.c6W,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.du,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aIm(o),D.fc1),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWb(p.y,r,L.iY,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eJ,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fBc,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eJ,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.frT,!0,B.a5,B.Az,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fB4,o,o,o),B.aw,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.Q,A.A(A.a([A.E(A.q(o,o,B.f,D.G1.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fG,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.G1.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.G1.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aC],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.YU(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fv4,B.a.aB(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iY.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ch(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i9,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.bx(B.LF,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bFb,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,A.c3(o,new A.o(o,o,o,o,o,new A.a9(B.a6,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.LF,v,D.c7s,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.alJ.prototype={
S(){return new C.alK(new A.eA(0,$.aw()),new C.bSK(),new C.am1(),D.hyJ,null,null)},
gd1(){return this.d}}
C.a1E.prototype={
a7(){return"_Step."+this.b}}
C.alK.prototype={
gCr(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDN(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.MU(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTR(){var w=this.ghb(0)
return w.gzk()==null?"Babu":B.a.i(w.gzk().b)},
Y(){var w,v=this
v.a3()
w=v.ghb(0).gzk()
w=w==null?null:w.c
v.r.b=w===D.oq
w=v.pZ(new C.bR5(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2r("Come closer, my children. I am "+v.gTR()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bvN()},
a2r(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.de(D.akE,new C.bR_(w))},
bs9(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bR8(v))},
adM(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bs1(){return this.b9X()},
b9X(){var w=this,v=w.gCr()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bR0(w))
w.a2r(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.m8,new C.bR1(w))},
cKN(){var w=this
w.m(new C.bR4(w))
w.a2r(w.gCr()[w.as].a)},
KY(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acI)return
w=p.gCr()
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
t.r=s.a+1.5}q=new A.e4()
q.d_(v*7+d)
p.m(new C.bR3(p,d,u,q))
p.a2r(u?D.dmz[q.aw(4)]+" "+w[p.as].d:D.dj8[q.aw(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCr()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bG0(t.at,t.ay,p)
t.m(new C.bR6(t,s))
t.a2r(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BM(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BN(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bR7())
w=1
break
case 4:++t.as
t.b9X()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.XZ,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.em(A.b4(v,v,v,new C.aWg(u,w.r,w.w,u),B.ay),v),0,0,0),A.bm(!0,A.x(A.a([w.cbu(0),B.b3,w.bRc()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cbu(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.PM,s,s,s,new C.bR2(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCr().length;++w){v=t.as
if(w<v||t.Q===D.b0j)v=B.cN
else v=w===v?B.c:B.aV
u=new A.aP(4,4)
p.push(A.q(s,s,B.f,s,s,new A.o(v,s,s,new A.bg(u,u,u,u),s,s,B.n),s,7,s,D.bAw,s,s,s,22))}p=A.E(A.x(A.a([D.fIX,A.A(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.L(B.fw,B.r,1)
return new A.D(D.bGm,A.A(A.a([r,p,A.q(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.ix,s,s,s),B.f,s,s,new A.o(B.aT,s,u,v,s,s,B.n),s,s,s,s,B.h8,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bRc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzk()
if(h==null)w=1
else w=h.c===D.oq?0:1
v=j.dx
u=j.db
t=D.qe.j(0.96)
s=A.n(22)
r=A.L(B.cN,B.r,3)
q=A.b4(i,i,i,new C.boJ(w,i),B.ay)
p=A.d(j.Q===D.acI?j.gTR()+" asks":"Elder "+j.gTR(),i,i,i,i,i,i,D.aUN,i,i,i)
o=j.db
o=B.a.aB(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c5,A.A(A.a([new A.a5(62,62,q,i),B.at,A.E(A.x(A.a([p,B.bG,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aV1,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbs8(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a9S("Sit down by the fire",j.gbs0()),i,i,i)
break
case 1:v=A.at(j.a9S("Ask me, Elder",j.gcKM()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCr()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.d(u[m],i,i,i,i,i,i,D.aUY,B.K,i,i),B.f,i,D.aea,new A.o(D.ajA,i,new A.bH(l,l,l,l),new A.bg(q,q,q,q),i,i,B.n),i,i,i,i,V.wg,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bQX(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bW(B.bH,v,B.bt,i,8,8)
break
case 3:v=j.fr
u=v?B.kt:Ak.apx
u=A.X(u,v?B.en:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.en:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCr().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.a9S(v,j.gql(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCr().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVg,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQt(u)
q=C.aQt(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ab7,i,i,i))}v.push(B.Q)
v.push(j.a9S("Back to the games",new C.bQY(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aCR,i,B.n),i,i,i,B.yw,B.bh,i,i,i)},
a9S(d,e){var w=null,v=A.n(16),u=A.L(B.cN,B.r,2)
return A.aA(w,A.q(w,A.d(d,w,w,w,w,w,w,A2.Kv,w,w,w),B.f,w,w,new A.o(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bE4,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.boJ.prototype={
a4(d,e){Y.fUE(d,e.ej(B.H),e.gdA()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aBm.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bSK.prototype={}
C.t9.prototype={}
C.boK.prototype={}
C.am1.prototype={
Mr(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iaD(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWg.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zj(l.d.Mr(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAg(d,j)
l.bPL(d,j)
l.cIy(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.og(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.J()
p=x.O
o=x.n
q.sav(A.w4(B.H,r,A.a([D.brB.j(0.55*s),F.N7.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.H,r,q)
t.restore()
n=A.a([new A.y(528,new C.bSC(l,d,j,i)),new A.y(540,new C.bSD(l,d,j,i)),new A.y(546,new C.bSE(l,d,j,i)),new A.y(574,new C.bSF(l,d,j,i)),new A.y(612,new C.bSG(l,d,j,i)),new A.y(650,new C.bSH(l,d,j,i)),new A.y(656,new C.bSI(l,d,j,i))],x.E)
B.d.aZ(n,new C.bSJ())
for(m=0;m<7;++m)n[m].b.$0()
l.bGG(d,j,i)
l.bTm(d,j)
t.restore()
$.S()
t=A.J()
t.sav(A.w4(new A.p(w/2,v*0.6),e.gao0()*0.75,A.a([B.L,D.bfr],p),A.a([0.55,1],o),B.x,k,k,0))
d.aq(new A.a3(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cAg(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e4()
h.d_(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ap(B.S,B.N,B.U,B.V,B.T)
r.r=t.gp(0)
d.N(new A.p(v*450,20+u*300),0.8+s*1.1,r)}q=B.j.F(e,17)/1.2
if(q<1){p=new A.p(60+q*220,70+q*90)
d.ah(p,p.aK(0,D.elQ),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aF(l.r,B.ai,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.aa()
j=r-3
r=new A.c8(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.aa()
s=new A.c8(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.aa()
s=new A.ap(B.S,B.N,B.U,B.V,B.T)
s.b=B.aa
s.c=1.6
s.r=D.bi8.gp(0)
s.d=B.bB
s.e=B.dO
d.af(l,s)}},
bPL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.azO[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bB(new A.p(p,m),n*0.74,q*0.5)
k=Ac.yf.j(v)
$.S()
j=new A.ap(B.S,B.N,B.U,B.V,B.T)
j.r=k.gp(0)
d.bY(l,j)
q=A.bB(new A.p(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=Q.xV.j(u).gp(0)
d.bY(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ap(B.S,B.N,B.U,B.V,B.T)
o.r=D.agZ.j(0.16*(1-h)).gp(0)
d.N(new A.p(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cIy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDb(d,D.elM,0.9,e,D.huy,!1,!1,D.b0g,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ai,g,g,A.a([],v))
u.D(new A.aZ(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bv())
t=A.J()
t.r=D.aiU.gp(0)
d.af(u,t)
C.bDb(d,D.elO,0.95,e,D.hut,!1,!1,D.b0h,1,!0)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.D(new A.aZ(417,510))
t.D(new A.c8(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c8(431,553,421,548))
t.D(new A.bv())
u=A.J()
u.r=F.FJ.gp(0)
d.af(t,u)
u=A.bB(D.elN,8,28)
t=A.J()
t.r=D.btS.gp(0)
d.bY(u,t)
C.bDb(d,new A.p(-30+B.j.F(e/26,1)*510,492),0.82,e,D.huz,!0,!1,D.WU,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bY(A.bB(new A.p(s+q*16,r-6),16,11),C.iw(D.aiK,1.8))
u=q<0
C.bDb(d,new A.p(s-q*6,r),0.62,e,D.huB,!1,u,D.WU,2.2,!1)
C.bDb(d,new A.p(s-q*32,r+4),0.58,e+1,D.hux,!1,u,D.WU,2.2,!1)
this.bW5(d,D.elr,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bB(new A.p(o,n),8,11)
k=p===1
j=k?D.aiG:D.aji
i=new A.ap(B.S,B.N,B.U,B.V,B.T)
i.r=j.gp(0)
d.bY(l,i)
l=k?D.aiG:D.aji
k=new A.ap(B.S,B.N,B.U,B.V,B.T)
k.r=l.gp(0)
d.N(new A.p(o+5,n+(-3+m)),2.6,k)
k=new A.ap(B.S,B.N,B.U,B.V,B.T)
k.b=B.aa
k.c=1
k.r=B.ax.gp(0)
k.d=B.bB
k.e=B.dO
d.ah(new A.p(o+7.5,n+(-2+m)),new A.p(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ap(B.S,B.N,B.U,B.V,B.T)
k.b=B.aa
k.c=1
k.r=B.ax.gp(0)
k.d=B.bB
k.e=B.dO
d.ah(new A.p(o,n+4),new A.p(o,n+8),k)}h=e<f.f
u=A.bB(D.a87,15+Math.sin(e*2)*0.8,40)
t=A.J()
t.r=D.ahm.gp(0)
d.bY(u,t)
u=A.bB(D.a87.a5(0,new A.p(-14,h?-9:-2)),12,15)
t=A.J()
t.r=D.bkb.gp(0)
d.bY(u,t)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.D(new A.aZ(130,592-(h?16:6)))
t.D(new A.aq(134,592-(h?22:9)))
t.D(new A.aq(138,592-(h?16:6)))
t.D(new A.bv())
u=A.J()
u.r=D.bkl.gp(0)
d.af(t,u)
u=D.a87.a5(0,new A.p(-17,h?-9:-2))
t=A.J()
t.r=B.i7.gp(0)
d.N(u,1.1,t)
v=new A.aF(w,B.ai,g,g,A.a([],v))
v.D(new A.aZ(168,590))
w=Math.sin(e*8)
v.D(new A.c8(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahm,3.5))},
bW5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.p(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.b=B.aa
m.c=2
m.r=D.Ya.gp(0)
m.d=B.bB
m.e=B.dO
d.ah(new A.p(u+o,s),new A.p(u+(o+n*1.5),q),m)}w=A.bB(k,17,32)
v=$.S()
r=A.J()
r.r=D.FH.gp(0)
d.bY(w,r)
r=A.bB(k.a5(0,D.ekT),7,26)
w=A.ar(D.FH,B.w,0.12)
w.toString
q=A.J()
q.r=w.gp(0)
d.bY(r,q)
v=new A.aF(v.r,B.ai,null,null,A.a([],x.v))
v.D(new A.aZ(u+13,t-3))
v.D(new A.aq(u+22,t-8+l))
v.D(new A.aq(u+20,t+l-0.5))
v.D(new A.aq(u+12,s))
v.D(new A.bv())
s=A.J()
s.r=D.FH.gp(0)
d.af(v,s)
s=A.bB(k.a5(0,new A.p(24,-7+l)),9,12)
v=A.J()
v.r=D.FH.gp(0)
d.bY(s,v)
v=-11+l
d.ah(k.a5(0,new A.p(22,v)),k.a5(0,new A.p(21,-17+l)),C.iw(D.Ya,1.6))
d.ah(k.a5(0,new A.p(26,v)),k.a5(0,new A.p(28,-16+l)),C.iw(D.Ya,1.6))
v=k.a5(0,new A.p(26,-8+l))
s=A.J()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a5(0,new A.p(26,-3+l)),k.a5(0,new A.p(26,1+l)),C.iw(D.bn2,1.4))
d.ah(k.a5(0,D.enP),k.a5(0,new A.p(-19,-7+Math.sin(f*7)*2)),C.iw(D.FH,2.4))},
bTk(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bB(new A.p(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ap(B.S,B.N,B.U,B.V,B.T)
t.r=D.bsz.gp(0)
a6.bY(u,t)}}u=A.bB(D.a8a.a5(0,B.cA),17,52)
$.S()
t=A.J()
t.r=D.beZ.gp(0)
a6.bY(u,t)
t=A.bB(D.a8a.a5(0,B.cA),12,44)
u=D.biw.j(0.6+0.3*Math.sin(a7*6))
s=A.J()
s.r=u.gp(0)
a6.bY(t,s)
for(r=0;r<3;++r){v=D.diB[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ap(B.S,B.N,B.U,B.V,B.T)
o.b=B.aa
o.c=7
o.r=D.FV.gp(0)
o.d=B.bB
o.e=B.dO
a6.ah(new A.p(u+t*24,579+s*4),new A.p(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Bs.j(0.6)
n=new A.ap(B.S,B.N,B.U,B.V,B.T)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bB
n.e=B.dO
a6.ah(new A.p(u+o*24,579+(p*4-2)),new A.p(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.eYT,D.eZs,D.f_x,D.f_R,D.f_v]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bpZ,D.bmo,D.bs0][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aF(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.aa()
g=a0+d*0.6
a3=new A.kP(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.aa()
g=new A.kP(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.aa()
g=new A.bv()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.aa()
g=new A.ap(B.S,B.N,B.U,B.V,B.T)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajg.j((1-a5)*0.9)
$.S()
o=new A.ap(B.S,B.N,B.U,B.V,B.T)
o.r=p.gp(0)
a6.N(new A.p(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.agZ.j(0.1*(1-a5))
$.S()
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=q.gp(0)
a6.N(new A.p(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTm(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bu1.j(0.18*p)
$.S()
n=new A.ap(B.S,B.N,B.U,B.V,B.T)
n.r=o.gp(0)
d.N(new A.p(r,q),5,n)
n=new A.ap(B.S,B.N,B.U,B.V,B.T)
n.r=D.bnN.j(0.9*p).gp(0)
d.N(new A.p(r,q),1.4,n)}},
c53(d,e){switch(d){case 0:return e.b?D.huu:D.b_P
case 1:return e.b?D.huA:D.b_N
case 2:return D.b_M
case 3:return D.b_L
case 4:return D.b_O
default:return D.b_Q}},
aD5(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R4(d,e,f,g){var w,v=this,u=D.a5B[e],t=v.c53(e,g),s=new C.boK(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5B[e],l=e===0
m=B.j.E(((l?D.aLf:D.aLk).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8e
s.as=D.E4
if(l){s.a=o?v.aD5(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.p(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.p(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.E4
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.p(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.p(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.p(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.p(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.el0
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eml
if(e===4)s.as=new A.p(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.p(-3-m,p)
s.as=new A.p(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.eoL
s.as=D.aLx}if(e===2&&g.x!=null&&f<g.y){s.a=v.aD5(f,5)
s.b=0.4
s.as=new A.p(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aD5(f,e*3)
s.b=0.5
s.c=0.4}}C.hxT(d,u.a,u.b*1.2,t,s,f,e,null)},
bGG(d,e,f){var w=new C.bSB(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdd(d){return this.c}}
C.afJ.prototype={
a7(){return"_Stand."+this.b}}
C.adI.prototype={}
C.lp.prototype={}
C.bRl.prototype={
bBh(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G6(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRm())
return r},
are(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aMN(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amr(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzk(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRn(this))
return B.d.gH(w)}}
C.au2.prototype={}
C.zw.prototype={}
C.akD.prototype={
gBZ(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bM9(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MD.prototype={
gapg(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
if(t.gBZ(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
d10(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapg(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.K)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lp(B.a.i(s.a),p,B.d.cq(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bad.prototype={}
C.a9N.prototype={}
C.bht.prototype={}
C.afH.prototype={}
C.ajW.prototype={
S(){return new C.ajX(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ajX.prototype={
gMK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDN(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbai(){var w,v=this,u=v.e
if(u===$){w=v.pZ(v.gcbw())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Y(){this.a3()
this.gbai().fX(0)},
t(){this.gbai().t()
this.bvI()},
fX(d){this.m(new C.bKk(this))},
cbx(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKf())},
b8E(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMK()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bht(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bt(w,new C.bKl())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c7U()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMK()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asK(v,0.8,B.cN)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asK(m.cy,0.8,G.nj)
m.aZg("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asK(q,0.88,D.lB)
p=m.gMK()[m.x]
n=p.c
if(u===n){m.aZg("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asK(d,e,f){var w,v,u,t=new A.e4()
t.d_(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.afH(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZg(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qe()}},
c7U(){var w=this
if(w.x+1>=w.gMK().length){w.Qe()
return}++w.x
w.b8E()},
Qe(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMK().length
r=C.bG0(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKd())
w=2
return A.b(C.BM(u.a.d,r),$async$Qe)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BN(t.d,t.c.a,"catch",u.z),$async$Qe)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKe())
return A.h(null,v)}})
return A.i($async$Qe,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cbv()
else w=v.ch?v.cby():A.at(new A.D(B.ex,A.x(A.a([D.aWc,B.Q,D.fKA,B.X,D.fQJ,B.dW,C.up("Play",v.geY(v),B.cN,B.hs,D.fv)],x.p),B.m,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tB("Calabash Catch",w,B.f5,u)},
cby(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hI:B.Hr
p.push(A.X(u,v?B.az:B.bV,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMK()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aUL,r,r,r))
p.push(B.bd)
v=A.n(14)
p.push(A.q(r,A.d(""+s.z,r,r,r,r,r,r,B.ix,r,r,r),B.f,r,r,new A.o(B.bz,r,r,v,r,r,B.n),r,r,r,r,B.GF,r,r,r))
p=A.A(p,B.m,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.L(B.cN,B.r,3)
return A.x(A.a([new A.D(D.bBQ,p,r),A.q(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fuX,B.K,r,r),B.f,r,r,new A.o(D.qe,r,t,v,r,r,B.n),r,r,r,B.f2,B.bh,r,r,1/0),B.am,A.E(A.cs(new C.bKj(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
cbv(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pR,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMK().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vj,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bcr,u,t,B.aR,new C.Il(s,r,w.cx,v),B.aR,A.at(C.up("Back to the games",new C.bKc(w),B.cN,B.k4,D.fv),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bcE.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.J()
a3.sav(A.jw(B.H,new A.p(0,a0),D.d0W,G.aA5,B.x,e))
a4.aq(new A.a3(0,0,a1,0+a0),a3)
a3=A.J()
a3.r=G.Nb.gp(0)
a4.N(new A.p(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aF(a2.r,B.ai,e,e,w)
a2=a0*0.7
v.D(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.aa()}v.D(new A.aq(d,a0))
v.D(new A.aq(0,a0))
a2=$.S()
w=A.J()
w.r=D.bjq.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aF(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.D(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.D(new A.c8(r-14,t,r-10,s))
a2.D(new A.aq(r+10,s))
a2.D(new A.c8(r+14,t,r+26,w))
a2.D(new A.bv())
w=A.J()
w.r=D.ag1.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cmN[q]
s=new A.ap(B.S,B.N,B.U,B.V,B.T)
s.r=D.ag1.gp(0)
s.c=7
s.d=B.bB
a4.ah(new A.p(r,a2),new A.p(r+p*46,w),s)
s=new A.ap(B.S,B.N,B.U,B.V,B.T)
s.r=D.afm.gp(0)
a4.N(new A.p(r+p*50,t),18,s)}a2=a0*0.88
w=A.J()
w.r=D.bkj.gp(0)
a4.aq(new A.a3(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ap(B.S,B.N,B.U,B.V,B.T)
t.r=D.ahE.gp(0)
t.c=2
a4.ah(new A.p(w,a1),new A.p(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.K)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bB(new A.p(u,s),12,54)
$.S()
l=new A.ap(B.S,B.N,B.U,B.V,B.T)
l.r=D.lB.j(0.6).gp(0)
a4.bY(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=D.agJ.gp(0)
a4.N(D.ekf,14,m)
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=D.bp_.gp(0)
m.c=4
m.d=B.bB
a4.ah(D.ekg,D.eln,m)
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.sav(new A.alu(D.enw,46,D.d9q,B.Dn,B.x,e,e,0))
a4.N(B.H,34,m)
m=A.bB(D.enD,8,12)
l=new A.ap(B.S,B.N,B.U,B.V,B.T)
l.r=B.c.j(0.35).gp(0)
a4.bY(m,l)
k=new A.iG(new A.en(n.c,e,e,B.cH,e,e,e,e,e,e,D.fsO),B.K,B.bW,new A.jf(1),e,e,3,e,B.bX,e,B.ct)
k.o5(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bn(A.bB(B.cL,m.gba(m)+8,l),B.fI)
l=new A.ap(B.S,B.N,B.U,B.V,B.T)
l.r=D.qe.gp(0)
a4.am(j,l)
l=new A.ap(B.S,B.N,B.U,B.V,B.T)
l.r=D.lB.gp(0)
l.b=B.aa
l.c=1.5
a4.am(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.p(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
Y.Bc(a4,new A.p(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dJ,F.mP,!1,(w+1)/2)
h=A.bB(new A.p(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aF($.S().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.D(new A.aZ(w,a2))
t=h.c
a3.D(new A.aq(t,a2))
s=h.d
a3.D(new A.aq(t-8,s))
a3.D(new A.c8(h.gbF().a,s+8,w+8,s))
a3.D(new A.bv())
m=A.J()
m.r=D.Z_.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=D.Bs.gp(0)
m.c=1.4
a4.ah(new A.p(t,a2),new A.p(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.J()
s.r=G.nj.gp(0)
a4.aq(new A.a3(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.J()
s.r=D.bjw.gp(0)
a4.bY(new A.a3(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.K)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=g.e.j(B.j.E(s,0,1)).gp(0)
a4.N(new A.p(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.ft(e,B.ct,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cN.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,K.Dh,e,e),"+"+a2),B.a5,B.bW,e,B.dA,B.bX)
k.eb()
k.a4(a4,new A.p(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.Qy.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBk(w.c,w.f,v),B.ay),s=A.n(10),r=A.L(B.bF,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cU,A.q(v,A.d(w.d,v,1,B.a2,v,v,v,D.flr,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mV,v,v,v)],x.p),B.m,v,B.e,B.P,0,B.p),v)},
gZ(d){return this.e}}
C.aBk.prototype={
a4(d,e){var w=e.ej(B.H),v=e.gdA(),u=this.c?0.8:0
return Y.fUE(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.azP.prototype={}
C.auE.prototype={
S(){return new C.auF(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auF.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hD7(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaF8(){var w=this.z
return w===$?this.z=this.Xh(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
Xh(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azP(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azP(v[t],u[t],-1))
v=new A.e4()
v.d_(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.gow()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qC()}this.bwa()},
cQT(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaF8()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cpG(r,e,w,v))
A.cz(B.lH,new C.cpH(r))
return}++r.r
u=A.bl(null,B.hE,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cpI(r,d,e,w,v))
u.cr(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.cpJ())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cpK(t,r))
w=5
return A.b(C.BM(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BN(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cpL())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.gow()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qC()}o.a8(0)
t.m(new C.cpM(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pR,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vj,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tB(q,A.cl(A.a([D.aeU,w,v,B.aR,new C.Il(u,t,r.ch,p),B.aR,A.at(C.up("Back to the games",new C.cpC(d),B.cN,B.k4,D.fv),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f5,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tB(q,new A.D(B.ur,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aUG,B.K,p,p),A.E(A.cs(new C.cpD(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f5,p)}}
C.bc7.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cPH(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a5(0,B.Jn)
$.S()
w=A.J()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.ek2)
u=A.J()
u.r=B.oh.j(0.5).gp(0)
u.c=10
u.d=B.bB
b6.ah(new A.p(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dV.aC(0,B.j.E(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aF(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.aa()
o=new A.c8((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.aa()
if(m<1)for(o=new A.aF(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),i=new A.rr(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jE(b1));--h
g=new A.BK(i,h)
f=0
for(;;){i.iw()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.iw()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.S()
a1=new A.ap(B.S,B.N,B.U,B.V,B.T)
a1.r=B.aV.gp(0)
a1.b=B.aa
a1.c=3
b6.af(new A.aF(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aF(l,j.b,j.c,b0,A.bp(k,!0,r)),n=A.a([],q),k=new A.rr(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jE(b1));--a0
k.iw()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ap(B.S,B.N,B.U,B.V,B.T)
a4.r=D.G7.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bB
b6.af(new A.aF(l,a2,b0,new A.cu([new A.BK(k,a0),0,a1*m,!0]),a3),a4)
k.iw()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iw()
a5=n[a0].Dc(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bB(new A.p(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ap(B.S,B.N,B.U,B.V,B.T)
a3.r=B.b9.gp(0)
b6.bY(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iG(D.fkV,B.a5,B.bW,new A.jf(1),b0,b0,b0,b0,B.bX,b0,B.ct)
a8.eb()
a8.a4(b6,new A.p(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.ayB.prototype={
S(){return new C.ayC(A.aR(x.S))},
gd1(){return this.d}}
C.ayC.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hE1(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Y(){this.a3()
this.b8N()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b8N(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.de(B.rK,new C.cEE(this))},
bpK(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.m(new C.cEM(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cEN(v,d))
A.cz(B.iJ,new C.cEO(v))}},
cWl(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.m(new C.cEP(w))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkR()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cEQ(t,s))
w=5
return A.b(C.BM(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BN(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cER())
w=1
break
case 4:t.m(new C.cES(t))
t.b8N()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.pR,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vj,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tB(a1,A.cl(A.a([D.bcD,w,v,B.aR,new C.Il(u,t,a0.ax,a2),B.aR,A.at(C.up("Back to the games",new C.cEG(a3),B.cN,B.k4,D.fv),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f5,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KD,B.K,a2,a2),B.X,A.at(A.lz(new C.cEH(a0,r),a2,B.b4,B.hE,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aC],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cN,2,B.r,-1)
k=o+1
w.push(new A.r_(new A.bq(0,1,u),new C.cEI(),A.q(a2,new A.c6(B.aL,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qA(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nU,a2,a2,a2),D.lB,a2,12,a2),B.at,new A.by(1,B.bb,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fxw,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qe,a2,new A.bH(l,l,l,l),new A.bg(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cw,B.bh,a2,a2,a2),B.b4,B.iJ,a2,new A.bP("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.fYA,a2,a2,!0,a2,a2,a2,a0.gcWk(),a2,a2),a2,a2,a2))
w.push(B.Q)
if(a0.as){u=D.lC.j(0.2)
q=A.n(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fA,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.x(A.a([m,B.X,C.up(v,a0.gql(a0),B.cN,B.jD,D.fv)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bE,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dr:B.cN.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.q(0,o)?B.ff:B.cN,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xb:a2
t.push(new A.r_(new A.bq(0,i,u),new C.cEJ(),A.aA(a2,A.q(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ae2,new A.o(h,a2,new A.bH(l,l,l,l),new A.bg(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jm,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cEK(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b4,B.ma,a2,new A.bP("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fM,t,B.bt,a2,10,10))}return new C.tB(a1,A.cl(w,a2,a2,B.alD,a2,a2,B.ah,!1),B.f5,a2)}}
C.azA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aGM.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a2()}}
C.afv.prototype={
aqM(d){},
ari(){var w=this,v=w.pZ(new C.f5U(w))
v.fX(0)
w.LR$!==$&&A.aQ()
w.LR$=v}}
C.aKy.prototype={
gbmb(d){var w=this.c
return B.a.aB(w,0,Math.min(this.d,w.length))},
VR(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.de(D.akE,new C.fg2(w))},
bs7(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.alS.prototype={
S(){return new C.alT(new C.am1(),A.a([],x.t),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alT.prototype={
gMI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDN(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.MU(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqt(){var w=this.r
return w===$?this.r=new C.aKy(new C.bS7(this)):w},
gapC(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMI()[v].c)u.push(1)
return u.length},
gblu(){var w=this.ghb(0)
return w.gzk()==null?"Elder":B.a.i(w.gzk().b)},
Y(){this.a3()
this.ari()},
t(){var w,v=this
v.gqt().t()
v.f.t()
w=v.LR$
w===$&&A.c()
w.t()
w=v.q7$
w.T$=$.aw()
w.P$=0
v.bvQ()},
cKZ(){var w=this
w.m(new C.bS4(w))
w.gqt().VR(w.gMI()[w.x].a)},
KY(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqt()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q7$.a
v.ax=u
v.ay=u+1
v.m(new C.bS2())
A.cz(B.hE,new C.bS3(v))},
bpG(){var w=this.gapC(0)/this.gMI().length*100
if(w>=90)return D.eVJ
if(w>=75)return D.eTL
if(w>=60)return D.eKs
if(w>=45)return D.eNR
return D.eES},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.ctv()
w=A.bR(0,new A.em(A.b4(m,m,m,new C.bsL(n,n.q7$),B.ay),m),0,0,0)
if(!n.Q){v=D.qe.j(0.96)
u=A.n(20)
t=A.L(B.cN,B.r,3)
u=A.q(m,A.x(A.a([A.d("Elder "+n.gblu()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aVA,B.K,m,m),B.X,C.up("Start the test",n.gBP(),B.cN,B.j2,D.fv)],x.p),B.m,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bE,m,m,m)
v=u}else{v=n.x
u=n.gMI()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aVC,m,m,m)
if(n.Q){t=n.gqt()
t=t.d<t.c.length}else t=!1
if(t)u=D.fdr
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.Bs,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.d(q[r],m,m,m,m,m,m,D.foG,B.K,m,m),B.f,m,D.ae2,new A.o(D.bfw,m,new A.bH(o,o,o,o),new A.bg(p,p,p,p),m,m,B.n),m,m,m,m,B.NY,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bS5(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bW(B.fM,s,B.bt,new A.bP("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.p4(u,B.mQ,A.qu(),B.b4,B.b4,A.Lu())],x.p),B.m,m,B.e,B.P,0,B.p)
v=u}return new C.tB("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f5,m)},
ctv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bpG(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMI()[v].c)g.push(v)
u=A.n(22)
t=A.L(B.cN,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.ft6,B.K,i,i)
r=A.d("Signed by Elder "+j.gblu(),i,i,i,i,i,i,D.frL,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fwS,i,i,i),D.ewO],q)
o=A.d(h.b,i,i,i,i,i,i,D.fyJ,i,i,i)
n=j.gapC(0)
m=j.gMI()
u=A.q(i,A.x(A.a([D.fJS,B.aw,s,r,B.X,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ab7,i,i,i),B.Q,D.asn],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.qe,i,t,u,i,i,B.n),i,i,i,i,B.fq,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aC,new C.Il(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aR,D.fZE,B.Q],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.K)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bz,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.fW,i,i,i),B.aw,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fug,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fwu,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dr,i,new A.bH(k,k,k,k),new A.bg(r,r,r,r),i,i,B.n),i,i,i,B.cw,B.bh,i,i,i))}B.d.v(s,u)}s.push(B.aC)
s.push(A.at(C.up("Back to the games",new C.bRZ(j),B.cN,B.k4,D.fv),i,i,i))
return new C.tB("Village School",A.cl(s,i,i,B.bR,i,i,B.ah,!1),B.f5,i)}}
C.bsL.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q7$.a
a0.zj(e.f.Mr(a1))
w=C.haX(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqt()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cWh[s]-6
$.S()
r=new A.ap(B.S,B.N,B.U,B.V,B.T)
r.r=D.FV.gp(0)
a0.aq(new A.a3(u,340,u+12,450),r)}u=A.bn(D.a98.cn(10),B.hZ)
$.S()
r=A.J()
r.r=D.Bs.gp(0)
a0.am(u,r)
r=A.bn(D.a98,B.hP)
u=A.J()
u.sav(A.jw(new A.p(30,96),new A.p(420,346),D.deH,f,B.x,f))
a0.am(r,u)
q=new A.e4()
q.d_(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bB(new A.p(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ap(B.S,B.N,B.U,B.V,B.T)
r.r=B.c.j(0.025).gp(0)
a0.bY(o,r)}u=A.J()
u.r=K.aiq.gp(0)
a0.aq(new A.a3(30,354,420,362),u)
u=A.J()
u.r=B.aQ.gp(0)
a0.aq(D.f4P,u)
u=A.J()
u.r=B.bN.gp(0)
a0.aq(D.f4T,u)
u=A.bn(D.f4J,B.hw)
r=A.J()
r.r=D.Z_.gp(0)
a0.am(u,r)
n=B.j.E((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqt().gbmb(0)
m=A.ft(f,B.ct,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fAX,u+(t?"|":"")),B.a5,B.bW,f,B.dA,B.bX)
m.o5(346)
J.br(v.save())
u=A.i_(D.a98)
r=$.mz()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i_(new A.a3(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.p(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bn(new A.a3(u,r,u+40,r+90),B.fI)
u=A.J()
u.r=D.buO.gp(0)
a0.am(r,u)}}else{m=A.ft(f,B.ct,f,f,f,D.fla,B.K,B.bW,f,B.dA,B.bX)
m.o5(340)
m.a4(a0,new A.p(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqt().d*9,310)
k=Math.sin(p+r)
j=new A.ap(B.S,B.N,B.U,B.V,B.T)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.p(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzk()
i=(u==null?f:u.c)===D.oq?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f5V(d,a0,i,t,h,D.elc)),new A.y(520,new C.f5W(a0,d,t)),new A.y(575,new C.f5X(a0,d,t)),new A.y(585,new C.f5Y(this,a0,d,t)),new A.y(615,new C.f5Z(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f6_())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cbz(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ai,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.aa()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.aa()}}n.D(new A.bv())
return n},
aE(d){return!1}}
C.alQ.prototype={
S(){return new C.alR(new C.am1(),A.T(x.S,x.i),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alR.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hCW(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FF(0):w},
gaLn(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FF(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cq(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FF(0):r).length);++v}s.Q=w
r=w}return r},
FF(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e2(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bRL())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a3()
this.ari()},
t(){var w,v=this
v.e.t()
w=v.LR$
w===$&&A.c()
w.t()
w=v.q7$
w.T$=$.aw()
w.P$=0
v.bvP()},
aqM(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cq(u===$?r.z=r.FF(0):u,v)
s=r.gaLn()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLn()[v])*Math.min(1,w)}},
d0G(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bRW(v,d))
return}if(w===d){v.m(new C.bRX(v))
return}v.m(new C.bRY(v,B.d.cq(v.gj1(),v.y),d,B.d.cq(v.gj1(),d)))},
cLG(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FF(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FF(0):u)[v]]===v);++v}s.m(new C.bRR(s,B.d.cC(w,new C.bRS())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bRT(t,s))
w=5
return A.b(C.BM(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BN(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bRU())
w=1
break
case 4:t.m(new C.bRV(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.pR,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tB("Line Up",A.cl(A.a([D.aeU,w,B.aR,new C.Il(v,u,l.ch,k),B.aR,A.at(C.up("Back to the games",new C.bRN(d),B.cN,B.k4,D.fv),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f5,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bRO(l))
u=A.bR(0,A.cs(new C.bRP(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aVC,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.ftx,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fvJ,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.n(16)
n=l.ax
m=A.L(n?D.lC:G.nj,B.r,2)
r.push(A.q(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bRQ(l),x.cM).aO(0,", then ")+".",k,k,k,k,k,k,D.fxT,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bh,k,k,1/0))}if(!l.at)r.push(C.up("That is my line!",l.gcLF(l),B.cN,B.hH,D.fv))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.up(w,l.gql(l),B.cN,B.jD,D.fv))}return new C.tB("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.m,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.f5,k)}}
C.bji.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q7$.a
c7.zj(c5.e.Mr(c8))
w=C.haX(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.S().r
s=x.v
r=new A.aF(t,B.ai,c4,c4,A.a([],s))
r.D(new A.aZ(10,470))
r.D(new A.c8(225,500,440,470))
q=A.J()
q.r=D.Z_.gp(0)
q.b=B.aa
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aF(t,B.ai,c4,c4,l)
l.push(new A.aZ(o,n))
k.aa()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.aa()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.aa()
m=new A.bv()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.aa()
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=[B.cN,G.nj,D.lC,B.aJ][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b0U(c7,"OLDEST",D.ema,B.cN)
this.b0U(c7,"YOUNGEST",D.elD,B.b9)
t=A.bn(D.f4D,B.fI)
s=A.J()
s.r=D.FV.gp(0)
c7.am(t,s)
s=A.bn(D.f4C,B.hP)
t=A.J()
t.r=D.Bs.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.dqX())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.K)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cq(a1===$?c5.z=c5.FF(0):a1,f)
o=c5.gaLn()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkR()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkR()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.S()
a9=new A.ap(B.S,B.N,B.U,B.V,B.T)
a9.r=B.cN.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.p(o,520),54,a9)}a9=D.dip[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.p(-3-b2*8,-56)
else b9=a3?D.eoh:c4
if(b1)c0=new A.p(3+b2*8,-56)
else if(h&&a7)c0=D.aLx
else c0=a3?new A.p(30,-104+Math.sin(e)*5):c4
C.Sq(c7,new A.p(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Jp,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iG(new A.en(a8,c4,c4,B.cH,c4,c4,c4,c4,c4,c4,D.frh),B.a5,B.bW,new A.jf(1),"\u2026",c4,1,c4,B.bX,c4,B.ct)
c1.o5(q)
c2=A.bn(A.bB(new A.p(o,650),24,c1.b.c+16),B.fI)
$.S()
a8=new A.ap(B.S,B.N,B.U,B.V,B.T)
if(a6)a9=B.ir
else a9=a7?B.rF:D.qe
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ap(B.S,B.N,B.U,B.V,B.T)
if(a6)a9=D.lC
else a9=a7?G.nj:D.lB
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.am(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.p(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iG(new A.en(""+(a2+1),c4,c4,B.cH,c4,c4,c4,c4,c4,c4,D.frA),B.a5,B.bW,new A.jf(1),c4,c4,c4,c4,B.bX,c4,B.ct)
c3.eb()
c3.a4(c7,new A.p(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bB(B.H,4,8)
$.S()
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=[B.cN,G.nj,D.lC,B.aJ,B.c][B.o.F(p,5)].gp(0)
c7.aq(q,m)
v.restore()}v.restore()},
b0U(d,e,f,g){var w,v,u=null,t=A.ft(u,B.ct,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.Dh,u,u),e),B.a5,B.bW,u,B.dA,B.bX)
t.eb()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aK(0,new A.p(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a1X.prototype={
a7(){return"_Trip."+this.b}}
C.alM.prototype={
S(){return new C.alN(D.WZ,new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alN.prototype={
gDp(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDN(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.MU(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqt(){var w=this.f
return w===$?this.f=new C.aKy(new C.bRx(this)):w},
gTR(){var w=this.ghb(0)
return w.gzk()==null?"Grandma":B.a.i(w.gzk().b)},
Y(){this.a3()
this.ari()},
t(){var w,v=this
v.gqt().t()
w=v.LR$
w===$&&A.c()
w.t()
w=v.q7$
w.T$=$.aw()
w.P$=0
v.bvO()},
aqM(d){var w,v,u,t=this
if(t.r!==D.acS)return
w=B.dy.aC(0,B.j.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDp()
if(v+1>=u.length){t.r=D.acT
t.WN()}else{++t.w
t.ay=!1
t.r=D.X_
t.gqt().VR(u[t.w].a)}if(t.c!=null)t.m(new C.bRv())}},
WN(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqt().VR("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDp().length
r=C.bG0(t,u.z,s)
u.as=r
w=2
return A.b(C.BM(u.a.d,r),$async$WN)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BN(s.d,s.c.a,"journey",u.x*10),$async$WN)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRp())
return A.h(null,v)}})
return A.i($async$WN,v)},
br_(){this.aU1()},
aU1(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.acS
if(w.c!=null)w.m(new C.bRq())},
KY(d){var w,v,u,t,s=this
if(s.r!==D.X_)return
w=s.gDp()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRu(s,d,v))
u=s.gqt()
t=s.w
u.VR(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cQS(){if(this.r!==D.B0)return
this.aU1()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.em(A.b4(s,s,s,new C.biJ(t,t.q7$),B.ay),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDp().length;++w){v=t.w
if(w<v||t.r===D.acT)v=B.cN
else v=w===v?B.c:B.aV
u=new A.aP(4,4)
p.push(new A.by(1,B.bb,A.q(s,s,B.f,s,s,new A.o(v,s,s,new A.bg(u,u,u,u),s,s,B.n),s,7,s,B.wk,s,s,s,s),s))}p.push(B.bl)
p.push(D.fLu)
return new C.tB("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cl8(),s,s,10,10,s,s)],q),s),B.f5,s)},
cl8(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRt(o),l=D.qe.j(0.96),k=A.n(22),j=A.L(B.cN,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTR()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aVA,B.K,n,n),B.X,C.up("Start the journey",o.gbqZ(),B.cN,D.bPw,D.fv)],x.p),B.m,n,B.e,B.P,0,B.p)
break
case 3:w=D.bcc
break
case 1:w=o.w
v=o.gDp()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.d(r[s],n,n,n,n,n,n,D.aUY,B.K,n,n),B.f,n,D.aea,new A.o(D.ajA,n,new A.bH(p,p,p,p),new A.bg(q,q,q,q),n,n,B.n),n,n,n,n,V.wg,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRr(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.Q,A.bW(B.bH,t,B.bt,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDp().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.Q,new A.bL(B.a9,n,n,C.up(v,o.gcQR(),B.cN,B.jD,D.fv),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTR()),B.Q,A.d(""+o.x+" of "+o.gDp().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVg,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQt(v)
u=C.aQt(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ab7,n,n,n))}w.push(B.Q)
w.push(A.at(C.up("Back to the games",new C.bRs(o),B.cN,B.k4,D.fv),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.o(l,n,j,k,D.aCR,n,B.n),n,n,n,n,B.bh,n,n,n)}}
C.biJ.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q7$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDp(),d0=B.j.E(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.acS,d2=c7*0.5
c8=A.ar(D.bgZ,D.bri,d0)
c8.toString
w=A.ar(D.Yc,G.ahe,d0)
w.toString
v=A.ar(B.u0,D.bpL,d0)
v.toString
$.S()
u=A.J()
t=x.O
u.sav(A.jw(B.H,new A.p(0,d2),A.a([c8,w,v],t),G.a44,B.x,c3))
d3.aq(new A.a3(0,0,0+c6,0+c7),u)
s=new A.p(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.J()
u.sav(A.w4(s,60,A.a([D.bq8,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.J()
u.r=B.Yo.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dxx[o]
$.S()
u=new A.ap(B.S,B.N,B.U,B.V,B.T)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.p(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aF(k.r,B.ai,c3,c3,j)
j.push(new A.aZ(0,v))
i.aa()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.aj(d)
i.aa()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.aa()
$.S()
k=new A.ap(B.S,B.N,B.U,B.V,B.T)
k.r=A.ar(l===0?D.bfy:D.buf,D.bkq,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cbA(d3,new A.p(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.J()
v=A.ar(D.aiK,D.G7,d0)
v.toString
w.sav(A.jw(new A.p(0,d2),new A.p(0,c7),A.a([v,D.bqa],t),c3,B.x,c3))
d3.aq(new A.a3(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.J()
w.r=D.bjK.gp(0)
d3.aq(new A.a3(0,a0,c6,a1),w)
w=A.J()
w.r=D.btW.gp(0)
d3.aq(new A.a3(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ap(B.S,B.N,B.U,B.V,B.T)
u.r=K.Mu.gp(0)
d3.aq(new A.a3(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ap(B.S,B.N,B.U,B.V,B.T)
b2.r=D.bfd.gp(0)
d3.aq(new A.a3(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aF(b1.r,B.ai,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.aa()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.aa()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.aa()
b0=new A.bv()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.aa()
b0=new A.ap(B.S,B.N,B.U,B.V,B.T)
b0.r=D.bs9.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ap(B.S,B.N,B.U,B.V,B.T)
b1.r=D.fv.gp(0)
d3.aq(new A.a3(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ap(B.S,B.N,B.U,B.V,B.T)
b0.r=D.FV.gp(0)
d3.aq(new A.a3(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bn(new A.a3(b0,a4,b0+60,a5),B.iw)
b0=new A.ap(B.S,B.N,B.U,B.V,B.T)
b0.r=D.bvj.gp(0)
d3.am(b5,b0)
b0=new A.ap(B.S,B.N,B.U,B.V,B.T)
b0.r=D.Bs.gp(0)
b0.b=B.aa
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iG(new A.en(b6,c3,c3,B.cH,c3,c3,c3,c3,c3,c3,D.fpL),B.a5,B.bW,new A.jf(1),c3,c3,c3,c3,B.bX,c3,B.ct)
b7.eb()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.p(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.acT
else if(r===c4.w){b0=c4.r
b0=b0===D.X_||b0===D.B0
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzk()
b9=(b0==null?c3:b0.c)===D.oq?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqt()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B0
b0=c0?C.hzl(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.X_?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.p(40,-110+Math.sin(g)*10)
else a7=c0?new A.p(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Sq(d3,new A.p(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.p(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bI3(d3,new A.p(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.S()
t=new A.ap(B.S,B.N,B.U,B.V,B.T)
t.r=D.btq.j(0.5*(1-c2)).gp(0)
d3.N(new A.p(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.WZ)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.p(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B0&&c4.ax){b7=A.ft(c3,B.ct,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cN,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A8.Ir,c3,c3),"BEEP BEEP!"),B.a5,B.bW,c3,B.dA,B.bX)
b7.eb()
b7.a4(d3,new A.p(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cbA(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bpF,D.bj3,g)
o.toString
if(f){w=new A.aF($.S().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aZ(v-16,u))
t=u-36
s=u-56
w.D(new A.c8(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c8(v+9,t,v+16,u))
w.D(new A.bv())
t=A.J()
t.r=D.Zr.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d_e[r]
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=D.Zr.gp(0)
p.c=4
p.d=B.bB
d.ah(new A.p(w,t),new A.p(v+q*24,s),p)
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=o.gp(0)
d.N(new A.p(v+q*26,u),10,p)}}else{w=e.a5(0,D.eoe)
$.S()
v=A.J()
v.r=D.bff.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bB(e.a5(0,D.eof),16,60)
w=A.J()
w.r=o.gp(0)
d.bY(v,w)}},
bI3(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.WZ?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.dq4[w]
u=d.ay&&d.r!==D.WZ&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ap(B.S,B.N,B.U,B.V,B.T)
s.r=D.bu7.gp(0)
a2.N(B.H,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ap(B.S,B.N,B.U,B.V,B.T)
s.r=D.bmu.gp(0)
a2.N(B.H,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ap(B.S,B.N,B.U,B.V,B.T)
q.r=B.bo.gp(0)
q.c=2
a2.ah(B.H,new A.p(s*9,t*9),q)}a1.restore()}p=A.tZ(D.f5_,B.fI,B.fI,B.ii,B.hO)
$.S()
t=A.J()
t.sav(A.jw(D.eki,B.a82,D.dg1,G.a44,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ap(B.S,B.N,B.U,B.V,B.T)
s.r=D.daa[B.o.F(o,4)].gp(0)
a2.aq(new A.a3(t,-26,t+10,-19),s)}n=d.r===D.B0&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a3(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.om(A.bn(l,B.n6)),$.nL(),!0)
k=new A.ap(B.S,B.N,B.U,B.V,B.T)
k.r=D.Yc.gp(0)
a2.aq(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B0?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Sq(a2,new A.p(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLo,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bn(l,B.n6)
i=new A.ap(B.S,B.N,B.U,B.V,B.T)
i.r=D.ajC.gp(0)
i.b=B.aa
i.c=2
a2.am(j,i)}d=A.bn(D.Uo,B.n6)
t=A.J()
t.r=D.Yc.gp(0)
a2.am(d,t)
J.br(a1.save())
a1.clipRRect(A.om(A.bn(D.Uo,B.n6)),$.nL(),!0)
C.Sq(a2,new A.p(D.Uo.gbF().a,-10),0,0,0.7,-0.1,f,f,D.aLo,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bn(D.Uo,B.n6)
d=A.J()
d.r=D.ajC.gp(0)
d.b=B.aa
d.c=2
a2.am(t,d)
d=A.J()
d.r=An.G8.gp(0)
a2.N(D.emo,4,d)
d=A.J()
d.r=D.FV.gp(0)
a2.aq(D.f68,d)
for(w=0;w<3;++w){v=D.dq6[w]
d=A.bn(new A.a3(v,-96,v+28,-79),B.iw)
t=new A.ap(B.S,B.N,B.U,B.V,B.T)
t.r=D.G7.gp(0)
a2.am(d,t)}a1.restore()},
aE(d){return!1}}
C.aBn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bgg.prototype={}
C.aBp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bgh.prototype={}
C.aBq.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bgi.prototype={}
C.a6l.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.biQ(w),B.ay),w)}}
C.biQ.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.do2[B.o.F(n,6)]
k=$.S()
j=new A.ap(B.S,B.N,B.U,B.V,B.T)
j.r=l.gp(0)
d.aq(new A.a3(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aF(k.r,B.ai,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.aa()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.aa()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.aa()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.aa()
k=new A.bv()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.aa()
k=new A.ap(B.S,B.N,B.U,B.V,B.T)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tB.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.PM,w,w,w,new C.bRo(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fn1,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.XZ,A.q(w,A.bm(!0,A.x(A.a([D.c3Z,new A.D(D.bGq,A.A(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b7F,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Il.prototype={
B(d){var w=null,v=this.d,u=C.aQt(v),t=C.ih9(v),s=B.c.j(0.08),r=A.n(18),q=A.L(B.cN.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fpw,w,w,w)],x.p)
if(this.e)p.push(D.eqH)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fW,w,w,w))
if(t!=null)p.push(new A.D(B.up,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AG,w,w,w),w))
return A.q(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bE,w,w,w)}}
C.W9.prototype={
S(){return new C.blA(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cXK(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blA.prototype={
gSQ(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a3()
this.Pr()},
Pr(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bS9(u.a.d),$async$Pr)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.de6[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bS8(p,(o===$?u.d=q.c:o).a,r),$async$Pr)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e0M(u,n))
return A.h(null,v)}})
return A.i($async$Pr,v)},
uv(d){return this.cob(d)},
cob(d){var w=0,v=A.j(x.H),u=this,t
var $async$uv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).cd(A.eb(new C.e0N(d),!1,null,x.H)),$async$uv)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pr()
return A.h(null,v)}})
return A.i($async$uv,v)},
gb6b(){var w,v,u,t=C.MU(this.gSQ()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2k(d){return this.cvo(d)},
cvo(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2k=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.K)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.cXK(r),$async$a2k)
case 2:if(u.c!=null)u.m(new C.e0O(u,r))
return A.h(null,v)}})
return A.i($async$a2k,v)},
OL(d){return this.bQJ(d)},
bQJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hd9(t.gSQ())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MD("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).cd(A.eb(new C.e0K(q),!1,null,r)),$async$OL)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.K)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e0L(p))
o=s.length
B.d.c4(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2k(A.cW(s,0,A.dA(2,"count",x.S),r).dq(0)),$async$OL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OL,v)},
XJ(d,e){return this.bOi(0,e)},
bOi(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e0J(e),o,null,!0,!0,x.y),$async$XJ)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hd9(u.gSQ()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.K)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2k(o),$async$XJ)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XJ,v)},
aa_(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e0G(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.L(B.aV,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Ve,p,p,p),B.b3],s)
q=A.n(10)
r.push(A.q(p,A.d(i,p,p,p,p,p,p,D.fnV,p,p,p),B.f,p,p,new A.o(B.hD,p,p,q,p,p,B.n),p,p,p,p,B.Ci,p,p,p))
return A.aA(p,A.da(A.q(p,A.x(A.a([A.A(r,B.m,p,B.e,B.i,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fvD,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.foE,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.aA,B.aF,B.x,w,p,p),B.n),p,p,p,p,B.yB,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xc(d,e,f,g,h,i){return this.aa_(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.MU(s.gSQ()),p=s.gSQ(),o=C.aQt(s.e),n=C.hd9(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e0P(s),k=C.hCW(p,1).length,j=C.hD7(p,1).length,i=C.hE1(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.L(B.cN.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aaX,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fta,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.aaT,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pR,r,r,r),D.fRK],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bE,r,r,r)
f=s.Xc("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aE,new C.e0Q(s,p),l.$1("kahoot"))
h=s.Xc("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e0R(s,p),l.$1("fire"))
a0=s.Xc("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.BR,new C.e0S(s,p),l.$1("catch"))
j=j!==0?new C.e0V(s,p):r
j=s.aa_("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hl,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e0W(s,p):r
i=s.aa_("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kL,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xc("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eT,new C.e0X(s,p),l.$1("journey"))
k=k!==0?new C.e0Y(s,p):r
k=A.a([g,B.aR,D.fVJ,B.Q,A.kS(0.98,A.a([f,h,a0,j,i,e,s.aa_("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.en,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xc("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d2,new C.e0Z(s,p),l.$1("school"))],a1),2,12,12,r,B.dU,!0),B.d6,A.A(A.a([D.bIh,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fnZ,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.Q],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.K)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aV,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fCw,B.bd,new A.by(1,B.bb,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hh,r,r,r),A.d(""+v.gapg(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AG,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapg(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.X(B.hs,D.lC,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1_(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cN.j(0.2)
t=new A.ay(B.cN,1,B.r,-1)
f=A.aA(r,A.q(r,A.X(B.j2,B.cN,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e10(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.ff.j(0.2)
t=new A.ay(B.ff,1,B.r,-1)
B.d.v(g,A.a([B.bl,f,B.bl,A.aA(r,A.q(r,A.X(B.ef,B.ff,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bH(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e11(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c6(B.aL,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bH(u,u,u,u),new A.bg(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bh,r,r,r))}if(s.a.e){j=m?new C.e0T(s):new C.e0U(a2)
i=A.n(18)
h=A.L(m?B.cN:B.aV,B.r,2)
g=m?B.cN.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cN:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.NM,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fWF)
k.push(B.aC)
k.push(D.asn)
return new C.tB("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bCq,r,r,B.ah,!1),B.f5,r)}}
C.a_P.prototype={
a7(){return"_KPhase."+this.b}}
C.alO.prototype={
S(){return new C.alP(D.b_G)},
gd1(){return this.e}}
C.alP.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bRJ(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.de(B.fF,new C.bRK(v))},
aPA(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRz(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.de(B.fe,new C.bRA(w))},
KY(d){var w
if(this.d!==D.aco)return
w=this.at
if(w!=null)w.a1(0)
this.b67(d)},
b67(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bRF(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.rK,v.giv(v))},
cKi(d){var w=this
if(w.d!==D.Wx)return
if(w.e+1>=w.a.w.length)w.Yu()
else{w.m(new C.bRG(w))
w.aPA()}},
Yu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bG0(p,u.w,t)
u.m(new C.bRC(u,s))
w=2
return A.b(C.BM(u.a.e,s),$async$Yu)
case 2:r=e
t=u.a
w=3
return A.b(C.BN(t.e,t.f,t.r,u.f),$async$Yu)
case 3:q=e
if(u.c!=null)u.m(new C.bRD(u,r,q))
return A.h(null,v)}})
return A.i($async$Yu,v)},
cL7(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bO(r,r.gI(0),u.k("bO<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bRH())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b_G===r){w=A.a([D.fS8,B.X,A.d(s,t,t,t,t,t,t,B.KG,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fo6,t,t,t))
w.push(B.aC)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xi,B.K,t,t))
w.push(B.dW)
w.push(C.up("Play",u.geY(u),B.cN,B.hs,D.fv))
w=A.at(new A.D(B.ex,A.x(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b_H===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fw8,t,t,t),t,t,t)
break A}if(D.aco===r||D.Wx===r){w=u.cqN()
break A}if(D.b_I===r){w=u.cbB()
break A}w=t}return new C.tB(s,w,B.f5,t)},
cqN(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Wx,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aUL,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KD,j,j,j))
g.push(B.at)
f=A.n(14)
g.push(A.q(j,A.d(""+k.f,j,j,j,j,j,j,B.ix,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.GF,j,j,j))
g=A.A(g,B.m,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.j.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kl(B.bz,j,k.as<5?B.ff:B.cN,9,j,w,j),B.aq)
w=A.n(22)
v=A.L(B.cN,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lC:G.nj,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.Q,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fna,B.K,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fyg,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qe,j,v,w,j,j,B.n),j,j,j,j,B.fq,j,j,1/0),3)
v=A.a([],h)
for(u=k.giv(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bRE(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCu[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aCO[o],j,j,j,j,j,j,D.fp7,j,j,j),B.at,new A.by(1,B.bb,A.d(r[t],j,3,B.a2,j,j,j,D.fo3,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aqU)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bWS)
v.push(A.aA(j,new A.SG(A.q(j,new A.c6(B.aL,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bH(l,l,l,l),new A.bg(m,m,m,m),W.aAS,j,B.n),j,j,j,j,B.f2,j,j,j),p,B.b4,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.kS(1.45,v,2,10,10,j,B.dU,!1),4)],h)
if(i)h.push(D.epX)
return new A.D(B.a0_,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
cbB(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cL7(),m=x.p,l=A.a([D.bbu,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pR,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vj,o,o,o),o,o,o),B.aR],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cN.j(0.25):B.dr
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cN:B.bz,1,B.r,-1)
q=A.d(w<3?D.dgi[w]:""+(w+1),o,o,o,o,o,o,B.nb,o,o,o)
s=s?B.u:B.R
l.push(A.q(o,new A.c6(B.aL,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.by(1,B.bb,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.ix,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bH(r,r,r,r),new A.bg(u,u,u,u),o,o,B.n),o,o,o,B.cw,B.eU,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Il(m,v,p.CW,o))
l.push(B.aR)
l.push(A.at(C.up("Back to the games",new C.bRB(p),B.cN,B.k4,D.fv),o,o,o))
return A.cl(l,o,o,B.fq,o,o,B.ah,!1)}}
C.TQ.prototype={
S(){return new C.alL(A.T(x.de,x.er))}}
C.alL.prototype={
gD1(){var w,v=this,u=v.d
if(u===$){w=C.hiX(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glR(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD1().b
v=$.aw()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.ba(w,B.b5,B.aP),v)}return t},
ceB(d){return this.f.c3(0,d,new C.bR9(d))},
Y(){this.a3()
var w=this.gD1().c
if(w.length===0)w.push(C.h4K(null,0,20,""))},
t(){var w,v,u=this.glR(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aU(u.d);w.C();){v=w.gR(w)
v.T$=$.aw()
v.P$=0}this.a2()},
cK8(){if(this.gD1().c.length>=12)return
this.m(new C.bRa(this))},
jH(d){var w,v,u=this,t=u.gD1()
t.b=B.a.i(u.glR(0).a.a)
w=t.gapg(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fg9)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRk(),r=x.p,q=A.a([A.bM(!1,D.fHs,t,t,!0,t,t,t,u.gbpR(u),t,t)],r),p=A.a([D.fWg,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aN(),u.glR(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.fW,!0,B.a5,t,B.ao,t,t,t,t),B.aC],r)
for(w=0;v=u.gD1().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRj(u,w,s),t)],r))
if(v<12)p.push(A.at(C.up("\uff0b Add a question",u.gcK7(),B.aV,t,B.c),t,t,t))
return new C.tB("Make your game",A.cl(p,t,t,D.bCn,t,t,B.ah,!1),q,t)}}
C.aqP.prototype={
S(){return new C.aEV(A.a([],x._))},
bv(){return this.r.$0()},
qm(){return this.w.$0()},
ge3(){return this.c}}
C.aEV.prototype={
Y(){var w,v
this.a3()
this.ws()
w=this.a
v=w.c
if(v.length!==0)C.a82(v,w.e,w.d.w)},
wi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hfL(r,t.e,!1,s.w,new C.e2r(u),null,s),$async$wi)
case 2:w=3
return A.b(u.ws(),$async$wi)
case 3:return A.h(null,v)}})
return A.i($async$wi,v)},
a0w(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hfL(r,t.e,!0,s.w,new C.e2q(u),null,s),$async$a0w)
case 2:w=3
return A.b(u.ws(),$async$a0w)
case 3:return A.h(null,v)}})
return A.i($async$a0w,v)},
ws(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$ws=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bf(q.a.c),$async$ws)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.e2t(q,p))
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
return A.b(C.Hd(q.a.c).df(0,B.qq),$async$ws)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e2u(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e2v(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ws,v)},
P6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$P6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.ffK)
w=3
return A.b(C.Hd(t.a.c),$async$P6)
case 3:r=e
w=4
return A.b(C.fVw(t.a.c,r),$async$P6)
case 4:q=e
w=5
return A.b(C.Hd(t.a.c),$async$P6)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e2p(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dH:B.cX,null,B.t,null,s,null,B.mS,null,null,null,null,null,null,null,null,null,null))
t.a.qm()
case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
Ip(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ip=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ipm(l),$async$Ip)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hTb(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0T(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ip)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hzv(r)
o=Date.now()
n=t.a.c
m=new C.kR(l,r.toUpperCase(),p,!0,B.Z,D.Dr,new A.V(o,0,!1),0,n,D.ux,B.cc)
w=5
return A.b(C.a3L(n,m),$async$Ip)
case 5:w=6
return A.b(t.ws(),$async$Ip)
case 6:t.a.bv()
t.a.qm()
if(t.c==null){w=1
break}t.F_(m)
case 1:return A.h(u,v)}})
return A.i($async$Ip,v)},
F_(d){return this.cjv(d)},
cjv(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bf(u.a.c),$async$F_)
case 2:n=l.nv(k.dI(f,new C.e2s(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.aqJ(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F_)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3L(u.a.c,o),$async$F_)
case 6:case 5:w=7
return A.b(u.ws(),$async$F_)
case 7:u.a.qm()
return A.h(null,v)}})
return A.i($async$F_,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.J,o=new C.ud(p)
if(r.e)return A.at(A.n0(q,p?B.bu:B.bo,q,q,q,q,q,q,q,q),q,q,q)
if(J.cr(r.d)){w=p?B.e8:B.c
v=A.n(15)
u=A.aJ(!1,B.a3,!0,q,A.aO(!1,q,!0,A.q(q,D.bUy,B.f,q,q,new A.o(B.aY.j(0.12),q,A.L(B.aY,B.r,2),q,q,q,B.a7),q,52,q,q,q,q,q,52),B.cR,!0,q,q,q,q,q,q,q,q,q,q,q,r.gciz(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.au,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Ge(A.q(q,A.x(A.a([u,B.aR,t,B.Q,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bo,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dW,A.bI(D.fZu,q,r.gaSP(),A.bo(B.bQ,q,q,q,q,q,Aw.a0o,q,new A.b9(A.n(12),B.a1),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bF7,q,q,1/0),15,B.ag,1.05,D.aca,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.au,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zo,B.aY,q,q,q,q),q,q,q,new C.e2x(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zi,B.aY,q,q,q,q),q,q,q,r.gagO(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.arO,D.fEO,r.gaSP(),A.bo(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Ge(r.cGh(J.t(r.d,s),o),14,B.ag,1,D.aca,q))
B.d.v(w,u)}return A.x(A.a([p,B.aC,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cGh(d,e){var w=null,v=e.a,u=v?B.e8:B.c,t=A.n(14),s=A.L((v?B.ee:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.er,10)],x.V),q=A.n(14),p=A.q(w,D.bTC,B.f,w,w,new A.o(B.aY.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.au,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqg(),m=d.d?"":" \xb7 Public",l=d.y===D.kX?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bG,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aJ(!1,B.a3,!0,w,A.aO(!1,q,!0,new A.D(B.bE,A.A(A.a([p,B.bd,l,A.X(B.OE,v?B.bu:B.bo,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e2w(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqJ.prototype={
S(){return new C.aES(A.a([],x._),A.aR(x.N),A.b9B())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aES.prototype={
Y(){var w,v,u=this
u.a3()
u.d=u.a.w
u.adt()
w=u.a
v=w.c
if(v.length!==0)C.a82(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a3u(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.ys("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1S(r),s,null,!0,!0,x.y),$async$a3u)
case 3:if(e!==!0||t.c==null){w=1
break}t.JW()
t.m(new C.e1T(t,r))
w=4
return A.b(t.ur(),$async$a3u)
case 4:t.a.bv()
t.ys(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3u,v)},
cvY(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e1N(w,f,d,e))},
aV6(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.eg(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bcK(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eJ(new Float64Array(16))
q.e6(r)
w=q.D6()
v=B.j.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.eg(r,u,0,1)
t.k5(v,v,1,1)
t.eg(-r,-u,0,1)
t.iW(0,q)
s.sp(0,t)},
adt(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bf(u.a.c),$async$adt)
case 2:t=s.nv(r.dI(e,new C.e1e(u)))
if(t!=null&&u.c!=null)u.m(new C.e1f(u,t))
return A.h(null,v)}})
return A.i($async$adt,v)},
ys(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
wi(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hfL(o,t,!1,r,new C.e1w(u),q.a,s),$async$wi)
case 2:n=A
m=J
w=3
return A.b(C.Hd(u.a.c),$async$wi)
case 3:p=n.nv(m.dI(e,new C.e1x(u)))
if(p!=null&&u.c!=null)u.m(new C.e1y(u,p))
return A.h(null,v)}})
return A.i($async$wi,v)},
JW(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
ur(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ur=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3L(t,s),$async$ur)
case 2:return A.h(null,v)}})
return A.i($async$ur,v)},
a20(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uq(q,t.a.c)){t.ys("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iqw(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a20)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JW()
t.m(new C.e1M(t,r))
w=4
return A.b(t.ur(),$async$a20)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a20,v)},
b2Q(){var w=this.c
w.toString
A.a6(w,!1).cd(A.eb(new C.e1t(this),!1,null,x.H))},
a0K(){return this.cjx()},
cjx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uq(m,t.a.c)){t.ys("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.R(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e1J(),A.U(s).k("Y<1>")).gI(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cg.E"))
B.d.fi(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e1K(n,t,new C.ud(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0K)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JW()
t.m(new C.e1L(t,o))
w=6
return A.b(t.ur(),$async$a0K)
case 6:case 5:if(o.a&&t.c!=null)t.b2Q()
case 1:return A.h(u,v)}})
return A.i($async$a0K,v)},
Wx(d){return this.bDn(d)},
bDn(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uq(r,t.a.c)){t.ys("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e12(t,d),r,null,!0,!0,x.P),$async$Wx)
case 3:s=f
if(s==null){w=1
break}t.JW()
t.m(new C.e13(t,s))
w=4
return A.b(t.ur(),$async$Wx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
a3Q(d){return this.cIw(d)},
cIw(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.R(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e1V(u,d,new C.ud(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3Q)
case 2:return A.h(null,v)}})
return A.i($async$a3Q,v)},
cfO(d){var w=this,v=w.d
v===$&&A.c()
if(C.uq(v,w.a.c))w.OM(d)
else w.a3Q(d)},
ajj(d,e){return this.czV(d,e)},
czV(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.R(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e1P(new C.ud(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajj,v)},
Iu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Iu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kX?3:5
break
case 3:w=6
return A.b(C.h2X(t.a.c),$async$Iu)
case 6:s=e
o=t.a
r=C.hnN(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajj(!s,!r),$async$Iu)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQA(o,t.a.c)){t.ys("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lm(o,"Cancel","Remove",q.y===D.kX?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Iu)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQw(t.a.c,t.d.a),$async$Iu)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.iY(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Iu,v)},
aaW(d){return this.bOz(d)},
bOz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uq(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aW(s,new C.e14(p))){o=A.U(s)
p.a=A.nv(new A.cM(new A.Y(s,new C.e15(d),o.k("Y<1>")),new C.e16(),o.k("cM<1,m>")))}q=p.a
if(q==null)q=d.d
t.JW()
t.m(new C.e17(t,s,d,q))
w=3
return A.b(t.ur(),$async$aaW)
case 3:t.ys(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaW,v)},
OM(d){return this.bQN(d)},
bQN(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uq(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3Q(d),$async$OM)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e1b(t,d),r,null,!0,!0,x.P),$async$OM)
case 6:s=f
if(s==null){w=1
break}t.JW()
t.m(new C.e1c(t,s))
w=7
return A.b(t.ur(),$async$OM)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OM,v)},
cGH(){var w=this,v=w.d
v===$&&A.c()
if(!C.uq(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e1U(w))
w.ur()},
Zv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQA(n,t.a.c)){t.ys("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.R(n)
s=$.aw()
r=new A.au(B.av,s)
q=t.d.e
p=A.bp(new A.N(q,t.gceh(),A.U(q).k("N<1,m>")).bZ(0,new C.e1o()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1p(t,new C.ud(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zv)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JW()
t.m(new C.e1q(t,p))
w=4
return A.b(t.ur(),$async$Zv)
case 4:t.ys("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zv,v)},
cei(d){return B.a.i(d.toLowerCase())},
cij(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uq(v,w)
t=r.d
s=C.ifC(t)
C.ipq(q,t.b,u,C.ifB(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.J,m=new C.ud(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e21(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c2:B.iB
v=A.X(B.a1y,n?B.bu:B.bo,o,o,o,18)
u=x.p
v=A.a([new A.D(B.C8,A.aO(!1,o,!0,new A.D(B.hF,A.A(A.a([v,B.bl,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bo,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e22(p,d),o,o,o,o,o,o,o),o),new A.D(B.nB,p.c0Z(m),o)],u)
if(p.d.y===D.kX){t=B.t9.j(0.15)
s=A.n(12)
r=A.L(B.t9.j(0.45),B.r,1)
q=C.Hb(p.d,p.a.c)
v.push(new A.D(B.yE,A.q(o,A.A(A.a([D.bYZ,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.au,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.it,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.au,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uq(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gq("Undo",B.ps,p.gcGG(),m,o,o))
u.push(new C.Gq("Family Book",D.bOm,p.gcii(),m,B.u1,o))
u.push(new C.Gq("Family games",B.oy,p.gciu(),m,B.aE,o))
if(C.uq(p.d,p.a.c))u.push(new C.Gq("Display settings",B.CZ,p.gcjw(),m,B.b1,o))
u.push(new C.Gq("Sync",B.zi,p.gagO(),m,o,o))
t=p.d
if(t.y===D.kX||C.aQA(t,p.a.c)){t=p.d.y===D.kX?"Remove shared tree":"Delete tree"
u.push(new C.Gq(t,B.ef,p.gbOJ(),m,B.ff,o))}if(C.uq(p.d,p.a.c))u.push(new C.Gq("Add member",B.wD,new C.e23(p),m,B.bQ,o))
v.push(new A.D(A_.alE,A.A(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gaqg()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cs(new C.e24(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1C:A7.OF,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e25(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c0Z(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fP.j(0.35),B.du,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.zb,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aJ(!1,B.a3,!0,m,A.aO(!1,m,!0,A.q(m,D.c16,B.f,m,m,new A.o(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a7),m,46,m,m,m,m,m,46),B.cR,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagO(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fq8,m,m,m)
r=r.gaqg()
p=n.d.gaqg()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bG,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uq(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bZb,m,m,m,n.gctj(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jE:B.n_
r=r?"Private":"Public"
r=A.E(n.awN(q,"Privacy",r,n.a.d.w?n.gcFB():m),1)
q=A.E(n.awN(B.zj,"Tree code",n.d.c,new C.e1d(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.awN(D.bQ2,"Collaborators",p,n.gc5J()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kX){s=B.c.j(0.15)
B.d.v(p,A.a([B.Q,A.aJ(!1,B.a3,!0,A.n(999),A.aO(!1,A.n(999),!0,new A.D(B.h9,A.A(A.a([A.X(B.pt,B.c,m,m,m,14),B.e2,A.d("View only",m,m,m,m,m,m,B.aUR,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.q(m,A.bx(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.GI,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.c5q,B.n),m,m,m,m,m,m,m,1/0)},
awN(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aJ(!1,B.a3,!0,A.n(14),A.aO(!1,A.n(14),!0,new A.D(I.amO,A.x(A.a([A.X(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vt,A.d(f,w,1,B.a2,w,w,w,Ap.AD,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgk.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgn(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dL(r,new C.dgo(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dgp(this),A.U(r).k("N<1,v>")))
return new A.D(B.ut,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.KM.prototype={}
C.Gu.prototype={}
C.bgm.prototype={
gblg(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKt.prototype={}
C.bgn.prototype={
bQo(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.J()
v.r=B.bF.j(0.75).gp(0)
v.c=2
v.d=B.bB
d.ah(new A.p(n,w),new A.p(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kP(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kP(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bv())
q=A.J()
q.r=B.c.gp(0)
d.N(new A.p(u,w),9,q)
q=A.J()
q.r=B.bF.gp(0)
d.af(t,q)},
bQl(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dgJ())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aW(a0,new C.dgK(f))
t=new A.N(a0,new C.dgL(f),A.U(a0).k("N<1,I>")).bZ(0,new C.dgM()).cI(0,1/0,B.tN)
w=f.a
d.ah(f,new A.p(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.K)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.p(o,v),p,e)
continue}l=J.mW(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aF(m.r,B.ai,null,null,j)
j.push(new A.aZ(w,v-k))
i.aa()
m=l*k
h=new A.c8(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.aa()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.aa()
m=new A.c8(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.aa()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.aj(m)
i.aa()
d.af(i,e)}},
a4(d,e){var w,v,u,t,s,r
$.S()
w=A.J()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bB
w.e=B.dO
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.K)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQl(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.K)(v),++t){r=v[t]
if(r.c)this.bQo(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bk9.prototype={
gcbD(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aD3
switch(w.c.a){case 0:return D.cYY
case 1:return D.da4
case 2:return D.drU}},
gcbG(){var w=this.c,v=C.hyG(w.w),u=C.hyG(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.J,q=t.gcbD(),p=t.c,o=N.bEE(p.f),n=t.gcbG(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cL,10)],m),k=r?B.au:B.c,j=A.L(r?B.au:B.c,B.r,2)
if(o!=null)w=A.tF(B.A,s,B.cj,B.bZ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a6,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.hR(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a7),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.aA,B.aF,B.x,q,s,s),B.a7),s,56,s,s,B.GY,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.L(r?B.au:B.c,B.r,1.5)
l.push(A.ao(s,A.q(s,A.d(""+k,s,s,s,s,s,s,D.fAF,s,s,s),B.f,s,s,new A.o(B.cg,s,w,j,s,s,B.n),s,s,s,s,D.bH6,s,s,s),s,s,s,-6,-4,s))}k=r?B.cs:B.c
j=A.n(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cs,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bo,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.aw,A.q(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b5R,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bHh,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfp.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.J()
v=this.b
u=v?B.c:D.biG
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.p(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.by6.prototype={
B(d){var w=this,v=null,u=new C.flD(w),t=w.c,s=t?B.cs:B.c,r=A.n(12),q=u.$3(B.hV,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.bz:B.fo,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wF,"Zoom out",w.e)
return A.aJ(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.q(v,v,B.f,t?B.bz:B.fo,v,v,v,1,v,v,v,v,v,22),u.$3(B.apl,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.aj)}}
C.bns.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.L(B.bQ,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.x(A.a([A.X(s?O.a1C:A7.OF,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fwO,v,v,v)],r),B.m,v,B.ba,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fuE,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eWM(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a01.prototype={
S(){return new C.aDl()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDl.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b5,B.aP),s)
t=u?q:v.c
r.y=t==null?D.yS:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iha(w.r,w.f)
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
v.a2()},
Qf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hnN(p.y,p.w)
w=3
return A.b(A.lw(t.a.w,B.Ji),$async$Qf)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0T(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qf)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hTc(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ay.Hn(78,800),$async$Qf)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dwC(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qf,v)},
cbF(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hS(B.o.u(1000*Date.now()),w,D.yS,null,null,null,"","","","","",1,!1,0)
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
s=v.aFN(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aax(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aax=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dwB(r),s,null,!0,!0,x.y),$async$aax)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aax,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===B.J,i=new C.ud(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dwL(l),g),g.k("M.E"))
h=j?B.e8:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bFu,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.au,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hb(A.aO(!1,k,!0,new A.D(B.me,A.X(B.ef,B.pe,k,k,k,17),k),B.cR,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLl(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jS:B.jj
t=N.bEE(l.as)
if(l.as==null)s=A.X(B.pk,j?B.bu:B.bo,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.h8(u,t,s,k,42),A.ao(0,A.h8(B.bQ,k,D.bSH,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcbC(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDn(t,"Full name",B.mW,1,1,i,B.mw)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bk7(i,u,new C.dwM(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.byQ],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dwN(),A.U(o).k("N<1,eH<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.byS],q)
B.d.v(q,new A.N(f,new C.dwP(),A.U(f).k("N<1,eH<m?>>")))
o=A.x(A.a([t,B.am,new C.ae2(i,r,"Who is their parent?",p,new C.dwQ(l),k,o),B.aC,n,B.am,new C.ae2(i,m,"Who is their spouse / partner?",q,new C.dwR(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDn(q,"Birth date",D.aor,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDn(m,"Birth place",B.a1R,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDn(n,"Date of death (if deceased)",D.aqz,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDn(p,"Occupation",B.a33,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aC,s,B.by,new C.ae3(i,"Identity",u,k),B.af,new C.ae3(i,"Family links",o,k),B.af,new C.ae3(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDn(r,"Notes",B.lj,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.af,new C.aDm(i,"Child order",l.cjL(l.at),new C.dwS(l),new C.dwT(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hcY(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dwU(l):k
B.d.v(r,A.a([B.X,new C.aDm(i,"Visible in tree",u,w,new C.dwV(l),k)],v))}r.push(B.X)
w=j?B.jS:B.jj
u=A.n(14)
t=A.L(j?B.ee:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.au,k,k,k,k,k,k,k,k,14,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.iP(k,B.bQ,k,B.ag,k,new C.dwW(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.ali,k,k,k))
r.push(B.by)
w=j?B.aQ:B.au
j=j?B.ee:B.bP
r.push(A.A(A.a([A.E(A.dU(B.nV,new C.dwO(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cn,k,new A.b9(A.n(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bI(D.f7n,k,l.gcbE(),A.bo(B.aY,k,k,0,B.c,k,B.cn,k,new A.b9(A.n(14),B.a1),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.aw)
return A.eg(B.f5,k,B.ag,h,new A.a5(420,k,A.ch(A.x(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.am7,k,B.alv,new A.b9(g,B.a1),k,k)},
cjL(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ae3.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jS:B.jj,s=A.n(16)
return A.x(A.a([new A.D(D.amy,u,w),A.q(w,this.e,B.f,w,w,new A.o(t,w,A.L(v?B.ee:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bh,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bk8.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e8:B.c,r=A.n(12),q=A.L((t?B.ee:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aQ:B.au,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eJ,u,B.we,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bo,u,u,u,u,u,u,u,u,u,u,u,B.cC,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ae2.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e8:B.c,s=A.n(12),r=A.L((u?B.ee:B.bP).j(0.85),B.r,1),q=A.X(B.rV,u?B.bu:B.bo,v,v,v,v),p=A.l(v,v,u?B.aQ:B.au,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e8:B.c
return A.q(v,new A.Eg(A.a5f(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bo,v,v,v,v,v,v,v,v,v,v,v,B.cC,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kr,v,v,v)}}
C.bk7.prototype={
B(d){var w=new C.dwX(this)
return A.A(A.a([w.$3(D.wn,"Male",B.Pp),B.ae,w.$3(D.oq,"Female",B.P8),B.ae,w.$3(D.yS,"Other",B.nF)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aDm.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jS:B.jj,r=A.n(14),q=A.L(t?B.ee:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.au,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bo,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJv(u,B.wF,w.f,v),B.bl,new C.aJv(u,B.hV,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eD,v,v,v)}}
C.aJv.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.e8:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bo).j(0.4)
return A.aJ(!1,B.a3,!0,v,A.aO(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.ae4.prototype={
bUx(d){switch(d.a){case 0:return B.bQ
case 1:return B.bF
case 2:return B.d_}},
bUy(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZE(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AH(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e8:B.c
u=A.n(12)
t=A.L((w?B.ee:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bQ,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bo,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.au,p,p,p,p,p,p,p,p,14,p,p,B.R,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.q(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.yA,p,p,1/0)},
afa(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jS:B.jj,s=A.n(16),r=A.L(v?B.ee:B.bP,B.r,1)
return A.x(A.a([new A.D(D.amy,u,w),A.q(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hDP(r,q),o=q.c,n=t.bUx(o),m=N.bEE(q.f),l=t.e.a,k=l?B.e8:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kX?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bo,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.H,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.h8(u,m,m==null?A.X(B.pk,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a7),s,s,s,s,B.ey,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.d(t.bUy(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mc,s,s,s),s,s,s)
u=x.p
i=A.a([t.AH("Full name",i,B.mW)],u)
if(p>0)i.push(t.AH("Child order","#"+p,B.Pe))
r=A.a([h,B.aw,r,B.aR,l,B.X,v,B.by,t.afa("Identity",i),B.af,t.afa("Life details",A.a([t.AH("Birth date",q.w,D.aor),t.AH("Birth place",q.x,B.a1R),t.AH("Date of death",q.y,D.aqz),t.AH("Occupation",q.z,B.a33)],u)),B.af,t.afa("Family links",A.a([t.AH("1. Parent",t.aZE(q.d),B.Hd),t.AH("2. Spouse",t.aZE(q.e),B.Hr)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.afa("Notes",A.a([t.AH("Notes",q,B.lj)],u))],u))
r.push(B.by)
r.push(A.bI(B.KM,s,new C.dx6(d),A.bo(B.aY,s,s,s,s,s,B.cn,s,new A.b9(A.n(14),B.a1),s,s,s)))
return A.eR(s,k,new A.cR(B.lZ,A.ch(A.x(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.yH,s,s,B.ah),s),s,s,s,B.GL,B.da,s,new A.b9(j,B.a1),s)}}
C.Gq.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bo
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uv,A.hb(A.aJ(!1,B.a3,!0,A.n(8),A.aO(!1,A.n(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqM.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.ab().ag())
w=u.c
v=A.U(w).k("N<1,a8<m,@>>")
w=A.C(new A.N(w,new C.ceA(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jq(w,new C.ceB(),t,x.fO))
return s}}
C.aqN.prototype={
S(){return new C.aEU(A.a([],x.bF))},
gd1(){return this.c}}
C.aEU.prototype={
Y(){this.a3()
this.K2()},
K2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$K2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ceE(t.a.c),$async$K2)
case 3:r=e
w=4
return A.b(C.Bf(t.a.c),$async$K2)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.re(q,new C.e2e(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e2f(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$K2,v)},
z0(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
KQ(d,e){return this.cJc(d,e)},
cJc(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e2j(q,e))
t=3
w=6
return A.b(d.$0(),$async$KQ)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e2k(q))
$.eV.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KQ,v)},
Yi(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$Yi)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KQ(new C.e2b(t),"Preparing download\u2026"),$async$Yi)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yi,v)},
Ym(d){return this.bSr(d)},
bSr(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ym=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$Ym)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KQ(new C.e2c(t,d),"Preparing file\u2026"),$async$Ym)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ym,v)},
aha(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aha=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xH.cp().MD(B.Sm,B.uy,!0),$async$aha)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gau(o)}else o=!1
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
case 6:u=A.Hm()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aha,v)},
YZ(d){return this.c1U(d)},
c1U(d){var w=0,v=A.j(x.H),u=this
var $async$YZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KQ(new C.e2d(u,d),"Restoring family trees\u2026"),$async$YZ)
case 2:return A.h(null,v)}})
return A.i($async$YZ,v)},
YY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aha(),$async$YY)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YZ(s),$async$YY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YY,v)},
a2S(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pr(r,s.c,s.e),$async$a2S)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KQ(new C.e2i(t),"Creating QR code\u2026"),$async$a2S)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2S,v)},
a2t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Du()){t.z0("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cd(A.eb(new C.e2g(),!0,null,x.N)),$async$a2t)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YZ(r),$async$a2t)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2t,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.J,n=o?B.BA:B.iB,m=o?D.ajI:B.aQ,l=o?B.aM:B.bP,k=o?B.aQ:B.au,j=new C.dgN(n,m,l,k,o?B.bM:B.bo)
l=A.aG(p,p,p,p,A.X(B.eM,k,p,p,p,20),p,p,p,new C.e2m(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eG(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dgl(!0,B.jG,B.aJ,B.aJ,q.r?p:q.gczJ(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcvT()
t.push(A.E(C.dgl(!s,B.jo,B.b7,B.br,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dgl(!1,B.hW,B.aY,B.bQ,q.r?p:q.gbSk(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dgl(!1,R.zk,B.ax,B.aU,q.r?p:q.gc1R(),j,s,"Upload backup file"),1))
l=A.a([new C.bgl(v,l,p),B.l3,new C.adj(j,"QR restore",p),B.X,t,B.d6,new C.adj(j,"Backup files",p),B.X,A.A(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l3,new C.adj(j,"One tree",p),B.X],u)
B.d.v(v,J.b7(q.d,new C.e2n(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a0l,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.L(B.aY.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.du,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.q(p,A.A(A.a([O.aTg,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.R,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Ce,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dgN.prototype={}
C.bgl.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aY.j(0.32),B.kz,28)],x.V)
t=A.ao(p,A.X(B.uS,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.q(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.q(p,D.c0D,B.f,p,p,new A.o(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oT,A.E(A.x(A.a([D.fFN,B.Q,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c8B,B.n),p,p,p,p,p,p,p,p)}}
C.adj.prototype={
B(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.o(B.aY,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bgj.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aJ.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aJ.j(0.1),B.cL,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aJ(!1,B.a3,!0,q,A.aO(!1,o,!0,A.eI(A.da(new A.D(E.a_Y,A.x(A.a([A.q(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rR,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bG,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cC,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgo.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aY.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aJ(!1,B.a3,!0,v,A.aO(!1,u,!0,A.eI(new A.D(B.eU,A.A(A.a([A.q(v,D.c_S,B.f,v,v,new A.o(q,v,A.L(B.aY.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rR,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hW,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0l.prototype={
S(){return new C.aET()},
gd1(){return this.c}}
C.aET.prototype={
Y(){this.a3()
this.aa4()},
aa4(){var w=0,v=A.j(x.H),u=this,t
var $async$aa4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3x(u.a.c,B.E1),$async$aa4)
case 2:t=e
if(u.c!=null)u.m(new C.e26(u,t))
return A.h(null,v)}})
return A.i($async$aa4,v)},
aiC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e27(q))
t=4
p=A.hpt(q.a.d,B.E1)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.at5(n.e,m,l,B.E1,p,n.f),$async$aiC)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e28(q))
q.c.L(x.q).f.U(D.fgX)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.em(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e29(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiC,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.J,o=p?B.jz:B.qf,n=p?B.iA:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eG(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fWa,q,q,q,1,q,!0)
w=A.n(24)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.q7(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aY,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.x(A.a([B.Q,u,B.by,t,B.Q,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.ba,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.R,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcvC()
if(u)u=B.Ke
else u=A.X(r.e===!0?B.hH:B.aoq,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aY,q,B.h2,q,q,q,new A.ay(B.aY.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i9,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aD:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a5(1/0,q,A.bI(B.AM,q,new C.e2a(d),A.bo(B.aY,q,q,q,q,B.h2,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0m.prototype={
S(){return new C.blB(A.zO(B.yo,B.o0,B.v_))}}
C.blB.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c4(A.eG(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fNY,w,w,w,1,w,!0),B.w,A.zN(this.d,B.bZ,new C.e2o(this,d)),w,!1,!1,w,w)}}
C.b_p.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.RQ,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lS.prototype={}
C.a77.prototype={
S(){return new C.blh(null,null)}}
C.blh.prototype={
Y(){var w=this,v=null
w.a3()
w.d=A.bl(v,B.rK,v,1,v,w)
w.e=A.bl(v,B.qp,v,1,v,w)
w.a.toString
w.d.cP(0)
w.e.cP(0)},
by(d){var w,v,u=this
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
this.byE()},
B(d){var w,v,u=this,t=B.d.dP(D.a5Y,new C.dOH(u),new C.dOI())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cCd(A.c9(new A.h5(A.a([w,v],x.dS)),new C.dOJ(u,t),null),!0)}}
C.blg.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3g(d,e)
break
case"house":p.mg(d,e,D.df2)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.S()
t=A.J()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.p(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mm(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bs(d,e,12)
p.yC(d,e,B.lc,5,14)
break
case"grocery":p.cku(d,e)
break
case"calculator":p.ckb(d,e)
break
case"lumber":p.ckC(d,e)
break
case"kitchen":p.ckx(d,e)
break
case"landscape":p.mg(d,e,D.dfE)
s=new A.aF($.S().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c8(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c8(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bv())
w=A.J()
w.r=B.en.j(0.85).gp(0)
d.af(s,w)
p.Bs(d,e,8)
p.yC(d,e,B.ir,4,18)
break
case"plumbing":p.ckL(d,e)
break
case"electrical":p.mg(d,e,D.dr7)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.J()
u.r=B.c.j(q*0.12).gp(0)
d.aq(new A.a3(0,0,0+e.a,0+e.b),u)
p.mm(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mm(d,e,B.m3.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bs(d,e,10)
break
case"store":p.ckV(d,e)
break
case"paint_remodel":p.ckG(d,e)
break
case"roofing":p.ckN(d,e)
break
case"warehouse":p.cl1(d,e)
break
case"vehicles":p.cl_(d,e)
break
case"farm":p.cko(d,e)
break
case"restaurant":p.ckM(d,e)
break
case"tools":p.ckY(d,e)
break
case"wallet":p.cl0(d,e)
break
case"concrete":p.ckh(d,e)
break
case"blueprint":p.ck9(d,e)
break
default:p.b3g(d,e)}},
mg(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.J()
w.sav(new A.a9(B.aA,B.aF,B.x,f,null,null).aJ(0,v))
d.aq(v,w)},
mm(d,e,f,g,h){var w,v,u,t=new A.p(e.a/2,e.b/2),s=e.gdA()/2-h
$.S()
w=A.J()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cM(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yC(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ap(B.S,B.N,B.U,B.V,B.T)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.p(q+t*o,p+s*o),3.5,r)}},
Bs(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.S()
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.p(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3g(d,e){var w,v=this
v.mg(d,e,D.dpt)
w=v.c
v.mm(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mm(d,e,B.bN.j(0.45),-w*3.141592653589793*1.4,22)
v.bQh(d,e,B.i4,w)
v.yC(d,e,B.c.j(0.7),6,8)},
bQh(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.J()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aq(new A.a3(16,r,t,r+3),w)}},
cku(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.cuf)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=D.ddf[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.p(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mm(d,e,B.c.j(0.35),w,16)
l.yC(d,e,B.ir,5,12)},
ckb(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mg(d,e,D.cum)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdA()
$.S()
q=A.J()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.N(new A.p(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ft(h,B.ct,h,h,h,h,B.a5,B.bW,h,B.dA,B.bX)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dhn[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.en(r,h,h,B.cH,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eb()
p.a4(d,new A.p(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cuo[o]
l=B.kM.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.en(m,h,h,B.cH,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eb()
p.a4(d,new A.p(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.mm(d,e,B.c.j(0.35),w*1.5,14)
i.mm(d,e,B.eK.j(0.55),-v*3.141592653589793*2,8)
i.mm(d,e,B.y4.j(0.4),r*2.8,22)
i.yC(d,e,B.q6,8,10)
i.Bs(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.S()
v=new A.ap(B.S,B.N,B.U,B.V,B.T)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.p(12,j),new A.p(t,j),v)}},
ckC(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,W.aAa)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bn(new A.a3(20,r,u,r+10),B.hw)
$.S()
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=A.ar(B.h6,B.o6,(s+1)/2).gp(0)
d.am(q,p)}o.mm(d,e,B.h6.j(0.35),w,15)
o.Bs(d,e,8)},
ckx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.ddK)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.S()
m=new A.ap(B.S,B.N,B.U,B.V,B.T)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.p(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mm(d,e,B.bN.j(0.4),-w*3.141592653589793*2.2,11)
l.yC(d,e,B.q3,4,14)},
ckL(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mg(d,e,D.d1Y)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.S()
o=new A.ap(B.S,B.N,B.U,B.V,B.T)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.p(w,u),q*(0.12+r*0.14+p),o)}n.yC(d,e,B.pd,6,12)
n.mm(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
ckV(d,e){var w,v,u,t,s,r,q,p=this
p.mg(d,e,D.cI2)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bn(new A.a3(r,14,r+u,22),B.iw)
$.S()
q=new A.ap(B.S,B.N,B.U,B.V,B.T)
q.r=A.ar(B.fj,B.bN,(s+1)/2).gp(0)
d.am(r,q)}p.mm(d,e,B.c.j(0.3),w,16)
p.Bs(d,e,8)
p.yC(d,e,B.vX,5,13)},
ckG(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d8h)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bn(new A.a3(r,q,r+8,q+(18+s*22)),B.hP)
$.S()
r=new A.ap(B.S,B.N,B.U,B.V,B.T)
r.r=[B.io,B.dx,B.bN,B.ew][t].j(0.85).gp(0)
d.am(q,r)}this.mm(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ckN(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d5E)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ap(B.S,B.N,B.U,B.V,B.T)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.p(u*(0.1+r),s),new A.p(u*(0.18+r),s+10),q)}this.yC(d,e,B.cu,7,11)},
cl1(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.cKN)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bn(new A.a3(q,p,q+(t-s*8),p+16),B.hw)
$.S()
q=new A.ap(B.S,B.N,B.U,B.V,B.T)
q.r=A.ar(B.cu,B.aQ,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mm(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cl_(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dve)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bn(new A.a3(s,r,s+28,r+8),B.hw)
$.S()
q=new A.ap(B.S,B.N,B.U,B.V,B.T)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bs(d,e,6)},
cko(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dck)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.J()
s.r=B.m3.j(0.75).gp(0)
d.N(new A.p(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=B.hl.j(0.85).gp(0)
p.c=3
d.ah(new A.p(q,v),new A.p(q+s*6,t),p)}this.mm(d,e,B.m3.j(0.35),w,14)},
ckM(d,e){var w,v,u,t,s,r,q=this
q.mg(d,e,D.deS)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bB(new A.p(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ap(B.S,B.N,B.U,B.V,B.T)
r.r=B.c.j(0.22).gp(0)
d.bY(s,r)}q.yC(d,e,B.q3,5,16)
q.Bs(d,e,7)},
ckY(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dsG)
w=o.c
v=w*3.141592653589793
o.mm(d,e,B.o6.j(0.55),v*3,10)
o.mm(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=B.o6.j(0.8).gp(0)
d.N(new A.p(v+r*34,u+q*22),4,p)}},
cl0(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dvU)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bn(new A.a3(q,p,q+36,p+22),B.iw)
$.S()
q=new A.ap(B.S,B.N,B.U,B.V,B.T)
q.r=A.ar(B.ir,B.m3,r).gp(0)
d.am(p,q)}o.Bs(d,e,9)
o.mm(d,e,B.c.j(0.4),w*2.2,12)},
ckh(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dkh)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.p(v,u),34)
$.S()
s=A.J()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cM(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ap(B.S,B.N,B.U,B.V,B.T)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.p(v+t*34,u+s*34),3,p)}},
ck9(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dfY)
$.S()
w=A.J()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.p(t,0),new A.p(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.p(0,s),new A.p(v,s),w)
r=this.c
q=u*B.j.F(r*0.85,1)
$.S()
u=A.J()
u.r=B.dx.j(0.45).gp(0)
d.aq(new A.a3(0,q,0+v,q+6),u)
this.mm(d,e,B.lc.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.atR.prototype={
a07(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a07=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRt(),$async$a07)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9k(s),$async$a07)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
ahb(d){return this.cnj(d)},
cnj(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ipA(d),$async$ahb)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahb,v)},
B(d){var w,v,u,t=null,s=A.R(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jS:B.jj
w=x.p
v=A.a([C.aRS(!0,B.ri,1/0,B.qC,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bL(B.b6,t,t,new A.D(B.wa,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.R,t,t,!0,t,t,t,t,t,B.aB8,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b6,B.b8,B.x,u,t,t),B.n),B.bi))}v.push(A.ao(8,A.A(A.a([A.E(A.dh(D.bUr,D.fC2,new C.cnY(this,d),A.bo(B.aY,t,t,t,B.c,t,B.k_,t,t,t,t,B.ce)),1),B.ae,A.E(A.es(D.c1T,D.fR7,this.gcef(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.k_,t,t,D.b4o,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aJ(!1,B.a3,!0,B.ri,new A.an(B.a0,t,B.b2,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.aj),t)}}
C.aMV.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a2()}}
C.aUS.prototype={}
C.aUR.prototype={}
C.aSS.prototype={}
C.a__.prototype={
S(){return new C.aA5()}}
C.aA5.prototype={
Y(){var w,v,u=this
u.a3()
u.a.toString
w=new A.ba("",B.b5,B.aP)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
KG(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fhr)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aUS(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.R(d).ax.a===B.J,l=m?B.e8:B.c,k=A.n(20),j=A.q(n,D.c1y,B.f,n,n,new A.o(B.aY.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.au,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bG,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bo,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bu:B.bo,n,n,n,n),n,n,n,new C.d7Y(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bo,n,n,n,n,n,n,n,n,12,n,n,B.R,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bo,n,n,n,n,n,n,n,n,11,n,n,B.cC,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hpJ(new C.d7Z(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.au,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jS:B.jj
r=A.n(12)
q=A.n(12)
p=m?B.ee:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b6(4,r,B.dn),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d8_(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A0.Kl,n,n,n,n)
u=m?B.aQ:B.au
m=m?B.ee:B.bP
return A.eR(n,l,new A.cR(B.lZ,A.ch(A.x(A.a([j,B.aR,i,B.aw,w,B.Q,v,B.aR,t,B.by,A.A(A.a([A.E(A.dU(B.dl,new C.d80(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cn,n,new A.b9(A.n(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.at,A.E(A.bI(D.fRn,n,o.ga3d(),A.bo(B.aY,n,n,n,B.c,n,B.cn,n,new A.b9(A.n(12),B.a1),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.Cf,n,n,B.ah),n),n,n,n,A6.Cg,B.da,n,new A.b9(k,B.a1),n)}}
C.ZZ.prototype={
S(){return new C.aA4()}}
C.aA4.prototype={
Y(){this.a3()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.av,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
KG(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.ff4)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aUR(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.R(d).ax.a===B.J,o=p?B.e8:B.c,n=A.n(20),m=A.q(q,D.bZ3,B.f,q,q,new A.o(B.bQ.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.au,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bG,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bo,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bu:B.bo,q,q,q,q),q,q,q,new C.d7U(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aY.j(p?0.12:0.08)
w=A.n(12)
v=A.L(B.aY.j(0.25),B.r,1)
u=A.X(B.aoc,B.aY.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.au,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.au,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jS:B.jj
t=A.n(12)
s=A.n(12)
r=p?B.ee:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b6(4,t,B.dn),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d7V(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l4,q,q,q,q)
w=p?B.aQ:B.au
p=p?B.ee:B.bP
return A.eR(q,o,new A.cR(B.lZ,A.ch(A.x(A.a([m,B.aR,l,B.aC,v,B.by,A.A(A.a([A.E(A.dU(B.dl,new C.d7W(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cn,q,new A.b9(A.n(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.at,A.E(A.bI(D.fYr,q,this.ga3d(),A.bo(B.bQ,q,q,q,B.c,q,B.cn,q,new A.b9(A.n(12),B.a1),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.Cf,q,q,B.ah),q),q,q,q,A6.Cg,B.da,q,new A.b9(n,B.a1),q)}}
C.Zw.prototype={
S(){return new C.ayP()}}
C.ayP.prototype={
Y(){var w,v=this
v.a3()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.av,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b5,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.av,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.av,w)},
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
v.a2()},
gJY(){var w,v=this.e
v===$&&A.c()
w=A.d1(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakm(){var w=this.f
w===$&&A.c()
w=A.d1(B.a.i(w.a.a))
return w==null?0:w},
gb62(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQs(d){var w,v=B.j.E(this.gJY()+d,0.25,999999),u=B.j.iY(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cGk())},
azv(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aY,w,w,w,20):w,u=d.a,t=u?B.jS:B.jj,s=A.n(14),r=A.n(14)
u=u?B.ee:B.bP
return A.bs(w,new A.b6(4,s,B.dn),w,B.bE,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.adE),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceg(d,e,f){return this.azv(d,e,f,null)},
KG(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakm()<=0){s.c.L(x.q).f.U(D.fjj)
return}r=s.c
r.toString
v=s.gJY()
u=s.gakm()
t=s.gb62()
A.a6(r,!1).O(new C.aSS(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.J,m=new C.ud(n),l=n?B.e8:B.c,k=A.n(24),j=x.O,i=A.a([B.aY.j(0.22),B.bQ.j(0.14)],j),h=A.n(14)
i=A.q(o,D.bSn,B.f,o,o,new A.o(o,o,A.L(B.aY.j(0.35),B.r,1),h,o,new A.a9(B.a6,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.au,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bG,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.cC,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bu:B.bo,o,o,o,o),o,o,o,new C.cGq(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.au,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.azv(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Pn),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A0.Kl,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jS:B.jj
t=A.n(14)
s=A.L(n?B.ee:B.bP,B.r,1)
r=A.aG(o,o,o,o,A.X(B.wF,n?B.aQ:B.au,o,o,o,20),o,o,o,new C.cGr(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c3s,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e5,o,o,o,1,o,o,!1,"\u2022",o,new C.cGs(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.au,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aG(o,o,o,o,A.X(B.hV,n?B.aQ:B.au,o,o,o,20),o,o,o,new C.cGt(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.au,o,o,o,o,o,o,o,o,16,o,o,B.R,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.at,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.azv(m,"Amount","0.00",B.ia),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e5,o,o,o,1,o,o,!1,"\u2022",o,new C.cGu(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d8N,new C.cGv(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aC,h,B.Q,s,B.af,A.bW(B.bH,u,B.bt,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.au,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ceg(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cGw(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l4,o,o,o,o)],w))}i.push(B.aR)
h=B.aY.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bo,o,o,o,o,o,o,o,o,11,o,o,B.R,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJY()===B.j.iY(p.gJY())?B.j.M(p.gJY()):p.gJY()
s=p.gb62()
r=A.Bh(p.gakm())
i.push(A.q(o,A.A(A.a([A.E(A.x(A.a([u,B.aw,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bFr(p.gJY()*p.gakm(),B.b1,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a6,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.jm,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.ee:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cn,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.au,o,o,o,o,o,o,o,o,o,o,o,B.R,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cGx(d),h),1),B.at,A.E(A.dh(D.arG,D.fUk,p.ga3d(),A.bo(B.aY,o,o,0,B.c,o,B.cn,o,new A.b9(A.n(14),B.a1),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eR(o,l,new A.cR(A5.ae3,A.ch(A.x(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Aj.rP,o,o,B.ah),o),o,o,o,B.O0,B.da,o,new A.b9(k,B.a1),o)}}
C.a28.prototype={
S(){return new C.bxZ()}}
C.bxZ.prototype={
Y(){var w,v,u=this
u.a3()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b5,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.J,q=r?B.e8:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.au,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jS:B.jj
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b6(4,A.n(12),B.dn),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fl8(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dl,new C.fl9(d),s),1)
r=A.bo(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eR(s,q,new A.D(B.Cf,A.x(A.a([o,B.aC,v,B.aR,A.A(A.a([u,B.at,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fla(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.da,s,new A.b9(p,B.a1),s)}}
C.acm.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Ge.prototype={
S(){return new C.bxX(null,null)}}
C.bxX.prototype={
Y(){var w,v=this
v.a3()
w=A.bl(null,D.bzp,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bAX()},
gbCx(){switch(this.a.r.a){case 1:return A.a([B.aY,B.bQ,B.b1],x.O)
case 2:return A.a([B.bw,B.aY,B.b1],x.O)
case 3:return A.a([B.aJ,B.cg,B.jT],x.O)
case 4:return A.a([B.hn,B.bQ,B.fn],x.O)
case 0:return A.a([B.aY,B.bQ,B.b1],x.O)}},
B(d){var w=A.R(d),v=this.d
v===$&&A.c()
return new A.em(A.c9(v,new C.fl6(this,new C.ud(w.ax.a===B.J)),null),null)}}
C.ayI.prototype={
S(){return new C.bxY(null,null)}}
C.bxY.prototype={
Y(){var w,v=this
v.a3()
w=A.bl(null,B.nx,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bAY()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.fl7(this),null)}}
C.bxW.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bn(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aF($.S().r,B.ai,null,null,A.a([],x.v))
u.D(new A.j7(v))
w=A.J()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.am(v,w)
w=A.J()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.xE(u)
t=A.a([],x.U)
w=new A.rr(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jE(y.B));--r
q=new A.BK(w,r)
w.iw()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aTZ(d,q,r,o,0,0.2,4.2,0.92)
p.aTZ(d,q,r,s,0.52,0.11,3.2,0.58)}},
aTZ(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hMd(e.a.a,e,t,t+f*i,!0),r=A.bDM(s.glV().a.getBounds())
$.S()
w=A.J()
w.b=B.aa
w.c=j
w.d=B.bB
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a9(B.a6,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.In,null).aJ(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aP0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aP1.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.ud.prototype={}
C.atQ.prototype={
S(){return new C.aGn()},
ge3(){return this.c}}
C.aGn.prototype={
Y(){var w=this
w.a3()
w.d=w.a.d
w.ai1()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LY(w,v)
this.a2()},
ai1(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ai1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bDV(t.c,t.d.a),$async$ai1)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eTW(u,s))
return A.h(null,v)}})
return A.i($async$ai1,v)},
QH(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eTN(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LY(t,s),$async$QH)
case 2:if(u.c!=null)u.m(new C.eTO(u))
return A.h(null,v)}})
return A.i($async$QH,v)},
Re(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Re=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.R(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eTU(t,new C.ud(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Re)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9k(q),$async$Re)
case 6:case 5:t.m(new C.eTV(t,r))
w=7
return A.b(t.QH(),$async$Re)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Re,v)},
Wr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ipl(r),$async$Wr)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eTI(t,new C.rj(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QH(),$async$Wr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wr,v)},
cjl(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hDL(t,new C.eTM(u),w,v)},
abT(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.o(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b4a,w,w,B.n),w,22,w,w,w,w,w,22)},
aaV(d){return this.bOw(d)},
bOw(d){var w=0,v=A.j(x.H),u=this
var $async$aaV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eTL(u,d))
w=2
return A.b(u.QH(),$async$aaV)
case 2:return A.h(null,v)}})
return A.i($async$aaV,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.R(a2).ax.a===B.J,e=f?B.c2:B.iB,d=A.n(8),a0=A.X(Z.a1z,f?B.bu:B.bo,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.GS,A.A(A.a([a0,B.bl,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bo,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eTX(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b2,B.t,A.a([A.bx(A.n(22),C.aRS(!0,A.n(22),1/0,B.qC,g,d,1/0),B.aq),A.ao(10,A.dh(D.bX0,D.fWJ,h.gb4_(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aY.j(f?0.5:0.38),B.eX,22),new A.ac(-4,B.G,B.bQ.j(0.2),B.H,32)],w)
u=A.n(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.H,10)],w)
s=A.n(16)
r=h.d
v=A.q(g,A.q(g,A.bx(s,new A.an(B.a0,g,B.b2,B.t,A.a([C.aRS(!0,A.n(16),1/0,B.OQ,g,r.c,1/0),A.c3(g,new A.o(g,g,g,g,g,new A.a9(B.b6,B.b8,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi),A.ao(g,h.abT(!0),g,g,8,g,8,g),A.ao(g,A.cCY(h.abT(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cCY(h.abT(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cCY(h.abT(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dh(D.bSY,D.fQ3,h.gb4_(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c5a,B.n),g,g,g,g,B.me,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.au,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.beU,B.oa,B.h7],u):A.a([B.b1,B.aY,B.bQ],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aY.j(f?0.45:0.35),B.eX,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.k3,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h8,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aC,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bFr(h.d.gxE(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.Q,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cC,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.L(B.hC.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aJ.j(0.28),B.cL,14)],t)
j=B.aJ.j(0.22)
i=A.n(10)
u=A.q(g,A.bx(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bEf,A.A(A.a([o,B.at,A.aJ(!1,B.a3,!0,g,A.aO(!1,n,!0,A.eI(new A.D(V.wg,A.x(A.a([A.q(g,D.arg,B.f,g,g,new A.o(j,g,A.L(B.aJ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fK,D.fER],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjk(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.aA,B.aF,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aR,w,B.Q,u,B.by,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.au,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dh(Av.a3r,D.fCH,h.gbD0(),A.bo(B.aY,g,g,g,B.c,g,B.it,g,new A.b9(A.n(12),B.a1),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.e8:B.c
v=A.n(14)
u=A.L(f?B.ee:B.bP,B.r,1)
t=A.X(B.a1U,f?B.bu:B.bo,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.au,g,g,g,g,g,g,g,g,g,g,g,B.R,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.x(A.a([t,B.X,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bo,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qy,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eTY(h,new C.ud(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.C5,A.at(A.n0(g,f?B.bu:B.bo,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.C8,a0,g),A.E(A.ch(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yI,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bGH(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e8:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cL,12)],x.V),n=A.n(16),m=A.q(u,u,B.f,u,u,D.b6V,u,u,u,u,u,u,u,5),l=B.aY.j(r?0.22:0.12),k=A.n(12)
l=A.q(u,A.X(s?B.ib:B.ht,B.b1,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.au,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcZQ()
v=A.Bh(d.d)
B.d.v(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.ba,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aY.j(0.14),B.bQ.j(0.1)],x.O)
w=A.n(12)
k=A.q(u,C.bFr(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a6,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.ha,u,u,u)
w=x.p
return A.q(u,A.bx(n,new A.EE(A.A(A.a([m,A.E(new A.D(B.alb,A.A(A.a([l,B.bd,t,B.ae,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bu:B.bo).j(0.75),u,u,u,20),u,u,u,new C.eTJ(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b5N,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aep.prototype={
EV(d){return this.bPU(d)},
bPU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pr(d,o,!1),$async$EV)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bQ(Ai.C3,null,x.H),$async$EV)
case 4:s=t.d
w=5
return A.b(C.fUk(!0,o,s),$async$EV)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.H9(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EV)
case 6:p=f
w=7
return A.b(A.pq(o,!1),$async$EV)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EV,v)},
a09(d){return this.czK(d)},
czK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a09=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pr(d,s,!1),$async$a09)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hE(d,new C.atK(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pq(s,!1),$async$a09)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a09,v)},
QI(d){return this.cvO(d)},
cvO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aKN,!0,"NgmyWorksheetProjectScan",x.N),$async$QI)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFs(s),$async$QI)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fir)
w=1
break}q=C.hfk(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$QI)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QI,v)},
a0a(d){return this.cI2(d)},
cI2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bEZ(),$async$a0a)
case 3:s=f
if(s==null){w=1
break}r=C.hfk(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$a0a)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0a,v)},
B(d){var w=this,v=null,u=A.R(d).ax.a===B.J,t=new C.ud(u),s=w.d.d.length,r=u?B.e8:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kz,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wf,A.q(v,A.x(A.a([w.cyj(d,t,s),new A.D(D.bDE,A.x(A.a([w.b6Y(t,"QR restore"),B.X,A.A(A.a([w.b1Z(t,!0,B.jG,B.aJ,B.aJ,new C.eU_(w,d),"Show to scan","QR code"),B.at,w.azw(t,B.jo,B.b7,B.br,new C.eU0(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d6,w.b6Y(t,"Backup files"),B.X,A.A(A.a([w.azw(t,B.hW,B.aY,B.bQ,new C.eU1(w,d),"Full copy","Backup file"),B.at,w.azw(t,R.zk,B.ax,B.aU,new C.eU2(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f0,B.cO,B.fP],k):A.a([B.b1,B.aY,B.bQ],k)
w=A.ao(l,A.X(B.uS,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.n(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cL,12)],x.V)
r=this.d
s=A.q(l,C.aRS(!0,A.n(13),64,D.bOf,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,K.ab3,l,l,l)
r=C.bFr(r.gxE(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bE1,A.x(A.a([v,A.A(A.a([s,B.ev,A.E(A.x(A.a([u,B.aw,t,B.Q,A.A(A.a([r,B.ae,A.q(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fT,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eTZ(d),l,l,l,A.nV(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aT4,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.aA,B.aF,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b6Y(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.o(B.aY,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bo,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b1Z(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.ajI:B.aQ
if(e)w=B.aJ.j(o?0.45:0.35)
else{w=o?B.ee:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aJ.j(0.12),B.cL,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.L(h.j(0.35),B.r,1)
t=A.q(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rR,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.au,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aJ(!1,B.a3,!0,r,A.aO(!1,q,!0,A.eI(new A.D(E.a_Y,A.x(A.a([t,B.af,u,B.bG,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bo,r,r,r,r,r,r,r,r,11,r,r,B.cC,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azw(d,e,f,g,h,i,j){return this.b1Z(d,!1,e,f,g,h,i,j)}}
C.atK.prototype={
S(){return new C.bmY()}}
C.bmY.prototype={
Y(){this.a3()
this.afW()},
afW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFt(p.c,p.d),$async$afW)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eTD(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eTE(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.R(d).ax.a===B.J,f=g?B.BA:B.iB,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eM,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eTF(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.O,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.x7],u),B.m,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f0,B.cO,B.fP],s):A.a([B.b1,B.aY,B.bQ],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aY.j(g?0.4:0.3),B.eX,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.df,B.K,h,h)
p=C.bFr(p.gxE(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.q(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.q(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fT,h,h,h)],u),B.m,h,B.ba,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.aA,B.aF,B.x,s,h,h),B.n),h,h,h,h,E.a0k,h,h,1/0)
t=g?D.bq2:B.c
q=A.n(24)
p=A.L(w?B.aJ.j(0.4):B.aY.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.du,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vc,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eq0)
else{m=A.n(20)
l=A.L(B.aO,B.r,1)
o.push(A.q(h,A.q7(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aR)
n=w?B.aJ:B.aY
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.L((w?B.aJ:B.aY).j(0.35),B.r,1)
k=w?B.P2:B.PC
k=A.X(k,w?B.aJ:B.aY,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.it,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Af.Oc,e,h),A.E(A.ch(A.x(A.a([s,B.aR,A.q(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.uu,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.amj,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.atP.prototype={
S(){return new C.aGm(A.zO(B.Nu,B.o0,B.v_))}}
C.aGm.prototype={
t(){this.d.t()
this.a2()},
aOp(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iY(w,d)},
cf8(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.ind(t)
if(s!=null){this.aOp(s)
return}r=C.huf(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOp(B.a.i(B.a.b2(r,B.a.cq(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eG(A.a([A.aG(t,t,t,t,A.X(u.f?B.uH:Aa.Pa,t,t,t,t,t),t,t,t,new C.eTH(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BA,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fPX,t,t,t,1,t,!0),q=A.zN(u.d,B.bZ,u.gcf7()),p=A.n(28)
p=A.at(A.q(t,t,B.f,t,t,new A.o(t,t,A.L(B.aY,B.r,3),p,A.a([new A.ac(2,B.G,B.aY.j(0.35),B.H,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b2,B.t,A.a([q,p,A.ao(32,A.q(t,D.fOI,B.f,t,t,new A.o(w,t,A.L(B.aY.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jm,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLf.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.OR.prototype={
S(){return new C.aGo(D.acW,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGo.prototype={
gcFP(){return J.bGz(this.e,0,new C.eUp())},
Y(){this.a3()
$.aW.c1$.push(this)
this.wh()},
t(){$.aW.hV(this)
this.a2()},
jl(d){if(d===B.fO)this.wh()},
wh(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Dt(q.a.c).df(0,B.jZ),$async$wh)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eUl(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eUm(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wh,v)},
Io(d){return this.bME(d)},
bMD(){return this.Io(null)},
bME(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Io=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ipn(l,d),$async$Io)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lA(l,r,q,D.dkx,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LY(t.a.c,p),$async$Io)
case 4:o=f
w=5
return A.b(t.wh(),$async$Io)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.ffy)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fhl)
else n.L(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.EZ(m)
case 1:return A.h(u,v)}})
return A.i($async$Io,v)},
EZ(d){return this.cj6(d)},
cj6(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.atQ(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EZ)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LY(u.a.c,t),$async$EZ)
case 5:case 4:w=6
return A.b(u.wh(),$async$EZ)
case 6:return A.h(null,v)}})
return A.i($async$EZ,v)},
w2(d){return this.c1W(d)},
c1W(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bEZ(),$async$w2)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aKN,!0,"NgmyWorksheetProjectScan",x.N),$async$w2)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFs(q),$async$w2)
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
r.U(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hfk(s)
w=15
return A.b(C.LY(t.a.c,p),$async$w2)
case 15:o=f
w=16
return A.b(t.wh(),$async$w2)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fhq)
w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.EZ(p)
case 1:return A.h(u,v)}})
return A.i($async$w2,v)},
On(d){return this.bLi(d)},
bLi(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$On=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eU6(d),s,null,!0,!0,x.y),$async$On)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p_(t.a.c,A.a([],x.D)),$async$On)
case 6:w=7
return A.b(t.wh(),$async$On)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.ffD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
cjj(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eUf(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7A(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jS
else w=B.c
v=A.n(16)
u=A.L(p?B.ee:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.q(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.au,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aJ(!1,B.a3,!0,r,A.aO(!1,q,!0,A.q(r,A.x(A.a([s,B.af,t,B.bG,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bo,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.we,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0F(d,e){return this.cj7(d,e)},
cj7(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0F=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eUa(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0F)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hDL(r,new C.eUb(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Op(d,e),$async$a0F)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0F,v)},
b4B(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.q(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.az
else t=h.a?B.aQ:B.au
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bo,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aJ(!1,B.a3,!0,u,A.aO(!1,u,!0,new A.D(B.Ce,A.A(A.a([s,B.bd,t,A.X(B.eI,w?B.bu:B.bo,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cq2(d,e,f,g,h,i){return this.b4B(!1,d,e,f,g,h,i)},
Op(d,e){return this.bLs(d,e)},
bLs(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Op=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lm(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Op)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDG(t.a.c,d.a),$async$Op)
case 6:w=7
return A.b(t.wh(),$async$Op)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.J,n=new C.ud(o),m=o?B.c2:B.iB
if(q.f)o=D.bcG
else{w=q.bFO(n)
v=q.c1_(n)
u=q.gbCU()
if(o)t=B.jS
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.af,v,B.aR,new C.Ge(A.q(p,A.A(A.a([q.aD3(P.OP,"Projects",n,D.acW),q.aD3(B.wu,"Cashier",n,D.b0H),q.aD3(B.Hd,"Family Tree",n,D.hAL)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ey,0.95,u,p),B.by],r)
w=q.d
if(w===D.acW){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.au,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.ayI(q.gaSK(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aC,q.cq4(n)],r))}else{o=q.a
if(w===D.b0H)u.push(new C.apE(o.c,n,p))
else{w=q.r
u.push(new C.aqP(o.c,o.d,o.e,o.f,new C.eUs(q),new C.eUt(q),new A.bP(w,x.b4)))}}o=A.ch(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Al.O5,p,p,B.ah)}return A.c4(p,m,A.bm(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bFO(d){var w=null,v=A.n(8),u=d.a,t=A.X(Z.a1z,u?B.bu:B.bo,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kV,A.A(A.a([t,B.bl,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bo,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eU3(this),w,w,w,w,w,w,w)},
gbCU(){switch(this.d.a){case 0:return D.ac9
case 1:return D.hpG
case 2:return D.aca}},
c1_(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.bYU,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bIE,A.aJ(!1,B.a3,!0,w,A.aO(!1,A.n(12),!0,A.q(w,D.bWj,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eU7(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b1.j(0.55),q=A.n(12)
return new C.Ge(A.q(w,A.x(A.a([new A.D(E.a03,s,w),A.q(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.Bh(this.gcFP()),w,w,w,w,w,w,D.fyY,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.ur,B.jm,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aY,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hpF,w)},
aD3(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aY:B.L,q=A.n(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aY.j(0.42),B.cL,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bo
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bo
return A.E(A.aJ(!1,B.a3,!0,u,A.aO(!1,s,!0,A.cT(u,A.A(A.a([w,B.e2,new A.dn(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.ba,B.i,0,u,u),u,u,B.cx,new A.o(r,u,p,q,o,u,B.n),B.iH,u,u,u,u,B.GT,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eUo(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cq4(d){var w,v,u,t,s,r,q=this,p=null
if(J.cr(q.e)){w=d.a
v=w?B.e8:B.c
u=A.n(15)
t=A.q(p,D.bWp,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aY.j(0.5),B.eX,28)],x.V),D.c7B,B.a7),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.au,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Ge(A.q(p,A.x(A.a([t,B.d6,s,B.Q,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bo,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dW,A.A(A.a([A.E(q.aUk(B.jo,"Scan QR",new C.eUi(q),d),1),B.at,A.E(q.aUk(R.zk,"Upload file",new C.eUj(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aC,A.bI(D.h_p,p,q.gaSK(),A.bo(B.aY,p,p,p,B.c,B.h2,p,p,new A.b9(A.n(12),B.a1),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bF6,1.05,D.ac9,p)}w=J.b7(q.e,new C.eUk(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Ge(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bU,1,D.ac9,p)},
aUk(d,e,f,g){var w=null,v=B.aY.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.L(B.aY.j(0.45),B.r,1)
return A.aJ(!1,B.a3,!0,u,A.aO(!1,t,!0,A.q(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.Q,A.d(e,w,w,w,w,w,w,D.fxf,B.K,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.al4,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cq3(d,e){var w,v,u=null,t=e.a,s=t?B.e8:B.c,r=A.n(14),q=A.L(t?B.ee:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.er,10)],x.V),o=A.n(14),n=t?B.bu:B.bo
n=A.bx(B.Xg,new A.fF(1.7777777777777777,C.aRS(!0,B.fh,1/0,P.OP,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.au,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.Bh(d.gxE()),u,u,u,u,u,u,D.fvd,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aJ(!1,B.a3,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bE,A.A(A.a([v,A.aG(u,u,u,u,A.X(Am.a2D,t?B.bu:B.bo,u,u,u,u),u,u,u,new C.eUg(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eUh(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ei,u,u,u,1/0)}}
C.bzK.prototype={}
C.rj.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcZQ(){var w,v,u,t,s=this.c
if(s===B.j.iY(s))w=B.o.u(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lA.prototype={
gxE(){return B.d.cI(this.d,0,new C.cFF())},
ak(){var w=this,v=w.d,u=A.U(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.cFE(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
beY(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lA(w.a,w.b,v,u,w.e)},
beG(d){return this.beY(d,null)},
Tv(d){return this.beY(null,d)}}
C.Ik.prototype={
a7(){return"FamilyGender."+this.b}}
C.hS.prototype={
ak(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.hzg(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aFN(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hS(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alU.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kR.prototype={
gaqg(){var w=this.f
return new A.Y(w,new C.bSe(),A.U(w).k("Y<1>")).gI(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("N<1,a8<m,@>>")
v=A.C(new A.N(v,new C.bSd(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ifA(w.y),"games",w.z],x.N,x.z)},
wX(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kR(w.a,v,u,t,s,r,w.r,q,p,o,n)},
beX(d,e){var w=null
return this.wX(w,w,w,d,e,w,w,w,w)},
cPc(d,e,f,g,h,i,j){return this.wX(d,e,null,f,g,h,i,j,null)},
aFS(d,e){var w=null
return this.wX(w,w,w,w,d,w,w,e,w)},
cPe(d,e,f,g,h,i,j,k){return this.wX(d,e,null,f,g,h,i,j,k)},
cNI(d){var w=null
return this.wX(w,w,w,w,w,w,w,d,w)},
cO5(d){var w=null
return this.wX(w,w,w,w,w,w,w,w,d)},
beA(d){var w=null
return this.wX(w,w,d,w,w,w,w,w,w)},
aFD(d){var w=null
return this.wX(w,w,w,w,w,d,w,w,w)},
cOK(d,e,f){var w=null
return this.wX(w,d,w,w,e,w,w,f,w)},
cNv(d){var w=null
return this.wX(w,w,w,d,w,w,w,w,w)},
cOh(d,e){var w=null
return this.wX(d,w,w,w,w,w,e,w,w)}}
C.cFG.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cFH.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIr.prototype={}
C.baq.prototype={
aj(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.baq()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b2(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.bap.prototype={
gwP(){return!0},
gGu(){return this.z.b<this.b.length},
aW_(d){switch(0){case 0:return d.a.c}},
aVG(d){switch(0){case 0:return d.a.d}},
bVr(d,e){switch(0){case 0:return new A.hO(d,e)}},
bUP(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iN(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.I4(b4)
switch(0){case 0:v=b5.b
u=new A.kN(0,v,0,1/0)
t=w===B.V3
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aW_(g)
f.toString
e=b1.aVG(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIr(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIr(k,j,i))}d=s.length
switch(0){case 0:q=b5.cz(new A.hO(m,l))
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aW_(g)
e=b1.aVG(g)
e.toString
a9=b1.bUP(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVr(a6,a3+a9)
b0=g.a
g.a=new A.iN(e.a,e.b,b0.c,b0.d)
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
v.eg(u.a,u.b,0,1)
w.pl(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fV(d)
w.ny(0)},
GY(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.by_.prototype={}
var z=a.updateTypes(["aB<~>()","P(hS)","~()","P(kR)","P(nr)","a8<m,@>(kR)","F(kR,kR)","F(hS,hS)","m(hS)","kR(a8<@,@>)","P(lA)","nr(a8<@,@>)","a8<m,@>(nr)","P(uJ)","uJ()","F(hS)","ai<hS>()","P(zw)","a01(Z)","m?(hS)","eH<m?>(hS)","aB<~>(lA)","P(rj)","a8<m,@>(hS)","hS(a8<@,@>)","F(lA,lA)","P(afH)","~(bd)","v(oC)","F(F,a9N)","P(qC<F>)","~(qC<F>)","TQ(Z)","P(MD)","P(uI)","~(hS)","m(m)","W9(Z)","TP(Z)","ae4(Z)","ZY(Z)","hS(hS)","cL(bA<m,Gu>)","cL(KM)","a_r(Z)","F?(hS)","hS()","P(KM)","D(hS)","~(Ik)","a_n(Z)","v(Ik,m,a0)","P(afA)","bA<m,ai<a8<m,@>>>(m,ai<nr>)","a_p(Z)","+count,id,name(F,m,m)(kR)","m(kR)","a0l(Z)","a0m(Z)","P(lS)","lS()","Zw(Z)","a28(Z)","a__(Z)","ZZ(Z)","~(F)","~(m,lp?)","v(rj)","aep(Z)","~(me)","aB<~>([m?])","I(I,lA)","v(lA)","I(I,rj)","a8<m,@>(rj)","rj(a8<@,@>)","ai<lp>()","uI()","m(V)","lA(a8<@,@>)","ct(Ij)","m(lA)","a8<m,@>(lA)","F(nr,nr)","kR(a8<m,@>)","kR(kR)"])
C.fMV.prototype={
$1(d){return d.a+" "+d.b},
$S:131}
C.fMU.prototype={
bof(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rb(s,d,B.hX,"book",E.Gw),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LL(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bof(d)},
$S:278}
C.fMW.prototype={
$1(d){return d.b},
$S:131}
C.fWp.prototype={
$1(d){var w=null
return A.eR(w,B.L,new H.Qg(this.a,this.b,w),w,w,0,B.a_Z,B.da,w,w,w)},
$S:49}
C.fAg.prototype={
$1(d){return d!=null},
$S:208}
C.fAh.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:208}
C.fAm.prototype={
$1(d){if(this.a)return new A.p(d.a*520,d.b*160)
return d},
$S:172}
C.fKE.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.tj,w,w,w,w,w,w,w,B.dC,w,w,10.5,w,B.ez,w,!0,w,w,w,w),w),u=f?B.ez:B.wo
return new A.o5(D.bAt,A.aaC(A.a([new A.fV(130,w,v),new A.zv(1,B.H6,A.fc(e,w,w,w,A.ha(w,g==null?D.esp:g,w,w,w,w,w,w,w,B.dC,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yk,B.lQ))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1951}
C.fKD.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vT(999)
f=A.xw(A.lN(h,A.fc("Cashier",h,h,h,A.ha(h,D.Ah,h,h,h,h,h,h,h,B.dC,h,h,10,h,B.ez,h,!0,h,h,h,h),h),h,new A.kO(D.esg,h,f,B.i0,h),h,h,D.bAZ,h))
w=A.xw(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dC,h,h,22,h,B.ez,h,!0,h,h,h,h),h))
v=A.xw(A.fc(C.xe(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaC,h))
u=A.vT(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dC,h,h,14,h,B.ez,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaC,h)
q=A.vT(10)
p=x.Z
u=A.lN(h,A.zo(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lN(h,A.zo(A.a([A.fc("Amount owed",h,h,h,D.aaC,h),new A.fV(h,2,h),A.fc(A.Bh(t.c),h,h,h,A.ha(h,D.Ah,h,h,h,h,h,h,h,B.dC,h,h,20,h,B.ez,h,!0,h,h,h,h),h)],p),B.rH,B.lQ),h,new A.kO(B.pG,h,q,B.i0,h),h,h,D.bA9,1/0)],p),B.rH,B.lQ),h,new A.kO(E.aM9,h,u,B.i0,h),h,h,D.bC5,1/0)
q=new A.nO(D.esj,0.9,B.l8)
r=A.vT(12)
s=i.c
o=s.$2("Original due",C.xe(t.r,!1))
n=s.$2("Current due",C.xe(t.f,!1))
m=i.d
l=new A.nO(m,1.1,B.l8)
k=A.vT(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lN(h,A.xw(A.fc(t.gaMY(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dC,h,h,11,h,B.ez,h,!0,0.5,h,h,h),h)),h,new A.kO(h,new A.pV(l,l,l,l),k,B.i0,h),h,h,D.bB6,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Ah))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Ah))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.tj,h,h,h,h,h,h,h,B.dC,h,h,10.5,h,B.ez,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,To>")
o=A.C(new A.N(o,new C.fKC(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.bap(5,5,new C.baq(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lN(h,A.zo(k,B.yk,B.lQ),h,new A.kO(h,new A.pV(q,q,q,q),r,B.i0,h),h,h,B.alf,1/0)],p)
w=j.a
if(w!=null){v=new A.nO(B.Jx,1,B.l8)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.tj,h,h,h,h,h,h,h,B.dC,h,h,10,h,B.ez,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lN(h,new A.IE(w,B.Xq,h,h),h,new A.kO(h,new A.pV(v,v,v,v),A.vT(6),B.i0,h),82,h,B.Oa,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fnF,h))
f.push(new A.fV(h,18,h))
f.push(A.xw(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.Ah,h,h,h,h,h,h,h,B.dC,h,h,14,h,B.ez,h,!0,1.8,h,h,h),h)))
return f},
$S:362}
C.fKC.prototype={
$1(d){var w=null,v=new A.nO(D.Jy,0.7,B.l8),u=A.vT(999)
return A.lN(w,A.fc(C.xe(d,!1),w,w,w,A.ha(w,D.Jy,w,w,w,w,w,w,w,B.dC,w,w,9.5,w,B.ez,w,!0,w,w,w,w),w),w,new A.kO(w,new A.pV(v,v,v,v),u,B.i0,w),w,w,D.bGx,w)},
$S:1952}
C.c7t.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.n(999),t=A.L(B.bD.j(0.28),B.r,1)
return A.q(w,A.d(C.xe(d,!1),w,w,w,w,w,w,D.fuI,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eH,w,w,w)},
$S:1953}
C.fWW.prototype={
$1(d){var w=null,v=A.aH(d,B.c0,x.w).w,u=A.n(26),t=A.aG(w,w,w,w,D.bZR,w,w,w,new C.fWT(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eR(w,B.L,new A.cR(new A.aY(0,380,0,v.a.b*0.9),A.aJ(!1,B.a3,!0,u,new A.D(B.a_N,A.x(A.a([new A.bL(B.a9,w,w,t,w),new A.dn(1,B.co,A.ch(A.x(A.a([new A.em(new C.b_r(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zt,D.fWE,new C.fWU(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fl,w,new A.b9(A.n(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3h,D.fT2,new C.fWV(r,d),A.bo(B.b1,w,w,w,B.c,w,B.fl,w,new A.b9(A.n(14),B.a1),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.au,0,w,w,w,w,w,B.aj),w),w,w,0,Ar.a0c,B.da,w,w,w)},
$S:49}
C.fWT.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hd),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dM.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aB(o,0,32)
w=5
return A.b(A.tk(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fWV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fRf(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fWO.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eR(w,B.au,A.x(A.a([new A.D(D.bBU,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nc,w,w,w),1),A.aG(w,w,w,w,B.lo,w,w,w,new C.fWM(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.dn(1,B.co,new A.D(B.f2,A.bx(A.n(14),A.fR(t,B.A,w,w,B.cj,B.dz,!1,w,!1,w,w),B.aq),w),w),new A.D(B.NP,new A.a5(1/0,w,A.dh(B.oC,D.aWl,new C.fWN(t,this.c,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.O1,B.da,w,new A.b9(v,B.a1),w)},
$S:49}
C.fWM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tk(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fX_.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eR(w,B.au,new A.D(D.bC1,A.x(A.a([A.A(A.a([D.bHK,A.aG(w,w,w,w,B.lo,w,w,w,new C.fWY(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.Q,new A.em(A.bx(A.n(14),A.q(w,A.b4(w,w,w,new C.bcC(s.ax,w),B.ay),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oC,D.aWl,new C.fWZ(t,s,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.da,w,new A.b9(v,B.a1),w)},
$S:49}
C.fWY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fWZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hd),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aB(p,0,32)
r=J.eQ(B.dM.gaU(s))
w=5
return A.b(A.tk(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fEY.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dPz.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dPk.prototype={
bnt(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e8:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dPn(s,q,e),p,!0,!0,!1,B.JP,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dPo(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnt(d,e)},
$S:1954}
C.dPn.prototype={
$1(d){var w,v=null,u=this.c===B.wX,t=u?D.dro:D.dn0
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.au,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.alM,A.x(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.im(!0,v,v,B.y,D.fee,new C.dPm(this.a,w,t,d),t.length,v,B.dU,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dPm.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cO.j(0.14)
else w=t.b.a.d.a?B.O:B.aQ
v=A.n(14)
if(q)u=B.cO
else u=(t.b.a.d.a?B.bu:B.bo).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.q(B.A,C.b_q(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dPl(t.d,r),s,s,s,s,s,s,s)},
$S:183}
C.dPl.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dPo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPi.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:97}
C.dPj.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cx,e,v)
return new A.d0(e,!1,A.it(B.A,A.at(A.aJ(!1,B.a3,!0,v,new A.e0(new C.dPh(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bN.T>"))),v)},
$S:34}
C.dPh.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.c0,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e8:B.c,f=A.n(14),e=A.L((h?B.bu:B.bo).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.au,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aO(!1,v,!0,new A.D(B.ey,A.X(B.cz,i.a.d.a?B.bu:B.bo,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dP2(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aUQ("Name")
r=l.a
q=r.d==null?k:new C.dP3(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bp:B.m5
n=A.L(B.cO.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.beQ(new A.D(B.fy,A.aO(!1,p,!0,A.q(B.A,C.b_q(m==null?"\ud83d\udc64":A.fLs(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a7),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l4,k,B.aar,k,k)
v=A.a([v,B.af,t,B.Q,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bo,k,k,k,k,k,k,k,k,11.5,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aVw("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dP4(r,a0),r.d===B.wX),1),B.ae,A.E(i.aVw("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dP9(r,a0),r.d===B.a77),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.Q,new A.bL(B.a6,k,k,A.ho(D.bY8,D.fUW,new C.dPa(r,l.e,a0),A.fs(k,k,k,k,k,k,k,k,k,k,k,B.cO,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aQ:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uM(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aUR("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.e5,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.O:B.aQ
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.L((t?B.bu:B.bo).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xe(r.a,!1)
v.push(A.aJ(!1,B.a3,!0,q,A.aO(!1,p,!0,A.q(k,A.A(A.a([A.E(A.x(A.a([t,B.bG,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.au,k,k,k,k,k,k,k,k,14,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bUR],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bh,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPb(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.Q,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aQ:B.au,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aUQ("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.au,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3_(r.b.length!==0,B.mW,new C.dPc(r,i,a0),new C.dPd(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3_(r.c.length!==0,D.bOd,new C.dPe(r,i,d,a0),new C.dPf(r,a0),"Camera or gallery","Selfie"))
v.push(B.Q)
t=l.w
v.push(new Aq.a8q("Signature (optional)",t,new C.dPg(a0),new C.dP5(a0,t),new C.dP6(d,t,a0),k))
v.push(B.aC)
i=i.a.d.a
t=i?B.bu:B.bo
s=(i?B.bu:B.bo).j(0.28)
s=A.E(A.dU(E.aWe,new C.dP7(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qv,k,new A.b9(A.n(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cO,k,k,k,B.c,k,B.qv,k,new A.b9(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vw,k,k,k),k,new C.dP8(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.q(k,A.ch(A.x(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rO,B.jm,k,k,360)},
$S:176}
C.dP2.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dP3.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dP4.prototype={
$0(){return this.b.$1(new C.dP1(this.a))},
$S:0}
C.dP1.prototype={
$0(){var w=this.a
w.d=B.wX
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dP9.prototype={
$0(){return this.b.$1(new C.dP0(this.a))},
$S:0}
C.dP0.prototype={
$0(){var w=this.a
w.d=B.a77
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPa.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xi(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dP_(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dP_.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dPc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q_(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dOZ(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOZ.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dPd.prototype={
$0(){return this.b.$1(new C.dOY(this.a))},
$S:0}
C.dOY.prototype={
$0(){return this.a.b=""},
$S:0}
C.dPe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e8:B.c
w=3
return A.b(A.bT(q,null,new C.dOW(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q_(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dOX(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOW.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.ar7,w,w,w,w,new C.dOQ(d),!1,w,w,w,w,w,w,w,D.fL2,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.ar5,w,w,w,w,new C.dOR(d),!1,w,w,w,w,w,w,w,D.fS3,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dOQ.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dOR.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dOX.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dPf.prototype={
$0(){return this.b.$1(new C.dOV(this.a))},
$S:0}
C.dOV.prototype={
$0(){return this.a.c=""},
$S:0}
C.dPg.prototype={
$0(){return this.a.$1(new C.dOU())},
$S:0}
C.dOU.prototype={
$0(){},
$S:0}
C.dP5.prototype={
$0(){return this.a.$1(new C.dOT(this.b))},
$S:0}
C.dOT.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dP6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiD(u.a,null,null,new C.dOS(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOS.prototype={
$4(d,e,f,g){this.a.$1(new C.dOP(this.b,d))},
$S:404}
C.dOP.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dP7.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dP8.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fji)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fgb)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dPC.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:97}
C.dPD.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e8:B.c,n=A.n(14),m=A.L((p?B.bu:B.bo).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.au,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bh(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bo,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zG(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zG(r).length>0?B.bD:B.cO,r,r,r,r,r,r,r,r,12,r,r,B.R,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bo
t=(q?B.bu:B.bo).j(0.28)
s=x.p
return new A.d0(e,!1,A.at(A.aJ(!1,B.a3,!0,r,A.q(r,A.x(A.a([p,B.Q,v,u,B.aC,A.A(A.a([A.E(A.dU(B.nV,new C.dPA(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k_,r,new A.b9(A.n(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.fSu,r,new C.dPB(d),A.bo(B.cO,r,r,r,B.c,r,B.k_,r,new A.b9(A.n(10),B.a1),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Ch,E.a03,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dPA.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPB.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dPw.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dPx(r),p=r.a.d.a,o=p?B.e8:B.c,n=A.n(14),m=A.L((p?B.bu:B.bo).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.au,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bh(l.c),s,s,s,s,s,s,D.fwh,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iI((r.a.d.a?B.bu:B.bo).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1U,"View receipt",new C.dPp(r,d,l))
u=l.x!=null
t=u?B.ps:B.qF
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bBZ,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dPq(r,d,l)),q.$3$icon$label$onTap(B.Cu,"Edit",new C.dPr(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mW,"View / download ID",new C.dPs(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bOc,"View / download selfie",new C.dPt(r,d,l)))
if(l.gaHy())p.push(q.$3$icon$label$onTap(Ae.a37,"View / download signature",new C.dPu(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ef,"Delete",new C.dPv(r,d,l)))
p.push(B.aw)
return A.bm(!0,new A.D(B.ur,A.q(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dPx.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.au
else w=d
return A.aO(!1,v,!0,new A.D(B.eU,A.A(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.R,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1955}
C.dPp.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fWS(w,this.c)},
$S:0}
C.dPq.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.SP(this.c)},
$S:0}
C.dPr.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DC(this.c)},
$S:0}
C.dPs.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFL(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dPt.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFL(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dPu.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fWX(w,this.c)},
$S:0}
C.dPv.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.PZ(0,this.c)},
$S:0}
C.dPE.prototype={
$1(d){return d.x==null},
$S:261}
C.dPF.prototype={
$1(d){return d.x!=null},
$S:261}
C.dPG.prototype={
$2(d,e){return d+e.c},
$S:1956}
C.dPH.prototype={
$0(){return this.a.bDp()},
$S:0}
C.dPy.prototype={
$0(){return this.a.ag8(this.b)},
$S:0}
C.fFI.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fFJ.prototype={
$0(){return B.d.gH(D.a4r)},
$S:z+77}
C.dfk.prototype={
$0(){var w=this.a
return w.m(new C.dfi(w,this.b))},
$S:0}
C.dfi.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfj.prototype={
$0(){},
$S:0}
C.dfl.prototype={
$0(){var w=this.a.gc1K()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fIc.prototype={
$1(d){return C.hjJ(A.a2(d,x.N,x.z))},
$S:z+11}
C.fId.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fIe.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fVv.prototype={
$1(d){return d.ak()},
$S:z+12}
C.h2Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fEP.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bQW.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1957}
C.fW3.prototype={
$1(d){var w=this
return new C.a_p(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dg_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dfZ(w,d))},
$S:z+80}
C.dfZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfO.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dfL.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dfm.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dfn.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dfP.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dfv.prototype={
$1(d){var w=null,v=A.R(d).ax.a===B.J,u=v?B.e8:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.au,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bo,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bM(!1,B.dl,w,w,!0,w,w,w,new C.dft(d),w,w),A.bI(B.xj,w,new C.dfu(d),A.bo(B.nl,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dft.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dfu.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dfw.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dfM.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dfN.prototype={
$0(){return B.d.gH(D.zH)},
$S:z+14}
C.dfr.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz_(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.TP(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dfs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfx.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.ZY(v,u,J.ad(w.d),null)},
$S:z+40}
C.dfy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfY.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.ZF(r.y,r.gz_(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dfW(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbZ(v,e,w,u,t,r.gbTU(),C.hzf(r.y.Q),r.gz_(0),s)
w=t}return A.c9(q,new C.dfX(r,e),new A.D(B.a04,w,s))},
$S:1958}
C.dfX.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvl(0)
w=t-(u==null?t:u)}else w=0
v=B.j.E(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fw(B.a6,A.da(e,B.j.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dfW.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIJ(B.qn,B.j0)},
$S:0}
C.dfI.prototype={
$0(){var w=this.a
return w.m(new C.dfH(w))},
$S:0}
C.dfH.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dfJ.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dfo.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.km.j(0.5),r=x.p,q=A.a([D.fJD,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cr(p.d)?"Write this book":"Write a new book"
q.push(p.ZJ(d,B.e9,w,J.cr(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZJ(d,I.ap2,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZJ(d,X.aq5,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZJ(d,B.qL,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZJ(d,B.qL,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eR(u,E.BL,A.bm(!0,new A.D(Ad.yF,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.amb,B.da,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dfK.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dfB.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.a_r(v,J.cI(w.d),w.r+1,null)},
$S:z+44}
C.dfC.prototype={
$1(d){var w=null
return A.oH(!1,A.eg(w,w,w,E.BL,new A.k_(this.a,new C.dfA(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:287}
C.dfA.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aa6,B.oT,A.E(A.d(e,w,w,w,w,w,w,B.ju,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:751}
C.dfD.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dfE.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dfF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bq(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Ss(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dfz(s,t))
w=4
return A.b(s.lg(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfz.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfR.prototype={
$1(d){var w=null
return A.oH(!1,A.eg(w,w,w,E.BL,new A.k_(this.a,new C.dfQ(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:287}
C.dfQ.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aa6,B.oT,A.E(A.d(e,w,w,w,w,w,w,B.ju,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:751}
C.dfS.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dfT.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dfU.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dfV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bq(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lg(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfp.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bko(B.qn,A4.ND)},
$S:0}
C.dfq.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIJ(B.qn,A4.ND)},
$S:0}
C.dhM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhN.prototype={
$1(d){var w=this.a
return w.m(new C.dhL(w))},
$S:9}
C.dhL.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dhO.prototype={
$1(d){var w=this.a
return w.m(new C.dhK(w))},
$S:9}
C.dhK.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dhP.prototype={
$1(d){var w=this.a
return w.m(new C.dhJ(w))},
$S:9}
C.dhJ.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dhQ.prototype={
$0(){var w=this.a
return w.m(new C.dhI(w,this.b))},
$S:0}
C.dhI.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dhR.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2u()
A.a6(this.b,!1).O(new A.bqP(w,v))},
$S:0}
C.dge.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dgd.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_n(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dgi.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dgh.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bap(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hf,v,v,v)
return A.eg(A.a([A.bM(!1,B.dl,v,v,!0,v,v,v,new C.dgf(d),v,v),A.bI(B.xj,v,new C.dgg(d),A.bo(B.nl,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BL,w,v,v,v,v,D.fIp,v)},
$S:18}
C.dgf.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgg.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgj.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dgk.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ch(A.bW(B.bH,r,B.bt,t,18,14),B.t,t,B.y,t,D.bCY,t,t,B.ah)},
$S:314}
C.dgc.prototype={
$0(){return this.a.QM(0,this.b)},
$S:0}
C.dgb.prototype={
$0(){return this.a.Qd(0,this.b)},
$S:0}
C.cOD.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cOE.prototype={
$0(){return B.d.gH(D.zH)},
$S:z+14}
C.cOF.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bR(0,new A.D(d,A.c3(w,new A.o(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bi),w),0,0,0)},
$S:1960}
C.d7b.prototype={
$1(d){return this.a.m(new C.d7a(this.b,this.c))},
$S:9}
C.d7a.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d7A.prototype={
$1(d){return this.a.m(new C.d7n())},
$S:2}
C.d7n.prototype={
$0(){},
$S:0}
C.d7B.prototype={
$1(d){return this.a.m(new C.d7m())},
$S:2}
C.d7m.prototype={
$0(){},
$S:0}
C.d7C.prototype={
$0(){var w=this.a
return w.m(new C.d7l(w,this.b))},
$S:0}
C.d7l.prototype={
$0(){var w=this.a
return w.d=w.gop().Gb(this.b.a)},
$S:0}
C.d7D.prototype={
$0(){var w=this.a
return w.m(new C.d7k(w,this.b))},
$S:0}
C.d7k.prototype={
$0(){var w=this.a
return w.d=w.gop().cN1(this.b)},
$S:0}
C.d7E.prototype={
$1(d){return this.a.m(new C.d7j())},
$S:2}
C.d7j.prototype={
$0(){},
$S:0}
C.d7F.prototype={
$0(){var w=this.a
return w.m(new C.d7i(w,this.b))},
$S:0}
C.d7i.prototype={
$0(){var w=this.a
return w.d=w.gop().cN6(this.b.a)},
$S:0}
C.d7G.prototype={
$1(d){var w=this.a
return w.m(new C.d7v(w,d))},
$S:6}
C.d7v.prototype={
$0(){var w=this.a
return w.d=w.gop().cO0(this.b)},
$S:0}
C.d7H.prototype={
$1(d){var w=this.a
return w.d=w.gop().aFG(d)},
$S:2}
C.d7I.prototype={
$1(d){var w=this.a
return w.d=w.gop().cN9(d)},
$S:2}
C.d7K.prototype={
$1(d){var w=this.a
return w.d=w.gop().cNZ(d)},
$S:2}
C.d7L.prototype={
$1(d){var w=this.a
return w.m(new C.d7u(w,d))},
$S:9}
C.d7u.prototype={
$0(){var w=this.a
return w.d=w.gop().cNQ(this.b)},
$S:0}
C.d7M.prototype={
$0(){var w=this.a,v=w.gop(),u=B.a.i(w.gz_(0).a.a),t=B.a.i(w.gaCS().a.a)
u=v.bf6(B.a.i(w.gasy().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bR5.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bR_.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQZ(w,d))},
$S:11}
C.bQZ.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bR8.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bR0.prototype={
$0(){var w=this.a
w.Q=D.b0i
w.adM(1)
w.r.x=null},
$S:0}
C.bR1.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0i)return
w=new A.e4()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d2x[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bR4.prototype={
$0(){var w=this.a
w.Q=D.acI
w.adM(2)
w.r.z=null},
$S:0}
C.bR3.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hyK
t.adM(3)
w=t.r
w.d=s
w.x="I say: "+t.gCr()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.d8Y[v.aw(4)]:D.dtR[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bR6.prototype={
$0(){var w=this.a
w.Q=D.b0j
w.CW=this.b
w.cy=1
w.adM(4)
w.r.f=w.f.a+5},
$S:0}
C.bR7.prototype={
$0(){},
$S:0}
C.bR2.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bQX.prototype={
$0(){return this.a.KY(this.b)},
$S:0}
C.bQY.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bSC.prototype={
$0(){var w=this
return w.a.R4(w.b,0,w.c,w.d)},
$S:0}
C.bSD.prototype={
$0(){var w=this
return w.a.R4(w.b,3,w.c,w.d)},
$S:0}
C.bSE.prototype={
$0(){var w=this
return w.a.R4(w.b,1,w.c,w.d)},
$S:0}
C.bSF.prototype={
$0(){var w=this
return w.a.bTk(w.b,w.c,w.d)},
$S:0}
C.bSG.prototype={
$0(){var w=this
return w.a.R4(w.b,4,w.c,w.d)},
$S:0}
C.bSH.prototype={
$0(){var w=this
return w.a.R4(w.b,2,w.c,w.d)},
$S:0}
C.bSI.prototype={
$0(){var w=this
return w.a.R4(w.b,5,w.c,w.d)},
$S:0}
C.bSJ.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:752}
C.bSB.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5B[d],p=q.a.a5(0,new A.p(0,-q.b*1.2*124)),o=A.ft(r,B.ct,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fnl,e),B.a5,B.bW,r,B.dA,B.bX)
o.o5(130)
w=o.b.a.c
w=p.aK(0,new A.p(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bn(A.bB(w,v.gba(v)+12,u+18),B.hZ)
u=this.a
v=t.eQ(B.dG)
w=$.S()
s=A.J()
s.r=B.dq.gp(0)
u.am(v,s)
s=A.J()
s.r=D.qe.gp(0)
u.am(t,s)
w=new A.aF(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aZ(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bv())
v=A.J()
v.r=D.qe.gp(0)
u.af(w,v)
o.a4(u,new A.p(t.a+9,t.b+6))},
$S:753}
C.bRm.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRn.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amr(d),w.amr(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fta.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h2H.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c3(0,d,new C.h2I()),e)},
$S:z+66}
C.h2I.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h2J.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2K.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h2L.prototype={
$1(d){return d!==this.a&&!B.d.aW(this.b,new C.h2G(this.c,d))},
$S:3}
C.h2G.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h2M.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2N.prototype={
$1(d){return d!==this.a},
$S:3}
C.h2O.prototype={
$1(d){return d!==this.a&&!B.d.aW(this.b,new C.h2F(this.c,d))},
$S:3}
C.h2F.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fGj.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fUw.prototype={
$1(d){return d.Q},
$S:z+15}
C.fUx.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fCj.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fJ6.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bM9.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h36.prototype={
$2(d,e){return B.o.aS(C.hvC(d),C.hvC(e))},
$S:215}
C.h37.prototype={
$1(d){return d!==this.a},
$S:3}
C.fV1.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKk.prototype={
$0(){var w=this.a
w.ch=!0
w.b8E()},
$S:0}
C.bKf.prototype={
$0(){},
$S:0}
C.bKl.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKd.prototype={
$0(){},
$S:0}
C.bKe.prototype={
$0(){},
$S:0}
C.bKj.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bcE(t,u),B.ay),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.q(u,A.d(t.dy,u,u,u,u,u,u,D.fuU,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bU,u,u,u),u,u,14,14,6,u))}return A.aA(B.c5,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKg(t,e),u,u,u,u,u,u,u,new C.bKh(t,e),u,u,u,u,u,u,u,u,u,new C.bKi(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bKg.prototype={
$1(d){return this.a.db=B.j.E(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKi.prototype={
$1(d){return this.a.db=B.j.E(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bKh.prototype={
$1(d){return this.a.db=B.j.E(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKc.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cpG.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cpH.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cpF(w))},
$S:0}
C.cpF.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cpI.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cpJ.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cpK.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cpL.prototype={
$0(){},
$S:0}
C.cpM.prototype={
$0(){var w=this.a
w.z=w.Xh(++w.e)
w.Q=A.bZ(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cpC.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cpD.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cpE(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c9(new A.h5(a0),new C.cpx(g,new A.p(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Qy(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cL(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.ML(new C.cpy(g,u),new C.cpz(g,u),new C.cpA(g,u),j,j,new A.bP("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.ff:B.b9,j,j,j,j,j,j,j,j,13,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.up(a0,g.gql(g),B.cN,B.jD,D.fv),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xh(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xh(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.Qy(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xh(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r_(new A.bq(0,p,t),new C.cpB(),new S.Ef(u,j,new C.Qy(l.b,k,62,!1,j),new A.kE(0.25,new C.Qy(m.b,k,62,!1,j),j),new A.k7(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.H,S.hz7(),!0,!0,j,j,j,j,j,j,!1,B.iL,j,new A.bP("chip-"+r,a0),w),B.b4,B.iJ,j,new A.bP("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fM,a1,B.bt,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:67}
C.cpE.prototype={
$1(d){return new A.p(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:740}
C.cpx.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bc7(q.b,o,v,w,p),B.ay)},
$S:59}
C.cpz.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cpA.prototype={
$1(d){return this.a.cQT(this.b,d.a)},
$S:z+31}
C.cpy.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.n(18),q=e.length!==0?B.cN.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cN:B.jV,B.r,2)
u=s?A.lz(new C.cpw(),A.at(new C.Qy(u.gaF8()[u.gj1()[t]].b,u.gaF8()[u.gj1()[t]].a,62,!1,v),v,v,v),B.kK,B.iJ,v,v,new A.bq(0.3,1,x.X),x.i):D.bbj
return A.cT(v,u,v,v,B.b4,new A.o(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1963}
C.cpw.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:112}
C.cpB.prototype={
$3(d,e,f){return A.dP(f,new A.p(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cPH.prototype={
$1(d){return d>=1},
$S:119}
C.cEE.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.m(new C.cED(w))},
$S:11}
C.cED.prototype={
$0(){return this.a.f++},
$S:0}
C.cEM.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cEN.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cEO.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cEL(w))},
$S:0}
C.cEL.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cEP.prototype={
$0(){return this.a.f++},
$S:0}
C.cEQ.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cER.prototype={
$0(){},
$S:0}
C.cES.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cEG.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cEH.prototype={
$3(d,e,f){var w=null
return A.lz(new C.cEF(this.a,e),w,B.b4,B.hE,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1964}
C.cEF.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cN.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.H,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.hR(new A.BB(new A.uH(B.w.j(e),B.LD,v,B.XT),H.bWP(A.b4(v,v,v,new C.aBk(u.gkR()[u.e].c,u.as,v),B.ay),new A.Ek(w,w,B.VU)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a7),v,190,v,v,v,v,v,190)},
$S:1965}
C.cEI.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.p(0,14*(1-e))),e)},
$S:100}
C.cEJ.prototype={
$3(d,e,f){return A.dP(f,new A.p(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cEK.prototype={
$0(){return this.a.bpK(this.b)},
$S:0}
C.f5U.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amY$)
v.amY$=w
v.q7$.sp(0,w)
v.aqM(u)},
$S:7}
C.fg2.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bS7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bS6())},
$S:0}
C.bS6.prototype={
$0(){},
$S:0}
C.bS4.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bS2.prototype={
$0(){},
$S:0}
C.bS3.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMI()
w=s+1>=r.length?3:5
break
case 3:q=C.bG0(p.gapC(0),0,r.length)
p.m(new C.bS_(p,q))
o=p
w=6
return A.b(C.BM(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BN(s.d,s.c.a,"school",p.gapC(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bS0())
w=4
break
case 5:p.m(new C.bS1(p))
p.gqt().VR(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bS_.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bS0.prototype={
$0(){},
$S:0}
C.bS1.prototype={
$0(){return this.a.x++},
$S:0}
C.bS5.prototype={
$0(){return this.a.KY(this.b)},
$S:0}
C.bRZ.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f5V.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.p(t,s),q=v.b,p=v.d,o=p?C.hzl(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.E4
C.Sq(q,D.elC,0,0.2,-0.6,-0.2,null,w,D.ekl,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.p(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.J()
p.r=D.G7.gp(0)
p.c=3
p.d=B.bB
q.ah(new A.p(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f5W.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Sq(this.a,D.ekI,0,u,0.7,-0.5,null,null,D.Jp,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f5X.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Sq(this.a,D.emn,0,0,0.8,-0.5,null,null,D.Jp,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f5Y.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Sq(w.b,D.elw,0,v,-0.8,-0.5,null,null,D.Jp,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f5Z.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.p(34,-122+Math.sin(w*5)*5)
else v=v?D.elA:D.E4
C.Sq(p,D.el1,0,t,0,-0.6,null,v,D.Jp,3,0,s,1.3,u,0,w,0)
q=q.cbz(new A.p(222,455),9)
$.S()
w=A.J()
w.r=B.cN.gp(0)
p.af(q,w)},
$S:0}
C.f6_.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:752}
C.bRL.prototype={
$2(d,e){return d+e},
$S:64}
C.bRW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bRX.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bRY.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.q7$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bRS.prototype={
$1(d){return d},
$S:93}
C.bRR.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q7$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bRT.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bRU.prototype={
$0(){},
$S:0}
C.bRV.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FF(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cq(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bRN.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bRO.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aS(w[d],w[e])},
$S:64}
C.bRP.prototype={
$2(d,e){var w=null,v=C.haX(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.aA(B.c5,new A.em(A.b4(w,w,w,new C.bji(u,u.q7$),B.ay),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bRM(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bRM.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.E(B.j.bh((t.a-s.a)/r/450*v),0,v-1)
w.d0G(w.gj1()[u])}},
$S:23}
C.bRQ.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:78}
C.dqX.prototype={
$2(d,e){return 0},
$S:64}
C.bRx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRw())},
$S:0}
C.bRw.prototype={
$0(){},
$S:0}
C.bRv.prototype={
$0(){},
$S:0}
C.bRp.prototype={
$0(){},
$S:0}
C.bRq.prototype={
$0(){},
$S:0}
C.bRu.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B0},
$S:0}
C.bRt.prototype={
$1(d){var w=null,v=this.a.gqt(),u=A.d(d,w,w,w,w,w,w,D.aUN,w,w,w),t=v.gbmb(0)
return A.aA(B.c5,A.x(A.a([u,B.bG,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aV1,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbs6(v),w,w,w,w,w,w,!1,B.a4)},
$S:132}
C.bRr.prototype={
$0(){return this.a.KY(this.b)},
$S:0}
C.bRs.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRo.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e0M.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e0N.prototype={
$1(d){return this.a},
$S:39}
C.e0O.prototype={
$0(){var w=this.a
return w.d=w.gSQ().beA(this.b)},
$S:0}
C.e0K.prototype={
$1(d){return new C.TQ(this.a,null)},
$S:z+32}
C.e0L.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e0J.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hf,w,w,w)
return A.eg(A.a([A.bM(!1,E.aWo,w,w,!0,w,w,w,new C.e0H(d),w,w),A.bM(!1,D.fPW,w,w,!0,w,w,w,new C.e0I(d),w,w)],x.p),w,w,D.fv,v,w,w,w,w,D.fCA,w)},
$S:18}
C.e0H.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e0I.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e0G.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e0P.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e0Q.prototype={
$0(){var w=this.a,v=this.b,u=C.bDN(v,10,w.r,!1)
return w.uv(C.hjK(w.a.d,"kahoot",u,w.gb6b(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e0R.prototype={
$0(){var w=this.a
return w.uv(new C.alJ(this.b,w.a.d,w.r,null))},
$S:0}
C.e0S.prototype={
$0(){var w=this.a
return w.uv(new C.ajW(this.b,w.a.d,w.r,null))},
$S:0}
C.e0V.prototype={
$0(){var w=this.a
return w.uv(new C.auE(this.b,w.a.d,w.r,null))},
$S:0}
C.e0W.prototype={
$0(){var w=this.a
return w.uv(new C.ayB(this.b,w.a.d,w.r,null))},
$S:0}
C.e0X.prototype={
$0(){var w=this.a
return w.uv(new C.alM(this.b,w.a.d,w.r,null))},
$S:0}
C.e0Y.prototype={
$0(){var w=this.a
return w.uv(new C.alQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e0Z.prototype={
$0(){var w=this.a
return w.uv(new C.alS(this.b,w.a.d,w.r,null))},
$S:0}
C.e1_.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d10()
return v.uv(C.hjK(v.a.d,"creator_"+u.a,w,v.gb6b(),"A game by the family",t,this.c.a))},
$S:0}
C.e10.prototype={
$0(){return this.a.OL(this.b)},
$S:0}
C.e11.prototype={
$0(){return this.a.XJ(0,this.b)},
$S:0}
C.e0T.prototype={
$0(){return this.a.OL(null)},
$S:0}
C.e0U.prototype={
$0(){return this.a.L(x.q).f.U(D.fgh)},
$S:0}
C.bRJ.prototype={
$0(){var w=this.a
w.d=D.b_H
w.z=3},
$S:0}
C.bRK.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPA()}else w.m(new C.bRI(w))},
$S:11}
C.bRI.prototype={
$0(){return this.a.z--},
$S:0}
C.bRz.prototype={
$0(){var w=this.a
w.d=D.aco
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRA.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRy(w))
if(w.as<=0){d.a1(0)
w.b67(-1)}},
$S:11}
C.bRy.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bRF.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Wx},
$S:0}
C.bRG.prototype={
$0(){return this.a.e++},
$S:0}
C.bRC.prototype={
$0(){var w=this.a
w.d=D.b_I
w.ay=this.b},
$S:0}
C.bRD.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bRH.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1966}
C.bRE.prototype={
$0(){return this.a.KY(this.b)},
$S:0}
C.bRB.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bR9.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b5,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.K)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b5,B.aP),r))}return s},
$S:1967}
C.bRa.prototype={
$0(){return this.a.gD1().c.push(C.h4K(null,0,20,""))},
$S:0}
C.bRk.prototype={
$1(d){var w=null
return A.bs(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Vs,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:253}
C.bRj.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD1().c,m=this.b,l=n[m],k=o.ceB(l),j=B.c.j(0.06),i=A.n(18),h=A.L(B.aV,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KD,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.aqT,p,p,p,new C.bRe(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRf(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),B.Q],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aCO[v]
t=D.aCu[v]
s=v+1
f.push(new A.D(B.eL,new A.c6(B.aL,B.e,B.i,B.m,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.by(1,B.bb,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRg(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),p),new Au.Pc(v,l.c,new C.bRh(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,K.b06,p,p,p,p,p,w)],g),p),p))}f.push(D.fI4)
f.push(B.am)
n=A.a([D.fBG,B.ae],g)
for(r=0;r<3;++r){q=D.ccR[r]
n.push(new A.D(B.fy,A.jt(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRi(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.m,p,B.e,B.i,0,p,p))
return A.q(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kU,B.bh,p,p,p)},
$S:148}
C.bRe.prototype={
$0(){var w=this.a
return w.m(new C.bRd(w,this.b))},
$S:0}
C.bRd.prototype={
$0(){return B.d.cA(this.a.gD1().c,this.b)},
$S:0}
C.bRf.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRg.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRh.prototype={
$1(d){return this.a.m(new C.bRc(this.b,d))},
$S:151}
C.bRc.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRi.prototype={
$1(d){return this.a.m(new C.bRb(this.b,this.c))},
$S:9}
C.bRb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2r.prototype={
$0(){var w=this.a
w.ws()
w.a.bv()
w.a.qm()},
$S:0}
C.e2q.prototype={
$0(){var w=this.a
w.ws()
w.a.bv()
w.a.qm()},
$S:0}
C.e2t.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cr(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e2u.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2v.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e2p.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e2s.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e2x.prototype={
$0(){this.a.P6()
return null},
$S:0}
C.e2w.prototype={
$0(){return this.a.F_(this.b)},
$S:0}
C.e1S.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.dl,w,w,!0,w,w,w,new C.e1Q(d),w,w),r=A.bo(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e1R(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e1Q.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1R.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e1T.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cNv(this.b)},
$S:0}
C.e1N.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aV6(w.b,w.c,w.d)},
$S:7}
C.e1e.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e1f.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1w.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hd(t.a.c),$async$$0)
case 2:s=r.nv(q.dI(e,new C.e1u(t)))
if(s!=null&&t.c!=null)t.m(new C.e1v(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1u.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1v.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1x.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1M.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cOh(C.hzv(w),w)},
$S:0}
C.e1t.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.W9(u,w,C.aQA(u,w),new C.e1s(v),null)},
$S:z+37}
C.e1s.prototype={
$1(d){return this.bnA(d)},
bnA(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e1r(s,d))
w=3
return A.b(s.ur(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:539}
C.e1r.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.beA(this.b)},
$S:0}
C.e1J.prototype={
$1(d){return d.as},
$S:z+1}
C.e1K.prototype={
$1(d){var w=this
return new A.e0(new C.e1I(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e1I.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e8:B.c,h=A.n(26),g=A.L(B.bQ.j(0.5),B.r,1.5),f=A.q(k,D.bT3,B.f,k,k,new A.o(B.bQ.j(0.18),k,k,k,k,k,B.a7),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.au,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bo,k,k,k,k,k,k,k,k,12.5,k,k,B.R,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bu:B.bo,k,k,k,k),k,k,k,new C.e1C(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.K)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.aA(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b4,new A.o(q,k,new A.bH(n,n,n,n),new A.bg(p,p,p,p),k,k,B.n),B.fZ,k,k,k,k,B.Ca,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e1D(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bW(B.bH,a0,B.bt,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c3Y,new A.D(D.bDn,f,k),new A.D(D.bDe,e,k),new A.D(B.rO,a0,k),new A.D(X.amc,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bo,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ah.aoN,j?B.bu:B.bo,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bDg,A.A(A.a([a0,B.at,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.au,k,k,k,k,k,k,k,k,k,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8M(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e1E(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aC)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aE.j(0.35),B.j7,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.fC1,B.bd,D.bHH,D.bTJ],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c7E,B.n),k,k,k,B.hU,B.bE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e1F(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yH,A.A(A.a([A.E(A.dU(B.dl,new C.e1G(a1),k),1),B.at,A.E(A.bI(M.aWQ,k,new C.e1H(t,a1),A.bo(B.bQ,k,k,k,k,k,B.cn,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.q(k,A.ch(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.yw,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:87}
C.e1C.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1D.prototype={
$0(){return this.b.$1(new C.e1B(this.a,this.c))},
$S:0}
C.e1B.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e1E.prototype={
$1(d){var w=this.a
w.m(new C.e1z(w,d))
this.b.$1(new C.e1A())},
$S:9}
C.e1z.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1A.prototype={
$0(){},
$S:0}
C.e1F.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHm(!0,w))
return null},
$S:0}
C.e1G.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1H.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHm(!1,w))
return null},
$S:0}
C.e1L.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cO5(this.b.b)
w.r.a8(0)},
$S:0}
C.e12.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiM(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hsR(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e13.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFD(w)},
$S:0}
C.e1V.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ae4(this.b,w,this.c,null)},
$S:z+39}
C.e1P.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e8:B.c,t=A.n(20),s=A.X(B.lN,B.aY,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.au,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bo,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.P,0,B.p)
return A.eg(A.a([A.bI(D.fTG,w,new C.e1O(d),A.bo(B.aY,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e1O.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e14.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e15.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e16.prototype={
$1(d){return d.a},
$S:z+8}
C.e17.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hS(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFD(w)},
$S:0}
C.e1b.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiM(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e19(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hsR(v.e,null,r,v.f,v.r,new C.e1a(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e1a.prototype={
$0(){return this.a.aaW(this.b)},
$S:0}
C.e19.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e1c.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hS>")
w=A.C(new A.N(w,new C.e18(this.b),v),v.k("ak.E"))
u.d=t.aFD(w)},
$S:0}
C.e18.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e1U.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e1o.prototype={
$1(d){return d.length!==0},
$S:3}
C.e1p.prototype={
$1(d){var w=this
return new A.e0(new C.e1n(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e1n.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e8:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.au,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e1j(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.Q)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(12),B.dn),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mx,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.eg(A.a([A.bM(!1,B.dl,v,v,!0,v,v,v,new C.e1k(d),v,v),A.bI(B.KO,v,new C.e1l(t,u,o,e),A.bo(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fGs,v,new C.e1m(t,u,o,d),A.bo(B.aY,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:198}
C.e1j.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.au,w,w,w,w,w,w,w,w,w,w,w,B.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.c0N,w,w,w,new C.e1i(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1968}
C.e1i.prototype={
$0(){return this.a.$1(new C.e1g(this.b,this.c))},
$S:0}
C.e1g.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e1k.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1l.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e1h(w.c,u))
v.bP(0,B.cd)}},
$S:0}
C.e1h.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e1m.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e1q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOK(this.b,D.ux,C.Hb(v,w.a.c))},
$S:0}
C.e21.prototype={
$1(d){return d.as},
$S:z+1}
C.e22.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iY(this.b,w)},
$S:0}
C.e23.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ip5(v)
return w.Wx(v==null?null:v.a)},
$S:0}
C.e24.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i0O(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cvY(new A.av(u,t),v.gblg(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d0o:D.cZC
q=A.L(s?B.dr:D.bj1,B.r,1)
p=A.n(22)
o=A.bR(0,A.b4(m,m,m,new C.bfp(s,m),B.ay),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.bx(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.uS(new A.Q(n,n,n,n),new A.a5(u,t,new C.bgk(l.d,v,l.f,w,new C.e1Y(l),l.gcfN(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.by6(s,new C.e1Z(l,e),new C.e2_(l,e),new C.e20(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b6,B.b8,B.x,r,m,m),B.n),m,m,m,A_.alj,m,m,m,m)},
$S:228}
C.e1Y.prototype={
$1(d){var w=this.a
w.m(new C.e1W(w,d))},
$S:2}
C.e1W.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e1Z.prototype={
$0(){var w=this.b
return this.a.bcK(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e2_.prototype={
$0(){var w=this.b
return this.a.bcK(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e20.prototype={
$0(){var w=this,v=w.b
return w.a.aV6(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblg())},
$S:0}
C.e25.prototype={
$0(){var w=this.a
return w.m(new C.e1X(w))},
$S:0}
C.e1X.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e1d.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fG(new A.fA(s.c)),$async$$0)
case 2:t.ys("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgo.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bk9(u,C.hDP(v.c,u),new C.dgn(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dgn.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dgp.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bns(d.d,d.c,u.f.q(0,d.a),new C.dgm(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dgm.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fFM.prototype={
$1(d){var w,v=d.e
if(this.a.ao(0,v))return v
v=this.b
w=A.U(v)
return A.nv(new A.cM(new A.Y(v,new C.fFN(d),w.k("Y<1>")),new C.fFO(),w.k("cM<1,m>")))},
$S:z+19}
C.fFN.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fFO.prototype={
$1(d){return d.a},
$S:z+8}
C.fFK.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fFL.prototype={
$1(d){return d.b},
$S:z+8}
C.fFR.prototype={
$1(d){var w,v=d.e
if(this.a.ao(0,v))return v
v=this.b
w=A.U(v)
return A.nv(new A.cM(new A.Y(v,new C.fFS(d),w.k("Y<1>")),new C.fFT(),w.k("cM<1,m>")))},
$S:z+19}
C.fFS.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fFT.prototype={
$1(d){return d.a},
$S:z+8}
C.fFP.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ao(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fFQ.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dgr.prototype={
$0(){return this.a},
$S:z+46}
C.dgI.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ao(0,d)},
$S:254}
C.dgA.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dgB()),v=J.a7(w)
if(!v.q(w,e))v.J(w,e)},
$S:118}
C.dgB.prototype={
$0(){return A.a([],x.s)},
$S:754}
C.dgz.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:307}
C.dgs.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dgy.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dgx.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.Dr:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.Dr:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1970}
C.dgt.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dgC.prototype={
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
t=J.aU(t==null?D.Dr:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aW(w,new C.dgD(r)))w.push(r)}}B.d.bt(w,new C.dgE(a8))
B.d.aZ(w,new C.dgF())
q=C.i0N(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eSq],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
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
else j.push(d)}}a0=(B.d.gH(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bqz(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1971}
C.dgD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dgE.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dgF.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dgG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cI(0,0,B.pZ)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:666}
C.dgH.prototype={
$1(d){return 16+d*156},
$S:171}
C.dgq.prototype={
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
t.n(0,d,new C.Gu(r,new A.p(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Gu(s,new A.p(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Gu(s,new A.p(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KM(d,new A.p(e+t,w),s,s.length))}},
$S:186}
C.dgu.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKt(new A.p(v.a,v.b+28),new A.p(w.a,w.b+28),!0,null))},
$S:118}
C.dgv.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dgw.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:755}
C.dgJ.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:755}
C.dgK.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:369}
C.dgL.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:189}
C.dgM.prototype={
$1(d){return d>=0.5},
$S:119}
C.flD.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hb(A.aO(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cs,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1973}
C.eWM.prototype={
$1(d){var w=null,v=A.n(8),u=B.bQ.j(0.12),t=A.n(8)
return new A.D(B.mT,A.aO(!1,v,!0,A.q(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.frN,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.O9,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWL(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eWL.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dwC.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dwB.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nS,B.K,w,w)
return A.eg(A.a([A.bM(!1,B.dl,w,w,!0,w,w,w,new C.dwz(d),w,w),A.bM(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mK,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dwA(d),w,w)],x.p),B.ba,B.C7,w,u,D.bEh,w,D.bGe,new A.b9(v,B.a1),w,w)},
$S:18}
C.dwz.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dwA.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dwL.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dwM.prototype={
$1(d){var w=this.a
return w.m(new C.dwK(w,d))},
$S:z+49}
C.dwK.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dwN.prototype={
$1(d){var w=null
return A.qD(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dwQ.prototype={
$1(d){var w=this.a
return w.m(new C.dwJ(w,d))},
$S:35}
C.dwJ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dwP.prototype={
$1(d){var w=null
return A.qD(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dwR.prototype={
$1(d){var w=this.a
return w.m(new C.dwI(w,d))},
$S:35}
C.dwI.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dwS.prototype={
$0(){var w=this.a
return w.m(new C.dwH(w))},
$S:0}
C.dwH.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dwT.prototype={
$0(){var w=this.a
return w.m(new C.dwG(w))},
$S:0}
C.dwG.prototype={
$0(){return++this.a.at},
$S:0}
C.dwU.prototype={
$0(){var w=this.a
return w.m(new C.dwF(w))},
$S:0}
C.dwF.prototype={
$0(){return--this.a.ax},
$S:0}
C.dwV.prototype={
$0(){var w=this.a
return w.m(new C.dwE(w))},
$S:0}
C.dwE.prototype={
$0(){return++this.a.ax},
$S:0}
C.dwW.prototype={
$1(d){var w=this.a
return w.m(new C.dwD(w,d))},
$S:9}
C.dwD.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dwO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dwX.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.e8:B.c
v=A.n(12)
if(p)u=B.bQ
else u=(q.c.a?B.ee:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bo
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bo
return A.E(A.aJ(!1,B.a3,!0,r,A.aO(!1,o,!0,A.cT(r,A.x(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b4,new A.o(w,r,u,v,r,r,B.n),B.eG,r,r,r,r,B.k_,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dwY(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dwY.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dx6.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cet.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.ceA.prototype={
$1(d){return d.ak()},
$S:z+5}
C.ceB.prototype={
$2(d,e){var w=J.b7(e,new C.cez(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cez.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cev.prototype={
$1(d){return C.alV(A.a2(d,x.N,x.z))},
$S:z+9}
C.cew.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cex.prototype={
$1(d){return C.hjJ(A.a2(d,x.N,x.z))},
$S:z+11}
C.cey.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ceF.prototype={
$1(d){return new A.aHy(d.f.length,d.a,d.b)},
$S:z+55}
C.ceG.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:573}
C.ceC.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ceD.prototype={
$1(d){return d.cNI(C.Hb(d,this.a))},
$S:z+85}
C.e2e.prototype={
$1(d){return C.uq(d,this.a.a.c)},
$S:z+3}
C.e2f.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e2j.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e2k.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e2b.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0W(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z0("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pq(r.c,r.e),$async$$0)
case 4:s.z0(p)
w=5
return A.b(s.K2(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2c.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0W(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z0("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pq(r.c,r.e),$async$$0)
case 4:s.z0(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2d.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wc(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z0("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z0("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z0("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.K2(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z0(B.a.em(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e2i.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0V(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z0("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cd(A.eb(new C.e2h(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pq(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2h.prototype={
$1(d){var w=this.b
return new C.a0l(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e2g.prototype={
$1(d){return D.hve},
$S:z+58}
C.e2m.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2n.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e2l(w,d)
return new A.D(B.d3,new C.bgo(this.b,d.c,d.a,w,null),null)},
$S:1974}
C.e2l.prototype={
$0(){return this.a.Ym(this.b.b)},
$S:0}
C.e26.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e27.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e28.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e29.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e2a.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2o.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:199}
C.dOH.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dOI.prototype={
$0(){return B.d.gH(D.a5Y)},
$S:z+60}
C.dOJ.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d7a,44),w,w,w),w,w,new C.blg(u,t,v,w),B.ay)},
$S:59}
C.fWw.prototype={
$1(d){return A.pa(new C.fWv(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:133}
C.fWv.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e8:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.ti,24)],x.V),o=r?B.ee:B.bP
o=A.q(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aY.j(0.25),B.bQ.j(0.18)],x.O)
w=A.q(t,D.bW6,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a9(B.a6,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.au,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.x(A.a([B.X,o,new A.D(E.amh,A.A(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bo,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.fem,new C.fWu(this.b,s),20,B.alQ,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.l7,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:116}
C.fWu.prototype={
$2(d,e){var w=null,v=D.a5Y[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.L(s?B.ee:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.er,8)],x.V),p=A.n(15),o=A.E(new C.a77(v.a,!0,w),1),n=s?B.jS:B.jj,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.au,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aJ(!1,B.a3,!0,w,A.aO(!1,u,!0,A.eI(A.bx(p,A.x(A.a([o,A.q(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k0,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fWt(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:79}
C.fWt.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cnY.prototype={
$0(){return this.a.ahb(this.b)},
$S:0}
C.fVU.prototype={
$1(d){return D.hq3},
$S:z+61}
C.h2o.prototype={
$1(d){var w=this
return new C.a28(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fVY.prototype={
$1(d){return new C.a__(this.a,null)},
$S:z+63}
C.fVX.prototype={
$1(d){return D.hr4},
$S:z+64}
C.d7Y.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7Z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d7X(w,d))},
$S:35}
C.d7X.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8_.prototype={
$1(d){return this.a.KG()},
$S:2}
C.d80.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7U.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7V.prototype={
$1(d){return this.a.KG()},
$S:2}
C.d7W.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGk.prototype={
$0(){},
$S:0}
C.cGq.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGr.prototype={
$0(){return this.a.aQs(-1)},
$S:0}
C.cGs.prototype={
$1(d){return this.a.m(new C.cGp())},
$S:2}
C.cGp.prototype={
$0(){},
$S:0}
C.cGt.prototype={
$0(){return this.a.aQs(1)},
$S:0}
C.cGu.prototype={
$1(d){return this.a.m(new C.cGo())},
$S:2}
C.cGo.prototype={
$0(){},
$S:0}
C.cGv.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aY.j(0.2)
if(s)v=B.aY
else v=this.b.a?B.ee:B.bP
return A.uL(u,u,B.b1,r,u,new C.cGn(t,d),B.wk,s,w,u,new A.ay(v,1,B.r,-1),B.ce)},
$S:1975}
C.cGn.prototype={
$1(d){var w=this.a
return w.m(new C.cGl(w,this.b))},
$S:9}
C.cGl.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cGw.prototype={
$1(d){return this.a.m(new C.cGm())},
$S:2}
C.cGm.prototype={
$0(){},
$S:0}
C.cGx.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fl8.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fl9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fla.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fl6.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCx()
w=w.e
s=A.n(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bGd,new A.em(A.q(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxW(p,v,this.b.a,u,t,r),r,r,B.ay)},
$S:59}
C.fl7.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dy.aC(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ar(B.aY,B.bQ,w)
s.toString
s=A.a([B.b1,s,B.aY],x.O)
return A.aJ(!1,B.a3,!0,p,A.aO(!1,v,!0,A.eI(D.eqe,r,new A.o(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:142}
C.fUj.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eTW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTN.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eTO.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eTU.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eTT(w,this.b),null)},
$S:20}
C.eTT.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e8:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.au,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eR(w,u,new A.D(B.am9,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bo,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hpJ(new C.eTQ(r,e),r.a),B.aC,A.A(A.a([A.E(A.dU(B.dl,new C.eTR(d),w),1),B.at,A.E(A.bI(B.VN,w,new C.eTS(r,d),A.bo(B.aY,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,B.da,w,new A.b9(t,B.a1),w)},
$S:101}
C.eTQ.prototype={
$1(d){return this.b.$1(new C.eTP(this.a,d))},
$S:35}
C.eTP.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eTR.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTS.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eTV.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tv(this.b)},
$S:0}
C.eTI.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.beG(w)},
$S:0}
C.eTM.prototype={
$1(d){return this.bnX(d)},
bnX(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LY(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iY(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eTL.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eTK(this.b),v),v.k("M.E"))
u.d=t.beG(w)},
$S:0}
C.eTK.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eTX.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iY(this.b,w)},
$S:0}
C.eTY.prototype={
$1(d){return this.a.bGH(d,this.b)},
$S:z+67}
C.eTJ.prototype={
$0(){return this.a.aaV(this.b)},
$S:0}
C.h2e.prototype={
$1(d){return new C.aep(this.a,this.b,this.c,null)},
$S:z+68}
C.eU_.prototype={
$0(){return this.a.a09(this.b)},
$S:0}
C.eU0.prototype={
$0(){return this.a.QI(this.b)},
$S:0}
C.eU1.prototype={
$0(){return this.a.EV(this.b)},
$S:0}
C.eU2.prototype={
$0(){return this.a.a0a(this.b)},
$S:0}
C.eTZ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTE.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eTF.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qs(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eTG(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTG.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eUp.prototype={
$2(d,e){return d+e.gxE()},
$S:z+71}
C.eUl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eUm.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eU6.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e8:B.c,s=A.n(24),r=A.q(v,D.bWz,B.f,v,v,new A.o(B.az.j(u?0.18:0.08),v,A.L(B.az.j(0.28),B.r,1),v,v,v,B.a7),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.au,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aQ:B.au
u=u?B.ee:B.bP
w=x.p
return A.eR(v,t,new A.D(B.yJ,A.x(A.a([r,B.aR,q,B.Q,p,B.d6,A.A(A.a([A.E(A.dU(B.nV,new C.eU4(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fl,v,new A.b9(A.n(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.at,A.E(A.bI(D.fXy,v,new C.eU5(d),A.bo(B.az,v,v,v,v,v,B.fl,v,new A.b9(A.n(14),B.a1),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.da,v,new A.b9(s,B.a1),v)},
$S:49}
C.eU4.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eU5.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eUf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e8:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h1,28)],x.V),g=k?D.deh:B.a5i,f=x.p
g=A.q(m,A.x(A.a([A.q(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aC,D.f7s,B.aw,new A.bL(B.a6,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cC,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.aA,B.aF,B.x,g,m,m),B.n),m,m,m,m,E.ame,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7A(B.b7,B.jo,new C.eUc(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b7A(B.cy,R.zk,new C.eUd(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.az.j(k?0.14:0.06)
q=A.n(16)
p=A.L(B.az.j(0.28),B.r,1)
o=A.q(m,D.bVV,B.f,m,m,new A.o(B.az.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.au,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bo,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wf,A.q(m,A.x(A.a([g,new A.D(B.ama,A.x(A.a([w,B.X,u,B.by,t,B.X,A.aJ(!1,B.a3,!0,m,A.aO(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.X(B.eI,k?B.bu:B.bo,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eUe(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eUc.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w2("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUd.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w2("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUe.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.On(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUa.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e8:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eX,24)],x.V),k=o?B.ee:B.bP
k=A.q(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bu:B.bo
u=A.bx(w,new A.a5(48,48,C.aRS(!0,A.n(12),48,P.OP,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.au,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bh(v.gxE())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wf,A.q(q,A.x(A.a([B.X,k,new A.D(D.am7,A.A(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bo,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BZ,r.cq2(B.uS,B.aY,new C.eU8(d),p,"QR code or backup file","Transfer project"),r.b4B(!0,B.ef,B.az,new C.eU9(d),p,"Remove from this device","Delete project"),B.X],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eU8.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eU9.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eUb.prototype={
$1(d){return this.bnY(d)},
bnY(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LY(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wh(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUs.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eUr(w))},
$S:0}
C.eUr.prototype={
$0(){return this.a.r++},
$S:0}
C.eUt.prototype={
$0(){var w=this.a
return w.m(new C.eUq(w))},
$S:0}
C.eUq.prototype={
$0(){return this.a.r++},
$S:0}
C.eU3.prototype={
$0(){var w=this.a.c
w.toString
return A.iY(w,null)},
$S:0}
C.eU7.prototype={
$0(){return this.a.cjj(this.b)},
$S:0}
C.eUo.prototype={
$0(){var w=this.a
return w.m(new C.eUn(w,this.b))},
$S:0}
C.eUn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUi.prototype={
$0(){return this.a.w2("scan")},
$S:0}
C.eUj.prototype={
$0(){return this.a.w2("file")},
$S:0}
C.eUk.prototype={
$1(d){return this.a.cq3(d,this.b)},
$S:z+72}
C.eUh.prototype={
$0(){return this.a.EZ(this.b)},
$S:0}
C.eUg.prototype={
$0(){return this.a.a0F(this.b,this.c)},
$S:0}
C.cFF.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cFE.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cFC.prototype={
$1(d){return C.hJU(A.a2(d,x.N,x.z))},
$S:z+75}
C.cFD.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fEF.prototype={
$1(d){return d.y===D.kX},
$S:z+3}
C.h2Y.prototype={
$1(d){return C.aQA(d,this.a)},
$S:z+3}
C.fCi.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSe.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSd.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bSa.prototype={
$1(d){return C.hjL(A.a2(d,x.N,x.z))},
$S:z+24}
C.bSb.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSc.prototype={
$1(d){return J.k(d)},
$S:17}
C.fsM.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.foz.prototype={
$1(d){return C.h9y(A.a2(d,x.N,x.z))},
$S:z+79}
C.foA.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.foB.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fVK.prototype={
$1(d){return J.k(d)},
$S:17}
C.fVL.prototype={
$1(d){return d.a},
$S:z+81}
C.fVM.prototype={
$1(d){return d.length!==0},
$S:3}
C.fVN.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fVO.prototype={
$1(d){return d.Tv(null).ak()},
$S:z+82}
C.h2W.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fF8.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fIi.prototype={
$1(d){return C.alV(A.a2(d,x.N,x.z))},
$S:z+9}
C.fIj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fIk.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fIl.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fIm.prototype={
$1(d){return C.uq(d,this.a)},
$S:z+3}
C.fVx.prototype={
$1(d){return C.uq(d,this.a)},
$S:z+3}
C.h2R.prototype={
$1(d){return C.alV(A.a2(d,x.N,x.z))},
$S:z+9}
C.h2S.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h2T.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fEQ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fER.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h31.prototype={
$1(d){return!d.as},
$S:z+1}
C.fEk.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fEl.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fEm.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h2p.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fJ7.prototype={
$1(d){return d.Q},
$S:z+15}
C.fVq.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fIf.prototype={
$1(d){return C.alV(A.a2(d,x.N,x.z))},
$S:z+9}
C.fIg.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fIh.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fVl.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fp6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fp7.prototype={
$1(d){return C.hjL(A.a2(d,x.N,x.z))},
$S:z+24}
C.fp8.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fp9.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fpa.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpn.prototype={
$2(d,e){return d.eM(new C.fpo(e))},
$S:1976}
C.fpo.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cc},
$S:1977}
C.fpk.prototype={
$1(d){return C.i5E(d,this.a)},
$S:z+84}
C.fpl.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fpm.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.ftt.prototype={
$1(d){return d.a},
$S:z+56}
C.ftu.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftv.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fwm.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fBy.prototype={
$1(d){return C.hve(d,C.Hb(d,this.a))},
$S:z+5}
C.fBz.prototype={
$1(d){return C.hvf(d,C.Hb(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBm.prototype
w.bvN=w.t
w=C.azA.prototype
w.bvI=w.t
w=C.aGM.prototype
w.bwa=w.t
w=C.aBn.prototype
w.bvO=w.t
w=C.aBp.prototype
w.bvP=w.t
w=C.aBq.prototype
w.bvQ=w.t
w=C.aMV.prototype
w.byE=w.t
w=C.aP0.prototype
w.bAX=w.t
w=C.aP1.prototype
w.bAY=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEm.prototype,"gcmY","cmZ",28)
var r
w(r=C.aBl.prototype,"gcfT","cfU",65)
v(r,"gaOE","NV",0)
v(r,"gcvj","Bl",0)
v(r,"gbOr","OB",0)
v(r,"gcJH","z1",0)
v(r,"gcp0","a1m",0)
v(r,"gbJR","Oj",0)
v(r,"gbOR","XO",0)
w(r,"gbTU","bTV",78)
v(r,"gbEc","Al",0)
v(C.aBo.prototype,"gcJD","FR",0)
v(r=C.alK.prototype,"gbs8","bs9",2)
v(r,"gbs0","bs1",2)
v(r,"gcKM","cKN",2)
u(r,"gql","kM",0)
u(r=C.ajX.prototype,"geY","fX",2)
w(r,"gcbw","cbx",27)
u(C.auF.prototype,"gql","kM",0)
v(r=C.ayC.prototype,"gcWk","cWl",2)
u(r,"gql","kM",0)
u(C.aKy.prototype,"gbs6","bs7",2)
v(C.alT.prototype,"gBP","cKZ",2)
u(r=C.alR.prototype,"gcLF","cLG",2)
u(r,"gql","kM",0)
v(r=C.alN.prototype,"gbqZ","br_",2)
v(r,"gcQR","cQS",2)
u(r=C.alP.prototype,"geY","fX",2)
u(r,"giv","cKi",2)
v(r=C.alL.prototype,"gcK7","cK8",2)
u(r,"gbpR","jH",2)
v(r=C.aEV.prototype,"gagO","wi",0)
v(r,"gciz","a0w",0)
v(r,"gaSP","Ip",0)
v(r=C.aES.prototype,"gcFB","a3u",0)
v(r,"gagO","wi",0)
v(r,"gctj","a20",0)
v(r,"gciu","b2Q",2)
v(r,"gcjw","a0K",0)
w(r,"gcfN","cfO",35)
v(r,"gbOJ","Iu",0)
v(r,"gcGG","cGH",2)
v(r,"gc5J","Zv",0)
w(r,"gceh","cei",36)
v(r,"gcii","cij",2)
v(r=C.aDl.prototype,"gcbC","Qf",0)
v(r,"gcbE","cbF",2)
v(r,"gbLl","aax",0)
v(r=C.aEU.prototype,"gbSk","Yi",0)
v(r,"gc1R","YY",0)
v(r,"gczJ","a2S",0)
v(r,"gcvT","a2t",0)
v(C.aET.prototype,"gcvC","aiC",0)
v(C.atR.prototype,"gcef","a07",0)
v(C.aA5.prototype,"ga3d","KG",2)
v(C.aA4.prototype,"ga3d","KG",2)
v(C.ayP.prototype,"ga3d","KG",2)
v(r=C.aGn.prototype,"gb4_","Re",0)
v(r,"gbD0","Wr",0)
v(r,"gcjk","cjl",2)
w(C.aGm.prototype,"gcf7","cf8",69)
t(C.aGo.prototype,"gaSK",0,0,null,["$1","$0"],["Io","bMD"],70,0,0)
s(C,"hCT","ify",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.aps,C.uI,C.nr,C.Ij,C.afA,C.KF,C.uJ,C.bSK,C.t9,C.boK,C.am1,C.adI,C.lp,C.bRl,C.au2,C.zw,C.akD,C.MD,C.bad,C.a9N,C.bht,C.afH,C.azP,C.afv,C.aKy,C.KM,C.Gu,C.bgm,C.aKt,C.aqM,C.dgN,C.lS,C.aUS,C.aUR,C.aSS,C.ud,C.rj,C.lA,C.hS,C.kR,C.aIr])
u(A.ht,[C.fMV,C.fMU,C.fMW,C.fWp,C.fAg,C.fAh,C.fAm,C.fKE,C.fKD,C.fKC,C.c7t,C.fWW,C.fWO,C.fX_,C.fEY,C.dPn,C.dPi,C.dPj,C.dOW,C.dOS,C.dPC,C.dPD,C.dPw,C.dPx,C.dPE,C.dPF,C.fFI,C.fIc,C.fId,C.fVv,C.h2Q,C.fEP,C.fW3,C.dg_,C.dfm,C.dfv,C.dfM,C.dfr,C.dfx,C.dfo,C.dfB,C.dfC,C.dfA,C.dfR,C.dfQ,C.dhN,C.dhO,C.dhP,C.dgd,C.dgi,C.dgh,C.cOD,C.cOF,C.d7b,C.d7A,C.d7B,C.d7E,C.d7G,C.d7H,C.d7I,C.d7K,C.d7L,C.bR5,C.bR_,C.fta,C.h2J,C.h2K,C.h2L,C.h2G,C.h2M,C.h2N,C.h2O,C.h2F,C.fGj,C.fUw,C.fCj,C.fJ6,C.bM9,C.h37,C.fV1,C.bKl,C.bKg,C.bKi,C.bKh,C.cpE,C.cpz,C.cpA,C.cpy,C.cpw,C.cpB,C.cPH,C.cEE,C.cEH,C.cEF,C.cEI,C.cEJ,C.f5U,C.fg2,C.bRS,C.bRM,C.bRQ,C.bRt,C.e0N,C.e0K,C.e0L,C.e0J,C.e0P,C.bRK,C.bRA,C.bRk,C.bRj,C.bRf,C.bRg,C.bRh,C.bRi,C.e2s,C.e1S,C.e1N,C.e1e,C.e1u,C.e1x,C.e1t,C.e1s,C.e1J,C.e1K,C.e1E,C.e12,C.e1V,C.e1P,C.e14,C.e15,C.e16,C.e1b,C.e19,C.e18,C.e1o,C.e1p,C.e1j,C.e21,C.e1Y,C.dgo,C.dgp,C.fFM,C.fFN,C.fFO,C.fFK,C.fFL,C.fFR,C.fFS,C.fFT,C.fFP,C.fFQ,C.dgI,C.dgy,C.dgt,C.dgD,C.dgE,C.dgH,C.dgv,C.dgK,C.dgL,C.dgM,C.flD,C.eWM,C.dwB,C.dwL,C.dwM,C.dwN,C.dwQ,C.dwP,C.dwR,C.dwW,C.dwX,C.ceA,C.cez,C.cev,C.cew,C.cex,C.cey,C.ceF,C.ceC,C.ceD,C.e2e,C.e2h,C.e2g,C.e2n,C.e2o,C.dOH,C.fWw,C.fVU,C.h2o,C.fVY,C.fVX,C.d7Z,C.d8_,C.d7V,C.cGs,C.cGu,C.cGv,C.cGn,C.cGw,C.fl8,C.fUj,C.eTU,C.eTQ,C.eTM,C.eTK,C.eTY,C.h2e,C.eU6,C.eUf,C.eUa,C.eUb,C.eUk,C.cFE,C.cFC,C.cFD,C.fEF,C.h2Y,C.fCi,C.bSe,C.bSd,C.bSa,C.bSb,C.bSc,C.foz,C.foA,C.fVK,C.fVL,C.fVM,C.fVN,C.fVO,C.h2W,C.fF8,C.fIi,C.fIj,C.fIl,C.fIm,C.fVx,C.h2R,C.h2S,C.h2T,C.fEQ,C.fER,C.h31,C.fEk,C.fEl,C.h2p,C.fJ7,C.fVq,C.fIf,C.fIg,C.fVl,C.fp6,C.fp7,C.fp8,C.fp9,C.fpa,C.fpo,C.fpk,C.fpl,C.ftt,C.ftu,C.fwm,C.fBy,C.fBz])
u(A.ax,[C.b_r,C.alI,C.aWb,C.ZF,C.bbZ,C.Qy,C.a6l,C.tB,C.Il,C.bgk,C.bk9,C.by6,C.bns,C.ae3,C.bk8,C.ae2,C.bk7,C.aDm,C.aJv,C.ae4,C.Gq,C.bgl,C.adj,C.bgj,C.bgo,C.b_p,C.atR,C.aep])
u(A.mg,[C.bcC,C.bdQ,C.bdH,C.aIm,C.bja,C.boJ,C.aWg,C.bcE,C.aBk,C.bc7,C.bsL,C.bji,C.biJ,C.biQ,C.bgn,C.bfp,C.blg,C.bxW])
u(A.iH,[C.fWT,C.fWU,C.fWV,C.fWM,C.fWN,C.fWY,C.fWZ,C.dPz,C.dPl,C.dPo,C.dP2,C.dP3,C.dP4,C.dP1,C.dP9,C.dP0,C.dPa,C.dPb,C.dP_,C.dPc,C.dOZ,C.dPd,C.dOY,C.dPe,C.dOQ,C.dOR,C.dOX,C.dPf,C.dOV,C.dPg,C.dOU,C.dP5,C.dOT,C.dP6,C.dOP,C.dP7,C.dP8,C.dPA,C.dPB,C.dPp,C.dPq,C.dPr,C.dPs,C.dPt,C.dPu,C.dPv,C.dPH,C.dPy,C.fFJ,C.dfk,C.dfi,C.dfj,C.dfl,C.dfZ,C.dfO,C.dfL,C.dfn,C.dfP,C.dft,C.dfu,C.dfw,C.dfN,C.dfs,C.dfy,C.dfW,C.dfI,C.dfH,C.dfJ,C.dfK,C.dfD,C.dfF,C.dfG,C.dfz,C.dfS,C.dfV,C.dfp,C.dfq,C.dhM,C.dhL,C.dhK,C.dhJ,C.dhQ,C.dhI,C.dhR,C.dge,C.dgf,C.dgg,C.dgj,C.dgc,C.dgb,C.cOE,C.d7a,C.d7n,C.d7m,C.d7C,C.d7l,C.d7D,C.d7k,C.d7j,C.d7F,C.d7i,C.d7v,C.d7u,C.d7M,C.bQZ,C.bR8,C.bR0,C.bR1,C.bR4,C.bR3,C.bR6,C.bR7,C.bR2,C.bQX,C.bQY,C.bSC,C.bSD,C.bSE,C.bSF,C.bSG,C.bSH,C.bSI,C.h2I,C.fUx,C.bKk,C.bKf,C.bKd,C.bKe,C.bKc,C.cpG,C.cpH,C.cpF,C.cpI,C.cpK,C.cpL,C.cpM,C.cpC,C.cED,C.cEM,C.cEN,C.cEO,C.cEL,C.cEP,C.cEQ,C.cER,C.cES,C.cEG,C.cEK,C.bS7,C.bS6,C.bS4,C.bS2,C.bS3,C.bS_,C.bS0,C.bS1,C.bS5,C.bRZ,C.f5V,C.f5W,C.f5X,C.f5Y,C.f5Z,C.bRW,C.bRX,C.bRY,C.bRR,C.bRT,C.bRU,C.bRV,C.bRN,C.bRx,C.bRw,C.bRv,C.bRp,C.bRq,C.bRu,C.bRr,C.bRs,C.bRo,C.e0M,C.e0O,C.e0H,C.e0I,C.e0G,C.e0Q,C.e0R,C.e0S,C.e0V,C.e0W,C.e0X,C.e0Y,C.e0Z,C.e1_,C.e10,C.e11,C.e0T,C.e0U,C.bRJ,C.bRI,C.bRz,C.bRy,C.bRF,C.bRG,C.bRC,C.bRD,C.bRE,C.bRB,C.bR9,C.bRa,C.bRe,C.bRd,C.bRc,C.bRb,C.e2r,C.e2q,C.e2t,C.e2u,C.e2v,C.e2p,C.e2x,C.e2w,C.e1Q,C.e1R,C.e1T,C.e1f,C.e1w,C.e1v,C.e1y,C.e1M,C.e1r,C.e1C,C.e1D,C.e1B,C.e1z,C.e1A,C.e1F,C.e1G,C.e1H,C.e1L,C.e13,C.e1O,C.e17,C.e1a,C.e1c,C.e1U,C.e1i,C.e1g,C.e1k,C.e1l,C.e1h,C.e1m,C.e1q,C.e22,C.e23,C.e1W,C.e1Z,C.e2_,C.e20,C.e25,C.e1X,C.e1d,C.dgn,C.dgm,C.dgr,C.dgB,C.dgs,C.eWL,C.dwC,C.dwz,C.dwA,C.dwK,C.dwJ,C.dwI,C.dwS,C.dwH,C.dwT,C.dwG,C.dwU,C.dwF,C.dwV,C.dwE,C.dwD,C.dwO,C.dwY,C.dx6,C.e2f,C.e2j,C.e2k,C.e2b,C.e2c,C.e2d,C.e2i,C.e2m,C.e2l,C.e26,C.e27,C.e28,C.e29,C.e2a,C.dOI,C.fWt,C.cnY,C.d7Y,C.d7X,C.d80,C.d7U,C.d7W,C.cGk,C.cGq,C.cGr,C.cGp,C.cGt,C.cGo,C.cGl,C.cGm,C.cGx,C.fl9,C.fla,C.eTW,C.eTN,C.eTO,C.eTP,C.eTR,C.eTS,C.eTV,C.eTI,C.eTL,C.eTX,C.eTJ,C.eU_,C.eU0,C.eU1,C.eU2,C.eTZ,C.eTD,C.eTE,C.eTF,C.eTH,C.eTG,C.eUl,C.eUm,C.eU4,C.eU5,C.eUc,C.eUd,C.eUe,C.eU8,C.eU9,C.eUs,C.eUr,C.eUt,C.eUq,C.eU3,C.eU7,C.eUo,C.eUn,C.eUi,C.eUj,C.eUh,C.eUg])
u(A.af,[C.apE,C.TP,C.a_n,C.a_r,C.a_p,C.ZY,C.alJ,C.ajW,C.auE,C.ayB,C.alS,C.alQ,C.alM,C.W9,C.alO,C.TQ,C.aqP,C.aqJ,C.a01,C.aqN,C.a0l,C.a0m,C.a77,C.a__,C.ZZ,C.Zw,C.a28,C.Ge,C.ayI,C.atQ,C.atK,C.atP,C.OR])
u(A.ah,[C.aEm,C.bge,C.aBl,C.bgD,C.aBo,C.bdO,C.aBm,C.azA,C.aGM,C.ayC,C.aBq,C.aBp,C.aBn,C.blA,C.alP,C.alL,C.aEV,C.aES,C.aDl,C.aEU,C.aET,C.blB,C.aMV,C.aA5,C.aA4,C.ayP,C.bxZ,C.aP0,C.aP1,C.aGn,C.bmY,C.aGm,C.bzK])
u(A.ju,[C.dPk,C.dPm,C.dPh,C.dPG,C.fIe,C.bQW,C.dfY,C.dfX,C.dfE,C.dfT,C.dfU,C.dgk,C.bSJ,C.bSB,C.bRm,C.bRn,C.h2H,C.h36,C.bKj,C.cpJ,C.cpD,C.cpx,C.f6_,C.bRL,C.bRO,C.bRP,C.dqX,C.bRH,C.e1I,C.e1n,C.e24,C.dgA,C.dgz,C.dgx,C.dgC,C.dgF,C.dgG,C.dgq,C.dgu,C.dgw,C.dgJ,C.cet,C.ceB,C.ceG,C.dOJ,C.fWv,C.fWu,C.fl6,C.fl7,C.eTT,C.eUp,C.cFF,C.fsM,C.foB,C.fIk,C.fEm,C.fIh,C.fpn,C.fpm,C.ftv])
u(A.lB,[C.a1E,C.afJ,C.a1X,C.a_P,C.acm,C.aLf,C.Ik,C.alU,C.cFG,C.cFH])
t(C.alK,C.aBm)
t(C.ajX,C.azA)
t(C.auF,C.aGM)
t(C.bgi,C.aBq)
t(C.alT,C.bgi)
t(C.bgh,C.aBp)
t(C.alR,C.bgh)
t(C.bgg,C.aBn)
t(C.alN,C.bgg)
t(C.blh,C.aMV)
t(C.bxX,C.aP0)
t(C.bxY,C.aP1)
t(C.aGo,C.bzK)
t(C.baq,A.bae)
t(C.by_,A.a6N)
t(C.bap,C.by_)
w(C.aBm,A.cc)
w(C.azA,A.cc)
w(C.aGM,A.eO)
w(C.aBn,A.cc)
v(C.bgg,C.afv)
w(C.aBp,A.cc)
v(C.bgh,C.afv)
w(C.aBq,A.cc)
v(C.bgi,C.afv)
w(C.aMV,A.eO)
w(C.aP0,A.cc)
w(C.aP1,A.cc)
v(C.bzK,A.eC)
v(C.by_,A.je)})()
A.j1(b.typeUniverse,JSON.parse('{"b_r":{"ax":[],"v":[]},"bcC":{"aC":[]},"apE":{"af":[],"v":[]},"aEm":{"ah":["apE"]},"TP":{"af":[],"v":[]},"alI":{"ax":[],"v":[]},"aWb":{"ax":[],"v":[]},"bge":{"ah":["TP"]},"a_n":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"a_p":{"af":[],"v":[]},"ZY":{"af":[],"v":[]},"aBl":{"ah":["a_n"]},"bgD":{"ah":["a_r"]},"aBo":{"ah":["a_p"]},"ZF":{"ax":[],"v":[]},"bdQ":{"aC":[]},"bdH":{"aC":[]},"bdO":{"ah":["ZY"]},"aIm":{"aC":[]},"bja":{"aC":[]},"bbZ":{"ax":[],"v":[]},"alJ":{"af":[],"v":[]},"alK":{"ah":["alJ"]},"boJ":{"aC":[]},"aWg":{"aC":[]},"ajW":{"af":[],"v":[]},"auE":{"af":[],"v":[]},"ayB":{"af":[],"v":[]},"ajX":{"ah":["ajW"]},"bcE":{"aC":[]},"Qy":{"ax":[],"v":[]},"aBk":{"aC":[]},"auF":{"ah":["auE"]},"bc7":{"aC":[]},"ayC":{"ah":["ayB"]},"alS":{"af":[],"v":[]},"alQ":{"af":[],"v":[]},"alM":{"af":[],"v":[]},"alT":{"ah":["alS"]},"bsL":{"aC":[]},"alR":{"ah":["alQ"]},"bji":{"aC":[]},"alN":{"ah":["alM"]},"biJ":{"aC":[]},"W9":{"af":[],"v":[]},"alO":{"af":[],"v":[]},"TQ":{"af":[],"v":[]},"a6l":{"ax":[],"v":[]},"biQ":{"aC":[]},"tB":{"ax":[],"v":[]},"Il":{"ax":[],"v":[]},"blA":{"ah":["W9"]},"alP":{"ah":["alO"]},"alL":{"ah":["TQ"]},"aqP":{"af":[],"v":[]},"aqJ":{"af":[],"v":[]},"a01":{"af":[],"v":[]},"ae4":{"ax":[],"v":[]},"aEV":{"ah":["aqP"]},"aES":{"ah":["aqJ"]},"bgk":{"ax":[],"v":[]},"bgn":{"aC":[]},"bk9":{"ax":[],"v":[]},"bfp":{"aC":[]},"by6":{"ax":[],"v":[]},"bns":{"ax":[],"v":[]},"aDl":{"ah":["a01"]},"ae3":{"ax":[],"v":[]},"bk8":{"ax":[],"v":[]},"ae2":{"ax":[],"v":[]},"bk7":{"ax":[],"v":[]},"aDm":{"ax":[],"v":[]},"aJv":{"ax":[],"v":[]},"Gq":{"ax":[],"v":[]},"aqN":{"af":[],"v":[]},"a0l":{"af":[],"v":[]},"a0m":{"af":[],"v":[]},"aEU":{"ah":["aqN"]},"bgl":{"ax":[],"v":[]},"adj":{"ax":[],"v":[]},"bgj":{"ax":[],"v":[]},"bgo":{"ax":[],"v":[]},"aET":{"ah":["a0l"]},"blB":{"ah":["a0m"]},"b_p":{"ax":[],"v":[]},"a77":{"af":[],"v":[]},"blh":{"ah":["a77"]},"blg":{"aC":[]},"atR":{"ax":[],"v":[]},"a__":{"af":[],"v":[]},"ZZ":{"af":[],"v":[]},"Zw":{"af":[],"v":[]},"a28":{"af":[],"v":[]},"aA5":{"ah":["a__"]},"aA4":{"ah":["ZZ"]},"ayP":{"ah":["Zw"]},"bxZ":{"ah":["a28"]},"Ge":{"af":[],"v":[]},"ayI":{"af":[],"v":[]},"bxX":{"ah":["Ge"]},"bxY":{"ah":["ayI"]},"bxW":{"aC":[]},"atQ":{"af":[],"v":[]},"aGn":{"ah":["atQ"]},"aep":{"ax":[],"v":[]},"atK":{"af":[],"v":[]},"atP":{"af":[],"v":[]},"bmY":{"ah":["atK"]},"aGm":{"ah":["atP"]},"OR":{"af":[],"v":[]},"aGo":{"ah":["OR"],"eC":[]},"bap":{"je":[],"fi":[]}}'))
A.Db(b.typeUniverse,JSON.parse('{"afv":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aSS"),cq:w("mc"),Q:w("rj"),r:w("bu<m,m>"),c5:w("aUR"),dY:w("aUS"),fH:w("MD"),de:w("akD"),dN:w("ML<F>"),gc:w("Ef<F>"),A:w("eH<m?>"),e:w("Ij"),B:w("nr"),P:w("hS"),df:w("lp"),k:w("kR"),x:w("aB<~>"),U:w("O<SM>"),V:w("O<ac>"),C:w("O<rj>"),O:w("O<u>"),c:w("O<MD>"),b:w("O<akD>"),ac:w("O<eH<m?>>"),I:w("O<nr>"),u:w("O<hS>"),J:w("O<lp>"),_:w("O<kR>"),cl:w("O<aB<ai<a8<m,@>>>>"),R:w("O<nu>"),eU:w("O<ai<+(I,I)>>"),ez:w("O<a8<m,aE>>"),gE:w("O<a8<m,m>>"),Y:w("O<a8<m,@>>"),fD:w("O<mL>"),bp:w("O<oC>"),g:w("O<p>"),ar:w("O<au2>"),v:w("O<fT>"),gy:w("O<a9N>"),L:w("O<+(m,m)>"),G:w("O<+(I,I)>"),E:w("O<+(I,~())>"),bd:w("O<+(m,F,P)>"),bF:w("O<+count,id,name(F,m,m)>"),F:w("O<cU>"),s:w("O<m>"),cF:w("O<au>"),aS:w("O<j0>"),dT:w("O<bad>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lA>"),h:w("O<azP>"),cC:w("O<bht>"),fp:w("O<KF>"),M:w("O<KM>"),gZ:w("O<aIr>"),gA:w("O<afA>"),e4:w("O<afH>"),dE:w("O<aKt>"),f7:w("O<P>"),n:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),d4:w("O<m?>"),eF:w("cw<ah<af>>"),d:w("ai<nr>"),do:w("ai<hS>"),cg:w("ai<lp>"),ax:w("ai<kR>"),fO:w("ai<a8<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(F,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lA>"),j:w("ai<@>"),fK:w("bA<m,m>"),d2:w("bA<m,ai<a8<m,@>>>"),a:w("a8<m,@>"),f:w("a8<@,@>"),gv:w("N<m,Im>"),cM:w("N<F,m>"),w:w("iB"),g2:w("rH"),bV:w("aps"),fL:w("ct"),K:w("aE"),dc:w("fT"),fo:w("Pc<F>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(I,ai<hS>)"),cs:w("+count,id,name(F,m,m)"),N:w("m"),fT:w("iu<hS>"),ec:w("iu<m>"),gW:w("r_<I>"),X:w("bq<I>"),bW:w("dK"),W:w("bP<m>"),b4:w("bP<F>"),cI:w("k_<m>"),av:w("Y<zw>"),cc:w("Y<m>"),l:w("v"),gF:w("fi"),fA:w("lA"),dO:w("Gu"),bw:w("ae2<m?>"),cy:w("KO"),q:w("mu"),y:w("P"),i:w("I"),z:w("@"),S:w("F"),eK:w("ai<kR>?"),m:w("aqM?"),cT:w("p?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,F)?"),he:w("+qrPayload,token,usesRemaining(m,m,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("qf?"),T:w("m?"),aD:w("dK?"),o:w("lA?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3X=new A.bg(B.fI,B.bI,B.fI,B.bI)
D.ady=new A.bg(B.fI,B.ii,B.fI,B.ii)
D.b4a=new A.bg(B.iw,B.bI,B.bI,B.bI)
D.b4e=new A.ay(B.cO,1.4,B.r,-1)
D.b4o=new A.ay(B.ab,1,B.r,-1)
D.ae2=new A.aY(140,1/0,0,1/0)
D.b5N=new A.aY(0,1/0,64,1/0)
D.b5R=new A.aY(0,84,0,1/0)
D.aea=new A.aY(130,1/0,0,1/0)
D.aCm=w([B.m5,B.rE,B.c],x.O)
D.c6L=new A.a9(B.aA,B.aF,B.x,D.aCm,null,null)
D.b6A=new A.o(null,null,null,null,null,D.c6L,B.n)
D.ddJ=w([B.aY,B.bQ],x.O)
D.c8Q=new A.a9(B.b6,B.b8,B.x,D.ddJ,null,null)
D.b6V=new A.o(null,null,null,null,null,D.c8Q,B.n)
D.XZ=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fv=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dhC=w([B.dw,D.XZ,D.fv],x.O)
D.c5Y=new A.a9(B.b6,B.b8,B.x,D.dhC,null,null)
D.b7F=new A.o(null,null,null,null,null,D.c5Y,B.n)
D.fp4=new A.G(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_3=new A.B("?",null,D.fp4,null,null,null,null,null,null,null,null,null)
D.bbj=new A.ce(B.A,null,null,D.h_3,null)
D.VF=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIb=new A.B("\ud83c\udf33",null,D.VF,null,null,null,null,null,null,null,null,null)
D.aeU=new A.ce(B.A,null,null,D.fIb,null)
D.fKN=new A.B("\ud83c\udfc6",null,As.Kt,null,null,null,null,null,null,null,null,null)
D.bbu=new A.ce(B.A,null,null,D.fKN,null)
D.bdk=new A.fk(null,null,null,null,null,E.km,null,null,null,null)
D.aeW=new A.ce(B.A,null,null,D.bdk,null)
D.kO=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fpD=new A.G(!0,D.kO,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJR=new A.B("No books on the shelf yet.",null,D.fpD,null,null,null,null,null,null,null,null,null)
D.eqf=new A.D(B.nD,D.fJR,null)
D.bbK=new A.ce(B.A,null,null,D.eqf,null)
D.fwA=new A.G(!0,D.fv,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_Y=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fwA,null,null,null,null,null,null,null,null,null)
D.eqQ=new A.D(B.cl,D.h_Y,null)
D.bcc=new A.ce(B.A,null,null,D.eqQ,null)
D.aWc=new A.B("\ud83e\uddfa",null,D.VF,null,null,null,null,null,null,null,null,null)
D.bcr=new A.ce(B.A,null,null,D.aWc,null)
D.fNg=new A.B("\ud83c\udfad",null,D.VF,null,null,null,null,null,null,null,null,null)
D.bcD=new A.ce(B.A,null,null,D.fNg,null)
D.bcG=new A.ce(B.A,null,null,A9.XN,null)
D.afg=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afm=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.beU=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.beZ=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bfa=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bfd=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bff=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bfn=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bfr=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bfw=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bfx=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bfy=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bg8=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Bs=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgh=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bgB=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bgE=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bgK=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bgS=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.afZ=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bgZ=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Ya=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ag1=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bha=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yc=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bhv=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agd=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bhT=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bi8=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.biw=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.biG=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FH=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bj1=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bj3=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bj7=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agF=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bjq=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bjw=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bjC=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agJ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bjK=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bkb=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkj=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bkl=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bkq=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.agZ=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bl2=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahm=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bm_=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahz=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmo=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FV=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bmu=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bmE=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bmG=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahE=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bmZ=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bn_=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bn2=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ahL=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.YT=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bnn=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bnI=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bnN=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ahW=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bnU=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Z_=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.boc=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bod=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G1=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bp_=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bpF=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bpL=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bpP=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qe=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bpZ=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bq2=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bq8=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bqa=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiG=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aiK=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.G7=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zh=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aiU=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bri=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.brB=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bs0=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bs9=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.aji=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.Zr=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bsi=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bsz=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.Zw=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bsN=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bt2=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZA=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bt7=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajA=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajC=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.btq=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ajI=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.btS=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.btW=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bu1=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bu7=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.buf=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.buO=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bvj=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fE5=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.byQ=new A.eH(null,D.fE5,B.fb,null,x.A)
D.fN7=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.byS=new A.eH(null,D.fN7,B.fb,null,x.A)
D.akE=new A.bd(3e4)
D.bzp=new A.bd(38e5)
D.bA9=new A.ik(0,10,0,10)
D.bAi=new A.Q(0,1,0,0)
D.bAt=new A.ik(0,4,0,4)
D.bAw=new A.Q(0,4,5,0)
D.bAN=new A.Q(10,10,14,10)
D.bAZ=new A.ik(10,4,10,4)
D.bB6=new A.ik(10,8,10,8)
D.bB7=new A.Q(10,8,8,8)
D.bBA=new A.Q(12,6,12,2)
D.bBQ=new A.Q(14,0,14,6)
D.bBU=new A.Q(14,10,6,6)
D.bBV=new A.Q(14,12,14,0)
D.bBZ=new A.Q(14,12,14,8)
D.bC1=new A.Q(14,12,8,14)
D.bC5=new A.ik(14,14,14,14)
D.bCn=new A.Q(14,6,14,40)
D.bCq=new A.Q(14,8,14,30)
D.bCO=new A.Q(16,2,16,10)
D.bCY=new A.Q(16,6,16,30)
D.bD_=new A.Q(16,6,16,8)
D.bDe=new A.Q(18,10,18,4)
D.bDg=new A.Q(18,12,18,0)
D.bDn=new A.Q(18,14,12,4)
D.am7=new A.Q(18,16,18,8)
D.bDE=new A.Q(18,20,18,22)
D.amb=new A.Q(18,24,18,24)
D.bDK=new A.Q(18,30,18,30)
D.bE1=new A.Q(20,10,12,20)
D.bE4=new A.Q(20,11,20,11)
D.bEf=new A.Q(20,18,16,18)
D.bEh=new A.Q(20,18,20,6)
D.bF6=new A.Q(24,32,24,28)
D.bF7=new A.Q(24,36,24,32)
D.bFb=new A.Q(26,26,24,14)
D.bFq=new A.Q(2,4,2,8)
D.bFu=new A.Q(30,0,30,0)
D.bFF=new A.Q(38,22,22,22)
D.amv=new A.Q(40,24,24,24)
D.bFH=new A.ik(40,40,40,40)
D.bFJ=new A.Q(46,30,30,30)
D.amy=new A.Q(4,0,0,8)
D.bG9=new A.Q(56,40,40,40)
D.bGd=new A.Q(1.25,1.25,1.25,1.25)
D.bGe=new A.Q(60,0,60,0)
D.bGi=new A.Q(6,14,6,16)
D.bGm=new A.Q(6,4,12,0)
D.bGq=new A.Q(6,6,10,2)
D.bGx=new A.ik(7,3,7,3)
D.bH6=new A.Q(5,1.5,5,1.5)
D.bHh=new A.Q(6,2.5,6,2.5)
D.fVe=new A.B("Family Games",null,B.kg,null,null,null,null,null,null,null,null,null)
D.fCI=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.aaT,null,null,null,null,null,null,null,null,null)
D.cHL=w([D.fVe,D.fCI],x.p)
D.bwl=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cHL,null)
D.bHH=new A.by(1,B.bb,D.bwl,null)
D.fZA=new A.B("Signature",null,B.nc,null,null,null,null,null,null,null,null,null)
D.bHK=new A.by(1,B.bb,D.fZA,null)
D.fRP=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tz,null,null,null,null,null,null,null,null,null)
D.bIh=new A.by(1,B.bb,D.fRP,null)
D.fWH=new A.B("Tell the AI what to fix",null,B.df,null,null,null,null,null,null,null,null,null)
D.bIy=new A.by(1,B.bb,D.fWH,null)
D.fxm=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYF=new A.B("Worksheets",null,D.fxm,null,null,null,null,null,null,null,null,null)
D.fxx=new A.G(!0,E.afI,null,null,null,null,13,B.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXw=new A.B("Track your project spending",null,D.fxx,null,null,null,null,null,null,null,null,null)
D.d5c=w([D.fYF,B.aw,D.fXw],x.p)
D.bvZ=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d5c,null)
D.bIE=new A.by(1,B.bb,D.bvZ,null)
D.fsn=new A.G(!0,E.km,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDh=new A.B("FAMILY LIBRARY",null,D.fsn,null,null,null,null,null,null,null,null,null)
D.bIW=new A.by(1,B.bb,D.fDh,null)
D.Or=new C.Ij("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wn=new C.Ik(0,"male")
D.oq=new C.Ik(1,"female")
D.yS=new C.Ik(2,"unknown")
D.ux=new C.alU(0,"owner")
D.Os=new C.alU(1,"editor")
D.kX=new C.alU(2,"viewer")
D.aor=new A.a0(61199,"MaterialIcons",!1)
D.bOc=new A.a0(61504,"MaterialIcons",!1)
D.bOd=new A.a0(61505,"MaterialIcons",!1)
D.bOf=new A.a0(61587,"MaterialIcons",!1)
D.bOm=new A.a0(61890,"MaterialIcons",!1)
D.bPe=new A.a0(63034,"MaterialIcons",!0)
D.bPw=new A.a0(63153,"MaterialIcons",!1)
D.bQ2=new A.a0(63429,"MaterialIcons",!1)
D.aqz=new A.a0(984520,"MaterialIcons",!1)
D.bOL=new A.a0(62776,"MaterialIcons",!1)
D.bSn=new A.ae(D.bOL,26,B.b1,null,null,null)
D.bNa=new A.a0(57648,"MaterialIcons",!1)
D.bSH=new A.ae(D.bNa,14,B.c,null,null,null)
D.bSY=new A.ae(B.Hf,17,null,null,null,null)
D.bT3=new A.ae(B.a2_,null,B.bQ,null,null,null)
D.bTu=new A.ae(E.a27,null,null,null,null,null)
D.bTx=new A.ae(B.j2,18,E.km,null,null,null)
D.a1Q=new A.a0(62044,"MaterialIcons",!1)
D.bTC=new A.ae(D.a1Q,null,B.aY,null,null,null)
D.bTJ=new A.ae(B.z4,18,B.c,null,null,null)
D.bUr=new A.ae(B.e9,16,null,null,null,null)
D.bUy=new A.ae(D.a1Q,32,B.aY,null,null,null)
D.bUR=new A.ae(E.aos,18,B.cO,null,null,null)
D.bVV=new A.ae(B.Hp,22,B.az,null,null,null)
D.bW6=new A.ae(B.e9,22,B.b1,null,null,null)
D.bWj=new A.ae(Z.a1V,22,B.c,null,null,null)
D.bWp=new A.ae(B.uI,52,B.c,null,null,null)
D.bWz=new A.ae(B.Hp,30,B.az,null,null,null)
D.bWS=new A.ae(B.a2d,null,B.c,null,null,null)
D.arg=new A.ae(B.uS,22,B.c,null,null,null)
D.bX0=new A.ae(B.e9,17,null,null,null,null)
D.bXn=new A.ae(B.wD,26,B.cO,null,null,null)
D.bY8=new A.ae(B.a2l,16,null,null,null,null)
D.bYU=new A.ae(B.uI,24,B.c,null,null,null)
D.bYZ=new A.ae(B.OV,20,B.t9,null,null,null)
D.bZ3=new A.ae(B.Hd,null,B.bQ,null,null,null)
D.bZb=new A.ae(B.j2,18,B.c,null,null,null)
D.bZR=new A.ae(B.cz,22,B.ab,null,null,null)
D.c_G=new A.ae(B.ef,16,B.ab,null,null,null)
D.c_S=new A.ae(D.a1Q,20,B.aY,null,null,null)
D.arG=new A.ae(B.hH,20,null,null,null,null)
D.c0m=new A.ae(B.cz,18,D.kO,null,null,null)
D.c0D=new A.ae(B.zb,28,B.c,null,null,null)
D.c0N=new A.ae(B.OL,null,B.ff,null,null,null)
D.c16=new A.ae(B.zb,24,B.c,null,null,null)
D.c1y=new A.ae(B.uI,null,B.aY,null,null,null)
D.c1z=new A.ae(B.k3,20,B.cO,null,null,null)
D.c1T=new A.ae(B.Hf,16,null,null,null,null)
D.c3s=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eJ,!0,null,null,null,null)
D.asn=new C.a6l(10,null)
D.c3Y=new C.a6l(12,null)
D.c3Z=new C.a6l(14,null)
D.dlI=w([B.bw,B.aY,B.fn,B.b1],x.O)
D.c5a=new A.a9(B.aA,B.aF,B.x,D.dlI,null,null)
D.boL=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.buV=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d1I=w([D.boL,D.buV],x.O)
D.c5l=new A.a9(B.b6,B.b8,B.x,D.d1I,null,null)
D.dfH=w([B.f0,B.fP,B.fn],x.O)
D.c5q=new A.a9(B.aA,B.aF,B.x,D.dfH,null,null)
D.aiu=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bfz=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d3V=w([D.aiu,D.bfz],x.O)
D.c5Z=new A.a9(B.b6,B.b8,B.x,D.d3V,null,null)
D.bjg=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBC=w([D.bjg,D.aiu],x.O)
D.c6i=new A.a9(B.aA,B.aF,B.x,D.aBC,null,null)
D.ahf=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.blR=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.deM=w([D.ahf,D.blR],x.O)
D.c6W=new A.a9(B.a6,B.a9,B.x,D.deM,null,null)
D.dsF=w([B.bD,B.mL],x.O)
D.c6Y=new A.a9(B.b6,B.b8,B.x,D.dsF,null,null)
D.boG=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dtB=w([D.boG,D.kO,D.kO,K.MW],x.O)
D.dw3=w([0,0.07,0.9,1],x.n)
D.c7s=new A.a9(B.a6,B.a9,B.x,D.dtB,D.dw3,null)
D.c7B=new A.a9(B.aA,B.aF,B.x,B.Sz,null,null)
D.d_v=w([B.aE,D.lB],x.O)
D.c7E=new A.a9(B.a6,B.a9,B.x,D.d_v,null,null)
D.dsd=w([B.b1,B.aY,B.bQ],x.O)
D.c8B=new A.a9(B.aA,B.aF,B.x,D.dsd,null,null)
D.ccR=w([10,20,30],x.t)
D.cmN=w([-1,-0.4,0.3,1],x.n)
D.cuf=w([B.bw,B.b1,B.f0],x.O)
D.cum=w([B.br,B.aE,B.jQ],x.O)
D.cuo=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cv5=w([30,140,262,360],x.n)
D.bn8=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cAD=w([D.bn8,E.ai5],x.O)
D.ekR=new A.p(1,2)
D.fat=new A.cU(B.aT,D.ekR,3)
D.ayv=w([D.fat],x.F)
D.cI2=w([B.hk,B.cg,B.fj],x.O)
D.cKN=w([B.bM,B.bv,B.bp],x.O)
D.bJM=new C.uI("classic","Classic leather","Gold-edged brown leather",D.aBC,E.km,E.km,"\u2766",B.K,!0,!1,!1,!1)
D.beE=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.btI=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d6U=w([D.beE,D.btI],x.O)
D.ai9=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bJH=new C.uI("ornate","Ornate gold","Double gold border and flourishes",D.d6U,D.ai9,D.ai9,"\u2726",B.K,!0,!0,!0,!1)
D.biQ=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bpz=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cZq=w([D.biQ,D.bpz],x.O)
D.bJG=new C.uI("parchment","Parchment","Old paper with dark ink",D.cZq,D.G1,L.iY,"\u2767",B.K,!0,!1,!1,!0)
D.afo=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.brX=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dqt=w([D.afo,D.brX],x.O)
D.bmB=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.brd=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bJJ=new C.uI("minimal","Clean paper","Plain and elegant, like a printed book",D.dqt,D.bmB,D.brd,"",B.K,!0,!0,!1,!0)
D.bJL=new C.uI("midnight","Midnight","Deep blue with silver stars",I.aBW,B.cu,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bJF=new C.uI("emerald","Emerald library","Green cloth, title on the left",W.ayV,E.km,B.h6,"\u25c6",B.bk,!0,!1,!1,!1)
D.bsr=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dou=w([B.et,D.bsr],x.O)
D.bnT=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bp7=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bJK=new C.uI("rose","Rose vintage","Burgundy with rose-gold lettering",D.dou,D.bnT,D.bp7,"\u2740",B.K,!0,!1,!0,!1)
D.dtc=w([B.cs,F.ns],x.O)
D.bJI=new C.uI("modern","Modern","Dark, bold, left-aligned",D.dtc,B.aJ,B.c,"",B.bk,!1,!0,!1,!1)
D.a4r=w([D.bJM,D.bJH,D.bJG,D.bJJ,D.bJL,D.bJF,D.bJK,D.bJI],A.as("O<uI>"))
D.cNK=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dt_=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bJX=new C.lp('What does "Ubuntu" mean?',D.dt_,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d0a=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bK_=new C.lp("In Swahili, what do we call a grandmother?",D.d0a,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d01=w(["Babu","Mama","Baba","Dada"],x.s)
D.bJV=new C.lp("In Swahili, what do we call a grandfather?",D.d01,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d1i=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bJZ=new C.lp("What is a sister called in Swahili?",D.d1i,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d6l=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bJW=new C.lp("What is a brother called in Swahili?",D.d6l,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d00=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bK6=new C.lp("Which word means father in Swahili?",D.d00,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.du7=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bK5=new C.lp('"Umoja ni nguvu" means...',D.du7,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dr9=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bK7=new C.lp('"Haba na haba hujaza kibaba" teaches us...',D.dr9,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d42=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bK4=new C.lp('The African saying "It takes a village to raise a child" means...',D.d42,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dur=w(["The elders","The market","The river","The drum"],x.s)
D.bK0=new C.lp("Who is the traditional keeper of the family stories?",D.dur,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cRV=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bJY=new C.lp("Why do families sit round the fire at night?",D.cRV,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dte=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bK2=new C.lp('What does "Harambee" mean?',D.dte,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d98=w(["An elder","A baby","A market","A cow"],x.s)
D.bK1=new C.lp('"Mzee" is a respectful word for...',D.d98,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dol=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bK3=new C.lp('What does "Shikamoo" show?',D.dol,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.ayQ=w([D.bJX,D.bK_,D.bJV,D.bJZ,D.bJW,D.bK6,D.bK5,D.bK7,D.bK4,D.bK0,D.bJY,D.bK2,D.bK1,D.bK3],x.J)
D.cWh=w([90,360],x.n)
D.cYY=w([B.bQ,B.bm],x.O)
D.bov=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cZC=w([D.afo,D.bov],x.O)
D.d_e=w([-1,-0.3,0.4,1],x.n)
D.d06=w([0,0.45,0.72,0.92,1],x.n)
D.biM=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d0o=w([D.biM,B.dj],x.O)
D.bgw=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ajS=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d0W=w([B.dw,D.bgw,D.ajS],x.O)
D.d1Y=w([B.bc,B.jg,B.p7],x.O)
D.bji=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.br4=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bgc=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d22=w([D.bji,D.br4,D.bgc],x.O)
D.d2n=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d2x=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hsi=new C.adI(78,424,48,44,56)
D.hsg=new C.adI(214,396,34,34,42)
D.hsh=new C.adI(442,452,56,50,64)
D.azO=w([D.hsi,D.hsg,D.hsh],A.as("O<adI>"))
D.d35=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bft=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bl1=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dw_=w([D.ahf,D.bft,D.bl1],x.O)
D.bJN=new C.uJ("leather","Leather",D.dw_,"vintage")
D.da9=w([B.d5,B.FT,Ab.Yq],x.O)
D.bJU=new C.uJ("midnight","Midnight",D.da9,"starry")
D.d1Z=w([B.en,B.e0,B.le],x.O)
D.bJT=new C.uJ("forest","Forest",D.d1Z,"story")
D.dy_=w([B.eo,B.et,B.ko],x.O)
D.bJQ=new C.uJ("burgundy","Burgundy",D.dy_,"royal")
D.cKl=w([B.aE,B.of,B.o1],x.O)
D.bJR=new C.uJ("royal","Royal",D.cKl,"royal")
D.d4y=w([B.bv,B.cs,F.ns],x.O)
D.bJO=new C.uJ("charcoal","Charcoal",D.d4y,"geo")
D.dw8=w([B.ch,B.dJ,B.y6],x.O)
D.bJS=new C.uJ("sunset","Sunset",D.dw8,"sunset")
D.dwP=w([B.jg,B.G2,B.Yt],x.O)
D.bJP=new C.uJ("ocean","Ocean",D.dwP,"band")
D.zH=w([D.bJN,D.bJU,D.bJT,D.bJQ,D.bJR,D.bJO,D.bJS,D.bJP],A.as("O<uJ>"))
D.d52=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d5E=w([B.an,B.aM,B.O],x.O)
D.d6Z=w([B.et,B.e0,B.d5,B.hm,B.y9,B.cO,B.kp,B.ed,B.d2],x.O)
D.d7_=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fau=new A.cU(B.dq,B.dG,8)
D.d7a=w([D.fau],x.F)
D.d8h=w([B.c4,B.dJ,B.kl],x.O)
D.bho=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blj=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bpu=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d8x=w([D.bho,G.aiD,D.blj,D.bpu,D.ajS],x.O)
D.d8N=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d8Y=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.beP=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bkG=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d9q=w([D.beP,D.agJ,D.bkG],x.O)
D.da4=w([B.c4,B.hA],x.O)
D.daa=w([G.nj,B.i7,G.afz,B.cN],x.O)
D.dbJ=w([B.cN,G.nj,B.i7,D.lC,B.cN],x.O)
D.dck=w([B.aU,B.w_,B.xW],x.O)
D.aAQ=w(["True","False"],x.s)
D.eHZ=new A.y(-0.65,0.6)
D.eUC=new A.y(-0.2,0.95)
D.eVH=new A.y(0.25,0.95)
D.eLs=new A.y(0.7,0.6)
D.eWg=new A.y(1,0.1)
D.dd5=w([At.Un,D.eHZ,D.eUC,D.eVH,D.eLs,D.eWg],x.G)
D.bno=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.btA=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bin=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.ddb=w([D.bno,D.btA,D.bin],x.O)
D.ddf=w([B.bN,B.c_,B.dx,B.aU],x.O)
D.ddK=w([B.hT,B.ch,B.u2],x.O)
D.de6=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.deh=w([B.f0,B.cO],x.O)
D.boP=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.deH=w([D.boP,D.afm],x.O)
D.deS=w([B.cJ,B.fw,B.hB],x.O)
D.df2=w([B.aJ,B.bm,B.d5],x.O)
D.dfE=w([B.ew,B.cY,B.e0],x.O)
D.dfY=w([B.dI,B.d5,B.FT],x.O)
D.dg1=w([B.bq,B.m2,B.d2],x.O)
D.dgi=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bo3=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmk=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dgC=w([D.bo3,D.agF,D.bmk],x.O)
D.dhn=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dip=w([1,0,7,6,3,2],x.t)
D.a5p=w(["leather","linen","plain","stars","rays"],x.s)
D.diB=w([0.5,2,3.6],x.n)
D.dj8=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bS4=new A.a0(985219,"MaterialIcons",!1)
D.bRC=new A.a0(983781,"MaterialIcons",!1)
D.aBi=w([B.a2_,B.hI,B.lM,B.ic,D.bS4,B.Hz,B.qE,D.bRC,I.aqn,B.CQ,B.qG,B.mX],A.as("O<a0>"))
D.a5t=w(["double","single","corners","none"],x.s)
D.bJC=new C.zw("Little Seed","\ud83c\udf31",0)
D.bJE=new C.zw("Young Listener","\ud83d\udc42",40)
D.bJD=new C.zw("Storyteller","\ud83e\ude98",120)
D.bJB=new C.zw("Village Pride","\ud83c\udfe1",300)
D.bJz=new C.zw("Keeper of Roots","\ud83c\udf33",700)
D.bJA=new C.zw("Elder of the Fire","\ud83d\udd25",1500)
D.aBk=w([D.bJC,D.bJE,D.bJD,D.bJB,D.bJz,D.bJA],A.as("O<zw>"))
D.dkh=w([B.di,B.bo,B.ed],x.O)
D.dkx=w([],x.C)
D.Dr=w([],x.u)
D.aLk=new A.p(225,528)
D.eJE=new A.y(D.aLk,1)
D.elB=new A.p(350,548)
D.ePV=new A.y(D.elB,0.95)
D.aLf=new A.p(158,656)
D.ePN=new A.y(D.aLf,1.12)
D.emm=new A.p(92,544)
D.eFc=new A.y(D.emm,0.93)
D.elE=new A.p(398,614)
D.eLP=new A.y(D.elE,1.04)
D.els=new A.p(318,662)
D.eAG=new A.y(D.els,1.1)
D.a5B=w([D.eJE,D.ePV,D.ePN,D.eFc,D.eLP,D.eAG],A.as("O<+(p,I)>"))
D.dmz=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dn0=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.do2=w([B.cN,G.nj,B.i7,D.lC,B.cN,B.i7],x.O)
D.dpt=w([B.ax,B.fw,B.hm],x.O)
D.dpN=w([-17,17],x.n)
D.dq4=w([-70,58],x.n)
D.dq6=w([-70,-30,20],x.n)
D.dr7=w([B.bq,B.m2,B.Zs],x.O)
D.dro=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dKY=new C.lS("construction","Construction","Jobsite & builds",B.uF)
D.dL4=new C.lS("house","Home Build","Houses & rooms",B.wy)
D.dKV=new C.lS("grocery","Grocery","Store & pantry",B.a2V)
D.dKU=new C.lS("calculator","Calculations","Math & estimates",B.P0)
D.dL2=new C.lS("lumber","Materials","Lumber & supplies",B.Pl)
D.dKR=new C.lS("kitchen","Kitchen","Remodel & meals",A3.Pm)
D.bRA=new A.a0(983756,"MaterialIcons",!1)
D.dKW=new C.lS("landscape","Landscaping","Yard & garden",D.bRA)
D.dKQ=new C.lS("plumbing","Plumbing","Pipes & water",B.pw)
D.dL5=new C.lS("electrical","Electrical","Wiring & power",B.hr)
D.dKO=new C.lS("store","Retail Shop","Daily business",B.lk)
D.dKP=new C.lS("paint_remodel","Paint & Remodel","Colors & walls",A3.Pf)
D.bR_=new A.a0(983311,"MaterialIcons",!1)
D.dL1=new C.lS("roofing","Roofing","Roofs & exteriors",D.bR_)
D.bRN=new A.a0(983986,"MaterialIcons",!1)
D.dKN=new C.lS("warehouse","Warehouse","Storage & stock",D.bRN)
D.dL_=new C.lS("vehicles","Vehicles","Fleet & transport",B.HA)
D.bON=new A.a0(62785,"MaterialIcons",!1)
D.dKT=new C.lS("farm","Farm","Crops & livestock",D.bON)
D.dKS=new C.lS("restaurant","Restaurant","Food & catering",B.wH)
D.dKZ=new C.lS("tools","Tools","Workshop gear",B.Hw)
D.dL3=new C.lS("wallet","Cash & Wallet","Quick spending",B.k3)
D.bPY=new A.a0(63395,"MaterialIcons",!1)
D.dL0=new C.lS("concrete","Concrete","Foundation work",D.bPY)
D.dKX=new C.lS("blueprint","Blueprint","Plans & design",Ao.aoW)
D.a5Y=w([D.dKY,D.dL4,D.dKV,D.dKU,D.dL2,D.dKR,D.dKW,D.dKQ,D.dL5,D.dKO,D.dKP,D.dL1,D.dKN,D.dL_,D.dKT,D.dKS,D.dKZ,D.dL3,D.dL0,D.dKX],A.as("O<lS>"))
D.drU=w([B.bu,B.bo],x.O)
D.dsG=w([B.iz,B.o9,B.dS],x.O)
D.aht=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aip=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bmF=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bek=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCu=w([D.aht,D.aip,D.bmF,D.bek],x.O)
D.dtR=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a68=w(["top","middle","bottom"],x.s)
D.dve=w([B.cr,B.bm,B.d5],x.O)
D.aCO=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b87=new A.ac(0,B.G,B.aT,B.H,14)
D.aCR=w([D.b87],x.V)
D.blz=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dvT=w([D.afZ,D.Zr,D.blz],x.O)
D.dvU=w([B.b9,B.cY,B.e0],x.O)
D.elb=new A.p(24,-8)
D.elU=new A.p(48,0)
D.el7=new A.p(24,6)
D.dxx=w([B.H,D.elb,D.elU,D.el7],x.g)
D.dxW=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ehL={top:0,middle:1,bottom:2}
D.dB8=new A.bu(D.ehL,["Top","Middle","Bottom"],x.r)
D.ehm={double:0,single:1,corners:2,none:3}
D.dBe=new A.bu(D.ehm,["Double line","One line","Corners","None"],x.r)
D.eix={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dCK=new A.bu(D.eix,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dCW=new A.bu(B.hY,[],A.as("bu<F,+(m,m)>"))
D.ehD={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DE=new A.bu(D.ehD,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bu<m,F>"))
D.dFm=new H.NI(32,null)
D.dFn=new H.NI(40,null)
D.dFo=new H.NI(46,null)
D.aKN=new C.atP(null)
D.ek2=new A.p(0,40)
D.ek3=new A.p(0,412)
D.ek5=new A.p(0,900)
D.ekf=new A.p(0,-34)
D.ekg=new A.p(0,-46)
D.eki=new A.p(0,-74)
D.ekl=new A.p(100,300)
D.ekm=new A.p(10,14)
D.ekp=new A.p(10,-10)
D.eku=new A.p(10,-46)
D.ekv=new A.p(10,-58)
D.ekw=new A.p(116,442)
D.eky=new A.p(11,-1)
D.ekz=new A.p(11,-10)
D.ekA=new A.p(11,-21)
D.aLa=new A.p(11,-60)
D.ekH=new A.p(14,-2)
D.ekI=new A.p(150,520)
D.a87=new A.p(150,592)
D.ekL=new A.p(15,-15)
D.ekM=new A.p(16,-1)
D.ekQ=new A.p(190,444)
D.ekT=new A.p(1,5)
D.el0=new A.p(21,-78)
D.el1=new A.p(222,615)
D.Jp=new A.p(225,300)
D.a8a=new A.p(225,574)
D.ela=new A.p(24,-52)
D.elc=new A.p(250,210)
D.eln=new A.p(2,-56)
D.aLo=new A.p(300,0)
D.elo=new A.p(300,440)
D.elr=new A.p(318,476)
D.elu=new A.p(324,144)
D.a8d=new A.p(332,150)
D.elw=new A.p(335,585)
D.elx=new A.p(338,140)
D.ely=new A.p(340,158)
D.elA=new A.p(34,-60)
D.E4=new A.p(36,-24)
D.elC=new A.p(372,470)
D.elD=new A.p(390,455)
D.elM=new A.p(42,468)
D.elN=new A.p(431,510)
D.elO=new A.p(431,520)
D.elP=new A.p(45,-92)
D.elQ=new A.p(46,20)
D.elR=new A.p(46,-92)
D.elS=new A.p(46,-94)
D.elT=new A.p(47,-4)
D.elV=new A.p(48,-4)
D.em2=new A.p(4,-26)
D.ema=new A.p(60,455)
D.emh=new A.p(8,14)
D.eml=new A.p(8,-76)
D.emn=new A.p(95,575)
D.emo=new A.p(98,-24)
D.emq=new A.p(9,-2)
D.emr=new A.p(9,-58)
D.aLx=new A.p(9,-79)
D.ems=new A.p(9,-9)
D.en4=new A.p(16.5,8)
D.en6=new A.p(3.2,0)
D.en8=new A.p(-16.5,8)
D.enf=new A.p(16.5,2)
D.eni=new A.p(-3.2,0)
D.enr=new A.p(9.5,6)
D.env=new A.p(-10,14)
D.enw=new A.p(-10,-12)
D.enx=new A.p(-10,-58)
D.enz=new A.p(-11,-1)
D.enA=new A.p(-11,-10)
D.enC=new A.p(-11,-60)
D.enD=new A.p(-12,-14)
D.enE=new A.p(-12,-16)
D.enL=new A.p(-14,-2)
D.enO=new A.p(-15,-15)
D.enP=new A.p(-15,-3)
D.enR=new A.p(-16,-1)
D.eo7=new A.p(-24,-52)
D.eoe=new A.p(-2,-34)
D.eof=new A.p(-2,-38)
D.eoh=new A.p(-30,-100)
D.a8e=new A.p(-36,-24)
D.eos=new A.p(-4,-26)
D.eou=new A.p(-4,-6)
D.eoE=new A.p(-8,-3)
D.eoF=new A.p(-8,-48)
D.eoI=new A.p(-9,-2)
D.eoK=new A.p(-9,-58)
D.eoL=new A.p(-9,-79)
D.eoM=new A.p(-9,-9)
D.eoO=new A.p(-9.5,6)
D.ep1=new A.p(-16.5,2)
D.fKt=new A.B("Write a new book",null,B.hh,null,B.K,null,null,null,null,null,null,null)
D.epB=new A.D(B.kr,D.fKt,null)
D.fZ8=new A.B("Tap to go on",null,B.vv,null,null,null,null,null,null,null,null,null)
D.epX=new A.D(B.lf,D.fZ8,null)
D.aqP=new A.ae(B.hV,18,B.c,null,null,null)
D.fDC=new A.B("Add",null,B.lv,null,null,null,null,null,null,null,null,null)
D.ddt=w([D.aqP,B.r3,D.fDC],x.p)
D.f7z=new A.c6(B.aL,B.e,B.P,B.m,null,B.p,null,0,D.ddt,null)
D.eq_=new A.D(B.nA,D.f7z,null)
D.eq0=new A.D(E.al0,A9.XN,null)
D.fxh=new A.G(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGL=new A.B("New Project",null,D.fxh,null,null,null,null,null,null,null,null,null)
D.dhK=w([D.aqP,B.ae,D.fGL],x.p)
D.f7C=new A.c6(B.aL,B.e,B.P,B.m,null,B.p,null,0,D.dhK,null)
D.eqe=new A.D(B.it,D.f7C,null)
D.fJh=new A.B("Choose your header",null,A1.vu,null,null,null,null,null,null,null,null,null)
D.eqz=new A.D(B.hU,D.fJh,null)
D.bdz=new A.fk(2.2,null,null,null,null,B.cO,null,null,null,null)
D.fdl=new A.a5(22,22,D.bdz,null)
D.bbF=new A.ce(B.A,null,null,D.fdl,null)
D.eqE=new A.D(B.a_J,D.bbF,null)
D.bCf=new A.Q(14,2,14,6)
D.fXf=new A.B("The top of your book. Tap a design to see it.",null,Q.tx,null,null,null,null,null,null,null,null,null)
D.eqF=new A.D(D.bCf,D.fXf,null)
D.fIq=new A.B("\ud83c\udfc6 A new record!",null,B.fW,null,null,null,null,null,null,null,null,null)
D.eqH=new A.D(B.lf,D.fIq,null)
D.esg=new A.iZ(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.esj=new A.iZ(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aM8=new A.iZ(1,0.9607843137254902,0.48627450980392156,0)
D.Jy=new A.iZ(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Ah=new A.iZ(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.esp=new A.iZ(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hur=new C.bja(null)
D.bx7=new A.mB(D.hur,null,B.ay,null,null)
D.aPM=new A.cL(0,0,0,0,null,null,D.bx7,null)
D.fDE=new A.B("\ud83c\udfc5",null,B.aax,null,null,null,null,null,null,null,null,null)
D.ewO=new A.cL(null,0,-34,null,null,null,D.fDE,null)
D.eES=new A.y("E","Sit by the fire again")
D.eKs=new A.y("C","Good Learner")
D.eNR=new A.y("D","Still Growing")
D.eSq=new A.y(-42,42)
D.eTL=new A.y("B","Faithful Listener")
D.eVJ=new A.y("A","Keeper of the Family")
D.eYT=new A.b5(-17,0.7,0)
D.eZs=new A.b5(-8,0.95,1.3)
D.f_v=new A.b5(18,0.65,5.2)
D.f_x=new A.b5(0,1.15,2.6)
D.f_R=new A.b5(9,0.9,3.9)
D.f1I=new A.cu([0,0,1,1])
D.aRf=new A.a3(0,0,520,160)
D.f4C=new A.a3(10,612,440,618)
D.f4D=new A.a3(10,612,440,628)
D.f4G=new A.a3(14,-64,34,-12)
D.f4J=new A.a3(300,336,350,348)
D.a98=new A.a3(30,96,420,346)
D.f4K=new A.a3(30,-9,46,1)
D.f4L=new A.a3(4,2,11,14)
D.f4N=new A.a3(-8,-12.5,8,-7)
D.f4O=new A.a3(-16.5,-21,16.5,1)
D.f4P=new A.a3(60,342,88,348)
D.Uo=new A.a3(66,-66,94,-36)
D.f4Q=new A.a3(6,8,10,14)
D.f4T=new A.a3(95,343,115,348)
D.f4U=new A.a3(-6.5,-74,6.5,-58)
D.f5_=new A.a3(-100,-74,100,-12)
D.f50=new A.a3(-10,8,-6,14)
D.f51=new A.a3(-11,2,-4,14)
D.f52=new A.a3(-11,-70,11,-56)
D.f59=new A.a3(-13,-24,13,-4)
D.f5f=new A.a3(-15,-21,15,0)
D.f5i=new A.a3(-16,-21,16,1)
D.f5j=new A.a3(-16,-21,16,2)
D.f5m=new A.a3(-16,-26,16,-6)
D.f5w=new A.a3(-230,-26,230,26)
D.f5U=new A.a3(-38,-26,12,-6)
D.f5Y=new A.a3(-3,-70,3,-63)
D.f5Z=new A.a3(-44,-22,44,0)
D.f60=new A.a3(-46,-9,-30,1)
D.aRj=new A.a3(-80,-190,80,20)
D.f67=new A.a3(-8,-26,40,-6)
D.f68=new A.a3(-98,-80,92,-75)
D.f69=new A.a3(-9,-15,9,-9)
D.fWO=new A.B("Let the AI write it from your tree",null,B.ix,null,B.K,null,null,null,null,null,null,null)
D.bKE=new A.dn(1,B.co,D.fWO,null)
D.da3=w([E.a3p,B.ae,D.bKE],x.p)
D.f7d=new A.c6(B.aL,B.e,B.P,B.m,null,B.p,null,0,D.da3,null)
D.fDi=new A.B("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dpP=w([D.arG,B.ae,D.fDi],x.p)
D.f7n=new A.c6(B.aL,B.ba,B.i,B.m,null,B.p,null,0,D.dpP,null)
D.bWc=new A.ae(B.ib,14,B.b1,null,null,null)
D.fqW=new A.G(!0,B.b1,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHa=new A.B("Cashier",null,D.fqW,null,null,null,null,null,null,null,null,null)
D.dif=w([D.bWc,B.bl,D.fHa],x.p)
D.f7r=new A.c6(B.aL,B.e,B.P,B.m,null,B.p,null,0,D.dif,null)
D.fDj=new A.B("Transfer & settings",null,B.df,null,null,null,null,null,null,null,null,null)
D.bIo=new A.by(1,B.bb,D.fDj,null)
D.d1r=w([D.arg,B.at,D.bIo],x.p)
D.f7s=new A.c6(B.aL,B.e,B.i,B.m,null,B.p,null,0,D.d1r,null)
D.fc1=new A.av(16,40)
D.fc6=new A.av(22,64)
D.fcd=new A.av(280,88)
D.fd1=new A.a5(30,null,null,null)
D.fCo=new A.B("The teacher is writing\u2026",null,B.AC,null,null,null,null,null,null,null,null,null)
D.bcN=new A.ce(B.A,null,null,D.fCo,null)
D.hom=new A.bP("w",x.W)
D.fdr=new A.a5(null,56,D.bcN,D.hom)
D.fee=new A.hG(5,8,8,1,null)
D.fem=new A.hG(2,12,12,1.05,null)
D.fGR=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ff4=new A.b1(D.fGR,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fH5=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTw=new A.b1(D.fH5,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fPs=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ffy=new A.b1(D.fPs,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_b=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ffD=new A.b1(D.h_b,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJf=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.ffK=new A.b1(D.fJf,null,null,null,null,null,null,null,null,null,null,null,null,B.h_,!1,null,null,null,B.t,null)
D.fXs=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aTA=new A.b1(D.fXs,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJd=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new A.b1(D.fJd,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fDV=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fgb=new A.b1(D.fDV,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMW=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fgh=new A.b1(D.fMW,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_V=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fgX=new A.b1(D.h_V,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fVI=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new A.b1(D.fVI,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_f=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fho=new A.b1(D.h_f,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fR6=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhq=new A.b1(D.fR6,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fL6=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fhr=new A.b1(D.fL6,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fL7=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fir=new A.b1(D.fL7,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fGT=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fiJ=new A.b1(D.fGT,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIS=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fj2=new A.b1(D.fIS,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fQy=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fji=new A.b1(D.fQy,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fLX=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fjj=new A.b1(D.fLX,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fvZ=new A.G(!0,B.bF,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkV=new A.en("\u2665",null,null,B.cH,null,null,null,null,null,null,D.fvZ)
D.ftd=new A.G(!0,B.aQ,null,null,null,null,28,B.R,B.cF,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fla=new A.en("Today: how well do you know the family?",null,null,B.cH,null,null,null,null,null,null,D.ftd)
D.flr=new A.G(!0,B.q2,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmy=new A.G(!0,D.kO,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmY=new A.G(!0,D.kO,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn1=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fna=new A.G(!0,D.fv,null,null,null,null,15,B.R,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnl=new A.G(!0,D.fv,null,null,null,null,13,B.I,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnF=new A.t1(!0,B.tj,null,null,null,null,B.dC,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new A.G(!0,B.cN,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new A.G(!0,D.kO,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnZ=new A.G(!0,B.cN,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo3=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo6=new A.G(!0,B.cN,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foD=new A.G(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foE=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foG=new A.G(!0,B.aQ,null,null,null,null,15.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp7=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUL=new A.G(!0,B.aS,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUN=new A.G(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpw=new A.G(!0,B.cN,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaC=new A.t1(!0,B.TU,null,null,null,null,B.dC,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vj=new A.G(!0,B.cN,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpG=new A.G(!0,B.O,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new A.G(!0,D.fv,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq8=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frh=new A.G(!0,D.fv,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUY=new A.G(!0,D.fv,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frA=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frL=new A.G(!0,D.fv,null,null,null,null,null,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frN=new A.G(!0,null,null,null,null,null,8,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frT=new A.G(!0,L.iY,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV1=new A.G(!0,D.fv,null,null,null,null,14.5,B.R,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsO=new A.G(!0,D.fv,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new A.G(!0,D.fv,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft8=new A.G(!0,B.O,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fta=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.Ir,null,null,null)
D.aVg=new A.G(!0,D.fv,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.G(!0,B.O,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fug=new A.G(!0,B.ff,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuE=new A.G(!0,B.bQ,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuI=new A.G(!0,B.bD,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuU=new A.G(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuX=new A.G(!0,D.fv,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv4=new A.G(!0,D.G1,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new A.G(!0,B.b1,null,null,null,null,13,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvD=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvJ=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fw8=new A.G(!0,B.cN,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwh=new A.G(!0,B.cO,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwu=new A.G(!0,D.lC,null,null,null,null,13,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVA=new A.G(!0,D.fv,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KD=new A.G(!0,B.cN,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVC=new A.G(!0,B.cN,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fwO=new A.G(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwS=new A.G(!0,G.nj,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxf=new A.G(!0,B.b1,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxw=new A.G(!0,D.fv,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxT=new A.G(!0,B.c,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new A.G(!0,D.fv,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyJ=new A.G(!0,D.fv,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyP=new A.G(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyY=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab5=new A.G(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab7=new A.G(!0,D.lB,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAF=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAX=new A.G(!0,B.aQ,null,null,null,null,27,B.R,B.cF,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB4=new A.G(!0,L.iY,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBc=new A.G(!0,L.iY,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBG=new A.B("Time:",null,B.hf,null,null,null,null,null,null,null,null,null)
D.fC1=new A.B("\ud83c\udfae",null,I.aaX,null,null,null,null,null,null,null,null,null)
D.fC2=new A.B("Themes",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fCw=new A.B("\ud83c\udfb2",null,B.xg,null,null,null,null,null,null,null,null,null)
D.fCA=new A.B("Delete this game?",null,B.ix,null,null,null,null,null,null,null,null,null)
D.fCH=new A.B("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.frv=new A.G(!0,B.O,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD7=new A.B("Debt receipt",null,D.frv,null,B.K,null,null,null,null,null,null,null)
D.aVQ=new A.G(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDq=new A.B("Person who owes",null,D.aVQ,null,null,null,null,null,null,null,null,null)
D.fEn=new A.B("Notes",null,B.aaK,null,null,null,null,null,null,null,null,null)
D.fEO=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fqp=new A.G(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fER=new A.B("Share",null,D.fqp,null,null,null,null,null,null,null,null,null)
D.fFN=new A.B("Move your family trees",null,K.ab3,null,null,null,null,null,null,null,null,null)
D.fGs=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fHs=new A.B("SAVE",null,D.KD,null,null,null,null,null,null,null,null,null)
D.fI4=new A.B("The round button is the right answer.",null,Q.ED,null,null,null,null,null,null,null,null,null)
D.fIp=new A.B("Remove this book?",null,B.fW,null,null,null,null,null,null,null,null,null)
D.fxc=new A.G(!0,B.cN,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Dh,null,null,null)
D.fIX=new A.B("Fireside Stories",null,D.fxc,null,null,null,null,null,null,null,null,null)
D.aWl=new A.B("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fJD=new A.B("What should the AI do?",null,B.df,null,null,null,null,null,null,null,null,null)
D.fq3=new A.G(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJS=new A.B("REPORT CARD",null,D.fq3,null,null,null,null,null,null,null,null,null)
D.fKA=new A.B("Calabash Catch",null,B.KG,null,null,null,null,null,null,null,null,null)
D.fL2=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fLu=new A.B("\ud83c\udfe1",null,B.EC,null,null,null,null,null,null,null,null,null)
D.fMb=new A.B("Ribbon bookmark",null,B.ju,null,null,null,null,null,null,null,null,null)
D.fyI=new A.G(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMF=new A.B("NGMY.ORG",null,D.fyI,null,B.K,null,null,null,null,null,null,null)
D.fNY=new A.B("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fuY=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOI=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fuY,null,B.K,null,null,null,null,null,null,null)
D.fPW=new A.B("Delete",null,B.Vc,null,null,null,null,null,null,null,null,null)
D.fPX=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQ3=new A.B("Thumbnail",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fQE=new A.B("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fQJ=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xi,null,B.K,null,null,null,null,null,null,null)
D.fR7=new A.B("Your photos",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fRn=new A.B("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fRK=new A.B("\u2b50 stars",null,B.Vq,null,null,null,null,null,null,null,null,null)
D.fRY=new A.B("Design your cover",null,A1.vu,null,null,null,null,null,null,null,null,null)
D.fS3=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fS6=new A.B("PICTURE",null,M.vz,null,null,null,null,null,null,null,null,null)
D.fS8=new A.B("\ud83c\udfaf",null,D.VF,null,null,null,null,null,null,null,null,null)
D.fSu=new A.B("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fSw=new A.B("You can undo it right after.",null,Q.ED,null,null,null,null,null,null,null,null,null)
D.fT2=new A.B("Print",null,B.vw,null,null,null,null,null,null,null,null,null)
D.fTr=new A.B("Amount owed",null,D.aVQ,null,null,null,null,null,null,null,null,null)
D.fTG=new A.B("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fUh=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fUk=new A.B("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fUM=new A.B("Debtor signature",null,B.aaK,null,null,null,null,null,null,null,null,null)
D.fUW=new A.B("Change icon",null,B.aaJ,null,null,null,null,null,null,null,null,null)
D.fVJ=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tz,null,null,null,null,null,null,null,null,null)
D.fWa=new A.B("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fWg=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VE,null,null,null,null,null,null,null,null,null)
D.fWE=new A.B("Download",null,B.vw,null,null,null,null,null,null,null,null,null)
D.fWF=new A.B("The person who planted this tree has not made a game yet.",null,B.AL,null,null,null,null,null,null,null,null,null)
D.fWJ=new A.B("Change",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fXy=new A.B("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fXB=new A.B("WHAT SHOULD IT CHANGE?",null,M.vz,null,null,null,null,null,null,null,null,null)
D.fYa=new A.B("COLOUR",null,M.vz,null,null,null,null,null,null,null,null,null)
D.fYo=new A.B("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fYr=new A.B("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fYA=new A.B("Give me another clue",null,D.KD,null,null,null,null,null,null,null,null,null)
D.fZu=new A.B("Create Family Tree",null,B.f9,null,null,null,null,null,null,null,null,null)
D.fZE=new A.B("THE TEACHER EXPLAINS THESE",null,T.tz,null,null,null,null,null,null,null,null,null)
D.flq=new A.G(!0,E.km,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZK=new A.B("Write the first page myself",null,D.flq,null,null,null,null,null,null,null,null,null)
D.h_i=new A.B("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.h_p=new A.B("Create Project",null,E.aVx,null,null,null,null,null,null,null,null,null)
D.hpF=new C.acm(1,"header")
D.ac9=new C.acm(2,"projects")
D.hpG=new C.acm(3,"cashier")
D.aca=new C.acm(4,"familyTree")
D.hCS=new C.cFG(0,"start")
D.hCT=new C.cFH(0,"start")
D.hq3=new C.Zw(null)
D.hr4=new C.ZZ(null)
D.dCT=new A.bu(B.hY,[],A.as("bu<m,Gu>"))
D.dkW=w([],x.dE)
D.dkX=w([],x.M)
D.hrB=new C.bgm(D.dCT,D.dkW,D.dkX,0,0,null,null)
D.b_G=new C.a_P(0,"intro")
D.b_H=new C.a_P(1,"countdown")
D.aco=new C.a_P(2,"ask")
D.Wx=new C.a_P(3,"reveal")
D.b_I=new C.a_P(4,"end")
D.hut=new C.t9(F.Ga,D.lC,B.cN,F.lD,5,!1,!1,!1,0,null)
D.huu=new C.t9(F.Ga,B.eo,B.cN,B.bP,2,!0,!0,!1,2,B.cN)
D.huv=new C.t9(B.oh,B.cO,B.cN,F.lD,2,!0,!1,!1,2,B.ax)
D.huw=new C.t9(F.Ga,B.dI,B.cN,F.lD,5,!1,!1,!1,1,null)
D.hux=new C.t9(F.ZH,D.aip,B.cN,F.lD,4,!0,!1,!0,0,null)
D.b_L=new C.t9(F.ZH,B.dJ,B.cN,F.lD,3,!0,!1,!0,2,null)
D.b_M=new C.t9(F.mP,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b_N=new C.t9(B.oh,B.aE,B.cN,B.bP,2,!0,!0,!1,2,B.dJ)
D.b_O=new C.t9(B.oh,G.nj,B.i7,F.lD,5,!1,!1,!0,3,null)
D.huy=new C.t9(B.oh,B.dJ,B.cN,F.lD,0,!0,!1,!1,0,B.aE)
D.b_P=new C.t9(F.Ga,B.eo,B.cN,B.bP,1,!1,!0,!1,1,null)
D.b_Q=new C.t9(F.FJ,B.ax,B.aE,F.lD,4,!0,!1,!0,2,null)
D.huz=new C.t9(F.mP,B.ax,B.eo,F.lD,3,!0,!1,!1,0,null)
D.huA=new C.t9(B.oh,B.dI,B.cN,B.bP,1,!1,!0,!1,1,null)
D.huB=new C.t9(F.FJ,D.aht,B.c,F.lD,5,!1,!1,!0,0,null)
D.hve=new C.a0m(null)
D.hD0=new C.afJ(0,"still")
D.WU=new C.afJ(1,"walk")
D.b0g=new C.afJ(2,"pound")
D.b0h=new C.afJ(3,"drum")
D.hyJ=new C.a1E(0,"greet")
D.b0i=new C.a1E(1,"teach")
D.acI=new C.a1E(2,"ask")
D.hyK=new C.a1E(3,"feedback")
D.b0j=new C.a1E(4,"end")
D.WZ=new C.a1X(0,"intro")
D.X_=new C.a1X(1,"asking")
D.B0=new C.a1X(2,"reacting")
D.acS=new C.a1X(3,"driving")
D.acT=new C.a1X(4,"arrived")
D.acW=new C.aLf(0,"projects")
D.b0H=new C.aLf(1,"cashier")
D.hAL=new C.aLf(2,"familyTree")})()};
(a=>{a["Lttu9KHV9Q5jCqUvshOjgek/MyA="]=a.current})($__dart_deferred_initializers__);