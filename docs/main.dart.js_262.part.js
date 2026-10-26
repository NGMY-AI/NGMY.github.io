((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,G,F,E,Y,Z,A_,A0,A1,A2,M,A3,H,Q,R,S,T,A4,A5,U,A6,A7,V,A8,A9,Aa,K,Ab,Ac,Ad,L,N,C={
byn(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$byn=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ut(null,""),$async$byn)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.O(y.j)
t=A.mC(b1)
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
return A.b(A.qh(t,a1,B.h2,E.Dj),$async$byn)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ov(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.O(l!=null&&A.Jf(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Y(r.a(j.h(a2,a7)),q,p):B.cr
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a02(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byn,v)},
aec(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aec=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ut(null,""),$async$aec)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.O(y.j)
t=A.mC(b6)
s=x.S
r=A.dg(c1,0,A.dL(4,"count",s),A.R(c1).c)
q=F.ffy(new A.I(r,new C.ffK(),r.$ti.k("I<ai.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ad("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.ffJ(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.aj(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aec)
case 6:l=c5
k=F.Ov(l==null?"":l)
if(k==null)throw A.O("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alm(s,D.d3_,r.b(k.h(0,"cover"))?A.Y(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.Q.aj(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aec)
case 10:l=c5
k=l==null?null:F.Ov(l)
if(k==null)throw A.O(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d2(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kJ(a5,a2.k("kJ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
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
h.m(0,i,new A.T(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bf<2>")
p=A.cy(new A.bf(h,s),new C.ffL(),s.k("E.E"),p)
p=F.ffy(A.oI(p,3,A.a2(p).k("E.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.z(new A.cu(h,s),s.k("E.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a02(s,b9),$async$aec)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alm(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aec,v)},
h2k(d,e,f){return A.cb(null,B.x.j(0.65),!1,null,new C.foF(e,f),d,null,!0,!0,x.g2)},
alm:function alm(d,e,f){this.a=d
this.b=e
this.c=f},
ffK:function ffK(){},
ffJ:function ffJ(d){this.a=d},
ffL:function ffL(){},
foF:function foF(d,e){this.a=d
this.b=e},
bwl(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bwl=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.bd(b1,new C.f6k())){u=null
w=1
break}t=B.d.e7(b1,new C.f6l())
s=$.a1()
r=new A.tu()
q=A.K0(r,D.aGd)
p=A.U()
p.r=B.c.gt(0)
q.bp(D.aGd,p)
o=A.U()
o.r=B.M.gt(0)
o.c=3.6
o.b=B.aj
o.d=B.bZ
o.e=B.fj
n=new C.f6q(t)
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
a3=new A.aZ(s.r,B.av,null,null,p)
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
a3=new A.aZ(s.r,B.av,null,null,p)
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
return A.b(r.qR().B8(520,160),$async$bwl)
case 4:w=3
return A.b(b3.hk(B.fR),$async$bwl)
case 3:b0=b3
u=b0==null?null:J.f7(B.dz.gaK(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bwl,v)},
fdp(d){return C.hFH(d)},
hFH(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fdp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bae()
n=d.x!=null&&d.xZ(null).length===0
if(d.x!=null)t=n?D.xW:D.Gh
else t=d.gRN()?D.Gh:D.aBr
w=3
return A.b(C.bwl(d.ax),$async$fdp)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ak5(s)
r=A.a1Z(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBr}else{p.c=C.vQ(q,!0)
p.b=n?D.xW:D.Gh}r.a0u(A.fy9(new C.fdr(p,d,new C.fds(),t,n,o),null,D.biI,B.uX))
u=r.jz(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fdp,v)},
fk2(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fk2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fdp(d),$async$fk2)
case 3:t=f
s=B.a.i(d.b)
r=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aI(s,r,"_")
if(q.length>40)q=B.a.al(q,0,40)
u=A2.F1(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fk2,v)},
f6k:function f6k(){},
f6l:function f6l(){},
f6q:function f6q(d){this.a=d},
fds:function fds(){},
fdr:function fdr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fdq:function fdq(){},
fp6(d,e){var w=0,v=A.j(x.H)
var $async$fp6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,B.x.j(0.55),!0,null,new C.fpa(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fp6)
case 2:return A.h(null,v)}})
return A.i($async$fp6,v)},
byP(d,e,f,g){return C.hMT(d,e,f,g)},
hMT(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$byP=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aE(t)}catch(q){r=null}if(r==null||r.length===0){d.F(x.q).f.P(D.ekT)
w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.fp2(g,r,f),d,null,!0,!0,x.H),$async$byP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$byP,v)},
fpb(d,e){var w=0,v=A.j(x.H)
var $async$fpb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,null,!0,null,new C.fpe(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fpb)
case 2:return A.h(null,v)}})
return A.i($async$fpb,v)},
aUK:function aUK(d,e){this.c=d
this.a=e},
bWX:function bWX(){},
b6H:function b6H(d,e){this.b=d
this.a=e},
fpa:function fpa(d,e){this.a=d
this.b=e},
fp7:function fp7(d){this.a=d},
fp8:function fp8(d,e,f){this.a=d
this.b=e
this.c=f},
fp9:function fp9(d,e){this.a=d
this.b=e},
fp2:function fp2(d,e,f){this.a=d
this.b=e
this.c=f},
fp0:function fp0(d){this.a=d},
fp1:function fp1(d,e,f){this.a=d
this.b=e
this.c=f},
fpe:function fpe(d,e){this.a=d
this.b=e},
fpc:function fpc(d){this.a=d},
fpd:function fpd(d,e,f){this.a=d
this.b=e
this.c=f},
f93(d,e){var w=0,v=A.j(x.y),u,t
var $async$f93=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_C(d),$async$f93)
case 3:t=g
J.mY(t,new C.f94(e))
u=A.aeQ(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$f93,v)},
f94:function f94(d){this.a=d},
alt:function alt(d,e,f){this.c=d
this.d=e
this.a=f},
azr:function azr(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dxq:function dxq(d,e){this.a=d
this.b=e},
dxb:function dxb(d,e){this.a=d
this.b=e},
dxe:function dxe(d,e,f){this.a=d
this.b=e
this.c=f},
dxd:function dxd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxc:function dxc(d,e){this.a=d
this.b=e},
dxf:function dxf(d,e){this.a=d
this.b=e},
dx9:function dx9(){},
dxa:function dxa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dx8:function dx8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dwU:function dwU(d){this.a=d},
dwV:function dwV(d,e,f){this.a=d
this.b=e
this.c=f},
dwW:function dwW(d,e){this.a=d
this.b=e},
dwT:function dwT(d){this.a=d},
dx0:function dx0(d,e){this.a=d
this.b=e},
dwS:function dwS(d){this.a=d},
dx1:function dx1(d,e,f){this.a=d
this.b=e
this.c=f},
dx2:function dx2(d,e,f){this.a=d
this.b=e
this.c=f},
dwR:function dwR(d,e){this.a=d
this.b=e},
dx3:function dx3(d,e,f){this.a=d
this.b=e
this.c=f},
dwQ:function dwQ(d,e){this.a=d
this.b=e},
dx4:function dx4(d,e){this.a=d
this.b=e},
dwP:function dwP(d){this.a=d},
dx5:function dx5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dwN:function dwN(){},
dwH:function dwH(d){this.a=d},
dwI:function dwI(d){this.a=d},
dwO:function dwO(d,e){this.a=d
this.b=e},
dx6:function dx6(d,e){this.a=d
this.b=e},
dwM:function dwM(d){this.a=d},
dx7:function dx7(d){this.a=d},
dwL:function dwL(){},
dwX:function dwX(d,e){this.a=d
this.b=e},
dwK:function dwK(d){this.a=d},
dwY:function dwY(d,e,f){this.a=d
this.b=e
this.c=f},
dwJ:function dwJ(d,e){this.a=d
this.b=e},
dwG:function dwG(d,e){this.a=d
this.b=e},
dwZ:function dwZ(d){this.a=d},
dx_:function dx_(d,e,f){this.a=d
this.b=e
this.c=f},
dxt:function dxt(){},
dxu:function dxu(d,e){this.a=d
this.b=e},
dxr:function dxr(d){this.a=d},
dxs:function dxs(d){this.a=d},
dxn:function dxn(d,e){this.a=d
this.b=e},
dxo:function dxo(d){this.a=d},
dxg:function dxg(d,e,f){this.a=d
this.b=e
this.c=f},
dxh:function dxh(d,e,f){this.a=d
this.b=e
this.c=f},
dxi:function dxi(d,e,f){this.a=d
this.b=e
this.c=f},
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
dxv:function dxv(){},
dxw:function dxw(){},
dxx:function dxx(){},
dxy:function dxy(d){this.a=d},
dxp:function dxp(d,e){this.a=d
this.b=e},
fKS(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bg(J.k(u==null?"":u))
return new C.mJ(t,w,v,u==null?new A.N(Date.now(),0,!1):u)},
J0(d,e){return C.hEn(d,e)},
hEn(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$J0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$J0)
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
o=A.cy(o,new C.fbh(),o.$ti.k("E.E"),x.B)
n=A.a2(o).k("a3<E.E>")
o=A.z(new A.a3(o,new C.fbi(),n),n.k("E.E"))
B.d.aY(o,new C.fbj())
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
return A.i($async$J0,v)},
zF(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aw(),$async$zF)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b4(f,new C.fnN(),x.a)
r=A.z(r,r.$ti.k("ai.E"))
w=4
return A.b(t.an("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.aj(r,null)),$async$zF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zF,v)},
aMR(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aMR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J0(d,e),$async$aMR)
case 2:u=h
t=J.cB(u)
s=t.be(u,new C.fvp(f))
if(s===-1)t.cj(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zF(d,e,u),$async$aMR)
case 3:return A.h(null,v)}})
return A.i($async$aMR,v)},
bwM(d,e,f){var w=0,v=A.j(x.H),u
var $async$bwM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J0(d,e),$async$bwM)
case 2:u=h
J.mY(u,new C.f8W(f))
w=3
return A.b(C.zF(d,e,u),$async$bwM)
case 3:return A.h(null,v)}})
return A.i($async$bwM,v)},
bx_(d,e){return C.hEm(d,e)},
hEm(a1,a2){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$bx_=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aw(),$async$bx_)
case 7:r=a4
o=B.a.i(a1.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a2))
if(q==null||q.length===0){u=D.Ke
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
if(D.AN.am(0,o.h(0,"foil")))j=A.cJ(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a_B,o.h(0,"position"))?A.cJ(o.h(0,"position")):"middle"
g=B.d.q(D.a_8,o.h(0,"frame"))?A.cJ(o.h(0,"frame")):"double"
f=B.d.q(D.a_3,o.h(0,"texture"))?A.cJ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
o=new C.FV(n,m,l,k,j,i,h,g,f,J.k(e==null?"":e),!J.y(o.h(0,"ribbon"),!1))}else o=D.Ke
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a0=s.pop()
u=D.Ke
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bx_,v)},
a0i(d,e,f){return C.hMp(d,e,f)},
hMp(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a0i=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aw(),$async$a0i)
case 7:r=h
w=8
return A.b(r.an("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.aj(f.ad(),null)),$async$a0i)
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
return A.i($async$a0i,v)},
P4(d,e){return C.hEo(d,e)},
hEo(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$P4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$P4)
case 7:r=g
q=r.rk("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.z(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.J0(d,e),$async$P4)
case 8:if(!j.ct(g)){n=B.a.i(d.toLowerCase())
m=J.l6(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
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
adz(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P4(d,e),$async$adz)
case 3:s=g
r=J.a6(s)
if(r.gH(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gH(s):"main"
r.G(s,t)
w=5
return A.b(A.aw(),$async$adz)
case 5:w=4
return A.b(g.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adz)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adz,v)},
a0g(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0g=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.P4(d,e),$async$a0g)
case 2:s=h
J.hB(s,f)
w=3
return A.b(A.aw(),$async$a0g)
case 3:u=h
w=4
return A.b(u.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0g)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0g)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0g)
case 6:return A.h(null,v)}})
return A.i($async$a0g,v)},
mJ:function mJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbh:function fbh(){},
fbi:function fbi(){},
fbj:function fbj(){},
fnN:function fnN(){},
fvp:function fvp(d){this.a=d},
f8W:function f8W(d){this.a=d},
FV:function FV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bIk:function bIk(d){this.a=d},
hMI(d,e,f,g,h,i,j){return A.a7(d,!1).ct(A.eO(new C.foi(j,i,f,e,h,g),!0,null,x.H))},
P0(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$P0=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P4(h,g),$async$P0)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.F(x.q).f.P(D.aI6)
u=!1
w=1
break}w=4
return A.b(C.h2k(d,f,e),$async$P0)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adz(h,g),$async$P0)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mJ(""+(q+n),l,B.a.i(m.b),new A.N(Date.now(),0,!1)))}w=6
return A.b(C.zF(h,r,p),$async$P0)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.a0i(h,r,new C.FV("leather",p,"",0,"gold",25,"middle","double","leather","",!0)),$async$P0)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
foi:function foi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
X4:function X4(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awy:function awy(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
cZE:function cZE(d){this.a=d},
cZD:function cZD(d,e){this.a=d
this.b=e},
cZs:function cZs(d,e){this.a=d
this.b=e},
cZp:function cZp(d,e){this.a=d
this.b=e},
cZ2:function cZ2(d){this.a=d},
cZ3:function cZ3(d,e){this.a=d
this.b=e},
cZt:function cZt(d){this.a=d},
cZ9:function cZ9(d){this.a=d},
cZ7:function cZ7(d){this.a=d},
cZ8:function cZ8(d){this.a=d},
cZa:function cZa(d){this.a=d},
cZq:function cZq(d){this.a=d},
cZr:function cZr(){},
cZb:function cZb(d){this.a=d},
cZc:function cZc(d,e){this.a=d
this.b=e},
cZC:function cZC(d){this.a=d},
cZB:function cZB(d,e){this.a=d
this.b=e},
cZA:function cZA(d){this.a=d},
cZm:function cZm(d){this.a=d},
cZl:function cZl(d){this.a=d},
cZn:function cZn(d){this.a=d},
cZ4:function cZ4(d,e){this.a=d
this.b=e},
cZo:function cZo(d,e){this.a=d
this.b=e},
cZf:function cZf(d){this.a=d},
cZg:function cZg(d){this.a=d},
cZe:function cZe(){},
cZh:function cZh(d){this.a=d},
cZi:function cZi(d){this.a=d},
cZj:function cZj(d,e){this.a=d
this.b=e},
cZk:function cZk(d,e,f){this.a=d
this.b=e
this.c=f},
cZd:function cZd(d,e){this.a=d
this.b=e},
cZv:function cZv(d){this.a=d},
cZu:function cZu(){},
cZw:function cZw(d){this.a=d},
cZx:function cZx(d){this.a=d},
cZy:function cZy(d){this.a=d},
cZz:function cZz(d,e){this.a=d
this.b=e},
cZ5:function cZ5(d){this.a=d},
cZ6:function cZ6(d){this.a=d},
X8:function X8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bay:function bay(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d04:function d04(d){this.a=d},
d05:function d05(d){this.a=d},
d03:function d03(d){this.a=d},
d06:function d06(d){this.a=d},
d02:function d02(d){this.a=d},
d07:function d07(d){this.a=d},
d01:function d01(d){this.a=d},
d08:function d08(d,e){this.a=d
this.b=e},
d00:function d00(d,e){this.a=d
this.b=e},
d09:function d09(d,e){this.a=d
this.b=e},
X6:function X6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ac5:function ac5(d,e,f){this.a=d
this.b=e
this.c=f},
awz:function awz(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
cZT:function cZT(d,e){this.a=d
this.b=e},
cZS:function cZS(d,e){this.a=d
this.b=e},
cZX:function cZX(d){this.a=d},
cZW:function cZW(d,e){this.a=d
this.b=e},
cZU:function cZU(d){this.a=d},
cZV:function cZV(d){this.a=d},
cZY:function cZY(d){this.a=d},
cZZ:function cZZ(d){this.a=d},
cZR:function cZR(d,e){this.a=d
this.b=e},
cZQ:function cZQ(d,e){this.a=d
this.b=e},
NO:function NO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wm:function Wm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cyv:function cyv(d){this.a=d},
cyw:function cyw(){},
cyx:function cyx(d){this.a=d},
b7S:function b7S(d,e,f){this.b=d
this.c=e
this.a=f},
b7J:function b7J(d,e){this.b=d
this.a=e},
tw:function tw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WF:function WF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7Q:function b7Q(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cRX:function cRX(d,e,f){this.a=d
this.b=e
this.c=f},
cRW:function cRW(d,e){this.a=d
this.b=e},
cSl:function cSl(d){this.a=d},
cS8:function cS8(){},
cSm:function cSm(d){this.a=d},
cS7:function cS7(){},
cSn:function cSn(d,e){this.a=d
this.b=e},
cS6:function cS6(d,e){this.a=d
this.b=e},
cSo:function cSo(d,e){this.a=d
this.b=e},
cS5:function cS5(d,e){this.a=d
this.b=e},
cSp:function cSp(d){this.a=d},
cS4:function cS4(){},
cSq:function cSq(d,e){this.a=d
this.b=e},
cS3:function cS3(d,e){this.a=d
this.b=e},
cSr:function cSr(d){this.a=d},
cSg:function cSg(d,e){this.a=d
this.b=e},
cSs:function cSs(d){this.a=d},
cSt:function cSt(d){this.a=d},
cSv:function cSv(d){this.a=d},
cSw:function cSw(d){this.a=d},
cSf:function cSf(d,e){this.a=d
this.b=e},
cSx:function cSx(d,e){this.a=d
this.b=e},
aDn:function aDn(d){this.a=d},
bd0:function bd0(d){this.a=d},
b65:function b65(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
hDn(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.af0(a6),a5=a4.length
if(a5===0)return""
w=A.Q(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.N(Date.now(),0,!1))
s=new C.f9u(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.R(a4),p=q.k("a3<1>"),q=q.k("cR<1,n>"),o=q.k("E.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wB)m.push(l===D.Wj?"male":"female")
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
m.push("child of "+l+k)}a0=A.z(new A.cR(new A.a3(a4,new C.f9s(u,f),p),new C.f9t(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.al(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hDo(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.af0(a0),d=e.length
if(d===0)return""
w=x.N
v=A.Q(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.f9z(v,e)
q=new C.f9x(v)
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
n=A.z(d,A.a2(d).k("ck.E"))
B.d.fv(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.hY(l,new C.f9y(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hpI(d,e,f,g){var w,v,u=C.hDp(d,e)
if(u<=0||f.length<=u)return new A.abH(!1,D.AB,f)
if(g.q(0,e.a))return new A.abH(!1,D.AB,f)
w=A.R(f).c
v=A.dg(f,0,A.dL(u,"count",x.S),w).dz(0)
return new A.abH(!0,A.dg(f,u,null,w).dz(0),v)},
hpJ(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.af0(d3),d2=d1.length
if(d2===0)return D.f27
w=x.N
v=A.Q(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.ci(0,t.a,new C.d_5(t))}s=new C.d_m(v)
d2=x.h
r=A.Q(w,d2)
q=new C.d_e(r)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d_d(r)
l=A.Q(w,x.do)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.ci(0,k,new C.d_6()),o)}h=new C.d_c(s)
g=new C.d_b(l,r)
p=v.$ti.k("bf<2>")
o=p.k("a3<E.E>")
f=A.z(new A.a3(new A.bf(v,p),new C.d_7(h),o),o.k("E.E"))
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
a9=new C.d_k(new C.d_g(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.Q(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dv(v,v.r,v.e),j=a2.gahg(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eN([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.G(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qD(J.dF(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.Q(w,x.cc)
b5=A.a([],x.M)
b6=A.Q(w,d2)
b7=new C.d_4(a2,new C.d_l(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.m(0,b8,new C.Ee(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ig(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.z(new A.cu(b6,d2),d2.k("E.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bD(0,new C.d_8(c6,b4))
for(d2=new A.cM(a4,a4.$ti.k("cM<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.hY(j,new C.d_9(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aY(o,new C.d_a())
c6.push(new C.aFs(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bai(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
fZ9(d){var w=A.ad("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fTG(d,e,f,g,h,i,j,k,l,m,n){return new C.XI(k,f,j,e,l,n,m,d,g,h,i,null)},
ays(d,e,f,g,h,i,j){return new C.bdX(i,d,e,f,j,h,g,null)},
amz:function amz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA1:function aA1(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dKj:function dKj(d){this.a=d},
dKi:function dKi(d){this.a=d},
dKl:function dKl(d,e){this.a=d
this.b=e},
dKm:function dKm(d,e){this.a=d
this.b=e},
dKn:function dKn(d){this.a=d},
dKh:function dKh(d,e){this.a=d
this.b=e},
dKk:function dKk(d){this.a=d},
dKp:function dKp(d){this.a=d},
dKo:function dKo(d,e){this.a=d
this.b=e},
amt:function amt(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azZ:function azZ(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dJK:function dJK(d){this.a=d},
dJI:function dJI(d){this.a=d},
dJJ:function dJJ(d){this.a=d},
dJL:function dJL(d,e){this.a=d
this.b=e},
dJF:function dJF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJd:function dJd(d){this.a=d},
dJe:function dJe(d,e){this.a=d
this.b=e},
dJs:function dJs(d){this.a=d},
dJq:function dJq(d){this.a=d},
dJr:function dJr(d,e){this.a=d
this.b=e},
dJt:function dJt(d){this.a=d},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJE:function dJE(d,e){this.a=d
this.b=e},
dJC:function dJC(d,e){this.a=d
this.b=e},
dJB:function dJB(d,e){this.a=d
this.b=e},
dJx:function dJx(d,e){this.a=d
this.b=e},
dJw:function dJw(d){this.a=d},
dJy:function dJy(d,e){this.a=d
this.b=e},
dJv:function dJv(d){this.a=d},
dJz:function dJz(d){this.a=d},
dJA:function dJA(d){this.a=d},
dJD:function dJD(d,e){this.a=d
this.b=e},
dJ1:function dJ1(d,e){this.a=d
this.b=e},
dJ2:function dJ2(d,e){this.a=d
this.b=e},
dJN:function dJN(d,e,f){this.a=d
this.b=e
this.c=f},
dJH:function dJH(d,e,f){this.a=d
this.b=e
this.c=f},
dJG:function dJG(d){this.a=d},
dJ3:function dJ3(d){this.a=d},
dJ4:function dJ4(d){this.a=d},
dJ5:function dJ5(){},
dJ6:function dJ6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJa:function dJa(d,e){this.a=d
this.b=e},
dJ9:function dJ9(d,e){this.a=d
this.b=e},
dJ8:function dJ8(d){this.a=d},
dJb:function dJb(d,e){this.a=d
this.b=e},
dJ7:function dJ7(d){this.a=d},
dJM:function dJM(d){this.a=d},
dJn:function dJn(){},
dJo:function dJo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJm:function dJm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJi:function dJi(d,e,f){this.a=d
this.b=e
this.c=f},
dJh:function dJh(d,e,f){this.a=d
this.b=e
this.c=f},
dJf:function dJf(d,e){this.a=d
this.b=e},
dJj:function dJj(d){this.a=d},
dJk:function dJk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJg:function dJg(d,e){this.a=d
this.b=e},
dJl:function dJl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJp:function dJp(d,e){this.a=d
this.b=e},
dJU:function dJU(){},
dJV:function dJV(d,e){this.a=d
this.b=e},
dJW:function dJW(d){this.a=d},
dJX:function dJX(d,e){this.a=d
this.b=e},
dJQ:function dJQ(d){this.a=d},
dJO:function dJO(d,e){this.a=d
this.b=e},
dJR:function dJR(d,e){this.a=d
this.b=e},
dJS:function dJS(d,e){this.a=d
this.b=e},
dJT:function dJT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dJY:function dJY(d){this.a=d},
dJP:function dJP(d){this.a=d},
dJc:function dJc(d){this.a=d},
bag:function bag(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d_2:function d_2(d){this.a=d},
d_1:function d_1(d,e){this.a=d
this.b=e},
d_3:function d_3(d){this.a=d},
d_0:function d_0(d,e){this.a=d
this.b=e},
f9u:function f9u(d,e){this.a=d
this.b=e},
f9v:function f9v(d){this.a=d},
f9w:function f9w(){},
f9s:function f9s(d,e){this.a=d
this.b=e},
f9t:function f9t(){},
f9z:function f9z(d,e){this.a=d
this.b=e},
f9A:function f9A(d){this.a=d},
f9B:function f9B(){},
f9x:function f9x(d){this.a=d},
f9y:function f9y(d,e){this.a=d
this.b=e},
Ig:function Ig(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ee:function Ee(d,e){this.a=d
this.b=e},
bai:function bai(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_5:function d_5(d){this.a=d},
d_m:function d_m(d){this.a=d},
d_e:function d_e(d){this.a=d},
d_f:function d_f(){},
d_d:function d_d(d){this.a=d},
d_6:function d_6(){},
d_c:function d_c(d){this.a=d},
d_b:function d_b(d,e){this.a=d
this.b=e},
d_7:function d_7(d){this.a=d},
d_g:function d_g(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_h:function d_h(d){this.a=d},
d_i:function d_i(d){this.a=d},
d_j:function d_j(){},
d_k:function d_k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_l:function d_l(){},
d_4:function d_4(d,e,f,g,h,i,j,k,l,m){var _=this
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
d_8:function d_8(d,e){this.a=d
this.b=e},
d_9:function d_9(d){this.a=d},
d_a:function d_a(){},
aFs:function aFs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baj:function baj(d,e){this.b=d
this.a=e},
d_n:function d_n(){},
d_o:function d_o(d){this.a=d},
d_p:function d_p(d){this.a=d},
d_q:function d_q(){},
bdY:function bdY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9p:function b9p(d,e){this.b=d
this.a=e},
brl:function brl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eUs:function eUs(d){this.a=d},
bhd:function bhd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ew7:function ew7(d){this.a=d},
ew6:function ew6(d,e){this.a=d
this.b=e},
XI:function XI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayq:function ayq(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dez:function dez(d,e){this.a=d
this.b=e},
dey:function dey(d){this.a=d},
dew:function dew(d){this.a=d},
dex:function dex(d){this.a=d},
deI:function deI(d){this.a=d},
deJ:function deJ(d){this.a=d},
deH:function deH(d,e){this.a=d
this.b=e},
deK:function deK(){},
deN:function deN(d){this.a=d},
deG:function deG(d,e){this.a=d
this.b=e},
deM:function deM(){},
deO:function deO(d){this.a=d},
deF:function deF(d,e){this.a=d
this.b=e},
deP:function deP(d){this.a=d},
deE:function deE(d){this.a=d},
deQ:function deQ(d){this.a=d},
deD:function deD(d){this.a=d},
deR:function deR(d){this.a=d},
deC:function deC(d){this.a=d},
deS:function deS(d){this.a=d},
deB:function deB(d){this.a=d},
deT:function deT(d){this.a=d},
deA:function deA(d,e){this.a=d
this.b=e},
deL:function deL(d){this.a=d},
aaz:function aaz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdX:function bdX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aay:function aay(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bdW:function bdW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
deU:function deU(d){this.a=d},
deV:function deV(d,e){this.a=d
this.b=e},
ayr:function ayr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEv:function aEv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaA:function aaA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
df3:function df3(d){this.a=d},
I5:function I5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fOF(d){var w=d.R,v=x.N
return w.iC(w,new C.c2r(),v,v)},
hhn(d){var w=d.bx
if(w>=0)return w
return 5},
fOH(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fOF(d).h(0,v)
if(w==null||w.length===0)return null
return A.bg(w)},
fOG(d,e){var w=C.fOH(d,e)
if(w!=null&&w.ca(new A.N(Date.now(),0,!1)))return!0
return!1},
hho(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Y(C.fOF(d),w,w)
u=C.fOH(d,e)
t=u!=null&&u.ca(new A.N(Date.now(),0,!1))?u:new A.N(Date.now(),0,!1)
v.m(0,s,t.bL(A.dB(30,0,0,0,0,0).a).a4().aa())
d.R=v},
aW9(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aW9=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.kY(t,B.G5),$async$aW9)
case 3:if(l){u=!0
w=1
break}u=A.kD(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.G5,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aW9,v)},
c2r:function c2r(){},
hhl(){var w,v=$.oX(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aF(32)]
return"FT"+B.d.fL(u)},
GO(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bZ(),$async$GO)
case 3:if(!e){u=A.Q(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_family_tree_backup_codes_v1",null,!1,B.bE),$async$GO)
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
return A.i($async$GO,v)},
a4M(d){return C.hhm(d)},
hhm(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a4M=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bZ(),$async$a4M)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_family_tree_backup_codes_v1",A.D(["codes",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$a4M)
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
return A.i($async$a4M,v)},
c2q(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c2q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GO(),$async$c2q)
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
return A.i($async$c2q,v)},
Lz(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Lz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c2q(d),$async$Lz)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.GO(),$async$Lz)
case 6:s=f
r=J.a6(s)
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
return A.b(C.a4M(s),$async$Lz)
case 9:case 8:u=t
w=1
break
case 5:n=C.hhl()
w=10
return A.b(C.GO(),$async$Lz)
case 10:s=f
J.aE(s,n,A.D(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=11
return A.b(C.a4M(s),$async$Lz)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lz,v)},
aW8(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aW8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GO(),$async$aW8)
case 3:t=f
for(s=J.dd(t),r=s.gdH(t),r=r.dz(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a4M(t),$async$aW8)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aW8,v)},
a4N(d,e,f){var w=0,v=A.j(x.H),u
var $async$a4N=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amy(d,e),$async$a4N)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Lz(d),$async$a4N)
case 7:w=4
break
case 5:w=8
return A.b(C.aW8(d),$async$a4N)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a4N,v)},
ams(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ams=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amy(f,e),$async$ams)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bZ(),$async$ams)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GO(),$async$ams)
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
return A.i($async$ams,v)},
aW7(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aW7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bZ(),$async$aW7)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GO(),$async$aW7)
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
return A.i($async$aW7,v)},
hhp(){var w,v=$.oX(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aF(32)]
return"FT"+B.d.fL(u)},
amv(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bZ(),$async$amv)
case 3:if(!g){u=null
w=1
break}t=C.hhp()
w=4
return A.b(A.SY(),$async$amv)
case 4:s=g
r=B.dB.aE(B.Q.aj(d.eD(),null))
r=B.cM.gcq().aE(r)
q=e?999:2
J.aE(s,t,A.D(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(A.a4O(s),$async$amv)
case 5:p=e?999:2
u=new A.YS("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amv,v)},
amu(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amu=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.SY(),$async$amu)
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
return A.b(C.aW7(J.k(l==null?"":l),j),$async$amu)
case 4:if(!a0)$.ak.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.c0.c4(0,B.cw.aE(t))
s=C.fOI(r)}catch(f){q=A.a5(f)
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
return A.b(A.a4O(p),$async$amu)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amu,v)},
fOI(d){var w,v,u,t,s=null
try{w=B.Q.aC(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hhr(A.Y(w,x.N,x.z))
return u}catch(t){v=A.a5(t)
$.ak.$1("[family tree sync] parse: "+A.t(v))
return s}},
fze(d){var w=0,v=A.j(x.m),u,t,s
var $async$fze=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amu(t[1])
w=1
break}u=null
w=1
break}u=C.fOI(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fze,v)},
hhr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d2(v,x.f)
u=A.cy(u,new C.c2t(),u.$ti.k("E.E"),x.k)
t=A.a2(u).k("a3<E.E>")
s=A.z(new A.a3(u,new C.c2u(),t),t.k("E.E"))}else s=A.a([],x._)
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
n=A.cy(n,new C.c2v(),n.$ti.k("E.E"),o)
k=A.a2(n).k("a3<E.E>")
j=A.z(new A.a3(n,new C.c2w(),k),k.k("E.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amw(h,w,s,r,q)},
amy(d,e){var w=0,v=A.j(x.y),u,t
var $async$amy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Lr(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zw(d),$async$amy)
case 3:u=t.ct(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amy,v)},
c2C(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c2C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zw(d),$async$c2C)
case 3:t=s.b4(f,new C.c2D(),x.cs)
t=A.z(t,t.$ti.k("ai.E"))
B.d.aY(t,new C.c2E())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2C,v)},
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
return A.b(C.amy(e,d),$async$SZ)
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
return A.b(C.zw(e),$async$SZ)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dF(r,new C.c2A(g))
r=A.z(t,t.$ti.k("E.E"))}t=J.a6(r)
if(t.gah(r)){u=null
w=1
break}t=t.di(r,new C.c2B(e),x.k)
r=A.z(t,t.$ti.k("ai.E"))
q=A.Q(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.J0(e,o),$async$SZ)
case 14:n=i
if(J.ct(n))q.m(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.amw(s,B.a.i(e.toLowerCase()),r,new A.N(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SZ,v)},
aWc(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWc=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SZ(d,e,f,g),$async$aWc)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aI(t,s,"_")
r=q.a
u=A.ES(A.Ic(q.eD(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWc,v)},
aWb(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWb=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SZ(d,e,f,g),$async$aWb)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amv(r,f),$async$aWb)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCw(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWb,v)},
T_(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T_=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fze(a0),$async$T_)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ams(g.a,d,e,f,s,r),$async$T_)
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
return A.b(C.bwD(e,j),$async$T_)
case 12:case 11:w=13
return A.b(C.aeO(e,j,s),$async$T_)
case 13:h=n.h(0,i)
w=h!=null&&J.ct(h)?14:15
break
case 14:w=16
return A.b(C.zF(e,i,h),$async$T_)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bkI(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T_,v)},
amw:function amw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2y:function c2y(){},
c2z:function c2z(){},
c2x:function c2x(){},
c2t:function c2t(){},
c2u:function c2u(){},
c2v:function c2v(){},
c2w:function c2w(){},
c2D:function c2D(){},
c2E:function c2E(){},
c2A:function c2A(d){this.a=d},
c2B:function c2B(d){this.a=d},
fHd(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f2(null,x.H)
return A.hl(d,new C.amx(w,e,g,i,f,h,null),!0,null,x.H)},
d__(d,e,f,g,h,i,j,k){return new C.baf(i,e,k,j,g,f,h,d,null)},
amx:function amx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aA0:function aA0(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dK6:function dK6(d){this.a=d},
dK7:function dK7(d,e,f){this.a=d
this.b=e
this.c=f},
dKb:function dKb(d,e){this.a=d
this.b=e},
dKc:function dKc(d){this.a=d},
dK3:function dK3(d){this.a=d},
dK4:function dK4(d,e){this.a=d
this.b=e},
dK5:function dK5(d,e){this.a=d
this.b=e},
dKa:function dKa(d){this.a=d},
dK9:function dK9(d,e){this.a=d
this.b=e},
dK8:function dK8(){},
dKe:function dKe(d){this.a=d},
dKf:function dKf(d,e){this.a=d
this.b=e},
dKd:function dKd(d,e){this.a=d
this.b=e},
d_r:function d_r(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bah:function bah(d,e,f){this.d=d
this.e=e
this.a=f},
a9R:function a9R(d,e,f){this.c=d
this.d=e
this.a=f},
baf:function baf(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bak:function bak(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y2:function Y2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aA_:function aA_(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dJZ:function dJZ(d,e){this.a=d
this.b=e},
dK_:function dK_(d){this.a=d},
dK0:function dK0(d){this.a=d},
dK1:function dK1(d){this.a=d},
dK2:function dK2(d){this.a=d},
Y3:function Y3(d){this.a=d},
bfm:function bfm(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dKg:function dKg(d,e){this.a=d
this.b=e},
aUJ(d,e){return new C.aUI(d,e,null)},
aUI:function aUI(d,e,f){this.c=d
this.d=e
this.a=f},
hFM(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
hMS(d){return A.c1(B.K,new C.foM(new C.t2(A.K(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fQw(d,e){return new C.apl(e,d,null)},
aMy(d,e,f,g,h,i,j){var w=C.hFM(i)
if(w!=null)return A.bu(e,new A.a4(j,f,new C.a3R(w,!0,null),null),B.ap)
return I.aLV(e,B.bM,f,g,h,i,j)},
le:function le(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3R:function a3R(d,e,f){this.c=d
this.d=e
this.a=f},
bf5:function bf5(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
dwy:function dwy(d){this.a=d},
dwz:function dwz(){},
dwA:function dwA(d,e){this.a=d
this.b=e},
bf4:function bf4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
foM:function foM(d){this.a=d},
foL:function foL(d,e){this.a=d
this.b=e},
foK:function foK(d,e){this.a=d
this.b=e},
foJ:function foJ(d,e){this.a=d
this.b=e},
apl:function apl(d,e,f){this.c=d
this.d=e
this.a=f},
ca2:function ca2(d,e){this.a=d
this.b=e},
aHM:function aHM(){},
hMD(d){var w=null
return A.cb(w,w,!0,w,new C.foa(),d,w,!0,!0,x.e2)},
hNN(d,e,f,g,h){var w=null
return A.cb(w,w,!0,w,new C.fvh(h,g,f,e),d,w,!0,!0,x.N)},
hMF(d,e){var w=null
return A.cb(w,w,!0,w,new C.foc(e),d,w,!0,!0,x.dY)},
hME(d){var w=null
return A.cb(w,w,!0,w,new C.fob(),d,w,!0,!0,x.c5)},
aPp:function aPp(d,e){this.a=d
this.b=e},
aPo:function aPo(d){this.a=d},
aNt:function aNt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foa:function foa(){},
fvh:function fvh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foc:function foc(d){this.a=d},
fob:function fob(){},
WH:function WH(d,e){this.c=d
this.a=e},
avl:function avl(){var _=this
_.d=$
_.c=_.a=_.e=null},
cSJ:function cSJ(d){this.a=d},
cSK:function cSK(d){this.a=d},
cSI:function cSI(d,e){this.a=d
this.b=e},
cSL:function cSL(d){this.a=d},
cSM:function cSM(d){this.a=d},
WG:function WG(d){this.a=d},
avk:function avk(){this.d=$
this.c=this.a=null},
cSF:function cSF(d){this.a=d},
cSG:function cSG(d){this.a=d},
cSH:function cSH(d){this.a=d},
Wd:function Wd(d){this.a=d},
au6:function au6(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cqg:function cqg(){},
cqm:function cqm(d){this.a=d},
cqn:function cqn(d){this.a=d},
cqo:function cqo(d){this.a=d},
cql:function cql(){},
cqp:function cqp(d){this.a=d},
cqq:function cqq(d){this.a=d},
cqk:function cqk(){},
cqr:function cqr(d,e){this.a=d
this.b=e},
cqj:function cqj(d,e){this.a=d
this.b=e},
cqh:function cqh(d,e){this.a=d
this.b=e},
cqs:function cqs(d){this.a=d},
cqi:function cqi(){},
cqt:function cqt(d){this.a=d},
ZK:function ZK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brd:function brd(){this.d=$
this.c=this.a=null},
eTV:function eTV(d,e){this.a=d
this.b=e},
eTW:function eTW(d){this.a=d},
eTX:function eTX(d,e){this.a=d
this.b=e},
a8V:function a8V(d,e){this.a=d
this.b=e},
E2:function E2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brb:function brb(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eTT:function eTT(d,e){this.a=d
this.b=e},
au_:function au_(d,e){this.c=d
this.a=e},
brc:function brc(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eTU:function eTU(d){this.a=d},
bra:function bra(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aJS:function aJS(){},
aJT:function aJT(){},
bys(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bK(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.oW(B.o.u(t),A.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fn3(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aU(B.o.u(s),2,"0")
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VD(A.dq(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMb(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hQ().kA(85,1280,B.er),$async$aMb)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aMb)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.fQv()
w=9
return A.b(C.ca1(q,r),$async$aMb)
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
return A.i($async$aMb,v)},
aMw(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aMw=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.c9Z(g)
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
return A.b($.a1().K_(p,!0,null,i).cJ(0,B.fD),$async$aMw)
case 9:n=a1
w=10
return A.b(n.mg(),$async$aMw)
case 10:m=a1
w=11
return A.b(J.aNf(m).hk(B.fR),$async$aMw)
case 11:l=a1
J.aNf(m).p()
if(l==null){w=8
break}i=J.f7(B.dz.gaK(l))
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
return A.i($async$aMw,v)},
fn3:function fn3(){},
t2:function t2(d){this.a=d},
apk:function apk(d,e,f){this.c=d
this.d=e
this.a=f},
aBq:function aBq(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eth:function eth(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
et9:function et9(d){this.a=d},
etf:function etf(d,e){this.a=d
this.b=e},
ete:function ete(d,e){this.a=d
this.b=e},
etb:function etb(d,e){this.a=d
this.b=e},
eta:function eta(d,e){this.a=d
this.b=e},
etc:function etc(d){this.a=d},
etd:function etd(d,e){this.a=d
this.b=e},
etg:function etg(d,e){this.a=d
this.b=e},
et3:function et3(d,e){this.a=d
this.b=e},
et7:function et7(d){this.a=d},
et6:function et6(d,e){this.a=d
this.b=e},
et5:function et5(d){this.a=d},
eti:function eti(d,e){this.a=d
this.b=e},
etj:function etj(d,e){this.a=d
this.b=e},
et4:function et4(d,e){this.a=d
this.b=e},
h1R(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.D(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.N(Date.now(),0,!1).a4().aa(),"project",v],x.N,x.z)},
fn4(d,e,f){var w=0,v=A.j(x.N),u
var $async$fn4=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.aj(C.h1R(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fn4,v)},
byu(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fn4(!0,d,e),$async$byu)
case 4:w=3
return A.b(r.api(g,d,e.a),$async$byu)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dB.aE(B.Q.aj(C.h1R(d,e,null),null))
u="NGMY_WS:"+B.jP.gcq().aE(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byu,v)},
fV0(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fGW(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.cT(s,"NGMYWSSYNC2|"))return!0
if(J.cT(s,"NGMY_WS:"))return!0
if(J.eR(s,t))return!0
if(J.cT(s,"{"))try{w=B.Q.aC(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hKK(d){var w,v,u,t=C.fV0(d)
if(t==null)return null
if(C.fGW(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.fGW(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.fGW(v))return v}return null},
fGV(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.cT(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cT(q,"NGMY_WS:")){v=B.c0.c4(0,B.cw.aE(J.md(q,8)))
w=t.a(B.Q.aC(0,v,r))}else w=t.a(B.Q.aC(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fBJ(A.Y(u,x.N,x.z))
return t}catch(s){return r}},
byt(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$byt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aph(t[1]),$async$byt)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fGV(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fGV(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byt,v)},
fGU(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l0(w,v,d.c,d.d,new A.N(Date.now(),0,!1))},
by1(){var w=0,v=A.j(x.o),u,t
var $async$by1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.F2(),$async$by1)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fGV(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$by1,v)},
h2H(d,e,f,g){return A.c1(B.K,new C.fv9(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fv9:function fv9(d,e,f){this.a=d
this.b=e
this.c=f},
aaV:function aaV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
etl:function etl(d,e){this.a=d
this.b=e},
etm:function etm(d,e){this.a=d
this.b=e},
etn:function etn(d,e){this.a=d
this.b=e},
eto:function eto(d,e){this.a=d
this.b=e},
etk:function etk(d){this.a=d},
ape:function ape(d,e,f){this.c=d
this.d=e
this.a=f},
bgH:function bgH(){var _=this
_.c=_.a=_.e=_.d=null},
esZ:function esZ(d,e){this.a=d
this.b=e},
et_:function et_(d){this.a=d},
et0:function et0(d){this.a=d},
apj:function apj(d){this.a=d},
aBp:function aBp(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
et2:function et2(d){this.a=d},
et1:function et1(d){this.a=d},
hky(d,e,f,g,h){return new C.Mb(h,g,d,e,f,null)},
aG9:function aG9(d,e){this.a=d
this.b=e},
Mb:function Mb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBr:function aBr(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
etL:function etL(){},
etH:function etH(d,e){this.a=d
this.b=e},
etI:function etI(d){this.a=d},
ets:function ets(d){this.a=d},
etq:function etq(d){this.a=d},
etr:function etr(d){this.a=d},
etB:function etB(d,e){this.a=d
this.b=e},
ety:function ety(d,e){this.a=d
this.b=e},
etz:function etz(d,e){this.a=d
this.b=e},
etA:function etA(d,e,f){this.a=d
this.b=e
this.c=f},
etw:function etw(d,e,f){this.a=d
this.b=e
this.c=f},
etu:function etu(d){this.a=d},
etv:function etv(d){this.a=d},
etx:function etx(d){this.a=d},
etO:function etO(d){this.a=d},
etN:function etN(d){this.a=d},
etP:function etP(d){this.a=d},
etM:function etM(d){this.a=d},
etp:function etp(d){this.a=d},
ett:function ett(d,e){this.a=d
this.b=e},
etK:function etK(d,e){this.a=d
this.b=e},
etJ:function etJ(d,e){this.a=d
this.b=e},
etE:function etE(d){this.a=d},
etF:function etF(d){this.a=d},
etG:function etG(d,e){this.a=d
this.b=e},
etD:function etD(d,e){this.a=d
this.b=e},
etC:function etC(d,e,f){this.a=d
this.b=e
this.c=f},
bsW:function bsW(){},
zo(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ad("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aI(v,w,"_")},
adi(d,e,f){return C.hzF(d,e,f)},
hzF(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adi=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.an("String",e,f),$async$adi)
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
return A.i($async$adi,v)},
adh(d,e){return C.hzE(d,e)},
hzE(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adh=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adh)
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
return A.i($async$adh,v)},
hyt(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QO(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bvE(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bvE=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZp(q),$async$bvE)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aMw(q,!1),$async$bvE)
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
return A.i($async$bvE,v)},
h8u(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
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
fBJ(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d2(s,x.f)
w=A.cy(w,new C.cpF(),w.$ti.k("E.E"),x.Q)
v=A.a2(w).k("a3<E.E>")
r=A.z(new A.a3(w,new C.cpG(),v),v.k("E.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bg(J.k(t==null?"":t))
return new C.l0(w,v,u,r,t==null?new A.N(Date.now(),0,!1):t)},
hDj(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wj
case"female":case"f":return D.aet
default:return D.wB}},
fZA(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fKT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hDj(v==null?j:J.k(v))
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
hDl(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Kf
case"viewer":return D.jY
default:return D.rI}},
hDm(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
ET(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bwT(d,e){return B.a.i(e.toLowerCase())===C.ET(d,e)&&d.y!==D.jY},
tf(d,e){var w,v=d.y
if(v===D.jY)return!1
w=B.a.i(e.toLowerCase())
if(w===C.ET(d,e))return!0
if(v===D.Kf)return!0
v=d.e
return new A.I(v,A.fH_(),A.R(v).k("I<1,n>")).q(0,w)},
hCN(d){return J.dF(d,new C.f8O()).gH(0)},
fvw(d){var w=0,v=A.j(x.y),u,t
var $async$fvw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zw(d),$async$fvw)
case 3:u=t.rj(f,new C.fvx(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvw,v)},
bwD(d,e){var w=0,v=A.j(x.H),u,t
var $async$bwD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zw(d),$async$bwD)
case 3:t=g
if(J.rj(t,new C.f8_(e))){w=1
break}if(C.hCN(t)>=2)throw A.O(A.b9("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bwD,v)},
ahP(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d2(n,x.f)
w=A.cy(w,new C.bIl(),w.$ti.k("E.E"),x.P)
v=A.a2(w).k("a3<E.E>")
m=A.z(new A.a3(w,new C.bIm(),v),v.k("E.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b4(u,new C.bIn(),x.N)
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
return new C.kk(l,w,v,!s,t,m,r,q,p,C.hDl(o==null?null:J.k(o)))},
fZJ(d){var w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.al(v,0,8)},
Bw(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Bw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Py(d),$async$Bw)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aw(),$async$Bw)
case 4:t=f
w=5
return A.b(t.a3o(0),$async$Bw)
case 5:w=6
return A.b(C.f0c(t,l),$async$Bw)
case 6:s=f
if(J.ct(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aR(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fVz(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oc(l,n),$async$Bw)
case 11:u=n
w=1
break
case 10:case 8:m=A.aR(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fVz(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oc(l,n),$async$Bw)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Bw,v)},
f0c(d,e){return C.hw1(d,e)},
hw1(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f0c=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aR(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zo(a9)))
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
break}m=A.aR(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zo(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aC(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fBJ(A.Y(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aR(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zo(a9)+"_"+n))
i=C.hyt(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZp(h),$async$f0c)
case 17:g=b1
if(g!=null){i=i.QO(g)
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
case 8:J.PH(q,new C.f0d())
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
return A.i($async$f0c,v)},
bx2(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bx2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Py(d),$async$bx2)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Bw(r),$async$bx2)
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
return A.i($async$bx2,v)},
fVz(d){var w,v,u,t
try{w=B.Q.aC(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d2(w,x.f)
v=A.cy(v,new C.eX8(),v.$ti.k("E.E"),x.i)
u=A.a2(v).k("a3<E.E>")
v=A.z(new A.a3(v,new C.eX9(),u),u.k("E.E"))
B.d.aY(v,new C.eXa())
return v}catch(t){v=A.a([],x.D)
return v}},
oc(d,e){return C.hMt(d,e)},
hMt(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
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
a2=C.zo(a8)
p=A.aR(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b4(x.j.a(B.Q.aC(0,p,null)),new C.fo1(),a2).fF(0)
a2=J.b4(b3,new C.fo2(),a2).bZ(0,new C.fo3())
n=A.d8(a2,a2.$ti.k("E.E"))
a2=o,a2=A.ee(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eR(n,m)?17:18
break
case 17:a5=C.zo(a8)
l=A.aR(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a62(l),$async$oc)
case 19:t=21
a5=C.zo(a8)
k=A.aR(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aC(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a62(a5==null?null:J.k(a5)),$async$oc)
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
return A.b(C.adh(r,"ngmy_worksheet_item_v3_"+C.zo(a8)+"_"+m),$async$oc)
case 29:w=30
return A.b(C.adh(r,"ngmy_worksheet_thumb_v3_"+C.zo(a8)+"_"+m),$async$oc)
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
return A.b(C.bvE(h),$async$oc)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adi(r,"ngmy_worksheet_thumb_v3_"+C.zo(a8)+"_"+a4,f),$async$oc)
case 40:g=i.QO(f)
w=38
break
case 39:$.ak.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adh(r,"ngmy_worksheet_thumb_v3_"+C.zo(a8)+"_"+a4),$async$oc)
case 41:g=i.QO(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adh(r,"ngmy_worksheet_thumb_v3_"+C.zo(a8)+"_"+a4),$async$oc)
case 42:case 34:a4=i.a
w=43
return A.b(C.adi(r,"ngmy_worksheet_item_v3_"+C.zo(a8)+"_"+a4,B.Q.aj(g.ad(),null)),$async$oc)
case 43:e=b5
if(!e){$.ak.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adi(r,"ngmy_worksheets_index_v3_"+C.zo(a8),B.Q.aj(q,null)),$async$oc)
case 44:d=b5
if(!d){$.ak.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eB(b3,new C.fo4(q))
a4=a3.$ti.k("cR<1,a0<n,@>>")
a7=A.z(new A.cR(a3,new C.fo5(),a4),a4.k("E.E"))
a0=a7
w=45
return A.b(C.adi(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.aj(a0,null)),$async$oc)
case 45:w=46
return A.b(J.h7A(r),$async$oc)
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
return A.i($async$oc,v)},
Js(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Js=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bw(d),$async$Js)
case 3:t=g
s=J.cB(t)
r=s.be(t,new C.fvv(e))
if(r===-1)s.cj(t,0,e)
else s.m(t,r,e)
u=C.oc(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Js,v)},
bwQ(d,e){var w=0,v=A.j(x.H),u
var $async$bwQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Bw(d),$async$bwQ)
case 2:u=g
J.mY(u,new C.f9f(e))
w=3
return A.b(C.oc(d,u),$async$bwQ)
case 3:return A.h(null,v)}})
return A.i($async$bwQ,v)},
EV(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$EV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$EV)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aR(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aC(0,i,null)
if(x.j.b(t)){j=J.d2(t,x.f)
j=A.cy(j,new C.fbn(),j.$ti.k("E.E"),x.k)
s=A.a2(j).k("a3<E.E>")
r=A.z(new A.a3(j,new C.fbo(),s),s.k("E.E"))
B.d.aY(r,new C.fbp())
k=r}}catch(h){}w=4
return A.b(C.eXR(d),$async$EV)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hwo(k,p,d)
j=A.R(o)
s=j.k("I<1,a0<n,@>>")
s=A.z(new A.I(o,new C.fbq(),s),s.k("ai.E"))
n=B.Q.aj(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OJ(d,o),$async$EV)
case 7:case 6:j=j.k("a3<1>")
m=A.z(new A.a3(o,new C.fbr(d),j),j.k("E.E"))
if(m.length!==0)C.aL6(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$EV,v)},
fnO(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fnO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OJ(d,e),$async$fnO)
case 3:t=J.dF(e,new C.fnP(d))
s=A.z(t,t.$ti.k("E.E"))
if(s.length===0){u=!0
w=1
break}u=C.aL6(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnO,v)},
a0n(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aw(),$async$a0n)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aR(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aC(0,l,null)
if(x.j.b(u)){m=J.d2(u,x.f)
m=A.cy(m,new C.fvq(),m.$ti.k("E.E"),x.k)
t=A.a2(m).k("a3<E.E>")
s=A.z(new A.a3(m,new C.fvr(),t),t.k("E.E"))
o=s}}catch(k){}q=J.pI(o,new C.fvs(e))
if(B.a.i(e.x).length===0&&C.tf(e,d)){m=B.a.i(d.toLowerCase())
p=e.azC(e.y===D.jY?D.jY:D.rI,m)}else p=e
if(q===-1)J.p_(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OJ(d,o),$async$a0n)
case 3:w=C.tf(p,d)?4:5
break
case 4:w=6
return A.b(C.aL5(C.ET(p,d),p),$async$a0n)
case 6:if(!g)$.ak.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0n,v)},
aLf(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.EV(d),$async$aLf)
case 2:u=g
t=J.cB(u)
s=A.qD(t.eB(u,new C.f8X(e)))
t.bk(u,new C.f8Y(e))
w=3
return A.b(C.OJ(d,u),$async$aLf)
case 3:w=s!=null&&C.bwT(s,d)?4:5
break
case 4:w=6
return A.b(C.eXc(e),$async$aLf)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLf,v)},
af0(d){var w=d.f,v=A.R(w).k("a3<1>")
w=A.z(new A.a3(w,new C.fvB(),v),v.k("E.E"))
return w},
fEK(d,e){var w,v=d.f,u=A.qD(new A.a3(v,new C.f8y(e),A.R(v).k("a3<1>")))
v=C.af0(d)
w=A.R(v).k("a3<1>")
v=A.z(new A.a3(v,new C.f8z(e,u),w),w.k("E.E"))
B.d.aY(v,new C.f8A())
return v},
hDp(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h2J(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.be(C.fEK(d,u),new C.fvi(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hEU(d,e){var w
if(e==null||e.length===0)return 1
w=C.fEK(d,e)
if(w.length===0)return 1
return new A.I(w,new C.fc8(),A.R(w).k("I<1,G>")).fs(0,B.yK)+1},
hMm(d){var w,v=C.af0(d)
if(v.length===0)return null
w=new A.a3(v,new C.fnL(),A.R(v).k("a3<1>"))
if(!w.gah(0))return w.gI(0)
return B.d.gI(v)},
hDk(d){return A.D(["id",d.a,"name",d.b,"gender",C.fZA(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hEP(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.Q(a0,x.P)
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
d=q.azx(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.czf(a1,w,a3.d,a2.y,s,a0,v)},
zw(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$zw)
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
p=A.cy(p,new C.fbk(),p.$ti.k("E.E"),x.k)
s=A.a2(p).k("a3<E.E>")
p=A.z(new A.a3(p,new C.fbl(),s),s.k("E.E"))
B.d.aY(p,new C.fbm())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zw,v)},
aeO(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aeO=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rI:D.jY
a7=C.ET(b2,b3)
w=2
return A.b(C.zw(b1),$async$aeO)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.be(a8,new C.fnJ(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bwD(b1,b2),$async$aeO)
case 5:case 4:if(b0===-1){u=b2.azC(a6,a7)
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
s.m(0,m,l.azx(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bf<2>")
s=A.z(new A.bf(s,k),k.k("E.E"))
k=a5?D.rI:D.jY
u=t.xB(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OJ(b1,a8),$async$aeO)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aL5(B.a.i(b3.toLowerCase()),u),$async$aeO)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aeO,v)},
fVV(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.N(Date.now(),0,!1).a4().aa(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.R(m).k("I<1,a0<n,@>>"),k=A.z(new A.I(m,C.h1Z(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.D(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.D(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().aa(),"updatedAt",o],r,x.K),"createdAt",s.a4().aa(),"updatedAt",o],r,x.z)},
fVW(d,e){var w=new A.N(Date.now(),0,!1).a4().aa(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.R(u).k("I<1,a0<n,@>>")
u=A.z(new A.I(u,C.h1Z(),t),t.k("ai.E"))
return A.D(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().aa(),"updatedAt",w],x.N,x.z)},
hu9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ahP(A.Y(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.I(j,A.fH_(),A.R(j).k("I<1,n>")).bZ(0,new C.eXE())
t=A.z(j,j.$ti.k("E.E"))
if(u===v)s=D.rI
else s=B.d.q(t,u)?D.Kf:D.jY
return w.azC(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ahP(A.Y(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d2(q,h)
h=A.cy(h,new C.eXF(),h.$ti.k("E.E"),x.P)
p=A.a2(h).k("a3<E.E>")
o=A.z(new A.a3(h,new C.eXG(),p),p.k("E.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b4(n,new C.eXH(),x.N).bZ(0,new C.eXI())
t=A.z(h,h.$ti.k("E.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rI
else s=B.d.q(t,u)?D.Kf:D.jY
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
eXR(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eXR=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.eXV()
h=x.N
g=x.z
w=7
return A.b(A.iA(A.a([A.lP("family_trees","*",null,A.D(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bE),r.$2(A.lP("family_trees","*",A.D(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bE),"collaborator"),r.$2(A.lP("family_trees","*",null,A.D(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bE),"public")],x.cl),x.U),$async$eXR)
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
if(J.aa(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bf<2>")
h=A.cy(new A.bf(l,h),new C.eXS(a0),h.k("E.E"),x.k)
l=A.a2(h).k("a3<E.E>")
l=A.z(new A.a3(h,new C.eXT(),l),l.k("E.E"))
B.d.aY(l,new C.eXU())
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
return A.i($async$eXR,v)},
hwo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gah(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f0S(),v).bZ(0,new C.f0T())
t=A.d8(u,u.$ti.k("E.E"))
s=A.Q(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.ET(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.jY){m=q.e
m=!new A.I(m,A.fH_(),A.R(m).k("I<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.m(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hEP(l,v)
o=C.ET(k,w)
p=v.d
s.m(0,u,o===w?k.b63(p,D.rI):k.b63(p,v.y))}j=s.$ti.k("bf<2>")
j=A.z(new A.bf(s,j),j.k("E.E"))
B.d.aY(j,new C.f0U())
return j},
OJ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$OJ)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b4(e,new C.f2T(),x.a)
s=A.z(s,s.$ti.k("ai.E"))
w=3
return A.b(u.an("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.aj(s,null)),$async$OJ)
case 3:return A.h(null,v)}})
return A.i($async$OJ,v)},
aL5(d,e){return C.hBd(d,e)},
hBd(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aL5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lv("family_trees",A.a([C.fVV(e,d)],p),null,B.cy),$async$aL5)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lv("family_trees",A.a([C.fVW(e,d)],p),null,B.cy),$async$aL5)
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
return A.i($async$aL5,v)},
aL6(d,e){return C.hBe(d,e)},
hBe(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aL6=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.R(e).k("I<1,a0<n,@>>")
m=n.k("ai.E")
l=A.z(new A.I(e,new C.f7m(d),n),m)
r=l
w=7
return A.b(A.lv("family_trees",r,null,B.cy),$async$aL6)
case 7:q=g
if(q){u=!0
w=1
break}k=A.z(new A.I(e,new C.f7n(d),n),m)
p=k
w=8
return A.b(A.lv("family_trees",p,null,B.cy),$async$aL6)
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
return A.i($async$aL6,v)},
eXc(d){return C.hty(d)},
hty(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eXc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.P8("family_trees",A.D(["id",d],x.N,x.z),null,B.cy),$async$eXc)
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
return A.i($async$eXc,v)},
qo:function qo(d,e,f,g,h){var _=this
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
cpI:function cpI(){},
cpH:function cpH(){},
cpF:function cpF(){},
cpG:function cpG(){},
FW:function FW(d,e){this.a=d
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
ahO:function ahO(d,e){this.a=d
this.b=e},
f8O:function f8O(){},
fvx:function fvx(d){this.a=d},
f8_:function f8_(d){this.a=d},
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
bIp:function bIp(){},
bIo:function bIo(){},
bIl:function bIl(){},
bIm:function bIm(){},
bIn:function bIn(){},
f0d:function f0d(){},
eX8:function eX8(){},
eX9:function eX9(){},
eXa:function eXa(){},
fo1:function fo1(){},
fo2:function fo2(){},
fo3:function fo3(){},
fo4:function fo4(d){this.a=d},
fo5:function fo5(){},
fvv:function fvv(d){this.a=d},
f9f:function f9f(d){this.a=d},
fbn:function fbn(){},
fbo:function fbo(){},
fbp:function fbp(){},
fbq:function fbq(){},
fbr:function fbr(d){this.a=d},
fnP:function fnP(d){this.a=d},
fvq:function fvq(){},
fvr:function fvr(){},
fvs:function fvs(d){this.a=d},
f8X:function f8X(d){this.a=d},
f8Y:function f8Y(d){this.a=d},
fvB:function fvB(){},
f8y:function f8y(d){this.a=d},
f8z:function f8z(d,e){this.a=d
this.b=e},
f8A:function f8A(){},
fvi:function fvi(d){this.a=d},
fc8:function fc8(){},
fnL:function fnL(){},
fbk:function fbk(){},
fbl:function fbl(){},
fbm:function fbm(){},
fnJ:function fnJ(d){this.a=d},
eXE:function eXE(){},
eXF:function eXF(){},
eXG:function eXG(){},
eXH:function eXH(){},
eXI:function eXI(){},
eXV:function eXV(){},
eXW:function eXW(d){this.a=d},
eXS:function eXS(d){this.a=d},
eXT:function eXT(){},
eXU:function eXU(){},
f0S:function f0S(){},
f0T:function f0T(){},
f0U:function f0U(){},
f2T:function f2T(){},
f7m:function f7m(d){this.a=d},
f7n:function f7n(d){this.a=d},
cpJ:function cpJ(d,e){this.a=d
this.b=e},
cpK:function cpK(d,e){this.a=d
this.b=e},
aDs:function aDs(d,e,f){this.a=d
this.b=e
this.c=f},
b4A:function b4A(){this.b=this.a=0},
b4z:function b4z(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bre:function bre(){},
vQ(d,e){var w,v
if(d==null)return""
w=d.bP()
v=""+w.gcb()+"/"+w.gcp()+"/"+w.gcc()
if(!e)return v
return v+" "+B.a.aU(B.o.u(w.gmE()),2,"0")+":"+B.a.aU(B.o.u(w.gER()),2,"0")},
hkv(){var w,v=$.oX(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aF(32)]
return"WS"+B.d.fL(u)},
apf(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bZ(),$async$apf)
case 3:if(!e){u=A.Q(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eU("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bE),$async$apf)
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
return A.i($async$apf,v)},
apg(d){return C.hkw(d)},
hkw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apg=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bZ(),$async$apg)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_worksheet_project_qr_stashes_v1",A.D(["stashes",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cy,null),$async$apg)
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
return A.i($async$apg,v)},
api(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$api=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bZ(),$async$api)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hkv()
w=4
return A.b(C.apf(),$async$api)
case 4:r=h
q=B.a.i(e)
p=B.dB.aE(t)
J.aE(r,s,A.D(["ownerEmail",q,"projectId",f,"payload",B.cM.gcq().aE(p),"usesRemaining",25,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(C.apg(r),$async$api)
case 5:u=new A.YS("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$api,v)},
aph(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aph=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bZ(),$async$aph)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apf(),$async$aph)
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
try{s=B.c0.c4(0,B.cw.aE(t))}catch(h){r=A.a5(h)
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
return A.b(C.apg(q),$async$aph)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aph,v)},
fQv(){var w=new A.N(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cz.aF(999999)},
hkx(d){var w,v,u,t,s,r,q
try{w=A.adG(d)
if(w==null)return d
v=w
if(J.Jy(v)>960||J.Jx(v)>960){s=v
r=J.Jy(v)>=J.Jx(v)?960:null
v=A.adF(s,J.Jx(v)>J.Jy(v)?960:null,B.Ly,r)}s=v
u=A.aje(82).R9(s,B.xk)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.a5(q)
$.ak.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
ca1(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$ca1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hkx(e)
$.c9Y.m(0,s,t)
u=C.byw(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ca1,v)},
aZp(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZp=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cT(l,"data:image")){u=null
w=1
break}t=4
r=J.eR(l,",")?B.d.gai(J.lA(l,",")):l
q=B.cw.aE(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.fQv()
w=7
return A.b(C.ca1(p,q),$async$aZp)
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
return A.i($async$aZp,v)},
c9Z(d){var w=0,v=A.j(x.T),u,t,s
var $async$c9Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.ca0(s),$async$c9Z)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gcq().aE(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9Z,v)},
a62(d){var w=0,v=A.j(x.H),u,t
var $async$a62=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h1S(d)
if(t==null){w=1
break}$.c9Y.W(0,t)
w=3
return A.b(C.byv(t),$async$a62)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a62,v)},
byw(d,e){return C.hKN(d,e)},
hKN(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$byw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aK5
w=7
return A.b(n==null?$.aK5=I.fDP():n,$async$byw)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.me(r,"thumbs","readwrite")
B.ik.lK(J.mc(p,"thumbs"),q,l)
w=8
return A.b(J.oZ(p),$async$byw)
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
return A.i($async$byw,v)},
byv(d){return C.hKL(d)},
hKL(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byv=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aK5
w=7
return A.b(o==null?$.aK5=I.fDP():o,$async$byv)
case 7:r=f
q=J.me(r,"thumbs","readwrite")
B.ik.En(J.mc(q,"thumbs"),m)
w=8
return A.b(J.oZ(q),$async$byv)
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
return A.i($async$byv,v)}},D,Ae,Af,O,Ag,Ah,I,P,W,Ai
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
C.alm.prototype={}
C.aUK.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bae(),f=h.x!=null&&h.xZ(i).length===0
if(h.x!=null)w=f?B.aW:B.bR
else w=h.gRN()?B.bR:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b4S,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.eaY,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h_,i,i,i),B.T,D.eCK,B.au,A.d(C.vQ(new A.N(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ez_,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aRL,i,i,i,i,B.Vi,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fFA(h.d)
o=A.p(B.B,C.aUJ(A.feg(h.e,n),30),B.h,i,i,new A.o(B.lN,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.euy,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.bw,D.eD0,B.aa,A.p(i,A.u(A.a([D.eRd,B.bw,A.d(A.zy(h.c),i,i,i,i,i,i,D.epN,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eV,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,p,q,i,i,B.n),i,i,i,i,K.acD,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aLU("Original due",C.vQ(h.r,!1))
n=j.aLU("Current due",C.vQ(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.u(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaG9(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zu,i,i,1/0),B.T,j.c64(),B.P,j.bVL(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eDX,B.au,A.d(q,i,i,i,i,i,i,D.etV,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaBc()){q=A.m(14)
o=A.H(B.ct,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eSp,B.P,A.bu(A.m(12),A.ec(new A.a4(1/0,88,A.b1(i,i,i,new A.TO(h.ax,B.M,D.eei,!0,3.5,i),B.as),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Dq,i,i,i)],s))}p.push(B.aA)
p.push(D.eLc)
return A.p(i,A.u(A.a([r,new A.B(B.acG,A.u(p,B.ah,i,B.e,B.j,0,B.p),i)],s),B.ah,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aLU(d,e){var w=null
return A.A(A.a([A.C(A.d(d,w,w,w,w,w,w,D.a4k,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eqL,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c64(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6v(B.e1,u,"Not paid yet")
w=t.xZ(null).length
v=w===0?B.aW:B.bR
return this.a6v(v,u,C.vQ(t.x,!0))},
bVL(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6v(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6v(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4k,u,u,u)
v=A.R(d).k("I<1,ha>")
v=A.z(new A.I(d,new C.bWX(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.cd(B.bH,v,B.by,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6v(d,e,f){var w=null
return A.A(A.a([A.C(A.d(e,w,w,w,w,w,w,D.a4k,w,w,w),1),new A.dp(1,B.ck,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dO,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b6H.prototype={
a5(d,e){new A.TO(this.b,B.M,e,!0,3.5,null).a5(d,e)},
ao(d){return d.b!==this.b}}
C.alt.prototype={
S(){return new C.azr(A.a([],x.bp))},
gdQ(){return this.c}}
C.azr.prototype={
Z(){this.a0()
this.Hf()},
Hf(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_C(t.a.c),$async$Hf)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dxq(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hf,v)},
aNK(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aN,s=A.l(v,v,u?B.bm:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bm:B.bu).j(0.22)
w=A.m(10)
return A.bn(v,new A.b2(4,r,new A.ay(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b2(4,w,new A.ay((this.a.d.a?B.bm:B.bu).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b2(4,A.m(10),D.aPq),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aNJ(d){return this.aNK(d,null)},
NA(d){return this.c9D(d)},
c9D(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EG:B.er
w=7
return A.b(new A.hQ().AV(72,900,900,n),$async$NA)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$NA)
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
o=A.a5(l)
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
return A.i($async$NA,v)},
aVF(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aN,o=A.m(10),n=A.H((q?B.bm:B.bu).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bm:B.bu
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aN:B.aG,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bm:B.bu
t=x.p
u=A.C(A.u(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a1,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fn(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c6)
q=A.a([q,B.ab,u,A.bF(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.cu,s.a.d.a?B.bm:B.bu,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c6))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kT,D.beq,r,r,r)},
BR(d){return this.bsT(d)},
bsS(){return this.BR(null)},
bsT(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BR=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.at()
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
m=A.bX(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)}else{a4=a5.f
m=A.bX(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bi(a4,!0,x.cT)
i=a3?null:A.fFA(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.uS?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hM(B.x.j(0.55),!0,"Dismiss",a4,new C.dx9(),new C.dxa(a2,t,a5,r,new C.dxb(a2,t),o,n,j),B.eE,!0,x.y),$async$BR)
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
break}if(f.length===0||e<=0){t.c.F(x.q).f.P(D.ekA)
w=1
break}a0=a2.d
if(a0==null){t.c.F(x.q).f.P(D.ejf)
w=1
break}a1=A.feg(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.uS?"male":"female"
w=7
return A.b(A.af_(a3,A.fNn(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BR)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.uS?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bX(a3.gcc(),a3.gcb(),a3.gcp(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bX(a4.gcc(),a4.gcb(),a4.gcp(),0,0,0,0,0)))a5.cBl(a2.a)
w=8
return A.b(A.af_(t.a.c,a5),$async$BR)
case 8:case 5:w=9
return A.b(t.Hf(),$async$BR)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BR,v)},
aOj(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.M:B.aN
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bm:B.bu).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aUJ(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aN:B.aG
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.p(p,A.A(A.a([r,B.bq,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b5,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ac)},
Qa(d){return this.cqs(d)},
cqs(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hM(B.x.j(0.55),!0,"Dismiss",s,new C.dxt(),new C.dxu(t,d),B.hG,!0,x.y),$async$Qa)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.N(s,0,!1)
case 4:w=7
return A.b(A.af_(t.a.c,d),$async$Qa)
case 7:w=8
return A.b(t.Hf(),$async$Qa)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qa,v)},
Mg(d,e){return this.bDl(0,e)},
bDl(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kN(s,"Cancel","Delete",e.b+" \xb7 "+A.zy(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mg)
case 3:if(!g){w=1
break}w=4
return A.b(C.f93(t.a.c,e.a),$async$Mg)
case 4:w=5
return A.b(t.Hf(),$async$Mg)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mg,v)},
abI(d){return this.c3H(d)},
c3H(d){var w=0,v=A.j(x.H),u=this,t
var $async$abI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c1(B.K,new C.dxn(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$abI)
case 2:return A.h(null,v)}})
return A.i($async$abI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dMD
w=J.dF(m.d,new C.dxv())
v=A.z(w,w.$ti.k("E.E"))
w=J.dF(m.d,new C.dxw())
u=A.z(w,w.$ti.k("E.E"))
t=B.d.cI(v,0,new C.dxx())
w=A.m(18)
s=m.a.d.a
r=s?D.c7Q:D.asf
q=A.H(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.bBF,B.h,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.aw,A.C(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.X,!0,A.m(12),A.aH(!1,A.m(12),!0,D.dM4,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dxy(m),l,l,l,l,l,l,l),B.h,B.cW,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.C(m.cmN("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zy(t)
r=A.a([A.p(l,A.u(A.a([s,B.aa,A.A(A.a([o,B.ab,A.C(m.b0v(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aE,B.w,r,l,l),B.n),l,l,l,l,B.acA,l,l,l),B.aA],p)
if(J.ch(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bm:B.bu).j(0.12),B.r,1)
n=A.p(l,D.bwM,B.h,l,l,new A.o(B.cW.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.aa,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bu,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bgQ,l,l,1/0))}else{w=m.gc8W()
s=A.z(new A.I(v,w,A.R(v).k("I<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.B(D.bir,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bu,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.I(u,w,A.R(u).k("I<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.ah,l,B.e,B.j,0,B.p)},
b0v(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.x.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bm:B.bu).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bm:B.bu,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aN:B.aG
return A.p(u,A.u(A.a([q,B.bw,A.d(f,u,1,B.Z,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cmN(d,e){return this.b0v(!1,d,e)},
c8X(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.xZ(j).length,h=d.b9r()
if(d.x!=null){w=d.xZ(j).length
v=w===0?B.cW:B.bR}else if(d.gRN())v=B.bR
else{if(h)w=B.cW
else w=k.a.d.a?B.bm:B.bu
v=w}if(d.x!=null){w=d.xZ(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vQ(u,!1)}else{u.toString
t="Paid "+C.vQ(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vQ(w,!1)+" \xb7 "+i+" missed":"Due "+C.vQ(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRN()&&d.x==null)s=B.bR.j(0.35)
else s=(k.a.d.a?B.bm:B.bu).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.a9(0,B.G,B.x.j(0.04),B.cC,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lN
o=A.H(d.gRN()&&d.x==null?B.bR.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fFA(d.d)
o=A.p(B.B,A.d5(C.aUJ(A.feg(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aN:B.aG
m=x.p
n=A.a([new A.dp(1,B.ck,A.d(p,j,1,B.Z,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBc())B.d.v(n,A.a([B.ez,A.V(B.KD,B.cW.j(0.8),j,j,j,14)],m))
p=A.C(A.u(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.dd,A.d(t,j,1,B.Z,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zy(d.c)
l=k.a.d.a?B.aN:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.X,!0,j,A.aH(!1,q,!0,new A.B(S.ack,A.A(A.a([o,B.bd,p,B.ab,A.u(A.a([n,B.bw,A.V(B.em,(k.a.d.a?B.bm:B.bu).j(0.5),j,j,j,18)],m),B.dE,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dxp(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ac),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d6,j,j,j,j)}}
C.mJ.prototype={
ad(){var w=this
return A.D(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().aa()],x.N,x.z)},
b6f(d,e,f){return new C.mJ(this.a,e,d,f)}}
C.FV.prototype={
xx(d,e,f,g,h,i,j,k,l,a0,a1){var w=this,v=j==null?w.a:j,u=a0==null?w.b:a0,t=k==null?w.c:k,s=e==null?w.d:e,r=f==null?w.e:f,q=a1==null?w.f:a1,p=h==null?w.r:h,o=g==null?w.w:g,n=l==null?w.x:l,m=d==null?w.y:d
return new C.FV(v,u,t,s,r,q,p,o,n,m,i==null?w.z:i)},
azr(d){var w=null
return this.xx(w,w,w,w,d,w,w,w,w,w,w)},
b6d(d,e,f){var w=null
return this.xx(d,w,w,w,w,w,w,e,w,f,w)},
cxT(d){var w=null
return this.xx(w,w,w,w,w,d,w,w,w,w,w)},
cy1(d){var w=null
return this.xx(w,w,w,w,w,w,w,w,d,w,w)},
cxd(d){var w=null
return this.xx(w,w,w,d,w,w,w,w,w,w,w)},
cy3(d){var w=null
return this.xx(w,w,w,w,w,w,w,w,w,w,d)},
cxa(d){var w=null
return this.xx(w,w,d,w,w,w,w,w,w,w,w)},
cx5(d){var w=null
return this.xx(w,d,w,w,w,w,w,w,w,w,w)},
Eg(d){var w=null
return this.xx(w,w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return A.D(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z],x.N,x.z)},
cv3(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bIk(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.M(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cJ(d.h(0,n))).length!==0?B.a.i(A.cJ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cJ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AN.ge9(D.AN))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_B)
q=l.$2("frame",D.a_8)
l=l.$2("texture",D.a_3)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cJ(d.h(0,"author"))):o
return this.xx(p,u,t,q,r,A.tc(d.h(0,"ribbon"))?A.Ex(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.X4.prototype={
S(){return new C.awy(A.a([],x.I),D.Ke)},
gdQ(){return this.c}}
C.awy.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yu(0,1)
w=$.at()
v.z=new A.ao(B.aq,w)
v.Q=new A.ao(B.aq,w)
v.kp()
w=v.a
C.bx_(w.c,w.d).bA(new C.cZE(v),x.fL)},
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
return A.b(C.J0(s.c,s.d),$async$kp)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.cZs(t,r))
t.arS()
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
gaoy(){var w,v=this
if(!J.ch(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
arS(){var w,v,u=this.gaoy(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saR(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saR(0,w==null?"":w)},
c27(d){this.n(new C.cZp(this,d))
this.arS()},
LE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mJ(B.o.u(1000*Date.now()),"Untitled page","",new A.N(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aMR(r.c,r.d,s),$async$LE)
case 3:w=4
return A.b(t.kp(),$async$LE)
case 4:if(t.c==null||J.ch(t.d)){w=1
break}q=J.pI(t.d,new C.cZ2(s))
p=q>=0?q:J.aa(t.d)-1
t.n(new C.cZ3(t,p))
t.arS()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A0(p+1,B.co,B.kq),$async$LE)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LE,v)},
DA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaoy()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aMR(o.c,o.d,new C.mJ(s,r,q,new A.N(p,0,!1))),$async$DA)
case 3:w=4
return A.b(t.kp(),$async$DA)
case 4:if(t.c==null){w=1
break}t.n(new C.cZt(t))
case 1:return A.h(u,v)}})
return A.i($async$DA,v)},
Mh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaoy()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cZ9(r),s,null,!0,!0,x.y),$async$Mh)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bwM(s.c,s.d,r.a),$async$Mh)
case 4:t.n(new C.cZa(t))
w=5
return A.b(t.kp(),$async$Mh)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RQ(B.o.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mh,v)},
xi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DA(),$async$xi)
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
return A.b(C.P0(s,r.r,o,p,q),$async$xi)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).K(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h2k(s,r.x,r.r),$async$xi)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.J0(s.c,s.d),$async$xi)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.G(l,new C.mJ(""+(m+k),q,B.a.i(j.b),new A.N(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zF(r.c,r.d,l),$async$xi)
case 11:w=12
return A.b(t.kp(),$async$xi)
case 12:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xi,v)},
YZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DA(),$async$YZ)
case 5:case 4:if(t.c==null){w=1
break}s=t.gDT(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.xr,new C.cZq(t),new C.cZr())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m0("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new F.m0(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fHa(o,new F.qH(s,r,"",p,new F.tN(q.d,null,null,null,null,"","","")),null),$async$YZ)
case 6:case 1:return A.h(u,v)}})
return A.i($async$YZ,v)},
UQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(D.b09,new C.cZb(t),r,!0,!0,!0,D.eao,!1,!1,x.e),$async$UQ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cZc(t,s))
r=t.a
w=4
return A.b(C.a0i(r.c,r.d,s),$async$UQ)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A0(0,B.dU,B.o_)
case 1:return A.h(u,v)}})
return A.i($async$UQ,v)},
bIn(d){var w=d.bP(),v=B.a.aU(B.o.u(w.gcb()),2,"0"),u=B.a.aU(B.o.u(w.gcp()),2,"0")
return""+w.gcc()+"-"+v+"-"+u},
gDT(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bQe()
if(r.e)w=D.a7C
else if(J.ch(r.d)){w=r.y
v=r.gDT(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.epf,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.B(Ad.adz,new C.Wm(w,v,0,q),q),q),B.bv,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.jv.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aJ(q,A.p(q,D.eaO,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.a9(0,B.G,B.dM.j(0.45),B.J,18)],x.V),E.uI,B.n),q,q,q,q,B.Vs,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcud(),q,q,q,q,q,q,!1,B.ae))
w.push(B.T)
w.push(A.hg(D.bt5,D.eWQ,r.gaHS(),q))
B.d.v(u,w)}w=A.as(A.cf(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.el,q,q,B.af),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.jv.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dJ:B.yI
u=A.u(A.a([new A.B(D.bg9,w,q),A.C(A.Hb(v,new C.cZC(r),J.aa(r.d)+1,q,r.gc26(),u,B.aZ),1),r.bvE()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cg(q,D.a9z,new A.am(B.V,q,B.aX,B.q,A.a([D.aF4,A.br(!0,A.u(A.a([p,A.C(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bQe(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.ct(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.NO(B.dN,"AI",h.gbtD(),!0))
if(h.a.f)f.push(new C.NO(B.np,"Cover",h.gbDV(),!1))
if(J.ct(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.NO(B.rW,"Print",h.gcaS(),!1))
if(h.a.f&&J.ct(h.d)&&h.r>=0){v=h.w
u=v?B.hs:B.jf
t=v?"Save":"Edit"
f.push(new C.NO(u,t,v?h.gcgN():new C.cZm(h),!1))}if(h.a.f)f.push(new C.NO(B.hH,"Add page",h.gaHS(),!1))
v=A.m(22)
u=A.H(E.iQ.j(0.85),B.r,1.6)
t=A.a([new A.a9(0,B.G,B.x.j(0.5),B.cv,16),new A.a9(0,B.G,E.iQ.j(0.12),B.J,18)],x.V)
s=x.p
r=A.A(A.a([A.aJ(g,A.p(g,D.bsY,B.h,g,g,new A.o(B.x.j(0.3),g,A.H(E.iQ.j(0.6),B.r,1),g,g,g,B.a6),g,30,g,g,g,g,g,30),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.cZn(h),g,g,g,g,g,g,!1,B.ae),A.C(new A.B(B.fi,A.eY(B.B,A.d(h.gDT(0),g,1,g,g,!1,g,D.eoN,g,g,g),B.h,B.e8),g),1),D.ef1],s),B.m,g,B.e,B.j,0,g,g)
q=x.O
p=A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.a8(B.a_,B.a7,B.w,A.a([B.K,E.iQ.j(0.7),B.K],q),g,g),B.n),g,1,g,g,g,g,g,g)
o=A.a([],s)
for(n=f.length,m=0;m<f.length;f.length===n||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.d54
else{k=new A.b3(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],q)
i=new A.ay(E.iQ.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.jv,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c2(i,i,i,i),new A.bx(k,k,k,k),g,new A.a8(B.a_,B.a7,B.w,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.jv.j(0.85)
o.push(new A.bG(1,B.bp,A.aJ(B.c5,A.u(A.a([k,B.bw,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ae),g))}return A.p(g,A.u(A.a([r,new A.B(B.u9,p,g),A.A(o,B.m,g,B.e,B.j,0,g,g)],s),B.m,g,B.e,B.R,0,B.p),B.h,g,g,new A.o(g,g,u,v,t,D.ajh,B.n),g,g,g,D.beS,B.ln,g,g,g)},
yL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.DA(),$async$yL)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.ffy(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.cZ4(t,p),s,null,!0,!0,x.N),$async$yL)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xi(),$async$yL)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Co(),$async$yL)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.DW("Swahili (Kiswahili)",!0),$async$yL)
case 18:w=16
break
case 17:w=19
return A.b(t.cr1(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yL)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yL,v)},
WD(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.iQ.j(0.3),B.r,1),r=x.p
return new A.B(B.cK,A.aH(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uI,B.a6),w,42,w,w,w,w,w,42),B.bd,A.C(A.u(A.a([A.d(f,w,w,w,w,w,w,A3.a3W,w,w,w),A.d(g,w,w,w,w,w,w,E.a3O,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZo(d,h),w,w,w,w,w,w,w),w)},
Co(){return this.bHS()},
bHS(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Co=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cZf(r),a7,null,!0,!0,x.ei),$async$Co)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.z(r.d,x.B)
p=g
f=r.y
o=new A.eK("Working on it\u2026",$.at())
a6.a=!0
a7=r.c
a7.toString
A.cb(null,null,!1,null,new C.cZg(o),a7,null,!0,!0,x.H).f4(new C.cZh(a6))
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
return A.b(C.aec(a0,a7,new C.cZi(o),d,l,e,j),$async$Co)
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
if(l!=null&&a6.a)A.a7(l,!0).eC()
l=o
l.shH($.at())
J.aNi(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.F(x.q).f
j=n
l.P(A.b_(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcg(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.am(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b6f(m.b.h(0,a4).b,a7,new A.N(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zF(j.c,j.d,l),$async$Co)
case 11:w=12
return A.b(r.kp(),$async$Co)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xr[a1].a)
a5=l.cv3(j,12,a7)
l=r.a
w=15
return A.b(C.a0i(l.c,l.d,a5),$async$Co)
case 15:if(r.c!=null)r.n(new C.cZj(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A0(0,B.dU,B.o_)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.F(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b_(a3?A.ckm("Undo",new C.cZk(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Co,v)},
DW(d,e){return this.cr2(d,e)},
cr1(d){return this.DW(d,!1)},
cr2(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$DW=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.z(r.d,x.B)
d=e
a0=new A.eK("Starting\u2026",$.at())
f.a=!0
k=r.c
k.toString
A.cb(null,null,!1,null,new C.cZv(a0),k,null,!0,!0,x.H).f4(new C.cZw(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.ci(o,new A.T(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a02(m,new C.cZx(a0)),$async$DW)
case 10:w=8
break
case 9:w=11
return A.b(C.byn(new C.cZy(a0),m,a2),$async$DW)
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
if(o!=null&&f.a)A.a7(o,!0).eC()
o=a0
o.shH($.at())
J.aNi(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.F(x.q).f
k=q
o.P(A.b_(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b6f(J.q(p,g).b,j.a,new A.N(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zF(k.c,k.d,o),$async$DW)
case 12:w=13
return A.b(r.kp(),$async$DW)
case 13:o=r.c
if(o==null){w=1
break}o=o.F(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(A.ckm("Undo",new C.cZz(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DW,v)},
bvE(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cZ5(v):u
r=A.aF(u,u,u,u,A.V(D.boK,s?D.jv:B.be,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.ct(v.d)&&!v.w&&v.r>=0)s=A.hg(A.V(B.uk,B.D4,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.D4,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbDu(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.jv.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.C(A.as(s,u,u,u),1)
w=t<J.aa(v.d)?new C.cZ6(v):u
return A.br(!0,new A.B(D.bfY,A.A(A.a([r,s,A.aF(u,u,u,u,A.V(B.em,t<J.aa(v.d)?D.jv:B.be,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.X8.prototype={
S(){return new C.bay(new A.ao(B.aq,$.at()))}}
C.bay.prototype={
ga_5(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
gbGF(){var w,v=this.ga_5()
A:{if("cover"===v){w=D.cD3
break A}if("book"===v){w=D.cze
break A}w=D.cZe
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.iQ.j(0.5),n=x.p,m=A.A(A.a([D.d55,B.aw,D.bl5,A.aF(q,q,q,q,B.l_,q,q,q,new C.d04(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.kv(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d05(r),r.ga_5()==="page",q,q,q,q))
if(r.a.d)l.push(A.kv(q,q,q,D.eRY,q,new C.d06(r),r.ga_5()==="book",q,q,q,q))
l.push(A.kv(q,q,q,D.eGm,q,new C.d07(r),r.ga_5()==="cover",q,q,q,q))
l=A.cd(B.bH,l,B.by,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bn(q,new A.b2(4,A.m(16),B.W),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kd,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ad,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbGF(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mZ(q,B.c.j(0.08),new A.w(s,q,B.H1,q,q,q,q,q,q,q,q,q),B.hj,new C.d08(r,s),q,q,q))}return A.eB(q,E.za,A.cf(A.u(A.a([m,B.T,D.eUT,B.ar,l,B.aa,k,B.P,A.cd(B.bH,w,B.by,6,6),B.aA,A.dj(D.bt2,D.eVD,new C.d09(r,d),A.bk(B.b0,q,q,q,q,B.om,q,q,new A.b5(A.m(16),B.W),q,q,q)),B.au,D.eQs],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.ft,q,q,B.af),q,q,q,D.adj,B.cZ,q,new A.b5(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.X6.prototype={
S(){return new C.awz(A.a([],x.Y))},
gdQ(){return this.c}}
C.ac5.prototype={}
C.awz.prototype={
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
return A.b(C.bx_(r.c,q),$async$kp)
case 6:j=e
i=J
w=7
return A.b(C.J0(t.a.c,q),$async$kp)
case 7:m.push(new l.ac5(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.cZT(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kp,v)},
b1I(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Oe(d,e){return this.c3F(0,e)},
c3F(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).ct(A.eO(new C.cZS(u,e),!0,null,x.y)),$async$Oe)
case 2:t=g
w=3
return A.b(u.kp(),$async$Oe)
case 3:if(t===!0&&u.c!=null)u.c.F(x.q).f.P(D.aIa)
return A.h(null,v)}})
return A.i($async$Oe,v)},
DZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$DZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.F(x.q).f.P(D.aI6)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adz(s.c,s.d),$async$DZ)
case 5:q=e
w=6
return A.b(t.kp(),$async$DZ)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Oe(0,B.d.kU(t.d,new C.cZX(q))),$async$DZ)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.P0(p,s.f,r,n,o),$async$DZ)
case 10:m=e
w=11
return A.b(t.kp(),$async$DZ)
case 11:if(m&&t.c!=null)t.c.F(x.q).f.P(D.aIa)
case 1:return A.h(u,v)}})
return A.i($async$DZ,v)},
NI(d,e){return this.ceC(0,e)},
ceC(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.cZW(t,e),s,null,!0,!0,x.y),$async$NI)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0g(s.c,s.d,e.a),$async$NI)
case 4:w=5
return A.b(t.kp(),$async$NI)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NI,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bvH(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.iQ.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aJ(n,new A.fT(0.7142857142857143,A.p(n,A.u(A.a([D.d56,B.aa,D.dLL,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.jv.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcu9(),n,n,n,n,n,n,!1,B.ae))}w=A.m(22)
v=A.H(E.iQ.j(0.85),B.r,1.6)
s=A.aJ(n,A.p(n,D.bAu,B.h,n,n,new A.o(B.x.j(0.3),n,A.H(E.iQ.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.cZY(d),n,n,n,n,n,n,!1,B.ae)
r=A.m(14)
q=B.x.j(0.3)
p=A.H(E.iQ.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bd,D.blo,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eoq,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h_,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.ajh,B.n),n,n,n,Ag.UZ,D.be6,n,n,n)
if(o.e)k=D.a7C
else k=k.length===0?D.aWt:A.cj(new C.cZZ(k))
return A.cg(n,D.a9z,new A.am(B.V,n,B.aX,B.q,A.a([D.aF4,A.br(!0,A.u(A.a([w,A.C(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bvH(d){var w,v,u=this,t=null,s=u.b1I(d),r=d.c,q=x.p,p=A.a([A.bU(0,A.eY(B.B,new A.a4(300,420,new C.Wm(d.b,s,r,t),t),B.h,B.dp),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aJ(t,A.p(t,D.bzO,B.h,t,t,new A.o(B.x.j(0.55),t,A.H(B.be,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZQ(u,d),t,t,t,t,t,t,!1,B.ae),t,t,t,6,6,t))
w=A.d(s,t,1,B.Z,t,t,t,D.eo2,t,t,t)
v=r===1?"page":"pages"
return A.aJ(t,A.u(A.a([new A.fT(0.7142857142857143,new A.am(B.V,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.jv.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.cZR(u,d),t,t,t,t,t,t,!1,B.ae)}}
C.NO.prototype={}
C.Wm.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.xr,new C.cyv(m),new C.cyw()),j=m.c,i=D.AN.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m1:B.b5
v=new C.cyx(h)
i=A.a([new A.a9(0,B.G,B.x.j(0.6),D.dJO,28)],x.V)
u=x.p
t=A.a([A.bU(0,A.b1(l,l,l,new C.b7S(j.x,h,l),B.as),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.a_,B.a7,B.w,A.a([B.x.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b3(3,3)
t.push(new A.cE(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bx(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adA,8,0.85,2.2),v.$4(D.biK,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adA,8,0.85,2.4))
else if(r==="corners")t.push(A.bU(0,new A.B(D.biG,A.b1(l,l,l,new C.b7J(h,l),B.as),l),0,0,0))
r=A.V(D.ary[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.Z,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ap3,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.aa,p,B.aa,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aS,A.d(r,l,2,B.Z,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bU(0,new A.B(D.bj9,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b1(l,l,l,new C.aDn(l),D.eec),l,l,l,46,0,l))
return A.p(l,A.bu(D.a6i,new A.am(B.V,l,B.a9,B.q,t,l),B.ap),B.h,l,l,new A.o(l,l,l,D.a6i,i,new A.a8(B.ax,B.aE,B.w,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b7S.prototype={
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
h=new A.aZ(k.r,B.av,null,null,j)
j.push(new A.bj(v,t))
k=i-0.04
j.push(new A.av(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.av(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bV())
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
C.b7J.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a1(),k=A.U(),j=this.b
k.r=j.j(0.9).gt(0)
k.b=B.aj
k.c=2.4
k.d=B.bZ
for(w=e.a,v=e.b,v=[D.e75,new A.d7([w,0,-1,1]),new A.d7([0,v,1,-1]),new A.d7([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aZ(l,B.av,null,null,s)
s.push(new A.bj(r+p*34,q))
s.push(new A.av(r,q))
s.push(new A.av(r,q+o*34))
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
C.tw.prototype={}
C.WF.prototype={
S(){return new C.b7Q()}}
C.b7Q.prototype={
gnr(){var w=this.d
return w===$?this.d=this.a.c:w},
gDT(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ao(new A.bb(w.b,B.aY,B.aL),$.at())}return v},
gawP(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ao(new A.bb(w.c,B.aY,B.aL),$.at())}return v},
gan9(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ao(new A.bb(w.y,B.aY,B.aL),$.at())}return v},
p(){var w=this,v=w.gDT(0),u=v.R$=$.at()
v.O$=0
v=w.gawP()
v.R$=u
v.O$=0
v=w.gan9()
v.R$=u
v.O$=0
w.a2()},
anK(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.kv(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cRX(this,f,u),e===u,s,s,s,s))}return A.cd(B.bH,r,B.by,6,8)},
at4(d){var w=null,v=B.c.j(0.07)
return A.bn(w,new A.b2(4,A.m(14),B.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l6,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnr(),a0=f.gDT(0),a1=a0.a.a,a2=f.gawP(),a3=a2.a.a,a4=f.gan9(),a5=d.b6d(a4.a.a,a3,a1)
a1=x.n
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a4(190,260,A.eY(B.B,new A.a4(270,370,new C.Wm(a5,d,f.a.e,e),e),B.h,B.dp),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.at4("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSl(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.at4("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSm(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
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
q=q?B.c:B.aB
v.push(A.aJ(e,A.u(A.a([p,B.dd,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSn(f,t),e,e,e,e,e,e,!1,B.ae))}v=A.cd(B.bH,v,B.by,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.b3(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eN:B.K,2,B.r,-1)
q.push(A.aJ(e,A.p(e,A.V(D.ary[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c2(o,o,o,o),new A.bx(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSo(f,n),e,e,e,e,e,e,!1,B.ae))}q=A.cd(B.bH,q,B.by,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.at4("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSp(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mb,e,e,e)
m=A.a([],w)
for(l=D.AN.gdH(D.AN),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eN:B.be
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c2(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aJ(e,A.u(A.a([j,B.bw,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSq(f,k),e,e,e,e,e,e,!1,B.ae))}m=A.cd(B.bH,m,B.by,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mb,e,e,e)
k=f.gnr()
return new A.B(new A.L(0,0,0,a3.f.d),A.br(!0,new A.d3(new A.aV(0,1/0,0,a1.a.b*0.92),A.cQ(A.a([D.ePW,B.aa,d,B.aS,a0,B.T,a2,B.aA,D.eVr,B.P,v,B.aA,D.eQ4,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.mt(e,9,""+B.k.U(f.gnr().f),36,18,new C.cSr(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mb,e,e,e),B.ar,f.anK(D.a_B,f.gnr().r,new C.cSs(f),D.d1m),B.aa,A.d("BORDER",e,e,e,e,e,e,H.mb,e,e,e),B.ar,f.anK(D.a_8,f.gnr().w,new C.cSt(f),D.d1r),B.aa,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mb,e,e,e),B.ar,f.anK(D.a_3,f.gnr().x,new C.cSv(f),D.d2P),B.ar,A.iu(e,B.b0,e,B.ag,e,new C.cSw(f),e,e,e,D.eKM,f.gnr().z),B.bv,A.bJ(D.eOS,new C.cSx(f,a6),A.bk(B.b0,e,e,e,e,B.om,e,e,new A.b5(A.m(16),B.W),e,e,e))],w),e,O.ad8,e,e,B.af,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDn.prototype={
a5(d,e){var w,v,u,t=new A.aZ($.a1().r,B.av,null,null,A.a([],x.v))
t.N(new A.bj(0,0))
w=e.a
t.N(new A.av(w,0))
v=e.b
t.N(new A.av(w,v))
t.N(new A.av(w/2,v-12))
t.N(new A.av(0,v))
t.N(new A.bV())
u=A.U()
u.saw(D.bFQ.aA(0,new A.af(0,0,0+w,0+v)))
d.b4(t,u)},
ao(d){return!1}}
C.bd0.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a1()
w=A.U()
w.saw(D.bEZ.aA(0,new A.af(0,0,a3,a4)))
a5.bp(new A.af(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f6()
u.dY(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ag()*20
l=56+u.ag()*40
k=D.cD2[u.aF(9)]
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
p.saw(D.bEq.aA(0,new A.af(0,r,a3,q)))
d=p.L()
w.drawRect(A.cz(new A.af(0,r,a3,q)),d)
d.delete()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.x.j(0.5).gt(0)
p.z=B.jg
d=p.L()
w.drawRect(A.cz(new A.af(0,q,a3,q+14)),d)
d.delete()}w=A.U()
w.r=D.aZx.j(0.72).gt(0)
a5.bp(new A.af(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.U()
a4.saw(new A.bR(B.B,0.5,B.w,a0,0,A.a([D.b4y.j(0.22),B.K],t),a0,a0).aA(0,A.c0(new A.v(w,a2),a1)))
a5.az(new A.v(w,a2),a1,a4)},
ao(d){return!1}}
C.b65.prototype={
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.c,n=B.a.i(o.c),m=A.ad("[ \t]{2,}",!0,!1,!1,!1),l=A.aI(n,m," ")
n=x.p
m=A.a([],n)
for(w=3;w>=1;--w){v=-w
m.push(new A.cE(14,w*2,v*2.2,v*2,p,p,new A.ky(new A.o(A.aq(D.jv,D.b88,w/4),p,new A.c2(B.W,new A.ay(B.x.j(0.12),1,B.r,-1),B.W,B.W),B.I3,p,p,B.n),B.b6,p,p),p))}v=x.V
u=A.a([new A.a9(0,B.G,B.x.j(0.35),B.aAU,8)],v)
t=A.a([],n)
for(w=0;w<5;++w){s=new A.b3(2,2)
t.push(A.p(p,p,B.h,p,p,new A.o(E.iQ.j(0.6),p,p,new A.bx(s,s,s,s),p,p,B.n),p,14,p,p,p,p,p,3))}u=A.p(p,A.u(t,B.m,p,B.qv,B.j,0,B.p),B.h,p,p,new A.o(p,p,p,D.aPa,u,D.bFO,B.n),p,p,p,p,p,p,p,14)
v=A.a([new A.a9(0,B.G,B.x.j(0.4),B.dn,18)],v)
t=A.an(p,A.b1(p,p,p,new C.aDn(p),D.ee7),p,p,p,26,-2,p)
s=o.d
r=q.x
if(q.f)o=A.u(A.a([A.aK(p,B.U,!1,p,!0,B.q,p,A.aL(),q.r,p,p,p,p,p,2,A.bn(p,B.et,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Page title",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!1,p,B.ad,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.eB9,!0,B.a5,p,B.am,p,p,p,p),A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.45),p,p,p,p,p,p,p,p,11,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.T,A.C(A.aK(p,B.U,!1,p,!0,B.q,p,A.aL(),q.w,p,p,p,p,p,2,A.bn(p,B.et,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.l(p,p,G.iR.j(0.35),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),"Write your family story here\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,D.esH,!0,B.a5,B.yb,B.am,p,p,p,p),1)],n),B.ah,p,B.e,B.j,0,B.p)
else{o=A.a([A.d(o.b,p,p,p,p,p,p,D.eB3,p,p,p),B.au,A.d(r.$1(s),p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,11,B.cF,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.P,A.A(A.a([A.C(A.p(p,p,B.h,D.IQ.j(0.35),p,p,p,1,p,p,p,p,p,p),1),new A.B(B.fi,A.d("\u2766",p,p,p,p,p,p,A.l(p,p,D.IQ.j(0.7),p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.C(A.p(p,p,B.h,D.IQ.j(0.35),p,p,p,1,p,p,p,p,p,p),1)],n),B.m,p,B.e,B.j,0,p,p),B.aA],n)
if(l.length===0)o.push(A.d("This page is blank. Tap the pencil to write.",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.4),p,p,p,p,p,p,p,p,16,p,p,p,p,1.7,!0,p,p,p,p,p,p,p,p),p,p,p))
else o.push(A.VD(A.dq(A.a([A.dq(p,p,p,p,p,p,p,p,p,D.evC,B.a.al(l,0,1)),A.dq(p,p,p,p,p,p,p,p,p,p,B.a.aV(l,1))],x.R),p,p,p,p,p,p,p,p,p,p),p,p,A.l(p,p,G.iR.j(0.93),p,p,p,p,p,p,p,p,16.5,p,p,p,p,1.72,!0,p,p,p,p,p,p,p,p),p))
o=A.cf(A.u(o,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,p,p,p,B.af)}m.push(A.A(A.a([u,A.C(A.p(p,A.bu(B.I3,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.B(D.bid,A.u(A.a([A.C(o,1),new A.B(B.iW,A.d("\u2014 "+q.d+" \u2014",p,p,p,p,p,p,A.l(p,p,G.iR.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,1,p,p,p,p,p,p),B.L,p,p),p)],n),B.ah,p,B.e,B.j,0,B.p),p),A.an(0,A.bQ(p,new A.o(p,p,p,p,p,new A.a8(B.a_,B.a7,B.w,A.a([B.x.j(0.16),B.K],x.O),p,p),B.n),B.b6),p,p,0,p,0,22)],n),p),B.ap),B.h,p,p,new A.o(p,p,p,B.I3,v,D.bGh,B.n),p,p,p,p,p,p,p,p),1)],n),B.ah,p,B.e,B.j,0,p,p))
return new A.am(B.V,p,B.a9,B.q,m,p)}}
C.amz.prototype={
S(){return new C.aA1(A.a([],x._))},
bl(){return this.r.$0()},
p_(){return this.w.$0()},
gdQ(){return this.c}}
C.aA1.prototype={
Z(){var w,v
this.a0()
this.uX()
w=this.a
v=w.c
if(v.length!==0)C.a4N(v,w.e,w.d.w)},
uM(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fHd(r,t.e,!1,s.w,new C.dKj(u),null,s),$async$uM)
case 2:w=3
return A.b(u.uX(),$async$uM)
case 3:return A.h(null,v)}})
return A.i($async$uM,v)},
Yb(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fHd(r,t.e,!0,s.w,new C.dKi(u),null,s),$async$Yb)
case 2:w=3
return A.b(u.uX(),$async$Yb)
case 3:return A.h(null,v)}})
return A.i($async$Yb,v)},
uX(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$uX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zw(q.a.c),$async$uX)
case 7:p=e
if(q.c!=null)n=q.e||J.ct(p)
else n=!1
if(n)q.n(new C.dKl(q,p))
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
return A.b(C.EV(q.a.c).cJ(0,B.oT),$async$uX)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dKm(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dKn(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uX,v)},
ML(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ML=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.F(s).f.P(D.ehG)
w=3
return A.b(C.EV(t.a.c),$async$ML)
case 3:r=e
w=4
return A.b(C.fnO(t.a.c,r),$async$ML)
case 4:q=e
w=5
return A.b(C.EV(t.a.c),$async$ML)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dKh(t,p))
o=t.c.F(s).f
s=A.d(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(null,null,null,q?B.dr:B.cL,null,B.q,null,s,null,B.lQ,null,null,null,null,null,null,null,null,null,null))
t.a.p_()
case 1:return A.h(u,v)}})
return A.i($async$ML,v)},
Gu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hME(l),$async$Gu)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hhn(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aW9(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Gu)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.fZJ(r)
o=Date.now()
n=t.a.c
m=new C.kk(l,r.toUpperCase(),p,!0,B.U,D.AB,new A.N(o,0,!1),0,n,D.rI)
w=5
return A.b(C.a0n(n,m),$async$Gu)
case 5:w=6
return A.b(t.uX(),$async$Gu)
case 6:t.a.bl()
t.a.p_()
if(t.c==null){w=1
break}t.D8(m)
case 1:return A.h(u,v)}})
return A.i($async$Gu,v)},
D8(d){return this.c5C(d)},
c5C(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$D8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zw(u.a.c),$async$D8)
case 2:n=l.qD(k.dF(f,new C.dKk(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hl(m,new C.amt(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$D8)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0n(u.a.c,o),$async$D8)
case 6:case 5:w=7
return A.b(u.uX(),$async$D8)
case 7:u.a.p_()
return A.h(null,v)}})
return A.i($async$D8,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.K(d).ax.a===B.H,o=new C.t2(p)
if(r.e)return A.as(A.mg(q,p?B.bm:B.bu,q,q,q,q,q,q,q,q),q,q,q)
if(J.ch(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.X,!0,q,A.aH(!1,q,!0,A.p(q,D.bu8,B.h,q,q,new A.o(B.aR.j(0.12),q,A.H(B.aR,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cD,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc4I(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.E2(A.p(q,A.u(A.a([u,B.aS,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bu,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bJ(D.eWB,r.gaLQ(),A.bk(B.bU,q,q,q,q,q,Af.Vv,q,new A.b5(A.m(12),B.W),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bib,q,q,1/0),15,B.ag,1.05,D.a52,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b9],v)
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.xb,B.aR,q,q,q,q),q,q,q,new C.dKp(r),q,q,q,q,"Sync family trees with database",q))
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.Ad,B.aR,q,q,q,q),q,q,q,r.gacm(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dj(E.ait,D.eEl,r.gaLQ(),A.bk(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.aa)
u.push(new C.E2(r.cr6(J.q(r.d,s),o),14,B.ag,1,D.a52,q))
B.d.v(w,u)}return A.u(A.a([p,B.aA,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cr6(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dT:B.cg).j(0.55),B.r,1),r=A.a([new A.a9(0,B.G,B.x.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.btb,B.h,w,w,new A.o(B.aR.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gal5(),m=d.d?"":" \xb7 Public",l=d.y===D.jY?" \xb7 View only":"",k=x.p
l=A.C(A.u(A.a([o,B.bw,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.X,!0,w,A.aH(!1,q,!0,new A.B(B.bC,A.A(A.a([p,B.bd,l,A.V(B.Ko,v?B.bm:B.bu,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dKo(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amt.prototype={
S(){return new C.azZ(A.a([],x._),A.aY(x.N),A.b3M())},
bl(){return this.r.$0()},
gdQ(){return this.c}}
C.azZ.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9u()
w=u.a
v=w.c
if(v.length!==0)C.a4N(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.at()
w.O$=0
this.a2()},
a0_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wK("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJK(r),s,null,!0,!0,x.y),$async$a0_)
case 3:if(e!==!0||t.c==null){w=1
break}t.HU()
t.n(new C.dJL(t,r))
w=4
return A.b(t.uO(),$async$a0_)
case 4:t.a.bl()
t.wK(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0_,v)},
chr(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.x1$.push(new C.dJF(w,f,d,e))},
aNZ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.df()
u.dX(w,v,0,1)
u.jd(q,q,1,1)
this.w.st(0,u)},
b3W(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ev(new Float64Array(16))
q.dR(r)
w=q.Bp()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.df()
t.dX(r,u,0,1)
t.jd(v,v,1,1)
t.dX(-r,-u,0,1)
t.ie(0,q)
s.st(0,t)},
a9u(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zw(u.a.c),$async$a9u)
case 2:t=s.qD(r.dF(e,new C.dJd(u)))
if(t!=null&&u.c!=null)u.n(new C.dJe(u,t))
return A.h(null,v)}})
return A.i($async$a9u,v)},
wK(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
uM(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$uM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fHd(o,t,!1,r,new C.dJs(u),q.a,s),$async$uM)
case 2:n=A
m=J
w=3
return A.b(C.EV(u.a.c),$async$uM)
case 3:p=n.qD(m.dF(e,new C.dJt(u)))
if(p!=null&&u.c!=null)u.n(new C.dJu(u,p))
return A.h(null,v)}})
return A.i($async$uM,v)},
HU(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uO(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0n(t,s),$async$uO)
case 2:return A.h(null,v)}})
return A.i($async$uO,v)},
ZF(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tf(q,t.a.c)){t.wK("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hNN(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZF)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HU()
t.n(new C.dJE(t,r))
w=4
return A.b(t.uO(),$async$ZF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
Yo(){return this.c5E()},
c5E(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tf(q,t.a.c)){t.wK("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.K(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJC(r,new C.t2(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Yo)
case 3:if(e!==!0||t.c==null){w=1
break}t.HU()
t.n(new C.dJD(r,t))
w=4
return A.b(t.uO(),$async$Yo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yo,v)},
TK(d){return this.bsQ(d)},
bsQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tf(r,t.a.c)){t.wK("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJ1(t,d),r,null,!0,!0,x.P),$async$TK)
case 3:s=f
if(s==null){w=1
break}t.HU()
t.n(new C.dJ2(t,s))
w=4
return A.b(t.uO(),$async$TK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TK,v)},
a0l(d){return this.ctc(d)},
ctc(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.K(s)
t=u.c
t.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dJN(u,d,new C.t2(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0l)
case 2:return A.h(null,v)}})
return A.i($async$a0l,v)},
c21(d){var w=this,v=w.d
v===$&&A.c()
if(C.tf(v,w.a.c))w.Mr(d)
else w.a0l(d)},
aeP(d,e){return this.cle(d,e)},
cle(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aeP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.K(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.dJH(new C.t2(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$aeP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aeP,v)},
Gz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Gz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.jY?3:5
break
case 3:w=6
return A.b(C.fvw(t.a.c),$async$Gz)
case 6:s=e
o=t.a
r=C.fOG(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aeP(!s,!r),$async$Gz)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bwT(o,t.a.c)){t.wK("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kN(o,"Cancel","Remove",q.y===D.jY?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Gz)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLf(t.a.c,t.d.a),$async$Gz)
case 11:t.a.bl()
o=t.c
if(o==null){w=1
break}A.ir(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Gz,v)},
a75(d){return this.bDC(d)},
bDC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a75=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tf(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.bd(s,new C.dJ3(p))){o=A.R(s)
p.a=A.qD(new A.cR(new A.a3(s,new C.dJ4(d),o.k("a3<1>")),new C.dJ5(),o.k("cR<1,n>")))}q=p.a
if(q==null)q=d.d
t.HU()
t.n(new C.dJ6(t,s,d,q))
w=3
return A.b(t.uO(),$async$a75)
case 3:t.wK(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a75,v)},
Mr(d){return this.bFD(d)},
bFD(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tf(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0l(d),$async$Mr)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.dJa(t,d),r,null,!0,!0,x.P),$async$Mr)
case 6:s=f
if(s==null){w=1
break}t.HU()
t.n(new C.dJb(t,s))
w=7
return A.b(t.uO(),$async$Mr)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mr,v)},
crq(){var w=this,v=w.d
v===$&&A.c()
if(!C.tf(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dJM(w))
w.uO()},
Wp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Wp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bwT(n,t.a.c)){t.wK("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.K(n)
s=$.at()
r=new A.ao(B.aq,s)
q=t.d.e
p=A.bi(new A.I(q,t.gc0x(),A.R(q).k("I<1,n>")).bZ(0,new C.dJn()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dJo(t,new C.t2(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Wp)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HU()
t.n(new C.dJp(t,p))
w=4
return A.b(t.uO(),$async$Wp)
case 4:t.wK("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Wp,v)},
c0y(d){return B.a.i(d.toLowerCase())},
c4t(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tf(v,w)
t=r.d
s=C.hDo(t)
C.hMI(q,t.b,u,C.hDn(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.K(d).ax.a===B.H,m=new C.t2(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a3(l,new C.dJU(),A.R(l).k("a3<1>")).gH(0)
l=n?B.bV:B.iP
v=A.V(B.Wx,n?B.bm:B.bu,o,o,o,18)
u=x.p
v=A.a([new A.B(B.zy,A.aH(!1,o,!0,new A.B(B.hr,A.A(A.a([v,B.bq,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bu,o,o,o,o,o,o,o,o,o,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dJV(p,d),o,o,o,o,o,o,o),o),new A.B(B.mw,p.bQf(m),o)],u)
if(p.d.y===D.jY){t=B.qx.j(0.15)
s=A.m(12)
r=A.H(B.qx.j(0.45),B.r,1)
q=C.ET(p.d,p.a.c)
v.push(new A.B(B.wp,A.p(o,A.A(A.a([D.byg,B.aw,A.C(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a1,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iD,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b9],u)
if(C.tf(p.d,p.a.c)&&p.e.length!==0)u.push(new C.I5("Undo",B.uB,p.gcrp(),m,o,o))
u.push(new C.I5("Family Book",D.bnP,p.gc4s(),m,B.rf,o))
if(C.tf(p.d,p.a.c))u.push(new C.I5("Display settings",Ai.Ev,p.gc5D(),m,B.aW,o))
u.push(new C.I5("Sync",B.Ad,p.gacm(),m,o,o))
t=p.d
if(t.y===D.jY||C.bwT(t,p.a.c)){t=p.d.y===D.jY?"Remove shared tree":"Delete tree"
u.push(new C.I5(t,B.e4,p.gbDM(),m,B.fI,o))}if(C.tf(p.d,p.a.c))u.push(new C.I5("Add member",B.ux,new C.dJW(p),m,B.bU,o))
v.push(new A.B(O.acM,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gal5()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bu,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cj(new C.dJX(p,m))
v.push(A.C(n,1))
if(w>0){n=p.f
u=A.V(n?K.WB:U.Kp,o,o,o,o,o)
v.push(A.as(A.hg(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dJY(p),o),o,o,o))}return A.cg(o,l,A.br(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bQf(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.a9(0,B.G,B.ff.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.wY,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.X,!0,m,A.aH(!1,m,!0,A.p(m,D.bBd,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cD,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacm(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.Z,m,m,m,D.era,m,m,m)
r=r.gal5()
p=n.d.gal5()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.C(A.u(A.a([q,B.bw,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a1,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tf(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.bys,m,m,m,n.gceX(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.iY:B.mE
r=r?"Private":"Public"
r=A.C(n.arh(q,"Privacy",r,n.a.d.w?n.gcqw():m),1)
q=A.C(n.arh(B.x4,"Tree code",n.d.c,new C.dJc(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.aa,A.A(A.a([r,B.ab,q,B.ab,A.C(n.arh(D.bpB,"Collaborators",p,n.gbUA()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.jY){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.X,!0,A.m(999),A.aH(!1,A.m(999),!0,new A.B(B.fE,A.A(A.a([A.V(B.o9,B.c,m,m,m,14),B.ez,A.d("View only",m,m,m,m,m,m,B.aJk,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bu(u,new A.am(B.V,m,B.a9,B.q,A.a([t,new A.B(B.Du,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.h,m,m,new A.o(m,m,m,w,v,D.bEt,B.n),m,m,m,m,m,m,m,1/0)},
arh(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.X,!0,A.m(14),A.aH(!1,A.m(14),!0,new A.B(D.bjT,A.u(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.Z,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.y8,A.d(f,w,1,B.Z,w,w,w,L.aJ6,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)}}
C.bag.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gah(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b1(t,t,t,new C.baj(s,t),new A.ap(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d_2(this),x.l))
r=s.c
B.d.v(u,new A.I(r,new C.d_3(this),A.R(r).k("I<1,r>")))
return new A.B(B.rF,new A.a4(w,v,new A.am(B.V,t,B.a9,B.h,u,t),t),t)}}
C.Ig.prototype={}
C.Ee.prototype={}
C.bai.prototype={
gbc3(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFs.prototype={}
C.baj.prototype={
bFl(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.a1()
v=A.U()
v.r=B.bz.j(0.75).gt(0)
v.c=2
v.d=B.bZ
d.bU(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.aZ(q.r,B.av,null,null,A.a([],x.v))
q=w+5.5
t.N(new A.bj(u,q))
s=w-1.1
r=w-8.8
t.N(new A.p5(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.N(new A.p5(u+4.95,r,u+9.9,s,u,q))
t.N(new A.bV())
q=A.U()
q.r=B.c.gt(0)
d.az(new A.v(u,w),9,q)
q=A.U()
q.r=B.bz.gt(0)
d.b4(t,q)},
bFj(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.d_n())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.bd(a0,new C.d_o(f))
t=new A.I(a0,new C.d_p(f),A.R(a0).k("I<1,P>")).bZ(0,new C.d_q()).cI(0,1/0,B.vH)
w=f.a
d.bU(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.J)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.L()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.ly(m)
i=Math.min(10,l/2)
l=$.a1()
h=A.a([],q)
g=new A.aZ(l.r,B.av,null,null,h)
h.push(new A.bj(w,v-i))
l=j*i
h.push(new A.dk(w,v,w+l,v))
h.push(new A.av(n-l,v))
h.push(new A.dk(n,v,n,v+i))
h.push(new A.av(n,o.b))
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
if(r!=null&&r.length!==0)this.bFj(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.L()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.J)(v),++s){q=v[s]
if(q.c)this.bFl(d,w,q.a,q.b)}},
ao(d){return d.b!==this.b}}
C.bdY.prototype={
gbZr(){var w=this.c
if(B.a.i(w.y).length!==0)return D.cZd
switch(w.c.a){case 0:return D.cvs
case 1:return D.cFG
case 2:return D.cUi}},
gbZu(){var w=this.c,v=C.fZ9(w.w),u=C.fZ9(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.K(d).ax.a===B.H,q=t.gbZr(),p=t.c,o=I.bxI(p.f),n=t.gbZu(),m=x.V,l=A.a([new A.a9(0,B.G,B.d.gai(q).j(0.35),B.cC,10)],m),k=r?B.aG:B.c,j=A.H(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.rw(B.B,s,B.cj,B.bM,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.B,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a8(B.a_,B.a7,B.w,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hN(w,B.ap),B.h,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aE,B.w,q,s,s),B.a6),s,56,s,s,B.DJ,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eAI,s,s,s),B.h,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bjX,s,s,s),s,s,s,-6,-4,s))}k=r?B.d3:B.c
j=A.m(8)
w=A.H(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.a9(0,B.G,B.x.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.d3,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aP:B.bu,s,s,s,s,s,s,s,s,7.5,s,s,B.a1,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aJ(s,new A.a4(84,112,A.u(A.a([new A.am(B.V,s,B.a9,B.h,l,s),B.au,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aQY,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bk6,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ae)}}
C.b9p.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.a1()
w=A.U()
v=this.b
u=v?B.c:D.b0X
w.r=u.j(v?0.05:0.09).gt(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.L()
t.drawCircle(r,s,1,q)
q.delete()}},
ao(d){return d.b!==this.b}}
C.brl.prototype={
B(d){var w=this,v=null,u=new C.eUs(w),t=w.c,s=t?B.d3:B.c,r=A.m(12),q=u.$3(B.hH,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.f_,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Eo,"Zoom out",w.e)
return A.aD(!1,B.X,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.f_,v,v,v,1,v,v,v,v,v,22),u.$3(B.ag4,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dt,v,v,v,B.ac)}}
C.bhd.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.H(B.bU,B.r,2),s=w.e,r=x.p
t=A.aJ(v,A.p(v,A.u(A.a([A.V(s?K.WB:U.Kp,B.bU,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.ex8,v,v,v)],r),B.m,v,B.b5,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ae)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.evb,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.I(s,new C.ew7(w),A.R(s).k("I<1,r>")))
B.d.v(u,t)}return new A.a4(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XI.prototype={
S(){return new C.ayq()},
bl(){return this.Q.$0()},
gdQ(){return this.w}}
C.ayq.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.at()
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
if(t==null)w=C.hEU(w.r,w.f)
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
NJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fOG(p.y,p.w)
w=3
return A.b(A.kY(t.a.w,B.G5),$async$NJ)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aW9(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NJ)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hho(p.y,p.w)
t.a.bl()
case 5:w=7
return A.b(Ah.F3(78,800),$async$NJ)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.dez(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NJ,v)},
bZt(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
s=v.azx(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).K(s)},
a6I(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a6I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dey(r),s,null,!0,!0,x.y),$async$a6I)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).K(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a6I,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===B.H,i=new C.t2(j),h=l.a.e,g=A.R(h).k("a3<1>"),f=A.z(new A.a3(h,new C.deI(l),g),g.k("E.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.B(D.biv,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hJ(A.aH(!1,k,!0,new A.B(B.lT,A.V(B.e4,B.nW,k,k,k,17),k),B.cD,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbAu(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.j6:B.iz
t=I.bxI(l.as)
if(l.as==null)s=A.V(B.o2,j?B.bm:B.bu,k,k,k,40)
else s=k
s=A.as(A.aJ(k,new A.am(B.V,k,B.a9,B.q,A.a([A.hh(u,t,s,k,42),A.an(0,A.hh(B.bU,k,D.bse,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gbZq(),k,k,k,k,k,k,!1,B.ae),k,k,k)
t=l.d
t===$&&A.c()
t=C.ays(t,"Full name",B.mA,1,1,i,B.lz)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.T,new C.bdW(i,u,new C.deJ(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bcd],q)
o=l.a.e
B.d.v(p,new A.I(o,new C.deK(),A.R(o).k("I<1,eq<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bcf],q)
B.d.v(q,new A.I(f,new C.deM(),A.R(f).k("I<1,eq<n?>>")))
o=A.u(A.a([t,B.ar,new C.aay(i,r,"Who is their parent?",p,new C.deN(l),k,o),B.aA,n,B.ar,new C.aay(i,m,"Who is their spouse / partner?",q,new C.deO(l),k,o)],v),B.ah,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ays(q,"Birth date",D.afd,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ays(m,"Birth place",B.WQ,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ays(n,"Date of death (if deceased)",D.ahk,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ays(p,"Occupation",B.Y_,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.B,k,B.a9,B.q,w,k),B.aA,s,B.bv,new C.aaz(i,"Identity",u,k),B.aa,new C.aaz(i,"Family links",o,k),B.aa,new C.aaz(i,"Life details",A.u(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ays(r,"Notes",B.kv,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.aa,new C.ayr(i,"Child order",l.c5O(l.at),new C.deP(l),new C.deQ(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fEK(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.deR(l):k
B.d.v(r,A.a([B.T,new C.ayr(i,"Visible in tree",u,w,new C.deS(l),k)],v))}r.push(B.T)
w=j?B.j6:B.iz
u=A.m(14)
t=A.H(j?B.dT:B.cg,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iu(k,B.bU,k,B.ag,k,new C.deT(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.aco,k,k,k))
r.push(B.bv)
w=j?B.aN:B.aG
j=j?B.dT:B.cg
r.push(A.A(A.a([A.C(A.dU(B.mU,new C.deL(d),A.d9(k,k,k,k,k,k,k,k,k,w,k,k,B.c9,k,new A.b5(A.m(14),B.W),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.C(A.bJ(D.eaW,l.gbZs(),A.bk(B.aR,k,k,0,B.c,k,B.c9,k,new A.b5(A.m(14),B.W),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.ei(B.fS,k,B.ag,h,new A.a4(420,k,A.cf(A.u(r,B.ah,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.af),k),D.adf,k,B.acE,new A.b5(g,B.W),k,k)},
c5O(d){var w=B.o.J(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.J(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaz.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j6:B.iz,s=A.m(16)
return A.u(A.a([new A.B(D.adD,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dT:B.cg,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bdX.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dT:B.cg).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aN:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a1,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bn(u,B.et,u,B.ub,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bm:B.bu,u,u,u,u,u,u,u,u,u,u,u,B.cp,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ad,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aay.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dT:B.cg).j(0.85),B.r,1),q=A.V(B.qg,u?B.bm:B.bu,v,v,v,v),p=A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a1,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Cf(A.a21(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bu,v,v,v,v,v,v,v,v,v,v,v,B.cp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lS,v,v,v)}}
C.bdW.prototype={
B(d){var w=new C.deU(this)
return A.A(A.a([w.$3(D.Wj,"Male",B.L9),B.ab,w.$3(D.aet,"Female",B.KU),B.ab,w.$3(D.wB,"Other",B.mC)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayr.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.j6:B.iz,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.C(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bu,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aEv(u,B.Eo,w.f,v),B.bq,new C.aEv(u,B.hH,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aEv.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bm:B.bu).j(0.4)
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,new A.a4(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ac)}}
C.aaA.prototype={
bIV(d){switch(d.a){case 0:return B.bU
case 1:return B.bz
case 2:return B.cR}},
bIW(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aS4(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
z5(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.H((w?B.dT:B.cg).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bU,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bu,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.C(A.u(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aG,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cK,B.zw,p,p,1/0)},
aaX(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j6:B.iz,s=A.m(16),r=A.H(v?B.dT:B.cg,B.r,1)
return A.u(A.a([new A.B(D.adD,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h2J(r,q),o=q.c,n=t.bIV(o),m=I.bxI(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aN:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.jY?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bm:B.bu,s,s,s,s,s,s,s,s,12,s,s,B.a1,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.a9(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.hh(u,m,m==null?A.V(B.o2,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ef,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bIW(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mv,s,s,s),s,s,s)
u=x.p
i=A.a([t.z5("Full name",i,B.mA)],u)
if(p>0)i.push(t.z5("Child order","#"+p,B.L0))
r=A.a([h,B.au,r,B.aS,l,B.T,v,B.bv,t.aaX("Identity",i),B.aa,t.aaX("Life details",A.a([t.z5("Birth date",q.w,D.afd),t.z5("Birth place",q.x,B.WQ),t.z5("Date of death",q.y,D.ahk),t.z5("Occupation",q.z,B.Y_)],u)),B.aa,t.aaX("Family links",A.a([t.z5("1. Parent",t.aS4(q.d),B.DW),t.z5("2. Spouse",t.aS4(q.e),B.KT)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.aa,t.aaX("Notes",A.a([t.z5("Notes",q,B.kv)],u))],u))
r.push(B.bv)
r.push(A.bJ(B.He,new C.df3(d),A.bk(B.aR,s,s,s,s,s,B.c9,s,new A.b5(A.m(14),B.W),s,s,s)))
return A.eB(s,k,new A.d3(B.lc,A.cf(A.u(r,B.ah,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zD,s,s,B.af),s),s,s,s,B.Dy,B.cZ,s,new A.b5(j,B.W),s)}}
C.I5.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bm:B.bu
w=t.j(v.f.a?0.14:0.08)
return new A.B(B.wu,A.hJ(A.aD(!1,B.X,!0,A.m(8),A.aH(!1,A.m(8),!0,new A.a4(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.amw.prototype={
eD(){var w,v,u=this,t=x.N,s=A.Q(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().aa())
w=u.c
v=A.R(w).k("I<1,a0<n,@>>")
w=A.z(new A.I(w,new C.c2y(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iC(w,new C.c2z(),t,x.U))
return s}}
C.amx.prototype={
S(){return new C.aA0(A.a([],x.bF))},
gd5(){return this.c}}
C.aA0.prototype={
Z(){this.a0()
this.I0()},
I0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c2C(t.a.c),$async$I0)
case 3:r=e
w=4
return A.b(C.zw(t.a.c),$async$I0)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rj(q,new C.dK6(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dK7(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I0,v)},
xh(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IK(d,e){return this.ctK(d,e)},
ctK(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dKb(q,e))
t=3
w=6
return A.b(d.$0(),$async$IK)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dKc(q))
$.eI.lT()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IK,v)},
Vi(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$Vi)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IK(new C.dK3(t),"Preparing download\u2026"),$async$Vi)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vi,v)},
Vm(d){return this.bH1(d)},
bH1(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$Vm)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IK(new C.dK4(t,d),"Preparing file\u2026"),$async$Vm)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vm,v)},
acJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$acJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wd.c2().Kr(B.NX,B.rJ,!0),$async$acJ)
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
o=A.jd(o,0,null)
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
case 6:u=A.F2()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acJ,v)},
VV(d){return this.bR6(d)},
bR6(d){var w=0,v=A.j(x.H),u=this
var $async$VV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IK(new C.dK5(u,d),"Restoring family trees\u2026"),$async$VV)
case 2:return A.h(null,v)}})
return A.i($async$VV,v)},
VU(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.acJ(),$async$VU)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.VV(s),$async$VU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VU,v)},
a_s(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$a_s)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IK(new C.dKa(t),"Creating QR code\u2026"),$async$a_s)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_s,v)},
a_4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Bx()){t.xh("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).ct(A.eO(new C.dK8(),!0,null,x.N)),$async$a_4)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.VV(r),$async$a_4)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_4,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===B.H,n=o?B.z0:B.iP,m=o?D.ab2:B.aN,l=o?B.aI:B.cg,k=o?B.aN:B.aG,j=new C.d_r(n,m,l,k,o?B.bP:B.bu)
l=A.aF(p,p,p,p,A.V(B.eq,k,p,p,p,20),p,p,p,new C.dKe(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eH(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.C(C.d__(!0,B.j0,B.b3,B.b3,q.r?p:q.gcl2(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gchm()
t.push(A.C(C.d__(!s,B.iF,B.b0,B.bD,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.C(C.d__(!1,B.hf,B.aR,B.bU,q.r?p:q.gbGV(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.C(C.d__(!1,M.x6,B.b_,B.aM,q.r?p:q.gbR3(),j,s,"Upload backup file"),1))
l=A.a([new C.bah(v,l,p),B.ka,new C.a9R(j,"QR restore",p),B.T,t,B.d1,new C.a9R(j,"Backup files",p),B.T,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.ka,new C.a9R(j,"One tree",p),B.T],u)
B.d.v(v,J.b4(q.d,new C.dKf(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cQ(l,p,B.Vr,p,p,B.af,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aR.j(0.35),B.r,1)
s=A.a([new A.a9(0,B.G,B.x.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.br(!0,A.p(p,A.A(A.a([K.aHP,B.bd,A.C(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zC,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cg(w,n,new A.am(B.V,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d_r.prototype={}
C.bah.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.a9(0,B.G,B.aR.j(0.32),B.kD,28)],x.V)
t=A.an(p,A.V(B.t_,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.B(B.a8,A.A(A.a([A.p(p,D.bAM,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.on,A.C(A.u(A.a([D.eFe,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bHn,B.n),p,p,p,p,p,p,p,p)}}
C.a9R.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.h,w,w,new A.o(B.aR,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.baf.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b3.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.a9(0,B.G,B.b3.j(0.1),B.cC,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.X,!0,q,A.aH(!1,o,!0,A.er(A.d5(new A.B(E.V4,A.u(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qd,q,q,q),B.aa,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bw,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cp,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)}}
C.bak.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aR.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.er(new A.B(B.eF,A.A(A.a([A.p(v,D.bzZ,B.h,v,v,new A.o(q,v,A.H(B.aR.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qd,v,v,v),B.bd,A.C(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hf,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Y2.prototype={
S(){return new C.aA_()},
gd5(){return this.c}}
C.aA_.prototype={
Z(){this.a0()
this.a6h()},
a6h(){var w=0,v=A.j(x.H),u=this,t
var $async$a6h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aYO(u.a.c,B.Bb),$async$a6h)
case 2:t=e
if(u.c!=null)u.n(new C.dJZ(u,t))
return A.h(null,v)}})
return A.i($async$a6h,v)},
ae6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ae6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dK_(q))
t=4
p=A.fQg(q.a.d,B.Bb)
if(p==null){n=A.b9("Could not read this QR code.")
throw A.O(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aoG(n.e,m,l,B.Bb,p,n.f),$async$ae6)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dK0(q))
q.c.F(x.q).f.P(D.eiP)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a5(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(B.a.e0(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dK1(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ae6,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.K(d).ax.a===B.H,o=p?B.iT:B.oO,n=p?B.hm:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eH(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.eTB,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aR.j(0.35),B.r,1)
u=A.pi(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aR,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.C(A.p(q,A.u(A.a([B.P,u,B.bv,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b5,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.al:B.bA,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gch4()
if(u)u=B.GQ
else u=A.V(r.e===!0?B.hs:B.afc,q,q,q,q,q)
w=A.a([w,B.aa,v,B.aa,new A.a4(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cb,q,q,q),t,A.d9(q,q,q,q,q,q,q,q,q,B.aR,q,B.fV,q,q,q,new A.ay(B.aR.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.B(B.iW,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a4(1/0,q,A.bJ(B.yi,new C.dK2(d),A.bk(B.aR,q,q,q,q,B.fV,q,q,q,q,q,q)),q))
return A.cg(m,o,new A.B(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Y3.prototype={
S(){return new C.bfm(A.y7(B.w9,B.n1,B.t3))}}
C.bfm.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cg(A.eH(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eMm,w,w,w,1,w,!0),B.x,A.y6(this.d,B.bM,new C.dKg(this,d)),w,!1,!1,w,w)}}
C.aUI.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Nu,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.le.prototype={}
C.a3R.prototype={
S(){return new C.bf5(null,null)}}
C.bf5.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bh(v,B.ry,v,1,v,w)
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
this.bop()},
B(d){var w,v,u=this,t=B.d.dP(D.a_x,new C.dwy(u),new C.dwz())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cn3(A.c4(new A.h3(A.a([w,v],x.dS)),new C.dwA(u,t),null),!0)}}
C.bf4.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aVW(d,e)
break
case"house":p.lu(d,e,D.cJV)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.a1()
t=A.U()
t.r=B.c.j(0.18+v*0.12).gt(0)
d.az(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lz(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zO(d,e,12)
p.wS(d,e,B.kK,5,14)
break
case"grocery":p.c6v(d,e)
break
case"calculator":p.c6c(d,e)
break
case"lumber":p.c6D(d,e)
break
case"kitchen":p.c6y(d,e)
break
case"landscape":p.lu(d,e,D.cKm)
s=new A.aZ($.a1().r,B.av,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.N(new A.bj(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.N(new A.dk(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.N(new A.dk(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.N(new A.av(t,w))
s.N(new A.av(0,w))
s.N(new A.bV())
w=A.U()
w.r=B.fn.j(0.85).gt(0)
d.b4(s,w)
p.zO(d,e,8)
p.wS(d,e,B.iC,4,18)
break
case"plumbing":p.c6M(d,e)
break
case"electrical":p.lu(d,e,D.cTE)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.a1()
u=A.U()
u.r=B.c.j(q*0.12).gt(0)
d.bp(new A.af(0,0,0+e.a,0+e.b),u)
p.lz(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lz(d,e,B.n9.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zO(d,e,10)
break
case"store":p.c6V(d,e)
break
case"paint_remodel":p.c6H(d,e)
break
case"roofing":p.c6O(d,e)
break
case"warehouse":p.c71(d,e)
break
case"vehicles":p.c7_(d,e)
break
case"farm":p.c6p(d,e)
break
case"restaurant":p.c6N(d,e)
break
case"tools":p.c6Y(d,e)
break
case"wallet":p.c70(d,e)
break
case"concrete":p.c6i(d,e)
break
case"blueprint":p.c6a(d,e)
break
default:p.aVW(d,e)}},
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
wS(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a1()
q=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gt(0)
p=q.L()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zO(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.J(s*0.17,0.9)
p=B.k.J(s*0.23,0.85)
$.a1()
o=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.c.j(0.2+r*0.6).gt(0)
n=o.L()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aVW(d,e){var w,v=this
v.lu(d,e,D.cSA)
w=v.c
v.lz(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lz(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bFf(d,e,B.hD,w)
v.wS(d,e,B.c.j(0.7),6,8)},
bFf(d,e,f,g){var w,v,u,t,s,r,q,p
$.a1()
w=A.U()
w.r=f.j(0.35).gt(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.L()
s.drawRect(A.cz(new A.af(16,q,t,q+3)),p)
p.delete()}},
c6v(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lu(d,e,D.c1D)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.J(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.J(s,2)
$.a1()
l=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
l.r=D.cIm[B.o.J(s,4)].j(0.85).gt(0)
k=l.L()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lz(d,e,B.c.j(0.35),w,16)
j.wS(d,e,B.iC,5,12)},
c6c(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lu(d,e,D.c1J)
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
p=A.j0(g,g,g,g,g,B.a5,B.cn,g,B.eL,B.cm)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cLP[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.J(o,2)
p.saR(0,new A.ey(r,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fD()
p.a5(d,new A.v(t*(0.08+B.o.J(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c1L[o]
l=B.kJ.j(0.28+0.3*Math.sin(n))
k=B.o.J(o,2)
p.saR(0,new A.ey(m,g,g,B.cT,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fD()
p.a5(d,new A.v(t*(0.55+B.o.J(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lz(d,e,B.c.j(0.35),w*1.5,14)
h.lz(d,e,B.eN.j(0.55),-v*3.141592653589793*2,8)
h.lz(d,e,B.z1.j(0.4),r*2.8,22)
h.wS(d,e,B.oI,8,10)
h.zO(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.J(w+o*0.22,0.9)
$.a1()
r=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gt(0)
r.c=1.2
i=r.L()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c6D(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,Ac.aqw)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.c_(new A.af(20,q,u,q+10),B.k7)
$.a1()
o=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=A.aq(B.hC,B.nM,(r+1)/2).gt(0)
n=o.L()
t.drawRRect(A.fM(p),n)
n.delete()}m.lz(d,e,B.hC.j(0.35),w,15)
m.zO(d,e,8)},
c6y(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lu(d,e,D.cIO)
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
j.wS(d,e,B.pT,4,14)},
c6M(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lu(d,e,D.cyR)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.J(s,0.12)
$.a1()
n=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
n.b=B.aj
n.c=2
n.r=B.c.j(0.45-q*0.12).gt(0)
m=n.L()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wS(d,e,B.nT,6,12)
l.lz(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c6V(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lu(d,e,D.cf3)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.c_(new A.af(q,14,q+u,22),B.jK)
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.fo,B.bJ,(r+1)/2).gt(0)
o=p.L()
t.drawRRect(A.fM(q),o)
o.delete()}n.lz(d,e,B.c.j(0.3),w,16)
n.zO(d,e,8)
n.wS(d,e,B.tU,5,13)},
c6H(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cEa)
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
c6O(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cBX)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.J(v+s*0.12,0.75))
q=B.o.J(s,4)*0.22
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.25).gt(0)
p.c=1.5
o=p.L()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wS(d,e,B.ct,7,11)},
c71(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.chG)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.c_(new A.af(p,o,p+(t-r*8),o+16),B.k7)
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.ct,B.aN,(Math.sin(q)+1)/2).gt(0)
n=p.L()
s.drawRRect(A.fM(o),n)
n.delete()}this.lz(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c7_(d,e){var w,v,u,t,s,r,q,p,o
this.lu(d,e,D.cX9)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.J(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.J(s,2)*0.08)
q=A.c_(new A.af(r,q,r+28,q+8),B.k7)
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.35+s*0.08).gt(0)
o=p.L()
t.drawRRect(A.fM(q),o)
o.delete()}this.zO(d,e,6)},
c6p(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.cHy)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.a1()
s=A.U()
s.r=B.n9.j(0.75).gt(0)
d.az(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
o.r=B.h9.j(0.85).gt(0)
o.c=3
n=o.L()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lz(d,e,B.n9.j(0.35),w,14)},
c6N(d,e){var w,v,u,t,s,r,q,p,o=this
o.lu(d,e,D.cJK)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.dy(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a1()
q=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.22).gt(0)
p=q.L()
t.drawOval(A.cz(r),p)
p.delete()}o.wS(d,e,B.pT,5,16)
o.zO(d,e,7)},
c6Y(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,D.cV_)
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
c70(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lu(d,e,D.cXC)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.c_(new A.af(p,o,p+36,o+22),B.jK)
$.a1()
p=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.iC,B.n9,q).gt(0)
n=p.L()
s.drawRRect(A.fM(o),n)
n.delete()}m.zO(d,e,9)
m.lz(d,e,B.c.j(0.4),w*2.2,12)},
c6i(d,e){var w,v,u,t,s,r,q,p,o,n
this.lu(d,e,D.cOj)
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
c6a(d,e){var w,v,u,t,s,r,q,p
this.lu(d,e,D.cKC)
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
C.apl.prototype={
XP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMb(),$async$XP)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a62(s),$async$XP)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$XP,v)},
acK(d){return this.c9g(d)},
c9g(d){var w=0,v=A.j(x.H),u=this,t
var $async$acK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hMS(d),$async$acK)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$acK,v)},
B(d){var w,v,u,t=null,s=A.K(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.j6:B.iz
w=x.p
v=A.a([C.aMy(!0,B.pJ,1/0,B.p_,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.x.j(0.35)],x.O)
v.push(A.bQ(new A.bE(B.b4,t,t,new A.B(B.wg,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.aro,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b4,B.ba,B.w,u,t,t),B.n),B.b6))}v.push(A.an(8,A.A(A.a([A.C(A.dj(D.bu1,D.eBS,new C.ca2(this,d),A.bk(B.aR,t,t,t,B.c,t,B.jW,t,t,t,t,B.c6)),1),B.ab,A.C(A.ex(D.bBX,D.ePg,this.gc0v(),A.d9(t,t,B.x.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jW,t,t,D.aPA,t,t,t,B.c6)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fT(1.7777777777777777,A.aD(!1,B.X,!0,B.pJ,new A.am(B.V,t,B.aX,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aHM.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aPp.prototype={}
C.aPo.prototype={}
C.aNt.prototype={}
C.WH.prototype={
S(){return new C.avl()}}
C.avl.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bb("",B.aY,B.aL)
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
IB(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.F(x.q).f.P(D.eji)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).K(new C.aPp(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.K(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bBE,B.h,n,n,new A.o(B.aR.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.C(A.u(A.a([i,B.bw,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bu,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aF(n,n,n,n,A.V(B.cu,m?B.bm:B.bu,n,n,n,n),n,n,n,new C.cSJ(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bu,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bu,n,n,n,n,n,n,n,n,11,n,n,B.cp,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fQw(new C.cSK(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aN:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a1,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.j6:B.iz
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.cg
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bn(n,new A.b2(4,r,B.d9),n,n,n,n,n,n,!0,new A.b2(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cSL(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,W.GU,n,n,n,n)
u=m?B.aN:B.aG
m=m?B.dT:B.cg
return A.eB(n,l,new A.d3(B.lc,A.cf(A.u(A.a([j,B.aS,i,B.au,w,B.P,v,B.aS,t,B.bv,A.A(A.a([A.C(A.dU(B.de,new C.cSM(d),A.d9(n,n,n,n,n,n,n,n,n,u,n,n,B.c9,n,new A.b5(A.m(12),B.W),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.C(A.bJ(D.ePv,o.ga_K(),A.bk(B.aR,n,n,n,B.c,n,B.c9,n,new A.b5(A.m(12),B.W),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zF,n,n,B.af),n),n,n,n,T.zG,B.cZ,n,new A.b5(k,B.W),n)}}
C.WG.prototype={
S(){return new C.avk()}}
C.avk.prototype={
Z(){this.a0()
var w=$.at()
this.d!==$&&A.aO()
this.d=new A.ao(B.aq,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
IB(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.F(x.q).f.P(D.eh_)
return}v=this.c
v.toString
A.a7(v,!1).K(new C.aPo(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.K(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.byl,B.h,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.C(A.u(A.a([l,B.bw,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bu,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aF(q,q,q,q,A.V(B.cu,p?B.bm:B.bu,q,q,q,q),q,q,q,new C.cSF(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aR.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aR.j(0.25),B.r,1)
u=A.V(B.aeY,B.aR.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.aw,A.C(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.j6:B.iz
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.cg
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bn(q,new A.b2(4,t,B.d9),q,q,q,q,q,q,!0,new A.b2(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ad,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cSG(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kb,q,q,q,q)
w=p?B.aN:B.aG
p=p?B.dT:B.cg
return A.eB(q,o,new A.d3(B.lc,A.cf(A.u(A.a([m,B.aS,l,B.aA,v,B.bv,A.A(A.a([A.C(A.dU(B.de,new C.cSH(d),A.d9(q,q,q,q,q,q,q,q,q,w,q,q,B.c9,q,new A.b5(A.m(12),B.W),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.C(A.bJ(D.eVG,this.ga_K(),A.bk(B.bU,q,q,q,B.c,q,B.c9,q,new A.b5(A.m(12),B.W),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zF,q,q,B.af),q),q,q,q,T.zG,B.cZ,q,new A.b5(n,B.W),q)}}
C.Wd.prototype={
S(){return new C.au6()}}
C.au6.prototype={
Z(){var w,v=this
v.a0()
w=$.at()
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
gHW(){var w,v=this.e
v===$&&A.c()
w=A.d_(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gafS(){var w=this.f
w===$&&A.c()
w=A.d_(B.a.i(w.a.a))
return w==null?0:w},
gaYF(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aJA(d){var w,v=B.k.D(this.gHW()+d,0.25,999999),u=B.k.lN(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.M(v))
else{u=B.k.ab(v,2)
w=A.ad("\\.?0+$",!0,!1,!1,!1)
u=A.aI(u,w,"")}t.saR(0,u)
this.n(new C.cqg())},
atC(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aR,w,w,w,20):w,u=d.a,t=u?B.j6:B.iz,s=A.m(14),r=A.m(14)
u=u?B.dT:B.cg
return A.bn(w,new A.b2(4,s,B.d9),w,B.bC,w,w,w,w,!0,new A.b2(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b2(4,A.m(14),B.a6p),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c0w(d,e,f){return this.atC(d,e,f,null)},
IB(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gafS()<=0){s.c.F(x.q).f.P(D.el9)
return}r=s.c
r.toString
v=s.gHW()
u=s.gafS()
t=s.gaYF()
A.a7(r,!1).K(new C.aNt(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.K(d).ax.a===B.H,m=new C.t2(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aR.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.brX,B.h,o,o,new A.o(o,o,A.H(B.aR.j(0.35),B.r,1),h,o,new A.a8(B.a_,B.a7,B.w,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.C(A.u(A.a([h,B.bw,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.cp,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aF(o,o,o,o,A.V(B.cu,n?B.bm:B.bu,o,o,o,o),o,o,o,new C.cqm(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.atC(m,"Item name (optional)","Lumber, paint, labor\u2026",B.L6),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,W.GU,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.j6:B.iz
t=A.m(14)
s=A.H(n?B.dT:B.cg,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Eo,n?B.aN:B.aG,o,o,o,20),o,o,o,new C.cqn(p),o,o,o,o,o,B.c6)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bDu,B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,B.e_,o,o,o,1,o,o,!1,"\u2022",o,new C.cqo(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aF(o,o,o,o,A.V(B.hH,n?B.aN:B.aG,o,o,o,20),o,o,o,new C.cqp(p),o,o,o,o,o,B.c6)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.aw,A.C(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.atC(m,"Amount","0.00",B.hI),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,B.e_,o,o,o,1,o,o,!1,"\u2022",o,new C.cqq(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.z(new A.I(D.cEC,new C.cqr(p,m),t),t.k("ai.E"))
i=A.a([i,B.bv,v,B.aA,h,B.P,s,B.aa,A.cd(B.bH,u,B.by,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c0w(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cqs(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kb,o,o,o,o)],w))}i.push(B.aS)
h=B.aR.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aR.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bu,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gHW()===B.k.lN(p.gHW())?B.k.M(p.gHW()):p.gHW()
s=p.gaYF()
r=A.zy(p.gafS())
i.push(A.p(o,A.A(A.a([A.C(A.u(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bys(p.gHW()*p.gafS(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a8(B.a_,B.a7,B.w,j,o,o),B.n),o,o,o,o,B.iE,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.dT:B.cg
h=A.d9(o,o,o,o,o,o,o,o,o,o,o,o,B.c9,o,new A.b5(j,B.W),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.C(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cqt(d),h),1),B.aw,A.C(A.dj(D.aim,D.eS0,p.ga_K(),A.bk(B.aR,o,o,0,B.c,o,B.c9,o,new A.b5(A.m(14),B.W),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eB(o,l,new A.d3(S.a6N,A.cf(A.u(i,B.ah,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A5.qc,o,o,B.af),o),o,o,o,B.JQ,B.cZ,o,new A.b5(k,B.W),o)}}
C.ZK.prototype={
S(){return new C.brd()}}
C.brd.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,B.aY,B.aL),v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.K(d).ax.a===B.H,q=r?B.dR:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aN:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aN:B.aG,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.j6:B.iz
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bn(s,new A.b2(4,A.m(12),B.d9),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eTV(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.C(A.dU(B.de,new C.eTW(d),s),1)
r=A.bk(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eB(s,q,new A.B(B.zF,A.u(A.a([o,B.aA,v,B.aS,A.A(A.a([u,B.aw,A.C(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eTX(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cZ,s,new A.b5(p,B.W),s)}}
C.a8V.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.E2.prototype={
S(){return new C.brb(null,null)}}
C.brb.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,D.bcN,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bqH()},
gbs2(){switch(this.a.r.a){case 1:return A.a([B.aR,B.bU,B.aW],x.O)
case 2:return A.a([B.bo,B.aR,B.aW],x.O)
case 3:return A.a([B.b3,B.cf,B.j7],x.O)
case 4:return A.a([B.hT,B.bU,B.eT],x.O)
case 0:return A.a([B.aR,B.bU,B.aW],x.O)}},
B(d){var w=A.K(d),v=this.d
v===$&&A.c()
return new A.ep(A.c4(v,new C.eTT(this,new C.t2(w.ax.a===B.H)),null),null)}}
C.au_.prototype={
S(){return new C.brc(null,null)}}
C.brc.prototype={
Z(){var w,v=this
v.a0()
w=A.bh(null,B.mt,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bqI()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eTU(this),null)}}
C.bra.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.c_(new A.af(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b3(w,w))
u=new A.aZ($.a1().r,B.av,null,null,A.a([],x.v))
u.N(new A.j2(v))
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
w=A.zX(u)
t=A.a([],x.f5)
w=new A.xO(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jH('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FN(w,r)
w.lc()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aMS(d,q,r,o,0,0.2,4.2,0.92)
p.aMS(d,q,r,s,0.52,0.11,3.2,0.58)}},
aMS(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.J(g+h,1)*f,s=A.haC(e.a.a,e,t,t+f*i,!0),r=A.bwW(s.gbM().a.getBounds())
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
C.aJS.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aJT.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.t2.prototype={}
C.apk.prototype={
S(){return new C.aBq()},
gdQ(){return this.c}}
C.aBq.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adB()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Js(w,v)
this.a2()},
adB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bx2(t.c,t.d.a),$async$adB)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.eth(u,s))
return A.h(null,v)}})
return A.i($async$adB,v)},
O9(){var w=0,v=A.j(x.H),u=this,t,s
var $async$O9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.et8(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Js(t,s),$async$O9)
case 2:if(u.c!=null)u.n(new C.et9(u))
return A.h(null,v)}})
return A.i($async$O9,v)},
OF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.K(p)
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.etf(t,new C.t2(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OF)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a62(q),$async$OF)
case 6:case 5:t.n(new C.etg(t,r))
w=7
return A.b(t.O9(),$async$OF)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
TE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hMD(r),$async$TE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.et3(t,new C.qo(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.O9(),$async$TE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TE,v)},
c5s(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h2H(t,new C.et7(u),w,v)},
a8_(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c2(new A.ay(v,2.5,B.r,-1),B.W,B.W,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aPm,w,w,B.n),w,22,w,w,w,w,w,22)},
a74(d){return this.bDz(d)},
bDz(d){var w=0,v=A.j(x.H),u=this
var $async$a74=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.et6(u,d))
w=2
return A.b(u.O9(),$async$a74)
case 2:return A.h(null,v)}})
return A.i($async$a74,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.K(a2).ax.a===B.H,e=f?B.bV:B.iP,d=A.m(8),a0=A.V(N.Wy,f?B.bm:B.bu,g,g,g,16),a1=x.p
a0=A.aH(!1,d,!0,new A.B(B.DD,A.A(A.a([a0,B.bq,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bu,g,g,g,g,g,g,g,g,g,g,g,B.a1,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eti(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.V,g,B.aX,B.q,A.a([A.bu(A.m(22),C.aMy(!0,A.m(22),1/0,B.p_,g,d,1/0),B.ap),A.an(10,A.dj(D.bwt,D.eU3,h.gaWD(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h0,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.a9(0,B.G,B.aR.j(f?0.5:0.38),B.eI,22),new A.a9(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.a9(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.am(B.V,g,B.aX,B.q,A.a([C.aMy(!0,A.m(16),1/0,B.KA,g,r.c,1/0),A.bQ(g,new A.o(g,g,g,g,g,new A.a8(B.b4,B.ba,B.w,A.a([B.c.j(0.06),B.K,B.x.j(0.22)],x.O),g,g),B.n),B.b6),A.an(g,h.a8_(!0),g,g,8,g,8,g),A.an(g,A.cnO(h.a8_(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.cnO(h.a8_(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.cnO(h.a8_(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dj(D.bsw,D.eOi,h.gaWD(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h0,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bEf,B.n),g,g,g,g,B.lT,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZ9,B.n7,B.fN],u):A.a([B.aW,B.aR,B.bU],u)
t=x.V
s=A.a([new A.a9(0,B.G,B.aR.j(f?0.45:0.35),B.eI,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jC,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h_,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.bys(h.d.gvZ(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cp,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.C(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.j8.j(0.75),B.r,1.6)
t=A.a([new A.a9(0,B.G,B.b3.j(0.28),B.cC,14)],t)
j=B.b3.j(0.22)
i=A.m(10)
u=A.p(g,A.bu(r,new A.am(B.V,g,B.a9,B.q,A.a([p,new A.B(D.bhk,A.A(A.a([o,B.aw,A.aD(!1,B.X,!0,g,A.aH(!1,n,!0,A.er(new A.B(Aa.V3,A.u(A.a([A.p(g,D.ahV,B.h,g,g,new A.o(j,g,A.H(B.b3.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.fW,D.eEp],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc5r(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aE,B.w,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fT(1.7777777777777777,d,g),B.aS,w,B.P,u,B.bv,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b9,A.dj(Ae.Yk,D.eCp,h.gbsv(),A.bk(B.aR,g,g,g,B.c,g,B.iD,g,new A.b5(A.m(12),B.W),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.aa],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dT:B.cg,B.r,1)
t=A.V(B.WT,f?B.bm:B.bu,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bu,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.uf,g,g,1/0))}else B.d.v(d,new A.I(w,new C.etj(h,new C.t2(f)),A.R(w).k("I<1,r>")))
if(h.e)d.push(new A.B(B.zt,A.as(A.mg(g,f?B.bm:B.bu,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cg(g,e,A.br(!0,A.u(A.a([new A.B(B.zy,a0,g),A.C(A.cf(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.ws,g,g,B.af),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bvX(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.a9(0,B.G,B.x.j(r?0.35:0.08),B.cC,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aS1,u,u,u,u,u,u,u,5),l=B.aR.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hK:B.fQ,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.Z,u,u,u,A.l(u,u,r?B.aN:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcJa()
v=A.zy(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bm:B.bu,u,u,u,u,u,u,u,u,12,u,u,B.a1,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b5,B.R,0,B.p)}t=A.C(t,1)
k=A.a([B.aR.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bys(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a8(B.a_,B.a7,B.w,k,u,u),B.n),u,u,u,u,B.h0,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.KI(A.A(A.a([m,A.C(new A.B(B.ach,A.A(A.a([l,B.bd,t,B.ab,k,A.aF(u,u,u,u,A.V(B.cu,(r?B.bm:B.bu).j(0.75),u,u,u,20),u,u,u,new C.et4(this,d),u,u,u,u,u,B.c6)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ah,u,B.e,B.j,0,u,u),u),B.ap),B.h,u,D.aQV,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d6,u,u,u,u)}}
C.aaV.prototype={
D3(d){return this.bES(d)},
bES(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oA(d,o,!1),$async$D3)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
w=4
return A.b(A.bK(A4.zr,null,x.H),$async$D3)
case 4:s=t.d
w=5
return A.b(C.fn4(!0,o,s),$async$D3)
case 5:r=f
q=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.ES(r,"ngmy_project_"+A.aI(s.b,q,"_"),!1),$async$D3)
case 6:p=f
w=7
return A.b(A.oz(o,!1),$async$D3)
case 7:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$D3,v)},
XQ(d){return this.cl3(d)},
cl3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$XQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oA(d,s,!1),$async$XQ)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
A.hl(d,new C.ape(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oz(s,!1),$async$XQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XQ,v)},
Oa(d){return this.chh(d)},
chh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(A.hl(d,D.aAw,!0,"NgmyWorksheetProjectScan",x.N),$async$Oa)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.byt(s),$async$Oa)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.F(x.q).f.P(D.eki)
w=1
break}q=C.fGU(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$Oa)
case 5:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Oa,v)},
XR(d){return this.csI(d)},
csI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(C.by1(),$async$XR)
case 3:s=f
if(s==null){w=1
break}r=C.fGU(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$XR)
case 4:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$XR,v)},
B(d){var w=this,v=null,u=A.K(d).ax.a===B.H,t=new C.t2(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.a9(0,B.G,B.x.j(u?0.35:0.08),B.kD,36)],x.V),o=x.p
return A.br(!0,new A.B(B.uc,A.p(v,A.u(A.a([w.cjH(d,t,s),new A.B(D.bgK,A.u(A.a([w.aZx(t,"QR restore"),B.T,A.A(A.a([w.aUI(t,!0,B.j0,B.b3,B.b3,new C.etl(w,d),"Show to scan","QR code"),B.aw,w.atD(t,B.iF,B.b0,B.bD,new C.etm(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d1,w.aZx(t,"Backup files"),B.T,A.A(A.a([w.atD(t,B.hf,B.aR,B.bU,new C.etn(w,d),"Full copy","Backup file"),B.aw,w.atD(t,M.x6,B.b_,B.aM,new C.eto(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cjH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eO,B.cW,B.ff],k):A.a([B.aW,B.aR,B.bU],k)
w=A.an(l,A.V(B.t_,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kR,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.a9(0,B.G,B.x.j(0.2),B.cC,12)],x.V)
r=this.d
s=A.p(l,C.aMy(!0,A.m(13),64,D.bnJ,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.Z,l,l,l,D.aKd,l,l,l)
r=C.bys(r.gvZ(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.V,l,B.a9,B.q,A.a([w,new A.B(D.bh7,A.u(A.a([v,A.A(A.a([s,B.es,A.C(A.u(A.a([u,B.au,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fu,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.etk(d),l,l,l,A.ok(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aHF,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aE,B.w,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
aZx(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aR,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bm:B.bu,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aUI(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ab2:B.aN
if(e)w=B.b3.j(o?0.45:0.35)
else{w=o?B.dT:B.cg
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.a9(0,B.G,B.b3.j(0.12),B.cC,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aN:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.C(A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.er(new A.B(E.V4,A.u(A.a([t,B.aa,u,B.bw,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bm:B.bu,r,r,r,r,r,r,r,r,11,r,r,B.cp,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
atD(d,e,f,g,h,i,j){return this.aUI(d,!1,e,f,g,h,i,j)}}
C.ape.prototype={
S(){return new C.bgH()}}
C.bgH.prototype={
Z(){this.a0()
this.abv()},
abv(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.byu(p.c,p.d),$async$abv)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.esZ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.et_(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abv,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.K(d).ax.a===B.H,f=g?B.z0:B.iP,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.eq,g?B.al:B.ak,h,h,h,18),h,h,h,new C.et0(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.C(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.y7],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eO,B.cW,B.ff],s):A.a([B.aW,B.aR,B.bU],s)
r=x.V
q=A.a([new A.a9(0,B.G,B.aR.j(g?0.4:0.3),B.eI,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.bys(p.gvZ(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fu,h,h,h)],u),B.m,h,B.b5,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aE,B.w,s,h,h),B.n),h,h,h,h,E.Vq,h,h,1/0)
t=g?D.b6c:B.c
q=A.m(24)
p=A.H(w?B.b3.j(0.4):B.aR.j(0.3),B.r,1)
r=A.a([new A.a9(0,B.G,B.x.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3J,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dM5)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pi(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c1,h,h,h))}}o.push(B.aS)
n=w?B.b3:B.aR
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.b3:B.aR).j(0.35),B.r,1)
k=w?B.KP:B.Lm
k=A.V(k,w?B.b3:B.aR,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.aw,A.C(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.al:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a1,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iD,h,h,h))
return A.cg(h,f,A.br(!0,A.u(A.a([new A.B(A1.K3,e,h),A.C(A.cf(A.u(A.a([s,B.aS,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rH,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adp,h,h,B.af),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.apj.prototype={
S(){return new C.aBp(A.y7(B.Jn,B.n1,B.t3))}}
C.aBp.prototype={
p(){this.d.p()
this.a2()},
aHD(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.ir(w,d)},
c1m(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.hKK(t)
if(s!=null){this.aHD(s)
return}r=C.fV0(t)
if(r!=null)q=A.dl(r,p,0)
else q=!1
if(q){this.aHD(B.a.i(B.a.aV(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eH(A.a([A.aF(t,t,t,t,A.V(u.f?B.rR:X.KW,t,t,t,t,t),t,t,t,new C.et2(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.z0,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.eOc,t,t,t,1,t,!0),q=A.y6(u.d,B.bM,u.gc1l()),p=A.m(28)
p=A.as(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aR,B.r,3),p,A.a([new A.a9(2,B.G,B.aR.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.x.j(0.72)
v=A.m(16)
return A.cg(r,B.x,new A.am(B.V,t,B.aX,B.q,A.a([q,p,A.an(32,A.p(t,D.eN3,B.h,t,t,new A.o(w,t,A.H(B.aR.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iE,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aG9.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mb.prototype={
S(){return new C.aBr(D.a5J,A.a([],x.D))},
bl(){return this.r.$0()},
gdQ(){return this.c}}
C.aBr.prototype={
gcqM(){return J.bzz(this.e,0,new C.etL())},
Z(){this.a0()
$.aS.c_$.push(this)
this.uL()},
p(){$.aS.hE(this)
this.a2()},
iM(d){if(d===B.fl)this.uL()},
uL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bw(q.a.c).cJ(0,B.kr),$async$uL)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.etH(q,p))
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
if(q.c!=null&&q.f)q.n(new C.etI(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uL,v)},
Gt(d){return this.bBL(d)},
bBK(){return this.Gt(null)},
bBL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hMF(l,d),$async$Gt)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l0(l,r,q,D.cOw,new A.N(Date.now(),0,!1))
w=4
return A.b(C.Js(t.a.c,p),$async$Gt)
case 4:o=f
w=5
return A.b(t.uL(),$async$Gt)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.F(x.q).f.P(D.ehu)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.F(q).f.P(D.ejc)
else n.F(q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D7(m)
case 1:return A.h(u,v)}})
return A.i($async$Gt,v)},
D7(d){return this.c5d(d)},
c5d(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$D7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hl(s,new C.apk(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$D7)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Js(u.a.c,t),$async$D7)
case 5:case 4:w=6
return A.b(u.uL(),$async$D7)
case 6:return A.h(null,v)}})
return A.i($async$D7,v)},
uA(d){return this.bR8(d)},
bR8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.by1(),$async$uA)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hl(r,D.aAw,!0,"NgmyWorksheetProjectScan",x.N),$async$uA)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.byt(q),$async$uA)
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
break}p=C.fGU(s)
w=15
return A.b(C.Js(t.a.c,p),$async$uA)
case 15:o=f
w=16
return A.b(t.uL(),$async$uA)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.F(x.q).f.P(D.ejh)
w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.D7(p)
case 1:return A.h(u,v)}})
return A.i($async$uA,v)},
M3(d){return this.bAr(d)},
bAr(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$M3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cb(null,null,!0,null,new C.ets(d),s,null,!0,!0,x.y),$async$M3)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oc(t.a.c,A.a([],x.D)),$async$M3)
case 6:w=7
return A.b(t.uL(),$async$M3)
case 7:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.ehz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$M3,v)},
c5q(d){var w=this.c
w.toString
A.c1(B.K,new C.etB(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b_8(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.j6
else w=B.c
v=A.m(16)
u=A.H(p?B.dT:B.cg,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aN:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.p(r,A.u(A.a([s,B.aa,t,B.bw,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bm:B.bu,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ub,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
Yj(d,e){return this.c5e(d,e)},
c5e(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(B.K,new C.etw(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Yj)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h2H(r,new C.etx(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.M5(d,e),$async$Yj)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Yj,v)},
aXe(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aH
else t=h.a?B.aN:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.C(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bm:B.bu,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.X,!0,u,A.aH(!1,u,!0,new A.B(B.zC,A.A(A.a([s,B.bd,t,A.V(B.em,w?B.bm:B.bu,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
cbT(d,e,f,g,h,i){return this.aXe(!1,d,e,f,g,h,i)},
M5(d,e){return this.bAB(d,e)},
bAB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$M5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kN(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$M5)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bwQ(t.a.c,d.a),$async$M5)
case 6:w=7
return A.b(t.uL(),$async$M5)
case 7:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$M5,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===B.H,n=new C.t2(o),m=o?B.bV:B.iP
if(q.f)o=D.aXh
else{w=q.bvc(n)
v=q.bQg(n)
u=q.gbsp()
if(o)t=B.j6
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.aa,v,B.aS,new C.E2(A.p(p,A.A(A.a([q.awZ(P.Kz,"Projects",n,D.a5J),q.awZ(B.um,"Cashier",n,D.aNr),q.awZ(B.DW,"Family Tree",n,D.f94)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ef,0.95,u,p),B.bv],r)
w=q.d
if(w===D.a5J){w=J.aa(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aN:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b9,new C.au_(q.gaLK(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.cbV(n)],r))}else{o=q.a
if(w===D.aNr)u.push(new C.alt(o.c,n,p))
else{w=q.r
u.push(new C.amz(o.c,o.d,o.e,o.f,new C.etO(q),new C.etP(q),new A.cv(w,x.b4)))}}o=A.cf(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A6.JX,p,p,B.af)}return A.cg(p,m,A.br(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bvc(d){var w=null,v=A.m(8),u=d.a,t=A.V(N.Wy,u?B.bm:B.bu,w,w,w,16)
return A.aH(!1,v,!0,new A.B(B.lk,A.A(A.a([t,B.bq,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bm:B.bu,w,w,w,w,w,w,w,w,14,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etp(this),w,w,w,w,w,w,w)},
gbsp(){switch(this.d.a){case 0:return D.a51
case 1:return D.f0w
case 2:return D.a52}},
bQg(d){var w=null,v=A.m(15),u=A.a([new A.a9(0,B.G,B.aR.j(0.35),B.cv,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.byb,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bla,A.aD(!1,B.X,!0,w,A.aH(!1,A.m(12),!0,A.p(w,D.bvN,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ett(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.E2(A.p(w,A.u(A.a([new A.B(E.Va,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.zy(this.gcqM()),w,w,w,w,w,w,D.ez7,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.ua,B.iE,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aR,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.f0v,w)},
awZ(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aR:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.a9(0.5,B.G,B.aR.j(0.42),B.cC,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bm:B.bu
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bm:B.bu
return A.C(A.aD(!1,B.X,!0,u,A.aH(!1,s,!0,A.de(u,A.A(A.a([w,B.ez,new A.dp(1,B.ck,A.d(e,u,1,B.Z,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b5,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.i9,u,u,u,B.K_,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.etK(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),1)},
cbV(d){var w,v,u,t,s,r,q=this,p=null
if(J.ch(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bvS,B.h,p,p,new A.o(p,p,p,p,A.a([new A.a9(2,B.G,B.aR.j(0.5),B.eI,28)],x.V),D.bGr,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.E2(A.p(p,A.u(A.a([t,B.d1,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bu,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.A(A.a([A.C(q.aNc(B.iF,"Scan QR",new C.etE(q),d),1),B.aw,A.C(q.aNc(M.x6,"Upload file",new C.etF(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bJ(D.eXn,q.gaLK(),A.bk(B.aR,p,p,p,B.c,B.fV,p,p,new A.b5(A.m(12),B.W),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bia,1.05,D.a51,p)}w=J.b4(q.e,new C.etG(q,d),x.l)
w=A.z(w,w.$ti.k("ai.E"))
return new C.E2(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a51,p)},
aNc(d,e,f,g){var w=null,v=B.aR.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aR.j(0.45),B.r,1)
return A.aD(!1,B.X,!0,u,A.aH(!1,t,!0,A.p(w,A.u(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.exz,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.aca,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)},
cbU(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.a([new A.a9(0,B.G,B.x.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bm:B.bu
n=A.bu(B.a6l,new A.fT(1.7777777777777777,C.aMy(!0,B.fe,1/0,P.Kz,n,d.c,1/0),u),B.ap)
w=x.p
v=A.C(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aN:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.zy(d.gvZ()),u,u,u,u,u,u,D.evL,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.X,!0,u,A.aH(!1,o,!0,A.u(A.a([n,new A.B(B.bC,A.A(A.a([v,A.aF(u,u,u,u,A.V(A7.La,t?B.bm:B.bu,u,u,u,u),u,u,u,new C.etC(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.etD(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bsW.prototype={}
C.qo.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.D(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcJa(){var w,v,u,t,s=this.c
if(s===B.k.lN(s))w=B.o.u(B.k.M(s))
else{v=B.k.ab(s,2)
u=A.ad("\\.?0+$",!0,!1,!1,!1)
w=A.aI(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l0.prototype={
gvZ(){return B.d.cI(this.d,0,new C.cpI())},
ad(){var w=this,v=w.d,u=A.R(v).k("I<1,a0<n,@>>")
v=A.z(new A.I(v,new C.cpH(),u),u.k("ai.E"))
return A.D(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.aa()],x.N,x.z)},
b64(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l0(w.a,w.b,v,u,w.e)},
b5N(d){return this.b64(d,null)},
QO(d){return this.b64(null,d)}}
C.FW.prototype={
a3(){return"FamilyGender."+this.b}}
C.hP.prototype={
ad(){var w=this
return A.D(["id",w.a,"name",w.b,"gender",C.fZA(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
azx(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hP(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ahO.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kk.prototype={
gal5(){var w=this.f
return new A.a3(w,new C.bIp(),A.R(w).k("a3<1>")).gH(0)},
ad(){var w=this,v=w.f,u=A.R(v).k("I<1,a0<n,@>>")
v=A.z(new A.I(v,new C.bIo(),u),u.k("ai.E"))
return A.D(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.aa(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hDm(w.y)],x.N,x.z)},
xB(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kk(w.a,v,u,t,s,r,w.r,q,p,o)},
b63(d,e){var w=null
return this.xB(w,w,d,e,w,w,w,w)},
czf(d,e,f,g,h,i,j){return this.xB(d,e,f,g,h,i,j,null)},
azC(d,e){var w=null
return this.xB(w,w,w,d,w,w,e,w)},
cxL(d){var w=null
return this.xB(w,w,w,w,w,w,d,w)},
cy8(d){var w=null
return this.xB(w,w,w,w,w,w,w,d)},
azo(d){var w=null
return this.xB(w,w,w,w,d,w,w,w)},
cyM(d,e,f){var w=null
return this.xB(w,d,w,e,w,w,f,w)},
cxy(d){var w=null
return this.xB(w,w,d,w,w,w,w,w)},
cyk(d,e){var w=null
return this.xB(d,w,w,w,w,e,w,w)}}
C.cpJ.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cpK.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDs.prototype={}
C.b4A.prototype={
bH(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b4A()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aU(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b4z.prototype={
gvk(){return!0},
gEA(){return this.z.b<this.b.length},
aOM(d){switch(0){case 0:return d.a.c}},
aOt(d){switch(0){case 0:return d.a.d}},
bJO(d,e){switch(0){case 0:return new A.hx(d,e)}},
bJc(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fR(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.is(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FH(b4)
switch(0){case 0:v=b5.b
u=new A.kh(0,v,0,1/0)
t=w===B.Qu
break}s=A.a([],x.gZ)
r=A.Q(x.cM,x.S)
for(b3=b1.z,q=B.d.fT(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.fR(b4,u,!0)
f=b1.aOM(g)
f.toString
e=b1.aOt(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDs(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDs(k,j,i))}d=s.length
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
a8=b1.aOM(g)
e=b1.aOt(g)
e.toString
a9=b1.bJc(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bJO(a6,a3+a9)
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
F5(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hQ(){return this.z}}
C.bre.prototype={}
var z=a.updateTypes(["au<~>()","S(hP)","S(kk)","~()","S(mJ)","a0<n,@>(kk)","G(kk,kk)","n(hP)","kk(a0<@,@>)","S(l0)","eq<n?>(hP)","tw()","a0<n,@>(mJ)","XI(Z)","hP(a0<@,@>)","a0<n,@>(hP)","S(tw)","S(qo)","au<~>(l0)","mJ(a0<@,@>)","G(l0,l0)","G(hP,hP)","n?(hP)","r(nO)","hP(hP)","cE(bq<n,Ee>)","cE(Ig)","~(G)","G?(hP)","hP()","al<hP>()","aaA(Z)","S(Ig)","B(hP)","~(FW)","WF(Z)","r(FW,n,a_)","n(n)","bq<n,al<a0<n,@>>>(n,al<mJ>)","n(N)","+count,id,name(G,n,n)(kk)","kk(kk)","Y2(Z)","Y3(Z)","S(le)","le()","Wd(Z)","n(kk)","WH(Z)","WG(Z)","X6(Z)","~(hP)","r(qo)","aaV(Z)","~(lC)","au<~>([n?])","P(P,l0)","r(l0)","P(P,qo)","a0<n,@>(qo)","qo(a0<@,@>)","S(ac5)","X4(Z)","X8(Z)","l0(a0<@,@>)","cr(FV)","n(l0)","a0<n,@>(l0)","G(mJ,mJ)","G(hP)","kk(a0<n,@>)","ZK(Z)"])
C.ffK.prototype={
$1(d){return d.a+" "+d.b},
$S:120}
C.ffJ.prototype={
beM(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qh(s,d,B.h2,E.Dj),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.O(r!=null&&A.Jf(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.beM(d)},
$S:308}
C.ffL.prototype={
$1(d){return d.b},
$S:120}
C.foF.prototype={
$1(d){var w=null
return A.eB(w,B.K,new F.Nw(this.a,this.b,w),w,w,0,B.V5,B.cZ,w,w,w)},
$S:46}
C.f6k.prototype={
$1(d){return d!=null},
$S:218}
C.f6l.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:218}
C.f6q.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:170}
C.fds.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f0(d,w,w,w,A.fX(w,B.qF,w,w,w,w,w,w,w,B.dm,w,w,10.5,w,B.eb,w,!0,w,w,w,w),w),u=f?B.eb:B.uh
return new A.ni(D.bdQ,A.a7c(A.a([new A.fG(130,w,v),new A.xQ(1,B.DP,A.f0(e,w,w,w,A.fX(w,g==null?D.dNk:g,w,w,w,w,w,w,w,B.dm,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.w5,B.l1))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1859}
C.fdr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uz(999)
f=A.w5(A.l9(h,A.f0("Cashier",h,h,h,A.fX(h,D.xW,h,h,h,h,h,h,h,B.dm,h,h,10,h,B.eb,h,!0,h,h,h,h),h),h,new A.ki(D.dNb,h,f,B.hk,h),h,h,D.beg,h))
w=A.w5(A.f0("Debt receipt",h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dm,h,h,22,h,B.eb,h,!0,h,h,h,h),h))
v=A.w5(A.f0(C.vQ(new A.N(Date.now(),0,!1),!0),h,h,h,D.a3R,h))
u=A.uz(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f0(s,h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dm,h,h,14,h,B.eb,h,!0,h,h,h,h),h)
r=A.f0("Person who owes",h,h,h,D.a3R,h)
q=A.uz(10)
p=x.C
u=A.l9(h,A.xL(A.a([s,new A.fG(h,2,h),r,new A.fG(h,10,h),A.l9(h,A.xL(A.a([A.f0("Amount owed",h,h,h,D.a3R,h),new A.fG(h,2,h),A.f0(A.zy(t.c),h,h,h,A.fX(h,D.xW,h,h,h,h,h,h,h,B.dm,h,h,20,h,B.eb,h,!0,h,h,h,h),h)],p),B.q7,B.l1),h,new A.ki(B.oi,h,q,B.hk,h),h,h,D.bdy,1/0)],p),B.q7,B.l1),h,new A.ki(E.aBs,h,u,B.hk,h),h,h,D.bfk,1/0)
q=new A.n0(D.dNe,0.9,B.ki)
r=A.uz(12)
s=i.c
o=s.$2("Original due",C.vQ(t.r,!1))
n=s.$2("Current due",C.vQ(t.f,!1))
m=i.d
l=new A.n0(m,1.1,B.ki)
k=A.uz(8)
j=i.a
k=A.a([o,n,new A.fG(h,6,h),A.l9(h,A.w5(A.f0(t.gaG9(),h,h,h,A.fX(h,m,h,h,h,h,h,h,h,B.dm,h,h,11,h,B.eb,h,!0,0.5,h,h,h),h)),h,new A.ki(h,new A.p0(l,l,l,l),k,B.hk,h),h,h,D.bep,1/0),new A.fG(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.xW))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.xW))
else{n=A.f0("Missed days ("+n+")",h,h,h,A.fX(h,B.qF,h,h,h,h,h,h,h,B.dm,h,h,10.5,h,B.eb,h,!0,h,h,h,h),h)
m=A.R(o).k("I<1,Qh>")
o=A.z(new A.I(o,new C.fdq(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fG(h,4,h),n,new A.fG(h,6,h),new C.b4z(5,5,new C.b4A(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fG(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fG(h,8,h),w,new A.fG(h,3,h),v,new A.fG(h,16,h),u,new A.fG(h,10,h),A.l9(h,A.xL(k,B.w5,B.l1),h,new A.ki(h,new A.p0(q,q,q,q),r,B.hk,h),h,h,B.acl,1/0)],p)
w=j.a
if(w!=null){v=new A.n0(B.Gg,1,B.ki)
B.d.v(f,A.a([new A.fG(h,16,h),A.f0("Debtor signature",h,h,h,A.fX(h,B.qF,h,h,h,h,h,h,h,B.dm,h,h,10,h,B.eb,h,!0,h,h,h,h),h),new A.fG(h,6,h),A.l9(h,new A.Gb(w,B.Su,h,h),h,new A.ki(h,new A.p0(v,v,v,v),A.uz(6),B.hk,h),82,h,B.K1,1/0)],p))}f.push(new A.fG(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f0(w,h,h,h,D.ep_,h))
f.push(new A.fG(h,18,h))
f.push(A.w5(A.f0("NGMY.ORG",h,h,h,A.fX(h,D.xW,h,h,h,h,h,h,h,B.dm,h,h,14,h,B.eb,h,!0,1.8,h,h,h),h)))
return f},
$S:448}
C.fdq.prototype={
$1(d){var w=null,v=new A.n0(D.Gh,0.7,B.ki),u=A.uz(999)
return A.l9(w,A.f0(C.vQ(d,!1),w,w,w,A.fX(w,D.Gh,w,w,w,w,w,w,w,B.dm,w,w,9.5,w,B.eb,w,!0,w,w,w,w),w),w,new A.ki(w,new A.p0(v,v,v,v),u,B.hk,w),w,w,D.bjs,w)},
$S:1860}
C.bWX.prototype={
$1(d){var w=null,v=B.bR.j(0.08),u=A.m(999),t=A.H(B.bR.j(0.28),B.r,1)
return A.p(w,A.d(C.vQ(d,!1),w,w,w,w,w,w,D.evg,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ew,w,w,w)},
$S:1861}
C.fpa.prototype={
$1(d){var w=null,v=A.aG(d,B.bN,x.n).w,u=A.m(26),t=A.aF(w,w,w,w,B.aie,w,w,w,new C.fp7(d),w,w,w,w,w,B.c6),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eB(w,B.K,new A.d3(new A.aV(0,380,0,v.a.b*0.9),A.aD(!1,B.X,!0,u,new A.B(B.UV,A.u(A.a([new A.bE(B.a7,w,w,t,w),new A.dp(1,B.ck,A.cf(A.u(A.a([new A.ep(new C.aUK(r,w),s),B.T,A.A(A.a([A.C(A.ex(B.xh,D.eU_,new C.fp8(s,r,d),A.d9(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eV,w,new A.b5(A.m(14),B.W),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.C(A.dj(B.Ya,D.eQU,new C.fp9(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eV,w,new A.b5(A.m(14),B.W),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.af),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aG,0,w,w,w,w,w,B.ac),w),w,w,0,Ab.Vj,B.cZ,w,w,w)},
$S:46}
C.fp7.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fp8.prototype={
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
break}r=J.f7(B.dz.gaK(s))
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
C.fp9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fk2(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.F(x.q).f
s.P(A.b_(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fp2.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eB(w,B.aG,A.u(A.a([new A.B(D.bf9,A.A(A.a([A.C(A.d(this.a,w,w,w,w,w,w,B.mS,w,w,w),1),A.aF(w,w,w,w,B.l_,w,w,w,new C.fp0(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dp(1,B.ck,new A.B(B.id,A.bu(A.m(14),A.fC(t,B.B,w,w,B.cj,B.dp,!1,w,!1,w,w),B.ap),w),w),new A.B(B.JH,new A.a4(1/0,w,A.dj(B.ob,D.aKE,new C.fp1(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.JR,B.cZ,w,new A.b5(v,B.W),w)},
$S:46}
C.fp0.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fp1.prototype={
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
C.fpe.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eB(w,B.aG,new A.B(D.bfg,A.u(A.a([A.A(A.a([D.bko,A.aF(w,w,w,w,B.l_,w,w,w,new C.fpc(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.ep(A.bu(A.m(14),A.p(w,A.b1(w,w,w,new C.b6H(s.ax,w),B.as),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.aa,new A.a4(1/0,w,A.dj(B.ob,D.aKE,new C.fpd(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(v,B.W),w)},
$S:46}
C.fpc.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fpd.prototype={
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
r=J.f7(B.dz.gaK(s))
w=5
return A.b(A.rf(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.f94.prototype={
$1(d){return d.a===this.a},
$S:235}
C.dxq.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dxb.prototype={
be_(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c1(t,new C.dxe(s,q,e),p,!0,!0,!1,B.Gx,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dxf(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.be_(d,e)},
$S:1862}
C.dxe.prototype={
$1(d){var w,v=null,u=this.c===B.uS,t=u?D.cTR:D.cQx
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aN:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.br(!0,new A.B(K.acU,A.u(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bm:B.bu,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa,A.ig(!0,v,v,B.z,L.aHW,new C.dxd(this.a,w,t,d),t.length,v,B.dJ,B.af,!0)],x.p),B.ah,v,B.e,B.R,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:33}
C.dxd.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.M:B.aN
v=A.m(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bm:B.bu).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aH(!1,p,!0,A.p(B.B,C.aUJ(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dxc(t.d,r),s,s,s,s,s,s,s)},
$S:185}
C.dxc.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.dxf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dx9.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:91}
C.dxa.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cF(B.co,e,v)
return new A.cZ(e,!1,A.iF(B.B,A.as(A.aD(!1,B.X,!0,v,new A.eh(new C.dx8(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bc(t,new A.bm(0.96,1,u),u.k("bc<bC.T>"))),v)},
$S:30}
C.dx8.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bN,x.n).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bm:B.bu).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.C(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aH(!1,v,!0,new A.B(B.ef,A.V(B.cu,i.a.d.a?B.bm:B.bu,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dwU(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aNJ("Name")
r=l.a
q=r.d==null?k:new C.dwV(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lN
n=A.H(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b5Y(new A.B(B.hb,A.aH(!1,p,!0,A.p(B.B,C.aUJ(m==null?"\ud83d\udc64":A.feg(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ad,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kb,k,B.a3A,k,k)
v=A.a([v,B.aa,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bu,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.A(A.a([A.C(i.aOj("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dwW(r,a0),r.d===B.uS),1),B.ab,A.C(i.aOj("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dx0(r,a0),r.d===B.a0A),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bE(B.a_,k,k,A.hg(D.bxv,D.eSy,new C.dx1(r,l.e,a0),A.fn(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c6)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uJ(A.ad("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aNK("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ad,k,k,s,k,k,B.e_,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aN
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bm:B.bu).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.a1,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vQ(r.a,!1)
v.push(A.aD(!1,B.X,!0,q,A.aH(!1,p,!0,A.p(k,A.A(A.a([A.C(A.u(A.a([t,B.bw,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.buq],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dx2(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aNJ("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ad,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.aa)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aVF(r.b.length!==0,B.mA,new C.dx3(r,i,a0),new C.dx4(r,a0),"Upload from gallery","ID photo"))
v.push(i.aVF(r.c.length!==0,D.bnH,new C.dx5(r,i,d,a0),new C.dx6(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A8.a5a("Signature (optional)",t,new C.dx7(a0),new C.dwX(a0,t),new C.dwY(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bm:B.bu
s=(i?B.bm:B.bu).j(0.28)
s=A.C(A.dU(E.aKx,new C.dwZ(d),A.d9(k,k,k,k,k,k,k,k,k,t,k,k,B.wh,k,new A.b5(A.m(10),B.W),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cW,k,k,k,B.c,k,B.wh,k,new A.b5(A.m(10),B.W),k,k,k)
v.push(A.A(A.a([s,B.ab,A.C(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tz,k,k,k),new C.dx_(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cf(A.u(v,B.ah,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.af),B.h,k,new A.aV(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.ud,B.iE,k,k,360)},
$S:173}
C.dwU.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dwV.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dwW.prototype={
$0(){return this.b.$1(new C.dwT(this.a))},
$S:0}
C.dwT.prototype={
$0(){var w=this.a
w.d=B.uS
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dx0.prototype={
$0(){return this.b.$1(new C.dwS(this.a))},
$S:0}
C.dwS.prototype={
$0(){var w=this.a
w.d=B.a0A
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dx1.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dx2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xB(null,u.b,A.bX(2020,1,1,0,0,0,0,0),null,s,A.bX(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dwR(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwR.prototype={
$0(){var w=this.b
return this.a.a=A.bX(w.gcc(),w.gcb(),w.gcp(),0,0,0,0,0)},
$S:0}
C.dx3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NA(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dwQ(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwQ.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dx4.prototype={
$0(){return this.b.$1(new C.dwP(this.a))},
$S:0}
C.dwP.prototype={
$0(){return this.a.b=""},
$S:0}
C.dx5.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c1(q,new C.dwN(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NA(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dwO(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwN.prototype={
$1(d){var w=null
return A.br(!0,A.u(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,B.ahM,w,w,w,w,new C.dwH(d),!1,w,w,w,w,w,w,w,D.eJL,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,B.ahK,w,w,w,w,new C.dwI(d),!1,w,w,w,w,w,w,w,D.eQ1,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:33}
C.dwH.prototype={
$0(){A.a7(this.a,!1).K("camera")
return null},
$S:0}
C.dwI.prototype={
$0(){A.a7(this.a,!1).K("gallery")
return null},
$S:0}
C.dwO.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dx6.prototype={
$0(){return this.b.$1(new C.dwM(this.a))},
$S:0}
C.dwM.prototype={
$0(){return this.a.c=""},
$S:0}
C.dx7.prototype={
$0(){return this.a.$1(new C.dwL())},
$S:0}
C.dwL.prototype={
$0(){},
$S:0}
C.dwX.prototype={
$0(){return this.a.$1(new C.dwK(this.b))},
$S:0}
C.dwK.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dwY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aeV(u.a,null,null,new C.dwJ(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dwJ.prototype={
$4(d,e,f,g){this.a.$1(new C.dwG(this.b,d))},
$S:416}
C.dwG.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dwZ.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dx_.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.F(x.q).f.P(D.el8)
return}if(w.a.d==null){w.c.F(x.q).f.P(D.ei5)
return}A.a7(w.c,!1).K(!0)},
$S:0}
C.dxt.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:91}
C.dxu.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bu).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aN:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zy(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bm:B.bu,r,r,r,r,r,r,r,r,13,r,r,B.a1,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.xZ(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.xZ(r).length>0?B.bR:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bm:B.bu
t=(q?B.bm:B.bu).j(0.28)
s=x.p
return new A.cZ(e,!1,A.as(A.aD(!1,B.X,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.aA,A.A(A.a([A.C(A.dU(B.mU,new C.dxr(d),A.d9(r,r,r,r,r,r,r,r,r,w,r,r,B.jW,r,new A.b5(A.m(10),B.W),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.C(A.bJ(D.eQq,new C.dxs(d),A.bk(B.cW,r,r,r,B.c,r,B.jW,r,new A.b5(A.m(10),B.W),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ah,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zH,E.Va,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:30}
C.dxr.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxs.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dxn.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dxo(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bu).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.C(A.d(k,s,1,B.Z,s,s,s,A.l(s,s,r.a.d.a?B.aN:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zy(l.c),s,s,s,s,s,s,D.ewH,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jm((r.a.d.a?B.bm:B.bu).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.WT,"View receipt",new C.dxg(r,d,l))
u=l.x!=null
t=u?B.uB:B.p1
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.B(D.bfd,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dxh(r,d,l)),q.$3$icon$label$onTap(B.zY,"Edit",new C.dxi(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mA,"View / download ID",new C.dxj(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bnG,"View / download selfie",new C.dxk(r,d,l)))
if(l.gaBc())p.push(q.$3$icon$label$onTap(A_.Y1,"View / download signature",new C.dxl(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bR,B.e4,"Delete",new C.dxm(r,d,l)))
p.push(B.au)
return A.br(!0,new A.B(B.ua,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:33}
C.dxo.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aN:B.aG
else w=d
return A.aH(!1,v,!0,new A.B(B.eF,A.A(A.a([A.V(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1863}
C.dxg.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fp6(w,this.c)},
$S:0}
C.dxh.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Qa(this.c)},
$S:0}
C.dxi.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.BR(this.c)},
$S:0}
C.dxj.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.byP(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dxk.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.byP(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dxl.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fpb(w,this.c)},
$S:0}
C.dxm.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Mg(0,this.c)},
$S:0}
C.dxv.prototype={
$1(d){return d.x==null},
$S:235}
C.dxw.prototype={
$1(d){return d.x!=null},
$S:235}
C.dxx.prototype={
$2(d,e){return d+e.c},
$S:1864}
C.dxy.prototype={
$0(){return this.a.bsS()},
$S:0}
C.dxp.prototype={
$0(){return this.a.abI(this.b)},
$S:0}
C.fbh.prototype={
$1(d){return C.fKS(A.Y(d,x.N,x.z))},
$S:z+19}
C.fbi.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fbj.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+68}
C.fnN.prototype={
$1(d){return d.ad()},
$S:z+12}
C.fvp.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.f8W.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bIk.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eR(e,v)?v:null},
$S:1865}
C.foi.prototype={
$1(d){var w=this
return new C.X6(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+50}
C.cZE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cZD(w,d))},
$S:z+65}
C.cZD.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZs.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.ct(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.cZp.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cZ2.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cZ3.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.cZt.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cZ9.prototype={
$1(d){var w=null,v=A.K(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bu,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ei(A.a([A.bF(!1,B.de,w,w,!0,w,w,new C.cZ7(d),w,w),A.bJ(B.vd,new C.cZ8(d),A.bk(B.mk,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.cZ7.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZ8.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cZa.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.cZq.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+16}
C.cZr.prototype={
$0(){return B.d.gI(D.xr)},
$S:z+11}
C.cZb.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WF(v,u,J.aa(w.d),null)},
$S:z+35}
C.cZc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZC.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aJ(s,new C.Wm(r.y,r.gDT(0),J.aa(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cZA(r),s,s,s,s,s,s,!1,B.ae)
else{w=e-1
v=J.q(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b65(v,e,w,u,t,r.gbIm(),s)
w=t}return A.c4(q,new C.cZB(r,e),new A.B(B.Vc,w,s))},
$S:1866}
C.cZB.prototype={
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
$S:44}
C.cZA.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCf(B.oR,B.ib)},
$S:0}
C.cZm.prototype={
$0(){var w=this.a
return w.n(new C.cZl(w))},
$S:0}
C.cZl.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZn.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).K(null)
return null},
$S:0}
C.cZ4.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.iQ.j(0.5),r=x.p,q=A.a([D.eIu,B.aa],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ch(p.d)?"Write this book":"Write a new book"
q.push(p.WD(d,B.dN,w,J.ch(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WD(d,L.afL,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.ct(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.B(B.cK,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.jv.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.B(B.cK,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.jv.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WD(d,B.XT,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WD(d,B.p8,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WD(d,B.p8,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eB(u,E.za,A.br(!0,new A.B(Y.Dw,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.adj,B.cZ,u,new A.b5(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.cZo.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.cZf.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.ct(w.d)
return new C.X8(v,J.ct(w.d),w.r+1,null)},
$S:z+63}
C.cZg.prototype={
$1(d){var w=null
return A.nU(!1,A.ei(w,w,w,E.za,new A.k0(this.a,new C.cZe(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:301}
C.cZe.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a3g,B.on,A.C(A.d(e,w,w,w,w,w,w,B.ir,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:507}
C.cZh.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZi.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:193}
C.cZj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zF(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.a0i(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.cZd(s,t))
w=4
return A.b(s.kp(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZd.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZv.prototype={
$1(d){var w=null
return A.nU(!1,A.ei(w,w,w,E.za,new A.k0(this.a,new C.cZu(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:301}
C.cZu.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a3g,B.on,A.C(A.d(e,w,w,w,w,w,w,B.ir,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:507}
C.cZw.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZx.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:193}
C.cZy.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:193}
C.cZz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zF(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kp(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZ5.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bbg(B.oR,R.Jw)},
$S:0}
C.cZ6.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCf(B.oR,R.Jw)},
$S:0}
C.d04.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d05.prototype={
$1(d){var w=this.a
return w.n(new C.d03(w))},
$S:9}
C.d03.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d06.prototype={
$1(d){var w=this.a
return w.n(new C.d02(w))},
$S:9}
C.d02.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d07.prototype={
$1(d){var w=this.a
return w.n(new C.d01(w))},
$S:9}
C.d01.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d08.prototype={
$0(){var w=this.a
return w.n(new C.d00(w,this.b))},
$S:0}
C.d00.prototype={
$0(){var w=this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d09.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_5()
A.a7(this.b,!1).K(new A.bkp(w,v))},
$S:0}
C.cZT.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cZS.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.X4(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+62}
C.cZX.prototype={
$1(d){return d.a===this.a},
$S:z+61}
C.cZW.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b1I(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.ei(A.a([A.bF(!1,B.de,v,v,!0,v,v,new C.cZU(d),v,v),A.bJ(B.vd,new C.cZV(d),A.bk(B.mk,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.za,w,v,v,v,v,D.eHu,v)},
$S:19}
C.cZU.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZV.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cZY.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cZZ.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.cf(A.cd(B.bH,r,B.by,18,14),B.q,t,B.z,t,D.bg7,t,t,B.af)},
$S:275}
C.cZR.prototype={
$0(){return this.a.Oe(0,this.b)},
$S:0}
C.cZQ.prototype={
$0(){return this.a.NI(0,this.b)},
$S:0}
C.cyv.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+16}
C.cyw.prototype={
$0(){return B.d.gI(D.xr)},
$S:z+11}
C.cyx.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bU(0,new A.B(d,A.bQ(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.b6),w),0,0,0)},
$S:1868}
C.cRX.prototype={
$1(d){return this.a.n(new C.cRW(this.b,this.c))},
$S:9}
C.cRW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cSl.prototype={
$1(d){return this.a.n(new C.cS8())},
$S:2}
C.cS8.prototype={
$0(){},
$S:0}
C.cSm.prototype={
$1(d){return this.a.n(new C.cS7())},
$S:2}
C.cS7.prototype={
$0(){},
$S:0}
C.cSn.prototype={
$0(){var w=this.a
return w.n(new C.cS6(w,this.b))},
$S:0}
C.cS6.prototype={
$0(){var w=this.a
return w.d=w.gnr().Eg(this.b.a)},
$S:0}
C.cSo.prototype={
$0(){var w=this.a
return w.n(new C.cS5(w,this.b))},
$S:0}
C.cS5.prototype={
$0(){var w=this.a
return w.d=w.gnr().cx5(this.b)},
$S:0}
C.cSp.prototype={
$1(d){return this.a.n(new C.cS4())},
$S:2}
C.cS4.prototype={
$0(){},
$S:0}
C.cSq.prototype={
$0(){var w=this.a
return w.n(new C.cS3(w,this.b))},
$S:0}
C.cS3.prototype={
$0(){var w=this.a
return w.d=w.gnr().cxa(this.b.a)},
$S:0}
C.cSr.prototype={
$1(d){var w=this.a
return w.n(new C.cSg(w,d))},
$S:6}
C.cSg.prototype={
$0(){var w=this.a
return w.d=w.gnr().cy3(this.b)},
$S:0}
C.cSs.prototype={
$1(d){var w=this.a
return w.d=w.gnr().azr(d)},
$S:2}
C.cSt.prototype={
$1(d){var w=this.a
return w.d=w.gnr().cxd(d)},
$S:2}
C.cSv.prototype={
$1(d){var w=this.a
return w.d=w.gnr().cy1(d)},
$S:2}
C.cSw.prototype={
$1(d){var w=this.a
return w.n(new C.cSf(w,d))},
$S:9}
C.cSf.prototype={
$0(){var w=this.a
return w.d=w.gnr().cxT(this.b)},
$S:0}
C.cSx.prototype={
$0(){var w=this.a,v=w.gnr(),u=B.a.i(w.gDT(0).a.a),t=B.a.i(w.gawP().a.a)
u=v.b6d(B.a.i(w.gan9().a.a),t,u)
A.a7(this.b,!1).K(u)
return null},
$S:0}
C.dKj.prototype={
$0(){var w=this.a
w.uX()
w.a.bl()
w.a.p_()},
$S:0}
C.dKi.prototype={
$0(){var w=this.a
w.uX()
w.a.bl()
w.a.p_()},
$S:0}
C.dKl.prototype={
$0(){var w=this,v=w.b
if(J.ct(v)||J.ch(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dKm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKn.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dKh.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dKk.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dKp.prototype={
$0(){this.a.ML()
return null},
$S:0}
C.dKo.prototype={
$0(){return this.a.D8(this.b)},
$S:0}
C.dJK.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bF(!1,B.de,w,w,!0,w,w,new C.dJI(d),w,w),r=A.bk(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ei(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dJJ(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dJI.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJJ.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dJL.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cxy(this.b)},
$S:0}
C.dJF.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aNZ(w.b,w.c,w.d)},
$S:8}
C.dJd.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dJe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.EV(t.a.c),$async$$0)
case 2:s=r.qD(q.dF(e,new C.dJq(t)))
if(s!=null&&t.c!=null)t.n(new C.dJr(t,s))
t.a.bl()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJq.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJt.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dJu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJE.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cyk(C.fZJ(w),w)},
$S:0}
C.dJC.prototype={
$1(d){return new A.eh(new C.dJB(this.a,this.b),null)},
$S:21}
C.dJB.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahr,v,v,v,p>0?new C.dJx(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aS,A.A(A.a([o,A.C(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.ahZ,v,v,v,new C.dJy(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.ei(A.a([A.bF(!1,B.de,v,v,!0,v,v,new C.dJz(d),v,v),A.bJ(B.pA,new C.dJA(d),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:163}
C.dJx.prototype={
$0(){return this.b.$1(new C.dJw(this.a))},
$S:0}
C.dJw.prototype={
$0(){return--this.a.a},
$S:0}
C.dJy.prototype={
$0(){return this.b.$1(new C.dJv(this.a))},
$S:0}
C.dJv.prototype={
$0(){return++this.a.a},
$S:0}
C.dJz.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJA.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dJD.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cy8(this.a.a)
w.r.a8(0)},
$S:0}
C.dJ1.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.af0(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fTG(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+13}
C.dJ2.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.f,x.P)
w.push(this.b)
v.d=u.azo(w)},
$S:0}
C.dJN.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaA(this.b,w,this.c,null)},
$S:z+31}
C.dJH.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.kW,B.aR,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bu,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.aa,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.ei(A.a([A.bJ(D.eRq,new C.dJG(d),A.bk(B.aR,w,w,w,w,w,w,w,w,w,w,w))],o),B.b5,w,u,v,w,s,w,new A.b5(t,B.W),r,w)},
$S:19}
C.dJG.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dJ3.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dJ4.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dJ5.prototype={
$1(d){return d.a},
$S:z+7}
C.dJ6.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hP(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.azo(w)},
$S:0}
C.dJa.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.af0(q)
w=A.R(q).k("a3<1>")
q=A.z(new A.a3(q,new C.dJ8(r),w),w.k("E.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fTG(v.e,null,r,v.f,v.r,new C.dJ9(s,r),q,"Member Profile",w,t,u)},
$S:z+13}
C.dJ9.prototype={
$0(){return this.a.a75(this.b)},
$S:0}
C.dJ8.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dJb.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.R(w).k("I<1,hP>")
w=A.z(new A.I(w,new C.dJ7(this.b),v),v.k("ai.E"))
u.d=t.azo(w)},
$S:0}
C.dJ7.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+24}
C.dJM.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dJn.prototype={
$1(d){return d.length!==0},
$S:3}
C.dJo.prototype={
$1(d){var w=this
return new A.eh(new C.dJm(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dJm.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bu,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.I(o,new C.dJi(u,e,o),A.R(o).k("I<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bn(v,new A.b2(4,A.m(12),B.d9),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ad,v,v,v,v,v,B.ma,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.u(p,B.ah,v,B.e,B.R,0,B.p)
t=w.a
return A.ei(A.a([A.bF(!1,B.de,v,v,!0,v,v,new C.dJj(d),v,v),A.bJ(B.Hf,new C.dJk(t,u,o,e),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.eFM,new C.dJl(t,u,o,d),A.bk(B.aR,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:163}
C.dJi.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bAU,w,w,w,new C.dJh(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1869}
C.dJh.prototype={
$0(){return this.a.$1(new C.dJf(this.b,this.c))},
$S:0}
C.dJf.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dJj.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dJk.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dJg(w.c,u))
v.bG(0,B.c_)}},
$S:0}
C.dJg.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dJl.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).K(!0)},
$S:0}
C.dJp.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cyM(this.b,D.rI,C.ET(v,w.a.c))},
$S:0}
C.dJU.prototype={
$1(d){return d.as},
$S:z+1}
C.dJV.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.ir(this.b,w)},
$S:0}
C.dJW.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hMm(v)
return w.TK(v==null?null:v.a)},
$S:0}
C.dJX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hpJ(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcg(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.chr(new A.ap(u,t),v.gbc3(),new A.ap(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cxu:D.cw5
q=A.H(s?B.du:D.b1a,B.r,1)
p=A.m(22)
o=A.bU(0,A.b1(m,m,m,new C.b9p(s,m),B.as),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.am(B.V,m,B.a9,B.q,A.a([o,A.bU(0,A.tG(new A.L(n,n,n,n),new A.a4(u,t,new C.bag(l.d,v,l.f,w,new C.dJQ(l),l.gc20(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.brl(s,new C.dJR(l,e),new C.dJS(l,e),new C.dJT(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.h,m,m,new A.o(m,m,q,k,m,new A.a8(B.b4,B.ba,B.w,r,m,m),B.n),m,m,m,O.acp,m,m,m,m)},
$S:207}
C.dJQ.prototype={
$1(d){var w=this.a
w.n(new C.dJO(w,d))},
$S:2}
C.dJO.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.G(0,v)},
$S:0}
C.dJR.prototype={
$0(){var w=this.b
return this.a.b3W(1.25,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJS.prototype={
$0(){var w=this.b
return this.a.b3W(0.8,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dJT.prototype={
$0(){var w=this,v=w.b
return w.a.aNZ(new A.ap(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ap(w.c,w.d),w.e.gbc3())},
$S:0}
C.dJY.prototype={
$0(){var w=this.a
return w.n(new C.dJP(w))},
$S:0}
C.dJP.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dJc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fB(new A.fu(s.c)),$async$$0)
case 2:t.wK("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_2.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.bdY(u,C.h2J(v.c,u),new C.d_1(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+25}
C.d_1.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d_3.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhd(d.d,d.c,u.f.q(0,d.a),new C.d_0(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+26}
C.d_0.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.f9u.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.R(v)
return A.qD(new A.cR(new A.a3(v,new C.f9v(d),w.k("a3<1>")),new C.f9w(),w.k("cR<1,n>")))},
$S:z+22}
C.f9v.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.f9w.prototype={
$1(d){return d.a},
$S:z+7}
C.f9s.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.f9t.prototype={
$1(d){return d.b},
$S:z+7}
C.f9z.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.R(v)
return A.qD(new A.cR(new A.a3(v,new C.f9A(d),w.k("a3<1>")),new C.f9B(),w.k("cR<1,n>")))},
$S:z+22}
C.f9A.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.f9B.prototype={
$1(d){return d.a},
$S:z+7}
C.f9x.prototype={
$1(d){var w,v=A.eN([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.G(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+28}
C.f9y.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d_5.prototype={
$0(){return this.a},
$S:z+29}
C.d_m.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:262}
C.d_e.prototype={
$2(d,e){var w=this.a.ci(0,d,new C.d_f()),v=J.a6(w)
if(!v.q(w,e))v.G(w,e)},
$S:123}
C.d_f.prototype={
$0(){return A.a([],x.s)},
$S:508}
C.d_d.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eR(w,e)
return w===!0},
$S:330}
C.d_6.prototype={
$0(){return A.a([],x.u)},
$S:z+30}
C.d_c.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d_b.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.G(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.AB:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.G(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.AB:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1871}
C.d_7.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d_g.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.G(0,a9)
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
if(u){a8.G(0,s)
w.m(0,s,b0)
a7.e.m(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.AB:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.bd(w,new C.d_h(r)))w.push(r)}}B.d.bk(w,new C.d_i(a8))
B.d.aY(w,new C.d_j())
q=C.hpI(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.e1d],x.G))}a8=A.a([],x.s)
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
else a8.m(0,a9,new A.bk9(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.T(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.T(a5,a6))}}return a1},
$S:1872}
C.d_h.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d_i.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d_j.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.d_k.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gH(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bf(v,A.a2(v).k("bf<2>")).cI(0,0,B.pM)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gH(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:681}
C.d_l.prototype={
$1(d){return 16+d*156},
$S:250}
C.d_4.prototype={
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
t.m(0,d,new C.Ee(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Ee(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Ee(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ig(d,new A.v(e+t,w),s,s.length))}},
$S:193}
C.d_8.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFs(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:123}
C.d_9.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.d_a.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:557}
C.d_n.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:557}
C.d_o.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:388}
C.d_p.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:179}
C.d_q.prototype={
$1(d){return d>=0.5},
$S:138}
C.eUs.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hJ(A.aH(!1,v,!0,new A.a4(38,38,A.V(d,this.a.c?B.c:B.d3,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1874}
C.ew7.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.B(B.ni,A.aH(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.esD,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.K0,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ew6(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+33}
C.ew6.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dez.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dey.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mR,B.L,w,w)
return A.ei(A.a([A.bF(!1,B.de,w,w,!0,w,w,new C.dew(d),w,w),A.bF(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lL,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dex(d),w,w)],x.p),B.b5,B.Dp,w,u,D.bhm,w,D.bje,new A.b5(v,B.W),w,w)},
$S:19}
C.dew.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dex.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.deI.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.deJ.prototype={
$1(d){var w=this.a
return w.n(new C.deH(w,d))},
$S:z+34}
C.deH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deK.prototype={
$1(d){var w=null
return A.p8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deN.prototype={
$1(d){var w=this.a
return w.n(new C.deG(w,d))},
$S:32}
C.deG.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.deM.prototype={
$1(d){var w=null
return A.p8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+10}
C.deO.prototype={
$1(d){var w=this.a
return w.n(new C.deF(w,d))},
$S:32}
C.deF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.deP.prototype={
$0(){var w=this.a
return w.n(new C.deE(w))},
$S:0}
C.deE.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.deQ.prototype={
$0(){var w=this.a
return w.n(new C.deD(w))},
$S:0}
C.deD.prototype={
$0(){return++this.a.at},
$S:0}
C.deR.prototype={
$0(){var w=this.a
return w.n(new C.deC(w))},
$S:0}
C.deC.prototype={
$0(){return--this.a.ax},
$S:0}
C.deS.prototype={
$0(){var w=this.a
return w.n(new C.deB(w))},
$S:0}
C.deB.prototype={
$0(){return++this.a.ax},
$S:0}
C.deT.prototype={
$1(d){var w=this.a
return w.n(new C.deA(w,d))},
$S:9}
C.deA.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.deL.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.deU.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bU
else u=(q.c.a?B.dT:B.cg).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bm:B.bu
t=A.V(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bm:B.bu
return A.C(A.aD(!1,B.X,!0,r,A.aH(!1,o,!0,A.de(r,A.u(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b8,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jW,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.deV(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+36}
C.deV.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.df3.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.c2r.prototype={
$2(d,e){return new A.bq(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.c2y.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c2z.prototype={
$2(d,e){var w=J.b4(e,new C.c2x(),x.a)
w=A.z(w,w.$ti.k("ai.E"))
return new A.bq(d,w,x.d2)},
$S:z+38}
C.c2x.prototype={
$1(d){return d.ad()},
$S:z+12}
C.c2t.prototype={
$1(d){return C.ahP(A.Y(d,x.N,x.z))},
$S:z+8}
C.c2u.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c2v.prototype={
$1(d){return C.fKS(A.Y(d,x.N,x.z))},
$S:z+19}
C.c2w.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c2D.prototype={
$1(d){return new A.aCy(d.f.length,d.a,d.b)},
$S:z+40}
C.c2E.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:521}
C.c2A.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c2B.prototype={
$1(d){return d.cxL(C.ET(d,this.a))},
$S:z+41}
C.dK6.prototype={
$1(d){return C.tf(d,this.a.a.c)},
$S:z+2}
C.dK7.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dKb.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dKc.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dK3.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWc(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xh("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oz(r.c,r.e),$async$$0)
case 4:s.xh(p)
w=5
return A.b(s.I0(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dK4.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWc(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xh("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oz(r.c,r.e),$async$$0)
case 4:s.xh(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dK5.prototype={
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
break}if(q==null){o.xh("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xh("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xh("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I0(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a5(j)
o=r.a
if(o.c==null){w=1
break}o.xh(B.a.e0(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dKa.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWb(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xh("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).ct(A.eO(new C.dK9(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oz(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dK9.prototype={
$1(d){var w=this.b
return new C.Y2(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+42}
C.dK8.prototype={
$1(d){return D.f3R},
$S:z+43}
C.dKe.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKf.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dKd(w,d)
return new A.B(B.d6,new C.bak(this.b,d.c,d.a,w,null),null)},
$S:1875}
C.dKd.prototype={
$0(){return this.a.Vm(this.b.b)},
$S:0}
C.dJZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dK_.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dK0.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dK1.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dK2.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKg.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dl(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).K(s)
return}},
$S:184}
C.dwy.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+44}
C.dwz.prototype={
$0(){return B.d.gI(D.a_x)},
$S:z+45}
C.dwA.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b1(A.as(A.V(this.b.d,B.c.j(0.95),w,w,D.cDc,44),w,w,w),w,w,new C.bf4(u,t,v,w),B.as)},
$S:73}
C.foM.prototype={
$1(d){return A.p7(new C.foL(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:130}
C.foL.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.a9(0,B.G,B.x.j(r?0.35:0.08),B.tn,24)],x.V),o=r?B.dT:B.cg
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aR.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.bvC,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a_,B.a7,B.w,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aN:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.T,o,new A.B(E.adn,A.A(A.a([w,B.bd,A.C(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bm:B.bu,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.C(A.ig(!0,t,e,B.z,D.egi,new C.foK(this.b,s),20,B.acY,t,B.af,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.kh,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:122}
C.foK.prototype={
$2(d,e){var w=null,v=D.a_x[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dT:B.cg,B.r,1),q=A.a([new A.a9(0,B.G,B.x.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.C(new C.a3R(v.a,!0,w),1),n=s?B.j6:B.iz,m=A.d(v.b,w,1,B.Z,w,w,w,A.l(w,w,s?B.aN:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.X,!0,w,A.aH(!1,u,!0,A.er(A.bu(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.Z,w,w,w,A.l(w,w,s?B.bm:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.kU,w,w,w)],l),B.ah,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.foJ(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:76}
C.foJ.prototype={
$0(){A.a7(this.a,!1).K("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ca2.prototype={
$0(){return this.a.acK(this.b)},
$S:0}
C.foa.prototype={
$1(d){return D.f0C},
$S:z+46}
C.fvh.prototype={
$1(d){var w=this
return new C.ZK(w.a,w.b,w.c,w.d,null)},
$S:z+71}
C.foc.prototype={
$1(d){return new C.WH(this.a,null)},
$S:z+48}
C.fob.prototype={
$1(d){return D.f1B},
$S:z+49}
C.cSJ.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cSI(w,d))},
$S:32}
C.cSI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cSL.prototype={
$1(d){return this.a.IB()},
$S:2}
C.cSM.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSF.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cSG.prototype={
$1(d){return this.a.IB()},
$S:2}
C.cSH.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqg.prototype={
$0(){},
$S:0}
C.cqm.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqn.prototype={
$0(){return this.a.aJA(-1)},
$S:0}
C.cqo.prototype={
$1(d){return this.a.n(new C.cql())},
$S:2}
C.cql.prototype={
$0(){},
$S:0}
C.cqp.prototype={
$0(){return this.a.aJA(1)},
$S:0}
C.cqq.prototype={
$1(d){return this.a.n(new C.cqk())},
$S:2}
C.cqk.prototype={
$0(){},
$S:0}
C.cqr.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aR.j(0.2)
if(s)v=B.aR
else v=this.b.a?B.dT:B.cg
return A.tx(u,u,B.aW,r,u,new C.cqj(t,d),B.zI,s,w,u,new A.ay(v,1,B.r,-1),B.c6)},
$S:1876}
C.cqj.prototype={
$1(d){var w=this.a
return w.n(new C.cqh(w,this.b))},
$S:9}
C.cqh.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cqs.prototype={
$1(d){return this.a.n(new C.cqi())},
$S:2}
C.cqi.prototype={
$0(){},
$S:0}
C.cqt.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eTV.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).K(w)},
$S:2}
C.eTW.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eTX.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).K(w)},
$S:0}
C.eTT.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbs2()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b1(new A.B(D.bjd,new A.ep(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bra(p,v,this.b.a,u,t,r),r,r,B.as)},
$S:73}
C.eTU.prototype={
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
return A.aD(!1,B.X,!0,p,A.aH(!1,v,!0,A.er(D.dMf,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.d4(-1.2+t,-0.5),new A.d4(1.2-t,0.8),B.w,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
$S:125}
C.fn3.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eth.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.et8.prototype={
$0(){return this.a.e=!0},
$S:0}
C.et9.prototype={
$0(){return this.a.e=!1},
$S:0}
C.etf.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.eh(new C.ete(w,this.b),null)},
$S:21}
C.ete.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eB(w,u,new A.B(B.adh,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bu,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aa,C.fQw(new C.etb(r,e),r.a),B.aA,A.A(A.a([A.C(A.dU(B.de,new C.etc(d),w),1),B.aw,A.C(A.bJ(B.R8,new C.etd(r,d),A.bk(B.aR,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ah,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(t,B.W),w)},
$S:96}
C.etb.prototype={
$1(d){return this.b.$1(new C.eta(this.a,d))},
$S:32}
C.eta.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.etc.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etd.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).K(w)
return null},
$S:0}
C.etg.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QO(this.b)},
$S:0}
C.et3.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.d,x.Q)
w.push(this.b)
v.d=u.b5N(w)},
$S:0}
C.et7.prototype={
$1(d){return this.bes(d)},
bes(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Js(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.ir(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.et6.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.R(w).k("a3<1>")
w=A.z(new A.a3(w,new C.et5(this.b),v),v.k("E.E"))
u.d=t.b5N(w)},
$S:0}
C.et5.prototype={
$1(d){return d.a!==this.a.a},
$S:z+17}
C.eti.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.ir(this.b,w)},
$S:0}
C.etj.prototype={
$1(d){return this.a.bvX(d,this.b)},
$S:z+52}
C.et4.prototype={
$0(){return this.a.a74(this.b)},
$S:0}
C.fv9.prototype={
$1(d){return new C.aaV(this.a,this.b,this.c,null)},
$S:z+53}
C.etl.prototype={
$0(){return this.a.XQ(this.b)},
$S:0}
C.etm.prototype={
$0(){return this.a.Oa(this.b)},
$S:0}
C.etn.prototype={
$0(){return this.a.D3(this.b)},
$S:0}
C.eto.prototype={
$0(){return this.a.XR(this.b)},
$S:0}
C.etk.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.esZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.et_.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.et0.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.et2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.et1(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.et1.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.etL.prototype={
$2(d,e){return d+e.gvZ()},
$S:z+56}
C.etH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etI.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ets.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bw1,B.h,v,v,new A.o(B.aH.j(u?0.18:0.08),v,A.H(B.aH.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aN:B.aG
u=u?B.dT:B.cg
w=x.p
return A.eB(v,t,new A.B(B.wt,A.u(A.a([r,B.aS,q,B.P,p,B.d1,A.A(A.a([A.C(A.dU(B.mU,new C.etq(d),A.d9(v,v,v,v,v,v,v,v,v,o,v,v,B.eV,v,new A.b5(A.m(14),B.W),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.C(A.bJ(D.eUQ,new C.etr(d),A.bk(B.aH,v,v,v,v,v,B.eV,v,new A.b5(A.m(14),B.W),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cZ,v,new A.b5(s,B.W),v)},
$S:46}
C.etq.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.etr.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.etB.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.a9(0,B.G,B.x.j(k?0.35:0.08),B.fx,28)],x.V),g=k?D.cJg:B.ZZ,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eaZ,B.au,new A.bE(B.a_,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cp,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aE,B.w,g,m,m),B.n),m,m,m,m,E.adk,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bu,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.C(v.b_8(B.b0,B.iF,new C.ety(v,d),l,"Camera import","Scan QR"),1),B.aw,A.C(v.b_8(B.cA,M.x6,new C.etz(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bu,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aH.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aH.j(0.28),B.r,1)
o=A.p(m,D.bvr,B.h,m,m,new A.o(B.aH.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aN:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.C(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bu,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.br(!0,new A.B(B.uc,A.p(m,A.u(A.a([g,new A.B(B.adi,A.u(A.a([w,B.T,u,B.bv,t,B.T,A.aD(!1,B.X,!0,m,A.aH(!1,s,!0,A.p(m,A.A(A.a([o,B.bd,n,A.V(B.em,k?B.bm:B.bu,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.etA(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:33}
C.ety.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uA("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etz.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uA("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etA.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.M3(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.etw.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.a9(0,B.G,B.x.j(o?0.35:0.08),B.eI,24)],x.V),k=o?B.dT:B.cg
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bm:B.bu
u=A.bu(w,new A.a4(48,48,C.aMy(!0,A.m(12),48,P.Kz,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.Z,q,q,q,A.l(q,q,o?B.aN:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zy(v.gvZ())
s=x.p
r=this.a
return A.br(!0,new A.B(B.uc,A.p(q,A.u(A.a([B.T,k,new A.B(D.adf,A.A(A.a([u,B.bd,A.C(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bm:B.bu,q,q,q,q,q,q,q,q,12,q,q,B.a1,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zn,r.cbT(B.t_,B.aR,new C.etu(d),p,"QR code or backup file","Transfer project"),r.aXe(!0,B.e4,B.aH,new C.etv(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:33}
C.etu.prototype={
$0(){A.a7(this.a,!1).K("transfer")
return null},
$S:0}
C.etv.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
C.etx.prototype={
$1(d){return this.bet(d)},
bet(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Js(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uL(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+18}
C.etO.prototype={
$0(){var w=this.a
w.a.bl()
w.n(new C.etN(w))},
$S:0}
C.etN.prototype={
$0(){return this.a.r++},
$S:0}
C.etP.prototype={
$0(){var w=this.a
return w.n(new C.etM(w))},
$S:0}
C.etM.prototype={
$0(){return this.a.r++},
$S:0}
C.etp.prototype={
$0(){var w=this.a.c
w.toString
return A.ir(w,null)},
$S:0}
C.ett.prototype={
$0(){return this.a.c5q(this.b)},
$S:0}
C.etK.prototype={
$0(){var w=this.a
return w.n(new C.etJ(w,this.b))},
$S:0}
C.etJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etE.prototype={
$0(){return this.a.uA("scan")},
$S:0}
C.etF.prototype={
$0(){return this.a.uA("file")},
$S:0}
C.etG.prototype={
$1(d){return this.a.cbU(d,this.b)},
$S:z+57}
C.etD.prototype={
$0(){return this.a.D7(this.b)},
$S:0}
C.etC.prototype={
$0(){return this.a.Yj(this.b,this.c)},
$S:0}
C.cpI.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+58}
C.cpH.prototype={
$1(d){return d.ad()},
$S:z+59}
C.cpF.prototype={
$1(d){return C.h8u(A.Y(d,x.N,x.z))},
$S:z+60}
C.cpG.prototype={
$1(d){return d.a.length!==0},
$S:z+17}
C.f8O.prototype={
$1(d){return d.y===D.jY},
$S:z+2}
C.fvx.prototype={
$1(d){return C.bwT(d,this.a)},
$S:z+2}
C.f8_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bIp.prototype={
$1(d){return!d.as},
$S:z+1}
C.bIo.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bIl.prototype={
$1(d){return C.fKT(A.Y(d,x.N,x.z))},
$S:z+14}
C.bIm.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bIn.prototype={
$1(d){return J.k(d)},
$S:17}
C.f0d.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.eX8.prototype={
$1(d){return C.fBJ(A.Y(d,x.N,x.z))},
$S:z+64}
C.eX9.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eXa.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+20}
C.fo1.prototype={
$1(d){return J.k(d)},
$S:17}
C.fo2.prototype={
$1(d){return d.a},
$S:z+66}
C.fo3.prototype={
$1(d){return d.length!==0},
$S:3}
C.fo4.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.fo5.prototype={
$1(d){return d.QO(null).ad()},
$S:z+67}
C.fvv.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.f9f.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fbn.prototype={
$1(d){return C.ahP(A.Y(d,x.N,x.z))},
$S:z+8}
C.fbo.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fbp.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fbq.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fbr.prototype={
$1(d){return C.tf(d,this.a)},
$S:z+2}
C.fnP.prototype={
$1(d){return C.tf(d,this.a)},
$S:z+2}
C.fvq.prototype={
$1(d){return C.ahP(A.Y(d,x.N,x.z))},
$S:z+8}
C.fvr.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fvs.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f8X.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.f8Y.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fvB.prototype={
$1(d){return!d.as},
$S:z+1}
C.f8y.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.f8z.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.f8A.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+21}
C.fvi.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fc8.prototype={
$1(d){return d.Q},
$S:z+69}
C.fnL.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fbk.prototype={
$1(d){return C.ahP(A.Y(d,x.N,x.z))},
$S:z+8}
C.fbl.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fbm.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fnJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eXE.prototype={
$1(d){return d.length!==0},
$S:3}
C.eXF.prototype={
$1(d){return C.fKT(A.Y(d,x.N,x.z))},
$S:z+14}
C.eXG.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eXH.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eXI.prototype={
$1(d){return d.length!==0},
$S:3}
C.eXV.prototype={
$2(d,e){return d.eQ(new C.eXW(e))},
$S:1877}
C.eXW.prototype={
$1(d){$.ak.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c3},
$S:1878}
C.eXS.prototype={
$1(d){return C.hu9(d,this.a)},
$S:z+70}
C.eXT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eXU.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f0S.prototype={
$1(d){return d.a},
$S:z+47}
C.f0T.prototype={
$1(d){return d.length!==0},
$S:3}
C.f0U.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f2T.prototype={
$1(d){return d.ad()},
$S:z+5}
C.f7m.prototype={
$1(d){return C.fVV(d,C.ET(d,this.a))},
$S:z+5}
C.f7n.prototype={
$1(d){return C.fVW(d,C.ET(d,this.a))},
$S:z+5};(function aliases(){var w=C.aHM.prototype
w.bop=w.p
w=C.aJS.prototype
w.bqH=w.p
w=C.aJT.prototype
w.bqI=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azr.prototype,"gc8W","c8X",23)
var s
w(s=C.awy.prototype,"gc26","c27",27)
v(s,"gaHS","LE",0)
v(s,"gcgN","DA",0)
v(s,"gbDu","Mh",0)
v(s,"gcud","xi",0)
v(s,"gcaS","YZ",0)
v(s,"gbDV","UQ",0)
w(s,"gbIm","bIn",39)
v(s,"gbtD","yL",0)
v(C.awz.prototype,"gcu9","DZ",0)
v(s=C.aA1.prototype,"gacm","uM",0)
v(s,"gc4I","Yb",0)
v(s,"gaLQ","Gu",0)
v(s=C.azZ.prototype,"gcqw","a0_",0)
v(s,"gacm","uM",0)
v(s,"gceX","ZF",0)
v(s,"gc5D","Yo",0)
w(s,"gc20","c21",51)
v(s,"gbDM","Gz",0)
v(s,"gcrp","crq",3)
v(s,"gbUA","Wp",0)
w(s,"gc0x","c0y",37)
v(s,"gc4s","c4t",3)
v(s=C.ayq.prototype,"gbZq","NJ",0)
v(s,"gbZs","bZt",3)
v(s,"gbAu","a6I",0)
v(s=C.aA0.prototype,"gbGV","Vi",0)
v(s,"gbR3","VU",0)
v(s,"gcl2","a_s",0)
v(s,"gchm","a_4",0)
v(C.aA_.prototype,"gch4","ae6",0)
v(C.apl.prototype,"gc0v","XP",0)
v(C.avl.prototype,"ga_K","IB",3)
v(C.avk.prototype,"ga_K","IB",3)
v(C.au6.prototype,"ga_K","IB",3)
v(s=C.aBq.prototype,"gaWD","OF",0)
v(s,"gbsv","TE",0)
v(s,"gc5r","c5s",3)
w(C.aBp.prototype,"gc1l","c1m",54)
u(C.aBr.prototype,"gaLK",0,0,null,["$1","$0"],["Gt","bBK"],55,0,0)
t(C,"h1Z","hDk",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.alm,C.mJ,C.FV,C.ac5,C.NO,C.tw,C.Ig,C.Ee,C.bai,C.aFs,C.amw,C.d_r,C.le,C.aPp,C.aPo,C.aNt,C.t2,C.qo,C.l0,C.hP,C.kk,C.aDs])
u(A.i2,[C.ffK,C.ffJ,C.ffL,C.foF,C.f6k,C.f6l,C.f6q,C.fds,C.fdr,C.fdq,C.bWX,C.fpa,C.fp2,C.fpe,C.f94,C.dxe,C.dx9,C.dxa,C.dwN,C.dwJ,C.dxt,C.dxu,C.dxn,C.dxo,C.dxv,C.dxw,C.fbh,C.fbi,C.fnN,C.fvp,C.f8W,C.foi,C.cZE,C.cZ2,C.cZ9,C.cZq,C.cZb,C.cZ4,C.cZf,C.cZg,C.cZe,C.cZv,C.cZu,C.d05,C.d06,C.d07,C.cZS,C.cZX,C.cZW,C.cyv,C.cyx,C.cRX,C.cSl,C.cSm,C.cSp,C.cSr,C.cSs,C.cSt,C.cSv,C.cSw,C.dKk,C.dJK,C.dJF,C.dJd,C.dJq,C.dJt,C.dJC,C.dJ1,C.dJN,C.dJH,C.dJ3,C.dJ4,C.dJ5,C.dJa,C.dJ8,C.dJ7,C.dJn,C.dJo,C.dJi,C.dJU,C.dJQ,C.d_2,C.d_3,C.f9u,C.f9v,C.f9w,C.f9s,C.f9t,C.f9z,C.f9A,C.f9B,C.f9x,C.f9y,C.d_m,C.d_c,C.d_7,C.d_h,C.d_i,C.d_l,C.d_9,C.d_o,C.d_p,C.d_q,C.eUs,C.ew7,C.dey,C.deI,C.deJ,C.deK,C.deN,C.deM,C.deO,C.deT,C.deU,C.c2y,C.c2x,C.c2t,C.c2u,C.c2v,C.c2w,C.c2D,C.c2A,C.c2B,C.dK6,C.dK9,C.dK8,C.dKf,C.dKg,C.dwy,C.foM,C.foa,C.fvh,C.foc,C.fob,C.cSK,C.cSL,C.cSG,C.cqo,C.cqq,C.cqr,C.cqj,C.cqs,C.eTV,C.fn3,C.etf,C.etb,C.et7,C.et5,C.etj,C.fv9,C.ets,C.etB,C.etw,C.etx,C.etG,C.cpH,C.cpF,C.cpG,C.f8O,C.fvx,C.f8_,C.bIp,C.bIo,C.bIl,C.bIm,C.bIn,C.eX8,C.eX9,C.fo1,C.fo2,C.fo3,C.fo4,C.fo5,C.fvv,C.f9f,C.fbn,C.fbo,C.fbq,C.fbr,C.fnP,C.fvq,C.fvr,C.fvs,C.f8X,C.f8Y,C.fvB,C.f8y,C.f8z,C.fvi,C.fc8,C.fnL,C.fbk,C.fbl,C.fnJ,C.eXE,C.eXF,C.eXG,C.eXH,C.eXI,C.eXW,C.eXS,C.eXT,C.f0S,C.f0T,C.f2T,C.f7m,C.f7n])
u(A.ar,[C.aUK,C.Wm,C.b65,C.bag,C.bdY,C.brl,C.bhd,C.aaz,C.bdX,C.aay,C.bdW,C.ayr,C.aEv,C.aaA,C.I5,C.bah,C.a9R,C.baf,C.bak,C.aUI,C.apl,C.aaV])
u(A.n4,[C.b6H,C.b7S,C.b7J,C.aDn,C.bd0,C.baj,C.b9p,C.bf4,C.bra])
u(A.jk,[C.fp7,C.fp8,C.fp9,C.fp0,C.fp1,C.fpc,C.fpd,C.dxq,C.dxc,C.dxf,C.dwU,C.dwV,C.dwW,C.dwT,C.dx0,C.dwS,C.dx1,C.dx2,C.dwR,C.dx3,C.dwQ,C.dx4,C.dwP,C.dx5,C.dwH,C.dwI,C.dwO,C.dx6,C.dwM,C.dx7,C.dwL,C.dwX,C.dwK,C.dwY,C.dwG,C.dwZ,C.dx_,C.dxr,C.dxs,C.dxg,C.dxh,C.dxi,C.dxj,C.dxk,C.dxl,C.dxm,C.dxy,C.dxp,C.cZD,C.cZs,C.cZp,C.cZ3,C.cZt,C.cZ7,C.cZ8,C.cZa,C.cZr,C.cZc,C.cZA,C.cZm,C.cZl,C.cZn,C.cZo,C.cZh,C.cZj,C.cZk,C.cZd,C.cZw,C.cZz,C.cZ5,C.cZ6,C.d04,C.d03,C.d02,C.d01,C.d08,C.d00,C.d09,C.cZT,C.cZU,C.cZV,C.cZY,C.cZR,C.cZQ,C.cyw,C.cRW,C.cS8,C.cS7,C.cSn,C.cS6,C.cSo,C.cS5,C.cS4,C.cSq,C.cS3,C.cSg,C.cSf,C.cSx,C.dKj,C.dKi,C.dKl,C.dKm,C.dKn,C.dKh,C.dKp,C.dKo,C.dJI,C.dJJ,C.dJL,C.dJe,C.dJs,C.dJr,C.dJu,C.dJE,C.dJx,C.dJw,C.dJy,C.dJv,C.dJz,C.dJA,C.dJD,C.dJ2,C.dJG,C.dJ6,C.dJ9,C.dJb,C.dJM,C.dJh,C.dJf,C.dJj,C.dJk,C.dJg,C.dJl,C.dJp,C.dJV,C.dJW,C.dJO,C.dJR,C.dJS,C.dJT,C.dJY,C.dJP,C.dJc,C.d_1,C.d_0,C.d_5,C.d_f,C.d_6,C.ew6,C.dez,C.dew,C.dex,C.deH,C.deG,C.deF,C.deP,C.deE,C.deQ,C.deD,C.deR,C.deC,C.deS,C.deB,C.deA,C.deL,C.deV,C.df3,C.dK7,C.dKb,C.dKc,C.dK3,C.dK4,C.dK5,C.dKa,C.dKe,C.dKd,C.dJZ,C.dK_,C.dK0,C.dK1,C.dK2,C.dwz,C.foJ,C.ca2,C.cSJ,C.cSI,C.cSM,C.cSF,C.cSH,C.cqg,C.cqm,C.cqn,C.cql,C.cqp,C.cqk,C.cqh,C.cqi,C.cqt,C.eTW,C.eTX,C.eth,C.et8,C.et9,C.eta,C.etc,C.etd,C.etg,C.et3,C.et6,C.eti,C.et4,C.etl,C.etm,C.etn,C.eto,C.etk,C.esZ,C.et_,C.et0,C.et2,C.et1,C.etH,C.etI,C.etq,C.etr,C.ety,C.etz,C.etA,C.etu,C.etv,C.etO,C.etN,C.etP,C.etM,C.etp,C.ett,C.etK,C.etJ,C.etE,C.etF,C.etD,C.etC])
u(A.ae,[C.alt,C.X4,C.X8,C.X6,C.WF,C.amz,C.amt,C.XI,C.amx,C.Y2,C.Y3,C.a3R,C.WH,C.WG,C.Wd,C.ZK,C.E2,C.au_,C.apk,C.ape,C.apj,C.Mb])
u(A.ag,[C.azr,C.awy,C.bay,C.awz,C.b7Q,C.aA1,C.azZ,C.ayq,C.aA0,C.aA_,C.bfm,C.aHM,C.avl,C.avk,C.au6,C.brd,C.aJS,C.aJT,C.aBq,C.bgH,C.aBp,C.bsW])
u(A.kw,[C.dxb,C.dxd,C.dx8,C.dxx,C.fbj,C.bIk,C.cZC,C.cZB,C.cZi,C.cZx,C.cZy,C.cZZ,C.dJB,C.dJm,C.dJX,C.d_e,C.d_d,C.d_b,C.d_g,C.d_j,C.d_k,C.d_4,C.d_8,C.d_a,C.d_n,C.c2r,C.c2z,C.c2E,C.dwA,C.foL,C.foK,C.eTT,C.eTU,C.ete,C.etL,C.cpI,C.f0d,C.eXa,C.fbp,C.f8A,C.fbm,C.eXV,C.eXU,C.f0U])
t(C.bf5,C.aHM)
u(A.ma,[C.a8V,C.aG9,C.FW,C.ahO,C.cpJ,C.cpK])
t(C.brb,C.aJS)
t(C.brc,C.aJT)
t(C.aBr,C.bsW)
t(C.b4A,A.b4p)
t(C.bre,A.a3w)
t(C.b4z,C.bre)
w(C.aHM,A.eJ)
w(C.aJS,A.ca)
w(C.aJT,A.ca)
v(C.bsW,A.eu)
v(C.bre,A.iP)})()
A.kc(b.typeUniverse,JSON.parse('{"aUK":{"ar":[],"r":[]},"b6H":{"az":[]},"alt":{"ae":[],"r":[]},"azr":{"ag":["alt"]},"X4":{"ae":[],"r":[]},"X8":{"ae":[],"r":[]},"X6":{"ae":[],"r":[]},"WF":{"ae":[],"r":[]},"awy":{"ag":["X4"]},"bay":{"ag":["X8"]},"awz":{"ag":["X6"]},"Wm":{"ar":[],"r":[]},"b7S":{"az":[]},"b7J":{"az":[]},"b7Q":{"ag":["WF"]},"aDn":{"az":[]},"bd0":{"az":[]},"b65":{"ar":[],"r":[]},"amz":{"ae":[],"r":[]},"amt":{"ae":[],"r":[]},"XI":{"ae":[],"r":[]},"aaA":{"ar":[],"r":[]},"aA1":{"ag":["amz"]},"azZ":{"ag":["amt"]},"bag":{"ar":[],"r":[]},"baj":{"az":[]},"bdY":{"ar":[],"r":[]},"b9p":{"az":[]},"brl":{"ar":[],"r":[]},"bhd":{"ar":[],"r":[]},"ayq":{"ag":["XI"]},"aaz":{"ar":[],"r":[]},"bdX":{"ar":[],"r":[]},"aay":{"ar":[],"r":[]},"bdW":{"ar":[],"r":[]},"ayr":{"ar":[],"r":[]},"aEv":{"ar":[],"r":[]},"I5":{"ar":[],"r":[]},"amx":{"ae":[],"r":[]},"Y2":{"ae":[],"r":[]},"Y3":{"ae":[],"r":[]},"aA0":{"ag":["amx"]},"bah":{"ar":[],"r":[]},"a9R":{"ar":[],"r":[]},"baf":{"ar":[],"r":[]},"bak":{"ar":[],"r":[]},"aA_":{"ag":["Y2"]},"bfm":{"ag":["Y3"]},"aUI":{"ar":[],"r":[]},"a3R":{"ae":[],"r":[]},"bf5":{"ag":["a3R"]},"bf4":{"az":[]},"apl":{"ar":[],"r":[]},"WH":{"ae":[],"r":[]},"WG":{"ae":[],"r":[]},"Wd":{"ae":[],"r":[]},"ZK":{"ae":[],"r":[]},"avl":{"ag":["WH"]},"avk":{"ag":["WG"]},"au6":{"ag":["Wd"]},"brd":{"ag":["ZK"]},"E2":{"ae":[],"r":[]},"au_":{"ae":[],"r":[]},"brb":{"ag":["E2"]},"brc":{"ag":["au_"]},"bra":{"az":[]},"apk":{"ae":[],"r":[]},"aBq":{"ag":["apk"]},"aaV":{"ar":[],"r":[]},"ape":{"ae":[],"r":[]},"apj":{"ae":[],"r":[]},"bgH":{"ag":["ape"]},"aBp":{"ag":["apj"]},"Mb":{"ae":[],"r":[]},"aBr":{"ag":["Mb"],"eu":[]},"b4z":{"iP":[],"f5":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aA
return{e2:w("aNt"),Q:w("qo"),w:w("bt<n,n>"),c5:w("aPo"),dY:w("aPp"),d:w("eq<n?>"),e:w("FV"),B:w("mJ"),P:w("hP"),k:w("kk"),x:w("au<~>"),f5:w("M<afK>"),V:w("M<a9>"),t:w("M<qo>"),O:w("M<x>"),ac:w("M<eq<n?>>"),I:w("M<mJ>"),u:w("M<hP>"),_:w("M<kk>"),cl:w("M<au<al<a0<n,@>>>>"),R:w("M<mM>"),cq:w("M<al<+(P,P)>>"),ez:w("M<a0<n,aC>>"),gE:w("M<a0<n,n>>"),c7:w("M<a0<n,@>>"),fD:w("M<m0>"),bp:w("M<nO>"),g:w("M<v>"),v:w("M<hw>"),L:w("M<+(n,n)>"),G:w("M<+(P,P)>"),bF:w("M<+count,id,name(G,n,n)>"),A:w("M<cI>"),s:w("M<n>"),aS:w("M<j_>"),p:w("M<r>"),C:w("M<f5>"),D:w("M<l0>"),fp:w("M<NO>"),M:w("M<Ig>"),gZ:w("M<aDs>"),Y:w("M<ac5>"),E:w("M<aFs>"),F:w("M<P>"),dC:w("M<G>"),dS:w("M<az?>"),d4:w("M<n?>"),J:w("cn<ag<ae>>"),b:w("al<mJ>"),do:w("al<hP>"),r:w("al<kk>"),U:w("al<a0<n,@>>"),gk:w("al<+(n,n)>"),bC:w("al<+count,id,name(G,n,n)>"),h:w("al<n>"),c:w("al<l0>"),j:w("al<@>"),fK:w("bq<n,n>"),d2:w("bq<n,al<a0<n,@>>>"),a:w("a0<n,@>"),f:w("a0<@,@>"),gv:w("I<n,FX>"),n:w("iB"),g2:w("qH"),bV:w("alm"),fL:w("cr"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(P,al<hP>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bm<P>"),gc:w("dz"),b4:w("cv<G>"),W:w("k0<n>"),l:w("r"),cM:w("f5"),i:w("l0"),cc:w("Ee"),bw:w("aay<n?>"),cy:w("Ii"),q:w("mw"),y:w("S"),gR:w("P"),z:w("@"),S:w("G"),eK:w("al<kk>?"),m:w("amw?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,S)?"),Z:w("q1?"),T:w("n?"),aD:w("dz?"),o:w("l0?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aPa=new A.bx(B.fU,B.bB,B.fU,B.bB)
D.a6i=new A.bx(B.fU,B.jJ,B.fU,B.jJ)
D.aPm=new A.bx(B.jK,B.bB,B.bB,B.bB)
D.aPq=new A.ay(B.cW,1.4,B.r,-1)
D.aPA=new A.ay(B.al,1,B.r,-1)
D.aQV=new A.aV(0,1/0,64,1/0)
D.aQY=new A.aV(0,84,0,1/0)
D.asf=w([B.lN,B.q5,B.c],x.O)
D.bFE=new A.a8(B.ax,B.aE,B.w,D.asf,null,null)
D.aRL=new A.o(null,null,null,null,null,D.bFE,B.n)
D.cIN=w([B.aR,B.bU],x.O)
D.bHB=new A.a8(B.b4,B.ba,B.w,D.cIN,null,null)
D.aS1=new A.o(null,null,null,null,null,D.bHB,B.n)
D.aXQ=new A.f9(null,null,null,null,null,E.iQ,null,null,null,null)
D.a7C=new A.cw(B.B,null,null,D.aXQ,null)
D.jv=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eqI=new A.F(!0,D.jv,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIG=new A.w("No books on the shelf yet.",null,D.eqI,null,null,null,null,null,null,null,null,null)
D.dMg=new A.B(B.nk,D.eIG,null)
D.aWt=new A.cw(B.B,null,null,D.dMg,null)
D.aXh=new A.cw(B.B,null,null,V.SR,null)
D.aZ9=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZx=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.b09=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b0X=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b1a=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9z=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b4y=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b4S=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.IQ=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b6c=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b88=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.ab2=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eDG=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bcd=new A.eq(null,D.eDG,B.eR,null,x.d)
D.eLD=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bcf=new A.eq(null,D.eLD,B.eR,null,x.d)
D.bcN=new A.b7(38e5)
D.bdy=new A.i3(0,10,0,10)
D.bdQ=new A.i3(0,4,0,4)
D.be6=new A.L(10,10,14,10)
D.beg=new A.i3(10,4,10,4)
D.bep=new A.i3(10,8,10,8)
D.beq=new A.L(10,8,8,8)
D.beS=new A.L(12,6,12,2)
D.bf9=new A.L(14,10,6,6)
D.bfd=new A.L(14,12,14,8)
D.bfg=new A.L(14,12,8,14)
D.bfk=new A.i3(14,14,14,14)
D.bfY=new A.L(16,2,16,10)
D.bg7=new A.L(16,6,16,30)
D.bg9=new A.L(16,6,16,8)
D.adf=new A.L(18,16,18,8)
D.bgK=new A.L(18,20,18,22)
D.adj=new A.L(18,24,18,24)
D.bgQ=new A.L(18,30,18,30)
D.bh7=new A.L(20,10,12,20)
D.bhk=new A.L(20,18,16,18)
D.bhm=new A.L(20,18,20,6)
D.bia=new A.L(24,32,24,28)
D.bib=new A.L(24,36,24,32)
D.bid=new A.L(26,26,24,14)
D.bir=new A.L(2,4,2,8)
D.biv=new A.L(30,0,30,0)
D.biG=new A.L(38,22,22,22)
D.adA=new A.L(40,24,24,24)
D.biI=new A.i3(40,40,40,40)
D.biK=new A.L(46,30,30,30)
D.adD=new A.L(4,0,0,8)
D.bj9=new A.L(56,40,40,40)
D.bjd=new A.L(1.25,1.25,1.25,1.25)
D.bje=new A.L(60,0,60,0)
D.bjs=new A.i3(7,3,7,3)
D.bjT=new A.L(8,9,8,9)
D.bjX=new A.L(5,1.5,5,1.5)
D.bk6=new A.L(6,2.5,6,2.5)
D.eWH=new A.w("Signature",null,B.mS,null,null,null,null,null,null,null,null,null)
D.bko=new A.bG(1,B.bp,D.eWH,null)
D.eU1=new A.w("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bl5=new A.bG(1,B.bp,D.eU1,null)
D.exF=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVT=new A.w("Worksheets",null,D.exF,null,null,null,null,null,null,null,null,null)
D.exN=new A.F(!0,E.a8a,null,null,null,null,13,B.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUO=new A.w("Track your project spending",null,D.exN,null,null,null,null,null,null,null,null,null)
D.cBw=w([D.eVT,B.au,D.eUO],x.p)
D.baw=new A.fs(B.af,B.e,B.j,B.F,null,B.p,null,0,D.cBw,null)
D.bla=new A.bG(1,B.bp,D.baw,null)
D.etb=new A.F(!0,E.iQ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCT=new A.w("FAMILY LIBRARY",null,D.etb,null,null,null,null,null,null,null,null,null)
D.blo=new A.bG(1,B.bp,D.eCT,null)
D.Ke=new C.FV("leather","","",0,"gold",25,"middle","double","leather","",!0)
D.Wj=new C.FW(0,"male")
D.aet=new C.FW(1,"female")
D.wB=new C.FW(2,"unknown")
D.rI=new C.ahO(0,"owner")
D.Kf=new C.ahO(1,"editor")
D.jY=new C.ahO(2,"viewer")
D.afd=new A.a_(61199,"MaterialIcons",!1)
D.bnG=new A.a_(61504,"MaterialIcons",!1)
D.bnH=new A.a_(61505,"MaterialIcons",!1)
D.bnJ=new A.a_(61587,"MaterialIcons",!1)
D.bnP=new A.a_(61890,"MaterialIcons",!1)
D.boK=new A.a_(63034,"MaterialIcons",!0)
D.bpB=new A.a_(63429,"MaterialIcons",!1)
D.ahk=new A.a_(984520,"MaterialIcons",!1)
D.bof=new A.a_(62776,"MaterialIcons",!1)
D.brX=new A.ac(D.bof,26,B.aW,null,null,null)
D.bmF=new A.a_(57648,"MaterialIcons",!1)
D.bse=new A.ac(D.bmF,14,B.c,null,null,null)
D.bsw=new A.ac(B.DZ,17,null,null,null,null)
D.bsY=new A.ac(B.cu,17,D.jv,null,null,null)
D.bt2=new A.ac(E.X5,null,null,null,null,null)
D.bt5=new A.ac(B.jf,18,E.iQ,null,null,null)
D.WP=new A.a_(62044,"MaterialIcons",!1)
D.btb=new A.ac(D.WP,null,B.aR,null,null,null)
D.bu1=new A.ac(B.dN,16,null,null,null,null)
D.bu8=new A.ac(D.WP,32,B.aR,null,null,null)
D.bnt=new A.a_(61201,"MaterialIcons",!1)
D.buq=new A.ac(D.bnt,18,B.cW,null,null,null)
D.bvr=new A.ac(B.KQ,22,B.aH,null,null,null)
D.bvC=new A.ac(B.dN,22,B.aW,null,null,null)
D.bvN=new A.ac(N.WU,22,B.c,null,null,null)
D.bvS=new A.ac(B.rS,52,B.c,null,null,null)
D.bw1=new A.ac(B.KQ,30,B.aH,null,null,null)
D.ahV=new A.ac(B.t_,22,B.c,null,null,null)
D.bwt=new A.ac(B.dN,17,null,null,null,null)
D.bwM=new A.ac(B.ux,26,B.cW,null,null,null)
D.bxv=new A.ac(B.Xi,16,null,null,null,null)
D.byb=new A.ac(B.rS,24,B.c,null,null,null)
D.byg=new A.ac(B.KE,20,B.qx,null,null,null)
D.byl=new A.ac(B.DW,null,B.bU,null,null,null)
D.bys=new A.ac(B.jf,18,B.c,null,null,null)
D.bzO=new A.ac(B.e4,16,B.al,null,null,null)
D.bzZ=new A.ac(D.WP,20,B.aR,null,null,null)
D.aim=new A.ac(B.hs,20,null,null,null,null)
D.bAu=new A.ac(B.cu,18,D.jv,null,null,null)
D.bAM=new A.ac(B.wY,28,B.c,null,null,null)
D.bAU=new A.ac(B.Kv,null,B.fI,null,null,null)
D.bBd=new A.ac(B.wY,24,B.c,null,null,null)
D.bBE=new A.ac(B.rS,null,B.aR,null,null,null)
D.bBF=new A.ac(B.jC,20,B.cW,null,null,null)
D.bBX=new A.ac(B.DZ,16,null,null,null,null)
D.bDu=new A.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.et,!0,null,null,null,null)
D.cPs=w([B.bo,B.aR,B.eT,B.aW],x.O)
D.bEf=new A.a8(B.ax,B.aE,B.w,D.cPs,null,null)
D.b5j=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.b9I=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cyE=w([D.b5j,D.b9I],x.O)
D.bEq=new A.a8(B.b4,B.ba,B.w,D.cyE,null,null)
D.cKp=w([B.eO,B.ff,B.eT],x.O)
D.bEt=new A.a8(B.ax,B.aE,B.w,D.cKp,null,null)
D.aa4=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZy=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cAv=w([D.aa4,D.aZy],x.O)
D.bEZ=new A.a8(B.b4,B.ba,B.w,D.cAv,null,null)
D.b1j=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.cPb=w([D.b1j,D.aa4],x.O)
D.ajh=new A.a8(B.ax,B.aE,B.w,D.cPb,null,null)
D.a9e=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b3a=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cJF=w([D.a9e,D.b3a],x.O)
D.bFO=new A.a8(B.a_,B.a7,B.w,D.cJF,null,null)
D.cUZ=w([B.bR,B.mo],x.O)
D.bFQ=new A.a8(B.b4,B.ba,B.w,D.cUZ,null,null)
D.b5f=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b6E=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cVL=w([D.b5f,D.jv,D.jv,D.b6E],x.O)
D.cXK=w([0,0.07,0.9,1],x.F)
D.bGh=new A.a8(B.a_,B.a7,B.w,D.cVL,D.cXK,null)
D.bGr=new A.a8(B.ax,B.aE,B.w,B.O7,null,null)
D.cUB=w([B.aW,B.aR,B.bU],x.O)
D.bHn=new A.a8(B.ax,B.aE,B.w,D.cUB,null,null)
D.c1D=w([B.bo,B.aW,B.eO],x.O)
D.c1J=w([B.bD,B.az,B.jS],x.O)
D.c1L=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b48=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c7Q=w([D.b48,E.a9P],x.O)
D.dJ4=new A.v(1,2)
D.ecL=new A.cI(B.aV,D.dJ4,3)
D.ap3=w([D.ecL],x.A)
D.cf3=w([B.fY,B.cf,B.fo],x.O)
D.chG=w([B.bP,B.bA,B.bj],x.O)
D.cvs=w([B.bU,B.bg],x.O)
D.aZ0=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b57=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cw5=w([D.aZ0,D.b57],x.O)
D.b10=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cxu=w([D.b10,B.dc],x.O)
D.cyR=w([B.bb,B.iw,B.nN],x.O)
D.cze=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZu=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b2x=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cXH=w([D.a9e,D.aZu,D.b2x],x.O)
D.blL=new C.tw("leather","Leather",D.cXH,"vintage")
D.cFK=w([B.dH,B.IK,E.a8L],x.O)
D.blS=new C.tw("midnight","Midnight",D.cFK,"starry")
D.cyS=w([B.fn,B.eM,B.kn],x.O)
D.blR=new C.tw("forest","Forest",D.cyS,"story")
D.cZi=w([B.f5,B.fp,B.kN],x.O)
D.blO=new C.tw("burgundy","Burgundy",D.cZi,"royal")
D.chh=w([B.az,B.q1,B.n2],x.O)
D.blP=new C.tw("royal","Royal",D.chh,"royal")
D.cB4=w([B.bA,B.d3,L.CV],x.O)
D.blM=new C.tw("charcoal","Charcoal",D.cB4,"geo")
D.cXN=w([B.cl,B.dM,B.vY],x.O)
D.blQ=new C.tw("sunset","Sunset",D.cXN,"sunset")
D.cYk=w([B.iw,B.CR,B.IC],x.O)
D.blN=new C.tw("ocean","Ocean",D.cYk,"band")
D.xr=w([D.blL,D.blS,D.blR,D.blO,D.blP,D.blM,D.blQ,D.blN],A.aA("M<tw>"))
D.cBX=w([B.ak,B.aI,B.M],x.O)
D.cD2=w([B.fp,B.eM,B.dH,B.hS,B.tZ,B.cW,B.kO,B.fr,B.dC],x.O)
D.cD3=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ecM=new A.cI(B.dt,B.dG,8)
D.cDc=w([D.ecM],x.A)
D.cEa=w([B.cd,B.dM,B.lf],x.O)
D.cEC=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cFG=w([B.cd,B.hl],x.O)
D.cHy=w([B.aM,B.z7,B.tS],x.O)
D.cIm=w([B.bJ,B.cN,B.dD,B.aM],x.O)
D.cIO=w([B.km,B.cl,B.tV],x.O)
D.cJg=w([B.eO,B.cW],x.O)
D.cJK=w([B.dh,B.ha,B.hR],x.O)
D.cJV=w([B.b3,B.bg,B.dH],x.O)
D.cKm=w([B.eZ,B.dl,B.eM],x.O)
D.cKC=w([B.e9,B.dH,B.IK],x.O)
D.cLP=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_3=w(["leather","linen","plain","stars","rays"],x.s)
D.brD=new A.a_(985219,"MaterialIcons",!1)
D.brc=new A.a_(983781,"MaterialIcons",!1)
D.ary=w([B.afC,B.hJ,B.lW,B.hL,D.brD,B.Ef,B.p0,D.brc,L.ah8,B.x_,B.p2,B.lV],A.aA("M<a_>"))
D.a_8=w(["double","single","corners","none"],x.s)
D.cOj=w([B.fK,B.bu,B.fr],x.O)
D.cOw=w([],x.t)
D.AB=w([],x.u)
D.cQx=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cSA=w([B.b_,B.ha,B.hS],x.O)
D.cTE=w([B.cV,B.nQ,B.TV],x.O)
D.cTR=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.daV=new C.le("construction","Construction","Jobsite & builds",B.E7)
D.db1=new C.le("house","Home Build","Houses & rooms",B.ur)
D.daS=new C.le("grocery","Grocery","Store & pantry",B.XR)
D.daR=new C.le("calculator","Calculations","Math & estimates",B.E2)
D.db_=new C.le("lumber","Materials","Lumber & supplies",B.L4)
D.daO=new C.le("kitchen","Kitchen","Remodel & meals",Q.agk)
D.bra=new A.a_(983756,"MaterialIcons",!1)
D.daT=new C.le("landscape","Landscaping","Yard & garden",D.bra)
D.daN=new C.le("plumbing","Plumbing","Pipes & water",B.uC)
D.db2=new C.le("electrical","Electrical","Wiring & power",B.he)
D.daL=new C.le("store","Retail Shop","Daily business",B.kw)
D.daM=new C.le("paint_remodel","Paint & Remodel","Colors & walls",Q.ag9)
D.bqv=new A.a_(983311,"MaterialIcons",!1)
D.daZ=new C.le("roofing","Roofing","Roofs & exteriors",D.bqv)
D.brn=new A.a_(983986,"MaterialIcons",!1)
D.daK=new C.le("warehouse","Warehouse","Storage & stock",D.brn)
D.daX=new C.le("vehicles","Vehicles","Fleet & transport",B.Eg)
D.boi=new A.a_(62785,"MaterialIcons",!1)
D.daQ=new C.le("farm","Farm","Crops & livestock",D.boi)
D.daP=new C.le("restaurant","Restaurant","Food & catering",B.rY)
D.daW=new C.le("tools","Tools","Workshop gear",B.Ee)
D.db0=new C.le("wallet","Cash & Wallet","Quick spending",B.jC)
D.bpv=new A.a_(63395,"MaterialIcons",!1)
D.daY=new C.le("concrete","Concrete","Foundation work",D.bpv)
D.daU=new C.le("blueprint","Blueprint","Plans & design",A9.afH)
D.a_x=w([D.daV,D.db1,D.daS,D.daR,D.db_,D.daO,D.daT,D.daN,D.db2,D.daL,D.daM,D.daZ,D.daK,D.daX,D.daQ,D.daP,D.daW,D.db0,D.daY,D.daU],A.aA("M<le>"))
D.cUi=w([B.bm,B.bu],x.O)
D.cV_=w([B.hQ,B.n6,B.dw],x.O)
D.a_B=w(["top","middle","bottom"],x.s)
D.cX9=w([B.cJ,B.bg,B.dH],x.O)
D.cXC=w([B.br,B.dl,B.eM],x.O)
D.cZd=w([B.bP,B.ak],x.O)
D.cZe=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dHc={top:0,middle:1,bottom:2}
D.d1m=new A.bt(D.dHc,["Top","Middle","Bottom"],x.w)
D.dGT={double:0,single:1,corners:2,none:3}
D.d1r=new A.bt(D.dGT,["Double line","One line","Corners","None"],x.w)
D.dHV={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d2P=new A.bt(D.dHV,["Leather","Linen","Smooth","Stars","Light rays"],x.w)
D.d3_=new A.bt(B.il,[],A.aA("bt<G,+(n,n)>"))
D.dH5={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AN=new A.bt(D.dH5,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aA("bt<n,G>"))
D.d54=new F.L5(32,null)
D.d55=new F.L5(40,null)
D.d56=new F.L5(46,null)
D.aAw=new C.apj(null)
D.dJO=new A.v(8,14)
D.eJi=new A.w("Write a new book",null,B.jq,null,B.L,null,null,null,null,null,null,null)
D.dLL=new A.B(B.lS,D.eJi,null)
D.ahx=new A.ac(B.hH,18,B.c,null,null,null)
D.eDc=new A.w("Add",null,B.mT,null,null,null,null,null,null,null,null,null)
D.cIB=w([D.ahx,B.v4,D.eDc],x.p)
D.eb5=new A.cD(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cIB,null)
D.dM4=new A.B(B.rD,D.eb5,null)
D.dM5=new A.B(E.ac6,V.SR,null)
D.exB=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG2=new A.w("New Project",null,D.exB,null,null,null,null,null,null,null,null,null)
D.cMb=w([D.ahx,B.ab,D.eG2],x.p)
D.eb8=new A.cD(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cMb,null)
D.dMf=new A.B(B.iD,D.eb8,null)
D.aY4=new A.f9(2.2,null,null,null,null,B.cW,null,null,null,null)
D.efl=new A.a4(22,22,D.aY4,null)
D.aWp=new A.cw(B.B,null,null,D.efl,null)
D.dMD=new A.B(B.UP,D.aWp,null)
D.dNb=new A.iD(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dNe=new A.iD(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBr=new A.iD(1,0.9607843137254902,0.48627450980392156,0)
D.Gh=new A.iD(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.xW=new A.iD(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dNk=new A.iD(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.f3c=new C.bd0(null)
D.bbp=new A.lT(D.f3c,null,B.as,null,null)
D.aF4=new A.cE(0,0,0,0,null,null,D.bbp,null)
D.e1d=new A.T(-42,42)
D.e75=new A.d7([0,0,1,1])
D.aGd=new A.af(0,0,520,160)
D.eao=new A.b5(B.pK,B.W)
D.eU9=new A.w("Let the AI write it from your tree",null,B.kc,null,B.L,null,null,null,null,null,null,null)
D.bmb=new A.dp(1,B.ck,D.eU9,null)
D.cFF=w([E.Yi,B.ab,D.bmb],x.p)
D.eaO=new A.cD(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cFF,null)
D.eCU=new A.w("Save member",null,B.cb,null,null,null,null,null,null,null,null,null)
D.cSO=w([D.aim,B.ab,D.eCU],x.p)
D.eaW=new A.cD(B.aZ,B.b5,B.j,B.m,null,B.p,null,0,D.cSO,null)
D.bvH=new A.ac(B.hK,14,B.aW,null,null,null)
D.erU=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGs=new A.w("Cashier",null,D.erU,null,null,null,null,null,null,null,null,null)
D.cME=w([D.bvH,B.bq,D.eGs],x.p)
D.eaY=new A.cD(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cME,null)
D.eCV=new A.w("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bkW=new A.bG(1,B.bp,D.eCV,null)
D.cyn=w([D.ahV,B.aw,D.bkW],x.p)
D.eaZ=new A.cD(B.aZ,B.e,B.j,B.m,null,B.p,null,0,D.cyn,null)
D.ee7=new A.ap(16,40)
D.eec=new A.ap(22,64)
D.eei=new A.ap(280,88)
D.ef1=new A.a4(30,null,null,null)
D.egi=new A.hI(2,12,12,1.05,null)
D.eG8=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eh_=new A.aX(D.eG8,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eGn=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aI6=new A.aX(D.eGn,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eNL=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ehu=new A.aX(D.eNL,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXc=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.ehz=new A.aX(D.eXc,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eI8=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.ehG=new A.aX(D.eI8,null,null,null,null,null,null,null,null,null,null,null,null,B.fD,!1,null,null,null,B.q,null)
D.eUK=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aIa=new A.aX(D.eUK,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eDv=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ei5=new A.aX(D.eDv,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXN=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eiP=new A.aX(D.eXN,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eTc=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ejc=new A.aX(D.eTc,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXg=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ejf=new A.aX(D.eXg,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ePf=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ejh=new A.aX(D.ePf,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eJP=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eji=new A.aX(D.eJP,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eJQ=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eki=new A.aX(D.eJQ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eGa=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.ekA=new A.aX(D.eGa,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eHT=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ekT=new A.aX(D.eHT,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOM=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.el8=new A.aX(D.eOM,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eKx=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.el9=new A.aX(D.eKx,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eo2=new A.F(!0,D.jv,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoq=new A.F(!0,D.jv,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoN=new A.F(!0,E.iQ,null,null,null,null,19,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,D.ap3,null,null,null)
D.ep_=new A.qZ(!0,B.qF,null,null,null,null,B.dm,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.epf=new A.F(!0,D.jv,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epN=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3R=new A.qZ(!0,B.Pp,null,null,null,null,B.dm,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqL=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.era=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esD=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esH=new A.F(!0,G.iR,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etV=new A.F(!0,B.M,null,null,null,null,13,B.a1,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euy=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evb=new A.F(!0,B.bU,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evg=new A.F(!0,B.bR,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evC=new A.F(!0,D.IQ,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evL=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewH=new A.F(!0,B.cW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ex8=new A.F(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exz=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ez_=new A.F(!0,B.ak,null,null,null,null,11.5,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ez7=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKd=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4k=new A.F(!0,B.ak,null,null,null,null,12,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAI=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB3=new A.F(!0,G.iR,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB9=new A.F(!0,G.iR,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBS=new A.w("Themes",null,B.pw,null,null,null,null,null,null,null,null,null)
D.eCp=new A.w("Add Item",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eso=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCK=new A.w("Debt receipt",null,D.eso,null,B.L,null,null,null,null,null,null,null)
D.aK9=new A.F(!0,B.ak,null,null,null,null,11,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD0=new A.w("Person who owes",null,D.aK9,null,null,null,null,null,null,null,null,null)
D.eDX=new A.w("Notes",null,B.a3X,null,null,null,null,null,null,null,null,null)
D.eEl=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.ers=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEp=new A.w("Share",null,D.ers,null,null,null,null,null,null,null,null,null)
D.eFe=new A.w("Move your family trees",null,D.aKd,null,null,null,null,null,null,null,null,null)
D.eFM=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eGm=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eHu=new A.w("Remove this book?",null,B.hi,null,null,null,null,null,null,null,null,null)
D.aKE=new A.w("Download",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eIu=new A.w("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eJL=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eKM=new A.w("Ribbon bookmark",null,B.ir,null,null,null,null,null,null,null,null,null)
D.eyU=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLc=new A.w("NGMY.ORG",null,D.eyU,null,B.L,null,null,null,null,null,null,null)
D.eMm=new A.w("Scan family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.evv=new A.F(!0,B.c,null,null,null,null,13,B.a1,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eN3=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.evv,null,B.L,null,null,null,null,null,null,null)
D.eOc=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.eOi=new A.w("Thumbnail",null,B.pw,null,null,null,null,null,null,null,null,null)
D.eOS=new A.w("Save the cover",null,B.cq,null,null,null,null,null,null,null,null,null)
D.ePg=new A.w("Your photos",null,B.pw,null,null,null,null,null,null,null,null,null)
D.ePv=new A.w("Create Project",null,B.cb,null,null,null,null,null,null,null,null,null)
D.ePW=new A.w("Design your cover",null,A0.GV,null,null,null,null,null,null,null,null,null)
D.eQ1=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.eQ4=new A.w("PICTURE",null,H.mb,null,null,null,null,null,null,null,null,null)
D.eQq=new A.w("Paid",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eQs=new A.w("You can undo it right after.",null,Z.a41,null,null,null,null,null,null,null,null,null)
D.eQU=new A.w("Print",null,B.tz,null,null,null,null,null,null,null,null,null)
D.eRd=new A.w("Amount owed",null,D.aK9,null,null,null,null,null,null,null,null,null)
D.eRq=new A.w("Got it",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eRY=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.eS0=new A.w("Add to budget",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eSp=new A.w("Debtor signature",null,B.a3X,null,null,null,null,null,null,null,null,null)
D.esZ=new A.F(!0,null,null,null,null,null,12.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSy=new A.w("Change icon",null,D.esZ,null,null,null,null,null,null,null,null,null)
D.eTB=new A.w("Family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eU_=new A.w("Download",null,B.tz,null,null,null,null,null,null,null,null,null)
D.eU3=new A.w("Change",null,B.pw,null,null,null,null,null,null,null,null,null)
D.eUQ=new A.w("Clear all",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eUT=new A.w("WHAT SHOULD IT CHANGE?",null,H.mb,null,null,null,null,null,null,null,null,null)
D.eVr=new A.w("COLOUR",null,H.mb,null,null,null,null,null,null,null,null,null)
D.eVD=new A.w("Do it",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eVG=new A.w("Create Tree",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eWB=new A.w("Create Family Tree",null,B.eB,null,null,null,null,null,null,null,null,null)
D.en5=new A.F(!0,E.iQ,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWQ=new A.w("Write the first page myself",null,D.en5,null,null,null,null,null,null,null,null,null)
D.eXn=new A.w("Create Project",null,E.aJX,null,null,null,null,null,null,null,null,null)
D.f0v=new C.a8V(1,"header")
D.a51=new C.a8V(2,"projects")
D.f0w=new C.a8V(3,"cashier")
D.a52=new C.a8V(4,"familyTree")
D.fb6=new C.cpJ(0,"start")
D.fb7=new C.cpK(0,"start")
D.f0C=new C.Wd(null)
D.f1B=new C.WG(null)
D.d2X=new A.bt(B.il,[],A.aA("bt<n,Ee>"))
D.cOQ=w([],x.E)
D.cOR=w([],x.M)
D.f27=new C.bai(D.d2X,D.cOQ,D.cOR,0,0,null,null)
D.f3R=new C.Y3(null)
D.a5J=new C.aG9(0,"projects")
D.aNr=new C.aG9(1,"cashier")
D.f94=new C.aG9(2,"familyTree")})()};
(a=>{a["1otvzs2fQo/NUe80esJf8nEBYAs="]=a.current})($__dart_deferred_initializers__);