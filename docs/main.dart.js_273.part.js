((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A_,G,F,E,N,A0,A1,R,A2,A3,M,A4,I,A5,A6,S,T,U,A7,A8,V,A9,Aa,W,Ab,Ac,Ad,L,Ae,X,Y,H,O,C={
bAC(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bAC=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$bAC)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.S(y.j)
t=A.mT(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dl(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dr(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qx(t,a1,B.hj,E.El),$async$bAC)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Pq(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ab(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.S(l!=null&&A.Kb(l)?y.l:y.i)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a0(r.a(j.h(a2,a7)),q,p):B.cz
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.A(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a14(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAC,v)},
afr(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afr=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$afr)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.S(y.j)
t=A.mT(b6)
s=x.S
r=A.da(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a0S(new A.J(r,new C.fpK(),r.$ti.k("J<aj.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fpJ(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afr)
case 6:l=c5
k=F.Pq(l==null?"":l)
if(k==null)throw A.S("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.amD(s,D.ddw,r.b(k.h(0,"cover"))?A.a0(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.S("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dl(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afr)
case 10:l=c5
k=l==null?null:F.Pq(l)
if(k==null)throw A.S(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d7(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kR(a5,a2.k("kR<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
b0=J.a7(a9)
b1=A.aN(b0.h(a9,"index"))
i=b1==null?null:B.k.O(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.t(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.t(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.A(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cC(new A.bc(h,s),new C.fpL(),s.k("G.E"),p)
p=F.a0S(A.oY(p,3,A.a2(p).k("G.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cy<1>")
b4=A.B(new A.cy(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a14(s,b9),$async$afr)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.amD(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afr,v)},
hdv(d,e,f){return A.c9(null,B.w.j(0.65),!1,null,new C.fyR(e,f),d,null,!0,!0,x.g2)},
amD:function amD(d,e,f){this.a=d
this.b=e
this.c=f},
fpK:function fpK(){},
fpJ:function fpJ(d){this.a=d},
fpL:function fpL(){},
fyR:function fyR(d,e){this.a=d
this.b=e},
byt(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$byt=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.ffi())){u=null
w=1
break}t=B.d.dc(b1,new C.ffj())
s=$.W()
r=new A.rL()
q=A.Gn(r,D.aJH)
p=A.L()
p.r=B.c.gp(0)
q.aX(D.aJH,p)
o=A.L()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.af
o.d=B.bO
o.e=B.fx
n=new C.ffo(t)
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
s=$.W()
p=A.a([],x.v)
a3=new A.aP(s.r,B.aq,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aN(a3,o)}else{p=A.a([],x.v)
a3=new A.aP(s.r,B.aq,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aN(a3,o)}w=4
return A.b(r.q5().yL(520,160),$async$byt)
case 4:w=3
return A.b(b3.hj(B.fR),$async$byt)
case 3:b0=b3
u=b0==null?null:J.fa(B.dE.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byt,v)},
fnp(d){return C.hRB(d)},
hRB(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fnp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bcK()
n=d.x!=null&&d.yr(null).length===0
if(d.x!=null)t=n?D.yH:D.Hl
else t=d.gSv()?D.Hl:D.aEN
w=3
return A.b(C.byt(d.ax),$async$fnp)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alm(s)
r=A.a2Z(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aEN}else{p.c=C.wj(q,!0)
p.b=n?D.yH:D.Hl}r.a1u(A.fIL(new C.fnr(p,d,new C.fns(),t,n,o),null,D.bqn,B.vD))
u=r.jM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnp,v)},
fu3(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fu3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fnp(d),$async$fu3)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A3.FR(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fu3,v)},
ffi:function ffi(){},
ffj:function ffj(){},
ffo:function ffo(d){this.a=d},
fns:function fns(){},
fnr:function fnr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fnq:function fnq(){},
fzi(d,e){var w=0,v=A.j(x.H)
var $async$fzi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,B.w.j(0.55),!0,null,new C.fzm(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fzi)
case 2:return A.h(null,v)}})
return A.i($async$fzi,v)},
bB4(d,e,f,g){return C.hYY(d,e,f,g)},
hYY(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bB4=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gam(e.split(",")):e
r=B.cB.aI(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eK0)
w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.fze(g,r,f),d,null,!0,!0,x.H),$async$bB4)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bB4,v)},
fzn(d,e){var w=0,v=A.j(x.H)
var $async$fzn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,null,!0,null,new C.fzq(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fzn)
case 2:return A.h(null,v)}})
return A.i($async$fzn,v)},
aWC:function aWC(d,e){this.c=d
this.a=e},
bZO:function bZO(){},
b8B:function b8B(d,e){this.b=d
this.a=e},
fzm:function fzm(d,e){this.a=d
this.b=e},
fzj:function fzj(d){this.a=d},
fzk:function fzk(d,e,f){this.a=d
this.b=e
this.c=f},
fzl:function fzl(d,e){this.a=d
this.b=e},
fze:function fze(d,e,f){this.a=d
this.b=e
this.c=f},
fzc:function fzc(d){this.a=d},
fzd:function fzd(d,e,f){this.a=d
this.b=e
this.c=f},
fzq:function fzq(d,e){this.a=d
this.b=e},
fzo:function fzo(d){this.a=d},
fzp:function fzp(d,e,f){this.a=d
this.b=e
this.c=f},
fix(d,e){var w=0,v=A.j(x.y),u,t
var $async$fix=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0D(d),$async$fix)
case 3:t=g
J.nc(t,new C.fiy(e))
u=A.ag4(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fix,v)},
fiy:function fiy(d){this.a=d},
amK:function amK(d,e,f){this.c=d
this.d=e
this.a=f},
aB_:function aB_(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dCm:function dCm(d,e){this.a=d
this.b=e},
dC7:function dC7(d,e){this.a=d
this.b=e},
dCa:function dCa(d,e,f){this.a=d
this.b=e
this.c=f},
dC9:function dC9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dC8:function dC8(d,e){this.a=d
this.b=e},
dCb:function dCb(d,e){this.a=d
this.b=e},
dC5:function dC5(){},
dC6:function dC6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dC4:function dC4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dBQ:function dBQ(d){this.a=d},
dBR:function dBR(d,e,f){this.a=d
this.b=e
this.c=f},
dBS:function dBS(d,e){this.a=d
this.b=e},
dBP:function dBP(d){this.a=d},
dBX:function dBX(d,e){this.a=d
this.b=e},
dBO:function dBO(d){this.a=d},
dBY:function dBY(d,e,f){this.a=d
this.b=e
this.c=f},
dBZ:function dBZ(d,e,f){this.a=d
this.b=e
this.c=f},
dBN:function dBN(d,e){this.a=d
this.b=e},
dC_:function dC_(d,e,f){this.a=d
this.b=e
this.c=f},
dBM:function dBM(d,e){this.a=d
this.b=e},
dC0:function dC0(d,e){this.a=d
this.b=e},
dBL:function dBL(d){this.a=d},
dC1:function dC1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dBJ:function dBJ(){},
dBD:function dBD(d){this.a=d},
dBE:function dBE(d){this.a=d},
dBK:function dBK(d,e){this.a=d
this.b=e},
dC2:function dC2(d,e){this.a=d
this.b=e},
dBI:function dBI(d){this.a=d},
dC3:function dC3(d){this.a=d},
dBH:function dBH(){},
dBT:function dBT(d,e){this.a=d
this.b=e},
dBG:function dBG(d){this.a=d},
dBU:function dBU(d,e,f){this.a=d
this.b=e
this.c=f},
dBF:function dBF(d,e){this.a=d
this.b=e},
dBC:function dBC(d,e){this.a=d
this.b=e},
dBV:function dBV(d){this.a=d},
dBW:function dBW(d,e,f){this.a=d
this.b=e
this.c=f},
dCp:function dCp(){},
dCq:function dCq(d,e){this.a=d
this.b=e},
dCn:function dCn(d){this.a=d},
dCo:function dCo(d){this.a=d},
dCj:function dCj(d,e){this.a=d
this.b=e},
dCk:function dCk(d){this.a=d},
dCc:function dCc(d,e,f){this.a=d
this.b=e
this.c=f},
dCd:function dCd(d,e,f){this.a=d
this.b=e
this.c=f},
dCe:function dCe(d,e,f){this.a=d
this.b=e
this.c=f},
dCf:function dCf(d,e,f){this.a=d
this.b=e
this.c=f},
dCg:function dCg(d,e,f){this.a=d
this.b=e
this.c=f},
dCh:function dCh(d,e,f){this.a=d
this.b=e
this.c=f},
dCi:function dCi(d,e,f){this.a=d
this.b=e
this.c=f},
dCr:function dCr(){},
dCs:function dCs(){},
dCt:function dCt(){},
dCu:function dCu(d){this.a=d},
dCl:function dCl(d,e){this.a=d
this.b=e},
h9H(d){return B.d.dL(D.a0c,new C.fj2(d),new C.fj3())},
tT:function tT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fj2:function fj2(d){this.a=d},
fj3:function fj3(){},
aj5:function aj5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSs:function aSs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RD:function RD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bc9:function bc9(){this.d=$
this.c=this.a=null},
d2f:function d2f(d,e){this.a=d
this.b=e},
d2d:function d2d(d,e){this.a=d
this.b=e},
d2e:function d2e(){},
d2g:function d2g(d,e){this.a=d
this.b=e},
fVG(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.mZ(t,w,v,u==null?new A.Q(Date.now(),0,!1):u)},
JX(d,e){return C.hQe(d,e)},
hQe(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$JX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$JX)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aG(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d7(p,x.f)
o=A.cC(o,new C.fl0(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a1<G.E>")
o=A.B(new A.a1(o,new C.fl1(),n),n.k("G.E"))
B.d.b1(o,new C.fl2())
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
return A.i($async$JX,v)},
Aj(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Aj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$Aj)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fxX(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Aj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Aj,v)},
aOF(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aOF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.JX(d,e),$async$aOF)
case 2:u=h
t=J.cD(u)
s=t.bf(u,new C.fG_(f))
if(s===-1)t.cm(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Aj(d,e,u),$async$aOF)
case 3:return A.h(null,v)}})
return A.i($async$aOF,v)},
byU(d,e,f){var w=0,v=A.j(x.H),u
var $async$byU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.JX(d,e),$async$byU)
case 2:u=h
J.nc(u,new C.fip(f))
w=3
return A.b(C.Aj(d,e,u),$async$byU)
case 3:return A.h(null,v)}})
return A.i($async$byU,v)},
bz8(d,e){return C.hQd(d,e)},
hQd(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bz8=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bz8)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.LB
w=1
break}p=B.R.aG(0,q,null)
if(x.f.b(p)){o=A.a0(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aN(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.BE.aj(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a1G,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a19,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a14,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cKI,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.GN(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.LB
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.LB
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bz8,v)},
Qu(d,e,f){return C.hYu(d,e,f)},
hYu(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Qu=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Qu)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ad(),null)),$async$Qu)
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
return A.i($async$Qu,v)},
PZ(d,e){return C.hQf(d,e)},
hQf(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$PZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$PZ)
case 7:r=g
q=r.rH("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.JX(d,e),$async$PZ)
case 8:if(!j.cw(g)){n=B.a.i(d.toLowerCase())
m=J.lg(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$PZ)
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
return A.i($async$PZ,v)},
aeL(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aeL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PZ(d,e),$async$aeL)
case 3:s=g
r=J.a7(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.ay(),$async$aeL)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aeL)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeL,v)},
a1h(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1h=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.PZ(d,e),$async$a1h)
case 2:s=h
J.hJ(s,f)
w=3
return A.b(A.ay(),$async$a1h)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1h)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1h)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1h)
case 6:return A.h(null,v)}})
return A.i($async$a1h,v)},
mZ:function mZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fl0:function fl0(){},
fl1:function fl1(){},
fl2:function fl2(){},
fxX:function fxX(){},
fG_:function fG_(d){this.a=d},
fip:function fip(d){this.a=d},
GN:function GN(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bL4:function bL4(d){this.a=d},
hYN(d,e,f,g,h,i,j){return A.a4(d,!1).ci(A.eo(new C.fyv(j,i,f,e,h,g),!0,null,x.H))},
PV(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$PV=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PZ(h,g),$async$PV)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ab(k)>=6){d.I(x.q).f.R(D.aLJ)
u=!1
w=1
break}w=4
return A.b(C.hdv(d,f,e),$async$PV)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aeL(h,g),$async$PV)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mZ(""+(q+n),l,B.a.i(m.b),new A.Q(Date.now(),0,!1)))}w=6
return A.b(C.Aj(h,r,p),$async$PV)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Qu(h,r,new C.GN("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$PV)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$PV,v)},
fyv:function fyv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Y4:function Y4(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ay1:function ay1(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d2V:function d2V(d){this.a=d},
d2U:function d2U(d,e){this.a=d
this.b=e},
d2J:function d2J(d,e){this.a=d
this.b=e},
d2G:function d2G(d,e){this.a=d
this.b=e},
d2h:function d2h(d){this.a=d},
d2i:function d2i(d,e){this.a=d
this.b=e},
d2K:function d2K(d){this.a=d},
d2q:function d2q(d){this.a=d},
d2o:function d2o(d){this.a=d},
d2p:function d2p(d){this.a=d},
d2r:function d2r(d){this.a=d},
d2H:function d2H(d){this.a=d},
d2I:function d2I(){},
d2m:function d2m(d){this.a=d},
d2n:function d2n(d,e){this.a=d
this.b=e},
d2s:function d2s(d){this.a=d},
d2t:function d2t(d,e){this.a=d
this.b=e},
d2T:function d2T(d){this.a=d},
d2S:function d2S(d,e){this.a=d
this.b=e},
d2R:function d2R(d){this.a=d},
d2D:function d2D(d){this.a=d},
d2C:function d2C(d){this.a=d},
d2E:function d2E(d){this.a=d},
d2j:function d2j(d,e){this.a=d
this.b=e},
d2F:function d2F(d,e){this.a=d
this.b=e},
d2w:function d2w(d){this.a=d},
d2x:function d2x(d){this.a=d},
d2v:function d2v(){},
d2y:function d2y(d){this.a=d},
d2z:function d2z(d){this.a=d},
d2A:function d2A(d,e){this.a=d
this.b=e},
d2B:function d2B(d,e,f){this.a=d
this.b=e
this.c=f},
d2u:function d2u(d,e){this.a=d
this.b=e},
d2M:function d2M(d){this.a=d},
d2L:function d2L(){},
d2N:function d2N(d){this.a=d},
d2O:function d2O(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2Q:function d2Q(d,e){this.a=d
this.b=e},
d2k:function d2k(d){this.a=d},
d2l:function d2l(d){this.a=d},
Y8:function Y8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcu:function bcu(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d4F:function d4F(d){this.a=d},
d4G:function d4G(d){this.a=d},
d4E:function d4E(d){this.a=d},
d4H:function d4H(d){this.a=d},
d4D:function d4D(d){this.a=d},
d4I:function d4I(d){this.a=d},
d4C:function d4C(d){this.a=d},
d4J:function d4J(d,e){this.a=d
this.b=e},
d4B:function d4B(d,e){this.a=d
this.b=e},
d4K:function d4K(d,e){this.a=d
this.b=e},
Y6:function Y6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adf:function adf(d,e,f){this.a=d
this.b=e
this.c=f},
ay2:function ay2(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d39:function d39(d,e){this.a=d
this.b=e},
d38:function d38(d,e){this.a=d
this.b=e},
d3d:function d3d(d){this.a=d},
d3c:function d3c(d,e){this.a=d
this.b=e},
d3a:function d3a(d){this.a=d},
d3b:function d3b(d){this.a=d},
d3e:function d3e(d){this.a=d},
d3f:function d3f(d){this.a=d},
d37:function d37(d,e){this.a=d
this.b=e},
d36:function d36(d,e){this.a=d
this.b=e},
J3:function J3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xn:function Xn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cCd:function cCd(d){this.a=d},
cCe:function cCe(){},
cCf:function cCf(d){this.a=d},
b9M:function b9M(d,e,f){this.b=d
this.c=e
this.a=f},
b9D:function b9D(d,e){this.b=d
this.a=e},
tU:function tU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XF:function XF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9K:function b9K(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cVF:function cVF(d,e,f){this.a=d
this.b=e
this.c=f},
cVE:function cVE(d,e){this.a=d
this.b=e},
cW3:function cW3(d){this.a=d},
cVR:function cVR(){},
cW4:function cW4(d){this.a=d},
cVQ:function cVQ(){},
cW5:function cW5(d,e){this.a=d
this.b=e},
cVP:function cVP(d,e){this.a=d
this.b=e},
cW6:function cW6(d,e){this.a=d
this.b=e},
cVO:function cVO(d,e){this.a=d
this.b=e},
cW7:function cW7(d){this.a=d},
cVN:function cVN(){},
cW8:function cW8(d,e){this.a=d
this.b=e},
cVM:function cVM(d,e){this.a=d
this.b=e},
cW9:function cW9(d){this.a=d},
cVZ:function cVZ(d,e){this.a=d
this.b=e},
cWa:function cWa(d){this.a=d},
cWb:function cWb(d){this.a=d},
cWd:function cWd(d){this.a=d},
cWe:function cWe(d){this.a=d},
cVY:function cVY(d,e){this.a=d
this.b=e},
cWf:function cWf(d,e){this.a=d
this.b=e},
aF2:function aF2(d){this.a=d},
beX:function beX(d){this.a=d},
b8_:function b8_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hPd(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agg(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bx(new A.Q(Date.now(),0,!1))
s=new C.fj6(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a1<1>"),q=q.k("cS<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xh)m.push(l===D.Ye?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cB(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cB(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jR(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jR(h,a2,a2)-A.jR(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cS(new A.a1(a4,new C.fj4(u,f),p),new C.fj5(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hPe(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agg(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fjb(v,e)
q=new C.fj9(v)
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
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.d9(new A.bc(p,d),d.k("G.E"))
n=A.B(d,A.a2(d).k("cl.E"))
B.d.fe(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gah(e),k=new A.hc(l,new C.fja(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hB1(d,e,f,g){var w,v,u=C.hPf(d,e)
if(u<=0||f.length<=u)return new A.acQ(!1,D.Bt,f)
if(g.t(0,e.a))return new A.acQ(!1,D.Bt,f)
w=A.T(f).c
v=A.da(f,0,A.dJ(u,"count",x.S),w).dC(0)
return new A.acQ(!0,A.da(f,u,null,w).dC(0),v)},
hB2(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agg(d3),d2=d1.length
if(d2===0)return D.fzd
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.cf(0,t.a,new C.d3m(t))}s=new C.d3D(v)
d2=x.h
r=A.U(w,d2)
q=new C.d3v(r)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d3u(r)
l=A.U(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.cf(0,k,new C.d3n()),o)}h=new C.d3t(s)
g=new C.d3s(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a1<G.E>")
f=A.B(new A.a1(new A.bc(v,p),new C.d3o(h),o),o.k("G.E"))
e=f.length===0?new A.bc(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.gR
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.d3B(new C.d3x(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.gaiC(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qU(J.dG(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.cc)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d3l(a2,new C.d3C(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.ds(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cy<1>")
d2=A.B(new A.cy(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.F1(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jb(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cy<1>")
d2=A.B(new A.cy(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bH(0,new C.d3p(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gah(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gU(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gah(b5),i=new A.hc(j,new C.d3q(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b1(o,new C.d3r())
c6.push(new C.aH7(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bce(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h9f(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(d)
return w==null?null:w.b[1]},
h3F(d,e,f,g,h,i,j,k,l,m,n){return new C.YI(k,f,j,e,l,n,m,d,g,h,i,null)},
aA0(d,e,f,g,h,i,j){return new C.bfS(i,d,e,f,j,h,g,null)},
anQ:function anQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBA:function aBA(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dPJ:function dPJ(d){this.a=d},
dPI:function dPI(d){this.a=d},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPN:function dPN(d){this.a=d},
dPH:function dPH(d,e){this.a=d
this.b=e},
dPK:function dPK(d){this.a=d},
dPP:function dPP(d){this.a=d},
dPO:function dPO(d,e){this.a=d
this.b=e},
anK:function anK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBx:function aBx(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dP9:function dP9(d){this.a=d},
dP7:function dP7(d){this.a=d},
dP8:function dP8(d){this.a=d},
dPa:function dPa(d,e){this.a=d
this.b=e},
dP4:function dP4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOD:function dOD(d){this.a=d},
dOE:function dOE(d,e){this.a=d
this.b=e},
dOS:function dOS(d){this.a=d},
dOQ:function dOQ(d){this.a=d},
dOR:function dOR(d,e){this.a=d
this.b=e},
dOT:function dOT(d){this.a=d},
dOU:function dOU(d,e){this.a=d
this.b=e},
dP3:function dP3(d,e){this.a=d
this.b=e},
dP1:function dP1(d,e){this.a=d
this.b=e},
dP0:function dP0(d,e){this.a=d
this.b=e},
dOX:function dOX(d,e){this.a=d
this.b=e},
dOW:function dOW(d){this.a=d},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dP_:function dP_(d){this.a=d},
dP2:function dP2(d,e){this.a=d
this.b=e},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOs:function dOs(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e,f){this.a=d
this.b=e
this.c=f},
dP6:function dP6(d,e,f){this.a=d
this.b=e
this.c=f},
dP5:function dP5(d){this.a=d},
dOt:function dOt(d){this.a=d},
dOu:function dOu(d){this.a=d},
dOv:function dOv(){},
dOw:function dOw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOz:function dOz(d,e){this.a=d
this.b=e},
dOy:function dOy(d){this.a=d},
dOB:function dOB(d,e){this.a=d
this.b=e},
dOx:function dOx(d){this.a=d},
dPb:function dPb(d){this.a=d},
dON:function dON(){},
dOO:function dOO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOM:function dOM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOI:function dOI(d,e,f){this.a=d
this.b=e
this.c=f},
dOH:function dOH(d,e,f){this.a=d
this.b=e
this.c=f},
dOF:function dOF(d,e){this.a=d
this.b=e},
dOJ:function dOJ(d){this.a=d},
dOK:function dOK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOG:function dOG(d,e){this.a=d
this.b=e},
dOL:function dOL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOP:function dOP(d,e){this.a=d
this.b=e},
dPj:function dPj(){},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPm:function dPm(d,e){this.a=d
this.b=e},
dPf:function dPf(d){this.a=d},
dPd:function dPd(d,e){this.a=d
this.b=e},
dPg:function dPg(d,e){this.a=d
this.b=e},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPi:function dPi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPn:function dPn(d){this.a=d},
dPe:function dPe(d){this.a=d},
dOC:function dOC(d){this.a=d},
bcc:function bcc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d3j:function d3j(d){this.a=d},
d3i:function d3i(d,e){this.a=d
this.b=e},
d3k:function d3k(d){this.a=d},
d3h:function d3h(d,e){this.a=d
this.b=e},
fj6:function fj6(d,e){this.a=d
this.b=e},
fj7:function fj7(d){this.a=d},
fj8:function fj8(){},
fj4:function fj4(d,e){this.a=d
this.b=e},
fj5:function fj5(){},
fjb:function fjb(d,e){this.a=d
this.b=e},
fjc:function fjc(d){this.a=d},
fjd:function fjd(){},
fj9:function fj9(d){this.a=d},
fja:function fja(d,e){this.a=d
this.b=e},
Jb:function Jb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F1:function F1(d,e){this.a=d
this.b=e},
bce:function bce(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d3m:function d3m(d){this.a=d},
d3D:function d3D(d){this.a=d},
d3v:function d3v(d){this.a=d},
d3w:function d3w(){},
d3u:function d3u(d){this.a=d},
d3n:function d3n(){},
d3t:function d3t(d){this.a=d},
d3s:function d3s(d,e){this.a=d
this.b=e},
d3o:function d3o(d){this.a=d},
d3x:function d3x(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d3y:function d3y(d){this.a=d},
d3z:function d3z(d){this.a=d},
d3A:function d3A(){},
d3B:function d3B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3C:function d3C(){},
d3l:function d3l(d,e,f,g,h,i,j,k,l,m){var _=this
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
d3p:function d3p(d,e){this.a=d
this.b=e},
d3q:function d3q(d){this.a=d},
d3r:function d3r(){},
aH7:function aH7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcf:function bcf(d,e){this.b=d
this.a=e},
d3E:function d3E(){},
d3F:function d3F(d){this.a=d},
d3G:function d3G(d){this.a=d},
d3H:function d3H(){},
bfT:function bfT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbk:function bbk(d,e){this.b=d
this.a=e},
btp:function btp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f26:function f26(d){this.a=d},
bjb:function bjb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eEo:function eEo(d){this.a=d},
eEn:function eEn(d,e){this.a=d
this.b=e},
YI:function YI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
azZ:function azZ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dju:function dju(d,e){this.a=d
this.b=e},
djt:function djt(d){this.a=d},
djr:function djr(d){this.a=d},
djs:function djs(d){this.a=d},
djD:function djD(d){this.a=d},
djE:function djE(d){this.a=d},
djC:function djC(d,e){this.a=d
this.b=e},
djF:function djF(){},
djI:function djI(d){this.a=d},
djB:function djB(d,e){this.a=d
this.b=e},
djH:function djH(){},
djJ:function djJ(d){this.a=d},
djA:function djA(d,e){this.a=d
this.b=e},
djK:function djK(d){this.a=d},
djz:function djz(d){this.a=d},
djL:function djL(d){this.a=d},
djy:function djy(d){this.a=d},
djM:function djM(d){this.a=d},
djx:function djx(d){this.a=d},
djN:function djN(d){this.a=d},
djw:function djw(d){this.a=d},
djO:function djO(d){this.a=d},
djv:function djv(d,e){this.a=d
this.b=e},
djG:function djG(d){this.a=d},
abI:function abI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfS:function bfS(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
abH:function abH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bfR:function bfR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
djP:function djP(d){this.a=d},
djQ:function djQ(d,e){this.a=d
this.b=e},
aA_:function aA_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGa:function aGa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abJ:function abJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
djZ:function djZ(d){this.a=d},
J_:function J_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fZy(d){var w=d.S,v=x.N
return w.iM(w,new C.c5x(),v,v)},
hsA(d){var w=d.bC
if(w>=0)return w
return 5},
fZA(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fZy(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
fZz(d,e){var w=C.fZA(d,e)
if(w!=null&&w.c9(new A.Q(Date.now(),0,!1)))return!0
return!1},
hsB(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a0(C.fZy(d),w,w)
u=C.fZA(d,e)
t=u!=null&&u.c9(new A.Q(Date.now(),0,!1))?u:new A.Q(Date.now(),0,!1)
v.n(0,s,t.bN(A.dA(30,0,0,0,0,0).a).a5().ac())
d.S=v},
aY1(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aY1=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l6(t,B.H8),$async$aY1)
case 3:if(l){u=!0
w=1
break}u=A.kK(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.H8,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY1,v)},
c5x:function c5x(){},
hsy(){var w,v=$.pb(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"FT"+B.d.fS(u)},
HF(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$HF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$HF)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_family_tree_backup_codes_v1",null,!1,B.bF),$async$HF)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a8(m)
$.am.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$HF,v)},
a5R(d){return C.hsz(d)},
hsz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a5R=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$a5R)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hz("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$a5R)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a8(p)
$.am.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a5R,v)},
c5w(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c5w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.HF(),$async$c5w)
case 3:t=m.jo(f),t=t.gah(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
q=r.b
if(s.b(q)){p=J.a7(q)
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
return A.i($async$c5w,v)},
Mu(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Mu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c5w(d),$async$Mu)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.HF(),$async$Mu)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dV(A.a0(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.Q(Date.now(),0,!1).a5().ac())
r.n(s,t,o)
w=9
return A.b(C.a5R(s),$async$Mu)
case 9:case 8:u=t
w=1
break
case 5:n=C.hsy()
w=10
return A.b(C.HF(),$async$Mu)
case 10:s=f
J.aG(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a5().ac(),"updatedAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a5R(s),$async$Mu)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mu,v)},
aY0(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aY0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.HF(),$async$aY0)
case 3:t=f
for(s=J.di(t),r=s.gdK(t),r=r.dC(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a5R(t),$async$aY0)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aY0,v)},
a5S(d,e,f){var w=0,v=A.j(x.H),u
var $async$a5S=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.anP(d,e),$async$a5S)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Mu(d),$async$a5S)
case 7:w=4
break
case 5:w=8
return A.b(C.aY0(d),$async$a5S)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a5S,v)},
anJ(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$anJ=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.anP(f,e),$async$anJ)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c0(),$async$anJ)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.HF(),$async$anJ)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a7(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anJ,v)},
aY_(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aY_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c0(),$async$aY_)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.HF(),$async$aY_)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a7(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY_,v)},
hsC(){var w,v=$.pb(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"FT"+B.d.fS(u)},
anM(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$anM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$anM)
case 3:if(!g){u=null
w=1
break}t=C.hsC()
w=4
return A.b(A.TW(),$async$anM)
case 4:s=g
r=B.dG.aI(B.R.ao(d.eH(),null))
r=B.cS.gct().aI(r)
q=e?999:2
J.aG(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a5T(s),$async$anM)
case 5:p=e?999:2
u=new A.ZS("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anM,v)},
anL(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$anL=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.TW(),$async$anL)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aN(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aY_(J.k(l==null?"":l),j),$async$anL)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{r=B.c4.c7(0,B.cB.aI(t))
s=C.fZB(r)}catch(f){q=A.a8(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dV(A.a0(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=5
return A.b(A.a5T(p),$async$anL)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anL,v)},
fZB(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hsE(A.a0(w,x.N,x.z))
return u}catch(t){v=A.a8(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fJO(d){var w=0,v=A.j(x.m),u,t,s
var $async$fJO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.anL(t[1])
w=1
break}u=null
w=1
break}u=C.fZB(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJO,v)},
hsE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d7(v,x.f)
u=A.cC(u,new C.c5z(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a1<G.E>")
s=A.B(new A.a1(u,new C.c5A(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.U(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jo(p),t=t.gah(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d7(l,u)
n=A.cC(n,new C.c5B(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a1<G.E>")
j=A.B(new A.a1(n,new C.c5C(),k),k.k("G.E"))
if(j.length!==0)q.n(0,m,j)}return new C.anN(h,w,s,r,q)},
anP(d,e){var w=0,v=A.j(x.y),u,t
var $async$anP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Mm(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.A8(d),$async$anP)
case 3:u=t.cw(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anP,v)},
c5I(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c5I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.A8(d),$async$c5I)
case 3:t=s.b6(f,new C.c5J(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b1(t,new C.c5K())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5I,v)},
TX(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$TX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.anP(e,d),$async$TX)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Mu(e),$async$TX)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.A8(e),$async$TX)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dG(r,new C.c5G(g))
r=A.B(t,t.$ti.k("G.E"))}t=J.a7(r)
if(t.gal(r)){u=null
w=1
break}t=t.dr(r,new C.c5H(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.JX(e,o),$async$TX)
case 14:n=i
if(J.cw(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.anN(s,B.a.i(e.toLowerCase()),r,new A.Q(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$TX,v)},
aY4(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aY4=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.TX(d,e,f,g),$async$aY4)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.FH(A.J7(q.eH(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY4,v)},
aY3(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aY3=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.TX(d,e,f,g),$async$aY3)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.anM(r,f),$async$aY3)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEb(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY3,v)},
TY(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TY=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fJO(a0),$async$TY)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.anJ(g.a,d,e,f,s,r),$async$TY)
case 6:if(!a2){if(r)throw A.S(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.S(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.byL(e,j),$async$TY)
case 12:case 11:w=13
return A.b(C.ag2(e,j,s),$async$TY)
case 13:h=n.h(0,i)
w=h!=null&&J.cw(h)?14:15
break
case 14:w=16
return A.b(C.Aj(e,i,h),$async$TY)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bmH(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$TY,v)},
anN:function anN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c5E:function c5E(){},
c5F:function c5F(){},
c5D:function c5D(){},
c5z:function c5z(){},
c5A:function c5A(){},
c5B:function c5B(){},
c5C:function c5C(){},
c5J:function c5J(){},
c5K:function c5K(){},
c5G:function c5G(d){this.a=d},
c5H:function c5H(d){this.a=d},
fRZ(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fe(null,x.H)
return A.ht(d,new C.anO(w,e,g,i,f,h,null),!0,null,x.H)},
d3g(d,e,f,g,h,i,j,k){return new C.bcb(i,e,k,j,g,f,h,d,null)},
anO:function anO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBz:function aBz(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dPw:function dPw(d){this.a=d},
dPx:function dPx(d,e,f){this.a=d
this.b=e
this.c=f},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPC:function dPC(d){this.a=d},
dPt:function dPt(d){this.a=d},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPA:function dPA(d){this.a=d},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPy:function dPy(){},
dPE:function dPE(d){this.a=d},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPD:function dPD(d,e){this.a=d
this.b=e},
d3I:function d3I(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcd:function bcd(d,e,f){this.d=d
this.e=e
this.a=f},
ab_:function ab_(d,e,f){this.c=d
this.d=e
this.a=f},
bcb:function bcb(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcg:function bcg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Z2:function Z2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBy:function aBy(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPp:function dPp(d){this.a=d},
dPq:function dPq(d){this.a=d},
dPr:function dPr(d){this.a=d},
dPs:function dPs(d){this.a=d},
Z3:function Z3(d){this.a=d},
bhi:function bhi(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dPG:function dPG(d,e){this.a=d
this.b=e},
aWB(d,e){return new C.aWA(d,e,null)},
aWA:function aWA(d,e,f){this.c=d
this.d=e
this.a=f},
hRG(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b_(d,11)},
hYX(d){return A.c_(B.K,null,new C.fyY(new C.tp(A.M(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
h0s(d,e){return new C.aqI(e,d,null)},
aOm(d,e,f,g,h,i,j){var w=C.hRG(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a4U(w,!0,null),null),B.ap)
return K.aNI(e,B.bQ,f,g,h,i,j)},
lp:function lp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4U:function a4U(d,e,f){this.c=d
this.d=e
this.a=f},
bh0:function bh0(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b2$=e
_.c=_.a=null},
dBu:function dBu(d){this.a=d},
dBv:function dBv(){},
dBw:function dBw(d,e){this.a=d
this.b=e},
bh_:function bh_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fyY:function fyY(d){this.a=d},
fyX:function fyX(d,e){this.a=d
this.b=e},
fyW:function fyW(d,e){this.a=d
this.b=e},
fyV:function fyV(d,e){this.a=d
this.b=e},
aqI:function aqI(d,e,f){this.c=d
this.d=e
this.a=f},
cdb:function cdb(d,e){this.a=d
this.b=e},
aJt:function aJt(){},
hYI(d){var w=null
return A.c9(w,w,!0,w,new C.fyk(),d,w,!0,!0,x.e2)},
hZT(d,e,f,g,h){var w=null
return A.c9(w,w,!0,w,new C.fFM(h,g,f,e),d,w,!0,!0,x.N)},
hYK(d,e){var w=null
return A.c9(w,w,!0,w,new C.fyp(e),d,w,!0,!0,x.dY)},
hYJ(d){var w=null
return A.c9(w,w,!0,w,new C.fyo(),d,w,!0,!0,x.c5)},
aRd:function aRd(d,e){this.a=d
this.b=e},
aRc:function aRc(d){this.a=d},
aPi:function aPi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyk:function fyk(){},
fFM:function fFM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyp:function fyp(d){this.a=d},
fyo:function fyo(){},
XH:function XH(d,e){this.c=d
this.a=e},
awO:function awO(){var _=this
_.d=$
_.c=_.a=_.e=null},
cWr:function cWr(d){this.a=d},
cWs:function cWs(d){this.a=d},
cWq:function cWq(d,e){this.a=d
this.b=e},
cWt:function cWt(d){this.a=d},
cWu:function cWu(d){this.a=d},
XG:function XG(d){this.a=d},
awN:function awN(){this.d=$
this.c=this.a=null},
cWn:function cWn(d){this.a=d},
cWo:function cWo(d){this.a=d},
cWp:function cWp(d){this.a=d},
Xe:function Xe(d){this.a=d},
avx:function avx(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cu0:function cu0(){},
cu6:function cu6(d){this.a=d},
cu7:function cu7(d){this.a=d},
cu8:function cu8(d){this.a=d},
cu5:function cu5(){},
cu9:function cu9(d){this.a=d},
cua:function cua(d){this.a=d},
cu4:function cu4(){},
cub:function cub(d,e){this.a=d
this.b=e},
cu3:function cu3(d,e){this.a=d
this.b=e},
cu1:function cu1(d,e){this.a=d
this.b=e},
cuc:function cuc(d){this.a=d},
cu2:function cu2(){},
cud:function cud(d){this.a=d},
a_L:function a_L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bth:function bth(){this.d=$
this.c=this.a=null},
f1z:function f1z(d,e){this.a=d
this.b=e},
f1A:function f1A(d){this.a=d},
f1B:function f1B(d,e){this.a=d
this.b=e},
aa2:function aa2(d,e){this.a=d
this.b=e},
EP:function EP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
btf:function btf(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f1x:function f1x(d,e){this.a=d
this.b=e},
avq:function avq(d,e){this.c=d
this.a=e},
btg:function btg(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f1y:function f1y(d){this.a=d},
bte:function bte(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aLC:function aLC(){},
aLD:function aLD(){},
bAH(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.or(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fx4(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.WE(A.dn(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aNZ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aNZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hU().kS(85,1280,B.eF),$async$aNZ)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fc(),$async$aNZ)
case 8:r=e
if(J.ab(r)===0){u=null
w=1
break}q=C.h0r()
w=9
return A.b(C.cda(q,r),$async$aNZ)
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
o=A.a8(l)
$.am.$1("[worksheets] pick photo failed: "+A.t(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aNZ,v)},
aOk(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOk=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cd7(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gam(g.split(",")):g
p=B.cB.aI(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().KA(p,!0,null,i).cL(0,B.fN),$async$aOk)
case 9:n=a1
w=10
return A.b(n.m3(),$async$aOk)
case 10:m=a1
w=11
return A.b(J.aP3(m).hj(B.fR),$async$aOk)
case 11:l=a1
J.aP3(m).q()
if(l==null){w=8
break}i=J.fa(B.dE.gaP(l))
k="data:image/png;base64,"+B.cS.gct().aI(i)
if(J.ab(k)<=r){u=k
w=1
break}o=B.k.V(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a8(f)
$.am.$1("[worksheets] thumbnail shrink failed: "+A.t(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aOk,v)},
fx4:function fx4(){},
tp:function tp(d){this.a=d},
aqH:function aqH(d,e,f){this.c=d
this.d=e
this.a=f},
aD3:function aD3(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eBy:function eBy(d,e){this.a=d
this.b=e},
eBp:function eBp(d){this.a=d},
eBq:function eBq(d){this.a=d},
eBw:function eBw(d,e){this.a=d
this.b=e},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBs:function eBs(d,e){this.a=d
this.b=e},
eBr:function eBr(d,e){this.a=d
this.b=e},
eBt:function eBt(d){this.a=d},
eBu:function eBu(d,e){this.a=d
this.b=e},
eBx:function eBx(d,e){this.a=d
this.b=e},
eBk:function eBk(d,e){this.a=d
this.b=e},
eBo:function eBo(d){this.a=d},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBm:function eBm(d){this.a=d},
eBz:function eBz(d,e){this.a=d
this.b=e},
eBA:function eBA(d,e){this.a=d
this.b=e},
eBl:function eBl(d,e){this.a=d
this.b=e},
hd0(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.Q(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fx5(d,e,f){var w=0,v=A.j(x.N),u
var $async$fx5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hd0(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fx5,v)},
bAJ(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bAJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fx5(!0,d,e),$async$bAJ)
case 4:w=3
return A.b(r.aqF(g,d,e.a),$async$bAJ)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dG.aI(B.R.ao(C.hd0(d,e,null),null))
u="NGMY_WS:"+B.k1.gct().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAJ,v)},
h5_(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fRG(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ab(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eY(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hWJ(d){var w,v,u,t=C.h5_(d)
if(t==null)return null
if(C.fRG(t))return t
w=B.a.cG(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b_(t,w))
if(C.fRG(v))return v}u=B.a.cG(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b_(t,u))
if(C.fRG(v))return v}return null},
fRF(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ab(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.c7(0,B.cB.aI(J.mu(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fMj(A.a0(u,x.N,x.z))
return t}catch(s){return r}},
bAI(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bAI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aqE(t[1]),$async$bAI)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fRF(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fRF(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAI,v)},
fRE(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l9(w,v,d.c,d.d,new A.Q(Date.now(),0,!1))},
bAf(){var w=0,v=A.j(x.o),u,t
var $async$bAf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.FS(),$async$bAf)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fRF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAf,v)},
hdT(d,e,f,g){return A.c_(B.K,null,new C.fFE(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fFE:function fFE(d,e,f){this.a=d
this.b=e
this.c=f},
ac3:function ac3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eBC:function eBC(d,e){this.a=d
this.b=e},
eBD:function eBD(d,e){this.a=d
this.b=e},
eBE:function eBE(d,e){this.a=d
this.b=e},
eBF:function eBF(d,e){this.a=d
this.b=e},
eBB:function eBB(d){this.a=d},
aqB:function aqB(d,e,f){this.c=d
this.d=e
this.a=f},
biF:function biF(){var _=this
_.c=_.a=_.e=_.d=null},
eBf:function eBf(d,e){this.a=d
this.b=e},
eBg:function eBg(d){this.a=d},
eBh:function eBh(d){this.a=d},
aqG:function aqG(d){this.a=d},
aD2:function aD2(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eBj:function eBj(d){this.a=d},
eBi:function eBi(d){this.a=d},
hvR(d,e,f,g,h){return new C.N7(h,g,d,e,f,null)},
aHP:function aHP(d,e){this.a=d
this.b=e},
N7:function N7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aD4:function aD4(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eC1:function eC1(){},
eBY:function eBY(d,e){this.a=d
this.b=e},
eBZ:function eBZ(d){this.a=d},
eBJ:function eBJ(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBI:function eBI(d){this.a=d},
eBS:function eBS(d,e){this.a=d
this.b=e},
eBP:function eBP(d,e){this.a=d
this.b=e},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eBR:function eBR(d,e,f){this.a=d
this.b=e
this.c=f},
eBN:function eBN(d,e,f){this.a=d
this.b=e
this.c=f},
eBL:function eBL(d){this.a=d},
eBM:function eBM(d){this.a=d},
eBO:function eBO(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC3:function eC3(d){this.a=d},
eC5:function eC5(d){this.a=d},
eC2:function eC2(d){this.a=d},
eBG:function eBG(d){this.a=d},
eBK:function eBK(d,e){this.a=d
this.b=e},
eC0:function eC0(d,e){this.a=d
this.b=e},
eC_:function eC_(d,e){this.a=d
this.b=e},
eBV:function eBV(d){this.a=d},
eBW:function eBW(d){this.a=d},
eBX:function eBX(d,e){this.a=d
this.b=e},
eBU:function eBU(d,e){this.a=d
this.b=e},
eBT:function eBT(d,e,f){this.a=d
this.b=e
this.c=f},
bv2:function bv2(){},
zZ(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
aeu(d,e,f){return C.hLj(d,e,f)},
hLj(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aeu=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$aeu)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a8(o)
$.am.$1("[worksheets] setString failed for "+e+": "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeu,v)},
aet(d,e){return C.hLi(d,e)},
hLi(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aet=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aet)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a8(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aet,v)},
hK5(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Rv(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bxM(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bxM=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0f(q),$async$bxM)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOk(q,!1),$async$bxM)
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
return A.i($async$bxM,v)},
hjK(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aN(d.h(0,"quantity"))
if(w==null)w=null
v=A.aN(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.qE(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qE(p,J.k(u==null?"":u),1,o,q)},
fMj(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d7(s,x.f)
w=A.cC(w,new C.ctp(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a1<G.E>")
r=A.B(new A.a1(w,new C.ctq(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.l9(w,v,u,r,t==null?new A.Q(Date.now(),0,!1):t)},
hP9(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Ye
case"female":case"f":return D.aha
default:return D.xh}},
h9I(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fVH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hP9(v==null?j:J.k(v))
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
m=A.aN(d.h(0,"birthOrder"))
m=m==null?j:B.k.O(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aN(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.O(k)
return new C.hT(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hPb(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.LC
case"viewer":return D.kb
default:return D.ti}},
hPc(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FI(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bz0(d,e){return B.a.i(e.toLowerCase())===C.FI(d,e)&&d.y!==D.kb},
tB(d,e){var w,v=d.y
if(v===D.kb)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FI(d,e))return!0
if(v===D.LC)return!0
v=d.e
return new A.J(v,A.fRK(),A.T(v).k("J<1,n>")).t(0,w)},
hOC(d){return J.dG(d,new C.fih()).gM(0)},
fG6(d){var w=0,v=A.j(x.y),u,t
var $async$fG6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.A8(d),$async$fG6)
case 3:u=t.qA(f,new C.fG7(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fG6,v)},
byL(d,e){var w=0,v=A.j(x.H),u,t
var $async$byL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.A8(d),$async$byL)
case 3:t=g
if(J.qA(t,new C.fh_(e))){w=1
break}if(C.hOC(t)>=2)throw A.S(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$byL,v)},
aj7(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d7(n,x.f)
w=A.cC(w,new C.bL5(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a1<G.E>")
m=A.B(new A.a1(w,new C.bL6(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bL7(),x.N)
t=A.B(l,l.$ti.k("aj.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.O(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kr(l,w,v,!s,t,m,r,q,p,C.hPb(o==null?null:J.k(o)))},
h9R(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Ce(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Ce=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Qs(d),$async$Ce)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$Ce)
case 4:t=f
w=5
return A.b(t.a4s(0),$async$Ce)
case 5:w=6
return A.b(C.f95(t,l),$async$Ce)
case 6:s=f
if(J.cw(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.h5z(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oq(l,n),$async$Ce)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.h5z(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oq(l,n),$async$Ce)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ce,v)},
f95(d,e){return C.hHC(d,e)},
hHC(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f95=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zZ(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aG(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ab(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zZ(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fMj(A.a0(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zZ(a9)+"_"+n))
i=C.hK5(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0f(h),$async$f95)
case 17:g=b1
if(g!=null){i=i.Rv(g)
p=!0}case 16:J.cf(q,i)
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
case 8:J.QC(q,new C.f96())
if(p&&J.ab(q)!==0)C.oq(a9,q)
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
return A.i($async$f95,v)},
bzb(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Qs(d),$async$bzb)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Ce(r),$async$bzb)
case 4:t=p.aV(g)
case 5:if(!t.C()){w=6
break}s=t.gU(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzb,v)},
h5z(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d7(w,x.f)
v=A.cC(v,new C.f4P(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a1<G.E>")
v=A.B(new A.a1(v,new C.f4Q(),u),u.k("G.E"))
B.d.b1(v,new C.f4R())
return v}catch(t){v=A.a([],x.D)
return v}},
oq(d,e){return C.hYy(d,e)},
hYy(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oq=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Qs(b2),$async$oq)
case 3:a8=b5
if(J.ab(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$oq)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zZ(a8)
p=A.aT(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fyb(),a2).fF(0)
a2=J.b6(b3,new C.fyc(),a2).bY(0,new C.fyd())
n=A.d9(a2,a2.$ti.k("G.E"))
a2=o,a2=A.ea(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eY(n,m)?17:18
break
case 17:a5=C.zZ(a8)
l=A.aT(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a78(l),$async$oq)
case 19:t=21
a5=C.zZ(a8)
k=A.aT(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a78(a5==null?null:J.k(a5)),$async$oq)
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
return A.b(C.aet(r,"ngmy_worksheet_item_v3_"+C.zZ(a8)+"_"+m),$async$oq)
case 29:w=30
return A.b(C.aet(r,"ngmy_worksheet_thumb_v3_"+C.zZ(a8)+"_"+m),$async$oq)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gah(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bxM(h),$async$oq)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aeu(r,"ngmy_worksheet_thumb_v3_"+C.zZ(a8)+"_"+a4,f),$async$oq)
case 40:g=i.Rv(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aet(r,"ngmy_worksheet_thumb_v3_"+C.zZ(a8)+"_"+a4),$async$oq)
case 41:g=i.Rv(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aet(r,"ngmy_worksheet_thumb_v3_"+C.zZ(a8)+"_"+a4),$async$oq)
case 42:case 34:a4=i.a
w=43
return A.b(C.aeu(r,"ngmy_worksheet_item_v3_"+C.zZ(a8)+"_"+a4,B.R.ao(g.ad(),null)),$async$oq)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aeu(r,"ngmy_worksheets_index_v3_"+C.zZ(a8),B.R.ao(q,null)),$async$oq)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eG(b3,new C.fye(q))
a4=a3.$ti.k("cS<1,a3<n,@>>")
a7=A.B(new A.cS(a3,new C.fyf(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.aeu(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oq)
case 45:w=46
return A.b(J.hiR(r),$async$oq)
case 46:if(a2.gck(b3)&&J.ab(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a8(b1)
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.t(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$oq,v)},
Ko(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Ko=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ce(d),$async$Ko)
case 3:t=g
s=J.cD(t)
r=s.bf(t,new C.fG5(e))
if(r===-1)s.cm(t,0,e)
else s.n(t,r,e)
u=C.oq(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ko,v)},
byY(d,e){var w=0,v=A.j(x.H),u
var $async$byY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Ce(d),$async$byY)
case 2:u=g
J.nc(u,new C.fiJ(e))
w=3
return A.b(C.oq(d,u),$async$byY)
case 3:return A.h(null,v)}})
return A.i($async$byY,v)},
FK(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$FK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$FK)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d7(t,x.f)
j=A.cC(j,new C.fl6(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a1<G.E>")
r=A.B(new A.a1(j,new C.fl7(),s),s.k("G.E"))
B.d.b1(r,new C.fl8())
k=r}}catch(h){}w=4
return A.b(C.f5y(d),$async$FK)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hHZ(k,p,d)
j=A.T(o)
s=j.k("J<1,a3<n,@>>")
s=A.B(new A.J(o,new C.fl9(),s),s.k("aj.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.PE(d,o),$async$FK)
case 7:case 6:j=j.k("a1<1>")
m=A.B(new A.a1(o,new C.fla(d),j),j.k("G.E"))
if(m.length!==0)C.aMU(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$FK,v)},
fxY(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fxY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PE(d,e),$async$fxY)
case 3:t=J.dG(e,new C.fxZ(d))
s=A.B(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aMU(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxY,v)},
a1o(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1o=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a1o)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d7(u,x.f)
m=A.cC(m,new C.fG0(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a1<G.E>")
s=A.B(new A.a1(m,new C.fG1(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pX(o,new C.fG2(e))
if(B.a.i(e.x).length===0&&C.tB(e,d)){m=B.a.i(d.toLowerCase())
p=e.aBx(e.y===D.kb?D.kb:D.ti,m)}else p=e
if(q===-1)J.pf(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.PE(d,o),$async$a1o)
case 3:w=C.tB(p,d)?4:5
break
case 4:w=6
return A.b(C.aMT(C.FI(p,d),p),$async$a1o)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1o,v)},
aN3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aN3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.FK(d),$async$aN3)
case 2:u=g
t=J.cD(u)
s=A.qU(t.eG(u,new C.fiq(e)))
t.bn(u,new C.fir(e))
w=3
return A.b(C.PE(d,u),$async$aN3)
case 3:w=s!=null&&C.bz0(s,d)?4:5
break
case 4:w=6
return A.b(C.f4T(e),$async$aN3)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aN3,v)},
agg(d){var w=d.f,v=A.T(w).k("a1<1>")
w=A.B(new A.a1(w,new C.fGb(),v),v.k("G.E"))
return w},
fPn(d,e){var w,v=d.f,u=A.qU(new A.a1(v,new C.fi0(e),A.T(v).k("a1<1>")))
v=C.agg(d)
w=A.T(v).k("a1<1>")
v=A.B(new A.a1(v,new C.fi1(e,u),w),w.k("G.E"))
B.d.b1(v,new C.fi2())
return v},
hPf(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hdW(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bf(C.fPn(d,u),new C.fFN(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hQL(d,e){var w
if(e==null||e.length===0)return 1
w=C.fPn(d,e)
if(w.length===0)return 1
return new A.J(w,new C.flT(),A.T(w).k("J<1,H>")).fC(0,B.zx)+1},
hYr(d){var w,v=C.agg(d)
if(v.length===0)return null
w=new A.a1(v,new C.fxU(),A.T(v).k("a1<1>"))
if(!w.gal(0))return w.gL(0)
return B.d.gL(v)},
hPa(d){return A.E(["id",d.a,"name",d.b,"gender",C.h9I(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hQG(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xh?n:q.c
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
d=q.aBs(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cDk(a1,w,a3.d,a2.y,s,a0,v)},
A8(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$A8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$A8)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aG(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d7(t,x.f)
p=A.cC(p,new C.fl3(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a1<G.E>")
p=A.B(new A.a1(p,new C.fl4(),s),s.k("G.E"))
B.d.b1(p,new C.fl5())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$A8,v)},
ag2(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ag2=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.ti:D.kb
a7=C.FI(b2,b3)
w=2
return A.b(C.A8(b1),$async$ag2)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bf(a8,new C.fxQ(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.byL(b1,b2),$async$ag2)
case 5:case 4:if(b0===-1){u=b2.aBx(a6,a7)
a9.cm(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.xh?i:l.c
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
s.n(0,m,l.aBs(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("G.E"))
k=a5?D.ti:D.kb
u=t.y3(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.PE(b1,a8),$async$ag2)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aMT(B.a.i(b3.toLowerCase()),u),$async$ag2)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ag2,v)},
h5W(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.Q(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a3<n,@>>"),k=A.B(new A.J(m,C.hd8(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
h5X(d,e){var w=new A.Q(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a3<n,@>>")
u=A.B(new A.J(u,C.hd8(),t),t.k("aj.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hFC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aj7(A.a0(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fRK(),A.T(j).k("J<1,n>")).bY(0,new C.f5l())
t=A.B(j,j.$ti.k("G.E"))
if(u===v)s=D.ti
else s=B.d.t(t,u)?D.LC:D.kb
return w.aBx(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aj7(A.a0(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d7(q,h)
h=A.cC(h,new C.f5m(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a1<G.E>")
o=A.B(new A.a1(h,new C.f5n(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f5o(),x.N).bY(0,new C.f5p())
t=A.B(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ti
else s=B.d.t(t,u)?D.LC:D.kb
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.Q(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.kr(h,r,p,!m,t,o,l,j,v,s)},
f5y(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f5y=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ab(a0)===0){u=null
w=1
break}t=4
r=new C.f5C()
h=x.N
g=x.z
w=7
return A.b(A.iH(A.a([A.lf("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bF),r.$2(A.lf("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bF),"collaborator"),r.$2(A.lf("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bF),"public")],x.cl),x.U),$async$f5y)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.U(h,g)
h=A.B(p,g)
l=h
J.fZ(l,o)
J.fZ(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ab(j)!==0)J.aG(m,j,k)}l=m
h=A.a2(l).k("bc<2>")
h=A.cC(new A.bc(l,h),new C.f5z(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a1<G.E>")
l=A.B(new A.a1(h,new C.f5A(),l),l.k("G.E"))
B.d.b1(l,new C.f5B())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a8(a1)
d=J.k(i)
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
h=$.am
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
return A.i($async$f5y,v)},
hHZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gal(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dr(e,new C.f9L(),v).bY(0,new C.f9M())
t=A.d9(u,u.$ti.k("G.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FI(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kb){m=q.e
m=!new A.J(m,A.fRK(),A.T(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gah(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hQG(l,v)
o=C.FI(k,w)
p=v.d
s.n(0,u,o===w?k.b8t(p,D.ti):k.b8t(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("G.E"))
B.d.b1(j,new C.f9N())
return j},
PE(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$PE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$PE)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fbP(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$PE)
case 3:return A.h(null,v)}})
return A.i($async$PE,v)},
aMT(d,e){return C.hN0(d,e)},
hN0(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aMT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lG("family_trees",A.a([C.h5W(e,d)],p),null,B.cF),$async$aMT)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lG("family_trees",A.a([C.h5X(e,d)],p),null,B.cF),$async$aMT)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a8(n)
$.am.$1("[family_trees] upsert error: "+A.t(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMT,v)},
aMU(d,e){return C.hN1(d,e)},
hN1(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aMU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a3<n,@>>")
m=n.k("aj.E")
l=A.B(new A.J(e,new C.fgm(d),n),m)
r=l
w=7
return A.b(A.lG("family_trees",r,null,B.cF),$async$aMU)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.J(e,new C.fgn(d),n),m)
p=k
w=8
return A.b(A.lG("family_trees",p,null,B.cF),$async$aMU)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a8(i)
$.am.$1("[family_trees] bulk upsert error: "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMU,v)},
f4T(d){return C.hEZ(d)},
hEZ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f4T=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Q2("family_trees",A.E(["id",d],x.N,x.z),null,B.cF),$async$f4T)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a8(p)
$.am.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f4T,v)},
qE:function qE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l9:function l9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cts:function cts(){},
ctr:function ctr(){},
ctp:function ctp(){},
ctq:function ctq(){},
GO:function GO(d,e){this.a=d
this.b=e},
hT:function hT(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aj6:function aj6(d,e){this.a=d
this.b=e},
fih:function fih(){},
fG7:function fG7(d){this.a=d},
fh_:function fh_(d){this.a=d},
kr:function kr(d,e,f,g,h,i,j,k,l,m){var _=this
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
bL9:function bL9(){},
bL8:function bL8(){},
bL5:function bL5(){},
bL6:function bL6(){},
bL7:function bL7(){},
f96:function f96(){},
f4P:function f4P(){},
f4Q:function f4Q(){},
f4R:function f4R(){},
fyb:function fyb(){},
fyc:function fyc(){},
fyd:function fyd(){},
fye:function fye(d){this.a=d},
fyf:function fyf(){},
fG5:function fG5(d){this.a=d},
fiJ:function fiJ(d){this.a=d},
fl6:function fl6(){},
fl7:function fl7(){},
fl8:function fl8(){},
fl9:function fl9(){},
fla:function fla(d){this.a=d},
fxZ:function fxZ(d){this.a=d},
fG0:function fG0(){},
fG1:function fG1(){},
fG2:function fG2(d){this.a=d},
fiq:function fiq(d){this.a=d},
fir:function fir(d){this.a=d},
fGb:function fGb(){},
fi0:function fi0(d){this.a=d},
fi1:function fi1(d,e){this.a=d
this.b=e},
fi2:function fi2(){},
fFN:function fFN(d){this.a=d},
flT:function flT(){},
fxU:function fxU(){},
fl3:function fl3(){},
fl4:function fl4(){},
fl5:function fl5(){},
fxQ:function fxQ(d){this.a=d},
f5l:function f5l(){},
f5m:function f5m(){},
f5n:function f5n(){},
f5o:function f5o(){},
f5p:function f5p(){},
f5C:function f5C(){},
f5D:function f5D(d){this.a=d},
f5z:function f5z(d){this.a=d},
f5A:function f5A(){},
f5B:function f5B(){},
f9L:function f9L(){},
f9M:function f9M(){},
f9N:function f9N(){},
fbP:function fbP(){},
fgm:function fgm(d){this.a=d},
fgn:function fgn(d){this.a=d},
ctt:function ctt(d,e){this.a=d
this.b=e},
ctu:function ctu(d,e){this.a=d
this.b=e},
aF7:function aF7(d,e,f){this.a=d
this.b=e
this.c=f},
b6s:function b6s(){this.b=this.a=0},
b6r:function b6r(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bti:function bti(){},
wj(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcb()+"/"+w.gcr()+"/"+w.gce()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmR()),2,"0")+":"+B.a.aT(B.o.u(w.gFq()),2,"0")},
hvO(){var w,v=$.pb(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"WS"+B.d.fS(u)},
aqC(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aqC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqC)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bF),$async$aqC)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a8(m)
$.am.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqC,v)},
aqD(d){return C.hvP(d)},
hvP(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aqD=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqD)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hz("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$aqD)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a8(p)
$.am.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqD,v)},
aqF(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aqF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqF)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hvO()
w=4
return A.b(C.aqC(),$async$aqF)
case 4:r=h
q=B.a.i(e)
p=B.dG.aI(t)
J.aG(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cS.gct().aI(p),"usesRemaining",25,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.aqD(r),$async$aqF)
case 5:u=new A.ZS("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqF,v)},
aqE(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aqE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c0(),$async$aqE)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aqC(),$async$aqE)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aN(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{s=B.c4.c7(0,B.cB.aI(t))}catch(h){r=A.a8(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dV(A.a0(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ac())
p.n(q,i,m)}w=5
return A.b(C.aqD(q),$async$aqE)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqE,v)},
h0r(){var w=new A.Q(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cH.aD(999999)},
hvQ(d){var w,v,u,t,s,r,q
try{w=A.aeT(d)
if(w==null)return d
v=w
if(J.Ku(v)>960||J.Kt(v)>960){s=v
r=J.Ku(v)>=J.Kt(v)?960:null
v=A.aeS(s,J.Kt(v)>J.Ku(v)?960:null,B.MY,r)}s=v
u=A.akv(82).RT(s,B.y3)
if(J.ab(u)===0)return d
s=new Uint8Array(A.cp(u))
return s}catch(q){t=A.a8(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cda(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cda=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hvQ(e)
$.cd6.n(0,s,t)
u=C.bAL(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cda,v)},
b0f(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0f=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eY(l,",")?B.d.gam(J.lh(l,",")):l
q=B.cB.aI(r)
if(J.ab(q)===0){u=null
w=1
break}p=C.h0r()
w=7
return A.b(C.cda(p,q),$async$b0f)
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
n=A.a8(k)
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.t(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b0f,v)},
cd7(d){var w=0,v=A.j(x.T),u,t,s
var $async$cd7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(K.cd9(s),$async$cd7)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gct().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cd7,v)},
a78(d){var w=0,v=A.j(x.H),u,t
var $async$a78=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=K.hd1(d)
if(t==null){w=1
break}$.cd6.W(0,t)
w=3
return A.b(C.bAK(t),$async$a78)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a78,v)},
bAL(d,e){return C.hWM(d,e)},
hWM(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bAL=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aLP
w=7
return A.b(n==null?$.aLP=K.fOp():n,$async$bAL)
case 7:r=g
q=new Uint8Array(A.cp(e))
p=J.mv(r,"thumbs","readwrite")
B.iz.lX(J.mt(p,"thumbs"),q,l)
w=8
return A.b(J.pe(p),$async$bAL)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a8(k)
$.am.$1("[worksheet-thumb idb put] "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAL,v)},
bAK(d){return C.hWK(d)},
hWK(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAK=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aLP
w=7
return A.b(o==null?$.aLP=K.fOp():o,$async$bAK)
case 7:r=f
q=J.mv(r,"thumbs","readwrite")
B.iz.EW(J.mt(q,"thumbs"),m)
w=8
return A.b(J.pe(q),$async$bAK)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a8(l)
$.am.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAK,v)}},D,Af,Ag,P,Ah,Ai,K,Aj,Q,Z
J=c[1]
A=c[0]
B=c[2]
A_=c[194]
G=c[174]
F=c[29]
E=c[184]
N=c[110]
A0=c[112]
A1=c[162]
R=c[115]
A2=c[193]
A3=c[35]
M=c[192]
A4=c[77]
I=c[83]
A5=c[131]
A6=c[119]
S=c[134]
T=c[205]
U=c[163]
A7=c[154]
A8=c[166]
V=c[161]
A9=c[62]
Aa=c[68]
W=c[178]
Ab=c[28]
Ac=c[143]
Ad=c[209]
L=c[156]
Ae=c[167]
X=c[207]
Y=c[201]
H=c[99]
O=c[66]
C=a.updateHolder(c[6],C)
D=c[204]
Af=c[67]
Ag=c[172]
P=c[206]
Ah=c[103]
Ai=c[54]
K=c[52]
Aj=c[74]
Q=c[208]
Z=c[124]
C.amD.prototype={}
C.aWC.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bcK(),f=h.x!=null&&h.yr(i).length===0
if(h.x!=null)w=f?B.aZ:B.bL
else w=h.gSv()?B.bL:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.baU,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.ezF,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h2,i,i,i),B.S,D.f1q,B.au,A.d(C.wj(new A.Q(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eYs,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aWO,i,i,i,i,B.Xe,i,i,i)
q=A.m(16)
p=A.I(B.aK,B.r,1)
o=A.I(B.aZ.j(0.28),B.r,1)
n=A.fQk(h.d)
o=A.p(B.A,C.aWB(A.fog(h.e,n),30),B.f,i,i,new A.o(B.lt,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eTX,B.L,i,i)
m=A.m(14)
l=A.I(B.aK,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bB,D.f1H,B.ac,A.p(i,A.v(A.a([D.fgz,B.bB,A.d(A.Aa(h.c),i,i,i,i,i,i,D.eP3,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f3,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,L.afk,i,i,i)
p=A.m(16)
m=A.I(B.aK,B.r,1)
l=j.aNW("Original due",C.wj(h.r,!1))
n=j.aNW("Current due",C.wj(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaI9(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Ai,i,i,1/0),B.S,j.c9M(),B.P,j.bYN(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aK,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f2F,B.au,A.d(q,i,i,i,i,i,i,D.eTf,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaD6()){q=A.m(14)
o=A.I(B.cm,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fhN,B.P,A.bv(A.m(12),A.ei(new A.a5(1/0,88,A.b3(i,i,i,new A.UN(h.ax,B.M,D.eDn,!0,3.5,i),B.at),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Ak,i,i,i)],s))}p.push(B.az)
p.push(D.fah)
return A.p(i,A.v(A.a([r,new A.C(B.afn,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aNW(d,e){var w=null
return A.z(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a6s,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eQ2,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c9M(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a7A(B.e1,u,"Not paid yet")
w=t.yr(null).length
v=w===0?B.aZ:B.bL
return this.a7A(v,u,C.wj(t.x,!0))},
bYN(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a7A(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a7A(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a6s,u,u,u)
v=A.T(d).k("J<1,hh>")
v=A.B(new A.J(d,new C.bZO(),v),v.k("aj.E"))
return A.v(A.a([w,B.ao,A.c5(B.bG,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a7A(d,e,f){var w=null
return A.z(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a6s,w,w,w),1),new A.dl(1,B.ch,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b8B.prototype={
a6(d,e){new A.UN(this.b,B.M,e,!0,3.5,null).a6(d,e)},
ar(d){return d.b!==this.b}}
C.amK.prototype={
T(){return new C.aB_(A.a([],x.bp))},
gdV(){return this.c}}
C.aB_.prototype={
a_(){this.a1()
this.HO()},
HO(){var w=0,v=A.j(x.H),u,t=this,s
var $async$HO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0D(t.a.c),$async$HO)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dCm(t,s))
case 1:return A.h(u,v)}})
return A.i($async$HO,v)},
aPN(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bp).j(0.22)
w=A.m(10)
return A.bo(v,new A.b4(4,r,new A.aA(u,1,B.r,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.aA((this.a.d.a?B.bq:B.bp).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aUs),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aPM(d){return this.aPN(d,null)},
Og(d){return this.cdm(d)},
cdm(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Og=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.FI:B.eF
w=7
return A.b(new A.hU().Bp(72,900,900,n),$async$Og)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fc(),$async$Og)
case 8:p=f
n=B.cS.gct().aI(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a8(l)
n=r.c
if(n!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Og,v)},
aY1(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bp).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bq:B.bp
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bq:B.bp
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.V(B.cv,s.a.d.a?B.bq:B.bp,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.z(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kC,D.blZ,r,r,r)},
Cm(d){return this.bvD(d)},
bvC(){return this.Cm(null)},
bvD(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cm=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b1,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jJ(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b1,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b1,B.aN),s)
if(a3){a4=new A.Q(Date.now(),0,!1).bN(6048e8)
m=A.bZ(a4.gce(),a4.gcb(),a4.gcr(),0,0,0,0,0)}else{a4=a5.f
m=A.bZ(a4.gce(),a4.gcb(),a4.gcr(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fQk(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vw?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",a4,new C.dC5(),new C.dC6(a2,t,a5,r,new C.dC7(a2,t),o,n,j),B.eD,!0,x.y),$async$Cm)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d3(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eJI)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eIn)
w=1
break}a1=A.fog(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vw?"male":"female"
w=7
return A.b(A.agf(a3,A.fYb(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Cm)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vw?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bZ(a3.gce(),a3.gcb(),a3.gcr(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bZ(a4.gce(),a4.gcb(),a4.gcr(),0,0,0,0,0)))a5.cFt(a2.a)
w=8
return A.b(A.agf(t.a.c,a5),$async$Cm)
case 8:case 5:w=9
return A.b(t.HO(),$async$Cm)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Cm,v)},
aQn(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bp).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aWB(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.aA
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.z(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ae)},
QR(d){return this.cuu(d)},
cuu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$QR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",s,new C.dCp(),new C.dCq(t,d),B.hV,!0,x.y),$async$QR)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.Q(s,0,!1)
case 4:w=7
return A.b(A.agf(t.a.c,d),$async$QR)
case 7:w=8
return A.b(t.HO(),$async$QR)
case 8:case 1:return A.h(u,v)}})
return A.i($async$QR,v)},
MW(d,e){return this.bGg(0,e)},
bGg(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$MW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kU(s,"Cancel","Delete",e.b+" \xb7 "+A.Aa(e.c)+" will be removed from this device.","Delete this debt?"),$async$MW)
case 3:if(!g){w=1
break}w=4
return A.b(C.fix(t.a.c,e.a),$async$MW)
case 4:w=5
return A.b(t.HO(),$async$MW)
case 5:case 1:return A.h(u,v)}})
return A.i($async$MW,v)},
acZ(d){return this.c7h(d)},
c7h(d){var w=0,v=A.j(x.H),u=this,t
var $async$acZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c_(B.K,null,new C.dCj(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$acZ)
case 2:return A.h(null,v)}})
return A.i($async$acZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dZH
w=J.dG(m.d,new C.dCr())
v=A.B(w,w.$ti.k("G.E"))
w=J.dG(m.d,new C.dCs())
u=A.B(w,w.$ti.k("G.E"))
t=B.d.cI(v,0,new C.dCt())
w=A.m(18)
s=m.a.d.a
r=s?D.cgJ:D.avl
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bK9,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.z(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.dZ5,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dCu(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ae)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cqK("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Aa(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.z(A.a([o,B.ab,A.D(m.b2W(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a6(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.afh,l,l,l),B.az],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dU:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bp).j(0.12),B.r,1)
n=A.p(l,D.bF8,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bp,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bor,l,l,1/0))}else{w=m.gccD()
s=A.B(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ao,new A.C(D.bq6,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bp,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b2W(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bp).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bp,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aA
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eu,u,u,u)},
cqK(d,e){return this.b2W(!1,d,e)},
ccE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yr(j).length,h=d.bbW()
if(d.x!=null){w=d.yr(j).length
v=w===0?B.cY:B.bL}else if(d.gSv())v=B.bL
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bp
v=w}if(d.x!=null){w=d.yr(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wj(u,!1)}else{u.toString
t="Paid "+C.wj(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wj(w,!1)+" \xb7 "+i+" missed":"Due "+C.wj(w,!1)}w=k.a.d.a?B.dU:B.c
u=A.m(18)
if(d.gSv()&&d.x==null)s=B.bL.j(0.35)
else s=(k.a.d.a?B.bq:B.bp).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cI,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lt
o=A.I(d.gSv()&&d.x==null?B.bL.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fQk(d.d)
o=A.p(B.A,A.db(C.aWB(A.fog(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aA
m=x.p
n=A.a([new A.dl(1,B.ch,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaD6())B.d.v(n,A.a([B.eb,A.V(B.M2,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.z(n,B.m,j,B.e,B.j,0,j,j),B.cZ,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Aa(d.c)
l=k.a.d.a?B.aP:B.aA
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(T.af1,A.z(A.a([o,B.bd,p,B.ab,A.v(A.a([n,B.bB,A.V(B.ee,(k.a.d.a?B.bq:B.bp).j(0.5),j,j,j,18)],m),B.dC,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dCl(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ae),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d8,j,j,j,j)}}
C.tT.prototype={}
C.aj5.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bg
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cw,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aE(a0,A.p(a0,A.V(B.cv,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.aa))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.j4,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.arX,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.EJ,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.z(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bld,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bi,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fm,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eE7)
a2=A.a([A.z(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uP,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a6(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l2,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hg,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a6(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bmq,a0,a0,a0,a0)}}
C.aSs.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bi:B.cD,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.z(l,B.m,q,B.e,B.j,0,q,q),B.cZ,n],m)
if(p.z)o.push(new A.C(B.uM,n,q))
return new A.C(B.d8,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.RD.prototype={
T(){return new C.bc9()}}
C.bc9.prototype={
gbTW(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.dZC,D.dZI],l)
for(w=0;w<8;++w){v=D.a0c[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Fs:B.B0
q=t===s
r=A.V(r,q?B.ex:B.bZ,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bn,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bG(1,B.bo,new A.x(v.c,n,Aj.Cy,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aY(24,24)
p=new A.aA(B.ex,2,B.r,-1)
s=new A.o(n,n,new A.bT(p,p,p,p),new A.bs(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eE,A.v(A.a([new A.C(B.m8,new A.co(B.aU,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.De(!0,new C.aj5(v,q.d,q.e,new C.d2e(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d2f(o,v),n,n,n,n,n,n,!1,B.aa))}k.push(new A.C(D.bmJ,A.bJ(D.fmV,new C.d2g(o,d),A.bk(B.b3,n,n,n,n,B.nT,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bq(!0,new A.cW(new A.aZ(0,1/0,0,m.a.b*0.9),A.cJ(k,n,D.bqY,n,n,B.ai,!0),n),!0,!1,B.ah,!0,!0)}}
C.mZ.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
b8F(d,e,f){return new C.mZ(this.a,e,d,f)}}
C.GN.prototype={
vQ(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.GN(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aBm(d){var w=null
return this.vQ(w,w,w,w,w,d,w,w,w,w,w,w)},
cBi(d){var w=null
return this.vQ(w,w,w,w,d,w,w,w,w,w,w,w)},
b8D(d,e,f){var w=null
return this.vQ(d,w,w,w,w,w,w,w,e,w,f,w)},
cBX(d){var w=null
return this.vQ(w,w,w,w,w,w,d,w,w,w,w,w)},
cC5(d){var w=null
return this.vQ(w,w,w,w,w,w,w,w,w,d,w,w)},
cBg(d){var w=null
return this.vQ(w,w,w,d,w,w,w,w,w,w,w,w)},
cC7(d){var w=null
return this.vQ(w,w,w,w,w,w,w,w,w,w,w,d)},
cBd(d){var w=null
return this.vQ(w,w,d,w,w,w,w,w,w,w,w,w)},
cB8(d){var w=null
return this.vQ(w,d,w,w,w,w,w,w,w,w,w,w)},
EP(d){var w=null
return this.vQ(w,w,w,w,w,w,w,d,w,w,w,w)},
cCf(d,e,f,g,h,i,j,k,l,m,n){return this.vQ(d,e,f,g,null,h,i,j,k,l,m,n)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cz5(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bL4(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.BE.gee(D.BE))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a1G)
q=l.$2("frame",D.a19)
l=l.$2("texture",D.a14)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cCf(p,u,t,q,r,A.ty(d.h(0,"ribbon"))?A.Fk(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Y4.prototype={
T(){return new C.ay1(A.a([],x.I),D.LB)},
gdV(){return this.c}}
C.ay1.prototype={
a_(){var w,v=this
v.a1()
v.f=A.z2(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kF()
w=v.a
C.bz8(w.c,w.d).bz(new C.d2V(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.S$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.S$=w
u.P$=0
v.a2()},
kF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.JX(s.c,s.d),$async$kF)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d2J(t,r))
t.atq()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
gaq4(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ab(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
atq(){var w,v,u=this.gaq4(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c5I(d){this.m(new C.d2G(this,d))
this.atq()},
Mh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Mh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mZ(B.o.u(1000*Date.now()),"Untitled page","",new A.Q(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aOF(r.c,r.d,s),$async$Mh)
case 3:w=4
return A.b(t.kF(),$async$Mh)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.pX(t.d,new C.d2h(s))
p=q>=0?q:J.ab(t.d)-1
t.m(new C.d2i(t,p))
t.atq()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.As(p+1,B.cp,B.ky),$async$Mh)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Mh,v)},
A8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$A8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaq4()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aOF(o.c,o.d,new C.mZ(s,r,q,new A.Q(p,0,!1))),$async$A8)
case 3:w=4
return A.b(t.kF(),$async$A8)
case 4:if(t.c==null){w=1
break}t.m(new C.d2K(t))
case 1:return A.h(u,v)}})
return A.i($async$A8,v)},
MX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$MX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaq4()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2q(r),s,null,!0,!0,x.y),$async$MX)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.byU(s.c,s.d,r.a),$async$MX)
case 4:t.m(new C.d2r(t))
w=5
return A.b(t.kF(),$async$MX)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Sy(B.o.D(t.r+1,0,J.ab(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$MX,v)},
xL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A8(),$async$xL)
case 5:case 4:if(t.c==null){w=1
break}w=J.cw(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.PV(s,r.r,o,p,q),$async$xL)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hdv(s,r.x,r.r),$async$xL)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.JX(s.c,s.d),$async$xL)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.mZ(""+(m+k),q,B.a.i(j.b),new A.Q(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Aj(r.c,r.d,l),$async$xL)
case 11:w=12
return A.b(t.kF(),$async$xL)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xL,v)},
ZY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A8(),$async$ZY)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxJ(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.ya,new C.d2H(t),new C.d2I())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mf("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gU(o)
p.push(new F.mf(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fRW(o,new F.qY(s,r,"",p,new F.ud(q.d,null,null,null,null,"","","")),null),$async$ZY)
case 6:case 1:return A.h(u,v)}})
return A.i($async$ZY,v)},
MF(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$MF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A8(),$async$MF)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c_(D.aaW,null,new C.d2m(t),s,!0,!0,!0,D.aJU,!1,!1,x.N),$async$MF)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cBi(r)
t.m(new C.d2n(t,q))
s=t.a
w=7
return A.b(C.Qu(s.c,s.d,q),$async$MF)
case 7:case 1:return A.h(u,v)}})
return A.i($async$MF,v)},
VD(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c_(D.aaW,null,new C.d2s(t),r,!0,!0,!0,D.aJU,!1,!1,x.e),$async$VD)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d2t(t,s))
r=t.a
w=4
return A.b(C.Qu(r.c,r.d,s),$async$VD)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.As(0,B.dW,B.oh)
case 1:return A.h(u,v)}})
return A.i($async$VD,v)},
bLj(d){var w=d.bQ(),v=B.a.aT(B.o.u(w.gcb()),2,"0"),u=B.a.aT(B.o.u(w.gcr()),2,"0")
return""+w.gce()+"-"+v+"-"+u},
gxJ(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bTc()
if(r.e)w=D.a9U
else if(J.ck(r.d)){w=r.y
v=r.gxJ(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eOx,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.C(Y.agg,new C.Xn(w,v,0,q),q),q),B.bu,t,B.ao,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k5.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.ezv,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.vj,B.n),q,q,q,q,B.Xo,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcye(),q,q,q,q,q,q,!1,B.aa))
w.push(B.S)
w.push(A.hb(D.bBq,D.fmp,r.gaJS(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.ey,q,q,B.ai),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ab(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k5.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dP:B.zv
u=A.v(A.a([new A.C(D.bnL,w,q),A.D(A.I4(v,new C.d2T(r),J.ab(r.d)+1,q,r.gc5H(),u,B.aU),1),r.byu()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cc(q,D.ac6,new A.an(B.W,q,B.b_,B.q,A.a([D.aIq,A.bq(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],v),q),q,!1,!1,q,q)},
bTc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cw(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.J3(B.dS,"AI",h.gbwo(),!0))
if(h.a.f)f.push(new C.J3(B.nG,"Cover",h.gbGQ(),!1))
if(h.a.f)f.push(new C.J3(B.xO,"Header",h.gbBT(),!1))
if(J.cw(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.J3(B.tw,"Print",h.gceG(),!1))
if(h.a.f&&J.cw(h.d)&&h.r>=0){v=h.w
u=v?B.hw:B.j7
t=v?"Save":"Edit"
f.push(new C.J3(u,t,v?h.gckH():new C.d2D(h),!1))}if(h.a.f)f.push(new C.J3(B.hv,"Add page",h.gaJS(),!1))
v=C.h9H(h.y.Q)
u=h.gxJ(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ab(h.d)
r=J.ab(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dfP
else{k=new A.aY(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aA(E.jE.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.k5,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bT(i,i,i,i),new A.bs(k,k,k,k),g,new A.a6(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k5.j(0.85)
p.push(new A.bG(1,B.bo,A.aE(B.c5,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.aa),g))}return new C.aj5(v,u,t+" \xb7 "+s+" "+r,new C.d2E(h),A.z(p,B.m,g,B.e,B.j,0,g,g),g)},
zd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A8(),$async$zd)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a0S(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.d2j(t,p),s,null,!0,!0,x.N),$async$zd)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xL(),$async$zd)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.CV(),$async$zd)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Eu("Swahili (Kiswahili)",!0),$async$zd)
case 18:w=16
break
case 17:w=19
return A.b(t.cv4(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zd)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zd,v)},
Xv(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jE.j(0.3),B.r,1),r=x.p
return new A.C(B.cK,A.aK(!1,v,!0,A.p(w,A.z(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vj,B.a6),w,42,w,w,w,w,w,42),B.bd,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A4.Si,w,w,w),A.d(g,w,w,w,w,w,w,E.a5U,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2F(d,h),w,w,w,w,w,w,w),w)},
CV(){return this.bKO()},
bKO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$CV=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2w(r),a7,null,!0,!0,x.ei),$async$CV)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eK("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.c9(null,null,!1,null,new C.d2x(o),a7,null,!0,!0,x.H).f7(new C.d2y(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cf(l,new A.A(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.ya[a1]
J.cf(j,i.a)}w=8
return A.b(C.afr(a0,a7,new C.d2z(o),d,l,e,j),$async$CV)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a8(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a4(l,!0).eF()
l=o
l.shM($.aw())
J.aP6(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gck(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ab(p);++a4){if(m.b.aj(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b8F(m.b.h(0,a4).b,a7,new A.Q(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Aj(j.c,j.d,l),$async$CV)
case 11:w=12
return A.b(r.kF(),$async$CV)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.ya[a1].a)
a5=l.cz5(j,12,a7)
l=r.a
w=15
return A.b(C.Qu(l.c,l.d,a5),$async$CV)
case 15:if(r.c!=null)r.m(new C.d2A(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.As(0,B.dW,B.oh)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.co4("Undo",new C.d2B(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.eh,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$CV,v)},
Eu(d,e){return this.cv5(d,e)},
cv4(d){return this.Eu(d,!1)},
cv5(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Eu=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eK("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.c9(null,null,!1,null,new C.d2M(a0),k,null,!0,!0,x.H).f7(new C.d2N(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cf(o,new A.A(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a14(m,new C.d2O(a0)),$async$Eu)
case 10:w=8
break
case 9:w=11
return A.b(C.bAC(new C.d2P(a0),m,a2),$async$Eu)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a8(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a4(o,!0).eF()
o=a0
o.shM($.aw())
J.aP6(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ab(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b8F(J.q(p,g).b,j.a,new A.Q(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Aj(k.c,k.d,o),$async$Eu)
case 12:w=13
return A.b(r.kF(),$async$Eu)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.co4("Undo",new C.d2Q(r,d),null),null,null,null,null,B.q,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eu,v)},
byu(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d2k(v):u
r=A.aH(u,u,u,u,A.V(D.bx6,s?D.k5:B.b8,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cw(v.d)&&!v.w&&v.r>=0)s=A.hb(A.V(B.v_,B.E5,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.E5,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbGp(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k5.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ab(v.d)?new C.d2l(v):u
return A.bq(!0,new A.C(D.bnz,A.z(A.a([r,s,A.aH(u,u,u,u,A.V(B.ee,t<J.ab(v.d)?D.k5:B.b8,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ah,!0,!1)}}
C.Y8.prototype={
T(){return new C.bcu(new A.ar(B.as,$.aw()))}}
C.bcu.prototype={
ga05(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbJA(){var w,v=this.ga05()
A:{if("cover"===v){w=D.cMp
break A}if("book"===v){w=D.cIp
break A}w=D.d8H
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jE.j(0.5),n=x.p,m=A.z(A.a([D.dfQ,B.aw,D.bsR,A.aH(q,q,q,q,B.l9,q,q,q,new C.d4F(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jF(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d4G(r),r.ga05()==="page",q,q,q,q))
if(r.a.d)l.push(A.jF(q,q,q,D.fhl,q,new C.d4H(r),r.ga05()==="book",q,q,q,q))
l.push(A.jF(q,q,q,D.f5b,q,new C.d4I(r),r.ga05()==="cover",q,q,q,q))
l=A.c5(B.bG,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.T,!1,q,!0,B.q,q,A.aM(),r.d,q,q,q,q,q,2,A.bo(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kp,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ag,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.dj,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbJA(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mw(q,B.c.j(0.08),new A.x(s,q,B.I5,q,q,q,q,q,q,q,q,q),B.hy,new C.d4J(r,s),q,q,q,q))}return A.eD(q,E.zZ,A.cd(A.v(A.a([m,B.S,D.fko,B.ao,l,B.ac,k,B.P,A.c5(B.bG,w,B.bx,6,6),B.az,A.dp(D.bBn,D.fl9,new C.d4K(r,d),A.bk(B.b3,q,q,q,q,B.nT,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.au,D.ffI],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.fw,q,q,B.ai),q,q,q,D.ag0,B.d_,q,new A.b7(p,new A.aA(o,1.4,B.r,-1)),q)}}
C.Y6.prototype={
T(){return new C.ay2(A.a([],x.Y))},
gdV(){return this.c}}
C.adf.prototype={}
C.ay2.prototype={
a_(){this.a1()
this.kF()},
kF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.PZ(p.c,p.d),$async$kF)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bz8(r.c,q),$async$kF)
case 6:j=e
i=J
w=7
return A.b(C.JX(t.a.c,q),$async$kF)
case 7:m.push(new l.adf(k,j,i.ab(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d39(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
b45(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
OU(d,e){return this.c7f(0,e)},
c7f(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$OU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).ci(A.eo(new C.d38(u,e),!0,null,x.y)),$async$OU)
case 2:t=g
w=3
return A.b(u.kF(),$async$OU)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aLN)
return A.h(null,v)}})
return A.i($async$OU,v)},
Ex(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Ex=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aLJ)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aeL(s.c,s.d),$async$Ex)
case 5:q=e
w=6
return A.b(t.kF(),$async$Ex)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.OU(0,B.d.iK(t.d,new C.d3d(q))),$async$Ex)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.PV(p,s.f,r,n,o),$async$Ex)
case 10:m=e
w=11
return A.b(t.kF(),$async$Ex)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aLN)
case 1:return A.h(u,v)}})
return A.i($async$Ex,v)},
Oo(d,e){return this.cis(0,e)},
cis(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d3c(t,e),s,null,!0,!0,x.y),$async$Oo)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1h(s.c,s.d,e.a),$async$Oo)
case 4:w=5
return A.b(t.kF(),$async$Oo)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.byx(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jE.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fF(0.7142857142857143,A.p(n,A.v(A.a([D.dfR,B.ac,D.dYK,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k5.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcya(),n,n,n,n,n,n,!1,B.aa))}w=A.m(22)
v=A.I(E.jE.j(0.85),B.r,1.6)
s=A.aE(n,A.p(n,D.bIZ,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jE.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3e(d),n,n,n,n,n,n,!1,B.aa)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jE.j(0.5),B.r,1)
w=A.p(n,A.z(A.a([s,B.bd,D.btd,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eNF,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h2,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bNU,B.n),n,n,n,Ah.L3,D.blF,n,n,n)
if(o.e)k=D.a9U
else k=k.length===0?D.b0N:A.cm(new C.d3f(k))
return A.cc(n,D.ac6,new A.an(B.W,n,B.b_,B.q,A.a([D.aIq,A.bq(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],l),n),n,!1,!1,n,n)},
byx(d){var w,v,u=this,t=null,s=u.b45(d),r=d.c,q=x.p,p=A.a([A.bY(0,A.f4(B.A,new A.a5(300,420,new C.Xn(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bIi,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b8,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d36(u,d),t,t,t,t,t,t,!1,B.aa),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eNf,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fF(0.7142857142857143,new A.an(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k5.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d37(u,d),t,t,t,t,t,t,!1,B.aa)}}
C.J3.prototype={}
C.Xn.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.ya,new C.cCd(m),new C.cCe()),j=m.c,i=D.BE.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lG:B.b9
v=new C.cCf(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.dW3,28)],x.V)
u=x.p
t=A.a([A.bY(0,A.b3(l,l,l,new C.b9M(j.x,h,l),B.at),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a6(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aY(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bs(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.agh,8,0.85,2.2),v.$4(D.bqp,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.agh,8,0.85,2.4))
else if(r==="corners")t.push(A.bY(0,new A.C(D.bql,A.b3(l,l,l,new C.b9D(h,l),B.at),l),0,0,0))
r=A.V(D.auv[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.arX,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.az,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bY(0,new A.C(D.bqQ,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aF2(l),D.eDg),l,l,l,46,0,l))
return A.p(l,A.bv(D.a8A,new A.an(B.W,l,B.a9,B.q,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.a8A,i,new A.a6(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b9M.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eT()
f.dI(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.L()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ai()
l=f.ai()
k=f.ai()
$.W()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.ai()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.W()
j=A.a([],l)
h=new A.aP(k.r,B.aq,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbI().a.snapshot()
o.drawPath((h.e=new A.cE(k)).a,r)
r.delete()}break
default:$.W()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ai()
m=f.ai()
l=f.ai()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.L()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ai()
m=f.ai()
l=f.ai()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ar(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b9D.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.L(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.af
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.euO,new A.cL([w,0,-1,1]),new A.cL([0,v,1,-1]),new A.cL([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aP(l,B.aq,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbI().a.snapshot()
w.drawPath((n.e=new A.cE(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ar(d){return!d.b.A(0,this.b)}}
C.tU.prototype={}
C.XF.prototype={
T(){return new C.b9K()}}
C.b9K.prototype={
gnG(){var w=this.d
return w===$?this.d=this.a.c:w},
gxJ(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b1,B.aN),$.aw())}return v},
gayG(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b1,B.aN),$.aw())}return v},
gaoF(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b1,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxJ(0),u=v.S$=$.aw()
v.P$=0
v=w.gayG()
v.S$=u
v.P$=0
v=w.gaoF()
v.S$=u
v.P$=0
w.a2()},
apg(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jF(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cVF(this,f,u),e===u,s,s,s,s))}return A.c5(B.bG,r,B.bx,6,8)},
auP(d){var w=null,v=B.c.j(0.07)
return A.bo(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lh,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnG(),a0=f.gxJ(0),a1=a0.a.a,a2=f.gayG(),a3=a2.a.a,a4=f.gaoF(),a5=d.b8D(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a5(190,260,A.f4(B.A,new A.a5(270,370,new C.Xn(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a0,e,e,e,e,e,2,f.auP("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cW3(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a2,e,e,e,e,e,2,f.auP("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cW4(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.ya[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b8
q=r.a===q
o=new A.aA(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bT(o,o,o,o),e,e,new A.a6(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.ay
v.push(A.aE(e,A.v(A.a([p,B.cZ,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cW5(f,t),e,e,e,e,e,e,!1,B.aa))}v=A.c5(B.bG,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b3.j(0.35):B.c.j(0.07)
m=new A.aY(14,14)
s=f.d
o=new A.aA((s===$?f.d=f.a.c:s).d===n?B.ex:B.K,2,B.r,-1)
q.push(A.aE(e,A.p(e,A.V(D.auv[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bT(o,o,o,o),new A.bs(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cW6(f,n),e,e,e,e,e,e,!1,B.aa))}q=A.c5(B.bG,q,B.bx,8,8)
a4=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a4,e,e,e,e,e,2,f.auP("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cW7(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,I.ms,e,e,e)
m=A.a([],w)
for(l=D.BE.gdK(D.BE),l=l.gah(l);l.C();){k=l.gU(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ex:B.b8
g=r.e===i
o=new A.aA(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bT(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.ay
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cW8(f,k),e,e,e,e,e,e,!1,B.aa))}m=A.c5(B.bG,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,I.ms,e,e,e)
k=f.gnG()
return new A.C(new A.N(0,0,0,a3.f.d),A.bq(!0,new A.cW(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cJ(A.a([D.ffb,B.ac,d,B.aO,a0,B.S,a2,B.az,D.fkY,B.P,v,B.az,D.ffk,B.P,q,B.az,a4,B.az,p,B.P,m,B.az,l,A.kQ(e,9,""+B.k.V(f.gnG().f),36,18,new C.cW9(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,I.ms,e,e,e),B.ao,f.apg(D.a1G,f.gnG().r,new C.cWa(f),D.dbS),B.ac,A.d("BORDER",e,e,e,e,e,e,I.ms,e,e,e),B.ao,f.apg(D.a19,f.gnG().w,new C.cWb(f),D.dbX),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,I.ms,e,e,e),B.ao,f.apg(D.a14,f.gnG().x,new C.cWd(f),D.ddk),B.ao,A.iB(e,B.b3,e,B.ah,e,new C.cWe(f),e,e,e,D.f9Q,f.gnG().z),B.bu,A.bJ(D.fe5,new C.cWf(f,a6),A.bk(B.b3,e,e,e,e,B.nT,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,P.afQ,e,e,B.ai,!0),e),!0,!1,B.ah,!0,!0),e)}}
C.aF2.prototype={
a6(d,e){var w,v,u,t=new A.aP($.W().r,B.aq,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bE())
u=A.L()
u.sau(D.bOw.aw(0,new A.a9(0,0,0+w,0+v)))
d.aN(t,u)},
ar(d){return!1}}
C.beX.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.L()
w.sau(D.bNA.aw(0,new A.a9(0,0,a3,a4)))
a5.aX(new A.a9(0,0,a3,a4),w)
v=B.k.dG(a2/112)
u=new A.eT()
u.dI(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.cMo[u.aD(9)]
j=u.aD(14)
J.bA(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.by(i,B.h9)
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sau(new A.a6(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.ew(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jE.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c4(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jE.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c4(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aD(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.sau(D.bMY.aw(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c4(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jb
d=p.H()
w.drawRect(A.c4(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b43.j(0.72).gp(0)
a5.aX(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sau(new A.bQ(B.A,0.5,B.x,a0,0,A.a([D.baw.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.ag(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b8_.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kF(new A.o(A.aq(D.k5,D.beD,w/4),o,new A.bT(B.Y,new A.aA(B.w.j(0.12),1,B.r,-1),B.Y,B.Y),B.Jc,o,o,B.n),B.be,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aE4,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aY(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jE.j(0.6),o,o,new A.bs(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pE,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aUc,u,D.bOu,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aF2(o),D.eDb),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSs(p.y,r,G.il,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.r,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.il.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.f_I,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.il.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.w,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.il.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ag,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eS1,!0,B.a5,B.yX,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f_B,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.il.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.z(A.a([A.D(A.p(o,o,B.f,D.DT.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fm,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.DT.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.DT.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.az],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.il.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.WE(A.dn(A.a([A.dn(o,o,o,o,o,o,o,o,o,D.eV3,B.a.ap(k,0,1)),A.dn(o,o,o,o,o,o,o,o,o,o,B.a.b_(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.il.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.y,o,o,o,o,B.ai)}s.push(A.D(n,1))
s.push(new A.C(B.it,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.il.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.z(A.a([u,A.D(A.p(o,A.bv(B.Jc,new A.an(B.W,o,B.a9,B.q,A.a([t,new A.C(D.bpT,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.bX(o,new A.o(o,o,o,o,o,new A.a6(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.be),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.Jc,v,D.bP_,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.a9,B.q,l,o)}}
C.anQ.prototype={
T(){return new C.aBA(A.a([],x._))},
bp(){return this.r.$0()},
pn(){return this.w.$0()},
gdV(){return this.c}}
C.aBA.prototype={
a_(){var w,v
this.a1()
this.vm()
w=this.a
v=w.c
if(v.length!==0)C.a5S(v,w.e,w.d.w)},
vb(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fRZ(r,t.e,!1,s.w,new C.dPJ(u),null,s),$async$vb)
case 2:w=3
return A.b(u.vm(),$async$vb)
case 3:return A.h(null,v)}})
return A.i($async$vb,v)},
Z9(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Z9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fRZ(r,t.e,!0,s.w,new C.dPI(u),null,s),$async$Z9)
case 2:w=3
return A.b(u.vm(),$async$Z9)
case 3:return A.h(null,v)}})
return A.i($async$Z9,v)},
vm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.A8(q.a.c),$async$vm)
case 7:p=e
if(q.c!=null)n=q.e||J.cw(p)
else n=!1
if(n)q.m(new C.dPL(q,p))
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
return A.b(C.FK(q.a.c).cL(0,B.pi),$async$vm)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dPM(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dPN(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vm,v)},
Nr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Nr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eGN)
w=3
return A.b(C.FK(t.a.c),$async$Nr)
case 3:r=e
w=4
return A.b(C.fxY(t.a.c,r),$async$Nr)
case 4:q=e
w=5
return A.b(C.FK(t.a.c),$async$Nr)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dPH(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ab(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dv:B.cR,null,B.q,null,s,null,B.m3,null,null,null,null,null,null,null,null,null,null))
t.a.pn()
case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
H3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$H3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hYJ(l),$async$H3)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hsA(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aY1(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$H3)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h9R(r)
o=Date.now()
n=t.a.c
m=new C.kr(l,r.toUpperCase(),p,!0,B.T,D.Bt,new A.Q(o,0,!1),0,n,D.ti)
w=5
return A.b(C.a1o(n,m),$async$H3)
case 5:w=6
return A.b(t.vm(),$async$H3)
case 6:t.a.bp()
t.a.pn()
if(t.c==null){w=1
break}t.DH(m)
case 1:return A.h(u,v)}})
return A.i($async$H3,v)},
DH(d){return this.c9g(d)},
c9g(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$DH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.A8(u.a.c),$async$DH)
case 2:n=l.qU(k.dG(f,new C.dPK(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.ht(m,new C.anK(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$DH)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1o(u.a.c,o),$async$DH)
case 6:case 5:w=7
return A.b(u.vm(),$async$DH)
case 7:u.a.pn()
return A.h(null,v)}})
return A.i($async$DH,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=new C.tp(p)
if(r.e)return A.av(A.mz(q,p?B.bq:B.bp,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dU:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bCs,B.f,q,q,new A.o(B.aT.j(0.12),q,A.I(B.aT,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc8l(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ae)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.EP(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bp,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e_,A.bJ(D.fma,r.gaNS(),A.bk(B.bT,q,q,q,q,q,Ag.Xr,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bpP,q,q,1/0),15,B.ah,1.05,D.a7i,q)}w=J.ab(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b2],v)
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.V(B.xV,B.aT,q,q,q,q),q,q,q,new C.dPP(r),q,q,q,q,"Sync family trees with database",q))
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.V(B.xM,B.aT,q,q,q,q),q,q,q,r.gadF(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.ali,D.f33,r.gaNS(),A.bk(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.z(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ab(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.EP(r.cv9(J.q(r.d,s),o),14,B.ah,1,D.a7i,q))
B.d.v(w,u)}return A.v(A.a([p,B.az,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cv9(d,e){var w=null,v=e.a,u=v?B.dU:B.c,t=A.m(14),s=A.I((v?B.dY:B.bX).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bBw,B.f,w,w,new A.o(B.aT.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gamy(),m=d.d?"":" \xb7 Public",l=d.y===D.kb?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.by,A.z(A.a([p,B.bd,l,A.V(B.LN,v?B.bq:B.bp,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dPO(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ae),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.anK.prototype={
T(){return new C.aBx(A.a([],x._),A.aX(x.N),A.b5E())},
bp(){return this.r.$0()},
gdV(){return this.c}}
C.aBx.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.aaB()
w=u.a
v=w.c
if(v.length!==0)C.a5S(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a1_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xd("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dP9(r),s,null,!0,!0,x.y),$async$a1_)
case 3:if(e!==!0||t.c==null){w=1
break}t.Iv()
t.m(new C.dPa(t,r))
w=4
return A.b(t.vd(),$async$a1_)
case 4:t.a.bp()
t.xd(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
cll(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.dP4(w,f,d,e))},
aQ1(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dk()
u.e0(w,v,0,1)
u.js(q,q,1,1)
this.w.sp(0,u)},
b6j(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eE(new Float64Array(16))
q.dW(r)
w=q.BU()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dk()
t.e0(r,u,0,1)
t.js(v,v,1,1)
t.e0(-r,-u,0,1)
t.il(0,q)
s.sp(0,t)},
aaB(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aaB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.A8(u.a.c),$async$aaB)
case 2:t=s.qU(r.dG(e,new C.dOD(u)))
if(t!=null&&u.c!=null)u.m(new C.dOE(u,t))
return A.h(null,v)}})
return A.i($async$aaB,v)},
xd(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vb(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fRZ(o,t,!1,r,new C.dOS(u),q.a,s),$async$vb)
case 2:n=A
m=J
w=3
return A.b(C.FK(u.a.c),$async$vb)
case 3:p=n.qU(m.dG(e,new C.dOT(u)))
if(p!=null&&u.c!=null)u.m(new C.dOU(u,p))
return A.h(null,v)}})
return A.i($async$vb,v)},
Iv(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cw(w,0)},
vd(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1o(t,s),$async$vd)
case 2:return A.h(null,v)}})
return A.i($async$vd,v)},
a_D(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tB(q,t.a.c)){t.xd("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hZT(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a_D)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Iv()
t.m(new C.dP3(t,r))
w=4
return A.b(t.vd(),$async$a_D)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_D,v)},
Zm(){return this.c9i()},
c9i(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tB(q,t.a.c)){t.xd("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.M(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dP1(r,new C.tp(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Zm)
case 3:if(e!==!0||t.c==null){w=1
break}t.Iv()
t.m(new C.dP2(r,t))
w=4
return A.b(t.vd(),$async$Zm)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zm,v)},
Uu(d){return this.bvA(d)},
bvA(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Uu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tB(r,t.a.c)){t.xd("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dOr(t,d),r,null,!0,!0,x.P),$async$Uu)
case 3:s=f
if(s==null){w=1
break}t.Iv()
t.m(new C.dOs(t,s))
w=4
return A.b(t.vd(),$async$Uu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Uu,v)},
a1l(d){return this.cxe(d)},
cxe(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a1l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.M(s)
t=u.c
t.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dPc(u,d,new C.tp(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a1l)
case 2:return A.h(null,v)}})
return A.i($async$a1l,v)},
c5C(d){var w=this,v=w.d
v===$&&A.c()
if(C.tB(v,w.a.c))w.N6(d)
else w.a1l(d)},
ag7(d,e){return this.cpc(d,e)},
cpc(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ag7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.M(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dP6(new C.tp(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$ag7)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ag7,v)},
H8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$H8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kb?3:5
break
case 3:w=6
return A.b(C.fG6(t.a.c),$async$H8)
case 6:s=e
o=t.a
r=C.fZz(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ag7(!s,!r),$async$H8)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bz0(o,t.a.c)){t.xd("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kU(o,"Cancel","Remove",q.y===D.kb?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$H8)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aN3(t.a.c,t.d.a),$async$H8)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iK(o,null)
case 1:return A.h(u,v)}})
return A.i($async$H8,v)},
a8c(d){return this.bGx(d)},
bGx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tB(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dOt(p))){o=A.T(s)
p.a=A.qU(new A.cS(new A.a1(s,new C.dOu(d),o.k("a1<1>")),new C.dOv(),o.k("cS<1,n>")))}q=p.a
if(q==null)q=d.d
t.Iv()
t.m(new C.dOw(t,s,d,q))
w=3
return A.b(t.vd(),$async$a8c)
case 3:t.xd(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a8c,v)},
N6(d){return this.bIx(d)},
bIx(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$N6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tB(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a1l(d),$async$N6)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.dOA(t,d),r,null,!0,!0,x.P),$async$N6)
case 6:s=f
if(s==null){w=1
break}t.Iv()
t.m(new C.dOB(t,s))
w=7
return A.b(t.vd(),$async$N6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$N6,v)},
cvt(){var w=this,v=w.d
v===$&&A.c()
if(!C.tB(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dPb(w))
w.vd()},
Xh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Xh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bz0(n,t.a.c)){t.xd("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.M(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.J(q,t.gc47(),A.T(q).k("J<1,n>")).bY(0,new C.dON()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dOO(t,new C.tp(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Xh)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Iv()
t.m(new C.dOP(t,p))
w=4
return A.b(t.vd(),$async$Xh)
case 4:t.xd("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Xh,v)},
c48(d){return B.a.i(d.toLowerCase())},
c86(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tB(v,w)
t=r.d
s=C.hPe(t)
C.hYN(q,t.b,u,C.hPd(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tp(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a1(l,new C.dPj(),A.T(l).k("a1<1>")).gM(0)
l=n?B.bW:B.iH
v=A.V(B.YB,n?B.bq:B.bp,o,o,o,18)
u=x.p
v=A.a([new A.C(B.Am,A.aK(!1,o,!0,new A.C(B.hF,A.z(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dPk(p,d),o,o,o,o,o,o,o),o),new A.C(B.mQ,p.bTd(m),o)],u)
if(p.d.y===D.kb){t=B.r_.j(0.15)
s=A.m(12)
r=A.I(B.r_.j(0.45),B.r,1)
q=C.FI(p.d,p.a.c)
v.push(new A.C(B.x3,A.p(o,A.z(A.a([D.bGG,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.j5,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b2],u)
if(C.tB(p.d,p.a.c)&&p.e.length!==0)u.push(new C.J_("Undo",B.qP,p.gcvs(),m,o,o))
u.push(new C.J_("Family Book",D.bwd,p.gc85(),m,B.rO,o))
if(C.tB(p.d,p.a.c))u.push(new C.J_("Display settings",B.B5,p.gc9h(),m,B.aZ,o))
u.push(new C.J_("Sync",B.xM,p.gadF(),m,o,o))
t=p.d
if(t.y===D.kb||C.bz0(t,p.a.c)){t=p.d.y===D.kb?"Remove shared tree":"Delete tree"
u.push(new C.J_(t,B.ea,p.gbGH(),m,B.fT,o))}if(C.tB(p.d,p.a.c))u.push(new C.J_("Add member",B.va,new C.dPl(p),m,B.bT,o))
v.push(new A.C(P.aft,A.z(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gamy()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.dPm(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?L.YF:V.LO,o,o,o,o,o)
v.push(A.av(A.hb(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dPn(p),o),o,o,o))}return A.cc(o,l,A.bq(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)},
bTd(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fs.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.V(B.xE,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bJI,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gadF(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ae)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eQq,m,m,m)
r=r.gamy()
p=n.d.gamy()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.D(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tB(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bGS,m,m,m,n.gciN(),m,m,m,m,"Rename",m))
s=A.z(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j8:B.mc
r=r?"Private":"Public"
r=A.D(n.asQ(q,"Privacy",r,n.a.d.w?n.gcuy():m),1)
q=A.D(n.asQ(B.xN,"Tree code",n.d.c,new C.dOC(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.z(A.a([r,B.ab,q,B.ab,A.D(n.asQ(D.bxW,"Collaborators",p,n.gbXC()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kb){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fE,A.z(A.a([A.V(B.os,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aMX,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ae)],o))}return A.p(m,A.bv(u,new A.an(B.W,m,B.a9,B.q,A.a([t,new A.C(B.Ew,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.bN1,B.n),m,m,m,m,m,m,m,1/0)},
asQ(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(H.agy,A.v(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.u6,A.d(f,w,1,B.a2,w,w,w,H.I1,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ae)}}
C.bcc.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gal(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcf(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dr(r,new C.d3j(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d3k(this),A.T(r).k("J<1,r>")))
return new A.C(B.te,new A.a5(w,v,new A.an(B.W,t,B.a9,B.f,u,t),t),t)}}
C.Jb.prototype={}
C.F1.prototype={}
C.bce.prototype={
gbeA(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aH7.prototype={}
C.bcf.prototype={
bIf(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.L()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aP(q.r,B.aq,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pl(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pl(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bE())
q=A.L()
q.r=B.c.gp(0)
d.ag(new A.u(u,w),9,q)
q=A.L()
q.r=B.bA.gp(0)
d.aN(t,q)},
bId(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b1(a0,new C.d3E())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b8(a0,new C.d3F(f))
t=new A.J(a0,new C.d3G(f),A.T(a0).k("J<1,O>")).bY(0,new C.d3H()).cI(0,1/0,B.wj)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lK(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aP(l.r,B.aq,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cR(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cR(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbI().a.snapshot()
r.drawPath((g.e=new A.cE(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.L()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.af
w.d=B.bO
w.e=B.fx
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bId(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bIf(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bfT.prototype={
gc1Y(){var w=this.c
if(B.a.i(w.y).length!==0)return D.d8G
switch(w.c.a){case 0:return D.cEr
case 1:return D.cPa
case 2:return D.d3m}},
gc20(){var w=this.c,v=C.h9f(w.w),u=C.h9f(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=t.gc1Y(),p=t.c,o=K.bzV(p.f),n=t.gc20(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gam(q).j(0.35),B.cI,10)],m),k=r?B.aA:B.c,j=A.I(r?B.aA:B.c,B.r,2)
if(o!=null)w=A.rQ(B.A,s,B.cn,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gam(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gam(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a6(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hR(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a6(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.EM,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aA:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f_d,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.brF,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dz,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bp,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a5(84,112,A.v(A.a([new A.an(B.W,s,B.a9,B.f,l,s),B.au,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aW3,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.brQ,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.aa)}}
C.bbk.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.W()
w=A.L()
v=this.b
u=v?B.c:D.b6C
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.btp.prototype={
B(d){var w=this,v=null,u=new C.f26(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hv,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bE:B.f7,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xJ,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bE:B.f7,v,v,v,1,v,v,v,v,v,22),u.$3(B.aiS,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dl,v,v,v,B.ae)}}
C.bjb.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.r,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.V(s?L.YF:V.LO,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eWD,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.aa)
u=A.a([t,B.ao,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eUE,B.L,v,v)],r)
if(s){t=A.a([B.ao],r)
s=w.d
B.d.v(t,new A.J(s,new C.eEo(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a5(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.YI.prototype={
T(){return new C.azZ()},
bp(){return this.Q.$0()},
gdV(){return this.w}}
C.azZ.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xh:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hQL(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.S$=w
u.P$=0
u=v.f
u===$&&A.c()
u.S$=w
u.P$=0
u=v.r
u===$&&A.c()
u.S$=w
u.P$=0
u=v.w
u===$&&A.c()
u.S$=w
u.P$=0
u=v.x
u===$&&A.c()
u.S$=w
u.P$=0
v.a2()},
Op(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Op=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fZz(p.y,p.w)
w=3
return A.b(A.l6(t.a.w,B.H8),$async$Op)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aY1(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Op)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hsB(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Ai.FT(78,800),$async$Op)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dju(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
c2_(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hT(B.o.u(1000*Date.now()),w,D.xh,null,null,null,"","","","","",1,!1,0)
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
s=v.aBs(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).N(s)},
a7O(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a7O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.djt(r),s,null,!0,!0,x.y),$async$a7O)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a7O,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H,i=new C.tp(j),h=l.a.e,g=A.T(h).k("a1<1>"),f=A.B(new A.a1(h,new C.djD(l),g),g.k("G.E"))
h=j?B.dU:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bqa,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hn(A.aK(!1,k,!0,new A.C(B.m7,A.V(B.ea,B.oe,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbDo(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jk:B.iK
t=K.bzV(l.as)
if(l.as==null)s=A.V(B.ol,j?B.bq:B.bp,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.a9,B.q,A.a([A.ho(u,t,s,k,42),A.ao(0,A.ho(B.bT,k,D.bAA,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc1X(),k,k,k,k,k,k,!1,B.aa),k,k,k)
t=l.d
t===$&&A.c()
t=C.aA0(t,"Full name",B.m9,1,1,i,B.lM)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bfR(i,u,new C.djE(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bjK],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.djF(),A.T(o).k("J<1,eN<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bjM],q)
B.d.v(q,new A.J(f,new C.djH(),A.T(f).k("J<1,eN<n?>>")))
o=A.v(A.a([t,B.ao,new C.abH(i,r,"Who is their parent?",p,new C.djI(l),k,o),B.az,n,B.ao,new C.abH(i,m,"Who is their spouse / partner?",q,new C.djJ(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aA0(q,"Birth date",D.ahW,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aA0(m,"Birth place",B.YU,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aA0(n,"Date of death (if deceased)",D.ak9,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aA0(p,"Occupation",B.ZY,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.a9,B.q,w,k),B.az,s,B.bu,new C.abI(i,"Identity",u,k),B.ac,new C.abI(i,"Family links",o,k),B.ac,new C.abI(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aA0(r,"Notes",B.kF,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aA_(i,"Child order",l.c9u(l.at),new C.djK(l),new C.djL(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fPn(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.djM(l):k
B.d.v(r,A.a([B.S,new C.aA_(i,"Visible in tree",u,w,new C.djN(l),k)],v))}r.push(B.S)
w=j?B.jk:B.iK
u=A.m(14)
t=A.I(j?B.dY:B.bX,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iB(k,B.bT,k,B.ah,k,new C.djO(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.af5,k,k,k))
r.push(B.bu)
w=j?B.aP:B.aA
j=j?B.dY:B.bX
r.push(A.z(A.a([A.D(A.dW(B.na,new C.djG(d),A.dd(k,k,k,k,k,k,k,k,k,w,k,k,B.ce,k,new A.b7(A.m(14),B.Y),new A.aA(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.D(A.bJ(D.ezD,l.gc1Z(),A.bk(B.aT,k,k,0,B.c,k,B.ce,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.eh(B.h7,k,B.ah,h,new A.a5(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ai),k),D.afX,k,B.afl,new A.b7(g,B.Y),k,k)},
c9u(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.abI.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jk:B.iK,s=A.m(16)
return A.v(A.a([new A.C(D.agk,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dY:B.bX,B.r,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bfS.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dU:B.c,r=A.m(12),q=A.I((t?B.dY:B.bX).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.T,!1,u,!0,B.q,u,A.aM(),v.d,u,u,u,u,u,2,A.bo(u,B.ev,u,B.uR,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bp,u,u,u,u,u,u,u,u,u,u,u,B.cs,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ag,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.abH.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dU:B.c,s=A.m(12),r=A.I((u?B.dY:B.bX).j(0.85),B.r,1),q=A.V(B.qI,u?B.bq:B.bp,v,v,v,v),p=A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dU:B.c
return A.p(v,new A.CX(A.a31(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,v,v,v,B.cs,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lw,v,v,v)}}
C.bfR.prototype={
B(d){var w=new C.djP(this)
return A.z(A.a([w.$3(D.Ye,"Male",B.MA),B.ab,w.$3(D.aha,"Female",B.Ml),B.ab,w.$3(D.xh,"Other",B.mV)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aA_.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jk:B.iK,r=A.m(14),q=A.I(t?B.dY:B.bX,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.z(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGa(u,B.xJ,w.f,v),B.bn,new C.aGa(u,B.hv,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eu,v,v,v)}}
C.aGa.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dU:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bq:B.bp).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a5(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ae)}}
C.abJ.prototype={
bLT(d){switch(d.a){case 0:return B.bT
case 1:return B.bA
case 2:return B.cU}},
bLU(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aUa(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zy(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dU:B.c
u=A.m(12)
t=A.I((w?B.dY:B.bX).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bT,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bp,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.z(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cK,B.x0,p,p,1/0)},
ac9(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jk:B.iK,s=A.m(16),r=A.I(v?B.dY:B.bX,B.r,1)
return A.v(A.a([new A.C(D.agk,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hdW(r,q),o=q.c,n=t.bLT(o),m=K.bzV(q.f),l=t.e.a,k=l?B.dU:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kb?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bp,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.ho(u,m,m==null?A.V(B.ol,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.av(A.p(s,A.d(t.bLU(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.m6,s,s,s),s,s,s)
u=x.p
i=A.a([t.zy("Full name",i,B.m9)],u)
if(p>0)i.push(t.zy("Child order","#"+p,B.Ms))
r=A.a([h,B.au,r,B.aO,l,B.S,v,B.bu,t.ac9("Identity",i),B.ac,t.ac9("Life details",A.a([t.zy("Birth date",q.w,D.ahW),t.zy("Birth place",q.x,B.YU),t.zy("Date of death",q.y,D.ak9),t.zy("Occupation",q.z,B.ZY)],u)),B.ac,t.ac9("Family links",A.a([t.zy("1. Parent",t.aUa(q.d),B.F_),t.zy("2. Spouse",t.aUa(q.e),B.Mk)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ac9("Notes",A.a([t.zy("Notes",q,B.kF)],u))],u))
r.push(B.bu)
r.push(A.bJ(B.Il,new C.djZ(d),A.bk(B.aT,s,s,s,s,s,B.ce,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eD(s,k,new A.cW(B.ln,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,B.x5,s,s,B.ai),s),s,s,s,B.Ez,B.d_,s,new A.b7(j,B.Y),s)}}
C.J_.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bp
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.x9,A.hn(A.aF(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a5(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ae),u,v.c,u,u),u)}}
C.anN.prototype={
eH(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.T(w).k("J<1,a3<n,@>>")
w=A.B(new A.J(w,new C.c5E(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iM(w,new C.c5F(),t,x.U))
return s}}
C.anO.prototype={
T(){return new C.aBz(A.a([],x.bF))},
gd7(){return this.c}}
C.aBz.prototype={
a_(){this.a1()
this.IC()},
IC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$IC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c5I(t.a.c),$async$IC)
case 3:r=e
w=4
return A.b(C.A8(t.a.c),$async$IC)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qA(q,new C.dPw(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dPx(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$IC,v)},
xK(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Jk(d,e){return this.cxL(d,e)},
cxL(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Jk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dPB(q,e))
t=3
w=6
return A.b(d.$0(),$async$Jk)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dPC(q))
$.eP.m5()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jk,v)},
W7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oQ(r,s.c,s.e),$async$W7)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Jk(new C.dPt(t),"Preparing download\u2026"),$async$W7)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W7,v)},
Wb(d){return this.bJX(d)},
bJX(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oQ(r,s.c,s.e),$async$Wb)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Jk(new C.dPu(t,d),"Preparing file\u2026"),$async$Wb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wb,v)},
ae1(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ae1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wI.c3().L2(B.Pp,B.tj,!0),$async$ae1)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gal(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jj(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a8(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.FS()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ae1,v)},
WM(d){return this.bU5(d)},
bU5(d){var w=0,v=A.j(x.H),u=this
var $async$WM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Jk(new C.dPv(u,d),"Restoring family trees\u2026"),$async$WM)
case 2:return A.h(null,v)}})
return A.i($async$WM,v)},
WL(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ae1(),$async$WL)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.WM(s),$async$WL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WL,v)},
a0s(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oQ(r,s.c,s.e),$async$a0s)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Jk(new C.dPA(t),"Creating QR code\u2026"),$async$a0s)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0s,v)},
a04(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a04=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cf()){t.xK("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).ci(A.eo(new C.dPy(),!0,null,x.N)),$async$a04)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.WM(r),$async$a04)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a04,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=o?B.zQ:B.iH,m=o?D.adD:B.aP,l=o?B.aJ:B.bX,k=o?B.aP:B.aA,j=new C.d3I(n,m,l,k,o?B.bI:B.bp)
l=A.aH(p,p,p,p,A.V(B.ez,k,p,p,p,20),p,p,p,new C.dPE(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d3g(!0,B.ja,B.aW,B.aW,q.r?p:q.gcp0(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gclg()
t.push(A.D(C.d3g(!s,B.iO,B.b3,B.bz,r,j,"From another phone","Scan QR to restore"),1))
t=A.z(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d3g(!1,B.hx,B.aT,B.bT,q.r?p:q.gbJQ(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d3g(!1,M.xQ,B.aL,B.aM,q.r?p:q.gbU2(),j,s,"Upload backup file"),1))
l=A.a([new C.bcd(v,l,p),B.km,new C.ab_(j,"QR restore",p),B.S,t,B.d5,new C.ab_(j,"Backup files",p),B.S,A.z(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ab(q.d)>1&&q.a.f==null){v=A.a([B.km,new C.ab_(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dPF(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cJ(l,p,B.Xn,p,p,B.ai,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aT.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bq(!0,A.p(p,A.z(A.a([L.aLr,B.bd,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.As,p,p,p),!0,!1,B.ah,!0,!1),p,p,20,20,p,p))}return A.cc(w,n,new A.an(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d3I.prototype={}
C.bcd.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aT.j(0.32),B.jU,28)],x.V)
t=A.ao(p,A.V(B.tz,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.z(A.a([A.p(p,D.bJg,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nU,A.D(A.v(A.a([D.f4_,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bQ9,B.n),p,p,p,p,p,p,p,p)}}
C.ab_.prototype={
B(d){var w=null
return A.z(A.a([A.p(w,w,B.f,w,w,new A.o(B.aT,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcb.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aW.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aW.j(0.1),B.cI,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ex(A.db(new A.C(E.X1,A.v(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qC,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cs,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ae)}}
C.bcg.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aT.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ex(new A.C(B.eN,A.z(A.a([A.p(v,D.bIu,B.f,v,v,new A.o(q,v,A.I(B.aT.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qC,v,v,v),B.bd,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hx,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ae)}}
C.Z2.prototype={
T(){return new C.aBy()},
gd7(){return this.c}}
C.aBy.prototype={
a_(){this.a1()
this.a7k()},
a7k(){var w=0,v=A.j(x.H),u=this,t
var $async$a7k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b_E(u.a.c,B.C3),$async$a7k)
case 2:t=e
if(u.c!=null)u.m(new C.dPo(u,t))
return A.h(null,v)}})
return A.i($async$a7k,v)},
afo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$afo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dPp(q))
t=4
p=A.h0c(q.a.d,B.C3)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.S(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aq0(n.e,m,l,B.C3,p,n.f),$async$afo)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dPq(q))
q.c.I(x.q).f.R(D.eHW)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a8(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(B.a.e6(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dPr(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afo,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=p?B.j_:B.pc,n=p?B.i4:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fj2,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aT.j(0.35),B.r,1)
u=A.pv(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aT,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bu,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gckZ()
if(u)u=B.HW
else u=A.V(r.e===!0?B.hw:B.ahV,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a5(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.dd(q,q,q,q,q,q,q,q,q,B.aT,q,B.fJ,q,q,q,new A.aA(B.aT.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.it,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.ay:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a5(1/0,q,A.bJ(B.z4,new C.dPs(d),A.bk(B.aT,q,q,q,q,B.fJ,q,q,q,q,q,q)),q))
return A.cc(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Z3.prototype={
T(){return new C.bhi(A.yH(B.wR,B.nh,B.tD))}}
C.bhi.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cc(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fbw,w,w,w,1,w,!0),B.w,A.yG(this.d,B.bQ,new C.dPG(this,d)),w,!1,!1,w,w)}}
C.aWA.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.OU,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lp.prototype={}
C.a4U.prototype={
T(){return new C.bh0(null,null)}}
C.bh0.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.t9,v,1,v,w)
w.e=A.bj(v,B.ph,v,1,v,w)
w.a.toString
w.d.cF(0)
w.e.cF(0)},
br(d){var w,v,u=this
u.bE(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.br5()},
B(d){var w,v,u=this,t=B.d.dL(D.a1y,new C.dBu(u),new C.dBv())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cqO(A.c6(new A.h2(A.a([w,v],x.dS)),new C.dBw(u,t),null),!0)}}
C.bh_.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aYi(d,e)
break
case"house":p.lI(d,e,D.cTy)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.geb()
$.W()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ag(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lN(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Af(d,e,12)
p.xm(d,e,B.kW,5,14)
break
case"grocery":p.cac(d,e)
break
case"calculator":p.c9U(d,e)
break
case"lumber":p.cak(d,e)
break
case"kitchen":p.caf(d,e)
break
case"landscape":p.lI(d,e,D.cU1)
s=new A.aP($.W().r,B.aq,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cR(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cR(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ap(t,w))
s.E(new A.ap(0,w))
s.E(new A.bE())
w=A.L()
w.r=B.fu.j(0.85).gp(0)
d.aN(s,w)
p.Af(d,e,8)
p.xm(d,e,B.iM,4,18)
break
case"plumbing":p.cat(d,e)
break
case"electrical":p.lI(d,e,D.d2G)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aX(new A.a9(0,0,0+e.a,0+e.b),u)
p.lN(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lN(d,e,B.lr.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Af(d,e,10)
break
case"store":p.caC(d,e)
break
case"paint_remodel":p.cao(d,e)
break
case"roofing":p.cav(d,e)
break
case"warehouse":p.caJ(d,e)
break
case"vehicles":p.caH(d,e)
break
case"farm":p.ca6(d,e)
break
case"restaurant":p.cau(d,e)
break
case"tools":p.caF(d,e)
break
case"wallet":p.caI(d,e)
break
case"concrete":p.ca_(d,e)
break
case"blueprint":p.c9S(d,e)
break
default:p.aYi(d,e)}},
lI(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.L()
w.sau(new A.a6(B.ax,B.aC,B.x,f,null,null).aw(0,v))
d.aX(v,w)},
lN(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.geb()/2-h
$.W()
w=A.L()
w.b=B.af
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c4(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xm(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.geb()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Af(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aYi(d,e){var w,v=this
v.lI(d,e,D.d1w)
w=v.c
v.lN(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lN(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bI9(d,e,B.hS,w)
v.xm(d,e,B.c.j(0.7),6,8)},
bI9(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c4(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cac(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lI(d,e,D.caw)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cRV[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lN(d,e,B.c.j(0.35),w,16)
j.xm(d,e,B.iM,5,12)},
c9U(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lI(d,e,D.caD)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.geb()
$.W()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ag(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ih(g,g,g,g,g,B.a5,B.ci,g,B.eq,B.cg)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cVu[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.es(r,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eR()
p.a6(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.caF[o]
l=B.k3.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.es(m,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eR()
p.a6(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.lN(d,e,B.c.j(0.35),w*1.5,14)
h.lN(d,e,B.ex.j(0.55),-v*3.141592653589793*2,8)
h.lN(d,e,B.zR.j(0.4),r*2.8,22)
h.xm(d,e,B.p3,8,10)
h.Af(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cak(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lI(d,e,X.att)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.by(new A.a9(20,q,u,q+10),B.i1)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fY,B.o4,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.ew(p),n)
n.delete()}m.lN(d,e,B.fY.j(0.35),w,15)
m.Af(d,e,8)},
caf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lI(d,e,D.cSp)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lN(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.xm(d,e,B.qh,4,14)},
cat(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lI(d,e,D.cI2)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.af
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xm(d,e,B.oc,6,12)
l.lN(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
caC(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lI(d,e,D.cnX)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.by(new A.a9(q,14,q+u,22),B.hN)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f5,B.bJ,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.ew(q),o)
o.delete()}n.lN(d,e,B.c.j(0.3),w,16)
n.Af(d,e,8)
n.xm(d,e,B.uv,5,13)},
cao(d,e){var w,v,u,t,s,r,q,p,o
this.lI(d,e,D.cNB)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.by(new A.a9(q,p,q+8,p+(18+r*22)),B.ha)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.ii,B.dx,B.bJ,B.ew][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.ew(p),o)
o.delete()}this.lN(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cav(d,e){var w,v,u,t,s,r,q,p,o
this.lI(d,e,D.cLd)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xm(d,e,B.cm,7,11)},
caJ(d,e){var w,v,u,t,s,r,q,p,o,n
this.lI(d,e,D.cqB)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.by(new A.a9(p,o,p+(t-r*8),o+16),B.i1)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cm,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.ew(o),n)
n.delete()}this.lN(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
caH(d,e){var w,v,u,t,s,r,q,p,o
this.lI(d,e,D.d6n)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.by(new A.a9(r,q,r+28,q+8),B.i1)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.ew(q),o)
o.delete()}this.Af(d,e,6)},
ca6(d,e){var w,v,u,t,s,r,q,p,o,n
this.lI(d,e,D.cR4)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.L()
s.r=B.lr.j(0.75).gp(0)
d.ag(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.fZ.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lN(d,e,B.lr.j(0.35),w,14)},
cau(d,e){var w,v,u,t,s,r,q,p,o=this
o.lI(d,e,D.cTn)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ct(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c4(r),p)
p.delete()}o.xm(d,e,B.qh,5,16)
o.Af(d,e,7)},
caF(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lI(d,e,D.d44)
w=m.c
v=w*3.141592653589793
m.lN(d,e,B.o4.j(0.55),v*3,10)
m.lN(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.o4.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
caI(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lI(d,e,D.d6T)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.by(new A.a9(p,o,p+36,o+22),B.hN)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iM,B.lr,q).gp(0)
n=p.H()
s.drawRRect(A.ew(o),n)
n.delete()}m.Af(d,e,9)
m.lN(d,e,B.c.j(0.4),w*2.2,12)},
ca_(d,e){var w,v,u,t,s,r,q,p,o,n
this.lI(d,e,D.cY5)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.W()
s=A.L()
s.b=B.af
s.c=5
s.r=B.c.j(0.45).gp(0)
d.ff(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bX.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c9S(d,e){var w,v,u,t,s,r,q,p
this.lI(d,e,D.cUh)
$.W()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.W()
u=A.L()
u.r=B.dx.j(0.45).gp(0)
d.aX(new A.a9(0,p,0+v,p+6),u)
this.lN(d,e,B.kW.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aqI.prototype={
YM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aNZ(),$async$YM)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a78(s),$async$YM)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$YM,v)},
ae2(d){return this.ccZ(d)},
ccZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$ae2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hYX(d),$async$ae2)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ae2,v)},
B(d){var w,v,u,t=null,s=A.M(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jk:B.iK
w=x.p
v=A.a([C.aOm(!0,B.q9,1/0,B.pp,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bX(new A.bI(B.b0,t,t,new A.C(B.uK,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.aul,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a6(B.b0,B.b4,B.x,u,t,t),B.n),B.be))}v.push(A.ao(8,A.z(A.a([A.D(A.dp(D.bCl,D.f0t,new C.cdb(this,d),A.bk(B.aT,t,t,t,B.c,t,B.jM,t,t,t,t,B.c7)),1),B.ab,A.D(A.ez(D.bKt,D.fev,this.gc45(),A.dd(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jM,t,t,D.aUC,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aF(!1,B.a1,!0,B.q9,new A.an(B.W,t,B.b_,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ae),t)}}
C.aJt.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
C.aRd.prototype={}
C.aRc.prototype={}
C.aPi.prototype={}
C.XH.prototype={
T(){return new C.awO()}}
C.awO.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b1,B.aN)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jb(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eIq)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).N(new C.aRd(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=m?B.dU:B.c,k=A.m(20),j=A.p(n,D.bK8,B.f,n,n,new A.o(B.aT.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.z(A.a([j,B.bd,i,A.aH(n,n,n,n,A.V(B.cv,m?B.bq:B.bp,n,n,n,n),n,n,n,new C.cWr(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,11,n,n,B.cs,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h0s(new C.cWs(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jk:B.iK
r=A.m(12)
q=A.m(12)
p=m?B.dY:B.bX
t=A.aL(n,B.T,!0,n,!0,B.q,n,A.aM(),u,n,n,n,n,n,2,A.bo(n,new A.b4(4,r,B.df),n,n,n,n,n,n,!0,new A.b4(4,q,new A.aA(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cWt(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,Z.I_,n,n,n,n)
u=m?B.aP:B.aA
m=m?B.dY:B.bX
return A.eD(n,l,new A.cW(B.ln,A.cd(A.v(A.a([j,B.aO,i,B.au,w,B.P,v,B.aO,t,B.bu,A.z(A.a([A.D(A.dW(B.dd,new C.cWu(d),A.dd(n,n,n,n,n,n,n,n,n,u,n,n,B.ce,n,new A.b7(A.m(12),B.Y),new A.aA(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bJ(D.feK,o.ga0K(),A.bk(B.aT,n,n,n,B.c,n,B.ce,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.y,n,B.At,n,n,B.ai),n),n,n,n,U.Au,B.d_,n,new A.b7(k,B.Y),n)}}
C.XG.prototype={
T(){return new C.awN()}}
C.awN.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jb(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eG7)
return}v=this.c
v.toString
A.a4(v,!1).N(new C.aRc(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.M(d).ax.a===B.H,o=p?B.dU:B.c,n=A.m(20),m=A.p(q,D.bGL,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bp,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.z(A.a([m,B.bd,l,A.aH(q,q,q,q,A.V(B.cv,p?B.bq:B.bp,q,q,q,q),q,q,q,new C.cWn(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aT.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aT.j(0.25),B.r,1)
u=A.V(B.ahH,B.aT.j(0.9),q,q,q,18)
l=A.p(q,A.z(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.by,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jk:B.iK
t=A.m(12)
s=A.m(12)
r=p?B.dY:B.bX
v=A.aL(q,B.T,!0,q,!0,B.q,q,A.aM(),w,q,q,q,q,q,2,A.bo(q,new A.b4(4,t,B.df),q,q,q,q,q,q,!0,new A.b4(4,s,new A.aA(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ag,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cWo(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kn,q,q,q,q)
w=p?B.aP:B.aA
p=p?B.dY:B.bX
return A.eD(q,o,new A.cW(B.ln,A.cd(A.v(A.a([m,B.aO,l,B.az,v,B.bu,A.z(A.a([A.D(A.dW(B.dd,new C.cWp(d),A.dd(q,q,q,q,q,q,q,q,q,w,q,q,B.ce,q,new A.b7(A.m(12),B.Y),new A.aA(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bJ(D.flc,this.ga0K(),A.bk(B.bT,q,q,q,B.c,q,B.ce,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.At,q,q,B.ai),q),q,q,q,U.Au,B.d_,q,new A.b7(n,B.Y),q)}}
C.Xe.prototype={
T(){return new C.avx()}}
C.avx.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aQ()
v.e=new A.ar(new A.bb("1",B.b1,B.aN),w)
v.f!==$&&A.aQ()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aQ()
v.r=new A.ar(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.S$=w
u.P$=0
u=v.f
u===$&&A.c()
u.S$=w
u.P$=0
u=v.r
u===$&&A.c()
u.S$=w
u.P$=0
v.a2()},
gIx(){var w,v=this.e
v===$&&A.c()
w=A.d3(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaha(){var w=this.f
w===$&&A.c()
w=A.d3(B.a.i(w.a.a))
return w==null?0:w},
gb04(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aLB(d){var w,v=B.k.D(this.gIx()+d,0.25,999999),u=B.k.jJ(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saV(0,u)
this.m(new C.cu0())},
avq(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aT,w,w,w,20):w,u=d.a,t=u?B.jk:B.iK,s=A.m(14),r=A.m(14)
u=u?B.dY:B.bX
return A.bo(w,new A.b4(4,s,B.df),w,B.by,w,w,w,w,!0,new A.b4(4,r,new A.aA(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a8G),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c46(d,e,f){return this.avq(d,e,f,null)},
Jb(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaha()<=0){s.c.I(x.q).f.R(D.eKh)
return}r=s.c
r.toString
v=s.gIx()
u=s.gaha()
t=s.gb04()
A.a4(r,!1).N(new C.aPi(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tp(n),l=n?B.dU:B.c,k=A.m(24),j=x.O,i=A.a([B.aT.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bAi,B.f,o,o,new A.o(o,o,A.I(B.aT.j(0.35),B.r,1),h,o,new A.a6(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.cs,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.z(A.a([i,B.bd,h,A.aH(o,o,o,o,A.V(B.cv,n?B.bq:B.bp,o,o,o,o),o,o,o,new C.cu6(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.T,!0,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.avq(m,"Item name (optional)","Lumber, paint, labor\u2026",B.My),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,Z.I_,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jk:B.iK
t=A.m(14)
s=A.I(n?B.dY:B.bX,B.r,1)
r=A.aH(o,o,o,o,A.V(B.xJ,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cu7(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),q,o,o,o,o,o,2,D.bM_,B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dR,o,o,o,1,o,o,!1,"\u2022",o,new C.cu8(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.z(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.V(B.hv,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cu9(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.z(A.a([u,B.aw,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),t,o,o,o,o,o,2,p.avq(m,"Amount","0.00",B.hW),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dR,o,o,o,1,o,o,!1,"\u2022",o,new C.cua(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.J(D.cO2,new C.cub(p,m),t),t.k("aj.E"))
i=A.a([i,B.bu,v,B.az,h,B.P,s,B.ac,A.c5(B.bG,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.c46(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cuc(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kn,o,o,o,o)],w))}i.push(B.aO)
h=B.aT.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aT.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIx()===B.k.jJ(p.gIx())?B.k.O(p.gIx()):p.gIx()
s=p.gb04()
r=A.Aa(p.gaha())
i.push(A.p(o,A.z(A.a([A.D(A.v(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bAH(p.gIx()*p.gaha(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a6(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.j6,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.dY:B.bX
h=A.dd(o,o,o,o,o,o,o,o,o,o,o,o,B.ce,o,new A.b7(j,B.Y),new A.aA(h,1,B.r,-1),o,o,o,o)
i.push(A.z(A.a([A.D(A.dW(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cud(d),h),1),B.aw,A.D(A.dp(D.alb,D.fho,p.ga0K(),A.bk(B.aT,o,o,0,B.c,o,B.ce,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eD(o,l,new A.cW(T.a93,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.q,o,B.y,o,A8.qB,o,o,B.ai),o),o,o,o,B.Lc,B.d_,o,new A.b7(k,B.Y),o)}}
C.a_L.prototype={
T(){return new C.bth()}}
C.bth.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.ar(new A.bb(w,B.b1,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?B.dU:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jk:B.iK
v=A.aL(s,B.T,!0,s,!0,B.q,s,A.aM(),w,s,s,s,s,s,2,A.bo(s,new A.b4(4,A.m(12),B.df),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f1z(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dW(B.dd,new C.f1A(d),s),1)
r=A.bk(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eD(s,q,new A.C(B.At,A.v(A.a([o,B.az,v,B.aO,A.z(A.a([u,B.aw,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f1B(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d_,s,new A.b7(p,B.Y),s)}}
C.aa2.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.EP.prototype={
T(){return new C.btf(null,null)}}
C.btf.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bkj,null,1,null,v)
w.cF(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.btq()},
gbuN(){switch(this.a.r.a){case 1:return A.a([B.aT,B.bT,B.aZ],x.O)
case 2:return A.a([B.bs,B.aT,B.aZ],x.O)
case 3:return A.a([B.aW,B.c8,B.jF],x.O)
case 4:return A.a([B.ht,B.bT,B.f6],x.O)
case 0:return A.a([B.aT,B.bT,B.aZ],x.O)}},
B(d){var w=A.M(d),v=this.d
v===$&&A.c()
return new A.eq(A.c6(v,new C.f1x(this,new C.tp(w.ax.a===B.H)),null),null)}}
C.avq.prototype={
T(){return new C.btg(null,null)}}
C.btg.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mN,null,1,null,v)
w.cF(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.btr()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f1y(this),null)}}
C.bte.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aY(w,w))
u=new A.aP($.W().r,B.aq,null,null,A.a([],x.v))
u.E(new A.iS(v))
w=A.L()
w.b=B.af
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aC(v,w)
w=A.L()
w.b=B.af
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aN(u,w)
w=A.wG(u)
t=A.a([],x.f5)
w=new A.ve(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jO('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GF(w,r)
w.jb()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aOV(d,q,r,o,0,0.2,4.2,0.92)
p.aOV(d,q,r,s,0.52,0.11,3.2,0.58)}},
aOV(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hlS(e.a.a,e,t,t+f*i,!0),r=A.bz3(s.gbI().a.getBounds())
$.W()
w=A.L()
w.b=B.af
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a6(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Gc,null).aw(0,r))
d.aN(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aLC.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aLD.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.tp.prototype={}
C.aqH.prototype={
T(){return new C.aD3()},
gdV(){return this.c}}
C.aD3.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.aeT()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Ko(w,v)
this.a2()},
aeT(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aeT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzb(t.c,t.d.a),$async$aeT)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eBy(u,s))
return A.h(null,v)}})
return A.i($async$aeT,v)},
OP(){var w=0,v=A.j(x.H),u=this,t,s
var $async$OP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eBp(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Ko(t,s),$async$OP)
case 2:if(u.c!=null)u.m(new C.eBq(u))
return A.h(null,v)}})
return A.i($async$OP,v)},
Pk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.M(p)
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.eBw(t,new C.tp(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$Pk)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a78(q),$async$Pk)
case 6:case 5:t.m(new C.eBx(t,r))
w=7
return A.b(t.OP(),$async$Pk)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pk,v)},
Uo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Uo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hYI(r),$async$Uo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eBk(t,new C.qE(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.OP(),$async$Uo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Uo,v)},
c96(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hdT(t,new C.eBo(u),w,v)},
a95(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bT(new A.aA(v,2.5,B.r,-1),B.Y,B.Y,new A.aA(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aUo,w,w,B.n),w,22,w,w,w,w,w,22)},
a8b(d){return this.bGu(d)},
bGu(d){var w=0,v=A.j(x.H),u=this
var $async$a8b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eBn(u,d))
w=2
return A.b(u.OP(),$async$a8b)
case 2:return A.h(null,v)}})
return A.i($async$a8b,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.M(a2).ax.a===B.H,e=f?B.bW:B.iH,d=A.m(8),a0=A.V(O.YC,f?B.bq:B.bp,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.EG,A.z(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bp,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eBz(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.q,A.a([A.bv(A.m(22),C.aOm(!0,A.m(22),1/0,B.pp,g,d,1/0),B.ap),A.ao(10,A.dp(D.bEQ,D.fjw,h.gaZ1(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h4,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aT.j(f?0.5:0.38),B.eR,22),new A.ac(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.W,g,B.b_,B.q,A.a([C.aOm(!0,A.m(16),1/0,B.LZ,g,r.c,1/0),A.bX(g,new A.o(g,g,g,g,g,new A.a6(B.b0,B.b4,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.be),A.ao(g,h.a95(!0),g,g,8,g,8,g),A.ao(g,A.cry(h.a95(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cry(h.a95(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cry(h.a95(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bAS,D.fdw,h.gaZ1(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h4,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bMN,B.n),g,g,g,g,B.m7,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b3C,B.no,B.h1],u):A.a([B.aZ,B.aT,B.bT],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aT.j(f?0.45:0.35),B.eR,24)],t)
r=A.m(22)
p=A.ao(g,A.V(B.jr,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.z(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h2,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.az,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ao,C.bAH(h.d.gwp(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cs,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.h0.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aW.j(0.28),B.cI,14)],t)
j=B.aW.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.an(B.W,g,B.a9,B.q,A.a([p,new A.C(D.boX,A.z(A.a([o,B.aw,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ex(new A.C(Ac.X0,A.v(A.a([A.p(g,D.akL,B.f,g,g,new A.o(j,g,A.I(B.aW.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cj,g,g,g),B.fU,D.f37],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc95(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ae)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a6(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bu,A.z(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b2,A.dp(Af.a_j,D.f13,h.gbvf(),A.bk(B.aT,g,g,g,B.c,g,B.j5,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dU:B.c
v=A.m(14)
u=A.I(f?B.dY:B.bX,B.r,1)
t=A.V(B.YX,f?B.bq:B.bp,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.ao,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bp,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.th,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eBA(h,new C.tp(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.Ah,A.av(A.mz(g,f?B.bq:B.bp,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cc(g,e,A.bq(!0,A.v(A.a([new A.C(B.Am,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.y,g,E.x7,g,g,B.ai),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),g,!1,!1,g,g)},
byO(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dU:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cI,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aX8,u,u,u,u,u,u,u,5),l=B.aT.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hH:B.h6,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcNy()
v=A.Aa(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bp,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b9,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aT.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bAH(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a6(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h4,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.H7(A.z(A.a([m,A.D(new A.C(B.aeZ,A.z(A.a([l,B.bd,t,B.ab,k,A.aH(u,u,u,u,A.V(B.cv,(r?B.bq:B.bp).j(0.75),u,u,u,20),u,u,u,new C.eBl(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.ap),B.f,u,D.aW_,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d8,u,u,u,u)}}
C.ac3.prototype={
DC(d){return this.bHM(d)},
bHM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oQ(d,o,!1),$async$DC)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).N(null)
w=4
return A.b(A.bN(A7.Af,null,x.H),$async$DC)
case 4:s=t.d
w=5
return A.b(C.fx5(!0,o,s),$async$DC)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FH(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$DC)
case 6:p=f
w=7
return A.b(A.oP(o,!1),$async$DC)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DC,v)},
YN(d){return this.cp1(d)},
cp1(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$YN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oQ(d,s,!1),$async$YN)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).N(null)
A.ht(d,new C.aqB(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oP(s,!1),$async$YN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YN,v)},
OQ(d){return this.clb(d)},
clb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).N(null)
w=3
return A.b(A.ht(d,D.aDz,!0,"NgmyWorksheetProjectScan",x.N),$async$OQ)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bAI(s),$async$OQ)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eJq)
w=1
break}q=C.fRE(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$OQ)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
YO(d){return this.cwK(d)},
cwK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).N(null)
w=3
return A.b(C.bAf(),$async$YO)
case 3:s=f
if(s==null){w=1
break}r=C.fRE(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$YO)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YO,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=new C.tp(u),s=w.d.d.length,r=u?B.dU:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.jU,36)],x.V),o=x.p
return A.bq(!0,new A.C(B.uS,A.p(v,A.v(A.a([w.cnD(d,t,s),new A.C(D.bol,A.v(A.a([w.b0Y(t,"QR restore"),B.S,A.z(A.a([w.aX2(t,!0,B.ja,B.aW,B.aW,new C.eBC(w,d),"Show to scan","QR code"),B.aw,w.avr(t,B.iO,B.b3,B.bz,new C.eBD(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b0Y(t,"Backup files"),B.S,A.z(A.a([w.avr(t,B.hx,B.aT,B.bT,new C.eBE(w,d),"Full copy","Backup file"),B.aw,w.avr(t,M.xQ,B.aL,B.aM,new C.eBF(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ah,!0,!0)},
cnD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eW,B.cY,B.fs],k):A.a([B.aZ,B.aT,B.bT],k)
w=A.ao(l,A.V(B.tz,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kA,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cI,12)],x.V)
r=this.d
s=A.p(l,C.aOm(!0,A.m(13),64,D.bw7,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aNU,l,l,l)
r=C.bAH(r.gwp(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.a9,B.q,A.a([w,new A.C(D.boJ,A.v(A.a([v,A.z(A.a([s,B.eA,A.D(A.v(A.a([u,B.au,t,B.P,A.z(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fG,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.V(B.cv,B.c.j(0.85),l,l,l,l),l,l,l,new C.eBB(d),l,l,l,A.nl(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aLg,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a6(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b0Y(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aT,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.z(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bp,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aX2(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.adD:B.aP
if(e)w=B.aW.j(o?0.45:0.35)
else{w=o?B.dY:B.bX
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aW.j(0.12),B.cI,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qC,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ex(new A.C(E.X1,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bp,r,r,r,r,r,r,r,r,11,r,r,B.cs,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae),1)},
avr(d,e,f,g,h,i,j){return this.aX2(d,!1,e,f,g,h,i,j)}}
C.aqB.prototype={
T(){return new C.biF()}}
C.biF.prototype={
a_(){this.a1()
this.acM()},
acM(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$acM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bAJ(p.c,p.d),$async$acM)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eBf(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eBg(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=g?B.zQ:B.iH,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.V(B.ez,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eBh(d),h,h,h,h,h,h)
u=x.p
e=A.z(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.yU],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eW,B.cY,B.fs],s):A.a([B.aZ,B.aT,B.bT],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aT.j(g?0.4:0.3),B.eR,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dI,B.L,h,h)
p=C.bAH(p.gwp(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ao,A.z(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fG,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a6(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Xm,h,h,1/0)
t=g?D.bcq:B.c
q=A.m(24)
p=A.I(w?B.aW.j(0.4):B.aT.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a5P,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dZ6)
else{m=A.m(20)
l=A.I(B.aK,B.r,1)
o.push(A.p(h,A.pv(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c0,h,h,h))}}o.push(B.aO)
n=w?B.aW:B.aT
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aW:B.aT).j(0.35),B.r,1)
k=w?B.Mg:B.MN
k=A.V(k,w?B.aW:B.aT,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.z(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.j5,h,h,h))
return A.cc(h,f,A.bq(!0,A.v(A.a([new A.C(A2.Lq,e,h),A.D(A.cd(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tg,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.y,h,E.ag6,h,h,B.ai),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),h,!1,!1,h,h)}}
C.aqG.prototype={
T(){return new C.aD2(A.yH(B.KH,B.nh,B.tD))}}
C.aD2.prototype={
q(){this.d.q()
this.a2()},
aJD(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iK(w,d)},
c4X(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hWJ(t)
if(s!=null){this.aJD(s)
return}r=C.h5_(t)
if(r!=null)q=A.dr(r,p,0)
else q=!1
if(q){this.aJD(B.a.i(B.a.b_(r,B.a.cG(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aH(t,t,t,t,A.V(u.f?B.qJ:A_.Mn,t,t,t,t,t),t,t,t,new C.eBj(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.zQ,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fdp,t,t,t,1,t,!0),q=A.yG(u.d,B.bQ,u.gc4W()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aT,B.r,3),p,A.a([new A.ac(2,B.G,B.aT.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cc(r,B.w,new A.an(B.W,t,B.b_,B.q,A.a([q,p,A.ao(32,A.p(t,D.fcf,B.f,t,t,new A.o(w,t,A.I(B.aT.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.j6,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aHP.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.N7.prototype={
T(){return new C.aD4(D.a7Z,A.a([],x.D))},
bp(){return this.r.$0()},
gdV(){return this.c}}
C.aD4.prototype={
gcuO(){return J.bBR(this.e,0,new C.eC1())},
a_(){this.a1()
$.aU.c0$.push(this)
this.va()},
q(){$.aU.hz(this)
this.a2()},
iI(d){if(d===B.fq)this.va()},
va(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$va=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ce(q.a.c).cL(0,B.jL),$async$va)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eBY(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eBZ(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$va,v)},
H2(d){return this.bEF(d)},
bEE(){return this.H2(null)},
bEF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$H2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hYK(l,d),$async$H2)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l9(l,r,q,D.cYi,new A.Q(Date.now(),0,!1))
w=4
return A.b(C.Ko(t.a.c,p),$async$H2)
case 4:o=f
w=5
return A.b(t.va(),$async$H2)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eGB)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eIk)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DG(m)
case 1:return A.h(u,v)}})
return A.i($async$H2,v)},
DG(d){return this.c8S(d)},
c8S(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$DG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.ht(s,new C.aqH(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$DG)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Ko(u.a.c,t),$async$DG)
case 5:case 4:w=6
return A.b(u.va(),$async$DG)
case 6:return A.h(null,v)}})
return A.i($async$DG,v)},
uY(d){return this.bU7(d)},
bU7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bAf(),$async$uY)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.ht(r,D.aDz,!0,"NgmyWorksheetProjectScan",x.N),$async$uY)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bAI(q),$async$uY)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.I(x.q).f
r.R(A.b2(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fRE(s)
w=15
return A.b(C.Ko(t.a.c,p),$async$uY)
case 15:o=f
w=16
return A.b(t.va(),$async$uY)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eIp)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DG(p)
case 1:return A.h(u,v)}})
return A.i($async$uY,v)},
MJ(d){return this.bDl(d)},
bDl(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$MJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.c9(null,null,!0,null,new C.eBJ(d),s,null,!0,!0,x.y),$async$MJ)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oq(t.a.c,A.a([],x.D)),$async$MJ)
case 6:w=7
return A.b(t.va(),$async$MJ)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eGG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$MJ,v)},
c94(d){var w=this.c
w.toString
A.c_(B.K,null,new C.eBS(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b1z(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jk
else w=B.c
v=A.m(16)
u=A.I(p?B.dY:B.bX,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bp,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uR,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae)},
Zh(d,e){return this.c8T(d,e)},
c8T(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c_(B.K,null,new C.eBN(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Zh)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hdT(r,new C.eBO(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.ML(d,e),$async$Zh)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Zh,v)},
aZE(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aE
else t=h.a?B.aP:B.aA
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bp,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.As,A.z(A.a([s,B.bd,t,A.V(B.ee,w?B.bq:B.bp,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ae)},
cfH(d,e,f,g,h,i){return this.aZE(!1,d,e,f,g,h,i)},
ML(d,e){return this.bDv(d,e)},
bDv(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ML=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kU(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$ML)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.byY(t.a.c,d.a),$async$ML)
case 6:w=7
return A.b(t.va(),$async$ML)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$ML,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=new C.tp(o),m=o?B.bW:B.iH
if(q.f)o=D.b1F
else{w=q.by_(n)
v=q.bTe(n)
u=q.gbv9()
if(o)t=B.jk
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aO,new C.EP(A.p(p,A.z(A.a([q.ayR(Q.LY,"Projects",n,D.a7Z),q.ayR(B.v1,"Cashier",n,D.aRS),q.ayR(B.F_,"Family Tree",n,D.fGA)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bu],r)
w=q.d
if(w===D.a7Z){w=J.ab(q.e)
B.d.v(u,A.a([A.z(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aA,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b2,new C.avq(q.gaNM(),p)],r),B.m,p,B.e,B.j,0,p,p),B.az,q.cfJ(n)],r))}else{o=q.a
if(w===D.aRS)u.push(new C.amK(o.c,n,p))
else{w=q.r
u.push(new C.anQ(o.c,o.d,o.e,o.f,new C.eC4(q),new C.eC5(q),new A.cz(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.y,p,A9.Li,p,p,B.ai)}return A.cc(p,m,A.bq(!0,o,!0,!1,B.ah,!0,!0),p,!1,!1,p,p)},
by_(d){var w=null,v=A.m(8),u=d.a,t=A.V(O.YC,u?B.bq:B.bp,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kB,A.z(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bp,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eBG(this),w,w,w,w,w,w,w)},
gbv9(){switch(this.d.a){case 0:return D.a7h
case 1:return D.fxq
case 2:return D.a7i}},
bTe(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aT.j(0.35),B.cw,16)],x.V),t=x.p,s=A.z(A.a([A.p(w,D.bGB,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bsW,A.aF(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bE9,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eBK(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ae)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.EP(A.p(w,A.v(A.a([new A.C(E.X7,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.Aa(this.gcuO()),w,w,w,w,w,w,D.eYA,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uQ,B.j6,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aT,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ah,1,D.fxp,w)},
ayR(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aT:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aT.j(0.42),B.cI,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bp
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bp
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.df(u,A.z(A.a([w,B.eb,new A.dl(1,B.ch,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.n),B.iq,u,u,u,B.Lm,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eC0(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ae),1)},
cfJ(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dU:B.c
u=A.m(15)
t=A.p(p,D.bEe,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aT.j(0.5),B.eR,28)],x.V),D.bPa,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.EP(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bp,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e_,A.z(A.a([A.D(q.aPf(B.iO,"Scan QR",new C.eBV(q),d),1),B.aw,A.D(q.aPf(M.xQ,"Upload file",new C.eBW(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.az,A.bJ(D.fn0,q.gaNM(),A.bk(B.aT,p,p,p,B.c,B.fJ,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bpO,1.05,D.a7h,p)}w=J.b6(q.e,new C.eBX(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.EP(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a7h,p)},
aPf(d,e,f,g){var w=null,v=B.aT.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aT.j(0.45),B.r,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.V(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eX2,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.aeR,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ae)},
cfI(d,e){var w,v,u=null,t=e.a,s=t?B.dU:B.c,r=A.m(14),q=A.I(t?B.dY:B.bX,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bp
n=A.bv(B.U0,new A.fF(1.7777777777777777,C.aOm(!0,B.fr,1/0,Q.LY,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.Aa(d.gwp()),u,u,u,u,u,u,D.eVc,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.by,A.z(A.a([v,A.aH(u,u,u,u,A.V(Aa.MB,t?B.bq:B.bp,u,u,u,u),u,u,u,new C.eBT(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eBU(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ae),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bv2.prototype={}
C.qE.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcNy(){var w,v,u,t,s=this.c
if(s===B.k.jJ(s))w=B.o.u(B.k.O(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l9.prototype={
gwp(){return B.d.cI(this.d,0,new C.cts())},
ad(){var w=this,v=w.d,u=A.T(v).k("J<1,a3<n,@>>")
v=A.B(new A.J(v,new C.ctr(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
b8u(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l9(w.a,w.b,v,u,w.e)},
b8b(d){return this.b8u(d,null)},
Rv(d){return this.b8u(null,d)}}
C.GO.prototype={
a4(){return"FamilyGender."+this.b}}
C.hT.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h9I(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aBs(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hT(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aj6.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kr.prototype={
gamy(){var w=this.f
return new A.a1(w,new C.bL9(),A.T(w).k("a1<1>")).gM(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("J<1,a3<n,@>>")
v=A.B(new A.J(v,new C.bL8(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hPc(w.y)],x.N,x.z)},
y3(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kr(w.a,v,u,t,s,r,w.r,q,p,o)},
b8t(d,e){var w=null
return this.y3(w,w,d,e,w,w,w,w)},
cDk(d,e,f,g,h,i,j){return this.y3(d,e,f,g,h,i,j,null)},
aBx(d,e){var w=null
return this.y3(w,w,w,d,w,w,e,w)},
cBP(d){var w=null
return this.y3(w,w,w,w,w,w,d,w)},
cCc(d){var w=null
return this.y3(w,w,w,w,w,w,w,d)},
aBj(d){var w=null
return this.y3(w,w,w,w,d,w,w,w)},
cCR(d,e,f){var w=null
return this.y3(w,d,w,e,w,w,f,w)},
cBC(d){var w=null
return this.y3(w,w,d,w,w,w,w,w)},
cCp(d,e){var w=null
return this.y3(d,w,w,w,w,e,w,w)}}
C.ctt.prototype={
a4(){return"WrapAlignment."+this.b}}
C.ctu.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aF7.prototype={}
C.b6s.prototype={
bx(d){this.a=d.a
this.b=d.b},
dn(d){var w=new C.b6s()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b6r.prototype={
gvK(){return!0},
gF9(){return this.z.b<this.b.length},
aQQ(d){switch(0){case 0:return d.a.c}},
aQx(d){switch(0){case 0:return d.a.d}},
bMM(d,e){switch(0){case 0:return new A.hF(d,e)}},
bMa(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fW(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iz(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Gz(b4)
switch(0){case 0:v=b5.b
u=new A.ko(0,v,0,1/0)
t=w===B.S1
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fG(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fW(b4,u,!0)
f=b1.aQQ(g)
f.toString
e=b1.aQx(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aF7(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aF7(k,j,i))}d=s.length
switch(0){case 0:q=b5.cs(new A.hF(m,l))
a0=q.a
a1=q.b
b1.a=new A.iz(0,0,a0,a1)
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
for(q=B.d.fG(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aQQ(g)
e=b1.aQx(g)
e.toString
a9=b1.bMa(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bMM(a6,a3+a9)
b0=g.a
g.a=new A.iz(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fT(d){var w,v,u,t,s,r=this
r.l0(d)
w=d.b
w.hV()
v=A.dk()
u=r.a
v.e0(u.a,u.b,0,1)
w.ov(0,v)
for(u=r.z,u=B.d.dl(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fT(d)
w.mW(0)},
FF(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hV(){return this.z}}
C.bti.prototype={}
var z=a.updateTypes(["ax<~>()","R(hT)","R(kr)","~()","R(mZ)","a3<n,@>(kr)","H(kr,kr)","n(hT)","kr(a3<@,@>)","R(l9)","R(tU)","mZ(a3<@,@>)","tU()","H(l9,l9)","hT(a3<@,@>)","a3<n,@>(hT)","R(qE)","ax<~>(l9)","eN<n?>(hT)","H(hT,hT)","n?(hT)","a3<n,@>(mZ)","YI(X)","n(n)","abJ(X)","r(o1)","H(mZ,mZ)","hT(hT)","cK(bu<n,F1>)","cK(Jb)","~(hT)","H?(hT)","hT()","ak<hT>()","R(tT)","R(Jb)","C(hT)","~(GO)","R(adf)","r(GO,n,a_)","Y6(X)","bu<n,ak<a3<n,@>>>(n,ak<mZ>)","~(H)","+count,id,name(H,n,n)(kr)","kr(kr)","Z2(X)","Z3(X)","R(lp)","lp()","n(kr)","a_L(X)","XH(X)","XG(X)","Y4(X)","Y8(X)","r(qE)","ac3(X)","~(lN)","ax<~>([n?])","O(O,l9)","r(l9)","O(O,qE)","a3<n,@>(qE)","qE(a3<@,@>)","XF(X)","RD(X)","cn(GN)","l9(a3<@,@>)","tT()","n(l9)","a3<n,@>(l9)","n(Q)","H(hT)","kr(a3<n,@>)","Xe(X)"])
C.fpK.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.fpJ.prototype={
bhl(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qx(s,d,B.hj,E.El),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.S(r!=null&&A.Kb(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bhl(d)},
$S:287}
C.fpL.prototype={
$1(d){return d.b},
$S:116}
C.fyR.prototype={
$1(d){var w=null
return A.eD(w,B.K,new F.Or(this.a,this.b,w),w,w,0,B.X2,B.d_,w,w,w)},
$S:47}
C.ffi.prototype={
$1(d){return d!=null},
$S:224}
C.ffj.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:224}
C.ffo.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:161}
C.fns.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f7(d,w,w,w,A.h1(w,B.r8,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.uX
return new A.nw(D.bln,A.a8j(A.a([new A.fN(130,w,v),new A.yq(1,B.ET,A.f7(e,w,w,w,A.h1(w,g==null?D.e0n:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wN,B.lc))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1888}
C.fnr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.v5(999)
f=A.wz(A.lk(h,A.f7("Cashier",h,h,h,A.h1(h,D.yH,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.kp(D.e0e,h,f,B.hz,h),h,h,D.blQ,h))
w=A.wz(A.f7("Debt receipt",h,h,h,A.h1(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wz(A.f7(C.wj(new A.Q(Date.now(),0,!1),!0),h,h,h,D.a5Z,h))
u=A.v5(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f7(s,h,h,h,A.h1(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.f7("Person who owes",h,h,h,D.a5Z,h)
q=A.v5(10)
p=x.C
u=A.lk(h,A.yl(A.a([s,new A.fN(h,2,h),r,new A.fN(h,10,h),A.lk(h,A.yl(A.a([A.f7("Amount owed",h,h,h,D.a5Z,h),new A.fN(h,2,h),A.f7(A.Aa(t.c),h,h,h,A.h1(h,D.yH,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qv,B.lc),h,new A.kp(B.oG,h,q,B.hz,h),h,h,D.bl3,1/0)],p),B.qv,B.lc),h,new A.kp(E.aEO,h,u,B.hz,h),h,h,D.bmU,1/0)
q=new A.ne(D.e0h,0.9,B.kt)
r=A.v5(12)
s=i.c
o=s.$2("Original due",C.wj(t.r,!1))
n=s.$2("Current due",C.wj(t.f,!1))
m=i.d
l=new A.ne(m,1.1,B.kt)
k=A.v5(8)
j=i.a
k=A.a([o,n,new A.fN(h,6,h),A.lk(h,A.wz(A.f7(t.gaI9(),h,h,h,A.h1(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.kp(h,new A.pg(l,l,l,l),k,B.hz,h),h,h,D.blY,1/0),new A.fN(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yH))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yH))
else{n=A.f7("Missed days ("+n+")",h,h,h,A.h1(h,B.r8,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Rc>")
o=A.B(new A.J(o,new C.fnq(),m),m.k("aj.E"))
B.d.v(k,A.a([new A.fN(h,4,h),n,new A.fN(h,6,h),new C.b6r(5,5,new C.b6s(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fN(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fN(h,8,h),w,new A.fN(h,3,h),v,new A.fN(h,16,h),u,new A.fN(h,10,h),A.lk(h,A.yl(k,B.wN,B.lc),h,new A.kp(h,new A.pg(q,q,q,q),r,B.hz,h),h,h,B.af2,1/0)],p)
w=j.a
if(w!=null){v=new A.ne(B.Hk,1,B.kt)
B.d.v(f,A.a([new A.fN(h,16,h),A.f7("Debtor signature",h,h,h,A.h1(h,B.r8,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fN(h,6,h),A.lk(h,new A.H1(w,B.Ua,h,h),h,new A.kp(h,new A.pg(v,v,v,v),A.v5(6),B.hz,h),82,h,B.Lo,1/0)],p))}f.push(new A.fN(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f7(w,h,h,h,D.eOh,h))
f.push(new A.fN(h,18,h))
f.push(A.wz(A.f7("NGMY.ORG",h,h,h,A.h1(h,D.yH,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:417}
C.fnq.prototype={
$1(d){var w=null,v=new A.ne(D.Hl,0.7,B.kt),u=A.v5(999)
return A.lk(w,A.f7(C.wj(d,!1),w,w,w,A.h1(w,D.Hl,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.kp(w,new A.pg(v,v,v,v),u,B.hz,w),w,w,D.br9,w)},
$S:1889}
C.bZO.prototype={
$1(d){var w=null,v=B.bL.j(0.08),u=A.m(999),t=A.I(B.bL.j(0.28),B.r,1)
return A.p(w,A.d(C.wj(d,!1),w,w,w,w,w,w,D.eUI,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
$S:1890}
C.fzm.prototype={
$1(d){var w=null,v=A.aI(d,B.bS,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bHt,w,w,w,new C.fzj(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eD(w,B.K,new A.cW(new A.aZ(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.C(B.WT,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dl(1,B.ch,A.cd(A.v(A.a([new A.eq(new C.aWC(r,w),s),B.S,A.z(A.a([A.D(A.ez(B.y0,D.fjs,new C.fzk(s,r,d),A.dd(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f3,w,new A.b7(A.m(14),B.Y),new A.aA(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dp(B.a_9,D.fgc,new C.fzl(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.f3,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.y,w,w,w,w,B.ai),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aA,0,w,w,w,w,w,B.ae),w),w,w,0,Ae.Xf,B.d_,w,w,w)},
$S:47}
C.fzj.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.fzk.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m0(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.fR),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dE.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.ry(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fzl.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fu3(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fze.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eD(w,B.aA,A.v(A.a([new A.C(D.bmI,A.z(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.n9,w,w,w),1),A.aH(w,w,w,w,B.l9,w,w,w,new C.fzc(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dl(1,B.ch,new A.C(B.h3,A.bv(A.m(14),A.fK(t,B.A,w,w,B.cn,B.dt,!1,w,!1,w,w),B.ap),w),w),new A.C(B.L1,new A.a5(1/0,w,A.dp(B.ow,D.aOj,new C.fzd(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.Ld,B.d_,w,new A.b7(v,B.Y),w)},
$S:47}
C.fzc.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.fzd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ry(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fzq.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eD(w,B.aA,new A.C(D.bmQ,A.v(A.a([A.z(A.a([D.bsa,A.aH(w,w,w,w,B.l9,w,w,w,new C.fzo(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.eq(A.bv(A.m(14),A.p(w,A.b3(w,w,w,new C.b8B(s.ax,w),B.at),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ac,new A.a5(1/0,w,A.dp(B.ow,D.aOj,new C.fzp(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d_,w,new A.b7(v,B.Y),w)},
$S:47}
C.fzo.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.fzp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m0(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.fR),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fa(B.dE.gaP(s))
w=5
return A.b(A.ry(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fiy.prototype={
$1(d){return d.a===this.a},
$S:263}
C.dCm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dC7.prototype={
bgz(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dU:B.c
s=u.a
w=2
return A.b(A.c_(t,null,new C.dCa(s,q,e),p,!0,!0,!1,B.HA,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dCb(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bgz(d,e)},
$S:1891}
C.dCa.prototype={
$1(d){var w,v=null,u=this.c===B.vw,t=u?D.d2U:D.d_o
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aA,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bq(!0,new A.C(L.afB,A.v(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bp,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ib(!0,v,v,B.y,H.aLy,new C.dC9(this.a,w,t,d),t.length,v,B.dP,B.ai,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.ah,!0,!0)},
$S:32}
C.dC9.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bp).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aWB(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dC8(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dC8.prototype={
$0(){A.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.dCb.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dC5.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:94}
C.dC6.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cp,e,v)
return new A.cX(e,!1,A.ig(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e5(new C.dC4(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ae),v,v,v),v,new A.bf(t,new A.bm(0.96,1,u),u.k("bf<bH.T>"))),v)},
$S:29}
C.dC4.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bS,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dU:B.c,f=A.m(14),e=A.I((h?B.bq:B.bp).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.z(A.a([w,A.aK(!1,v,!0,new A.C(B.en,A.V(B.cv,i.a.d.a?B.bq:B.bp,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dBQ(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aPM("Name")
r=l.a
q=r.d==null?k:new C.dBR(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lt
n=A.I(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.T,h,k,!0,B.q,k,A.aM(),w,k,k,k,k,k,2,s.b8m(new A.C(B.fO,A.aK(!1,p,!0,A.p(B.A,C.aWB(m==null?"\ud83d\udc64":A.fog(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cj,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ag,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kn,k,B.a5G,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ao,A.z(A.a([A.D(i.aQn("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dBS(r,a0),r.d===B.vw),1),B.ab,A.D(i.aQn("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dBX(r,a0),r.d===B.a2E),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hb(D.bFS,D.fhV,new C.dBY(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tX(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.f,k,k,k,k,k,2,i.aPN("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ag,k,k,s,k,k,B.dR,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bp).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wj(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.z(A.a([A.D(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bCK],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dBZ(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ae))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.r,k,k,k,k,k,2,i.aPM("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ag,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aY1(r.b.length!==0,B.m9,new C.dC_(r,i,a0),new C.dC0(r,a0),"Upload from gallery","ID photo"))
v.push(i.aY1(r.c.length!==0,D.bw5,new C.dC1(r,i,d,a0),new C.dC2(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a6f("Signature (optional)",t,new C.dC3(a0),new C.dBT(a0,t),new C.dBU(d,t,a0),k))
v.push(B.az)
i=i.a.d.a
t=i?B.bq:B.bp
s=(i?B.bq:B.bp).j(0.28)
s=A.D(A.dW(E.aOc,new C.dBV(d),A.dd(k,k,k,k,k,k,k,k,k,t,k,k,B.uL,k,new A.b7(A.m(10),B.Y),new A.aA(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.uL,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.z(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.u8,k,k,k),new C.dBW(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ai),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uU,B.j6,k,k,360)},
$S:200}
C.dBQ.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dBR.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dBS.prototype={
$0(){return this.b.$1(new C.dBP(this.a))},
$S:0}
C.dBP.prototype={
$0(){var w=this.a
w.d=B.vw
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dBX.prototype={
$0(){return this.b.$1(new C.dBO(this.a))},
$S:0}
C.dBO.prototype={
$0(){var w=this.a
w.d=B.a2E
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dBY.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dBZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wn(null,u.b,A.bZ(2020,1,1,0,0,0,0,0),null,s,A.bZ(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dBN(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBN.prototype={
$0(){var w=this.b
return this.a.a=A.bZ(w.gce(),w.gcb(),w.gcr(),0,0,0,0,0)},
$S:0}
C.dC_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Og(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dBM(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBM.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dC0.prototype={
$0(){return this.b.$1(new C.dBL(this.a))},
$S:0}
C.dBL.prototype={
$0(){return this.a.b=""},
$S:0}
C.dC1.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dU:B.c
w=3
return A.b(A.c_(q,null,new C.dBJ(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Og(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dBK(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBJ.prototype={
$1(d){var w=null
return A.bq(!0,A.v(A.a([A.dO(!1,w,w,w,!0,w,w,w,!0,w,B.akC,w,w,w,w,new C.dBD(d),!1,w,w,w,w,w,w,w,D.f8N,w,w,w),A.dO(!1,w,w,w,!0,w,w,w,!0,w,B.akA,w,w,w,w,new C.dBE(d),!1,w,w,w,w,w,w,w,D.ffh,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ah,!0,!0)},
$S:32}
C.dBD.prototype={
$0(){A.a4(this.a,!1).N("camera")
return null},
$S:0}
C.dBE.prototype={
$0(){A.a4(this.a,!1).N("gallery")
return null},
$S:0}
C.dBK.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dC2.prototype={
$0(){return this.b.$1(new C.dBI(this.a))},
$S:0}
C.dBI.prototype={
$0(){return this.a.c=""},
$S:0}
C.dC3.prototype={
$0(){return this.a.$1(new C.dBH())},
$S:0}
C.dBH.prototype={
$0(){},
$S:0}
C.dBT.prototype={
$0(){return this.a.$1(new C.dBG(this.b))},
$S:0}
C.dBG.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dBU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ag9(u.a,null,null,new C.dBF(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBF.prototype={
$4(d,e,f,g){this.a.$1(new C.dBC(this.b,d))},
$S:420}
C.dBC.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dBV.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dBW.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eKg)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eHc)
return}A.a4(w.c,!1).N(!0)},
$S:0}
C.dCp.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:94}
C.dCq.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dU:B.c,n=A.m(14),m=A.I((p?B.bq:B.bp).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Aa(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bp,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yr(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yr(r).length>0?B.bL:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bp
t=(q?B.bq:B.bp).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.az,A.z(A.a([A.D(A.dW(B.na,new C.dCn(d),A.dd(r,r,r,r,r,r,r,r,r,w,r,r,B.jM,r,new A.b7(A.m(10),B.Y),new A.aA(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.ffG,new C.dCo(d),A.bk(B.cY,r,r,r,B.c,r,B.jM,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Av,E.X7,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ae),r,r,r),r)},
$S:29}
C.dCn.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dCo.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.dCj.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dCk(r),p=r.a.d.a,o=p?B.dU:B.c,n=A.m(14),m=A.I((p?B.bq:B.bp).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.z(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aA,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Aa(l.c),s,s,s,s,s,s,D.eW9,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iw((r.a.d.a?B.bq:B.bp).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.YX,"View receipt",new C.dCc(r,d,l))
u=l.x!=null
t=u?B.qP:B.pr
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bmN,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dCd(r,d,l)),q.$3$icon$label$onTap(B.AM,"Edit",new C.dCe(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.m9,"View / download ID",new C.dCf(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bw4,"View / download selfie",new C.dCg(r,d,l)))
if(l.gaD6())p.push(q.$3$icon$label$onTap(A1.a_0,"View / download signature",new C.dCh(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bL,B.ea,"Delete",new C.dCi(r,d,l)))
p.push(B.au)
return A.bq(!0,new A.C(B.uQ,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ah,!0,!0)},
$S:32}
C.dCk.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aA
else w=d
return A.aK(!1,v,!0,new A.C(B.eN,A.z(A.a([A.V(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1892}
C.dCc.prototype={
$0(){A.a4(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fzi(w,this.c)},
$S:0}
C.dCd.prototype={
$0(){A.a4(this.b,!1).N(null)
this.a.QR(this.c)},
$S:0}
C.dCe.prototype={
$0(){A.a4(this.b,!1).N(null)
this.a.Cm(this.c)},
$S:0}
C.dCf.prototype={
$0(){var w,v,u
A.a4(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bB4(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dCg.prototype={
$0(){var w,v,u
A.a4(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bB4(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dCh.prototype={
$0(){A.a4(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fzn(w,this.c)},
$S:0}
C.dCi.prototype={
$0(){A.a4(this.b,!1).N(null)
this.a.MW(0,this.c)},
$S:0}
C.dCr.prototype={
$1(d){return d.x==null},
$S:263}
C.dCs.prototype={
$1(d){return d.x!=null},
$S:263}
C.dCt.prototype={
$2(d,e){return d+e.c},
$S:1893}
C.dCu.prototype={
$0(){return this.a.bvC()},
$S:0}
C.dCl.prototype={
$0(){return this.a.acZ(this.b)},
$S:0}
C.fj2.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fj3.prototype={
$0(){return B.d.gL(D.a0c)},
$S:z+68}
C.d2f.prototype={
$0(){var w=this.a
return w.m(new C.d2d(w,this.b))},
$S:0}
C.d2d.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d2e.prototype={
$0(){},
$S:0}
C.d2g.prototype={
$0(){var w=this.a.gbTW()
A.a4(this.b,!1).N(w)
return null},
$S:0}
C.fl0.prototype={
$1(d){return C.fVG(A.a0(d,x.N,x.z))},
$S:z+11}
C.fl1.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fl2.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fxX.prototype={
$1(d){return d.ad()},
$S:z+21}
C.fG_.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fip.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bL4.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eY(e,v)?v:null},
$S:1894}
C.fyv.prototype={
$1(d){var w=this
return new C.Y6(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d2V.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d2U(w,d))},
$S:z+66}
C.d2U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2J.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cw(u)?v.r>=J.ab(v.d):w)v.r=J.ab(v.d)-1},
$S:0}
C.d2G.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d2h.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d2i.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d2K.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d2q.prototype={
$1(d){var w=null,v=A.M(d).ax.a===B.H,u=v?B.dU:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.d2o(d),w,w),A.bJ(B.vS,new C.d2p(d),A.bk(B.mB,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d2o.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.d2p.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.d2r.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d2H.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d2I.prototype={
$0(){return B.d.gL(D.ya)},
$S:z+12}
C.d2m.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxJ(0),t=J.ab(w.d)
w=J.ab(w.d)===1?"page":"pages"
return new C.RD(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d2n.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2s.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.XF(v,u,J.ab(w.d),null)},
$S:z+64}
C.d2t.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2T.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Xn(r.y,r.gxJ(0),J.ab(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d2R(r),s,s,s,s,s,s,!1,B.aa)
else{w=e-1
v=J.q(r.d,w)
J.ab(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8_(v,e,w,u,t,r.gbLi(),C.h9H(r.y.Q),r.gxJ(0),s)
w=t}return A.c6(q,new C.d2S(r,e),new A.C(B.X8,w,s))},
$S:1895}
C.d2S.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcX(t).ay){t=this.b
u=x.cy.a(B.d.gcX(u.f.f)).gug(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dk()
t=u.a
t.$flags&2&&A.ai(t)
t[11]=0.0013
u.ft(v*3.141592653589793*0.5)
return A.fr(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d2R.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aEa(B.pg,B.ir)},
$S:0}
C.d2D.prototype={
$0(){var w=this.a
return w.m(new C.d2C(w))},
$S:0}
C.d2C.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d2E.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).N(null)
return null},
$S:0}
C.d2j.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jE.j(0.5),r=x.p,q=A.a([D.f7q,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.Xv(d,B.dS,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Xv(d,H.aiv,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cw(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cK,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cK,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Xv(d,Y.ajE,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Xv(d,B.py,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Xv(d,B.py,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eD(u,E.zZ,A.bq(!0,new A.C(A0.Aq,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ah,!0,!0),u,u,u,D.ag0,B.d_,u,new A.b7(t,new A.aA(s,1.4,B.r,-1)),u)},
$S:47}
C.d2F.prototype={
$0(){A.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.d2w.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cw(w.d)
return new C.Y8(v,J.cw(w.d),w.r+1,null)},
$S:z+54}
C.d2x.prototype={
$1(d){var w=null
return A.o7(!1,A.eh(w,w,w,E.zZ,new A.k7(this.a,new C.d2v(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:315}
C.d2v.prototype={
$3(d,e,f){var w=null
return A.z(A.a([E.a5m,B.nU,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:740}
C.d2y.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d2z.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d2A.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2B.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Aj(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Qu(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d2u(s,t))
w=4
return A.b(s.kF(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2u.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2M.prototype={
$1(d){var w=null
return A.o7(!1,A.eh(w,w,w,E.zZ,new A.k7(this.a,new C.d2L(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:315}
C.d2L.prototype={
$3(d,e,f){var w=null
return A.z(A.a([E.a5m,B.nU,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:740}
C.d2N.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d2O.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d2P.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d2Q.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Aj(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kF(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2k.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bdM(B.pg,S.KQ)},
$S:0}
C.d2l.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aEa(B.pg,S.KQ)},
$S:0}
C.d4F.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.d4G.prototype={
$1(d){var w=this.a
return w.m(new C.d4E(w))},
$S:9}
C.d4E.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d4H.prototype={
$1(d){var w=this.a
return w.m(new C.d4D(w))},
$S:9}
C.d4D.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d4I.prototype={
$1(d){var w=this.a
return w.m(new C.d4C(w))},
$S:9}
C.d4C.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d4J.prototype={
$0(){var w=this.a
return w.m(new C.d4B(w,this.b))},
$S:0}
C.d4B.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d4K.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga05()
A.a4(this.b,!1).N(new A.bmo(w,v))},
$S:0}
C.d39.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d38.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Y4(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d3d.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d3c.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b45(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hy,v,v,v)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.d3a(d),v,v),A.bJ(B.vS,new C.d3b(d),A.bk(B.mB,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zZ,w,v,v,v,v,D.f6l,v)},
$S:19}
C.d3a.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.d3b.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.d3e.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.d3f.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cd(A.c5(B.bG,r,B.bx,18,14),B.q,t,B.y,t,D.bnJ,t,t,B.ai)},
$S:316}
C.d37.prototype={
$0(){return this.a.OU(0,this.b)},
$S:0}
C.d36.prototype={
$0(){return this.a.Oo(0,this.b)},
$S:0}
C.cCd.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cCe.prototype={
$0(){return B.d.gL(D.ya)},
$S:z+12}
C.cCf.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bY(0,new A.C(d,A.bX(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.be),w),0,0,0)},
$S:1897}
C.cVF.prototype={
$1(d){return this.a.m(new C.cVE(this.b,this.c))},
$S:9}
C.cVE.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cW3.prototype={
$1(d){return this.a.m(new C.cVR())},
$S:2}
C.cVR.prototype={
$0(){},
$S:0}
C.cW4.prototype={
$1(d){return this.a.m(new C.cVQ())},
$S:2}
C.cVQ.prototype={
$0(){},
$S:0}
C.cW5.prototype={
$0(){var w=this.a
return w.m(new C.cVP(w,this.b))},
$S:0}
C.cVP.prototype={
$0(){var w=this.a
return w.d=w.gnG().EP(this.b.a)},
$S:0}
C.cW6.prototype={
$0(){var w=this.a
return w.m(new C.cVO(w,this.b))},
$S:0}
C.cVO.prototype={
$0(){var w=this.a
return w.d=w.gnG().cB8(this.b)},
$S:0}
C.cW7.prototype={
$1(d){return this.a.m(new C.cVN())},
$S:2}
C.cVN.prototype={
$0(){},
$S:0}
C.cW8.prototype={
$0(){var w=this.a
return w.m(new C.cVM(w,this.b))},
$S:0}
C.cVM.prototype={
$0(){var w=this.a
return w.d=w.gnG().cBd(this.b.a)},
$S:0}
C.cW9.prototype={
$1(d){var w=this.a
return w.m(new C.cVZ(w,d))},
$S:6}
C.cVZ.prototype={
$0(){var w=this.a
return w.d=w.gnG().cC7(this.b)},
$S:0}
C.cWa.prototype={
$1(d){var w=this.a
return w.d=w.gnG().aBm(d)},
$S:2}
C.cWb.prototype={
$1(d){var w=this.a
return w.d=w.gnG().cBg(d)},
$S:2}
C.cWd.prototype={
$1(d){var w=this.a
return w.d=w.gnG().cC5(d)},
$S:2}
C.cWe.prototype={
$1(d){var w=this.a
return w.m(new C.cVY(w,d))},
$S:9}
C.cVY.prototype={
$0(){var w=this.a
return w.d=w.gnG().cBX(this.b)},
$S:0}
C.cWf.prototype={
$0(){var w=this.a,v=w.gnG(),u=B.a.i(w.gxJ(0).a.a),t=B.a.i(w.gayG().a.a)
u=v.b8D(B.a.i(w.gaoF().a.a),t,u)
A.a4(this.b,!1).N(u)
return null},
$S:0}
C.dPJ.prototype={
$0(){var w=this.a
w.vm()
w.a.bp()
w.a.pn()},
$S:0}
C.dPI.prototype={
$0(){var w=this.a
w.vm()
w.a.bp()
w.a.pn()},
$S:0}
C.dPL.prototype={
$0(){var w=this,v=w.b
if(J.cw(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dPM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPN.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dPK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dPP.prototype={
$0(){this.a.Nr()
return null},
$S:0}
C.dPO.prototype={
$0(){return this.a.DH(this.b)},
$S:0}
C.dP9.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dd,w,w,!0,w,w,new C.dP7(d),w,w),r=A.bk(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dP8(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dP7.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dP8.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.dPa.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cBC(this.b)},
$S:0}
C.dP4.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aQ1(w.b,w.c,w.d)},
$S:8}
C.dOD.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dOE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dOS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.FK(t.a.c),$async$$0)
case 2:s=r.qU(q.dG(e,new C.dOQ(t)))
if(s!=null&&t.c!=null)t.m(new C.dOR(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dOQ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dOR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dOT.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dOU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dP3.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cCp(C.h9R(w),w)},
$S:0}
C.dP1.prototype={
$1(d){return new A.e5(new C.dP0(this.a,this.b),null)},
$S:20}
C.dP0.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dU:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.akg,v,v,v,p>0?new C.dOX(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.z(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.akP,v,v,v,new C.dOY(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dOZ(d),v,v),A.bJ(B.oS,new C.dP_(d),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:167}
C.dOX.prototype={
$0(){return this.b.$1(new C.dOW(this.a))},
$S:0}
C.dOW.prototype={
$0(){return--this.a.a},
$S:0}
C.dOY.prototype={
$0(){return this.b.$1(new C.dOV(this.a))},
$S:0}
C.dOV.prototype={
$0(){return++this.a.a},
$S:0}
C.dOZ.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dP_.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.dP2.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cCc(this.a.a)
w.r.a8(0)},
$S:0}
C.dOr.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agg(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h3F(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dOs.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aBj(w)},
$S:0}
C.dPc.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.abJ(this.b,w,this.c,null)},
$S:z+24}
C.dP6.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dU:B.c,t=A.m(20),s=A.V(B.l5,B.aT,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(D.fgM,new C.dP5(d),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dP5.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dOt.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dOu.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dOv.prototype={
$1(d){return d.a},
$S:z+7}
C.dOw.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hT(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aBj(w)},
$S:0}
C.dOA.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agg(q)
w=A.T(q).k("a1<1>")
q=A.B(new A.a1(q,new C.dOy(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h3F(v.e,null,r,v.f,v.r,new C.dOz(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dOz.prototype={
$0(){return this.a.a8c(this.b)},
$S:0}
C.dOy.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dOB.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hT>")
w=A.B(new A.J(w,new C.dOx(this.b),v),v.k("aj.E"))
u.d=t.aBj(w)},
$S:0}
C.dOx.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dPb.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dON.prototype={
$1(d){return d.length!==0},
$S:3}
C.dOO.prototype={
$1(d){var w=this
return new A.e5(new C.dOM(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dOM.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dU:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dOI(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.T,!1,v,!0,B.q,v,A.aM(),u,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(12),B.df),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ag,v,v,v,v,v,B.lN,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dOJ(d),v,v),A.bJ(B.In,new C.dOK(t,u,o,e),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.f4A,new C.dOL(t,u,o,d),A.bk(B.aT,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:167}
C.dOI.prototype={
$1(d){var w=null
return A.dO(!1,B.ah,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bJo,w,w,w,new C.dOH(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1898}
C.dOH.prototype={
$0(){return this.a.$1(new C.dOF(this.b,this.c))},
$S:0}
C.dOF.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dOJ.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dOK.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dOG(w.c,u))
v.bM(0,B.c3)}},
$S:0}
C.dOG.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dOL.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).N(!0)},
$S:0}
C.dOP.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cCR(this.b,D.ti,C.FI(v,w.a.c))},
$S:0}
C.dPj.prototype={
$1(d){return d.as},
$S:z+1}
C.dPk.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.dPl.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hYr(v)
return w.Uu(v==null?null:v.a)},
$S:0}
C.dPm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hB2(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gck(k)){k=A.aO(1/0,e.a,e.b)
s=A.aO(1/0,e.c,e.d)
l.cll(new A.at(u,t),v.gbeA(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cGD:D.cF6
q=A.I(s?B.dq:D.b6T,B.r,1)
p=A.m(22)
o=A.bY(0,A.b3(m,m,m,new C.bbk(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.W,m,B.a9,B.q,A.a([o,A.bY(0,A.u5(new A.N(n,n,n,n),new A.a5(u,t,new C.bcc(l.d,v,l.f,w,new C.dPf(l),l.gc5B(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.btp(s,new C.dPg(l,e),new C.dPh(l,e),new C.dPi(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a6(B.b0,B.b4,B.x,r,m,m),B.n),m,m,m,P.af6,m,m,m,m)},
$S:213}
C.dPf.prototype={
$1(d){var w=this.a
w.m(new C.dPd(w,d))},
$S:2}
C.dPd.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dPg.prototype={
$0(){var w=this.b
return this.a.b6j(1.25,new A.at(A.aO(1/0,w.a,w.b),A.aO(1/0,w.c,w.d)))},
$S:0}
C.dPh.prototype={
$0(){var w=this.b
return this.a.b6j(0.8,new A.at(A.aO(1/0,w.a,w.b),A.aO(1/0,w.c,w.d)))},
$S:0}
C.dPi.prototype={
$0(){var w=this,v=w.b
return w.a.aQ1(new A.at(A.aO(1/0,v.a,v.b),A.aO(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbeA())},
$S:0}
C.dPn.prototype={
$0(){var w=this.a
return w.m(new C.dPe(w))},
$S:0}
C.dPe.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dOC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fA(s.c)),$async$$0)
case 2:t.xd("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3j.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bfT(u,C.hdW(v.c,u),new C.d3i(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d3i.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d3k.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjb(d.d,d.c,u.f.t(0,d.a),new C.d3h(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d3h.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fj6.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.qU(new A.cS(new A.a1(v,new C.fj7(d),w.k("a1<1>")),new C.fj8(),w.k("cS<1,n>")))},
$S:z+20}
C.fj7.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fj8.prototype={
$1(d){return d.a},
$S:z+7}
C.fj4.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fj5.prototype={
$1(d){return d.b},
$S:z+7}
C.fjb.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.qU(new A.cS(new A.a1(v,new C.fjc(d),w.k("a1<1>")),new C.fjd(),w.k("cS<1,n>")))},
$S:z+20}
C.fjc.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fjd.prototype={
$1(d){return d.a},
$S:z+7}
C.fj9.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fja.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d3m.prototype={
$0(){return this.a},
$S:z+32}
C.d3D.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:256}
C.d3v.prototype={
$2(d,e){var w=this.a.cf(0,d,new C.d3w()),v=J.a7(w)
if(!v.t(w,e))v.J(w,e)},
$S:124}
C.d3w.prototype={
$0(){return A.a([],x.s)},
$S:741}
C.d3u.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eY(w,e)
return w===!0},
$S:299}
C.d3n.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d3t.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d3s.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Bt:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Bt:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1900}
C.d3o.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d3x.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gU(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.Bt:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b8(w,new C.d3y(r)))w.push(r)}}B.d.bn(w,new C.d3z(a8))
B.d.b1(w,new C.d3A())
q=C.hB1(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.emJ],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.A(-p,p)],x.G)
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
else j.push(d)}}a0=(B.d.gL(k)+B.d.gam(k))/2
a1=A.a([new A.A(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bm8(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.A(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.A(a5,a6))}}return a1},
$S:1901}
C.d3y.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d3z.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d3A.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d3B.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a2(v).k("bc<2>")).cI(0,0,B.qb)+88-w.gL(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:671}
C.d3C.prototype={
$1(d){return 16+d*156},
$S:258}
C.d3l.prototype={
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
t.n(0,d,new C.F1(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.F1(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.F1(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jb(d,new A.u(e+t,w),s,s.length))}},
$S:187}
C.d3p.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aH7(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:124}
C.d3q.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d3r.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:742}
C.d3E.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:742}
C.d3F.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:424}
C.d3G.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:189}
C.d3H.prototype={
$1(d){return d>=0.5},
$S:139}
C.f26.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hn(A.aK(!1,v,!0,new A.a5(38,38,A.V(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1903}
C.eEo.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.C(B.oi,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eRY,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Ln,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEn(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eEn.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dju.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.djt.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.n7,B.L,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.djr(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m_,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.djs(d),w,w)],x.p),B.b9,B.Es,w,u,D.boZ,w,D.bqV,new A.b7(v,B.Y),w,w)},
$S:19}
C.djr.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.djs.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.djD.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.djE.prototype={
$1(d){var w=this.a
return w.m(new C.djC(w,d))},
$S:z+37}
C.djC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djF.prototype={
$1(d){var w=null
return A.q0(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.djI.prototype={
$1(d){var w=this.a
return w.m(new C.djB(w,d))},
$S:33}
C.djB.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.djH.prototype={
$1(d){var w=null
return A.q0(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.djJ.prototype={
$1(d){var w=this.a
return w.m(new C.djA(w,d))},
$S:33}
C.djA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.djK.prototype={
$0(){var w=this.a
return w.m(new C.djz(w))},
$S:0}
C.djz.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.djL.prototype={
$0(){var w=this.a
return w.m(new C.djy(w))},
$S:0}
C.djy.prototype={
$0(){return++this.a.at},
$S:0}
C.djM.prototype={
$0(){var w=this.a
return w.m(new C.djx(w))},
$S:0}
C.djx.prototype={
$0(){return--this.a.ax},
$S:0}
C.djN.prototype={
$0(){var w=this.a
return w.m(new C.djw(w))},
$S:0}
C.djw.prototype={
$0(){return++this.a.ax},
$S:0}
C.djO.prototype={
$1(d){var w=this.a
return w.m(new C.djv(w,d))},
$S:9}
C.djv.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.djG.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.djP.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dU:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.dY:B.bX).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bq:B.bp
t=A.V(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bq:B.bp
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.df(r,A.v(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eD,r,r,r,B.jM,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.djQ(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae),1)},
$S:z+39}
C.djQ.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.djZ.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.c5x.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:90}
C.c5E.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c5F.prototype={
$2(d,e){var w=J.b6(e,new C.c5D(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c5D.prototype={
$1(d){return d.ad()},
$S:z+21}
C.c5z.prototype={
$1(d){return C.aj7(A.a0(d,x.N,x.z))},
$S:z+8}
C.c5A.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c5B.prototype={
$1(d){return C.fVG(A.a0(d,x.N,x.z))},
$S:z+11}
C.c5C.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c5J.prototype={
$1(d){return new A.aEd(d.f.length,d.a,d.b)},
$S:z+43}
C.c5K.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:605}
C.c5G.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c5H.prototype={
$1(d){return d.cBP(C.FI(d,this.a))},
$S:z+44}
C.dPw.prototype={
$1(d){return C.tB(d,this.a.a.c)},
$S:z+2}
C.dPx.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dPB.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dPC.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dPt.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aY4(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xK("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oP(r.c,r.e),$async$$0)
case 4:s.xK(p)
w=5
return A.b(s.IC(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aY4(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xK("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oP(r.c,r.e),$async$$0)
case 4:s.xK(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.TY(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xK("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xK("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xK("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.IC(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a8(j)
o=r.a
if(o.c==null){w=1
break}o.xK(B.a.e6(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dPA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aY3(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xK("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).ci(A.eo(new C.dPz(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oP(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPz.prototype={
$1(d){var w=this.b
return new C.Z2(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dPy.prototype={
$1(d){return D.fBm},
$S:z+46}
C.dPE.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dPF.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dPD(w,d)
return new A.C(B.d8,new C.bcg(this.b,d.c,d.a,w,null),null)},
$S:1904}
C.dPD.prototype={
$0(){return this.a.Wb(this.b.b)},
$S:0}
C.dPo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPp.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dPq.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dPr.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dPs.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dPG.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.dr(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).N(s)
return}},
$S:190}
C.dBu.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dBv.prototype={
$0(){return B.d.gL(D.a1y)},
$S:z+48}
C.dBw.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.V(this.b.d,B.c.j(0.95),w,w,D.cMy,44),w,w,w),w,w,new C.bh_(u,t,v,w),B.at)},
$S:69}
C.fyY.prototype={
$1(d){return A.oz(new C.fyX(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:131}
C.fyX.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dU:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.r7,24)],x.V),o=r?B.dY:B.bX
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aT.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bDZ,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a6(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aA,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ag4,A.z(A.a([w,B.bd,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bp,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ib(!0,t,e,B.y,D.eFp,new C.fyW(this.b,s),20,B.afF,t,B.ai,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.ks,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:111}
C.fyW.prototype={
$2(d,e){var w=null,v=D.a1y[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dY:B.bX,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a4U(v.a,!0,w),1),n=s?B.jk:B.iK,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aA,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ex(A.bv(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l1,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fyV(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ae)},
$S:75}
C.fyV.prototype={
$0(){A.a4(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cdb.prototype={
$0(){return this.a.ae2(this.b)},
$S:0}
C.fyk.prototype={
$1(d){return D.fxI},
$S:z+74}
C.fFM.prototype={
$1(d){var w=this
return new C.a_L(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fyp.prototype={
$1(d){return new C.XH(this.a,null)},
$S:z+51}
C.fyo.prototype={
$1(d){return D.fyH},
$S:z+52}
C.cWr.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cWs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cWq(w,d))},
$S:33}
C.cWq.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWt.prototype={
$1(d){return this.a.Jb()},
$S:2}
C.cWu.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cWn.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cWo.prototype={
$1(d){return this.a.Jb()},
$S:2}
C.cWp.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cu0.prototype={
$0(){},
$S:0}
C.cu6.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cu7.prototype={
$0(){return this.a.aLB(-1)},
$S:0}
C.cu8.prototype={
$1(d){return this.a.m(new C.cu5())},
$S:2}
C.cu5.prototype={
$0(){},
$S:0}
C.cu9.prototype={
$0(){return this.a.aLB(1)},
$S:0}
C.cua.prototype={
$1(d){return this.a.m(new C.cu4())},
$S:2}
C.cu4.prototype={
$0(){},
$S:0}
C.cub.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aT.j(0.2)
if(s)v=B.aT
else v=this.b.a?B.dY:B.bX
return A.tW(u,u,B.aZ,r,u,new C.cu3(t,d),B.Aw,s,w,u,new A.aA(v,1,B.r,-1),B.c7)},
$S:1905}
C.cu3.prototype={
$1(d){var w=this.a
return w.m(new C.cu1(w,this.b))},
$S:9}
C.cu1.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cuc.prototype={
$1(d){return this.a.m(new C.cu2())},
$S:2}
C.cu2.prototype={
$0(){},
$S:0}
C.cud.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.f1z.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).N(w)},
$S:2}
C.f1A.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.f1B.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).N(w)},
$S:0}
C.f1x.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbuN()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.bqU,new A.eq(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bte(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:69}
C.f1y.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dH.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aT,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aT],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ex(D.dZh,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.d8(-1.2+t,-0.5),new A.d8(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae)},
$S:140}
C.fx4.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.eBy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eBp.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eBq.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eBw.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e5(new C.eBv(w,this.b),null)},
$S:20}
C.eBv.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dU:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eD(w,u,new A.C(B.afZ,A.v(A.a([s,B.ao,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h0s(new C.eBs(r,e),r.a),B.az,A.z(A.a([A.D(A.dW(B.dd,new C.eBt(d),w),1),B.aw,A.D(A.bJ(B.SK,new C.eBu(r,d),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d_,w,new A.b7(t,B.Y),w)},
$S:97}
C.eBs.prototype={
$1(d){return this.b.$1(new C.eBr(this.a,d))},
$S:33}
C.eBr.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eBt.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.eBu.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).N(w)
return null},
$S:0}
C.eBx.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Rv(this.b)},
$S:0}
C.eBk.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b8b(w)},
$S:0}
C.eBo.prototype={
$1(d){return this.bh1(d)},
bh1(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Ko(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iK(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eBn.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a1<1>")
w=A.B(new A.a1(w,new C.eBm(this.b),v),v.k("G.E"))
u.d=t.b8b(w)},
$S:0}
C.eBm.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eBz.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.eBA.prototype={
$1(d){return this.a.byO(d,this.b)},
$S:z+55}
C.eBl.prototype={
$0(){return this.a.a8b(this.b)},
$S:0}
C.fFE.prototype={
$1(d){return new C.ac3(this.a,this.b,this.c,null)},
$S:z+56}
C.eBC.prototype={
$0(){return this.a.YN(this.b)},
$S:0}
C.eBD.prototype={
$0(){return this.a.OQ(this.b)},
$S:0}
C.eBE.prototype={
$0(){return this.a.DC(this.b)},
$S:0}
C.eBF.prototype={
$0(){return this.a.YO(this.b)},
$S:0}
C.eBB.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.eBf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eBg.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eBh.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.eBj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eBi(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBi.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eC1.prototype={
$2(d,e){return d+e.gwp()},
$S:z+59}
C.eBY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eBZ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eBJ.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dU:B.c,s=A.m(24),r=A.p(v,D.bEo,B.f,v,v,new A.o(B.aE.j(u?0.18:0.08),v,A.I(B.aE.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aA
u=u?B.dY:B.bX
w=x.p
return A.eD(v,t,new A.C(B.x8,A.v(A.a([r,B.aO,q,B.P,p,B.d5,A.z(A.a([A.D(A.dW(B.na,new C.eBH(d),A.dd(v,v,v,v,v,v,v,v,v,o,v,v,B.f3,v,new A.b7(A.m(14),B.Y),new A.aA(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.fkl,new C.eBI(d),A.bk(B.aE,v,v,v,v,v,B.f3,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d_,v,new A.b7(s,B.Y),v)},
$S:47}
C.eBH.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.eBI.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.eBS.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dU:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fI,28)],x.V),g=k?D.cSS:B.a0Z,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.az,D.ezG,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cs,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a6(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ag1,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.z(A.a([A.D(v.b1z(B.b3,B.iO,new C.eBP(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b1z(B.cu,M.xQ,new C.eBQ(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aE.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aE.j(0.28),B.r,1)
o=A.p(m,D.bDN,B.f,m,m,new A.o(B.aE.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aA,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bq(!0,new A.C(B.uS,A.p(m,A.v(A.a([g,new A.C(B.ag_,A.v(A.a([w,B.S,u,B.bu,t,B.S,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.z(A.a([o,B.bd,n,A.V(B.ee,k?B.bq:B.bp,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.by,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eBR(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ae)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ah,!0,!0)},
$S:32}
C.eBP.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).N(null)
w=2
return A.b(u.a.uY("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).N(null)
w=2
return A.b(u.a.uY("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBR.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).N(null)
w=2
return A.b(u.a.MJ(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBN.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dU:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eR,24)],x.V),k=o?B.dY:B.bX
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bp
u=A.bv(w,new A.a5(48,48,C.aOm(!0,A.m(12),48,Q.LY,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Aa(v.gwp())
s=x.p
r=this.a
return A.bq(!0,new A.C(B.uS,A.p(q,A.v(A.a([B.S,k,new A.C(D.afX,A.z(A.a([u,B.bd,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bp,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Ab,r.cfH(B.tz,B.aT,new C.eBL(d),p,"QR code or backup file","Transfer project"),r.aZE(!0,B.ea,B.aE,new C.eBM(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ah,!0,!0)},
$S:32}
C.eBL.prototype={
$0(){A.a4(this.a,!1).N("transfer")
return null},
$S:0}
C.eBM.prototype={
$0(){A.a4(this.a,!1).N("delete")
return null},
$S:0}
C.eBO.prototype={
$1(d){return this.bh2(d)},
bh2(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Ko(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.va(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eC4.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eC3(w))},
$S:0}
C.eC3.prototype={
$0(){return this.a.r++},
$S:0}
C.eC5.prototype={
$0(){var w=this.a
return w.m(new C.eC2(w))},
$S:0}
C.eC2.prototype={
$0(){return this.a.r++},
$S:0}
C.eBG.prototype={
$0(){var w=this.a.c
w.toString
return A.iK(w,null)},
$S:0}
C.eBK.prototype={
$0(){return this.a.c94(this.b)},
$S:0}
C.eC0.prototype={
$0(){var w=this.a
return w.m(new C.eC_(w,this.b))},
$S:0}
C.eC_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eBV.prototype={
$0(){return this.a.uY("scan")},
$S:0}
C.eBW.prototype={
$0(){return this.a.uY("file")},
$S:0}
C.eBX.prototype={
$1(d){return this.a.cfI(d,this.b)},
$S:z+60}
C.eBU.prototype={
$0(){return this.a.DG(this.b)},
$S:0}
C.eBT.prototype={
$0(){return this.a.Zh(this.b,this.c)},
$S:0}
C.cts.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.ctr.prototype={
$1(d){return d.ad()},
$S:z+62}
C.ctp.prototype={
$1(d){return C.hjK(A.a0(d,x.N,x.z))},
$S:z+63}
C.ctq.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fih.prototype={
$1(d){return d.y===D.kb},
$S:z+2}
C.fG7.prototype={
$1(d){return C.bz0(d,this.a)},
$S:z+2}
C.fh_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bL9.prototype={
$1(d){return!d.as},
$S:z+1}
C.bL8.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bL5.prototype={
$1(d){return C.fVH(A.a0(d,x.N,x.z))},
$S:z+14}
C.bL6.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bL7.prototype={
$1(d){return J.k(d)},
$S:17}
C.f96.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f4P.prototype={
$1(d){return C.fMj(A.a0(d,x.N,x.z))},
$S:z+67}
C.f4Q.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f4R.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fyb.prototype={
$1(d){return J.k(d)},
$S:17}
C.fyc.prototype={
$1(d){return d.a},
$S:z+69}
C.fyd.prototype={
$1(d){return d.length!==0},
$S:3}
C.fye.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fyf.prototype={
$1(d){return d.Rv(null).ad()},
$S:z+70}
C.fG5.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fiJ.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fl6.prototype={
$1(d){return C.aj7(A.a0(d,x.N,x.z))},
$S:z+8}
C.fl7.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fl8.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fl9.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fla.prototype={
$1(d){return C.tB(d,this.a)},
$S:z+2}
C.fxZ.prototype={
$1(d){return C.tB(d,this.a)},
$S:z+2}
C.fG0.prototype={
$1(d){return C.aj7(A.a0(d,x.N,x.z))},
$S:z+8}
C.fG1.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fG2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fiq.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fir.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fGb.prototype={
$1(d){return!d.as},
$S:z+1}
C.fi0.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fi1.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fi2.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fFN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.flT.prototype={
$1(d){return d.Q},
$S:z+72}
C.fxU.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fl3.prototype={
$1(d){return C.aj7(A.a0(d,x.N,x.z))},
$S:z+8}
C.fl4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fl5.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fxQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f5l.prototype={
$1(d){return d.length!==0},
$S:3}
C.f5m.prototype={
$1(d){return C.fVH(A.a0(d,x.N,x.z))},
$S:z+14}
C.f5n.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f5o.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f5p.prototype={
$1(d){return d.length!==0},
$S:3}
C.f5C.prototype={
$2(d,e){return d.eP(new C.f5D(e))},
$S:1906}
C.f5D.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1907}
C.f5z.prototype={
$1(d){return C.hFC(d,this.a)},
$S:z+73}
C.f5A.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f5B.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.f9L.prototype={
$1(d){return d.a},
$S:z+49}
C.f9M.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9N.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fbP.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fgm.prototype={
$1(d){return C.h5W(d,C.FI(d,this.a))},
$S:z+5}
C.fgn.prototype={
$1(d){return C.h5X(d,C.FI(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJt.prototype
w.br5=w.q
w=C.aLC.prototype
w.btq=w.q
w=C.aLD.prototype
w.btr=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aB_.prototype,"gccD","ccE",25)
var s
w(s=C.ay1.prototype,"gc5H","c5I",42)
v(s,"gaJS","Mh",0)
v(s,"gckH","A8",0)
v(s,"gbGp","MX",0)
v(s,"gcye","xL",0)
v(s,"gceG","ZY",0)
v(s,"gbBT","MF",0)
v(s,"gbGQ","VD",0)
w(s,"gbLi","bLj",71)
v(s,"gbwo","zd",0)
v(C.ay2.prototype,"gcya","Ex",0)
v(s=C.aBA.prototype,"gadF","vb",0)
v(s,"gc8l","Z9",0)
v(s,"gaNS","H3",0)
v(s=C.aBx.prototype,"gcuy","a1_",0)
v(s,"gadF","vb",0)
v(s,"gciN","a_D",0)
v(s,"gc9h","Zm",0)
w(s,"gc5B","c5C",30)
v(s,"gbGH","H8",0)
v(s,"gcvs","cvt",3)
v(s,"gbXC","Xh",0)
w(s,"gc47","c48",23)
v(s,"gc85","c86",3)
v(s=C.azZ.prototype,"gc1X","Op",0)
v(s,"gc1Z","c2_",3)
v(s,"gbDo","a7O",0)
v(s=C.aBz.prototype,"gbJQ","W7",0)
v(s,"gbU2","WL",0)
v(s,"gcp0","a0s",0)
v(s,"gclg","a04",0)
v(C.aBy.prototype,"gckZ","afo",0)
v(C.aqI.prototype,"gc45","YM",0)
v(C.awO.prototype,"ga0K","Jb",3)
v(C.awN.prototype,"ga0K","Jb",3)
v(C.avx.prototype,"ga0K","Jb",3)
v(s=C.aD3.prototype,"gaZ1","Pk",0)
v(s,"gbvf","Uo",0)
v(s,"gc95","c96",3)
w(C.aD2.prototype,"gc4W","c4X",57)
u(C.aD4.prototype,"gaNM",0,0,null,["$1","$0"],["H2","bEE"],58,0,0)
t(C,"hd8","hPa",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.amD,C.tT,C.mZ,C.GN,C.adf,C.J3,C.tU,C.Jb,C.F1,C.bce,C.aH7,C.anN,C.d3I,C.lp,C.aRd,C.aRc,C.aPi,C.tp,C.qE,C.l9,C.hT,C.kr,C.aF7])
u(A.i7,[C.fpK,C.fpJ,C.fpL,C.fyR,C.ffi,C.ffj,C.ffo,C.fns,C.fnr,C.fnq,C.bZO,C.fzm,C.fze,C.fzq,C.fiy,C.dCa,C.dC5,C.dC6,C.dBJ,C.dBF,C.dCp,C.dCq,C.dCj,C.dCk,C.dCr,C.dCs,C.fj2,C.fl0,C.fl1,C.fxX,C.fG_,C.fip,C.fyv,C.d2V,C.d2h,C.d2q,C.d2H,C.d2m,C.d2s,C.d2j,C.d2w,C.d2x,C.d2v,C.d2M,C.d2L,C.d4G,C.d4H,C.d4I,C.d38,C.d3d,C.d3c,C.cCd,C.cCf,C.cVF,C.cW3,C.cW4,C.cW7,C.cW9,C.cWa,C.cWb,C.cWd,C.cWe,C.dPK,C.dP9,C.dP4,C.dOD,C.dOQ,C.dOT,C.dP1,C.dOr,C.dPc,C.dP6,C.dOt,C.dOu,C.dOv,C.dOA,C.dOy,C.dOx,C.dON,C.dOO,C.dOI,C.dPj,C.dPf,C.d3j,C.d3k,C.fj6,C.fj7,C.fj8,C.fj4,C.fj5,C.fjb,C.fjc,C.fjd,C.fj9,C.fja,C.d3D,C.d3t,C.d3o,C.d3y,C.d3z,C.d3C,C.d3q,C.d3F,C.d3G,C.d3H,C.f26,C.eEo,C.djt,C.djD,C.djE,C.djF,C.djI,C.djH,C.djJ,C.djO,C.djP,C.c5E,C.c5D,C.c5z,C.c5A,C.c5B,C.c5C,C.c5J,C.c5G,C.c5H,C.dPw,C.dPz,C.dPy,C.dPF,C.dPG,C.dBu,C.fyY,C.fyk,C.fFM,C.fyp,C.fyo,C.cWs,C.cWt,C.cWo,C.cu8,C.cua,C.cub,C.cu3,C.cuc,C.f1z,C.fx4,C.eBw,C.eBs,C.eBo,C.eBm,C.eBA,C.fFE,C.eBJ,C.eBS,C.eBN,C.eBO,C.eBX,C.ctr,C.ctp,C.ctq,C.fih,C.fG7,C.fh_,C.bL9,C.bL8,C.bL5,C.bL6,C.bL7,C.f4P,C.f4Q,C.fyb,C.fyc,C.fyd,C.fye,C.fyf,C.fG5,C.fiJ,C.fl6,C.fl7,C.fl9,C.fla,C.fxZ,C.fG0,C.fG1,C.fG2,C.fiq,C.fir,C.fGb,C.fi0,C.fi1,C.fFN,C.flT,C.fxU,C.fl3,C.fl4,C.fxQ,C.f5l,C.f5m,C.f5n,C.f5o,C.f5p,C.f5D,C.f5z,C.f5A,C.f9L,C.f9M,C.fbP,C.fgm,C.fgn])
u(A.au,[C.aWC,C.aj5,C.aSs,C.Xn,C.b8_,C.bcc,C.bfT,C.btp,C.bjb,C.abI,C.bfS,C.abH,C.bfR,C.aA_,C.aGa,C.abJ,C.J_,C.bcd,C.ab_,C.bcb,C.bcg,C.aWA,C.aqI,C.ac3])
u(A.nh,[C.b8B,C.b9M,C.b9D,C.aF2,C.beX,C.bcf,C.bbk,C.bh_,C.bte])
u(A.jq,[C.fzj,C.fzk,C.fzl,C.fzc,C.fzd,C.fzo,C.fzp,C.dCm,C.dC8,C.dCb,C.dBQ,C.dBR,C.dBS,C.dBP,C.dBX,C.dBO,C.dBY,C.dBZ,C.dBN,C.dC_,C.dBM,C.dC0,C.dBL,C.dC1,C.dBD,C.dBE,C.dBK,C.dC2,C.dBI,C.dC3,C.dBH,C.dBT,C.dBG,C.dBU,C.dBC,C.dBV,C.dBW,C.dCn,C.dCo,C.dCc,C.dCd,C.dCe,C.dCf,C.dCg,C.dCh,C.dCi,C.dCu,C.dCl,C.fj3,C.d2f,C.d2d,C.d2e,C.d2g,C.d2U,C.d2J,C.d2G,C.d2i,C.d2K,C.d2o,C.d2p,C.d2r,C.d2I,C.d2n,C.d2t,C.d2R,C.d2D,C.d2C,C.d2E,C.d2F,C.d2y,C.d2A,C.d2B,C.d2u,C.d2N,C.d2Q,C.d2k,C.d2l,C.d4F,C.d4E,C.d4D,C.d4C,C.d4J,C.d4B,C.d4K,C.d39,C.d3a,C.d3b,C.d3e,C.d37,C.d36,C.cCe,C.cVE,C.cVR,C.cVQ,C.cW5,C.cVP,C.cW6,C.cVO,C.cVN,C.cW8,C.cVM,C.cVZ,C.cVY,C.cWf,C.dPJ,C.dPI,C.dPL,C.dPM,C.dPN,C.dPH,C.dPP,C.dPO,C.dP7,C.dP8,C.dPa,C.dOE,C.dOS,C.dOR,C.dOU,C.dP3,C.dOX,C.dOW,C.dOY,C.dOV,C.dOZ,C.dP_,C.dP2,C.dOs,C.dP5,C.dOw,C.dOz,C.dOB,C.dPb,C.dOH,C.dOF,C.dOJ,C.dOK,C.dOG,C.dOL,C.dOP,C.dPk,C.dPl,C.dPd,C.dPg,C.dPh,C.dPi,C.dPn,C.dPe,C.dOC,C.d3i,C.d3h,C.d3m,C.d3w,C.d3n,C.eEn,C.dju,C.djr,C.djs,C.djC,C.djB,C.djA,C.djK,C.djz,C.djL,C.djy,C.djM,C.djx,C.djN,C.djw,C.djv,C.djG,C.djQ,C.djZ,C.dPx,C.dPB,C.dPC,C.dPt,C.dPu,C.dPv,C.dPA,C.dPE,C.dPD,C.dPo,C.dPp,C.dPq,C.dPr,C.dPs,C.dBv,C.fyV,C.cdb,C.cWr,C.cWq,C.cWu,C.cWn,C.cWp,C.cu0,C.cu6,C.cu7,C.cu5,C.cu9,C.cu4,C.cu1,C.cu2,C.cud,C.f1A,C.f1B,C.eBy,C.eBp,C.eBq,C.eBr,C.eBt,C.eBu,C.eBx,C.eBk,C.eBn,C.eBz,C.eBl,C.eBC,C.eBD,C.eBE,C.eBF,C.eBB,C.eBf,C.eBg,C.eBh,C.eBj,C.eBi,C.eBY,C.eBZ,C.eBH,C.eBI,C.eBP,C.eBQ,C.eBR,C.eBL,C.eBM,C.eC4,C.eC3,C.eC5,C.eC2,C.eBG,C.eBK,C.eC0,C.eC_,C.eBV,C.eBW,C.eBU,C.eBT])
u(A.ag,[C.amK,C.RD,C.Y4,C.Y8,C.Y6,C.XF,C.anQ,C.anK,C.YI,C.anO,C.Z2,C.Z3,C.a4U,C.XH,C.XG,C.Xe,C.a_L,C.EP,C.avq,C.aqH,C.aqB,C.aqG,C.N7])
u(A.ah,[C.aB_,C.bc9,C.ay1,C.bcu,C.ay2,C.b9K,C.aBA,C.aBx,C.azZ,C.aBz,C.aBy,C.bhi,C.aJt,C.awO,C.awN,C.avx,C.bth,C.aLC,C.aLD,C.aD3,C.biF,C.aD2,C.bv2])
u(A.kD,[C.dC7,C.dC9,C.dC4,C.dCt,C.fl2,C.bL4,C.d2T,C.d2S,C.d2z,C.d2O,C.d2P,C.d3f,C.dP0,C.dOM,C.dPm,C.d3v,C.d3u,C.d3s,C.d3x,C.d3A,C.d3B,C.d3l,C.d3p,C.d3r,C.d3E,C.c5x,C.c5F,C.c5K,C.dBw,C.fyX,C.fyW,C.f1x,C.f1y,C.eBv,C.eC1,C.cts,C.f96,C.f4R,C.fl8,C.fi2,C.fl5,C.f5C,C.f5B,C.f9N])
t(C.bh0,C.aJt)
u(A.mq,[C.aa2,C.aHP,C.GO,C.aj6,C.ctt,C.ctu])
t(C.btf,C.aLC)
t(C.btg,C.aLD)
t(C.aD4,C.bv2)
t(C.b6s,A.b6h)
t(C.bti,A.a4z)
t(C.b6r,C.bti)
w(C.aJt,A.eQ)
w(C.aLC,A.c8)
w(C.aLD,A.c8)
v(C.bv2,A.eu)
v(C.bti,A.iY)})()
A.kj(b.typeUniverse,JSON.parse('{"aWC":{"au":[],"r":[]},"b8B":{"aB":[]},"amK":{"ag":[],"r":[]},"aB_":{"ah":["amK"]},"RD":{"ag":[],"r":[]},"aj5":{"au":[],"r":[]},"aSs":{"au":[],"r":[]},"bc9":{"ah":["RD"]},"Y4":{"ag":[],"r":[]},"Y8":{"ag":[],"r":[]},"Y6":{"ag":[],"r":[]},"XF":{"ag":[],"r":[]},"ay1":{"ah":["Y4"]},"bcu":{"ah":["Y8"]},"ay2":{"ah":["Y6"]},"Xn":{"au":[],"r":[]},"b9M":{"aB":[]},"b9D":{"aB":[]},"b9K":{"ah":["XF"]},"aF2":{"aB":[]},"beX":{"aB":[]},"b8_":{"au":[],"r":[]},"anQ":{"ag":[],"r":[]},"anK":{"ag":[],"r":[]},"YI":{"ag":[],"r":[]},"abJ":{"au":[],"r":[]},"aBA":{"ah":["anQ"]},"aBx":{"ah":["anK"]},"bcc":{"au":[],"r":[]},"bcf":{"aB":[]},"bfT":{"au":[],"r":[]},"bbk":{"aB":[]},"btp":{"au":[],"r":[]},"bjb":{"au":[],"r":[]},"azZ":{"ah":["YI"]},"abI":{"au":[],"r":[]},"bfS":{"au":[],"r":[]},"abH":{"au":[],"r":[]},"bfR":{"au":[],"r":[]},"aA_":{"au":[],"r":[]},"aGa":{"au":[],"r":[]},"J_":{"au":[],"r":[]},"anO":{"ag":[],"r":[]},"Z2":{"ag":[],"r":[]},"Z3":{"ag":[],"r":[]},"aBz":{"ah":["anO"]},"bcd":{"au":[],"r":[]},"ab_":{"au":[],"r":[]},"bcb":{"au":[],"r":[]},"bcg":{"au":[],"r":[]},"aBy":{"ah":["Z2"]},"bhi":{"ah":["Z3"]},"aWA":{"au":[],"r":[]},"a4U":{"ag":[],"r":[]},"bh0":{"ah":["a4U"]},"bh_":{"aB":[]},"aqI":{"au":[],"r":[]},"XH":{"ag":[],"r":[]},"XG":{"ag":[],"r":[]},"Xe":{"ag":[],"r":[]},"a_L":{"ag":[],"r":[]},"awO":{"ah":["XH"]},"awN":{"ah":["XG"]},"avx":{"ah":["Xe"]},"bth":{"ah":["a_L"]},"EP":{"ag":[],"r":[]},"avq":{"ag":[],"r":[]},"btf":{"ah":["EP"]},"btg":{"ah":["avq"]},"bte":{"aB":[]},"aqH":{"ag":[],"r":[]},"aD3":{"ah":["aqH"]},"ac3":{"au":[],"r":[]},"aqB":{"ag":[],"r":[]},"aqG":{"ag":[],"r":[]},"biF":{"ah":["aqB"]},"aD2":{"ah":["aqG"]},"N7":{"ag":[],"r":[]},"aD4":{"ah":["N7"],"eu":[]},"b6r":{"iY":[],"fd":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aPi"),Q:w("qE"),n:w("br<n,n>"),c5:w("aRc"),dY:w("aRd"),d:w("eN<n?>"),e:w("GN"),B:w("mZ"),P:w("hT"),k:w("kr"),x:w("ax<~>"),f5:w("P<ah0>"),V:w("P<ac>"),t:w("P<qE>"),O:w("P<w>"),ac:w("P<eN<n?>>"),I:w("P<mZ>"),u:w("P<hT>"),_:w("P<kr>"),cl:w("P<ax<ak<a3<n,@>>>>"),R:w("P<n0>"),cq:w("P<ak<+(O,O)>>"),ez:w("P<a3<n,aC>>"),gE:w("P<a3<n,n>>"),c7:w("P<a3<n,@>>"),fD:w("P<mf>"),bp:w("P<o1>"),g:w("P<u>"),v:w("P<hE>"),L:w("P<+(n,n)>"),G:w("P<+(O,O)>"),bF:w("P<+count,id,name(H,n,n)>"),A:w("P<cP>"),s:w("P<n>"),aS:w("P<iN>"),p:w("P<r>"),C:w("P<fd>"),D:w("P<l9>"),fp:w("P<J3>"),M:w("P<Jb>"),gZ:w("P<aF7>"),Y:w("P<adf>"),E:w("P<aH7>"),F:w("P<O>"),dC:w("P<H>"),dS:w("P<aB?>"),d4:w("P<n?>"),J:w("cs<ah<ag>>"),b:w("ak<mZ>"),do:w("ak<hT>"),r:w("ak<kr>"),U:w("ak<a3<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(H,n,n)>"),h:w("ak<n>"),c:w("ak<l9>"),j:w("ak<@>"),fK:w("bu<n,n>"),d2:w("bu<n,ak<a3<n,@>>>"),a:w("a3<n,@>"),f:w("a3<@,@>"),gv:w("J<n,GP>"),w:w("iI"),g2:w("qY"),bV:w("amD"),fL:w("cn"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(O,ak<hT>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bm<O>"),gc:w("dB"),b4:w("cz<H>"),W:w("k7<n>"),l:w("r"),cM:w("fd"),i:w("l9"),cc:w("F1"),bw:w("abH<n?>"),cy:w("Jd"),q:w("mO"),y:w("R"),gR:w("O"),z:w("@"),S:w("H"),eK:w("ak<kr>?"),m:w("anN?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("qg?"),T:w("n?"),aD:w("dB?"),o:w("l9?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUc=new A.bs(B.hb,B.bD,B.hb,B.bD)
D.a8A=new A.bs(B.hb,B.jW,B.hb,B.jW)
D.aUo=new A.bs(B.hN,B.bD,B.bD,B.bD)
D.aUs=new A.aA(B.cY,1.4,B.r,-1)
D.aUC=new A.aA(B.ad,1,B.r,-1)
D.aW_=new A.aZ(0,1/0,64,1/0)
D.aW3=new A.aZ(0,84,0,1/0)
D.avl=w([B.lt,B.qs,B.c],x.O)
D.bOj=new A.a6(B.ax,B.aC,B.x,D.avl,null,null)
D.aWO=new A.o(null,null,null,null,null,D.bOj,B.n)
D.cSo=w([B.aT,B.bT],x.O)
D.bQn=new A.a6(B.b0,B.b4,B.x,D.cSo,null,null)
D.aX8=new A.o(null,null,null,null,null,D.bQn,B.n)
D.b2d=new A.fh(null,null,null,null,null,E.jE,null,null,null,null)
D.a9U=new A.cq(B.A,null,null,D.b2d,null)
D.k5=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eQ_=new A.F(!0,D.k5,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7D=new A.x("No books on the shelf yet.",null,D.eQ_,null,null,null,null,null,null,null,null,null)
D.dZi=new A.C(B.nC,D.f7D,null)
D.b0N=new A.cq(B.A,null,null,D.dZi,null)
D.b1F=new A.cq(B.A,null,null,W.Ux,null)
D.b3C=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b43=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.aaW=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b6C=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b6T=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ac6=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.baw=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.baU=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.DT=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bcq=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.beD=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.adD=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f2m=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bjK=new A.eN(null,D.f2m,B.eZ,null,x.d)
D.faK=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bjM=new A.eN(null,D.faK,B.eZ,null,x.d)
D.bkj=new A.b9(38e5)
D.bl3=new A.i8(0,10,0,10)
D.bld=new A.N(0,1,0,0)
D.bln=new A.i8(0,4,0,4)
D.blF=new A.N(10,10,14,10)
D.blQ=new A.i8(10,4,10,4)
D.blY=new A.i8(10,8,10,8)
D.blZ=new A.N(10,8,8,8)
D.bmq=new A.N(12,6,12,2)
D.bmI=new A.N(14,10,6,6)
D.bmJ=new A.N(14,12,14,0)
D.bmN=new A.N(14,12,14,8)
D.bmQ=new A.N(14,12,8,14)
D.bmU=new A.i8(14,14,14,14)
D.bnz=new A.N(16,2,16,10)
D.bnJ=new A.N(16,6,16,30)
D.bnL=new A.N(16,6,16,8)
D.afX=new A.N(18,16,18,8)
D.bol=new A.N(18,20,18,22)
D.ag0=new A.N(18,24,18,24)
D.bor=new A.N(18,30,18,30)
D.boJ=new A.N(20,10,12,20)
D.boX=new A.N(20,18,16,18)
D.boZ=new A.N(20,18,20,6)
D.bpO=new A.N(24,32,24,28)
D.bpP=new A.N(24,36,24,32)
D.bpT=new A.N(26,26,24,14)
D.bq6=new A.N(2,4,2,8)
D.bqa=new A.N(30,0,30,0)
D.bql=new A.N(38,22,22,22)
D.agh=new A.N(40,24,24,24)
D.bqn=new A.i8(40,40,40,40)
D.bqp=new A.N(46,30,30,30)
D.agk=new A.N(4,0,0,8)
D.bqQ=new A.N(56,40,40,40)
D.bqU=new A.N(1.25,1.25,1.25,1.25)
D.bqV=new A.N(60,0,60,0)
D.bqY=new A.N(6,14,6,16)
D.br9=new A.i8(7,3,7,3)
D.brF=new A.N(5,1.5,5,1.5)
D.brQ=new A.N(6,2.5,6,2.5)
D.fmg=new A.x("Signature",null,B.n9,null,null,null,null,null,null,null,null,null)
D.bsa=new A.bG(1,B.bo,D.fmg,null)
D.fju=new A.x("Tell the AI what to fix",null,B.dI,null,null,null,null,null,null,null,null,null)
D.bsR=new A.bG(1,B.bo,D.fju,null)
D.eX8=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flo=new A.x("Worksheets",null,D.eX8,null,null,null,null,null,null,null,null,null)
D.eXg=new A.F(!0,E.aaw,null,null,null,null,13,B.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkj=new A.x("Track your project spending",null,D.eXg,null,null,null,null,null,null,null,null,null)
D.cKO=w([D.flo,B.au,D.fkj],x.p)
D.bhi=new A.fp(B.ai,B.e,B.j,B.F,null,B.p,null,0,D.cKO,null)
D.bsW=new A.bG(1,B.bo,D.bhi,null)
D.eSv=new A.F(!0,E.jE,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1z=new A.x("FAMILY LIBRARY",null,D.eSv,null,null,null,null,null,null,null,null,null)
D.btd=new A.bG(1,B.bo,D.f1z,null)
D.LB=new C.GN("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Ye=new C.GO(0,"male")
D.aha=new C.GO(1,"female")
D.xh=new C.GO(2,"unknown")
D.ti=new C.aj6(0,"owner")
D.LC=new C.aj6(1,"editor")
D.kb=new C.aj6(2,"viewer")
D.ahW=new A.a_(61199,"MaterialIcons",!1)
D.bw4=new A.a_(61504,"MaterialIcons",!1)
D.bw5=new A.a_(61505,"MaterialIcons",!1)
D.bw7=new A.a_(61587,"MaterialIcons",!1)
D.bwd=new A.a_(61890,"MaterialIcons",!1)
D.bx6=new A.a_(63034,"MaterialIcons",!0)
D.bxW=new A.a_(63429,"MaterialIcons",!1)
D.ak9=new A.a_(984520,"MaterialIcons",!1)
D.bwD=new A.a_(62776,"MaterialIcons",!1)
D.bAi=new A.ae(D.bwD,26,B.aZ,null,null,null)
D.bv3=new A.a_(57648,"MaterialIcons",!1)
D.bAA=new A.ae(D.bv3,14,B.c,null,null,null)
D.bAS=new A.ae(B.F1,17,null,null,null,null)
D.bBn=new A.ae(E.Z6,null,null,null,null,null)
D.bBq=new A.ae(B.j7,18,E.jE,null,null,null)
D.YT=new A.a_(62044,"MaterialIcons",!1)
D.bBw=new A.ae(D.YT,null,B.aT,null,null,null)
D.bCl=new A.ae(B.dS,16,null,null,null,null)
D.bCs=new A.ae(D.YT,32,B.aT,null,null,null)
D.bCK=new A.ae(E.ahX,18,B.cY,null,null,null)
D.bDN=new A.ae(B.Fb,22,B.aE,null,null,null)
D.bDZ=new A.ae(B.dS,22,B.aZ,null,null,null)
D.bE9=new A.ae(O.YY,22,B.c,null,null,null)
D.bEe=new A.ae(B.tq,52,B.c,null,null,null)
D.bEo=new A.ae(B.Fb,30,B.aE,null,null,null)
D.akL=new A.ae(B.tz,22,B.c,null,null,null)
D.bEQ=new A.ae(B.dS,17,null,null,null,null)
D.bF8=new A.ae(B.va,26,B.cY,null,null,null)
D.bFS=new A.ae(B.Zh,16,null,null,null,null)
D.bGB=new A.ae(B.tq,24,B.c,null,null,null)
D.bGG=new A.ae(B.M3,20,B.r_,null,null,null)
D.bGL=new A.ae(B.F_,null,B.bT,null,null,null)
D.bGS=new A.ae(B.j7,18,B.c,null,null,null)
D.bHt=new A.ae(B.cv,22,B.ad,null,null,null)
D.bIi=new A.ae(B.ea,16,B.ad,null,null,null)
D.bIu=new A.ae(D.YT,20,B.aT,null,null,null)
D.alb=new A.ae(B.hw,20,null,null,null,null)
D.bIZ=new A.ae(B.cv,18,D.k5,null,null,null)
D.bJg=new A.ae(B.xE,28,B.c,null,null,null)
D.bJo=new A.ae(B.LU,null,B.fT,null,null,null)
D.bJI=new A.ae(B.xE,24,B.c,null,null,null)
D.bK8=new A.ae(B.tq,null,B.aT,null,null,null)
D.bK9=new A.ae(B.jr,20,B.cY,null,null,null)
D.bKt=new A.ae(B.F1,16,null,null,null,null)
D.bM_=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ev,!0,null,null,null,null)
D.cZi=w([B.bs,B.aT,B.f6,B.aZ],x.O)
D.bMN=new A.a6(B.ax,B.aC,B.x,D.cZi,null,null)
D.bbp=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bgp=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cHP=w([D.bbp,D.bgp],x.O)
D.bMY=new A.a6(B.b0,B.b4,B.x,D.cHP,null,null)
D.cU4=w([B.eW,B.fs,B.f6],x.O)
D.bN1=new A.a6(B.ax,B.aC,B.x,D.cU4,null,null)
D.acD=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b44=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cJJ=w([D.acD,D.b44],x.O)
D.bNA=new A.a6(B.b0,B.b4,B.x,D.cJJ,null,null)
D.b73=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.auK=w([D.b73,D.acD],x.O)
D.bNU=new A.a6(B.ax,B.aC,B.x,D.auK,null,null)
D.abJ=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b90=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cTi=w([D.abJ,D.b90],x.O)
D.bOu=new A.a6(B.a3,B.a7,B.x,D.cTi,null,null)
D.d43=w([B.bL,B.mG],x.O)
D.bOw=new A.a6(B.b0,B.b4,B.x,D.d43,null,null)
D.bbl=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d4V=w([D.bbl,D.k5,D.k5,H.acW],x.O)
D.d71=w([0,0.07,0.9,1],x.F)
D.bP_=new A.a6(B.a3,B.a7,B.x,D.d4V,D.d71,null)
D.bPa=new A.a6(B.ax,B.aC,B.x,B.Pz,null,null)
D.d3F=w([B.aZ,B.aT,B.bT],x.O)
D.bQ9=new A.a6(B.ax,B.aC,B.x,D.d3F,null,null)
D.caw=w([B.bs,B.aZ,B.eW],x.O)
D.caD=w([B.bz,B.aD,B.jh],x.O)
D.caF=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.ba2=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cgJ=w([D.ba2,E.acm],x.O)
D.dV6=new A.u(1,2)
D.eBP=new A.cP(B.aX,D.dV6,3)
D.arX=w([D.eBP],x.A)
D.cnX=w([B.fX,B.c8,B.f5],x.O)
D.cqB=w([B.bI,B.bv,B.bj],x.O)
D.btG=new C.tT("classic","Classic leather","Gold-edged brown leather",D.auK,E.jE,E.jE,"\u2766",B.L,!0,!1,!1,!1)
D.b3p=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bfp=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cMj=w([D.b3p,D.bfp],x.O)
D.acp=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.btB=new C.tT("ornate","Ornate gold","Double gold border and flourishes",D.cMj,D.acp,D.acp,"\u2726",B.L,!0,!0,!0,!1)
D.b6K=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bc4=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cEV=w([D.b6K,D.bc4],x.O)
D.btA=new C.tT("parchment","Parchment","Old paper with dark ink",D.cEV,D.DT,G.il,"\u2767",B.L,!0,!1,!1,!0)
D.aah=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bdY=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d25=w([D.aah,D.bdY],x.O)
D.b9D=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bdm=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.btD=new C.tT("minimal","Clean paper","Plain and elegant, like a printed book",D.d25,D.b9D,D.bdm,"",B.L,!0,!0,!1,!0)
D.btF=new C.tT("midnight","Midnight","Deep blue with silver stars",H.av1,B.cm,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.btz=new C.tT("emerald","Emerald library","Green cloth, title on the left",X.asl,E.jE,B.fY,"\u25c6",B.bg,!0,!1,!1,!1)
D.bek=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d0F=w([B.eG,D.bek],x.O)
D.baF=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bbH=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.btE=new C.tT("rose","Rose vintage","Burgundy with rose-gold lettering",D.d0F,D.baF,D.bbH,"\u2740",B.L,!0,!1,!0,!1)
D.d4y=w([B.cC,H.ob],x.O)
D.btC=new C.tT("modern","Modern","Dark, bold, left-aligned",D.d4y,B.aW,B.c,"",B.bg,!1,!0,!1,!1)
D.a0c=w([D.btG,D.btB,D.btA,D.btD,D.btF,D.btz,D.btE,D.btC],A.az("P<tT>"))
D.cEr=w([B.bT,B.bl],x.O)
D.bbb=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cF6=w([D.aah,D.bbb],x.O)
D.b6H=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cGD=w([D.b6H,B.db],x.O)
D.cI2=w([B.ba,B.iG,B.o5],x.O)
D.cIp=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b40=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b8m=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d6Y=w([D.abJ,D.b40,D.b8m],x.O)
D.btH=new C.tU("leather","Leather",D.d6Y,"vintage")
D.cPe=w([B.dp,B.JZ,N.V1],x.O)
D.btO=new C.tU("midnight","Midnight",D.cPe,"starry")
D.cI3=w([B.fu,B.e8,B.kY],x.O)
D.btN=new C.tU("forest","Forest",D.cI3,"story")
D.d8L=w([B.f0,B.eG,B.k6],x.O)
D.btK=new C.tU("burgundy","Burgundy",D.d8L,"royal")
D.cqb=w([B.aD,B.p6,B.ni],x.O)
D.btL=new C.tU("royal","Royal",D.cqb,"royal")
D.cKj=w([B.bv,B.cC,H.ob],x.O)
D.btI=new C.tU("charcoal","Charcoal",D.cKj,"geo")
D.d75=w([B.cb,B.dN,B.wB],x.O)
D.btM=new C.tU("sunset","Sunset",D.d75,"sunset")
D.d7I=w([B.iG,B.DU,B.V4],x.O)
D.btJ=new C.tU("ocean","Ocean",D.d7I,"band")
D.ya=w([D.btH,D.btO,D.btN,D.btK,D.btL,D.btI,D.btM,D.btJ],A.az("P<tU>"))
D.cKI=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cLd=w([B.ak,B.aJ,B.M],x.O)
D.cMo=w([B.eG,B.e8,B.dp,B.fl,B.wE,B.cY,B.jH,B.es,B.dm],x.O)
D.cMp=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eBQ=new A.cP(B.dl,B.dz,8)
D.cMy=w([D.eBQ],x.A)
D.cNB=w([B.bY,B.dN,B.kx],x.O)
D.cO2=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cPa=w([B.bY,B.hd],x.O)
D.cR4=w([B.aM,B.zW,B.wt],x.O)
D.cRV=w([B.bJ,B.cq,B.dx,B.aM],x.O)
D.cSp=w([B.jj,B.cb,B.rP],x.O)
D.cSS=w([B.eW,B.cY],x.O)
D.cTn=w([B.cy,B.fA,B.hs],x.O)
D.cTy=w([B.aW,B.bl,B.dp],x.O)
D.cU1=w([B.ew,B.d2,B.e8],x.O)
D.cUh=w([B.dT,B.dp,B.JZ],x.O)
D.cVu=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a14=w(["leather","linen","plain","stars","rays"],x.s)
D.bzZ=new A.a_(985219,"MaterialIcons",!1)
D.bzw=new A.a_(983781,"MaterialIcons",!1)
D.auv=w([B.ail,B.hX,B.lz,B.hY,D.bzZ,B.Fl,B.pq,D.bzw,H.ajY,B.xG,B.ps,B.mb],A.az("P<a_>"))
D.a19=w(["double","single","corners","none"],x.s)
D.cY5=w([B.dV,B.bp,B.es],x.O)
D.cYi=w([],x.t)
D.Bt=w([],x.u)
D.d_o=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d1w=w([B.aL,B.fA,B.fl],x.O)
D.d2G=w([B.cr,B.o7,B.VU],x.O)
D.d2U=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dlg=new C.lp("construction","Construction","Jobsite & builds",B.xv)
D.dln=new C.lp("house","Home Build","Houses & rooms",B.tr)
D.dld=new C.lp("grocery","Grocery","Store & pantry",B.ZP)
D.dlc=new C.lp("calculator","Calculations","Math & estimates",B.Me)
D.dll=new C.lp("lumber","Materials","Lumber & supplies",B.Mw)
D.dl9=new C.lp("kitchen","Kitchen","Remodel & meals",A5.aj9)
D.bzt=new A.a_(983756,"MaterialIcons",!1)
D.dle=new C.lp("landscape","Landscaping","Yard & garden",D.bzt)
D.dl8=new C.lp("plumbing","Plumbing","Pipes & water",B.ov)
D.dlo=new C.lp("electrical","Electrical","Wiring & power",B.h5)
D.dl6=new C.lp("store","Retail Shop","Daily business",B.kG)
D.dl7=new C.lp("paint_remodel","Paint & Remodel","Colors & walls",A6.Zn)
D.byT=new A.a_(983311,"MaterialIcons",!1)
D.dlk=new C.lp("roofing","Roofing","Roofs & exteriors",D.byT)
D.bzH=new A.a_(983986,"MaterialIcons",!1)
D.dl5=new C.lp("warehouse","Warehouse","Storage & stock",D.bzH)
D.dli=new C.lp("vehicles","Vehicles","Fleet & transport",B.Fm)
D.bwF=new A.a_(62785,"MaterialIcons",!1)
D.dlb=new C.lp("farm","Farm","Crops & livestock",D.bwF)
D.dla=new C.lp("restaurant","Restaurant","Food & catering",B.ty)
D.dlh=new C.lp("tools","Tools","Workshop gear",B.Fi)
D.dlm=new C.lp("wallet","Cash & Wallet","Quick spending",B.jr)
D.bxR=new A.a_(63395,"MaterialIcons",!1)
D.dlj=new C.lp("concrete","Concrete","Foundation work",D.bxR)
D.dlf=new C.lp("blueprint","Blueprint","Plans & design",Ad.air)
D.a1y=w([D.dlg,D.dln,D.dld,D.dlc,D.dll,D.dl9,D.dle,D.dl8,D.dlo,D.dl6,D.dl7,D.dlk,D.dl5,D.dli,D.dlb,D.dla,D.dlh,D.dlm,D.dlj,D.dlf],A.az("P<lp>"))
D.d3m=w([B.bq,B.bp],x.O)
D.d44=w([B.i3,B.nm,B.dB],x.O)
D.a1G=w(["top","middle","bottom"],x.s)
D.d6n=w([B.cx,B.bl,B.dp],x.O)
D.d6T=w([B.bc,B.d2,B.e8],x.O)
D.d8G=w([B.bI,B.ak],x.O)
D.d8H=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dSO={top:0,middle:1,bottom:2}
D.dbS=new A.br(D.dSO,["Top","Middle","Bottom"],x.n)
D.dSt={double:0,single:1,corners:2,none:3}
D.dbX=new A.br(D.dSt,["Double line","One line","Corners","None"],x.n)
D.dTz={leather:0,linen:1,plain:2,stars:3,rays:4}
D.ddk=new A.br(D.dTz,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.ddw=new A.br(B.ia,[],A.az("br<H,+(n,n)>"))
D.dSG={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.BE=new A.br(D.dSG,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("br<n,H>"))
D.dfP=new F.M0(32,null)
D.dfQ=new F.M0(40,null)
D.dfR=new F.M0(46,null)
D.aDz=new C.aqG(null)
D.dW3=new A.u(8,14)
D.f8g=new A.x("Write a new book",null,B.iU,null,B.L,null,null,null,null,null,null,null)
D.dYK=new A.C(B.lw,D.f8g,null)
D.akm=new A.ae(B.hv,18,B.c,null,null,null)
D.f1U=new A.x("Add",null,B.mr,null,null,null,null,null,null,null,null,null)
D.cS9=w([D.akm,B.pT,D.f1U],x.p)
D.ezN=new A.co(B.aU,B.e,B.Q,B.m,null,B.p,null,0,D.cS9,null)
D.dZ5=new A.C(B.oj,D.ezN,null)
D.dZ6=new A.C(E.aeN,W.Ux,null)
D.eX4=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4S=new A.x("New Project",null,D.eX4,null,null,null,null,null,null,null,null,null)
D.cVQ=w([D.akm,B.ab,D.f4S],x.p)
D.ezQ=new A.co(B.aU,B.e,B.Q,B.m,null,B.p,null,0,D.cVQ,null)
D.dZh=new A.C(B.j5,D.ezQ,null)
D.f74=new A.x("Choose your header",null,R.z0,null,null,null,null,null,null,null,null,null)
D.dZC=new A.C(B.hG,D.f74,null)
D.b2s=new A.fh(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eEr=new A.a5(22,22,D.b2s,null)
D.b0J=new A.cq(B.A,null,null,D.eEr,null)
D.dZH=new A.C(B.WO,D.b0J,null)
D.bn2=new A.N(14,2,14,6)
D.fk3=new A.x("The top of your book. Tap a design to see it.",null,N.a5Y,null,null,null,null,null,null,null,null,null)
D.dZI=new A.C(D.bn2,D.fk3,null)
D.e0e=new A.iL(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e0h=new A.iL(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aEN=new A.iL(1,0.9607843137254902,0.48627450980392156,0)
D.Hl=new A.iL(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yH=new A.iL(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e0n=new A.iL(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fAI=new C.beX(null)
D.bib=new A.m4(D.fAI,null,B.at,null,null)
D.aIq=new A.cK(0,0,0,0,null,null,D.bib,null)
D.emJ=new A.A(-42,42)
D.euO=new A.cL([0,0,1,1])
D.aJH=new A.a9(0,0,520,160)
D.aJU=new A.b7(B.rx,B.Y)
D.fjC=new A.x("Let the AI write it from your tree",null,B.ko,null,B.L,null,null,null,null,null,null,null)
D.buj=new A.dl(1,B.ch,D.fjC,null)
D.cP9=w([E.a_h,B.ab,D.buj],x.p)
D.ezv=new A.co(B.aU,B.e,B.Q,B.m,null,B.p,null,0,D.cP9,null)
D.f1A=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d1L=w([D.alb,B.ab,D.f1A],x.p)
D.ezD=new A.co(B.aU,B.b9,B.j,B.m,null,B.p,null,0,D.d1L,null)
D.bE3=new A.ae(B.hH,14,B.aZ,null,null,null)
D.eRc=new A.F(!0,B.aZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5h=new A.x("Cashier",null,D.eRc,null,null,null,null,null,null,null,null,null)
D.cWk=w([D.bE3,B.bn,D.f5h],x.p)
D.ezF=new A.co(B.aU,B.e,B.Q,B.m,null,B.p,null,0,D.cWk,null)
D.f1B=new A.x("Transfer & settings",null,B.dI,null,null,null,null,null,null,null,null,null)
D.bsI=new A.bG(1,B.bo,D.f1B,null)
D.cHy=w([D.akL,B.aw,D.bsI],x.p)
D.ezG=new A.co(B.aU,B.e,B.j,B.m,null,B.p,null,0,D.cHy,null)
D.eDb=new A.at(16,40)
D.eDg=new A.at(22,64)
D.eDn=new A.at(280,88)
D.eE7=new A.a5(30,null,null,null)
D.eFp=new A.hH(2,12,12,1.05,null)
D.f4Y=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eG7=new A.b1(D.f4Y,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f5c=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aLJ=new A.b1(D.f5c,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fcY=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eGB=new A.b1(D.fcY,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fmO=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eGG=new A.b1(D.fmO,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f72=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eGN=new A.b1(D.f72,null,null,null,null,null,null,null,null,null,null,null,null,B.fN,!1,null,null,null,B.q,null)
D.fkf=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aLN=new A.b1(D.fkf,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f2a=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eHc=new A.b1(D.f2a,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fns=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eHW=new A.b1(D.fns,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fiB=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eIk=new A.b1(D.fiB,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fmS=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eIn=new A.b1(D.fmS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.feu=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eIp=new A.b1(D.feu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f8R=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eIq=new A.b1(D.f8R,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f8S=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eJq=new A.b1(D.f8S,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f5_=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eJI=new A.b1(D.f5_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f6L=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eK0=new A.b1(D.f6L,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fe_=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eKg=new A.b1(D.fe_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f9B=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eKh=new A.b1(D.f9B,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.eNf=new A.F(!0,D.k5,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNF=new A.F(!0,D.k5,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOh=new A.rg(!0,B.r8,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOx=new A.F(!0,D.k5,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP3=new A.F(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a5Z=new A.rg(!0,B.QV,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ2=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQq=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRY=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS1=new A.F(!0,G.il,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTf=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTX=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUE=new A.F(!0,B.bT,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUI=new A.F(!0,B.bL,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV3=new A.F(!0,D.DT,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVc=new A.F(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW9=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWD=new A.F(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX2=new A.F(!0,B.aZ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYs=new A.F(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYA=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNU=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6s=new A.F(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_d=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_B=new A.F(!0,G.il,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_I=new A.F(!0,G.il,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0t=new A.x("Themes",null,B.oM,null,null,null,null,null,null,null,null,null)
D.f13=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eRH=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1q=new A.x("Debt receipt",null,D.eRH,null,B.L,null,null,null,null,null,null,null)
D.aNP=new A.F(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new A.x("Person who owes",null,D.aNP,null,null,null,null,null,null,null,null,null)
D.f2F=new A.x("Notes",null,B.a65,null,null,null,null,null,null,null,null,null)
D.f33=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eQI=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f37=new A.x("Share",null,D.eQI,null,null,null,null,null,null,null,null,null)
D.f4_=new A.x("Move your family trees",null,D.aNU,null,null,null,null,null,null,null,null,null)
D.f4A=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.f5b=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.f6l=new A.x("Remove this book?",null,B.hm,null,null,null,null,null,null,null,null,null)
D.aOj=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f7q=new A.x("What should the AI do?",null,B.dI,null,null,null,null,null,null,null,null,null)
D.f8N=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new A.x("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.eYm=new A.F(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fah=new A.x("NGMY.ORG",null,D.eYm,null,B.L,null,null,null,null,null,null,null)
D.fbw=new A.x("Scan family tree QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.eUW=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eUW,null,B.L,null,null,null,null,null,null,null)
D.fdp=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fdw=new A.x("Thumbnail",null,B.oM,null,null,null,null,null,null,null,null,null)
D.fe5=new A.x("Save the cover",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fev=new A.x("Your photos",null,B.oM,null,null,null,null,null,null,null,null,null)
D.feK=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.ffb=new A.x("Design your cover",null,R.z0,null,null,null,null,null,null,null,null,null)
D.ffh=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.ffk=new A.x("PICTURE",null,I.ms,null,null,null,null,null,null,null,null,null)
D.ffG=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.ffI=new A.x("You can undo it right after.",null,N.Sm,null,null,null,null,null,null,null,null,null)
D.fgc=new A.x("Print",null,B.u8,null,null,null,null,null,null,null,null,null)
D.fgz=new A.x("Amount owed",null,D.aNP,null,null,null,null,null,null,null,null,null)
D.fgM=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fhl=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fho=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fhN=new A.x("Debtor signature",null,B.a65,null,null,null,null,null,null,null,null,null)
D.fhV=new A.x("Change icon",null,E.aN8,null,null,null,null,null,null,null,null,null)
D.fj2=new A.x("Family tree QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fjs=new A.x("Download",null,B.u8,null,null,null,null,null,null,null,null,null)
D.fjw=new A.x("Change",null,B.oM,null,null,null,null,null,null,null,null,null)
D.fkl=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fko=new A.x("WHAT SHOULD IT CHANGE?",null,I.ms,null,null,null,null,null,null,null,null,null)
D.fkY=new A.x("COLOUR",null,I.ms,null,null,null,null,null,null,null,null,null)
D.fl9=new A.x("Do it",null,B.ct,null,null,null,null,null,null,null,null,null)
D.flc=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fma=new A.x("Create Family Tree",null,B.eU,null,null,null,null,null,null,null,null,null)
D.eMe=new A.F(!0,E.jE,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmp=new A.x("Write the first page myself",null,D.eMe,null,null,null,null,null,null,null,null,null)
D.fmV=new A.x("Use this header",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fn0=new A.x("Create Project",null,E.aNA,null,null,null,null,null,null,null,null,null)
D.fxp=new C.aa2(1,"header")
D.a7h=new C.aa2(2,"projects")
D.fxq=new C.aa2(3,"cashier")
D.a7i=new C.aa2(4,"familyTree")
D.fID=new C.ctt(0,"start")
D.fIE=new C.ctu(0,"start")
D.fxI=new C.Xe(null)
D.fyH=new C.XG(null)
D.ddt=new A.br(B.ia,[],A.az("br<n,F1>"))
D.cYD=w([],x.E)
D.cYE=w([],x.M)
D.fzd=new C.bce(D.ddt,D.cYD,D.cYE,0,0,null,null)
D.fBm=new C.Z3(null)
D.a7Z=new C.aHP(0,"projects")
D.aRS=new C.aHP(1,"cashier")
D.fGA=new C.aHP(2,"familyTree")})()};
(a=>{a["feF7CA2wz585XmK5dqbysejEhRI="]=a.current})($__dart_deferred_initializers__);