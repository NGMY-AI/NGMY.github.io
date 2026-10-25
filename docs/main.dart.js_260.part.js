((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,G,F,E,Y,Z,A_,A0,A1,A2,M,A3,H,Q,R,S,T,A4,A5,U,A6,A7,V,A8,A9,Aa,K,Ab,Ac,Ad,L,N,C={
by6(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$by6=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vP(null,""),$async$by6)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.O(y.j)
t=A.mV(b1)
s=A.bS(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dC(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dk(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.J)(h),++d){a0=h[d]
f.push(A.D(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.ak(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.ra(t,a1,B.hf,E.Jg),$async$by6)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Oo(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.O(l!=null&&A.Pf(l)?y.l:y.i)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Y(r.a(j.h(a2,a7)),q,p):B.cq
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.V(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a_Y(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$by6,v)},
ae5(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ae5=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vP(null,""),$async$ae5)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.O(y.j)
t=A.mV(b6)
s=x.S
r=A.dg(c1,0,A.dK(4,"count",s),A.S(c1).c)
q=F.feC(new A.I(r,new C.feO(),r.$ti.k("I<ai.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.ad("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.feN(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.ak(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ae5)
case 6:l=c5
k=F.Oo(l==null?"":l)
if(k==null)throw A.O("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.ald(s,D.d29,r.b(k.h(0,"cover"))?A.Y(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.O("There is no page to change.")
h=A.Q(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dC(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.D(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Q.ak(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ae5)
case 10:l=c5
k=l==null?null:F.Oo(l)
if(k==null)throw A.O(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d2(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kI(a5,a2.k("kI<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a4(a9)
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
h.m(0,i,new A.V(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("be<2>")
p=A.cy(new A.be(h,s),new C.feP(),s.k("E.E"),p)
p=F.feC(A.oG(p,3,A.a2(p).k("E.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("ct<1>")
b4=A.z(new A.ct(h,s),s.k("E.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a_Y(s,b9),$async$ae5)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.ald(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ae5,v)},
h18(d,e,f){return A.cb(null,B.x.j(0.65),!1,null,new C.fny(e,f),d,null,!0,!0,x.g2)},
ald:function ald(d,e,f){this.a=d
this.b=e
this.c=f},
feO:function feO(){},
feN:function feN(d){this.a=d},
feP:function feP(){},
fny:function fny(d,e){this.a=d
this.b=e},
bw5(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bw5=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.bc(b1,new C.f5s())){u=null
w=1
break}t=B.d.e7(b1,new C.f5t())
s=$.a1()
r=new A.ts()
q=A.JU(r,D.aFM)
p=A.T()
p.r=B.c.gt(0)
q.bp(D.aFM,p)
o=A.T()
o.r=B.M.gt(0)
o.c=3.6
o.b=B.aj
o.d=B.bZ
o.e=B.fj
n=new C.f5y(t)
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
a3=new A.b_(s.r,B.au,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.bj(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bI(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aw(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bI(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.b4(a3,o)}else{p=A.a([],x.v)
a3=new A.b_(s.r,B.au,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.bj(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bI(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aw(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bI(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.b4(a3,o)}w=4
return A.b(r.qP().B5(520,160),$async$bw5)
case 4:w=3
return A.b(b3.hv(B.fZ),$async$bw5)
case 3:b0=b3
u=b0==null?null:J.fa(B.dH.gaL(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bw5,v)},
fcv(d){return C.hEu(d)},
hEu(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fcv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.b9r()
n=d.x!=null&&d.xV(null).length===0
if(d.x!=null)t=n?D.xR:D.Ga
else t=d.gRz()?D.Ga:D.aB0
w=3
return A.b(C.bw5(d.ax),$async$fcv)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ajX(s)
r=A.a1U(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aB0}else{p.c=C.vN(q,!0)
p.b=n?D.xR:D.Ga}r.a0f(A.fx2(new C.fcx(p,d,new C.fcy(),t,n,o),null,D.bib,B.uS))
u=r.jy(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fcv,v)},
fj_(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fj_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fcv(d),$async$fj_)
case 3:t=f
s=B.a.i(d.b)
r=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.al(q,0,40)
u=A2.EW(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fj_,v)},
f5s:function f5s(){},
f5t:function f5t(){},
f5y:function f5y(d){this.a=d},
fcy:function fcy(){},
fcx:function fcx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fcw:function fcw(){},
fo_(d,e){var w=0,v=A.j(x.H)
var $async$fo_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,B.x.j(0.55),!0,null,new C.fo3(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fo_)
case 2:return A.h(null,v)}})
return A.i($async$fo_,v)},
byy(d,e,f,g){return C.hLC(d,e,f,g)},
hLC(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$byy=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aF(t)}catch(q){r=null}if(r==null||r.length===0){d.E(x.q).f.P(D.ejf)
w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.fnW(g,r,f),d,null,!0,!0,x.H),$async$byy)
case 3:case 1:return A.h(u,v)}})
return A.i($async$byy,v)},
fo4(d,e){var w=0,v=A.j(x.H)
var $async$fo4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,null,!0,null,new C.fo7(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fo4)
case 2:return A.h(null,v)}})
return A.i($async$fo4,v)},
aUz:function aUz(d,e){this.c=d
this.a=e},
bWF:function bWF(){},
b6v:function b6v(d,e){this.b=d
this.a=e},
fo3:function fo3(d,e){this.a=d
this.b=e},
fo0:function fo0(d){this.a=d},
fo1:function fo1(d,e,f){this.a=d
this.b=e
this.c=f},
fo2:function fo2(d,e){this.a=d
this.b=e},
fnW:function fnW(d,e,f){this.a=d
this.b=e
this.c=f},
fnU:function fnU(d){this.a=d},
fnV:function fnV(d,e,f){this.a=d
this.b=e
this.c=f},
fo7:function fo7(d,e){this.a=d
this.b=e},
fo5:function fo5(d){this.a=d},
fo6:function fo6(d,e,f){this.a=d
this.b=e
this.c=f},
f8b(d,e){var w=0,v=A.j(x.y),u,t
var $async$f8b=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_x(d),$async$f8b)
case 3:t=g
J.mX(t,new C.f8c(e))
u=A.aeI(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$f8b,v)},
f8c:function f8c(d){this.a=d},
alk:function alk(d,e,f){this.c=d
this.d=e
this.a=f},
azh:function azh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dx2:function dx2(d,e){this.a=d
this.b=e},
dwO:function dwO(d,e){this.a=d
this.b=e},
dwR:function dwR(d,e,f){this.a=d
this.b=e
this.c=f},
dwQ:function dwQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dwP:function dwP(d,e){this.a=d
this.b=e},
dwS:function dwS(d,e){this.a=d
this.b=e},
dwM:function dwM(){},
dwN:function dwN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dwL:function dwL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dww:function dww(d){this.a=d},
dwx:function dwx(d,e,f){this.a=d
this.b=e
this.c=f},
dwy:function dwy(d,e){this.a=d
this.b=e},
dwv:function dwv(d){this.a=d},
dwD:function dwD(d,e){this.a=d
this.b=e},
dwu:function dwu(d){this.a=d},
dwE:function dwE(d,e,f){this.a=d
this.b=e
this.c=f},
dwF:function dwF(d,e,f){this.a=d
this.b=e
this.c=f},
dwt:function dwt(d,e){this.a=d
this.b=e},
dwG:function dwG(d,e,f){this.a=d
this.b=e
this.c=f},
dws:function dws(d,e){this.a=d
this.b=e},
dwH:function dwH(d,e){this.a=d
this.b=e},
dwr:function dwr(d){this.a=d},
dwI:function dwI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dwp:function dwp(){},
dwj:function dwj(d){this.a=d},
dwk:function dwk(d){this.a=d},
dwq:function dwq(d,e){this.a=d
this.b=e},
dwJ:function dwJ(d,e){this.a=d
this.b=e},
dwo:function dwo(d){this.a=d},
dwK:function dwK(d){this.a=d},
dwn:function dwn(){},
dwz:function dwz(d,e){this.a=d
this.b=e},
dwm:function dwm(d){this.a=d},
dwA:function dwA(d,e,f){this.a=d
this.b=e
this.c=f},
dwl:function dwl(d,e){this.a=d
this.b=e},
dwi:function dwi(d,e){this.a=d
this.b=e},
dwB:function dwB(d){this.a=d},
dwC:function dwC(d,e,f){this.a=d
this.b=e
this.c=f},
dx5:function dx5(){},
dx6:function dx6(d,e){this.a=d
this.b=e},
dx3:function dx3(d){this.a=d},
dx4:function dx4(d){this.a=d},
dx_:function dx_(d,e){this.a=d
this.b=e},
dx0:function dx0(d){this.a=d},
dwT:function dwT(d,e,f){this.a=d
this.b=e
this.c=f},
dwU:function dwU(d,e,f){this.a=d
this.b=e
this.c=f},
dwV:function dwV(d,e,f){this.a=d
this.b=e
this.c=f},
dwW:function dwW(d,e,f){this.a=d
this.b=e
this.c=f},
dwX:function dwX(d,e,f){this.a=d
this.b=e
this.c=f},
dwY:function dwY(d,e,f){this.a=d
this.b=e
this.c=f},
dwZ:function dwZ(d,e,f){this.a=d
this.b=e
this.c=f},
dx7:function dx7(){},
dx8:function dx8(){},
dx9:function dx9(){},
dxa:function dxa(d){this.a=d},
dx1:function dx1(d,e){this.a=d
this.b=e},
fJJ(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bf(J.k(u==null?"":u))
return new C.mG(t,w,v,u==null?new A.N(Date.now(),0,!1):u)},
IV(d,e){return C.hDa(d,e)},
hDa(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$IV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.au(),$async$IV)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Q.aC(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d2(p,x.f)
o=A.cy(o,new C.fap(),o.$ti.k("E.E"),x.B)
n=A.a2(o).k("a3<E.E>")
o=A.z(new A.a3(o,new C.faq(),n),n.k("E.E"))
B.d.aY(o,new C.far())
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
return A.i($async$IV,v)},
zA(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zA=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.au(),$async$zA)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b3(f,new C.fmI(),x.a)
r=A.z(r,r.$ti.k("ai.E"))
w=4
return A.b(t.an("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.ak(r,null)),$async$zA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zA,v)},
aMH(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aMH=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.IV(d,e),$async$aMH)
case 2:u=h
t=J.cB(u)
s=t.be(u,new C.fui(f))
if(s===-1)t.cj(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zA(d,e,u),$async$aMH)
case 3:return A.h(null,v)}})
return A.i($async$aMH,v)},
bww(d,e,f){var w=0,v=A.j(x.H),u
var $async$bww=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.IV(d,e),$async$bww)
case 2:u=h
J.mX(u,new C.f83(f))
w=3
return A.b(C.zA(d,e,u),$async$bww)
case 3:return A.h(null,v)}})
return A.i($async$bww,v)},
bwK(d,e){return C.hD9(d,e)},
hD9(a1,a2){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$bwK=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.au(),$async$bwK)
case 7:r=a4
o=B.a.i(a1.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a2))
if(q==null||q.length===0){u=D.K2
w=1
break}p=B.Q.aC(0,q,null)
if(x.f.b(p)){o=A.Y(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aQ(o.h(0,"emblem"))
k=k==null?null:B.k.L(k)
if(k==null)k=0
if(D.AH.am(0,o.h(0,"foil")))j=A.cJ(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a_t,o.h(0,"position"))?A.cJ(o.h(0,"position")):"middle"
g=B.d.q(D.a_0,o.h(0,"frame"))?A.cJ(o.h(0,"frame")):"double"
f=B.d.q(D.ZW,o.h(0,"texture"))?A.cJ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
o=new C.FQ(n,m,l,k,j,i,h,g,f,J.k(e==null?"":e),!J.y(o.h(0,"ribbon"),!1))}else o=D.K2
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a0=s.pop()
u=D.K2
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bwK,v)},
a0d(d,e,f){return C.hL8(d,e,f)},
hL8(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a0d=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.au(),$async$a0d)
case 7:r=h
w=8
return A.b(r.an("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.ak(f.ad(),null)),$async$a0d)
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
return A.i($async$a0d,v)},
OY(d,e){return C.hDb(d,e)},
hDb(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$OY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.au(),$async$OY)
case 7:r=g
q=r.rk("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.z(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.IV(d,e),$async$OY)
case 8:if(!j.cs(g)){n=B.a.i(d.toLowerCase())
m=J.l5(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$OY)
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
return A.i($async$OY,v)},
adt(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OY(d,e),$async$adt)
case 3:s=g
r=J.a4(s)
if(r.gH(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gH(s):"main"
r.G(s,t)
w=5
return A.b(A.au(),$async$adt)
case 5:w=4
return A.b(g.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adt)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adt,v)},
a0b(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0b=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.OY(d,e),$async$a0b)
case 2:s=h
J.hB(s,f)
w=3
return A.b(A.au(),$async$a0b)
case 3:u=h
w=4
return A.b(u.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0b)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0b)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0b)
case 6:return A.h(null,v)}})
return A.i($async$a0b,v)},
mG:function mG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fap:function fap(){},
faq:function faq(){},
far:function far(){},
fmI:function fmI(){},
fui:function fui(d){this.a=d},
f83:function f83(d){this.a=d},
FQ:function FQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bI4:function bI4(d){this.a=d},
hLr(d,e,f,g,h,i,j){return A.a6(d,!1).cz(A.eN(new C.fnc(j,i,f,e,h,g),!0,null,x.H))},
OU(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$OU=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OY(h,g),$async$OU)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.E(x.q).f.P(D.aHG)
u=!1
w=1
break}w=4
return A.b(C.h18(d,f,e),$async$OU)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adt(h,g),$async$OU)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mG(""+(q+n),l,B.a.i(m.b),new A.N(Date.now(),0,!1)))}w=6
return A.b(C.zA(h,r,p),$async$OU)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.a0d(h,r,new C.FQ("leather",p,"",0,"gold",25,"middle","double","leather","",!0)),$async$OU)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
fnc:function fnc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
X0:function X0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awo:function awo(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
cZg:function cZg(d){this.a=d},
cZf:function cZf(d,e){this.a=d
this.b=e},
cZ4:function cZ4(d,e){this.a=d
this.b=e},
cZ1:function cZ1(d,e){this.a=d
this.b=e},
cYF:function cYF(d){this.a=d},
cYG:function cYG(d,e){this.a=d
this.b=e},
cZ5:function cZ5(d){this.a=d},
cYM:function cYM(d){this.a=d},
cYK:function cYK(d){this.a=d},
cYL:function cYL(d){this.a=d},
cYN:function cYN(d){this.a=d},
cZ2:function cZ2(d){this.a=d},
cZ3:function cZ3(){},
cYO:function cYO(d){this.a=d},
cYP:function cYP(d,e){this.a=d
this.b=e},
cZe:function cZe(d){this.a=d},
cZd:function cZd(d,e){this.a=d
this.b=e},
cZc:function cZc(d){this.a=d},
cYZ:function cYZ(d){this.a=d},
cYY:function cYY(d){this.a=d},
cZ_:function cZ_(d){this.a=d},
cYH:function cYH(d,e){this.a=d
this.b=e},
cZ0:function cZ0(d,e){this.a=d
this.b=e},
cYS:function cYS(d){this.a=d},
cYT:function cYT(d){this.a=d},
cYR:function cYR(){},
cYU:function cYU(d){this.a=d},
cYV:function cYV(d){this.a=d},
cYW:function cYW(d,e){this.a=d
this.b=e},
cYX:function cYX(d,e,f){this.a=d
this.b=e
this.c=f},
cYQ:function cYQ(d,e){this.a=d
this.b=e},
cZ7:function cZ7(d){this.a=d},
cZ6:function cZ6(){},
cZ8:function cZ8(d){this.a=d},
cZ9:function cZ9(d){this.a=d},
cZa:function cZa(d){this.a=d},
cZb:function cZb(d,e){this.a=d
this.b=e},
cYI:function cYI(d){this.a=d},
cYJ:function cYJ(d){this.a=d},
X4:function X4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bak:function bak(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d_H:function d_H(d){this.a=d},
d_I:function d_I(d){this.a=d},
d_G:function d_G(d){this.a=d},
d_J:function d_J(d){this.a=d},
d_F:function d_F(d){this.a=d},
d_K:function d_K(d){this.a=d},
d_E:function d_E(d){this.a=d},
d_L:function d_L(d,e){this.a=d
this.b=e},
d_D:function d_D(d,e){this.a=d
this.b=e},
d_M:function d_M(d,e){this.a=d
this.b=e},
X2:function X2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ac_:function ac_(d,e,f){this.a=d
this.b=e
this.c=f},
awp:function awp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cZv:function cZv(d,e){this.a=d
this.b=e},
cZu:function cZu(d,e){this.a=d
this.b=e},
cZz:function cZz(d){this.a=d},
cZy:function cZy(d,e){this.a=d
this.b=e},
cZw:function cZw(d){this.a=d},
cZx:function cZx(d){this.a=d},
cZA:function cZA(d){this.a=d},
cZB:function cZB(d){this.a=d},
cZt:function cZt(d,e){this.a=d
this.b=e},
cZs:function cZs(d,e){this.a=d
this.b=e},
NH:function NH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wi:function Wi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cy7:function cy7(d){this.a=d},
cy8:function cy8(){},
cy9:function cy9(d){this.a=d},
b7G:function b7G(d,e,f){this.b=d
this.c=e
this.a=f},
b7x:function b7x(d,e){this.b=d
this.a=e},
tu:function tu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WB:function WB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7E:function b7E(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cRz:function cRz(d,e,f){this.a=d
this.b=e
this.c=f},
cRy:function cRy(d,e){this.a=d
this.b=e},
cRY:function cRY(d){this.a=d},
cRL:function cRL(){},
cRZ:function cRZ(d){this.a=d},
cRK:function cRK(){},
cS_:function cS_(d,e){this.a=d
this.b=e},
cRJ:function cRJ(d,e){this.a=d
this.b=e},
cS0:function cS0(d,e){this.a=d
this.b=e},
cRI:function cRI(d,e){this.a=d
this.b=e},
cS1:function cS1(d){this.a=d},
cRH:function cRH(){},
cS2:function cS2(d,e){this.a=d
this.b=e},
cRG:function cRG(d,e){this.a=d
this.b=e},
cS3:function cS3(d){this.a=d},
cRT:function cRT(d,e){this.a=d
this.b=e},
cS4:function cS4(d){this.a=d},
cS5:function cS5(d){this.a=d},
cS7:function cS7(d){this.a=d},
cS8:function cS8(d){this.a=d},
cRS:function cRS(d,e){this.a=d
this.b=e},
cS9:function cS9(d,e){this.a=d
this.b=e},
aDc:function aDc(d){this.a=d},
bcN:function bcN(d){this.a=d},
b5U:function b5U(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
hCa(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aeT(a6),a5=a4.length
if(a5===0)return""
w=A.Q(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.by(new A.N(Date.now(),0,!1))
s=new C.f8C(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.S(a4),p=q.k("a3<1>"),q=q.k("cQ<1,n>"),o=q.k("E.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wv)m.push(l===D.Wc?"male":"female")
l=u.w
k=A.ad(a3,!0,!1,!1,!1).cw(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ad(a3,!0,!1,!1,!1).cw(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jI(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jI(h,a2,a2)-A.jI(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.z(new A.cQ(new A.a3(a4,new C.f8A(u,f),p),new C.f8B(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.al(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hCb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aeT(a0),d=e.length
if(d===0)return""
w=x.N
v=A.Q(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.f8H(v,e)
q=new C.f8F(v)
p=A.Q(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.J)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.m(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.J)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.m(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.J)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.am(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.am(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.m(0,s.a,d)}}d=p.$ti.k("be<2>")
d=A.d7(new A.be(p,d),d.k("E.E"))
n=A.z(d,A.a2(d).k("cj.E"))
B.d.fu(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.hX(l,new C.f8G(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
how(d,e,f,g){var w,v,u=C.hCc(d,e)
if(u<=0||f.length<=u)return new A.abB(!1,D.Av,f)
if(g.q(0,e.a))return new A.abB(!1,D.Av,f)
w=A.S(f).c
v=A.dg(f,0,A.dK(u,"count",x.S),w).dz(0)
return new A.abB(!0,A.dg(f,u,null,w).dz(0),v)},
hox(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aeT(d3),d2=d1.length
if(d2===0)return D.f0l
w=x.N
v=A.Q(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.ci(0,t.a,new C.cZI(t))}s=new C.cZZ(v)
d2=x.h
r=A.Q(w,d2)
q=new C.cZR(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.cZQ(r)
l=A.Q(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.ci(0,k,new C.cZJ()),o)}h=new C.cZP(s)
g=new C.cZO(l,r)
p=v.$ti.k("be<2>")
o=p.k("a3<E.E>")
f=A.z(new A.a3(new A.be(v,p),new C.cZK(h),o),o.k("E.E"))
e=f.length===0?new A.be(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.J)(f),++u){t=f[u]
a0=g.$2(t.a,A.aY(w))
if(a0>d){d=a0
e=t}}a1=A.aY(w)
p=x.S
a2=A.Q(w,p)
a3=A.Q(w,w)
a4=A.Q(w,d2)
d2=x.gR
a5=A.Q(w,d2)
a6=A.Q(w,x.d9)
a7=A.Q(w,d2)
a8=A.a([],x.s)
a9=new C.cZX(new C.cZT(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.Q(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gagV(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eM([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.G(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qz(J.dE(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.Q(w,x.cc)
b5=A.a([],x.M)
b6=A.Q(w,d2)
b7=new C.cZH(a2,new C.cZY(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.J)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("ct<1>")
d2=A.z(new A.ct(b4,d2),d2.k("E.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.E8(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ia(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("ct<1>")
d2=A.z(new A.ct(b6,d2),d2.k("E.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bD(0,new C.cZL(c6,b4))
for(d2=new A.cM(a4,a4.$ti.k("cM<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.hX(j,new C.cZM(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aY(o,new C.cZN())
c6.push(new C.aFh(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.ba4(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
fXZ(d){var w=A.ad("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cw(d)
return w==null?null:w.b[1]},
fSx(d,e,f,g,h,i,j,k,l,m,n){return new C.XE(k,f,j,e,l,n,m,d,g,h,i,null)},
ayi(d,e,f,g,h,i,j){return new C.bdJ(i,d,e,f,j,h,g,null)},
amq:function amq(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azS:function azS(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dJW:function dJW(d){this.a=d},
dJV:function dJV(d){this.a=d},
dJY:function dJY(d,e){this.a=d
this.b=e},
dJZ:function dJZ(d,e){this.a=d
this.b=e},
dK_:function dK_(d){this.a=d},
dJU:function dJU(d,e){this.a=d
this.b=e},
dJX:function dJX(d){this.a=d},
dK1:function dK1(d){this.a=d},
dK0:function dK0(d,e){this.a=d
this.b=e},
amk:function amk(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azP:function azP(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dJm:function dJm(d){this.a=d},
dJk:function dJk(d){this.a=d},
dJl:function dJl(d){this.a=d},
dJn:function dJn(d,e){this.a=d
this.b=e},
dJh:function dJh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIQ:function dIQ(d){this.a=d},
dIR:function dIR(d,e){this.a=d
this.b=e},
dJ4:function dJ4(d){this.a=d},
dJ2:function dJ2(d){this.a=d},
dJ3:function dJ3(d,e){this.a=d
this.b=e},
dJ5:function dJ5(d){this.a=d},
dJ6:function dJ6(d,e){this.a=d
this.b=e},
dJg:function dJg(d,e){this.a=d
this.b=e},
dJe:function dJe(d,e){this.a=d
this.b=e},
dJd:function dJd(d,e){this.a=d
this.b=e},
dJ9:function dJ9(d,e){this.a=d
this.b=e},
dJ8:function dJ8(d){this.a=d},
dJa:function dJa(d,e){this.a=d
this.b=e},
dJ7:function dJ7(d){this.a=d},
dJb:function dJb(d){this.a=d},
dJc:function dJc(d){this.a=d},
dJf:function dJf(d,e){this.a=d
this.b=e},
dIE:function dIE(d,e){this.a=d
this.b=e},
dIF:function dIF(d,e){this.a=d
this.b=e},
dJp:function dJp(d,e,f){this.a=d
this.b=e
this.c=f},
dJj:function dJj(d,e,f){this.a=d
this.b=e
this.c=f},
dJi:function dJi(d){this.a=d},
dIG:function dIG(d){this.a=d},
dIH:function dIH(d){this.a=d},
dII:function dII(){},
dIJ:function dIJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIN:function dIN(d,e){this.a=d
this.b=e},
dIM:function dIM(d,e){this.a=d
this.b=e},
dIL:function dIL(d){this.a=d},
dIO:function dIO(d,e){this.a=d
this.b=e},
dIK:function dIK(d){this.a=d},
dJo:function dJo(d){this.a=d},
dJ_:function dJ_(){},
dJ0:function dJ0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIZ:function dIZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIV:function dIV(d,e,f){this.a=d
this.b=e
this.c=f},
dIU:function dIU(d,e,f){this.a=d
this.b=e
this.c=f},
dIS:function dIS(d,e){this.a=d
this.b=e},
dIW:function dIW(d){this.a=d},
dIX:function dIX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dIT:function dIT(d,e){this.a=d
this.b=e},
dIY:function dIY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJ1:function dJ1(d,e){this.a=d
this.b=e},
dJw:function dJw(){},
dJx:function dJx(d,e){this.a=d
this.b=e},
dJy:function dJy(d){this.a=d},
dJz:function dJz(d,e){this.a=d
this.b=e},
dJs:function dJs(d){this.a=d},
dJq:function dJq(d,e){this.a=d
this.b=e},
dJt:function dJt(d,e){this.a=d
this.b=e},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJv:function dJv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dJA:function dJA(d){this.a=d},
dJr:function dJr(d){this.a=d},
dIP:function dIP(d){this.a=d},
ba2:function ba2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cZF:function cZF(d){this.a=d},
cZE:function cZE(d,e){this.a=d
this.b=e},
cZG:function cZG(d){this.a=d},
cZD:function cZD(d,e){this.a=d
this.b=e},
f8C:function f8C(d,e){this.a=d
this.b=e},
f8D:function f8D(d){this.a=d},
f8E:function f8E(){},
f8A:function f8A(d,e){this.a=d
this.b=e},
f8B:function f8B(){},
f8H:function f8H(d,e){this.a=d
this.b=e},
f8I:function f8I(d){this.a=d},
f8J:function f8J(){},
f8F:function f8F(d){this.a=d},
f8G:function f8G(d,e){this.a=d
this.b=e},
Ia:function Ia(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
E8:function E8(d,e){this.a=d
this.b=e},
ba4:function ba4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZI:function cZI(d){this.a=d},
cZZ:function cZZ(d){this.a=d},
cZR:function cZR(d){this.a=d},
cZS:function cZS(){},
cZQ:function cZQ(d){this.a=d},
cZJ:function cZJ(){},
cZP:function cZP(d){this.a=d},
cZO:function cZO(d,e){this.a=d
this.b=e},
cZK:function cZK(d){this.a=d},
cZT:function cZT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cZU:function cZU(d){this.a=d},
cZV:function cZV(d){this.a=d},
cZW:function cZW(){},
cZX:function cZX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cZY:function cZY(){},
cZH:function cZH(d,e,f,g,h,i,j,k,l,m){var _=this
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
cZL:function cZL(d,e){this.a=d
this.b=e},
cZM:function cZM(d){this.a=d},
cZN:function cZN(){},
aFh:function aFh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ba5:function ba5(d,e){this.b=d
this.a=e},
d__:function d__(){},
d_0:function d_0(d){this.a=d},
d_1:function d_1(d){this.a=d},
d_2:function d_2(){},
bdK:function bdK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9b:function b9b(d,e){this.b=d
this.a=e},
br5:function br5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eTE:function eTE(d){this.a=d},
bh_:function bh_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
evk:function evk(d){this.a=d},
evj:function evj(d,e){this.a=d
this.b=e},
XE:function XE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayg:function ayg(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
deb:function deb(d,e){this.a=d
this.b=e},
dea:function dea(d){this.a=d},
de8:function de8(d){this.a=d},
de9:function de9(d){this.a=d},
dek:function dek(d){this.a=d},
del:function del(d){this.a=d},
dej:function dej(d,e){this.a=d
this.b=e},
dem:function dem(){},
dep:function dep(d){this.a=d},
dei:function dei(d,e){this.a=d
this.b=e},
deo:function deo(){},
deq:function deq(d){this.a=d},
deh:function deh(d,e){this.a=d
this.b=e},
der:function der(d){this.a=d},
deg:function deg(d){this.a=d},
des:function des(d){this.a=d},
def:function def(d){this.a=d},
det:function det(d){this.a=d},
dee:function dee(d){this.a=d},
deu:function deu(d){this.a=d},
ded:function ded(d){this.a=d},
dev:function dev(d){this.a=d},
dec:function dec(d,e){this.a=d
this.b=e},
den:function den(d){this.a=d},
aas:function aas(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdJ:function bdJ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aar:function aar(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bdI:function bdI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dew:function dew(d){this.a=d},
dex:function dex(d,e){this.a=d
this.b=e},
ayh:function ayh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEk:function aEk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aat:function aat(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
deG:function deG(d){this.a=d},
I_:function I_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fNw(d){var w=d.R,v=x.N
return w.iC(w,new C.c29(),v,v)},
hgb(d){var w=d.bx
if(w>=0)return w
return 5},
fNy(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fNw(d).h(0,v)
if(w==null||w.length===0)return null
return A.bf(w)},
fNx(d,e){var w=C.fNy(d,e)
if(w!=null&&w.ca(new A.N(Date.now(),0,!1)))return!0
return!1},
hgc(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Y(C.fNw(d),w,w)
u=C.fNy(d,e)
t=u!=null&&u.ca(new A.N(Date.now(),0,!1))?u:new A.N(Date.now(),0,!1)
v.m(0,s,t.bL(A.dA(30,0,0,0,0,0).a).a4().aa())
d.R=v},
aVZ(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aVZ=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.kX(t,B.G0),$async$aVZ)
case 3:if(l){u=!0
w=1
break}u=A.kC(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.G0,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVZ,v)},
c29:function c29(){},
hg9(){var w,v=$.oV(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aE(32)]
return"FT"+B.d.fJ(u)},
GI(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$GI)
case 3:if(!e){u=A.Q(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_family_tree_backup_codes_v1",null,!1,B.bE),$async$GI)
case 8:r=e
if(r==null){u=A.Q(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.Y(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a5(m)
$.ak.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.Q(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GI,v)},
a4H(d){return C.hga(d)},
hga(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a4H=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$a4H)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_family_tree_backup_codes_v1",A.D(["codes",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$a4H)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a5(p)
$.ak.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a4H,v)},
c28(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c28=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GI(),$async$c28)
case 3:t=m.ji(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a4(q)
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
return A.i($async$c28,v)},
Lr(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Lr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c28(d),$async$Lr)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.GI(),$async$Lr)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dP(A.Y(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,t,o)
w=9
return A.b(C.a4H(s),$async$Lr)
case 9:case 8:u=t
w=1
break
case 5:n=C.hg9()
w=10
return A.b(C.GI(),$async$Lr)
case 10:s=f
J.aE(s,n,A.D(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=11
return A.b(C.a4H(s),$async$Lr)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lr,v)},
aVY(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aVY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GI(),$async$aVY)
case 3:t=f
for(s=J.dd(t),r=s.gdH(t),r=r.dz(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a4H(t),$async$aVY)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aVY,v)},
a4I(d,e,f){var w=0,v=A.j(x.H),u
var $async$a4I=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amp(d,e),$async$a4I)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Lr(d),$async$a4I)
case 7:w=4
break
case 5:w=8
return A.b(C.aVY(d),$async$a4I)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a4I,v)},
amj(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amj=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amp(f,e),$async$amj)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bW(),$async$amj)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GI(),$async$amj)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a4(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amj,v)},
aVX(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aVX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bW(),$async$aVX)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GI(),$async$aVX)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a4(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVX,v)},
hgd(){var w,v=$.oV(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aE(32)]
return"FT"+B.d.fJ(u)},
amm(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$amm)
case 3:if(!g){u=null
w=1
break}t=C.hgd()
w=4
return A.b(A.SV(),$async$amm)
case 4:s=g
r=B.dA.aF(B.Q.ak(d.eD(),null))
r=B.cM.gcs().aF(r)
q=e?999:2
J.aE(s,t,A.D(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(A.a4J(s),$async$amm)
case 5:p=e?999:2
u=new A.YN("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amm,v)},
aml(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aml=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.SV(),$async$aml)
case 3:p=a0
o=J.a4(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a4(n)
l=A.aQ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.L(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aVX(J.k(l==null?"":l),j),$async$aml)
case 4:if(!a0)$.ak.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.c_.c4(0,B.cw.aF(t))
s=C.fNz(r)}catch(f){q=A.a5(f)
$.ak.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dP(A.Y(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=5
return A.b(A.a4J(p),$async$aml)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aml,v)},
fNz(d){var w,v,u,t,s=null
try{w=B.Q.aC(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hgf(A.Y(w,x.N,x.z))
return u}catch(t){v=A.a5(t)
$.ak.$1("[family tree sync] parse: "+A.t(v))
return s}},
fy7(d){var w=0,v=A.j(x.m),u,t,s
var $async$fy7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aml(t[1])
w=1
break}u=null
w=1
break}u=C.fNz(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fy7,v)},
hgf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d2(v,x.f)
u=A.cy(u,new C.c2b(),u.$ti.k("E.E"),x.k)
t=A.a2(u).k("a3<E.E>")
s=A.z(new A.a3(u,new C.c2c(),t),t.k("E.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bf(J.k(u==null?"":u))
if(r==null)r=new A.N(Date.now(),0,!1)
q=A.Q(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ji(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d2(l,u)
n=A.cy(n,new C.c2d(),n.$ti.k("E.E"),o)
k=A.a2(n).k("a3<E.E>")
j=A.z(new A.a3(n,new C.c2e(),k),k.k("E.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amn(h,w,s,r,q)},
amp(d,e){var w=0,v=A.j(x.y),u,t
var $async$amp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Lj(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zr(d),$async$amp)
case 3:u=t.cs(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amp,v)},
c2k(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c2k=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zr(d),$async$c2k)
case 3:t=s.b3(f,new C.c2l(),x.cs)
t=A.z(t,t.$ti.k("ai.E"))
B.d.aY(t,new C.c2m())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2k,v)},
SW(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$SW=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amp(e,d),$async$SW)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Lr(e),$async$SW)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zr(e),$async$SW)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c2i(g))
r=A.z(t,t.$ti.k("E.E"))}t=J.a4(r)
if(t.gag(r)){u=null
w=1
break}t=t.di(r,new C.c2j(e),x.k)
r=A.z(t,t.$ti.k("ai.E"))
q=A.Q(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.IV(e,o),$async$SW)
case 14:n=i
if(J.cs(n))q.m(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.amn(s,B.a.i(e.toLowerCase()),r,new A.N(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SW,v)},
aW1(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aW1=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SW(d,e,f,g),$async$aW1)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.EM(A.I6(q.eD(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aW1,v)},
aW0(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aW0=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SW(d,e,f,g),$async$aW0)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amm(r,f),$async$aW0)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCl(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aW0,v)},
SX(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SX=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fy7(a0),$async$SX)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amj(g.a,d,e,f,s,r),$async$SX)
case 6:if(!a2){if(r)throw A.O(A.ba("This backup expired or the sender's tree is no longer available."))
throw A.O(A.ba("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bwn(e,j),$async$SX)
case 12:case 11:w=13
return A.b(C.aeG(e,j,s),$async$SX)
case 13:h=n.h(0,i)
w=h!=null&&J.cs(h)?14:15
break
case 14:w=16
return A.b(C.zA(e,i,h),$async$SX)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bku(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SX,v)},
amn:function amn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2g:function c2g(){},
c2h:function c2h(){},
c2f:function c2f(){},
c2b:function c2b(){},
c2c:function c2c(){},
c2d:function c2d(){},
c2e:function c2e(){},
c2l:function c2l(){},
c2m:function c2m(){},
c2i:function c2i(d){this.a=d},
c2j:function c2j(d){this.a=d},
fG4(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f1(null,x.H)
return A.hl(d,new C.amo(w,e,g,i,f,h,null),!0,null,x.H)},
cZC(d,e,f,g,h,i,j,k){return new C.ba1(i,e,k,j,g,f,h,d,null)},
amo:function amo(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azR:function azR(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dJJ:function dJJ(d){this.a=d},
dJK:function dJK(d,e,f){this.a=d
this.b=e
this.c=f},
dJO:function dJO(d,e){this.a=d
this.b=e},
dJP:function dJP(d){this.a=d},
dJG:function dJG(d){this.a=d},
dJH:function dJH(d,e){this.a=d
this.b=e},
dJI:function dJI(d,e){this.a=d
this.b=e},
dJN:function dJN(d){this.a=d},
dJM:function dJM(d,e){this.a=d
this.b=e},
dJL:function dJL(){},
dJR:function dJR(d){this.a=d},
dJS:function dJS(d,e){this.a=d
this.b=e},
dJQ:function dJQ(d,e){this.a=d
this.b=e},
d_3:function d_3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ba3:function ba3(d,e,f){this.d=d
this.e=e
this.a=f},
a9K:function a9K(d,e,f){this.c=d
this.d=e
this.a=f},
ba1:function ba1(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ba6:function ba6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
XZ:function XZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azQ:function azQ(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dJB:function dJB(d,e){this.a=d
this.b=e},
dJC:function dJC(d){this.a=d},
dJD:function dJD(d){this.a=d},
dJE:function dJE(d){this.a=d},
dJF:function dJF(d){this.a=d},
Y_:function Y_(d){this.a=d},
bf8:function bf8(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dJT:function dJT(d,e){this.a=d
this.b=e},
aUy(d,e){return new C.aUx(d,e,null)},
aUx:function aUx(d,e,f){this.c=d
this.d=e
this.a=f},
hEz(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
hLB(d){return A.c0(B.K,new C.fnF(new C.t1(A.K(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fPn(d,e){return new C.apc(e,d,null)},
aMo(d,e,f,g,h,i,j){var w=C.hEz(i)
if(w!=null)return A.bw(e,new A.a8(j,f,new C.a3M(w,!0,null),null),B.ap)
return I.aLL(e,B.bP,f,g,h,i,j)},
ld:function ld(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3M:function a3M(d,e,f){this.c=d
this.d=e
this.a=f},
beS:function beS(d,e){var _=this
_.e=_.d=$
_.cN$=d
_.aX$=e
_.c=_.a=null},
dwa:function dwa(d){this.a=d},
dwb:function dwb(){},
dwc:function dwc(d,e){this.a=d
this.b=e},
beR:function beR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fnF:function fnF(d){this.a=d},
fnE:function fnE(d,e){this.a=d
this.b=e},
fnD:function fnD(d,e){this.a=d
this.b=e},
fnC:function fnC(d,e){this.a=d
this.b=e},
apc:function apc(d,e,f){this.c=d
this.d=e
this.a=f},
c9F:function c9F(d,e){this.a=d
this.b=e},
aHB:function aHB(){},
hLm(d){var w=null
return A.cb(w,w,!0,w,new C.fn4(),d,w,!0,!0,x.e2)},
hMv(d,e,f,g,h){var w=null
return A.cb(w,w,!0,w,new C.fua(h,g,f,e),d,w,!0,!0,x.N)},
hLo(d,e){var w=null
return A.cb(w,w,!0,w,new C.fn6(e),d,w,!0,!0,x.dY)},
hLn(d){var w=null
return A.cb(w,w,!0,w,new C.fn5(),d,w,!0,!0,x.c5)},
aPe:function aPe(d,e){this.a=d
this.b=e},
aPd:function aPd(d){this.a=d},
aNj:function aNj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fn4:function fn4(){},
fua:function fua(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fn6:function fn6(d){this.a=d},
fn5:function fn5(){},
WD:function WD(d,e){this.c=d
this.a=e},
avb:function avb(){var _=this
_.d=$
_.c=_.a=_.e=null},
cSl:function cSl(d){this.a=d},
cSm:function cSm(d){this.a=d},
cSk:function cSk(d,e){this.a=d
this.b=e},
cSn:function cSn(d){this.a=d},
cSo:function cSo(d){this.a=d},
WC:function WC(d){this.a=d},
ava:function ava(){this.d=$
this.c=this.a=null},
cSh:function cSh(d){this.a=d},
cSi:function cSi(d){this.a=d},
cSj:function cSj(d){this.a=d},
W9:function W9(d){this.a=d},
atX:function atX(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cpT:function cpT(){},
cpZ:function cpZ(d){this.a=d},
cq_:function cq_(d){this.a=d},
cq0:function cq0(d){this.a=d},
cpY:function cpY(){},
cq1:function cq1(d){this.a=d},
cq2:function cq2(d){this.a=d},
cpX:function cpX(){},
cq3:function cq3(d,e){this.a=d
this.b=e},
cpW:function cpW(d,e){this.a=d
this.b=e},
cpU:function cpU(d,e){this.a=d
this.b=e},
cq4:function cq4(d){this.a=d},
cpV:function cpV(){},
cq5:function cq5(d){this.a=d},
ZF:function ZF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bqY:function bqY(){this.d=$
this.c=this.a=null},
eT6:function eT6(d,e){this.a=d
this.b=e},
eT7:function eT7(d){this.a=d},
eT8:function eT8(d,e){this.a=d
this.b=e},
a8O:function a8O(d,e){this.a=d
this.b=e},
DX:function DX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bqW:function bqW(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eT4:function eT4(d,e){this.a=d
this.b=e},
atQ:function atQ(d,e){this.c=d
this.a=e},
bqX:function bqX(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eT5:function eT5(d){this.a=d},
bqV:function bqV(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aJH:function aJH(){},
aJI:function aJI(){},
byb(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bK(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.oU(B.o.u(t),A.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fm0(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dw(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dw(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dw(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aU(B.o.u(s),2,"0")
n.push(A.dw(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Vz(A.dw(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aM1(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aM1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().l0(85,1280,B.ev),$async$aM1)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fd(),$async$aM1)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.fPm()
w=9
return A.b(C.c9E(q,r),$async$aM1)
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
o=A.a5(l)
$.ak.$1("[worksheets] pick photo failed: "+A.t(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aM1,v)},
aMm(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aMm=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.c9B(g)
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
return A.b($.a1().JU(p,!0,null,i).cI(0,B.fC),$async$aMm)
case 9:n=a1
w=10
return A.b(n.me(),$async$aMm)
case 10:m=a1
w=11
return A.b(J.aN5(m).hv(B.fZ),$async$aMm)
case 11:l=a1
J.aN5(m).p()
if(l==null){w=8
break}i=J.fa(B.dH.gaL(l))
k="data:image/png;base64,"+B.cM.gcs().aF(i)
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
j=A.a5(f)
$.ak.$1("[worksheets] thumbnail shrink failed: "+A.t(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMm,v)},
fm0:function fm0(){},
t1:function t1(d){this.a=d},
apb:function apb(d,e,f){this.c=d
this.d=e
this.a=f},
aBf:function aBf(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
esu:function esu(d,e){this.a=d
this.b=e},
esl:function esl(d){this.a=d},
esm:function esm(d){this.a=d},
ess:function ess(d,e){this.a=d
this.b=e},
esr:function esr(d,e){this.a=d
this.b=e},
eso:function eso(d,e){this.a=d
this.b=e},
esn:function esn(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esq:function esq(d,e){this.a=d
this.b=e},
est:function est(d,e){this.a=d
this.b=e},
esg:function esg(d,e){this.a=d
this.b=e},
esk:function esk(d){this.a=d},
esj:function esj(d,e){this.a=d
this.b=e},
esi:function esi(d){this.a=d},
esv:function esv(d,e){this.a=d
this.b=e},
esw:function esw(d,e){this.a=d
this.b=e},
esh:function esh(d,e){this.a=d
this.b=e},
h0F(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.D(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.N(Date.now(),0,!1).a4().aa(),"project",v],x.N,x.z)},
fm1(d,e,f){var w=0,v=A.j(x.N),u
var $async$fm1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.ak(C.h0F(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fm1,v)},
byd(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fm1(!0,d,e),$async$byd)
case 4:w=3
return A.b(r.ap9(g,d,e.a),$async$byd)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dA.aF(B.Q.ak(C.h0F(d,e,null),null))
u="NGMY_WS:"+B.jP.gcs().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byd,v)},
fTS(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fFL(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.cS(s,"NGMYWSSYNC2|"))return!0
if(J.cS(s,"NGMY_WS:"))return!0
if(J.eR(s,t))return!0
if(J.cS(s,"{"))try{w=B.Q.aC(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hJw(d){var w,v,u,t=C.fTS(d)
if(t==null)return null
if(C.fFL(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.fFL(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.fFL(v))return v}return null},
fFK(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.cS(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cS(q,"NGMY_WS:")){v=B.c_.c4(0,B.cw.aF(J.ma(q,8)))
w=t.a(B.Q.aC(0,v,r))}else w=t.a(B.Q.aC(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fAA(A.Y(u,x.N,x.z))
return t}catch(s){return r}},
byc(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$byc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.ap8(t[1]),$async$byc)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fFK(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fFK(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byc,v)},
fFJ(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l_(w,v,d.c,d.d,new A.N(Date.now(),0,!1))},
bxL(){var w=0,v=A.j(x.o),u,t
var $async$bxL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.EX(),$async$bxL)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fFK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxL,v)},
h1v(d,e,f,g){return A.c0(B.K,new C.fu2(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fu2:function fu2(d,e,f){this.a=d
this.b=e
this.c=f},
aaO:function aaO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
esy:function esy(d,e){this.a=d
this.b=e},
esz:function esz(d,e){this.a=d
this.b=e},
esA:function esA(d,e){this.a=d
this.b=e},
esB:function esB(d,e){this.a=d
this.b=e},
esx:function esx(d){this.a=d},
ap5:function ap5(d,e,f){this.c=d
this.d=e
this.a=f},
bgt:function bgt(){var _=this
_.c=_.a=_.e=_.d=null},
esb:function esb(d,e){this.a=d
this.b=e},
esc:function esc(d){this.a=d},
esd:function esd(d){this.a=d},
apa:function apa(d){this.a=d},
aBe:function aBe(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
esf:function esf(d){this.a=d},
ese:function ese(d){this.a=d},
hjm(d,e,f,g,h){return new C.M3(h,g,d,e,f,null)},
aFZ:function aFZ(d,e){this.a=d
this.b=e},
M3:function M3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBg:function aBg(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
esY:function esY(){},
esU:function esU(d,e){this.a=d
this.b=e},
esV:function esV(d){this.a=d},
esF:function esF(d){this.a=d},
esD:function esD(d){this.a=d},
esE:function esE(d){this.a=d},
esO:function esO(d,e){this.a=d
this.b=e},
esL:function esL(d,e){this.a=d
this.b=e},
esM:function esM(d,e){this.a=d
this.b=e},
esN:function esN(d,e,f){this.a=d
this.b=e
this.c=f},
esJ:function esJ(d,e,f){this.a=d
this.b=e
this.c=f},
esH:function esH(d){this.a=d},
esI:function esI(d){this.a=d},
esK:function esK(d){this.a=d},
et0:function et0(d){this.a=d},
et_:function et_(d){this.a=d},
et1:function et1(d){this.a=d},
esZ:function esZ(d){this.a=d},
esC:function esC(d){this.a=d},
esG:function esG(d,e){this.a=d
this.b=e},
esX:function esX(d,e){this.a=d
this.b=e},
esW:function esW(d,e){this.a=d
this.b=e},
esR:function esR(d){this.a=d},
esS:function esS(d){this.a=d},
esT:function esT(d,e){this.a=d
this.b=e},
esQ:function esQ(d,e){this.a=d
this.b=e},
esP:function esP(d,e,f){this.a=d
this.b=e
this.c=f},
bsG:function bsG(){},
zj(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ad("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
adc(d,e,f){return C.hyr(d,e,f)},
hyr(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adc=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.an("String",e,f),$async$adc)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a5(o)
$.ak.$1("[worksheets] setString failed for "+e+": "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adc,v)},
adb(d,e){return C.hyq(d,e)},
hyq(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adb=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adb)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a5(q)
$.ak.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$adb,v)},
hxg(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QB(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bvo(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bvo=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZd(q),$async$bvo)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aMm(q,!1),$async$bvo)
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
return A.i($async$bvo,v)},
h7i(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qk(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qk(p,J.k(u==null?"":u),1,o,q)},
fAA(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d2(s,x.f)
w=A.cy(w,new C.cph(),w.$ti.k("E.E"),x.Q)
v=A.a2(w).k("a3<E.E>")
r=A.z(new A.a3(w,new C.cpi(),v),v.k("E.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bf(J.k(t==null?"":t))
return new C.l_(w,v,u,r,t==null?new A.N(Date.now(),0,!1):t)},
hC6(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wc
case"female":case"f":return D.aeh
default:return D.wv}},
fYo(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fJK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hC6(v==null?j:J.k(v))
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
hC8(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.K3
case"viewer":return D.jX
default:return D.rD}},
hC9(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
EN(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bwD(d,e){return B.a.i(e.toLowerCase())===C.EN(d,e)&&d.y!==D.jX},
te(d,e){var w,v=d.y
if(v===D.jX)return!1
w=B.a.i(e.toLowerCase())
if(w===C.EN(d,e))return!0
if(v===D.K3)return!0
v=d.e
return new A.I(v,A.fFP(),A.S(v).k("I<1,n>")).q(0,w)},
hBz(d){return J.dE(d,new C.f7W()).gH(0)},
fup(d){var w=0,v=A.j(x.y),u,t
var $async$fup=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zr(d),$async$fup)
case 3:u=t.ri(f,new C.fuq(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fup,v)},
bwn(d,e){var w=0,v=A.j(x.H),u,t
var $async$bwn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zr(d),$async$bwn)
case 3:t=g
if(J.ri(t,new C.f77(e))){w=1
break}if(C.hBz(t)>=2)throw A.O(A.ba("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bwn,v)},
ahH(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d2(n,x.f)
w=A.cy(w,new C.bI5(),w.$ti.k("E.E"),x.P)
v=A.a2(w).k("a3<E.E>")
m=A.z(new A.a3(w,new C.bI6(),v),v.k("E.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b3(u,new C.bI7(),x.N)
t=A.z(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bf(J.k(r==null?"":r))
if(r==null)r=new A.N(Date.now(),0,!1)
q=A.aQ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.L(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kh(l,w,v,!s,t,m,r,q,p,C.hC8(o==null?null:J.k(o)))},
fYx(d){var w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.al(v,0,8)},
Br(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Br=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ps(d),$async$Br)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.au(),$async$Br)
case 4:t=f
w=5
return A.b(t.a3a(0),$async$Br)
case 5:w=6
return A.b(C.f_k(t,l),$async$Br)
case 6:s=f
if(J.cs(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aR(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fUq(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.o9(l,n),$async$Br)
case 11:u=n
w=1
break
case 10:case 8:m=A.aR(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fUq(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.o9(l,n),$async$Br)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Br,v)},
f_k(d,e){return C.huQ(d,e)},
huQ(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f_k=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aR(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zj(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Q.aC(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.aa(n)===0){w=7
break}m=A.aR(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zj(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aC(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fAA(A.Y(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aR(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zj(a9)+"_"+n))
i=C.hxg(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZd(h),$async$f_k)
case 17:g=b1
if(g!=null){i=i.QB(g)
p=!0}case 16:J.ci(q,i)
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
case 8:J.PB(q,new C.f_l())
if(p&&J.aa(q)!==0)C.o9(a9,q)
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
return A.i($async$f_k,v)},
bwN(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bwN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ps(d),$async$bwN)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Br(r),$async$bwN)
case 4:t=p.aW(g)
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
return A.i($async$bwN,v)},
fUq(d){var w,v,u,t
try{w=B.Q.aC(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d2(w,x.f)
v=A.cy(v,new C.eWk(),v.$ti.k("E.E"),x.i)
u=A.a2(v).k("a3<E.E>")
v=A.z(new A.a3(v,new C.eWl(),u),u.k("E.E"))
B.d.aY(v,new C.eWm())
return v}catch(t){v=A.a([],x.D)
return v}},
o9(d,e){return C.hLc(d,e)},
hLc(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$o9=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Ps(b2),$async$o9)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.au(),$async$o9)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zj(a8)
p=A.aR(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b3(x.j.a(B.Q.aC(0,p,null)),new C.fmX(),a2).fD(0)
a2=J.b3(b3,new C.fmY(),a2).bZ(0,new C.fmZ())
n=A.d7(a2,a2.$ti.k("E.E"))
a2=o,a2=A.ee(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eR(n,m)?17:18
break
case 17:a5=C.zj(a8)
l=A.aR(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a5X(l),$async$o9)
case 19:t=21
a5=C.zj(a8)
k=A.aR(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aC(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a5X(a5==null?null:J.k(a5)),$async$o9)
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
return A.b(C.adb(r,"ngmy_worksheet_item_v3_"+C.zj(a8)+"_"+m),$async$o9)
case 29:w=30
return A.b(C.adb(r,"ngmy_worksheet_thumb_v3_"+C.zj(a8)+"_"+m),$async$o9)
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
case 14:case 10:a2=J.cB(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bvo(h),$async$o9)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adc(r,"ngmy_worksheet_thumb_v3_"+C.zj(a8)+"_"+a4,f),$async$o9)
case 40:g=i.QB(f)
w=38
break
case 39:$.ak.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adb(r,"ngmy_worksheet_thumb_v3_"+C.zj(a8)+"_"+a4),$async$o9)
case 41:g=i.QB(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adb(r,"ngmy_worksheet_thumb_v3_"+C.zj(a8)+"_"+a4),$async$o9)
case 42:case 34:a4=i.a
w=43
return A.b(C.adc(r,"ngmy_worksheet_item_v3_"+C.zj(a8)+"_"+a4,B.Q.ak(g.ad(),null)),$async$o9)
case 43:e=b5
if(!e){$.ak.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adc(r,"ngmy_worksheets_index_v3_"+C.zj(a8),B.Q.ak(q,null)),$async$o9)
case 44:d=b5
if(!d){$.ak.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eB(b3,new C.fn_(q))
a4=a3.$ti.k("cQ<1,a0<n,@>>")
a7=A.z(new A.cQ(a3,new C.fn0(),a4),a4.k("E.E"))
a0=a7
w=45
return A.b(C.adc(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.ak(a0,null)),$async$o9)
case 45:w=46
return A.b(J.h6o(r),$async$o9)
case 46:if(a2.gcg(b3)&&J.aa(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a5(b1)
$.ak.$1("[worksheets] saveWorksheetProjects error: "+A.t(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$o9,v)},
Jl(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Jl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Br(d),$async$Jl)
case 3:t=g
s=J.cB(t)
r=s.be(t,new C.fuo(e))
if(r===-1)s.cj(t,0,e)
else s.m(t,r,e)
u=C.o9(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Jl,v)},
bwA(d,e){var w=0,v=A.j(x.H),u
var $async$bwA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Br(d),$async$bwA)
case 2:u=g
J.mX(u,new C.f8n(e))
w=3
return A.b(C.o9(d,u),$async$bwA)
case 3:return A.h(null,v)}})
return A.i($async$bwA,v)},
EP(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$EP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.au(),$async$EP)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aR(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aC(0,i,null)
if(x.j.b(t)){j=J.d2(t,x.f)
j=A.cy(j,new C.fav(),j.$ti.k("E.E"),x.k)
s=A.a2(j).k("a3<E.E>")
r=A.z(new A.a3(j,new C.faw(),s),s.k("E.E"))
B.d.aY(r,new C.fax())
k=r}}catch(h){}w=4
return A.b(C.eX2(d),$async$EP)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hvc(k,p,d)
j=A.S(o)
s=j.k("I<1,a0<n,@>>")
s=A.z(new A.I(o,new C.fay(),s),s.k("ai.E"))
n=B.Q.ak(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OC(d,o),$async$EP)
case 7:case 6:j=j.k("a3<1>")
m=A.z(new A.a3(o,new C.faz(d),j),j.k("E.E"))
if(m.length!==0)C.aKV(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$EP,v)},
fmJ(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fmJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OC(d,e),$async$fmJ)
case 3:t=J.dE(e,new C.fmK(d))
s=A.z(t,t.$ti.k("E.E"))
if(s.length===0){u=!0
w=1
break}u=C.aKV(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fmJ,v)},
a0i(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.au(),$async$a0i)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aR(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aC(0,l,null)
if(x.j.b(u)){m=J.d2(u,x.f)
m=A.cy(m,new C.fuj(),m.$ti.k("E.E"),x.k)
t=A.a2(m).k("a3<E.E>")
s=A.z(new A.a3(m,new C.fuk(),t),t.k("E.E"))
o=s}}catch(k){}q=J.pH(o,new C.ful(e))
if(B.a.i(e.x).length===0&&C.te(e,d)){m=B.a.i(d.toLowerCase())
p=e.az6(e.y===D.jX?D.jX:D.rD,m)}else p=e
if(q===-1)J.oY(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OC(d,o),$async$a0i)
case 3:w=C.te(p,d)?4:5
break
case 4:w=6
return A.b(C.aKU(C.EN(p,d),p),$async$a0i)
case 6:if(!g)$.ak.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0i,v)},
aL3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aL3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.EP(d),$async$aL3)
case 2:u=g
t=J.cB(u)
s=A.qz(t.eB(u,new C.f84(e)))
t.bk(u,new C.f85(e))
w=3
return A.b(C.OC(d,u),$async$aL3)
case 3:w=s!=null&&C.bwD(s,d)?4:5
break
case 4:w=6
return A.b(C.eWo(e),$async$aL3)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aL3,v)},
aeT(d){var w=d.f,v=A.S(w).k("a3<1>")
w=A.z(new A.a3(w,new C.fuu(),v),v.k("E.E"))
return w},
fDA(d,e){var w,v=d.f,u=A.qz(new A.a3(v,new C.f7G(e),A.S(v).k("a3<1>")))
v=C.aeT(d)
w=A.S(v).k("a3<1>")
v=A.z(new A.a3(v,new C.f7H(e,u),w),w.k("E.E"))
B.d.aY(v,new C.f7I())
return v},
hCc(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h1x(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.be(C.fDA(d,u),new C.fub(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hDH(d,e){var w
if(e==null||e.length===0)return 1
w=C.fDA(d,e)
if(w.length===0)return 1
return new A.I(w,new C.fbf(),A.S(w).k("I<1,G>")).fq(0,B.yF)+1},
hL5(d){var w,v=C.aeT(d)
if(v.length===0)return null
w=new A.a3(v,new C.fmG(),A.S(v).k("a3<1>"))
if(!w.gag(0))return w.gI(0)
return B.d.gI(v)},
hC7(d){return A.D(["id",d.a,"name",d.b,"gender",C.fYo(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hDC(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.Q(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
a1.m(0,t.a,t)}s=A.a([],x.u)
r=A.aY(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.J)(a0),++u){q=a0[u]
p=q.a
r.G(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.wv?n:q.c
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
d=q.az1(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cy4(a1,w,a3.d,a2.y,s,a0,v)},
zr(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.au(),$async$zr)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aR(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aC(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d2(t,x.f)
p=A.cy(p,new C.fas(),p.$ti.k("E.E"),x.k)
s=A.a2(p).k("a3<E.E>")
p=A.z(new A.a3(p,new C.fat(),s),s.k("E.E"))
B.d.aY(p,new C.fau())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zr,v)},
aeG(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aeG=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rD:D.jX
a7=C.EN(b2,b3)
w=2
return A.b(C.zr(b1),$async$aeG)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.be(a8,new C.fmE(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bwn(b1,b2),$async$aeG)
case 5:case 4:if(b0===-1){u=b2.az6(a6,a7)
a9.cj(a8,0,u)}else{t=a9.h(a8,b0)
s=A.Q(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p){o=r[p]
s.m(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.m(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.wv?i:l.c
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
s.m(0,m,l.az1(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("be<2>")
s=A.z(new A.be(s,k),k.k("E.E"))
k=a5?D.rD:D.jX
u=t.xx(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OC(b1,a8),$async$aeG)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aKU(B.a.i(b3.toLowerCase()),u),$async$aeG)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aeG,v)},
fUM(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.N(Date.now(),0,!1).a4().aa(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.S(m).k("I<1,a0<n,@>>"),k=A.z(new A.I(m,C.h0N(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.D(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.D(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().aa(),"updatedAt",o],r,x.K),"createdAt",s.a4().aa(),"updatedAt",o],r,x.z)},
fUN(d,e){var w=new A.N(Date.now(),0,!1).a4().aa(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.S(u).k("I<1,a0<n,@>>")
u=A.z(new A.I(u,C.h0N(),t),t.k("ai.E"))
return A.D(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().aa(),"updatedAt",w],x.N,x.z)},
hsY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ahH(A.Y(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.I(j,A.fFP(),A.S(j).k("I<1,n>")).bZ(0,new C.eWQ())
t=A.z(j,j.$ti.k("E.E"))
if(u===v)s=D.rD
else s=B.d.q(t,u)?D.K3:D.jX
return w.az6(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ahH(A.Y(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d2(q,h)
h=A.cy(h,new C.eWR(),h.$ti.k("E.E"),x.P)
p=A.a2(h).k("a3<E.E>")
o=A.z(new A.a3(h,new C.eWS(),p),p.k("E.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b3(n,new C.eWT(),x.N).bZ(0,new C.eWU())
t=A.z(h,h.$ti.k("E.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rD
else s=B.d.q(t,u)?D.K3:D.jX
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bf(J.k(l==null?"":l))
if(l==null)l=new A.N(Date.now(),0,!1)
j=A.aQ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.L(j)
if(j==null)j=0
return new C.kh(h,r,p,!m,t,o,l,j,v,s)},
eX2(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eX2=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.eX6()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.lO("family_trees","*",null,A.D(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bE),r.$2(A.lO("family_trees","*",A.D(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bE),"collaborator"),r.$2(A.lO("family_trees","*",null,A.D(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bE),"public")],x.cl),x.U),$async$eX2)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.Q(h,g)
h=A.z(p,g)
l=h
J.fR(l,o)
J.fR(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.aa(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("be<2>")
h=A.cy(new A.be(l,h),new C.eX3(a0),h.k("E.E"),x.k)
l=A.a2(h).k("a3<E.E>")
l=A.z(new A.a3(h,new C.eX4(),l),l.k("E.E"))
B.d.aY(l,new C.eX5())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a5(a1)
d=J.k(i)
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
h=$.ak
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
return A.i($async$eX2,v)},
hvc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gag(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f0_(),v).bZ(0,new C.f00())
t=A.d7(u,u.$ti.k("E.E"))
s=A.Q(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.EN(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.jX){m=q.e
m=!new A.I(m,A.fFP(),A.S(m).k("I<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.m(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hDC(l,v)
o=C.EN(k,w)
p=v.d
s.m(0,u,o===w?k.b5g(p,D.rD):k.b5g(p,v.y))}j=s.$ti.k("be<2>")
j=A.z(new A.be(s,j),j.k("E.E"))
B.d.aY(j,new C.f01())
return j},
OC(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.au(),$async$OC)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b3(e,new C.f20(),x.a)
s=A.z(s,s.$ti.k("ai.E"))
w=3
return A.b(u.an("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.ak(s,null)),$async$OC)
case 3:return A.h(null,v)}})
return A.i($async$OC,v)},
aKU(d,e){return C.hA_(d,e)},
hA_(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aKU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lt("family_trees",A.a([C.fUM(e,d)],p),null,B.cy),$async$aKU)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lt("family_trees",A.a([C.fUN(e,d)],p),null,B.cy),$async$aKU)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a5(n)
$.ak.$1("[family_trees] upsert error: "+A.t(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aKU,v)},
aKV(d,e){return C.hA0(d,e)},
hA0(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aKV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.S(e).k("I<1,a0<n,@>>")
m=n.k("ai.E")
l=A.z(new A.I(e,new C.f6u(d),n),m)
r=l
w=7
return A.b(A.lt("family_trees",r,null,B.cy),$async$aKV)
case 7:q=g
if(q){u=!0
w=1
break}k=A.z(new A.I(e,new C.f6v(d),n),m)
p=k
w=8
return A.b(A.lt("family_trees",p,null,B.cy),$async$aKV)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a5(i)
$.ak.$1("[family_trees] bulk upsert error: "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aKV,v)},
eWo(d){return C.hsm(d)},
hsm(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eWo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.P1("family_trees",A.D(["id",d],x.N,x.z),null,B.cy),$async$eWo)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a5(p)
$.ak.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$eWo,v)},
qk:function qk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l_:function l_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpk:function cpk(){},
cpj:function cpj(){},
cph:function cph(){},
cpi:function cpi(){},
FR:function FR(d,e){this.a=d
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
ahG:function ahG(d,e){this.a=d
this.b=e},
f7W:function f7W(){},
fuq:function fuq(d){this.a=d},
f77:function f77(d){this.a=d},
kh:function kh(d,e,f,g,h,i,j,k,l,m){var _=this
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
bI9:function bI9(){},
bI8:function bI8(){},
bI5:function bI5(){},
bI6:function bI6(){},
bI7:function bI7(){},
f_l:function f_l(){},
eWk:function eWk(){},
eWl:function eWl(){},
eWm:function eWm(){},
fmX:function fmX(){},
fmY:function fmY(){},
fmZ:function fmZ(){},
fn_:function fn_(d){this.a=d},
fn0:function fn0(){},
fuo:function fuo(d){this.a=d},
f8n:function f8n(d){this.a=d},
fav:function fav(){},
faw:function faw(){},
fax:function fax(){},
fay:function fay(){},
faz:function faz(d){this.a=d},
fmK:function fmK(d){this.a=d},
fuj:function fuj(){},
fuk:function fuk(){},
ful:function ful(d){this.a=d},
f84:function f84(d){this.a=d},
f85:function f85(d){this.a=d},
fuu:function fuu(){},
f7G:function f7G(d){this.a=d},
f7H:function f7H(d,e){this.a=d
this.b=e},
f7I:function f7I(){},
fub:function fub(d){this.a=d},
fbf:function fbf(){},
fmG:function fmG(){},
fas:function fas(){},
fat:function fat(){},
fau:function fau(){},
fmE:function fmE(d){this.a=d},
eWQ:function eWQ(){},
eWR:function eWR(){},
eWS:function eWS(){},
eWT:function eWT(){},
eWU:function eWU(){},
eX6:function eX6(){},
eX7:function eX7(d){this.a=d},
eX3:function eX3(d){this.a=d},
eX4:function eX4(){},
eX5:function eX5(){},
f0_:function f0_(){},
f00:function f00(){},
f01:function f01(){},
f20:function f20(){},
f6u:function f6u(d){this.a=d},
f6v:function f6v(d){this.a=d},
cpl:function cpl(d,e){this.a=d
this.b=e},
cpm:function cpm(d,e){this.a=d
this.b=e},
aDh:function aDh(d,e,f){this.a=d
this.b=e
this.c=f},
b4p:function b4p(){this.b=this.a=0},
b4o:function b4o(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bqZ:function bqZ(){},
vN(d,e){var w,v
if(d==null)return""
w=d.bP()
v=""+w.gcb()+"/"+w.gcp()+"/"+w.gcc()
if(!e)return v
return v+" "+B.a.aU(B.o.u(w.gmD()),2,"0")+":"+B.a.aU(B.o.u(w.gEL()),2,"0")},
hjj(){var w,v=$.oV(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aE(32)]
return"WS"+B.d.fJ(u)},
ap6(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$ap6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$ap6)
case 3:if(!e){u=A.Q(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bE),$async$ap6)
case 8:r=e
if(r==null){u=A.Q(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.Y(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a5(m)
$.ak.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.Q(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ap6,v)},
ap7(d){return C.hjk(d)},
hjk(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ap7=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$ap7)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_worksheet_project_qr_stashes_v1",A.D(["stashes",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$ap7)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a5(p)
$.ak.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ap7,v)},
ap9(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ap9=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bW(),$async$ap9)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hjj()
w=4
return A.b(C.ap6(),$async$ap9)
case 4:r=h
q=B.a.i(e)
p=B.dA.aF(t)
J.aE(r,s,A.D(["ownerEmail",q,"projectId",f,"payload",B.cM.gcs().aF(p),"usesRemaining",25,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(C.ap7(r),$async$ap9)
case 5:u=new A.YN("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap9,v)},
ap8(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ap8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bW(),$async$ap8)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.ap6(),$async$ap8)
case 4:q=f
p=J.a4(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a4(o)
m=A.aQ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.L(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=B.c_.c4(0,B.cw.aF(t))}catch(h){r=A.a5(h)
$.ak.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dP(A.Y(o,n,m),n,m)
m.m(0,"usesRemaining",j)
m.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
p.m(q,i,m)}w=5
return A.b(C.ap7(q),$async$ap8)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap8,v)},
fPm(){var w=new A.N(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cz.aE(999999)},
hjl(d){var w,v,u,t,s,r,q
try{w=A.adA(d)
if(w==null)return d
v=w
if(J.Jr(v)>960||J.Jq(v)>960){s=v
r=J.Jr(v)>=J.Jq(v)?960:null
v=A.adz(s,J.Jq(v)>J.Jr(v)?960:null,B.Lm,r)}s=v
u=A.aj5(82).QW(s,B.xe)
if(J.aa(u)===0)return d
s=new Uint8Array(A.ck(u))
return s}catch(q){t=A.a5(q)
$.ak.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
c9E(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$c9E=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hjl(e)
$.c9A.m(0,s,t)
u=C.byf(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9E,v)},
aZd(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZd=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cS(l,"data:image")){u=null
w=1
break}t=4
r=J.eR(l,",")?B.d.gai(J.lz(l,",")):l
q=B.cw.aF(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.fPm()
w=7
return A.b(C.c9E(p,q),$async$aZd)
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
n=A.a5(k)
$.ak.$1("[worksheet-thumb] persistDataUrl failed: "+A.t(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aZd,v)},
c9B(d){var w=0,v=A.j(x.T),u,t,s
var $async$c9B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.c9D(s),$async$c9B)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gcs().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9B,v)},
a5X(d){var w=0,v=A.j(x.H),u,t
var $async$a5X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h0G(d)
if(t==null){w=1
break}$.c9A.W(0,t)
w=3
return A.b(C.bye(t),$async$a5X)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a5X,v)},
byf(d,e){return C.hJz(d,e)},
hJz(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$byf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aJU
w=7
return A.b(n==null?$.aJU=I.fCF():n,$async$byf)
case 7:r=g
q=new Uint8Array(A.ck(e))
p=J.mb(r,"thumbs","readwrite")
B.ih.lJ(J.m9(p,"thumbs"),q,l)
w=8
return A.b(J.oX(p),$async$byf)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a5(k)
$.ak.$1("[worksheet-thumb idb put] "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byf,v)},
bye(d){return C.hJx(d)},
hJx(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bye=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aJU
w=7
return A.b(o==null?$.aJU=I.fCF():o,$async$bye)
case 7:r=f
q=J.mb(r,"thumbs","readwrite")
B.ih.Ei(J.m9(q,"thumbs"),m)
w=8
return A.b(J.oX(q),$async$bye)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a5(l)
$.ak.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bye,v)}},D,Ae,Af,O,Ag,Ah,I,P,W,Ai
J=c[1]
A=c[0]
B=c[2]
X=c[189]
G=c[168]
F=c[29]
E=c[178]
Y=c[109]
Z=c[108]
A_=c[157]
A0=c[121]
A1=c[188]
A2=c[35]
M=c[187]
A3=c[78]
H=c[84]
Q=c[128]
R=c[131]
S=c[200]
T=c[158]
A4=c[149]
A5=c[161]
U=c[156]
A6=c[62]
A7=c[68]
V=c[172]
A8=c[28]
A9=c[140]
Aa=c[205]
K=c[151]
Ab=c[162]
Ac=c[203]
Ad=c[196]
L=c[99]
N=c[66]
C=a.updateHolder(c[6],C)
D=c[199]
Ae=c[67]
Af=c[166]
O=c[202]
Ag=c[201]
Ah=c[54]
I=c[52]
P=c[204]
W=c[119]
Ai=c[94]
C.ald.prototype={}
C.aUz.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.b9r(),f=h.x!=null&&h.xV(i).length===0
if(h.x!=null)w=f?B.aW:B.bR
else w=h.gRz()?B.bR:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b4q,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.e9k,B.i,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.fW,i,i,i),B.U,D.eB4,B.aw,A.d(C.vN(new A.N(Date.now(),0,!1),!0),i,i,i,i,i,i,D.exk,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.i,i,i,D.aRm,i,i,i,i,B.Vb,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fEq(h.d)
o=A.p(B.C,C.aUy(A.fdk(h.e,n),30),B.i,i,i,new A.o(B.lM,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.esV,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.bw,D.eBl,B.ac,A.p(i,A.u(A.a([D.ePv,B.bw,A.d(A.zt(h.c),i,i,i,i,i,i,D.eo9,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.i,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eU,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.i,i,i,new A.o(B.aN,i,p,q,i,i,B.n),i,i,i,i,K.acs,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aLk("Original due",C.vN(h.r,!1))
n=j.aLk("Current due",C.vN(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.U,A.p(i,A.u(A.a([l,B.P,n,B.U,A.p(i,A.d(h.gaFD(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.i,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zn,i,i,1/0),B.U,j.c53(),B.P,j.bUQ(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.i,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.U,A.p(i,A.u(A.a([D.eCh,B.aw,A.d(q,i,i,i,i,i,i,D.esh,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.i,i,i,new A.o(B.aN,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaAG()){q=A.m(14)
o=A.H(B.ct,B.r,1.6)
B.d.v(p,A.a([B.U,A.p(i,A.u(A.a([D.eQG,B.P,A.bw(A.m(12),A.eb(new A.a8(1/0,88,A.b1(i,i,i,new A.TK(h.ax,B.M,D.ecE,!0,3.5,i),B.at),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.i,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Dm,i,i,i)],s))}p.push(B.aC)
p.push(D.eJw)
return A.p(i,A.u(A.a([r,new A.B(B.acv,A.u(p,B.al,i,B.e,B.j,0,B.p),i)],s),B.al,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aLk(d,e){var w=null
return A.A(A.a([A.C(A.d(d,w,w,w,w,w,w,D.a48,w,w,w),1),A.d(e,w,w,w,w,w,w,D.ep7,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c53(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6h(B.e1,u,"Not paid yet")
w=t.xV(null).length
v=w===0?B.aW:B.bR
return this.a6h(v,u,C.vN(t.x,!0))},
bUQ(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6h(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6h(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a48,u,u,u)
v=A.S(d).k("I<1,ha>")
v=A.z(new A.I(d,new C.bWF(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.cf(B.bI,v,B.by,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6h(d,e,f){var w=null
return A.A(A.a([A.C(A.d(e,w,w,w,w,w,w,D.a48,w,w,w),1),new A.dp(1,B.cj,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b6v.prototype={
a6(d,e){new A.TK(this.b,B.M,e,!0,3.5,null).a6(d,e)},
ao(d){return d.b!==this.b}}
C.alk.prototype={
S(){return new C.azh(A.a([],x.bp))},
gdQ(){return this.c}}
C.azh.prototype={
Z(){this.a0()
this.H8()},
H8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$H8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_x(t.a.c),$async$H8)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dx2(t,s))
case 1:return A.h(u,v)}})
return A.i($async$H8,v)},
aN9(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aN,s=A.l(v,v,u?B.bk:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bk:B.bu).j(0.22)
w=A.m(10)
return A.bn(v,new A.b0(4,r,new A.ay(u,1,B.r,-1)),v,B.bj,v,v,v,v,!0,new A.b0(4,w,new A.ay((this.a.d.a?B.bk:B.bu).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b0(4,A.m(10),D.aP1),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aN8(d){return this.aN9(d,null)},
Nq(d){return this.c8B(d)},
c8B(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Nq=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EC:B.ev
w=7
return A.b(new A.hT().AS(72,900,900,n),$async$Nq)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fd(),$async$Nq)
case 8:p=f
n=B.cM.gcs().aF(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a5(l)
n=r.c
if(n!=null)n.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Nq,v)},
aV_(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aN,o=A.m(10),n=A.H((q?B.bk:B.bu).j(0.18),B.r,1)
if(d)q=B.cU
else q=s.a.d.a?B.bk:B.bu
q=A.U(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aN:B.aG,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cU
else u=s.a.d.a?B.bk:B.bu
t=x.p
u=A.C(A.u(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a_,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fn(r,r,r,r,r,r,r,r,r,r,r,B.cU,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c6)
q=A.a([q,B.ab,u,A.bF(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.U(B.cu,s.a.d.a?B.bk:B.bu,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c6))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.i,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.lj,D.bdX,r,r,r)},
BO(d){return this.bs4(d)},
bs3(){return this.BO(null)},
bs4(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BO=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.as()
r=new A.ao(new A.b9(a4,B.aY,B.aL),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.lM(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.L(p)):B.k.ab(p,2)}o=new A.ao(new A.b9(a4,B.aY,B.aL),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ao(new A.b9(a4,B.aY,B.aL),s)
if(a3){a4=new A.N(Date.now(),0,!1).bL(6048e8)
m=A.bY(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)}else{a4=a5.f
m=A.bY(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bi(a4,!0,x.cT)
i=a3?null:A.fEq(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.uN?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hM(B.x.j(0.55),!0,"Dismiss",a4,new C.dwM(),new C.dwN(a2,t,a5,r,new C.dwO(a2,t),o,n,j),B.eC,!0,x.y),$async$BO)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d_(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.E(x.q).f.P(D.eiX)
w=1
break}a0=a2.d
if(a0==null){t.c.E(x.q).f.P(D.ehC)
w=1
break}a1=A.fdk(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.uN?"male":"female"
w=7
return A.b(A.aeS(a3,A.fMe(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BO)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.uN?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bY(a3.gcc(),a3.gcb(),a3.gcp(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bY(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)))a5.cAa(a2.a)
w=8
return A.b(A.aeS(t.a.c,a5),$async$BO)
case 8:case 5:w=9
return A.b(t.H8(),$async$BO)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BO,v)},
aNJ(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cU.j(0.14)
else w=this.a.d.a?B.M:B.aN
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cU
else s=(this.a.d.a?B.bk:B.bu).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aUy(d,18)
if(g)q=B.cU
else q=this.a.d.a?B.aN:B.aG
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b5,B.j,0,p,p),B.i,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.i,w,0,p,p,p,p,p,B.aa)},
PY(d){return this.cpk(d)},
cpk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$PY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hM(B.x.j(0.55),!0,"Dismiss",s,new C.dx5(),new C.dx6(t,d),B.hE,!0,x.y),$async$PY)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.N(s,0,!1)
case 4:w=7
return A.b(A.aeS(t.a.c,d),$async$PY)
case 7:w=8
return A.b(t.H8(),$async$PY)
case 8:case 1:return A.h(u,v)}})
return A.i($async$PY,v)},
M7(d,e){return this.bCu(0,e)},
bCu(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$M7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kM(s,"Cancel","Delete",e.b+" \xb7 "+A.zt(e.c)+" will be removed from this device.","Delete this debt?"),$async$M7)
case 3:if(!g){w=1
break}w=4
return A.b(C.f8b(t.a.c,e.a),$async$M7)
case 4:w=5
return A.b(t.H8(),$async$M7)
case 5:case 1:return A.h(u,v)}})
return A.i($async$M7,v)},
abp(d){return this.c2H(d)},
c2H(d){var w=0,v=A.j(x.H),u=this,t
var $async$abp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c0(B.K,new C.dx_(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$abp)
case 2:return A.h(null,v)}})
return A.i($async$abp,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dLm
w=J.dE(m.d,new C.dx7())
v=A.z(w,w.$ti.k("E.E"))
w=J.dE(m.d,new C.dx8())
u=A.z(w,w.$ti.k("E.E"))
t=B.d.cO(v,0,new C.dx9())
w=A.m(18)
s=m.a.d.a
r=s?D.c76:D.as4
q=A.H(s?B.cU.j(0.35):B.cU.j(0.18),B.r,1)
s=A.p(l,D.bAX,B.i,l,l,new A.o(B.cU.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.C(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.X,!0,A.m(12),A.aH(!1,A.m(12),!0,D.dKO,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dxa(m),l,l,l,l,l,l,l),B.i,B.cU,0,l,l,l,l,l,B.aa)],p),B.m,l,B.e,B.j,0,l,l)
o=A.C(m.clJ("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zt(t)
r=A.a([A.p(l,A.u(A.a([s,B.ac,A.A(A.a([o,B.ab,A.C(m.b_S(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.i,l,l,new A.o(l,l,q,w,l,new A.a7(B.ax,B.aE,B.w,r,l,l),B.n),l,l,l,l,B.acp,l,l,l),B.aC],p)
if(J.ch(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bk:B.bu).j(0.12),B.r,1)
n=A.p(l,D.bw6,B.i,l,l,new A.o(B.cU.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.ac,w,B.aw,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bk:B.bu,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.i,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bgm,l,l,1/0))}else{w=m.gc7U()
s=A.z(new A.I(v,w,A.S(v).k("I<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.B(D.bhW,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bk:B.bu,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.I(u,w,A.S(u).k("I<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.al,l,B.e,B.j,0,B.p)},
b_S(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.x.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bk:B.bu).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bk:B.bu,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cU
else w=v.a.d.a?B.aN:B.aG
return A.p(u,A.u(A.a([q,B.bw,A.d(f,u,1,B.a0,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.i,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eg,u,u,u)},
clJ(d,e){return this.b_S(!1,d,e)},
c7V(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.xV(j).length,h=d.b8E()
if(d.x!=null){w=d.xV(j).length
v=w===0?B.cU:B.bR}else if(d.gRz())v=B.bR
else{if(h)w=B.cU
else w=k.a.d.a?B.bk:B.bu
v=w}if(d.x!=null){w=d.xV(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vN(u,!1)}else{u.toString
t="Paid "+C.vN(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vN(w,!1)+" \xb7 "+i+" missed":"Due "+C.vN(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRz()&&d.x==null)s=B.bR.j(0.35)
else s=(k.a.d.a?B.bk:B.bu).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.a9(0,B.G,B.x.j(0.04),B.cC,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bh:B.lM
o=A.H(d.gRz()&&d.x==null?B.bR.j(0.45):B.cU.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fEq(d.d)
o=A.p(B.C,A.d8(C.aUy(A.fdk(d.e,m),24),n),B.i,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aN:B.aG
m=x.p
n=A.a([new A.dp(1,B.cj,A.d(p,j,1,B.a0,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaAG())B.d.v(n,A.a([B.ey,A.U(B.Kr,B.cU.j(0.8),j,j,j,14)],m))
p=A.C(A.u(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.dh,A.d(t,j,1,B.a0,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zt(d.c)
l=k.a.d.a?B.aN:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.X,!0,j,A.aH(!1,q,!0,new A.B(S.ac9,A.A(A.a([o,B.bb,p,B.ab,A.u(A.a([n,B.bw,A.U(B.el,(k.a.d.a?B.bk:B.bu).j(0.5),j,j,j,18)],m),B.dD,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dx1(k,d),j,j,j,j,j,j,j),B.i,B.K,0,j,j,j,j,j,B.aa),B.i,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d6,j,j,j,j)}}
C.mG.prototype={
ad(){var w=this
return A.D(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().aa()],x.N,x.z)},
b5s(d,e,f){return new C.mG(this.a,e,d,f)}}
C.FQ.prototype={
xt(d,e,f,g,h,i,j,k,l,a0,a1){var w=this,v=j==null?w.a:j,u=a0==null?w.b:a0,t=k==null?w.c:k,s=e==null?w.d:e,r=f==null?w.e:f,q=a1==null?w.f:a1,p=h==null?w.r:h,o=g==null?w.w:g,n=l==null?w.x:l,m=d==null?w.y:d
return new C.FQ(v,u,t,s,r,q,p,o,n,m,i==null?w.z:i)},
ayW(d){var w=null
return this.xt(w,w,w,w,d,w,w,w,w,w,w)},
b5q(d,e,f){var w=null
return this.xt(d,w,w,w,w,w,w,e,w,f,w)},
cwI(d){var w=null
return this.xt(w,w,w,w,w,d,w,w,w,w,w)},
cwR(d){var w=null
return this.xt(w,w,w,w,w,w,w,w,d,w,w)},
cw3(d){var w=null
return this.xt(w,w,w,d,w,w,w,w,w,w,w)},
cwT(d){var w=null
return this.xt(w,w,w,w,w,w,w,w,w,w,d)},
cw0(d){var w=null
return this.xt(w,w,d,w,w,w,w,w,w,w,w)},
cvW(d){var w=null
return this.xt(w,d,w,w,w,w,w,w,w,w,w)},
Eb(d){var w=null
return this.xt(w,w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return A.D(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z],x.N,x.z)},
ctV(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bI4(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.L(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cJ(d.h(0,n))).length!==0?B.a.i(A.cJ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cJ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AH.ge9(D.AH))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_t)
q=l.$2("frame",D.a_0)
l=l.$2("texture",D.ZW)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cJ(d.h(0,"author"))):o
return this.xt(p,u,t,q,r,A.tb(d.h(0,"ribbon"))?A.Er(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.X0.prototype={
S(){return new C.awo(A.a([],x.I),D.K2)},
gdQ(){return this.c}}
C.awo.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yp(0,1)
w=$.as()
v.z=new A.ao(B.aq,w)
v.Q=new A.ao(B.aq,w)
v.ko()
w=v.a
C.bwK(w.c,w.d).bC(new C.cZg(v),x.fL)},
p(){var w,v=this,u=v.f
u===$&&A.c()
u.p()
u=v.z
u===$&&A.c()
w=$.as()
u.R$=w
u.O$=0
u=v.Q
u===$&&A.c()
u.R$=w
u.O$=0
v.a2()},
ko(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ko=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.IV(s.c,s.d),$async$ko)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.cZ4(t,r))
t.art()
case 1:return A.h(u,v)}})
return A.i($async$ko,v)},
gaoa(){var w,v=this
if(!J.ch(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
art(){var w,v,u=this.gaoa(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saR(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saR(0,w==null?"":w)},
c17(d){this.n(new C.cZ1(this,d))
this.art()},
Lw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Lw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mG(B.o.u(1000*Date.now()),"Untitled page","",new A.N(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aMH(r.c,r.d,s),$async$Lw)
case 3:w=4
return A.b(t.ko(),$async$Lw)
case 4:if(t.c==null||J.ch(t.d)){w=1
break}q=J.pH(t.d,new C.cYF(s))
p=q>=0?q:J.aa(t.d)-1
t.n(new C.cYG(t,p))
t.art()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.zY(p+1,B.cm,B.ko),$async$Lw)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Lw,v)},
Dw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Dw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaoa()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aMH(o.c,o.d,new C.mG(s,r,q,new A.N(p,0,!1))),$async$Dw)
case 3:w=4
return A.b(t.ko(),$async$Dw)
case 4:if(t.c==null){w=1
break}t.n(new C.cZ5(t))
case 1:return A.h(u,v)}})
return A.i($async$Dw,v)},
M8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$M8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaoa()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cYM(r),s,null,!0,!0,x.y),$async$M8)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bww(s.c,s.d,r.a),$async$M8)
case 4:t.n(new C.cYN(t))
w=5
return A.b(t.ko(),$async$M8)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RC(B.o.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$M8,v)},
xe(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Dw(),$async$xe)
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
return A.b(C.OU(s,r.r,o,p,q),$async$xe)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).K(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h18(s,r.x,r.r),$async$xe)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.IV(s.c,s.d),$async$xe)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.G(l,new C.mG(""+(m+k),q,B.a.i(j.b),new A.N(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zA(r.c,r.d,l),$async$xe)
case 11:w=12
return A.b(t.ko(),$async$xe)
case 12:r=t.c
if(r==null){w=1
break}r.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xe,v)},
YK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Dw(),$async$YK)
case 5:case 4:if(t.c==null){w=1
break}s=t.gDP(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.xm,new C.cZ2(t),new C.cZ3())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m_("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new F.m_(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fG1(o,new F.qE(s,r,"",p,new F.tL(q.d,null,null,null,null,"","","")),null),$async$YK)
case 6:case 1:return A.h(u,v)}})
return A.i($async$YK,v)},
UC(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(D.b_K,new C.cYO(t),r,!0,!0,!0,D.e8N,!1,!1,x.e),$async$UC)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cYP(t,s))
r=t.a
w=4
return A.b(C.a0d(r.c,r.d,s),$async$UC)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.zY(0,B.dW,B.o_)
case 1:return A.h(u,v)}})
return A.i($async$UC,v)},
bHv(d){var w=d.bP(),v=B.a.aU(B.o.u(w.gcb()),2,"0"),u=B.a.aU(B.o.u(w.gcp()),2,"0")
return""+w.gcc()+"-"+v+"-"+u},
gDP(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bPm()
if(r.e)w=D.a7q
else if(J.ch(r.d)){w=r.y
v=r.gDP(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.enC,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a8(q,330,new A.B(Ad.adn,new C.Wi(w,v,0,q),q),q),B.bv,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ju.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aJ(q,A.p(q,D.e9a,B.i,q,q,new A.o(q,q,q,A.m(18),A.a([new A.a9(0,B.G,B.dM.j(0.45),B.J,18)],x.V),E.uD,B.n),q,q,q,q,B.Vl,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gct4(),q,q,q,q,q,q,!1,B.ae))
w.push(B.U)
w.push(A.hg(D.bss,D.eV5,r.gaHl(),q))
B.d.v(u,w)}w=A.at(A.ce(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.ej,q,q,B.af),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ju.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dJ:B.yD
u=A.u(A.a([new A.B(D.bfH,w,q),A.C(A.H5(v,new C.cZe(r),J.aa(r.d)+1,q,r.gc16(),u,B.b_),1),r.buQ()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cg(q,D.a9o,new A.am(B.W,q,B.aX,B.q,A.a([D.aED,A.br(!0,A.u(A.a([p,A.C(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bPm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cs(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.NH(B.dP,"AI",h.gbsP(),!0))
if(h.a.f)f.push(new C.NH(B.nn,"Cover",h.gbD3(),!1))
if(J.cs(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.NH(B.rR,"Print",h.gc9Q(),!1))
if(h.a.f&&J.cs(h.d)&&h.r>=0){v=h.w
u=v?B.hr:B.je
t=v?"Save":"Edit"
f.push(new C.NH(u,t,v?h.gcfK():new C.cYZ(h),!1))}if(h.a.f)f.push(new C.NH(B.hF,"Add page",h.gaHl(),!1))
v=A.m(22)
u=A.H(D.j3.j(0.85),B.r,1.6)
t=A.a([new A.a9(0,B.G,B.x.j(0.5),B.cv,16),new A.a9(0,B.G,D.j3.j(0.12),B.J,18)],x.V)
s=x.p
r=A.A(A.a([A.aJ(g,A.p(g,D.bsk,B.i,g,g,new A.o(B.x.j(0.3),g,A.H(D.j3.j(0.6),B.r,1),g,g,g,B.a6),g,30,g,g,g,g,g,30),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.cZ_(h),g,g,g,g,g,g,!1,B.ae),A.C(new A.B(B.fi,A.f_(B.C,A.d(h.gDP(0),g,1,g,g,!1,g,D.en9,g,g,g),B.i,B.e8),g),1),D.edo],s),B.m,g,B.e,B.j,0,g,g)
q=x.O
p=A.p(g,g,B.i,g,g,new A.o(g,g,g,g,g,new A.a7(B.a1,B.a7,B.w,A.a([B.K,D.j3.j(0.7),B.K],q),g,g),B.n),g,1,g,g,g,g,g,g)
o=A.a([],s)
for(n=f.length,m=0;m<f.length;f.length===n||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.d4a
else{k=new A.b2(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],q)
i=new A.ay(D.j3.j(0.5),1,B.r,-1)
j=A.p(g,A.U(l.a,D.ju,g,g,g,17),B.i,g,g,new A.o(g,g,new A.c2(i,i,i,i),new A.bx(k,k,k,k),g,new A.a7(B.a1,B.a7,B.w,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ju.j(0.85)
o.push(new A.bI(1,B.bt,A.aJ(B.c5,A.u(A.a([k,B.bw,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ae),g))}return A.p(g,A.u(A.a([r,new A.B(B.u6,p,g),A.A(o,B.m,g,B.e,B.j,0,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.i,g,g,new A.o(g,g,u,v,t,D.aj7,B.n),g,g,g,D.bep,B.ll,g,g,g)},
yH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Dw(),$async$yH)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.feC(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.cYH(t,p),s,null,!0,!0,x.N),$async$yH)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xe(),$async$yH)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cl(),$async$yH)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.DS("Swahili (Kiswahili)",!0),$async$yH)
case 18:w=16
break
case 17:w=19
return A.b(t.cpU(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yH)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yH,v)},
Wp(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(D.j3.j(0.3),B.r,1),r=x.p
return new A.B(B.cR,A.aH(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.U(e,B.c,w,w,w,21),B.i,w,w,new A.o(w,w,w,w,w,E.uD,B.a6),w,42,w,w,w,w,w,42),B.bb,A.C(A.u(A.a([A.d(f,w,w,w,w,w,w,A3.a3K,w,w,w),A.d(g,w,w,w,w,w,w,E.a3C,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.i,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZ0(d,h),w,w,w,w,w,w,w),w)},
Cl(){return this.bH_()},
bH_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cl=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cYS(r),a7,null,!0,!0,x.ei),$async$Cl)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.z(r.d,x.B)
p=g
f=r.y
o=new A.eI("Working on it\u2026",$.as())
a6.a=!0
a7=r.c
a7.toString
A.cb(null,null,!1,null,new C.cYT(o),a7,null,!0,!0,x.H).f4(new C.cYU(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.ci(l,new A.V(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xm[a1]
J.ci(j,i.a)}w=8
return A.b(C.ae5(a0,a7,new C.cYV(o),d,l,e,j),$async$Cl)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a5(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).eC()
l=o
l.shH($.as())
J.aN8(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.E(x.q).f
j=n
l.P(A.aZ(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcg(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.am(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b5s(m.b.h(0,a4).b,a7,new A.N(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zA(j.c,j.d,l),$async$Cl)
case 11:w=12
return A.b(r.ko(),$async$Cl)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xm[a1].a)
a5=l.ctV(j,12,a7)
l=r.a
w=15
return A.b(C.a0d(l.c,l.d,a5),$async$Cl)
case 15:if(r.c!=null)r.n(new C.cYW(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.zY(0,B.dW,B.o_)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.E(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.aZ(a3?A.cjZ("Undo",new C.cYX(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cl,v)},
DS(d,e){return this.cpV(d,e)},
cpU(d){return this.DS(d,!1)},
cpV(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$DS=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.z(r.d,x.B)
d=e
a0=new A.eI("Starting\u2026",$.as())
f.a=!0
k=r.c
k.toString
A.cb(null,null,!1,null,new C.cZ7(a0),k,null,!0,!0,x.H).f4(new C.cZ8(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.ci(o,new A.V(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a_Y(m,new C.cZ9(a0)),$async$DS)
case 10:w=8
break
case 9:w=11
return A.b(C.by6(new C.cZa(a0),m,a2),$async$DS)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a5(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).eC()
o=a0
o.shH($.as())
J.aN8(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.E(x.q).f
k=q
o.P(A.aZ(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b5s(J.q(p,g).b,j.a,new A.N(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zA(k.c,k.d,o),$async$DS)
case 12:w=13
return A.b(r.ko(),$async$DS)
case 13:o=r.c
if(o==null){w=1
break}o=o.E(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.aZ(A.cjZ("Undo",new C.cZb(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DS,v)},
buQ(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cYI(v):u
r=A.aF(u,u,u,u,A.U(D.bo6,s?D.ju:B.be,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cs(v.d)&&!v.w&&v.r>=0)s=A.hg(A.U(B.uh,B.D1,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.D1,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbCD(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ju.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.C(A.at(s,u,u,u),1)
w=t<J.aa(v.d)?new C.cYJ(v):u
return A.br(!0,new A.B(D.bfv,A.A(A.a([r,s,A.aF(u,u,u,u,A.U(B.el,t<J.aa(v.d)?D.ju:B.be,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.X4.prototype={
S(){return new C.bak(new A.ao(B.aq,$.as()))}}
C.bak.prototype={
gZR(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.a2()},
gbFN(){var w,v=this.gZR()
A:{if("cover"===v){w=D.cCi
break A}if("book"===v){w=D.cyu
break A}w=D.cYo
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=D.j3.j(0.5),n=x.p,m=A.A(A.a([D.d4b,B.av,D.bks,A.aF(q,q,q,q,B.kX,q,q,q,new C.d_H(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.ku(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d_I(r),r.gZR()==="page",q,q,q,q))
if(r.a.d)l.push(A.ku(q,q,q,D.eQe,q,new C.d_J(r),r.gZR()==="book",q,q,q,q))
l.push(A.ku(q,q,q,D.eEH,q,new C.d_K(r),r.gZR()==="cover",q,q,q,q))
l=A.cf(B.bI,l,B.by,6,8)
k=B.c.j(0.07)
k=A.aI(q,B.T,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bn(q,new A.b0(4,A.m(16),B.V),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kb,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ad,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.dj,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbFN(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.od(q,B.c.j(0.08),new A.w(s,q,B.Qz,q,q,q,q,q,q,q,q,q),B.hN,new C.d_L(r,s),q,q,q))}return A.ey(q,D.CN,A.ce(A.u(A.a([m,B.U,D.eT8,B.ar,l,B.ac,k,B.P,A.cf(B.bI,w,B.by,6,6),B.aC,A.dn(D.bsp,D.eTT,new C.d_M(r,d),A.bk(B.b0,q,q,q,q,B.ol,q,q,new A.b5(A.m(16),B.V),q,q,q)),B.aw,D.eOM],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.ft,q,q,B.af),q,q,q,D.ad7,B.cZ,q,new A.b5(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.X2.prototype={
S(){return new C.awp(A.a([],x.Y))},
gdQ(){return this.c}}
C.ac_.prototype={}
C.awp.prototype={
Z(){this.a0()
this.ko()},
ko(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$ko=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.OY(p.c,p.d),$async$ko)
case 3:o=e
n=A.a([],x.Y)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bwK(r.c,q),$async$ko)
case 6:j=e
i=J
w=7
return A.b(C.IV(t.a.c,q),$async$ko)
case 7:m.push(new l.ac_(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.cZv(t,n))
case 1:return A.h(u,v)}})
return A.i($async$ko,v)},
b0X(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
O3(d,e){return this.c2F(0,e)},
c2F(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$O3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cz(A.eN(new C.cZu(u,e),!0,null,x.y)),$async$O3)
case 2:t=g
w=3
return A.b(u.ko(),$async$O3)
case 3:if(t===!0&&u.c!=null)u.c.E(x.q).f.P(D.aHK)
return A.h(null,v)}})
return A.i($async$O3,v)},
DV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$DV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.E(x.q).f.P(D.aHG)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adt(s.c,s.d),$async$DV)
case 5:q=e
w=6
return A.b(t.ko(),$async$DV)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.O3(0,B.d.kS(t.d,new C.cZz(q))),$async$DV)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.OU(p,s.f,r,n,o),$async$DV)
case 10:m=e
w=11
return A.b(t.ko(),$async$DV)
case 11:if(m&&t.c!=null)t.c.E(x.q).f.P(D.aHK)
case 1:return A.h(u,v)}})
return A.i($async$DV,v)},
Ny(d,e){return this.cdA(0,e)},
cdA(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ny=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cZy(t,e),s,null,!0,!0,x.y),$async$Ny)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0b(s.c,s.d,e.a),$async$Ny)
case 4:w=5
return A.b(t.ko(),$async$Ny)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Ny,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.buT(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(D.j3.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aJ(n,new A.fY(0.7142857142857143,A.p(n,A.u(A.a([D.d4c,B.ac,D.dKu,B.aw,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ju.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.i,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gct0(),n,n,n,n,n,n,!1,B.ae))}w=A.m(22)
v=A.H(D.j3.j(0.85),B.r,1.6)
s=A.aJ(n,A.p(n,D.bzM,B.i,n,n,new A.o(B.x.j(0.3),n,A.H(D.j3.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.cZA(d),n,n,n,n,n,n,!1,B.ae)
r=A.m(14)
q=B.x.j(0.3)
p=A.H(D.j3.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bb,D.bkL,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.emN,n,n,n),B.i,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.fW,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.i,n,n,new A.o(n,n,v,w,n,D.aj7,B.n),n,n,n,Ag.US,D.bdD,n,n,n)
if(o.e)k=D.a7q
else k=k.length===0?D.aW4:A.co(new C.cZB(k))
return A.cg(n,D.a9o,new A.am(B.W,n,B.aX,B.q,A.a([D.aED,A.br(!0,A.u(A.a([w,A.C(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
buT(d){var w,v,u=this,t=null,s=u.b0X(d),r=d.c,q=x.p,p=A.a([A.c_(0,A.f_(B.C,new A.a8(300,420,new C.Wi(d.b,s,r,t),t),B.i,B.dp),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aJ(t,A.p(t,D.bz5,B.i,t,t,new A.o(B.x.j(0.55),t,A.H(B.be,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZs(u,d),t,t,t,t,t,t,!1,B.ae),t,t,t,6,6,t))
w=A.d(s,t,1,B.a0,t,t,t,D.emp,t,t,t)
v=r===1?"page":"pages"
return A.aJ(t,A.u(A.a([new A.fY(0.7142857142857143,new A.am(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ju.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZt(u,d),t,t,t,t,t,t,!1,B.ae)}}
C.NH.prototype={}
C.Wi.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.xm,new C.cy7(m),new C.cy8()),j=m.c,i=D.AH.h(0,j.e),h=A.bg(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m_:B.b5
v=new C.cy9(h)
i=A.a([new A.a9(0,B.G,B.x.j(0.6),D.dIx,28)],x.V)
u=x.p
t=A.a([A.c_(0,A.b1(l,l,l,new C.b7G(j.x,h,l),B.at),0,0,0),A.an(0,A.p(l,l,B.i,l,l,new A.o(l,l,l,l,l,new A.a7(B.a1,B.a7,B.w,A.a([B.x.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b2(3,3)
t.push(new A.cE(8,40+s*46,l,l,l,l,A.p(l,l,B.i,l,l,new A.o(h.j(0.7),l,l,new A.bx(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ado,8,0.85,2.2),v.$4(D.bid,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ado,8,0.85,2.4))
else if(r==="corners")t.push(A.c_(0,new A.B(D.bia,A.b1(l,l,l,new C.b7x(h,l),B.at),l),0,0,0))
r=A.U(D.arn[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a0,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aoU,l,l),B.L,l,l)
p=A.p(l,l,B.i,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aC,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cS,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aT,A.d(r,l,2,B.a0,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.c_(0,new A.B(D.biD,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b1(l,l,l,new C.aDc(l),D.ecy),l,l,l,46,0,l))
return A.p(l,A.bw(D.a65,new A.am(B.W,l,B.a9,B.q,t,l),B.ap),B.i,l,l,new A.o(l,l,l,D.a65,i,new A.a7(B.ax,B.aE,B.w,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b7G.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f9()
f.e2(11)
switch(this.b){case"plain":return
case"linen":$.a1()
w=A.T()
w.r=B.x.j(0.07).gt(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.M()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.a1()
q=A.T()
q.r=B.c.j(0.05).gt(0)
q.c=1
for(p=0;p<u;p+=4){r=q.M()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ah()
l=f.ah()
k=f.ah()
$.a1()
j=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
j.r=t.j(0.25+f.ah()*0.5).gt(0)
r=j.M()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.a1()
j=A.a([],l)
h=new A.b_(k.r,B.au,null,null,j)
j.push(new A.bj(v,t))
k=i-0.04
j.push(new A.aw(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aw(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bX())
k=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
k.r=m.j((n&1)===0?0.09:0.03).gt(0)
r=k.M()
k=h.gbM().a.snapshot()
o.drawPath((h.e=new A.cG(k)).a,r)
r.delete()}break
default:$.a1()
w=A.T()
w.r=B.x.j(0.07).gt(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ah()
m=f.ah()
l=f.ah()
r=w.M()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.a1()
g=A.T()
g.r=B.c.j(0.035).gt(0)
for(n=0;n<120;++n){o=f.ah()
m=f.ah()
l=f.ah()
r=g.M()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ao(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b7x.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a1(),k=A.T(),j=this.b
k.r=j.j(0.9).gt(0)
k.b=B.aj
k.c=2.4
k.d=B.bZ
for(w=e.a,v=e.b,v=[D.e5u,new A.d6([w,0,-1,1]),new A.d6([0,v,1,-1]),new A.d6([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.b_(l,B.au,null,null,s)
s.push(new A.bj(r+p*34,q))
s.push(new A.aw(r,q))
s.push(new A.aw(r,q+o*34))
m=k.M()
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cG(s)).a,m)
m.delete()
s=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
s.r=j.j(0.9).gt(0)
m=s.M()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ao(d){return!d.b.A(0,this.b)}}
C.tu.prototype={}
C.WB.prototype={
S(){return new C.b7E()}}
C.b7E.prototype={
gnq(){var w=this.d
return w===$?this.d=this.a.c:w},
gDP(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ao(new A.b9(w.b,B.aY,B.aL),$.as())}return v},
gawk(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ao(new A.b9(w.c,B.aY,B.aL),$.as())}return v},
gamO(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ao(new A.b9(w.y,B.aY,B.aL),$.as())}return v},
p(){var w=this,v=w.gDP(0),u=v.R$=$.as()
v.O$=0
v=w.gawk()
v.R$=u
v.O$=0
v=w.gamO()
v.R$=u
v.O$=0
w.a2()},
anm(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.ku(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cRz(this,f,u),e===u,s,s,s,s))}return A.cf(B.bI,r,B.by,6,8)},
asG(d){var w=null,v=B.c.j(0.07)
return A.bn(w,new A.b0(4,A.m(14),B.V),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l3,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnq(),a0=f.gDP(0),a1=a0.a.a,a2=f.gawk(),a3=a2.a.a,a4=f.gamO(),a5=d.b5q(a4.a.a,a3,a1)
a1=x.n
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a8(190,260,A.f_(B.C,new A.a8(270,370,new C.Wi(a5,d,f.a.e,e),e),B.i,B.dp),e),e,e,e)
a0=A.aI(e,B.T,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.asG("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cRY(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aI(e,B.T,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.asG("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cRZ(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xm[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.be
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.i,e,e,new A.o(e,e,new A.c2(o,o,o,o),e,e,new A.a7(B.ax,B.aE,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aJ(e,A.u(A.a([p,B.dh,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cS_(f,t),e,e,e,e,e,e,!1,B.ae))}v=A.cf(B.bI,v,B.by,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.b2(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eJ:B.K,2,B.r,-1)
q.push(A.aJ(e,A.p(e,A.U(D.arn[n],B.c,e,e,e,24),B.i,e,e,new A.o(p,e,new A.c2(o,o,o,o),new A.bx(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cS0(f,n),e,e,e,e,e,e,!1,B.ae))}q=A.cf(B.bI,q,B.by,8,8)
a4=A.aI(e,B.T,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.asG("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cS1(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.m9,e,e,e)
m=A.a([],w)
for(l=D.AH.gdH(D.AH),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.bg(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eJ:B.be
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.i,e,e,new A.o(j,e,new A.c2(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aJ(e,A.u(A.a([j,B.bw,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cS2(f,k),e,e,e,e,e,e,!1,B.ae))}m=A.cf(B.bI,m,B.by,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.m9,e,e,e)
k=f.gnq()
return new A.B(new A.L(0,0,0,a3.f.d),A.br(!0,new A.d3(new A.aV(0,1/0,0,a1.a.b*0.92),A.cX(A.a([D.eOf,B.ac,d,B.aT,a0,B.U,a2,B.aC,D.eTH,B.P,v,B.aC,D.eOo,B.P,q,B.aC,a4,B.aC,p,B.P,m,B.aC,l,A.mq(e,9,""+B.k.U(f.gnq().f),36,18,new C.cS3(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.m9,e,e,e),B.ar,f.anm(D.a_t,f.gnq().r,new C.cS4(f),D.d0w),B.ac,A.d("BORDER",e,e,e,e,e,e,H.m9,e,e,e),B.ar,f.anm(D.a_0,f.gnq().w,new C.cS5(f),D.d0B),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.m9,e,e,e),B.ar,f.anm(D.ZW,f.gnq().x,new C.cS7(f),D.d1Z),B.ar,A.iu(e,B.b0,e,B.ag,e,new C.cS8(f),e,e,e,D.eJ5,f.gnq().z),B.bv,A.bJ(D.eNb,new C.cS9(f,a6),A.bk(B.b0,e,e,e,e,B.ol,e,e,new A.b5(A.m(16),B.V),e,e,e))],w),e,O.acX,e,e,B.af,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDc.prototype={
a6(d,e){var w,v,u,t=new A.b_($.a1().r,B.au,null,null,A.a([],x.v))
t.N(new A.bj(0,0))
w=e.a
t.N(new A.aw(w,0))
v=e.b
t.N(new A.aw(w,v))
t.N(new A.aw(w/2,v-12))
t.N(new A.aw(0,v))
t.N(new A.bX())
u=A.T()
u.saz(D.bF7.aB(0,new A.af(0,0,0+w,0+v)))
d.b4(t,u)},
ao(d){return!1}}
C.bcN.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a1()
w=A.T()
w.saz(D.bEg.aB(0,new A.af(0,0,a3,a4)))
a5.bp(new A.af(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f9()
u.e2(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ah()*20
l=56+u.ah()*40
k=D.cCh[u.aE(9)]
j=u.aE(14)
J.bP(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.af(n,j,n+m,j+l)
h=A.bZ(i,B.hg)
g=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.x,0.45)
e.toString
g.saz(new A.a7(B.a1,B.a7,B.w,A.a([f,k,e],t),a0,a0).aB(0,i))
d=g.M()
w.drawRRect(A.fL(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
e.r=D.j3.j(0.55).gt(0)
d=e.M()
w.drawRect(A.cz(new A.af(h,j,g,j+2)),d)
d.delete()
j=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
j.r=D.j3.j(0.4).gt(0)
d=j.M()
w.drawRect(A.cz(new A.af(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aE(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.saz(D.bDI.aB(0,new A.af(0,r,a3,q)))
d=p.M()
w.drawRect(A.cz(new A.af(0,r,a3,q)),d)
d.delete()
p=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=B.x.j(0.5).gt(0)
p.z=B.jf
d=p.M()
w.drawRect(A.cz(new A.af(0,q,a3,q+14)),d)
d.delete()}w=A.T()
w.r=D.aZ8.j(0.72).gt(0)
a5.bp(new A.af(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.T()
a4.saz(new A.bT(B.C,0.5,B.w,a0,0,A.a([D.b46.j(0.22),B.K],t),a0,a0).aB(0,A.c1(new A.v(w,a2),a1)))
a5.aw(new A.v(w,a2),a1,a4)},
ao(d){return!1}}
C.b5U.prototype={
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.c,n=B.a.i(o.c),m=A.ad("[ \t]{2,}",!0,!1,!1,!1),l=A.aK(n,m," ")
n=x.p
m=A.a([],n)
for(w=3;w>=1;--w){v=-w
m.push(new A.cE(14,w*2,v*2.2,v*2,p,p,new A.kx(new A.o(A.aq(D.ju,D.b7H,w/4),p,new A.c2(B.V,new A.ay(B.x.j(0.12),1,B.r,-1),B.V,B.V),B.HS,p,p,B.n),B.ba,p,p),p))}v=x.V
u=A.a([new A.a9(0,B.G,B.x.j(0.35),B.aAt,8)],v)
t=A.a([],n)
for(w=0;w<5;++w){s=new A.b2(2,2)
t.push(A.p(p,p,B.i,p,p,new A.o(D.j3.j(0.6),p,p,new A.bx(s,s,s,s),p,p,B.n),p,14,p,p,p,p,p,3))}u=A.p(p,A.u(t,B.m,p,B.t2,B.j,0,B.p),B.i,p,p,new A.o(p,p,p,D.aOM,u,D.bF5,B.n),p,p,p,p,p,p,p,14)
v=A.a([new A.a9(0,B.G,B.x.j(0.4),B.dl,18)],v)
t=A.an(p,A.b1(p,p,p,new C.aDc(p),D.ect),p,p,p,26,-2,p)
s=o.d
r=q.x
if(q.f)o=A.u(A.a([A.aI(p,B.T,!1,p,!0,B.q,p,A.aL(),q.r,p,p,p,p,p,2,A.bn(p,B.er,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iO.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Page title",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!1,p,B.ad,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.ezu,!0,B.a5,p,B.am,p,p,p,p),A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iO.j(0.45),p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.U,A.C(A.aI(p,B.T,!1,p,!0,B.q,p,A.aL(),q.w,p,p,p,p,p,2,A.bn(p,B.er,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iO.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Write your family story here\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.er3,!0,B.a5,B.y6,B.am,p,p,p,p),1)],n),B.al,p,B.e,B.j,0,B.p)
else{o=A.a([A.d(o.b,p,p,p,p,p,p,D.ezo,p,p,p),B.aw,A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iO.j(0.5),p,p,p,p,p,p,p,p,11,B.cS,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.P,A.A(A.a([A.C(A.p(p,p,B.i,D.IE.j(0.35),p,p,p,1,p,p,p,p,p,p),1),new A.B(B.fi,A.d("\u2766",p,p,p,p,p,p,A.l(p,p,D.IE.j(0.7),p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.C(A.p(p,p,B.i,D.IE.j(0.35),p,p,p,1,p,p,p,p,p,p),1)],n),B.m,p,B.e,B.j,0,p,p),B.aC],n)
if(l.length===0)o.push(A.d("This page is blank. Tap the pencil to write.",p,p,p,p,p,p,A.l(p,p,G.iO.j(0.4),p,p,p,p,p,p,p,p,16,p,p,p,p,1.7,!0,p,p,p,p,p,p,p,p),p,p,p))
else o.push(A.Vz(A.dw(A.a([A.dw(p,p,p,p,p,p,p,p,p,D.etZ,B.a.al(l,0,1)),A.dw(p,p,p,p,p,p,p,p,p,p,B.a.aV(l,1))],x.R),p,p,p,p,p,p,p,p,p,p),p,p,A.l(p,p,G.iO.j(0.93),p,p,p,p,p,p,p,p,16.5,p,p,p,p,1.72,!0,p,p,p,p,p,p,p,p),p))
o=A.ce(A.u(o,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,p,p,p,B.af)}m.push(A.A(A.a([u,A.C(A.p(p,A.bw(B.HS,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.B(D.bhI,A.u(A.a([A.C(o,1),new A.B(B.jz,A.d("\u2014 "+q.d+" \u2014",p,p,p,p,p,p,A.l(p,p,G.iO.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,1,p,p,p,p,p,p),B.L,p,p),p)],n),B.al,p,B.e,B.j,0,B.p),p),A.an(0,A.bQ(p,new A.o(p,p,p,p,p,new A.a7(B.a1,B.a7,B.w,A.a([B.x.j(0.16),B.K],x.O),p,p),B.n),B.ba),p,p,0,p,0,22)],n),p),B.ap),B.i,p,p,new A.o(p,p,p,B.HS,v,D.bFz,B.n),p,p,p,p,p,p,p,p),1)],n),B.al,p,B.e,B.j,0,p,p))
return new A.am(B.W,p,B.a9,B.q,m,p)}}
C.amq.prototype={
S(){return new C.azS(A.a([],x._))},
bl(){return this.r.$0()},
oX(){return this.w.$0()},
gdQ(){return this.c}}
C.azS.prototype={
Z(){var w,v
this.a0()
this.uW()
w=this.a
v=w.c
if(v.length!==0)C.a4I(v,w.e,w.d.w)},
uL(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fG4(r,t.e,!1,s.w,new C.dJW(u),null,s),$async$uL)
case 2:w=3
return A.b(u.uW(),$async$uL)
case 3:return A.h(null,v)}})
return A.i($async$uL,v)},
XX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$XX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fG4(r,t.e,!0,s.w,new C.dJV(u),null,s),$async$XX)
case 2:w=3
return A.b(u.uW(),$async$XX)
case 3:return A.h(null,v)}})
return A.i($async$XX,v)},
uW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$uW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zr(q.a.c),$async$uW)
case 7:p=e
if(q.c!=null)n=q.e||J.cs(p)
else n=!1
if(n)q.n(new C.dJY(q,p))
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
return A.b(C.EP(q.a.c).cI(0,B.oR),$async$uW)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dJZ(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dK_(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uW,v)},
MC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.E(s).f.P(D.eg2)
w=3
return A.b(C.EP(t.a.c),$async$MC)
case 3:r=e
w=4
return A.b(C.fmJ(t.a.c,r),$async$MC)
case 4:q=e
w=5
return A.b(C.EP(t.a.c),$async$MC)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dJU(t,p))
o=t.c.E(s).f
s=A.d(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.aZ(null,null,null,q?B.dr:B.cI,null,B.q,null,s,null,B.lP,null,null,null,null,null,null,null,null,null,null))
t.a.oX()
case 1:return A.h(u,v)}})
return A.i($async$MC,v)},
Go(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Go=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hLn(l),$async$Go)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hgb(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aVZ(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Go)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.fYx(r)
o=Date.now()
n=t.a.c
m=new C.kh(l,r.toUpperCase(),p,!0,B.T,D.Av,new A.N(o,0,!1),0,n,D.rD)
w=5
return A.b(C.a0i(n,m),$async$Go)
case 5:w=6
return A.b(t.uW(),$async$Go)
case 6:t.a.bl()
t.a.oX()
if(t.c==null){w=1
break}t.D4(m)
case 1:return A.h(u,v)}})
return A.i($async$Go,v)},
D4(d){return this.c4C(d)},
c4C(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$D4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zr(u.a.c),$async$D4)
case 2:n=l.qz(k.dE(f,new C.dJX(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hl(m,new C.amk(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$D4)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0i(u.a.c,o),$async$D4)
case 6:case 5:w=7
return A.b(u.uW(),$async$D4)
case 7:u.a.oX()
return A.h(null,v)}})
return A.i($async$D4,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.K(d).ax.a===B.H,o=new C.t1(p)
if(r.e)return A.at(A.md(q,p?B.bk:B.bu,q,q,q,q,q,q,q,q),q,q,q)
if(J.ch(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.X,!0,q,A.aH(!1,q,!0,A.p(q,D.btu,B.i,q,q,new A.o(B.aR.j(0.12),q,A.H(B.aR,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cD,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc3I(),q,q,q,q,q,q,q),B.i,B.K,0,q,q,q,q,q,B.aa)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.DX(A.p(q,A.u(A.a([u,B.aT,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bk:B.bu,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dZ,A.bJ(D.eUR,r.gaLg(),A.bk(B.bU,q,q,q,q,q,Af.Vo,q,new A.b5(A.m(12),B.V),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.i,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bhG,q,q,1/0),15,B.ag,1.05,D.a4R,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.bd],v)
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.U(B.x6,B.aR,q,q,q,q),q,q,q,new C.dK1(r),q,q,q,q,"Sync family trees with database",q))
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.U(B.A6,B.aR,q,q,q,q),q,q,q,r.gac3(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.aij,D.eCG,r.gaLg(),A.bk(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.DX(r.cpZ(J.q(r.d,s),o),14,B.ag,1,D.a4R,q))
B.d.v(w,u)}return A.u(A.a([p,B.aC,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cpZ(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dT:B.cg).j(0.55),B.r,1),r=A.a([new A.a9(0,B.G,B.x.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.bsy,B.i,w,w,new A.o(B.aR.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gakK(),m=d.d?"":" \xb7 Public",l=d.y===D.jX?" \xb7 View only":"",k=x.p
l=A.C(A.u(A.a([o,B.bw,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bk:B.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.X,!0,w,A.aH(!1,q,!0,new A.B(B.bC,A.A(A.a([p,B.bb,l,A.U(B.Kc,v?B.bk:B.bu,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dK0(this,d),w,w,w,w,w,w,w),B.i,B.K,0,w,w,w,w,w,B.aa),B.i,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amk.prototype={
S(){return new C.azP(A.a([],x._),A.aY(x.N),A.b3B())},
bl(){return this.r.$0()},
gdQ(){return this.c}}
C.azP.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9e()
w=u.a
v=w.c
if(v.length!==0)C.a4I(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.as()
w.O$=0
this.a2()},
a_L(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wI("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJm(r),s,null,!0,!0,x.y),$async$a_L)
case 3:if(e!==!0||t.c==null){w=1
break}t.HN()
t.n(new C.dJn(t,r))
w=4
return A.b(t.uN(),$async$a_L)
case 4:t.a.bl()
t.wI(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a_L,v)},
cgo(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dJh(w,f,d,e))},
aNo(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.df()
u.e_(w,v,0,1)
u.jd(q,q,1,1)
this.w.st(0,u)},
b39(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eB(new Float64Array(16))
q.dV(r)
w=q.Bm()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.df()
t.e_(r,u,0,1)
t.jd(v,v,1,1)
t.e_(-r,-u,0,1)
t.ie(0,q)
s.st(0,t)},
a9e(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zr(u.a.c),$async$a9e)
case 2:t=s.qz(r.dE(e,new C.dIQ(u)))
if(t!=null&&u.c!=null)u.n(new C.dIR(u,t))
return A.h(null,v)}})
return A.i($async$a9e,v)},
wI(d){var w=null,v=this.c
if(v==null)return
v.E(x.q).f.P(A.aZ(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
uL(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$uL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fG4(o,t,!1,r,new C.dJ4(u),q.a,s),$async$uL)
case 2:n=A
m=J
w=3
return A.b(C.EP(u.a.c),$async$uL)
case 3:p=n.qz(m.dE(e,new C.dJ5(u)))
if(p!=null&&u.c!=null)u.n(new C.dJ6(u,p))
return A.h(null,v)}})
return A.i($async$uL,v)},
HN(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.ct(w,0)},
uN(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0i(t,s),$async$uN)
case 2:return A.h(null,v)}})
return A.i($async$uN,v)},
Zq(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.te(q,t.a.c)){t.wI("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hMv(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$Zq)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HN()
t.n(new C.dJg(t,r))
w=4
return A.b(t.uN(),$async$Zq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zq,v)},
Y9(){return this.c4E()},
c4E(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Y9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.te(q,t.a.c)){t.wI("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.K(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJe(r,new C.t1(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Y9)
case 3:if(e!==!0||t.c==null){w=1
break}t.HN()
t.n(new C.dJf(r,t))
w=4
return A.b(t.uN(),$async$Y9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y9,v)},
Tx(d){return this.bs1(d)},
bs1(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Tx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.te(r,t.a.c)){t.wI("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dIE(t,d),r,null,!0,!0,x.P),$async$Tx)
case 3:s=f
if(s==null){w=1
break}t.HN()
t.n(new C.dIF(t,s))
w=4
return A.b(t.uN(),$async$Tx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Tx,v)},
a06(d){return this.cs3(d)},
cs3(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a06=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.K(s)
t=u.c
t.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dJp(u,d,new C.t1(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a06)
case 2:return A.h(null,v)}})
return A.i($async$a06,v)},
c11(d){var w=this,v=w.d
v===$&&A.c()
if(C.te(v,w.a.c))w.Mi(d)
else w.a06(d)},
aet(d,e){return this.ckb(d,e)},
ckb(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aet=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.K(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.dJj(new C.t1(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$aet)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aet,v)},
Gt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Gt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.jX?3:5
break
case 3:w=6
return A.b(C.fup(t.a.c),$async$Gt)
case 6:s=e
o=t.a
r=C.fNx(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aet(!s,!r),$async$Gt)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bwD(o,t.a.c)){t.wI("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kM(o,"Cancel","Remove",q.y===D.jX?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Gt)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aL3(t.a.c,t.d.a),$async$Gt)
case 11:t.a.bl()
o=t.c
if(o==null){w=1
break}A.ir(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Gt,v)},
a6Q(d){return this.bCL(d)},
bCL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a6Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.te(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.bc(s,new C.dIG(p))){o=A.S(s)
p.a=A.qz(new A.cQ(new A.a3(s,new C.dIH(d),o.k("a3<1>")),new C.dII(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.HN()
t.n(new C.dIJ(t,s,d,q))
w=3
return A.b(t.uN(),$async$a6Q)
case 3:t.wI(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a6Q,v)},
Mi(d){return this.bEL(d)},
bEL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.te(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a06(d),$async$Mi)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.dIN(t,d),r,null,!0,!0,x.P),$async$Mi)
case 6:s=f
if(s==null){w=1
break}t.HN()
t.n(new C.dIO(t,s))
w=7
return A.b(t.uN(),$async$Mi)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mi,v)},
cqi(){var w=this,v=w.d
v===$&&A.c()
if(!C.te(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dJo(w))
w.uN()},
Wb(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Wb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bwD(n,t.a.c)){t.wI("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.K(n)
s=$.as()
r=new A.ao(B.aq,s)
q=t.d.e
p=A.bi(new A.I(q,t.gc_x(),A.S(q).k("I<1,n>")).bZ(0,new C.dJ_()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJ0(t,new C.t1(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Wb)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HN()
t.n(new C.dJ1(t,p))
w=4
return A.b(t.uN(),$async$Wb)
case 4:t.wI("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Wb,v)},
c_y(d){return B.a.i(d.toLowerCase())},
c3t(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.te(v,w)
t=r.d
s=C.hCb(t)
C.hLr(q,t.b,u,C.hCa(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.K(d).ax.a===B.H,m=new C.t1(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a3(l,new C.dJw(),A.S(l).k("a3<1>")).gH(0)
l=n?B.bV:B.iN
v=A.U(B.Wq,n?B.bk:B.bu,o,o,o,18)
u=x.p
v=A.a([new A.B(B.zr,A.aH(!1,o,!0,new A.B(B.hq,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bk:B.bu,o,o,o,o,o,o,o,o,o,o,o,B.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dJx(p,d),o,o,o,o,o,o,o),o),new A.B(B.mv,p.bPn(m),o)],u)
if(p.d.y===D.jX){t=B.qt.j(0.15)
s=A.m(12)
r=A.H(B.qt.j(0.45),B.r,1)
q=C.EN(p.d,p.a.c)
v.push(new A.B(B.wj,A.p(o,A.A(A.a([D.bxy,B.av,A.C(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a_,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.i,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iU,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.bd],u)
if(C.te(p.d,p.a.c)&&p.e.length!==0)u.push(new C.I_("Undo",B.x0,p.gcqh(),m,o,o))
u.push(new C.I_("Family Book",D.bnb,p.gc3s(),m,B.ra,o))
if(C.te(p.d,p.a.c))u.push(new C.I_("Display settings",Ai.Es,p.gc4D(),m,B.aW,o))
u.push(new C.I_("Sync",B.A6,p.gac3(),m,o,o))
t=p.d
if(t.y===D.jX||C.bwD(t,p.a.c)){t=p.d.y===D.jX?"Remove shared tree":"Delete tree"
u.push(new C.I_(t,B.e4,p.gbCV(),m,B.fH,o))}if(C.te(p.d,p.a.c))u.push(new C.I_("Add member",B.ut,new C.dJy(p),m,B.bU,o))
v.push(new A.B(O.acA,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gakK()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bk:B.bu,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.co(new C.dJz(p,m))
v.push(A.C(n,1))
if(w>0){n=p.f
u=A.U(n?K.Wu:U.Kd,o,o,o,o,o)
v.push(A.at(A.hg(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dJA(p),o),o,o,o))}return A.cg(o,l,A.br(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bPn(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.a9(0,B.G,B.ff.j(0.35),B.dl,18)],x.V)
u=A.m(22)
t=A.an(-26,A.U(B.wS,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.X,!0,m,A.aH(!1,m,!0,A.p(m,D.bAv,B.i,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cD,!0,m,m,m,m,m,m,m,m,m,m,m,n.gac3(),m,m,m,m,m,m,m),B.i,B.K,0,m,m,m,m,m,B.aa)
r=n.d
q=A.d(r.b,m,1,B.a0,m,m,m,D.epx,m,m,m)
r=r.gakK()
p=n.d.gakK()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.C(A.u(A.a([q,B.bw,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a_,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.te(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.bxK,m,m,m,n.gcdV(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.iV:B.no
r=r?"Private":"Public"
r=A.C(n.aqT(q,"Privacy",r,n.a.d.w?n.gcpo():m),1)
q=A.C(n.aqT(B.wZ,"Tree code",n.d.c,new C.dIP(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.C(n.aqT(D.boY,"Collaborators",p,n.gbTF()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.jX){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.X,!0,A.m(999),A.aH(!1,A.m(999),!0,new A.B(B.fD,A.A(A.a([A.U(B.o9,B.c,m,m,m,14),B.ey,A.d("View only",m,m,m,m,m,m,B.aIV,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.i,s,0,m,m,m,m,m,B.aa)],o))}return A.p(m,A.bw(u,new A.am(B.W,m,B.a9,B.q,A.a([t,new A.B(B.Dq,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.i,m,m,new A.o(m,m,m,w,v,D.bDL,B.n),m,m,m,m,m,m,m,1/0)},
aqT(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.X,!0,A.m(14),A.aH(!1,A.m(14),!0,new A.B(D.bjk,A.u(A.a([A.U(d,B.c,w,w,w,18),B.aw,A.d(e,w,1,B.a0,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.y3,A.d(f,w,1,B.a0,w,w,w,L.aIG,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.i,v,0,w,w,w,w,w,B.aa)}}
C.ba2.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gag(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b1(t,t,t,new C.ba5(s,t),new A.ap(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.cZF(this),x.l))
r=s.c
B.d.v(u,new A.I(r,new C.cZG(this),A.S(r).k("I<1,r>")))
return new A.B(B.rz,new A.a8(w,v,new A.am(B.W,t,B.a9,B.i,u,t),t),t)}}
C.Ia.prototype={}
C.E8.prototype={}
C.ba4.prototype={
gbbg(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFh.prototype={}
C.ba5.prototype={
bEt(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.a1()
v=A.T()
v.r=B.bB.j(0.75).gt(0)
v.c=2
v.d=B.bZ
d.bU(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.b_(q.r,B.au,null,null,A.a([],x.v))
q=w+5.5
t.N(new A.bj(u,q))
s=w-1.1
r=w-8.8
t.N(new A.p3(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.N(new A.p3(u+4.95,r,u+9.9,s,u,q))
t.N(new A.bX())
q=A.T()
q.r=B.c.gt(0)
d.aw(new A.v(u,w),9,q)
q=A.T()
q.r=B.bB.gt(0)
d.b4(t,q)},
bEr(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.d__())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.bc(a0,new C.d_0(f))
t=new A.I(a0,new C.d_1(f),A.S(a0).k("I<1,P>")).bZ(0,new C.d_2()).cO(0,1/0,B.vB)
w=f.a
d.bU(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.J)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.M()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lx(m)
i=Math.min(10,l/2)
l=$.a1()
h=A.a([],q)
g=new A.b_(l.r,B.au,null,null,h)
h.push(new A.bj(w,v-i))
l=j*i
h.push(new A.dj(w,v,w+l,v))
h.push(new A.aw(n-l,v))
h.push(new A.dj(n,v,n,v+i))
h.push(new A.aw(n,o.b))
k=e.M()
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cG(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.a1()
w=A.T()
w.r=B.bU.j(0.75).gt(0)
w.c=2.2
w.b=B.aj
w.d=B.bZ
w.e=B.fj
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.J)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bEr(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.M()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.J)(v),++s){q=v[s]
if(q.c)this.bEt(d,w,q.a,q.b)}},
ao(d){return d.b!==this.b}}
C.bdK.prototype={
gbYv(){var w=this.c
if(B.a.i(w.y).length!==0)return D.cYn
switch(w.c.a){case 0:return D.cuJ
case 1:return D.cEU
case 2:return D.cTu}},
gbYy(){var w=this.c,v=C.fXZ(w.w),u=C.fXZ(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.K(d).ax.a===B.H,q=t.gbYv(),p=t.c,o=I.bxs(p.f),n=t.gbYy(),m=x.V,l=A.a([new A.a9(0,B.G,B.d.gai(q).j(0.35),B.cC,10)],m),k=r?B.aG:B.c,j=A.H(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.rv(B.C,s,B.cl,B.bP,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.C,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.i,s,s,new A.o(s,s,s,s,s,new A.a7(B.a1,B.a7,B.w,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.i1(w,B.ap),B.i,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.i,s,s,new A.o(s,s,s,s,l,new A.a7(B.ax,B.aE,B.w,q,s,s),B.a6),s,56,s,s,B.DG,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.ez2,s,s,s),B.i,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bjo,s,s,s),s,s,s,-6,-4,s))}k=r?B.d3:B.c
j=A.m(8)
w=A.H(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.a9(0,B.G,B.x.j(r?0.3:0.06),B.dF,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.d3,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aP:B.bu,s,s,s,s,s,s,s,s,7.5,s,s,B.a_,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aJ(s,new A.a8(84,112,A.u(A.a([new A.am(B.W,s,B.a9,B.i,l,s),B.aw,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.i,s,D.aQz,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bjx,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ae)}}
C.b9b.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.a1()
w=A.T()
v=this.b
u=v?B.c:D.b0w
w.r=u.j(v?0.05:0.09).gt(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.M()
t.drawCircle(r,s,1,q)
q.delete()}},
ao(d){return d.b!==this.b}}
C.br5.prototype={
B(d){var w=this,v=null,u=new C.eTE(w),t=w.c,s=t?B.d3:B.c,r=A.m(12),q=u.$3(B.hF,"Zoom in",w.d),p=A.p(v,v,B.i,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.El,"Zoom out",w.e)
return A.aD(!1,B.X,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.i,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),u.$3(B.afT,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.i,s,4,v,B.dt,v,v,v,B.aa)}}
C.bh_.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.H(B.bU,B.r,2),s=w.e,r=x.p
t=A.aJ(v,A.p(v,A.u(A.a([A.U(s?K.Wu:U.Kd,B.bU,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.evu,v,v,v)],r),B.m,v,B.b5,B.j,0,B.p),B.i,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ae)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.ety,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.I(s,new C.evk(w),A.S(s).k("I<1,r>")))
B.d.v(u,t)}return new A.a8(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XE.prototype={
S(){return new C.ayg()},
bl(){return this.Q.$0()},
gdQ(){return this.w}}
C.ayg.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.as()
r.d!==$&&A.aO()
r.d=new A.ao(new A.b9(t,B.aY,B.aL),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ao(new A.b9(t,B.aY,B.aL),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ao(new A.b9(t,B.aY,B.aL),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ao(new A.b9(t,B.aY,B.aL),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ao(new A.b9(t,B.aY,B.aL),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ao(new A.b9(t,B.aY,B.aL),s)
t=u?q:v.c
r.y=t==null?D.wv:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hDH(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.as()
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
Nz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Nz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fNx(p.y,p.w)
w=3
return A.b(A.kX(t.a.w,B.G0),$async$Nz)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aVZ(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Nz)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hgc(p.y,p.w)
t.a.bl()
case 5:w=7
return A.b(Ah.EY(78,800),$async$Nz)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.deb(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Nz,v)},
bYx(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hO(B.o.u(1000*Date.now()),w,D.wv,null,null,null,"","","","","",1,!1,0)
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
s=v.az1(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).K(s)},
a6s(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a6s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dea(r),s,null,!0,!0,x.y),$async$a6s)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).K(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a6s,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===B.H,i=new C.t1(j),h=l.a.e,g=A.S(h).k("a3<1>"),f=A.z(new A.a3(h,new C.dek(l),g),g.k("E.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.B(D.bi_,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hJ(A.aH(!1,k,!0,new A.B(B.ni,A.U(B.e4,B.nV,k,k,k,17),k),B.cD,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbzD(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.j5:B.iv
t=I.bxs(l.as)
if(l.as==null)s=A.U(B.o2,j?B.bk:B.bu,k,k,k,40)
else s=k
s=A.at(A.aJ(k,new A.am(B.W,k,B.a9,B.q,A.a([A.hh(u,t,s,k,42),A.an(0,A.hh(B.bU,k,D.brB,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gbYu(),k,k,k,k,k,k,!1,B.ae),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayi(t,"Full name",B.mz,1,1,i,B.ly)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.U,new C.bdI(i,u,new C.del(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bk:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bbM],q)
o=l.a.e
B.d.v(p,new A.I(o,new C.dem(),A.S(o).k("I<1,ep<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bk:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bbO],q)
B.d.v(q,new A.I(f,new C.deo(),A.S(f).k("I<1,ep<n?>>")))
o=A.u(A.a([t,B.ar,new C.aar(i,r,"Who is their parent?",p,new C.dep(l),k,o),B.aC,n,B.ar,new C.aar(i,m,"Who is their spouse / partner?",q,new C.deq(l),k,o)],v),B.al,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayi(q,"Birth date",D.af1,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayi(m,"Birth place",B.WJ,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayi(n,"Date of death (if deceased)",D.ah9,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayi(p,"Occupation",B.XT,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.C,k,B.a9,B.q,w,k),B.aC,s,B.bv,new C.aas(i,"Identity",u,k),B.ac,new C.aas(i,"Family links",o,k),B.ac,new C.aas(i,"Life details",A.u(A.a([q,B.U,m,B.U,n,B.U,p,B.U,C.ayi(r,"Notes",B.ku,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.ayh(i,"Child order",l.c4O(l.at),new C.der(l),new C.des(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fDA(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.det(l):k
B.d.v(r,A.a([B.U,new C.ayh(i,"Visible in tree",u,w,new C.deu(l),k)],v))}r.push(B.U)
w=j?B.j5:B.iv
u=A.m(14)
t=A.H(j?B.dT:B.cg,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iu(k,B.bU,k,B.ag,k,new C.dev(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bk:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.i,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.acd,k,k,k))
r.push(B.bv)
w=j?B.aN:B.aG
j=j?B.dT:B.cg
r.push(A.A(A.a([A.C(A.dU(B.mS,new C.den(d),A.d9(k,k,k,k,k,k,k,k,k,w,k,k,B.c9,k,new A.b5(A.m(14),B.V),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.C(A.bJ(D.e9i,l.gbYw(),A.bk(B.aR,k,k,0,B.c,k,B.c9,k,new A.b5(A.m(14),B.V),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.aw)
return A.ei(B.fQ,k,B.ag,h,new A.a8(420,k,A.ce(A.u(r,B.al,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.af),k),D.ad3,k,B.act,new A.b5(g,B.V),k,k)},
c4O(d){var w=B.o.J(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.J(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aas.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bk:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j5:B.iv,s=A.m(16)
return A.u(A.a([new A.B(D.adr,u,w),A.p(w,this.e,B.i,w,w,new A.o(t,w,A.H(v?B.dT:B.cg,B.r,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bdJ.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dT:B.cg).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aN:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a_,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aI(u,B.T,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bn(u,B.er,u,B.u8,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bk:B.bu,u,u,u,u,u,u,u,u,u,u,u,B.cn,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.U(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ad,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.i,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aar.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dT:B.cg).j(0.85),B.r,1),q=A.U(B.qd,u?B.bk:B.bu,v,v,v,v),p=A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a_,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.C9(A.a1X(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bk:B.bu,v,v,v,v,v,v,v,v,v,v,v,B.cn,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.i,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.mt,v,v,v)}}
C.bdI.prototype={
B(d){var w=new C.dew(this)
return A.A(A.a([w.$3(D.Wc,"Male",B.KY),B.ab,w.$3(D.aeh,"Female",B.KI),B.ab,w.$3(D.wv,"Other",B.mB)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayh.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.j5:B.iv,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.C(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bk:B.bu,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aEk(u,B.El,w.f,v),B.bp,new C.aEk(u,B.hF,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.i,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eg,v,v,v)}}
C.aEk.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bk:B.bu).j(0.4)
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,new A.a8(36,36,A.U(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.i,w,0,r,r,r,r,r,B.aa)}}
C.aat.prototype={
bI2(d){switch(d.a){case 0:return B.bU
case 1:return B.bB
case 2:return B.cO}},
bI3(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aRr(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
z2(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.H((w?B.dT:B.cg).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.U(f,B.bU,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bk:B.bu,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.C(A.u(A.a([q,B.aw,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aG,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.i,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cR,B.zp,p,p,1/0)},
aaG(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bk:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j5:B.iv,s=A.m(16),r=A.H(v?B.dT:B.cg,B.r,1)
return A.u(A.a([new A.B(D.adr,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.i,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h1x(r,q),o=q.c,n=t.bI2(o),m=I.bxs(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aN:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.jX?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bk:B.bu,s,s,s,s,s,s,s,s,12,s,s,B.a_,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.a9(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hh(u,m,m==null?A.U(B.o2,n,s,s,s,48):s,s,52),B.i,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ek,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bI3(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.i,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mu,s,s,s),s,s,s)
u=x.p
i=A.a([t.z2("Full name",i,B.mz)],u)
if(p>0)i.push(t.z2("Child order","#"+p,B.KP))
r=A.a([h,B.aw,r,B.aT,l,B.U,v,B.bv,t.aaG("Identity",i),B.ac,t.aaG("Life details",A.a([t.z2("Birth date",q.w,D.af1),t.z2("Birth place",q.x,B.WJ),t.z2("Date of death",q.y,D.ah9),t.z2("Occupation",q.z,B.XT)],u)),B.ac,t.aaG("Family links",A.a([t.z2("1. Parent",t.aRr(q.d),B.DT),t.z2("2. Spouse",t.aRr(q.e),B.KH)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.aaG("Notes",A.a([t.z2("Notes",q,B.ku)],u))],u))
r.push(B.bv)
r.push(A.bJ(B.H2,new C.deG(d),A.bk(B.aR,s,s,s,s,s,B.c9,s,new A.b5(A.m(14),B.V),s,s,s)))
return A.ey(s,k,new A.d3(B.l9,A.ce(A.u(r,B.al,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zv,s,s,B.af),s),s,s,s,B.Du,B.cZ,s,new A.b5(j,B.V),s)}}
C.I_.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bk:B.bu
w=t.j(v.f.a?0.14:0.08)
return new A.B(B.wo,A.hJ(A.aD(!1,B.X,!0,A.m(8),A.aH(!1,A.m(8),!0,new A.a8(30,30,A.U(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.i,w,0,u,u,u,u,u,B.aa),u,v.c,u,u),u)}}
C.amn.prototype={
eD(){var w,v,u=this,t=x.N,s=A.Q(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().aa())
w=u.c
v=A.S(w).k("I<1,a0<n,@>>")
w=A.z(new A.I(w,new C.c2g(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iC(w,new C.c2h(),t,x.U))
return s}}
C.amo.prototype={
S(){return new C.azR(A.a([],x.bF))},
gd5(){return this.c}}
C.azR.prototype={
Z(){this.a0()
this.HU()},
HU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$HU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c2k(t.a.c),$async$HU)
case 3:r=e
w=4
return A.b(C.zr(t.a.c),$async$HU)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.ri(q,new C.dJJ(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dJK(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$HU,v)},
xd(d){var w=null,v=this.c
if(v==null)return
v.E(x.q).f.P(A.aZ(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
ID(d,e){return this.csB(d,e)},
csB(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$ID=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dJO(q,e))
t=3
w=6
return A.b(d.$0(),$async$ID)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dJP(q))
$.eG.lR()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ID,v)},
V4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oy(r,s.c,s.e),$async$V4)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.ID(new C.dJG(t),"Preparing download\u2026"),$async$V4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V4,v)},
V8(d){return this.bG9(d)},
bG9(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oy(r,s.c,s.e),$async$V8)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.ID(new C.dJH(t,d),"Preparing file\u2026"),$async$V8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V8,v)},
acp(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$acp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wa.c2().Kj(B.NM,B.rE,!0),$async$acp)
case 7:r=e
o=r
q=o==null?null:J.fl(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aD.gag(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jc(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a5(m)
$.ak.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.EX()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acp,v)},
VH(d){return this.bQc(d)},
bQc(d){var w=0,v=A.j(x.H),u=this
var $async$VH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.ID(new C.dJI(u,d),"Restoring family trees\u2026"),$async$VH)
case 2:return A.h(null,v)}})
return A.i($async$VH,v)},
VG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.acp(),$async$VG)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.VH(s),$async$VG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VG,v)},
a_d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oy(r,s.c,s.e),$async$a_d)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.ID(new C.dJN(t),"Creating QR code\u2026"),$async$a_d)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_d,v)},
ZQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Bs()){t.xd("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cz(A.eN(new C.dJL(),!0,null,x.N)),$async$ZQ)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.VH(r),$async$ZQ)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZQ,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===B.H,n=o?B.yV:B.iN,m=o?D.aaS:B.aN,l=o?B.aI:B.cg,k=o?B.aN:B.aG,j=new C.d_3(n,m,l,k,o?B.bO:B.bu)
l=A.aF(p,p,p,p,A.U(B.eq,k,p,p,p,20),p,p,p,new C.dJR(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eK(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.C(C.cZC(!0,B.iY,B.b3,B.b3,q.r?p:q.gck_(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcgj()
t.push(A.C(C.cZC(!s,B.iC,B.b0,B.bD,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.C(C.cZC(!1,B.hd,B.aR,B.bU,q.r?p:q.gbG2(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.C(C.cZC(!1,M.x1,B.aZ,B.aM,q.r?p:q.gbQ9(),j,s,"Upload backup file"),1))
l=A.a([new C.ba3(v,l,p),B.k8,new C.a9K(j,"QR restore",p),B.U,t,B.d1,new C.a9K(j,"Backup files",p),B.U,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.k8,new C.a9K(j,"One tree",p),B.U],u)
B.d.v(v,J.b3(q.d,new C.dJS(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cX(l,p,B.Vk,p,p,B.af,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aR.j(0.35),B.r,1)
s=A.a([new A.a9(0,B.G,B.x.j(o?0.3:0.1),B.dl,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.br(!0,A.p(p,A.A(A.a([K.aHo,B.bb,A.C(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.i,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Dx,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cg(w,n,new A.am(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d_3.prototype={}
C.ba3.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.a9(0,B.G,B.aR.j(0.32),B.kC,28)],x.V)
t=A.an(p,A.U(B.rV,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.B(B.a8,A.A(A.a([A.p(p,D.bA3,B.i,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.om,A.C(A.u(A.a([D.eDz,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.i,p,p,new A.o(p,p,p,v,u,D.bGF,B.n),p,p,p,p,p,p,p,p)}}
C.a9K.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.i,w,w,new A.o(B.aR,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.ba1.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b3.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.a9(0,B.G,B.b3.j(0.1),B.cC,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.X,!0,q,A.aH(!1,o,!0,A.eq(A.d8(new A.B(E.UY,A.u(A.a([A.p(q,A.U(r.d,t,q,q,q,22),B.i,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rC,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bw,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cn,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.i,B.K,0,q,q,q,q,q,B.aa)}}
C.ba6.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aR.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.eq(new A.B(B.eM,A.A(A.a([A.p(v,D.bzg,B.i,v,v,new A.o(q,v,A.H(B.aR.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rC,v,v,v),B.bb,A.C(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.U(B.hd,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.i,B.K,0,v,v,v,v,v,B.aa)}}
C.XZ.prototype={
S(){return new C.azQ()},
gd5(){return this.c}}
C.azQ.prototype={
Z(){this.a0()
this.a63()},
a63(){var w=0,v=A.j(x.H),u=this,t
var $async$a63=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aYC(u.a.c,B.B5),$async$a63)
case 2:t=e
if(u.c!=null)u.n(new C.dJB(u,t))
return A.h(null,v)}})
return A.i($async$a63,v)},
adM(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$adM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dJC(q))
t=4
p=A.fP7(q.a.d,B.B5)
if(p==null){n=A.ba("Could not read this QR code.")
throw A.O(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aox(n.e,m,l,B.B5,p,n.f),$async$adM)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dJD(q))
q.c.E(x.q).f.P(D.ehb)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a5(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(B.a.dZ(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dJE(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adM,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.K(d).ax.a===B.H,o=p?B.iQ:B.oM,n=p?B.hl:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eK(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.eRR,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aR.j(0.35),B.r,1)
u=A.ph(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aR,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.C(A.p(q,A.u(A.a([B.P,u,B.bv,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.ai,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b5,B.j,0,B.p),B.i,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ak:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcg1()
if(u)u=B.GH
else u=A.U(r.e===!0?B.hr:B.af0,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a8(1/0,q,A.ew(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cb,q,q,q),t,A.d9(q,q,q,q,q,q,q,q,q,B.aR,q,B.h0,q,q,q,new A.ay(B.aR.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.B(B.jz,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ai,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.U)
w.push(new A.a8(1/0,q,A.bJ(B.yd,new C.dJF(d),A.bk(B.aR,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.cg(m,o,new A.B(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Y_.prototype={
S(){return new C.bf8(A.y4(B.w3,B.n_,B.rZ))}}
C.bf8.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cg(A.eK(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eKG,w,w,w,1,w,!0),B.x,A.y3(this.d,B.bP,new C.dJT(this,d)),w,!1,!1,w,w)}}
C.aUx.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Nj,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ld.prototype={}
C.a3M.prototype={
S(){return new C.beS(null,null)}}
C.beS.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bh(v,B.rs,v,1,v,w)
w.e=A.bh(v,B.oQ,v,1,v,w)
w.a.toString
w.d.cF(0)
w.e.cF(0)},
bo(d){var w,v,u=this
u.bz(d)
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
this.bnB()},
B(d){var w,v,u=this,t=B.d.dP(D.a_p,new C.dwa(u),new C.dwb())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cmG(A.c4(new A.h2(A.a([w,v],x.dS)),new C.dwc(u,t),null),!0)}}
C.beR.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aVh(d,e)
break
case"house":p.lu(d,e,D.cJ8)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.a1()
t=A.T()
t.r=B.c.j(0.18+v*0.12).gt(0)
d.aw(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lz(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zL(d,e,12)
p.wQ(d,e,B.kK,5,14)
break
case"grocery":p.c5u(d,e)
break
case"calculator":p.c5b(d,e)
break
case"lumber":p.c5C(d,e)
break
case"kitchen":p.c5x(d,e)
break
case"landscape":p.lu(d,e,D.cJA)
s=new A.b_($.a1().r,B.au,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.N(new A.bj(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.N(new A.dj(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.N(new A.dj(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.N(new A.aw(t,w))
s.N(new A.aw(0,w))
s.N(new A.bX())
w=A.T()
w.r=B.fn.j(0.85).gt(0)
d.b4(s,w)
p.zL(d,e,8)
p.wQ(d,e,B.iy,4,18)
break
case"plumbing":p.c5L(d,e)
break
case"electrical":p.lu(d,e,D.cSQ)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.a1()
u=A.T()
u.r=B.c.j(q*0.12).gt(0)
d.bp(new A.af(0,0,0+e.a,0+e.b),u)
p.lz(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lz(d,e,B.n7.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zL(d,e,10)
break
case"store":p.c5U(d,e)
break
case"paint_remodel":p.c5G(d,e)
break
case"roofing":p.c5N(d,e)
break
case"warehouse":p.c60(d,e)
break
case"vehicles":p.c5Z(d,e)
break
case"farm":p.c5o(d,e)
break
case"restaurant":p.c5M(d,e)
break
case"tools":p.c5X(d,e)
break
case"wallet":p.c6_(d,e)
break
case"concrete":p.c5h(d,e)
break
case"blueprint":p.c59(d,e)
break
default:p.aVh(d,e)}},
lu(d,e,f){var w,v=new A.af(0,0,0+e.a,0+e.b)
$.a1()
w=A.T()
w.saz(new A.a7(B.ax,B.aE,B.w,f,null,null).aB(0,v))
d.bp(v,w)},
lz(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gef()/2-h
$.a1()
w=A.T()
w.b=B.aj
w.c=2.4
w.r=f.gt(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.c1(q,p)
r=w.M()
v.drawArc.apply(v,[A.cz(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wQ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a1()
q=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gt(0)
p=q.M()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zL(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.J(s*0.17,0.9)
p=B.k.J(s*0.23,0.85)
$.a1()
o=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.r=B.c.j(0.2+r*0.6).gt(0)
n=o.M()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aVh(d,e){var w,v=this
v.lu(d,e,D.cRM)
w=v.c
v.lz(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lz(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bEn(d,e,B.hB,w)
v.wQ(d,e,B.c.j(0.7),6,8)},
bEn(d,e,f,g){var w,v,u,t,s,r,q,p
$.a1()
w=A.T()
w.r=f.j(0.35).gt(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.M()
s.drawRect(A.cz(new A.af(16,q,t,q+3)),p)
p.delete()}},
c5u(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lu(d,e,D.c0U)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.J(s,3)
p=Math.sin(r)
o=B.o.aj(s,3)
n=Math.cos(r*0.8)
m=B.o.J(s,2)
$.a1()
l=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.r=D.cHA[B.o.J(s,4)].j(0.85).gt(0)
k=l.M()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lz(d,e,B.c.j(0.35),w,16)
j.wQ(d,e,B.iy,5,12)},
c5b(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lu(d,e,D.c1_)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gef()
$.a1()
q=A.T()
q.r=B.c.j(0.1+u*0.12).gt(0)
d.aw(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.jF(g,g,g,g,g,B.a5,B.cp,g,B.f3,B.co)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cL2[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.J(o,2)
p.saR(0,new A.eE(r,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fK()
p.a6(d,new A.v(t*(0.08+B.o.J(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aj(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c11[o]
l=B.kJ.j(0.28+0.3*Math.sin(n))
k=B.o.J(o,2)
p.saR(0,new A.eE(m,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fK()
p.a6(d,new A.v(t*(0.55+B.o.J(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aj(o,3)*0.38)+Math.sin(n)*6))}h.lz(d,e,B.c.j(0.35),w*1.5,14)
h.lz(d,e,B.eJ.j(0.55),-v*3.141592653589793*2,8)
h.lz(d,e,B.yW.j(0.4),r*2.8,22)
h.wQ(d,e,B.oG,8,10)
h.zL(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.J(w+o*0.22,0.9)
$.a1()
r=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gt(0)
r.c=1.2
i=r.M()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c5C(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,Ac.aql)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bZ(new A.af(20,q,u,q+10),B.kF)
$.a1()
o=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.r=A.aq(B.hA,B.nL,(r+1)/2).gt(0)
n=o.M()
t.drawRRect(A.fL(p),n)
n.delete()}m.lz(d,e,B.hA.j(0.35),w,15)
m.zL(d,e,8)},
c5x(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lu(d,e,D.cI1)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.J(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.J(r*0.13,0.7)
$.a1()
l=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.r=B.c.j(0.25+p*0.55).gt(0)
k=l.M()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lz(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.wQ(d,e,B.pR,4,14)},
c5L(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lu(d,e,D.cy6)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.J(s,0.12)
$.a1()
n=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
n.b=B.aj
n.c=2
n.r=B.c.j(0.45-q*0.12).gt(0)
m=n.M()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wQ(d,e,B.nS,6,12)
l.lz(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c5U(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lu(d,e,D.cek)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bZ(new A.af(q,14,q+u,22),B.jK)
$.a1()
p=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.fo,B.bJ,(r+1)/2).gt(0)
o=p.M()
t.drawRRect(A.fL(q),o)
o.delete()}n.lz(d,e,B.c.j(0.3),w,16)
n.zL(d,e,8)
n.wQ(d,e,B.tR,5,13)},
c5G(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cDp)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.J(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bZ(new A.af(q,p,q+8,p+(18+r*22)),B.hZ)
$.a1()
q=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=[B.i3,B.dC,B.bJ,B.eY][s].j(0.85).gt(0)
o=q.M()
t.drawRRect(A.fL(p),o)
o.delete()}this.lz(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c5N(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cBa)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.J(v+s*0.12,0.75))
q=B.o.J(s,4)*0.22
$.a1()
p=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.25).gt(0)
p.c=1.5
o=p.M()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wQ(d,e,B.ct,7,11)},
c60(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.cgX)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bZ(new A.af(p,o,p+(t-r*8),o+16),B.kF)
$.a1()
p=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.ct,B.aN,(Math.sin(q)+1)/2).gt(0)
n=p.M()
s.drawRRect(A.fL(o),n)
n.delete()}this.lz(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c5Z(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cWk)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.J(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.J(s,2)*0.08)
q=A.bZ(new A.af(r,q,r+28,q+8),B.kF)
$.a1()
p=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.35+s*0.08).gt(0)
o=p.M()
t.drawRRect(A.fL(q),o)
o.delete()}this.zL(d,e,6)},
c5o(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.cGM)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.a1()
s=A.T()
s.r=B.n7.j(0.75).gt(0)
d.aw(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.r=B.h7.j(0.85).gt(0)
o.c=3
n=o.M()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lz(d,e,B.n7.j(0.35),w,14)},
c5M(d,e){var w,v,u,t,s,r,q,p,o=this
o.lu(d,e,D.cIY)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.dy(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a1()
q=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.22).gt(0)
p=q.M()
t.drawOval(A.cz(r),p)
p.delete()}o.wQ(d,e,B.pR,5,16)
o.zL(d,e,7)},
c5X(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,D.cUb)
w=m.c
v=w*3.141592653589793
m.lz(d,e,B.nL.j(0.55),v*3,10)
m.lz(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.a1()
o=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.r=B.nL.j(0.8).gt(0)
n=o.M()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c6_(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,D.cWN)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bZ(new A.af(p,o,p+36,o+22),B.jK)
$.a1()
p=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.iy,B.n7,q).gt(0)
n=p.M()
s.drawRRect(A.fL(o),n)
n.delete()}m.zL(d,e,9)
m.lz(d,e,B.c.j(0.4),w*2.2,12)},
c5h(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.cNx)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c1(new A.v(v,u),34)
$.a1()
s=A.T()
s.b=B.aj
s.c=5
s.r=B.c.j(0.45).gt(0)
d.fO(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.r=B.cg.j(0.85).gt(0)
n=o.M()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c59(d,e){var w,v,u,t,s,r,q,p
this.lu(d,e,D.cJQ)
$.a1()
w=A.T()
w.r=B.c.j(0.12).gt(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.M()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.M()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.J(t*0.85,1)
$.a1()
u=A.T()
u.r=B.dC.j(0.45).gt(0)
d.bp(new A.af(0,p,0+v,p+6),u)
this.lz(d,e,B.kK.j(0.45),-t*3.141592653589793*2,11)},
ao(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apc.prototype={
XA(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aM1(),$async$XA)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a5X(s),$async$XA)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$XA,v)},
acq(d){return this.c8e(d)},
c8e(d){var w=0,v=A.j(x.H),u=this,t
var $async$acq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hLB(d),$async$acq)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$acq,v)},
B(d){var w,v,u,t=null,s=A.K(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.j5:B.iv
w=x.p
v=A.a([C.aMo(!0,B.pH,1/0,B.oY,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.x.j(0.35)],x.O)
v.push(A.bQ(new A.bE(B.b4,t,t,new A.B(B.wa,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ard,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a7(B.b4,B.bc,B.w,u,t,t),B.n),B.ba))}v.push(A.an(8,A.A(A.a([A.C(A.dn(D.btn,D.eAc,new C.c9F(this,d),A.bk(B.aR,t,t,t,B.c,t,B.jW,t,t,t,t,B.c6)),1),B.ab,A.C(A.ew(D.bBe,D.eNA,this.gc_v(),A.d9(t,t,B.x.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jW,t,t,D.aPb,t,t,t,B.c6)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fY(1.7777777777777777,A.aD(!1,B.X,!0,B.pH,new A.am(B.W,t,B.aX,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.aa),t)}}
C.aHB.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdA())
w.aX$=null
w.a2()}}
C.aPe.prototype={}
C.aPd.prototype={}
C.aNj.prototype={}
C.WD.prototype={
S(){return new C.avb()}}
C.avb.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.b9("",B.aY,B.aL)
v=$.as()
u.d!==$&&A.aO()
u.d=new A.ao(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.as()
w.O$=0
this.a2()},
Iu(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.E(x.q).f.P(D.ehF)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).K(new C.aPe(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.K(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bAW,B.i,n,n,new A.o(B.aR.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.C(A.u(A.a([i,B.bw,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bk:B.bu,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aF(n,n,n,n,A.U(B.cu,m?B.bk:B.bu,n,n,n,n),n,n,n,new C.cSl(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bk:B.bu,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bk:B.bu,n,n,n,n,n,n,n,n,11,n,n,B.cn,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fPn(new C.cSm(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aN:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a_,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.j5:B.iv
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.cg
t=A.aI(n,B.T,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bn(n,new A.b0(4,r,B.d9),n,n,n,n,n,n,!0,new A.b0(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cSn(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,W.GL,n,n,n,n)
u=m?B.aN:B.aG
m=m?B.dT:B.cg
return A.ey(n,l,new A.d3(B.l9,A.ce(A.u(A.a([j,B.aT,i,B.aw,w,B.P,v,B.aT,t,B.bv,A.A(A.a([A.C(A.dU(B.dd,new C.cSo(d),A.d9(n,n,n,n,n,n,n,n,n,u,n,n,B.c9,n,new A.b5(A.m(12),B.V),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.av,A.C(A.bJ(D.eNP,o.ga_v(),A.bk(B.aR,n,n,n,B.c,n,B.c9,n,new A.b5(A.m(12),B.V),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zx,n,n,B.af),n),n,n,n,T.zy,B.cZ,n,new A.b5(k,B.V),n)}}
C.WC.prototype={
S(){return new C.ava()}}
C.ava.prototype={
Z(){this.a0()
var w=$.as()
this.d!==$&&A.aO()
this.d=new A.ao(B.aq,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.as()
w.O$=0
this.a2()},
Iu(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.E(x.q).f.P(D.efm)
return}v=this.c
v.toString
A.a6(v,!1).K(new C.aPd(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.K(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.bxD,B.i,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.C(A.u(A.a([l,B.bw,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bk:B.bu,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aF(q,q,q,q,A.U(B.cu,p?B.bk:B.bu,q,q,q,q),q,q,q,new C.cSh(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aR.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aR.j(0.25),B.r,1)
u=A.U(B.aeM,B.aR.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.C(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a_,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.i,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a_,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.j5:B.iv
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.cg
v=A.aI(q,B.T,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bn(q,new A.b0(4,t,B.d9),q,q,q,q,q,q,!0,new A.b0(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ad,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cSi(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.k9,q,q,q,q)
w=p?B.aN:B.aG
p=p?B.dT:B.cg
return A.ey(q,o,new A.d3(B.l9,A.ce(A.u(A.a([m,B.aT,l,B.aC,v,B.bv,A.A(A.a([A.C(A.dU(B.dd,new C.cSj(d),A.d9(q,q,q,q,q,q,q,q,q,w,q,q,B.c9,q,new A.b5(A.m(12),B.V),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.av,A.C(A.bJ(D.eTW,this.ga_v(),A.bk(B.bU,q,q,q,B.c,q,B.c9,q,new A.b5(A.m(12),B.V),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zx,q,q,B.af),q),q,q,q,T.zy,B.cZ,q,new A.b5(n,B.V),q)}}
C.W9.prototype={
S(){return new C.atX()}}
C.atX.prototype={
Z(){var w,v=this
v.a0()
w=$.as()
v.d!==$&&A.aO()
v.d=new A.ao(B.aq,w)
v.e!==$&&A.aO()
v.e=new A.ao(new A.b9("1",B.aY,B.aL),w)
v.f!==$&&A.aO()
v.f=new A.ao(B.aq,w)
v.r!==$&&A.aO()
v.r=new A.ao(B.aq,w)},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.as()
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
gHP(){var w,v=this.e
v===$&&A.c()
w=A.d_(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gafv(){var w=this.f
w===$&&A.c()
w=A.d_(B.a.i(w.a.a))
return w==null?0:w},
gaY1(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aJ2(d){var w,v=B.k.D(this.gHP()+d,0.25,999999),u=B.k.lM(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.L(v))
else{u=B.k.ab(v,2)
w=A.ad("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saR(0,u)
this.n(new C.cpT())},
atc(d,e,f,g){var w=null,v=g!=null?A.U(g,B.aR,w,w,w,20):w,u=d.a,t=u?B.j5:B.iv,s=A.m(14),r=A.m(14)
u=u?B.dT:B.cg
return A.bn(w,new A.b0(4,s,B.d9),w,B.bC,w,w,w,w,!0,new A.b0(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b0(4,A.m(14),B.a6c),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c_w(d,e,f){return this.atc(d,e,f,null)},
Iu(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gafv()<=0){s.c.E(x.q).f.P(D.ejw)
return}r=s.c
r.toString
v=s.gHP()
u=s.gafv()
t=s.gaY1()
A.a6(r,!1).K(new C.aNj(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.K(d).ax.a===B.H,m=new C.t1(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aR.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.brj,B.i,o,o,new A.o(o,o,A.H(B.aR.j(0.35),B.r,1),h,o,new A.a7(B.a1,B.a7,B.w,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.C(A.u(A.a([h,B.bw,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bk:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.cn,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aF(o,o,o,o,A.U(B.cu,n?B.bk:B.bu,o,o,o,o),o,o,o,new C.cpZ(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a_,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aI(o,B.T,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.atc(m,"Item name (optional)","Lumber, paint, labor\u2026",B.KV),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,W.GL,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bk:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.j5:B.iv
t=A.m(14)
s=A.H(n?B.dT:B.cg,B.r,1)
r=A.aF(o,o,o,o,A.U(B.El,n?B.aN:B.aG,o,o,o,20),o,o,o,new C.cq_(p),o,o,o,o,o,B.c6)
q=p.e
q===$&&A.c()
q=A.aI(o,B.T,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bCM,B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,B.e_,o,o,o,1,o,o,!1,"\u2022",o,new C.cq0(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a8(52,o,q,o),A.aF(o,o,o,o,A.U(B.hF,n?B.aN:B.aG,o,o,o,20),o,o,o,new C.cq1(p),o,o,o,o,o,B.c6)],w),B.m,o,B.e,B.R,0,o,o),B.i,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.C(A.aI(o,B.T,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.atc(m,"Amount","0.00",B.hG),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,B.e_,o,o,o,1,o,o,!1,"\u2022",o,new C.cq2(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.z(new A.I(D.cDR,new C.cq3(p,m),t),t.k("ai.E"))
i=A.a([i,B.bv,v,B.aC,h,B.P,s,B.ac,A.cf(B.bI,u,B.by,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.U,A.aI(o,B.T,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c_w(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cq4(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.k9,o,o,o,o)],w))}i.push(B.aT)
h=B.aR.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aR.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bk:B.bu,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gHP()===B.k.lM(p.gHP())?B.k.L(p.gHP()):p.gHP()
s=p.gaY1()
r=A.zt(p.gafv())
i.push(A.p(o,A.A(A.a([A.C(A.u(A.a([u,B.aw,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bk:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.byb(p.gHP()*p.gafv(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.i,o,o,new A.o(o,o,v,h,o,new A.a7(B.a1,B.a7,B.w,j,o,o),B.n),o,o,o,o,B.iB,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.dT:B.cg
h=A.d9(o,o,o,o,o,o,o,o,o,o,o,o,B.c9,o,new A.b5(j,B.V),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.C(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cq5(d),h),1),B.av,A.C(A.dn(D.aic,D.eQh,p.ga_v(),A.bk(B.aR,o,o,0,B.c,o,B.c9,o,new A.b5(A.m(14),B.V),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ey(o,l,new A.d3(S.a6A,A.ce(A.u(i,B.al,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A5.qa,o,o,B.af),o),o,o,o,B.JE,B.cZ,o,new A.b5(k,B.V),o)}}
C.ZF.prototype={
S(){return new C.bqY()}}
C.bqY.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.as()
u.d!==$&&A.aO()
u.d=new A.ao(new A.b9(w,B.aY,B.aL),v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.as()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.K(d).ax.a===B.H,q=r?B.dR:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aN:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aN:B.aG,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.j5:B.iv
v=A.aI(s,B.T,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bn(s,new A.b0(4,A.m(12),B.d9),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eT6(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.C(A.dU(B.dd,new C.eT7(d),s),1)
r=A.bk(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ey(s,q,new A.B(B.zx,A.u(A.a([o,B.aC,v,B.aT,A.A(A.a([u,B.av,A.C(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eT8(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cZ,s,new A.b5(p,B.V),s)}}
C.a8O.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.DX.prototype={
S(){return new C.bqW(null,null)}}
C.bqW.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,D.bcl,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bpT()},
gbre(){switch(this.a.r.a){case 1:return A.a([B.aR,B.bU,B.aW],x.O)
case 2:return A.a([B.bo,B.aR,B.aW],x.O)
case 3:return A.a([B.b3,B.cf,B.j6],x.O)
case 4:return A.a([B.hS,B.bU,B.eS],x.O)
case 0:return A.a([B.aR,B.bU,B.aW],x.O)}},
B(d){var w=A.K(d),v=this.d
v===$&&A.c()
return new A.es(A.c4(v,new C.eT4(this,new C.t1(w.ax.a===B.H)),null),null)}}
C.atQ.prototype={
S(){return new C.bqX(null,null)}}
C.bqX.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,B.mr,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bpU()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eT5(this),null)}}
C.bqV.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bZ(new A.af(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b2(w,w))
u=new A.b_($.a1().r,B.au,null,null,A.a([],x.v))
u.N(new A.j1(v))
w=A.T()
w.b=B.aj
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gt(0)
d.bi(v,w)
w=A.T()
w.b=B.aj
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gt(0)
d.b4(u,w)
w=A.zS(u)
t=A.a([],x.f5)
w=new A.xL(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b7(A.jE('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FI(w,r)
w.lc()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aMi(d,q,r,o,0,0.2,4.2,0.92)
p.aMi(d,q,r,s,0.52,0.11,3.2,0.58)}},
aMi(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.J(g+h,1)*f,s=A.h9q(e.a.a,e,t,t+f*i,!0),r=A.bwG(s.gbM().a.getBounds())
$.a1()
w=A.T()
w.b=B.aj
w.c=j
w.d=B.bZ
w.f=!0
v=this.f
u=k*this.e
w.saz(new A.a7(B.a1,B.a7,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.F5,null).aB(0,r))
d.b4(s,w)},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aJH.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aJI.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.t1.prototype={}
C.apb.prototype={
S(){return new C.aBf()},
gdQ(){return this.c}}
C.aBf.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adh()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Jl(w,v)
this.a2()},
adh(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bwN(t.c,t.d.a),$async$adh)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.esu(u,s))
return A.h(null,v)}})
return A.i($async$adh,v)},
NZ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$NZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.esl(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Jl(t,s),$async$NZ)
case 2:if(u.c!=null)u.n(new C.esm(u))
return A.h(null,v)}})
return A.i($async$NZ,v)},
Ou(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ou=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.K(p)
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.ess(t,new C.t1(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$Ou)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a5X(q),$async$Ou)
case 6:case 5:t.n(new C.est(t,r))
w=7
return A.b(t.NZ(),$async$Ou)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ou,v)},
Tr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Tr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hLm(r),$async$Tr)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.esg(t,new C.qk(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.NZ(),$async$Tr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Tr,v)},
c4s(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h1v(t,new C.esk(u),w,v)},
a7L(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.i,w,w,new A.o(w,w,new A.c2(new A.ay(v,2.5,B.r,-1),B.V,B.V,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aOY,w,w,B.n),w,22,w,w,w,w,w,22)},
a6P(d){return this.bCI(d)},
bCI(d){var w=0,v=A.j(x.H),u=this
var $async$a6P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.esj(u,d))
w=2
return A.b(u.NZ(),$async$a6P)
case 2:return A.h(null,v)}})
return A.i($async$a6P,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.K(a2).ax.a===B.H,e=f?B.bV:B.iN,d=A.m(8),a0=A.U(N.Wr,f?B.bk:B.bu,g,g,g,16),a1=x.p
a0=A.aH(!1,d,!0,new A.B(B.DA,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bk:B.bu,g,g,g,g,g,g,g,g,g,g,g,B.a_,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.esv(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.W,g,B.aX,B.q,A.a([A.bw(A.m(22),C.aMo(!0,A.m(22),1/0,B.oY,g,d,1/0),B.ap),A.an(10,A.dn(D.bvO,D.eSj,h.gaVZ(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.fX,g,new A.b5(A.m(12),B.V),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.a9(0,B.G,B.aR.j(f?0.5:0.38),B.eO,22),new A.a9(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.a9(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.am(B.W,g,B.aX,B.q,A.a([C.aMo(!0,A.m(16),1/0,B.Ko,g,r.c,1/0),A.bQ(g,new A.o(g,g,g,g,g,new A.a7(B.b4,B.bc,B.w,A.a([B.c.j(0.06),B.K,B.x.j(0.22)],x.O),g,g),B.n),B.ba),A.an(g,h.a7L(!0),g,g,8,g,8,g),A.an(g,A.cnq(h.a7L(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.cnq(h.a7L(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.cnq(h.a7L(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dn(D.brT,D.eMC,h.gaVZ(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.fX,g,new A.b5(A.m(12),B.V),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.i,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.i,g,g,new A.o(g,g,g,d,v,D.bDx,B.n),g,g,g,g,B.ni,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aYL,B.n5,B.fM],u):A.a([B.aW,B.aR,B.bU],u)
t=x.V
s=A.a([new A.a9(0,B.G,B.aR.j(f?0.45:0.35),B.eO,24)],t)
r=A.m(22)
p=A.an(g,A.U(B.jC,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.i,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.fW,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aC,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.byb(h.d.gvY(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cn,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.C(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.j7.j(0.75),B.r,1.6)
t=A.a([new A.a9(0,B.G,B.b3.j(0.28),B.cC,14)],t)
j=B.b3.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.am(B.W,g,B.a9,B.q,A.a([p,new A.B(D.bgR,A.A(A.a([o,B.av,A.aD(!1,B.X,!0,g,A.aH(!1,n,!0,A.eq(new A.B(A9.UX,A.u(A.a([A.p(g,D.ahK,B.i,g,g,new A.o(j,g,A.H(B.b3.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.hh,D.eCK],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc4r(),g,g,g,g,g,g,g),B.i,B.K,0,g,g,g,g,g,B.aa)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.i,g,g,new A.o(g,g,g,v,s,new A.a7(B.ax,B.aE,B.w,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fY(1.7777777777777777,d,g),B.aT,w,B.P,u,B.bv,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.bd,A.dn(Ae.Yc,D.eAK,h.gbrH(),A.bk(B.aR,g,g,g,B.c,g,B.iU,g,new A.b5(A.m(12),B.V),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dT:B.cg,B.r,1)
t=A.U(B.WM,f?B.bk:B.bu,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.U,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bk:B.bu,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.i,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.uc,g,g,1/0))}else B.d.v(d,new A.I(w,new C.esw(h,new C.t1(f)),A.S(w).k("I<1,r>")))
if(h.e)d.push(new A.B(B.zm,A.at(A.md(g,f?B.bk:B.bu,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cg(g,e,A.br(!0,A.u(A.a([new A.B(B.zr,a0,g),A.C(A.ce(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wm,g,g,B.af),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bv8(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.a9(0,B.G,B.x.j(r?0.35:0.08),B.cC,12)],x.V),n=A.m(16),m=A.p(u,u,B.i,u,u,D.aRD,u,u,u,u,u,u,u,5),l=B.aR.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.U(s?B.hI:B.fP,B.aW,u,u,u,20),B.i,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.a0,u,u,u,A.l(u,u,r?B.aN:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcHZ()
v=A.zt(d.d)
B.d.v(t,A.a([B.aw,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bk:B.bu,u,u,u,u,u,u,u,u,12,u,u,B.a_,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b5,B.R,0,B.p)}t=A.C(t,1)
k=A.a([B.aR.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.byb(d.c*d.d,B.aW,!1,B.u),B.i,u,u,new A.o(u,u,u,w,u,new A.a7(B.a1,B.a7,B.w,k,u,u),B.n),u,u,u,u,B.fX,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.KC(A.A(A.a([m,A.C(new A.B(B.ac6,A.A(A.a([l,B.bb,t,B.ab,k,A.aF(u,u,u,u,A.U(B.cu,(r?B.bk:B.bu).j(0.75),u,u,u,20),u,u,u,new C.esh(this,d),u,u,u,u,u,B.c6)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.al,u,B.e,B.j,0,u,u),u),B.ap),B.i,u,D.aQw,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d6,u,u,u,u)}}
C.aaO.prototype={
D_(d){return this.bE_(d)},
bE_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oy(d,o,!1),$async$D_)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).K(null)
w=4
return A.b(A.bK(A4.zk,null,x.H),$async$D_)
case 4:s=t.d
w=5
return A.b(C.fm1(!0,o,s),$async$D_)
case 5:r=f
q=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.EM(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$D_)
case 6:p=f
w=7
return A.b(A.ox(o,!1),$async$D_)
case 7:if(d.e==null){w=1
break}d.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$D_,v)},
XB(d){return this.ck0(d)},
ck0(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$XB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oy(d,s,!1),$async$XB)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).K(null)
A.hl(d,new C.ap5(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.ox(s,!1),$async$XB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XB,v)},
O_(d){return this.cge(d)},
cge(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).K(null)
w=3
return A.b(A.hl(d,D.aA5,!0,"NgmyWorksheetProjectScan",x.N),$async$O_)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.byc(s),$async$O_)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.E(x.q).f.P(D.eiF)
w=1
break}q=C.fFJ(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$O_)
case 5:if(d.e==null){w=1
break}d.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$O_,v)},
XC(d){return this.crz(d)},
crz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).K(null)
w=3
return A.b(C.bxL(),$async$XC)
case 3:s=f
if(s==null){w=1
break}r=C.fFJ(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$XC)
case 4:if(d.e==null){w=1
break}d.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XC,v)},
B(d){var w=this,v=null,u=A.K(d).ax.a===B.H,t=new C.t1(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.a9(0,B.G,B.x.j(u?0.35:0.08),B.kC,36)],x.V),o=x.p
return A.br(!0,new A.B(B.u9,A.p(v,A.u(A.a([w.ciE(d,t,s),new A.B(D.bgg,A.u(A.a([w.aYU(t,"QR restore"),B.U,A.A(A.a([w.aU2(t,!0,B.iY,B.b3,B.b3,new C.esy(w,d),"Show to scan","QR code"),B.av,w.atd(t,B.iC,B.b0,B.bD,new C.esz(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d1,w.aYU(t,"Backup files"),B.U,A.A(A.a([w.atd(t,B.hd,B.aR,B.bU,new C.esA(w,d),"Full copy","Backup file"),B.av,w.atd(t,M.x1,B.aZ,B.aM,new C.esB(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
ciE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eK,B.cU,B.ff],k):A.a([B.aW,B.aR,B.bU],k)
w=A.an(l,A.U(B.rV,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.i,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kR,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.a9(0,B.G,B.x.j(0.2),B.cC,12)],x.V)
r=this.d
s=A.p(l,C.aMo(!0,A.m(13),64,D.bn5,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a0,l,l,l,D.aJO,l,l,l)
r=C.byb(r.gvY(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.W,l,B.a9,B.q,A.a([w,new A.B(D.bgE,A.u(A.a([v,A.A(A.a([s,B.eG,A.C(A.u(A.a([u,B.aw,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.i,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fu,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.U(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.esx(d),l,l,l,A.p9(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aHd,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.i,l,l,new A.o(l,l,l,l,l,new A.a7(B.ax,B.aE,B.w,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
aYU(d,e){var w=null,v=A.p(w,w,B.i,w,w,new A.o(B.aR,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bk:B.bu,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aU2(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aaS:B.aN
if(e)w=B.b3.j(o?0.45:0.35)
else{w=o?B.dT:B.cg
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.a9(0,B.G,B.b3.j(0.12),B.cC,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.U(f,h,r,r,r,22),B.i,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rC,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aN:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.C(A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.eq(new A.B(E.UY,A.u(A.a([t,B.ac,u,B.bw,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bk:B.bu,r,r,r,r,r,r,r,r,11,r,r,B.cn,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.i,B.K,0,r,r,r,r,r,B.aa),1)},
atd(d,e,f,g,h,i,j){return this.aU2(d,!1,e,f,g,h,i,j)}}
C.ap5.prototype={
S(){return new C.bgt()}}
C.bgt.prototype={
Z(){this.a0()
this.abc()},
abc(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.byd(p.c,p.d),$async$abc)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.esb(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.esc(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abc,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.K(d).ax.a===B.H,f=g?B.yV:B.iN,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.U(B.eq,g?B.ak:B.ai,h,h,h,18),h,h,h,new C.esd(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.C(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.y2],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eK,B.cU,B.ff],s):A.a([B.aW,B.aR,B.bU],s)
r=x.V
q=A.a([new A.a9(0,B.G,B.aR.j(g?0.4:0.3),B.eO,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dQ,B.L,h,h)
p=C.byb(p.gvY(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.i,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fu,h,h,h)],u),B.m,h,B.b5,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.i,h,h,new A.o(h,h,h,t,q,new A.a7(B.ax,B.aE,B.w,s,h,h),B.n),h,h,h,h,E.Vj,h,h,1/0)
t=g?D.b5L:B.c
q=A.m(24)
p=A.H(w?B.b3.j(0.4):B.aR.j(0.3),B.r,1)
r=A.a([new A.a9(0,B.G,B.x.j(g?0.25:0.06),B.dl,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3y,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dKP)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.ph(h,h,!1,n,h,!0,!0,h,!1,B.c),B.i,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c2,h,h,h))}}o.push(B.aT)
n=w?B.b3:B.aR
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.b3:B.aR).j(0.35),B.r,1)
k=w?B.KD:B.La
k=A.U(k,w?B.b3:B.aR,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.C(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ak:B.ai,h,h,h,h,h,h,h,h,12,h,h,B.a_,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.i,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iU,h,h,h))
return A.cg(h,f,A.br(!0,A.u(A.a([new A.B(A1.JS,e,h),A.C(A.ce(A.u(A.a([s,B.aT,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.i,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rB,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.add,h,h,B.af),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.apa.prototype={
S(){return new C.aBe(A.y4(B.Ja,B.n_,B.rZ))}}
C.aBe.prototype={
p(){this.d.p()
this.a2()},
aH6(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.ir(w,d)},
c0m(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.hJw(t)
if(s!=null){this.aH6(s)
return}r=C.fTS(t)
if(r!=null)q=A.dk(r,p,0)
else q=!1
if(q){this.aH6(B.a.i(B.a.aV(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eK(A.a([A.aF(t,t,t,t,A.U(u.f?B.rM:X.KK,t,t,t,t,t),t,t,t,new C.esf(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.yV,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.eMw,t,t,t,1,t,!0),q=A.y3(u.d,B.bP,u.gc0l()),p=A.m(28)
p=A.at(A.p(t,t,B.i,t,t,new A.o(t,t,A.H(B.aR,B.r,3),p,A.a([new A.a9(2,B.G,B.aR.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.x.j(0.72)
v=A.m(16)
return A.cg(r,B.x,new A.am(B.W,t,B.aX,B.q,A.a([q,p,A.an(32,A.p(t,D.eLn,B.i,t,t,new A.o(w,t,A.H(B.aR.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iB,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aFZ.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.M3.prototype={
S(){return new C.aBg(D.a5x,A.a([],x.D))},
bl(){return this.r.$0()},
gdQ(){return this.c}}
C.aBg.prototype={
gcpE(){return J.bzi(this.e,0,new C.esY())},
Z(){this.a0()
$.aT.c_$.push(this)
this.uK()},
p(){$.aT.hE(this)
this.a2()},
iL(d){if(d===B.fl)this.uK()},
uK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Br(q.a.c).cI(0,B.kp),$async$uK)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.esU(q,p))
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
if(q.c!=null&&q.f)q.n(new C.esV(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uK,v)},
Gn(d){return this.bAU(d)},
bAT(){return this.Gn(null)},
bAU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hLo(l,d),$async$Gn)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l_(l,r,q,D.cNK,new A.N(Date.now(),0,!1))
w=4
return A.b(C.Jl(t.a.c,p),$async$Gn)
case 4:o=f
w=5
return A.b(t.uK(),$async$Gn)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.E(x.q).f.P(D.efR)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.E(q).f.P(D.ehz)
else n.E(q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D3(m)
case 1:return A.h(u,v)}})
return A.i($async$Gn,v)},
D3(d){return this.c4d(d)},
c4d(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$D3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hl(s,new C.apb(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$D3)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Jl(u.a.c,t),$async$D3)
case 5:case 4:w=6
return A.b(u.uK(),$async$D3)
case 6:return A.h(null,v)}})
return A.i($async$D3,v)},
uz(d){return this.bQe(d)},
bQe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bxL(),$async$uz)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hl(r,D.aA5,!0,"NgmyWorksheetProjectScan",x.N),$async$uz)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.byc(q),$async$uz)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.E(x.q).f
r.P(A.aZ(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fFJ(s)
w=15
return A.b(C.Jl(t.a.c,p),$async$uz)
case 15:o=f
w=16
return A.b(t.uK(),$async$uz)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.E(x.q).f.P(D.ehE)
w=1
break}r.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D3(p)
case 1:return A.h(u,v)}})
return A.i($async$uz,v)},
LV(d){return this.bzA(d)},
bzA(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$LV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cb(null,null,!0,null,new C.esF(d),s,null,!0,!0,x.y),$async$LV)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.o9(t.a.c,A.a([],x.D)),$async$LV)
case 6:w=7
return A.b(t.uK(),$async$LV)
case 7:s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.efW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$LV,v)},
c4q(d){var w=this.c
w.toString
A.c0(B.K,new C.esO(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
aZv(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.j5
else w=B.c
v=A.m(16)
u=A.H(p?B.dT:B.cg,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.U(e,d,r,r,r,22),B.i,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aN:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.p(r,A.u(A.a([s,B.ac,t,B.bw,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bk:B.bu,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.i,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.u8,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.i,B.K,0,r,r,r,r,r,B.aa)},
Y4(d,e){return this.c4e(d,e)},
c4e(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(B.K,new C.esJ(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Y4)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h1v(r,new C.esK(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.LX(d,e),$async$Y4)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Y4,v)},
aWA(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.U(e,f,u,u,u,22),B.i,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aH
else t=h.a?B.aN:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.C(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bk:B.bu,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.X,!0,u,A.aH(!1,u,!0,new A.B(B.Dx,A.A(A.a([s,B.bb,t,A.U(B.el,w?B.bk:B.bu,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.i,B.K,0,u,u,u,u,u,B.aa)},
caR(d,e,f,g,h,i){return this.aWA(!1,d,e,f,g,h,i)},
LX(d,e){return this.bzK(d,e)},
bzK(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$LX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kM(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$LX)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bwA(t.a.c,d.a),$async$LX)
case 6:w=7
return A.b(t.uK(),$async$LX)
case 7:r=t.c
if(r==null){w=1
break}r.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$LX,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===B.H,n=new C.t1(o),m=o?B.bV:B.iN
if(q.f)o=D.aWT
else{w=q.buo(n)
v=q.bPo(n)
u=q.gbrB()
if(o)t=B.j5
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aT,new C.DX(A.p(p,A.A(A.a([q.awt(P.Kn,"Projects",n,D.a5x),q.awt(B.uj,"Cashier",n,D.aN1),q.awt(B.DT,"Family Tree",n,D.f7h)],r),B.m,p,B.e,B.j,0,p,p),B.i,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ek,0.95,u,p),B.bv],r)
w=q.d
if(w===D.a5x){w=J.aa(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aN:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.bd,new C.atQ(q.gaLa(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aC,q.caT(n)],r))}else{o=q.a
if(w===D.aN1)u.push(new C.alk(o.c,n,p))
else{w=q.r
u.push(new C.amq(o.c,o.d,o.e,o.f,new C.et0(q),new C.et1(q),new A.cv(w,x.b4)))}}o=A.ce(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A6.JL,p,p,B.af)}return A.cg(p,m,A.br(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
buo(d){var w=null,v=A.m(8),u=d.a,t=A.U(N.Wr,u?B.bk:B.bu,w,w,w,16)
return A.aH(!1,v,!0,new A.B(B.li,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bk:B.bu,w,w,w,w,w,w,w,w,14,w,w,B.a_,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esC(this),w,w,w,w,w,w,w)},
gbrB(){switch(this.d.a){case 0:return D.a4Q
case 1:return D.eZL
case 2:return D.a4R}},
bPo(d){var w=null,v=A.m(15),u=A.a([new A.a9(0,B.G,B.aR.j(0.35),B.cv,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bxt,B.i,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bb,D.bkx,A.aD(!1,B.X,!0,w,A.aH(!1,A.m(12),!0,A.p(w,D.bv7,B.i,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esG(this,d),w,w,w,w,w,w,w),B.i,B.K,0,w,w,w,w,w,B.aa)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.DX(A.p(w,A.u(A.a([new A.B(E.V3,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a_,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aw,A.d(A.zt(this.gcpE()),w,w,w,w,w,w,D.exs,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.i,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u7,B.iB,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.i,w,w,new A.o(B.aR,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.eZK,w)},
awt(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aR:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.a9(0.5,B.G,B.aR.j(0.42),B.cC,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bk:B.bu
w=A.U(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bk:B.bu
return A.C(A.aD(!1,B.X,!0,u,A.aH(!1,s,!0,A.de(u,A.A(A.a([w,B.ey,new A.dp(1,B.cj,A.d(e,u,1,B.a0,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b5,B.j,0,u,u),u,u,B.cm,new A.o(r,u,p,q,o,u,B.n),B.i8,u,u,u,B.JO,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.esX(this,g),u,u,u,u,u,u,u),B.i,B.K,0,u,u,u,u,u,B.aa),1)},
caT(d){var w,v,u,t,s,r,q=this,p=null
if(J.ch(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bvc,B.i,p,p,new A.o(p,p,p,p,A.a([new A.a9(2,B.G,B.aR.j(0.5),B.eO,28)],x.V),D.bFJ,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.DX(A.p(p,A.u(A.a([t,B.d1,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bk:B.bu,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dZ,A.A(A.a([A.C(q.aMD(B.iC,"Scan QR",new C.esR(q),d),1),B.av,A.C(q.aMD(M.x1,"Upload file",new C.esS(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aC,A.bJ(D.eVD,q.gaLa(),A.bk(B.aR,p,p,p,B.c,B.h0,p,p,new A.b5(A.m(12),B.V),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.i,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bhF,1.05,D.a4Q,p)}w=J.b3(q.e,new C.esT(q,d),x.l)
w=A.z(w,w.$ti.k("ai.E"))
return new C.DX(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a4Q,p)},
aMD(d,e,f,g){var w=null,v=B.aR.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aR.j(0.45),B.r,1)
return A.aD(!1,B.X,!0,u,A.aH(!1,t,!0,A.p(w,A.u(A.a([A.U(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.evV,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.i,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ac0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.i,v,0,w,w,w,w,w,B.aa)},
caS(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.a([new A.a9(0,B.G,B.x.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bk:B.bu
n=A.bw(B.a68,new A.fY(1.7777777777777777,C.aMo(!0,B.fe,1/0,P.Kn,n,d.c,1/0),u),B.ap)
w=x.p
v=A.C(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aN:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.aw,A.d(""+d.d.length+" budget items \xb7 "+A.zt(d.gvY()),u,u,u,u,u,u,D.eu7,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.X,!0,u,A.aH(!1,o,!0,A.u(A.a([n,new A.B(B.bC,A.A(A.a([v,A.aF(u,u,u,u,A.U(A7.KZ,t?B.bk:B.bu,u,u,u,u),u,u,u,new C.esP(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.esQ(this,d),u,u,u,u,u,u,u),B.i,B.K,0,u,u,u,u,u,B.aa),B.i,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bsG.prototype={}
C.qk.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.D(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcHZ(){var w,v,u,t,s=this.c
if(s===B.k.lM(s))w=B.o.u(B.k.L(s))
else{v=B.k.ab(s,2)
u=A.ad("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l_.prototype={
gvY(){return B.d.cO(this.d,0,new C.cpk())},
ad(){var w=this,v=w.d,u=A.S(v).k("I<1,a0<n,@>>")
v=A.z(new A.I(v,new C.cpj(),u),u.k("ai.E"))
return A.D(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.aa()],x.N,x.z)},
b5h(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l_(w.a,w.b,v,u,w.e)},
b5_(d){return this.b5h(d,null)},
QB(d){return this.b5h(null,d)}}
C.FR.prototype={
a3(){return"FamilyGender."+this.b}}
C.hO.prototype={
ad(){var w=this
return A.D(["id",w.a,"name",w.b,"gender",C.fYo(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
az1(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hO(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ahG.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kh.prototype={
gakK(){var w=this.f
return new A.a3(w,new C.bI9(),A.S(w).k("a3<1>")).gH(0)},
ad(){var w=this,v=w.f,u=A.S(v).k("I<1,a0<n,@>>")
v=A.z(new A.I(v,new C.bI8(),u),u.k("ai.E"))
return A.D(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.aa(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hC9(w.y)],x.N,x.z)},
xx(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kh(w.a,v,u,t,s,r,w.r,q,p,o)},
b5g(d,e){var w=null
return this.xx(w,w,d,e,w,w,w,w)},
cy4(d,e,f,g,h,i,j){return this.xx(d,e,f,g,h,i,j,null)},
az6(d,e){var w=null
return this.xx(w,w,w,d,w,w,e,w)},
cwB(d){var w=null
return this.xx(w,w,w,w,w,w,d,w)},
cwY(d){var w=null
return this.xx(w,w,w,w,w,w,w,d)},
ayT(d){var w=null
return this.xx(w,w,w,w,d,w,w,w)},
cxB(d,e,f){var w=null
return this.xx(w,d,w,e,w,w,f,w)},
cwo(d){var w=null
return this.xx(w,w,d,w,w,w,w,w)},
cx9(d,e){var w=null
return this.xx(d,w,w,w,w,e,w,w)}}
C.cpl.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cpm.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDh.prototype={}
C.b4p.prototype={
bI(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b4p()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aU(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b4o.prototype={
gvj(){return!0},
gEv(){return this.z.b<this.b.length},
aOa(d){switch(0){case 0:return d.a.c}},
aNS(d){switch(0){case 0:return d.a.d}},
bIW(d,e){switch(0){case 0:return new A.hx(d,e)}},
bIk(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hi(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.is(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FB(b4)
switch(0){case 0:v=b5.b
u=new A.kP(0,v,0,1/0)
t=w===B.Qk
break}s=A.a([],x.gZ)
r=A.Q(x.cM,x.S)
for(b3=b1.z,q=B.d.h1(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hi(b4,u,!0)
f=b1.aOa(g)
f.toString
e=b1.aNS(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDh(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDh(k,j,i))}d=s.length
switch(0){case 0:q=b5.co(new A.hx(m,l))
a0=q.a
a1=q.b
b1.a=new A.is(0,0,a0,a1)
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
for(q=B.d.h1(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.J)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aOa(g)
e=b1.aNS(g)
e.toString
a9=b1.bIk(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bIW(a6,a3+a9)
b0=g.a
g.a=new A.is(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fY(d){var w,v,u,t,s,r=this
r.l5(d)
w=d.b
w.i3()
v=A.df()
u=r.a
v.e_(u.a,u.b,0,1)
w.pd(0,v)
for(u=r.z,u=B.d.dC(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fY(d)
w.nh(0)},
F_(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i3(){return this.z}}
C.bqZ.prototype={}
var z=a.updateTypes(["av<~>()","R(hO)","R(kh)","~()","R(mG)","a0<n,@>(kh)","G(kh,kh)","n(hO)","kh(a0<@,@>)","R(l_)","ep<n?>(hO)","tu()","a0<n,@>(mG)","XE(Z)","hO(a0<@,@>)","a0<n,@>(hO)","R(tu)","R(qk)","av<~>(l_)","mG(a0<@,@>)","G(l_,l_)","G(hO,hO)","n?(hO)","r(nK)","hO(hO)","cE(bq<n,E8>)","cE(Ia)","~(G)","G?(hO)","hO()","al<hO>()","aat(Z)","R(Ia)","B(hO)","~(FR)","WB(Z)","r(FR,n,a_)","n(n)","bq<n,al<a0<n,@>>>(n,al<mG>)","n(N)","+count,id,name(G,n,n)(kh)","kh(kh)","XZ(Z)","Y_(Z)","R(ld)","ld()","W9(Z)","n(kh)","WD(Z)","WC(Z)","X2(Z)","~(hO)","r(qk)","aaO(Z)","~(lB)","av<~>([n?])","P(P,l_)","r(l_)","P(P,qk)","a0<n,@>(qk)","qk(a0<@,@>)","R(ac_)","X0(Z)","X4(Z)","l_(a0<@,@>)","cu(FQ)","n(l_)","a0<n,@>(l_)","G(mG,mG)","G(hO)","kh(a0<n,@>)","ZF(Z)"])
C.feO.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.feN.prototype={
bdZ(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.ra(s,d,B.hf,E.Jg),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.O(r!=null&&A.Pf(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bdZ(d)},
$S:328}
C.feP.prototype={
$1(d){return d.b},
$S:116}
C.fny.prototype={
$1(d){var w=null
return A.ey(w,B.K,new F.Np(this.a,this.b,w),w,w,0,B.UZ,B.cZ,w,w,w)},
$S:45}
C.f5s.prototype={
$1(d){return d!=null},
$S:215}
C.f5t.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:215}
C.f5y.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:156}
C.fcy.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f4(d,w,w,w,A.h5(w,B.tm,w,w,w,w,w,w,w,B.dq,w,w,10.5,w,B.eh,w,!0,w,w,w,w),w),u=f?B.eh:B.ue
return new A.nQ(D.bdn,A.a75(A.a([new A.fF(130,w,v),new A.xN(1,B.DM,A.f4(e,w,w,w,A.h5(w,g==null?D.dM3:g,w,w,w,w,w,w,w,B.dq,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.w_,B.kZ))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1855}
C.fcx.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uw(999)
f=A.xH(A.l8(h,A.f4("Cashier",h,h,h,A.h5(h,D.xR,h,h,h,h,h,h,h,B.dq,h,h,10,h,B.eh,h,!0,h,h,h,h),h),h,new A.kf(D.dLV,h,f,B.hj,h),h,h,D.bdN,h))
w=A.xH(A.f4("Debt receipt",h,h,h,A.h5(h,h,h,h,h,h,h,h,h,B.dq,h,h,22,h,B.eh,h,!0,h,h,h,h),h))
v=A.xH(A.f4(C.vN(new A.N(Date.now(),0,!1),!0),h,h,h,D.a3F,h))
u=A.uw(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f4(s,h,h,h,A.h5(h,h,h,h,h,h,h,h,h,B.dq,h,h,14,h,B.eh,h,!0,h,h,h,h),h)
r=A.f4("Person who owes",h,h,h,D.a3F,h)
q=A.uw(10)
p=x.C
u=A.l8(h,A.xI(A.a([s,new A.fF(h,2,h),r,new A.fF(h,10,h),A.l8(h,A.xI(A.a([A.f4("Amount owed",h,h,h,D.a3F,h),new A.fF(h,2,h),A.f4(A.zt(t.c),h,h,h,A.h5(h,D.xR,h,h,h,h,h,h,h,B.dq,h,h,20,h,B.eh,h,!0,h,h,h,h),h)],p),B.q5,B.kZ),h,new A.kf(B.oh,h,q,B.hj,h),h,h,D.bd5,1/0)],p),B.q5,B.kZ),h,new A.kf(E.aB1,h,u,B.hj,h),h,h,D.beR,1/0)
q=new A.mZ(D.dLY,0.9,B.kg)
r=A.uw(12)
s=i.c
o=s.$2("Original due",C.vN(t.r,!1))
n=s.$2("Current due",C.vN(t.f,!1))
m=i.d
l=new A.mZ(m,1.1,B.kg)
k=A.uw(8)
j=i.a
k=A.a([o,n,new A.fF(h,6,h),A.l8(h,A.xH(A.f4(t.gaFD(),h,h,h,A.h5(h,m,h,h,h,h,h,h,h,B.dq,h,h,11,h,B.eh,h,!0,0.5,h,h,h),h)),h,new A.kf(h,new A.oZ(l,l,l,l),k,B.hj,h),h,h,D.bdW,1/0),new A.fF(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.xR))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.xR))
else{n=A.f4("Missed days ("+n+")",h,h,h,A.h5(h,B.tm,h,h,h,h,h,h,h,B.dq,h,h,10.5,h,B.eh,h,!0,h,h,h,h),h)
m=A.S(o).k("I<1,Qc>")
o=A.z(new A.I(o,new C.fcw(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fF(h,4,h),n,new A.fF(h,6,h),new C.b4o(5,5,new C.b4p(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fF(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fF(h,8,h),w,new A.fF(h,3,h),v,new A.fF(h,16,h),u,new A.fF(h,10,h),A.l8(h,A.xI(k,B.w_,B.kZ),h,new A.kf(h,new A.oZ(q,q,q,q),r,B.hj,h),h,h,B.aca,1/0)],p)
w=j.a
if(w!=null){v=new A.mZ(B.G9,1,B.kg)
B.d.v(f,A.a([new A.fF(h,16,h),A.f4("Debtor signature",h,h,h,A.h5(h,B.tm,h,h,h,h,h,h,h,B.dq,h,h,10,h,B.eh,h,!0,h,h,h,h),h),new A.fF(h,6,h),A.l8(h,new A.G5(w,B.Sl,h,h),h,new A.kf(h,new A.oZ(v,v,v,v),A.uw(6),B.hj,h),82,h,B.JQ,1/0)],p))}f.push(new A.fF(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f4(w,h,h,h,D.enm,h))
f.push(new A.fF(h,18,h))
f.push(A.xH(A.f4("NGMY.ORG",h,h,h,A.h5(h,D.xR,h,h,h,h,h,h,h,B.dq,h,h,14,h,B.eh,h,!0,1.8,h,h,h),h)))
return f},
$S:351}
C.fcw.prototype={
$1(d){var w=null,v=new A.mZ(D.Ga,0.7,B.kg),u=A.uw(999)
return A.l8(w,A.f4(C.vN(d,!1),w,w,w,A.h5(w,D.Ga,w,w,w,w,w,w,w,B.dq,w,w,9.5,w,B.eh,w,!0,w,w,w,w),w),w,new A.kf(w,new A.oZ(v,v,v,v),u,B.hj,w),w,w,D.biW,w)},
$S:1856}
C.bWF.prototype={
$1(d){var w=null,v=B.bR.j(0.08),u=A.m(999),t=A.H(B.bR.j(0.28),B.r,1)
return A.p(w,A.d(C.vN(d,!1),w,w,w,w,w,w,D.etD,w,w,w),B.i,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eu,w,w,w)},
$S:1857}
C.fo3.prototype={
$1(d){var w=null,v=A.aG(d,B.bM,x.n).w,u=A.m(26),t=A.aF(w,w,w,w,B.ai4,w,w,w,new C.fo0(d),w,w,w,w,w,B.c6),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ey(w,B.K,new A.d3(new A.aV(0,380,0,v.a.b*0.9),A.aD(!1,B.X,!0,u,new A.B(B.UO,A.u(A.a([new A.bE(B.a7,w,w,t,w),new A.dp(1,B.cj,A.ce(A.u(A.a([new A.es(new C.aUz(r,w),s),B.U,A.A(A.a([A.C(A.ew(B.xb,D.eSf,new C.fo1(s,r,d),A.d9(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eU,w,new A.b5(A.m(14),B.V),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.C(A.dn(B.Y3,D.ePc,new C.fo2(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eU,w,new A.b5(A.m(14),B.V),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.af),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.i,B.aG,0,w,w,w,w,w,B.aa),w),w,w,0,Ab.Vc,B.cZ,w,w,w)},
$S:45}
C.fo0.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.fo1.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ae$.x.h(0,t.a)
m=m==null?null:m.gb3()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.mb(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.fZ),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dH.gaL(s))
m=t.b
q=B.a.i(m.b)
p=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.al(o,0,32)
w=5
return A.b(A.re(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fo2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fj_(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.E(x.q).f
s.P(A.aZ(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fnW.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ey(w,B.aG,A.u(A.a([new A.B(D.beH,A.A(A.a([A.C(A.d(this.a,w,w,w,w,w,w,B.mQ,w,w,w),1),A.aF(w,w,w,w,B.kX,w,w,w,new C.fnU(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dp(1,B.cj,new A.B(B.iA,A.bw(A.m(14),A.fU(t,B.C,w,w,B.cl,B.dp,!1,w,!1,w,w),B.ap),w),w),new A.B(B.Jv,new A.a8(1/0,w,A.dn(B.qj,D.aKe,new C.fnV(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.V),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.JF,B.cZ,w,new A.b5(v,B.V),w)},
$S:45}
C.fnU.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.fnV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.re(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fo7.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ey(w,B.aG,new A.B(D.beO,A.u(A.a([A.A(A.a([D.bjM,A.aF(w,w,w,w,B.kX,w,w,w,new C.fo5(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.es(A.bw(A.m(14),A.p(w,A.b1(w,w,w,new C.b6v(s.ax,w),B.at),B.i,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ac,new A.a8(1/0,w,A.dn(B.qj,D.aKe,new C.fo6(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.V),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(v,B.V),w)},
$S:45}
C.fo5.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.fo6.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ae$.x.h(0,t.a)
n=n==null?null:n.gb3()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.mb(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.fZ),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.al(p,0,32)
r=J.fa(B.dH.gaL(s))
w=5
return A.b(A.re(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.f8c.prototype={
$1(d){return d.a===this.a},
$S:236}
C.dx2.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dwO.prototype={
bdc(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c0(t,new C.dwR(s,q,e),p,!0,!0,!1,B.Gq,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dwS(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bdc(d,e)},
$S:1858}
C.dwR.prototype={
$1(d){var w,v=null,u=this.c===B.uN,t=u?D.cT2:D.cPK
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aN:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.br(!0,new A.B(K.acI,A.u(A.a([u,B.aw,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bk:B.bu,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ig(!0,v,v,B.z,L.aHv,new C.dwQ(this.a,w,t,d),t.length,v,B.dJ,B.af,!0)],x.p),B.al,v,B.e,B.R,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:33}
C.dwQ.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cU.j(0.14)
else w=t.b.a.d.a?B.M:B.aN
v=A.m(14)
if(q)u=B.cU
else u=(t.b.a.d.a?B.bk:B.bu).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aH(!1,p,!0,A.p(B.C,C.aUy(r,26),B.i,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dwP(t.d,r),s,s,s,s,s,s,s)},
$S:186}
C.dwP.prototype={
$0(){A.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.dwS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dwM.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:93}
C.dwN.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cD(B.cm,e,v)
return new A.cZ(e,!1,A.iE(B.C,A.at(A.aD(!1,B.X,!0,v,new A.eh(new C.dwL(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.i,B.K,0,v,v,v,v,v,B.aa),v,v,v),v,new A.bb(t,new A.bm(0.96,1,u),u.k("bb<bB.T>"))),v)},
$S:31}
C.dwL.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bM,x.n).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bk:B.bu).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.C(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aH(!1,v,!0,new A.B(B.ek,A.U(B.cu,i.a.d.a?B.bk:B.bu,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dww(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a_,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aN8("Name")
r=l.a
q=r.d==null?k:new C.dwx(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bh:B.lM
n=A.H(B.cU.j(0.35),B.r,1)
m=r.d
t=A.aI(k,B.T,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b5a(new A.B(B.h9,A.aH(!1,p,!0,A.p(B.C,C.aUy(m==null?"\ud83d\udc64":A.fdk(r.e,m),18),B.i,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ad,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.k9,k,B.a3p,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bk:B.bu,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.A(A.a([A.C(i.aNJ("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dwy(r,a0),r.d===B.uN),1),B.ab,A.C(i.aNJ("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dwD(r,a0),r.d===B.a0q),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bE(B.a1,k,k,A.hg(D.bwP,D.eQO,new C.dwE(r,l.e,a0),A.fn(k,k,k,k,k,k,k,k,k,k,k,B.cU,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c6)),k)],u))
v.push(B.U)
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a_,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uG(A.ad("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aI(k,B.T,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aN9("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ad,k,k,s,k,k,B.e_,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.U)
t=i.a.d.a
s=t?B.M:B.aN
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bk:B.bu).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bk:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.a_,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vN(r.a,!1)
v.push(A.aD(!1,B.X,!0,q,A.aH(!1,p,!0,A.p(k,A.A(A.a([A.C(A.u(A.a([t,B.bw,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.btM],u),B.m,k,B.e,B.j,0,k,k),B.i,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dwF(r,d,a0),k,k,k,k,k,k,k),B.i,s,0,k,k,k,k,k,B.aa))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bk:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.U)
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aI(k,B.T,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aN8("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ad,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bk:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aV_(r.b.length!==0,B.mz,new C.dwG(r,i,a0),new C.dwH(r,a0),"Upload from gallery","ID photo"))
v.push(i.aV_(r.c.length!==0,D.bn3,new C.dwI(r,i,d,a0),new C.dwJ(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A8.a55("Signature (optional)",t,new C.dwK(a0),new C.dwz(a0,t),new C.dwA(d,t,a0),k))
v.push(B.aC)
i=i.a.d.a
t=i?B.bk:B.bu
s=(i?B.bk:B.bu).j(0.28)
s=A.C(A.dU(E.aK7,new C.dwB(d),A.d9(k,k,k,k,k,k,k,k,k,t,k,k,B.wb,k,new A.b5(A.m(10),B.V),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cU,k,k,k,B.c,k,B.wb,k,new A.b5(A.m(10),B.V),k,k,k)
v.push(A.A(A.a([s,B.ab,A.C(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tw,k,k,k),new C.dwC(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ce(A.u(v,B.al,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.af),B.i,k,new A.aV(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.ua,B.iB,k,k,360)},
$S:158}
C.dww.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dwx.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dwy.prototype={
$0(){return this.b.$1(new C.dwv(this.a))},
$S:0}
C.dwv.prototype={
$0(){var w=this.a
w.d=B.uN
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dwD.prototype={
$0(){return this.b.$1(new C.dwu(this.a))},
$S:0}
C.dwu.prototype={
$0(){var w=this.a
w.d=B.a0q
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dwE.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dwF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xx(null,u.b,A.bY(2020,1,1,0,0,0,0,0),null,s,A.bY(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dwt(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwt.prototype={
$0(){var w=this.b
return this.a.a=A.bY(w.gcc(),w.gcb(),w.gcp(),0,0,0,0,0)},
$S:0}
C.dwG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Nq(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dws(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dws.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dwH.prototype={
$0(){return this.b.$1(new C.dwr(this.a))},
$S:0}
C.dwr.prototype={
$0(){return this.a.b=""},
$S:0}
C.dwI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c0(q,new C.dwp(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Nq(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dwq(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwp.prototype={
$1(d){var w=null
return A.br(!0,A.u(A.a([A.dI(!1,w,w,w,!0,w,w,w,!0,w,B.ahB,w,w,w,w,new C.dwj(d),!1,w,w,w,w,w,w,w,D.eI4,w,w,w),A.dI(!1,w,w,w,!0,w,w,w,!0,w,B.ahz,w,w,w,w,new C.dwk(d),!1,w,w,w,w,w,w,w,D.eOl,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:33}
C.dwj.prototype={
$0(){A.a6(this.a,!1).K("camera")
return null},
$S:0}
C.dwk.prototype={
$0(){A.a6(this.a,!1).K("gallery")
return null},
$S:0}
C.dwq.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dwJ.prototype={
$0(){return this.b.$1(new C.dwo(this.a))},
$S:0}
C.dwo.prototype={
$0(){return this.a.c=""},
$S:0}
C.dwK.prototype={
$0(){return this.a.$1(new C.dwn())},
$S:0}
C.dwn.prototype={
$0(){},
$S:0}
C.dwz.prototype={
$0(){return this.a.$1(new C.dwm(this.b))},
$S:0}
C.dwm.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dwA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aeN(u.a,null,null,new C.dwl(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwl.prototype={
$4(d,e,f,g){this.a.$1(new C.dwi(this.b,d))},
$S:428}
C.dwi.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dwB.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dwC.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.E(x.q).f.P(D.ejv)
return}if(w.a.d==null){w.c.E(x.q).f.P(D.egs)
return}A.a6(w.c,!1).K(!0)},
$S:0}
C.dx5.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:93}
C.dx6.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bk:B.bu).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aN:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zt(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bk:B.bu,r,r,r,r,r,r,r,r,13,r,r,B.a_,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.xV(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.xV(r).length>0?B.bR:B.cU,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bk:B.bu
t=(q?B.bk:B.bu).j(0.28)
s=x.p
return new A.cZ(e,!1,A.at(A.aD(!1,B.X,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.aC,A.A(A.a([A.C(A.dU(B.mS,new C.dx3(d),A.d9(r,r,r,r,r,r,r,r,r,w,r,r,B.jW,r,new A.b5(A.m(10),B.V),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.C(A.bJ(D.eOK,new C.dx4(d),A.bk(B.cU,r,r,r,B.c,r,B.jW,r,new A.b5(A.m(10),B.V),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.al,r,B.e,B.R,0,B.p),B.i,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zz,E.V3,r,r,300),B.i,B.K,0,r,r,r,r,r,B.aa),r,r,r),r)},
$S:31}
C.dx3.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dx4.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dx_.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dx0(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bk:B.bu).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.C(A.d(k,s,1,B.a0,s,s,s,A.l(s,s,r.a.d.a?B.aN:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zt(l.c),s,s,s,s,s,s,D.ev2,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jl((r.a.d.a?B.bk:B.bu).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.WM,"View receipt",new C.dwT(r,d,l))
u=l.x!=null
t=u?B.x0:B.p_
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.B(D.beL,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dwU(r,d,l)),q.$3$icon$label$onTap(B.zR,"Edit",new C.dwV(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mz,"View / download ID",new C.dwW(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bn2,"View / download selfie",new C.dwX(r,d,l)))
if(l.gaAG())p.push(q.$3$icon$label$onTap(A_.XV,"View / download signature",new C.dwY(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bR,B.e4,"Delete",new C.dwZ(r,d,l)))
p.push(B.aw)
return A.br(!0,new A.B(B.u7,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.i,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:33}
C.dx0.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aN:B.aG
else w=d
return A.aH(!1,v,!0,new A.B(B.eM,A.A(A.a([A.U(e,w,v,v,v,20),B.bb,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1859}
C.dwT.prototype={
$0(){A.a6(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fo_(w,this.c)},
$S:0}
C.dwU.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.PY(this.c)},
$S:0}
C.dwV.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.BO(this.c)},
$S:0}
C.dwW.prototype={
$0(){var w,v,u
A.a6(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.byy(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dwX.prototype={
$0(){var w,v,u
A.a6(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.byy(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dwY.prototype={
$0(){A.a6(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fo4(w,this.c)},
$S:0}
C.dwZ.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.M7(0,this.c)},
$S:0}
C.dx7.prototype={
$1(d){return d.x==null},
$S:236}
C.dx8.prototype={
$1(d){return d.x!=null},
$S:236}
C.dx9.prototype={
$2(d,e){return d+e.c},
$S:1860}
C.dxa.prototype={
$0(){return this.a.bs3()},
$S:0}
C.dx1.prototype={
$0(){return this.a.abp(this.b)},
$S:0}
C.fap.prototype={
$1(d){return C.fJJ(A.Y(d,x.N,x.z))},
$S:z+19}
C.faq.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.far.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+68}
C.fmI.prototype={
$1(d){return d.ad()},
$S:z+12}
C.fui.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.f83.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bI4.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eR(e,v)?v:null},
$S:1861}
C.fnc.prototype={
$1(d){var w=this
return new C.X2(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+50}
C.cZg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZf(w,d))},
$S:z+65}
C.cZf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZ4.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cs(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.cZ1.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cYF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cYG.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.cZ5.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cYM.prototype={
$1(d){var w=null,v=A.K(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bk:B.bu,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ei(A.a([A.bF(!1,B.dd,w,w,!0,w,w,new C.cYK(d),w,w),A.bJ(B.v8,new C.cYL(d),A.bk(B.mi,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.cYK.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.cYL.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cYN.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.cZ2.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+16}
C.cZ3.prototype={
$0(){return B.d.gI(D.xm)},
$S:z+11}
C.cYO.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WB(v,u,J.aa(w.d),null)},
$S:z+35}
C.cYP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZe.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aJ(s,new C.Wi(r.y,r.gDP(0),J.aa(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cZc(r),s,s,s,s,s,s,!1,B.ae)
else{w=e-1
v=J.q(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b5U(v,e,w,u,t,r.gbHu(),s)
w=t}return A.c4(q,new C.cZd(r,e),new A.B(B.V5,w,s))},
$S:1862}
C.cZd.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcW(t).ay){t=this.b
u=x.cy.a(B.d.gcW(u.f.f)).gtR(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.df()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fk(v*3.141592653589793*0.5)
return A.fp(B.a1,A.d8(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:43}
C.cZc.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aBJ(B.oP,B.i9)},
$S:0}
C.cYZ.prototype={
$0(){var w=this.a
return w.n(new C.cYY(w))},
$S:0}
C.cYY.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZ_.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).K(null)
return null},
$S:0}
C.cYH.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=D.j3.j(0.5),r=x.p,q=A.a([D.eGO,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ch(p.d)?"Write this book":"Write a new book"
q.push(p.Wp(d,B.dP,w,J.ch(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Wp(d,L.afz,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cs(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.B(B.cR,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ju.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.B(B.cR,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ju.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Wp(d,B.XM,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Wp(d,B.p6,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Wp(d,B.p6,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ey(u,D.CN,A.br(!0,new A.B(Y.Ds,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.ad7,B.cZ,u,new A.b5(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:45}
C.cZ0.prototype={
$0(){A.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.cYS.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cs(w.d)
return new C.X4(v,J.cs(w.d),w.r+1,null)},
$S:z+63}
C.cYT.prototype={
$1(d){var w=null
return A.nR(!1,A.ei(w,w,w,D.CN,new A.jZ(this.a,new C.cYR(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:292}
C.cYR.prototype={
$3(d,e,f){var w=null
return A.A(A.a([D.aHn,B.om,A.C(A.d(e,w,w,w,w,w,w,B.iI,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:733}
C.cYU.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cYV.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:188}
C.cYW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cYX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zA(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.a0d(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.cYQ(s,t))
w=4
return A.b(s.ko(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cYQ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZ7.prototype={
$1(d){var w=null
return A.nR(!1,A.ei(w,w,w,D.CN,new A.jZ(this.a,new C.cZ6(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:292}
C.cZ6.prototype={
$3(d,e,f){var w=null
return A.A(A.a([D.aHn,B.om,A.C(A.d(e,w,w,w,w,w,w,B.iI,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:733}
C.cZ8.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZ9.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:188}
C.cZa.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:188}
C.cZb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zA(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.ko(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cYI.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bat(B.oP,R.Jk)},
$S:0}
C.cYJ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aBJ(B.oP,R.Jk)},
$S:0}
C.d_H.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.d_I.prototype={
$1(d){var w=this.a
return w.n(new C.d_G(w))},
$S:9}
C.d_G.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d_J.prototype={
$1(d){var w=this.a
return w.n(new C.d_F(w))},
$S:9}
C.d_F.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d_K.prototype={
$1(d){var w=this.a
return w.n(new C.d_E(w))},
$S:9}
C.d_E.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d_L.prototype={
$0(){var w=this.a
return w.n(new C.d_D(w,this.b))},
$S:0}
C.d_D.prototype={
$0(){var w=this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d_M.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.gZR()
A.a6(this.b,!1).K(new A.bkb(w,v))},
$S:0}
C.cZv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cZu.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.X0(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+62}
C.cZz.prototype={
$1(d){return d.a===this.a},
$S:z+61}
C.cZy.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b0X(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hN,v,v,v)
return A.ei(A.a([A.bF(!1,B.dd,v,v,!0,v,v,new C.cZw(d),v,v),A.bJ(B.v8,new C.cZx(d),A.bk(B.mi,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,D.CN,w,v,v,v,v,D.eFP,v)},
$S:19}
C.cZw.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.cZx.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cZA.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cZB.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a8(s,t,w[u],t))
return A.ce(A.cf(B.bI,r,B.by,18,14),B.q,t,B.z,t,D.bfF,t,t,B.af)},
$S:268}
C.cZt.prototype={
$0(){return this.a.O3(0,this.b)},
$S:0}
C.cZs.prototype={
$0(){return this.a.Ny(0,this.b)},
$S:0}
C.cy7.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+16}
C.cy8.prototype={
$0(){return B.d.gI(D.xm)},
$S:z+11}
C.cy9.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.c_(0,new A.B(d,A.bQ(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.ba),w),0,0,0)},
$S:1864}
C.cRz.prototype={
$1(d){return this.a.n(new C.cRy(this.b,this.c))},
$S:9}
C.cRy.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cRY.prototype={
$1(d){return this.a.n(new C.cRL())},
$S:2}
C.cRL.prototype={
$0(){},
$S:0}
C.cRZ.prototype={
$1(d){return this.a.n(new C.cRK())},
$S:2}
C.cRK.prototype={
$0(){},
$S:0}
C.cS_.prototype={
$0(){var w=this.a
return w.n(new C.cRJ(w,this.b))},
$S:0}
C.cRJ.prototype={
$0(){var w=this.a
return w.d=w.gnq().Eb(this.b.a)},
$S:0}
C.cS0.prototype={
$0(){var w=this.a
return w.n(new C.cRI(w,this.b))},
$S:0}
C.cRI.prototype={
$0(){var w=this.a
return w.d=w.gnq().cvW(this.b)},
$S:0}
C.cS1.prototype={
$1(d){return this.a.n(new C.cRH())},
$S:2}
C.cRH.prototype={
$0(){},
$S:0}
C.cS2.prototype={
$0(){var w=this.a
return w.n(new C.cRG(w,this.b))},
$S:0}
C.cRG.prototype={
$0(){var w=this.a
return w.d=w.gnq().cw0(this.b.a)},
$S:0}
C.cS3.prototype={
$1(d){var w=this.a
return w.n(new C.cRT(w,d))},
$S:6}
C.cRT.prototype={
$0(){var w=this.a
return w.d=w.gnq().cwT(this.b)},
$S:0}
C.cS4.prototype={
$1(d){var w=this.a
return w.d=w.gnq().ayW(d)},
$S:2}
C.cS5.prototype={
$1(d){var w=this.a
return w.d=w.gnq().cw3(d)},
$S:2}
C.cS7.prototype={
$1(d){var w=this.a
return w.d=w.gnq().cwR(d)},
$S:2}
C.cS8.prototype={
$1(d){var w=this.a
return w.n(new C.cRS(w,d))},
$S:9}
C.cRS.prototype={
$0(){var w=this.a
return w.d=w.gnq().cwI(this.b)},
$S:0}
C.cS9.prototype={
$0(){var w=this.a,v=w.gnq(),u=B.a.i(w.gDP(0).a.a),t=B.a.i(w.gawk().a.a)
u=v.b5q(B.a.i(w.gamO().a.a),t,u)
A.a6(this.b,!1).K(u)
return null},
$S:0}
C.dJW.prototype={
$0(){var w=this.a
w.uW()
w.a.bl()
w.a.oX()},
$S:0}
C.dJV.prototype={
$0(){var w=this.a
w.uW()
w.a.bl()
w.a.oX()},
$S:0}
C.dJY.prototype={
$0(){var w=this,v=w.b
if(J.cs(v)||J.ch(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dJZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dK_.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dJU.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dJX.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dK1.prototype={
$0(){this.a.MC()
return null},
$S:0}
C.dK0.prototype={
$0(){return this.a.D4(this.b)},
$S:0}
C.dJm.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bF(!1,B.dd,w,w,!0,w,w,new C.dJk(d),w,w),r=A.bk(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ei(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dJl(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dJk.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dJl.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dJn.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cwo(this.b)},
$S:0}
C.dJh.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aNo(w.b,w.c,w.d)},
$S:8}
C.dIQ.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dIR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJ4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.EP(t.a.c),$async$$0)
case 2:s=r.qz(q.dE(e,new C.dJ2(t)))
if(s!=null&&t.c!=null)t.n(new C.dJ3(t,s))
t.a.bl()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJ2.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJ3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJ5.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJ6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJg.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cx9(C.fYx(w),w)},
$S:0}
C.dJe.prototype={
$1(d){return new A.eh(new C.dJd(this.a,this.b),null)},
$S:21}
C.dJd.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bk:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahg,v,v,v,p>0?new C.dJ9(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aT,A.A(A.a([o,A.C(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.ahO,v,v,v,new C.dJa(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.ei(A.a([A.bF(!1,B.dd,v,v,!0,v,v,new C.dJb(d),v,v),A.bJ(B.py,new C.dJc(d),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:170}
C.dJ9.prototype={
$0(){return this.b.$1(new C.dJ8(this.a))},
$S:0}
C.dJ8.prototype={
$0(){return--this.a.a},
$S:0}
C.dJa.prototype={
$0(){return this.b.$1(new C.dJ7(this.a))},
$S:0}
C.dJ7.prototype={
$0(){return++this.a.a},
$S:0}
C.dJb.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dJc.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dJf.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cwY(this.a.a)
w.r.a8(0)},
$S:0}
C.dIE.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aeT(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fSx(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+13}
C.dIF.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.f,x.P)
w.push(this.b)
v.d=u.ayT(w)},
$S:0}
C.dJp.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aat(this.b,w,this.c,null)},
$S:z+31}
C.dJj.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.U(B.kU,B.aR,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bk:B.bu,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bk:B.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.ei(A.a([A.bJ(D.ePI,new C.dJi(d),A.bk(B.aR,w,w,w,w,w,w,w,w,w,w,w))],o),B.b5,w,u,v,w,s,w,new A.b5(t,B.V),r,w)},
$S:19}
C.dJi.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.dIG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dIH.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dII.prototype={
$1(d){return d.a},
$S:z+7}
C.dIJ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hO(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.ayT(w)},
$S:0}
C.dIN.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aeT(q)
w=A.S(q).k("a3<1>")
q=A.z(new A.a3(q,new C.dIL(r),w),w.k("E.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fSx(v.e,null,r,v.f,v.r,new C.dIM(s,r),q,"Member Profile",w,t,u)},
$S:z+13}
C.dIM.prototype={
$0(){return this.a.a6Q(this.b)},
$S:0}
C.dIL.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dIO.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.S(w).k("I<1,hO>")
w=A.z(new A.I(w,new C.dIK(this.b),v),v.k("ai.E"))
u.d=t.ayT(w)},
$S:0}
C.dIK.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+24}
C.dJo.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dJ_.prototype={
$1(d){return d.length!==0},
$S:3}
C.dJ0.prototype={
$1(d){var w=this
return new A.eh(new C.dIZ(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dIZ.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bk:B.bu,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bk:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.I(o,new C.dIV(u,e,o),A.S(o).k("I<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aI(v,B.T,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bn(v,new A.b0(4,A.m(12),B.d9),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ad,v,v,v,v,v,B.m8,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.u(p,B.al,v,B.e,B.R,0,B.p)
t=w.a
return A.ei(A.a([A.bF(!1,B.dd,v,v,!0,v,v,new C.dIW(d),v,v),A.bJ(B.H3,new C.dIX(t,u,o,e),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.eE6,new C.dIY(t,u,o,d),A.bk(B.aR,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a8(360,v,p,v),v,v,v,v,r,v)},
$S:170}
C.dIV.prototype={
$1(d){var w=null
return A.dI(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bAb,w,w,w,new C.dIU(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1865}
C.dIU.prototype={
$0(){return this.a.$1(new C.dIS(this.b,this.c))},
$S:0}
C.dIS.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dIW.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dIX.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dIT(w.c,u))
v.bH(0,B.c0)}},
$S:0}
C.dIT.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dIY.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).K(!0)},
$S:0}
C.dJ1.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cxB(this.b,D.rD,C.EN(v,w.a.c))},
$S:0}
C.dJw.prototype={
$1(d){return d.as},
$S:z+1}
C.dJx.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.ir(this.b,w)},
$S:0}
C.dJy.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hL5(v)
return w.Tx(v==null?null:v.a)},
$S:0}
C.dJz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hox(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcg(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.cgo(new A.ap(u,t),v.gbbg(),new A.ap(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cwK:D.cvm
q=A.H(s?B.du:D.b0K,B.r,1)
p=A.m(22)
o=A.c_(0,A.b1(m,m,m,new C.b9b(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.am(B.W,m,B.a9,B.q,A.a([o,A.c_(0,A.tE(new A.L(n,n,n,n),new A.a8(u,t,new C.ba2(l.d,v,l.f,w,new C.dJs(l),l.gc10(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.br5(s,new C.dJt(l,e),new C.dJu(l,e),new C.dJv(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.i,m,m,new A.o(m,m,q,k,m,new A.a7(B.b4,B.bc,B.w,r,m,m),B.n),m,m,m,O.ace,m,m,m,m)},
$S:223}
C.dJs.prototype={
$1(d){var w=this.a
w.n(new C.dJq(w,d))},
$S:2}
C.dJq.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.G(0,v)},
$S:0}
C.dJt.prototype={
$0(){var w=this.b
return this.a.b39(1.25,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJu.prototype={
$0(){var w=this.b
return this.a.b39(0.8,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJv.prototype={
$0(){var w=this,v=w.b
return w.a.aNo(new A.ap(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ap(w.c,w.d),w.e.gbbg())},
$S:0}
C.dJA.prototype={
$0(){var w=this.a
return w.n(new C.dJr(w))},
$S:0}
C.dJr.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dIP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fB(new A.fu(s.c)),$async$$0)
case 2:t.wI("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZF.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.bdK(u,C.h1x(v.c,u),new C.cZE(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+25}
C.cZE.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.cZG.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bh_(d.d,d.c,u.f.q(0,d.a),new C.cZD(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+26}
C.cZD.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.f8C.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.S(v)
return A.qz(new A.cQ(new A.a3(v,new C.f8D(d),w.k("a3<1>")),new C.f8E(),w.k("cQ<1,n>")))},
$S:z+22}
C.f8D.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.f8E.prototype={
$1(d){return d.a},
$S:z+7}
C.f8A.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.f8B.prototype={
$1(d){return d.b},
$S:z+7}
C.f8H.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.S(v)
return A.qz(new A.cQ(new A.a3(v,new C.f8I(d),w.k("a3<1>")),new C.f8J(),w.k("cQ<1,n>")))},
$S:z+22}
C.f8I.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.f8J.prototype={
$1(d){return d.a},
$S:z+7}
C.f8F.prototype={
$1(d){var w,v=A.eM([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.G(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+28}
C.f8G.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.cZI.prototype={
$0(){return this.a},
$S:z+29}
C.cZZ.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:251}
C.cZR.prototype={
$2(d,e){var w=this.a.ci(0,d,new C.cZS()),v=J.a4(w)
if(!v.q(w,e))v.G(w,e)},
$S:119}
C.cZS.prototype={
$0(){return A.a([],x.s)},
$S:734}
C.cZQ.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eR(w,e)
return w===!0},
$S:269}
C.cZJ.prototype={
$0(){return A.a([],x.u)},
$S:z+30}
C.cZP.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.cZO.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.G(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.Av:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.T:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.G(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.Av:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1867}
C.cZK.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.cZT.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.G(0,a9)
w=a7.b
w.m(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.T:u)
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
t=J.aW(t==null?D.Av:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.bc(w,new C.cZU(r)))w.push(r)}}B.d.bk(w,new C.cZV(a8))
B.d.aY(w,new C.cZW())
q=C.how(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.e_D],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.J)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.m(0,a9,a8)
if(o.length===0)return A.a([new A.V(-p,p)],x.G)
a8=x.F
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.J)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gI(k)+B.d.gai(k))/2
a1=A.a([new A.V(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bjW(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.V(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.V(a5,a6))}}return a1},
$S:1868}
C.cZU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.cZV.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.cZW.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.cZX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gH(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.be(v,A.a2(v).k("be<2>")).cO(0,0,B.pK)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gH(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:688}
C.cZY.prototype={
$1(d){return 16+d*156},
$S:254}
C.cZH.prototype={
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
t.m(0,d,new C.E8(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.E8(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.E8(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ia(d,new A.v(e+t,w),s,s.length))}},
$S:188}
C.cZL.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFh(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:119}
C.cZM.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.cZN.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:735}
C.d__.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:735}
C.d_0.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:449}
C.d_1.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:197}
C.d_2.prototype={
$1(d){return d>=0.5},
$S:134}
C.eTE.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hJ(A.aH(!1,v,!0,new A.a8(38,38,A.U(d,this.a.c?B.c:B.d3,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1870}
C.evk.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.B(B.nf,A.aH(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.er_,B.L,w,w),B.i,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.JP,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evj(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+33}
C.evj.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.deb.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dea.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mP,B.L,w,w)
return A.ei(A.a([A.bF(!1,B.dd,w,w,!0,w,w,new C.de8(d),w,w),A.bF(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lK,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.de9(d),w,w)],x.p),B.b5,B.Dl,w,u,D.bgT,w,D.biI,new A.b5(v,B.V),w,w)},
$S:19}
C.de8.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.de9.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dek.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.del.prototype={
$1(d){var w=this.a
return w.n(new C.dej(w,d))},
$S:z+34}
C.dej.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dem.prototype={
$1(d){var w=null
return A.p6(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.dep.prototype={
$1(d){var w=this.a
return w.n(new C.dei(w,d))},
$S:29}
C.dei.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.deo.prototype={
$1(d){var w=null
return A.p6(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deq.prototype={
$1(d){var w=this.a
return w.n(new C.deh(w,d))},
$S:29}
C.deh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.der.prototype={
$0(){var w=this.a
return w.n(new C.deg(w))},
$S:0}
C.deg.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.des.prototype={
$0(){var w=this.a
return w.n(new C.def(w))},
$S:0}
C.def.prototype={
$0(){return++this.a.at},
$S:0}
C.det.prototype={
$0(){var w=this.a
return w.n(new C.dee(w))},
$S:0}
C.dee.prototype={
$0(){return--this.a.ax},
$S:0}
C.deu.prototype={
$0(){var w=this.a
return w.n(new C.ded(w))},
$S:0}
C.ded.prototype={
$0(){return++this.a.ax},
$S:0}
C.dev.prototype={
$1(d){var w=this.a
return w.n(new C.dec(w,d))},
$S:9}
C.dec.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.den.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.dew.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bU
else u=(q.c.a?B.dT:B.cg).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bk:B.bu
t=A.U(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bk:B.bu
return A.C(A.aD(!1,B.X,!0,r,A.aH(!1,o,!0,A.de(r,A.u(A.a([t,B.aw,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b7,new A.o(w,r,u,v,r,r,B.n),B.eC,r,r,r,B.jW,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dex(q,d),r,r,r,r,r,r,r),B.i,B.K,0,r,r,r,r,r,B.aa),1)},
$S:z+36}
C.dex.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.deG.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.c29.prototype={
$2(d,e){return new A.bq(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:88}
C.c2g.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c2h.prototype={
$2(d,e){var w=J.b3(e,new C.c2f(),x.a)
w=A.z(w,w.$ti.k("ai.E"))
return new A.bq(d,w,x.d2)},
$S:z+38}
C.c2f.prototype={
$1(d){return d.ad()},
$S:z+12}
C.c2b.prototype={
$1(d){return C.ahH(A.Y(d,x.N,x.z))},
$S:z+8}
C.c2c.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c2d.prototype={
$1(d){return C.fJJ(A.Y(d,x.N,x.z))},
$S:z+19}
C.c2e.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c2l.prototype={
$1(d){return new A.aCn(d.f.length,d.a,d.b)},
$S:z+40}
C.c2m.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:637}
C.c2i.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c2j.prototype={
$1(d){return d.cwB(C.EN(d,this.a))},
$S:z+41}
C.dJJ.prototype={
$1(d){return C.te(d,this.a.a.c)},
$S:z+2}
C.dJK.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dJO.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dJP.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dJG.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aW1(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xd("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.ox(r.c,r.e),$async$$0)
case 4:s.xd(p)
w=5
return A.b(s.HU(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJH.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aW1(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xd("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.ox(r.c,r.e),$async$$0)
case 4:s.xd(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.SX(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xd("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xd("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xd("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.HU(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a5(j)
o=r.a
if(o.c==null){w=1
break}o.xd(B.a.dZ(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dJN.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aW0(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xd("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cz(A.eN(new C.dJM(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.ox(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJM.prototype={
$1(d){var w=this.b
return new C.XZ(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+42}
C.dJL.prototype={
$1(d){return D.f24},
$S:z+43}
C.dJR.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.dJS.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dJQ(w,d)
return new A.B(B.d6,new C.ba6(this.b,d.c,d.a,w,null),null)},
$S:1871}
C.dJQ.prototype={
$0(){return this.a.V8(this.b.b)},
$S:0}
C.dJB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dJC.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dJD.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dJE.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dJF.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.dJT.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dk(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).K(s)
return}},
$S:184}
C.dwa.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+44}
C.dwb.prototype={
$0(){return B.d.gI(D.a_p)},
$S:z+45}
C.dwc.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b1(A.at(A.U(this.b.d,B.c.j(0.95),w,w,D.cCr,44),w,w,w),w,w,new C.beR(u,t,v,w),B.at)},
$S:75}
C.fnF.prototype={
$1(d){return A.p5(new C.fnE(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:135}
C.fnE.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.a9(0,B.G,B.x.j(r?0.35:0.08),B.tj,24)],x.V),o=r?B.dT:B.cg
o=A.p(t,t,B.i,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aR.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.buX,B.i,t,t,new A.o(t,t,t,A.m(12),t,new A.a7(B.a1,B.a7,B.w,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aN:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.U,o,new A.B(E.adb,A.A(A.a([w,B.bb,A.C(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bk:B.bu,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.C(A.ig(!0,t,e,B.z,D.eeF,new C.fnD(this.b,s),20,B.acM,t,B.af,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.i,t,t,new A.o(q,t,t,B.kf,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fnD.prototype={
$2(d,e){var w=null,v=D.a_p[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dT:B.cg,B.r,1),q=A.a([new A.a9(0,B.G,B.x.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.C(new C.a3M(v.a,!0,w),1),n=s?B.j5:B.iv,m=A.d(v.b,w,1,B.a0,w,w,w,A.l(w,w,s?B.aN:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.X,!0,w,A.aH(!1,u,!0,A.eq(A.bw(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.a0,w,w,w,A.l(w,w,s?B.bk:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.a_,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.i,n,w,w,w,w,w,w,B.kS,w,w,w)],l),B.al,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fnC(this.a,v),w,w,w,w,w,w,w),B.i,B.K,0,w,w,w,w,w,B.aa)},
$S:74}
C.fnC.prototype={
$0(){A.a6(this.a,!1).K("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.c9F.prototype={
$0(){return this.a.acq(this.b)},
$S:0}
C.fn4.prototype={
$1(d){return D.eZR},
$S:z+46}
C.fua.prototype={
$1(d){var w=this
return new C.ZF(w.a,w.b,w.c,w.d,null)},
$S:z+71}
C.fn6.prototype={
$1(d){return new C.WD(this.a,null)},
$S:z+48}
C.fn5.prototype={
$1(d){return D.f_Q},
$S:z+49}
C.cSl.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cSm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cSk(w,d))},
$S:29}
C.cSk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cSn.prototype={
$1(d){return this.a.Iu()},
$S:2}
C.cSo.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cSh.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cSi.prototype={
$1(d){return this.a.Iu()},
$S:2}
C.cSj.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cpT.prototype={
$0(){},
$S:0}
C.cpZ.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cq_.prototype={
$0(){return this.a.aJ2(-1)},
$S:0}
C.cq0.prototype={
$1(d){return this.a.n(new C.cpY())},
$S:2}
C.cpY.prototype={
$0(){},
$S:0}
C.cq1.prototype={
$0(){return this.a.aJ2(1)},
$S:0}
C.cq2.prototype={
$1(d){return this.a.n(new C.cpX())},
$S:2}
C.cpX.prototype={
$0(){},
$S:0}
C.cq3.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aR.j(0.2)
if(s)v=B.aR
else v=this.b.a?B.dT:B.cg
return A.tv(u,u,B.aW,r,u,new C.cpW(t,d),B.zA,s,w,u,new A.ay(v,1,B.r,-1),B.c6)},
$S:1872}
C.cpW.prototype={
$1(d){var w=this.a
return w.n(new C.cpU(w,this.b))},
$S:9}
C.cpU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cq4.prototype={
$1(d){return this.a.n(new C.cpV())},
$S:2}
C.cpV.prototype={
$0(){},
$S:0}
C.cq5.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.eT6.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).K(w)},
$S:2}
C.eT7.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.eT8.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).K(w)},
$S:0}
C.eT4.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbre()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b1(new A.B(D.biH,new A.es(A.p(r,q.a.c,B.i,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bqV(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:75}
C.eT5.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dE.aq(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aR,B.bU,w)
s.toString
s=A.a([B.aW,s,B.aR],x.O)
return A.aD(!1,B.X,!0,p,A.aH(!1,v,!0,A.eq(D.dKZ,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d4(-1.2+t,-0.5),new A.d4(1.2-t,0.8),B.w,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.i,B.K,0,r,r,r,r,r,B.aa)},
$S:131}
C.fm0.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.esu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.esl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.esm.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ess.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.eh(new C.esr(w,this.b),null)},
$S:21}
C.esr.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ey(w,u,new A.B(B.ad5,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bk:B.bu,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.fPn(new C.eso(r,e),r.a),B.aC,A.A(A.a([A.C(A.dU(B.dd,new C.esp(d),w),1),B.av,A.C(A.bJ(B.R0,new C.esq(r,d),A.bk(B.aR,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.al,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(t,B.V),w)},
$S:97}
C.eso.prototype={
$1(d){return this.b.$1(new C.esn(this.a,d))},
$S:29}
C.esn.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.esp.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.esq.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).K(w)
return null},
$S:0}
C.est.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QB(this.b)},
$S:0}
C.esg.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.d,x.Q)
w.push(this.b)
v.d=u.b5_(w)},
$S:0}
C.esk.prototype={
$1(d){return this.bdF(d)},
bdF(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Jl(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.ir(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.esj.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.S(w).k("a3<1>")
w=A.z(new A.a3(w,new C.esi(this.b),v),v.k("E.E"))
u.d=t.b5_(w)},
$S:0}
C.esi.prototype={
$1(d){return d.a!==this.a.a},
$S:z+17}
C.esv.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.ir(this.b,w)},
$S:0}
C.esw.prototype={
$1(d){return this.a.bv8(d,this.b)},
$S:z+52}
C.esh.prototype={
$0(){return this.a.a6P(this.b)},
$S:0}
C.fu2.prototype={
$1(d){return new C.aaO(this.a,this.b,this.c,null)},
$S:z+53}
C.esy.prototype={
$0(){return this.a.XB(this.b)},
$S:0}
C.esz.prototype={
$0(){return this.a.O_(this.b)},
$S:0}
C.esA.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
C.esB.prototype={
$0(){return this.a.XC(this.b)},
$S:0}
C.esx.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.esb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.esc.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.esd.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.esf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.p6(),$async$$0)
case 2:if(t.c!=null)t.n(new C.ese(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ese.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.esY.prototype={
$2(d,e){return d+e.gvY()},
$S:z+56}
C.esU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.esV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.esF.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bvm,B.i,v,v,new A.o(B.aH.j(u?0.18:0.08),v,A.H(B.aH.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bk:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aN:B.aG
u=u?B.dT:B.cg
w=x.p
return A.ey(v,t,new A.B(B.wn,A.u(A.a([r,B.aT,q,B.P,p,B.d1,A.A(A.a([A.C(A.dU(B.mS,new C.esD(d),A.d9(v,v,v,v,v,v,v,v,v,o,v,v,B.eU,v,new A.b5(A.m(14),B.V),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.av,A.C(A.bJ(D.eT5,new C.esE(d),A.bk(B.aH,v,v,v,v,v,B.eU,v,new A.b5(A.m(14),B.V),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cZ,v,new A.b5(s,B.V),v)},
$S:45}
C.esD.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.esE.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.esO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.a9(0,B.G,B.x.j(k?0.35:0.08),B.fI,28)],x.V),g=k?D.cIu:B.ZR,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.i,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aC,D.e9l,B.aw,new A.bE(B.a1,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cn,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.i,m,m,new A.o(m,m,m,m,m,new A.a7(B.ax,B.aE,B.w,g,m,m),B.n),m,m,m,m,E.ad8,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bk:B.bu,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.C(v.aZv(B.b0,B.iC,new C.esL(v,d),l,"Camera import","Scan QR"),1),B.av,A.C(v.aZv(B.cA,M.x1,new C.esM(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bk:B.bu,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aH.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aH.j(0.28),B.r,1)
o=A.p(m,D.buM,B.i,m,m,new A.o(B.aH.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aN:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.C(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bk:B.bu,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.br(!0,new A.B(B.u9,A.p(m,A.u(A.a([g,new A.B(B.ad6,A.u(A.a([w,B.U,u,B.bv,t,B.U,A.aD(!1,B.X,!0,m,A.aH(!1,s,!0,A.p(m,A.A(A.a([o,B.bb,n,A.U(B.el,k?B.bk:B.bu,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.i,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.esN(v,d,l),m,m,m,m,m,m,m),B.i,B.K,0,m,m,m,m,m,B.aa)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:33}
C.esL.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).K(null)
w=2
return A.b(u.a.uz("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.esM.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).K(null)
w=2
return A.b(u.a.uz("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.esN.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).K(null)
w=2
return A.b(u.a.LV(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.esJ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.a9(0,B.G,B.x.j(o?0.35:0.08),B.eO,24)],x.V),k=o?B.dT:B.cg
k=A.p(q,q,B.i,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bk:B.bu
u=A.bw(w,new A.a8(48,48,C.aMo(!0,A.m(12),48,P.Kn,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a0,q,q,q,A.l(q,q,o?B.aN:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zt(v.gvY())
s=x.p
r=this.a
return A.br(!0,new A.B(B.u9,A.p(q,A.u(A.a([B.U,k,new A.B(D.ad3,A.A(A.a([u,B.bb,A.C(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bk:B.bu,q,q,q,q,q,q,q,q,12,q,q,B.a_,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zg,r.caR(B.rV,B.aR,new C.esH(d),p,"QR code or backup file","Transfer project"),r.aWA(!0,B.e4,B.aH,new C.esI(d),p,"Remove from this device","Delete project"),B.U],s),B.m,q,B.e,B.R,0,B.p),B.i,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:33}
C.esH.prototype={
$0(){A.a6(this.a,!1).K("transfer")
return null},
$S:0}
C.esI.prototype={
$0(){A.a6(this.a,!1).K("delete")
return null},
$S:0}
C.esK.prototype={
$1(d){return this.bdG(d)},
bdG(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Jl(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uK(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.et0.prototype={
$0(){var w=this.a
w.a.bl()
w.n(new C.et_(w))},
$S:0}
C.et_.prototype={
$0(){return this.a.r++},
$S:0}
C.et1.prototype={
$0(){var w=this.a
return w.n(new C.esZ(w))},
$S:0}
C.esZ.prototype={
$0(){return this.a.r++},
$S:0}
C.esC.prototype={
$0(){var w=this.a.c
w.toString
return A.ir(w,null)},
$S:0}
C.esG.prototype={
$0(){return this.a.c4q(this.b)},
$S:0}
C.esX.prototype={
$0(){var w=this.a
return w.n(new C.esW(w,this.b))},
$S:0}
C.esW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.esR.prototype={
$0(){return this.a.uz("scan")},
$S:0}
C.esS.prototype={
$0(){return this.a.uz("file")},
$S:0}
C.esT.prototype={
$1(d){return this.a.caS(d,this.b)},
$S:z+57}
C.esQ.prototype={
$0(){return this.a.D3(this.b)},
$S:0}
C.esP.prototype={
$0(){return this.a.Y4(this.b,this.c)},
$S:0}
C.cpk.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+58}
C.cpj.prototype={
$1(d){return d.ad()},
$S:z+59}
C.cph.prototype={
$1(d){return C.h7i(A.Y(d,x.N,x.z))},
$S:z+60}
C.cpi.prototype={
$1(d){return d.a.length!==0},
$S:z+17}
C.f7W.prototype={
$1(d){return d.y===D.jX},
$S:z+2}
C.fuq.prototype={
$1(d){return C.bwD(d,this.a)},
$S:z+2}
C.f77.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bI9.prototype={
$1(d){return!d.as},
$S:z+1}
C.bI8.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bI5.prototype={
$1(d){return C.fJK(A.Y(d,x.N,x.z))},
$S:z+14}
C.bI6.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bI7.prototype={
$1(d){return J.k(d)},
$S:17}
C.f_l.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.eWk.prototype={
$1(d){return C.fAA(A.Y(d,x.N,x.z))},
$S:z+64}
C.eWl.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eWm.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.fmX.prototype={
$1(d){return J.k(d)},
$S:17}
C.fmY.prototype={
$1(d){return d.a},
$S:z+66}
C.fmZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fn_.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.fn0.prototype={
$1(d){return d.QB(null).ad()},
$S:z+67}
C.fuo.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.f8n.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fav.prototype={
$1(d){return C.ahH(A.Y(d,x.N,x.z))},
$S:z+8}
C.faw.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fax.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fay.prototype={
$1(d){return d.ad()},
$S:z+5}
C.faz.prototype={
$1(d){return C.te(d,this.a)},
$S:z+2}
C.fmK.prototype={
$1(d){return C.te(d,this.a)},
$S:z+2}
C.fuj.prototype={
$1(d){return C.ahH(A.Y(d,x.N,x.z))},
$S:z+8}
C.fuk.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ful.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f84.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.f85.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fuu.prototype={
$1(d){return!d.as},
$S:z+1}
C.f7G.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.f7H.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.f7I.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.fub.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fbf.prototype={
$1(d){return d.Q},
$S:z+69}
C.fmG.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fas.prototype={
$1(d){return C.ahH(A.Y(d,x.N,x.z))},
$S:z+8}
C.fat.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fau.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fmE.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eWQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.eWR.prototype={
$1(d){return C.fJK(A.Y(d,x.N,x.z))},
$S:z+14}
C.eWS.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eWT.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eWU.prototype={
$1(d){return d.length!==0},
$S:3}
C.eX6.prototype={
$2(d,e){return d.eX(new C.eX7(e))},
$S:1873}
C.eX7.prototype={
$1(d){$.ak.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c3},
$S:1874}
C.eX3.prototype={
$1(d){return C.hsY(d,this.a)},
$S:z+70}
C.eX4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eX5.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f0_.prototype={
$1(d){return d.a},
$S:z+47}
C.f00.prototype={
$1(d){return d.length!==0},
$S:3}
C.f01.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f20.prototype={
$1(d){return d.ad()},
$S:z+5}
C.f6u.prototype={
$1(d){return C.fUM(d,C.EN(d,this.a))},
$S:z+5}
C.f6v.prototype={
$1(d){return C.fUN(d,C.EN(d,this.a))},
$S:z+5};(function aliases(){var w=C.aHB.prototype
w.bnB=w.p
w=C.aJH.prototype
w.bpT=w.p
w=C.aJI.prototype
w.bpU=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azh.prototype,"gc7U","c7V",23)
var s
w(s=C.awo.prototype,"gc16","c17",27)
v(s,"gaHl","Lw",0)
v(s,"gcfK","Dw",0)
v(s,"gbCD","M8",0)
v(s,"gct4","xe",0)
v(s,"gc9Q","YK",0)
v(s,"gbD3","UC",0)
w(s,"gbHu","bHv",39)
v(s,"gbsP","yH",0)
v(C.awp.prototype,"gct0","DV",0)
v(s=C.azS.prototype,"gac3","uL",0)
v(s,"gc3I","XX",0)
v(s,"gaLg","Go",0)
v(s=C.azP.prototype,"gcpo","a_L",0)
v(s,"gac3","uL",0)
v(s,"gcdV","Zq",0)
v(s,"gc4D","Y9",0)
w(s,"gc10","c11",51)
v(s,"gbCV","Gt",0)
v(s,"gcqh","cqi",3)
v(s,"gbTF","Wb",0)
w(s,"gc_x","c_y",37)
v(s,"gc3s","c3t",3)
v(s=C.ayg.prototype,"gbYu","Nz",0)
v(s,"gbYw","bYx",3)
v(s,"gbzD","a6s",0)
v(s=C.azR.prototype,"gbG2","V4",0)
v(s,"gbQ9","VG",0)
v(s,"gck_","a_d",0)
v(s,"gcgj","ZQ",0)
v(C.azQ.prototype,"gcg1","adM",0)
v(C.apc.prototype,"gc_v","XA",0)
v(C.avb.prototype,"ga_v","Iu",3)
v(C.ava.prototype,"ga_v","Iu",3)
v(C.atX.prototype,"ga_v","Iu",3)
v(s=C.aBf.prototype,"gaVZ","Ou",0)
v(s,"gbrH","Tr",0)
v(s,"gc4r","c4s",3)
w(C.aBe.prototype,"gc0l","c0m",54)
u(C.aBg.prototype,"gaLa",0,0,null,["$1","$0"],["Gn","bAT"],55,0,0)
t(C,"h0N","hC7",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.ald,C.mG,C.FQ,C.ac_,C.NH,C.tu,C.Ia,C.E8,C.ba4,C.aFh,C.amn,C.d_3,C.ld,C.aPe,C.aPd,C.aNj,C.t1,C.qk,C.l_,C.hO,C.kh,C.aDh])
u(A.i2,[C.feO,C.feN,C.feP,C.fny,C.f5s,C.f5t,C.f5y,C.fcy,C.fcx,C.fcw,C.bWF,C.fo3,C.fnW,C.fo7,C.f8c,C.dwR,C.dwM,C.dwN,C.dwp,C.dwl,C.dx5,C.dx6,C.dx_,C.dx0,C.dx7,C.dx8,C.fap,C.faq,C.fmI,C.fui,C.f83,C.fnc,C.cZg,C.cYF,C.cYM,C.cZ2,C.cYO,C.cYH,C.cYS,C.cYT,C.cYR,C.cZ7,C.cZ6,C.d_I,C.d_J,C.d_K,C.cZu,C.cZz,C.cZy,C.cy7,C.cy9,C.cRz,C.cRY,C.cRZ,C.cS1,C.cS3,C.cS4,C.cS5,C.cS7,C.cS8,C.dJX,C.dJm,C.dJh,C.dIQ,C.dJ2,C.dJ5,C.dJe,C.dIE,C.dJp,C.dJj,C.dIG,C.dIH,C.dII,C.dIN,C.dIL,C.dIK,C.dJ_,C.dJ0,C.dIV,C.dJw,C.dJs,C.cZF,C.cZG,C.f8C,C.f8D,C.f8E,C.f8A,C.f8B,C.f8H,C.f8I,C.f8J,C.f8F,C.f8G,C.cZZ,C.cZP,C.cZK,C.cZU,C.cZV,C.cZY,C.cZM,C.d_0,C.d_1,C.d_2,C.eTE,C.evk,C.dea,C.dek,C.del,C.dem,C.dep,C.deo,C.deq,C.dev,C.dew,C.c2g,C.c2f,C.c2b,C.c2c,C.c2d,C.c2e,C.c2l,C.c2i,C.c2j,C.dJJ,C.dJM,C.dJL,C.dJS,C.dJT,C.dwa,C.fnF,C.fn4,C.fua,C.fn6,C.fn5,C.cSm,C.cSn,C.cSi,C.cq0,C.cq2,C.cq3,C.cpW,C.cq4,C.eT6,C.fm0,C.ess,C.eso,C.esk,C.esi,C.esw,C.fu2,C.esF,C.esO,C.esJ,C.esK,C.esT,C.cpj,C.cph,C.cpi,C.f7W,C.fuq,C.f77,C.bI9,C.bI8,C.bI5,C.bI6,C.bI7,C.eWk,C.eWl,C.fmX,C.fmY,C.fmZ,C.fn_,C.fn0,C.fuo,C.f8n,C.fav,C.faw,C.fay,C.faz,C.fmK,C.fuj,C.fuk,C.ful,C.f84,C.f85,C.fuu,C.f7G,C.f7H,C.fub,C.fbf,C.fmG,C.fas,C.fat,C.fmE,C.eWQ,C.eWR,C.eWS,C.eWT,C.eWU,C.eX7,C.eX3,C.eX4,C.f0_,C.f00,C.f20,C.f6u,C.f6v])
u(A.ar,[C.aUz,C.Wi,C.b5U,C.ba2,C.bdK,C.br5,C.bh_,C.aas,C.bdJ,C.aar,C.bdI,C.ayh,C.aEk,C.aat,C.I_,C.ba3,C.a9K,C.ba1,C.ba6,C.aUx,C.apc,C.aaO])
u(A.n1,[C.b6v,C.b7G,C.b7x,C.aDc,C.bcN,C.ba5,C.b9b,C.beR,C.bqV])
u(A.jj,[C.fo0,C.fo1,C.fo2,C.fnU,C.fnV,C.fo5,C.fo6,C.dx2,C.dwP,C.dwS,C.dww,C.dwx,C.dwy,C.dwv,C.dwD,C.dwu,C.dwE,C.dwF,C.dwt,C.dwG,C.dws,C.dwH,C.dwr,C.dwI,C.dwj,C.dwk,C.dwq,C.dwJ,C.dwo,C.dwK,C.dwn,C.dwz,C.dwm,C.dwA,C.dwi,C.dwB,C.dwC,C.dx3,C.dx4,C.dwT,C.dwU,C.dwV,C.dwW,C.dwX,C.dwY,C.dwZ,C.dxa,C.dx1,C.cZf,C.cZ4,C.cZ1,C.cYG,C.cZ5,C.cYK,C.cYL,C.cYN,C.cZ3,C.cYP,C.cZc,C.cYZ,C.cYY,C.cZ_,C.cZ0,C.cYU,C.cYW,C.cYX,C.cYQ,C.cZ8,C.cZb,C.cYI,C.cYJ,C.d_H,C.d_G,C.d_F,C.d_E,C.d_L,C.d_D,C.d_M,C.cZv,C.cZw,C.cZx,C.cZA,C.cZt,C.cZs,C.cy8,C.cRy,C.cRL,C.cRK,C.cS_,C.cRJ,C.cS0,C.cRI,C.cRH,C.cS2,C.cRG,C.cRT,C.cRS,C.cS9,C.dJW,C.dJV,C.dJY,C.dJZ,C.dK_,C.dJU,C.dK1,C.dK0,C.dJk,C.dJl,C.dJn,C.dIR,C.dJ4,C.dJ3,C.dJ6,C.dJg,C.dJ9,C.dJ8,C.dJa,C.dJ7,C.dJb,C.dJc,C.dJf,C.dIF,C.dJi,C.dIJ,C.dIM,C.dIO,C.dJo,C.dIU,C.dIS,C.dIW,C.dIX,C.dIT,C.dIY,C.dJ1,C.dJx,C.dJy,C.dJq,C.dJt,C.dJu,C.dJv,C.dJA,C.dJr,C.dIP,C.cZE,C.cZD,C.cZI,C.cZS,C.cZJ,C.evj,C.deb,C.de8,C.de9,C.dej,C.dei,C.deh,C.der,C.deg,C.des,C.def,C.det,C.dee,C.deu,C.ded,C.dec,C.den,C.dex,C.deG,C.dJK,C.dJO,C.dJP,C.dJG,C.dJH,C.dJI,C.dJN,C.dJR,C.dJQ,C.dJB,C.dJC,C.dJD,C.dJE,C.dJF,C.dwb,C.fnC,C.c9F,C.cSl,C.cSk,C.cSo,C.cSh,C.cSj,C.cpT,C.cpZ,C.cq_,C.cpY,C.cq1,C.cpX,C.cpU,C.cpV,C.cq5,C.eT7,C.eT8,C.esu,C.esl,C.esm,C.esn,C.esp,C.esq,C.est,C.esg,C.esj,C.esv,C.esh,C.esy,C.esz,C.esA,C.esB,C.esx,C.esb,C.esc,C.esd,C.esf,C.ese,C.esU,C.esV,C.esD,C.esE,C.esL,C.esM,C.esN,C.esH,C.esI,C.et0,C.et_,C.et1,C.esZ,C.esC,C.esG,C.esX,C.esW,C.esR,C.esS,C.esQ,C.esP])
u(A.ae,[C.alk,C.X0,C.X4,C.X2,C.WB,C.amq,C.amk,C.XE,C.amo,C.XZ,C.Y_,C.a3M,C.WD,C.WC,C.W9,C.ZF,C.DX,C.atQ,C.apb,C.ap5,C.apa,C.M3])
u(A.ag,[C.azh,C.awo,C.bak,C.awp,C.b7E,C.azS,C.azP,C.ayg,C.azR,C.azQ,C.bf8,C.aHB,C.avb,C.ava,C.atX,C.bqY,C.aJH,C.aJI,C.aBf,C.bgt,C.aBe,C.bsG])
u(A.kv,[C.dwO,C.dwQ,C.dwL,C.dx9,C.far,C.bI4,C.cZe,C.cZd,C.cYV,C.cZ9,C.cZa,C.cZB,C.dJd,C.dIZ,C.dJz,C.cZR,C.cZQ,C.cZO,C.cZT,C.cZW,C.cZX,C.cZH,C.cZL,C.cZN,C.d__,C.c29,C.c2h,C.c2m,C.dwc,C.fnE,C.fnD,C.eT4,C.eT5,C.esr,C.esY,C.cpk,C.f_l,C.eWm,C.fax,C.f7I,C.fau,C.eX6,C.eX5,C.f01])
t(C.beS,C.aHB)
u(A.m7,[C.a8O,C.aFZ,C.FR,C.ahG,C.cpl,C.cpm])
t(C.bqW,C.aJH)
t(C.bqX,C.aJI)
t(C.aBg,C.bsG)
t(C.b4p,A.b4e)
t(C.bqZ,A.a3r)
t(C.b4o,C.bqZ)
w(C.aHB,A.eH)
w(C.aJH,A.ca)
w(C.aJI,A.ca)
v(C.bsG,A.eu)
v(C.bqZ,A.iZ)})()
A.ka(b.typeUniverse,JSON.parse('{"aUz":{"ar":[],"r":[]},"b6v":{"aA":[]},"alk":{"ae":[],"r":[]},"azh":{"ag":["alk"]},"X0":{"ae":[],"r":[]},"X4":{"ae":[],"r":[]},"X2":{"ae":[],"r":[]},"WB":{"ae":[],"r":[]},"awo":{"ag":["X0"]},"bak":{"ag":["X4"]},"awp":{"ag":["X2"]},"Wi":{"ar":[],"r":[]},"b7G":{"aA":[]},"b7x":{"aA":[]},"b7E":{"ag":["WB"]},"aDc":{"aA":[]},"bcN":{"aA":[]},"b5U":{"ar":[],"r":[]},"amq":{"ae":[],"r":[]},"amk":{"ae":[],"r":[]},"XE":{"ae":[],"r":[]},"aat":{"ar":[],"r":[]},"azS":{"ag":["amq"]},"azP":{"ag":["amk"]},"ba2":{"ar":[],"r":[]},"ba5":{"aA":[]},"bdK":{"ar":[],"r":[]},"b9b":{"aA":[]},"br5":{"ar":[],"r":[]},"bh_":{"ar":[],"r":[]},"ayg":{"ag":["XE"]},"aas":{"ar":[],"r":[]},"bdJ":{"ar":[],"r":[]},"aar":{"ar":[],"r":[]},"bdI":{"ar":[],"r":[]},"ayh":{"ar":[],"r":[]},"aEk":{"ar":[],"r":[]},"I_":{"ar":[],"r":[]},"amo":{"ae":[],"r":[]},"XZ":{"ae":[],"r":[]},"Y_":{"ae":[],"r":[]},"azR":{"ag":["amo"]},"ba3":{"ar":[],"r":[]},"a9K":{"ar":[],"r":[]},"ba1":{"ar":[],"r":[]},"ba6":{"ar":[],"r":[]},"azQ":{"ag":["XZ"]},"bf8":{"ag":["Y_"]},"aUx":{"ar":[],"r":[]},"a3M":{"ae":[],"r":[]},"beS":{"ag":["a3M"]},"beR":{"aA":[]},"apc":{"ar":[],"r":[]},"WD":{"ae":[],"r":[]},"WC":{"ae":[],"r":[]},"W9":{"ae":[],"r":[]},"ZF":{"ae":[],"r":[]},"avb":{"ag":["WD"]},"ava":{"ag":["WC"]},"atX":{"ag":["W9"]},"bqY":{"ag":["ZF"]},"DX":{"ae":[],"r":[]},"atQ":{"ae":[],"r":[]},"bqW":{"ag":["DX"]},"bqX":{"ag":["atQ"]},"bqV":{"aA":[]},"apb":{"ae":[],"r":[]},"aBf":{"ag":["apb"]},"aaO":{"ar":[],"r":[]},"ap5":{"ae":[],"r":[]},"apa":{"ae":[],"r":[]},"bgt":{"ag":["ap5"]},"aBe":{"ag":["apa"]},"M3":{"ae":[],"r":[]},"aBg":{"ag":["M3"],"eu":[]},"b4o":{"iZ":[],"f6":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aNj"),Q:w("qk"),w:w("bt<n,n>"),c5:w("aPd"),dY:w("aPe"),d:w("ep<n?>"),e:w("FQ"),B:w("mG"),P:w("hO"),k:w("kh"),x:w("av<~>"),f5:w("M<afC>"),V:w("M<a9>"),t:w("M<qk>"),O:w("M<x>"),ac:w("M<ep<n?>>"),I:w("M<mG>"),u:w("M<hO>"),_:w("M<kh>"),cl:w("M<av<al<a0<n,@>>>>"),R:w("M<mJ>"),cq:w("M<al<+(P,P)>>"),ez:w("M<a0<n,aC>>"),gE:w("M<a0<n,n>>"),c7:w("M<a0<n,@>>"),fD:w("M<m_>"),bp:w("M<nK>"),g:w("M<v>"),v:w("M<hw>"),L:w("M<+(n,n)>"),G:w("M<+(P,P)>"),bF:w("M<+count,id,name(G,n,n)>"),A:w("M<cI>"),s:w("M<n>"),aS:w("M<j_>"),p:w("M<r>"),C:w("M<f6>"),D:w("M<l_>"),fp:w("M<NH>"),M:w("M<Ia>"),gZ:w("M<aDh>"),Y:w("M<ac_>"),E:w("M<aFh>"),F:w("M<P>"),dC:w("M<G>"),dS:w("M<aA?>"),d4:w("M<n?>"),J:w("cn<ag<ae>>"),b:w("al<mG>"),do:w("al<hO>"),r:w("al<kh>"),U:w("al<a0<n,@>>"),gk:w("al<+(n,n)>"),bC:w("al<+count,id,name(G,n,n)>"),h:w("al<n>"),c:w("al<l_>"),j:w("al<@>"),fK:w("bq<n,n>"),d2:w("bq<n,al<a0<n,@>>>"),a:w("a0<n,@>"),f:w("a0<@,@>"),gv:w("I<n,FS>"),n:w("iA"),g2:w("qE"),bV:w("ald"),fL:w("cu"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(P,al<hO>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bm<P>"),gc:w("dQ"),b4:w("cv<G>"),W:w("jZ<n>"),l:w("r"),cM:w("f6"),i:w("l_"),cc:w("E8"),bw:w("aar<n?>"),cy:w("Ic"),q:w("mu"),y:w("R"),gR:w("P"),z:w("@"),S:w("G"),eK:w("al<kh>?"),m:w("amn?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("qR?"),T:w("n?"),aD:w("dQ?"),o:w("l_?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOM=new A.bx(B.h_,B.bA,B.h_,B.bA)
D.a65=new A.bx(B.h_,B.jJ,B.h_,B.jJ)
D.aOY=new A.bx(B.jK,B.bA,B.bA,B.bA)
D.aP1=new A.ay(B.cU,1.4,B.r,-1)
D.aPb=new A.ay(B.ak,1,B.r,-1)
D.aQw=new A.aV(0,1/0,64,1/0)
D.aQz=new A.aV(0,84,0,1/0)
D.as4=w([B.lM,B.q3,B.c],x.O)
D.bEW=new A.a7(B.ax,B.aE,B.w,D.as4,null,null)
D.aRm=new A.o(null,null,null,null,null,D.bEW,B.n)
D.cI0=w([B.aR,B.bU],x.O)
D.bGT=new A.a7(B.b4,B.bc,B.w,D.cI0,null,null)
D.aRD=new A.o(null,null,null,null,null,D.bGT,B.n)
D.j3=new A.x(1,0.9098039215686274,0.7686274509803922,0.41568627450980394,B.t)
D.aXr=new A.f7(null,null,null,null,null,D.j3,null,null,null,null)
D.a7q=new A.cw(B.C,null,null,D.aXr,null)
D.ju=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.ep4=new A.F(!0,D.ju,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH_=new A.w("No books on the shelf yet.",null,D.ep4,null,null,null,null,null,null,null,null,null)
D.dL_=new A.B(B.nh,D.eH_,null)
D.aW4=new A.cw(B.C,null,null,D.dL_,null)
D.aWT=new A.cw(B.C,null,null,V.SI,null)
D.aYL=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZ8=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.b_K=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b0w=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b0K=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9o=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b46=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b4q=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.CN=new A.x(1,0.1411764705882353,0.0784313725490196,0.03529411764705882,B.t)
D.IE=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b5L=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b7H=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aaS=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eC0=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bbM=new A.ep(null,D.eC0,B.eQ,null,x.d)
D.eJX=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bbO=new A.ep(null,D.eJX,B.eQ,null,x.d)
D.bcl=new A.b6(38e5)
D.bd5=new A.ie(0,10,0,10)
D.bdn=new A.ie(0,4,0,4)
D.bdD=new A.L(10,10,14,10)
D.bdN=new A.ie(10,4,10,4)
D.bdW=new A.ie(10,8,10,8)
D.bdX=new A.L(10,8,8,8)
D.bep=new A.L(12,6,12,2)
D.beH=new A.L(14,10,6,6)
D.beL=new A.L(14,12,14,8)
D.beO=new A.L(14,12,8,14)
D.beR=new A.ie(14,14,14,14)
D.bfv=new A.L(16,2,16,10)
D.bfF=new A.L(16,6,16,30)
D.bfH=new A.L(16,6,16,8)
D.ad3=new A.L(18,16,18,8)
D.bgg=new A.L(18,20,18,22)
D.ad7=new A.L(18,24,18,24)
D.bgm=new A.L(18,30,18,30)
D.bgE=new A.L(20,10,12,20)
D.bgR=new A.L(20,18,16,18)
D.bgT=new A.L(20,18,20,6)
D.bhF=new A.L(24,32,24,28)
D.bhG=new A.L(24,36,24,32)
D.bhI=new A.L(26,26,24,14)
D.bhW=new A.L(2,4,2,8)
D.bi_=new A.L(30,0,30,0)
D.bia=new A.L(38,22,22,22)
D.ado=new A.L(40,24,24,24)
D.bib=new A.ie(40,40,40,40)
D.bid=new A.L(46,30,30,30)
D.adr=new A.L(4,0,0,8)
D.biD=new A.L(56,40,40,40)
D.biH=new A.L(1.25,1.25,1.25,1.25)
D.biI=new A.L(60,0,60,0)
D.biW=new A.ie(7,3,7,3)
D.bjk=new A.L(8,9,8,9)
D.bjo=new A.L(5,1.5,5,1.5)
D.bjx=new A.L(6,2.5,6,2.5)
D.eUX=new A.w("Signature",null,B.mQ,null,null,null,null,null,null,null,null,null)
D.bjM=new A.bI(1,B.bt,D.eUX,null)
D.eSh=new A.w("Tell the AI what to fix",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.bks=new A.bI(1,B.bt,D.eSh,null)
D.ew0=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU8=new A.w("Worksheets",null,D.ew0,null,null,null,null,null,null,null,null,null)
D.ew8=new A.F(!0,E.a7Z,null,null,null,null,13,B.cn,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT3=new A.w("Track your project spending",null,D.ew8,null,null,null,null,null,null,null,null,null)
D.cAL=w([D.eU8,B.aw,D.eT3],x.p)
D.ba4=new A.fs(B.af,B.e,B.j,B.F,null,B.p,null,0,D.cAL,null)
D.bkx=new A.bI(1,B.bt,D.ba4,null)
D.ery=new A.F(!0,D.j3,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBd=new A.w("FAMILY LIBRARY",null,D.ery,null,null,null,null,null,null,null,null,null)
D.bkL=new A.bI(1,B.bt,D.eBd,null)
D.K2=new C.FQ("leather","","",0,"gold",25,"middle","double","leather","",!0)
D.Wc=new C.FR(0,"male")
D.aeh=new C.FR(1,"female")
D.wv=new C.FR(2,"unknown")
D.rD=new C.ahG(0,"owner")
D.K3=new C.ahG(1,"editor")
D.jX=new C.ahG(2,"viewer")
D.af1=new A.a_(61199,"MaterialIcons",!1)
D.bn2=new A.a_(61504,"MaterialIcons",!1)
D.bn3=new A.a_(61505,"MaterialIcons",!1)
D.bn5=new A.a_(61587,"MaterialIcons",!1)
D.bnb=new A.a_(61890,"MaterialIcons",!1)
D.bo6=new A.a_(63034,"MaterialIcons",!0)
D.boY=new A.a_(63429,"MaterialIcons",!1)
D.ah9=new A.a_(984520,"MaterialIcons",!1)
D.bnC=new A.a_(62776,"MaterialIcons",!1)
D.brj=new A.ac(D.bnC,26,B.aW,null,null,null)
D.bm1=new A.a_(57648,"MaterialIcons",!1)
D.brB=new A.ac(D.bm1,14,B.c,null,null,null)
D.brT=new A.ac(B.DW,17,null,null,null,null)
D.bsk=new A.ac(B.cu,17,D.ju,null,null,null)
D.bsp=new A.ac(E.WZ,null,null,null,null,null)
D.bss=new A.ac(B.je,18,D.j3,null,null,null)
D.WI=new A.a_(62044,"MaterialIcons",!1)
D.bsy=new A.ac(D.WI,null,B.aR,null,null,null)
D.btn=new A.ac(B.dP,16,null,null,null,null)
D.btu=new A.ac(D.WI,32,B.aR,null,null,null)
D.bmQ=new A.a_(61201,"MaterialIcons",!1)
D.btM=new A.ac(D.bmQ,18,B.cU,null,null,null)
D.buM=new A.ac(B.KE,22,B.aH,null,null,null)
D.buX=new A.ac(B.dP,22,B.aW,null,null,null)
D.bv7=new A.ac(N.WN,22,B.c,null,null,null)
D.bvc=new A.ac(B.rN,52,B.c,null,null,null)
D.bvm=new A.ac(B.KE,30,B.aH,null,null,null)
D.ahK=new A.ac(B.rV,22,B.c,null,null,null)
D.bvO=new A.ac(B.dP,17,null,null,null,null)
D.bw6=new A.ac(B.ut,26,B.cU,null,null,null)
D.bwP=new A.ac(B.Xb,16,null,null,null,null)
D.bxt=new A.ac(B.rN,24,B.c,null,null,null)
D.bxy=new A.ac(B.Ks,20,B.qt,null,null,null)
D.bxD=new A.ac(B.DT,null,B.bU,null,null,null)
D.bxK=new A.ac(B.je,18,B.c,null,null,null)
D.bz5=new A.ac(B.e4,16,B.ak,null,null,null)
D.bzg=new A.ac(D.WI,20,B.aR,null,null,null)
D.aic=new A.ac(B.hr,20,null,null,null,null)
D.bzM=new A.ac(B.cu,18,D.ju,null,null,null)
D.bA3=new A.ac(B.wS,28,B.c,null,null,null)
D.bAb=new A.ac(B.Kj,null,B.fH,null,null,null)
D.bAv=new A.ac(B.wS,24,B.c,null,null,null)
D.bAW=new A.ac(B.rN,null,B.aR,null,null,null)
D.bAX=new A.ac(B.jC,20,B.cU,null,null,null)
D.bBe=new A.ac(B.DW,16,null,null,null,null)
D.bCM=new A.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.er,!0,null,null,null,null)
D.cOG=w([B.bo,B.aR,B.eS,B.aW],x.O)
D.bDx=new A.a7(B.ax,B.aE,B.w,D.cOG,null,null)
D.b4S=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.b9g=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cxU=w([D.b4S,D.b9g],x.O)
D.bDI=new A.a7(B.b4,B.bc,B.w,D.cxU,null,null)
D.cJD=w([B.eK,B.ff,B.eS],x.O)
D.bDL=new A.a7(B.ax,B.aE,B.w,D.cJD,null,null)
D.a9U=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZ9=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.czK=w([D.a9U,D.aZ9],x.O)
D.bEg=new A.a7(B.b4,B.bc,B.w,D.czK,null,null)
D.b0T=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.cOp=w([D.b0T,D.a9U],x.O)
D.aj7=new A.a7(B.ax,B.aE,B.w,D.cOp,null,null)
D.a92=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b2J=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cIT=w([D.a92,D.b2J],x.O)
D.bF5=new A.a7(B.a1,B.a7,B.w,D.cIT,null,null)
D.cUa=w([B.bR,B.mm],x.O)
D.bF7=new A.a7(B.b4,B.bc,B.w,D.cUa,null,null)
D.b4O=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b6c=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cUX=w([D.b4O,D.ju,D.ju,D.b6c],x.O)
D.cWU=w([0,0.07,0.9,1],x.F)
D.bFz=new A.a7(B.a1,B.a7,B.w,D.cUX,D.cWU,null)
D.bFJ=new A.a7(B.ax,B.aE,B.w,B.NX,null,null)
D.cTN=w([B.aW,B.aR,B.bU],x.O)
D.bGF=new A.a7(B.ax,B.aE,B.w,D.cTN,null,null)
D.c0U=w([B.bo,B.aW,B.eK],x.O)
D.c1_=w([B.bD,B.az,B.jS],x.O)
D.c11=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b3H=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c76=w([D.b3H,E.a9E],x.O)
D.dHQ=new A.v(1,2)
D.eb6=new A.cI(B.aV,D.dHQ,3)
D.aoU=w([D.eb6],x.A)
D.cek=w([B.fU,B.cf,B.fo],x.O)
D.cgX=w([B.bO,B.bz,B.bh],x.O)
D.cuJ=w([B.bU,B.bf],x.O)
D.aYC=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b4G=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cvm=w([D.aYC,D.b4G],x.O)
D.b0A=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cwK=w([D.b0A,B.dc],x.O)
D.cy6=w([B.b8,B.is,B.nM],x.O)
D.cyu=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZ5=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b26=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cWS=w([D.a92,D.aZ5,D.b26],x.O)
D.bl7=new C.tu("leather","Leather",D.cWS,"vintage")
D.cEY=w([B.dG,B.Iz,E.a8z],x.O)
D.ble=new C.tu("midnight","Midnight",D.cEY,"starry")
D.cy7=w([B.fn,B.eI,B.kl],x.O)
D.bld=new C.tu("forest","Forest",D.cy7,"story")
D.cYs=w([B.f5,B.fp,B.kN],x.O)
D.bla=new C.tu("burgundy","Burgundy",D.cYs,"royal")
D.cgy=w([B.az,B.q_,B.n0],x.O)
D.blb=new C.tu("royal","Royal",D.cgy,"royal")
D.cAj=w([B.bz,B.d3,L.CS],x.O)
D.bl8=new C.tu("charcoal","Charcoal",D.cAj,"geo")
D.cWX=w([B.ck,B.dM,B.vS],x.O)
D.blc=new C.tu("sunset","Sunset",D.cWX,"sunset")
D.cXu=w([B.is,B.CO,B.Ir],x.O)
D.bl9=new C.tu("ocean","Ocean",D.cXu,"band")
D.xm=w([D.bl7,D.ble,D.bld,D.bla,D.blb,D.bl8,D.blc,D.bl9],A.az("M<tu>"))
D.cBa=w([B.ai,B.aI,B.M],x.O)
D.cCh=w([B.fp,B.eI,B.dG,B.hR,B.tW,B.cU,B.kO,B.fr,B.dB],x.O)
D.cCi=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eb7=new A.cI(B.dt,B.dF,8)
D.cCr=w([D.eb7],x.A)
D.cDp=w([B.cd,B.dM,B.lc],x.O)
D.cDR=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cEU=w([B.cd,B.hk],x.O)
D.cGM=w([B.aM,B.z1,B.tP],x.O)
D.cHA=w([B.bJ,B.cJ,B.dC,B.aM],x.O)
D.cI1=w([B.kk,B.ck,B.tS],x.O)
D.cIu=w([B.eK,B.cU],x.O)
D.cIY=w([B.dg,B.h8,B.hQ],x.O)
D.cJ8=w([B.b3,B.bf,B.dG],x.O)
D.cJA=w([B.eY,B.dn,B.eI],x.O)
D.cJQ=w([B.e9,B.dG,B.Iz],x.O)
D.cL2=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.ZW=w(["leather","linen","plain","stars","rays"],x.s)
D.br_=new A.a_(985219,"MaterialIcons",!1)
D.bqz=new A.a_(983781,"MaterialIcons",!1)
D.arn=w([B.afq,B.hH,B.lU,B.hJ,D.br_,B.Ec,B.oZ,D.bqz,L.agX,B.wU,B.p0,B.lT],A.az("M<a_>"))
D.a_0=w(["double","single","corners","none"],x.s)
D.cNx=w([B.fJ,B.bu,B.fr],x.O)
D.cNK=w([],x.t)
D.Av=w([],x.u)
D.cPK=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cRM=w([B.aZ,B.h8,B.hR],x.O)
D.cSQ=w([B.cX,B.nP,B.TO],x.O)
D.cT2=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.da0=new C.ld("construction","Construction","Jobsite & builds",B.E4)
D.da7=new C.ld("house","Home Build","Houses & rooms",B.un)
D.d9Y=new C.ld("grocery","Grocery","Store & pantry",B.XK)
D.d9X=new C.ld("calculator","Calculations","Math & estimates",B.E_)
D.da5=new C.ld("lumber","Materials","Lumber & supplies",B.KT)
D.d9U=new C.ld("kitchen","Kitchen","Remodel & meals",Q.ag8)
D.bqx=new A.a_(983756,"MaterialIcons",!1)
D.d9Z=new C.ld("landscape","Landscaping","Yard & garden",D.bqx)
D.d9T=new C.ld("plumbing","Plumbing","Pipes & water",B.ux)
D.da8=new C.ld("electrical","Electrical","Wiring & power",B.hc)
D.d9R=new C.ld("store","Retail Shop","Daily business",B.kv)
D.d9S=new C.ld("paint_remodel","Paint & Remodel","Colors & walls",Q.afY)
D.bpS=new A.a_(983311,"MaterialIcons",!1)
D.da4=new C.ld("roofing","Roofing","Roofs & exteriors",D.bpS)
D.bqK=new A.a_(983986,"MaterialIcons",!1)
D.d9Q=new C.ld("warehouse","Warehouse","Storage & stock",D.bqK)
D.da2=new C.ld("vehicles","Vehicles","Fleet & transport",B.Ed)
D.bnF=new A.a_(62785,"MaterialIcons",!1)
D.d9W=new C.ld("farm","Farm","Crops & livestock",D.bnF)
D.d9V=new C.ld("restaurant","Restaurant","Food & catering",B.rT)
D.da1=new C.ld("tools","Tools","Workshop gear",B.Eb)
D.da6=new C.ld("wallet","Cash & Wallet","Quick spending",B.jC)
D.boS=new A.a_(63395,"MaterialIcons",!1)
D.da3=new C.ld("concrete","Concrete","Foundation work",D.boS)
D.da_=new C.ld("blueprint","Blueprint","Plans & design",Aa.afv)
D.a_p=w([D.da0,D.da7,D.d9Y,D.d9X,D.da5,D.d9U,D.d9Z,D.d9T,D.da8,D.d9R,D.d9S,D.da4,D.d9Q,D.da2,D.d9W,D.d9V,D.da1,D.da6,D.da3,D.da_],A.az("M<ld>"))
D.cTu=w([B.bk,B.bu],x.O)
D.cUb=w([B.hP,B.n4,B.dw],x.O)
D.a_t=w(["top","middle","bottom"],x.s)
D.cWk=w([B.cH,B.bf,B.dG],x.O)
D.cWN=w([B.bq,B.dn,B.eI],x.O)
D.cYn=w([B.bO,B.ai],x.O)
D.cYo=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dFY={top:0,middle:1,bottom:2}
D.d0w=new A.bt(D.dFY,["Top","Middle","Bottom"],x.w)
D.dFE={double:0,single:1,corners:2,none:3}
D.d0B=new A.bt(D.dFE,["Double line","One line","Corners","None"],x.w)
D.dGG={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d1Z=new A.bt(D.dGG,["Leather","Linen","Smooth","Stars","Light rays"],x.w)
D.d29=new A.bt(B.ii,[],A.az("bt<G,+(n,n)>"))
D.dFR={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AH=new A.bt(D.dFR,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("bt<n,G>"))
D.d4a=new F.S_(32,null)
D.d4b=new F.S_(40,null)
D.d4c=new F.S_(46,null)
D.aA5=new C.apa(null)
D.dIx=new A.v(8,14)
D.eHC=new A.w("Write a new book",null,B.jp,null,B.L,null,null,null,null,null,null,null)
D.dKu=new A.B(B.mt,D.eHC,null)
D.ahm=new A.ac(B.hF,18,B.c,null,null,null)
D.eBx=new A.w("Add",null,B.mR,null,null,null,null,null,null,null,null,null)
D.cHP=w([D.ahm,B.v_,D.eBx],x.p)
D.e9r=new A.cF(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cHP,null)
D.dKO=new A.B(B.rx,D.e9r,null)
D.dKP=new A.B(E.abX,V.SI,null)
D.evX=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEn=new A.w("New Project",null,D.evX,null,null,null,null,null,null,null,null,null)
D.cLp=w([D.ahm,B.ab,D.eEn],x.p)
D.e9u=new A.cF(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cLp,null)
D.dKZ=new A.B(B.iU,D.e9u,null)
D.aXG=new A.f7(2.2,null,null,null,null,B.cU,null,null,null,null)
D.edI=new A.a8(22,22,D.aXG,null)
D.aW0=new A.cw(B.C,null,null,D.edI,null)
D.dLm=new A.B(B.UI,D.aW0,null)
D.dLV=new A.iC(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dLY=new A.iC(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aB0=new A.iC(1,0.9607843137254902,0.48627450980392156,0)
D.Ga=new A.iC(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.xR=new A.iC(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dM3=new A.iC(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.f1q=new C.bcN(null)
D.baY=new A.lS(D.f1q,null,B.at,null,null)
D.aED=new A.cE(0,0,0,0,null,null,D.baY,null)
D.e_D=new A.V(-42,42)
D.e5u=new A.d6([0,0,1,1])
D.aFM=new A.af(0,0,520,160)
D.e8N=new A.b5(B.pI,B.V)
D.eSp=new A.w("Let the AI write it from your tree",null,B.ka,null,B.L,null,null,null,null,null,null,null)
D.bly=new A.dp(1,B.cj,D.eSp,null)
D.cET=w([E.ai3,B.ab,D.bly],x.p)
D.e9a=new A.cF(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cET,null)
D.eBe=new A.w("Save member",null,B.cb,null,null,null,null,null,null,null,null,null)
D.cS_=w([D.aic,B.ab,D.eBe],x.p)
D.e9i=new A.cF(B.b_,B.b5,B.j,B.m,null,B.p,null,0,D.cS_,null)
D.bv1=new A.ac(B.hI,14,B.aW,null,null,null)
D.eqg=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEN=new A.w("Cashier",null,D.eqg,null,null,null,null,null,null,null,null,null)
D.cLS=w([D.bv1,B.bp,D.eEN],x.p)
D.e9k=new A.cF(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cLS,null)
D.eBf=new A.w("Transfer & settings",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.bkj=new A.bI(1,B.bt,D.eBf,null)
D.cxC=w([D.ahK,B.av,D.bkj],x.p)
D.e9l=new A.cF(B.b_,B.e,B.j,B.m,null,B.p,null,0,D.cxC,null)
D.ect=new A.ap(16,40)
D.ecy=new A.ap(22,64)
D.ecE=new A.ap(280,88)
D.edo=new A.a8(30,null,null,null)
D.aXq=new A.f7(3,null,null,null,null,D.j3,null,null,null,null)
D.aHn=new A.a8(26,26,D.aXq,null)
D.eeF=new A.hI(2,12,12,1.05,null)
D.eEt=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.efm=new A.aX(D.eEt,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eEI=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aHG=new A.aX(D.eEI,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eM4=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.efR=new A.aX(D.eM4,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eVs=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.efW=new A.aX(D.eVs,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eGs=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eg2=new A.aX(D.eGs,null,null,null,null,null,null,null,null,null,null,null,null,B.fC,!1,null,null,null,B.q,null)
D.eT_=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aHK=new A.aX(D.eT_,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eBQ=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.egs=new A.aX(D.eBQ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eW1=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.ehb=new A.aX(D.eW1,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eRs=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ehz=new A.aX(D.eRs,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eVw=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ehC=new A.aX(D.eVw,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eNz=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ehE=new A.aX(D.eNz,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eI8=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ehF=new A.aX(D.eI8,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eI9=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eiF=new A.aX(D.eI9,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eEv=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eiX=new A.aX(D.eEv,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eGd=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ejf=new A.aX(D.eGd,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eN5=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.ejv=new A.aX(D.eN5,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eIR=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.ejw=new A.aX(D.eIR,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.emp=new A.F(!0,D.ju,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emN=new A.F(!0,D.ju,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.en9=new A.F(!0,D.j3,null,null,null,null,19,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,D.aoU,null,null,null)
D.enm=new A.qX(!0,B.tm,null,null,null,null,B.dq,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.enC=new A.F(!0,D.ju,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eo9=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3F=new A.qX(!0,B.Pe,null,null,null,null,B.dq,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.ep7=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epx=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er_=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er3=new A.F(!0,G.iO,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esh=new A.F(!0,B.M,null,null,null,null,13,B.a_,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esV=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ety=new A.F(!0,B.bU,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etD=new A.F(!0,B.bR,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etZ=new A.F(!0,D.IE,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eu7=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ev2=new A.F(!0,B.cU,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evu=new A.F(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evV=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exk=new A.F(!0,B.ai,null,null,null,null,11.5,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exs=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJO=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a48=new A.F(!0,B.ai,null,null,null,null,12,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ez2=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezo=new A.F(!0,G.iO,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezu=new A.F(!0,G.iO,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAc=new A.w("Themes",null,B.pt,null,null,null,null,null,null,null,null,null)
D.eAK=new A.w("Add Item",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eqL=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB4=new A.w("Debt receipt",null,D.eqL,null,B.L,null,null,null,null,null,null,null)
D.aJK=new A.F(!0,B.ai,null,null,null,null,11,B.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBl=new A.w("Person who owes",null,D.aJK,null,null,null,null,null,null,null,null,null)
D.eCh=new A.w("Notes",null,B.a3L,null,null,null,null,null,null,null,null,null)
D.eCG=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.epP=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCK=new A.w("Share",null,D.epP,null,null,null,null,null,null,null,null,null)
D.eDz=new A.w("Move your family trees",null,D.aJO,null,null,null,null,null,null,null,null,null)
D.eE6=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eEH=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eFP=new A.w("Remove this book?",null,B.hi,null,null,null,null,null,null,null,null,null)
D.aKe=new A.w("Download",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eGO=new A.w("What should the AI do?",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.eI4=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eJ5=new A.w("Ribbon bookmark",null,B.iI,null,null,null,null,null,null,null,null,null)
D.exe=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJw=new A.w("NGMY.ORG",null,D.exe,null,B.L,null,null,null,null,null,null,null)
D.eKG=new A.w("Scan family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.etS=new A.F(!0,B.c,null,null,null,null,13,B.a_,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLn=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.etS,null,B.L,null,null,null,null,null,null,null)
D.eMw=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.eMC=new A.w("Thumbnail",null,B.pt,null,null,null,null,null,null,null,null,null)
D.eNb=new A.w("Save the cover",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eNA=new A.w("Your photos",null,B.pt,null,null,null,null,null,null,null,null,null)
D.eNP=new A.w("Create Project",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eOf=new A.w("Design your cover",null,A0.GM,null,null,null,null,null,null,null,null,null)
D.eOl=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.eOo=new A.w("PICTURE",null,H.m9,null,null,null,null,null,null,null,null,null)
D.eOK=new A.w("Paid",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eOM=new A.w("You can undo it right after.",null,Z.a3Q,null,null,null,null,null,null,null,null,null)
D.ePc=new A.w("Print",null,B.tw,null,null,null,null,null,null,null,null,null)
D.ePv=new A.w("Amount owed",null,D.aJK,null,null,null,null,null,null,null,null,null)
D.ePI=new A.w("Got it",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eQe=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.eQh=new A.w("Add to budget",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eQG=new A.w("Debtor signature",null,B.a3L,null,null,null,null,null,null,null,null,null)
D.erl=new A.F(!0,null,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQO=new A.w("Change icon",null,D.erl,null,null,null,null,null,null,null,null,null)
D.eRR=new A.w("Family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eSf=new A.w("Download",null,B.tw,null,null,null,null,null,null,null,null,null)
D.eSj=new A.w("Change",null,B.pt,null,null,null,null,null,null,null,null,null)
D.eT5=new A.w("Clear all",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eT8=new A.w("WHAT SHOULD IT CHANGE?",null,H.m9,null,null,null,null,null,null,null,null,null)
D.eTH=new A.w("COLOUR",null,H.m9,null,null,null,null,null,null,null,null,null)
D.eTT=new A.w("Do it",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eTW=new A.w("Create Tree",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eUR=new A.w("Create Family Tree",null,B.ez,null,null,null,null,null,null,null,null,null)
D.els=new A.F(!0,D.j3,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV5=new A.w("Write the first page myself",null,D.els,null,null,null,null,null,null,null,null,null)
D.eVD=new A.w("Create Project",null,E.aJx,null,null,null,null,null,null,null,null,null)
D.eZK=new C.a8O(1,"header")
D.a4Q=new C.a8O(2,"projects")
D.eZL=new C.a8O(3,"cashier")
D.a4R=new C.a8O(4,"familyTree")
D.f9i=new C.cpl(0,"start")
D.f9j=new C.cpm(0,"start")
D.eZR=new C.W9(null)
D.f_Q=new C.WC(null)
D.d26=new A.bt(B.ii,[],A.az("bt<n,E8>"))
D.cO3=w([],x.E)
D.cO4=w([],x.M)
D.f0l=new C.ba4(D.d26,D.cO3,D.cO4,0,0,null,null)
D.f24=new C.Y_(null)
D.a5x=new C.aFZ(0,"projects")
D.aN1=new C.aFZ(1,"cashier")
D.f7h=new C.aFZ(2,"familyTree")})()};
(a=>{a["WQli5+NQyCgx2LByxgMPWTlfjdg="]=a.current})($__dart_deferred_initializers__);