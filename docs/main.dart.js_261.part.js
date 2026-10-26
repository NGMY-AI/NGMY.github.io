((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,G,F,E,Y,Z,A_,A0,A1,A2,M,A3,H,Q,R,S,T,A4,A5,U,A6,A7,V,A8,A9,Aa,K,Ab,Ac,Ad,L,N,C={
byy(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$byy=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ux(null,""),$async$byy)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.O(y.j)
t=A.mE(b1)
s=A.bT(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dA(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dm(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.J)(h),++d){a0=h[d]
f.push(A.D(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.aj(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qh(t,a1,B.h4,E.Dn),$async$byy)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ov(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.O(l!=null&&A.Jg(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Z(r.a(j.h(a2,a7)),q,p):B.cr
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.S(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a04(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byy,v)},
aei(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aei=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ux(null,""),$async$aei)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.O(y.j)
t=A.mE(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a_S(new A.I(r,new C.fgs(),r.$ti.k("I<ai.E,n>")).aF(0," "))
r=q==="sw"
if(!r){p=A.ad("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fgr(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.aj(b7,null)+"\nAllowed values: style one of "+B.d.aF(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aei)
case 6:l=c5
k=F.Ov(l==null?"":l)
if(k==null)throw A.O("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.als(s,D.d33,r.b(k.h(0,"cover"))?A.Z(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.O("There is no page to change.")
h=A.R(s,x.fz)
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
return A.b(m.$1(f+B.Q.aj(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aei)
case 10:l=c5
k=l==null?null:F.Ov(l)
if(k==null)throw A.O(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d1(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kJ(a5,a2.k("kJ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a6(a9)
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
h.m(0,i,new A.S(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bf<2>")
p=A.cy(new A.bf(h,s),new C.fgt(),s.k("F.E"),p)
p=F.a_S(A.oJ(p,3,A.a2(p).k("F.E")).aF(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.z(new A.cu(h,s),s.k("F.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a04(s,b9),$async$aei)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.als(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aei,v)},
h3a(d,e,f){return A.cg(null,B.x.j(0.65),!1,null,new C.fpl(e,f),d,null,!0,!0,x.g2)},
als:function als(d,e,f){this.a=d
this.b=e
this.c=f},
fgs:function fgs(){},
fgr:function fgr(d){this.a=d},
fgt:function fgt(){},
fpl:function fpl(d,e){this.a=d
this.b=e},
bwt(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bwt=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.be(b1,new C.f6O())){u=null
w=1
break}t=B.d.e7(b1,new C.f6P())
s=$.a1()
r=new A.rs()
q=A.Fw(r,D.aGb)
p=A.U()
p.r=B.c.gt(0)
q.bp(D.aGb,p)
o=A.U()
o.r=B.M.gt(0)
o.c=3.6
o.b=B.ak
o.d=B.bZ
o.e=B.fk
n=new C.f6U(t)
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
a3=new A.b0(s.r,B.aw,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.bj(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.av(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.b4(a3,o)}else{p=A.a([],x.v)
a3=new A.b0(s.r,B.aw,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.bj(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.av(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.b4(a3,o)}w=4
return A.b(r.pM().yk(520,160),$async$bwt)
case 4:w=3
return A.b(b3.he(B.fI),$async$bwt)
case 3:b0=b3
u=b0==null?null:J.f2(B.dz.gaL(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bwt,v)},
fe8(d){return C.hGA(d)},
hGA(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fe8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bax()
n=d.x!=null&&d.y_(null).length===0
if(d.x!=null)t=n?D.xY:D.Gm
else t=d.gRO()?D.Gm:D.aBp
w=3
return A.b(C.bwt(d.ax),$async$fe8)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akb(s)
r=A.a21(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBp}else{p.c=C.vR(q,!0)
p.b=n?D.xY:D.Gm}r.a0B(A.fyR(new C.fea(p,d,new C.feb(),t,n,o),null,D.biN,B.uY))
u=r.jz(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fe8,v)},
fkK(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fkK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fe8(d),$async$fkK)
case 3:t=f
s=B.a.i(d.b)
r=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aI(s,r,"_")
if(q.length>40)q=B.a.al(q,0,40)
u=A2.F3(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fkK,v)},
f6O:function f6O(){},
f6P:function f6P(){},
f6U:function f6U(d){this.a=d},
feb:function feb(){},
fea:function fea(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fe9:function fe9(){},
fpN(d,e){var w=0,v=A.j(x.H)
var $async$fpN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.x.j(0.55),!0,null,new C.fpR(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fpN)
case 2:return A.h(null,v)}})
return A.i($async$fpN,v)},
bz0(d,e,f,g){return C.hNN(d,e,f,g)},
hNN(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bz0=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aE(t)}catch(q){r=null}if(r==null||r.length===0){d.F(x.q).f.P(D.elc)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fpJ(g,r,f),d,null,!0,!0,x.H),$async$bz0)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bz0,v)},
fpS(d,e){var w=0,v=A.j(x.H)
var $async$fpS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fpV(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fpS)
case 2:return A.h(null,v)}})
return A.i($async$fpS,v)},
aUR:function aUR(d,e){this.c=d
this.a=e},
bX7:function bX7(){},
b6N:function b6N(d,e){this.b=d
this.a=e},
fpR:function fpR(d,e){this.a=d
this.b=e},
fpO:function fpO(d){this.a=d},
fpP:function fpP(d,e,f){this.a=d
this.b=e
this.c=f},
fpQ:function fpQ(d,e){this.a=d
this.b=e},
fpJ:function fpJ(d,e,f){this.a=d
this.b=e
this.c=f},
fpH:function fpH(d){this.a=d},
fpI:function fpI(d,e,f){this.a=d
this.b=e
this.c=f},
fpV:function fpV(d,e){this.a=d
this.b=e},
fpT:function fpT(d){this.a=d},
fpU:function fpU(d,e,f){this.a=d
this.b=e
this.c=f},
f9x(d,e){var w=0,v=A.j(x.y),u,t
var $async$f9x=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_D(d),$async$f9x)
case 3:t=g
J.n_(t,new C.f9y(e))
u=A.aeW(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$f9x,v)},
f9y:function f9y(d){this.a=d},
alz:function alz(d,e,f){this.c=d
this.d=e
this.a=f},
azy:function azy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dxt:function dxt(d,e){this.a=d
this.b=e},
dxe:function dxe(d,e){this.a=d
this.b=e},
dxh:function dxh(d,e,f){this.a=d
this.b=e
this.c=f},
dxg:function dxg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxf:function dxf(d,e){this.a=d
this.b=e},
dxi:function dxi(d,e){this.a=d
this.b=e},
dxc:function dxc(){},
dxd:function dxd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxb:function dxb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dwX:function dwX(d){this.a=d},
dwY:function dwY(d,e,f){this.a=d
this.b=e
this.c=f},
dwZ:function dwZ(d,e){this.a=d
this.b=e},
dwW:function dwW(d){this.a=d},
dx3:function dx3(d,e){this.a=d
this.b=e},
dwV:function dwV(d){this.a=d},
dx4:function dx4(d,e,f){this.a=d
this.b=e
this.c=f},
dx5:function dx5(d,e,f){this.a=d
this.b=e
this.c=f},
dwU:function dwU(d,e){this.a=d
this.b=e},
dx6:function dx6(d,e,f){this.a=d
this.b=e
this.c=f},
dwT:function dwT(d,e){this.a=d
this.b=e},
dx7:function dx7(d,e){this.a=d
this.b=e},
dwS:function dwS(d){this.a=d},
dx8:function dx8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dwQ:function dwQ(){},
dwK:function dwK(d){this.a=d},
dwL:function dwL(d){this.a=d},
dwR:function dwR(d,e){this.a=d
this.b=e},
dx9:function dx9(d,e){this.a=d
this.b=e},
dwP:function dwP(d){this.a=d},
dxa:function dxa(d){this.a=d},
dwO:function dwO(){},
dx_:function dx_(d,e){this.a=d
this.b=e},
dwN:function dwN(d){this.a=d},
dx0:function dx0(d,e,f){this.a=d
this.b=e
this.c=f},
dwM:function dwM(d,e){this.a=d
this.b=e},
dwJ:function dwJ(d,e){this.a=d
this.b=e},
dx1:function dx1(d){this.a=d},
dx2:function dx2(d,e,f){this.a=d
this.b=e
this.c=f},
dxw:function dxw(){},
dxx:function dxx(d,e){this.a=d
this.b=e},
dxu:function dxu(d){this.a=d},
dxv:function dxv(d){this.a=d},
dxq:function dxq(d,e){this.a=d
this.b=e},
dxr:function dxr(d){this.a=d},
dxj:function dxj(d,e,f){this.a=d
this.b=e
this.c=f},
dxk:function dxk(d,e,f){this.a=d
this.b=e
this.c=f},
dxl:function dxl(d,e,f){this.a=d
this.b=e
this.c=f},
dxm:function dxm(d,e,f){this.a=d
this.b=e
this.c=f},
dxn:function dxn(d,e,f){this.a=d
this.b=e
this.c=f},
dxo:function dxo(d,e,f){this.a=d
this.b=e
this.c=f},
dxp:function dxp(d,e,f){this.a=d
this.b=e
this.c=f},
dxy:function dxy(){},
dxz:function dxz(){},
dxA:function dxA(){},
dxB:function dxB(d){this.a=d},
dxs:function dxs(d,e){this.a=d
this.b=e},
fLF(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bg(J.k(u==null?"":u))
return new C.mM(t,w,v,u==null?new A.N(Date.now(),0,!1):u)},
J1(d,e){return C.hFe(d,e)},
hFe(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$J1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$J1)
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
break}o=J.d1(p,x.f)
o=A.cy(o,new C.fbL(),o.$ti.k("F.E"),x.B)
n=A.a2(o).k("a5<F.E>")
o=A.z(new A.a5(o,new C.fbM(),n),n.k("F.E"))
B.d.aY(o,new C.fbN())
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
return A.i($async$J1,v)},
zG(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aw(),$async$zG)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b4(f,new C.fou(),x.a)
r=A.z(r,r.$ti.k("ai.E"))
w=4
return A.b(t.an("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.aj(r,null)),$async$zG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zG,v)},
aMY(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aMY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J1(d,e),$async$aMY)
case 2:u=h
t=J.cB(u)
s=t.bf(u,new C.fw6(f))
if(s===-1)t.cj(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zG(d,e,u),$async$aMY)
case 3:return A.h(null,v)}})
return A.i($async$aMY,v)},
bwU(d,e,f){var w=0,v=A.j(x.H),u
var $async$bwU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J1(d,e),$async$bwU)
case 2:u=h
J.n_(u,new C.f9p(f))
w=3
return A.b(C.zG(d,e,u),$async$bwU)
case 3:return A.h(null,v)}})
return A.i($async$bwU,v)},
bx7(d,e){return C.hFd(d,e)},
hFd(a1,a2){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$bx7=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aw(),$async$bx7)
case 7:r=a4
o=B.a.i(a1.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a2))
if(q==null||q.length===0){u=D.Ki
w=1
break}p=B.Q.aC(0,q,null)
if(x.f.b(p)){o=A.Z(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aQ(o.h(0,"emblem"))
k=k==null?null:B.k.M(k)
if(k==null)k=0
if(D.AQ.am(0,o.h(0,"foil")))j=A.cJ(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a_H,o.h(0,"position"))?A.cJ(o.h(0,"position")):"middle"
g=B.d.q(D.a_e,o.h(0,"frame"))?A.cJ(o.h(0,"frame")):"double"
f=B.d.q(D.a_9,o.h(0,"texture"))?A.cJ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
o=new C.FX(n,m,l,k,j,i,h,g,f,J.k(e==null?"":e),!J.y(o.h(0,"ribbon"),!1))}else o=D.Ki
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a0=s.pop()
u=D.Ki
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bx7,v)},
a0l(d,e,f){return C.hNj(d,e,f)},
hNj(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a0l=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aw(),$async$a0l)
case 7:r=h
w=8
return A.b(r.an("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.aj(f.ad(),null)),$async$a0l)
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
return A.i($async$a0l,v)},
P4(d,e){return C.hFf(d,e)},
hFf(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$P4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$P4)
case 7:r=g
q=r.rm("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.z(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.J1(d,e),$async$P4)
case 8:if(!j.cs(g)){n=B.a.i(d.toLowerCase())
m=J.l8(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$P4)
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
return A.i($async$P4,v)},
adE(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P4(d,e),$async$adE)
case 3:s=g
r=J.a6(s)
if(r.gG(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gG(s):"main"
r.H(s,t)
w=5
return A.b(A.aw(),$async$adE)
case 5:w=4
return A.b(g.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adE)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adE,v)},
a0j(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0j=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.P4(d,e),$async$a0j)
case 2:s=h
J.hB(s,f)
w=3
return A.b(A.aw(),$async$a0j)
case 3:u=h
w=4
return A.b(u.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0j)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0j)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0j)
case 6:return A.h(null,v)}})
return A.i($async$a0j,v)},
mM:function mM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbL:function fbL(){},
fbM:function fbM(){},
fbN:function fbN(){},
fou:function fou(){},
fw6:function fw6(d){this.a=d},
f9p:function f9p(d){this.a=d},
FX:function FX(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bIw:function bIw(d){this.a=d},
hNC(d,e,f,g,h,i,j){return A.a7(d,!1).cr(A.eH(new C.fp_(j,i,f,e,h,g),!0,null,x.H))},
P0(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$P0=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P4(h,g),$async$P0)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.F(x.q).f.P(D.aI5)
u=!1
w=1
break}w=4
return A.b(C.h3a(d,f,e),$async$P0)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adE(h,g),$async$P0)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mM(""+(q+n),l,B.a.i(m.b),new A.N(Date.now(),0,!1)))}w=6
return A.b(C.zG(h,r,p),$async$P0)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.a0l(h,r,new C.FX("leather",p,"",0,"gold",25,"middle","double","leather","",!0)),$async$P0)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
fp_:function fp_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
X5:function X5(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awF:function awF(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
cZD:function cZD(d){this.a=d},
cZC:function cZC(d,e){this.a=d
this.b=e},
cZr:function cZr(d,e){this.a=d
this.b=e},
cZo:function cZo(d,e){this.a=d
this.b=e},
cZ1:function cZ1(d){this.a=d},
cZ2:function cZ2(d,e){this.a=d
this.b=e},
cZs:function cZs(d){this.a=d},
cZ8:function cZ8(d){this.a=d},
cZ6:function cZ6(d){this.a=d},
cZ7:function cZ7(d){this.a=d},
cZ9:function cZ9(d){this.a=d},
cZp:function cZp(d){this.a=d},
cZq:function cZq(){},
cZa:function cZa(d){this.a=d},
cZb:function cZb(d,e){this.a=d
this.b=e},
cZB:function cZB(d){this.a=d},
cZA:function cZA(d,e){this.a=d
this.b=e},
cZz:function cZz(d){this.a=d},
cZl:function cZl(d){this.a=d},
cZk:function cZk(d){this.a=d},
cZm:function cZm(d){this.a=d},
cZ3:function cZ3(d,e){this.a=d
this.b=e},
cZn:function cZn(d,e){this.a=d
this.b=e},
cZe:function cZe(d){this.a=d},
cZf:function cZf(d){this.a=d},
cZd:function cZd(){},
cZg:function cZg(d){this.a=d},
cZh:function cZh(d){this.a=d},
cZi:function cZi(d,e){this.a=d
this.b=e},
cZj:function cZj(d,e,f){this.a=d
this.b=e
this.c=f},
cZc:function cZc(d,e){this.a=d
this.b=e},
cZu:function cZu(d){this.a=d},
cZt:function cZt(){},
cZv:function cZv(d){this.a=d},
cZw:function cZw(d){this.a=d},
cZx:function cZx(d){this.a=d},
cZy:function cZy(d,e){this.a=d
this.b=e},
cZ4:function cZ4(d){this.a=d},
cZ5:function cZ5(d){this.a=d},
X9:function X9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baF:function baF(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d03:function d03(d){this.a=d},
d04:function d04(d){this.a=d},
d02:function d02(d){this.a=d},
d05:function d05(d){this.a=d},
d01:function d01(d){this.a=d},
d06:function d06(d){this.a=d},
d00:function d00(d){this.a=d},
d07:function d07(d,e){this.a=d
this.b=e},
d0_:function d0_(d,e){this.a=d
this.b=e},
d08:function d08(d,e){this.a=d
this.b=e},
X7:function X7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ac8:function ac8(d,e,f){this.a=d
this.b=e
this.c=f},
awG:function awG(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cZS:function cZS(d,e){this.a=d
this.b=e},
cZR:function cZR(d,e){this.a=d
this.b=e},
cZW:function cZW(d){this.a=d},
cZV:function cZV(d,e){this.a=d
this.b=e},
cZT:function cZT(d){this.a=d},
cZU:function cZU(d){this.a=d},
cZX:function cZX(d){this.a=d},
cZY:function cZY(d){this.a=d},
cZQ:function cZQ(d,e){this.a=d
this.b=e},
cZP:function cZP(d,e){this.a=d
this.b=e},
NO:function NO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wn:function Wn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cyu:function cyu(d){this.a=d},
cyv:function cyv(){},
cyw:function cyw(d){this.a=d},
b7Y:function b7Y(d,e,f){this.b=d
this.c=e
this.a=f},
b7P:function b7P(d,e){this.b=d
this.a=e},
tz:function tz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WG:function WG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7W:function b7W(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cRW:function cRW(d,e,f){this.a=d
this.b=e
this.c=f},
cRV:function cRV(d,e){this.a=d
this.b=e},
cSk:function cSk(d){this.a=d},
cS7:function cS7(){},
cSl:function cSl(d){this.a=d},
cS6:function cS6(){},
cSm:function cSm(d,e){this.a=d
this.b=e},
cS5:function cS5(d,e){this.a=d
this.b=e},
cSn:function cSn(d,e){this.a=d
this.b=e},
cS4:function cS4(d,e){this.a=d
this.b=e},
cSo:function cSo(d){this.a=d},
cS3:function cS3(){},
cSp:function cSp(d,e){this.a=d
this.b=e},
cS2:function cS2(d,e){this.a=d
this.b=e},
cSq:function cSq(d){this.a=d},
cSf:function cSf(d,e){this.a=d
this.b=e},
cSr:function cSr(d){this.a=d},
cSs:function cSs(d){this.a=d},
cSu:function cSu(d){this.a=d},
cSv:function cSv(d){this.a=d},
cSe:function cSe(d,e){this.a=d
this.b=e},
cSw:function cSw(d,e){this.a=d
this.b=e},
aDv:function aDv(d){this.a=d},
bd7:function bd7(d){this.a=d},
b6b:function b6b(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
hEf(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.af6(a6),a5=a4.length
if(a5===0)return""
w=A.R(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.N(Date.now(),0,!1))
s=new C.f9Y(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a5<1>"),q=q.k("cQ<1,n>"),o=q.k("F.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wB)m.push(l===D.Wo?"male":"female")
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
m.push("child of "+l+k)}a0=A.z(new A.cQ(new A.a5(a4,new C.f9W(u,f),p),new C.f9X(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aF(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aF(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.al(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hEg(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.af6(a0),d=e.length
if(d===0)return""
w=x.N
v=A.R(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.fa2(v,e)
q=new C.fa0(v)
p=A.R(w,x.S)
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
d=A.d8(new A.bf(p,d),d.k("F.E"))
n=A.z(d,A.a2(d).k("ck.E"))
B.d.fv(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.hX(l,new C.fa1(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aF(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hqA(d,e,f,g){var w,v,u=C.hEh(d,e)
if(u<=0||f.length<=u)return new A.abK(!1,D.AE,f)
if(g.q(0,e.a))return new A.abK(!1,D.AE,f)
w=A.T(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dz(0)
return new A.abK(!0,A.dc(f,u,null,w).dz(0),v)},
hqB(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.af6(d3),d2=d1.length
if(d2===0)return D.f2w
w=x.N
v=A.R(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d_4(t))}s=new C.d_l(v)
d2=x.h
r=A.R(w,d2)
q=new C.d_d(r)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d_c(r)
l=A.R(w,x.do)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.cg(0,k,new C.d_5()),o)}h=new C.d_b(s)
g=new C.d_a(l,r)
p=v.$ti.k("bf<2>")
o=p.k("a5<F.E>")
f=A.z(new A.a5(new A.bf(v,p),new C.d_6(h),o),o.k("F.E"))
e=f.length===0?new A.bf(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.J)(f),++u){t=f[u]
a0=g.$2(t.a,A.aZ(w))
if(a0>d){d=a0
e=t}}a1=A.aZ(w)
p=x.S
a2=A.R(w,p)
a3=A.R(w,w)
a4=A.R(w,d2)
d2=x.gR
a5=A.R(w,d2)
a6=A.R(w,x.d9)
a7=A.R(w,d2)
a8=A.a([],x.s)
a9=new C.d_j(new C.d_f(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.R(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dw(v,v.r,v.e),j=a2.gahq(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eO([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.H(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qD(J.dF(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.R(w,x.cc)
b5=A.a([],x.M)
b6=A.R(w,d2)
b7=new C.d_3(a2,new C.d_k(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.J)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dw(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cu<1>")
d2=A.z(new A.cu(b4,d2),d2.k("F.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.Ef(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ii(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.z(new A.cu(b6,d2),d2.k("F.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bD(0,new C.d_7(c6,b4))
for(d2=new A.cN(a4,a4.$ti.k("cN<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.hX(j,new C.d_8(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aY(o,new C.d_9())
c6.push(new C.aFA(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bap(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
fZZ(d){var w=A.ad("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fUt(d,e,f,g,h,i,j,k,l,m,n){return new C.XJ(k,f,j,e,l,n,m,d,g,h,i,null)},
ayz(d,e,f,g,h,i,j){return new C.be3(i,d,e,f,j,h,g,null)},
amF:function amF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA8:function aA8(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dKm:function dKm(d){this.a=d},
dKl:function dKl(d){this.a=d},
dKo:function dKo(d,e){this.a=d
this.b=e},
dKp:function dKp(d,e){this.a=d
this.b=e},
dKq:function dKq(d){this.a=d},
dKk:function dKk(d,e){this.a=d
this.b=e},
dKn:function dKn(d){this.a=d},
dKs:function dKs(d){this.a=d},
dKr:function dKr(d,e){this.a=d
this.b=e},
amz:function amz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA5:function aA5(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dJN:function dJN(d){this.a=d},
dJL:function dJL(d){this.a=d},
dJM:function dJM(d){this.a=d},
dJO:function dJO(d,e){this.a=d
this.b=e},
dJI:function dJI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJg:function dJg(d){this.a=d},
dJh:function dJh(d,e){this.a=d
this.b=e},
dJv:function dJv(d){this.a=d},
dJt:function dJt(d){this.a=d},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJw:function dJw(d){this.a=d},
dJx:function dJx(d,e){this.a=d
this.b=e},
dJH:function dJH(d,e){this.a=d
this.b=e},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJE:function dJE(d,e){this.a=d
this.b=e},
dJA:function dJA(d,e){this.a=d
this.b=e},
dJz:function dJz(d){this.a=d},
dJB:function dJB(d,e){this.a=d
this.b=e},
dJy:function dJy(d){this.a=d},
dJC:function dJC(d){this.a=d},
dJD:function dJD(d){this.a=d},
dJG:function dJG(d,e){this.a=d
this.b=e},
dJ4:function dJ4(d,e){this.a=d
this.b=e},
dJ5:function dJ5(d,e){this.a=d
this.b=e},
dJQ:function dJQ(d,e,f){this.a=d
this.b=e
this.c=f},
dJK:function dJK(d,e,f){this.a=d
this.b=e
this.c=f},
dJJ:function dJJ(d){this.a=d},
dJ6:function dJ6(d){this.a=d},
dJ7:function dJ7(d){this.a=d},
dJ8:function dJ8(){},
dJ9:function dJ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJd:function dJd(d,e){this.a=d
this.b=e},
dJc:function dJc(d,e){this.a=d
this.b=e},
dJb:function dJb(d){this.a=d},
dJe:function dJe(d,e){this.a=d
this.b=e},
dJa:function dJa(d){this.a=d},
dJP:function dJP(d){this.a=d},
dJq:function dJq(){},
dJr:function dJr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJp:function dJp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJl:function dJl(d,e,f){this.a=d
this.b=e
this.c=f},
dJk:function dJk(d,e,f){this.a=d
this.b=e
this.c=f},
dJi:function dJi(d,e){this.a=d
this.b=e},
dJm:function dJm(d){this.a=d},
dJn:function dJn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJj:function dJj(d,e){this.a=d
this.b=e},
dJo:function dJo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJs:function dJs(d,e){this.a=d
this.b=e},
dJX:function dJX(){},
dJY:function dJY(d,e){this.a=d
this.b=e},
dJZ:function dJZ(d){this.a=d},
dK_:function dK_(d,e){this.a=d
this.b=e},
dJT:function dJT(d){this.a=d},
dJR:function dJR(d,e){this.a=d
this.b=e},
dJU:function dJU(d,e){this.a=d
this.b=e},
dJV:function dJV(d,e){this.a=d
this.b=e},
dJW:function dJW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dK0:function dK0(d){this.a=d},
dJS:function dJS(d){this.a=d},
dJf:function dJf(d){this.a=d},
ban:function ban(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d_1:function d_1(d){this.a=d},
d_0:function d_0(d,e){this.a=d
this.b=e},
d_2:function d_2(d){this.a=d},
d__:function d__(d,e){this.a=d
this.b=e},
f9Y:function f9Y(d,e){this.a=d
this.b=e},
f9Z:function f9Z(d){this.a=d},
fa_:function fa_(){},
f9W:function f9W(d,e){this.a=d
this.b=e},
f9X:function f9X(){},
fa2:function fa2(d,e){this.a=d
this.b=e},
fa3:function fa3(d){this.a=d},
fa4:function fa4(){},
fa0:function fa0(d){this.a=d},
fa1:function fa1(d,e){this.a=d
this.b=e},
Ii:function Ii(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ef:function Ef(d,e){this.a=d
this.b=e},
bap:function bap(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_4:function d_4(d){this.a=d},
d_l:function d_l(d){this.a=d},
d_d:function d_d(d){this.a=d},
d_e:function d_e(){},
d_c:function d_c(d){this.a=d},
d_5:function d_5(){},
d_b:function d_b(d){this.a=d},
d_a:function d_a(d,e){this.a=d
this.b=e},
d_6:function d_6(d){this.a=d},
d_f:function d_f(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_g:function d_g(d){this.a=d},
d_h:function d_h(d){this.a=d},
d_i:function d_i(){},
d_j:function d_j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_k:function d_k(){},
d_3:function d_3(d,e,f,g,h,i,j,k,l,m){var _=this
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
d_7:function d_7(d,e){this.a=d
this.b=e},
d_8:function d_8(d){this.a=d},
d_9:function d_9(){},
aFA:function aFA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baq:function baq(d,e){this.b=d
this.a=e},
d_m:function d_m(){},
d_n:function d_n(d){this.a=d},
d_o:function d_o(d){this.a=d},
d_p:function d_p(){},
be4:function be4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9w:function b9w(d,e){this.b=d
this.a=e},
brt:function brt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eUQ:function eUQ(d){this.a=d},
bhl:function bhl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ewv:function ewv(d){this.a=d},
ewu:function ewu(d,e){this.a=d
this.b=e},
XJ:function XJ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayx:function ayx(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
deC:function deC(d,e){this.a=d
this.b=e},
deB:function deB(d){this.a=d},
dez:function dez(d){this.a=d},
deA:function deA(d){this.a=d},
deL:function deL(d){this.a=d},
deM:function deM(d){this.a=d},
deK:function deK(d,e){this.a=d
this.b=e},
deN:function deN(){},
deQ:function deQ(d){this.a=d},
deJ:function deJ(d,e){this.a=d
this.b=e},
deP:function deP(){},
deR:function deR(d){this.a=d},
deI:function deI(d,e){this.a=d
this.b=e},
deS:function deS(d){this.a=d},
deH:function deH(d){this.a=d},
deT:function deT(d){this.a=d},
deG:function deG(d){this.a=d},
deU:function deU(d){this.a=d},
deF:function deF(d){this.a=d},
deV:function deV(d){this.a=d},
deE:function deE(d){this.a=d},
deW:function deW(d){this.a=d},
deD:function deD(d,e){this.a=d
this.b=e},
deO:function deO(d){this.a=d},
aaC:function aaC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be3:function be3(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaB:function aaB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
be2:function be2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
deX:function deX(d){this.a=d},
deY:function deY(d,e){this.a=d
this.b=e},
ayy:function ayy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aED:function aED(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaD:function aaD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
df6:function df6(d){this.a=d},
I7:function I7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fPs(d){var w=d.R,v=x.N
return w.iC(w,new C.c2C(),v,v)},
hif(d){var w=d.by
if(w>=0)return w
return 5},
fPu(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fPs(d).h(0,v)
if(w==null||w.length===0)return null
return A.bg(w)},
fPt(d,e){var w=C.fPu(d,e)
if(w!=null&&w.c9(new A.N(Date.now(),0,!1)))return!0
return!1},
hig(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Z(C.fPs(d),w,w)
u=C.fPu(d,e)
t=u!=null&&u.c9(new A.N(Date.now(),0,!1))?u:new A.N(Date.now(),0,!1)
v.m(0,s,t.bL(A.dB(30,0,0,0,0,0).a).a4().aa())
d.R=v},
aWg(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWg=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.kZ(t,B.Ga),$async$aWg)
case 3:if(l){u=!0
w=1
break}u=A.kD(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ga,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWg,v)},
c2C:function c2C(){},
hid(){var w,v=$.oX(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aG(32)]
return"FT"+B.d.fL(u)},
GQ(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$GQ)
case 3:if(!e){u=A.R(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_family_tree_backup_codes_v1",null,!1,B.bD),$async$GQ)
case 8:r=e
if(r==null){u=A.R(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.Z(q,x.N,x.z)
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
case 7:u=A.R(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GQ,v)},
a4P(d){return C.hie(d)},
hie(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a4P=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$a4P)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hs("ngmy_family_tree_backup_codes_v1",A.D(["codes",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$a4P)
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
return A.i($async$a4P,v)},
c2B(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c2B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GQ(),$async$c2B)
case 3:t=m.jj(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a6(q)
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
return A.i($async$c2B,v)},
Lz(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Lz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c2B(d),$async$Lz)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.GQ(),$async$Lz)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.Z(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,t,o)
w=9
return A.b(C.a4P(s),$async$Lz)
case 9:case 8:u=t
w=1
break
case 5:n=C.hid()
w=10
return A.b(C.GQ(),$async$Lz)
case 10:s=f
J.aE(s,n,A.D(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=11
return A.b(C.a4P(s),$async$Lz)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lz,v)},
aWf(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GQ(),$async$aWf)
case 3:t=f
for(s=J.df(t),r=s.gdH(t),r=r.dz(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a4P(t),$async$aWf)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWf,v)},
a4Q(d,e,f){var w=0,v=A.j(x.H),u
var $async$a4Q=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amE(d,e),$async$a4Q)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Lz(d),$async$a4Q)
case 7:w=4
break
case 5:w=8
return A.b(C.aWf(d),$async$a4Q)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a4Q,v)},
amy(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amy=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amE(f,e),$async$amy)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bV(),$async$amy)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GQ(),$async$amy)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a6(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amy,v)},
aWe(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bV(),$async$aWe)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GQ(),$async$aWe)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a6(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWe,v)},
hih(){var w,v=$.oX(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aG(32)]
return"FT"+B.d.fL(u)},
amB(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$amB)
case 3:if(!g){u=null
w=1
break}t=C.hih()
w=4
return A.b(A.SY(),$async$amB)
case 4:s=g
r=B.dB.aE(B.Q.aj(d.eD(),null))
r=B.cM.gcq().aE(r)
q=e?999:2
J.aE(s,t,A.D(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(A.a4R(s),$async$amB)
case 5:p=e?999:2
u=new A.YT("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amB,v)},
amA(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amA=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.SY(),$async$amA)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aQ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aWe(J.k(l==null?"":l),j),$async$amA)
case 4:if(!a0)$.ak.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.c0.c4(0,B.cw.aE(t))
s=C.fPv(r)}catch(f){q=A.a4(f)
$.ak.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dR(A.Z(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=5
return A.b(A.a4R(p),$async$amA)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amA,v)},
fPv(d){var w,v,u,t,s=null
try{w=B.Q.aC(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hij(A.Z(w,x.N,x.z))
return u}catch(t){v=A.a4(t)
$.ak.$1("[family tree sync] parse: "+A.t(v))
return s}},
fzW(d){var w=0,v=A.j(x.m),u,t,s
var $async$fzW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amA(t[1])
w=1
break}u=null
w=1
break}u=C.fPv(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzW,v)},
hij(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d1(v,x.f)
u=A.cy(u,new C.c2E(),u.$ti.k("F.E"),x.k)
t=A.a2(u).k("a5<F.E>")
s=A.z(new A.a5(u,new C.c2F(),t),t.k("F.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bg(J.k(u==null?"":u))
if(r==null)r=new A.N(Date.now(),0,!1)
q=A.R(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jj(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d1(l,u)
n=A.cy(n,new C.c2G(),n.$ti.k("F.E"),o)
k=A.a2(n).k("a5<F.E>")
j=A.z(new A.a5(n,new C.c2H(),k),k.k("F.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amC(h,w,s,r,q)},
amE(d,e){var w=0,v=A.j(x.y),u,t
var $async$amE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Lr(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zv(d),$async$amE)
case 3:u=t.cs(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amE,v)},
c2N(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c2N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zv(d),$async$c2N)
case 3:t=s.b4(f,new C.c2O(),x.cs)
t=A.z(t,t.$ti.k("ai.E"))
B.d.aY(t,new C.c2P())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2N,v)},
SZ(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$SZ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amE(e,d),$async$SZ)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Lz(e),$async$SZ)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zv(e),$async$SZ)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dF(r,new C.c2L(g))
r=A.z(t,t.$ti.k("F.E"))}t=J.a6(r)
if(t.gah(r)){u=null
w=1
break}t=t.di(r,new C.c2M(e),x.k)
r=A.z(t,t.$ti.k("ai.E"))
q=A.R(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.J1(e,o),$async$SZ)
case 14:n=i
if(J.cs(n))q.m(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.amC(s,B.a.i(e.toLowerCase()),r,new A.N(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SZ,v)},
aWj(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SZ(d,e,f,g),$async$aWj)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aI(t,s,"_")
r=q.a
u=A.EU(A.Ie(q.eD(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWj,v)},
aWi(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWi=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SZ(d,e,f,g),$async$aWi)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amB(r,f),$async$aWi)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCE(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWi,v)},
T_(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T_=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fzW(a0),$async$T_)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amy(g.a,d,e,f,s,r),$async$T_)
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
return A.b(C.bwL(e,j),$async$T_)
case 12:case 11:w=13
return A.b(C.aeU(e,j,s),$async$T_)
case 13:h=n.h(0,i)
w=h!=null&&J.cs(h)?14:15
break
case 14:w=16
return A.b(C.zG(e,i,h),$async$T_)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bkQ(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T_,v)},
amC:function amC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2J:function c2J(){},
c2K:function c2K(){},
c2I:function c2I(){},
c2E:function c2E(){},
c2F:function c2F(){},
c2G:function c2G(){},
c2H:function c2H(){},
c2O:function c2O(){},
c2P:function c2P(){},
c2L:function c2L(d){this.a=d},
c2M:function c2M(d){this.a=d},
fI_(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hl(d,new C.amD(w,e,g,i,f,h,null),!0,null,x.H)},
cZZ(d,e,f,g,h,i,j,k){return new C.bam(i,e,k,j,g,f,h,d,null)},
amD:function amD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA7:function aA7(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dK9:function dK9(d){this.a=d},
dKa:function dKa(d,e,f){this.a=d
this.b=e
this.c=f},
dKe:function dKe(d,e){this.a=d
this.b=e},
dKf:function dKf(d){this.a=d},
dK6:function dK6(d){this.a=d},
dK7:function dK7(d,e){this.a=d
this.b=e},
dK8:function dK8(d,e){this.a=d
this.b=e},
dKd:function dKd(d){this.a=d},
dKc:function dKc(d,e){this.a=d
this.b=e},
dKb:function dKb(){},
dKh:function dKh(d){this.a=d},
dKi:function dKi(d,e){this.a=d
this.b=e},
dKg:function dKg(d,e){this.a=d
this.b=e},
d_q:function d_q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bao:function bao(d,e,f){this.d=d
this.e=e
this.a=f},
a9U:function a9U(d,e,f){this.c=d
this.d=e
this.a=f},
bam:function bam(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bar:function bar(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y3:function Y3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aA6:function aA6(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dK1:function dK1(d,e){this.a=d
this.b=e},
dK2:function dK2(d){this.a=d},
dK3:function dK3(d){this.a=d},
dK4:function dK4(d){this.a=d},
dK5:function dK5(d){this.a=d},
Y4:function Y4(d){this.a=d},
bft:function bft(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dKj:function dKj(d,e){this.a=d
this.b=e},
aUQ(d,e){return new C.aUP(d,e,null)},
aUP:function aUP(d,e,f){this.c=d
this.d=e
this.a=f},
hGF(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aU(d,11)},
hNM(d){return A.c0(B.K,null,new C.fps(new C.t5(A.K(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fRj(d,e){return new C.aps(e,d,null)},
aMF(d,e,f,g,h,i,j){var w=C.hGF(i)
if(w!=null)return A.bu(e,new A.a3(j,f,new C.a3U(w,!0,null),null),B.ap)
return I.aM1(e,B.bM,f,g,h,i,j)},
lh:function lh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3U:function a3U(d,e,f){this.c=d
this.d=e
this.a=f},
bfc:function bfc(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
dwB:function dwB(d){this.a=d},
dwC:function dwC(){},
dwD:function dwD(d,e){this.a=d
this.b=e},
bfb:function bfb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fps:function fps(d){this.a=d},
fpr:function fpr(d,e){this.a=d
this.b=e},
fpq:function fpq(d,e){this.a=d
this.b=e},
fpp:function fpp(d,e){this.a=d
this.b=e},
aps:function aps(d,e,f){this.c=d
this.d=e
this.a=f},
cad:function cad(d,e){this.a=d
this.b=e},
aHU:function aHU(){},
hNx(d){var w=null
return A.cg(w,w,!0,w,new C.foS(),d,w,!0,!0,x.e2)},
hOH(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.fvZ(h,g,f,e),d,w,!0,!0,x.N)},
hNz(d,e){var w=null
return A.cg(w,w,!0,w,new C.foU(e),d,w,!0,!0,x.dY)},
hNy(d){var w=null
return A.cg(w,w,!0,w,new C.foT(),d,w,!0,!0,x.c5)},
aPw:function aPw(d,e){this.a=d
this.b=e},
aPv:function aPv(d){this.a=d},
aNA:function aNA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foS:function foS(){},
fvZ:function fvZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foU:function foU(d){this.a=d},
foT:function foT(){},
WI:function WI(d,e){this.c=d
this.a=e},
avs:function avs(){var _=this
_.d=$
_.c=_.a=_.e=null},
cSI:function cSI(d){this.a=d},
cSJ:function cSJ(d){this.a=d},
cSH:function cSH(d,e){this.a=d
this.b=e},
cSK:function cSK(d){this.a=d},
cSL:function cSL(d){this.a=d},
WH:function WH(d){this.a=d},
avr:function avr(){this.d=$
this.c=this.a=null},
cSE:function cSE(d){this.a=d},
cSF:function cSF(d){this.a=d},
cSG:function cSG(d){this.a=d},
We:function We(d){this.a=d},
aud:function aud(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cqr:function cqr(){},
cqx:function cqx(d){this.a=d},
cqy:function cqy(d){this.a=d},
cqz:function cqz(d){this.a=d},
cqw:function cqw(){},
cqA:function cqA(d){this.a=d},
cqB:function cqB(d){this.a=d},
cqv:function cqv(){},
cqC:function cqC(d,e){this.a=d
this.b=e},
cqu:function cqu(d,e){this.a=d
this.b=e},
cqs:function cqs(d,e){this.a=d
this.b=e},
cqD:function cqD(d){this.a=d},
cqt:function cqt(){},
cqE:function cqE(d){this.a=d},
ZM:function ZM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brl:function brl(){this.d=$
this.c=this.a=null},
eUi:function eUi(d,e){this.a=d
this.b=e},
eUj:function eUj(d){this.a=d},
eUk:function eUk(d,e){this.a=d
this.b=e},
a8Y:function a8Y(d,e){this.a=d
this.b=e},
E3:function E3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brj:function brj(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eUg:function eUg(d,e){this.a=d
this.b=e},
au6:function au6(d,e){this.c=d
this.a=e},
brk:function brk(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eUh:function eUh(d){this.a=d},
bri:function bri(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aK_:function aK_(){},
aK0:function aK0(){},
byD(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bK(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.od(B.o.u(t),A.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fnL(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VE(A.dr(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMi(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hQ().kA(85,1280,B.et),$async$aMi)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aMi)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.fRi()
w=9
return A.b(C.cac(q,r),$async$aMi)
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
return A.i($async$aMi,v)},
aMD(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aMD=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.ca9(g)
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
return A.b($.a1().K0(p,!0,null,i).cJ(0,B.fE),$async$aMD)
case 9:n=a1
w=10
return A.b(n.lS(),$async$aMD)
case 10:m=a1
w=11
return A.b(J.aNm(m).he(B.fI),$async$aMD)
case 11:l=a1
J.aNm(m).p()
if(l==null){w=8
break}i=J.f2(B.dz.gaL(l))
k="data:image/png;base64,"+B.cM.gcq().aE(i)
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
return A.i($async$aMD,v)},
fnL:function fnL(){},
t5:function t5(d){this.a=d},
apr:function apr(d,e,f){this.c=d
this.d=e
this.a=f},
aBy:function aBy(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
etF:function etF(d,e){this.a=d
this.b=e},
etw:function etw(d){this.a=d},
etx:function etx(d){this.a=d},
etD:function etD(d,e){this.a=d
this.b=e},
etC:function etC(d,e){this.a=d
this.b=e},
etz:function etz(d,e){this.a=d
this.b=e},
ety:function ety(d,e){this.a=d
this.b=e},
etA:function etA(d){this.a=d},
etB:function etB(d,e){this.a=d
this.b=e},
etE:function etE(d,e){this.a=d
this.b=e},
etr:function etr(d,e){this.a=d
this.b=e},
etv:function etv(d){this.a=d},
etu:function etu(d,e){this.a=d
this.b=e},
ett:function ett(d){this.a=d},
etG:function etG(d,e){this.a=d
this.b=e},
etH:function etH(d,e){this.a=d
this.b=e},
ets:function ets(d,e){this.a=d
this.b=e},
h2H(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.D(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.N(Date.now(),0,!1).a4().aa(),"project",v],x.N,x.z)},
fnM(d,e,f){var w=0,v=A.j(x.N),u
var $async$fnM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.aj(C.h2H(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnM,v)},
byF(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fnM(!0,d,e),$async$byF)
case 4:w=3
return A.b(r.app(g,d,e.a),$async$byF)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dB.aE(B.Q.aj(C.h2H(d,e,null),null))
u="NGMY_WS:"+B.jQ.gcq().aE(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byF,v)},
fVO(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fHI(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.cS(s,"NGMYWSSYNC2|"))return!0
if(J.cS(s,"NGMY_WS:"))return!0
if(J.eR(s,t))return!0
if(J.cS(s,"{"))try{w=B.Q.aC(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hLE(d){var w,v,u,t=C.fVO(d)
if(t==null)return null
if(C.fHI(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aU(t,w))
if(C.fHI(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aU(t,u))
if(C.fHI(v))return v}return null},
fHH(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.cS(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cS(q,"NGMY_WS:")){v=B.c0.c4(0,B.cw.aE(J.mf(q,8)))
w=t.a(B.Q.aC(0,v,r))}else w=t.a(B.Q.aC(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fCq(A.Z(u,x.N,x.z))
return t}catch(s){return r}},
byE(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$byE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apo(t[1]),$async$byE)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fHH(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fHH(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byE,v)},
fHG(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l1(w,v,d.c,d.d,new A.N(Date.now(),0,!1))},
byb(){var w=0,v=A.j(x.o),u,t
var $async$byb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.F4(),$async$byb)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fHH(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byb,v)},
h3y(d,e,f,g){return A.c0(B.K,null,new C.fvR(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fvR:function fvR(d,e,f){this.a=d
this.b=e
this.c=f},
aaY:function aaY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
etJ:function etJ(d,e){this.a=d
this.b=e},
etK:function etK(d,e){this.a=d
this.b=e},
etL:function etL(d,e){this.a=d
this.b=e},
etM:function etM(d,e){this.a=d
this.b=e},
etI:function etI(d){this.a=d},
apl:function apl(d,e,f){this.c=d
this.d=e
this.a=f},
bgP:function bgP(){var _=this
_.c=_.a=_.e=_.d=null},
etm:function etm(d,e){this.a=d
this.b=e},
etn:function etn(d){this.a=d},
eto:function eto(d){this.a=d},
apq:function apq(d){this.a=d},
aBx:function aBx(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
etq:function etq(d){this.a=d},
etp:function etp(d){this.a=d},
hlq(d,e,f,g,h){return new C.Mb(h,g,d,e,f,null)},
aGh:function aGh(d,e){this.a=d
this.b=e},
Mb:function Mb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBz:function aBz(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eu8:function eu8(){},
eu4:function eu4(d,e){this.a=d
this.b=e},
eu5:function eu5(d){this.a=d},
etQ:function etQ(d){this.a=d},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
etZ:function etZ(d,e){this.a=d
this.b=e},
etW:function etW(d,e){this.a=d
this.b=e},
etX:function etX(d,e){this.a=d
this.b=e},
etY:function etY(d,e,f){this.a=d
this.b=e
this.c=f},
etU:function etU(d,e,f){this.a=d
this.b=e
this.c=f},
etS:function etS(d){this.a=d},
etT:function etT(d){this.a=d},
etV:function etV(d){this.a=d},
eub:function eub(d){this.a=d},
eua:function eua(d){this.a=d},
euc:function euc(d){this.a=d},
eu9:function eu9(d){this.a=d},
etN:function etN(d){this.a=d},
etR:function etR(d,e){this.a=d
this.b=e},
eu7:function eu7(d,e){this.a=d
this.b=e},
eu6:function eu6(d,e){this.a=d
this.b=e},
eu1:function eu1(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e,f){this.a=d
this.b=e
this.c=f},
bt3:function bt3(){},
zn(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ad("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aI(v,w,"_")},
adn(d,e,f){return C.hAx(d,e,f)},
hAx(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adn=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.an("String",e,f),$async$adn)
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
return A.i($async$adn,v)},
adm(d,e){return C.hAw(d,e)},
hAw(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adm=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adm)
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
return A.i($async$adm,v)},
hzl(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QP(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bvM(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bvM=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZv(q),$async$bvM)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aMD(q,!1),$async$bvM)
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
return A.i($async$bvM,v)},
h9l(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qo(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qo(p,J.k(u==null?"":u),1,o,q)},
fCq(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d1(s,x.f)
w=A.cy(w,new C.cpQ(),w.$ti.k("F.E"),x.Q)
v=A.a2(w).k("a5<F.E>")
r=A.z(new A.a5(w,new C.cpR(),v),v.k("F.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bg(J.k(t==null?"":t))
return new C.l1(w,v,u,r,t==null?new A.N(Date.now(),0,!1):t)},
hEb(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wo
case"female":case"f":return D.aeu
default:return D.wB}},
h_p(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fLG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hEb(v==null?j:J.k(v))
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
return new C.hP(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hEd(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Kj
case"viewer":return D.jY
default:return D.rK}},
hEe(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
EV(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bx0(d,e){return B.a.i(e.toLowerCase())===C.EV(d,e)&&d.y!==D.jY},
ti(d,e){var w,v=d.y
if(v===D.jY)return!1
w=B.a.i(e.toLowerCase())
if(w===C.EV(d,e))return!0
if(v===D.Kj)return!0
v=d.e
return new A.I(v,A.fHM(),A.T(v).k("I<1,n>")).q(0,w)},
hDF(d){return J.dF(d,new C.f9h()).gG(0)},
fwd(d){var w=0,v=A.j(x.y),u,t
var $async$fwd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zv(d),$async$fwd)
case 3:u=t.rj(f,new C.fwe(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwd,v)},
bwL(d,e){var w=0,v=A.j(x.H),u,t
var $async$bwL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zv(d),$async$bwL)
case 3:t=g
if(J.rj(t,new C.f8t(e))){w=1
break}if(C.hDF(t)>=2)throw A.O(A.b9("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bwL,v)},
ahV(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d1(n,x.f)
w=A.cy(w,new C.bIx(),w.$ti.k("F.E"),x.P)
v=A.a2(w).k("a5<F.E>")
m=A.z(new A.a5(w,new C.bIy(),v),v.k("F.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b4(u,new C.bIz(),x.N)
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
return new C.kl(l,w,v,!s,t,m,r,q,p,C.hEd(o==null?null:J.k(o)))},
h_y(d){var w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.al(v,0,8)},
BA(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Py(d),$async$BA)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aw(),$async$BA)
case 4:t=f
w=5
return A.b(t.a3v(0),$async$BA)
case 5:w=6
return A.b(C.f0D(t,l),$async$BA)
case 6:s=f
if(J.cs(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aR(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fWm(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oc(l,n),$async$BA)
case 11:u=n
w=1
break
case 10:case 8:m=A.aR(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fWm(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oc(l,n),$async$BA)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BA,v)},
f0D(d,e){return C.hwU(d,e)},
hwU(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f0D=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aR(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zn(a9)))
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
break}m=A.aR(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zn(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aC(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fCq(A.Z(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aR(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zn(a9)+"_"+n))
i=C.hzl(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZv(h),$async$f0D)
case 17:g=b1
if(g!=null){i=i.QP(g)
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
case 8:J.PH(q,new C.f0E())
if(p&&J.aa(q)!==0)C.oc(a9,q)
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
return A.i($async$f0D,v)},
bxa(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Py(d),$async$bxa)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BA(r),$async$bxa)
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
return A.i($async$bxa,v)},
fWm(d){var w,v,u,t
try{w=B.Q.aC(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d1(w,x.f)
v=A.cy(v,new C.eXw(),v.$ti.k("F.E"),x.i)
u=A.a2(v).k("a5<F.E>")
v=A.z(new A.a5(v,new C.eXx(),u),u.k("F.E"))
B.d.aY(v,new C.eXy())
return v}catch(t){v=A.a([],x.D)
return v}},
oc(d,e){return C.hNn(d,e)},
hNn(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oc=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Py(b2),$async$oc)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aw(),$async$oc)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zn(a8)
p=A.aR(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b4(x.j.a(B.Q.aC(0,p,null)),new C.foJ(),a2).fF(0)
a2=J.b4(b3,new C.foK(),a2).bZ(0,new C.foL())
n=A.d8(a2,a2.$ti.k("F.E"))
a2=o,a2=A.ef(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eR(n,m)?17:18
break
case 17:a5=C.zn(a8)
l=A.aR(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a65(l),$async$oc)
case 19:t=21
a5=C.zn(a8)
k=A.aR(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aC(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a65(a5==null?null:J.k(a5)),$async$oc)
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
return A.b(C.adm(r,"ngmy_worksheet_item_v3_"+C.zn(a8)+"_"+m),$async$oc)
case 29:w=30
return A.b(C.adm(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+m),$async$oc)
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
return A.b(C.bvM(h),$async$oc)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adn(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4,f),$async$oc)
case 40:g=i.QP(f)
w=38
break
case 39:$.ak.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adm(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4),$async$oc)
case 41:g=i.QP(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adm(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4),$async$oc)
case 42:case 34:a4=i.a
w=43
return A.b(C.adn(r,"ngmy_worksheet_item_v3_"+C.zn(a8)+"_"+a4,B.Q.aj(g.ad(),null)),$async$oc)
case 43:e=b5
if(!e){$.ak.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adn(r,"ngmy_worksheets_index_v3_"+C.zn(a8),B.Q.aj(q,null)),$async$oc)
case 44:d=b5
if(!d){$.ak.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eC(b3,new C.foM(q))
a4=a3.$ti.k("cQ<1,a0<n,@>>")
a7=A.z(new A.cQ(a3,new C.foN(),a4),a4.k("F.E"))
a0=a7
w=45
return A.b(C.adn(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.aj(a0,null)),$async$oc)
case 45:w=46
return A.b(J.h8r(r),$async$oc)
case 46:if(a2.gcf(b3)&&J.aa(q)===0){u=!1
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
return A.i($async$oc,v)},
Js(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Js=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BA(d),$async$Js)
case 3:t=g
s=J.cB(t)
r=s.bf(t,new C.fwc(e))
if(r===-1)s.cj(t,0,e)
else s.m(t,r,e)
u=C.oc(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Js,v)},
bwY(d,e){var w=0,v=A.j(x.H),u
var $async$bwY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BA(d),$async$bwY)
case 2:u=g
J.n_(u,new C.f9J(e))
w=3
return A.b(C.oc(d,u),$async$bwY)
case 3:return A.h(null,v)}})
return A.i($async$bwY,v)},
EX(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$EX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$EX)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aR(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aC(0,i,null)
if(x.j.b(t)){j=J.d1(t,x.f)
j=A.cy(j,new C.fbR(),j.$ti.k("F.E"),x.k)
s=A.a2(j).k("a5<F.E>")
r=A.z(new A.a5(j,new C.fbS(),s),s.k("F.E"))
B.d.aY(r,new C.fbT())
k=r}}catch(h){}w=4
return A.b(C.eYe(d),$async$EX)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hxg(k,p,d)
j=A.T(o)
s=j.k("I<1,a0<n,@>>")
s=A.z(new A.I(o,new C.fbU(),s),s.k("ai.E"))
n=B.Q.aj(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OJ(d,o),$async$EX)
case 7:case 6:j=j.k("a5<1>")
m=A.z(new A.a5(o,new C.fbV(d),j),j.k("F.E"))
if(m.length!==0)C.aLe(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$EX,v)},
fov(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fov=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OJ(d,e),$async$fov)
case 3:t=J.dF(e,new C.fow(d))
s=A.z(t,t.$ti.k("F.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLe(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fov,v)},
a0q(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aw(),$async$a0q)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aR(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aC(0,l,null)
if(x.j.b(u)){m=J.d1(u,x.f)
m=A.cy(m,new C.fw7(),m.$ti.k("F.E"),x.k)
t=A.a2(m).k("a5<F.E>")
s=A.z(new A.a5(m,new C.fw8(),t),t.k("F.E"))
o=s}}catch(k){}q=J.pJ(o,new C.fw9(e))
if(B.a.i(e.x).length===0&&C.ti(e,d)){m=B.a.i(d.toLowerCase())
p=e.azT(e.y===D.jY?D.jY:D.rK,m)}else p=e
if(q===-1)J.p_(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OJ(d,o),$async$a0q)
case 3:w=C.ti(p,d)?4:5
break
case 4:w=6
return A.b(C.aLd(C.EV(p,d),p),$async$a0q)
case 6:if(!g)$.ak.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0q,v)},
aLn(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.EX(d),$async$aLn)
case 2:u=g
t=J.cB(u)
s=A.qD(t.eC(u,new C.f9q(e)))
t.bl(u,new C.f9r(e))
w=3
return A.b(C.OJ(d,u),$async$aLn)
case 3:w=s!=null&&C.bx0(s,d)?4:5
break
case 4:w=6
return A.b(C.eXA(e),$async$aLn)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLn,v)},
af6(d){var w=d.f,v=A.T(w).k("a5<1>")
w=A.z(new A.a5(w,new C.fwi(),v),v.k("F.E"))
return w},
fFt(d,e){var w,v=d.f,u=A.qD(new A.a5(v,new C.f91(e),A.T(v).k("a5<1>")))
v=C.af6(d)
w=A.T(v).k("a5<1>")
v=A.z(new A.a5(v,new C.f92(e,u),w),w.k("F.E"))
B.d.aY(v,new C.f93())
return v},
hEh(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h3A(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bf(C.fFt(d,u),new C.fw_(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hFL(d,e){var w
if(e==null||e.length===0)return 1
w=C.fFt(d,e)
if(w.length===0)return 1
return new A.I(w,new C.fcC(),A.T(w).k("I<1,H>")).fs(0,B.yM)+1},
hNg(d){var w,v=C.af6(d)
if(v.length===0)return null
w=new A.a5(v,new C.fos(),A.T(v).k("a5<1>"))
if(!w.gah(0))return w.gI(0)
return B.d.gI(v)},
hEc(d){return A.D(["id",d.a,"name",d.b,"gender",C.h_p(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hFG(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.R(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
a1.m(0,t.a,t)}s=A.a([],x.u)
r=A.aZ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.J)(a0),++u){q=a0[u]
p=q.a
r.H(0,p)
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
d=q.azO(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.czF(a1,w,a3.d,a2.y,s,a0,v)},
zv(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$zv)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aR(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aC(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d1(t,x.f)
p=A.cy(p,new C.fbO(),p.$ti.k("F.E"),x.k)
s=A.a2(p).k("a5<F.E>")
p=A.z(new A.a5(p,new C.fbP(),s),s.k("F.E"))
B.d.aY(p,new C.fbQ())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zv,v)},
aeU(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aeU=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rK:D.jY
a7=C.EV(b2,b3)
w=2
return A.b(C.zv(b1),$async$aeU)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.bf(a8,new C.fop(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bwL(b1,b2),$async$aeU)
case 5:case 4:if(b0===-1){u=b2.azT(a6,a7)
a9.cj(a8,0,u)}else{t=a9.h(a8,b0)
s=A.R(x.N,x.P)
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
s.m(0,m,l.azO(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bf<2>")
s=A.z(new A.bf(s,k),k.k("F.E"))
k=a5?D.rK:D.jY
u=t.xC(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OJ(b1,a8),$async$aeU)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLd(B.a.i(b3.toLowerCase()),u),$async$aeU)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aeU,v)},
fWI(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.N(Date.now(),0,!1).a4().aa(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("I<1,a0<n,@>>"),k=A.z(new A.I(m,C.h2P(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.D(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.D(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().aa(),"updatedAt",o],r,x.K),"createdAt",s.a4().aa(),"updatedAt",o],r,x.z)},
fWJ(d,e){var w=new A.N(Date.now(),0,!1).a4().aa(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("I<1,a0<n,@>>")
u=A.z(new A.I(u,C.h2P(),t),t.k("ai.E"))
return A.D(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().aa(),"updatedAt",w],x.N,x.z)},
hv1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ahV(A.Z(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.I(j,A.fHM(),A.T(j).k("I<1,n>")).bZ(0,new C.eY1())
t=A.z(j,j.$ti.k("F.E"))
if(u===v)s=D.rK
else s=B.d.q(t,u)?D.Kj:D.jY
return w.azT(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ahV(A.Z(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d1(q,h)
h=A.cy(h,new C.eY2(),h.$ti.k("F.E"),x.P)
p=A.a2(h).k("a5<F.E>")
o=A.z(new A.a5(h,new C.eY3(),p),p.k("F.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b4(n,new C.eY4(),x.N).bZ(0,new C.eY5())
t=A.z(h,h.$ti.k("F.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rK
else s=B.d.q(t,u)?D.Kj:D.jY
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
return new C.kl(h,r,p,!m,t,o,l,j,v,s)},
eYe(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eYe=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.eYi()
h=x.N
g=x.z
w=7
return A.b(A.iz(A.a([A.l7("family_trees","*",null,A.D(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bD),r.$2(A.l7("family_trees","*",A.D(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bD),"collaborator"),r.$2(A.l7("family_trees","*",null,A.D(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bD),"public")],x.cl),x.U),$async$eYe)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.R(h,g)
h=A.z(p,g)
l=h
J.fT(l,o)
J.fT(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.aa(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bf<2>")
h=A.cy(new A.bf(l,h),new C.eYf(a0),h.k("F.E"),x.k)
l=A.a2(h).k("a5<F.E>")
l=A.z(new A.a5(h,new C.eYg(),l),l.k("F.E"))
B.d.aY(l,new C.eYh())
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
return A.i($async$eYe,v)},
hxg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gah(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f1i(),v).bZ(0,new C.f1j())
t=A.d8(u,u.$ti.k("F.E"))
s=A.R(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.EV(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.jY){m=q.e
m=!new A.I(m,A.fHM(),A.T(m).k("I<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.m(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hFG(l,v)
o=C.EV(k,w)
p=v.d
s.m(0,u,o===w?k.b6n(p,D.rK):k.b6n(p,v.y))}j=s.$ti.k("bf<2>")
j=A.z(new A.bf(s,j),j.k("F.E"))
B.d.aY(j,new C.f1k())
return j},
OJ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$OJ)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b4(e,new C.f3k(),x.a)
s=A.z(s,s.$ti.k("ai.E"))
w=3
return A.b(u.an("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.aj(s,null)),$async$OJ)
case 3:return A.h(null,v)}})
return A.i($async$OJ,v)},
aLd(d,e){return C.hC5(d,e)},
hC5(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.ly("family_trees",A.a([C.fWI(e,d)],p),null,B.cy),$async$aLd)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.ly("family_trees",A.a([C.fWJ(e,d)],p),null,B.cy),$async$aLd)
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
return A.i($async$aLd,v)},
aLe(d,e){return C.hC6(d,e)},
hC6(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLe=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("I<1,a0<n,@>>")
m=n.k("ai.E")
l=A.z(new A.I(e,new C.f7Q(d),n),m)
r=l
w=7
return A.b(A.ly("family_trees",r,null,B.cy),$async$aLe)
case 7:q=g
if(q){u=!0
w=1
break}k=A.z(new A.I(e,new C.f7R(d),n),m)
p=k
w=8
return A.b(A.ly("family_trees",p,null,B.cy),$async$aLe)
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
return A.i($async$aLe,v)},
eXA(d){return C.huq(d)},
huq(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eXA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.P8("family_trees",A.D(["id",d],x.N,x.z),null,B.cy),$async$eXA)
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
return A.i($async$eXA,v)},
qo:function qo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l1:function l1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpT:function cpT(){},
cpS:function cpS(){},
cpQ:function cpQ(){},
cpR:function cpR(){},
FY:function FY(d,e){this.a=d
this.b=e},
hP:function hP(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ahU:function ahU(d,e){this.a=d
this.b=e},
f9h:function f9h(){},
fwe:function fwe(d){this.a=d},
f8t:function f8t(d){this.a=d},
kl:function kl(d,e,f,g,h,i,j,k,l,m){var _=this
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
bIB:function bIB(){},
bIA:function bIA(){},
bIx:function bIx(){},
bIy:function bIy(){},
bIz:function bIz(){},
f0E:function f0E(){},
eXw:function eXw(){},
eXx:function eXx(){},
eXy:function eXy(){},
foJ:function foJ(){},
foK:function foK(){},
foL:function foL(){},
foM:function foM(d){this.a=d},
foN:function foN(){},
fwc:function fwc(d){this.a=d},
f9J:function f9J(d){this.a=d},
fbR:function fbR(){},
fbS:function fbS(){},
fbT:function fbT(){},
fbU:function fbU(){},
fbV:function fbV(d){this.a=d},
fow:function fow(d){this.a=d},
fw7:function fw7(){},
fw8:function fw8(){},
fw9:function fw9(d){this.a=d},
f9q:function f9q(d){this.a=d},
f9r:function f9r(d){this.a=d},
fwi:function fwi(){},
f91:function f91(d){this.a=d},
f92:function f92(d,e){this.a=d
this.b=e},
f93:function f93(){},
fw_:function fw_(d){this.a=d},
fcC:function fcC(){},
fos:function fos(){},
fbO:function fbO(){},
fbP:function fbP(){},
fbQ:function fbQ(){},
fop:function fop(d){this.a=d},
eY1:function eY1(){},
eY2:function eY2(){},
eY3:function eY3(){},
eY4:function eY4(){},
eY5:function eY5(){},
eYi:function eYi(){},
eYj:function eYj(d){this.a=d},
eYf:function eYf(d){this.a=d},
eYg:function eYg(){},
eYh:function eYh(){},
f1i:function f1i(){},
f1j:function f1j(){},
f1k:function f1k(){},
f3k:function f3k(){},
f7Q:function f7Q(d){this.a=d},
f7R:function f7R(d){this.a=d},
cpU:function cpU(d,e){this.a=d
this.b=e},
cpV:function cpV(d,e){this.a=d
this.b=e},
aDA:function aDA(d,e,f){this.a=d
this.b=e
this.c=f},
b4G:function b4G(){this.b=this.a=0},
b4F:function b4F(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
brm:function brm(){},
vR(d,e){var w,v
if(d==null)return""
w=d.bO()
v=""+w.gca()+"/"+w.gcp()+"/"+w.gcb()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmE()),2,"0")+":"+B.a.aT(B.o.u(w.gET()),2,"0")},
hln(){var w,v=$.oX(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aG(32)]
return"WS"+B.d.fL(u)},
apm(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$apm)
case 3:if(!e){u=A.R(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bD),$async$apm)
case 8:r=e
if(r==null){u=A.R(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.Z(q,x.N,x.z)
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
case 7:u=A.R(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apm,v)},
apn(d){return C.hlo(d)},
hlo(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apn=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$apn)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hs("ngmy_worksheet_project_qr_stashes_v1",A.D(["stashes",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$apn)
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
return A.i($async$apn,v)},
app(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$app=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$app)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hln()
w=4
return A.b(C.apm(),$async$app)
case 4:r=h
q=B.a.i(e)
p=B.dB.aE(t)
J.aE(r,s,A.D(["ownerEmail",q,"projectId",f,"payload",B.cM.gcq().aE(p),"usesRemaining",25,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(C.apn(r),$async$app)
case 5:u=new A.YT("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$app,v)},
apo(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bV(),$async$apo)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apm(),$async$apo)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aQ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.aa(t)===0){u=null
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
m=A.dR(A.Z(o,n,m),n,m)
m.m(0,"usesRemaining",j)
m.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
p.m(q,i,m)}w=5
return A.b(C.apn(q),$async$apo)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apo,v)},
fRi(){var w=new A.N(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cA.aG(999999)},
hlp(d){var w,v,u,t,s,r,q
try{w=A.adL(d)
if(w==null)return d
v=w
if(J.Jy(v)>960||J.Jx(v)>960){s=v
r=J.Jy(v)>=J.Jx(v)?960:null
v=A.adK(s,J.Jx(v)>J.Jy(v)?960:null,B.LB,r)}s=v
u=A.ajk(82).Ra(s,B.xm)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.a4(q)
$.ak.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cac(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cac=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hlp(e)
$.ca8.m(0,s,t)
u=C.byH(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cac,v)},
aZv(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZv=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cS(l,"data:image")){u=null
w=1
break}t=4
r=J.eR(l,",")?B.d.gai(J.l9(l,",")):l
q=B.cw.aE(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.fRi()
w=7
return A.b(C.cac(p,q),$async$aZv)
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
return A.i($async$aZv,v)},
ca9(d){var w=0,v=A.j(x.T),u,t,s
var $async$ca9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cab(s),$async$ca9)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gcq().aE(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ca9,v)},
a65(d){var w=0,v=A.j(x.H),u,t
var $async$a65=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h2I(d)
if(t==null){w=1
break}$.ca8.W(0,t)
w=3
return A.b(C.byG(t),$async$a65)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a65,v)},
byH(d,e){return C.hLH(d,e)},
hLH(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$byH=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKc
w=7
return A.b(n==null?$.aKc=I.fEx():n,$async$byH)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.mg(r,"thumbs","readwrite")
B.im.lL(J.me(p,"thumbs"),q,l)
w=8
return A.b(J.oZ(p),$async$byH)
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
return A.i($async$byH,v)},
byG(d){return C.hLF(d)},
hLF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byG=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKc
w=7
return A.b(o==null?$.aKc=I.fEx():o,$async$byG)
case 7:r=f
q=J.mg(r,"thumbs","readwrite")
B.im.Ep(J.me(q,"thumbs"),m)
w=8
return A.b(J.oZ(q),$async$byG)
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
return A.i($async$byG,v)}},D,Ae,Af,O,Ag,Ah,I,P,W,Ai
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
A0=c[122]
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
W=c[120]
Ai=c[94]
C.als.prototype={}
C.aUR.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bax(),f=h.x!=null&&h.y_(i).length===0
if(h.x!=null)w=f?B.aW:B.bS
else w=h.gRO()?B.bS:B.e2
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.G(D.b4T,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.ebh,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h0,i,i,i),B.T,D.eD4,B.au,A.d(C.vR(new A.N(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ezj,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aRM,i,i,i,i,B.Vn,i,i,i)
q=A.m(16)
p=A.G(B.aJ,B.r,1)
o=A.G(B.aW.j(0.28),B.r,1)
n=A.fGm(h.d)
o=A.p(B.B,C.aUQ(A.ff_(h.e,n),30),B.h,i,i,new A.o(B.lO,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.euR,B.L,i,i)
m=A.m(14)
l=A.G(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.bw,D.eDl,B.aa,A.p(i,A.u(A.a([D.eRB,B.bw,A.d(A.zx(h.c),i,i,i,i,i,i,D.eq6,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eV,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,p,q,i,i,B.n),i,i,i,i,K.acE,i,i,i)
p=A.m(16)
m=A.G(B.aJ,B.r,1)
l=j.aMb("Original due",C.vR(h.r,!1))
n=j.aMb("Current due",C.vR(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.u(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGq(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zx,i,i,1/0),B.T,j.c6q(),B.P,j.bW4(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.G(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eEg,B.au,A.d(q,i,i,i,i,i,i,D.eud,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaBt()){q=A.m(14)
o=A.G(B.ct,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eSM,B.P,A.bu(A.m(12),A.ec(new A.a3(1/0,88,A.b2(i,i,i,new A.TP(h.ax,B.M,D.eeC,!0,3.5,i),B.as),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Dv,i,i,i)],s))}p.push(B.ay)
p.push(D.eLB)
return A.p(i,A.u(A.a([r,new A.B(B.acH,A.u(p,B.ad,i,B.e,B.j,0,B.p),i)],s),B.ad,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMb(d,e){var w=null
return A.A(A.a([A.C(A.d(d,w,w,w,w,w,w,D.a4o,w,w,w),1),A.d(e,w,w,w,w,w,w,D.er4,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c6q(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6C(B.e2,u,"Not paid yet")
w=t.y_(null).length
v=w===0?B.aW:B.bS
return this.a6C(v,u,C.vR(t.x,!0))},
bW4(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6C(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6C(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4o,u,u,u)
v=A.T(d).k("I<1,ha>")
v=A.z(new A.I(d,new C.bX7(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.cb(B.bH,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6C(d,e,f){var w=null
return A.A(A.a([A.C(A.d(e,w,w,w,w,w,w,D.a4o,w,w,w),1),new A.dk(1,B.cj,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b6N.prototype={
a5(d,e){new A.TP(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ao(d){return d.b!==this.b}}
C.alz.prototype={
S(){return new C.azy(A.a([],x.bp))},
gdQ(){return this.c}}
C.azy.prototype={
Z(){this.a0()
this.Hg()},
Hg(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_D(t.a.c),$async$Hg)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dxt(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hg,v)},
aO2(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aO,s=A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bm:B.bv).j(0.22)
w=A.m(10)
return A.bl(v,new A.b1(4,r,new A.ax(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b1(4,w,new A.ax((this.a.d.a?B.bm:B.bv).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b1(4,A.m(10),D.aPq),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aO1(d){return this.aO2(d,null)},
NC(d){return this.c9Z(d)},
c9Z(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EL:B.et
w=7
return A.b(new A.hQ().AY(72,900,900,n),$async$NC)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$NC)
case 8:p=f
n=B.cM.gcq().aE(p)
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
if(n!=null)n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$NC,v)},
aVZ(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aO,o=A.m(10),n=A.G((q?B.bm:B.bv).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bm:B.bv
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bm:B.bv
t=x.p
u=A.C(A.u(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a1,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fp(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c6)
q=A.a([q,B.ab,u,A.bG(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.cu,s.a.d.a?B.bm:B.bv,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c6))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ku,D.bes,r,r,r)},
BT(d){return this.btc(d)},
btb(){return this.BT(null)},
btc(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BT=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.at()
r=new A.ao(new A.bb(a4,B.aZ,B.aL),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.lp(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.M(p)):B.k.ab(p,2)}o=new A.ao(new A.bb(a4,B.aZ,B.aL),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ao(new A.bb(a4,B.aZ,B.aL),s)
if(a3){a4=new A.N(Date.now(),0,!1).bL(6048e8)
m=A.bY(a4.gcb(),a4.gca(),a4.gcp(),0,0,0,0,0)}else{a4=a5.f
m=A.bY(a4.gcb(),a4.gca(),a4.gcp(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bi(a4,!0,x.cT)
i=a3?null:A.fGm(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.uT?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hM(B.x.j(0.55),!0,"Dismiss",a4,new C.dxc(),new C.dxd(a2,t,a5,r,new C.dxe(a2,t),o,n,j),B.eD,!0,x.y),$async$BT)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d5(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.F(x.q).f.P(D.ekU)
w=1
break}a0=a2.d
if(a0==null){t.c.F(x.q).f.P(D.ejz)
w=1
break}a1=A.ff_(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.uT?"male":"female"
w=7
return A.b(A.af5(a3,A.fOa(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BT)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.uT?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bY(a3.gcb(),a3.gca(),a3.gcp(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bY(a4.gcb(),a4.gca(),a4.gcp(),0,0,0,0,0)))a5.cBL(a2.a)
w=8
return A.b(A.af5(t.a.c,a5),$async$BT)
case 8:case 5:w=9
return A.b(t.Hg(),$async$BT)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BT,v)},
aOC(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.M:B.aO
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bm:B.bv).j(0.2)
s=A.G(s,B.r,g?1.5:1)
r=C.aUQ(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aO:B.aG
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b5,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ac)},
Qb(d){return this.cqS(d)},
cqS(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hM(B.x.j(0.55),!0,"Dismiss",s,new C.dxw(),new C.dxx(t,d),B.hG,!0,x.y),$async$Qb)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.N(s,0,!1)
case 4:w=7
return A.b(A.af5(t.a.c,d),$async$Qb)
case 7:w=8
return A.b(t.Hg(),$async$Qb)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qb,v)},
Mi(d,e){return this.bDG(0,e)},
bDG(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kN(s,"Cancel","Delete",e.b+" \xb7 "+A.zx(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mi)
case 3:if(!g){w=1
break}w=4
return A.b(C.f9x(t.a.c,e.a),$async$Mi)
case 4:w=5
return A.b(t.Hg(),$async$Mi)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mi,v)},
abR(d){return this.c42(d)},
c42(d){var w=0,v=A.j(x.H),u=this,t
var $async$abR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c0(B.K,null,new C.dxq(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$abR)
case 2:return A.h(null,v)}})
return A.i($async$abR,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dMO
w=J.dF(m.d,new C.dxy())
v=A.z(w,w.$ti.k("F.E"))
w=J.dF(m.d,new C.dxz())
u=A.z(w,w.$ti.k("F.E"))
t=B.d.cI(v,0,new C.dxA())
w=A.m(18)
s=m.a.d.a
r=s?D.c7T:D.asj
q=A.G(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.bBL,B.h,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.C(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.X,!0,A.m(12),A.aH(!1,A.m(12),!0,D.dMf,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dxB(m),l,l,l,l,l,l,l),B.h,B.cW,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.C(m.cna("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zx(t)
r=A.a([A.p(l,A.u(A.a([s,B.aa,A.A(A.a([o,B.ab,A.C(m.b0R(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aE,B.w,r,l,l),B.n),l,l,l,l,B.acB,l,l,l),B.ay],p)
if(J.ch(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.G((w?B.bm:B.bv).j(0.12),B.r,1)
n=A.p(l,D.bwQ,B.h,l,l,new A.o(B.cW.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.aa,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bgT,l,l,1/0))}else{w=m.gc9h()
s=A.z(new A.I(v,w,A.T(v).k("I<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.B(D.biw,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.I(u,w,A.T(u).k("I<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.ad,l,B.e,B.j,0,B.p)},
b0R(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.x.j(0.22):B.c.j(0.85),s=A.m(14),r=A.G((v.a.d.a?B.bm:B.bv).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bm:B.bv,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aO:B.aG
return A.p(u,A.u(A.a([q,B.bw,A.d(f,u,1,B.Z,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cna(d,e){return this.b0R(!1,d,e)},
c9i(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y_(j).length,h=d.b9K()
if(d.x!=null){w=d.y_(j).length
v=w===0?B.cW:B.bS}else if(d.gRO())v=B.bS
else{if(h)w=B.cW
else w=k.a.d.a?B.bm:B.bv
v=w}if(d.x!=null){w=d.y_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vR(u,!1)}else{u.toString
t="Paid "+C.vR(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vR(w,!1)+" \xb7 "+i+" missed":"Due "+C.vR(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRO()&&d.x==null)s=B.bS.j(0.35)
else s=(k.a.d.a?B.bm:B.bv).j(0.12)
s=A.G(s,B.r,1)
r=k.a.d.a?j:A.a([new A.a9(0,B.G,B.x.j(0.04),B.cD,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lO
o=A.G(d.gRO()&&d.x==null?B.bS.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fGm(d.d)
o=A.p(B.B,A.d4(C.aUQ(A.ff_(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aO:B.aG
m=x.p
n=A.a([new A.dk(1,B.cj,A.d(p,j,1,B.Z,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBt())B.d.v(n,A.a([B.ez,A.V(B.KI,B.cW.j(0.8),j,j,j,14)],m))
p=A.C(A.u(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.d5,A.d(t,j,1,B.Z,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zx(d.c)
l=k.a.d.a?B.aO:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.X,!0,j,A.aH(!1,q,!0,new A.B(S.acl,A.A(A.a([o,B.ba,p,B.ab,A.u(A.a([n,B.bw,A.V(B.ek,(k.a.d.a?B.bm:B.bv).j(0.5),j,j,j,18)],m),B.dD,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dxs(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ac),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d7,j,j,j,j)}}
C.mM.prototype={
ad(){var w=this
return A.D(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().aa()],x.N,x.z)},
b6z(d,e,f){return new C.mM(this.a,e,d,f)}}
C.FX.prototype={
xy(d,e,f,g,h,i,j,k,l,a0,a1){var w=this,v=j==null?w.a:j,u=a0==null?w.b:a0,t=k==null?w.c:k,s=e==null?w.d:e,r=f==null?w.e:f,q=a1==null?w.f:a1,p=h==null?w.r:h,o=g==null?w.w:g,n=l==null?w.x:l,m=d==null?w.y:d
return new C.FX(v,u,t,s,r,q,p,o,n,m,i==null?w.z:i)},
azI(d){var w=null
return this.xy(w,w,w,w,d,w,w,w,w,w,w)},
b6x(d,e,f){var w=null
return this.xy(d,w,w,w,w,w,w,e,w,f,w)},
cyi(d){var w=null
return this.xy(w,w,w,w,w,d,w,w,w,w,w)},
cyr(d){var w=null
return this.xy(w,w,w,w,w,w,w,w,d,w,w)},
cxD(d){var w=null
return this.xy(w,w,w,d,w,w,w,w,w,w,w)},
cyt(d){var w=null
return this.xy(w,w,w,w,w,w,w,w,w,w,d)},
cxA(d){var w=null
return this.xy(w,w,d,w,w,w,w,w,w,w,w)},
cxv(d){var w=null
return this.xy(w,d,w,w,w,w,w,w,w,w,w)},
Ei(d){var w=null
return this.xy(w,w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return A.D(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z],x.N,x.z)},
cvt(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bIw(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.M(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cJ(d.h(0,n))).length!==0?B.a.i(A.cJ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cJ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AQ.ge9(D.AQ))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_H)
q=l.$2("frame",D.a_e)
l=l.$2("texture",D.a_9)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cJ(d.h(0,"author"))):o
return this.xy(p,u,t,q,r,A.tf(d.h(0,"ribbon"))?A.Ey(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.X5.prototype={
S(){return new C.awF(A.a([],x.I),D.Ki)},
gdQ(){return this.c}}
C.awF.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yt(0,1)
w=$.at()
v.z=new A.ao(B.aq,w)
v.Q=new A.ao(B.aq,w)
v.kp()
w=v.a
C.bx7(w.c,w.d).bw(new C.cZD(v),x.fL)},
p(){var w,v=this,u=v.f
u===$&&A.c()
u.p()
u=v.z
u===$&&A.c()
w=$.at()
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
return A.b(C.J1(s.c,s.d),$async$kp)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.cZr(t,r))
t.as1()
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
gaoI(){var w,v=this
if(!J.ch(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
as1(){var w,v,u=this.gaoI(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saR(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saR(0,w==null?"":w)},
c2t(d){this.n(new C.cZo(this,d))
this.as1()},
LF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mM(B.o.u(1000*Date.now()),"Untitled page","",new A.N(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aMY(r.c,r.d,s),$async$LF)
case 3:w=4
return A.b(t.kp(),$async$LF)
case 4:if(t.c==null||J.ch(t.d)){w=1
break}q=J.pJ(t.d,new C.cZ1(s))
p=q>=0?q:J.aa(t.d)-1
t.n(new C.cZ2(t,p))
t.as1()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A2(p+1,B.co,B.kq),$async$LF)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LF,v)},
DC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaoI()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aMY(o.c,o.d,new C.mM(s,r,q,new A.N(p,0,!1))),$async$DC)
case 3:w=4
return A.b(t.kp(),$async$DC)
case 4:if(t.c==null){w=1
break}t.n(new C.cZs(t))
case 1:return A.h(u,v)}})
return A.i($async$DC,v)},
Mj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaoI()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.cZ8(r),s,null,!0,!0,x.y),$async$Mj)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bwU(s.c,s.d,r.a),$async$Mj)
case 4:t.n(new C.cZ9(t))
w=5
return A.b(t.kp(),$async$Mj)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RR(B.o.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mj,v)},
xj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DC(),$async$xj)
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
return A.b(C.P0(s,r.r,o,p,q),$async$xj)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).K(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h3a(s,r.x,r.r),$async$xj)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.J1(s.c,s.d),$async$xj)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.H(l,new C.mM(""+(m+k),q,B.a.i(j.b),new A.N(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zG(r.c,r.d,l),$async$xj)
case 11:w=12
return A.b(t.kp(),$async$xj)
case 12:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xj,v)},
Z4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DC(),$async$Z4)
case 5:case 4:if(t.c==null){w=1
break}s=t.gDV(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.xt,new C.cZp(t),new C.cZq())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m0("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new F.m0(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fHX(o,new F.qH(s,r,"",p,new F.tR(q.d,null,null,null,null,"","","")),null),$async$Z4)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Z4,v)},
UT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(D.b0a,null,new C.cZa(t),r,!0,!0,!0,D.eaI,!1,!1,x.e),$async$UT)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cZb(t,s))
r=t.a
w=4
return A.b(C.a0l(r.c,r.d,s),$async$UT)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A2(0,B.dU,B.o_)
case 1:return A.h(u,v)}})
return A.i($async$UT,v)},
bIH(d){var w=d.bO(),v=B.a.aT(B.o.u(w.gca()),2,"0"),u=B.a.aT(B.o.u(w.gcp()),2,"0")
return""+w.gcb()+"-"+v+"-"+u},
gDV(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bQy()
if(r.e)w=D.a7E
else if(J.ch(r.d)){w=r.y
v=r.gDV(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.epz,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a3(q,330,new A.B(Ad.adA,new C.Wn(w,v,0,q),q),q),B.bs,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.jw.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bs],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aJ(q,A.p(q,D.eb7,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.a9(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.uJ,B.n),q,q,q,q,B.Vx,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcuD(),q,q,q,q,q,q,!1,B.af))
w.push(B.T)
w.push(A.hg(D.bt9,D.eXd,r.gaI8(),q))
B.d.v(u,w)}w=A.as(A.cf(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.em,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.jw.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dJ:B.yK
u=A.u(A.a([new A.B(D.bgc,w,q),A.C(A.Hd(v,new C.cZB(r),J.aa(r.d)+1,q,r.gc2s(),u,B.aY),1),r.bvZ()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.ce(q,D.a9B,new A.am(B.V,q,B.aX,B.q,A.a([D.aF2,A.br(!0,A.u(A.a([p,A.C(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bQy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cs(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.NO(B.dO,"AI",h.gbtY(),!0))
if(h.a.f)f.push(new C.NO(B.nq,"Cover",h.gbEf(),!1))
if(J.cs(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.NO(B.rZ,"Print",h.gcbd(),!1))
if(h.a.f&&J.cs(h.d)&&h.r>=0){v=h.w
u=v?B.hh:B.iY
t=v?"Save":"Edit"
f.push(new C.NO(u,t,v?h.gcha():new C.cZl(h),!1))}if(h.a.f)f.push(new C.NO(B.hH,"Add page",h.gaI8(),!1))
v=A.m(22)
u=A.G(E.iQ.j(0.85),B.r,1.6)
t=A.a([new A.a9(0,B.G,B.x.j(0.5),B.cv,16),new A.a9(0,B.G,E.iQ.j(0.12),B.J,18)],x.V)
s=x.p
r=A.A(A.a([A.aJ(g,A.p(g,D.bt1,B.h,g,g,new A.o(B.x.j(0.3),g,A.G(E.iQ.j(0.6),B.r,1),g,g,g,B.a6),g,30,g,g,g,g,g,30),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.cZm(h),g,g,g,g,g,g,!1,B.af),A.C(new A.B(B.fi,A.eY(B.B,A.d(h.gDV(0),g,1,g,g,!1,g,D.ep6,g,g,g),B.h,B.e8),g),1),D.efk],s),B.m,g,B.e,B.j,0,g,g)
q=x.O
p=A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.a8(B.a_,B.a7,B.w,A.a([B.K,E.iQ.j(0.7),B.K],q),g,g),B.n),g,1,g,g,g,g,g,g)
o=A.a([],s)
for(n=f.length,m=0;m<f.length;f.length===n||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.d5f
else{k=new A.b3(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],q)
i=new A.ax(E.iQ.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.jw,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c2(i,i,i,i),new A.bv(k,k,k,k),g,new A.a8(B.a_,B.a7,B.w,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.jw.j(0.85)
o.push(new A.bF(1,B.bn,A.aJ(B.c5,A.u(A.a([k,B.bw,new A.w(l.b,g,new A.E(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.af),g))}return A.p(g,A.u(A.a([r,new A.B(B.ub,p,g),A.A(o,B.m,g,B.e,B.j,0,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.h,g,g,new A.o(g,g,u,v,t,D.ajl,B.n),g,g,g,D.beU,B.lp,g,g,g)},
yN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DC(),$async$yN)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a_S(B.d.aF(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.cZ3(t,p),s,null,!0,!0,x.N),$async$yN)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xj(),$async$yN)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cq(),$async$yN)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.DY("Swahili (Kiswahili)",!0),$async$yN)
case 18:w=16
break
case 17:w=19
return A.b(t.crr(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yN)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yN,v)},
WH(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.G(E.iQ.j(0.3),B.r,1),r=x.p
return new A.B(B.cH,A.aH(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uJ,B.a6),w,42,w,w,w,w,w,42),B.ba,A.C(A.u(A.a([A.d(f,w,w,w,w,w,w,A3.a41,w,w,w),A.d(g,w,w,w,w,w,w,E.a3T,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZn(d,h),w,w,w,w,w,w,w),w)},
Cq(){return this.bIb()},
bIb(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cq=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.cZe(r),a7,null,!0,!0,x.ei),$async$Cq)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.z(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.at())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.cZf(o),a7,null,!0,!0,x.H).f4(new C.cZg(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.ci(l,new A.S(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xt[a1]
J.ci(j,i.a)}w=8
return A.b(C.aei(a0,a7,new C.cZh(o),d,l,e,j),$async$Cq)
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
if(l!=null&&a6.a)A.a7(l,!0).eB()
l=o
l.shH($.at())
J.aNp(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.F(x.q).f
j=n
l.P(A.b_(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcf(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.am(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b6z(m.b.h(0,a4).b,a7,new A.N(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zG(j.c,j.d,l),$async$Cq)
case 11:w=12
return A.b(r.kp(),$async$Cq)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xt[a1].a)
a5=l.cvt(j,12,a7)
l=r.a
w=15
return A.b(C.a0l(l.c,l.d,a5),$async$Cq)
case 15:if(r.c!=null)r.n(new C.cZi(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A2(0,B.dU,B.o_)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.F(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b_(a3?A.ckx("Undo",new C.cZj(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cq,v)},
DY(d,e){return this.crs(d,e)},
crr(d){return this.DY(d,!1)},
crs(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$DY=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.z(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.at())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.cZu(a0),k,null,!0,!0,x.H).f4(new C.cZv(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.ci(o,new A.S(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a04(m,new C.cZw(a0)),$async$DY)
case 10:w=8
break
case 9:w=11
return A.b(C.byy(new C.cZx(a0),m,a2),$async$DY)
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
if(o!=null&&f.a)A.a7(o,!0).eB()
o=a0
o.shH($.at())
J.aNp(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.F(x.q).f
k=q
o.P(A.b_(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b6z(J.q(p,g).b,j.a,new A.N(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zG(k.c,k.d,o),$async$DY)
case 12:w=13
return A.b(r.kp(),$async$DY)
case 13:o=r.c
if(o==null){w=1
break}o=o.F(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(A.ckx("Undo",new C.cZy(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DY,v)},
bvZ(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cZ4(v):u
r=A.aF(u,u,u,u,A.V(D.boN,s?D.jw:B.be,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cs(v.d)&&!v.w&&v.r>=0)s=A.hg(A.V(B.um,B.D8,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.D8,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbDP(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.jw.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.C(A.as(s,u,u,u),1)
w=t<J.aa(v.d)?new C.cZ5(v):u
return A.br(!0,new A.B(D.bg0,A.A(A.a([r,s,A.aF(u,u,u,u,A.V(B.ek,t<J.aa(v.d)?D.jw:B.be,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.X9.prototype={
S(){return new C.baF(new A.ao(B.aq,$.at()))}}
C.baF.prototype={
ga_b(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
gbGZ(){var w,v=this.ga_b()
A:{if("cover"===v){w=D.cD7
break A}if("book"===v){w=D.czh
break A}w=D.cZi
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.iQ.j(0.5),n=x.p,m=A.A(A.a([D.d5g,B.av,D.bla,A.aF(q,q,q,q,B.l1,q,q,q,new C.d03(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jO(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d04(r),r.ga_b()==="page",q,q,q,q))
if(r.a.d)l.push(A.jO(q,q,q,D.eSk,q,new C.d05(r),r.ga_b()==="book",q,q,q,q))
l.push(A.jO(q,q,q,D.eGG,q,new C.d06(r),r.ga_b()==="cover",q,q,q,q))
l=A.cb(B.bH,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bl(q,new A.b1(4,A.m(16),B.W),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kd,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ae,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbGZ(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mG(q,B.c.j(0.08),new A.w(s,q,B.H6,q,q,q,q,q,q,q,q,q),B.hk,new C.d07(r,s),q,q,q,q))}return A.eB(q,E.zc,A.cf(A.u(A.a([m,B.T,D.eVf,B.ar,l,B.aa,k,B.P,A.cb(B.bH,w,B.bx,6,6),B.ay,A.dj(D.bt6,D.eW0,new C.d08(r,d),A.bk(B.b0,q,q,q,q,B.on,q,q,new A.b5(A.m(16),B.W),q,q,q)),B.au,D.eQO],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.fv,q,q,B.ah),q,q,q,D.adk,B.cZ,q,new A.b5(p,new A.ax(o,1.4,B.r,-1)),q)}}
C.X7.prototype={
S(){return new C.awG(A.a([],x.Y))},
gdQ(){return this.c}}
C.ac8.prototype={}
C.awG.prototype={
Z(){this.a0()
this.kp()},
kp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.P4(p.c,p.d),$async$kp)
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
return A.b(C.bx7(r.c,q),$async$kp)
case 6:j=e
i=J
w=7
return A.b(C.J1(t.a.c,q),$async$kp)
case 7:m.push(new l.ac8(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.cZS(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
b21(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Of(d,e){return this.c40(0,e)},
c40(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Of=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).cr(A.eH(new C.cZR(u,e),!0,null,x.y)),$async$Of)
case 2:t=g
w=3
return A.b(u.kp(),$async$Of)
case 3:if(t===!0&&u.c!=null)u.c.F(x.q).f.P(D.aI9)
return A.h(null,v)}})
return A.i($async$Of,v)},
E0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.F(x.q).f.P(D.aI5)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adE(s.c,s.d),$async$E0)
case 5:q=e
w=6
return A.b(t.kp(),$async$E0)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Of(0,B.d.kU(t.d,new C.cZW(q))),$async$E0)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.P0(p,s.f,r,n,o),$async$E0)
case 10:m=e
w=11
return A.b(t.kp(),$async$E0)
case 11:if(m&&t.c!=null)t.c.F(x.q).f.P(D.aI9)
case 1:return A.h(u,v)}})
return A.i($async$E0,v)},
NK(d,e){return this.ceZ(0,e)},
ceZ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.cZV(t,e),s,null,!0,!0,x.y),$async$NK)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0j(s.c,s.d,e.a),$async$NK)
case 4:w=5
return A.b(t.kp(),$async$NK)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NK,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bw1(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.G(E.iQ.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aJ(n,new A.fN(0.7142857142857143,A.p(n,A.u(A.a([D.d5h,B.aa,D.dLW,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.jw.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcuz(),n,n,n,n,n,n,!1,B.af))}w=A.m(22)
v=A.G(E.iQ.j(0.85),B.r,1.6)
s=A.aJ(n,A.p(n,D.bAA,B.h,n,n,new A.o(B.x.j(0.3),n,A.G(E.iQ.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.cZX(d),n,n,n,n,n,n,!1,B.af)
r=A.m(14)
q=B.x.j(0.3)
p=A.G(E.iQ.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.ba,D.blt,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eoK,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h0,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.ajl,B.n),n,n,n,Ag.V4,D.be8,n,n,n)
if(o.e)k=D.a7E
else k=k.length===0?D.aWu:A.cj(new C.cZY(k))
return A.ce(n,D.a9B,new A.am(B.V,n,B.aX,B.q,A.a([D.aF2,A.br(!0,A.u(A.a([w,A.C(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bw1(d){var w,v,u=this,t=null,s=u.b21(d),r=d.c,q=x.p,p=A.a([A.bU(0,A.eY(B.B,new A.a3(300,420,new C.Wn(d.b,s,r,t),t),B.h,B.dp),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aJ(t,A.p(t,D.bzU,B.h,t,t,new A.o(B.x.j(0.55),t,A.G(B.be,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZP(u,d),t,t,t,t,t,t,!1,B.af),t,t,t,6,6,t))
w=A.d(s,t,1,B.Z,t,t,t,D.eom,t,t,t)
v=r===1?"page":"pages"
return A.aJ(t,A.u(A.a([new A.fN(0.7142857142857143,new A.am(B.V,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.jw.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZQ(u,d),t,t,t,t,t,t,!1,B.af)}}
C.NO.prototype={}
C.Wn.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.xt,new C.cyu(m),new C.cyv()),j=m.c,i=D.AQ.h(0,j.e),h=A.aX(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m4:B.b5
v=new C.cyw(h)
i=A.a([new A.a9(0,B.G,B.x.j(0.6),D.dJZ,28)],x.V)
u=x.p
t=A.a([A.bU(0,A.b2(l,l,l,new C.b7Y(j.x,h,l),B.as),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.a_,B.a7,B.w,A.a([B.x.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b3(3,3)
t.push(new A.cE(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bv(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adB,8,0.85,2.2),v.$4(D.biP,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adB,8,0.85,2.4))
else if(r==="corners")t.push(A.bU(0,new A.B(D.biL,A.b2(l,l,l,new C.b7P(h,l),B.as),l),0,0,0))
r=A.V(D.arC[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.Z,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ap7,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.aa,p,B.aa,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cz,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.Z,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bU(0,new A.B(D.bje,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aDv(l),D.eew),l,l,l,46,0,l))
return A.p(l,A.bu(D.a6l,new A.am(B.V,l,B.a9,B.q,t,l),B.ap),B.h,l,l,new A.o(l,l,l,D.a6l,i,new A.a8(B.ax,B.aE,B.w,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b7Y.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f6()
f.dY(11)
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
j=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
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
h=new A.b0(k.r,B.aw,null,null,j)
j.push(new A.bj(v,t))
k=i-0.04
j.push(new A.av(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.av(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bW())
k=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
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
C.b7P.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a1(),k=A.U(),j=this.b
k.r=j.j(0.9).gt(0)
k.b=B.ak
k.c=2.4
k.d=B.bZ
for(w=e.a,v=e.b,v=[D.e7p,new A.d7([w,0,-1,1]),new A.d7([0,v,1,-1]),new A.d7([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.b0(l,B.aw,null,null,s)
s.push(new A.bj(r+p*34,q))
s.push(new A.av(r,q))
s.push(new A.av(r,q+o*34))
m=k.L()
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cG(s)).a,m)
m.delete()
s=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
s.r=j.j(0.9).gt(0)
m=s.L()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ao(d){return!d.b.A(0,this.b)}}
C.tz.prototype={}
C.WG.prototype={
S(){return new C.b7W()}}
C.b7W.prototype={
gns(){var w=this.d
return w===$?this.d=this.a.c:w},
gDV(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ao(new A.bb(w.b,B.aZ,B.aL),$.at())}return v},
gax0(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ao(new A.bb(w.c,B.aZ,B.aL),$.at())}return v},
ganj(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ao(new A.bb(w.y,B.aZ,B.aL),$.at())}return v},
p(){var w=this,v=w.gDV(0),u=v.R$=$.at()
v.O$=0
v=w.gax0()
v.R$=u
v.O$=0
v=w.ganj()
v.R$=u
v.O$=0
w.a2()},
anU(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jO(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cRW(this,f,u),e===u,s,s,s,s))}return A.cb(B.bH,r,B.bx,6,8)},
atf(d){var w=null,v=B.c.j(0.07)
return A.bl(w,new A.b1(4,A.m(14),B.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l8,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gns(),a0=f.gDV(0),a1=a0.a.a,a2=f.gax0(),a3=a2.a.a,a4=f.ganj(),a5=d.b6x(a4.a.a,a3,a1)
a1=x.n
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a3(190,260,A.eY(B.B,new A.a3(270,370,new C.Wn(a5,d,f.a.e,e),e),B.h,B.dp),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atf("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSk(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atf("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSl(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xt[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.be
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c2(o,o,o,o),e,e,new A.a8(B.ax,B.aE,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aJ(e,A.u(A.a([p,B.d5,new A.w(t.b,e,new A.E(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSm(f,t),e,e,e,e,e,e,!1,B.af))}v=A.cb(B.bH,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.b3(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eN:B.K,2,B.r,-1)
q.push(A.aJ(e,A.p(e,A.V(D.arC[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c2(o,o,o,o),new A.bv(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSn(f,n),e,e,e,e,e,e,!1,B.af))}q=A.cb(B.bH,q,B.bx,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atf("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSo(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.md,e,e,e)
m=A.a([],w)
for(l=D.AQ.gdH(D.AQ),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.aX(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eN:B.be
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c2(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aJ(e,A.u(A.a([j,B.bw,new A.w(i,e,new A.E(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSp(f,k),e,e,e,e,e,e,!1,B.af))}m=A.cb(B.bH,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.md,e,e,e)
k=f.gns()
return new A.B(new A.L(0,0,0,a3.f.d),A.br(!0,new A.d2(new A.aV(0,1/0,0,a1.a.b*0.92),A.cL(A.a([D.eQh,B.aa,d,B.aN,a0,B.T,a2,B.ay,D.eVP,B.P,v,B.ay,D.eQq,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.m8(e,9,""+B.k.U(f.gns().f),36,18,new C.cSq(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.md,e,e,e),B.ar,f.anU(D.a_H,f.gns().r,new C.cSr(f),D.d1q),B.aa,A.d("BORDER",e,e,e,e,e,e,H.md,e,e,e),B.ar,f.anU(D.a_e,f.gns().w,new C.cSs(f),D.d1v),B.aa,A.d("COVER MATERIAL",e,e,e,e,e,e,H.md,e,e,e),B.ar,f.anU(D.a_9,f.gns().x,new C.cSu(f),D.d2T),B.ar,A.it(e,B.b0,e,B.ag,e,new C.cSv(f),e,e,e,D.eLa,f.gns().z),B.bs,A.bJ(D.ePd,new C.cSw(f,a6),A.bk(B.b0,e,e,e,e,B.on,e,e,new A.b5(A.m(16),B.W),e,e,e))],w),e,O.ad9,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDv.prototype={
a5(d,e){var w,v,u,t=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
t.N(new A.bj(0,0))
w=e.a
t.N(new A.av(w,0))
v=e.b
t.N(new A.av(w,v))
t.N(new A.av(w/2,v-12))
t.N(new A.av(0,v))
t.N(new A.bW())
u=A.U()
u.sav(D.bFS.aB(0,new A.af(0,0,0+w,0+v)))
d.b4(t,u)},
ao(d){return!1}}
C.bd7.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a1()
w=A.U()
w.sav(D.bF0.aB(0,new A.af(0,0,a3,a4)))
a5.bp(new A.af(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f6()
u.dY(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ag()*20
l=56+u.ag()*40
k=D.cD6[u.aG(9)]
j=u.aG(14)
J.bP(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.af(n,j,n+m,j+l)
h=A.c_(i,B.hj)
g=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.x,0.45)
e.toString
g.sav(new A.a8(B.a_,B.a7,B.w,A.a([f,k,e],t),a0,a0).aB(0,i))
d=g.L()
w.drawRRect(A.fM(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
e.r=E.iQ.j(0.55).gt(0)
d=e.L()
w.drawRect(A.cz(new A.af(h,j,g,j+2)),d)
d.delete()
j=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
j.r=E.iQ.j(0.4).gt(0)
d=j.L()
w.drawRect(A.cz(new A.af(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aG(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
p.sav(D.bEs.aB(0,new A.af(0,r,a3,q)))
d=p.L()
w.drawRect(A.cz(new A.af(0,r,a3,q)),d)
d.delete()
p=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.x.j(0.5).gt(0)
p.z=B.jh
d=p.L()
w.drawRect(A.cz(new A.af(0,q,a3,q+14)),d)
d.delete()}w=A.U()
w.r=D.aZz.j(0.72).gt(0)
a5.bp(new A.af(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.U()
a4.sav(new A.bS(B.B,0.5,B.w,a0,0,A.a([D.b4z.j(0.22),B.K],t),a0,a0).aB(0,A.c1(new A.v(w,a2),a1)))
a5.aw(new A.v(w,a2),a1,a4)},
ao(d){return!1}}
C.b6b.prototype={
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.c,n=B.a.i(o.c),m=A.ad("[ \t]{2,}",!0,!1,!1,!1),l=A.aI(n,m," ")
n=x.p
m=A.a([],n)
for(w=3;w>=1;--w){v=-w
m.push(new A.cE(14,w*2,v*2.2,v*2,p,p,new A.ky(new A.o(A.aq(D.jw,D.b89,w/4),p,new A.c2(B.W,new A.ax(B.x.j(0.12),1,B.r,-1),B.W,B.W),B.I8,p,p,B.n),B.b7,p,p),p))}v=x.V
u=A.a([new A.a9(0,B.G,B.x.j(0.35),B.aAS,8)],v)
t=A.a([],n)
for(w=0;w<5;++w){s=new A.b3(2,2)
t.push(A.p(p,p,B.h,p,p,new A.o(E.iQ.j(0.6),p,p,new A.bv(s,s,s,s),p,p,B.n),p,14,p,p,p,p,p,3))}u=A.p(p,A.u(t,B.m,p,B.qv,B.j,0,B.p),B.h,p,p,new A.o(p,p,p,D.aPa,u,D.bFQ,B.n),p,p,p,p,p,p,p,14)
v=A.a([new A.a9(0,B.G,B.x.j(0.4),B.dm,18)],v)
t=A.an(p,A.b2(p,p,p,new C.aDv(p),D.eer),p,p,p,26,-2,p)
s=o.d
r=q.x
if(q.f)o=A.u(A.a([A.aK(p,B.U,!1,p,!0,B.q,p,A.aL(),q.r,p,p,p,p,p,2,A.bl(p,B.ep,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Page title",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!1,p,B.ae,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.eBt,!0,B.a5,p,B.am,p,p,p,p),A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.45),p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.T,A.C(A.aK(p,B.U,!1,p,!0,B.q,p,A.aL(),q.w,p,p,p,p,p,2,A.bl(p,B.ep,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Write your family story here\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.et0,!0,B.a5,B.yd,B.am,p,p,p,p),1)],n),B.ad,p,B.e,B.j,0,B.p)
else{o=A.a([A.d(o.b,p,p,p,p,p,p,D.eBn,p,p,p),B.au,A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,11,B.cz,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.P,A.A(A.a([A.C(A.p(p,p,B.h,D.IU.j(0.35),p,p,p,1,p,p,p,p,p,p),1),new A.B(B.fi,A.d("\u2766",p,p,p,p,p,p,A.l(p,p,D.IU.j(0.7),p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.C(A.p(p,p,B.h,D.IU.j(0.35),p,p,p,1,p,p,p,p,p,p),1)],n),B.m,p,B.e,B.j,0,p,p),B.ay],n)
if(l.length===0)o.push(A.d("This page is blank. Tap the pencil to write.",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.4),p,p,p,p,p,p,p,p,16,p,p,p,p,1.7,!0,p,p,p,p,p,p,p,p),p,p,p))
else o.push(A.VE(A.dr(A.a([A.dr(p,p,p,p,p,p,p,p,p,D.evW,B.a.al(l,0,1)),A.dr(p,p,p,p,p,p,p,p,p,p,B.a.aU(l,1))],x.R),p,p,p,p,p,p,p,p,p,p),p,p,A.l(p,p,G.iR.j(0.93),p,p,p,p,p,p,p,p,16.5,p,p,p,p,1.72,!0,p,p,p,p,p,p,p,p),p))
o=A.cf(A.u(o,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,p,p,p,B.ah)}m.push(A.A(A.a([u,A.C(A.p(p,A.bu(B.I8,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.B(D.bii,A.u(A.a([A.C(o,1),new A.B(B.iW,A.d("\u2014 "+q.d+" \u2014",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,1,p,p,p,p,p,p),B.L,p,p),p)],n),B.ad,p,B.e,B.j,0,B.p),p),A.an(0,A.bQ(p,new A.o(p,p,p,p,p,new A.a8(B.a_,B.a7,B.w,A.a([B.x.j(0.16),B.K],x.O),p,p),B.n),B.b7),p,p,0,p,0,22)],n),p),B.ap),B.h,p,p,new A.o(p,p,p,B.I8,v,D.bGj,B.n),p,p,p,p,p,p,p,p),1)],n),B.ad,p,B.e,B.j,0,p,p))
return new A.am(B.V,p,B.a9,B.q,m,p)}}
C.amF.prototype={
S(){return new C.aA8(A.a([],x._))},
bm(){return this.r.$0()},
p_(){return this.w.$0()},
gdQ(){return this.c}}
C.aA8.prototype={
Z(){var w,v
this.a0()
this.v_()
w=this.a
v=w.c
if(v.length!==0)C.a4Q(v,w.e,w.d.w)},
uP(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fI_(r,t.e,!1,s.w,new C.dKm(u),null,s),$async$uP)
case 2:w=3
return A.b(u.v_(),$async$uP)
case 3:return A.h(null,v)}})
return A.i($async$uP,v)},
Yh(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fI_(r,t.e,!0,s.w,new C.dKl(u),null,s),$async$Yh)
case 2:w=3
return A.b(u.v_(),$async$Yh)
case 3:return A.h(null,v)}})
return A.i($async$Yh,v)},
v_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zv(q.a.c),$async$v_)
case 7:p=e
if(q.c!=null)n=q.e||J.cs(p)
else n=!1
if(n)q.n(new C.dKo(q,p))
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
return A.b(C.EX(q.a.c).cJ(0,B.oT),$async$v_)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dKp(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dKq(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v_,v)},
MN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.F(s).f.P(D.ehZ)
w=3
return A.b(C.EX(t.a.c),$async$MN)
case 3:r=e
w=4
return A.b(C.fov(t.a.c,r),$async$MN)
case 4:q=e
w=5
return A.b(C.EX(t.a.c),$async$MN)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dKk(t,p))
o=t.c.F(s).f
s=A.d(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(null,null,null,q?B.dr:B.cL,null,B.q,null,s,null,B.lR,null,null,null,null,null,null,null,null,null,null))
t.a.p_()
case 1:return A.h(u,v)}})
return A.i($async$MN,v)},
Gw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hNy(l),$async$Gw)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hif(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWg(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Gw)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h_y(r)
o=Date.now()
n=t.a.c
m=new C.kl(l,r.toUpperCase(),p,!0,B.U,D.AE,new A.N(o,0,!1),0,n,D.rK)
w=5
return A.b(C.a0q(n,m),$async$Gw)
case 5:w=6
return A.b(t.v_(),$async$Gw)
case 6:t.a.bm()
t.a.p_()
if(t.c==null){w=1
break}t.Da(m)
case 1:return A.h(u,v)}})
return A.i($async$Gw,v)},
Da(d){return this.c5Y(d)},
c5Y(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Da=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zv(u.a.c),$async$Da)
case 2:n=l.qD(k.dF(f,new C.dKn(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hl(m,new C.amz(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Da)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0q(u.a.c,o),$async$Da)
case 6:case 5:w=7
return A.b(u.v_(),$async$Da)
case 7:u.a.p_()
return A.h(null,v)}})
return A.i($async$Da,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.K(d).ax.a===B.H,o=new C.t5(p)
if(r.e)return A.as(A.mi(q,p?B.bm:B.bv,q,q,q,q,q,q,q,q),q,q,q)
if(J.ch(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.X,!0,q,A.aH(!1,q,!0,A.p(q,D.bub,B.h,q,q,new A.o(B.aS.j(0.12),q,A.G(B.aS,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cE,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc53(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.E3(A.p(q,A.u(A.a([u,B.aN,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bJ(D.eWZ,r.gaM7(),A.bk(B.bQ,q,q,q,q,q,Af.VA,q,new A.b5(A.m(12),B.W),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bif,q,q,1/0),15,B.ag,1.05,D.a55,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.xd,B.aS,q,q,q,q),q,q,q,new C.dKs(r),q,q,q,q,"Sync family trees with database",q))
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.x5,B.aS,q,q,q,q),q,q,q,r.gacv(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dj(E.aix,D.eEF,r.gaM7(),A.bk(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.aa)
u.push(new C.E3(r.crw(J.q(r.d,s),o),14,B.ag,1,D.a55,q))
B.d.v(w,u)}return A.u(A.a([p,B.ay,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
crw(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.G((v?B.dT:B.cf).j(0.55),B.r,1),r=A.a([new A.a9(0,B.G,B.x.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.btf,B.h,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galf(),m=d.d?"":" \xb7 Public",l=d.y===D.jY?" \xb7 View only":"",k=x.p
l=A.C(A.u(A.a([o,B.bw,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.X,!0,w,A.aH(!1,q,!0,new A.B(B.bA,A.A(A.a([p,B.ba,l,A.V(B.Ks,v?B.bm:B.bv,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dKr(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amz.prototype={
S(){return new C.aA5(A.a([],x._),A.aZ(x.N),A.b3S())},
bm(){return this.r.$0()},
gdQ(){return this.c}}
C.aA5.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9B()
w=u.a
v=w.c
if(v.length!==0)C.a4Q(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.at()
w.O$=0
this.a2()},
a06(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a06=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wN("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dJN(r),s,null,!0,!0,x.y),$async$a06)
case 3:if(e!==!0||t.c==null){w=1
break}t.HW()
t.n(new C.dJO(t,r))
w=4
return A.b(t.uR(),$async$a06)
case 4:t.a.bm()
t.wN(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a06,v)},
chP(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.x1$.push(new C.dJI(w,f,d,e))},
aOh(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.de()
u.dX(w,v,0,1)
u.jd(q,q,1,1)
this.w.st(0,u)},
b4f(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ew(new Float64Array(16))
q.dR(r)
w=q.Br()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.de()
t.dX(r,u,0,1)
t.jd(v,v,1,1)
t.dX(-r,-u,0,1)
t.ie(0,q)
s.st(0,t)},
a9B(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zv(u.a.c),$async$a9B)
case 2:t=s.qD(r.dF(e,new C.dJg(u)))
if(t!=null&&u.c!=null)u.n(new C.dJh(u,t))
return A.h(null,v)}})
return A.i($async$a9B,v)},
wN(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
uP(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$uP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fI_(o,t,!1,r,new C.dJv(u),q.a,s),$async$uP)
case 2:n=A
m=J
w=3
return A.b(C.EX(u.a.c),$async$uP)
case 3:p=n.qD(m.dF(e,new C.dJw(u)))
if(p!=null&&u.c!=null)u.n(new C.dJx(u,p))
return A.h(null,v)}})
return A.i($async$uP,v)},
HW(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0q(t,s),$async$uR)
case 2:return A.h(null,v)}})
return A.i($async$uR,v)},
ZK(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wN("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hOH(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZK)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HW()
t.n(new C.dJH(t,r))
w=4
return A.b(t.uR(),$async$ZK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZK,v)},
Yu(){return this.c6_()},
c6_(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wN("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.K(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dJF(r,new C.t5(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Yu)
case 3:if(e!==!0||t.c==null){w=1
break}t.HW()
t.n(new C.dJG(r,t))
w=4
return A.b(t.uR(),$async$Yu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yu,v)},
TL(d){return this.bt9(d)},
bt9(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ti(r,t.a.c)){t.wN("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dJ4(t,d),r,null,!0,!0,x.P),$async$TL)
case 3:s=f
if(s==null){w=1
break}t.HW()
t.n(new C.dJ5(t,s))
w=4
return A.b(t.uR(),$async$TL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TL,v)},
a0s(d){return this.ctD(d)},
ctD(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.K(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dJQ(u,d,new C.t5(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0s)
case 2:return A.h(null,v)}})
return A.i($async$a0s,v)},
c2n(d){var w=this,v=w.d
v===$&&A.c()
if(C.ti(v,w.a.c))w.Mt(d)
else w.a0s(d)},
aeY(d,e){return this.clC(d,e)},
clC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aeY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.K(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.dJK(new C.t5(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$aeY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aeY,v)},
GB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.jY?3:5
break
case 3:w=6
return A.b(C.fwd(t.a.c),$async$GB)
case 6:s=e
o=t.a
r=C.fPt(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aeY(!s,!r),$async$GB)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bx0(o,t.a.c)){t.wN("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kN(o,"Cancel","Remove",q.y===D.jY?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GB)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLn(t.a.c,t.d.a),$async$GB)
case 11:t.a.bm()
o=t.c
if(o==null){w=1
break}A.iC(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GB,v)},
a7c(d){return this.bDX(d)},
bDX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ti(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.be(s,new C.dJ6(p))){o=A.T(s)
p.a=A.qD(new A.cQ(new A.a5(s,new C.dJ7(d),o.k("a5<1>")),new C.dJ8(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.HW()
t.n(new C.dJ9(t,s,d,q))
w=3
return A.b(t.uR(),$async$a7c)
case 3:t.wN(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7c,v)},
Mt(d){return this.bFX(d)},
bFX(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ti(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0s(d),$async$Mt)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dJd(t,d),r,null,!0,!0,x.P),$async$Mt)
case 6:s=f
if(s==null){w=1
break}t.HW()
t.n(new C.dJe(t,s))
w=7
return A.b(t.uR(),$async$Mt)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mt,v)},
crQ(){var w=this,v=w.d
v===$&&A.c()
if(!C.ti(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dJP(w))
w.uR()},
Wt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bx0(n,t.a.c)){t.wN("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.K(n)
s=$.at()
r=new A.ao(B.aq,s)
q=t.d.e
p=A.bi(new A.I(q,t.gc0T(),A.T(q).k("I<1,n>")).bZ(0,new C.dJq()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dJr(t,new C.t5(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Wt)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HW()
t.n(new C.dJs(t,p))
w=4
return A.b(t.uR(),$async$Wt)
case 4:t.wN("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
c0U(d){return B.a.i(d.toLowerCase())},
c4P(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ti(v,w)
t=r.d
s=C.hEg(t)
C.hNC(q,t.b,u,C.hEf(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.K(d).ax.a===B.H,m=new C.t5(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a5(l,new C.dJX(),A.T(l).k("a5<1>")).gG(0)
l=n?B.bV:B.iP
v=A.V(B.WC,n?B.bm:B.bv,o,o,o,18)
u=x.p
v=A.a([new A.B(B.zB,A.aH(!1,o,!0,new A.B(B.hs,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dJY(p,d),o,o,o,o,o,o,o),o),new A.B(B.mz,p.bQz(m),o)],u)
if(p.d.y===D.jY){t=B.qx.j(0.15)
s=A.m(12)
r=A.G(B.qx.j(0.45),B.r,1)
q=C.EV(p.d,p.a.c)
v.push(new A.B(B.wp,A.p(o,A.A(A.a([D.byl,B.av,A.C(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a1,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iD,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.ti(p.d,p.a.c)&&p.e.length!==0)u.push(new C.I7("Undo",B.uC,p.gcrP(),m,o,o))
u.push(new C.I7("Family Book",D.bnT,p.gc4O(),m,B.rg,o))
if(C.ti(p.d,p.a.c))u.push(new C.I7("Display settings",Ai.EA,p.gc5Z(),m,B.aW,o))
u.push(new C.I7("Sync",B.x5,p.gacv(),m,o,o))
t=p.d
if(t.y===D.jY||C.bx0(t,p.a.c)){t=p.d.y===D.jY?"Remove shared tree":"Delete tree"
u.push(new C.I7(t,B.e4,p.gbE6(),m,B.fK,o))}if(C.ti(p.d,p.a.c))u.push(new C.I7("Add member",B.uy,new C.dJZ(p),m,B.bQ,o))
v.push(new A.B(O.acN,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galf()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cj(new C.dK_(p,m))
v.push(A.C(n,1))
if(w>0){n=p.f
u=A.V(n?K.WG:U.Kt,o,o,o,o,o)
v.push(A.as(A.hg(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dK0(p),o),o,o,o))}return A.ce(o,l,A.br(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bQz(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.a9(0,B.G,B.ff.j(0.35),B.dm,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.wZ,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.X,!0,m,A.aH(!1,m,!0,A.p(m,D.bBj,B.h,m,m,new A.o(B.c.j(0.16),m,A.G(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cE,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacv(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.Z,m,m,m,D.ert,m,m,m)
r=r.galf()
p=n.d.galf()===1?"member":"members"
o=x.p
p=A.a([s,B.ba,A.C(A.u(A.a([q,B.bw,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a1,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.ti(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.byx,m,m,m,n.gcfj(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.iZ:B.lZ
r=r?"Private":"Public"
r=A.C(n.arr(q,"Privacy",r,n.a.d.w?n.gcqW():m),1)
q=A.C(n.arr(B.x6,"Tree code",n.d.c,new C.dJf(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.aa,A.A(A.a([r,B.ab,q,B.ab,A.C(n.arr(D.bpF,"Collaborators",p,n.gbUU()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.jY){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.X,!0,A.m(999),A.aH(!1,A.m(999),!0,new A.B(B.fF,A.A(A.a([A.V(B.oa,B.c,m,m,m,14),B.ez,A.d("View only",m,m,m,m,m,m,B.aJj,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bu(u,new A.am(B.V,m,B.a9,B.q,A.a([t,new A.B(B.Dy,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.h,m,m,new A.o(m,m,m,w,v,D.bEv,B.n),m,m,m,m,m,m,m,1/0)},
arr(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.X,!0,A.m(14),A.aH(!1,A.m(14),!0,new A.B(D.bjY,A.u(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.Z,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ya,A.d(f,w,1,B.Z,w,w,w,L.aJ5,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)}}
C.ban.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gah(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.baq(s,t),new A.ap(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d_1(this),x.l))
r=s.c
B.d.v(u,new A.I(r,new C.d_2(this),A.T(r).k("I<1,r>")))
return new A.B(B.rH,new A.a3(w,v,new A.am(B.V,t,B.a9,B.h,u,t),t),t)}}
C.Ii.prototype={}
C.Ef.prototype={}
C.bap.prototype={
gbcm(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFA.prototype={}
C.baq.prototype={
bFF(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.a1()
v=A.U()
v.r=B.bz.j(0.75).gt(0)
v.c=2
v.d=B.bZ
d.bU(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.b0(q.r,B.aw,null,null,A.a([],x.v))
q=w+5.5
t.N(new A.bj(u,q))
s=w-1.1
r=w-8.8
t.N(new A.p5(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.N(new A.p5(u+4.95,r,u+9.9,s,u,q))
t.N(new A.bW())
q=A.U()
q.r=B.c.gt(0)
d.aw(new A.v(u,w),9,q)
q=A.U()
q.r=B.bz.gt(0)
d.b4(t,q)},
bFD(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.d_m())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.be(a0,new C.d_n(f))
t=new A.I(a0,new C.d_o(f),A.T(a0).k("I<1,P>")).bZ(0,new C.d_p()).cI(0,1/0,B.vI)
w=f.a
d.bU(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.J)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.L()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lB(m)
i=Math.min(10,l/2)
l=$.a1()
h=A.a([],q)
g=new A.b0(l.r,B.aw,null,null,h)
h.push(new A.bj(w,v-i))
l=j*i
h.push(new A.dl(w,v,w+l,v))
h.push(new A.av(n-l,v))
h.push(new A.dl(n,v,n,v+i))
h.push(new A.av(n,o.b))
k=e.L()
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cG(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.a1()
w=A.U()
w.r=B.bQ.j(0.75).gt(0)
w.c=2.2
w.b=B.ak
w.d=B.bZ
w.e=B.fk
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.J)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bFD(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.L()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.J)(v),++s){q=v[s]
if(q.c)this.bFF(d,w,q.a,q.b)}},
ao(d){return d.b!==this.b}}
C.be4.prototype={
gbZL(){var w=this.c
if(B.a.i(w.y).length!==0)return D.cZh
switch(w.c.a){case 0:return D.cvv
case 1:return D.cFK
case 2:return D.cUm}},
gbZO(){var w=this.c,v=C.fZZ(w.w),u=C.fZZ(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.K(d).ax.a===B.H,q=t.gbZL(),p=t.c,o=I.bxS(p.f),n=t.gbZO(),m=x.V,l=A.a([new A.a9(0,B.G,B.d.gai(q).j(0.35),B.cD,10)],m),k=r?B.aG:B.c,j=A.G(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.rx(B.B,s,B.ci,B.bM,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.B,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a8(B.a_,B.a7,B.w,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hN(w,B.ap),B.h,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aE,B.w,q,s,s),B.a6),s,56,s,s,B.DN,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.G(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eB1,s,s,s),B.h,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.bk1,s,s,s),s,s,s,-6,-4,s))}k=r?B.d3:B.c
j=A.m(8)
w=A.G(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.a9(0,B.G,B.x.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.d3,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bv,s,s,s,s,s,s,s,s,7.5,s,s,B.a1,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aJ(s,new A.a3(84,112,A.u(A.a([new A.am(B.V,s,B.a9,B.h,l,s),B.au,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aQZ,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bkb,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.af)}}
C.b9w.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.a1()
w=A.U()
v=this.b
u=v?B.c:D.b0Y
w.r=u.j(v?0.05:0.09).gt(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.L()
t.drawCircle(r,s,1,q)
q.delete()}},
ao(d){return d.b!==this.b}}
C.brt.prototype={
B(d){var w=this,v=null,u=new C.eUQ(w),t=w.c,s=t?B.d3:B.c,r=A.m(12),q=u.$3(B.hH,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Et,"Zoom out",w.e)
return A.aD(!1,B.X,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),u.$3(B.ag7,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dt,v,v,v,B.ac)}}
C.bhl.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.G(B.bQ,B.r,2),s=w.e,r=x.p
t=A.aJ(v,A.p(v,A.u(A.a([A.V(s?K.WG:U.Kt,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.exs,v,v,v)],r),B.m,v,B.b5,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.af)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.evv,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.I(s,new C.ewv(w),A.T(s).k("I<1,r>")))
B.d.v(u,t)}return new A.a3(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XJ.prototype={
S(){return new C.ayx()},
bm(){return this.Q.$0()},
gdQ(){return this.w}}
C.ayx.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.at()
r.d!==$&&A.aO()
r.d=new A.ao(new A.bb(t,B.aZ,B.aL),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ao(new A.bb(t,B.aZ,B.aL),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ao(new A.bb(t,B.aZ,B.aL),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ao(new A.bb(t,B.aZ,B.aL),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ao(new A.bb(t,B.aZ,B.aL),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ao(new A.bb(t,B.aZ,B.aL),s)
t=u?q:v.c
r.y=t==null?D.wB:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hFL(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.at()
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
NL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fPt(p.y,p.w)
w=3
return A.b(A.kZ(t.a.w,B.Ga),$async$NL)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWg(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NL)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hig(p.y,p.w)
t.a.bm()
case 5:w=7
return A.b(Ah.F5(78,800),$async$NL)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.deC(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NL,v)},
bZN(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hP(B.o.u(1000*Date.now()),w,D.wB,null,null,null,"","","","","",1,!1,0)
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
s=v.azO(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).K(s)},
a6P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a6P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.deB(r),s,null,!0,!0,x.y),$async$a6P)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).K(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a6P,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===B.H,i=new C.t5(j),h=l.a.e,g=A.T(h).k("a5<1>"),f=A.z(new A.a5(h,new C.deL(l),g),g.k("F.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.B(D.biA,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hJ(A.aH(!1,k,!0,new A.B(B.lU,A.V(B.e4,B.nX,k,k,k,17),k),B.cE,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbAO(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.j7:B.iz
t=I.bxS(l.as)
if(l.as==null)s=A.V(B.o3,j?B.bm:B.bv,k,k,k,40)
else s=k
s=A.as(A.aJ(k,new A.am(B.V,k,B.a9,B.q,A.a([A.hh(u,t,s,k,42),A.an(0,A.hh(B.bQ,k,D.bsi,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gbZK(),k,k,k,k,k,k,!1,B.af),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayz(t,"Full name",B.lV,1,1,i,B.lA)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.T,new C.be2(i,u,new C.deM(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bcf],q)
o=l.a.e
B.d.v(p,new A.I(o,new C.deN(),A.T(o).k("I<1,eq<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bch],q)
B.d.v(q,new A.I(f,new C.deP(),A.T(f).k("I<1,eq<n?>>")))
o=A.u(A.a([t,B.ar,new C.aaB(i,r,"Who is their parent?",p,new C.deQ(l),k,o),B.ay,n,B.ar,new C.aaB(i,m,"Who is their spouse / partner?",q,new C.deR(l),k,o)],v),B.ad,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayz(q,"Birth date",D.afe,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayz(m,"Birth place",B.WV,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayz(n,"Date of death (if deceased)",D.ahn,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayz(p,"Occupation",B.Y3,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.B,k,B.a9,B.q,w,k),B.ay,s,B.bs,new C.aaC(i,"Identity",u,k),B.aa,new C.aaC(i,"Family links",o,k),B.aa,new C.aaC(i,"Life details",A.u(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ayz(r,"Notes",B.ky,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.aa,new C.ayy(i,"Child order",l.c69(l.at),new C.deS(l),new C.deT(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fFt(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.deU(l):k
B.d.v(r,A.a([B.T,new C.ayy(i,"Visible in tree",u,w,new C.deV(l),k)],v))}r.push(B.T)
w=j?B.j7:B.iz
u=A.m(14)
t=A.G(j?B.dT:B.cf,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.it(k,B.bQ,k,B.ag,k,new C.deW(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.acp,k,k,k))
r.push(B.bs)
w=j?B.aO:B.aG
j=j?B.dT:B.cf
r.push(A.A(A.a([A.C(A.dU(B.mX,new C.deO(d),A.d9(k,k,k,k,k,k,k,k,k,w,k,k,B.ca,k,new A.b5(A.m(14),B.W),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.ba,A.C(A.bJ(D.ebf,l.gbZM(),A.bk(B.aS,k,k,0,B.c,k,B.ca,k,new A.b5(A.m(14),B.W),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.ep(B.fS,k,B.ag,h,new A.a3(420,k,A.cf(A.u(r,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),k),D.adg,k,B.acF,new A.b5(g,B.W),k,k)},
c69(d){var w=B.o.J(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.J(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaC.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j7:B.iz,s=A.m(16)
return A.u(A.a([new A.B(D.adE,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.G(v?B.dT:B.cf,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.be3.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.G((t?B.dT:B.cf).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a1,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bl(u,B.ep,u,B.ud,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bm:B.bv,u,u,u,u,u,u,u,u,u,u,u,B.cp,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ae,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaB.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.G((u?B.dT:B.cf).j(0.85),B.r,1),q=A.V(B.qh,u?B.bm:B.bv,v,v,v,v),p=A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a1,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Ci(A.a24(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,v,v,v,B.cp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lT,v,v,v)}}
C.be2.prototype={
B(d){var w=new C.deX(this)
return A.A(A.a([w.$3(D.Wo,"Male",B.Lc),B.ab,w.$3(D.aeu,"Female",B.KY),B.ab,w.$3(D.wB,"Other",B.mE)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayy.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.j7:B.iz,r=A.m(14),q=A.G(t?B.dT:B.cf,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.C(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aED(u,B.Et,w.f,v),B.bp,new C.aED(u,B.hH,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aED.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bQ
else t=(s.c.a?B.bm:B.bv).j(0.4)
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,new A.a3(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ac)}}
C.aaD.prototype={
bJe(d){switch(d.a){case 0:return B.bQ
case 1:return B.bz
case 2:return B.cS}},
bJf(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aSn(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
z7(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.G((w?B.dT:B.cf).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bQ,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.C(A.u(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.zz,p,p,1/0)},
ab3(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j7:B.iz,s=A.m(16),r=A.G(v?B.dT:B.cf,B.r,1)
return A.u(A.a([new A.B(D.adE,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h3A(r,q),o=q.c,n=t.bJe(o),m=I.bxS(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.jY?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bm:B.bv,s,s,s,s,s,s,s,s,12,s,s,B.a1,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.G(n,B.r,3)
v=A.a([new A.a9(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.hh(u,m,m==null?A.V(B.o3,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ef,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.G(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bJf(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.my,s,s,s),s,s,s)
u=x.p
i=A.a([t.z7("Full name",i,B.lV)],u)
if(p>0)i.push(t.z7("Child order","#"+p,B.L4))
r=A.a([h,B.au,r,B.aN,l,B.T,v,B.bs,t.ab3("Identity",i),B.aa,t.ab3("Life details",A.a([t.z7("Birth date",q.w,D.afe),t.z7("Birth place",q.x,B.WV),t.z7("Date of death",q.y,D.ahn),t.z7("Occupation",q.z,B.Y3)],u)),B.aa,t.ab3("Family links",A.a([t.z7("1. Parent",t.aSn(q.d),B.E_),t.z7("2. Spouse",t.aSn(q.e),B.KX)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.aa,t.ab3("Notes",A.a([t.z7("Notes",q,B.ky)],u))],u))
r.push(B.bs)
r.push(A.bJ(B.Hj,new C.df6(d),A.bk(B.aS,s,s,s,s,s,B.ca,s,new A.b5(A.m(14),B.W),s,s,s)))
return A.eB(s,k,new A.d2(B.le,A.cf(A.u(r,B.ad,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zH,s,s,B.ah),s),s,s,s,B.DC,B.cZ,s,new A.b5(j,B.W),s)}}
C.I7.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bm:B.bv
w=t.j(v.f.a?0.14:0.08)
return new A.B(B.wu,A.hJ(A.aD(!1,B.X,!0,A.m(8),A.aH(!1,A.m(8),!0,new A.a3(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.amC.prototype={
eD(){var w,v,u=this,t=x.N,s=A.R(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().aa())
w=u.c
v=A.T(w).k("I<1,a0<n,@>>")
w=A.z(new A.I(w,new C.c2J(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iC(w,new C.c2K(),t,x.U))
return s}}
C.amD.prototype={
S(){return new C.aA7(A.a([],x.bF))},
gd6(){return this.c}}
C.aA7.prototype={
Z(){this.a0()
this.I2()},
I2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c2N(t.a.c),$async$I2)
case 3:r=e
w=4
return A.b(C.zv(t.a.c),$async$I2)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rj(q,new C.dK9(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dKa(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I2,v)},
xi(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IM(d,e){return this.cu9(d,e)},
cu9(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dKe(q,e))
t=3
w=6
return A.b(d.$0(),$async$IM)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dKf(q))
$.eI.lU()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IM,v)},
Vl(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oB(r,s.c,s.e),$async$Vl)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dK6(t),"Preparing download\u2026"),$async$Vl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vl,v)},
Vp(d){return this.bHl(d)},
bHl(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oB(r,s.c,s.e),$async$Vp)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dK7(t,d),"Preparing file\u2026"),$async$Vp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vp,v)},
acS(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$acS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wf.c2().Ks(B.O_,B.rL,!0),$async$acS)
case 7:r=e
o=r
q=o==null?null:J.fi(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aD.gah(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jd(o,0,null)
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
case 6:u=A.F4()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acS,v)},
VZ(d){return this.bRq(d)},
bRq(d){var w=0,v=A.j(x.H),u=this
var $async$VZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IM(new C.dK8(u,d),"Restoring family trees\u2026"),$async$VZ)
case 2:return A.h(null,v)}})
return A.i($async$VZ,v)},
VY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.acS(),$async$VY)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.VZ(s),$async$VY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VY,v)},
a_z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oB(r,s.c,s.e),$async$a_z)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKd(t),"Creating QR code\u2026"),$async$a_z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_z,v)},
a_a(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BB()){t.xi("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).cr(A.eH(new C.dKb(),!0,null,x.N)),$async$a_a)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.VZ(r),$async$a_a)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_a,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===B.H,n=o?B.z2:B.iP,m=o?D.ab3:B.aO,l=o?B.aI:B.cf,k=o?B.aO:B.aG,j=new C.d_q(n,m,l,k,o?B.bP:B.bv)
l=A.aF(p,p,p,p,A.V(B.es,k,p,p,p,20),p,p,p,new C.dKh(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eA(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.C(C.cZZ(!0,B.j1,B.b3,B.b3,q.r?p:q.gclq(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gchK()
t.push(A.C(C.cZZ(!s,B.iF,B.b0,B.bE,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.C(C.cZZ(!1,B.hi,B.aS,B.bQ,q.r?p:q.gbHe(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.C(C.cZZ(!1,M.x8,B.b_,B.aM,q.r?p:q.gbRn(),j,s,"Upload backup file"),1))
l=A.a([new C.bao(v,l,p),B.ka,new C.a9U(j,"QR restore",p),B.T,t,B.d1,new C.a9U(j,"Backup files",p),B.T,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.ka,new C.a9U(j,"One tree",p),B.T],u)
B.d.v(v,J.b4(q.d,new C.dKi(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cL(l,p,B.Vw,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.G(B.aS.j(0.35),B.r,1)
s=A.a([new A.a9(0,B.G,B.x.j(o?0.3:0.1),B.dm,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.br(!0,A.p(p,A.A(A.a([K.aHO,B.ba,A.C(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zG,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.ce(w,n,new A.am(B.V,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d_q.prototype={}
C.bao.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.a9(0,B.G,B.aS.j(0.32),B.kH,28)],x.V)
t=A.an(p,A.V(B.t2,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.B(B.a8,A.A(A.a([A.p(p,D.bAS,B.h,p,p,new A.o(s,p,A.G(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nC,A.C(A.u(A.a([D.eFy,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bHp,B.n),p,p,p,p,p,p,p,p)}}
C.a9U.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bam.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b3.j(0.4):m.c
k=A.G(k,B.r,l?1.5:1)
l=l?A.a([new A.a9(0,B.G,B.b3.j(0.1),B.cD,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.G(t.j(0.35),B.r,1)
return A.aD(!1,B.X,!0,q,A.aH(!1,o,!0,A.er(A.d4(new A.B(E.V9,A.u(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qe,q,q,q),B.aa,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bw,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cp,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)}}
C.bar.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.G(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.er(new A.B(B.eE,A.A(A.a([A.p(v,D.bA4,B.h,v,v,new A.o(q,v,A.G(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qe,v,v,v),B.ba,A.C(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hi,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Y3.prototype={
S(){return new C.aA6()},
gd6(){return this.c}}
C.aA6.prototype={
Z(){this.a0()
this.a6o()},
a6o(){var w=0,v=A.j(x.H),u=this,t
var $async$a6o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aYU(u.a.c,B.Bf),$async$a6o)
case 2:t=e
if(u.c!=null)u.n(new C.dK1(u,t))
return A.h(null,v)}})
return A.i($async$a6o,v)},
aef(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aef=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dK2(q))
t=4
p=A.fR3(q.a.d,B.Bf)
if(p==null){n=A.b9("Could not read this QR code.")
throw A.O(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aoN(n.e,m,l,B.Bf,p,n.f),$async$aef)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dK3(q))
q.c.F(x.q).f.P(D.ej7)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a4(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(B.a.e0(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dK4(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aef,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.K(d).ax.a===B.H,o=p?B.iT:B.oO,n=p?B.hn:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eA(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.eTY,q,q,q,1,q,!0)
w=A.m(24)
v=A.G(B.aS.j(0.35),B.r,1)
u=A.pj(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.C(A.p(q,A.u(A.a([B.P,u,B.bs,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aj,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b5,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.al:B.bB,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gchs()
if(u)u=B.GV
else u=A.V(r.e===!0?B.hh:B.afd,q,q,q,q,q)
w=A.a([w,B.aa,v,B.aa,new A.a3(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.d9(q,q,q,q,q,q,q,q,q,B.aS,q,B.fV,q,q,q,new A.ax(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.B(B.iW,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.aj,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a3(1/0,q,A.bJ(B.yk,new C.dK5(d),A.bk(B.aS,q,q,q,q,B.fV,q,q,q,q,q,q)),q))
return A.ce(m,o,new A.B(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Y4.prototype={
S(){return new C.bft(A.y7(B.wa,B.n3,B.t6))}}
C.bft.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.ce(A.eA(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eMK,w,w,w,1,w,!0),B.x,A.y6(this.d,B.bM,new C.dKj(this,d)),w,!1,!1,w,w)}}
C.aUP.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Nx,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lh.prototype={}
C.a3U.prototype={
S(){return new C.bfc(null,null)}}
C.bfc.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bh(v,B.rA,v,1,v,w)
w.e=A.bh(v,B.oS,v,1,v,w)
w.a.toString
w.d.cF(0)
w.e.cF(0)},
bo(d){var w,v,u=this
u.bA(d)
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
this.boJ()},
B(d){var w,v,u=this,t=B.d.dM(D.a_D,new C.dwB(u),new C.dwC())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cne(A.c4(new A.h3(A.a([w,v],x.dS)),new C.dwD(u,t),null),!0)}}
C.bfb.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWf(d,e)
break
case"house":p.lv(d,e,D.cJZ)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.a1()
t=A.U()
t.r=B.c.j(0.18+v*0.12).gt(0)
d.aw(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lA(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zQ(d,e,12)
p.wV(d,e,B.kP,5,14)
break
case"grocery":p.c6R(d,e)
break
case"calculator":p.c6y(d,e)
break
case"lumber":p.c6Z(d,e)
break
case"kitchen":p.c6U(d,e)
break
case"landscape":p.lv(d,e,D.cKq)
s=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.N(new A.bj(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.N(new A.dl(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.N(new A.dl(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.N(new A.av(t,w))
s.N(new A.av(0,w))
s.N(new A.bW())
w=A.U()
w.r=B.fo.j(0.85).gt(0)
d.b4(s,w)
p.zQ(d,e,8)
p.wV(d,e,B.iC,4,18)
break
case"plumbing":p.c77(d,e)
break
case"electrical":p.lv(d,e,D.cTI)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.a1()
u=A.U()
u.r=B.c.j(q*0.12).gt(0)
d.bp(new A.af(0,0,0+e.a,0+e.b),u)
p.lA(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lA(d,e,B.nb.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zQ(d,e,10)
break
case"store":p.c7g(d,e)
break
case"paint_remodel":p.c72(d,e)
break
case"roofing":p.c79(d,e)
break
case"warehouse":p.c7n(d,e)
break
case"vehicles":p.c7l(d,e)
break
case"farm":p.c6L(d,e)
break
case"restaurant":p.c78(d,e)
break
case"tools":p.c7j(d,e)
break
case"wallet":p.c7m(d,e)
break
case"concrete":p.c6E(d,e)
break
case"blueprint":p.c6w(d,e)
break
default:p.aWf(d,e)}},
lv(d,e,f){var w,v=new A.af(0,0,0+e.a,0+e.b)
$.a1()
w=A.U()
w.sav(new A.a8(B.ax,B.aE,B.w,f,null,null).aB(0,v))
d.bp(v,w)},
lA(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gef()/2-h
$.a1()
w=A.U()
w.b=B.ak
w.c=2.4
w.r=f.gt(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.c1(q,p)
r=w.L()
v.drawArc.apply(v,[A.cz(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wV(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a1()
q=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gt(0)
p=q.L()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zQ(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.J(s*0.17,0.9)
p=B.k.J(s*0.23,0.85)
$.a1()
o=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.c.j(0.2+r*0.6).gt(0)
n=o.L()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWf(d,e){var w,v=this
v.lv(d,e,D.cSE)
w=v.c
v.lA(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lA(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bFz(d,e,B.hD,w)
v.wV(d,e,B.c.j(0.7),6,8)},
bFz(d,e,f,g){var w,v,u,t,s,r,q,p
$.a1()
w=A.U()
w.r=f.j(0.35).gt(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.L()
s.drawRect(A.cz(new A.af(16,q,t,q+3)),p)
p.delete()}},
c6R(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.c1F)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.J(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.J(s,2)
$.a1()
l=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
l.r=D.cIq[B.o.J(s,4)].j(0.85).gt(0)
k=l.L()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lA(d,e,B.c.j(0.35),w,16)
j.wV(d,e,B.iC,5,12)},
c6y(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lv(d,e,D.c1L)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gef()
$.a1()
q=A.U()
q.r=B.c.j(0.1+u*0.12).gt(0)
d.aw(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.j0(g,g,g,g,g,B.a5,B.cn,g,B.eL,B.cm)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cLT[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.J(o,2)
p.saR(0,new A.ez(r,g,g,B.cT,g,g,g,g,g,g,new A.E(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fD()
p.a5(d,new A.v(t*(0.08+B.o.J(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c1N[o]
l=B.kO.j(0.28+0.3*Math.sin(n))
k=B.o.J(o,2)
p.saR(0,new A.ez(m,g,g,B.cT,g,g,g,g,g,g,new A.E(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fD()
p.a5(d,new A.v(t*(0.55+B.o.J(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lA(d,e,B.c.j(0.35),w*1.5,14)
h.lA(d,e,B.eN.j(0.55),-v*3.141592653589793*2,8)
h.lA(d,e,B.z3.j(0.4),r*2.8,22)
h.wV(d,e,B.oI,8,10)
h.zQ(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.J(w+o*0.22,0.9)
$.a1()
r=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gt(0)
r.c=1.2
i=r.L()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c6Z(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,Ac.aqA)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.c_(new A.af(20,q,u,q+10),B.k7)
$.a1()
o=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=A.aq(B.hC,B.nN,(r+1)/2).gt(0)
n=o.L()
t.drawRRect(A.fM(p),n)
n.delete()}m.lA(d,e,B.hC.j(0.35),w,15)
m.zQ(d,e,8)},
c6U(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.cIS)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.J(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.J(r*0.13,0.7)
$.a1()
l=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
l.r=B.c.j(0.25+p*0.55).gt(0)
k=l.L()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lA(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.wV(d,e,B.pV,4,14)},
c77(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lv(d,e,D.cyU)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.J(s,0.12)
$.a1()
n=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
n.b=B.ak
n.c=2
n.r=B.c.j(0.45-q*0.12).gt(0)
m=n.L()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wV(d,e,B.nU,6,12)
l.lA(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c7g(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lv(d,e,D.cf6)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.c_(new A.af(q,14,q+u,22),B.jL)
$.a1()
p=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.fp,B.bK,(r+1)/2).gt(0)
o=p.L()
t.drawRRect(A.fM(q),o)
o.delete()}n.lA(d,e,B.c.j(0.3),w,16)
n.zQ(d,e,8)
n.wV(d,e,B.tW,5,13)},
c72(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cEe)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.J(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.c_(new A.af(q,p,q+8,p+(18+r*22)),B.i_)
$.a1()
q=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
q.r=[B.i6,B.dE,B.bK,B.eY][s].j(0.85).gt(0)
o=q.L()
t.drawRRect(A.fM(p),o)
o.delete()}this.lA(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c79(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cC_)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.J(v+s*0.12,0.75))
q=B.o.J(s,4)*0.22
$.a1()
p=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.25).gt(0)
p.c=1.5
o=p.L()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wV(d,e,B.ct,7,11)},
c7n(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.chJ)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.c_(new A.af(p,o,p+(t-r*8),o+16),B.k7)
$.a1()
p=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.ct,B.aO,(Math.sin(q)+1)/2).gt(0)
n=p.L()
s.drawRRect(A.fM(o),n)
n.delete()}this.lA(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c7l(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cXd)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.J(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.J(s,2)*0.08)
q=A.c_(new A.af(r,q,r+28,q+8),B.k7)
$.a1()
p=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.35+s*0.08).gt(0)
o=p.L()
t.drawRRect(A.fM(q),o)
o.delete()}this.zQ(d,e,6)},
c6L(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cHC)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.a1()
s=A.U()
s.r=B.nb.j(0.75).gt(0)
d.aw(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.hc.j(0.85).gt(0)
o.c=3
n=o.L()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lA(d,e,B.nb.j(0.35),w,14)},
c78(d,e){var w,v,u,t,s,r,q,p,o=this
o.lv(d,e,D.cJO)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.dy(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a1()
q=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.22).gt(0)
p=q.L()
t.drawOval(A.cz(r),p)
p.delete()}o.wV(d,e,B.pV,5,16)
o.zQ(d,e,7)},
c7j(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cV3)
w=m.c
v=w*3.141592653589793
m.lA(d,e,B.nN.j(0.55),v*3,10)
m.lA(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.a1()
o=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.nN.j(0.8).gt(0)
n=o.L()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c7m(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cXG)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.c_(new A.af(p,o,p+36,o+22),B.jL)
$.a1()
p=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.iC,B.nb,q).gt(0)
n=p.L()
s.drawRRect(A.fM(o),n)
n.delete()}m.zQ(d,e,9)
m.lA(d,e,B.c.j(0.4),w*2.2,12)},
c6E(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cOn)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c1(new A.v(v,u),34)
$.a1()
s=A.U()
s.b=B.ak
s.c=5
s.r=B.c.j(0.45).gt(0)
d.fP(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ay(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.cf.j(0.85).gt(0)
n=o.L()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c6w(d,e){var w,v,u,t,s,r,q,p
this.lv(d,e,D.cKG)
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
u.r=B.dE.j(0.45).gt(0)
d.bp(new A.af(0,p,0+v,p+6),u)
this.lA(d,e,B.kP.j(0.45),-t*3.141592653589793*2,11)},
ao(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aps.prototype={
XV(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMi(),$async$XV)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a65(s),$async$XV)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$XV,v)},
acT(d){return this.c9C(d)},
c9C(d){var w=0,v=A.j(x.H),u=this,t
var $async$acT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hNM(d),$async$acT)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$acT,v)},
B(d){var w,v,u,t=null,s=A.K(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.j7:B.iz
w=x.p
v=A.a([C.aMF(!0,B.pL,1/0,B.p0,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.x.j(0.35)],x.O)
v.push(A.bQ(new A.bE(B.b4,t,t,new A.B(B.u9,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ars,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b4,B.bb,B.w,u,t,t),B.n),B.b7))}v.push(A.an(8,A.A(A.a([A.C(A.dj(D.bu4,D.eCb,new C.cad(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jB,t,t,t,t,B.c6)),1),B.ab,A.C(A.ey(D.bC2,D.ePC,this.gc0R(),A.d9(t,t,B.x.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jB,t,t,D.aPA,t,t,t,B.c6)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fN(1.7777777777777777,A.aD(!1,B.X,!0,B.pL,new A.am(B.V,t,B.aX,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aHU.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aPw.prototype={}
C.aPv.prototype={}
C.aNA.prototype={}
C.WI.prototype={
S(){return new C.avs()}}
C.avs.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bb("",B.aZ,B.aL)
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
ID(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.F(x.q).f.P(D.ejC)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).K(new C.aPw(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.K(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bBK,B.h,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.C(A.u(A.a([i,B.bw,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.ba,i,A.aF(n,n,n,n,A.V(B.cu,m?B.bm:B.bv,n,n,n,n),n,n,n,new C.cSI(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,11,n,n,B.cp,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fRj(new C.cSJ(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a1,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.j7:B.iz
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.cf
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bl(n,new A.b1(4,r,B.da),n,n,n,n,n,n,!0,new A.b1(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ae,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cSK(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,W.GZ,n,n,n,n)
u=m?B.aO:B.aG
m=m?B.dT:B.cf
return A.eB(n,l,new A.d2(B.le,A.cf(A.u(A.a([j,B.aN,i,B.au,w,B.P,v,B.aN,t,B.bs,A.A(A.a([A.C(A.dU(B.de,new C.cSL(d),A.d9(n,n,n,n,n,n,n,n,n,u,n,n,B.ca,n,new A.b5(A.m(12),B.W),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.av,A.C(A.bJ(D.ePR,o.ga_R(),A.bk(B.aS,n,n,n,B.c,n,B.ca,n,new A.b5(A.m(12),B.W),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zJ,n,n,B.ah),n),n,n,n,T.zK,B.cZ,n,new A.b5(k,B.W),n)}}
C.WH.prototype={
S(){return new C.avr()}}
C.avr.prototype={
Z(){this.a0()
var w=$.at()
this.d!==$&&A.aO()
this.d=new A.ao(B.aq,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
ID(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.F(x.q).f.P(D.ehj)
return}v=this.c
v.toString
A.a7(v,!1).K(new C.aPv(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.K(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.byq,B.h,q,q,new A.o(B.bQ.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.C(A.u(A.a([l,B.bw,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.ba,l,A.aF(q,q,q,q,A.V(B.cu,p?B.bm:B.bv,q,q,q,q),q,q,q,new C.cSE(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.G(B.aS.j(0.25),B.r,1)
u=A.V(B.aeZ,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.C(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bA,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.j7:B.iz
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.cf
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bl(q,new A.b1(4,t,B.da),q,q,q,q,q,q,!0,new A.b1(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ae,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cSF(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kb,q,q,q,q)
w=p?B.aO:B.aG
p=p?B.dT:B.cf
return A.eB(q,o,new A.d2(B.le,A.cf(A.u(A.a([m,B.aN,l,B.ay,v,B.bs,A.A(A.a([A.C(A.dU(B.de,new C.cSG(d),A.d9(q,q,q,q,q,q,q,q,q,w,q,q,B.ca,q,new A.b5(A.m(12),B.W),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.av,A.C(A.bJ(D.eW3,this.ga_R(),A.bk(B.bQ,q,q,q,B.c,q,B.ca,q,new A.b5(A.m(12),B.W),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zJ,q,q,B.ah),q),q,q,q,T.zK,B.cZ,q,new A.b5(n,B.W),q)}}
C.We.prototype={
S(){return new C.aud()}}
C.aud.prototype={
Z(){var w,v=this
v.a0()
w=$.at()
v.d!==$&&A.aO()
v.d=new A.ao(B.aq,w)
v.e!==$&&A.aO()
v.e=new A.ao(new A.bb("1",B.aZ,B.aL),w)
v.f!==$&&A.aO()
v.f=new A.ao(B.aq,w)
v.r!==$&&A.aO()
v.r=new A.ao(B.aq,w)},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.at()
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
gHY(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gag1(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gaZ_(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aJS(d){var w,v=B.k.D(this.gHY()+d,0.25,999999),u=B.k.lp(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.M(v))
else{u=B.k.ab(v,2)
w=A.ad("\\.?0+$",!0,!1,!1,!1)
u=A.aI(u,w,"")}t.saR(0,u)
this.n(new C.cqr())},
atN(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.j7:B.iz,s=A.m(14),r=A.m(14)
u=u?B.dT:B.cf
return A.bl(w,new A.b1(4,s,B.da),w,B.bA,w,w,w,w,!0,new A.b1(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b1(4,A.m(14),B.a6s),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c0S(d,e,f){return this.atN(d,e,f,null)},
ID(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gag1()<=0){s.c.F(x.q).f.P(D.elt)
return}r=s.c
r.toString
v=s.gHY()
u=s.gag1()
t=s.gaZ_()
A.a7(r,!1).K(new C.aNA(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.K(d).ax.a===B.H,m=new C.t5(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bQ.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bs0,B.h,o,o,new A.o(o,o,A.G(B.aS.j(0.35),B.r,1),h,o,new A.a8(B.a_,B.a7,B.w,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.C(A.u(A.a([h,B.bw,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.cp,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.ba,h,A.aF(o,o,o,o,A.V(B.cu,n?B.bm:B.bv,o,o,o,o),o,o,o,new C.cqx(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.atN(m,"Item name (optional)","Lumber, paint, labor\u2026",B.La),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,W.GZ,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.j7:B.iz
t=A.m(14)
s=A.G(n?B.dT:B.cf,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Et,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqy(p),o,o,o,o,o,B.c6)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bDw,B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqz(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a3(52,o,q,o),A.aF(o,o,o,o,A.V(B.hH,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqA(p),o,o,o,o,o,B.c6)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.C(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.atN(m,"Amount","0.00",B.hI),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqB(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.z(new A.I(D.cEG,new C.cqC(p,m),t),t.k("ai.E"))
i=A.a([i,B.bs,v,B.ay,h,B.P,s,B.aa,A.cb(B.bH,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c0S(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cqD(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kb,o,o,o,o)],w))}i.push(B.aN)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.G(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gHY()===B.k.lp(p.gHY())?B.k.M(p.gHY()):p.gHY()
s=p.gaZ_()
r=A.zx(p.gag1())
i.push(A.p(o,A.A(A.a([A.C(A.u(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.byD(p.gHY()*p.gag1(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a8(B.a_,B.a7,B.w,j,o,o),B.n),o,o,o,o,B.iE,o,o,o))
i.push(B.bs)
j=A.m(14)
h=n?B.dT:B.cf
h=A.d9(o,o,o,o,o,o,o,o,o,o,o,o,B.ca,o,new A.b5(j,B.W),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.C(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cqE(d),h),1),B.av,A.C(A.dj(D.aiq,D.eSn,p.ga_R(),A.bk(B.aS,o,o,0,B.c,o,B.ca,o,new A.b5(A.m(14),B.W),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eB(o,l,new A.d2(S.a6P,A.cf(A.u(i,B.ad,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A5.qd,o,o,B.ah),o),o,o,o,B.JU,B.cZ,o,new A.b5(k,B.W),o)}}
C.ZM.prototype={
S(){return new C.brl()}}
C.brl.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,B.aZ,B.aL),v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.K(d).ax.a===B.H,q=r?B.dR:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aO:B.aG,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.j7:B.iz
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bl(s,new A.b1(4,A.m(12),B.da),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eUi(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.C(A.dU(B.de,new C.eUj(d),s),1)
r=A.bk(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eB(s,q,new A.B(B.zJ,A.u(A.a([o,B.ay,v,B.aN,A.A(A.a([u,B.av,A.C(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eUk(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cZ,s,new A.b5(p,B.W),s)}}
C.a8Y.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.E3.prototype={
S(){return new C.brj(null,null)}}
C.brj.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,D.bcP,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.br0()},
gbsm(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bQ,B.aW],x.O)
case 2:return A.a([B.br,B.aS,B.aW],x.O)
case 3:return A.a([B.b3,B.c9,B.j8],x.O)
case 4:return A.a([B.hT,B.bQ,B.eT],x.O)
case 0:return A.a([B.aS,B.bQ,B.aW],x.O)}},
B(d){var w=A.K(d),v=this.d
v===$&&A.c()
return new A.eo(A.c4(v,new C.eUg(this,new C.t5(w.ax.a===B.H)),null),null)}}
C.au6.prototype={
S(){return new C.brk(null,null)}}
C.brk.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,B.mv,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.br1()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eUh(this),null)}}
C.bri.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.c_(new A.af(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b3(w,w))
u=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
u.N(new A.j2(v))
w=A.U()
w.b=B.ak
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gt(0)
d.bj(v,w)
w=A.U()
w.b=B.ak
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gt(0)
d.b4(u,w)
w=A.zY(u)
t=A.a([],x.f5)
w=new A.xO(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jH('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FP(w,r)
w.lc()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNa(d,q,r,o,0,0.2,4.2,0.92)
p.aNa(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNa(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.J(g+h,1)*f,s=A.hbt(e.a.a,e,t,t+f*i,!0),r=A.bx3(s.gbM().a.getBounds())
$.a1()
w=A.U()
w.b=B.ak
w.c=j
w.d=B.bZ
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a_,B.a7,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Ff,null).aB(0,r))
d.b4(s,w)},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aK_.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aK0.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.t5.prototype={}
C.apr.prototype={
S(){return new C.aBy()},
gdQ(){return this.c}}
C.aBy.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adK()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Js(w,v)
this.a2()},
adK(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxa(t.c,t.d.a),$async$adK)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.etF(u,s))
return A.h(null,v)}})
return A.i($async$adK,v)},
Oa(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.etw(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Js(t,s),$async$Oa)
case 2:if(u.c!=null)u.n(new C.etx(u))
return A.h(null,v)}})
return A.i($async$Oa,v)},
OG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.K(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.etD(t,new C.t5(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OG)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a65(q),$async$OG)
case 6:case 5:t.n(new C.etE(t,r))
w=7
return A.b(t.Oa(),$async$OG)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OG,v)},
TF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hNx(r),$async$TF)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.etr(t,new C.qo(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Oa(),$async$TF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TF,v)},
c5O(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h3y(t,new C.etv(u),w,v)},
a86(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c2(new A.ax(v,2.5,B.r,-1),B.W,B.W,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aPm,w,w,B.n),w,22,w,w,w,w,w,22)},
a7b(d){return this.bDU(d)},
bDU(d){var w=0,v=A.j(x.H),u=this
var $async$a7b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.etu(u,d))
w=2
return A.b(u.Oa(),$async$a7b)
case 2:return A.h(null,v)}})
return A.i($async$a7b,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.K(a2).ax.a===B.H,e=f?B.bV:B.iP,d=A.m(8),a0=A.V(N.WD,f?B.bm:B.bv,g,g,g,16),a1=x.p
a0=A.aH(!1,d,!0,new A.B(B.DH,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,B.a1,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.etG(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.V,g,B.aX,B.q,A.a([A.bu(A.m(22),C.aMF(!0,A.m(22),1/0,B.p0,g,d,1/0),B.ap),A.an(10,A.dj(D.bwx,D.eUq,h.gaWY(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.a9(0,B.G,B.aS.j(f?0.5:0.38),B.eH,22),new A.a9(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.G(B.c.j(0.45),B.r,1.2)
w=A.a([new A.a9(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.am(B.V,g,B.aX,B.q,A.a([C.aMF(!0,A.m(16),1/0,B.KE,g,r.c,1/0),A.bQ(g,new A.o(g,g,g,g,g,new A.a8(B.b4,B.bb,B.w,A.a([B.c.j(0.06),B.K,B.x.j(0.22)],x.O),g,g),B.n),B.b7),A.an(g,h.a86(!0),g,g,8,g,8,g),A.an(g,A.cnZ(h.a86(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.cnZ(h.a86(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.cnZ(h.a86(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dj(D.bsA,D.eOF,h.gaWY(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bEh,B.n),g,g,g,g,B.lU,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZb,B.n9,B.fP],u):A.a([B.aW,B.aS,B.bQ],u)
t=x.V
s=A.a([new A.a9(0,B.G,B.aS.j(f?0.45:0.35),B.eH,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jE,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.G(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h0,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.byD(h.d.gw1(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cp,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.C(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.G(B.j9.j(0.75),B.r,1.6)
t=A.a([new A.a9(0,B.G,B.b3.j(0.28),B.cD,14)],t)
j=B.b3.j(0.22)
i=A.m(10)
u=A.p(g,A.bu(r,new A.am(B.V,g,B.a9,B.q,A.a([p,new A.B(D.bho,A.A(A.a([o,B.av,A.aD(!1,B.X,!0,g,A.aH(!1,n,!0,A.er(new A.B(A9.V8,A.u(A.a([A.p(g,D.ahZ,B.h,g,g,new A.o(j,g,A.G(B.b3.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.fW,D.eEJ],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc5N(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aE,B.w,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fN(1.7777777777777777,d,g),B.aN,w,B.P,u,B.bs,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dj(Ae.Yp,D.eCK,h.gbsP(),A.bk(B.aS,g,g,g,B.c,g,B.iD,g,new A.b5(A.m(12),B.W),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.aa],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.G(f?B.dT:B.cf,B.r,1)
t=A.V(B.WY,f?B.bm:B.bv,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.uh,g,g,1/0))}else B.d.v(d,new A.I(w,new C.etH(h,new C.t5(f)),A.T(w).k("I<1,r>")))
if(h.e)d.push(new A.B(B.zw,A.as(A.mi(g,f?B.bm:B.bv,g,g,g,g,g,g,g,g),g,g,g),g))
return A.ce(g,e,A.br(!0,A.u(A.a([new A.B(B.zB,a0,g),A.C(A.cf(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.ws,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bwh(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.a9(0,B.G,B.x.j(r?0.35:0.08),B.cD,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aS2,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hK:B.fR,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.Z,u,u,u,A.l(u,u,r?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcJA()
v=A.zx(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,B.a1,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b5,B.R,0,B.p)}t=A.C(t,1)
k=A.a([B.aS.j(0.14),B.bQ.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.byD(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a8(B.a_,B.a7,B.w,k,u,u),B.n),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.KI(A.A(A.a([m,A.C(new A.B(B.aci,A.A(A.a([l,B.ba,t,B.ab,k,A.aF(u,u,u,u,A.V(B.cu,(r?B.bm:B.bv).j(0.75),u,u,u,20),u,u,u,new C.ets(this,d),u,u,u,u,u,B.c6)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ad,u,B.e,B.j,0,u,u),u),B.ap),B.h,u,D.aQW,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d7,u,u,u,u)}}
C.aaY.prototype={
D5(d){return this.bFb(d)},
bFb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oB(d,o,!1),$async$D5)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
w=4
return A.b(A.bK(A4.zu,null,x.H),$async$D5)
case 4:s=t.d
w=5
return A.b(C.fnM(!0,o,s),$async$D5)
case 5:r=f
q=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.EU(r,"ngmy_project_"+A.aI(s.b,q,"_"),!1),$async$D5)
case 6:p=f
w=7
return A.b(A.oA(o,!1),$async$D5)
case 7:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$D5,v)},
XW(d){return this.clr(d)},
clr(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$XW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oB(d,s,!1),$async$XW)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
A.hl(d,new C.apl(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oA(s,!1),$async$XW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
Ob(d){return this.chF(d)},
chF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ob=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(A.hl(d,D.aAu,!0,"NgmyWorksheetProjectScan",x.N),$async$Ob)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.byE(s),$async$Ob)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.F(x.q).f.P(D.ekC)
w=1
break}q=C.fHG(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Ob)
case 5:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ob,v)},
XX(d){return this.ct7(d)},
ct7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(C.byb(),$async$XX)
case 3:s=f
if(s==null){w=1
break}r=C.fHG(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$XX)
case 4:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XX,v)},
B(d){var w=this,v=null,u=A.K(d).ax.a===B.H,t=new C.t5(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.a9(0,B.G,B.x.j(u?0.35:0.08),B.kH,36)],x.V),o=x.p
return A.br(!0,new A.B(B.ue,A.p(v,A.u(A.a([w.ck4(d,t,s),new A.B(D.bgN,A.u(A.a([w.aZT(t,"QR restore"),B.T,A.A(A.a([w.aV1(t,!0,B.j1,B.b3,B.b3,new C.etJ(w,d),"Show to scan","QR code"),B.av,w.atO(t,B.iF,B.b0,B.bE,new C.etK(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d1,w.aZT(t,"Backup files"),B.T,A.A(A.a([w.atO(t,B.hi,B.aS,B.bQ,new C.etL(w,d),"Full copy","Backup file"),B.av,w.atO(t,M.x8,B.b_,B.aM,new C.etM(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
ck4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eO,B.cW,B.ff],k):A.a([B.aW,B.aS,B.bQ],k)
w=A.an(l,A.V(B.t2,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.ks,l,l,l,36),l,l,l)
u=A.m(14)
t=A.G(B.c.j(0.45),B.r,1.5)
s=A.a([new A.a9(0,B.G,B.x.j(0.2),B.cD,12)],x.V)
r=this.d
s=A.p(l,C.aMF(!0,A.m(13),64,D.bnN,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.Z,l,l,l,D.aKe,l,l,l)
r=C.byD(r.gw1(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.G(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.V,l,B.a9,B.q,A.a([w,new A.B(D.bha,A.u(A.a([v,A.A(A.a([s,B.en,A.C(A.u(A.a([u,B.au,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fw,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.etI(d),l,l,l,A.ol(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aHD,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aE,B.w,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
aZT(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aV1(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ab3:B.aO
if(e)w=B.b3.j(o?0.45:0.35)
else{w=o?B.dT:B.cf
w=w.j(o?0.8:1)}w=A.G(w,B.r,e?1.5:1)
v=e?A.a([new A.a9(0,B.G,B.b3.j(0.12),B.cD,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.G(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qe,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.C(A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.er(new A.B(E.V9,A.u(A.a([t,B.aa,u,B.bw,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,B.cp,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
atO(d,e,f,g,h,i,j){return this.aV1(d,!1,e,f,g,h,i,j)}}
C.apl.prototype={
S(){return new C.bgP()}}
C.bgP.prototype={
Z(){this.a0()
this.abE()},
abE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.byF(p.c,p.d),$async$abE)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.etm(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.etn(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.K(d).ax.a===B.H,f=g?B.z2:B.iP,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.es,g?B.al:B.aj,h,h,h,18),h,h,h,new C.eto(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.C(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.y9],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eO,B.cW,B.ff],s):A.a([B.aW,B.aS,B.bQ],s)
r=x.V
q=A.a([new A.a9(0,B.G,B.aS.j(g?0.4:0.3),B.eH,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.byD(p.gw1(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fw,h,h,h)],u),B.m,h,B.b5,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aE,B.w,s,h,h),B.n),h,h,h,h,E.Vv,h,h,1/0)
t=g?D.b6d:B.c
q=A.m(24)
p=A.G(w?B.b3.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.a9(0,B.G,B.x.j(g?0.25:0.06),B.dm,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3O,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dMg)
else{m=A.m(20)
l=A.G(B.aJ,B.r,1)
o.push(A.p(h,A.pj(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c1,h,h,h))}}o.push(B.aN)
n=w?B.b3:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.G((w?B.b3:B.aS).j(0.35),B.r,1)
k=w?B.KU:B.Lp
k=A.V(k,w?B.b3:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.C(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.al:B.aj,h,h,h,h,h,h,h,h,12,h,h,B.a1,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iD,h,h,h))
return A.ce(h,f,A.br(!0,A.u(A.a([new A.B(A1.K7,e,h),A.C(A.cf(A.u(A.a([s,B.aN,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rJ,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adq,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.apq.prototype={
S(){return new C.aBx(A.y7(B.Jq,B.n3,B.t6))}}
C.aBx.prototype={
p(){this.d.p()
this.a2()},
aHU(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iC(w,d)},
c1I(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.hLE(t)
if(s!=null){this.aHU(s)
return}r=C.fVO(t)
if(r!=null)q=A.dm(r,p,0)
else q=!1
if(q){this.aHU(B.a.i(B.a.aU(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eA(A.a([A.aF(t,t,t,t,A.V(u.f?B.rU:X.L_,t,t,t,t,t),t,t,t,new C.etq(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.z2,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.eOz,t,t,t,1,t,!0),q=A.y6(u.d,B.bM,u.gc1H()),p=A.m(28)
p=A.as(A.p(t,t,B.h,t,t,new A.o(t,t,A.G(B.aS,B.r,3),p,A.a([new A.a9(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.x.j(0.72)
v=A.m(16)
return A.ce(r,B.x,new A.am(B.V,t,B.aX,B.q,A.a([q,p,A.an(32,A.p(t,D.eNr,B.h,t,t,new A.o(w,t,A.G(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iE,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGh.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mb.prototype={
S(){return new C.aBz(D.a5M,A.a([],x.D))},
bm(){return this.r.$0()},
gdQ(){return this.c}}
C.aBz.prototype={
gcrb(){return J.bzL(this.e,0,new C.eu8())},
Z(){this.a0()
$.aS.c_$.push(this)
this.uO()},
p(){$.aS.hE(this)
this.a2()},
iM(d){if(d===B.fm)this.uO()},
uO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BA(q.a.c).cJ(0,B.kr),$async$uO)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.eu4(q,p))
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
if(q.c!=null&&q.f)q.n(new C.eu5(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uO,v)},
Gv(d){return this.bC4(d)},
bC3(){return this.Gv(null)},
bC4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hNz(l,d),$async$Gv)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l1(l,r,q,D.cOA,new A.N(Date.now(),0,!1))
w=4
return A.b(C.Js(t.a.c,p),$async$Gv)
case 4:o=f
w=5
return A.b(t.uO(),$async$Gv)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.F(x.q).f.P(D.ehN)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.F(q).f.P(D.ejw)
else n.F(q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D9(m)
case 1:return A.h(u,v)}})
return A.i($async$Gv,v)},
D9(d){return this.c5z(d)},
c5z(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$D9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hl(s,new C.apr(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$D9)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Js(u.a.c,t),$async$D9)
case 5:case 4:w=6
return A.b(u.uO(),$async$D9)
case 6:return A.h(null,v)}})
return A.i($async$D9,v)},
uC(d){return this.bRs(d)},
bRs(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.byb(),$async$uC)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hl(r,D.aAu,!0,"NgmyWorksheetProjectScan",x.N),$async$uC)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.byE(q),$async$uC)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.F(x.q).f
r.P(A.b_(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fHG(s)
w=15
return A.b(C.Js(t.a.c,p),$async$uC)
case 15:o=f
w=16
return A.b(t.uO(),$async$uC)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.F(x.q).f.P(D.ejB)
w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D9(p)
case 1:return A.h(u,v)}})
return A.i($async$uC,v)},
M5(d){return this.bAL(d)},
bAL(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$M5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.etQ(d),s,null,!0,!0,x.y),$async$M5)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oc(t.a.c,A.a([],x.D)),$async$M5)
case 6:w=7
return A.b(t.uO(),$async$M5)
case 7:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.ehS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$M5,v)},
c5M(d){var w=this.c
w.toString
A.c0(B.K,null,new C.etZ(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b_u(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.j7
else w=B.c
v=A.m(16)
u=A.G(p?B.dT:B.cf,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.p(r,A.u(A.a([s,B.aa,t,B.bw,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ud,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
Yp(d,e){return this.c5A(d,e)},
c5A(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(B.K,null,new C.etU(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Yp)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h3y(r,new C.etV(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.M7(d,e),$async$Yp)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Yp,v)},
aXz(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aH
else t=h.a?B.aO:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.C(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.X,!0,u,A.aH(!1,u,!0,new A.B(B.zG,A.A(A.a([s,B.ba,t,A.V(B.ek,w?B.bm:B.bv,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
cce(d,e,f,g,h,i){return this.aXz(!1,d,e,f,g,h,i)},
M7(d,e){return this.bAV(d,e)},
bAV(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$M7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kN(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$M7)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bwY(t.a.c,d.a),$async$M7)
case 6:w=7
return A.b(t.uO(),$async$M7)
case 7:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$M7,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===B.H,n=new C.t5(o),m=o?B.bV:B.iP
if(q.f)o=D.aXi
else{w=q.bvx(n)
v=q.bQA(n)
u=q.gbsJ()
if(o)t=B.j7
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.aa,v,B.aN,new C.E3(A.p(p,A.A(A.a([q.axe(P.KD,"Projects",n,D.a5M),q.axe(B.uo,"Cashier",n,D.aNr),q.axe(B.E_,"Family Tree",n,D.f9t)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ef,0.95,u,p),B.bs],r)
w=q.d
if(w===D.a5M){w=J.aa(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aO:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.au6(q.gaM1(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.ccg(n)],r))}else{o=q.a
if(w===D.aNr)u.push(new C.alz(o.c,n,p))
else{w=q.r
u.push(new C.amF(o.c,o.d,o.e,o.f,new C.eub(q),new C.euc(q),new A.cv(w,x.b4)))}}o=A.cf(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A6.K0,p,p,B.ah)}return A.ce(p,m,A.br(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bvx(d){var w=null,v=A.m(8),u=d.a,t=A.V(N.WD,u?B.bm:B.bv,w,w,w,16)
return A.aH(!1,v,!0,new A.B(B.lm,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etN(this),w,w,w,w,w,w,w)},
gbsJ(){switch(this.d.a){case 0:return D.a54
case 1:return D.f0V
case 2:return D.a55}},
bQA(d){var w=null,v=A.m(15),u=A.a([new A.a9(0,B.G,B.aS.j(0.35),B.cv,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.byg,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.ba,D.blf,A.aD(!1,B.X,!0,w,A.aH(!1,A.m(12),!0,A.p(w,D.bvR,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etR(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.E3(A.p(w,A.u(A.a([new A.B(E.Vf,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.zx(this.gcrb()),w,w,w,w,w,w,D.ezr,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uc,B.iE,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.f0U,w)},
axe(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.G(B.c.j(0.55),B.r,2):A.G(B.K,B.r,2),o=t?A.a([new A.a9(0.5,B.G,B.aS.j(0.42),B.cD,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bm:B.bv
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bm:B.bv
return A.C(A.aD(!1,B.X,!0,u,A.aH(!1,s,!0,A.dg(u,A.A(A.a([w,B.ez,new A.dk(1,B.cj,A.d(e,u,1,B.Z,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b5,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.ib,u,u,u,B.K3,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eu7(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),1)},
ccg(d){var w,v,u,t,s,r,q=this,p=null
if(J.ch(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bvW,B.h,p,p,new A.o(p,p,p,p,A.a([new A.a9(2,B.G,B.aS.j(0.5),B.eH,28)],x.V),D.bGt,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.E3(A.p(p,A.u(A.a([t,B.d1,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.A(A.a([A.C(q.aNv(B.iF,"Scan QR",new C.eu1(q),d),1),B.av,A.C(q.aNv(M.x8,"Upload file",new C.eu2(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bJ(D.eXM,q.gaM1(),A.bk(B.aS,p,p,p,B.c,B.fV,p,p,new A.b5(A.m(12),B.W),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bie,1.05,D.a54,p)}w=J.b4(q.e,new C.eu3(q,d),x.l)
w=A.z(w,w.$ti.k("ai.E"))
return new C.E3(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a54,p)},
aNv(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.G(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.X,!0,u,A.aH(!1,t,!0,A.p(w,A.u(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.exT,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.acb,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)},
ccf(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.G(t?B.dT:B.cf,B.r,1),p=A.a([new A.a9(0,B.G,B.x.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bm:B.bv
n=A.bu(B.a6o,new A.fN(1.7777777777777777,C.aMF(!0,B.fe,1/0,P.KD,n,d.c,1/0),u),B.ap)
w=x.p
v=A.C(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.zx(d.gw1()),u,u,u,u,u,u,D.ew4,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.X,!0,u,A.aH(!1,o,!0,A.u(A.a([n,new A.B(B.bA,A.A(A.a([v,A.aF(u,u,u,u,A.V(A7.Ld,t?B.bm:B.bv,u,u,u,u),u,u,u,new C.eu_(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eu0(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.dZ,u,u,u,1/0)}}
C.bt3.prototype={}
C.qo.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.D(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcJA(){var w,v,u,t,s=this.c
if(s===B.k.lp(s))w=B.o.u(B.k.M(s))
else{v=B.k.ab(s,2)
u=A.ad("\\.?0+$",!0,!1,!1,!1)
w=A.aI(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l1.prototype={
gw1(){return B.d.cI(this.d,0,new C.cpT())},
ad(){var w=this,v=w.d,u=A.T(v).k("I<1,a0<n,@>>")
v=A.z(new A.I(v,new C.cpS(),u),u.k("ai.E"))
return A.D(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.aa()],x.N,x.z)},
b6o(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l1(w.a,w.b,v,u,w.e)},
b65(d){return this.b6o(d,null)},
QP(d){return this.b6o(null,d)}}
C.FY.prototype={
a3(){return"FamilyGender."+this.b}}
C.hP.prototype={
ad(){var w=this
return A.D(["id",w.a,"name",w.b,"gender",C.h_p(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
azO(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hP(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ahU.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kl.prototype={
galf(){var w=this.f
return new A.a5(w,new C.bIB(),A.T(w).k("a5<1>")).gG(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("I<1,a0<n,@>>")
v=A.z(new A.I(v,new C.bIA(),u),u.k("ai.E"))
return A.D(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.aa(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hEe(w.y)],x.N,x.z)},
xC(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kl(w.a,v,u,t,s,r,w.r,q,p,o)},
b6n(d,e){var w=null
return this.xC(w,w,d,e,w,w,w,w)},
czF(d,e,f,g,h,i,j){return this.xC(d,e,f,g,h,i,j,null)},
azT(d,e){var w=null
return this.xC(w,w,w,d,w,w,e,w)},
cya(d){var w=null
return this.xC(w,w,w,w,w,w,d,w)},
cyy(d){var w=null
return this.xC(w,w,w,w,w,w,w,d)},
azF(d){var w=null
return this.xC(w,w,w,w,d,w,w,w)},
czb(d,e,f){var w=null
return this.xC(w,d,w,e,w,w,f,w)},
cxY(d){var w=null
return this.xC(w,w,d,w,w,w,w,w)},
cyK(d,e){var w=null
return this.xC(d,w,w,w,w,e,w,w)}}
C.cpU.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cpV.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDA.prototype={}
C.b4G.prototype={
bH(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b4G()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aU(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b4F.prototype={
gvn(){return!0},
gEC(){return this.z.b<this.b.length},
aP4(d){switch(0){case 0:return d.a.c}},
aOM(d){switch(0){case 0:return d.a.d}},
bK7(d,e){switch(0){case 0:return new A.hy(d,e)}},
bJw(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fR(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.ir(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FJ(b4)
switch(0){case 0:v=b5.b
u=new A.ki(0,v,0,1/0)
t=w===B.Qx
break}s=A.a([],x.gZ)
r=A.R(x.cM,x.S)
for(b3=b1.z,q=B.d.fT(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.fR(b4,u,!0)
f=b1.aP4(g)
f.toString
e=b1.aOM(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDA(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDA(k,j,i))}d=s.length
switch(0){case 0:q=b5.co(new A.hy(m,l))
a0=q.a
a1=q.b
b1.a=new A.ir(0,0,a0,a1)
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
a8=b1.aP4(g)
e=b1.aOM(g)
e.toString
a9=b1.bJw(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bK7(a6,a3+a9)
b0=g.a
g.a=new A.ir(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fM(d){var w,v,u,t,s,r=this
r.kJ(d)
w=d.b
w.hQ()
v=A.de()
u=r.a
v.dX(u.a,u.b,0,1)
w.od(0,v)
for(u=r.z,u=B.d.dA(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fM(d)
w.mJ(0)},
F7(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hQ(){return this.z}}
C.brm.prototype={}
var z=a.updateTypes(["au<~>()","Q(hP)","Q(kl)","~()","Q(mM)","a0<n,@>(kl)","H(kl,kl)","n(hP)","kl(a0<@,@>)","Q(l1)","eq<n?>(hP)","tz()","a0<n,@>(mM)","XJ(Y)","hP(a0<@,@>)","a0<n,@>(hP)","Q(tz)","Q(qo)","au<~>(l1)","mM(a0<@,@>)","H(l1,l1)","H(hP,hP)","n?(hP)","r(nO)","hP(hP)","cE(bq<n,Ef>)","cE(Ii)","~(H)","H?(hP)","hP()","al<hP>()","aaD(Y)","Q(Ii)","B(hP)","~(FY)","WG(Y)","r(FY,n,a_)","n(n)","bq<n,al<a0<n,@>>>(n,al<mM>)","n(N)","+count,id,name(H,n,n)(kl)","kl(kl)","Y3(Y)","Y4(Y)","Q(lh)","lh()","We(Y)","n(kl)","WI(Y)","WH(Y)","X7(Y)","~(hP)","r(qo)","aaY(Y)","~(lE)","au<~>([n?])","P(P,l1)","r(l1)","P(P,qo)","a0<n,@>(qo)","qo(a0<@,@>)","Q(ac8)","X5(Y)","X9(Y)","l1(a0<@,@>)","cp(FX)","n(l1)","a0<n,@>(l1)","H(mM,mM)","H(hP)","kl(a0<n,@>)","ZM(Y)"])
C.fgs.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.fgr.prototype={
bf5(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qh(s,d,B.h4,E.Dn),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.O(r!=null&&A.Jg(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bf5(d)},
$S:325}
C.fgt.prototype={
$1(d){return d.b},
$S:116}
C.fpl.prototype={
$1(d){var w=null
return A.eB(w,B.K,new F.Nw(this.a,this.b,w),w,w,0,B.Va,B.cZ,w,w,w)},
$S:46}
C.f6O.prototype={
$1(d){return d!=null},
$S:217}
C.f6P.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:217}
C.f6U.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:170}
C.feb.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f0(d,w,w,w,A.fX(w,B.qF,w,w,w,w,w,w,w,B.dl,w,w,10.5,w,B.eb,w,!0,w,w,w,w),w),u=f?B.eb:B.uj
return new A.ni(D.bdS,A.a7f(A.a([new A.fG(130,w,v),new A.xQ(1,B.DT,A.f0(e,w,w,w,A.fX(w,g==null?D.dNv:g,w,w,w,w,w,w,w,B.dl,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.w6,B.l3))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1866}
C.fea.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uD(999)
f=A.w7(A.lc(h,A.f0("Cashier",h,h,h,A.fX(h,D.xY,h,h,h,h,h,h,h,B.dl,h,h,10,h,B.eb,h,!0,h,h,h,h),h),h,new A.kj(D.dNm,h,f,B.hl,h),h,h,D.bei,h))
w=A.w7(A.f0("Debt receipt",h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dl,h,h,22,h,B.eb,h,!0,h,h,h,h),h))
v=A.w7(A.f0(C.vR(new A.N(Date.now(),0,!1),!0),h,h,h,D.a3W,h))
u=A.uD(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f0(s,h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dl,h,h,14,h,B.eb,h,!0,h,h,h,h),h)
r=A.f0("Person who owes",h,h,h,D.a3W,h)
q=A.uD(10)
p=x.C
u=A.lc(h,A.xL(A.a([s,new A.fG(h,2,h),r,new A.fG(h,10,h),A.lc(h,A.xL(A.a([A.f0("Amount owed",h,h,h,D.a3W,h),new A.fG(h,2,h),A.f0(A.zx(t.c),h,h,h,A.fX(h,D.xY,h,h,h,h,h,h,h,B.dl,h,h,20,h,B.eb,h,!0,h,h,h,h),h)],p),B.q9,B.l3),h,new A.kj(B.oj,h,q,B.hl,h),h,h,D.bdA,1/0)],p),B.q9,B.l3),h,new A.kj(E.aBq,h,u,B.hl,h),h,h,D.bfm,1/0)
q=new A.n1(D.dNp,0.9,B.ki)
r=A.uD(12)
s=i.c
o=s.$2("Original due",C.vR(t.r,!1))
n=s.$2("Current due",C.vR(t.f,!1))
m=i.d
l=new A.n1(m,1.1,B.ki)
k=A.uD(8)
j=i.a
k=A.a([o,n,new A.fG(h,6,h),A.lc(h,A.w7(A.f0(t.gaGq(),h,h,h,A.fX(h,m,h,h,h,h,h,h,h,B.dl,h,h,11,h,B.eb,h,!0,0.5,h,h,h),h)),h,new A.kj(h,new A.p0(l,l,l,l),k,B.hl,h),h,h,D.ber,1/0),new A.fG(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.xY))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.xY))
else{n=A.f0("Missed days ("+n+")",h,h,h,A.fX(h,B.qF,h,h,h,h,h,h,h,B.dl,h,h,10.5,h,B.eb,h,!0,h,h,h,h),h)
m=A.T(o).k("I<1,Qh>")
o=A.z(new A.I(o,new C.fe9(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fG(h,4,h),n,new A.fG(h,6,h),new C.b4F(5,5,new C.b4G(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fG(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fG(h,8,h),w,new A.fG(h,3,h),v,new A.fG(h,16,h),u,new A.fG(h,10,h),A.lc(h,A.xL(k,B.w6,B.l3),h,new A.kj(h,new A.p0(q,q,q,q),r,B.hl,h),h,h,B.acm,1/0)],p)
w=j.a
if(w!=null){v=new A.n1(B.Gl,1,B.ki)
B.d.v(f,A.a([new A.fG(h,16,h),A.f0("Debtor signature",h,h,h,A.fX(h,B.qF,h,h,h,h,h,h,h,B.dl,h,h,10,h,B.eb,h,!0,h,h,h,h),h),new A.fG(h,6,h),A.lc(h,new A.Gd(w,B.Sz,h,h),h,new A.kj(h,new A.p0(v,v,v,v),A.uD(6),B.hl,h),82,h,B.K5,1/0)],p))}f.push(new A.fG(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f0(w,h,h,h,D.epj,h))
f.push(new A.fG(h,18,h))
f.push(A.w7(A.f0("NGMY.ORG",h,h,h,A.fX(h,D.xY,h,h,h,h,h,h,h,B.dl,h,h,14,h,B.eb,h,!0,1.8,h,h,h),h)))
return f},
$S:397}
C.fe9.prototype={
$1(d){var w=null,v=new A.n1(D.Gm,0.7,B.ki),u=A.uD(999)
return A.lc(w,A.f0(C.vR(d,!1),w,w,w,A.fX(w,D.Gm,w,w,w,w,w,w,w,B.dl,w,w,9.5,w,B.eb,w,!0,w,w,w,w),w),w,new A.kj(w,new A.p0(v,v,v,v),u,B.hl,w),w,w,D.bjx,w)},
$S:1867}
C.bX7.prototype={
$1(d){var w=null,v=B.bS.j(0.08),u=A.m(999),t=A.G(B.bS.j(0.28),B.r,1)
return A.p(w,A.d(C.vR(d,!1),w,w,w,w,w,w,D.evA,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ew,w,w,w)},
$S:1868}
C.fpR.prototype={
$1(d){var w=null,v=A.aG(d,B.bO,x.n).w,u=A.m(26),t=A.aF(w,w,w,w,B.aii,w,w,w,new C.fpO(d),w,w,w,w,w,B.c6),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eB(w,B.K,new A.d2(new A.aV(0,380,0,v.a.b*0.9),A.aD(!1,B.X,!0,u,new A.B(B.V0,A.u(A.a([new A.bE(B.a7,w,w,t,w),new A.dk(1,B.cj,A.cf(A.u(A.a([new A.eo(new C.aUR(r,w),s),B.T,A.A(A.a([A.C(A.ey(B.xj,D.eUm,new C.fpP(s,r,d),A.d9(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eV,w,new A.b5(A.m(14),B.W),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.C(A.dj(B.Yf,D.eRg,new C.fpQ(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eV,w,new A.b5(A.m(14),B.W),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aG,0,w,w,w,w,w,B.ac),w),w,w,0,Ab.Vo,B.cZ,w,w,w)},
$S:46}
C.fpO.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fpP.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.ae$.x.h(0,t.a)
m=m==null?null:m.gb3()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.he(B.fI),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f2(B.dz.gaL(s))
m=t.b
q=B.a.i(m.b)
p=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aI(q,p,"_")
if(o.length>32)o=B.a.al(o,0,32)
w=5
return A.b(A.rf(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fpQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fkK(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.F(x.q).f
s.P(A.b_(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fpJ.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eB(w,B.aG,A.u(A.a([new A.B(D.bfb,A.A(A.a([A.C(A.d(this.a,w,w,w,w,w,w,B.mU,w,w,w),1),A.aF(w,w,w,w,B.l1,w,w,w,new C.fpH(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dk(1,B.cj,new A.B(B.ig,A.bu(A.m(14),A.fD(t,B.B,w,w,B.ci,B.dp,!1,w,!1,w,w),B.ap),w),w),new A.B(B.JK,new A.a3(1/0,w,A.dj(B.oc,D.aKE,new C.fpI(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.JV,B.cZ,w,new A.b5(v,B.W),w)},
$S:46}
C.fpH.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fpI.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rf(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fpV.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eB(w,B.aG,new A.B(D.bfi,A.u(A.a([A.A(A.a([D.bkt,A.aF(w,w,w,w,B.l1,w,w,w,new C.fpT(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.eo(A.bu(A.m(14),A.p(w,A.b2(w,w,w,new C.b6N(s.ax,w),B.as),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.aa,new A.a3(1/0,w,A.dj(B.oc,D.aKE,new C.fpU(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(v,B.W),w)},
$S:46}
C.fpT.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fpU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.ae$.x.h(0,t.a)
n=n==null?null:n.gb3()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.he(B.fI),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aI(r,q,"_")
if(p.length>32)p=B.a.al(p,0,32)
r=J.f2(B.dz.gaL(s))
w=5
return A.b(A.rf(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.f9y.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dxt.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dxe.prototype={
bej(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c0(t,null,new C.dxh(s,q,e),p,!0,!0,!1,B.GC,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dxi(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bej(d,e)},
$S:1869}
C.dxh.prototype={
$1(d){var w,v=null,u=this.c===B.uT,t=u?D.cTV:D.cQB
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aO:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.br(!0,new A.B(K.acV,A.u(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa,A.ig(!0,v,v,B.z,L.aHV,new C.dxg(this.a,w,t,d),t.length,v,B.dJ,B.ah,!0)],x.p),B.ad,v,B.e,B.R,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:33}
C.dxg.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.M:B.aO
v=A.m(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bm:B.bv).j(0.16)
u=A.G(u,B.r,q?1.6:1)
return A.aH(!1,p,!0,A.p(B.B,C.aUQ(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dxf(t.d,r),s,s,s,s,s,s,s)},
$S:193}
C.dxf.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.dxi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dxc.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dxd.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cF(B.co,e,v)
return new A.cZ(e,!1,A.iF(B.B,A.as(A.aD(!1,B.X,!0,v,new A.ed(new C.dxb(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bc(t,new A.bm(0.96,1,u),u.k("bc<bC.T>"))),v)},
$S:32}
C.dxb.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bO,x.n).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.G((h?B.bm:B.bv).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.C(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aH(!1,v,!0,new A.B(B.ef,A.V(B.cu,i.a.d.a?B.bm:B.bv,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dwX(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aO1("Name")
r=l.a
q=r.d==null?k:new C.dwY(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lO
n=A.G(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6g(new A.B(B.hd,A.aH(!1,p,!0,A.p(B.B,C.aUQ(m==null?"\ud83d\udc64":A.ff_(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ae,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kb,k,B.a3F,k,k)
v=A.a([v,B.aa,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.A(A.a([A.C(i.aOC("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dwZ(r,a0),r.d===B.uT),1),B.ab,A.C(i.aOC("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dx3(r,a0),r.d===B.a0F),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bE(B.a_,k,k,A.hg(D.bxz,D.eSU,new C.dx4(r,l.e,a0),A.fp(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c6)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tB(A.ad("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aO2("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ae,k,k,s,k,k,B.dX,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aO
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.G((t?B.bm:B.bv).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vR(r.a,!1)
v.push(A.aD(!1,B.X,!0,q,A.aH(!1,p,!0,A.p(k,A.A(A.a([A.C(A.u(A.a([t,B.bw,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.but],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dx5(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aO1("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ae,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.aa)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aVZ(r.b.length!==0,B.lV,new C.dx6(r,i,a0),new C.dx7(r,a0),"Upload from gallery","ID photo"))
v.push(i.aVZ(r.c.length!==0,D.bnL,new C.dx8(r,i,d,a0),new C.dx9(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A8.a5d("Signature (optional)",t,new C.dxa(a0),new C.dx_(a0,t),new C.dx0(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bm:B.bv
s=(i?B.bm:B.bv).j(0.28)
s=A.C(A.dU(E.aKy,new C.dx1(d),A.d9(k,k,k,k,k,k,k,k,k,t,k,k,B.wh,k,new A.b5(A.m(10),B.W),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cW,k,k,k,B.c,k,B.wh,k,new A.b5(A.m(10),B.W),k,k,k)
v.push(A.A(A.a([s,B.ab,A.C(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tC,k,k,k),new C.dx2(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cf(A.u(v,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),B.h,k,new A.aV(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uf,B.iE,k,k,360)},
$S:158}
C.dwX.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dwY.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dwZ.prototype={
$0(){return this.b.$1(new C.dwW(this.a))},
$S:0}
C.dwW.prototype={
$0(){var w=this.a
w.d=B.uT
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dx3.prototype={
$0(){return this.b.$1(new C.dwV(this.a))},
$S:0}
C.dwV.prototype={
$0(){var w=this.a
w.d=B.a0F
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dx4.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dx5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xC(null,u.b,A.bY(2020,1,1,0,0,0,0,0),null,s,A.bY(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dwU(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwU.prototype={
$0(){var w=this.b
return this.a.a=A.bY(w.gcb(),w.gca(),w.gcp(),0,0,0,0,0)},
$S:0}
C.dx6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NC(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dwT(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwT.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dx7.prototype={
$0(){return this.b.$1(new C.dwS(this.a))},
$S:0}
C.dwS.prototype={
$0(){return this.a.b=""},
$S:0}
C.dx8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c0(q,null,new C.dwQ(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NC(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dwR(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwQ.prototype={
$1(d){var w=null
return A.br(!0,A.u(A.a([A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahQ,w,w,w,w,new C.dwK(d),!1,w,w,w,w,w,w,w,D.eK9,w,w,w),A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahO,w,w,w,w,new C.dwL(d),!1,w,w,w,w,w,w,w,D.eQn,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:33}
C.dwK.prototype={
$0(){A.a7(this.a,!1).K("camera")
return null},
$S:0}
C.dwL.prototype={
$0(){A.a7(this.a,!1).K("gallery")
return null},
$S:0}
C.dwR.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dx9.prototype={
$0(){return this.b.$1(new C.dwP(this.a))},
$S:0}
C.dwP.prototype={
$0(){return this.a.c=""},
$S:0}
C.dxa.prototype={
$0(){return this.a.$1(new C.dwO())},
$S:0}
C.dwO.prototype={
$0(){},
$S:0}
C.dx_.prototype={
$0(){return this.a.$1(new C.dwN(this.b))},
$S:0}
C.dwN.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dx0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.af0(u.a,null,null,new C.dwM(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwM.prototype={
$4(d,e,f,g){this.a.$1(new C.dwJ(this.b,d))},
$S:446}
C.dwJ.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dx1.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dx2.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.F(x.q).f.P(D.els)
return}if(w.a.d==null){w.c.F(x.q).f.P(D.eio)
return}A.a7(w.c,!1).K(!0)},
$S:0}
C.dxw.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dxx.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.G((p?B.bm:B.bv).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zx(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bm:B.bv,r,r,r,r,r,r,r,r,13,r,r,B.a1,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y_(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y_(r).length>0?B.bS:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bm:B.bv
t=(q?B.bm:B.bv).j(0.28)
s=x.p
return new A.cZ(e,!1,A.as(A.aD(!1,B.X,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.ay,A.A(A.a([A.C(A.dU(B.mX,new C.dxu(d),A.d9(r,r,r,r,r,r,r,r,r,w,r,r,B.jB,r,new A.b5(A.m(10),B.W),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.C(A.bJ(D.eQM,new C.dxv(d),A.bk(B.cW,r,r,r,B.c,r,B.jB,r,new A.b5(A.m(10),B.W),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ad,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zL,E.Vf,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:32}
C.dxu.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxv.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dxq.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dxr(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.G((p?B.bm:B.bv).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.C(A.d(k,s,1,B.Z,s,s,s,A.l(s,s,r.a.d.a?B.aO:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zx(l.c),s,s,s,s,s,s,D.ex0,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jm((r.a.d.a?B.bm:B.bv).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.WY,"View receipt",new C.dxj(r,d,l))
u=l.x!=null
t=u?B.uC:B.p2
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.B(D.bff,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dxk(r,d,l)),q.$3$icon$label$onTap(B.A1,"Edit",new C.dxl(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.lV,"View / download ID",new C.dxm(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bnK,"View / download selfie",new C.dxn(r,d,l)))
if(l.gaBt())p.push(q.$3$icon$label$onTap(A_.Y6,"View / download signature",new C.dxo(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bS,B.e4,"Delete",new C.dxp(r,d,l)))
p.push(B.au)
return A.br(!0,new A.B(B.uc,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:33}
C.dxr.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aO:B.aG
else w=d
return A.aH(!1,v,!0,new A.B(B.eE,A.A(A.a([A.V(e,w,v,v,v,20),B.ba,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1870}
C.dxj.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fpN(w,this.c)},
$S:0}
C.dxk.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Qb(this.c)},
$S:0}
C.dxl.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.BT(this.c)},
$S:0}
C.dxm.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bz0(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dxn.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bz0(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dxo.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fpS(w,this.c)},
$S:0}
C.dxp.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Mi(0,this.c)},
$S:0}
C.dxy.prototype={
$1(d){return d.x==null},
$S:261}
C.dxz.prototype={
$1(d){return d.x!=null},
$S:261}
C.dxA.prototype={
$2(d,e){return d+e.c},
$S:1871}
C.dxB.prototype={
$0(){return this.a.btb()},
$S:0}
C.dxs.prototype={
$0(){return this.a.abR(this.b)},
$S:0}
C.fbL.prototype={
$1(d){return C.fLF(A.Z(d,x.N,x.z))},
$S:z+19}
C.fbM.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fbN.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+68}
C.fou.prototype={
$1(d){return d.ad()},
$S:z+12}
C.fw6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.f9p.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bIw.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eR(e,v)?v:null},
$S:1872}
C.fp_.prototype={
$1(d){var w=this
return new C.X7(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+50}
C.cZD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZC(w,d))},
$S:z+65}
C.cZC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZr.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cs(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.cZo.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cZ1.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cZ2.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.cZs.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cZ8.prototype={
$1(d){var w=null,v=A.K(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ep(A.a([A.bG(!1,B.de,w,w,!0,w,w,new C.cZ6(d),w,w),A.bJ(B.ve,new C.cZ7(d),A.bk(B.mm,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.cZ6.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZ7.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cZ9.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.cZp.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+16}
C.cZq.prototype={
$0(){return B.d.gI(D.xt)},
$S:z+11}
C.cZa.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WG(v,u,J.aa(w.d),null)},
$S:z+35}
C.cZb.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZB.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aJ(s,new C.Wn(r.y,r.gDV(0),J.aa(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cZz(r),s,s,s,s,s,s,!1,B.af)
else{w=e-1
v=J.q(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6b(v,e,w,u,t,r.gbIG(),s)
w=t}return A.c4(q,new C.cZA(r,e),new A.B(B.Vh,w,s))},
$S:1873}
C.cZA.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcV(t).ay){t=this.b
u=x.cy.a(B.d.gcV(u.f.f)).gtU(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.de()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fk(v*3.141592653589793*0.5)
return A.fm(B.a_,A.d4(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.cZz.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCw(B.oR,B.id)},
$S:0}
C.cZl.prototype={
$0(){var w=this.a
return w.n(new C.cZk(w))},
$S:0}
C.cZk.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZm.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).K(null)
return null},
$S:0}
C.cZ3.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.iQ.j(0.5),r=x.p,q=A.a([D.eIS,B.aa],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ch(p.d)?"Write this book":"Write a new book"
q.push(p.WH(d,B.dO,w,J.ch(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WH(d,L.afO,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cs(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.B(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.jw.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.B(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.jw.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WH(d,B.XX,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WH(d,B.p9,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WH(d,B.p9,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eB(u,E.zc,A.br(!0,new A.B(Y.DA,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.adk,B.cZ,u,new A.b5(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.cZn.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.cZe.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cs(w.d)
return new C.X9(v,J.cs(w.d),w.r+1,null)},
$S:z+63}
C.cZf.prototype={
$1(d){var w=null
return A.nU(!1,A.ep(w,w,w,E.zc,new A.k1(this.a,new C.cZd(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:265}
C.cZd.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a3l,B.nC,A.C(A.d(e,w,w,w,w,w,w,B.ir,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.cZg.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZh.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZi.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zG(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.a0l(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.cZc(s,t))
w=4
return A.b(s.kp(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZu.prototype={
$1(d){var w=null
return A.nU(!1,A.ep(w,w,w,E.zc,new A.k1(this.a,new C.cZt(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:265}
C.cZt.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a3l,B.nC,A.C(A.d(e,w,w,w,w,w,w,B.ir,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.cZv.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZw.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZx.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zG(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kp(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZ4.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bbz(B.oR,R.Jz)},
$S:0}
C.cZ5.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCw(B.oR,R.Jz)},
$S:0}
C.d03.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d04.prototype={
$1(d){var w=this.a
return w.n(new C.d02(w))},
$S:9}
C.d02.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d05.prototype={
$1(d){var w=this.a
return w.n(new C.d01(w))},
$S:9}
C.d01.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d06.prototype={
$1(d){var w=this.a
return w.n(new C.d00(w))},
$S:9}
C.d00.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d07.prototype={
$0(){var w=this.a
return w.n(new C.d0_(w,this.b))},
$S:0}
C.d0_.prototype={
$0(){var w=this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d08.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_b()
A.a7(this.b,!1).K(new A.bkx(w,v))},
$S:0}
C.cZS.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cZR.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.X5(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+62}
C.cZW.prototype={
$1(d){return d.a===this.a},
$S:z+61}
C.cZV.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b21(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hk,v,v,v)
return A.ep(A.a([A.bG(!1,B.de,v,v,!0,v,v,new C.cZT(d),v,v),A.bJ(B.ve,new C.cZU(d),A.bk(B.mm,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zc,w,v,v,v,v,D.eHQ,v)},
$S:20}
C.cZT.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZU.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cZX.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cZY.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a3(s,t,w[u],t))
return A.cf(A.cb(B.bH,r,B.bx,18,14),B.q,t,B.z,t,D.bga,t,t,B.ah)},
$S:309}
C.cZQ.prototype={
$0(){return this.a.Of(0,this.b)},
$S:0}
C.cZP.prototype={
$0(){return this.a.NK(0,this.b)},
$S:0}
C.cyu.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+16}
C.cyv.prototype={
$0(){return B.d.gI(D.xt)},
$S:z+11}
C.cyw.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bU(0,new A.B(d,A.bQ(w,new A.o(w,w,A.G(this.a.j(f),B.r,g),v,w,w,B.n),B.b7),w),0,0,0)},
$S:1875}
C.cRW.prototype={
$1(d){return this.a.n(new C.cRV(this.b,this.c))},
$S:9}
C.cRV.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cSk.prototype={
$1(d){return this.a.n(new C.cS7())},
$S:2}
C.cS7.prototype={
$0(){},
$S:0}
C.cSl.prototype={
$1(d){return this.a.n(new C.cS6())},
$S:2}
C.cS6.prototype={
$0(){},
$S:0}
C.cSm.prototype={
$0(){var w=this.a
return w.n(new C.cS5(w,this.b))},
$S:0}
C.cS5.prototype={
$0(){var w=this.a
return w.d=w.gns().Ei(this.b.a)},
$S:0}
C.cSn.prototype={
$0(){var w=this.a
return w.n(new C.cS4(w,this.b))},
$S:0}
C.cS4.prototype={
$0(){var w=this.a
return w.d=w.gns().cxv(this.b)},
$S:0}
C.cSo.prototype={
$1(d){return this.a.n(new C.cS3())},
$S:2}
C.cS3.prototype={
$0(){},
$S:0}
C.cSp.prototype={
$0(){var w=this.a
return w.n(new C.cS2(w,this.b))},
$S:0}
C.cS2.prototype={
$0(){var w=this.a
return w.d=w.gns().cxA(this.b.a)},
$S:0}
C.cSq.prototype={
$1(d){var w=this.a
return w.n(new C.cSf(w,d))},
$S:6}
C.cSf.prototype={
$0(){var w=this.a
return w.d=w.gns().cyt(this.b)},
$S:0}
C.cSr.prototype={
$1(d){var w=this.a
return w.d=w.gns().azI(d)},
$S:2}
C.cSs.prototype={
$1(d){var w=this.a
return w.d=w.gns().cxD(d)},
$S:2}
C.cSu.prototype={
$1(d){var w=this.a
return w.d=w.gns().cyr(d)},
$S:2}
C.cSv.prototype={
$1(d){var w=this.a
return w.n(new C.cSe(w,d))},
$S:9}
C.cSe.prototype={
$0(){var w=this.a
return w.d=w.gns().cyi(this.b)},
$S:0}
C.cSw.prototype={
$0(){var w=this.a,v=w.gns(),u=B.a.i(w.gDV(0).a.a),t=B.a.i(w.gax0().a.a)
u=v.b6x(B.a.i(w.ganj().a.a),t,u)
A.a7(this.b,!1).K(u)
return null},
$S:0}
C.dKm.prototype={
$0(){var w=this.a
w.v_()
w.a.bm()
w.a.p_()},
$S:0}
C.dKl.prototype={
$0(){var w=this.a
w.v_()
w.a.bm()
w.a.p_()},
$S:0}
C.dKo.prototype={
$0(){var w=this,v=w.b
if(J.cs(v)||J.ch(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dKp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKq.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dKk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dKn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dKs.prototype={
$0(){this.a.MN()
return null},
$S:0}
C.dKr.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.dJN.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bG(!1,B.de,w,w,!0,w,w,new C.dJL(d),w,w),r=A.bk(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ep(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dJM(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dJL.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJM.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dJO.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cxY(this.b)},
$S:0}
C.dJI.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOh(w.b,w.c,w.d)},
$S:8}
C.dJg.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dJh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.EX(t.a.c),$async$$0)
case 2:s=r.qD(q.dF(e,new C.dJt(t)))
if(s!=null&&t.c!=null)t.n(new C.dJu(t,s))
t.a.bm()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJt.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJw.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJH.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cyK(C.h_y(w),w)},
$S:0}
C.dJF.prototype={
$1(d){return new A.ed(new C.dJE(this.a,this.b),null)},
$S:21}
C.dJE.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahu,v,v,v,p>0?new C.dJA(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aN,A.A(A.a([o,A.C(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.ai2,v,v,v,new C.dJB(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.ep(A.a([A.bG(!1,B.de,v,v,!0,v,v,new C.dJC(d),v,v),A.bJ(B.pC,new C.dJD(d),A.bk(B.bQ,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:162}
C.dJA.prototype={
$0(){return this.b.$1(new C.dJz(this.a))},
$S:0}
C.dJz.prototype={
$0(){return--this.a.a},
$S:0}
C.dJB.prototype={
$0(){return this.b.$1(new C.dJy(this.a))},
$S:0}
C.dJy.prototype={
$0(){return++this.a.a},
$S:0}
C.dJC.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJD.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dJG.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cyy(this.a.a)
w.r.a8(0)},
$S:0}
C.dJ4.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.af6(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fUt(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+13}
C.dJ5.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.f,x.P)
w.push(this.b)
v.d=u.azF(w)},
$S:0}
C.dJQ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaD(this.b,w,this.c,null)},
$S:z+31}
C.dJK.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.kY,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.aa,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.ep(A.a([A.bJ(D.eRO,new C.dJJ(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b5,w,u,v,w,s,w,new A.b5(t,B.W),r,w)},
$S:20}
C.dJJ.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dJ6.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dJ7.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dJ8.prototype={
$1(d){return d.a},
$S:z+7}
C.dJ9.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hP(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.azF(w)},
$S:0}
C.dJd.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.af6(q)
w=A.T(q).k("a5<1>")
q=A.z(new A.a5(q,new C.dJb(r),w),w.k("F.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fUt(v.e,null,r,v.f,v.r,new C.dJc(s,r),q,"Member Profile",w,t,u)},
$S:z+13}
C.dJc.prototype={
$0(){return this.a.a7c(this.b)},
$S:0}
C.dJb.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dJe.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("I<1,hP>")
w=A.z(new A.I(w,new C.dJa(this.b),v),v.k("ai.E"))
u.d=t.azF(w)},
$S:0}
C.dJa.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+24}
C.dJP.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dJq.prototype={
$1(d){return d.length!==0},
$S:3}
C.dJr.prototype={
$1(d){var w=this
return new A.ed(new C.dJp(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dJp.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.I(o,new C.dJl(u,e,o),A.T(o).k("I<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(12),B.da),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ae,v,v,v,v,v,B.lB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.u(p,B.ad,v,B.e,B.R,0,B.p)
t=w.a
return A.ep(A.a([A.bG(!1,B.de,v,v,!0,v,v,new C.dJm(d),v,v),A.bJ(B.Hk,new C.dJn(t,u,o,e),A.bk(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.eG5,new C.dJo(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a3(360,v,p,v),v,v,v,v,r,v)},
$S:162}
C.dJl.prototype={
$1(d){var w=null
return A.dK(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bB_,w,w,w,new C.dJk(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1876}
C.dJk.prototype={
$0(){return this.a.$1(new C.dJi(this.b,this.c))},
$S:0}
C.dJi.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dJm.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJn.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dJj(w.c,u))
v.bG(0,B.c_)}},
$S:0}
C.dJj.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dJo.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).K(!0)},
$S:0}
C.dJs.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.czb(this.b,D.rK,C.EV(v,w.a.c))},
$S:0}
C.dJX.prototype={
$1(d){return d.as},
$S:z+1}
C.dJY.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.dJZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hNg(v)
return w.TL(v==null?null:v.a)},
$S:0}
C.dK_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hqB(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcf(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.chP(new A.ap(u,t),v.gbcm(),new A.ap(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cxx:D.cw8
q=A.G(s?B.du:D.b1b,B.r,1)
p=A.m(22)
o=A.bU(0,A.b2(m,m,m,new C.b9w(s,m),B.as),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.am(B.V,m,B.a9,B.q,A.a([o,A.bU(0,A.tK(new A.L(n,n,n,n),new A.a3(u,t,new C.ban(l.d,v,l.f,w,new C.dJT(l),l.gc2m(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.brt(s,new C.dJU(l,e),new C.dJV(l,e),new C.dJW(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.h,m,m,new A.o(m,m,q,k,m,new A.a8(B.b4,B.bb,B.w,r,m,m),B.n),m,m,m,O.acq,m,m,m,m)},
$S:229}
C.dJT.prototype={
$1(d){var w=this.a
w.n(new C.dJR(w,d))},
$S:2}
C.dJR.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.H(0,v)},
$S:0}
C.dJU.prototype={
$0(){var w=this.b
return this.a.b4f(1.25,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJV.prototype={
$0(){var w=this.b
return this.a.b4f(0.8,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJW.prototype={
$0(){var w=this,v=w.b
return w.a.aOh(new A.ap(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ap(w.c,w.d),w.e.gbcm())},
$S:0}
C.dK0.prototype={
$0(){var w=this.a
return w.n(new C.dJS(w))},
$S:0}
C.dJS.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dJf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fC(new A.fv(s.c)),$async$$0)
case 2:t.wN("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_1.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.be4(u,C.h3A(v.c,u),new C.d_0(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+25}
C.d_0.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d_2.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhl(d.d,d.c,u.f.q(0,d.a),new C.d__(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+26}
C.d__.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.f9Y.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qD(new A.cQ(new A.a5(v,new C.f9Z(d),w.k("a5<1>")),new C.fa_(),w.k("cQ<1,n>")))},
$S:z+22}
C.f9Z.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fa_.prototype={
$1(d){return d.a},
$S:z+7}
C.f9W.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.f9X.prototype={
$1(d){return d.b},
$S:z+7}
C.fa2.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qD(new A.cQ(new A.a5(v,new C.fa3(d),w.k("a5<1>")),new C.fa4(),w.k("cQ<1,n>")))},
$S:z+22}
C.fa3.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fa4.prototype={
$1(d){return d.a},
$S:z+7}
C.fa0.prototype={
$1(d){var w,v=A.eO([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.H(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+28}
C.fa1.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d_4.prototype={
$0(){return this.a},
$S:z+29}
C.d_l.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:248}
C.d_d.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d_e()),v=J.a6(w)
if(!v.q(w,e))v.H(w,e)},
$S:121}
C.d_e.prototype={
$0(){return A.a([],x.s)},
$S:729}
C.d_c.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eR(w,e)
return w===!0},
$S:316}
C.d_5.prototype={
$0(){return A.a([],x.u)},
$S:z+30}
C.d_b.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d_a.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.H(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.AE:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.H(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.AE:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1878}
C.d_6.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d_f.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.H(0,a9)
w=a7.b
w.m(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.H(0,s)
w.m(0,s,b0)
a7.e.m(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.AE:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.be(w,new C.d_g(r)))w.push(r)}}B.d.bl(w,new C.d_h(a8))
B.d.aY(w,new C.d_i())
q=C.hqA(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.e1t],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.J)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.m(0,a9,a8)
if(o.length===0)return A.a([new A.S(-p,p)],x.G)
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
a1=A.a([new A.S(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bkh(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.S(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.S(a5,a6))}}return a1},
$S:1879}
C.d_g.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d_h.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d_i.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.d_j.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gG(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bf(v,A.a2(v).k("bf<2>")).cI(0,0,B.pO)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gG(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:651}
C.d_k.prototype={
$1(d){return 16+d*156},
$S:255}
C.d_3.prototype={
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
t.m(0,d,new C.Ef(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Ef(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Ef(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ii(d,new A.v(e+t,w),s,s.length))}},
$S:191}
C.d_7.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFA(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:121}
C.d_8.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.d_9.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_m.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_n.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:458}
C.d_o.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d_p.prototype={
$1(d){return d>=0.5},
$S:126}
C.eUQ.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hJ(A.aH(!1,v,!0,new A.a3(38,38,A.V(d,this.a.c?B.c:B.d3,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1881}
C.ewv.prototype={
$1(d){var w=null,v=A.m(8),u=B.bQ.j(0.12),t=A.m(8)
return new A.B(B.o1,A.aH(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.esX,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.K4,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewu(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+33}
C.ewu.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.deC.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.deB.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mT,B.L,w,w)
return A.ep(A.a([A.bG(!1,B.de,w,w,!0,w,w,new C.dez(d),w,w),A.bG(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lM,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.deA(d),w,w)],x.p),B.b5,B.Du,w,u,D.bhq,w,D.bjj,new A.b5(v,B.W),w,w)},
$S:20}
C.dez.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.deA.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.deL.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.deM.prototype={
$1(d){var w=this.a
return w.n(new C.deK(w,d))},
$S:z+34}
C.deK.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deN.prototype={
$1(d){var w=null
return A.p8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deQ.prototype={
$1(d){var w=this.a
return w.n(new C.deJ(w,d))},
$S:30}
C.deJ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.deP.prototype={
$1(d){var w=null
return A.p8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deR.prototype={
$1(d){var w=this.a
return w.n(new C.deI(w,d))},
$S:30}
C.deI.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.deS.prototype={
$0(){var w=this.a
return w.n(new C.deH(w))},
$S:0}
C.deH.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.deT.prototype={
$0(){var w=this.a
return w.n(new C.deG(w))},
$S:0}
C.deG.prototype={
$0(){return++this.a.at},
$S:0}
C.deU.prototype={
$0(){var w=this.a
return w.n(new C.deF(w))},
$S:0}
C.deF.prototype={
$0(){return--this.a.ax},
$S:0}
C.deV.prototype={
$0(){var w=this.a
return w.n(new C.deE(w))},
$S:0}
C.deE.prototype={
$0(){return++this.a.ax},
$S:0}
C.deW.prototype={
$1(d){var w=this.a
return w.n(new C.deD(w,d))},
$S:9}
C.deD.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.deO.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.deX.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bQ
else u=(q.c.a?B.dT:B.cf).j(0.85)
u=A.G(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bm:B.bv
t=A.V(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bm:B.bv
return A.C(A.aD(!1,B.X,!0,r,A.aH(!1,o,!0,A.dg(r,A.u(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b9,new A.o(w,r,u,v,r,r,B.n),B.eD,r,r,r,B.jB,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.deY(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+36}
C.deY.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.df6.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.c2C.prototype={
$2(d,e){return new A.bq(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c2J.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c2K.prototype={
$2(d,e){var w=J.b4(e,new C.c2I(),x.a)
w=A.z(w,w.$ti.k("ai.E"))
return new A.bq(d,w,x.d2)},
$S:z+38}
C.c2I.prototype={
$1(d){return d.ad()},
$S:z+12}
C.c2E.prototype={
$1(d){return C.ahV(A.Z(d,x.N,x.z))},
$S:z+8}
C.c2F.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c2G.prototype={
$1(d){return C.fLF(A.Z(d,x.N,x.z))},
$S:z+19}
C.c2H.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c2O.prototype={
$1(d){return new A.aCG(d.f.length,d.a,d.b)},
$S:z+40}
C.c2P.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:564}
C.c2L.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c2M.prototype={
$1(d){return d.cya(C.EV(d,this.a))},
$S:z+41}
C.dK9.prototype={
$1(d){return C.ti(d,this.a.a.c)},
$S:z+2}
C.dKa.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dKe.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dKf.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dK6.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWj(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xi("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oA(r.c,r.e),$async$$0)
case 4:s.xi(p)
w=5
return A.b(s.I2(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dK7.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWj(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xi("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oA(r.c,r.e),$async$$0)
case 4:s.xi(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dK8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.T_(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xi("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xi("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xi("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I2(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a4(j)
o=r.a
if(o.c==null){w=1
break}o.xi(B.a.e0(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dKd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWi(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xi("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).cr(A.eH(new C.dKc(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oA(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKc.prototype={
$1(d){var w=this.b
return new C.Y3(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+42}
C.dKb.prototype={
$1(d){return D.f4f},
$S:z+43}
C.dKh.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKi.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dKg(w,d)
return new A.B(B.d7,new C.bar(this.b,d.c,d.a,w,null),null)},
$S:1882}
C.dKg.prototype={
$0(){return this.a.Vp(this.b.b)},
$S:0}
C.dK1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dK2.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dK3.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dK4.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dK5.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKj.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dm(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).K(s)
return}},
$S:176}
C.dwB.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+44}
C.dwC.prototype={
$0(){return B.d.gI(D.a_D)},
$S:z+45}
C.dwD.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.as(A.V(this.b.d,B.c.j(0.95),w,w,D.cDg,44),w,w,w),w,w,new C.bfb(u,t,v,w),B.as)},
$S:75}
C.fps.prototype={
$1(d){return A.p7(new C.fpr(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.fpr.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.a9(0,B.G,B.x.j(r?0.35:0.08),B.tq,24)],x.V),o=r?B.dT:B.cf
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bQ.j(0.18)],x.O)
w=A.p(t,D.bvG,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a_,B.a7,B.w,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aO:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.T,o,new A.B(E.ado,A.A(A.a([w,B.ba,A.C(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bm:B.bv,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.C(A.ig(!0,t,e,B.z,D.egB,new C.fpq(this.b,s),20,B.acZ,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.kh,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fpq.prototype={
$2(d,e){var w=null,v=D.a_D[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.G(s?B.dT:B.cf,B.r,1),q=A.a([new A.a9(0,B.G,B.x.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.C(new C.a3U(v.a,!0,w),1),n=s?B.j7:B.iz,m=A.d(v.b,w,1,B.Z,w,w,w,A.l(w,w,s?B.aO:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.X,!0,w,A.aH(!1,u,!0,A.er(A.bu(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.Z,w,w,w,A.l(w,w,s?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.kW,w,w,w)],l),B.ad,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fpp(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:73}
C.fpp.prototype={
$0(){A.a7(this.a,!1).K("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cad.prototype={
$0(){return this.a.acT(this.b)},
$S:0}
C.foS.prototype={
$1(d){return D.f10},
$S:z+46}
C.fvZ.prototype={
$1(d){var w=this
return new C.ZM(w.a,w.b,w.c,w.d,null)},
$S:z+71}
C.foU.prototype={
$1(d){return new C.WI(this.a,null)},
$S:z+48}
C.foT.prototype={
$1(d){return D.f2_},
$S:z+49}
C.cSI.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cSH(w,d))},
$S:30}
C.cSH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cSK.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cSL.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSE.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSF.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cSG.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqr.prototype={
$0(){},
$S:0}
C.cqx.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqy.prototype={
$0(){return this.a.aJS(-1)},
$S:0}
C.cqz.prototype={
$1(d){return this.a.n(new C.cqw())},
$S:2}
C.cqw.prototype={
$0(){},
$S:0}
C.cqA.prototype={
$0(){return this.a.aJS(1)},
$S:0}
C.cqB.prototype={
$1(d){return this.a.n(new C.cqv())},
$S:2}
C.cqv.prototype={
$0(){},
$S:0}
C.cqC.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dT:B.cf
return A.tA(u,u,B.aW,r,u,new C.cqu(t,d),B.zM,s,w,u,new A.ax(v,1,B.r,-1),B.c6)},
$S:1883}
C.cqu.prototype={
$1(d){var w=this.a
return w.n(new C.cqs(w,this.b))},
$S:9}
C.cqs.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cqD.prototype={
$1(d){return this.a.n(new C.cqt())},
$S:2}
C.cqt.prototype={
$0(){},
$S:0}
C.cqE.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUi.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).K(w)},
$S:2}
C.eUj.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUk.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).K(w)},
$S:0}
C.eUg.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbsm()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b2(new A.B(D.bji,new A.eo(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bri(p,v,this.b.a,u,t,r),r,r,B.as)},
$S:75}
C.eUh.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dF.ar(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aS,B.bQ,w)
s.toString
s=A.a([B.aW,s,B.aS],x.O)
return A.aD(!1,B.X,!0,p,A.aH(!1,v,!0,A.er(D.dMq,r,new A.o(r,r,A.G(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.d3(-1.2+t,-0.5),new A.d3(1.2-t,0.8),B.w,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
$S:125}
C.fnL.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.etF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etw.prototype={
$0(){return this.a.e=!0},
$S:0}
C.etx.prototype={
$0(){return this.a.e=!1},
$S:0}
C.etD.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.ed(new C.etC(w,this.b),null)},
$S:21}
C.etC.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eB(w,u,new A.B(B.adi,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aa,C.fRj(new C.etz(r,e),r.a),B.ay,A.A(A.a([A.C(A.dU(B.de,new C.etA(d),w),1),B.av,A.C(A.bJ(B.Rc,new C.etB(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ad,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(t,B.W),w)},
$S:97}
C.etz.prototype={
$1(d){return this.b.$1(new C.ety(this.a,d))},
$S:30}
C.ety.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.etA.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etB.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).K(w)
return null},
$S:0}
C.etE.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QP(this.b)},
$S:0}
C.etr.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.d,x.Q)
w.push(this.b)
v.d=u.b65(w)},
$S:0}
C.etv.prototype={
$1(d){return this.beM(d)},
beM(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Js(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iC(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.etu.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a5<1>")
w=A.z(new A.a5(w,new C.ett(this.b),v),v.k("F.E"))
u.d=t.b65(w)},
$S:0}
C.ett.prototype={
$1(d){return d.a!==this.a.a},
$S:z+17}
C.etG.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.etH.prototype={
$1(d){return this.a.bwh(d,this.b)},
$S:z+52}
C.ets.prototype={
$0(){return this.a.a7b(this.b)},
$S:0}
C.fvR.prototype={
$1(d){return new C.aaY(this.a,this.b,this.c,null)},
$S:z+53}
C.etJ.prototype={
$0(){return this.a.XW(this.b)},
$S:0}
C.etK.prototype={
$0(){return this.a.Ob(this.b)},
$S:0}
C.etL.prototype={
$0(){return this.a.D5(this.b)},
$S:0}
C.etM.prototype={
$0(){return this.a.XX(this.b)},
$S:0}
C.etI.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etn.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eto.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.etp(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etp.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eu8.prototype={
$2(d,e){return d+e.gw1()},
$S:z+56}
C.eu4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eu5.prototype={
$0(){return this.a.f=!1},
$S:0}
C.etQ.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bw5,B.h,v,v,new A.o(B.aH.j(u?0.18:0.08),v,A.G(B.aH.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aO:B.aG
u=u?B.dT:B.cf
w=x.p
return A.eB(v,t,new A.B(B.wt,A.u(A.a([r,B.aN,q,B.P,p,B.d1,A.A(A.a([A.C(A.dU(B.mX,new C.etO(d),A.d9(v,v,v,v,v,v,v,v,v,o,v,v,B.eV,v,new A.b5(A.m(14),B.W),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.av,A.C(A.bJ(D.eVc,new C.etP(d),A.bk(B.aH,v,v,v,v,v,B.eV,v,new A.b5(A.m(14),B.W),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cZ,v,new A.b5(s,B.W),v)},
$S:46}
C.etO.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.etP.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.etZ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.a9(0,B.G,B.x.j(k?0.35:0.08),B.fz,28)],x.V),g=k?D.cJk:B.a_3,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.ebi,B.au,new A.bE(B.a_,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cp,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aE,B.w,g,m,m),B.n),m,m,m,m,E.adl,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.C(v.b_u(B.b0,B.iF,new C.etW(v,d),l,"Camera import","Scan QR"),1),B.av,A.C(v.b_u(B.cB,M.x8,new C.etX(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aH.j(k?0.14:0.06)
q=A.m(16)
p=A.G(B.aH.j(0.28),B.r,1)
o=A.p(m,D.bvv,B.h,m,m,new A.o(B.aH.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aO:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.C(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.br(!0,new A.B(B.ue,A.p(m,A.u(A.a([g,new A.B(B.adj,A.u(A.a([w,B.T,u,B.bs,t,B.T,A.aD(!1,B.X,!0,m,A.aH(!1,s,!0,A.p(m,A.A(A.a([o,B.ba,n,A.V(B.ek,k?B.bm:B.bv,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bA,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.etY(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:33}
C.etW.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uC("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etX.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uC("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etY.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.M5(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etU.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.a9(0,B.G,B.x.j(o?0.35:0.08),B.eH,24)],x.V),k=o?B.dT:B.cf
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bm:B.bv
u=A.bu(w,new A.a3(48,48,C.aMF(!0,A.m(12),48,P.KD,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.Z,q,q,q,A.l(q,q,o?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zx(v.gw1())
s=x.p
r=this.a
return A.br(!0,new A.B(B.ue,A.p(q,A.u(A.a([B.T,k,new A.B(D.adg,A.A(A.a([u,B.ba,A.C(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zq,r.cce(B.t2,B.aS,new C.etS(d),p,"QR code or backup file","Transfer project"),r.aXz(!0,B.e4,B.aH,new C.etT(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:33}
C.etS.prototype={
$0(){A.a7(this.a,!1).K("transfer")
return null},
$S:0}
C.etT.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
C.etV.prototype={
$1(d){return this.beN(d)},
beN(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Js(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uO(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.eub.prototype={
$0(){var w=this.a
w.a.bm()
w.n(new C.eua(w))},
$S:0}
C.eua.prototype={
$0(){return this.a.r++},
$S:0}
C.euc.prototype={
$0(){var w=this.a
return w.n(new C.eu9(w))},
$S:0}
C.eu9.prototype={
$0(){return this.a.r++},
$S:0}
C.etN.prototype={
$0(){var w=this.a.c
w.toString
return A.iC(w,null)},
$S:0}
C.etR.prototype={
$0(){return this.a.c5M(this.b)},
$S:0}
C.eu7.prototype={
$0(){var w=this.a
return w.n(new C.eu6(w,this.b))},
$S:0}
C.eu6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eu1.prototype={
$0(){return this.a.uC("scan")},
$S:0}
C.eu2.prototype={
$0(){return this.a.uC("file")},
$S:0}
C.eu3.prototype={
$1(d){return this.a.ccf(d,this.b)},
$S:z+57}
C.eu0.prototype={
$0(){return this.a.D9(this.b)},
$S:0}
C.eu_.prototype={
$0(){return this.a.Yp(this.b,this.c)},
$S:0}
C.cpT.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+58}
C.cpS.prototype={
$1(d){return d.ad()},
$S:z+59}
C.cpQ.prototype={
$1(d){return C.h9l(A.Z(d,x.N,x.z))},
$S:z+60}
C.cpR.prototype={
$1(d){return d.a.length!==0},
$S:z+17}
C.f9h.prototype={
$1(d){return d.y===D.jY},
$S:z+2}
C.fwe.prototype={
$1(d){return C.bx0(d,this.a)},
$S:z+2}
C.f8t.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bIB.prototype={
$1(d){return!d.as},
$S:z+1}
C.bIA.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bIx.prototype={
$1(d){return C.fLG(A.Z(d,x.N,x.z))},
$S:z+14}
C.bIy.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bIz.prototype={
$1(d){return J.k(d)},
$S:17}
C.f0E.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.eXw.prototype={
$1(d){return C.fCq(A.Z(d,x.N,x.z))},
$S:z+64}
C.eXx.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eXy.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.foJ.prototype={
$1(d){return J.k(d)},
$S:17}
C.foK.prototype={
$1(d){return d.a},
$S:z+66}
C.foL.prototype={
$1(d){return d.length!==0},
$S:3}
C.foM.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.foN.prototype={
$1(d){return d.QP(null).ad()},
$S:z+67}
C.fwc.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.f9J.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fbR.prototype={
$1(d){return C.ahV(A.Z(d,x.N,x.z))},
$S:z+8}
C.fbS.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fbT.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fbU.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fbV.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.fow.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.fw7.prototype={
$1(d){return C.ahV(A.Z(d,x.N,x.z))},
$S:z+8}
C.fw8.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fw9.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f9q.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.f9r.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fwi.prototype={
$1(d){return!d.as},
$S:z+1}
C.f91.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.f92.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.f93.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.fw_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fcC.prototype={
$1(d){return d.Q},
$S:z+69}
C.fos.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fbO.prototype={
$1(d){return C.ahV(A.Z(d,x.N,x.z))},
$S:z+8}
C.fbP.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fbQ.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fop.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eY1.prototype={
$1(d){return d.length!==0},
$S:3}
C.eY2.prototype={
$1(d){return C.fLG(A.Z(d,x.N,x.z))},
$S:z+14}
C.eY3.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eY4.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eY5.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYi.prototype={
$2(d,e){return d.eL(new C.eYj(e))},
$S:1884}
C.eYj.prototype={
$1(d){$.ak.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c2},
$S:1885}
C.eYf.prototype={
$1(d){return C.hv1(d,this.a)},
$S:z+70}
C.eYg.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eYh.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f1i.prototype={
$1(d){return d.a},
$S:z+47}
C.f1j.prototype={
$1(d){return d.length!==0},
$S:3}
C.f1k.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f3k.prototype={
$1(d){return d.ad()},
$S:z+5}
C.f7Q.prototype={
$1(d){return C.fWI(d,C.EV(d,this.a))},
$S:z+5}
C.f7R.prototype={
$1(d){return C.fWJ(d,C.EV(d,this.a))},
$S:z+5};(function aliases(){var w=C.aHU.prototype
w.boJ=w.p
w=C.aK_.prototype
w.br0=w.p
w=C.aK0.prototype
w.br1=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azy.prototype,"gc9h","c9i",23)
var s
w(s=C.awF.prototype,"gc2s","c2t",27)
v(s,"gaI8","LF",0)
v(s,"gcha","DC",0)
v(s,"gbDP","Mj",0)
v(s,"gcuD","xj",0)
v(s,"gcbd","Z4",0)
v(s,"gbEf","UT",0)
w(s,"gbIG","bIH",39)
v(s,"gbtY","yN",0)
v(C.awG.prototype,"gcuz","E0",0)
v(s=C.aA8.prototype,"gacv","uP",0)
v(s,"gc53","Yh",0)
v(s,"gaM7","Gw",0)
v(s=C.aA5.prototype,"gcqW","a06",0)
v(s,"gacv","uP",0)
v(s,"gcfj","ZK",0)
v(s,"gc5Z","Yu",0)
w(s,"gc2m","c2n",51)
v(s,"gbE6","GB",0)
v(s,"gcrP","crQ",3)
v(s,"gbUU","Wt",0)
w(s,"gc0T","c0U",37)
v(s,"gc4O","c4P",3)
v(s=C.ayx.prototype,"gbZK","NL",0)
v(s,"gbZM","bZN",3)
v(s,"gbAO","a6P",0)
v(s=C.aA7.prototype,"gbHe","Vl",0)
v(s,"gbRn","VY",0)
v(s,"gclq","a_z",0)
v(s,"gchK","a_a",0)
v(C.aA6.prototype,"gchs","aef",0)
v(C.aps.prototype,"gc0R","XV",0)
v(C.avs.prototype,"ga_R","ID",3)
v(C.avr.prototype,"ga_R","ID",3)
v(C.aud.prototype,"ga_R","ID",3)
v(s=C.aBy.prototype,"gaWY","OG",0)
v(s,"gbsP","TF",0)
v(s,"gc5N","c5O",3)
w(C.aBx.prototype,"gc1H","c1I",54)
u(C.aBz.prototype,"gaM1",0,0,null,["$1","$0"],["Gv","bC3"],55,0,0)
t(C,"h2P","hEc",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.als,C.mM,C.FX,C.ac8,C.NO,C.tz,C.Ii,C.Ef,C.bap,C.aFA,C.amC,C.d_q,C.lh,C.aPw,C.aPv,C.aNA,C.t5,C.qo,C.l1,C.hP,C.kl,C.aDA])
u(A.i1,[C.fgs,C.fgr,C.fgt,C.fpl,C.f6O,C.f6P,C.f6U,C.feb,C.fea,C.fe9,C.bX7,C.fpR,C.fpJ,C.fpV,C.f9y,C.dxh,C.dxc,C.dxd,C.dwQ,C.dwM,C.dxw,C.dxx,C.dxq,C.dxr,C.dxy,C.dxz,C.fbL,C.fbM,C.fou,C.fw6,C.f9p,C.fp_,C.cZD,C.cZ1,C.cZ8,C.cZp,C.cZa,C.cZ3,C.cZe,C.cZf,C.cZd,C.cZu,C.cZt,C.d04,C.d05,C.d06,C.cZR,C.cZW,C.cZV,C.cyu,C.cyw,C.cRW,C.cSk,C.cSl,C.cSo,C.cSq,C.cSr,C.cSs,C.cSu,C.cSv,C.dKn,C.dJN,C.dJI,C.dJg,C.dJt,C.dJw,C.dJF,C.dJ4,C.dJQ,C.dJK,C.dJ6,C.dJ7,C.dJ8,C.dJd,C.dJb,C.dJa,C.dJq,C.dJr,C.dJl,C.dJX,C.dJT,C.d_1,C.d_2,C.f9Y,C.f9Z,C.fa_,C.f9W,C.f9X,C.fa2,C.fa3,C.fa4,C.fa0,C.fa1,C.d_l,C.d_b,C.d_6,C.d_g,C.d_h,C.d_k,C.d_8,C.d_n,C.d_o,C.d_p,C.eUQ,C.ewv,C.deB,C.deL,C.deM,C.deN,C.deQ,C.deP,C.deR,C.deW,C.deX,C.c2J,C.c2I,C.c2E,C.c2F,C.c2G,C.c2H,C.c2O,C.c2L,C.c2M,C.dK9,C.dKc,C.dKb,C.dKi,C.dKj,C.dwB,C.fps,C.foS,C.fvZ,C.foU,C.foT,C.cSJ,C.cSK,C.cSF,C.cqz,C.cqB,C.cqC,C.cqu,C.cqD,C.eUi,C.fnL,C.etD,C.etz,C.etv,C.ett,C.etH,C.fvR,C.etQ,C.etZ,C.etU,C.etV,C.eu3,C.cpS,C.cpQ,C.cpR,C.f9h,C.fwe,C.f8t,C.bIB,C.bIA,C.bIx,C.bIy,C.bIz,C.eXw,C.eXx,C.foJ,C.foK,C.foL,C.foM,C.foN,C.fwc,C.f9J,C.fbR,C.fbS,C.fbU,C.fbV,C.fow,C.fw7,C.fw8,C.fw9,C.f9q,C.f9r,C.fwi,C.f91,C.f92,C.fw_,C.fcC,C.fos,C.fbO,C.fbP,C.fop,C.eY1,C.eY2,C.eY3,C.eY4,C.eY5,C.eYj,C.eYf,C.eYg,C.f1i,C.f1j,C.f3k,C.f7Q,C.f7R])
u(A.ar,[C.aUR,C.Wn,C.b6b,C.ban,C.be4,C.brt,C.bhl,C.aaC,C.be3,C.aaB,C.be2,C.ayy,C.aED,C.aaD,C.I7,C.bao,C.a9U,C.bam,C.bar,C.aUP,C.aps,C.aaY])
u(A.n4,[C.b6N,C.b7Y,C.b7P,C.aDv,C.bd7,C.baq,C.b9w,C.bfb,C.bri])
u(A.jk,[C.fpO,C.fpP,C.fpQ,C.fpH,C.fpI,C.fpT,C.fpU,C.dxt,C.dxf,C.dxi,C.dwX,C.dwY,C.dwZ,C.dwW,C.dx3,C.dwV,C.dx4,C.dx5,C.dwU,C.dx6,C.dwT,C.dx7,C.dwS,C.dx8,C.dwK,C.dwL,C.dwR,C.dx9,C.dwP,C.dxa,C.dwO,C.dx_,C.dwN,C.dx0,C.dwJ,C.dx1,C.dx2,C.dxu,C.dxv,C.dxj,C.dxk,C.dxl,C.dxm,C.dxn,C.dxo,C.dxp,C.dxB,C.dxs,C.cZC,C.cZr,C.cZo,C.cZ2,C.cZs,C.cZ6,C.cZ7,C.cZ9,C.cZq,C.cZb,C.cZz,C.cZl,C.cZk,C.cZm,C.cZn,C.cZg,C.cZi,C.cZj,C.cZc,C.cZv,C.cZy,C.cZ4,C.cZ5,C.d03,C.d02,C.d01,C.d00,C.d07,C.d0_,C.d08,C.cZS,C.cZT,C.cZU,C.cZX,C.cZQ,C.cZP,C.cyv,C.cRV,C.cS7,C.cS6,C.cSm,C.cS5,C.cSn,C.cS4,C.cS3,C.cSp,C.cS2,C.cSf,C.cSe,C.cSw,C.dKm,C.dKl,C.dKo,C.dKp,C.dKq,C.dKk,C.dKs,C.dKr,C.dJL,C.dJM,C.dJO,C.dJh,C.dJv,C.dJu,C.dJx,C.dJH,C.dJA,C.dJz,C.dJB,C.dJy,C.dJC,C.dJD,C.dJG,C.dJ5,C.dJJ,C.dJ9,C.dJc,C.dJe,C.dJP,C.dJk,C.dJi,C.dJm,C.dJn,C.dJj,C.dJo,C.dJs,C.dJY,C.dJZ,C.dJR,C.dJU,C.dJV,C.dJW,C.dK0,C.dJS,C.dJf,C.d_0,C.d__,C.d_4,C.d_e,C.d_5,C.ewu,C.deC,C.dez,C.deA,C.deK,C.deJ,C.deI,C.deS,C.deH,C.deT,C.deG,C.deU,C.deF,C.deV,C.deE,C.deD,C.deO,C.deY,C.df6,C.dKa,C.dKe,C.dKf,C.dK6,C.dK7,C.dK8,C.dKd,C.dKh,C.dKg,C.dK1,C.dK2,C.dK3,C.dK4,C.dK5,C.dwC,C.fpp,C.cad,C.cSI,C.cSH,C.cSL,C.cSE,C.cSG,C.cqr,C.cqx,C.cqy,C.cqw,C.cqA,C.cqv,C.cqs,C.cqt,C.cqE,C.eUj,C.eUk,C.etF,C.etw,C.etx,C.ety,C.etA,C.etB,C.etE,C.etr,C.etu,C.etG,C.ets,C.etJ,C.etK,C.etL,C.etM,C.etI,C.etm,C.etn,C.eto,C.etq,C.etp,C.eu4,C.eu5,C.etO,C.etP,C.etW,C.etX,C.etY,C.etS,C.etT,C.eub,C.eua,C.euc,C.eu9,C.etN,C.etR,C.eu7,C.eu6,C.eu1,C.eu2,C.eu0,C.eu_])
u(A.ae,[C.alz,C.X5,C.X9,C.X7,C.WG,C.amF,C.amz,C.XJ,C.amD,C.Y3,C.Y4,C.a3U,C.WI,C.WH,C.We,C.ZM,C.E3,C.au6,C.apr,C.apl,C.apq,C.Mb])
u(A.ag,[C.azy,C.awF,C.baF,C.awG,C.b7W,C.aA8,C.aA5,C.ayx,C.aA7,C.aA6,C.bft,C.aHU,C.avs,C.avr,C.aud,C.brl,C.aK_,C.aK0,C.aBy,C.bgP,C.aBx,C.bt3])
u(A.kw,[C.dxe,C.dxg,C.dxb,C.dxA,C.fbN,C.bIw,C.cZB,C.cZA,C.cZh,C.cZw,C.cZx,C.cZY,C.dJE,C.dJp,C.dK_,C.d_d,C.d_c,C.d_a,C.d_f,C.d_i,C.d_j,C.d_3,C.d_7,C.d_9,C.d_m,C.c2C,C.c2K,C.c2P,C.dwD,C.fpr,C.fpq,C.eUg,C.eUh,C.etC,C.eu8,C.cpT,C.f0E,C.eXy,C.fbT,C.f93,C.fbQ,C.eYi,C.eYh,C.f1k])
t(C.bfc,C.aHU)
u(A.mb,[C.a8Y,C.aGh,C.FY,C.ahU,C.cpU,C.cpV])
t(C.brj,C.aK_)
t(C.brk,C.aK0)
t(C.aBz,C.bt3)
t(C.b4G,A.b4v)
t(C.brm,A.a3z)
t(C.b4F,C.brm)
w(C.aHU,A.eJ)
w(C.aK_,A.ca)
w(C.aK0,A.ca)
v(C.bt3,A.ev)
v(C.brm,A.iQ)})()
A.kd(b.typeUniverse,JSON.parse('{"aUR":{"ar":[],"r":[]},"b6N":{"az":[]},"alz":{"ae":[],"r":[]},"azy":{"ag":["alz"]},"X5":{"ae":[],"r":[]},"X9":{"ae":[],"r":[]},"X7":{"ae":[],"r":[]},"WG":{"ae":[],"r":[]},"awF":{"ag":["X5"]},"baF":{"ag":["X9"]},"awG":{"ag":["X7"]},"Wn":{"ar":[],"r":[]},"b7Y":{"az":[]},"b7P":{"az":[]},"b7W":{"ag":["WG"]},"aDv":{"az":[]},"bd7":{"az":[]},"b6b":{"ar":[],"r":[]},"amF":{"ae":[],"r":[]},"amz":{"ae":[],"r":[]},"XJ":{"ae":[],"r":[]},"aaD":{"ar":[],"r":[]},"aA8":{"ag":["amF"]},"aA5":{"ag":["amz"]},"ban":{"ar":[],"r":[]},"baq":{"az":[]},"be4":{"ar":[],"r":[]},"b9w":{"az":[]},"brt":{"ar":[],"r":[]},"bhl":{"ar":[],"r":[]},"ayx":{"ag":["XJ"]},"aaC":{"ar":[],"r":[]},"be3":{"ar":[],"r":[]},"aaB":{"ar":[],"r":[]},"be2":{"ar":[],"r":[]},"ayy":{"ar":[],"r":[]},"aED":{"ar":[],"r":[]},"I7":{"ar":[],"r":[]},"amD":{"ae":[],"r":[]},"Y3":{"ae":[],"r":[]},"Y4":{"ae":[],"r":[]},"aA7":{"ag":["amD"]},"bao":{"ar":[],"r":[]},"a9U":{"ar":[],"r":[]},"bam":{"ar":[],"r":[]},"bar":{"ar":[],"r":[]},"aA6":{"ag":["Y3"]},"bft":{"ag":["Y4"]},"aUP":{"ar":[],"r":[]},"a3U":{"ae":[],"r":[]},"bfc":{"ag":["a3U"]},"bfb":{"az":[]},"aps":{"ar":[],"r":[]},"WI":{"ae":[],"r":[]},"WH":{"ae":[],"r":[]},"We":{"ae":[],"r":[]},"ZM":{"ae":[],"r":[]},"avs":{"ag":["WI"]},"avr":{"ag":["WH"]},"aud":{"ag":["We"]},"brl":{"ag":["ZM"]},"E3":{"ae":[],"r":[]},"au6":{"ae":[],"r":[]},"brj":{"ag":["E3"]},"brk":{"ag":["au6"]},"bri":{"az":[]},"apr":{"ae":[],"r":[]},"aBy":{"ag":["apr"]},"aaY":{"ar":[],"r":[]},"apl":{"ae":[],"r":[]},"apq":{"ae":[],"r":[]},"bgP":{"ag":["apl"]},"aBx":{"ag":["apq"]},"Mb":{"ae":[],"r":[]},"aBz":{"ag":["Mb"],"ev":[]},"b4F":{"iQ":[],"f5":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aA
return{e2:w("aNA"),Q:w("qo"),w:w("bt<n,n>"),c5:w("aPv"),dY:w("aPw"),d:w("eq<n?>"),e:w("FX"),B:w("mM"),P:w("hP"),k:w("kl"),x:w("au<~>"),f5:w("M<afQ>"),V:w("M<a9>"),t:w("M<qo>"),O:w("M<x>"),ac:w("M<eq<n?>>"),I:w("M<mM>"),u:w("M<hP>"),_:w("M<kl>"),cl:w("M<au<al<a0<n,@>>>>"),R:w("M<mP>"),cq:w("M<al<+(P,P)>>"),ez:w("M<a0<n,aC>>"),gE:w("M<a0<n,n>>"),c7:w("M<a0<n,@>>"),fD:w("M<m0>"),bp:w("M<nO>"),g:w("M<v>"),v:w("M<hx>"),L:w("M<+(n,n)>"),G:w("M<+(P,P)>"),bF:w("M<+count,id,name(H,n,n)>"),A:w("M<cI>"),s:w("M<n>"),aS:w("M<iG>"),p:w("M<r>"),C:w("M<f5>"),D:w("M<l1>"),fp:w("M<NO>"),M:w("M<Ii>"),gZ:w("M<aDA>"),Y:w("M<ac8>"),E:w("M<aFA>"),F:w("M<P>"),dC:w("M<H>"),dS:w("M<az?>"),d4:w("M<n?>"),J:w("cn<ag<ae>>"),b:w("al<mM>"),do:w("al<hP>"),r:w("al<kl>"),U:w("al<a0<n,@>>"),gk:w("al<+(n,n)>"),bC:w("al<+count,id,name(H,n,n)>"),h:w("al<n>"),c:w("al<l1>"),j:w("al<@>"),fK:w("bq<n,n>"),d2:w("bq<n,al<a0<n,@>>>"),a:w("a0<n,@>"),f:w("a0<@,@>"),gv:w("I<n,FZ>"),n:w("iA"),g2:w("qH"),bV:w("als"),fL:w("cp"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(P,al<hP>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bm<P>"),gc:w("dz"),b4:w("cv<H>"),W:w("k1<n>"),l:w("r"),cM:w("f5"),i:w("l1"),cc:w("Ef"),bw:w("aaB<n?>"),cy:w("Ik"),q:w("mz"),y:w("Q"),gR:w("P"),z:w("@"),S:w("H"),eK:w("al<kl>?"),m:w("amC?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,Q)?"),Z:w("q1?"),T:w("n?"),aD:w("dz?"),o:w("l1?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aPa=new A.bv(B.fU,B.bC,B.fU,B.bC)
D.a6l=new A.bv(B.fU,B.jK,B.fU,B.jK)
D.aPm=new A.bv(B.jL,B.bC,B.bC,B.bC)
D.aPq=new A.ax(B.cW,1.4,B.r,-1)
D.aPA=new A.ax(B.al,1,B.r,-1)
D.aQW=new A.aV(0,1/0,64,1/0)
D.aQZ=new A.aV(0,84,0,1/0)
D.asj=w([B.lO,B.q7,B.c],x.O)
D.bFG=new A.a8(B.ax,B.aE,B.w,D.asj,null,null)
D.aRM=new A.o(null,null,null,null,null,D.bFG,B.n)
D.cIR=w([B.aS,B.bQ],x.O)
D.bHD=new A.a8(B.b4,B.bb,B.w,D.cIR,null,null)
D.aS2=new A.o(null,null,null,null,null,D.bHD,B.n)
D.aXR=new A.f9(null,null,null,null,null,E.iQ,null,null,null,null)
D.a7E=new A.cw(B.B,null,null,D.aXR,null)
D.jw=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.er1=new A.E(!0,D.jw,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ3=new A.w("No books on the shelf yet.",null,D.er1,null,null,null,null,null,null,null,null,null)
D.dMr=new A.B(B.nl,D.eJ3,null)
D.aWu=new A.cw(B.B,null,null,D.dMr,null)
D.aXi=new A.cw(B.B,null,null,V.SW,null)
D.aZb=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZz=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.b0a=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b0Y=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b1b=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9B=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b4z=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b4T=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.IU=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b6d=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b89=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.ab3=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eE_=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bcf=new A.eq(null,D.eE_,B.eR,null,x.d)
D.eM1=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bch=new A.eq(null,D.eM1,B.eR,null,x.d)
D.bcP=new A.b7(38e5)
D.bdA=new A.i2(0,10,0,10)
D.bdS=new A.i2(0,4,0,4)
D.be8=new A.L(10,10,14,10)
D.bei=new A.i2(10,4,10,4)
D.ber=new A.i2(10,8,10,8)
D.bes=new A.L(10,8,8,8)
D.beU=new A.L(12,6,12,2)
D.bfb=new A.L(14,10,6,6)
D.bff=new A.L(14,12,14,8)
D.bfi=new A.L(14,12,8,14)
D.bfm=new A.i2(14,14,14,14)
D.bg0=new A.L(16,2,16,10)
D.bga=new A.L(16,6,16,30)
D.bgc=new A.L(16,6,16,8)
D.adg=new A.L(18,16,18,8)
D.bgN=new A.L(18,20,18,22)
D.adk=new A.L(18,24,18,24)
D.bgT=new A.L(18,30,18,30)
D.bha=new A.L(20,10,12,20)
D.bho=new A.L(20,18,16,18)
D.bhq=new A.L(20,18,20,6)
D.bie=new A.L(24,32,24,28)
D.bif=new A.L(24,36,24,32)
D.bii=new A.L(26,26,24,14)
D.biw=new A.L(2,4,2,8)
D.biA=new A.L(30,0,30,0)
D.biL=new A.L(38,22,22,22)
D.adB=new A.L(40,24,24,24)
D.biN=new A.i2(40,40,40,40)
D.biP=new A.L(46,30,30,30)
D.adE=new A.L(4,0,0,8)
D.bje=new A.L(56,40,40,40)
D.bji=new A.L(1.25,1.25,1.25,1.25)
D.bjj=new A.L(60,0,60,0)
D.bjx=new A.i2(7,3,7,3)
D.bjY=new A.L(8,9,8,9)
D.bk1=new A.L(5,1.5,5,1.5)
D.bkb=new A.L(6,2.5,6,2.5)
D.eX4=new A.w("Signature",null,B.mU,null,null,null,null,null,null,null,null,null)
D.bkt=new A.bF(1,B.bn,D.eX4,null)
D.eUo=new A.w("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bla=new A.bF(1,B.bn,D.eUo,null)
D.exZ=new A.E(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWg=new A.w("Worksheets",null,D.exZ,null,null,null,null,null,null,null,null,null)
D.ey6=new A.E(!0,E.a8c,null,null,null,null,13,B.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVa=new A.w("Track your project spending",null,D.ey6,null,null,null,null,null,null,null,null,null)
D.cBz=w([D.eWg,B.au,D.eVa],x.p)
D.bay=new A.fd(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cBz,null)
D.blf=new A.bF(1,B.bn,D.bay,null)
D.etu=new A.E(!0,E.iQ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDd=new A.w("FAMILY LIBRARY",null,D.etu,null,null,null,null,null,null,null,null,null)
D.blt=new A.bF(1,B.bn,D.eDd,null)
D.Ki=new C.FX("leather","","",0,"gold",25,"middle","double","leather","",!0)
D.Wo=new C.FY(0,"male")
D.aeu=new C.FY(1,"female")
D.wB=new C.FY(2,"unknown")
D.rK=new C.ahU(0,"owner")
D.Kj=new C.ahU(1,"editor")
D.jY=new C.ahU(2,"viewer")
D.afe=new A.a_(61199,"MaterialIcons",!1)
D.bnK=new A.a_(61504,"MaterialIcons",!1)
D.bnL=new A.a_(61505,"MaterialIcons",!1)
D.bnN=new A.a_(61587,"MaterialIcons",!1)
D.bnT=new A.a_(61890,"MaterialIcons",!1)
D.boN=new A.a_(63034,"MaterialIcons",!0)
D.bpF=new A.a_(63429,"MaterialIcons",!1)
D.ahn=new A.a_(984520,"MaterialIcons",!1)
D.boi=new A.a_(62776,"MaterialIcons",!1)
D.bs0=new A.ac(D.boi,26,B.aW,null,null,null)
D.bmK=new A.a_(57648,"MaterialIcons",!1)
D.bsi=new A.ac(D.bmK,14,B.c,null,null,null)
D.bsA=new A.ac(B.E1,17,null,null,null,null)
D.bt1=new A.ac(B.cu,17,D.jw,null,null,null)
D.bt6=new A.ac(E.X9,null,null,null,null,null)
D.bt9=new A.ac(B.iY,18,E.iQ,null,null,null)
D.WU=new A.a_(62044,"MaterialIcons",!1)
D.btf=new A.ac(D.WU,null,B.aS,null,null,null)
D.bu4=new A.ac(B.dO,16,null,null,null,null)
D.bub=new A.ac(D.WU,32,B.aS,null,null,null)
D.but=new A.ac(E.aff,18,B.cW,null,null,null)
D.bvv=new A.ac(B.Ed,22,B.aH,null,null,null)
D.bvG=new A.ac(B.dO,22,B.aW,null,null,null)
D.bvR=new A.ac(N.WZ,22,B.c,null,null,null)
D.bvW=new A.ac(B.rV,52,B.c,null,null,null)
D.bw5=new A.ac(B.Ed,30,B.aH,null,null,null)
D.ahZ=new A.ac(B.t2,22,B.c,null,null,null)
D.bwx=new A.ac(B.dO,17,null,null,null,null)
D.bwQ=new A.ac(B.uy,26,B.cW,null,null,null)
D.bxz=new A.ac(B.Xm,16,null,null,null,null)
D.byg=new A.ac(B.rV,24,B.c,null,null,null)
D.byl=new A.ac(B.KJ,20,B.qx,null,null,null)
D.byq=new A.ac(B.E_,null,B.bQ,null,null,null)
D.byx=new A.ac(B.iY,18,B.c,null,null,null)
D.bzU=new A.ac(B.e4,16,B.al,null,null,null)
D.bA4=new A.ac(D.WU,20,B.aS,null,null,null)
D.aiq=new A.ac(B.hh,20,null,null,null,null)
D.bAA=new A.ac(B.cu,18,D.jw,null,null,null)
D.bAS=new A.ac(B.wZ,28,B.c,null,null,null)
D.bB_=new A.ac(B.Kz,null,B.fK,null,null,null)
D.bBj=new A.ac(B.wZ,24,B.c,null,null,null)
D.bBK=new A.ac(B.rV,null,B.aS,null,null,null)
D.bBL=new A.ac(B.jE,20,B.cW,null,null,null)
D.bC2=new A.ac(B.E1,16,null,null,null,null)
D.bDw=new A.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ep,!0,null,null,null,null)
D.cPw=w([B.br,B.aS,B.eT,B.aW],x.O)
D.bEh=new A.a8(B.ax,B.aE,B.w,D.cPw,null,null)
D.b5k=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.b9K=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cyH=w([D.b5k,D.b9K],x.O)
D.bEs=new A.a8(B.b4,B.bb,B.w,D.cyH,null,null)
D.cKt=w([B.eO,B.ff,B.eT],x.O)
D.bEv=new A.a8(B.ax,B.aE,B.w,D.cKt,null,null)
D.aa5=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZA=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cAy=w([D.aa5,D.aZA],x.O)
D.bF0=new A.a8(B.b4,B.bb,B.w,D.cAy,null,null)
D.b1k=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.cPf=w([D.b1k,D.aa5],x.O)
D.ajl=new A.a8(B.ax,B.aE,B.w,D.cPf,null,null)
D.a9g=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b3b=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cJJ=w([D.a9g,D.b3b],x.O)
D.bFQ=new A.a8(B.a_,B.a7,B.w,D.cJJ,null,null)
D.cV2=w([B.bS,B.mq],x.O)
D.bFS=new A.a8(B.b4,B.bb,B.w,D.cV2,null,null)
D.b5g=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b6F=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cVP=w([D.b5g,D.jw,D.jw,D.b6F],x.O)
D.cXO=w([0,0.07,0.9,1],x.F)
D.bGj=new A.a8(B.a_,B.a7,B.w,D.cVP,D.cXO,null)
D.bGt=new A.a8(B.ax,B.aE,B.w,B.Oa,null,null)
D.cUF=w([B.aW,B.aS,B.bQ],x.O)
D.bHp=new A.a8(B.ax,B.aE,B.w,D.cUF,null,null)
D.c1F=w([B.br,B.aW,B.eO],x.O)
D.c1L=w([B.bE,B.aA,B.jT],x.O)
D.c1N=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b49=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c7T=w([D.b49,E.a9Q],x.O)
D.dJf=new A.v(1,2)
D.ed4=new A.cI(B.aV,D.dJf,3)
D.ap7=w([D.ed4],x.A)
D.cf6=w([B.fY,B.c9,B.fp],x.O)
D.chJ=w([B.bP,B.bB,B.bj],x.O)
D.cvv=w([B.bQ,B.bh],x.O)
D.aZ2=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b58=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cw8=w([D.aZ2,D.b58],x.O)
D.b11=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cxx=w([D.b11,B.dd],x.O)
D.cyU=w([B.bc,B.iw,B.nO],x.O)
D.czh=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZw=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b2y=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cXL=w([D.a9g,D.aZw,D.b2y],x.O)
D.blQ=new C.tz("leather","Leather",D.cXL,"vintage")
D.cFO=w([B.dH,B.IP,E.a8N],x.O)
D.blX=new C.tz("midnight","Midnight",D.cFO,"starry")
D.cyV=w([B.fo,B.eM,B.kn],x.O)
D.blW=new C.tz("forest","Forest",D.cyV,"story")
D.cZm=w([B.f4,B.fq,B.kS],x.O)
D.blT=new C.tz("burgundy","Burgundy",D.cZm,"royal")
D.chk=w([B.aA,B.q3,B.n4],x.O)
D.blU=new C.tz("royal","Royal",D.chk,"royal")
D.cB7=w([B.bB,B.d3,L.CZ],x.O)
D.blR=new C.tz("charcoal","Charcoal",D.cB7,"geo")
D.cXR=w([B.cl,B.dN,B.vZ],x.O)
D.blV=new C.tz("sunset","Sunset",D.cXR,"sunset")
D.cYo=w([B.iw,B.CV,B.IH],x.O)
D.blS=new C.tz("ocean","Ocean",D.cYo,"band")
D.xt=w([D.blQ,D.blX,D.blW,D.blT,D.blU,D.blR,D.blV,D.blS],A.aA("M<tz>"))
D.cC_=w([B.aj,B.aI,B.M],x.O)
D.cD6=w([B.fq,B.eM,B.dH,B.hS,B.u0,B.cW,B.kT,B.fs,B.dC],x.O)
D.cD7=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ed5=new A.cI(B.dt,B.dG,8)
D.cDg=w([D.ed5],x.A)
D.cEe=w([B.cd,B.dN,B.lh],x.O)
D.cEG=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cFK=w([B.cd,B.hm],x.O)
D.cHC=w([B.aM,B.z9,B.tU],x.O)
D.cIq=w([B.bK,B.cN,B.dE,B.aM],x.O)
D.cIS=w([B.km,B.cl,B.tX],x.O)
D.cJk=w([B.eO,B.cW],x.O)
D.cJO=w([B.dh,B.fZ,B.hR],x.O)
D.cJZ=w([B.b3,B.bh,B.dH],x.O)
D.cKq=w([B.eY,B.dk,B.eM],x.O)
D.cKG=w([B.e9,B.dH,B.IP],x.O)
D.cLT=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_9=w(["leather","linen","plain","stars","rays"],x.s)
D.brH=new A.a_(985219,"MaterialIcons",!1)
D.brg=new A.a_(983781,"MaterialIcons",!1)
D.arC=w([B.afE,B.hJ,B.lY,B.hL,D.brH,B.Ej,B.p1,D.brg,L.ahb,B.x0,B.p3,B.lX],A.aA("M<a_>"))
D.a_e=w(["double","single","corners","none"],x.s)
D.cOn=w([B.fM,B.bv,B.fs],x.O)
D.cOA=w([],x.t)
D.AE=w([],x.u)
D.cQB=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cSE=w([B.b_,B.fZ,B.hS],x.O)
D.cTI=w([B.cV,B.nR,B.U1],x.O)
D.cTV=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.db5=new C.lh("construction","Construction","Jobsite & builds",B.Ea)
D.dbc=new C.lh("house","Home Build","Houses & rooms",B.us)
D.db2=new C.lh("grocery","Grocery","Store & pantry",B.XV)
D.db1=new C.lh("calculator","Calculations","Math & estimates",B.E5)
D.dba=new C.lh("lumber","Materials","Lumber & supplies",B.L8)
D.daZ=new C.lh("kitchen","Kitchen","Remodel & meals",Q.agn)
D.brf=new A.a_(983756,"MaterialIcons",!1)
D.db3=new C.lh("landscape","Landscaping","Yard & garden",D.brf)
D.daY=new C.lh("plumbing","Plumbing","Pipes & water",B.uD)
D.dbd=new C.lh("electrical","Electrical","Wiring & power",B.hg)
D.daW=new C.lh("store","Retail Shop","Daily business",B.kz)
D.daX=new C.lh("paint_remodel","Paint & Remodel","Colors & walls",Q.agc)
D.bqA=new A.a_(983311,"MaterialIcons",!1)
D.db9=new C.lh("roofing","Roofing","Roofs & exteriors",D.bqA)
D.brr=new A.a_(983986,"MaterialIcons",!1)
D.daV=new C.lh("warehouse","Warehouse","Storage & stock",D.brr)
D.db7=new C.lh("vehicles","Vehicles","Fleet & transport",B.Ek)
D.bol=new A.a_(62785,"MaterialIcons",!1)
D.db0=new C.lh("farm","Farm","Crops & livestock",D.bol)
D.db_=new C.lh("restaurant","Restaurant","Food & catering",B.t0)
D.db6=new C.lh("tools","Tools","Workshop gear",B.Ei)
D.dbb=new C.lh("wallet","Cash & Wallet","Quick spending",B.jE)
D.bpz=new A.a_(63395,"MaterialIcons",!1)
D.db8=new C.lh("concrete","Concrete","Foundation work",D.bpz)
D.db4=new C.lh("blueprint","Blueprint","Plans & design",Aa.afK)
D.a_D=w([D.db5,D.dbc,D.db2,D.db1,D.dba,D.daZ,D.db3,D.daY,D.dbd,D.daW,D.daX,D.db9,D.daV,D.db7,D.db0,D.db_,D.db6,D.dbb,D.db8,D.db4],A.aA("M<lh>"))
D.cUm=w([B.bm,B.bv],x.O)
D.cV3=w([B.hQ,B.n8,B.dw],x.O)
D.a_H=w(["top","middle","bottom"],x.s)
D.cXd=w([B.cK,B.bh,B.dH],x.O)
D.cXG=w([B.bt,B.dk,B.eM],x.O)
D.cZh=w([B.bP,B.aj],x.O)
D.cZi=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dHn={top:0,middle:1,bottom:2}
D.d1q=new A.bt(D.dHn,["Top","Middle","Bottom"],x.w)
D.dH3={double:0,single:1,corners:2,none:3}
D.d1v=new A.bt(D.dH3,["Double line","One line","Corners","None"],x.w)
D.dI5={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d2T=new A.bt(D.dI5,["Leather","Linen","Smooth","Stars","Light rays"],x.w)
D.d33=new A.bt(B.io,[],A.aA("bt<H,+(n,n)>"))
D.dHg={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AQ=new A.bt(D.dHg,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aA("bt<n,H>"))
D.d5f=new F.L5(32,null)
D.d5g=new F.L5(40,null)
D.d5h=new F.L5(46,null)
D.aAu=new C.apq(null)
D.dJZ=new A.v(8,14)
D.eJG=new A.w("Write a new book",null,B.jr,null,B.L,null,null,null,null,null,null,null)
D.dLW=new A.B(B.lT,D.eJG,null)
D.ahA=new A.ac(B.hH,18,B.c,null,null,null)
D.eDx=new A.w("Add",null,B.mV,null,null,null,null,null,null,null,null,null)
D.cIF=w([D.ahA,B.v5,D.eDx],x.p)
D.ebp=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cIF,null)
D.dMf=new A.B(B.rF,D.ebp,null)
D.dMg=new A.B(E.ac7,V.SW,null)
D.exV=new A.E(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGm=new A.w("New Project",null,D.exV,null,null,null,null,null,null,null,null,null)
D.cMf=w([D.ahA,B.ab,D.eGm],x.p)
D.ebs=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cMf,null)
D.dMq=new A.B(B.iD,D.ebs,null)
D.aY5=new A.f9(2.2,null,null,null,null,B.cW,null,null,null,null)
D.efE=new A.a3(22,22,D.aY5,null)
D.aWq=new A.cw(B.B,null,null,D.efE,null)
D.dMO=new A.B(B.UV,D.aWq,null)
D.dNm=new A.iD(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dNp=new A.iD(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBp=new A.iD(1,0.9607843137254902,0.48627450980392156,0)
D.Gm=new A.iD(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.xY=new A.iD(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dNv=new A.iD(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.f3B=new C.bd7(null)
D.bbr=new A.lT(D.f3B,null,B.as,null,null)
D.aF2=new A.cE(0,0,0,0,null,null,D.bbr,null)
D.e1t=new A.S(-42,42)
D.e7p=new A.d7([0,0,1,1])
D.aGb=new A.af(0,0,520,160)
D.eaI=new A.b5(B.pM,B.W)
D.eUw=new A.w("Let the AI write it from your tree",null,B.kc,null,B.L,null,null,null,null,null,null,null)
D.bmg=new A.dk(1,B.cj,D.eUw,null)
D.cFJ=w([E.Yn,B.ab,D.bmg],x.p)
D.eb7=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cFJ,null)
D.eDe=new A.w("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.cSS=w([D.aiq,B.ab,D.eDe],x.p)
D.ebf=new A.cC(B.aY,B.b5,B.j,B.m,null,B.p,null,0,D.cSS,null)
D.bvL=new A.ac(B.hK,14,B.aW,null,null,null)
D.esd=new A.E(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGM=new A.w("Cashier",null,D.esd,null,null,null,null,null,null,null,null,null)
D.cMI=w([D.bvL,B.bp,D.eGM],x.p)
D.ebh=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cMI,null)
D.eDf=new A.w("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bl0=new A.bF(1,B.bn,D.eDf,null)
D.cyq=w([D.ahZ,B.av,D.bl0],x.p)
D.ebi=new A.cC(B.aY,B.e,B.j,B.m,null,B.p,null,0,D.cyq,null)
D.eer=new A.ap(16,40)
D.eew=new A.ap(22,64)
D.eeC=new A.ap(280,88)
D.efk=new A.a3(30,null,null,null)
D.egB=new A.hI(2,12,12,1.05,null)
D.eGs=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ehj=new A.aY(D.eGs,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eGH=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aI5=new A.aY(D.eGH,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eO8=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ehN=new A.aY(D.eO8,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXB=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ehS=new A.aY(D.eXB,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eIw=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.ehZ=new A.aY(D.eIw,null,null,null,null,null,null,null,null,null,null,null,null,B.fE,!1,null,null,null,B.q,null)
D.eV6=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aI9=new A.aY(D.eV6,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eDP=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eio=new A.aY(D.eDP,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eYb=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.ej7=new A.aY(D.eYb,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eTy=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ejw=new A.aY(D.eTy,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXF=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ejz=new A.aY(D.eXF,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ePB=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ejB=new A.aY(D.ePB,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eKd=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ejC=new A.aY(D.eKd,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eKe=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ekC=new A.aY(D.eKe,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eGu=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.ekU=new A.aY(D.eGu,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eIe=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.elc=new A.aY(D.eIe,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eP7=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.els=new A.aY(D.eP7,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eKW=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.elt=new A.aY(D.eKW,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eom=new A.E(!0,D.jw,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoK=new A.E(!0,D.jw,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ep6=new A.E(!0,E.iQ,null,null,null,null,19,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,D.ap7,null,null,null)
D.epj=new A.qZ(!0,B.qF,null,null,null,null,B.dl,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.epz=new A.E(!0,D.jw,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eq6=new A.E(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3W=new A.qZ(!0,B.Ps,null,null,null,null,B.dl,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.er4=new A.E(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ert=new A.E(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esX=new A.E(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.et0=new A.E(!0,G.iR,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eud=new A.E(!0,B.M,null,null,null,null,13,B.a1,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euR=new A.E(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evv=new A.E(!0,B.bQ,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evA=new A.E(!0,B.bS,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evW=new A.E(!0,D.IU,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ew4=new A.E(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ex0=new A.E(!0,B.cW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exs=new A.E(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exT=new A.E(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezj=new A.E(!0,B.aj,null,null,null,null,11.5,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezr=new A.E(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKe=new A.E(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4o=new A.E(!0,B.aj,null,null,null,null,12,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB1=new A.E(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBn=new A.E(!0,G.iR,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBt=new A.E(!0,G.iR,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCb=new A.w("Themes",null,B.py,null,null,null,null,null,null,null,null,null)
D.eCK=new A.w("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.esI=new A.E(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD4=new A.w("Debt receipt",null,D.esI,null,B.L,null,null,null,null,null,null,null)
D.aKa=new A.E(!0,B.aj,null,null,null,null,11,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDl=new A.w("Person who owes",null,D.aKa,null,null,null,null,null,null,null,null,null)
D.eEg=new A.w("Notes",null,B.a42,null,null,null,null,null,null,null,null,null)
D.eEF=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.erL=new A.E(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEJ=new A.w("Share",null,D.erL,null,null,null,null,null,null,null,null,null)
D.eFy=new A.w("Move your family trees",null,D.aKe,null,null,null,null,null,null,null,null,null)
D.eG5=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eGG=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eHQ=new A.w("Remove this book?",null,B.h7,null,null,null,null,null,null,null,null,null)
D.aKE=new A.w("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eIS=new A.w("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eK9=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eLa=new A.w("Ribbon bookmark",null,B.ir,null,null,null,null,null,null,null,null,null)
D.ezd=new A.E(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLB=new A.w("NGMY.ORG",null,D.ezd,null,B.L,null,null,null,null,null,null,null)
D.eMK=new A.w("Scan family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.evP=new A.E(!0,B.c,null,null,null,null,13,B.a1,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNr=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.evP,null,B.L,null,null,null,null,null,null,null)
D.eOz=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.eOF=new A.w("Thumbnail",null,B.py,null,null,null,null,null,null,null,null,null)
D.ePd=new A.w("Save the cover",null,B.cq,null,null,null,null,null,null,null,null,null)
D.ePC=new A.w("Your photos",null,B.py,null,null,null,null,null,null,null,null,null)
D.ePR=new A.w("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eQh=new A.w("Design your cover",null,A0.H_,null,null,null,null,null,null,null,null,null)
D.eQn=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.eQq=new A.w("PICTURE",null,H.md,null,null,null,null,null,null,null,null,null)
D.eQM=new A.w("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eQO=new A.w("You can undo it right after.",null,Z.a47,null,null,null,null,null,null,null,null,null)
D.eRg=new A.w("Print",null,B.tC,null,null,null,null,null,null,null,null,null)
D.eRB=new A.w("Amount owed",null,D.aKa,null,null,null,null,null,null,null,null,null)
D.eRO=new A.w("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eSk=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.eSn=new A.w("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eSM=new A.w("Debtor signature",null,B.a42,null,null,null,null,null,null,null,null,null)
D.eSU=new A.w("Change icon",null,E.aJu,null,null,null,null,null,null,null,null,null)
D.eTY=new A.w("Family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eUm=new A.w("Download",null,B.tC,null,null,null,null,null,null,null,null,null)
D.eUq=new A.w("Change",null,B.py,null,null,null,null,null,null,null,null,null)
D.eVc=new A.w("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eVf=new A.w("WHAT SHOULD IT CHANGE?",null,H.md,null,null,null,null,null,null,null,null,null)
D.eVP=new A.w("COLOUR",null,H.md,null,null,null,null,null,null,null,null,null)
D.eW0=new A.w("Do it",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eW3=new A.w("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eWZ=new A.w("Create Family Tree",null,B.eJ,null,null,null,null,null,null,null,null,null)
D.enp=new A.E(!0,E.iQ,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXd=new A.w("Write the first page myself",null,D.enp,null,null,null,null,null,null,null,null,null)
D.eXM=new A.w("Create Project",null,E.aJX,null,null,null,null,null,null,null,null,null)
D.f0U=new C.a8Y(1,"header")
D.a54=new C.a8Y(2,"projects")
D.f0V=new C.a8Y(3,"cashier")
D.a55=new C.a8Y(4,"familyTree")
D.fbw=new C.cpU(0,"start")
D.fbx=new C.cpV(0,"start")
D.f10=new C.We(null)
D.f2_=new C.WH(null)
D.d30=new A.bt(B.io,[],A.aA("bt<n,Ef>"))
D.cOU=w([],x.E)
D.cOV=w([],x.M)
D.f2w=new C.bap(D.d30,D.cOU,D.cOV,0,0,null,null)
D.f4f=new C.Y4(null)
D.a5M=new C.aGh(0,"projects")
D.aNr=new C.aGh(1,"cashier")
D.f9t=new C.aGh(2,"familyTree")})()};
(a=>{a["kVUp8gXrT8CauZPV/tPliXDOAos="]=a.current})($__dart_deferred_initializers__);