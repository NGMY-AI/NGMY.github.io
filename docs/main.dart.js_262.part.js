((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Y,G,F,E,Z,A_,A0,A1,A2,A3,M,A4,H,Q,R,S,T,A5,A6,U,A7,A8,V,A9,Aa,Ab,K,Ac,Ad,W,L,N,C={
byz(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$byz=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uy(null,""),$async$byz)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.P(y.j)
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
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.aj(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qh(t,a1,B.h4,E.Dm),$async$byz)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ov(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.a9(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.P(l!=null&&A.Jg(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Z(r.a(j.h(a2,a7)),q,p):B.cr
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a05(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byz,v)},
aek(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aek=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uy(null,""),$async$aek)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.P(y.j)
t=A.mE(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a_T(new A.J(r,new C.fgw(),r.$ti.k("J<ai.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ad("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fgv(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.aj(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aek)
case 6:l=c5
k=F.Ov(l==null?"":l)
if(k==null)throw A.P("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alt(s,D.d2F,r.b(k.h(0,"cover"))?A.Z(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.P("There is no page to change.")
h=A.R(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dA(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Q.aj(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aek)
case 10:l=c5
k=l==null?null:F.Ov(l)
if(k==null)throw A.P(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d1(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kJ(a5,a2.k("kJ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a6(a9)
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
h.m(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bf<2>")
p=A.cy(new A.bf(h,s),new C.fgx(),s.k("G.E"),p)
p=F.a_T(A.oJ(p,3,A.a2(p).k("G.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.A(new A.cu(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a05(s,b9),$async$aek)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alt(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aek,v)},
h3g(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.fpp(e,f),d,null,!0,!0,x.g2)},
alt:function alt(d,e,f){this.a=d
this.b=e
this.c=f},
fgw:function fgw(){},
fgv:function fgv(d){this.a=d},
fgx:function fgx(){},
fpp:function fpp(d,e){this.a=d
this.b=e},
bwu(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bwu=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.be(b1,new C.f6S())){u=null
w=1
break}t=B.d.e8(b1,new C.f6T())
s=$.a1()
r=new A.rs()
q=A.Fw(r,D.aG1)
p=A.U()
p.r=B.c.gt(0)
q.bp(D.aG1,p)
o=A.U()
o.r=B.M.gt(0)
o.c=3.6
o.b=B.aj
o.d=B.bZ
o.e=B.fk
n=new C.f6Y(t)
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
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
return A.b(r.pM().yk(520,160),$async$bwu)
case 4:w=3
return A.b(b3.hd(B.fI),$async$bwu)
case 3:b0=b3
u=b0==null?null:J.f1(B.dz.gaL(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bwu,v)},
fec(d){return C.hGI(d)},
hGI(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fec=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.baz()
n=d.x!=null&&d.y_(null).length===0
if(d.x!=null)t=n?D.xY:D.Gl
else t=d.gRN()?D.Gl:D.aBf
w=3
return A.b(C.bwu(d.ax),$async$fec)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akc(s)
r=A.a22(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBf}else{p.c=C.vR(q,!0)
p.b=n?D.xY:D.Gl}r.a0B(A.fyV(new C.fee(p,d,new C.fef(),t,n,o),null,D.biB,B.uW))
u=r.jz(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fec,v)},
fkO(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fkO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fec(d),$async$fkO)
case 3:t=f
s=B.a.i(d.b)
r=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aI(s,r,"_")
if(q.length>40)q=B.a.al(q,0,40)
u=A3.F3(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fkO,v)},
f6S:function f6S(){},
f6T:function f6T(){},
f6Y:function f6Y(d){this.a=d},
fef:function fef(){},
fee:function fee(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fed:function fed(){},
fpR(d,e){var w=0,v=A.j(x.H)
var $async$fpR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.fpV(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fpR)
case 2:return A.h(null,v)}})
return A.i($async$fpR,v)},
bz1(d,e,f,g){return C.hNV(d,e,f,g)},
hNV(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bz1=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aF(t)}catch(q){r=null}if(r==null||r.length===0){d.F(x.q).f.P(D.et2)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.fpN(g,r,f),d,null,!0,!0,x.H),$async$bz1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bz1,v)},
fpW(d,e){var w=0,v=A.j(x.H)
var $async$fpW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.fpZ(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fpW)
case 2:return A.h(null,v)}})
return A.i($async$fpW,v)},
aUS:function aUS(d,e){this.c=d
this.a=e},
bX8:function bX8(){},
b6O:function b6O(d,e){this.b=d
this.a=e},
fpV:function fpV(d,e){this.a=d
this.b=e},
fpS:function fpS(d){this.a=d},
fpT:function fpT(d,e,f){this.a=d
this.b=e
this.c=f},
fpU:function fpU(d,e){this.a=d
this.b=e},
fpN:function fpN(d,e,f){this.a=d
this.b=e
this.c=f},
fpL:function fpL(d){this.a=d},
fpM:function fpM(d,e,f){this.a=d
this.b=e
this.c=f},
fpZ:function fpZ(d,e){this.a=d
this.b=e},
fpX:function fpX(d){this.a=d},
fpY:function fpY(d,e,f){this.a=d
this.b=e
this.c=f},
f9B(d,e){var w=0,v=A.j(x.y),u,t
var $async$f9B=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_E(d),$async$f9B)
case 3:t=g
J.n_(t,new C.f9C(e))
u=A.aeY(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$f9B,v)},
f9C:function f9C(d){this.a=d},
alA:function alA(d,e,f){this.c=d
this.d=e
this.a=f},
azz:function azz(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dxx:function dxx(d,e){this.a=d
this.b=e},
dxi:function dxi(d,e){this.a=d
this.b=e},
dxl:function dxl(d,e,f){this.a=d
this.b=e
this.c=f},
dxk:function dxk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxj:function dxj(d,e){this.a=d
this.b=e},
dxm:function dxm(d,e){this.a=d
this.b=e},
dxg:function dxg(){},
dxh:function dxh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxf:function dxf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dx0:function dx0(d){this.a=d},
dx1:function dx1(d,e,f){this.a=d
this.b=e
this.c=f},
dx2:function dx2(d,e){this.a=d
this.b=e},
dx_:function dx_(d){this.a=d},
dx7:function dx7(d,e){this.a=d
this.b=e},
dwZ:function dwZ(d){this.a=d},
dx8:function dx8(d,e,f){this.a=d
this.b=e
this.c=f},
dx9:function dx9(d,e,f){this.a=d
this.b=e
this.c=f},
dwY:function dwY(d,e){this.a=d
this.b=e},
dxa:function dxa(d,e,f){this.a=d
this.b=e
this.c=f},
dwX:function dwX(d,e){this.a=d
this.b=e},
dxb:function dxb(d,e){this.a=d
this.b=e},
dwW:function dwW(d){this.a=d},
dxc:function dxc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dwU:function dwU(){},
dwO:function dwO(d){this.a=d},
dwP:function dwP(d){this.a=d},
dwV:function dwV(d,e){this.a=d
this.b=e},
dxd:function dxd(d,e){this.a=d
this.b=e},
dwT:function dwT(d){this.a=d},
dxe:function dxe(d){this.a=d},
dwS:function dwS(){},
dx3:function dx3(d,e){this.a=d
this.b=e},
dwR:function dwR(d){this.a=d},
dx4:function dx4(d,e,f){this.a=d
this.b=e
this.c=f},
dwQ:function dwQ(d,e){this.a=d
this.b=e},
dwN:function dwN(d,e){this.a=d
this.b=e},
dx5:function dx5(d){this.a=d},
dx6:function dx6(d,e,f){this.a=d
this.b=e
this.c=f},
dxA:function dxA(){},
dxB:function dxB(d,e){this.a=d
this.b=e},
dxy:function dxy(d){this.a=d},
dxz:function dxz(d){this.a=d},
dxu:function dxu(d,e){this.a=d
this.b=e},
dxv:function dxv(d){this.a=d},
dxn:function dxn(d,e,f){this.a=d
this.b=e
this.c=f},
dxo:function dxo(d,e,f){this.a=d
this.b=e
this.c=f},
dxp:function dxp(d,e,f){this.a=d
this.b=e
this.c=f},
dxq:function dxq(d,e,f){this.a=d
this.b=e
this.c=f},
dxr:function dxr(d,e,f){this.a=d
this.b=e
this.c=f},
dxs:function dxs(d,e,f){this.a=d
this.b=e
this.c=f},
dxt:function dxt(d,e,f){this.a=d
this.b=e
this.c=f},
dxC:function dxC(){},
dxD:function dxD(){},
dxE:function dxE(){},
dxF:function dxF(d){this.a=d},
dxw:function dxw(d,e){this.a=d
this.b=e},
fLK(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bg(J.k(u==null?"":u))
return new C.mM(t,w,v,u==null?new A.O(Date.now(),0,!1):u)},
J1(d,e){return C.hFm(d,e)},
hFm(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
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
break}p=B.Q.aD(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d1(p,x.f)
o=A.cy(o,new C.fbP(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a5<G.E>")
o=A.A(new A.a5(o,new C.fbQ(),n),n.k("G.E"))
B.d.aZ(o,new C.fbR())
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
r=J.b4(f,new C.foy(),x.a)
r=A.A(r,r.$ti.k("ai.E"))
w=4
return A.b(t.an("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.aj(r,null)),$async$zG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zG,v)},
aMZ(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aMZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J1(d,e),$async$aMZ)
case 2:u=h
t=J.cB(u)
s=t.bf(u,new C.fwa(f))
if(s===-1)t.cj(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zG(d,e,u),$async$aMZ)
case 3:return A.h(null,v)}})
return A.i($async$aMZ,v)},
bwV(d,e,f){var w=0,v=A.j(x.H),u
var $async$bwV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J1(d,e),$async$bwV)
case 2:u=h
J.n_(u,new C.f9t(f))
w=3
return A.b(C.zG(d,e,u),$async$bwV)
case 3:return A.h(null,v)}})
return A.i($async$bwV,v)},
bx8(d,e){return C.hFl(d,e)},
hFl(a1,a2){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$bx8=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aw(),$async$bx8)
case 7:r=a4
o=B.a.i(a1.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a2))
if(q==null||q.length===0){u=D.Kh
w=1
break}p=B.Q.aD(0,q,null)
if(x.f.b(p)){o=A.Z(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aQ(o.h(0,"emblem"))
k=k==null?null:B.k.L(k)
if(k==null)k=0
if(D.AP.am(0,o.h(0,"foil")))j=A.cJ(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a_B,o.h(0,"position"))?A.cJ(o.h(0,"position")):"middle"
g=B.d.q(D.a_6,o.h(0,"frame"))?A.cJ(o.h(0,"frame")):"double"
f=B.d.q(D.a_1,o.h(0,"texture"))?A.cJ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
o=new C.FX(n,m,l,k,j,i,h,g,f,J.k(e==null?"":e),!J.y(o.h(0,"ribbon"),!1))}else o=D.Kh
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a0=s.pop()
u=D.Kh
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bx8,v)},
a0m(d,e,f){return C.hNr(d,e,f)},
hNr(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a0m=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aw(),$async$a0m)
case 7:r=h
w=8
return A.b(r.an("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.aj(f.ad(),null)),$async$a0m)
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
return A.i($async$a0m,v)},
P4(d,e){return C.hFn(d,e)},
hFn(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$P4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$P4)
case 7:r=g
q=r.rm("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.A(q,x.N)
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
adG(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P4(d,e),$async$adG)
case 3:s=g
r=J.a6(s)
if(r.gG(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gG(s):"main"
r.H(s,t)
w=5
return A.b(A.aw(),$async$adG)
case 5:w=4
return A.b(g.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adG)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adG,v)},
a0k(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0k=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.P4(d,e),$async$a0k)
case 2:s=h
J.hB(s,f)
w=3
return A.b(A.aw(),$async$a0k)
case 3:u=h
w=4
return A.b(u.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0k)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0k)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0k)
case 6:return A.h(null,v)}})
return A.i($async$a0k,v)},
mM:function mM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbP:function fbP(){},
fbQ:function fbQ(){},
fbR:function fbR(){},
foy:function foy(){},
fwa:function fwa(d){this.a=d},
f9t:function f9t(d){this.a=d},
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
bIx:function bIx(d){this.a=d},
hNK(d,e,f,g,h,i,j){return A.a7(d,!1).cr(A.eG(new C.fp3(j,i,f,e,h,g),!0,null,x.H))},
P0(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$P0=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P4(h,g),$async$P0)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.a9(k)>=6){d.F(x.q).f.P(D.aHW)
u=!1
w=1
break}w=4
return A.b(C.h3g(d,f,e),$async$P0)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adG(h,g),$async$P0)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mM(""+(q+n),l,B.a.i(m.b),new A.O(Date.now(),0,!1)))}w=6
return A.b(C.zG(h,r,p),$async$P0)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.a0m(h,r,new C.FX("leather",p,"",0,"gold",25,"middle","double","leather","",!0)),$async$P0)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
fp3:function fp3(d,e,f,g,h,i){var _=this
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
awG:function awG(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
cZH:function cZH(d){this.a=d},
cZG:function cZG(d,e){this.a=d
this.b=e},
cZv:function cZv(d,e){this.a=d
this.b=e},
cZs:function cZs(d,e){this.a=d
this.b=e},
cZ5:function cZ5(d){this.a=d},
cZ6:function cZ6(d,e){this.a=d
this.b=e},
cZw:function cZw(d){this.a=d},
cZc:function cZc(d){this.a=d},
cZa:function cZa(d){this.a=d},
cZb:function cZb(d){this.a=d},
cZd:function cZd(d){this.a=d},
cZt:function cZt(d){this.a=d},
cZu:function cZu(){},
cZe:function cZe(d){this.a=d},
cZf:function cZf(d,e){this.a=d
this.b=e},
cZF:function cZF(d){this.a=d},
cZE:function cZE(d,e){this.a=d
this.b=e},
cZD:function cZD(d){this.a=d},
cZp:function cZp(d){this.a=d},
cZo:function cZo(d){this.a=d},
cZq:function cZq(d){this.a=d},
cZ7:function cZ7(d,e){this.a=d
this.b=e},
cZr:function cZr(d,e){this.a=d
this.b=e},
cZi:function cZi(d){this.a=d},
cZj:function cZj(d){this.a=d},
cZh:function cZh(){},
cZk:function cZk(d){this.a=d},
cZl:function cZl(d){this.a=d},
cZm:function cZm(d,e){this.a=d
this.b=e},
cZn:function cZn(d,e,f){this.a=d
this.b=e
this.c=f},
cZg:function cZg(d,e){this.a=d
this.b=e},
cZy:function cZy(d){this.a=d},
cZx:function cZx(){},
cZz:function cZz(d){this.a=d},
cZA:function cZA(d){this.a=d},
cZB:function cZB(d){this.a=d},
cZC:function cZC(d,e){this.a=d
this.b=e},
cZ8:function cZ8(d){this.a=d},
cZ9:function cZ9(d){this.a=d},
X9:function X9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baG:function baG(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d07:function d07(d){this.a=d},
d08:function d08(d){this.a=d},
d06:function d06(d){this.a=d},
d09:function d09(d){this.a=d},
d05:function d05(d){this.a=d},
d0a:function d0a(d){this.a=d},
d04:function d04(d){this.a=d},
d0b:function d0b(d,e){this.a=d
this.b=e},
d03:function d03(d,e){this.a=d
this.b=e},
d0c:function d0c(d,e){this.a=d
this.b=e},
X7:function X7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aca:function aca(d,e,f){this.a=d
this.b=e
this.c=f},
awH:function awH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cZW:function cZW(d,e){this.a=d
this.b=e},
cZV:function cZV(d,e){this.a=d
this.b=e},
d__:function d__(d){this.a=d},
cZZ:function cZZ(d,e){this.a=d
this.b=e},
cZX:function cZX(d){this.a=d},
cZY:function cZY(d){this.a=d},
d_0:function d_0(d){this.a=d},
d_1:function d_1(d){this.a=d},
cZU:function cZU(d,e){this.a=d
this.b=e},
cZT:function cZT(d,e){this.a=d
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
cyy:function cyy(d){this.a=d},
cyz:function cyz(){},
cyA:function cyA(d){this.a=d},
b7Z:function b7Z(d,e,f){this.b=d
this.c=e
this.a=f},
b7Q:function b7Q(d,e){this.b=d
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
b7X:function b7X(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cS_:function cS_(d,e,f){this.a=d
this.b=e
this.c=f},
cRZ:function cRZ(d,e){this.a=d
this.b=e},
cSo:function cSo(d){this.a=d},
cSb:function cSb(){},
cSp:function cSp(d){this.a=d},
cSa:function cSa(){},
cSq:function cSq(d,e){this.a=d
this.b=e},
cS9:function cS9(d,e){this.a=d
this.b=e},
cSr:function cSr(d,e){this.a=d
this.b=e},
cS8:function cS8(d,e){this.a=d
this.b=e},
cSs:function cSs(d){this.a=d},
cS7:function cS7(){},
cSt:function cSt(d,e){this.a=d
this.b=e},
cS6:function cS6(d,e){this.a=d
this.b=e},
cSu:function cSu(d){this.a=d},
cSj:function cSj(d,e){this.a=d
this.b=e},
cSv:function cSv(d){this.a=d},
cSw:function cSw(d){this.a=d},
cSy:function cSy(d){this.a=d},
cSz:function cSz(d){this.a=d},
cSi:function cSi(d,e){this.a=d
this.b=e},
cSA:function cSA(d,e){this.a=d
this.b=e},
aDw:function aDw(d){this.a=d},
bd8:function bd8(d){this.a=d},
b6c:function b6c(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
hEn(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.af8(a6),a5=a4.length
if(a5===0)return""
w=A.R(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.O(Date.now(),0,!1))
s=new C.fa1(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a5<1>"),q=q.k("cQ<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wC)m.push(l===D.Wk?"male":"female")
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
m.push("child of "+l+k)}a0=A.A(new A.cQ(new A.a5(a4,new C.fa_(u,f),p),new C.fa0(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.al(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hEo(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.af8(a0),d=e.length
if(d===0)return""
w=x.N
v=A.R(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.fa6(v,e)
q=new C.fa4(v)
p=A.R(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.m(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.m(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.am(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.am(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.m(0,s.a,d)}}d=p.$ti.k("bf<2>")
d=A.d8(new A.bf(p,d),d.k("G.E"))
n=A.A(d,A.a2(d).k("ck.E"))
B.d.fw(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.hX(l,new C.fa5(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hqI(d,e,f,g){var w,v,u=C.hEp(d,e)
if(u<=0||f.length<=u)return new A.abM(!1,D.AE,f)
if(g.q(0,e.a))return new A.abM(!1,D.AE,f)
w=A.T(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dz(0)
return new A.abM(!0,A.dc(f,u,null,w).dz(0),v)},
hqJ(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.af8(d3),d2=d1.length
if(d2===0)return D.fal
w=x.N
v=A.R(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d_8(t))}s=new C.d_p(v)
d2=x.h
r=A.R(w,d2)
q=new C.d_h(r)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d_g(r)
l=A.R(w,x.do)
for(p=new A.dw(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ch(l.cg(0,k,new C.d_9()),o)}h=new C.d_f(s)
g=new C.d_e(l,r)
p=v.$ti.k("bf<2>")
o=p.k("a5<G.E>")
f=A.A(new A.a5(new A.bf(v,p),new C.d_a(h),o),o.k("G.E"))
e=f.length===0?new A.bf(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
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
a9=new C.d_n(new C.d_j(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.R(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dw(v,v.r,v.e),j=a2.gaht(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eN([i],w)
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
b7=new C.d_7(a2,new C.d_o(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
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
d2=A.A(new A.cu(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.Ef(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ii(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.A(new A.cu(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bD(0,new C.d_b(c6,b4))
for(d2=new A.cN(a4,a4.$ti.k("cN<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.hX(j,new C.d_c(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d_d())
c6.push(new C.aFB(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.baq(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h_4(d){var w=A.ad("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fUz(d,e,f,g,h,i,j,k,l,m,n){return new C.XJ(k,f,j,e,l,n,m,d,g,h,i,null)},
ayA(d,e,f,g,h,i,j){return new C.be4(i,d,e,f,j,h,g,null)},
amG:function amG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA9:function aA9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dKq:function dKq(d){this.a=d},
dKp:function dKp(d){this.a=d},
dKs:function dKs(d,e){this.a=d
this.b=e},
dKt:function dKt(d,e){this.a=d
this.b=e},
dKu:function dKu(d){this.a=d},
dKo:function dKo(d,e){this.a=d
this.b=e},
dKr:function dKr(d){this.a=d},
dKw:function dKw(d){this.a=d},
dKv:function dKv(d,e){this.a=d
this.b=e},
amA:function amA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA6:function aA6(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dJR:function dJR(d){this.a=d},
dJP:function dJP(d){this.a=d},
dJQ:function dJQ(d){this.a=d},
dJS:function dJS(d,e){this.a=d
this.b=e},
dJM:function dJM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJk:function dJk(d){this.a=d},
dJl:function dJl(d,e){this.a=d
this.b=e},
dJz:function dJz(d){this.a=d},
dJx:function dJx(d){this.a=d},
dJy:function dJy(d,e){this.a=d
this.b=e},
dJA:function dJA(d){this.a=d},
dJB:function dJB(d,e){this.a=d
this.b=e},
dJL:function dJL(d,e){this.a=d
this.b=e},
dJJ:function dJJ(d,e){this.a=d
this.b=e},
dJI:function dJI(d,e){this.a=d
this.b=e},
dJE:function dJE(d,e){this.a=d
this.b=e},
dJD:function dJD(d){this.a=d},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJC:function dJC(d){this.a=d},
dJG:function dJG(d){this.a=d},
dJH:function dJH(d){this.a=d},
dJK:function dJK(d,e){this.a=d
this.b=e},
dJ8:function dJ8(d,e){this.a=d
this.b=e},
dJ9:function dJ9(d,e){this.a=d
this.b=e},
dJU:function dJU(d,e,f){this.a=d
this.b=e
this.c=f},
dJO:function dJO(d,e,f){this.a=d
this.b=e
this.c=f},
dJN:function dJN(d){this.a=d},
dJa:function dJa(d){this.a=d},
dJb:function dJb(d){this.a=d},
dJc:function dJc(){},
dJd:function dJd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJh:function dJh(d,e){this.a=d
this.b=e},
dJg:function dJg(d,e){this.a=d
this.b=e},
dJf:function dJf(d){this.a=d},
dJi:function dJi(d,e){this.a=d
this.b=e},
dJe:function dJe(d){this.a=d},
dJT:function dJT(d){this.a=d},
dJu:function dJu(){},
dJv:function dJv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJt:function dJt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJp:function dJp(d,e,f){this.a=d
this.b=e
this.c=f},
dJo:function dJo(d,e,f){this.a=d
this.b=e
this.c=f},
dJm:function dJm(d,e){this.a=d
this.b=e},
dJq:function dJq(d){this.a=d},
dJr:function dJr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJn:function dJn(d,e){this.a=d
this.b=e},
dJs:function dJs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJw:function dJw(d,e){this.a=d
this.b=e},
dK0:function dK0(){},
dK1:function dK1(d,e){this.a=d
this.b=e},
dK2:function dK2(d){this.a=d},
dK3:function dK3(d,e){this.a=d
this.b=e},
dJX:function dJX(d){this.a=d},
dJV:function dJV(d,e){this.a=d
this.b=e},
dJY:function dJY(d,e){this.a=d
this.b=e},
dJZ:function dJZ(d,e){this.a=d
this.b=e},
dK_:function dK_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dK4:function dK4(d){this.a=d},
dJW:function dJW(d){this.a=d},
dJj:function dJj(d){this.a=d},
bao:function bao(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d_5:function d_5(d){this.a=d},
d_4:function d_4(d,e){this.a=d
this.b=e},
d_6:function d_6(d){this.a=d},
d_3:function d_3(d,e){this.a=d
this.b=e},
fa1:function fa1(d,e){this.a=d
this.b=e},
fa2:function fa2(d){this.a=d},
fa3:function fa3(){},
fa_:function fa_(d,e){this.a=d
this.b=e},
fa0:function fa0(){},
fa6:function fa6(d,e){this.a=d
this.b=e},
fa7:function fa7(d){this.a=d},
fa8:function fa8(){},
fa4:function fa4(d){this.a=d},
fa5:function fa5(d,e){this.a=d
this.b=e},
Ii:function Ii(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ef:function Ef(d,e){this.a=d
this.b=e},
baq:function baq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_8:function d_8(d){this.a=d},
d_p:function d_p(d){this.a=d},
d_h:function d_h(d){this.a=d},
d_i:function d_i(){},
d_g:function d_g(d){this.a=d},
d_9:function d_9(){},
d_f:function d_f(d){this.a=d},
d_e:function d_e(d,e){this.a=d
this.b=e},
d_a:function d_a(d){this.a=d},
d_j:function d_j(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_k:function d_k(d){this.a=d},
d_l:function d_l(d){this.a=d},
d_m:function d_m(){},
d_n:function d_n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_o:function d_o(){},
d_7:function d_7(d,e,f,g,h,i,j,k,l,m){var _=this
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
d_b:function d_b(d,e){this.a=d
this.b=e},
d_c:function d_c(d){this.a=d},
d_d:function d_d(){},
aFB:function aFB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bar:function bar(d,e){this.b=d
this.a=e},
d_q:function d_q(){},
d_r:function d_r(d){this.a=d},
d_s:function d_s(d){this.a=d},
d_t:function d_t(){},
be5:function be5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9x:function b9x(d,e){this.b=d
this.a=e},
bru:function bru(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eUU:function eUU(d){this.a=d},
bhm:function bhm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ewz:function ewz(d){this.a=d},
ewy:function ewy(d,e){this.a=d
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
ayy:function ayy(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
deG:function deG(d,e){this.a=d
this.b=e},
deF:function deF(d){this.a=d},
deD:function deD(d){this.a=d},
deE:function deE(d){this.a=d},
deP:function deP(d){this.a=d},
deQ:function deQ(d){this.a=d},
deO:function deO(d,e){this.a=d
this.b=e},
deR:function deR(){},
deU:function deU(d){this.a=d},
deN:function deN(d,e){this.a=d
this.b=e},
deT:function deT(){},
deV:function deV(d){this.a=d},
deM:function deM(d,e){this.a=d
this.b=e},
deW:function deW(d){this.a=d},
deL:function deL(d){this.a=d},
deX:function deX(d){this.a=d},
deK:function deK(d){this.a=d},
deY:function deY(d){this.a=d},
deJ:function deJ(d){this.a=d},
deZ:function deZ(d){this.a=d},
deI:function deI(d){this.a=d},
df_:function df_(d){this.a=d},
deH:function deH(d,e){this.a=d
this.b=e},
deS:function deS(d){this.a=d},
aaE:function aaE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be4:function be4(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaD:function aaD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
be3:function be3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
df0:function df0(d){this.a=d},
df1:function df1(d,e){this.a=d
this.b=e},
ayz:function ayz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEE:function aEE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaF:function aaF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dfa:function dfa(d){this.a=d},
I7:function I7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fPx(d){var w=d.R,v=x.N
return w.iC(w,new C.c2D(),v,v)},
hil(d){var w=d.by
if(w>=0)return w
return 5},
fPz(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fPx(d).h(0,v)
if(w==null||w.length===0)return null
return A.bg(w)},
fPy(d,e){var w=C.fPz(d,e)
if(w!=null&&w.ca(new A.O(Date.now(),0,!1)))return!0
return!1},
him(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Z(C.fPx(d),w,w)
u=C.fPz(d,e)
t=u!=null&&u.ca(new A.O(Date.now(),0,!1))?u:new A.O(Date.now(),0,!1)
v.m(0,s,t.bL(A.dB(30,0,0,0,0,0).a).a4().aa())
d.R=v},
aWh(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWh=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.kZ(t,B.G9),$async$aWh)
case 3:if(l){u=!0
w=1
break}u=A.kD(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.G9,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWh,v)},
c2D:function c2D(){},
hij(){var w,v=$.oX(),u=J.dZ(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fM(u)},
GQ(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$GQ)
case 3:if(!e){u=A.R(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_family_tree_backup_codes_v1",null,!1,B.bD),$async$GQ)
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
$.al.$1("[family tree sync codes] load: "+A.t(p))
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
a4R(d){return C.hik(d)},
hik(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a4R=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$a4R)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hs("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$a4R)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a4(p)
$.al.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a4R,v)},
c2C(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c2C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GQ(),$async$c2C)
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
return A.i($async$c2C,v)},
Lz(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Lz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c2C(d),$async$Lz)
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
o.m(0,"updatedAt",new A.O(Date.now(),0,!1).a4().aa())
r.m(s,t,o)
w=9
return A.b(C.a4R(s),$async$Lz)
case 9:case 8:u=t
w=1
break
case 5:n=C.hij()
w=10
return A.b(C.GQ(),$async$Lz)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=11
return A.b(C.a4R(s),$async$Lz)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lz,v)},
aWg(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GQ(),$async$aWg)
case 3:t=f
for(s=J.df(t),r=s.gdH(t),r=r.dz(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a4R(t),$async$aWg)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWg,v)},
a4S(d,e,f){var w=0,v=A.j(x.H),u
var $async$a4S=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amF(d,e),$async$a4S)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Lz(d),$async$a4S)
case 7:w=4
break
case 5:w=8
return A.b(C.aWg(d),$async$a4S)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a4S,v)},
amz(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amz=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amF(f,e),$async$amz)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bV(),$async$amz)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GQ(),$async$amz)
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
return A.i($async$amz,v)},
aWf(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bV(),$async$aWf)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GQ(),$async$aWf)
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
return A.i($async$aWf,v)},
hin(){var w,v=$.oX(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fM(u)},
amC(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$amC)
case 3:if(!g){u=null
w=1
break}t=C.hin()
w=4
return A.b(A.SY(),$async$amC)
case 4:s=g
r=B.dB.aF(B.Q.aj(d.eD(),null))
r=B.cM.gcq().aF(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(A.a4T(s),$async$amC)
case 5:p=e?999:2
u=new A.YU("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amC,v)},
amB(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amB=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.SY(),$async$amB)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aQ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.L(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aWf(J.k(l==null?"":l),j),$async$amB)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{r=B.c0.c4(0,B.cw.aF(t))
s=C.fPA(r)}catch(f){q=A.a4(f)
$.al.$1("[family tree qr stash] decode: "+A.t(q))
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
l.m(0,"lastUsedAt",new A.O(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=5
return A.b(A.a4T(p),$async$amB)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amB,v)},
fPA(d){var w,v,u,t,s=null
try{w=B.Q.aD(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hip(A.Z(w,x.N,x.z))
return u}catch(t){v=A.a4(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fA_(d){var w=0,v=A.j(x.m),u,t,s
var $async$fA_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amB(t[1])
w=1
break}u=null
w=1
break}u=C.fPA(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fA_,v)},
hip(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d1(v,x.f)
u=A.cy(u,new C.c2F(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a5<G.E>")
s=A.A(new A.a5(u,new C.c2G(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bg(J.k(u==null?"":u))
if(r==null)r=new A.O(Date.now(),0,!1)
q=A.R(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jj(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d1(l,u)
n=A.cy(n,new C.c2H(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a5<G.E>")
j=A.A(new A.a5(n,new C.c2I(),k),k.k("G.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amD(h,w,s,r,q)},
amF(d,e){var w=0,v=A.j(x.y),u,t
var $async$amF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Lr(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zv(d),$async$amF)
case 3:u=t.cs(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amF,v)},
c2O(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c2O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zv(d),$async$c2O)
case 3:t=s.b4(f,new C.c2P(),x.cs)
t=A.A(t,t.$ti.k("ai.E"))
B.d.aZ(t,new C.c2Q())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2O,v)},
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
return A.b(C.amF(e,d),$async$SZ)
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
if(g!=null&&B.a.i(g).length!==0){t=J.dF(r,new C.c2M(g))
r=A.A(t,t.$ti.k("G.E"))}t=J.a6(r)
if(t.gah(r)){u=null
w=1
break}t=t.di(r,new C.c2N(e),x.k)
r=A.A(t,t.$ti.k("ai.E"))
q=A.R(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.J1(e,o),$async$SZ)
case 14:n=i
if(J.cs(n))q.m(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.amD(s,B.a.i(e.toLowerCase()),r,new A.O(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SZ,v)},
aWk(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWk=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SZ(d,e,f,g),$async$aWk)
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
return A.i($async$aWk,v)},
aWj(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SZ(d,e,f,g),$async$aWj)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amC(r,f),$async$aWj)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCF(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWj,v)},
T_(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T_=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fA_(a0),$async$T_)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amz(g.a,d,e,f,s,r),$async$T_)
case 6:if(!a2){if(r)throw A.P(A.b9("This backup expired or the sender's tree is no longer available."))
throw A.P(A.b9("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bwM(e,j),$async$T_)
case 12:case 11:w=13
return A.b(C.aeW(e,j,s),$async$T_)
case 13:h=n.h(0,i)
w=h!=null&&J.cs(h)?14:15
break
case 14:w=16
return A.b(C.zG(e,i,h),$async$T_)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bkR(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T_,v)},
amD:function amD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2K:function c2K(){},
c2L:function c2L(){},
c2J:function c2J(){},
c2F:function c2F(){},
c2G:function c2G(){},
c2H:function c2H(){},
c2I:function c2I(){},
c2P:function c2P(){},
c2Q:function c2Q(){},
c2M:function c2M(d){this.a=d},
c2N:function c2N(d){this.a=d},
fI4(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f6(null,x.H)
return A.hl(d,new C.amE(w,e,g,i,f,h,null),!0,null,x.H)},
d_2(d,e,f,g,h,i,j,k){return new C.ban(i,e,k,j,g,f,h,d,null)},
amE:function amE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA8:function aA8(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dKd:function dKd(d){this.a=d},
dKe:function dKe(d,e,f){this.a=d
this.b=e
this.c=f},
dKi:function dKi(d,e){this.a=d
this.b=e},
dKj:function dKj(d){this.a=d},
dKa:function dKa(d){this.a=d},
dKb:function dKb(d,e){this.a=d
this.b=e},
dKc:function dKc(d,e){this.a=d
this.b=e},
dKh:function dKh(d){this.a=d},
dKg:function dKg(d,e){this.a=d
this.b=e},
dKf:function dKf(){},
dKl:function dKl(d){this.a=d},
dKm:function dKm(d,e){this.a=d
this.b=e},
dKk:function dKk(d,e){this.a=d
this.b=e},
d_u:function d_u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bap:function bap(d,e,f){this.d=d
this.e=e
this.a=f},
a9W:function a9W(d,e,f){this.c=d
this.d=e
this.a=f},
ban:function ban(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bas:function bas(d,e,f,g,h){var _=this
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
aA7:function aA7(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dK5:function dK5(d,e){this.a=d
this.b=e},
dK6:function dK6(d){this.a=d},
dK7:function dK7(d){this.a=d},
dK8:function dK8(d){this.a=d},
dK9:function dK9(d){this.a=d},
Y4:function Y4(d){this.a=d},
bfu:function bfu(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dKn:function dKn(d,e){this.a=d
this.b=e},
aUR(d,e){return new C.aUQ(d,e,null)},
aUQ:function aUQ(d,e,f){this.c=d
this.d=e
this.a=f},
hGN(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aU(d,11)},
hNU(d){return A.c0(B.K,null,new C.fpw(new C.t5(A.L(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fRp(d,e){return new C.apt(e,d,null)},
aMG(d,e,f,g,h,i,j){var w=C.hGN(i)
if(w!=null)return A.bu(e,new A.a3(j,f,new C.a3W(w,!0,null),null),B.ap)
return I.aM2(e,B.bM,f,g,h,i,j)},
lh:function lh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3W:function a3W(d,e,f){this.c=d
this.d=e
this.a=f},
bfd:function bfd(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
dwF:function dwF(d){this.a=d},
dwG:function dwG(){},
dwH:function dwH(d,e){this.a=d
this.b=e},
bfc:function bfc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fpw:function fpw(d){this.a=d},
fpv:function fpv(d,e){this.a=d
this.b=e},
fpu:function fpu(d,e){this.a=d
this.b=e},
fpt:function fpt(d,e){this.a=d
this.b=e},
apt:function apt(d,e,f){this.c=d
this.d=e
this.a=f},
cag:function cag(d,e){this.a=d
this.b=e},
aHV:function aHV(){},
hNF(d){var w=null
return A.cg(w,w,!0,w,new C.foW(),d,w,!0,!0,x.e2)},
hOP(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.fw2(h,g,f,e),d,w,!0,!0,x.N)},
hNH(d,e){var w=null
return A.cg(w,w,!0,w,new C.foY(e),d,w,!0,!0,x.dY)},
hNG(d){var w=null
return A.cg(w,w,!0,w,new C.foX(),d,w,!0,!0,x.c5)},
aPx:function aPx(d,e){this.a=d
this.b=e},
aPw:function aPw(d){this.a=d},
aNB:function aNB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foW:function foW(){},
fw2:function fw2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foY:function foY(d){this.a=d},
foX:function foX(){},
WI:function WI(d,e){this.c=d
this.a=e},
avt:function avt(){var _=this
_.d=$
_.c=_.a=_.e=null},
cSM:function cSM(d){this.a=d},
cSN:function cSN(d){this.a=d},
cSL:function cSL(d,e){this.a=d
this.b=e},
cSO:function cSO(d){this.a=d},
cSP:function cSP(d){this.a=d},
WH:function WH(d){this.a=d},
avs:function avs(){this.d=$
this.c=this.a=null},
cSI:function cSI(d){this.a=d},
cSJ:function cSJ(d){this.a=d},
cSK:function cSK(d){this.a=d},
We:function We(d){this.a=d},
aue:function aue(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cqu:function cqu(){},
cqA:function cqA(d){this.a=d},
cqB:function cqB(d){this.a=d},
cqC:function cqC(d){this.a=d},
cqz:function cqz(){},
cqD:function cqD(d){this.a=d},
cqE:function cqE(d){this.a=d},
cqy:function cqy(){},
cqF:function cqF(d,e){this.a=d
this.b=e},
cqx:function cqx(d,e){this.a=d
this.b=e},
cqv:function cqv(d,e){this.a=d
this.b=e},
cqG:function cqG(d){this.a=d},
cqw:function cqw(){},
cqH:function cqH(d){this.a=d},
ZN:function ZN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brm:function brm(){this.d=$
this.c=this.a=null},
eUm:function eUm(d,e){this.a=d
this.b=e},
eUn:function eUn(d){this.a=d},
eUo:function eUo(d,e){this.a=d
this.b=e},
a9_:function a9_(d,e){this.a=d
this.b=e},
E3:function E3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brk:function brk(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eUk:function eUk(d,e){this.a=d
this.b=e},
au7:function au7(d,e){this.c=d
this.a=e},
brl:function brl(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eUl:function eUl(d){this.a=d},
brj:function brj(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aK0:function aK0(){},
aK1:function aK1(){},
byE(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bK(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.od(B.o.u(t),A.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fnP(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VE(A.dr(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMj(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hQ().kA(85,1280,B.et),$async$aMj)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aMj)
case 8:r=e
if(J.a9(r)===0){u=null
w=1
break}q=C.fRo()
w=9
return A.b(C.caf(q,r),$async$aMj)
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
$.al.$1("[worksheets] pick photo failed: "+A.t(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMj,v)},
aME(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aME=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cac(g)
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
return A.b($.a1().K0(p,!0,null,i).cJ(0,B.fE),$async$aME)
case 9:n=a1
w=10
return A.b(n.lS(),$async$aME)
case 10:m=a1
w=11
return A.b(J.aNn(m).hd(B.fI),$async$aME)
case 11:l=a1
J.aNn(m).p()
if(l==null){w=8
break}i=J.f1(B.dz.gaL(l))
k="data:image/png;base64,"+B.cM.gcq().aF(i)
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
$.al.$1("[worksheets] thumbnail shrink failed: "+A.t(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aME,v)},
fnP:function fnP(){},
t5:function t5(d){this.a=d},
aps:function aps(d,e,f){this.c=d
this.d=e
this.a=f},
aBz:function aBz(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
etJ:function etJ(d,e){this.a=d
this.b=e},
etA:function etA(d){this.a=d},
etB:function etB(d){this.a=d},
etH:function etH(d,e){this.a=d
this.b=e},
etG:function etG(d,e){this.a=d
this.b=e},
etD:function etD(d,e){this.a=d
this.b=e},
etC:function etC(d,e){this.a=d
this.b=e},
etE:function etE(d){this.a=d},
etF:function etF(d,e){this.a=d
this.b=e},
etI:function etI(d,e){this.a=d
this.b=e},
etv:function etv(d,e){this.a=d
this.b=e},
etz:function etz(d){this.a=d},
ety:function ety(d,e){this.a=d
this.b=e},
etx:function etx(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
etL:function etL(d,e){this.a=d
this.b=e},
etw:function etw(d,e){this.a=d
this.b=e},
h2N(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.O(Date.now(),0,!1).a4().aa(),"project",v],x.N,x.z)},
fnQ(d,e,f){var w=0,v=A.j(x.N),u
var $async$fnQ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.aj(C.h2N(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnQ,v)},
byG(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fnQ(!0,d,e),$async$byG)
case 4:w=3
return A.b(r.apq(g,d,e.a),$async$byG)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dB.aF(B.Q.aj(C.h2N(d,e,null),null))
u="NGMY_WS:"+B.jR.gcq().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byG,v)},
fVU(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fHN(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.a9(s)===0)return!1
if(J.cS(s,"NGMYWSSYNC2|"))return!0
if(J.cS(s,"NGMY_WS:"))return!0
if(J.eQ(s,t))return!0
if(J.cS(s,"{"))try{w=B.Q.aD(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hLM(d){var w,v,u,t=C.fVU(d)
if(t==null)return null
if(C.fHN(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aU(t,w))
if(C.fHN(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aU(t,u))
if(C.fHN(v))return v}return null},
fHM(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.a9(q)===0)return r
if(J.cS(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cS(q,"NGMY_WS:")){v=B.c0.c4(0,B.cw.aF(J.mf(q,8)))
w=t.a(B.Q.aD(0,v,r))}else w=t.a(B.Q.aD(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fCv(A.Z(u,x.N,x.z))
return t}catch(s){return r}},
byF(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$byF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.app(t[1]),$async$byF)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fHM(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fHM(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byF,v)},
fHL(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l1(w,v,d.c,d.d,new A.O(Date.now(),0,!1))},
byc(){var w=0,v=A.j(x.o),u,t
var $async$byc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.F4(),$async$byc)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fHM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byc,v)},
h3E(d,e,f,g){return A.c0(B.K,null,new C.fvV(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fvV:function fvV(d,e,f){this.a=d
this.b=e
this.c=f},
ab_:function ab_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
etN:function etN(d,e){this.a=d
this.b=e},
etO:function etO(d,e){this.a=d
this.b=e},
etP:function etP(d,e){this.a=d
this.b=e},
etQ:function etQ(d,e){this.a=d
this.b=e},
etM:function etM(d){this.a=d},
apm:function apm(d,e,f){this.c=d
this.d=e
this.a=f},
bgQ:function bgQ(){var _=this
_.c=_.a=_.e=_.d=null},
etq:function etq(d,e){this.a=d
this.b=e},
etr:function etr(d){this.a=d},
ets:function ets(d){this.a=d},
apr:function apr(d){this.a=d},
aBy:function aBy(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
etu:function etu(d){this.a=d},
ett:function ett(d){this.a=d},
hly(d,e,f,g,h){return new C.Mb(h,g,d,e,f,null)},
aGi:function aGi(d,e){this.a=d
this.b=e},
Mb:function Mb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBA:function aBA(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
euc:function euc(){},
eu8:function eu8(d,e){this.a=d
this.b=e},
eu9:function eu9(d){this.a=d},
etU:function etU(d){this.a=d},
etS:function etS(d){this.a=d},
etT:function etT(d){this.a=d},
eu2:function eu2(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e){this.a=d
this.b=e},
eu1:function eu1(d,e,f){this.a=d
this.b=e
this.c=f},
etY:function etY(d,e,f){this.a=d
this.b=e
this.c=f},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
etZ:function etZ(d){this.a=d},
euf:function euf(d){this.a=d},
eue:function eue(d){this.a=d},
eug:function eug(d){this.a=d},
eud:function eud(d){this.a=d},
etR:function etR(d){this.a=d},
etV:function etV(d,e){this.a=d
this.b=e},
eub:function eub(d,e){this.a=d
this.b=e},
eua:function eua(d,e){this.a=d
this.b=e},
eu5:function eu5(d){this.a=d},
eu6:function eu6(d){this.a=d},
eu7:function eu7(d,e){this.a=d
this.b=e},
eu4:function eu4(d,e){this.a=d
this.b=e},
eu3:function eu3(d,e,f){this.a=d
this.b=e
this.c=f},
bt4:function bt4(){},
zn(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ad("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aI(v,w,"_")},
adp(d,e,f){return C.hAF(d,e,f)},
hAF(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adp=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.an("String",e,f),$async$adp)
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
$.al.$1("[worksheets] setString failed for "+e+": "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adp,v)},
ado(d,e){return C.hAE(d,e)},
hAE(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ado=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ado)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a4(q)
$.al.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ado,v)},
hzt(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QO(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bvN(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bvN=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZw(q),$async$bvN)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aME(q,!1),$async$bvN)
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
return A.i($async$bvN,v)},
h9r(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
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
fCv(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d1(s,x.f)
w=A.cy(w,new C.cpT(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a5<G.E>")
r=A.A(new A.a5(w,new C.cpU(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bg(J.k(t==null?"":t))
return new C.l1(w,v,u,r,t==null?new A.O(Date.now(),0,!1):t)},
hEj(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wk
case"female":case"f":return D.aeo
default:return D.wC}},
h_v(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fLL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hEj(v==null?j:J.k(v))
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
return new C.hP(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hEl(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Ki
case"viewer":return D.jY
default:return D.rH}},
hEm(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
EV(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bx1(d,e){return B.a.i(e.toLowerCase())===C.EV(d,e)&&d.y!==D.jY},
ti(d,e){var w,v=d.y
if(v===D.jY)return!1
w=B.a.i(e.toLowerCase())
if(w===C.EV(d,e))return!0
if(v===D.Ki)return!0
v=d.e
return new A.J(v,A.fHR(),A.T(v).k("J<1,n>")).q(0,w)},
hDN(d){return J.dF(d,new C.f9l()).gG(0)},
fwh(d){var w=0,v=A.j(x.y),u,t
var $async$fwh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zv(d),$async$fwh)
case 3:u=t.rj(f,new C.fwi(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwh,v)},
bwM(d,e){var w=0,v=A.j(x.H),u,t
var $async$bwM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zv(d),$async$bwM)
case 3:t=g
if(J.rj(t,new C.f8x(e))){w=1
break}if(C.hDN(t)>=2)throw A.P(A.b9("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bwM,v)},
ahX(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d1(n,x.f)
w=A.cy(w,new C.bIy(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a5<G.E>")
m=A.A(new A.a5(w,new C.bIz(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b4(u,new C.bIA(),x.N)
t=A.A(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bg(J.k(r==null?"":r))
if(r==null)r=new A.O(Date.now(),0,!1)
q=A.aQ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.L(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kl(l,w,v,!s,t,m,r,q,p,C.hEl(o==null?null:J.k(o)))},
h_E(d){var w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(d.toUpperCase(),w,"")
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
return A.b(C.f0H(t,l),$async$BA)
case 6:s=f
if(J.cs(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aR(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fWs(o)
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
case 12:n=C.fWs(m)
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
f0H(d,e){return C.hx1(d,e)},
hx1(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f0H=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aR(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zn(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Q.aD(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.a9(n)===0){w=7
break}m=A.aR(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zn(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aD(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fCv(A.Z(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aR(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zn(a9)+"_"+n))
i=C.hzt(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZw(h),$async$f0H)
case 17:g=b1
if(g!=null){i=i.QO(g)
p=!0}case 16:J.ch(q,i)
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
case 8:J.PH(q,new C.f0I())
if(p&&J.a9(q)!==0)C.oc(a9,q)
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
return A.i($async$f0H,v)},
bxb(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Py(d),$async$bxb)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BA(r),$async$bxb)
case 4:t=p.aV(g)
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
return A.i($async$bxb,v)},
fWs(d){var w,v,u,t
try{w=B.Q.aD(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d1(w,x.f)
v=A.cy(v,new C.eXA(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a5<G.E>")
v=A.A(new A.a5(v,new C.eXB(),u),u.k("G.E"))
B.d.aZ(v,new C.eXC())
return v}catch(t){v=A.a([],x.D)
return v}},
oc(d,e){return C.hNv(d,e)},
hNv(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oc=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Py(b2),$async$oc)
case 3:a8=b5
if(J.a9(a8)===0){u=!1
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
o=J.b4(x.j.a(B.Q.aD(0,p,null)),new C.foN(),a2).fG(0)
a2=J.b4(b3,new C.foO(),a2).bZ(0,new C.foP())
n=A.d8(a2,a2.$ti.k("G.E"))
a2=o,a2=A.ef(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eQ(n,m)?17:18
break
case 17:a5=C.zn(a8)
l=A.aR(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a67(l),$async$oc)
case 19:t=21
a5=C.zn(a8)
k=A.aR(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aD(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a67(a5==null?null:J.k(a5)),$async$oc)
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
return A.b(C.ado(r,"ngmy_worksheet_item_v3_"+C.zn(a8)+"_"+m),$async$oc)
case 29:w=30
return A.b(C.ado(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+m),$async$oc)
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
return A.b(C.bvN(h),$async$oc)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adp(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4,f),$async$oc)
case 40:g=i.QO(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ado(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4),$async$oc)
case 41:g=i.QO(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ado(r,"ngmy_worksheet_thumb_v3_"+C.zn(a8)+"_"+a4),$async$oc)
case 42:case 34:a4=i.a
w=43
return A.b(C.adp(r,"ngmy_worksheet_item_v3_"+C.zn(a8)+"_"+a4,B.Q.aj(g.ad(),null)),$async$oc)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ch(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adp(r,"ngmy_worksheets_index_v3_"+C.zn(a8),B.Q.aj(q,null)),$async$oc)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eC(b3,new C.foQ(q))
a4=a3.$ti.k("cQ<1,a0<n,@>>")
a7=A.A(new A.cQ(a3,new C.foR(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.adp(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.aj(a0,null)),$async$oc)
case 45:w=46
return A.b(J.h8x(r),$async$oc)
case 46:if(a2.gcf(b3)&&J.a9(q)===0){u=!1
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
$.al.$1("[worksheets] saveWorksheetProjects error: "+A.t(a1))
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
r=s.bf(t,new C.fwg(e))
if(r===-1)s.cj(t,0,e)
else s.m(t,r,e)
u=C.oc(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Js,v)},
bwZ(d,e){var w=0,v=A.j(x.H),u
var $async$bwZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BA(d),$async$bwZ)
case 2:u=g
J.n_(u,new C.f9N(e))
w=3
return A.b(C.oc(d,u),$async$bwZ)
case 3:return A.h(null,v)}})
return A.i($async$bwZ,v)},
EX(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$EX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$EX)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aR(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aD(0,i,null)
if(x.j.b(t)){j=J.d1(t,x.f)
j=A.cy(j,new C.fbV(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a5<G.E>")
r=A.A(new A.a5(j,new C.fbW(),s),s.k("G.E"))
B.d.aZ(r,new C.fbX())
k=r}}catch(h){}w=4
return A.b(C.eYi(d),$async$EX)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hxo(k,p,d)
j=A.T(o)
s=j.k("J<1,a0<n,@>>")
s=A.A(new A.J(o,new C.fbY(),s),s.k("ai.E"))
n=B.Q.aj(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OJ(d,o),$async$EX)
case 7:case 6:j=j.k("a5<1>")
m=A.A(new A.a5(o,new C.fbZ(d),j),j.k("G.E"))
if(m.length!==0)C.aLf(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$EX,v)},
foz(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$foz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OJ(d,e),$async$foz)
case 3:t=J.dF(e,new C.foA(d))
s=A.A(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLf(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$foz,v)},
a0r(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0r=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aw(),$async$a0r)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aR(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aD(0,l,null)
if(x.j.b(u)){m=J.d1(u,x.f)
m=A.cy(m,new C.fwb(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a5<G.E>")
s=A.A(new A.a5(m,new C.fwc(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pJ(o,new C.fwd(e))
if(B.a.i(e.x).length===0&&C.ti(e,d)){m=B.a.i(d.toLowerCase())
p=e.azV(e.y===D.jY?D.jY:D.rH,m)}else p=e
if(q===-1)J.p_(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OJ(d,o),$async$a0r)
case 3:w=C.ti(p,d)?4:5
break
case 4:w=6
return A.b(C.aLe(C.EV(p,d),p),$async$a0r)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0r,v)},
aLo(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.EX(d),$async$aLo)
case 2:u=g
t=J.cB(u)
s=A.qD(t.eC(u,new C.f9u(e)))
t.bl(u,new C.f9v(e))
w=3
return A.b(C.OJ(d,u),$async$aLo)
case 3:w=s!=null&&C.bx1(s,d)?4:5
break
case 4:w=6
return A.b(C.eXE(e),$async$aLo)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLo,v)},
af8(d){var w=d.f,v=A.T(w).k("a5<1>")
w=A.A(new A.a5(w,new C.fwm(),v),v.k("G.E"))
return w},
fFy(d,e){var w,v=d.f,u=A.qD(new A.a5(v,new C.f95(e),A.T(v).k("a5<1>")))
v=C.af8(d)
w=A.T(v).k("a5<1>")
v=A.A(new A.a5(v,new C.f96(e,u),w),w.k("G.E"))
B.d.aZ(v,new C.f97())
return v},
hEp(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h3G(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bf(C.fFy(d,u),new C.fw3(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hFT(d,e){var w
if(e==null||e.length===0)return 1
w=C.fFy(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fcG(),A.T(w).k("J<1,I>")).fs(0,B.yL)+1},
hNo(d){var w,v=C.af8(d)
if(v.length===0)return null
w=new A.a5(v,new C.fow(),A.T(v).k("a5<1>"))
if(!w.gah(0))return w.gI(0)
return B.d.gI(v)},
hEk(d){return A.E(["id",d.a,"name",d.b,"gender",C.h_v(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hFO(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.R(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.m(0,t.a,t)}s=A.a([],x.u)
r=A.aZ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.H(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.wC?n:q.c
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
d=q.azQ(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.czH(a1,w,a3.d,a2.y,s,a0,v)},
zv(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$zv)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aR(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aD(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d1(t,x.f)
p=A.cy(p,new C.fbS(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a5<G.E>")
p=A.A(new A.a5(p,new C.fbT(),s),s.k("G.E"))
B.d.aZ(p,new C.fbU())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zv,v)},
aeW(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aeW=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rH:D.jY
a7=C.EV(b2,b3)
w=2
return A.b(C.zv(b1),$async$aeW)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.bf(a8,new C.fou(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bwM(b1,b2),$async$aeW)
case 5:case 4:if(b0===-1){u=b2.azV(a6,a7)
a9.cj(a8,0,u)}else{t=a9.h(a8,b0)
s=A.R(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){o=r[p]
s.m(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.m(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.wC?i:l.c
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
s.m(0,m,l.azQ(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bf<2>")
s=A.A(new A.bf(s,k),k.k("G.E"))
k=a5?D.rH:D.jY
u=t.xC(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OJ(b1,a8),$async$aeW)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLe(B.a.i(b3.toLowerCase()),u),$async$aeW)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aeW,v)},
fWO(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.O(Date.now(),0,!1).a4().aa(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a0<n,@>>"),k=A.A(new A.J(m,C.h2V(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().aa(),"updatedAt",o],r,x.K),"createdAt",s.a4().aa(),"updatedAt",o],r,x.z)},
fWP(d,e){var w=new A.O(Date.now(),0,!1).a4().aa(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a0<n,@>>")
u=A.A(new A.J(u,C.h2V(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().aa(),"updatedAt",w],x.N,x.z)},
hv9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ahX(A.Z(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fHR(),A.T(j).k("J<1,n>")).bZ(0,new C.eY5())
t=A.A(j,j.$ti.k("G.E"))
if(u===v)s=D.rH
else s=B.d.q(t,u)?D.Ki:D.jY
return w.azV(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ahX(A.Z(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d1(q,h)
h=A.cy(h,new C.eY6(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a5<G.E>")
o=A.A(new A.a5(h,new C.eY7(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b4(n,new C.eY8(),x.N).bZ(0,new C.eY9())
t=A.A(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rH
else s=B.d.q(t,u)?D.Ki:D.jY
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bg(J.k(l==null?"":l))
if(l==null)l=new A.O(Date.now(),0,!1)
j=A.aQ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.L(j)
if(j==null)j=0
return new C.kl(h,r,p,!m,t,o,l,j,v,s)},
eYi(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eYi=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.a9(a0)===0){u=null
w=1
break}t=4
r=new C.eYm()
h=x.N
g=x.z
w=7
return A.b(A.iz(A.a([A.l7("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bD),r.$2(A.l7("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bD),"collaborator"),r.$2(A.l7("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bD),"public")],x.cl),x.U),$async$eYi)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.R(h,g)
h=A.A(p,g)
l=h
J.fT(l,o)
J.fT(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.a9(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bf<2>")
h=A.cy(new A.bf(l,h),new C.eYj(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a5<G.E>")
l=A.A(new A.a5(h,new C.eYk(),l),l.k("G.E"))
B.d.aZ(l,new C.eYl())
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
h=$.al
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
return A.i($async$eYi,v)},
hxo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gah(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f1m(),v).bZ(0,new C.f1n())
t=A.d8(u,u.$ti.k("G.E"))
s=A.R(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.EV(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.jY){m=q.e
m=!new A.J(m,A.fHR(),A.T(m).k("J<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.m(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hFO(l,v)
o=C.EV(k,w)
p=v.d
s.m(0,u,o===w?k.b6p(p,D.rH):k.b6p(p,v.y))}j=s.$ti.k("bf<2>")
j=A.A(new A.bf(s,j),j.k("G.E"))
B.d.aZ(j,new C.f1o())
return j},
OJ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$OJ)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b4(e,new C.f3o(),x.a)
s=A.A(s,s.$ti.k("ai.E"))
w=3
return A.b(u.an("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.aj(s,null)),$async$OJ)
case 3:return A.h(null,v)}})
return A.i($async$OJ,v)},
aLe(d,e){return C.hCd(d,e)},
hCd(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLe=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.ly("family_trees",A.a([C.fWO(e,d)],p),null,B.cy),$async$aLe)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.ly("family_trees",A.a([C.fWP(e,d)],p),null,B.cy),$async$aLe)
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
$.al.$1("[family_trees] upsert error: "+A.t(q))
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
aLf(d,e){return C.hCe(d,e)},
hCe(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a0<n,@>>")
m=n.k("ai.E")
l=A.A(new A.J(e,new C.f7U(d),n),m)
r=l
w=7
return A.b(A.ly("family_trees",r,null,B.cy),$async$aLf)
case 7:q=g
if(q){u=!0
w=1
break}k=A.A(new A.J(e,new C.f7V(d),n),m)
p=k
w=8
return A.b(A.ly("family_trees",p,null,B.cy),$async$aLf)
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
$.al.$1("[family_trees] bulk upsert error: "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aLf,v)},
eXE(d){return C.huy(d)},
huy(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eXE=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.P8("family_trees",A.E(["id",d],x.N,x.z),null,B.cy),$async$eXE)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a4(p)
$.al.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$eXE,v)},
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
cpW:function cpW(){},
cpV:function cpV(){},
cpT:function cpT(){},
cpU:function cpU(){},
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
ahW:function ahW(d,e){this.a=d
this.b=e},
f9l:function f9l(){},
fwi:function fwi(d){this.a=d},
f8x:function f8x(d){this.a=d},
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
bIC:function bIC(){},
bIB:function bIB(){},
bIy:function bIy(){},
bIz:function bIz(){},
bIA:function bIA(){},
f0I:function f0I(){},
eXA:function eXA(){},
eXB:function eXB(){},
eXC:function eXC(){},
foN:function foN(){},
foO:function foO(){},
foP:function foP(){},
foQ:function foQ(d){this.a=d},
foR:function foR(){},
fwg:function fwg(d){this.a=d},
f9N:function f9N(d){this.a=d},
fbV:function fbV(){},
fbW:function fbW(){},
fbX:function fbX(){},
fbY:function fbY(){},
fbZ:function fbZ(d){this.a=d},
foA:function foA(d){this.a=d},
fwb:function fwb(){},
fwc:function fwc(){},
fwd:function fwd(d){this.a=d},
f9u:function f9u(d){this.a=d},
f9v:function f9v(d){this.a=d},
fwm:function fwm(){},
f95:function f95(d){this.a=d},
f96:function f96(d,e){this.a=d
this.b=e},
f97:function f97(){},
fw3:function fw3(d){this.a=d},
fcG:function fcG(){},
fow:function fow(){},
fbS:function fbS(){},
fbT:function fbT(){},
fbU:function fbU(){},
fou:function fou(d){this.a=d},
eY5:function eY5(){},
eY6:function eY6(){},
eY7:function eY7(){},
eY8:function eY8(){},
eY9:function eY9(){},
eYm:function eYm(){},
eYn:function eYn(d){this.a=d},
eYj:function eYj(d){this.a=d},
eYk:function eYk(){},
eYl:function eYl(){},
f1m:function f1m(){},
f1n:function f1n(){},
f1o:function f1o(){},
f3o:function f3o(){},
f7U:function f7U(d){this.a=d},
f7V:function f7V(d){this.a=d},
cpX:function cpX(d,e){this.a=d
this.b=e},
cpY:function cpY(d,e){this.a=d
this.b=e},
aDB:function aDB(d,e,f){this.a=d
this.b=e
this.c=f},
b4H:function b4H(){this.b=this.a=0},
b4G:function b4G(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
brn:function brn(){},
vR(d,e){var w,v
if(d==null)return""
w=d.bO()
v=""+w.gcb()+"/"+w.gcp()+"/"+w.gcc()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmE()),2,"0")+":"+B.a.aT(B.o.u(w.gEU()),2,"0")},
hlv(){var w,v=$.oX(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"WS"+B.d.fM(u)},
apn(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$apn)
case 3:if(!e){u=A.R(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bD),$async$apn)
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
$.al.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.R(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apn,v)},
apo(d){return C.hlw(d)},
hlw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$apo)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hs("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$apo)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a4(p)
$.al.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apo,v)},
apq(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bV(),$async$apq)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hlv()
w=4
return A.b(C.apn(),$async$apq)
case 4:r=h
q=B.a.i(e)
p=B.dB.aF(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cM.gcq().aF(p),"usesRemaining",25,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(C.apo(r),$async$apq)
case 5:u=new A.YU("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apq,v)},
app(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$app=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bV(),$async$app)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apn(),$async$app)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aQ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.L(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{s=B.c0.c4(0,B.cw.aF(t))}catch(h){r=A.a4(h)
$.al.$1("[worksheet qr stash] decode: "+A.t(r))
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
m.m(0,"lastUsedAt",new A.O(Date.now(),0,!1).a4().aa())
p.m(q,i,m)}w=5
return A.b(C.apo(q),$async$app)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$app,v)},
fRo(){var w=new A.O(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cA.aA(999999)},
hlx(d){var w,v,u,t,s,r,q
try{w=A.adN(d)
if(w==null)return d
v=w
if(J.Jy(v)>960||J.Jx(v)>960){s=v
r=J.Jy(v)>=J.Jx(v)?960:null
v=A.adM(s,J.Jx(v)>J.Jy(v)?960:null,B.Lz,r)}s=v
u=A.ajl(82).R9(s,B.xm)
if(J.a9(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.a4(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
caf(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$caf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hlx(e)
$.cab.m(0,s,t)
u=C.byI(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caf,v)},
aZw(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZw=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cS(l,"data:image")){u=null
w=1
break}t=4
r=J.eQ(l,",")?B.d.gai(J.l9(l,",")):l
q=B.cw.aF(r)
if(J.a9(q)===0){u=null
w=1
break}p=C.fRo()
w=7
return A.b(C.caf(p,q),$async$aZw)
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
$.al.$1("[worksheet-thumb] persistDataUrl failed: "+A.t(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aZw,v)},
cac(d){var w=0,v=A.j(x.T),u,t,s
var $async$cac=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cae(s),$async$cac)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gcq().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cac,v)},
a67(d){var w=0,v=A.j(x.H),u,t
var $async$a67=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h2O(d)
if(t==null){w=1
break}$.cab.W(0,t)
w=3
return A.b(C.byH(t),$async$a67)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a67,v)},
byI(d,e){return C.hLP(d,e)},
hLP(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$byI=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKd
w=7
return A.b(n==null?$.aKd=I.fEC():n,$async$byI)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.mg(r,"thumbs","readwrite")
B.im.lL(J.me(p,"thumbs"),q,l)
w=8
return A.b(J.oZ(p),$async$byI)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a4(k)
$.al.$1("[worksheet-thumb idb put] "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byI,v)},
byH(d){return C.hLN(d)},
hLN(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKd
w=7
return A.b(o==null?$.aKd=I.fEC():o,$async$byH)
case 7:r=f
q=J.mg(r,"thumbs","readwrite")
B.im.Eq(J.me(q,"thumbs"),m)
w=8
return A.b(J.oZ(q),$async$byH)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a4(l)
$.al.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byH,v)}},D,Ae,Af,O,Ag,Ah,I,P,X,Ai
J=c[1]
A=c[0]
B=c[2]
Y=c[189]
G=c[169]
F=c[29]
E=c[179]
Z=c[109]
A_=c[108]
A0=c[157]
A1=c[122]
A2=c[188]
A3=c[35]
M=c[187]
A4=c[78]
H=c[84]
Q=c[128]
R=c[131]
S=c[200]
T=c[158]
A5=c[149]
A6=c[161]
U=c[156]
A7=c[62]
A8=c[68]
V=c[173]
A9=c[28]
Aa=c[205]
Ab=c[140]
K=c[151]
Ac=c[162]
Ad=c[203]
W=c[196]
L=c[99]
N=c[66]
C=a.updateHolder(c[6],C)
D=c[199]
Ae=c[67]
Af=c[167]
O=c[202]
Ag=c[201]
Ah=c[54]
I=c[52]
P=c[204]
X=c[120]
Ai=c[94]
C.alt.prototype={}
C.aUS.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.baz(),f=h.x!=null&&h.y_(i).length===0
if(h.x!=null)w=f?B.aW:B.bS
else w=h.gRN()?B.bS:B.e2
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b4J,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.ej7,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h0,i,i,i),B.T,D.eKW,B.au,A.d(C.vR(new A.O(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eH9,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aRC,i,i,i,i,B.Vj,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fGr(h.d)
o=A.p(B.B,C.aUR(A.ff3(h.e,n),30),B.h,i,i,new A.o(B.lO,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eCH,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.by,D.eLc,B.aa,A.p(i,A.u(A.a([D.eZr,B.by,A.d(A.zx(h.c),i,i,i,i,i,i,D.exX,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eU,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,p,q,i,i,B.n),i,i,i,i,K.acy,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMc("Original due",C.vR(h.r,!1))
n=j.aMc("Current due",C.vR(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.u(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGr(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zw,i,i,1/0),B.T,j.c6s(),B.P,j.bW7(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eM6,B.au,A.d(q,i,i,i,i,i,i,D.eC3,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaBv()){q=A.m(14)
o=A.H(B.ct,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.f_C,B.P,A.bu(A.m(12),A.ec(new A.a3(1/0,88,A.b2(i,i,i,new A.TP(h.ax,B.M,D.ems,!0,3.5,i),B.as),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Du,i,i,i)],s))}p.push(B.ay)
p.push(D.eTr)
return A.p(i,A.u(A.a([r,new A.C(B.acB,A.u(p,B.ad,i,B.e,B.j,0,B.p),i)],s),B.ad,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMc(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4h,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eyV,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c6s(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6D(B.e2,u,"Not paid yet")
w=t.y_(null).length
v=w===0?B.aW:B.bS
return this.a6D(v,u,C.vR(t.x,!0))},
bW7(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6D(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6D(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4h,u,u,u)
v=A.T(d).k("J<1,ha>")
v=A.A(new A.J(d,new C.bX8(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.cb(B.bH,v,B.bw,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6D(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4h,w,w,w),1),new A.dk(1,B.cj,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b6O.prototype={
a5(d,e){new A.TP(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ao(d){return d.b!==this.b}}
C.alA.prototype={
S(){return new C.azz(A.a([],x.bp))},
gdQ(){return this.c}}
C.azz.prototype={
Z(){this.a0()
this.Hh()},
Hh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_E(t.a.c),$async$Hh)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dxx(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hh,v)},
aO3(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aO,s=A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bm:B.bv).j(0.22)
w=A.m(10)
return A.bl(v,new A.b1(4,r,new A.ax(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b1(4,w,new A.ax((this.a.d.a?B.bm:B.bv).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b1(4,A.m(10),D.aPg),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aO2(d){return this.aO3(d,null)},
NB(d){return this.ca0(d)},
ca0(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NB=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EK:B.et
w=7
return A.b(new A.hQ().AY(72,900,900,n),$async$NB)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$NB)
case 8:p=f
n=B.cM.gcq().aF(p)
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
return A.i($async$NB,v)},
aW0(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aO,o=A.m(10),n=A.H((q?B.bm:B.bv).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bm:B.bv
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bm:B.bv
t=x.p
u=A.D(A.u(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fo(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c6)
q=A.a([q,B.ab,u,A.bG(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.cu,s.a.d.a?B.bm:B.bv,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c6))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ks,D.beh,r,r,r)},
BT(d){return this.bte(d)},
btd(){return this.BT(null)},
bte(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
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
a4=a4===q?B.o.u(B.k.L(p)):B.k.ab(p,2)}o=new A.ao(new A.bb(a4,B.aZ,B.aL),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ao(new A.bb(a4,B.aZ,B.aL),s)
if(a3){a4=new A.O(Date.now(),0,!1).bL(6048e8)
m=A.bY(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)}else{a4=a5.f
m=A.bY(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bi(a4,!0,x.cT)
i=a3?null:A.fGr(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.uR?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hM(B.w.j(0.55),!0,"Dismiss",a4,new C.dxg(),new C.dxh(a2,t,a5,r,new C.dxi(a2,t),o,n,j),B.eD,!0,x.y),$async$BT)
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
break}if(f.length===0||e<=0){t.c.F(x.q).f.P(D.esK)
w=1
break}a0=a2.d
if(a0==null){t.c.F(x.q).f.P(D.erp)
w=1
break}a1=A.ff3(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.uR?"male":"female"
w=7
return A.b(A.af7(a3,A.fOf(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BT)
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
a3=A.bY(a3.gcc(),a3.gcb(),a3.gcp(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bY(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)))a5.cBN(a2.a)
w=8
return A.b(A.af7(t.a.c,a5),$async$BT)
case 8:case 5:w=9
return A.b(t.Hh(),$async$BT)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BT,v)},
aOD(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.M:B.aO
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bm:B.bv).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aUR(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aO:B.aG
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b4,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ac)},
Qa(d){return this.cqU(d)},
cqU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hM(B.w.j(0.55),!0,"Dismiss",s,new C.dxA(),new C.dxB(t,d),B.hG,!0,x.y),$async$Qa)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.O(s,0,!1)
case 4:w=7
return A.b(A.af7(t.a.c,d),$async$Qa)
case 7:w=8
return A.b(t.Hh(),$async$Qa)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qa,v)},
Mi(d,e){return this.bDI(0,e)},
bDI(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kN(s,"Cancel","Delete",e.b+" \xb7 "+A.zx(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mi)
case 3:if(!g){w=1
break}w=4
return A.b(C.f9B(t.a.c,e.a),$async$Mi)
case 4:w=5
return A.b(t.Hh(),$async$Mi)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mi,v)},
abT(d){return this.c44(d)},
c44(d){var w=0,v=A.j(x.H),u=this,t
var $async$abT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c0(B.K,null,new C.dxu(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$abT)
case 2:return A.h(null,v)}})
return A.i($async$abT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dM2
w=J.dF(m.d,new C.dxC())
v=A.A(w,w.$ti.k("G.E"))
w=J.dF(m.d,new C.dxD())
u=A.A(w,w.$ti.k("G.E"))
t=B.d.cI(v,0,new C.dxE())
w=A.m(18)
s=m.a.d.a
r=s?D.c7D:D.asa
q=A.H(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.bBx,B.h,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.av,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.X,!0,A.m(12),A.aH(!1,A.m(12),!0,D.dLv,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dxF(m),l,l,l,l,l,l,l),B.h,B.cW,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cnc("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zx(t)
r=A.a([A.p(l,A.u(A.a([s,B.aa,A.B(A.a([o,B.ab,A.D(m.b0T(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.acv,l,l,l),B.ay],p)
if(J.ci(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bm:B.bv).j(0.12),B.r,1)
n=A.p(l,D.bwC,B.h,l,l,new A.o(B.cW.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.aa,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bgH,l,l,1/0))}else{w=m.gc9j()
s=A.A(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.bik,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.ad,l,B.e,B.j,0,B.p)},
b0T(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bm:B.bv).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bm:B.bv,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aO:B.aG
return A.p(u,A.u(A.a([q,B.by,A.d(f,u,1,B.Z,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cnc(d,e){return this.b0T(!1,d,e)},
c9k(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y_(j).length,h=d.b9M()
if(d.x!=null){w=d.y_(j).length
v=w===0?B.cW:B.bS}else if(d.gRN())v=B.bS
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
if(d.gRN()&&d.x==null)s=B.bS.j(0.35)
else s=(k.a.d.a?B.bm:B.bv).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.G,B.w.j(0.04),B.cG,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lO
o=A.H(d.gRN()&&d.x==null?B.bS.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fGr(d.d)
o=A.p(B.B,A.d4(C.aUR(A.ff3(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aO:B.aG
m=x.p
n=A.a([new A.dk(1,B.cj,A.d(p,j,1,B.Z,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBv())B.d.v(n,A.a([B.ez,A.V(B.KH,B.cW.j(0.8),j,j,j,14)],m))
p=A.D(A.u(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d5,A.d(t,j,1,B.Z,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zx(d.c)
l=k.a.d.a?B.aO:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.X,!0,j,A.aH(!1,q,!0,new A.C(S.acf,A.B(A.a([o,B.ba,p,B.ab,A.u(A.a([n,B.by,A.V(B.ek,(k.a.d.a?B.bm:B.bv).j(0.5),j,j,j,18)],m),B.dE,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dxw(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ac),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d7,j,j,j,j)}}
C.mM.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().aa()],x.N,x.z)},
b6B(d,e,f){return new C.mM(this.a,e,d,f)}}
C.FX.prototype={
xy(d,e,f,g,h,i,j,k,l,a0,a1){var w=this,v=j==null?w.a:j,u=a0==null?w.b:a0,t=k==null?w.c:k,s=e==null?w.d:e,r=f==null?w.e:f,q=a1==null?w.f:a1,p=h==null?w.r:h,o=g==null?w.w:g,n=l==null?w.x:l,m=d==null?w.y:d
return new C.FX(v,u,t,s,r,q,p,o,n,m,i==null?w.z:i)},
azK(d){var w=null
return this.xy(w,w,w,w,d,w,w,w,w,w,w)},
b6z(d,e,f){var w=null
return this.xy(d,w,w,w,w,w,w,e,w,f,w)},
cyk(d){var w=null
return this.xy(w,w,w,w,w,d,w,w,w,w,w)},
cyt(d){var w=null
return this.xy(w,w,w,w,w,w,w,w,d,w,w)},
cxF(d){var w=null
return this.xy(w,w,w,d,w,w,w,w,w,w,w)},
cyv(d){var w=null
return this.xy(w,w,w,w,w,w,w,w,w,w,d)},
cxC(d){var w=null
return this.xy(w,w,d,w,w,w,w,w,w,w,w)},
cxx(d){var w=null
return this.xy(w,d,w,w,w,w,w,w,w,w,w)},
Ej(d){var w=null
return this.xy(w,w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z],x.N,x.z)},
cvv(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bIx(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.L(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cJ(d.h(0,n))).length!==0?B.a.i(A.cJ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cJ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AP.ge9(D.AP))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_B)
q=l.$2("frame",D.a_6)
l=l.$2("texture",D.a_1)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cJ(d.h(0,"author"))):o
return this.xy(p,u,t,q,r,A.tf(d.h(0,"ribbon"))?A.Ey(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.X5.prototype={
S(){return new C.awG(A.a([],x.I),D.Kh)},
gdQ(){return this.c}}
C.awG.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yt(0,1)
w=$.at()
v.z=new A.ao(B.aq,w)
v.Q=new A.ao(B.aq,w)
v.kp()
w=v.a
C.bx8(w.c,w.d).bw(new C.cZH(v),x.fL)},
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
break}t.n(new C.cZv(t,r))
t.as4()
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
gaoL(){var w,v=this
if(!J.ci(v.d)){w=v.r
w=w<0||w>=J.a9(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
as4(){var w,v,u=this.gaoL(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saR(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saR(0,w==null?"":w)},
c2v(d){this.n(new C.cZs(this,d))
this.as4()},
LF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mM(B.o.u(1000*Date.now()),"Untitled page","",new A.O(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aMZ(r.c,r.d,s),$async$LF)
case 3:w=4
return A.b(t.kp(),$async$LF)
case 4:if(t.c==null||J.ci(t.d)){w=1
break}q=J.pJ(t.d,new C.cZ5(s))
p=q>=0?q:J.a9(t.d)-1
t.n(new C.cZ6(t,p))
t.as4()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A2(p+1,B.co,B.ko),$async$LF)
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
break}s=t.gaoL()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aMZ(o.c,o.d,new C.mM(s,r,q,new A.O(p,0,!1))),$async$DC)
case 3:w=4
return A.b(t.kp(),$async$DC)
case 4:if(t.c==null){w=1
break}t.n(new C.cZw(t))
case 1:return A.h(u,v)}})
return A.i($async$DC,v)},
Mj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaoL()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.cZc(r),s,null,!0,!0,x.y),$async$Mj)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bwV(s.c,s.d,r.a),$async$Mj)
case 4:t.n(new C.cZd(t))
w=5
return A.b(t.kp(),$async$Mj)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RQ(B.o.D(t.r+1,0,J.a9(t.d)))}case 1:return A.h(u,v)}})
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
return A.b(C.h3g(s,r.x,r.r),$async$xj)
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
r.H(l,new C.mM(""+(m+k),q,B.a.i(j.b),new A.O(Date.now(),0,!1)))}r=t.a
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
break}s=t.gDW(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.xt,new C.cZt(t),new C.cZu())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m0("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gT(o)
p.push(new F.m0(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fI1(o,new F.qH(s,r,"",p,new F.tR(q.d,null,null,null,null,"","","")),null),$async$Z4)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Z4,v)},
US(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$US=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(D.b00,null,new C.cZe(t),r,!0,!0,!0,D.eiy,!1,!1,x.e),$async$US)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cZf(t,s))
r=t.a
w=4
return A.b(C.a0m(r.c,r.d,s),$async$US)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A2(0,B.dU,B.nZ)
case 1:return A.h(u,v)}})
return A.i($async$US,v)},
bIJ(d){var w=d.bO(),v=B.a.aT(B.o.u(w.gcb()),2,"0"),u=B.a.aT(B.o.u(w.gcp()),2,"0")
return""+w.gcc()+"-"+v+"-"+u},
gDW(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bQB()
if(r.e)w=D.a7x
else if(J.ci(r.d)){w=r.y
v=r.gDW(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.exp,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a3(q,330,new A.C(W.adu,new C.Wn(w,v,0,q),q),q),B.bs,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.jv.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bs],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aJ(q,A.p(q,D.eiY,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.uH,B.n),q,q,q,q,B.Vt,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcuF(),q,q,q,q,q,q,!1,B.af))
w.push(B.T)
w.push(A.hg(D.bsW,D.f42,r.gaI9(),q))
B.d.v(u,w)}w=A.as(A.cf(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.em,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.a9(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.jv.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dJ:B.yJ
u=A.u(A.a([new A.C(D.bg0,w,q),A.D(A.Hd(v,new C.cZF(r),J.a9(r.d)+1,q,r.gc2u(),u,B.aY),1),r.bw0()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.ce(q,D.a9u,new A.am(B.V,q,B.aX,B.q,A.a([D.aET,A.br(!0,A.u(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bQB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cs(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.NO(B.dO,"AI",h.gbu_(),!0))
if(h.a.f)f.push(new C.NO(B.nq,"Cover",h.gbEh(),!1))
if(J.cs(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.NO(B.rW,"Print",h.gcbf(),!1))
if(h.a.f&&J.cs(h.d)&&h.r>=0){v=h.w
u=v?B.hg:B.iZ
t=v?"Save":"Edit"
f.push(new C.NO(u,t,v?h.gchc():new C.cZp(h),!1))}if(h.a.f)f.push(new C.NO(B.hH,"Add page",h.gaI9(),!1))
v=A.m(22)
u=A.H(E.iQ.j(0.85),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.w.j(0.5),B.cv,16),new A.aa(0,B.G,E.iQ.j(0.12),B.J,18)],x.V)
s=x.p
r=A.B(A.a([A.aJ(g,A.p(g,D.bsO,B.h,g,g,new A.o(B.w.j(0.3),g,A.H(E.iQ.j(0.6),B.r,1),g,g,g,B.a6),g,30,g,g,g,g,g,30),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.cZq(h),g,g,g,g,g,g,!1,B.af),A.D(new A.C(B.fi,A.eX(B.B,A.d(h.gDW(0),g,1,g,g,!1,g,D.ewX,g,g,g),B.h,B.e8),g),1),D.ena],s),B.m,g,B.e,B.j,0,g,g)
q=x.O
p=A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.a8(B.a1,B.a7,B.x,A.a([B.K,E.iQ.j(0.7),B.K],q),g,g),B.n),g,1,g,g,g,g,g,g)
o=A.a([],s)
for(n=f.length,m=0;m<f.length;f.length===n||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d4R
else{k=new A.b3(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],q)
i=new A.ax(E.iQ.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.jv,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c2(i,i,i,i),new A.bv(k,k,k,k),g,new A.a8(B.a1,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.jv.j(0.85)
o.push(new A.bF(1,B.bn,A.aJ(B.c5,A.u(A.a([k,B.by,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.af),g))}return A.p(g,A.u(A.a([r,new A.C(B.u8,p,g),A.B(o,B.m,g,B.e,B.j,0,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.h,g,g,new A.o(g,g,u,v,t,D.ajg,B.n),g,g,g,D.beJ,B.lo,g,g,g)},
yN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DC(),$async$yN)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a_T(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.cZ7(t,p),s,null,!0,!0,x.N),$async$yN)
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
return A.b(t.DZ("Swahili (Kiswahili)",!0),$async$yN)
case 18:w=16
break
case 17:w=19
return A.b(t.crt(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yN)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yN,v)},
WH(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.iQ.j(0.3),B.r,1),r=x.p
return new A.C(B.cH,A.aH(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uH,B.a6),w,42,w,w,w,w,w,42),B.ba,A.D(A.u(A.a([A.d(f,w,w,w,w,w,w,A4.a3W,w,w,w),A.d(g,w,w,w,w,w,w,E.a3N,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZr(d,h),w,w,w,w,w,w,w),w)},
Cq(){return this.bId()},
bId(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cq=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.cZi(r),a7,null,!0,!0,x.ei),$async$Cq)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.A(r.d,x.B)
p=g
f=r.y
o=new A.eK("Working on it\u2026",$.at())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.cZj(o),a7,null,!0,!0,x.H).f4(new C.cZk(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.ch(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xt[a1]
J.ch(j,i.a)}w=8
return A.b(C.aek(a0,a7,new C.cZl(o),d,l,e,j),$async$Cq)
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
J.aNq(l,0)
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
for(a4=0;a4<J.a9(p);++a4){if(m.b.am(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b6B(m.b.h(0,a4).b,a7,new A.O(Date.now(),0,!1))
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
a5=l.cvv(j,12,a7)
l=r.a
w=15
return A.b(C.a0m(l.c,l.d,a5),$async$Cq)
case 15:if(r.c!=null)r.n(new C.cZm(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A2(0,B.dU,B.nZ)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.F(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b_(a3?A.ckA("Undo",new C.cZn(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cq,v)},
DZ(d,e){return this.cru(d,e)},
crt(d){return this.DZ(d,!1)},
cru(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$DZ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.A(r.d,x.B)
d=e
a0=new A.eK("Starting\u2026",$.at())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.cZy(a0),k,null,!0,!0,x.H).f4(new C.cZz(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ch(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a05(m,new C.cZA(a0)),$async$DZ)
case 10:w=8
break
case 9:w=11
return A.b(C.byz(new C.cZB(a0),m,a2),$async$DZ)
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
J.aNq(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.F(x.q).f
k=q
o.P(A.b_(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.a9(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b6B(J.q(p,g).b,j.a,new A.O(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zG(k.c,k.d,o),$async$DZ)
case 12:w=13
return A.b(r.kp(),$async$DZ)
case 13:o=r.c
if(o==null){w=1
break}o=o.F(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(A.ckA("Undo",new C.cZC(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DZ,v)},
bw0(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cZ8(v):u
r=A.aF(u,u,u,u,A.V(D.boA,s?D.jv:B.be,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cs(v.d)&&!v.w&&v.r>=0)s=A.hg(A.V(B.uj,B.D7,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.D7,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbDR(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.jv.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.as(s,u,u,u),1)
w=t<J.a9(v.d)?new C.cZ9(v):u
return A.br(!0,new A.C(D.bfP,A.B(A.a([r,s,A.aF(u,u,u,u,A.V(B.ek,t<J.a9(v.d)?D.jv:B.be,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.X9.prototype={
S(){return new C.baG(new A.ao(B.aq,$.at()))}}
C.baG.prototype={
ga_b(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
gbH0(){var w,v=this.ga_b()
A:{if("cover"===v){w=D.cCP
break A}if("book"===v){w=D.cyZ
break A}w=D.cYV
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.iQ.j(0.5),n=x.p,m=A.B(A.a([D.d4S,B.av,D.bkZ,A.aF(q,q,q,q,B.l0,q,q,q,new C.d07(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jO(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d08(r),r.ga_b()==="page",q,q,q,q))
if(r.a.d)l.push(A.jO(q,q,q,D.f_a,q,new C.d09(r),r.ga_b()==="book",q,q,q,q))
l.push(A.jO(q,q,q,D.eOw,q,new C.d0a(r),r.ga_b()==="cover",q,q,q,q))
l=A.cb(B.bH,l,B.bw,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bl(q,new A.b1(4,A.m(16),B.W),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kc,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ae,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbH0(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mG(q,B.c.j(0.08),new A.w(s,q,B.H5,q,q,q,q,q,q,q,q,q),B.hj,new C.d0b(r,s),q,q,q,q))}return A.eA(q,E.zb,A.cf(A.u(A.a([m,B.T,D.f25,B.ar,l,B.aa,k,B.P,A.cb(B.bH,w,B.bw,6,6),B.ay,A.dj(D.bsT,D.f2R,new C.d0c(r,d),A.bk(B.b0,q,q,q,q,B.om,q,q,new A.b5(A.m(16),B.W),q,q,q)),B.au,D.eYE],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.fv,q,q,B.ah),q,q,q,D.ade,B.cZ,q,new A.b5(p,new A.ax(o,1.4,B.r,-1)),q)}}
C.X7.prototype={
S(){return new C.awH(A.a([],x.Y))},
gdQ(){return this.c}}
C.aca.prototype={}
C.awH.prototype={
Z(){this.a0()
this.kp()},
kp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.P4(p.c,p.d),$async$kp)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bx8(r.c,q),$async$kp)
case 6:j=e
i=J
w=7
return A.b(C.J1(t.a.c,q),$async$kp)
case 7:m.push(new l.aca(k,j,i.a9(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.cZW(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
b23(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Oe(d,e){return this.c42(0,e)},
c42(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).cr(A.eG(new C.cZV(u,e),!0,null,x.y)),$async$Oe)
case 2:t=g
w=3
return A.b(u.kp(),$async$Oe)
case 3:if(t===!0&&u.c!=null)u.c.F(x.q).f.P(D.aI_)
return A.h(null,v)}})
return A.i($async$Oe,v)},
E1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.F(x.q).f.P(D.aHW)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adG(s.c,s.d),$async$E1)
case 5:q=e
w=6
return A.b(t.kp(),$async$E1)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Oe(0,B.d.kU(t.d,new C.d__(q))),$async$E1)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.P0(p,s.f,r,n,o),$async$E1)
case 10:m=e
w=11
return A.b(t.kp(),$async$E1)
case 11:if(m&&t.c!=null)t.c.F(x.q).f.P(D.aI_)
case 1:return A.h(u,v)}})
return A.i($async$E1,v)},
NJ(d,e){return this.cf0(0,e)},
cf0(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.cZZ(t,e),s,null,!0,!0,x.y),$async$NJ)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0k(s.c,s.d,e.a),$async$NJ)
case 4:w=5
return A.b(t.kp(),$async$NJ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NJ,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bw3(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.iQ.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aJ(n,new A.fN(0.7142857142857143,A.p(n,A.u(A.a([D.d4T,B.aa,D.dLb,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.jv.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b4,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcuB(),n,n,n,n,n,n,!1,B.af))}w=A.m(22)
v=A.H(E.iQ.j(0.85),B.r,1.6)
s=A.aJ(n,A.p(n,D.bAn,B.h,n,n,new A.o(B.w.j(0.3),n,A.H(E.iQ.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_0(d),n,n,n,n,n,n,!1,B.af)
r=A.m(14)
q=B.w.j(0.3)
p=A.H(E.iQ.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.ba,D.blh,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.ewA,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h0,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.ajg,B.n),n,n,n,Ag.V0,D.bdY,n,n,n)
if(o.e)k=D.a7x
else k=k.length===0?D.aWk:A.cj(new C.d_1(k))
return A.ce(n,D.a9u,new A.am(B.V,n,B.aX,B.q,A.a([D.aET,A.br(!0,A.u(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bw3(d){var w,v,u=this,t=null,s=u.b23(d),r=d.c,q=x.p,p=A.a([A.bU(0,A.eX(B.B,new A.a3(300,420,new C.Wn(d.b,s,r,t),t),B.h,B.dn),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aJ(t,A.p(t,D.bzH,B.h,t,t,new A.o(B.w.j(0.55),t,A.H(B.be,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZT(u,d),t,t,t,t,t,t,!1,B.af),t,t,t,6,6,t))
w=A.d(s,t,1,B.Z,t,t,t,D.ewc,t,t,t)
v=r===1?"page":"pages"
return A.aJ(t,A.u(A.a([new A.fN(0.7142857142857143,new A.am(B.V,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.jv.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZU(u,d),t,t,t,t,t,t,!1,B.af)}}
C.NO.prototype={}
C.Wn.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.xt,new C.cyy(m),new C.cyz()),j=m.c,i=D.AP.h(0,j.e),h=A.aX(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m4:B.b4
v=new C.cyA(h)
i=A.a([new A.aa(0,B.G,B.w.j(0.6),D.dJe,28)],x.V)
u=x.p
t=A.a([A.bU(0,A.b2(l,l,l,new C.b7Z(j.x,h,l),B.as),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.a1,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b3(3,3)
t.push(new A.cE(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bv(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adv,8,0.85,2.2),v.$4(D.biD,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adv,8,0.85,2.4))
else if(r==="corners")t.push(A.bU(0,new A.C(D.biz,A.b2(l,l,l,new C.b7Q(h,l),B.as),l),0,0,0))
r=A.V(D.ars[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.Z,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ap2,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.aa,p,B.aa,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cz,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.Z,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bU(0,new A.C(D.bj2,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aDw(l),D.emm),l,l,l,46,0,l))
return A.p(l,A.bu(D.a6e,new A.am(B.V,l,B.a9,B.q,t,l),B.ap),B.h,l,l,new A.o(l,l,l,D.a6e,i,new A.a8(B.ax,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b7Z.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f5()
f.dZ(11)
switch(this.b){case"plain":return
case"linen":$.a1()
w=A.U()
w.r=B.w.j(0.07).gt(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.M()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.a1()
q=A.U()
q.r=B.c.j(0.05).gt(0)
q.c=1
for(p=0;p<u;p+=4){r=q.M()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ag()
l=f.ag()
k=f.ag()
$.a1()
j=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.r=t.j(0.25+f.ag()*0.5).gt(0)
r=j.M()
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
k=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.r=m.j((n&1)===0?0.09:0.03).gt(0)
r=k.M()
k=h.gbM().a.snapshot()
o.drawPath((h.e=new A.cG(k)).a,r)
r.delete()}break
default:$.a1()
w=A.U()
w.r=B.w.j(0.07).gt(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=w.M()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.a1()
g=A.U()
g.r=B.c.j(0.035).gt(0)
for(n=0;n<120;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=g.M()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ao(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b7Q.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a1(),k=A.U(),j=this.b
k.r=j.j(0.9).gt(0)
k.b=B.aj
k.c=2.4
k.d=B.bZ
for(w=e.a,v=e.b,v=[D.eff,new A.d7([w,0,-1,1]),new A.d7([0,v,1,-1]),new A.d7([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.b0(l,B.aw,null,null,s)
s.push(new A.bj(r+p*34,q))
s.push(new A.av(r,q))
s.push(new A.av(r,q+o*34))
m=k.M()
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cG(s)).a,m)
m.delete()
s=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
s.r=j.j(0.9).gt(0)
m=s.M()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ao(d){return!d.b.A(0,this.b)}}
C.tz.prototype={}
C.WG.prototype={
S(){return new C.b7X()}}
C.b7X.prototype={
gns(){var w=this.d
return w===$?this.d=this.a.c:w},
gDW(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ao(new A.bb(w.b,B.aZ,B.aL),$.at())}return v},
gax3(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ao(new A.bb(w.c,B.aZ,B.aL),$.at())}return v},
ganm(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ao(new A.bb(w.y,B.aZ,B.aL),$.at())}return v},
p(){var w=this,v=w.gDW(0),u=v.R$=$.at()
v.O$=0
v=w.gax3()
v.R$=u
v.O$=0
v=w.ganm()
v.R$=u
v.O$=0
w.a2()},
anX(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jO(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cS_(this,f,u),e===u,s,s,s,s))}return A.cb(B.bH,r,B.bw,6,8)},
ati(d){var w=null,v=B.c.j(0.07)
return A.bl(w,new A.b1(4,A.m(14),B.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l7,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gns(),a0=f.gDW(0),a1=a0.a.a,a2=f.gax3(),a3=a2.a.a,a4=f.ganm(),a5=d.b6z(a4.a.a,a3,a1)
a1=x.n
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a3(190,260,A.eX(B.B,new A.a3(270,370,new C.Wn(a5,d,f.a.e,e),e),B.h,B.dn),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.ati("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSo(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.ati("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSp(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
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
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c2(o,o,o,o),e,e,new A.a8(B.ax,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aJ(e,A.u(A.a([p,B.d5,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSq(f,t),e,e,e,e,e,e,!1,B.af))}v=A.cb(B.bH,v,B.bw,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.b3(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eN:B.K,2,B.r,-1)
q.push(A.aJ(e,A.p(e,A.V(D.ars[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c2(o,o,o,o),new A.bv(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSr(f,n),e,e,e,e,e,e,!1,B.af))}q=A.cb(B.bH,q,B.bw,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.ati("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ae,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSs(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.md,e,e,e)
m=A.a([],w)
for(l=D.AP.gdH(D.AP),l=l.gaf(l);l.C();){k=l.gT(l)
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
m.push(A.aJ(e,A.u(A.a([j,B.by,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSt(f,k),e,e,e,e,e,e,!1,B.af))}m=A.cb(B.bH,m,B.bw,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.md,e,e,e)
k=f.gns()
return new A.C(new A.M(0,0,0,a3.f.d),A.br(!0,new A.d2(new A.aW(0,1/0,0,a1.a.b*0.92),A.cL(A.a([D.eY7,B.aa,d,B.aN,a0,B.T,a2,B.ay,D.f2F,B.P,v,B.ay,D.eYg,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.m8(e,9,""+B.k.U(f.gns().f),36,18,new C.cSu(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.md,e,e,e),B.ar,f.anX(D.a_B,f.gns().r,new C.cSv(f),D.d11),B.aa,A.d("BORDER",e,e,e,e,e,e,H.md,e,e,e),B.ar,f.anX(D.a_6,f.gns().w,new C.cSw(f),D.d16),B.aa,A.d("COVER MATERIAL",e,e,e,e,e,e,H.md,e,e,e),B.ar,f.anX(D.a_1,f.gns().x,new C.cSy(f),D.d2u),B.ar,A.it(e,B.b0,e,B.ag,e,new C.cSz(f),e,e,e,D.eT0,f.gns().z),B.bs,A.bJ(D.eX3,new C.cSA(f,a6),A.bk(B.b0,e,e,e,e,B.om,e,e,new A.b5(A.m(16),B.W),e,e,e))],w),e,O.ad3,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDw.prototype={
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
u.sav(D.bFD.aC(0,new A.af(0,0,0+w,0+v)))
d.b4(t,u)},
ao(d){return!1}}
C.bd8.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a1()
w=A.U()
w.sav(D.bEN.aC(0,new A.af(0,0,a3,a4)))
a5.bp(new A.af(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f5()
u.dZ(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ag()*20
l=56+u.ag()*40
k=D.cCO[u.aA(9)]
j=u.aA(14)
J.bP(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.af(n,j,n+m,j+l)
h=A.c_(i,B.hi)
g=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a1,B.a7,B.x,A.a([f,k,e],t),a0,a0).aC(0,i))
d=g.M()
w.drawRRect(A.fM(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
e.r=E.iQ.j(0.55).gt(0)
d=e.M()
w.drawRect(A.cz(new A.af(h,j,g,j+2)),d)
d.delete()
j=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.r=E.iQ.j(0.4).gt(0)
d=j.M()
w.drawRect(A.cz(new A.af(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aA(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.sav(D.bEe.aC(0,new A.af(0,r,a3,q)))
d=p.M()
w.drawRect(A.cz(new A.af(0,r,a3,q)),d)
d.delete()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.w.j(0.5).gt(0)
p.z=B.jh
d=p.M()
w.drawRect(A.cz(new A.af(0,q,a3,q+14)),d)
d.delete()}w=A.U()
w.r=D.aZp.j(0.72).gt(0)
a5.bp(new A.af(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.U()
a4.sav(new A.bS(B.B,0.5,B.x,a0,0,A.a([D.b4p.j(0.22),B.K],t),a0,a0).aC(0,A.c1(new A.v(w,a2),a1)))
a5.aw(new A.v(w,a2),a1,a4)},
ao(d){return!1}}
C.b6c.prototype={
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.c,n=B.a.i(o.c),m=A.ad("[ \t]{2,}",!0,!1,!1,!1),l=A.aI(n,m," ")
n=x.p
m=A.a([],n)
for(w=3;w>=1;--w){v=-w
m.push(new A.cE(14,w*2,v*2.2,v*2,p,p,new A.ky(new A.o(A.aq(D.jv,D.b8_,w/4),p,new A.c2(B.W,new A.ax(B.w.j(0.12),1,B.r,-1),B.W,B.W),B.I7,p,p,B.n),B.b7,p,p),p))}v=x.V
u=A.a([new A.aa(0,B.G,B.w.j(0.35),B.aAI,8)],v)
t=A.a([],n)
for(w=0;w<5;++w){s=new A.b3(2,2)
t.push(A.p(p,p,B.h,p,p,new A.o(E.iQ.j(0.6),p,p,new A.bv(s,s,s,s),p,p,B.n),p,14,p,p,p,p,p,3))}u=A.p(p,A.u(t,B.m,p,B.qv,B.j,0,B.p),B.h,p,p,new A.o(p,p,p,D.aP0,u,D.bFB,B.n),p,p,p,p,p,p,p,14)
v=A.a([new A.aa(0,B.G,B.w.j(0.4),B.dl,18)],v)
t=A.an(p,A.b2(p,p,p,new C.aDw(p),D.emh),p,p,p,26,-2,p)
s=o.d
r=q.x
if(q.f)o=A.u(A.a([A.aK(p,B.U,!1,p,!0,B.q,p,A.aL(),q.r,p,p,p,p,p,2,A.bl(p,B.ep,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Page title",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!1,p,B.ae,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.eJk,!0,B.a5,p,B.am,p,p,p,p),A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.45),p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.T,A.D(A.aK(p,B.U,!1,p,!0,B.q,p,A.aL(),q.w,p,p,p,p,p,2,A.bl(p,B.ep,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Write your family story here\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.eAR,!0,B.a5,B.yc,B.am,p,p,p,p),1)],n),B.ad,p,B.e,B.j,0,B.p)
else{o=A.a([A.d(o.b,p,p,p,p,p,p,D.eJd,p,p,p),B.au,A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,11,B.cz,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.P,A.B(A.a([A.D(A.p(p,p,B.h,D.IS.j(0.35),p,p,p,1,p,p,p,p,p,p),1),new A.C(B.fi,A.d("\u2766",p,p,p,p,p,p,A.l(p,p,D.IS.j(0.7),p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.D(A.p(p,p,B.h,D.IS.j(0.35),p,p,p,1,p,p,p,p,p,p),1)],n),B.m,p,B.e,B.j,0,p,p),B.ay],n)
if(l.length===0)o.push(A.d("This page is blank. Tap the pencil to write.",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.4),p,p,p,p,p,p,p,p,16,p,p,p,p,1.7,!0,p,p,p,p,p,p,p,p),p,p,p))
else o.push(A.VE(A.dr(A.a([A.dr(p,p,p,p,p,p,p,p,p,D.eDM,B.a.al(l,0,1)),A.dr(p,p,p,p,p,p,p,p,p,p,B.a.aU(l,1))],x.R),p,p,p,p,p,p,p,p,p,p),p,p,A.l(p,p,G.iR.j(0.93),p,p,p,p,p,p,p,p,16.5,p,p,p,p,1.72,!0,p,p,p,p,p,p,p,p),p))
o=A.cf(A.u(o,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,p,p,p,B.ah)}m.push(A.B(A.a([u,A.D(A.p(p,A.bu(B.I7,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.C(D.bi6,A.u(A.a([A.D(o,1),new A.C(B.iX,A.d("\u2014 "+q.d+" \u2014",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,1,p,p,p,p,p,p),B.L,p,p),p)],n),B.ad,p,B.e,B.j,0,B.p),p),A.an(0,A.bQ(p,new A.o(p,p,p,p,p,new A.a8(B.a1,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),p,p),B.n),B.b7),p,p,0,p,0,22)],n),p),B.ap),B.h,p,p,new A.o(p,p,p,B.I7,v,D.bG4,B.n),p,p,p,p,p,p,p,p),1)],n),B.ad,p,B.e,B.j,0,p,p))
return new A.am(B.V,p,B.a9,B.q,m,p)}}
C.amG.prototype={
S(){return new C.aA9(A.a([],x._))},
bm(){return this.r.$0()},
p_(){return this.w.$0()},
gdQ(){return this.c}}
C.aA9.prototype={
Z(){var w,v
this.a0()
this.v_()
w=this.a
v=w.c
if(v.length!==0)C.a4S(v,w.e,w.d.w)},
uP(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fI4(r,t.e,!1,s.w,new C.dKq(u),null,s),$async$uP)
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
return A.b(C.fI4(r,t.e,!0,s.w,new C.dKp(u),null,s),$async$Yh)
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
if(n)q.n(new C.dKs(q,p))
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
break}q.n(new C.dKt(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dKu(q))
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
o.F(s).f.P(D.epP)
w=3
return A.b(C.EX(t.a.c),$async$MN)
case 3:r=e
w=4
return A.b(C.foz(t.a.c,r),$async$MN)
case 4:q=e
w=5
return A.b(C.EX(t.a.c),$async$MN)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dKo(t,p))
o=t.c.F(s).f
s=A.d(q?"Family trees synced \u2014 "+J.a9(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(null,null,null,q?B.dr:B.cL,null,B.q,null,s,null,B.lR,null,null,null,null,null,null,null,null,null,null))
t.a.p_()
case 1:return A.h(u,v)}})
return A.i($async$MN,v)},
Gx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hNG(l),$async$Gx)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hil(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWh(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Gx)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h_E(r)
o=Date.now()
n=t.a.c
m=new C.kl(l,r.toUpperCase(),p,!0,B.U,D.AE,new A.O(o,0,!1),0,n,D.rH)
w=5
return A.b(C.a0r(n,m),$async$Gx)
case 5:w=6
return A.b(t.v_(),$async$Gx)
case 6:t.a.bm()
t.a.p_()
if(t.c==null){w=1
break}t.Da(m)
case 1:return A.h(u,v)}})
return A.i($async$Gx,v)},
Da(d){return this.c6_(d)},
c6_(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Da=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zv(u.a.c),$async$Da)
case 2:n=l.qD(k.dF(f,new C.dKr(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hl(m,new C.amA(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Da)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0r(u.a.c,o),$async$Da)
case 6:case 5:w=7
return A.b(u.v_(),$async$Da)
case 7:u.a.p_()
return A.h(null,v)}})
return A.i($async$Da,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=new C.t5(p)
if(r.e)return A.as(A.mi(q,p?B.bm:B.bv,q,q,q,q,q,q,q,q),q,q,q)
if(J.ci(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.X,!0,q,A.aH(!1,q,!0,A.p(q,D.btY,B.h,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cD,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc55(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.E3(A.p(q,A.u(A.a([u,B.aN,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bJ(D.f3O,r.gaM8(),A.bk(B.bR,q,q,q,q,q,Af.Vw,q,new A.b5(A.m(12),B.W),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bi3,q,q,1/0),15,B.ag,1.05,D.a4Z,q)}w=J.a9(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.xd,B.aS,q,q,q,q),q,q,q,new C.dKw(r),q,q,q,q,"Sync family trees with database",q))
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.x5,B.aS,q,q,q,q),q,q,q,r.gacx(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dj(E.ais,D.eMv,r.gaM8(),A.bk(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.a9(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.aa)
u.push(new C.E3(r.cry(J.q(r.d,s),o),14,B.ag,1,D.a4Z,q))
B.d.v(w,u)}return A.u(A.a([p,B.ay,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cry(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dT:B.cg).j(0.55),B.r,1),r=A.a([new A.aa(0,B.G,B.w.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.bt1,B.h,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galj(),m=d.d?"":" \xb7 Public",l=d.y===D.jY?" \xb7 View only":"",k=x.p
l=A.D(A.u(A.a([o,B.by,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.X,!0,w,A.aH(!1,q,!0,new A.C(B.bA,A.B(A.a([p,B.ba,l,A.V(B.Kr,v?B.bm:B.bv,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dKv(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amA.prototype={
S(){return new C.aA6(A.a([],x._),A.aZ(x.N),A.b3T())},
bm(){return this.r.$0()},
gdQ(){return this.c}}
C.aA6.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9D()
w=u.a
v=w.c
if(v.length!==0)C.a4S(v,w.e,w.d.w)},
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
return A.b(A.cg(null,null,!0,null,new C.dJR(r),s,null,!0,!0,x.y),$async$a06)
case 3:if(e!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dJS(t,r))
w=4
return A.b(t.uR(),$async$a06)
case 4:t.a.bm()
t.wN(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a06,v)},
chR(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.x1$.push(new C.dJM(w,f,d,e))},
aOi(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.de()
u.dY(w,v,0,1)
u.je(q,q,1,1)
this.w.st(0,u)},
b4h(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ev(new Float64Array(16))
q.dR(r)
w=q.Br()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.de()
t.dY(r,u,0,1)
t.je(v,v,1,1)
t.dY(-r,-u,0,1)
t.ie(0,q)
s.st(0,t)},
a9D(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zv(u.a.c),$async$a9D)
case 2:t=s.qD(r.dF(e,new C.dJk(u)))
if(t!=null&&u.c!=null)u.n(new C.dJl(u,t))
return A.h(null,v)}})
return A.i($async$a9D,v)},
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
return A.b(C.fI4(o,t,!1,r,new C.dJz(u),q.a,s),$async$uP)
case 2:n=A
m=J
w=3
return A.b(C.EX(u.a.c),$async$uP)
case 3:p=n.qD(m.dF(e,new C.dJA(u)))
if(p!=null&&u.c!=null)u.n(new C.dJB(u,p))
return A.h(null,v)}})
return A.i($async$uP,v)},
HX(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0r(t,s),$async$uR)
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
return A.b(C.hOP(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZK)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HX()
t.n(new C.dJL(t,r))
w=4
return A.b(t.uR(),$async$ZK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZK,v)},
Yu(){return this.c61()},
c61(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wN("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.L(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dJJ(r,new C.t5(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Yu)
case 3:if(e!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dJK(r,t))
w=4
return A.b(t.uR(),$async$Yu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yu,v)},
TK(d){return this.btb(d)},
btb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ti(r,t.a.c)){t.wN("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dJ8(t,d),r,null,!0,!0,x.P),$async$TK)
case 3:s=f
if(s==null){w=1
break}t.HX()
t.n(new C.dJ9(t,s))
w=4
return A.b(t.uR(),$async$TK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TK,v)},
a0s(d){return this.ctF(d)},
ctF(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.L(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dJU(u,d,new C.t5(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0s)
case 2:return A.h(null,v)}})
return A.i($async$a0s,v)},
c2p(d){var w=this,v=w.d
v===$&&A.c()
if(C.ti(v,w.a.c))w.Mt(d)
else w.a0s(d)},
af_(d,e){return this.clE(d,e)},
clE(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$af_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.L(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.dJO(new C.t5(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$af_)
case 3:case 1:return A.h(u,v)}})
return A.i($async$af_,v)},
GC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.jY?3:5
break
case 3:w=6
return A.b(C.fwh(t.a.c),$async$GC)
case 6:s=e
o=t.a
r=C.fPy(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.af_(!s,!r),$async$GC)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bx1(o,t.a.c)){t.wN("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kN(o,"Cancel","Remove",q.y===D.jY?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GC)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLo(t.a.c,t.d.a),$async$GC)
case 11:t.a.bm()
o=t.c
if(o==null){w=1
break}A.iC(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GC,v)},
a7d(d){return this.bDZ(d)},
bDZ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ti(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.be(s,new C.dJa(p))){o=A.T(s)
p.a=A.qD(new A.cQ(new A.a5(s,new C.dJb(d),o.k("a5<1>")),new C.dJc(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.HX()
t.n(new C.dJd(t,s,d,q))
w=3
return A.b(t.uR(),$async$a7d)
case 3:t.wN(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7d,v)},
Mt(d){return this.bFZ(d)},
bFZ(d){var w=0,v=A.j(x.H),u,t=this,s,r
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
return A.b(A.cg(null,null,!0,null,new C.dJh(t,d),r,null,!0,!0,x.P),$async$Mt)
case 6:s=f
if(s==null){w=1
break}t.HX()
t.n(new C.dJi(t,s))
w=7
return A.b(t.uR(),$async$Mt)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mt,v)},
crS(){var w=this,v=w.d
v===$&&A.c()
if(!C.ti(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dJT(w))
w.uR()},
Wt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bx1(n,t.a.c)){t.wN("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.L(n)
s=$.at()
r=new A.ao(B.aq,s)
q=t.d.e
p=A.bi(new A.J(q,t.gc0V(),A.T(q).k("J<1,n>")).bZ(0,new C.dJu()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dJv(t,new C.t5(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Wt)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dJw(t,p))
w=4
return A.b(t.uR(),$async$Wt)
case 4:t.wN("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
c0W(d){return B.a.i(d.toLowerCase())},
c4R(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ti(v,w)
t=r.d
s=C.hEo(t)
C.hNK(q,t.b,u,C.hEn(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t5(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a5(l,new C.dK0(),A.T(l).k("a5<1>")).gG(0)
l=n?B.bV:B.iP
v=A.V(B.Wy,n?B.bm:B.bv,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zA,A.aH(!1,o,!0,new A.C(B.hs,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dK1(p,d),o,o,o,o,o,o,o),o),new A.C(B.my,p.bQC(m),o)],u)
if(p.d.y===D.jY){t=B.qx.j(0.15)
s=A.m(12)
r=A.H(B.qx.j(0.45),B.r,1)
q=C.EV(p.d,p.a.c)
v.push(new A.C(B.wq,A.p(o,A.B(A.a([D.by7,B.av,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a0,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iC,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.ti(p.d,p.a.c)&&p.e.length!==0)u.push(new C.I7("Undo",B.uA,p.gcrR(),m,o,o))
u.push(new C.I7("Family Book",D.bnH,p.gc4Q(),m,B.re,o))
if(C.ti(p.d,p.a.c))u.push(new C.I7("Display settings",Ai.Ez,p.gc60(),m,B.aW,o))
u.push(new C.I7("Sync",B.x5,p.gacx(),m,o,o))
t=p.d
if(t.y===D.jY||C.bx1(t,p.a.c)){t=p.d.y===D.jY?"Remove shared tree":"Delete tree"
u.push(new C.I7(t,B.e4,p.gbE8(),m,B.fK,o))}if(C.ti(p.d,p.a.c))u.push(new C.I7("Add member",B.uv,new C.dK2(p),m,B.bR,o))
v.push(new A.C(O.acH,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galj()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cj(new C.dK3(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?K.WC:U.Ks,o,o,o,o,o)
v.push(A.as(A.hg(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dK4(p),o),o,o,o))}return A.ce(o,l,A.br(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bQC(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.aa(0,B.G,B.ff.j(0.35),B.dl,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.wZ,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.X,!0,m,A.aH(!1,m,!0,A.p(m,D.bB6,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cD,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacx(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.Z,m,m,m,D.ezj,m,m,m)
r=r.galj()
p=n.d.galj()===1?"member":"members"
o=x.p
p=A.a([s,B.ba,A.D(A.u(A.a([q,B.by,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a0,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.ti(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.byj,m,m,m,n.gcfl(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j_:B.lZ
r=r?"Private":"Public"
r=A.D(n.aru(q,"Privacy",r,n.a.d.w?n.gcqY():m),1)
q=A.D(n.aru(B.x6,"Tree code",n.d.c,new C.dJj(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.aa,A.B(A.a([r,B.ab,q,B.ab,A.D(n.aru(D.bps,"Collaborators",p,n.gbUX()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.jY){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.X,!0,A.m(999),A.aH(!1,A.m(999),!0,new A.C(B.fF,A.B(A.a([A.V(B.o9,B.c,m,m,m,14),B.ez,A.d("View only",m,m,m,m,m,m,B.aJ9,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bu(u,new A.am(B.V,m,B.a9,B.q,A.a([t,new A.C(B.Dx,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.h,m,m,new A.o(m,m,m,w,v,D.bEh,B.n),m,m,m,m,m,m,m,1/0)},
aru(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.X,!0,A.m(14),A.aH(!1,A.m(14),!0,new A.C(D.bjM,A.u(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.Z,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.v4,A.d(f,w,1,B.Z,w,w,w,L.aIW,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)}}
C.bao.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gah(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.bar(s,t),new A.ap(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d_5(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d_6(this),A.T(r).k("J<1,r>")))
return new A.C(B.rE,new A.a3(w,v,new A.am(B.V,t,B.a9,B.h,u,t),t),t)}}
C.Ii.prototype={}
C.Ef.prototype={}
C.baq.prototype={
gbco(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFB.prototype={}
C.bar.prototype={
bFH(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
bFF(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d_q())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.be(a0,new C.d_r(f))
t=new A.J(a0,new C.d_s(f),A.T(a0).k("J<1,Q>")).bZ(0,new C.d_t()).cI(0,1/0,B.vH)
w=f.a
d.bU(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.M()
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
k=e.M()
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cG(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.a1()
w=A.U()
w.r=B.bR.j(0.75).gt(0)
w.c=2.2
w.b=B.aj
w.d=B.bZ
w.e=B.fk
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bFF(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.M()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bFH(d,w,q.a,q.b)}},
ao(d){return d.b!==this.b}}
C.be5.prototype={
gbZN(){var w=this.c
if(B.a.i(w.y).length!==0)return D.cYU
switch(w.c.a){case 0:return D.cvd
case 1:return D.cFs
case 2:return D.cTY}},
gbZQ(){var w=this.c,v=C.h_4(w.w),u=C.h_4(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=t.gbZN(),p=t.c,o=I.bxT(p.f),n=t.gbZQ(),m=x.V,l=A.a([new A.aa(0,B.G,B.d.gai(q).j(0.35),B.cG,10)],m),k=r?B.aG:B.c,j=A.H(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.rx(B.B,s,B.ci,B.bM,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.B,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a8(B.a1,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hN(w,B.ap),B.h,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.DM,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eIS,s,s,s),B.h,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.bjQ,s,s,s),s,s,s,-6,-4,s))}k=r?B.d3:B.c
j=A.m(8)
w=A.H(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.G,B.w.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.d3,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bv,s,s,s,s,s,s,s,s,7.5,s,s,B.a0,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aJ(s,new A.a3(84,112,A.u(A.a([new A.am(B.V,s,B.a9,B.h,l,s),B.au,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aQP,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bk_,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.af)}}
C.b9x.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.a1()
w=A.U()
v=this.b
u=v?B.c:D.b0O
w.r=u.j(v?0.05:0.09).gt(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.M()
t.drawCircle(r,s,1,q)
q.delete()}},
ao(d){return d.b!==this.b}}
C.bru.prototype={
B(d){var w=this,v=null,u=new C.eUU(w),t=w.c,s=t?B.d3:B.c,r=A.m(12),q=u.$3(B.hH,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Es,"Zoom out",w.e)
return A.aD(!1,B.X,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),u.$3(B.ag0,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dt,v,v,v,B.ac)}}
C.bhm.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.H(B.bR,B.r,2),s=w.e,r=x.p
t=A.aJ(v,A.p(v,A.u(A.a([A.V(s?K.WC:U.Ks,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eFi,v,v,v)],r),B.m,v,B.b4,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.af)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eDl,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.ewz(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a3(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XJ.prototype={
S(){return new C.ayy()},
bm(){return this.Q.$0()},
gdQ(){return this.w}}
C.ayy.prototype={
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
r.y=t==null?D.wC:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hFT(w.r,w.f)
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
NK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fPy(p.y,p.w)
w=3
return A.b(A.kZ(t.a.w,B.G9),$async$NK)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWh(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NK)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.him(p.y,p.w)
t.a.bm()
case 5:w=7
return A.b(Ah.F5(78,800),$async$NK)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.deG(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NK,v)},
bZP(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hP(B.o.u(1000*Date.now()),w,D.wC,null,null,null,"","","","","",1,!1,0)
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
s=v.azQ(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).K(s)},
a6Q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a6Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.deF(r),s,null,!0,!0,x.y),$async$a6Q)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).K(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a6Q,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===B.H,i=new C.t5(j),h=l.a.e,g=A.T(h).k("a5<1>"),f=A.A(new A.a5(h,new C.deP(l),g),g.k("G.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bio,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hJ(A.aH(!1,k,!0,new A.C(B.lU,A.V(B.e4,B.nW,k,k,k,17),k),B.cD,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbAQ(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.j8:B.iz
t=I.bxT(l.as)
if(l.as==null)s=A.V(B.o2,j?B.bm:B.bv,k,k,k,40)
else s=k
s=A.as(A.aJ(k,new A.am(B.V,k,B.a9,B.q,A.a([A.hh(u,t,s,k,42),A.an(0,A.hh(B.bR,k,D.bs4,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gbZM(),k,k,k,k,k,k,!1,B.af),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayA(t,"Full name",B.lV,1,1,i,B.lA)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.T,new C.be3(i,u,new C.deQ(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bc4],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.deR(),A.T(o).k("J<1,ep<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bc6],q)
B.d.v(q,new A.J(f,new C.deT(),A.T(f).k("J<1,ep<n?>>")))
o=A.u(A.a([t,B.ar,new C.aaD(i,r,"Who is their parent?",p,new C.deU(l),k,o),B.ay,n,B.ar,new C.aaD(i,m,"Who is their spouse / partner?",q,new C.deV(l),k,o)],v),B.ad,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayA(q,"Birth date",D.af8,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayA(m,"Birth place",B.WR,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayA(n,"Date of death (if deceased)",D.ahi,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayA(p,"Occupation",B.XY,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.B,k,B.a9,B.q,w,k),B.ay,s,B.bs,new C.aaE(i,"Identity",u,k),B.aa,new C.aaE(i,"Family links",o,k),B.aa,new C.aaE(i,"Life details",A.u(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ayA(r,"Notes",B.kw,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.aa,new C.ayz(i,"Child order",l.c6b(l.at),new C.deW(l),new C.deX(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fFy(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.deY(l):k
B.d.v(r,A.a([B.T,new C.ayz(i,"Visible in tree",u,w,new C.deZ(l),k)],v))}r.push(B.T)
w=j?B.j8:B.iz
u=A.m(14)
t=A.H(j?B.dT:B.cg,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.it(k,B.bR,k,B.ag,k,new C.df_(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.acj,k,k,k))
r.push(B.bs)
w=j?B.aO:B.aG
j=j?B.dT:B.cg
r.push(A.B(A.a([A.D(A.dU(B.mW,new C.deS(d),A.d9(k,k,k,k,k,k,k,k,k,w,k,k,B.ca,k,new A.b5(A.m(14),B.W),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.ba,A.D(A.bJ(D.ej5,l.gbZO(),A.bk(B.aS,k,k,0,B.c,k,B.ca,k,new A.b5(A.m(14),B.W),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.eo(B.fS,k,B.ag,h,new A.a3(420,k,A.cf(A.u(r,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),k),D.ada,k,B.acz,new A.b5(g,B.W),k,k)},
c6b(d){var w=B.o.J(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.J(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaE.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j8:B.iz,s=A.m(16)
return A.u(A.a([new A.C(D.ady,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dT:B.cg,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.be4.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dT:B.cg).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a0,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bl(u,B.ep,u,B.ua,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bm:B.bv,u,u,u,u,u,u,u,u,u,u,u,B.cp,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ae,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaD.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dT:B.cg).j(0.85),B.r,1),q=A.V(B.qg,u?B.bm:B.bv,v,v,v,v),p=A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a0,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Ci(A.a25(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,v,v,v,B.cp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lT,v,v,v)}}
C.be3.prototype={
B(d){var w=new C.df0(this)
return A.B(A.a([w.$3(D.Wk,"Male",B.Lb),B.ab,w.$3(D.aeo,"Female",B.KX),B.ab,w.$3(D.wC,"Other",B.mD)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayz.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.j8:B.iz,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aEE(u,B.Es,w.f,v),B.bp,new C.aEE(u,B.hH,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aEE.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bm:B.bv).j(0.4)
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,new A.a3(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ac)}}
C.aaF.prototype={
bJh(d){switch(d.a){case 0:return B.bR
case 1:return B.bz
case 2:return B.cS}},
bJi(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aSo(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
z7(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.H((w?B.dT:B.cg).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bR,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.u(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.zy,p,p,1/0)},
ab5(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j8:B.iz,s=A.m(16),r=A.H(v?B.dT:B.cg,B.r,1)
return A.u(A.a([new A.C(D.ady,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h3G(r,q),o=q.c,n=t.bJh(o),m=I.bxT(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.jY?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bm:B.bv,s,s,s,s,s,s,s,s,12,s,s,B.a0,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.aa(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.hh(u,m,m==null?A.V(B.o2,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ef,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bJi(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mx,s,s,s),s,s,s)
u=x.p
i=A.a([t.z7("Full name",i,B.lV)],u)
if(p>0)i.push(t.z7("Child order","#"+p,B.L3))
r=A.a([h,B.au,r,B.aN,l,B.T,v,B.bs,t.ab5("Identity",i),B.aa,t.ab5("Life details",A.a([t.z7("Birth date",q.w,D.af8),t.z7("Birth place",q.x,B.WR),t.z7("Date of death",q.y,D.ahi),t.z7("Occupation",q.z,B.XY)],u)),B.aa,t.ab5("Family links",A.a([t.z7("1. Parent",t.aSo(q.d),B.DZ),t.z7("2. Spouse",t.aSo(q.e),B.KW)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.aa,t.ab5("Notes",A.a([t.z7("Notes",q,B.kw)],u))],u))
r.push(B.bs)
r.push(A.bJ(B.Hi,new C.dfa(d),A.bk(B.aS,s,s,s,s,s,B.ca,s,new A.b5(A.m(14),B.W),s,s,s)))
return A.eA(s,k,new A.d2(B.ld,A.cf(A.u(r,B.ad,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zG,s,s,B.ah),s),s,s,s,B.DB,B.cZ,s,new A.b5(j,B.W),s)}}
C.I7.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bm:B.bv
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.wv,A.hJ(A.aD(!1,B.X,!0,A.m(8),A.aH(!1,A.m(8),!0,new A.a3(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.amD.prototype={
eD(){var w,v,u=this,t=x.N,s=A.R(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().aa())
w=u.c
v=A.T(w).k("J<1,a0<n,@>>")
w=A.A(new A.J(w,new C.c2K(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iC(w,new C.c2L(),t,x.U))
return s}}
C.amE.prototype={
S(){return new C.aA8(A.a([],x.bF))},
gd6(){return this.c}}
C.aA8.prototype={
Z(){this.a0()
this.I3()},
I3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c2O(t.a.c),$async$I3)
case 3:r=e
w=4
return A.b(C.zv(t.a.c),$async$I3)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rj(q,new C.dKd(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dKe(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I3,v)},
xi(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IM(d,e){return this.cub(d,e)},
cub(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dKi(q,e))
t=3
w=6
return A.b(d.$0(),$async$IM)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dKj(q))
$.eH.lU()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IM,v)},
Vk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oB(r,s.c,s.e),$async$Vk)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKa(t),"Preparing download\u2026"),$async$Vk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vk,v)},
Vo(d){return this.bHn(d)},
bHn(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oB(r,s.c,s.e),$async$Vo)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKb(t,d),"Preparing file\u2026"),$async$Vo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vo,v)},
acU(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$acU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wf.c2().Ks(B.NY,B.rI,!0),$async$acU)
case 7:r=e
o=r
q=o==null?null:J.fg(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aE.gah(o)}else o=!1
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
$.al.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.F4()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acU,v)},
VZ(d){return this.bRt(d)},
bRt(d){var w=0,v=A.j(x.H),u=this
var $async$VZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IM(new C.dKc(u,d),"Restoring family trees\u2026"),$async$VZ)
case 2:return A.h(null,v)}})
return A.i($async$VZ,v)},
VY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.acU(),$async$VY)
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
return A.b(t.IM(new C.dKh(t),"Creating QR code\u2026"),$async$a_z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_z,v)},
a_a(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BB()){t.xi("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).cr(A.eG(new C.dKf(),!0,null,x.N)),$async$a_a)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.VZ(r),$async$a_a)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_a,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=o?B.z1:B.iP,m=o?D.aaX:B.aO,l=o?B.aI:B.cg,k=o?B.aO:B.aG,j=new C.d_u(n,m,l,k,o?B.bP:B.bv)
l=A.aF(p,p,p,p,A.V(B.es,k,p,p,p,20),p,p,p,new C.dKl(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.ez(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d_2(!0,B.j1,B.b5,B.b5,q.r?p:q.gcls(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gchM()
t.push(A.D(C.d_2(!s,B.iF,B.b0,B.bE,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d_2(!1,B.hh,B.aS,B.bR,q.r?p:q.gbHg(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d_2(!1,M.x8,B.b_,B.aM,q.r?p:q.gbRq(),j,s,"Upload backup file"),1))
l=A.a([new C.bap(v,l,p),B.k9,new C.a9W(j,"QR restore",p),B.T,t,B.d1,new C.a9W(j,"Backup files",p),B.T,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.a9(q.d)>1&&q.a.f==null){v=A.a([B.k9,new C.a9W(j,"One tree",p),B.T],u)
B.d.v(v,J.b4(q.d,new C.dKm(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cL(l,p,B.Vs,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.G,B.w.j(o?0.3:0.1),B.dl,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.br(!0,A.p(p,A.B(A.a([K.aHE,B.ba,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zF,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.ce(w,n,new A.am(B.V,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d_u.prototype={}
C.bap.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.G,B.aS.j(0.32),B.kG,28)],x.V)
t=A.an(p,A.V(B.rZ,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bAF,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nC,A.D(A.u(A.a([D.eNo,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bHa,B.n),p,p,p,p,p,p,p,p)}}
C.a9W.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.ban.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b5.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.G,B.b5.j(0.1),B.cG,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.X,!0,q,A.aH(!1,o,!0,A.eq(A.d4(new A.C(E.V5,A.u(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qd,q,q,q),B.aa,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.by,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cp,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)}}
C.bas.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.eq(new A.C(B.eE,A.B(A.a([A.p(v,D.bzS,B.h,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qd,v,v,v),B.ba,A.D(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hh,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Y3.prototype={
S(){return new C.aA7()},
gd6(){return this.c}}
C.aA7.prototype={
Z(){this.a0()
this.a6p()},
a6p(){var w=0,v=A.j(x.H),u=this,t
var $async$a6p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aYV(u.a.c,B.Be),$async$a6p)
case 2:t=e
if(u.c!=null)u.n(new C.dK5(u,t))
return A.h(null,v)}})
return A.i($async$a6p,v)},
aeh(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aeh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dK6(q))
t=4
p=A.fR9(q.a.d,B.Be)
if(p==null){n=A.b9("Could not read this QR code.")
throw A.P(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aoO(n.e,m,l,B.Be,p,n.f),$async$aeh)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dK7(q))
q.c.F(x.q).f.P(D.eqY)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a4(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(B.a.e1(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dK8(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeh,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=p?B.iT:B.oO,n=p?B.hm:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.ez(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f0O,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pj(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.u(A.a([B.P,u,B.bs,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b4,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ak:B.bB,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gchu()
if(u)u=B.GU
else u=A.V(r.e===!0?B.hg:B.af7,q,q,q,q,q)
w=A.a([w,B.aa,v,B.aa,new A.a3(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.d9(q,q,q,q,q,q,q,q,q,B.aS,q,B.fV,q,q,q,new A.ax(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.iX,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a3(1/0,q,A.bJ(B.yj,new C.dK9(d),A.bk(B.aS,q,q,q,q,B.fV,q,q,q,q,q,q)),q))
return A.ce(m,o,new A.C(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Y4.prototype={
S(){return new C.bfu(A.y7(B.wb,B.n2,B.t2))}}
C.bfu.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.ce(A.ez(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eUA,w,w,w,1,w,!0),B.w,A.y6(this.d,B.bM,new C.dKn(this,d)),w,!1,!1,w,w)}}
C.aUQ.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Nv,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lh.prototype={}
C.a3W.prototype={
S(){return new C.bfd(null,null)}}
C.bfd.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bh(v,B.rx,v,1,v,w)
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
this.boL()},
B(d){var w,v,u=this,t=B.d.dM(D.a_w,new C.dwF(u),new C.dwG())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cnh(A.c4(new A.h3(A.a([w,v],x.dS)),new C.dwH(u,t),null),!0)}}
C.bfc.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWh(d,e)
break
case"house":p.lv(d,e,D.cJH)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.a1()
t=A.U()
t.r=B.c.j(0.18+v*0.12).gt(0)
d.aw(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lA(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zQ(d,e,12)
p.wV(d,e,B.kO,5,14)
break
case"grocery":p.c6T(d,e)
break
case"calculator":p.c6A(d,e)
break
case"lumber":p.c70(d,e)
break
case"kitchen":p.c6W(d,e)
break
case"landscape":p.lv(d,e,D.cK8)
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
w.r=B.fp.j(0.85).gt(0)
d.b4(s,w)
p.zQ(d,e,8)
p.wV(d,e,B.iB,4,18)
break
case"plumbing":p.c79(d,e)
break
case"electrical":p.lv(d,e,D.cTj)
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
case"store":p.c7i(d,e)
break
case"paint_remodel":p.c74(d,e)
break
case"roofing":p.c7b(d,e)
break
case"warehouse":p.c7p(d,e)
break
case"vehicles":p.c7n(d,e)
break
case"farm":p.c6N(d,e)
break
case"restaurant":p.c7a(d,e)
break
case"tools":p.c7l(d,e)
break
case"wallet":p.c7o(d,e)
break
case"concrete":p.c6G(d,e)
break
case"blueprint":p.c6y(d,e)
break
default:p.aWh(d,e)}},
lv(d,e,f){var w,v=new A.af(0,0,0+e.a,0+e.b)
$.a1()
w=A.U()
w.sav(new A.a8(B.ax,B.aD,B.x,f,null,null).aC(0,v))
d.bp(v,w)},
lA(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gef()/2-h
$.a1()
w=A.U()
w.b=B.aj
w.c=2.4
w.r=f.gt(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.c1(q,p)
r=w.M()
v.drawArc.apply(v,[A.cz(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wV(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gt(0)
p=q.M()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zQ(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.J(s*0.17,0.9)
p=B.k.J(s*0.23,0.85)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.c.j(0.2+r*0.6).gt(0)
n=o.M()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWh(d,e){var w,v=this
v.lv(d,e,D.cSf)
w=v.c
v.lA(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lA(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bFB(d,e,B.hD,w)
v.wV(d,e,B.c.j(0.7),6,8)},
bFB(d,e,f,g){var w,v,u,t,s,r,q,p
$.a1()
w=A.U()
w.r=f.j(0.35).gt(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.M()
s.drawRect(A.cz(new A.af(16,q,t,q+3)),p)
p.delete()}},
c6T(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.c1p)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.J(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.J(s,2)
$.a1()
l=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.r=D.cI7[B.o.J(s,4)].j(0.85).gt(0)
k=l.M()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lA(d,e,B.c.j(0.35),w,16)
j.wV(d,e,B.iB,5,12)},
c6A(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lv(d,e,D.c1v)
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
r=D.cLB[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.J(o,2)
p.saR(0,new A.ey(r,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fE()
p.a5(d,new A.v(t*(0.08+B.o.J(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c1x[o]
l=B.kN.j(0.28+0.3*Math.sin(n))
k=B.o.J(o,2)
p.saR(0,new A.ey(m,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fE()
p.a5(d,new A.v(t*(0.55+B.o.J(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lA(d,e,B.c.j(0.35),w*1.5,14)
h.lA(d,e,B.eN.j(0.55),-v*3.141592653589793*2,8)
h.lA(d,e,B.z2.j(0.4),r*2.8,22)
h.wV(d,e,B.oH,8,10)
h.zQ(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.J(w+o*0.22,0.9)
$.a1()
r=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gt(0)
r.c=1.2
i=r.M()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c70(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,Ad.aqs)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.c_(new A.af(20,q,u,q+10),B.k6)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=A.aq(B.hC,B.nN,(r+1)/2).gt(0)
n=o.M()
t.drawRRect(A.fM(p),n)
n.delete()}m.lA(d,e,B.hC.j(0.35),w,15)
m.zQ(d,e,8)},
c6W(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.cIA)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.J(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.J(r*0.13,0.7)
$.a1()
l=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.r=B.c.j(0.25+p*0.55).gt(0)
k=l.M()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lA(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.wV(d,e,B.pU,4,14)},
c79(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lv(d,e,D.cyC)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.J(s,0.12)
$.a1()
n=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.b=B.aj
n.c=2
n.r=B.c.j(0.45-q*0.12).gt(0)
m=n.M()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wV(d,e,B.nT,6,12)
l.lA(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c7i(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lv(d,e,D.ceR)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.c_(new A.af(q,14,q+u,22),B.jM)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.fq,B.bK,(r+1)/2).gt(0)
o=p.M()
t.drawRRect(A.fM(q),o)
o.delete()}n.lA(d,e,B.c.j(0.3),w,16)
n.zQ(d,e,8)
n.wV(d,e,B.tT,5,13)},
c74(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cDW)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.J(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.c_(new A.af(q,p,q+8,p+(18+r*22)),B.hZ)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=[B.i5,B.dD,B.bK,B.eX][s].j(0.85).gt(0)
o=q.M()
t.drawRRect(A.fM(p),o)
o.delete()}this.lA(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c7b(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cBH)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.J(v+s*0.12,0.75))
q=B.o.J(s,4)*0.22
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.25).gt(0)
p.c=1.5
o=p.M()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wV(d,e,B.ct,7,11)},
c7p(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.chs)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.c_(new A.af(p,o,p+(t-r*8),o+16),B.k6)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.ct,B.aO,(Math.sin(q)+1)/2).gt(0)
n=p.M()
s.drawRRect(A.fM(o),n)
n.delete()}this.lA(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c7n(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cWP)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.J(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.J(s,2)*0.08)
q=A.c_(new A.af(r,q,r+28,q+8),B.k6)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.35+s*0.08).gt(0)
o=p.M()
t.drawRRect(A.fM(q),o)
o.delete()}this.zQ(d,e,6)},
c6N(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cHj)
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
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.ho.j(0.85).gt(0)
o.c=3
n=o.M()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lA(d,e,B.nb.j(0.35),w,14)},
c7a(d,e){var w,v,u,t,s,r,q,p,o=this
o.lv(d,e,D.cJw)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.dy(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.22).gt(0)
p=q.M()
t.drawOval(A.cz(r),p)
p.delete()}o.wV(d,e,B.pU,5,16)
o.zQ(d,e,7)},
c7l(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cUF)
w=m.c
v=w*3.141592653589793
m.lA(d,e,B.nN.j(0.55),v*3,10)
m.lA(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.nN.j(0.8).gt(0)
n=o.M()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c7o(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cXh)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.c_(new A.af(p,o,p+36,o+22),B.jM)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.iB,B.nb,q).gt(0)
n=p.M()
s.drawRRect(A.fM(o),n)
n.delete()}m.zQ(d,e,9)
m.lA(d,e,B.c.j(0.4),w*2.2,12)},
c6G(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cO1)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c1(new A.v(v,u),34)
$.a1()
s=A.U()
s.b=B.aj
s.c=5
s.r=B.c.j(0.45).gt(0)
d.fP(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.cg.j(0.85).gt(0)
n=o.M()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c6y(d,e){var w,v,u,t,s,r,q,p
this.lv(d,e,D.cKo)
$.a1()
w=A.U()
w.r=B.c.j(0.12).gt(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.M()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.M()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.J(t*0.85,1)
$.a1()
u=A.U()
u.r=B.dD.j(0.45).gt(0)
d.bp(new A.af(0,p,0+v,p+6),u)
this.lA(d,e,B.kO.j(0.45),-t*3.141592653589793*2,11)},
ao(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apt.prototype={
XV(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMj(),$async$XV)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a67(s),$async$XV)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$XV,v)},
acV(d){return this.c9E(d)},
c9E(d){var w=0,v=A.j(x.H),u=this,t
var $async$acV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hNU(d),$async$acV)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$acV,v)},
B(d){var w,v,u,t=null,s=A.L(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.j8:B.iz
w=x.p
v=A.a([C.aMG(!0,B.pK,1/0,B.p0,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bQ(new A.bE(B.b3,t,t,new A.C(B.u6,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ari,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b3,B.bb,B.x,u,t,t),B.n),B.b7))}v.push(A.an(8,A.B(A.a([A.D(A.dj(D.btR,D.eK2,new C.cag(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jB,t,t,t,t,B.c6)),1),B.ab,A.D(A.ex(D.bBP,D.eXs,this.gc0T(),A.d9(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jB,t,t,D.aPq,t,t,t,B.c6)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fN(1.7777777777777777,A.aD(!1,B.X,!0,B.pK,new A.am(B.V,t,B.aX,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aHV.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aPx.prototype={}
C.aPw.prototype={}
C.aNB.prototype={}
C.WI.prototype={
S(){return new C.avt()}}
C.avt.prototype={
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
if(w.length===0){u.c.F(x.q).f.P(D.ers)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).K(new C.aPx(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.L(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bBw,B.h,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.u(A.a([i,B.by,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.ba,i,A.aF(n,n,n,n,A.V(B.cu,m?B.bm:B.bv,n,n,n,n),n,n,n,new C.cSM(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,11,n,n,B.cp,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fRp(new C.cSN(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a0,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.j8:B.iz
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.cg
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bl(n,new A.b1(4,r,B.da),n,n,n,n,n,n,!0,new A.b1(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ae,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cSO(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,X.GY,n,n,n,n)
u=m?B.aO:B.aG
m=m?B.dT:B.cg
return A.eA(n,l,new A.d2(B.ld,A.cf(A.u(A.a([j,B.aN,i,B.au,w,B.P,v,B.aN,t,B.bs,A.B(A.a([A.D(A.dU(B.de,new C.cSP(d),A.d9(n,n,n,n,n,n,n,n,n,u,n,n,B.ca,n,new A.b5(A.m(12),B.W),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.av,A.D(A.bJ(D.eXH,o.ga_R(),A.bk(B.aS,n,n,n,B.c,n,B.ca,n,new A.b5(A.m(12),B.W),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zI,n,n,B.ah),n),n,n,n,T.zJ,B.cZ,n,new A.b5(k,B.W),n)}}
C.WH.prototype={
S(){return new C.avs()}}
C.avs.prototype={
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
if(w.length===0){this.c.F(x.q).f.P(D.ep9)
return}v=this.c
v.toString
A.a7(v,!1).K(new C.aPw(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.L(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.byc,B.h,q,q,new A.o(B.bR.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.u(A.a([l,B.by,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.ba,l,A.aF(q,q,q,q,A.V(B.cu,p?B.bm:B.bv,q,q,q,q),q,q,q,new C.cSI(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.V(B.aeT,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.av,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bA,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.j8:B.iz
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.cg
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bl(q,new A.b1(4,t,B.da),q,q,q,q,q,q,!0,new A.b1(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ae,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cSJ(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.ka,q,q,q,q)
w=p?B.aO:B.aG
p=p?B.dT:B.cg
return A.eA(q,o,new A.d2(B.ld,A.cf(A.u(A.a([m,B.aN,l,B.ay,v,B.bs,A.B(A.a([A.D(A.dU(B.de,new C.cSK(d),A.d9(q,q,q,q,q,q,q,q,q,w,q,q,B.ca,q,new A.b5(A.m(12),B.W),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.av,A.D(A.bJ(D.f2U,this.ga_R(),A.bk(B.bR,q,q,q,B.c,q,B.ca,q,new A.b5(A.m(12),B.W),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zI,q,q,B.ah),q),q,q,q,T.zJ,B.cZ,q,new A.b5(n,B.W),q)}}
C.We.prototype={
S(){return new C.aue()}}
C.aue.prototype={
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
gHZ(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gag3(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gaZ1(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aJT(d){var w,v=B.k.D(this.gHZ()+d,0.25,999999),u=B.k.lp(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.L(v))
else{u=B.k.ab(v,2)
w=A.ad("\\.?0+$",!0,!1,!1,!1)
u=A.aI(u,w,"")}t.saR(0,u)
this.n(new C.cqu())},
atQ(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.j8:B.iz,s=A.m(14),r=A.m(14)
u=u?B.dT:B.cg
return A.bl(w,new A.b1(4,s,B.da),w,B.bA,w,w,w,w,!0,new A.b1(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b1(4,A.m(14),B.a6l),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c0U(d,e,f){return this.atQ(d,e,f,null)},
ID(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gag3()<=0){s.c.F(x.q).f.P(D.etj)
return}r=s.c
r.toString
v=s.gHZ()
u=s.gag3()
t=s.gaZ1()
A.a7(r,!1).K(new C.aNB(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t5(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.p(o,D.brN,B.h,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a8(B.a1,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.u(A.a([h,B.by,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.cp,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.ba,h,A.aF(o,o,o,o,A.V(B.cu,n?B.bm:B.bv,o,o,o,o),o,o,o,new C.cqA(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.atQ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.L9),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,X.GY,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.j8:B.iz
t=A.m(14)
s=A.H(n?B.dT:B.cg,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Es,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqB(p),o,o,o,o,o,B.c6)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bDi,B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqC(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a3(52,o,q,o),A.aF(o,o,o,o,A.V(B.hH,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqD(p),o,o,o,o,o,B.c6)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.av,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.atQ(m,"Amount","0.00",B.hI),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqE(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.A(new A.J(D.cEn,new C.cqF(p,m),t),t.k("ai.E"))
i=A.a([i,B.bs,v,B.ay,h,B.P,s,B.aa,A.cb(B.bH,u,B.bw,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c0U(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cqG(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.ka,o,o,o,o)],w))}i.push(B.aN)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gHZ()===B.k.lp(p.gHZ())?B.k.L(p.gHZ()):p.gHZ()
s=p.gaZ1()
r=A.zx(p.gag3())
i.push(A.p(o,A.B(A.a([A.D(A.u(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.byE(p.gHZ()*p.gag3(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a8(B.a1,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.iD,o,o,o))
i.push(B.bs)
j=A.m(14)
h=n?B.dT:B.cg
h=A.d9(o,o,o,o,o,o,o,o,o,o,o,o,B.ca,o,new A.b5(j,B.W),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cqH(d),h),1),B.av,A.D(A.dj(D.ail,D.f_d,p.ga_R(),A.bk(B.aS,o,o,0,B.c,o,B.ca,o,new A.b5(A.m(14),B.W),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eA(o,l,new A.d2(S.a6I,A.cf(A.u(i,B.ad,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A6.qc,o,o,B.ah),o),o,o,o,B.JT,B.cZ,o,new A.b5(k,B.W),o)}}
C.ZN.prototype={
S(){return new C.brm()}}
C.brm.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=r?B.dR:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aO:B.aG,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.j8:B.iz
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bl(s,new A.b1(4,A.m(12),B.da),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eUm(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dU(B.de,new C.eUn(d),s),1)
r=A.bk(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eA(s,q,new A.C(B.zI,A.u(A.a([o,B.ay,v,B.aN,A.B(A.a([u,B.av,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eUo(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cZ,s,new A.b5(p,B.W),s)}}
C.a9_.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.E3.prototype={
S(){return new C.brk(null,null)}}
C.brk.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,D.bcE,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.br2()},
gbso(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bR,B.aW],x.O)
case 2:return A.a([B.bq,B.aS,B.aW],x.O)
case 3:return A.a([B.b5,B.c9,B.j9],x.O)
case 4:return A.a([B.hS,B.bR,B.eY],x.O)
case 0:return A.a([B.aS,B.bR,B.aW],x.O)}},
B(d){var w=A.L(d),v=this.d
v===$&&A.c()
return new A.en(A.c4(v,new C.eUk(this,new C.t5(w.ax.a===B.H)),null),null)}}
C.au7.prototype={
S(){return new C.brl(null,null)}}
C.brl.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,B.mu,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.br3()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eUl(this),null)}}
C.brj.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.c_(new A.af(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b3(w,w))
u=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
u.N(new A.j2(v))
w=A.U()
w.b=B.aj
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gt(0)
d.bj(v,w)
w=A.U()
w.b=B.aj
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gt(0)
d.b4(u,w)
w=A.zY(u)
t=A.a([],x.f5)
w=new A.xP(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jH('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FP(w,r)
w.lc()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNb(d,q,r,o,0,0.2,4.2,0.92)
p.aNb(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNb(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.J(g+h,1)*f,s=A.hbz(e.a.a,e,t,t+f*i,!0),r=A.bx4(s.gbM().a.getBounds())
$.a1()
w=A.U()
w.b=B.aj
w.c=j
w.d=B.bZ
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a1,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Fe,null).aC(0,r))
d.b4(s,w)},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aK0.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aK1.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.t5.prototype={}
C.aps.prototype={
S(){return new C.aBz()},
gdQ(){return this.c}}
C.aBz.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adM()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Js(w,v)
this.a2()},
adM(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxb(t.c,t.d.a),$async$adM)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.etJ(u,s))
return A.h(null,v)}})
return A.i($async$adM,v)},
O9(){var w=0,v=A.j(x.H),u=this,t,s
var $async$O9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.etA(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Js(t,s),$async$O9)
case 2:if(u.c!=null)u.n(new C.etB(u))
return A.h(null,v)}})
return A.i($async$O9,v)},
OF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.L(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.etH(t,new C.t5(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OF)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a67(q),$async$OF)
case 6:case 5:t.n(new C.etI(t,r))
w=7
return A.b(t.O9(),$async$OF)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
TE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hNF(r),$async$TE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.etv(t,new C.qo(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.O9(),$async$TE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TE,v)},
c5Q(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h3E(t,new C.etz(u),w,v)},
a87(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c2(new A.ax(v,2.5,B.r,-1),B.W,B.W,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aPc,w,w,B.n),w,22,w,w,w,w,w,22)},
a7c(d){return this.bDW(d)},
bDW(d){var w=0,v=A.j(x.H),u=this
var $async$a7c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.ety(u,d))
w=2
return A.b(u.O9(),$async$a7c)
case 2:return A.h(null,v)}})
return A.i($async$a7c,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.L(a2).ax.a===B.H,e=f?B.bV:B.iP,d=A.m(8),a0=A.V(N.Wz,f?B.bm:B.bv,g,g,g,16),a1=x.p
a0=A.aH(!1,d,!0,new A.C(B.DG,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,B.a0,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.etK(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.V,g,B.aX,B.q,A.a([A.bu(A.m(22),C.aMG(!0,A.m(22),1/0,B.p0,g,d,1/0),B.ap),A.an(10,A.dj(D.bwj,D.f1g,h.gaX_(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.G,B.aS.j(f?0.5:0.38),B.eH,22),new A.aa(-4,B.G,B.bR.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.am(B.V,g,B.aX,B.q,A.a([C.aMG(!0,A.m(16),1/0,B.KD,g,r.c,1/0),A.bQ(g,new A.o(g,g,g,g,g,new A.a8(B.b3,B.bb,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.b7),A.an(g,h.a87(!0),g,g,8,g,8,g),A.an(g,A.co1(h.a87(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.co1(h.a87(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.co1(h.a87(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dj(D.bsm,D.eWv,h.gaX_(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bE3,B.n),g,g,g,g,B.lU,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZ1,B.n8,B.fP],u):A.a([B.aW,B.aS,B.bR],u)
t=x.V
s=A.a([new A.aa(0,B.G,B.aS.j(f?0.45:0.35),B.eH,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jF,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h0,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.byE(h.d.gw1(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cp,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.ja.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.b5.j(0.28),B.cG,14)],t)
j=B.b5.j(0.22)
i=A.m(10)
u=A.p(g,A.bu(r,new A.am(B.V,g,B.a9,B.q,A.a([p,new A.C(D.bhc,A.B(A.a([o,B.av,A.aD(!1,B.X,!0,g,A.aH(!1,n,!0,A.eq(new A.C(Ab.V4,A.u(A.a([A.p(g,D.ahU,B.h,g,g,new A.o(j,g,A.H(B.b5.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.fW,D.eMz],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc5P(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fN(1.7777777777777777,d,g),B.aN,w,B.P,u,B.bs,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dj(Ae.Yj,D.eKB,h.gbsR(),A.bk(B.aS,g,g,g,B.c,g,B.iC,g,new A.b5(A.m(12),B.W),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.aa],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dT:B.cg,B.r,1)
t=A.V(B.WU,f?B.bm:B.bv,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.ue,g,g,1/0))}else B.d.v(d,new A.J(w,new C.etL(h,new C.t5(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zv,A.as(A.mi(g,f?B.bm:B.bv,g,g,g,g,g,g,g,g),g,g,g),g))
return A.ce(g,e,A.br(!0,A.u(A.a([new A.C(B.zA,a0,g),A.D(A.cf(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wt,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bwj(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.aa(0,B.G,B.w.j(r?0.35:0.08),B.cG,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aRT,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hK:B.fR,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.Z,u,u,u,A.l(u,u,r?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcJC()
v=A.zx(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,B.a0,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b4,B.R,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.byE(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a8(B.a1,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.KI(A.B(A.a([m,A.D(new A.C(B.acc,A.B(A.a([l,B.ba,t,B.ab,k,A.aF(u,u,u,u,A.V(B.cu,(r?B.bm:B.bv).j(0.75),u,u,u,20),u,u,u,new C.etw(this,d),u,u,u,u,u,B.c6)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ad,u,B.e,B.j,0,u,u),u),B.ap),B.h,u,D.aQM,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d7,u,u,u,u)}}
C.ab_.prototype={
D5(d){return this.bFd(d)},
bFd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oB(d,o,!1),$async$D5)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
w=4
return A.b(A.bK(A5.zt,null,x.H),$async$D5)
case 4:s=t.d
w=5
return A.b(C.fnQ(!0,o,s),$async$D5)
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
XW(d){return this.clt(d)},
clt(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$XW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oB(d,s,!1),$async$XW)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
A.hl(d,new C.apm(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oA(s,!1),$async$XW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
Oa(d){return this.chH(d)},
chH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(A.hl(d,D.aAk,!0,"NgmyWorksheetProjectScan",x.N),$async$Oa)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.byF(s),$async$Oa)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.F(x.q).f.P(D.ess)
w=1
break}q=C.fHL(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Oa)
case 5:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
XX(d){return this.ct9(d)},
ct9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(C.byc(),$async$XX)
case 3:s=f
if(s==null){w=1
break}r=C.fHL(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$XX)
case 4:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XX,v)},
B(d){var w=this,v=null,u=A.L(d).ax.a===B.H,t=new C.t5(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.aa(0,B.G,B.w.j(u?0.35:0.08),B.kG,36)],x.V),o=x.p
return A.br(!0,new A.C(B.ub,A.p(v,A.u(A.a([w.ck6(d,t,s),new A.C(D.bgB,A.u(A.a([w.aZV(t,"QR restore"),B.T,A.B(A.a([w.aV3(t,!0,B.j1,B.b5,B.b5,new C.etN(w,d),"Show to scan","QR code"),B.av,w.atR(t,B.iF,B.b0,B.bE,new C.etO(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d1,w.aZV(t,"Backup files"),B.T,A.B(A.a([w.atR(t,B.hh,B.aS,B.bR,new C.etP(w,d),"Full copy","Backup file"),B.av,w.atR(t,M.x8,B.b_,B.aM,new C.etQ(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
ck6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eO,B.cW,B.ff],k):A.a([B.aW,B.aS,B.bR],k)
w=A.an(l,A.V(B.rZ,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kq,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.G,B.w.j(0.2),B.cG,12)],x.V)
r=this.d
s=A.p(l,C.aMG(!0,A.m(13),64,D.bnB,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.Z,l,l,l,D.aK5,l,l,l)
r=C.byE(r.gw1(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.V,l,B.a9,B.q,A.a([w,new A.C(D.bgZ,A.u(A.a([v,A.B(A.a([s,B.en,A.D(A.u(A.a([u,B.au,t,B.P,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fw,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.etM(d),l,l,l,A.ol(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aHt,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
aZV(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aV3(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aaX:B.aO
if(e)w=B.b5.j(o?0.45:0.35)
else{w=o?B.dT:B.cg
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.G,B.b5.j(0.12),B.cG,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.eq(new A.C(E.V5,A.u(A.a([t,B.aa,u,B.by,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,B.cp,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
atR(d,e,f,g,h,i,j){return this.aV3(d,!1,e,f,g,h,i,j)}}
C.apm.prototype={
S(){return new C.bgQ()}}
C.bgQ.prototype={
Z(){this.a0()
this.abG()},
abG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.byG(p.c,p.d),$async$abG)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.etq(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.etr(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.L(d).ax.a===B.H,f=g?B.z1:B.iP,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.es,g?B.ak:B.al,h,h,h,18),h,h,h,new C.ets(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.y9],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eO,B.cW,B.ff],s):A.a([B.aW,B.aS,B.bR],s)
r=x.V
q=A.a([new A.aa(0,B.G,B.aS.j(g?0.4:0.3),B.eH,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.byE(p.gw1(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fw,h,h,h)],u),B.m,h,B.b4,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.Vr,h,h,1/0)
t=g?D.b63:B.c
q=A.m(24)
p=A.H(w?B.b5.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.G,B.w.j(g?0.25:0.06),B.dl,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3I,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dLw)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pj(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c1,h,h,h))}}o.push(B.aN)
n=w?B.b5:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.b5:B.aS).j(0.35),B.r,1)
k=w?B.KT:B.Ln
k=A.V(k,w?B.b5:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.av,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ak:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a0,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iC,h,h,h))
return A.ce(h,f,A.br(!0,A.u(A.a([new A.C(A2.K6,e,h),A.D(A.cf(A.u(A.a([s,B.aN,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rG,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adk,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.apr.prototype={
S(){return new C.aBy(A.y7(B.Jo,B.n2,B.t2))}}
C.aBy.prototype={
p(){this.d.p()
this.a2()},
aHV(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iC(w,d)},
c1K(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hLM(t)
if(s!=null){this.aHV(s)
return}r=C.fVU(t)
if(r!=null)q=A.dm(r,p,0)
else q=!1
if(q){this.aHV(B.a.i(B.a.aU(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.ez(A.a([A.aF(t,t,t,t,A.V(u.f?B.rR:Y.KZ,t,t,t,t,t),t,t,t,new C.etu(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.z1,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.eWp,t,t,t,1,t,!0),q=A.y6(u.d,B.bM,u.gc1J()),p=A.m(28)
p=A.as(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.aa(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.ce(r,B.w,new A.am(B.V,t,B.aX,B.q,A.a([q,p,A.an(32,A.p(t,D.eVh,B.h,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iD,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGi.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mb.prototype={
S(){return new C.aBA(D.a5F,A.a([],x.D))},
bm(){return this.r.$0()},
gdQ(){return this.c}}
C.aBA.prototype={
gcrd(){return J.bzM(this.e,0,new C.euc())},
Z(){this.a0()
$.aS.c_$.push(this)
this.uO()},
p(){$.aS.hE(this)
this.a2()},
iN(d){if(d===B.fn)this.uO()},
uO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BA(q.a.c).cJ(0,B.kp),$async$uO)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.eu8(q,p))
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
if(q.c!=null&&q.f)q.n(new C.eu9(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uO,v)},
Gw(d){return this.bC6(d)},
bC5(){return this.Gw(null)},
bC6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hNH(l,d),$async$Gw)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l1(l,r,q,D.cOe,new A.O(Date.now(),0,!1))
w=4
return A.b(C.Js(t.a.c,p),$async$Gw)
case 4:o=f
w=5
return A.b(t.uO(),$async$Gw)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.F(x.q).f.P(D.epD)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.F(q).f.P(D.erm)
else n.F(q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D9(m)
case 1:return A.h(u,v)}})
return A.i($async$Gw,v)},
D9(d){return this.c5B(d)},
c5B(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$D9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hl(s,new C.aps(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$D9)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Js(u.a.c,t),$async$D9)
case 5:case 4:w=6
return A.b(u.uO(),$async$D9)
case 6:return A.h(null,v)}})
return A.i($async$D9,v)},
uC(d){return this.bRv(d)},
bRv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.byc(),$async$uC)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hl(r,D.aAk,!0,"NgmyWorksheetProjectScan",x.N),$async$uC)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.byF(q),$async$uC)
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
break}p=C.fHL(s)
w=15
return A.b(C.Js(t.a.c,p),$async$uC)
case 15:o=f
w=16
return A.b(t.uO(),$async$uC)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.F(x.q).f.P(D.err)
w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D9(p)
case 1:return A.h(u,v)}})
return A.i($async$uC,v)},
M5(d){return this.bAN(d)},
bAN(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$M5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.etU(d),s,null,!0,!0,x.y),$async$M5)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oc(t.a.c,A.a([],x.D)),$async$M5)
case 6:w=7
return A.b(t.uO(),$async$M5)
case 7:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.epI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$M5,v)},
c5O(d){var w=this.c
w.toString
A.c0(B.K,null,new C.eu2(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b_w(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.j8
else w=B.c
v=A.m(16)
u=A.H(p?B.dT:B.cg,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.p(r,A.u(A.a([s,B.aa,t,B.by,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ua,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
Yp(d,e){return this.c5C(d,e)},
c5C(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(B.K,null,new C.etY(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Yp)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h3E(r,new C.etZ(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.M7(d,e),$async$Yp)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Yp,v)},
aXB(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aH
else t=h.a?B.aO:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.X,!0,u,A.aH(!1,u,!0,new A.C(B.zF,A.B(A.a([s,B.ba,t,A.V(B.ek,w?B.bm:B.bv,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
ccg(d,e,f,g,h,i){return this.aXB(!1,d,e,f,g,h,i)},
M7(d,e){return this.bAX(d,e)},
bAX(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$M7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kN(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$M7)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bwZ(t.a.c,d.a),$async$M7)
case 6:w=7
return A.b(t.uO(),$async$M7)
case 7:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$M7,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=new C.t5(o),m=o?B.bV:B.iP
if(q.f)o=D.aX8
else{w=q.bvz(n)
v=q.bQD(n)
u=q.gbsL()
if(o)t=B.j8
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.aa,v,B.aN,new C.E3(A.p(p,A.B(A.a([q.axh(P.KC,"Projects",n,D.a5F),q.axh(B.ul,"Cashier",n,D.aNh),q.axh(B.DZ,"Family Tree",n,D.fhi)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ef,0.95,u,p),B.bs],r)
w=q.d
if(w===D.a5F){w=J.a9(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aO:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.au7(q.gaM2(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.cci(n)],r))}else{o=q.a
if(w===D.aNh)u.push(new C.alA(o.c,n,p))
else{w=q.r
u.push(new C.amG(o.c,o.d,o.e,o.f,new C.euf(q),new C.eug(q),new A.cv(w,x.b4)))}}o=A.cf(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A7.K_,p,p,B.ah)}return A.ce(p,m,A.br(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bvz(d){var w=null,v=A.m(8),u=d.a,t=A.V(N.Wz,u?B.bm:B.bv,w,w,w,16)
return A.aH(!1,v,!0,new A.C(B.ll,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etR(this),w,w,w,w,w,w,w)},
gbsL(){switch(this.d.a){case 0:return D.a4Y
case 1:return D.f8K
case 2:return D.a4Z}},
bQD(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.G,B.aS.j(0.35),B.cv,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.by2,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.ba,D.bl3,A.aD(!1,B.X,!0,w,A.aH(!1,A.m(12),!0,A.p(w,D.bvD,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etV(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.E3(A.p(w,A.u(A.a([new A.C(E.Vb,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.zx(this.gcrd()),w,w,w,w,w,w,D.eHh,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u9,B.iD,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.f8J,w)},
axh(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.aa(0.5,B.G,B.aS.j(0.42),B.cG,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bm:B.bv
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bm:B.bv
return A.D(A.aD(!1,B.X,!0,u,A.aH(!1,s,!0,A.dg(u,A.B(A.a([w,B.ez,new A.dk(1,B.cj,A.d(e,u,1,B.Z,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b4,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.ib,u,u,u,B.K2,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eub(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),1)},
cci(d){var w,v,u,t,s,r,q=this,p=null
if(J.ci(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bvI,B.h,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.G,B.aS.j(0.5),B.eH,28)],x.V),D.bGe,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.E3(A.p(p,A.u(A.a([t,B.d1,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.B(A.a([A.D(q.aNw(B.iF,"Scan QR",new C.eu5(q),d),1),B.av,A.D(q.aNw(M.x8,"Upload file",new C.eu6(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bJ(D.f4B,q.gaM2(),A.bk(B.aS,p,p,p,B.c,B.fV,p,p,new A.b5(A.m(12),B.W),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bi2,1.05,D.a4Y,p)}w=J.b4(q.e,new C.eu7(q,d),x.l)
w=A.A(w,w.$ti.k("ai.E"))
return new C.E3(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a4Y,p)},
aNw(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.X,!0,u,A.aH(!1,t,!0,A.p(w,A.u(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eFJ,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ac5,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)},
cch(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.a([new A.aa(0,B.G,B.w.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bm:B.bv
n=A.bu(B.a6h,new A.fN(1.7777777777777777,C.aMG(!0,B.fe,1/0,P.KC,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.zx(d.gw1()),u,u,u,u,u,u,D.eDV,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.X,!0,u,A.aH(!1,o,!0,A.u(A.a([n,new A.C(B.bA,A.B(A.a([v,A.aF(u,u,u,u,A.V(A8.Lc,t?B.bm:B.bv,u,u,u,u),u,u,u,new C.eu3(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eu4(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.dZ,u,u,u,1/0)}}
C.bt4.prototype={}
C.qo.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcJC(){var w,v,u,t,s=this.c
if(s===B.k.lp(s))w=B.o.u(B.k.L(s))
else{v=B.k.ab(s,2)
u=A.ad("\\.?0+$",!0,!1,!1,!1)
w=A.aI(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l1.prototype={
gw1(){return B.d.cI(this.d,0,new C.cpW())},
ad(){var w=this,v=w.d,u=A.T(v).k("J<1,a0<n,@>>")
v=A.A(new A.J(v,new C.cpV(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.aa()],x.N,x.z)},
b6q(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l1(w.a,w.b,v,u,w.e)},
b67(d){return this.b6q(d,null)},
QO(d){return this.b6q(null,d)}}
C.FY.prototype={
a3(){return"FamilyGender."+this.b}}
C.hP.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h_v(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
azQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hP(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ahW.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kl.prototype={
galj(){var w=this.f
return new A.a5(w,new C.bIC(),A.T(w).k("a5<1>")).gG(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("J<1,a0<n,@>>")
v=A.A(new A.J(v,new C.bIB(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.aa(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hEm(w.y)],x.N,x.z)},
xC(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kl(w.a,v,u,t,s,r,w.r,q,p,o)},
b6p(d,e){var w=null
return this.xC(w,w,d,e,w,w,w,w)},
czH(d,e,f,g,h,i,j){return this.xC(d,e,f,g,h,i,j,null)},
azV(d,e){var w=null
return this.xC(w,w,w,d,w,w,e,w)},
cyc(d){var w=null
return this.xC(w,w,w,w,w,w,d,w)},
cyA(d){var w=null
return this.xC(w,w,w,w,w,w,w,d)},
azH(d){var w=null
return this.xC(w,w,w,w,d,w,w,w)},
czd(d,e,f){var w=null
return this.xC(w,d,w,e,w,w,f,w)},
cy_(d){var w=null
return this.xC(w,w,d,w,w,w,w,w)},
cyM(d,e){var w=null
return this.xC(d,w,w,w,w,e,w,w)}}
C.cpX.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cpY.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDB.prototype={}
C.b4H.prototype={
bH(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b4H()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aU(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b4G.prototype={
gvn(){return!0},
gED(){return this.z.b<this.b.length},
aP5(d){switch(0){case 0:return d.a.c}},
aON(d){switch(0){case 0:return d.a.d}},
bKa(d,e){switch(0){case 0:return new A.hy(d,e)}},
bJz(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fR(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.ir(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FJ(b4)
switch(0){case 0:v=b5.b
u=new A.ki(0,v,0,1/0)
t=w===B.Qu
break}s=A.a([],x.gZ)
r=A.R(x.cM,x.S)
for(b3=b1.z,q=B.d.fT(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fR(b4,u,!0)
f=b1.aP5(g)
f.toString
e=b1.aON(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDB(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDB(k,j,i))}d=s.length
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
for(q=B.d.fT(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aP5(g)
e=b1.aON(g)
e.toString
a9=b1.bJz(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bKa(a6,a3+a9)
b0=g.a
g.a=new A.ir(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fN(d){var w,v,u,t,s,r=this
r.kJ(d)
w=d.b
w.hQ()
v=A.de()
u=r.a
v.dY(u.a,u.b,0,1)
w.od(0,v)
for(u=r.z,u=B.d.dA(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fN(d)
w.mJ(0)},
F8(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hQ(){return this.z}}
C.brn.prototype={}
var z=a.updateTypes(["au<~>()","S(hP)","S(kl)","~()","S(mM)","a0<n,@>(kl)","I(kl,kl)","n(hP)","kl(a0<@,@>)","S(l1)","ep<n?>(hP)","tz()","a0<n,@>(mM)","XJ(Y)","hP(a0<@,@>)","a0<n,@>(hP)","S(tz)","S(qo)","au<~>(l1)","mM(a0<@,@>)","I(l1,l1)","I(hP,hP)","n?(hP)","r(nO)","hP(hP)","cE(bq<n,Ef>)","cE(Ii)","~(I)","I?(hP)","hP()","ak<hP>()","aaF(Y)","S(Ii)","C(hP)","~(FY)","WG(Y)","r(FY,n,a_)","n(n)","bq<n,ak<a0<n,@>>>(n,ak<mM>)","n(O)","+count,id,name(I,n,n)(kl)","kl(kl)","Y3(Y)","Y4(Y)","S(lh)","lh()","We(Y)","n(kl)","WI(Y)","WH(Y)","X7(Y)","~(hP)","r(qo)","ab_(Y)","~(lE)","au<~>([n?])","Q(Q,l1)","r(l1)","Q(Q,qo)","a0<n,@>(qo)","qo(a0<@,@>)","S(aca)","X5(Y)","X9(Y)","l1(a0<@,@>)","cp(FX)","n(l1)","a0<n,@>(l1)","I(mM,mM)","I(hP)","kl(a0<n,@>)","ZN(Y)"])
C.fgw.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.fgv.prototype={
bf7(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qh(s,d,B.h4,E.Dm),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.P(r!=null&&A.Jg(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bf7(d)},
$S:325}
C.fgx.prototype={
$1(d){return d.b},
$S:116}
C.fpp.prototype={
$1(d){var w=null
return A.eA(w,B.K,new F.Nw(this.a,this.b,w),w,w,0,B.V6,B.cZ,w,w,w)},
$S:46}
C.f6S.prototype={
$1(d){return d!=null},
$S:217}
C.f6T.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:217}
C.f6Y.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:170}
C.fef.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f_(d,w,w,w,A.fX(w,B.qF,w,w,w,w,w,w,w,B.dk,w,w,10.5,w,B.eb,w,!0,w,w,w,w),w),u=f?B.eb:B.ug
return new A.ni(D.bdH,A.a7h(A.a([new A.fG(130,w,v),new A.xR(1,B.DS,A.f_(e,w,w,w,A.fX(w,g==null?D.dMK:g,w,w,w,w,w,w,w,B.dk,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.w7,B.l2))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1866}
C.fee.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uE(999)
f=A.w7(A.lc(h,A.f_("Cashier",h,h,h,A.fX(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,10,h,B.eb,h,!0,h,h,h,h),h),h,new A.kj(D.dMB,h,f,B.hk,h),h,h,D.be7,h))
w=A.w7(A.f_("Debt receipt",h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dk,h,h,22,h,B.eb,h,!0,h,h,h,h),h))
v=A.w7(A.f_(C.vR(new A.O(Date.now(),0,!1),!0),h,h,h,D.a3Q,h))
u=A.uE(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f_(s,h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dk,h,h,14,h,B.eb,h,!0,h,h,h,h),h)
r=A.f_("Person who owes",h,h,h,D.a3Q,h)
q=A.uE(10)
p=x.C
u=A.lc(h,A.xM(A.a([s,new A.fG(h,2,h),r,new A.fG(h,10,h),A.lc(h,A.xM(A.a([A.f_("Amount owed",h,h,h,D.a3Q,h),new A.fG(h,2,h),A.f_(A.zx(t.c),h,h,h,A.fX(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,20,h,B.eb,h,!0,h,h,h,h),h)],p),B.q8,B.l2),h,new A.kj(B.oi,h,q,B.hk,h),h,h,D.bdp,1/0)],p),B.q8,B.l2),h,new A.kj(E.aBg,h,u,B.hk,h),h,h,D.bfa,1/0)
q=new A.n1(D.dME,0.9,B.kh)
r=A.uE(12)
s=i.c
o=s.$2("Original due",C.vR(t.r,!1))
n=s.$2("Current due",C.vR(t.f,!1))
m=i.d
l=new A.n1(m,1.1,B.kh)
k=A.uE(8)
j=i.a
k=A.a([o,n,new A.fG(h,6,h),A.lc(h,A.w7(A.f_(t.gaGr(),h,h,h,A.fX(h,m,h,h,h,h,h,h,h,B.dk,h,h,11,h,B.eb,h,!0,0.5,h,h,h),h)),h,new A.kj(h,new A.p0(l,l,l,l),k,B.hk,h),h,h,D.beg,1/0),new A.fG(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.xY))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.xY))
else{n=A.f_("Missed days ("+n+")",h,h,h,A.fX(h,B.qF,h,h,h,h,h,h,h,B.dk,h,h,10.5,h,B.eb,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Qh>")
o=A.A(new A.J(o,new C.fed(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fG(h,4,h),n,new A.fG(h,6,h),new C.b4G(5,5,new C.b4H(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fG(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fG(h,8,h),w,new A.fG(h,3,h),v,new A.fG(h,16,h),u,new A.fG(h,10,h),A.lc(h,A.xM(k,B.w7,B.l2),h,new A.kj(h,new A.p0(q,q,q,q),r,B.hk,h),h,h,B.acg,1/0)],p)
w=j.a
if(w!=null){v=new A.n1(B.Gk,1,B.kh)
B.d.v(f,A.a([new A.fG(h,16,h),A.f_("Debtor signature",h,h,h,A.fX(h,B.qF,h,h,h,h,h,h,h,B.dk,h,h,10,h,B.eb,h,!0,h,h,h,h),h),new A.fG(h,6,h),A.lc(h,new A.Gd(w,B.Sw,h,h),h,new A.kj(h,new A.p0(v,v,v,v),A.uE(6),B.hk,h),82,h,B.K4,1/0)],p))}f.push(new A.fG(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f_(w,h,h,h,D.ex9,h))
f.push(new A.fG(h,18,h))
f.push(A.w7(A.f_("NGMY.ORG",h,h,h,A.fX(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,14,h,B.eb,h,!0,1.8,h,h,h),h)))
return f},
$S:397}
C.fed.prototype={
$1(d){var w=null,v=new A.n1(D.Gl,0.7,B.kh),u=A.uE(999)
return A.lc(w,A.f_(C.vR(d,!1),w,w,w,A.fX(w,D.Gl,w,w,w,w,w,w,w,B.dk,w,w,9.5,w,B.eb,w,!0,w,w,w,w),w),w,new A.kj(w,new A.p0(v,v,v,v),u,B.hk,w),w,w,D.bjl,w)},
$S:1867}
C.bX8.prototype={
$1(d){var w=null,v=B.bS.j(0.08),u=A.m(999),t=A.H(B.bS.j(0.28),B.r,1)
return A.p(w,A.d(C.vR(d,!1),w,w,w,w,w,w,D.eDq,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ew,w,w,w)},
$S:1868}
C.fpV.prototype={
$1(d){var w=null,v=A.aG(d,B.bO,x.n).w,u=A.m(26),t=A.aF(w,w,w,w,B.aid,w,w,w,new C.fpS(d),w,w,w,w,w,B.c6),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eA(w,B.K,new A.d2(new A.aW(0,380,0,v.a.b*0.9),A.aD(!1,B.X,!0,u,new A.C(B.UX,A.u(A.a([new A.bE(B.a7,w,w,t,w),new A.dk(1,B.cj,A.cf(A.u(A.a([new A.en(new C.aUS(r,w),s),B.T,A.B(A.a([A.D(A.ex(B.xj,D.f1c,new C.fpT(s,r,d),A.d9(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eU,w,new A.b5(A.m(14),B.W),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dj(B.Y9,D.eZ6,new C.fpU(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eU,w,new A.b5(A.m(14),B.W),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aG,0,w,w,w,w,w,B.ac),w),w,w,0,Ac.Vk,B.cZ,w,w,w)},
$S:46}
C.fpS.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fpT.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.ae$.x.h(0,t.a)
m=m==null?null:m.gb3()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.hd(B.fI),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f1(B.dz.gaL(s))
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
C.fpU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fkO(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.F(x.q).f
s.P(A.b_(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fpN.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eA(w,B.aG,A.u(A.a([new A.C(D.bf_,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.mT,w,w,w),1),A.aF(w,w,w,w,B.l0,w,w,w,new C.fpL(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dk(1,B.cj,new A.C(B.ig,A.bu(A.m(14),A.fD(t,B.B,w,w,B.ci,B.dn,!1,w,!1,w,w),B.ap),w),w),new A.C(B.JJ,new A.a3(1/0,w,A.dj(B.ob,D.aKu,new C.fpM(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.JU,B.cZ,w,new A.b5(v,B.W),w)},
$S:46}
C.fpL.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fpM.prototype={
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
C.fpZ.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eA(w,B.aG,new A.C(D.bf6,A.u(A.a([A.B(A.a([D.bkh,A.aF(w,w,w,w,B.l0,w,w,w,new C.fpX(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.en(A.bu(A.m(14),A.p(w,A.b2(w,w,w,new C.b6O(s.ax,w),B.as),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.aa,new A.a3(1/0,w,A.dj(B.ob,D.aKu,new C.fpY(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(v,B.W),w)},
$S:46}
C.fpX.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fpY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.ae$.x.h(0,t.a)
n=n==null?null:n.gb3()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.hd(B.fI),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aI(r,q,"_")
if(p.length>32)p=B.a.al(p,0,32)
r=J.f1(B.dz.gaL(s))
w=5
return A.b(A.rf(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.f9C.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dxx.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dxi.prototype={
bel(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c0(t,null,new C.dxl(s,q,e),p,!0,!0,!1,B.GB,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dxm(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bel(d,e)},
$S:1869}
C.dxl.prototype={
$1(d){var w,v=null,u=this.c===B.uR,t=u?D.cTw:D.cQe
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aO:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.br(!0,new A.C(K.acP,A.u(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa,A.ig(!0,v,v,B.z,L.aHL,new C.dxk(this.a,w,t,d),t.length,v,B.dJ,B.ah,!0)],x.p),B.ad,v,B.e,B.R,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:33}
C.dxk.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.M:B.aO
v=A.m(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bm:B.bv).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aH(!1,p,!0,A.p(B.B,C.aUR(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dxj(t.d,r),s,s,s,s,s,s,s)},
$S:193}
C.dxj.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.dxm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dxg.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dxh.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cF(B.co,e,v)
return new A.cZ(e,!1,A.iF(B.B,A.as(A.aD(!1,B.X,!0,v,new A.ed(new C.dxf(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bc(t,new A.bm(0.96,1,u),u.k("bc<bC.T>"))),v)},
$S:32}
C.dxf.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bO,x.n).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bm:B.bv).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aH(!1,v,!0,new A.C(B.ef,A.V(B.cu,i.a.d.a?B.bm:B.bv,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dx0(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aO2("Name")
r=l.a
q=r.d==null?k:new C.dx1(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lO
n=A.H(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6i(new A.C(B.hc,A.aH(!1,p,!0,A.p(B.B,C.aUR(m==null?"\ud83d\udc64":A.ff3(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ae,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ka,k,B.a3z,k,k)
v=A.a([v,B.aa,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aOD("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dx2(r,a0),r.d===B.uR),1),B.ab,A.D(i.aOD("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dx7(r,a0),r.d===B.a0z),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bE(B.a1,k,k,A.hg(D.bxl,D.f_K,new C.dx8(r,l.e,a0),A.fo(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c6)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tB(A.ad("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aO3("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ae,k,k,s,k,k,B.dX,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aO
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bm:B.bv).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vR(r.a,!1)
v.push(A.aD(!1,B.X,!0,q,A.aH(!1,p,!0,A.p(k,A.B(A.a([A.D(A.u(A.a([t,B.by,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.buf],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dx9(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aO2("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ae,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.aa)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aW0(r.b.length!==0,B.lV,new C.dxa(r,i,a0),new C.dxb(r,a0),"Upload from gallery","ID photo"))
v.push(i.aW0(r.c.length!==0,D.bnz,new C.dxc(r,i,d,a0),new C.dxd(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A9.a5f("Signature (optional)",t,new C.dxe(a0),new C.dx3(a0,t),new C.dx4(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bm:B.bv
s=(i?B.bm:B.bv).j(0.28)
s=A.D(A.dU(E.aKo,new C.dx5(d),A.d9(k,k,k,k,k,k,k,k,k,t,k,k,B.wi,k,new A.b5(A.m(10),B.W),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cW,k,k,k,B.c,k,B.wi,k,new A.b5(A.m(10),B.W),k,k,k)
v.push(A.B(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ty,k,k,k),new C.dx6(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cf(A.u(v,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),B.h,k,new A.aW(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uc,B.iD,k,k,360)},
$S:158}
C.dx0.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dx1.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dx2.prototype={
$0(){return this.b.$1(new C.dx_(this.a))},
$S:0}
C.dx_.prototype={
$0(){var w=this.a
w.d=B.uR
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dx7.prototype={
$0(){return this.b.$1(new C.dwZ(this.a))},
$S:0}
C.dwZ.prototype={
$0(){var w=this.a
w.d=B.a0z
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dx8.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dx9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xD(null,u.b,A.bY(2020,1,1,0,0,0,0,0),null,s,A.bY(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dwY(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwY.prototype={
$0(){var w=this.b
return this.a.a=A.bY(w.gcc(),w.gcb(),w.gcp(),0,0,0,0,0)},
$S:0}
C.dxa.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NB(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dwX(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwX.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dxb.prototype={
$0(){return this.b.$1(new C.dwW(this.a))},
$S:0}
C.dwW.prototype={
$0(){return this.a.b=""},
$S:0}
C.dxc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c0(q,null,new C.dwU(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NB(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dwV(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwU.prototype={
$1(d){var w=null
return A.br(!0,A.u(A.a([A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahL,w,w,w,w,new C.dwO(d),!1,w,w,w,w,w,w,w,D.eS_,w,w,w),A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahJ,w,w,w,w,new C.dwP(d),!1,w,w,w,w,w,w,w,D.eYd,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:33}
C.dwO.prototype={
$0(){A.a7(this.a,!1).K("camera")
return null},
$S:0}
C.dwP.prototype={
$0(){A.a7(this.a,!1).K("gallery")
return null},
$S:0}
C.dwV.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dxd.prototype={
$0(){return this.b.$1(new C.dwT(this.a))},
$S:0}
C.dwT.prototype={
$0(){return this.a.c=""},
$S:0}
C.dxe.prototype={
$0(){return this.a.$1(new C.dwS())},
$S:0}
C.dwS.prototype={
$0(){},
$S:0}
C.dx3.prototype={
$0(){return this.a.$1(new C.dwR(this.b))},
$S:0}
C.dwR.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dx4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.af2(u.a,null,null,new C.dwQ(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwQ.prototype={
$4(d,e,f,g){this.a.$1(new C.dwN(this.b,d))},
$S:446}
C.dwN.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dx5.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dx6.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.F(x.q).f.P(D.eti)
return}if(w.a.d==null){w.c.F(x.q).f.P(D.eqe)
return}A.a7(w.c,!1).K(!0)},
$S:0}
C.dxA.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dxB.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bv).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zx(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bm:B.bv,r,r,r,r,r,r,r,r,13,r,r,B.a0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y_(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y_(r).length>0?B.bS:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bm:B.bv
t=(q?B.bm:B.bv).j(0.28)
s=x.p
return new A.cZ(e,!1,A.as(A.aD(!1,B.X,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dU(B.mW,new C.dxy(d),A.d9(r,r,r,r,r,r,r,r,r,w,r,r,B.jB,r,new A.b5(A.m(10),B.W),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.eYC,new C.dxz(d),A.bk(B.cW,r,r,r,B.c,r,B.jB,r,new A.b5(A.m(10),B.W),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ad,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zK,E.Vb,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:32}
C.dxy.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxz.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dxu.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dxv(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bv).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.Z,s,s,s,A.l(s,s,r.a.d.a?B.aO:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zx(l.c),s,s,s,s,s,s,D.eER,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jm((r.a.d.a?B.bm:B.bv).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.WU,"View receipt",new C.dxn(r,d,l))
u=l.x!=null
t=u?B.uA:B.p2
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bf3,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dxo(r,d,l)),q.$3$icon$label$onTap(B.A0,"Edit",new C.dxp(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.lV,"View / download ID",new C.dxq(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bny,"View / download selfie",new C.dxr(r,d,l)))
if(l.gaBv())p.push(q.$3$icon$label$onTap(A0.Y0,"View / download signature",new C.dxs(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bS,B.e4,"Delete",new C.dxt(r,d,l)))
p.push(B.au)
return A.br(!0,new A.C(B.u9,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:33}
C.dxv.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aO:B.aG
else w=d
return A.aH(!1,v,!0,new A.C(B.eE,A.B(A.a([A.V(e,w,v,v,v,20),B.ba,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1870}
C.dxn.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fpR(w,this.c)},
$S:0}
C.dxo.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Qa(this.c)},
$S:0}
C.dxp.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.BT(this.c)},
$S:0}
C.dxq.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bz1(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dxr.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bz1(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dxs.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fpW(w,this.c)},
$S:0}
C.dxt.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Mi(0,this.c)},
$S:0}
C.dxC.prototype={
$1(d){return d.x==null},
$S:261}
C.dxD.prototype={
$1(d){return d.x!=null},
$S:261}
C.dxE.prototype={
$2(d,e){return d+e.c},
$S:1871}
C.dxF.prototype={
$0(){return this.a.btd()},
$S:0}
C.dxw.prototype={
$0(){return this.a.abT(this.b)},
$S:0}
C.fbP.prototype={
$1(d){return C.fLK(A.Z(d,x.N,x.z))},
$S:z+19}
C.fbQ.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fbR.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+68}
C.foy.prototype={
$1(d){return d.ad()},
$S:z+12}
C.fwa.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.f9t.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bIx.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eQ(e,v)?v:null},
$S:1872}
C.fp3.prototype={
$1(d){var w=this
return new C.X7(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+50}
C.cZH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZG(w,d))},
$S:z+65}
C.cZG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZv.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cs(u)?v.r>=J.a9(v.d):w)v.r=J.a9(v.d)-1},
$S:0}
C.cZs.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cZ5.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cZ6.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.cZw.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cZc.prototype={
$1(d){var w=null,v=A.L(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eo(A.a([A.bG(!1,B.de,w,w,!0,w,w,new C.cZa(d),w,w),A.bJ(B.vd,new C.cZb(d),A.bk(B.mm,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.cZa.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZb.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cZd.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.cZt.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+16}
C.cZu.prototype={
$0(){return B.d.gI(D.xt)},
$S:z+11}
C.cZe.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WG(v,u,J.a9(w.d),null)},
$S:z+35}
C.cZf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZF.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aJ(s,new C.Wn(r.y,r.gDW(0),J.a9(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cZD(r),s,s,s,s,s,s,!1,B.af)
else{w=e-1
v=J.q(r.d,w)
J.a9(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6c(v,e,w,u,t,r.gbII(),s)
w=t}return A.c4(q,new C.cZE(r,e),new A.C(B.Vd,w,s))},
$S:1873}
C.cZE.prototype={
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
return A.fl(B.a1,A.d4(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.cZD.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCy(B.oR,B.id)},
$S:0}
C.cZp.prototype={
$0(){var w=this.a
return w.n(new C.cZo(w))},
$S:0}
C.cZo.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZq.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).K(null)
return null},
$S:0}
C.cZ7.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.iQ.j(0.5),r=x.p,q=A.a([D.eQI,B.aa],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ci(p.d)?"Write this book":"Write a new book"
q.push(p.WH(d,B.dO,w,J.ci(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WH(d,L.afI,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cs(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.jv.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.jv.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WH(d,W.agM,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WH(d,B.p8,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WH(d,B.p8,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eA(u,E.zb,A.br(!0,new A.C(Z.Dz,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.ade,B.cZ,u,new A.b5(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.cZr.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.cZi.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cs(w.d)
return new C.X9(v,J.cs(w.d),w.r+1,null)},
$S:z+63}
C.cZj.prototype={
$1(d){var w=null
return A.nU(!1,A.eo(w,w,w,E.zb,new A.k1(this.a,new C.cZh(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:265}
C.cZh.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3f,B.nC,A.D(A.d(e,w,w,w,w,w,w,B.ir,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.cZk.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZl.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZm.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zG(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.a0m(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.cZg(s,t))
w=4
return A.b(s.kp(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZg.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZy.prototype={
$1(d){var w=null
return A.nU(!1,A.eo(w,w,w,E.zb,new A.k1(this.a,new C.cZx(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:265}
C.cZx.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3f,B.nC,A.D(A.d(e,w,w,w,w,w,w,B.ir,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.cZz.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZA.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZB.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZC.prototype={
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
C.cZ8.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bbB(B.oR,R.Jx)},
$S:0}
C.cZ9.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCy(B.oR,R.Jx)},
$S:0}
C.d07.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d08.prototype={
$1(d){var w=this.a
return w.n(new C.d06(w))},
$S:9}
C.d06.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d09.prototype={
$1(d){var w=this.a
return w.n(new C.d05(w))},
$S:9}
C.d05.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d0a.prototype={
$1(d){var w=this.a
return w.n(new C.d04(w))},
$S:9}
C.d04.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d0b.prototype={
$0(){var w=this.a
return w.n(new C.d03(w,this.b))},
$S:0}
C.d03.prototype={
$0(){var w=this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d0c.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_b()
A.a7(this.b,!1).K(new A.bky(w,v))},
$S:0}
C.cZW.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cZV.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.X5(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+62}
C.d__.prototype={
$1(d){return d.a===this.a},
$S:z+61}
C.cZZ.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b23(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.eo(A.a([A.bG(!1,B.de,v,v,!0,v,v,new C.cZX(d),v,v),A.bJ(B.vd,new C.cZY(d),A.bk(B.mm,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zb,w,v,v,v,v,D.ePG,v)},
$S:20}
C.cZX.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZY.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.d_0.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d_1.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a3(s,t,w[u],t))
return A.cf(A.cb(B.bH,r,B.bw,18,14),B.q,t,B.z,t,D.bfZ,t,t,B.ah)},
$S:309}
C.cZU.prototype={
$0(){return this.a.Oe(0,this.b)},
$S:0}
C.cZT.prototype={
$0(){return this.a.NJ(0,this.b)},
$S:0}
C.cyy.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+16}
C.cyz.prototype={
$0(){return B.d.gI(D.xt)},
$S:z+11}
C.cyA.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bU(0,new A.C(d,A.bQ(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.b7),w),0,0,0)},
$S:1875}
C.cS_.prototype={
$1(d){return this.a.n(new C.cRZ(this.b,this.c))},
$S:9}
C.cRZ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cSo.prototype={
$1(d){return this.a.n(new C.cSb())},
$S:2}
C.cSb.prototype={
$0(){},
$S:0}
C.cSp.prototype={
$1(d){return this.a.n(new C.cSa())},
$S:2}
C.cSa.prototype={
$0(){},
$S:0}
C.cSq.prototype={
$0(){var w=this.a
return w.n(new C.cS9(w,this.b))},
$S:0}
C.cS9.prototype={
$0(){var w=this.a
return w.d=w.gns().Ej(this.b.a)},
$S:0}
C.cSr.prototype={
$0(){var w=this.a
return w.n(new C.cS8(w,this.b))},
$S:0}
C.cS8.prototype={
$0(){var w=this.a
return w.d=w.gns().cxx(this.b)},
$S:0}
C.cSs.prototype={
$1(d){return this.a.n(new C.cS7())},
$S:2}
C.cS7.prototype={
$0(){},
$S:0}
C.cSt.prototype={
$0(){var w=this.a
return w.n(new C.cS6(w,this.b))},
$S:0}
C.cS6.prototype={
$0(){var w=this.a
return w.d=w.gns().cxC(this.b.a)},
$S:0}
C.cSu.prototype={
$1(d){var w=this.a
return w.n(new C.cSj(w,d))},
$S:6}
C.cSj.prototype={
$0(){var w=this.a
return w.d=w.gns().cyv(this.b)},
$S:0}
C.cSv.prototype={
$1(d){var w=this.a
return w.d=w.gns().azK(d)},
$S:2}
C.cSw.prototype={
$1(d){var w=this.a
return w.d=w.gns().cxF(d)},
$S:2}
C.cSy.prototype={
$1(d){var w=this.a
return w.d=w.gns().cyt(d)},
$S:2}
C.cSz.prototype={
$1(d){var w=this.a
return w.n(new C.cSi(w,d))},
$S:9}
C.cSi.prototype={
$0(){var w=this.a
return w.d=w.gns().cyk(this.b)},
$S:0}
C.cSA.prototype={
$0(){var w=this.a,v=w.gns(),u=B.a.i(w.gDW(0).a.a),t=B.a.i(w.gax3().a.a)
u=v.b6z(B.a.i(w.ganm().a.a),t,u)
A.a7(this.b,!1).K(u)
return null},
$S:0}
C.dKq.prototype={
$0(){var w=this.a
w.v_()
w.a.bm()
w.a.p_()},
$S:0}
C.dKp.prototype={
$0(){var w=this.a
w.v_()
w.a.bm()
w.a.p_()},
$S:0}
C.dKs.prototype={
$0(){var w=this,v=w.b
if(J.cs(v)||J.ci(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dKt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKu.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dKo.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dKr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dKw.prototype={
$0(){this.a.MN()
return null},
$S:0}
C.dKv.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.dJR.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bG(!1,B.de,w,w,!0,w,w,new C.dJP(d),w,w),r=A.bk(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eo(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dJQ(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dJP.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJQ.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dJS.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cy_(this.b)},
$S:0}
C.dJM.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOi(w.b,w.c,w.d)},
$S:8}
C.dJk.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dJl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.EX(t.a.c),$async$$0)
case 2:s=r.qD(q.dF(e,new C.dJx(t)))
if(s!=null&&t.c!=null)t.n(new C.dJy(t,s))
t.a.bm()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJx.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJA.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJL.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cyM(C.h_E(w),w)},
$S:0}
C.dJJ.prototype={
$1(d){return new A.ed(new C.dJI(this.a,this.b),null)},
$S:21}
C.dJI.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahp,v,v,v,p>0?new C.dJE(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aN,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.ahY,v,v,v,new C.dJF(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.eo(A.a([A.bG(!1,B.de,v,v,!0,v,v,new C.dJG(d),v,v),A.bJ(B.pB,new C.dJH(d),A.bk(B.bR,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:162}
C.dJE.prototype={
$0(){return this.b.$1(new C.dJD(this.a))},
$S:0}
C.dJD.prototype={
$0(){return--this.a.a},
$S:0}
C.dJF.prototype={
$0(){return this.b.$1(new C.dJC(this.a))},
$S:0}
C.dJC.prototype={
$0(){return++this.a.a},
$S:0}
C.dJG.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJH.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dJK.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cyA(this.a.a)
w.r.a8(0)},
$S:0}
C.dJ8.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.af8(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fUz(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+13}
C.dJ9.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.f,x.P)
w.push(this.b)
v.d=u.azH(w)},
$S:0}
C.dJU.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaF(this.b,w,this.c,null)},
$S:z+31}
C.dJO.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.kY,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.aa,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.eo(A.a([A.bJ(D.eZE,new C.dJN(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b4,w,u,v,w,s,w,new A.b5(t,B.W),r,w)},
$S:20}
C.dJN.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dJa.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dJb.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dJc.prototype={
$1(d){return d.a},
$S:z+7}
C.dJd.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hP(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.azH(w)},
$S:0}
C.dJh.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.af8(q)
w=A.T(q).k("a5<1>")
q=A.A(new A.a5(q,new C.dJf(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fUz(v.e,null,r,v.f,v.r,new C.dJg(s,r),q,"Member Profile",w,t,u)},
$S:z+13}
C.dJg.prototype={
$0(){return this.a.a7d(this.b)},
$S:0}
C.dJf.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dJi.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hP>")
w=A.A(new A.J(w,new C.dJe(this.b),v),v.k("ai.E"))
u.d=t.azH(w)},
$S:0}
C.dJe.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+24}
C.dJT.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dJu.prototype={
$1(d){return d.length!==0},
$S:3}
C.dJv.prototype={
$1(d){var w=this
return new A.ed(new C.dJt(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dJt.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dJp(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(12),B.da),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ae,v,v,v,v,v,B.lB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.u(p,B.ad,v,B.e,B.R,0,B.p)
t=w.a
return A.eo(A.a([A.bG(!1,B.de,v,v,!0,v,v,new C.dJq(d),v,v),A.bJ(B.Hj,new C.dJr(t,u,o,e),A.bk(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.eNW,new C.dJs(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a3(360,v,p,v),v,v,v,v,r,v)},
$S:162}
C.dJp.prototype={
$1(d){var w=null
return A.dK(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bAN,w,w,w,new C.dJo(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1876}
C.dJo.prototype={
$0(){return this.a.$1(new C.dJm(this.b,this.c))},
$S:0}
C.dJm.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dJq.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJr.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dJn(w.c,u))
v.bG(0,B.c_)}},
$S:0}
C.dJn.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dJs.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).K(!0)},
$S:0}
C.dJw.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.czd(this.b,D.rH,C.EV(v,w.a.c))},
$S:0}
C.dK0.prototype={
$1(d){return d.as},
$S:z+1}
C.dK1.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.dK2.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hNo(v)
return w.TK(v==null?null:v.a)},
$S:0}
C.dK3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hqJ(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcf(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.chR(new A.ap(u,t),v.gbco(),new A.ap(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cxe:D.cvR
q=A.H(s?B.du:D.b11,B.r,1)
p=A.m(22)
o=A.bU(0,A.b2(m,m,m,new C.b9x(s,m),B.as),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.am(B.V,m,B.a9,B.q,A.a([o,A.bU(0,A.tK(new A.M(n,n,n,n),new A.a3(u,t,new C.bao(l.d,v,l.f,w,new C.dJX(l),l.gc2o(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.bru(s,new C.dJY(l,e),new C.dJZ(l,e),new C.dK_(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.h,m,m,new A.o(m,m,q,k,m,new A.a8(B.b3,B.bb,B.x,r,m,m),B.n),m,m,m,O.ack,m,m,m,m)},
$S:229}
C.dJX.prototype={
$1(d){var w=this.a
w.n(new C.dJV(w,d))},
$S:2}
C.dJV.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.H(0,v)},
$S:0}
C.dJY.prototype={
$0(){var w=this.b
return this.a.b4h(1.25,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJZ.prototype={
$0(){var w=this.b
return this.a.b4h(0.8,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dK_.prototype={
$0(){var w=this,v=w.b
return w.a.aOi(new A.ap(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ap(w.c,w.d),w.e.gbco())},
$S:0}
C.dK4.prototype={
$0(){var w=this.a
return w.n(new C.dJW(w))},
$S:0}
C.dJW.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dJj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fC(new A.fu(s.c)),$async$$0)
case 2:t.wN("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_5.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.be5(u,C.h3G(v.c,u),new C.d_4(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+25}
C.d_4.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d_6.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhm(d.d,d.c,u.f.q(0,d.a),new C.d_3(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+26}
C.d_3.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fa1.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qD(new A.cQ(new A.a5(v,new C.fa2(d),w.k("a5<1>")),new C.fa3(),w.k("cQ<1,n>")))},
$S:z+22}
C.fa2.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fa3.prototype={
$1(d){return d.a},
$S:z+7}
C.fa_.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fa0.prototype={
$1(d){return d.b},
$S:z+7}
C.fa6.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qD(new A.cQ(new A.a5(v,new C.fa7(d),w.k("a5<1>")),new C.fa8(),w.k("cQ<1,n>")))},
$S:z+22}
C.fa7.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fa8.prototype={
$1(d){return d.a},
$S:z+7}
C.fa4.prototype={
$1(d){var w,v=A.eN([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.H(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+28}
C.fa5.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d_8.prototype={
$0(){return this.a},
$S:z+29}
C.d_p.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:248}
C.d_h.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d_i()),v=J.a6(w)
if(!v.q(w,e))v.H(w,e)},
$S:121}
C.d_i.prototype={
$0(){return A.a([],x.s)},
$S:729}
C.d_g.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eQ(w,e)
return w===!0},
$S:316}
C.d_9.prototype={
$0(){return A.a([],x.u)},
$S:z+30}
C.d_f.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d_e.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.H(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.AE:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.H(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.AE:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1878}
C.d_a.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d_j.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.H(0,a9)
w=a7.b
w.m(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.U:u)
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
t=J.aV(t==null?D.AE:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.be(w,new C.d_k(r)))w.push(r)}}B.d.bl(w,new C.d_l(a8))
B.d.aZ(w,new C.d_m())
q=C.hqI(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.e7o],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.m(0,a9,a8)
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
else j.push(d)}}a0=(B.d.gI(k)+B.d.gai(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bki(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1879}
C.d_k.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d_l.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d_m.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.d_n.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gG(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bf(v,A.a2(v).k("bf<2>")).cI(0,0,B.pN)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gG(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:651}
C.d_o.prototype={
$1(d){return 16+d*156},
$S:255}
C.d_7.prototype={
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
t=J.aV(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ii(d,new A.v(e+t,w),s,s.length))}},
$S:191}
C.d_b.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFB(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:121}
C.d_c.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.d_d.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_q.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_r.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:458}
C.d_s.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d_t.prototype={
$1(d){return d>=0.5},
$S:126}
C.eUU.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hJ(A.aH(!1,v,!0,new A.a3(38,38,A.V(d,this.a.c?B.c:B.d3,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1881}
C.ewz.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.C(B.o0,A.aH(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eAN,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.K3,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewy(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+33}
C.ewy.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.deG.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.deF.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mS,B.L,w,w)
return A.eo(A.a([A.bG(!1,B.de,w,w,!0,w,w,new C.deD(d),w,w),A.bG(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lM,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.deE(d),w,w)],x.p),B.b4,B.Dt,w,u,D.bhe,w,D.bj7,new A.b5(v,B.W),w,w)},
$S:20}
C.deD.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.deE.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.deP.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.deQ.prototype={
$1(d){var w=this.a
return w.n(new C.deO(w,d))},
$S:z+34}
C.deO.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deR.prototype={
$1(d){var w=null
return A.p8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deU.prototype={
$1(d){var w=this.a
return w.n(new C.deN(w,d))},
$S:30}
C.deN.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.deT.prototype={
$1(d){var w=null
return A.p8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deV.prototype={
$1(d){var w=this.a
return w.n(new C.deM(w,d))},
$S:30}
C.deM.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.deW.prototype={
$0(){var w=this.a
return w.n(new C.deL(w))},
$S:0}
C.deL.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.deX.prototype={
$0(){var w=this.a
return w.n(new C.deK(w))},
$S:0}
C.deK.prototype={
$0(){return++this.a.at},
$S:0}
C.deY.prototype={
$0(){var w=this.a
return w.n(new C.deJ(w))},
$S:0}
C.deJ.prototype={
$0(){return--this.a.ax},
$S:0}
C.deZ.prototype={
$0(){var w=this.a
return w.n(new C.deI(w))},
$S:0}
C.deI.prototype={
$0(){return++this.a.ax},
$S:0}
C.df_.prototype={
$1(d){var w=this.a
return w.n(new C.deH(w,d))},
$S:9}
C.deH.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.deS.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.df0.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bR
else u=(q.c.a?B.dT:B.cg).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bm:B.bv
t=A.V(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bm:B.bv
return A.D(A.aD(!1,B.X,!0,r,A.aH(!1,o,!0,A.dg(r,A.u(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b9,new A.o(w,r,u,v,r,r,B.n),B.eD,r,r,r,B.jB,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.df1(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+36}
C.df1.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dfa.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.c2D.prototype={
$2(d,e){return new A.bq(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c2K.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c2L.prototype={
$2(d,e){var w=J.b4(e,new C.c2J(),x.a)
w=A.A(w,w.$ti.k("ai.E"))
return new A.bq(d,w,x.d2)},
$S:z+38}
C.c2J.prototype={
$1(d){return d.ad()},
$S:z+12}
C.c2F.prototype={
$1(d){return C.ahX(A.Z(d,x.N,x.z))},
$S:z+8}
C.c2G.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c2H.prototype={
$1(d){return C.fLK(A.Z(d,x.N,x.z))},
$S:z+19}
C.c2I.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c2P.prototype={
$1(d){return new A.aCH(d.f.length,d.a,d.b)},
$S:z+40}
C.c2Q.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:564}
C.c2M.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c2N.prototype={
$1(d){return d.cyc(C.EV(d,this.a))},
$S:z+41}
C.dKd.prototype={
$1(d){return C.ti(d,this.a.a.c)},
$S:z+2}
C.dKe.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dKi.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dKj.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dKa.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWk(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xi("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oA(r.c,r.e),$async$$0)
case 4:s.xi(p)
w=5
return A.b(s.I3(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWk(r.d,q,r.e,t.b),$async$$0)
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
C.dKc.prototype={
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
return A.b(o.I3(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a4(j)
o=r.a
if(o.c==null){w=1
break}o.xi(B.a.e1(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dKh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWj(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xi("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).cr(A.eG(new C.dKg(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oA(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKg.prototype={
$1(d){var w=this.b
return new C.Y3(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+42}
C.dKf.prototype={
$1(d){return D.fc4},
$S:z+43}
C.dKl.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKm.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dKk(w,d)
return new A.C(B.d7,new C.bas(this.b,d.c,d.a,w,null),null)},
$S:1882}
C.dKk.prototype={
$0(){return this.a.Vo(this.b.b)},
$S:0}
C.dK5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dK6.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dK7.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dK8.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dK9.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKn.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dm(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).K(s)
return}},
$S:176}
C.dwF.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+44}
C.dwG.prototype={
$0(){return B.d.gI(D.a_w)},
$S:z+45}
C.dwH.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.as(A.V(this.b.d,B.c.j(0.95),w,w,D.cCY,44),w,w,w),w,w,new C.bfc(u,t,v,w),B.as)},
$S:75}
C.fpw.prototype={
$1(d){return A.p7(new C.fpv(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.fpv.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.aa(0,B.G,B.w.j(r?0.35:0.08),B.tm,24)],x.V),o=r?B.dT:B.cg
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bR.j(0.18)],x.O)
w=A.p(t,D.bvs,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a1,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aO:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.T,o,new A.C(E.adi,A.B(A.a([w,B.ba,A.D(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bm:B.bv,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ig(!0,t,e,B.z,D.eor,new C.fpu(this.b,s),20,B.acT,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.kg,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fpu.prototype={
$2(d,e){var w=null,v=D.a_w[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dT:B.cg,B.r,1),q=A.a([new A.aa(0,B.G,B.w.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.D(new C.a3W(v.a,!0,w),1),n=s?B.j8:B.iz,m=A.d(v.b,w,1,B.Z,w,w,w,A.l(w,w,s?B.aO:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.X,!0,w,A.aH(!1,u,!0,A.eq(A.bu(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.Z,w,w,w,A.l(w,w,s?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.kW,w,w,w)],l),B.ad,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fpt(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:73}
C.fpt.prototype={
$0(){A.a7(this.a,!1).K("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cag.prototype={
$0(){return this.a.acV(this.b)},
$S:0}
C.foW.prototype={
$1(d){return D.f8Q},
$S:z+46}
C.fw2.prototype={
$1(d){var w=this
return new C.ZN(w.a,w.b,w.c,w.d,null)},
$S:z+71}
C.foY.prototype={
$1(d){return new C.WI(this.a,null)},
$S:z+48}
C.foX.prototype={
$1(d){return D.f9P},
$S:z+49}
C.cSM.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cSL(w,d))},
$S:30}
C.cSL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cSO.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cSP.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSI.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSJ.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cSK.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqu.prototype={
$0(){},
$S:0}
C.cqA.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqB.prototype={
$0(){return this.a.aJT(-1)},
$S:0}
C.cqC.prototype={
$1(d){return this.a.n(new C.cqz())},
$S:2}
C.cqz.prototype={
$0(){},
$S:0}
C.cqD.prototype={
$0(){return this.a.aJT(1)},
$S:0}
C.cqE.prototype={
$1(d){return this.a.n(new C.cqy())},
$S:2}
C.cqy.prototype={
$0(){},
$S:0}
C.cqF.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dT:B.cg
return A.tA(u,u,B.aW,r,u,new C.cqx(t,d),B.zL,s,w,u,new A.ax(v,1,B.r,-1),B.c6)},
$S:1883}
C.cqx.prototype={
$1(d){var w=this.a
return w.n(new C.cqv(w,this.b))},
$S:9}
C.cqv.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cqG.prototype={
$1(d){return this.a.n(new C.cqw())},
$S:2}
C.cqw.prototype={
$0(){},
$S:0}
C.cqH.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUm.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).K(w)},
$S:2}
C.eUn.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUo.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).K(w)},
$S:0}
C.eUk.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbso()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b2(new A.C(D.bj6,new A.en(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.brj(p,v,this.b.a,u,t,r),r,r,B.as)},
$S:75}
C.eUl.prototype={
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
s=A.aq(B.aS,B.bR,w)
s.toString
s=A.a([B.aW,s,B.aS],x.O)
return A.aD(!1,B.X,!0,p,A.aH(!1,v,!0,A.eq(D.dLG,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.d3(-1.2+t,-0.5),new A.d3(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
$S:125}
C.fnP.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.etJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etA.prototype={
$0(){return this.a.e=!0},
$S:0}
C.etB.prototype={
$0(){return this.a.e=!1},
$S:0}
C.etH.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.ed(new C.etG(w,this.b),null)},
$S:21}
C.etG.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eA(w,u,new A.C(B.adc,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aa,C.fRp(new C.etD(r,e),r.a),B.ay,A.B(A.a([A.D(A.dU(B.de,new C.etE(d),w),1),B.av,A.D(A.bJ(B.R9,new C.etF(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ad,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(t,B.W),w)},
$S:97}
C.etD.prototype={
$1(d){return this.b.$1(new C.etC(this.a,d))},
$S:30}
C.etC.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.etE.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etF.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).K(w)
return null},
$S:0}
C.etI.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QO(this.b)},
$S:0}
C.etv.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.d,x.Q)
w.push(this.b)
v.d=u.b67(w)},
$S:0}
C.etz.prototype={
$1(d){return this.beO(d)},
beO(d){var w=0,v=A.j(x.H),u,t=this,s
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
C.ety.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a5<1>")
w=A.A(new A.a5(w,new C.etx(this.b),v),v.k("G.E"))
u.d=t.b67(w)},
$S:0}
C.etx.prototype={
$1(d){return d.a!==this.a.a},
$S:z+17}
C.etK.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.etL.prototype={
$1(d){return this.a.bwj(d,this.b)},
$S:z+52}
C.etw.prototype={
$0(){return this.a.a7c(this.b)},
$S:0}
C.fvV.prototype={
$1(d){return new C.ab_(this.a,this.b,this.c,null)},
$S:z+53}
C.etN.prototype={
$0(){return this.a.XW(this.b)},
$S:0}
C.etO.prototype={
$0(){return this.a.Oa(this.b)},
$S:0}
C.etP.prototype={
$0(){return this.a.D5(this.b)},
$S:0}
C.etQ.prototype={
$0(){return this.a.XX(this.b)},
$S:0}
C.etM.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etr.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.ets.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.ett(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ett.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.euc.prototype={
$2(d,e){return d+e.gw1()},
$S:z+56}
C.eu8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eu9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.etU.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bvS,B.h,v,v,new A.o(B.aH.j(u?0.18:0.08),v,A.H(B.aH.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aO:B.aG
u=u?B.dT:B.cg
w=x.p
return A.eA(v,t,new A.C(B.wu,A.u(A.a([r,B.aN,q,B.P,p,B.d1,A.B(A.a([A.D(A.dU(B.mW,new C.etS(d),A.d9(v,v,v,v,v,v,v,v,v,o,v,v,B.eU,v,new A.b5(A.m(14),B.W),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.av,A.D(A.bJ(D.f22,new C.etT(d),A.bk(B.aH,v,v,v,v,v,B.eU,v,new A.b5(A.m(14),B.W),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cZ,v,new A.b5(s,B.W),v)},
$S:46}
C.etS.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.etT.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.eu2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.aa(0,B.G,B.w.j(k?0.35:0.08),B.fz,28)],x.V),g=k?D.cJ2:B.ZX,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.ej8,B.au,new A.bE(B.a1,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cp,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.adf,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b_w(B.b0,B.iF,new C.eu_(v,d),l,"Camera import","Scan QR"),1),B.av,A.D(v.b_w(B.cB,M.x8,new C.eu0(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aH.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aH.j(0.28),B.r,1)
o=A.p(m,D.bvh,B.h,m,m,new A.o(B.aH.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aO:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.br(!0,new A.C(B.ub,A.p(m,A.u(A.a([g,new A.C(B.add,A.u(A.a([w,B.T,u,B.bs,t,B.T,A.aD(!1,B.X,!0,m,A.aH(!1,s,!0,A.p(m,A.B(A.a([o,B.ba,n,A.V(B.ek,k?B.bm:B.bv,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bA,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eu1(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:33}
C.eu_.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uC("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eu0.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uC("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eu1.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.M5(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etY.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.aa(0,B.G,B.w.j(o?0.35:0.08),B.eH,24)],x.V),k=o?B.dT:B.cg
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bm:B.bv
u=A.bu(w,new A.a3(48,48,C.aMG(!0,A.m(12),48,P.KC,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.Z,q,q,q,A.l(q,q,o?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zx(v.gw1())
s=x.p
r=this.a
return A.br(!0,new A.C(B.ub,A.p(q,A.u(A.a([B.T,k,new A.C(D.ada,A.B(A.a([u,B.ba,A.D(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zp,r.ccg(B.rZ,B.aS,new C.etW(d),p,"QR code or backup file","Transfer project"),r.aXB(!0,B.e4,B.aH,new C.etX(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:33}
C.etW.prototype={
$0(){A.a7(this.a,!1).K("transfer")
return null},
$S:0}
C.etX.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
C.etZ.prototype={
$1(d){return this.beP(d)},
beP(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Js(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uO(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.euf.prototype={
$0(){var w=this.a
w.a.bm()
w.n(new C.eue(w))},
$S:0}
C.eue.prototype={
$0(){return this.a.r++},
$S:0}
C.eug.prototype={
$0(){var w=this.a
return w.n(new C.eud(w))},
$S:0}
C.eud.prototype={
$0(){return this.a.r++},
$S:0}
C.etR.prototype={
$0(){var w=this.a.c
w.toString
return A.iC(w,null)},
$S:0}
C.etV.prototype={
$0(){return this.a.c5O(this.b)},
$S:0}
C.eub.prototype={
$0(){var w=this.a
return w.n(new C.eua(w,this.b))},
$S:0}
C.eua.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eu5.prototype={
$0(){return this.a.uC("scan")},
$S:0}
C.eu6.prototype={
$0(){return this.a.uC("file")},
$S:0}
C.eu7.prototype={
$1(d){return this.a.cch(d,this.b)},
$S:z+57}
C.eu4.prototype={
$0(){return this.a.D9(this.b)},
$S:0}
C.eu3.prototype={
$0(){return this.a.Yp(this.b,this.c)},
$S:0}
C.cpW.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+58}
C.cpV.prototype={
$1(d){return d.ad()},
$S:z+59}
C.cpT.prototype={
$1(d){return C.h9r(A.Z(d,x.N,x.z))},
$S:z+60}
C.cpU.prototype={
$1(d){return d.a.length!==0},
$S:z+17}
C.f9l.prototype={
$1(d){return d.y===D.jY},
$S:z+2}
C.fwi.prototype={
$1(d){return C.bx1(d,this.a)},
$S:z+2}
C.f8x.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bIC.prototype={
$1(d){return!d.as},
$S:z+1}
C.bIB.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bIy.prototype={
$1(d){return C.fLL(A.Z(d,x.N,x.z))},
$S:z+14}
C.bIz.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bIA.prototype={
$1(d){return J.k(d)},
$S:17}
C.f0I.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.eXA.prototype={
$1(d){return C.fCv(A.Z(d,x.N,x.z))},
$S:z+64}
C.eXB.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eXC.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.foN.prototype={
$1(d){return J.k(d)},
$S:17}
C.foO.prototype={
$1(d){return d.a},
$S:z+66}
C.foP.prototype={
$1(d){return d.length!==0},
$S:3}
C.foQ.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.foR.prototype={
$1(d){return d.QO(null).ad()},
$S:z+67}
C.fwg.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.f9N.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fbV.prototype={
$1(d){return C.ahX(A.Z(d,x.N,x.z))},
$S:z+8}
C.fbW.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fbX.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fbY.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fbZ.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.foA.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.fwb.prototype={
$1(d){return C.ahX(A.Z(d,x.N,x.z))},
$S:z+8}
C.fwc.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwd.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f9u.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.f9v.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fwm.prototype={
$1(d){return!d.as},
$S:z+1}
C.f95.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.f96.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.f97.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.fw3.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fcG.prototype={
$1(d){return d.Q},
$S:z+69}
C.fow.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fbS.prototype={
$1(d){return C.ahX(A.Z(d,x.N,x.z))},
$S:z+8}
C.fbT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fbU.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fou.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eY5.prototype={
$1(d){return d.length!==0},
$S:3}
C.eY6.prototype={
$1(d){return C.fLL(A.Z(d,x.N,x.z))},
$S:z+14}
C.eY7.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eY8.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eY9.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYm.prototype={
$2(d,e){return d.eL(new C.eYn(e))},
$S:1884}
C.eYn.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c2},
$S:1885}
C.eYj.prototype={
$1(d){return C.hv9(d,this.a)},
$S:z+70}
C.eYk.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eYl.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f1m.prototype={
$1(d){return d.a},
$S:z+47}
C.f1n.prototype={
$1(d){return d.length!==0},
$S:3}
C.f1o.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f3o.prototype={
$1(d){return d.ad()},
$S:z+5}
C.f7U.prototype={
$1(d){return C.fWO(d,C.EV(d,this.a))},
$S:z+5}
C.f7V.prototype={
$1(d){return C.fWP(d,C.EV(d,this.a))},
$S:z+5};(function aliases(){var w=C.aHV.prototype
w.boL=w.p
w=C.aK0.prototype
w.br2=w.p
w=C.aK1.prototype
w.br3=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azz.prototype,"gc9j","c9k",23)
var s
w(s=C.awG.prototype,"gc2u","c2v",27)
v(s,"gaI9","LF",0)
v(s,"gchc","DC",0)
v(s,"gbDR","Mj",0)
v(s,"gcuF","xj",0)
v(s,"gcbf","Z4",0)
v(s,"gbEh","US",0)
w(s,"gbII","bIJ",39)
v(s,"gbu_","yN",0)
v(C.awH.prototype,"gcuB","E1",0)
v(s=C.aA9.prototype,"gacx","uP",0)
v(s,"gc55","Yh",0)
v(s,"gaM8","Gx",0)
v(s=C.aA6.prototype,"gcqY","a06",0)
v(s,"gacx","uP",0)
v(s,"gcfl","ZK",0)
v(s,"gc60","Yu",0)
w(s,"gc2o","c2p",51)
v(s,"gbE8","GC",0)
v(s,"gcrR","crS",3)
v(s,"gbUX","Wt",0)
w(s,"gc0V","c0W",37)
v(s,"gc4Q","c4R",3)
v(s=C.ayy.prototype,"gbZM","NK",0)
v(s,"gbZO","bZP",3)
v(s,"gbAQ","a6Q",0)
v(s=C.aA8.prototype,"gbHg","Vk",0)
v(s,"gbRq","VY",0)
v(s,"gcls","a_z",0)
v(s,"gchM","a_a",0)
v(C.aA7.prototype,"gchu","aeh",0)
v(C.apt.prototype,"gc0T","XV",0)
v(C.avt.prototype,"ga_R","ID",3)
v(C.avs.prototype,"ga_R","ID",3)
v(C.aue.prototype,"ga_R","ID",3)
v(s=C.aBz.prototype,"gaX_","OF",0)
v(s,"gbsR","TE",0)
v(s,"gc5P","c5Q",3)
w(C.aBy.prototype,"gc1J","c1K",54)
u(C.aBA.prototype,"gaM2",0,0,null,["$1","$0"],["Gw","bC5"],55,0,0)
t(C,"h2V","hEk",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alt,C.mM,C.FX,C.aca,C.NO,C.tz,C.Ii,C.Ef,C.baq,C.aFB,C.amD,C.d_u,C.lh,C.aPx,C.aPw,C.aNB,C.t5,C.qo,C.l1,C.hP,C.kl,C.aDB])
u(A.i1,[C.fgw,C.fgv,C.fgx,C.fpp,C.f6S,C.f6T,C.f6Y,C.fef,C.fee,C.fed,C.bX8,C.fpV,C.fpN,C.fpZ,C.f9C,C.dxl,C.dxg,C.dxh,C.dwU,C.dwQ,C.dxA,C.dxB,C.dxu,C.dxv,C.dxC,C.dxD,C.fbP,C.fbQ,C.foy,C.fwa,C.f9t,C.fp3,C.cZH,C.cZ5,C.cZc,C.cZt,C.cZe,C.cZ7,C.cZi,C.cZj,C.cZh,C.cZy,C.cZx,C.d08,C.d09,C.d0a,C.cZV,C.d__,C.cZZ,C.cyy,C.cyA,C.cS_,C.cSo,C.cSp,C.cSs,C.cSu,C.cSv,C.cSw,C.cSy,C.cSz,C.dKr,C.dJR,C.dJM,C.dJk,C.dJx,C.dJA,C.dJJ,C.dJ8,C.dJU,C.dJO,C.dJa,C.dJb,C.dJc,C.dJh,C.dJf,C.dJe,C.dJu,C.dJv,C.dJp,C.dK0,C.dJX,C.d_5,C.d_6,C.fa1,C.fa2,C.fa3,C.fa_,C.fa0,C.fa6,C.fa7,C.fa8,C.fa4,C.fa5,C.d_p,C.d_f,C.d_a,C.d_k,C.d_l,C.d_o,C.d_c,C.d_r,C.d_s,C.d_t,C.eUU,C.ewz,C.deF,C.deP,C.deQ,C.deR,C.deU,C.deT,C.deV,C.df_,C.df0,C.c2K,C.c2J,C.c2F,C.c2G,C.c2H,C.c2I,C.c2P,C.c2M,C.c2N,C.dKd,C.dKg,C.dKf,C.dKm,C.dKn,C.dwF,C.fpw,C.foW,C.fw2,C.foY,C.foX,C.cSN,C.cSO,C.cSJ,C.cqC,C.cqE,C.cqF,C.cqx,C.cqG,C.eUm,C.fnP,C.etH,C.etD,C.etz,C.etx,C.etL,C.fvV,C.etU,C.eu2,C.etY,C.etZ,C.eu7,C.cpV,C.cpT,C.cpU,C.f9l,C.fwi,C.f8x,C.bIC,C.bIB,C.bIy,C.bIz,C.bIA,C.eXA,C.eXB,C.foN,C.foO,C.foP,C.foQ,C.foR,C.fwg,C.f9N,C.fbV,C.fbW,C.fbY,C.fbZ,C.foA,C.fwb,C.fwc,C.fwd,C.f9u,C.f9v,C.fwm,C.f95,C.f96,C.fw3,C.fcG,C.fow,C.fbS,C.fbT,C.fou,C.eY5,C.eY6,C.eY7,C.eY8,C.eY9,C.eYn,C.eYj,C.eYk,C.f1m,C.f1n,C.f3o,C.f7U,C.f7V])
u(A.ar,[C.aUS,C.Wn,C.b6c,C.bao,C.be5,C.bru,C.bhm,C.aaE,C.be4,C.aaD,C.be3,C.ayz,C.aEE,C.aaF,C.I7,C.bap,C.a9W,C.ban,C.bas,C.aUQ,C.apt,C.ab_])
u(A.n4,[C.b6O,C.b7Z,C.b7Q,C.aDw,C.bd8,C.bar,C.b9x,C.bfc,C.brj])
u(A.jk,[C.fpS,C.fpT,C.fpU,C.fpL,C.fpM,C.fpX,C.fpY,C.dxx,C.dxj,C.dxm,C.dx0,C.dx1,C.dx2,C.dx_,C.dx7,C.dwZ,C.dx8,C.dx9,C.dwY,C.dxa,C.dwX,C.dxb,C.dwW,C.dxc,C.dwO,C.dwP,C.dwV,C.dxd,C.dwT,C.dxe,C.dwS,C.dx3,C.dwR,C.dx4,C.dwN,C.dx5,C.dx6,C.dxy,C.dxz,C.dxn,C.dxo,C.dxp,C.dxq,C.dxr,C.dxs,C.dxt,C.dxF,C.dxw,C.cZG,C.cZv,C.cZs,C.cZ6,C.cZw,C.cZa,C.cZb,C.cZd,C.cZu,C.cZf,C.cZD,C.cZp,C.cZo,C.cZq,C.cZr,C.cZk,C.cZm,C.cZn,C.cZg,C.cZz,C.cZC,C.cZ8,C.cZ9,C.d07,C.d06,C.d05,C.d04,C.d0b,C.d03,C.d0c,C.cZW,C.cZX,C.cZY,C.d_0,C.cZU,C.cZT,C.cyz,C.cRZ,C.cSb,C.cSa,C.cSq,C.cS9,C.cSr,C.cS8,C.cS7,C.cSt,C.cS6,C.cSj,C.cSi,C.cSA,C.dKq,C.dKp,C.dKs,C.dKt,C.dKu,C.dKo,C.dKw,C.dKv,C.dJP,C.dJQ,C.dJS,C.dJl,C.dJz,C.dJy,C.dJB,C.dJL,C.dJE,C.dJD,C.dJF,C.dJC,C.dJG,C.dJH,C.dJK,C.dJ9,C.dJN,C.dJd,C.dJg,C.dJi,C.dJT,C.dJo,C.dJm,C.dJq,C.dJr,C.dJn,C.dJs,C.dJw,C.dK1,C.dK2,C.dJV,C.dJY,C.dJZ,C.dK_,C.dK4,C.dJW,C.dJj,C.d_4,C.d_3,C.d_8,C.d_i,C.d_9,C.ewy,C.deG,C.deD,C.deE,C.deO,C.deN,C.deM,C.deW,C.deL,C.deX,C.deK,C.deY,C.deJ,C.deZ,C.deI,C.deH,C.deS,C.df1,C.dfa,C.dKe,C.dKi,C.dKj,C.dKa,C.dKb,C.dKc,C.dKh,C.dKl,C.dKk,C.dK5,C.dK6,C.dK7,C.dK8,C.dK9,C.dwG,C.fpt,C.cag,C.cSM,C.cSL,C.cSP,C.cSI,C.cSK,C.cqu,C.cqA,C.cqB,C.cqz,C.cqD,C.cqy,C.cqv,C.cqw,C.cqH,C.eUn,C.eUo,C.etJ,C.etA,C.etB,C.etC,C.etE,C.etF,C.etI,C.etv,C.ety,C.etK,C.etw,C.etN,C.etO,C.etP,C.etQ,C.etM,C.etq,C.etr,C.ets,C.etu,C.ett,C.eu8,C.eu9,C.etS,C.etT,C.eu_,C.eu0,C.eu1,C.etW,C.etX,C.euf,C.eue,C.eug,C.eud,C.etR,C.etV,C.eub,C.eua,C.eu5,C.eu6,C.eu4,C.eu3])
u(A.ae,[C.alA,C.X5,C.X9,C.X7,C.WG,C.amG,C.amA,C.XJ,C.amE,C.Y3,C.Y4,C.a3W,C.WI,C.WH,C.We,C.ZN,C.E3,C.au7,C.aps,C.apm,C.apr,C.Mb])
u(A.ag,[C.azz,C.awG,C.baG,C.awH,C.b7X,C.aA9,C.aA6,C.ayy,C.aA8,C.aA7,C.bfu,C.aHV,C.avt,C.avs,C.aue,C.brm,C.aK0,C.aK1,C.aBz,C.bgQ,C.aBy,C.bt4])
u(A.kw,[C.dxi,C.dxk,C.dxf,C.dxE,C.fbR,C.bIx,C.cZF,C.cZE,C.cZl,C.cZA,C.cZB,C.d_1,C.dJI,C.dJt,C.dK3,C.d_h,C.d_g,C.d_e,C.d_j,C.d_m,C.d_n,C.d_7,C.d_b,C.d_d,C.d_q,C.c2D,C.c2L,C.c2Q,C.dwH,C.fpv,C.fpu,C.eUk,C.eUl,C.etG,C.euc,C.cpW,C.f0I,C.eXC,C.fbX,C.f97,C.fbU,C.eYm,C.eYl,C.f1o])
t(C.bfd,C.aHV)
u(A.mb,[C.a9_,C.aGi,C.FY,C.ahW,C.cpX,C.cpY])
t(C.brk,C.aK0)
t(C.brl,C.aK1)
t(C.aBA,C.bt4)
t(C.b4H,A.b4w)
t(C.brn,A.a3B)
t(C.b4G,C.brn)
w(C.aHV,A.eI)
w(C.aK0,A.ca)
w(C.aK1,A.ca)
v(C.bt4,A.eu)
v(C.brn,A.iQ)})()
A.kd(b.typeUniverse,JSON.parse('{"aUS":{"ar":[],"r":[]},"b6O":{"az":[]},"alA":{"ae":[],"r":[]},"azz":{"ag":["alA"]},"X5":{"ae":[],"r":[]},"X9":{"ae":[],"r":[]},"X7":{"ae":[],"r":[]},"WG":{"ae":[],"r":[]},"awG":{"ag":["X5"]},"baG":{"ag":["X9"]},"awH":{"ag":["X7"]},"Wn":{"ar":[],"r":[]},"b7Z":{"az":[]},"b7Q":{"az":[]},"b7X":{"ag":["WG"]},"aDw":{"az":[]},"bd8":{"az":[]},"b6c":{"ar":[],"r":[]},"amG":{"ae":[],"r":[]},"amA":{"ae":[],"r":[]},"XJ":{"ae":[],"r":[]},"aaF":{"ar":[],"r":[]},"aA9":{"ag":["amG"]},"aA6":{"ag":["amA"]},"bao":{"ar":[],"r":[]},"bar":{"az":[]},"be5":{"ar":[],"r":[]},"b9x":{"az":[]},"bru":{"ar":[],"r":[]},"bhm":{"ar":[],"r":[]},"ayy":{"ag":["XJ"]},"aaE":{"ar":[],"r":[]},"be4":{"ar":[],"r":[]},"aaD":{"ar":[],"r":[]},"be3":{"ar":[],"r":[]},"ayz":{"ar":[],"r":[]},"aEE":{"ar":[],"r":[]},"I7":{"ar":[],"r":[]},"amE":{"ae":[],"r":[]},"Y3":{"ae":[],"r":[]},"Y4":{"ae":[],"r":[]},"aA8":{"ag":["amE"]},"bap":{"ar":[],"r":[]},"a9W":{"ar":[],"r":[]},"ban":{"ar":[],"r":[]},"bas":{"ar":[],"r":[]},"aA7":{"ag":["Y3"]},"bfu":{"ag":["Y4"]},"aUQ":{"ar":[],"r":[]},"a3W":{"ae":[],"r":[]},"bfd":{"ag":["a3W"]},"bfc":{"az":[]},"apt":{"ar":[],"r":[]},"WI":{"ae":[],"r":[]},"WH":{"ae":[],"r":[]},"We":{"ae":[],"r":[]},"ZN":{"ae":[],"r":[]},"avt":{"ag":["WI"]},"avs":{"ag":["WH"]},"aue":{"ag":["We"]},"brm":{"ag":["ZN"]},"E3":{"ae":[],"r":[]},"au7":{"ae":[],"r":[]},"brk":{"ag":["E3"]},"brl":{"ag":["au7"]},"brj":{"az":[]},"aps":{"ae":[],"r":[]},"aBz":{"ag":["aps"]},"ab_":{"ar":[],"r":[]},"apm":{"ae":[],"r":[]},"apr":{"ae":[],"r":[]},"bgQ":{"ag":["apm"]},"aBy":{"ag":["apr"]},"Mb":{"ae":[],"r":[]},"aBA":{"ag":["Mb"],"eu":[]},"b4G":{"iQ":[],"f4":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aA
return{e2:w("aNB"),Q:w("qo"),w:w("bt<n,n>"),c5:w("aPw"),dY:w("aPx"),d:w("ep<n?>"),e:w("FX"),B:w("mM"),P:w("hP"),k:w("kl"),x:w("au<~>"),f5:w("N<afS>"),V:w("N<aa>"),t:w("N<qo>"),O:w("N<x>"),ac:w("N<ep<n?>>"),I:w("N<mM>"),u:w("N<hP>"),_:w("N<kl>"),cl:w("N<au<ak<a0<n,@>>>>"),R:w("N<mP>"),cq:w("N<ak<+(Q,Q)>>"),ez:w("N<a0<n,aB>>"),gE:w("N<a0<n,n>>"),c7:w("N<a0<n,@>>"),fD:w("N<m0>"),bp:w("N<nO>"),g:w("N<v>"),v:w("N<hx>"),L:w("N<+(n,n)>"),G:w("N<+(Q,Q)>"),bF:w("N<+count,id,name(I,n,n)>"),A:w("N<cI>"),s:w("N<n>"),aS:w("N<iG>"),p:w("N<r>"),C:w("N<f4>"),D:w("N<l1>"),fp:w("N<NO>"),M:w("N<Ii>"),gZ:w("N<aDB>"),Y:w("N<aca>"),E:w("N<aFB>"),F:w("N<Q>"),dC:w("N<I>"),dS:w("N<az?>"),d4:w("N<n?>"),J:w("cn<ag<ae>>"),b:w("ak<mM>"),do:w("ak<hP>"),r:w("ak<kl>"),U:w("ak<a0<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(I,n,n)>"),h:w("ak<n>"),c:w("ak<l1>"),j:w("ak<@>"),fK:w("bq<n,n>"),d2:w("bq<n,ak<a0<n,@>>>"),a:w("a0<n,@>"),f:w("a0<@,@>"),gv:w("J<n,FZ>"),n:w("iA"),g2:w("qH"),bV:w("alt"),fL:w("cp"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(Q,ak<hP>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bm<Q>"),gc:w("dz"),b4:w("cv<I>"),W:w("k1<n>"),l:w("r"),cM:w("f4"),i:w("l1"),cc:w("Ef"),bw:w("aaD<n?>"),cy:w("Ik"),q:w("mz"),y:w("S"),gR:w("Q"),z:w("@"),S:w("I"),eK:w("ak<kl>?"),m:w("amD?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,S)?"),Z:w("q1?"),T:w("n?"),aD:w("dz?"),o:w("l1?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aP0=new A.bv(B.fU,B.bC,B.fU,B.bC)
D.a6e=new A.bv(B.fU,B.jL,B.fU,B.jL)
D.aPc=new A.bv(B.jM,B.bC,B.bC,B.bC)
D.aPg=new A.ax(B.cW,1.4,B.r,-1)
D.aPq=new A.ax(B.ak,1,B.r,-1)
D.aQM=new A.aW(0,1/0,64,1/0)
D.aQP=new A.aW(0,84,0,1/0)
D.asa=w([B.lO,B.q6,B.c],x.O)
D.bFr=new A.a8(B.ax,B.aD,B.x,D.asa,null,null)
D.aRC=new A.o(null,null,null,null,null,D.bFr,B.n)
D.cIz=w([B.aS,B.bR],x.O)
D.bHo=new A.a8(B.b3,B.bb,B.x,D.cIz,null,null)
D.aRT=new A.o(null,null,null,null,null,D.bHo,B.n)
D.aXH=new A.f9(null,null,null,null,null,E.iQ,null,null,null,null)
D.a7x=new A.cw(B.B,null,null,D.aXH,null)
D.jv=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eyS=new A.F(!0,D.jv,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQU=new A.w("No books on the shelf yet.",null,D.eyS,null,null,null,null,null,null,null,null,null)
D.dLH=new A.C(B.nl,D.eQU,null)
D.aWk=new A.cw(B.B,null,null,D.dLH,null)
D.aX8=new A.cw(B.B,null,null,V.ST,null)
D.aZ1=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZp=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.b00=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b0O=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b11=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9u=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b4p=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b4J=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.IS=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b63=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b8_=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aaX=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eLQ=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bc4=new A.ep(null,D.eLQ,B.eR,null,x.d)
D.eTS=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bc6=new A.ep(null,D.eTS,B.eR,null,x.d)
D.bcE=new A.b7(38e5)
D.bdp=new A.i2(0,10,0,10)
D.bdH=new A.i2(0,4,0,4)
D.bdY=new A.M(10,10,14,10)
D.be7=new A.i2(10,4,10,4)
D.beg=new A.i2(10,8,10,8)
D.beh=new A.M(10,8,8,8)
D.beJ=new A.M(12,6,12,2)
D.bf_=new A.M(14,10,6,6)
D.bf3=new A.M(14,12,14,8)
D.bf6=new A.M(14,12,8,14)
D.bfa=new A.i2(14,14,14,14)
D.bfP=new A.M(16,2,16,10)
D.bfZ=new A.M(16,6,16,30)
D.bg0=new A.M(16,6,16,8)
D.ada=new A.M(18,16,18,8)
D.bgB=new A.M(18,20,18,22)
D.ade=new A.M(18,24,18,24)
D.bgH=new A.M(18,30,18,30)
D.bgZ=new A.M(20,10,12,20)
D.bhc=new A.M(20,18,16,18)
D.bhe=new A.M(20,18,20,6)
D.bi2=new A.M(24,32,24,28)
D.bi3=new A.M(24,36,24,32)
D.bi6=new A.M(26,26,24,14)
D.bik=new A.M(2,4,2,8)
D.bio=new A.M(30,0,30,0)
D.biz=new A.M(38,22,22,22)
D.adv=new A.M(40,24,24,24)
D.biB=new A.i2(40,40,40,40)
D.biD=new A.M(46,30,30,30)
D.ady=new A.M(4,0,0,8)
D.bj2=new A.M(56,40,40,40)
D.bj6=new A.M(1.25,1.25,1.25,1.25)
D.bj7=new A.M(60,0,60,0)
D.bjl=new A.i2(7,3,7,3)
D.bjM=new A.M(8,9,8,9)
D.bjQ=new A.M(5,1.5,5,1.5)
D.bk_=new A.M(6,2.5,6,2.5)
D.f3U=new A.w("Signature",null,B.mT,null,null,null,null,null,null,null,null,null)
D.bkh=new A.bF(1,B.bn,D.f3U,null)
D.f1e=new A.w("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bkZ=new A.bF(1,B.bn,D.f1e,null)
D.eFP=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f35=new A.w("Worksheets",null,D.eFP,null,null,null,null,null,null,null,null,null)
D.eFX=new A.F(!0,E.a85,null,null,null,null,13,B.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f20=new A.w("Track your project spending",null,D.eFX,null,null,null,null,null,null,null,null,null)
D.cBg=w([D.f35,B.au,D.f20],x.p)
D.bao=new A.fj(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cBg,null)
D.bl3=new A.bF(1,B.bn,D.bao,null)
D.eBk=new A.F(!0,E.iQ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL4=new A.w("FAMILY LIBRARY",null,D.eBk,null,null,null,null,null,null,null,null,null)
D.blh=new A.bF(1,B.bn,D.eL4,null)
D.Kh=new C.FX("leather","","",0,"gold",25,"middle","double","leather","",!0)
D.Wk=new C.FY(0,"male")
D.aeo=new C.FY(1,"female")
D.wC=new C.FY(2,"unknown")
D.rH=new C.ahW(0,"owner")
D.Ki=new C.ahW(1,"editor")
D.jY=new C.ahW(2,"viewer")
D.af8=new A.a_(61199,"MaterialIcons",!1)
D.bny=new A.a_(61504,"MaterialIcons",!1)
D.bnz=new A.a_(61505,"MaterialIcons",!1)
D.bnB=new A.a_(61587,"MaterialIcons",!1)
D.bnH=new A.a_(61890,"MaterialIcons",!1)
D.boA=new A.a_(63034,"MaterialIcons",!0)
D.bps=new A.a_(63429,"MaterialIcons",!1)
D.ahi=new A.a_(984520,"MaterialIcons",!1)
D.bo6=new A.a_(62776,"MaterialIcons",!1)
D.brN=new A.ac(D.bo6,26,B.aW,null,null,null)
D.bmy=new A.a_(57648,"MaterialIcons",!1)
D.bs4=new A.ac(D.bmy,14,B.c,null,null,null)
D.bsm=new A.ac(B.E0,17,null,null,null,null)
D.bsO=new A.ac(B.cu,17,D.jv,null,null,null)
D.bsT=new A.ac(E.X5,null,null,null,null,null)
D.bsW=new A.ac(B.iZ,18,E.iQ,null,null,null)
D.WQ=new A.a_(62044,"MaterialIcons",!1)
D.bt1=new A.ac(D.WQ,null,B.aS,null,null,null)
D.btR=new A.ac(B.dO,16,null,null,null,null)
D.btY=new A.ac(D.WQ,32,B.aS,null,null,null)
D.buf=new A.ac(E.af9,18,B.cW,null,null,null)
D.bvh=new A.ac(B.Ec,22,B.aH,null,null,null)
D.bvs=new A.ac(B.dO,22,B.aW,null,null,null)
D.bvD=new A.ac(N.WV,22,B.c,null,null,null)
D.bvI=new A.ac(B.rS,52,B.c,null,null,null)
D.bvS=new A.ac(B.Ec,30,B.aH,null,null,null)
D.ahU=new A.ac(B.rZ,22,B.c,null,null,null)
D.bwj=new A.ac(B.dO,17,null,null,null,null)
D.bwC=new A.ac(B.uv,26,B.cW,null,null,null)
D.bxl=new A.ac(B.Xi,16,null,null,null,null)
D.by2=new A.ac(B.rS,24,B.c,null,null,null)
D.by7=new A.ac(B.KI,20,B.qx,null,null,null)
D.byc=new A.ac(B.DZ,null,B.bR,null,null,null)
D.byj=new A.ac(B.iZ,18,B.c,null,null,null)
D.bzH=new A.ac(B.e4,16,B.ak,null,null,null)
D.bzS=new A.ac(D.WQ,20,B.aS,null,null,null)
D.ail=new A.ac(B.hg,20,null,null,null,null)
D.bAn=new A.ac(B.cu,18,D.jv,null,null,null)
D.bAF=new A.ac(B.wZ,28,B.c,null,null,null)
D.bAN=new A.ac(B.Ky,null,B.fK,null,null,null)
D.bB6=new A.ac(B.wZ,24,B.c,null,null,null)
D.bBw=new A.ac(B.rS,null,B.aS,null,null,null)
D.bBx=new A.ac(B.jF,20,B.cW,null,null,null)
D.bBP=new A.ac(B.E0,16,null,null,null,null)
D.bDi=new A.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ep,!0,null,null,null,null)
D.cPa=w([B.bq,B.aS,B.eY,B.aW],x.O)
D.bE3=new A.a8(B.ax,B.aD,B.x,D.cPa,null,null)
D.b5a=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.b9A=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cyp=w([D.b5a,D.b9A],x.O)
D.bEe=new A.a8(B.b3,B.bb,B.x,D.cyp,null,null)
D.cKb=w([B.eO,B.ff,B.eY],x.O)
D.bEh=new A.a8(B.ax,B.aD,B.x,D.cKb,null,null)
D.a9Z=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZq=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cAf=w([D.a9Z,D.aZq],x.O)
D.bEN=new A.a8(B.b3,B.bb,B.x,D.cAf,null,null)
D.b1a=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.cOU=w([D.b1a,D.a9Z],x.O)
D.ajg=new A.a8(B.ax,B.aD,B.x,D.cOU,null,null)
D.a99=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b31=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cJr=w([D.a99,D.b31],x.O)
D.bFB=new A.a8(B.a1,B.a7,B.x,D.cJr,null,null)
D.cUE=w([B.bS,B.mp],x.O)
D.bFD=new A.a8(B.b3,B.bb,B.x,D.cUE,null,null)
D.b56=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b6v=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cVq=w([D.b56,D.jv,D.jv,D.b6v],x.O)
D.cXp=w([0,0.07,0.9,1],x.F)
D.bG4=new A.a8(B.a1,B.a7,B.x,D.cVq,D.cXp,null)
D.bGe=new A.a8(B.ax,B.aD,B.x,B.O7,null,null)
D.cUg=w([B.aW,B.aS,B.bR],x.O)
D.bHa=new A.a8(B.ax,B.aD,B.x,D.cUg,null,null)
D.c1p=w([B.bq,B.aW,B.eO],x.O)
D.c1v=w([B.bE,B.aA,B.jU],x.O)
D.c1x=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b4_=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c7D=w([D.b4_,E.a9J],x.O)
D.dIv=new A.v(1,2)
D.ekV=new A.cI(B.aV,D.dIv,3)
D.ap2=w([D.ekV],x.A)
D.ceR=w([B.fY,B.c9,B.fq],x.O)
D.chs=w([B.bP,B.bB,B.bj],x.O)
D.cvd=w([B.bR,B.bh],x.O)
D.aYT=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b4Z=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cvR=w([D.aYT,D.b4Z],x.O)
D.b0S=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cxe=w([D.b0S,B.dd],x.O)
D.cyC=w([B.bd,B.iw,B.nO],x.O)
D.cyZ=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZm=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b2o=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cXm=w([D.a99,D.aZm,D.b2o],x.O)
D.blE=new C.tz("leather","Leather",D.cXm,"vintage")
D.cFw=w([B.dH,B.IN,E.a8G],x.O)
D.blL=new C.tz("midnight","Midnight",D.cFw,"starry")
D.cyD=w([B.fp,B.eM,B.kQ],x.O)
D.blK=new C.tz("forest","Forest",D.cyD,"story")
D.cYZ=w([B.f5,B.fr,B.kS],x.O)
D.blH=new C.tz("burgundy","Burgundy",D.cYZ,"royal")
D.ch3=w([B.aA,B.q2,B.n3],x.O)
D.blI=new C.tz("royal","Royal",D.ch3,"royal")
D.cAP=w([B.bB,B.d3,L.CY],x.O)
D.blF=new C.tz("charcoal","Charcoal",D.cAP,"geo")
D.cXs=w([B.cl,B.dN,B.vZ],x.O)
D.blJ=new C.tz("sunset","Sunset",D.cXs,"sunset")
D.cY_=w([B.iw,B.CU,B.Tk],x.O)
D.blG=new C.tz("ocean","Ocean",D.cY_,"band")
D.xt=w([D.blE,D.blL,D.blK,D.blH,D.blI,D.blF,D.blJ,D.blG],A.aA("N<tz>"))
D.cBH=w([B.al,B.aI,B.M],x.O)
D.cCO=w([B.fr,B.eM,B.dH,B.i8,B.w0,B.cW,B.kT,B.fD,B.dC],x.O)
D.cCP=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ekW=new A.cI(B.dt,B.dG,8)
D.cCY=w([D.ekW],x.A)
D.cDW=w([B.cd,B.dN,B.lg],x.O)
D.cEn=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cFs=w([B.cd,B.hl],x.O)
D.cHj=w([B.aM,B.z8,B.vR],x.O)
D.cI7=w([B.bK,B.cN,B.dD,B.aM],x.O)
D.cIA=w([B.kl,B.cl,B.tU],x.O)
D.cJ2=w([B.eO,B.cW],x.O)
D.cJw=w([B.dh,B.fZ,B.hR],x.O)
D.cJH=w([B.b5,B.bh,B.dH],x.O)
D.cK8=w([B.eX,B.dp,B.eM],x.O)
D.cKo=w([B.e9,B.dH,B.IN],x.O)
D.cLB=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_1=w(["leather","linen","plain","stars","rays"],x.s)
D.brt=new A.a_(985219,"MaterialIcons",!1)
D.br2=new A.a_(983781,"MaterialIcons",!1)
D.ars=w([B.afy,B.hJ,B.lY,B.hL,D.brt,B.Ei,B.p1,D.br2,L.ah6,B.x0,B.p3,B.lX],A.aA("N<a_>"))
D.a_6=w(["double","single","corners","none"],x.s)
D.cO1=w([B.fM,B.bv,B.fD],x.O)
D.cOe=w([],x.t)
D.AE=w([],x.u)
D.cQe=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cSf=w([B.b_,B.fZ,B.i8],x.O)
D.cTj=w([B.cV,B.nQ,B.U_],x.O)
D.cTw=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dal=new C.lh("construction","Construction","Jobsite & builds",B.E9)
D.das=new C.lh("house","Home Build","Houses & rooms",B.up)
D.dai=new C.lh("grocery","Grocery","Store & pantry",B.XR)
D.dah=new C.lh("calculator","Calculations","Math & estimates",B.E4)
D.daq=new C.lh("lumber","Materials","Lumber & supplies",B.L7)
D.dae=new C.lh("kitchen","Kitchen","Remodel & meals",Q.agh)
D.br1=new A.a_(983756,"MaterialIcons",!1)
D.daj=new C.lh("landscape","Landscaping","Yard & garden",D.br1)
D.dad=new C.lh("plumbing","Plumbing","Pipes & water",B.uB)
D.dat=new C.lh("electrical","Electrical","Wiring & power",B.hf)
D.dab=new C.lh("store","Retail Shop","Daily business",B.kx)
D.dac=new C.lh("paint_remodel","Paint & Remodel","Colors & walls",Q.ag5)
D.bqn=new A.a_(983311,"MaterialIcons",!1)
D.dap=new C.lh("roofing","Roofing","Roofs & exteriors",D.bqn)
D.brd=new A.a_(983986,"MaterialIcons",!1)
D.daa=new C.lh("warehouse","Warehouse","Storage & stock",D.brd)
D.dan=new C.lh("vehicles","Vehicles","Fleet & transport",B.Ej)
D.bo8=new A.a_(62785,"MaterialIcons",!1)
D.dag=new C.lh("farm","Farm","Crops & livestock",D.bo8)
D.daf=new C.lh("restaurant","Restaurant","Food & catering",B.rY)
D.dam=new C.lh("tools","Tools","Workshop gear",B.Eh)
D.dar=new C.lh("wallet","Cash & Wallet","Quick spending",B.jF)
D.bpn=new A.a_(63395,"MaterialIcons",!1)
D.dao=new C.lh("concrete","Concrete","Foundation work",D.bpn)
D.dak=new C.lh("blueprint","Blueprint","Plans & design",Aa.afE)
D.a_w=w([D.dal,D.das,D.dai,D.dah,D.daq,D.dae,D.daj,D.dad,D.dat,D.dab,D.dac,D.dap,D.daa,D.dan,D.dag,D.daf,D.dam,D.dar,D.dao,D.dak],A.aA("N<lh>"))
D.cTY=w([B.bm,B.bv],x.O)
D.cUF=w([B.hQ,B.n7,B.dw],x.O)
D.a_B=w(["top","middle","bottom"],x.s)
D.cWP=w([B.cK,B.bh,B.dH],x.O)
D.cXh=w([B.bt,B.dp,B.eM],x.O)
D.cYU=w([B.bP,B.al],x.O)
D.cYV=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dGD={top:0,middle:1,bottom:2}
D.d11=new A.bt(D.dGD,["Top","Middle","Bottom"],x.w)
D.dGj={double:0,single:1,corners:2,none:3}
D.d16=new A.bt(D.dGj,["Double line","One line","Corners","None"],x.w)
D.dHl={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d2u=new A.bt(D.dHl,["Leather","Linen","Smooth","Stars","Light rays"],x.w)
D.d2F=new A.bt(B.io,[],A.aA("bt<I,+(n,n)>"))
D.dGw={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AP=new A.bt(D.dGw,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aA("bt<n,I>"))
D.d4R=new F.L5(32,null)
D.d4S=new F.L5(40,null)
D.d4T=new F.L5(46,null)
D.aAk=new C.apr(null)
D.dJe=new A.v(8,14)
D.eRw=new A.w("Write a new book",null,B.jq,null,B.L,null,null,null,null,null,null,null)
D.dLb=new A.C(B.lT,D.eRw,null)
D.ahv=new A.ac(B.hH,18,B.c,null,null,null)
D.eLo=new A.w("Add",null,B.mU,null,null,null,null,null,null,null,null,null)
D.cIm=w([D.ahv,B.v3,D.eLo],x.p)
D.ejf=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cIm,null)
D.dLv=new A.C(B.rC,D.ejf,null)
D.dLw=new A.C(E.ac1,V.ST,null)
D.eFL=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOc=new A.w("New Project",null,D.eFL,null,null,null,null,null,null,null,null,null)
D.cLX=w([D.ahv,B.ab,D.eOc],x.p)
D.eji=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cLX,null)
D.dLG=new A.C(B.iC,D.eji,null)
D.aXW=new A.f9(2.2,null,null,null,null,B.cW,null,null,null,null)
D.enu=new A.a3(22,22,D.aXW,null)
D.aWg=new A.cw(B.B,null,null,D.enu,null)
D.dM2=new A.C(B.UR,D.aWg,null)
D.dMB=new A.iD(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dME=new A.iD(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBf=new A.iD(1,0.9607843137254902,0.48627450980392156,0)
D.Gl=new A.iD(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.xY=new A.iD(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dMK=new A.iD(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fbq=new C.bd8(null)
D.bbg=new A.lT(D.fbq,null,B.as,null,null)
D.aET=new A.cE(0,0,0,0,null,null,D.bbg,null)
D.e7o=new A.z(-42,42)
D.eff=new A.d7([0,0,1,1])
D.aG1=new A.af(0,0,520,160)
D.eiy=new A.b5(B.pL,B.W)
D.f1m=new A.w("Let the AI write it from your tree",null,B.kb,null,B.L,null,null,null,null,null,null,null)
D.bm4=new A.dk(1,B.cj,D.f1m,null)
D.cFr=w([E.Yh,B.ab,D.bm4],x.p)
D.eiY=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cFr,null)
D.eL5=new A.w("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.cSt=w([D.ail,B.ab,D.eL5],x.p)
D.ej5=new A.cC(B.aY,B.b4,B.j,B.m,null,B.p,null,0,D.cSt,null)
D.bvx=new A.ac(B.hK,14,B.aW,null,null,null)
D.eA3=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOC=new A.w("Cashier",null,D.eA3,null,null,null,null,null,null,null,null,null)
D.cMo=w([D.bvx,B.bp,D.eOC],x.p)
D.ej7=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cMo,null)
D.eL6=new A.w("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bkP=new A.bF(1,B.bn,D.eL6,null)
D.cy7=w([D.ahU,B.av,D.bkP],x.p)
D.ej8=new A.cC(B.aY,B.e,B.j,B.m,null,B.p,null,0,D.cy7,null)
D.emh=new A.ap(16,40)
D.emm=new A.ap(22,64)
D.ems=new A.ap(280,88)
D.ena=new A.a3(30,null,null,null)
D.eor=new A.hI(2,12,12,1.05,null)
D.eOi=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ep9=new A.aY(D.eOi,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOx=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aHW=new A.aY(D.eOx,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eVZ=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.epD=new A.aY(D.eVZ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4q=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.epI=new A.aY(D.f4q,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQm=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.epP=new A.aY(D.eQm,null,null,null,null,null,null,null,null,null,null,null,null,B.fE,!1,null,null,null,B.q,null)
D.f1X=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aI_=new A.aY(D.f1X,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eLF=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eqe=new A.aY(D.eLF,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f50=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eqY=new A.aY(D.f50,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f0o=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.erm=new A.aY(D.f0o,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4u=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.erp=new A.aY(D.f4u,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXr=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.err=new A.aY(D.eXr,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eS3=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ers=new A.aY(D.eS3,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eS4=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ess=new A.aY(D.eS4,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOk=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.esK=new A.aY(D.eOk,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQ4=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.et2=new A.aY(D.eQ4,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWY=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eti=new A.aY(D.eWY,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSM=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.etj=new A.aY(D.eSM,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ewc=new A.F(!0,D.jv,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewA=new A.F(!0,D.jv,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewX=new A.F(!0,E.iQ,null,null,null,null,19,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,D.ap2,null,null,null)
D.ex9=new A.qZ(!0,B.qF,null,null,null,null,B.dk,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.exp=new A.F(!0,D.jv,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exX=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3Q=new A.qZ(!0,B.Pp,null,null,null,null,B.dk,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyV=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezj=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAN=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAR=new A.F(!0,G.iR,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC3=new A.F(!0,B.M,null,null,null,null,13,B.a0,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCH=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDl=new A.F(!0,B.bR,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDq=new A.F(!0,B.bS,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDM=new A.F(!0,D.IS,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDV=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eER=new A.F(!0,B.cW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFi=new A.F(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFJ=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH9=new A.F(!0,B.al,null,null,null,null,11.5,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHh=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK5=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4h=new A.F(!0,B.al,null,null,null,null,12,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIS=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJd=new A.F(!0,G.iR,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJk=new A.F(!0,G.iR,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eK2=new A.w("Themes",null,B.px,null,null,null,null,null,null,null,null,null)
D.eKB=new A.w("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eAy=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKW=new A.w("Debt receipt",null,D.eAy,null,B.L,null,null,null,null,null,null,null)
D.aK1=new A.F(!0,B.al,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLc=new A.w("Person who owes",null,D.aK1,null,null,null,null,null,null,null,null,null)
D.eM6=new A.w("Notes",null,B.a3X,null,null,null,null,null,null,null,null,null)
D.eMv=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.ezB=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMz=new A.w("Share",null,D.ezB,null,null,null,null,null,null,null,null,null)
D.eNo=new A.w("Move your family trees",null,D.aK5,null,null,null,null,null,null,null,null,null)
D.eNW=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eOw=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.ePG=new A.w("Remove this book?",null,B.h7,null,null,null,null,null,null,null,null,null)
D.aKu=new A.w("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eQI=new A.w("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eS_=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eT0=new A.w("Ribbon bookmark",null,B.ir,null,null,null,null,null,null,null,null,null)
D.eH3=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTr=new A.w("NGMY.ORG",null,D.eH3,null,B.L,null,null,null,null,null,null,null)
D.eUA=new A.w("Scan family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eDF=new A.F(!0,B.c,null,null,null,null,13,B.a0,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVh=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eDF,null,B.L,null,null,null,null,null,null,null)
D.eWp=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.eWv=new A.w("Thumbnail",null,B.px,null,null,null,null,null,null,null,null,null)
D.eX3=new A.w("Save the cover",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eXs=new A.w("Your photos",null,B.px,null,null,null,null,null,null,null,null,null)
D.eXH=new A.w("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eY7=new A.w("Design your cover",null,A1.GZ,null,null,null,null,null,null,null,null,null)
D.eYd=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new A.w("PICTURE",null,H.md,null,null,null,null,null,null,null,null,null)
D.eYC=new A.w("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eYE=new A.w("You can undo it right after.",null,A_.a41,null,null,null,null,null,null,null,null,null)
D.eZ6=new A.w("Print",null,B.ty,null,null,null,null,null,null,null,null,null)
D.eZr=new A.w("Amount owed",null,D.aK1,null,null,null,null,null,null,null,null,null)
D.eZE=new A.w("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f_a=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.f_d=new A.w("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f_C=new A.w("Debtor signature",null,B.a3X,null,null,null,null,null,null,null,null,null)
D.f_K=new A.w("Change icon",null,E.aJk,null,null,null,null,null,null,null,null,null)
D.f0O=new A.w("Family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f1c=new A.w("Download",null,B.ty,null,null,null,null,null,null,null,null,null)
D.f1g=new A.w("Change",null,B.px,null,null,null,null,null,null,null,null,null)
D.f22=new A.w("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f25=new A.w("WHAT SHOULD IT CHANGE?",null,H.md,null,null,null,null,null,null,null,null,null)
D.f2F=new A.w("COLOUR",null,H.md,null,null,null,null,null,null,null,null,null)
D.f2R=new A.w("Do it",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f2U=new A.w("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f3O=new A.w("Create Family Tree",null,B.eJ,null,null,null,null,null,null,null,null,null)
D.evf=new A.F(!0,E.iQ,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f42=new A.w("Write the first page myself",null,D.evf,null,null,null,null,null,null,null,null,null)
D.f4B=new A.w("Create Project",null,E.aJN,null,null,null,null,null,null,null,null,null)
D.f8J=new C.a9_(1,"header")
D.a4Y=new C.a9_(2,"projects")
D.f8K=new C.a9_(3,"cashier")
D.a4Z=new C.a9_(4,"familyTree")
D.fjl=new C.cpX(0,"start")
D.fjm=new C.cpY(0,"start")
D.f8Q=new C.We(null)
D.f9P=new C.WH(null)
D.d2C=new A.bt(B.io,[],A.aA("bt<n,Ef>"))
D.cOy=w([],x.E)
D.cOz=w([],x.M)
D.fal=new C.baq(D.d2C,D.cOy,D.cOz,0,0,null,null)
D.fc4=new C.Y4(null)
D.a5F=new C.aGi(0,"projects")
D.aNh=new C.aGi(1,"cashier")
D.fhi=new C.aGi(2,"familyTree")})()};
(a=>{a["exXsWHbnmuUCBycM5eBa8Z+5WUM="]=a.current})($__dart_deferred_initializers__);