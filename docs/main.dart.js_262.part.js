((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,G,F,E,Y,Z,A_,A0,A1,A2,M,A3,H,Q,R,S,T,A4,A5,U,A6,A7,V,A8,A9,Aa,K,Ab,Ac,Ad,L,N,C={
byh(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$byh=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ut(null,""),$async$byh)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.O(y.j)
t=A.mB(b1)
s=A.bT(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dA(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dl(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.J)(h),++d){a0=h[d]
f.push(A.D(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.aj(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qg(t,a1,B.h1,E.Di),$async$byh)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ot(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.a9(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.O(l!=null&&A.Jd(l)?y.l:y.i)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Y(r.a(j.h(a2,a7)),q,p):B.cr
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.T(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a00(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byh,v)},
aea(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aea=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ut(null,""),$async$aea)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.O(y.j)
t=A.mB(b6)
s=x.S
r=A.dg(c1,0,A.dL(4,"count",s),A.S(c1).c)
q=F.ffm(new A.I(r,new C.ffy(),r.$ti.k("I<ai.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ad("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.ffx(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.aj(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aea)
case 6:l=c5
k=F.Ot(l==null?"":l)
if(k==null)throw A.O("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alk(s,D.d2B,r.b(k.h(0,"cover"))?A.Y(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dA(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.D(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Q.aj(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aea)
case 10:l=c5
k=l==null?null:F.Ot(l)
if(k==null)throw A.O(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d2(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kJ(a5,a2.k("kJ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a5(a9)
b1=A.aQ(b0.h(a9,"index"))
i=b1==null?null:B.k.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.t(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.t(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.m(0,i,new A.T(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bf<2>")
p=A.cy(new A.bf(h,s),new C.ffz(),s.k("E.E"),p)
p=F.ffm(A.oH(p,3,A.a2(p).k("E.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.z(new A.cu(h,s),s.k("E.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a00(s,b9),$async$aea)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alk(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aea,v)},
h26(d,e,f){return A.cb(null,B.x.j(0.65),!1,null,new C.fou(e,f),d,null,!0,!0,x.g2)},
alk:function alk(d,e,f){this.a=d
this.b=e
this.c=f},
ffy:function ffy(){},
ffx:function ffx(d){this.a=d},
ffz:function ffz(){},
fou:function fou(d,e){this.a=d
this.b=e},
bwg(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bwg=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.bd(b1,new C.f68())){u=null
w=1
break}t=B.d.e7(b1,new C.f69())
s=$.a1()
r=new A.tt()
q=A.JZ(r,D.aFU)
p=A.U()
p.r=B.c.gt(0)
q.bp(D.aFU,p)
o=A.U()
o.r=B.M.gt(0)
o.c=3.6
o.b=B.aj
o.d=B.bZ
o.e=B.fj
n=new C.f6e(t)
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
a3=new A.b_(s.r,B.aw,null,null,p)
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
a3=new A.b_(s.r,B.aw,null,null,p)
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
return A.b(r.qR().B5(520,160),$async$bwg)
case 4:w=3
return A.b(b3.hk(B.fR),$async$bwg)
case 3:b0=b3
u=b0==null?null:J.f6(B.dz.gaK(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bwg,v)},
fdd(d){return C.hFt(d)},
hFt(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fdd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.b9P()
n=d.x!=null&&d.xW(null).length===0
if(d.x!=null)t=n?D.xW:D.Gh
else t=d.gRF()?D.Gh:D.aB7
w=3
return A.b(C.bwg(d.ax),$async$fdd)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ak3(s)
r=A.a1X(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aB7}else{p.c=C.vQ(q,!0)
p.b=n?D.xW:D.Gh}r.a0n(A.fxZ(new C.fdf(p,d,new C.fdg(),t,n,o),null,D.bik,B.uW))
u=r.jy(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fdd,v)},
fjP(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fjP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fdd(d),$async$fjP)
case 3:t=f
s=B.a.i(d.b)
r=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aI(s,r,"_")
if(q.length>40)q=B.a.al(q,0,40)
u=A2.F_(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fjP,v)},
f68:function f68(){},
f69:function f69(){},
f6e:function f6e(d){this.a=d},
fdg:function fdg(){},
fdf:function fdf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fde:function fde(){},
foW(d,e){var w=0,v=A.j(x.H)
var $async$foW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,B.x.j(0.55),!0,null,new C.fp_(new A.cm(null,x.J),e),d,null,!0,!0,x.H),$async$foW)
case 2:return A.h(null,v)}})
return A.i($async$foW,v)},
byJ(d,e,f,g){return C.hMG(d,e,f,g)},
hMG(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$byJ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aE(t)}catch(q){r=null}if(r==null||r.length===0){d.E(x.q).f.P(D.eke)
w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.foS(g,r,f),d,null,!0,!0,x.H),$async$byJ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$byJ,v)},
fp0(d,e){var w=0,v=A.j(x.H)
var $async$fp0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,null,!0,null,new C.fp3(new A.cm(null,x.J),e),d,null,!0,!0,x.H),$async$fp0)
case 2:return A.h(null,v)}})
return A.i($async$fp0,v)},
aUI:function aUI(d,e){this.c=d
this.a=e},
bWR:function bWR(){},
b6F:function b6F(d,e){this.b=d
this.a=e},
fp_:function fp_(d,e){this.a=d
this.b=e},
foX:function foX(d){this.a=d},
foY:function foY(d,e,f){this.a=d
this.b=e
this.c=f},
foZ:function foZ(d,e){this.a=d
this.b=e},
foS:function foS(d,e,f){this.a=d
this.b=e
this.c=f},
foQ:function foQ(d){this.a=d},
foR:function foR(d,e,f){this.a=d
this.b=e
this.c=f},
fp3:function fp3(d,e){this.a=d
this.b=e},
fp1:function fp1(d){this.a=d},
fp2:function fp2(d,e,f){this.a=d
this.b=e
this.c=f},
f8S(d,e){var w=0,v=A.j(x.y),u,t
var $async$f8S=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_A(d),$async$f8S)
case 3:t=g
J.mX(t,new C.f8T(e))
u=A.aeO(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$f8S,v)},
f8T:function f8T(d){this.a=d},
alr:function alr(d,e,f){this.c=d
this.d=e
this.a=f},
azp:function azp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dxi:function dxi(d,e){this.a=d
this.b=e},
dx3:function dx3(d,e){this.a=d
this.b=e},
dx6:function dx6(d,e,f){this.a=d
this.b=e
this.c=f},
dx5:function dx5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dx4:function dx4(d,e){this.a=d
this.b=e},
dx7:function dx7(d,e){this.a=d
this.b=e},
dx1:function dx1(){},
dx2:function dx2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dx0:function dx0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dwM:function dwM(d){this.a=d},
dwN:function dwN(d,e,f){this.a=d
this.b=e
this.c=f},
dwO:function dwO(d,e){this.a=d
this.b=e},
dwL:function dwL(d){this.a=d},
dwT:function dwT(d,e){this.a=d
this.b=e},
dwK:function dwK(d){this.a=d},
dwU:function dwU(d,e,f){this.a=d
this.b=e
this.c=f},
dwV:function dwV(d,e,f){this.a=d
this.b=e
this.c=f},
dwJ:function dwJ(d,e){this.a=d
this.b=e},
dwW:function dwW(d,e,f){this.a=d
this.b=e
this.c=f},
dwI:function dwI(d,e){this.a=d
this.b=e},
dwX:function dwX(d,e){this.a=d
this.b=e},
dwH:function dwH(d){this.a=d},
dwY:function dwY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dwF:function dwF(){},
dwz:function dwz(d){this.a=d},
dwA:function dwA(d){this.a=d},
dwG:function dwG(d,e){this.a=d
this.b=e},
dwZ:function dwZ(d,e){this.a=d
this.b=e},
dwE:function dwE(d){this.a=d},
dx_:function dx_(d){this.a=d},
dwD:function dwD(){},
dwP:function dwP(d,e){this.a=d
this.b=e},
dwC:function dwC(d){this.a=d},
dwQ:function dwQ(d,e,f){this.a=d
this.b=e
this.c=f},
dwB:function dwB(d,e){this.a=d
this.b=e},
dwy:function dwy(d,e){this.a=d
this.b=e},
dwR:function dwR(d){this.a=d},
dwS:function dwS(d,e,f){this.a=d
this.b=e
this.c=f},
dxl:function dxl(){},
dxm:function dxm(d,e){this.a=d
this.b=e},
dxj:function dxj(d){this.a=d},
dxk:function dxk(d){this.a=d},
dxf:function dxf(d,e){this.a=d
this.b=e},
dxg:function dxg(d){this.a=d},
dx8:function dx8(d,e,f){this.a=d
this.b=e
this.c=f},
dx9:function dx9(d,e,f){this.a=d
this.b=e
this.c=f},
dxa:function dxa(d,e,f){this.a=d
this.b=e
this.c=f},
dxb:function dxb(d,e,f){this.a=d
this.b=e
this.c=f},
dxc:function dxc(d,e,f){this.a=d
this.b=e
this.c=f},
dxd:function dxd(d,e,f){this.a=d
this.b=e
this.c=f},
dxe:function dxe(d,e,f){this.a=d
this.b=e
this.c=f},
dxn:function dxn(){},
dxo:function dxo(){},
dxp:function dxp(){},
dxq:function dxq(d){this.a=d},
dxh:function dxh(d,e){this.a=d
this.b=e},
fKF(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bg(J.k(u==null?"":u))
return new C.mI(t,w,v,u==null?new A.N(Date.now(),0,!1):u)},
IZ(d,e){return C.hE9(d,e)},
hE9(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$IZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.av(),$async$IZ)
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
o=A.cy(o,new C.fb5(),o.$ti.k("E.E"),x.B)
n=A.a2(o).k("a3<E.E>")
o=A.z(new A.a3(o,new C.fb6(),n),n.k("E.E"))
B.d.aY(o,new C.fb7())
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
return A.i($async$IZ,v)},
zC(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zC=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.av(),$async$zC)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b3(f,new C.fnC(),x.a)
r=A.z(r,r.$ti.k("ai.E"))
w=4
return A.b(t.an("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.aj(r,null)),$async$zC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zC,v)},
aMP(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aMP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.IZ(d,e),$async$aMP)
case 2:u=h
t=J.cB(u)
s=t.be(u,new C.fve(f))
if(s===-1)t.cj(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zC(d,e,u),$async$aMP)
case 3:return A.h(null,v)}})
return A.i($async$aMP,v)},
bwH(d,e,f){var w=0,v=A.j(x.H),u
var $async$bwH=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.IZ(d,e),$async$bwH)
case 2:u=h
J.mX(u,new C.f8K(f))
w=3
return A.b(C.zC(d,e,u),$async$bwH)
case 3:return A.h(null,v)}})
return A.i($async$bwH,v)},
bwV(d,e){return C.hE8(d,e)},
hE8(a1,a2){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$bwV=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.av(),$async$bwV)
case 7:r=a4
o=B.a.i(a1.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a2))
if(q==null||q.length===0){u=D.Kd
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
k=k==null?null:B.k.M(k)
if(k==null)k=0
if(D.AM.am(0,o.h(0,"foil")))j=A.cJ(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a_A,o.h(0,"position"))?A.cJ(o.h(0,"position")):"middle"
g=B.d.q(D.a_7,o.h(0,"frame"))?A.cJ(o.h(0,"frame")):"double"
f=B.d.q(D.a_2,o.h(0,"texture"))?A.cJ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
o=new C.FT(n,m,l,k,j,i,h,g,f,J.k(e==null?"":e),!J.y(o.h(0,"ribbon"),!1))}else o=D.Kd
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a0=s.pop()
u=D.Kd
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bwV,v)},
a0g(d,e,f){return C.hMc(d,e,f)},
hMc(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a0g=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.av(),$async$a0g)
case 7:r=h
w=8
return A.b(r.an("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.aj(f.ad(),null)),$async$a0g)
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
return A.i($async$a0g,v)},
P2(d,e){return C.hEa(d,e)},
hEa(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$P2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.av(),$async$P2)
case 7:r=g
q=r.rk("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.z(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.IZ(d,e),$async$P2)
case 8:if(!j.ct(g)){n=B.a.i(d.toLowerCase())
m=J.l6(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$P2)
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
return A.i($async$P2,v)},
adx(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P2(d,e),$async$adx)
case 3:s=g
r=J.a5(s)
if(r.gH(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gH(s):"main"
r.G(s,t)
w=5
return A.b(A.av(),$async$adx)
case 5:w=4
return A.b(g.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adx)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adx,v)},
a0e(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0e=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.P2(d,e),$async$a0e)
case 2:s=h
J.hB(s,f)
w=3
return A.b(A.av(),$async$a0e)
case 3:u=h
w=4
return A.b(u.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0e)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0e)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0e)
case 6:return A.h(null,v)}})
return A.i($async$a0e,v)},
mI:function mI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fb5:function fb5(){},
fb6:function fb6(){},
fb7:function fb7(){},
fnC:function fnC(){},
fve:function fve(d){this.a=d},
f8K:function f8K(d){this.a=d},
FT:function FT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bIe:function bIe(d){this.a=d},
hMv(d,e,f,g,h,i,j){return A.a6(d,!1).ct(A.eN(new C.fo7(j,i,f,e,h,g),!0,null,x.H))},
OZ(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$OZ=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P2(h,g),$async$OZ)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.a9(k)>=6){d.E(x.q).f.P(D.aHN)
u=!1
w=1
break}w=4
return A.b(C.h26(d,f,e),$async$OZ)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adx(h,g),$async$OZ)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mI(""+(q+n),l,B.a.i(m.b),new A.N(Date.now(),0,!1)))}w=6
return A.b(C.zC(h,r,p),$async$OZ)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.a0g(h,r,new C.FT("leather",p,"",0,"gold",25,"middle","double","leather","",!0)),$async$OZ)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OZ,v)},
fo7:function fo7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
X2:function X2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aww:function aww(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
cZw:function cZw(d){this.a=d},
cZv:function cZv(d,e){this.a=d
this.b=e},
cZk:function cZk(d,e){this.a=d
this.b=e},
cZh:function cZh(d,e){this.a=d
this.b=e},
cYV:function cYV(d){this.a=d},
cYW:function cYW(d,e){this.a=d
this.b=e},
cZl:function cZl(d){this.a=d},
cZ1:function cZ1(d){this.a=d},
cZ_:function cZ_(d){this.a=d},
cZ0:function cZ0(d){this.a=d},
cZ2:function cZ2(d){this.a=d},
cZi:function cZi(d){this.a=d},
cZj:function cZj(){},
cZ3:function cZ3(d){this.a=d},
cZ4:function cZ4(d,e){this.a=d
this.b=e},
cZu:function cZu(d){this.a=d},
cZt:function cZt(d,e){this.a=d
this.b=e},
cZs:function cZs(d){this.a=d},
cZe:function cZe(d){this.a=d},
cZd:function cZd(d){this.a=d},
cZf:function cZf(d){this.a=d},
cYX:function cYX(d,e){this.a=d
this.b=e},
cZg:function cZg(d,e){this.a=d
this.b=e},
cZ7:function cZ7(d){this.a=d},
cZ8:function cZ8(d){this.a=d},
cZ6:function cZ6(){},
cZ9:function cZ9(d){this.a=d},
cZa:function cZa(d){this.a=d},
cZb:function cZb(d,e){this.a=d
this.b=e},
cZc:function cZc(d,e,f){this.a=d
this.b=e
this.c=f},
cZ5:function cZ5(d,e){this.a=d
this.b=e},
cZn:function cZn(d){this.a=d},
cZm:function cZm(){},
cZo:function cZo(d){this.a=d},
cZp:function cZp(d){this.a=d},
cZq:function cZq(d){this.a=d},
cZr:function cZr(d,e){this.a=d
this.b=e},
cYY:function cYY(d){this.a=d},
cYZ:function cYZ(d){this.a=d},
X6:function X6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bau:function bau(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d_X:function d_X(d){this.a=d},
d_Y:function d_Y(d){this.a=d},
d_W:function d_W(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d_V:function d_V(d){this.a=d},
d0_:function d0_(d){this.a=d},
d_U:function d_U(d){this.a=d},
d00:function d00(d,e){this.a=d
this.b=e},
d_T:function d_T(d,e){this.a=d
this.b=e},
d01:function d01(d,e){this.a=d
this.b=e},
X4:function X4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ac3:function ac3(d,e,f){this.a=d
this.b=e
this.c=f},
awx:function awx(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cZL:function cZL(d,e){this.a=d
this.b=e},
cZK:function cZK(d,e){this.a=d
this.b=e},
cZP:function cZP(d){this.a=d},
cZO:function cZO(d,e){this.a=d
this.b=e},
cZM:function cZM(d){this.a=d},
cZN:function cZN(d){this.a=d},
cZQ:function cZQ(d){this.a=d},
cZR:function cZR(d){this.a=d},
cZJ:function cZJ(d,e){this.a=d
this.b=e},
cZI:function cZI(d,e){this.a=d
this.b=e},
NM:function NM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wk:function Wk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cyn:function cyn(d){this.a=d},
cyo:function cyo(){},
cyp:function cyp(d){this.a=d},
b7Q:function b7Q(d,e,f){this.b=d
this.c=e
this.a=f},
b7H:function b7H(d,e){this.b=d
this.a=e},
tv:function tv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WD:function WD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7O:function b7O(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cRP:function cRP(d,e,f){this.a=d
this.b=e
this.c=f},
cRO:function cRO(d,e){this.a=d
this.b=e},
cSd:function cSd(d){this.a=d},
cS0:function cS0(){},
cSe:function cSe(d){this.a=d},
cS_:function cS_(){},
cSf:function cSf(d,e){this.a=d
this.b=e},
cRZ:function cRZ(d,e){this.a=d
this.b=e},
cSg:function cSg(d,e){this.a=d
this.b=e},
cRY:function cRY(d,e){this.a=d
this.b=e},
cSh:function cSh(d){this.a=d},
cRX:function cRX(){},
cSi:function cSi(d,e){this.a=d
this.b=e},
cRW:function cRW(d,e){this.a=d
this.b=e},
cSj:function cSj(d){this.a=d},
cS8:function cS8(d,e){this.a=d
this.b=e},
cSk:function cSk(d){this.a=d},
cSl:function cSl(d){this.a=d},
cSn:function cSn(d){this.a=d},
cSo:function cSo(d){this.a=d},
cS7:function cS7(d,e){this.a=d
this.b=e},
cSp:function cSp(d,e){this.a=d
this.b=e},
aDl:function aDl(d){this.a=d},
bcX:function bcX(d){this.a=d},
b63:function b63(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
hD9(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aeZ(a6),a5=a4.length
if(a5===0)return""
w=A.Q(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bv(new A.N(Date.now(),0,!1))
s=new C.f9i(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.S(a4),p=q.k("a3<1>"),q=q.k("cR<1,n>"),o=q.k("E.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wB)m.push(l===D.Wi?"male":"female")
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
m.push("child of "+l+k)}a0=A.z(new A.cR(new A.a3(a4,new C.f9g(u,f),p),new C.f9h(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.al(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hDa(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aeZ(a0),d=e.length
if(d===0)return""
w=x.N
v=A.Q(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.f9n(v,e)
q=new C.f9l(v)
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
p.m(0,s.a,d)}}d=p.$ti.k("bf<2>")
d=A.d8(new A.bf(p,d),d.k("E.E"))
n=A.z(d,A.a2(d).k("cj.E"))
B.d.fu(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.hY(l,new C.f9m(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hpu(d,e,f,g){var w,v,u=C.hDb(d,e)
if(u<=0||f.length<=u)return new A.abF(!1,D.AA,f)
if(g.q(0,e.a))return new A.abF(!1,D.AA,f)
w=A.S(f).c
v=A.dg(f,0,A.dL(u,"count",x.S),w).dz(0)
return new A.abF(!0,A.dg(f,u,null,w).dz(0),v)},
hpv(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aeZ(d3),d2=d1.length
if(d2===0)return D.f1s
w=x.N
v=A.Q(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.ci(0,t.a,new C.cZY(t))}s=new C.d_e(v)
d2=x.h
r=A.Q(w,d2)
q=new C.d_6(r)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d_5(r)
l=A.Q(w,x.do)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.ci(0,k,new C.cZZ()),o)}h=new C.d_4(s)
g=new C.d_3(l,r)
p=v.$ti.k("bf<2>")
o=p.k("a3<E.E>")
f=A.z(new A.a3(new A.bf(v,p),new C.d__(h),o),o.k("E.E"))
e=f.length===0?new A.bf(v,p).gI(0):B.d.gI(f)
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
a9=new C.d_c(new C.d_8(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.Q(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dv(v,v.r,v.e),j=a2.gah4(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eM([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.G(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qC(J.dF(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.Q(w,x.cc)
b5=A.a([],x.M)
b6=A.Q(w,d2)
b7=new C.cZX(a2,new C.d_d(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.J)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dv(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cu<1>")
d2=A.z(new A.cu(b4,d2),d2.k("E.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.Ec(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ie(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.z(new A.cu(b6,d2),d2.k("E.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bD(0,new C.d_0(c6,b4))
for(d2=new A.cM(a4,a4.$ti.k("cM<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.hY(j,new C.d_1(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aY(o,new C.d_2())
c6.push(new C.aFq(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bae(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
fYW(d){var w=A.ad("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fTs(d,e,f,g,h,i,j,k,l,m,n){return new C.XG(k,f,j,e,l,n,m,d,g,h,i,null)},
ayq(d,e,f,g,h,i,j){return new C.bdT(i,d,e,f,j,h,g,null)},
amx:function amx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA_:function aA_(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dKb:function dKb(d){this.a=d},
dKa:function dKa(d){this.a=d},
dKd:function dKd(d,e){this.a=d
this.b=e},
dKe:function dKe(d,e){this.a=d
this.b=e},
dKf:function dKf(d){this.a=d},
dK9:function dK9(d,e){this.a=d
this.b=e},
dKc:function dKc(d){this.a=d},
dKh:function dKh(d){this.a=d},
dKg:function dKg(d,e){this.a=d
this.b=e},
amr:function amr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azX:function azX(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dJC:function dJC(d){this.a=d},
dJA:function dJA(d){this.a=d},
dJB:function dJB(d){this.a=d},
dJD:function dJD(d,e){this.a=d
this.b=e},
dJx:function dJx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJ5:function dJ5(d){this.a=d},
dJ6:function dJ6(d,e){this.a=d
this.b=e},
dJk:function dJk(d){this.a=d},
dJi:function dJi(d){this.a=d},
dJj:function dJj(d,e){this.a=d
this.b=e},
dJl:function dJl(d){this.a=d},
dJm:function dJm(d,e){this.a=d
this.b=e},
dJw:function dJw(d,e){this.a=d
this.b=e},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJt:function dJt(d,e){this.a=d
this.b=e},
dJp:function dJp(d,e){this.a=d
this.b=e},
dJo:function dJo(d){this.a=d},
dJq:function dJq(d,e){this.a=d
this.b=e},
dJn:function dJn(d){this.a=d},
dJr:function dJr(d){this.a=d},
dJs:function dJs(d){this.a=d},
dJv:function dJv(d,e){this.a=d
this.b=e},
dIU:function dIU(d,e){this.a=d
this.b=e},
dIV:function dIV(d,e){this.a=d
this.b=e},
dJF:function dJF(d,e,f){this.a=d
this.b=e
this.c=f},
dJz:function dJz(d,e,f){this.a=d
this.b=e
this.c=f},
dJy:function dJy(d){this.a=d},
dIW:function dIW(d){this.a=d},
dIX:function dIX(d){this.a=d},
dIY:function dIY(){},
dIZ:function dIZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJ2:function dJ2(d,e){this.a=d
this.b=e},
dJ1:function dJ1(d,e){this.a=d
this.b=e},
dJ0:function dJ0(d){this.a=d},
dJ3:function dJ3(d,e){this.a=d
this.b=e},
dJ_:function dJ_(d){this.a=d},
dJE:function dJE(d){this.a=d},
dJf:function dJf(){},
dJg:function dJg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJe:function dJe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJa:function dJa(d,e,f){this.a=d
this.b=e
this.c=f},
dJ9:function dJ9(d,e,f){this.a=d
this.b=e
this.c=f},
dJ7:function dJ7(d,e){this.a=d
this.b=e},
dJb:function dJb(d){this.a=d},
dJc:function dJc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJ8:function dJ8(d,e){this.a=d
this.b=e},
dJd:function dJd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJh:function dJh(d,e){this.a=d
this.b=e},
dJM:function dJM(){},
dJN:function dJN(d,e){this.a=d
this.b=e},
dJO:function dJO(d){this.a=d},
dJP:function dJP(d,e){this.a=d
this.b=e},
dJI:function dJI(d){this.a=d},
dJG:function dJG(d,e){this.a=d
this.b=e},
dJJ:function dJJ(d,e){this.a=d
this.b=e},
dJK:function dJK(d,e){this.a=d
this.b=e},
dJL:function dJL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dJQ:function dJQ(d){this.a=d},
dJH:function dJH(d){this.a=d},
dJ4:function dJ4(d){this.a=d},
bac:function bac(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cZV:function cZV(d){this.a=d},
cZU:function cZU(d,e){this.a=d
this.b=e},
cZW:function cZW(d){this.a=d},
cZT:function cZT(d,e){this.a=d
this.b=e},
f9i:function f9i(d,e){this.a=d
this.b=e},
f9j:function f9j(d){this.a=d},
f9k:function f9k(){},
f9g:function f9g(d,e){this.a=d
this.b=e},
f9h:function f9h(){},
f9n:function f9n(d,e){this.a=d
this.b=e},
f9o:function f9o(d){this.a=d},
f9p:function f9p(){},
f9l:function f9l(d){this.a=d},
f9m:function f9m(d,e){this.a=d
this.b=e},
Ie:function Ie(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ec:function Ec(d,e){this.a=d
this.b=e},
bae:function bae(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cZY:function cZY(d){this.a=d},
d_e:function d_e(d){this.a=d},
d_6:function d_6(d){this.a=d},
d_7:function d_7(){},
d_5:function d_5(d){this.a=d},
cZZ:function cZZ(){},
d_4:function d_4(d){this.a=d},
d_3:function d_3(d,e){this.a=d
this.b=e},
d__:function d__(d){this.a=d},
d_8:function d_8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_9:function d_9(d){this.a=d},
d_a:function d_a(d){this.a=d},
d_b:function d_b(){},
d_c:function d_c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_d:function d_d(){},
cZX:function cZX(d,e,f,g,h,i,j,k,l,m){var _=this
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
d_0:function d_0(d,e){this.a=d
this.b=e},
d_1:function d_1(d){this.a=d},
d_2:function d_2(){},
aFq:function aFq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baf:function baf(d,e){this.b=d
this.a=e},
d_f:function d_f(){},
d_g:function d_g(d){this.a=d},
d_h:function d_h(d){this.a=d},
d_i:function d_i(){},
bdU:function bdU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9l:function b9l(d,e){this.b=d
this.a=e},
brg:function brg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eUk:function eUk(d){this.a=d},
bh9:function bh9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ew_:function ew_(d){this.a=d},
evZ:function evZ(d,e){this.a=d
this.b=e},
XG:function XG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayo:function ayo(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
der:function der(d,e){this.a=d
this.b=e},
deq:function deq(d){this.a=d},
deo:function deo(d){this.a=d},
dep:function dep(d){this.a=d},
deA:function deA(d){this.a=d},
deB:function deB(d){this.a=d},
dez:function dez(d,e){this.a=d
this.b=e},
deC:function deC(){},
deF:function deF(d){this.a=d},
dey:function dey(d,e){this.a=d
this.b=e},
deE:function deE(){},
deG:function deG(d){this.a=d},
dex:function dex(d,e){this.a=d
this.b=e},
deH:function deH(d){this.a=d},
dew:function dew(d){this.a=d},
deI:function deI(d){this.a=d},
dev:function dev(d){this.a=d},
deJ:function deJ(d){this.a=d},
deu:function deu(d){this.a=d},
deK:function deK(d){this.a=d},
det:function det(d){this.a=d},
deL:function deL(d){this.a=d},
des:function des(d,e){this.a=d
this.b=e},
deD:function deD(d){this.a=d},
aax:function aax(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdT:function bdT(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaw:function aaw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bdS:function bdS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
deM:function deM(d){this.a=d},
deN:function deN(d,e){this.a=d
this.b=e},
ayp:function ayp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEt:function aEt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aay:function aay(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
deW:function deW(d){this.a=d},
I3:function I3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fOs(d){var w=d.R,v=x.N
return w.iC(w,new C.c2l(),v,v)},
hh9(d){var w=d.bx
if(w>=0)return w
return 5},
fOu(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fOs(d).h(0,v)
if(w==null||w.length===0)return null
return A.bg(w)},
fOt(d,e){var w=C.fOu(d,e)
if(w!=null&&w.ca(new A.N(Date.now(),0,!1)))return!0
return!1},
hha(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Y(C.fOs(d),w,w)
u=C.fOu(d,e)
t=u!=null&&u.ca(new A.N(Date.now(),0,!1))?u:new A.N(Date.now(),0,!1)
v.m(0,s,t.bL(A.dB(30,0,0,0,0,0).a).a4().aa())
d.R=v},
aW7(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aW7=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.kY(t,B.G5),$async$aW7)
case 3:if(l){u=!0
w=1
break}u=A.kD(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.G5,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aW7,v)},
c2l:function c2l(){},
hh7(){var w,v=$.oW(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aF(32)]
return"FT"+B.d.fL(u)},
GM(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$GM)
case 3:if(!e){u=A.Q(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_family_tree_backup_codes_v1",null,!1,B.bE),$async$GM)
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
p=A.a4(m)
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
return A.i($async$GM,v)},
a4K(d){return C.hh8(d)},
hh8(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a4K=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$a4K)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_family_tree_backup_codes_v1",A.D(["codes",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$a4K)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a4(p)
$.ak.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a4K,v)},
c2k(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c2k=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GM(),$async$c2k)
case 3:t=m.jj(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a5(q)
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
return A.i($async$c2k,v)},
Lx(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Lx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c2k(d),$async$Lx)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.GM(),$async$Lx)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dQ(A.Y(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,t,o)
w=9
return A.b(C.a4K(s),$async$Lx)
case 9:case 8:u=t
w=1
break
case 5:n=C.hh7()
w=10
return A.b(C.GM(),$async$Lx)
case 10:s=f
J.aE(s,n,A.D(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=11
return A.b(C.a4K(s),$async$Lx)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lx,v)},
aW6(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aW6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GM(),$async$aW6)
case 3:t=f
for(s=J.dd(t),r=s.gdH(t),r=r.dz(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a4K(t),$async$aW6)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aW6,v)},
a4L(d,e,f){var w=0,v=A.j(x.H),u
var $async$a4L=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amw(d,e),$async$a4L)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Lx(d),$async$a4L)
case 7:w=4
break
case 5:w=8
return A.b(C.aW6(d),$async$a4L)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a4L,v)},
amq(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amq=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amw(f,e),$async$amq)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bY(),$async$amq)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GM(),$async$amq)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a5(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amq,v)},
aW5(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aW5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bY(),$async$aW5)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GM(),$async$aW5)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a5(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aW5,v)},
hhb(){var w,v=$.oW(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aF(32)]
return"FT"+B.d.fL(u)},
amt(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$amt)
case 3:if(!g){u=null
w=1
break}t=C.hhb()
w=4
return A.b(A.SW(),$async$amt)
case 4:s=g
r=B.dB.aE(B.Q.aj(d.eD(),null))
r=B.cL.gcq().aE(r)
q=e?999:2
J.aE(s,t,A.D(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(A.a4M(s),$async$amt)
case 5:p=e?999:2
u=new A.YQ("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amt,v)},
ams(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ams=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.SW(),$async$ams)
case 3:p=a0
o=J.a5(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a5(n)
l=A.aQ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aW5(J.k(l==null?"":l),j),$async$ams)
case 4:if(!a0)$.ak.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{r=B.c0.c4(0,B.cw.aE(t))
s=C.fOv(r)}catch(f){q=A.a4(f)
$.ak.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dQ(A.Y(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=5
return A.b(A.a4M(p),$async$ams)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ams,v)},
fOv(d){var w,v,u,t,s=null
try{w=B.Q.aC(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hhd(A.Y(w,x.N,x.z))
return u}catch(t){v=A.a4(t)
$.ak.$1("[family tree sync] parse: "+A.t(v))
return s}},
fz3(d){var w=0,v=A.j(x.m),u,t,s
var $async$fz3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ams(t[1])
w=1
break}u=null
w=1
break}u=C.fOv(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fz3,v)},
hhd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d2(v,x.f)
u=A.cy(u,new C.c2n(),u.$ti.k("E.E"),x.k)
t=A.a2(u).k("a3<E.E>")
s=A.z(new A.a3(u,new C.c2o(),t),t.k("E.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bg(J.k(u==null?"":u))
if(r==null)r=new A.N(Date.now(),0,!1)
q=A.Q(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jj(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d2(l,u)
n=A.cy(n,new C.c2p(),n.$ti.k("E.E"),o)
k=A.a2(n).k("a3<E.E>")
j=A.z(new A.a3(n,new C.c2q(),k),k.k("E.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amu(h,w,s,r,q)},
amw(d,e){var w=0,v=A.j(x.y),u,t
var $async$amw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Lp(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zt(d),$async$amw)
case 3:u=t.ct(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amw,v)},
c2w(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c2w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zt(d),$async$c2w)
case 3:t=s.b3(f,new C.c2x(),x.cs)
t=A.z(t,t.$ti.k("ai.E"))
B.d.aY(t,new C.c2y())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2w,v)},
SX(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$SX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amw(e,d),$async$SX)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Lx(e),$async$SX)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zt(e),$async$SX)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dF(r,new C.c2u(g))
r=A.z(t,t.$ti.k("E.E"))}t=J.a5(r)
if(t.gah(r)){u=null
w=1
break}t=t.di(r,new C.c2v(e),x.k)
r=A.z(t,t.$ti.k("ai.E"))
q=A.Q(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.IZ(e,o),$async$SX)
case 14:n=i
if(J.ct(n))q.m(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.amu(s,B.a.i(e.toLowerCase()),r,new A.N(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SX,v)},
aWa(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWa=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SX(d,e,f,g),$async$aWa)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aI(t,s,"_")
r=q.a
u=A.EQ(A.Ia(q.eD(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWa,v)},
aW9(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aW9=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SX(d,e,f,g),$async$aW9)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amt(r,f),$async$aW9)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCu(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aW9,v)},
SY(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SY=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fz3(a0),$async$SY)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amq(g.a,d,e,f,s,r),$async$SY)
case 6:if(!a2){if(r)throw A.O(A.b9("This backup expired or the sender's tree is no longer available."))
throw A.O(A.b9("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bwy(e,j),$async$SY)
case 12:case 11:w=13
return A.b(C.aeM(e,j,s),$async$SY)
case 13:h=n.h(0,i)
w=h!=null&&J.ct(h)?14:15
break
case 14:w=16
return A.b(C.zC(e,i,h),$async$SY)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bkE(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SY,v)},
amu:function amu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2s:function c2s(){},
c2t:function c2t(){},
c2r:function c2r(){},
c2n:function c2n(){},
c2o:function c2o(){},
c2p:function c2p(){},
c2q:function c2q(){},
c2x:function c2x(){},
c2y:function c2y(){},
c2u:function c2u(d){this.a=d},
c2v:function c2v(d){this.a=d},
fH0(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f2(null,x.H)
return A.hl(d,new C.amv(w,e,g,i,f,h,null),!0,null,x.H)},
cZS(d,e,f,g,h,i,j,k){return new C.bab(i,e,k,j,g,f,h,d,null)},
amv:function amv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azZ:function azZ(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dJZ:function dJZ(d){this.a=d},
dK_:function dK_(d,e,f){this.a=d
this.b=e
this.c=f},
dK3:function dK3(d,e){this.a=d
this.b=e},
dK4:function dK4(d){this.a=d},
dJW:function dJW(d){this.a=d},
dJX:function dJX(d,e){this.a=d
this.b=e},
dJY:function dJY(d,e){this.a=d
this.b=e},
dK2:function dK2(d){this.a=d},
dK1:function dK1(d,e){this.a=d
this.b=e},
dK0:function dK0(){},
dK6:function dK6(d){this.a=d},
dK7:function dK7(d,e){this.a=d
this.b=e},
dK5:function dK5(d,e){this.a=d
this.b=e},
d_j:function d_j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bad:function bad(d,e,f){this.d=d
this.e=e
this.a=f},
a9P:function a9P(d,e,f){this.c=d
this.d=e
this.a=f},
bab:function bab(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bag:function bag(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y0:function Y0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azY:function azY(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dJR:function dJR(d,e){this.a=d
this.b=e},
dJS:function dJS(d){this.a=d},
dJT:function dJT(d){this.a=d},
dJU:function dJU(d){this.a=d},
dJV:function dJV(d){this.a=d},
Y1:function Y1(d){this.a=d},
bfi:function bfi(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dK8:function dK8(d,e){this.a=d
this.b=e},
aUH(d,e){return new C.aUG(d,e,null)},
aUG:function aUG(d,e,f){this.c=d
this.d=e
this.a=f},
hFy(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
hMF(d){return A.c1(B.K,new C.foB(new C.t1(A.K(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fQj(d,e){return new C.apj(e,d,null)},
aMw(d,e,f,g,h,i,j){var w=C.hFy(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a3P(w,!0,null),null),B.ap)
return I.aLT(e,B.bM,f,g,h,i,j)},
le:function le(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3P:function a3P(d,e,f){this.c=d
this.d=e
this.a=f},
bf1:function bf1(d,e){var _=this
_.e=_.d=$
_.cN$=d
_.aX$=e
_.c=_.a=null},
dwq:function dwq(d){this.a=d},
dwr:function dwr(){},
dws:function dws(d,e){this.a=d
this.b=e},
bf0:function bf0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
foB:function foB(d){this.a=d},
foA:function foA(d,e){this.a=d
this.b=e},
foz:function foz(d,e){this.a=d
this.b=e},
foy:function foy(d,e){this.a=d
this.b=e},
apj:function apj(d,e,f){this.c=d
this.d=e
this.a=f},
c9V:function c9V(d,e){this.a=d
this.b=e},
aHK:function aHK(){},
hMq(d){var w=null
return A.cb(w,w,!0,w,new C.fo_(),d,w,!0,!0,x.e2)},
hNA(d,e,f,g,h){var w=null
return A.cb(w,w,!0,w,new C.fv6(h,g,f,e),d,w,!0,!0,x.N)},
hMs(d,e){var w=null
return A.cb(w,w,!0,w,new C.fo1(e),d,w,!0,!0,x.dY)},
hMr(d){var w=null
return A.cb(w,w,!0,w,new C.fo0(),d,w,!0,!0,x.c5)},
aPn:function aPn(d,e){this.a=d
this.b=e},
aPm:function aPm(d){this.a=d},
aNr:function aNr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fo_:function fo_(){},
fv6:function fv6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fo1:function fo1(d){this.a=d},
fo0:function fo0(){},
WF:function WF(d,e){this.c=d
this.a=e},
avj:function avj(){var _=this
_.d=$
_.c=_.a=_.e=null},
cSB:function cSB(d){this.a=d},
cSC:function cSC(d){this.a=d},
cSA:function cSA(d,e){this.a=d
this.b=e},
cSD:function cSD(d){this.a=d},
cSE:function cSE(d){this.a=d},
WE:function WE(d){this.a=d},
avi:function avi(){this.d=$
this.c=this.a=null},
cSx:function cSx(d){this.a=d},
cSy:function cSy(d){this.a=d},
cSz:function cSz(d){this.a=d},
Wb:function Wb(d){this.a=d},
au4:function au4(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cq8:function cq8(){},
cqe:function cqe(d){this.a=d},
cqf:function cqf(d){this.a=d},
cqg:function cqg(d){this.a=d},
cqd:function cqd(){},
cqh:function cqh(d){this.a=d},
cqi:function cqi(d){this.a=d},
cqc:function cqc(){},
cqj:function cqj(d,e){this.a=d
this.b=e},
cqb:function cqb(d,e){this.a=d
this.b=e},
cq9:function cq9(d,e){this.a=d
this.b=e},
cqk:function cqk(d){this.a=d},
cqa:function cqa(){},
cql:function cql(d){this.a=d},
ZI:function ZI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
br8:function br8(){this.d=$
this.c=this.a=null},
eTN:function eTN(d,e){this.a=d
this.b=e},
eTO:function eTO(d){this.a=d},
eTP:function eTP(d,e){this.a=d
this.b=e},
a8T:function a8T(d,e){this.a=d
this.b=e},
E0:function E0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
br6:function br6(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eTL:function eTL(d,e){this.a=d
this.b=e},
atY:function atY(d,e){this.c=d
this.a=e},
br7:function br7(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eTM:function eTM(d){this.a=d},
br5:function br5(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aJQ:function aJQ(){},
aJR:function aJR(){},
bym(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bK(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.oV(B.o.u(t),A.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fmT(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.ds(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.ds(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.ds(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aU(B.o.u(s),2,"0")
n.push(A.ds(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VB(A.ds(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aM9(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aM9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hP().kA(85,1280,B.er),$async$aM9)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aM9)
case 8:r=e
if(J.a9(r)===0){u=null
w=1
break}q=C.fQi()
w=9
return A.b(C.c9U(q,r),$async$aM9)
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
return A.i($async$aM9,v)},
aMu(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aMu=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.c9R(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gai(g.split(",")):g
p=B.cw.aE(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.a1().JW(p,!0,null,i).cI(0,B.fC),$async$aMu)
case 9:n=a1
w=10
return A.b(n.mg(),$async$aMu)
case 10:m=a1
w=11
return A.b(J.aNd(m).hk(B.fR),$async$aMu)
case 11:l=a1
J.aNd(m).p()
if(l==null){w=8
break}i=J.f6(B.dz.gaK(l))
k="data:image/png;base64,"+B.cL.gcq().aE(i)
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
return A.i($async$aMu,v)},
fmT:function fmT(){},
t1:function t1(d){this.a=d},
api:function api(d,e,f){this.c=d
this.d=e
this.a=f},
aBo:function aBo(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
et9:function et9(d,e){this.a=d
this.b=e},
et0:function et0(d){this.a=d},
et1:function et1(d){this.a=d},
et7:function et7(d,e){this.a=d
this.b=e},
et6:function et6(d,e){this.a=d
this.b=e},
et3:function et3(d,e){this.a=d
this.b=e},
et2:function et2(d,e){this.a=d
this.b=e},
et4:function et4(d){this.a=d},
et5:function et5(d,e){this.a=d
this.b=e},
et8:function et8(d,e){this.a=d
this.b=e},
esW:function esW(d,e){this.a=d
this.b=e},
et_:function et_(d){this.a=d},
esZ:function esZ(d,e){this.a=d
this.b=e},
esY:function esY(d){this.a=d},
eta:function eta(d,e){this.a=d
this.b=e},
etb:function etb(d,e){this.a=d
this.b=e},
esX:function esX(d,e){this.a=d
this.b=e},
h1D(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.D(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.N(Date.now(),0,!1).a4().aa(),"project",v],x.N,x.z)},
fmU(d,e,f){var w=0,v=A.j(x.N),u
var $async$fmU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.aj(C.h1D(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fmU,v)},
byo(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fmU(!0,d,e),$async$byo)
case 4:w=3
return A.b(r.apg(g,d,e.a),$async$byo)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dB.aE(B.Q.aj(C.h1D(d,e,null),null))
u="NGMY_WS:"+B.jP.gcq().aE(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byo,v)},
fUN(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fGJ(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.a9(s)===0)return!1
if(J.cT(s,"NGMYWSSYNC2|"))return!0
if(J.cT(s,"NGMY_WS:"))return!0
if(J.eR(s,t))return!0
if(J.cT(s,"{"))try{w=B.Q.aC(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hKx(d){var w,v,u,t=C.fUN(d)
if(t==null)return null
if(C.fGJ(t))return t
w=B.a.cO(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.fGJ(v))return v}u=B.a.cO(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.fGJ(v))return v}return null},
fGI(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.a9(q)===0)return r
if(J.cT(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cT(q,"NGMY_WS:")){v=B.c0.c4(0,B.cw.aE(J.mc(q,8)))
w=t.a(B.Q.aC(0,v,r))}else w=t.a(B.Q.aC(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fBy(A.Y(u,x.N,x.z))
return t}catch(s){return r}},
byn(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$byn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apf(t[1]),$async$byn)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fGI(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fGI(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byn,v)},
fGH(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l0(w,v,d.c,d.d,new A.N(Date.now(),0,!1))},
bxW(){var w=0,v=A.j(x.o),u,t
var $async$bxW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.F0(),$async$bxW)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fGI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxW,v)},
h2t(d,e,f,g){return A.c1(B.K,new C.fuZ(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fuZ:function fuZ(d,e,f){this.a=d
this.b=e
this.c=f},
aaT:function aaT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
etd:function etd(d,e){this.a=d
this.b=e},
ete:function ete(d,e){this.a=d
this.b=e},
etf:function etf(d,e){this.a=d
this.b=e},
etg:function etg(d,e){this.a=d
this.b=e},
etc:function etc(d){this.a=d},
apc:function apc(d,e,f){this.c=d
this.d=e
this.a=f},
bgD:function bgD(){var _=this
_.c=_.a=_.e=_.d=null},
esR:function esR(d,e){this.a=d
this.b=e},
esS:function esS(d){this.a=d},
esT:function esT(d){this.a=d},
aph:function aph(d){this.a=d},
aBn:function aBn(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
esV:function esV(d){this.a=d},
esU:function esU(d){this.a=d},
hkk(d,e,f,g,h){return new C.M9(h,g,d,e,f,null)},
aG7:function aG7(d,e){this.a=d
this.b=e},
M9:function M9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBp:function aBp(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
etD:function etD(){},
etz:function etz(d,e){this.a=d
this.b=e},
etA:function etA(d){this.a=d},
etk:function etk(d){this.a=d},
eti:function eti(d){this.a=d},
etj:function etj(d){this.a=d},
ett:function ett(d,e){this.a=d
this.b=e},
etq:function etq(d,e){this.a=d
this.b=e},
etr:function etr(d,e){this.a=d
this.b=e},
ets:function ets(d,e,f){this.a=d
this.b=e
this.c=f},
eto:function eto(d,e,f){this.a=d
this.b=e
this.c=f},
etm:function etm(d){this.a=d},
etn:function etn(d){this.a=d},
etp:function etp(d){this.a=d},
etG:function etG(d){this.a=d},
etF:function etF(d){this.a=d},
etH:function etH(d){this.a=d},
etE:function etE(d){this.a=d},
eth:function eth(d){this.a=d},
etl:function etl(d,e){this.a=d
this.b=e},
etC:function etC(d,e){this.a=d
this.b=e},
etB:function etB(d,e){this.a=d
this.b=e},
etw:function etw(d){this.a=d},
etx:function etx(d){this.a=d},
ety:function ety(d,e){this.a=d
this.b=e},
etv:function etv(d,e){this.a=d
this.b=e},
etu:function etu(d,e,f){this.a=d
this.b=e
this.c=f},
bsR:function bsR(){},
zl(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ad("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aI(v,w,"_")},
adg(d,e,f){return C.hzr(d,e,f)},
hzr(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adg=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.an("String",e,f),$async$adg)
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
return A.i($async$adg,v)},
adf(d,e){return C.hzq(d,e)},
hzq(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adf=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adf)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a4(q)
$.ak.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$adf,v)},
hyf(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QH(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bvz(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bvz=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZn(q),$async$bvz)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aMu(q,!1),$async$bvz)
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
return A.i($async$bvz,v)},
h8g(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
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
fBy(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d2(s,x.f)
w=A.cy(w,new C.cpx(),w.$ti.k("E.E"),x.Q)
v=A.a2(w).k("a3<E.E>")
r=A.z(new A.a3(w,new C.cpy(),v),v.k("E.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bg(J.k(t==null?"":t))
return new C.l0(w,v,u,r,t==null?new A.N(Date.now(),0,!1):t)},
hD5(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wi
case"female":case"f":return D.aeo
default:return D.wB}},
fZm(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fKG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hD5(v==null?j:J.k(v))
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
m=m==null?j:B.k.M(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aQ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.M(k)
return new C.hO(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hD7(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Ke
case"viewer":return D.jY
default:return D.rG}},
hD8(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
ER(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bwO(d,e){return B.a.i(e.toLowerCase())===C.ER(d,e)&&d.y!==D.jY},
te(d,e){var w,v=d.y
if(v===D.jY)return!1
w=B.a.i(e.toLowerCase())
if(w===C.ER(d,e))return!0
if(v===D.Ke)return!0
v=d.e
return new A.I(v,A.fGN(),A.S(v).k("I<1,n>")).q(0,w)},
hCz(d){return J.dF(d,new C.f8C()).gH(0)},
fvl(d){var w=0,v=A.j(x.y),u,t
var $async$fvl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zt(d),$async$fvl)
case 3:u=t.ri(f,new C.fvm(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvl,v)},
bwy(d,e){var w=0,v=A.j(x.H),u,t
var $async$bwy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zt(d),$async$bwy)
case 3:t=g
if(J.ri(t,new C.f7O(e))){w=1
break}if(C.hCz(t)>=2)throw A.O(A.b9("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bwy,v)},
ahN(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d2(n,x.f)
w=A.cy(w,new C.bIf(),w.$ti.k("E.E"),x.P)
v=A.a2(w).k("a3<E.E>")
m=A.z(new A.a3(w,new C.bIg(),v),v.k("E.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b3(u,new C.bIh(),x.N)
t=A.z(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bg(J.k(r==null?"":r))
if(r==null)r=new A.N(Date.now(),0,!1)
q=A.aQ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.M(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kk(l,w,v,!s,t,m,r,q,p,C.hD7(o==null?null:J.k(o)))},
fZv(d){var w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.al(v,0,8)},
Bu(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Bu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Pw(d),$async$Bu)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.av(),$async$Bu)
case 4:t=f
w=5
return A.b(t.a3h(0),$async$Bu)
case 5:w=6
return A.b(C.f00(t,l),$async$Bu)
case 6:s=f
if(J.ct(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aR(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fVl(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oa(l,n),$async$Bu)
case 11:u=n
w=1
break
case 10:case 8:m=A.aR(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fVl(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oa(l,n),$async$Bu)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
f00(d,e){return C.hvO(d,e)},
hvO(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f00=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aR(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zl(a9)))
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
if(J.a9(n)===0){w=7
break}m=A.aR(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zl(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aC(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fBy(A.Y(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aR(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zl(a9)+"_"+n))
i=C.hyf(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZn(h),$async$f00)
case 17:g=b1
if(g!=null){i=i.QH(g)
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
case 8:J.PF(q,new C.f01())
if(p&&J.a9(q)!==0)C.oa(a9,q)
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
return A.i($async$f00,v)},
bwY(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bwY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Pw(d),$async$bwY)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Bu(r),$async$bwY)
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
return A.i($async$bwY,v)},
fVl(d){var w,v,u,t
try{w=B.Q.aC(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d2(w,x.f)
v=A.cy(v,new C.eX0(),v.$ti.k("E.E"),x.i)
u=A.a2(v).k("a3<E.E>")
v=A.z(new A.a3(v,new C.eX1(),u),u.k("E.E"))
B.d.aY(v,new C.eX2())
return v}catch(t){v=A.a([],x.D)
return v}},
oa(d,e){return C.hMg(d,e)},
hMg(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oa=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Pw(b2),$async$oa)
case 3:a8=b5
if(J.a9(a8)===0){u=!1
w=1
break}w=4
return A.b(A.av(),$async$oa)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zl(a8)
p=A.aR(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b3(x.j.a(B.Q.aC(0,p,null)),new C.fnR(),a2).fF(0)
a2=J.b3(b3,new C.fnS(),a2).bZ(0,new C.fnT())
n=A.d8(a2,a2.$ti.k("E.E"))
a2=o,a2=A.ee(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eR(n,m)?17:18
break
case 17:a5=C.zl(a8)
l=A.aR(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a60(l),$async$oa)
case 19:t=21
a5=C.zl(a8)
k=A.aR(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aC(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a60(a5==null?null:J.k(a5)),$async$oa)
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
return A.b(C.adf(r,"ngmy_worksheet_item_v3_"+C.zl(a8)+"_"+m),$async$oa)
case 29:w=30
return A.b(C.adf(r,"ngmy_worksheet_thumb_v3_"+C.zl(a8)+"_"+m),$async$oa)
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
return A.b(C.bvz(h),$async$oa)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adg(r,"ngmy_worksheet_thumb_v3_"+C.zl(a8)+"_"+a4,f),$async$oa)
case 40:g=i.QH(f)
w=38
break
case 39:$.ak.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adf(r,"ngmy_worksheet_thumb_v3_"+C.zl(a8)+"_"+a4),$async$oa)
case 41:g=i.QH(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adf(r,"ngmy_worksheet_thumb_v3_"+C.zl(a8)+"_"+a4),$async$oa)
case 42:case 34:a4=i.a
w=43
return A.b(C.adg(r,"ngmy_worksheet_item_v3_"+C.zl(a8)+"_"+a4,B.Q.aj(g.ad(),null)),$async$oa)
case 43:e=b5
if(!e){$.ak.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adg(r,"ngmy_worksheets_index_v3_"+C.zl(a8),B.Q.aj(q,null)),$async$oa)
case 44:d=b5
if(!d){$.ak.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eB(b3,new C.fnU(q))
a4=a3.$ti.k("cR<1,a0<n,@>>")
a7=A.z(new A.cR(a3,new C.fnV(),a4),a4.k("E.E"))
a0=a7
w=45
return A.b(C.adg(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.aj(a0,null)),$async$oa)
case 45:w=46
return A.b(J.h7m(r),$async$oa)
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
return A.i($async$oa,v)},
Jq(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Jq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bu(d),$async$Jq)
case 3:t=g
s=J.cB(t)
r=s.be(t,new C.fvk(e))
if(r===-1)s.cj(t,0,e)
else s.m(t,r,e)
u=C.oa(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Jq,v)},
bwL(d,e){var w=0,v=A.j(x.H),u
var $async$bwL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Bu(d),$async$bwL)
case 2:u=g
J.mX(u,new C.f93(e))
w=3
return A.b(C.oa(d,u),$async$bwL)
case 3:return A.h(null,v)}})
return A.i($async$bwL,v)},
ET(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ET=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.av(),$async$ET)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aR(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aC(0,i,null)
if(x.j.b(t)){j=J.d2(t,x.f)
j=A.cy(j,new C.fbb(),j.$ti.k("E.E"),x.k)
s=A.a2(j).k("a3<E.E>")
r=A.z(new A.a3(j,new C.fbc(),s),s.k("E.E"))
B.d.aY(r,new C.fbd())
k=r}}catch(h){}w=4
return A.b(C.eXJ(d),$async$ET)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hwa(k,p,d)
j=A.S(o)
s=j.k("I<1,a0<n,@>>")
s=A.z(new A.I(o,new C.fbe(),s),s.k("ai.E"))
n=B.Q.aj(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OH(d,o),$async$ET)
case 7:case 6:j=j.k("a3<1>")
m=A.z(new A.a3(o,new C.fbf(d),j),j.k("E.E"))
if(m.length!==0)C.aL4(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ET,v)},
fnD(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fnD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OH(d,e),$async$fnD)
case 3:t=J.dF(e,new C.fnE(d))
s=A.z(t,t.$ti.k("E.E"))
if(s.length===0){u=!0
w=1
break}u=C.aL4(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnD,v)},
a0l(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.av(),$async$a0l)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aR(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aC(0,l,null)
if(x.j.b(u)){m=J.d2(u,x.f)
m=A.cy(m,new C.fvf(),m.$ti.k("E.E"),x.k)
t=A.a2(m).k("a3<E.E>")
s=A.z(new A.a3(m,new C.fvg(),t),t.k("E.E"))
o=s}}catch(k){}q=J.pH(o,new C.fvh(e))
if(B.a.i(e.x).length===0&&C.te(e,d)){m=B.a.i(d.toLowerCase())
p=e.azl(e.y===D.jY?D.jY:D.rG,m)}else p=e
if(q===-1)J.oZ(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OH(d,o),$async$a0l)
case 3:w=C.te(p,d)?4:5
break
case 4:w=6
return A.b(C.aL3(C.ER(p,d),p),$async$a0l)
case 6:if(!g)$.ak.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0l,v)},
aLd(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ET(d),$async$aLd)
case 2:u=g
t=J.cB(u)
s=A.qC(t.eB(u,new C.f8L(e)))
t.bk(u,new C.f8M(e))
w=3
return A.b(C.OH(d,u),$async$aLd)
case 3:w=s!=null&&C.bwO(s,d)?4:5
break
case 4:w=6
return A.b(C.eX4(e),$async$aLd)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLd,v)},
aeZ(d){var w=d.f,v=A.S(w).k("a3<1>")
w=A.z(new A.a3(w,new C.fvq(),v),v.k("E.E"))
return w},
fEy(d,e){var w,v=d.f,u=A.qC(new A.a3(v,new C.f8m(e),A.S(v).k("a3<1>")))
v=C.aeZ(d)
w=A.S(v).k("a3<1>")
v=A.z(new A.a3(v,new C.f8n(e,u),w),w.k("E.E"))
B.d.aY(v,new C.f8o())
return v},
hDb(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h2v(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.be(C.fEy(d,u),new C.fv7(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hEG(d,e){var w
if(e==null||e.length===0)return 1
w=C.fEy(d,e)
if(w.length===0)return 1
return new A.I(w,new C.fbX(),A.S(w).k("I<1,G>")).fq(0,B.yK)+1},
hM9(d){var w,v=C.aeZ(d)
if(v.length===0)return null
w=new A.a3(v,new C.fnA(),A.S(v).k("a3<1>"))
if(!w.gah(0))return w.gI(0)
return B.d.gI(v)},
hD6(d){return A.D(["id",d.a,"name",d.b,"gender",C.fZm(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hEB(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.Q(a0,x.P)
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
n=n!==D.wB?n:q.c
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
d=q.azg(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cyI(a1,w,a3.d,a2.y,s,a0,v)},
zt(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.av(),$async$zt)
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
p=A.cy(p,new C.fb8(),p.$ti.k("E.E"),x.k)
s=A.a2(p).k("a3<E.E>")
p=A.z(new A.a3(p,new C.fb9(),s),s.k("E.E"))
B.d.aY(p,new C.fba())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zt,v)},
aeM(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aeM=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rG:D.jY
a7=C.ER(b2,b3)
w=2
return A.b(C.zt(b1),$async$aeM)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.be(a8,new C.fny(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bwy(b1,b2),$async$aeM)
case 5:case 4:if(b0===-1){u=b2.azl(a6,a7)
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
i=i!==D.wB?i:l.c
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
s.m(0,m,l.azg(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bf<2>")
s=A.z(new A.bf(s,k),k.k("E.E"))
k=a5?D.rG:D.jY
u=t.xy(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OH(b1,a8),$async$aeM)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aL3(B.a.i(b3.toLowerCase()),u),$async$aeM)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aeM,v)},
fVH(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.N(Date.now(),0,!1).a4().aa(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.S(m).k("I<1,a0<n,@>>"),k=A.z(new A.I(m,C.h1L(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.D(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.D(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().aa(),"updatedAt",o],r,x.K),"createdAt",s.a4().aa(),"updatedAt",o],r,x.z)},
fVI(d,e){var w=new A.N(Date.now(),0,!1).a4().aa(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.S(u).k("I<1,a0<n,@>>")
u=A.z(new A.I(u,C.h1L(),t),t.k("ai.E"))
return A.D(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().aa(),"updatedAt",w],x.N,x.z)},
htW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ahN(A.Y(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.I(j,A.fGN(),A.S(j).k("I<1,n>")).bZ(0,new C.eXw())
t=A.z(j,j.$ti.k("E.E"))
if(u===v)s=D.rG
else s=B.d.q(t,u)?D.Ke:D.jY
return w.azl(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ahN(A.Y(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d2(q,h)
h=A.cy(h,new C.eXx(),h.$ti.k("E.E"),x.P)
p=A.a2(h).k("a3<E.E>")
o=A.z(new A.a3(h,new C.eXy(),p),p.k("E.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b3(n,new C.eXz(),x.N).bZ(0,new C.eXA())
t=A.z(h,h.$ti.k("E.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rG
else s=B.d.q(t,u)?D.Ke:D.jY
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bg(J.k(l==null?"":l))
if(l==null)l=new A.N(Date.now(),0,!1)
j=A.aQ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.M(j)
if(j==null)j=0
return new C.kk(h,r,p,!m,t,o,l,j,v,s)},
eXJ(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eXJ=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.a9(a0)===0){u=null
w=1
break}t=4
r=new C.eXN()
h=x.N
g=x.z
w=7
return A.b(A.iA(A.a([A.lO("family_trees","*",null,A.D(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bE),r.$2(A.lO("family_trees","*",A.D(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bE),"collaborator"),r.$2(A.lO("family_trees","*",null,A.D(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bE),"public")],x.cl),x.U),$async$eXJ)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.Q(h,g)
h=A.z(p,g)
l=h
J.fS(l,o)
J.fS(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.a9(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bf<2>")
h=A.cy(new A.bf(l,h),new C.eXK(a0),h.k("E.E"),x.k)
l=A.a2(h).k("a3<E.E>")
l=A.z(new A.a3(h,new C.eXL(),l),l.k("E.E"))
B.d.aY(l,new C.eXM())
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
return A.i($async$eXJ,v)},
hwa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gah(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f0G(),v).bZ(0,new C.f0H())
t=A.d8(u,u.$ti.k("E.E"))
s=A.Q(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.ER(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.jY){m=q.e
m=!new A.I(m,A.fGN(),A.S(m).k("I<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.m(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hEB(l,v)
o=C.ER(k,w)
p=v.d
s.m(0,u,o===w?k.b5E(p,D.rG):k.b5E(p,v.y))}j=s.$ti.k("bf<2>")
j=A.z(new A.bf(s,j),j.k("E.E"))
B.d.aY(j,new C.f0I())
return j},
OH(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.av(),$async$OH)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b3(e,new C.f2H(),x.a)
s=A.z(s,s.$ti.k("ai.E"))
w=3
return A.b(u.an("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.aj(s,null)),$async$OH)
case 3:return A.h(null,v)}})
return A.i($async$OH,v)},
aL3(d,e){return C.hB_(d,e)},
hB_(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aL3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lu("family_trees",A.a([C.fVH(e,d)],p),null,B.cy),$async$aL3)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lu("family_trees",A.a([C.fVI(e,d)],p),null,B.cy),$async$aL3)
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
return A.i($async$aL3,v)},
aL4(d,e){return C.hB0(d,e)},
hB0(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aL4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.S(e).k("I<1,a0<n,@>>")
m=n.k("ai.E")
l=A.z(new A.I(e,new C.f7a(d),n),m)
r=l
w=7
return A.b(A.lu("family_trees",r,null,B.cy),$async$aL4)
case 7:q=g
if(q){u=!0
w=1
break}k=A.z(new A.I(e,new C.f7b(d),n),m)
p=k
w=8
return A.b(A.lu("family_trees",p,null,B.cy),$async$aL4)
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
return A.i($async$aL4,v)},
eX4(d){return C.htk(d)},
htk(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eX4=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.P6("family_trees",A.D(["id",d],x.N,x.z),null,B.cy),$async$eX4)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a4(p)
$.ak.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$eX4,v)},
qn:function qn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l0:function l0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpA:function cpA(){},
cpz:function cpz(){},
cpx:function cpx(){},
cpy:function cpy(){},
FU:function FU(d,e){this.a=d
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
ahM:function ahM(d,e){this.a=d
this.b=e},
f8C:function f8C(){},
fvm:function fvm(d){this.a=d},
f7O:function f7O(d){this.a=d},
kk:function kk(d,e,f,g,h,i,j,k,l,m){var _=this
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
bIj:function bIj(){},
bIi:function bIi(){},
bIf:function bIf(){},
bIg:function bIg(){},
bIh:function bIh(){},
f01:function f01(){},
eX0:function eX0(){},
eX1:function eX1(){},
eX2:function eX2(){},
fnR:function fnR(){},
fnS:function fnS(){},
fnT:function fnT(){},
fnU:function fnU(d){this.a=d},
fnV:function fnV(){},
fvk:function fvk(d){this.a=d},
f93:function f93(d){this.a=d},
fbb:function fbb(){},
fbc:function fbc(){},
fbd:function fbd(){},
fbe:function fbe(){},
fbf:function fbf(d){this.a=d},
fnE:function fnE(d){this.a=d},
fvf:function fvf(){},
fvg:function fvg(){},
fvh:function fvh(d){this.a=d},
f8L:function f8L(d){this.a=d},
f8M:function f8M(d){this.a=d},
fvq:function fvq(){},
f8m:function f8m(d){this.a=d},
f8n:function f8n(d,e){this.a=d
this.b=e},
f8o:function f8o(){},
fv7:function fv7(d){this.a=d},
fbX:function fbX(){},
fnA:function fnA(){},
fb8:function fb8(){},
fb9:function fb9(){},
fba:function fba(){},
fny:function fny(d){this.a=d},
eXw:function eXw(){},
eXx:function eXx(){},
eXy:function eXy(){},
eXz:function eXz(){},
eXA:function eXA(){},
eXN:function eXN(){},
eXO:function eXO(d){this.a=d},
eXK:function eXK(d){this.a=d},
eXL:function eXL(){},
eXM:function eXM(){},
f0G:function f0G(){},
f0H:function f0H(){},
f0I:function f0I(){},
f2H:function f2H(){},
f7a:function f7a(d){this.a=d},
f7b:function f7b(d){this.a=d},
cpB:function cpB(d,e){this.a=d
this.b=e},
cpC:function cpC(d,e){this.a=d
this.b=e},
aDq:function aDq(d,e,f){this.a=d
this.b=e
this.c=f},
b4y:function b4y(){this.b=this.a=0},
b4x:function b4x(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
br9:function br9(){},
vQ(d,e){var w,v
if(d==null)return""
w=d.bP()
v=""+w.gcb()+"/"+w.gcp()+"/"+w.gcc()
if(!e)return v
return v+" "+B.a.aU(B.o.u(w.gmE()),2,"0")+":"+B.a.aU(B.o.u(w.gEO()),2,"0")},
hkh(){var w,v=$.oW(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aF(32)]
return"WS"+B.d.fL(u)},
apd(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apd=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apd)
case 3:if(!e){u=A.Q(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bE),$async$apd)
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
p=A.a4(m)
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
return A.i($async$apd,v)},
ape(d){return C.hki(d)},
hki(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ape=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$ape)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_worksheet_project_qr_stashes_v1",A.D(["stashes",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$ape)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a4(p)
$.ak.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ape,v)},
apg(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apg=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apg)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hkh()
w=4
return A.b(C.apd(),$async$apg)
case 4:r=h
q=B.a.i(e)
p=B.dB.aE(t)
J.aE(r,s,A.D(["ownerEmail",q,"projectId",f,"payload",B.cL.gcq().aE(p),"usesRemaining",25,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(C.ape(r),$async$apg)
case 5:u=new A.YQ("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apg,v)},
apf(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bY(),$async$apf)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apd(),$async$apf)
case 4:q=f
p=J.a5(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a5(o)
m=A.aQ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{s=B.c0.c4(0,B.cw.aE(t))}catch(h){r=A.a4(h)
$.ak.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dQ(A.Y(o,n,m),n,m)
m.m(0,"usesRemaining",j)
m.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
p.m(q,i,m)}w=5
return A.b(C.ape(q),$async$apf)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apf,v)},
fQi(){var w=new A.N(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cz.aF(999999)},
hkj(d){var w,v,u,t,s,r,q
try{w=A.adE(d)
if(w==null)return d
v=w
if(J.Jw(v)>960||J.Jv(v)>960){s=v
r=J.Jw(v)>=J.Jv(v)?960:null
v=A.adD(s,J.Jv(v)>J.Jw(v)?960:null,B.Lx,r)}s=v
u=A.ajc(82).R1(s,B.xk)
if(J.a9(u)===0)return d
s=new Uint8Array(A.ck(u))
return s}catch(q){t=A.a4(q)
$.ak.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
c9U(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$c9U=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hkj(e)
$.c9Q.m(0,s,t)
u=C.byq(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9U,v)},
aZn(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZn=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cT(l,"data:image")){u=null
w=1
break}t=4
r=J.eR(l,",")?B.d.gai(J.lz(l,",")):l
q=B.cw.aE(r)
if(J.a9(q)===0){u=null
w=1
break}p=C.fQi()
w=7
return A.b(C.c9U(p,q),$async$aZn)
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
return A.i($async$aZn,v)},
c9R(d){var w=0,v=A.j(x.T),u,t,s
var $async$c9R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.c9T(s),$async$c9R)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cL.gcq().aE(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9R,v)},
a60(d){var w=0,v=A.j(x.H),u,t
var $async$a60=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h1E(d)
if(t==null){w=1
break}$.c9Q.W(0,t)
w=3
return A.b(C.byp(t),$async$a60)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a60,v)},
byq(d,e){return C.hKA(d,e)},
hKA(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$byq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aK3
w=7
return A.b(n==null?$.aK3=I.fDD():n,$async$byq)
case 7:r=g
q=new Uint8Array(A.ck(e))
p=J.md(r,"thumbs","readwrite")
B.ik.lK(J.mb(p,"thumbs"),q,l)
w=8
return A.b(J.oY(p),$async$byq)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a4(k)
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
return A.i($async$byq,v)},
byp(d){return C.hKy(d)},
hKy(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byp=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aK3
w=7
return A.b(o==null?$.aK3=I.fDD():o,$async$byp)
case 7:r=f
q=J.md(r,"thumbs","readwrite")
B.ik.El(J.mb(q,"thumbs"),m)
w=8
return A.b(J.oY(q),$async$byp)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a4(l)
$.ak.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byp,v)}},D,Ae,Af,O,Ag,Ah,I,P,W,Ai
J=c[1]
A=c[0]
B=c[2]
X=c[190]
G=c[169]
F=c[29]
E=c[179]
Y=c[109]
Z=c[108]
A_=c[158]
A0=c[122]
A1=c[189]
A2=c[35]
M=c[188]
A3=c[78]
H=c[84]
Q=c[129]
R=c[132]
S=c[201]
T=c[159]
A4=c[150]
A5=c[162]
U=c[157]
A6=c[62]
A7=c[68]
V=c[173]
A8=c[28]
A9=c[206]
Aa=c[141]
K=c[152]
Ab=c[163]
Ac=c[204]
Ad=c[197]
L=c[99]
N=c[66]
C=a.updateHolder(c[6],C)
D=c[200]
Ae=c[67]
Af=c[167]
O=c[203]
Ag=c[202]
Ah=c[54]
I=c[52]
P=c[205]
W=c[120]
Ai=c[94]
C.alk.prototype={}
C.aUI.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.b9P(),f=h.x!=null&&h.xW(i).length===0
if(h.x!=null)w=f?B.aW:B.bR
else w=h.gRF()?B.bR:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b4w,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.eai,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.fZ,i,i,i),B.U,D.eC5,B.au,A.d(C.vQ(new A.N(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eyl,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aRr,i,i,i,i,B.Vh,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fFo(h.d)
o=A.p(B.B,C.aUH(A.fe4(h.e,n),30),B.h,i,i,new A.o(B.lM,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.etU,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.bw,D.eCm,B.ac,A.p(i,A.u(A.a([D.eQz,B.bw,A.d(A.zv(h.c),i,i,i,i,i,i,D.ep8,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eV,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,p,q,i,i,B.n),i,i,i,i,K.acz,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aLB("Original due",C.vQ(h.r,!1))
n=j.aLB("Current due",C.vQ(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.U,A.p(i,A.u(A.a([l,B.P,n,B.U,A.p(i,A.d(h.gaFT(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zu,i,i,1/0),B.U,j.c5A(),B.P,j.bVh(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.U,A.p(i,A.u(A.a([D.eDi,B.au,A.d(q,i,i,i,i,i,i,D.etg,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaAW()){q=A.m(14)
o=A.H(B.ct,B.r,1.6)
B.d.v(p,A.a([B.U,A.p(i,A.u(A.a([D.eRL,B.P,A.bw(A.m(12),A.ec(new A.a7(1/0,88,A.b1(i,i,i,new A.TM(h.ax,B.M,D.edD,!0,3.5,i),B.as),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Dp,i,i,i)],s))}p.push(B.aB)
p.push(D.eKy)
return A.p(i,A.u(A.a([r,new A.B(B.acC,A.u(p,B.al,i,B.e,B.j,0,B.p),i)],s),B.al,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aLB(d,e){var w=null
return A.A(A.a([A.C(A.d(d,w,w,w,w,w,w,D.a4h,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eq6,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c5A(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6o(B.e1,u,"Not paid yet")
w=t.xW(null).length
v=w===0?B.aW:B.bR
return this.a6o(v,u,C.vQ(t.x,!0))},
bVh(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6o(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6o(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4h,u,u,u)
v=A.S(d).k("I<1,ha>")
v=A.z(new A.I(d,new C.bWR(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.cd(B.bH,v,B.by,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6o(d,e,f){var w=null
return A.A(A.a([A.C(A.d(e,w,w,w,w,w,w,D.a4h,w,w,w),1),new A.dp(1,B.ck,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dO,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b6F.prototype={
a5(d,e){new A.TM(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ao(d){return d.b!==this.b}}
C.alr.prototype={
S(){return new C.azp(A.a([],x.bp))},
gdQ(){return this.c}}
C.azp.prototype={
Z(){this.a0()
this.Hb()},
Hb(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_A(t.a.c),$async$Hb)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dxi(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hb,v)},
aNr(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aN,s=A.l(v,v,u?B.bl:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bl:B.bu).j(0.22)
w=A.m(10)
return A.bn(v,new A.b0(4,r,new A.ay(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b0(4,w,new A.ay((this.a.d.a?B.bl:B.bu).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b0(4,A.m(10),D.aP6),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aNq(d){return this.aNr(d,null)},
Nv(d){return this.c97(d)},
c97(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Nv=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EG:B.er
w=7
return A.b(new A.hP().AS(72,900,900,n),$async$Nv)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$Nv)
case 8:p=f
n=B.cL.gcq().aE(p)
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
return A.i($async$Nv,v)},
aVk(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aN,o=A.m(10),n=A.H((q?B.bl:B.bu).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bl:B.bu
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aN:B.aG,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bl:B.bu
t=x.p
u=A.C(A.u(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a1,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fn(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c6)
q=A.a([q,B.aa,u,A.bF(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.cu,s.a.d.a?B.bl:B.bu,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c6))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.lk,D.be4,r,r,r)},
BO(d){return this.bst(d)},
bss(){return this.BO(null)},
bst(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BO=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.as()
r=new A.ao(new A.bb(a4,B.aY,B.aL),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.lN(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.M(p)):B.k.ab(p,2)}o=new A.ao(new A.bb(a4,B.aY,B.aL),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ao(new A.bb(a4,B.aY,B.aL),s)
if(a3){a4=new A.N(Date.now(),0,!1).bL(6048e8)
m=A.bW(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)}else{a4=a5.f
m=A.bW(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bi(a4,!0,x.cT)
i=a3?null:A.fFo(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.uR?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hM(B.x.j(0.55),!0,"Dismiss",a4,new C.dx1(),new C.dx2(a2,t,a5,r,new C.dx3(a2,t),o,n,j),B.eE,!0,x.y),$async$BO)
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
break}if(f.length===0||e<=0){t.c.E(x.q).f.P(D.ejW)
w=1
break}a0=a2.d
if(a0==null){t.c.E(x.q).f.P(D.eiB)
w=1
break}a1=A.fe4(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.uR?"male":"female"
w=7
return A.b(A.aeY(a3,A.fNa(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BO)
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
a3=A.bW(a3.gcc(),a3.gcb(),a3.gcp(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bW(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)))a5.cAO(a2.a)
w=8
return A.b(A.aeY(t.a.c,a5),$async$BO)
case 8:case 5:w=9
return A.b(t.Hb(),$async$BO)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BO,v)},
aO0(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.M:B.aN
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bl:B.bu).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aUH(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aN:B.aG
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b5,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ab)},
Q3(d){return this.cpV(d)},
cpV(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hM(B.x.j(0.55),!0,"Dismiss",s,new C.dxl(),new C.dxm(t,d),B.hG,!0,x.y),$async$Q3)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.N(s,0,!1)
case 4:w=7
return A.b(A.aeY(t.a.c,d),$async$Q3)
case 7:w=8
return A.b(t.Hb(),$async$Q3)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Q3,v)},
Mc(d,e){return this.bCT(0,e)},
bCT(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kN(s,"Cancel","Delete",e.b+" \xb7 "+A.zv(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mc)
case 3:if(!g){w=1
break}w=4
return A.b(C.f8S(t.a.c,e.a),$async$Mc)
case 4:w=5
return A.b(t.Hb(),$async$Mc)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mc,v)},
abx(d){return this.c3d(d)},
c3d(d){var w=0,v=A.j(x.H),u=this,t
var $async$abx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c1(B.K,new C.dxf(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$abx)
case 2:return A.h(null,v)}})
return A.i($async$abx,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dLY
w=J.dF(m.d,new C.dxn())
v=A.z(w,w.$ti.k("E.E"))
w=J.dF(m.d,new C.dxo())
u=A.z(w,w.$ti.k("E.E"))
t=B.d.cP(v,0,new C.dxp())
w=A.m(18)
s=m.a.d.a
r=s?D.c7r:D.asb
q=A.H(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.bBg,B.h,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.C(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.X,!0,A.m(12),A.aH(!1,A.m(12),!0,D.dLp,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dxq(m),l,l,l,l,l,l,l),B.h,B.cW,0,l,l,l,l,l,B.ab)],p),B.m,l,B.e,B.j,0,l,l)
o=A.C(m.cmg("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zv(t)
r=A.a([A.p(l,A.u(A.a([s,B.ac,A.A(A.a([o,B.aa,A.C(m.b0b(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aE,B.w,r,l,l),B.n),l,l,l,l,B.acw,l,l,l),B.aB],p)
if(J.ch(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bl:B.bu).j(0.12),B.r,1)
n=A.p(l,D.bwn,B.h,l,l,new A.o(B.cW.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bl:B.bu,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bgt,l,l,1/0))}else{w=m.gc8q()
s=A.z(new A.I(v,w,A.S(v).k("I<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.B(D.bi3,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bl:B.bu,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.I(u,w,A.S(u).k("I<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.al,l,B.e,B.j,0,B.p)},
b0b(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.x.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bl:B.bu).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bl:B.bu,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aN:B.aG
return A.p(u,A.u(A.a([q,B.bw,A.d(f,u,1,B.Z,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eh,u,u,u)},
cmg(d,e){return this.b0b(!1,d,e)},
c8r(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.xW(j).length,h=d.b91()
if(d.x!=null){w=d.xW(j).length
v=w===0?B.cW:B.bR}else if(d.gRF())v=B.bR
else{if(h)w=B.cW
else w=k.a.d.a?B.bl:B.bu
v=w}if(d.x!=null){w=d.xW(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vQ(u,!1)}else{u.toString
t="Paid "+C.vQ(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vQ(w,!1)+" \xb7 "+i+" missed":"Due "+C.vQ(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRF()&&d.x==null)s=B.bR.j(0.35)
else s=(k.a.d.a?B.bl:B.bu).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.G,B.x.j(0.04),B.cC,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bh:B.lM
o=A.H(d.gRF()&&d.x==null?B.bR.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fFo(d.d)
o=A.p(B.B,A.d5(C.aUH(A.fe4(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aN:B.aG
m=x.p
n=A.a([new A.dp(1,B.ck,A.d(p,j,1,B.Z,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaAW())B.d.v(n,A.a([B.ez,A.V(B.KC,B.cW.j(0.8),j,j,j,14)],m))
p=A.C(A.u(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.dd,A.d(t,j,1,B.Z,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zv(d.c)
l=k.a.d.a?B.aN:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.X,!0,j,A.aH(!1,q,!0,new A.B(S.acg,A.A(A.a([o,B.bb,p,B.aa,A.u(A.a([n,B.bw,A.V(B.el,(k.a.d.a?B.bl:B.bu).j(0.5),j,j,j,18)],m),B.dE,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dxh(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ab),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d6,j,j,j,j)}}
C.mI.prototype={
ad(){var w=this
return A.D(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().aa()],x.N,x.z)},
b5Q(d,e,f){return new C.mI(this.a,e,d,f)}}
C.FT.prototype={
xu(d,e,f,g,h,i,j,k,l,a0,a1){var w=this,v=j==null?w.a:j,u=a0==null?w.b:a0,t=k==null?w.c:k,s=e==null?w.d:e,r=f==null?w.e:f,q=a1==null?w.f:a1,p=h==null?w.r:h,o=g==null?w.w:g,n=l==null?w.x:l,m=d==null?w.y:d
return new C.FT(v,u,t,s,r,q,p,o,n,m,i==null?w.z:i)},
aza(d){var w=null
return this.xu(w,w,w,w,d,w,w,w,w,w,w)},
b5O(d,e,f){var w=null
return this.xu(d,w,w,w,w,w,w,e,w,f,w)},
cxl(d){var w=null
return this.xu(w,w,w,w,w,d,w,w,w,w,w)},
cxu(d){var w=null
return this.xu(w,w,w,w,w,w,w,w,d,w,w)},
cwG(d){var w=null
return this.xu(w,w,w,d,w,w,w,w,w,w,w)},
cxw(d){var w=null
return this.xu(w,w,w,w,w,w,w,w,w,w,d)},
cwD(d){var w=null
return this.xu(w,w,d,w,w,w,w,w,w,w,w)},
cwy(d){var w=null
return this.xu(w,d,w,w,w,w,w,w,w,w,w)},
Ee(d){var w=null
return this.xu(w,w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return A.D(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z],x.N,x.z)},
cuw(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bIe(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.M(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cJ(d.h(0,n))).length!==0?B.a.i(A.cJ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cJ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AM.ge9(D.AM))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_A)
q=l.$2("frame",D.a_7)
l=l.$2("texture",D.a_2)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cJ(d.h(0,"author"))):o
return this.xu(p,u,t,q,r,A.tb(d.h(0,"ribbon"))?A.Ev(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.X2.prototype={
S(){return new C.aww(A.a([],x.I),D.Kd)},
gdQ(){return this.c}}
C.aww.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yr(0,1)
w=$.as()
v.z=new A.ao(B.aq,w)
v.Q=new A.ao(B.aq,w)
v.kp()
w=v.a
C.bwV(w.c,w.d).bA(new C.cZw(v),x.fL)},
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
kp(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.IZ(s.c,s.d),$async$kp)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.cZk(t,r))
t.arE()
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
gaok(){var w,v=this
if(!J.ch(v.d)){w=v.r
w=w<0||w>=J.a9(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
arE(){var w,v,u=this.gaok(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saR(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saR(0,w==null?"":w)},
c1E(d){this.n(new C.cZh(this,d))
this.arE()},
LB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mI(B.o.u(1000*Date.now()),"Untitled page","",new A.N(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aMP(r.c,r.d,s),$async$LB)
case 3:w=4
return A.b(t.kp(),$async$LB)
case 4:if(t.c==null||J.ch(t.d)){w=1
break}q=J.pH(t.d,new C.cYV(s))
p=q>=0?q:J.a9(t.d)-1
t.n(new C.cYW(t,p))
t.arE()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.zY(p+1,B.co,B.kp),$async$LB)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LB,v)},
Dx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Dx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaok()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aMP(o.c,o.d,new C.mI(s,r,q,new A.N(p,0,!1))),$async$Dx)
case 3:w=4
return A.b(t.kp(),$async$Dx)
case 4:if(t.c==null){w=1
break}t.n(new C.cZl(t))
case 1:return A.h(u,v)}})
return A.i($async$Dx,v)},
Md(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Md=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaok()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cZ1(r),s,null,!0,!0,x.y),$async$Md)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bwH(s.c,s.d,r.a),$async$Md)
case 4:t.n(new C.cZ2(t))
w=5
return A.b(t.kp(),$async$Md)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RJ(B.o.D(t.r+1,0,J.a9(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Md,v)},
xf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Dx(),$async$xf)
case 5:case 4:if(t.c==null){w=1
break}w=J.ct(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.OZ(s,r.r,o,p,q),$async$xf)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).K(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h26(s,r.x,r.r),$async$xf)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.IZ(s.c,s.d),$async$xf)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.G(l,new C.mI(""+(m+k),q,B.a.i(j.b),new A.N(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zC(r.c,r.d,l),$async$xf)
case 11:w=12
return A.b(t.kp(),$async$xf)
case 12:r=t.c
if(r==null){w=1
break}r.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xf,v)},
YR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Dx(),$async$YR)
case 5:case 4:if(t.c==null){w=1
break}s=t.gDR(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.xr,new C.cZi(t),new C.cZj())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m_("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new F.m_(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fGY(o,new F.qG(s,r,"",p,new F.tM(q.d,null,null,null,null,"","","")),null),$async$YR)
case 6:case 1:return A.h(u,v)}})
return A.i($async$YR,v)},
UI(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(D.b_Q,new C.cZ3(t),r,!0,!0,!0,D.e9J,!1,!1,x.e),$async$UI)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cZ4(t,s))
r=t.a
w=4
return A.b(C.a0g(r.c,r.d,s),$async$UI)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.zY(0,B.dU,B.o_)
case 1:return A.h(u,v)}})
return A.i($async$UI,v)},
bHV(d){var w=d.bP(),v=B.a.aU(B.o.u(w.gcb()),2,"0"),u=B.a.aU(B.o.u(w.gcp()),2,"0")
return""+w.gcc()+"-"+v+"-"+u},
gDR(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bPM()
if(r.e)w=D.a7z
else if(J.ch(r.d)){w=r.y
v=r.gDR(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eoB,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.B(Ad.adu,new C.Wk(w,v,0,q),q),q),B.bv,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ju.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aJ(q,A.p(q,D.ea8,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.G,B.dM.j(0.45),B.J,18)],x.V),E.uH,B.n),q,q,q,q,B.Vr,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gctG(),q,q,q,q,q,q,!1,B.ae))
w.push(B.U)
w.push(A.hg(D.bsH,D.eWb,r.gaHB(),q))
B.d.v(u,w)}w=A.at(A.cf(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.ek,q,q,B.af),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.a9(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ju.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dJ:B.yI
u=A.u(A.a([new A.B(D.bfO,w,q),A.C(A.H9(v,new C.cZu(r),J.a9(r.d)+1,q,r.gc1D(),u,B.b_),1),r.bve()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cg(q,D.a9w,new A.am(B.W,q,B.aX,B.q,A.a([D.aEL,A.br(!0,A.u(A.a([p,A.C(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bPM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.ct(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.NM(B.dN,"AI",h.gbtd(),!0))
if(h.a.f)f.push(new C.NM(B.np,"Cover",h.gbDs(),!1))
if(J.ct(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.NM(B.rU,"Print",h.gcam(),!1))
if(h.a.f&&J.ct(h.d)&&h.r>=0){v=h.w
u=v?B.hs:B.je
t=v?"Save":"Edit"
f.push(new C.NM(u,t,v?h.gcgh():new C.cZe(h),!1))}if(h.a.f)f.push(new C.NM(B.hH,"Add page",h.gaHB(),!1))
v=A.m(22)
u=A.H(E.iQ.j(0.85),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.x.j(0.5),B.cv,16),new A.aa(0,B.G,E.iQ.j(0.12),B.J,18)],x.V)
s=x.p
r=A.A(A.a([A.aJ(g,A.p(g,D.bsz,B.h,g,g,new A.o(B.x.j(0.3),g,A.H(E.iQ.j(0.6),B.r,1),g,g,g,B.a6),g,30,g,g,g,g,g,30),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.cZf(h),g,g,g,g,g,g,!1,B.ae),A.C(new A.B(B.fi,A.eY(B.B,A.d(h.gDR(0),g,1,g,g,!1,g,D.eo8,g,g,g),B.h,B.e8),g),1),D.een],s),B.m,g,B.e,B.j,0,g,g)
q=x.O
p=A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.a8(B.a_,B.a7,B.w,A.a([B.K,E.iQ.j(0.7),B.K],q),g,g),B.n),g,1,g,g,g,g,g,g)
o=A.a([],s)
for(n=f.length,m=0;m<f.length;f.length===n||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.d4D
else{k=new A.b2(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],q)
i=new A.ay(E.iQ.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.ju,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c2(i,i,i,i),new A.by(k,k,k,k),g,new A.a8(B.a_,B.a7,B.w,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ju.j(0.85)
o.push(new A.bG(1,B.bq,A.aJ(B.c5,A.u(A.a([k,B.bw,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ae),g))}return A.p(g,A.u(A.a([r,new A.B(B.u8,p,g),A.A(o,B.m,g,B.e,B.j,0,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.h,g,g,new A.o(g,g,u,v,t,D.ajc,B.n),g,g,g,D.bex,B.lm,g,g,g)},
yI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Dx(),$async$yI)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.ffm(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.cYX(t,p),s,null,!0,!0,x.N),$async$yI)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xf(),$async$yI)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cl(),$async$yI)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.DU("Swahili (Kiswahili)",!0),$async$yI)
case 18:w=16
break
case 17:w=19
return A.b(t.cqu(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yI)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yI,v)},
Wv(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.iQ.j(0.3),B.r,1),r=x.p
return new A.B(B.cI,A.aH(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uH,B.a6),w,42,w,w,w,w,w,42),B.bb,A.C(A.u(A.a([A.d(f,w,w,w,w,w,w,A3.a3T,w,w,w),A.d(g,w,w,w,w,w,w,E.a3L,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZg(d,h),w,w,w,w,w,w,w),w)},
Cl(){return this.bHp()},
bHp(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cl=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cZ7(r),a7,null,!0,!0,x.ei),$async$Cl)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.z(r.d,x.B)
p=g
f=r.y
o=new A.eJ("Working on it\u2026",$.as())
a6.a=!0
a7=r.c
a7.toString
A.cb(null,null,!1,null,new C.cZ8(o),a7,null,!0,!0,x.H).f4(new C.cZ9(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.ci(l,new A.T(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xr[a1]
J.ci(j,i.a)}w=8
return A.b(C.aea(a0,a7,new C.cZa(o),d,l,e,j),$async$Cl)
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
if(l!=null&&a6.a)A.a6(l,!0).eC()
l=o
l.shH($.as())
J.aNg(l,0)
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
for(a4=0;a4<J.a9(p);++a4){if(m.b.am(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b5Q(m.b.h(0,a4).b,a7,new A.N(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zC(j.c,j.d,l),$async$Cl)
case 11:w=12
return A.b(r.kp(),$async$Cl)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xr[a1].a)
a5=l.cuw(j,12,a7)
l=r.a
w=15
return A.b(C.a0g(l.c,l.d,a5),$async$Cl)
case 15:if(r.c!=null)r.n(new C.cZb(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.zY(0,B.dU,B.o_)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.E(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.aZ(a3?A.cke("Undo",new C.cZc(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cl,v)},
DU(d,e){return this.cqv(d,e)},
cqu(d){return this.DU(d,!1)},
cqv(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$DU=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.z(r.d,x.B)
d=e
a0=new A.eJ("Starting\u2026",$.as())
f.a=!0
k=r.c
k.toString
A.cb(null,null,!1,null,new C.cZn(a0),k,null,!0,!0,x.H).f4(new C.cZo(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.ci(o,new A.T(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a00(m,new C.cZp(a0)),$async$DU)
case 10:w=8
break
case 9:w=11
return A.b(C.byh(new C.cZq(a0),m,a2),$async$DU)
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
if(o!=null&&f.a)A.a6(o,!0).eC()
o=a0
o.shH($.as())
J.aNg(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.E(x.q).f
k=q
o.P(A.aZ(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.a9(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b5Q(J.q(p,g).b,j.a,new A.N(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zC(k.c,k.d,o),$async$DU)
case 12:w=13
return A.b(r.kp(),$async$DU)
case 13:o=r.c
if(o==null){w=1
break}o=o.E(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.aZ(A.cke("Undo",new C.cZr(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DU,v)},
bve(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cYY(v):u
r=A.aF(u,u,u,u,A.V(D.bol,s?D.ju:B.be,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.ct(v.d)&&!v.w&&v.r>=0)s=A.hg(A.V(B.uj,B.D3,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.D3,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbD1(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ju.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.C(A.at(s,u,u,u),1)
w=t<J.a9(v.d)?new C.cYZ(v):u
return A.br(!0,new A.B(D.bfC,A.A(A.a([r,s,A.aF(u,u,u,u,A.V(B.el,t<J.a9(v.d)?D.ju:B.be,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.X6.prototype={
S(){return new C.bau(new A.ao(B.aq,$.as()))}}
C.bau.prototype={
gZY(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.a2()},
gbGc(){var w,v=this.gZY()
A:{if("cover"===v){w=D.cCF
break A}if("book"===v){w=D.cyQ
break A}w=D.cYQ
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.iQ.j(0.5),n=x.p,m=A.A(A.a([D.d4E,B.av,D.bkH,A.aF(q,q,q,q,B.kZ,q,q,q,new C.d_X(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.kv(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d_Y(r),r.gZY()==="page",q,q,q,q))
if(r.a.d)l.push(A.kv(q,q,q,D.eRj,q,new C.d_Z(r),r.gZY()==="book",q,q,q,q))
l.push(A.kv(q,q,q,D.eFI,q,new C.d0_(r),r.gZY()==="cover",q,q,q,q))
l=A.cd(B.bH,l,B.by,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.T,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bn(q,new A.b0(4,A.m(16),B.V),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kc,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ad,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbGc(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mY(q,B.c.j(0.08),new A.w(s,q,B.H0,q,q,q,q,q,q,q,q,q),B.hj,new C.d00(r,s),q,q,q))}return A.eA(q,E.za,A.cf(A.u(A.a([m,B.U,D.eUe,B.ar,l,B.ac,k,B.P,A.cd(B.bH,w,B.by,6,6),B.aB,A.dj(D.bsE,D.eUZ,new C.d01(r,d),A.bk(B.b0,q,q,q,q,B.om,q,q,new A.b4(A.m(16),B.V),q,q,q)),B.au,D.ePO],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.ft,q,q,B.af),q,q,q,D.ade,B.cZ,q,new A.b4(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.X4.prototype={
S(){return new C.awx(A.a([],x.Y))},
gdQ(){return this.c}}
C.ac3.prototype={}
C.awx.prototype={
Z(){this.a0()
this.kp()},
kp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.P2(p.c,p.d),$async$kp)
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
return A.b(C.bwV(r.c,q),$async$kp)
case 6:j=e
i=J
w=7
return A.b(C.IZ(t.a.c,q),$async$kp)
case 7:m.push(new l.ac3(k,j,i.a9(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.cZL(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
b1j(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
O9(d,e){return this.c3b(0,e)},
c3b(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$O9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ct(A.eN(new C.cZK(u,e),!0,null,x.y)),$async$O9)
case 2:t=g
w=3
return A.b(u.kp(),$async$O9)
case 3:if(t===!0&&u.c!=null)u.c.E(x.q).f.P(D.aHR)
return A.h(null,v)}})
return A.i($async$O9,v)},
DX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$DX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.E(x.q).f.P(D.aHN)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adx(s.c,s.d),$async$DX)
case 5:q=e
w=6
return A.b(t.kp(),$async$DX)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.O9(0,B.d.kU(t.d,new C.cZP(q))),$async$DX)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.OZ(p,s.f,r,n,o),$async$DX)
case 10:m=e
w=11
return A.b(t.kp(),$async$DX)
case 11:if(m&&t.c!=null)t.c.E(x.q).f.P(D.aHR)
case 1:return A.h(u,v)}})
return A.i($async$DX,v)},
ND(d,e){return this.ce6(0,e)},
ce6(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$ND=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cZO(t,e),s,null,!0,!0,x.y),$async$ND)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0e(s.c,s.d,e.a),$async$ND)
case 4:w=5
return A.b(t.kp(),$async$ND)
case 5:case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bvh(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.iQ.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aJ(n,new A.fT(0.7142857142857143,A.p(n,A.u(A.a([D.d4F,B.ac,D.dL5,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ju.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gctC(),n,n,n,n,n,n,!1,B.ae))}w=A.m(22)
v=A.H(E.iQ.j(0.85),B.r,1.6)
s=A.aJ(n,A.p(n,D.bA5,B.h,n,n,new A.o(B.x.j(0.3),n,A.H(E.iQ.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.cZQ(d),n,n,n,n,n,n,!1,B.ae)
r=A.m(14)
q=B.x.j(0.3)
p=A.H(E.iQ.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bb,D.bl_,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.enM,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.fZ,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.ajc,B.n),n,n,n,Ag.UX,D.bdL,n,n,n)
if(o.e)k=D.a7z
else k=k.length===0?D.aW9:A.co(new C.cZR(k))
return A.cg(n,D.a9w,new A.am(B.W,n,B.aX,B.q,A.a([D.aEL,A.br(!0,A.u(A.a([w,A.C(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bvh(d){var w,v,u=this,t=null,s=u.b1j(d),r=d.c,q=x.p,p=A.a([A.bV(0,A.eY(B.B,new A.a7(300,420,new C.Wk(d.b,s,r,t),t),B.h,B.dp),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aJ(t,A.p(t,D.bzp,B.h,t,t,new A.o(B.x.j(0.55),t,A.H(B.be,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZI(u,d),t,t,t,t,t,t,!1,B.ae),t,t,t,6,6,t))
w=A.d(s,t,1,B.Z,t,t,t,D.eno,t,t,t)
v=r===1?"page":"pages"
return A.aJ(t,A.u(A.a([new A.fT(0.7142857142857143,new A.am(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ju.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZJ(u,d),t,t,t,t,t,t,!1,B.ae)}}
C.NM.prototype={}
C.Wk.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.xr,new C.cyn(m),new C.cyo()),j=m.c,i=D.AM.h(0,j.e),h=A.b6(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m0:B.b5
v=new C.cyp(h)
i=A.a([new A.aa(0,B.G,B.x.j(0.6),D.dJ8,28)],x.V)
u=x.p
t=A.a([A.bV(0,A.b1(l,l,l,new C.b7Q(j.x,h,l),B.as),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.a_,B.a7,B.w,A.a([B.x.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b2(3,3)
t.push(new A.cF(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.by(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adv,8,0.85,2.2),v.$4(D.bim,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adv,8,0.85,2.4))
else if(r==="corners")t.push(A.bV(0,new A.B(D.bii,A.b1(l,l,l,new C.b7H(h,l),B.as),l),0,0,0))
r=A.V(D.aru[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.Z,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aoZ,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cJ,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aS,A.d(r,l,2,B.Z,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bV(0,new A.B(D.biM,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b1(l,l,l,new C.aDl(l),D.edx),l,l,l,46,0,l))
return A.p(l,A.bw(D.a6f,new A.am(B.W,l,B.a9,B.q,t,l),B.ap),B.h,l,l,new A.o(l,l,l,D.a6f,i,new A.a8(B.ax,B.aE,B.w,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b7Q.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f8()
f.e0(11)
switch(this.b){case"plain":return
case"linen":$.a1()
w=A.U()
w.r=B.x.j(0.07).gt(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.L()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.a1()
q=A.U()
q.r=B.c.j(0.05).gt(0)
q.c=1
for(p=0;p<u;p+=4){r=q.L()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ag()
l=f.ag()
k=f.ag()
$.a1()
j=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
j.r=t.j(0.25+f.ag()*0.5).gt(0)
r=j.L()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.a1()
j=A.a([],l)
h=new A.b_(k.r,B.aw,null,null,j)
j.push(new A.bj(v,t))
k=i-0.04
j.push(new A.aw(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aw(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bZ())
k=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
k.r=m.j((n&1)===0?0.09:0.03).gt(0)
r=k.L()
k=h.gbM().a.snapshot()
o.drawPath((h.e=new A.cG(k)).a,r)
r.delete()}break
default:$.a1()
w=A.U()
w.r=B.x.j(0.07).gt(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=w.L()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.a1()
g=A.U()
g.r=B.c.j(0.035).gt(0)
for(n=0;n<120;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=g.L()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ao(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b7H.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a1(),k=A.U(),j=this.b
k.r=j.j(0.9).gt(0)
k.b=B.aj
k.c=2.4
k.d=B.bZ
for(w=e.a,v=e.b,v=[D.e6q,new A.d7([w,0,-1,1]),new A.d7([0,v,1,-1]),new A.d7([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.b_(l,B.aw,null,null,s)
s.push(new A.bj(r+p*34,q))
s.push(new A.aw(r,q))
s.push(new A.aw(r,q+o*34))
m=k.L()
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cG(s)).a,m)
m.delete()
s=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
s.r=j.j(0.9).gt(0)
m=s.L()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ao(d){return!d.b.A(0,this.b)}}
C.tv.prototype={}
C.WD.prototype={
S(){return new C.b7O()}}
C.b7O.prototype={
gnr(){var w=this.d
return w===$?this.d=this.a.c:w},
gDR(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ao(new A.bb(w.b,B.aY,B.aL),$.as())}return v},
gawy(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ao(new A.bb(w.c,B.aY,B.aL),$.as())}return v},
gamY(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ao(new A.bb(w.y,B.aY,B.aL),$.as())}return v},
p(){var w=this,v=w.gDR(0),u=v.R$=$.as()
v.O$=0
v=w.gawy()
v.R$=u
v.O$=0
v=w.gamY()
v.R$=u
v.O$=0
w.a2()},
anw(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.kv(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cRP(this,f,u),e===u,s,s,s,s))}return A.cd(B.bH,r,B.by,6,8)},
asR(d){var w=null,v=B.c.j(0.07)
return A.bn(w,new A.b0(4,A.m(14),B.V),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l5,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnr(),a0=f.gDR(0),a1=a0.a.a,a2=f.gawy(),a3=a2.a.a,a4=f.gamY(),a5=d.b5O(a4.a.a,a3,a1)
a1=x.n
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a7(190,260,A.eY(B.B,new A.a7(270,370,new C.Wk(a5,d,f.a.e,e),e),B.h,B.dp),e),e,e,e)
a0=A.aK(e,B.T,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.asR("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSd(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aK(e,B.T,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.asR("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSe(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xr[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.be
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c2(o,o,o,o),e,e,new A.a8(B.ax,B.aE,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aJ(e,A.u(A.a([p,B.dd,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSf(f,t),e,e,e,e,e,e,!1,B.ae))}v=A.cd(B.bH,v,B.by,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.b2(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eM:B.K,2,B.r,-1)
q.push(A.aJ(e,A.p(e,A.V(D.aru[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c2(o,o,o,o),new A.by(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSg(f,n),e,e,e,e,e,e,!1,B.ae))}q=A.cd(B.bH,q,B.by,8,8)
a4=A.aK(e,B.T,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.asR("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSh(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.ma,e,e,e)
m=A.a([],w)
for(l=D.AM.gdH(D.AM),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b6(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eM:B.be
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c2(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aJ(e,A.u(A.a([j,B.bw,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSi(f,k),e,e,e,e,e,e,!1,B.ae))}m=A.cd(B.bH,m,B.by,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.ma,e,e,e)
k=f.gnr()
return new A.B(new A.L(0,0,0,a3.f.d),A.br(!0,new A.d3(new A.aV(0,1/0,0,a1.a.b*0.92),A.cQ(A.a([D.ePh,B.ac,d,B.aS,a0,B.U,a2,B.aB,D.eUN,B.P,v,B.aB,D.ePq,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.ms(e,9,""+B.k.U(f.gnr().f),36,18,new C.cSj(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.ma,e,e,e),B.ar,f.anw(D.a_A,f.gnr().r,new C.cSk(f),D.d0Y),B.ac,A.d("BORDER",e,e,e,e,e,e,H.ma,e,e,e),B.ar,f.anw(D.a_7,f.gnr().w,new C.cSl(f),D.d12),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.ma,e,e,e),B.ar,f.anw(D.a_2,f.gnr().x,new C.cSn(f),D.d2q),B.ar,A.iu(e,B.b0,e,B.ag,e,new C.cSo(f),e,e,e,D.eK7,f.gnr().z),B.bv,A.bJ(D.eOd,new C.cSp(f,a6),A.bk(B.b0,e,e,e,e,B.om,e,e,new A.b4(A.m(16),B.V),e,e,e))],w),e,O.ad3,e,e,B.af,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDl.prototype={
a5(d,e){var w,v,u,t=new A.b_($.a1().r,B.aw,null,null,A.a([],x.v))
t.N(new A.bj(0,0))
w=e.a
t.N(new A.aw(w,0))
v=e.b
t.N(new A.aw(w,v))
t.N(new A.aw(w/2,v-12))
t.N(new A.aw(0,v))
t.N(new A.bZ())
u=A.U()
u.saw(D.bFr.aA(0,new A.af(0,0,0+w,0+v)))
d.b4(t,u)},
ao(d){return!1}}
C.bcX.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a1()
w=A.U()
w.saw(D.bEA.aA(0,new A.af(0,0,a3,a4)))
a5.bp(new A.af(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f8()
u.e0(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ag()*20
l=56+u.ag()*40
k=D.cCE[u.aF(9)]
j=u.aF(14)
J.bP(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.af(n,j,n+m,j+l)
h=A.c_(i,B.hh)
g=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.x,0.45)
e.toString
g.saw(new A.a8(B.a_,B.a7,B.w,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.L()
w.drawRRect(A.fM(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
e.r=E.iQ.j(0.55).gt(0)
d=e.L()
w.drawRect(A.cz(new A.af(h,j,g,j+2)),d)
d.delete()
j=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
j.r=E.iQ.j(0.4).gt(0)
d=j.L()
w.drawRect(A.cz(new A.af(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aF(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.saw(D.bE1.aA(0,new A.af(0,r,a3,q)))
d=p.L()
w.drawRect(A.cz(new A.af(0,r,a3,q)),d)
d.delete()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.x.j(0.5).gt(0)
p.z=B.jf
d=p.L()
w.drawRect(A.cz(new A.af(0,q,a3,q+14)),d)
d.delete()}w=A.U()
w.r=D.aZd.j(0.72).gt(0)
a5.bp(new A.af(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.U()
a4.saw(new A.bR(B.B,0.5,B.w,a0,0,A.a([D.b4c.j(0.22),B.K],t),a0,a0).aA(0,A.c0(new A.v(w,a2),a1)))
a5.az(new A.v(w,a2),a1,a4)},
ao(d){return!1}}
C.b63.prototype={
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.c,n=B.a.i(o.c),m=A.ad("[ \t]{2,}",!0,!1,!1,!1),l=A.aI(n,m," ")
n=x.p
m=A.a([],n)
for(w=3;w>=1;--w){v=-w
m.push(new A.cF(14,w*2,v*2.2,v*2,p,p,new A.ky(new A.o(A.aq(D.ju,D.b7N,w/4),p,new A.c2(B.V,new A.ay(B.x.j(0.12),1,B.r,-1),B.V,B.V),B.I2,p,p,B.n),B.b6,p,p),p))}v=x.V
u=A.a([new A.aa(0,B.G,B.x.j(0.35),B.aAA,8)],v)
t=A.a([],n)
for(w=0;w<5;++w){s=new A.b2(2,2)
t.push(A.p(p,p,B.h,p,p,new A.o(E.iQ.j(0.6),p,p,new A.by(s,s,s,s),p,p,B.n),p,14,p,p,p,p,p,3))}u=A.p(p,A.u(t,B.m,p,B.t5,B.j,0,B.p),B.h,p,p,new A.o(p,p,p,D.aOR,u,D.bFp,B.n),p,p,p,p,p,p,p,14)
v=A.a([new A.aa(0,B.G,B.x.j(0.4),B.dn,18)],v)
t=A.an(p,A.b1(p,p,p,new C.aDl(p),D.eds),p,p,p,26,-2,p)
s=o.d
r=q.x
if(q.f)o=A.u(A.a([A.aK(p,B.T,!1,p,!0,B.q,p,A.aL(),q.r,p,p,p,p,p,2,A.bn(p,B.et,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Page title",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!1,p,B.ad,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.eAv,!0,B.a5,p,B.am,p,p,p,p),A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.45),p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.U,A.C(A.aK(p,B.T,!1,p,!0,B.q,p,A.aL(),q.w,p,p,p,p,p,2,A.bn(p,B.et,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Write your family story here\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.es2,!0,B.a5,B.yb,B.am,p,p,p,p),1)],n),B.al,p,B.e,B.j,0,B.p)
else{o=A.a([A.d(o.b,p,p,p,p,p,p,D.eAp,p,p,p),B.au,A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,11,B.cJ,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.P,A.A(A.a([A.C(A.p(p,p,B.h,D.IP.j(0.35),p,p,p,1,p,p,p,p,p,p),1),new A.B(B.fi,A.d("\u2766",p,p,p,p,p,p,A.l(p,p,D.IP.j(0.7),p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.C(A.p(p,p,B.h,D.IP.j(0.35),p,p,p,1,p,p,p,p,p,p),1)],n),B.m,p,B.e,B.j,0,p,p),B.aB],n)
if(l.length===0)o.push(A.d("This page is blank. Tap the pencil to write.",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.4),p,p,p,p,p,p,p,p,16,p,p,p,p,1.7,!0,p,p,p,p,p,p,p,p),p,p,p))
else o.push(A.VB(A.ds(A.a([A.ds(p,p,p,p,p,p,p,p,p,D.euY,B.a.al(l,0,1)),A.ds(p,p,p,p,p,p,p,p,p,p,B.a.aV(l,1))],x.R),p,p,p,p,p,p,p,p,p,p),p,p,A.l(p,p,G.iR.j(0.93),p,p,p,p,p,p,p,p,16.5,p,p,p,p,1.72,!0,p,p,p,p,p,p,p,p),p))
o=A.cf(A.u(o,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,p,p,p,B.af)}m.push(A.A(A.a([u,A.C(A.p(p,A.bw(B.I2,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.B(D.bhQ,A.u(A.a([A.C(o,1),new A.B(B.jz,A.d("\u2014 "+q.d+" \u2014",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,1,p,p,p,p,p,p),B.L,p,p),p)],n),B.al,p,B.e,B.j,0,B.p),p),A.an(0,A.bQ(p,new A.o(p,p,p,p,p,new A.a8(B.a_,B.a7,B.w,A.a([B.x.j(0.16),B.K],x.O),p,p),B.n),B.b6),p,p,0,p,0,22)],n),p),B.ap),B.h,p,p,new A.o(p,p,p,B.I2,v,D.bFT,B.n),p,p,p,p,p,p,p,p),1)],n),B.al,p,B.e,B.j,0,p,p))
return new A.am(B.W,p,B.a9,B.q,m,p)}}
C.amx.prototype={
S(){return new C.aA_(A.a([],x._))},
bl(){return this.r.$0()},
p_(){return this.w.$0()},
gdQ(){return this.c}}
C.aA_.prototype={
Z(){var w,v
this.a0()
this.uW()
w=this.a
v=w.c
if(v.length!==0)C.a4L(v,w.e,w.d.w)},
uL(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fH0(r,t.e,!1,s.w,new C.dKb(u),null,s),$async$uL)
case 2:w=3
return A.b(u.uW(),$async$uL)
case 3:return A.h(null,v)}})
return A.i($async$uL,v)},
Y3(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Y3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fH0(r,t.e,!0,s.w,new C.dKa(u),null,s),$async$Y3)
case 2:w=3
return A.b(u.uW(),$async$Y3)
case 3:return A.h(null,v)}})
return A.i($async$Y3,v)},
uW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$uW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zt(q.a.c),$async$uW)
case 7:p=e
if(q.c!=null)n=q.e||J.ct(p)
else n=!1
if(n)q.n(new C.dKd(q,p))
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
return A.b(C.ET(q.a.c).cI(0,B.oT),$async$uW)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dKe(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dKf(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uW,v)},
MH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.E(s).f.P(D.eh1)
w=3
return A.b(C.ET(t.a.c),$async$MH)
case 3:r=e
w=4
return A.b(C.fnD(t.a.c,r),$async$MH)
case 4:q=e
w=5
return A.b(C.ET(t.a.c),$async$MH)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dK9(t,p))
o=t.c.E(s).f
s=A.d(q?"Family trees synced \u2014 "+J.a9(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.aZ(null,null,null,q?B.dr:B.cK,null,B.q,null,s,null,B.lP,null,null,null,null,null,null,null,null,null,null))
t.a.p_()
case 1:return A.h(u,v)}})
return A.i($async$MH,v)},
Gr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hMr(l),$async$Gr)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hh9(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aW7(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Gr)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.fZv(r)
o=Date.now()
n=t.a.c
m=new C.kk(l,r.toUpperCase(),p,!0,B.T,D.AA,new A.N(o,0,!1),0,n,D.rG)
w=5
return A.b(C.a0l(n,m),$async$Gr)
case 5:w=6
return A.b(t.uW(),$async$Gr)
case 6:t.a.bl()
t.a.p_()
if(t.c==null){w=1
break}t.D5(m)
case 1:return A.h(u,v)}})
return A.i($async$Gr,v)},
D5(d){return this.c58(d)},
c58(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$D5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zt(u.a.c),$async$D5)
case 2:n=l.qC(k.dF(f,new C.dKc(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hl(m,new C.amr(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$D5)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0l(u.a.c,o),$async$D5)
case 6:case 5:w=7
return A.b(u.uW(),$async$D5)
case 7:u.a.p_()
return A.h(null,v)}})
return A.i($async$D5,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.K(d).ax.a===B.H,o=new C.t1(p)
if(r.e)return A.at(A.mf(q,p?B.bl:B.bu,q,q,q,q,q,q,q,q),q,q,q)
if(J.ch(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.X,!0,q,A.aH(!1,q,!0,A.p(q,D.btK,B.h,q,q,new A.o(B.aR.j(0.12),q,A.H(B.aR,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cD,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc4e(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ab)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.E0(A.p(q,A.u(A.a([u,B.aS,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bl:B.bu,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bJ(D.eVX,r.gaLx(),A.bk(B.bU,q,q,q,q,q,Af.Vu,q,new A.b4(A.m(12),B.V),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bhO,q,q,1/0),15,B.ag,1.05,D.a5_,q)}w=J.a9(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.bc],v)
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.xb,B.aR,q,q,q,q),q,q,q,new C.dKh(r),q,q,q,q,"Sync family trees with database",q))
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.Ac,B.aR,q,q,q,q),q,q,q,r.gacb(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dj(E.aio,D.eDH,r.gaLx(),A.bk(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.a9(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.E0(r.cqz(J.q(r.d,s),o),14,B.ag,1,D.a5_,q))
B.d.v(w,u)}return A.u(A.a([p,B.aB,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cqz(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dT:B.cg).j(0.55),B.r,1),r=A.a([new A.aa(0,B.G,B.x.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.bsN,B.h,w,w,new A.o(B.aR.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gakU(),m=d.d?"":" \xb7 Public",l=d.y===D.jY?" \xb7 View only":"",k=x.p
l=A.C(A.u(A.a([o,B.bw,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bl:B.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.X,!0,w,A.aH(!1,q,!0,new A.B(B.bC,A.A(A.a([p,B.bb,l,A.V(B.Kn,v?B.bl:B.bu,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dKg(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ab),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amr.prototype={
S(){return new C.azX(A.a([],x._),A.aY(x.N),A.b3K())},
bl(){return this.r.$0()},
gdQ(){return this.c}}
C.azX.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9k()
w=u.a
v=w.c
if(v.length!==0)C.a4L(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.as()
w.O$=0
this.a2()},
a_T(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wJ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJC(r),s,null,!0,!0,x.y),$async$a_T)
case 3:if(e!==!0||t.c==null){w=1
break}t.HQ()
t.n(new C.dJD(t,r))
w=4
return A.b(t.uN(),$async$a_T)
case 4:t.a.bl()
t.wJ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a_T,v)},
cgW(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.x1$.push(new C.dJx(w,f,d,e))},
aNG(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.df()
u.dX(w,v,0,1)
u.jd(q,q,1,1)
this.w.st(0,u)},
b3w(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ev(new Float64Array(16))
q.dR(r)
w=q.Bm()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.df()
t.dX(r,u,0,1)
t.jd(v,v,1,1)
t.dX(-r,-u,0,1)
t.ie(0,q)
s.st(0,t)},
a9k(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zt(u.a.c),$async$a9k)
case 2:t=s.qC(r.dF(e,new C.dJ5(u)))
if(t!=null&&u.c!=null)u.n(new C.dJ6(u,t))
return A.h(null,v)}})
return A.i($async$a9k,v)},
wJ(d){var w=null,v=this.c
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
return A.b(C.fH0(o,t,!1,r,new C.dJk(u),q.a,s),$async$uL)
case 2:n=A
m=J
w=3
return A.b(C.ET(u.a.c),$async$uL)
case 3:p=n.qC(m.dF(e,new C.dJl(u)))
if(p!=null&&u.c!=null)u.n(new C.dJm(u,p))
return A.h(null,v)}})
return A.i($async$uL,v)},
HQ(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uN(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0l(t,s),$async$uN)
case 2:return A.h(null,v)}})
return A.i($async$uN,v)},
Zx(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.te(q,t.a.c)){t.wJ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hNA(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$Zx)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HQ()
t.n(new C.dJw(t,r))
w=4
return A.b(t.uN(),$async$Zx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zx,v)},
Yg(){return this.c5a()},
c5a(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.te(q,t.a.c)){t.wJ("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.K(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJu(r,new C.t1(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Yg)
case 3:if(e!==!0||t.c==null){w=1
break}t.HQ()
t.n(new C.dJv(r,t))
w=4
return A.b(t.uN(),$async$Yg)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yg,v)},
TD(d){return this.bsq(d)},
bsq(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.te(r,t.a.c)){t.wJ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dIU(t,d),r,null,!0,!0,x.P),$async$TD)
case 3:s=f
if(s==null){w=1
break}t.HQ()
t.n(new C.dIV(t,s))
w=4
return A.b(t.uN(),$async$TD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TD,v)},
a0e(d){return this.csF(d)},
csF(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.K(s)
t=u.c
t.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dJF(u,d,new C.t1(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0e)
case 2:return A.h(null,v)}})
return A.i($async$a0e,v)},
c1y(d){var w=this,v=w.d
v===$&&A.c()
if(C.te(v,w.a.c))w.Mn(d)
else w.a0e(d)},
aeE(d,e){return this.ckJ(d,e)},
ckJ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aeE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.K(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.dJz(new C.t1(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$aeE)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aeE,v)},
Gw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Gw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.jY?3:5
break
case 3:w=6
return A.b(C.fvl(t.a.c),$async$Gw)
case 6:s=e
o=t.a
r=C.fOt(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aeE(!s,!r),$async$Gw)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bwO(o,t.a.c)){t.wJ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kN(o,"Cancel","Remove",q.y===D.jY?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Gw)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLd(t.a.c,t.d.a),$async$Gw)
case 11:t.a.bl()
o=t.c
if(o==null){w=1
break}A.ir(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Gw,v)},
a6X(d){return this.bD9(d)},
bD9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a6X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.te(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.bd(s,new C.dIW(p))){o=A.S(s)
p.a=A.qC(new A.cR(new A.a3(s,new C.dIX(d),o.k("a3<1>")),new C.dIY(),o.k("cR<1,n>")))}q=p.a
if(q==null)q=d.d
t.HQ()
t.n(new C.dIZ(t,s,d,q))
w=3
return A.b(t.uN(),$async$a6X)
case 3:t.wJ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a6X,v)},
Mn(d){return this.bFa(d)},
bFa(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.te(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0e(d),$async$Mn)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.dJ2(t,d),r,null,!0,!0,x.P),$async$Mn)
case 6:s=f
if(s==null){w=1
break}t.HQ()
t.n(new C.dJ3(t,s))
w=7
return A.b(t.uN(),$async$Mn)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mn,v)},
cqT(){var w=this,v=w.d
v===$&&A.c()
if(!C.te(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dJE(w))
w.uN()},
Wh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Wh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bwO(n,t.a.c)){t.wJ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.K(n)
s=$.as()
r=new A.ao(B.aq,s)
q=t.d.e
p=A.bi(new A.I(q,t.gc03(),A.S(q).k("I<1,n>")).bZ(0,new C.dJf()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJg(t,new C.t1(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Wh)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HQ()
t.n(new C.dJh(t,p))
w=4
return A.b(t.uN(),$async$Wh)
case 4:t.wJ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Wh,v)},
c04(d){return B.a.i(d.toLowerCase())},
c4_(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.te(v,w)
t=r.d
s=C.hDa(t)
C.hMv(q,t.b,u,C.hD9(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.K(d).ax.a===B.H,m=new C.t1(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a3(l,new C.dJM(),A.S(l).k("a3<1>")).gH(0)
l=n?B.bV:B.iP
v=A.V(B.Ww,n?B.bl:B.bu,o,o,o,18)
u=x.p
v=A.a([new A.B(B.zy,A.aH(!1,o,!0,new A.B(B.hr,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bl:B.bu,o,o,o,o,o,o,o,o,o,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dJN(p,d),o,o,o,o,o,o,o),o),new A.B(B.mv,p.bPN(m),o)],u)
if(p.d.y===D.jY){t=B.qu.j(0.15)
s=A.m(12)
r=A.H(B.qu.j(0.45),B.r,1)
q=C.ER(p.d,p.a.c)
v.push(new A.B(B.wp,A.p(o,A.A(A.a([D.bxS,B.av,A.C(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a1,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iD,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.bc],u)
if(C.te(p.d,p.a.c)&&p.e.length!==0)u.push(new C.I3("Undo",B.uA,p.gcqS(),m,o,o))
u.push(new C.I3("Family Book",D.bnq,p.gc3Z(),m,B.rc,o))
if(C.te(p.d,p.a.c))u.push(new C.I3("Display settings",Ai.Ev,p.gc59(),m,B.aW,o))
u.push(new C.I3("Sync",B.Ac,p.gacb(),m,o,o))
t=p.d
if(t.y===D.jY||C.bwO(t,p.a.c)){t=p.d.y===D.jY?"Remove shared tree":"Delete tree"
u.push(new C.I3(t,B.e4,p.gbDj(),m,B.fH,o))}if(C.te(p.d,p.a.c))u.push(new C.I3("Add member",B.uw,new C.dJO(p),m,B.bU,o))
v.push(new A.B(O.acI,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gakU()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bl:B.bu,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.co(new C.dJP(p,m))
v.push(A.C(n,1))
if(w>0){n=p.f
u=A.V(n?K.WA:U.Ko,o,o,o,o,o)
v.push(A.at(A.hg(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dJQ(p),o),o,o,o))}return A.cg(o,l,A.br(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bPN(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.aa(0,B.G,B.ff.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.wY,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.X,!0,m,A.aH(!1,m,!0,A.p(m,D.bAP,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cD,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacb(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ab)
r=n.d
q=A.d(r.b,m,1,B.Z,m,m,m,D.eqw,m,m,m)
r=r.gakU()
p=n.d.gakU()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.C(A.u(A.a([q,B.bw,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a1,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.te(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.by3,m,m,m,n.gcer(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.iX:B.mD
r=r?"Private":"Public"
r=A.C(n.ar2(q,"Privacy",r,n.a.d.w?n.gcpZ():m),1)
q=A.C(n.ar2(B.x4,"Tree code",n.d.c,new C.dJ4(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.aa,q,B.aa,A.C(n.ar2(D.bpc,"Collaborators",p,n.gbU5()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.jY){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.X,!0,A.m(999),A.aH(!1,A.m(999),!0,new A.B(B.fD,A.A(A.a([A.V(B.o9,B.c,m,m,m,14),B.ez,A.d("View only",m,m,m,m,m,m,B.aJ0,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ab)],o))}return A.p(m,A.bw(u,new A.am(B.W,m,B.a9,B.q,A.a([t,new A.B(B.Dt,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.h,m,m,new A.o(m,m,m,w,v,D.bE4,B.n),m,m,m,m,m,m,m,1/0)},
ar2(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.X,!0,A.m(14),A.aH(!1,A.m(14),!0,new A.B(D.bju,A.u(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.Z,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.y8,A.d(f,w,1,B.Z,w,w,w,L.aIN,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ab)}}
C.bac.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gah(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b1(t,t,t,new C.baf(s,t),new A.ap(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.cZV(this),x.l))
r=s.c
B.d.v(u,new A.I(r,new C.cZW(this),A.S(r).k("I<1,r>")))
return new A.B(B.rC,new A.a7(w,v,new A.am(B.W,t,B.a9,B.h,u,t),t),t)}}
C.Ie.prototype={}
C.Ec.prototype={}
C.bae.prototype={
gbbE(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFq.prototype={}
C.baf.prototype={
bET(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.a1()
v=A.U()
v.r=B.bz.j(0.75).gt(0)
v.c=2
v.d=B.bZ
d.bU(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.b_(q.r,B.aw,null,null,A.a([],x.v))
q=w+5.5
t.N(new A.bj(u,q))
s=w-1.1
r=w-8.8
t.N(new A.p4(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.N(new A.p4(u+4.95,r,u+9.9,s,u,q))
t.N(new A.bZ())
q=A.U()
q.r=B.c.gt(0)
d.az(new A.v(u,w),9,q)
q=A.U()
q.r=B.bz.gt(0)
d.b4(t,q)},
bER(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.d_f())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.bd(a0,new C.d_g(f))
t=new A.I(a0,new C.d_h(f),A.S(a0).k("I<1,P>")).bZ(0,new C.d_i()).cP(0,1/0,B.vH)
w=f.a
d.bU(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.J)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.L()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lx(m)
i=Math.min(10,l/2)
l=$.a1()
h=A.a([],q)
g=new A.b_(l.r,B.aw,null,null,h)
h.push(new A.bj(w,v-i))
l=j*i
h.push(new A.dk(w,v,w+l,v))
h.push(new A.aw(n-l,v))
h.push(new A.dk(n,v,n,v+i))
h.push(new A.aw(n,o.b))
k=e.L()
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cG(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.a1()
w=A.U()
w.r=B.bU.j(0.75).gt(0)
w.c=2.2
w.b=B.aj
w.d=B.bZ
w.e=B.fj
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.J)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bER(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.L()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.J)(v),++s){q=v[s]
if(q.c)this.bET(d,w,q.a,q.b)}},
ao(d){return d.b!==this.b}}
C.bdU.prototype={
gbYY(){var w=this.c
if(B.a.i(w.y).length!==0)return D.cYP
switch(w.c.a){case 0:return D.cv3
case 1:return D.cFh
case 2:return D.cTU}},
gbZ0(){var w=this.c,v=C.fYW(w.w),u=C.fYW(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.K(d).ax.a===B.H,q=t.gbYY(),p=t.c,o=I.bxD(p.f),n=t.gbZ0(),m=x.V,l=A.a([new A.aa(0,B.G,B.d.gai(q).j(0.35),B.cC,10)],m),k=r?B.aG:B.c,j=A.H(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.rv(B.B,s,B.cj,B.bM,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.B,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a8(B.a_,B.a7,B.w,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hT(w,B.ap),B.h,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aE,B.w,q,s,s),B.a6),s,56,s,s,B.DJ,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eA3,s,s,s),B.h,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bjy,s,s,s),s,s,s,-6,-4,s))}k=r?B.d3:B.c
j=A.m(8)
w=A.H(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.G,B.x.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.d3,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aP:B.bu,s,s,s,s,s,s,s,s,7.5,s,s,B.a1,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aJ(s,new A.a7(84,112,A.u(A.a([new A.am(B.W,s,B.a9,B.h,l,s),B.au,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aQE,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bjI,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ae)}}
C.b9l.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.a1()
w=A.U()
v=this.b
u=v?B.c:D.b0C
w.r=u.j(v?0.05:0.09).gt(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.L()
t.drawCircle(r,s,1,q)
q.delete()}},
ao(d){return d.b!==this.b}}
C.brg.prototype={
B(d){var w=this,v=null,u=new C.eUk(w),t=w.c,s=t?B.d3:B.c,r=A.m(12),q=u.$3(B.hH,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.f_,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Eo,"Zoom out",w.e)
return A.aD(!1,B.X,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.f_,v,v,v,1,v,v,v,v,v,22),u.$3(B.ag_,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dt,v,v,v,B.ab)}}
C.bh9.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.H(B.bU,B.r,2),s=w.e,r=x.p
t=A.aJ(v,A.p(v,A.u(A.a([A.V(s?K.WA:U.Ko,B.bU,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.ewu,v,v,v)],r),B.m,v,B.b5,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ae)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eux,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.I(s,new C.ew_(w),A.S(s).k("I<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XG.prototype={
S(){return new C.ayo()},
bl(){return this.Q.$0()},
gdQ(){return this.w}}
C.ayo.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.as()
r.d!==$&&A.aO()
r.d=new A.ao(new A.bb(t,B.aY,B.aL),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ao(new A.bb(t,B.aY,B.aL),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ao(new A.bb(t,B.aY,B.aL),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ao(new A.bb(t,B.aY,B.aL),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ao(new A.bb(t,B.aY,B.aL),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ao(new A.bb(t,B.aY,B.aL),s)
t=u?q:v.c
r.y=t==null?D.wB:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hEG(w.r,w.f)
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
NE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fOt(p.y,p.w)
w=3
return A.b(A.kY(t.a.w,B.G5),$async$NE)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aW7(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NE)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hha(p.y,p.w)
t.a.bl()
case 5:w=7
return A.b(Ah.F1(78,800),$async$NE)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.der(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NE,v)},
bZ_(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hO(B.o.u(1000*Date.now()),w,D.wB,null,null,null,"","","","","",1,!1,0)
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
s=v.azg(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).K(s)},
a6z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a6z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.deq(r),s,null,!0,!0,x.y),$async$a6z)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).K(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a6z,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===B.H,i=new C.t1(j),h=l.a.e,g=A.S(h).k("a3<1>"),f=A.z(new A.a3(h,new C.deA(l),g),g.k("E.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.B(D.bi7,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hJ(A.aH(!1,k,!0,new A.B(B.nk,A.V(B.e4,B.nW,k,k,k,17),k),B.cD,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbA1(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.j5:B.iz
t=I.bxD(l.as)
if(l.as==null)s=A.V(B.o2,j?B.bl:B.bu,k,k,k,40)
else s=k
s=A.at(A.aJ(k,new A.am(B.W,k,B.a9,B.q,A.a([A.hh(u,t,s,k,42),A.an(0,A.hh(B.bU,k,D.brQ,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gbYX(),k,k,k,k,k,k,!1,B.ae),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayq(t,"Full name",B.mz,1,1,i,B.ly)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.U,new C.bdS(i,u,new C.deB(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bl:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bbS],q)
o=l.a.e
B.d.v(p,new A.I(o,new C.deC(),A.S(o).k("I<1,eq<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bl:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bbU],q)
B.d.v(q,new A.I(f,new C.deE(),A.S(f).k("I<1,eq<n?>>")))
o=A.u(A.a([t,B.ar,new C.aaw(i,r,"Who is their parent?",p,new C.deF(l),k,o),B.aB,n,B.ar,new C.aaw(i,m,"Who is their spouse / partner?",q,new C.deG(l),k,o)],v),B.al,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayq(q,"Birth date",D.af8,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayq(m,"Birth place",B.WP,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayq(n,"Date of death (if deceased)",D.ahf,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayq(p,"Occupation",B.XZ,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.B,k,B.a9,B.q,w,k),B.aB,s,B.bv,new C.aax(i,"Identity",u,k),B.ac,new C.aax(i,"Family links",o,k),B.ac,new C.aax(i,"Life details",A.u(A.a([q,B.U,m,B.U,n,B.U,p,B.U,C.ayq(r,"Notes",B.ku,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.ayp(i,"Child order",l.c5k(l.at),new C.deH(l),new C.deI(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fEy(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.deJ(l):k
B.d.v(r,A.a([B.U,new C.ayp(i,"Visible in tree",u,w,new C.deK(l),k)],v))}r.push(B.U)
w=j?B.j5:B.iz
u=A.m(14)
t=A.H(j?B.dT:B.cg,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iu(k,B.bU,k,B.ag,k,new C.deL(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bl:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ack,k,k,k))
r.push(B.bv)
w=j?B.aN:B.aG
j=j?B.dT:B.cg
r.push(A.A(A.a([A.C(A.dU(B.mT,new C.deD(d),A.d9(k,k,k,k,k,k,k,k,k,w,k,k,B.c9,k,new A.b4(A.m(14),B.V),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.C(A.bJ(D.eag,l.gbYZ(),A.bk(B.aR,k,k,0,B.c,k,B.c9,k,new A.b4(A.m(14),B.V),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.ei(B.fS,k,B.ag,h,new A.a7(420,k,A.cf(A.u(r,B.al,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.af),k),D.ada,k,B.acA,new A.b4(g,B.V),k,k)},
c5k(d){var w=B.o.J(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.J(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aax.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bl:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j5:B.iz,s=A.m(16)
return A.u(A.a([new A.B(D.ady,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dT:B.cg,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bdT.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dT:B.cg).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aN:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a1,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.T,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bn(u,B.et,u,B.ua,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bl:B.bu,u,u,u,u,u,u,u,u,u,u,u,B.cp,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ad,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaw.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dT:B.cg).j(0.85),B.r,1),q=A.V(B.qe,u?B.bl:B.bu,v,v,v,v),p=A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a1,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Cd(A.a2_(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bl:B.bu,v,v,v,v,v,v,v,v,v,v,v,B.cp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lR,v,v,v)}}
C.bdS.prototype={
B(d){var w=new C.deM(this)
return A.A(A.a([w.$3(D.Wi,"Male",B.L8),B.aa,w.$3(D.aeo,"Female",B.KT),B.aa,w.$3(D.wB,"Other",B.mB)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayp.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.j5:B.iz,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.C(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bl:B.bu,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aEt(u,B.Eo,w.f,v),B.bp,new C.aEt(u,B.hH,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eh,v,v,v)}}
C.aEt.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bl:B.bu).j(0.4)
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,new A.a7(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ab)}}
C.aay.prototype={
bIs(d){switch(d.a){case 0:return B.bU
case 1:return B.bz
case 2:return B.cR}},
bIt(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aRK(d){var w,v,u,t
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
B.d.v(r,A.a([A.V(f,B.bU,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bl:B.bu,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.C(A.u(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aG,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cI,B.zw,p,p,1/0)},
aaM(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bl:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j5:B.iz,s=A.m(16),r=A.H(v?B.dT:B.cg,B.r,1)
return A.u(A.a([new A.B(D.ady,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h2v(r,q),o=q.c,n=t.bIs(o),m=I.bxD(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aN:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.jY?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bl:B.bu,s,s,s,s,s,s,s,s,12,s,s,B.a1,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.aa(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hh(u,m,m==null?A.V(B.o2,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ei,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bIt(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mu,s,s,s),s,s,s)
u=x.p
i=A.a([t.z2("Full name",i,B.mz)],u)
if(p>0)i.push(t.z2("Child order","#"+p,B.L_))
r=A.a([h,B.au,r,B.aS,l,B.U,v,B.bv,t.aaM("Identity",i),B.ac,t.aaM("Life details",A.a([t.z2("Birth date",q.w,D.af8),t.z2("Birth place",q.x,B.WP),t.z2("Date of death",q.y,D.ahf),t.z2("Occupation",q.z,B.XZ)],u)),B.ac,t.aaM("Family links",A.a([t.z2("1. Parent",t.aRK(q.d),B.DW),t.z2("2. Spouse",t.aRK(q.e),B.KS)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.aaM("Notes",A.a([t.z2("Notes",q,B.ku)],u))],u))
r.push(B.bv)
r.push(A.bJ(B.Hd,new C.deW(d),A.bk(B.aR,s,s,s,s,s,B.c9,s,new A.b4(A.m(14),B.V),s,s,s)))
return A.eA(s,k,new A.d3(B.lb,A.cf(A.u(r,B.al,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zC,s,s,B.af),s),s,s,s,B.Dx,B.cZ,s,new A.b4(j,B.V),s)}}
C.I3.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bl:B.bu
w=t.j(v.f.a?0.14:0.08)
return new A.B(B.wu,A.hJ(A.aD(!1,B.X,!0,A.m(8),A.aH(!1,A.m(8),!0,new A.a7(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ab),u,v.c,u,u),u)}}
C.amu.prototype={
eD(){var w,v,u=this,t=x.N,s=A.Q(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().aa())
w=u.c
v=A.S(w).k("I<1,a0<n,@>>")
w=A.z(new A.I(w,new C.c2s(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iC(w,new C.c2t(),t,x.U))
return s}}
C.amv.prototype={
S(){return new C.azZ(A.a([],x.bF))},
gd5(){return this.c}}
C.azZ.prototype={
Z(){this.a0()
this.HX()},
HX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$HX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c2w(t.a.c),$async$HX)
case 3:r=e
w=4
return A.b(C.zt(t.a.c),$async$HX)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.ri(q,new C.dJZ(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dK_(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$HX,v)},
xe(d){var w=null,v=this.c
if(v==null)return
v.E(x.q).f.P(A.aZ(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IG(d,e){return this.ctb(d,e)},
ctb(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IG=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dK3(q,e))
t=3
w=6
return A.b(d.$0(),$async$IG)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dK4(q))
$.eH.lT()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IG,v)},
Va(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Va=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oz(r,s.c,s.e),$async$Va)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IG(new C.dJW(t),"Preparing download\u2026"),$async$Va)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Va,v)},
Ve(d){return this.bGz(d)},
bGz(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ve=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oz(r,s.c,s.e),$async$Ve)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IG(new C.dJX(t,d),"Preparing file\u2026"),$async$Ve)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ve,v)},
acy(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$acy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wc.c2().Ko(B.NW,B.rH,!0),$async$acy)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aD.gah(o)}else o=!1
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
p=A.a4(m)
$.ak.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.F0()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acy,v)},
VN(d){return this.bQC(d)},
bQC(d){var w=0,v=A.j(x.H),u=this
var $async$VN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IG(new C.dJY(u,d),"Restoring family trees\u2026"),$async$VN)
case 2:return A.h(null,v)}})
return A.i($async$VN,v)},
VM(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.acy(),$async$VM)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.VN(s),$async$VM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VM,v)},
a_k(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oz(r,s.c,s.e),$async$a_k)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IG(new C.dK2(t),"Creating QR code\u2026"),$async$a_k)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_k,v)},
ZX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Bv()){t.xe("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ct(A.eN(new C.dK0(),!0,null,x.N)),$async$ZX)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.VN(r),$async$ZX)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZX,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===B.H,n=o?B.z0:B.iP,m=o?D.ab_:B.aN,l=o?B.aI:B.cg,k=o?B.aN:B.aG,j=new C.d_j(n,m,l,k,o?B.bP:B.bu)
l=A.aF(p,p,p,p,A.V(B.eq,k,p,p,p,20),p,p,p,new C.dK6(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eG(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.C(C.cZS(!0,B.j_,B.b3,B.b3,q.r?p:q.gckx(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcgR()
t.push(A.C(C.cZS(!s,B.iF,B.b0,B.bD,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.C(C.cZS(!1,B.hf,B.aR,B.bU,q.r?p:q.gbGs(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.C(C.cZS(!1,M.x6,B.aZ,B.aM,q.r?p:q.gbQz(),j,s,"Upload backup file"),1))
l=A.a([new C.bad(v,l,p),B.k9,new C.a9P(j,"QR restore",p),B.U,t,B.d1,new C.a9P(j,"Backup files",p),B.U,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.a9(q.d)>1&&q.a.f==null){v=A.a([B.k9,new C.a9P(j,"One tree",p),B.U],u)
B.d.v(v,J.b3(q.d,new C.dK7(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cQ(l,p,B.Vq,p,p,B.af,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aR.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.G,B.x.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.br(!0,A.p(p,A.A(A.a([K.aHv,B.bb,A.C(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.DA,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cg(w,n,new A.am(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d_j.prototype={}
C.bad.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.G,B.aR.j(0.32),B.kC,28)],x.V)
t=A.an(p,A.V(B.rY,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.B(B.a8,A.A(A.a([A.p(p,D.bAn,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.on,A.C(A.u(A.a([D.eEA,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bGZ,B.n),p,p,p,p,p,p,p,p)}}
C.a9P.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.h,w,w,new A.o(B.aR,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.aa,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bab.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b3.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.G,B.b3.j(0.1),B.cC,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.X,!0,q,A.aH(!1,o,!0,A.er(A.d5(new A.B(E.V2,A.u(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rF,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bw,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cp,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ab)}}
C.bag.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aR.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.er(new A.B(B.eF,A.A(A.a([A.p(v,D.bzA,B.h,v,v,new A.o(q,v,A.H(B.aR.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rF,v,v,v),B.bb,A.C(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hf,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ab)}}
C.Y0.prototype={
S(){return new C.azY()},
gd5(){return this.c}}
C.azY.prototype={
Z(){this.a0()
this.a6a()},
a6a(){var w=0,v=A.j(x.H),u=this,t
var $async$a6a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aYM(u.a.c,B.Ba),$async$a6a)
case 2:t=e
if(u.c!=null)u.n(new C.dJR(u,t))
return A.h(null,v)}})
return A.i($async$a6a,v)},
adW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$adW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dJS(q))
t=4
p=A.fQ3(q.a.d,B.Ba)
if(p==null){n=A.b9("Could not read this QR code.")
throw A.O(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aoE(n.e,m,l,B.Ba,p,n.f),$async$adW)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dJT(q))
q.c.E(x.q).f.P(D.eia)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a4(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(B.a.e_(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dJU(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adW,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.K(d).ax.a===B.H,o=p?B.iT:B.oO,n=p?B.hm:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eG(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.eSX,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aR.j(0.35),B.r,1)
u=A.ph(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aR,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.C(A.p(q,A.u(A.a([B.P,u,B.bv,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.ai,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b5,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ak:B.bA,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcgz()
if(u)u=B.GP
else u=A.V(r.e===!0?B.hs:B.af7,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cb,q,q,q),t,A.d9(q,q,q,q,q,q,q,q,q,B.aR,q,B.fU,q,q,q,new A.ay(B.aR.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.B(B.jz,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ai,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.U)
w.push(new A.a7(1/0,q,A.bJ(B.yi,new C.dJV(d),A.bk(B.aR,q,q,q,q,B.fU,q,q,q,q,q,q)),q))
return A.cg(m,o,new A.B(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Y1.prototype={
S(){return new C.bfi(A.y5(B.w9,B.n0,B.t1))}}
C.bfi.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cg(A.eG(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eLI,w,w,w,1,w,!0),B.x,A.y4(this.d,B.bM,new C.dK8(this,d)),w,!1,!1,w,w)}}
C.aUG.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Nt,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.le.prototype={}
C.a3P.prototype={
S(){return new C.bf1(null,null)}}
C.bf1.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bh(v,B.rv,v,1,v,w)
w.e=A.bh(v,B.oS,v,1,v,w)
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
this.bo_()},
B(d){var w,v,u=this,t=B.d.dP(D.a_w,new C.dwq(u),new C.dwr())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cmW(A.c4(new A.h3(A.a([w,v],x.dS)),new C.dws(u,t),null),!0)}}
C.bf0.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aVB(d,e)
break
case"house":p.lu(d,e,D.cJw)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.a1()
t=A.U()
t.r=B.c.j(0.18+v*0.12).gt(0)
d.az(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lz(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zL(d,e,12)
p.wR(d,e,B.kK,5,14)
break
case"grocery":p.c60(d,e)
break
case"calculator":p.c5I(d,e)
break
case"lumber":p.c68(d,e)
break
case"kitchen":p.c63(d,e)
break
case"landscape":p.lu(d,e,D.cJY)
s=new A.b_($.a1().r,B.aw,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.N(new A.bj(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.N(new A.dk(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.N(new A.dk(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.N(new A.aw(t,w))
s.N(new A.aw(0,w))
s.N(new A.bZ())
w=A.U()
w.r=B.fn.j(0.85).gt(0)
d.b4(s,w)
p.zL(d,e,8)
p.wR(d,e,B.iC,4,18)
break
case"plumbing":p.c6h(d,e)
break
case"electrical":p.lu(d,e,D.cTf)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.a1()
u=A.U()
u.r=B.c.j(q*0.12).gt(0)
d.bp(new A.af(0,0,0+e.a,0+e.b),u)
p.lz(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lz(d,e,B.n8.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zL(d,e,10)
break
case"store":p.c6q(d,e)
break
case"paint_remodel":p.c6c(d,e)
break
case"roofing":p.c6j(d,e)
break
case"warehouse":p.c6x(d,e)
break
case"vehicles":p.c6v(d,e)
break
case"farm":p.c5V(d,e)
break
case"restaurant":p.c6i(d,e)
break
case"tools":p.c6t(d,e)
break
case"wallet":p.c6w(d,e)
break
case"concrete":p.c5O(d,e)
break
case"blueprint":p.c5G(d,e)
break
default:p.aVB(d,e)}},
lu(d,e,f){var w,v=new A.af(0,0,0+e.a,0+e.b)
$.a1()
w=A.U()
w.saw(new A.a8(B.ax,B.aE,B.w,f,null,null).aA(0,v))
d.bp(v,w)},
lz(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gef()/2-h
$.a1()
w=A.U()
w.b=B.aj
w.c=2.4
w.r=f.gt(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.c0(q,p)
r=w.L()
v.drawArc.apply(v,[A.cz(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wR(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a1()
q=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gt(0)
p=q.L()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zL(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.J(s*0.17,0.9)
p=B.k.J(s*0.23,0.85)
$.a1()
o=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.c.j(0.2+r*0.6).gt(0)
n=o.L()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aVB(d,e){var w,v=this
v.lu(d,e,D.cSb)
w=v.c
v.lz(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lz(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bEN(d,e,B.hD,w)
v.wR(d,e,B.c.j(0.7),6,8)},
bEN(d,e,f,g){var w,v,u,t,s,r,q,p
$.a1()
w=A.U()
w.r=f.j(0.35).gt(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.L()
s.drawRect(A.cz(new A.af(16,q,t,q+3)),p)
p.delete()}},
c60(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lu(d,e,D.c1e)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.J(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.J(s,2)
$.a1()
l=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
l.r=D.cHY[B.o.J(s,4)].j(0.85).gt(0)
k=l.L()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lz(d,e,B.c.j(0.35),w,16)
j.wR(d,e,B.iC,5,12)},
c5I(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lu(d,e,D.c1k)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gef()
$.a1()
q=A.U()
q.r=B.c.j(0.1+u*0.12).gt(0)
d.az(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.jf(g,g,g,g,g,B.a5,B.cn,g,B.eS,B.cm)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cLq[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.J(o,2)
p.saR(0,new A.ey(r,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fD()
p.a5(d,new A.v(t*(0.08+B.o.J(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c1m[o]
l=B.kJ.j(0.28+0.3*Math.sin(n))
k=B.o.J(o,2)
p.saR(0,new A.ey(m,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fD()
p.a5(d,new A.v(t*(0.55+B.o.J(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lz(d,e,B.c.j(0.35),w*1.5,14)
h.lz(d,e,B.eM.j(0.55),-v*3.141592653589793*2,8)
h.lz(d,e,B.z1.j(0.4),r*2.8,22)
h.wR(d,e,B.oI,8,10)
h.zL(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.J(w+o*0.22,0.9)
$.a1()
r=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gt(0)
r.c=1.2
i=r.L()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c68(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,Ac.aqs)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.c_(new A.af(20,q,u,q+10),B.kF)
$.a1()
o=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=A.aq(B.hC,B.nM,(r+1)/2).gt(0)
n=o.L()
t.drawRRect(A.fM(p),n)
n.delete()}m.lz(d,e,B.hC.j(0.35),w,15)
m.zL(d,e,8)},
c63(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lu(d,e,D.cIp)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.J(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.J(r*0.13,0.7)
$.a1()
l=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
l.r=B.c.j(0.25+p*0.55).gt(0)
k=l.L()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lz(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.wR(d,e,B.pS,4,14)},
c6h(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lu(d,e,D.cys)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.J(s,0.12)
$.a1()
n=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
n.b=B.aj
n.c=2
n.r=B.c.j(0.45-q*0.12).gt(0)
m=n.L()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wR(d,e,B.nT,6,12)
l.lz(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c6q(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lu(d,e,D.ceF)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.c_(new A.af(q,14,q+u,22),B.jK)
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.fo,B.bJ,(r+1)/2).gt(0)
o=p.L()
t.drawRRect(A.fM(q),o)
o.delete()}n.lz(d,e,B.c.j(0.3),w,16)
n.zL(d,e,8)
n.wR(d,e,B.tT,5,13)},
c6c(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cDM)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.J(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.c_(new A.af(q,p,q+8,p+(18+r*22)),B.i_)
$.a1()
q=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
q.r=[B.i4,B.dD,B.bJ,B.eZ][s].j(0.85).gt(0)
o=q.L()
t.drawRRect(A.fM(p),o)
o.delete()}this.lz(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c6j(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cBy)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.J(v+s*0.12,0.75))
q=B.o.J(s,4)*0.22
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.25).gt(0)
p.c=1.5
o=p.L()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wR(d,e,B.ct,7,11)},
c6x(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.chh)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.c_(new A.af(p,o,p+(t-r*8),o+16),B.kF)
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.ct,B.aN,(Math.sin(q)+1)/2).gt(0)
n=p.L()
s.drawRRect(A.fM(o),n)
n.delete()}this.lz(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c6v(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cWL)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.J(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.J(s,2)*0.08)
q=A.c_(new A.af(r,q,r+28,q+8),B.kF)
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.35+s*0.08).gt(0)
o=p.L()
t.drawRRect(A.fM(q),o)
o.delete()}this.zL(d,e,6)},
c5V(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.cH9)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.a1()
s=A.U()
s.r=B.n8.j(0.75).gt(0)
d.az(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.h9.j(0.85).gt(0)
o.c=3
n=o.L()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lz(d,e,B.n8.j(0.35),w,14)},
c6i(d,e){var w,v,u,t,s,r,q,p,o=this
o.lu(d,e,D.cJl)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.dy(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a1()
q=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.22).gt(0)
p=q.L()
t.drawOval(A.cz(r),p)
p.delete()}o.wR(d,e,B.pS,5,16)
o.zL(d,e,7)},
c6t(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,D.cUB)
w=m.c
v=w*3.141592653589793
m.lz(d,e,B.nM.j(0.55),v*3,10)
m.lz(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.a1()
o=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.nM.j(0.8).gt(0)
n=o.L()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c6w(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,D.cXd)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.c_(new A.af(p,o,p+36,o+22),B.jK)
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.iC,B.n8,q).gt(0)
n=p.L()
s.drawRRect(A.fM(o),n)
n.delete()}m.zL(d,e,9)
m.lz(d,e,B.c.j(0.4),w*2.2,12)},
c5O(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.cNV)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c0(new A.v(v,u),34)
$.a1()
s=A.U()
s.b=B.aj
s.c=5
s.r=B.c.j(0.45).gt(0)
d.fP(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.cg.j(0.85).gt(0)
n=o.L()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c5G(d,e){var w,v,u,t,s,r,q,p
this.lu(d,e,D.cKd)
$.a1()
w=A.U()
w.r=B.c.j(0.12).gt(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.L()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.L()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.J(t*0.85,1)
$.a1()
u=A.U()
u.r=B.dD.j(0.45).gt(0)
d.bp(new A.af(0,p,0+v,p+6),u)
this.lz(d,e,B.kK.j(0.45),-t*3.141592653589793*2,11)},
ao(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apj.prototype={
XH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aM9(),$async$XH)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a60(s),$async$XH)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$XH,v)},
acz(d){return this.c8L(d)},
c8L(d){var w=0,v=A.j(x.H),u=this,t
var $async$acz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hMF(d),$async$acz)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$acz,v)},
B(d){var w,v,u,t=null,s=A.K(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.j5:B.iz
w=x.p
v=A.a([C.aMw(!0,B.pI,1/0,B.p_,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.x.j(0.35)],x.O)
v.push(A.bQ(new A.bE(B.b4,t,t,new A.B(B.wg,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ark,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b4,B.bd,B.w,u,t,t),B.n),B.b6))}v.push(A.an(8,A.A(A.a([A.C(A.dj(D.btD,D.eBd,new C.c9V(this,d),A.bk(B.aR,t,t,t,B.c,t,B.jW,t,t,t,t,B.c6)),1),B.aa,A.C(A.ex(D.bBy,D.eOC,this.gc01(),A.d9(t,t,B.x.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jW,t,t,D.aPg,t,t,t,B.c6)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fT(1.7777777777777777,A.aD(!1,B.X,!0,B.pI,new A.am(B.W,t,B.aX,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ab),t)}}
C.aHK.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aPn.prototype={}
C.aPm.prototype={}
C.aNr.prototype={}
C.WF.prototype={
S(){return new C.avj()}}
C.avj.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bb("",B.aY,B.aL)
v=$.as()
u.d!==$&&A.aO()
u.d=new A.ao(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.as()
w.O$=0
this.a2()},
Ix(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.E(x.q).f.P(D.eiE)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).K(new C.aPn(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.K(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bBf,B.h,n,n,new A.o(B.aR.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.C(A.u(A.a([i,B.bw,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bl:B.bu,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aF(n,n,n,n,A.V(B.cu,m?B.bl:B.bu,n,n,n,n),n,n,n,new C.cSB(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bl:B.bu,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bl:B.bu,n,n,n,n,n,n,n,n,11,n,n,B.cp,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fQj(new C.cSC(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aN:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a1,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.j5:B.iz
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.cg
t=A.aK(n,B.T,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bn(n,new A.b0(4,r,B.d9),n,n,n,n,n,n,!0,new A.b0(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cSD(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,W.GT,n,n,n,n)
u=m?B.aN:B.aG
m=m?B.dT:B.cg
return A.eA(n,l,new A.d3(B.lb,A.cf(A.u(A.a([j,B.aS,i,B.au,w,B.P,v,B.aS,t,B.bv,A.A(A.a([A.C(A.dU(B.de,new C.cSE(d),A.d9(n,n,n,n,n,n,n,n,n,u,n,n,B.c9,n,new A.b4(A.m(12),B.V),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.av,A.C(A.bJ(D.eOR,o.ga_C(),A.bk(B.aR,n,n,n,B.c,n,B.c9,n,new A.b4(A.m(12),B.V),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zE,n,n,B.af),n),n,n,n,T.zF,B.cZ,n,new A.b4(k,B.V),n)}}
C.WE.prototype={
S(){return new C.avi()}}
C.avi.prototype={
Z(){this.a0()
var w=$.as()
this.d!==$&&A.aO()
this.d=new A.ao(B.aq,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.as()
w.O$=0
this.a2()},
Ix(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.E(x.q).f.P(D.egl)
return}v=this.c
v.toString
A.a6(v,!1).K(new C.aPm(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.K(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.bxX,B.h,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.C(A.u(A.a([l,B.bw,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bl:B.bu,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aF(q,q,q,q,A.V(B.cu,p?B.bl:B.bu,q,q,q,q),q,q,q,new C.cSx(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aR.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aR.j(0.25),B.r,1)
u=A.V(B.aeT,B.aR.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.C(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.j5:B.iz
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.cg
v=A.aK(q,B.T,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bn(q,new A.b0(4,t,B.d9),q,q,q,q,q,q,!0,new A.b0(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ad,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cSy(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.ka,q,q,q,q)
w=p?B.aN:B.aG
p=p?B.dT:B.cg
return A.eA(q,o,new A.d3(B.lb,A.cf(A.u(A.a([m,B.aS,l,B.aB,v,B.bv,A.A(A.a([A.C(A.dU(B.de,new C.cSz(d),A.d9(q,q,q,q,q,q,q,q,q,w,q,q,B.c9,q,new A.b4(A.m(12),B.V),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.av,A.C(A.bJ(D.eV1,this.ga_C(),A.bk(B.bU,q,q,q,B.c,q,B.c9,q,new A.b4(A.m(12),B.V),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zE,q,q,B.af),q),q,q,q,T.zF,B.cZ,q,new A.b4(n,B.V),q)}}
C.Wb.prototype={
S(){return new C.au4()}}
C.au4.prototype={
Z(){var w,v=this
v.a0()
w=$.as()
v.d!==$&&A.aO()
v.d=new A.ao(B.aq,w)
v.e!==$&&A.aO()
v.e=new A.ao(new A.bb("1",B.aY,B.aL),w)
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
gHS(){var w,v=this.e
v===$&&A.c()
w=A.d_(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gafG(){var w=this.f
w===$&&A.c()
w=A.d_(B.a.i(w.a.a))
return w==null?0:w},
gaYk(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aJj(d){var w,v=B.k.D(this.gHS()+d,0.25,999999),u=B.k.lN(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.M(v))
else{u=B.k.ab(v,2)
w=A.ad("\\.?0+$",!0,!1,!1,!1)
u=A.aI(u,w,"")}t.saR(0,u)
this.n(new C.cq8())},
ato(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aR,w,w,w,20):w,u=d.a,t=u?B.j5:B.iz,s=A.m(14),r=A.m(14)
u=u?B.dT:B.cg
return A.bn(w,new A.b0(4,s,B.d9),w,B.bC,w,w,w,w,!0,new A.b0(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b0(4,A.m(14),B.a6m),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c02(d,e,f){return this.ato(d,e,f,null)},
Ix(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gafG()<=0){s.c.E(x.q).f.P(D.ekv)
return}r=s.c
r.toString
v=s.gHS()
u=s.gafG()
t=s.gaYk()
A.a6(r,!1).K(new C.aNr(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.K(d).ax.a===B.H,m=new C.t1(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aR.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bry,B.h,o,o,new A.o(o,o,A.H(B.aR.j(0.35),B.r,1),h,o,new A.a8(B.a_,B.a7,B.w,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.C(A.u(A.a([h,B.bw,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bl:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.cp,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aF(o,o,o,o,A.V(B.cu,n?B.bl:B.bu,o,o,o,o),o,o,o,new C.cqe(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.T,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.ato(m,"Item name (optional)","Lumber, paint, labor\u2026",B.L5),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,W.GT,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bl:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.j5:B.iz
t=A.m(14)
s=A.H(n?B.dT:B.cg,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Eo,n?B.aN:B.aG,o,o,o,20),o,o,o,new C.cqf(p),o,o,o,o,o,B.c6)
q=p.e
q===$&&A.c()
q=A.aK(o,B.T,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bD5,B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,B.e_,o,o,o,1,o,o,!1,"\u2022",o,new C.cqg(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a7(52,o,q,o),A.aF(o,o,o,o,A.V(B.hH,n?B.aN:B.aG,o,o,o,20),o,o,o,new C.cqh(p),o,o,o,o,o,B.c6)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.C(A.aK(o,B.T,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.ato(m,"Amount","0.00",B.hI),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,B.e_,o,o,o,1,o,o,!1,"\u2022",o,new C.cqi(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.z(new A.I(D.cEd,new C.cqj(p,m),t),t.k("ai.E"))
i=A.a([i,B.bv,v,B.aB,h,B.P,s,B.ac,A.cd(B.bH,u,B.by,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.U,A.aK(o,B.T,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c02(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cqk(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.ka,o,o,o,o)],w))}i.push(B.aS)
h=B.aR.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aR.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bl:B.bu,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gHS()===B.k.lN(p.gHS())?B.k.M(p.gHS()):p.gHS()
s=p.gaYk()
r=A.zv(p.gafG())
i.push(A.p(o,A.A(A.a([A.C(A.u(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bl:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bym(p.gHS()*p.gafG(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a8(B.a_,B.a7,B.w,j,o,o),B.n),o,o,o,o,B.iE,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.dT:B.cg
h=A.d9(o,o,o,o,o,o,o,o,o,o,o,o,B.c9,o,new A.b4(j,B.V),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.C(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cql(d),h),1),B.av,A.C(A.dj(D.aih,D.eRm,p.ga_C(),A.bk(B.aR,o,o,0,B.c,o,B.c9,o,new A.b4(A.m(14),B.V),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eA(o,l,new A.d3(S.a6K,A.cf(A.u(i,B.al,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A5.qb,o,o,B.af),o),o,o,o,B.JP,B.cZ,o,new A.b4(k,B.V),o)}}
C.ZI.prototype={
S(){return new C.br8()}}
C.br8.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.as()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,B.aY,B.aL),v)},
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
r=r?B.j5:B.iz
v=A.aK(s,B.T,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bn(s,new A.b0(4,A.m(12),B.d9),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eTN(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.C(A.dU(B.de,new C.eTO(d),s),1)
r=A.bk(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eA(s,q,new A.B(B.zE,A.u(A.a([o,B.aB,v,B.aS,A.A(A.a([u,B.av,A.C(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eTP(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cZ,s,new A.b4(p,B.V),s)}}
C.a8T.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.E0.prototype={
S(){return new C.br6(null,null)}}
C.br6.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,D.bcr,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bqh()},
gbrD(){switch(this.a.r.a){case 1:return A.a([B.aR,B.bU,B.aW],x.O)
case 2:return A.a([B.bo,B.aR,B.aW],x.O)
case 3:return A.a([B.b3,B.cf,B.j6],x.O)
case 4:return A.a([B.hT,B.bU,B.eT],x.O)
case 0:return A.a([B.aR,B.bU,B.aW],x.O)}},
B(d){var w=A.K(d),v=this.d
v===$&&A.c()
return new A.ep(A.c4(v,new C.eTL(this,new C.t1(w.ax.a===B.H)),null),null)}}
C.atY.prototype={
S(){return new C.br7(null,null)}}
C.br7.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,B.ms,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bqi()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eTM(this),null)}}
C.br5.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.c_(new A.af(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b2(w,w))
u=new A.b_($.a1().r,B.aw,null,null,A.a([],x.v))
u.N(new A.j1(v))
w=A.U()
w.b=B.aj
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gt(0)
d.bi(v,w)
w=A.U()
w.b=B.aj
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gt(0)
d.b4(u,w)
w=A.zV(u)
t=A.a([],x.f5)
w=new A.xM(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jH('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FL(w,r)
w.lc()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aMz(d,q,r,o,0,0.2,4.2,0.92)
p.aMz(d,q,r,s,0.52,0.11,3.2,0.58)}},
aMz(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.J(g+h,1)*f,s=A.hao(e.a.a,e,t,t+f*i,!0),r=A.bwR(s.gbM().a.getBounds())
$.a1()
w=A.U()
w.b=B.aj
w.c=j
w.d=B.bZ
w.f=!0
v=this.f
u=k*this.e
w.saw(new A.a8(B.a_,B.a7,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Fa,null).aA(0,r))
d.b4(s,w)},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aJQ.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aJR.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.t1.prototype={}
C.api.prototype={
S(){return new C.aBo()},
gdQ(){return this.c}}
C.aBo.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adq()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Jq(w,v)
this.a2()},
adq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bwY(t.c,t.d.a),$async$adq)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.et9(u,s))
return A.h(null,v)}})
return A.i($async$adq,v)},
O4(){var w=0,v=A.j(x.H),u=this,t,s
var $async$O4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.et0(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Jq(t,s),$async$O4)
case 2:if(u.c!=null)u.n(new C.et1(u))
return A.h(null,v)}})
return A.i($async$O4,v)},
OA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.K(p)
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.et7(t,new C.t1(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OA)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a60(q),$async$OA)
case 6:case 5:t.n(new C.et8(t,r))
w=7
return A.b(t.O4(),$async$OA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OA,v)},
Tx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Tx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hMq(r),$async$Tx)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.esW(t,new C.qn(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.O4(),$async$Tx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Tx,v)},
c4Z(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h2t(t,new C.et_(u),w,v)},
a7R(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c2(new A.ay(v,2.5,B.r,-1),B.V,B.V,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aP2,w,w,B.n),w,22,w,w,w,w,w,22)},
a6W(d){return this.bD6(d)},
bD6(d){var w=0,v=A.j(x.H),u=this
var $async$a6W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.esZ(u,d))
w=2
return A.b(u.O4(),$async$a6W)
case 2:return A.h(null,v)}})
return A.i($async$a6W,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.K(a2).ax.a===B.H,e=f?B.bV:B.iP,d=A.m(8),a0=A.V(N.Wx,f?B.bl:B.bu,g,g,g,16),a1=x.p
a0=A.aH(!1,d,!0,new A.B(B.DD,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bl:B.bu,g,g,g,g,g,g,g,g,g,g,g,B.a1,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eta(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.W,g,B.aX,B.q,A.a([A.bw(A.m(22),C.aMw(!0,A.m(22),1/0,B.p_,g,d,1/0),B.ap),A.an(10,A.dj(D.bw4,D.eTp,h.gaWi(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h_,g,new A.b4(A.m(12),B.V),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.G,B.aR.j(f?0.5:0.38),B.eI,22),new A.aa(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.am(B.W,g,B.aX,B.q,A.a([C.aMw(!0,A.m(16),1/0,B.Kz,g,r.c,1/0),A.bQ(g,new A.o(g,g,g,g,g,new A.a8(B.b4,B.bd,B.w,A.a([B.c.j(0.06),B.K,B.x.j(0.22)],x.O),g,g),B.n),B.b6),A.an(g,h.a7R(!0),g,g,8,g,8,g),A.an(g,A.cnG(h.a7R(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.cnG(h.a7R(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.cnG(h.a7R(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dj(D.bs7,D.eNE,h.gaWi(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h_,g,new A.b4(A.m(12),B.V),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bDR,B.n),g,g,g,g,B.nk,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aYQ,B.n6,B.fN],u):A.a([B.aW,B.aR,B.bU],u)
t=x.V
s=A.a([new A.aa(0,B.G,B.aR.j(f?0.45:0.35),B.eI,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jC,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.fZ,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.bym(h.d.gvY(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cp,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.C(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.j7.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.b3.j(0.28),B.cC,14)],t)
j=B.b3.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.am(B.W,g,B.a9,B.q,A.a([p,new A.B(D.bgY,A.A(A.a([o,B.av,A.aD(!1,B.X,!0,g,A.aH(!1,n,!0,A.er(new A.B(Aa.V1,A.u(A.a([A.p(g,D.ahQ,B.h,g,g,new A.o(j,g,A.H(B.b3.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.fV,D.eDL],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc4Y(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ab)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aE,B.w,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fT(1.7777777777777777,d,g),B.aS,w,B.P,u,B.bv,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.bc,A.dj(Ae.Yj,D.eBL,h.gbs5(),A.bk(B.aR,g,g,g,B.c,g,B.iD,g,new A.b4(A.m(12),B.V),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dT:B.cg,B.r,1)
t=A.V(B.WS,f?B.bl:B.bu,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.U,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bl:B.bu,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.ue,g,g,1/0))}else B.d.v(d,new A.I(w,new C.etb(h,new C.t1(f)),A.S(w).k("I<1,r>")))
if(h.e)d.push(new A.B(B.zt,A.at(A.mf(g,f?B.bl:B.bu,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cg(g,e,A.br(!0,A.u(A.a([new A.B(B.zy,a0,g),A.C(A.cf(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.ws,g,g,B.af),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bvx(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.aa(0,B.G,B.x.j(r?0.35:0.08),B.cC,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aRI,u,u,u,u,u,u,u,5),l=B.aR.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hK:B.fQ,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.Z,u,u,u,A.l(u,u,r?B.aN:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcID()
v=A.zv(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bl:B.bu,u,u,u,u,u,u,u,u,12,u,u,B.a1,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b5,B.R,0,B.p)}t=A.C(t,1)
k=A.a([B.aR.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bym(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a8(B.a_,B.a7,B.w,k,u,u),B.n),u,u,u,u,B.h_,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.KG(A.A(A.a([m,A.C(new A.B(B.acd,A.A(A.a([l,B.bb,t,B.aa,k,A.aF(u,u,u,u,A.V(B.cu,(r?B.bl:B.bu).j(0.75),u,u,u,20),u,u,u,new C.esX(this,d),u,u,u,u,u,B.c6)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.al,u,B.e,B.j,0,u,u),u),B.ap),B.h,u,D.aQB,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d6,u,u,u,u)}}
C.aaT.prototype={
D0(d){return this.bEp(d)},
bEp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oz(d,o,!1),$async$D0)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).K(null)
w=4
return A.b(A.bK(A4.zr,null,x.H),$async$D0)
case 4:s=t.d
w=5
return A.b(C.fmU(!0,o,s),$async$D0)
case 5:r=f
q=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.EQ(r,"ngmy_project_"+A.aI(s.b,q,"_"),!1),$async$D0)
case 6:p=f
w=7
return A.b(A.oy(o,!1),$async$D0)
case 7:if(d.e==null){w=1
break}d.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$D0,v)},
XI(d){return this.cky(d)},
cky(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$XI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oz(d,s,!1),$async$XI)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).K(null)
A.hl(d,new C.apc(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oy(s,!1),$async$XI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XI,v)},
O5(d){return this.cgM(d)},
cgM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$O5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).K(null)
w=3
return A.b(A.hl(d,D.aAc,!0,"NgmyWorksheetProjectScan",x.N),$async$O5)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.byn(s),$async$O5)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.E(x.q).f.P(D.ejE)
w=1
break}q=C.fGH(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$O5)
case 5:if(d.e==null){w=1
break}d.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$O5,v)},
XJ(d){return this.cs9(d)},
cs9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).K(null)
w=3
return A.b(C.bxW(),$async$XJ)
case 3:s=f
if(s==null){w=1
break}r=C.fGH(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$XJ)
case 4:if(d.e==null){w=1
break}d.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XJ,v)},
B(d){var w=this,v=null,u=A.K(d).ax.a===B.H,t=new C.t1(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.aa(0,B.G,B.x.j(u?0.35:0.08),B.kC,36)],x.V),o=x.p
return A.br(!0,new A.B(B.ub,A.p(v,A.u(A.a([w.cjb(d,t,s),new A.B(D.bgn,A.u(A.a([w.aZd(t,"QR restore"),B.U,A.A(A.a([w.aUn(t,!0,B.j_,B.b3,B.b3,new C.etd(w,d),"Show to scan","QR code"),B.av,w.atp(t,B.iF,B.b0,B.bD,new C.ete(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d1,w.aZd(t,"Backup files"),B.U,A.A(A.a([w.atp(t,B.hf,B.aR,B.bU,new C.etf(w,d),"Full copy","Backup file"),B.av,w.atp(t,M.x6,B.aZ,B.aM,new C.etg(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cjb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eN,B.cW,B.ff],k):A.a([B.aW,B.aR,B.bU],k)
w=A.an(l,A.V(B.rY,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kR,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.G,B.x.j(0.2),B.cC,12)],x.V)
r=this.d
s=A.p(l,C.aMw(!0,A.m(13),64,D.bnk,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.Z,l,l,l,D.aJU,l,l,l)
r=C.bym(r.gvY(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.W,l,B.a9,B.q,A.a([w,new A.B(D.bgL,A.u(A.a([v,A.A(A.a([s,B.es,A.C(A.u(A.a([u,B.au,t,B.P,A.A(A.a([r,B.aa,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fu,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.etc(d),l,l,l,A.oj(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aHl,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aE,B.w,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
aZd(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aR,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bl:B.bu,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aUn(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ab_:B.aN
if(e)w=B.b3.j(o?0.45:0.35)
else{w=o?B.dT:B.cg
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.G,B.b3.j(0.12),B.cC,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rF,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aN:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.C(A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.er(new A.B(E.V2,A.u(A.a([t,B.ac,u,B.bw,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bl:B.bu,r,r,r,r,r,r,r,r,11,r,r,B.cp,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ab),1)},
atp(d,e,f,g,h,i,j){return this.aUn(d,!1,e,f,g,h,i,j)}}
C.apc.prototype={
S(){return new C.bgD()}}
C.bgD.prototype={
Z(){this.a0()
this.abk()},
abk(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abk=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.byo(p.c,p.d),$async$abk)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.esR(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.esS(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abk,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.K(d).ax.a===B.H,f=g?B.z0:B.iP,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.eq,g?B.ak:B.ai,h,h,h,18),h,h,h,new C.esT(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.C(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.y7],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eN,B.cW,B.ff],s):A.a([B.aW,B.aR,B.bU],s)
r=x.V
q=A.a([new A.aa(0,B.G,B.aR.j(g?0.4:0.3),B.eI,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.bym(p.gvY(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.A(A.a([p,B.aa,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fu,h,h,h)],u),B.m,h,B.b5,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aE,B.w,s,h,h),B.n),h,h,h,h,E.Vp,h,h,1/0)
t=g?D.b5R:B.c
q=A.m(24)
p=A.H(w?B.b3.j(0.4):B.aR.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.G,B.x.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3G,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dLq)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.ph(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c1,h,h,h))}}o.push(B.aS)
n=w?B.b3:B.aR
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.b3:B.aR).j(0.35),B.r,1)
k=w?B.KO:B.Ll
k=A.V(k,w?B.b3:B.aR,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.C(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ak:B.ai,h,h,h,h,h,h,h,h,12,h,h,B.a1,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iD,h,h,h))
return A.cg(h,f,A.br(!0,A.u(A.a([new A.B(A1.K2,e,h),A.C(A.cf(A.u(A.a([s,B.aS,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rE,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adk,h,h,B.af),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aph.prototype={
S(){return new C.aBn(A.y5(B.Jm,B.n0,B.t1))}}
C.aBn.prototype={
p(){this.d.p()
this.a2()},
aHm(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.ir(w,d)},
c0T(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.hKx(t)
if(s!=null){this.aHm(s)
return}r=C.fUN(t)
if(r!=null)q=A.dl(r,p,0)
else q=!1
if(q){this.aHm(B.a.i(B.a.aV(r,B.a.cO(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eG(A.a([A.aF(t,t,t,t,A.V(u.f?B.rP:X.KV,t,t,t,t,t),t,t,t,new C.esV(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.z0,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.eNy,t,t,t,1,t,!0),q=A.y4(u.d,B.bM,u.gc0S()),p=A.m(28)
p=A.at(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aR,B.r,3),p,A.a([new A.aa(2,B.G,B.aR.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.x.j(0.72)
v=A.m(16)
return A.cg(r,B.x,new A.am(B.W,t,B.aX,B.q,A.a([q,p,A.an(32,A.p(t,D.eMp,B.h,t,t,new A.o(w,t,A.H(B.aR.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iE,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aG7.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.M9.prototype={
S(){return new C.aBp(D.a5G,A.a([],x.D))},
bl(){return this.r.$0()},
gdQ(){return this.c}}
C.aBp.prototype={
gcqe(){return J.bzt(this.e,0,new C.etD())},
Z(){this.a0()
$.aS.c_$.push(this)
this.uK()},
p(){$.aS.hE(this)
this.a2()},
iL(d){if(d===B.fl)this.uK()},
uK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bu(q.a.c).cI(0,B.kq),$async$uK)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.etz(q,p))
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
if(q.c!=null&&q.f)q.n(new C.etA(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uK,v)},
Gq(d){return this.bBi(d)},
bBh(){return this.Gq(null)},
bBi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hMs(l,d),$async$Gq)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l0(l,r,q,D.cO7,new A.N(Date.now(),0,!1))
w=4
return A.b(C.Jq(t.a.c,p),$async$Gq)
case 4:o=f
w=5
return A.b(t.uK(),$async$Gq)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.E(x.q).f.P(D.egQ)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.E(q).f.P(D.eiy)
else n.E(q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D4(m)
case 1:return A.h(u,v)}})
return A.i($async$Gq,v)},
D4(d){return this.c4K(d)},
c4K(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$D4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hl(s,new C.api(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$D4)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Jq(u.a.c,t),$async$D4)
case 5:case 4:w=6
return A.b(u.uK(),$async$D4)
case 6:return A.h(null,v)}})
return A.i($async$D4,v)},
uz(d){return this.bQE(d)},
bQE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bxW(),$async$uz)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hl(r,D.aAc,!0,"NgmyWorksheetProjectScan",x.N),$async$uz)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.byn(q),$async$uz)
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
break}p=C.fGH(s)
w=15
return A.b(C.Jq(t.a.c,p),$async$uz)
case 15:o=f
w=16
return A.b(t.uK(),$async$uz)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.E(x.q).f.P(D.eiD)
w=1
break}r.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D4(p)
case 1:return A.h(u,v)}})
return A.i($async$uz,v)},
M_(d){return this.bzZ(d)},
bzZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$M_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cb(null,null,!0,null,new C.etk(d),s,null,!0,!0,x.y),$async$M_)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oa(t.a.c,A.a([],x.D)),$async$M_)
case 6:w=7
return A.b(t.uK(),$async$M_)
case 7:s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.egV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$M_,v)},
c4X(d){var w=this.c
w.toString
A.c1(B.K,new C.ett(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
aZP(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.j5
else w=B.c
v=A.m(16)
u=A.H(p?B.dT:B.cg,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aN:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.p(r,A.u(A.a([s,B.ac,t,B.bw,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bl:B.bu,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ua,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ab)},
Yb(d,e){return this.c4L(d,e)},
c4L(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(B.K,new C.eto(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Yb)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h2t(r,new C.etp(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.M1(d,e),$async$Yb)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Yb,v)},
aWU(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aH
else t=h.a?B.aN:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.C(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bl:B.bu,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.X,!0,u,A.aH(!1,u,!0,new A.B(B.DA,A.A(A.a([s,B.bb,t,A.V(B.el,w?B.bl:B.bu,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ab)},
cbn(d,e,f,g,h,i){return this.aWU(!1,d,e,f,g,h,i)},
M1(d,e){return this.bA8(d,e)},
bA8(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$M1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kN(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$M1)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bwL(t.a.c,d.a),$async$M1)
case 6:w=7
return A.b(t.uK(),$async$M1)
case 7:r=t.c
if(r==null){w=1
break}r.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$M1,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===B.H,n=new C.t1(o),m=o?B.bV:B.iP
if(q.f)o=D.aWY
else{w=q.buN(n)
v=q.bPO(n)
u=q.gbs_()
if(o)t=B.j5
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aS,new C.E0(A.p(p,A.A(A.a([q.awI(P.Ky,"Projects",n,D.a5G),q.awI(B.ul,"Cashier",n,D.aN7),q.awI(B.DW,"Family Tree",n,D.f8o)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ei,0.95,u,p),B.bv],r)
w=q.d
if(w===D.a5G){w=J.a9(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aN:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.bc,new C.atY(q.gaLr(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.cbp(n)],r))}else{o=q.a
if(w===D.aN7)u.push(new C.alr(o.c,n,p))
else{w=q.r
u.push(new C.amx(o.c,o.d,o.e,o.f,new C.etG(q),new C.etH(q),new A.cv(w,x.b4)))}}o=A.cf(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A6.JW,p,p,B.af)}return A.cg(p,m,A.br(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
buN(d){var w=null,v=A.m(8),u=d.a,t=A.V(N.Wx,u?B.bl:B.bu,w,w,w,16)
return A.aH(!1,v,!0,new A.B(B.lj,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bl:B.bu,w,w,w,w,w,w,w,w,14,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eth(this),w,w,w,w,w,w,w)},
gbs_(){switch(this.d.a){case 0:return D.a4Z
case 1:return D.f_S
case 2:return D.a5_}},
bPO(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.G,B.aR.j(0.35),B.cv,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bxN,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bb,D.bkM,A.aD(!1,B.X,!0,w,A.aH(!1,A.m(12),!0,A.p(w,D.bvo,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etl(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ab)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.E0(A.p(w,A.u(A.a([new A.B(E.V8,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.zv(this.gcqe()),w,w,w,w,w,w,D.eyt,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u9,B.iE,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aR,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.f_R,w)},
awI(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aR:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.aa(0.5,B.G,B.aR.j(0.42),B.cC,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bl:B.bu
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bl:B.bu
return A.C(A.aD(!1,B.X,!0,u,A.aH(!1,s,!0,A.de(u,A.A(A.a([w,B.ez,new A.dp(1,B.ck,A.d(e,u,1,B.Z,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b5,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.i9,u,u,u,B.JZ,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.etC(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ab),1)},
cbp(d){var w,v,u,t,s,r,q=this,p=null
if(J.ch(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bvt,B.h,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.G,B.aR.j(0.5),B.eI,28)],x.V),D.bG2,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.E0(A.p(p,A.u(A.a([t,B.d1,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bl:B.bu,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.A(A.a([A.C(q.aMU(B.iF,"Scan QR",new C.etw(q),d),1),B.av,A.C(q.aMU(M.x6,"Upload file",new C.etx(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bJ(D.eWJ,q.gaLr(),A.bk(B.aR,p,p,p,B.c,B.fU,p,p,new A.b4(A.m(12),B.V),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bhN,1.05,D.a4Z,p)}w=J.b3(q.e,new C.ety(q,d),x.l)
w=A.z(w,w.$ti.k("ai.E"))
return new C.E0(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a4Z,p)},
aMU(d,e,f,g){var w=null,v=B.aR.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aR.j(0.45),B.r,1)
return A.aD(!1,B.X,!0,u,A.aH(!1,t,!0,A.p(w,A.u(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.ewV,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ac7,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ab)},
cbo(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.a([new A.aa(0,B.G,B.x.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bl:B.bu
n=A.bw(B.a6i,new A.fT(1.7777777777777777,C.aMw(!0,B.fe,1/0,P.Ky,n,d.c,1/0),u),B.ap)
w=x.p
v=A.C(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aN:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.zv(d.gvY()),u,u,u,u,u,u,D.ev6,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.X,!0,u,A.aH(!1,o,!0,A.u(A.a([n,new A.B(B.bC,A.A(A.a([v,A.aF(u,u,u,u,A.V(A7.L9,t?B.bl:B.bu,u,u,u,u),u,u,u,new C.etu(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.etv(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ab),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bsR.prototype={}
C.qn.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.D(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcID(){var w,v,u,t,s=this.c
if(s===B.k.lN(s))w=B.o.u(B.k.M(s))
else{v=B.k.ab(s,2)
u=A.ad("\\.?0+$",!0,!1,!1,!1)
w=A.aI(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l0.prototype={
gvY(){return B.d.cP(this.d,0,new C.cpA())},
ad(){var w=this,v=w.d,u=A.S(v).k("I<1,a0<n,@>>")
v=A.z(new A.I(v,new C.cpz(),u),u.k("ai.E"))
return A.D(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.aa()],x.N,x.z)},
b5F(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l0(w.a,w.b,v,u,w.e)},
b5n(d){return this.b5F(d,null)},
QH(d){return this.b5F(null,d)}}
C.FU.prototype={
a3(){return"FamilyGender."+this.b}}
C.hO.prototype={
ad(){var w=this
return A.D(["id",w.a,"name",w.b,"gender",C.fZm(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
azg(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hO(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ahM.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kk.prototype={
gakU(){var w=this.f
return new A.a3(w,new C.bIj(),A.S(w).k("a3<1>")).gH(0)},
ad(){var w=this,v=w.f,u=A.S(v).k("I<1,a0<n,@>>")
v=A.z(new A.I(v,new C.bIi(),u),u.k("ai.E"))
return A.D(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.aa(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hD8(w.y)],x.N,x.z)},
xy(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kk(w.a,v,u,t,s,r,w.r,q,p,o)},
b5E(d,e){var w=null
return this.xy(w,w,d,e,w,w,w,w)},
cyI(d,e,f,g,h,i,j){return this.xy(d,e,f,g,h,i,j,null)},
azl(d,e){var w=null
return this.xy(w,w,w,d,w,w,e,w)},
cxd(d){var w=null
return this.xy(w,w,w,w,w,w,d,w)},
cxB(d){var w=null
return this.xy(w,w,w,w,w,w,w,d)},
az7(d){var w=null
return this.xy(w,w,w,w,d,w,w,w)},
cye(d,e,f){var w=null
return this.xy(w,d,w,e,w,w,f,w)},
cx0(d){var w=null
return this.xy(w,w,d,w,w,w,w,w)},
cxN(d,e){var w=null
return this.xy(d,w,w,w,w,e,w,w)}}
C.cpB.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cpC.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDq.prototype={}
C.b4y.prototype={
bI(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b4y()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aU(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b4x.prototype={
gvj(){return!0},
gEy(){return this.z.b<this.b.length},
aOt(d){switch(0){case 0:return d.a.c}},
aOa(d){switch(0){case 0:return d.a.d}},
bJl(d,e){switch(0){case 0:return new A.hx(d,e)}},
bIK(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fR(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.is(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FF(b4)
switch(0){case 0:v=b5.b
u=new A.kh(0,v,0,1/0)
t=w===B.Qs
break}s=A.a([],x.gZ)
r=A.Q(x.cM,x.S)
for(b3=b1.z,q=B.d.fT(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.fR(b4,u,!0)
f=b1.aOt(g)
f.toString
e=b1.aOa(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDq(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDq(k,j,i))}d=s.length
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
for(q=B.d.fT(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.J)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aOt(g)
e=b1.aOa(g)
e.toString
a9=b1.bIK(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bJl(a6,a3+a9)
b0=g.a
g.a=new A.is(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fM(d){var w,v,u,t,s,r=this
r.kJ(d)
w=d.b
w.hQ()
v=A.df()
u=r.a
v.dX(u.a,u.b,0,1)
w.oc(0,v)
for(u=r.z,u=B.d.dA(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fM(d)
w.mJ(0)},
F2(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hQ(){return this.z}}
C.br9.prototype={}
var z=a.updateTypes(["au<~>()","R(hO)","R(kk)","~()","R(mI)","a0<n,@>(kk)","G(kk,kk)","n(hO)","kk(a0<@,@>)","R(l0)","eq<n?>(hO)","tv()","a0<n,@>(mI)","XG(Z)","hO(a0<@,@>)","a0<n,@>(hO)","R(tv)","R(qn)","au<~>(l0)","mI(a0<@,@>)","G(l0,l0)","G(hO,hO)","n?(hO)","r(nM)","hO(hO)","cF(bq<n,Ec>)","cF(Ie)","~(G)","G?(hO)","hO()","al<hO>()","aay(Z)","R(Ie)","B(hO)","~(FU)","WD(Z)","r(FU,n,a_)","n(n)","bq<n,al<a0<n,@>>>(n,al<mI>)","n(N)","+count,id,name(G,n,n)(kk)","kk(kk)","Y0(Z)","Y1(Z)","R(le)","le()","Wb(Z)","n(kk)","WF(Z)","WE(Z)","X4(Z)","~(hO)","r(qn)","aaT(Z)","~(lB)","au<~>([n?])","P(P,l0)","r(l0)","P(P,qn)","a0<n,@>(qn)","qn(a0<@,@>)","R(ac3)","X2(Z)","X6(Z)","l0(a0<@,@>)","cr(FT)","n(l0)","a0<n,@>(l0)","G(mI,mI)","G(hO)","kk(a0<n,@>)","ZI(Z)"])
C.ffy.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.ffx.prototype={
bem(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qg(s,d,B.h1,E.Di),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.O(r!=null&&A.Jd(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bem(d)},
$S:327}
C.ffz.prototype={
$1(d){return d.b},
$S:116}
C.fou.prototype={
$1(d){var w=null
return A.eA(w,B.K,new F.Nu(this.a,this.b,w),w,w,0,B.V3,B.cZ,w,w,w)},
$S:45}
C.f68.prototype={
$1(d){return d!=null},
$S:214}
C.f69.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:214}
C.f6e.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:155}
C.fdg.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f0(d,w,w,w,A.fX(w,B.qC,w,w,w,w,w,w,w,B.dm,w,w,10.5,w,B.eb,w,!0,w,w,w,w),w),u=f?B.eb:B.ug
return new A.ng(D.bdu,A.a7a(A.a([new A.fG(130,w,v),new A.xO(1,B.DP,A.f0(e,w,w,w,A.fX(w,g==null?D.dMF:g,w,w,w,w,w,w,w,B.dm,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.w5,B.l0))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1858}
C.fdf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uz(999)
f=A.w4(A.l9(h,A.f0("Cashier",h,h,h,A.fX(h,D.xW,h,h,h,h,h,h,h,B.dm,h,h,10,h,B.eb,h,!0,h,h,h,h),h),h,new A.ki(D.dMw,h,f,B.hk,h),h,h,D.bdV,h))
w=A.w4(A.f0("Debt receipt",h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dm,h,h,22,h,B.eb,h,!0,h,h,h,h),h))
v=A.w4(A.f0(C.vQ(new A.N(Date.now(),0,!1),!0),h,h,h,D.a3O,h))
u=A.uz(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f0(s,h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dm,h,h,14,h,B.eb,h,!0,h,h,h,h),h)
r=A.f0("Person who owes",h,h,h,D.a3O,h)
q=A.uz(10)
p=x.C
u=A.l9(h,A.xJ(A.a([s,new A.fG(h,2,h),r,new A.fG(h,10,h),A.l9(h,A.xJ(A.a([A.f0("Amount owed",h,h,h,D.a3O,h),new A.fG(h,2,h),A.f0(A.zv(t.c),h,h,h,A.fX(h,D.xW,h,h,h,h,h,h,h,B.dm,h,h,20,h,B.eb,h,!0,h,h,h,h),h)],p),B.q6,B.l0),h,new A.ki(B.oi,h,q,B.hk,h),h,h,D.bdc,1/0)],p),B.q6,B.l0),h,new A.ki(E.aB8,h,u,B.hk,h),h,h,D.beZ,1/0)
q=new A.n_(D.dMz,0.9,B.kh)
r=A.uz(12)
s=i.c
o=s.$2("Original due",C.vQ(t.r,!1))
n=s.$2("Current due",C.vQ(t.f,!1))
m=i.d
l=new A.n_(m,1.1,B.kh)
k=A.uz(8)
j=i.a
k=A.a([o,n,new A.fG(h,6,h),A.l9(h,A.w4(A.f0(t.gaFT(),h,h,h,A.fX(h,m,h,h,h,h,h,h,h,B.dm,h,h,11,h,B.eb,h,!0,0.5,h,h,h),h)),h,new A.ki(h,new A.p_(l,l,l,l),k,B.hk,h),h,h,D.be3,1/0),new A.fG(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.xW))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.xW))
else{n=A.f0("Missed days ("+n+")",h,h,h,A.fX(h,B.qC,h,h,h,h,h,h,h,B.dm,h,h,10.5,h,B.eb,h,!0,h,h,h,h),h)
m=A.S(o).k("I<1,Qf>")
o=A.z(new A.I(o,new C.fde(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fG(h,4,h),n,new A.fG(h,6,h),new C.b4x(5,5,new C.b4y(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fG(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fG(h,8,h),w,new A.fG(h,3,h),v,new A.fG(h,16,h),u,new A.fG(h,10,h),A.l9(h,A.xJ(k,B.w5,B.l0),h,new A.ki(h,new A.p_(q,q,q,q),r,B.hk,h),h,h,B.ach,1/0)],p)
w=j.a
if(w!=null){v=new A.n_(B.Gg,1,B.kh)
B.d.v(f,A.a([new A.fG(h,16,h),A.f0("Debtor signature",h,h,h,A.fX(h,B.qC,h,h,h,h,h,h,h,B.dm,h,h,10,h,B.eb,h,!0,h,h,h,h),h),new A.fG(h,6,h),A.l9(h,new A.G9(w,B.Ss,h,h),h,new A.ki(h,new A.p_(v,v,v,v),A.uz(6),B.hk,h),82,h,B.K0,1/0)],p))}f.push(new A.fG(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f0(w,h,h,h,D.eol,h))
f.push(new A.fG(h,18,h))
f.push(A.w4(A.f0("NGMY.ORG",h,h,h,A.fX(h,D.xW,h,h,h,h,h,h,h,B.dm,h,h,14,h,B.eb,h,!0,1.8,h,h,h),h)))
return f},
$S:352}
C.fde.prototype={
$1(d){var w=null,v=new A.n_(D.Gh,0.7,B.kh),u=A.uz(999)
return A.l9(w,A.f0(C.vQ(d,!1),w,w,w,A.fX(w,D.Gh,w,w,w,w,w,w,w,B.dm,w,w,9.5,w,B.eb,w,!0,w,w,w,w),w),w,new A.ki(w,new A.p_(v,v,v,v),u,B.hk,w),w,w,D.bj4,w)},
$S:1859}
C.bWR.prototype={
$1(d){var w=null,v=B.bR.j(0.08),u=A.m(999),t=A.H(B.bR.j(0.28),B.r,1)
return A.p(w,A.d(C.vQ(d,!1),w,w,w,w,w,w,D.euC,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ew,w,w,w)},
$S:1860}
C.fp_.prototype={
$1(d){var w=null,v=A.aG(d,B.bN,x.n).w,u=A.m(26),t=A.aF(w,w,w,w,B.ai9,w,w,w,new C.foX(d),w,w,w,w,w,B.c6),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eA(w,B.K,new A.d3(new A.aV(0,380,0,v.a.b*0.9),A.aD(!1,B.X,!0,u,new A.B(B.UT,A.u(A.a([new A.bE(B.a7,w,w,t,w),new A.dp(1,B.ck,A.cf(A.u(A.a([new A.ep(new C.aUI(r,w),s),B.U,A.A(A.a([A.C(A.ex(B.xh,D.eTl,new C.foY(s,r,d),A.d9(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eV,w,new A.b4(A.m(14),B.V),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.C(A.dj(B.Y9,D.eQf,new C.foZ(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eV,w,new A.b4(A.m(14),B.V),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.af),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aG,0,w,w,w,w,w,B.ab),w),w,w,0,Ab.Vi,B.cZ,w,w,w)},
$S:45}
C.foX.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.foY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.ae$.x.h(0,t.a)
m=m==null?null:m.gb3()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.fR),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f6(B.dz.gaK(s))
m=t.b
q=B.a.i(m.b)
p=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aI(q,p,"_")
if(o.length>32)o=B.a.al(o,0,32)
w=5
return A.b(A.re(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.foZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fjP(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.E(x.q).f
s.P(A.aZ(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.foS.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eA(w,B.aG,A.u(A.a([new A.B(D.beP,A.A(A.a([A.C(A.d(this.a,w,w,w,w,w,w,B.mR,w,w,w),1),A.aF(w,w,w,w,B.kZ,w,w,w,new C.foQ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dp(1,B.ck,new A.B(B.id,A.bw(A.m(14),A.fC(t,B.B,w,w,B.cj,B.dp,!1,w,!1,w,w),B.ap),w),w),new A.B(B.JG,new A.a7(1/0,w,A.dj(B.ob,D.aKk,new C.foR(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b4(A.m(14),B.V),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.JQ,B.cZ,w,new A.b4(v,B.V),w)},
$S:45}
C.foQ.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.foR.prototype={
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
C.fp3.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eA(w,B.aG,new A.B(D.beW,A.u(A.a([A.A(A.a([D.bk_,A.aF(w,w,w,w,B.kZ,w,w,w,new C.fp1(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.ep(A.bw(A.m(14),A.p(w,A.b1(w,w,w,new C.b6F(s.ax,w),B.as),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ac,new A.a7(1/0,w,A.dj(B.ob,D.aKk,new C.fp2(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b4(A.m(14),B.V),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b4(v,B.V),w)},
$S:45}
C.fp1.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.fp2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.ae$.x.h(0,t.a)
n=n==null?null:n.gb3()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.fR),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aI(r,q,"_")
if(p.length>32)p=B.a.al(p,0,32)
r=J.f6(B.dz.gaK(s))
w=5
return A.b(A.re(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.E(x.q).f.P(A.aZ(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.f8T.prototype={
$1(d){return d.a===this.a},
$S:235}
C.dxi.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dx3.prototype={
bdA(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c1(t,new C.dx6(s,q,e),p,!0,!0,!1,B.Gx,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dx7(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bdA(d,e)},
$S:1861}
C.dx6.prototype={
$1(d){var w,v=null,u=this.c===B.uR,t=u?D.cTs:D.cQ8
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aN:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.br(!0,new A.B(K.acQ,A.u(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bl:B.bu,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ig(!0,v,v,B.z,L.aHC,new C.dx5(this.a,w,t,d),t.length,v,B.dJ,B.af,!0)],x.p),B.al,v,B.e,B.R,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:33}
C.dx5.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.M:B.aN
v=A.m(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bl:B.bu).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aH(!1,p,!0,A.p(B.B,C.aUH(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dx4(t.d,r),s,s,s,s,s,s,s)},
$S:186}
C.dx4.prototype={
$0(){A.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.dx7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dx1.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:89}
C.dx2.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cE(B.co,e,v)
return new A.cZ(e,!1,A.iF(B.B,A.at(A.aD(!1,B.X,!0,v,new A.eh(new C.dx0(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ab),v,v,v),v,new A.bc(t,new A.bm(0.96,1,u),u.k("bc<bC.T>"))),v)},
$S:31}
C.dx0.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bN,x.n).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bl:B.bu).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.C(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aH(!1,v,!0,new A.B(B.ei,A.V(B.cu,i.a.d.a?B.bl:B.bu,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dwM(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aNq("Name")
r=l.a
q=r.d==null?k:new C.dwN(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bh:B.lM
n=A.H(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.T,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b5y(new A.B(B.hb,A.aH(!1,p,!0,A.p(B.B,C.aUH(m==null?"\ud83d\udc64":A.fe4(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ad,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ka,k,B.a3x,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bl:B.bu,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.A(A.a([A.C(i.aO0("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dwO(r,a0),r.d===B.uR),1),B.aa,A.C(i.aO0("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dwT(r,a0),r.d===B.a0x),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bE(B.a_,k,k,A.hg(D.bx6,D.eRU,new C.dwU(r,l.e,a0),A.fn(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c6)),k)],u))
v.push(B.U)
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uJ(A.ad("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.T,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aNr("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ad,k,k,s,k,k,B.e_,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.U)
t=i.a.d.a
s=t?B.M:B.aN
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bl:B.bu).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bl:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vQ(r.a,!1)
v.push(A.aD(!1,B.X,!0,q,A.aH(!1,p,!0,A.p(k,A.A(A.a([A.C(A.u(A.a([t,B.bw,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bu1],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dwV(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ab))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bl:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.U)
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.T,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aNq("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ad,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bl:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aVk(r.b.length!==0,B.mz,new C.dwW(r,i,a0),new C.dwX(r,a0),"Upload from gallery","ID photo"))
v.push(i.aVk(r.c.length!==0,D.bni,new C.dwY(r,i,d,a0),new C.dwZ(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A8.a58("Signature (optional)",t,new C.dx_(a0),new C.dwP(a0,t),new C.dwQ(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bl:B.bu
s=(i?B.bl:B.bu).j(0.28)
s=A.C(A.dU(E.aKd,new C.dwR(d),A.d9(k,k,k,k,k,k,k,k,k,t,k,k,B.wh,k,new A.b4(A.m(10),B.V),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cW,k,k,k,B.c,k,B.wh,k,new A.b4(A.m(10),B.V),k,k,k)
v.push(A.A(A.a([s,B.aa,A.C(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ty,k,k,k),new C.dwS(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cf(A.u(v,B.al,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.af),B.h,k,new A.aV(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uc,B.iE,k,k,360)},
$S:157}
C.dwM.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dwN.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dwO.prototype={
$0(){return this.b.$1(new C.dwL(this.a))},
$S:0}
C.dwL.prototype={
$0(){var w=this.a
w.d=B.uR
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dwT.prototype={
$0(){return this.b.$1(new C.dwK(this.a))},
$S:0}
C.dwK.prototype={
$0(){var w=this.a
w.d=B.a0x
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dwU.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dwV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xz(null,u.b,A.bW(2020,1,1,0,0,0,0,0),null,s,A.bW(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dwJ(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwJ.prototype={
$0(){var w=this.b
return this.a.a=A.bW(w.gcc(),w.gcb(),w.gcp(),0,0,0,0,0)},
$S:0}
C.dwW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Nv(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dwI(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwI.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dwX.prototype={
$0(){return this.b.$1(new C.dwH(this.a))},
$S:0}
C.dwH.prototype={
$0(){return this.a.b=""},
$S:0}
C.dwY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c1(q,new C.dwF(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Nv(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dwG(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwF.prototype={
$1(d){var w=null
return A.br(!0,A.u(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,B.ahH,w,w,w,w,new C.dwz(d),!1,w,w,w,w,w,w,w,D.eJ6,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,B.ahF,w,w,w,w,new C.dwA(d),!1,w,w,w,w,w,w,w,D.ePn,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:33}
C.dwz.prototype={
$0(){A.a6(this.a,!1).K("camera")
return null},
$S:0}
C.dwA.prototype={
$0(){A.a6(this.a,!1).K("gallery")
return null},
$S:0}
C.dwG.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dwZ.prototype={
$0(){return this.b.$1(new C.dwE(this.a))},
$S:0}
C.dwE.prototype={
$0(){return this.a.c=""},
$S:0}
C.dx_.prototype={
$0(){return this.a.$1(new C.dwD())},
$S:0}
C.dwD.prototype={
$0(){},
$S:0}
C.dwP.prototype={
$0(){return this.a.$1(new C.dwC(this.b))},
$S:0}
C.dwC.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dwQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aeT(u.a,null,null,new C.dwB(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwB.prototype={
$4(d,e,f,g){this.a.$1(new C.dwy(this.b,d))},
$S:430}
C.dwy.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dwR.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dwS.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.E(x.q).f.P(D.eku)
return}if(w.a.d==null){w.c.E(x.q).f.P(D.ehr)
return}A.a6(w.c,!1).K(!0)},
$S:0}
C.dxl.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:89}
C.dxm.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bl:B.bu).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aN:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zv(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bl:B.bu,r,r,r,r,r,r,r,r,13,r,r,B.a1,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.xW(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.xW(r).length>0?B.bR:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bl:B.bu
t=(q?B.bl:B.bu).j(0.28)
s=x.p
return new A.cZ(e,!1,A.at(A.aD(!1,B.X,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.C(A.dU(B.mT,new C.dxj(d),A.d9(r,r,r,r,r,r,r,r,r,w,r,r,B.jW,r,new A.b4(A.m(10),B.V),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.C(A.bJ(D.ePM,new C.dxk(d),A.bk(B.cW,r,r,r,B.c,r,B.jW,r,new A.b4(A.m(10),B.V),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.al,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zG,E.V8,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ab),r,r,r),r)},
$S:31}
C.dxj.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dxk.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dxf.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dxg(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bl:B.bu).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.C(A.d(k,s,1,B.Z,s,s,s,A.l(s,s,r.a.d.a?B.aN:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zv(l.c),s,s,s,s,s,s,D.ew2,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jn((r.a.d.a?B.bl:B.bu).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.WS,"View receipt",new C.dx8(r,d,l))
u=l.x!=null
t=u?B.uA:B.p1
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.B(D.beT,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dx9(r,d,l)),q.$3$icon$label$onTap(B.zX,"Edit",new C.dxa(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mz,"View / download ID",new C.dxb(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bnh,"View / download selfie",new C.dxc(r,d,l)))
if(l.gaAW())p.push(q.$3$icon$label$onTap(A_.Y0,"View / download signature",new C.dxd(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bR,B.e4,"Delete",new C.dxe(r,d,l)))
p.push(B.au)
return A.br(!0,new A.B(B.u9,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:33}
C.dxg.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aN:B.aG
else w=d
return A.aH(!1,v,!0,new A.B(B.eF,A.A(A.a([A.V(e,w,v,v,v,20),B.bb,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1862}
C.dx8.prototype={
$0(){A.a6(this.b,!1).K(null)
var w=this.a.c
w.toString
C.foW(w,this.c)},
$S:0}
C.dx9.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.Q3(this.c)},
$S:0}
C.dxa.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.BO(this.c)},
$S:0}
C.dxb.prototype={
$0(){var w,v,u
A.a6(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.byJ(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dxc.prototype={
$0(){var w,v,u
A.a6(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.byJ(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dxd.prototype={
$0(){A.a6(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fp0(w,this.c)},
$S:0}
C.dxe.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.Mc(0,this.c)},
$S:0}
C.dxn.prototype={
$1(d){return d.x==null},
$S:235}
C.dxo.prototype={
$1(d){return d.x!=null},
$S:235}
C.dxp.prototype={
$2(d,e){return d+e.c},
$S:1863}
C.dxq.prototype={
$0(){return this.a.bss()},
$S:0}
C.dxh.prototype={
$0(){return this.a.abx(this.b)},
$S:0}
C.fb5.prototype={
$1(d){return C.fKF(A.Y(d,x.N,x.z))},
$S:z+19}
C.fb6.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fb7.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+68}
C.fnC.prototype={
$1(d){return d.ad()},
$S:z+12}
C.fve.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.f8K.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bIe.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eR(e,v)?v:null},
$S:1864}
C.fo7.prototype={
$1(d){var w=this
return new C.X4(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+50}
C.cZw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZv(w,d))},
$S:z+65}
C.cZv.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZk.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.ct(u)?v.r>=J.a9(v.d):w)v.r=J.a9(v.d)-1},
$S:0}
C.cZh.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cYV.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cYW.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.cZl.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cZ1.prototype={
$1(d){var w=null,v=A.K(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bl:B.bu,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ei(A.a([A.bF(!1,B.de,w,w,!0,w,w,new C.cZ_(d),w,w),A.bJ(B.vd,new C.cZ0(d),A.bk(B.mj,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.cZ_.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.cZ0.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cZ2.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.cZi.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+16}
C.cZj.prototype={
$0(){return B.d.gI(D.xr)},
$S:z+11}
C.cZ3.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WD(v,u,J.a9(w.d),null)},
$S:z+35}
C.cZ4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZu.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aJ(s,new C.Wk(r.y,r.gDR(0),J.a9(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cZs(r),s,s,s,s,s,s,!1,B.ae)
else{w=e-1
v=J.q(r.d,w)
J.a9(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b63(v,e,w,u,t,r.gbHU(),s)
w=t}return A.c4(q,new C.cZt(r,e),new A.B(B.Va,w,s))},
$S:1865}
C.cZt.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcU(t).ay){t=this.b
u=x.cy.a(B.d.gcU(u.f.f)).gtR(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.df()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fk(v*3.141592653589793*0.5)
return A.fp(B.a_,A.d5(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:43}
C.cZs.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aBZ(B.oR,B.ib)},
$S:0}
C.cZe.prototype={
$0(){var w=this.a
return w.n(new C.cZd(w))},
$S:0}
C.cZd.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZf.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).K(null)
return null},
$S:0}
C.cYX.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.iQ.j(0.5),r=x.p,q=A.a([D.eHQ,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ch(p.d)?"Write this book":"Write a new book"
q.push(p.Wv(d,B.dN,w,J.ch(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Wv(d,L.afG,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.ct(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.B(B.cI,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ju.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.B(B.cI,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ju.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Wv(d,B.XS,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Wv(d,B.p8,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Wv(d,B.p8,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eA(u,E.za,A.br(!0,new A.B(Y.Dv,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.ade,B.cZ,u,new A.b4(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:45}
C.cZg.prototype={
$0(){A.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.cZ7.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.ct(w.d)
return new C.X6(v,J.ct(w.d),w.r+1,null)},
$S:z+63}
C.cZ8.prototype={
$1(d){var w=null
return A.nS(!1,A.ei(w,w,w,E.za,new A.k0(this.a,new C.cZ6(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:293}
C.cZ6.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a3d,B.on,A.C(A.d(e,w,w,w,w,w,w,B.ir,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:735}
C.cZ9.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZa.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:188}
C.cZb.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zC(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.a0g(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.cZ5(s,t))
w=4
return A.b(s.kp(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZ5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZn.prototype={
$1(d){var w=null
return A.nS(!1,A.ei(w,w,w,E.za,new A.k0(this.a,new C.cZm(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:293}
C.cZm.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a3d,B.on,A.C(A.d(e,w,w,w,w,w,w,B.ir,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:735}
C.cZo.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZp.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:188}
C.cZq.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:188}
C.cZr.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zC(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kp(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cYY.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.baR(B.oR,R.Jv)},
$S:0}
C.cYZ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aBZ(B.oR,R.Jv)},
$S:0}
C.d_X.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.d_Y.prototype={
$1(d){var w=this.a
return w.n(new C.d_W(w))},
$S:9}
C.d_W.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d_Z.prototype={
$1(d){var w=this.a
return w.n(new C.d_V(w))},
$S:9}
C.d_V.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d0_.prototype={
$1(d){var w=this.a
return w.n(new C.d_U(w))},
$S:9}
C.d_U.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d00.prototype={
$0(){var w=this.a
return w.n(new C.d_T(w,this.b))},
$S:0}
C.d_T.prototype={
$0(){var w=this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d01.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.gZY()
A.a6(this.b,!1).K(new A.bkl(w,v))},
$S:0}
C.cZL.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cZK.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.X2(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+62}
C.cZP.prototype={
$1(d){return d.a===this.a},
$S:z+61}
C.cZO.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b1j(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.ei(A.a([A.bF(!1,B.de,v,v,!0,v,v,new C.cZM(d),v,v),A.bJ(B.vd,new C.cZN(d),A.bk(B.mj,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.za,w,v,v,v,v,D.eGQ,v)},
$S:19}
C.cZM.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.cZN.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cZQ.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cZR.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cf(A.cd(B.bH,r,B.by,18,14),B.q,t,B.z,t,D.bfM,t,t,B.af)},
$S:269}
C.cZJ.prototype={
$0(){return this.a.O9(0,this.b)},
$S:0}
C.cZI.prototype={
$0(){return this.a.ND(0,this.b)},
$S:0}
C.cyn.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+16}
C.cyo.prototype={
$0(){return B.d.gI(D.xr)},
$S:z+11}
C.cyp.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bV(0,new A.B(d,A.bQ(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.b6),w),0,0,0)},
$S:1867}
C.cRP.prototype={
$1(d){return this.a.n(new C.cRO(this.b,this.c))},
$S:9}
C.cRO.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cSd.prototype={
$1(d){return this.a.n(new C.cS0())},
$S:2}
C.cS0.prototype={
$0(){},
$S:0}
C.cSe.prototype={
$1(d){return this.a.n(new C.cS_())},
$S:2}
C.cS_.prototype={
$0(){},
$S:0}
C.cSf.prototype={
$0(){var w=this.a
return w.n(new C.cRZ(w,this.b))},
$S:0}
C.cRZ.prototype={
$0(){var w=this.a
return w.d=w.gnr().Ee(this.b.a)},
$S:0}
C.cSg.prototype={
$0(){var w=this.a
return w.n(new C.cRY(w,this.b))},
$S:0}
C.cRY.prototype={
$0(){var w=this.a
return w.d=w.gnr().cwy(this.b)},
$S:0}
C.cSh.prototype={
$1(d){return this.a.n(new C.cRX())},
$S:2}
C.cRX.prototype={
$0(){},
$S:0}
C.cSi.prototype={
$0(){var w=this.a
return w.n(new C.cRW(w,this.b))},
$S:0}
C.cRW.prototype={
$0(){var w=this.a
return w.d=w.gnr().cwD(this.b.a)},
$S:0}
C.cSj.prototype={
$1(d){var w=this.a
return w.n(new C.cS8(w,d))},
$S:6}
C.cS8.prototype={
$0(){var w=this.a
return w.d=w.gnr().cxw(this.b)},
$S:0}
C.cSk.prototype={
$1(d){var w=this.a
return w.d=w.gnr().aza(d)},
$S:2}
C.cSl.prototype={
$1(d){var w=this.a
return w.d=w.gnr().cwG(d)},
$S:2}
C.cSn.prototype={
$1(d){var w=this.a
return w.d=w.gnr().cxu(d)},
$S:2}
C.cSo.prototype={
$1(d){var w=this.a
return w.n(new C.cS7(w,d))},
$S:9}
C.cS7.prototype={
$0(){var w=this.a
return w.d=w.gnr().cxl(this.b)},
$S:0}
C.cSp.prototype={
$0(){var w=this.a,v=w.gnr(),u=B.a.i(w.gDR(0).a.a),t=B.a.i(w.gawy().a.a)
u=v.b5O(B.a.i(w.gamY().a.a),t,u)
A.a6(this.b,!1).K(u)
return null},
$S:0}
C.dKb.prototype={
$0(){var w=this.a
w.uW()
w.a.bl()
w.a.p_()},
$S:0}
C.dKa.prototype={
$0(){var w=this.a
w.uW()
w.a.bl()
w.a.p_()},
$S:0}
C.dKd.prototype={
$0(){var w=this,v=w.b
if(J.ct(v)||J.ch(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dKe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKf.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dK9.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dKc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dKh.prototype={
$0(){this.a.MH()
return null},
$S:0}
C.dKg.prototype={
$0(){return this.a.D5(this.b)},
$S:0}
C.dJC.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bF(!1,B.de,w,w,!0,w,w,new C.dJA(d),w,w),r=A.bk(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ei(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dJB(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dJA.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dJB.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dJD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cx0(this.b)},
$S:0}
C.dJx.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aNG(w.b,w.c,w.d)},
$S:8}
C.dJ5.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dJ6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.ET(t.a.c),$async$$0)
case 2:s=r.qC(q.dF(e,new C.dJi(t)))
if(s!=null&&t.c!=null)t.n(new C.dJj(t,s))
t.a.bl()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJi.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJl.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJw.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cxN(C.fZv(w),w)},
$S:0}
C.dJu.prototype={
$1(d){return new A.eh(new C.dJt(this.a,this.b),null)},
$S:21}
C.dJt.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bl:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahm,v,v,v,p>0?new C.dJp(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aS,A.A(A.a([o,A.C(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.ahU,v,v,v,new C.dJq(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.ei(A.a([A.bF(!1,B.de,v,v,!0,v,v,new C.dJr(d),v,v),A.bJ(B.pz,new C.dJs(d),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:169}
C.dJp.prototype={
$0(){return this.b.$1(new C.dJo(this.a))},
$S:0}
C.dJo.prototype={
$0(){return--this.a.a},
$S:0}
C.dJq.prototype={
$0(){return this.b.$1(new C.dJn(this.a))},
$S:0}
C.dJn.prototype={
$0(){return++this.a.a},
$S:0}
C.dJr.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dJs.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dJv.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cxB(this.a.a)
w.r.a8(0)},
$S:0}
C.dIU.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aeZ(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fTs(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+13}
C.dIV.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.f,x.P)
w.push(this.b)
v.d=u.az7(w)},
$S:0}
C.dJF.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aay(this.b,w,this.c,null)},
$S:z+31}
C.dJz.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.kV,B.aR,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bl:B.bu,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bl:B.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.ei(A.a([A.bJ(D.eQM,new C.dJy(d),A.bk(B.aR,w,w,w,w,w,w,w,w,w,w,w))],o),B.b5,w,u,v,w,s,w,new A.b4(t,B.V),r,w)},
$S:19}
C.dJy.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.dIW.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dIX.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dIY.prototype={
$1(d){return d.a},
$S:z+7}
C.dIZ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hO(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.az7(w)},
$S:0}
C.dJ2.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aeZ(q)
w=A.S(q).k("a3<1>")
q=A.z(new A.a3(q,new C.dJ0(r),w),w.k("E.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fTs(v.e,null,r,v.f,v.r,new C.dJ1(s,r),q,"Member Profile",w,t,u)},
$S:z+13}
C.dJ1.prototype={
$0(){return this.a.a6X(this.b)},
$S:0}
C.dJ0.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dJ3.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.S(w).k("I<1,hO>")
w=A.z(new A.I(w,new C.dJ_(this.b),v),v.k("ai.E"))
u.d=t.az7(w)},
$S:0}
C.dJ_.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+24}
C.dJE.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dJf.prototype={
$1(d){return d.length!==0},
$S:3}
C.dJg.prototype={
$1(d){var w=this
return new A.eh(new C.dJe(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dJe.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bl:B.bu,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bl:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.I(o,new C.dJa(u,e,o),A.S(o).k("I<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.T,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bn(v,new A.b0(4,A.m(12),B.d9),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ad,v,v,v,v,v,B.m9,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.u(p,B.al,v,B.e,B.R,0,B.p)
t=w.a
return A.ei(A.a([A.bF(!1,B.de,v,v,!0,v,v,new C.dJb(d),v,v),A.bJ(B.He,new C.dJc(t,u,o,e),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.eF7,new C.dJd(t,u,o,d),A.bk(B.aR,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:169}
C.dJa.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bAv,w,w,w,new C.dJ9(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1868}
C.dJ9.prototype={
$0(){return this.a.$1(new C.dJ7(this.b,this.c))},
$S:0}
C.dJ7.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dJb.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dJc.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dJ8(w.c,u))
v.bG(0,B.c_)}},
$S:0}
C.dJ8.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dJd.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).K(!0)},
$S:0}
C.dJh.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cye(this.b,D.rG,C.ER(v,w.a.c))},
$S:0}
C.dJM.prototype={
$1(d){return d.as},
$S:z+1}
C.dJN.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.ir(this.b,w)},
$S:0}
C.dJO.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hM9(v)
return w.TD(v==null?null:v.a)},
$S:0}
C.dJP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hpv(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcg(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.cgW(new A.ap(u,t),v.gbbE(),new A.ap(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cx5:D.cvH
q=A.H(s?B.du:D.b0Q,B.r,1)
p=A.m(22)
o=A.bV(0,A.b1(m,m,m,new C.b9l(s,m),B.as),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.am(B.W,m,B.a9,B.q,A.a([o,A.bV(0,A.tF(new A.L(n,n,n,n),new A.a7(u,t,new C.bac(l.d,v,l.f,w,new C.dJI(l),l.gc1x(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.brg(s,new C.dJJ(l,e),new C.dJK(l,e),new C.dJL(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.h,m,m,new A.o(m,m,q,k,m,new A.a8(B.b4,B.bd,B.w,r,m,m),B.n),m,m,m,O.acl,m,m,m,m)},
$S:217}
C.dJI.prototype={
$1(d){var w=this.a
w.n(new C.dJG(w,d))},
$S:2}
C.dJG.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.G(0,v)},
$S:0}
C.dJJ.prototype={
$0(){var w=this.b
return this.a.b3w(1.25,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJK.prototype={
$0(){var w=this.b
return this.a.b3w(0.8,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJL.prototype={
$0(){var w=this,v=w.b
return w.a.aNG(new A.ap(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ap(w.c,w.d),w.e.gbbE())},
$S:0}
C.dJQ.prototype={
$0(){var w=this.a
return w.n(new C.dJH(w))},
$S:0}
C.dJH.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dJ4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fB(new A.fu(s.c)),$async$$0)
case 2:t.wJ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZV.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.bdU(u,C.h2v(v.c,u),new C.cZU(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+25}
C.cZU.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.cZW.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bh9(d.d,d.c,u.f.q(0,d.a),new C.cZT(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+26}
C.cZT.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.f9i.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.S(v)
return A.qC(new A.cR(new A.a3(v,new C.f9j(d),w.k("a3<1>")),new C.f9k(),w.k("cR<1,n>")))},
$S:z+22}
C.f9j.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.f9k.prototype={
$1(d){return d.a},
$S:z+7}
C.f9g.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.f9h.prototype={
$1(d){return d.b},
$S:z+7}
C.f9n.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.S(v)
return A.qC(new A.cR(new A.a3(v,new C.f9o(d),w.k("a3<1>")),new C.f9p(),w.k("cR<1,n>")))},
$S:z+22}
C.f9o.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.f9p.prototype={
$1(d){return d.a},
$S:z+7}
C.f9l.prototype={
$1(d){var w,v=A.eM([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.G(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+28}
C.f9m.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.cZY.prototype={
$0(){return this.a},
$S:z+29}
C.d_e.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:251}
C.d_6.prototype={
$2(d,e){var w=this.a.ci(0,d,new C.d_7()),v=J.a5(w)
if(!v.q(w,e))v.G(w,e)},
$S:119}
C.d_7.prototype={
$0(){return A.a([],x.s)},
$S:736}
C.d_5.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eR(w,e)
return w===!0},
$S:296}
C.cZZ.prototype={
$0(){return A.a([],x.u)},
$S:z+30}
C.d_4.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d_3.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.G(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.AA:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.T:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.G(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.AA:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1870}
C.d__.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d_8.prototype={
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
t=J.aW(t==null?D.AA:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.bd(w,new C.d_9(r)))w.push(r)}}B.d.bk(w,new C.d_a(a8))
B.d.aY(w,new C.d_b())
q=C.hpu(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.e0y],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.J)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.m(0,a9,a8)
if(o.length===0)return A.a([new A.T(-p,p)],x.G)
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
a1=A.a([new A.T(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bk5(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.T(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.T(a5,a6))}}return a1},
$S:1871}
C.d_9.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d_a.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d_b.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.d_c.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gH(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bf(v,A.a2(v).k("bf<2>")).cP(0,0,B.pL)+88-w.gI(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gH(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:688}
C.d_d.prototype={
$1(d){return 16+d*156},
$S:253}
C.cZX.prototype={
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
t.m(0,d,new C.Ec(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Ec(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Ec(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ie(d,new A.v(e+t,w),s,s.length))}},
$S:188}
C.d_0.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFq(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:119}
C.d_1.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.d_2.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:737}
C.d_f.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:737}
C.d_g.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:451}
C.d_h.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:197}
C.d_i.prototype={
$1(d){return d>=0.5},
$S:128}
C.eUk.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hJ(A.aH(!1,v,!0,new A.a7(38,38,A.V(d,this.a.c?B.c:B.d3,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1873}
C.ew_.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.B(B.nh,A.aH(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.erZ,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.K_,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evZ(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+33}
C.evZ.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.der.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.deq.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mQ,B.L,w,w)
return A.ei(A.a([A.bF(!1,B.de,w,w,!0,w,w,new C.deo(d),w,w),A.bF(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lK,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dep(d),w,w)],x.p),B.b5,B.Do,w,u,D.bh_,w,D.biR,new A.b4(v,B.V),w,w)},
$S:19}
C.deo.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dep.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.deA.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.deB.prototype={
$1(d){var w=this.a
return w.n(new C.dez(w,d))},
$S:z+34}
C.dez.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deC.prototype={
$1(d){var w=null
return A.p7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deF.prototype={
$1(d){var w=this.a
return w.n(new C.dey(w,d))},
$S:32}
C.dey.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.deE.prototype={
$1(d){var w=null
return A.p7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deG.prototype={
$1(d){var w=this.a
return w.n(new C.dex(w,d))},
$S:32}
C.dex.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.deH.prototype={
$0(){var w=this.a
return w.n(new C.dew(w))},
$S:0}
C.dew.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.deI.prototype={
$0(){var w=this.a
return w.n(new C.dev(w))},
$S:0}
C.dev.prototype={
$0(){return++this.a.at},
$S:0}
C.deJ.prototype={
$0(){var w=this.a
return w.n(new C.deu(w))},
$S:0}
C.deu.prototype={
$0(){return--this.a.ax},
$S:0}
C.deK.prototype={
$0(){var w=this.a
return w.n(new C.det(w))},
$S:0}
C.det.prototype={
$0(){return++this.a.ax},
$S:0}
C.deL.prototype={
$1(d){var w=this.a
return w.n(new C.des(w,d))},
$S:9}
C.des.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.deD.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.deM.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bU
else u=(q.c.a?B.dT:B.cg).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bl:B.bu
t=A.V(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bl:B.bu
return A.C(A.aD(!1,B.X,!0,r,A.aH(!1,o,!0,A.de(r,A.u(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b8,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jW,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.deN(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ab),1)},
$S:z+36}
C.deN.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.deW.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.c2l.prototype={
$2(d,e){return new A.bq(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c2s.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c2t.prototype={
$2(d,e){var w=J.b3(e,new C.c2r(),x.a)
w=A.z(w,w.$ti.k("ai.E"))
return new A.bq(d,w,x.d2)},
$S:z+38}
C.c2r.prototype={
$1(d){return d.ad()},
$S:z+12}
C.c2n.prototype={
$1(d){return C.ahN(A.Y(d,x.N,x.z))},
$S:z+8}
C.c2o.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c2p.prototype={
$1(d){return C.fKF(A.Y(d,x.N,x.z))},
$S:z+19}
C.c2q.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c2x.prototype={
$1(d){return new A.aCw(d.f.length,d.a,d.b)},
$S:z+40}
C.c2y.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:637}
C.c2u.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c2v.prototype={
$1(d){return d.cxd(C.ER(d,this.a))},
$S:z+41}
C.dJZ.prototype={
$1(d){return C.te(d,this.a.a.c)},
$S:z+2}
C.dK_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dK3.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dK4.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dJW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWa(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xe("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oy(r.c,r.e),$async$$0)
case 4:s.xe(p)
w=5
return A.b(s.HX(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWa(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xe("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oy(r.c,r.e),$async$$0)
case 4:s.xe(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.SY(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xe("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xe("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xe("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.HX(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a4(j)
o=r.a
if(o.c==null){w=1
break}o.xe(B.a.e_(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dK2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aW9(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xe("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ct(A.eN(new C.dK1(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oy(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dK1.prototype={
$1(d){var w=this.b
return new C.Y0(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+42}
C.dK0.prototype={
$1(d){return D.f3b},
$S:z+43}
C.dK6.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.dK7.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dK5(w,d)
return new A.B(B.d6,new C.bag(this.b,d.c,d.a,w,null),null)},
$S:1874}
C.dK5.prototype={
$0(){return this.a.Ve(this.b.b)},
$S:0}
C.dJR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dJS.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dJT.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dJU.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dJV.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.dK8.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dl(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).K(s)
return}},
$S:184}
C.dwq.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+44}
C.dwr.prototype={
$0(){return B.d.gI(D.a_w)},
$S:z+45}
C.dws.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b1(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.cCO,44),w,w,w),w,w,new C.bf0(u,t,v,w),B.as)},
$S:74}
C.foB.prototype={
$1(d){return A.p6(new C.foA(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:136}
C.foA.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.aa(0,B.G,B.x.j(r?0.35:0.08),B.tm,24)],x.V),o=r?B.dT:B.cg
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aR.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.bvd,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a_,B.a7,B.w,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aN:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.U,o,new A.B(E.adi,A.A(A.a([w,B.bb,A.C(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bl:B.bu,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.C(A.ig(!0,t,e,B.z,D.efE,new C.foz(this.b,s),20,B.acU,t,B.af,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.kg,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.foz.prototype={
$2(d,e){var w=null,v=D.a_w[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dT:B.cg,B.r,1),q=A.a([new A.aa(0,B.G,B.x.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.C(new C.a3P(v.a,!0,w),1),n=s?B.j5:B.iz,m=A.d(v.b,w,1,B.Z,w,w,w,A.l(w,w,s?B.aN:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.X,!0,w,A.aH(!1,u,!0,A.er(A.bw(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.Z,w,w,w,A.l(w,w,s?B.bl:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.kT,w,w,w)],l),B.al,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.foy(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ab)},
$S:75}
C.foy.prototype={
$0(){A.a6(this.a,!1).K("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.c9V.prototype={
$0(){return this.a.acz(this.b)},
$S:0}
C.fo_.prototype={
$1(d){return D.f_Y},
$S:z+46}
C.fv6.prototype={
$1(d){var w=this
return new C.ZI(w.a,w.b,w.c,w.d,null)},
$S:z+71}
C.fo1.prototype={
$1(d){return new C.WF(this.a,null)},
$S:z+48}
C.fo0.prototype={
$1(d){return D.f0X},
$S:z+49}
C.cSB.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cSC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cSA(w,d))},
$S:32}
C.cSA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cSD.prototype={
$1(d){return this.a.Ix()},
$S:2}
C.cSE.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cSx.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cSy.prototype={
$1(d){return this.a.Ix()},
$S:2}
C.cSz.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cq8.prototype={
$0(){},
$S:0}
C.cqe.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.cqf.prototype={
$0(){return this.a.aJj(-1)},
$S:0}
C.cqg.prototype={
$1(d){return this.a.n(new C.cqd())},
$S:2}
C.cqd.prototype={
$0(){},
$S:0}
C.cqh.prototype={
$0(){return this.a.aJj(1)},
$S:0}
C.cqi.prototype={
$1(d){return this.a.n(new C.cqc())},
$S:2}
C.cqc.prototype={
$0(){},
$S:0}
C.cqj.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aR.j(0.2)
if(s)v=B.aR
else v=this.b.a?B.dT:B.cg
return A.tw(u,u,B.aW,r,u,new C.cqb(t,d),B.zH,s,w,u,new A.ay(v,1,B.r,-1),B.c6)},
$S:1875}
C.cqb.prototype={
$1(d){var w=this.a
return w.n(new C.cq9(w,this.b))},
$S:9}
C.cq9.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cqk.prototype={
$1(d){return this.a.n(new C.cqa())},
$S:2}
C.cqa.prototype={
$0(){},
$S:0}
C.cql.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.eTN.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).K(w)},
$S:2}
C.eTO.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.eTP.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).K(w)},
$S:0}
C.eTL.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbrD()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b1(new A.B(D.biQ,new A.ep(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.br5(p,v,this.b.a,u,t,r),r,r,B.as)},
$S:74}
C.eTM.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dF.aq(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aR,B.bU,w)
s.toString
s=A.a([B.aW,s,B.aR],x.O)
return A.aD(!1,B.X,!0,p,A.aH(!1,v,!0,A.er(D.dLA,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.d4(-1.2+t,-0.5),new A.d4(1.2-t,0.8),B.w,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ab)},
$S:132}
C.fmT.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.et9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.et0.prototype={
$0(){return this.a.e=!0},
$S:0}
C.et1.prototype={
$0(){return this.a.e=!1},
$S:0}
C.et7.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.eh(new C.et6(w,this.b),null)},
$S:21}
C.et6.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eA(w,u,new A.B(B.adc,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bl:B.bu,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.fQj(new C.et3(r,e),r.a),B.aB,A.A(A.a([A.C(A.dU(B.de,new C.et4(d),w),1),B.av,A.C(A.bJ(B.R6,new C.et5(r,d),A.bk(B.aR,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.al,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b4(t,B.V),w)},
$S:97}
C.et3.prototype={
$1(d){return this.b.$1(new C.et2(this.a,d))},
$S:32}
C.et2.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.et4.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.et5.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).K(w)
return null},
$S:0}
C.et8.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QH(this.b)},
$S:0}
C.esW.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.d,x.Q)
w.push(this.b)
v.d=u.b5n(w)},
$S:0}
C.et_.prototype={
$1(d){return this.be2(d)},
be2(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Jq(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.ir(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.esZ.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.S(w).k("a3<1>")
w=A.z(new A.a3(w,new C.esY(this.b),v),v.k("E.E"))
u.d=t.b5n(w)},
$S:0}
C.esY.prototype={
$1(d){return d.a!==this.a.a},
$S:z+17}
C.eta.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.ir(this.b,w)},
$S:0}
C.etb.prototype={
$1(d){return this.a.bvx(d,this.b)},
$S:z+52}
C.esX.prototype={
$0(){return this.a.a6W(this.b)},
$S:0}
C.fuZ.prototype={
$1(d){return new C.aaT(this.a,this.b,this.c,null)},
$S:z+53}
C.etd.prototype={
$0(){return this.a.XI(this.b)},
$S:0}
C.ete.prototype={
$0(){return this.a.O5(this.b)},
$S:0}
C.etf.prototype={
$0(){return this.a.D0(this.b)},
$S:0}
C.etg.prototype={
$0(){return this.a.XJ(this.b)},
$S:0}
C.etc.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.esR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.esS.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.esT.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
C.esV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.esU(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.esU.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.etD.prototype={
$2(d,e){return d+e.gvY()},
$S:z+56}
C.etz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.etk.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bvD,B.h,v,v,new A.o(B.aH.j(u?0.18:0.08),v,A.H(B.aH.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bl:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aN:B.aG
u=u?B.dT:B.cg
w=x.p
return A.eA(v,t,new A.B(B.wt,A.u(A.a([r,B.aS,q,B.P,p,B.d1,A.A(A.a([A.C(A.dU(B.mT,new C.eti(d),A.d9(v,v,v,v,v,v,v,v,v,o,v,v,B.eV,v,new A.b4(A.m(14),B.V),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.av,A.C(A.bJ(D.eUb,new C.etj(d),A.bk(B.aH,v,v,v,v,v,B.eV,v,new A.b4(A.m(14),B.V),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cZ,v,new A.b4(s,B.V),v)},
$S:45}
C.eti.prototype={
$0(){A.a6(this.a,!1).K(!1)
return null},
$S:0}
C.etj.prototype={
$0(){A.a6(this.a,!1).K(!0)
return null},
$S:0}
C.ett.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.aa(0,B.G,B.x.j(k?0.35:0.08),B.fI,28)],x.V),g=k?D.cIS:B.ZY,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eaj,B.au,new A.bE(B.a_,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cp,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aE,B.w,g,m,m),B.n),m,m,m,m,E.adf,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bl:B.bu,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.C(v.aZP(B.b0,B.iF,new C.etq(v,d),l,"Camera import","Scan QR"),1),B.av,A.C(v.aZP(B.cA,M.x6,new C.etr(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bl:B.bu,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aH.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aH.j(0.28),B.r,1)
o=A.p(m,D.bv2,B.h,m,m,new A.o(B.aH.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aN:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.C(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bl:B.bu,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.br(!0,new A.B(B.ub,A.p(m,A.u(A.a([g,new A.B(B.add,A.u(A.a([w,B.U,u,B.bv,t,B.U,A.aD(!1,B.X,!0,m,A.aH(!1,s,!0,A.p(m,A.A(A.a([o,B.bb,n,A.V(B.el,k?B.bl:B.bu,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.ets(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ab)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:33}
C.etq.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).K(null)
w=2
return A.b(u.a.uz("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etr.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).K(null)
w=2
return A.b(u.a.uz("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ets.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).K(null)
w=2
return A.b(u.a.M_(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eto.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.aa(0,B.G,B.x.j(o?0.35:0.08),B.eI,24)],x.V),k=o?B.dT:B.cg
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bl:B.bu
u=A.bw(w,new A.a7(48,48,C.aMw(!0,A.m(12),48,P.Ky,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.Z,q,q,q,A.l(q,q,o?B.aN:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zv(v.gvY())
s=x.p
r=this.a
return A.br(!0,new A.B(B.ub,A.p(q,A.u(A.a([B.U,k,new A.B(D.ada,A.A(A.a([u,B.bb,A.C(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bl:B.bu,q,q,q,q,q,q,q,q,12,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zn,r.cbn(B.rY,B.aR,new C.etm(d),p,"QR code or backup file","Transfer project"),r.aWU(!0,B.e4,B.aH,new C.etn(d),p,"Remove from this device","Delete project"),B.U],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:33}
C.etm.prototype={
$0(){A.a6(this.a,!1).K("transfer")
return null},
$S:0}
C.etn.prototype={
$0(){A.a6(this.a,!1).K("delete")
return null},
$S:0}
C.etp.prototype={
$1(d){return this.be3(d)},
be3(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Jq(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uK(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.etG.prototype={
$0(){var w=this.a
w.a.bl()
w.n(new C.etF(w))},
$S:0}
C.etF.prototype={
$0(){return this.a.r++},
$S:0}
C.etH.prototype={
$0(){var w=this.a
return w.n(new C.etE(w))},
$S:0}
C.etE.prototype={
$0(){return this.a.r++},
$S:0}
C.eth.prototype={
$0(){var w=this.a.c
w.toString
return A.ir(w,null)},
$S:0}
C.etl.prototype={
$0(){return this.a.c4X(this.b)},
$S:0}
C.etC.prototype={
$0(){var w=this.a
return w.n(new C.etB(w,this.b))},
$S:0}
C.etB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etw.prototype={
$0(){return this.a.uz("scan")},
$S:0}
C.etx.prototype={
$0(){return this.a.uz("file")},
$S:0}
C.ety.prototype={
$1(d){return this.a.cbo(d,this.b)},
$S:z+57}
C.etv.prototype={
$0(){return this.a.D4(this.b)},
$S:0}
C.etu.prototype={
$0(){return this.a.Yb(this.b,this.c)},
$S:0}
C.cpA.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+58}
C.cpz.prototype={
$1(d){return d.ad()},
$S:z+59}
C.cpx.prototype={
$1(d){return C.h8g(A.Y(d,x.N,x.z))},
$S:z+60}
C.cpy.prototype={
$1(d){return d.a.length!==0},
$S:z+17}
C.f8C.prototype={
$1(d){return d.y===D.jY},
$S:z+2}
C.fvm.prototype={
$1(d){return C.bwO(d,this.a)},
$S:z+2}
C.f7O.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bIj.prototype={
$1(d){return!d.as},
$S:z+1}
C.bIi.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bIf.prototype={
$1(d){return C.fKG(A.Y(d,x.N,x.z))},
$S:z+14}
C.bIg.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bIh.prototype={
$1(d){return J.k(d)},
$S:17}
C.f01.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.eX0.prototype={
$1(d){return C.fBy(A.Y(d,x.N,x.z))},
$S:z+64}
C.eX1.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eX2.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.fnR.prototype={
$1(d){return J.k(d)},
$S:17}
C.fnS.prototype={
$1(d){return d.a},
$S:z+66}
C.fnT.prototype={
$1(d){return d.length!==0},
$S:3}
C.fnU.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.fnV.prototype={
$1(d){return d.QH(null).ad()},
$S:z+67}
C.fvk.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.f93.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fbb.prototype={
$1(d){return C.ahN(A.Y(d,x.N,x.z))},
$S:z+8}
C.fbc.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fbd.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fbe.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fbf.prototype={
$1(d){return C.te(d,this.a)},
$S:z+2}
C.fnE.prototype={
$1(d){return C.te(d,this.a)},
$S:z+2}
C.fvf.prototype={
$1(d){return C.ahN(A.Y(d,x.N,x.z))},
$S:z+8}
C.fvg.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fvh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f8L.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.f8M.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fvq.prototype={
$1(d){return!d.as},
$S:z+1}
C.f8m.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.f8n.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.f8o.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.fv7.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fbX.prototype={
$1(d){return d.Q},
$S:z+69}
C.fnA.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fb8.prototype={
$1(d){return C.ahN(A.Y(d,x.N,x.z))},
$S:z+8}
C.fb9.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fba.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fny.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eXw.prototype={
$1(d){return d.length!==0},
$S:3}
C.eXx.prototype={
$1(d){return C.fKG(A.Y(d,x.N,x.z))},
$S:z+14}
C.eXy.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eXz.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eXA.prototype={
$1(d){return d.length!==0},
$S:3}
C.eXN.prototype={
$2(d,e){return d.eQ(new C.eXO(e))},
$S:1876}
C.eXO.prototype={
$1(d){$.ak.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c3},
$S:1877}
C.eXK.prototype={
$1(d){return C.htW(d,this.a)},
$S:z+70}
C.eXL.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eXM.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f0G.prototype={
$1(d){return d.a},
$S:z+47}
C.f0H.prototype={
$1(d){return d.length!==0},
$S:3}
C.f0I.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f2H.prototype={
$1(d){return d.ad()},
$S:z+5}
C.f7a.prototype={
$1(d){return C.fVH(d,C.ER(d,this.a))},
$S:z+5}
C.f7b.prototype={
$1(d){return C.fVI(d,C.ER(d,this.a))},
$S:z+5};(function aliases(){var w=C.aHK.prototype
w.bo_=w.p
w=C.aJQ.prototype
w.bqh=w.p
w=C.aJR.prototype
w.bqi=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azp.prototype,"gc8q","c8r",23)
var s
w(s=C.aww.prototype,"gc1D","c1E",27)
v(s,"gaHB","LB",0)
v(s,"gcgh","Dx",0)
v(s,"gbD1","Md",0)
v(s,"gctG","xf",0)
v(s,"gcam","YR",0)
v(s,"gbDs","UI",0)
w(s,"gbHU","bHV",39)
v(s,"gbtd","yI",0)
v(C.awx.prototype,"gctC","DX",0)
v(s=C.aA_.prototype,"gacb","uL",0)
v(s,"gc4e","Y3",0)
v(s,"gaLx","Gr",0)
v(s=C.azX.prototype,"gcpZ","a_T",0)
v(s,"gacb","uL",0)
v(s,"gcer","Zx",0)
v(s,"gc59","Yg",0)
w(s,"gc1x","c1y",51)
v(s,"gbDj","Gw",0)
v(s,"gcqS","cqT",3)
v(s,"gbU5","Wh",0)
w(s,"gc03","c04",37)
v(s,"gc3Z","c4_",3)
v(s=C.ayo.prototype,"gbYX","NE",0)
v(s,"gbYZ","bZ_",3)
v(s,"gbA1","a6z",0)
v(s=C.azZ.prototype,"gbGs","Va",0)
v(s,"gbQz","VM",0)
v(s,"gckx","a_k",0)
v(s,"gcgR","ZX",0)
v(C.azY.prototype,"gcgz","adW",0)
v(C.apj.prototype,"gc01","XH",0)
v(C.avj.prototype,"ga_C","Ix",3)
v(C.avi.prototype,"ga_C","Ix",3)
v(C.au4.prototype,"ga_C","Ix",3)
v(s=C.aBo.prototype,"gaWi","OA",0)
v(s,"gbs5","Tx",0)
v(s,"gc4Y","c4Z",3)
w(C.aBn.prototype,"gc0S","c0T",54)
u(C.aBp.prototype,"gaLr",0,0,null,["$1","$0"],["Gq","bBh"],55,0,0)
t(C,"h1L","hD6",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.alk,C.mI,C.FT,C.ac3,C.NM,C.tv,C.Ie,C.Ec,C.bae,C.aFq,C.amu,C.d_j,C.le,C.aPn,C.aPm,C.aNr,C.t1,C.qn,C.l0,C.hO,C.kk,C.aDq])
u(A.i2,[C.ffy,C.ffx,C.ffz,C.fou,C.f68,C.f69,C.f6e,C.fdg,C.fdf,C.fde,C.bWR,C.fp_,C.foS,C.fp3,C.f8T,C.dx6,C.dx1,C.dx2,C.dwF,C.dwB,C.dxl,C.dxm,C.dxf,C.dxg,C.dxn,C.dxo,C.fb5,C.fb6,C.fnC,C.fve,C.f8K,C.fo7,C.cZw,C.cYV,C.cZ1,C.cZi,C.cZ3,C.cYX,C.cZ7,C.cZ8,C.cZ6,C.cZn,C.cZm,C.d_Y,C.d_Z,C.d0_,C.cZK,C.cZP,C.cZO,C.cyn,C.cyp,C.cRP,C.cSd,C.cSe,C.cSh,C.cSj,C.cSk,C.cSl,C.cSn,C.cSo,C.dKc,C.dJC,C.dJx,C.dJ5,C.dJi,C.dJl,C.dJu,C.dIU,C.dJF,C.dJz,C.dIW,C.dIX,C.dIY,C.dJ2,C.dJ0,C.dJ_,C.dJf,C.dJg,C.dJa,C.dJM,C.dJI,C.cZV,C.cZW,C.f9i,C.f9j,C.f9k,C.f9g,C.f9h,C.f9n,C.f9o,C.f9p,C.f9l,C.f9m,C.d_e,C.d_4,C.d__,C.d_9,C.d_a,C.d_d,C.d_1,C.d_g,C.d_h,C.d_i,C.eUk,C.ew_,C.deq,C.deA,C.deB,C.deC,C.deF,C.deE,C.deG,C.deL,C.deM,C.c2s,C.c2r,C.c2n,C.c2o,C.c2p,C.c2q,C.c2x,C.c2u,C.c2v,C.dJZ,C.dK1,C.dK0,C.dK7,C.dK8,C.dwq,C.foB,C.fo_,C.fv6,C.fo1,C.fo0,C.cSC,C.cSD,C.cSy,C.cqg,C.cqi,C.cqj,C.cqb,C.cqk,C.eTN,C.fmT,C.et7,C.et3,C.et_,C.esY,C.etb,C.fuZ,C.etk,C.ett,C.eto,C.etp,C.ety,C.cpz,C.cpx,C.cpy,C.f8C,C.fvm,C.f7O,C.bIj,C.bIi,C.bIf,C.bIg,C.bIh,C.eX0,C.eX1,C.fnR,C.fnS,C.fnT,C.fnU,C.fnV,C.fvk,C.f93,C.fbb,C.fbc,C.fbe,C.fbf,C.fnE,C.fvf,C.fvg,C.fvh,C.f8L,C.f8M,C.fvq,C.f8m,C.f8n,C.fv7,C.fbX,C.fnA,C.fb8,C.fb9,C.fny,C.eXw,C.eXx,C.eXy,C.eXz,C.eXA,C.eXO,C.eXK,C.eXL,C.f0G,C.f0H,C.f2H,C.f7a,C.f7b])
u(A.ar,[C.aUI,C.Wk,C.b63,C.bac,C.bdU,C.brg,C.bh9,C.aax,C.bdT,C.aaw,C.bdS,C.ayp,C.aEt,C.aay,C.I3,C.bad,C.a9P,C.bab,C.bag,C.aUG,C.apj,C.aaT])
u(A.n2,[C.b6F,C.b7Q,C.b7H,C.aDl,C.bcX,C.baf,C.b9l,C.bf0,C.br5])
u(A.jl,[C.foX,C.foY,C.foZ,C.foQ,C.foR,C.fp1,C.fp2,C.dxi,C.dx4,C.dx7,C.dwM,C.dwN,C.dwO,C.dwL,C.dwT,C.dwK,C.dwU,C.dwV,C.dwJ,C.dwW,C.dwI,C.dwX,C.dwH,C.dwY,C.dwz,C.dwA,C.dwG,C.dwZ,C.dwE,C.dx_,C.dwD,C.dwP,C.dwC,C.dwQ,C.dwy,C.dwR,C.dwS,C.dxj,C.dxk,C.dx8,C.dx9,C.dxa,C.dxb,C.dxc,C.dxd,C.dxe,C.dxq,C.dxh,C.cZv,C.cZk,C.cZh,C.cYW,C.cZl,C.cZ_,C.cZ0,C.cZ2,C.cZj,C.cZ4,C.cZs,C.cZe,C.cZd,C.cZf,C.cZg,C.cZ9,C.cZb,C.cZc,C.cZ5,C.cZo,C.cZr,C.cYY,C.cYZ,C.d_X,C.d_W,C.d_V,C.d_U,C.d00,C.d_T,C.d01,C.cZL,C.cZM,C.cZN,C.cZQ,C.cZJ,C.cZI,C.cyo,C.cRO,C.cS0,C.cS_,C.cSf,C.cRZ,C.cSg,C.cRY,C.cRX,C.cSi,C.cRW,C.cS8,C.cS7,C.cSp,C.dKb,C.dKa,C.dKd,C.dKe,C.dKf,C.dK9,C.dKh,C.dKg,C.dJA,C.dJB,C.dJD,C.dJ6,C.dJk,C.dJj,C.dJm,C.dJw,C.dJp,C.dJo,C.dJq,C.dJn,C.dJr,C.dJs,C.dJv,C.dIV,C.dJy,C.dIZ,C.dJ1,C.dJ3,C.dJE,C.dJ9,C.dJ7,C.dJb,C.dJc,C.dJ8,C.dJd,C.dJh,C.dJN,C.dJO,C.dJG,C.dJJ,C.dJK,C.dJL,C.dJQ,C.dJH,C.dJ4,C.cZU,C.cZT,C.cZY,C.d_7,C.cZZ,C.evZ,C.der,C.deo,C.dep,C.dez,C.dey,C.dex,C.deH,C.dew,C.deI,C.dev,C.deJ,C.deu,C.deK,C.det,C.des,C.deD,C.deN,C.deW,C.dK_,C.dK3,C.dK4,C.dJW,C.dJX,C.dJY,C.dK2,C.dK6,C.dK5,C.dJR,C.dJS,C.dJT,C.dJU,C.dJV,C.dwr,C.foy,C.c9V,C.cSB,C.cSA,C.cSE,C.cSx,C.cSz,C.cq8,C.cqe,C.cqf,C.cqd,C.cqh,C.cqc,C.cq9,C.cqa,C.cql,C.eTO,C.eTP,C.et9,C.et0,C.et1,C.et2,C.et4,C.et5,C.et8,C.esW,C.esZ,C.eta,C.esX,C.etd,C.ete,C.etf,C.etg,C.etc,C.esR,C.esS,C.esT,C.esV,C.esU,C.etz,C.etA,C.eti,C.etj,C.etq,C.etr,C.ets,C.etm,C.etn,C.etG,C.etF,C.etH,C.etE,C.eth,C.etl,C.etC,C.etB,C.etw,C.etx,C.etv,C.etu])
u(A.ae,[C.alr,C.X2,C.X6,C.X4,C.WD,C.amx,C.amr,C.XG,C.amv,C.Y0,C.Y1,C.a3P,C.WF,C.WE,C.Wb,C.ZI,C.E0,C.atY,C.api,C.apc,C.aph,C.M9])
u(A.ag,[C.azp,C.aww,C.bau,C.awx,C.b7O,C.aA_,C.azX,C.ayo,C.azZ,C.azY,C.bfi,C.aHK,C.avj,C.avi,C.au4,C.br8,C.aJQ,C.aJR,C.aBo,C.bgD,C.aBn,C.bsR])
u(A.kw,[C.dx3,C.dx5,C.dx0,C.dxp,C.fb7,C.bIe,C.cZu,C.cZt,C.cZa,C.cZp,C.cZq,C.cZR,C.dJt,C.dJe,C.dJP,C.d_6,C.d_5,C.d_3,C.d_8,C.d_b,C.d_c,C.cZX,C.d_0,C.d_2,C.d_f,C.c2l,C.c2t,C.c2y,C.dws,C.foA,C.foz,C.eTL,C.eTM,C.et6,C.etD,C.cpA,C.f01,C.eX2,C.fbd,C.f8o,C.fba,C.eXN,C.eXM,C.f0I])
t(C.bf1,C.aHK)
u(A.m9,[C.a8T,C.aG7,C.FU,C.ahM,C.cpB,C.cpC])
t(C.br6,C.aJQ)
t(C.br7,C.aJR)
t(C.aBp,C.bsR)
t(C.b4y,A.b4n)
t(C.br9,A.a3u)
t(C.b4x,C.br9)
w(C.aHK,A.eI)
w(C.aJQ,A.ca)
w(C.aJR,A.ca)
v(C.bsR,A.eu)
v(C.br9,A.iP)})()
A.kc(b.typeUniverse,JSON.parse('{"aUI":{"ar":[],"r":[]},"b6F":{"aA":[]},"alr":{"ae":[],"r":[]},"azp":{"ag":["alr"]},"X2":{"ae":[],"r":[]},"X6":{"ae":[],"r":[]},"X4":{"ae":[],"r":[]},"WD":{"ae":[],"r":[]},"aww":{"ag":["X2"]},"bau":{"ag":["X6"]},"awx":{"ag":["X4"]},"Wk":{"ar":[],"r":[]},"b7Q":{"aA":[]},"b7H":{"aA":[]},"b7O":{"ag":["WD"]},"aDl":{"aA":[]},"bcX":{"aA":[]},"b63":{"ar":[],"r":[]},"amx":{"ae":[],"r":[]},"amr":{"ae":[],"r":[]},"XG":{"ae":[],"r":[]},"aay":{"ar":[],"r":[]},"aA_":{"ag":["amx"]},"azX":{"ag":["amr"]},"bac":{"ar":[],"r":[]},"baf":{"aA":[]},"bdU":{"ar":[],"r":[]},"b9l":{"aA":[]},"brg":{"ar":[],"r":[]},"bh9":{"ar":[],"r":[]},"ayo":{"ag":["XG"]},"aax":{"ar":[],"r":[]},"bdT":{"ar":[],"r":[]},"aaw":{"ar":[],"r":[]},"bdS":{"ar":[],"r":[]},"ayp":{"ar":[],"r":[]},"aEt":{"ar":[],"r":[]},"I3":{"ar":[],"r":[]},"amv":{"ae":[],"r":[]},"Y0":{"ae":[],"r":[]},"Y1":{"ae":[],"r":[]},"azZ":{"ag":["amv"]},"bad":{"ar":[],"r":[]},"a9P":{"ar":[],"r":[]},"bab":{"ar":[],"r":[]},"bag":{"ar":[],"r":[]},"azY":{"ag":["Y0"]},"bfi":{"ag":["Y1"]},"aUG":{"ar":[],"r":[]},"a3P":{"ae":[],"r":[]},"bf1":{"ag":["a3P"]},"bf0":{"aA":[]},"apj":{"ar":[],"r":[]},"WF":{"ae":[],"r":[]},"WE":{"ae":[],"r":[]},"Wb":{"ae":[],"r":[]},"ZI":{"ae":[],"r":[]},"avj":{"ag":["WF"]},"avi":{"ag":["WE"]},"au4":{"ag":["Wb"]},"br8":{"ag":["ZI"]},"E0":{"ae":[],"r":[]},"atY":{"ae":[],"r":[]},"br6":{"ag":["E0"]},"br7":{"ag":["atY"]},"br5":{"aA":[]},"api":{"ae":[],"r":[]},"aBo":{"ag":["api"]},"aaT":{"ar":[],"r":[]},"apc":{"ae":[],"r":[]},"aph":{"ae":[],"r":[]},"bgD":{"ag":["apc"]},"aBn":{"ag":["aph"]},"M9":{"ae":[],"r":[]},"aBp":{"ag":["M9"],"eu":[]},"b4x":{"iP":[],"f5":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aNr"),Q:w("qn"),w:w("bt<n,n>"),c5:w("aPm"),dY:w("aPn"),d:w("eq<n?>"),e:w("FT"),B:w("mI"),P:w("hO"),k:w("kk"),x:w("au<~>"),f5:w("M<afI>"),V:w("M<aa>"),t:w("M<qn>"),O:w("M<x>"),ac:w("M<eq<n?>>"),I:w("M<mI>"),u:w("M<hO>"),_:w("M<kk>"),cl:w("M<au<al<a0<n,@>>>>"),R:w("M<mL>"),cq:w("M<al<+(P,P)>>"),ez:w("M<a0<n,aC>>"),gE:w("M<a0<n,n>>"),c7:w("M<a0<n,@>>"),fD:w("M<m_>"),bp:w("M<nM>"),g:w("M<v>"),v:w("M<hw>"),L:w("M<+(n,n)>"),G:w("M<+(P,P)>"),bF:w("M<+count,id,name(G,n,n)>"),A:w("M<cI>"),s:w("M<n>"),aS:w("M<j_>"),p:w("M<r>"),C:w("M<f5>"),D:w("M<l0>"),fp:w("M<NM>"),M:w("M<Ie>"),gZ:w("M<aDq>"),Y:w("M<ac3>"),E:w("M<aFq>"),F:w("M<P>"),dC:w("M<G>"),dS:w("M<aA?>"),d4:w("M<n?>"),J:w("cm<ag<ae>>"),b:w("al<mI>"),do:w("al<hO>"),r:w("al<kk>"),U:w("al<a0<n,@>>"),gk:w("al<+(n,n)>"),bC:w("al<+count,id,name(G,n,n)>"),h:w("al<n>"),c:w("al<l0>"),j:w("al<@>"),fK:w("bq<n,n>"),d2:w("bq<n,al<a0<n,@>>>"),a:w("a0<n,@>"),f:w("a0<@,@>"),gv:w("I<n,FV>"),n:w("iB"),g2:w("qG"),bV:w("alk"),fL:w("cr"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(P,al<hO>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bm<P>"),gc:w("dz"),b4:w("cv<G>"),W:w("k0<n>"),l:w("r"),cM:w("f5"),i:w("l0"),cc:w("Ec"),bw:w("aaw<n?>"),cy:w("Ig"),q:w("mv"),y:w("R"),gR:w("P"),z:w("@"),S:w("G"),eK:w("al<kk>?"),m:w("amu?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("q0?"),T:w("n?"),aD:w("dz?"),o:w("l0?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOR=new A.by(B.h2,B.bB,B.h2,B.bB)
D.a6f=new A.by(B.h2,B.jJ,B.h2,B.jJ)
D.aP2=new A.by(B.jK,B.bB,B.bB,B.bB)
D.aP6=new A.ay(B.cW,1.4,B.r,-1)
D.aPg=new A.ay(B.ak,1,B.r,-1)
D.aQB=new A.aV(0,1/0,64,1/0)
D.aQE=new A.aV(0,84,0,1/0)
D.asb=w([B.lM,B.q4,B.c],x.O)
D.bFf=new A.a8(B.ax,B.aE,B.w,D.asb,null,null)
D.aRr=new A.o(null,null,null,null,null,D.bFf,B.n)
D.cIo=w([B.aR,B.bU],x.O)
D.bHc=new A.a8(B.b4,B.bd,B.w,D.cIo,null,null)
D.aRI=new A.o(null,null,null,null,null,D.bHc,B.n)
D.aXw=new A.f9(null,null,null,null,null,E.iQ,null,null,null,null)
D.a7z=new A.cw(B.B,null,null,D.aXw,null)
D.ju=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eq3=new A.F(!0,D.ju,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI1=new A.w("No books on the shelf yet.",null,D.eq3,null,null,null,null,null,null,null,null,null)
D.dLB=new A.B(B.nj,D.eI1,null)
D.aW9=new A.cw(B.B,null,null,D.dLB,null)
D.aWY=new A.cw(B.B,null,null,V.SP,null)
D.aYQ=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZd=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.b_Q=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b0C=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b0Q=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9w=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b4c=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b4w=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.IP=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b5R=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b7N=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.ab_=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eD1=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bbS=new A.eq(null,D.eD1,B.eQ,null,x.d)
D.eKZ=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bbU=new A.eq(null,D.eKZ,B.eQ,null,x.d)
D.bcr=new A.b7(38e5)
D.bdc=new A.i3(0,10,0,10)
D.bdu=new A.i3(0,4,0,4)
D.bdL=new A.L(10,10,14,10)
D.bdV=new A.i3(10,4,10,4)
D.be3=new A.i3(10,8,10,8)
D.be4=new A.L(10,8,8,8)
D.bex=new A.L(12,6,12,2)
D.beP=new A.L(14,10,6,6)
D.beT=new A.L(14,12,14,8)
D.beW=new A.L(14,12,8,14)
D.beZ=new A.i3(14,14,14,14)
D.bfC=new A.L(16,2,16,10)
D.bfM=new A.L(16,6,16,30)
D.bfO=new A.L(16,6,16,8)
D.ada=new A.L(18,16,18,8)
D.bgn=new A.L(18,20,18,22)
D.ade=new A.L(18,24,18,24)
D.bgt=new A.L(18,30,18,30)
D.bgL=new A.L(20,10,12,20)
D.bgY=new A.L(20,18,16,18)
D.bh_=new A.L(20,18,20,6)
D.bhN=new A.L(24,32,24,28)
D.bhO=new A.L(24,36,24,32)
D.bhQ=new A.L(26,26,24,14)
D.bi3=new A.L(2,4,2,8)
D.bi7=new A.L(30,0,30,0)
D.bii=new A.L(38,22,22,22)
D.adv=new A.L(40,24,24,24)
D.bik=new A.i3(40,40,40,40)
D.bim=new A.L(46,30,30,30)
D.ady=new A.L(4,0,0,8)
D.biM=new A.L(56,40,40,40)
D.biQ=new A.L(1.25,1.25,1.25,1.25)
D.biR=new A.L(60,0,60,0)
D.bj4=new A.i3(7,3,7,3)
D.bju=new A.L(8,9,8,9)
D.bjy=new A.L(5,1.5,5,1.5)
D.bjI=new A.L(6,2.5,6,2.5)
D.eW2=new A.w("Signature",null,B.mR,null,null,null,null,null,null,null,null,null)
D.bk_=new A.bG(1,B.bq,D.eW2,null)
D.eTn=new A.w("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bkH=new A.bG(1,B.bq,D.eTn,null)
D.ex0=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVe=new A.w("Worksheets",null,D.ex0,null,null,null,null,null,null,null,null,null)
D.ex8=new A.F(!0,E.a87,null,null,null,null,13,B.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU9=new A.w("Track your project spending",null,D.ex8,null,null,null,null,null,null,null,null,null)
D.cB7=w([D.eVe,B.au,D.eU9],x.p)
D.baa=new A.fs(B.af,B.e,B.j,B.F,null,B.p,null,0,D.cB7,null)
D.bkM=new A.bG(1,B.bq,D.baa,null)
D.esx=new A.F(!0,E.iQ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCe=new A.w("FAMILY LIBRARY",null,D.esx,null,null,null,null,null,null,null,null,null)
D.bl_=new A.bG(1,B.bq,D.eCe,null)
D.Kd=new C.FT("leather","","",0,"gold",25,"middle","double","leather","",!0)
D.Wi=new C.FU(0,"male")
D.aeo=new C.FU(1,"female")
D.wB=new C.FU(2,"unknown")
D.rG=new C.ahM(0,"owner")
D.Ke=new C.ahM(1,"editor")
D.jY=new C.ahM(2,"viewer")
D.af8=new A.a_(61199,"MaterialIcons",!1)
D.bnh=new A.a_(61504,"MaterialIcons",!1)
D.bni=new A.a_(61505,"MaterialIcons",!1)
D.bnk=new A.a_(61587,"MaterialIcons",!1)
D.bnq=new A.a_(61890,"MaterialIcons",!1)
D.bol=new A.a_(63034,"MaterialIcons",!0)
D.bpc=new A.a_(63429,"MaterialIcons",!1)
D.ahf=new A.a_(984520,"MaterialIcons",!1)
D.bnR=new A.a_(62776,"MaterialIcons",!1)
D.bry=new A.ac(D.bnR,26,B.aW,null,null,null)
D.bmg=new A.a_(57648,"MaterialIcons",!1)
D.brQ=new A.ac(D.bmg,14,B.c,null,null,null)
D.bs7=new A.ac(B.DZ,17,null,null,null,null)
D.bsz=new A.ac(B.cu,17,D.ju,null,null,null)
D.bsE=new A.ac(E.X4,null,null,null,null,null)
D.bsH=new A.ac(B.je,18,E.iQ,null,null,null)
D.WO=new A.a_(62044,"MaterialIcons",!1)
D.bsN=new A.ac(D.WO,null,B.aR,null,null,null)
D.btD=new A.ac(B.dN,16,null,null,null,null)
D.btK=new A.ac(D.WO,32,B.aR,null,null,null)
D.bn4=new A.a_(61201,"MaterialIcons",!1)
D.bu1=new A.ac(D.bn4,18,B.cW,null,null,null)
D.bv2=new A.ac(B.KP,22,B.aH,null,null,null)
D.bvd=new A.ac(B.dN,22,B.aW,null,null,null)
D.bvo=new A.ac(N.WT,22,B.c,null,null,null)
D.bvt=new A.ac(B.rQ,52,B.c,null,null,null)
D.bvD=new A.ac(B.KP,30,B.aH,null,null,null)
D.ahQ=new A.ac(B.rY,22,B.c,null,null,null)
D.bw4=new A.ac(B.dN,17,null,null,null,null)
D.bwn=new A.ac(B.uw,26,B.cW,null,null,null)
D.bx6=new A.ac(B.Xh,16,null,null,null,null)
D.bxN=new A.ac(B.rQ,24,B.c,null,null,null)
D.bxS=new A.ac(B.KD,20,B.qu,null,null,null)
D.bxX=new A.ac(B.DW,null,B.bU,null,null,null)
D.by3=new A.ac(B.je,18,B.c,null,null,null)
D.bzp=new A.ac(B.e4,16,B.ak,null,null,null)
D.bzA=new A.ac(D.WO,20,B.aR,null,null,null)
D.aih=new A.ac(B.hs,20,null,null,null,null)
D.bA5=new A.ac(B.cu,18,D.ju,null,null,null)
D.bAn=new A.ac(B.wY,28,B.c,null,null,null)
D.bAv=new A.ac(B.Ku,null,B.fH,null,null,null)
D.bAP=new A.ac(B.wY,24,B.c,null,null,null)
D.bBf=new A.ac(B.rQ,null,B.aR,null,null,null)
D.bBg=new A.ac(B.jC,20,B.cW,null,null,null)
D.bBy=new A.ac(B.DZ,16,null,null,null,null)
D.bD5=new A.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.et,!0,null,null,null,null)
D.cP3=w([B.bo,B.aR,B.eT,B.aW],x.O)
D.bDR=new A.a8(B.ax,B.aE,B.w,D.cP3,null,null)
D.b4Y=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.b9m=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cyf=w([D.b4Y,D.b9m],x.O)
D.bE1=new A.a8(B.b4,B.bd,B.w,D.cyf,null,null)
D.cK0=w([B.eN,B.ff,B.eT],x.O)
D.bE4=new A.a8(B.ax,B.aE,B.w,D.cK0,null,null)
D.aa1=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZe=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cA6=w([D.aa1,D.aZe],x.O)
D.bEA=new A.a8(B.b4,B.bd,B.w,D.cA6,null,null)
D.b0Z=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.cON=w([D.b0Z,D.aa1],x.O)
D.ajc=new A.a8(B.ax,B.aE,B.w,D.cON,null,null)
D.a9b=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b2P=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cJg=w([D.a9b,D.b2P],x.O)
D.bFp=new A.a8(B.a_,B.a7,B.w,D.cJg,null,null)
D.cUA=w([B.bR,B.mn],x.O)
D.bFr=new A.a8(B.b4,B.bd,B.w,D.cUA,null,null)
D.b4U=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b6i=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cVm=w([D.b4U,D.ju,D.ju,D.b6i],x.O)
D.cXl=w([0,0.07,0.9,1],x.F)
D.bFT=new A.a8(B.a_,B.a7,B.w,D.cVm,D.cXl,null)
D.bG2=new A.a8(B.ax,B.aE,B.w,B.O6,null,null)
D.cUc=w([B.aW,B.aR,B.bU],x.O)
D.bGZ=new A.a8(B.ax,B.aE,B.w,D.cUc,null,null)
D.c1e=w([B.bo,B.aW,B.eN],x.O)
D.c1k=w([B.bD,B.az,B.jS],x.O)
D.c1m=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b3N=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c7r=w([D.b3N,E.a9M],x.O)
D.dIr=new A.v(1,2)
D.ec5=new A.cI(B.aV,D.dIr,3)
D.aoZ=w([D.ec5],x.A)
D.ceF=w([B.fX,B.cf,B.fo],x.O)
D.chh=w([B.bP,B.bA,B.bh],x.O)
D.cv3=w([B.bU,B.bf],x.O)
D.aYH=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b4M=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cvH=w([D.aYH,D.b4M],x.O)
D.b0G=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cx5=w([D.b0G,B.dc],x.O)
D.cys=w([B.b9,B.iw,B.nN],x.O)
D.cyQ=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZa=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b2c=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cXi=w([D.a9b,D.aZa,D.b2c],x.O)
D.blm=new C.tv("leather","Leather",D.cXi,"vintage")
D.cFl=w([B.dH,B.IJ,E.a8I],x.O)
D.blt=new C.tv("midnight","Midnight",D.cFl,"starry")
D.cyt=w([B.fn,B.eL,B.km],x.O)
D.bls=new C.tv("forest","Forest",D.cyt,"story")
D.cYU=w([B.f5,B.fp,B.kN],x.O)
D.blp=new C.tv("burgundy","Burgundy",D.cYU,"royal")
D.cgT=w([B.az,B.q0,B.n1],x.O)
D.blq=new C.tv("royal","Royal",D.cgT,"royal")
D.cAG=w([B.bA,B.d3,L.CU],x.O)
D.bln=new C.tv("charcoal","Charcoal",D.cAG,"geo")
D.cXo=w([B.cl,B.dM,B.vY],x.O)
D.blr=new C.tv("sunset","Sunset",D.cXo,"sunset")
D.cXW=w([B.iw,B.CQ,B.IB],x.O)
D.blo=new C.tv("ocean","Ocean",D.cXW,"band")
D.xr=w([D.blm,D.blt,D.bls,D.blp,D.blq,D.bln,D.blr,D.blo],A.az("M<tv>"))
D.cBy=w([B.ai,B.aI,B.M],x.O)
D.cCE=w([B.fp,B.eL,B.dH,B.hS,B.tY,B.cW,B.kO,B.fr,B.dC],x.O)
D.cCF=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ec6=new A.cI(B.dt,B.dG,8)
D.cCO=w([D.ec6],x.A)
D.cDM=w([B.cd,B.dM,B.le],x.O)
D.cEd=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cFh=w([B.cd,B.hl],x.O)
D.cH9=w([B.aM,B.z7,B.tR],x.O)
D.cHY=w([B.bJ,B.cM,B.dD,B.aM],x.O)
D.cIp=w([B.kl,B.cl,B.tU],x.O)
D.cIS=w([B.eN,B.cW],x.O)
D.cJl=w([B.dh,B.ha,B.hR],x.O)
D.cJw=w([B.b3,B.bf,B.dH],x.O)
D.cJY=w([B.eZ,B.dl,B.eL],x.O)
D.cKd=w([B.e9,B.dH,B.IJ],x.O)
D.cLq=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_2=w(["leather","linen","plain","stars","rays"],x.s)
D.bre=new A.a_(985219,"MaterialIcons",!1)
D.bqO=new A.a_(983781,"MaterialIcons",!1)
D.aru=w([B.afx,B.hJ,B.lV,B.hL,D.bre,B.Ef,B.p0,D.bqO,L.ah3,B.x_,B.p2,B.lU],A.az("M<a_>"))
D.a_7=w(["double","single","corners","none"],x.s)
D.cNV=w([B.fK,B.bu,B.fr],x.O)
D.cO7=w([],x.t)
D.AA=w([],x.u)
D.cQ8=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cSb=w([B.aZ,B.ha,B.hS],x.O)
D.cTf=w([B.cV,B.nQ,B.TT],x.O)
D.cTs=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dat=new C.le("construction","Construction","Jobsite & builds",B.E7)
D.daA=new C.le("house","Home Build","Houses & rooms",B.uq)
D.daq=new C.le("grocery","Grocery","Store & pantry",B.XQ)
D.dap=new C.le("calculator","Calculations","Math & estimates",B.E2)
D.day=new C.le("lumber","Materials","Lumber & supplies",B.L3)
D.dam=new C.le("kitchen","Kitchen","Remodel & meals",Q.agf)
D.bqM=new A.a_(983756,"MaterialIcons",!1)
D.dar=new C.le("landscape","Landscaping","Yard & garden",D.bqM)
D.dal=new C.le("plumbing","Plumbing","Pipes & water",B.uB)
D.daB=new C.le("electrical","Electrical","Wiring & power",B.he)
D.daj=new C.le("store","Retail Shop","Daily business",B.kv)
D.dak=new C.le("paint_remodel","Paint & Remodel","Colors & walls",Q.ag4)
D.bq6=new A.a_(983311,"MaterialIcons",!1)
D.dax=new C.le("roofing","Roofing","Roofs & exteriors",D.bq6)
D.bqZ=new A.a_(983986,"MaterialIcons",!1)
D.dai=new C.le("warehouse","Warehouse","Storage & stock",D.bqZ)
D.dav=new C.le("vehicles","Vehicles","Fleet & transport",B.Eg)
D.bnU=new A.a_(62785,"MaterialIcons",!1)
D.dao=new C.le("farm","Farm","Crops & livestock",D.bnU)
D.dan=new C.le("restaurant","Restaurant","Food & catering",B.rW)
D.dau=new C.le("tools","Tools","Workshop gear",B.Ee)
D.daz=new C.le("wallet","Cash & Wallet","Quick spending",B.jC)
D.bp6=new A.a_(63395,"MaterialIcons",!1)
D.daw=new C.le("concrete","Concrete","Foundation work",D.bp6)
D.das=new C.le("blueprint","Blueprint","Plans & design",A9.afC)
D.a_w=w([D.dat,D.daA,D.daq,D.dap,D.day,D.dam,D.dar,D.dal,D.daB,D.daj,D.dak,D.dax,D.dai,D.dav,D.dao,D.dan,D.dau,D.daz,D.daw,D.das],A.az("M<le>"))
D.cTU=w([B.bl,B.bu],x.O)
D.cUB=w([B.hQ,B.n5,B.dw],x.O)
D.a_A=w(["top","middle","bottom"],x.s)
D.cWL=w([B.cH,B.bf,B.dH],x.O)
D.cXd=w([B.br,B.dl,B.eL],x.O)
D.cYP=w([B.bP,B.ai],x.O)
D.cYQ=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dGz={top:0,middle:1,bottom:2}
D.d0Y=new A.bt(D.dGz,["Top","Middle","Bottom"],x.w)
D.dGf={double:0,single:1,corners:2,none:3}
D.d12=new A.bt(D.dGf,["Double line","One line","Corners","None"],x.w)
D.dHh={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d2q=new A.bt(D.dHh,["Leather","Linen","Smooth","Stars","Light rays"],x.w)
D.d2B=new A.bt(B.il,[],A.az("bt<G,+(n,n)>"))
D.dGs={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AM=new A.bt(D.dGs,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("bt<n,G>"))
D.d4D=new F.L3(32,null)
D.d4E=new F.L3(40,null)
D.d4F=new F.L3(46,null)
D.aAc=new C.aph(null)
D.dJ8=new A.v(8,14)
D.eIE=new A.w("Write a new book",null,B.jp,null,B.L,null,null,null,null,null,null,null)
D.dL5=new A.B(B.lR,D.eIE,null)
D.ahs=new A.ac(B.hH,18,B.c,null,null,null)
D.eCy=new A.w("Add",null,B.mS,null,null,null,null,null,null,null,null,null)
D.cIc=w([D.ahs,B.v3,D.eCy],x.p)
D.eaq=new A.cD(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cIc,null)
D.dLp=new A.B(B.rA,D.eaq,null)
D.dLq=new A.B(E.ac3,V.SP,null)
D.ewX=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFo=new A.w("New Project",null,D.ewX,null,null,null,null,null,null,null,null,null)
D.cLN=w([D.ahs,B.aa,D.eFo],x.p)
D.eat=new A.cD(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cLN,null)
D.dLA=new A.B(B.iD,D.eat,null)
D.aXL=new A.f9(2.2,null,null,null,null,B.cW,null,null,null,null)
D.eeH=new A.a7(22,22,D.aXL,null)
D.aW5=new A.cw(B.B,null,null,D.eeH,null)
D.dLY=new A.B(B.UN,D.aW5,null)
D.dMw=new A.iD(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dMz=new A.iD(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aB7=new A.iD(1,0.9607843137254902,0.48627450980392156,0)
D.Gh=new A.iD(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.xW=new A.iD(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dMF=new A.iD(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.f2x=new C.bcX(null)
D.bb3=new A.lS(D.f2x,null,B.as,null,null)
D.aEL=new A.cF(0,0,0,0,null,null,D.bb3,null)
D.e0y=new A.T(-42,42)
D.e6q=new A.d7([0,0,1,1])
D.aFU=new A.af(0,0,520,160)
D.e9J=new A.b4(B.pJ,B.V)
D.eTv=new A.w("Let the AI write it from your tree",null,B.kb,null,B.L,null,null,null,null,null,null,null)
D.blN=new A.dp(1,B.ck,D.eTv,null)
D.cFg=w([E.Yh,B.aa,D.blN],x.p)
D.ea8=new A.cD(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cFg,null)
D.eCf=new A.w("Save member",null,B.cb,null,null,null,null,null,null,null,null,null)
D.cSp=w([D.aih,B.aa,D.eCf],x.p)
D.eag=new A.cD(B.b_,B.b5,B.j,B.m,null,B.p,null,0,D.cSp,null)
D.bvi=new A.ac(B.hK,14,B.aW,null,null,null)
D.erf=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFO=new A.w("Cashier",null,D.erf,null,null,null,null,null,null,null,null,null)
D.cMf=w([D.bvi,B.bp,D.eFO],x.p)
D.eai=new A.cD(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cMf,null)
D.eCg=new A.w("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bkx=new A.bG(1,B.bq,D.eCg,null)
D.cxZ=w([D.ahQ,B.av,D.bkx],x.p)
D.eaj=new A.cD(B.b_,B.e,B.j,B.m,null,B.p,null,0,D.cxZ,null)
D.eds=new A.ap(16,40)
D.edx=new A.ap(22,64)
D.edD=new A.ap(280,88)
D.een=new A.a7(30,null,null,null)
D.efE=new A.hI(2,12,12,1.05,null)
D.eFu=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.egl=new A.aX(D.eFu,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eFJ=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aHN=new A.aX(D.eFJ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eN6=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.egQ=new A.aX(D.eN6,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWy=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.egV=new A.aX(D.eWy,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eHu=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eh1=new A.aX(D.eHu,null,null,null,null,null,null,null,null,null,null,null,null,B.fC,!1,null,null,null,B.q,null)
D.eU5=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aHR=new A.aX(D.eU5,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eCR=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ehr=new A.aX(D.eCR,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eX8=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eia=new A.aX(D.eX8,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSy=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eiy=new A.aX(D.eSy,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWC=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eiB=new A.aX(D.eWC,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOB=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eiD=new A.aX(D.eOB,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eJa=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eiE=new A.aX(D.eJa,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eJb=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ejE=new A.aX(D.eJb,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eFw=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.ejW=new A.aX(D.eFw,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eHe=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eke=new A.aX(D.eHe,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eO7=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eku=new A.aX(D.eO7,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eJT=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.ekv=new A.aX(D.eJT,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eno=new A.F(!0,D.ju,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enM=new A.F(!0,D.ju,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eo8=new A.F(!0,E.iQ,null,null,null,null,19,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,D.aoZ,null,null,null)
D.eol=new A.qY(!0,B.qC,null,null,null,null,B.dm,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoB=new A.F(!0,D.ju,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ep8=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3O=new A.qY(!0,B.Pn,null,null,null,null,B.dm,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eq6=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqw=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erZ=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.es2=new A.F(!0,G.iR,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etg=new A.F(!0,B.M,null,null,null,null,13,B.a1,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etU=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eux=new A.F(!0,B.bU,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euC=new A.F(!0,B.bR,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euY=new A.F(!0,D.IP,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ev6=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ew2=new A.F(!0,B.cW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewu=new A.F(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewV=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyl=new A.F(!0,B.ai,null,null,null,null,11.5,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyt=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJU=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4h=new A.F(!0,B.ai,null,null,null,null,12,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA3=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAp=new A.F(!0,G.iR,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAv=new A.F(!0,G.iR,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBd=new A.w("Themes",null,B.pv,null,null,null,null,null,null,null,null,null)
D.eBL=new A.w("Add Item",null,B.cb,null,null,null,null,null,null,null,null,null)
D.erK=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC5=new A.w("Debt receipt",null,D.erK,null,B.L,null,null,null,null,null,null,null)
D.aJQ=new A.F(!0,B.ai,null,null,null,null,11,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCm=new A.w("Person who owes",null,D.aJQ,null,null,null,null,null,null,null,null,null)
D.eDi=new A.w("Notes",null,B.a3U,null,null,null,null,null,null,null,null,null)
D.eDH=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eqO=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDL=new A.w("Share",null,D.eqO,null,null,null,null,null,null,null,null,null)
D.eEA=new A.w("Move your family trees",null,D.aJU,null,null,null,null,null,null,null,null,null)
D.eF7=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eFI=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eGQ=new A.w("Remove this book?",null,B.hi,null,null,null,null,null,null,null,null,null)
D.aKk=new A.w("Download",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eHQ=new A.w("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eJ6=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eK7=new A.w("Ribbon bookmark",null,B.ir,null,null,null,null,null,null,null,null,null)
D.eyf=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKy=new A.w("NGMY.ORG",null,D.eyf,null,B.L,null,null,null,null,null,null,null)
D.eLI=new A.w("Scan family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.euR=new A.F(!0,B.c,null,null,null,null,13,B.a1,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMp=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.euR,null,B.L,null,null,null,null,null,null,null)
D.eNy=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.eNE=new A.w("Thumbnail",null,B.pv,null,null,null,null,null,null,null,null,null)
D.eOd=new A.w("Save the cover",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eOC=new A.w("Your photos",null,B.pv,null,null,null,null,null,null,null,null,null)
D.eOR=new A.w("Create Project",null,B.cb,null,null,null,null,null,null,null,null,null)
D.ePh=new A.w("Design your cover",null,A0.GU,null,null,null,null,null,null,null,null,null)
D.ePn=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.ePq=new A.w("PICTURE",null,H.ma,null,null,null,null,null,null,null,null,null)
D.ePM=new A.w("Paid",null,B.cb,null,null,null,null,null,null,null,null,null)
D.ePO=new A.w("You can undo it right after.",null,Z.a3Z,null,null,null,null,null,null,null,null,null)
D.eQf=new A.w("Print",null,B.ty,null,null,null,null,null,null,null,null,null)
D.eQz=new A.w("Amount owed",null,D.aJQ,null,null,null,null,null,null,null,null,null)
D.eQM=new A.w("Got it",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eRj=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.eRm=new A.w("Add to budget",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eRL=new A.w("Debtor signature",null,B.a3U,null,null,null,null,null,null,null,null,null)
D.esk=new A.F(!0,null,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRU=new A.w("Change icon",null,D.esk,null,null,null,null,null,null,null,null,null)
D.eSX=new A.w("Family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eTl=new A.w("Download",null,B.ty,null,null,null,null,null,null,null,null,null)
D.eTp=new A.w("Change",null,B.pv,null,null,null,null,null,null,null,null,null)
D.eUb=new A.w("Clear all",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eUe=new A.w("WHAT SHOULD IT CHANGE?",null,H.ma,null,null,null,null,null,null,null,null,null)
D.eUN=new A.w("COLOUR",null,H.ma,null,null,null,null,null,null,null,null,null)
D.eUZ=new A.w("Do it",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eV1=new A.w("Create Tree",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eVX=new A.w("Create Family Tree",null,B.eB,null,null,null,null,null,null,null,null,null)
D.emr=new A.F(!0,E.iQ,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWb=new A.w("Write the first page myself",null,D.emr,null,null,null,null,null,null,null,null,null)
D.eWJ=new A.w("Create Project",null,E.aJD,null,null,null,null,null,null,null,null,null)
D.f_R=new C.a8T(1,"header")
D.a4Z=new C.a8T(2,"projects")
D.f_S=new C.a8T(3,"cashier")
D.a5_=new C.a8T(4,"familyTree")
D.faq=new C.cpB(0,"start")
D.far=new C.cpC(0,"start")
D.f_Y=new C.Wb(null)
D.f0X=new C.WE(null)
D.d2y=new A.bt(B.il,[],A.az("bt<n,Ec>"))
D.cOr=w([],x.E)
D.cOs=w([],x.M)
D.f1s=new C.bae(D.d2y,D.cOr,D.cOs,0,0,null,null)
D.f3b=new C.Y1(null)
D.a5G=new C.aG7(0,"projects")
D.aN7=new C.aG7(1,"cashier")
D.f8o=new C.aG7(2,"familyTree")})()};
(a=>{a["y0PYE69vQ+0hVi2Zngw4715lwqU="]=a.current})($__dart_deferred_initializers__);