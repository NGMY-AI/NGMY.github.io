((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A6,Q,X,A7,K,G,F,O,A8,S,A9,Aa,Y,Ab,Ac,R,L,Z,A_,Ad,A0,A1,A2,Ae,Af,A3,Ag,Ah,Ai,A4,Aj,Ak,A5,P,Al,T,Am,U,E,H,An,I,M,V,C={
bCA(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCA=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vn(null,""),$async$bCA)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n6(b1)
s=A.c3(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.G(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qX(t,a1,B.hF,"book",F.Fx),$async$bCA)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=G.Qv(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.L4(l)?y.l:y.i)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cy
g=a8.h(0,"title")
a9=B.a.i(A.u(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.u(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=G.a2i(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCA,v)},
agQ(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agQ=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vn(null,""),$async$agQ)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n6(b6)
s=x.S
r=A.d0(c1,0,A.dB(4,"count",s),A.S(c1).c)
q=G.a25(new A.M(r,new C.fAU(),r.$ti.k("M<ak.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fAT(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agQ)
case 6:l=c5
k=G.Qv(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoh(s,D.dsP,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.V("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.du(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.G(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agQ)
case 10:l=c5
k=l==null?null:G.Qv(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.u(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.u(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.l4(a5,a2.k("l4<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a4(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.k.O(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.u(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.u(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cE(new A.bc(h,s),new C.fAV(),s.k("J.E"),p)
p=G.a25(A.ph(p,3,A.a5(p).k("J.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.C(new A.cr(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(G.a2i(s,b9),$async$agQ)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoh(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agQ,v)},
hqi(d,e,f){return A.cd(null,B.w.j(0.65),!1,null,new C.fKb(e,f),d,null,!0,!0,x.g2)},
aoh:function aoh(d,e,f){this.a=d
this.b=e
this.c=f},
fAU:function fAU(){},
fAT:function fAT(d){this.a=d},
fAV:function fAV(){},
fKb:function fKb(d,e){this.a=d
this.b=e},
bAs(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAs=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.foZ())){u=null
w=1
break}t=B.d.d8(b1,new C.fp_())
s=$.X()
r=new A.qp()
q=A.B8(r,D.aNg)
p=A.N()
p.r=B.c.gp(0)
q.b1(D.aNg,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ag
o.d=B.bV
o.e=B.hr
n=new C.fp4(t)
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
s=$.X()
p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aS(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aS(a3,o)}w=4
return A.b(r.or().zq(520,160),$async$bAs)
case 4:w=3
return A.b(b3.hu(B.h4),$async$bAs)
case 3:b0=b3
u=b0==null?null:J.eV(B.dC.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAs,v)},
fyA(d){return C.i40(d)},
i40(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fyA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bgn()
n=d.x!=null&&d.z5(null).length===0
if(d.x!=null)t=n?D.zF:D.IB
else t=d.gTO()?D.IB:D.aIg
w=3
return A.b(C.bAs(d.ax),$async$fyA)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amZ(s)
r=A.a4f(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aIg}else{p.c=C.wP(q,!0)
p.b=n?D.zF:D.IB}r.a36(A.fUA(new C.fyC(p,d,new C.fyD(),t,n,o),null,D.byx,B.wB))
u=r.js(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyA,v)},
fFd(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fFd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fyA(d),$async$fFd)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aM(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=Ac.GF(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFd,v)},
foZ:function foZ(){},
fp_:function fp_(){},
fp4:function fp4(d){this.a=d},
fyD:function fyD(){},
fyC:function fyC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyB:function fyB(){},
fKD(d,e){var w=0,v=A.j(x.H)
var $async$fKD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cd(null,B.w.j(0.55),!0,null,new C.fKH(new A.cw(null,x.g),e),d,null,!0,!0,x.H),$async$fKD)
case 2:return A.h(null,v)}})
return A.i($async$fKD,v)},
bD2(d,e,f,g){return C.ibu(d,e,f,g)},
ibu(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bD2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.f3h)
w=1
break}w=3
return A.b(A.cd(null,null,!0,null,new C.fKz(g,r,f),d,null,!0,!0,x.H),$async$bD2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bD2,v)},
fKI(d,e){var w=0,v=A.j(x.H)
var $async$fKI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cd(null,null,!0,null,new C.fKL(new A.cw(null,x.g),e),d,null,!0,!0,x.H),$async$fKI)
case 2:return A.h(null,v)}})
return A.i($async$fKI,v)},
aYt:function aYt(d,e){this.c=d
this.a=e},
c3N:function c3N(){},
baA:function baA(d,e){this.b=d
this.a=e},
fKH:function fKH(d,e){this.a=d
this.b=e},
fKE:function fKE(d){this.a=d},
fKF:function fKF(d,e,f){this.a=d
this.b=e
this.c=f},
fKG:function fKG(d,e){this.a=d
this.b=e},
fKz:function fKz(d,e,f){this.a=d
this.b=e
this.c=f},
fKx:function fKx(d){this.a=d},
fKy:function fKy(d,e,f){this.a=d
this.b=e
this.c=f},
fKL:function fKL(d,e){this.a=d
this.b=e},
fKJ:function fKJ(d){this.a=d},
fKK:function fKK(d,e,f){this.a=d
this.b=e
this.c=f},
fti(d,e){var w=0,v=A.j(x.y),u,t
var $async$fti=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1R(d),$async$fti)
case 3:t=g
J.nu(t,new C.ftj(e))
u=A.ahu(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fti,v)},
ftj:function ftj(d){this.a=d},
aot:function aot(d,e,f){this.c=d
this.d=e
this.a=f},
aCM:function aCM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHu:function dHu(d,e){this.a=d
this.b=e},
dHx:function dHx(d,e,f){this.a=d
this.b=e
this.c=f},
dHw:function dHw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHv:function dHv(d,e){this.a=d
this.b=e},
dHy:function dHy(d,e){this.a=d
this.b=e},
dHs:function dHs(){},
dHt:function dHt(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dHr:function dHr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dHc:function dHc(d){this.a=d},
dHd:function dHd(d,e,f){this.a=d
this.b=e
this.c=f},
dHe:function dHe(d,e){this.a=d
this.b=e},
dHb:function dHb(d){this.a=d},
dHj:function dHj(d,e){this.a=d
this.b=e},
dHa:function dHa(d){this.a=d},
dHk:function dHk(d,e,f){this.a=d
this.b=e
this.c=f},
dHl:function dHl(d,e,f){this.a=d
this.b=e
this.c=f},
dH9:function dH9(d,e){this.a=d
this.b=e},
dHm:function dHm(d,e,f){this.a=d
this.b=e
this.c=f},
dH8:function dH8(d,e){this.a=d
this.b=e},
dHn:function dHn(d,e){this.a=d
this.b=e},
dH7:function dH7(d){this.a=d},
dHo:function dHo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dH5:function dH5(){},
dH_:function dH_(d){this.a=d},
dH0:function dH0(d){this.a=d},
dH6:function dH6(d,e){this.a=d
this.b=e},
dHp:function dHp(d,e){this.a=d
this.b=e},
dH4:function dH4(d){this.a=d},
dHq:function dHq(d){this.a=d},
dH3:function dH3(){},
dHf:function dHf(d,e){this.a=d
this.b=e},
dH2:function dH2(d){this.a=d},
dHg:function dHg(d,e,f){this.a=d
this.b=e
this.c=f},
dH1:function dH1(d,e){this.a=d
this.b=e},
dGZ:function dGZ(d,e){this.a=d
this.b=e},
dHh:function dHh(d){this.a=d},
dHi:function dHi(d,e,f){this.a=d
this.b=e
this.c=f},
dHM:function dHM(){},
dHN:function dHN(d,e){this.a=d
this.b=e},
dHK:function dHK(d){this.a=d},
dHL:function dHL(d){this.a=d},
dHG:function dHG(d,e){this.a=d
this.b=e},
dHH:function dHH(d){this.a=d},
dHz:function dHz(d,e,f){this.a=d
this.b=e
this.c=f},
dHA:function dHA(d,e,f){this.a=d
this.b=e
this.c=f},
dHB:function dHB(d,e,f){this.a=d
this.b=e
this.c=f},
dHC:function dHC(d,e,f){this.a=d
this.b=e
this.c=f},
dHD:function dHD(d,e,f){this.a=d
this.b=e
this.c=f},
dHE:function dHE(d,e,f){this.a=d
this.b=e
this.c=f},
dHF:function dHF(d,e,f){this.a=d
this.b=e
this.c=f},
dHO:function dHO(){},
dHP:function dHP(){},
dHQ:function dHQ(){},
dHR:function dHR(d){this.a=d},
dHI:function dHI(d,e){this.a=d
this.b=e},
hmn(d){return B.d.dM(D.a2v,new C.ftX(d),new C.ftY())},
uk:function uk(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ftX:function ftX(d){this.a=d},
ftY:function ftY(){},
akz:function akz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aUd:function aUd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SM:function SM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beb:function beb(){this.d=$
this.c=this.a=null},
d7S:function d7S(d,e){this.a=d
this.b=e},
d7Q:function d7Q(d,e){this.a=d
this.b=e},
d7R:function d7R(){},
d7T:function d7T(d,e){this.a=d
this.b=e},
h73(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.ng(t,w,v,u==null?new A.T(Date.now(),0,!1):u)},
KQ(d,e){return C.i2E(d,e)},
i2E(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$KQ)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.S.aM(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.da(p,x.f)
o=A.cE(o,new C.fwc(),o.$ti.k("J.E"),x.B)
n=A.a5(o).k("Z<J.E>")
o=A.C(new A.Z(o,new C.fwd(),n),n.k("J.E"))
B.d.aW(o,new C.fwe())
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
return A.i($async$KQ,v)},
AY(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$AY)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fJh(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AY,v)},
aQk(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KQ(d,e),$async$aQk)
case 2:u=h
t=J.cB(u)
s=t.bf(u,new C.fRB(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AY(d,e,u),$async$aQk)
case 3:return A.h(null,v)}})
return A.i($async$aQk,v)},
bAU(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KQ(d,e),$async$bAU)
case 2:u=h
J.nu(u,new C.fta(f))
w=3
return A.b(C.AY(d,e,u),$async$bAU)
case 3:return A.h(null,v)}})
return A.i($async$bAU,v)},
bB6(d,e){return C.i2D(d,e)},
i2D(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bB6=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bB6)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Nd
w=1
break}p=B.S.aM(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.CP.ai(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a44,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a3u,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a3q,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.q(D.cXq,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.HE(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Nd
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Nd
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bB6,v)},
Rz(d,e,f){return C.ib0(d,e,f)},
ib0(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rz=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Rz)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ag(),null)),$async$Rz)
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
return A.i($async$Rz,v)},
R2(d,e){return C.i2F(d,e)},
i2F(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$R2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$R2)
case 7:r=g
q=r.ti("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KQ(d,e),$async$R2)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lv(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$R2)
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
return A.i($async$R2,v)},
ag9(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ag9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R2(d,e),$async$ag9)
case 3:s=g
r=J.a4(s)
if(r.gK(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gK(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$ag9)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ag9)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ag9,v)},
a2u(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2u=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.R2(d,e),$async$a2u)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.az(),$async$a2u)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2u)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2u)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2u)
case 6:return A.h(null,v)}})
return A.i($async$a2u,v)},
ng:function ng(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwc:function fwc(){},
fwd:function fwd(){},
fwe:function fwe(){},
fJh:function fJh(){},
fRB:function fRB(d){this.a=d},
fta:function fta(d){this.a=d},
HE:function HE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bNW:function bNW(d){this.a=d},
ibj(d,e,f,g,h,i,j){return A.a3(d,!1).cg(A.e_(new C.fJQ(j,i,f,e,h,g),!0,null,x.H))},
R_(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$R_=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R2(h,g),$async$R_)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.R(D.aPn)
u=!1
w=1
break}w=4
return A.b(C.hqi(d,f,e),$async$R_)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ag9(h,g),$async$R_)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.ng(""+(q+n),l,B.a.i(m.b),new A.T(Date.now(),0,!1)))}w=6
return A.b(C.AY(h,r,p),$async$R_)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rz(h,r,new C.HE("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$R_)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$R_,v)},
fJQ:function fJQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ze:function Ze(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azQ:function azQ(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d8x:function d8x(d){this.a=d},
d8w:function d8w(d,e){this.a=d
this.b=e},
d8l:function d8l(d,e){this.a=d
this.b=e},
d8i:function d8i(d,e){this.a=d
this.b=e},
d7U:function d7U(d){this.a=d},
d7V:function d7V(d,e){this.a=d
this.b=e},
d8m:function d8m(d){this.a=d},
d82:function d82(d){this.a=d},
d80:function d80(d){this.a=d},
d81:function d81(d){this.a=d},
d83:function d83(d){this.a=d},
d8j:function d8j(d){this.a=d},
d8k:function d8k(){},
d7Z:function d7Z(d){this.a=d},
d8_:function d8_(d,e){this.a=d
this.b=e},
d84:function d84(d){this.a=d},
d85:function d85(d,e){this.a=d
this.b=e},
d8v:function d8v(d){this.a=d},
d8u:function d8u(d,e){this.a=d
this.b=e},
d8t:function d8t(d){this.a=d},
d8f:function d8f(d){this.a=d},
d8e:function d8e(d){this.a=d},
d8g:function d8g(d){this.a=d},
d7W:function d7W(d,e){this.a=d
this.b=e},
d8h:function d8h(d,e){this.a=d
this.b=e},
d88:function d88(d){this.a=d},
d89:function d89(d){this.a=d},
d87:function d87(){},
d8a:function d8a(d){this.a=d},
d8b:function d8b(d){this.a=d},
d8c:function d8c(d,e){this.a=d
this.b=e},
d8d:function d8d(d,e,f){this.a=d
this.b=e
this.c=f},
d86:function d86(d,e){this.a=d
this.b=e},
d8o:function d8o(d){this.a=d},
d8n:function d8n(){},
d8p:function d8p(d){this.a=d},
d8q:function d8q(d){this.a=d},
d8r:function d8r(d){this.a=d},
d8s:function d8s(d,e){this.a=d
this.b=e},
d7X:function d7X(d){this.a=d},
d7Y:function d7Y(d){this.a=d},
Zi:function Zi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bew:function bew(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dah:function dah(d){this.a=d},
dai:function dai(d){this.a=d},
dag:function dag(d){this.a=d},
daj:function daj(d){this.a=d},
daf:function daf(d){this.a=d},
dak:function dak(d){this.a=d},
dae:function dae(d){this.a=d},
dal:function dal(d,e){this.a=d
this.b=e},
dad:function dad(d,e){this.a=d
this.b=e},
dam:function dam(d,e){this.a=d
this.b=e},
Zg:function Zg(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aez:function aez(d,e,f){this.a=d
this.b=e
this.c=f},
azR:function azR(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d8M:function d8M(d,e){this.a=d
this.b=e},
d8L:function d8L(d,e){this.a=d
this.b=e},
d8Q:function d8Q(d){this.a=d},
d8P:function d8P(d,e){this.a=d
this.b=e},
d8N:function d8N(d){this.a=d},
d8O:function d8O(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8S:function d8S(d){this.a=d},
d8K:function d8K(d,e){this.a=d
this.b=e},
d8J:function d8J(d,e){this.a=d
this.b=e},
JX:function JX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yx:function Yx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cHq:function cHq(d){this.a=d},
cHr:function cHr(){},
cHs:function cHs(d){this.a=d},
bbM:function bbM(d,e,f){this.b=d
this.c=e
this.a=f},
bbD:function bbD(d,e){this.b=d
this.a=e},
ul:function ul(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YP:function YP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbK:function bbK(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d_R:function d_R(d,e,f){this.a=d
this.b=e
this.c=f},
d_Q:function d_Q(d,e){this.a=d
this.b=e},
d0f:function d0f(d){this.a=d},
d02:function d02(){},
d0g:function d0g(d){this.a=d},
d01:function d01(){},
d0h:function d0h(d,e){this.a=d
this.b=e},
d00:function d00(d,e){this.a=d
this.b=e},
d0i:function d0i(d,e){this.a=d
this.b=e},
d0_:function d0_(d,e){this.a=d
this.b=e},
d0j:function d0j(d){this.a=d},
d_Z:function d_Z(){},
d0k:function d0k(d,e){this.a=d
this.b=e},
d_Y:function d_Y(d,e){this.a=d
this.b=e},
d0l:function d0l(d){this.a=d},
d0a:function d0a(d,e){this.a=d
this.b=e},
d0m:function d0m(d){this.a=d},
d0n:function d0n(d){this.a=d},
d0p:function d0p(d){this.a=d},
d0q:function d0q(d){this.a=d},
d09:function d09(d,e){this.a=d
this.b=e},
d0r:function d0r(d,e){this.a=d
this.b=e},
aGL:function aGL(d){this.a=d},
bgZ:function bgZ(d){this.a=d},
b9Z:function b9Z(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hQj(d,e,f,g,h){var w,v,u,t,s,r=e.c,q=new C.fba(e,r,f),p=new C.fbb(r),o=q.$3(0,6,12),n=p.$3(26,12,32),m=e.e,l=A.ar(m,B.w,0.25)
l.toString
w=e.b
d.yB(o,n,l,w)
d.di(q.$3(0,14,0),q.$3(0,46,0),13.5*r,m,8)
d.yB(q.$3(0,36,12.5),p.$3(27,5,3),e.f,w)
d.yB(q.$3(0,28,12.5),p.$3(27,3,3),B.w,w)
o=e.x
v=o&&h?Math.sin(g*5)*6:0
for(n=4*r,l=e.d,u=0;u<2;++u){t=I.iS[u]
s=t*17
d.yB(q.$3(s,32,5),p.$3(6,22,8),m,w)
d.eo(q.$3(s,20+(t>0?v:0),13),n,l,3,5)}d.eo(q.$3(0,58,0),12*r,l,4,8)
m=e.w
if(m!=null){d.eo(q.$3(0,63,-1),12.8*r,m,3,7)
d.yB(q.$3(0,70,-1),p.$3(10,7,10),m,w)}else d.eo(q.$3(0,62,-3),12.4*r,e.r,3,7)
for(m=1.7*r,u=0;u<2;++u)d.eo(q.$3(I.iS[u]*4.4,59,10.6),m,B.kz,2,4)
d.yB(q.$3(0,53.5,11),p.$3(5,1.2,1.2),I.aei,w)
if(o){d.eo(q.$3(0,50,7),8*r,B.ij,3,6)
d.di(q.$3(0,68,0),q.$3(0,75,0),11*r,D.e0,8)
d.di(q.$3(26,0,16),q.$3(26,78,16),2*r,B.tB,5)
d.eo(q.$3(26,79,16),n,D.e0,3,5)}},
i0t(){var w,v,u,t,s,r,q,p,o,n,m,l,k=A.a([],x.E),j=new E.fe(k)
j.f=0
j.zf(D.h15,D.fRd,D.fRc,D.h14,D.bnW,H.dZ)
j.f=1
for(w=0;w<5;++w){v=D.d_u[w]
u=v.a
t=v.b
s=v.c
v=u-s
r=t-s
q=u+s
p=t+s
j.zf(new E.q(v,0.3,r),new E.q(q,0.3,r),new E.q(q,0.3,p),new E.q(v,0.3,p),D.baL,H.dZ)}j.di(H.aUR,H.aUn,150,D.bie,24)
j.f=2
for(w=0;w<5;++w){v=D.cNG[w]
u=v.a
t=v.b
o=Math.atan2(-u,-t)
j.di(new E.q(u,0,t),new E.q(u,56,t),62,D.bi5,14)
j.qF(new E.q(u,54,t),new E.q(u,138,t),82,D.bjG,3,14)
v=E.t2(new E.q(0,0,61),o)
j.yB(new E.q(u+v.a+0,0+v.b+22,t+v.c+0),D.fR8,D.iI,o)}j.qF(D.fSz,D.fSB,46,D.b9E,34,12)
for(n=0;n<6;++n){m=n*3.141592653589793/3
j.qF(D.fSA,new E.q(430+Math.cos(m)*110,205,250+Math.sin(m)*110),12,D.bdz,7,6)
j.eo(new E.q(430+Math.cos(m)*118,215,250+Math.sin(m)*118),48,D.bkB,3,6)}j.eo(D.fSC,62,D.bgk,3,7)
for(w=0;w<2;++w){v=D.clZ[w]
u=v.a
t=v.b
j.qF(new E.q(u,0,t),new E.q(u,28,t),13,D.bg5,10,10)
j.di(new E.q(u,28,t),new E.q(u,30,t),12,D.boj,10)}j.eo(D.h12,20,D.oI,4,8)
for(n=0;n<10;++n){m=n*3.141592653589793*2/10
j.eo(new E.q(Math.cos(m)*34,6,Math.sin(m)*34),8,B.bl,3,5)}for(n=0;n<3;++n){m=n*3.141592653589793*2/3+0.4
v=m+3.14
j.di(new E.q(Math.cos(m)*14,7,Math.sin(m)*14),new E.q(Math.cos(v)*14,12,Math.sin(v)*14),5,D.bgn,6)}s=new A.ez()
s.dr(5)
for(n=0;n<110;++n){m=s.am()*3.141592653589793*2
l=0.12+s.am()*1.1
j.aN(new E.q(Math.cos(m)*Math.cos(l)*1700,Math.sin(l)*1700,Math.sin(m)*Math.cos(l)*1700),new E.q(7,7,7),B.c)}return new E.rE(k,H.HU,H.wo,H.us,null,4000)},
PM:function PM(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fba:function fba(d,e,f){this.a=d
this.b=e
this.c=f},
fbb:function fbb(d){this.a=d},
akA:function akA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0v:function a0v(d,e){this.a=d
this.b=e},
akB:function akB(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=null
_.x=d
_.ay=_.ax=_.as=_.Q=_.z=_.y=0
_.ch=0.35
_.CW=-1
_.cx=0
_.cy=""
_.dx=_.db=!1
_.c=_.a=null},
bO2:function bO2(d){this.a=d},
bNZ:function bNZ(d,e){this.a=d
this.b=e},
bO1:function bO1(d){this.a=d},
bO0:function bO0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bO3:function bO3(d,e){this.a=d
this.b=e},
bO4:function bO4(){},
bO_:function bO_(d){this.a=d},
bNX:function bNX(d,e){this.a=d
this.b=e},
bNY:function bNY(d){this.a=d},
bml:function bml(d,e){this.b=d
this.a=e},
akD(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bOh(s)
s.bxJ(d)
return s},
Ge(d,e,f,g,h,i,j){var w,v=A.S(g).k("Z<1>")
v=A.de(new A.Z(g,new C.fif(f),v),v.k("J.E"))
w=A.C(v,A.a5(v).k("co.E"))
B.d.ea(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d0(w,0,A.dB(3,"count",x.S),A.S(w).c))
B.d.ea(v,d)
return new C.le(e,v,B.d.cD(v,f),h,i,"tree",j)},
icR(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.fRs(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jV(c4,c0)
t=A.C(c4,A.a5(c4).k("co.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jV(c4,c0)
r=A.C(c4,A.a5(c4).k("co.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jV(c4,c0)
q=A.C(c4,A.a5(c4).k("co.E"))
for(c4=w.length,v=A.S(t).k("Z<1>"),s=v.k("J.E"),p=A.S(w).k("Z<1>"),o=p.k("J.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.L)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.vU)g="father"
else g=h===D.q2?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.fRu(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Ge(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.fRv(i,m),p),o)
B.d.ea(d,c6)
c2.$2(b4,new C.le("True or false: "+h+" is the "+g+" of "+l+".",D.axh,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.le("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.axh,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.akq(m)
h=a0.length
if(h!==0){a1=a0[c6.ar(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.fRw(l,a0,c5),v),s)
e=a1.c
if(e===D.vU)e="son"
else e=e===D.q2?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Ge(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ex([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mg(a5,a5.r,f.k("mg<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.u(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Ge(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.S(a0),a2=e.k("lP<1>"),a3=new A.lP(a0,1,b3,a2),a3.vf(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gK(0),a2.k("bQ<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Ge(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aKN(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.fRx(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Ge(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.fRy(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.vU
if(e)a2=b7
else a2=f===D.q2?b8:b9
if(e)f=b7
else f=f===D.q2?b8:b9
c2.$2("grand",C.Ge(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.boH(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.ar(k)].b)
j=A.C(new A.Z(t,new C.fRz(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Ge(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cFG)
h=l+" was born in "+k
c2.$2("place",C.Ge(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.cVD)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Ge(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.L)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Ge(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jM(b1,b3,b3)
c2.$2("year",C.Ge(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
h0Q(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.akD(d),l=new A.ez()
l.dr(f)
w=C.icR(m,l,g)
for(v=new A.dt(w,w.r,w.e);v.C();)J.h5c(v.d,l)
v=A.a5(w).k("cr<1>")
u=A.C(new A.cr(w,v),v.k("J.E"))
B.d.ea(u,l)
t=A.a([],x.J)
s=A.aY(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fuu(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.L)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.r(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.r(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.avn,x.df)
B.d.ea(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hle(o,l))}}else if(!g&&v>3){o=C.hle(D.avn[l.ar(14)],l)
t[t.length-1-l.ar(3)]=o}return t},
hle(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.ea(w,e)
return new C.le(d.a,w,B.d.cD(w,v),d.d,d.e,d.f,d.r)},
hmZ(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="daughter",e=C.akD(a0),d=new A.ez()
d.dr(a1)
w=A.a([],x.gl)
v=A.aY(x.N)
u=A.C(e.b,x.P)
B.d.ea(u,d)
for(t=u.length,s=x.cc,r=x.s,q=0;q<u.length;u.length===t||(0,A.L)(u),++q){p=u[q]
o=B.a.i(p.b)
n=A.a([],r)
m=p.d
if(m==null)l=null
else{k=e.c
k===$&&A.c()
l=k.h(0,m)}if(l!=null){m=p.c
k=m===D.vU
if(k)j="son"
else j=m===D.q2?f:"child"
j=j[0]
if(k)m="son"
else m=m===D.q2?f:"child"
n.push(j.toUpperCase()+B.a.b2(m,1)+" of "+B.a.i(l.b))}i=e.akq(p)
if(i.length!==0){m=p.c
k=m===D.vU
if(k)j="father"
else j=m===D.q2?"mother":"parent"
j=j[0]
if(k)m="father"
else m=m===D.q2?"mother":"parent"
n.push(j.toUpperCase()+B.a.b2(m,1)+" of "+B.a.i(B.d.gH(i).b))}h=e.aKN(p)
if(h!=null)n.push("Married to "+B.a.i(h.b))
m=B.a.i(p.z)
if(m.length!==0)n.push("Works as "+m)
m=B.a.i(p.x)
if(m.length!==0)n.push("Born in "+m)
B.d.ea(n,d)
g=A.pN(new A.Z(n,new C.fx2(v),s))
if(g==null)continue
v.M(0,g)
w.push(new C.aX9(p.a,o,g))
if(w.length>=6)break}return w},
hpU(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akD(a0),d=new A.ez()
d.dr(a1)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=e.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(e.akq(q).length>=2)u.push(q)}B.d.ea(u,d)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){n=u[r]
m=e.akq(n)
l=A.S(m)
k=new A.lP(m,0,5,l.k("lP<1>"))
k.vf(m,0,5,l.c)
j=k.dB(0)
if(new A.M(j,new C.fIr(),A.S(j).k("M<1,H>")).fE(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.L)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
w.push(new C.asF("The children of "+m,"Tap them from the oldest to the youngest.",l,k))
if(w.length>=4)return w}u=x.S
g=A.U(u,x.h)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
J.ca(g.c4(0,e.aEh(q),new C.fIs()),q)}if(g.a>=2&&w.length<4){t=g.$ti.k("cr<1>")
f=A.C(new A.cr(g,t),t.k("J.E"))
B.d.fc(f)
v=A.a([],v)
for(u=A.d0(f,0,A.dB(5,"count",u),A.S(f).c),t=u.$ti,u=new A.bQ(u,u.gK(0),t.k("bQ<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=g.h(0,s==null?t.a(s):s)
s.toString
m=J.cB(s)
m.ea(s,d)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.L)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
w.push(new C.asF("Which generation comes first?","Tap them from the eldest generation to the youngest.",u,t))}return w},
fqV(d){return B.d.amu(D.axK,new C.fqW(d))},
i39(d){return A.pN(new A.Z(D.axK,new C.fx5(d),x.av))},
bOy(d){return C.hz8(d)},
hz8(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bOy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bOy)
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
return A.i($async$bOy,v)},
M9(d,e){return C.hz5(d,e)},
hz5(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$M9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$M9)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aq("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$M9)
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
return A.i($async$M9,v)},
bOx(d,e,f){return C.hz6(d,e,f)},
hz6(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bOx=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bOx)
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
return A.i($async$bOx,v)},
Ma(d,e,f,g){return C.hz7(d,e,f,g)},
hz7(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Ma=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Ma)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aq("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Ma)
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
return A.i($async$Ma,v)},
h3h(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
fTq(d,e,f,g){return new C.ajw(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hxe(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cx)
while(u.C())w.push(J.k(u.gT(u)))
u=x.N
w=A.d0(w,0,A.dB(4,"count",x.S),u).dB(0)
B.d.v(w,A.c3(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.k.O(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.k.O(u)
return C.fTq(w,v,B.o.D(u==null?20:u,5,60),t)},
h6g(d){var w,v,u,t,s,r,q=J.a4(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aW(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cx)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gT(q)
if(u.b(r))v.push(C.hxe(A.a2(r,t,s)))}return new C.LV(p,w,v)},
h0E(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.h6g(w.gT(w)))
return v},
le:function le(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bOh:function bOh(d){this.b=d
this.c=$},
bOi:function bOi(){},
bOj:function bOj(d){this.a=d},
fif:function fif(d){this.a=d},
fRs:function fRs(d){this.a=d},
fRt:function fRt(){},
fRu:function fRu(d){this.a=d},
fRv:function fRv(d,e){this.a=d
this.b=e},
fRw:function fRw(d,e,f){this.a=d
this.b=e
this.c=f},
fRr:function fRr(d,e){this.a=d
this.b=e},
fRx:function fRx(d){this.a=d},
fRy:function fRy(d){this.a=d},
fRz:function fRz(d,e,f){this.a=d
this.b=e
this.c=f},
fRq:function fRq(d,e){this.a=d
this.b=e},
fuu:function fuu(d,e){this.a=d
this.b=e},
aX9:function aX9(d,e,f){this.a=d
this.b=e
this.c=f},
fx2:function fx2(d){this.a=d},
asF:function asF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIr:function fIr(){},
fIs:function fIs(){},
z3:function z3(d,e,f){this.a=d
this.b=e
this.c=f},
fqW:function fqW(d){this.a=d},
fx5:function fx5(d){this.a=d},
ajw:function ajw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJa:function bJa(){},
LV:function LV(d,e,f){this.a=d
this.b=e
this.c=f},
Qo(d,e,f,g,h){var w,v,u=null,t=e==null,s=t?B.bz:f,r=A.m(18),q=A.a([],x.V)
if(!t)q.push(new A.ac(0,B.G,f.j(0.4),B.iV,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.W(g,t?B.bX:h,u,u,u,20),B.ab],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,t?B.bX:h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(s,u,u,r,q,u,B.n),u,u,u,u,B.MX,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a5)},
h74(d,e,f,g,h,i,j){return new C.akE(i,h,d,j,e,f,g,null)},
a5k:function a5k(d,e){this.c=d
this.a=e},
bgF:function bgF(d){this.a=d},
FJ:function FJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
de8:function de8(d){this.a=d},
a0Y:function a0Y(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
V6:function V6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bji:function bji(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dTz:function dTz(d,e){this.a=d
this.b=e},
dTA:function dTA(d){this.a=d},
dTB:function dTB(d,e){this.a=d
this.b=e},
dTx:function dTx(d){this.a=d},
dTy:function dTy(d){this.a=d},
dTw:function dTw(d){this.a=d},
dTu:function dTu(d){this.a=d},
dTv:function dTv(d){this.a=d},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTC:function dTC(d){this.a=d},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTE:function dTE(d,e){this.a=d
this.b=e},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTH:function dTH(d,e){this.a=d
this.b=e},
dTI:function dTI(d,e,f){this.a=d
this.b=e
this.c=f},
dTJ:function dTJ(d,e){this.a=d
this.b=e},
dTK:function dTK(d,e){this.a=d
this.b=e},
dTL:function dTL(d){this.a=d},
dTM:function dTM(d){this.a=d},
ZG:function ZG(d,e){this.a=d
this.b=e},
akE:function akE(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
akF:function akF(d){var _=this
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
bOv:function bOv(d){this.a=d},
bOw:function bOw(d){this.a=d},
bOu:function bOu(d){this.a=d},
bOl:function bOl(d){this.a=d},
bOm:function bOm(d){this.a=d},
bOk:function bOk(d){this.a=d},
bOr:function bOr(d,e,f){this.a=d
this.b=e
this.c=f},
bOs:function bOs(d){this.a=d},
bOo:function bOo(d,e){this.a=d
this.b=e},
bOp:function bOp(d,e,f){this.a=d
this.b=e
this.c=f},
bOt:function bOt(){},
bOq:function bOq(d,e){this.a=d
this.b=e},
bOn:function bOn(d){this.a=d},
akG:function akG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akH:function akH(d){var _=this
_.d=$
_.e=d
_.f=0
_.r=-1
_.x=_.w=0
_.z=_.y=!1
_.c=_.a=null},
bOB:function bOB(d,e){this.a=d
this.b=e},
bOC:function bOC(d,e){this.a=d
this.b=e},
bOD:function bOD(){},
bOE:function bOE(d){this.a=d},
bOz:function bOz(d,e){this.a=d
this.b=e},
bOA:function bOA(d){this.a=d},
azw:function azw(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1},
amX:function amX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aX8:function aX8(d){var _=this
_.e=_.d=$
_.x=_.w=_.r=_.f=0
_.Q=_.z=_.y=!1
_.as=d
_.c=_.a=null},
bYf:function bYf(d,e){this.a=d
this.b=e},
bYg:function bYg(d,e,f){this.a=d
this.b=e
this.c=f},
bYh:function bYh(d){this.a=d},
bYe:function bYe(d){this.a=d},
bYb:function bYb(d,e){this.a=d
this.b=e},
bYc:function bYc(){},
bYd:function bYd(d){this.a=d},
bYa:function bYa(d,e){this.a=d
this.b=e},
bY9:function bY9(d){this.a=d},
bdH:function bdH(d){this.a=d},
ake:function ake(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akf:function akf(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=0
_.x=d
_.y=$
_.at=_.as=_.Q=_.z=!1
_.c=_.a=null},
bMb:function bMb(){},
bMk:function bMk(d,e){this.a=d
this.b=e},
bMl:function bMl(d,e){this.a=d
this.b=e},
bMj:function bMj(d){this.a=d},
bMg:function bMg(d,e){this.a=d
this.b=e},
bMh:function bMh(){},
bMi:function bMi(d){this.a=d},
bMc:function bMc(d){this.a=d},
bMd:function bMd(d){this.a=d},
bMe:function bMe(d,e){this.a=d
this.b=e},
bMf:function bMf(d){this.a=d},
SN:function SN(d,e){this.c=d
this.a=e},
akC:function akC(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bO5:function bO5(d){this.a=d},
bO6:function bO6(d){this.a=d},
bOg:function bOg(){},
bOf:function bOf(d,e,f){this.a=d
this.b=e
this.c=f},
bOa:function bOa(d,e){this.a=d
this.b=e},
bO9:function bO9(d,e){this.a=d
this.b=e},
bOb:function bOb(d){this.a=d},
bOc:function bOc(d,e){this.a=d
this.b=e},
bOd:function bOd(d,e){this.a=d
this.b=e},
bO8:function bO8(d,e){this.a=d
this.b=e},
bOe:function bOe(d,e,f){this.a=d
this.b=e
this.c=f},
bO7:function bO7(d,e){this.a=d
this.b=e},
i1C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahH(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bB(new A.T(Date.now(),0,!1))
s=new C.fu0(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.S(a4),p=q.k("Z<1>"),q=q.k("cP<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yk)m.push(l===D.vU?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cC(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cC(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jM(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jM(h,a2,a2)-A.jM(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ai(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cP(new A.Z(a4,new C.ftZ(u,f),p),new C.fu_(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i1D(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahH(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fu5(v,e)
q=new C.fu3(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.L)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.L)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.L)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ai(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ai(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.de(new A.bc(p,d),d.k("J.E"))
n=A.C(d,A.a5(d).k("co.E"))
B.d.fc(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f5(l,new C.fu4(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hO6(d,e,f,g){var w,v,u=C.i1E(d,e)
if(u<=0||f.length<=u)return new A.ae9(!1,D.CD,f)
if(g.q(0,e.a))return new A.ae9(!1,D.CD,f)
w=A.S(f).c
v=A.d0(f,0,A.dB(u,"count",x.S),w).dB(0)
return new A.ae9(!0,A.d0(f,u,null,w).dB(0),v)},
hO7(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahH(d3),d2=d1.length
if(d2===0)return D.h7z
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.d8Z(t))}s=new C.d9f(v)
d2=x.dy
r=A.U(w,d2)
q=new C.d97(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d96(r)
l=A.U(w,x.h)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ca(l.c4(0,k,new C.d9_()),o)}h=new C.d95(s)
g=new C.d94(l,r)
p=v.$ti.k("bc<2>")
o=p.k("Z<J.E>")
f=A.C(new A.Z(new A.bc(v,p),new C.d90(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aY(w))
if(a0>d){d=a0
e=t}}a1=A.aY(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.gR
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.d9d(new C.d99(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gakB(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ex([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pN(J.dJ(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d8Y(a2,new C.d9e(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dt(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cr<1>")
d2=A.C(new A.cr(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.FN(o,new A.x(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.K4(c5.a,new A.x(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.C(new A.cr(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.W)
a3.bQ(0,new C.d91(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gae(0),w=x.dN;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.x(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f5(j,new C.d92(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aW(o,new C.d93())
c6.push(new C.aIR(new A.x(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.beg(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hlT(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
hg9(d,e,f,g,h,i,j,k,l,m,n){return new C.ZT(k,f,j,e,l,n,m,d,g,h,i,null)},
aBN(d,e,f,g,h,i,j){return new C.bhT(i,d,e,f,j,h,g,null)},
apB:function apB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDk:function aDk(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dVb:function dVb(d){this.a=d},
dVa:function dVa(d){this.a=d},
dVd:function dVd(d,e){this.a=d
this.b=e},
dVe:function dVe(d,e){this.a=d
this.b=e},
dVf:function dVf(d){this.a=d},
dV9:function dV9(d,e){this.a=d
this.b=e},
dVc:function dVc(d){this.a=d},
dVh:function dVh(d){this.a=d},
dVg:function dVg(d,e){this.a=d
this.b=e},
apv:function apv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDh:function aDh(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dUC:function dUC(d){this.a=d},
dUA:function dUA(d){this.a=d},
dUB:function dUB(d){this.a=d},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUx:function dUx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTZ:function dTZ(d){this.a=d},
dU_:function dU_(d,e){this.a=d
this.b=e},
dUg:function dUg(d){this.a=d},
dUe:function dUe(d){this.a=d},
dUf:function dUf(d,e){this.a=d
this.b=e},
dUh:function dUh(d){this.a=d},
dUi:function dUi(d,e){this.a=d
this.b=e},
dUw:function dUw(d,e){this.a=d
this.b=e},
dUd:function dUd(d){this.a=d},
dUc:function dUc(d){this.a=d},
dUb:function dUb(d,e){this.a=d
this.b=e},
dUt:function dUt(){},
dUu:function dUu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUs:function dUs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUm:function dUm(d){this.a=d},
dUn:function dUn(d,e,f){this.a=d
this.b=e
this.c=f},
dUl:function dUl(d,e){this.a=d
this.b=e},
dUo:function dUo(d,e){this.a=d
this.b=e},
dUj:function dUj(d,e){this.a=d
this.b=e},
dUk:function dUk(){},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUq:function dUq(d){this.a=d},
dUr:function dUr(d,e){this.a=d
this.b=e},
dUv:function dUv(d,e){this.a=d
this.b=e},
dTN:function dTN(d,e){this.a=d
this.b=e},
dTO:function dTO(d,e){this.a=d
this.b=e},
dUF:function dUF(d,e,f){this.a=d
this.b=e
this.c=f},
dUz:function dUz(d,e,f){this.a=d
this.b=e
this.c=f},
dUy:function dUy(d){this.a=d},
dTP:function dTP(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dTR:function dTR(){},
dTS:function dTS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTV:function dTV(d,e){this.a=d
this.b=e},
dTU:function dTU(d){this.a=d},
dTX:function dTX(d,e){this.a=d
this.b=e},
dTT:function dTT(d){this.a=d},
dUE:function dUE(d){this.a=d},
dU8:function dU8(){},
dU9:function dU9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dU7:function dU7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dU3:function dU3(d,e,f){this.a=d
this.b=e
this.c=f},
dU2:function dU2(d,e,f){this.a=d
this.b=e
this.c=f},
dU0:function dU0(d,e){this.a=d
this.b=e},
dU4:function dU4(d){this.a=d},
dU5:function dU5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dU1:function dU1(d,e){this.a=d
this.b=e},
dU6:function dU6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUa:function dUa(d,e){this.a=d
this.b=e},
dUM:function dUM(){},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUO:function dUO(d){this.a=d},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUI:function dUI(d){this.a=d},
dUG:function dUG(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d,e){this.a=d
this.b=e},
dUK:function dUK(d,e){this.a=d
this.b=e},
dUL:function dUL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUQ:function dUQ(d){this.a=d},
dUH:function dUH(d){this.a=d},
dTY:function dTY(d){this.a=d},
bee:function bee(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d8W:function d8W(d){this.a=d},
d8V:function d8V(d,e){this.a=d
this.b=e},
d8X:function d8X(d){this.a=d},
d8U:function d8U(d,e){this.a=d
this.b=e},
fu0:function fu0(d,e){this.a=d
this.b=e},
fu1:function fu1(d){this.a=d},
fu2:function fu2(){},
ftZ:function ftZ(d,e){this.a=d
this.b=e},
fu_:function fu_(){},
fu5:function fu5(d,e){this.a=d
this.b=e},
fu6:function fu6(d){this.a=d},
fu7:function fu7(){},
fu3:function fu3(d){this.a=d},
fu4:function fu4(d,e){this.a=d
this.b=e},
K4:function K4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FN:function FN(d,e){this.a=d
this.b=e},
beg:function beg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d8Z:function d8Z(d){this.a=d},
d9f:function d9f(d){this.a=d},
d97:function d97(d){this.a=d},
d98:function d98(){},
d96:function d96(d){this.a=d},
d9_:function d9_(){},
d95:function d95(d){this.a=d},
d94:function d94(d,e){this.a=d
this.b=e},
d90:function d90(d){this.a=d},
d99:function d99(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d9a:function d9a(d){this.a=d},
d9b:function d9b(d){this.a=d},
d9c:function d9c(){},
d9d:function d9d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d9e:function d9e(){},
d8Y:function d8Y(d,e,f,g,h,i,j,k,l,m){var _=this
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
d91:function d91(d,e){this.a=d
this.b=e},
d92:function d92(d){this.a=d},
d93:function d93(){},
aIR:function aIR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
beh:function beh(d,e){this.b=d
this.a=e},
d9g:function d9g(){},
d9h:function d9h(d){this.a=d},
d9i:function d9i(d){this.a=d},
d9j:function d9j(){},
bhU:function bhU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdl:function bdl(d,e){this.b=d
this.a=e},
bvx:function bvx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
faV:function faV(d){this.a=d},
bl6:function bl6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eMF:function eMF(d){this.a=d},
eME:function eME(d,e){this.a=d
this.b=e},
ZT:function ZT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBL:function aBL(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dp4:function dp4(d,e){this.a=d
this.b=e},
dp3:function dp3(d){this.a=d},
dp1:function dp1(d){this.a=d},
dp2:function dp2(d){this.a=d},
dpd:function dpd(d){this.a=d},
dpe:function dpe(d){this.a=d},
dpc:function dpc(d,e){this.a=d
this.b=e},
dpf:function dpf(){},
dpi:function dpi(d){this.a=d},
dpb:function dpb(d,e){this.a=d
this.b=e},
dph:function dph(){},
dpj:function dpj(d){this.a=d},
dpa:function dpa(d,e){this.a=d
this.b=e},
dpk:function dpk(d){this.a=d},
dp9:function dp9(d){this.a=d},
dpl:function dpl(d){this.a=d},
dp8:function dp8(d){this.a=d},
dpm:function dpm(d){this.a=d},
dp7:function dp7(d){this.a=d},
dpn:function dpn(d){this.a=d},
dp6:function dp6(d){this.a=d},
dpo:function dpo(d){this.a=d},
dp5:function dp5(d,e){this.a=d
this.b=e},
dpg:function dpg(d){this.a=d},
ad0:function ad0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhT:function bhT(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ad_:function ad_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhS:function bhS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dpp:function dpp(d){this.a=d},
dpq:function dpq(d,e){this.a=d
this.b=e},
aBM:function aBM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHT:function aHT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ad1:function ad1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dpz:function dpz(d){this.a=d},
FI:function FI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hb0(d){var w=d.S,v=x.N
return w.ja(w,new C.cak(),v,v)},
hFE(d){var w=d.bx
if(w>=0)return w
return 5},
hb2(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hb0(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hb1(d,e){var w=C.hb2(d,e)
if(w!=null&&w.cd(new A.T(Date.now(),0,!1)))return!0
return!1},
hFF(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hb0(d),w,w)
u=C.hb2(d,e)
t=u!=null&&u.cd(new A.T(Date.now(),0,!1))?u:new A.T(Date.now(),0,!1)
v.n(0,s,t.bS(A.dE(30,0,0,0,0,0).a).a7().ac())
d.S=v},
aZV(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZV=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ln(t,B.Io),$async$aZV)
case 3:if(l){u=!0
w=1
break}u=A.kX(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Io,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZV,v)},
cak:function cak(){},
hFC(){var w,v=$.px(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ar(32)]
return"FT"+B.d.hs(u)},
Iy(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Iy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c5(),$async$Iy)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Iy)
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
$.am.$1("[family tree sync codes] load: "+A.u(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Iy,v)},
a74(d){return C.hFD(d)},
hFD(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a74=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c5(),$async$a74)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_family_tree_backup_codes_v1",A.G(["codes",d,"savedAt",new A.T(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cG,null),$async$a74)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[family tree sync codes] save: "+A.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a74,v)},
caj(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$caj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Iy(),$async$caj)
case 3:t=m.jP(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a4(q)
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
return A.i($async$caj,v)},
Nv(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Nv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.caj(d),$async$Nv)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Iy(),$async$Nv)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.T(Date.now(),0,!1).a7().ac())
r.n(s,t,o)
w=9
return A.b(C.a74(s),$async$Nv)
case 9:case 8:u=t
w=1
break
case 5:n=C.hFC()
w=10
return A.b(C.Iy(),$async$Nv)
case 10:s=f
J.aG(s,n,A.G(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a7().ac(),"updatedAt",new A.T(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=11
return A.b(C.a74(s),$async$Nv)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Nv,v)},
aZU(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Iy(),$async$aZU)
case 3:t=f
for(s=J.dm(t),r=s.gdR(t),r=r.dB(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a74(t),$async$aZU)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZU,v)},
a75(d,e,f){var w=0,v=A.j(x.H),u
var $async$a75=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apA(d,e),$async$a75)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Nv(d),$async$a75)
case 7:w=4
break
case 5:w=8
return A.b(C.aZU(d),$async$a75)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a75,v)},
apu(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apu=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apA(f,e),$async$apu)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c5(),$async$apu)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Iy(),$async$apu)
case 7:q=o.r(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a4(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apu,v)},
aZT(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c5(),$async$aZT)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Iy(),$async$aZT)
case 4:t=q.r(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a4(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZT,v)},
hFG(){var w,v=$.px(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ar(32)]
return"FT"+B.d.hs(u)},
apx(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$apx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c5(),$async$apx)
case 3:if(!g){u=null
w=1
break}t=C.hFG()
w=4
return A.b(A.V7(),$async$apx)
case 4:s=g
r=B.dK.aL(B.S.ao(d.eV(),null))
r=B.cJ.gct().aL(r)
q=e?999:2
J.aG(s,t,A.G(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.T(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(A.a76(s),$async$apx)
case 5:p=e?999:2
u=new A.a03("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apx,v)},
apw(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$apw=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.V7(),$async$apw)
case 3:p=a0
o=J.a4(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a4(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aZT(J.k(l==null?"":l),j),$async$apw)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cz(0,B.cF.aL(t))
s=C.hb3(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.u(q))
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
l.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=5
return A.b(A.a76(p),$async$apw)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apw,v)},
hb3(d){var w,v,u,t,s=null
try{w=B.S.aM(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hFI(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fVE(d){var w=0,v=A.j(x.m),u,t,s
var $async$fVE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.apw(t[1])
w=1
break}u=null
w=1
break}u=C.hb3(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVE,v)},
hFI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cE(u,new C.cam(),u.$ti.k("J.E"),x.k)
t=A.a5(u).k("Z<J.E>")
s=A.C(new A.Z(u,new C.can(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.T(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jP(p),t=t.gae(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.da(l,u)
n=A.cE(n,new C.cao(),n.$ti.k("J.E"),o)
k=A.a5(n).k("Z<J.E>")
j=A.C(new A.Z(n,new C.cap(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.apy(h,w,s,r,q)},
apA(d,e){var w=0,v=A.j(x.y),u,t
var $async$apA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Nm(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AN(d),$async$apA)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apA,v)},
cav(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cav=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AN(d),$async$cav)
case 3:t=s.b6(f,new C.caw(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aW(t,new C.cax())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cav,v)},
V8(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$V8=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apA(e,d),$async$V8)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Nv(e),$async$V8)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AN(e),$async$V8)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.cat(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gal(r)){u=null
w=1
break}t=t.dE(r,new C.cau(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KQ(e,o),$async$V8)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.apy(s,B.a.i(e.toLowerCase()),r,new A.T(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V8,v)},
aZY(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZY=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.V8(d,e,f,g),$async$aZY)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aM(t,s,"_")
r=q.a
u=A.Gv(A.K0(q.eV(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZY,v)},
aZX(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.V8(d,e,f,g),$async$aZX)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.apx(r,f),$async$aZX)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFU(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZX,v)},
V9(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$V9=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fVE(a0),$async$V9)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apu(g.a,d,e,f,s,r),$async$V9)
case 6:if(!a2){if(r)throw A.V(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.V(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bAK(e,j),$async$V9)
case 12:case 11:w=13
return A.b(C.ahs(e,j,s),$async$V9)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.AY(e,i,h),$async$V9)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.boI(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V9,v)},
apy:function apy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
car:function car(){},
cas:function cas(){},
caq:function caq(){},
cam:function cam(){},
can:function can(){},
cao:function cao(){},
cap:function cap(){},
caw:function caw(){},
cax:function cax(){},
cat:function cat(d){this.a=d},
cau:function cau(d){this.a=d},
h3b(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hE(d,new C.apz(w,e,g,i,f,h,null),!0,null,x.H)},
d8T(d,e,f,g,h,i,j,k){return new C.bed(i,e,k,j,g,f,h,d,null)},
apz:function apz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDj:function aDj(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dUZ:function dUZ(d){this.a=d},
dV_:function dV_(d,e,f){this.a=d
this.b=e
this.c=f},
dV3:function dV3(d,e){this.a=d
this.b=e},
dV4:function dV4(d){this.a=d},
dUW:function dUW(d){this.a=d},
dUX:function dUX(d,e){this.a=d
this.b=e},
dUY:function dUY(d,e){this.a=d
this.b=e},
dV2:function dV2(d){this.a=d},
dV1:function dV1(d,e){this.a=d
this.b=e},
dV0:function dV0(){},
dV6:function dV6(d){this.a=d},
dV7:function dV7(d,e){this.a=d
this.b=e},
dV5:function dV5(d,e){this.a=d
this.b=e},
d9k:function d9k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bef:function bef(d,e,f){this.d=d
this.e=e
this.a=f},
aci:function aci(d,e,f){this.c=d
this.d=e
this.a=f},
bed:function bed(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bei:function bei(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_d:function a_d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDi:function aDi(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUS:function dUS(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUU:function dUU(d){this.a=d},
dUV:function dUV(d){this.a=d},
a_e:function a_e(d){this.a=d},
bjj:function bjj(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dV8:function dV8(d,e){this.a=d
this.b=e},
aYs(d,e){return new C.aYr(d,e,null)},
aYr:function aYr(d,e,f){this.c=d
this.d=e
this.a=f},
i45(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
ibt(d){return A.bR(B.K,null,new C.fKi(new C.tT(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hcX(d,e){return new C.ast(e,d,null)},
aQ1(d,e,f,g,h,i,j){var w=C.i45(i)
if(w!=null)return A.bv(e,new A.a7(j,f,new C.a69(w,!0,null),null),B.aq)
return N.aPo(e,B.bU,f,g,h,i,j)},
lF:function lF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a69:function a69(d,e,f){this.c=d
this.d=e
this.a=f},
bj0:function bj0(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b4$=e
_.c=_.a=null},
dGR:function dGR(d){this.a=d},
dGS:function dGS(){},
dGT:function dGT(d,e){this.a=d
this.b=e},
bj_:function bj_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fKi:function fKi(d){this.a=d},
fKh:function fKh(d,e){this.a=d
this.b=e},
fKg:function fKg(d,e){this.a=d
this.b=e},
fKf:function fKf(d,e){this.a=d
this.b=e},
ast:function ast(d,e,f){this.c=d
this.d=e
this.a=f},
ci0:function ci0(d,e){this.a=d
this.b=e},
aLb:function aLb(){},
ibe(d){var w=null
return A.cd(w,w,!0,w,new C.fJF(),d,w,!0,!0,x.e2)},
ico(d,e,f,g,h){var w=null
return A.cd(w,w,!0,w,new C.fR8(h,g,f,e),d,w,!0,!0,x.N)},
ibg(d,e){var w=null
return A.cd(w,w,!0,w,new C.fJK(e),d,w,!0,!0,x.dY)},
ibf(d){var w=null
return A.cd(w,w,!0,w,new C.fJJ(),d,w,!0,!0,x.c5)},
aT_:function aT_(d,e){this.a=d
this.b=e},
aSZ:function aSZ(d){this.a=d},
aQY:function aQY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJF:function fJF(){},
fR8:function fR8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJK:function fJK(d){this.a=d},
fJJ:function fJJ(){},
YR:function YR(d,e){this.c=d
this.a=e},
ayA:function ayA(){var _=this
_.d=$
_.c=_.a=_.e=null},
d0D:function d0D(d){this.a=d},
d0E:function d0E(d){this.a=d},
d0C:function d0C(d,e){this.a=d
this.b=e},
d0F:function d0F(d){this.a=d},
d0G:function d0G(d){this.a=d},
YQ:function YQ(d){this.a=d},
ayz:function ayz(){this.d=$
this.c=this.a=null},
d0z:function d0z(d){this.a=d},
d0A:function d0A(d){this.a=d},
d0B:function d0B(d){this.a=d},
Yo:function Yo(d){this.a=d},
axj:function axj(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
czd:function czd(){},
czj:function czj(d){this.a=d},
czk:function czk(d){this.a=d},
czl:function czl(d){this.a=d},
czi:function czi(){},
czm:function czm(d){this.a=d},
czn:function czn(d){this.a=d},
czh:function czh(){},
czo:function czo(d,e){this.a=d
this.b=e},
czg:function czg(d,e){this.a=d
this.b=e},
cze:function cze(d,e){this.a=d
this.b=e},
czp:function czp(d){this.a=d},
czf:function czf(){},
czq:function czq(d){this.a=d},
a1_:function a1_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvn:function bvn(){this.d=$
this.c=this.a=null},
faf:function faf(d,e){this.a=d
this.b=e},
fag:function fag(d){this.a=d},
fah:function fah(d,e){this.a=d
this.b=e},
abn:function abn(d,e){this.a=d
this.b=e},
Fy:function Fy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bvl:function bvl(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
fad:function fad(d,e){this.a=d
this.b=e},
axc:function axc(d,e){this.c=d
this.a=e},
bvm:function bvm(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
fae:function fae(d){this.a=d},
bvk:function bvk(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aNd:function aNd(){},
aNe:function aNe(){},
bCF(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bm(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oM(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fIe(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d1(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d1(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d1(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aY(B.o.u(s),2,"0")
n.push(A.d1(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XO(A.d1(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPE(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().kV(85,1280,B.eI),$async$aPE)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fi(),$async$aPE)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hcW()
w=9
return A.b(C.ci_(q,r),$async$aPE)
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
$.am.$1("[worksheets] pick photo failed: "+A.u(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aPE,v)},
aQ_(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aQ_=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.chX(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aL(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.X().LG(p,!0,null,i).d9(0,B.fP),$async$aQ_)
case 9:n=a1
w=10
return A.b(n.lE(),$async$aQ_)
case 10:m=a1
w=11
return A.b(J.a2H(m).hu(B.h4),$async$aQ_)
case 11:l=a1
J.a2H(m).t()
if(l==null){w=8
break}i=J.eV(B.dC.gaP(l))
k="data:image/png;base64,"+B.cJ.gct().aL(i)
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
$.am.$1("[worksheets] thumbnail shrink failed: "+A.u(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aQ_,v)},
fIe:function fIe(){},
tT:function tT(d){this.a=d},
ass:function ass(d,e,f){this.c=d
this.d=e
this.a=f},
aEL:function aEL(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eJP:function eJP(d,e){this.a=d
this.b=e},
eJG:function eJG(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJN:function eJN(d,e){this.a=d
this.b=e},
eJM:function eJM(d,e){this.a=d
this.b=e},
eJJ:function eJJ(d,e){this.a=d
this.b=e},
eJI:function eJI(d,e){this.a=d
this.b=e},
eJK:function eJK(d){this.a=d},
eJL:function eJL(d,e){this.a=d
this.b=e},
eJO:function eJO(d,e){this.a=d
this.b=e},
eJB:function eJB(d,e){this.a=d
this.b=e},
eJF:function eJF(d){this.a=d},
eJE:function eJE(d,e){this.a=d
this.b=e},
eJD:function eJD(d){this.a=d},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
eJR:function eJR(d,e){this.a=d
this.b=e},
eJC:function eJC(d,e){this.a=d
this.b=e},
hpI(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.G(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.T(Date.now(),0,!1).a7().ac(),"project",v],x.N,x.z)},
fIf(d,e,f){var w=0,v=A.j(x.N),u
var $async$fIf=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hpI(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIf,v)},
bCH(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fIf(!0,d,e),$async$bCH)
case 4:w=3
return A.b(r.asq(g,d,e.a),$async$bCH)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aL(B.S.ao(C.hpI(d,e,null),null))
u="NGMY_WS:"+B.kp.gct().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCH,v)},
hhw(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h2Q(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d2(s,"{"))try{w=B.S.aM(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i98(d){var w,v,u,t=C.hhw(d)
if(t==null)return null
if(C.h2Q(t))return t
w=B.a.cD(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.h2Q(v))return v}u=B.a.cD(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.h2Q(v))return v}return null},
h2P(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.cf.cz(0,B.cF.aL(J.na(q,8)))
w=t.a(B.S.aM(0,v,r))}else w=t.a(B.S.aM(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.fYg(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCG(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asp(t[1]),$async$bCG)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h2P(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h2P(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCG,v)},
h2O(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lo(w,v,d.c,d.d,new A.T(Date.now(),0,!1))},
bCd(){var w=0,v=A.j(x.o),u,t
var $async$bCd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GG(),$async$bCd)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h2P(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCd,v)},
hqF(d,e,f,g){return A.bR(B.K,null,new C.fQZ(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fQZ:function fQZ(d,e,f){this.a=d
this.b=e
this.c=f},
adm:function adm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eJT:function eJT(d,e){this.a=d
this.b=e},
eJU:function eJU(d,e){this.a=d
this.b=e},
eJV:function eJV(d,e){this.a=d
this.b=e},
eJW:function eJW(d,e){this.a=d
this.b=e},
eJS:function eJS(d){this.a=d},
asm:function asm(d,e,f){this.c=d
this.d=e
this.a=f},
bkC:function bkC(){var _=this
_.c=_.a=_.e=_.d=null},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJx:function eJx(d){this.a=d},
eJy:function eJy(d){this.a=d},
asr:function asr(d){this.a=d},
aEK:function aEK(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJA:function eJA(d){this.a=d},
eJz:function eJz(d){this.a=d},
hIU(d,e,f,g,h){return new C.O7(h,g,d,e,f,null)},
aJy:function aJy(d,e){this.a=d
this.b=e},
O7:function O7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEM:function aEM(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eKi:function eKi(){},
eKe:function eKe(d,e){this.a=d
this.b=e},
eKf:function eKf(d){this.a=d},
eK_:function eK_(d){this.a=d},
eJY:function eJY(d){this.a=d},
eJZ:function eJZ(d){this.a=d},
eK8:function eK8(d,e){this.a=d
this.b=e},
eK5:function eK5(d,e){this.a=d
this.b=e},
eK6:function eK6(d,e){this.a=d
this.b=e},
eK7:function eK7(d,e,f){this.a=d
this.b=e
this.c=f},
eK3:function eK3(d,e,f){this.a=d
this.b=e
this.c=f},
eK1:function eK1(d){this.a=d},
eK2:function eK2(d){this.a=d},
eK4:function eK4(d){this.a=d},
eKl:function eKl(d){this.a=d},
eKk:function eKk(d){this.a=d},
eKm:function eKm(d){this.a=d},
eKj:function eKj(d){this.a=d},
eJX:function eJX(d){this.a=d},
eK0:function eK0(d,e){this.a=d
this.b=e},
eKh:function eKh(d,e){this.a=d
this.b=e},
eKg:function eKg(d,e){this.a=d
this.b=e},
eKb:function eKb(d){this.a=d},
eKc:function eKc(d){this.a=d},
eKd:function eKd(d,e){this.a=d
this.b=e},
eKa:function eKa(d,e){this.a=d
this.b=e},
eK9:function eK9(d,e,f){this.a=d
this.b=e
this.c=f},
bx3:function bx3(){},
AE(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aM(v,w,"_")},
afS(d,e,f){return C.hYy(d,e,f)},
hYy(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afS=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$afS)
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
$.am.$1("[worksheets] setString failed for "+e+": "+A.u(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afS,v)},
afR(d,e){return C.hYx(d,e)},
hYx(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afR=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afR)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ab(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.u(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$afR,v)},
hXj(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.SO(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzL(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzL=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b2a(q),$async$bzL)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aQ_(q,!1),$async$bzL)
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
return A.i($async$bzL,v)},
hwz(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r4(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r4(p,J.k(u==null?"":u),1,o,q)},
fYg(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cE(w,new C.cyB(),w.$ti.k("J.E"),x.Q)
v=A.a5(w).k("Z<J.E>")
r=A.C(new A.Z(w,new C.cyC(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lo(w,v,u,r,t==null?new A.T(Date.now(),0,!1):t)},
i1y(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.vU
case"female":case"f":return D.q2
default:return D.yk}},
hmo(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h75(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i1y(v==null?j:J.k(v))
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
m=m==null?j:B.k.O(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.O(k)
return new C.i1(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i1A(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Ne
case"viewer":return D.kD
default:return D.tZ}},
i1B(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gw(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aOL(d,e){return B.a.i(e.toLowerCase())===C.Gw(d,e)&&d.y!==D.kD},
u4(d,e){var w,v=d.y
if(v===D.kD)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gw(d,e))return!0
if(v===D.Ne)return!0
v=d.e
return new A.M(v,A.h2V(),A.S(v).k("M<1,n>")).q(0,w)},
i1_(d){return J.dJ(d,new C.ft0()).gK(0)},
fRI(d){var w=0,v=A.j(x.y),u,t
var $async$fRI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AN(d),$async$fRI)
case 3:u=t.r_(f,new C.fRJ(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRI,v)},
bAK(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AN(d),$async$bAK)
case 3:t=g
if(J.r_(t,new C.fqU(e))){w=1
break}if(C.i1_(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAK,v)},
akJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.da(h,x.f)
w=A.cE(w,new C.bOF(),w.$ti.k("J.E"),x.P)
v=A.a5(w).k("Z<J.E>")
g=A.C(new A.Z(w,new C.bOG(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bOH(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bi(J.k(q==null?"":q))
if(q==null)q=new A.T(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.O(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.i1A(n==null?null:J.k(n))
m=A.a([],x.X)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cx)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gT(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kF(w,v,s,!r,t,g,q,p,o,n,m)},
hmx(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aM(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CT(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$CT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rw(d),$async$CT)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$CT)
case 4:t=f
w=5
return A.b(t.a6c(0),$async$CT)
case 5:w=6
return A.b(C.fhR(t,l),$async$CT)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hi6(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oL(l,n),$async$CT)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hi6(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oL(l,n),$async$CT)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CT,v)},
fhR(d,e){return C.hUM(d,e)},
hUM(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fhR=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AE(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aM(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AE(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aM(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fYg(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AE(a9)+"_"+n))
i=C.hXj(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b2a(h),$async$fhR)
case 17:g=b1
if(g!=null){i=i.SO(g)
p=!0}case 16:J.ca(q,i)
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
case 8:J.RH(q,new C.fhS())
if(p&&J.ad(q)!==0)C.oL(a9,q)
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
return A.i($async$fhR,v)},
bB9(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bB9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rw(d),$async$bB9)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CT(r),$async$bB9)
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
return A.i($async$bB9,v)},
hi6(d){var w,v,u,t
try{w=B.S.aM(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cE(v,new C.fdJ(),v.$ti.k("J.E"),x.i)
u=A.a5(v).k("Z<J.E>")
v=A.C(new A.Z(v,new C.fdK(),u),u.k("J.E"))
B.d.aW(v,new C.fdL())
return v}catch(t){v=A.a([],x.D)
return v}},
oL(d,e){return C.ib4(d,e)},
ib4(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oL=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rw(b2),$async$oL)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oL)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AE(a8)
p=A.aU(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aM(0,p,null)),new C.fJw(),a2).fE(0)
a2=J.b6(b3,new C.fJx(),a2).c0(0,new C.fJy())
n=A.de(a2,a2.$ti.k("J.E"))
a2=o,a2=A.em(a2,a2.r,A.a5(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.AE(a8)
l=A.aU(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8o(l),$async$oL)
case 19:t=21
a5=C.AE(a8)
k=A.aU(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aM(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8o(a5==null?null:J.k(a5)),$async$oL)
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
return A.b(C.afR(r,"ngmy_worksheet_item_v3_"+C.AE(a8)+"_"+m),$async$oL)
case 29:w=30
return A.b(C.afR(r,"ngmy_worksheet_thumb_v3_"+C.AE(a8)+"_"+m),$async$oL)
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
case 14:case 10:a2=J.cB(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzL(h),$async$oL)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afS(r,"ngmy_worksheet_thumb_v3_"+C.AE(a8)+"_"+a4,f),$async$oL)
case 40:g=i.SO(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afR(r,"ngmy_worksheet_thumb_v3_"+C.AE(a8)+"_"+a4),$async$oL)
case 41:g=i.SO(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afR(r,"ngmy_worksheet_thumb_v3_"+C.AE(a8)+"_"+a4),$async$oL)
case 42:case 34:a4=i.a
w=43
return A.b(C.afS(r,"ngmy_worksheet_item_v3_"+C.AE(a8)+"_"+a4,B.S.ao(g.ag(),null)),$async$oL)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.ca(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afS(r,"ngmy_worksheets_index_v3_"+C.AE(a8),B.S.ao(q,null)),$async$oL)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eR(b3,new C.fJz(q))
a4=a3.$ti.k("cP<1,a6<n,@>>")
a7=A.C(new A.cP(a3,new C.fJA(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afS(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oL)
case 45:w=46
return A.b(J.hvF(r),$async$oL)
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
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.u(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$oL,v)},
Lg(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Lg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CT(d),$async$Lg)
case 3:t=g
s=J.cB(t)
r=s.bf(t,new C.fRH(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.oL(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lg,v)},
bAY(d,e){var w=0,v=A.j(x.H),u
var $async$bAY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CT(d),$async$bAY)
case 2:u=g
J.nu(u,new C.ftu(e))
w=3
return A.b(C.oL(d,u),$async$bAY)
case 3:return A.h(null,v)}})
return A.i($async$bAY,v)},
Gy(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Gy)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aM(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cE(j,new C.fwi(),j.$ti.k("J.E"),x.k)
s=A.a5(j).k("Z<J.E>")
r=A.C(new A.Z(j,new C.fwj(),s),s.k("J.E"))
B.d.aW(r,new C.fwk())
k=r}}catch(h){}w=4
return A.b(C.fet(d),$async$Gy)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hV8(k,p,d)
j=A.S(o)
s=j.k("M<1,a6<n,@>>")
s=A.C(new A.M(o,new C.fwl(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.QJ(d,o),$async$Gy)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fwm(d),j),j.k("J.E"))
if(m.length!==0)C.aOw(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gy,v)},
fJi(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fJi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QJ(d,e),$async$fJi)
case 3:t=J.dJ(e,new C.fJj(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOw(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJi,v)},
a2A(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2A=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a2A)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aM(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cE(m,new C.fRC(),m.$ti.k("J.E"),x.k)
t=A.a5(m).k("Z<J.E>")
s=A.C(new A.Z(m,new C.fRD(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qm(o,new C.fRE(e))
if(B.a.i(e.x).length===0&&C.u4(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDY(e.y===D.kD?D.kD:D.tZ,m)}else p=e
if(q===-1)J.pB(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.QJ(d,o),$async$a2A)
case 3:w=C.u4(p,d)?4:5
break
case 4:w=6
return A.b(C.aOv(C.Gw(p,d),p),$async$a2A)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2A,v)},
aOH(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gy(d),$async$aOH)
case 2:u=g
t=J.cB(u)
s=A.pN(t.eR(u,new C.ftb(e)))
t.bs(u,new C.ftc(e))
w=3
return A.b(C.QJ(d,u),$async$aOH)
case 3:w=s!=null&&C.aOL(s,d)?4:5
break
case 4:w=6
return A.b(C.fdN(e),$async$aOH)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOH,v)},
ahH(d){var w=d.f,v=A.S(w).k("Z<1>")
w=A.C(new A.Z(w,new C.fRN(),v),v.k("J.E"))
return w},
h0s(d,e){var w,v=d.f,u=A.pN(new A.Z(v,new C.fsG(e),A.S(v).k("Z<1>")))
v=C.ahH(d)
w=A.S(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fsH(e,u),w),w.k("J.E"))
B.d.aW(v,new C.fsI())
return v},
i1E(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hqJ(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bf(C.h0s(d,u),new C.fR9(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i3a(d,e){var w
if(e==null||e.length===0)return 1
w=C.h0s(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fx6(),A.S(w).k("M<1,H>")).f9(0,B.Ax)+1},
iaY(d){var w,v=C.ahH(d)
if(v.length===0)return null
w=new A.Z(v,new C.fJc(),A.S(v).k("Z<1>"))
if(!w.gal(0))return w.gH(0)
return B.d.gH(v)},
i1z(d){return A.G(["id",d.a,"name",d.b,"gender",C.hmo(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i35(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aY(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yk?n:q.c
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
d=q.aDT(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cK1(a1,w,a3.d,a2.y,s,a0,v)},
AN(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$AN)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aM(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.da(t,x.f)
p=A.cE(p,new C.fwf(),p.$ti.k("J.E"),x.k)
s=A.a5(p).k("Z<J.E>")
p=A.C(new A.Z(p,new C.fwg(),s),s.k("J.E"))
B.d.aW(p,new C.fwh())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AN,v)},
ahs(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahs=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tZ:D.kD
a7=C.Gw(b2,b3)
w=2
return A.b(C.AN(b1),$async$ahs)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.bf(a8,new C.fJ7(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAK(b1,b2),$async$ahs)
case 5:case 4:if(b0===-1){u=b2.aDY(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.L)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.yk?i:l.c
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
s.n(0,m,l.aDT(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tZ:D.kD
u=t.cK3(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.QJ(b1,a8),$async$ahs)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOv(B.a.i(b3.toLowerCase()),u),$async$ahs)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahs,v)},
hiv(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.T(Date.now(),0,!1).a7().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.S(m).k("M<1,a6<n,@>>"),k=A.C(new A.M(m,C.hpR(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.G(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.G(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ac(),"updatedAt",o],r,x.K),"createdAt",s.a7().ac(),"updatedAt",o],r,x.z)},
hiw(d,e){var w=new A.T(Date.now(),0,!1).a7().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.S(u).k("M<1,a6<n,@>>")
u=A.C(new A.M(u,C.hpR(),t),t.k("ak.E"))
return A.G(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ac(),"updatedAt",w],x.N,x.z)},
hSK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akJ(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h2V(),A.S(j).k("M<1,n>")).c0(0,new C.feg())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tZ
else s=B.d.q(t,u)?D.Ne:D.kD
return w.aDY(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akJ(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cE(h,new C.feh(),h.$ti.k("J.E"),x.P)
p=A.a5(h).k("Z<J.E>")
o=A.C(new A.Z(h,new C.fei(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fej(),x.N).c0(0,new C.fek())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tZ
else s=B.d.q(t,u)?D.Ne:D.kD
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.T(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.kF(h,r,p,!m,t,o,l,j,v,s,B.c4)},
fet(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fet=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fex()
h=x.N
g=x.z
w=7
return A.b(A.iO(A.a([A.lu("family_trees","*",null,A.G(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.lu("family_trees","*",A.G(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.lu("family_trees","*",null,A.G(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.fO),$async$fet)
case 7:q=a4
p=J.r(q,0)
o=J.r(q,1)
n=J.r(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h4(l,o)
J.h4(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.r(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a5(l).k("bc<2>")
h=A.cE(new A.bc(l,h),new C.feu(a0),h.k("J.E"),x.k)
l=A.a5(h).k("Z<J.E>")
l=A.C(new A.Z(h,new C.fev(),l),l.k("J.E"))
B.d.aW(l,new C.few())
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
else h.$1("[family_trees] fetch error: "+A.u(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fet,v)},
hV8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gal(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dE(e,new C.fiy(),v).c0(0,new C.fiz())
t=A.de(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gw(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kD){m=q.e
m=!new A.M(m,A.h2V(),A.S(m).k("M<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i35(l,v)
o=C.Gw(k,w)
p=v.d
s.n(0,u,o===w?k.bc1(p,D.tZ):k.bc1(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aW(j,new C.fiA())
return j},
QJ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$QJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$QJ)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.flf(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$QJ)
case 3:return A.h(null,v)}})
return A.i($async$QJ,v)},
aOv(d,e){return C.i_l(d,e)},
i_l(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOv=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.X
w=7
return A.b(A.lZ("family_trees",A.a([C.hiv(e,d)],p),null,B.cG),$async$aOv)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lZ("family_trees",A.a([C.hiw(e,d)],p),null,B.cG),$async$aOv)
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
$.am.$1("[family_trees] upsert error: "+A.u(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aOv,v)},
aOw(d,e){return C.i_m(d,e)},
i_m(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.S(e).k("M<1,a6<n,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fqd(d),n),m)
r=l
w=7
return A.b(A.lZ("family_trees",r,null,B.cG),$async$aOw)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fqe(d),n),m)
p=k
w=8
return A.b(A.lZ("family_trees",p,null,B.cG),$async$aOw)
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
$.am.$1("[family_trees] bulk upsert error: "+A.u(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aOw,v)},
fdN(d){return C.hS4(d)},
hS4(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fdN=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.R6("family_trees",A.G(["id",d],x.N,x.z),null,B.cG),$async$fdN)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ab(p)
$.am.$1("[family_trees] delete error: "+A.u(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fdN,v)},
r4:function r4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lo:function lo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cyE:function cyE(){},
cyD:function cyD(){},
cyB:function cyB(){},
cyC:function cyC(){},
HF:function HF(d,e){this.a=d
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
akI:function akI(d,e){this.a=d
this.b=e},
ft0:function ft0(){},
fRJ:function fRJ(d){this.a=d},
fqU:function fqU(d){this.a=d},
kF:function kF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bOJ:function bOJ(){},
bOI:function bOI(){},
bOF:function bOF(){},
bOG:function bOG(){},
bOH:function bOH(){},
fhS:function fhS(){},
fdJ:function fdJ(){},
fdK:function fdK(){},
fdL:function fdL(){},
fJw:function fJw(){},
fJx:function fJx(){},
fJy:function fJy(){},
fJz:function fJz(d){this.a=d},
fJA:function fJA(){},
fRH:function fRH(d){this.a=d},
ftu:function ftu(d){this.a=d},
fwi:function fwi(){},
fwj:function fwj(){},
fwk:function fwk(){},
fwl:function fwl(){},
fwm:function fwm(d){this.a=d},
fJj:function fJj(d){this.a=d},
fRC:function fRC(){},
fRD:function fRD(){},
fRE:function fRE(d){this.a=d},
ftb:function ftb(d){this.a=d},
ftc:function ftc(d){this.a=d},
fRN:function fRN(){},
fsG:function fsG(d){this.a=d},
fsH:function fsH(d,e){this.a=d
this.b=e},
fsI:function fsI(){},
fR9:function fR9(d){this.a=d},
fx6:function fx6(){},
fJc:function fJc(){},
fwf:function fwf(){},
fwg:function fwg(){},
fwh:function fwh(){},
fJ7:function fJ7(d){this.a=d},
feg:function feg(){},
feh:function feh(){},
fei:function fei(){},
fej:function fej(){},
fek:function fek(){},
fex:function fex(){},
fey:function fey(d){this.a=d},
feu:function feu(d){this.a=d},
fev:function fev(){},
few:function few(){},
fiy:function fiy(){},
fiz:function fiz(){},
fiA:function fiA(){},
flf:function flf(){},
fqd:function fqd(d){this.a=d},
fqe:function fqe(d){this.a=d},
cyF:function cyF(d,e){this.a=d
this.b=e},
cyG:function cyG(d,e){this.a=d
this.b=e},
aGQ:function aGQ(d,e,f){this.a=d
this.b=e
this.c=f},
b8t:function b8t(){this.b=this.a=0},
b8s:function b8s(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bvo:function bvo(){},
wP(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcv()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aY(B.o.u(w.gnd()),2,"0")+":"+B.a.aY(B.o.u(w.gGl()),2,"0")},
hIR(){var w,v=$.px(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ar(32)]
return"WS"+B.d.hs(u)},
asn(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$asn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c5(),$async$asn)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$asn)
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
$.am.$1("[worksheet qr stash] load: "+A.u(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$asn,v)},
aso(d){return C.hIS(d)},
hIS(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aso=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c5(),$async$aso)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_worksheet_project_qr_stashes_v1",A.G(["stashes",d,"savedAt",new A.T(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cG,null),$async$aso)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[worksheet qr stash] save: "+A.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aso,v)},
asq(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c5(),$async$asq)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hIR()
w=4
return A.b(C.asn(),$async$asq)
case 4:r=h
q=B.a.i(e)
p=B.dK.aL(t)
J.aG(r,s,A.G(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aL(p),"usesRemaining",25,"createdAt",new A.T(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(C.aso(r),$async$asq)
case 5:u=new A.a03("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asq,v)},
asp(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c5(),$async$asp)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.asn(),$async$asp)
case 4:q=f
p=J.a4(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a4(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cf.cz(0,B.cF.aL(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.u(r))
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
m.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a7().ac())
p.n(q,i,m)}w=5
return A.b(C.aso(q),$async$asp)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asp,v)},
hcW(){var w=new A.T(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cW.ar(999999)},
hIT(d){var w,v,u,t,s,r,q
try{w=A.agh(d)
if(w==null)return d
v=w
if(J.Lm(v)>960||J.Ll(v)>960){s=v
r=J.Lm(v)>=J.Ll(v)?960:null
v=A.agg(s,J.Ll(v)>J.Lm(v)?960:null,B.Ox,r)}s=v
u=A.am5(82).Ta(s,B.yY)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
ci_(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$ci_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hIT(e)
$.chW.n(0,s,t)
u=C.bCJ(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ci_,v)},
b2a(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b2a=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gak(J.lw(l,",")):l
q=B.cF.aL(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hcW()
w=7
return A.b(C.ci_(p,q),$async$b2a)
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
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.u(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b2a,v)},
chX(d){var w=0,v=A.j(x.T),u,t,s
var $async$chX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.chZ(s),$async$chX)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chX,v)},
a8o(d){var w=0,v=A.j(x.H),u,t
var $async$a8o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hpJ(d)
if(t==null){w=1
break}$.chW.W(0,t)
w=3
return A.b(C.bCI(t),$async$a8o)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8o,v)},
bCJ(d,e){return C.i9b(d,e)},
i9b(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCJ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNq
w=7
return A.b(n==null?$.aNq=N.h_p():n,$async$bCJ)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.mM(r,"thumbs","readwrite")
B.iU.mj(J.mL(p,"thumbs"),q,l)
w=8
return A.b(J.pA(p),$async$bCJ)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ab(k)
$.am.$1("[worksheet-thumb idb put] "+A.u(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCJ,v)},
bCI(d){return C.i99(d)},
i99(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCI=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNq
w=7
return A.b(o==null?$.aNq=N.h_p():o,$async$bCI)
case 7:r=f
q=J.mM(r,"thumbs","readwrite")
B.iU.FS(J.mL(q,"thumbs"),m)
w=8
return A.b(J.pA(q),$async$bCI)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb delete] "+A.u(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCI,v)}},D,Ao,Ap,W,Aq,Ar,N
J=c[1]
A=c[0]
B=c[2]
A6=c[79]
Q=c[238]
X=c[153]
A7=c[222]
K=c[203]
G=c[32]
F=c[213]
O=c[115]
A8=c[224]
S=c[103]
A9=c[112]
Aa=c[190]
Y=c[113]
Ab=c[221]
Ac=c[39]
R=c[220]
L=c[87]
Z=c[82]
A_=c[159]
Ad=c[122]
A0=c[162]
A1=c[234]
A2=c[191]
Ae=c[182]
Af=c[194]
A3=c[189]
Ag=c[237]
Ah=c[67]
Ai=c[73]
A4=c[207]
Aj=c[240]
Ak=c[31]
A5=c[114]
P=c[184]
Al=c[195]
T=c[239]
Am=c[146]
U=c[230]
E=c[30]
H=c[97]
An=c[38]
I=c[95]
M=c[130]
V=c[71]
C=a.updateHolder(c[6],C)
D=c[233]
Ao=c[72]
Ap=c[201]
W=c[236]
Aq=c[235]
Ar=c[58]
N=c[56]
C.aoh.prototype={}
C.aYt.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bgn(),f=h.x!=null&&h.z5(i).length===0
if(h.x!=null)w=f?B.b_:B.bx
else w=h.gTO()?B.bx:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bhO,B.q,1)
s=x.p
r=A.p(i,A.w(A.a([A.p(i,D.eTh,B.f,i,i,new A.o(B.b_.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h0,i,i,i),B.R,D.fmM,B.au,A.d(C.wP(new A.T(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fiz,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b1A,i,i,i,i,B.Zq,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.b_.j(0.28),B.q,1)
n=A.h1t(h.d)
o=A.p(B.A,C.aYs(A.fzr(h.e,n),30),B.f,i,i,new A.o(B.lU,i,o,i,i,i,B.a4),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fdT,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.w(A.a([o,B.N,n,B.bA,D.fn3,B.ac,A.p(i,A.w(A.a([D.fCN,B.bA,A.d(A.AP(h.c),i,i,i,i,i,i,D.f8I,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f9,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,P.aik,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aQG("Original due",C.wP(h.r,!1))
n=j.aQG("Current due",C.wP(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.R,A.p(i,A.w(A.a([l,B.N,n,B.R,A.p(i,A.d(h.gaKP(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Bm,i,i,1/0),B.R,j.cfm(),B.N,j.c2T(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fo0,B.au,A.d(q,i,i,i,i,i,i,D.fd9,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaFB()){q=A.m(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fE6,B.N,A.bv(A.m(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.VU(h.ax,B.M,D.eXv,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.FE,i,i,i)],s))}p.push(B.aA)
p.push(D.fw8)
return A.p(i,A.w(A.a([r,new A.D(B.MJ,A.w(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.P,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQG(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a8L,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f9M,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cfm(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9p(B.dT,u,"Not paid yet")
w=t.z5(null).length
v=w===0?B.b_:B.bx
return this.a9p(v,u,C.wP(t.x,!0))},
c2T(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9p(B.b_,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9p(B.b_,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a8L,u,u,u)
v=A.S(d).k("M<1,hd>")
v=A.C(new A.M(d,new C.c3N(),v),v.k("ak.E"))
return A.w(A.a([w,B.al,A.bV(B.bB,v,B.bs,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
a9p(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a8L,w,w,w),1),new A.dr(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dQ,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.baA.prototype={
a6(d,e){new A.VU(this.b,B.M,e,!0,3.5,null).a6(d,e)},
aw(d){return d.b!==this.b}}
C.aot.prototype={
U(){return new C.aCM(A.a([],x.bp))},
gdY(){return this.c}}
C.aCM.prototype={
a_(){this.a1()
this.IO()},
IO(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1R(t.a.c),$async$IO)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dHJ(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IO,v)},
aSC(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bl).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bj,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.bq:B.bl).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.b_c),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aSB(d){return this.aSC(d,null)},
Pt(d){return this.ciZ(d)},
ciZ(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pt=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GV:B.eI
w=7
return A.b(new A.hT().Ca(72,900,900,n),$async$Pt)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fi(),$async$Pt)
case 8:p=f
n=B.cJ.gct().aL(p)
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
if(n!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.u(o),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pt,v)},
b0d(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bl).j(0.18),B.q,1)
if(d)q=B.cM
else q=s.a.d.a?B.bq:B.bl
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cM
else u=s.a.d.a?B.bq:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cM,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ab,u,A.bM(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.W(B.cw,s.a.d.a?B.bq:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jJ,D.bu3,r,r,r)},
Da(d){return this.bzN(d)},
bzM(){return this.Da(null)},
bzN(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Da=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.aq(new A.ba(a4,B.b4,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jb(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.ab(p,2)}o=new A.aq(new A.ba(a4,B.b4,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.aq(new A.ba(a4,B.b4,B.aN),s)
if(a3){a4=new A.T(Date.now(),0,!1).bS(6048e8)
m=A.c1(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h1t(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wu?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",a4,new C.dHs(),new C.dHt(a2,t,a5,r,new C.dHu(a2,t),o,n,j),B.eL,!0,x.y),$async$Da)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d6(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.f2Y)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.f1D)
w=1
break}a1=A.fzr(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wu?"male":"female"
w=7
return A.b(A.ahG(a3,A.h9E(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Da)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wu?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gck(),a3.gcf(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)))a5.cMc(a2.a)
w=8
return A.b(A.ahG(t.a.c,a5),$async$Da)
case 8:case 5:w=9
return A.b(t.IO(),$async$Da)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Da,v)},
aTf(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cM.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cM
else s=(this.a.d.a?B.bq:B.bl).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aYs(d,18)
if(g)q=B.cM
else q=this.a.d.a?B.aP:B.av
return A.aF(!1,B.a2,!0,v,A.aK(!1,u,!0,A.p(p,A.B(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b7,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
S8(d){return this.cAH(d)},
cAH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$S8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",s,new C.dHM(),new C.dHN(t,d),B.hl,!0,x.y),$async$S8)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.T(s,0,!1)
case 4:w=7
return A.b(A.ahG(t.a.c,d),$async$S8)
case 7:w=8
return A.b(t.IO(),$async$S8)
case 8:case 1:return A.h(u,v)}})
return A.i($async$S8,v)},
Ps(d,e){return this.bKB(0,e)},
bKB(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ps=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l9(s,"Cancel","Delete",e.b+" \xb7 "+A.AP(e.c)+" will be removed from this device.","Delete this debt?"),$async$Ps)
case 3:if(!g){w=1
break}w=4
return A.b(C.fti(t.a.c,e.a),$async$Ps)
case 4:w=5
return A.b(t.IO(),$async$Ps)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Ps,v)},
aeV(d){return this.ccN(d)},
ccN(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bR(B.K,null,new C.dHG(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeV)
case 2:return A.h(null,v)}})
return A.i($async$aeV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eey
w=J.dJ(m.d,new C.dHO())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dHP())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cM(v,0,new C.dHQ())
w=A.m(18)
s=m.a.d.a
r=s?D.csH:D.ayL
q=A.I(s?B.cM.j(0.35):B.cM.j(0.18),B.q,1)
s=A.p(l,D.bUG,B.f,l,l,new A.o(B.cM.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a2,!0,A.m(12),A.aK(!1,A.m(12),!0,D.edX,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dHR(m),l,l,l,l,l,l,l),B.f,B.cM,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cwS("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AP(t)
r=A.a([A.p(l,A.w(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b6k(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.aih,l,l,l),B.aA],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e1:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bl).j(0.12),B.q,1)
n=A.p(l,D.bPz,B.f,l,l,new A.o(B.cM.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.w(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bwA,l,l,1/0))}else{w=m.gcif()
s=A.C(new A.M(v,w,A.S(v).k("M<1,t>")),x.l)
if(u.length!==0){q=A.a([B.al,new A.D(D.byg,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.S(u).k("M<1,t>")))
B.d.v(s,q)}B.d.v(r,s)}return A.w(r,B.ai,l,B.e,B.j,0,B.p)},
b6k(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bl).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cM
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.w(A.a([q,B.bA,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ew,u,u,u)},
cwS(d,e){return this.b6k(!1,d,e)},
cig(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z5(j).length,h=d.bfB()
if(d.x!=null){w=d.z5(j).length
v=w===0?B.cM:B.bx}else if(d.gTO())v=B.bx
else{if(h)w=B.cM
else w=k.a.d.a?B.bq:B.bl
v=w}if(d.x!=null){w=d.z5(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wP(u,!1)}else{u.toString
t="Paid "+C.wP(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wP(w,!1)+" \xb7 "+i+" missed":"Due "+C.wP(w,!1)}w=k.a.d.a?B.e1:B.c
u=A.m(18)
if(d.gTO()&&d.x==null)s=B.bx.j(0.35)
else s=(k.a.d.a?B.bq:B.bl).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lU
o=A.I(d.gTO()&&d.x==null?B.bx.j(0.45):B.cM.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h1t(d.d)
o=A.p(B.A,A.dd(C.aYs(A.fzr(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a4),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.dr(1,B.cn,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFB())B.d.v(n,A.a([B.ei,A.W(B.NF,B.cM.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cO,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.AP(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a2,!0,j,A.aK(!1,q,!0,new A.D(A1.ai3,A.B(A.a([o,B.bc,p,B.ab,A.w(A.a([n,B.bA,A.W(B.eC,(k.a.d.a?B.bq:B.bl).j(0.5),j,j,j,18)],m),B.dB,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dHI(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uk.prototype={}
C.akz.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bh
u=v?B.E:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aB(a0,A.p(a0,A.W(B.cw,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a4),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a5))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.ip,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.av2,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FU,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eN(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e_)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.btf,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cE:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.eYi)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vK,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lt,A.w(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hm,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.buu,a0,a0,a0,a0)}}
C.aUd.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bh?B.bh:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cE,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cO,n],m)
if(p.z)o.push(new A.D(B.vI,n,q))
return new A.D(B.d3,A.w(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.SM.prototype={
U(){return new C.beb()}}
C.beb.prototype={
gbYR(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.eet,D.eez],l)
for(w=0;w<8;++w){v=D.a2v[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.GE:B.C5
q=t===s
r=A.W(r,q?B.eE:B.bX,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bn,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.by(1,B.bd,new A.y(v.c,n,A6.DH,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ay(B.eE,2,B.q,-1)
s=new A.o(n,n,new A.bJ(p,p,p,p),new A.bk(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eG,A.w(A.a([new A.D(B.mx,new A.c9(B.aM,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DU(!0,new C.akz(v,q.d,q.e,new C.d7R(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d7S(o,v),n,n,n,n,n,n,!1,B.a5))}k.push(new A.D(D.buN,A.bH(D.fJw,new C.d7T(o,d),A.bn(B.b5,n,n,n,n,B.oo,n,n,new A.b7(A.m(16),B.X),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aX(0,1/0,0,m.a.b*0.9),A.cs(k,n,D.bz7,n,n,B.af,!0),n),!0,!1,B.ae,!0,!0)}}
C.ng.prototype={
ag(){var w=this
return A.G(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ac()],x.N,x.z)},
bcd(d,e,f){return new C.ng(this.a,e,d,f)}}
C.HE.prototype={
wn(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HE(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDN(d){var w=null
return this.wn(w,w,w,w,w,d,w,w,w,w,w,w)},
cI_(d){var w=null
return this.wn(w,w,w,w,d,w,w,w,w,w,w,w)},
bcb(d,e,f){var w=null
return this.wn(d,w,w,w,w,w,w,w,e,w,f,w)},
cIE(d){var w=null
return this.wn(w,w,w,w,w,w,d,w,w,w,w,w)},
cIN(d){var w=null
return this.wn(w,w,w,w,w,w,w,w,w,d,w,w)},
cHY(d){var w=null
return this.wn(w,w,w,d,w,w,w,w,w,w,w,w)},
cIP(d){var w=null
return this.wn(w,w,w,w,w,w,w,w,w,w,w,d)},
cHV(d){var w=null
return this.wn(w,w,d,w,w,w,w,w,w,w,w,w)},
cHQ(d){var w=null
return this.wn(w,d,w,w,w,w,w,w,w,w,w,w)},
FK(d){var w=null
return this.wn(w,w,w,w,w,w,w,d,w,w,w,w)},
cIX(d,e,f,g,h,i,j,k,l,m,n){return this.wn(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.G(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cFz(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bNW(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CP.ger(D.CP))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a44)
q=l.$2("frame",D.a3u)
l=l.$2("texture",D.a3q)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cIX(p,u,t,q,r,A.qU(d.h(0,"ribbon"))?A.G7(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Ze.prototype={
U(){return new C.azQ(A.a([],x.I),D.Nd)},
gdY(){return this.c}}
C.azQ.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zH(0,1)
w=$.ax()
v.z=new A.aq(B.at,w)
v.Q=new A.aq(B.at,w)
v.l2()
w=v.a
C.bB6(w.c,w.d).bK(new C.d8x(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.ax()
u.S$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.S$=w
u.P$=0
v.a2()},
l2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KQ(s.c,s.d),$async$l2)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d8l(t,r))
t.avF()
case 1:return A.h(u,v)}})
return A.i($async$l2,v)},
gasg(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
avF(){var w,v,u=this.gasg(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saU(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saU(0,w==null?"":w)},
cbd(d){this.m(new C.d8i(this,d))
this.avF()},
Np(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Np=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.ng(B.o.u(1000*Date.now()),"Untitled page","",new A.T(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQk(r.c,r.d,s),$async$Np)
case 3:w=4
return A.b(t.l2(),$async$Np)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qm(t.d,new C.d7U(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d7V(t,p))
t.avF()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bb(p+1,B.ct,B.kA),$async$Np)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
AR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gasg()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQk(o.c,o.d,new C.ng(s,r,q,new A.T(p,0,!1))),$async$AR)
case 3:w=4
return A.b(t.l2(),$async$AR)
case 4:if(t.c==null){w=1
break}t.m(new C.d8m(t))
case 1:return A.h(u,v)}})
return A.i($async$AR,v)},
O3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gasg()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cd(null,null,!0,null,new C.d82(r),s,null,!0,!0,x.y),$async$O3)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAU(s.c,s.d,r.a),$async$O3)
case 4:t.m(new C.d83(t))
w=5
return A.b(t.l2(),$async$O3)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TR(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$O3,v)},
ys(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ys=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AR(),$async$ys)
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
return A.b(C.R_(s,r.r,o,p,q),$async$ys)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a3(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hqi(s,r.x,r.r),$async$ys)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KQ(s.c,s.d),$async$ys)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.ng(""+(m+k),q,B.a.i(j.b),new A.T(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AY(r.c,r.d,l),$async$ys)
case 11:w=12
return A.b(t.l2(),$async$ys)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ys,v)},
a0u(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AR(),$async$a0u)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyq(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.z6,new C.d8j(t),new C.d8k())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new G.my("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new G.my(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(G.h37(o,new G.ro(s,r,"",p,new G.uC(q.d,null,null,null,null,"","","")),null),$async$a0u)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0u,v)},
NN(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AR(),$async$NN)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bR(D.adC,null,new C.d7Z(t),s,!0,!0,!0,H.a72,!1,!1,x.N),$async$NN)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cI_(r)
t.m(new C.d8_(t,q))
s=t.a
w=7
return A.b(C.Rz(s.c,s.d,q),$async$NN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
X2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(D.adC,null,new C.d84(t),r,!0,!0,!0,H.a72,!1,!1,x.e),$async$X2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d85(t,s))
r=t.a
w=4
return A.b(C.Rz(r.c,r.d,s),$async$X2)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bb(0,B.dY,B.nb)
case 1:return A.h(u,v)}})
return A.i($async$X2,v)},
bQ2(d){var w=d.bU(),v=B.a.aY(B.o.u(w.gcf()),2,"0"),u=B.a.aY(B.o.u(w.gcv()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyq(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bY6()
if(r.e)w=D.acr
else if(J.cn(r.d)){w=r.y
v=r.gyq(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f85,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(U.aji,new C.Yx(w,v,0,q),q),q),B.bv,t,B.al,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kt.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.eT4,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dM.j(0.45),B.J,18)],x.V),F.wk,B.n),q,q,q,q,B.MX,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcEE(),q,q,q,q,q,q,!1,B.a5))
w.push(B.R)
w.push(A.ho(D.bLM,D.fIZ,r.gaMy(),q))
B.d.v(u,w)}w=A.at(A.cc(A.w(u,B.m,q,B.e,B.P,0,B.p),B.r,q,B.y,q,B.eB,q,q,B.af),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kt.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dO:B.Av
u=A.w(A.a([new A.D(D.bvR,w,q),A.E(A.IZ(v,new C.d8v(r),J.ad(r.d)+1,q,r.gcbc(),u,B.aM),1),r.bCG()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c4(q,D.aeZ,new A.an(B.V,q,B.b2,B.r,A.a([D.aLU,A.bm(!0,A.w(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0)],v),q),q,!1,!1,q,q)},
bY6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JX(B.e2,"AI",h.gbAz(),!0))
if(h.a.f)f.push(new C.JX(B.nl,"Cover",h.gbLa(),!1))
if(h.a.f)f.push(new C.JX(B.yN,"Header",h.gbGb(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JX(B.ug,"Print",h.gckh(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hD:B.j9
t=v?"Save":"Edit"
f.push(new C.JX(u,t,v?h.gcqz():new C.d8f(h),!1))}if(h.a.f)f.push(new C.JX(B.hC,"Add page",h.gaMy(),!1))
v=C.hmn(h.y.Q)
u=h.gyq(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dvr
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(F.k2.j(0.5),1,B.q,-1)
j=A.p(g,A.W(l.a,D.kt,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bJ(i,i,i,i),new A.bk(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kt.j(0.85)
p.push(new A.by(1,B.bd,A.aB(B.ch,A.w(A.a([k,B.bA,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a5),g))}return new C.akz(v,u,t+" \xb7 "+s+" "+r,new C.d8g(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AR(),$async$zT)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=G.a25(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.cd(null,null,!0,null,new C.d7W(t,p),s,null,!0,!0,x.N),$async$zT)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.ys(),$async$zT)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DN(),$async$zT)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fm("Swahili (Kiswahili)",!0),$async$zT)
case 18:w=16
break
case 17:w=19
return A.b(t.cBi(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zT)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zT,v)},
YV(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(F.k2.j(0.3),B.q,1),r=x.p
return new A.D(B.cu,A.aK(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,F.wk,B.a4),w,42,w,w,w,w,w,42),B.bc,A.E(A.w(A.a([A.d(f,w,w,w,w,w,w,Z.Jv,w,w,w),A.d(g,w,w,w,w,w,w,O.DJ,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d8h(d,h),w,w,w,w,w,w,w),w)},
DN(){return this.bPx()},
bPx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DN=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cd(null,null,!0,null,new C.d88(r),a7,null,!0,!0,x.ei),$async$DN)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eK("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cd(null,null,!1,null,new C.d89(o),a7,null,!0,!0,x.H).fm(new C.d8a(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ca(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.z6[a1]
J.ca(j,i.a)}w=8
return A.b(C.agQ(a0,a7,new C.d8b(o),d,l,e,j),$async$DN)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ab(a8)
n=A.u(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a3(l,!0).eG()
l=o
l.si2($.ax())
J.aQM(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.r(p,a4)
a7=m.b.h(0,a4).a
a7=j.bcd(m.b.h(0,a4).b,a7,new A.T(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AY(j.c,j.d,l),$async$DN)
case 11:w=12
return A.b(r.l2(),$async$DN)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.z6[a1].a)
a5=l.cFz(j,12,a7)
l=r.a
w=15
return A.b(C.Rz(l.c,l.d,a5),$async$DN)
case 15:if(r.c!=null)r.m(new C.d8c(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bb(0,B.dY,B.nb)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.ct6("Undo",new C.d8d(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ek,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DN,v)},
Fm(d,e){return this.cBj(d,e)},
cBi(d){return this.Fm(d,!1)},
cBj(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fm=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eK("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cd(null,null,!1,null,new C.d8o(a0),k,null,!0,!0,x.H).fm(new C.d8p(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ca(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(G.a2i(m,new C.d8q(a0)),$async$Fm)
case 10:w=8
break
case 9:w=11
return A.b(C.bCA(new C.d8r(a0),m,a2),$async$Fm)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ab(a1)
q=A.u(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a3(o,!0).eG()
o=a0
o.si2($.ax())
J.aQM(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bcd(J.r(p,g).b,j.a,new A.T(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AY(k.c,k.d,o),$async$Fm)
case 12:w=13
return A.b(r.l2(),$async$Fm)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.ct6("Undo",new C.d8s(r,d),null),null,null,null,null,B.r,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fm,v)},
bCG(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d7X(v):u
r=A.aI(u,u,u,u,A.W(D.bHz,s?D.kt:B.aZ,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ho(A.W(B.vZ,B.Fh,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Fh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbKL(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kt.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d7Y(v):u
return A.bm(!0,new A.D(D.bvE,A.B(A.a([r,s,A.aI(u,u,u,u,A.W(B.eC,t<J.ad(v.d)?D.kt:B.aZ,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ae,!0,!1)}}
C.Zi.prototype={
U(){return new C.bew(new A.aq(B.at,$.ax()))}}
C.bew.prototype={
ga1C(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.S$=$.ax()
w.P$=0
this.a2()},
gbOe(){var w,v=this.ga1C()
A:{if("cover"===v){w=D.cZi
break A}if("book"===v){w=D.cV_
break A}w=D.dnZ
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=F.k2.j(0.5),n=x.p,m=A.B(A.a([D.dvs,B.as,D.bBc,A.aI(q,q,q,q,B.ly,q,q,q,new C.dah(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j_(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.dai(r),r.ga1C()==="page",q,q,q,q))
if(r.a.d)l.push(A.j_(q,q,q,D.fDC,q,new C.daj(r),r.ga1C()==="book",q,q,q,q))
l.push(A.j_(q,q,q,D.fqE,q,new C.dak(r),r.ga1C()==="cover",q,q,q,q))
l=A.bV(B.bB,l,B.bs,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.U,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.X),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kP,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dd,!0,B.a6,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbOe(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mN(q,B.c.j(0.08),new A.y(s,q,B.Js,q,q,q,q,q,q,q,q,q),B.he,new C.dal(r,s),q,q,q,q))}return A.eM(q,F.B0,A.cc(A.w(A.a([m,B.R,D.fGU,B.al,l,B.ac,k,B.N,A.bV(B.bB,w,B.bs,6,6),B.aA,A.dp(D.bLJ,D.fHG,new C.dam(r,d),A.bn(B.b5,q,q,q,q,B.oo,q,q,new A.b7(A.m(16),B.X),q,q,q)),B.au,D.fBR],n),B.E,q,B.e,B.P,0,B.p),B.r,q,B.y,q,B.fa,q,q,B.af),q,q,q,D.aj_,B.d4,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.Zg.prototype={
U(){return new C.azR(A.a([],x.Y))},
gdY(){return this.c}}
C.aez.prototype={}
C.azR.prototype={
a_(){this.a1()
this.l2()},
l2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.R2(p.c,p.d),$async$l2)
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
return A.b(C.bB6(r.c,q),$async$l2)
case 6:j=e
i=J
w=7
return A.b(C.KQ(t.a.c,q),$async$l2)
case 7:m.push(new l.aez(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d8M(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l2,v)},
b7A(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Q9(d,e){return this.ccL(0,e)},
ccL(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a3(s,!1).cg(A.e_(new C.d8L(u,e),!0,null,x.y)),$async$Q9)
case 2:t=g
w=3
return A.b(u.l2(),$async$Q9)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aPr)
return A.h(null,v)}})
return A.i($async$Q9,v)},
Fp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aPn)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ag9(s.c,s.d),$async$Fp)
case 5:q=e
w=6
return A.b(t.l2(),$async$Fp)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Q9(0,B.d.fZ(t.d,new C.d8Q(q))),$async$Fp)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.R_(p,s.f,r,n,o),$async$Fp)
case 10:m=e
w=11
return A.b(t.l2(),$async$Fp)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aPr)
case 1:return A.h(u,v)}})
return A.i($async$Fp,v)},
PE(d,e){return this.cog(0,e)},
cog(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cd(null,null,!0,null,new C.d8P(t,e),s,null,!0,!0,x.y),$async$PE)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2u(s.c,s.d,e.a),$async$PE)
case 4:w=5
return A.b(t.l2(),$async$PE)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PE,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bCJ(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(F.k2.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fK(0.7142857142857143,A.p(n,A.w(A.a([D.dvt,B.ac,D.edA,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kt.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcEA(),n,n,n,n,n,n,!1,B.a5))}w=A.m(22)
v=A.I(F.k2.j(0.85),B.q,1.6)
s=A.aB(n,A.p(n,D.bTu,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(F.k2.j(0.6),B.q,1),n,n,n,B.a4),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d8R(d),n,n,n,n,n,n,!1,B.a5)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(F.k2.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bBA,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f77,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h0,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bZn,B.n),n,n,n,Aq.MH,D.btJ,n,n,n)
if(o.e)k=D.acr
else k=k.length===0?D.b6H:A.cA(new C.d8S(k))
return A.c4(n,D.aeZ,new A.an(B.V,n,B.b2,B.r,A.a([D.aLU,A.bm(!0,A.w(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0)],l),n),n,!1,!1,n,n)},
bCJ(d){var w,v,u=this,t=null,s=u.b7A(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.eN(B.A,new A.a7(300,420,new C.Yx(d.b,s,r,t),t),B.f,B.dw),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bSO,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.aZ,B.q,1),t,t,t,B.a4),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d8J(u,d),t,t,t,t,t,t,!1,B.a5),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.f6H,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.w(A.a([new A.fK(0.7142857142857143,new A.an(B.V,t,B.aa,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kt.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d8K(u,d),t,t,t,t,t,t,!1,B.a5)}}
C.JX.prototype={}
C.Yx.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.z6,new C.cHq(m),new C.cHr()),j=m.c,i=D.CP.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mG:B.b7
v=new C.cHs(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.eaU,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b3(l,l,l,new C.bbM(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cM(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bk(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ajj,8,0.85,2.2),v.$4(D.byz,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ajj,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.byv,A.b3(l,l,l,new C.bbD(h,l),B.az),l),0,0,0))
r=A.W(D.axJ[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.av2,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cE,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bS(0,new A.D(D.bz_,A.w(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGL(l),D.eXo),l,l,l,46,0,l))
return A.p(l,A.bv(D.ab6,new A.an(B.V,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.ab6,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbM.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.ez()
f.dr(11)
switch(this.b){case"plain":return
case"linen":$.X()
w=A.N()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.L()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.X()
q=A.N()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.L()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.am()
l=f.am()
k=f.am()
$.X()
j=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.am()*0.5).gp(0)
r=j.L()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.X()
j=A.a([],l)
h=new A.aO(k.r,B.ao,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.L()
k=h.gbE().a.snapshot()
o.drawPath((h.e=new A.cC(k)).a,r)
r.delete()}break
default:$.X()
w=A.N()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.am()
m=f.am()
l=f.am()
r=w.L()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.X()
g=A.N()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.am()
m=f.am()
l=f.am()
r=g.L()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aw(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bbD.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ag
k.c=2.4
k.d=B.bV
for(w=e.a,v=e.b,v=[D.eO6,new A.cv([w,0,-1,1]),new A.cv([0,v,1,-1]),new A.cv([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ao,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.L()
s=n.gbE().a.snapshot()
w.drawPath((n.e=new A.cC(s)).a,m)
m.delete()
s=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.L()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aw(d){return!d.b.A(0,this.b)}}
C.ul.prototype={}
C.YP.prototype={
U(){return new C.bbK()}}
C.bbK.prototype={
go5(){var w=this.d
return w===$?this.d=this.a.c:w},
gyq(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.aq(new A.ba(w.b,B.b4,B.aN),$.ax())}return v},
gaAZ(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.aq(new A.ba(w.c,B.b4,B.aN),$.ax())}return v},
gaqN(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.aq(new A.ba(w.y,B.b4,B.aN),$.ax())}return v},
t(){var w=this,v=w.gyq(0),u=v.S$=$.ax()
v.P$=0
v=w.gaAZ()
v.S$=u
v.P$=0
v=w.gaqN()
v.S$=u
v.P$=0
w.a2()},
ars(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j_(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d_R(this,f,u),e===u,s,s,s,s))}return A.bV(B.bB,r,B.bs,6,8)},
ax6(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.X),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lG,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go5(),a0=f.gyq(0),a1=a0.a.a,a2=f.gaAZ(),a3=a2.a.a,a4=f.gaqN(),a5=d.bcb(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a7(190,260,A.eN(B.A,new A.a7(270,370,new C.Yx(a5,d,f.a.e,e),e),B.f,B.dw),e),e,e,e)
a0=A.aL(e,B.U,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.ax6("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d0f(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dd,!0,B.a6,e,B.an,e,e,e,e)
a2=A.aL(e,B.U,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.ax6("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d0g(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dd,!0,B.a6,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.z6[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aZ
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bJ(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a4),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.w(A.a([p,B.cO,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d0h(f,t),e,e,e,e,e,e,!1,B.a5))}v=A.bV(B.bB,v,B.bs,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eE:B.K,2,B.q,-1)
q.push(A.aB(e,A.p(e,A.W(D.axJ[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bJ(o,o,o,o),new A.bk(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d0i(f,n),e,e,e,e,e,e,!1,B.a5))}q=A.bV(B.bB,q,B.bs,8,8)
a4=A.aL(e,B.U,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.ax6("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d0j(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dd,!0,B.a6,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,L.v5,e,e,e)
m=A.a([],w)
for(l=D.CP.gdR(D.CP),l=l.gae(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eE:B.aZ
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bJ(o,o,o,o),e,e,e,B.a4),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.w(A.a([j,B.bA,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d0k(f,k),e,e,e,e,e,e,!1,B.a5))}m=A.bV(B.bB,m,B.bs,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,L.v5,e,e,e)
k=f.go5()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aX(0,1/0,0,a1.a.b*0.92),A.cs(A.a([D.fBj,B.ac,d,B.aO,a0,B.R,a2,B.aA,D.fHs,B.N,v,B.aA,D.fBs,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.l2(e,9,""+B.k.V(f.go5().f),36,18,new C.d0l(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,L.v5,e,e,e),B.al,f.ars(D.a44,f.go5().r,new C.d0m(f),D.dra),B.ac,A.d("BORDER",e,e,e,e,e,e,L.v5,e,e,e),B.al,f.ars(D.a3u,f.go5().w,new C.d0n(f),D.drg),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,L.v5,e,e,e),B.al,f.ars(D.a3q,f.go5().x,new C.d0p(f),D.dsJ),B.al,A.iH(e,B.b5,e,B.ae,e,new C.d0q(f),e,e,e,D.fvG,f.go5().z),B.bv,A.bH(D.fA4,new C.d0r(f,a6),A.bn(B.b5,e,e,e,e,B.oo,e,e,new A.b7(A.m(16),B.X),e,e,e))],w),e,W.aiQ,e,e,B.af,!0),e),!0,!1,B.ae,!0,!0),e)}}
C.aGL.prototype={
a6(d,e){var w,v,u,t=new A.aO($.X().r,B.ao,null,null,A.a([],x.v))
t.F(new A.b5(0,0))
w=e.a
t.F(new A.ap(w,0))
v=e.b
t.F(new A.ap(w,v))
t.F(new A.ap(w/2,v-12))
t.F(new A.ap(0,v))
t.F(new A.bE())
u=A.N()
u.sau(D.c_3.aA(0,new A.a9(0,0,0+w,0+v)))
d.aS(t,u)},
aw(d){return!1}}
C.bgZ.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.N()
w.sau(D.bZ3.aA(0,new A.a9(0,0,a3,a4)))
a5.b1(new A.a9(0,0,a3,a4),w)
v=B.k.dk(a2/112)
u=new A.ez()
u.dr(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.am()*20
l=56+u.am()*40
k=D.cZh[u.ar(9)]
j=u.ar(14)
J.bx(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bz(i,B.hd)
g=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sau(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.L()
w.drawRRect(A.eU(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
e.r=F.k2.j(0.55).gp(0)
d=e.L()
w.drawRect(A.bW(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
j.r=F.k2.j(0.4).gp(0)
d=j.L()
w.drawRect(A.bW(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.ar(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
p.sau(D.bYq.aA(0,new A.a9(0,r,a3,q)))
d=p.L()
w.drawRect(A.bW(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.lC
d=p.L()
w.drawRect(A.bW(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.bad.j(0.72).gp(0)
a5.b1(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sau(new A.c_(B.A,0.5,B.x,a0,0,A.a([D.bhp.j(0.22),B.K],t),a0,a0).aA(0,A.bU(new A.x(w,a2),a1)))
a5.af(new A.x(w,a2),a1,a4)},
aw(d){return!1}}
C.b9Z.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aM(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cM(14,w*2,v*2.2,v*2,o,o,new A.kS(new A.o(A.ar(D.kt,D.blY,w/4),o,new A.bJ(B.X,new A.ay(B.w.j(0.12),1,B.q,-1),B.X,B.X),B.KF,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aHy,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(F.k2.j(0.6),o,o,new A.bk(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.w(t,B.m,o,B.rx,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aZW,u,D.c_1,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGL(o),D.eXj),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aUd(p.y,r,K.iG,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aL(o,B.U,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.eD,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,K.iG.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fkU,!0,B.a6,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,K.iG.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aL(o,B.U,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.eD,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,K.iG.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fbU,!0,B.a6,B.zV,B.an,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fkM,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,K.iG.j(0.5),o,o,o,o,o,o,o,o,11,B.cE,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.F6.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.F6.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.F6.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,K.iG.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XO(A.d1(A.a([A.d1(o,o,o,o,o,o,o,o,o,D.ff0,B.a.ap(k,0,1)),A.d1(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,K.iG.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.w(n,B.E,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.af)}s.push(A.E(n,1))
s.push(new A.D(B.i7,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,K.iG.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bv(B.KF,new A.an(B.V,o,B.aa,B.r,A.a([t,new A.D(D.by1,A.w(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.KF,v,D.c_z,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.V,o,B.aa,B.r,l,o)}}
C.PM.prototype={}
C.akA.prototype={
U(){return new C.akB(D.aWy)},
gd7(){return this.d}}
C.a0v.prototype={
a3(){return"_Step."+this.b}}
C.akB.prototype={
gwO(){var w,v,u=this,t=u.e
if(t===$){w=u.a
v=C.h0Q(w.c,6,w.e,!1)
u.e!==$&&A.bF()
u.e=v
t=v}return t},
gi7(d){var w,v=this,u=v.f
if(u===$){w=C.akD(v.a.c)
v.f!==$&&A.bF()
v.f=w
u=w}return u},
ghx(){var w,v=this.r
if(v===$){w=new E.vx(0,0.3,340,D.fOG,$.ax())
w.e=140
w.f=700
w.w=0.06
w.x=1.2
w.q9(!0)
this.r!==$&&A.bF()
this.r=w
v=w}return v},
galk(){var w=this.gi7(0)
return w.gaEE()==null?"Babu":B.a.i(w.gaEE().b)},
a_(){var w=this
w.a1()
w.cy="Come closer, my children. I am "+w.galk()+", elder of the "+w.a.c.b+" family. Tonight, by this fire, we remember who we are."
w.w=A.dq(B.Mq,new C.bO2(w))},
t(){var w=this.w
if(w!=null)w.a4(0)
w=this.ghx()
w.S$=$.ax()
w.P$=0
this.a2()},
boR(){return this.b78()},
b78(){var w=this,v=w.gwO()[w.y],u=v.e
w.m(new C.bNZ(w,u.length!==0?u:v.d))},
cFG(){return this.m(new C.bO1(this))},
aCE(d){var w,v,u,t,s=this
if(s.x!==D.Vu)return
w=s.gwO()
v=s.y
u=d===w[v].c
if(u){++s.z
w=++s.Q
s.as=Math.max(s.as,w)
s.ch=Math.min(1,s.ch+0.13)
s.CW=s.cx+2.2}else{s.Q=0
s.ch=Math.max(0.18,s.ch-0.08)}t=new A.ez()
t.dr(v*7+d)
s.m(new C.bO0(s,d,u,t))},
nS(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$nS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.y
q=t.gwO().length
w=r+1>=q?3:4
break
case 3:s=C.h3h(t.z,t.as,q)
t.m(new C.bO3(t,s))
w=5
return A.b(C.M9(t.a.d,s),$async$nS)
case 5:t.ay=f
r=t.a
w=6
return A.b(C.Ma(r.d,r.c.a,"fire",t.z*10),$async$nS)
case 6:t.db=f
if(t.c!=null)t.m(new C.bO4())
w=1
break
case 4:++t.y
t.b78()
case 1:return A.h(u,v)}})
return A.i($async$nS,v)},
c0v(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.cx=d
w=A.a([],x.E)
v=new E.fe(w)
u=d<j.CW
t=j.x
s=t===D.aWz||t===D.Vu||t===D.aWA||t===D.aWy
for(t=d*9,r=0;r<5;++r){q=u&&r>0?Math.max(0,Math.sin(t+r*1.3))*9:0
C.hQj(v,D.cX3[r],q,d,s)}t=j.ch
p=34+56*t
o=17+13*t
n=Math.sin(d*11)*4+Math.sin(d*17)*3
t=d*3
m=d*4
v.qF(H.t2,new E.q(Math.sin(t)*4,6+p+n,Math.cos(m)*4),o,B.fn,1,8)
v.qF(H.t2,new E.q(Math.sin(m+1)*4,6+p*0.8+n,Math.cos(t)*4),o*0.7,B.aS,1,8)
v.qF(H.t2,new E.q(0,6+p*0.5+n*0.5,0),o*0.4,B.fL,1,6)
for(t=d*0.7,m=d*2,r=0;r<12;++r){l=B.k.E(t+r/12,1)
k=r*2.4
v.aN(new E.q(Math.cos(k)*14*l+Math.sin(m+r)*5,10+l*(90+60*j.ch),Math.sin(k)*14*l),D.h_y,B.bL)}return w},
B(d){var w,v,u=this,t=null,s=u.d
if(s===$){w=C.i0t()
u.d!==$&&A.bF()
u.d=w
s=w}v=x.p
return A.c4(t,D.Wv,new A.an(B.V,t,B.aa,B.r,A.a([A.bS(0,E.cpH(D.bn6,u.ghx(),u.gc0u(),t,0,t,t,t,s,!1),0,0,0),A.bm(!0,A.w(A.a([u.c7o(0),B.b0,u.bNt()],v),B.m,t,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0)],v),t),t,!1,!1,t,t)},
c7o(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Ou,s,s,s,new C.bO_(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gwO().length;++w){v=t.y
if(w<v||t.x===D.aah)v=D.e0
else v=w===v?B.c:B.aZ
u=new A.aQ(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bk(u,u,u,u),s,s,B.n),s,7,s,D.btt,s,s,s,22))}p=A.E(A.w(A.a([D.fsu,A.B(p,B.m,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.m(14)
u=A.I(B.fn,B.q,1)
return new A.D(D.bzb,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.ch*100)+"%",s,s,s,s,s,s,B.iY,s,s,s),B.f,s,s,new A.o(B.aW,s,u,v,s,s,B.n),s,s,s,s,B.h0,s,s,s)],q),B.m,s,B.e,B.j,0,s,s),s)},
bNt(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gi7(0).gaEE()
if(h==null)w=1
else w=h.c===D.q2?0:1
v=D.B3.j(0.96)
u=A.m(22)
t=A.I(D.e0,B.q,3)
s=A.b3(i,i,i,new C.bml(w,i),B.az)
r=j.x
if(r===D.aah)r="Elder "+j.galk()
else r=r===D.Vu?j.galk()+" asks":"Elder "+j.galk()
q=x.p
r=A.B(A.a([new A.a7(62,62,s,i),B.as,A.E(A.w(A.a([A.d(r,i,i,i,i,i,i,D.f9g,i,i,i),B.bA,A.d(j.cy,i,i,i,i,i,i,D.fc2,i,i,i)],q),B.E,i,B.e,B.j,0,B.p),1)],q),B.E,i,B.e,B.j,0,i,i)
switch(j.x.a){case 0:s=A.at(j.a9_("Sit down by the fire",j.gboQ()),i,i,i)
break
case 1:s=A.at(j.a9_("Ask me, Elder",j.gcFF()),i,i,i)
break
case 2:s=A.a([],q)
for(p=0;o=j.gwO()[j.y].b,p<o.length;++p){n=new A.aQ(14,14)
m=new A.ay(D.oI,2.5,B.q,-1)
s.push(A.aB(i,A.p(i,new A.y(o[p],i,D.fbr,i,B.L,i,i,i,i,i,i,i),B.f,i,D.b14,new A.o(D.bmm,i,new A.bJ(m,m,m,m),new A.bk(n,n,n,n),i,i,B.n),i,i,i,i,A5.y3,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bNX(j,p),i,i,i,i,i,i,!1,B.a5))}s=A.bV(B.bB,s,B.bs,8,8)
break
case 3:s=j.dx
o=s?B.l3:Ag.amb
o=A.W(o,s?B.eg:D.oI,i,i,i,i)
n=s?"The fire grows!":"Listen and learn."
n=A.E(A.d(n,i,i,i,i,i,i,A.l(i,i,s?B.eg:D.oI,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
s=j.y+1>=j.gwO().length?"Finish":"Next story"
s=A.B(A.a([o,B.ab,n,j.a9_(s,j.gt2(j))],q),B.m,i,B.e,B.j,0,i,i)
break
case 4:s=A.a([A.d(""+j.z+" of "+j.gwO().length+" right  \xb7  +"+j.ax+" \u2b50",i,i,i,i,i,i,D.fdI,i,i,i)],q)
o=j.ay
if(o>0){o=C.fqV(o)
n=C.fqV(j.ay)
l=j.ay
k=j.db?" \xb7 \ud83c\udfc6 new record!":""
s.push(A.d(o.b+" "+n.a+" \xb7 "+l+" stars"+k,i,i,i,i,i,i,D.aRS,i,i,i))}s.push(B.N)
s.push(j.a9_("Back to the games",new C.bNY(j)))
s=A.w(s,B.m,i,B.e,B.j,0,B.p)
break
default:s=i}return A.p(i,A.w(A.a([r,B.R,s],q),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(v,i,t,u,D.dlD,i,B.n),i,i,i,B.FD,B.bj,i,i,i)},
a9_(d,e){var w=null,v=A.m(16),u=A.I(D.e0,B.q,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,Z.Jv,w,w,w),B.f,w,w,new A.o(D.oI,w,u,v,w,w,B.n),w,w,w,w,D.bwV,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a5)}}
C.bml.prototype={
a6(d,e){An.h2W(d,e.ef(B.J),e.gdG()*0.45,this.b,0,0.4)},
aw(d){return d.b!==this.b}}
C.le.prototype={}
C.bOh.prototype={
bxJ(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aP()
this.c=s},
akq(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aW(r,new C.bOi())
return r},
aKN(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
boH(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aEh(d){var w,v,u=A.aY(x.N),t=d,s=0
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
gaEE(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aW(w,new C.bOj(this))
return B.d.gH(w)}}
C.aX9.prototype={}
C.asF.prototype={}
C.z3.prototype={}
C.ajw.prototype={
gaDs(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bJa(),A.S(w).k("Z<1>")).gK(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ag(){var w=this
return A.G(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.LV.prototype={
ganL(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(t.gaDs(0))s.push(t)}return s},
ag(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.X)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
p.push(A.G(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.G(["id",this.a,"title",q,"qs",p],u,t)},
cWl(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.ganL(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.L)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.le(B.a.i(s.a),p,B.d.cD(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.a5k.prototype={
B(d){var w=null
return new A.a7(1/0,this.c,A.b3(w,w,w,new C.bgF(w),B.az),w)}}
C.bgF.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.des[B.o.E(m,6)]
j=$.X()
i=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
i.r=k.gp(0)
h=i.L()
t.drawRect(A.bW(new A.a9(l,0,l+v,u)),h)
h.delete()
if(B.o.E(m,3)===0){i=A.a([],n)
g=new A.aO(j.r,B.ao,null,null,i)
j=l+q
i.push(new A.b5(j,f))
i.push(new A.ap(l+o,r))
i.push(new A.ap(j,p))
i.push(new A.ap(l+s,r))
i.push(new A.bE())
j=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
j.r=B.c.j(0.85).gp(0)
h=j.L()
j=g.gbE().a.snapshot()
t.drawPath((g.e=new A.cC(j)).a,h)
h.delete()}++m}},
aw(d){return!1}}
C.FJ.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Ou,w,w,w,new C.de8(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.f7b,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Wv,A.p(w,A.bm(!0,A.w(A.a([D.bX3,new A.D(D.bze,A.B(u,B.m,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),B.f,w,w,D.b2F,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.a0Y.prototype={
B(d){var w=null,v=this.d,u=C.fqV(v),t=C.i39(v),s=B.c.j(0.08),r=A.m(18),q=A.I(D.e0.j(0.6),B.q,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.f9C,w,w,w)],x.p)
if(this.e)p.push(D.eeA)
p.push(B.al)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fJ,w,w,w))
if(t!=null)p.push(new A.D(B.tS,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,O.DJ,w,w,w),w))
return A.p(w,A.w(p,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bC,w,w,w)}}
C.V6.prototype={
U(){return new C.bji(A.U(x.N,x.S),B.o.E(Date.now(),1e5))},
cSk(d){return this.f.$1(d)},
gdY(){return this.d}}
C.bji.prototype={
gS9(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a1()
this.OV()},
OV(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$OV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bOy(u.a.d),$async$OV)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<5)){w=5
break}r=D.cev[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bOx(p,(o===$?u.d=q.c:o).a,r),$async$OV)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dTz(u,n))
return A.h(null,v)}})
return A.i($async$OV,v)},
AG(d){return this.cjs(d)},
cjs(d){var w=0,v=A.j(x.H),u=this,t
var $async$AG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a3(t,!1).cg(A.e_(new C.dTA(d),!1,null,x.H)),$async$AG)
case 2:u.r=B.o.E(Date.now(),1e5)
if(u.c!=null)u.OV()
return A.h(null,v)}})
return A.i($async$AG,v)},
gb3s(){var w,v,u,t=C.akD(this.gS9()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)s.push(B.a.i(w[u].b))
return s},
a1t(d){return this.cqE(d)},
cqE(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.X)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.L)(d),++s)r.push(d[s].ag())
w=2
return A.b(u.a.cSk(r),$async$a1t)
case 2:if(u.c!=null)u.m(new C.dTB(u,r))
return A.h(null,v)}})
return A.i($async$a1t,v)},
Od(d){return this.bN_(d)},
bN_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Od=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h0E(t.gS9())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.LV("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a3(s,!1).cg(A.e_(new C.dTx(q),!1,null,r)),$async$Od)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.L)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bf(j,new C.dTy(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a1t(A.d0(s,0,A.dB(2,"count",x.S),r).dB(0)),$async$Od)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Od,v)},
WY(d,e){return this.bKC(0,e)},
bKC(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$WY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cd(null,null,!0,null,new C.dTw(e),o,null,!0,!0,x.y),$async$WY)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h0E(u.gS9()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.L)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a1t(o),$async$WY)
case 5:case 3:return A.h(null,v)}})
return A.i($async$WY,v)},
are(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dTt(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.I(B.aZ,B.q,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.TV,p,p,p),B.b0],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.f82,p,p,p),B.f,p,p,new A.o(B.i5,p,p,q,p,p,B.n),p,p,p,p,B.Bz,p,p,p))
return A.aB(p,A.dd(A.p(p,A.w(A.a([A.B(r,B.m,p,B.e,B.j,0,p,p),B.b0,A.d(e,p,2,p,p,p,p,D.ffz,p,p,p),B.cO,A.d(f,p,3,B.a1,p,p,p,D.f8J,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a8(B.ax,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.y2,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a5)},
ard(d,e,f,g,h,i){return this.are(d,e,f,g,h,i,null)},
B(a1){var w,v,u,t,s=this,r=null,q=C.akD(s.gS9()),p=s.gS9(),o=C.fqV(s.e),n=C.h0E(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dTC(s),k=C.hpU(p,1).length,j=C.hmZ(p,1).length,i=B.c.j(0.07),h=A.m(20),g=A.I(D.e0.j(0.5),B.q,1),f=A.d(o.b,r,r,r,r,r,r,M.a8C,r,r,r),e=A.d(o.a,r,r,r,r,r,r,D.fda,r,r,r),d=q.b.length,a0=x.p
h=A.p(r,A.B(A.a([f,B.bc,A.E(A.w(A.a([e,A.d(d>=3?"The games are made from the "+d+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,M.a8z,r,r,r)],a0),B.E,r,B.e,B.j,0,B.p),1),A.w(A.a([A.d(""+s.e,r,r,r,r,r,r,B.t_,r,r,r),D.fB6],a0),B.m,r,B.e,B.j,0,B.p)],a0),B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(i,r,g,h,r,r,B.n),r,r,r,r,B.bC,r,r,r)
g=s.ard("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.dTD(s,p),l.$1("kahoot"))
i=s.ard("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.oI,new C.dTE(s,p),l.$1("fire"))
j=j>=3?new C.dTF(s,p):r
j=s.are("\ud83e\ude98","Memory Drums","Flip the drums and match every person with the clue about them.",B.cM,j,l.$1("memory"),"Add at least 3 people with parents, children, spouses, jobs or birthplaces.")
k=k!==0?new C.dTG(s,p):r
k=A.a([h,B.aO,D.fF1,B.N,A.kG(0.98,A.a([g,i,j,s.are("\ud83c\udf33","Elder Order","Who is older? Put the children and the generations in the right order.",B.eg,k,l.$1("order"),"Add a parent with two children, or a family with more than one generation."),s.ard("\ud83d\udcdc","Family Test","A real test of 10 questions with a grade and a certificate at the end.",B.d8,new C.dTH(s,p),l.$1("test"))],a0),2,12,12,r,B.dO,!0),B.d5,A.B(A.a([D.bAX,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.f86,r,r,r)],a0),B.m,r,B.e,B.j,0,r,r),B.N],a0)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.L)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ay(B.aZ,1,B.q,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fmb,B.bc,new A.by(1,B.bd,A.w(A.a([new A.y(g,r,B.hI,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.ganL(0).length+" questions \xb7 Kahoot style",r,O.DJ,r,r,r,r,r,r,r,r,r)],a0),B.E,r,B.e,B.j,0,B.p),r)],a0)
if(v.ganL(0).length>=2){f=D.nK.j(0.2)
t=new A.ay(D.nK,1,B.q,-1)
g.push(A.aB(r,A.p(r,A.W(B.is,D.nK,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bJ(t,t,t,t),r,r,r,B.a4),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dTI(s,v,p),r,r,r,r,r,r,!1,B.a5))}if(s.a.e){f=D.e0.j(0.2)
t=new A.ay(D.e0,1,B.q,-1)
f=A.aB(r,A.p(r,A.W(B.j9,D.e0,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bJ(t,t,t,t),r,r,r,B.a4),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dTJ(s,v),r,r,r,r,r,r,!1,B.a5)
e=B.fi.j(0.2)
t=new A.ay(B.fi,1,B.q,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.aB(r,A.p(r,A.W(B.eb,B.fi,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bJ(t,t,t,t),r,r,r,B.a4),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dTK(s,v),r,r,r,r,r,r,!1,B.a5)],a0))}k.push(A.p(r,new A.c9(B.aM,B.e,B.j,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bJ(u,u,u,u),new A.bk(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bj,r,r,r))}if(s.a.e){j=m?new C.dTL(s):new C.dTM(a1)
i=A.m(18)
h=A.I(m?D.e0:B.aZ,B.q,2)
g=m?D.e0.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?D.e0:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.MA,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a5))}else if(i===0)k.push(D.fFY)
k.push(B.aA)
k.push(D.aoY)
return new C.FJ("Family Games \xb7 "+p.b,A.cs(k,r,D.bvg,r,r,B.af,!1),B.hT,r)}}
C.ZG.prototype={
a3(){return"_KPhase."+this.b}}
C.akE.prototype={
U(){return new C.akF(D.aW4)},
gd7(){return this.e}}
C.akF.prototype={
t(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a2()},
hQ(d){var w,v=this
v.m(new C.bOv(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dq(B.fO,new C.bOw(v))},
aNr(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bOl(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dq(B.fp,new C.bOm(w))},
aCE(d){var w
if(this.d!==D.a9Y)return
w=this.at
if(w!=null)w.a4(0)
this.b3o(d)},
b3o(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bOr(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cL(B.r6,v.gkr(v))},
cFc(d){var w=this
if(w.d!==D.V7)return
if(w.e+1>=w.a.w.length)w.XI()
else{w.m(new C.bOs(w))
w.aNr()}},
XI(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$XI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.h3h(p,u.w,t)
u.m(new C.bOo(u,s))
w=2
return A.b(C.M9(u.a.e,s),$async$XI)
case 2:r=e
t=u.a
w=3
return A.b(C.Ma(t.e,t.f,t.r,u.f),$async$XI)
case 3:q=e
if(u.c!=null)u.m(new C.bOp(u,r,q))
return A.h(null,v)}})
return A.i($async$XI,v)},
cFX(){var w,v,u,t,s=this,r=s.a,q=new A.ez()
q.dr(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.bj("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.ea(r,q)
for(r=A.d0(r,0,A.dB(4,"count",x.S),A.S(r).c),u=r.$ti,r=new A.bQ(r,r.gK(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.bj(t,B.k.V(w*(0.35+q.am()*0.5)),!1))}B.d.aW(v,new C.bOt())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aW4===r){w=A.a([D.fBu,B.R,A.d(s,t,t,t,t,t,t,B.Uj,B.L,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.f8e,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.A3,B.L,t,t))
w.push(B.dW)
w.push(C.Qo("Play",u.geX(u),D.e0,B.is,D.iI))
w=A.at(new A.D(B.eB,A.w(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.aW5===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fg0,t,t,t),t,t,t)
break A}if(D.a9Y===r||D.V7===r){w=u.cm2()
break A}if(D.aW6===r){w=u.c7p()
break A}w=t}return new C.FJ(s,w,B.hT,t)},
cm2(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.V7,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.f9d,j,j,j),B.b0],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.JE,j,j,j))
g.push(B.as)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iY,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.MF,j,j,j))
g=A.B(g,B.m,j,B.e,B.j,0,j,j)
f=A.m(6)
w=i?0:B.k.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.li(B.bz,j,k.as<5?B.fi:D.e0,9,j,w,j),B.aq)
w=A.m(22)
v=A.I(D.e0,B.q,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.w(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.nK:D.AM,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.f7k,B.L,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fi0,B.L,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.B3,j,v,w,j,j,B.n),j,j,j,j,B.fa,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkr(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bOq(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.E(t,4)
n=D.ayS[o]
m=new A.aQ(16,16)
l=new A.ay(i&&t===s.c?B.c:B.K,4,B.q,-1)
r=A.a([new A.y(D.az5[o],j,D.f9c,j,j,j,j,j,j,j,j,j),B.as,new A.by(1,B.bd,new A.y(r[t],j,D.f8b,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.anx)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bP5)
v.push(A.aB(j,new A.RP(A.p(j,new A.c9(B.aM,B.e,B.j,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bJ(l,l,l,l),new A.bk(m,m,m,m),T.axj,j,B.n),j,j,j,j,B.fQ,j,j,j),p,B.b8,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a5))}h=A.a([g,B.al,f,B.ac,w,B.ac,A.E(A.kG(1.45,v,2,10,10,j,B.dO,!1),4)],h)
if(i)h.push(D.edU)
return new A.D(B.MJ,A.w(h,B.m,j,B.e,B.j,0,B.p),j)},
c7p(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cFX(),m=x.p,l=A.a([D.b6r,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.t_,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.aQE,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?D.e0.j(0.25):B.dr
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ay(s?D.e0:B.bz,1,B.q,-1)
q=w<3?D.d76[w]:""+(w+1)
s=s?B.u:B.O
l.push(A.p(o,new A.c9(B.aM,B.e,B.j,B.m,o,B.p,o,0,A.a([new A.a7(34,o,new A.y(q,o,B.mc,o,o,o,o,o,o,o,o,o),o),new A.by(1,B.bd,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iY,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bJ(r,r,r,r),new A.bk(u,u,u,u),o,o,B.n),o,o,o,B.cu,B.eO,o,o,o))}l.push(B.R)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.a0Y(m,v,p.CW,o))
l.push(B.aO)
l.push(A.at(C.Qo("Back to the games",new C.bOn(p),D.e0,B.mz,D.iI),o,o,o))
return A.cs(l,o,B.fa,o,o,B.af,!1)}}
C.akG.prototype={
U(){return new C.akH(A.a([],x.t))},
gd7(){return this.d}}
C.akH.prototype={
gUe(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.h0Q(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gao1(d){var w,v,u=A.a([],x.t)
for(w=this.e,v=0;v<w.length;++v)if(w[v]===this.gUe()[v].c)u.push(1)
return u.length},
cGA(d){return this.m(new C.bOB(this,d))},
nS(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$nS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.r
if(q<0){w=1
break}t.e.push(q)
q=t.f
s=t.gUe()
w=q+1>=s.length?3:5
break
case 3:r=C.h3h(t.gao1(0),0,s.length)
t.m(new C.bOC(t,r))
w=6
return A.b(C.M9(t.a.d,r),$async$nS)
case 6:t.x=f
q=t.a
w=7
return A.b(C.Ma(q.d,q.c.a,"test",t.gao1(0)*10),$async$nS)
case 7:t.z=f
if(t.c!=null)t.m(new C.bOD())
w=4
break
case 5:t.m(new C.bOE(t))
case 4:case 1:return A.h(u,v)}})
return A.i($async$nS,v)},
bmI(){var w=this.gao1(0)/this.gUe().length*100
if(w>=90)return D.eI8
if(w>=75)return D.eGm
if(w>=60)return D.exs
if(w>=45)return D.eAG
return D.es5},
B(d){var w=this,v=w.a.c,u=w.y?w.cps():w.cgr()
return new C.FJ("Family Test \xb7 "+v.b,u,B.hT,null)},
cgr(){var w,v,u,t,s,r,q,p=this,o=null,n=p.gUe(),m=p.f,l=n[m],k=n.length,j=A.d("Question "+(m+1)+" of "+k,o,o,o,o,o,o,D.JE,o,o,o)
k=A.bv(A.m(6),A.li(B.bz,o,D.nK,8,o,m/k,o),B.aq)
m=A.m(18)
w=A.I(D.e0,B.q,2)
v=x.p
m=A.a([j,B.al,k,B.aO,A.p(o,A.d(l.a,o,o,o,o,o,o,D.fiK,o,o,o),B.f,o,o,new A.o(D.B3,o,w,m,o,o,B.n),o,o,o,o,B.fa,o,o,1/0),B.aA],v)
for(k=l.b,u=0;u<k.length;++u){j=p.r===u?D.e0.j(0.25):B.dr
w=new A.aQ(14,14)
t=p.r===u
s=t?D.e0:B.aZ
r=new A.ay(s,t?2.5:1,B.q,-1)
t=t?D.e0:B.aZ
s=A.l_(65+u)
q=p.r===u?D.iI:B.c
m.push(A.aB(o,A.p(o,new A.c9(B.aM,B.e,B.j,B.m,o,B.p,o,0,A.a([new A.pD(new A.y(s,o,new A.F(!0,q,o,o,o,o,o,B.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),t,o,14,o),B.bc,new A.by(1,B.bd,new A.y(k[u],o,D.feJ,o,o,o,o,o,o,o,o,o),o)],v),o),B.f,o,o,new A.o(j,o,new A.bJ(r,r,r,r),new A.bk(w,w,w,w),o,o,B.n),o,o,o,B.d3,B.bC,o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.bOz(p,u),o,o,o,o,o,o,!1,B.a5))}m.push(B.b0)
n=p.f+1>=n.length?"Hand in the test":"Next question"
m.push(A.at(C.Qo(n,p.r<0?o:p.gt2(p),D.e0,B.kE,D.iI),o,o,o))
return new A.D(D.bvO,A.w(m,B.E,o,B.e,B.j,0,B.p),o)},
cps(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.bmI(),h=A.a([],x.t)
for(w=k.e,v=0;v<w.length;++v)if(w[v]!==k.gUe()[v].c)h.push(v)
u=A.m(22)
t=A.I(D.e0,B.q,4)
s=A.d(k.a.c.b,j,j,j,j,j,j,D.fd7,B.L,j,j)
r=A.d(i.a,j,j,j,j,j,j,D.f6S,j,j,j)
q=A.d(i.b,j,j,j,j,j,j,D.fit,j,j,j)
p=k.gao1(0)
o=k.gUe()
n=x.p
u=A.p(j,A.w(A.a([D.fAl,B.au,s,D.fvE,B.R,r,q,B.al,A.d(""+p+" of "+o.length+" right",j,j,j,j,j,j,D.aRS,j,j,j),B.N,D.aoY],n),B.m,j,B.e,B.j,0,B.p),B.f,j,j,new A.o(D.B3,j,t,u,j,j,B.n),j,j,j,j,B.fa,j,j,j)
t=k.w
s=k.x
if(s===0)s=t
s=A.a([u,B.aA,new C.a0Y(t,s,k.z,j)],n)
if(h.length!==0){u=A.a([B.aO,D.fvg,B.N],n)
for(t=h.length,m=0;m<h.length;h.length===t||(0,A.L)(h),++m){v=h[m]
r=new A.aQ(14,14)
l=new A.ay(B.bz,1,B.q,-1)
q=o[v]
u.push(A.p(j,A.w(A.a([new A.y(q.a,j,B.fJ,j,j,j,j,j,j,j,j,j),B.au,new A.y("You said: "+q.b[w[v]],j,D.fee,j,j,j,j,j,j,j,j,j),new A.y(q.d,j,D.fgm,j,j,j,j,j,j,j,j,j)],n),B.E,j,B.e,B.j,0,B.p),B.f,j,j,new A.o(B.dr,j,new A.bJ(l,l,l,l),new A.bk(r,r,r,r),j,j,B.n),j,j,j,B.cu,B.bj,j,j,j))}B.d.v(s,u)}s.push(B.aA)
s.push(A.at(C.Qo("Back to the games",new C.bOA(k),D.e0,B.mz,D.iI),j,j,j))
return A.cs(s,j,B.bQ,j,j,B.af,!1)}}
C.azw.prototype={}
C.amX.prototype={
U(){return new C.aX8(A.a([],x.t))},
gd7(){return this.d}}
C.aX8.prototype={
gaHv(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hmZ(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gSy(){var w,v=this,u=v.e
if(u===$){w=v.bJC()
v.e!==$&&A.bF()
v.e=w
u=w}return u},
bJC(){var w,v,u,t,s,r=x.cy,q=A.a([],r)
for(w=this.gaHv(),v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=t.a
B.d.v(q,A.a([new C.azw(s,t.b,!0),new C.azw(s,t.c,!1)],r))}r=new A.ez()
r.dr(this.a.e)
B.d.ea(q,r)
return q},
cMJ(d){var w,v,u,t,s=this
if(!s.y){w=s.gSy()[d]
w=w.d||w.e}else w=!0
if(w)return
s.m(new C.bYf(s,d))
w=s.as
if(w.length===2){++s.f
v=s.gSy()
u=v[w[0]]
t=v[w[1]]
if(u.a===t.a&&u.c!==t.c){s.m(new C.bYg(s,u,t))
if(s.r===s.gaHv().length)s.a30()}else{s.y=!0
A.cL(B.ahD,new C.bYh(s))}}},
a30(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$a30=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.f
r=u.gaHv().length
q=u.r
s=s<=r*2+2?15:0
t=q*5+s
u.m(new C.bYb(u,t))
w=2
return A.b(C.M9(u.a.d,t),$async$a30)
case 2:u.x=e
s=u.a
w=3
return A.b(C.Ma(s.d,s.c.a,"memory",Math.max(1,200-u.f*5)),$async$a30)
case 3:u.Q=e
if(u.c!=null)u.m(new C.bYc())
return A.h(null,v)}})
return A.i($async$a30,v)},
B(d){var w,v,u=this,t=null,s=u.z,r=""+u.f
if(s){s=A.at(A.d(r+" moves",t,t,t,t,t,t,D.aQE,t,t,t),t,t,t)
r=u.w
w=u.x
if(w===0)w=r
w=A.cs(A.a([D.b75,D.b7s,s,B.aO,new C.a0Y(r,w,u.Q,t),B.aO,A.at(C.Qo("Back to the games",new C.bYd(d),D.e0,B.mz,D.iI),t,t,t)],x.p),t,B.a9,t,t,B.af,!1)
s=w}else{s=A.d("Match each person with the clue about them \xb7 "+r+" moves",t,t,t,t,t,t,B.A1,B.L,t,t)
r=x.p
w=A.a([],r)
for(v=0;v<u.gSy().length;++v)w.push(u.bMX(v))
s=new A.D(B.MJ,A.w(A.a([s,B.R,A.E(A.kG(0.8,w,3,10,10,t,t,!1),1)],r),B.m,t,B.e,B.j,0,B.p),t)}return new C.FJ("Memory Drums",s,B.hT,t)},
bMX(d){var w=null,v=this.gSy()[d],u=v.d||v.e?1:0
return A.aB(w,A.mf(new C.bY9(v),w,B.b8,B.jt,w,w,new A.bp(w,u,x.e7),x.gR),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bYa(this,d),w,w,w,w,w,w,!1,B.a5)}}
C.bdH.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
$.X()
w=A.N()
w.r=D.e0.j(0.5).gp(0)
w.b=B.ag
w.c=2
for(v=e.b,u=d.a,t=e.a,s=x.v,r=10;r<v;r+=18){q=$.X()
p=A.a([],s)
o=new A.aO(q.r,B.ao,null,null,p)
p.push(new A.b5(0,r))
for(n=0;n<t;n+=12){q=(B.o.an(n,12)&1)===0?-5:5
q=new A.ap(n+6,r+q)
p.push(q)
m=o.f
if(m!=null)q.bA(m)
q=o.e
if(q!=null)q.a.delete()
o.e=null}l=w.L()
q=o.e
u.drawPath((q==null?o.e=new A.cC(o.gbE().a.snapshot()):q).a,l)
l.delete()}},
aw(d){return!1}}
C.ake.prototype={
U(){return new C.akf(A.a([],x.t))},
gd7(){return this.d}}
C.akf.prototype={
ga6k(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hpU(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
b5t(d){var w,v,u,t,s=this.ga6k()
if(d>=s.length)return A.a([],x.t)
w=s[d].c.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.ez()
u.dr(this.a.e+d)
B.d.ea(s,u)
if(s.length>1){u=A.a([],x.t)
for(v=0;v<s.length;++v)u.push(s[v]===v?1:0)
u=B.d.f9(u,new C.bMb())===s.length}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
cW0(d){var w,v,u,t,s,r,q,p,o=this
if(o.z||B.d.q(o.x,d))return
o.m(new C.bMk(o,d))
w=o.x.length
v=o.ga6k()
if(w===v[o.e].c.length){u={}
w=A.a([],x.t)
for(t=o.x,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
w.push(v[o.e].d[q])}u.a=!0
for(p=1;p<w.length;++p)if(w[p]<w[p-1])u.a=!1
o.m(new C.bMl(u,o))}},
jO(d){return this.m(new C.bMj(this))},
nS(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$nS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.ga6k().length
w=r+1>=q?3:4
break
case 3:r=t.f
q=r===q?15:0
s=r*10+q
t.m(new C.bMg(t,s))
w=5
return A.b(C.M9(t.a.d,s),$async$nS)
case 5:t.w=f
q=t.a
w=6
return A.b(C.Ma(q.d,q.c.a,"order",t.f*10),$async$nS)
case 6:t.at=f
if(t.c!=null)t.m(new C.bMh())
w=1
break
case 4:t.m(new C.bMi(t))
case 1:return A.h(u,v)}})
return A.i($async$nS,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Elder Order",a2=null
if(a0.as){w=A.at(A.d(""+a0.f+" of "+a0.ga6k().length+" rounds right",a2,a2,a2,a2,a2,a2,B.t_,a2,a2,a2),a2,a2,a2)
v=a0.r
u=a0.w
if(u===0)u=v
return new C.FJ(a1,A.cs(A.a([D.b6l,w,B.aO,new C.a0Y(v,u,a0.at,a2),B.aO,A.at(C.Qo("Back to the games",new C.bMc(a3),D.e0,B.mz,D.iI),a2,a2,a2)],x.p),a2,B.a9,a2,a2,B.af,!1),B.hT,a2)}w=a0.ga6k()
t=w[a0.e]
v=A.a([],x.t)
for(u=t.c,s=0;s<u.length;++s)v.push(s)
B.d.aW(v,new C.bMd(t))
r=A.d("Round "+(a0.e+1)+" of "+w.length,a2,a2,a2,a2,a2,a2,D.JE,a2,a2,a2)
q=A.d(t.a,a2,a2,a2,a2,a2,a2,B.mc,a2,a2,a2)
p=A.d(t.b,a2,a2,a2,a2,a2,a2,B.he,a2,a2,a2)
o=x.p
n=A.a([],o)
m=a0.y
if(m===$)m=a0.y=a0.b5t(0)
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.L)(m),++k){j=m[k]
if(B.d.q(a0.x,j))if(a0.z)i=a0.Q?D.nK:D.AM
else i=D.e0
else i=B.bz
h=new A.aQ(18,18)
g=new A.ay(B.d.q(a0.x,j)?B.c:D.e0.j(0.6),2,B.q,-1)
f=A.a([],o)
if(B.d.q(a0.x,j))f.push(new A.pD(new A.y(""+(B.d.cD(a0.x,j)+1),a2,D.faE,a2,a2,a2,a2,a2,a2,a2,a2,a2),B.c,a2,12,a2))
if(B.d.q(a0.x,j))f.push(B.ab)
e=u[j]
d=B.d.q(a0.x,j)?D.iI:B.c
f.push(new A.y(e,a2,new A.F(!0,d,a2,a2,a2,a2,17,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
n.push(A.aB(a2,A.db(a2,new A.c9(B.aM,B.e,B.P,B.m,a2,B.p,a2,0,f,a2),a2,a2,B.b8,new A.o(i,a2,new A.bJ(g,g,g,g),new A.bk(h,h,h,h),a2,a2,B.n),B.a2,a2,a2,a2,B.y8,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.bMe(a0,j),a2,a2,a2,a2,a2,a2,!1,B.a5))}u=A.a([r,B.al,q,p,B.bv,A.bV(B.bB,n,B.bs,12,12),B.b0],o)
if(a0.z){r=(a0.Q?D.nK:D.AM).j(0.2)
q=A.m(16)
p=a0.Q
n=A.I(p?D.nK:D.AM,B.q,1)
u.push(A.p(a2,A.d(p?"Yes! That is the right order. The elders smile.":"Not quite. The right order is: "+new A.M(v,new C.bMf(t),x.cM).aG(0,", then ")+".",a2,a2,a2,a2,a2,a2,D.fhE,a2,a2,a2),B.f,a2,a2,new A.o(r,a2,n,q,a2,a2,B.n),a2,a2,a2,a2,B.bC,a2,a2,1/0))}u.push(B.ac)
v=A.a([],o)
if(!a0.z&&a0.x.length!==0)B.d.v(v,A.a([C.Qo("Start again",a0.gcVx(a0),B.aZ,a2,B.c),B.as],o))
if(a0.z){w=a0.e+1>=w.length?"See my result":"Next round"
v.push(C.Qo(w,a0.gt2(a0),D.e0,B.kE,D.iI))}u.push(A.at(A.B(v,B.m,a2,B.e,B.P,0,a2,a2),a2,a2,a2))
return new C.FJ(a1,new A.D(B.bQ,A.w(u,B.E,a2,B.e,B.j,0,B.p),a2),B.hT,a2)}}
C.SN.prototype={
U(){return new C.akC(A.U(x.de,x.er))}}
C.akC.prototype={
gCB(){var w,v=this,u=v.d
if(u===$){w=C.h6g(v.a.c.ag())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gkW(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCB().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.aq(new A.ba(w,B.b4,B.aN),v)}return t},
c9V(d){return this.f.c4(0,d,new C.bO5(d))},
a_(){this.a1()
var w=this.gCB().c
if(w.length===0)w.push(C.fTq(null,0,20,""))},
t(){var w,v,u=this.gkW(0)
u.S$=$.ax()
u.P$=0
for(u=this.f,u=new A.dt(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gT(w)
v.S$=$.ax()
v.P$=0}this.a2()},
cF2(){if(this.gCB().c.length>=12)return
this.m(new C.bO6(this))},
js(d){var w,v,u=this,t=u.gCB()
t.b=B.a.i(u.gkW(0).a.a)
w=t.ganL(0)
if(t.b.length===0||w.length<2){u.c.I(x.q).f.R(D.f0o)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a3(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bOg(),r=x.p,q=A.a([A.bM(!1,D.fr1,t,t,!0,t,t,u.gbmP(u),t,t)],r),p=A.a([D.fFz,B.ac,A.aL(t,B.U,!1,t,!0,B.r,t,A.aN(),u.gkW(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.a9,t,t,t,t,t,t,t,t,t,t,t,B.fJ,!0,B.a6,t,B.an,t,t,t,t),B.aA],r)
for(w=0;v=u.gCB().c.length,w<v;++w)B.d.v(p,A.a([new A.fd(new C.bOf(u,w,s),t)],r))
if(v<12)p.push(A.at(C.Qo("\uff0b Add a question",u.gcF1(),B.aZ,t,B.c),t,t,t))
return new C.FJ("Make your game",A.cs(p,t,D.bvd,t,t,B.af,!1),q,t)}}
C.apB.prototype={
U(){return new C.aDk(A.a([],x._))},
br(){return this.r.$0()},
pW(){return this.w.$0()},
gdY(){return this.c}}
C.aDk.prototype={
a_(){var w,v
this.a1()
this.vV()
w=this.a
v=w.c
if(v.length!==0)C.a75(v,w.e,w.d.w)},
vL(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h3b(r,t.e,!1,s.w,new C.dVb(u),null,s),$async$vL)
case 2:w=3
return A.b(u.vV(),$async$vL)
case 3:return A.h(null,v)}})
return A.i($async$vL,v)},
a_E(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h3b(r,t.e,!0,s.w,new C.dVa(u),null,s),$async$a_E)
case 2:w=3
return A.b(u.vV(),$async$a_E)
case 3:return A.h(null,v)}})
return A.i($async$a_E,v)},
vV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AN(q.a.c),$async$vV)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.dVd(q,p))
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
return A.b(C.Gy(q.a.c).d9(0,B.pW),$async$vV)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dVe(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dVf(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vV,v)},
Oz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Oz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.f_Z)
w=3
return A.b(C.Gy(t.a.c),$async$Oz)
case 3:r=e
w=4
return A.b(C.fJi(t.a.c,r),$async$Oz)
case 4:q=e
w=5
return A.b(C.Gy(t.a.c),$async$Oz)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dV9(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dA:B.cR,null,B.r,null,s,null,B.mu,null,null,null,null,null,null,null,null,null,null))
t.a.pW()
case 1:return A.h(u,v)}})
return A.i($async$Oz,v)},
I0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$I0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ibf(l),$async$I0)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hFE(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZV(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$I0)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hmx(r)
o=Date.now()
n=t.a.c
m=new C.kF(l,r.toUpperCase(),p,!0,B.U,D.CD,new A.T(o,0,!1),0,n,D.tZ,B.c4)
w=5
return A.b(C.a2A(n,m),$async$I0)
case 5:w=6
return A.b(t.vV(),$async$I0)
case 6:t.a.br()
t.a.pW()
if(t.c==null){w=1
break}t.Ez(m)
case 1:return A.h(u,v)}})
return A.i($async$I0,v)},
Ez(d){return this.ceO(d)},
ceO(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ez=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AN(u.a.c),$async$Ez)
case 2:n=l.pN(k.dJ(f,new C.dVc(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.apv(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ez)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2A(u.a.c,o),$async$Ez)
case 6:case 5:w=7
return A.b(u.vV(),$async$Ez)
case 7:u.a.pW()
return A.h(null,v)}})
return A.i($async$Ez,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tT(p)
if(r.e)return A.at(A.mO(q,p?B.bq:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e1:B.c
v=A.m(15)
u=A.aF(!1,B.a2,!0,q,A.aK(!1,q,!0,A.p(q,D.bMN,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a4),q,52,q,q,q,q,q,52),B.cK,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcdS(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fy(A.p(q,A.w(A.a([u,B.aO,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bH(D.fIK,r.gaQC(),A.bn(B.bN,q,q,q,q,q,Ap.ZD,q,new A.b7(A.m(12),B.X),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bxY,q,q,1/0),15,B.ae,1.05,D.a9K,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b0],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.W(B.yQ,B.aV,q,q,q,q),q,q,q,new C.dVh(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.W(B.yL,B.aV,q,q,q,q),q,q,q,r.gafA(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(F.aoo,D.foq,r.gaQC(),A.bn(B.bN,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fy(r.cBo(J.r(r.d,s),o),14,B.ae,1,D.a9K,q))
B.d.v(w,u)}return A.w(A.a([p,B.aA,A.w(w,B.m,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cBo(d,e){var w=null,v=e.a,u=v?B.e1:B.c,t=A.m(14),s=A.I((v?B.e5:B.bP).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ep,10)],x.V),q=A.m(14),p=A.p(w,D.bLR,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaoD(),m=d.d?"":" \xb7 Public",l=d.y===D.kD?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a2,!0,w,A.aK(!1,q,!0,new A.D(B.bC,A.B(A.a([p,B.bc,l,A.W(B.Np,v?B.bq:B.bl,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dVg(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.apv.prototype={
U(){return new C.aDh(A.a([],x._),A.aY(x.N),A.b7D())},
br(){return this.r.$0()},
gdY(){return this.c}}
C.aDh.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.acv()
w=u.a
v=w.c
if(v.length!==0)C.a75(v,w.e,w.d.w)},
t(){var w=this.w
w.S$=$.ax()
w.P$=0
this.a2()},
a2C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xS("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cd(null,null,!0,null,new C.dUC(r),s,null,!0,!0,x.y),$async$a2C)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jx()
t.m(new C.dUD(t,r))
w=4
return A.b(t.tR(),$async$a2C)
case 4:t.a.br()
t.xS(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2C,v)},
cre(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dUx(w,f,d,e))},
aSR(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dk()
u.e9(w,v,0,1)
u.jT(q,q,1,1)
this.w.sp(0,u)},
b9Q(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eC(new Float64Array(16))
q.e2(r)
w=q.CG()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dk()
t.e9(r,u,0,1)
t.jT(v,v,1,1)
t.e9(-r,-u,0,1)
t.iL(0,q)
s.sp(0,t)},
acv(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AN(u.a.c),$async$acv)
case 2:t=s.pN(r.dJ(e,new C.dTZ(u)))
if(t!=null&&u.c!=null)u.m(new C.dU_(u,t))
return A.h(null,v)}})
return A.i($async$acv,v)},
xS(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
vL(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h3b(o,t,!1,r,new C.dUg(u),q.a,s),$async$vL)
case 2:n=A
m=J
w=3
return A.b(C.Gy(u.a.c),$async$vL)
case 3:p=n.pN(m.dJ(e,new C.dUh(u)))
if(p!=null&&u.c!=null)u.m(new C.dUi(u,p))
return A.h(null,v)}})
return A.i($async$vL,v)},
Jx(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cG(w,0)},
tR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$tR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2A(t,s),$async$tR)
case 2:return A.h(null,v)}})
return A.i($async$tR,v)},
a18(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a18=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u4(q,t.a.c)){t.xS("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ico(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a18)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jx()
t.m(new C.dUw(t,r))
w=4
return A.b(t.tR(),$async$a18)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a18,v)},
b03(){var w=this.c
w.toString
A.a3(w,!1).cg(A.e_(new C.dUd(this),!1,null,x.H))},
a_S(){return this.ceQ()},
ceQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.u4(m,t.a.c)){t.xS("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dUt(),A.S(s).k("Z<1>")).gK(0)
s=A.ex([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("co.E"))
B.d.fc(p)
s=t.c
s.toString
w=3
return A.b(A.bR(B.K,null,new C.dUu(n,t,new C.tT(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a_S)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Jx()
t.m(new C.dUv(t,o))
w=6
return A.b(t.tR(),$async$a_S)
case 6:case 5:if(o.a&&t.c!=null)t.b03()
case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
VS(d){return this.bzK(d)},
bzK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u4(r,t.a.c)){t.xS("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cd(null,null,!0,null,new C.dTN(t,d),r,null,!0,!0,x.P),$async$VS)
case 3:s=f
if(s==null){w=1
break}t.Jx()
t.m(new C.dTO(t,s))
w=4
return A.b(t.tR(),$async$VS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VS,v)},
a2Y(d){return this.cDy(d)},
cDy(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cd(null,null,!0,null,new C.dUF(u,d,new C.tT(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2Y)
case 2:return A.h(null,v)}})
return A.i($async$a2Y,v)},
cb7(d){var w=this,v=w.d
v===$&&A.c()
if(C.u4(v,w.a.c))w.Oe(d)
else w.a2Y(d)},
ai2(d,e){return this.cvc(d,e)},
cvc(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ai2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cd(null,null,!0,null,new C.dUz(new C.tT(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ai2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ai2,v)},
I5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$I5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kD?3:5
break
case 3:w=6
return A.b(C.fRI(t.a.c),$async$I5)
case 6:s=e
o=t.a
r=C.hb1(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ai2(!s,!r),$async$I5)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aOL(o,t.a.c)){t.xS("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l9(o,"Cancel","Remove",q.y===D.kD?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$I5)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOH(t.a.c,t.d.a),$async$I5)
case 11:t.a.br()
o=t.c
if(o==null){w=1
break}A.iQ(o,null)
case 1:return A.h(u,v)}})
return A.i($async$I5,v)},
aa1(d){return this.bKT(d)},
bKT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aa1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u4(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dTP(p))){o=A.S(s)
p.a=A.pN(new A.cP(new A.Z(s,new C.dTQ(d),o.k("Z<1>")),new C.dTR(),o.k("cP<1,n>")))}q=p.a
if(q==null)q=d.d
t.Jx()
t.m(new C.dTS(t,s,d,q))
w=3
return A.b(t.tR(),$async$aa1)
case 3:t.xS(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aa1,v)},
Oe(d){return this.bN3(d)},
bN3(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u4(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2Y(d),$async$Oe)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cd(null,null,!0,null,new C.dTW(t,d),r,null,!0,!0,x.P),$async$Oe)
case 6:s=f
if(s==null){w=1
break}t.Jx()
t.m(new C.dTX(t,s))
w=7
return A.b(t.tR(),$async$Oe)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oe,v)},
cBN(){var w=this,v=w.d
v===$&&A.c()
if(!C.u4(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dUE(w))
w.tR()},
YH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aOL(n,t.a.c)){t.xS("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.ax()
r=new A.aq(B.at,s)
q=t.d.e
p=A.bo(new A.M(q,t.gc9B(),A.S(q).k("M<1,n>")).c0(0,new C.dU8()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cd(null,null,!0,null,new C.dU9(t,new C.tT(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$YH)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jx()
t.m(new C.dUa(t,p))
w=4
return A.b(t.tR(),$async$YH)
case 4:t.xS("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$YH,v)},
c9C(d){return B.a.i(d.toLowerCase())},
cdC(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u4(v,w)
t=r.d
s=C.i1D(t)
C.ibj(q,t.b,u,C.i1C(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tT(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.dUM(),A.S(l).k("Z<1>")).gK(0)
l=n?B.bZ:B.ij
v=A.W(B.a_O,n?B.bq:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bp,A.aK(!1,o,!0,new A.D(B.hz,A.B(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dUN(p,d),o,o,o,o,o,o,o),o),new A.D(B.ng,p.bY7(m),o)],u)
if(p.d.y===D.kD){t=B.ry.j(0.15)
s=A.m(12)
r=A.I(B.ry.j(0.45),B.q,1)
q=C.Gw(p.d,p.a.c)
v.push(new A.D(B.y6,A.p(o,A.B(A.a([D.bR9,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iO,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b0],u)
if(C.u4(p.d,p.a.c)&&p.e.length!==0)u.push(new C.FI("Undo",B.rm,p.gcBM(),m,o,o))
u.push(new C.FI("Family Book",D.bGG,p.gcdB(),m,B.ts,o))
u.push(new C.FI("Family games",B.oa,p.gcdN(),m,B.aD,o))
if(C.u4(p.d,p.a.c))u.push(new C.FI("Display settings",B.Cb,p.gceP(),m,B.b_,o))
u.push(new C.FI("Sync",B.yL,p.gafA(),m,o,o))
t=p.d
if(t.y===D.kD||C.aOL(t,p.a.c)){t=p.d.y===D.kD?"Remove shared tree":"Delete tree"
u.push(new C.FI(t,B.eb,p.gbL2(),m,B.fi,o))}if(C.u4(p.d,p.a.c))u.push(new C.FI("Add member",B.w9,new C.dUO(p),m,B.bN,o))
v.push(new A.D(W.ait,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaoD()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cA(new C.dUP(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?P.a_S:A3.Nq,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dUQ(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.w(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),o,!1,!1,o,o)},
bY7(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fC.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.yF,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a2,!0,m,A.aK(!1,m,!0,A.p(m,D.bUe,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a4),m,46,m,m,m,m,m,46),B.cK,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafA(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fab,m,m,m)
r=r.gaoD()
p=n.d.gaoD()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.w(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.u4(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.bRl,m,m,m,n.gcoz(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jM:B.o7
r=r?"Private":"Public"
r=A.E(n.av1(q,"Privacy",r,n.a.d.w?n.gcAL():m),1)
q=A.E(n.av1(B.yM,"Tree code",n.d.c,new C.dTY(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.av1(D.bIn,"Collaborators",p,n.gc1I()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kD){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aF(!1,B.a2,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.D(B.h1,A.B(A.a([A.W(B.p2,B.c,m,m,m,14),B.ei,A.d("View only",m,m,m,m,m,m,B.aQH,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.bv(u,new A.an(B.V,m,B.aa,B.r,A.a([t,new A.D(B.FH,A.w(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bYv,B.n),m,m,m,m,m,m,m,1/0)},
av1(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a2,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.D(M.ajC,A.w(A.a([A.W(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uZ,A.d(f,w,1,B.a1,w,w,w,I.zZ,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.bee.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gal(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.beh(s,t),new A.as(w,v))],x.p)
r=r.gdR(r)
B.d.v(u,r.dE(r,new C.d8W(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d8X(this),A.S(r).k("M<1,t>")))
return new A.D(B.tV,new A.a7(w,v,new A.an(B.V,t,B.aa,B.f,u,t),t),t)}}
C.K4.prototype={}
C.FN.prototype={}
C.beg.prototype={
gbin(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIR.prototype={}
C.beh.prototype={
bMG(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.X()
v=A.N()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bV
d.bL(new A.x(n,w),new A.x(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ao,null,null,A.a([],x.v))
q=w+5.5
t.F(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.F(new A.pH(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.F(new A.pH(u+4.95,r,u+9.9,s,u,q))
t.F(new A.bE())
q=A.N()
q.r=B.c.gp(0)
d.af(new A.x(u,w),9,q)
q=A.N()
q.r=B.bD.gp(0)
d.aS(t,q)},
bME(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aW(a0,new C.d9g())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.b3(a0,new C.d9h(f))
t=new A.M(a0,new C.d9i(f),A.S(a0).k("M<1,K>")).c0(0,new C.d9j()).cM(0,1/0,B.vm)
w=f.a
d.bL(f,new A.x(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.L()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mK(m)
i=Math.min(10,l/2)
l=$.X()
h=A.a([],q)
g=new A.aO(l.r,B.ao,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cR(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cR(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.L()
n=g.gbE().a.snapshot()
r.drawPath((g.e=new A.cC(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.X()
w=A.N()
w.r=B.bN.j(0.75).gp(0)
w.c=2.2
w.b=B.ag
w.d=B.bV
w.e=B.hr
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bME(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.L()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bMG(d,w,q.a,q.b)}},
aw(d){return d.b!==this.b}}
C.bhU.prototype={
gc7r(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dnY
switch(w.c.a){case 0:return D.cQN
case 1:return D.d1c
case 2:return D.di6}},
gc7u(){var w=this.c,v=C.hlT(w.w),u=C.hlT(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc7r(),p=t.c,o=N.bBT(p.f),n=t.gc7u(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.I(r?B.av:B.c,B.q,2)
if(o!=null)w=A.tk(B.A,s,B.ce,B.bU,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.i_(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a4),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a4),s,56,s,s,B.FX,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.av:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fkn,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.bzS,s,s,s),s,s,s,-6,-4,s))}k=r?B.cp:B.c
j=A.m(8)
w=A.I(B.d.gH(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dD,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cp,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a7(84,112,A.w(A.a([new A.an(B.V,s,B.aa,B.f,l,s),B.au,A.p(s,A.w(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b0P,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bA2,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a5)}}
C.bdl.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.X()
w=A.N()
v=this.b
u=v?B.c:D.bcZ
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.L()
t.drawCircle(r,s,1,q)
q.delete()}},
aw(d){return d.b!==this.b}}
C.bvx.prototype={
B(d){var w=this,v=null,u=new C.faV(w),t=w.c,s=t?B.cp:B.c,r=A.m(12),q=u.$3(B.hC,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.fe,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yJ,"Zoom out",w.e)
return A.aF(!1,B.a2,!0,r,A.w(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.fe,v,v,v,1,v,v,v,v,v,22),u.$3(B.am_,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.ah)}}
C.bl6.prototype={
B(d){var w=this,v=null,u=B.bN.j(0.15),t=A.I(B.bN,B.q,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.w(A.a([A.W(s?P.a_S:A3.Nq,B.bN,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fgE,v,v,v)],r),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a4),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a5)
u=A.a([t,B.al,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.feB,B.L,v,v)],r)
if(s){t=A.a([B.al],r)
s=w.d
B.d.v(t,new A.M(s,new C.eMF(w),A.S(s).k("M<1,t>")))
B.d.v(u,t)}return new A.a7(84,v,A.w(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZT.prototype={
U(){return new C.aBL()},
br(){return this.Q.$0()},
gdY(){return this.w}}
C.aBL.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aP()
r.d=new A.aq(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.aq(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.aq(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.aq(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.aq(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.aq(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.c
r.y=t==null?D.yk:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i3a(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.ax()
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
PF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hb1(p.y,p.w)
w=3
return A.b(A.ln(t.a.w,B.Io),$async$PF)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZV(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PF)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hFF(p.y,p.w)
t.a.br()
case 5:w=7
return A.b(Ar.GH(78,800),$async$PF)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dp4(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PF,v)},
c7t(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i1(B.o.u(1000*Date.now()),w,D.yk,null,null,null,"","","","","",1,!1,0)
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
s=v.aDT(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a3(k,!1).N(s)},
a9D(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cd(null,null,!0,null,new C.dp3(r),s,null,!0,!0,x.y),$async$a9D)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a3(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9D,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tT(j),h=l.a.e,g=A.S(h).k("Z<1>"),f=A.C(new A.Z(h,new C.dpd(l),g),g.k("J.E"))
h=j?B.e1:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.byk,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aK(!1,k,!0,new A.D(B.lY,A.W(B.eb,B.oR,k,k,k,17),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbHG(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jF:B.j5
t=N.bBT(l.as)
if(l.as==null)s=A.W(B.oV,j?B.bq:B.bl,k,k,k,40)
else s=k
s=A.at(A.aB(k,new A.an(B.V,k,B.aa,B.r,A.a([A.h5(u,t,s,k,42),A.ao(0,A.h5(B.bN,k,D.bKV,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc7q(),k,k,k,k,k,k,!1,B.a5),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBN(t,"Full name",B.my,1,1,i,B.ma)
u=l.y
u===$&&A.c()
u=A.w(A.a([t,B.R,new C.bhS(i,u,new C.dpe(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.brO],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dpf(),A.S(o).k("M<1,eE<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.brQ],q)
B.d.v(q,new A.M(f,new C.dph(),A.S(f).k("M<1,eE<n?>>")))
o=A.w(A.a([t,B.al,new C.ad_(i,r,"Who is their parent?",p,new C.dpi(l),k,o),B.aA,n,B.al,new C.ad_(i,m,"Who is their spouse / partner?",q,new C.dpj(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBN(q,"Birth date",D.al2,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBN(m,"Birth place",B.a06,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBN(n,"Date of death (if deceased)",D.ang,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBN(p,"Occupation",B.a1c,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.bv,new C.ad0(i,"Identity",u,k),B.ac,new C.ad0(i,"Family links",o,k),B.ac,new C.ad0(i,"Life details",A.w(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBN(r,"Notes",B.l5,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBM(i,"Child order",l.cf3(l.at),new C.dpk(l),new C.dpl(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h0s(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dpm(l):k
B.d.v(r,A.a([B.R,new C.aBM(i,"Visible in tree",u,w,new C.dpn(l),k)],v))}r.push(B.R)
w=j?B.jF:B.j5
u=A.m(14)
t=A.I(j?B.e5:B.bP,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iH(k,B.bN,k,B.ae,k,new C.dpo(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,P.ai7,k,k,k))
r.push(B.bv)
w=j?B.aP:B.av
j=j?B.e5:B.bP
r.push(A.B(A.a([A.E(A.dQ(B.nA,new C.dpg(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cj,k,new A.b7(A.m(14),B.X),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bc,A.E(A.bH(D.eTe,l.gc7s(),A.bn(B.aV,k,k,0,B.c,k,B.cj,k,new A.b7(A.m(14),B.X),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.ek(B.hT,k,B.ae,h,new A.a7(420,k,A.cc(A.w(r,B.ai,k,B.e,B.P,0,B.p),B.r,k,B.y,k,k,k,k,B.af),k),D.aiW,k,B.ail,new A.b7(g,B.X),k,k)},
cf3(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ad0.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jF:B.j5,s=A.m(16)
return A.w(A.a([new A.D(D.ajm,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e5:B.bP,B.q,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.bhT.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e1:B.c,r=A.m(12),q=A.I((t?B.e5:B.bP).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.U,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.eD,u,B.vM,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bN,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a6,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ad_.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e1:B.c,s=A.m(12),r=A.I((u?B.e5:B.bP).j(0.85),B.q,1),q=A.W(B.rh,u?B.bq:B.bl,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e1:B.c
return A.p(v,new A.DA(A.SD(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l0,v,v,v)}}
C.bhS.prototype={
B(d){var w=new C.dpp(this)
return A.B(A.a([w.$3(D.vU,"Male",B.O7),B.ab,w.$3(D.q2,"Female",B.NW),B.ab,w.$3(D.yk,"Other",B.nm)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBM.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jF:B.j5,r=A.m(14),q=A.I(t?B.e5:B.bP,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.w(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aHT(u,B.yJ,w.f,v),B.bn,new C.aHT(u,B.hC,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ew,v,v,v)}}
C.aHT.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bN.j(0.12)
else w=s.c.a?B.e1:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bN
else t=(s.c.a?B.bq:B.bl).j(0.4)
return A.aF(!1,B.a2,!0,v,A.aK(!1,u,!0,new A.a7(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.ad1.prototype={
bQE(d){switch(d.a){case 0:return B.bN
case 1:return B.bD
case 2:return B.cU}},
bQF(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aXb(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ae(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e1:B.c
u=A.m(12)
t=A.I((w?B.e5:B.bP).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bN,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.y1,p,p,1/0)},
ae6(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jF:B.j5,s=A.m(16),r=A.I(v?B.e5:B.bP,B.q,1)
return A.w(A.a([new A.D(D.ajm,u,w),A.p(w,A.w(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hqJ(r,q),o=q.c,n=t.bQE(o),m=N.bBT(q.f),l=t.e.a,k=l?B.e1:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kD?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.h5(u,m,m==null?A.W(B.oV,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a4),s,s,s,s,B.ex,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.at(A.p(s,A.d(t.bQF(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mw,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ae("Full name",i,B.my)],u)
if(p>0)i.push(t.Ae("Child order","#"+p,B.O1))
r=A.a([h,B.au,r,B.aO,l,B.R,v,B.bv,t.ae6("Identity",i),B.ac,t.ae6("Life details",A.a([t.Ae("Birth date",q.w,D.al2),t.Ae("Birth place",q.x,B.a06),t.Ae("Date of death",q.y,D.ang),t.Ae("Occupation",q.z,B.a1c)],u)),B.ac,t.ae6("Family links",A.a([t.Ae("1. Parent",t.aXb(q.d),B.Ga),t.Ae("2. Spouse",t.aXb(q.e),B.NV)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ae6("Notes",A.a([t.Ae("Notes",q,B.l5)],u))],u))
r.push(B.bv)
r.push(A.bH(B.JN,new C.dpz(d),A.bn(B.aV,s,s,s,s,s,B.cj,s,new A.b7(A.m(14),B.X),s,s,s)))
return A.eM(s,k,new A.cT(B.lN,A.cc(A.w(r,B.ai,s,B.e,B.P,0,B.p),B.r,s,B.y,s,B.vP,s,s,B.af),s),s,s,s,B.FK,B.d4,s,new A.b7(j,B.X),s)}}
C.FI.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vS,A.hp(A.aF(!1,B.a2,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a7(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.apy.prototype={
eV(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ac())
w=u.c
v=A.S(w).k("M<1,a6<n,@>>")
w=A.C(new A.M(w,new C.car(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.ja(w,new C.cas(),t,x.fO))
return s}}
C.apz.prototype={
U(){return new C.aDj(A.a([],x.bF))},
gd7(){return this.c}}
C.aDj.prototype={
a_(){this.a1()
this.JE()},
JE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cav(t.a.c),$async$JE)
case 3:r=e
w=4
return A.b(C.AN(t.a.c),$async$JE)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.r_(q,new C.dUZ(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dV_(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JE,v)},
yr(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Ko(d,e){return this.cEa(d,e)},
cEa(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Ko=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dV3(q,e))
t=3
w=6
return A.b(d.$0(),$async$Ko)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dV4(q))
$.eR.mp()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ko,v)},
Xw(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p9(r,s.c,s.e),$async$Xw)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ko(new C.dUW(t),"Preparing download\u2026"),$async$Xw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xw,v)},
XA(d){return this.bOD(d)},
bOD(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p9(r,s.c,s.e),$async$XA)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Ko(new C.dUX(t,d),"Preparing file\u2026"),$async$XA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XA,v)},
afX(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xf.c8().M8(B.R0,B.u_,!0),$async$afX)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gal(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jr(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync pick] file_picker: "+A.u(p))
w=6
break
case 3:w=2
break
case 6:u=A.GG()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afX,v)},
Yb(d){return this.bZ0(d)},
bZ0(d){var w=0,v=A.j(x.H),u=this
var $async$Yb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Ko(new C.dUY(u,d),"Restoring family trees\u2026"),$async$Yb)
case 2:return A.h(null,v)}})
return A.i($async$Yb,v)},
Ya(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ya=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afX(),$async$Ya)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Yb(s),$async$Ya)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ya,v)},
a2_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p9(r,s.c,s.e),$async$a2_)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ko(new C.dV2(t),"Creating QR code\u2026"),$async$a2_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2_,v)},
a1B(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CU()){t.yr("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a3(s,!1).cg(A.e_(new C.dV0(),!0,null,x.N)),$async$a1B)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Yb(r),$async$a1B)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1B,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AR:B.ij,m=o?D.agB:B.aP,l=o?B.aJ:B.bP,k=o?B.aP:B.av,j=new C.d9k(n,m,l,k,o?B.bK:B.bl)
l=A.aI(p,p,p,p,A.W(B.eH,k,p,p,p,20),p,p,p,new C.dV6(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d8T(!0,B.jy,B.aR,B.aR,q.r?p:q.gcv0(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcr9()
t.push(A.E(C.d8T(!s,B.ja,B.b5,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d8T(!1,B.hE,B.aV,B.bN,q.r?p:q.gbOw(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d8T(!1,R.yO,B.aF,B.aS,q.r?p:q.gbYY(),j,s,"Upload backup file"),1))
l=A.a([new C.bef(v,l,p),B.kN,new C.aci(j,"QR restore",p),B.R,t,B.d5,new C.aci(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kN,new C.aci(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dV7(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cs(l,p,B.ZA,p,p,B.af,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([P.aP6,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.y8,p,p,p),!0,!1,B.ae,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.V,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d9k.prototype={}
C.bef.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kj,28)],x.V)
t=A.ao(p,A.W(B.uj,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.V,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bTM,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.op,A.E(A.w(A.a([D.fpq,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c0J,B.n),p,p,p,p,p,p,p,p)}}
C.aci.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bed.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aR.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aR.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a2,!0,q,A.aK(!1,o,!0,A.eF(A.dd(new A.D(F.Zc,A.w(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rd,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.bei.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a2,!0,v,A.aK(!1,u,!0,A.eF(new A.D(B.eO,A.B(A.a([A.p(v,D.bT_,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.rd,v,v,v),B.bc,A.E(A.w(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.W(B.hE,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.a_d.prototype={
U(){return new C.aDi()},
gd7(){return this.c}}
C.aDi.prototype={
a_(){this.a1()
this.a9a()},
a9a(){var w=0,v=A.j(x.H),u=this,t
var $async$a9a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b1z(u.a.c,B.Dd),$async$a9a)
case 2:t=e
if(u.c!=null)u.m(new C.dUR(u,t))
return A.h(null,v)}})
return A.i($async$a9a,v)},
ahj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dUS(q))
t=4
p=A.hcH(q.a.d,B.Dd)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arM(n.e,m,l,B.Dd,p,n.f),$async$ahj)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dUT(q))
q.c.I(x.q).f.R(D.f1b)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.eh(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dUU(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahj,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jo:B.pO,n=p?B.ih:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fFt,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pU(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.w(A.a([B.N,u,B.bv,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b7,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.br,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcqS()
if(u)u=B.Jf
else u=A.W(r.e===!0?B.hD:B.al1,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.er(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fU,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i7,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bH(B.A4,new C.dUV(d),A.bn(B.aV,q,q,q,q,B.fU,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.a9,A.w(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_e.prototype={
U(){return new C.bjj(A.zm(B.xR,B.nG,B.ur))}}
C.bjj.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c4(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fxp,w,w,w,1,w,!0),B.w,A.zl(this.d,B.bU,new C.dV8(this,d)),w,!1,!1,w,w)}}
C.aYr.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Qu,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lF.prototype={}
C.a69.prototype={
U(){return new C.bj0(null,null)}}
C.bj0.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bl(v,B.r6,v,1,v,w)
w.e=A.bl(v,B.pV,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bu(d){var w,v,u=this
u.bC(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bvb()},
B(d){var w,v,u=this,t=B.d.dM(D.a3V,new C.dGR(u),new C.dGS())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cvV(A.c7(new A.ha(A.a([w,v],x.dS)),new C.dGT(u,t),null),!0)}}
C.bj_.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0u(d,e)
break
case"house":p.m3(d,e,D.d5X)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdG()
$.X()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.x(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m8(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AY(d,e,12)
p.y3(d,e,B.kX,5,14)
break
case"grocery":p.cfN(d,e)
break
case"calculator":p.cfu(d,e)
break
case"lumber":p.cfV(d,e)
break
case"kitchen":p.cfQ(d,e)
break
case"landscape":p.m3(d,e,D.d6u)
s=new A.aO($.X().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.F(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.F(new A.cR(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.F(new A.cR(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.F(new A.ap(t,w))
s.F(new A.ap(0,w))
s.F(new A.bE())
w=A.N()
w.r=B.eg.j(0.85).gp(0)
d.aS(s,w)
p.AY(d,e,8)
p.y3(d,e,B.iL,4,18)
break
case"plumbing":p.cg3(d,e)
break
case"electrical":p.m3(d,e,D.dhm)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.b1(new A.a9(0,0,0+e.a,0+e.b),u)
p.m8(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m8(d,e,B.lS.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AY(d,e,10)
break
case"store":p.cgd(d,e)
break
case"paint_remodel":p.cfZ(d,e)
break
case"roofing":p.cg5(d,e)
break
case"warehouse":p.cgk(d,e)
break
case"vehicles":p.cgi(d,e)
break
case"farm":p.cfH(d,e)
break
case"restaurant":p.cg4(d,e)
break
case"tools":p.cgg(d,e)
break
case"wallet":p.cgj(d,e)
break
case"concrete":p.cfA(d,e)
break
case"blueprint":p.cfs(d,e)
break
default:p.b0u(d,e)}},
m3(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.X()
w=A.N()
w.sau(new A.a8(B.ax,B.aC,B.x,f,null,null).aA(0,v))
d.b1(v,w)},
m8(d,e,f,g,h){var w,v,u,t,s,r,q=new A.x(e.a/2,e.b/2),p=e.gdG()/2-h
$.X()
w=A.N()
w.b=B.ag
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.L()
v.drawArc.apply(v,[A.bW(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
y3(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdG()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.L()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AY(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.X()
o=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.L()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b0u(d,e){var w,v=this
v.m3(d,e,D.dfP)
w=v.c
v.m8(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m8(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bMA(d,e,B.hM,w)
v.y3(d,e,B.c.j(0.7),6,8)},
bMA(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.L()
s.drawRect(A.bW(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cfN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.cmn)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.X()
l=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
l.r=D.d4f[B.o.E(s,4)].j(0.85).gp(0)
k=l.L()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m8(d,e,B.c.j(0.35),w,16)
j.y3(d,e,B.iL,5,12)},
cfu(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m3(d,e,D.cmu)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdG()
$.X()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.x(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h2(g,g,g,g,g,B.a6,B.cb,g,B.dS,B.c7)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d86[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saU(0,new A.eS(r,g,g,B.d_,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eQ()
p.a6(d,new A.x(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cmw[o]
l=B.kr.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saU(0,new A.eS(m,g,g,B.d_,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eQ()
p.a6(d,new A.x(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m8(d,e,B.c.j(0.35),w*1.5,14)
h.m8(d,e,B.eE.j(0.55),-v*3.141592653589793*2,8)
h.m8(d,e,B.xB.j(0.4),r*2.8,22)
h.y3(d,e,B.pE,8,10)
h.AY(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.X()
r=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.L()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cfV(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,T.awC)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bz(new A.a9(20,q,u,q+10),B.hG)
$.X()
o=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
o.r=A.ar(B.fL,B.oJ,(r+1)/2).gp(0)
n=o.L()
t.drawRRect(A.eU(p),n)
n.delete()}m.m8(d,e,B.fL.j(0.35),w,15)
m.AY(d,e,8)},
cfQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.d4J)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.E(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.E(r*0.13,0.7)
$.X()
l=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.L()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m8(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.y3(d,e,B.pB,4,14)},
cg3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m3(d,e,D.cUD)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.X()
n=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
n.b=B.ag
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.L()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.y3(d,e,B.oP,6,12)
l.m8(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cgd(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m3(d,e,D.cA0)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bz(new A.a9(q,14,q+u,22),B.iA)
$.X()
p=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
p.r=A.ar(B.fc,B.bL,(r+1)/2).gp(0)
o=p.L()
t.drawRRect(A.eU(q),o)
o.delete()}n.m8(d,e,B.c.j(0.3),w,16)
n.AY(d,e,8)
n.y3(d,e,B.vr,5,13)},
cfZ(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.d_x)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bz(new A.a9(q,p,q+8,p+(18+r*22)),B.hY)
$.X()
q=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
q.r=[B.i2,B.ds,B.bL,B.em][s].j(0.85).gp(0)
o=q.L()
t.drawRRect(A.eU(p),o)
o.delete()}this.m8(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cg5(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.cY1)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.X()
p=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.L()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.y3(d,e,B.cr,7,11)},
cgk(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.cCJ)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bz(new A.a9(p,o,p+(t-r*8),o+16),B.hG)
$.X()
p=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
p.r=A.ar(B.cr,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.L()
s.drawRRect(A.eU(o),n)
n.delete()}this.m8(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cgi(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.dll)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bz(new A.a9(r,q,r+28,q+8),B.hG)
$.X()
p=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.L()
t.drawRRect(A.eU(q),o)
o.delete()}this.AY(d,e,6)},
cfH(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.d3m)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.X()
s=A.N()
s.r=B.lS.j(0.75).gp(0)
d.af(new A.x(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
o.r=B.hj.j(0.85).gp(0)
o.c=3
n=o.L()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m8(d,e,B.lS.j(0.35),w,14)},
cg4(d,e){var w,v,u,t,s,r,q,p,o=this
o.m3(d,e,D.d5M)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cj(new A.x(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.L()
t.drawOval(A.bW(r),p)
p.delete()}o.y3(d,e,B.pB,5,16)
o.AY(d,e,7)},
cgg(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.diS)
w=m.c
v=w*3.141592653589793
m.m8(d,e,B.oJ.j(0.55),v*3,10)
m.m8(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
o.r=B.oJ.j(0.8).gp(0)
n=o.L()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cgj(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.dlZ)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bz(new A.a9(p,o,p+36,o+22),B.iA)
$.X()
p=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
p.r=A.ar(B.iL,B.lS,q).gp(0)
n=p.L()
s.drawRRect(A.eU(o),n)
n.delete()}m.AY(d,e,9)
m.m8(d,e,B.c.j(0.4),w*2.2,12)},
cfA(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.daR)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.x(v,u),34)
$.X()
s=A.N()
s.b=B.ag
s.c=5
s.r=B.c.j(0.45).gp(0)
d.eY(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.aw(B.Y,B.W,B.a_,B.a0,B.Z)
o.r=B.bP.j(0.85).gp(0)
n=o.L()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cfs(d,e){var w,v,u,t,s,r,q,p
this.m3(d,e,D.d6N)
$.X()
w=A.N()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.L()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.L()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.E(t*0.85,1)
$.X()
u=A.N()
u.r=B.ds.j(0.45).gp(0)
d.b1(new A.a9(0,p,0+v,p+6),u)
this.m8(d,e,B.kX.j(0.45),-t*3.141592653589793*2,11)},
aw(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.ast.prototype={
a_g(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPE(),$async$a_g)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8o(s),$async$a_g)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_g,v)},
afY(d){return this.ciB(d)},
ciB(d){var w=0,v=A.j(x.H),u=this,t
var $async$afY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ibt(d),$async$afY)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afY,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jF:B.j5
w=x.p
v=A.a([C.aQ1(!0,B.qJ,1/0,B.q4,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bK(B.b3,t,t,new A.D(B.vH,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.axz,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b3,B.b6,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dp(D.bMG,D.flJ,new C.ci0(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jI,t,t,t,t,B.cc)),1),B.ab,A.E(A.er(D.bV_,D.fAv,this.gc9z(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jI,t,t,D.b_m,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fK(1.7777777777777777,A.aF(!1,B.a2,!0,B.qJ,new A.an(B.V,t,B.b2,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aLb.prototype={
aX(){this.b6()
this.b5()
this.dL()},
t(){var w=this,v=w.b4$
if(v!=null)v.a5(0,w.gdH())
w.b4$=null
w.a2()}}
C.aT_.prototype={}
C.aSZ.prototype={}
C.aQY.prototype={}
C.YR.prototype={
U(){return new C.ayA()}}
C.ayA.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.ba("",B.b4,B.aN)
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.aq(w,v)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.ax()
w.P$=0
this.a2()},
Ke(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.f1G)
return}t=u.c
t.toString
v=u.e
A.a3(t,!1).N(new C.aT_(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e1:B.c,k=A.m(20),j=A.p(n,D.bUF,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aI(n,n,n,n,A.W(B.cw,m?B.bq:B.bl,n,n,n,n),n,n,n,new C.d0D(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hcX(new C.d0E(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jF:B.j5
r=A.m(12)
q=A.m(12)
p=m?B.e5:B.bP
t=A.aL(n,B.U,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dj),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d0F(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a6,n,X.Jm,n,n,n,n)
u=m?B.aP:B.av
m=m?B.e5:B.bP
return A.eM(n,l,new A.cT(B.lN,A.cc(A.w(A.a([j,B.aO,i,B.au,w,B.N,v,B.aO,t,B.bv,A.B(A.a([A.E(A.dQ(B.dh,new C.d0G(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cj,n,new A.b7(A.m(12),B.X),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.as,A.E(A.bH(D.fAK,o.ga2l(),A.bn(B.aV,n,n,n,B.c,n,B.cj,n,new A.b7(A.m(12),B.X),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.r,n,B.y,n,B.Bv,n,n,B.af),n),n,n,n,A2.Bw,B.d4,n,new A.b7(k,B.X),n)}}
C.YQ.prototype={
U(){return new C.ayz()}}
C.ayz.prototype={
a_(){this.a1()
var w=$.ax()
this.d!==$&&A.aP()
this.d=new A.aq(B.at,w)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.ax()
w.P$=0
this.a2()},
Ke(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.f_j)
return}v=this.c
v.toString
A.a3(v,!1).N(new C.aSZ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e1:B.c,n=A.m(20),m=A.p(q,D.bRe,B.f,q,q,new A.o(B.bN.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aI(q,q,q,q,A.W(B.cw,p?B.bq:B.bl,q,q,q,q),q,q,q,new C.d0z(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.W(B.akO,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jF:B.j5
t=A.m(12)
s=A.m(12)
r=p?B.e5:B.bP
v=A.aL(q,B.U,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dj),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d0A(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a6,q,B.kO,q,q,q,q)
w=p?B.aP:B.av
p=p?B.e5:B.bP
return A.eM(q,o,new A.cT(B.lN,A.cc(A.w(A.a([m,B.aO,l,B.aA,v,B.bv,A.B(A.a([A.E(A.dQ(B.dh,new C.d0B(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cj,q,new A.b7(A.m(12),B.X),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.as,A.E(A.bH(D.fHJ,this.ga2l(),A.bn(B.bN,q,q,q,B.c,q,B.cj,q,new A.b7(A.m(12),B.X),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.r,q,B.y,q,B.Bv,q,q,B.af),q),q,q,q,A2.Bw,B.d4,q,new A.b7(n,B.X),q)}}
C.Yo.prototype={
U(){return new C.axj()}}
C.axj.prototype={
a_(){var w,v=this
v.a1()
w=$.ax()
v.d!==$&&A.aP()
v.d=new A.aq(B.at,w)
v.e!==$&&A.aP()
v.e=new A.aq(new A.ba("1",B.b4,B.aN),w)
v.f!==$&&A.aP()
v.f=new A.aq(B.at,w)
v.r!==$&&A.aP()
v.r=new A.aq(B.at,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.ax()
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
gJz(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaj8(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb3j(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aOi(d){var w,v=B.k.D(this.gJz()+d,0.25,999999),u=B.k.jb(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aM(u,w,"")}t.saU(0,u)
this.m(new C.czd())},
axH(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jF:B.j5,s=A.m(14),r=A.m(14)
u=u?B.e5:B.bP
return A.br(w,new A.b4(4,s,B.dj),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.abc),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c9A(d,e,f){return this.axH(d,e,f,null)},
Ke(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaj8()<=0){s.c.I(x.q).f.R(D.f3y)
return}r=s.c
r.toString
v=s.gJz()
u=s.gaj8()
t=s.gb3j()
A.a3(r,!1).N(new C.aQY(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tT(n),l=n?B.e1:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bN.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bKC,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aI(o,o,o,o,A.W(B.cw,n?B.bq:B.bl,o,o,o,o),o,o,o,new C.czj(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.U,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axH(m,"Item name (optional)","Lumber, paint, labor\u2026",B.O6),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,X.Jm,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jF:B.j5
t=A.m(14)
s=A.I(n?B.e5:B.bP,B.q,1)
r=A.aI(o,o,o,o,A.W(B.yJ,n?B.aP:B.av,o,o,o,20),o,o,o,new C.czk(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aL(o,B.U,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bWx,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.czl(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aI(o,o,o,o,A.W(B.hC,n?B.aP:B.av,o,o,o,20),o,o,o,new C.czm(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aL(o,B.U,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axH(m,"Amount","0.00",B.hQ),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.czn(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a6,o,B.an,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.d00,new C.czo(p,m),t),t.k("ak.E"))
i=A.a([i,B.bv,v,B.aA,h,B.N,s,B.ac,A.bV(B.bB,u,B.bs,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aL(o,B.U,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c9A(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.czp(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,B.kO,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bN.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJz()===B.k.jb(p.gJz())?B.k.O(p.gJz()):p.gJz()
s=p.gb3j()
r=A.AP(p.gaj8())
i.push(A.p(o,A.B(A.a([A.E(A.w(A.a([u,B.au,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bCF(p.gJz()*p.gaj8(),B.b_,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jv,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.e5:B.bP
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cj,o,new A.b7(j,B.X),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dQ(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.czq(d),h),1),B.as,A.E(A.dp(D.aoh,D.fDF,p.ga2l(),A.bn(B.aV,o,o,0,B.c,o,B.cj,o,new A.b7(A.m(14),B.X),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eM(o,l,new A.cT(A1.abB,A.cc(A.w(i,B.ai,o,B.e,B.P,0,B.p),B.r,o,B.y,o,Af.rb,o,o,B.af),o),o,o,o,B.MR,B.d4,o,new A.b7(k,B.X),o)}}
C.a1_.prototype={
U(){return new C.bvn()}}
C.bvn.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.aq(new A.ba(w,B.b4,B.aN),v)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.ax()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e1:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jF:B.j5
v=A.aL(s,B.U,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dj),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.faf(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a6,s,B.an,s,s,s,s)
u=A.E(A.dQ(B.dh,new C.fag(d),s),1)
r=A.bn(B.bN,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eM(s,q,new A.D(B.Bv,A.w(A.a([o,B.aA,v,B.aO,A.B(A.a([u,B.as,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fah(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d4,s,new A.b7(p,B.X),s)}}
C.abn.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.Fy.prototype={
U(){return new C.bvl(null,null)}}
C.bvl.prototype={
a_(){var w,v=this
v.a1()
w=A.bl(null,D.bsn,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bxq()},
gbyV(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bN,B.b_],x.O)
case 2:return A.a([B.bu,B.aV,B.b_],x.O)
case 3:return A.a([B.aR,B.c8,B.k3],x.O)
case 4:return A.a([B.iH,B.bN,B.fd],x.O)
case 0:return A.a([B.aV,B.bN,B.b_],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.eJ(A.c7(v,new C.fad(this,new C.tT(w.ax.a===B.I)),null),null)}}
C.axc.prototype={
U(){return new C.bvm(null,null)}}
C.bvm.prototype={
a_(){var w,v=this
v.a1()
w=A.bl(null,B.n8,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bxr()},
B(d){var w=this.d
w===$&&A.c()
return A.c7(w,new C.fae(this),null)}}
C.bvk.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bz(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aO($.X().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iM(v))
w=A.N()
w.b=B.ag
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.N()
w.b=B.ag
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aS(u,w)
w=A.xd(u)
t=A.a([],x.f5)
w=new A.vF(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.k_('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hu(w,r)
w.jB()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRK(d,q,r,o,0,0.2,4.2,0.92)
p.aRK(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRK(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hyM(e.a.a,e,t,t+f*i,!0),r=A.bB2(s.gbE().a.getBounds())
$.X()
w=A.N()
w.b=B.ag
w.c=j
w.d=B.bV
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Ho,null).aA(0,r))
d.aS(s,w)},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.aNd.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.aNe.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.tT.prototype={}
C.ass.prototype={
U(){return new C.aEL()},
gdY(){return this.c}}
C.aEL.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.agN()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Lg(w,v)
this.a2()},
agN(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bB9(t.c,t.d.a),$async$agN)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eJP(u,s))
return A.h(null,v)}})
return A.i($async$agN,v)},
Q4(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eJG(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Lg(t,s),$async$Q4)
case 2:if(u.c!=null)u.m(new C.eJH(u))
return A.h(null,v)}})
return A.i($async$Q4,v)},
QA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cd(null,null,!0,null,new C.eJN(t,new C.tT(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$QA)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8o(q),$async$QA)
case 6:case 5:t.m(new C.eJO(t,r))
w=7
return A.b(t.Q4(),$async$QA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QA,v)},
VM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ibe(r),$async$VM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eJB(t,new C.r4(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Q4(),$async$VM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VM,v)},
ceE(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hqF(t,new C.eJF(u),w,v)},
aaX(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bJ(new A.ay(v,2.5,B.q,-1),B.X,B.X,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.b_8,w,w,B.n),w,22,w,w,w,w,w,22)},
aa0(d){return this.bKQ(d)},
bKQ(d){var w=0,v=A.j(x.H),u=this
var $async$aa0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eJE(u,d))
w=2
return A.b(u.Q4(),$async$aa0)
case 2:return A.h(null,v)}})
return A.i($async$aa0,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bZ:B.ij,d=A.m(8),a0=A.W(V.a_P,f?B.bq:B.bl,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.D(B.FR,A.B(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eJQ(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.V,g,B.b2,B.r,A.a([A.bv(A.m(22),C.aQ1(!0,A.m(22),1/0,B.q4,g,d,1/0),B.aq),A.ao(10,A.dp(D.bPf,D.fG1,h.gb1f(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b7(A.m(12),B.X),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eW,22),new A.ac(-4,B.G,B.bN.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.V,g,B.b2,B.r,A.a([C.aQ1(!0,A.m(16),1/0,B.NB,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a8(B.b3,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.aaX(!0),g,g,8,g,8,g),A.ao(g,A.cwF(h.aaX(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cwF(h.aaX(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cwF(h.aaX(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bLc,D.fzt,h.gb1f(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b7(A.m(12),B.X),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bYe,B.n),g,g,g,g,B.lY,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b9L,B.nQ,B.h_],u):A.a([B.b_,B.aV,B.bN],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eW,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jL,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h0,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.al,C.bCF(h.d.gx3(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hk.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aR.j(0.28),B.cH,14)],t)
j=B.aR.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.an(B.V,g,B.aa,B.r,A.a([p,new A.D(D.bx5,A.B(A.a([o,B.as,A.aF(!1,B.a2,!0,g,A.aK(!1,n,!0,A.eF(new A.D(A5.y3,A.w(A.a([A.p(g,D.anT,B.f,g,g,new A.o(j,g,A.I(B.aR.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fH,D.fou],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gceD(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aO,w,B.N,u,B.bv,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b0,A.dp(Ao.a1z,D.fmm,h.gbzn(),A.bn(B.aV,g,g,g,B.c,g,B.iO,g,new A.b7(A.m(12),B.X),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e1:B.c
v=A.m(14)
u=A.I(f?B.e5:B.bP,B.q,1)
t=A.W(B.a09,f?B.bq:B.bl,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.w(A.a([t,B.R,s,B.al,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rc,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eJR(h,new C.tT(f)),A.S(w).k("M<1,t>")))
if(h.e)d.push(new A.D(B.Bl,A.at(A.mO(g,f?B.bq:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.w(A.a([new A.D(B.Bp,a0,g),A.E(A.cc(A.w(d,B.E,g,B.e,B.j,0,B.p),B.r,g,B.y,g,F.ya,g,g,B.af),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),g,!1,!1,g,g)},
bD1(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e1:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b1V,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hR:B.hb,B.b_,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcUo()
v=A.AP(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.E,u,B.b7,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bN.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCF(d.c*d.d,B.b_,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.ha,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.DZ(A.B(A.a([m,A.E(new A.D(B.ai0,A.B(A.a([l,B.bc,t,B.ab,k,A.aI(u,u,u,u,A.W(B.cw,(r?B.bq:B.bl).j(0.75),u,u,u,20),u,u,u,new C.eJC(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b0L,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.adm.prototype={
Eu(d){return this.bMc(d)},
bMc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Eu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p9(d,o,!1),$async$Eu)
case 3:if(!f||d.e==null){w=1
break}A.a3(d,!1).N(null)
w=4
return A.b(A.bN(Ae.Bj,null,x.H),$async$Eu)
case 4:s=t.d
w=5
return A.b(C.fIf(!0,o,s),$async$Eu)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gv(r,"ngmy_project_"+A.aM(s.b,q,"_"),!1),$async$Eu)
case 6:p=f
w=7
return A.b(A.p8(o,!1),$async$Eu)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Eu,v)},
a_i(d){return this.cv1(d)},
cv1(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p9(d,s,!1),$async$a_i)
case 3:if(!f||d.e==null){w=1
break}A.a3(d,!1).N(null)
A.hE(d,new C.asm(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p8(s,!1),$async$a_i)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_i,v)},
Q5(d){return this.cr4(d)},
cr4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Q5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a3(d,!1).N(null)
w=3
return A.b(A.hE(d,D.aH3,!0,"NgmyWorksheetProjectScan",x.N),$async$Q5)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCG(s),$async$Q5)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.f2G)
w=1
break}q=C.h2O(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dS(p,x.H),$async$Q5)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Q5,v)},
a_j(d){return this.cD4(d)},
cD4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a3(d,!1).N(null)
w=3
return A.b(C.bCd(),$async$a_j)
case 3:s=f
if(s==null){w=1
break}r=C.h2O(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dS(q,x.H),$async$a_j)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_j,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tT(u),s=w.d.d.length,r=u?B.e1:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kj,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vN,A.p(v,A.w(A.a([w.ctB(d,t,s),new A.D(D.bwu,A.w(A.a([w.b4f(t,"QR restore"),B.R,A.B(A.a([w.b_c(t,!0,B.jy,B.aR,B.aR,new C.eJT(w,d),"Show to scan","QR code"),B.as,w.axI(t,B.ja,B.b5,B.by,new C.eJU(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b4f(t,"Backup files"),B.R,A.B(A.a([w.axI(t,B.hE,B.aV,B.bN,new C.eJV(w,d),"Full copy","Backup file"),B.as,w.axI(t,R.yO,B.aF,B.aS,new C.eJW(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ae,!0,!0)},
ctB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f3,B.cM,B.fC],k):A.a([B.b_,B.aV,B.bN],k)
w=A.ao(l,A.W(B.uj,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kC,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aQ1(!0,A.m(13),64,D.bGz,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,D.aRF,l,l,l)
r=C.bCF(r.gx3(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.V,l,B.aa,B.r,A.a([w,new A.D(D.bwS,A.w(A.a([v,A.B(A.a([s,B.er,A.E(A.w(A.a([u,B.au,t,B.N,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fF,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aI(l,l,l,l,A.W(B.cw,B.c.j(0.85),l,l,l,l),l,l,l,new C.eJS(d),l,l,l,A.nD(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,F.aOW,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b4f(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_c(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.agB:B.aP
if(e)w=B.aR.j(o?0.45:0.35)
else{w=o?B.e5:B.bP
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aR.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a2,!0,r,A.aK(!1,q,!0,A.eF(new A.D(F.Zc,A.w(A.a([t,B.ac,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
axI(d,e,f,g,h,i,j){return this.b_c(d,!1,e,f,g,h,i,j)}}
C.asm.prototype={
U(){return new C.bkC()}}
C.bkC.prototype={
a_(){this.a1()
this.aeI()},
aeI(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aeI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCH(p.c,p.d),$async$aeI)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eJw(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJx(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AR:B.ij,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.W(B.eH,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eJy(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zT],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f3,B.cM,B.fC],s):A.a([B.b_,B.aV,B.bN],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eW,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.df,B.L,h,h)
p=C.bCF(p.gx3(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.w(A.a([o,B.al,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fF,h,h,h)],u),B.m,h,B.b7,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,F.Zz,h,h,1/0)
t=g?D.bjt:B.c
q=A.m(24)
p=A.I(w?B.aR.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.TT,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.edY)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pU(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aO)
n=w?B.aR:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aR:B.aV).j(0.35),B.q,1)
k=w?B.NR:B.Ol
k=A.W(k,w?B.aR:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iO,h,h,h))
return A.c4(h,f,A.bm(!0,A.w(A.a([new A.D(Ab.N2,e,h),A.E(A.cc(A.w(A.a([s,B.aO,A.p(h,A.w(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tY,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,F.aj7,h,h,B.af),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),h,!1,!1,h,h)}}
C.asr.prototype={
U(){return new C.aEK(A.zm(B.Mg,B.nG,B.ur))}}
C.aEK.prototype={
t(){this.d.t()
this.a2()},
aMj(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iQ(w,d)},
cas(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i98(t)
if(s!=null){this.aMj(s)
return}r=C.hhw(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aMj(B.a.i(B.a.b2(r,B.a.cD(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aI(t,t,t,t,A.W(u.f?B.u9:A7.NY,t,t,t,t,t),t,t,t,new C.eJA(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AR,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fzn,t,t,t,1,t,!0),q=A.zl(u.d,B.bU,u.gcar()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c4(r,B.w,new A.an(B.V,t,B.b2,B.r,A.a([q,p,A.ao(32,A.p(t,D.fy9,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jv,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJy.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.O7.prototype={
U(){return new C.aEM(D.aat,A.a([],x.D))},
br(){return this.r.$0()},
gdY(){return this.c}}
C.aEM.prototype={
gcAX(){return J.bDQ(this.e,0,new C.eKi())},
a_(){this.a1()
$.aV.bY$.push(this)
this.vK()},
t(){$.aV.hN(this)
this.a2()},
j7(d){if(d===B.fA)this.vK()},
vK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CT(q.a.c).d9(0,B.k9),$async$vK)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eKe(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eKf(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vK,v)},
I_(d){return this.bIY(d)},
bIX(){return this.I_(null)},
bIY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$I_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ibg(l,d),$async$I_)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lo(l,r,q,D.db3,new A.T(Date.now(),0,!1))
w=4
return A.b(C.Lg(t.a.c,p),$async$I_)
case 4:o=f
w=5
return A.b(t.vK(),$async$I_)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.f_N)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.f1A)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Ey(m)
case 1:return A.h(u,v)}})
return A.i($async$I_,v)},
Ey(d){return this.cep(d)},
cep(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ey=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.ass(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ey)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Lg(u.a.c,t),$async$Ey)
case 5:case 4:w=6
return A.b(u.vK(),$async$Ey)
case 6:return A.h(null,v)}})
return A.i($async$Ey,v)},
vw(d){return this.bZ2(d)},
bZ2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bCd(),$async$vw)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aH3,!0,"NgmyWorksheetProjectScan",x.N),$async$vw)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCG(q),$async$vw)
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
r.R(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h2O(s)
w=15
return A.b(C.Lg(t.a.c,p),$async$vw)
case 15:o=f
w=16
return A.b(t.vK(),$async$vw)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.f1F)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Ey(p)
case 1:return A.h(u,v)}})
return A.i($async$vw,v)},
NR(d){return this.bHD(d)},
bHD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cd(null,null,!0,null,new C.eK_(d),s,null,!0,!0,x.y),$async$NR)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oL(t.a.c,A.a([],x.D)),$async$NR)
case 6:w=7
return A.b(t.vK(),$async$NR)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.f_S)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
ceC(d){var w=this.c
w.toString
A.bR(B.K,null,new C.eK8(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4R(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jF
else w=B.c
v=A.m(16)
u=A.I(p?B.e5:B.bP,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a2,!0,r,A.aK(!1,q,!0,A.p(r,A.w(A.a([s,B.ac,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vM,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_N(d,e){return this.ceq(d,e)},
ceq(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_N=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(B.K,null,new C.eK3(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_N)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hqF(r,new C.eK4(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NT(d,e),$async$a_N)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_N,v)},
b1R(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aw
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a2,!0,u,A.aK(!1,u,!0,new A.D(B.y8,A.B(A.a([s,B.bc,t,A.W(B.eC,w?B.bq:B.bl,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
clj(d,e,f,g,h,i){return this.b1R(!1,d,e,f,g,h,i)},
NT(d,e){return this.bHN(d,e)},
bHN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l9(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NT)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAY(t.a.c,d.a),$async$NT)
case 6:w=7
return A.b(t.vK(),$async$NT)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NT,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tT(o),m=o?B.bZ:B.ij
if(q.f)o=D.b7C
else{w=q.bCa(n)
v=q.bY8(n)
u=q.gbzh()
if(o)t=B.jF
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aO,new C.Fy(A.p(p,A.B(A.a([q.aBa(Q.NA,"Projects",n,D.aat),q.aBa(B.w0,"Cashier",n,D.aWY),q.aBa(B.Ga,"Family Tree",n,D.hg3)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ex,0.95,u,p),B.bv],r)
w=q.d
if(w===D.aat){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b0,new C.axc(q.gaQw(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cll(n)],r))}else{o=q.a
if(w===D.aWY)u.push(new C.aot(o.c,n,p))
else{w=q.r
u.push(new C.apB(o.c,o.d,o.e,o.f,new C.eKl(q),new C.eKm(q),new A.cx(w,x.b4)))}}o=A.cc(A.w(u,B.E,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ah.MW,p,p,B.af)}return A.c4(p,m,A.bm(!0,o,!0,!1,B.ae,!0,!0),p,!1,!1,p,p)},
bCa(d){var w=null,v=A.m(8),u=d.a,t=A.W(V.a_P,u?B.bq:B.bl,w,w,w,16)
return A.aK(!1,v,!0,new A.D(B.l_,A.B(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJX(this),w,w,w,w,w,w,w)},
gbzh(){switch(this.d.a){case 0:return D.a9J
case 1:return D.h5G
case 2:return D.a9K}},
bY8(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bR4,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bBi,A.aF(!1,B.a2,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bOx,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eK0(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.E,w,B.e,B.j,0,w,w),r=B.b_.j(0.55),q=A.m(12)
return new C.Fy(A.p(w,A.w(A.a([new A.D(F.Zi,s,w),A.p(w,A.w(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AP(this.gcAX()),w,w,w,w,w,w,D.fiH,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vL,B.jv,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ae,1,D.h5F,w)},
aBa(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bl
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bl
return A.E(A.aF(!1,B.a2,!0,u,A.aK(!1,s,!0,A.db(u,A.B(A.a([w,B.ei,new A.dr(1,B.cn,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b7,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iM,u,u,u,B.FS,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eKh(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
cll(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e1:B.c
u=A.m(15)
t=A.p(p,D.bOD,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eW,28)],x.V),D.c_J,B.a4),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fy(A.p(p,A.w(A.a([t,B.d5,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.B(A.a([A.E(q.aS4(B.ja,"Scan QR",new C.eKb(q),d),1),B.as,A.E(q.aS4(R.yO,"Upload file",new C.eKc(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bH(D.fJC,q.gaQw(),A.bn(B.aV,p,p,p,B.c,B.fU,p,p,new A.b7(A.m(12),B.X),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bxX,1.05,D.a9J,p)}w=J.b6(q.e,new C.eKd(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fy(A.w(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a9J,p)},
aS4(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a2,!0,u,A.aK(!1,t,!0,A.p(w,A.w(A.a([A.W(d,B.b_,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.fh4,B.L,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ahT,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
clk(d,e){var w,v,u=null,t=e.a,s=t?B.e1:B.c,r=A.m(14),q=A.I(t?B.e5:B.bP,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ep,10)],x.V),o=A.m(14),n=t?B.bq:B.bl
n=A.bv(B.VP,new A.fK(1.7777777777777777,C.aQ1(!0,B.fB,1/0,Q.NA,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.w(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AP(d.gx3()),u,u,u,u,u,u,D.ff9,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a2,!0,u,A.aK(!1,o,!0,A.w(A.a([n,new A.D(B.bC,A.B(A.a([v,A.aI(u,u,u,u,A.W(Ai.a0Q,t?B.bq:B.bl,u,u,u,u),u,u,u,new C.eK9(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eKa(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e9,u,u,u,1/0)}}
C.bx3.prototype={}
C.r4.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.G(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcUo(){var w,v,u,t,s=this.c
if(s===B.k.jb(s))w=B.o.u(B.k.O(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aM(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lo.prototype={
gx3(){return B.d.cM(this.d,0,new C.cyE())},
ag(){var w=this,v=w.d,u=A.S(v).k("M<1,a6<n,@>>")
v=A.C(new A.M(v,new C.cyD(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bc2(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lo(w.a,w.b,v,u,w.e)},
bbK(d){return this.bc2(d,null)},
SO(d){return this.bc2(null,d)}}
C.HF.prototype={
a3(){return"FamilyGender."+this.b}}
C.i1.prototype={
ag(){var w=this
return A.G(["id",w.a,"name",w.b,"gender",C.hmo(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDT(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i1(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akI.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kF.prototype={
gaoD(){var w=this.f
return new A.Z(w,new C.bOJ(),A.S(w).k("Z<1>")).gK(0)},
ag(){var w=this,v=w.f,u=A.S(v).k("M<1,a6<n,@>>")
v=A.C(new A.M(v,new C.bOI(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i1B(w.y),"games",w.z],x.N,x.z)},
wp(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kF(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bc1(d,e){var w=null
return this.wp(w,w,w,d,e,w,w,w,w)},
cK1(d,e,f,g,h,i,j){return this.wp(d,e,null,f,g,h,i,j,null)},
aDY(d,e){var w=null
return this.wp(w,w,w,w,d,w,w,e,w)},
cK3(d,e,f,g,h,i,j,k){return this.wp(d,e,null,f,g,h,i,j,k)},
cIw(d){var w=null
return this.wp(w,w,w,w,w,w,w,d,w)},
cIU(d){var w=null
return this.wp(w,w,w,w,w,w,w,w,d)},
bbE(d){var w=null
return this.wp(w,w,d,w,w,w,w,w,w)},
aDK(d){var w=null
return this.wp(w,w,w,w,w,d,w,w,w)},
cJy(d,e,f){var w=null
return this.wp(w,d,w,w,e,w,w,f,w)},
cIj(d){var w=null
return this.wp(w,w,w,d,w,w,w,w,w)},
cJ6(d,e){var w=null
return this.wp(d,w,w,w,w,w,e,w,w)}}
C.cyF.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cyG.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aGQ.prototype={}
C.b8t.prototype={
bA(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b8t()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b8s.prototype={
gwh(){return!0},
gG5(){return this.z.b<this.b.length},
aTI(d){switch(0){case 0:return d.a.c}},
aTp(d){switch(0){case 0:return d.a.d}},
bRy(d,e){switch(0){case 0:return new A.hN(d,e)}},
bQW(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h4(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iF(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ho(b4)
switch(0){case 0:v=b5.b
u=new A.kC(0,v,0,1/0)
t=w===B.TM
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h4(b4,u,!0)
f=b1.aTI(g)
f.toString
e=b1.aTp(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGQ(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGQ(k,j,i))}d=s.length
switch(0){case 0:q=b5.cw(new A.hN(m,l))
a0=q.a
a1=q.b
b1.a=new A.iF(0,0,a0,a1)
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aTI(g)
e=b1.aTp(g)
e.toString
a9=b1.bQW(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bRy(a6,a3+a9)
b0=g.a
g.a=new A.iF(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h0(d){var w,v,u,t,s,r=this
r.lk(d)
w=d.b
w.ic()
v=A.dk()
u=r.a
v.e9(u.a,u.b,0,1)
w.oX(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h0(d)
w.ni(0)},
GA(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ic(){return this.z}}
C.bvo.prototype={}
var z=a.updateTypes(["aA<~>()","R(i1)","R(kF)","~()","R(ng)","a6<n,@>(kF)","H(kF,kF)","H(i1,i1)","n(i1)","kF(a6<@,@>)","R(lo)","R(z3)","R(ul)","ul()","q(K,K,K)","ng(a6<@,@>)","H(i1)","R(r4)","aA<~>(lo)","H(lo,lo)","i1(a6<@,@>)","eE<n?>(i1)","n?(i1)","ZT(Y)","a6<n,@>(ng)","ai<i1>()","a6<n,@>(i1)","H(ng,ng)","t(ol)","SN(Y)","R(LV)","ai<le>()","~(i1)","n(n)","V6(Y)","~(n,le?)","ad1(Y)","Zg(Y)","i1(i1)","cM(bw<n,FN>)","cM(K4)","R(uk)","H?(i1)","i1()","R(K4)","D(i1)","~(HF)","ai<ku>(K)","t(HF,n,a1)","~(H)","bw<n,ai<a6<n,@>>>(n,ai<ng>)","uk()","+count,id,name(H,n,n)(kF)","kF(kF)","n(kF)","a_e(Y)","R(lF)","lF()","Yo(Y)","a1_(Y)","YR(Y)","YQ(Y)","R(aez)","Ze(Y)","t(r4)","adm(Y)","~(m4)","aA<~>([n?])","K(K,lo)","t(lo)","K(K,r4)","a6<n,@>(r4)","r4(a6<@,@>)","Zi(Y)","YP(Y)","SM(Y)","lo(a6<@,@>)","n(T)","n(lo)","a6<n,@>(lo)","cq(HE)","kF(a6<n,@>)","a_d(Y)"])
C.fAU.prototype={
$1(d){return d.a+" "+d.b},
$S:120}
C.fAT.prototype={
blh(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qX(s,d,B.hF,"book",F.Fx),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.L4(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.blh(d)},
$S:340}
C.fAV.prototype={
$1(d){return d.b},
$S:120}
C.fKb.prototype={
$1(d){var w=null
return A.eM(w,B.K,new G.Pu(this.a,this.b,w),w,w,0,B.Zd,B.d4,w,w,w)},
$S:47}
C.foZ.prototype={
$1(d){return d!=null},
$S:218}
C.fp_.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:218}
C.fp4.prototype={
$1(d){if(this.a)return new A.x(d.a*520,d.b*160)
return d},
$S:173}
C.fyD.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.h9(w,B.rH,w,w,w,w,w,w,w,B.du,w,w,10.5,w,B.eo,w,!0,w,w,w,w),w),u=f?B.eo:B.vV
return new A.nP(D.btq,A.a9E(A.a([new A.fR(130,w,v),new A.z2(1,B.G3,A.fb(e,w,w,w,A.h9(w,g==null?D.egg:g,w,w,w,w,w,w,w,B.du,w,w,11,w,u,w,!0,w,w,w,w),w))],x.U),B.xN,B.lB))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1918}
C.fyC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vv(999)
f=A.x5(A.lA(h,A.fb("Cashier",h,h,h,A.h9(h,D.zF,h,h,h,h,h,h,h,B.du,h,h,10,h,B.eo,h,!0,h,h,h,h),h),h,new A.kD(D.eg7,h,f,B.hJ,h),h,h,D.btV,h))
w=A.x5(A.fb("Debt receipt",h,h,h,A.h9(h,h,h,h,h,h,h,h,h,B.du,h,h,22,h,B.eo,h,!0,h,h,h,h),h))
v=A.x5(A.fb(C.wP(new A.T(Date.now(),0,!1),!0),h,h,h,D.a8h,h))
u=A.vv(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.h9(h,h,h,h,h,h,h,h,h,B.du,h,h,14,h,B.eo,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a8h,h)
q=A.vv(10)
p=x.U
u=A.lA(h,A.yW(A.a([s,new A.fR(h,2,h),r,new A.fR(h,10,h),A.lA(h,A.yW(A.a([A.fb("Amount owed",h,h,h,D.a8h,h),new A.fR(h,2,h),A.fb(A.AP(t.c),h,h,h,A.h9(h,D.zF,h,h,h,h,h,h,h,B.du,h,h,20,h,B.eo,h,!0,h,h,h,h),h)],p),B.r3,B.lB),h,new A.kD(B.pg,h,q,B.hJ,h),h,h,D.bt6,1/0)],p),B.r3,B.lB),h,new A.kD(F.aIh,h,u,B.hJ,h),h,h,D.buY,1/0)
q=new A.nw(D.ega,0.9,B.kT)
r=A.vv(12)
s=i.c
o=s.$2("Original due",C.wP(t.r,!1))
n=s.$2("Current due",C.wP(t.f,!1))
m=i.d
l=new A.nw(m,1.1,B.kT)
k=A.vv(8)
j=i.a
k=A.a([o,n,new A.fR(h,6,h),A.lA(h,A.x5(A.fb(t.gaKP(),h,h,h,A.h9(h,m,h,h,h,h,h,h,h,B.du,h,h,11,h,B.eo,h,!0,0.5,h,h,h),h)),h,new A.kD(h,new A.pC(l,l,l,l),k,B.hJ,h),h,h,D.bu2,1/0),new A.fR(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zF))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zF))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.h9(h,B.rH,h,h,h,h,h,h,h,B.du,h,h,10.5,h,B.eo,h,!0,h,h,h,h),h)
m=A.S(o).k("M<1,Sk>")
o=A.C(new A.M(o,new C.fyB(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fR(h,4,h),n,new A.fR(h,6,h),new C.b8s(5,5,new C.b8t(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fR(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fR(h,8,h),w,new A.fR(h,3,h),v,new A.fR(h,16,h),u,new A.fR(h,10,h),A.lA(h,A.yW(k,B.xN,B.lB),h,new A.kD(h,new A.pC(q,q,q,q),r,B.hJ,h),h,h,B.ai4,1/0)],p)
w=j.a
if(w!=null){v=new A.nw(B.IA,1,B.kT)
B.d.v(f,A.a([new A.fR(h,16,h),A.fb("Debtor signature",h,h,h,A.h9(h,B.rH,h,h,h,h,h,h,h,B.du,h,h,10,h,B.eo,h,!0,h,h,h,h),h),new A.fR(h,6,h),A.lA(h,new A.HV(w,B.VZ,h,h),h,new A.kD(h,new A.pC(v,v,v,v),A.vv(6),B.hJ,h),82,h,B.N0,1/0)],p))}f.push(new A.fR(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.f7N,h))
f.push(new A.fR(h,18,h))
f.push(A.x5(A.fb("NGMY.ORG",h,h,h,A.h9(h,D.zF,h,h,h,h,h,h,h,B.du,h,h,14,h,B.eo,h,!0,1.8,h,h,h),h)))
return f},
$S:422}
C.fyB.prototype={
$1(d){var w=null,v=new A.nw(D.IB,0.7,B.kT),u=A.vv(999)
return A.lA(w,A.fb(C.wP(d,!1),w,w,w,A.h9(w,D.IB,w,w,w,w,w,w,w,B.du,w,w,9.5,w,B.eo,w,!0,w,w,w,w),w),w,new A.kD(w,new A.pC(v,v,v,v),u,B.hJ,w),w,w,D.bzl,w)},
$S:1919}
C.c3N.prototype={
$1(d){var w=null,v=B.bx.j(0.08),u=A.m(999),t=A.I(B.bx.j(0.28),B.q,1)
return A.p(w,A.d(C.wP(d,!1),w,w,w,w,w,w,D.feF,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eG,w,w,w)},
$S:1920}
C.fKH.prototype={
$1(d){var w=null,v=A.aH(d,B.bW,x.w).w,u=A.m(26),t=A.aI(w,w,w,w,D.bRZ,w,w,w,new C.fKE(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eM(w,B.K,new A.cT(new A.aX(0,380,0,v.a.b*0.9),A.aF(!1,B.a2,!0,u,new A.D(B.Z3,A.w(A.a([new A.bK(B.a8,w,w,t,w),new A.dr(1,B.cn,A.cc(A.w(A.a([new A.eJ(new C.aYt(r,w),s),B.R,A.B(A.a([A.E(A.er(B.yV,D.fFX,new C.fKF(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f9,w,new A.b7(A.m(14),B.X),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dp(B.a1p,D.fCo,new C.fKG(r,d),A.bn(B.b_,w,w,w,B.c,w,B.f9,w,new A.b7(A.m(14),B.X),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.r,w,B.y,w,w,w,w,B.af),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ah),w),w,w,0,Al.Zr,B.d4,w,w,w)},
$S:47}
C.fKE.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fKF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.aj$.x.h(0,t.a)
m=m==null?null:m.gba()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m0(2.5),$async$$0)
case 4:w=3
return A.b(e.hu(B.h4),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eV(B.dC.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aM(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.t3(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fFd(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKz.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eM(w,B.av,A.w(A.a([new A.D(D.buM,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nz,w,w,w),1),A.aI(w,w,w,w,B.ly,w,w,w,new C.fKx(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dr(1,B.cn,new A.D(B.fQ,A.bv(A.m(14),A.fO(t,B.A,w,w,B.ce,B.dw,!1,w,!1,w,w),B.aq),w),w),new A.D(B.ME,new A.a7(1/0,w,A.dp(B.p5,D.aS6,new C.fKy(t,this.c,d),A.bn(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.X),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.MS,B.d4,w,new A.b7(v,B.X),w)},
$S:47}
C.fKx.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fKy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t3(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKL.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eM(w,B.av,new A.D(D.buU,A.w(A.a([A.B(A.a([D.bAo,A.aI(w,w,w,w,B.ly,w,w,w,new C.fKJ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.eJ(A.bv(A.m(14),A.p(w,A.b3(w,w,w,new C.baA(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dp(B.p5,D.aS6,new C.fKK(t,s,d),A.bn(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.X),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d4,w,new A.b7(v,B.X),w)},
$S:47}
C.fKJ.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fKK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.aj$.x.h(0,t.a)
n=n==null?null:n.gba()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m0(2.5),$async$$0)
case 4:w=3
return A.b(e.hu(B.h4),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aM(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eV(B.dC.gaP(s))
w=5
return A.b(A.t3(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ftj.prototype={
$1(d){return d.a===this.a},
$S:243}
C.dHJ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dHu.prototype={
bkv(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e1:B.c
s=u.a
w=2
return A.b(A.bR(t,null,new C.dHx(s,q,e),p,!0,!0,!1,B.IR,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dHy(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bkv(d,e)},
$S:1921}
C.dHx.prototype={
$1(d){var w,v=null,u=this.c===B.wu,t=u?D.dhC:D.ddr
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(P.aiB,A.w(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.iw(!0,v,v,B.y,D.eZt,new C.dHw(this.a,w,t,d),t.length,v,B.dO,B.af,!0)],x.p),B.ai,v,B.e,B.P,0,B.p),v),!0,!1,B.ae,!0,!0)},
$S:27}
C.dHw.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cM.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cM
else u=(t.b.a.d.a?B.bq:B.bl).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aYs(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dHv(t.d,r),s,s,s,s,s,s,s)},
$S:176}
C.dHv.prototype={
$0(){A.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.dHy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dHs.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:97}
C.dHt.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.d_(e,!1,A.iq(B.A,A.at(A.aF(!1,B.a2,!0,v,new A.dY(new C.dHr(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bL.T>"))),v)},
$S:32}
C.dHr.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e1:B.c,f=A.m(14),e=A.I((h?B.bq:B.bl).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aK(!1,v,!0,new A.D(B.ex,A.W(B.cw,i.a.d.a?B.bq:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dHc(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aSB("Name")
r=l.a
q=r.d==null?k:new C.dHd(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lU
n=A.I(B.cM.j(0.35),B.q,1)
m=r.d
t=A.aL(k,B.U,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bbV(new A.D(B.fu,A.aK(!1,p,!0,A.p(B.A,C.aYs(m==null?"\ud83d\udc64":A.fzr(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a4),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.kO,k,B.a87,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.al,A.B(A.a([A.E(i.aTf("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dHe(r,a0),r.d===B.wu),1),B.ab,A.E(i.aTf("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dHj(r,a0),r.d===B.a51),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bK(B.a3,k,k,A.ho(D.bQj,D.fEf,new C.dHk(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cM,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uo(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.U,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aSC("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dX,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bl).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wP(r.a,!1)
v.push(A.aF(!1,B.a2,!0,q,A.aK(!1,p,!0,A.p(k,A.B(A.a([A.E(A.w(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bN6],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dHl(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.U,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aSB("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b0d(r.b.length!==0,B.my,new C.dHm(r,i,a0),new C.dHn(r,a0),"Upload from gallery","ID photo"))
v.push(i.b0d(r.c.length!==0,D.bGx,new C.dHo(r,i,d,a0),new C.dHp(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ak.a7t("Signature (optional)",t,new C.dHq(a0),new C.dHf(a0,t),new C.dHg(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bq:B.bl
s=(i?B.bq:B.bl).j(0.28)
s=A.E(A.dQ(F.aS_,new C.dHh(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tR,k,new A.b7(A.m(10),B.X),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bn(B.cM,k,k,k,B.c,k,B.tR,k,new A.b7(A.m(10),B.X),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.v2,k,k,k),new C.dHi(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cc(A.w(v,B.ai,k,B.e,B.P,0,B.p),B.r,k,B.y,k,k,k,k,B.af),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.tW,B.jv,k,k,360)},
$S:157}
C.dHc.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dHd.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dHe.prototype={
$0(){return this.b.$1(new C.dHb(this.a))},
$S:0}
C.dHb.prototype={
$0(){var w=this.a
w.d=B.wu
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dHj.prototype={
$0(){return this.b.$1(new C.dHa(this.a))},
$S:0}
C.dHa.prototype={
$0(){var w=this.a
w.d=B.a51
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dHk.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dHl.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wT(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dH9(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dH9.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gck(),w.gcf(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dHm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pt(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dH8(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dH8.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dHn.prototype={
$0(){return this.b.$1(new C.dH7(this.a))},
$S:0}
C.dH7.prototype={
$0(){return this.a.b=""},
$S:0}
C.dHo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e1:B.c
w=3
return A.b(A.bR(q,null,new C.dH5(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pt(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dH6(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dH5.prototype={
$1(d){var w=null
return A.bm(!0,A.w(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.anK,w,w,w,w,new C.dH_(d),!1,w,w,w,w,w,w,w,D.fux,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.anI,w,w,w,w,new C.dH0(d),!1,w,w,w,w,w,w,w,D.fBp,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.ae,!0,!0)},
$S:27}
C.dH_.prototype={
$0(){A.a3(this.a,!1).N("camera")
return null},
$S:0}
C.dH0.prototype={
$0(){A.a3(this.a,!1).N("gallery")
return null},
$S:0}
C.dH6.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dHp.prototype={
$0(){return this.b.$1(new C.dH4(this.a))},
$S:0}
C.dH4.prototype={
$0(){return this.a.c=""},
$S:0}
C.dHq.prototype={
$0(){return this.a.$1(new C.dH3())},
$S:0}
C.dH3.prototype={
$0(){},
$S:0}
C.dHf.prototype={
$0(){return this.a.$1(new C.dH2(this.b))},
$S:0}
C.dH2.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dHg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahz(u.a,null,null,new C.dH1(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dH1.prototype={
$4(d,e,f,g){this.a.$1(new C.dGZ(this.b,d))},
$S:344}
C.dGZ.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dHh.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dHi.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.f3x)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.f0q)
return}A.a3(w.c,!1).N(!0)},
$S:0}
C.dHM.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:97}
C.dHN.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e1:B.c,n=A.m(14),m=A.I((p?B.bq:B.bl).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AP(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z5(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z5(r).length>0?B.bx:B.cM,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bl
t=(q?B.bq:B.bl).j(0.28)
s=x.p
return new A.d_(e,!1,A.at(A.aF(!1,B.a2,!0,r,A.p(r,A.w(A.a([p,B.N,v,u,B.aA,A.B(A.a([A.E(A.dQ(B.nA,new C.dHK(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jI,r,new A.b7(A.m(10),B.X),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bH(D.fBP,new C.dHL(d),A.bn(B.cM,r,r,r,B.c,r,B.jI,r,new A.b7(A.m(10),B.X),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bx,F.Zi,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:32}
C.dHK.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dHL.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dHG.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dHH(r),p=r.a.d.a,o=p?B.e1:B.c,n=A.m(14),m=A.I((p?B.bq:B.bl).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AP(l.c),s,s,s,s,s,s,D.fg9,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iB((r.a.d.a?B.bq:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a09,"View receipt",new C.dHz(r,d,l))
u=l.x!=null
t=u?B.rm:B.q6
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.buR,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dHA(r,d,l)),q.$3$icon$label$onTap(B.BO,"Edit",new C.dHB(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.my,"View / download ID",new C.dHC(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bGw,"View / download selfie",new C.dHD(r,d,l)))
if(l.gaFB())p.push(q.$3$icon$label$onTap(Aa.a1f,"View / download signature",new C.dHE(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bx,B.eb,"Delete",new C.dHF(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.vL,A.p(s,A.w(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ae,!0,!0)},
$S:27}
C.dHH.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aK(!1,v,!0,new A.D(B.eO,A.B(A.a([A.W(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1922}
C.dHz.prototype={
$0(){A.a3(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fKD(w,this.c)},
$S:0}
C.dHA.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.S8(this.c)},
$S:0}
C.dHB.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.Da(this.c)},
$S:0}
C.dHC.prototype={
$0(){var w,v,u
A.a3(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bD2(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dHD.prototype={
$0(){var w,v,u
A.a3(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bD2(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dHE.prototype={
$0(){A.a3(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fKI(w,this.c)},
$S:0}
C.dHF.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.Ps(0,this.c)},
$S:0}
C.dHO.prototype={
$1(d){return d.x==null},
$S:243}
C.dHP.prototype={
$1(d){return d.x!=null},
$S:243}
C.dHQ.prototype={
$2(d,e){return d+e.c},
$S:1923}
C.dHR.prototype={
$0(){return this.a.bzM()},
$S:0}
C.dHI.prototype={
$0(){return this.a.aeV(this.b)},
$S:0}
C.ftX.prototype={
$1(d){return d.a===this.a},
$S:z+41}
C.ftY.prototype={
$0(){return B.d.gH(D.a2v)},
$S:z+51}
C.d7S.prototype={
$0(){var w=this.a
return w.m(new C.d7Q(w,this.b))},
$S:0}
C.d7Q.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d7R.prototype={
$0(){},
$S:0}
C.d7T.prototype={
$0(){var w=this.a.gbYR()
A.a3(this.b,!1).N(w)
return null},
$S:0}
C.fwc.prototype={
$1(d){return C.h73(A.a2(d,x.N,x.z))},
$S:z+15}
C.fwd.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fwe.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aK(w,v)
return d.d.aK(0,e.d)},
$S:z+27}
C.fJh.prototype={
$1(d){return d.ag()},
$S:z+24}
C.fRB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fta.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bNW.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1924}
C.fJQ.prototype={
$1(d){var w=this
return new C.Zg(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+37}
C.d8x.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8w(w,d))},
$S:z+80}
C.d8w.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8l.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d8i.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d7U.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d7V.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d8m.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d82.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e1:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bM(!1,B.dh,w,w,!0,w,w,new C.d80(d),w,w),A.bH(B.wR,new C.d81(d),A.bn(B.mW,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.d80.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.d81.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.d83.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d8j.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+12}
C.d8k.prototype={
$0(){return B.d.gH(D.z6)},
$S:z+13}
C.d7Z.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyq(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.SM(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+75}
C.d8_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d84.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YP(v,u,J.ad(w.d),null)},
$S:z+74}
C.d85.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8v.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.Yx(r.y,r.gyq(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d8t(r),s,s,s,s,s,s,!1,B.a5)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9Z(v,e,w,u,t,r.gbQ1(),C.hmn(r.y.Q),r.gyq(0),s)
w=t}return A.c7(q,new C.d8u(r,e),new A.D(B.Zj,w,s))},
$S:1925}
C.d8u.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd0(t).ay){t=this.b
u=x.fx.a(B.d.gd0(u.f.f)).guP(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dk()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fz(v*3.141592653589793*0.5)
return A.fo(B.a3,A.dd(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.d8t.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGJ(B.pT,B.iN)},
$S:0}
C.d8f.prototype={
$0(){var w=this.a
return w.m(new C.d8e(w))},
$S:0}
C.d8e.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d8g.prototype={
$0(){var w=this.a.c
w.toString
A.a3(w,!1).N(null)
return null},
$S:0}
C.d7W.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=F.k2.j(0.5),r=x.p,q=A.a([D.fta,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.YV(d,B.e2,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YV(d,M.alD,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kt.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kt.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YV(d,U.amL,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YV(d,B.qb,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YV(d,B.qb,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eM(u,F.B0,A.bm(!0,new A.D(A9.y7,A.w(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.ae,!0,!0),u,u,u,D.aj_,B.d4,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d8h.prototype={
$0(){A.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.d88.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.Zi(v,J.cJ(w.d),w.r+1,null)},
$S:z+73}
C.d89.prototype={
$1(d){var w=null
return A.os(!1,A.ek(w,w,w,F.B0,new A.jI(this.a,new C.d87(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:327}
C.d87.prototype={
$3(d,e,f){var w=null
return A.B(A.a([F.a7O,B.op,A.E(A.d(e,w,w,w,w,w,w,B.jg,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:593}
C.d8a.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d8b.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.d8c.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8d.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AY(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rz(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d86(s,t))
w=4
return A.b(s.l2(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d86.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8o.prototype={
$1(d){var w=null
return A.os(!1,A.ek(w,w,w,F.B0,new A.jI(this.a,new C.d8n(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:327}
C.d8n.prototype={
$3(d,e,f){var w=null
return A.B(A.a([F.a7O,B.op,A.E(A.d(e,w,w,w,w,w,w,B.jg,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:593}
C.d8p.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d8q.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.d8r.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.d8s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AY(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l2(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7X.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bht(B.pT,A0.Mp)},
$S:0}
C.d7Y.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGJ(B.pT,A0.Mp)},
$S:0}
C.dah.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dai.prototype={
$1(d){var w=this.a
return w.m(new C.dag(w))},
$S:8}
C.dag.prototype={
$0(){return this.a.e="page"},
$S:0}
C.daj.prototype={
$1(d){var w=this.a
return w.m(new C.daf(w))},
$S:8}
C.daf.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dak.prototype={
$1(d){var w=this.a
return w.m(new C.dae(w))},
$S:8}
C.dae.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dal.prototype={
$0(){var w=this.a
return w.m(new C.dad(w,this.b))},
$S:0}
C.dad.prototype={
$0(){var w=this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.dam.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1C()
A.a3(this.b,!1).N(new A.bop(w,v))},
$S:0}
C.d8M.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d8L.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Ze(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+63}
C.d8Q.prototype={
$1(d){return d.a===this.a},
$S:z+62}
C.d8P.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7A(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.he,v,v,v)
return A.ek(A.a([A.bM(!1,B.dh,v,v,!0,v,v,new C.d8N(d),v,v),A.bH(B.wR,new C.d8O(d),A.bn(B.mW,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,F.B0,w,v,v,v,v,D.frZ,v)},
$S:18}
C.d8N.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.d8O.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.d8R.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d8S.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cc(A.bV(B.bB,r,B.bs,18,14),B.r,t,B.y,t,D.bvP,t,t,B.af)},
$S:295}
C.d8K.prototype={
$0(){return this.a.Q9(0,this.b)},
$S:0}
C.d8J.prototype={
$0(){return this.a.PE(0,this.b)},
$S:0}
C.cHq.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+12}
C.cHr.prototype={
$0(){return B.d.gH(D.z6)},
$S:z+13}
C.cHs.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bS(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1927}
C.d_R.prototype={
$1(d){return this.a.m(new C.d_Q(this.b,this.c))},
$S:8}
C.d_Q.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d0f.prototype={
$1(d){return this.a.m(new C.d02())},
$S:2}
C.d02.prototype={
$0(){},
$S:0}
C.d0g.prototype={
$1(d){return this.a.m(new C.d01())},
$S:2}
C.d01.prototype={
$0(){},
$S:0}
C.d0h.prototype={
$0(){var w=this.a
return w.m(new C.d00(w,this.b))},
$S:0}
C.d00.prototype={
$0(){var w=this.a
return w.d=w.go5().FK(this.b.a)},
$S:0}
C.d0i.prototype={
$0(){var w=this.a
return w.m(new C.d0_(w,this.b))},
$S:0}
C.d0_.prototype={
$0(){var w=this.a
return w.d=w.go5().cHQ(this.b)},
$S:0}
C.d0j.prototype={
$1(d){return this.a.m(new C.d_Z())},
$S:2}
C.d_Z.prototype={
$0(){},
$S:0}
C.d0k.prototype={
$0(){var w=this.a
return w.m(new C.d_Y(w,this.b))},
$S:0}
C.d_Y.prototype={
$0(){var w=this.a
return w.d=w.go5().cHV(this.b.a)},
$S:0}
C.d0l.prototype={
$1(d){var w=this.a
return w.m(new C.d0a(w,d))},
$S:7}
C.d0a.prototype={
$0(){var w=this.a
return w.d=w.go5().cIP(this.b)},
$S:0}
C.d0m.prototype={
$1(d){var w=this.a
return w.d=w.go5().aDN(d)},
$S:2}
C.d0n.prototype={
$1(d){var w=this.a
return w.d=w.go5().cHY(d)},
$S:2}
C.d0p.prototype={
$1(d){var w=this.a
return w.d=w.go5().cIN(d)},
$S:2}
C.d0q.prototype={
$1(d){var w=this.a
return w.m(new C.d09(w,d))},
$S:8}
C.d09.prototype={
$0(){var w=this.a
return w.d=w.go5().cIE(this.b)},
$S:0}
C.d0r.prototype={
$0(){var w=this.a,v=w.go5(),u=B.a.i(w.gyq(0).a.a),t=B.a.i(w.gaAZ().a.a)
u=v.bcb(B.a.i(w.gaqN().a.a),t,u)
A.a3(this.b,!1).N(u)
return null},
$S:0}
C.fba.prototype={
$3(d,e,f){var w=this.a,v=this.b
return w.a.ad(0,E.t2(new E.q(d*v,e*v+this.c,f*v),w.b))},
$S:z+14}
C.fbb.prototype={
$3(d,e,f){var w=this.a
return new E.q(d*w,e*w,f*w)},
$S:z+14}
C.bO2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.ghx().bh0(0.0011,0)},
$S:12}
C.bNZ.prototype={
$0(){var w=this.a
w.x=D.aWz
w.cy=this.b},
$S:0}
C.bO1.prototype={
$0(){var w=this.a
w.x=D.Vu
w.cy=w.gwO()[w.y].a},
$S:0}
C.bO0.prototype={
$0(){var w,v=this.a,u=this.c
v.dx=u
v.x=D.aWA
w=this.d
v.cy=u?D.dd0[w.ar(4)]+" "+v.gwO()[v.y].d:D.d9N[w.ar(3)]+" "+v.gwO()[v.y].d},
$S:0}
C.bO3.prototype={
$0(){var w=this.a
w.x=D.aah
w.ax=this.b
w.ch=1
w.CW=w.cx+4
w.cy=w.z>=w.gwO().length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher."},
$S:0}
C.bO4.prototype={
$0(){},
$S:0}
C.bO_.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).iW()},
$S:0}
C.bNX.prototype={
$0(){return this.a.aCE(this.b)},
$S:0}
C.bNY.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).iW()},
$S:0}
C.bOi.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.bOj.prototype={
$2(d,e){var w=this.a,v=B.o.aK(w.aEh(d),w.aEh(e))
if(v!==0)return v
return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fif.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fRs.prototype={
$2(d,e){if(e!=null)J.ca(this.a.c4(0,d,new C.fRt()),e)},
$S:z+35}
C.fRt.prototype={
$0(){return A.a([],x.J)},
$S:z+31}
C.fRu.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRv.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fRw.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fRr(this.c,d))},
$S:3}
C.fRr.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fRx.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRy.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRz.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fRq(this.c,d))},
$S:3}
C.fRq.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fuu.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fx2.prototype={
$1(d){return!this.a.q(0,d)},
$S:3}
C.fIr.prototype={
$1(d){return d.Q},
$S:z+16}
C.fIs.prototype={
$0(){return A.a([],x.u)},
$S:z+25}
C.fqW.prototype={
$1(d){return this.a>=d.c},
$S:z+11}
C.fx5.prototype={
$1(d){return d.c>this.a},
$S:z+11}
C.bJa.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.de8.prototype={
$0(){return A.a3(this.a,!1).iW()},
$S:0}
C.dTz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTA.prototype={
$1(d){return this.a},
$S:39}
C.dTB.prototype={
$0(){var w=this.a
return w.d=w.gS9().bbE(this.b)},
$S:0}
C.dTx.prototype={
$1(d){return new C.SN(this.a,null)},
$S:z+29}
C.dTy.prototype={
$1(d){return d.a===this.a.a},
$S:z+30}
C.dTw.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.he,w,w,w)
return A.ek(A.a([A.bM(!1,F.aS9,w,w,!0,w,w,new C.dTu(d),w,w),A.bM(!1,D.fzm,w,w,!0,w,w,new C.dTv(d),w,w)],x.p),w,w,D.iI,v,w,w,w,w,D.fmg,w)},
$S:18}
C.dTu.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dTv.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dTt.prototype={
$0(){var w=null,v=this.a.c.I(x.q).f,u=this.b
return v.R(A.b2(w,w,w,w,w,B.r,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dTC.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.u(w.h(0,d)):"NEW"},
$S:14}
C.dTD.prototype={
$0(){var w=this.a,v=this.b,u=C.h0Q(v,10,w.r,!1)
return w.AG(C.h74(w.a.d,"kahoot",u,w.gb3s(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dTE.prototype={
$0(){var w=this.a
return w.AG(new C.akA(this.b,w.a.d,w.r,null))},
$S:0}
C.dTF.prototype={
$0(){var w=this.a
return w.AG(new C.amX(this.b,w.a.d,w.r,null))},
$S:0}
C.dTG.prototype={
$0(){var w=this.a
return w.AG(new C.ake(this.b,w.a.d,w.r,null))},
$S:0}
C.dTH.prototype={
$0(){var w=this.a
return w.AG(new C.akG(this.b,w.a.d,w.r,null))},
$S:0}
C.dTI.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cWl()
return v.AG(C.h74(v.a.d,"creator_"+u.a,w,v.gb3s(),"A game by the family",t,this.c.a))},
$S:0}
C.dTJ.prototype={
$0(){return this.a.Od(this.b)},
$S:0}
C.dTK.prototype={
$0(){return this.a.WY(0,this.b)},
$S:0}
C.dTL.prototype={
$0(){return this.a.Od(null)},
$S:0}
C.dTM.prototype={
$0(){return this.a.I(x.q).f.R(D.f0w)},
$S:0}
C.bOv.prototype={
$0(){var w=this.a
w.d=D.aW5
w.z=3},
$S:0}
C.bOw.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aNr()}else w.m(new C.bOu(w))},
$S:12}
C.bOu.prototype={
$0(){return this.a.z--},
$S:0}
C.bOl.prototype={
$0(){var w=this.a
w.d=D.a9Y
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bOm.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bOk(w))
if(w.as<=0){d.a4(0)
w.b3o(-1)}},
$S:12}
C.bOk.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bOr.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.V7},
$S:0}
C.bOs.prototype={
$0(){return this.a.e++},
$S:0}
C.bOo.prototype={
$0(){var w=this.a
w.d=D.aW6
w.ay=this.b},
$S:0}
C.bOp.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bOt.prototype={
$2(d,e){return B.o.aK(e.b,d.b)},
$S:1928}
C.bOq.prototype={
$0(){return this.a.aCE(this.b)},
$S:0}
C.bOn.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).iW()},
$S:0}
C.bOB.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bOC.prototype={
$0(){var w=this.a
w.y=!0
w.w=this.b},
$S:0}
C.bOD.prototype={
$0(){},
$S:0}
C.bOE.prototype={
$0(){var w=this.a;++w.f
w.r=-1},
$S:0}
C.bOz.prototype={
$0(){return this.a.cGA(this.b)},
$S:0}
C.bOA.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).iW()},
$S:0}
C.bYf.prototype={
$0(){var w=this.a,v=this.b
w.gSy()[v].d=!0
w.as.push(v)},
$S:0}
C.bYg.prototype={
$0(){this.b.e=this.c.e=!0
var w=this.a;++w.r
B.d.a8(w.as)},
$S:0}
C.bYh.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.bYe(w))},
$S:0}
C.bYe.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.as,u=v.length,t=0;t<v.length;v.length===u||(0,A.L)(v),++t){s=v[t]
w.gSy()[s].d=!1}B.d.a8(v)
w.y=!1},
$S:0}
C.bYb.prototype={
$0(){var w=this.a
w.z=!0
w.w=this.b},
$S:0}
C.bYc.prototype={
$0(){},
$S:0}
C.bYd.prototype={
$0(){return A.a3(this.a,!1).iW()},
$S:0}
C.bYa.prototype={
$0(){return this.a.cMJ(this.b)},
$S:0}
C.bY9.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p=null,o=A.dk(),n=o.a
n.$flags&2&&A.aj(n)
n[11]=0.001
o.fz(3.141592653589793*e)
if(e>0.5){n=new Float64Array(16)
n[15]=1
w=Math.cos(3.141592653589793)
v=Math.sin(3.141592653589793)
n[0]=w
n[1]=0
n[2]=-v
n[4]=0
n[5]=1
n[6]=0
n[8]=v
n[9]=0
n[10]=w
n[3]=0
n[7]=0
n[11]=0
u=this.a
if(u.e)t=D.nK.j(0.9)
else t=u.c?D.e0:D.B3
s=A.m(16)
r=u.e
q=A.I(r?B.c:D.oI,B.q,3)
r=r?B.c:D.iI
n=A.fo(B.A,A.p(p,A.at(A.d(u.b,p,4,B.a1,p,p,p,A.l(p,p,r,p,p,p,p,p,p,p,p,u.c?17:13.5,p,p,B.u,p,1.15,!0,p,p,p,p,p,p,p,p),B.L,p,p),p,p,p),B.f,p,p,new A.o(t,p,q,s,p,p,B.n),p,p,p,p,B.cm,p,p,p),p,new A.eC(n),!0)}else{n=A.m(16)
u=A.I(D.e0,B.q,3)
n=A.p(p,A.bv(A.m(13),A.b3(D.b6v,p,p,new C.bdH(p),B.az),B.aq),B.f,p,p,new A.o(p,p,u,n,p,D.bYp,B.n),p,p,p,p,p,p,p,p)}return A.fo(B.A,n,p,o,!0)},
$S:129}
C.bMb.prototype={
$2(d,e){return d+e},
$S:72}
C.bMk.prototype={
$0(){return this.a.x.push(this.b)},
$S:0}
C.bMl.prototype={
$0(){var w,v=this.b
v.z=!0
w=this.a.a
v.Q=w
if(w)++v.f},
$S:0}
C.bMj.prototype={
$0(){var w=this.a
w.x=A.a([],x.t)
w.z=!1},
$S:0}
C.bMg.prototype={
$0(){var w=this.a
w.as=!0
w.r=this.b},
$S:0}
C.bMh.prototype={
$0(){},
$S:0}
C.bMi.prototype={
$0(){var w=this.a;++w.e
w.x=A.a([],x.t)
w.z=!1
w.y=w.b5t(w.e)},
$S:0}
C.bMc.prototype={
$0(){return A.a3(this.a,!1).iW()},
$S:0}
C.bMd.prototype={
$2(d,e){var w=this.a.d
return B.o.aK(w[d],w[e])},
$S:72}
C.bMe.prototype={
$0(){return this.a.cW0(this.b)},
$S:0}
C.bMf.prototype={
$1(d){return this.a.c[d]},
$S:79}
C.bO5.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.aq(new A.ba(s,B.b4,B.aN),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.L)(t),++v){u=t[v]
s.push(new A.aq(new A.ba(u,B.b4,B.aN),r))}return s},
$S:1929}
C.bO6.prototype={
$0(){return this.a.gCB().c.push(C.fTq(null,0,20,""))},
$S:0}
C.bOg.prototype={
$1(d){var w=null
return A.br(w,new A.b4(4,A.m(12),B.X),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.U6,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:235}
C.bOf.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCB().c,m=this.b,l=n[m],k=o.c9V(l),j=B.c.j(0.06),i=A.m(18),h=A.I(B.aZ,B.q,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.JE,p,p,p),B.b0],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.anw,p,p,p,new C.bOa(o,m),p,p,p,p,p,p))
n=J.a4(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.j,0,p,p),A.aL(p,B.U,!1,p,!0,B.r,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bOb(l),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.dd,!0,B.a6,p,B.an,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.az5[v]
t=D.ayS[v]
s=v+1
f.push(new A.D(B.eF,new A.c9(B.aM,B.e,B.j,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ab,new A.by(1,B.bd,A.aL(p,B.U,!1,p,!0,B.r,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bOc(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.dd,!0,B.a6,p,B.an,p,p,p,p),p),new E.Ot(v,l.c,new C.bOd(o,l),p,!1,D.nK,p,p,p,p,p,!1,!1,p,H.aWo,p,p,p,p,p,w)],g),p),p))}f.push(D.frE)
f.push(B.al)
n=A.a([D.fln,B.ab],g)
for(r=0;r<3;++r){q=D.c4W[r]
n.push(new A.D(B.fu,A.j_(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bOe(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.j,0,p,p))
return A.p(p,A.w(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kC,B.bj,p,p,p)},
$S:159}
C.bOa.prototype={
$0(){var w=this.a
return w.m(new C.bO9(w,this.b))},
$S:0}
C.bO9.prototype={
$0(){return B.d.cG(this.a.gCB().c,this.b)},
$S:0}
C.bOb.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bOc.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bOd.prototype={
$1(d){return this.a.m(new C.bO8(this.b,d))},
$S:196}
C.bO8.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bOe.prototype={
$1(d){return this.a.m(new C.bO7(this.b,this.c))},
$S:8}
C.bO7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVb.prototype={
$0(){var w=this.a
w.vV()
w.a.br()
w.a.pW()},
$S:0}
C.dVa.prototype={
$0(){var w=this.a
w.vV()
w.a.br()
w.a.pW()},
$S:0}
C.dVd.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dVe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVf.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dV9.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dVc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dVh.prototype={
$0(){this.a.Oz()
return null},
$S:0}
C.dVg.prototype={
$0(){return this.a.Ez(this.b)},
$S:0}
C.dUC.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.dh,w,w,!0,w,w,new C.dUA(d),w,w),r=A.bn(B.bN,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dUB(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dUA.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dUB.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dUD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cIj(this.b)},
$S:0}
C.dUx.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSR(w.b,w.c,w.d)},
$S:9}
C.dTZ.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dU_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gy(t.a.c),$async$$0)
case 2:s=r.pN(q.dJ(e,new C.dUe(t)))
if(s!=null&&t.c!=null)t.m(new C.dUf(t,s))
t.a.br()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUe.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dUf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUh.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dUi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUw.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cJ6(C.hmx(w),w)},
$S:0}
C.dUd.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.V6(u,w,C.aOL(u,w),new C.dUc(v),null)},
$S:z+34}
C.dUc.prototype={
$1(d){return this.bkC(d)},
bkC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dUb(s,d))
w=3
return A.b(s.tR(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:752}
C.dUb.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bbE(this.b)},
$S:0}
C.dUt.prototype={
$1(d){return d.as},
$S:z+1}
C.dUu.prototype={
$1(d){var w=this
return new A.dY(new C.dUs(w.a,w.b,w.c,w.d,w.e),null)},
$S:19}
C.dUs.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e1:B.c,h=A.m(26),g=A.I(B.bN.j(0.5),B.q,1.5),f=A.p(k,D.bLi,B.f,k,k,new A.o(B.bN.j(0.18),k,k,k,k,k,B.a4),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.w(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.B(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.W(B.cw,j?B.bq:B.bl,k,k,k,k),k,k,k,new C.dUm(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.L)(v),++s){r=v[s]
q=t.a===r?B.bN:B.bN.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ay(B.bN,o?2:1,B.q,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bN
a0.push(A.aB(k,A.db(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b8,new A.o(q,k,new A.bJ(n,n,n,n),new A.bk(p,p,p,p),k,k,B.n),B.hl,k,k,k,B.Br,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dUn(t,a2,r),k,k,k,k,k,k,!1,B.a5))}a0=A.bV(B.bB,a0,B.bs,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.bX2,new A.D(D.bwd,f,k),new A.D(D.bw4,e,k),new A.D(B.tW,a0,k),new A.D(U.aj0,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(A_.alo,j?B.bq:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bw6,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.XK(k,B.bN,k,k,!1,B.y,k,k,k,k,k,k,new C.dUo(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.j,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.iV,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.flI,B.bc,D.bAk,D.bLY],w),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c_M,B.n),k,k,k,B.hA,B.bC,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dUp(t,a1),k,k,k,k,k,k,!1,B.a5))
f.push(new A.D(B.vP,A.B(A.a([A.E(A.dQ(B.dh,new C.dUq(a1),k),1),B.as,A.E(A.bH(L.aSA,new C.dUr(t,a1),A.bn(B.bN,k,k,k,k,k,B.cj,k,k,k,k,k)),1)],w),B.m,k,B.e,B.j,0,k,k),k))
return A.bm(!0,A.p(k,A.cc(A.w(f,B.E,k,B.e,B.P,0,B.p),B.r,k,B.y,k,k,k,k,B.af),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.FD,k,k,k,k),!0,!1,B.ae,!0,!0)},
$S:86}
C.dUm.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dUn.prototype={
$0(){return this.b.$1(new C.dUl(this.a,this.c))},
$S:0}
C.dUl.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dUo.prototype={
$1(d){var w=this.a
w.m(new C.dUj(w,d))
this.b.$1(new C.dUk())},
$S:8}
C.dUj.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dUk.prototype={
$0(){},
$S:0}
C.dUp.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(new A.aFK(!0,w))
return null},
$S:0}
C.dUq.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dUr.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(new A.aFK(!1,w))
return null},
$S:0}
C.dUv.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cIU(this.b.b)
w.r.a8(0)},
$S:0}
C.dTN.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahH(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hg9(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+23}
C.dTO.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDK(w)},
$S:0}
C.dUF.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ad1(this.b,w,this.c,null)},
$S:z+36}
C.dUz.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e1:B.c,t=A.m(20),s=A.W(B.lv,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.w(p,B.m,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bH(D.fD1,new C.dUy(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b7,w,u,v,w,s,w,new A.b7(t,B.X),r,w)},
$S:18}
C.dUy.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dTP.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dTQ.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dTR.prototype={
$1(d){return d.a},
$S:z+8}
C.dTS.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i1(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDK(w)},
$S:0}
C.dTW.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahH(q)
w=A.S(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dTU(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hg9(v.e,null,r,v.f,v.r,new C.dTV(s,r),q,"Member Profile",w,t,u)},
$S:z+23}
C.dTV.prototype={
$0(){return this.a.aa1(this.b)},
$S:0}
C.dTU.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dTX.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.S(w).k("M<1,i1>")
w=A.C(new A.M(w,new C.dTT(this.b),v),v.k("ak.E"))
u.d=t.aDK(w)},
$S:0}
C.dTT.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+38}
C.dUE.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dU8.prototype={
$1(d){return d.length!==0},
$S:3}
C.dU9.prototype={
$1(d){var w=this
return new A.dY(new C.dU7(w.a,w.b,w.c,w.d),null)},
$S:19}
C.dU7.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e1:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dU3(u,e,o),A.S(o).k("M<1,t>")))
p.push(B.N)
u=w.d
p.push(A.aL(v,B.U,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dj),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mb,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a6,v,B.an,v,v,v,v))
p=A.w(p,B.ai,v,B.e,B.P,0,B.p)
t=w.a
return A.ek(A.a([A.bM(!1,B.dh,v,v,!0,v,v,new C.dU4(d),v,v),A.bH(B.JP,new C.dU5(t,u,o,e),A.bn(B.bN,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fq2,new C.dU6(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:197}
C.dU3.prototype={
$1(d){var w=null
return A.dL(!1,B.ae,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.bTV,w,w,w,new C.dU2(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1930}
C.dU2.prototype={
$0(){return this.a.$1(new C.dU0(this.b,this.c))},
$S:0}
C.dU0.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dU4.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dU5.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dU1(w.c,u))
v.bP(0,B.c5)}},
$S:0}
C.dU1.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dU6.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a3(w.d,!1).N(!0)},
$S:0}
C.dUa.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJy(this.b,D.tZ,C.Gw(v,w.a.c))},
$S:0}
C.dUM.prototype={
$1(d){return d.as},
$S:z+1}
C.dUN.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iQ(this.b,w)},
$S:0}
C.dUO.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iaY(v)
return w.VS(v==null?null:v.a)},
$S:0}
C.dUP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hO7(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.cre(new A.as(u,t),v.gbin(),new A.as(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cT7:D.cRr
q=A.I(s?B.dr:D.bdi,B.q,1)
p=A.m(22)
o=A.bS(0,A.b3(m,m,m,new C.bdl(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.V,m,B.aa,B.r,A.a([o,A.bS(0,A.ux(new A.Q(n,n,n,n),new A.a7(u,t,new C.bee(l.d,v,l.f,w,new C.dUI(l),l.gcb6(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvx(s,new C.dUJ(l,e),new C.dUK(l,e),new C.dUL(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b3,B.b6,B.x,r,m,m),B.n),m,m,m,W.ai8,m,m,m,m)},
$S:224}
C.dUI.prototype={
$1(d){var w=this.a
w.m(new C.dUG(w,d))},
$S:2}
C.dUG.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dUJ.prototype={
$0(){var w=this.b
return this.a.b9Q(1.25,new A.as(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dUK.prototype={
$0(){var w=this.b
return this.a.b9Q(0.8,new A.as(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dUL.prototype={
$0(){var w=this,v=w.b
return w.a.aSR(new A.as(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.as(w.c,w.d),w.e.gbin())},
$S:0}
C.dUQ.prototype={
$0(){var w=this.a
return w.m(new C.dUH(w))},
$S:0}
C.dUH.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dTY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fM(new A.fE(s.c)),$async$$0)
case 2:t.xS("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d8W.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhU(u,C.hqJ(v.c,u),new C.d8V(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+39}
C.d8V.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d8X.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bl6(d.d,d.c,u.f.q(0,d.a),new C.d8U(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+40}
C.d8U.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fu0.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.pN(new A.cP(new A.Z(v,new C.fu1(d),w.k("Z<1>")),new C.fu2(),w.k("cP<1,n>")))},
$S:z+22}
C.fu1.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fu2.prototype={
$1(d){return d.a},
$S:z+8}
C.ftZ.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fu_.prototype={
$1(d){return d.b},
$S:z+8}
C.fu5.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.pN(new A.cP(new A.Z(v,new C.fu6(d),w.k("Z<1>")),new C.fu7(),w.k("cP<1,n>")))},
$S:z+22}
C.fu6.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fu7.prototype={
$1(d){return d.a},
$S:z+8}
C.fu3.prototype={
$1(d){var w,v=A.ex([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+42}
C.fu4.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d8Z.prototype={
$0(){return this.a},
$S:z+43}
C.d9f.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:264}
C.d97.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.d98()),v=J.a4(w)
if(!v.q(w,e))v.M(w,e)},
$S:113}
C.d98.prototype={
$0(){return A.a([],x.s)},
$S:592}
C.d96.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:311}
C.d9_.prototype={
$0(){return A.a([],x.u)},
$S:z+25}
C.d95.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d94.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.CD:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.CD:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1932}
C.d90.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d99.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.CD:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b3(w,new C.d9a(r)))w.push(r)}}B.d.bs(w,new C.d9b(a8))
B.d.aW(w,new C.d9c())
q=C.hO6(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eF2],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.Z
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.L)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gH(k)+B.d.gak(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bo9(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1933}
C.d9a.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d9b.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d9c.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.d9d.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gK(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a5(v).k("bc<2>")).cM(0,0,B.px)+88-w.gH(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gK(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:571}
C.d9e.prototype={
$1(d){return 16+d*156},
$S:265}
C.d8Y.prototype={
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
t.n(0,d,new C.FN(r,new A.x(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FN(s,new A.x(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FN(s,new A.x(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.K4(d,new A.x(e+t,w),s,s.length))}},
$S:188}
C.d91.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIR(new A.x(v.a,v.b+28),new A.x(w.a,w.b+28),!0,null))},
$S:113}
C.d92.prototype={
$1(d){return d.a===this.a},
$S:z+44}
C.d93.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:589}
C.d9g.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:589}
C.d9h.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:471}
C.d9i.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:199}
C.d9j.prototype={
$1(d){return d>=0.5},
$S:121}
C.faV.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aK(!1,v,!0,new A.a7(38,38,A.W(d,this.a.c?B.c:B.cp,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1935}
C.eMF.prototype={
$1(d){var w=null,v=A.m(8),u=B.bN.j(0.12),t=A.m(8)
return new A.D(B.nd,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fbP,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.N_,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eME(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+45}
C.eME.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dp4.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dp3.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nx,B.L,w,w)
return A.ek(A.a([A.bM(!1,B.dh,w,w,!0,w,w,new C.dp1(d),w,w),A.bM(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mo,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dp2(d),w,w)],x.p),B.b7,B.Bo,w,u,D.bx7,w,D.bz4,new A.b7(v,B.X),w,w)},
$S:18}
C.dp1.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dp2.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dpd.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dpe.prototype={
$1(d){var w=this.a
return w.m(new C.dpc(w,d))},
$S:z+46}
C.dpc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dpf.prototype={
$1(d){var w=null
return A.qr(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+21}
C.dpi.prototype={
$1(d){var w=this.a
return w.m(new C.dpb(w,d))},
$S:34}
C.dpb.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dph.prototype={
$1(d){var w=null
return A.qr(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+21}
C.dpj.prototype={
$1(d){var w=this.a
return w.m(new C.dpa(w,d))},
$S:34}
C.dpa.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dpk.prototype={
$0(){var w=this.a
return w.m(new C.dp9(w))},
$S:0}
C.dp9.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dpl.prototype={
$0(){var w=this.a
return w.m(new C.dp8(w))},
$S:0}
C.dp8.prototype={
$0(){return++this.a.at},
$S:0}
C.dpm.prototype={
$0(){var w=this.a
return w.m(new C.dp7(w))},
$S:0}
C.dp7.prototype={
$0(){return--this.a.ax},
$S:0}
C.dpn.prototype={
$0(){var w=this.a
return w.m(new C.dp6(w))},
$S:0}
C.dp6.prototype={
$0(){return++this.a.ax},
$S:0}
C.dpo.prototype={
$1(d){var w=this.a
return w.m(new C.dp5(w,d))},
$S:8}
C.dp5.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dpg.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dpp.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bN.j(0.18)
else w=q.c.a?B.e1:B.c
v=A.m(12)
if(p)u=B.bN
else u=(q.c.a?B.e5:B.bP).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bN
else t=q.c.a?B.bq:B.bl
t=A.W(f,t,r,r,r,18)
if(p)s=B.bN
else s=q.c.a?B.bq:B.bl
return A.E(A.aF(!1,B.a2,!0,r,A.aK(!1,o,!0,A.db(r,A.w(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b8,new A.o(w,r,u,v,r,r,B.n),B.eL,r,r,r,B.jI,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dpq(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+48}
C.dpq.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dpz.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.cak.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.car.prototype={
$1(d){return d.ag()},
$S:z+5}
C.cas.prototype={
$2(d,e){var w=J.b6(e,new C.caq(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bw(d,w,x.d2)},
$S:z+50}
C.caq.prototype={
$1(d){return d.ag()},
$S:z+24}
C.cam.prototype={
$1(d){return C.akJ(A.a2(d,x.N,x.z))},
$S:z+9}
C.can.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.cao.prototype={
$1(d){return C.h73(A.a2(d,x.N,x.z))},
$S:z+15}
C.cap.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.caw.prototype={
$1(d){return new A.aFW(d.f.length,d.a,d.b)},
$S:z+52}
C.cax.prototype={
$2(d,e){return B.a.aK(d.c,e.c)},
$S:638}
C.cat.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.cau.prototype={
$1(d){return d.cIw(C.Gw(d,this.a))},
$S:z+53}
C.dUZ.prototype={
$1(d){return C.u4(d,this.a.a.c)},
$S:z+2}
C.dV_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dV3.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dV4.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dUW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZY(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yr("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p8(r.c,r.e),$async$$0)
case 4:s.yr(p)
w=5
return A.b(s.JE(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZY(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yr("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p8(r.c,r.e),$async$$0)
case 4:s.yr(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.V9(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yr("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yr("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yr("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JE(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yr(B.a.eh(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dV2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZX(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yr("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a3(r,!1).cg(A.e_(new C.dV1(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p8(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dV1.prototype={
$1(d){var w=this.b
return new C.a_d(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+82}
C.dV0.prototype={
$1(d){return D.haQ},
$S:z+55}
C.dV6.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dV7.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dV5(w,d)
return new A.D(B.d3,new C.bei(this.b,d.c,d.a,w,null),null)},
$S:1936}
C.dV5.prototype={
$0(){return this.a.XA(this.b.b)},
$S:0}
C.dUR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dUS.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dUT.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dUU.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dUV.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dV8.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a3(this.b,!1).N(s)
return}},
$S:193}
C.dGR.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+56}
C.dGS.prototype={
$0(){return B.d.gH(D.a3V)},
$S:z+57}
C.dGT.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.at(A.W(this.b.d,B.c.j(0.95),w,w,D.cZs,44),w,w,w),w,w,new C.bj_(u,t,v,w),B.az)},
$S:69}
C.fKi.prototype={
$1(d){return A.oU(new C.fKh(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:132}
C.fKh.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e1:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rG,24)],x.V),o=r?B.e5:B.bP
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bN.j(0.18)],x.O)
w=A.p(t,D.bOl,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.w(A.a([B.R,o,new A.D(F.aj5,A.B(A.a([w,B.bc,A.E(A.w(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.iw(!0,t,e,B.y,D.eZB,new C.fKg(this.b,s),20,B.aiF,t,B.af,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kS,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:117}
C.fKg.prototype={
$2(d,e){var w=null,v=D.a3V[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.e5:B.bP,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ep,8)],x.V),p=A.m(15),o=A.E(new C.a69(v.a,!0,w),1),n=s?B.jF:B.j5,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a2,!0,w,A.aK(!1,u,!0,A.eF(A.bv(p,A.w(A.a([o,A.p(w,A.w(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bq:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l2,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fKf(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:80}
C.fKf.prototype={
$0(){A.a3(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ci0.prototype={
$0(){return this.a.afY(this.b)},
$S:0}
C.fJF.prototype={
$1(d){return D.h63},
$S:z+58}
C.fR8.prototype={
$1(d){var w=this
return new C.a1_(w.a,w.b,w.c,w.d,null)},
$S:z+59}
C.fJK.prototype={
$1(d){return new C.YR(this.a,null)},
$S:z+60}
C.fJJ.prototype={
$1(d){return D.h72},
$S:z+61}
C.d0D.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d0E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d0C(w,d))},
$S:34}
C.d0C.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d0F.prototype={
$1(d){return this.a.Ke()},
$S:2}
C.d0G.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d0z.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d0A.prototype={
$1(d){return this.a.Ke()},
$S:2}
C.d0B.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.czd.prototype={
$0(){},
$S:0}
C.czj.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.czk.prototype={
$0(){return this.a.aOi(-1)},
$S:0}
C.czl.prototype={
$1(d){return this.a.m(new C.czi())},
$S:2}
C.czi.prototype={
$0(){},
$S:0}
C.czm.prototype={
$0(){return this.a.aOi(1)},
$S:0}
C.czn.prototype={
$1(d){return this.a.m(new C.czh())},
$S:2}
C.czh.prototype={
$0(){},
$S:0}
C.czo.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e5:B.bP
return A.un(u,u,B.b_,r,u,new C.czg(t,d),B.By,s,w,u,new A.ay(v,1,B.q,-1),B.cc)},
$S:1937}
C.czg.prototype={
$1(d){var w=this.a
return w.m(new C.cze(w,this.b))},
$S:8}
C.cze.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.czp.prototype={
$1(d){return this.a.m(new C.czf())},
$S:2}
C.czf.prototype={
$0(){},
$S:0}
C.czq.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.faf.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a3(this.b,!1).N(w)},
$S:2}
C.fag.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fah.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a3(this.b,!1).N(w)},
$S:0}
C.fad.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyV()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bz3,new A.eJ(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bvk(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:69}
C.fae.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dz.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aV,B.bN,w)
s.toString
s=A.a([B.b_,s,B.aV],x.O)
return A.aF(!1,B.a2,!0,p,A.aK(!1,v,!0,A.eF(D.ee8,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.df(-1.2+t,-0.5),new A.df(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:138}
C.fIe.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:71}
C.eJP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJG.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eJH.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eJN.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eJM(w,this.b),null)},
$S:19}
C.eJM.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e1:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eM(w,u,new A.D(B.aiY,A.w(A.a([s,B.al,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hcX(new C.eJJ(r,e),r.a),B.aA,A.B(A.a([A.E(A.dQ(B.dh,new C.eJK(d),w),1),B.as,A.E(A.bH(B.Ur,new C.eJL(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d4,w,new A.b7(t,B.X),w)},
$S:98}
C.eJJ.prototype={
$1(d){return this.b.$1(new C.eJI(this.a,d))},
$S:34}
C.eJI.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eJK.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eJL.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(w)
return null},
$S:0}
C.eJO.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.SO(this.b)},
$S:0}
C.eJB.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbK(w)},
$S:0}
C.eJF.prototype={
$1(d){return this.bkZ(d)},
bkZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lg(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iQ(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.eJE.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.S(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eJD(this.b),v),v.k("J.E"))
u.d=t.bbK(w)},
$S:0}
C.eJD.prototype={
$1(d){return d.a!==this.a.a},
$S:z+17}
C.eJQ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iQ(this.b,w)},
$S:0}
C.eJR.prototype={
$1(d){return this.a.bD1(d,this.b)},
$S:z+64}
C.eJC.prototype={
$0(){return this.a.aa0(this.b)},
$S:0}
C.fQZ.prototype={
$1(d){return new C.adm(this.a,this.b,this.c,null)},
$S:z+65}
C.eJT.prototype={
$0(){return this.a.a_i(this.b)},
$S:0}
C.eJU.prototype={
$0(){return this.a.Q5(this.b)},
$S:0}
C.eJV.prototype={
$0(){return this.a.Eu(this.b)},
$S:0}
C.eJW.prototype={
$0(){return this.a.a_j(this.b)},
$S:0}
C.eJS.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eJw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJx.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eJy.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eJA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.q2(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJz(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJz.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eKi.prototype={
$2(d,e){return d+e.gx3()},
$S:z+68}
C.eKe.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eKf.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eK_.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e1:B.c,s=A.m(24),r=A.p(v,D.bON,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.I(B.aw.j(0.28),B.q,1),v,v,v,B.a4),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.av
u=u?B.e5:B.bP
w=x.p
return A.eM(v,t,new A.D(B.yb,A.w(A.a([r,B.aO,q,B.N,p,B.d5,A.B(A.a([A.E(A.dQ(B.nA,new C.eJY(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.f9,v,new A.b7(A.m(14),B.X),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.as,A.E(A.bH(D.fGR,new C.eJZ(d),A.bn(B.aw,v,v,v,v,v,B.f9,v,new A.b7(A.m(14),B.X),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d4,v,new A.b7(s,B.X),v)},
$S:47}
C.eJY.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.eJZ.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.eK8.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e1:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fT,28)],x.V),g=k?D.d5d:B.a3j,f=x.p
g=A.p(m,A.w(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eTi,B.au,new A.bK(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,F.aj2,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4R(B.b5,B.ja,new C.eK5(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b4R(B.cC,R.yO,new C.eK6(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aw.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aw.j(0.28),B.q,1)
o=A.p(m,D.bO9,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vN,A.p(m,A.w(A.a([g,new A.D(B.aiZ,A.w(A.a([w,B.R,u,B.bv,t,B.R,A.aF(!1,B.a2,!0,m,A.aK(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.W(B.eC,k?B.bq:B.bl,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eK7(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ae,!0,!0)},
$S:27}
C.eK5.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.vw("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eK6.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.vw("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eK7.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.NR(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eK3.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e1:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eW,24)],x.V),k=o?B.e5:B.bP
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bl
u=A.bv(w,new A.a7(48,48,C.aQ1(!0,A.m(12),48,Q.NA,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AP(v.gx3())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vN,A.p(q,A.w(A.a([B.R,k,new A.D(D.aiW,A.B(A.a([u,B.bc,A.E(A.w(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Be,r.clj(B.uj,B.aV,new C.eK1(d),p,"QR code or backup file","Transfer project"),r.b1R(!0,B.eb,B.aw,new C.eK2(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ae,!0,!0)},
$S:27}
C.eK1.prototype={
$0(){A.a3(this.a,!1).N("transfer")
return null},
$S:0}
C.eK2.prototype={
$0(){A.a3(this.a,!1).N("delete")
return null},
$S:0}
C.eK4.prototype={
$1(d){return this.bl_(d)},
bl_(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Lg(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vK(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.eKl.prototype={
$0(){var w=this.a
w.a.br()
w.m(new C.eKk(w))},
$S:0}
C.eKk.prototype={
$0(){return this.a.r++},
$S:0}
C.eKm.prototype={
$0(){var w=this.a
return w.m(new C.eKj(w))},
$S:0}
C.eKj.prototype={
$0(){return this.a.r++},
$S:0}
C.eJX.prototype={
$0(){var w=this.a.c
w.toString
return A.iQ(w,null)},
$S:0}
C.eK0.prototype={
$0(){return this.a.ceC(this.b)},
$S:0}
C.eKh.prototype={
$0(){var w=this.a
return w.m(new C.eKg(w,this.b))},
$S:0}
C.eKg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eKb.prototype={
$0(){return this.a.vw("scan")},
$S:0}
C.eKc.prototype={
$0(){return this.a.vw("file")},
$S:0}
C.eKd.prototype={
$1(d){return this.a.clk(d,this.b)},
$S:z+69}
C.eKa.prototype={
$0(){return this.a.Ey(this.b)},
$S:0}
C.eK9.prototype={
$0(){return this.a.a_N(this.b,this.c)},
$S:0}
C.cyE.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+70}
C.cyD.prototype={
$1(d){return d.ag()},
$S:z+71}
C.cyB.prototype={
$1(d){return C.hwz(A.a2(d,x.N,x.z))},
$S:z+72}
C.cyC.prototype={
$1(d){return d.a.length!==0},
$S:z+17}
C.ft0.prototype={
$1(d){return d.y===D.kD},
$S:z+2}
C.fRJ.prototype={
$1(d){return C.aOL(d,this.a)},
$S:z+2}
C.fqU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bOJ.prototype={
$1(d){return!d.as},
$S:z+1}
C.bOI.prototype={
$1(d){return d.ag()},
$S:z+26}
C.bOF.prototype={
$1(d){return C.h75(A.a2(d,x.N,x.z))},
$S:z+20}
C.bOG.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bOH.prototype={
$1(d){return J.k(d)},
$S:17}
C.fhS.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+19}
C.fdJ.prototype={
$1(d){return C.fYg(A.a2(d,x.N,x.z))},
$S:z+76}
C.fdK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fdL.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+19}
C.fJw.prototype={
$1(d){return J.k(d)},
$S:17}
C.fJx.prototype={
$1(d){return d.a},
$S:z+78}
C.fJy.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJz.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fJA.prototype={
$1(d){return d.SO(null).ag()},
$S:z+79}
C.fRH.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.ftu.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fwi.prototype={
$1(d){return C.akJ(A.a2(d,x.N,x.z))},
$S:z+9}
C.fwj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwk.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fwl.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fwm.prototype={
$1(d){return C.u4(d,this.a)},
$S:z+2}
C.fJj.prototype={
$1(d){return C.u4(d,this.a)},
$S:z+2}
C.fRC.prototype={
$1(d){return C.akJ(A.a2(d,x.N,x.z))},
$S:z+9}
C.fRD.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fRE.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ftb.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.ftc.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fRN.prototype={
$1(d){return!d.as},
$S:z+1}
C.fsG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fsH.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fsI.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fR9.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fx6.prototype={
$1(d){return d.Q},
$S:z+16}
C.fJc.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fwf.prototype={
$1(d){return C.akJ(A.a2(d,x.N,x.z))},
$S:z+9}
C.fwg.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwh.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fJ7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.feg.prototype={
$1(d){return d.length!==0},
$S:3}
C.feh.prototype={
$1(d){return C.h75(A.a2(d,x.N,x.z))},
$S:z+20}
C.fei.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fej.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fek.prototype={
$1(d){return d.length!==0},
$S:3}
C.fex.prototype={
$2(d,e){return d.eU(new C.fey(e))},
$S:1938}
C.fey.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.c4},
$S:1939}
C.feu.prototype={
$1(d){return C.hSK(d,this.a)},
$S:z+81}
C.fev.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.few.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fiy.prototype={
$1(d){return d.a},
$S:z+54}
C.fiz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fiA.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.flf.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fqd.prototype={
$1(d){return C.hiv(d,C.Gw(d,this.a))},
$S:z+5}
C.fqe.prototype={
$1(d){return C.hiw(d,C.Gw(d,this.a))},
$S:z+5};(function aliases(){var w=C.aLb.prototype
w.bvb=w.t
w=C.aNd.prototype
w.bxq=w.t
w=C.aNe.prototype
w.bxr=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aCM.prototype,"gcif","cig",28)
var r
w(r=C.azQ.prototype,"gcbc","cbd",49)
v(r,"gaMy","Np",0)
v(r,"gcqz","AR",0)
v(r,"gbKL","O3",0)
v(r,"gcEE","ys",0)
v(r,"gckh","a0u",0)
v(r,"gbGb","NN",0)
v(r,"gbLa","X2",0)
w(r,"gbQ1","bQ2",77)
v(r,"gbAz","zT",0)
v(C.azR.prototype,"gcEA","Fp",0)
v(r=C.akB.prototype,"gboQ","boR",3)
v(r,"gcFF","cFG",3)
u(r,"gt2","nS",0)
w(r,"gc0u","c0v",47)
u(r=C.akF.prototype,"geX","hQ",3)
u(r,"gkr","cFc",3)
u(C.akH.prototype,"gt2","nS",0)
u(r=C.akf.prototype,"gcVx","jO",3)
u(r,"gt2","nS",0)
v(r=C.akC.prototype,"gcF1","cF2",3)
u(r,"gbmP","js",3)
v(r=C.aDk.prototype,"gafA","vL",0)
v(r,"gcdS","a_E",0)
v(r,"gaQC","I0",0)
v(r=C.aDh.prototype,"gcAL","a2C",0)
v(r,"gafA","vL",0)
v(r,"gcoz","a18",0)
v(r,"gcdN","b03",3)
v(r,"gceP","a_S",0)
w(r,"gcb6","cb7",32)
v(r,"gbL2","I5",0)
v(r,"gcBM","cBN",3)
v(r,"gc1I","YH",0)
w(r,"gc9B","c9C",33)
v(r,"gcdB","cdC",3)
v(r=C.aBL.prototype,"gc7q","PF",0)
v(r,"gc7s","c7t",3)
v(r,"gbHG","a9D",0)
v(r=C.aDj.prototype,"gbOw","Xw",0)
v(r,"gbYY","Ya",0)
v(r,"gcv0","a2_",0)
v(r,"gcr9","a1B",0)
v(C.aDi.prototype,"gcqS","ahj",0)
v(C.ast.prototype,"gc9z","a_g",0)
v(C.ayA.prototype,"ga2l","Ke",3)
v(C.ayz.prototype,"ga2l","Ke",3)
v(C.axj.prototype,"ga2l","Ke",3)
v(r=C.aEL.prototype,"gb1f","QA",0)
v(r,"gbzn","VM",0)
v(r,"gceD","ceE",3)
w(C.aEK.prototype,"gcar","cas",66)
t(C.aEM.prototype,"gaQw",0,0,null,["$1","$0"],["I_","bIX"],67,0,0)
s(C,"hpR","i1z",26)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoh,C.uk,C.ng,C.HE,C.aez,C.JX,C.ul,C.PM,C.le,C.bOh,C.aX9,C.asF,C.z3,C.ajw,C.LV,C.azw,C.K4,C.FN,C.beg,C.aIR,C.apy,C.d9k,C.lF,C.aT_,C.aSZ,C.aQY,C.tT,C.r4,C.lo,C.i1,C.kF,C.aGQ])
u(A.hS,[C.fAU,C.fAT,C.fAV,C.fKb,C.foZ,C.fp_,C.fp4,C.fyD,C.fyC,C.fyB,C.c3N,C.fKH,C.fKz,C.fKL,C.ftj,C.dHx,C.dHs,C.dHt,C.dH5,C.dH1,C.dHM,C.dHN,C.dHG,C.dHH,C.dHO,C.dHP,C.ftX,C.fwc,C.fwd,C.fJh,C.fRB,C.fta,C.fJQ,C.d8x,C.d7U,C.d82,C.d8j,C.d7Z,C.d84,C.d7W,C.d88,C.d89,C.d87,C.d8o,C.d8n,C.dai,C.daj,C.dak,C.d8L,C.d8Q,C.d8P,C.cHq,C.cHs,C.d_R,C.d0f,C.d0g,C.d0j,C.d0l,C.d0m,C.d0n,C.d0p,C.d0q,C.fba,C.fbb,C.bO2,C.fif,C.fRu,C.fRv,C.fRw,C.fRr,C.fRx,C.fRy,C.fRz,C.fRq,C.fuu,C.fx2,C.fIr,C.fqW,C.fx5,C.bJa,C.dTA,C.dTx,C.dTy,C.dTw,C.dTC,C.bOw,C.bOm,C.bY9,C.bMf,C.bOg,C.bOf,C.bOb,C.bOc,C.bOd,C.bOe,C.dVc,C.dUC,C.dUx,C.dTZ,C.dUe,C.dUh,C.dUd,C.dUc,C.dUt,C.dUu,C.dUo,C.dTN,C.dUF,C.dUz,C.dTP,C.dTQ,C.dTR,C.dTW,C.dTU,C.dTT,C.dU8,C.dU9,C.dU3,C.dUM,C.dUI,C.d8W,C.d8X,C.fu0,C.fu1,C.fu2,C.ftZ,C.fu_,C.fu5,C.fu6,C.fu7,C.fu3,C.fu4,C.d9f,C.d95,C.d90,C.d9a,C.d9b,C.d9e,C.d92,C.d9h,C.d9i,C.d9j,C.faV,C.eMF,C.dp3,C.dpd,C.dpe,C.dpf,C.dpi,C.dph,C.dpj,C.dpo,C.dpp,C.car,C.caq,C.cam,C.can,C.cao,C.cap,C.caw,C.cat,C.cau,C.dUZ,C.dV1,C.dV0,C.dV7,C.dV8,C.dGR,C.fKi,C.fJF,C.fR8,C.fJK,C.fJJ,C.d0E,C.d0F,C.d0A,C.czl,C.czn,C.czo,C.czg,C.czp,C.faf,C.fIe,C.eJN,C.eJJ,C.eJF,C.eJD,C.eJR,C.fQZ,C.eK_,C.eK8,C.eK3,C.eK4,C.eKd,C.cyD,C.cyB,C.cyC,C.ft0,C.fRJ,C.fqU,C.bOJ,C.bOI,C.bOF,C.bOG,C.bOH,C.fdJ,C.fdK,C.fJw,C.fJx,C.fJy,C.fJz,C.fJA,C.fRH,C.ftu,C.fwi,C.fwj,C.fwl,C.fwm,C.fJj,C.fRC,C.fRD,C.fRE,C.ftb,C.ftc,C.fRN,C.fsG,C.fsH,C.fR9,C.fx6,C.fJc,C.fwf,C.fwg,C.fJ7,C.feg,C.feh,C.fei,C.fej,C.fek,C.fey,C.feu,C.fev,C.fiy,C.fiz,C.flf,C.fqd,C.fqe])
u(A.au,[C.aYt,C.akz,C.aUd,C.Yx,C.b9Z,C.a5k,C.FJ,C.a0Y,C.bee,C.bhU,C.bvx,C.bl6,C.ad0,C.bhT,C.ad_,C.bhS,C.aBM,C.aHT,C.ad1,C.FI,C.bef,C.aci,C.bed,C.bei,C.aYr,C.ast,C.adm])
u(A.mq,[C.baA,C.bbM,C.bbD,C.aGL,C.bgZ,C.bml,C.bgF,C.bdH,C.beh,C.bdl,C.bj_,C.bvk])
u(A.j0,[C.fKE,C.fKF,C.fKG,C.fKx,C.fKy,C.fKJ,C.fKK,C.dHJ,C.dHv,C.dHy,C.dHc,C.dHd,C.dHe,C.dHb,C.dHj,C.dHa,C.dHk,C.dHl,C.dH9,C.dHm,C.dH8,C.dHn,C.dH7,C.dHo,C.dH_,C.dH0,C.dH6,C.dHp,C.dH4,C.dHq,C.dH3,C.dHf,C.dH2,C.dHg,C.dGZ,C.dHh,C.dHi,C.dHK,C.dHL,C.dHz,C.dHA,C.dHB,C.dHC,C.dHD,C.dHE,C.dHF,C.dHR,C.dHI,C.ftY,C.d7S,C.d7Q,C.d7R,C.d7T,C.d8w,C.d8l,C.d8i,C.d7V,C.d8m,C.d80,C.d81,C.d83,C.d8k,C.d8_,C.d85,C.d8t,C.d8f,C.d8e,C.d8g,C.d8h,C.d8a,C.d8c,C.d8d,C.d86,C.d8p,C.d8s,C.d7X,C.d7Y,C.dah,C.dag,C.daf,C.dae,C.dal,C.dad,C.dam,C.d8M,C.d8N,C.d8O,C.d8R,C.d8K,C.d8J,C.cHr,C.d_Q,C.d02,C.d01,C.d0h,C.d00,C.d0i,C.d0_,C.d_Z,C.d0k,C.d_Y,C.d0a,C.d09,C.d0r,C.bNZ,C.bO1,C.bO0,C.bO3,C.bO4,C.bO_,C.bNX,C.bNY,C.fRt,C.fIs,C.de8,C.dTz,C.dTB,C.dTu,C.dTv,C.dTt,C.dTD,C.dTE,C.dTF,C.dTG,C.dTH,C.dTI,C.dTJ,C.dTK,C.dTL,C.dTM,C.bOv,C.bOu,C.bOl,C.bOk,C.bOr,C.bOs,C.bOo,C.bOp,C.bOq,C.bOn,C.bOB,C.bOC,C.bOD,C.bOE,C.bOz,C.bOA,C.bYf,C.bYg,C.bYh,C.bYe,C.bYb,C.bYc,C.bYd,C.bYa,C.bMk,C.bMl,C.bMj,C.bMg,C.bMh,C.bMi,C.bMc,C.bMe,C.bO5,C.bO6,C.bOa,C.bO9,C.bO8,C.bO7,C.dVb,C.dVa,C.dVd,C.dVe,C.dVf,C.dV9,C.dVh,C.dVg,C.dUA,C.dUB,C.dUD,C.dU_,C.dUg,C.dUf,C.dUi,C.dUw,C.dUb,C.dUm,C.dUn,C.dUl,C.dUj,C.dUk,C.dUp,C.dUq,C.dUr,C.dUv,C.dTO,C.dUy,C.dTS,C.dTV,C.dTX,C.dUE,C.dU2,C.dU0,C.dU4,C.dU5,C.dU1,C.dU6,C.dUa,C.dUN,C.dUO,C.dUG,C.dUJ,C.dUK,C.dUL,C.dUQ,C.dUH,C.dTY,C.d8V,C.d8U,C.d8Z,C.d98,C.d9_,C.eME,C.dp4,C.dp1,C.dp2,C.dpc,C.dpb,C.dpa,C.dpk,C.dp9,C.dpl,C.dp8,C.dpm,C.dp7,C.dpn,C.dp6,C.dp5,C.dpg,C.dpq,C.dpz,C.dV_,C.dV3,C.dV4,C.dUW,C.dUX,C.dUY,C.dV2,C.dV6,C.dV5,C.dUR,C.dUS,C.dUT,C.dUU,C.dUV,C.dGS,C.fKf,C.ci0,C.d0D,C.d0C,C.d0G,C.d0z,C.d0B,C.czd,C.czj,C.czk,C.czi,C.czm,C.czh,C.cze,C.czf,C.czq,C.fag,C.fah,C.eJP,C.eJG,C.eJH,C.eJI,C.eJK,C.eJL,C.eJO,C.eJB,C.eJE,C.eJQ,C.eJC,C.eJT,C.eJU,C.eJV,C.eJW,C.eJS,C.eJw,C.eJx,C.eJy,C.eJA,C.eJz,C.eKe,C.eKf,C.eJY,C.eJZ,C.eK5,C.eK6,C.eK7,C.eK1,C.eK2,C.eKl,C.eKk,C.eKm,C.eKj,C.eJX,C.eK0,C.eKh,C.eKg,C.eKb,C.eKc,C.eKa,C.eK9])
u(A.ag,[C.aot,C.SM,C.Ze,C.Zi,C.Zg,C.YP,C.akA,C.V6,C.akE,C.akG,C.amX,C.ake,C.SN,C.apB,C.apv,C.ZT,C.apz,C.a_d,C.a_e,C.a69,C.YR,C.YQ,C.Yo,C.a1_,C.Fy,C.axc,C.ass,C.asm,C.asr,C.O7])
u(A.ah,[C.aCM,C.beb,C.azQ,C.bew,C.azR,C.bbK,C.akB,C.bji,C.akF,C.akH,C.aX8,C.akf,C.akC,C.aDk,C.aDh,C.aBL,C.aDj,C.aDi,C.bjj,C.aLb,C.ayA,C.ayz,C.axj,C.bvn,C.aNd,C.aNe,C.aEL,C.bkC,C.aEK,C.bx3])
u(A.k6,[C.dHu,C.dHw,C.dHr,C.dHQ,C.fwe,C.bNW,C.d8v,C.d8u,C.d8b,C.d8q,C.d8r,C.d8S,C.bOi,C.bOj,C.fRs,C.bOt,C.bMb,C.bMd,C.dUs,C.dU7,C.dUP,C.d97,C.d96,C.d94,C.d99,C.d9c,C.d9d,C.d8Y,C.d91,C.d93,C.d9g,C.cak,C.cas,C.cax,C.dGT,C.fKh,C.fKg,C.fad,C.fae,C.eJM,C.eKi,C.cyE,C.fhS,C.fdL,C.fwk,C.fsI,C.fwh,C.fex,C.few,C.fiA])
u(A.lU,[C.a0v,C.ZG,C.abn,C.aJy,C.HF,C.akI,C.cyF,C.cyG])
t(C.bj0,C.aLb)
t(C.bvl,C.aNd)
t(C.bvm,C.aNe)
t(C.aEM,C.bx3)
t(C.b8t,A.b8h)
t(C.bvo,A.a5P)
t(C.b8s,C.bvo)
w(C.aLb,A.eT)
w(C.aNd,A.cp)
w(C.aNe,A.cp)
v(C.bx3,A.ey)
v(C.bvo,A.j5)})()
A.jJ(b.typeUniverse,JSON.parse('{"aYt":{"au":[],"t":[]},"baA":{"aC":[]},"aot":{"ag":[],"t":[]},"aCM":{"ah":["aot"]},"SM":{"ag":[],"t":[]},"akz":{"au":[],"t":[]},"aUd":{"au":[],"t":[]},"beb":{"ah":["SM"]},"Ze":{"ag":[],"t":[]},"Zi":{"ag":[],"t":[]},"Zg":{"ag":[],"t":[]},"YP":{"ag":[],"t":[]},"azQ":{"ah":["Ze"]},"bew":{"ah":["Zi"]},"azR":{"ah":["Zg"]},"Yx":{"au":[],"t":[]},"bbM":{"aC":[]},"bbD":{"aC":[]},"bbK":{"ah":["YP"]},"aGL":{"aC":[]},"bgZ":{"aC":[]},"b9Z":{"au":[],"t":[]},"akA":{"ag":[],"t":[]},"akB":{"ah":["akA"]},"bml":{"aC":[]},"V6":{"ag":[],"t":[]},"akE":{"ag":[],"t":[]},"akG":{"ag":[],"t":[]},"amX":{"ag":[],"t":[]},"ake":{"ag":[],"t":[]},"SN":{"ag":[],"t":[]},"a5k":{"au":[],"t":[]},"bgF":{"aC":[]},"FJ":{"au":[],"t":[]},"a0Y":{"au":[],"t":[]},"bji":{"ah":["V6"]},"akF":{"ah":["akE"]},"akH":{"ah":["akG"]},"aX8":{"ah":["amX"]},"bdH":{"aC":[]},"akf":{"ah":["ake"]},"akC":{"ah":["SN"]},"apB":{"ag":[],"t":[]},"apv":{"ag":[],"t":[]},"ZT":{"ag":[],"t":[]},"ad1":{"au":[],"t":[]},"aDk":{"ah":["apB"]},"aDh":{"ah":["apv"]},"bee":{"au":[],"t":[]},"beh":{"aC":[]},"bhU":{"au":[],"t":[]},"bdl":{"aC":[]},"bvx":{"au":[],"t":[]},"bl6":{"au":[],"t":[]},"aBL":{"ah":["ZT"]},"ad0":{"au":[],"t":[]},"bhT":{"au":[],"t":[]},"ad_":{"au":[],"t":[]},"bhS":{"au":[],"t":[]},"aBM":{"au":[],"t":[]},"aHT":{"au":[],"t":[]},"FI":{"au":[],"t":[]},"apz":{"ag":[],"t":[]},"a_d":{"ag":[],"t":[]},"a_e":{"ag":[],"t":[]},"aDj":{"ah":["apz"]},"bef":{"au":[],"t":[]},"aci":{"au":[],"t":[]},"bed":{"au":[],"t":[]},"bei":{"au":[],"t":[]},"aDi":{"ah":["a_d"]},"bjj":{"ah":["a_e"]},"aYr":{"au":[],"t":[]},"a69":{"ag":[],"t":[]},"bj0":{"ah":["a69"]},"bj_":{"aC":[]},"ast":{"au":[],"t":[]},"YR":{"ag":[],"t":[]},"YQ":{"ag":[],"t":[]},"Yo":{"ag":[],"t":[]},"a1_":{"ag":[],"t":[]},"ayA":{"ah":["YR"]},"ayz":{"ah":["YQ"]},"axj":{"ah":["Yo"]},"bvn":{"ah":["a1_"]},"Fy":{"ag":[],"t":[]},"axc":{"ag":[],"t":[]},"bvl":{"ah":["Fy"]},"bvm":{"ah":["axc"]},"bvk":{"aC":[]},"ass":{"ag":[],"t":[]},"aEL":{"ah":["ass"]},"adm":{"au":[],"t":[]},"asm":{"ag":[],"t":[]},"asr":{"ag":[],"t":[]},"bkC":{"ah":["asm"]},"aEK":{"ah":["asr"]},"O7":{"ag":[],"t":[]},"aEM":{"ah":["O7"],"ey":[]},"b8s":{"j5":[],"fh":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.av
return{e2:w("aQY"),Q:w("r4"),n:w("bt<n,n>"),c5:w("aSZ"),dY:w("aT_"),fH:w("LV"),de:w("ajw"),A:w("eE<n?>"),e:w("HE"),B:w("ng"),P:w("i1"),df:w("le"),k:w("kF"),x:w("aA<~>"),f5:w("O<a2X>"),V:w("O<ac>"),C:w("O<r4>"),O:w("O<v>"),c:w("O<LV>"),b:w("O<ajw>"),ac:w("O<eE<n?>>"),I:w("O<ng>"),u:w("O<i1>"),J:w("O<le>"),_:w("O<kF>"),cl:w("O<aA<ai<a6<n,@>>>>"),R:w("O<ni>"),cq:w("O<ai<+(K,K)>>"),ez:w("O<a6<n,aD>>"),gE:w("O<a6<n,n>>"),X:w("O<a6<n,@>>"),gl:w("O<aX9>"),fD:w("O<my>"),bp:w("O<ol>"),dN:w("O<x>"),ar:w("O<asF>"),v:w("O<he>"),E:w("O<ku>"),L:w("O<+(n,n)>"),G:w("O<+(K,K)>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cS>"),s:w("O<n>"),cF:w("O<aq>"),aS:w("O<iT>"),p:w("O<t>"),U:w("O<fh>"),D:w("O<lo>"),cy:w("O<azw>"),fp:w("O<JX>"),M:w("O<K4>"),gZ:w("O<aGQ>"),Y:w("O<aez>"),W:w("O<aIR>"),Z:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),g:w("cw<ah<ag>>"),d:w("ai<ng>"),h:w("ai<i1>"),cg:w("ai<le>"),r:w("ai<kF>"),fO:w("ai<a6<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<aq>"),gk:w("ai<lo>"),j:w("ai<@>"),fK:w("bw<n,n>"),d2:w("bw<n,ai<a6<n,@>>>"),a:w("a6<n,@>"),f:w("a6<@,@>"),gv:w("M<n,HG>"),cM:w("M<H,n>"),w:w("iD"),g2:w("ro"),bV:w("aoh"),fL:w("cq"),K:w("aD"),fo:w("Ot<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(K,ai<i1>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bp<K>"),gc:w("dI"),b4:w("cx<H>"),cI:w("jI<n>"),av:w("Z<z3>"),cc:w("Z<n>"),l:w("t"),gF:w("fh"),i:w("lo"),dO:w("FN"),bw:w("ad_<n?>"),fx:w("K6"),q:w("n1"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),eK:w("ai<kF>?"),m:w("apy?"),cT:w("x?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("q2?"),T:w("n?"),aD:w("dI?"),o:w("lo?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZW=new A.bk(B.hH,B.bG,B.hH,B.bG)
D.ab6=new A.bk(B.hH,B.iz,B.hH,B.iz)
D.b_8=new A.bk(B.iA,B.bG,B.bG,B.bG)
D.b_c=new A.ay(B.cM,1.4,B.q,-1)
D.b_m=new A.ay(B.ad,1,B.q,-1)
D.b0L=new A.aX(0,1/0,64,1/0)
D.b0P=new A.aX(0,84,0,1/0)
D.b14=new A.aX(130,1/0,0,1/0)
D.ayL=w([B.lU,B.r1,B.c],x.O)
D.bZR=new A.a8(B.ax,B.aC,B.x,D.ayL,null,null)
D.b1A=new A.o(null,null,null,null,null,D.bZR,B.n)
D.d4I=w([B.aV,B.bN],x.O)
D.c0Y=new A.a8(B.b3,B.b6,B.x,D.d4I,null,null)
D.b1V=new A.o(null,null,null,null,null,D.c0Y,B.n)
D.Wv=new A.v(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.t)
D.iI=new A.v(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.t)
D.d8l=w([B.dx,D.Wv,D.iI],x.O)
D.bZ2=new A.a8(B.b3,B.b6,B.x,D.d8l,null,null)
D.b2F=new A.o(null,null,null,null,null,D.bZ2,B.n)
D.a8H=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frL=new A.y("\ud83c\udf33",null,D.a8H,null,null,null,null,null,null,null,null,null)
D.b6l=new A.cm(B.A,null,null,D.frL,null)
D.fuh=new A.y("\ud83c\udfc6",null,Am.Jt,null,null,null,null,null,null,null,null,null)
D.b6r=new A.cm(B.A,null,null,D.fuh,null)
D.fpa=new A.y("\ud83e\ude98",null,B.v7,null,null,null,null,null,null,null,null,null)
D.b6v=new A.cm(B.A,null,null,D.fpa,null)
D.b8f=new A.fj(null,null,null,null,null,F.k2,null,null,null,null)
D.acr=new A.cm(B.A,null,null,D.b8f,null)
D.kt=new A.v(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f9J=new A.F(!0,D.kt,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftp=new A.y("No books on the shelf yet.",null,D.f9J,null,null,null,null,null,null,null,null,null)
D.ee9=new A.D(B.o2,D.ftp,null)
D.b6H=new A.cm(B.A,null,null,D.ee9,null)
D.fn7=new A.y("\ud83e\ude98",null,D.a8H,null,null,null,null,null,null,null,null,null)
D.b75=new A.cm(B.A,null,null,D.fn7,null)
D.fmc=new A.y("Every drum is matched!",null,B.t_,null,null,null,null,null,null,null,null,null)
D.b7s=new A.cm(B.A,null,null,D.fmc,null)
D.b7C=new A.cm(B.A,null,null,A4.Wl,null)
D.b9E=new A.v(1,0.5450980392156862,0.4196078431372549,0.2901960784313726,B.t)
D.b9L=new A.v(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.oI=new A.v(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.t)
D.bad=new A.v(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.nK=new A.v(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.t)
D.baL=new A.v(1,0.47843137254901963,0.5607843137254902,0.22745098039215686,B.t)
D.AM=new A.v(1,0.8392156862745098,0.1568627450980392,0.1568627450980392,B.t)
D.adC=new A.v(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bcZ=new A.v(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bdi=new A.v(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.e0=new A.v(1,0.9490196078431372,0.6901960784313725,0.11764705882352941,B.t)
D.bdz=new A.v(1,0.47843137254901963,0.3607843137254902,0.24313725490196078,B.t)
D.bg5=new A.v(1,0.5450980392156862,0.2901960784313726,0.1411764705882353,B.t)
D.bgk=new A.v(1,0.20784313725490197,0.43529411764705883,0.20392156862745098,B.t)
D.bgn=new A.v(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.t)
D.aeZ=new A.v(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bhp=new A.v(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bhO=new A.v(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.F6=new A.v(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bi5=new A.v(1,0.7607843137254902,0.4470588235294118,0.22745098039215686,B.t)
D.bie=new A.v(1,0.5411764705882353,0.37254901960784315,0.2,B.t)
D.B3=new A.v(1,1,0.9529411764705882,0.8627450980392157,B.t)
D.bjt=new A.v(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bjG=new A.v(1,0.8313725490196079,0.6352941176470588,0.2980392156862745,B.t)
D.bkB=new A.v(1,0.24705882352941178,0.4980392156862745,0.22745098039215686,B.t)
D.blY=new A.v(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.bmm=new A.v(1,1,0.9098039215686274,0.6901960784313725,B.t)
D.agB=new A.v(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.bn6=new A.v(1,0.043137254901960784,0.058823529411764705,0.16470588235294117,B.t)
D.bnW=new A.v(1,0.7254901960784313,0.5411764705882353,0.3215686274509804,B.t)
D.boj=new A.v(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.t)
D.fnJ=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.brO=new A.eE(null,D.fnJ,B.f0,null,x.A)
D.fwC=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.brQ=new A.eE(null,D.fwC,B.f0,null,x.A)
D.bsn=new A.bb(38e5)
D.bt6=new A.ii(0,10,0,10)
D.btf=new A.Q(0,1,0,0)
D.btq=new A.ii(0,4,0,4)
D.btt=new A.Q(0,4,5,0)
D.btJ=new A.Q(10,10,14,10)
D.btV=new A.ii(10,4,10,4)
D.bu2=new A.ii(10,8,10,8)
D.bu3=new A.Q(10,8,8,8)
D.buu=new A.Q(12,6,12,2)
D.buM=new A.Q(14,10,6,6)
D.buN=new A.Q(14,12,14,0)
D.buR=new A.Q(14,12,14,8)
D.buU=new A.Q(14,12,8,14)
D.buY=new A.ii(14,14,14,14)
D.bvd=new A.Q(14,6,14,40)
D.bvg=new A.Q(14,8,14,30)
D.bvE=new A.Q(16,2,16,10)
D.bvO=new A.Q(16,6,16,16)
D.bvP=new A.Q(16,6,16,30)
D.bvR=new A.Q(16,6,16,8)
D.bw4=new A.Q(18,10,18,4)
D.bw6=new A.Q(18,12,18,0)
D.bwd=new A.Q(18,14,12,4)
D.aiW=new A.Q(18,16,18,8)
D.bwu=new A.Q(18,20,18,22)
D.aj_=new A.Q(18,24,18,24)
D.bwA=new A.Q(18,30,18,30)
D.bwS=new A.Q(20,10,12,20)
D.bwV=new A.Q(20,11,20,11)
D.bx5=new A.Q(20,18,16,18)
D.bx7=new A.Q(20,18,20,6)
D.bxX=new A.Q(24,32,24,28)
D.bxY=new A.Q(24,36,24,32)
D.by1=new A.Q(26,26,24,14)
D.byg=new A.Q(2,4,2,8)
D.byk=new A.Q(30,0,30,0)
D.byv=new A.Q(38,22,22,22)
D.ajj=new A.Q(40,24,24,24)
D.byx=new A.ii(40,40,40,40)
D.byz=new A.Q(46,30,30,30)
D.ajm=new A.Q(4,0,0,8)
D.bz_=new A.Q(56,40,40,40)
D.bz3=new A.Q(1.25,1.25,1.25,1.25)
D.bz4=new A.Q(60,0,60,0)
D.bz7=new A.Q(6,14,6,16)
D.bzb=new A.Q(6,4,12,0)
D.bze=new A.Q(6,6,10,2)
D.bzl=new A.ii(7,3,7,3)
D.bzS=new A.Q(5,1.5,5,1.5)
D.bA2=new A.Q(6,2.5,6,2.5)
D.fEw=new A.y("Family Games",null,B.jY,null,null,null,null,null,null,null,null,null)
D.fmn=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,M.a8z,null,null,null,null,null,null,null,null,null)
D.czM=w([D.fEw,D.fmn],x.p)
D.bpl=new A.fk(B.af,B.e,B.j,B.E,null,B.p,null,0,D.czM,null)
D.bAk=new A.by(1,B.bd,D.bpl,null)
D.fIQ=new A.y("Signature",null,B.nz,null,null,null,null,null,null,null,null,null)
D.bAo=new A.by(1,B.bd,D.fIQ,null)
D.fBa=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,O.rW,null,null,null,null,null,null,null,null,null)
D.bAX=new A.by(1,B.bd,D.fBa,null)
D.fG_=new A.y("Tell the AI what to fix",null,B.df,null,null,null,null,null,null,null,null,null)
D.bBc=new A.by(1,B.bd,D.fG_,null)
D.fhb=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHW=new A.y("Worksheets",null,D.fhb,null,null,null,null,null,null,null,null,null)
D.fhk=new A.F(!0,F.adb,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGP=new A.y("Track your project spending",null,D.fhk,null,null,null,null,null,null,null,null,null)
D.cXz=w([D.fHW,B.au,D.fGP],x.p)
D.boY=new A.fk(B.af,B.e,B.j,B.E,null,B.p,null,0,D.cXz,null)
D.bBi=new A.by(1,B.bd,D.boY,null)
D.fcp=new A.F(!0,F.k2,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmV=new A.y("FAMILY LIBRARY",null,D.fcp,null,null,null,null,null,null,null,null,null)
D.bBA=new A.by(1,B.bd,D.fmV,null)
D.Nd=new C.HE("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.vU=new C.HF(0,"male")
D.q2=new C.HF(1,"female")
D.yk=new C.HF(2,"unknown")
D.tZ=new C.akI(0,"owner")
D.Ne=new C.akI(1,"editor")
D.kD=new C.akI(2,"viewer")
D.al2=new A.a1(61199,"MaterialIcons",!1)
D.bGw=new A.a1(61504,"MaterialIcons",!1)
D.bGx=new A.a1(61505,"MaterialIcons",!1)
D.bGz=new A.a1(61587,"MaterialIcons",!1)
D.bGG=new A.a1(61890,"MaterialIcons",!1)
D.bHz=new A.a1(63034,"MaterialIcons",!0)
D.bIn=new A.a1(63429,"MaterialIcons",!1)
D.ang=new A.a1(984520,"MaterialIcons",!1)
D.bH4=new A.a1(62776,"MaterialIcons",!1)
D.bKC=new A.ae(D.bH4,26,B.b_,null,null,null)
D.bFu=new A.a1(57648,"MaterialIcons",!1)
D.bKV=new A.ae(D.bFu,14,B.c,null,null,null)
D.bLc=new A.ae(B.Gc,17,null,null,null,null)
D.bLi=new A.ae(B.a0f,null,B.bN,null,null,null)
D.bLJ=new A.ae(F.a0k,null,null,null,null,null)
D.bLM=new A.ae(B.j9,18,F.k2,null,null,null)
D.a05=new A.a1(62044,"MaterialIcons",!1)
D.bLR=new A.ae(D.a05,null,B.aV,null,null,null)
D.bLY=new A.ae(B.yv,18,B.c,null,null,null)
D.bMG=new A.ae(B.e2,16,null,null,null,null)
D.bMN=new A.ae(D.a05,32,B.aV,null,null,null)
D.bN6=new A.ae(F.al3,18,B.cM,null,null,null)
D.bO9=new A.ae(B.Gm,22,B.aw,null,null,null)
D.bOl=new A.ae(B.e2,22,B.b_,null,null,null)
D.bOx=new A.ae(V.a0a,22,B.c,null,null,null)
D.bOD=new A.ae(B.ua,52,B.c,null,null,null)
D.bON=new A.ae(B.Gm,30,B.aw,null,null,null)
D.bP5=new A.ae(B.a0q,null,B.c,null,null,null)
D.anT=new A.ae(B.uj,22,B.c,null,null,null)
D.bPf=new A.ae(B.e2,17,null,null,null,null)
D.bPz=new A.ae(B.w9,26,B.cM,null,null,null)
D.bQj=new A.ae(B.a0w,16,null,null,null,null)
D.bR4=new A.ae(B.ua,24,B.c,null,null,null)
D.bR9=new A.ae(B.NG,20,B.ry,null,null,null)
D.bRe=new A.ae(B.Ga,null,B.bN,null,null,null)
D.bRl=new A.ae(B.j9,18,B.c,null,null,null)
D.bRZ=new A.ae(B.cw,22,B.ad,null,null,null)
D.bSO=new A.ae(B.eb,16,B.ad,null,null,null)
D.bT_=new A.ae(D.a05,20,B.aV,null,null,null)
D.aoh=new A.ae(B.hD,20,null,null,null,null)
D.bTu=new A.ae(B.cw,18,D.kt,null,null,null)
D.bTM=new A.ae(B.yF,28,B.c,null,null,null)
D.bTV=new A.ae(B.Nw,null,B.fi,null,null,null)
D.bUe=new A.ae(B.yF,24,B.c,null,null,null)
D.bUF=new A.ae(B.ua,null,B.aV,null,null,null)
D.bUG=new A.ae(B.jL,20,B.cM,null,null,null)
D.bV_=new A.ae(B.Gc,16,null,null,null,null)
D.bWx=new A.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eD,!0,null,null,null,null)
D.aoY=new C.a5k(10,null)
D.bX2=new C.a5k(12,null)
D.bX3=new C.a5k(14,null)
D.dcb=w([B.bu,B.aV,B.fd,B.b_],x.O)
D.bYe=new A.a8(B.ax,B.aC,B.x,D.dcb,null,null)
D.d1M=w([D.oI,D.iI],x.O)
D.bYp=new A.a8(B.ax,B.aC,B.x,D.d1M,null,null)
D.bim=new A.v(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bnX=new A.v(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cUn=w([D.bim,D.bnX],x.O)
D.bYq=new A.a8(B.b3,B.b6,B.x,D.cUn,null,null)
D.d6x=w([B.f3,B.fC,B.fd],x.O)
D.bYv=new A.a8(B.ax,B.aC,B.x,D.d6x,null,null)
D.afB=new A.v(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.bae=new A.v(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cWm=w([D.afB,D.bae],x.O)
D.bZ3=new A.a8(B.b3,B.b6,B.x,D.cWm,null,null)
D.bdv=new A.v(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.ay3=w([D.bdv,D.afB],x.O)
D.bZn=new A.a8(B.ax,B.aC,B.x,D.ay3,null,null)
D.aez=new A.v(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bfN=new A.v(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d5G=w([D.aez,D.bfN],x.O)
D.c_1=new A.a8(B.a3,B.a8,B.x,D.d5G,null,null)
D.diR=w([B.bx,B.n0],x.O)
D.c_3=new A.a8(B.b3,B.b6,B.x,D.diR,null,null)
D.bih=new A.v(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.djK=w([D.bih,D.kt,D.kt,H.XG],x.O)
D.dm8=w([0,0.07,0.9,1],x.Z)
D.c_z=new A.a8(B.a3,B.a8,B.x,D.djK,D.dm8,null)
D.c_J=new A.a8(B.ax,B.aC,B.x,B.Rc,null,null)
D.cSi=w([B.aD,D.oI],x.O)
D.c_M=new A.a8(B.a3,B.a8,B.x,D.cSi,null,null)
D.diq=w([B.b_,B.aV,B.bN],x.O)
D.c0J=new A.a8(B.ax,B.aC,B.x,D.diq,null,null)
D.c4W=w([10,20,30],x.t)
D.cev=w(["kahoot","fire","memory","order","test"],x.s)
D.eEZ=new A.z(-40,150)
D.enE=new A.z(30,160)
D.clZ=w([D.eEZ,D.enE],x.G)
D.cmn=w([B.bu,B.b_,B.f3],x.O)
D.cmu=w([B.by,B.aD,B.jl],x.O)
D.cmw=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bgV=new A.v(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.csH=w([D.bgV,F.afh],x.O)
D.e9W=new A.x(1,2)
D.eVL=new A.cS(B.aW,D.e9W,3)
D.av2=w([D.eVL],x.F)
D.cA0=w([B.h7,B.c8,B.fc],x.O)
D.cCJ=w([B.bK,B.br,B.bm],x.O)
D.bC8=new C.uk("classic","Classic leather","Gold-edged brown leather",D.ay3,F.k2,F.k2,"\u2766",B.L,!0,!1,!1,!1)
D.b9x=new A.v(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bmQ=new A.v(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cZc=w([D.b9x,D.bmQ],x.O)
D.afl=new A.v(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bC3=new C.uk("ornate","Ornate gold","Double gold border and flourishes",D.cZc,D.afl,D.afl,"\u2726",B.L,!0,!0,!0,!1)
D.bd7=new A.v(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bj5=new A.v(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cRf=w([D.bd7,D.bj5],x.O)
D.bC2=new C.uk("parchment","Parchment","Old paper with dark ink",D.cRf,D.F6,K.iG,"\u2767",B.L,!0,!1,!1,!0)
D.acT=new A.v(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bld=new A.v(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.dgJ=w([D.acT,D.bld],x.O)
D.bgt=new A.v(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bky=new A.v(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bC5=new C.uk("minimal","Clean paper","Plain and elegant, like a printed book",D.dgJ,D.bgt,D.bky,"",B.L,!0,!0,!1,!0)
D.bC7=new C.uk("midnight","Midnight","Deep blue with silver stars",M.ayn,B.cr,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bC1=new C.uk("emerald","Emerald library","Green cloth, title on the left",T.avr,F.k2,B.fL,"\u25c6",B.bh,!0,!1,!1,!1)
D.blE=new A.v(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.deU=w([B.eu,D.blE],x.O)
D.bhx=new A.v(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.biF=new A.v(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bC6=new C.uk("rose","Rose vintage","Burgundy with rose-gold lettering",D.deU,D.bhx,D.biF,"\u2740",B.L,!0,!1,!0,!1)
D.djm=w([B.cp,I.n1],x.O)
D.bC4=new C.uk("modern","Modern","Dark, bold, left-aligned",D.djm,B.aR,B.c,"",B.bh,!1,!0,!1,!1)
D.a2v=w([D.bC8,D.bC3,D.bC2,D.bC5,D.bC7,D.bC1,D.bC6,D.bC4],A.av("O<uk>"))
D.cFG=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dj9=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bCj=new C.le('What does "Ubuntu" mean?',D.dj9,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cSU=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bCm=new C.le("In Swahili, what do we call a grandmother?",D.cSU,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cSN=w(["Babu","Mama","Baba","Dada"],x.s)
D.bCh=new C.le("In Swahili, what do we call a grandfather?",D.cSN,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cTZ=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bCl=new C.le("What is a sister called in Swahili?",D.cTZ,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.cYF=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bCi=new C.le("What is a brother called in Swahili?",D.cYF,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cSM=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bCt=new C.le("Which word means father in Swahili?",D.cSM,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dkd=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bCs=new C.le('"Umoja ni nguvu" means...',D.dkd,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dho=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bCu=new C.le('"Haba na haba hujaza kibaba" teaches us...',D.dho,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.cWu=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bCr=new C.le('The African saying "It takes a village to raise a child" means...',D.cWu,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dkw=w(["The elders","The market","The river","The drum"],x.s)
D.bCn=new C.le("Who is the traditional keeper of the family stories?",D.dkw,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cJQ=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bCk=new C.le("Why do families sit round the fire at night?",D.cJQ,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.djo=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bCp=new C.le('What does "Harambee" mean?',D.djo,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d0i=w(["An elder","A baby","A market","A cow"],x.s)
D.bCo=new C.le('"Mzee" is a respectful word for...',D.d0i,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.deL=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bCq=new C.le('What does "Shikamoo" show?',D.deL,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.avn=w([D.bCj,D.bCm,D.bCh,D.bCl,D.bCi,D.bCt,D.bCs,D.bCu,D.bCr,D.bCn,D.bCk,D.bCp,D.bCo,D.bCq],x.J)
D.eEW=new A.z(-330,-190)
D.enJ=new A.z(330,-230)
D.eFa=new A.z(-60,-430)
D.epV=new A.z(560,40)
D.eF7=new A.z(-560,120)
D.cNG=w([D.eEW,D.enJ,D.eFa,D.epV,D.eF7],x.G)
D.cQN=w([B.bN,B.bi],x.O)
D.bi6=new A.v(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cRr=w([D.acT,D.bi6],x.O)
D.bd3=new A.v(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cT7=w([D.bd3,B.dc],x.O)
D.cUD=w([B.bb,B.j2,B.oK],x.O)
D.cV_=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.cVD=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.baa=new A.v(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bf4=new A.v(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dm4=w([D.aez,D.baa,D.bf4],x.O)
D.bC9=new C.ul("leather","Leather",D.dm4,"vintage")
D.d1h=w([B.d7,B.Ls,A8.WU],x.O)
D.bCg=new C.ul("midnight","Midnight",D.d1h,"starry")
D.cUE=w([B.eg,B.dV,B.ln],x.O)
D.bCf=new C.ul("forest","Forest",D.cUE,"story")
D.do2=w([B.en,B.eu,B.kw],x.O)
D.bCc=new C.ul("burgundy","Burgundy",D.do2,"royal")
D.cCh=w([B.aD,B.oM,B.nH],x.O)
D.bCd=new C.ul("royal","Royal",D.cCh,"royal")
D.cWZ=w([B.br,B.cp,I.n1],x.O)
D.bCa=new C.ul("charcoal","Charcoal",D.cWZ,"geo")
D.dmc=w([B.c9,B.dM,B.xD],x.O)
D.bCe=new C.ul("sunset","Sunset",D.dmc,"sunset")
D.dmT=w([B.j2,B.F7,B.WX],x.O)
D.bCb=new C.ul("ocean","Ocean",D.dmT,"band")
D.z6=w([D.bC9,D.bCg,D.bCf,D.bCc,D.bCd,D.bCa,D.bCe,D.bCb],A.av("O<ul>"))
D.fN6=new E.q(0,0,-96)
D.h7G=new C.PM(D.fN6,0,1.15,I.ag2,B.en,D.e0,B.bP,null,!0)
D.h1X=new E.q(-92,0,10)
D.h7F=new C.PM(D.h1X,1.35,0.8,I.nZ,D.nK,D.e0,I.qR,null,!1)
D.fV_=new E.q(92,0,14)
D.h7I=new C.PM(D.fV_,-1.35,0.78,B.tB,B.aF,B.en,I.qR,B.aD,!1)
D.h1x=new E.q(-58,0,84)
D.afy=new A.v(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.t)
D.h7J=new C.PM(D.h1x,0.62,0.74,I.agD,D.afy,D.e0,I.qR,null,!1)
D.fTA=new E.q(60,0,88)
D.h7H=new C.PM(D.fTA,-0.6,0.72,I.adY,B.dM,D.B3,I.qR,D.e0,!1)
D.cX3=w([D.h7G,D.h7F,D.h7I,D.h7J,D.h7H],A.av("O<PM>"))
D.cXq=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cY1=w([B.ak,B.aJ,B.M],x.O)
D.cZh=w([B.eu,B.dV,B.d7,B.fZ,B.xG,B.cM,B.k6,B.e4,B.d8],x.O)
D.cZi=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eVM=new A.cS(B.dq,B.dD,8)
D.cZs=w([D.eVM],x.F)
D.eNi=new A.bj(-520,260,180)
D.eKQ=new A.bj(460,330,150)
D.eNe=new A.bj(-300,-420,200)
D.eL0=new A.bj(640,-260,170)
D.eL7=new A.bj(80,520,160)
D.d_u=w([D.eNi,D.eKQ,D.eNe,D.eL0,D.eL7],A.av("O<+(K,K,K)>"))
D.d_x=w([B.c6,B.dM,B.ku],x.O)
D.d00=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d1c=w([B.c6,B.hh],x.O)
D.d3m=w([B.aS,B.vv,B.xs],x.O)
D.axh=w(["True","False"],x.s)
D.d4f=w([B.bL,B.cs,B.ds,B.aS],x.O)
D.d4J=w([B.i3,B.c9,B.tt],x.O)
D.d5d=w([B.f3,B.cM],x.O)
D.d5M=w([B.cY,B.fn,B.hy],x.O)
D.d5X=w([B.aR,B.bi,B.d7],x.O)
D.d6u=w([B.em,B.cS,B.dV],x.O)
D.d6N=w([B.dL,B.d7,B.Ls],x.O)
D.d76=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.d86=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a3q=w(["leather","linen","plain","stars","rays"],x.s)
D.d9N=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bKi=new A.a1(985219,"MaterialIcons",!1)
D.bJR=new A.a1(983781,"MaterialIcons",!1)
D.axJ=w([B.a0f,B.i8,B.lZ,B.i9,D.bKi,B.Gw,B.q5,D.bJR,M.an3,B.C4,B.q7,B.mA],A.av("O<a1>"))
D.a3u=w(["double","single","corners","none"],x.s)
D.bBZ=new C.z3("Little Seed","\ud83c\udf31",0)
D.bC0=new C.z3("Young Listener","\ud83d\udc42",40)
D.bC_=new C.z3("Storyteller","\ud83e\ude98",120)
D.bBY=new C.z3("Village Pride","\ud83c\udfe1",300)
D.bBW=new C.z3("Keeper of Roots","\ud83c\udf33",700)
D.bBX=new C.z3("Elder of the Fire","\ud83d\udd25",1500)
D.axK=w([D.bBZ,D.bC0,D.bC_,D.bBY,D.bBW,D.bBX],A.av("O<z3>"))
D.daR=w([B.dt,B.bl,B.e4],x.O)
D.db3=w([],x.C)
D.CD=w([],x.u)
D.dd0=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.ddr=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.des=w([D.e0,D.AM,B.kz,D.nK,D.e0,B.kz],x.O)
D.dfP=w([B.aF,B.fn,B.fZ],x.O)
D.dhm=w([B.bH,B.mX,B.XS],x.O)
D.dhC=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dAS=new C.lF("construction","Construction","Jobsite & builds",B.yy)
D.dAZ=new C.lF("house","Home Build","Houses & rooms",B.w4)
D.dAP=new C.lF("grocery","Grocery","Store & pantry",B.a13)
D.dAO=new C.lF("calculator","Calculations","Math & estimates",B.NP)
D.dAX=new C.lF("lumber","Materials","Lumber & supplies",B.O4)
D.dAL=new C.lF("kitchen","Kitchen","Remodel & meals",A_.amg)
D.bJP=new A.a1(983756,"MaterialIcons",!1)
D.dAQ=new C.lF("landscape","Landscaping","Yard & garden",D.bJP)
D.dAK=new C.lF("plumbing","Plumbing","Pipes & water",B.qe)
D.dB_=new C.lF("electrical","Electrical","Wiring & power",B.hn)
D.dAI=new C.lF("store","Retail Shop","Daily business",B.l7)
D.dAJ=new C.lF("paint_remodel","Paint & Remodel","Colors & walls",Ad.a0C)
D.bJi=new A.a1(983311,"MaterialIcons",!1)
D.dAW=new C.lF("roofing","Roofing","Roofs & exteriors",D.bJi)
D.bK0=new A.a1(983986,"MaterialIcons",!1)
D.dAH=new C.lF("warehouse","Warehouse","Storage & stock",D.bK0)
D.dAU=new C.lF("vehicles","Vehicles","Fleet & transport",B.Gx)
D.bH6=new A.a1(62785,"MaterialIcons",!1)
D.dAN=new C.lF("farm","Farm","Crops & livestock",D.bH6)
D.dAM=new C.lF("restaurant","Restaurant","Food & catering",B.wc)
D.dAT=new C.lF("tools","Tools","Workshop gear",B.Gt)
D.dAY=new C.lF("wallet","Cash & Wallet","Quick spending",B.jL)
D.bIi=new A.a1(63395,"MaterialIcons",!1)
D.dAV=new C.lF("concrete","Concrete","Foundation work",D.bIi)
D.dAR=new C.lF("blueprint","Blueprint","Plans & design",Aj.aly)
D.a3V=w([D.dAS,D.dAZ,D.dAP,D.dAO,D.dAX,D.dAL,D.dAQ,D.dAK,D.dB_,D.dAI,D.dAJ,D.dAW,D.dAH,D.dAU,D.dAN,D.dAM,D.dAT,D.dAY,D.dAV,D.dAR],A.av("O<lF>"))
D.di6=w([B.bq,B.bl],x.O)
D.diS=w([B.ig,B.nP,B.dG],x.O)
D.bfW=new A.v(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.t)
D.bgw=new A.v(1,0.8470588235294118,0.6196078431372549,0,B.t)
D.b9f=new A.v(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.t)
D.ayS=w([D.bfW,D.afy,D.bgw,D.b9f],x.O)
D.a44=w(["top","middle","bottom"],x.s)
D.dll=w([B.co,B.bi,B.d7],x.O)
D.az5=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b37=new A.ac(0,B.G,B.aW,B.J,14)
D.dlD=w([D.b37],x.V)
D.dlZ=w([B.bo,B.cS,B.dV],x.O)
D.dnY=w([B.bK,B.ak],x.O)
D.dnZ=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e7i={top:0,middle:1,bottom:2}
D.dra=new A.bt(D.e7i,["Top","Middle","Bottom"],x.n)
D.e6X={double:0,single:1,corners:2,none:3}
D.drg=new A.bt(D.e6X,["Double line","One line","Corners","None"],x.n)
D.e80={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dsJ=new A.bt(D.e80,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dsP=new A.bt(B.hX,[],A.av("bt<H,+(n,n)>"))
D.e7b={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CP=new A.bt(D.e7b,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.av("bt<n,H>"))
D.dvr=new G.N0(32,null)
D.dvs=new G.N0(40,null)
D.dvt=new G.N0(46,null)
D.aH3=new C.asr(null)
D.eaU=new A.x(8,14)
D.fu_=new A.y("Write a new book",null,B.hI,null,B.L,null,null,null,null,null,null,null)
D.edA=new A.D(B.l0,D.fu_,null)
D.fIp=new A.y("Tap to go on",null,B.v0,null,null,null,null,null,null,null,null,null)
D.edU=new A.D(B.kZ,D.fIp,null)
D.ans=new A.ae(B.hC,18,B.c,null,null,null)
D.fnh=new A.y("Add",null,B.lH,null,null,null,null,null,null,null,null,null)
D.d4t=w([D.ans,B.qu,D.fnh],x.p)
D.eTp=new A.c9(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d4t,null)
D.edX=new A.D(B.nf,D.eTp,null)
D.edY=new A.D(F.ahP,A4.Wl,null)
D.fh6=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqk=new A.y("New Project",null,D.fh6,null,null,null,null,null,null,null,null,null)
D.d8t=w([D.ans,B.ab,D.fqk],x.p)
D.eTs=new A.c9(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d8t,null)
D.ee8=new A.D(B.iO,D.eTs,null)
D.fsP=new A.y("Choose your header",null,Y.rU,null,null,null,null,null,null,null,null,null)
D.eet=new A.D(B.hA,D.fsP,null)
D.b8u=new A.fj(2.2,null,null,null,null,B.cM,null,null,null,null)
D.eYC=new A.a7(22,22,D.b8u,null)
D.b6D=new A.cm(B.A,null,null,D.eYC,null)
D.eey=new A.D(B.Z_,D.b6D,null)
D.bv7=new A.Q(14,2,14,6)
D.fGy=new A.y("The top of your book. Tap a design to see it.",null,S.v1,null,null,null,null,null,null,null,null,null)
D.eez=new A.D(D.bv7,D.fGy,null)
D.fs_=new A.y("\ud83c\udfc6 A new record!",null,B.fJ,null,null,null,null,null,null,null,null,null)
D.eeA=new A.D(B.kZ,D.fs_,null)
D.eg7=new A.iR(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.ega=new A.iR(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aIg=new A.iR(1,0.9607843137254902,0.48627450980392156,0)
D.IB=new A.iR(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zF=new A.iR(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.egg=new A.iR(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hab=new C.bgZ(null)
D.bq7=new A.mp(D.hab,null,B.az,null,null)
D.aLU=new A.cM(0,0,0,0,null,null,D.bq7,null)
D.es5=new A.z("E","Sit by the fire again")
D.exs=new A.z("C","Good Learner")
D.eAG=new A.z("D","Still Growing")
D.eF2=new A.z(-42,42)
D.eGm=new A.z("B","Faithful Listener")
D.eI8=new A.z("A","Keeper of the Family")
D.eO6=new A.cv([0,0,1,1])
D.aNg=new A.a9(0,0,520,160)
D.fG6=new A.y("Let the AI write it from your tree",null,B.iY,null,B.L,null,null,null,null,null,null,null)
D.bD0=new A.dr(1,B.cn,D.fG6,null)
D.d1b=w([F.a1x,B.ab,D.bD0],x.p)
D.eT4=new A.c9(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d1b,null)
D.fmW=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.dg9=w([D.aoh,B.ab,D.fmW],x.p)
D.eTe=new A.c9(B.aM,B.b7,B.j,B.m,null,B.p,null,0,D.dg9,null)
D.bOq=new A.ae(B.hR,14,B.b_,null,null,null)
D.faZ=new A.F(!0,B.b_,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqK=new A.y("Cashier",null,D.faZ,null,null,null,null,null,null,null,null,null)
D.d9_=w([D.bOq,B.bn,D.fqK],x.p)
D.eTh=new A.c9(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d9_,null)
D.fmX=new A.y("Transfer & settings",null,B.df,null,null,null,null,null,null,null,null,null)
D.bB2=new A.by(1,B.bd,D.fmX,null)
D.cU7=w([D.anT,B.as,D.bB2],x.p)
D.eTi=new A.c9(B.aM,B.e,B.j,B.m,null,B.p,null,0,D.cU7,null)
D.eXj=new A.as(16,40)
D.eXo=new A.as(22,64)
D.eXv=new A.as(280,88)
D.eYi=new A.a7(30,null,null,null)
D.eZt=new A.hP(5,8,8,1,null)
D.eZB=new A.hP(2,12,12,1.05,null)
D.fqq=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.f_j=new A.b1(D.fqq,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fqF=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aPn=new A.b1(D.fqF,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fyU=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_N=new A.b1(D.fyU,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fJp=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.f_S=new A.b1(D.fJp,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsN=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.f_Z=new A.b1(D.fsN,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.r,null)
D.fGL=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aPr=new A.b1(D.fGL,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsL=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.f0o=new A.b1(D.fsL,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fny=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f0q=new A.b1(D.fny,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fwq=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.f0w=new A.b1(D.fwq,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fK7=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.f1b=new A.b1(D.fK7,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fF_=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f1A=new A.b1(D.fF_,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fJt=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f1D=new A.b1(D.fJt,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fAu=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f1F=new A.b1(D.fAu,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fuB=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f1G=new A.b1(D.fuB,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fuC=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f2G=new A.b1(D.fuC,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fqs=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f2Y=new A.b1(D.fqs,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsp=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f3h=new A.b1(D.fsp,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fzZ=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f3x=new A.b1(D.fzZ,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fvq=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f3y=new A.b1(D.fvq,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.f6H=new A.F(!0,D.kt,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6S=new A.F(!0,D.AM,null,null,null,null,76,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f77=new A.F(!0,D.kt,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7b=new A.F(!0,D.e0,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7k=new A.F(!0,D.iI,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7N=new A.rL(!0,B.rH,null,null,null,null,B.du,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f82=new A.F(!0,D.e0,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f85=new A.F(!0,D.kt,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f86=new A.F(!0,D.e0,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8b=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8e=new A.F(!0,D.e0,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8I=new A.F(!0,B.b_,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8J=new A.F(!0,B.ad,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9c=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9d=new A.F(!0,B.aQ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9g=new A.F(!0,D.oI,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9C=new A.F(!0,D.e0,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8h=new A.rL(!0,B.Sz,null,null,null,null,B.du,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQE=new A.F(!0,D.e0,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9M=new A.F(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fab=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faE=new A.F(!0,D.iI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbr=new A.F(!0,D.iI,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbP=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbU=new A.F(!0,K.iG,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc2=new A.F(!0,D.iI,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd7=new A.F(!0,D.iI,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd9=new A.F(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fda=new A.F(!0,D.e0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdI=new A.F(!0,D.iI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdT=new A.F(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fee=new A.F(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feB=new A.F(!0,B.bN,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feF=new A.F(!0,B.bx,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feJ=new A.F(!0,B.c,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff0=new A.F(!0,D.F6,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff9=new A.F(!0,B.b_,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg0=new A.F(!0,D.e0,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new A.F(!0,B.cM,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgm=new A.F(!0,D.nK,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.JE=new A.F(!0,D.e0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new A.F(!0,B.bN,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh4=new A.F(!0,B.b_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhE=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi0=new A.F(!0,D.iI,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fit=new A.F(!0,D.iI,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiz=new A.F(!0,B.ak,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiH=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRF=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiK=new A.F(!0,D.iI,null,null,null,null,19,B.u,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8L=new A.F(!0,B.ak,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRS=new A.F(!0,D.oI,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkn=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkM=new A.F(!0,K.iG,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkU=new A.F(!0,K.iG,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fln=new A.y("Time:",null,B.he,null,null,null,null,null,null,null,null,null)
D.flI=new A.y("\ud83c\udfae",null,M.a8C,null,null,null,null,null,null,null,null,null)
D.flJ=new A.y("Themes",null,B.pl,null,null,null,null,null,null,null,null,null)
D.fmb=new A.y("\ud83c\udfb2",null,B.v7,null,null,null,null,null,null,null,null,null)
D.fmg=new A.y("Delete this game?",null,B.iY,null,null,null,null,null,null,null,null,null)
D.fmm=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fbx=new A.F(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmM=new A.y("Debt receipt",null,D.fbx,null,B.L,null,null,null,null,null,null,null)
D.aRB=new A.F(!0,B.ak,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn3=new A.y("Person who owes",null,D.aRB,null,null,null,null,null,null,null,null,null)
D.fo0=new A.y("Notes",null,B.a8p,null,null,null,null,null,null,null,null,null)
D.foq=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fas=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fou=new A.y("Share",null,D.fas,null,null,null,null,null,null,null,null,null)
D.fpq=new A.y("Move your family trees",null,D.aRF,null,null,null,null,null,null,null,null,null)
D.fq2=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fqE=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fr1=new A.y("SAVE",null,D.JE,null,null,null,null,null,null,null,null,null)
D.frE=new A.y("The round button is the right answer.",null,S.DL,null,null,null,null,null,null,null,null,null)
D.frZ=new A.y("Remove this book?",null,B.fJ,null,null,null,null,null,null,null,null,null)
D.fh1=new A.F(!0,D.e0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.aw1,null,null,null)
D.fsu=new A.y("Fireside Stories",null,D.fh1,null,null,null,null,null,null,null,null,null)
D.aS6=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fta=new A.y("What should the AI do?",null,B.df,null,null,null,null,null,null,null,null,null)
D.fux=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new A.y("LET US LEARN FROM THESE",null,O.rW,null,null,null,null,null,null,null,null,null)
D.fbN=new A.F(!0,D.iI,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvE=new A.y("Family Knowledge Test",null,D.fbN,null,null,null,null,null,null,null,null,null)
D.fvG=new A.y("Ribbon bookmark",null,B.jg,null,null,null,null,null,null,null,null,null)
D.fis=new A.F(!0,B.b_,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw8=new A.y("NGMY.ORG",null,D.fis,null,B.L,null,null,null,null,null,null,null)
D.fxp=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.feU=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy9=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.feU,null,B.L,null,null,null,null,null,null,null)
D.fzm=new A.y("Delete",null,B.TT,null,null,null,null,null,null,null,null,null)
D.fzn=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fzt=new A.y("Thumbnail",null,B.pl,null,null,null,null,null,null,null,null,null)
D.fA4=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fa7=new A.F(!0,D.oI,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAl=new A.y("CERTIFICATE",null,D.fa7,null,null,null,null,null,null,null,null,null)
D.fAv=new A.y("Your photos",null,B.pl,null,null,null,null,null,null,null,null,null)
D.fAK=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fB6=new A.y("\u2b50 stars",null,B.U4,null,null,null,null,null,null,null,null,null)
D.fBj=new A.y("Design your cover",null,Y.rU,null,null,null,null,null,null,null,null,null)
D.fBp=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fBs=new A.y("PICTURE",null,L.v5,null,null,null,null,null,null,null,null,null)
D.fBu=new A.y("\ud83c\udfaf",null,D.a8H,null,null,null,null,null,null,null,null,null)
D.fBP=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fBR=new A.y("You can undo it right after.",null,S.DL,null,null,null,null,null,null,null,null,null)
D.fCo=new A.y("Print",null,B.v2,null,null,null,null,null,null,null,null,null)
D.fCN=new A.y("Amount owed",null,D.aRB,null,null,null,null,null,null,null,null,null)
D.fD1=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fDC=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fDF=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fE6=new A.y("Debtor signature",null,B.a8p,null,null,null,null,null,null,null,null,null)
D.fEf=new A.y("Change icon",null,F.aQS,null,null,null,null,null,null,null,null,null)
D.fF1=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,O.rW,null,null,null,null,null,null,null,null,null)
D.fFt=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fFz=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.a8G,null,null,null,null,null,null,null,null,null)
D.fFX=new A.y("Download",null,B.v2,null,null,null,null,null,null,null,null,null)
D.fFY=new A.y("The person who planted this tree has not made a game yet.",null,B.v6,null,null,null,null,null,null,null,null,null)
D.fG1=new A.y("Change",null,B.pl,null,null,null,null,null,null,null,null,null)
D.fGR=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fGU=new A.y("WHAT SHOULD IT CHANGE?",null,L.v5,null,null,null,null,null,null,null,null,null)
D.fHs=new A.y("COLOUR",null,L.v5,null,null,null,null,null,null,null,null,null)
D.fHG=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fHJ=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fIK=new A.y("Create Family Tree",null,B.eY,null,null,null,null,null,null,null,null,null)
D.f5E=new A.F(!0,F.k2,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.y("Write the first page myself",null,D.f5E,null,null,null,null,null,null,null,null,null)
D.fJw=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fJC=new A.y("Create Project",null,F.aRk,null,null,null,null,null,null,null,null,null)
D.fOG=new E.q(0,48,-10)
D.fR8=new E.q(22,44,4)
D.fRc=new E.q(2400,0,2400)
D.fRd=new E.q(2400,0,-2400)
D.fSz=new E.q(430,0,250)
D.fSA=new E.q(430,140,250)
D.fSB=new E.q(430,150,250)
D.fSC=new E.q(430,232,250)
D.h_y=new E.q(2.5,2.5,2.5)
D.h12=new E.q(-210,20,80)
D.h14=new E.q(-2400,0,2400)
D.h15=new E.q(-2400,0,-2400)
D.h5F=new C.abn(1,"header")
D.a9J=new C.abn(2,"projects")
D.h5G=new C.abn(3,"cashier")
D.a9K=new C.abn(4,"familyTree")
D.hin=new C.cyF(0,"start")
D.hio=new C.cyG(0,"start")
D.h63=new C.Yo(null)
D.h72=new C.YQ(null)
D.dsT=new A.bt(B.hX,[],A.av("bt<n,FN>"))
D.dbr=w([],x.W)
D.dbs=w([],x.M)
D.h7z=new C.beg(D.dsT,D.dbr,D.dbs,0,0,null,null)
D.aW4=new C.ZG(0,"intro")
D.aW5=new C.ZG(1,"countdown")
D.a9Y=new C.ZG(2,"ask")
D.V7=new C.ZG(3,"reveal")
D.aW6=new C.ZG(4,"end")
D.haQ=new C.a_e(null)
D.aWy=new C.a0v(0,"greet")
D.aWz=new C.a0v(1,"teach")
D.Vu=new C.a0v(2,"ask")
D.aWA=new C.a0v(3,"feedback")
D.aah=new C.a0v(4,"end")
D.aat=new C.aJy(0,"projects")
D.aWY=new C.aJy(1,"cashier")
D.hg3=new C.aJy(2,"familyTree")})()};
(a=>{a["XwQm82ntcrMalrnVNIfqZR+gTrA="]=a.current})($__dart_deferred_initializers__);