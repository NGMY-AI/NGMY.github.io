((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,A3,A4,A5,A6,T,U,A7,A8,M,A9,H,Aa,Ab,V,W,X,Ac,Ad,Y,Ae,Af,Ag,Z,Ah,Ai,K,Aj,A_,A0,O,P,L,Q,C={
bCO(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCO=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vm(null,""),$async$bCO)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n7(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cS(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qS(t,a1,B.hD,"book",E.Fk),$async$bCO)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Qh(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KY(l)?y.l:y.i)
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a2e(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCO,v)},
agN(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agN=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vm(null,""),$async$agN)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n7(b6)
s=x.S
r=A.db(c1,0,A.dI(4,"count",s),A.T(c1).c)
q=F.a21(new A.M(r,new C.fBA(),r.$ti.k("M<ak.E,m>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fBz(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agN)
case 6:l=c5
k=F.Qh(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.ao2(s,D.dqe,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.V("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agN)
case 10:l=c5
k=l==null?null:F.Qh(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.u(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.u(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.l1(a5,a2.k("l1<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a4(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.t(a4,i))continue
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
p=A.cD(new A.bc(h,s),new C.fBB(),s.k("J.E"),p)
p=F.a21(A.ph(p,3,A.a3(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a2e(s,b9),$async$agN)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.ao2(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agN,v)},
hqo(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fKN(e,f),d,null,!0,!0,x.g2)},
ao2:function ao2(d,e,f){this.a=d
this.b=e
this.c=f},
fBA:function fBA(){},
fBz:function fBz(d){this.a=d},
fBB:function fBB(){},
fKN:function fKN(d,e){this.a=d
this.b=e},
bAE(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAE=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b6(b1,new C.fqa())){u=null
w=1
break}t=B.d.d6(b1,new C.fqb())
s=$.W()
r=new A.r1()
q=A.Dl(r,D.aN0)
p=A.N()
p.r=B.c.gp(0)
q.b0(D.aN0,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bS
o.e=B.fG
n=new C.fqg(t)
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
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aR(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aR(a3,o)}w=4
return A.b(r.pE().zl(520,160),$async$bAE)
case 4:w=3
return A.b(b3.hv(B.h0),$async$bAE)
case 3:b0=b3
u=b0==null?null:J.eX(B.dD.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAE,v)},
fzg(d){return C.i3R(d)},
i3R(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fzg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bgd()
n=d.x!=null&&d.z1(null).length===0
if(d.x!=null)t=n?D.zs:D.Im
else t=d.gTx()?D.Im:D.aHZ
w=3
return A.b(C.bAE(d.ax),$async$fzg)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amM(s)
r=A.a4c(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aHZ}else{p.c=C.wO(q,!0)
p.b=n?D.zs:D.Im}r.a2O(A.fV_(new C.fzi(p,d,new C.fzj(),t,n,o),null,D.bwT,B.wn))
u=r.kc(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzg,v)},
fFU(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fFU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fzg(d),$async$fFU)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.GC(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFU,v)},
fqa:function fqa(){},
fqb:function fqb(){},
fqg:function fqg(d){this.a=d},
fzj:function fzj(){},
fzi:function fzi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzh:function fzh(){},
fLe(d,e){var w=0,v=A.j(x.H)
var $async$fLe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fLi(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fLe)
case 2:return A.h(null,v)}})
return A.i($async$fLe,v)},
bDg(d,e,f,g){return C.ibl(d,e,f,g)},
ibl(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bDg=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cI.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.J(x.q).f.S(D.f0I)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fLa(g,r,f),d,null,!0,!0,x.H),$async$bDg)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bDg,v)},
fLj(d,e){var w=0,v=A.j(x.H)
var $async$fLj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fLm(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fLj)
case 2:return A.h(null,v)}})
return A.i($async$fLj,v)},
aYn:function aYn(d,e){this.c=d
this.a=e},
c28:function c28(){},
bav:function bav(d,e){this.b=d
this.a=e},
fLi:function fLi(d,e){this.a=d
this.b=e},
fLf:function fLf(d){this.a=d},
fLg:function fLg(d,e,f){this.a=d
this.b=e
this.c=f},
fLh:function fLh(d,e){this.a=d
this.b=e},
fLa:function fLa(d,e,f){this.a=d
this.b=e
this.c=f},
fL8:function fL8(d){this.a=d},
fL9:function fL9(d,e,f){this.a=d
this.b=e
this.c=f},
fLm:function fLm(d,e){this.a=d
this.b=e},
fLk:function fLk(d){this.a=d},
fLl:function fLl(d,e,f){this.a=d
this.b=e
this.c=f},
fu2(d,e){var w=0,v=A.j(x.y),u,t
var $async$fu2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1N(d),$async$fu2)
case 3:t=g
J.nt(t,new C.fu3(e))
u=A.ahr(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fu2,v)},
fu3:function fu3(d){this.a=d},
aoe:function aoe(d,e,f){this.c=d
this.d=e
this.a=f},
aCv:function aCv(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dGs:function dGs(d,e){this.a=d
this.b=e},
dGd:function dGd(d,e){this.a=d
this.b=e},
dGg:function dGg(d,e,f){this.a=d
this.b=e
this.c=f},
dGf:function dGf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGe:function dGe(d,e){this.a=d
this.b=e},
dGh:function dGh(d,e){this.a=d
this.b=e},
dGb:function dGb(){},
dGc:function dGc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dGa:function dGa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFW:function dFW(d){this.a=d},
dFX:function dFX(d,e,f){this.a=d
this.b=e
this.c=f},
dFY:function dFY(d,e){this.a=d
this.b=e},
dFV:function dFV(d){this.a=d},
dG2:function dG2(d,e){this.a=d
this.b=e},
dFU:function dFU(d){this.a=d},
dG3:function dG3(d,e,f){this.a=d
this.b=e
this.c=f},
dG4:function dG4(d,e,f){this.a=d
this.b=e
this.c=f},
dFT:function dFT(d,e){this.a=d
this.b=e},
dG5:function dG5(d,e,f){this.a=d
this.b=e
this.c=f},
dFS:function dFS(d,e){this.a=d
this.b=e},
dG6:function dG6(d,e){this.a=d
this.b=e},
dFR:function dFR(d){this.a=d},
dG7:function dG7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFP:function dFP(){},
dFJ:function dFJ(d){this.a=d},
dFK:function dFK(d){this.a=d},
dFQ:function dFQ(d,e){this.a=d
this.b=e},
dG8:function dG8(d,e){this.a=d
this.b=e},
dFO:function dFO(d){this.a=d},
dG9:function dG9(d){this.a=d},
dFN:function dFN(){},
dFZ:function dFZ(d,e){this.a=d
this.b=e},
dFM:function dFM(d){this.a=d},
dG_:function dG_(d,e,f){this.a=d
this.b=e
this.c=f},
dFL:function dFL(d,e){this.a=d
this.b=e},
dFI:function dFI(d,e){this.a=d
this.b=e},
dG0:function dG0(d){this.a=d},
dG1:function dG1(d,e,f){this.a=d
this.b=e
this.c=f},
dGv:function dGv(){},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGt:function dGt(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGq:function dGq(d){this.a=d},
dGi:function dGi(d,e,f){this.a=d
this.b=e
this.c=f},
dGj:function dGj(d,e,f){this.a=d
this.b=e
this.c=f},
dGk:function dGk(d,e,f){this.a=d
this.b=e
this.c=f},
dGl:function dGl(d,e,f){this.a=d
this.b=e
this.c=f},
dGm:function dGm(d,e,f){this.a=d
this.b=e
this.c=f},
dGn:function dGn(d,e,f){this.a=d
this.b=e
this.c=f},
dGo:function dGo(d,e,f){this.a=d
this.b=e
this.c=f},
dGx:function dGx(){},
dGy:function dGy(){},
dGz:function dGz(){},
dGA:function dGA(d){this.a=d},
dGr:function dGr(d,e){this.a=d
this.b=e},
hmz(d){return B.d.dM(D.a2b,new C.fuH(d),new C.fuI())},
uh:function uh(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fuH:function fuH(d){this.a=d},
fuI:function fuI(){},
aku:function aku(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aU8:function aU8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Sz:function Sz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be7:function be7(){this.d=$
this.c=this.a=null},
d6g:function d6g(d,e){this.a=d
this.b=e},
d6e:function d6e(d,e){this.a=d
this.b=e},
d6f:function d6f(){},
d6h:function d6h(d,e){this.a=d
this.b=e},
h7k(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.ne(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KK(d,e){return C.i2u(d,e)},
i2u(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$KK)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.S.aK(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.da(p,x.f)
o=A.cD(o,new C.fwV(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fwW(),n),n.k("J.E"))
B.d.aZ(o,new C.fwX())
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
return A.i($async$KK,v)},
AV(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$AV)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fJT(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AV,v)},
aQh(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQh=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KK(d,e),$async$aQh)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.fS2(f))
if(s===-1)t.cj(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AV(d,e,u),$async$aQh)
case 3:return A.h(null,v)}})
return A.i($async$aQh,v)},
bB5(d,e,f){var w=0,v=A.j(x.H),u
var $async$bB5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KK(d,e),$async$bB5)
case 2:u=h
J.nt(u,new C.ftV(f))
w=3
return A.b(C.AV(d,e,u),$async$bB5)
case 3:return A.h(null,v)}})
return A.i($async$bB5,v)},
bBk(d,e){return C.i2t(d,e)},
i2t(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bBk=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bBk)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.MX
w=1
break}p=B.S.aK(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.CC.ai(0,o.h(0,"foil")))j=A.cQ(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3O,o.h(0,"position"))?A.cQ(o.h(0,"position")):"middle"
g=B.d.t(D.a3b,o.h(0,"frame"))?A.cQ(o.h(0,"frame")):"double"
f=B.d.t(D.a36,o.h(0,"texture"))?A.cQ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cV1,o.h(0,"header"))?A.cQ(o.h(0,"header")):"classic"
o=new C.Hy(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.MX
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.MX
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBk,v)},
Rm(d,e,f){return C.iaS(d,e,f)},
iaS(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rm=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Rm)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ah(),null)),$async$Rm)
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
return A.i($async$Rm,v)},
QQ(d,e){return C.i2v(d,e)},
i2v(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$QQ)
case 7:r=g
q=r.tc("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KK(d,e),$async$QQ)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.ls(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QQ)
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
return A.i($async$QQ,v)},
ag7(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ag7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QQ(d,e),$async$ag7)
case 3:s=g
r=J.a4(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.ay(),$async$ag7)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ag7)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ag7,v)},
a2r(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2r=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QQ(d,e),$async$a2r)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.ay(),$async$a2r)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2r)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2r)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2r)
case 6:return A.h(null,v)}})
return A.i($async$a2r,v)},
ne:function ne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwV:function fwV(){},
fwW:function fwW(){},
fwX:function fwX(){},
fJT:function fJT(){},
fS2:function fS2(d){this.a=d},
ftV:function ftV(d){this.a=d},
Hy:function Hy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bNO:function bNO(d){this.a=d},
iba(d,e,f,g,h,i,j){return A.a6(d,!1).cm(A.e9(new C.fKr(j,i,f,e,h,g),!0,null,x.H))},
QM(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QM=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QQ(h,g),$async$QM)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.J(x.q).f.S(D.aP8)
u=!1
w=1
break}w=4
return A.b(C.hqo(d,f,e),$async$QM)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ag7(h,g),$async$QM)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.ne(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AV(h,r,p),$async$QM)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rm(h,r,new C.Hy("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QM)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QM,v)},
fKr:function fKr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zb:function Zb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azz:function azz(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d6W:function d6W(d){this.a=d},
d6V:function d6V(d,e){this.a=d
this.b=e},
d6K:function d6K(d,e){this.a=d
this.b=e},
d6H:function d6H(d,e){this.a=d
this.b=e},
d6i:function d6i(d){this.a=d},
d6j:function d6j(d,e){this.a=d
this.b=e},
d6L:function d6L(d){this.a=d},
d6r:function d6r(d){this.a=d},
d6p:function d6p(d){this.a=d},
d6q:function d6q(d){this.a=d},
d6s:function d6s(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6J:function d6J(){},
d6n:function d6n(d){this.a=d},
d6o:function d6o(d,e){this.a=d
this.b=e},
d6t:function d6t(d){this.a=d},
d6u:function d6u(d,e){this.a=d
this.b=e},
d6U:function d6U(d){this.a=d},
d6T:function d6T(d,e){this.a=d
this.b=e},
d6S:function d6S(d){this.a=d},
d6E:function d6E(d){this.a=d},
d6D:function d6D(d){this.a=d},
d6F:function d6F(d){this.a=d},
d6k:function d6k(d,e){this.a=d
this.b=e},
d6G:function d6G(d,e){this.a=d
this.b=e},
d6x:function d6x(d){this.a=d},
d6y:function d6y(d){this.a=d},
d6w:function d6w(){},
d6z:function d6z(d){this.a=d},
d6A:function d6A(d){this.a=d},
d6B:function d6B(d,e){this.a=d
this.b=e},
d6C:function d6C(d,e,f){this.a=d
this.b=e
this.c=f},
d6v:function d6v(d,e){this.a=d
this.b=e},
d6N:function d6N(d){this.a=d},
d6M:function d6M(){},
d6O:function d6O(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6Q:function d6Q(d){this.a=d},
d6R:function d6R(d,e){this.a=d
this.b=e},
d6l:function d6l(d){this.a=d},
d6m:function d6m(d){this.a=d},
Zf:function Zf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bes:function bes(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d8G:function d8G(d){this.a=d},
d8H:function d8H(d){this.a=d},
d8F:function d8F(d){this.a=d},
d8I:function d8I(d){this.a=d},
d8E:function d8E(d){this.a=d},
d8J:function d8J(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8K:function d8K(d,e){this.a=d
this.b=e},
d8C:function d8C(d,e){this.a=d
this.b=e},
d8L:function d8L(d,e){this.a=d
this.b=e},
Zd:function Zd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeA:function aeA(d,e,f){this.a=d
this.b=e
this.c=f},
azA:function azA(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d7a:function d7a(d,e){this.a=d
this.b=e},
d79:function d79(d,e){this.a=d
this.b=e},
d7e:function d7e(d){this.a=d},
d7d:function d7d(d,e){this.a=d
this.b=e},
d7b:function d7b(d){this.a=d},
d7c:function d7c(d){this.a=d},
d7f:function d7f(d){this.a=d},
d7g:function d7g(d){this.a=d},
d78:function d78(d,e){this.a=d
this.b=e},
d77:function d77(d,e){this.a=d
this.b=e},
JR:function JR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yu:function Yu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cFL:function cFL(d){this.a=d},
cFM:function cFM(){},
cFN:function cFN(d){this.a=d},
bbI:function bbI(d,e,f){this.b=d
this.c=e
this.a=f},
bbz:function bbz(d,e){this.b=d
this.a=e},
ui:function ui(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YM:function YM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbG:function bbG(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cZc:function cZc(d,e,f){this.a=d
this.b=e
this.c=f},
cZb:function cZb(d,e){this.a=d
this.b=e},
cZB:function cZB(d){this.a=d},
cZo:function cZo(){},
cZC:function cZC(d){this.a=d},
cZn:function cZn(){},
cZD:function cZD(d,e){this.a=d
this.b=e},
cZm:function cZm(d,e){this.a=d
this.b=e},
cZE:function cZE(d,e){this.a=d
this.b=e},
cZl:function cZl(d,e){this.a=d
this.b=e},
cZF:function cZF(d){this.a=d},
cZk:function cZk(){},
cZG:function cZG(d,e){this.a=d
this.b=e},
cZj:function cZj(d,e){this.a=d
this.b=e},
cZH:function cZH(d){this.a=d},
cZw:function cZw(d,e){this.a=d
this.b=e},
cZI:function cZI(d){this.a=d},
cZJ:function cZJ(d){this.a=d},
cZL:function cZL(d){this.a=d},
cZM:function cZM(d){this.a=d},
cZv:function cZv(d,e){this.a=d
this.b=e},
cZN:function cZN(d,e){this.a=d
this.b=e},
aGz:function aGz(d){this.a=d},
bgW:function bgW(d){this.a=d},
b9U:function b9U(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i1s(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahE(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fuL(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a_<1>"),q=q.k("cO<1,m>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.y1)m.push(l===D.a_f?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cG(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cG(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.k2(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k2(h,a2,a2)-A.k2(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cO(new A.a_(a4,new C.fuJ(u,f),p),new C.fuK(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i1t(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahE(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fuQ(v,e)
q=new C.fuO(v)
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
if(d!=null&&v.ai(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ai(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.dd(new A.bc(p,d),d.k("J.E"))
n=A.C(d,A.a3(d).k("co.E"))
B.d.fq(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f2(l,new C.fuP(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hO6(d,e,f,g){var w,v,u=C.i1u(d,e)
if(u<=0||f.length<=u)return new A.aea(!1,D.Co,f)
if(g.t(0,e.a))return new A.aea(!1,D.Co,f)
w=A.T(f).c
v=A.db(f,0,A.dI(u,"count",x.S),w).dJ(0)
return new A.aea(!0,A.db(f,u,null,w).dJ(0),v)},
hO7(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahE(d3),d2=d1.length
if(d2===0)return D.h2L
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.c9(0,t.a,new C.d7n(t))}s=new C.d7E(v)
d2=x.h
r=A.U(w,d2)
q=new C.d7w(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d7v(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ce(l.c9(0,k,new C.d7o()),o)}h=new C.d7u(s)
g=new C.d7t(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d7p(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
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
a9=new C.d7C(new C.d7y(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gakk(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ev([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.rh(J.dJ(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.cc)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d7m(a2,new C.d7D(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cu<1>")
d2=A.C(new A.cu(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.FK(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.JZ(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bM(0,new C.d7q(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f2(j,new C.d7r(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d7s())
c6.push(new C.aIF(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bec(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hm3(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hgo(d,e,f,g,h,i,j,k,l,m,n){return new C.ZP(k,f,j,e,l,n,m,d,g,h,i,null)},
aBw(d,e,f,g,h,i,j){return new C.bhS(i,d,e,f,j,h,g,null)},
apm:function apm(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aD5:function aD5(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dUr:function dUr(d){this.a=d},
dUq:function dUq(d){this.a=d},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUv:function dUv(d){this.a=d},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUs:function dUs(d){this.a=d},
dUx:function dUx(d){this.a=d},
dUw:function dUw(d,e){this.a=d
this.b=e},
apg:function apg(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aD2:function aD2(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dTS:function dTS(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dTR:function dTR(d){this.a=d},
dTT:function dTT(d,e){this.a=d
this.b=e},
dTN:function dTN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTl:function dTl(d){this.a=d},
dTm:function dTm(d,e){this.a=d
this.b=e},
dTA:function dTA(d){this.a=d},
dTy:function dTy(d){this.a=d},
dTz:function dTz(d,e){this.a=d
this.b=e},
dTB:function dTB(d){this.a=d},
dTC:function dTC(d,e){this.a=d
this.b=e},
dTM:function dTM(d,e){this.a=d
this.b=e},
dTK:function dTK(d,e){this.a=d
this.b=e},
dTJ:function dTJ(d,e){this.a=d
this.b=e},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTE:function dTE(d){this.a=d},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTD:function dTD(d){this.a=d},
dTH:function dTH(d){this.a=d},
dTI:function dTI(d){this.a=d},
dTL:function dTL(d,e){this.a=d
this.b=e},
dT9:function dT9(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e){this.a=d
this.b=e},
dTV:function dTV(d,e,f){this.a=d
this.b=e
this.c=f},
dTP:function dTP(d,e,f){this.a=d
this.b=e
this.c=f},
dTO:function dTO(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTc:function dTc(d){this.a=d},
dTd:function dTd(){},
dTe:function dTe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTg:function dTg(d){this.a=d},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTf:function dTf(d){this.a=d},
dTU:function dTU(d){this.a=d},
dTv:function dTv(){},
dTw:function dTw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTu:function dTu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTq:function dTq(d,e,f){this.a=d
this.b=e
this.c=f},
dTp:function dTp(d,e,f){this.a=d
this.b=e
this.c=f},
dTn:function dTn(d,e){this.a=d
this.b=e},
dTr:function dTr(d){this.a=d},
dTs:function dTs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTo:function dTo(d,e){this.a=d
this.b=e},
dTt:function dTt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTx:function dTx(d,e){this.a=d
this.b=e},
dU1:function dU1(){},
dU2:function dU2(d,e){this.a=d
this.b=e},
dU3:function dU3(d){this.a=d},
dU4:function dU4(d,e){this.a=d
this.b=e},
dTY:function dTY(d){this.a=d},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTZ:function dTZ(d,e){this.a=d
this.b=e},
dU_:function dU_(d,e){this.a=d
this.b=e},
dU0:function dU0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dU5:function dU5(d){this.a=d},
dTX:function dTX(d){this.a=d},
dTk:function dTk(d){this.a=d},
bea:function bea(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d7k:function d7k(d){this.a=d},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7l:function d7l(d){this.a=d},
d7i:function d7i(d,e){this.a=d
this.b=e},
fuL:function fuL(d,e){this.a=d
this.b=e},
fuM:function fuM(d){this.a=d},
fuN:function fuN(){},
fuJ:function fuJ(d,e){this.a=d
this.b=e},
fuK:function fuK(){},
fuQ:function fuQ(d,e){this.a=d
this.b=e},
fuR:function fuR(d){this.a=d},
fuS:function fuS(){},
fuO:function fuO(d){this.a=d},
fuP:function fuP(d,e){this.a=d
this.b=e},
JZ:function JZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FK:function FK(d,e){this.a=d
this.b=e},
bec:function bec(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d7n:function d7n(d){this.a=d},
d7E:function d7E(d){this.a=d},
d7w:function d7w(d){this.a=d},
d7x:function d7x(){},
d7v:function d7v(d){this.a=d},
d7o:function d7o(){},
d7u:function d7u(d){this.a=d},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7p:function d7p(d){this.a=d},
d7y:function d7y(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d7z:function d7z(d){this.a=d},
d7A:function d7A(d){this.a=d},
d7B:function d7B(){},
d7C:function d7C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d7D:function d7D(){},
d7m:function d7m(d,e,f,g,h,i,j,k,l,m){var _=this
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
d7q:function d7q(d,e){this.a=d
this.b=e},
d7r:function d7r(d){this.a=d},
d7s:function d7s(){},
aIF:function aIF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bed:function bed(d,e){this.b=d
this.a=e},
d7F:function d7F(){},
d7G:function d7G(d){this.a=d},
d7H:function d7H(d){this.a=d},
d7I:function d7I(){},
bhT:function bhT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdh:function bdh(d,e){this.b=d
this.a=e},
bvC:function bvC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fc6:function fc6(d){this.a=d},
ble:function ble(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eNZ:function eNZ(d){this.a=d},
eNY:function eNY(d,e){this.a=d
this.b=e},
ZP:function ZP(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBu:function aBu(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dny:function dny(d,e){this.a=d
this.b=e},
dnx:function dnx(d){this.a=d},
dnv:function dnv(d){this.a=d},
dnw:function dnw(d){this.a=d},
dnH:function dnH(d){this.a=d},
dnI:function dnI(d){this.a=d},
dnG:function dnG(d,e){this.a=d
this.b=e},
dnJ:function dnJ(){},
dnM:function dnM(d){this.a=d},
dnF:function dnF(d,e){this.a=d
this.b=e},
dnL:function dnL(){},
dnN:function dnN(d){this.a=d},
dnE:function dnE(d,e){this.a=d
this.b=e},
dnO:function dnO(d){this.a=d},
dnD:function dnD(d){this.a=d},
dnP:function dnP(d){this.a=d},
dnC:function dnC(d){this.a=d},
dnQ:function dnQ(d){this.a=d},
dnB:function dnB(d){this.a=d},
dnR:function dnR(d){this.a=d},
dnA:function dnA(d){this.a=d},
dnS:function dnS(d){this.a=d},
dnz:function dnz(d,e){this.a=d
this.b=e},
dnK:function dnK(d){this.a=d},
ad0:function ad0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhS:function bhS(d,e,f,g,h,i,j,k){var _=this
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
bhR:function bhR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnT:function dnT(d){this.a=d},
dnU:function dnU(d,e){this.a=d
this.b=e},
aBv:function aBv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHH:function aHH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ad1:function ad1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
do2:function do2(d){this.a=d},
JN:function JN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hbg(d){var w=d.U,v=x.N
return w.j9(w,new C.c8G(),v,v)},
hFD(d){var w=d.bz
if(w>=0)return w
return 5},
hbi(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hbg(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hbh(d,e){var w=C.hbi(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hFE(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hbg(d),w,w)
u=C.hbi(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bR(A.dE(30,0,0,0,0,0).a).a6().ac())
d.U=v},
aZP(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZP=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lh(t,B.I9),$async$aZP)
case 3:if(l){u=!0
w=1
break}u=A.kW(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.I9,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZP,v)},
c8G:function c8G(){},
hFB(){var w,v=$.py(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.h2(u)},
Is(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Is=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Is)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Is)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.q(r,"codes")
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
return A.i($async$Is,v)},
a7_(d){return C.hFC(d)},
hFC(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a7_)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a7_)
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
return A.i($async$a7_,v)},
c8F(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c8F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Is(),$async$c8F)
case 3:t=m.jz(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
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
return A.i($async$c8F,v)},
Nl(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Nl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c8F(d),$async$Nl)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Is(),$async$Nl)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dQ(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,t,o)
w=9
return A.b(C.a7_(s),$async$Nl)
case 9:case 8:u=t
w=1
break
case 5:n=C.hFB()
w=10
return A.b(C.Is(),$async$Nl)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a7_(s),$async$Nl)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Nl,v)},
aZO(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Is(),$async$aZO)
case 3:t=f
for(s=J.dl(t),r=s.gdL(t),r=r.dJ(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7_(t),$async$aZO)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZO,v)},
a70(d,e,f){var w=0,v=A.j(x.H),u
var $async$a70=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apl(d,e),$async$a70)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Nl(d),$async$a70)
case 7:w=4
break
case 5:w=8
return A.b(C.aZO(d),$async$a70)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a70,v)},
apf(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apf=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apl(f,e),$async$apf)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$apf)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Is(),$async$apf)
case 7:q=o.q(k,t)
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
return A.i($async$apf,v)},
aZN(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZN)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Is(),$async$aZN)
case 4:t=q.q(g,r)
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
return A.i($async$aZN,v)},
hFF(){var w,v=$.py(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.h2(u)},
api(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$api=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$api)
case 3:if(!g){u=null
w=1
break}t=C.hFF()
w=4
return A.b(A.UY(),$async$api)
case 4:s=g
r=B.dK.aL(B.S.ao(d.eS(),null))
r=B.cR.gcw().aL(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a71(s),$async$api)
case 5:p=e?999:2
u=new A.a00("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$api,v)},
aph(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aph=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UY(),$async$aph)
case 3:p=a0
o=J.a4(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a4(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aZN(J.k(l==null?"":l),j),$async$aph)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cB(0,B.cI.aL(t))
s=C.hbj(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.u(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dQ(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=5
return A.b(A.a71(p),$async$aph)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aph,v)},
hbj(d){var w,v,u,t,s=null
try{w=B.S.aK(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hFH(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fW3(d){var w=0,v=A.j(x.m),u,t,s
var $async$fW3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aph(t[1])
w=1
break}u=null
w=1
break}u=C.hbj(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fW3,v)},
hFH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cD(u,new C.c8I(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c8J(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.U(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jz(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.da(l,u)
n=A.cD(n,new C.c8K(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c8L(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.apj(h,w,s,r,q)},
apl(d,e){var w=0,v=A.j(x.y),u,t
var $async$apl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Nc(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AJ(d),$async$apl)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apl,v)},
c8R(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c8R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AJ(d),$async$c8R)
case 3:t=s.b6(f,new C.c8S(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.c8T())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8R,v)},
UZ(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UZ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apl(e,d),$async$UZ)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Nl(e),$async$UZ)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AJ(e),$async$UZ)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.c8P(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gam(r)){u=null
w=1
break}t=t.dz(r,new C.c8Q(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KK(e,o),$async$UZ)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.apj(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UZ,v)},
aZS(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZS=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UZ(d,e,f,g),$async$aZS)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gs(A.JV(q.eS(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZS,v)},
aZR(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZR=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UZ(d,e,f,g),$async$aZR)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.api(r,f),$async$aZR)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFI(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZR,v)},
V_(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$V_=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fW3(a0),$async$V_)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apf(g.a,d,e,f,s,r),$async$V_)
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
return A.b(C.bAW(e,j),$async$V_)
case 12:case 11:w=13
return A.b(C.ahp(e,j,s),$async$V_)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.AV(e,i,h),$async$V_)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.boP(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$V_,v)},
apj:function apj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8N:function c8N(){},
c8O:function c8O(){},
c8M:function c8M(){},
c8I:function c8I(){},
c8J:function c8J(){},
c8K:function c8K(){},
c8L:function c8L(){},
c8S:function c8S(){},
c8T:function c8T(){},
c8P:function c8P(d){this.a=d},
c8Q:function c8Q(d){this.a=d},
h3u(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hE(d,new C.apk(w,e,g,i,f,h,null),!0,null,x.H)},
d7h(d,e,f,g,h,i,j,k){return new C.be9(i,e,k,j,g,f,h,d,null)},
apk:function apk(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aD4:function aD4(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dUe:function dUe(d){this.a=d},
dUf:function dUf(d,e,f){this.a=d
this.b=e
this.c=f},
dUj:function dUj(d,e){this.a=d
this.b=e},
dUk:function dUk(d){this.a=d},
dUb:function dUb(d){this.a=d},
dUc:function dUc(d,e){this.a=d
this.b=e},
dUd:function dUd(d,e){this.a=d
this.b=e},
dUi:function dUi(d){this.a=d},
dUh:function dUh(d,e){this.a=d
this.b=e},
dUg:function dUg(){},
dUm:function dUm(d){this.a=d},
dUn:function dUn(d,e){this.a=d
this.b=e},
dUl:function dUl(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
beb:function beb(d,e,f){this.d=d
this.e=e
this.a=f},
ach:function ach(d,e,f){this.c=d
this.d=e
this.a=f},
be9:function be9(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bee:function bee(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_9:function a_9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD3:function aD3(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dU6:function dU6(d,e){this.a=d
this.b=e},
dU7:function dU7(d){this.a=d},
dU8:function dU8(d){this.a=d},
dU9:function dU9(d){this.a=d},
dUa:function dUa(d){this.a=d},
a_a:function a_a(d){this.a=d},
bjl:function bjl(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dUo:function dUo(d,e){this.a=d
this.b=e},
aYm(d,e){return new C.aYl(d,e,null)},
aYl:function aYl(d,e,f){this.c=d
this.d=e
this.a=f},
i3W(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
ibk(d){return A.bS(B.K,null,new C.fKU(new C.tR(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hdb(d,e){return new C.ase(e,d,null)},
aPZ(d,e,f,g,h,i,j){var w=C.i3W(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a64(w,!0,null),null),B.aq)
return I.aPl(e,B.bV,f,g,h,i,j)},
lB:function lB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a64:function a64(d,e,f){this.c=d
this.d=e
this.a=f},
bj1:function bj1(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b4$=e
_.c=_.a=null},
dFA:function dFA(d){this.a=d},
dFB:function dFB(){},
dFC:function dFC(d,e){this.a=d
this.b=e},
bj0:function bj0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fKU:function fKU(d){this.a=d},
fKT:function fKT(d,e){this.a=d
this.b=e},
fKS:function fKS(d,e){this.a=d
this.b=e},
fKR:function fKR(d,e){this.a=d
this.b=e},
ase:function ase(d,e,f){this.c=d
this.d=e
this.a=f},
cgl:function cgl(d,e){this.a=d
this.b=e},
aL0:function aL0(){},
ib5(d){var w=null
return A.ca(w,w,!0,w,new C.fKg(),d,w,!0,!0,x.e2)},
icf(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fRK(h,g,f,e),d,w,!0,!0,x.N)},
ib7(d,e){var w=null
return A.ca(w,w,!0,w,new C.fKl(e),d,w,!0,!0,x.dY)},
ib6(d){var w=null
return A.ca(w,w,!0,w,new C.fKk(),d,w,!0,!0,x.c5)},
aSV:function aSV(d,e){this.a=d
this.b=e},
aSU:function aSU(d){this.a=d},
aQU:function aQU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKg:function fKg(){},
fRK:function fRK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKl:function fKl(d){this.a=d},
fKk:function fKk(){},
YO:function YO(d,e){this.c=d
this.a=e},
ayk:function ayk(){var _=this
_.d=$
_.c=_.a=_.e=null},
cZZ:function cZZ(d){this.a=d},
d__:function d__(d){this.a=d},
cZY:function cZY(d,e){this.a=d
this.b=e},
d_0:function d_0(d){this.a=d},
d_1:function d_1(d){this.a=d},
YN:function YN(d){this.a=d},
ayj:function ayj(){this.d=$
this.c=this.a=null},
cZV:function cZV(d){this.a=d},
cZW:function cZW(d){this.a=d},
cZX:function cZX(d){this.a=d},
Yl:function Yl(d){this.a=d},
ax3:function ax3(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cxx:function cxx(){},
cxD:function cxD(d){this.a=d},
cxE:function cxE(d){this.a=d},
cxF:function cxF(d){this.a=d},
cxC:function cxC(){},
cxG:function cxG(d){this.a=d},
cxH:function cxH(d){this.a=d},
cxB:function cxB(){},
cxI:function cxI(d,e){this.a=d
this.b=e},
cxA:function cxA(d,e){this.a=d
this.b=e},
cxy:function cxy(d,e){this.a=d
this.b=e},
cxJ:function cxJ(d){this.a=d},
cxz:function cxz(){},
cxK:function cxK(d){this.a=d},
a0V:function a0V(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvu:function bvu(){this.d=$
this.c=this.a=null},
fbz:function fbz(d,e){this.a=d
this.b=e},
fbA:function fbA(d){this.a=d},
fbB:function fbB(d,e){this.a=d
this.b=e},
abk:function abk(d,e){this.a=d
this.b=e},
Fx:function Fx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bvs:function bvs(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fbx:function fbx(d,e){this.a=d
this.b=e},
awX:function awX(d,e){this.c=d
this.a=e},
bvt:function bvt(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
fby:function fby(d){this.a=d},
bvr:function bvr(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aNb:function aNb(){},
aNc:function aNc(){},
bCT(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bm(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oI(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fIV(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aV(B.o.u(s),2,"0")
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XL(A.d3(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPB(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i2().lb(85,1280,B.eJ),$async$aPB)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fn(),$async$aPB)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hda()
w=9
return A.b(C.cgk(q,r),$async$aPB)
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
return A.i($async$aPB,v)},
aPX(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPX=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cgh(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cI.aL(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().Lw(p,!0,null,i).d7(0,B.fM),$async$aPX)
case 9:n=a1
w=10
return A.b(n.m3(),$async$aPX)
case 10:m=a1
w=11
return A.b(J.ahP(m).hv(B.h0),$async$aPX)
case 11:l=a1
J.ahP(m).q()
if(l==null){w=8
break}i=J.eX(B.dD.gaP(l))
k="data:image/png;base64,"+B.cR.gcw().aL(i)
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
return A.i($async$aPX,v)},
fIV:function fIV(){},
tR:function tR(d){this.a=d},
asd:function asd(d,e,f){this.c=d
this.d=e
this.a=f},
aEA:function aEA(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eL8:function eL8(d,e){this.a=d
this.b=e},
eL_:function eL_(d){this.a=d},
eL0:function eL0(d){this.a=d},
eL6:function eL6(d,e){this.a=d
this.b=e},
eL5:function eL5(d,e){this.a=d
this.b=e},
eL2:function eL2(d,e){this.a=d
this.b=e},
eL1:function eL1(d,e){this.a=d
this.b=e},
eL3:function eL3(d){this.a=d},
eL4:function eL4(d,e){this.a=d
this.b=e},
eL7:function eL7(d,e){this.a=d
this.b=e},
eKV:function eKV(d,e){this.a=d
this.b=e},
eKZ:function eKZ(d){this.a=d},
eKY:function eKY(d,e){this.a=d
this.b=e},
eKX:function eKX(d){this.a=d},
eL9:function eL9(d,e){this.a=d
this.b=e},
eLa:function eLa(d,e){this.a=d
this.b=e},
eKW:function eKW(d,e){this.a=d
this.b=e},
hpT(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fIW(d,e,f){var w=0,v=A.j(x.N),u
var $async$fIW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hpT(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIW,v)},
bCV(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fIW(!0,d,e),$async$bCV)
case 4:w=3
return A.b(r.asb(g,d,e.a),$async$bCV)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aL(B.S.ao(C.hpT(d,e,null),null))
u="NGMY_WS:"+B.kk.gcw().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCV,v)},
hhK(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h3a(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d0(s,"NGMYWSSYNC2|"))return!0
if(J.d0(s,"NGMY_WS:"))return!0
if(J.f4(s,t))return!0
if(J.d0(s,"{"))try{w=B.S.aK(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i8Z(d){var w,v,u,t=C.hhK(d)
if(t==null)return null
if(C.h3a(t))return t
w=B.a.cK(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.h3a(v))return v}u=B.a.cK(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.h3a(v))return v}return null},
h39(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d0(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d0(q,"NGMY_WS:")){v=B.cg.cB(0,B.cI.aL(J.mI(q,8)))
w=t.a(B.S.aK(0,v,r))}else w=t.a(B.S.aK(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fYD(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCU(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asa(t[1]),$async$bCU)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h39(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h39(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCU,v)},
h38(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lk(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bCr(){var w=0,v=A.j(x.o),u,t
var $async$bCr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GD(),$async$bCr)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h39(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCr,v)},
hqL(d,e,f,g){return A.bS(B.K,null,new C.fRA(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fRA:function fRA(d,e,f){this.a=d
this.b=e
this.c=f},
adm:function adm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eLc:function eLc(d,e){this.a=d
this.b=e},
eLd:function eLd(d,e){this.a=d
this.b=e},
eLe:function eLe(d,e){this.a=d
this.b=e},
eLf:function eLf(d,e){this.a=d
this.b=e},
eLb:function eLb(d){this.a=d},
as7:function as7(d,e,f){this.c=d
this.d=e
this.a=f},
bkI:function bkI(){var _=this
_.c=_.a=_.e=_.d=null},
eKQ:function eKQ(d,e){this.a=d
this.b=e},
eKR:function eKR(d){this.a=d},
eKS:function eKS(d){this.a=d},
asc:function asc(d){this.a=d},
aEz:function aEz(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eKU:function eKU(d){this.a=d},
eKT:function eKT(d){this.a=d},
hIU(d,e,f,g,h){return new C.NY(h,g,d,e,f,null)},
aJm:function aJm(d,e){this.a=d
this.b=e},
NY:function NY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEB:function aEB(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eLC:function eLC(){},
eLy:function eLy(d,e){this.a=d
this.b=e},
eLz:function eLz(d){this.a=d},
eLj:function eLj(d){this.a=d},
eLh:function eLh(d){this.a=d},
eLi:function eLi(d){this.a=d},
eLs:function eLs(d,e){this.a=d
this.b=e},
eLp:function eLp(d,e){this.a=d
this.b=e},
eLq:function eLq(d,e){this.a=d
this.b=e},
eLr:function eLr(d,e,f){this.a=d
this.b=e
this.c=f},
eLn:function eLn(d,e,f){this.a=d
this.b=e
this.c=f},
eLl:function eLl(d){this.a=d},
eLm:function eLm(d){this.a=d},
eLo:function eLo(d){this.a=d},
eLF:function eLF(d){this.a=d},
eLE:function eLE(d){this.a=d},
eLG:function eLG(d){this.a=d},
eLD:function eLD(d){this.a=d},
eLg:function eLg(d){this.a=d},
eLk:function eLk(d,e){this.a=d
this.b=e},
eLB:function eLB(d,e){this.a=d
this.b=e},
eLA:function eLA(d,e){this.a=d
this.b=e},
eLv:function eLv(d){this.a=d},
eLw:function eLw(d){this.a=d},
eLx:function eLx(d,e){this.a=d
this.b=e},
eLu:function eLu(d,e){this.a=d
this.b=e},
eLt:function eLt(d,e,f){this.a=d
this.b=e
this.c=f},
bxf:function bxf(){},
AA(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afR(d,e,f){return C.hYu(d,e,f)},
hYu(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afR=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$afR)
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
return A.i($async$afR,v)},
afQ(d,e){return C.hYt(d,e)},
hYt(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afQ=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afQ)
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
return A.i($async$afQ,v)},
hXf(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sy(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzX(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzX=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b23(q),$async$bzX)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPX(q,!1),$async$bzX)
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
return A.i($async$bzX,v)},
hwE(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r_(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r_(p,J.k(u==null?"":u),1,o,q)},
fYD(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cD(w,new C.cwW(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cwX(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lk(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
i1o(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.a_f
case"female":case"f":return D.ajW
default:return D.y1}},
hmA(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h7l(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i1o(v==null?j:J.k(v))
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
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.i1(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i1q(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.MY
case"viewer":return D.kv
default:return D.tT}},
i1r(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gt(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bBd(d,e){return B.a.i(e.toLowerCase())===C.Gt(d,e)&&d.y!==D.kv},
u1(d,e){var w,v=d.y
if(v===D.kv)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gt(d,e))return!0
if(v===D.MY)return!0
v=d.e
return new A.M(v,A.h3e(),A.T(v).k("M<1,m>")).t(0,w)},
i0R(d){return J.dJ(d,new C.ftN()).gM(0)},
fS9(d){var w=0,v=A.j(x.y),u,t
var $async$fS9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AJ(d),$async$fS9)
case 3:u=t.qW(f,new C.fSa(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fS9,v)},
bAW(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AJ(d),$async$bAW)
case 3:t=g
if(J.qW(t,new C.frY(e))){w=1
break}if(C.i0R(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAW,v)},
akw(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.da(n,x.f)
w=A.cD(w,new C.bNP(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bNQ(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bNR(),x.N)
t=A.C(l,l.$ti.k("ak.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.A(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aJ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kF(l,w,v,!s,t,m,r,q,p,C.i1q(o==null?null:J.k(o)))},
hmJ(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CS(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rj(d),$async$CS)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$CS)
case 4:t=f
w=5
return A.b(t.a5S(0),$async$CS)
case 5:w=6
return A.b(C.fj6(t,l),$async$CS)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hik(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oH(l,n),$async$CS)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hik(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oH(l,n),$async$CS)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CS,v)},
fj6(d,e){return C.hUJ(d,e)},
hUJ(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fj6=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AA(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aK(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AA(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aK(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fYD(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AA(a9)+"_"+n))
i=C.hXf(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b23(h),$async$fj6)
case 17:g=b1
if(g!=null){i=i.Sy(g)
p=!0}case 16:J.ce(q,i)
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
case 8:J.Ru(q,new C.fj7())
if(p&&J.ad(q)!==0)C.oH(a9,q)
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
return A.i($async$fj6,v)},
bBn(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bBn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rj(d),$async$bBn)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CS(r),$async$bBn)
case 4:t=p.aV(g)
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
return A.i($async$bBn,v)},
hik(d){var w,v,u,t
try{w=B.S.aK(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cD(v,new C.feO(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.feP(),u),u.k("J.E"))
B.d.aZ(v,new C.feQ())
return v}catch(t){v=A.a([],x.D)
return v}},
oH(d,e){return C.iaW(d,e)},
iaW(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oH=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rj(b2),$async$oH)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$oH)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AA(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aK(0,p,null)),new C.fK7(),a2).fP(0)
a2=J.b6(b3,new C.fK8(),a2).c0(0,new C.fK9())
n=A.dd(a2,a2.$ti.k("J.E"))
a2=o,a2=A.eb(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f4(n,m)?17:18
break
case 17:a5=C.AA(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8k(l),$async$oH)
case 19:t=21
a5=C.AA(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aK(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8k(a5==null?null:J.k(a5)),$async$oH)
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
return A.b(C.afQ(r,"ngmy_worksheet_item_v3_"+C.AA(a8)+"_"+m),$async$oH)
case 29:w=30
return A.b(C.afQ(r,"ngmy_worksheet_thumb_v3_"+C.AA(a8)+"_"+m),$async$oH)
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
case 14:case 10:a2=J.cF(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzX(h),$async$oH)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afR(r,"ngmy_worksheet_thumb_v3_"+C.AA(a8)+"_"+a4,f),$async$oH)
case 40:g=i.Sy(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afQ(r,"ngmy_worksheet_thumb_v3_"+C.AA(a8)+"_"+a4),$async$oH)
case 41:g=i.Sy(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afQ(r,"ngmy_worksheet_thumb_v3_"+C.AA(a8)+"_"+a4),$async$oH)
case 42:case 34:a4=i.a
w=43
return A.b(C.afR(r,"ngmy_worksheet_item_v3_"+C.AA(a8)+"_"+a4,B.S.ao(g.ah(),null)),$async$oH)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.ce(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afR(r,"ngmy_worksheets_index_v3_"+C.AA(a8),B.S.ao(q,null)),$async$oH)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eQ(b3,new C.fKa(q))
a4=a3.$ti.k("cO<1,a5<m,@>>")
a7=A.C(new A.cO(a3,new C.fKb(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afR(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oH)
case 45:w=46
return A.b(J.hvL(r),$async$oH)
case 46:if(a2.gcl(b3)&&J.ad(q)===0){u=!1
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
return A.i($async$oH,v)},
L9(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$L9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CS(d),$async$L9)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.fS8(e))
if(r===-1)s.cj(t,0,e)
else s.n(t,r,e)
u=C.oH(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$L9,v)},
bB9(d,e){var w=0,v=A.j(x.H),u
var $async$bB9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CS(d),$async$bB9)
case 2:u=g
J.nt(u,new C.fue(e))
w=3
return A.b(C.oH(d,u),$async$bB9)
case 3:return A.h(null,v)}})
return A.i($async$bB9,v)},
Gv(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Gv)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aK(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cD(j,new C.fx0(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fx1(),s),s.k("J.E"))
B.d.aZ(r,new C.fx2())
k=r}}catch(h){}w=4
return A.b(C.ffy(d),$async$Gv)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hV5(k,p,d)
j=A.T(o)
s=j.k("M<1,a5<m,@>>")
s=A.C(new A.M(o,new C.fx3(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qv(d,o),$async$Gv)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fx4(d),j),j.k("J.E"))
if(m.length!==0)C.aOu(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gv,v)},
fJU(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fJU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qv(d,e),$async$fJU)
case 3:t=J.dJ(e,new C.fJV(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOu(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJU,v)},
a2x(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2x=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a2x)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aK(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cD(m,new C.fS3(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fS4(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qk(o,new C.fS5(e))
if(B.a.i(e.x).length===0&&C.u1(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDE(e.y===D.kv?D.kv:D.tT,m)}else p=e
if(q===-1)J.pC(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.Qv(d,o),$async$a2x)
case 3:w=C.u1(p,d)?4:5
break
case 4:w=6
return A.b(C.aOt(C.Gt(p,d),p),$async$a2x)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2x,v)},
aOF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gv(d),$async$aOF)
case 2:u=g
t=J.cF(u)
s=A.rh(t.eQ(u,new C.ftW(e)))
t.br(u,new C.ftX(e))
w=3
return A.b(C.Qv(d,u),$async$aOF)
case 3:w=s!=null&&C.bBd(s,d)?4:5
break
case 4:w=6
return A.b(C.feS(e),$async$aOF)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOF,v)},
ahE(d){var w=d.f,v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fSf(),v),v.k("J.E"))
return w},
h0N(d,e){var w,v=d.f,u=A.rh(new A.a_(v,new C.fts(e),A.T(v).k("a_<1>")))
v=C.ahE(d)
w=A.T(v).k("a_<1>")
v=A.C(new A.a_(v,new C.ftt(e,u),w),w.k("J.E"))
B.d.aZ(v,new C.ftu())
return v},
i1u(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hqP(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h0N(d,u),new C.fRL(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i30(d,e){var w
if(e==null||e.length===0)return 1
w=C.h0N(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fxN(),A.T(w).k("M<1,G>")).ff(0,B.An)+1},
iaP(d){var w,v=C.ahE(d)
if(v.length===0)return null
w=new A.a_(v,new C.fJO(),A.T(v).k("a_<1>"))
if(!w.gam(0))return w.gI(0)
return B.d.gI(v)},
i1p(d){return A.F(["id",d.a,"name",d.b,"gender",C.hmA(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i2W(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.L(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.y1?n:q.c
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
d=q.aDz(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cJD(a1,w,a3.d,a2.y,s,a0,v)},
AJ(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$AJ)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aK(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.da(t,x.f)
p=A.cD(p,new C.fwY(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fwZ(),s),s.k("J.E"))
B.d.aZ(p,new C.fx_())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AJ,v)},
ahp(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahp=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tT:D.kv
a7=C.Gt(b2,b3)
w=2
return A.b(C.AJ(b1),$async$ahp)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fJJ(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAW(b1,b2),$async$ahp)
case 5:case 4:if(b0===-1){u=b2.aDE(a6,a7)
a9.cj(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.y1?i:l.c
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
s.n(0,m,l.aDz(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tT:D.kv
u=t.yB(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qv(b1,a8),$async$ahp)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOt(B.a.i(b3.toLowerCase()),u),$async$ahp)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahp,v)},
hiI(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("M<1,a5<m,@>>"),k=A.C(new A.M(m,C.hq0(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hiJ(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("M<1,a5<m,@>>")
u=A.C(new A.M(u,C.hq0(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hSI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akw(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h3e(),A.T(j).k("M<1,m>")).c0(0,new C.ffl())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tT
else s=B.d.t(t,u)?D.MY:D.kv
return w.aDE(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akw(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cD(h,new C.ffm(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.ffn(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.ffo(),x.N).c0(0,new C.ffp())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tT
else s=B.d.t(t,u)?D.MY:D.kv
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kF(h,r,p,!m,t,o,l,j,v,s)},
ffy(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ffy=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.ffC()
h=x.N
g=x.z
w=7
return A.b(A.iP(A.a([A.lq("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.lq("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.lq("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.U),$async$ffy)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h5(l,o)
J.h5(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.ffz(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.ffA(),l),l.k("J.E"))
B.d.aZ(l,new C.ffB())
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
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
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
return A.i($async$ffy,v)},
hV5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dz(e,new C.fjM(),v).c0(0,new C.fjN())
t=A.dd(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gt(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kv){m=q.e
m=!new A.M(m,A.h3e(),A.T(m).k("M<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i2W(l,v)
o=C.Gt(k,w)
p=v.d
s.n(0,u,o===w?k.bbT(p,D.tT):k.bbT(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aZ(j,new C.fjO())
return j},
Qv(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$Qv)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fmr(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$Qv)
case 3:return A.h(null,v)}})
return A.i($async$Qv,v)},
aOt(d,e){return C.i_e(d,e)},
i_e(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lU("family_trees",A.a([C.hiI(e,d)],p),null,B.cH),$async$aOt)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lU("family_trees",A.a([C.hiJ(e,d)],p),null,B.cH),$async$aOt)
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
return A.i($async$aOt,v)},
aOu(d,e){return C.i_f(d,e)},
i_f(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("M<1,a5<m,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.frh(d),n),m)
r=l
w=7
return A.b(A.lU("family_trees",r,null,B.cH),$async$aOu)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fri(d),n),m)
p=k
w=8
return A.b(A.lU("family_trees",p,null,B.cH),$async$aOu)
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
return A.i($async$aOu,v)},
feS(d){return C.hS2(d)},
hS2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$feS=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QU("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$feS)
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
return A.i($async$feS,v)},
r_:function r_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lk:function lk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwZ:function cwZ(){},
cwY:function cwY(){},
cwW:function cwW(){},
cwX:function cwX(){},
Hz:function Hz(d,e){this.a=d
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
akv:function akv(d,e){this.a=d
this.b=e},
ftN:function ftN(){},
fSa:function fSa(d){this.a=d},
frY:function frY(d){this.a=d},
kF:function kF(d,e,f,g,h,i,j,k,l,m){var _=this
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
bNT:function bNT(){},
bNS:function bNS(){},
bNP:function bNP(){},
bNQ:function bNQ(){},
bNR:function bNR(){},
fj7:function fj7(){},
feO:function feO(){},
feP:function feP(){},
feQ:function feQ(){},
fK7:function fK7(){},
fK8:function fK8(){},
fK9:function fK9(){},
fKa:function fKa(d){this.a=d},
fKb:function fKb(){},
fS8:function fS8(d){this.a=d},
fue:function fue(d){this.a=d},
fx0:function fx0(){},
fx1:function fx1(){},
fx2:function fx2(){},
fx3:function fx3(){},
fx4:function fx4(d){this.a=d},
fJV:function fJV(d){this.a=d},
fS3:function fS3(){},
fS4:function fS4(){},
fS5:function fS5(d){this.a=d},
ftW:function ftW(d){this.a=d},
ftX:function ftX(d){this.a=d},
fSf:function fSf(){},
fts:function fts(d){this.a=d},
ftt:function ftt(d,e){this.a=d
this.b=e},
ftu:function ftu(){},
fRL:function fRL(d){this.a=d},
fxN:function fxN(){},
fJO:function fJO(){},
fwY:function fwY(){},
fwZ:function fwZ(){},
fx_:function fx_(){},
fJJ:function fJJ(d){this.a=d},
ffl:function ffl(){},
ffm:function ffm(){},
ffn:function ffn(){},
ffo:function ffo(){},
ffp:function ffp(){},
ffC:function ffC(){},
ffD:function ffD(d){this.a=d},
ffz:function ffz(d){this.a=d},
ffA:function ffA(){},
ffB:function ffB(){},
fjM:function fjM(){},
fjN:function fjN(){},
fjO:function fjO(){},
fmr:function fmr(){},
frh:function frh(d){this.a=d},
fri:function fri(d){this.a=d},
cx_:function cx_(d,e){this.a=d
this.b=e},
cx0:function cx0(d,e){this.a=d
this.b=e},
aGE:function aGE(d,e,f){this.a=d
this.b=e
this.c=f},
b8m:function b8m(){this.b=this.a=0},
b8l:function b8l(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bvv:function bvv(){},
wO(d,e){var w,v
if(d==null)return""
w=d.bV()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gci()
if(!e)return v
return v+" "+B.a.aV(B.o.u(w.gne()),2,"0")+":"+B.a.aV(B.o.u(w.gGc()),2,"0")},
hIR(){var w,v=$.py(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.h2(u)},
as8(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$as8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$as8)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$as8)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
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
return A.i($async$as8,v)},
as9(d){return C.hIS(d)},
hIS(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$as9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$as9)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cH,null),$async$as9)
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
return A.i($async$as9,v)},
asb(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$asb=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$asb)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hIR()
w=4
return A.b(C.as8(),$async$asb)
case 4:r=h
q=B.a.i(e)
p=B.dK.aL(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cR.gcw().aL(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.as9(r),$async$asb)
case 5:u=new A.a00("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asb,v)},
asa(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$asa)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.as8(),$async$asa)
case 4:q=f
p=J.a4(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a4(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cg.cB(0,B.cI.aL(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.u(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dQ(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
p.n(q,i,m)}w=5
return A.b(C.as9(q),$async$asa)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asa,v)},
hda(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cG.aw(999999)},
hIT(d){var w,v,u,t,s,r,q
try{w=A.agf(d)
if(w==null)return d
v=w
if(J.Lf(v)>960||J.Le(v)>960){s=v
r=J.Lf(v)>=J.Le(v)?960:null
v=A.age(s,J.Le(v)>J.Lf(v)?960:null,B.Ok,r)}s=v
u=A.alU(82).SV(s,B.yL)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cf(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
cgk(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cgk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hIT(e)
$.cgg.n(0,s,t)
u=C.bCX(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgk,v)},
b23(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b23=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d0(l,"data:image")){u=null
w=1
break}t=4
r=J.f4(l,",")?B.d.gal(J.lt(l,",")):l
q=B.cI.aL(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hda()
w=7
return A.b(C.cgk(p,q),$async$b23)
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
return A.i($async$b23,v)},
cgh(d){var w=0,v=A.j(x.T),u,t,s
var $async$cgh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cgj(s),$async$cgh)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cR.gcw().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgh,v)},
a8k(d){var w=0,v=A.j(x.H),u,t
var $async$a8k=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hpU(d)
if(t==null){w=1
break}$.cgg.W(0,t)
w=3
return A.b(C.bCW(t),$async$a8k)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8k,v)},
bCX(d,e){return C.i91(d,e)},
i91(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNo
w=7
return A.b(n==null?$.aNo=I.h_M():n,$async$bCX)
case 7:r=g
q=new Uint8Array(A.cf(e))
p=J.mJ(r,"thumbs","readwrite")
B.iM.mm(J.mH(p,"thumbs"),q,l)
w=8
return A.b(J.pB(p),$async$bCX)
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
return A.i($async$bCX,v)},
bCW(d){return C.i9_(d)},
i9_(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNo
w=7
return A.b(o==null?$.aNo=I.h_M():o,$async$bCW)
case 7:r=f
q=J.mJ(r,"thumbs","readwrite")
B.iM.FI(J.mH(q,"thumbs"),m)
w=8
return A.b(J.pB(q),$async$bCW)
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
return A.i($async$bCW,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[234]
S=c[150]
A2=c[218]
G=c[199]
F=c[31]
E=c[209]
A3=c[113]
A4=c[220]
A5=c[109]
A6=c[187]
T=c[99]
U=c[110]
A7=c[217]
A8=c[37]
M=c[216]
A9=c[80]
H=c[88]
Aa=c[157]
Ab=c[118]
V=c[159]
W=c[230]
X=c[188]
Ac=c[179]
Ad=c[191]
Y=c[186]
Ae=c[65]
Af=c[71]
Ag=c[235]
Z=c[203]
Ah=c[30]
Ai=c[111]
K=c[181]
Aj=c[192]
A_=c[233]
A0=c[226]
O=c[102]
P=c[98]
L=c[136]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[229]
Ak=c[70]
Al=c[197]
R=c[232]
Am=c[231]
An=c[56]
I=c[54]
C.ao2.prototype={}
C.aYn.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bgd(),f=h.x!=null&&h.z1(i).length===0
if(h.x!=null)w=f?B.aZ:B.bz
else w=h.gTx()?B.bz:B.dU
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.I(D.bgr,B.q,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.eQO,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h7,i,i,i),B.R,D.fjK,B.au,A.d(C.wO(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ffF,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b0A,i,i,i,i,B.Ze,i,i,i)
q=A.n(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h1O(h.d)
o=A.p(B.A,C.aYm(A.fA7(h.e,n),30),B.f,i,i,new A.o(B.lL,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fb2,B.L,i,i)
m=A.n(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bC,D.fk1,B.ac,A.p(i,A.x(A.a([D.fzw,B.bC,A.d(A.AL(h.c),i,i,i,i,i,i,D.f60,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fa,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.ai1,i,i,i)
p=A.n(16)
m=A.I(B.aL,B.q,1)
l=j.aQn("Original due",C.wO(h.r,!1))
n=j.aQn("Current due",C.wO(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.O,n,B.R,A.p(i,A.d(h.gaKv(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Ba,i,i,1/0),B.R,j.cf5(),B.O,j.c2z(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fkY,B.au,A.d(q,i,i,i,i,i,i,D.fak,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaFg()){q=A.n(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fAP,B.O,A.bw(A.n(12),A.en(new A.a7(1/0,88,A.b3(i,i,i,new A.VQ(h.ax,B.M,D.eV0,!0,3.5,i),B.aw),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fr,i,i,i)],s))}p.push(B.aB)
p.push(D.fsY)
return A.p(i,A.x(A.a([r,new A.D(B.ai4,A.x(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.N,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQn(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a8y,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f70,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cf5(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a96(B.dU,u,"Not paid yet")
w=t.z1(null).length
v=w===0?B.aZ:B.bz
return this.a96(v,u,C.wO(t.x,!0))},
c2z(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a96(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a96(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a8y,u,u,u)
v=A.T(d).k("M<1,hd>")
v=A.C(new A.M(d,new C.c28(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bV(B.bA,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a96(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a8y,w,w,w),1),new A.dq(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.bav.prototype={
a4(d,e){new A.VQ(this.b,B.M,e,!0,3.5,null).a4(d,e)},
au(d){return d.b!==this.b}}
C.aoe.prototype={
T(){return new C.aCv(A.a([],x.bp))},
ge1(){return this.c}}
C.aCv.prototype={
Z(){this.a1()
this.ID()},
ID(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ID=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1N(t.a.c),$async$ID)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dGs(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ID,v)},
aSl(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bs:B.bm).j(0.22)
w=A.n(10)
return A.bs(v,new A.b4(4,r,new A.az(u,1,B.q,-1)),v,B.bl,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bs:B.bm).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.n(10),D.aZd),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aSk(d){return this.aSl(d,null)},
Pe(d){return this.ciF(d)},
ciF(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pe=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GJ:B.eJ
w=7
return A.b(new A.i2().C3(72,900,900,n),$async$Pe)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fn(),$async$Pe)
case 8:p=f
n=B.cR.gcw().aL(p)
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
if(n!=null)n.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.u(o),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pe,v)},
b03(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.n(10),n=A.I((q?B.bs:B.bm).j(0.18),B.q,1)
if(d)q=B.cT
else q=s.a.d.a?B.bs:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.ax,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cT
else u=s.a.d.a?B.bs:B.bm
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fy(r,r,r,r,r,r,r,r,r,r,r,B.cT,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cD,s.a.d.a?B.bs:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jH,D.bsw,r,r,r)},
D2(d){return this.bzy(d)},
bzx(){return this.D2(null)},
bzy(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D2=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b5,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jb(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.aa(p,2)}o=new A.as(new A.bb(a4,B.b5,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b5,B.aO),s)
if(a3){a4=new A.S(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gci(),a4.gce(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gci(),a4.gce(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h1O(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wg?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hY(B.w.j(0.55),!0,"Dismiss",a4,new C.dGb(),new C.dGc(a2,t,a5,r,new C.dGd(a2,t),o,n,j),B.eH,!0,x.y),$async$D2)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d6(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.U$=s
r.P$=0
o.U$=s
o.P$=0
n.U$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.J(x.q).f.S(D.f0o)
w=1
break}a0=a2.d
if(a0==null){t.c.J(x.q).f.S(D.f_3)
w=1
break}a1=A.fA7(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wg?"male":"female"
w=7
return A.b(A.ahD(a3,A.h9U(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D2)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wg?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gci(),a3.gce(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gci(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cLN(a2.a)
w=8
return A.b(A.ahD(t.a.c,a5),$async$D2)
case 8:case 5:w=9
return A.b(t.ID(),$async$D2)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D2,v)},
aSZ(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cT.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cT
else s=(this.a.d.a?B.bs:B.bm).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aYm(d,18)
if(g)q=B.cT
else q=this.a.d.a?B.aQ:B.ax
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
RU(d){return this.cAl(d)},
cAl(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hY(B.w.j(0.55),!0,"Dismiss",s,new C.dGv(),new C.dGw(t,d),B.hz,!0,x.y),$async$RU)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahD(t.a.c,d),$async$RU)
case 7:w=8
return A.b(t.ID(),$async$RU)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RU,v)},
NT(d,e){return this.bKq(0,e)},
bKq(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l5(s,"Cancel","Delete",e.b+" \xb7 "+A.AL(e.c)+" will be removed from this device.","Delete this debt?"),$async$NT)
case 3:if(!g){w=1
break}w=4
return A.b(C.fu2(t.a.c,e.a),$async$NT)
case 4:w=5
return A.b(t.ID(),$async$NT)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NT,v)},
aeE(d){return this.ccx(d)},
ccx(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bS(B.K,null,new C.dGp(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeE)
case 2:return A.h(null,v)}})
return A.i($async$aeE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ecu
w=J.dJ(m.d,new C.dGx())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dGy())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cJ(v,0,new C.dGz())
w=A.n(18)
s=m.a.d.a
r=s?D.cqw:D.ayr
q=A.I(s?B.cT.j(0.35):B.cT.j(0.18),B.q,1)
s=A.p(l,D.bSK,B.f,l,l,new A.o(B.cT.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.n(12),A.aL(!1,A.n(12),!0,D.ebT,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dGA(m),l,l,l,l,l,l,l),B.f,B.cT,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cwy("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AL(t)
r=A.a([A.p(l,A.x(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b6e(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.az,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ahZ,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e0:B.c
q=A.n(18)
o=A.I((w?B.bs:B.bm).j(0.12),B.q,1)
n=A.p(l,D.bNF,B.f,l,l,new A.o(B.cT.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.buW,l,l,1/0))}else{w=m.gchY()
s=A.C(new A.M(v,w,A.T(v).k("M<1,t>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bwC,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.T(u).k("M<1,t>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ai,l,B.e,B.j,0,B.p)},
b6e(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.I((v.a.d.a?B.bs:B.bm).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cT
else w=v.a.d.a?B.aQ:B.ax
return A.p(u,A.x(A.a([q,B.bC,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ej,u,u,u)},
cwy(d,e){return this.b6e(!1,d,e)},
chZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z1(j).length,h=d.bfq()
if(d.x!=null){w=d.z1(j).length
v=w===0?B.cT:B.bz}else if(d.gTx())v=B.bz
else{if(h)w=B.cT
else w=k.a.d.a?B.bs:B.bm
v=w}if(d.x!=null){w=d.z1(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wO(u,!1)}else{u.toString
t="Paid "+C.wO(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wO(w,!1)+" \xb7 "+i+" missed":"Due "+C.wO(w,!1)}w=k.a.d.a?B.e0:B.c
u=A.n(18)
if(d.gTx()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bs:B.bm).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bn:B.lL
o=A.I(d.gTx()&&d.x==null?B.bz.j(0.45):B.cT.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h1O(d.d)
o=A.p(B.A,A.de(C.aYm(A.fA7(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.ax
m=x.p
n=A.a([new A.dq(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFg())B.d.v(n,A.a([B.ee,A.X(B.No,B.cT.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cV,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AL(d.c)
l=k.a.d.a?B.aQ:B.ax
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(W.ahK,A.B(A.a([o,B.be,p,B.ab,A.x(A.a([n,B.bC,A.X(B.ey,(k.a.d.a?B.bs:B.bm).j(0.5),j,j,j,18)],m),B.dz,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dGr(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uh.prototype={}
C.aku.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bi
u=v?B.F:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cB,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aC(a0,A.p(a0,A.X(B.cD,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.ij,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.auN,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FJ,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eQ(m,A.B(l,B.m,a0,B.e,B.N,0,a0,a0),B.f,B.dZ)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.brJ,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.eVM)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vx,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.ll,A.x(a2,B.m,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hn,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.az,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bsW,a0,a0,a0,a0)}}
C.aU8.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bi?B.bi:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cF,q,B.P,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cV,n],m)
if(p.z)o.push(new A.D(B.vu,n,q))
return new A.D(B.da,A.x(o,B.m,q,B.e,B.N,0,B.p),q)}}
C.Sz.prototype={
T(){return new C.be7()}}
C.be7.prototype={
gbYz(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.ecp,D.ecv],l)
for(w=0;w<8;++w){v=D.a2b[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gv:B.BU
q=t===s
r=A.X(r,q?B.eC:B.bX,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bh,new A.y(v.c,n,A1.Du,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.az(B.eC,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aC(n,new A.D(B.eD,A.x(A.a([new A.D(B.mu,new A.cl(B.aP,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DU(!0,new C.aku(v,q.d,q.e,new C.d6f(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6g(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.bte,A.bG(D.fGb,new C.d6h(o,d),A.bn(B.b6,n,n,n,n,B.ok,n,n,new A.b7(A.n(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.bxt,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.ne.prototype={
ah(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bc4(d,e,f){return new C.ne(this.a,e,d,f)}}
C.Hy.prototype={
wi(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hy(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDt(d){var w=null
return this.wi(w,w,w,w,w,d,w,w,w,w,w,w)},
cHA(d){var w=null
return this.wi(w,w,w,w,d,w,w,w,w,w,w,w)},
bc2(d,e,f){var w=null
return this.wi(d,w,w,w,w,w,w,w,e,w,f,w)},
cIe(d){var w=null
return this.wi(w,w,w,w,w,w,d,w,w,w,w,w)},
cIn(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,d,w,w)},
cHy(d){var w=null
return this.wi(w,w,w,d,w,w,w,w,w,w,w,w)},
cIp(d){var w=null
return this.wi(w,w,w,w,w,w,w,w,w,w,w,d)},
cHv(d){var w=null
return this.wi(w,w,d,w,w,w,w,w,w,w,w,w)},
cHq(d){var w=null
return this.wi(w,d,w,w,w,w,w,w,w,w,w,w)},
FA(d){var w=null
return this.wi(w,w,w,w,w,w,w,d,w,w,w,w)},
cIx(d,e,f,g,h,i,j,k,l,m,n){return this.wi(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cFc(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bNO(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cQ(d.h(0,n))).length!==0?B.a.i(A.cQ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cQ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CC.gee(D.CC))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3O)
q=l.$2("frame",D.a3b)
l=l.$2("texture",D.a36)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cQ(d.h(0,"author"))):o
return this.cIx(p,u,t,q,r,A.qQ(d.h(0,"ribbon"))?A.G4(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Zb.prototype={
T(){return new C.azz(A.a([],x.I),D.MX)},
ge1(){return this.c}}
C.azz.prototype={
Z(){var w,v=this
v.a1()
v.f=A.zA(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.kZ()
w=v.a
C.bBk(w.c,w.d).bB(new C.d6W(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.U$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.U$=w
u.P$=0
v.a2()},
kZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KK(s.c,s.d),$async$kZ)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d6K(t,r))
t.avh()
case 1:return A.h(u,v)}})
return A.i($async$kZ,v)},
garR(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avh(){var w,v,u=this.garR(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
caY(d){this.m(new C.d6H(this,d))
this.avh()},
Ne(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ne=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.ne(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQh(r.c,r.d,s),$async$Ne)
case 3:w=4
return A.b(t.kZ(),$async$Ne)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qk(t.d,new C.d6i(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d6j(t,p))
t.avh()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B5(p+1,B.cu,B.kT),$async$Ne)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Ne,v)},
AL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.garR()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQh(o.c,o.d,new C.ne(s,r,q,new A.S(p,0,!1))),$async$AL)
case 3:w=4
return A.b(t.kZ(),$async$AL)
case 4:if(t.c==null){w=1
break}t.m(new C.d6L(t))
case 1:return A.h(u,v)}})
return A.i($async$AL,v)},
NU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garR()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6r(r),s,null,!0,!0,x.y),$async$NU)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bB5(s.c,s.d,r.a),$async$NU)
case 4:t.m(new C.d6s(t))
w=5
return A.b(t.kZ(),$async$NU)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TA(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$NU,v)},
yl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AL(),$async$yl)
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
return A.b(C.QM(s,r.r,o,p,q),$async$yl)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hqo(s,r.x,r.r),$async$yl)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KK(s.c,s.d),$async$yl)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.ne(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AV(r.c,r.d,l),$async$yl)
case 11:w=12
return A.b(t.kZ(),$async$yl)
case 12:r=t.c
if(r==null){w=1
break}r.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yl,v)},
a0c(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AL(),$async$a0c)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyj(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yU,new C.d6I(t),new C.d6J())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mt("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new F.mt(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h3q(o,new F.rl(s,r,"",p,new F.uz(q.d,null,null,null,null,"","","")),null),$async$a0c)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0c,v)},
NC(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AL(),$async$NC)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bS(D.adl,null,new C.d6n(t),s,!0,!0,!0,P.a6K,!1,!1,x.N),$async$NC)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cHA(r)
t.m(new C.d6o(t,q))
s=t.a
w=7
return A.b(C.Rm(s.c,s.d,q),$async$NC)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NC,v)},
WK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(D.adl,null,new C.d6t(t),r,!0,!0,!0,P.a6K,!1,!1,x.e),$async$WK)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d6u(t,s))
r=t.a
w=4
return A.b(C.Rm(r.c,r.d,s),$async$WK)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B5(0,B.dV,B.o0)
case 1:return A.h(u,v)}})
return A.i($async$WK,v)},
bPJ(d){var w=d.bV(),v=B.a.aV(B.o.u(w.gce()),2,"0"),u=B.a.aV(B.o.u(w.gcu()),2,"0")
return""+w.gci()+"-"+v+"-"+u},
gyj(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bXO()
if(r.e)w=D.aca
else if(J.cn(r.d)){w=r.y
v=r.gyj(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f5s,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.aj_,new C.Yu(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ko.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aC(q,A.p(q,D.eQB,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dR.j(0.45),B.J,18)],x.V),E.w5,B.n),q,q,q,q,B.Zo,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcEk(),q,q,q,q,q,q,!1,B.a7))
w.push(B.R)
w.push(A.hn(D.bJT,D.fFE,r.gaMe(),q))
B.d.v(u,w)}w=A.av(A.cd(A.x(u,B.m,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.ex,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ko.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.Al
u=A.x(A.a([new A.D(D.buf,w,q),A.E(A.IS(v,new C.d6U(r),J.ad(r.d)+1,q,r.gcaX(),u,B.aP),1),r.bCr()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.aeK,new A.an(B.W,q,B.b1,B.r,A.a([D.aLC,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bXO(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JR(B.dX,"AI",h.gbAk(),!0))
if(h.a.f)f.push(new C.JR(B.nm,"Cover",h.gbL_(),!1))
if(h.a.f)f.push(new C.JR(B.yv,"Header",h.gbFY(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JR(B.u7,"Print",h.gcjZ(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.ho:B.jr
t=v?"Save":"Edit"
f.push(new C.JR(u,t,v?h.gcqh():new C.d6E(h),!1))}if(h.a.f)f.push(new C.JR(B.hB,"Add page",h.gaMe(),!1))
v=C.hmz(h.y.Q)
u=h.gyj(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dt3
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jX.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.ko,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ko.j(0.85)
p.push(new A.bB(1,B.bh,A.aC(B.c7,A.x(A.a([k,B.bC,new A.y(l.b,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.aku(v,u,t+" \xb7 "+s+" "+r,new C.d6F(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AL(),$async$zO)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a21(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d6k(t,p),s,null,!0,!0,x.N),$async$zO)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yl(),$async$zO)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DE(),$async$zO)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fd("Swahili (Kiswahili)",!0),$async$zO)
case 18:w=16
break
case 17:w=19
return A.b(t.cB_(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zO)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zO,v)},
YE(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.I(E.jX.j(0.3),B.q,1),r=x.p
return new A.D(B.cw,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.w5,B.a5),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A9.TS,w,w,w),A.d(g,w,w,w,w,w,w,A3.TN,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d6G(d,h),w,w,w,w,w,w,w),w)},
DE(){return this.bPd()},
bPd(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DE=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6x(r),a7,null,!0,!0,x.ei),$async$DE)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d6y(o),a7,null,!0,!0,x.H).fj(new C.d6z(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.ce(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yU[a1]
J.ce(j,i.a)}w=8
return A.b(C.agN(a0,a7,new C.d6A(o),d,l,e,j),$async$DE)
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
if(l!=null&&a6.a)A.a6(l,!0).eF()
l=o
l.si1($.aw())
J.aQI(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.J(x.q).f
j=n
l.S(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bc4(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AV(j.c,j.d,l),$async$DE)
case 11:w=12
return A.b(r.kZ(),$async$DE)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yU[a1].a)
a5=l.cFc(j,12,a7)
l=r.a
w=15
return A.b(C.Rm(l.c,l.d,a5),$async$DE)
case 15:if(r.c!=null)r.m(new C.d6B(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B5(0,B.dV,B.o0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.J(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.S(A.b2(a3?A.crp("Undo",new C.d6C(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.eg,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DE,v)},
Fd(d,e){return this.cB0(d,e)},
cB_(d){return this.Fd(d,!1)},
cB0(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fd=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d6N(a0),k,null,!0,!0,x.H).fj(new C.d6O(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ce(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a2e(m,new C.d6P(a0)),$async$Fd)
case 10:w=8
break
case 9:w=11
return A.b(C.bCO(new C.d6Q(a0),m,a2),$async$Fd)
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
if(o!=null&&f.a)A.a6(o,!0).eF()
o=a0
o.si1($.aw())
J.aQI(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.J(x.q).f
k=q
o.S(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bc4(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AV(k.c,k.d,o),$async$Fd)
case 12:w=13
return A.b(r.kZ(),$async$Fd)
case 13:o=r.c
if(o==null){w=1
break}o=o.J(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(A.crp("Undo",new C.d6R(r,d),null),null,null,null,null,B.r,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fd,v)},
bCr(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d6l(v):u
r=A.aH(u,u,u,u,A.X(D.bFy,s?D.ko:B.b_,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hn(A.X(B.vK,B.F4,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.F4,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbKz(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ko.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d6m(v):u
return A.bm(!0,new A.D(D.bu3,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.ey,t<J.ad(v.d)?D.ko:B.b_,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Zf.prototype={
T(){return new C.bes(new A.as(B.as,$.aw()))}}
C.bes.prototype={
ga1k(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
gbNX(){var w,v=this.ga1k()
A:{if("cover"===v){w=D.cWS
break A}if("book"===v){w=D.cSD
break A}w=D.dlb
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.jX.j(0.5),n=x.p,m=A.B(A.a([D.dt4,B.at,D.bzu,A.aH(q,q,q,q,B.ls,q,q,q,new C.d8G(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j9(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d8H(r),r.ga1k()==="page",q,q,q,q))
if(r.a.d)l.push(A.j9(q,q,q,D.fAl,q,new C.d8I(r),r.ga1k()==="book",q,q,q,q))
l.push(A.j9(q,q,q,D.fnz,q,new C.d8J(r),r.ga1k()==="cover",q,q,q,q))
l=A.bV(B.bA,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.U,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.n(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kI,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dp,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbNX(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mK(q,B.c.j(0.08),new A.y(s,q,B.Jd,q,q,q,q,q,q,q,q,q),B.hG,new C.d8K(r,s),q,q,q,q))}return A.eL(q,E.AR,A.cd(A.x(A.a([m,B.R,D.fDz,B.am,l,B.ac,k,B.O,A.bV(B.bA,w,B.br,6,6),B.aB,A.dn(D.bJQ,D.fEm,new C.d8L(r,d),A.bn(B.b6,q,q,q,q,B.ok,q,q,new A.b7(A.n(16),B.Y),q,q,q)),B.au,D.fyC],n),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.fD,q,q,B.ah),q,q,q,D.aiI,B.d1,q,new A.b7(p,new A.az(o,1.4,B.q,-1)),q)}}
C.Zd.prototype={
T(){return new C.azA(A.a([],x.Y))},
ge1(){return this.c}}
C.aeA.prototype={}
C.azA.prototype={
Z(){this.a1()
this.kZ()},
kZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QQ(p.c,p.d),$async$kZ)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bBk(r.c,q),$async$kZ)
case 6:j=e
i=J
w=7
return A.b(C.KK(t.a.c,q),$async$kZ)
case 7:m.push(new l.aeA(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d7a(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kZ,v)},
b7r(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PV(d,e){return this.ccv(0,e)},
ccv(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cm(A.e9(new C.d79(u,e),!0,null,x.y)),$async$PV)
case 2:t=g
w=3
return A.b(u.kZ(),$async$PV)
case 3:if(t===!0&&u.c!=null)u.c.J(x.q).f.S(D.aPc)
return A.h(null,v)}})
return A.i($async$PV,v)},
Fg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.J(x.q).f.S(D.aP8)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ag7(s.c,s.d),$async$Fg)
case 5:q=e
w=6
return A.b(t.kZ(),$async$Fg)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PV(0,B.d.h7(t.d,new C.d7e(q))),$async$Fg)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QM(p,s.f,r,n,o),$async$Fg)
case 10:m=e
w=11
return A.b(t.kZ(),$async$Fg)
case 11:if(m&&t.c!=null)t.c.J(x.q).f.S(D.aPc)
case 1:return A.h(u,v)}})
return A.i($async$Fg,v)},
Pp(d,e){return this.cnY(0,e)},
cnY(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d7d(t,e),s,null,!0,!0,x.y),$async$Pp)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2r(s.c,s.d,e.a),$async$Pp)
case 4:w=5
return A.b(t.kZ(),$async$Pp)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pp,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bCu(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.I(E.jX.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aC(n,new A.fK(0.7142857142857143,A.p(n,A.x(A.a([D.dt5,B.ac,D.eby,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ko.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcEg(),n,n,n,n,n,n,!1,B.a7))}w=A.n(22)
v=A.I(E.jX.j(0.85),B.q,1.6)
s=A.aC(n,A.p(n,D.bRy,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jX.j(0.6),B.q,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d7f(d),n,n,n,n,n,n,!1,B.a7)
r=A.n(14)
q=B.w.j(0.3)
p=A.I(E.jX.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.be,D.bzS,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f4x,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h7,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bXo,B.n),n,n,n,Am.Mr,D.bsb,n,n,n)
if(o.e)k=D.aca
else k=k.length===0?D.b5C:A.cq(new C.d7g(k))
return A.c8(n,D.aeK,new A.an(B.W,n,B.b1,B.r,A.a([D.aLC,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bCu(d){var w,v,u=this,t=null,s=u.b7r(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.eQ(B.A,new A.a7(300,420,new C.Yu(d.b,s,r,t),t),B.f,B.dv),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aC(t,A.p(t,D.bQS,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b_,B.q,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d77(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f47,t,t,t)
v=r===1?"page":"pages"
return A.aC(t,A.x(A.a([new A.fK(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ko.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d78(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JR.prototype={}
C.Yu.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yU,new C.cFL(m),new C.cFM()),j=m.c,i=D.CC.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m_:B.b9
v=new C.cFN(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e8S,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bbI(j.x,h,l),B.aw),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aj0,8,0.85,2.2),v.$4(D.bwV,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aj0,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bwR,A.b3(l,l,l,new C.bbz(h,l),B.aw),l),0,0,0))
r=A.X(D.axt[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.auN,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.bxl,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGz(l),D.eUU),l,l,l,46,0,l))
return A.p(l,A.bw(D.aaQ,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aaQ,i,new A.a8(B.az,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbI.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eE()
f.dt(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.N()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.W()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.aj()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.W()
j=A.a([],l)
h=new A.aO(k.r,B.ao,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbK().a.snapshot()
o.drawPath((h.e=new A.cC(k)).a,r)
r.delete()}break
default:$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.N()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
au(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bbz.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bS
for(w=e.a,v=e.b,v=[D.eLC,new A.cA([w,0,-1,1]),new A.cA([0,v,1,-1]),new A.cA([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ao,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbK().a.snapshot()
w.drawPath((n.e=new A.cC(s)).a,m)
m.delete()
s=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
au(d){return!d.b.A(0,this.b)}}
C.ui.prototype={}
C.YM.prototype={
T(){return new C.bbG()}}
C.bbG.prototype={
go4(){var w=this.d
return w===$?this.d=this.a.c:w},
gyj(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b5,B.aO),$.aw())}return v},
gaAF(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b5,B.aO),$.aw())}return v},
gaqo(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b5,B.aO),$.aw())}return v},
q(){var w=this,v=w.gyj(0),u=v.U$=$.aw()
v.P$=0
v=w.gaAF()
v.U$=u
v.P$=0
v=w.gaqo()
v.U$=u
v.P$=0
w.a2()},
ar0(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j9(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cZc(this,f,u),e===u,s,s,s,s))}return A.bV(B.bA,r,B.br,6,8)},
awI(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.n(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kH,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go4(),a0=f.gyj(0),a1=a0.a.a,a2=f.gaAF(),a3=a2.a.a,a4=f.gaqo(),a5=d.bc2(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.eQ(B.A,new A.a7(270,370,new C.Yu(a5,d,f.a.e,e),e),B.f,B.dv),e),e,e,e)
a0=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awI("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZB(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awI("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZC(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yU[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b_
q=r.a===q
o=new A.az(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.az,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aC(e,A.x(A.a([p,B.cV,new A.y(t.b,e,new A.H(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZD(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bV(B.bA,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.eC:B.K,2,B.q,-1)
q.push(A.aC(e,A.p(e,A.X(D.axt[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZE(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bV(B.bA,q,B.br,8,8)
a4=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awI("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZF(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dp,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mQ,e,e,e)
m=A.a([],w)
for(l=D.CC.gdL(D.CC),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eC:B.b_
g=r.e===i
o=new A.az(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aC(e,A.x(A.a([j,B.bC,new A.y(i,e,new A.H(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZG(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bV(B.bA,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mQ,e,e,e)
k=f.go4()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fy4,B.ac,d,B.aR,a0,B.R,a2,B.aB,D.fE8,B.O,v,B.aB,D.fye,B.O,q,B.aB,a4,B.aB,p,B.O,m,B.aB,l,A.l0(e,9,""+B.k.V(f.go4().f),36,18,new C.cZH(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.ar0(D.a3O,f.go4().r,new C.cZI(f),D.doq),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.ar0(D.a3b,f.go4().w,new C.cZJ(f),D.dov),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mQ,e,e,e),B.am,f.ar0(D.a36,f.go4().x,new C.cZL(f),D.dq2),B.am,A.iI(e,B.b6,e,B.af,e,new C.cZM(f),e,e,e,D.fsv,f.go4().z),B.by,A.bG(D.fwT,new C.cZN(f,a6),A.bn(B.b6,e,e,e,e,B.ok,e,e,new A.b7(A.n(16),B.Y),e,e,e))],w),e,R.aiy,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGz.prototype={
a4(d,e){var w,v,u,t=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
t.F(new A.b5(0,0))
w=e.a
t.F(new A.ap(w,0))
v=e.b
t.F(new A.ap(w,v))
t.F(new A.ap(w/2,v-12))
t.F(new A.ap(0,v))
t.F(new A.bE())
u=A.N()
u.sar(D.bY3.av(0,new A.a9(0,0,0+w,0+v)))
d.aR(t,u)},
au(d){return!1}}
C.bgW.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.sar(D.bX4.av(0,new A.a9(0,0,a3,a4)))
a5.b0(new A.a9(0,0,a3,a4),w)
v=B.k.dk(a2/112)
u=new A.eE()
u.dt(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cWR[u.aw(9)]
j=u.aw(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bx(i,B.hd)
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sar(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).av(0,i))
d=g.H()
w.drawRRect(A.et(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jX.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c0(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jX.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c0(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.sar(D.bWr.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c0(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jv
d=p.H()
w.drawRect(A.c0(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b94.j(0.72).gp(0)
a5.b0(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sar(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.bg2.j(0.22),B.K],t),a0,a0).av(0,A.bU(new A.v(w,a2),a1)))
a5.af(new A.v(w,a2),a1,a4)},
au(d){return!1}}
C.b9U.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kR(new A.o(A.aq(D.ko,D.bkv,w/4),o,new A.bO(B.Y,new A.az(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.Kp,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aHg,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jX.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qf,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aYX,u,D.bY1,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGz(o),D.eUP),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aU8(p.y,r,G.iC,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iC.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fhX,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iC.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iC.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f94,!0,B.a4,B.zI,B.an,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fhP,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iC.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.ET.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.ET.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.ET.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iC.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XL(A.d3(A.a([A.d3(o,o,o,o,o,o,o,o,o,D.fcb,B.a.ap(k,0,1)),A.d3(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iC.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.x(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iC.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.Kp,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.bwn,A.x(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c_(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Kp,v,D.bYy,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.apm.prototype={
T(){return new C.aD5(A.a([],x._))},
bs(){return this.r.$0()},
pR(){return this.w.$0()},
ge1(){return this.c}}
C.aD5.prototype={
Z(){var w,v
this.a1()
this.vQ()
w=this.a
v=w.c
if(v.length!==0)C.a70(v,w.e,w.d.w)},
vF(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h3u(r,t.e,!1,s.w,new C.dUr(u),null,s),$async$vF)
case 2:w=3
return A.b(u.vQ(),$async$vF)
case 3:return A.h(null,v)}})
return A.i($async$vF,v)},
a_m(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h3u(r,t.e,!0,s.w,new C.dUq(u),null,s),$async$a_m)
case 2:w=3
return A.b(u.vQ(),$async$a_m)
case 3:return A.h(null,v)}})
return A.i($async$a_m,v)},
vQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AJ(q.a.c),$async$vQ)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.dUt(q,p))
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
return A.b(C.Gv(q.a.c).d7(0,B.pS),$async$vQ)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dUu(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dUv(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vQ,v)},
Oo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.J(s).f.S(D.eYs)
w=3
return A.b(C.Gv(t.a.c),$async$Oo)
case 3:r=e
w=4
return A.b(C.fJU(t.a.c,r),$async$Oo)
case 4:q=e
w=5
return A.b(C.Gv(t.a.c),$async$Oo)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dUp(t,p))
o=t.c.J(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.S(A.b2(null,null,null,q?B.dA:B.cU,null,B.r,null,s,null,B.mq,null,null,null,null,null,null,null,null,null,null))
t.a.pR()
case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
HR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ib6(l),$async$HR)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hFD(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZP(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HR)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hmJ(r)
o=Date.now()
n=t.a.c
m=new C.kF(l,r.toUpperCase(),p,!0,B.U,D.Co,new A.S(o,0,!1),0,n,D.tT)
w=5
return A.b(C.a2x(n,m),$async$HR)
case 5:w=6
return A.b(t.vQ(),$async$HR)
case 6:t.a.bs()
t.a.pR()
if(t.c==null){w=1
break}t.Eq(m)
case 1:return A.h(u,v)}})
return A.i($async$HR,v)},
Eq(d){return this.cex(d)},
cex(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Eq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AJ(u.a.c),$async$Eq)
case 2:n=l.rh(k.dJ(f,new C.dUs(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.apg(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Eq)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2x(u.a.c,o),$async$Eq)
case 6:case 5:w=7
return A.b(u.vQ(),$async$Eq)
case 7:u.a.pR()
return A.h(null,v)}})
return A.i($async$Eq,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tR(p)
if(r.e)return A.av(A.mL(q,p?B.bs:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e0:B.c
v=A.n(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bKV,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcdB(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fx(A.p(q,A.x(A.a([u,B.aR,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fFp,r.gaQi(),A.bn(B.bT,q,q,q,q,q,Al.Zr,q,new A.b7(A.n(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bwj,q,q,1/0),15,B.af,1.05,D.a9w,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yC,B.aV,q,q,q,q),q,q,q,new C.dUx(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.yt,B.aV,q,q,q,q),q,q,q,r.gafj(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.ao6,D.fln,r.gaQi(),A.bn(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fx(r.cB5(J.q(r.d,s),o),14,B.af,1,D.a9w,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cB5(d,e){var w=null,v=e.a,u=v?B.e0:B.c,t=A.n(14),s=A.I((v?B.e2:B.bN).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.n(14),p=A.p(w,D.bJZ,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaof(),m=d.d?"":" \xb7 Public",l=d.y===D.kv?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.be,l,A.X(B.N8,v?B.bs:B.bm,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dUw(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.apg.prototype={
T(){return new C.aD2(A.a([],x._),A.aX(x.N),A.b7w())},
bs(){return this.r.$0()},
ge1(){return this.c}}
C.aD2.prototype={
Z(){var w,v,u=this
u.a1()
u.d=u.a.w
u.acc()
w=u.a
v=w.c
if(v.length!==0)C.a70(v,w.e,w.d.w)},
q(){var w=this.w
w.U$=$.aw()
w.P$=0
this.a2()},
a2j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xL("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTS(r),s,null,!0,!0,x.y),$async$a2j)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jm()
t.m(new C.dTT(t,r))
w=4
return A.b(t.vH(),$async$a2j)
case 4:t.a.bs()
t.xL(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2j,v)},
cqW(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dTN(w,f,d,e))},
aSA(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jP(q,q,1,1)
this.w.sp(0,u)},
b9I(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eI(new Float64Array(16))
q.e2(r)
w=q.Cy()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e9(r,u,0,1)
t.jP(v,v,1,1)
t.e9(-r,-u,0,1)
t.iH(0,q)
s.sp(0,t)},
acc(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AJ(u.a.c),$async$acc)
case 2:t=s.rh(r.dJ(e,new C.dTl(u)))
if(t!=null&&u.c!=null)u.m(new C.dTm(u,t))
return A.h(null,v)}})
return A.i($async$acc,v)},
xL(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
vF(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h3u(o,t,!1,r,new C.dTA(u),q.a,s),$async$vF)
case 2:n=A
m=J
w=3
return A.b(C.Gv(u.a.c),$async$vF)
case 3:p=n.rh(m.dJ(e,new C.dTB(u)))
if(p!=null&&u.c!=null)u.m(new C.dTC(u,p))
return A.h(null,v)}})
return A.i($async$vF,v)},
Jm(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vH(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2x(t,s),$async$vH)
case 2:return A.h(null,v)}})
return A.i($async$vH,v)},
a0S(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u1(q,t.a.c)){t.xL("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.icf(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0S)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jm()
t.m(new C.dTM(t,r))
w=4
return A.b(t.vH(),$async$a0S)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0S,v)},
a_A(){return this.cez()},
cez(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.u1(q,t.a.c)){t.xL("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTK(r,new C.tR(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_A)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jm()
t.m(new C.dTL(r,t))
w=4
return A.b(t.vH(),$async$a_A)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_A,v)},
VA(d){return this.bzv(d)},
bzv(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u1(r,t.a.c)){t.xL("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dT9(t,d),r,null,!0,!0,x.P),$async$VA)
case 3:s=f
if(s==null){w=1
break}t.Jm()
t.m(new C.dTa(t,s))
w=4
return A.b(t.vH(),$async$VA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
a2F(d){return this.cDg(d)},
cDg(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dTV(u,d,new C.tR(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2F)
case 2:return A.h(null,v)}})
return A.i($async$a2F,v)},
caS(d){var w=this,v=w.d
v===$&&A.c()
if(C.u1(v,w.a.c))w.O3(d)
else w.a2F(d)},
ahN(d,e){return this.cuV(d,e)},
cuV(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dTP(new C.tR(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahN,v)},
HW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kv?3:5
break
case 3:w=6
return A.b(C.fS9(t.a.c),$async$HW)
case 6:s=e
o=t.a
r=C.hbh(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahN(!s,!r),$async$HW)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bBd(o,t.a.c)){t.xL("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l5(o,"Cancel","Remove",q.y===D.kv?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HW)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOF(t.a.c,t.d.a),$async$HW)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iR(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HW,v)},
a9J(d){return this.bKH(d)},
bKH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9J=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u1(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b6(s,new C.dTb(p))){o=A.T(s)
p.a=A.rh(new A.cO(new A.a_(s,new C.dTc(d),o.k("a_<1>")),new C.dTd(),o.k("cO<1,m>")))}q=p.a
if(q==null)q=d.d
t.Jm()
t.m(new C.dTe(t,s,d,q))
w=3
return A.b(t.vH(),$async$a9J)
case 3:t.xL(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9J,v)},
O3(d){return this.bMR(d)},
bMR(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u1(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2F(d),$async$O3)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dTi(t,d),r,null,!0,!0,x.P),$async$O3)
case 6:s=f
if(s==null){w=1
break}t.Jm()
t.m(new C.dTj(t,s))
w=7
return A.b(t.vH(),$async$O3)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O3,v)},
cBu(){var w=this,v=w.d
v===$&&A.c()
if(!C.u1(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dTU(w))
w.vH()},
Yq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bBd(n,t.a.c)){t.xL("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bo(new A.M(q,t.gc9m(),A.T(q).k("M<1,m>")).c0(0,new C.dTv()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dTw(t,new C.tR(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yq)
case 3:o=e
r.U$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jm()
t.m(new C.dTx(t,p))
w=4
return A.b(t.vH(),$async$Yq)
case 4:t.xL("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yq,v)},
c9n(d){return B.a.i(d.toLowerCase())},
cdm(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u1(v,w)
t=r.d
s=C.i1t(t)
C.iba(q,t.b,u,C.i1s(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dU1(),A.T(l).k("a_<1>")).gM(0)
l=n?B.c_:B.iB
v=A.X(B.a_D,n?B.bs:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Be,A.aL(!1,o,!0,new A.D(B.hP,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dU2(p,d),o,o,o,o,o,o,o),o),new A.D(B.ni,p.bXP(m),o)],u)
if(p.d.y===D.kv){t=B.ry.j(0.15)
s=A.n(12)
r=A.I(B.ry.j(0.45),B.q,1)
q=C.Gt(p.d,p.a.c)
v.push(new A.D(B.xO,A.p(o,A.B(A.a([D.bPe,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.ik,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.u1(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JN("Undo",B.rm,p.gcBt(),m,o,o))
u.push(new C.JN("Family Book",D.bEE,p.gcdl(),m,B.to,o))
if(C.u1(p.d,p.a.c))u.push(new C.JN("Display settings",B.C0,p.gcey(),m,B.aZ,o))
u.push(new C.JN("Sync",B.yt,p.gafj(),m,o,o))
t=p.d
if(t.y===D.kv||C.bBd(t,p.a.c)){t=p.d.y===D.kv?"Remove shared tree":"Delete tree"
u.push(new C.JN(t,B.e7,p.gbKR(),m,B.h2,o))}if(C.u1(p.d,p.a.c))u.push(new C.JN("Add member",B.vW,new C.dU3(p),m,B.bT,o))
v.push(new A.D(R.aib,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaof()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dU4(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_H:Y.N9,o,o,o,o,o)
v.push(A.av(A.hn(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dU5(p),o),o,o,o))}return A.c8(o,l,A.bm(!0,A.x(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bXP(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fy.j(0.35),B.dn,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.ym,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bSi,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafj(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f7p,m,m,m)
r=r.gaof()
p=n.d.gaof()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bC,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a6,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.u1(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bPq,m,m,m,n.gcoi(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.js:B.mz
r=r?"Private":"Public"
r=A.E(n.auE(q,"Privacy",r,n.a.d.w?n.gcAp():m),1)
q=A.E(n.auE(B.yu,"Tree code",n.d.c,new C.dTk(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.auE(D.bGn,"Collaborators",p,n.gc1o()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kv){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aF(!1,B.a1,!0,A.n(999),A.aL(!1,A.n(999),!0,new A.D(B.fN,A.B(A.a([A.X(B.oZ,B.c,m,m,m,14),B.ee,A.d("View only",m,m,m,m,m,m,B.aQq,m,m,m)],o),B.m,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.Fv,A.x(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bWw,B.n),m,m,m,m,m,m,m,1/0)},
auE(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.n(14),A.aL(!1,A.n(14),!0,new A.D(L.ajj,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uO,A.d(f,w,1,B.a2,w,w,w,O.zM,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bea.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bed(s,t),new A.ar(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dz(r,new C.d7k(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d7l(this),A.T(r).k("M<1,t>")))
return new A.D(B.tQ,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JZ.prototype={}
C.FK.prototype={}
C.bec.prototype={
gbi9(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIF.prototype={}
C.bed.prototype={
bMv(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bS
d.bE(new A.v(n,w),new A.v(m,w),v)
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
d.af(new A.v(u,w),9,q)
q=A.N()
q.r=B.bD.gp(0)
d.aR(t,q)},
bMt(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d7F())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b6(a0,new C.d7G(f))
t=new A.M(a0,new C.d7H(f),A.T(a0).k("M<1,L>")).c0(0,new C.d7I()).cJ(0,1/0,B.v7)
w=f.a
d.bE(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lX(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aO(l.r,B.ao,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cW(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cW(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbK().a.snapshot()
r.drawPath((g.e=new A.cC(n)).a,k)
k.delete()}},
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bS
w.e=B.fG
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bMt(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bMv(d,w,q.a,q.b)}},
au(d){return d.b!==this.b}}
C.bhT.prototype={
gc7b(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dla
switch(w.c.a){case 0:return D.cOt
case 1:return D.cZI
case 2:return D.dfp}},
gc7e(){var w=this.c,v=C.hm3(w.w),u=C.hm3(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc7b(),p=t.c,o=I.bC6(p.f),n=t.gc7e(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.ax:B.c,j=A.I(r?B.ax:B.c,B.q,2)
if(o!=null)w=A.tg(B.A,s,B.ci,B.bV,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hZ(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.az,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.FM,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.I(r?B.ax:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fhs,s,s,s),B.f,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.byb,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.n(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a6,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aC(s,new A.a7(84,112,A.x(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,D.b_Q,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bym,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bdh.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bbQ
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
au(d){return d.b!==this.b}}
C.bvC.prototype={
B(d){var w=this,v=null,u=new C.fc6(w),t=w.c,s=t?B.ct:B.c,r=A.n(12),q=u.$3(B.hB,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yr,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bE:B.fe,v,v,v,1,v,v,v,v,v,22),u.$3(B.alI,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dr,v,v,v,B.ag)}}
C.ble.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.q,2),s=w.e,r=x.p
t=A.aC(v,A.p(v,A.x(A.a([A.X(s?K.a_H:Y.N9,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fdO,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fbL,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.eNZ(w),A.T(s).k("M<1,t>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZP.prototype={
T(){return new C.aBu()},
bs(){return this.Q.$0()},
ge1(){return this.w}}
C.aBu.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.c
r.y=t==null?D.y1:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i30(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
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
v.a2()},
Pq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Pq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hbh(p.y,p.w)
w=3
return A.b(A.lh(t.a.w,B.I9),$async$Pq)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZP(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Pq)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hFE(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(An.GE(78,800),$async$Pq)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dny(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Pq,v)},
c7d(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i1(B.o.u(1000*Date.now()),w,D.y1,null,null,null,"","","","","",1,!1,0)
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
s=v.aDz(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a9k(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dnx(r),s,null,!0,!0,x.y),$async$a9k)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9k,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tR(j),h=l.a.e,g=A.T(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dnH(l),g),g.k("J.E"))
h=j?B.e0:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bwG,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hx(A.aL(!1,k,!0,new A.D(B.lS,A.X(B.e7,B.oN,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbHv(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jD:B.iX
t=I.bC6(l.as)
if(l.as==null)s=A.X(B.oR,j?B.bs:B.bm,k,k,k,40)
else s=k
s=A.av(A.aC(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h6(u,t,s,k,42),A.ao(0,A.h6(B.bT,k,D.bJ2,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc7a(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBw(t,"Full name",B.mv,1,1,i,B.m5)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.R,new C.bhR(i,u,new C.dnI(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bqg],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dnJ(),A.T(o).k("M<1,eG<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bqi],q)
B.d.v(q,new A.M(f,new C.dnL(),A.T(f).k("M<1,eG<m?>>")))
o=A.x(A.a([t,B.am,new C.ad_(i,r,"Who is their parent?",p,new C.dnM(l),k,o),B.aB,n,B.am,new C.ad_(i,m,"Who is their spouse / partner?",q,new C.dnN(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBw(q,"Birth date",D.akL,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBw(m,"Birth place",B.a_W,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBw(n,"Date of death (if deceased)",D.amY,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBw(p,"Occupation",B.a0X,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.ad0(i,"Identity",u,k),B.ac,new C.ad0(i,"Family links",o,k),B.ac,new C.ad0(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBw(r,"Notes",B.l_,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBv(i,"Child order",l.ceN(l.at),new C.dnO(l),new C.dnP(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h0N(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dnQ(l):k
B.d.v(r,A.a([B.R,new C.aBv(i,"Visible in tree",u,w,new C.dnR(l),k)],v))}r.push(B.R)
w=j?B.jD:B.iX
u=A.n(14)
t=A.I(j?B.e2:B.bN,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bT,k,B.af,k,new C.dnS(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ahO,k,k,k))
r.push(B.by)
w=j?B.aQ:B.ax
j=j?B.e2:B.bN
r.push(A.B(A.a([A.E(A.dV(B.nE,new C.dnK(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b7(A.n(14),B.Y),new A.az(j,1,B.q,-1),k,k,k,k)),1),B.be,A.E(A.bG(D.eQL,l.gc7c(),A.bn(B.aV,k,k,0,B.c,k,B.cm,k,new A.b7(A.n(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.em(B.hb,k,B.af,h,new A.a7(420,k,A.cd(A.x(r,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.aiE,k,B.ai2,new A.b7(g,B.Y),k,k)},
ceN(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ad0.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jD:B.iX,s=A.n(16)
return A.x(A.a([new A.D(D.aj3,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e2:B.bN,B.q,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhS.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e0:B.c,r=A.n(12),q=A.I((t?B.e2:B.bN).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.U,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eA,u,B.vz,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cx,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ad_.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e0:B.c,s=A.n(12),r=A.I((u?B.e2:B.bN).j(0.85),B.q,1),q=A.X(B.rg,u?B.bs:B.bm,v,v,v,v),p=A.l(v,v,u?B.aQ:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a6,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e0:B.c
return A.p(v,new A.DA(A.Sp(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cx,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bhR.prototype={
B(d){var w=new C.dnT(this)
return A.B(A.a([w.$3(D.a_f,"Male",B.NT),B.ab,w.$3(D.ajW,"Female",B.NG),B.ab,w.$3(D.y1,"Other",B.nn)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBv.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jD:B.iX,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHH(u,B.yr,w.f,v),B.bp,new C.aHH(u,B.hB,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ej,v,v,v)}}
C.aHH.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.e0:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bT
else t=(s.c.a?B.bs:B.bm).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.ad1.prototype={
bQl(d){switch(d.a){case 0:return B.bT
case 1:return B.bD
case 2:return B.cX}},
bQm(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWW(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A9(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e0:B.c
u=A.n(12)
t=A.I((w?B.e2:B.bN).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bT,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.ax,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.xL,p,p,1/0)},
adP(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jD:B.iX,s=A.n(16),r=A.I(v?B.e2:B.bN,B.q,1)
return A.x(A.a([new A.D(D.aj3,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hqP(r,q),o=q.c,n=t.bQl(o),m=I.bC6(q.f),l=t.e.a,k=l?B.e0:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kv?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a6,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h6(u,m,m==null?A.X(B.oR,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ek,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bQm(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.ms,s,s,s),s,s,s)
u=x.p
i=A.a([t.A9("Full name",i,B.mv)],u)
if(p>0)i.push(t.A9("Child order","#"+p,B.NM))
r=A.a([h,B.au,r,B.aR,l,B.R,v,B.by,t.adP("Identity",i),B.ac,t.adP("Life details",A.a([t.A9("Birth date",q.w,D.akL),t.A9("Birth place",q.x,B.a_W),t.A9("Date of death",q.y,D.amY),t.A9("Occupation",q.z,B.a0X)],u)),B.ac,t.adP("Family links",A.a([t.A9("1. Parent",t.aWW(q.d),B.G_),t.A9("2. Spouse",t.aWW(q.e),B.NF)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adP("Notes",A.a([t.A9("Notes",q,B.l_)],u))],u))
r.push(B.by)
r.push(A.bG(B.Jw,new C.do2(d),A.bn(B.aV,s,s,s,s,s,B.cm,s,new A.b7(A.n(14),B.Y),s,s,s)))
return A.eL(s,k,new A.cT(B.lE,A.cd(A.x(r,B.ai,s,B.e,B.N,0,B.p),B.r,s,B.y,s,B.xR,s,s,B.ah),s),s,s,s,B.Fy,B.d1,s,new A.b7(j,B.Y),s)}}
C.JN.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xU,A.hx(A.aF(!1,B.a1,!0,A.n(8),A.aL(!1,A.n(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.apj.prototype={
eS(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.T(w).k("M<1,a5<m,@>>")
w=A.C(new A.M(w,new C.c8N(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j9(w,new C.c8O(),t,x.U))
return s}}
C.apk.prototype={
T(){return new C.aD4(A.a([],x.bF))},
gde(){return this.c}}
C.aD4.prototype={
Z(){this.a1()
this.Jt()},
Jt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c8R(t.a.c),$async$Jt)
case 3:r=e
w=4
return A.b(C.AJ(t.a.c),$async$Jt)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qW(q,new C.dUe(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dUf(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jt,v)},
yk(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.S(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Kd(d,e){return this.cDR(d,e)},
cDR(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Kd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dUj(q,e))
t=3
w=6
return A.b(d.$0(),$async$Kd)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dUk(q))
$.eU.mt()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kd,v)},
Xe(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p9(r,s.c,s.e),$async$Xe)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kd(new C.dUb(t),"Preparing download\u2026"),$async$Xe)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xe,v)},
Xi(d){return this.bOj(d)},
bOj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p9(r,s.c,s.e),$async$Xi)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Kd(new C.dUc(t,d),"Preparing file\u2026"),$async$Xi)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xi,v)},
afG(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xb.c7().M_(B.QP,B.tU,!0),$async$afG)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
o=A.js(o,0,null)
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
case 6:u=A.GD()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afG,v)},
XU(d){return this.bYJ(d)},
bYJ(d){var w=0,v=A.j(x.H),u=this
var $async$XU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Kd(new C.dUd(u,d),"Restoring family trees\u2026"),$async$XU)
case 2:return A.h(null,v)}})
return A.i($async$XU,v)},
XT(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afG(),$async$XT)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XU(s),$async$XT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XT,v)},
a1I(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p9(r,s.c,s.e),$async$a1I)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kd(new C.dUi(t),"Creating QR code\u2026"),$async$a1I)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1I,v)},
a1j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CT()){t.yk("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cm(A.e9(new C.dUg(),!0,null,x.N)),$async$a1j)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XU(r),$async$a1j)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1j,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AH:B.iB,m=o?D.agk:B.aQ,l=o?B.aJ:B.bN,k=o?B.aQ:B.ax,j=new C.d7J(n,m,l,k,o?B.bK:B.bm)
l=A.aH(p,p,p,p,A.X(B.eE,k,p,p,p,20),p,p,p,new C.dUm(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d7h(!0,B.ju,B.aN,B.aN,q.r?p:q.gcuJ(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcqR()
t.push(A.E(C.d7h(!s,B.j2,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d7h(!1,B.hC,B.aV,B.bT,q.r?p:q.gbOc(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d7h(!1,M.yx,B.aF,B.aM,q.r?p:q.gbYG(),j,s,"Upload backup file"),1))
l=A.a([new C.beb(v,l,p),B.kF,new C.ach(j,"QR restore",p),B.R,t,B.d7,new C.ach(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kF,new C.ach(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dUn(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.Zn,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([K.aOR,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Bk,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d7J.prototype={}
C.beb.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kb,28)],x.V)
t=A.ao(p,A.X(B.ub,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bRQ,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.ol,A.E(A.x(A.a([D.fmm,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bZJ,B.n),p,p,p,p,p,p,p,p)}}
C.ach.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.be9.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aN.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aN.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eH(A.de(new A.D(E.Z0,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rc,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cx,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bee.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eH(new A.D(B.eR,A.B(A.a([A.p(v,D.bR3,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.rc,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hC,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.a_9.prototype={
T(){return new C.aD3()},
gde(){return this.c}}
C.aD3.prototype={
Z(){this.a1()
this.a8R()},
a8R(){var w=0,v=A.j(x.H),u=this,t
var $async$a8R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b1s(u.a.c,B.D1),$async$a8R)
case 2:t=e
if(u.c!=null)u.m(new C.dU6(u,t))
return A.h(null,v)}})
return A.i($async$a8R,v)},
ah3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ah3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dU7(q))
t=4
p=A.hcW(q.a.d,B.D1)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arx(n.e,m,l,B.D1,p,n.f),$async$ah3)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dU8(q))
q.c.J(x.q).f.S(D.eZC)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.eg(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dU9(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah3,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jg:B.pL,n=p?B.id:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fC9,q,q,q,1,q,!0)
w=A.n(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pT(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.by,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bq,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcqz()
if(u)u=B.J0
else u=A.X(r.e===!0?B.ho:B.akK,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eA(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fR,q,q,q,new A.az(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zU,new C.dUa(d),A.bn(B.aV,q,q,q,q,B.fR,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_a.prototype={
T(){return new C.bjl(A.ze(B.xA,B.nL,B.ui))}}
C.bjl.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fud,w,w,w,1,w,!0),B.w,A.zd(this.d,B.bV,new C.dUo(this,d)),w,!1,!1,w,w)}}
C.aYl.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Qi,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lB.prototype={}
C.a64.prototype={
T(){return new C.bj1(null,null)}}
C.bj1.prototype={
Z(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tK,v,1,v,w)
w.e=A.bj(v,B.pR,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bv(d){var w,v,u=this
u.bG(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.buQ()},
B(d){var w,v,u=this,t=B.d.dM(D.a3F,new C.dFA(u),new C.dFB())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cuf(A.c6(new A.ha(A.a([w,v],x.dS)),new C.dFC(u,t),null),!0)}}
C.bj0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0k(d,e)
break
case"house":p.m5(d,e,D.d3r)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdB()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.ma(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AS(d,e,12)
p.xV(d,e,B.lf,5,14)
break
case"grocery":p.cfw(d,e)
break
case"calculator":p.cfd(d,e)
break
case"lumber":p.cfE(d,e)
break
case"kitchen":p.cfz(d,e)
break
case"landscape":p.m5(d,e,D.d3Y)
s=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.F(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.F(new A.cW(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.F(new A.cW(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.F(new A.ap(t,w))
s.F(new A.ap(0,w))
s.F(new A.bE())
w=A.N()
w.r=B.eB.j(0.85).gp(0)
d.aR(s,w)
p.AS(d,e,8)
p.xV(d,e,B.j_,4,18)
break
case"plumbing":p.cfN(d,e)
break
case"electrical":p.m5(d,e,D.deG)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.b0(new A.a9(0,0,0+e.a,0+e.b),u)
p.ma(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.ma(d,e,B.lJ.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AS(d,e,10)
break
case"store":p.cfX(d,e)
break
case"paint_remodel":p.cfI(d,e)
break
case"roofing":p.cfP(d,e)
break
case"warehouse":p.cg3(d,e)
break
case"vehicles":p.cg1(d,e)
break
case"farm":p.cfq(d,e)
break
case"restaurant":p.cfO(d,e)
break
case"tools":p.cg_(d,e)
break
case"wallet":p.cg2(d,e)
break
case"concrete":p.cfj(d,e)
break
case"blueprint":p.cfb(d,e)
break
default:p.b0k(d,e)}},
m5(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.sar(new A.a8(B.az,B.aC,B.x,f,null,null).av(0,v))
d.b0(v,w)},
ma(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gdB()/2-h
$.W()
w=A.N()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c0(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xV(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdB()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AS(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b0k(d,e){var w,v=this
v.m5(d,e,D.ddb)
w=v.c
v.ma(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.ma(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bMp(d,e,B.i1,w)
v.xV(d,e,B.c.j(0.7),6,8)},
bMp(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c0(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cfw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m5(d,e,D.cke)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d1K[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.ma(d,e,B.c.j(0.35),w,16)
j.xV(d,e,B.j_,5,12)},
cfd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m5(d,e,D.ckl)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdB()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h3(g,g,g,g,g,B.a4,B.c6,g,B.dP,B.c5)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d5z[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saX(0,new A.es(r,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a4(d,new A.v(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ckn[o]
l=B.km.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saX(0,new A.es(m,g,g,B.cO,g,g,g,g,g,g,new A.H(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.en()
p.a4(d,new A.v(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.ma(d,e,B.c.j(0.35),w*1.5,14)
h.ma(d,e,B.eC.j(0.55),-v*3.141592653589793*2,8)
h.ma(d,e,B.AI.j(0.4),r*2.8,22)
h.xV(d,e,B.pA,8,10)
h.AS(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cfE(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,A_.awm)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hF)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fJ,B.oF,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.et(p),n)
n.delete()}m.ma(d,e,B.fJ.j(0.35),w,15)
m.AS(d,e,8)},
cfz(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m5(d,e,D.d2e)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.E(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.E(r*0.13,0.7)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.ma(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
j.xV(d,e,B.qP,4,14)},
cfN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m5(d,e,D.cSg)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xV(d,e,B.oL,6,12)
l.ma(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cfX(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m5(d,e,D.cxP)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.it)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fc,B.bM,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}n.ma(d,e,B.c.j(0.3),w,16)
n.AS(d,e,8)
n.xV(d,e,B.vd,5,13)},
cfI(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.cY5)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.he)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.iy,B.ds,B.bM,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.et(p),o)
o.delete()}this.ma(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cfP(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.cVC)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xV(d,e,B.cr,7,11)},
cg3(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.cAw)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.hF)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cr,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}this.ma(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cg1(d,e){var w,v,u,t,s,r,q,p,o
this.m5(d,e,D.diA)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hF)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.et(q),o)
o.delete()}this.AS(d,e,6)},
cfq(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.d0R)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lJ.j(0.75).gp(0)
d.af(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hk.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.ma(d,e,B.lJ.j(0.35),w,14)},
cfO(d,e){var w,v,u,t,s,r,q,p,o=this
o.m5(d,e,D.d3g)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ch(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c0(r),p)
p.delete()}o.xV(d,e,B.qP,5,16)
o.AS(d,e,7)},
cg_(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,D.dga)
w=m.c
v=w*3.141592653589793
m.ma(d,e,B.oF.j(0.55),v*3,10)
m.ma(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oF.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cg2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m5(d,e,D.djb)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.it)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.j_,B.lJ,q).gp(0)
n=p.H()
s.drawRRect(A.et(o),n)
n.delete()}m.AS(d,e,9)
m.ma(d,e,B.c.j(0.4),w*2.2,12)},
cfj(d,e){var w,v,u,t,s,r,q,p,o,n
this.m5(d,e,D.d8i)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.v(v,u),34)
$.W()
s=A.N()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.fa(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bN.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cfb(d,e){var w,v,u,t,s,r,q,p
this.m5(d,e,D.d4g)
$.W()
w=A.N()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.E(t*0.85,1)
$.W()
u=A.N()
u.r=B.ds.j(0.45).gp(0)
d.b0(new A.a9(0,p,0+v,p+6),u)
this.ma(d,e,B.lf.j(0.45),-t*3.141592653589793*2,11)},
au(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.ase.prototype={
ZZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPB(),$async$ZZ)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8k(s),$async$ZZ)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZZ,v)},
afH(d){return this.cii(d)},
cii(d){var w=0,v=A.j(x.H),u=this,t
var $async$afH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ibk(d),$async$afH)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afH,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jD:B.iX
w=x.p
v=A.a([C.aPZ(!0,B.qH,1/0,B.q_,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c_(new A.bI(B.b0,t,t,new A.D(B.vt,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.axj,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b0,B.b4,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bKO,D.fiK,new C.cgl(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jG,t,t,t,t,B.ce)),1),B.ab,A.E(A.eA(D.bT3,D.fxi,this.gc9k(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jG,t,t,D.aZn,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fK(1.7777777777777777,A.aF(!1,B.a1,!0,B.qH,new A.an(B.W,t,B.b1,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aL0.prototype={
aT(){this.b3()
this.b_()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
C.aSV.prototype={}
C.aSU.prototype={}
C.aQU.prototype={}
C.YO.prototype={
T(){return new C.ayk()}}
C.ayk.prototype={
Z(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b5,B.aO)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
K3(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.J(x.q).f.S(D.f_6)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aSV(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e0:B.c,k=A.n(20),j=A.p(n,D.bSJ,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.be,i,A.aH(n,n,n,n,A.X(B.cD,m?B.bs:B.bm,n,n,n,n),n,n,n,new C.cZZ(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cx,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hdb(new C.d__(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a6,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jD:B.iX
r=A.n(12)
q=A.n(12)
p=m?B.e2:B.bN
t=A.aM(n,B.U,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dh),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d_0(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.J7,n,n,n,n)
u=m?B.aQ:B.ax
m=m?B.e2:B.bN
return A.eL(n,l,new A.cT(B.lE,A.cd(A.x(A.a([j,B.aR,i,B.au,w,B.O,v,B.aR,t,B.by,A.B(A.a([A.E(A.dV(B.df,new C.d_1(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b7(A.n(12),B.Y),new A.az(m,1,B.q,-1),n,n,n,n)),1),B.at,A.E(A.bG(D.fxx,o.ga22(),A.bn(B.aV,n,n,n,B.c,n,B.cm,n,new A.b7(A.n(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.N,0,B.p),B.r,n,B.y,n,B.Bl,n,n,B.ah),n),n,n,n,X.Bm,B.d1,n,new A.b7(k,B.Y),n)}}
C.YN.prototype={
T(){return new C.ayj()}}
C.ayj.prototype={
Z(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
K3(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.J(x.q).f.S(D.eXN)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aSU(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e0:B.c,n=A.n(20),m=A.p(q,D.bPj,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.be,l,A.aH(q,q,q,q,A.X(B.cD,p?B.bs:B.bm,q,q,q,q),q,q,q,new C.cZV(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.akw,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jD:B.iX
t=A.n(12)
s=A.n(12)
r=p?B.e2:B.bN
v=A.aM(q,B.U,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dh),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cZW(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kG,q,q,q,q)
w=p?B.aQ:B.ax
p=p?B.e2:B.bN
return A.eL(q,o,new A.cT(B.lE,A.cd(A.x(A.a([m,B.aR,l,B.aB,v,B.by,A.B(A.a([A.E(A.dV(B.df,new C.cZX(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b7(A.n(12),B.Y),new A.az(p,1,B.q,-1),q,q,q,q)),1),B.at,A.E(A.bG(D.fEp,this.ga22(),A.bn(B.bT,q,q,q,B.c,q,B.cm,q,new A.b7(A.n(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.N,0,B.p),B.r,q,B.y,q,B.Bl,q,q,B.ah),q),q,q,q,X.Bm,B.d1,q,new A.b7(n,B.Y),q)}}
C.Yl.prototype={
T(){return new C.ax3()}}
C.ax3.prototype={
Z(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.as(B.as,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b5,B.aO),w)
v.f!==$&&A.aP()
v.f=new A.as(B.as,w)
v.r!==$&&A.aP()
v.r=new A.as(B.as,w)},
q(){var w,v=this,u=v.d
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
v.a2()},
gJo(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiT(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb3e(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNZ(d){var w,v=B.k.D(this.gJo()+d,0.25,999999),u=B.k.jb(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saX(0,u)
this.m(new C.cxx())},
axi(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jD:B.iX,s=A.n(14),r=A.n(14)
u=u?B.e2:B.bN
return A.bs(w,new A.b4(4,s,B.dh),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.n(14),B.aaW),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c9l(d,e,f){return this.axi(d,e,f,null)},
K3(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiT()<=0){s.c.J(x.q).f.S(D.f0Z)
return}r=s.c
r.toString
v=s.gJo()
u=s.gaiT()
t=s.gb3e()
A.a6(r,!1).O(new C.aQU(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=n?B.e0:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bT.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bIL,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cx,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.be,h,A.aH(o,o,o,o,A.X(B.cD,n?B.bs:B.bm,o,o,o,o),o,o,o,new C.cxD(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.U,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axi(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NS),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.J7,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jD:B.iX
t=A.n(14)
s=A.I(n?B.e2:B.bN,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yr,n?B.aQ:B.ax,o,o,o,20),o,o,o,new C.cxE(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bUB,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxF(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hB,n?B.aQ:B.ax,o,o,o,20),o,o,o,new C.cxG(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.N,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axi(m,"Amount","0.00",B.hR),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxH(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cYz,new C.cxI(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.O,s,B.ac,A.bV(B.bA,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c9l(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cxJ(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kG,o,o,o,o)],w))}i.push(B.aR)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJo()===B.k.jb(p.gJo())?B.k.N(p.gJo()):p.gJo()
s=p.gb3e()
r=A.AL(p.gaiT())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCT(p.gJo()*p.gaiT(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jo,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.e2:B.bN
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b7(j,B.Y),new A.az(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cxK(d),h),1),B.at,A.E(A.dn(D.ao_,D.fAo,p.ga22(),A.bn(B.aV,o,o,0,B.c,o,B.cm,o,new A.b7(A.n(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eL(o,l,new A.cT(W.abk,A.cd(A.x(i,B.ai,o,B.e,B.N,0,B.p),B.r,o,B.y,o,Ad.ra,o,o,B.ah),o),o,o,o,B.MA,B.d1,o,new A.b7(k,B.Y),o)}}
C.a0V.prototype={
T(){return new C.bvu()}}
C.bvu.prototype={
Z(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b5,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e0:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.ax,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jD:B.iX
v=A.aM(s,B.U,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.n(12),B.dh),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fbz(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dV(B.df,new C.fbA(d),s),1)
r=A.bn(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eL(s,q,new A.D(B.Bl,A.x(A.a([o,B.aB,v,B.aR,A.B(A.a([u,B.at,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.fbB(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.N,0,B.p),s),s,s,s,s,B.d1,s,new A.b7(p,B.Y),s)}}
C.abk.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Fx.prototype={
T(){return new C.bvs(null,null)}}
C.bvs.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,D.bqQ,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bxd()},
gbyG(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bT,B.aZ],x.O)
case 2:return A.a([B.bv,B.aV,B.aZ],x.O)
case 3:return A.a([B.aN,B.cb,B.jY],x.O)
case 4:return A.a([B.hm,B.bT,B.fd],x.O)
case 0:return A.a([B.aV,B.bT,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ex(A.c6(v,new C.fbx(this,new C.tR(w.ax.a===B.I)),null),null)}}
C.awX.prototype={
T(){return new C.bvt(null,null)}}
C.bvt.prototype={
Z(){var w,v=this
v.a1()
w=A.bj(null,B.nb,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bxe()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.fby(this),null)}}
C.bvr.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iN(v))
w=A.N()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aE(v,w)
w=A.N()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aR(u,w)
w=A.x9(u)
t=A.a([],x.f5)
w=new A.vD(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jY('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hp(w,r)
w.jz()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRs(d,q,r,o,0,0.2,4.2,0.92)
p.aRs(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRs(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hyP(e.a.a,e,t,t+f*i,!0),r=A.bBg(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bS
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Hd,null).av(0,r))
d.aR(s,w)},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aNb.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.aNc.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.tR.prototype={}
C.asd.prototype={
T(){return new C.aEA()},
ge1(){return this.c}}
C.aEA.prototype={
Z(){var w=this
w.a1()
w.d=w.a.d
w.agy()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.L9(w,v)
this.a2()},
agy(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bBn(t.c,t.d.a),$async$agy)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eL8(u,s))
return A.h(null,v)}})
return A.i($async$agy,v)},
PQ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eL_(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.L9(t,s),$async$PQ)
case 2:if(u.c!=null)u.m(new C.eL0(u))
return A.h(null,v)}})
return A.i($async$PQ,v)},
Ql(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ql=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eL6(t,new C.tR(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Ql)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8k(q),$async$Ql)
case 6:case 5:t.m(new C.eL7(t,r))
w=7
return A.b(t.PQ(),$async$Ql)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ql,v)},
Vu(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ib5(r),$async$Vu)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eKV(t,new C.r_(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PQ(),$async$Vu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vu,v)},
cen(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hqL(t,new C.eKZ(u),w,v)},
aaE(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.az(v,2.5,B.q,-1),B.Y,B.Y,new A.az(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aZ9,w,w,B.n),w,22,w,w,w,w,w,22)},
a9I(d){return this.bKE(d)},
bKE(d){var w=0,v=A.j(x.H),u=this
var $async$a9I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eKY(u,d))
w=2
return A.b(u.PQ(),$async$a9I)
case 2:return A.h(null,v)}})
return A.i($async$a9I,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.c_:B.iB,d=A.n(8),a0=A.X(Q.a_E,f?B.bs:B.bm,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.FF,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a6,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eL9(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b1,B.r,A.a([A.bw(A.n(22),C.aPZ(!0,A.n(22),1/0,B.q_,g,d,1/0),B.aq),A.ao(10,A.dn(D.bNl,D.fCG,h.gb16(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b1,B.r,A.a([C.aPZ(!0,A.n(16),1/0,B.Nk,g,r.c,1/0),A.c_(g,new A.o(g,g,g,g,g,new A.a8(B.b0,B.b4,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.aaE(!0),g,g,8,g,8,g),A.ao(g,A.cv_(h.aaE(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cv_(h.aaE(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cv_(h.aaE(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bJk,D.fwh,h.gb16(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bWg,B.n),g,g,g,g,B.lS,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.b8C,B.nS,B.h6],u):A.a([B.aZ,B.aV,B.bT],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.jJ,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h7,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCT(h.d.gwV(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cx,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.I(B.fW.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aN.j(0.28),B.cJ,14)],t)
j=B.aN.j(0.22)
i=A.n(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bvr,A.B(A.a([o,B.at,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eH(new A.D(Ai.Bg,A.x(A.a([A.p(g,D.anA,B.f,g,g,new A.o(j,g,A.I(B.aN.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fF,D.flr],a1),B.m,g,B.e,B.N,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcem(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.az,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aR,w,B.O,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ak.a1i,D.fjl,h.gbz8(),A.bn(B.aV,g,g,g,B.c,g,B.ik,g,new A.b7(A.n(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e0:B.c
v=A.n(14)
u=A.I(f?B.e2:B.bN,B.q,1)
t=A.X(B.a_Z,f?B.bs:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rb,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eLa(h,new C.tR(f)),A.T(w).k("M<1,t>")))
if(h.e)d.push(new A.D(B.B9,A.av(A.mL(g,f?B.bs:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bm(!0,A.x(A.a([new A.D(B.Be,a0,g),A.E(A.cd(A.x(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xS,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bCN(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e0:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b0V,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.hS:B.ha,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcTW()
v=A.AL(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.F,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bT.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bCT(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h8,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DZ(A.B(A.a([m,A.E(new A.D(B.ahH,A.B(A.a([l,B.be,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cD,(r?B.bs:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eKW(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b_M,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.adm.prototype={
El(d){return this.bM1(d)},
bM1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$El=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p9(d,o,!1),$async$El)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ac.B7,null,x.H),$async$El)
case 4:s=t.d
w=5
return A.b(C.fIW(!0,o,s),$async$El)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gs(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$El)
case 6:p=f
w=7
return A.b(A.p8(o,!1),$async$El)
case 7:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$El,v)},
a__(d){return this.cuK(d)},
cuK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a__=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p9(d,s,!1),$async$a__)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hE(d,new C.as7(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p8(s,!1),$async$a__)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a__,v)},
PR(d){return this.cqM(d)},
cqM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aGK,!0,"NgmyWorksheetProjectScan",x.N),$async$PR)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCU(s),$async$PR)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.J(x.q).f.S(D.f06)
w=1
break}q=C.h38(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dS(p,x.H),$async$PR)
case 5:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PR,v)},
a_0(d){return this.cCM(d)},
cCM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bCr(),$async$a_0)
case 3:s=f
if(s==null){w=1
break}r=C.h38(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dS(q,x.H),$async$a_0)
case 4:if(d.e==null){w=1
break}d.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_0,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tR(u),s=w.d.d.length,r=u?B.e0:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kb,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vA,A.p(v,A.x(A.a([w.cti(d,t,s),new A.D(D.buQ,A.x(A.a([w.b49(t,"QR restore"),B.R,A.B(A.a([w.b_3(t,!0,B.ju,B.aN,B.aN,new C.eLc(w,d),"Show to scan","QR code"),B.at,w.axj(t,B.j2,B.b6,B.bu,new C.eLd(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b49(t,"Backup files"),B.R,A.B(A.a([w.axj(t,B.hC,B.aV,B.bT,new C.eLe(w,d),"Full copy","Backup file"),B.at,w.axj(t,M.yx,B.aF,B.aM,new C.eLf(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.N,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cti(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f1,B.cT,B.fy],k):A.a([B.aZ,B.aV,B.bT],k)
w=A.ao(l,A.X(B.ub,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.n(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPZ(!0,A.n(13),64,D.bEx,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aRp,l,l,l)
r=C.bCT(r.gwV(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.bve,A.x(A.a([v,A.B(A.a([s,B.eo,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fE,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.eLb(d),l,l,l,A.nB(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aOG,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.az,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b49(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_3(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.agk:B.aQ
if(e)w=B.aN.j(o?0.45:0.35)
else{w=o?B.e2:B.bN
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aN.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rc,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eH(new A.D(E.Z0,A.x(A.a([t,B.ac,u,B.bC,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cx,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
axj(d,e,f,g,h,i,j){return this.b_3(d,!1,e,f,g,h,i,j)}}
C.as7.prototype={
T(){return new C.bkI()}}
C.bkI.prototype={
Z(){this.a1()
this.aer()},
aer(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aer=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCV(p.c,p.d),$async$aer)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eKQ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eKR(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aer,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AH:B.iB,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eE,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eKS(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zG],u),B.m,h,B.e,B.j,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f1,B.cT,B.fy],s):A.a([B.aZ,B.aV,B.bT],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dj,B.L,h,h)
p=C.bCT(p.gwV(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fE,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.az,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Zm,h,h,1/0)
t=g?D.bi2:B.c
q=A.n(24)
p=A.I(w?B.aN.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7Y,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ebU)
else{m=A.n(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pT(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aR)
n=w?B.aN:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.I((w?B.aN:B.aV).j(0.35),B.q,1)
k=w?B.NC:B.O9
k=A.X(k,w?B.aN:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a6,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.ik,h,h,h))
return A.c8(h,f,A.bm(!0,A.x(A.a([new A.D(A7.MM,e,h),A.E(A.cd(A.x(A.a([s,B.aR,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tS,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aiP,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.asc.prototype={
T(){return new C.aEz(A.ze(B.M3,B.nL,B.ui))}}
C.aEz.prototype={
q(){this.d.q()
this.a2()},
aM_(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iR(w,d)},
cac(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.i8Z(t)
if(s!=null){this.aM_(s)
return}r=C.hhK(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aM_(B.a.i(B.a.b5(r,B.a.cK(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.X(u.f?B.rh:A2.NI,t,t,t,t,t),t,t,t,new C.eKU(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AH,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fwa,t,t,t,1,t,!0),q=A.zd(u.d,B.bV,u.gcab()),p=A.n(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b1,B.r,A.a([q,p,A.ao(32,A.p(t,D.fuY,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jo,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJm.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.NY.prototype={
T(){return new C.aEB(D.aad,A.a([],x.D))},
bs(){return this.r.$0()},
ge1(){return this.c}}
C.aEB.prototype={
gcAF(){return J.bE2(this.e,0,new C.eLC())},
Z(){this.a1()
$.aW.bU$.push(this)
this.vE()},
q(){$.aW.hL(this)
this.a2()},
j6(d){if(d===B.fw)this.vE()},
vE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CS(q.a.c).d7(0,B.k2),$async$vE)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eLy(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eLz(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vE,v)},
HQ(d){return this.bIN(d)},
bIM(){return this.HQ(null)},
bIN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ib7(l,d),$async$HQ)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lk(l,r,q,D.d8v,new A.S(Date.now(),0,!1))
w=4
return A.b(C.L9(t.a.c,p),$async$HQ)
case 4:o=f
w=5
return A.b(t.vE(),$async$HQ)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.J(x.q).f.S(D.eYg)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.J(q).f.S(D.f_0)
else n.J(q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Ep(m)
case 1:return A.h(u,v)}})
return A.i($async$HQ,v)},
Ep(d){return this.ce8(d)},
ce8(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ep=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.asd(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ep)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.L9(u.a.c,t),$async$Ep)
case 5:case 4:w=6
return A.b(u.vE(),$async$Ep)
case 6:return A.h(null,v)}})
return A.i($async$Ep,v)},
vq(d){return this.bYL(d)},
bYL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bCr(),$async$vq)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aGK,!0,"NgmyWorksheetProjectScan",x.N),$async$vq)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCU(q),$async$vq)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.J(x.q).f
r.S(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h38(s)
w=15
return A.b(C.L9(t.a.c,p),$async$vq)
case 15:o=f
w=16
return A.b(t.vE(),$async$vq)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.J(x.q).f.S(D.f_5)
w=1
break}r.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Ep(p)
case 1:return A.h(u,v)}})
return A.i($async$vq,v)},
NG(d){return this.bHs(d)},
bHs(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eLj(d),s,null,!0,!0,x.y),$async$NG)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oH(t.a.c,A.a([],x.D)),$async$NG)
case 6:w=7
return A.b(t.vE(),$async$NG)
case 7:s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.eYl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NG,v)},
cel(d){var w=this.c
w.toString
A.bS(B.K,null,new C.eLs(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4L(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jD
else w=B.c
v=A.n(16)
u=A.I(p?B.e2:B.bN,B.q,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.x(A.a([s,B.ac,t,B.bC,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vz,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_v(d,e){return this.ce9(d,e)},
ce9(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_v=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bS(B.K,null,new C.eLn(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_v)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hqL(r,new C.eLo(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NI(d,e),$async$a_v)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_v,v)},
b1I(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.av
else t=h.a?B.aQ:B.ax
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.Bk,A.B(A.a([s,B.be,t,A.X(B.ey,w?B.bs:B.bm,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cl0(d,e,f,g,h,i){return this.b1I(!1,d,e,f,g,h,i)},
NI(d,e){return this.bHC(d,e)},
bHC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l5(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NI)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bB9(t.a.c,d.a),$async$NI)
case 6:w=7
return A.b(t.vE(),$async$NI)
case 7:r=t.c
if(r==null){w=1
break}r.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NI,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tR(o),m=o?B.c_:B.iB
if(q.f)o=D.b6v
else{w=q.bBW(n)
v=q.bXQ(n)
u=q.gbz2()
if(o)t=B.jD
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ac,v,B.aR,new C.Fx(A.p(p,A.B(A.a([q.aAR(N.Nj,"Projects",n,D.aad),q.aAR(B.vM,"Cashier",n,D.aWz),q.aAR(B.G_,"Family Tree",n,D.hax)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ek,0.95,u,p),B.by],r)
w=q.d
if(w===D.aad){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.ax,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.awX(q.gaQc(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.cl2(n)],r))}else{o=q.a
if(w===D.aWz)u.push(new C.aoe(o.c,n,p))
else{w=q.r
u.push(new C.apm(o.c,o.d,o.e,o.f,new C.eLF(q),new C.eLG(q),new A.cx(w,x.b4)))}}o=A.cd(A.x(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.MG,p,p,B.ah)}return A.c8(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bBW(d){var w=null,v=A.n(8),u=d.a,t=A.X(Q.a_E,u?B.bs:B.bm,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kV,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eLg(this),w,w,w,w,w,w,w)},
gbz2(){switch(this.d.a){case 0:return D.a9v
case 1:return D.h0S
case 2:return D.a9w}},
bXQ(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cB,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bP9,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bzA,A.aF(!1,B.a1,!0,w,A.aL(!1,A.n(12),!0,A.p(w,D.bME,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eLk(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.n(12)
return new C.Fx(A.p(w,A.x(A.a([new A.D(E.Z6,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AL(this.gcAF()),w,w,w,w,w,w,D.ffN,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vy,B.jo,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.h0R,w)},
aAR(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.K,q=A.n(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bm
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.ee,new A.dq(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iF,u,u,u,B.FG,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eLB(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
cl2(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e0:B.c
u=A.n(15)
t=A.p(p,D.bMK,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bYJ,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fx(A.p(p,A.x(A.a([t,B.d7,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRO(B.j2,"Scan QR",new C.eLv(q),d),1),B.at,A.E(q.aRO(M.yx,"Upload file",new C.eLw(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fGh,q.gaQc(),A.bn(B.aV,p,p,p,B.c,B.fR,p,p,new A.b7(A.n(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bwi,1.05,D.a9v,p)}w=J.b6(q.e,new C.eLx(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fx(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a9v,p)},
aRO(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.aZ,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.fed,B.L,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ahz,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
cl1(d,e){var w,v,u=null,t=e.a,s=t?B.e0:B.c,r=A.n(14),q=A.I(t?B.e2:B.bN,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.n(14),n=t?B.bs:B.bm
n=A.bw(B.VA,new A.fK(1.7777777777777777,C.aPZ(!0,B.fx,1/0,N.Nj,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AL(d.gwV()),u,u,u,u,u,u,D.fck,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.x(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Af.NV,t?B.bs:B.bm,u,u,u,u),u,u,u,new C.eLt(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eLu(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e6,u,u,u,1/0)}}
C.bxf.prototype={}
C.r_.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcTW(){var w,v,u,t,s=this.c
if(s===B.k.jb(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lk.prototype={
gwV(){return B.d.cJ(this.d,0,new C.cwZ())},
ah(){var w=this,v=w.d,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.cwY(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bbU(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lk(w.a,w.b,v,u,w.e)},
bbB(d){return this.bbU(d,null)},
Sy(d){return this.bbU(null,d)}}
C.Hz.prototype={
a5(){return"FamilyGender."+this.b}}
C.i1.prototype={
ah(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hmA(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDz(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i1(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akv.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kF.prototype={
gaof(){var w=this.f
return new A.a_(w,new C.bNT(),A.T(w).k("a_<1>")).gM(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.bNS(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i1r(w.y)],x.N,x.z)},
yB(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kF(w.a,v,u,t,s,r,w.r,q,p,o)},
bbT(d,e){var w=null
return this.yB(w,w,d,e,w,w,w,w)},
cJD(d,e,f,g,h,i,j){return this.yB(d,e,f,g,h,i,j,null)},
aDE(d,e){var w=null
return this.yB(w,w,w,d,w,w,e,w)},
cI6(d){var w=null
return this.yB(w,w,w,w,w,w,d,w)},
cIu(d){var w=null
return this.yB(w,w,w,w,w,w,w,d)},
aDq(d){var w=null
return this.yB(w,w,w,w,d,w,w,w)},
cJ8(d,e,f){var w=null
return this.yB(w,d,w,e,w,w,f,w)},
cHU(d){var w=null
return this.yB(w,w,d,w,w,w,w,w)},
cIH(d,e){var w=null
return this.yB(d,w,w,w,w,e,w,w)}}
C.cx_.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cx0.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGE.prototype={}
C.b8m.prototype={
bC(d){this.a=d.a
this.b=d.b},
cV(d){var w=new C.b8m()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b8l.prototype={
gwc(){return!0},
gFW(){return this.z.b<this.b.length},
aTr(d){switch(0){case 0:return d.a.c}},
aT8(d){switch(0){case 0:return d.a.d}},
bRf(d,e){switch(0){case 0:return new A.hO(d,e)}},
bQD(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h9(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iG(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Hj(b4)
switch(0){case 0:v=b5.b
u=new A.kC(0,v,0,1/0)
t=w===B.TC
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fQ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.h9(b4,u,!0)
f=b1.aTr(g)
f.toString
e=b1.aT8(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGE(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGE(k,j,i))}d=s.length
switch(0){case 0:q=b5.cv(new A.hO(m,l))
a0=q.a
a1=q.b
b1.a=new A.iG(0,0,a0,a1)
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
a8=b1.aTr(g)
e=b1.aT8(g)
e.toString
a9=b1.bQD(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bRf(a6,a3+a9)
b0=g.a
g.a=new A.iG(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h3(d){var w,v,u,t,s,r=this
r.lk(d)
w=d.b
w.ic()
v=A.dp()
u=r.a
v.e9(u.a,u.b,0,1)
w.oU(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].h3(d)
w.ni(0)},
Gr(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ic(){return this.z}}
C.bvv.prototype={}
var z=a.updateTypes(["aA<~>()","R(i1)","R(kF)","~()","R(ne)","a5<m,@>(kF)","G(kF,kF)","m(i1)","kF(a5<@,@>)","R(lk)","R(ui)","ne(a5<@,@>)","ui()","G(lk,lk)","i1(a5<@,@>)","a5<m,@>(i1)","R(r_)","aA<~>(lk)","eG<m?>(i1)","G(i1,i1)","m?(i1)","a5<m,@>(ne)","ZP(Y)","m(m)","ad1(Y)","t(og)","G(ne,ne)","i1(i1)","cL(bv<m,FK>)","cL(JZ)","~(i1)","G?(i1)","i1()","ai<i1>()","R(uh)","R(JZ)","D(i1)","~(Hz)","R(aeA)","t(Hz,m,a0)","Zd(Y)","bv<m,ai<a5<m,@>>>(m,ai<ne>)","~(G)","+count,id,name(G,m,m)(kF)","kF(kF)","a_9(Y)","a_a(Y)","R(lB)","lB()","m(kF)","a0V(Y)","YO(Y)","YN(Y)","Zb(Y)","Zf(Y)","t(r_)","adm(Y)","~(m0)","aA<~>([m?])","L(L,lk)","t(lk)","L(L,r_)","a5<m,@>(r_)","r_(a5<@,@>)","YM(Y)","Sz(Y)","cr(Hy)","lk(a5<@,@>)","uh()","m(lk)","a5<m,@>(lk)","m(S)","G(i1)","kF(a5<m,@>)","Yl(Y)"])
C.fBA.prototype={
$1(d){return d.a+" "+d.b},
$S:125}
C.fBz.prototype={
bl1(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qS(s,d,B.hD,"book",E.Fk),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KY(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bl1(d)},
$S:303}
C.fBB.prototype={
$1(d){return d.b},
$S:125}
C.fKN.prototype={
$1(d){var w=null
return A.eL(w,B.K,new F.Pj(this.a,this.b,w),w,w,0,B.Z1,B.d1,w,w,w)},
$S:48}
C.fqa.prototype={
$1(d){return d!=null},
$S:209}
C.fqb.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:209}
C.fqg.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:176}
C.fzj.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.h9(w,B.rH,w,w,w,w,w,w,w,B.dt,w,w,10.5,w,B.el,w,!0,w,w,w,w),w),u=f?B.el:B.vG
return new A.nM(D.brU,A.a9A(A.a([new A.fS(130,w,v),new A.yW(1,B.FT,A.fc(e,w,w,w,A.h9(w,g==null?D.eeb:g,w,w,w,w,w,w,w,B.dt,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xw,B.lu))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1924}
C.fzi.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vu(999)
f=A.x2(A.lw(h,A.fc("Cashier",h,h,h,A.h9(h,D.zs,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.el,h,!0,h,h,h,h),h),h,new A.kD(D.ee2,h,f,B.hI,h),h,h,D.bsn,h))
w=A.x2(A.fc("Debt receipt",h,h,h,A.h9(h,h,h,h,h,h,h,h,h,B.dt,h,h,22,h,B.el,h,!0,h,h,h,h),h))
v=A.x2(A.fc(C.wO(new A.S(Date.now(),0,!1),!0),h,h,h,D.a85,h))
u=A.vu(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.h9(h,h,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.el,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a85,h)
q=A.vu(10)
p=x.C
u=A.lw(h,A.yO(A.a([s,new A.fS(h,2,h),r,new A.fS(h,10,h),A.lw(h,A.yO(A.a([A.fc("Amount owed",h,h,h,D.a85,h),new A.fS(h,2,h),A.fc(A.AL(t.c),h,h,h,A.h9(h,D.zs,h,h,h,h,h,h,h,B.dt,h,h,20,h,B.el,h,!0,h,h,h,h),h)],p),B.r3,B.lu),h,new A.kD(B.pb,h,q,B.hI,h),h,h,D.brA,1/0)],p),B.r3,B.lu),h,new A.kD(E.aI_,h,u,B.hI,h),h,h,D.btp,1/0)
q=new A.nv(D.ee5,0.9,B.kM)
r=A.vu(12)
s=i.c
o=s.$2("Original due",C.wO(t.r,!1))
n=s.$2("Current due",C.wO(t.f,!1))
m=i.d
l=new A.nv(m,1.1,B.kM)
k=A.vu(8)
j=i.a
k=A.a([o,n,new A.fS(h,6,h),A.lw(h,A.x2(A.fc(t.gaKv(),h,h,h,A.h9(h,m,h,h,h,h,h,h,h,B.dt,h,h,11,h,B.el,h,!0,0.5,h,h,h),h)),h,new A.kD(h,new A.pD(l,l,l,l),k,B.hI,h),h,h,D.bsv,1/0),new A.fS(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zs))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zs))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.h9(h,B.rH,h,h,h,h,h,h,h,B.dt,h,h,10.5,h,B.el,h,!0,h,h,h,h),h)
m=A.T(o).k("M<1,S6>")
o=A.C(new A.M(o,new C.fzh(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fS(h,4,h),n,new A.fS(h,6,h),new C.b8l(5,5,new C.b8m(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fS(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fS(h,8,h),w,new A.fS(h,3,h),v,new A.fS(h,16,h),u,new A.fS(h,10,h),A.lw(h,A.yO(k,B.xw,B.lu),h,new A.kD(h,new A.pD(q,q,q,q),r,B.hI,h),h,h,B.ahL,1/0)],p)
w=j.a
if(w!=null){v=new A.nv(B.Il,1,B.kM)
B.d.v(f,A.a([new A.fS(h,16,h),A.fc("Debtor signature",h,h,h,A.h9(h,B.rH,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.el,h,!0,h,h,h,h),h),new A.fS(h,6,h),A.lw(h,new A.HP(w,B.VK,h,h),h,new A.kD(h,new A.pD(v,v,v,v),A.vu(6),B.hI,h),82,h,B.MK,1/0)],p))}f.push(new A.fS(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.f5a,h))
f.push(new A.fS(h,18,h))
f.push(A.x2(A.fc("NGMY.ORG",h,h,h,A.h9(h,D.zs,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.el,h,!0,1.8,h,h,h),h)))
return f},
$S:455}
C.fzh.prototype={
$1(d){var w=null,v=new A.nv(D.Im,0.7,B.kM),u=A.vu(999)
return A.lw(w,A.fc(C.wO(d,!1),w,w,w,A.h9(w,D.Im,w,w,w,w,w,w,w,B.dt,w,w,9.5,w,B.el,w,!0,w,w,w,w),w),w,new A.kD(w,new A.pD(v,v,v,v),u,B.hI,w),w,w,D.bxF,w)},
$S:1925}
C.c28.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wO(d,!1),w,w,w,w,w,w,D.fbP,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eD,w,w,w)},
$S:1926}
C.fLi.prototype={
$1(d){var w=null,v=A.aI(d,B.bW,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bQ2,w,w,w,new C.fLf(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eL(w,B.K,new A.cT(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.YR,A.x(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.co,A.cd(A.x(A.a([new A.ex(new C.aYn(r,w),s),B.R,A.B(A.a([A.E(A.eA(B.yI,D.fCC,new C.fLg(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fa,w,new A.b7(A.n(14),B.Y),new A.az(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a18,D.fz9,new C.fLh(r,d),A.bn(B.aZ,w,w,w,B.c,w,B.fa,w,new A.b7(A.n(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.N,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.N,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Zf,B.d1,w,w,w)},
$S:48}
C.fLf.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fLg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m1(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.h0),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eX(B.dD.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.t_(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fLh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fFU(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.J(x.q).f
s.S(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fLa.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eL(w,B.ax,A.x(A.a([new A.D(D.btd,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nD,w,w,w),1),A.aH(w,w,w,w,B.ls,w,w,w,new C.fL8(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.co,new A.D(B.fY,A.bw(A.n(14),A.fP(t,B.A,w,w,B.ci,B.dv,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Mp,new A.a7(1/0,w,A.dn(B.p1,D.aRR,new C.fL9(t,this.c,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.N,0,B.p),w,w,w,B.MB,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fL8.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fL9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t_(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fLm.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eL(w,B.ax,new A.D(D.btl,A.x(A.a([A.B(A.a([D.byH,A.aH(w,w,w,w,B.ls,w,w,w,new C.fLk(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ex(A.bw(A.n(14),A.p(w,A.b3(w,w,w,new C.bav(s.ax,w),B.aw),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.p1,D.aRR,new C.fLl(t,s,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(v,B.Y),w)},
$S:48}
C.fLk.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fLl.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m1(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.h0),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eX(B.dD.gaP(s))
w=5
return A.b(A.t_(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.J(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fu3.prototype={
$1(d){return d.a===this.a},
$S:269}
C.dGs.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dGd.prototype={
bkg(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e0:B.c
s=u.a
w=2
return A.b(A.bS(t,null,new C.dGg(s,q,e),p,!0,!0,!1,B.IC,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dGh(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bkg(d,e)},
$S:1927}
C.dGg.prototype={
$1(d){var w,v=null,u=this.c===B.wg,t=u?D.deV:D.daR
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.aij,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.im(!0,v,v,B.y,L.aOY,new C.dGf(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ai,v,B.e,B.N,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dGf.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cT.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.n(14)
if(q)u=B.cT
else u=(t.b.a.d.a?B.bs:B.bm).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aYm(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dGe(t.d,r),s,s,s,s,s,s,s)},
$S:183}
C.dGe.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dGh.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dGb.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dGc.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cu,e,v)
return new A.d_(e,!1,A.is(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e2(new C.dGa(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:31}
C.dGa.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e0:B.c,f=A.n(14),e=A.I((h?B.bs:B.bm).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.ek,A.X(B.cD,i.a.d.a?B.bs:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFW(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aSk("Name")
r=l.a
q=r.d==null?k:new C.dFX(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bn:B.lL
n=A.I(B.cT.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.U,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bbM(new A.D(B.fC,A.aL(!1,p,!0,A.p(B.A,C.aYm(m==null?"\ud83d\udc64":A.fA7(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kG,k,B.a7P,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aSZ("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dFY(r,a0),r.d===B.wg),1),B.ab,A.E(i.aSZ("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dG2(r,a0),r.d===B.a4N),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bI(B.a3,k,k,A.hn(D.bOo,D.fAY,new C.dG3(r,l.e,a0),A.fy(k,k,k,k,k,k,k,k,k,k,k,B.cT,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ul(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aSl("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.I((t?B.bs:B.bm).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wO(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bC,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bLe],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dG4(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aSk("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b03(r.b.length!==0,B.mv,new C.dG5(r,i,a0),new C.dG6(r,a0),"Upload from gallery","ID photo"))
v.push(i.b03(r.c.length!==0,D.bEv,new C.dG7(r,i,d,a0),new C.dG8(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ah.a7o("Signature (optional)",t,new C.dG9(a0),new C.dFZ(a0,t),new C.dG_(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bm
s=(i?B.bs:B.bm).j(0.28)
s=A.E(A.dV(E.aRK,new C.dG0(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tN,k,new A.b7(A.n(10),B.Y),new A.az(s,1,B.q,-1),k,k,k,k)),1)
t=A.bn(B.cT,k,k,k,B.c,k,B.tN,k,new A.b7(A.n(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uQ,k,k,k),new C.dG1(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.x(v,B.ai,k,B.e,B.N,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vC,B.jo,k,k,360)},
$S:161}
C.dFW.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFX.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFY.prototype={
$0(){return this.b.$1(new C.dFV(this.a))},
$S:0}
C.dFV.prototype={
$0(){var w=this.a
w.d=B.wg
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dG2.prototype={
$0(){return this.b.$1(new C.dFU(this.a))},
$S:0}
C.dFU.prototype={
$0(){var w=this.a
w.d=B.a4N
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dG3.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dG4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wS(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dFT(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFT.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gci(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dG5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pe(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dFS(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFS.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dG6.prototype={
$0(){return this.b.$1(new C.dFR(this.a))},
$S:0}
C.dFR.prototype={
$0(){return this.a.b=""},
$S:0}
C.dG7.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e0:B.c
w=3
return A.b(A.bS(q,null,new C.dFP(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pe(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dFQ(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFP.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anr,w,w,w,w,new C.dFJ(d),!1,w,w,w,w,w,w,w,D.fro,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.anp,w,w,w,w,new C.dFK(d),!1,w,w,w,w,w,w,w,D.fya,w,w,w)],x.p),B.m,w,B.e,B.N,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dFJ.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dFK.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dFQ.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dG8.prototype={
$0(){return this.b.$1(new C.dFO(this.a))},
$S:0}
C.dFO.prototype={
$0(){return this.a.c=""},
$S:0}
C.dG9.prototype={
$0(){return this.a.$1(new C.dFN())},
$S:0}
C.dFN.prototype={
$0(){},
$S:0}
C.dFZ.prototype={
$0(){return this.a.$1(new C.dFM(this.b))},
$S:0}
C.dFM.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dG_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahw(u.a,null,null,new C.dFL(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFL.prototype={
$4(d,e,f,g){this.a.$1(new C.dFI(this.b,d))},
$S:470}
C.dFI.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dG0.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dG1.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.J(x.q).f.S(D.f0Y)
return}if(w.a.d==null){w.c.J(x.q).f.S(D.eYS)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dGv.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:95}
C.dGw.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bm).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AL(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z1(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z1(r).length>0?B.bz:B.cT,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bm
t=(q?B.bs:B.bm).j(0.28)
s=x.p
return new A.d_(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aB,A.B(A.a([A.E(A.dV(B.nE,new C.dGt(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jG,r,new A.b7(A.n(10),B.Y),new A.az(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fyA,new C.dGu(d),A.bn(B.cT,r,r,r,B.c,r,B.jG,r,new A.b7(A.n(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.N,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bn,E.Z6,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:31}
C.dGt.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dGu.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dGp.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dGq(r),p=r.a.d.a,o=p?B.e0:B.c,n=A.n(14),m=A.I((p?B.bs:B.bm).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AL(l.c),s,s,s,s,s,s,D.fdk,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iC((r.a.d.a?B.bs:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_Z,"View receipt",new C.dGi(r,d,l))
u=l.x!=null
t=u?B.rm:B.q2
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bti,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dGj(r,d,l)),q.$3$icon$label$onTap(B.BE,"Edit",new C.dGk(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mv,"View / download ID",new C.dGl(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bEu,"View / download selfie",new C.dGm(r,d,l)))
if(l.gaFg())p.push(q.$3$icon$label$onTap(A6.a1_,"View / download signature",new C.dGn(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e7,"Delete",new C.dGo(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.vy,A.p(s,A.x(p,B.m,s,B.e,B.N,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dGq.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.ax
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1928}
C.dGi.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fLe(w,this.c)},
$S:0}
C.dGj.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.RU(this.c)},
$S:0}
C.dGk.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.D2(this.c)},
$S:0}
C.dGl.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDg(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dGm.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bDg(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dGn.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fLj(w,this.c)},
$S:0}
C.dGo.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.NT(0,this.c)},
$S:0}
C.dGx.prototype={
$1(d){return d.x==null},
$S:269}
C.dGy.prototype={
$1(d){return d.x!=null},
$S:269}
C.dGz.prototype={
$2(d,e){return d+e.c},
$S:1929}
C.dGA.prototype={
$0(){return this.a.bzx()},
$S:0}
C.dGr.prototype={
$0(){return this.a.aeE(this.b)},
$S:0}
C.fuH.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fuI.prototype={
$0(){return B.d.gI(D.a2b)},
$S:z+68}
C.d6g.prototype={
$0(){var w=this.a
return w.m(new C.d6e(w,this.b))},
$S:0}
C.d6e.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d6f.prototype={
$0(){},
$S:0}
C.d6h.prototype={
$0(){var w=this.a.gbYz()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fwV.prototype={
$1(d){return C.h7k(A.a2(d,x.N,x.z))},
$S:z+11}
C.fwW.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fwX.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aM(w,v)
return d.d.aM(0,e.d)},
$S:z+26}
C.fJT.prototype={
$1(d){return d.ah()},
$S:z+21}
C.fS2.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ftV.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bNO.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f4(e,v)?v:null},
$S:1930}
C.fKr.prototype={
$1(d){var w=this
return new C.Zd(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d6W.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d6V(w,d))},
$S:z+66}
C.d6V.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6K.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d6H.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d6i.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d6j.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d6L.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d6r.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e0:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.d6p(d),w,w),A.bG(B.wD,new C.d6q(d),A.bn(B.mZ,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d6p.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d6q.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6s.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d6I.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d6J.prototype={
$0(){return B.d.gI(D.yU)},
$S:z+12}
C.d6n.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyj(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Sz(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d6o.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6t.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YM(v,u,J.ad(w.d),null)},
$S:z+64}
C.d6u.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6U.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aC(s,new C.Yu(r.y,r.gyj(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d6S(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9U(v,e,w,u,t,r.gbPI(),C.hmz(r.y.Q),r.gyj(0),s)
w=t}return A.c6(q,new C.d6T(r,e),new A.D(B.Z7,w,s))},
$S:1931}
C.d6T.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).guJ(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fv(B.a3,A.de(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.d6S.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGo(B.pP,B.iG)},
$S:0}
C.d6E.prototype={
$0(){var w=this.a
return w.m(new C.d6D(w))},
$S:0}
C.d6D.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6F.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d6k.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.jX.j(0.5),r=x.p,q=A.a([D.fq0,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.YE(d,B.dX,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YE(d,L.alk,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ko.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ko.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YE(d,A0.ams,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YE(d,B.q8,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YE(d,B.q8,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eL(u,E.AR,A.bm(!0,new A.D(A5.xP,A.x(q,B.F,u,B.e,B.N,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aiI,B.d1,u,new A.b7(t,new A.az(s,1.4,B.q,-1)),u)},
$S:48}
C.d6G.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d6x.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.Zf(v,J.cJ(w.d),w.r+1,null)},
$S:z+54}
C.d6y.prototype={
$1(d){var w=null
return A.on(!1,A.em(w,w,w,E.AR,new A.jM(this.a,new C.d6w(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:323}
C.d6w.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7v,B.ol,A.E(A.d(e,w,w,w,w,w,w,B.iP,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d6z.prototype={
$0(){return this.a.a=!1},
$S:52}
C.d6A.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d6B.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6C.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AV(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rm(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d6v(s,t))
w=4
return A.b(s.kZ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6v.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6N.prototype={
$1(d){var w=null
return A.on(!1,A.em(w,w,w,E.AR,new A.jM(this.a,new C.d6M(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:323}
C.d6M.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7v,B.ol,A.E(A.d(e,w,w,w,w,w,w,B.iP,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:741}
C.d6O.prototype={
$0(){return this.a.a=!1},
$S:52}
C.d6P.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d6Q.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d6R.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AV(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kZ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6l.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bhi(B.pP,V.Mc)},
$S:0}
C.d6m.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGo(B.pP,V.Mc)},
$S:0}
C.d8G.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8H.prototype={
$1(d){var w=this.a
return w.m(new C.d8F(w))},
$S:9}
C.d8F.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d8I.prototype={
$1(d){var w=this.a
return w.m(new C.d8E(w))},
$S:9}
C.d8E.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d8J.prototype={
$1(d){var w=this.a
return w.m(new C.d8D(w))},
$S:9}
C.d8D.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d8K.prototype={
$0(){var w=this.a
return w.m(new C.d8C(w,this.b))},
$S:0}
C.d8C.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.d8L.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1k()
A.a6(this.b,!1).O(new A.bow(w,v))},
$S:0}
C.d7a.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d79.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Zb(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d7e.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d7d.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7r(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hG,v,v,v)
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.d7b(d),v,v),A.bG(B.wD,new C.d7c(d),A.bn(B.mZ,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AR,w,v,v,v,v,D.foS,v)},
$S:20}
C.d7b.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d7c.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d7f.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7g.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cd(A.bV(B.bA,r,B.br,18,14),B.r,t,B.y,t,D.bud,t,t,B.ah)},
$S:310}
C.d78.prototype={
$0(){return this.a.PV(0,this.b)},
$S:0}
C.d77.prototype={
$0(){return this.a.Pp(0,this.b)},
$S:0}
C.cFL.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cFM.prototype={
$0(){return B.d.gI(D.yU)},
$S:z+12}
C.cFN.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bZ(0,new A.D(d,A.c_(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1933}
C.cZc.prototype={
$1(d){return this.a.m(new C.cZb(this.b,this.c))},
$S:9}
C.cZb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cZB.prototype={
$1(d){return this.a.m(new C.cZo())},
$S:2}
C.cZo.prototype={
$0(){},
$S:0}
C.cZC.prototype={
$1(d){return this.a.m(new C.cZn())},
$S:2}
C.cZn.prototype={
$0(){},
$S:0}
C.cZD.prototype={
$0(){var w=this.a
return w.m(new C.cZm(w,this.b))},
$S:0}
C.cZm.prototype={
$0(){var w=this.a
return w.d=w.go4().FA(this.b.a)},
$S:0}
C.cZE.prototype={
$0(){var w=this.a
return w.m(new C.cZl(w,this.b))},
$S:0}
C.cZl.prototype={
$0(){var w=this.a
return w.d=w.go4().cHq(this.b)},
$S:0}
C.cZF.prototype={
$1(d){return this.a.m(new C.cZk())},
$S:2}
C.cZk.prototype={
$0(){},
$S:0}
C.cZG.prototype={
$0(){var w=this.a
return w.m(new C.cZj(w,this.b))},
$S:0}
C.cZj.prototype={
$0(){var w=this.a
return w.d=w.go4().cHv(this.b.a)},
$S:0}
C.cZH.prototype={
$1(d){var w=this.a
return w.m(new C.cZw(w,d))},
$S:6}
C.cZw.prototype={
$0(){var w=this.a
return w.d=w.go4().cIp(this.b)},
$S:0}
C.cZI.prototype={
$1(d){var w=this.a
return w.d=w.go4().aDt(d)},
$S:2}
C.cZJ.prototype={
$1(d){var w=this.a
return w.d=w.go4().cHy(d)},
$S:2}
C.cZL.prototype={
$1(d){var w=this.a
return w.d=w.go4().cIn(d)},
$S:2}
C.cZM.prototype={
$1(d){var w=this.a
return w.m(new C.cZv(w,d))},
$S:9}
C.cZv.prototype={
$0(){var w=this.a
return w.d=w.go4().cIe(this.b)},
$S:0}
C.cZN.prototype={
$0(){var w=this.a,v=w.go4(),u=B.a.i(w.gyj(0).a.a),t=B.a.i(w.gaAF().a.a)
u=v.bc2(B.a.i(w.gaqo().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dUr.prototype={
$0(){var w=this.a
w.vQ()
w.a.bs()
w.a.pR()},
$S:0}
C.dUq.prototype={
$0(){var w=this.a
w.vQ()
w.a.bs()
w.a.pR()},
$S:0}
C.dUt.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dUu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUv.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dUp.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dUs.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dUx.prototype={
$0(){this.a.Oo()
return null},
$S:0}
C.dUw.prototype={
$0(){return this.a.Eq(this.b)},
$S:0}
C.dTS.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.df,w,w,!0,w,w,new C.dTQ(d),w,w),r=A.bn(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dTR(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dTQ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTR.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dTT.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cHU(this.b)},
$S:0}
C.dTN.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSA(w.b,w.c,w.d)},
$S:8}
C.dTl.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dTm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gv(t.a.c),$async$$0)
case 2:s=r.rh(q.dJ(e,new C.dTy(t)))
if(s!=null&&t.c!=null)t.m(new C.dTz(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTy.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dTz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTB.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dTC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTM.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cIH(C.hmJ(w),w)},
$S:0}
C.dTK.prototype={
$1(d){return new A.e2(new C.dTJ(this.a,this.b),null)},
$S:21}
C.dTJ.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e0:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.an4,v,v,v,p>0?new C.dTF(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.x(A.a([r,B.aR,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.anD,v,v,v,new C.dTG(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.N,0,B.p)
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dTH(d),v,v),A.bG(B.pn,new C.dTI(d),A.bn(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:166}
C.dTF.prototype={
$0(){return this.b.$1(new C.dTE(this.a))},
$S:0}
C.dTE.prototype={
$0(){return--this.a.a},
$S:0}
C.dTG.prototype={
$0(){return this.b.$1(new C.dTD(this.a))},
$S:0}
C.dTD.prototype={
$0(){return++this.a.a},
$S:0}
C.dTH.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTI.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dTL.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cIu(this.a.a)
w.r.a8(0)},
$S:0}
C.dT9.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahE(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hgo(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dTa.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDq(w)},
$S:0}
C.dTV.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ad1(this.b,w,this.c,null)},
$S:z+24}
C.dTP.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e0:B.c,t=A.n(20),s=A.X(B.lo,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bG(D.fzL,new C.dTO(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:20}
C.dTO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTb.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dTc.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dTd.prototype={
$1(d){return d.a},
$S:z+7}
C.dTe.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i1(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDq(w)},
$S:0}
C.dTi.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahE(q)
w=A.T(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dTg(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hgo(v.e,null,r,v.f,v.r,new C.dTh(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dTh.prototype={
$0(){return this.a.a9J(this.b)},
$S:0}
C.dTg.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dTj.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("M<1,i1>")
w=A.C(new A.M(w,new C.dTf(this.b),v),v.k("ak.E"))
u.d=t.aDq(w)},
$S:0}
C.dTf.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dTU.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dTv.prototype={
$1(d){return d.length!==0},
$S:3}
C.dTw.prototype={
$1(d){var w=this
return new A.e2(new C.dTu(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dTu.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e0:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dTq(u,e,o),A.T(o).k("M<1,t>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.U,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(12),B.dh),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.m6,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ai,v,B.e,B.N,0,B.p)
t=w.a
return A.em(A.a([A.bK(!1,B.df,v,v,!0,v,v,new C.dTr(d),v,v),A.bG(B.Jy,new C.dTs(t,u,o,e),A.bn(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fmY,new C.dTt(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:166}
C.dTq.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bRZ,w,w,w,new C.dTp(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1934}
C.dTp.prototype={
$0(){return this.a.$1(new C.dTn(this.b,this.c))},
$S:0}
C.dTn.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dTr.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dTs.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dTo(w.c,u))
v.bP(0,B.c8)}},
$S:0}
C.dTo.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dTt.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dTx.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJ8(this.b,D.tT,C.Gt(v,w.a.c))},
$S:0}
C.dU1.prototype={
$1(d){return d.as},
$S:z+1}
C.dU2.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.dU3.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iaP(v)
return w.VA(v==null?null:v.a)},
$S:0}
C.dU4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hO7(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cqW(new A.ar(u,t),v.gbi9(),new A.ar(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cQL:D.cP8
q=A.I(s?B.dm:D.bc7,B.q,1)
p=A.n(22)
o=A.bZ(0,A.b3(m,m,m,new C.bdh(s,m),B.aw),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.uu(new A.Q(n,n,n,n),new A.a7(u,t,new C.bea(l.d,v,l.f,w,new C.dTY(l),l.gcaR(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvC(s,new C.dTZ(l,e),new C.dU_(l,e),new C.dU0(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b0,B.b4,B.x,r,m,m),B.n),m,m,m,R.ahP,m,m,m,m)},
$S:204}
C.dTY.prototype={
$1(d){var w=this.a
w.m(new C.dTW(w,d))},
$S:2}
C.dTW.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dTZ.prototype={
$0(){var w=this.b
return this.a.b9I(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dU_.prototype={
$0(){var w=this.b
return this.a.b9I(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dU0.prototype={
$0(){var w=this,v=w.b
return w.a.aSA(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbi9())},
$S:0}
C.dU5.prototype={
$0(){var w=this.a
return w.m(new C.dTX(w))},
$S:0}
C.dTX.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dTk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fN(new A.fE(s.c)),$async$$0)
case 2:t.xL("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7k.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhT(u,C.hqP(v.c,u),new C.d7j(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d7j.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d7l.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.ble(d.d,d.c,u.f.t(0,d.a),new C.d7i(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d7i.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fuL.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.rh(new A.cO(new A.a_(v,new C.fuM(d),w.k("a_<1>")),new C.fuN(),w.k("cO<1,m>")))},
$S:z+20}
C.fuM.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fuN.prototype={
$1(d){return d.a},
$S:z+7}
C.fuJ.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fuK.prototype={
$1(d){return d.b},
$S:z+7}
C.fuQ.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.rh(new A.cO(new A.a_(v,new C.fuR(d),w.k("a_<1>")),new C.fuS(),w.k("cO<1,m>")))},
$S:z+20}
C.fuR.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fuS.prototype={
$1(d){return d.a},
$S:z+7}
C.fuO.prototype={
$1(d){var w,v=A.ev([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fuP.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d7n.prototype={
$0(){return this.a},
$S:z+32}
C.d7E.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:236}
C.d7w.prototype={
$2(d,e){var w=this.a.c9(0,d,new C.d7x()),v=J.a4(w)
if(!v.t(w,e))v.L(w,e)},
$S:113}
C.d7x.prototype={
$0(){return A.a([],x.s)},
$S:742}
C.d7v.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f4(w,e)
return w===!0},
$S:284}
C.d7o.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d7u.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d7t.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Co:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.U:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Co:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1936}
C.d7p.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d7y.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.L(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gR(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.L(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.Co:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b6(w,new C.d7z(r)))w.push(r)}}B.d.br(w,new C.d7A(a8))
B.d.aZ(w,new C.d7B())
q=C.hO6(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eCH],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
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
else j.push(d)}}a0=(B.d.gI(k)+B.d.gal(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bog(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1937}
C.d7z.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d7A.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d7B.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.d7C.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cJ(0,0,B.pu)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:653}
C.d7D.prototype={
$1(d){return 16+d*156},
$S:252}
C.d7m.prototype={
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
t.n(0,d,new C.FK(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FK(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FK(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JZ(d,new A.v(e+t,w),s,s.length))}},
$S:193}
C.d7q.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIF(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:113}
C.d7r.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d7s.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:743}
C.d7F.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:743}
C.d7G.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:449}
C.d7H.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:191}
C.d7I.prototype={
$1(d){return d>=0.5},
$S:119}
C.fc6.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hx(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1939}
C.eNZ.prototype={
$1(d){var w=null,v=A.n(8),u=B.bT.j(0.12),t=A.n(8)
return new A.D(B.nf,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f90,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.MJ,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eNY(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eNY.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dny.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dnx.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nB,B.L,w,w)
return A.em(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.dnv(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mi,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dnw(d),w,w)],x.p),B.b9,B.Bc,w,u,D.bvt,w,D.bxq,new A.b7(v,B.Y),w,w)},
$S:20}
C.dnv.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dnw.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dnH.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dnI.prototype={
$1(d){var w=this.a
return w.m(new C.dnG(w,d))},
$S:z+37}
C.dnG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dnJ.prototype={
$1(d){var w=null
return A.qo(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnM.prototype={
$1(d){var w=this.a
return w.m(new C.dnF(w,d))},
$S:32}
C.dnF.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dnL.prototype={
$1(d){var w=null
return A.qo(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnN.prototype={
$1(d){var w=this.a
return w.m(new C.dnE(w,d))},
$S:32}
C.dnE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnO.prototype={
$0(){var w=this.a
return w.m(new C.dnD(w))},
$S:0}
C.dnD.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dnP.prototype={
$0(){var w=this.a
return w.m(new C.dnC(w))},
$S:0}
C.dnC.prototype={
$0(){return++this.a.at},
$S:0}
C.dnQ.prototype={
$0(){var w=this.a
return w.m(new C.dnB(w))},
$S:0}
C.dnB.prototype={
$0(){return--this.a.ax},
$S:0}
C.dnR.prototype={
$0(){var w=this.a
return w.m(new C.dnA(w))},
$S:0}
C.dnA.prototype={
$0(){return++this.a.ax},
$S:0}
C.dnS.prototype={
$1(d){var w=this.a
return w.m(new C.dnz(w,d))},
$S:9}
C.dnz.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dnK.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dnT.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.e0:B.c
v=A.n(12)
if(p)u=B.bT
else u=(q.c.a?B.e2:B.bN).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bs:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bs:B.bm
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,B.jG,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dnU(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dnU.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.do2.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c8G.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.c8N.prototype={
$1(d){return d.ah()},
$S:z+5}
C.c8O.prototype={
$2(d,e){var w=J.b6(e,new C.c8M(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c8M.prototype={
$1(d){return d.ah()},
$S:z+21}
C.c8I.prototype={
$1(d){return C.akw(A.a2(d,x.N,x.z))},
$S:z+8}
C.c8J.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c8K.prototype={
$1(d){return C.h7k(A.a2(d,x.N,x.z))},
$S:z+11}
C.c8L.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c8S.prototype={
$1(d){return new A.aFK(d.f.length,d.a,d.b)},
$S:z+43}
C.c8T.prototype={
$2(d,e){return B.a.aM(d.c,e.c)},
$S:563}
C.c8P.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c8Q.prototype={
$1(d){return d.cI6(C.Gt(d,this.a))},
$S:z+44}
C.dUe.prototype={
$1(d){return C.u1(d,this.a.a.c)},
$S:z+2}
C.dUf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dUj.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dUk.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dUb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZS(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yk("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p8(r.c,r.e),$async$$0)
case 4:s.yk(p)
w=5
return A.b(s.Jt(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZS(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yk("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p8(r.c,r.e),$async$$0)
case 4:s.yk(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.V_(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yk("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yk("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yk("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jt(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yk(B.a.eg(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dUi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZR(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yk("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cm(A.e9(new C.dUh(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p8(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUh.prototype={
$1(d){var w=this.b
return new C.a_9(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dUg.prototype={
$1(d){return D.h5i},
$S:z+46}
C.dUm.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dUn.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dUl(w,d)
return new A.D(B.da,new C.bee(this.b,d.c,d.a,w,null),null)},
$S:1940}
C.dUl.prototype={
$0(){return this.a.Xi(this.b.b)},
$S:0}
C.dU6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dU7.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dU8.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dU9.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dUa.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dUo.prototype={
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
$S:177}
C.dFA.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dFB.prototype={
$0(){return B.d.gI(D.a3F)},
$S:z+48}
C.dFC.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cX0,44),w,w,w),w,w,new C.bj0(u,t,v,w),B.aw)},
$S:71}
C.fKU.prototype={
$1(d){return A.oT(new C.fKT(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:143}
C.fKT.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e0:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rG,24)],x.V),o=r?B.e2:B.bN
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bMt,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.aiN,A.B(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.eX3,new C.fKS(this.b,s),20,B.ain,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kL,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fKS.prototype={
$2(d,e){var w=null,v=D.a3F[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.I(s?B.e2:B.bN,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.n(15),o=A.E(new C.a64(v.a,!0,w),1),n=s?B.jD:B.iX,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eH(A.bw(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.kY,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fKR(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:75}
C.fKR.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cgl.prototype={
$0(){return this.a.afH(this.b)},
$S:0}
C.fKg.prototype={
$1(d){return D.h1f},
$S:z+74}
C.fRK.prototype={
$1(d){var w=this
return new C.a0V(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fKl.prototype={
$1(d){return new C.YO(this.a,null)},
$S:z+51}
C.fKk.prototype={
$1(d){return D.h2e},
$S:z+52}
C.cZZ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d__.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cZY(w,d))},
$S:32}
C.cZY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d_0.prototype={
$1(d){return this.a.K3()},
$S:2}
C.d_1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZW.prototype={
$1(d){return this.a.K3()},
$S:2}
C.cZX.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cxx.prototype={
$0(){},
$S:0}
C.cxD.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cxE.prototype={
$0(){return this.a.aNZ(-1)},
$S:0}
C.cxF.prototype={
$1(d){return this.a.m(new C.cxC())},
$S:2}
C.cxC.prototype={
$0(){},
$S:0}
C.cxG.prototype={
$0(){return this.a.aNZ(1)},
$S:0}
C.cxH.prototype={
$1(d){return this.a.m(new C.cxB())},
$S:2}
C.cxB.prototype={
$0(){},
$S:0}
C.cxI.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e2:B.bN
return A.uk(u,u,B.aZ,r,u,new C.cxA(t,d),B.Bo,s,w,u,new A.az(v,1,B.q,-1),B.ce)},
$S:1941}
C.cxA.prototype={
$1(d){var w=this.a
return w.m(new C.cxy(w,this.b))},
$S:9}
C.cxy.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cxJ.prototype={
$1(d){return this.a.m(new C.cxz())},
$S:2}
C.cxz.prototype={
$0(){},
$S:0}
C.cxK.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fbz.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fbA.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fbB.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fbx.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyG()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bxp,new A.ex(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bvr(p,v,this.b.a,u,t,r),r,r,B.aw)},
$S:71}
C.fby.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.aA(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.aq(B.aV,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eH(D.ec4,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.dc(-1.2+t,-0.5),new A.dc(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:134}
C.fIV.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:70}
C.eL8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eL_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eL0.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eL6.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e2(new C.eL5(w,this.b),null)},
$S:21}
C.eL5.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e0:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eL(w,u,new A.D(B.aiG,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hdb(new C.eL2(r,e),r.a),B.aB,A.B(A.a([A.E(A.dV(B.df,new C.eL3(d),w),1),B.at,A.E(A.bG(B.Uf,new C.eL4(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.N,0,B.p),w),w,w,w,w,B.d1,w,new A.b7(t,B.Y),w)},
$S:99}
C.eL2.prototype={
$1(d){return this.b.$1(new C.eL1(this.a,d))},
$S:32}
C.eL1.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eL3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eL4.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eL7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sy(this.b)},
$S:0}
C.eKV.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbB(w)},
$S:0}
C.eKZ.prototype={
$1(d){return this.bkJ(d)},
bkJ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L9(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iR(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eKY.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eKX(this.b),v),v.k("J.E"))
u.d=t.bbB(w)},
$S:0}
C.eKX.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eL9.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.eLa.prototype={
$1(d){return this.a.bCN(d,this.b)},
$S:z+55}
C.eKW.prototype={
$0(){return this.a.a9I(this.b)},
$S:0}
C.fRA.prototype={
$1(d){return new C.adm(this.a,this.b,this.c,null)},
$S:z+56}
C.eLc.prototype={
$0(){return this.a.a__(this.b)},
$S:0}
C.eLd.prototype={
$0(){return this.a.PR(this.b)},
$S:0}
C.eLe.prototype={
$0(){return this.a.El(this.b)},
$S:0}
C.eLf.prototype={
$0(){return this.a.a_0(this.b)},
$S:0}
C.eLb.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eKQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eKR.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eKS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eKU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eKT(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKT.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eLC.prototype={
$2(d,e){return d+e.gwV()},
$S:z+59}
C.eLy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eLz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eLj.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e0:B.c,s=A.n(24),r=A.p(v,D.bMU,B.f,v,v,new A.o(B.av.j(u?0.18:0.08),v,A.I(B.av.j(0.28),B.q,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.ax
u=u?B.e2:B.bN
w=x.p
return A.eL(v,t,new A.D(B.xT,A.x(A.a([r,B.aR,q,B.O,p,B.d7,A.B(A.a([A.E(A.dV(B.nE,new C.eLh(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.fa,v,new A.b7(A.n(14),B.Y),new A.az(u,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fDw,new C.eLi(d),A.bn(B.av,v,v,v,v,v,B.fa,v,new A.b7(A.n(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.N,0,B.p),v),v,v,v,v,B.d1,v,new A.b7(s,B.Y),v)},
$S:48}
C.eLh.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eLi.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eLs.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e0:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.d2J:B.a3_,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eQP,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cx,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.az,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aiK,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4L(B.b6,B.j2,new C.eLp(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b4L(B.cA,M.yx,new C.eLq(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.av.j(k?0.14:0.06)
q=A.n(16)
p=A.I(B.av.j(0.28),B.q,1)
o=A.p(m,D.bMh,B.f,m,m,new A.o(B.av.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vA,A.p(m,A.x(A.a([g,new A.D(B.aiH,A.x(A.a([w,B.R,u,B.by,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.be,n,A.X(B.ey,k?B.bs:B.bm,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eLr(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.N,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eLp.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vq("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLq.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vq("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLr.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.NG(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLn.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e0:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e2:B.bN
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bs:B.bm
u=A.bw(w,new A.a7(48,48,C.aPZ(!0,A.n(12),48,N.Nj,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AL(v.gwV())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vA,A.p(q,A.x(A.a([B.R,k,new A.D(D.aiE,A.B(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.B3,r.cl0(B.ub,B.aV,new C.eLl(d),p,"QR code or backup file","Transfer project"),r.b1I(!0,B.e7,B.av,new C.eLm(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.N,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eLl.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eLm.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eLo.prototype={
$1(d){return this.bkK(d)},
bkK(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.L9(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vE(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eLF.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eLE(w))},
$S:0}
C.eLE.prototype={
$0(){return this.a.r++},
$S:0}
C.eLG.prototype={
$0(){var w=this.a
return w.m(new C.eLD(w))},
$S:0}
C.eLD.prototype={
$0(){return this.a.r++},
$S:0}
C.eLg.prototype={
$0(){var w=this.a.c
w.toString
return A.iR(w,null)},
$S:0}
C.eLk.prototype={
$0(){return this.a.cel(this.b)},
$S:0}
C.eLB.prototype={
$0(){var w=this.a
return w.m(new C.eLA(w,this.b))},
$S:0}
C.eLA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eLv.prototype={
$0(){return this.a.vq("scan")},
$S:0}
C.eLw.prototype={
$0(){return this.a.vq("file")},
$S:0}
C.eLx.prototype={
$1(d){return this.a.cl1(d,this.b)},
$S:z+60}
C.eLu.prototype={
$0(){return this.a.Ep(this.b)},
$S:0}
C.eLt.prototype={
$0(){return this.a.a_v(this.b,this.c)},
$S:0}
C.cwZ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cwY.prototype={
$1(d){return d.ah()},
$S:z+62}
C.cwW.prototype={
$1(d){return C.hwE(A.a2(d,x.N,x.z))},
$S:z+63}
C.cwX.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.ftN.prototype={
$1(d){return d.y===D.kv},
$S:z+2}
C.fSa.prototype={
$1(d){return C.bBd(d,this.a)},
$S:z+2}
C.frY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bNT.prototype={
$1(d){return!d.as},
$S:z+1}
C.bNS.prototype={
$1(d){return d.ah()},
$S:z+15}
C.bNP.prototype={
$1(d){return C.h7l(A.a2(d,x.N,x.z))},
$S:z+14}
C.bNQ.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bNR.prototype={
$1(d){return J.k(d)},
$S:17}
C.fj7.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.feO.prototype={
$1(d){return C.fYD(A.a2(d,x.N,x.z))},
$S:z+67}
C.feP.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.feQ.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fK7.prototype={
$1(d){return J.k(d)},
$S:17}
C.fK8.prototype={
$1(d){return d.a},
$S:z+69}
C.fK9.prototype={
$1(d){return d.length!==0},
$S:3}
C.fKa.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fKb.prototype={
$1(d){return d.Sy(null).ah()},
$S:z+70}
C.fS8.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fue.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fx0.prototype={
$1(d){return C.akw(A.a2(d,x.N,x.z))},
$S:z+8}
C.fx1.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fx2.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fx3.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fx4.prototype={
$1(d){return C.u1(d,this.a)},
$S:z+2}
C.fJV.prototype={
$1(d){return C.u1(d,this.a)},
$S:z+2}
C.fS3.prototype={
$1(d){return C.akw(A.a2(d,x.N,x.z))},
$S:z+8}
C.fS4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fS5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ftW.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.ftX.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fSf.prototype={
$1(d){return!d.as},
$S:z+1}
C.fts.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.ftt.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.ftu.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.fRL.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fxN.prototype={
$1(d){return d.Q},
$S:z+72}
C.fJO.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fwY.prototype={
$1(d){return C.akw(A.a2(d,x.N,x.z))},
$S:z+8}
C.fwZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fx_.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fJJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ffl.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffm.prototype={
$1(d){return C.h7l(A.a2(d,x.N,x.z))},
$S:z+14}
C.ffn.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.ffo.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.ffp.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffC.prototype={
$2(d,e){return d.eR(new C.ffD(e))},
$S:1942}
C.ffD.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.ca},
$S:1943}
C.ffz.prototype={
$1(d){return C.hSI(d,this.a)},
$S:z+73}
C.ffA.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.ffB.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fjM.prototype={
$1(d){return d.a},
$S:z+49}
C.fjN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fjO.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fmr.prototype={
$1(d){return d.ah()},
$S:z+5}
C.frh.prototype={
$1(d){return C.hiI(d,C.Gt(d,this.a))},
$S:z+5}
C.fri.prototype={
$1(d){return C.hiJ(d,C.Gt(d,this.a))},
$S:z+5};(function aliases(){var w=C.aL0.prototype
w.buQ=w.q
w=C.aNb.prototype
w.bxd=w.q
w=C.aNc.prototype
w.bxe=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCv.prototype,"gchY","chZ",25)
var s
w(s=C.azz.prototype,"gcaX","caY",42)
v(s,"gaMe","Ne",0)
v(s,"gcqh","AL",0)
v(s,"gbKz","NU",0)
v(s,"gcEk","yl",0)
v(s,"gcjZ","a0c",0)
v(s,"gbFY","NC",0)
v(s,"gbL_","WK",0)
w(s,"gbPI","bPJ",71)
v(s,"gbAk","zO",0)
v(C.azA.prototype,"gcEg","Fg",0)
v(s=C.aD5.prototype,"gafj","vF",0)
v(s,"gcdB","a_m",0)
v(s,"gaQi","HR",0)
v(s=C.aD2.prototype,"gcAp","a2j",0)
v(s,"gafj","vF",0)
v(s,"gcoi","a0S",0)
v(s,"gcey","a_A",0)
w(s,"gcaR","caS",30)
v(s,"gbKR","HW",0)
v(s,"gcBt","cBu",3)
v(s,"gc1o","Yq",0)
w(s,"gc9m","c9n",23)
v(s,"gcdl","cdm",3)
v(s=C.aBu.prototype,"gc7a","Pq",0)
v(s,"gc7c","c7d",3)
v(s,"gbHv","a9k",0)
v(s=C.aD4.prototype,"gbOc","Xe",0)
v(s,"gbYG","XT",0)
v(s,"gcuJ","a1I",0)
v(s,"gcqR","a1j",0)
v(C.aD3.prototype,"gcqz","ah3",0)
v(C.ase.prototype,"gc9k","ZZ",0)
v(C.ayk.prototype,"ga22","K3",3)
v(C.ayj.prototype,"ga22","K3",3)
v(C.ax3.prototype,"ga22","K3",3)
v(s=C.aEA.prototype,"gb16","Ql",0)
v(s,"gbz8","Vu",0)
v(s,"gcem","cen",3)
w(C.aEz.prototype,"gcab","cac",57)
u(C.aEB.prototype,"gaQc",0,0,null,["$1","$0"],["HQ","bIM"],58,0,0)
t(C,"hq0","i1p",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.ao2,C.uh,C.ne,C.Hy,C.aeA,C.JR,C.ui,C.JZ,C.FK,C.bec,C.aIF,C.apj,C.d7J,C.lB,C.aSV,C.aSU,C.aQU,C.tR,C.r_,C.lk,C.i1,C.kF,C.aGE])
u(A.i_,[C.fBA,C.fBz,C.fBB,C.fKN,C.fqa,C.fqb,C.fqg,C.fzj,C.fzi,C.fzh,C.c28,C.fLi,C.fLa,C.fLm,C.fu3,C.dGg,C.dGb,C.dGc,C.dFP,C.dFL,C.dGv,C.dGw,C.dGp,C.dGq,C.dGx,C.dGy,C.fuH,C.fwV,C.fwW,C.fJT,C.fS2,C.ftV,C.fKr,C.d6W,C.d6i,C.d6r,C.d6I,C.d6n,C.d6t,C.d6k,C.d6x,C.d6y,C.d6w,C.d6N,C.d6M,C.d8H,C.d8I,C.d8J,C.d79,C.d7e,C.d7d,C.cFL,C.cFN,C.cZc,C.cZB,C.cZC,C.cZF,C.cZH,C.cZI,C.cZJ,C.cZL,C.cZM,C.dUs,C.dTS,C.dTN,C.dTl,C.dTy,C.dTB,C.dTK,C.dT9,C.dTV,C.dTP,C.dTb,C.dTc,C.dTd,C.dTi,C.dTg,C.dTf,C.dTv,C.dTw,C.dTq,C.dU1,C.dTY,C.d7k,C.d7l,C.fuL,C.fuM,C.fuN,C.fuJ,C.fuK,C.fuQ,C.fuR,C.fuS,C.fuO,C.fuP,C.d7E,C.d7u,C.d7p,C.d7z,C.d7A,C.d7D,C.d7r,C.d7G,C.d7H,C.d7I,C.fc6,C.eNZ,C.dnx,C.dnH,C.dnI,C.dnJ,C.dnM,C.dnL,C.dnN,C.dnS,C.dnT,C.c8N,C.c8M,C.c8I,C.c8J,C.c8K,C.c8L,C.c8S,C.c8P,C.c8Q,C.dUe,C.dUh,C.dUg,C.dUn,C.dUo,C.dFA,C.fKU,C.fKg,C.fRK,C.fKl,C.fKk,C.d__,C.d_0,C.cZW,C.cxF,C.cxH,C.cxI,C.cxA,C.cxJ,C.fbz,C.fIV,C.eL6,C.eL2,C.eKZ,C.eKX,C.eLa,C.fRA,C.eLj,C.eLs,C.eLn,C.eLo,C.eLx,C.cwY,C.cwW,C.cwX,C.ftN,C.fSa,C.frY,C.bNT,C.bNS,C.bNP,C.bNQ,C.bNR,C.feO,C.feP,C.fK7,C.fK8,C.fK9,C.fKa,C.fKb,C.fS8,C.fue,C.fx0,C.fx1,C.fx3,C.fx4,C.fJV,C.fS3,C.fS4,C.fS5,C.ftW,C.ftX,C.fSf,C.fts,C.ftt,C.fRL,C.fxN,C.fJO,C.fwY,C.fwZ,C.fJJ,C.ffl,C.ffm,C.ffn,C.ffo,C.ffp,C.ffD,C.ffz,C.ffA,C.fjM,C.fjN,C.fmr,C.frh,C.fri])
u(A.au,[C.aYn,C.aku,C.aU8,C.Yu,C.b9U,C.bea,C.bhT,C.bvC,C.ble,C.ad0,C.bhS,C.ad_,C.bhR,C.aBv,C.aHH,C.ad1,C.JN,C.beb,C.ach,C.be9,C.bee,C.aYl,C.ase,C.adm])
u(A.mO,[C.bav,C.bbI,C.bbz,C.aGz,C.bgW,C.bed,C.bdh,C.bj0,C.bvr])
u(A.ja,[C.fLf,C.fLg,C.fLh,C.fL8,C.fL9,C.fLk,C.fLl,C.dGs,C.dGe,C.dGh,C.dFW,C.dFX,C.dFY,C.dFV,C.dG2,C.dFU,C.dG3,C.dG4,C.dFT,C.dG5,C.dFS,C.dG6,C.dFR,C.dG7,C.dFJ,C.dFK,C.dFQ,C.dG8,C.dFO,C.dG9,C.dFN,C.dFZ,C.dFM,C.dG_,C.dFI,C.dG0,C.dG1,C.dGt,C.dGu,C.dGi,C.dGj,C.dGk,C.dGl,C.dGm,C.dGn,C.dGo,C.dGA,C.dGr,C.fuI,C.d6g,C.d6e,C.d6f,C.d6h,C.d6V,C.d6K,C.d6H,C.d6j,C.d6L,C.d6p,C.d6q,C.d6s,C.d6J,C.d6o,C.d6u,C.d6S,C.d6E,C.d6D,C.d6F,C.d6G,C.d6z,C.d6B,C.d6C,C.d6v,C.d6O,C.d6R,C.d6l,C.d6m,C.d8G,C.d8F,C.d8E,C.d8D,C.d8K,C.d8C,C.d8L,C.d7a,C.d7b,C.d7c,C.d7f,C.d78,C.d77,C.cFM,C.cZb,C.cZo,C.cZn,C.cZD,C.cZm,C.cZE,C.cZl,C.cZk,C.cZG,C.cZj,C.cZw,C.cZv,C.cZN,C.dUr,C.dUq,C.dUt,C.dUu,C.dUv,C.dUp,C.dUx,C.dUw,C.dTQ,C.dTR,C.dTT,C.dTm,C.dTA,C.dTz,C.dTC,C.dTM,C.dTF,C.dTE,C.dTG,C.dTD,C.dTH,C.dTI,C.dTL,C.dTa,C.dTO,C.dTe,C.dTh,C.dTj,C.dTU,C.dTp,C.dTn,C.dTr,C.dTs,C.dTo,C.dTt,C.dTx,C.dU2,C.dU3,C.dTW,C.dTZ,C.dU_,C.dU0,C.dU5,C.dTX,C.dTk,C.d7j,C.d7i,C.d7n,C.d7x,C.d7o,C.eNY,C.dny,C.dnv,C.dnw,C.dnG,C.dnF,C.dnE,C.dnO,C.dnD,C.dnP,C.dnC,C.dnQ,C.dnB,C.dnR,C.dnA,C.dnz,C.dnK,C.dnU,C.do2,C.dUf,C.dUj,C.dUk,C.dUb,C.dUc,C.dUd,C.dUi,C.dUm,C.dUl,C.dU6,C.dU7,C.dU8,C.dU9,C.dUa,C.dFB,C.fKR,C.cgl,C.cZZ,C.cZY,C.d_1,C.cZV,C.cZX,C.cxx,C.cxD,C.cxE,C.cxC,C.cxG,C.cxB,C.cxy,C.cxz,C.cxK,C.fbA,C.fbB,C.eL8,C.eL_,C.eL0,C.eL1,C.eL3,C.eL4,C.eL7,C.eKV,C.eKY,C.eL9,C.eKW,C.eLc,C.eLd,C.eLe,C.eLf,C.eLb,C.eKQ,C.eKR,C.eKS,C.eKU,C.eKT,C.eLy,C.eLz,C.eLh,C.eLi,C.eLp,C.eLq,C.eLr,C.eLl,C.eLm,C.eLF,C.eLE,C.eLG,C.eLD,C.eLg,C.eLk,C.eLB,C.eLA,C.eLv,C.eLw,C.eLu,C.eLt])
u(A.ag,[C.aoe,C.Sz,C.Zb,C.Zf,C.Zd,C.YM,C.apm,C.apg,C.ZP,C.apk,C.a_9,C.a_a,C.a64,C.YO,C.YN,C.Yl,C.a0V,C.Fx,C.awX,C.asd,C.as7,C.asc,C.NY])
u(A.ah,[C.aCv,C.be7,C.azz,C.bes,C.azA,C.bbG,C.aD5,C.aD2,C.aBu,C.aD4,C.aD3,C.bjl,C.aL0,C.ayk,C.ayj,C.ax3,C.bvu,C.aNb,C.aNc,C.aEA,C.bkI,C.aEz,C.bxf])
u(A.km,[C.dGd,C.dGf,C.dGa,C.dGz,C.fwX,C.bNO,C.d6U,C.d6T,C.d6A,C.d6P,C.d6Q,C.d7g,C.dTJ,C.dTu,C.dU4,C.d7w,C.d7v,C.d7t,C.d7y,C.d7B,C.d7C,C.d7m,C.d7q,C.d7s,C.d7F,C.c8G,C.c8O,C.c8T,C.dFC,C.fKT,C.fKS,C.fbx,C.fby,C.eL5,C.eLC,C.cwZ,C.fj7,C.feQ,C.fx2,C.ftu,C.fx_,C.ffC,C.ffB,C.fjO])
t(C.bj1,C.aL0)
u(A.mc,[C.abk,C.aJm,C.Hz,C.akv,C.cx_,C.cx0])
t(C.bvs,C.aNb)
t(C.bvt,C.aNc)
t(C.aEB,C.bxf)
t(C.b8m,A.b8a)
t(C.bvv,A.a5K)
t(C.b8l,C.bvv)
w(C.aL0,A.eW)
w(C.aNb,A.c9)
w(C.aNc,A.c9)
v(C.bxf,A.eB)
v(C.bvv,A.j4)})()
A.k0(b.typeUniverse,JSON.parse('{"aYn":{"au":[],"t":[]},"bav":{"aB":[]},"aoe":{"ag":[],"t":[]},"aCv":{"ah":["aoe"]},"Sz":{"ag":[],"t":[]},"aku":{"au":[],"t":[]},"aU8":{"au":[],"t":[]},"be7":{"ah":["Sz"]},"Zb":{"ag":[],"t":[]},"Zf":{"ag":[],"t":[]},"Zd":{"ag":[],"t":[]},"YM":{"ag":[],"t":[]},"azz":{"ah":["Zb"]},"bes":{"ah":["Zf"]},"azA":{"ah":["Zd"]},"Yu":{"au":[],"t":[]},"bbI":{"aB":[]},"bbz":{"aB":[]},"bbG":{"ah":["YM"]},"aGz":{"aB":[]},"bgW":{"aB":[]},"b9U":{"au":[],"t":[]},"apm":{"ag":[],"t":[]},"apg":{"ag":[],"t":[]},"ZP":{"ag":[],"t":[]},"ad1":{"au":[],"t":[]},"aD5":{"ah":["apm"]},"aD2":{"ah":["apg"]},"bea":{"au":[],"t":[]},"bed":{"aB":[]},"bhT":{"au":[],"t":[]},"bdh":{"aB":[]},"bvC":{"au":[],"t":[]},"ble":{"au":[],"t":[]},"aBu":{"ah":["ZP"]},"ad0":{"au":[],"t":[]},"bhS":{"au":[],"t":[]},"ad_":{"au":[],"t":[]},"bhR":{"au":[],"t":[]},"aBv":{"au":[],"t":[]},"aHH":{"au":[],"t":[]},"JN":{"au":[],"t":[]},"apk":{"ag":[],"t":[]},"a_9":{"ag":[],"t":[]},"a_a":{"ag":[],"t":[]},"aD4":{"ah":["apk"]},"beb":{"au":[],"t":[]},"ach":{"au":[],"t":[]},"be9":{"au":[],"t":[]},"bee":{"au":[],"t":[]},"aD3":{"ah":["a_9"]},"bjl":{"ah":["a_a"]},"aYl":{"au":[],"t":[]},"a64":{"ag":[],"t":[]},"bj1":{"ah":["a64"]},"bj0":{"aB":[]},"ase":{"au":[],"t":[]},"YO":{"ag":[],"t":[]},"YN":{"ag":[],"t":[]},"Yl":{"ag":[],"t":[]},"a0V":{"ag":[],"t":[]},"ayk":{"ah":["YO"]},"ayj":{"ah":["YN"]},"ax3":{"ah":["Yl"]},"bvu":{"ah":["a0V"]},"Fx":{"ag":[],"t":[]},"awX":{"ag":[],"t":[]},"bvs":{"ah":["Fx"]},"bvt":{"ah":["awX"]},"bvr":{"aB":[]},"asd":{"ag":[],"t":[]},"aEA":{"ah":["asd"]},"adm":{"au":[],"t":[]},"as7":{"ag":[],"t":[]},"asc":{"ag":[],"t":[]},"bkI":{"ah":["as7"]},"aEz":{"ah":["asc"]},"NY":{"ag":[],"t":[]},"aEB":{"ah":["NY"],"eB":[]},"b8l":{"j4":[],"fg":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQU"),Q:w("r_"),n:w("bk<m,m>"),c5:w("aSU"),dY:w("aSV"),d:w("eG<m?>"),e:w("Hy"),B:w("ne"),P:w("i1"),k:w("kF"),x:w("aA<~>"),f5:w("O<a2U>"),V:w("O<ac>"),t:w("O<r_>"),O:w("O<w>"),ac:w("O<eG<m?>>"),I:w("O<ne>"),u:w("O<i1>"),_:w("O<kF>"),cl:w("O<aA<ai<a5<m,@>>>>"),R:w("O<ng>"),cq:w("O<ai<+(L,L)>>"),ez:w("O<a5<m,aD>>"),gE:w("O<a5<m,m>>"),c7:w("O<a5<m,@>>"),fD:w("O<mt>"),bp:w("O<og>"),g:w("O<v>"),v:w("O<hv>"),L:w("O<+(m,m)>"),G:w("O<+(L,L)>"),bF:w("O<+count,id,name(G,m,m)>"),A:w("O<cR>"),s:w("O<m>"),aS:w("O<iU>"),p:w("O<t>"),C:w("O<fg>"),D:w("O<lk>"),fp:w("O<JR>"),M:w("O<JZ>"),gZ:w("O<aGE>"),Y:w("O<aeA>"),E:w("O<aIF>"),F:w("O<L>"),dC:w("O<G>"),dS:w("O<aB?>"),d4:w("O<m?>"),J:w("cs<ah<ag>>"),b:w("ai<ne>"),do:w("ai<i1>"),r:w("ai<kF>"),U:w("ai<a5<m,@>>"),gk:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(G,m,m)>"),h:w("ai<m>"),c:w("ai<lk>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a5<m,@>>>"),a:w("a5<m,@>"),f:w("a5<@,@>"),gv:w("M<m,HA>"),w:w("iE"),g2:w("rl"),bV:w("ao2"),fL:w("cr"),K:w("aD"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),d9:w("+dx,hidden(L,ai<i1>)"),cs:w("+count,id,name(G,m,m)"),N:w("m"),e7:w("bq<L>"),gc:w("dL"),b4:w("cx<G>"),W:w("jM<m>"),l:w("t"),cM:w("fg"),i:w("lk"),cc:w("FK"),bw:w("ad_<m?>"),cy:w("K0"),q:w("n2"),y:w("R"),gR:w("L"),z:w("@"),S:w("G"),eK:w("ai<kF>?"),m:w("apj?"),cT:w("v?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,G)?"),X:w("+qrPayload,token,usesRemaining(m,m,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("q0?"),T:w("m?"),aD:w("dL?"),o:w("lk?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aYX=new A.bp(B.hf,B.bG,B.hf,B.bG)
D.aaQ=new A.bp(B.hf,B.is,B.hf,B.is)
D.aZ9=new A.bp(B.it,B.bG,B.bG,B.bG)
D.aZd=new A.az(B.cT,1.4,B.q,-1)
D.aZn=new A.az(B.ad,1,B.q,-1)
D.b_M=new A.aY(0,1/0,64,1/0)
D.b_Q=new A.aY(0,84,0,1/0)
D.ayr=w([B.lL,B.r_,B.c],x.O)
D.bXR=new A.a8(B.az,B.aC,B.x,D.ayr,null,null)
D.b0A=new A.o(null,null,null,null,null,D.bXR,B.n)
D.d2d=w([B.aV,B.bT],x.O)
D.bZY=new A.a8(B.b0,B.b4,B.x,D.d2d,null,null)
D.b0V=new A.o(null,null,null,null,null,D.bZY,B.n)
D.b78=new A.fk(null,null,null,null,null,E.jX,null,null,null,null)
D.aca=new A.cp(B.A,null,null,D.b78,null)
D.ko=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f6Y=new A.H(!0,D.ko,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqf=new A.y("No books on the shelf yet.",null,D.f6Y,null,null,null,null,null,null,null,null,null)
D.ec5=new A.D(B.o2,D.fqf,null)
D.b5C=new A.cp(B.A,null,null,D.ec5,null)
D.b6v=new A.cp(B.A,null,null,Z.W6,null)
D.b8C=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b94=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.adl=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bbQ=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bc7=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aeK=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bg2=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bgr=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.ET=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bi2=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bkv=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.agk=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fkG=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bqg=new A.eG(null,D.fkG,B.eZ,null,x.d)
D.ftq=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bqi=new A.eG(null,D.ftq,B.eZ,null,x.d)
D.bqQ=new A.ba(38e5)
D.brA=new A.ij(0,10,0,10)
D.brJ=new A.Q(0,1,0,0)
D.brU=new A.ij(0,4,0,4)
D.bsb=new A.Q(10,10,14,10)
D.bsn=new A.ij(10,4,10,4)
D.bsv=new A.ij(10,8,10,8)
D.bsw=new A.Q(10,8,8,8)
D.bsW=new A.Q(12,6,12,2)
D.btd=new A.Q(14,10,6,6)
D.bte=new A.Q(14,12,14,0)
D.bti=new A.Q(14,12,14,8)
D.btl=new A.Q(14,12,8,14)
D.btp=new A.ij(14,14,14,14)
D.bu3=new A.Q(16,2,16,10)
D.bud=new A.Q(16,6,16,30)
D.buf=new A.Q(16,6,16,8)
D.aiE=new A.Q(18,16,18,8)
D.buQ=new A.Q(18,20,18,22)
D.aiI=new A.Q(18,24,18,24)
D.buW=new A.Q(18,30,18,30)
D.bve=new A.Q(20,10,12,20)
D.bvr=new A.Q(20,18,16,18)
D.bvt=new A.Q(20,18,20,6)
D.bwi=new A.Q(24,32,24,28)
D.bwj=new A.Q(24,36,24,32)
D.bwn=new A.Q(26,26,24,14)
D.bwC=new A.Q(2,4,2,8)
D.bwG=new A.Q(30,0,30,0)
D.bwR=new A.Q(38,22,22,22)
D.aj0=new A.Q(40,24,24,24)
D.bwT=new A.ij(40,40,40,40)
D.bwV=new A.Q(46,30,30,30)
D.aj3=new A.Q(4,0,0,8)
D.bxl=new A.Q(56,40,40,40)
D.bxp=new A.Q(1.25,1.25,1.25,1.25)
D.bxq=new A.Q(60,0,60,0)
D.bxt=new A.Q(6,14,6,16)
D.bxF=new A.ij(7,3,7,3)
D.byb=new A.Q(5,1.5,5,1.5)
D.bym=new A.Q(6,2.5,6,2.5)
D.fFv=new A.y("Signature",null,B.nD,null,null,null,null,null,null,null,null,null)
D.byH=new A.bB(1,B.bh,D.fFv,null)
D.fCE=new A.y("Tell the AI what to fix",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bzu=new A.bB(1,B.bh,D.fCE,null)
D.fek=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEC=new A.y("Worksheets",null,D.fek,null,null,null,null,null,null,null,null,null)
D.fet=new A.H(!0,E.acV,null,null,null,null,13,B.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDu=new A.y("Track your project spending",null,D.fet,null,null,null,null,null,null,null,null,null)
D.cVa=w([D.fEC,B.au,D.fDu],x.p)
D.bnr=new A.fm(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cVa,null)
D.bzA=new A.bB(1,B.bh,D.bnr,null)
D.f9z=new A.H(!0,E.jX,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjT=new A.y("FAMILY LIBRARY",null,D.f9z,null,null,null,null,null,null,null,null,null)
D.bzS=new A.bB(1,B.bh,D.fjT,null)
D.MX=new C.Hy("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.a_f=new C.Hz(0,"male")
D.ajW=new C.Hz(1,"female")
D.y1=new C.Hz(2,"unknown")
D.tT=new C.akv(0,"owner")
D.MY=new C.akv(1,"editor")
D.kv=new C.akv(2,"viewer")
D.akL=new A.a0(61199,"MaterialIcons",!1)
D.bEu=new A.a0(61504,"MaterialIcons",!1)
D.bEv=new A.a0(61505,"MaterialIcons",!1)
D.bEx=new A.a0(61587,"MaterialIcons",!1)
D.bEE=new A.a0(61890,"MaterialIcons",!1)
D.bFy=new A.a0(63034,"MaterialIcons",!0)
D.bGn=new A.a0(63429,"MaterialIcons",!1)
D.amY=new A.a0(984520,"MaterialIcons",!1)
D.bF3=new A.a0(62776,"MaterialIcons",!1)
D.bIL=new A.ae(D.bF3,26,B.aZ,null,null,null)
D.bDs=new A.a0(57648,"MaterialIcons",!1)
D.bJ2=new A.ae(D.bDs,14,B.c,null,null,null)
D.bJk=new A.ae(B.G1,17,null,null,null,null)
D.bJQ=new A.ae(E.a08,null,null,null,null,null)
D.bJT=new A.ae(B.jr,18,E.jX,null,null,null)
D.a_V=new A.a0(62044,"MaterialIcons",!1)
D.bJZ=new A.ae(D.a_V,null,B.aV,null,null,null)
D.bKO=new A.ae(B.dX,16,null,null,null,null)
D.bKV=new A.ae(D.a_V,32,B.aV,null,null,null)
D.bLe=new A.ae(E.akM,18,B.cT,null,null,null)
D.bMh=new A.ae(B.Gb,22,B.av,null,null,null)
D.bMt=new A.ae(B.dX,22,B.aZ,null,null,null)
D.bME=new A.ae(Q.a0_,22,B.c,null,null,null)
D.bMK=new A.ae(B.u2,52,B.c,null,null,null)
D.bMU=new A.ae(B.Gb,30,B.av,null,null,null)
D.anA=new A.ae(B.ub,22,B.c,null,null,null)
D.bNl=new A.ae(B.dX,17,null,null,null,null)
D.bNF=new A.ae(B.vW,26,B.cT,null,null,null)
D.bOo=new A.ae(B.a0j,16,null,null,null,null)
D.bP9=new A.ae(B.u2,24,B.c,null,null,null)
D.bPe=new A.ae(B.Np,20,B.ry,null,null,null)
D.bPj=new A.ae(B.G_,null,B.bT,null,null,null)
D.bPq=new A.ae(B.jr,18,B.c,null,null,null)
D.bQ2=new A.ae(B.cD,22,B.ad,null,null,null)
D.bQS=new A.ae(B.e7,16,B.ad,null,null,null)
D.bR3=new A.ae(D.a_V,20,B.aV,null,null,null)
D.ao_=new A.ae(B.ho,20,null,null,null,null)
D.bRy=new A.ae(B.cD,18,D.ko,null,null,null)
D.bRQ=new A.ae(B.ym,28,B.c,null,null,null)
D.bRZ=new A.ae(B.Nf,null,B.h2,null,null,null)
D.bSi=new A.ae(B.ym,24,B.c,null,null,null)
D.bSJ=new A.ae(B.u2,null,B.aV,null,null,null)
D.bSK=new A.ae(B.jJ,20,B.cT,null,null,null)
D.bT3=new A.ae(B.G1,16,null,null,null,null)
D.bUB=new A.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eA,!0,null,null,null,null)
D.d9C=w([B.bv,B.aV,B.fd,B.aZ],x.O)
D.bWg=new A.a8(B.az,B.aC,B.x,D.d9C,null,null)
D.bgY=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bmr=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cS0=w([D.bgY,D.bmr],x.O)
D.bWr=new A.a8(B.b0,B.b4,B.x,D.cS0,null,null)
D.d40=w([B.f1,B.fy,B.fd],x.O)
D.bWw=new A.a8(B.az,B.aC,B.x,D.d40,null,null)
D.afl=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b95=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cTZ=w([D.afl,D.b95],x.O)
D.bX4=new A.a8(B.b0,B.b4,B.x,D.cTZ,null,null)
D.bck=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.axM=w([D.bck,D.afl],x.O)
D.bXo=new A.a8(B.az,B.aC,B.x,D.axM,null,null)
D.aei=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bew=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d3a=w([D.aei,D.bew],x.O)
D.bY1=new A.a8(B.a3,B.a8,B.x,D.d3a,null,null)
D.dg9=w([B.bz,B.n4],x.O)
D.bY3=new A.a8(B.b0,B.b4,B.x,D.dg9,null,null)
D.bgT=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dh_=w([D.bgT,D.ko,D.ko,P.Xq],x.O)
D.djl=w([0,0.07,0.9,1],x.F)
D.bYy=new A.a8(B.a3,B.a8,B.x,D.dh_,D.djl,null)
D.bYJ=new A.a8(B.az,B.aC,B.x,B.R0,null,null)
D.dfK=w([B.aZ,B.aV,B.bT],x.O)
D.bZJ=new A.a8(B.az,B.aC,B.x,D.dfK,null,null)
D.cke=w([B.bv,B.aZ,B.f1],x.O)
D.ckl=w([B.bu,B.aE,B.jd],x.O)
D.ckn=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bfy=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cqw=w([D.bfy,E.af2],x.O)
D.e7U=new A.v(1,2)
D.eTh=new A.cR(B.aW,D.e7U,3)
D.auN=w([D.eTh],x.A)
D.cxP=w([B.h4,B.cb,B.fc],x.O)
D.cAw=w([B.bK,B.bq,B.bn],x.O)
D.bAk=new C.uh("classic","Classic leather","Gold-edged brown leather",D.axM,E.jX,E.jX,"\u2766",B.L,!0,!1,!1,!1)
D.b8q=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bll=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cWM=w([D.b8q,D.bll],x.O)
D.af6=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bAf=new C.uh("ornate","Ornate gold","Double gold border and flourishes",D.cWM,D.af6,D.af6,"\u2726",B.L,!0,!0,!0,!1)
D.bbZ=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bhF=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cOX=w([D.bbZ,D.bhF],x.O)
D.bAe=new C.uh("parchment","Parchment","Old paper with dark ink",D.cOX,D.ET,G.iC,"\u2767",B.L,!0,!1,!1,!0)
D.acC=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bjL=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.de4=w([D.acC,D.bjL],x.O)
D.bf8=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bj7=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bAh=new C.uh("minimal","Clean paper","Plain and elegant, like a printed book",D.de4,D.bf8,D.bj7,"",B.L,!0,!0,!1,!0)
D.bAj=new C.uh("midnight","Midnight","Deep blue with silver stars",L.ay3,B.cr,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.bAd=new C.uh("emerald","Emerald library","Green cloth, title on the left",A_.ava,E.jX,B.fJ,"\u25c6",B.bi,!0,!1,!1,!1)
D.bkb=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.dcg=w([B.er,D.bkb],x.O)
D.bga=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bhg=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bAi=new C.uh("rose","Rose vintage","Burgundy with rose-gold lettering",D.dcg,D.bga,D.bhg,"\u2740",B.L,!0,!1,!0,!1)
D.dgE=w([B.ct,O.ml],x.O)
D.bAg=new C.uh("modern","Modern","Dark, bold, left-aligned",D.dgE,B.aN,B.c,"",B.bi,!1,!0,!1,!1)
D.a2b=w([D.bAk,D.bAf,D.bAe,D.bAh,D.bAj,D.bAd,D.bAi,D.bAg],A.ax("O<uh>"))
D.cOt=w([B.bT,B.bj],x.O)
D.bgJ=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cP8=w([D.acC,D.bgJ],x.O)
D.bbV=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cQL=w([D.bbV,B.d9],x.O)
D.cSg=w([B.b8,B.iT,B.oG],x.O)
D.cSD=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b91=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bdP=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.djh=w([D.aei,D.b91,D.bdP],x.O)
D.bAl=new C.ui("leather","Leather",D.djh,"vintage")
D.cZM=w([B.dc,B.Ld,A4.WD],x.O)
D.bAs=new C.ui("midnight","Midnight",D.cZM,"starry")
D.cSh=w([B.eB,B.e_,B.lh],x.O)
D.bAr=new C.ui("forest","Forest",D.cSh,"story")
D.dlf=w([B.eK,B.er,B.kr],x.O)
D.bAo=new C.ui("burgundy","Burgundy",D.dlf,"royal")
D.cA5=w([B.aE,B.pE,B.nM],x.O)
D.bAp=new C.ui("royal","Royal",D.cA5,"royal")
D.cUC=w([B.bq,B.ct,O.ml],x.O)
D.bAm=new C.ui("charcoal","Charcoal",D.cUC,"geo")
D.djp=w([B.cc,B.dR,B.xm],x.O)
D.bAq=new C.ui("sunset","Sunset",D.djp,"sunset")
D.dk5=w([B.iT,B.EU,B.WG],x.O)
D.bAn=new C.ui("ocean","Ocean",D.dk5,"band")
D.yU=w([D.bAl,D.bAs,D.bAr,D.bAo,D.bAp,D.bAm,D.bAq,D.bAn],A.ax("O<ui>"))
D.cV1=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cVC=w([B.ak,B.aJ,B.M],x.O)
D.cWR=w([B.er,B.e_,B.dc,B.fA,B.xp,B.cT,B.k_,B.ec,B.d5],x.O)
D.cWS=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eTi=new A.cR(B.dr,B.dE,8)
D.cX0=w([D.eTi],x.A)
D.cY5=w([B.bY,B.dR,B.kp],x.O)
D.cYz=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cZI=w([B.bY,B.hi],x.O)
D.d0R=w([B.aM,B.vh,B.xd],x.O)
D.d1K=w([B.bM,B.c9,B.ds,B.aM],x.O)
D.d2e=w([B.iU,B.cc,B.tp],x.O)
D.d2J=w([B.f1,B.cT],x.O)
D.d3g=w([B.cs,B.fl,B.hl],x.O)
D.d3r=w([B.aN,B.bj,B.dc],x.O)
D.d3Y=w([B.es,B.cS,B.e_],x.O)
D.d4g=w([B.dM,B.dc,B.Ld],x.O)
D.d5z=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a36=w(["leather","linen","plain","stars","rays"],x.s)
D.bIr=new A.a0(985219,"MaterialIcons",!1)
D.bI_=new A.a0(983781,"MaterialIcons",!1)
D.axt=w([B.ala,B.i5,B.lT,B.i6,D.bIr,B.Gn,B.q1,D.bI_,L.amL,B.yo,B.q3,B.mx],A.ax("O<a0>"))
D.a3b=w(["double","single","corners","none"],x.s)
D.d8i=w([B.dy,B.bm,B.ec],x.O)
D.d8v=w([],x.t)
D.Co=w([],x.u)
D.daR=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ddb=w([B.aF,B.fl,B.fA],x.O)
D.deG=w([B.bH,B.n_,B.XB],x.O)
D.deV=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dyu=new C.lB("construction","Construction","Jobsite & builds",B.ye)
D.dyB=new C.lB("house","Home Build","Houses & rooms",B.vR)
D.dyr=new C.lB("grocery","Grocery","Store & pantry",B.a0P)
D.dyq=new C.lB("calculator","Calculations","Math & estimates",B.NA)
D.dyz=new C.lB("lumber","Materials","Lumber & supplies",B.NQ)
D.dyn=new C.lB("kitchen","Kitchen","Remodel & meals",Aa.alZ)
D.bHX=new A.a0(983756,"MaterialIcons",!1)
D.dys=new C.lB("landscape","Landscaping","Yard & garden",D.bHX)
D.dym=new C.lB("plumbing","Plumbing","Pipes & water",B.qb)
D.dyC=new C.lB("electrical","Electrical","Wiring & power",B.h9)
D.dyk=new C.lB("store","Retail Shop","Daily business",B.l0)
D.dyl=new C.lB("paint_remodel","Paint & Remodel","Colors & walls",Ab.a0p)
D.bHl=new A.a0(983311,"MaterialIcons",!1)
D.dyy=new C.lB("roofing","Roofing","Roofs & exteriors",D.bHl)
D.bI9=new A.a0(983986,"MaterialIcons",!1)
D.dyj=new C.lB("warehouse","Warehouse","Storage & stock",D.bI9)
D.dyw=new C.lB("vehicles","Vehicles","Fleet & transport",B.Go)
D.bF5=new A.a0(62785,"MaterialIcons",!1)
D.dyp=new C.lB("farm","Farm","Crops & livestock",D.bF5)
D.dyo=new C.lB("restaurant","Restaurant","Food & catering",B.u9)
D.dyv=new C.lB("tools","Tools","Workshop gear",B.Gj)
D.dyA=new C.lB("wallet","Cash & Wallet","Quick spending",B.jJ)
D.bGi=new A.a0(63395,"MaterialIcons",!1)
D.dyx=new C.lB("concrete","Concrete","Foundation work",D.bGi)
D.dyt=new C.lB("blueprint","Blueprint","Plans & design",Ag.alg)
D.a3F=w([D.dyu,D.dyB,D.dyr,D.dyq,D.dyz,D.dyn,D.dys,D.dym,D.dyC,D.dyk,D.dyl,D.dyy,D.dyj,D.dyw,D.dyp,D.dyo,D.dyv,D.dyA,D.dyx,D.dyt],A.ax("O<lB>"))
D.dfp=w([B.bs,B.bm],x.O)
D.dga=w([B.ic,B.nR,B.dH],x.O)
D.a3O=w(["top","middle","bottom"],x.s)
D.diA=w([B.cl,B.bj,B.dc],x.O)
D.djb=w([B.b2,B.cS,B.e_],x.O)
D.dla=w([B.bK,B.ak],x.O)
D.dlb=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e56={top:0,middle:1,bottom:2}
D.doq=new A.bk(D.e56,["Top","Middle","Bottom"],x.n)
D.e4L={double:0,single:1,corners:2,none:3}
D.dov=new A.bk(D.e4L,["Double line","One line","Corners","None"],x.n)
D.e5Y={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dq2=new A.bk(D.e5Y,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dqe=new A.bk(B.hX,[],A.ax("bk<G,+(m,m)>"))
D.e5_={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CC=new A.bk(D.e5_,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<m,G>"))
D.dt3=new F.MR(32,null)
D.dt4=new F.MR(40,null)
D.dt5=new F.MR(46,null)
D.aGK=new C.asc(null)
D.e8S=new A.v(8,14)
D.fqS=new A.y("Write a new book",null,B.hH,null,B.L,null,null,null,null,null,null,null)
D.eby=new A.D(B.kW,D.fqS,null)
D.ana=new A.ae(B.hB,18,B.c,null,null,null)
D.fke=new A.y("Add",null,B.m7,null,null,null,null,null,null,null,null,null)
D.d1Z=w([D.ana,B.qt,D.fke],x.p)
D.eQW=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d1Z,null)
D.ebT=new A.D(B.nh,D.eQW,null)
D.ebU=new A.D(E.ahv,Z.W6,null)
D.fef=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnf=new A.y("New Project",null,D.fef,null,null,null,null,null,null,null,null,null)
D.d5W=w([D.ana,B.ab,D.fnf],x.p)
D.eQZ=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d5W,null)
D.ec4=new A.D(B.ik,D.eQZ,null)
D.fpF=new A.y("Choose your header",null,U.rT,null,null,null,null,null,null,null,null,null)
D.ecp=new A.D(B.hQ,D.fpF,null)
D.b7n=new A.fk(2.2,null,null,null,null,B.cT,null,null,null,null)
D.eW5=new A.a7(22,22,D.b7n,null)
D.b5y=new A.cp(B.A,null,null,D.eW5,null)
D.ecu=new A.D(B.YL,D.b5y,null)
D.bty=new A.Q(14,2,14,6)
D.fDd=new A.y("The top of your book. Tap a design to see it.",null,T.zP,null,null,null,null,null,null,null,null,null)
D.ecv=new A.D(D.bty,D.fDd,null)
D.ee2=new A.iS(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.ee5=new A.iS(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aHZ=new A.iS(1,0.9607843137254902,0.48627450980392156,0)
D.Im=new A.iS(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zs=new A.iS(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eeb=new A.iS(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.h4E=new C.bgW(null)
D.boA=new A.ml(D.h4E,null,B.aw,null,null)
D.aLC=new A.cL(0,0,0,0,null,null,D.boA,null)
D.eCH=new A.z(-42,42)
D.eLC=new A.cA([0,0,1,1])
D.aN0=new A.a9(0,0,520,160)
D.fCM=new A.y("Let the AI write it from your tree",null,B.kf,null,B.L,null,null,null,null,null,null,null)
D.bAZ=new A.dq(1,B.co,D.fCM,null)
D.cZH=w([E.a1g,B.ab,D.bAZ],x.p)
D.eQB=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.cZH,null)
D.fjU=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.ddw=w([D.ao_,B.ab,D.fjU],x.p)
D.eQL=new A.cl(B.aP,B.b9,B.j,B.m,null,B.p,null,0,D.ddw,null)
D.bMy=new A.ae(B.hS,14,B.aZ,null,null,null)
D.f8c=new A.H(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnF=new A.y("Cashier",null,D.f8c,null,null,null,null,null,null,null,null,null)
D.d6s=w([D.bMy,B.bp,D.fnF],x.p)
D.eQO=new A.cl(B.aP,B.e,B.N,B.m,null,B.p,null,0,D.d6s,null)
D.fjV=new A.y("Transfer & settings",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bzk=new A.bB(1,B.bh,D.fjV,null)
D.cRK=w([D.anA,B.at,D.bzk],x.p)
D.eQP=new A.cl(B.aP,B.e,B.j,B.m,null,B.p,null,0,D.cRK,null)
D.eUP=new A.ar(16,40)
D.eUU=new A.ar(22,64)
D.eV0=new A.ar(280,88)
D.eVM=new A.a7(30,null,null,null)
D.eX3=new A.hQ(2,12,12,1.05,null)
D.fnl=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eXN=new A.b1(D.fnl,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fnA=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aP8=new A.b1(D.fnA,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fvI=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new A.b1(D.fvI,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fG4=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eYl=new A.b1(D.fG4,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fpD=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eYs=new A.b1(D.fpD,null,null,null,null,null,null,null,null,null,null,null,null,B.fM,!1,null,null,null,B.r,null)
D.fDq=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aPc=new A.b1(D.fDq,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fkv=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eYS=new A.b1(D.fkv,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fGL=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eZC=new A.b1(D.fGL,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fBH=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_0=new A.b1(D.fBH,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fG8=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f_3=new A.b1(D.fG8,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fxh=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_5=new A.b1(D.fxh,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.frs=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f_6=new A.b1(D.frs,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.frt=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f06=new A.b1(D.frt,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fnn=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f0o=new A.b1(D.fnn,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fph=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f0I=new A.b1(D.fph,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fwN=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new A.b1(D.fwN,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsg=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f0Z=new A.b1(D.fsg,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.f47=new A.H(!0,D.ko,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4x=new A.H(!0,D.ko,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5a=new A.rH(!0,B.rH,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5s=new A.H(!0,D.ko,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f60=new A.H(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a85=new A.rH(!0,B.So,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f70=new A.H(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7p=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f90=new A.H(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f94=new A.H(!0,G.iC,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fak=new A.H(!0,B.M,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new A.H(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbL=new A.H(!0,B.bT,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbP=new A.H(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcb=new A.H(!0,D.ET,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fck=new A.H(!0,B.aZ,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdk=new A.H(!0,B.cT,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdO=new A.H(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fed=new A.H(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffF=new A.H(!0,B.ak,null,null,null,null,11.5,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffN=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRp=new A.H(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8y=new A.H(!0,B.ak,null,null,null,null,12,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new A.H(!0,G.iC,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new A.H(!0,G.iC,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiK=new A.y("Themes",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fjl=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f8K=new A.H(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjK=new A.y("Debt receipt",null,D.f8K,null,B.L,null,null,null,null,null,null,null)
D.aRk=new A.H(!0,B.ak,null,null,null,null,11,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk1=new A.y("Person who owes",null,D.aRk,null,null,null,null,null,null,null,null,null)
D.fkY=new A.y("Notes",null,B.a8e,null,null,null,null,null,null,null,null,null)
D.fln=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f7H=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flr=new A.y("Share",null,D.f7H,null,null,null,null,null,null,null,null,null)
D.fmm=new A.y("Move your family trees",null,D.aRp,null,null,null,null,null,null,null,null,null)
D.fmY=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fnz=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.foS=new A.y("Remove this book?",null,B.hu,null,null,null,null,null,null,null,null,null)
D.aRR=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fq0=new A.y("What should the AI do?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.fro=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fsv=new A.y("Ribbon bookmark",null,B.iP,null,null,null,null,null,null,null,null,null)
D.ffz=new A.H(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new A.y("NGMY.ORG",null,D.ffz,null,B.L,null,null,null,null,null,null,null)
D.fud=new A.y("Scan family tree QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fc3=new A.H(!0,B.c,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuY=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fc3,null,B.L,null,null,null,null,null,null,null)
D.fwa=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fwh=new A.y("Thumbnail",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fwT=new A.y("Save the cover",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fxi=new A.y("Your photos",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fxx=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fy4=new A.y("Design your cover",null,U.rT,null,null,null,null,null,null,null,null,null)
D.fya=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fye=new A.y("PICTURE",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fyA=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fyC=new A.y("You can undo it right after.",null,T.Jh,null,null,null,null,null,null,null,null,null)
D.fz9=new A.y("Print",null,B.uQ,null,null,null,null,null,null,null,null,null)
D.fzw=new A.y("Amount owed",null,D.aRk,null,null,null,null,null,null,null,null,null)
D.fzL=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fAl=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fAo=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fAP=new A.y("Debtor signature",null,B.a8e,null,null,null,null,null,null,null,null,null)
D.fAY=new A.y("Change icon",null,E.aQB,null,null,null,null,null,null,null,null,null)
D.fC9=new A.y("Family tree QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fCC=new A.y("Download",null,B.uQ,null,null,null,null,null,null,null,null,null)
D.fCG=new A.y("Change",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fDw=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fDz=new A.y("WHAT SHOULD IT CHANGE?",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fE8=new A.y("COLOUR",null,H.mQ,null,null,null,null,null,null,null,null,null)
D.fEm=new A.y("Do it",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fEp=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fFp=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f36=new A.H(!0,E.jX,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFE=new A.y("Write the first page myself",null,D.f36,null,null,null,null,null,null,null,null,null)
D.fGb=new A.y("Use this header",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fGh=new A.y("Create Project",null,E.aR3,null,null,null,null,null,null,null,null,null)
D.h0R=new C.abk(1,"header")
D.a9v=new C.abk(2,"projects")
D.h0S=new C.abk(3,"cashier")
D.a9w=new C.abk(4,"familyTree")
D.hcR=new C.cx_(0,"start")
D.hcS=new C.cx0(0,"start")
D.h1f=new C.Yl(null)
D.h2e=new C.YN(null)
D.dqb=new A.bk(B.hX,[],A.ax("bk<m,FK>"))
D.d8U=w([],x.E)
D.d8V=w([],x.M)
D.h2L=new C.bec(D.dqb,D.d8U,D.d8V,0,0,null,null)
D.h5i=new C.a_a(null)
D.aad=new C.aJm(0,"projects")
D.aWz=new C.aJm(1,"cashier")
D.hax=new C.aJm(2,"familyTree")})()};
(a=>{a["wYS6dpvup6kb0dWOrSP5/2ENmis="]=a.current})($__dart_deferred_initializers__);