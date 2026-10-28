((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,Q,A_,G,F,E,A0,R,A1,A2,A3,S,A4,A5,M,A6,H,A7,A8,T,U,V,A9,Aa,W,Ab,Ac,Ad,X,Ae,Af,L,Ag,Y,Z,Ah,Ai,K,O,C={
bAR(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bAR=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v2(null,""),$async$bAR)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.U(y.j)
t=A.mV(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dn(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.ds(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qC(t,a1,B.hj,E.EA),$async$bAR)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Pw(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ac(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.U(l!=null&&A.Kf(l)?y.l:y.i)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cz
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1e(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAR,v)},
afA(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afA=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v2(null,""),$async$afA)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.U(y.j)
t=A.mV(b6)
s=x.S
r=A.da(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a11(new A.J(r,new C.frk(),r.$ti.k("J<aj.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.frj(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afA)
case 6:l=c5
k=F.Pw(l==null?"":l)
if(k==null)throw A.U("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.amL(s,D.dg5,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.U("There is no page to change.")
h=A.V(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dn(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afA)
case 10:l=c5
k=l==null?null:F.Pw(l)
if(k==null)throw A.U(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d7(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kS(a5,a2.k("kS<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
b0=J.a8(a9)
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
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cD(new A.bc(h,s),new C.frl(),s.k("H.E"),p)
p=F.a11(A.p1(p,3,A.a3(p).k("H.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cy<1>")
b4=A.B(new A.cy(h,s),s.k("H.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1e(s,b9),$async$afA)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.amL(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afA,v)},
hfb(d,e,f){return A.c9(null,B.w.j(0.65),!1,null,new C.fAq(e,f),d,null,!0,!0,x.g2)},
amL:function amL(d,e,f){this.a=d
this.b=e
this.c=f},
frk:function frk(){},
frj:function frj(d){this.a=d},
frl:function frl(){},
fAq:function fAq(d,e){this.a=d
this.b=e},
byH(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$byH=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.fgM())){u=null
w=1
break}t=B.d.de(b1,new C.fgN())
s=$.X()
r=new A.rP()
q=A.Gs(r,D.aKg)
p=A.L()
p.r=B.c.gp(0)
q.aX(D.aKg,p)
o=A.L()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fy
n=new C.fgS(t)
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
a3=new A.aQ(s.r,B.ap,null,null,p)
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
a3=new A.aQ(s.r,B.ap,null,null,p)
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
return A.b(r.q8().yT(520,160),$async$byH)
case 4:w=3
return A.b(b3.hl(B.fS),$async$byH)
case 3:b0=b3
u=b0==null?null:J.fa(B.dF.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byH,v)},
fp0(d){return C.hTk(d)},
hTk(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fp0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bdp()
n=d.x!=null&&d.yz(null).length===0
if(d.x!=null)t=n?D.yP:D.HB
else t=d.gSO()?D.HB:D.aFm
w=3
return A.b(C.byH(d.ax),$async$fp0)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alu(s)
r=A.a39(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aFm}else{p.c=C.wn(q,!0)
p.b=n?D.yP:D.HB}r.a1Q(A.fKj(new C.fp2(p,d,new C.fp3(),t,n,o),null,D.brx,B.vI))
u=r.jO(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fp0,v)},
fvE(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fvE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fp0(d),$async$fvE)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A5.FX(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvE,v)},
fgM:function fgM(){},
fgN:function fgN(){},
fgS:function fgS(d){this.a=d},
fp3:function fp3(){},
fp2:function fp2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fp1:function fp1(){},
fAS(d,e){var w=0,v=A.j(x.H)
var $async$fAS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,B.w.j(0.55),!0,null,new C.fAW(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fAS)
case 2:return A.h(null,v)}})
return A.i($async$fAS,v)},
bBk(d,e,f,g){return C.i_H(d,e,f,g)},
i_H(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBk=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gam(e.split(",")):e
r=B.cB.aI(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eMJ)
w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.fAO(g,r,f),d,null,!0,!0,x.H),$async$bBk)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBk,v)},
fAX(d,e){var w=0,v=A.j(x.H)
var $async$fAX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,null,!0,null,new C.fB_(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fAX)
case 2:return A.h(null,v)}})
return A.i($async$fAX,v)},
aWN:function aWN(d,e){this.c=d
this.a=e},
c_a:function c_a(){},
b8N:function b8N(d,e){this.b=d
this.a=e},
fAW:function fAW(d,e){this.a=d
this.b=e},
fAT:function fAT(d){this.a=d},
fAU:function fAU(d,e,f){this.a=d
this.b=e
this.c=f},
fAV:function fAV(d,e){this.a=d
this.b=e},
fAO:function fAO(d,e,f){this.a=d
this.b=e
this.c=f},
fAM:function fAM(d){this.a=d},
fAN:function fAN(d,e,f){this.a=d
this.b=e
this.c=f},
fB_:function fB_(d,e){this.a=d
this.b=e},
fAY:function fAY(d){this.a=d},
fAZ:function fAZ(d,e,f){this.a=d
this.b=e
this.c=f},
fk7(d,e){var w=0,v=A.j(x.y),u,t
var $async$fk7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0N(d),$async$fk7)
case 3:t=g
J.nf(t,new C.fk8(e))
u=A.agd(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fk7,v)},
fk8:function fk8(d){this.a=d},
amS:function amS(d,e,f){this.c=d
this.d=e
this.a=f},
aB8:function aB8(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dCA:function dCA(d,e){this.a=d
this.b=e},
dCl:function dCl(d,e){this.a=d
this.b=e},
dCo:function dCo(d,e,f){this.a=d
this.b=e
this.c=f},
dCn:function dCn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dCm:function dCm(d,e){this.a=d
this.b=e},
dCp:function dCp(d,e){this.a=d
this.b=e},
dCj:function dCj(){},
dCk:function dCk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCi:function dCi(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dC3:function dC3(d){this.a=d},
dC4:function dC4(d,e,f){this.a=d
this.b=e
this.c=f},
dC5:function dC5(d,e){this.a=d
this.b=e},
dC2:function dC2(d){this.a=d},
dCa:function dCa(d,e){this.a=d
this.b=e},
dC1:function dC1(d){this.a=d},
dCb:function dCb(d,e,f){this.a=d
this.b=e
this.c=f},
dCc:function dCc(d,e,f){this.a=d
this.b=e
this.c=f},
dC0:function dC0(d,e){this.a=d
this.b=e},
dCd:function dCd(d,e,f){this.a=d
this.b=e
this.c=f},
dC_:function dC_(d,e){this.a=d
this.b=e},
dCe:function dCe(d,e){this.a=d
this.b=e},
dBZ:function dBZ(d){this.a=d},
dCf:function dCf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dBX:function dBX(){},
dBR:function dBR(d){this.a=d},
dBS:function dBS(d){this.a=d},
dBY:function dBY(d,e){this.a=d
this.b=e},
dCg:function dCg(d,e){this.a=d
this.b=e},
dBW:function dBW(d){this.a=d},
dCh:function dCh(d){this.a=d},
dBV:function dBV(){},
dC6:function dC6(d,e){this.a=d
this.b=e},
dBU:function dBU(d){this.a=d},
dC7:function dC7(d,e,f){this.a=d
this.b=e
this.c=f},
dBT:function dBT(d,e){this.a=d
this.b=e},
dBQ:function dBQ(d,e){this.a=d
this.b=e},
dC8:function dC8(d){this.a=d},
dC9:function dC9(d,e,f){this.a=d
this.b=e
this.c=f},
dCD:function dCD(){},
dCE:function dCE(d,e){this.a=d
this.b=e},
dCB:function dCB(d){this.a=d},
dCC:function dCC(d){this.a=d},
dCx:function dCx(d,e){this.a=d
this.b=e},
dCy:function dCy(d){this.a=d},
dCq:function dCq(d,e,f){this.a=d
this.b=e
this.c=f},
dCr:function dCr(d,e,f){this.a=d
this.b=e
this.c=f},
dCs:function dCs(d,e,f){this.a=d
this.b=e
this.c=f},
dCt:function dCt(d,e,f){this.a=d
this.b=e
this.c=f},
dCu:function dCu(d,e,f){this.a=d
this.b=e
this.c=f},
dCv:function dCv(d,e,f){this.a=d
this.b=e
this.c=f},
dCw:function dCw(d,e,f){this.a=d
this.b=e
this.c=f},
dCF:function dCF(){},
dCG:function dCG(){},
dCH:function dCH(){},
dCI:function dCI(d){this.a=d},
dCz:function dCz(d,e){this.a=d
this.b=e},
hbn(d){return B.d.dM(D.a0z,new C.fkD(d),new C.fkE())},
tX:function tX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fkD:function fkD(d){this.a=d},
fkE:function fkE(){},
ajd:function ajd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSC:function aSC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RK:function RK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcl:function bcl(){this.d=$
this.c=this.a=null},
d2s:function d2s(d,e){this.a=d
this.b=e},
d2q:function d2q(d,e){this.a=d
this.b=e},
d2r:function d2r(){},
d2t:function d2t(d,e){this.a=d
this.b=e},
fXk(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n0(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
K0(d,e){return C.hRY(d,e)},
hRY(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$K0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$K0)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aG(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d7(p,x.f)
o=A.cD(o,new C.fmB(),o.$ti.k("H.E"),x.B)
n=A.a3(o).k("a2<H.E>")
o=A.B(new A.a2(o,new C.fmC(),n),n.k("H.E"))
B.d.b1(o,new C.fmD())
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
return A.i($async$K0,v)},
Ao(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Ao=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Ao)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fzw(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Ao)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ao,v)},
aOP(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aOP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K0(d,e),$async$aOP)
case 2:u=h
t=J.cE(u)
s=t.be(u,new C.fHz(f))
if(s===-1)t.cn(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ao(d,e,u),$async$aOP)
case 3:return A.h(null,v)}})
return A.i($async$aOP,v)},
bz8(d,e,f){var w=0,v=A.j(x.H),u
var $async$bz8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K0(d,e),$async$bz8)
case 2:u=h
J.nf(u,new C.fk_(f))
w=3
return A.b(C.Ao(d,e,u),$async$bz8)
case 3:return A.h(null,v)}})
return A.i($async$bz8,v)},
bzn(d,e){return C.hRX(d,e)},
hRX(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzn=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bzn)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.LS
w=1
break}p=B.R.aG(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aN(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.BN.ag(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a22,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a1w,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1r,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cN1,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.GS(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.LS
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.LS
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzn,v)},
QB(d,e,f){return C.i_d(d,e,f)},
i_d(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QB=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$QB)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ad(),null)),$async$QB)
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
return A.i($async$QB,v)},
Q5(d,e){return C.hRZ(d,e)},
hRZ(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Q5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Q5)
case 7:r=g
q=r.rK("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.K0(d,e),$async$Q5)
case 8:if(!j.cw(g)){n=B.a.i(d.toLowerCase())
m=J.lj(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Q5)
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
return A.i($async$Q5,v)},
aeU(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aeU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q5(d,e),$async$aeU)
case 3:s=g
r=J.a8(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.az(),$async$aeU)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aeU)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeU,v)},
a1r(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1r=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Q5(d,e),$async$a1r)
case 2:s=h
J.hJ(s,f)
w=3
return A.b(A.az(),$async$a1r)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1r)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1r)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1r)
case 6:return A.h(null,v)}})
return A.i($async$a1r,v)},
n0:function n0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmB:function fmB(){},
fmC:function fmC(){},
fmD:function fmD(){},
fzw:function fzw(){},
fHz:function fHz(d){this.a=d},
fk_:function fk_(d){this.a=d},
GS:function GS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bLk:function bLk(d){this.a=d},
i_w(d,e,f,g,h,i,j){return A.a5(d,!1).ci(A.em(new C.fA4(j,i,f,e,h,g),!0,null,x.H))},
Q0(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Q0=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q5(h,g),$async$Q0)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ac(k)>=6){d.I(x.q).f.R(D.aMi)
u=!1
w=1
break}w=4
return A.b(C.hfb(d,f,e),$async$Q0)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aeU(h,g),$async$Q0)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n0(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.Ao(h,r,p),$async$Q0)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QB(h,r,new C.GS("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Q0)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Q0,v)},
fA4:function fA4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Yf:function Yf(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aya:function aya(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d37:function d37(d){this.a=d},
d36:function d36(d,e){this.a=d
this.b=e},
d2W:function d2W(d,e){this.a=d
this.b=e},
d2T:function d2T(d,e){this.a=d
this.b=e},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2X:function d2X(d){this.a=d},
d2D:function d2D(d){this.a=d},
d2B:function d2B(d){this.a=d},
d2C:function d2C(d){this.a=d},
d2E:function d2E(d){this.a=d},
d2U:function d2U(d){this.a=d},
d2V:function d2V(){},
d2z:function d2z(d){this.a=d},
d2A:function d2A(d,e){this.a=d
this.b=e},
d2F:function d2F(d){this.a=d},
d2G:function d2G(d,e){this.a=d
this.b=e},
d35:function d35(d){this.a=d},
d34:function d34(d,e){this.a=d
this.b=e},
d33:function d33(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2w:function d2w(d,e){this.a=d
this.b=e},
d2S:function d2S(d,e){this.a=d
this.b=e},
d2J:function d2J(d){this.a=d},
d2K:function d2K(d){this.a=d},
d2I:function d2I(){},
d2L:function d2L(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2N:function d2N(d,e){this.a=d
this.b=e},
d2O:function d2O(d,e,f){this.a=d
this.b=e
this.c=f},
d2H:function d2H(d,e){this.a=d
this.b=e},
d2Z:function d2Z(d){this.a=d},
d2Y:function d2Y(){},
d3_:function d3_(d){this.a=d},
d30:function d30(d){this.a=d},
d31:function d31(d){this.a=d},
d32:function d32(d,e){this.a=d
this.b=e},
d2x:function d2x(d){this.a=d},
d2y:function d2y(d){this.a=d},
Yj:function Yj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcG:function bcG(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d4S:function d4S(d){this.a=d},
d4T:function d4T(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4U:function d4U(d){this.a=d},
d4Q:function d4Q(d){this.a=d},
d4V:function d4V(d){this.a=d},
d4P:function d4P(d){this.a=d},
d4W:function d4W(d,e){this.a=d
this.b=e},
d4O:function d4O(d,e){this.a=d
this.b=e},
d4X:function d4X(d,e){this.a=d
this.b=e},
Yh:function Yh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ado:function ado(d,e,f){this.a=d
this.b=e
this.c=f},
ayb:function ayb(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d3m:function d3m(d,e){this.a=d
this.b=e},
d3l:function d3l(d,e){this.a=d
this.b=e},
d3q:function d3q(d){this.a=d},
d3p:function d3p(d,e){this.a=d
this.b=e},
d3n:function d3n(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3r:function d3r(d){this.a=d},
d3s:function d3s(d){this.a=d},
d3k:function d3k(d,e){this.a=d
this.b=e},
d3j:function d3j(d,e){this.a=d
this.b=e},
J7:function J7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xy:function Xy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cCq:function cCq(d){this.a=d},
cCr:function cCr(){},
cCs:function cCs(d){this.a=d},
b9Y:function b9Y(d,e,f){this.b=d
this.c=e
this.a=f},
b9P:function b9P(d,e){this.b=d
this.a=e},
tY:function tY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XQ:function XQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9W:function b9W(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cVS:function cVS(d,e,f){this.a=d
this.b=e
this.c=f},
cVR:function cVR(d,e){this.a=d
this.b=e},
cWg:function cWg(d){this.a=d},
cW3:function cW3(){},
cWh:function cWh(d){this.a=d},
cW2:function cW2(){},
cWi:function cWi(d,e){this.a=d
this.b=e},
cW1:function cW1(d,e){this.a=d
this.b=e},
cWj:function cWj(d,e){this.a=d
this.b=e},
cW0:function cW0(d,e){this.a=d
this.b=e},
cWk:function cWk(d){this.a=d},
cW_:function cW_(){},
cWl:function cWl(d,e){this.a=d
this.b=e},
cVZ:function cVZ(d,e){this.a=d
this.b=e},
cWm:function cWm(d){this.a=d},
cWb:function cWb(d,e){this.a=d
this.b=e},
cWn:function cWn(d){this.a=d},
cWo:function cWo(d){this.a=d},
cWq:function cWq(d){this.a=d},
cWr:function cWr(d){this.a=d},
cWa:function cWa(d,e){this.a=d
this.b=e},
cWs:function cWs(d,e){this.a=d
this.b=e},
aFc:function aFc(d){this.a=d},
bf8:function bf8(d){this.a=d},
b8b:function b8b(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hQW(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agp(a6),a5=a4.length
if(a5===0)return""
w=A.V(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bx(new A.S(Date.now(),0,!1))
s=new C.fkH(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("H.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xp)m.push(l===D.YB?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jT(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jT(h,a2,a2)-A.jT(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ag(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.fkF(u,f),p),new C.fkG(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hQX(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agp(a0),d=e.length
if(d===0)return""
w=x.N
v=A.V(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fkM(v,e)
q=new C.fkK(v)
p=A.V(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ag(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ag(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.d9(new A.bc(p,d),d.k("H.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.fe(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gai(e),k=new A.h2(l,new C.fkL(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ag(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hCI(d,e,f,g){var w,v,u=C.hQY(d,e)
if(u<=0||f.length<=u)return new A.acZ(!1,D.BC,f)
if(g.t(0,e.a))return new A.acZ(!1,D.BC,f)
w=A.T(f).c
v=A.da(f,0,A.dJ(u,"count",x.S),w).dE(0)
return new A.acZ(!0,A.da(f,u,null,w).dE(0),v)},
hCJ(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agp(d3),d2=d1.length
if(d2===0)return D.fEP
w=x.N
v=A.V(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d3z(t))}s=new C.d3Q(v)
d2=x.h
r=A.V(w,d2)
q=new C.d3I(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d3H(r)
l=A.V(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.cg(0,k,new C.d3A()),o)}h=new C.d3G(s)
g=new C.d3F(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<H.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d3B(h),o),o.k("H.E"))
e=f.length===0?new A.bc(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.V(w,p)
a3=A.V(w,w)
a4=A.V(w,d2)
d2=x.gR
a5=A.V(w,d2)
a6=A.V(w,x.d9)
a7=A.V(w,d2)
a8=A.a([],x.s)
a9=new C.d3O(new C.d3K(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.V(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gaj0(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.ag(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qZ(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.V(w,x.cc)
b5=A.a([],x.M)
b6=A.V(w,d2)
b7=new C.d3y(a2,new C.d3P(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cy<1>")
d2=A.B(new A.cy(b4,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.F7(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jg(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cy<1>")
d2=A.B(new A.cy(b6,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bH(0,new C.d3C(c6,b4))
for(d2=new A.cJ(a4,a4.$ti.k("cJ<1,2>")).gai(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gU(j)
if(b6.ag(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gai(b5),i=new A.h2(j,new C.d3D(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b1(o,new C.d3E())
c6.push(new C.aHh(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcq(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
haV(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
h5k(d,e,f,g,h,i,j,k,l,m,n){return new C.YT(k,f,j,e,l,n,m,d,g,h,i,null)},
aA9(d,e,f,g,h,i,j){return new C.bg4(i,d,e,f,j,h,g,null)},
anY:function anY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBJ:function aBJ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQb:function dQb(d){this.a=d},
dQa:function dQa(d){this.a=d},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQc:function dQc(d){this.a=d},
dQh:function dQh(d){this.a=d},
dQg:function dQg(d,e){this.a=d
this.b=e},
anS:function anS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBG:function aBG(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dPC:function dPC(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPB:function dPB(d){this.a=d},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP5:function dP5(d){this.a=d},
dP6:function dP6(d,e){this.a=d
this.b=e},
dPk:function dPk(d){this.a=d},
dPi:function dPi(d){this.a=d},
dPj:function dPj(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPm:function dPm(d,e){this.a=d
this.b=e},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPn:function dPn(d){this.a=d},
dPr:function dPr(d){this.a=d},
dPs:function dPs(d){this.a=d},
dPv:function dPv(d,e){this.a=d
this.b=e},
dOU:function dOU(d,e){this.a=d
this.b=e},
dOV:function dOV(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e,f){this.a=d
this.b=e
this.c=f},
dPz:function dPz(d,e,f){this.a=d
this.b=e
this.c=f},
dPy:function dPy(d){this.a=d},
dOW:function dOW(d){this.a=d},
dOX:function dOX(d){this.a=d},
dOY:function dOY(){},
dOZ:function dOZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP2:function dP2(d,e){this.a=d
this.b=e},
dP1:function dP1(d,e){this.a=d
this.b=e},
dP0:function dP0(d){this.a=d},
dP3:function dP3(d,e){this.a=d
this.b=e},
dP_:function dP_(d){this.a=d},
dPE:function dPE(d){this.a=d},
dPf:function dPf(){},
dPg:function dPg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPe:function dPe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPa:function dPa(d,e,f){this.a=d
this.b=e
this.c=f},
dP9:function dP9(d,e,f){this.a=d
this.b=e
this.c=f},
dP7:function dP7(d,e){this.a=d
this.b=e},
dPb:function dPb(d){this.a=d},
dPc:function dPc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP8:function dP8(d,e){this.a=d
this.b=e},
dPd:function dPd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPM:function dPM(){},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPO:function dPO(d){this.a=d},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPI:function dPI(d){this.a=d},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPK:function dPK(d,e){this.a=d
this.b=e},
dPL:function dPL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPQ:function dPQ(d){this.a=d},
dPH:function dPH(d){this.a=d},
dP4:function dP4(d){this.a=d},
bco:function bco(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d3w:function d3w(d){this.a=d},
d3v:function d3v(d,e){this.a=d
this.b=e},
d3x:function d3x(d){this.a=d},
d3u:function d3u(d,e){this.a=d
this.b=e},
fkH:function fkH(d,e){this.a=d
this.b=e},
fkI:function fkI(d){this.a=d},
fkJ:function fkJ(){},
fkF:function fkF(d,e){this.a=d
this.b=e},
fkG:function fkG(){},
fkM:function fkM(d,e){this.a=d
this.b=e},
fkN:function fkN(d){this.a=d},
fkO:function fkO(){},
fkK:function fkK(d){this.a=d},
fkL:function fkL(d,e){this.a=d
this.b=e},
Jg:function Jg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F7:function F7(d,e){this.a=d
this.b=e},
bcq:function bcq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d3z:function d3z(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3I:function d3I(d){this.a=d},
d3J:function d3J(){},
d3H:function d3H(d){this.a=d},
d3A:function d3A(){},
d3G:function d3G(d){this.a=d},
d3F:function d3F(d,e){this.a=d
this.b=e},
d3B:function d3B(d){this.a=d},
d3K:function d3K(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d3L:function d3L(d){this.a=d},
d3M:function d3M(d){this.a=d},
d3N:function d3N(){},
d3O:function d3O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3P:function d3P(){},
d3y:function d3y(d,e,f,g,h,i,j,k,l,m){var _=this
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
d3C:function d3C(d,e){this.a=d
this.b=e},
d3D:function d3D(d){this.a=d},
d3E:function d3E(){},
aHh:function aHh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcr:function bcr(d,e){this.b=d
this.a=e},
d3R:function d3R(){},
d3S:function d3S(d){this.a=d},
d3T:function d3T(d){this.a=d},
d3U:function d3U(){},
bg5:function bg5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbw:function bbw(d,e){this.b=d
this.a=e},
btD:function btD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f3A:function f3A(d){this.a=d},
bjq:function bjq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eFU:function eFU(d){this.a=d},
eFT:function eFT(d,e){this.a=d
this.b=e},
YT:function YT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aA7:function aA7(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
djH:function djH(d,e){this.a=d
this.b=e},
djG:function djG(d){this.a=d},
djE:function djE(d){this.a=d},
djF:function djF(d){this.a=d},
djQ:function djQ(d){this.a=d},
djR:function djR(d){this.a=d},
djP:function djP(d,e){this.a=d
this.b=e},
djS:function djS(){},
djV:function djV(d){this.a=d},
djO:function djO(d,e){this.a=d
this.b=e},
djU:function djU(){},
djW:function djW(d){this.a=d},
djN:function djN(d,e){this.a=d
this.b=e},
djX:function djX(d){this.a=d},
djM:function djM(d){this.a=d},
djY:function djY(d){this.a=d},
djL:function djL(d){this.a=d},
djZ:function djZ(d){this.a=d},
djK:function djK(d){this.a=d},
dk_:function dk_(d){this.a=d},
djJ:function djJ(d){this.a=d},
dk0:function dk0(d){this.a=d},
djI:function djI(d,e){this.a=d
this.b=e},
djT:function djT(d){this.a=d},
abR:function abR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg4:function bg4(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
abQ:function abQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bg3:function bg3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dk1:function dk1(d){this.a=d},
dk2:function dk2(d,e){this.a=d
this.b=e},
aA8:function aA8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGk:function aGk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abS:function abS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkb:function dkb(d){this.a=d},
J3:function J3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h0e(d){var w=d.S,v=x.N
return w.iN(w,new C.c5I(),v,v)},
hug(d){var w=d.bC
if(w>=0)return w
return 5},
h0g(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h0e(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h0f(d,e){var w=C.h0g(d,e)
if(w!=null&&w.ca(new A.S(Date.now(),0,!1)))return!0
return!1},
huh(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h0e(d),w,w)
u=C.h0g(d,e)
t=u!=null&&u.ca(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a5().ac())
d.S=v},
aYc(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYc=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l8(t,B.Ho),$async$aYc)
case 3:if(l){u=!0
w=1
break}u=A.kL(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ho,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYc,v)},
c5I:function c5I(){},
hue(){var w,v=$.pf(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fT(u)},
HJ(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$HJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$HJ)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$HJ)
case 8:r=e
if(r==null){u=A.V(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a9(m)
$.am.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$HJ,v)},
a61(d){return C.huf(d)},
huf(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a61=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$a61)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hA("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$a61)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a9(p)
$.am.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a61,v)},
c5H(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c5H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.HJ(),$async$c5H)
case 3:t=m.jq(f),t=t.gai(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
q=r.b
if(s.b(q)){p=J.a8(q)
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
return A.i($async$c5H,v)},
MC(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c5H(d),$async$MC)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.HJ(),$async$MC)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dV(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,t,o)
w=9
return A.b(C.a61(s),$async$MC)
case 9:case 8:u=t
w=1
break
case 5:n=C.hue()
w=10
return A.b(C.HJ(),$async$MC)
case 10:s=f
J.aG(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a61(s),$async$MC)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MC,v)},
aYb(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.HJ(),$async$aYb)
case 3:t=f
for(s=J.dj(t),r=s.gdL(t),r=r.dE(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a61(t),$async$aYb)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYb,v)},
a62(d,e,f){var w=0,v=A.j(x.H),u
var $async$a62=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.anX(d,e),$async$a62)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MC(d),$async$a62)
case 7:w=4
break
case 5:w=8
return A.b(C.aYb(d),$async$a62)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a62,v)},
anR(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$anR=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.anX(f,e),$async$anR)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c0(),$async$anR)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.HJ(),$async$anR)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a8(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anR,v)},
aYa(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c0(),$async$aYa)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.HJ(),$async$aYa)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a8(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYa,v)},
hui(){var w,v=$.pf(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fT(u)},
anU(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$anU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$anU)
case 3:if(!g){u=null
w=1
break}t=C.hui()
w=4
return A.b(A.U2(),$async$anU)
case 4:s=g
r=B.dH.aI(B.R.ao(d.eJ(),null))
r=B.cS.gcu().aI(r)
q=e?999:2
J.aG(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a63(s),$async$anU)
case 5:p=e?999:2
u=new A.a_2("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anU,v)},
anT(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$anT=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.U2(),$async$anT)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aN(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aYa(J.k(l==null?"":l),j),$async$anT)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ac(t)===0){u=null
w=1
break}s=null
try{r=B.c4.c8(0,B.cB.aI(t))
s=C.h0h(r)}catch(f){q=A.a9(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dV(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=5
return A.b(A.a63(p),$async$anT)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anT,v)},
h0h(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.huk(A.a1(w,x.N,x.z))
return u}catch(t){v=A.a9(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fLm(d){var w=0,v=A.j(x.m),u,t,s
var $async$fLm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.anT(t[1])
w=1
break}u=null
w=1
break}u=C.h0h(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLm,v)},
huk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d7(v,x.f)
u=A.cD(u,new C.c5K(),u.$ti.k("H.E"),x.k)
t=A.a3(u).k("a2<H.E>")
s=A.B(new A.a2(u,new C.c5L(),t),t.k("H.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.V(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jq(p),t=t.gai(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d7(l,u)
n=A.cD(n,new C.c5M(),n.$ti.k("H.E"),o)
k=A.a3(n).k("a2<H.E>")
j=A.B(new A.a2(n,new C.c5N(),k),k.k("H.E"))
if(j.length!==0)q.n(0,m,j)}return new C.anV(h,w,s,r,q)},
anX(d,e){var w=0,v=A.j(x.y),u,t
var $async$anX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Mt(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Ad(d),$async$anX)
case 3:u=t.cw(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anX,v)},
c5T(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c5T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Ad(d),$async$c5T)
case 3:t=s.b6(f,new C.c5U(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b1(t,new C.c5V())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5T,v)},
U3(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$U3=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.anX(e,d),$async$U3)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MC(e),$async$U3)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Ad(e),$async$U3)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c5R(g))
r=A.B(t,t.$ti.k("H.E"))}t=J.a8(r)
if(t.gal(r)){u=null
w=1
break}t=t.dt(r,new C.c5S(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.V(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.K0(e,o),$async$U3)
case 14:n=i
if(J.cw(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.anV(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$U3,v)},
aYf(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYf=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U3(d,e,f,g),$async$aYf)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.FN(A.Jb(q.eJ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYf,v)},
aYe(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYe=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U3(d,e,f,g),$async$aYe)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.anU(r,f),$async$aYe)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEl(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYe,v)},
U4(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$U4=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fLm(a0),$async$U4)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.anR(g.a,d,e,f,s,r),$async$U4)
case 6:if(!a2){if(r)throw A.U(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.U(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.byZ(e,j),$async$U4)
case 12:case 11:w=13
return A.b(C.agb(e,j,s),$async$U4)
case 13:h=n.h(0,i)
w=h!=null&&J.cw(h)?14:15
break
case 14:w=16
return A.b(C.Ao(e,i,h),$async$U4)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bmW(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$U4,v)},
anV:function anV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c5P:function c5P(){},
c5Q:function c5Q(){},
c5O:function c5O(){},
c5K:function c5K(){},
c5L:function c5L(){},
c5M:function c5M(){},
c5N:function c5N(){},
c5U:function c5U(){},
c5V:function c5V(){},
c5R:function c5R(d){this.a=d},
c5S:function c5S(d){this.a=d},
fTC(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fe(null,x.H)
return A.hu(d,new C.anW(w,e,g,i,f,h,null),!0,null,x.H)},
d3t(d,e,f,g,h,i,j,k){return new C.bcn(i,e,k,j,g,f,h,d,null)},
anW:function anW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBI:function aBI(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dPZ:function dPZ(d){this.a=d},
dQ_:function dQ_(d,e,f){this.a=d
this.b=e
this.c=f},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d){this.a=d},
dPW:function dPW(d){this.a=d},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d){this.a=d},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ0:function dQ0(){},
dQ6:function dQ6(d){this.a=d},
dQ7:function dQ7(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
d3V:function d3V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcp:function bcp(d,e,f){this.d=d
this.e=e
this.a=f},
ab8:function ab8(d,e,f){this.c=d
this.d=e
this.a=f},
bcn:function bcn(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcs:function bcs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zd:function Zd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBH:function aBH(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPS:function dPS(d){this.a=d},
dPT:function dPT(d){this.a=d},
dPU:function dPU(d){this.a=d},
dPV:function dPV(d){this.a=d},
Ze:function Ze(d){this.a=d},
bhx:function bhx(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
aWM(d,e){return new C.aWL(d,e,null)},
aWL:function aWL(d,e,f){this.c=d
this.d=e
this.a=f},
hTp(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b_(d,11)},
i_G(d){return A.bY(B.K,null,new C.fAx(new C.tt(A.N(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
h28(d,e){return new C.aqS(e,d,null)},
aOw(d,e,f,g,h,i,j){var w=C.hTp(i)
if(w!=null)return A.bv(e,new A.a6(j,f,new C.a54(w,!0,null),null),B.aq)
return I.aNS(e,B.bQ,f,g,h,i,j)},
ls:function ls(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a54:function a54(d,e,f){this.c=d
this.d=e
this.a=f},
bhe:function bhe(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dBI:function dBI(d){this.a=d},
dBJ:function dBJ(){},
dBK:function dBK(d,e){this.a=d
this.b=e},
bhd:function bhd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fAx:function fAx(d){this.a=d},
fAw:function fAw(d,e){this.a=d
this.b=e},
fAv:function fAv(d,e){this.a=d
this.b=e},
fAu:function fAu(d,e){this.a=d
this.b=e},
aqS:function aqS(d,e,f){this.c=d
this.d=e
this.a=f},
cdn:function cdn(d,e){this.a=d
this.b=e},
aJD:function aJD(){},
i_r(d){var w=null
return A.c9(w,w,!0,w,new C.fzU(),d,w,!0,!0,x.e2)},
i0B(d,e,f,g,h){var w=null
return A.c9(w,w,!0,w,new C.fHl(h,g,f,e),d,w,!0,!0,x.N)},
i_t(d,e){var w=null
return A.c9(w,w,!0,w,new C.fzZ(e),d,w,!0,!0,x.dY)},
i_s(d){var w=null
return A.c9(w,w,!0,w,new C.fzY(),d,w,!0,!0,x.c5)},
aRn:function aRn(d,e){this.a=d
this.b=e},
aRm:function aRm(d){this.a=d},
aPs:function aPs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzU:function fzU(){},
fHl:function fHl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzZ:function fzZ(d){this.a=d},
fzY:function fzY(){},
XS:function XS(d,e){this.c=d
this.a=e},
awX:function awX(){var _=this
_.d=$
_.c=_.a=_.e=null},
cWE:function cWE(d){this.a=d},
cWF:function cWF(d){this.a=d},
cWD:function cWD(d,e){this.a=d
this.b=e},
cWG:function cWG(d){this.a=d},
cWH:function cWH(d){this.a=d},
XR:function XR(d){this.a=d},
awW:function awW(){this.d=$
this.c=this.a=null},
cWA:function cWA(d){this.a=d},
cWB:function cWB(d){this.a=d},
cWC:function cWC(d){this.a=d},
Xp:function Xp(d){this.a=d},
avG:function avG(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cud:function cud(){},
cuj:function cuj(d){this.a=d},
cuk:function cuk(d){this.a=d},
cul:function cul(d){this.a=d},
cui:function cui(){},
cum:function cum(d){this.a=d},
cun:function cun(d){this.a=d},
cuh:function cuh(){},
cuo:function cuo(d,e){this.a=d
this.b=e},
cug:function cug(d,e){this.a=d
this.b=e},
cue:function cue(d,e){this.a=d
this.b=e},
cup:function cup(d){this.a=d},
cuf:function cuf(){},
cuq:function cuq(d){this.a=d},
a_W:function a_W(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
btv:function btv(){this.d=$
this.c=this.a=null},
f32:function f32(d,e){this.a=d
this.b=e},
f33:function f33(d){this.a=d},
f34:function f34(d,e){this.a=d
this.b=e},
aab:function aab(d,e){this.a=d
this.b=e},
EV:function EV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
btt:function btt(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f30:function f30(d,e){this.a=d
this.b=e},
avz:function avz(d,e){this.c=d
this.a=e},
btu:function btu(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f31:function f31(d){this.a=d},
bts:function bts(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aLM:function aLM(){},
aLN:function aLN(){},
bAW(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.ou(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fyF(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dp(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dp(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dp(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dp(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.WP(A.dp(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aO8(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aO8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().kT(85,1280,B.eG),$async$aO8)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fc(),$async$aO8)
case 8:r=e
if(J.ac(r)===0){u=null
w=1
break}q=C.h27()
w=9
return A.b(C.cdm(q,r),$async$aO8)
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
o=A.a9(l)
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
return A.i($async$aO8,v)},
aOu(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOu=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cdj(g)
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
return A.b($.X().KT(p,!0,null,i).cN(0,B.fP),$async$aOu)
case 9:n=a1
w=10
return A.b(n.m5(),$async$aOu)
case 10:m=a1
w=11
return A.b(J.aPd(m).hl(B.fS),$async$aOu)
case 11:l=a1
J.aPd(m).q()
if(l==null){w=8
break}i=J.fa(B.dF.gaP(l))
k="data:image/png;base64,"+B.cS.gcu().aI(i)
if(J.ac(k)<=r){u=k
w=1
break}o=B.k.V(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a9(f)
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
return A.i($async$aOu,v)},
fyF:function fyF(){},
tt:function tt(d){this.a=d},
aqR:function aqR(d,e,f){this.c=d
this.d=e
this.a=f},
aDd:function aDd(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eD3:function eD3(d,e){this.a=d
this.b=e},
eCV:function eCV(d){this.a=d},
eCW:function eCW(d){this.a=d},
eD1:function eD1(d,e){this.a=d
this.b=e},
eD0:function eD0(d,e){this.a=d
this.b=e},
eCY:function eCY(d,e){this.a=d
this.b=e},
eCX:function eCX(d,e){this.a=d
this.b=e},
eCZ:function eCZ(d){this.a=d},
eD_:function eD_(d,e){this.a=d
this.b=e},
eD2:function eD2(d,e){this.a=d
this.b=e},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCU:function eCU(d){this.a=d},
eCT:function eCT(d,e){this.a=d
this.b=e},
eCS:function eCS(d){this.a=d},
eD4:function eD4(d,e){this.a=d
this.b=e},
eD5:function eD5(d,e){this.a=d
this.b=e},
eCR:function eCR(d,e){this.a=d
this.b=e},
heH(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fyG(d,e,f){var w=0,v=A.j(x.N),u
var $async$fyG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.heH(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyG,v)},
bAY(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bAY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fyG(!0,d,e),$async$bAY)
case 4:w=3
return A.b(r.aqP(g,d,e.a),$async$bAY)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dH.aI(B.R.ao(C.heH(d,e,null),null))
u="NGMY_WS:"+B.k1.gcu().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAY,v)},
h6F(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fTj(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ac(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eY(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hYs(d){var w,v,u,t=C.h6F(d)
if(t==null)return null
if(C.fTj(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b_(t,w))
if(C.fTj(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b_(t,u))
if(C.fTj(v))return v}return null},
fTi(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ac(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.c8(0,B.cB.aI(J.mv(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fNV(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bAX(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bAX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aqO(t[1]),$async$bAX)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fTi(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fTi(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAX,v)},
fTh(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lb(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bAu(){var w=0,v=A.j(x.o),u,t
var $async$bAu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.FY(),$async$bAu)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fTi(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAu,v)},
hfz(d,e,f,g){return A.bY(B.K,null,new C.fHd(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fHd:function fHd(d,e,f){this.a=d
this.b=e
this.c=f},
acc:function acc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eD7:function eD7(d,e){this.a=d
this.b=e},
eD8:function eD8(d,e){this.a=d
this.b=e},
eD9:function eD9(d,e){this.a=d
this.b=e},
eDa:function eDa(d,e){this.a=d
this.b=e},
eD6:function eD6(d){this.a=d},
aqL:function aqL(d,e,f){this.c=d
this.d=e
this.a=f},
biU:function biU(){var _=this
_.c=_.a=_.e=_.d=null},
eCL:function eCL(d,e){this.a=d
this.b=e},
eCM:function eCM(d){this.a=d},
eCN:function eCN(d){this.a=d},
aqQ:function aqQ(d){this.a=d},
aDc:function aDc(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eCP:function eCP(d){this.a=d},
eCO:function eCO(d){this.a=d},
hxx(d,e,f,g,h){return new C.Nd(h,g,d,e,f,null)},
aHZ:function aHZ(d,e){this.a=d
this.b=e},
Nd:function Nd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDe:function aDe(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eDx:function eDx(){},
eDt:function eDt(d,e){this.a=d
this.b=e},
eDu:function eDu(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDc:function eDc(d){this.a=d},
eDd:function eDd(d){this.a=d},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDl:function eDl(d,e){this.a=d
this.b=e},
eDm:function eDm(d,e,f){this.a=d
this.b=e
this.c=f},
eDi:function eDi(d,e,f){this.a=d
this.b=e
this.c=f},
eDg:function eDg(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDj:function eDj(d){this.a=d},
eDA:function eDA(d){this.a=d},
eDz:function eDz(d){this.a=d},
eDB:function eDB(d){this.a=d},
eDy:function eDy(d){this.a=d},
eDb:function eDb(d){this.a=d},
eDf:function eDf(d,e){this.a=d
this.b=e},
eDw:function eDw(d,e){this.a=d
this.b=e},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d){this.a=d},
eDs:function eDs(d,e){this.a=d
this.b=e},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDo:function eDo(d,e,f){this.a=d
this.b=e
this.c=f},
bvg:function bvg(){},
A3(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
aeD(d,e,f){return C.hN1(d,e,f)},
hN1(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aeD=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$aeD)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a9(o)
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
return A.i($async$aeD,v)},
aeC(d,e){return C.hN0(d,e)},
hN0(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aeC=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aeC)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a9(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aeC,v)},
hLO(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.RQ(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
by_(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$by_=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0q(q),$async$by_)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOu(q,!1),$async$by_)
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
return A.i($async$by_,v)},
hlp(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qJ(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qJ(p,J.k(u==null?"":u),1,o,q)},
fNV(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d7(s,x.f)
w=A.cD(w,new C.ctC(),w.$ti.k("H.E"),x.Q)
v=A.a3(w).k("a2<H.E>")
r=A.B(new A.a2(w,new C.ctD(),v),v.k("H.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lb(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hQS(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.YB
case"female":case"f":return D.ahB
default:return D.xp}},
hbo(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fXl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hQS(v==null?j:J.k(v))
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
return new C.hU(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hQU(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.LT
case"viewer":return D.kc
default:return D.tm}},
hQV(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FO(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzf(d,e){return B.a.i(e.toLowerCase())===C.FO(d,e)&&d.y!==D.kc},
tF(d,e){var w,v=d.y
if(v===D.kc)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FO(d,e))return!0
if(v===D.LT)return!0
v=d.e
return new A.J(v,A.fTn(),A.T(v).k("J<1,n>")).t(0,w)},
hQk(d){return J.dH(d,new C.fjS()).gM(0)},
fHG(d){var w=0,v=A.j(x.y),u,t
var $async$fHG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Ad(d),$async$fHG)
case 3:u=t.qF(f,new C.fHH(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHG,v)},
byZ(d,e){var w=0,v=A.j(x.H),u,t
var $async$byZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ad(d),$async$byZ)
case 3:t=g
if(J.qF(t,new C.fiv(e))){w=1
break}if(C.hQk(t)>=2)throw A.U(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$byZ,v)},
ajf(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d7(n,x.f)
w=A.cD(w,new C.bLl(),w.$ti.k("H.E"),x.P)
v=A.a3(w).k("a2<H.E>")
m=A.B(new A.a2(w,new C.bLm(),v),v.k("H.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bLn(),x.N)
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
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.O(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.ku(l,w,v,!s,t,m,r,q,p,C.hQU(o==null?null:J.k(o)))},
hbx(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cm(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Qz(d),$async$Cm)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Cm)
case 4:t=f
w=5
return A.b(t.a4O(0),$async$Cm)
case 5:w=6
return A.b(C.faz(t,l),$async$Cm)
case 6:s=f
if(J.cw(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.h7e(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ot(l,n),$async$Cm)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.h7e(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ot(l,n),$async$Cm)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Cm,v)},
faz(d,e){return C.hJj(d,e)},
hJj(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$faz=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.A3(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aG(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ac(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.A3(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fNV(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.A3(a9)+"_"+n))
i=C.hLO(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0q(h),$async$faz)
case 17:g=b1
if(g!=null){i=i.RQ(g)
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
case 8:J.QJ(q,new C.faA())
if(p&&J.ac(q)!==0)C.ot(a9,q)
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
return A.i($async$faz,v)},
bzq(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Qz(d),$async$bzq)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cm(r),$async$bzq)
case 4:t=p.aW(g)
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
return A.i($async$bzq,v)},
h7e(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d7(w,x.f)
v=A.cD(v,new C.f6i(),v.$ti.k("H.E"),x.i)
u=A.a3(v).k("a2<H.E>")
v=A.B(new A.a2(v,new C.f6j(),u),u.k("H.E"))
B.d.b1(v,new C.f6k())
return v}catch(t){v=A.a([],x.D)
return v}},
ot(d,e){return C.i_h(d,e)},
i_h(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ot=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Qz(b2),$async$ot)
case 3:a8=b5
if(J.ac(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$ot)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.A3(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fzL(),a2).fF(0)
a2=J.b6(b3,new C.fzM(),a2).bZ(0,new C.fzN())
n=A.d9(a2,a2.$ti.k("H.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eY(n,m)?17:18
break
case 17:a5=C.A3(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7j(l),$async$ot)
case 19:t=21
a5=C.A3(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7j(a5==null?null:J.k(a5)),$async$ot)
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
return A.b(C.aeC(r,"ngmy_worksheet_item_v3_"+C.A3(a8)+"_"+m),$async$ot)
case 29:w=30
return A.b(C.aeC(r,"ngmy_worksheet_thumb_v3_"+C.A3(a8)+"_"+m),$async$ot)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gai(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.by_(h),$async$ot)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aeD(r,"ngmy_worksheet_thumb_v3_"+C.A3(a8)+"_"+a4,f),$async$ot)
case 40:g=i.RQ(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aeC(r,"ngmy_worksheet_thumb_v3_"+C.A3(a8)+"_"+a4),$async$ot)
case 41:g=i.RQ(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aeC(r,"ngmy_worksheet_thumb_v3_"+C.A3(a8)+"_"+a4),$async$ot)
case 42:case 34:a4=i.a
w=43
return A.b(C.aeD(r,"ngmy_worksheet_item_v3_"+C.A3(a8)+"_"+a4,B.R.ao(g.ad(),null)),$async$ot)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aeD(r,"ngmy_worksheets_index_v3_"+C.A3(a8),B.R.ao(q,null)),$async$ot)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eI(b3,new C.fzO(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fzP(),a4),a4.k("H.E"))
a0=a7
w=45
return A.b(C.aeD(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$ot)
case 45:w=46
return A.b(J.hkw(r),$async$ot)
case 46:if(a2.gcl(b3)&&J.ac(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a9(b1)
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
return A.i($async$ot,v)},
Kt(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Kt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cm(d),$async$Kt)
case 3:t=g
s=J.cE(t)
r=s.be(t,new C.fHF(e))
if(r===-1)s.cn(t,0,e)
else s.n(t,r,e)
u=C.ot(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Kt,v)},
bzc(d,e){var w=0,v=A.j(x.H),u
var $async$bzc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cm(d),$async$bzc)
case 2:u=g
J.nf(u,new C.fkj(e))
w=3
return A.b(C.ot(d,u),$async$bzc)
case 3:return A.h(null,v)}})
return A.i($async$bzc,v)},
FQ(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$FQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$FQ)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d7(t,x.f)
j=A.cD(j,new C.fmH(),j.$ti.k("H.E"),x.k)
s=A.a3(j).k("a2<H.E>")
r=A.B(new A.a2(j,new C.fmI(),s),s.k("H.E"))
B.d.b1(r,new C.fmJ())
k=r}}catch(h){}w=4
return A.b(C.f71(d),$async$FQ)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hJG(k,p,d)
j=A.T(o)
s=j.k("J<1,a4<n,@>>")
s=A.B(new A.J(o,new C.fmK(),s),s.k("aj.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.PK(d,o),$async$FQ)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fmL(d),j),j.k("H.E"))
if(m.length!==0)C.aN3(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$FQ,v)},
fzx(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fzx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PK(d,e),$async$fzx)
case 3:t=J.dH(e,new C.fzy(d))
s=A.B(t,t.$ti.k("H.E"))
if(s.length===0){u=!0
w=1
break}u=C.aN3(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzx,v)},
a1y(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a1y)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d7(u,x.f)
m=A.cD(m,new C.fHA(),m.$ti.k("H.E"),x.k)
t=A.a3(m).k("a2<H.E>")
s=A.B(new A.a2(m,new C.fHB(),t),t.k("H.E"))
o=s}}catch(k){}q=J.q0(o,new C.fHC(e))
if(B.a.i(e.x).length===0&&C.tF(e,d)){m=B.a.i(d.toLowerCase())
p=e.aBY(e.y===D.kc?D.kc:D.tm,m)}else p=e
if(q===-1)J.pj(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.PK(d,o),$async$a1y)
case 3:w=C.tF(p,d)?4:5
break
case 4:w=6
return A.b(C.aN2(C.FO(p,d),p),$async$a1y)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1y,v)},
aNd(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.FQ(d),$async$aNd)
case 2:u=g
t=J.cE(u)
s=A.qZ(t.eI(u,new C.fk0(e)))
t.bn(u,new C.fk1(e))
w=3
return A.b(C.PK(d,u),$async$aNd)
case 3:w=s!=null&&C.bzf(s,d)?4:5
break
case 4:w=6
return A.b(C.f6m(e),$async$aNd)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNd,v)},
agp(d){var w=d.f,v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fHL(),v),v.k("H.E"))
return w},
fR0(d,e){var w,v=d.f,u=A.qZ(new A.a2(v,new C.fjB(e),A.T(v).k("a2<1>")))
v=C.agp(d)
w=A.T(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fjC(e,u),w),w.k("H.E"))
B.d.b1(v,new C.fjD())
return v},
hQY(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hfC(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.be(C.fR0(d,u),new C.fHm(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hSu(d,e){var w
if(e==null||e.length===0)return 1
w=C.fR0(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fnt(),A.T(w).k("J<1,G>")).fC(0,B.zE)+1},
i_a(d){var w,v=C.agp(d)
if(v.length===0)return null
w=new A.a2(v,new C.fzu(),A.T(v).k("a2<1>"))
if(!w.gal(0))return w.gL(0)
return B.d.gL(v)},
hQT(d){return A.E(["id",d.a,"name",d.b,"gender",C.hbo(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hSp(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.V(a0,x.P)
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
n=n!==D.xp?n:q.c
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
d=q.aBT(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cEm(a1,w,a3.d,a2.y,s,a0,v)},
Ad(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Ad=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Ad)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aG(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d7(t,x.f)
p=A.cD(p,new C.fmE(),p.$ti.k("H.E"),x.k)
s=A.a3(p).k("a2<H.E>")
p=A.B(new A.a2(p,new C.fmF(),s),s.k("H.E"))
B.d.b1(p,new C.fmG())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Ad,v)},
agb(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agb=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tm:D.kc
a7=C.FO(b2,b3)
w=2
return A.b(C.Ad(b1),$async$agb)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.be(a8,new C.fzq(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.byZ(b1,b2),$async$agb)
case 5:case 4:if(b0===-1){u=b2.aBY(a6,a7)
a9.cn(a8,0,u)}else{t=a9.h(a8,b0)
s=A.V(x.N,x.P)
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
i=i!==D.xp?i:l.c
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
s.n(0,m,l.aBT(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("H.E"))
k=a5?D.tm:D.kc
u=t.y9(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.PK(b1,a8),$async$agb)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aN2(B.a.i(b3.toLowerCase()),u),$async$agb)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agb,v)},
h7B(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a4<n,@>>"),k=A.B(new A.J(m,C.heP(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
h7C(d,e){var w=new A.S(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a4<n,@>>")
u=A.B(new A.J(u,C.heP(),t),t.k("aj.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hHi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajf(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fTn(),A.T(j).k("J<1,n>")).bZ(0,new C.f6P())
t=A.B(j,j.$ti.k("H.E"))
if(u===v)s=D.tm
else s=B.d.t(t,u)?D.LT:D.kc
return w.aBY(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajf(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d7(q,h)
h=A.cD(h,new C.f6Q(),h.$ti.k("H.E"),x.P)
p=A.a3(h).k("a2<H.E>")
o=A.B(new A.a2(h,new C.f6R(),p),p.k("H.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f6S(),x.N).bZ(0,new C.f6T())
t=A.B(h,h.$ti.k("H.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tm
else s=B.d.t(t,u)?D.LT:D.kc
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.ku(h,r,p,!m,t,o,l,j,v,s)},
f71(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f71=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ac(a0)===0){u=null
w=1
break}t=4
r=new C.f75()
h=x.N
g=x.z
w=7
return A.b(A.iI(A.a([A.li("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.li("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.li("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f71)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.V(h,g)
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
if(J.ac(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.f72(a0),h.k("H.E"),x.k)
l=A.a3(h).k("a2<H.E>")
l=A.B(new A.a2(h,new C.f73(),l),l.k("H.E"))
B.d.b1(l,new C.f74())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a9(a1)
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
return A.i($async$f71,v)},
hJG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gal(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fbe(),v).bZ(0,new C.fbf())
t=A.d9(u,u.$ti.k("H.E"))
s=A.V(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FO(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kc){m=q.e
m=!new A.J(m,A.fTn(),A.T(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gai(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hSp(l,v)
o=C.FO(k,w)
p=v.d
s.n(0,u,o===w?k.b97(p,D.tm):k.b97(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("H.E"))
B.d.b1(j,new C.fbg())
return j},
PK(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$PK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$PK)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fdi(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$PK)
case 3:return A.h(null,v)}})
return A.i($async$PK,v)},
aN2(d,e){return C.hOJ(d,e)},
hOJ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aN2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lI("family_trees",A.a([C.h7B(e,d)],p),null,B.cF),$async$aN2)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lI("family_trees",A.a([C.h7C(e,d)],p),null,B.cF),$async$aN2)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a9(n)
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
return A.i($async$aN2,v)},
aN3(d,e){return C.hOK(d,e)},
hOK(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aN3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a4<n,@>>")
m=n.k("aj.E")
l=A.B(new A.J(e,new C.fhQ(d),n),m)
r=l
w=7
return A.b(A.lI("family_trees",r,null,B.cF),$async$aN3)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.J(e,new C.fhR(d),n),m)
p=k
w=8
return A.b(A.lI("family_trees",p,null,B.cF),$async$aN3)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a9(i)
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
return A.i($async$aN3,v)},
f6m(d){return C.hGF(d)},
hGF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f6m=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Q9("family_trees",A.E(["id",d],x.N,x.z),null,B.cF),$async$f6m)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a9(p)
$.am.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f6m,v)},
qJ:function qJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lb:function lb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctF:function ctF(){},
ctE:function ctE(){},
ctC:function ctC(){},
ctD:function ctD(){},
GT:function GT(d,e){this.a=d
this.b=e},
hU:function hU(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aje:function aje(d,e){this.a=d
this.b=e},
fjS:function fjS(){},
fHH:function fHH(d){this.a=d},
fiv:function fiv(d){this.a=d},
ku:function ku(d,e,f,g,h,i,j,k,l,m){var _=this
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
bLp:function bLp(){},
bLo:function bLo(){},
bLl:function bLl(){},
bLm:function bLm(){},
bLn:function bLn(){},
faA:function faA(){},
f6i:function f6i(){},
f6j:function f6j(){},
f6k:function f6k(){},
fzL:function fzL(){},
fzM:function fzM(){},
fzN:function fzN(){},
fzO:function fzO(d){this.a=d},
fzP:function fzP(){},
fHF:function fHF(d){this.a=d},
fkj:function fkj(d){this.a=d},
fmH:function fmH(){},
fmI:function fmI(){},
fmJ:function fmJ(){},
fmK:function fmK(){},
fmL:function fmL(d){this.a=d},
fzy:function fzy(d){this.a=d},
fHA:function fHA(){},
fHB:function fHB(){},
fHC:function fHC(d){this.a=d},
fk0:function fk0(d){this.a=d},
fk1:function fk1(d){this.a=d},
fHL:function fHL(){},
fjB:function fjB(d){this.a=d},
fjC:function fjC(d,e){this.a=d
this.b=e},
fjD:function fjD(){},
fHm:function fHm(d){this.a=d},
fnt:function fnt(){},
fzu:function fzu(){},
fmE:function fmE(){},
fmF:function fmF(){},
fmG:function fmG(){},
fzq:function fzq(d){this.a=d},
f6P:function f6P(){},
f6Q:function f6Q(){},
f6R:function f6R(){},
f6S:function f6S(){},
f6T:function f6T(){},
f75:function f75(){},
f76:function f76(d){this.a=d},
f72:function f72(d){this.a=d},
f73:function f73(){},
f74:function f74(){},
fbe:function fbe(){},
fbf:function fbf(){},
fbg:function fbg(){},
fdi:function fdi(){},
fhQ:function fhQ(d){this.a=d},
fhR:function fhR(d){this.a=d},
ctG:function ctG(d,e){this.a=d
this.b=e},
ctH:function ctH(d,e){this.a=d
this.b=e},
aFh:function aFh(d,e,f){this.a=d
this.b=e
this.c=f},
b6E:function b6E(){this.b=this.a=0},
b6D:function b6D(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
btw:function btw(){},
wn(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcc()+"/"+w.gcs()+"/"+w.gcf()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmT()),2,"0")+":"+B.a.aT(B.o.u(w.gFD()),2,"0")},
hxu(){var w,v=$.pf(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fT(u)},
aqM(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aqM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqM)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$aqM)
case 8:r=e
if(r==null){u=A.V(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a9(m)
$.am.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqM,v)},
aqN(d){return C.hxv(d)},
hxv(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aqN=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqN)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hA("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$aqN)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a9(p)
$.am.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqN,v)},
aqP(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aqP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqP)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hxu()
w=4
return A.b(C.aqM(),$async$aqP)
case 4:r=h
q=B.a.i(e)
p=B.dH.aI(t)
J.aG(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cS.gcu().aI(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.aqN(r),$async$aqP)
case 5:u=new A.a_2("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqP,v)},
aqO(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aqO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c0(),$async$aqO)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aqM(),$async$aqO)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aN(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ac(t)===0){u=null
w=1
break}s=null
try{s=B.c4.c8(0,B.cB.aI(t))}catch(h){r=A.a9(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dV(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
p.n(q,i,m)}w=5
return A.b(C.aqN(q),$async$aqO)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqO,v)},
h27(){var w=new A.S(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hxw(d){var w,v,u,t,s,r,q
try{w=A.af1(d)
if(w==null)return d
v=w
if(J.Kz(v)>960||J.Ky(v)>960){s=v
r=J.Kz(v)>=J.Ky(v)?960:null
v=A.af0(s,J.Ky(v)>J.Kz(v)?960:null,B.Nd,r)}s=v
u=A.akD(82).Sa(s,B.ya)
if(J.ac(u)===0)return d
s=new Uint8Array(A.cp(u))
return s}catch(q){t=A.a9(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cdm(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cdm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hxw(e)
$.cdi.n(0,s,t)
u=C.bB_(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdm,v)},
b0q(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eY(l,",")?B.d.gam(J.lk(l,",")):l
q=B.cB.aI(r)
if(J.ac(q)===0){u=null
w=1
break}p=C.h27()
w=7
return A.b(C.cdm(p,q),$async$b0q)
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
n=A.a9(k)
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
return A.i($async$b0q,v)},
cdj(d){var w=0,v=A.j(x.T),u,t,s
var $async$cdj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cdl(s),$async$cdj)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcu().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdj,v)},
a7j(d){var w=0,v=A.j(x.H),u,t
var $async$a7j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.heI(d)
if(t==null){w=1
break}$.cdi.W(0,t)
w=3
return A.b(C.bAZ(t),$async$a7j)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7j,v)},
bB_(d,e){return C.hYv(d,e)},
hYv(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bB_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aLZ
w=7
return A.b(n==null?$.aLZ=I.fQ0():n,$async$bB_)
case 7:r=g
q=new Uint8Array(A.cp(e))
p=J.mw(r,"thumbs","readwrite")
B.iz.lZ(J.mu(p,"thumbs"),q,l)
w=8
return A.b(J.pi(p),$async$bB_)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a9(k)
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
return A.i($async$bB_,v)},
bAZ(d){return C.hYt(d)},
hYt(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAZ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aLZ
w=7
return A.b(o==null?$.aLZ=I.fQ0():o,$async$bAZ)
case 7:r=f
q=J.mw(r,"thumbs","readwrite")
B.iz.F9(J.mu(q,"thumbs"),m)
w=8
return A.b(J.pi(q),$async$bAZ)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a9(l)
$.am.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAZ,v)}},D,Aj,Ak,P,Al,Am,I,An
J=c[1]
A=c[0]
B=c[2]
N=c[228]
Q=c[143]
A_=c[213]
G=c[194]
F=c[31]
E=c[204]
A0=c[99]
R=c[132]
A1=c[133]
A2=c[182]
A3=c[107]
S=c[102]
A4=c[212]
A5=c[37]
M=c[211]
A6=c[80]
H=c[87]
A7=c[150]
A8=c[104]
T=c[153]
U=c[224]
V=c[183]
A9=c[174]
Aa=c[186]
W=c[181]
Ab=c[65]
Ac=c[71]
Ad=c[229]
X=c[198]
Ae=c[30]
Af=c[162]
L=c[176]
Ag=c[187]
Y=c[227]
Z=c[220]
Ah=c[101]
Ai=c[108]
K=c[124]
O=c[69]
C=a.updateHolder(c[6],C)
D=c[223]
Aj=c[70]
Ak=c[192]
P=c[226]
Al=c[225]
Am=c[56]
I=c[54]
An=c[77]
C.amL.prototype={}
C.aWN.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bdp(),f=h.x!=null&&h.yz(i).length===0
if(h.x!=null)w=f?B.aZ:B.bL
else w=h.gSO()?B.bL:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bbZ,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eCm,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h3,i,i,i),B.S,D.f4f,B.au,A.d(C.wn(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f0g,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aXL,i,i,i,i,B.XB,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.r,1)
o=A.I(B.aZ.j(0.28),B.r,1)
n=A.fRY(h.d)
o=A.p(B.A,C.aWM(A.fpS(h.e,n),30),B.f,i,i,new A.o(B.lv,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eWI,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bz,D.f4w,B.ac,A.p(i,A.v(A.a([D.fjr,B.bz,A.d(A.Af(h.c),i,i,i,i,i,i,D.eRO,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f3,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,L.afI,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.r,1)
l=j.aOr("Original due",C.wn(h.r,!1))
n=j.aOr("Current due",C.wn(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaIF(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.As,i,i,1/0),B.S,j.caJ(),B.P,j.bZC(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f5t,B.au,A.d(q,i,i,i,i,i,i,D.eW0,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaDz()){q=A.m(14)
o=A.I(B.cm,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fkG,B.P,A.bv(A.m(12),A.ei(new A.a6(1/0,88,A.b3(i,i,i,new A.UW(h.ax,B.M,D.eG5,!0,3.5,i),B.at),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EH,i,i,i)],s))}p.push(B.az)
p.push(D.fd8)
return A.p(i,A.v(A.a([r,new A.C(B.afL,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aOr(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a6M,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eSN,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
caJ(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a7X(B.dT,u,"Not paid yet")
w=t.yz(null).length
v=w===0?B.aZ:B.bL
return this.a7X(v,u,C.wn(t.x,!0))},
bZC(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a7X(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a7X(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a6M,u,u,u)
v=A.T(d).k("J<1,hh>")
v=A.B(new A.J(d,new C.c_a(),v),v.k("aj.E"))
return A.v(A.a([w,B.ao,A.c3(B.bE,v,B.bw,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a7X(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a6M,w,w,w),1),new A.dm(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b8N.prototype={
a6(d,e){new A.UW(this.b,B.M,e,!0,3.5,null).a6(d,e)},
aq(d){return d.b!==this.b}}
C.amS.prototype={
T(){return new C.aB8(A.a([],x.bp))},
gdX(){return this.c}}
C.aB8.prototype={
a_(){this.a1()
this.I3()},
I3(){var w=0,v=A.j(x.H),u,t=this,s
var $async$I3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0N(t.a.c),$async$I3)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dCA(t,s))
case 1:return A.h(u,v)}})
return A.i($async$I3,v)},
aQi(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bp).j(0.22)
w=A.m(10)
return A.bq(v,new A.b4(4,r,new A.aA(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b4(4,w,new A.aA((this.a.d.a?B.bq:B.bp).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aVn),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aQh(d){return this.aQi(d,null)},
Oy(d){return this.ceh(d)},
ceh(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Oy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.FX:B.eG
w=7
return A.b(new A.hV().BA(72,900,900,n),$async$Oy)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fc(),$async$Oy)
case 8:p=f
n=B.cS.gcu().aI(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a9(l)
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
return A.i($async$Oy,v)},
aYE(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bp).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bq:B.bp
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bq:B.bp
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cw,s.a.d.a?B.bq:B.bp,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kb,D.bn9,r,r,r)},
Cy(d){return this.bwp(d)},
bwo(){return this.Cy(null)},
bwp(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cy=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b1,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jK(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b1,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b1,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bN(6048e8)
m=A.c_(a4.gcf(),a4.gcc(),a4.gcs(),0,0,0,0,0)}else{a4=a5.f
m=A.c_(a4.gcf(),a4.gcc(),a4.gcs(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fRY(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vB?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",a4,new C.dCj(),new C.dCk(a2,t,a5,r,new C.dCl(a2,t),o,n,j),B.eE,!0,x.y),$async$Cy)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eMq)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eL5)
w=1
break}a1=A.fpS(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vB?"male":"female"
w=7
return A.b(A.ago(a3,A.fZS(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Cy)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vB?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c_(a3.gcf(),a3.gcc(),a3.gcs(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gcf(),a4.gcc(),a4.gcs(),0,0,0,0,0)))a5.cGv(a2.a)
w=8
return A.b(A.ago(t.a.c,a5),$async$Cy)
case 8:case 5:w=9
return A.b(t.I3(),$async$Cy)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Cy,v)},
aQT(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bp).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aWM(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.aA
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.A(A.a([r,B.bo,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.ba,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.af)},
Rb(d){return this.cvv(d)},
cvv(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",s,new C.dCD(),new C.dCE(t,d),B.hW,!0,x.y),$async$Rb)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ago(t.a.c,d),$async$Rb)
case 7:w=8
return A.b(t.I3(),$async$Rb)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Rb,v)},
Ne(d,e){return this.bH3(0,e)},
bH3(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ne=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kW(s,"Cancel","Delete",e.b+" \xb7 "+A.Af(e.c)+" will be removed from this device.","Delete this debt?"),$async$Ne)
case 3:if(!g){w=1
break}w=4
return A.b(C.fk7(t.a.c,e.a),$async$Ne)
case 4:w=5
return A.b(t.I3(),$async$Ne)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Ne,v)},
adn(d){return this.c8c(d)},
c8c(d){var w=0,v=A.j(x.H),u=this,t
var $async$adn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bY(B.K,null,new C.dCx(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adn)
case 2:return A.h(null,v)}})
return A.i($async$adn,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e1a
w=J.dH(m.d,new C.dCF())
v=A.B(w,w.$ti.k("H.E"))
w=J.dH(m.d,new C.dCG())
u=A.B(w,w.$ti.k("H.E"))
t=B.d.cI(v,0,new C.dCH())
w=A.m(18)
s=m.a.d.a
r=s?D.cj0:D.avU
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bLR,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.e0A,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dCI(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.af)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.crK("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Af(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b3C(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ax,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.afF,l,l,l),B.az],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dW:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bp).j(0.12),B.r,1)
n=A.p(l,D.bGQ,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bp,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bpB,l,l,1/0))}else{w=m.gcdA()
s=A.B(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ao,new A.C(D.brg,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bp,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b3C(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bp).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bp,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aA
return A.p(u,A.v(A.a([q,B.bz,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eh,u,u,u)},
crK(d,e){return this.b3C(!1,d,e)},
cdB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yz(j).length,h=d.bcB()
if(d.x!=null){w=d.yz(j).length
v=w===0?B.cY:B.bL}else if(d.gSO())v=B.bL
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bp
v=w}if(d.x!=null){w=d.yz(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wn(u,!1)}else{u.toString
t="Paid "+C.wn(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wn(w,!1)+" \xb7 "+i+" missed":"Due "+C.wn(w,!1)}w=k.a.d.a?B.dW:B.c
u=A.m(18)
if(d.gSO()&&d.x==null)s=B.bL.j(0.35)
else s=(k.a.d.a?B.bq:B.bp).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ad(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bn:B.lv
o=A.I(d.gSO()&&d.x==null?B.bL.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fRY(d.d)
o=A.p(B.A,A.dc(C.aWM(A.fpS(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aA
m=x.p
n=A.a([new A.dm(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaDz())B.d.v(n,A.a([B.eb,A.W(B.Mj,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.d0,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Af(d.c)
l=k.a.d.a?B.aP:B.aA
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(U.afp,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bz,A.W(B.eo,(k.a.d.a?B.bq:B.bp).j(0.5),j,j,j,18)],m),B.dD,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dCz(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.af),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.tX.prototype={}
C.ajd.prototype={
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
p=A.a([new A.ad(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aE(a0,A.p(a0,A.W(B.cw,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a9))
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.asr,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.EY,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bmo,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bm,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eGQ)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uV,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l4,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hg,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ax,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bnB,a0,a0,a0,a0)}}
C.aSC.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bm:B.cD,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.d0,n],m)
if(p.z)o.push(new A.C(B.uS,n,q))
return new A.C(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.RK.prototype={
T(){return new C.bcl()}}
C.bcl.prototype={
gbUK(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e15,D.e1b],l)
for(w=0;w<8;++w){v=D.a0z[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FH:B.B9
q=t===s
r=A.W(r,q?B.ey:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bo,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bE(1,B.bi,new A.x(v.c,n,An.CI,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aV(24,24)
p=new A.aA(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bs(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.ma,new A.co(B.aQ,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Do(!0,new C.ajd(v,q.d,q.e,new C.d2r(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d2s(o,v),n,n,n,n,n,n,!1,B.a9))}k.push(new A.C(D.bnU,A.bJ(D.fpP,new C.d2t(o,d),A.bk(B.b4,n,n,n,n,B.nW,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bo(!0,new A.cU(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.bs6,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.n0.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
b9j(d,e,f){return new C.n0(this.a,e,d,f)}}
C.GS.prototype={
vW(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.GS(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aBN(d){var w=null
return this.vW(w,w,w,w,w,d,w,w,w,w,w,w)},
cCk(d){var w=null
return this.vW(w,w,w,w,d,w,w,w,w,w,w,w)},
b9h(d,e,f){var w=null
return this.vW(d,w,w,w,w,w,w,w,e,w,f,w)},
cCZ(d){var w=null
return this.vW(w,w,w,w,w,w,d,w,w,w,w,w)},
cD7(d){var w=null
return this.vW(w,w,w,w,w,w,w,w,w,d,w,w)},
cCi(d){var w=null
return this.vW(w,w,w,d,w,w,w,w,w,w,w,w)},
cD9(d){var w=null
return this.vW(w,w,w,w,w,w,w,w,w,w,w,d)},
cCf(d){var w=null
return this.vW(w,w,d,w,w,w,w,w,w,w,w,w)},
cCa(d){var w=null
return this.vW(w,d,w,w,w,w,w,w,w,w,w,w)},
F2(d){var w=null
return this.vW(w,w,w,w,w,w,w,d,w,w,w,w)},
cDh(d,e,f,g,h,i,j,k,l,m,n){return this.vW(d,e,f,g,null,h,i,j,k,l,m,n)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cA5(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bLk(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.BN.geg(D.BN))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a22)
q=l.$2("frame",D.a1w)
l=l.$2("texture",D.a1r)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cDh(p,u,t,q,r,A.tC(d.h(0,"ribbon"))?A.Fq(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Yf.prototype={
T(){return new C.aya(A.a([],x.I),D.LS)},
gdX(){return this.c}}
C.aya.prototype={
a_(){var w,v=this
v.a1()
v.f=A.z6(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kG()
w=v.a
C.bzn(w.c,w.d).bz(new C.d37(v),x.fL)},
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
kG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.K0(s.c,s.d),$async$kG)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d2W(t,r))
t.atO()
case 1:return A.h(u,v)}})
return A.i($async$kG,v)},
gaqs(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ac(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
atO(){var w,v,u=this.gaqs(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c6D(d){this.m(new C.d2T(this,d))
this.atO()},
MA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n0(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aOP(r.c,r.d,s),$async$MA)
case 3:w=4
return A.b(t.kG(),$async$MA)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.q0(t.d,new C.d2u(s))
p=q>=0?q:J.ac(t.d)-1
t.m(new C.d2v(t,p))
t.atO()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AC(p+1,B.cp,B.kA),$async$MA)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MA,v)},
Ai(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ai=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaqs()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aOP(o.c,o.d,new C.n0(s,r,q,new A.S(p,0,!1))),$async$Ai)
case 3:w=4
return A.b(t.kG(),$async$Ai)
case 4:if(t.c==null){w=1
break}t.m(new C.d2X(t))
case 1:return A.h(u,v)}})
return A.i($async$Ai,v)},
Nf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaqs()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2D(r),s,null,!0,!0,x.y),$async$Nf)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bz8(s.c,s.d,r.a),$async$Nf)
case 4:t.m(new C.d2E(t))
w=5
return A.b(t.kG(),$async$Nf)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.SR(B.o.D(t.r+1,0,J.ac(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Nf,v)},
xR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ai(),$async$xR)
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
return A.b(C.Q0(s,r.r,o,p,q),$async$xR)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hfb(s,r.x,r.r),$async$xR)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.K0(s.c,s.d),$async$xR)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.n0(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ao(r.c,r.d,l),$async$xR)
case 11:w=12
return A.b(t.kG(),$async$xR)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xR,v)},
a_i(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ai(),$async$a_i)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxP(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yh,new C.d2U(t),new C.d2V())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mi("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gU(o)
p.push(new F.mi(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fTz(o,new F.r2(s,r,"",p,new F.uh(q.d,null,null,null,null,"","","")),null),$async$a_i)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_i,v)},
MY(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$MY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ai(),$async$MY)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bY(D.abg,null,new C.d2z(t),s,!0,!0,!0,D.aKt,!1,!1,x.N),$async$MY)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cCk(r)
t.m(new C.d2A(t,q))
s=t.a
w=7
return A.b(C.QB(s.c,s.d,q),$async$MY)
case 7:case 1:return A.h(u,v)}})
return A.i($async$MY,v)},
VW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bY(D.abg,null,new C.d2F(t),r,!0,!0,!0,D.aKt,!1,!1,x.e),$async$VW)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d2G(t,s))
r=t.a
w=4
return A.b(C.QB(r.c,r.d,s),$async$VW)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AC(0,B.dX,B.ol)
case 1:return A.h(u,v)}})
return A.i($async$VW,v)},
bM6(d){var w=d.bQ(),v=B.a.aT(B.o.u(w.gcc()),2,"0"),u=B.a.aT(B.o.u(w.gcs()),2,"0")
return""+w.gcf()+"-"+v+"-"+u},
gxP(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bU0()
if(r.e)w=D.aad
else if(J.ck(r.d)){w=r.y
v=r.gxP(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eRh,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.C(Z.agF,new C.Xy(w,v,0,q),q),q),B.bu,t,B.ao,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k5.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eCc,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ad(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vq,B.n),q,q,q,q,B.XL,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gczf(),q,q,q,q,q,q,!1,B.a9))
w.push(B.S)
w.push(A.hc(D.bD7,D.fpj,r.gaKn(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ac(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k5.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zC
u=A.v(A.a([new A.C(D.boV,w,q),A.D(A.I8(v,new C.d35(r),J.ac(r.d)+1,q,r.gc6C(),u,B.aQ),1),r.bzg()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cb(q,D.act,new A.an(B.W,q,B.b_,B.q,A.a([D.aJ_,A.bo(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bU0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cw(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.J7(B.dV,"AI",h.gbxa(),!0))
if(h.a.f)f.push(new C.J7(B.mX,"Cover",h.gbHD(),!1))
if(h.a.f)f.push(new C.J7(B.xV,"Header",h.gbCF(),!1))
if(J.cw(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.J7(B.tA,"Print",h.gcfA(),!1))
if(h.a.f&&J.cw(h.d)&&h.r>=0){v=h.w
u=v?B.hw:B.j8
t=v?"Save":"Edit"
f.push(new C.J7(u,t,v?h.gclE():new C.d2Q(h),!1))}if(h.a.f)f.push(new C.J7(B.hv,"Add page",h.gaKn(),!1))
v=C.hbn(h.y.Q)
u=h.gxP(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ac(h.d)
r=J.ac(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dim
else{k=new A.aV(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aA(E.jG.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.k5,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bs(k,k,k,k),g,new A.a7(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k5.j(0.85)
p.push(new A.bE(1,B.bi,A.aE(B.c5,A.v(A.a([k,B.bz,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a9),g))}return new C.ajd(v,u,t+" \xb7 "+s+" "+r,new C.d2R(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ai(),$async$zl)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a11(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.d2w(t,p),s,null,!0,!0,x.N),$async$zl)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xR(),$async$zl)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.D7(),$async$zl)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.EH("Swahili (Kiswahili)",!0),$async$zl)
case 18:w=16
break
case 17:w=19
return A.b(t.cw5(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zl)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zl,v)},
XO(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jG.j(0.3),B.r,1),r=x.p
return new A.C(B.cG,A.aK(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vq,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A6.Sx,w,w,w),A.d(g,w,w,w,w,w,w,A0.Sr,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2S(d,h),w,w,w,w,w,w,w),w)},
D7(){return this.bLB()},
bLB(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$D7=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2J(r),a7,null,!0,!0,x.ei),$async$D7)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.c9(null,null,!1,null,new C.d2K(o),a7,null,!0,!0,x.H).f8(new C.d2L(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cf(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yh[a1]
J.cf(j,i.a)}w=8
return A.b(C.afA(a0,a7,new C.d2M(o),d,l,e,j),$async$D7)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a9(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a5(l,!0).eH()
l=o
l.shN($.aw())
J.aPg(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ac(p);++a4){if(m.b.ag(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b9j(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ao(j.c,j.d,l),$async$D7)
case 11:w=12
return A.b(r.kG(),$async$D7)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yh[a1].a)
a5=l.cA5(j,12,a7)
l=r.a
w=15
return A.b(C.QB(l.c,l.d,a5),$async$D7)
case 15:if(r.c!=null)r.m(new C.d2N(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AC(0,B.dX,B.ol)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.coh("Undo",new C.d2O(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$D7,v)},
EH(d,e){return this.cw6(d,e)},
cw5(d){return this.EH(d,!1)},
cw6(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EH=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.c9(null,null,!1,null,new C.d2Z(a0),k,null,!0,!0,x.H).f8(new C.d3_(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cf(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1e(m,new C.d30(a0)),$async$EH)
case 10:w=8
break
case 9:w=11
return A.b(C.bAR(new C.d31(a0),m,a2),$async$EH)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a9(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a5(o,!0).eH()
o=a0
o.shN($.aw())
J.aPg(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ac(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b9j(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ao(k.c,k.d,o),$async$EH)
case 12:w=13
return A.b(r.kG(),$async$EH)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.coh("Undo",new C.d32(r,d),null),null,null,null,null,B.q,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EH,v)},
bzg(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d2x(v):u
r=A.aH(u,u,u,u,A.W(D.byP,s?D.k5:B.b5,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cw(v.d)&&!v.w&&v.r>=0)s=A.hc(A.W(B.v5,B.Ej,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Ej,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbHc(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k5.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ac(v.d)?new C.d2y(v):u
return A.bo(!0,new A.C(D.boJ,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eo,t<J.ac(v.d)?D.k5:B.b5,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.Yj.prototype={
T(){return new C.bcG(new A.ar(B.as,$.aw()))}}
C.bcG.prototype={
ga0q(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbKn(){var w,v=this.ga0q()
A:{if("cover"===v){w=D.cOL
break A}if("book"===v){w=D.cKK
break A}w=D.dbg
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jG.j(0.5),n=x.p,m=A.A(A.a([D.din,B.aw,D.bu1,A.aH(q,q,q,q,B.lb,q,q,q,new C.d4S(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jG(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d4T(r),r.ga0q()==="page",q,q,q,q))
if(r.a.d)l.push(A.jG(q,q,q,D.fkd,q,new C.d4U(r),r.ga0q()==="book",q,q,q,q))
l.push(A.jG(q,q,q,D.f81,q,new C.d4V(r),r.ga0q()==="cover",q,q,q,q))
l=A.c3(B.bE,l,B.bw,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.T,!1,q,!0,B.q,q,A.aM(),r.d,q,q,q,q,q,2,A.bq(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kq,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.dk,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbKn(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mx(q,B.c.j(0.08),new A.x(s,q,B.Ik,q,q,q,q,q,q,q,q,q),B.hz,new C.d4W(r,s),q,q,q,q))}return A.eE(q,E.A8,A.cd(A.v(A.a([m,B.S,D.fnh,B.ao,l,B.ac,k,B.P,A.c3(B.bE,w,B.bw,6,6),B.az,A.dq(D.bD4,D.fo2,new C.d4X(r,d),A.bk(B.b4,q,q,q,q,B.nW,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.au,D.fiB],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.fx,q,q,B.ah),q,q,q,D.agp,B.d_,q,new A.b7(p,new A.aA(o,1.4,B.r,-1)),q)}}
C.Yh.prototype={
T(){return new C.ayb(A.a([],x.Y))},
gdX(){return this.c}}
C.ado.prototype={}
C.ayb.prototype={
a_(){this.a1()
this.kG()},
kG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Q5(p.c,p.d),$async$kG)
case 3:o=e
n=A.a([],x.Y)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bzn(r.c,q),$async$kG)
case 6:j=e
i=J
w=7
return A.b(C.K0(t.a.c,q),$async$kG)
case 7:m.push(new l.ado(k,j,i.ac(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d3m(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kG,v)},
b4L(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Pb(d,e){return this.c8a(0,e)},
c8a(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).ci(A.em(new C.d3l(u,e),!0,null,x.y)),$async$Pb)
case 2:t=g
w=3
return A.b(u.kG(),$async$Pb)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aMm)
return A.h(null,v)}})
return A.i($async$Pb,v)},
EK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$EK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aMi)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aeU(s.c,s.d),$async$EK)
case 5:q=e
w=6
return A.b(t.kG(),$async$EK)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Pb(0,B.d.ix(t.d,new C.d3q(q))),$async$EK)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Q0(p,s.f,r,n,o),$async$EK)
case 10:m=e
w=11
return A.b(t.kG(),$async$EK)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aMm)
case 1:return A.h(u,v)}})
return A.i($async$EK,v)},
OG(d,e){return this.cjp(0,e)},
cjp(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d3p(t,e),s,null,!0,!0,x.y),$async$OG)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1r(s.c,s.d,e.a),$async$OG)
case 4:w=5
return A.b(t.kG(),$async$OG)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OG,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bzj(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jG.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fF(0.7142857142857143,A.p(n,A.v(A.a([D.dio,B.ac,D.e0g,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k5.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.ba,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gczb(),n,n,n,n,n,n,!1,B.a9))}w=A.m(22)
v=A.I(E.jG.j(0.85),B.r,1.6)
s=A.aE(n,A.p(n,D.bKG,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jG.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3r(d),n,n,n,n,n,n,!1,B.a9)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jG.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bun,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eQo,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h3,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bQa,B.n),n,n,n,Al.Ll,D.bmQ,n,n,n)
if(o.e)k=D.aad
else k=k.length===0?D.b1K:A.cm(new C.d3s(k))
return A.cb(n,D.act,new A.an(B.W,n,B.b_,B.q,A.a([D.aJ_,A.bo(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bzj(d){var w,v,u=this,t=null,s=u.b4L(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f4(B.A,new A.a6(300,420,new C.Xy(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bK_,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b5,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3j(u,d),t,t,t,t,t,t,!1,B.a9),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.ePY,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fF(0.7142857142857143,new A.an(B.W,t,B.aa,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k5.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3k(u,d),t,t,t,t,t,t,!1,B.a9)}}
C.J7.prototype={}
C.Xy.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yh,new C.cCq(m),new C.cCr()),j=m.c,i=D.BN.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lJ:B.ba
v=new C.cCs(h)
i=A.a([new A.ad(0,B.G,B.w.j(0.6),D.dYA,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.b9Y(j.x,h,l),B.at),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aV(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bs(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.agG,8,0.85,2.2),v.$4(D.brz,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.agG,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.brv,A.b3(l,l,l,new C.b9P(h,l),B.at),l),0,0,0))
r=A.W(D.av3[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.asr,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.az,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.brZ,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFc(l),D.eFZ),l,l,l,46,0,l))
return A.p(l,A.bv(D.a8V,new A.an(B.W,l,B.aa,B.q,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a8V,i,new A.a7(B.ax,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b9Y.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eS()
f.dH(11)
switch(this.b){case"plain":return
case"linen":$.X()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.X()
q=A.L()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.X()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.aj()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.X()
j=A.a([],l)
h=new A.aQ(k.r,B.ap,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bF())
k=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbI().a.snapshot()
o.drawPath((h.e=new A.cF(k)).a,r)
r.delete()}break
default:$.X()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.X()
g=A.L()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aq(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b9P.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.L(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.exv,new A.cL([w,0,-1,1]),new A.cL([0,v,1,-1]),new A.cL([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aQ(l,B.ap,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbI().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.tY.prototype={}
C.XQ.prototype={
T(){return new C.b9W()}}
C.b9W.prototype={
gnI(){var w=this.d
return w===$?this.d=this.a.c:w},
gxP(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b1,B.aN),$.aw())}return v},
gaz4(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b1,B.aN),$.aw())}return v},
gap2(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b1,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxP(0),u=v.S$=$.aw()
v.P$=0
v=w.gaz4()
v.S$=u
v.P$=0
v=w.gap2()
v.S$=u
v.P$=0
w.a2()},
apE(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jG(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cVS(this,f,u),e===u,s,s,s,s))}return A.c3(B.bE,r,B.bw,6,8)},
avf(d){var w=null,v=B.c.j(0.07)
return A.bq(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lj,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnI(),a0=f.gxP(0),a1=a0.a.a,a2=f.gaz4(),a3=a2.a.a,a4=f.gap2(),a5=d.b9h(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a6(190,260,A.f4(B.A,new A.a6(270,370,new C.Xy(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a0,e,e,e,e,e,2,f.avf("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWg(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a2,e,e,e,e,e,2,f.avf("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWh(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yh[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b5
q=r.a===q
o=new A.aA(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bP(o,o,o,o),e,e,new A.a7(B.ax,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.ay
v.push(A.aE(e,A.v(A.a([p,B.d0,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWi(f,t),e,e,e,e,e,e,!1,B.a9))}v=A.c3(B.bE,v,B.bw,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b4.j(0.35):B.c.j(0.07)
m=new A.aV(14,14)
s=f.d
o=new A.aA((s===$?f.d=f.a.c:s).d===n?B.ey:B.K,2,B.r,-1)
q.push(A.aE(e,A.p(e,A.W(D.av3[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bs(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWj(f,n),e,e,e,e,e,e,!1,B.a9))}q=A.c3(B.bE,q,B.bw,8,8)
a4=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a4,e,e,e,e,e,2,f.avf("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWk(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mu,e,e,e)
m=A.a([],w)
for(l=D.BN.gdL(D.BN),l=l.gai(l);l.C();){k=l.gU(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.b5
g=r.e===i
o=new A.aA(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bP(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.ay
m.push(A.aE(e,A.v(A.a([j,B.bz,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWl(f,k),e,e,e,e,e,e,!1,B.a9))}m=A.c3(B.bE,m,B.bw,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mu,e,e,e)
k=f.gnI()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bo(!0,new A.cU(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fi4,B.ac,d,B.aO,a0,B.S,a2,B.az,D.fnR,B.P,v,B.az,D.fid,B.P,q,B.az,a4,B.az,p,B.P,m,B.az,l,A.kR(e,9,""+B.k.V(f.gnI().f),36,18,new C.cWm(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mu,e,e,e),B.ao,f.apE(D.a22,f.gnI().r,new C.cWn(f),D.der),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mu,e,e,e),B.ao,f.apE(D.a1w,f.gnI().w,new C.cWo(f),D.dew),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mu,e,e,e),B.ao,f.apE(D.a1r,f.gnI().x,new C.cWq(f),D.dfU),B.ao,A.iC(e,B.b4,e,B.ag,e,new C.cWr(f),e,e,e,D.fcG,f.gnI().z),B.bu,A.bJ(D.fgZ,new C.cWs(f,a6),A.bk(B.b4,e,e,e,e,B.nW,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,P.age,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aFc.prototype={
a6(d,e){var w,v,u,t=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bF())
u=A.L()
u.sau(D.bQN.aw(0,new A.aa(0,0,0+w,0+v)))
d.aN(t,u)},
aq(d){return!1}}
C.bf8.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.L()
w.sau(D.bPR.aw(0,new A.aa(0,0,a3,a4)))
a5.aX(new A.aa(0,0,a3,a4),w)
v=B.k.dJ(a2/112)
u=new A.eS()
u.dH(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cOK[u.aB(9)]
j=u.aB(14)
J.bA(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.aa(n,j,n+m,j+l)
h=A.by(i,B.ha)
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sau(new A.a7(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.ep(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jG.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c5(new A.aa(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jG.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c5(new A.aa(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.sau(D.bPe.aw(0,new A.aa(0,r,a3,q)))
d=p.H()
w.drawRect(A.c5(new A.aa(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jc
d=p.H()
w.drawRect(A.c5(new A.aa(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b52.j(0.72).gp(0)
a5.aX(new A.aa(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sau(new A.bR(B.A,0.5,B.x,a0,0,A.a([D.bbC.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.ah(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b8b.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kG(new A.o(A.aq(D.k5,D.bfK,w/4),o,new A.bP(B.Y,new A.aA(B.w.j(0.12),1,B.r,-1),B.Y,B.Y),B.Jt,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ad(0,B.G,B.w.j(0.35),B.aEE,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aV(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jG.j(0.6),o,o,new A.bs(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pH,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aV7,u,D.bQL,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ad(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFc(o),D.eFU),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSC(p.y,r,G.im,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.r,o,o,o,o,o,2,A.bq(o,B.ex,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.im.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.f2x,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.im.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.w,o,o,o,o,o,2,A.bq(o,B.ex,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.im.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eUN,!0,B.a5,B.z4,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f2q,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.im.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.E6.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.E6.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.E6.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.az],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.im.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.WP(A.dp(A.a([A.dp(o,o,o,o,o,o,o,o,o,D.eXQ,B.a.ap(k,0,1)),A.dp(o,o,o,o,o,o,o,o,o,o,B.a.b_(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.im.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.y,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.i7,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.im.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bv(B.Jt,new A.an(B.W,o,B.aa,B.q,A.a([t,new A.C(D.br2,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.bX(o,new A.o(o,o,o,o,o,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Jt,v,D.bRg,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.q,l,o)}}
C.anY.prototype={
T(){return new C.aBJ(A.a([],x._))},
bp(){return this.r.$0()},
pp(){return this.w.$0()},
gdX(){return this.c}}
C.aBJ.prototype={
a_(){var w,v
this.a1()
this.vr()
w=this.a
v=w.c
if(v.length!==0)C.a62(v,w.e,w.d.w)},
vg(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fTC(r,t.e,!1,s.w,new C.dQb(u),null,s),$async$vg)
case 2:w=3
return A.b(u.vr(),$async$vg)
case 3:return A.h(null,v)}})
return A.i($async$vg,v)},
Zt(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Zt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fTC(r,t.e,!0,s.w,new C.dQa(u),null,s),$async$Zt)
case 2:w=3
return A.b(u.vr(),$async$Zt)
case 3:return A.h(null,v)}})
return A.i($async$Zt,v)},
vr(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vr=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ad(q.a.c),$async$vr)
case 7:p=e
if(q.c!=null)n=q.e||J.cw(p)
else n=!1
if(n)q.m(new C.dQd(q,p))
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
return A.b(C.FQ(q.a.c).cN(0,B.pj),$async$vr)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dQe(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dQf(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vr,v)},
NK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eJv)
w=3
return A.b(C.FQ(t.a.c),$async$NK)
case 3:r=e
w=4
return A.b(C.fzx(t.a.c,r),$async$NK)
case 4:q=e
w=5
return A.b(C.FQ(t.a.c),$async$NK)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dQ9(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ac(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dv:B.cR,null,B.q,null,s,null,B.m6,null,null,null,null,null,null,null,null,null,null))
t.a.pp()
case 1:return A.h(u,v)}})
return A.i($async$NK,v)},
Hj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i_s(l),$async$Hj)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hug(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYc(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hj)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hbx(r)
o=Date.now()
n=t.a.c
m=new C.ku(l,r.toUpperCase(),p,!0,B.T,D.BC,new A.S(o,0,!1),0,n,D.tm)
w=5
return A.b(C.a1y(n,m),$async$Hj)
case 5:w=6
return A.b(t.vr(),$async$Hj)
case 6:t.a.bp()
t.a.pp()
if(t.c==null){w=1
break}t.DU(m)
case 1:return A.h(u,v)}})
return A.i($async$Hj,v)},
DU(d){return this.cac(d)},
cac(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$DU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Ad(u.a.c),$async$DU)
case 2:n=l.qZ(k.dH(f,new C.dQc(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hu(m,new C.anS(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$DU)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1y(u.a.c,o),$async$DU)
case 6:case 5:w=7
return A.b(u.vr(),$async$DU)
case 7:u.a.pp()
return A.h(null,v)}})
return A.i($async$DU,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.N(d).ax.a===B.H,o=new C.tt(p)
if(r.e)return A.av(A.mA(q,p?B.bq:B.bp,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dW:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bE9,B.f,q,q,new A.o(B.aU.j(0.12),q,A.I(B.aU,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc9g(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.EV(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bp,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e0,A.bJ(D.fp4,r.gaOn(),A.bk(B.bT,q,q,q,q,q,Ak.XO,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bqZ,q,q,1/0),15,B.ag,1.05,D.a7B,q)}w=J.ac(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.W(B.y1,B.aU,q,q,q,q),q,q,q,new C.dQh(r),q,q,q,q,"Sync family trees with database",q))
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.W(B.xT,B.aU,q,q,q,q),q,q,q,r.gae2(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.alN,D.f5T,r.gaOn(),A.bk(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ac(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.EV(r.cwa(J.q(r.d,s),o),14,B.ag,1,D.a7B,q))
B.d.v(w,u)}return A.v(A.a([p,B.az,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cwa(d,e){var w=null,v=e.a,u=v?B.dW:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bW).j(0.55),B.r,1),r=A.a([new A.ad(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bDd,B.f,w,w,new A.o(B.aU.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gamW(),m=d.d?"":" \xb7 Public",l=d.y===D.kc?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bz,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.bB,A.A(A.a([p,B.bf,l,A.W(B.M3,v?B.bq:B.bp,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dQg(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.anS.prototype={
T(){return new C.aBG(A.a([],x._),A.aX(x.N),A.b5Q())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aBG.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.aaY()
w=u.a
v=w.c
if(v.length!==0)C.a62(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a1l(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xj("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPC(r),s,null,!0,!0,x.y),$async$a1l)
case 3:if(e!==!0||t.c==null){w=1
break}t.IM()
t.m(new C.dPD(t,r))
w=4
return A.b(t.vi(),$async$a1l)
case 4:t.a.bp()
t.xj(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1l,v)},
cmi(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dPx(w,f,d,e))},
aQx(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dl()
u.e2(w,v,0,1)
u.jt(q,q,1,1)
this.w.sp(0,u)},
b6Z(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.dY(r)
w=q.C5()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dl()
t.e2(r,u,0,1)
t.jt(v,v,1,1)
t.e2(-r,-u,0,1)
t.io(0,q)
s.sp(0,t)},
aaY(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aaY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Ad(u.a.c),$async$aaY)
case 2:t=s.qZ(r.dH(e,new C.dP5(u)))
if(t!=null&&u.c!=null)u.m(new C.dP6(u,t))
return A.h(null,v)}})
return A.i($async$aaY,v)},
xj(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vg(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fTC(o,t,!1,r,new C.dPk(u),q.a,s),$async$vg)
case 2:n=A
m=J
w=3
return A.b(C.FQ(u.a.c),$async$vg)
case 3:p=n.qZ(m.dH(e,new C.dPl(u)))
if(p!=null&&u.c!=null)u.m(new C.dPm(u,p))
return A.h(null,v)}})
return A.i($async$vg,v)},
IM(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
vi(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1y(t,s),$async$vi)
case 2:return A.h(null,v)}})
return A.i($async$vi,v)},
a_Y(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tF(q,t.a.c)){t.xj("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i0B(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a_Y)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IM()
t.m(new C.dPw(t,r))
w=4
return A.b(t.vi(),$async$a_Y)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_Y,v)},
ZH(){return this.cae()},
cae(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tF(q,t.a.c)){t.xj("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.N(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPu(r,new C.tt(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$ZH)
case 3:if(e!==!0||t.c==null){w=1
break}t.IM()
t.m(new C.dPv(r,t))
w=4
return A.b(t.vi(),$async$ZH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZH,v)},
UN(d){return this.bwm(d)},
bwm(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tF(r,t.a.c)){t.xj("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dOU(t,d),r,null,!0,!0,x.P),$async$UN)
case 3:s=f
if(s==null){w=1
break}t.IM()
t.m(new C.dOV(t,s))
w=4
return A.b(t.vi(),$async$UN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UN,v)},
a1H(d){return this.cyf(d)},
cyf(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a1H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.N(s)
t=u.c
t.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dPF(u,d,new C.tt(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a1H)
case 2:return A.h(null,v)}})
return A.i($async$a1H,v)},
c6x(d){var w=this,v=w.d
v===$&&A.c()
if(C.tF(v,w.a.c))w.Np(d)
else w.a1H(d)},
agv(d,e){return this.cq9(d,e)},
cq9(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.N(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dPz(new C.tt(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$agv)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agv,v)},
Ho(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ho=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kc?3:5
break
case 3:w=6
return A.b(C.fHG(t.a.c),$async$Ho)
case 6:s=e
o=t.a
r=C.h0f(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.agv(!s,!r),$async$Ho)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bzf(o,t.a.c)){t.xj("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kW(o,"Cancel","Remove",q.y===D.kc?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ho)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNd(t.a.c,t.d.a),$async$Ho)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iK(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ho,v)},
a8z(d){return this.bHk(d)},
bHk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tF(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dOW(p))){o=A.T(s)
p.a=A.qZ(new A.cQ(new A.a2(s,new C.dOX(d),o.k("a2<1>")),new C.dOY(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IM()
t.m(new C.dOZ(t,s,d,q))
w=3
return A.b(t.vi(),$async$a8z)
case 3:t.xj(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a8z,v)},
Np(d){return this.bJk(d)},
bJk(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Np=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tF(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a1H(d),$async$Np)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.dP2(t,d),r,null,!0,!0,x.P),$async$Np)
case 6:s=f
if(s==null){w=1
break}t.IM()
t.m(new C.dP3(t,s))
w=7
return A.b(t.vi(),$async$Np)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Np,v)},
cwu(){var w=this,v=w.d
v===$&&A.c()
if(!C.tF(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dPE(w))
w.vi()},
XA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bzf(n,t.a.c)){t.xj("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.N(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.J(q,t.gc52(),A.T(q).k("J<1,n>")).bZ(0,new C.dPf()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPg(t,new C.tt(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$XA)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IM()
t.m(new C.dPh(t,p))
w=4
return A.b(t.vi(),$async$XA)
case 4:t.xj("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XA,v)},
c53(d){return B.a.i(d.toLowerCase())},
c91(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tF(v,w)
t=r.d
s=C.hQX(t)
C.i_w(q,t.b,u,C.hQW(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=new C.tt(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dPM(),A.T(l).k("a2<1>")).gM(0)
l=n?B.bV:B.iH
v=A.W(B.YY,n?B.bq:B.bp,o,o,o,18)
u=x.p
v=A.a([new A.C(B.Av,A.aK(!1,o,!0,new A.C(B.hG,A.A(A.a([v,B.bo,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dPN(p,d),o,o,o,o,o,o,o),o),new A.C(B.mS,p.bU1(m),o)],u)
if(p.d.y===D.kc){t=B.r1.j(0.15)
s=A.m(12)
r=A.I(B.r1.j(0.45),B.r,1)
q=C.FO(p.d,p.a.c)
v.push(new A.C(B.xb,A.p(o,A.A(A.a([D.bIn,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.j5,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.tF(p.d,p.a.c)&&p.e.length!==0)u.push(new C.J3("Undo",B.qR,p.gcwt(),m,o,o))
u.push(new C.J3("Family Book",D.bxW,p.gc90(),m,B.rQ,o))
if(C.tF(p.d,p.a.c))u.push(new C.J3("Display settings",B.Be,p.gcad(),m,B.aZ,o))
u.push(new C.J3("Sync",B.xT,p.gae2(),m,o,o))
t=p.d
if(t.y===D.kc||C.bzf(t,p.a.c)){t=p.d.y===D.kc?"Remove shared tree":"Delete tree"
u.push(new C.J3(t,B.e4,p.gbHu(),m,B.fU,o))}if(C.tF(p.d,p.a.c))u.push(new C.J3("Add member",B.vh,new C.dPO(p),m,B.bT,o))
v.push(new A.C(P.afS,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gamW()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.dPP(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?L.Z1:W.M4,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dPQ(p),o),o,o,o))}return A.cb(o,l,A.bo(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bU1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ad(0,B.G,B.fu.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xL,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bLp,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gae2(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eTa,m,m,m)
r=r.gamW()
p=n.d.gamW()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bz,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tF(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bIz,m,m,m,n.gcjK(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j9:B.me
r=r?"Private":"Public"
r=A.D(n.atd(q,"Privacy",r,n.a.d.w?n.gcvz():m),1)
q=A.D(n.atd(B.xU,"Tree code",n.d.c,new C.dP4(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.atd(D.bzE,"Collaborators",p,n.gbYr()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kc){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fG,A.A(A.a([A.W(B.ov,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aNx,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.af)],o))}return A.p(m,A.bv(u,new A.an(B.W,m,B.aa,B.q,A.a([t,new A.C(B.EL,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bPi,B.n),m,m,m,m,m,m,m,1/0)},
atd(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(K.agZ,A.v(A.a([A.W(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ud,A.d(f,w,1,B.a2,w,w,w,Ah.CF,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)}}
C.bco.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gal(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcr(s,t),new A.at(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dt(r,new C.d3w(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d3x(this),A.T(r).k("J<1,r>")))
return new A.C(B.ti,new A.a6(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jg.prototype={}
C.F7.prototype={}
C.bcq.prototype={
gbfj(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHh.prototype={}
C.bcr.prototype={
bJ2(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.X()
v=A.L()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aQ(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.po(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.po(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.L()
q.r=B.c.gp(0)
d.ah(new A.u(u,w),9,q)
q=A.L()
q.r=B.bA.gp(0)
d.aN(t,q)},
bJ0(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b1(a0,new C.d3R())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b8(a0,new C.d3S(f))
t=new A.J(a0,new C.d3T(f),A.T(a0).k("J<1,P>")).bZ(0,new C.d3U()).cI(0,1/0,B.wq)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lM(m)
i=Math.min(10,l/2)
l=$.X()
h=A.a([],q)
g=new A.aQ(l.r,B.ap,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cS(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cS(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbI().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.X()
w=A.L()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fy
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bJ0(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bJ2(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.bg5.prototype={
gc2T(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dbf
switch(w.c.a){case 0:return D.cGK
case 1:return D.cRw
case 2:return D.d5U}},
gc2W(){var w=this.c,v=C.haV(w.w),u=C.haV(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.N(d).ax.a===B.H,q=t.gc2T(),p=t.c,o=I.bA9(p.f),n=t.gc2W(),m=x.V,l=A.a([new A.ad(0,B.G,B.d.gam(q).j(0.35),B.cJ,10)],m),k=r?B.aA:B.c,j=A.I(r?B.aA:B.c,B.r,2)
if(o!=null)w=A.rU(B.A,s,B.cn,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gam(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gam(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hR(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ax,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.F0,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aA:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f22,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.bsO,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ad(0,B.G,B.w.j(r?0.3:0.06),B.dz,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bp,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a6(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.au,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aX0,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bsZ,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a9)}}
C.bbw.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.X()
w=A.L()
v=this.b
u=v?B.c:D.b7B
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.btD.prototype={
B(d){var w=this,v=null,u=new C.f3A(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hv,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xQ,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),u.$3(B.ajj,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.af)}}
C.bjq.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.r,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?L.Z1:W.M4,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eZq,v,v,v)],r),B.m,v,B.ba,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a9)
u=A.a([t,B.ao,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eXq,B.L,v,v)],r)
if(s){t=A.a([B.ao],r)
s=w.d
B.d.v(t,new A.J(s,new C.eFU(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a6(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.YT.prototype={
T(){return new C.aA7()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aA7.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aO()
r.d=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xp:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hSu(w.r,w.f)
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
OH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h0f(p.y,p.w)
w=3
return A.b(A.l8(t.a.w,B.Ho),$async$OH)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYc(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$OH)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.huh(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Am.FZ(78,800),$async$OH)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.djH(t,q))
case 1:return A.h(u,v)}})
return A.i($async$OH,v)},
c2V(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.xp,null,null,null,"","","","","",1,!1,0)
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
s=v.aBT(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).N(s)},
a8a(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.djG(r),s,null,!0,!0,x.y),$async$a8a)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8a,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.N(d).ax.a===B.H,i=new C.tt(j),h=l.a.e,g=A.T(h).k("a2<1>"),f=A.B(new A.a2(h,new C.djQ(l),g),g.k("H.E"))
h=j?B.dW:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.brk,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ho(A.aK(!1,k,!0,new A.C(B.lB,A.W(B.e4,B.oi,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbEa(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jl:B.iK
t=I.bA9(l.as)
if(l.as==null)s=A.W(B.oo,j?B.bq:B.bp,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.q,A.a([A.hp(u,t,s,k,42),A.ao(0,A.hp(B.bT,k,D.bCh,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc2S(),k,k,k,k,k,k,!1,B.a9),k,k,k)
t=l.d
t===$&&A.c()
t=C.aA9(t,"Full name",B.mb,1,1,i,B.lP)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bg3(i,u,new C.djR(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bkV],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.djS(),A.T(o).k("J<1,eN<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bkX],q)
B.d.v(q,new A.J(f,new C.djU(),A.T(f).k("J<1,eN<n?>>")))
o=A.v(A.a([t,B.ao,new C.abQ(i,r,"Who is their parent?",p,new C.djV(l),k,o),B.az,n,B.ao,new C.abQ(i,m,"Who is their spouse / partner?",q,new C.djW(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aA9(q,"Birth date",D.ain,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aA9(m,"Birth place",B.Zg,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aA9(n,"Date of death (if deceased)",D.akE,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aA9(p,"Occupation",B.a_k,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.q,w,k),B.az,s,B.bu,new C.abR(i,"Identity",u,k),B.ac,new C.abR(i,"Family links",o,k),B.ac,new C.abR(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aA9(r,"Notes",B.kG,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aA8(i,"Child order",l.car(l.at),new C.djX(l),new C.djY(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fR0(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.djZ(l):k
B.d.v(r,A.a([B.S,new C.aA8(i,"Visible in tree",u,w,new C.dk_(l),k)],v))}r.push(B.S)
w=j?B.jl:B.iK
u=A.m(14)
t=A.I(j?B.dZ:B.bW,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iC(k,B.bT,k,B.ag,k,new C.dk0(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.aft,k,k,k))
r.push(B.bu)
w=j?B.aP:B.aA
j=j?B.dZ:B.bW
r.push(A.A(A.a([A.D(A.dW(B.nd,new C.djT(d),A.de(k,k,k,k,k,k,k,k,k,w,k,k,B.cf,k,new A.b7(A.m(14),B.Y),new A.aA(j,1,B.r,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eCk,l.gc2U(),A.bk(B.aU,k,k,0,B.c,k,B.cf,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.eh(B.h8,k,B.ag,h,new A.a6(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ah),k),D.agl,k,B.afJ,new A.b7(g,B.Y),k,k)},
car(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.abR.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jl:B.iK,s=A.m(16)
return A.v(A.a([new A.C(D.agJ,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bW,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bg4.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dW:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bW).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.T,!1,u,!0,B.q,u,A.aM(),v.d,u,u,u,u,u,2,A.bq(u,B.ex,u,B.uX,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bp,u,u,u,u,u,u,u,u,u,u,u,B.cs,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.abQ.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dW:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bW).j(0.85),B.r,1),q=A.W(B.qL,u?B.bq:B.bp,v,v,v,v),p=A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dW:B.c
return A.p(v,new A.D5(A.a3c(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,v,v,v,B.cs,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l2,v,v,v)}}
C.bg3.prototype={
B(d){var w=new C.dk1(this)
return A.A(A.a([w.$3(D.YB,"Male",B.MQ),B.ab,w.$3(D.ahB,"Female",B.MB),B.ab,w.$3(D.xp,"Other",B.mY)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aA8.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jl:B.iK,r=A.m(14),q=A.I(t?B.dZ:B.bW,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGk(u,B.xQ,w.f,v),B.bo,new C.aGk(u,B.hv,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eh,v,v,v)}}
C.aGk.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dW:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bq:B.bp).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.af)}}
C.abS.prototype={
bMH(d){switch(d.a){case 0:return B.bT
case 1:return B.bA
case 2:return B.cU}},
bMI(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aUG(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zG(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dW:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bW).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bT,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bp,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cG,B.x8,p,p,1/0)},
acx(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jl:B.iK,s=A.m(16),r=A.I(v?B.dZ:B.bW,B.r,1)
return A.v(A.a([new A.C(D.agJ,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hfC(r,q),o=q.c,n=t.bMH(o),m=I.bA9(q.f),l=t.e.a,k=l?B.dW:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kc?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bp,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ad(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hp(u,m,m==null?A.W(B.oo,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.av(A.p(s,A.d(t.bMI(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.m9,s,s,s),s,s,s)
u=x.p
i=A.a([t.zG("Full name",i,B.mb)],u)
if(p>0)i.push(t.zG("Child order","#"+p,B.MI))
r=A.a([h,B.au,r,B.aO,l,B.S,v,B.bu,t.acx("Identity",i),B.ac,t.acx("Life details",A.a([t.zG("Birth date",q.w,D.ain),t.zG("Birth place",q.x,B.Zg),t.zG("Date of death",q.y,D.akE),t.zG("Occupation",q.z,B.a_k)],u)),B.ac,t.acx("Family links",A.a([t.zG("1. Parent",t.aUG(q.d),B.Fe),t.zG("2. Spouse",t.aUG(q.e),B.MA)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.acx("Notes",A.a([t.zG("Notes",q,B.kG)],u))],u))
r.push(B.bu)
r.push(A.bJ(B.ID,new C.dkb(d),A.bk(B.aU,s,s,s,s,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eE(s,k,new A.cU(B.lp,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,B.xd,s,s,B.ah),s),s,s,s,B.EO,B.d_,s,new A.b7(j,B.Y),s)}}
C.J3.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bp
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xh,A.ho(A.aF(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.af),u,v.c,u,u),u)}}
C.anV.prototype={
eJ(){var w,v,u=this,t=x.N,s=A.V(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.T(w).k("J<1,a4<n,@>>")
w=A.B(new A.J(w,new C.c5P(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iN(w,new C.c5Q(),t,x.U))
return s}}
C.anW.prototype={
T(){return new C.aBI(A.a([],x.bF))},
gd9(){return this.c}}
C.aBI.prototype={
a_(){this.a1()
this.IT()},
IT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c5T(t.a.c),$async$IT)
case 3:r=e
w=4
return A.b(C.Ad(t.a.c),$async$IT)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qF(q,new C.dPZ(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dQ_(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$IT,v)},
xQ(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JB(d,e){return this.cyM(d,e)},
cyM(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dQ3(q,e))
t=3
w=6
return A.b(d.$0(),$async$JB)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dQ4(q))
$.eP.m7()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JB,v)},
Wq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oU(r,s.c,s.e),$async$Wq)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JB(new C.dPW(t),"Preparing download\u2026"),$async$Wq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wq,v)},
Wu(d){return this.bKK(d)},
bKK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oU(r,s.c,s.e),$async$Wu)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JB(new C.dPX(t,d),"Preparing file\u2026"),$async$Wu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wu,v)},
aep(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aep=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wM.c4().Ll(B.PF,B.tn,!0),$async$aep)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gal(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jk(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a9(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.FY()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aep,v)},
X4(d){return this.bUU(d)},
bUU(d){var w=0,v=A.j(x.H),u=this
var $async$X4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JB(new C.dPY(u,d),"Restoring family trees\u2026"),$async$X4)
case 2:return A.h(null,v)}})
return A.i($async$X4,v)},
X3(){var w=0,v=A.j(x.H),u,t=this,s
var $async$X3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aep(),$async$X3)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.X4(s),$async$X3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X3,v)},
a0N(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oU(r,s.c,s.e),$async$a0N)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JB(new C.dQ2(t),"Creating QR code\u2026"),$async$a0N)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0N,v)},
a0p(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cn()){t.xQ("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ci(A.em(new C.dQ0(),!0,null,x.N)),$async$a0p)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.X4(r),$async$a0p)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0p,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.N(d).ax.a===B.H,n=o?B.zX:B.iH,m=o?D.ae3:B.aP,l=o?B.aK:B.bW,k=o?B.aP:B.aA,j=new C.d3V(n,m,l,k,o?B.bI:B.bp)
l=A.aH(p,p,p,p,A.W(B.eA,k,p,p,p,20),p,p,p,new C.dQ6(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d3t(!0,B.jb,B.aX,B.aX,q.r?p:q.gcpY(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gcmd()
t.push(A.D(C.d3t(!s,B.iO,B.b4,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d3t(!1,B.hx,B.aU,B.bT,q.r?p:q.gbKD(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d3t(!1,M.xX,B.aJ,B.aM,q.r?p:q.gbUR(),j,s,"Upload backup file"),1))
l=A.a([new C.bcp(v,l,p),B.kn,new C.ab8(j,"QR restore",p),B.S,t,B.d6,new C.ab8(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ac(q.d)>1&&q.a.f==null){v=A.a([B.kn,new C.ab8(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dQ7(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.XK,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aU.j(0.35),B.r,1)
s=A.a([new A.ad(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bo(!0,A.p(p,A.A(A.a([L.aM0,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AB,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cb(w,n,new A.an(B.W,p,B.aa,B.q,l,p),p,!1,!1,p,p)}}
C.d3V.prototype={}
C.bcp.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ad(0,B.G,B.aU.j(0.32),B.jV,28)],x.V)
t=A.ao(p,A.W(B.tE,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.q,A.a([t,new A.C(B.a8,A.A(A.a([A.p(p,D.bKY,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nX,A.D(A.v(A.a([D.f6Q,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bSr,B.n),p,p,p,p,p,p,p,p)}}
C.ab8.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcn.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aX.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ad(0,B.G,B.aX.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ex(A.dc(new A.C(E.Xo,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qG,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bz,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cs,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)}}
C.bcs.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aU.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ex(new A.C(B.eP,A.A(A.a([A.p(v,D.bKb,B.f,v,v,new A.o(q,v,A.I(B.aU.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qG,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hx,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.Zd.prototype={
T(){return new C.aBH()},
gd9(){return this.c}}
C.aBH.prototype={
a_(){this.a1()
this.a7H()},
a7H(){var w=0,v=A.j(x.H),u=this,t
var $async$a7H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b_P(u.a.c,B.Cc),$async$a7H)
case 2:t=e
if(u.c!=null)u.m(new C.dPR(u,t))
return A.h(null,v)}})
return A.i($async$a7H,v)},
afM(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$afM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dPS(q))
t=4
p=A.h1T(q.a.d,B.Cc)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.U(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqa(n.e,m,l,B.Cc,p,n.f),$async$afM)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dPT(q))
q.c.I(x.q).f.R(D.eKE)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a9(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(B.a.e7(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dPU(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afM,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.N(d).ax.a===B.H,o=p?B.j_:B.pd,n=p?B.i4:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.flW,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.pz(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aU,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bu,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.ba,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gclW()
if(u)u=B.Ib
else u=A.W(r.e===!0?B.hw:B.aim,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a6(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.de(q,q,q,q,q,q,q,q,q,B.aU,q,B.fL,q,q,q,new A.aA(B.aU.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.i7,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.ay:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bJ(B.zb,new C.dPV(d),A.bk(B.aU,q,q,q,q,B.fL,q,q,q,q,q,q)),q))
return A.cb(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Ze.prototype={
T(){return new C.bhx(A.yL(B.wY,B.nk,B.tJ))}}
C.bhx.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cb(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.feo,w,w,w,1,w,!0),B.w,A.yK(this.d,B.bQ,new C.dQ8(this,d)),w,!1,!1,w,w)}}
C.aWL.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.P9,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ls.prototype={}
C.a54.prototype={
T(){return new C.bhe(null,null)}}
C.bhe.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tc,v,1,v,w)
w.e=A.bj(v,B.pi,v,1,v,w)
w.a.toString
w.d.cG(0)
w.e.cG(0)},
br(d){var w,v,u=this
u.bE(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cG(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cG(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.brQ()},
B(d){var w,v,u=this,t=B.d.dM(D.a1V,new C.dBI(u),new C.dBJ())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cr0(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dBK(u,t),null),!0)}}
C.bhd.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aYV(d,e)
break
case"house":p.lJ(d,e,D.cVX)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.ged()
$.X()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ah(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lO(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Ap(d,e,12)
p.xt(d,e,B.kX,5,14)
break
case"grocery":p.cb9(d,e)
break
case"calculator":p.caR(d,e)
break
case"lumber":p.cbh(d,e)
break
case"kitchen":p.cbc(d,e)
break
case"landscape":p.lJ(d,e,D.cWs)
s=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cS(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cS(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ap(t,w))
s.E(new A.ap(0,w))
s.E(new A.bF())
w=A.L()
w.r=B.ff.j(0.85).gp(0)
d.aN(s,w)
p.Ap(d,e,8)
p.xt(d,e,B.iM,4,18)
break
case"plumbing":p.cbq(d,e)
break
case"electrical":p.lJ(d,e,D.d5d)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aX(new A.aa(0,0,0+e.a,0+e.b),u)
p.lO(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lO(d,e,B.lt.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Ap(d,e,10)
break
case"store":p.cbz(d,e)
break
case"paint_remodel":p.cbl(d,e)
break
case"roofing":p.cbs(d,e)
break
case"warehouse":p.cbG(d,e)
break
case"vehicles":p.cbE(d,e)
break
case"farm":p.cb3(d,e)
break
case"restaurant":p.cbr(d,e)
break
case"tools":p.cbC(d,e)
break
case"wallet":p.cbF(d,e)
break
case"concrete":p.caX(d,e)
break
case"blueprint":p.caP(d,e)
break
default:p.aYV(d,e)}},
lJ(d,e,f){var w,v=new A.aa(0,0,0+e.a,0+e.b)
$.X()
w=A.L()
w.sau(new A.a7(B.ax,B.aD,B.x,f,null,null).aw(0,v))
d.aX(v,w)},
lO(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.ged()/2-h
$.X()
w=A.L()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c5(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xt(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.ged()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Ap(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aYV(d,e){var w,v=this
v.lJ(d,e,D.d40)
w=v.c
v.lO(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lO(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bIX(d,e,B.hT,w)
v.xt(d,e,B.c.j(0.7),6,8)},
bIX(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c5(new A.aa(16,q,t,q+3)),p)
p.delete()}},
cb9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lJ(d,e,D.ccO)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cUh[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lO(d,e,B.c.j(0.35),w,16)
j.xt(d,e,B.iM,5,12)},
caR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lJ(d,e,D.ccV)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.ged()
$.X()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ah(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ih(g,g,g,g,g,B.a5,B.ch,g,B.er,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cXX[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.eo(r,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ccX[o]
l=B.k3.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.eo(m,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.lO(d,e,B.c.j(0.35),w*1.5,14)
h.lO(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
h.lO(d,e,B.zY.j(0.4),r*2.8,22)
h.xt(d,e,B.p4,8,10)
h.Ap(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cbh(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lJ(d,e,Y.au_)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.by(new A.aa(20,q,u,q+10),B.hy)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fZ,B.o8,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.ep(p),n)
n.delete()}m.lO(d,e,B.fZ.j(0.35),w,15)
m.Ap(d,e,8)},
cbc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lJ(d,e,D.cUM)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lO(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.xt(d,e,B.qj,4,14)},
cbq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lJ(d,e,D.cKn)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.X()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xt(d,e,B.og,6,12)
l.lO(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cbz(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lJ(d,e,D.cqe)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.by(new A.aa(q,14,q+u,22),B.hO)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f5,B.bJ,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}n.lO(d,e,B.c.j(0.3),w,16)
n.Ap(d,e,8)
n.xt(d,e,B.uD,5,13)},
cbl(d,e){var w,v,u,t,s,r,q,p,o
this.lJ(d,e,D.cPY)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.by(new A.aa(q,p,q+8,p+(18+r*22)),B.hb)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.ij,B.dx,B.bJ,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.ep(p),o)
o.delete()}this.lO(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cbs(d,e){var w,v,u,t,s,r,q,p,o
this.lJ(d,e,D.cNy)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xt(d,e,B.cm,7,11)},
cbG(d,e){var w,v,u,t,s,r,q,p,o,n
this.lJ(d,e,D.csS)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.by(new A.aa(p,o,p+(t-r*8),o+16),B.hy)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cm,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}this.lO(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cbE(d,e){var w,v,u,t,s,r,q,p,o
this.lJ(d,e,D.d8V)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.by(new A.aa(r,q,r+28,q+8),B.hy)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}this.Ap(d,e,6)},
cb3(d,e){var w,v,u,t,s,r,q,p,o,n
this.lJ(d,e,D.cTr)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.X()
s=A.L()
s.r=B.lt.j(0.75).gp(0)
d.ah(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.h_.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lO(d,e,B.lt.j(0.35),w,14)},
cbr(d,e){var w,v,u,t,s,r,q,p,o=this
o.lJ(d,e,D.cVM)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ct(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c5(r),p)
p.delete()}o.xt(d,e,B.qj,5,16)
o.Ap(d,e,7)},
cbC(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lJ(d,e,D.d6C)
w=m.c
v=w*3.141592653589793
m.lO(d,e,B.o8.j(0.55),v*3,10)
m.lO(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.o8.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cbF(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lJ(d,e,D.d9q)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.by(new A.aa(p,o,p+36,o+22),B.hO)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iM,B.lt,q).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}m.Ap(d,e,9)
m.lO(d,e,B.c.j(0.4),w*2.2,12)},
caX(d,e){var w,v,u,t,s,r,q,p,o,n
this.lJ(d,e,D.d_y)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.X()
s=A.L()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.ff(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bW.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
caP(d,e){var w,v,u,t,s,r,q,p
this.lJ(d,e,D.cWJ)
$.X()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.X()
u=A.L()
u.r=B.dx.j(0.45).gp(0)
d.aX(new A.aa(0,p,0+v,p+6),u)
this.lO(d,e,B.kX.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aqS.prototype={
Z5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aO8(),$async$Z5)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7j(s),$async$Z5)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Z5,v)},
aeq(d){return this.cdV(d)},
cdV(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i_G(d),$async$aeq)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aeq,v)},
B(d){var w,v,u,t=null,s=A.N(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jl:B.iK
w=x.p
v=A.a([C.aOw(!0,B.qb,1/0,B.pq,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bX(new A.bI(B.b0,t,t,new A.C(B.uQ,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.auU,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a7(B.b0,B.b6,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dq(D.bE2,D.f3h,new C.cdn(this,d),A.bk(B.aU,t,t,t,B.c,t,B.jp,t,t,t,t,B.c7)),1),B.ab,A.D(A.ez(D.bMa,D.fho,this.gc50(),A.de(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jp,t,t,D.aVx,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aF(!1,B.a1,!0,B.qb,new A.an(B.W,t,B.b_,B.q,v,t),B.aq,s,0,t,t,t,t,t,B.af),t)}}
C.aJD.prototype={
aQ(){this.aY()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.aRn.prototype={}
C.aRm.prototype={}
C.aPs.prototype={}
C.XS.prototype={
T(){return new C.awX()}}
C.awX.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b1,B.aN)
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Js(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eL8)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).N(new C.aRn(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.N(d).ax.a===B.H,l=m?B.dW:B.c,k=A.m(20),j=A.p(n,D.bLQ,B.f,n,n,new A.o(B.aU.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bz,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cw,m?B.bq:B.bp,n,n,n,n),n,n,n,new C.cWE(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,11,n,n,B.cs,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h28(new C.cWF(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jl:B.iK
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bW
t=A.aL(n,B.T,!0,n,!0,B.q,n,A.aM(),u,n,n,n,n,n,2,A.bq(n,new A.b4(4,r,B.df),n,n,n,n,n,n,!0,new A.b4(4,q,new A.aA(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cWG(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,Q.If,n,n,n,n)
u=m?B.aP:B.aA
m=m?B.dZ:B.bW
return A.eE(n,l,new A.cU(B.lp,A.cd(A.v(A.a([j,B.aO,i,B.au,w,B.P,v,B.aO,t,B.bu,A.A(A.a([A.D(A.dW(B.dd,new C.cWH(d),A.de(n,n,n,n,n,n,n,n,n,u,n,n,B.cf,n,new A.b7(A.m(12),B.Y),new A.aA(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bJ(D.fhD,o.ga15(),A.bk(B.aU,n,n,n,B.c,n,B.cf,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.y,n,B.AC,n,n,B.ah),n),n,n,n,V.AD,B.d_,n,new A.b7(k,B.Y),n)}}
C.XR.prototype={
T(){return new C.awW()}}
C.awW.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aO()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Js(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eIQ)
return}v=this.c
v.toString
A.a5(v,!1).N(new C.aRm(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.N(d).ax.a===B.H,o=p?B.dW:B.c,n=A.m(20),m=A.p(q,D.bIs,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bz,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bp,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cw,p?B.bq:B.bp,q,q,q,q),q,q,q,new C.cWA(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aU.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aU.j(0.25),B.r,1)
u=A.W(B.ai8,B.aU.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jl:B.iK
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bW
v=A.aL(q,B.T,!0,q,!0,B.q,q,A.aM(),w,q,q,q,q,q,2,A.bq(q,new A.b4(4,t,B.df),q,q,q,q,q,q,!0,new A.b4(4,s,new A.aA(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cWB(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.ko,q,q,q,q)
w=p?B.aP:B.aA
p=p?B.dZ:B.bW
return A.eE(q,o,new A.cU(B.lp,A.cd(A.v(A.a([m,B.aO,l,B.az,v,B.bu,A.A(A.a([A.D(A.dW(B.dd,new C.cWC(d),A.de(q,q,q,q,q,q,q,q,q,w,q,q,B.cf,q,new A.b7(A.m(12),B.Y),new A.aA(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bJ(D.fo5,this.ga15(),A.bk(B.bT,q,q,q,B.c,q,B.cf,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.AC,q,q,B.ah),q),q,q,q,V.AD,B.d_,q,new A.b7(n,B.Y),q)}}
C.Xp.prototype={
T(){return new C.avG()}}
C.avG.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aO()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aO()
v.e=new A.ar(new A.bb("1",B.b1,B.aN),w)
v.f!==$&&A.aO()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aO()
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
gIO(){var w,v=this.e
v===$&&A.c()
w=A.d3(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gahy(){var w=this.f
w===$&&A.c()
w=A.d3(B.a.i(w.a.a))
return w==null?0:w},
gb0K(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aM6(d){var w,v=B.k.D(this.gIO()+d,0.25,999999),u=B.k.jK(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saV(0,u)
this.m(new C.cud())},
avQ(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aU,w,w,w,20):w,u=d.a,t=u?B.jl:B.iK,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bW
return A.bq(w,new A.b4(4,s,B.df),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.aA(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a90),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c51(d,e,f){return this.avQ(d,e,f,null)},
Js(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gahy()<=0){s.c.I(x.q).f.R(D.eN_)
return}r=s.c
r.toString
v=s.gIO()
u=s.gahy()
t=s.gb0K()
A.a5(r,!1).N(new C.aPs(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=new C.tt(n),l=n?B.dW:B.c,k=A.m(24),j=x.O,i=A.a([B.aU.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bBZ,B.f,o,o,new A.o(o,o,A.I(B.aU.j(0.35),B.r,1),h,o,new A.a7(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bz,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.cs,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cw,n?B.bq:B.bp,o,o,o,o),o,o,o,new C.cuj(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.T,!0,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.avQ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.MO),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,Q.If,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jl:B.iK
t=A.m(14)
s=A.I(n?B.dZ:B.bW,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xQ,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cuk(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),q,o,o,o,o,o,2,D.bNH,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cul(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aH(o,o,o,o,A.W(B.hv,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cum(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.aw,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),t,o,o,o,o,o,2,p.avQ(m,"Amount","0.00",B.hX),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cun(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.J(D.cQp,new C.cuo(p,m),t),t.k("aj.E"))
i=A.a([i,B.bu,v,B.az,h,B.P,s,B.ac,A.c3(B.bE,u,B.bw,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.c51(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cup(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.ko,o,o,o,o)],w))}i.push(B.aO)
h=B.aU.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIO()===B.k.jK(p.gIO())?B.k.O(p.gIO()):p.gIO()
s=p.gb0K()
r=A.Af(p.gahy())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bAW(p.gIO()*p.gahy(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.j6,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.dZ:B.bW
h=A.de(o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o,new A.b7(j,B.Y),new A.aA(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dW(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cuq(d),h),1),B.aw,A.D(A.dq(D.alG,D.fkg,p.ga15(),A.bk(B.aU,o,o,0,B.c,o,B.cf,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eE(o,l,new A.cU(U.a9n,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.q,o,B.y,o,Aa.qF,o,o,B.ah),o),o,o,o,B.Lu,B.d_,o,new A.b7(k,B.Y),o)}}
C.a_W.prototype={
T(){return new C.btv()}}
C.btv.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,B.b1,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.N(d).ax.a===B.H,q=r?B.dW:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jl:B.iK
v=A.aL(s,B.T,!0,s,!0,B.q,s,A.aM(),w,s,s,s,s,s,2,A.bq(s,new A.b4(4,A.m(12),B.df),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f32(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dW(B.dd,new C.f33(d),s),1)
r=A.bk(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.C(B.AC,A.v(A.a([o,B.az,v,B.aO,A.A(A.a([u,B.aw,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f34(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d_,s,new A.b7(p,B.Y),s)}}
C.aab.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.EV.prototype={
T(){return new C.btt(null,null)}}
C.btt.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.blu,null,1,null,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bua()},
gbvy(){switch(this.a.r.a){case 1:return A.a([B.aU,B.bT,B.aZ],x.O)
case 2:return A.a([B.bs,B.aU,B.aZ],x.O)
case 3:return A.a([B.aX,B.c8,B.jH],x.O)
case 4:return A.a([B.ht,B.bT,B.f6],x.O)
case 0:return A.a([B.aU,B.bT,B.aZ],x.O)}},
B(d){var w=A.N(d),v=this.d
v===$&&A.c()
return new A.et(A.c6(v,new C.f30(this,new C.tt(w.ax.a===B.H)),null),null)}}
C.avz.prototype={
T(){return new C.btu(null,null)}}
C.btu.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mO,null,1,null,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bub()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f31(this),null)}}
C.bts.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.aa(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aV(w,w))
u=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
u.E(new A.iS(v))
w=A.L()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.L()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aN(u,w)
w=A.wK(u)
t=A.a([],x.f5)
w=new A.vh(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jP('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GK(w,r)
w.je()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aPq(d,q,r,o,0,0.2,4.2,0.92)
p.aPq(d,q,r,s,0.52,0.11,3.2,0.58)}},
aPq(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hnx(e.a.a,e,t,t+f*i,!0),r=A.bzi(s.gbI().a.getBounds())
$.X()
w=A.L()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a7(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Gr,null).aw(0,r))
d.aN(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aLM.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aLN.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.tt.prototype={}
C.aqR.prototype={
T(){return new C.aDd()},
gdX(){return this.c}}
C.aDd.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afg()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Kt(w,v)
this.a2()},
afg(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzq(t.c,t.d.a),$async$afg)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eD3(u,s))
return A.h(null,v)}})
return A.i($async$afg,v)},
P6(){var w=0,v=A.j(x.H),u=this,t,s
var $async$P6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eCV(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Kt(t,s),$async$P6)
case 2:if(u.c!=null)u.m(new C.eCW(u))
return A.h(null,v)}})
return A.i($async$P6,v)},
PD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.N(p)
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.eD1(t,new C.tt(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$PD)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7j(q),$async$PD)
case 6:case 5:t.m(new C.eD2(t,r))
w=7
return A.b(t.P6(),$async$PD)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PD,v)},
UH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i_r(r),$async$UH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eCQ(t,new C.qJ(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.P6(),$async$UH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UH,v)},
ca2(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hfz(t,new C.eCU(u),w,v)},
a9s(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.aA(v,2.5,B.r,-1),B.Y,B.Y,new A.aA(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aVj,w,w,B.n),w,22,w,w,w,w,w,22)},
a8y(d){return this.bHh(d)},
bHh(d){var w=0,v=A.j(x.H),u=this
var $async$a8y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eCT(u,d))
w=2
return A.b(u.P6(),$async$a8y)
case 2:return A.h(null,v)}})
return A.i($async$a8y,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.N(a2).ax.a===B.H,e=f?B.bV:B.iH,d=A.m(8),a0=A.W(O.YZ,f?B.bq:B.bp,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.EV,A.A(A.a([a0,B.bo,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bp,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eD4(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.q,A.a([A.bv(A.m(22),C.aOw(!0,A.m(22),1/0,B.pq,g,d,1/0),B.aq),A.ao(10,A.dq(D.bGx,D.fmp,h.gaZH(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h5,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ad(0,B.G,B.aU.j(f?0.5:0.38),B.eT,22),new A.ad(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ad(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.W,g,B.b_,B.q,A.a([C.aOw(!0,A.m(16),1/0,B.Mf,g,r.c,1/0),A.bX(g,new A.o(g,g,g,g,g,new A.a7(B.b0,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9s(!0),g,g,8,g,8,g),A.ao(g,A.crL(h.a9s(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.crL(h.a9s(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.crL(h.a9s(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dq(D.bCz,D.fgp,h.gaZH(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h5,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bP3,B.n),g,g,g,g,B.lB,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b4A,B.nq,B.h2],u):A.a([B.aZ,B.aU,B.bT],u)
t=x.V
s=A.a([new A.ad(0,B.G,B.aU.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jt,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h3,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.az,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ao,C.bAW(h.d.gwv(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cs,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.h1.j(0.75),B.r,1.6)
t=A.a([new A.ad(0,B.G,B.aX.j(0.28),B.cJ,14)],t)
j=B.aX.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.an(B.W,g,B.aa,B.q,A.a([p,new A.C(D.bq6,A.A(A.a([o,B.aw,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ex(new A.C(Af.Xn,A.v(A.a([A.p(g,D.alf,B.f,g,g,new A.o(j,g,A.I(B.aX.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cj,g,g,g),B.fV,D.f5X],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gca1(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.af)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ax,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bu,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dq(Aj.a_G,D.f3T,h.gbw0(),A.bk(B.aU,g,g,g,B.c,g,B.j5,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dW:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bW,B.r,1)
t=A.W(B.Zj,f?B.bq:B.bp,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.ao,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bp,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tl,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eD5(h,new C.tt(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.Ar,A.av(A.mA(g,f?B.bq:B.bp,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cb(g,e,A.bo(!0,A.v(A.a([new A.C(B.Av,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.y,g,E.xf,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bzA(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dW:B.c,p=A.m(16),o=A.a([new A.ad(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aY4,u,u,u,u,u,u,u,5),l=B.aU.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hI:B.h7,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcOx()
v=A.Af(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bp,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.ba,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aU.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bAW(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h5,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.Dt(A.A(A.a([m,A.D(new A.C(B.afm,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cw,(r?B.bq:B.bp).j(0.75),u,u,u,20),u,u,u,new C.eCR(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aWX,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.acc.prototype={
DP(d){return this.bIz(d)},
bIz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oU(d,o,!1),$async$DP)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
w=4
return A.b(A.bN(A9.Ap,null,x.H),$async$DP)
case 4:s=t.d
w=5
return A.b(C.fyG(!0,o,s),$async$DP)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FN(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$DP)
case 6:p=f
w=7
return A.b(A.oT(o,!1),$async$DP)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
Z6(d){return this.cpZ(d)},
cpZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oU(d,s,!1),$async$Z6)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
A.hu(d,new C.aqL(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oT(s,!1),$async$Z6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z6,v)},
P7(d){return this.cm8(d)},
cm8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$P7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(A.hu(d,D.aE8,!0,"NgmyWorksheetProjectScan",x.N),$async$P7)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bAX(s),$async$P7)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eM8)
w=1
break}q=C.fTh(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$P7)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$P7,v)},
Z7(d){return this.cxL(d)},
cxL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Z7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(C.bAu(),$async$Z7)
case 3:s=f
if(s==null){w=1
break}r=C.fTh(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$Z7)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Z7,v)},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=new C.tt(u),s=w.d.d.length,r=u?B.dW:B.c,q=A.m(28),p=A.a([new A.ad(0,B.G,B.w.j(u?0.35:0.08),B.jV,36)],x.V),o=x.p
return A.bo(!0,new A.C(B.uY,A.p(v,A.v(A.a([w.coA(d,t,s),new A.C(D.bpv,A.v(A.a([w.b1E(t,"QR restore"),B.S,A.A(A.a([w.aXF(t,!0,B.jb,B.aX,B.aX,new C.eD7(w,d),"Show to scan","QR code"),B.aw,w.avR(t,B.iO,B.b4,B.by,new C.eD8(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d6,w.b1E(t,"Backup files"),B.S,A.A(A.a([w.avR(t,B.hx,B.aU,B.bT,new C.eD9(w,d),"Full copy","Backup file"),B.aw,w.avR(t,M.xX,B.aJ,B.aM,new C.eDa(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
coA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cY,B.fu],k):A.a([B.aZ,B.aU,B.bT],k)
w=A.ao(l,A.W(B.tE,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kC,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ad(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOw(!0,A.m(13),64,D.bxQ,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aOv,l,l,l)
r=C.bAW(r.gwv(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.q,A.a([w,new A.C(D.bpT,A.v(A.a([v,A.A(A.a([s,B.ew,A.D(A.v(A.a([u,B.au,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fI,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cw,B.c.j(0.85),l,l,l,l),l,l,l,new C.eD6(d),l,l,l,A.nn(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aLQ,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ax,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b1E(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bp,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aXF(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ae3:B.aP
if(e)w=B.aX.j(o?0.45:0.35)
else{w=o?B.dZ:B.bW
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ad(0,B.G,B.aX.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qG,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ex(new A.C(E.Xo,A.v(A.a([t,B.ac,u,B.bz,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bp,r,r,r,r,r,r,r,r,11,r,r,B.cs,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
avR(d,e,f,g,h,i,j){return this.aXF(d,!1,e,f,g,h,i,j)}}
C.aqL.prototype={
T(){return new C.biU()}}
C.biU.prototype={
a_(){this.a1()
this.ad9()},
ad9(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ad9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bAY(p.c,p.d),$async$ad9)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eCL(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eCM(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ad9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.N(d).ax.a===B.H,f=g?B.zX:B.iH,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eCN(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.z1],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cY,B.fu],s):A.a([B.aZ,B.aU,B.bT],s)
r=x.V
q=A.a([new A.ad(0,B.G,B.aU.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dB,B.L,h,h)
p=C.bAW(p.gwv(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ao,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fI,h,h,h)],u),B.m,h,B.ba,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ax,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.XJ,h,h,1/0)
t=g?D.bdw:B.c
q=A.m(24)
p=A.I(w?B.aX.j(0.4):B.aU.j(0.3),B.r,1)
r=A.a([new A.ad(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6a,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e0B)
else{m=A.m(20)
l=A.I(B.aL,B.r,1)
o.push(A.p(h,A.pz(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bY,h,h,h))}}o.push(B.aO)
n=w?B.aX:B.aU
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aX:B.aU).j(0.35),B.r,1)
k=w?B.Mx:B.N2
k=A.W(k,w?B.aX:B.aU,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.j5,h,h,h))
return A.cb(h,f,A.bo(!0,A.v(A.a([new A.C(A4.LH,e,h),A.D(A.cd(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tk,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.y,h,E.agv,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aqQ.prototype={
T(){return new C.aDc(A.yL(B.KZ,B.nk,B.tJ))}}
C.aDc.prototype={
q(){this.d.q()
this.a2()},
aK8(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iK(w,d)},
c5S(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hYs(t)
if(s!=null){this.aK8(s)
return}r=C.h6F(t)
if(r!=null)q=A.ds(r,p,0)
else q=!1
if(q){this.aK8(B.a.i(B.a.b_(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aH(t,t,t,t,A.W(u.f?B.qM:A_.MD,t,t,t,t,t),t,t,t,new C.eCP(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.zX,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fgi,t,t,t,1,t,!0),q=A.yK(u.d,B.bQ,u.gc5R()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aU,B.r,3),p,A.a([new A.ad(2,B.G,B.aU.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cb(r,B.w,new A.an(B.W,t,B.b_,B.q,A.a([q,p,A.ao(32,A.p(t,D.ff7,B.f,t,t,new A.o(w,t,A.I(B.aU.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.j6,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aHZ.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nd.prototype={
T(){return new C.aDe(D.a8i,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDe.prototype={
gcvP(){return J.bC6(this.e,0,new C.eDx())},
a_(){this.a1()
$.aT.c1$.push(this)
this.vf()},
q(){$.aT.hA(this)
this.a2()},
iK(d){if(d===B.fs)this.vf()},
vf(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Cm(q.a.c).cN(0,B.jN),$async$vf)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eDt(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eDu(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vf,v)},
Hi(d){return this.bFs(d)},
bFr(){return this.Hi(null)},
bFs(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i_t(l,d),$async$Hi)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lb(l,r,q,D.d_L,new A.S(Date.now(),0,!1))
w=4
return A.b(C.Kt(t.a.c,p),$async$Hi)
case 4:o=f
w=5
return A.b(t.vf(),$async$Hi)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eJj)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eL2)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DT(m)
case 1:return A.h(u,v)}})
return A.i($async$Hi,v)},
DT(d){return this.c9O(d)},
c9O(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$DT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hu(s,new C.aqR(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$DT)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Kt(u.a.c,t),$async$DT)
case 5:case 4:w=6
return A.b(u.vf(),$async$DT)
case 6:return A.h(null,v)}})
return A.i($async$DT,v)},
v1(d){return this.bUW(d)},
bUW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$v1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bAu(),$async$v1)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hu(r,D.aE8,!0,"NgmyWorksheetProjectScan",x.N),$async$v1)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bAX(q),$async$v1)
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
break}p=C.fTh(s)
w=15
return A.b(C.Kt(t.a.c,p),$async$v1)
case 15:o=f
w=16
return A.b(t.vf(),$async$v1)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eL7)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DT(p)
case 1:return A.h(u,v)}})
return A.i($async$v1,v)},
N1(d){return this.bE7(d)},
bE7(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$N1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.c9(null,null,!0,null,new C.eDe(d),s,null,!0,!0,x.y),$async$N1)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ot(t.a.c,A.a([],x.D)),$async$N1)
case 6:w=7
return A.b(t.vf(),$async$N1)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eJo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$N1,v)},
ca0(d){var w=this.c
w.toString
A.bY(B.K,null,new C.eDn(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b2f(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jl
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bW,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bz,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bp,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uX,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
ZC(d,e){return this.c9P(d,e)},
c9P(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bY(B.K,null,new C.eDi(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$ZC)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hfz(r,new C.eDj(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.N3(d,e),$async$ZC)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZC,v)},
b_j(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aC
else t=h.a?B.aP:B.aA
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bp,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.AB,A.A(A.a([s,B.bf,t,A.W(B.eo,w?B.bq:B.bp,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af)},
cgC(d,e,f,g,h,i){return this.b_j(!1,d,e,f,g,h,i)},
N3(d,e){return this.bEh(d,e)},
bEh(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$N3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kW(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$N3)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzc(t.a.c,d.a),$async$N3)
case 6:w=7
return A.b(t.vf(),$async$N3)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$N3,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.N(d).ax.a===B.H,n=new C.tt(o),m=o?B.bV:B.iH
if(q.f)o=D.b2C
else{w=q.byM(n)
v=q.bU2(n)
u=q.gbvV()
if(o)t=B.jl
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aO,new C.EV(A.p(p,A.A(A.a([q.azg(N.Me,"Projects",n,D.a8i),q.azg(B.v7,"Cashier",n,D.aSM),q.azg(B.Fe,"Family Tree",n,D.fMd)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bu],r)
w=q.d
if(w===D.a8i){w=J.ac(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aA,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.avz(q.gaOh(),p)],r),B.m,p,B.e,B.j,0,p,p),B.az,q.cgE(n)],r))}else{o=q.a
if(w===D.aSM)u.push(new C.amS(o.c,n,p))
else{w=q.r
u.push(new C.anY(o.c,o.d,o.e,o.f,new C.eDA(q),new C.eDB(q),new A.cz(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.y,p,Ab.LA,p,p,B.ah)}return A.cb(p,m,A.bo(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
byM(d){var w=null,v=A.m(8),u=d.a,t=A.W(O.YZ,u?B.bq:B.bp,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kD,A.A(A.a([t,B.bo,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bp,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eDb(this),w,w,w,w,w,w,w)},
gbvV(){switch(this.d.a){case 0:return D.a7A
case 1:return D.fD1
case 2:return D.a7B}},
bU2(d){var w=null,v=A.m(15),u=A.a([new A.ad(0,B.G,B.aU.j(0.35),B.cx,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bIi,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bu6,A.aF(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bFR,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eDf(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.EV(A.p(w,A.v(A.a([new A.C(E.Xu,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.Af(this.gcvP()),w,w,w,w,w,w,D.f0o,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uW,B.j6,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aU,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.fD0,w)},
azg(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aU:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ad(0.5,B.G,B.aU.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bp
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bp
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.dg(u,A.A(A.a([w,B.eb,new A.dm(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.ba,B.j,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.n),B.ir,u,u,u,B.LD,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eDw(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),1)},
cgE(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dW:B.c
u=A.m(15)
t=A.p(p,D.bFW,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ad(2,B.G,B.aU.j(0.5),B.eT,28)],x.V),D.bRr,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.EV(A.p(p,A.v(A.a([t,B.d6,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bp,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e0,A.A(A.a([A.D(q.aPL(B.iO,"Scan QR",new C.eDq(q),d),1),B.aw,A.D(q.aPL(M.xX,"Upload file",new C.eDr(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.az,A.bJ(D.fpV,q.gaOh(),A.bk(B.aU,p,p,p,B.c,B.fL,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bqY,1.05,D.a7A,p)}w=J.b6(q.e,new C.eDs(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.EV(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a7A,p)},
aPL(d,e,f,g){var w=null,v=B.aU.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aU.j(0.45),B.r,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eZQ,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.afg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)},
cgD(d,e){var w,v,u=null,t=e.a,s=t?B.dW:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bW,B.r,1),p=A.a([new A.ad(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bp
n=A.bv(B.Uf,new A.fF(1.7777777777777777,C.aOw(!0,B.ft,1/0,N.Me,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.Af(d.gwv()),u,u,u,u,u,u,D.eXZ,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.bB,A.A(A.a([v,A.aH(u,u,u,u,A.W(Ac.MR,t?B.bq:B.bp,u,u,u,u),u,u,u,new C.eDo(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eDp(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvg.prototype={}
C.qJ.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcOx(){var w,v,u,t,s=this.c
if(s===B.k.jK(s))w=B.o.u(B.k.O(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lb.prototype={
gwv(){return B.d.cI(this.d,0,new C.ctF())},
ad(){var w=this,v=w.d,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.ctE(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
b98(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lb(w.a,w.b,v,u,w.e)},
b8Q(d){return this.b98(d,null)},
RQ(d){return this.b98(null,d)}}
C.GT.prototype={
a4(){return"FamilyGender."+this.b}}
C.hU.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.hbo(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aBT(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aje.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.ku.prototype={
gamW(){var w=this.f
return new A.a2(w,new C.bLp(),A.T(w).k("a2<1>")).gM(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.bLo(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hQV(w.y)],x.N,x.z)},
y9(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.ku(w.a,v,u,t,s,r,w.r,q,p,o)},
b97(d,e){var w=null
return this.y9(w,w,d,e,w,w,w,w)},
cEm(d,e,f,g,h,i,j){return this.y9(d,e,f,g,h,i,j,null)},
aBY(d,e){var w=null
return this.y9(w,w,w,d,w,w,e,w)},
cCR(d){var w=null
return this.y9(w,w,w,w,w,w,d,w)},
cDe(d){var w=null
return this.y9(w,w,w,w,w,w,w,d)},
aBK(d){var w=null
return this.y9(w,w,w,w,d,w,w,w)},
cDT(d,e,f){var w=null
return this.y9(w,d,w,e,w,w,f,w)},
cCE(d){var w=null
return this.y9(w,w,d,w,w,w,w,w)},
cDr(d,e){var w=null
return this.y9(d,w,w,w,w,e,w,w)}}
C.ctG.prototype={
a4(){return"WrapAlignment."+this.b}}
C.ctH.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFh.prototype={}
C.b6E.prototype={
bx(d){this.a=d.a
this.b=d.b},
dr(d){var w=new C.b6E()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b6D.prototype={
gvQ(){return!0},
gFm(){return this.z.b<this.b.length},
aRl(d){switch(0){case 0:return d.a.c}},
aR2(d){switch(0){case 0:return d.a.d}},
bNA(d,e){switch(0){case 0:return new A.hF(d,e)}},
bMZ(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fX(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iA(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GE(b4)
switch(0){case 0:v=b5.b
u=new A.kr(0,v,0,1/0)
t=w===B.Sh
break}s=A.a([],x.gZ)
r=A.V(x.cM,x.S)
for(b3=b1.z,q=B.d.fG(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fX(b4,u,!0)
f=b1.aRl(g)
f.toString
e=b1.aR2(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFh(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFh(k,j,i))}d=s.length
switch(0){case 0:q=b5.ct(new A.hF(m,l))
a0=q.a
a1=q.b
b1.a=new A.iA(0,0,a0,a1)
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
a8=b1.aRl(g)
e=b1.aR2(g)
e.toString
a9=b1.bMZ(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bNA(a6,a3+a9)
b0=g.a
g.a=new A.iA(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fU(d){var w,v,u,t,s,r=this
r.l1(d)
w=d.b
w.hW()
v=A.dl()
u=r.a
v.e2(u.a,u.b,0,1)
w.ow(0,v)
for(u=r.z,u=B.d.dn(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fU(d)
w.mY(0)},
FS(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hW(){return this.z}}
C.btw.prototype={}
var z=a.updateTypes(["ay<~>()","R(hU)","R(ku)","~()","R(n0)","a4<n,@>(ku)","G(ku,ku)","n(hU)","ku(a4<@,@>)","R(lb)","R(tY)","n0(a4<@,@>)","tY()","G(lb,lb)","hU(a4<@,@>)","a4<n,@>(hU)","R(qJ)","ay<~>(lb)","eN<n?>(hU)","G(hU,hU)","n?(hU)","a4<n,@>(n0)","YT(Y)","n(n)","abS(Y)","r(o4)","G(n0,n0)","hU(hU)","cK(bu<n,F7>)","cK(Jg)","~(hU)","G?(hU)","hU()","ak<hU>()","R(tX)","R(Jg)","C(hU)","~(GT)","R(ado)","r(GT,n,a0)","Yh(Y)","bu<n,ak<a4<n,@>>>(n,ak<n0>)","~(G)","+count,id,name(G,n,n)(ku)","ku(ku)","Zd(Y)","Ze(Y)","R(ls)","ls()","n(ku)","a_W(Y)","XS(Y)","XR(Y)","Yf(Y)","Yj(Y)","r(qJ)","acc(Y)","~(lP)","ay<~>([n?])","P(P,lb)","r(lb)","P(P,qJ)","a4<n,@>(qJ)","qJ(a4<@,@>)","XQ(Y)","RK(Y)","cn(GS)","lb(a4<@,@>)","tX()","n(lb)","a4<n,@>(lb)","n(S)","G(hU)","ku(a4<n,@>)","Xp(Y)"])
C.frk.prototype={
$1(d){return d.a+" "+d.b},
$S:122}
C.frj.prototype={
bi6(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qC(s,d,B.hj,E.EA),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.U(r!=null&&A.Kf(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bi6(d)},
$S:288}
C.frl.prototype={
$1(d){return d.b},
$S:122}
C.fAq.prototype={
$1(d){var w=null
return A.eE(w,B.K,new F.Ox(this.a,this.b,w),w,w,0,B.Xp,B.d_,w,w,w)},
$S:46}
C.fgM.prototype={
$1(d){return d!=null},
$S:203}
C.fgN.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:203}
C.fgS.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:160}
C.fp3.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f7(d,w,w,w,A.h1(w,B.ra,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.v2
return new A.nz(D.bmy,A.a8u(A.a([new A.fN(130,w,v),new A.yu(1,B.F7,A.f7(e,w,w,w,A.h1(w,g==null?D.e2S:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wU,B.le))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1887}
C.fp2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.v9(999)
f=A.wD(A.ln(h,A.f7("Cashier",h,h,h,A.h1(h,D.yP,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.ks(D.e2J,h,f,B.hA,h),h,h,D.bn0,h))
w=A.wD(A.f7("Debt receipt",h,h,h,A.h1(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wD(A.f7(C.wn(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6j,h))
u=A.v9(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f7(s,h,h,h,A.h1(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.f7("Person who owes",h,h,h,D.a6j,h)
q=A.v9(10)
p=x.C
u=A.ln(h,A.yp(A.a([s,new A.fN(h,2,h),r,new A.fN(h,10,h),A.ln(h,A.yp(A.a([A.f7("Amount owed",h,h,h,D.a6j,h),new A.fN(h,2,h),A.f7(A.Af(t.c),h,h,h,A.h1(h,D.yP,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qz,B.le),h,new A.ks(B.oH,h,q,B.hA,h),h,h,D.bme,1/0)],p),B.qz,B.le),h,new A.ks(E.aFn,h,u,B.hA,h),h,h,D.bo4,1/0)
q=new A.nh(D.e2M,0.9,B.ku)
r=A.v9(12)
s=i.c
o=s.$2("Original due",C.wn(t.r,!1))
n=s.$2("Current due",C.wn(t.f,!1))
m=i.d
l=new A.nh(m,1.1,B.ku)
k=A.v9(8)
j=i.a
k=A.a([o,n,new A.fN(h,6,h),A.ln(h,A.wD(A.f7(t.gaIF(),h,h,h,A.h1(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.ks(h,new A.pk(l,l,l,l),k,B.hA,h),h,h,D.bn8,1/0),new A.fN(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yP))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yP))
else{n=A.f7("Missed days ("+n+")",h,h,h,A.h1(h,B.ra,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Rj>")
o=A.B(new A.J(o,new C.fp1(),m),m.k("aj.E"))
B.d.v(k,A.a([new A.fN(h,4,h),n,new A.fN(h,6,h),new C.b6D(5,5,new C.b6E(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fN(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fN(h,8,h),w,new A.fN(h,3,h),v,new A.fN(h,16,h),u,new A.fN(h,10,h),A.ln(h,A.yp(k,B.wU,B.le),h,new A.ks(h,new A.pk(q,q,q,q),r,B.hA,h),h,h,B.afq,1/0)],p)
w=j.a
if(w!=null){v=new A.nh(B.HA,1,B.ku)
B.d.v(f,A.a([new A.fN(h,16,h),A.f7("Debtor signature",h,h,h,A.h1(h,B.ra,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fN(h,6,h),A.ln(h,new A.H6(w,B.Up,h,h),h,new A.ks(h,new A.pk(v,v,v,v),A.v9(6),B.hA,h),82,h,B.LF,1/0)],p))}f.push(new A.fN(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f7(w,h,h,h,D.eR1,h))
f.push(new A.fN(h,18,h))
f.push(A.wD(A.f7("NGMY.ORG",h,h,h,A.h1(h,D.yP,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:369}
C.fp1.prototype={
$1(d){var w=null,v=new A.nh(D.HB,0.7,B.ku),u=A.v9(999)
return A.ln(w,A.f7(C.wn(d,!1),w,w,w,A.h1(w,D.HB,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.ks(w,new A.pk(v,v,v,v),u,B.hA,w),w,w,D.bsi,w)},
$S:1888}
C.c_a.prototype={
$1(d){var w=null,v=B.bL.j(0.08),u=A.m(999),t=A.I(B.bL.j(0.28),B.r,1)
return A.p(w,A.d(C.wn(d,!1),w,w,w,w,w,w,D.eXu,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1889}
C.fAW.prototype={
$1(d){var w=null,v=A.aI(d,B.bS,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bJa,w,w,w,new C.fAT(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.K,new A.cU(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.C(B.Xd,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dm(1,B.ci,A.cd(A.v(A.a([new A.et(new C.aWN(r,w),s),B.S,A.A(A.a([A.D(A.ez(B.y7,D.fml,new C.fAU(s,r,d),A.de(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f3,w,new A.b7(A.m(14),B.Y),new A.aA(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dq(B.a_w,D.fj5,new C.fAV(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.f3,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aA,0,w,w,w,w,w,B.af),w),w,w,0,Ag.XC,B.d_,w,w,w)},
$S:46}
C.fAT.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fAU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m2(2.5),$async$$0)
case 4:w=3
return A.b(e.hl(B.fS),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dF.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rC(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fAV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fvE(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fAO.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eE(w,B.aA,A.v(A.a([new A.C(D.bnT,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.nc,w,w,w),1),A.aH(w,w,w,w,B.lb,w,w,w,new C.fAM(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.ci,new A.C(B.h4,A.bv(A.m(14),A.fK(t,B.A,w,w,B.cn,B.dt,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Lj,new A.a6(1/0,w,A.dq(B.oy,D.aOV,new C.fAN(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.Lv,B.d_,w,new A.b7(v,B.Y),w)},
$S:46}
C.fAM.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fAN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rC(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fB_.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.aA,new A.C(D.bo0,A.v(A.a([A.A(A.a([D.btj,A.aH(w,w,w,w,B.lb,w,w,w,new C.fAY(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.et(A.bv(A.m(14),A.p(w,A.b3(w,w,w,new C.b8N(s.ax,w),B.at),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a6(1/0,w,A.dq(B.oy,D.aOV,new C.fAZ(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d_,w,new A.b7(v,B.Y),w)},
$S:46}
C.fAY.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fAZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m2(2.5),$async$$0)
case 4:w=3
return A.b(e.hl(B.fS),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fa(B.dF.gaP(s))
w=5
return A.b(A.rC(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fk8.prototype={
$1(d){return d.a===this.a},
$S:264}
C.dCA.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dCl.prototype={
bhk(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dW:B.c
s=u.a
w=2
return A.b(A.bY(t,null,new C.dCo(s,q,e),p,!0,!0,!1,B.HQ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dCp(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bhk(d,e)},
$S:1890}
C.dCo.prototype={
$1(d){var w,v=null,u=this.c===B.vB,t=u?D.d5r:D.d1S
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aA,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bo(!0,new A.C(L.ag_,A.v(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bp,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ib(!0,v,v,B.y,K.aM7,new C.dCn(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:29}
C.dCn.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bp).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aWM(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dCm(t.d,r),s,s,s,s,s,s,s)},
$S:179}
C.dCm.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.dCp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dCj.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:92}
C.dCk.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.cp,e,v)
return new A.cX(e,!1,A.ig(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e5(new C.dCi(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.af),v,v,v),v,new A.bf(t,new A.bm(0.96,1,u),u.k("bf<bH.T>"))),v)},
$S:30}
C.dCi.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bS,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dW:B.c,f=A.m(14),e=A.I((h?B.bq:B.bp).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aK(!1,v,!0,new A.C(B.en,A.W(B.cw,i.a.d.a?B.bq:B.bp,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dC3(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aQh("Name")
r=l.a
q=r.d==null?k:new C.dC4(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bn:B.lv
n=A.I(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.T,h,k,!0,B.q,k,A.aM(),w,k,k,k,k,k,2,s.b90(new A.C(B.fw,A.aK(!1,p,!0,A.p(B.A,C.aWM(m==null?"\ud83d\udc64":A.fpS(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cj,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ko,k,B.a61,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ao,A.A(A.a([A.D(i.aQT("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dC5(r,a0),r.d===B.vB),1),B.ab,A.D(i.aQT("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dCa(r,a0),r.d===B.a3_),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hc(D.bHz,D.fkO,new C.dCb(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u0(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.f,k,k,k,k,k,2,i.aQi("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bp).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wn(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bz,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bEr],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCc(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.af))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.r,k,k,k,k,k,2,i.aQh("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aYE(r.b.length!==0,B.mb,new C.dCd(r,i,a0),new C.dCe(r,a0),"Upload from gallery","ID photo"))
v.push(i.aYE(r.c.length!==0,D.bxO,new C.dCf(r,i,d,a0),new C.dCg(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ae.a6q("Signature (optional)",t,new C.dCh(a0),new C.dC6(a0,t),new C.dC7(d,t,a0),k))
v.push(B.az)
i=i.a.d.a
t=i?B.bq:B.bp
s=(i?B.bq:B.bp).j(0.28)
s=A.D(A.dW(E.aOO,new C.dC8(d),A.de(k,k,k,k,k,k,k,k,k,t,k,k,B.uR,k,new A.b7(A.m(10),B.Y),new A.aA(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.uR,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uf,k,k,k),new C.dC9(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.v_,B.j6,k,k,360)},
$S:174}
C.dC3.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dC4.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dC5.prototype={
$0(){return this.b.$1(new C.dC2(this.a))},
$S:0}
C.dC2.prototype={
$0(){var w=this.a
w.d=B.vB
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCa.prototype={
$0(){return this.b.$1(new C.dC1(this.a))},
$S:0}
C.dC1.prototype={
$0(){var w=this.a
w.d=B.a3_
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCb.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wr(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dC0(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dC0.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gcf(),w.gcc(),w.gcs(),0,0,0,0,0)},
$S:0}
C.dCd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Oy(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dC_(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dC_.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dCe.prototype={
$0(){return this.b.$1(new C.dBZ(this.a))},
$S:0}
C.dBZ.prototype={
$0(){return this.a.b=""},
$S:0}
C.dCf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dW:B.c
w=3
return A.b(A.bY(q,null,new C.dBX(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Oy(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dBY(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBX.prototype={
$1(d){var w=null
return A.bo(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.al6,w,w,w,w,new C.dBR(d),!1,w,w,w,w,w,w,w,D.fbC,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.al4,w,w,w,w,new C.dBS(d),!1,w,w,w,w,w,w,w,D.fia,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:29}
C.dBR.prototype={
$0(){A.a5(this.a,!1).N("camera")
return null},
$S:0}
C.dBS.prototype={
$0(){A.a5(this.a,!1).N("gallery")
return null},
$S:0}
C.dBY.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dCg.prototype={
$0(){return this.b.$1(new C.dBW(this.a))},
$S:0}
C.dBW.prototype={
$0(){return this.a.c=""},
$S:0}
C.dCh.prototype={
$0(){return this.a.$1(new C.dBV())},
$S:0}
C.dBV.prototype={
$0(){},
$S:0}
C.dC6.prototype={
$0(){return this.a.$1(new C.dBU(this.b))},
$S:0}
C.dBU.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dC7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agi(u.a,null,null,new C.dBT(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBT.prototype={
$4(d,e,f,g){this.a.$1(new C.dBQ(this.b,d))},
$S:346}
C.dBQ.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dC8.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dC9.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eMZ)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eJV)
return}A.a5(w.c,!1).N(!0)},
$S:0}
C.dCD.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:92}
C.dCE.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dW:B.c,n=A.m(14),m=A.I((p?B.bq:B.bp).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Af(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bp,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yz(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yz(r).length>0?B.bL:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bp
t=(q?B.bq:B.bp).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.az,A.A(A.a([A.D(A.dW(B.nd,new C.dCB(d),A.de(r,r,r,r,r,r,r,r,r,w,r,r,B.jp,r,new A.b7(A.m(10),B.Y),new A.aA(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fiz,new C.dCC(d),A.bk(B.cY,r,r,r,B.c,r,B.jp,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AE,E.Xu,r,r,300),B.f,B.K,0,r,r,r,r,r,B.af),r,r,r),r)},
$S:30}
C.dCB.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCC.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dCx.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dCy(r),p=r.a.d.a,o=p?B.dW:B.c,n=A.m(14),m=A.I((p?B.bq:B.bp).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aA,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Af(l.c),s,s,s,s,s,s,D.eYX,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iw((r.a.d.a?B.bq:B.bp).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Zj,"View receipt",new C.dCq(r,d,l))
u=l.x!=null
t=u?B.qR:B.pt
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bnY,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dCr(r,d,l)),q.$3$icon$label$onTap(B.AV,"Edit",new C.dCs(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mb,"View / download ID",new C.dCt(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bxN,"View / download selfie",new C.dCu(r,d,l)))
if(l.gaDz())p.push(q.$3$icon$label$onTap(A2.a_n,"View / download signature",new C.dCv(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bL,B.e4,"Delete",new C.dCw(r,d,l)))
p.push(B.au)
return A.bo(!0,new A.C(B.uW,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:29}
C.dCy.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aA
else w=d
return A.aK(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1891}
C.dCq.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fAS(w,this.c)},
$S:0}
C.dCr.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Rb(this.c)},
$S:0}
C.dCs.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Cy(this.c)},
$S:0}
C.dCt.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBk(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dCu.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBk(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dCv.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fAX(w,this.c)},
$S:0}
C.dCw.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Ne(0,this.c)},
$S:0}
C.dCF.prototype={
$1(d){return d.x==null},
$S:264}
C.dCG.prototype={
$1(d){return d.x!=null},
$S:264}
C.dCH.prototype={
$2(d,e){return d+e.c},
$S:1892}
C.dCI.prototype={
$0(){return this.a.bwo()},
$S:0}
C.dCz.prototype={
$0(){return this.a.adn(this.b)},
$S:0}
C.fkD.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fkE.prototype={
$0(){return B.d.gL(D.a0z)},
$S:z+68}
C.d2s.prototype={
$0(){var w=this.a
return w.m(new C.d2q(w,this.b))},
$S:0}
C.d2q.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d2r.prototype={
$0(){},
$S:0}
C.d2t.prototype={
$0(){var w=this.a.gbUK()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.fmB.prototype={
$1(d){return C.fXk(A.a1(d,x.N,x.z))},
$S:z+11}
C.fmC.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fmD.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fzw.prototype={
$1(d){return d.ad()},
$S:z+21}
C.fHz.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fk_.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bLk.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eY(e,v)?v:null},
$S:1893}
C.fA4.prototype={
$1(d){var w=this
return new C.Yh(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d37.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d36(w,d))},
$S:z+66}
C.d36.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2W.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cw(u)?v.r>=J.ac(v.d):w)v.r=J.ac(v.d)-1},
$S:0}
C.d2T.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d2u.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d2v.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d2X.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d2D.prototype={
$1(d){var w=null,v=A.N(d).ax.a===B.H,u=v?B.dW:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.d2B(d),w,w),A.bJ(B.vY,new C.d2C(d),A.bk(B.mD,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d2B.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d2C.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d2E.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d2U.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d2V.prototype={
$0(){return B.d.gL(D.yh)},
$S:z+12}
C.d2z.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxP(0),t=J.ac(w.d)
w=J.ac(w.d)===1?"page":"pages"
return new C.RK(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d2A.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2F.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.XQ(v,u,J.ac(w.d),null)},
$S:z+64}
C.d2G.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d35.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Xy(r.y,r.gxP(0),J.ac(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d33(r),s,s,s,s,s,s,!1,B.a9)
else{w=e-1
v=J.q(r.d,w)
J.ac(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8b(v,e,w,u,t,r.gbM5(),C.hbn(r.y.Q),r.gxP(0),s)
w=t}return A.c6(q,new C.d34(r,e),new A.C(B.Xv,w,s))},
$S:1894}
C.d34.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcZ(t).ay){t=this.b
u=x.cy.a(B.d.gcZ(u.f.f)).guj(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dl()
t=u.a
t.$flags&2&&A.ai(t)
t[11]=0.0013
u.ft(v*3.141592653589793*0.5)
return A.fr(B.a3,A.dc(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d33.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aED(B.ph,B.is)},
$S:0}
C.d2Q.prototype={
$0(){var w=this.a
return w.m(new C.d2P(w))},
$S:0}
C.d2P.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d2R.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).N(null)
return null},
$S:0}
C.d2w.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jG.j(0.5),r=x.p,q=A.a([D.fag,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.XO(d,B.dV,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.XO(d,K.aiX,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cw(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cG,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cG,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.XO(d,Z.ak7,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.XO(d,B.pA,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.XO(d,B.pA,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eE(u,E.A8,A.bo(!0,new A.C(A1.Az,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.agp,B.d_,u,new A.b7(t,new A.aA(s,1.4,B.r,-1)),u)},
$S:46}
C.d2S.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.d2J.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cw(w.d)
return new C.Yj(v,J.cw(w.d),w.r+1,null)},
$S:z+54}
C.d2K.prototype={
$1(d){var w=null
return A.oa(!1,A.eh(w,w,w,E.A8,new A.k9(this.a,new C.d2I(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:285}
C.d2I.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5I,B.nX,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:680}
C.d2L.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d2M.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d2N.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2O.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ao(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QB(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d2H(s,t))
w=4
return A.b(s.kG(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2H.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2Z.prototype={
$1(d){var w=null
return A.oa(!1,A.eh(w,w,w,E.A8,new A.k9(this.a,new C.d2Y(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:285}
C.d2Y.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5I,B.nX,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:680}
C.d3_.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d30.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d31.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d32.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Ao(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kG(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2x.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bet(B.ph,T.L7)},
$S:0}
C.d2y.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aED(B.ph,T.L7)},
$S:0}
C.d4S.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d4T.prototype={
$1(d){var w=this.a
return w.m(new C.d4R(w))},
$S:9}
C.d4R.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d4U.prototype={
$1(d){var w=this.a
return w.m(new C.d4Q(w))},
$S:9}
C.d4Q.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d4V.prototype={
$1(d){var w=this.a
return w.m(new C.d4P(w))},
$S:9}
C.d4P.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d4W.prototype={
$0(){var w=this.a
return w.m(new C.d4O(w,this.b))},
$S:0}
C.d4O.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d4X.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0q()
A.a5(this.b,!1).N(new A.bmD(w,v))},
$S:0}
C.d3m.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d3l.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Yf(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d3q.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d3p.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b4L(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hz,v,v,v)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.d3n(d),v,v),A.bJ(B.vY,new C.d3o(d),A.bk(B.mD,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.A8,w,v,v,v,v,D.f9b,v)},
$S:19}
C.d3n.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d3o.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d3r.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d3s.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cd(A.c3(B.bE,r,B.bw,18,14),B.q,t,B.y,t,D.boT,t,t,B.ah)},
$S:337}
C.d3k.prototype={
$0(){return this.a.Pb(0,this.b)},
$S:0}
C.d3j.prototype={
$0(){return this.a.OG(0,this.b)},
$S:0}
C.cCq.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cCr.prototype={
$0(){return B.d.gL(D.yh)},
$S:z+12}
C.cCs.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.bX(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1896}
C.cVS.prototype={
$1(d){return this.a.m(new C.cVR(this.b,this.c))},
$S:9}
C.cVR.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cWg.prototype={
$1(d){return this.a.m(new C.cW3())},
$S:2}
C.cW3.prototype={
$0(){},
$S:0}
C.cWh.prototype={
$1(d){return this.a.m(new C.cW2())},
$S:2}
C.cW2.prototype={
$0(){},
$S:0}
C.cWi.prototype={
$0(){var w=this.a
return w.m(new C.cW1(w,this.b))},
$S:0}
C.cW1.prototype={
$0(){var w=this.a
return w.d=w.gnI().F2(this.b.a)},
$S:0}
C.cWj.prototype={
$0(){var w=this.a
return w.m(new C.cW0(w,this.b))},
$S:0}
C.cW0.prototype={
$0(){var w=this.a
return w.d=w.gnI().cCa(this.b)},
$S:0}
C.cWk.prototype={
$1(d){return this.a.m(new C.cW_())},
$S:2}
C.cW_.prototype={
$0(){},
$S:0}
C.cWl.prototype={
$0(){var w=this.a
return w.m(new C.cVZ(w,this.b))},
$S:0}
C.cVZ.prototype={
$0(){var w=this.a
return w.d=w.gnI().cCf(this.b.a)},
$S:0}
C.cWm.prototype={
$1(d){var w=this.a
return w.m(new C.cWb(w,d))},
$S:6}
C.cWb.prototype={
$0(){var w=this.a
return w.d=w.gnI().cD9(this.b)},
$S:0}
C.cWn.prototype={
$1(d){var w=this.a
return w.d=w.gnI().aBN(d)},
$S:2}
C.cWo.prototype={
$1(d){var w=this.a
return w.d=w.gnI().cCi(d)},
$S:2}
C.cWq.prototype={
$1(d){var w=this.a
return w.d=w.gnI().cD7(d)},
$S:2}
C.cWr.prototype={
$1(d){var w=this.a
return w.m(new C.cWa(w,d))},
$S:9}
C.cWa.prototype={
$0(){var w=this.a
return w.d=w.gnI().cCZ(this.b)},
$S:0}
C.cWs.prototype={
$0(){var w=this.a,v=w.gnI(),u=B.a.i(w.gxP(0).a.a),t=B.a.i(w.gaz4().a.a)
u=v.b9h(B.a.i(w.gap2().a.a),t,u)
A.a5(this.b,!1).N(u)
return null},
$S:0}
C.dQb.prototype={
$0(){var w=this.a
w.vr()
w.a.bp()
w.a.pp()},
$S:0}
C.dQa.prototype={
$0(){var w=this.a
w.vr()
w.a.bp()
w.a.pp()},
$S:0}
C.dQd.prototype={
$0(){var w=this,v=w.b
if(J.cw(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dQe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQf.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dQ9.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dQh.prototype={
$0(){this.a.NK()
return null},
$S:0}
C.dQg.prototype={
$0(){return this.a.DU(this.b)},
$S:0}
C.dPC.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dd,w,w,!0,w,w,new C.dPA(d),w,w),r=A.bk(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dPB(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dPA.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPB.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cCE(this.b)},
$S:0}
C.dPx.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aQx(w.b,w.c,w.d)},
$S:8}
C.dP5.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dP6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.FQ(t.a.c),$async$$0)
case 2:s=r.qZ(q.dH(e,new C.dPi(t)))
if(s!=null&&t.c!=null)t.m(new C.dPj(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPi.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPl.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPw.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cDr(C.hbx(w),w)},
$S:0}
C.dPu.prototype={
$1(d){return new A.e5(new C.dPt(this.a,this.b),null)},
$S:20}
C.dPt.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dW:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.akL,v,v,v,p>0?new C.dPp(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.alj,v,v,v,new C.dPq(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dPr(d),v,v),A.bJ(B.oT,new C.dPs(d),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:156}
C.dPp.prototype={
$0(){return this.b.$1(new C.dPo(this.a))},
$S:0}
C.dPo.prototype={
$0(){return--this.a.a},
$S:0}
C.dPq.prototype={
$0(){return this.b.$1(new C.dPn(this.a))},
$S:0}
C.dPn.prototype={
$0(){return++this.a.a},
$S:0}
C.dPr.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPs.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPv.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cDe(this.a.a)
w.r.a8(0)},
$S:0}
C.dOU.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agp(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h5k(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dOV.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aBK(w)},
$S:0}
C.dPF.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.abS(this.b,w,this.c,null)},
$S:z+24}
C.dPz.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dW:B.c,t=A.m(20),s=A.W(B.l7,B.aU,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(D.fjE,new C.dPy(d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dPy.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dOW.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dOX.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dOY.prototype={
$1(d){return d.a},
$S:z+7}
C.dOZ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aBK(w)},
$S:0}
C.dP2.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agp(q)
w=A.T(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dP0(r),w),w.k("H.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h5k(v.e,null,r,v.f,v.r,new C.dP1(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dP1.prototype={
$0(){return this.a.a8z(this.b)},
$S:0}
C.dP0.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dP3.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hU>")
w=A.B(new A.J(w,new C.dP_(this.b),v),v.k("aj.E"))
u.d=t.aBK(w)},
$S:0}
C.dP_.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dPE.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dPf.prototype={
$1(d){return d.length!==0},
$S:3}
C.dPg.prototype={
$1(d){var w=this
return new A.e5(new C.dPe(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dPe.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dW:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dPa(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.T,!1,v,!0,B.q,v,A.aM(),u,v,v,v,v,v,2,A.bq(v,new A.b4(4,A.m(12),B.df),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lQ,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dPb(d),v,v),A.bJ(B.IF,new C.dPc(t,u,o,e),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.f7q,new C.dPd(t,u,o,d),A.bk(B.aU,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:156}
C.dPa.prototype={
$1(d){var w=null
return A.dN(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bL5,w,w,w,new C.dP9(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1897}
C.dP9.prototype={
$0(){return this.a.$1(new C.dP7(this.b,this.c))},
$S:0}
C.dP7.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dPb.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPc.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dP8(w.c,u))
v.bM(0,B.c3)}},
$S:0}
C.dP8.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dPd.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).N(!0)},
$S:0}
C.dPh.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cDT(this.b,D.tm,C.FO(v,w.a.c))},
$S:0}
C.dPM.prototype={
$1(d){return d.as},
$S:z+1}
C.dPN.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.dPO.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i_a(v)
return w.UN(v==null?null:v.a)},
$S:0}
C.dPP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hCJ(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aP(1/0,e.a,e.b)
s=A.aP(1/0,e.c,e.d)
l.cmi(new A.at(u,t),v.gbfj(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cIX:D.cHp
q=A.I(s?B.dq:D.b7S,B.r,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bbw(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.W,m,B.aa,B.q,A.a([o,A.bZ(0,A.ua(new A.Q(n,n,n,n),new A.a6(u,t,new C.bco(l.d,v,l.f,w,new C.dPI(l),l.gc6w(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.btD(s,new C.dPJ(l,e),new C.dPK(l,e),new C.dPL(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.b0,B.b6,B.x,r,m,m),B.n),m,m,m,P.afu,m,m,m,m)},
$S:214}
C.dPI.prototype={
$1(d){var w=this.a
w.m(new C.dPG(w,d))},
$S:2}
C.dPG.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dPJ.prototype={
$0(){var w=this.b
return this.a.b6Z(1.25,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dPK.prototype={
$0(){var w=this.b
return this.a.b6Z(0.8,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dPL.prototype={
$0(){var w=this,v=w.b
return w.a.aQx(new A.at(A.aP(1/0,v.a,v.b),A.aP(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbfj())},
$S:0}
C.dPQ.prototype={
$0(){var w=this.a
return w.m(new C.dPH(w))},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dP4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fA(s.c)),$async$$0)
case 2:t.xj("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3w.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bg5(u,C.hfC(v.c,u),new C.d3v(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d3v.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d3x.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjq(d.d,d.c,u.f.t(0,d.a),new C.d3u(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d3u.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fkH.prototype={
$1(d){var w,v=d.e
if(this.a.ag(0,v))return v
v=this.b
w=A.T(v)
return A.qZ(new A.cQ(new A.a2(v,new C.fkI(d),w.k("a2<1>")),new C.fkJ(),w.k("cQ<1,n>")))},
$S:z+20}
C.fkI.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fkJ.prototype={
$1(d){return d.a},
$S:z+7}
C.fkF.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fkG.prototype={
$1(d){return d.b},
$S:z+7}
C.fkM.prototype={
$1(d){var w,v=d.e
if(this.a.ag(0,v))return v
v=this.b
w=A.T(v)
return A.qZ(new A.cQ(new A.a2(v,new C.fkN(d),w.k("a2<1>")),new C.fkO(),w.k("cQ<1,n>")))},
$S:z+20}
C.fkN.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fkO.prototype={
$1(d){return d.a},
$S:z+7}
C.fkK.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ag(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fkL.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d3z.prototype={
$0(){return this.a},
$S:z+32}
C.d3Q.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ag(0,d)},
$S:253}
C.d3I.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d3J()),v=J.a8(w)
if(!v.t(w,e))v.J(w,e)},
$S:118}
C.d3J.prototype={
$0(){return A.a([],x.s)},
$S:679}
C.d3H.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eY(w,e)
return w===!0},
$S:324}
C.d3A.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d3G.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d3F.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.BC:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.BC:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1899}
C.d3B.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d3K.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.T:u)
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
t=J.aW(t==null?D.BC:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b8(w,new C.d3L(r)))w.push(r)}}B.d.bn(w,new C.d3M(a8))
B.d.b1(w,new C.d3N())
q=C.hCI(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.epo],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gL(k)+B.d.gam(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bmn(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1900}
C.d3L.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d3M.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d3N.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d3O.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.qd)+88-w.gL(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:514}
C.d3P.prototype={
$1(d){return 16+d*156},
$S:255}
C.d3y.prototype={
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
t.n(0,d,new C.F7(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.F7(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.F7(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jg(d,new A.u(e+t,w),s,s.length))}},
$S:193}
C.d3C.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHh(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:118}
C.d3D.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d3E.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:629}
C.d3R.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:629}
C.d3S.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:354}
C.d3T.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:182}
C.d3U.prototype={
$1(d){return d>=0.5},
$S:136}
C.f3A.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.ho(A.aK(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1902}
C.eFU.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.C(B.nD,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eUJ,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LE,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFT(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eFT.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.djH.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.djG.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.na,B.L,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.djE(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m2,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.djF(d),w,w)],x.p),B.ba,B.EG,w,u,D.bq8,w,D.bs3,new A.b7(v,B.Y),w,w)},
$S:19}
C.djE.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.djF.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.djQ.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.djR.prototype={
$1(d){var w=this.a
return w.m(new C.djP(w,d))},
$S:z+37}
C.djP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djS.prototype={
$1(d){var w=null
return A.q4(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.djV.prototype={
$1(d){var w=this.a
return w.m(new C.djO(w,d))},
$S:33}
C.djO.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.djU.prototype={
$1(d){var w=null
return A.q4(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.djW.prototype={
$1(d){var w=this.a
return w.m(new C.djN(w,d))},
$S:33}
C.djN.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.djX.prototype={
$0(){var w=this.a
return w.m(new C.djM(w))},
$S:0}
C.djM.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.djY.prototype={
$0(){var w=this.a
return w.m(new C.djL(w))},
$S:0}
C.djL.prototype={
$0(){return++this.a.at},
$S:0}
C.djZ.prototype={
$0(){var w=this.a
return w.m(new C.djK(w))},
$S:0}
C.djK.prototype={
$0(){return--this.a.ax},
$S:0}
C.dk_.prototype={
$0(){var w=this.a
return w.m(new C.djJ(w))},
$S:0}
C.djJ.prototype={
$0(){return++this.a.ax},
$S:0}
C.dk0.prototype={
$1(d){var w=this.a
return w.m(new C.djI(w,d))},
$S:9}
C.djI.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.djT.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dk1.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dW:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.dZ:B.bW).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bq:B.bp
t=A.W(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bq:B.bp
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.dg(r,A.v(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jp,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dk2(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
$S:z+39}
C.dk2.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dkb.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.c5I.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c5P.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c5Q.prototype={
$2(d,e){var w=J.b6(e,new C.c5O(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c5O.prototype={
$1(d){return d.ad()},
$S:z+21}
C.c5K.prototype={
$1(d){return C.ajf(A.a1(d,x.N,x.z))},
$S:z+8}
C.c5L.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c5M.prototype={
$1(d){return C.fXk(A.a1(d,x.N,x.z))},
$S:z+11}
C.c5N.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c5U.prototype={
$1(d){return new A.aEn(d.f.length,d.a,d.b)},
$S:z+43}
C.c5V.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:757}
C.c5R.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c5S.prototype={
$1(d){return d.cCR(C.FO(d,this.a))},
$S:z+44}
C.dPZ.prototype={
$1(d){return C.tF(d,this.a.a.c)},
$S:z+2}
C.dQ_.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dQ3.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dQ4.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dPW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYf(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xQ("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oT(r.c,r.e),$async$$0)
case 4:s.xQ(p)
w=5
return A.b(s.IT(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYf(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xQ("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oT(r.c,r.e),$async$$0)
case 4:s.xQ(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.U4(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xQ("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xQ("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xQ("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.IT(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a9(j)
o=r.a
if(o.c==null){w=1
break}o.xQ(B.a.e7(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYe(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xQ("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).ci(A.em(new C.dQ1(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oT(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQ1.prototype={
$1(d){var w=this.b
return new C.Zd(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dQ0.prototype={
$1(d){return D.fH_},
$S:z+46}
C.dQ6.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQ7.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dQ5(w,d)
return new A.C(B.db,new C.bcs(this.b,d.c,d.a,w,null),null)},
$S:1903}
C.dQ5.prototype={
$0(){return this.a.Wu(this.b.b)},
$S:0}
C.dPR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPS.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dPT.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dPU.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dPV.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQ8.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.ds(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:187}
C.dBI.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dBJ.prototype={
$0(){return B.d.gL(D.a1V)},
$S:z+48}
C.dBK.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cOW,44),w,w,w),w,w,new C.bhd(u,t,v,w),B.at)},
$S:67}
C.fAx.prototype={
$1(d){return A.oD(new C.fAw(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:132}
C.fAw.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dW:B.c,p=A.a([new A.ad(0,B.G,B.w.j(r?0.35:0.08),B.r9,24)],x.V),o=r?B.dZ:B.bW
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aU.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bFG,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a7(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aA,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.agt,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bp,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ib(!0,t,e,B.y,D.eI7,new C.fAv(this.b,s),20,B.ag3,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kt,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:110}
C.fAv.prototype={
$2(d,e){var w=null,v=D.a1V[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bW,B.r,1),q=A.a([new A.ad(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a54(v.a,!0,w),1),n=s?B.jl:B.iK,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aA,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ex(A.bv(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l3,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fAu(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)},
$S:76}
C.fAu.prototype={
$0(){A.a5(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cdn.prototype={
$0(){return this.a.aeq(this.b)},
$S:0}
C.fzU.prototype={
$1(d){return D.fDj},
$S:z+74}
C.fHl.prototype={
$1(d){var w=this
return new C.a_W(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fzZ.prototype={
$1(d){return new C.XS(this.a,null)},
$S:z+51}
C.fzY.prototype={
$1(d){return D.fEi},
$S:z+52}
C.cWE.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cWD(w,d))},
$S:33}
C.cWD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWG.prototype={
$1(d){return this.a.Js()},
$S:2}
C.cWH.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWA.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWB.prototype={
$1(d){return this.a.Js()},
$S:2}
C.cWC.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cud.prototype={
$0(){},
$S:0}
C.cuj.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuk.prototype={
$0(){return this.a.aM6(-1)},
$S:0}
C.cul.prototype={
$1(d){return this.a.m(new C.cui())},
$S:2}
C.cui.prototype={
$0(){},
$S:0}
C.cum.prototype={
$0(){return this.a.aM6(1)},
$S:0}
C.cun.prototype={
$1(d){return this.a.m(new C.cuh())},
$S:2}
C.cuh.prototype={
$0(){},
$S:0}
C.cuo.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aU.j(0.2)
if(s)v=B.aU
else v=this.b.a?B.dZ:B.bW
return A.u_(u,u,B.aZ,r,u,new C.cug(t,d),B.AF,s,w,u,new A.aA(v,1,B.r,-1),B.c7)},
$S:1904}
C.cug.prototype={
$1(d){var w=this.a
return w.m(new C.cue(w,this.b))},
$S:9}
C.cue.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cup.prototype={
$1(d){return this.a.m(new C.cuf())},
$S:2}
C.cuf.prototype={
$0(){},
$S:0}
C.cuq.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f32.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).N(w)},
$S:2}
C.f33.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f34.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).N(w)},
$S:0}
C.f30.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbvy()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.bs2,new A.et(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bts(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:67}
C.f31.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dI.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aU,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aU],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ex(D.e0L,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d8(-1.2+t,-0.5),new A.d8(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
$S:130}
C.fyF.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:68}
C.eD3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eCV.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eCW.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eD1.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e5(new C.eD0(w,this.b),null)},
$S:20}
C.eD0.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dW:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.C(B.agn,A.v(A.a([s,B.ao,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h28(new C.eCY(r,e),r.a),B.az,A.A(A.a([A.D(A.dW(B.dd,new C.eCZ(d),w),1),B.aw,A.D(A.bJ(B.SX,new C.eD_(r,d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d_,w,new A.b7(t,B.Y),w)},
$S:97}
C.eCY.prototype={
$1(d){return this.b.$1(new C.eCX(this.a,d))},
$S:33}
C.eCX.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eCZ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eD_.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.eD2.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.RQ(this.b)},
$S:0}
C.eCQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b8Q(w)},
$S:0}
C.eCU.prototype={
$1(d){return this.bhN(d)},
bhN(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Kt(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iK(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eCT.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eCS(this.b),v),v.k("H.E"))
u.d=t.b8Q(w)},
$S:0}
C.eCS.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eD4.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.eD5.prototype={
$1(d){return this.a.bzA(d,this.b)},
$S:z+55}
C.eCR.prototype={
$0(){return this.a.a8y(this.b)},
$S:0}
C.fHd.prototype={
$1(d){return new C.acc(this.a,this.b,this.c,null)},
$S:z+56}
C.eD7.prototype={
$0(){return this.a.Z6(this.b)},
$S:0}
C.eD8.prototype={
$0(){return this.a.P7(this.b)},
$S:0}
C.eD9.prototype={
$0(){return this.a.DP(this.b)},
$S:0}
C.eDa.prototype={
$0(){return this.a.Z7(this.b)},
$S:0}
C.eD6.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eCL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eCM.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eCN.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eCP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eCO(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eCO.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eDx.prototype={
$2(d,e){return d+e.gwv()},
$S:z+59}
C.eDt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDu.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eDe.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dW:B.c,s=A.m(24),r=A.p(v,D.bG5,B.f,v,v,new A.o(B.aC.j(u?0.18:0.08),v,A.I(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aA
u=u?B.dZ:B.bW
w=x.p
return A.eE(v,t,new A.C(B.xg,A.v(A.a([r,B.aO,q,B.P,p,B.d6,A.A(A.a([A.D(A.dW(B.nd,new C.eDc(d),A.de(v,v,v,v,v,v,v,v,v,o,v,v,B.f3,v,new A.b7(A.m(14),B.Y),new A.aA(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.fne,new C.eDd(d),A.bk(B.aC,v,v,v,v,v,B.f3,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d_,v,new A.b7(s,B.Y),v)},
$S:46}
C.eDc.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eDd.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eDn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dW:B.c,i=A.m(28),h=A.a([new A.ad(0,B.G,B.w.j(k?0.35:0.08),B.fK,28)],x.V),g=k?D.cVf:B.a1l,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.az,D.eCn,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cs,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ax,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.agq,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b2f(B.b4,B.iO,new C.eDk(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b2f(B.cv,M.xX,new C.eDl(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aC.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aC.j(0.28),B.r,1)
o=A.p(m,D.bFu,B.f,m,m,new A.o(B.aC.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aA,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bo(!0,new A.C(B.uY,A.p(m,A.v(A.a([g,new A.C(B.ago,A.v(A.a([w,B.S,u,B.bu,t,B.S,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.eo,k?B.bq:B.bp,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eDm(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:29}
C.eDk.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v1("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eDl.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v1("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eDm.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.N1(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eDi.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dW:B.c,m=A.m(24),l=A.a([new A.ad(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bW
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bp
u=A.bv(w,new A.a6(48,48,C.aOw(!0,A.m(12),48,N.Me,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Af(v.gwv())
s=x.p
r=this.a
return A.bo(!0,new A.C(B.uY,A.p(q,A.v(A.a([B.S,k,new A.C(D.agl,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bp,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Al,r.cgC(B.tE,B.aU,new C.eDg(d),p,"QR code or backup file","Transfer project"),r.b_j(!0,B.e4,B.aC,new C.eDh(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:29}
C.eDg.prototype={
$0(){A.a5(this.a,!1).N("transfer")
return null},
$S:0}
C.eDh.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
C.eDj.prototype={
$1(d){return this.bhO(d)},
bhO(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Kt(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vf(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eDA.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eDz(w))},
$S:0}
C.eDz.prototype={
$0(){return this.a.r++},
$S:0}
C.eDB.prototype={
$0(){var w=this.a
return w.m(new C.eDy(w))},
$S:0}
C.eDy.prototype={
$0(){return this.a.r++},
$S:0}
C.eDb.prototype={
$0(){var w=this.a.c
w.toString
return A.iK(w,null)},
$S:0}
C.eDf.prototype={
$0(){return this.a.ca0(this.b)},
$S:0}
C.eDw.prototype={
$0(){var w=this.a
return w.m(new C.eDv(w,this.b))},
$S:0}
C.eDv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDq.prototype={
$0(){return this.a.v1("scan")},
$S:0}
C.eDr.prototype={
$0(){return this.a.v1("file")},
$S:0}
C.eDs.prototype={
$1(d){return this.a.cgD(d,this.b)},
$S:z+60}
C.eDp.prototype={
$0(){return this.a.DT(this.b)},
$S:0}
C.eDo.prototype={
$0(){return this.a.ZC(this.b,this.c)},
$S:0}
C.ctF.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.ctE.prototype={
$1(d){return d.ad()},
$S:z+62}
C.ctC.prototype={
$1(d){return C.hlp(A.a1(d,x.N,x.z))},
$S:z+63}
C.ctD.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fjS.prototype={
$1(d){return d.y===D.kc},
$S:z+2}
C.fHH.prototype={
$1(d){return C.bzf(d,this.a)},
$S:z+2}
C.fiv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bLp.prototype={
$1(d){return!d.as},
$S:z+1}
C.bLo.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bLl.prototype={
$1(d){return C.fXl(A.a1(d,x.N,x.z))},
$S:z+14}
C.bLm.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bLn.prototype={
$1(d){return J.k(d)},
$S:17}
C.faA.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f6i.prototype={
$1(d){return C.fNV(A.a1(d,x.N,x.z))},
$S:z+67}
C.f6j.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f6k.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fzL.prototype={
$1(d){return J.k(d)},
$S:17}
C.fzM.prototype={
$1(d){return d.a},
$S:z+69}
C.fzN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzO.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fzP.prototype={
$1(d){return d.RQ(null).ad()},
$S:z+70}
C.fHF.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fkj.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fmH.prototype={
$1(d){return C.ajf(A.a1(d,x.N,x.z))},
$S:z+8}
C.fmI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fmJ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fmK.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fmL.prototype={
$1(d){return C.tF(d,this.a)},
$S:z+2}
C.fzy.prototype={
$1(d){return C.tF(d,this.a)},
$S:z+2}
C.fHA.prototype={
$1(d){return C.ajf(A.a1(d,x.N,x.z))},
$S:z+8}
C.fHB.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fHC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fk0.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fk1.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fHL.prototype={
$1(d){return!d.as},
$S:z+1}
C.fjB.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fjC.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fjD.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fHm.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fnt.prototype={
$1(d){return d.Q},
$S:z+72}
C.fzu.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fmE.prototype={
$1(d){return C.ajf(A.a1(d,x.N,x.z))},
$S:z+8}
C.fmF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fmG.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fzq.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f6P.prototype={
$1(d){return d.length!==0},
$S:3}
C.f6Q.prototype={
$1(d){return C.fXl(A.a1(d,x.N,x.z))},
$S:z+14}
C.f6R.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f6S.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f6T.prototype={
$1(d){return d.length!==0},
$S:3}
C.f75.prototype={
$2(d,e){return d.eS(new C.f76(e))},
$S:1905}
C.f76.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1906}
C.f72.prototype={
$1(d){return C.hHi(d,this.a)},
$S:z+73}
C.f73.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f74.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fbe.prototype={
$1(d){return d.a},
$S:z+49}
C.fbf.prototype={
$1(d){return d.length!==0},
$S:3}
C.fbg.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fdi.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fhQ.prototype={
$1(d){return C.h7B(d,C.FO(d,this.a))},
$S:z+5}
C.fhR.prototype={
$1(d){return C.h7C(d,C.FO(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJD.prototype
w.brQ=w.q
w=C.aLM.prototype
w.bua=w.q
w=C.aLN.prototype
w.bub=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aB8.prototype,"gcdA","cdB",25)
var s
w(s=C.aya.prototype,"gc6C","c6D",42)
v(s,"gaKn","MA",0)
v(s,"gclE","Ai",0)
v(s,"gbHc","Nf",0)
v(s,"gczf","xR",0)
v(s,"gcfA","a_i",0)
v(s,"gbCF","MY",0)
v(s,"gbHD","VW",0)
w(s,"gbM5","bM6",71)
v(s,"gbxa","zl",0)
v(C.ayb.prototype,"gczb","EK",0)
v(s=C.aBJ.prototype,"gae2","vg",0)
v(s,"gc9g","Zt",0)
v(s,"gaOn","Hj",0)
v(s=C.aBG.prototype,"gcvz","a1l",0)
v(s,"gae2","vg",0)
v(s,"gcjK","a_Y",0)
v(s,"gcad","ZH",0)
w(s,"gc6w","c6x",30)
v(s,"gbHu","Ho",0)
v(s,"gcwt","cwu",3)
v(s,"gbYr","XA",0)
w(s,"gc52","c53",23)
v(s,"gc90","c91",3)
v(s=C.aA7.prototype,"gc2S","OH",0)
v(s,"gc2U","c2V",3)
v(s,"gbEa","a8a",0)
v(s=C.aBI.prototype,"gbKD","Wq",0)
v(s,"gbUR","X3",0)
v(s,"gcpY","a0N",0)
v(s,"gcmd","a0p",0)
v(C.aBH.prototype,"gclW","afM",0)
v(C.aqS.prototype,"gc50","Z5",0)
v(C.awX.prototype,"ga15","Js",3)
v(C.awW.prototype,"ga15","Js",3)
v(C.avG.prototype,"ga15","Js",3)
v(s=C.aDd.prototype,"gaZH","PD",0)
v(s,"gbw0","UH",0)
v(s,"gca1","ca2",3)
w(C.aDc.prototype,"gc5R","c5S",57)
u(C.aDe.prototype,"gaOh",0,0,null,["$1","$0"],["Hi","bFr"],58,0,0)
t(C,"heP","hQT",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.amL,C.tX,C.n0,C.GS,C.ado,C.J7,C.tY,C.Jg,C.F7,C.bcq,C.aHh,C.anV,C.d3V,C.ls,C.aRn,C.aRm,C.aPs,C.tt,C.qJ,C.lb,C.hU,C.ku,C.aFh])
u(A.hS,[C.frk,C.frj,C.frl,C.fAq,C.fgM,C.fgN,C.fgS,C.fp3,C.fp2,C.fp1,C.c_a,C.fAW,C.fAO,C.fB_,C.fk8,C.dCo,C.dCj,C.dCk,C.dBX,C.dBT,C.dCD,C.dCE,C.dCx,C.dCy,C.dCF,C.dCG,C.fkD,C.fmB,C.fmC,C.fzw,C.fHz,C.fk_,C.fA4,C.d37,C.d2u,C.d2D,C.d2U,C.d2z,C.d2F,C.d2w,C.d2J,C.d2K,C.d2I,C.d2Z,C.d2Y,C.d4T,C.d4U,C.d4V,C.d3l,C.d3q,C.d3p,C.cCq,C.cCs,C.cVS,C.cWg,C.cWh,C.cWk,C.cWm,C.cWn,C.cWo,C.cWq,C.cWr,C.dQc,C.dPC,C.dPx,C.dP5,C.dPi,C.dPl,C.dPu,C.dOU,C.dPF,C.dPz,C.dOW,C.dOX,C.dOY,C.dP2,C.dP0,C.dP_,C.dPf,C.dPg,C.dPa,C.dPM,C.dPI,C.d3w,C.d3x,C.fkH,C.fkI,C.fkJ,C.fkF,C.fkG,C.fkM,C.fkN,C.fkO,C.fkK,C.fkL,C.d3Q,C.d3G,C.d3B,C.d3L,C.d3M,C.d3P,C.d3D,C.d3S,C.d3T,C.d3U,C.f3A,C.eFU,C.djG,C.djQ,C.djR,C.djS,C.djV,C.djU,C.djW,C.dk0,C.dk1,C.c5P,C.c5O,C.c5K,C.c5L,C.c5M,C.c5N,C.c5U,C.c5R,C.c5S,C.dPZ,C.dQ1,C.dQ0,C.dQ7,C.dQ8,C.dBI,C.fAx,C.fzU,C.fHl,C.fzZ,C.fzY,C.cWF,C.cWG,C.cWB,C.cul,C.cun,C.cuo,C.cug,C.cup,C.f32,C.fyF,C.eD1,C.eCY,C.eCU,C.eCS,C.eD5,C.fHd,C.eDe,C.eDn,C.eDi,C.eDj,C.eDs,C.ctE,C.ctC,C.ctD,C.fjS,C.fHH,C.fiv,C.bLp,C.bLo,C.bLl,C.bLm,C.bLn,C.f6i,C.f6j,C.fzL,C.fzM,C.fzN,C.fzO,C.fzP,C.fHF,C.fkj,C.fmH,C.fmI,C.fmK,C.fmL,C.fzy,C.fHA,C.fHB,C.fHC,C.fk0,C.fk1,C.fHL,C.fjB,C.fjC,C.fHm,C.fnt,C.fzu,C.fmE,C.fmF,C.fzq,C.f6P,C.f6Q,C.f6R,C.f6S,C.f6T,C.f76,C.f72,C.f73,C.fbe,C.fbf,C.fdi,C.fhQ,C.fhR])
u(A.au,[C.aWN,C.ajd,C.aSC,C.Xy,C.b8b,C.bco,C.bg5,C.btD,C.bjq,C.abR,C.bg4,C.abQ,C.bg3,C.aA8,C.aGk,C.abS,C.J3,C.bcp,C.ab8,C.bcn,C.bcs,C.aWL,C.aqS,C.acc])
u(A.mD,[C.b8N,C.b9Y,C.b9P,C.aFc,C.bf8,C.bcr,C.bbw,C.bhd,C.bts])
u(A.j2,[C.fAT,C.fAU,C.fAV,C.fAM,C.fAN,C.fAY,C.fAZ,C.dCA,C.dCm,C.dCp,C.dC3,C.dC4,C.dC5,C.dC2,C.dCa,C.dC1,C.dCb,C.dCc,C.dC0,C.dCd,C.dC_,C.dCe,C.dBZ,C.dCf,C.dBR,C.dBS,C.dBY,C.dCg,C.dBW,C.dCh,C.dBV,C.dC6,C.dBU,C.dC7,C.dBQ,C.dC8,C.dC9,C.dCB,C.dCC,C.dCq,C.dCr,C.dCs,C.dCt,C.dCu,C.dCv,C.dCw,C.dCI,C.dCz,C.fkE,C.d2s,C.d2q,C.d2r,C.d2t,C.d36,C.d2W,C.d2T,C.d2v,C.d2X,C.d2B,C.d2C,C.d2E,C.d2V,C.d2A,C.d2G,C.d33,C.d2Q,C.d2P,C.d2R,C.d2S,C.d2L,C.d2N,C.d2O,C.d2H,C.d3_,C.d32,C.d2x,C.d2y,C.d4S,C.d4R,C.d4Q,C.d4P,C.d4W,C.d4O,C.d4X,C.d3m,C.d3n,C.d3o,C.d3r,C.d3k,C.d3j,C.cCr,C.cVR,C.cW3,C.cW2,C.cWi,C.cW1,C.cWj,C.cW0,C.cW_,C.cWl,C.cVZ,C.cWb,C.cWa,C.cWs,C.dQb,C.dQa,C.dQd,C.dQe,C.dQf,C.dQ9,C.dQh,C.dQg,C.dPA,C.dPB,C.dPD,C.dP6,C.dPk,C.dPj,C.dPm,C.dPw,C.dPp,C.dPo,C.dPq,C.dPn,C.dPr,C.dPs,C.dPv,C.dOV,C.dPy,C.dOZ,C.dP1,C.dP3,C.dPE,C.dP9,C.dP7,C.dPb,C.dPc,C.dP8,C.dPd,C.dPh,C.dPN,C.dPO,C.dPG,C.dPJ,C.dPK,C.dPL,C.dPQ,C.dPH,C.dP4,C.d3v,C.d3u,C.d3z,C.d3J,C.d3A,C.eFT,C.djH,C.djE,C.djF,C.djP,C.djO,C.djN,C.djX,C.djM,C.djY,C.djL,C.djZ,C.djK,C.dk_,C.djJ,C.djI,C.djT,C.dk2,C.dkb,C.dQ_,C.dQ3,C.dQ4,C.dPW,C.dPX,C.dPY,C.dQ2,C.dQ6,C.dQ5,C.dPR,C.dPS,C.dPT,C.dPU,C.dPV,C.dBJ,C.fAu,C.cdn,C.cWE,C.cWD,C.cWH,C.cWA,C.cWC,C.cud,C.cuj,C.cuk,C.cui,C.cum,C.cuh,C.cue,C.cuf,C.cuq,C.f33,C.f34,C.eD3,C.eCV,C.eCW,C.eCX,C.eCZ,C.eD_,C.eD2,C.eCQ,C.eCT,C.eD4,C.eCR,C.eD7,C.eD8,C.eD9,C.eDa,C.eD6,C.eCL,C.eCM,C.eCN,C.eCP,C.eCO,C.eDt,C.eDu,C.eDc,C.eDd,C.eDk,C.eDl,C.eDm,C.eDg,C.eDh,C.eDA,C.eDz,C.eDB,C.eDy,C.eDb,C.eDf,C.eDw,C.eDv,C.eDq,C.eDr,C.eDp,C.eDo])
u(A.ag,[C.amS,C.RK,C.Yf,C.Yj,C.Yh,C.XQ,C.anY,C.anS,C.YT,C.anW,C.Zd,C.Ze,C.a54,C.XS,C.XR,C.Xp,C.a_W,C.EV,C.avz,C.aqR,C.aqL,C.aqQ,C.Nd])
u(A.ah,[C.aB8,C.bcl,C.aya,C.bcG,C.ayb,C.b9W,C.aBJ,C.aBG,C.aA7,C.aBI,C.aBH,C.bhx,C.aJD,C.awX,C.awW,C.avG,C.btv,C.aLM,C.aLN,C.aDd,C.biU,C.aDc,C.bvg])
u(A.kc,[C.dCl,C.dCn,C.dCi,C.dCH,C.fmD,C.bLk,C.d35,C.d34,C.d2M,C.d30,C.d31,C.d3s,C.dPt,C.dPe,C.dPP,C.d3I,C.d3H,C.d3F,C.d3K,C.d3N,C.d3O,C.d3y,C.d3C,C.d3E,C.d3R,C.c5I,C.c5Q,C.c5V,C.dBK,C.fAw,C.fAv,C.f30,C.f31,C.eD0,C.eDx,C.ctF,C.faA,C.f6k,C.fmJ,C.fjD,C.fmG,C.f75,C.f74,C.fbg])
t(C.bhe,C.aJD)
u(A.m0,[C.aab,C.aHZ,C.GT,C.aje,C.ctG,C.ctH])
t(C.btt,C.aLM)
t(C.btu,C.aLN)
t(C.aDe,C.bvg)
t(C.b6E,A.b6t)
t(C.btw,A.a4K)
t(C.b6D,C.btw)
w(C.aJD,A.eQ)
w(C.aLM,A.c8)
w(C.aLN,A.c8)
v(C.bvg,A.eu)
v(C.btw,A.iY)})()
A.jR(b.typeUniverse,JSON.parse('{"aWN":{"au":[],"r":[]},"b8N":{"aB":[]},"amS":{"ag":[],"r":[]},"aB8":{"ah":["amS"]},"RK":{"ag":[],"r":[]},"ajd":{"au":[],"r":[]},"aSC":{"au":[],"r":[]},"bcl":{"ah":["RK"]},"Yf":{"ag":[],"r":[]},"Yj":{"ag":[],"r":[]},"Yh":{"ag":[],"r":[]},"XQ":{"ag":[],"r":[]},"aya":{"ah":["Yf"]},"bcG":{"ah":["Yj"]},"ayb":{"ah":["Yh"]},"Xy":{"au":[],"r":[]},"b9Y":{"aB":[]},"b9P":{"aB":[]},"b9W":{"ah":["XQ"]},"aFc":{"aB":[]},"bf8":{"aB":[]},"b8b":{"au":[],"r":[]},"anY":{"ag":[],"r":[]},"anS":{"ag":[],"r":[]},"YT":{"ag":[],"r":[]},"abS":{"au":[],"r":[]},"aBJ":{"ah":["anY"]},"aBG":{"ah":["anS"]},"bco":{"au":[],"r":[]},"bcr":{"aB":[]},"bg5":{"au":[],"r":[]},"bbw":{"aB":[]},"btD":{"au":[],"r":[]},"bjq":{"au":[],"r":[]},"aA7":{"ah":["YT"]},"abR":{"au":[],"r":[]},"bg4":{"au":[],"r":[]},"abQ":{"au":[],"r":[]},"bg3":{"au":[],"r":[]},"aA8":{"au":[],"r":[]},"aGk":{"au":[],"r":[]},"J3":{"au":[],"r":[]},"anW":{"ag":[],"r":[]},"Zd":{"ag":[],"r":[]},"Ze":{"ag":[],"r":[]},"aBI":{"ah":["anW"]},"bcp":{"au":[],"r":[]},"ab8":{"au":[],"r":[]},"bcn":{"au":[],"r":[]},"bcs":{"au":[],"r":[]},"aBH":{"ah":["Zd"]},"bhx":{"ah":["Ze"]},"aWL":{"au":[],"r":[]},"a54":{"ag":[],"r":[]},"bhe":{"ah":["a54"]},"bhd":{"aB":[]},"aqS":{"au":[],"r":[]},"XS":{"ag":[],"r":[]},"XR":{"ag":[],"r":[]},"Xp":{"ag":[],"r":[]},"a_W":{"ag":[],"r":[]},"awX":{"ah":["XS"]},"awW":{"ah":["XR"]},"avG":{"ah":["Xp"]},"btv":{"ah":["a_W"]},"EV":{"ag":[],"r":[]},"avz":{"ag":[],"r":[]},"btt":{"ah":["EV"]},"btu":{"ah":["avz"]},"bts":{"aB":[]},"aqR":{"ag":[],"r":[]},"aDd":{"ah":["aqR"]},"acc":{"au":[],"r":[]},"aqL":{"ag":[],"r":[]},"aqQ":{"ag":[],"r":[]},"biU":{"ah":["aqL"]},"aDc":{"ah":["aqQ"]},"Nd":{"ag":[],"r":[]},"aDe":{"ah":["Nd"],"eu":[]},"b6D":{"iY":[],"fd":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPs"),Q:w("qJ"),n:w("bp<n,n>"),c5:w("aRm"),dY:w("aRn"),d:w("eN<n?>"),e:w("GS"),B:w("n0"),P:w("hU"),k:w("ku"),x:w("ay<~>"),f5:w("O<a1X>"),V:w("O<ad>"),t:w("O<qJ>"),O:w("O<w>"),ac:w("O<eN<n?>>"),I:w("O<n0>"),u:w("O<hU>"),_:w("O<ku>"),cl:w("O<ay<ak<a4<n,@>>>>"),R:w("O<n2>"),cq:w("O<ak<+(P,P)>>"),ez:w("O<a4<n,aC>>"),gE:w("O<a4<n,n>>"),c7:w("O<a4<n,@>>"),fD:w("O<mi>"),bp:w("O<o4>"),g:w("O<u>"),v:w("O<hm>"),L:w("O<+(n,n)>"),G:w("O<+(P,P)>"),bF:w("O<+count,id,name(G,n,n)>"),A:w("O<cP>"),s:w("O<n>"),aS:w("O<iN>"),p:w("O<r>"),C:w("O<fd>"),D:w("O<lb>"),fp:w("O<J7>"),M:w("O<Jg>"),gZ:w("O<aFh>"),Y:w("O<ado>"),E:w("O<aHh>"),F:w("O<P>"),dC:w("O<G>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ak<n0>"),do:w("ak<hU>"),r:w("ak<ku>"),U:w("ak<a4<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(G,n,n)>"),h:w("ak<n>"),c:w("ak<lb>"),j:w("ak<@>"),fK:w("bu<n,n>"),d2:w("bu<n,ak<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("J<n,GU>"),w:w("iy"),g2:w("r2"),bV:w("amL"),fL:w("cn"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(P,ak<hU>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bm<P>"),gc:w("dC"),b4:w("cz<G>"),W:w("k9<n>"),l:w("r"),cM:w("fd"),i:w("lb"),cc:w("F7"),bw:w("abQ<n?>"),cy:w("Ji"),q:w("mQ"),y:w("R"),gR:w("P"),z:w("@"),S:w("G"),eK:w("ak<ku>?"),m:w("anV?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("ql?"),T:w("n?"),aD:w("dC?"),o:w("lb?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aV7=new A.bs(B.hc,B.bD,B.hc,B.bD)
D.a8V=new A.bs(B.hc,B.jX,B.hc,B.jX)
D.aVj=new A.bs(B.hO,B.bD,B.bD,B.bD)
D.aVn=new A.aA(B.cY,1.4,B.r,-1)
D.aVx=new A.aA(B.ad,1,B.r,-1)
D.aWX=new A.aY(0,1/0,64,1/0)
D.aX0=new A.aY(0,84,0,1/0)
D.avU=w([B.lv,B.qw,B.c],x.O)
D.bQA=new A.a7(B.ax,B.aD,B.x,D.avU,null,null)
D.aXL=new A.o(null,null,null,null,null,D.bQA,B.n)
D.cUL=w([B.aU,B.bT],x.O)
D.bSF=new A.a7(B.b0,B.b6,B.x,D.cUL,null,null)
D.aY4=new A.o(null,null,null,null,null,D.bSF,B.n)
D.b3a=new A.fh(null,null,null,null,null,E.jG,null,null,null,null)
D.aad=new A.cq(B.A,null,null,D.b3a,null)
D.k5=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eSK=new A.F(!0,D.k5,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fat=new A.x("No books on the shelf yet.",null,D.eSK,null,null,null,null,null,null,null,null,null)
D.e0M=new A.C(B.nE,D.fat,null)
D.b1K=new A.cq(B.A,null,null,D.e0M,null)
D.b2C=new A.cq(B.A,null,null,X.UM,null)
D.b4A=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b52=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abg=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b7B=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b7S=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.act=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bbC=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bbZ=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.E6=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bdw=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bfK=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.ae3=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f5b=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bkV=new A.eN(null,D.f5b,B.f0,null,x.d)
D.fdB=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bkX=new A.eN(null,D.fdB,B.f0,null,x.d)
D.blu=new A.b9(38e5)
D.bme=new A.i8(0,10,0,10)
D.bmo=new A.Q(0,1,0,0)
D.bmy=new A.i8(0,4,0,4)
D.bmQ=new A.Q(10,10,14,10)
D.bn0=new A.i8(10,4,10,4)
D.bn8=new A.i8(10,8,10,8)
D.bn9=new A.Q(10,8,8,8)
D.bnB=new A.Q(12,6,12,2)
D.bnT=new A.Q(14,10,6,6)
D.bnU=new A.Q(14,12,14,0)
D.bnY=new A.Q(14,12,14,8)
D.bo0=new A.Q(14,12,8,14)
D.bo4=new A.i8(14,14,14,14)
D.boJ=new A.Q(16,2,16,10)
D.boT=new A.Q(16,6,16,30)
D.boV=new A.Q(16,6,16,8)
D.agl=new A.Q(18,16,18,8)
D.bpv=new A.Q(18,20,18,22)
D.agp=new A.Q(18,24,18,24)
D.bpB=new A.Q(18,30,18,30)
D.bpT=new A.Q(20,10,12,20)
D.bq6=new A.Q(20,18,16,18)
D.bq8=new A.Q(20,18,20,6)
D.bqY=new A.Q(24,32,24,28)
D.bqZ=new A.Q(24,36,24,32)
D.br2=new A.Q(26,26,24,14)
D.brg=new A.Q(2,4,2,8)
D.brk=new A.Q(30,0,30,0)
D.brv=new A.Q(38,22,22,22)
D.agG=new A.Q(40,24,24,24)
D.brx=new A.i8(40,40,40,40)
D.brz=new A.Q(46,30,30,30)
D.agJ=new A.Q(4,0,0,8)
D.brZ=new A.Q(56,40,40,40)
D.bs2=new A.Q(1.25,1.25,1.25,1.25)
D.bs3=new A.Q(60,0,60,0)
D.bs6=new A.Q(6,14,6,16)
D.bsi=new A.i8(7,3,7,3)
D.bsO=new A.Q(5,1.5,5,1.5)
D.bsZ=new A.Q(6,2.5,6,2.5)
D.fpa=new A.x("Signature",null,B.nc,null,null,null,null,null,null,null,null,null)
D.btj=new A.bE(1,B.bi,D.fpa,null)
D.fmn=new A.x("Tell the AI what to fix",null,B.dB,null,null,null,null,null,null,null,null,null)
D.bu1=new A.bE(1,B.bi,D.fmn,null)
D.eZW=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foh=new A.x("Worksheets",null,D.eZW,null,null,null,null,null,null,null,null,null)
D.f_3=new A.F(!0,E.aaS,null,null,null,null,13,B.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnc=new A.x("Track your project spending",null,D.f_3,null,null,null,null,null,null,null,null,null)
D.cN7=w([D.foh,B.au,D.fnc],x.p)
D.bis=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cN7,null)
D.bu6=new A.bE(1,B.bi,D.bis,null)
D.eVh=new A.F(!0,E.jG,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4o=new A.x("FAMILY LIBRARY",null,D.eVh,null,null,null,null,null,null,null,null,null)
D.bun=new A.bE(1,B.bi,D.f4o,null)
D.LS=new C.GS("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.YB=new C.GT(0,"male")
D.ahB=new C.GT(1,"female")
D.xp=new C.GT(2,"unknown")
D.tm=new C.aje(0,"owner")
D.LT=new C.aje(1,"editor")
D.kc=new C.aje(2,"viewer")
D.ain=new A.a0(61199,"MaterialIcons",!1)
D.bxN=new A.a0(61504,"MaterialIcons",!1)
D.bxO=new A.a0(61505,"MaterialIcons",!1)
D.bxQ=new A.a0(61587,"MaterialIcons",!1)
D.bxW=new A.a0(61890,"MaterialIcons",!1)
D.byP=new A.a0(63034,"MaterialIcons",!0)
D.bzE=new A.a0(63429,"MaterialIcons",!1)
D.akE=new A.a0(984520,"MaterialIcons",!1)
D.byl=new A.a0(62776,"MaterialIcons",!1)
D.bBZ=new A.ae(D.byl,26,B.aZ,null,null,null)
D.bwM=new A.a0(57648,"MaterialIcons",!1)
D.bCh=new A.ae(D.bwM,14,B.c,null,null,null)
D.bCz=new A.ae(B.Fg,17,null,null,null,null)
D.bD4=new A.ae(E.Zt,null,null,null,null,null)
D.bD7=new A.ae(B.j8,18,E.jG,null,null,null)
D.Zf=new A.a0(62044,"MaterialIcons",!1)
D.bDd=new A.ae(D.Zf,null,B.aU,null,null,null)
D.bE2=new A.ae(B.dV,16,null,null,null,null)
D.bE9=new A.ae(D.Zf,32,B.aU,null,null,null)
D.bEr=new A.ae(E.aio,18,B.cY,null,null,null)
D.bFu=new A.ae(B.Fq,22,B.aC,null,null,null)
D.bFG=new A.ae(B.dV,22,B.aZ,null,null,null)
D.bFR=new A.ae(O.Zk,22,B.c,null,null,null)
D.bFW=new A.ae(B.tv,52,B.c,null,null,null)
D.bG5=new A.ae(B.Fq,30,B.aC,null,null,null)
D.alf=new A.ae(B.tE,22,B.c,null,null,null)
D.bGx=new A.ae(B.dV,17,null,null,null,null)
D.bGQ=new A.ae(B.vh,26,B.cY,null,null,null)
D.bHz=new A.ae(B.ZF,16,null,null,null,null)
D.bIi=new A.ae(B.tv,24,B.c,null,null,null)
D.bIn=new A.ae(B.Mk,20,B.r1,null,null,null)
D.bIs=new A.ae(B.Fe,null,B.bT,null,null,null)
D.bIz=new A.ae(B.j8,18,B.c,null,null,null)
D.bJa=new A.ae(B.cw,22,B.ad,null,null,null)
D.bK_=new A.ae(B.e4,16,B.ad,null,null,null)
D.bKb=new A.ae(D.Zf,20,B.aU,null,null,null)
D.alG=new A.ae(B.hw,20,null,null,null,null)
D.bKG=new A.ae(B.cw,18,D.k5,null,null,null)
D.bKY=new A.ae(B.xL,28,B.c,null,null,null)
D.bL5=new A.ae(B.Ma,null,B.fU,null,null,null)
D.bLp=new A.ae(B.xL,24,B.c,null,null,null)
D.bLQ=new A.ae(B.tv,null,B.aU,null,null,null)
D.bLR=new A.ae(B.jt,20,B.cY,null,null,null)
D.bMa=new A.ae(B.Fg,16,null,null,null,null)
D.bNH=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ex,!0,null,null,null,null)
D.d0L=w([B.bs,B.aU,B.f6,B.aZ],x.O)
D.bP3=new A.a7(B.ax,B.aD,B.x,D.d0L,null,null)
D.bcu=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bhx=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cK9=w([D.bcu,D.bhx],x.O)
D.bPe=new A.a7(B.b0,B.b6,B.x,D.cK9,null,null)
D.cWv=w([B.eX,B.fu,B.f6],x.O)
D.bPi=new A.a7(B.ax,B.aD,B.x,D.cWv,null,null)
D.ad4=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b53=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cM3=w([D.ad4,D.b53],x.O)
D.bPR=new A.a7(B.b0,B.b6,B.x,D.cM3,null,null)
D.b82=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.avi=w([D.b82,D.ad4],x.O)
D.bQa=new A.a7(B.ax,B.aD,B.x,D.avi,null,null)
D.ac5=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.ba3=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cVH=w([D.ac5,D.ba3],x.O)
D.bQL=new A.a7(B.a3,B.a7,B.x,D.cVH,null,null)
D.d6B=w([B.bL,B.mI],x.O)
D.bQN=new A.a7(B.b0,B.b6,B.x,D.d6B,null,null)
D.bcq=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d7s=w([D.bcq,D.k5,D.k5,Ai.W1],x.O)
D.d9z=w([0,0.07,0.9,1],x.F)
D.bRg=new A.a7(B.a3,B.a7,B.x,D.d7s,D.d9z,null)
D.bRr=new A.a7(B.ax,B.aD,B.x,B.PP,null,null)
D.d6c=w([B.aZ,B.aU,B.bT],x.O)
D.bSr=new A.a7(B.ax,B.aD,B.x,D.d6c,null,null)
D.ccO=w([B.bs,B.aZ,B.eX],x.O)
D.ccV=w([B.by,B.aE,B.jj],x.O)
D.ccX=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bb7=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cj0=w([D.bb7,E.acM],x.O)
D.dXD=new A.u(1,2)
D.eEw=new A.cP(B.aW,D.dXD,3)
D.asr=w([D.eEw],x.A)
D.cqe=w([B.fY,B.c8,B.f5],x.O)
D.csS=w([B.bI,B.bv,B.bn],x.O)
D.buQ=new C.tX("classic","Classic leather","Gold-edged brown leather",D.avi,E.jG,E.jG,"\u2766",B.L,!0,!1,!1,!1)
D.b4n=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bgy=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cOF=w([D.b4n,D.bgy],x.O)
D.acP=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.buL=new C.tX("ornate","Ornate gold","Double gold border and flourishes",D.cOF,D.acP,D.acP,"\u2726",B.L,!0,!0,!0,!1)
D.b7J=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bda=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cHd=w([D.b7J,D.bda],x.O)
D.buK=new C.tX("parchment","Parchment","Old paper with dark ink",D.cHd,D.E6,G.im,"\u2767",B.L,!0,!1,!1,!0)
D.aaB=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bf5=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d4D=w([D.aaB,D.bf5],x.O)
D.baG=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.beu=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.buN=new C.tX("minimal","Clean paper","Plain and elegant, like a printed book",D.d4D,D.baG,D.beu,"",B.L,!0,!0,!1,!0)
D.buP=new C.tX("midnight","Midnight","Deep blue with silver stars",K.avA,B.cm,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.buJ=new C.tX("emerald","Emerald library","Green cloth, title on the left",Y.asR,E.jG,B.fZ,"\u25c6",B.bg,!0,!1,!1,!1)
D.bfs=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d39=w([B.eD,D.bfs],x.O)
D.bbK=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bcN=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.buO=new C.tX("rose","Rose vintage","Burgundy with rose-gold lettering",D.d39,D.bbK,D.bcN,"\u2740",B.L,!0,!1,!0,!1)
D.d75=w([B.cC,K.of],x.O)
D.buM=new C.tX("modern","Modern","Dark, bold, left-aligned",D.d75,B.aX,B.c,"",B.bg,!1,!0,!1,!1)
D.a0z=w([D.buQ,D.buL,D.buK,D.buN,D.buP,D.buJ,D.buO,D.buM],A.ax("O<tX>"))
D.cGK=w([B.bT,B.bj],x.O)
D.bcg=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cHp=w([D.aaB,D.bcg],x.O)
D.b7G=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cIX=w([D.b7G,B.da],x.O)
D.cKn=w([B.b9,B.iG,B.o9],x.O)
D.cKK=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b5_=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b9p=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d9v=w([D.ac5,D.b5_,D.b9p],x.O)
D.buR=new C.tY("leather","Leather",D.d9v,"vintage")
D.cRA=w([B.dp,B.Ke,R.Vg],x.O)
D.buY=new C.tY("midnight","Midnight",D.cRA,"starry")
D.cKo=w([B.ff,B.e9,B.kZ],x.O)
D.buX=new C.tY("forest","Forest",D.cKo,"story")
D.dbk=w([B.eM,B.eD,B.k6],x.O)
D.buU=new C.tY("burgundy","Burgundy",D.dbk,"royal")
D.css=w([B.aE,B.p7,B.nl],x.O)
D.buV=new C.tY("royal","Royal",D.css,"royal")
D.cME=w([B.bv,B.cC,K.of],x.O)
D.buS=new C.tY("charcoal","Charcoal",D.cME,"geo")
D.d9D=w([B.cb,B.dO,B.wI],x.O)
D.buW=new C.tY("sunset","Sunset",D.d9D,"sunset")
D.dag=w([B.iG,B.E7,B.Vk],x.O)
D.buT=new C.tY("ocean","Ocean",D.dag,"band")
D.yh=w([D.buR,D.buY,D.buX,D.buU,D.buV,D.buS,D.buW,D.buT],A.ax("O<tY>"))
D.cN1=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cNy=w([B.ak,B.aK,B.M],x.O)
D.cOK=w([B.eD,B.e9,B.dp,B.fn,B.wL,B.cY,B.jJ,B.eu,B.dj],x.O)
D.cOL=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eEx=new A.cP(B.dm,B.dz,8)
D.cOW=w([D.eEx],x.A)
D.cPY=w([B.bZ,B.dO,B.kz],x.O)
D.cQp=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cRw=w([B.bZ,B.he],x.O)
D.cTr=w([B.aM,B.A4,B.wA],x.O)
D.cUh=w([B.bJ,B.cr,B.dx,B.aM],x.O)
D.cUM=w([B.iY,B.cb,B.rR],x.O)
D.cVf=w([B.eX,B.cY],x.O)
D.cVM=w([B.cy,B.fB,B.hs],x.O)
D.cVX=w([B.aX,B.bj,B.dp],x.O)
D.cWs=w([B.es,B.cZ,B.e9],x.O)
D.cWJ=w([B.dS,B.dp,B.Ke],x.O)
D.cXX=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1r=w(["leather","linen","plain","stars","rays"],x.s)
D.bBF=new A.a0(985219,"MaterialIcons",!1)
D.bBd=new A.a0(983781,"MaterialIcons",!1)
D.av3=w([B.aiN,B.hY,B.lC,B.hZ,D.bBF,B.FA,B.ps,D.bBd,K.akr,B.xN,B.pu,B.md],A.ax("O<a0>"))
D.a1w=w(["double","single","corners","none"],x.s)
D.d_y=w([B.dL,B.bp,B.eu],x.O)
D.d_L=w([],x.t)
D.BC=w([],x.u)
D.d1S=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d40=w([B.aJ,B.fB,B.fn],x.O)
D.d5d=w([B.cq,B.ob,B.Wb],x.O)
D.d5r=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dnO=new C.ls("construction","Construction","Jobsite & builds",B.xC)
D.dnV=new C.ls("house","Home Build","Houses & rooms",B.vc)
D.dnL=new C.ls("grocery","Grocery","Store & pantry",B.a_b)
D.dnK=new C.ls("calculator","Calculations","Math & estimates",B.Mv)
D.dnT=new C.ls("lumber","Materials","Lumber & supplies",B.MM)
D.dnH=new C.ls("kitchen","Kitchen","Remodel & meals",A7.ajB)
D.bBa=new A.a0(983756,"MaterialIcons",!1)
D.dnM=new C.ls("landscape","Landscaping","Yard & garden",D.bBa)
D.dnG=new C.ls("plumbing","Plumbing","Pipes & water",B.pD)
D.dnW=new C.ls("electrical","Electrical","Wiring & power",B.h6)
D.dnE=new C.ls("store","Retail Shop","Daily business",B.kH)
D.dnF=new C.ls("paint_remodel","Paint & Remodel","Colors & walls",A8.ZL)
D.bAA=new A.a0(983311,"MaterialIcons",!1)
D.dnS=new C.ls("roofing","Roofing","Roofs & exteriors",D.bAA)
D.bBn=new A.a0(983986,"MaterialIcons",!1)
D.dnD=new C.ls("warehouse","Warehouse","Storage & stock",D.bBn)
D.dnQ=new C.ls("vehicles","Vehicles","Fleet & transport",B.FB)
D.byn=new A.a0(62785,"MaterialIcons",!1)
D.dnJ=new C.ls("farm","Farm","Crops & livestock",D.byn)
D.dnI=new C.ls("restaurant","Restaurant","Food & catering",B.tC)
D.dnP=new C.ls("tools","Tools","Workshop gear",B.Fx)
D.dnU=new C.ls("wallet","Cash & Wallet","Quick spending",B.jt)
D.bzz=new A.a0(63395,"MaterialIcons",!1)
D.dnR=new C.ls("concrete","Concrete","Foundation work",D.bzz)
D.dnN=new C.ls("blueprint","Blueprint","Plans & design",Ad.aiT)
D.a1V=w([D.dnO,D.dnV,D.dnL,D.dnK,D.dnT,D.dnH,D.dnM,D.dnG,D.dnW,D.dnE,D.dnF,D.dnS,D.dnD,D.dnQ,D.dnJ,D.dnI,D.dnP,D.dnU,D.dnR,D.dnN],A.ax("O<ls>"))
D.d5U=w([B.bq,B.bp],x.O)
D.d6C=w([B.i3,B.np,B.dC],x.O)
D.a22=w(["top","middle","bottom"],x.s)
D.d8V=w([B.cu,B.bj,B.dp],x.O)
D.d9q=w([B.bc,B.cZ,B.e9],x.O)
D.dbf=w([B.bI,B.ak],x.O)
D.dbg=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dVj={top:0,middle:1,bottom:2}
D.der=new A.bp(D.dVj,["Top","Middle","Bottom"],x.n)
D.dUZ={double:0,single:1,corners:2,none:3}
D.dew=new A.bp(D.dUZ,["Double line","One line","Corners","None"],x.n)
D.dW5={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dfU=new A.bp(D.dW5,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dg5=new A.bp(B.ib,[],A.ax("bp<G,+(n,n)>"))
D.dVb={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.BN=new A.bp(D.dVb,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bp<n,G>"))
D.dim=new F.M7(32,null)
D.din=new F.M7(40,null)
D.dio=new F.M7(46,null)
D.aE8=new C.aqQ(null)
D.dYA=new A.u(8,14)
D.fb5=new A.x("Write a new book",null,B.jf,null,B.L,null,null,null,null,null,null,null)
D.e0g=new A.C(B.l2,D.fb5,null)
D.akR=new A.ae(B.hv,18,B.c,null,null,null)
D.f4J=new A.x("Add",null,B.mt,null,null,null,null,null,null,null,null,null)
D.cUw=w([D.akR,B.pV,D.f4J],x.p)
D.eCu=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cUw,null)
D.e0A=new A.C(B.om,D.eCu,null)
D.e0B=new A.C(E.afc,X.UM,null)
D.eZS=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7I=new A.x("New Project",null,D.eZS,null,null,null,null,null,null,null,null,null)
D.cYi=w([D.akR,B.ab,D.f7I],x.p)
D.eCx=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cYi,null)
D.e0L=new A.C(B.j5,D.eCx,null)
D.f9V=new A.x("Choose your header",null,S.vS,null,null,null,null,null,null,null,null,null)
D.e15=new A.C(B.hH,D.f9V,null)
D.b3p=new A.fh(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eH9=new A.a6(22,22,D.b3p,null)
D.b1G=new A.cq(B.A,null,null,D.eH9,null)
D.e1a=new A.C(B.X7,D.b1G,null)
D.bod=new A.Q(14,2,14,6)
D.fmX=new A.x("The top of your book. Tap a design to see it.",null,R.a6i,null,null,null,null,null,null,null,null,null)
D.e1b=new A.C(D.bod,D.fmX,null)
D.e2J=new A.iL(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e2M=new A.iL(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aFm=new A.iL(1,0.9607843137254902,0.48627450980392156,0)
D.HB=new A.iL(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yP=new A.iL(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e2S=new A.iL(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fGl=new C.bf8(null)
D.bjm=new A.m8(D.fGl,null,B.at,null,null)
D.aJ_=new A.cK(0,0,0,0,null,null,D.bjm,null)
D.epo=new A.z(-42,42)
D.exv=new A.cL([0,0,1,1])
D.aKg=new A.aa(0,0,520,160)
D.aKt=new A.b7(B.ry,B.Y)
D.fmv=new A.x("Let the AI write it from your tree",null,B.kp,null,B.L,null,null,null,null,null,null,null)
D.bvt=new A.dm(1,B.ci,D.fmv,null)
D.cRv=w([E.a_E,B.ab,D.bvt],x.p)
D.eCc=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cRv,null)
D.f4p=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d4g=w([D.alG,B.ab,D.f4p],x.p)
D.eCk=new A.co(B.aQ,B.ba,B.j,B.m,null,B.p,null,0,D.d4g,null)
D.bFL=new A.ae(B.hI,14,B.aZ,null,null,null)
D.eTX=new A.F(!0,B.aZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f87=new A.x("Cashier",null,D.eTX,null,null,null,null,null,null,null,null,null)
D.cYO=w([D.bFL,B.bo,D.f87],x.p)
D.eCm=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cYO,null)
D.f4q=new A.x("Transfer & settings",null,B.dB,null,null,null,null,null,null,null,null,null)
D.btT=new A.bE(1,B.bi,D.f4q,null)
D.cJT=w([D.alf,B.aw,D.btT],x.p)
D.eCn=new A.co(B.aQ,B.e,B.j,B.m,null,B.p,null,0,D.cJT,null)
D.eFU=new A.at(16,40)
D.eFZ=new A.at(22,64)
D.eG5=new A.at(280,88)
D.eGQ=new A.a6(30,null,null,null)
D.eI7=new A.hH(2,12,12,1.05,null)
D.f7O=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eIQ=new A.b1(D.f7O,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f82=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aMi=new A.b1(D.f82,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.ffR=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eJj=new A.b1(D.ffR,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fpI=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eJo=new A.b1(D.fpI,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f9T=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eJv=new A.b1(D.f9T,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.q,null)
D.fn8=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aMm=new A.b1(D.fn8,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f50=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eJV=new A.b1(D.f50,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fqm=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eKE=new A.b1(D.fqm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.flu=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eL2=new A.b1(D.flu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fpM=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eL5=new A.b1(D.fpM,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fhn=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eL7=new A.b1(D.fhn,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fbG=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eL8=new A.b1(D.fbG,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fbH=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eM8=new A.b1(D.fbH,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f7Q=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eMq=new A.b1(D.f7Q,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f9B=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eMJ=new A.b1(D.f9B,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fgT=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eMZ=new A.b1(D.fgT,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fcr=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eN_=new A.b1(D.fcr,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.ePY=new A.F(!0,D.k5,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQo=new A.F(!0,D.k5,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR1=new A.rl(!0,B.ra,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRh=new A.F(!0,D.k5,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRO=new A.F(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6j=new A.rl(!0,B.Ra,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSN=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTa=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUJ=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUN=new A.F(!0,G.im,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW0=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWI=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXq=new A.F(!0,B.bT,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXu=new A.F(!0,B.bL,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXQ=new A.F(!0,D.E6,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXZ=new A.F(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYX=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZq=new A.F(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZQ=new A.F(!0,B.aZ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0g=new A.F(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0o=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOv=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6M=new A.F(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f22=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2q=new A.F(!0,G.im,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2x=new A.F(!0,G.im,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3h=new A.x("Themes",null,B.oN,null,null,null,null,null,null,null,null,null)
D.f3T=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eUs=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4f=new A.x("Debt receipt",null,D.eUs,null,B.L,null,null,null,null,null,null,null)
D.aOq=new A.F(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4w=new A.x("Person who owes",null,D.aOq,null,null,null,null,null,null,null,null,null)
D.f5t=new A.x("Notes",null,B.a6q,null,null,null,null,null,null,null,null,null)
D.f5T=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eTs=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5X=new A.x("Share",null,D.eTs,null,null,null,null,null,null,null,null,null)
D.f6Q=new A.x("Move your family trees",null,D.aOv,null,null,null,null,null,null,null,null,null)
D.f7q=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.f81=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.f9b=new A.x("Remove this book?",null,B.hm,null,null,null,null,null,null,null,null,null)
D.aOV=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fag=new A.x("What should the AI do?",null,B.dB,null,null,null,null,null,null,null,null,null)
D.fbC=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fcG=new A.x("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.f0a=new A.F(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd8=new A.x("NGMY.ORG",null,D.f0a,null,B.L,null,null,null,null,null,null,null)
D.feo=new A.x("Scan family tree QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.eXI=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff7=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eXI,null,B.L,null,null,null,null,null,null,null)
D.fgi=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fgp=new A.x("Thumbnail",null,B.oN,null,null,null,null,null,null,null,null,null)
D.fgZ=new A.x("Save the cover",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fho=new A.x("Your photos",null,B.oN,null,null,null,null,null,null,null,null,null)
D.fhD=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fi4=new A.x("Design your cover",null,S.vS,null,null,null,null,null,null,null,null,null)
D.fia=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fid=new A.x("PICTURE",null,H.mu,null,null,null,null,null,null,null,null,null)
D.fiz=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fiB=new A.x("You can undo it right after.",null,A3.SA,null,null,null,null,null,null,null,null,null)
D.fj5=new A.x("Print",null,B.uf,null,null,null,null,null,null,null,null,null)
D.fjr=new A.x("Amount owed",null,D.aOq,null,null,null,null,null,null,null,null,null)
D.fjE=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fkd=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fkg=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fkG=new A.x("Debtor signature",null,B.a6q,null,null,null,null,null,null,null,null,null)
D.fkO=new A.x("Change icon",null,E.aNJ,null,null,null,null,null,null,null,null,null)
D.flW=new A.x("Family tree QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fml=new A.x("Download",null,B.uf,null,null,null,null,null,null,null,null,null)
D.fmp=new A.x("Change",null,B.oN,null,null,null,null,null,null,null,null,null)
D.fne=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fnh=new A.x("WHAT SHOULD IT CHANGE?",null,H.mu,null,null,null,null,null,null,null,null,null)
D.fnR=new A.x("COLOUR",null,H.mu,null,null,null,null,null,null,null,null,null)
D.fo2=new A.x("Do it",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fo5=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fp4=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eOX=new A.F(!0,E.jG,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpj=new A.x("Write the first page myself",null,D.eOX,null,null,null,null,null,null,null,null,null)
D.fpP=new A.x("Use this header",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fpV=new A.x("Create Project",null,E.aOa,null,null,null,null,null,null,null,null,null)
D.fD0=new C.aab(1,"header")
D.a7A=new C.aab(2,"projects")
D.fD1=new C.aab(3,"cashier")
D.a7B=new C.aab(4,"familyTree")
D.fOg=new C.ctG(0,"start")
D.fOh=new C.ctH(0,"start")
D.fDj=new C.Xp(null)
D.fEi=new C.XR(null)
D.dg2=new A.bp(B.ib,[],A.ax("bp<n,F7>"))
D.d05=w([],x.E)
D.d06=w([],x.M)
D.fEP=new C.bcq(D.dg2,D.d05,D.d06,0,0,null,null)
D.fH_=new C.Ze(null)
D.a8i=new C.aHZ(0,"projects")
D.aSM=new C.aHZ(1,"cashier")
D.fMd=new C.aHZ(2,"familyTree")})()};
(a=>{a["hlT3ILBdPu5f2yTX6A2kLELwkE0="]=a.current})($__dart_deferred_initializers__);