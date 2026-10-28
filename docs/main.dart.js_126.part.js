((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A4,Ag,T,A5,Ah,Ai,Aj,C={
tq(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fMt(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
IS(d){var w
if(d===0)return $.Cn()
if(d===1)return $.a1q()
if(d===2)return $.hgg()
if(Math.abs(d)<4294967296)return C.b7R(A.o.O(d))
w=C.hAO(d)
return w},
b7R(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tq(4,w)
return new C.nE(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tq(1,w)
return new C.nE(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tq(2,w)
return new C.nE(v===0?!1:s,w,v)}v=A.o.an(A.o.gaib(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tq(v,w)
return new C.nE(v===0?!1:s,w,v)},
hAO(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.S(B.dH("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Cn()
w=$.hgf()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ai(w)
w[u]=0}v=J.kY(A.aG.gaP(w))
v.$flags&2&&B.ai(v,13)
v.setFloat64(0,d,!0)
v=w[7]
t=w[6]
s=(v<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new C.nE(!1,r,4)
if(s<0)p=q.m6(0,-s)
else p=s>0?q.dS(0,s):q
return p},
fMu(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ai(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ai(g)
g[w]=0}return e+f},
h3d(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dS(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fv(t,p)
v&2&&B.ai(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dS(t&o,q)}v&2&&B.ai(g)
g[r]=u},
h38(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fMu(d,e,s,g)
w=e+s+1
C.h3d(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ai(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hAR(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dS(1,r)-1,o=A.o.fv(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dS(u&p,q)
w&2&&B.ai(g)
g[v]=(t|o)>>>0
o=A.o.fv(u,r)}w&2&&B.ai(g)
g[n]=o},
cBE(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hAP(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ai(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ai(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ai(h)
h[e]=v},
b7S(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ai(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ai(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
h3e(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ai(g)
g[h]=t&65535
v=A.o.an(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ai(g)
g[h]=r&65535
v=A.o.an(r,65536)}},
hAQ(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.eg((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nE:function nE(d,e,f){this.a=d
this.b=e
this.c=f},
cBF:function cBF(){},
cBG:function cBG(){},
cBH:function cBH(d,e){this.a=d
this.b=e},
cBI:function cBI(d){this.a=d},
aPB:function aPB(d,e){this.a=d
this.b=e},
fUc(d,e,f){var w=new C.QM(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
QM:function QM(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a2B:function a2B(d,e){this.a=d
this.b=e},
bFk:function bFk(d){this.a=d
this.c=this.b=0},
hjt(){return new C.bDG()},
bDG:function bDG(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
ctP:function ctP(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hAw(d,e,f){var w,v,u,t,s
if(d.gal(d))return new Uint8Array(0)
w=new Uint8Array(B.cp(d.gcQN(d)))
v=f*2+2
u=C.h0Q(C.h0S(),64)
t=new C.cdY(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cdZ(e,1000,v)
s=new Uint8Array(v)
return A.aG.dl(s,0,t.cEn(w,0,s,0))},
ctN:function ctN(d,e){this.c=d
this.d=e},
avt:function avt(d,e){this.a=d
this.b=e},
ctQ:function ctQ(d,e,f,g){var _=this
_.b=0
_.c=d
_.w=_.r=_.f=_.e=_.d=0
_.x=""
_.y=null
_.z=e
_.Q=null
_.at=f
_.ay=_.ax=null
_.ch=g},
b6y:function b6y(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
ctO:function ctO(){this.a=$},
h2E(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hjc(d,e){var w
d.$flags&2&&B.ai(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bCg:function bCg(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fRY(d,e){e&=31
return(d&$.pP[e])<<e>>>0},
nb(d,e){e&=31
return(d>>>e|C.fRY(d,32-e))>>>0},
h0R(d){var w,v=new C.ar9()
if(B.iD(d))v.aHF(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h0S(){var w=C.h0R(0),v=new Uint8Array(4),u=x.S
u=new C.ce_(w,v,A.De,5,B.c1(5,0,!1,u),B.c1(80,0,!1,u))
u.li(0)
return u},
h0Q(d,e){var w=new C.cdW(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cdV:function cdV(){},
cdZ:function cdZ(d,e,f){this.a=d
this.b=e
this.c=f},
cdT:function cdT(){},
ar8:function ar8(d){this.a=d},
cdY:function cdY(d){this.a=$
this.b=d
this.c=$},
cdU:function cdU(){},
cdS:function cdS(){},
ar9:function ar9(){this.b=this.a=$},
cdX:function cdX(){},
ce_:function ce_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cdW:function cdW(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cdR:function cdR(){},
cdQ:function cdQ(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bLg:function bLg(){},
bLh:function bLh(d){this.a=d},
hDJ(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b86:function b86(){},
cnN:function cnN(){},
bM9:function bM9(d,e){this.a=d
this.b=!1
this.c=e},
bMa:function bMa(){},
hMu(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
au7(d){var w=0,v=B.j(x.H),u
var $async$au7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eL2?2:4
break
case 2:w=5
return B.b(A.jV.fR("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$au7)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jV.fR("SystemChrome.setEnabledSystemUIOverlays",C.hMu(null),u),$async$au7)
case 6:case 3:return B.h(null,v)}})
return B.i($async$au7,v)},
aua:function aua(d,e){this.a=d
this.b=e},
a7b:function a7b(d){this.a=d},
fIv(d,e){return new C.aTW(e,d,null)},
aTW:function aTW(d,e,f){this.e=d
this.c=e
this.a=f},
az1:function az1(d,e,f,g,h){var _=this
_.af=d
_.ak=e
_.ab$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
hP5(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fiT(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bw(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fiT:function fiT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
am2(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$am2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(R.afu("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$am2)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d7(s,x.f)
t=B.cC(t,new C.bWo(),t.$ti.k("G.E"),x.P)
r=B.B(t,B.a2(t).k("G.E"))}else r=B.a([],x.d)
A.d.b1(r,new C.bWp())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$am2,v)},
am4(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$am4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.am2(),$async$am4)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aW(j);r.C();){q=r.gU(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.Q(Date.now(),0,!1).a5().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.na("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.E(["deck",m.ad(),"savedAt",l],t,q),null),$async$am4)
case 7:if(!f){w=5
break}s.n(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.B(new B.bc(s,r),r.k("G.E"))
w=10
return B.b(B.na("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.Q(Date.now(),0,!1).a5().ac()],t,q),null),$async$am4)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$am4,v)},
bWq(d){return C.hoR(d)},
hoR(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bWq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(R.afu("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hE),$async$bWq)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.UQ(B.a0(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a8(m)
$.am.$1("[admin slides vault] load "+d+": "+B.t(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bWq,v)},
am3(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$am3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.am2(),$async$am3)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nc(r,new C.bWr(d))
w=4
return B.b(B.na("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.Q(Date.now(),0,!1).a5().ac()],x.N,x.z),null),$async$am3)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(R.aND("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$am3)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$am3,v)},
bWo:function bWo(){},
bWp:function bWp(){},
bWr:function bWr(d){this.a=d},
hYV(d,e,f){return B.c_(A.K,null,new C.fyC(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fyC:function fyC(d,e,f){this.a=d
this.b=e
this.c=f},
a_D:function a_D(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHp:function aHp(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eYE:function eYE(d,e){this.a=d
this.b=e},
eYI:function eYI(d){this.a=d},
eYJ:function eYJ(d){this.a=d},
eYK:function eYK(d,e,f){this.a=d
this.b=e
this.c=f},
eYF:function eYF(d){this.a=d},
eYG:function eYG(d){this.a=d},
eYH:function eYH(d,e){this.a=d
this.b=e},
eYz:function eYz(d){this.a=d},
eYx:function eYx(d){this.a=d},
eYy:function eYy(d){this.a=d},
eYA:function eYA(d){this.a=d},
eYB:function eYB(d){this.a=d},
eYO:function eYO(d,e){this.a=d
this.b=e},
eYN:function eYN(d,e){this.a=d
this.b=e},
eYD:function eYD(d,e,f){this.a=d
this.b=e
this.c=f},
eYC:function eYC(d,e,f){this.a=d
this.b=e
this.c=f},
eYL:function eYL(d,e){this.a=d
this.b=e},
eYM:function eYM(d,e){this.a=d
this.b=e},
eYR:function eYR(d){this.a=d},
eYS:function eYS(d,e){this.a=d
this.b=e},
eYQ:function eYQ(d,e){this.a=d
this.b=e},
eYP:function eYP(){},
h5B(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d7(w,x.f)
v=B.cC(v,new C.f4R(),v.$ti.k("G.E"),x.ea)
u=B.a2(v).k("a1<G.E>")
v=B.B(new B.a1(v,new C.f4S(),u),u.k("G.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a0C(d){return C.hQk(d)},
hQk(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a0C=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.flk(n)
t=4
j=m
i=C
w=7
return B.b(B.a1b("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a0C)
case 7:j.$1(i.h5B(f))
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
return B.b(B.ay(),$async$a0C)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.h5B(B.aT(J.q(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("bc<2>")
o=p.k("a1<G.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.f5_(d),$async$a0C)
case 13:p=j.B(new i.a1(h,new g.fli(f),o),o.k("G.E"))
A.d.b1(p,new C.flj())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0C,v)},
ag3(d,e){return C.hYA(d,e)},
hYA(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ag3=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fy6(),x.P)
n=B.B(n,n.$ti.k("aj.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.afW("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ag3)
case 7:q=g
t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:t=9
w=12
return B.b(B.ay(),$async$ag3)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ag3)
case 13:q=g||q
t=2
w=11
break
case 9:t=8
l=s.pop()
w=11
break
case 8:w=2
break
case 11:u=q
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ag3,v)},
f5_(d){return C.hF6(d)},
hF6(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f5_=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$f5_)
case 7:r=f
q=r.rG("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.ks(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$f5_,v)},
aeU(d,e){return C.hOY(d,e)},
hOY(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aeU=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aeU)
case 6:s=g
r=B.aY(x.N)
q=s.rG("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fZ(r,q)
J.cf(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a2(q).k("cl.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$aeU)
case 7:u=1
w=5
break
case 3:u=2
m=t.pop()
w=5
break
case 2:w=1
break
case 5:w=8
return B.b(C.a0C(d),$async$aeU)
case 8:n=g
J.nc(n,new C.fiz(e))
w=9
return B.b(C.ag3(d,n),$async$aeU)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeU,v)},
hZ_(d,e){return B.a4(d,!1).ci(B.eo(new C.fyY(e),!0,null,x.H))},
hAT(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.dc(w.d,new C.cD0())},
o5:function o5(d,e,f){this.a=d
this.b=e
this.c=f},
f4R:function f4R(){},
f4S:function f4S(){},
flk:function flk(d){this.a=d},
fli:function fli(d){this.a=d},
flj:function flj(){},
fy6:function fy6(){},
fiz:function fiz(d){this.a=d},
fyY:function fyY(d){this.a=d},
Xq:function Xq(d,e){this.c=d
this.a=e},
aw0:function aw0(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cD0:function cD0(){},
cD2:function cD2(d,e){this.a=d
this.b=e},
cD5:function cD5(d){this.a=d},
cD6:function cD6(d){this.a=d},
cD4:function cD4(){},
cD7:function cD7(d,e){this.a=d
this.b=e},
cD3:function cD3(d){this.a=d},
cD8:function cD8(){},
cD1:function cD1(d,e){this.a=d
this.b=e},
cD9:function cD9(){},
cCX:function cCX(d){this.a=d},
cCV:function cCV(d){this.a=d},
cCW:function cCW(d){this.a=d},
cCY:function cCY(d,e){this.a=d
this.b=e},
cCU:function cCU(d){this.a=d},
cCT:function cCT(d){this.a=d},
cCR:function cCR(d,e){this.a=d
this.b=e},
cCS:function cCS(d){this.a=d},
cD_:function cD_(){},
cCZ:function cCZ(d){this.a=d},
cCQ:function cCQ(d,e){this.a=d
this.b=e},
cCP:function cCP(d,e){this.a=d
this.b=e},
cCO:function cCO(d,e){this.a=d
this.b=e},
cDa:function cDa(d){this.a=d},
Xo:function Xo(d,e,f){this.c=d
this.d=e
this.a=f},
aDi:function aDi(d,e,f){this.a=d
this.b=e
this.c=f},
avX:function avX(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cCh:function cCh(d){this.a=d},
cCg:function cCg(d){this.a=d},
cCj:function cCj(d,e,f){this.a=d
this.b=e
this.c=f},
cCr:function cCr(){},
cCs:function cCs(d){this.a=d},
cCk:function cCk(d,e,f){this.a=d
this.b=e
this.c=f},
cCi:function cCi(d,e){this.a=d
this.b=e},
cCm:function cCm(d,e){this.a=d
this.b=e},
cCn:function cCn(d,e){this.a=d
this.b=e},
cCo:function cCo(d,e){this.a=d
this.b=e},
cCl:function cCl(d){this.a=d},
cCq:function cCq(d){this.a=d},
cCp:function cCp(d,e){this.a=d
this.b=e},
cCx:function cCx(d){this.a=d},
cCt:function cCt(d,e){this.a=d
this.b=e},
cCu:function cCu(d,e){this.a=d
this.b=e},
cCv:function cCv(d,e){this.a=d
this.b=e},
cCw:function cCw(d,e){this.a=d
this.b=e},
avZ:function avZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hSF(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bz(new C.fpS(),x.H).eP(new C.fpT())}}else if(s)C.h72()}catch(t){}},
h72(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eP(new C.f9e())}catch(u){}},
hSI(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fpS:function fpS(){},
fpT:function fpT(){},
f9e:function f9e(){},
hbz(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gK(A.a.e6(v,w,"").split(":"))},
hbw(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kM)return null
return A.a.b_(w,14)},
fQI(d){var w
if(d.b!==D.kM)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b_(w,21)},
hT7(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hbA(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hT2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kH(0,f)
t=x.N
u=B.cC(u,new C.fqR(),B.a2(u).k("G.E"),t)
s=B.B(u,B.a2(u).k("G.E"))
if(s.length===0)return B.U(t,t)
for(u=v.kH(0,f),u=new B.IR(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Qt(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Qt(A.a.b_(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cB(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hT0(d,e){var w,v,u,t,s,r=B.a2(e).k("cy<1>"),q=B.B(new B.cy(e,r),r.k("G.E"))
A.d.b1(q,new C.fqQ())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aOA(w,u,s,0)}return w},
hT4(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a2a:$.hig(),s=x.N,r=B.U(s,s)
for(s=t.gdK(t),s=s.gai(s);s.C();){w=s.gU(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hbx(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f5S(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hbz(q)===e)return q}return null},
hT5(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b_(v,u)
return A.d.gK(D.FP).a},
hT6(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.acP(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.acP(0,0,0)
v=C.f5S(b6,b0)
u=C.f5S(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hT4(b2,C.hT2(C.hbx(b2),v.r))
if(s.a!==0){u.r=C.hT0(C.hbx(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hbz(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f5S(b6,n)
i=C.f5S(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gK(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fQI(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hbw(a8)===a0||C.fQI(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ai(a1,16)
A.d.PR(a1,new C.fqX(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iW
$.iW=a9+1
A.d.J(a1,new C.eF(""+1000*a6+"_"+a9,D.kM,a2,a3,a4,a5,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,d.at,D.bf,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cf,0,"","","","","",!1,0));++e}b5.f=new B.Q(Date.now(),0,!1)
return new B.acP(k,t,e)},
hT1(d){var w=C.hT5(d)
if(d.w==="hati_kuhowa")return C.haU("",w)
return C.haT("",w)},
fqR:function fqR(){},
fqQ:function fqQ(){},
fqX:function fqX(d){this.a=d},
h6M(){var w=new B.Q(Date.now(),0,!1),v=new C.f8h()
return B.t(v.$1(B.bP(w)))+"/"+B.t(v.$1(B.bF(w)))+"/"+B.bx(w)},
fQQ(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
frP(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kM&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hbN(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.frP(d)
w=B.bi(u)
if(w==null)return!C.frP(d)
return new B.Q(Date.now(),0,!1).a5().cW(w.a5().bN(18e9))},
hTN(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.Q(Date.now(),0,!1).a5().ac()},
hsR(d){return A.a.i(d).toLowerCase()},
aob(d){return C.hsT(d)},
hsT(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aob=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$aob)
case 7:r=f
p=r.rG("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.J(o,C.hXi(),B.T(o).k("J<1,n>")).bY(0,new C.c69())
o=B.d9(o,o.$ti.k("G.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aob,v)},
aoa(d,e){return C.hsS(d,e)},
hsS(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoa=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aob(d),$async$aoa)
case 3:r=g
if(!J.cf(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$aoa)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pY(r)),$async$aoa)
case 9:t=2
w=7
break
case 5:t=4
n=s.pop()
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoa,v)},
aoc(d,e){return C.hsU(d,e)},
hsU(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoc=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aob(d),$async$aoc)
case 3:r=g
if(!J.hJ(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$aoc)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pY(r)),$async$aoc)
case 9:t=2
w=7
break
case 5:t=4
n=s.pop()
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoc,v)},
U9(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$U9=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fK_&&!a5){w=1
break}t=4
w=7
return B.b(B.ay(),$async$U9)
case 7:r=a7
q=B.aT(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jo(p),d=d.gai(d),a0=x.z;d.C();){n=d.gU(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.UQ(B.a0(f.a(n.b),e,a0)))}$.a60=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a8(a2)
$.am.$1("[kiapo] local load: "+B.t(m))
w=6
break
case 3:w=2
break
case 6:a4=a5
if(a4)a7=a4
else{w=10
break}w=11
break
case 10:w=12
return B.b(B.c0(),$async$U9)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tE("civic_hati_kiapo_uongozi",null,A.eh),$async$U9)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jo(f.a(J.q(l,"byState"))),e=e.gai(e),d=x.z;e.C();){j=e.gU(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.UQ(B.a0(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a2(o).k("cI<1,2>")).gai(0);o.C();){f=o.d
f.toString
i=f
h=$.a60.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcu()
else f=!0
f=!f}else f=!0
if(f)$.a60.n(0,i.a,i.b)}w=20
return B.b(C.aod(),$async$U9)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a8(a3)
$.am.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fK_=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$U9,v)},
aod(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aod=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aod)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a60,o=new B.cI(o,B.a2(o).k("cI<1,2>")).gai(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ad())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aod)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a8(l)
$.am.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aod,v)},
aYn(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aYn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.U9(!1),$async$aYn)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a60.h(0,t)
r=s==null?null:s.hw()
if(r==null){u=null
w=1
break}u=C.bzO(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYn,v)},
a61(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a61=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.Q(Date.now(),0,!1)
o=a1.hw()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a60.n(0,d,o)
$.fK_=!0
w=3
return B.b(C.aod(),$async$a61)
case 3:w=4
return B.b(B.c0(),$async$a61)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a60,n=new B.cI(n,B.a2(n).k("cI<1,2>")).gai(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ad())}w=9
return B.b(B.na("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.Q(Date.now(),0,!1).a5().ac()],e,x.z),null),$async$a61)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a8(a0)
$.am.$1("[kiapo] cloud save: "+B.t(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a61,v)},
aoe(d){var w=0,v=B.j(x.T),u,t,s
var $async$aoe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hU().a44(A.eF),$async$aoe)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fc(),$async$aoe)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aYm(t,d),$async$aoe)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoe,v)},
aYm(d,e){return C.hsV(d,e)},
hsV(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aYm=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c0(),$async$aYm)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aJ(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eS().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i_("media")
w=8
return B.b(p.wr(q,new Uint8Array(B.cp(d)),D.bu1),$async$aYm)
case 8:n=p.BX(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a8(k)
$.am.$1("[kiapo] video upload: "+B.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aYm,v)},
JI(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.em(e,!1,f,A.aB,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cf,D.cP,l,m,n)},
f7x(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.em(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cf,D.eZ,j,k,l)},
fNW(d,e,f,g,h,i,j,k){var w=C.cB(),v=A.k.D(i*0.0017,0.02,0.06)
return C.em(h,!1,j,A.aB,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cf,D.cP,g,e,f)},
f75(d,e,f,g){return C.f7x(0,0.002,D.fn,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fNX(d,e,f,g,h,i,j,k){var w=C.cB()
return C.em(A.pX,!1,j,A.aB,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bi,A.a4,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cf,D.cP,g,e,f)},
h6L(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gK(A.a.e6(v,w,"").split(":"))},
bzO(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gK(t)
t=x.N
r=B.U(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.h6L(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kM&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hw()}h=C.fQm(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.B1(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gK(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.h6L(m)
if(l!=null&&r.ah(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kM&&A.a.c8(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bn(a1.z,new C.fpQ(a2))}else A.d.bn(a1.z,new C.fpR())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.frP(a0))a0.ax=a6.f.a5().ac()
return a0},
fQm(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fsC(D.a3a),l=C.cB(),k=x.u,j=B.a([C.em(A.bg,!1,s,A.aB,"marriage_locked_bg",r,24,A.bi,A.a4,"",1,C.cB(),m,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cf,D.le,1,0,0)],k),i=B.a([],k)
i.push(C.JI("NGMY",A.L,236069181,52,A.bi,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.JI("TAREHE:",A.bg,o,16,A.bi,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fNW("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.h6M()))
i.push(C.f75(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.JI("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bi,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.JI("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f7x(0,0.002,D.fn,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fNX("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fNX("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fNX("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f7x(268435456,0.175,D.bf,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.JI("VIDEO YA KIAPO",A.bg,o,10,A.bi,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.em(A.bg,!1,s,A.aB,"__kiapo_video__",r,24,A.bi,A.a4,"",0.131,C.cB(),t,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cf,D.le,0.77,0.115,0.492))
i.push(C.JI("Rais Anayeapa:",A.bg,p,15,A.bi,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.JI("Jina:",A.bg,p,13,A.bi,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fNW("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.f75(0.195,0.7130000000000001,0.62,n))
i.push(C.JI("Sahihi:",A.bg,p,13,A.bi,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.em(A.bg,!1,s,A.aB,"marriage_sign_rais",0,24,A.bi,A.a4,"",0.07,C.cB(),t,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cf,D.eZ,0.38,0.21500000000000002,0.73))
i.push(C.f75(0.21500000000000002,0.795,0.38,n))
i.push(C.JI("Tarehe:",A.bg,p,13,A.bi,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fNW("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.h6M()))
i.push(C.f75(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f7x(0,0.032,D.bf,o,1,"state_box",0.72,0.14,0.875),C.JI("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bi,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.r8(4294967035,t,0,0,j,l,D.pK,"","",u,D.dc)
return C.B1(t,t,t,t,D.nO,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cB(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
af4(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$af4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eFS)
w=1
break}w=3
return B.b(C.U9(!0),$async$af4)
case 3:w=4
return B.b(C.aYn(p),$async$af4)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hbN(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c_(D.b8T,null,new C.fkG(p),f,!0,!0,!1,A.lf,!1,!1,x.N),$async$af4)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.c9(null,null,!0,null,new C.fkH(),f,null,!0,!0,x.y),$async$af4)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fQm(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fQm(p))
case 1:return B.h(u,v)}})
return B.i($async$af4,v)},
f8h:function f8h(){},
c69:function c69(){},
fpQ:function fpQ(d){this.a=d},
fpR:function fpR(){},
fkG:function fkG(d){this.a=d},
fkE:function fkE(d){this.a=d},
fkF:function fkF(d){this.a=d},
fkH:function fkH(){},
fkC:function fkC(d){this.a=d},
fkD:function fkD(d){this.a=d},
aoJ:function aoJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC4:function aC4(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e1J:function e1J(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1I:function e1I(d){this.a=d},
e1K:function e1K(d){this.a=d},
e1L:function e1L(d){this.a=d},
w7(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.em(e,!1,f,A.aB,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",j,D.bf,4280172719,2,d,0,0,"",D.cf,D.cP,l,m,n)},
h6p(d,e,f){var w=4291404327
return B.a([C.pO(0,f,D.eI,w,2,"ring_l",f,d-f*0.42,e),C.pO(0,f,D.eI,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f6w(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pO(4294967288,f,D.eI,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pO(h,s,D.eI,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pO(h,f*0.46,D.eI,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pO(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.em(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cf,D.eZ,j,k,l)},
f6v(d,e,f,g,h,i,j,k,l){var w=C.cB(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.em(h,!1,k,A.aB,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,l,0,0,"",D.cf,D.cP,g,e,f)},
bxf(d,e,f,g){return C.pO(0,0.002,D.fn,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
h6o(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pO(0,0.036,D.bf,h,1.4,"banner_box_"+d,w,v,e),C.w7(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hby(){var w=new B.Q(Date.now(),0,!1),v=new C.fqW()
return B.t(v.$1(B.bP(w)))+"/"+B.t(v.$1(B.bF(w)))+"/"+B.bx(w)},
h6q(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.w7(r+".",A.bg,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f6v("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.bxf(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.w7("Sahihi:",A.bg,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.em(A.bg,!1,4279310375,A.aB,"marriage_sign_"+d+"_witness_"+r,0,24,A.bi,A.a4,"",0.05,C.cB(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cf,D.eZ,s,t,g-0.004),C.bxf(t,g+0.044,s,w)],x.u)},
afw(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d3_,D.ca7,D.cXf,D.cZ1],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gai(s[w]);v.C();){u=v.gU(0)
if(u.a===d)return u}return null},
fNg(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fsC(d.d),v=B.a([C.em(A.bg,!1,4279310375,A.aB,"marriage_locked_bg",4280640491,24,A.bi,A.a4,"",1,C.cB(),w,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cf,D.le,1,0,0)],x.u)
A.d.v(v,C.hHu(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hHu(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.w7("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.h6p(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.h6p(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f6w(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f6w(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.w7("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pO(0,0.062,D.eI,b1,1.6,"crest_o",0.11,0.445,0.012),C.pO(0,0.046,D.eI,b1,1,"crest_i",0.084,0.458,0.02),C.w7("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pO(0,0.002,D.fn,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pO(b9,0.016,D.kN,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pO(0,0.002,D.fn,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.w7("TAREHE:",A.bg,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f6v("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hby()),C.bxf(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.w7(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pO(c0,0.0026,D.bf,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pO(c3.e,0.138,D.bf,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cB()
c2.push(C.em(A.bg,!1,b9,A.aB,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bi,A.cs,"",0.128,s,a9,"","",0,!1,"",0,D.bf,b3,2,c5,0,0,"",D.cf,D.cP,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pO(0,0.036,D.bf,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cB()
A.d.v(c2,B.a([s,C.em(A.L,!1,c0,A.aB,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bi,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bf,b3,2,c7,0,0,"",D.cf,D.cP,r,q,t+0.00612)],c1))}else A.d.v(c2,C.h6o(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.w7(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f6v("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iW
$.iW=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iW
$.iW=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eF(""+1000*i+"_"+h,D.cP,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bi,A.aB,c0,A.bg,a9,D.bf,b2,b3,2,0,!1,s,0,D.cf,0,"","","","","",!1,0),j,new C.eF(""+1000*f+"_"+e,D.eZ,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bi,A.aB,b6,A.bg,a9,D.fn,0,b5,0.8,0,!1,g,0,D.cf,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iW
$.iW=p+1
i=Date.now()
h=$.iW
$.iW=h+1
g=Date.now()
f=$.iW
$.iW=f+1
e=Date.now()
a3=$.iW
$.iW=a3+1
A.d.v(d,B.a([new C.eF(""+1000*s+"_"+p,D.cP,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bi,A.aB,b7,A.dK,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cf,0,"","","","","",!1,0),new C.eF(""+1000*i+"_"+h,D.eZ,a1,a2,0.046,0.025875,"",24,A.a4,A.bi,A.aB,b6,A.bg,a9,D.bf,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cf,0,"","","","","",!1,0),new C.eF(""+1000*g+"_"+f,D.cP,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bi,A.aB,b7,A.L,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cf,0,"","","","","",!1,0),new C.eF(""+1000*e+"_"+a3,D.eZ,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bi,A.aB,b6,A.bg,a9,D.bf,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cf,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.h6o("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a3_||w===D.a31||w===D.a2Z||w===D.a30){w=t-0.008
A.d.v(c2,C.f6w(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f6w(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pO(0,a4,D.bf,c0,1.3,"wit_table_border",0.82,0.09,t),C.pO(c0,a4,D.bf,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pO(0,0.0022,D.fn,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.w7("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.w7("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.h6q("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.h6q("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pO(0,0.11,D.bf,c0,1.2,"mw_box",0.82,0.09,t),C.w7("MWANDISHI",A.bg,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.w7("Jina:",A.bg,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f6v("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.bxf(0.215,p,0.3116,b5),C.w7("Sahihi:",A.bg,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.em(A.bg,!1,b6,A.aB,"marriage_sign_mwandishi",0,24,A.bi,A.a4,"",0.044,C.cB(),a9,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cf,D.eZ,0.3161999999999999,0.5738,s-0.044),C.bxf(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pO(0,0.032,D.bf,c0,1,"state_box",0.7,0.15,a8),C.w7("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hT3(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fR_(d.d),p=new C.fqS(s),o=new C.fqT(s),n=d.z,m=n===D.a3_||n===D.a31||n===D.a2Z||n===D.a30,l=n===D.aCs||n===D.a32||n===D.aCt,k=B.bY(0,B.fK(q,A.A,t,t,A.cn,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a32?26:16
i.push(new C.fqV().$1$size(w))}if(n===D.aCu)i.push(D.fjt)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hJ,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ao)
n=B.I(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aLq,p.$1$w(0.9),D.aLq,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b4I,t,n,w,t,t,A.n),t,t,t,t,A.agr,t,t,t))
i.push(A.ao)
i.push(new C.fqU(r).$1("NIMETOWE"))
i.push(A.fV)
v=J.e0(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.KU,new B.co(A.aU,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d9,new B.bG(1,A.bo,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b2)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.q,B.a([k,new B.C(A.af4,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
haT(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.afw(e,t)
if(r==null)r=A.d.gK(D.FP)
w=C.cB()
v=C.r8(r.e,t,0,0,C.fNg(r,0.165,y.O,D.cZA,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pK,"","",s,D.dc)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.B1(t,t,t,t,D.nO,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
haU(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.afw(e,t)
if(r==null)r=A.d.gK(D.FP)
w=C.cB()
v=C.r8(r.e,t,0,0,C.fNg(r,0.165,y.f,D.cVt,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pK,"","",s,D.dc)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.B1(t,t,t,t,D.nO,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bB9(d,e,f){var w=0,v=B.j(x.T),u
var $async$bB9=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c_(A.K,null,new C.fCp(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bB9,v)},
af5(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$af5=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a1<1>")
p=B.B(new B.a1(i,new C.fkK(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c_(D.K9,null,new C.fkL(p),d,!0,!0,!1,A.lf,!1,!1,x.N),$async$af5)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hw())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bB9(d,"Hati ya Kuhowa",D.FP),$async$af5)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Km(d,"Tafuta jimbo\u2026","",A.jR,"Chagua jimbo"),$async$af5)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.haT(r,s))
case 1:return B.h(u,v)}})
return B.i($async$af5,v)},
af6(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$af6=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a1<1>")
p=B.B(new B.a1(i,new C.fkO(),q),q.k("G.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c_(D.K9,null,new C.fkP(p),d,!0,!0,!1,A.lf,!1,!1,x.N),$async$af6)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hw())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bB9(d,"Hati ya Kuhoweya",D.FP),$async$af6)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Km(d,"Tafuta jimbo\u2026","",A.jR,"Chagua jimbo"),$async$af6)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.haU(r,s))
case 1:return B.h(u,v)}})
return B.i($async$af6,v)},
af7(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$af7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a1<1>")
m=B.B(new B.a1(i,new C.fkS(),n),n.k("G.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c_(D.K9,null,new C.fkT(m),d,!0,!0,!1,A.lf,!1,!1,x.N),$async$af7)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(m).hw())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bB9(d,"Malipo ya Awamu ya Mahari",D.Pi),$async$af7)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Km(d,"Tafuta jimbo\u2026","",A.jR,"Chagua jimbo"),$async$af7)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.afw(s,D.Pi)
if(q==null)q=A.d.gK(D.Pi)
n=C.cB()
p=C.r8(q.e,null,0,0,C.fNg(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cQK,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pK,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dc)
n=C.cB()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.B1(null,null,null,null,D.nO,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$af7,v)},
x6:function x6(d,e){this.a=d
this.b=e},
jf:function jf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fqW:function fqW(){},
fqS:function fqS(d){this.a=d},
fqU:function fqU(d){this.a=d},
fqV:function fqV(){},
fqT:function fqT(d){this.a=d},
fCp:function fCp(d,e){this.a=d
this.b=e},
abW:function abW(d,e,f){this.c=d
this.d=e
this.a=f},
dU7:function dU7(d,e,f){this.a=d
this.b=e
this.c=f},
dU6:function dU6(d,e){this.a=d
this.b=e},
dU5:function dU5(d,e){this.a=d
this.b=e},
abl:function abl(d,e,f){this.c=d
this.d=e
this.a=f},
fkK:function fkK(){},
fkL:function fkL(d){this.a=d},
fkI:function fkI(d){this.a=d},
fkJ:function fkJ(d){this.a=d},
fkO:function fkO(){},
fkP:function fkP(d){this.a=d},
fkM:function fkM(d){this.a=d},
fkN:function fkN(d){this.a=d},
fkS:function fkS(){},
fkT:function fkT(d){this.a=d},
fkQ:function fkQ(d){this.a=d},
fkR:function fkR(d){this.a=d},
JL(d,e,f,g,h,i,j,k,l,m){var w=C.cB()
return C.em(e,!1,f,A.aB,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bi,h,"",i,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cf,D.cP,k,l,m)},
C4(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.em(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bi,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cf,D.eZ,j,k,l)},
h75(d,e,f){return C.C4(0,0.002,D.fn,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bxp(d,e,f,g,h){return B.a([C.C4(4294967288,0.032,D.bf,4291404327,1.15,"pill_"+d,g,f,e),C.JL(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fO0(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.C4(0,0.002,D.fn,g,1,"orn_l_"+t,u,d,v),C.C4(h,0.016,D.kN,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.C4(0,0.002,D.fn,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a_Z(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.JL(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cB()
return B.a([v,C.em(A.L,!1,j,A.aB,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cD,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cf,D.cP,t,u,g-0.002),C.h75(u,g+0.018,t)],x.u)},
h76(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.C4(h,0.028,D.bf,h,0,"chv_"+d,g,e,f),C.C4(w,0.024,D.kN,w,0,"chv_l_"+d,0.024,e-0.008,v),C.C4(w,0.024,D.kN,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.JL(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bxo(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.JL("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.em(A.bg,!1,4279310375,A.aB,"marriage_sign_"+d,0,24,A.bi,A.a4,"",0.032,C.cB(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cf,D.eZ,v,w,f-0.006),C.h75(w,f+0.016,v)],x.u)},
fR0(d){var w,v
for(w=0;w<19;++w){v=D.Pw[w]
if(v.a===d)return v}return null},
hVk(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.afw(A.a.b_(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.afw(A.a.b_(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b_(k,18)
w=C.afw(u,D.Pi)
v=w==null?l:w.d
if(v==null){w=C.afw(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fR0(A.a.b_(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.h7V.a8(0)
$.h87.a8(0)
t=C.fsC(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fS4(d){var w=0,v=B.j(x.T),u
var $async$fS4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c_(A.K,null,new C.fDS(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fS4,v)},
x9:function x9(d,e){this.a=d
this.b=e},
nr:function nr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bh3:function bh3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fDS:function fDS(){},
abZ:function abZ(d){this.a=d},
e6Y:function e6Y(d,e){this.a=d
this.b=e},
e6X:function e6X(d){this.a=d},
e6W:function e6W(d,e){this.a=d
this.b=e},
adD:function adD(d,e,f){this.c=d
this.d=e
this.a=f},
fR_(d){return $.h87.cf(0,d,new C.fsE(d))},
fsC(d){return $.h7V.cf(0,d,new C.fsD(d))},
fx(d){return B.fHD(d>>>16&255,d>>>8&255,d&255,255)},
hKu(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.h9a(4294570461,4293910718,4284234270,u)
case 1:return C.h9a(4294635750,4293975240,t,4292912216)
case 2:w=C.f56(s,4294505966,r)
C.bx9(w,14,16,p)
C.kk(w,8,9,464,836,u,1.2)
C.C0(w,2,2,1,1,u,10)
C.C0(w,478,2,-1,1,u,10)
C.C0(w,2,852,1,-1,u,10)
C.C0(w,478,852,-1,-1,u,10)
return w
case 3:return C.f56(4294966515,4294373082,4289102906)
case 4:return C.hFj(C.f56(4294376440,4293653998,4290287194))
case 5:w=C.f56(4294965238,4294437098,4288444980)
C.bx9(w,14,16,4283043359)
C.kk(w,6,7,468,840,u,1)
C.kk(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hk(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xZ(v,n,4294175448)
C.rs(v,n)
C.kk(v,24,24,432,806,4286209070,1)
C.a_N(v,12,12,468,12,o,3,20)
C.a_N(v,12,842,468,842,o,3,20)
C.a_N(v,12,12,12,842,o,3,20)
C.a_N(v,468,12,468,842,o,3,20)
return v
case 7:return C.hDp(4294440434,4293518297,4280228630,r)
case 8:v=B.hk(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xZ(v,m,4293911504)
C.rs(v,m)
C.kk(v,28,28,424,798,l,1)
C.fdx(v,28,28,l,k)
C.fdx(v,452,28,l,k)
C.fdx(v,28,826,l,k)
C.fdx(v,452,826,l,k)
return v
case 9:v=B.hk(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xZ(v,j,4294111986)
C.rs(v,j)
C.kk(v,18,18,444,818,4292401368,0.7)
B.iF(v,!0,C.fx(p),0,13,0,853)
return v
case 10:return C.hHg(i,4294173372)
case 11:return C.hIl(4294439140,4293449662)
case 12:return C.hDh(h,4294239432)
case 13:return C.hHN(4294244340,4293193448)
case 14:return C.hM1(4294505710,4293780694)
case 15:return C.f46(4294966259,4294439138,o,p,q)
case 16:return C.f46(4294966776,4294178544,o,g,g)
case 17:return C.f46(4294965493,4294504170,o,4286200650,q)
case 18:return C.f46(4294966519,4294373862,o,p,p)
case 19:return C.hGn()
case 20:return C.hGo()
case 21:v=B.hk(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xZ(v,h,4293976768)
C.rs(v,h)
C.bx9(v,14,16,p)
B.iF(v,!0,C.fx(u),4,475,4,9)
B.iF(v,!0,C.fx(u),4,475,844,849)
B.iF(v,!0,C.fx(u),4,9,4,849)
B.iF(v,!0,C.fx(u),470,475,4,849)
C.a_N(v,10,12,470,12,u,2,16)
C.a_N(v,10,842,470,842,u,2,16)
C.a_N(v,10,12,10,842,u,2,18)
C.a_N(v,470,12,470,842,u,2,18)
C.C0(v,2,2,1,1,t,10)
C.C0(v,478,2,-1,1,t,10)
C.C0(v,2,852,1,-1,t,10)
C.C0(v,478,852,-1,-1,t,10)
C.kk(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hk(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xZ(v,s,4294438872)
C.rs(v,s)
C.kk(v,14,16,452,822,o,2.2)
C.kk(v,22,24,436,806,o,1)
C.fPi(v,!1,!1,o,p,p,36,14,16)
C.kx(v,240,20,7,o,!0)
C.kx(v,240,834,7,o,!0)
C.kx(v,18,427,7,o,!0)
C.kx(v,462,427,7,o,!0)
return v
case 23:v=B.hk(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xZ(v,i,4293910712)
C.rs(v,i)
B.iF(v,!0,C.fx(u),0,479,0,20)
B.iF(v,!0,C.fx(u),0,479,834,853)
B.iF(v,!0,C.fx(u),0,20,0,853)
B.iF(v,!0,C.fx(u),460,479,0,853)
B.iF(v,!0,C.fx(f),5,474,5,9)
B.iF(v,!0,C.fx(f),5,474,844,848)
B.iF(v,!0,C.fx(f),5,9,5,848)
B.iF(v,!0,C.fx(f),470,474,5,848)
C.kk(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hk(q,q,A.c9,0,A.dZ,854,q,0,3,q,A.c9,480,!1)
C.xZ(v,e,4294174404)
C.rs(v,e)
C.bx9(v,14,16,p)
B.iF(v,!0,C.fx(u),3,476,3,8)
B.iF(v,!0,C.fx(u),3,476,845,850)
B.iF(v,!0,C.fx(u),3,8,3,850)
B.iF(v,!0,C.fx(u),471,476,3,850)
C.kk(v,9,10,462,834,t,1)
C.kk(v,14,16,452,822,u,1.8)
C.kx(v,240,8,4,u,!0)
C.kx(v,240,846,4,u,!0)
C.kx(v,8,427,4,u,!0)
C.kx(v,472,427,4,u,!0)
C.kx(v,8,8,3,t,!0)
C.kx(v,472,8,3,t,!0)
C.kx(v,8,846,3,t,!0)
C.kx(v,472,846,3,t,!0)
return v}},
xZ(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.k.V(q*w+p*t),0,255)
u=A.o.D(A.k.V(o*w+n*t),0,255)
w=A.o.D(A.k.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kz(d,!1,A.da,new B.R4(s),r,A.cW,1,0,w-1,k,k);++k}},
rs(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eT()
n.dI(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aD(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aD(v==null?0:v)
v=d.a
s=v==null?o:v.dO(u,t,o)
if(s==null)s=new B.iA()
v=A.o.D(A.k.O(s.gb6(s))-3,0,255)
r=A.o.D(A.k.O(s.gbf())-3,0,255)
q=A.o.D(A.k.O(s.gbg(s))-2,0,255)
p=d.a
if(p!=null)p.jt(u,t,v,r,q,255)}},
kk(d,e,f,g,h,i,j){var w,v=null,u=C.fx(i),t=e+g
B.kz(d,!0,A.da,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kz(d,!0,A.da,u,v,A.cW,j,e,t,w,w)
B.kz(d,!0,A.da,u,v,A.cW,j,e,e,f,w)
B.kz(d,!0,A.da,u,v,A.cW,j,t,t,f,w)},
C0(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kz(d,!0,A.da,C.fx(i),u,A.cW,2,e,e+g*j,f,f)
B.kz(d,!0,A.da,C.fx(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kz(d,!0,A.da,C.fx(i),u,A.cW,1,w,e+g*t,v,v)
B.kz(d,!0,A.da,C.fx(i),u,A.cW,1,w,w,v,f+h*t)},
h9a(d,e,f,g){var w=null,v=B.hk(w,w,A.c9,0,A.dZ,854,w,0,3,w,A.c9,480,!1)
C.xZ(v,d,e)
C.rs(v,d)
B.iF(v,!0,C.fx(f),0,479,0,28)
B.iF(v,!0,C.fx(f),0,479,826,853)
B.iF(v,!0,C.fx(f),0,28,0,853)
B.iF(v,!0,C.fx(f),452,479,0,853)
C.kk(v,5,5,470,844,g,1.1)
C.kk(v,28,28,424,798,g,1.6)
C.C0(v,2,2,1,1,g,11)
C.C0(v,478,2,-1,1,g,11)
C.C0(v,2,852,1,-1,g,11)
C.C0(v,478,852,-1,-1,g,11)
return v},
f56(d,e,f){var w=null,v=B.hk(w,w,A.c9,0,A.dZ,854,w,0,3,w,A.c9,480,!1)
C.xZ(v,d,e)
C.rs(v,d)
C.kk(v,14,16,452,822,f,1.6)
C.kk(v,20,22,440,810,f,0.8)
return v},
bx9(d,e,f,g){var w,v=C.fx(g)
B.iF(d,!0,v,0,479,0,f-1)
w=854-f
B.iF(d,!0,v,0,479,w,853);--w
B.iF(d,!0,v,0,e-1,f,w)
B.iF(d,!0,v,480-e,479,f,w)},
hFj(d){var w,v,u=4291404327
C.bx9(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kx(d,w,8,3,u,!0)
C.kx(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kx(d,7,v,3,u,!0)
C.kx(d,473,v,3,u,!0)}return d},
fgw(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j7(e,f),new B.j7(e+g*n,f),new B.j7(e,f+h*n)],t)
B.a0z(d,C.fx(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j7(s,u),new B.j7(e+g*v,u),new B.j7(s,f+h*v)],t)
B.a0z(d,C.fx(k),t)
t=A.k.V(n*0.39)
C.kx(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kx(d,e+g*t,f+h*3,4,k,!0)
C.kx(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kx(d,e+g*t,f,5,k,!0)
C.kx(d,e,f+h*t,5,k,!0)}},
fPi(d,e,f,g,h,i,j,k,l){var w,v
C.fgw(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fgw(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fgw(d,k,v,1,-1,e,f,g,h,i,j)
C.fgw(d,w,v,-1,-1,e,f,g,h,i,j)},
a_N(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kT(d,!0,A.da,new B.qF(p),null,A.cW,j,r,q)}},
ffF(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kz(d,!0,A.da,new B.qF(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kz(d,!0,A.da,new B.qF(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hDp(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hk(o,o,A.c9,0,A.dZ,854,o,0,3,o,A.c9,480,!1)
C.xZ(n,d,e)
C.rs(n,d)
C.kk(n,20,20,440,814,f,1.2)
C.ffF(n,0,0,1,1,g)
C.ffF(n,480,0,-1,1,g)
C.ffF(n,0,854,1,-1,g)
C.ffF(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.k.V(240+24*r)
q=A.k.V(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kz(n,!0,A.da,new B.qF(p),o,A.cW,1.2,240,r,60,q)}return n},
fdx(d,e,f,g,h){var w
C.fiU(d,!0,C.fx(g),13,e,f)
C.fiU(d,!0,C.fx(g),9,e,f)
w=B.a([new B.j7(e,f-4),new B.j7(e+4,f),new B.j7(e,f+4),new B.j7(e-4,f)],x.J)
B.a0z(d,C.fx(h),w)},
kx(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j7(e,v),new B.j7(u,f),new B.j7(e,t),new B.j7(s,f)],x.J)
if(i){B.a0z(d,C.fx(h),r)
return}B.kz(d,!0,A.da,C.fx(h),w,A.cW,1,e,u,v,f)
B.kz(d,!0,A.da,C.fx(h),w,A.cW,1,u,e,f,t)
B.kz(d,!0,A.da,C.fx(h),w,A.cW,1,e,s,t,f)
B.kz(d,!0,A.da,C.fx(h),w,A.cW,1,s,e,f,v)},
f45(d,e,f,g,h,i,j){var w,v=B.a([new B.j7(e,f),new B.j7(e+g*28,f),new B.j7(e,f+h*28)],x.J)
B.a0z(d,C.fx(i),v)
v=e+g*14
w=f+h*14
C.kx(d,v,w,6,j,!0)
C.kx(d,v,w,3,i,!0)},
f46(d,e,f,g,h){var w=null,v=B.hk(w,w,A.c9,0,A.dZ,854,w,0,3,w,A.c9,480,!1)
C.xZ(v,d,e)
C.rs(v,d)
C.kk(v,18,18,444,818,f,2)
C.kk(v,26,26,428,802,f,0.9)
if(h!=null)B.iF(v,!0,C.fx(h),28,451,28,34)
C.f45(v,18,18,1,1,g,f)
C.f45(v,462,18,-1,1,g,f)
C.f45(v,18,836,1,-1,g,f)
C.f45(v,462,836,-1,-1,g,f)
return v},
hGn(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hk(v,v,A.c9,0,A.dZ,854,v,0,3,v,A.c9,480,!1)
C.xZ(r,u,4294240980)
C.rs(r,u)
C.kk(r,10,12,460,830,t,3.2)
C.kk(r,18,20,444,814,s,1.2)
C.kk(r,24,26,432,802,t,1.8)
C.fPi(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kx(r,w,16,3,t,!0)
C.kx(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kx(r,16,w,3,t,!0)
C.kx(r,464,w,3,t,!0)}return r},
hGo(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hk(t,t,A.c9,0,A.dZ,854,t,0,3,t,A.c9,480,!1)
C.xZ(p,s,4294373080)
C.rs(p,s)
C.kk(p,16,18,448,818,r,2.4)
C.kk(p,24,26,432,802,4286209044,1)
w=new C.f6n(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fPi(p,!1,!0,r,q,q,34,16,18)
return p},
bxQ(d,e,f,g,h,i){B.iF(d,!0,C.fx(i),e,e+g,f,f+h)},
byF(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.k.V(v*l+u*m),0,255)
j=A.o.D(A.k.V(t*l+s*m),0,255)
l=A.o.D(A.k.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kz(d,!1,A.da,new B.R4(i),null,A.cW,1,e,w,l,l)}},
hHf(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.an(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kz(d,!1,A.da,new B.qF(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.an(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kz(d,!1,A.da,new B.qF(r),null,A.cW,1,t,t,f,s);++q}},
hHg(d,e){var w,v,u=null,t=B.hk(u,u,A.c9,0,A.dZ,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hHf(t,v,w,30,D.cJW,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bxQ(t,44,44,392,766,d)
C.byF(t,44,44,392,766,d,e)
C.rs(t,d)
C.kk(t,44,44,392,766,4292128567,2.2)
C.kk(t,50,50,380,754,4279898632,0.8)
return t},
hIk(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kx(d,e,f,7,h,!0)
C.kx(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kz(d,!0,A.da,C.fx(h),o,A.cW,1.6,w,u,v,t)
B.kz(d,!0,A.da,C.fx(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kz(d,!0,A.da,new B.qF(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kz(d,!0,A.da,C.fx(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kz(d,!0,A.da,C.fx(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kT(d,!0,A.da,C.fx(h),o,A.cW,2,e,f)}},
hIl(d,e){var w,v,u,t,s=null,r=B.hk(s,s,A.c9,0,A.dZ,854,s,0,3,s,A.c9,480,!1)
B.iF(r,!0,C.fx(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hIk(r,u,v,w,4292391514)}C.bxQ(r,46,46,388,762,d)
C.byF(r,46,46,388,762,d,e)
C.rs(r,d)
C.kk(r,46,46,388,762,4291404327,1.8)
return r},
h4F(d,e,f,g){C.fiU(d,!0,C.fx(g),16,e,f)
C.fiU(d,!0,C.fx(g),11,e,f)
C.kx(d,e,f,6,g,!0)
B.kz(d,!0,A.da,C.fx(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kz(d,!0,A.da,C.fx(g),null,A.cW,1.3,e,e,f-14,f+14)},
hDh(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hk(v,v,A.c9,0,A.dZ,854,v,0,3,v,A.c9,480,!1)
B.iF(s,!0,C.fx(4280948752),0,479,0,853)
B.iF(s,!0,C.fx(u),0,479,0,78)
B.iF(s,!0,C.fx(u),0,479,776,853)
for(w=28;w<460;w+=44){C.h4F(s,w,39,t)
C.h4F(s,w,815,t)}C.bxQ(s,38,92,404,670,d)
C.byF(s,38,92,404,670,d,e)
C.rs(s,d)
C.kk(s,38,92,404,670,t,1.8)
C.kk(s,45,99,390,656,4287322667,0.8)
return s},
hHM(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j7(e,f),new B.j7(q-5,w),new B.j7(q,f-(18-Math.abs(r)*3)),new B.j7(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a0z(d,new B.qF(o),p)}B.kT(d,!0,A.da,C.fx(4292128567),null,A.cW,3,e,f)},
hHN(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hk(s,s,A.c9,0,A.dZ,854,s,0,3,s,A.c9,480,!1)
C.xZ(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kz(q,!0,A.da,new B.qF(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kz(q,!0,A.da,new B.qF(u),s,A.cW,1.1,v,v,0,853)}B.iF(q,!0,C.fx(r),0,479,0,70)
B.iF(q,!0,C.fx(r),0,479,798,853)
for(t=0;t<5;++t)C.hHM(q,70+t*85,48,4292128567)
C.bxQ(q,48,78,384,712,d)
C.byF(q,48,78,384,712,d,e)
C.rs(q,d)
C.kk(q,48,78,384,712,4291404327,1.6)
return q},
hM1(d,e){var w,v,u,t=null,s=4279970378,r=B.hk(t,t,A.c9,0,A.dZ,854,t,0,3,t,A.c9,480,!1)
B.iF(r,!0,C.fx(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kx(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kT(r,!0,A.da,new B.qF(u),t,A.cW,1,v,w)}C.bxQ(r,40,40,400,774,d)
C.byF(r,40,40,400,774,d,e)
C.rs(r,d)
C.kk(r,40,40,400,774,4291058750,2)
C.kk(r,48,48,384,758,s,0.8)
return r},
kI:function kI(d,e){this.a=d
this.b=e},
fsE:function fsE(d){this.a=d},
fsD:function fsD(d){this.a=d},
f6n:function f6n(d){this.a=d},
fth(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hIe(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fNU(d){var w,v,u,t=null,s=A.a.cG(d,"{"),r=A.a.od(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.afs(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a0(w,x.N,x.z):t
return v}catch(u){return t}},
adZ(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$adZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uZ(null,""),$async$adZ)
case 3:n=g
if(A.a.i(n).length===0)throw B.S("AI is not available right now. Please try again later.")
t=B.mT(n)
if(e==null)s=A.hj
else{r=C.hIe(e)
s=B.a([new B.ZO(A.cS.gct().aI(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qx(t,d,s,E.El),$async$adZ)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.S(q!=null&&B.Kb(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$adZ,v)},
bAh(d){return C.hV0(d)},
hV0(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bAh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ad(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.adZ(r,null),$async$bAh)
case 7:q=f
p=C.fNU(q)
if(p==null){u=d
w=1
break}o=d.aAh(p)
if(o.r.length===0||A.d.aH(o.r," ").length<A.d.aH(d.r," ").length*0.5){u=d
w=1
break}u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=d
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bAh,v)},
h8v(d){var w,v=F.fQi(d)
v=B.aJ(v,"book","newspaper")
if(F.a0S(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fxc(d,e,f,g){return C.hWS(d,e,f,g)},
hWS(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fxc=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fth(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hbW()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.adZ('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.h8v(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fxc)
case 3:r=m.fNU(i)
if(r==null)throw B.S(y.S)
q=new C.yY(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aAh(r)
t=q.r
if(t.length===0)throw B.S("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a0S(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a0S(A.d.aH(t," "))==="sw"?C.bAh(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxc,v)},
bzM(d,e,f,g,h){return C.hSD(d,e,f,g,h)},
hSD(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bzM=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fG(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hbW()
k=A.R.ao(d.ad(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.adZ('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.h8v(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bzM)
case 3:p=j.fNU(a0)
if(p==null)throw B.S(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cw(o)){n=d.aAh(B.a0(o,x.N,x.z))
m=A.R.ao(n.ad(),null)!==A.R.ao(d.ad(),null)}else{n=d
m=!1}w=m&&F.a0S(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bAh(n),$async$bzM)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a6F(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzM,v)},
a6F:function a6F(d,e,f){this.a=d
this.b=e
this.c=f},
hZy(d,e){return B.a4(d,!1).ci(B.eo(new C.fE2(e),!0,null,x.H))},
fE2:function fE2(d){this.a=d},
UF:function UF(d,e){this.c=d
this.a=e},
aCn:function aCn(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.x=_.w=null
_.y=h
_.z=i
_.Q="en"
_.as=!1
_.at=""
_.ax=j
_.ay=k
_.c=_.a=null},
eaf:function eaf(d){this.a=d},
eae:function eae(){},
eag:function eag(d){this.a=d},
ead:function ead(d,e){this.a=d
this.b=e},
eah:function eah(){},
e9S:function e9S(d,e){this.a=d
this.b=e},
e9O:function e9O(d,e){this.a=d
this.b=e},
e9Z:function e9Z(d){this.a=d},
ea_:function ea_(d,e){this.a=d
this.b=e},
ea0:function ea0(d){this.a=d},
e9U:function e9U(d,e){this.a=d
this.b=e},
e9V:function e9V(d,e){this.a=d
this.b=e},
e9W:function e9W(d,e){this.a=d
this.b=e},
e9X:function e9X(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
e9T:function e9T(d,e){this.a=d
this.b=e},
e9Q:function e9Q(d){this.a=d},
e9R:function e9R(d){this.a=d},
ea6:function ea6(d){this.a=d},
ea7:function ea7(d){this.a=d},
ea5:function ea5(d){this.a=d},
ea8:function ea8(d,e){this.a=d
this.b=e},
ea4:function ea4(d,e){this.a=d
this.b=e},
ea9:function ea9(d){this.a=d},
ea3:function ea3(d){this.a=d},
eaa:function eaa(d){this.a=d},
ea2:function ea2(d){this.a=d},
eab:function eab(d,e){this.a=d
this.b=e},
ea1:function ea1(d,e){this.a=d
this.b=e},
eac:function eac(d){this.a=d},
e9P:function e9P(d,e){this.a=d
this.b=e},
fsd(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fsd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h67){w=1
break}r=new C.fse()
t=4
q=x.s
w=7
return B.b(B.iH(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fsd)
case 7:$.h67=!0
t=2
w=6
break
case 4:t=3
o=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fsd,v)},
bA8(d){return A.G9[B.ml(d)-1]+", "+A.oB[B.bF(d)-1]+" "+B.bP(d)+", "+B.bx(d)},
hL7(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.d7_[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fQH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fu(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a1(v,new C.fqw(),B.T(v).k("a1<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.K)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fqy(j,h)
n=new C.fqx(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iR(o.$1(l)))
j.a+=l}return u},
fNE(d,e){var w=new C.f5Z()
return A.d.cI(e,0,new C.f5X(w))>=A.d.cI(d,0,new C.f5Y(w))},
h3k(d){var w,v,u=new B.aP($.W().r,A.aq,null,null,B.a([],x.v))
u.E(new B.b5(46,0))
w=d.a
u.E(new B.ap(w,0))
v=d.b
u.E(new B.ap(w,v-46))
u.E(new B.ap(w-46,v))
u.E(new B.ap(0,v))
u.E(new B.ap(0,46))
u.E(new B.bE())
return u},
yY:function yY(d,e,f,g,h,i,j,k,l,m){var _=this
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
c9P:function c9P(d){this.a=d},
c9N:function c9N(){},
c9O:function c9O(){},
rV:function rV(d,e){this.a=d
this.b=e},
AP:function AP(d,e){this.a=d
this.b=e},
l5:function l5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.at=p
_.ax=q
_.ay=r
_.ch=s
_.CW=t},
fse:function fse(){},
fqw:function fqw(){},
fqy:function fqy(d,e){this.a=d
this.b=e},
fqx:function fqx(d,e,f){this.a=d
this.b=e
this.c=f},
f5Z:function f5Z(){},
f6_:function f6_(){},
f5X:function f5X(d){this.a=d},
f5Y:function f5Y(d){this.a=d},
aZS:function aZS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c9Q:function c9Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c9R:function c9R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c9S:function c9S(d){this.a=d},
baj:function baj(d){this.a=d},
bai:function bai(d,e){this.b=d
this.a=e},
brG:function brG(d){this.a=d},
b6Q:function b6Q(d,e){this.b=d
this.a=e},
bpb:function bpb(d,e){this.b=d
this.a=e},
hdR(d,e){return B.a4(d,!1).ci(B.eo(new C.fE5(e,null),!0,null,x.E))},
fE5:function fE5(d,e){this.a=d
this.b=e},
UI:function UI(d,e,f){this.c=d
this.d=e
this.a=f},
aCr:function aCr(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ebq:function ebq(){},
ebr:function ebr(d){this.a=d},
ebp:function ebp(d,e){this.a=d
this.b=e},
ebd:function ebd(d){this.a=d},
ebe:function ebe(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebl:function ebl(d,e){this.a=d
this.b=e},
ebi:function ebi(d){this.a=d},
ebj:function ebj(d,e,f){this.a=d
this.b=e
this.c=f},
ebf:function ebf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebm:function ebm(d,e){this.a=d
this.b=e},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebn:function ebn(d){this.a=d},
ebg:function ebg(d,e){this.a=d
this.b=e},
ebo:function ebo(d,e){this.a=d
this.b=e},
b9Q:function b9Q(d,e,f){this.b=d
this.c=e
this.a=f},
hZE(d){return B.a4(d,!1).ci(B.eo(new C.fEl(),!0,null,x.I))},
bxB(d,e){var w,v,u,t,s,r,q=B.c1(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fP1(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fEl:function fEl(){},
ZH:function ZH(d){this.a=d},
oh:function oh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aDP:function aDP(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x="All"
_.z=_.y=null
_.Q=!1
_.at=_.as=0
_.ax=i
_.ay=0.39
_.ch=0.8
_.CW=0.22
_.cx="circle"
_.cy="gold"
_.db=j
_.dx=k
_.dy=""
_.fr=1
_.fx=null
_.fy=!0
_.go=!1
_.id=l
_.k1=0.3
_.k3=_.k2=!0
_.k4=null
_.ok=1
_.p1=!1
_.p2=50
_.p3=0.6
_.p4=null
_.RG=_.R8=0
_.ry=_.rx=1
_.xr=_.x2=_.x1=_.to=0
_.y1=!1
_.aF=_.aO=_.aE=_.az=_.Z=_.b5=_.bi=_.y2=0
_.b3=null
_.b0=0.25
_.ba=null
_.bJ=0.5
_.aR=1
_.c5=_.bR=_.bj=0
_.cU=_.cR=!1
_.c=_.a=null},
eKC:function eKC(d){this.a=d},
eJu:function eJu(d,e){this.a=d
this.b=e},
eJS:function eJS(d,e){this.a=d
this.b=e},
eK1:function eK1(d){this.a=d},
eJd:function eJd(d){this.a=d},
eJe:function eJe(d){this.a=d},
eJb:function eJb(d){this.a=d},
eJc:function eJc(d){this.a=d},
eJL:function eJL(d,e){this.a=d
this.b=e},
eJM:function eJM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJY:function eJY(d,e,f){this.a=d
this.b=e
this.c=f},
eJX:function eJX(d,e){this.a=d
this.b=e},
eJZ:function eJZ(d,e){this.a=d
this.b=e},
eJW:function eJW(d,e){this.a=d
this.b=e},
eK0:function eK0(d,e,f){this.a=d
this.b=e
this.c=f},
eK_:function eK_(d,e){this.a=d
this.b=e},
eJ3:function eJ3(d){this.a=d},
eJ4:function eJ4(d){this.a=d},
eJ5:function eJ5(d){this.a=d},
eJ2:function eJ2(){},
eJ6:function eJ6(d,e){this.a=d
this.b=e},
eJ1:function eJ1(d,e){this.a=d
this.b=e},
eJ8:function eJ8(){},
eJ7:function eJ7(d,e){this.a=d
this.b=e},
eJ0:function eJ0(d,e){this.a=d
this.b=e},
eIY:function eIY(d,e){this.a=d
this.b=e},
eJ9:function eJ9(d){this.a=d},
eJ_:function eJ_(d,e){this.a=d
this.b=e},
eJa:function eJa(d){this.a=d},
eIZ:function eIZ(d,e){this.a=d
this.b=e},
eKr:function eKr(d,e){this.a=d
this.b=e},
eKy:function eKy(d){this.a=d},
eKz:function eKz(d,e){this.a=d
this.b=e},
eKA:function eKA(){},
eKs:function eKs(d,e){this.a=d
this.b=e},
eKq:function eKq(d,e){this.a=d
this.b=e},
eKt:function eKt(d,e){this.a=d
this.b=e},
eKp:function eKp(d,e){this.a=d
this.b=e},
eKu:function eKu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKo:function eKo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eKv:function eKv(d){this.a=d},
eKw:function eKw(d,e){this.a=d
this.b=e},
eKx:function eKx(d){this.a=d},
eKn:function eKn(d){this.a=d},
eKa:function eKa(d){this.a=d},
eKb:function eKb(d){this.a=d},
eK9:function eK9(d,e){this.a=d
this.b=e},
eK4:function eK4(d,e){this.a=d
this.b=e},
eKc:function eKc(d){this.a=d},
eKf:function eKf(d){this.a=d},
eK8:function eK8(d){this.a=d},
eKg:function eKg(d){this.a=d},
eKh:function eKh(d){this.a=d},
eKi:function eKi(d){this.a=d},
eKj:function eKj(d){this.a=d},
eK7:function eK7(d){this.a=d},
eKk:function eKk(d){this.a=d},
eK6:function eK6(d){this.a=d},
eKl:function eKl(d,e){this.a=d
this.b=e},
eK5:function eK5(d,e){this.a=d
this.b=e},
eKm:function eKm(d){this.a=d},
eKd:function eKd(d){this.a=d},
eKe:function eKe(d){this.a=d},
eJP:function eJP(d){this.a=d},
eJO:function eJO(d){this.a=d},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
eJN:function eJN(d,e){this.a=d
this.b=e},
eJR:function eJR(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJG:function eJG(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJF:function eJF(d){this.a=d},
eJJ:function eJJ(d,e){this.a=d
this.b=e},
eJE:function eJE(d,e){this.a=d
this.b=e},
eJD:function eJD(d,e){this.a=d
this.b=e},
eJl:function eJl(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJn:function eJn(d){this.a=d},
eJo:function eJo(d){this.a=d},
eJp:function eJp(d){this.a=d},
eJq:function eJq(d){this.a=d},
eJr:function eJr(d){this.a=d},
eJs:function eJs(d){this.a=d},
eJt:function eJt(d){this.a=d},
eIH:function eIH(d){this.a=d},
eII:function eII(d){this.a=d},
eIJ:function eIJ(d){this.a=d},
eIK:function eIK(d){this.a=d},
eIL:function eIL(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIM:function eIM(d){this.a=d},
eIN:function eIN(d){this.a=d},
eJf:function eJf(d){this.a=d},
eJg:function eJg(d){this.a=d},
eJh:function eJh(d){this.a=d},
eJi:function eJi(d){this.a=d},
eJj:function eJj(d){this.a=d},
eIR:function eIR(d){this.a=d},
eIS:function eIS(d){this.a=d},
eIT:function eIT(d){this.a=d},
eIU:function eIU(d){this.a=d},
eIV:function eIV(d){this.a=d},
eIQ:function eIQ(d){this.a=d},
eIW:function eIW(d){this.a=d},
eIP:function eIP(d){this.a=d},
eIX:function eIX(d){this.a=d},
eIO:function eIO(d){this.a=d},
eJK:function eJK(d){this.a=d},
eJC:function eJC(d){this.a=d},
eJy:function eJy(d){this.a=d},
eJx:function eJx(d){this.a=d},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJA:function eJA(d,e){this.a=d
this.b=e},
eJv:function eJv(d,e){this.a=d
this.b=e},
eJB:function eJB(d){this.a=d},
eJV:function eJV(d){this.a=d},
eJU:function eJU(d,e,f){this.a=d
this.b=e
this.c=f},
eJT:function eJT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eK3:function eK3(d,e){this.a=d
this.b=e},
eK2:function eK2(d,e){this.a=d
this.b=e},
eJk:function eJk(d){this.a=d},
eKB:function eKB(d){this.a=d},
bdm:function bdm(d,e){this.b=d
this.a=e},
hVb(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hVc(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kH(0,d),m=B.B(n,B.a2(n).k("G.E"))
if(m.length===0)return d
w=new B.fc("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.ap(d,v,n)
p=m[r].b
p=A.a.ap(d,n,p.index+p[0].length)
n=B.af("[*~^]",!0,!1,!1,!1)
o=B.aJ(p,n,"")
A:{if(1===s){n="*"
break A}if(2===s){n="^"
break A}if(-1===s){n="~"
break A}n=""
break A}t+=n
w.a=t
t+=o
w.a=t
n=t+n
w.a=n
t=m[r].b
v=t.index+t[0].length}n=w.a=n+A.a.b_(d,v)
return n.charCodeAt(0)==0?n:n},
byb(){var w=$.bxj,v=$.Pp
$.Pp=v+1
return w+"_"+v},
i4(d,e,f,g,h,i,j){return C.em(A.bg,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,C.byb(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cf,D.eZ,g,e,f)},
nI(d,e,f,g){var w=f*9
return C.i4(D.eI,d-f/2,e-w/32,f,w/16,g,0)},
hEW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bxj
p=$.Pp
$.Pp=p+1
w.push(new C.eF(q+"_"+p,D.eZ,0,r,1,0.0016,"",24,A.a4,A.bi,A.aB,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cf,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bxj
p=$.Pp
$.Pp=p+1
w.push(new C.eF(q+"_"+p,D.eZ,o,0,0.004,1,"",24,A.a4,A.bi,A.aB,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cf,0,"","","","","",!1,0))}w.push(C.nI(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nI(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i4(D.bf,0.08,0.08,0.5,0.003,v,0),C.i4(D.bf,0.58,0.08,0.004,0.06,v,0),C.i4(D.bf,0.58,0.14,0.34,0.003,v,0),C.i4(D.bf,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i4(D.bf,0.08,0.8,0.004,0.14,t,0),C.i4(D.bf,0.08,0.94,0.6,0.003,t,0),C.nI(0.58,0.08,0.05,e),C.nI(0.92,0.22,0.05,e),C.nI(0.08,0.8,0.05,f),C.nI(0.68,0.94,0.05,f),C.nI(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i4(D.kN,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i4(D.kN,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i4(D.kN,0.7,0.8,0.22,0.12,w|1140850688,0),C.i4(D.kN,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nI(0.5,0.5,1.5,w|335544320),C.nI(0.5,0.5,1.15,w|402653184),C.nI(0.5,0.5,0.8,v|436207616),C.nI(0.95,0.05,0.4,v|855638016),C.nI(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nI(0.85,0.08,0.7,w|1140850688),C.nI(0.1,0.35,0.5,v|855638016),C.nI(0.9,0.62,0.55,v|771751936),C.nI(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i4(D.bf,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i4(D.bf,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i4(D.bf,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i4(D.bf,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nI(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nI(0.5,0.2,0.65,(w|3422552064)>>>0),C.nI(0.5,0.2,0.95,w|855638016),C.i4(D.bf,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i4(D.bf,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i4(D.jw,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i4(D.jw,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i4(D.jw,0.15,0.86,0.6,0.14,1712265002,0),C.nI(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cLg[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bxj
l=$.Pp
$.Pp=l+1
w.push(new C.eF(m+"_"+l,D.eZ,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bi,A.aB,k,A.bg,null,D.eI,q,q,0,0,!1,"",0,D.cf,0,"","","","","",!1,0))}w.push(C.nI(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i4(D.jw,0.35,-0.1,0.3,0.62,w|855638016,0),C.i4(D.jw,0.05,-0.1,0.3,0.55,v,-0.5),C.i4(D.jw,0.65,-0.1,0.3,0.55,v,0.5),C.nI(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i4(D.bf,0.06,0.04,0.88,0.002,e,0),C.i4(D.bf,0.06,0.96,0.88,0.002,e,0),C.i4(D.bf,0.06,0.04,0.004,0.92,e,0),C.i4(D.bf,0.936,0.04,0.004,0.92,e,0),C.i4(D.bf,0.09,0.07,0.82,0.001,w,0),C.i4(D.bf,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i4(D.jx,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i4(D.jx,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i4(D.jx,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i4(D.bf,0,0,0.3,0.09,w|1140850688,0),C.i4(D.bf,0.7,0.9,0.3,0.1,v|1426063360,0),C.i4(D.bf,0.82,0.04,0.12,0.07,w|771751936,0),C.i4(D.bf,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i4(D.eI,0.62,0.02,0.5,0.16,v,0.6),C.i4(D.eI,0.78,0.12,0.4,0.12,u,0.9),C.i4(D.eI,-0.12,0.8,0.5,0.16,u,-0.6),C.i4(D.eI,-0.05,0.9,0.4,0.12,v,-0.9),C.nI(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i4(D.bf,0.09,0.12,0.16,0.006,e,0),C.i4(D.bf,0.05,0.03,0.9,0.001,w,0),C.i4(D.bf,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hRH(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bxj=j
$.Pp=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fnU()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.em(A.bg,!1,n,A.aB,"ngmy_quote_background",m,24,A.bi,A.a4,"",1,C.byb(),g,"","",0,!1,"",0,D.bf,l,2,"",0,0,"",D.cf,D.le,1,0,0))
if(a9)A.d.v(q,C.hEW(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.hVb(B.aJ(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fnT(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.em(A.bg,!1,n,A.aB,"ngmy_quote_logo",m,24,A.bi,A.a4,a1,a3*9/16,C.byb(),a0,"","",0,!1,a2,0,D.bf,l,2,"",0,0,"",D.cf,D.le,a3,a4,a5))
return C.r8(s,r,0,0,q,j+"_slide",D.pK,"","","",D.dc)},
r7:function r7(d,e){this.a=d
this.b=e},
lT:function lT(d,e,f,g,h,i,j,k,l,m){var _=this
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
fnU:function fnU(){},
fnT:function fnT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hv3(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cbb(),x.N)
s=B.B(u,u.$ti.k("aj.E"))}else s=B.a([],x.s)
u=v.bQ()
w=w.h(d,"request")
return new C.z_(u,t,s,B.t(w==null?"":w))},
fvA(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fvA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h6u){w=1
break}$.h6u=!0
t=4
w=7
return B.b(B.ay(),$async$fvA)
case 7:r=e
q=B.aT(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jo(p),k=k.gai(k),j=x.j,i=x.o;k.C();){o=k.gU(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gU(h)
l=C.hv3(m)
if(l!=null)J.cf(n,l)}$.C1.cf(0,B.t(o.a),new C.fvB(n))}C.fOI()
t=2
w=6
break
case 4:t=3
f=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fvA,v)},
fOI(){var w,v=new B.Q(Date.now(),0,!1).bN(-12e8)
for(w=new B.ds($.C1,$.C1.r,$.C1.e);w.C();)J.nc(w.d,new C.fcK(v))
$.C1.bn($.C1,new C.fcL())},
aMm(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aMm=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aMm)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cI($.C1,B.a2($.C1).k("cI<1,2>")).gai(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gU(h)
g=o
J.cf(p,B.E(["at",g.a.a5().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aMm)
case 7:u=1
w=5
break
case 3:u=2
e=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aMm,v)},
hVN(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fOI()
w=$.C1.cf(0,d,new C.fvD())
v=Date.now()
u=B.B(e,B.a2(e).k("cl.E"))
J.pf(w,0,new C.z_(new B.Q(v,0,!1),f,u,g))
C.aMm()},
hVK(d){var w,v=$.C1.h(0,d)
if(v==null||J.ck(v))return
w=J.cD(v)
w.cw(v,0)
if(w.gal(v))$.C1.W(0,d)
C.aMm()},
z_:function z_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbb:function cbb(){},
fvB:function fvB(d){this.a=d},
fcK:function fcK(d){this.a=d},
fcL:function fcL(){},
fvD:function fvD(){},
hVP(d){return A.d.dL(D.vp,new C.fvG(d),new C.fvH())},
hv1(d){var w
switch(d.a){case 0:w="Emojis"
break
case 1:w="Pictures"
break
case 2:w="3D icons & animals"
break
case 3:w="Animations"
break
case 4:w="Video motion"
break
case 5:w="Luxury FX"
break
default:w=null}return w},
hv0(d){var w
switch(d.a){case 0:w=D.aiO
break
case 1:w=A.xI
break
case 2:w=A.ajU
break
case 3:w=I.air
break
case 4:w=A.ajj
break
case 5:w=A.lB
break
default:w=null}return w},
hHS(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.OJ[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.OJ[w]
if(!B.dr(v.toLowerCase(),t,0))u=B.dr(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hv2(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=B.U(u,t)
q.n(0,"kind",r.a)
q.n(0,"title",r.b)
q.n(0,"subtitle",r.c)
q.n(0,"bullets",r.d)
q.n(0,"notes",r.e)
q.n(0,"emoji",r.f)
q.n(0,"icon3d",r.r)
q.n(0,"image_query",r.w)
p=r.x
if(p>0)q.n(0,"picture",p)
o.push(q)}return A.R.ao(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hVL(d,e,f,g,h){var w=new B.J(D.vp,new C.fvz(),x.eC).aH(0,", "),v=""+d,u=C.hbO(h),t=F.fpj(h),s=C.h85(g),r=e.t(0,D.H3)?'- New slides get an "emoji".\n':"",q=e.t(0,D.H4)?'- New slides get an "icon3d" from: '+A.d.aH(D.OJ,", ")+".\n":"",p=e.t(0,D.BW)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hVM(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.vp,new C.fvC(),x.eC).aH(0,", "),p=new B.fc("")
if(e.t(0,D.H3)){p.a=s
w=s}else w=""
if(e.t(0,D.H4))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.OJ,", ")+".\n")
if(e.t(0,D.BW))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hbO(d)
v=F.fpj(d)
u=C.h85(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
afI(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.Cp(a3,"{"),a5=J.fHd(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Kw(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ck(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gU(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.ftz(),m).bY(0,new C.ftA())
k=B.B(l,l.$ti.k("G.E"))}else k=B.a([],n)
s=k
l=J.q(t,"kind")
l=A.a.i(B.t(l==null?a2:l))
j=J.q(t,"title")
j=A.a.i(B.t(j==null?"":j))
i=J.q(t,"subtitle")
i=A.a.i(B.t(i==null?"":i))
h=J.q(t,"notes")
h=A.a.i(B.t(h==null?"":h))
g=J.q(t,"emoji")
g=A.a.i(B.t(g==null?"":g))
f=J.q(t,"icon3d")
f=C.hHS(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cf(u,new C.a6N(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ab(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fn(u).b:q))
p=A.d.b8(D.vp,new C.ftB(r))?r:a7
o=C.fbZ(J.q(w,"logo_frame"),D.Bl)
n=C.fbZ(J.q(w,"logo_ring"),D.Bg)
m=C.fbZ(J.q(w,"photo_frame"),D.Bl)
l=C.fbZ(J.q(w,"photo_ring"),D.Bg)
return new C.apx(q,p,u,o,n,m,l)}catch(a0){return a1}},
a0n(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
haW(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.BX),f7=f6?C.hBF():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eT()
v.dI(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.fn(t,v)
s=u.c
s=new C.nv("luxe",u.a,A.lB,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dc)
w=s}if(w==null)w=C.hVP(f9.b)
r=g2.t(0,D.a3j)||f6
q=g2.t(0,D.H3)
p=g2.t(0,D.QF)
o=new C.fnY()
n=B.a([],x.g)
m=new C.fo0(o,w,r)
l=new C.fo_(o,r)
k=new C.fnZ(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.b8(u,new C.fnX(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cMJ[b8]
c0=D.cLI[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eB2.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eI,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eI,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mm,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pL,500,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.QC
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eI,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kN,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bf,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.BU
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eI,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mm,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pL,500,f2,f0))
d3=D.ml
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eI,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bf,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tQ:D.cf
c1.push(new C.eF(b4,D.a3h,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bi,A.aB,4279310375,A.bg,e4,D.bf,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.ml
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eI,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mm,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pL,450,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.QC
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eI,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eI,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bf,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bf,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.H1,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.ml}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dc,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hDg(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.d9b[A.o.F(b1,6)]:s
n.push(new C.lv(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.B1(e4,e4,e4,e4,D.BT,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fqm(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fqm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.BW)
n=e.t(0,D.H4)
if(!o&&!n){u=D.a2g
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fqp(o,s[r],n,$.hGD,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iH(t,x.e),$async$fqm)
case 3:q=m.aW(g)
case 4:if(!q.C()){w=5
break}p=q.gU(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fqm,v)},
fpm(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fpm=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hVM(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aLI(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fpm)
case 3:u=s.aM2(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fpm,v)},
bzN(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bzN=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.ea(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.hVN(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.afI(i,"colorful")
t=C.hVL(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aLI(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hj),$async$bzN)
case 3:u=o.aM2(m,f,h,g,D.dNh,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzN,v)},
aLI(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aLI=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uZ(null,""),$async$aLI)
case 3:n=i
if(A.a.i(n).length===0)throw B.S("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mT(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qx(t,d,g,null),$async$aLI)
case 7:q=i
p=q.b
if(p!=null){o=C.afI(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.S(s!=null&&B.Kb(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aLI,v)},
aM2(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aM2=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.BW)||e.t(0,D.H4)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d9(e,x.Q)
t.W(0,D.BW)}w=6
return B.b(C.fqm(d,t),$async$aM2)
case 6:s=k
w=4
break
case 5:s=D.a2g
case 4:t=d.c
w=A.d.b8(t,new C.f5U())?7:9
break
case 7:r=$.hcG
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dR(r,x.aP),$async$aM2)
case 10:q=k
p=q!=null?A.R.ao(q.ad(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.haW(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hv2(new C.apx(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("J<1,n>")
t=B.B(new B.J(m,new C.f5V(),n),n.k("aj.E"))
l.cx=t
t=B.a2(e).k("jH<cl.E,n>")
t=B.B(new B.jH(e,new C.f5W(),t),t.k("G.E"))
l.cy=t
l.ay=e.t(0,D.QF)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aM2,v)},
fRp(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a1a[v]
if(A.d.t(t,u.b))w.J(0,u)}return w},
hZJ(d){return B.c_(A.K,null,new C.fEx(),d,!0,!0,!0,null,!1,!1,x.I)},
hCg(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gct().aI(d)},
hZI(d,e,f){return B.c_(A.K,null,new C.fEw(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fRq(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fRr(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fbZ(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b8(e,new C.fc_(w))?w:""},
h85(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hcE(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.afI(a1==null?"":a1,a0),a3=C.afI(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.T
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.T(r).k("a1<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qU(new B.a1(r,new C.fvI(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("G.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.B(new B.a1(k,new C.fvJ(),v),r)
A.d.b1(g,new C.fvK())
if(g.length===0)continue
f=new C.fvL(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hW5(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aDx
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dPc
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dPd
return null},
h7H(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bw(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dG(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hVQ(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nO
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cP)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.h7H(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.h7H(n,i,v,u))if(n.w>10){f=h+1
i=h<200
h=f}else i=g
else i=g
if(!i)break
i=Math.max(10,n.w-1)
n.w=i}i=n.d
g=n.f
if(i+g>1)n.d=Math.max(0,1-g)
i=n.c
g=n.e
if(i+g>1)n.c=Math.max(0,1-g)
break}if(n.w!==m||n.c!==l||n.d!==k)s=!0}return s},
hVO(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.afI(o,"colorful")
if(n==null)throw B.S("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a1a[r]
if(q.b===s)w.J(0,q)}}v=C.fRq(e)
u=C.fRr(e)
p=C.haW(n,D.a2g,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("J<1,n>")
o=B.B(new B.J(o,new C.fvE(),u),u.k("aj.E"))
p.cx=o
o=w.$ti.k("jH<cl.E,n>")
o=B.B(new B.jH(w,new C.fvF(),o),o.k("G.E"))
p.cy=o
p.ay=w.t(0,D.QF)
return p},
hZv(d,e,f){return B.c_(A.K,null,new C.fDK(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hBF(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eT()
s.dI(t)
w=D.cre[s.aD(10)]
v=new C.e6l(s)
u=x.N
return new C.e6k(w,s.aD(4),J.fn(v.$1$2(D.cQW,1,x.ff)),w.r[s.aD(3)],v.$1$2(D.d51,2+s.aD(2),u),v.$1$2(D.cZK,2,u),v.$1$2(D.d7N,4,x.fP),t)},
hDg(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eT()
a1.dI(a5.w+a3*13)
w=new C.f2q(a4)
v=new C.f2s(a4,d)
u=new C.f2r(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cP){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fM(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fM(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.cm(a2,0,w.$8(D.eI,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a0n(a0,52),"lux_spot",a5.w1(0,"spotlight")))
else A.d.cm(a2,0,w.$8(D.bf,0,0,1,1,0,"lux_back",a5.w1(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cm(a2,1,w.$8(D.bf,0,0,1,1,0,"lux_back2",a5.aCC(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.022,0.038,0.956,0.924,0,g,a5.w1(0,f),D.dc,150,C.a0n(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.018,0.032,0.964,0.936,0,g,a5.w1(0,f),D.dc,120,C.a0n(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dc,260,C.a0n(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bf,0,0,1,1,0,"lux_filigree",a5.w1(0,"filigree"),D.dc,200))
break
default:a2.push(w.$10$anim$delay(D.bf,0.08,0.06,0.84,0.004,C.a0n(a0,208),"lux_rule",a5.aCC(0,"shimmer",r),D.tP,150))
a2.push(w.$10$anim$delay(D.bf,0.08,0.936,0.84,0.004,C.a0n(a0,144),"lux_rule2","",D.H1,220))}l=!A.d.b8(a2,new C.f2p())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.w1(0,"crest"),350))
else{o=a1.hc()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.w1(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a0n(r,242)
j=a5.w1(0,"orbit")
i=s===D.bf?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pL,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eI,t-0.007,0.9495,0.014,0.025,C.a0n(r,242),"lux_g2",a5.w1(0,"orbit"),D.pL,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bf,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fM(a0,16),8,"0").toUpperCase()))}if((A.d.gK(d.b).a&16777215)<8421504)a2.push(w.$8(D.bf,0,0,1,1,0,"lux_velvet",a5.w1(0,"velvet")))},
nv:function nv(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fvG:function fvG(d){this.a=d},
fvH:function fvH(){},
vA:function vA(d,e){this.a=d
this.b=e},
a6N:function a6N(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
apx:function apx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fvz:function fvz(){},
fvC:function fvC(){},
ftz:function ftz(){},
ftA:function ftA(){},
ftB:function ftB(d){this.a=d},
fnY:function fnY(){},
fo0:function fo0(d,e,f){this.a=d
this.b=e
this.c=f},
fo_:function fo_(d,e){this.a=d
this.b=e},
fnZ:function fnZ(d,e){this.a=d
this.b=e},
fnX:function fnX(d){this.a=d},
fqp:function fqp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqn:function fqn(d){this.a=d},
fqo:function fqo(d){this.a=d},
f5U:function f5U(){},
f5V:function f5V(){},
f5W:function f5W(){},
fEx:function fEx(){},
a_b:function a_b(d){this.a=d},
aFJ:function aFJ(d,e,f,g,h){var _=this
_.d=d
_.e=null
_.f=e
_.r=!1
_.w=f
_.x=null
_.y=g
_.at=_.as=_.Q=_.z=null
_.ax=!1
_.ay=""
_.ch=7
_.CW="auto"
_.cx=h
_.c=_.a=_.cy=null},
eQB:function eQB(d,e,f){this.a=d
this.b=e
this.c=f},
eQC:function eQC(d,e){this.a=d
this.b=e},
eQz:function eQz(d,e){this.a=d
this.b=e},
eQA:function eQA(d,e){this.a=d
this.b=e},
eQy:function eQy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eQt:function eQt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eQx:function eQx(d,e){this.a=d
this.b=e},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQr:function eQr(d,e){this.a=d
this.b=e},
eQu:function eQu(d){this.a=d},
eQv:function eQv(d,e){this.a=d
this.b=e},
eQh:function eQh(d,e){this.a=d
this.b=e},
eQi:function eQi(d,e){this.a=d
this.b=e},
eQk:function eQk(d){this.a=d},
eQl:function eQl(d){this.a=d},
eQm:function eQm(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQj:function eQj(d,e){this.a=d
this.b=e},
eQo:function eQo(d,e){this.a=d
this.b=e},
eQP:function eQP(d){this.a=d},
eQQ:function eQQ(d){this.a=d},
eQO:function eQO(d){this.a=d},
eQR:function eQR(d){this.a=d},
eQN:function eQN(d){this.a=d},
eQT:function eQT(d){this.a=d},
eQM:function eQM(d,e){this.a=d
this.b=e},
eQU:function eQU(d){this.a=d},
eQL:function eQL(d,e){this.a=d
this.b=e},
eQV:function eQV(d){this.a=d},
eQK:function eQK(d){this.a=d},
eQW:function eQW(d){this.a=d},
eQJ:function eQJ(d,e){this.a=d
this.b=e},
eQX:function eQX(d){this.a=d},
eQI:function eQI(d,e){this.a=d
this.b=e},
eQY:function eQY(d){this.a=d},
eQH:function eQH(d){this.a=d},
eQZ:function eQZ(d,e){this.a=d
this.b=e},
eQG:function eQG(d,e){this.a=d
this.b=e},
eR_:function eR_(d){this.a=d},
eQS:function eQS(d){this.a=d},
eQF:function eQF(d,e){this.a=d
this.b=e},
eQp:function eQp(d,e,f){this.a=d
this.b=e
this.c=f},
eQq:function eQq(d,e,f){this.a=d
this.b=e
this.c=f},
eQE:function eQE(d,e){this.a=d
this.b=e},
eQD:function eQD(d,e){this.a=d
this.b=e},
fEw:function fEw(d,e){this.a=d
this.b=e},
a_a:function a_a(d,e,f){this.c=d
this.d=e
this.a=f},
aFI:function aFI(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eQa:function eQa(d){this.a=d},
eQb:function eQb(d){this.a=d},
eQc:function eQc(d,e){this.a=d
this.b=e},
eQd:function eQd(d){this.a=d},
eQe:function eQe(d){this.a=d},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
eQf:function eQf(d,e){this.a=d
this.b=e},
eQg:function eQg(d,e){this.a=d
this.b=e},
fc_:function fc_(d){this.a=d},
b_f:function b_f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCg:function aCg(d,e,f){this.c=d
this.d=e
this.a=f},
bhX:function bhX(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
e6n:function e6n(d){this.a=d},
e6m:function e6m(){},
bfy:function bfy(d,e){this.b=d
this.a=e},
fvI:function fvI(d){this.a=d},
fvJ:function fvJ(){},
fvK:function fvK(){},
fvL:function fvL(d){this.a=d},
aq6:function aq6(d,e){this.a=d
this.b=e},
fvE:function fvE(){},
fvF:function fvF(){},
fDK:function fDK(d,e){this.a=d
this.b=e},
Yz:function Yz(d,e,f){this.c=d
this.d=e
this.a=f},
azJ:function azJ(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
df7:function df7(d){this.a=d},
df8:function df8(d){this.a=d},
df9:function df9(d,e){this.a=d
this.b=e},
dfc:function dfc(d){this.a=d},
dfd:function dfd(d,e){this.a=d
this.b=e},
dfb:function dfb(d,e){this.a=d
this.b=e},
dfe:function dfe(d){this.a=d},
dfa:function dfa(d,e){this.a=d
this.b=e},
bqg:function bqg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e6k:function e6k(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e6l:function e6l(d){this.a=d},
f2q:function f2q(d){this.a=d},
f2s:function f2s(d,e){this.a=d
this.b=e},
f2r:function f2r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2p:function f2p(){},
aKg:function aKg(){},
fQf(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vs(B.a0(w,x.N,x.z))
return v}}catch(u){}return null},
b_b:function b_b(d,e,f){this.c=d
this.d=e
this.a=f},
bjA:function bjA(d,e){this.c=d
this.a=e},
hS9(d){return A.d.dL(D.G6,new C.fp5(d),new C.fp6())},
hSa(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b_(t,6)
if(w.length===0)return null
v=new B.a1(D.G6,new C.fp7(w),x.b4)
if(!v.gai(0).C())return null
u=v.gK(0)
return new C.jx("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l2:function l2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fp5:function fp5(d){this.a=d},
fp6:function fp6(){},
fp7:function fp7(d){this.a=d},
mH(d,e,f,g,h){return new C.E_(f,g,d)},
hEt(d){var w=d.z,v=B.T(w).k("a1<1>")
w=B.B(new B.a1(w,new C.f4p(),v),v.k("G.E"))
d.z=w
d.x=""},
dt(d,e){var w=$.JA
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cm(d.z,0,e)},
du(d,e,f,g,h,i,j,k,l){return C.em(A.bg,!1,4279310375,A.aB,"",d,24,A.bi,A.a4,"",e,"design_"+C.cB(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cf,D.eZ,j,k,l)},
haJ(d,e){var w
C.hEt(d)
w=A.d.dL($.bBN(),new C.fmV(e),new C.fmW())
$.JA=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.JA=""}d.z=B.bl(d.z,!0,x.F)},
E_:function E_(d,e,f){this.a=d
this.b=e
this.e=f},
f4p:function f4p(){},
fva:function fva(){},
fvb:function fvb(){},
fvc:function fvc(){},
fvn:function fvn(){},
fvs:function fvs(){},
fvt:function fvt(){},
fvu:function fvu(){},
fvv:function fvv(){},
fvw:function fvw(){},
fvx:function fvx(){},
fvy:function fvy(){},
fvd:function fvd(){},
fve:function fve(){},
fvf:function fvf(){},
fvg:function fvg(){},
fvh:function fvh(){},
fvi:function fvi(){},
fvj:function fvj(){},
fvk:function fvk(){},
fvl:function fvl(){},
fvm:function fvm(){},
fvo:function fvo(){},
fvp:function fvp(){},
fvq:function fvq(){},
fvr:function fvr(){},
fmV:function fmV(d){this.a=d},
fmW:function fmW(){},
iQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.em(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bf,4280172719,2,m,n,0,"",o,D.cP,p,q,r)},
Ci(d,e,f,g,h,i,j,k,l){return C.em(A.bg,!1,4279310375,A.aB,"",d,24,A.bi,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cf,D.eZ,j,k,l)},
bAw(){var w=new B.Q(Date.now(),0,!1)
return A.i8[B.bF(w)-1]+" "+B.bP(w)+", "+B.bx(w)},
ep:function ep(d,e,f){this.a=d
this.b=e
this.c=f},
bxW(d){return new B.iL((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hJt(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.alm(A.cB.aI(A.d.gam(d.split(","))))
return w}catch(v){return null}},
hJx(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.fbN(),x.dv).aH(0,"\n")},
hJw(d){switch(d.a){case 2:return A.n5
case 1:case 5:return A.eLm
default:return A.S0}},
hJq(d){switch(d.a){case 2:return A.un
case 1:case 5:return A.TQ
default:return A.a8a}},
hJu(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bxW(u),q=(s&255)===0?v:C.bxW(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.ne(q,p,A.ku)
w=new B.pg(t,t,t,t)}switch(d.ax.a){case 1:return B.lk(v,v,v,new B.kp(r,w,v,A.a9o,v),v,v,v,v)
case 4:return u?new B.fN(v,v,v):B.wz(B.lk(v,v,q,v,p+0.4,v,v,v))
default:return B.lk(v,v,v,new B.kp(r,w,B.v5(4),A.hz,v),v,v,v,v)}},
hJs(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eZ?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hJq(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hJx(d)
t=C.bxW(d.Q)
s=d.x.a>=700?A.ei:A.uY
r=d.y===A.cD?A.xj:A.ahj
q=d.z
p=new B.Cs(w,l,l,B.f7(u,l,l,l,B.h1(l,t,1===q.a?A.aMo:A.aMn,l,l,l,l,l,l,A.dr,l,l,v,r,s,l,!0,l,l,l,l),C.hJw(d.as)))
break
case 1:case 4:o=C.hJt(d.at)
n=i===D.le&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wz(B.f7(w,l,l,l,B.h1(l,A.r9,l,l,l,l,l,l,l,A.dr,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.H1(o,n?A.a9k:A.Ub,l,l)
break
case 3:w=new B.ne(A.Hk,1,A.ku)
u=B.v5(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lk(A.un,B.f7(t,l,l,l,B.h1(l,D.e0g,l,l,l,l,l,l,l,A.dr,l,l,11,l,A.ei,l,!0,l,l,l,l),A.n5),l,new B.kp(E.aEP,new B.pg(w,w,w,w),u,A.hz,l),l,l,l,l)
break
case 2:p=C.hJu(d,e)
break
case 5:p=C.hJr(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.h2x(-w,p)
w=i===D.cP
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.aqS(m/255,p)}if(w)return new F.vG(k,l,j,l,new B.Rb(new B.ko(g,g,f,1/0),p))
if(i===D.kM){i=new B.ne(A.Hk,1,A.ku)
i=B.lk(A.un,p,l,new B.kp(A.oH,new B.pg(i,i,i,i),B.v5(4),A.hz,l),l,l,D.bqE,l)}else i=p
return new F.vG(k,l,j,l,new B.fN(g,f,i))},
hJv(d,e,f,g){var w,v=null,u=C.bxW(d.e),t=d.f
t=B.a([F.h19(t!=null?B.lk(v,v,v,new B.kp(v,v,v,A.hz,new B.aUK(E.TR,A.a84,B.a([u,C.bxW(t)],x.cR),v)),v,v,v,v):B.lk(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.fbM(f,g),B.T(w).k("J<1,fd>")))
return F.cof(t)},
fRt(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fRt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a2Z(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Vp(A.vD,A.Hh,D.brK,null,null,null,!1,null)
o=new B.B7(o,new C.fvR(607,787,p,d))
o.LE(n,null)
r.push(o)}u=n.jM(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fRt,v)},
hJr(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fQf(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gahN()
if(h==null)h=A.auC
j=B.t7(4279308564)
w=B.v5(18)
v=new B.ne(B.t7(4287531653),3,A.ku)
u=i.length===0?"My links":i
u=B.a([B.wz(B.f7(u,m,m,m,B.h1(m,A.oH,m,m,m,m,m,m,m,A.dr,m,m,12,m,A.ei,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wz(B.f7(A.a.i(l.c),m,m,m,D.eSn,m)))
u.push(new B.fN(m,8,m))
for(t=B.da(h,0,B.dJ(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bW(t,t.gM(0),s.k("bW<aj.E>")),s=s.k("aj.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.t7(4280690220)
o=new B.a81(8,8)
n=A.a.i(r.b)
u.push(new B.nw(D.bkU,new C.av5(new C.agL(q),B.lk(m,B.f7(n.length===0?A.a.i(r.c):n,m,m,m,D.eUE,A.n5),m,new B.kp(p,m,new B.ahc(o,o,o,o),A.hz,m),m,m,D.br3,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wz(B.f7(k,m,m,m,D.eTV,m))
u.push(new C.av5(C.hji(k),t))}return B.lk(m,B.yl(u,A.KC,A.lc),m,new B.kp(j,new B.pg(v,v,v,v),w,A.hz,m),m,m,D.blK,m)},
fbN:function fbN(){},
fbM:function fbM(d,e){this.a=d
this.b=e},
fvR:function fvR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afv(d){var w,v
for(w=0;w<32;++w){v=D.FY[w]
if(v.a===d)return v}return null},
h58(d){var w,v,u=A.a.cG(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cB.aI(A.a.b_(d,u+1))
return w}catch(v){return null}},
cT(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hdN(d,e){return B.a4(d,!1).ci(B.eo(new C.fC9(e),!0,null,x.fB))},
hdM(d,e){return B.c_(A.K,null,new C.fC8(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iU:function iU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DQ:function DQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Mw:function Mw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhj:function bhj(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
dPS:function dPS(d){this.a=d},
dPR:function dPR(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boR:function boR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ePo:function ePo(d,e){this.a=d
this.b=e},
bcs:function bcs(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aY6:function aY6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5L:function c5L(){},
c5M:function c5M(d){this.a=d},
c5N:function c5N(d,e,f){this.a=d
this.b=e
this.c=f},
c5O:function c5O(d,e,f){this.a=d
this.b=e
this.c=f},
fC9:function fC9(d){this.a=d},
Y7:function Y7(d,e){this.c=d
this.a=e},
ay6:function ay6(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d4m:function d4m(d,e,f){this.a=d
this.b=e
this.c=f},
d4r:function d4r(d){this.a=d},
d4s:function d4s(d){this.a=d},
d4q:function d4q(d){this.a=d},
d4t:function d4t(d){this.a=d},
d4p:function d4p(d,e){this.a=d
this.b=e},
d4u:function d4u(d){this.a=d},
d4o:function d4o(d){this.a=d},
d4v:function d4v(d){this.a=d},
d4n:function d4n(d,e){this.a=d
this.b=e},
d4w:function d4w(d,e){this.a=d
this.b=e},
fC8:function fC8(d){this.a=d},
fC7:function fC7(d){this.a=d},
fC6:function fC6(d,e,f){this.a=d
this.b=e
this.c=f},
fC5:function fC5(d,e){this.a=d
this.b=e},
aJK:function aJK(){},
hZH(d){return B.c_(A.K,null,new C.fEv(),d,!0,!0,!0,null,!1,!1,x.N)},
fEv:function fEv(){},
Ys:function Ys(d){this.a=d},
bdW:function bdW(d){this.d=d
this.c=this.a=null},
db7:function db7(d){this.a=d},
db8:function db8(d,e){this.a=d
this.b=e},
db9:function db9(d){this.a=d},
hFW(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.wM},
hU4(d){var w,v=A.d.gK(d.split("@"))
A:{w=7000
if("shimmer"===v){w=3400
break A}if("golddust"===v){w=16e3
break A}if("spotlight"===v){w=14e3
break A}if("goldframe"===v){w=5200
break A}if("twinkle"===v){w=2600
break A}if("orbit"===v)break A
if("rays"===v){w=3e4
break A}if("bokeh"===v){w=22e3
break A}if("aurora"===v){w=18e3
break A}if("sparkle"===v){w=4200
break A}if("sheen"===v)break A
if("velvet"===v){w=9000
break A}if("crest"===v){w=6000
break A}if("filigree"===v){w=8000
break A}w=null
break A}return w},
hU3(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gK(d.split("@")),p=C.hFW(d)
switch(q){case"shimmer":return B.nA(A.a8w,g,new C.fsx(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bdj(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dT(B.e9(A.A,B.db(C.fIv(g,B.a3R(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bd0(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.db(B.eA(A.A,e*0.5,B.e9(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dk()
t=u.a
t.$flags&2&&B.ai(t)
t[11]=0.002
u.ft(e)
u.mr(Math.sin(e)*0.3)
return B.dT(B.fr(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.q,B.a([B.e2(B.b3(r,r,r,new C.blL(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.q,B.a([B.e2(B.b3(r,r,r,new C.b7Z(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.q,B.a([B.e2(B.b3(r,r,r,new C.b7C(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bsC(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bpE(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.boN(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bcl(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bY(0,B.e2(B.e9(A.A,B.bX(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.be),1.6+s*0.15,r,r),!0,r),0,0,0),B.eA(A.A,s*0.06,B.e9(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fsx:function fsx(d,e){this.a=d
this.b=e},
bdj:function bdj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bd0:function bd0(d,e,f){this.b=d
this.c=e
this.a=f},
blL:function blL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b7Z:function b7Z(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b7C:function b7C(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsC:function bsC(d,e,f){this.b=d
this.c=e
this.a=f},
bpE:function bpE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boN:function boN(d,e,f){this.b=d
this.c=e
this.a=f},
bcl:function bcl(d,e,f){this.b=d
this.d=e
this.a=f},
d43:function d43(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
x8:function x8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fsA(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kM},
hU9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b1(j,new C.fsB())
s=A.d.gK(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gK(B.aOA(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hU8(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d3(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d3(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
af8(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$af8=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a1<1>")
e=B.B(new B.a1(a4,new C.fkW(),f),f.k("G.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c_(A.dB,null,new C.fkX(e),d,!0,!0,!1,A.lf,!1,!1,x.N),$async$af8)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gK(e).hw())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fS4(d),$async$af8)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Km(d,"Search states\u2026","",A.jR,"Choose state"),$async$af8)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fR0(s)
if(p==null)p=A.d.gK(D.Pw)
f=C.cB()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cB()
m=p.e
l=C.fsC(p.d)
k=x.u
j=B.a([C.em(A.bg,!1,4279310375,A.aB,"marriage_locked_bg",4280640491,24,A.bi,A.a4,"",1,C.cB(),l,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cf,D.le,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.C4(i,0.016,D.kN,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.C4(0,0.058,D.eI,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.C4(0,0.058,D.eI,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.JL("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.JL("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fO0(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bxp("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a_Z("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a_Z("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a_Z("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a_Z("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bxp("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.C4(m,0.082,D.bf,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cB()
k.push(C.em(A.bg,!1,i,A.aB,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bi,A.cs,"",0.074,g,null,"","",0,!1,"",0,D.bf,4280172719,2,y.O,0,0,"",D.cf,D.cP,0.78,0.11,0.388))
A.d.v(k,C.fO0(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bxp("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.h76("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.h76("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a_Z("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a_Z("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bxo("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bxo("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bxp("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.JL("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.JL("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bxo("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bxo("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bxp("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a_Z("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bxo("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a_Z("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fO0(0.22,0.83,0.56,4291404327,i),h)
h.push(C.JL("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.JL("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.B1(null,null,null,null,D.nO,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.r8(m,null,0,0,j,n,D.pK,"","","Hati ya Ndoa",D.dc)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$af8,v)},
fsB:function fsB(){},
fkW:function fkW(){},
fkX:function fkX(d){this.a=d},
fkU:function fkU(d){this.a=d},
fkV:function fkV(d){this.a=d},
hIX(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hIW(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mq
case"lineThrough":return A.yY
default:return A.aB}},
em(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eF(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
h98(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Ph[w]
if(v.b===u)return v}return D.dc},
hFk(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cIJ[w]
if(v.b===u)return v}return D.cP},
hLG(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.d5C[w]
if(v.b===u)return v}return D.bf},
r8(d,e,f,g,h,i,j,k,l,m,n){return new C.lv(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h_T(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hHk(d.h(0,"layout"))
t=B.aN(d.h(0,"background"))
t=t==null?m:A.k.O(t)
if(t==null)t=4294967295
s=B.aN(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.O(s)
r=C.h98(d.h(0,"transition"))
q=B.aN(d.h(0,"durationSeconds"))
q=q==null?m:A.k.O(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aN(d.h(0,"designRevision"))
o=o==null?m:A.k.O(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d7(n,x.f)
n=B.cC(n,new C.cb8(),n.$ti.k("G.E"),x.F)
n=B.B(n,B.a2(n).k("G.E"))}return C.r8(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hHk(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.amy[w]
if(v.b===u)return v}return D.ml},
B1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.Q(Date.now(),0,!1):a4
return new C.hX(p,t,a1,h,i,w,a0==null?B.a([C.r8(4294967295,null,0,0,null,C.cB(),D.pK,"","","",D.dc)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
UQ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hDw(a6.h(0,"aspectRatio"))
t=B.aN(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.O(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bi(J.k(s==null?"":s))
if(s==null)s=new B.Q(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.km(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.km(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aN(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aN(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.O(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.y(a6.h(0,"cinematic"),!0)
i=J.y(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.caW(),x.N)
f=B.B(f,f.$ti.k("aj.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.caX(),x.N)
e=B.B(e,e.$ti.k("aj.E"))}d=a6.h(0,"finaleStyle")
d=d==null?a3:J.k(d)
a0=a6.h(0,"finaleTitle")
a0=a0==null?a3:J.k(a0)
a1=a6.h(0,"finaleSubtitle")
a1=a1==null?a3:J.k(a1)
a2=a6.h(0,"finaleLogo")
a2=a2==null?a3:J.k(a2)
g=g.a(a6.h(0,"slides"))
if(g==null)g=a3
else{g=J.d7(g,x.f)
g=B.cC(g,new C.caY(),g.$ti.k("G.E"),x.bt)
g=B.B(g,B.a2(g).k("G.E"))}return C.B1(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.r8(4294967295,a3,0,0,a3,C.cB(),D.pK,"","","",D.dc)],x.g):g,v,p,o,s)},
km(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hDw(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.d6r[w]
if(v.b===u)return v}return D.BT},
cB(){var w=Date.now(),v=$.iW
$.iW=v+1
return""+1000*w+"_"+v},
cbp(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.BU){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cB()
v=C.em(A.L,!1,f.d.l(),A.aB,"",n,40,A.bi,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cf,D.cP,0.84,0.08,0.3)
u=C.cB()
A.d.v(w,B.a([v,C.em(A.L,!1,f.e.l(),A.aB,"",n,20,A.bi,A.cs,"",0.12,u,p,"","",0,!1,"",0,D.bf,m,2,"Click to add subtitle",0,0,"",D.cf,D.cP,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cB()
v=C.em(A.bg,!1,f.d.l(),A.aB,"",n,32,A.bi,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cf,D.cP,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.em(A.bg,!0,f.e.l(),A.aB,"",n,20,A.bi,A.cs,"",0.68,u,p,"","",0,!1,"",0,D.bf,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cf,D.cP,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cB()
v=C.em(A.bg,!1,f.d.l(),A.aB,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Two Column Slide",0,0,"",D.cf,D.cP,0.88,0.06,0.06)
u=C.cB()
t=f.e
u=C.em(A.bg,!0,t.l(),A.aB,"",n,18,A.bi,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.bf,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cf,D.cP,0.42,0.06,0.22)
s=C.cB()
A.d.v(w,B.a([v,u,C.em(A.bg,!0,t.l(),A.aB,"",n,18,A.bi,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.bf,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cf,D.cP,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.em(A.L,!1,4294967295,A.aB,"",n,42,A.bi,A.u,"",0.2,C.cB(),p,"","",0,!1,"",0,D.bf,m,2,"Section Header",0,0,"",D.cf,D.cP,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cB()
v=C.em(A.bg,!1,f.d.l(),A.aB,"",n,30,A.bi,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Compare",0,0,"",D.cf,D.cP,0.88,0.06,0.06)
u=C.cB()
t=f.c
u=C.em(A.bg,!1,l,A.aB,"",t.j(0.12).l(),24,A.bi,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.bf,t.l(),2,"",0,0,"",D.cf,D.eZ,0.42,0.06,0.22)
s=C.cB()
r=f.e
s=C.em(A.bg,!1,r.l(),A.aB,"",n,20,A.bi,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bf,m,2,"Option A",0,0,"",D.cf,D.cP,0.38,0.08,0.26)
q=C.cB()
t=C.em(A.bg,!1,l,A.aB,"",t.j(0.06).l(),24,A.bi,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.bf,t.j(0.5).l(),2,"",0,0,"",D.cf,D.eZ,0.42,0.52,0.22)
q=C.cB()
A.d.v(w,B.a([v,u,s,t,C.em(A.bg,!1,r.l(),A.aB,"",n,20,A.bi,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bf,m,2,"Option B",0,0,"",D.cf,D.cP,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cB()
v=C.em(A.L,!1,f.d.l(),A.aB,"",n,36,A.bi,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bf,m,2,"TERM / QUESTION",0,0,"",D.cf,D.cP,0.8,0.1,0.12)
u=C.cB()
A.d.v(w,B.a([v,C.em(A.L,!1,f.e.l(),A.aB,"",n,22,A.bi,A.cs,"",0.35,u,p,"","",0,!1,"",0,D.bf,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cf,D.cP,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cB()
v=C.em(A.bg,!1,f.d.l(),A.aB,"",n,28,A.bi,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bf,m,2,"Quiz Question",0,0,"",D.cf,D.cP,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.em(A.bg,!1,f.e.l(),A.aB,"",n,20,A.bi,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.bf,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cf,D.cP,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cB()
v=C.em(A.bg,!1,f.d.l(),A.aB,"",n,26,A.bi,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bf,m,2,"Worksheet / Assignment",0,0,"",D.cf,D.cP,0.88,0.06,0.04)
u=C.cB()
A.d.v(w,B.a([v,C.em(A.bg,!1,f.e.l(),A.aB,"",n,18,A.bi,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.bf,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cf,D.cP,0.88,0.06,0.16)],x.u))
break}},
hvc(d){return A.d.dL(D.a0P,new C.cbq(d),new C.cbr())},
hv9(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gU(t)
if(!q.b(u))continue
try{J.cf(v,C.UQ(B.a0(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fKB(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cbl(t)
for(w=J.aW(d);w.C();)s.$1(w.gU(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("G.E"))
A.d.b1(u,new C.cbk())
return u},
h_W(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cbg()
if(u!==w)return u>=w?d:e
return v.$1(d).c9(v.$1(e))?d:e},
apy(d){return C.hv7(d)},
hv7(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$apy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cbj()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1b(m),$async$apy)
case 7:j=g.$1(f)
t=2
w=6
break
case 4:t=3
i=s.pop()
w=6
break
case 3:w=2
break
case 6:r=B.a([],k)
t=9
w=12
return B.b(B.ay(),$async$apy)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aT(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.h_V.h(0,m))
n=C.fKB(C.fKB(j,r),o)
if(n.length===0){u=C.h_W(C.h_W(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$apy,v)},
cbf(d){return C.hv6(d)},
hv6(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cbf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$cbf)
case 7:r=f
q=r.rG("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.ks(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cbf,v)},
b_h(d,e){return C.hv8(d,e)},
hv8(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b_h=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$b_h)
case 6:s=g
q=s.rG("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ab(r)>500?J.Kv(r,J.ab(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$b_h)
case 7:u=1
w=5
break
case 3:u=2
m=t.pop()
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$b_h,v)},
UR(d,e){return C.hva(d,e)},
hva(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$UR=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ab(a0)===0){w=1
break}p=$.h_U.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.apy(a3),$async$UR)
case 5:p=a6
case 4:w=6
return B.b(C.cbf(a3),$async$UR)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gU(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcu()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a1<G.E>")
e=B.B(new B.a1(new B.bc(n,m),new C.cbm(o),l),l.k("G.E"))
A.d.b1(e,new C.cbn())
$.h_U.n(0,a0,e)
n=B.T(e).k("J<1,a3<n,@>>")
n=B.B(new B.J(e,new C.cbo(),n),n.k("aj.E"))
r=A.R.ao(n,null)
$.h_V.n(0,a0,r)
t=8
w=11
return B.b(B.afW(a0,r),$async$UR)
case 11:t=2
w=10
break
case 8:t=7
a1=s.pop()
w=10
break
case 7:w=2
break
case 10:t=13
w=16
return B.b(B.ay(),$async$UR)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$UR)
case 17:t=2
w=15
break
case 13:t=12
a2=s.pop()
w=15
break
case 12:w=2
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UR,v)},
HV:function HV(d,e){this.a=d
this.b=e},
apw:function apw(d,e){this.a=d
this.b=e},
un:function un(d,e){this.a=d
this.b=e},
mj:function mj(d,e){this.a=d
this.b=e},
hu:function hu(d,e){this.a=d
this.b=e},
eF:function eF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=a0
_.dx=a1
_.dy=a2
_.fr=a3
_.fx=a4
_.fy=a5
_.go=a6
_.id=a7
_.k1=a8
_.k2=a9
_.k3=b0},
lv:function lv(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cb9:function cb9(){},
cba:function cba(){},
cb8:function cb8(){},
hX:function hX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=a0
_.dx=a1
_.dy=a2
_.fr=a3},
caZ:function caZ(){},
cb_:function cb_(){},
caW:function caW(){},
caX:function caX(){},
caY:function caY(){},
jx:function jx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cbq:function cbq(d){this.a=d},
cbr:function cbr(){},
cbl:function cbl(d){this.a=d},
cbk:function cbk(){},
cbg:function cbg(){},
cbh:function cbh(){},
cbi:function cbi(){},
cbj:function cbj(){},
cbm:function cbm(d){this.a=d},
cbn:function cbn(){},
cbo:function cbo(){},
hUk(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.ft9(e,v,d,B.aY(w))
w.$1(new C.ft5())
w.$1(new C.ft6())
w.$1(new C.ft7())
w.$1(new C.ft8())
return v},
ft9:function ft9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ft5:function ft5(){},
ft6:function ft6(){},
ft7:function ft7(){},
ft8:function ft8(){},
b_e:function b_e(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cb4:function cb4(d){this.a=d},
cb3:function cb3(){},
cb5:function cb5(){},
cb6:function cb6(d,e){this.a=d
this.b=e},
cb7:function cb7(d){this.a=d},
amL:function amL(d,e){this.c=d
this.a=e},
bh5:function bh5(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dCJ:function dCJ(){},
aJv:function aJv(){},
cbc(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cbc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eIK)
u=!1
w=1
break}u=B.kK(!1,d,t,!1,null,A.a3l,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cbc,v)},
hv4(d){var w=A.d.be(D.G6,new C.cbd(d))
if(w<0)return!0
return w>=4},
hv5(d){var w=A.d.be($.bBN(),new C.cbe(d))
if(w<0)return!0
return w>=5},
cbd:function cbd(d){this.a=d},
cbe:function cbe(d){this.a=d},
hW_(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.ya()
$.pV().pp(t,new C.fvY(s),!0)
u=B.a([B.Da(v,A.pO,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eSS,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.mS,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.q,u,v)},
fvY:function fvY(d){this.a=d},
hVB(){return C.fRm()},
hSy(){return C.bzK()},
hUB(){return C.fRd()},
aNG(d,e,f){var w=0,v=B.j(x.H),u
var $async$aNG=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fv3(d,f),$async$aNG)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aNG,v)},
fv3(d,e){var w=0,v=B.j(x.H),u
var $async$fv3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bxX
if(u==null)u=e+".pdf"
w=2
return B.b(B.c_(A.K,null,new C.fv4(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fv3)
case 2:return B.h(null,v)}})
return B.i($async$fv3,v)},
fv4:function fv4(d,e){this.a=d
this.b=e},
ac1:function ac1(d,e,f){this.c=d
this.d=e
this.a=f},
eio:function eio(d,e){this.a=d
this.b=e},
eip:function eip(d,e){this.a=d
this.b=e},
eiq:function eiq(d,e){this.a=d
this.b=e},
eir:function eir(d){this.a=d},
acj:function acj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_d(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b_c(g,m,f,d,e,h,l,k,j,o,i,null)},
hc2(d){return B.cm(new C.ft4(d))},
fRo(d){switch(d.a){case 0:return"\u23ed\ufe0f"
case 1:return"\ud83c\udf2b\ufe0f"
case 2:return"\u2b05\ufe0f"
case 3:return"\u27a1\ufe0f"
case 4:return"\u2b06\ufe0f"
case 5:return"\u2b07\ufe0f"
case 6:return"\ud83d\udd0d"
case 7:return"\ud83d\udd0e"
case 8:return"\ud83d\udd04"
case 9:return"\ud83d\udd03"
case 10:return"\ud83c\udfa1"
case 11:return"\ud83e\uddca"
case 12:return"\u2728"
case 13:return"\ud83d\udcab"
case 14:return"\ud83e\uddf9"
case 15:return"\ud83e\uddfd"
case 16:return"\ud83c\udfc0"
case 17:return"\ud83d\udc49"
case 18:return"\u26a1"
case 19:return"\ud83c\udf00"
case 20:return"\ud83c\udfa2"
case 21:return"\ud83c\udfad"}},
hVJ(d){if(d===D.cf)return"None"
return C.fRo(d)},
bys(d,e,f,g){return C.hLN(d,e,f,g)},
hLN(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bys=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a4(d,!0)
if($.fOj&&t.p8())t.eF()
$.fOj=!0
s.a=null
w=3
return B.b(B.hQ(A.bh,!0,"Animation preview",d,new C.fe5(s,e,g,f),null,A.eD,!0,x.H),$async$bys)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fOj=!1
case 1:return B.h(u,v)}})
return B.i($async$bys,v)},
fFj(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fFj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bS,x.w).w.a.a*0.88,280,440)
s=f===D.cf
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fRo(f)+" Slide transition preview"
s=s?Ad.Eq:A.uI
w=3
return B.b(C.bys(d,s,new B.a5(t,t*0.56,B.bv(B.m(14),new C.aH6(f,null),A.ap),null),r),$async$fFj)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fFj,v)},
hbl(d,e,f){var w,v,u=null,t=A.cp.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dT(B.db(f,t),new B.u((1-t)*48,0))
case 3:return B.dT(B.db(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dT(B.db(f,t),new B.u(0,(1-t)*36))
case 5:return B.dT(B.db(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.e9(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.e9(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.dk()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
w.ft((1-t)*1.2)
return B.fr(A.A,B.db(f,t),u,w,!0)
case 9:w=B.dk()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
w.jI((1-t)*1.2)
return B.fr(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.dk()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.002
w.mr((1-t)*0.8)
v=0.6+t*0.4
w.js(v,v,v,1)
return B.fr(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dT(B.db(f,t),new B.u((1-t)*24,0))}},
bBi(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bBi=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bS,x.w).w.a.a*0.88,300,440)
s=f===D.cf
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fRo(f)+" Element animation preview"
s=s?Ad.Eq:A.uI
w=3
return B.b(C.bys(d,s,new B.a5(t,t*0.62,B.bv(B.m(14),new C.axQ(f,null),A.ap),null),r),$async$bBi)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bBi,v)},
hVI(d){var w,v,u,t,s=$.aeC.W(0,d)
if(s!=null){$.aeC.n(0,d,s)
return s}w=A.cB.aI(A.a.b_(d,A.a.cG(d,",")+1))
$.aeC.n(0,d,w)
v=$.fP6=$.fP6+w.length
u=B.a2($.aeC).k("cy<1>")
for(;;){if(!(v>41943040&&$.aeC.a>1))break
t=new B.cy($.aeC,u).gai(0)
if(!t.C())B.ba(B.fC())
v-=$.aeC.W(0,t.gU(0)).length
$.fP6=v}return w},
hVp(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kH(0,d),j=B.B(k,B.a2(k).k("G.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.es(n,l,l,A.cQ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Rx(s,A.u))
v.push(new B.es(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Rx(t,A.u))
v.push(new B.es(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Rx(u,A.cs))
v.push(new B.es(n,l,l,A.cQ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b_(d,r)
v.push(B.dn(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1a(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aP($.W().r,A.aq,n,n,B.a([],m))
m.E(new B.kC(e))
return m
case"rounded":m=new B.aP($.W().r,A.aq,n,n,B.a([],m))
w=e.geb()*0.18
m.E(new B.iS(B.by(e,new B.aV(w,w))))
return m
case"triangle":m=new B.aP($.W().r,A.aq,n,n,B.a([],m))
m.E(new B.b5(e.gbP().a,e.b))
w=e.d
m.E(new B.ap(e.c,w))
m.E(new B.ap(e.a,w))
m.E(new B.bE())
return m
case"hexagon":w=$.W()
m=B.a([],m)
v=new B.aP(w.r,A.aq,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
m.push(p)
o=v.f
if(o!=null)p.bx(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bx(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.E(new B.bE())
return v
case"diamond":m=new B.aP($.W().r,A.aq,n,n,B.a([],m))
m.E(new B.b5(e.gbP().a,e.b))
m.E(new B.ap(e.c,e.gbP().b))
m.E(new B.ap(e.gbP().a,e.d))
m.E(new B.ap(e.a,e.gbP().b))
m.E(new B.bE())
return m
case"arch":m=new B.aP($.W().r,A.aq,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ap(w,p))
m.b6T(new B.u(t,p),new B.aV(s,s))
m.E(new B.ap(t,u))
m.E(new B.bE())
return m
default:m=new B.aP($.W().r,A.aq,n,n,B.a([],m))
m.E(new B.nR(e))
return m}},
fqE(d,e,f){return B.cm(new C.fqF(D.eBr.t(0,d),d,f,e))},
b_c:function b_c(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.a=o},
cb2:function cb2(d){this.a=d},
cb1:function cb1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cb0:function cb0(){},
b_9:function b_9(d,e){this.b=d
this.a=e},
ft4:function ft4(d){this.a=d},
ft3:function ft3(d,e){this.a=d
this.b=e},
fe5:function fe5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fe3:function fe3(d){this.a=d},
fe4:function fe4(d,e){this.a=d
this.b=e},
aH6:function aH6(d,e){this.c=d
this.a=e},
bs8:function bs8(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
eXK:function eXK(d,e,f){this.a=d
this.b=e
this.c=f},
aHJ:function aHJ(d,e){this.b=d
this.a=e},
TU:function TU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhg:function bhg(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dO4:function dO4(d){this.a=d},
dO3:function dO3(d){this.a=d},
dO2:function dO2(d){this.a=d},
HU:function HU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
caV:function caV(d){this.a=d},
caU:function caU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axQ:function axQ(d,e){this.c=d
this.a=e},
bbQ:function bbQ(){this.d=0
this.c=this.a=null},
d1i:function d1i(d){this.a=d},
d1h:function d1h(d){this.a=d},
a6v:function a6v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhV:function bhV(d,e){var _=this
_.d=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
e63:function e63(d,e,f){this.a=d
this.b=e
this.c=f},
aY9:function aY9(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bcZ:function bcZ(d,e,f){this.b=d
this.c=e
this.a=f},
bnM:function bnM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eN3:function eN3(){},
fqF:function fqF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boK:function boK(d,e,f){this.b=d
this.c=e
this.a=f},
aJJ:function aJJ(){},
aKe:function aKe(){},
aLz:function aLz(){},
fu4(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fu4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wI.c3().L3(D.d3K,A.tj,!0),$async$fu4)
case 3:r=e
if(r==null||J.ck(r.a)){u=null
w=1
break}t=J.fn(r.a)
s=t.c
if(s==null)throw B.S("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.S("That file is too big. Use a file under 8 MB.")
u=C.hVj(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fu4,v)},
hVj(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a6O(d,new B.ZO(A.cS.gct().aI(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.hNo(e)
if(A.a.i(w).length===0)throw B.S("No readable words were found in that Word file.")
return new C.a6O(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c4.JS(0,e,!0)
if(A.a.i(w).length===0)throw B.S("That file is empty.")
return new C.a6O(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hNo(d){var w,v,u,t,s,r,q,p,o=null,n=new C.ctO().cE8(B.qT(d,A.hR,o,o),o,o,!1).cFR(0,"word/document.xml")
if(n==null)return""
w=n.cNN()
v=A.c4.JS(0,w==null?$.heh():w,!0).split("</w:p>")
u=new B.fc("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kH(0,r)
p=A.a.i(B.cC(q,new C.fgU(),B.a2(q).k("G.E"),t).fS(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a6O:function a6O(d,e,f){this.a=d
this.b=e
this.c=f},
fgU:function fgU(){},
hvb(d,e,f,g,h,i,j,k,l){return new C.MZ(l,e,d,g,f,i,h,j,k,null)},
MZ:function MZ(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.a=m},
aCH:function aCH(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=null
_.f=0
_.w=_.r=null
_.x=!0
_.y=!1
_.z="Home"
_.Q=!1
_.as=!0
_.at=null
_.ax=e
_.ay=f
_.ch=g
_.CW=h
_.cx=i
_.cy=null
_.db=!1
_.dx=0
_.dy=j
_.fr=0
_.fx=null
_.fy=$
_.bq$=k
_.a7$=l
_.c=_.a=null},
eoC:function eoC(d){this.a=d},
eoA:function eoA(){},
eoB:function eoB(d){this.a=d},
el_:function el_(){},
el0:function el0(){},
el1:function el1(d,e){this.a=d
this.b=e},
emA:function emA(d){this.a=d},
emo:function emo(){},
emp:function emp(){},
ekn:function ekn(){},
enI:function enI(d){this.a=d},
eoy:function eoy(d,e){this.a=d
this.b=e},
emy:function emy(d,e){this.a=d
this.b=e},
eol:function eol(d){this.a=d},
eom:function eom(){},
eon:function eon(){},
eoo:function eoo(d){this.a=d},
eop:function eop(){},
ejM:function ejM(d){this.a=d},
eoz:function eoz(){},
elH:function elH(d,e){this.a=d
this.b=e},
ejK:function ejK(d){this.a=d},
ejL:function ejL(d){this.a=d},
em3:function em3(d){this.a=d},
em4:function em4(d,e,f){this.a=d
this.b=e
this.c=f},
em5:function em5(d){this.a=d},
elG:function elG(){},
elF:function elF(d){this.a=d},
elD:function elD(){},
elC:function elC(d){this.a=d},
elE:function elE(){},
ekW:function ekW(d){this.a=d},
ekX:function ekX(d){this.a=d},
elN:function elN(d){this.a=d},
elI:function elI(d){this.a=d},
elJ:function elJ(d){this.a=d},
elK:function elK(d){this.a=d},
elL:function elL(d){this.a=d},
elM:function elM(d){this.a=d},
elO:function elO(d,e){this.a=d
this.b=e},
ejO:function ejO(){},
ejP:function ejP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
elZ:function elZ(){},
em_:function em_(d,e){this.a=d
this.b=e},
elX:function elX(d,e,f){this.a=d
this.b=e
this.c=f},
elY:function elY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
elR:function elR(d,e,f){this.a=d
this.b=e
this.c=f},
elS:function elS(d,e,f){this.a=d
this.b=e
this.c=f},
elT:function elT(d){this.a=d},
elU:function elU(d,e){this.a=d
this.b=e},
elV:function elV(d,e){this.a=d
this.b=e},
elW:function elW(d,e){this.a=d
this.b=e},
elQ:function elQ(d,e){this.a=d
this.b=e},
em1:function em1(d){this.a=d},
em2:function em2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
em0:function em0(d){this.a=d},
emj:function emj(){},
emk:function emk(){},
eml:function eml(){},
emm:function emm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emg:function emg(d){this.a=d},
emi:function emi(){},
emh:function emh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eme:function eme(d,e,f){this.a=d
this.b=e
this.c=f},
emf:function emf(d,e){this.a=d
this.b=e},
emn:function emn(){},
elP:function elP(d,e){this.a=d
this.b=e},
ek4:function ek4(){},
ek5:function ek5(d,e,f){this.a=d
this.b=e
this.c=f},
ek6:function ek6(d){this.a=d},
ek7:function ek7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ek3:function ek3(d){this.a=d},
emt:function emt(d){this.a=d},
ems:function ems(d,e){this.a=d
this.b=e},
emr:function emr(d,e){this.a=d
this.b=e},
emq:function emq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emu:function emu(d,e){this.a=d
this.b=e},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
ek2:function ek2(d,e){this.a=d
this.b=e},
ek0:function ek0(d){this.a=d},
emC:function emC(d,e,f){this.a=d
this.b=e
this.c=f},
ejX:function ejX(d,e){this.a=d
this.b=e},
ejW:function ejW(d){this.a=d},
emB:function emB(d,e,f){this.a=d
this.b=e
this.c=f},
ejN:function ejN(d){this.a=d},
eko:function eko(){},
eoj:function eoj(d,e){this.a=d
this.b=e},
eok:function eok(d,e,f){this.a=d
this.b=e
this.c=f},
enJ:function enJ(d,e,f){this.a=d
this.b=e
this.c=f},
eiK:function eiK(d){this.a=d},
eiH:function eiH(d,e){this.a=d
this.b=e},
eix:function eix(d,e){this.a=d
this.b=e},
eiu:function eiu(d){this.a=d},
eit:function eit(d,e){this.a=d
this.b=e},
eiv:function eiv(d,e){this.a=d
this.b=e},
ejZ:function ejZ(d){this.a=d},
ek_:function ek_(d,e){this.a=d
this.b=e},
ejY:function ejY(d){this.a=d},
ejb:function ejb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ejc:function ejc(d,e){this.a=d
this.b=e},
ejg:function ejg(d,e){this.a=d
this.b=e},
ejh:function ejh(d){this.a=d},
eje:function eje(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ejf:function ejf(d){this.a=d},
ejd:function ejd(){},
eja:function eja(d,e,f){this.a=d
this.b=e
this.c=f},
emd:function emd(d,e){this.a=d
this.b=e},
eos:function eos(d){this.a=d},
eot:function eot(d,e){this.a=d
this.b=e},
eou:function eou(d){this.a=d},
eov:function eov(d,e,f){this.a=d
this.b=e
this.c=f},
eor:function eor(d){this.a=d},
enZ:function enZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enY:function enY(d,e,f){this.a=d
this.b=e
this.c=f},
enX:function enX(){},
enW:function enW(d,e,f){this.a=d
this.b=e
this.c=f},
enV:function enV(d,e){this.a=d
this.b=e},
enS:function enS(d,e,f){this.a=d
this.b=e
this.c=f},
enQ:function enQ(d){this.a=d},
enR:function enR(d){this.a=d},
enU:function enU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
enT:function enT(d){this.a=d},
ekS:function ekS(d,e){this.a=d
this.b=e},
ekR:function ekR(d,e){this.a=d
this.b=e},
enK:function enK(){},
eoi:function eoi(d,e){this.a=d
this.b=e},
eog:function eog(d){this.a=d},
eoh:function eoh(d){this.a=d},
eiC:function eiC(d,e){this.a=d
this.b=e},
eiA:function eiA(d){this.a=d},
eiB:function eiB(d){this.a=d},
eiD:function eiD(d,e){this.a=d
this.b=e},
eiE:function eiE(d,e,f){this.a=d
this.b=e
this.c=f},
eiI:function eiI(d,e){this.a=d
this.b=e},
eiz:function eiz(d,e,f){this.a=d
this.b=e
this.c=f},
eiy:function eiy(d){this.a=d},
emz:function emz(d,e,f){this.a=d
this.b=e
this.c=f},
eoq:function eoq(d,e,f){this.a=d
this.b=e
this.c=f},
ekV:function ekV(d,e,f){this.a=d
this.b=e
this.c=f},
ekU:function ekU(){},
ejk:function ejk(d,e,f){this.a=d
this.b=e
this.c=f},
ejl:function ejl(d){this.a=d},
eiw:function eiw(d,e){this.a=d
this.b=e},
ekm:function ekm(d,e){this.a=d
this.b=e},
eiF:function eiF(d,e){this.a=d
this.b=e},
eiO:function eiO(d){this.a=d},
eiP:function eiP(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d,e){this.a=d
this.b=e},
eiN:function eiN(d){this.a=d},
ej0:function ej0(d,e){this.a=d
this.b=e},
eiM:function eiM(d){this.a=d},
ej3:function ej3(d){this.a=d},
ej4:function ej4(d){this.a=d},
ej5:function ej5(d){this.a=d},
ej6:function ej6(d){this.a=d},
ej7:function ej7(d){this.a=d},
ej8:function ej8(){},
ej9:function ej9(){},
eiR:function eiR(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiV:function eiV(d){this.a=d},
eiW:function eiW(d){this.a=d},
eiX:function eiX(d){this.a=d},
eiY:function eiY(d){this.a=d},
eiZ:function eiZ(d){this.a=d},
ej_:function ej_(d){this.a=d},
ej1:function ej1(d){this.a=d},
ej2:function ej2(d,e){this.a=d
this.b=e},
ekl:function ekl(d,e,f){this.a=d
this.b=e
this.c=f},
ekk:function ekk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekj:function ekj(d,e,f){this.a=d
this.b=e
this.c=f},
eki:function eki(d,e){this.a=d
this.b=e},
eiG:function eiG(d,e){this.a=d
this.b=e},
ejo:function ejo(d){this.a=d},
ejn:function ejn(d){this.a=d},
ejm:function ejm(d,e){this.a=d
this.b=e},
ejp:function ejp(d){this.a=d},
ejq:function ejq(d){this.a=d},
ejr:function ejr(d,e){this.a=d
this.b=e},
ek1:function ek1(d){this.a=d},
emc:function emc(d,e){this.a=d
this.b=e},
emb:function emb(d,e){this.a=d
this.b=e},
ema:function ema(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
em8:function em8(d){this.a=d},
em9:function em9(d,e){this.a=d
this.b=e},
em6:function em6(){},
em7:function em7(){},
enL:function enL(){},
enM:function enM(d,e){this.a=d
this.b=e},
enN:function enN(){},
enO:function enO(d){this.a=d},
enP:function enP(d,e){this.a=d
this.b=e},
eiL:function eiL(d,e){this.a=d
this.b=e},
ejQ:function ejQ(){},
ejR:function ejR(){},
ejS:function ejS(){},
ejV:function ejV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ejU:function ejU(d,e){this.a=d
this.b=e},
ejT:function ejT(d,e,f){this.a=d
this.b=e
this.c=f},
ell:function ell(d){this.a=d},
elk:function elk(){},
elm:function elm(d,e){this.a=d
this.b=e},
eln:function eln(d,e){this.a=d
this.b=e},
elj:function elj(d){this.a=d},
elo:function elo(d,e){this.a=d
this.b=e},
eli:function eli(d){this.a=d},
elp:function elp(d,e){this.a=d
this.b=e},
elh:function elh(d){this.a=d},
elq:function elq(d,e){this.a=d
this.b=e},
elg:function elg(d){this.a=d},
elr:function elr(d,e){this.a=d
this.b=e},
elf:function elf(d,e){this.a=d
this.b=e},
els:function els(d,e){this.a=d
this.b=e},
ele:function ele(d){this.a=d},
elt:function elt(d,e){this.a=d
this.b=e},
eld:function eld(d){this.a=d},
el6:function el6(d,e){this.a=d
this.b=e},
el7:function el7(d){this.a=d},
el8:function el8(d){this.a=d},
el5:function el5(d){this.a=d},
el9:function el9(d,e){this.a=d
this.b=e},
el4:function el4(d){this.a=d},
ela:function ela(d,e){this.a=d
this.b=e},
el3:function el3(d){this.a=d},
elb:function elb(d,e){this.a=d
this.b=e},
el2:function el2(d){this.a=d},
elc:function elc(d){this.a=d},
eke:function eke(d){this.a=d},
ekf:function ekf(d){this.a=d},
ekh:function ekh(d){this.a=d},
ek9:function ek9(d){this.a=d},
ek8:function ek8(d,e){this.a=d
this.b=e},
eka:function eka(d,e){this.a=d
this.b=e},
ekb:function ekb(d){this.a=d},
ekc:function ekc(d){this.a=d},
ekd:function ekd(d,e){this.a=d
this.b=e},
ekg:function ekg(d){this.a=d},
eow:function eow(d){this.a=d},
eox:function eox(d){this.a=d},
elw:function elw(d,e){this.a=d
this.b=e},
elv:function elv(d,e){this.a=d
this.b=e},
elu:function elu(d,e){this.a=d
this.b=e},
elx:function elx(d){this.a=d},
ely:function ely(d){this.a=d},
emV:function emV(d,e){this.a=d
this.b=e},
emW:function emW(d){this.a=d},
emX:function emX(d){this.a=d},
en7:function en7(d){this.a=d},
eni:function eni(d){this.a=d},
ent:function ent(d){this.a=d},
enA:function enA(d){this.a=d},
enB:function enB(d){this.a=d},
enC:function enC(d){this.a=d},
enD:function enD(d){this.a=d},
enE:function enE(d,e){this.a=d
this.b=e},
emY:function emY(d){this.a=d},
emZ:function emZ(d){this.a=d},
en_:function en_(d){this.a=d},
en0:function en0(d){this.a=d},
en1:function en1(d){this.a=d},
en2:function en2(d){this.a=d},
en3:function en3(d){this.a=d},
en4:function en4(d){this.a=d},
en5:function en5(d){this.a=d},
en6:function en6(d){this.a=d},
en8:function en8(d){this.a=d},
en9:function en9(d){this.a=d},
ena:function ena(d){this.a=d},
enb:function enb(d){this.a=d},
enc:function enc(d){this.a=d},
end:function end(d){this.a=d},
ene:function ene(d){this.a=d},
enf:function enf(d){this.a=d},
eng:function eng(d){this.a=d},
emL:function emL(d){this.a=d},
enh:function enh(d){this.a=d},
emT:function emT(d){this.a=d},
enj:function enj(d){this.a=d},
emS:function emS(d,e){this.a=d
this.b=e},
enk:function enk(d,e){this.a=d
this.b=e},
enl:function enl(d,e){this.a=d
this.b=e},
emR:function emR(d,e,f){this.a=d
this.b=e
this.c=f},
emH:function emH(d,e){this.a=d
this.b=e},
emU:function emU(d){this.a=d},
enF:function enF(d,e){this.a=d
this.b=e},
enH:function enH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
enG:function enG(d,e){this.a=d
this.b=e},
enm:function enm(d,e,f){this.a=d
this.b=e
this.c=f},
emQ:function emQ(d,e,f){this.a=d
this.b=e
this.c=f},
emG:function emG(d,e,f){this.a=d
this.b=e
this.c=f},
emE:function emE(d,e){this.a=d
this.b=e},
enn:function enn(d,e){this.a=d
this.b=e},
emP:function emP(d,e){this.a=d
this.b=e},
emF:function emF(d,e){this.a=d
this.b=e},
emD:function emD(d,e){this.a=d
this.b=e},
eno:function eno(d){this.a=d},
emO:function emO(d){this.a=d},
enp:function enp(d){this.a=d},
enq:function enq(d){this.a=d},
enr:function enr(d){this.a=d},
ens:function ens(d){this.a=d},
emN:function emN(d){this.a=d},
enu:function enu(d){this.a=d},
env:function env(d){this.a=d},
enw:function enw(d,e){this.a=d
this.b=e},
emM:function emM(d){this.a=d},
enx:function enx(d,e){this.a=d
this.b=e},
emK:function emK(d){this.a=d},
eny:function eny(d,e){this.a=d
this.b=e},
emJ:function emJ(d){this.a=d},
enz:function enz(d,e){this.a=d
this.b=e},
emI:function emI(d){this.a=d},
ejj:function ejj(d,e,f){this.a=d
this.b=e
this.c=f},
eji:function eji(d,e){this.a=d
this.b=e},
eo1:function eo1(d,e){this.a=d
this.b=e},
eo0:function eo0(d,e){this.a=d
this.b=e},
eo2:function eo2(d,e){this.a=d
this.b=e},
eo_:function eo_(d,e){this.a=d
this.b=e},
ekr:function ekr(d,e){this.a=d
this.b=e},
ekq:function ekq(d){this.a=d},
eks:function eks(d,e){this.a=d
this.b=e},
ekp:function ekp(d){this.a=d},
ekZ:function ekZ(){},
ekY:function ekY(){},
eoe:function eoe(d){this.a=d},
eod:function eod(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoc:function eoc(d,e){this.a=d
this.b=e},
eo7:function eo7(d,e){this.a=d
this.b=e},
eob:function eob(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eo8:function eo8(d,e){this.a=d
this.b=e},
eo3:function eo3(d){this.a=d},
eo4:function eo4(d){this.a=d},
eo5:function eo5(d){this.a=d},
eo6:function eo6(d){this.a=d},
eo9:function eo9(d,e){this.a=d
this.b=e},
eoa:function eoa(d,e){this.a=d
this.b=e},
eof:function eof(d){this.a=d},
ejJ:function ejJ(d){this.a=d},
ejI:function ejI(d,e,f){this.a=d
this.b=e
this.c=f},
ejH:function ejH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejw:function ejw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ejx:function ejx(d,e){this.a=d
this.b=e},
ejy:function ejy(d,e){this.a=d
this.b=e},
ejz:function ejz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejv:function ejv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejA:function ejA(d,e){this.a=d
this.b=e},
ejC:function ejC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejD:function ejD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eju:function eju(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejE:function ejE(d,e){this.a=d
this.b=e},
ejt:function ejt(d,e){this.a=d
this.b=e},
ejF:function ejF(d,e){this.a=d
this.b=e},
ejs:function ejs(d){this.a=d},
ejG:function ejG(d,e){this.a=d
this.b=e},
elA:function elA(d){this.a=d},
elz:function elz(d){this.a=d},
elB:function elB(d,e){this.a=d
this.b=e},
ekF:function ekF(d,e){this.a=d
this.b=e},
ekG:function ekG(d,e){this.a=d
this.b=e},
ekE:function ekE(d,e){this.a=d
this.b=e},
ekH:function ekH(d,e){this.a=d
this.b=e},
ekD:function ekD(d,e){this.a=d
this.b=e},
ekI:function ekI(d,e){this.a=d
this.b=e},
ekC:function ekC(d,e){this.a=d
this.b=e},
ekJ:function ekJ(d,e){this.a=d
this.b=e},
ekB:function ekB(d,e){this.a=d
this.b=e},
ekK:function ekK(d,e){this.a=d
this.b=e},
ekA:function ekA(d,e){this.a=d
this.b=e},
ekL:function ekL(d,e,f){this.a=d
this.b=e
this.c=f},
ekz:function ekz(d,e){this.a=d
this.b=e},
ekM:function ekM(d,e,f){this.a=d
this.b=e
this.c=f},
eky:function eky(d,e){this.a=d
this.b=e},
ekN:function ekN(d,e){this.a=d
this.b=e},
ekx:function ekx(d,e,f){this.a=d
this.b=e
this.c=f},
eku:function eku(d,e){this.a=d
this.b=e},
ekO:function ekO(d,e){this.a=d
this.b=e},
ekw:function ekw(d,e){this.a=d
this.b=e},
ekP:function ekP(d,e){this.a=d
this.b=e},
ekv:function ekv(d,e,f){this.a=d
this.b=e
this.c=f},
ekt:function ekt(d,e){this.a=d
this.b=e},
ekQ:function ekQ(d,e){this.a=d
this.b=e},
ekT:function ekT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eis:function eis(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
emx:function emx(d,e){this.a=d
this.b=e},
emv:function emv(d){this.a=d},
emw:function emw(d,e){this.a=d
this.b=e},
adN:function adN(d,e,f){this.a=d
this.b=e
this.c=f},
axc:function axc(d,e){this.c=d
this.a=e},
baD:function baD(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b2$=e
_.c=_.a=null},
cYl:function cYl(d){this.a=d},
cYk:function cYk(d){this.a=d},
baR:function baR(d,e){this.c=d
this.a=e},
cYH:function cYH(d){this.a=d},
cYI:function cYI(d){this.a=d},
IW:function IW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
baC:function baC(){this.d=!1
this.c=this.a=null},
cYi:function cYi(d){this.a=d},
cYe:function cYe(d){this.a=d},
cYj:function cYj(d){this.a=d},
cYd:function cYd(d){this.a=d},
cYh:function cYh(d){this.a=d},
cYf:function cYf(d){this.a=d},
cYg:function cYg(d,e){this.a=d
this.b=e},
OB:function OB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Zj:function Zj(d,e,f){this.c=d
this.d=e
this.a=f},
aCK:function aCK(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bq$=e
_.a7$=f
_.c=_.a=null},
epc:function epc(){},
ep2:function ep2(d){this.a=d},
epb:function epb(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep4:function ep4(d){this.a=d},
eoZ:function eoZ(d){this.a=d},
ep_:function ep_(d,e){this.a=d
this.b=e},
ep0:function ep0(d){this.a=d},
ep1:function ep1(d,e,f){this.a=d
this.b=e
this.c=f},
ep9:function ep9(){},
epa:function epa(d){this.a=d},
ep5:function ep5(d){this.a=d},
ep6:function ep6(d){this.a=d},
ep7:function ep7(d){this.a=d},
ep8:function ep8(d){this.a=d},
epd:function epd(d,e,f){this.a=d
this.b=e
this.c=f},
epf:function epf(d,e){this.a=d
this.b=e},
epe:function epe(d){this.a=d},
J2:function J2(d,e){this.c=d
this.a=e},
bpe:function bpe(d,e){this.b=d
this.a=e},
bfs:function bfs(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfr:function bfr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIq:function aIq(){},
aKs:function aKs(){},
buX:function buX(){},
aKt:function aKt(){},
fvZ(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fvZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wI.c3().L3(B.a(["pdf"],x.s),A.tj,!0),$async$fvZ)
case 3:q=e
if(q==null||J.ck(q.a)){u=null
w=1
break}t=J.fn(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bmx(s,"data:application/pdf;base64,"+A.cS.gct().aI(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fvZ,v)},
hVU(d){var w,v,u,t,s,r
try{w=B.jj(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cB(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kH(0,w).gM(0)
if(t>0){s=J.aP1(t,1,200)
return s}}catch(r){}return 1},
fvQ(d){return C.hVT(d)},
hVT(d){var w=0,v=B.j(x.T),u
var $async$fvQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fvQ,v)},
bAv(d,e,f,g){return C.hW2(d,e,f,g)},
hW2(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bAv=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e6(b6,x.co).gai(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hcD(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lF(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lF(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lF(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lF(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.rL()
f=B.Gn(g,null)
a7=B.L()
a7.r=A.qm.gp(0)
f.aX(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fx
b1.b=A.af
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.u((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.q4()
w=7
return B.b(a3.yL(800,h),$async$bAv)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hj(A.fS),$async$bAv)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.fa(A.dE.gaP(a5))
a7=A.cS.gct().aI(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a8(b5)
$.am.$1("[slides signature] "+B.t(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bAv,v)},
aOf(d,e,f){return C.hVR(d,e,f)},
hVR(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aOf=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aA:e
r.c=f==null?5.2:f
w=3
return B.b(B.ag9(d,e,f,new C.fvO(r,q),q,"Sign document"),$async$aOf)
case 3:if(!new B.e6(q,x.co).gai(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bAv(q,t,r.b,r.c),$async$aOf)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b_g(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOf,v)},
hW0(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.h5U(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.h5U(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b_(A.a.aT(A.o.fM(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b_(A.a.aT(A.o.fM(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.le&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.h5x(q.ay)+";border:2px solid "+C.h5x(q.ch)+'"></div>'
break
case 5:l=C.fQf(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gahN()
if(p==null)p=A.auC
n=B.T(p)
k=n.k("pG<1>")
j=new B.pG(p,0,8,k)
j.Gq(p,0,8,n.c)
j=new B.bW(j,j.gM(0),k.k("bW<aj.E>"))
k=k.k("aj.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
p=B.aJ(p,'"',e)
n=B.aJ(i,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aJ(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
h5x(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
h5U(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
bAt(d,e){var w=0,v=B.j(x.H)
var $async$bAt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.c9(null,null,!0,null,new C.fvX(e,C.hW0(e),d),d,null,!0,!0,x.H),$async$bAt)
case 2:return B.h(null,v)}})
return B.i($async$bAt,v)},
bAu(){var w=0,v=B.j(x.T),u,t,s
var $async$bAu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.FT(92,2400),$async$bAu)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fvQ(s),$async$bAu)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAu,v)},
aOg(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aOg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fRt(d),$async$aOg)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=X.fye(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOg,v)},
h_S(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b_g:function b_g(d,e,f){this.a=d
this.b=e
this.c=f},
fvO:function fvO(d,e){this.a=d
this.b=e},
fvX:function fvX(d,e,f){this.a=d
this.b=e
this.c=f},
fvU:function fvU(d){this.a=d},
fvV:function fvV(d,e,f){this.a=d
this.b=e
this.c=f},
fvW:function fvW(d,e,f){this.a=d
this.b=e
this.c=f},
hVS(d){return C.km(d.w)},
hVZ(d){var w,v,u,t
if(d.length===0||!A.d.dc(d,C.hXH()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
y8(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.hii()
if(w.b.test(u))return u
return null},
hcF(d,e,f){var w,v,u=C.hqQ(d),t=$.pb()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aD(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hW4(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.hc(w,d.b);v.C();){u=w.gU(w).y
t=C.y8(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fvM(d,e){var w,v=d.y,u=C.y8(v==null?"":v)
if(u!=null)return d.y=u
w=C.hW4(new B.a1(e,new C.fvN(d),B.T(e).k("a1<1>")))
v=d.x
return d.y=C.hcF(v==null?"":v,null,w)},
hW3(d){var w,v
if(d.length!==1)return null
w=A.d.gK(d)
if(!C.km(w.w))return null
v=w.y
return C.y8(v==null?"":v)},
hvd(){var w,v=$.pb(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"SL"+A.d.fS(u)},
UU(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$UU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c0(),$async$UU)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f0("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$UU)
case 8:r=e
if(r==null){u=B.U(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.a8(m)
$.am.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.U(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UU,v)},
UV(d){return C.hve(d)},
hve(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$UV=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c0(),$async$UV)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hz("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.Q(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,A.cF,null),$async$UV)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a8(p)
$.am.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UV,v)},
a6Q(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6Q=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c0(),$async$a6Q)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.UU(),$async$a6Q)
case 4:s=a6
r=C.y8(a2==null?"":a2)
if(r==null)r=a3!=null?C.hcF(a3,null,A.HI):null
q=x.N
p=B.aY(q)
for(o=J.di(s),n=J.aW(o.ghU(s)),m=x.f;n.C();){l=n.gU(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.y8(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdK(s),n=n.gai(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gU(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a0(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dG.aI(t)
g.n(0,"payload",A.cS.gct().aI(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.Q(Date.now(),0,!1).a5().ac())
if(D.RD.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.y8(J.k(q==null?"":q))
if(f==null)f=C.h_X(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.UV(s),$async$a6Q)
case 7:u=new B.aEa(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hvd()
n=r==null
d=n?C.h_X(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dG.aI(t)
q.n(0,"payload",A.cS.gct().aI(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.Q(Date.now(),0,!1).a5().ac())
if(D.RD.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.UV(s),$async$a6Q)
case 8:u=new B.aEa(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a6Q,v)},
h_X(d){var w,v,u=$.pb()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aD(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
apA(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$apA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c0(),$async$apA)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.UU(),$async$apA)
case 6:t=f
s=J.a7(t)
r=s.gM(t)
s.bn(t,new C.cbs(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.UV(t),$async$apA)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$apA,v)},
apz(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$apz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.y8(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c0(),$async$apz)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.UU(),$async$apz)
case 6:t=o.jo(f),t=t.gai(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gU(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.y8(J.k(q==null?"":q))===p){u=C.a6P(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apz,v)},
a6P(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a6P=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c0(),$async$a6P)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.UU(),$async$a6P)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aN(l.h(n,"usesRemaining"))
j=k==null?null:A.k.O(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{s=A.c4.c7(0,A.cB.aI(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.RD.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a0(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dV(B.a0(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.Q(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=7
return B.b(C.UV(p),$async$a6P)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a6P,v)},
hVY(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.Q(Date.now(),0,!1).a5().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("J<1,a3<n,@>>")
w=B.B(new B.J(d,new C.fvT(),w),w.k("aj.E"))
v.n(0,"decks",w)
return v},
fw0(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.Q(Date.now(),0,!1).a5().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ad())
return A.R.ao(w,null)}return A.R.ao(C.hVY(d==null?B.a([],x.D):d,f,g),null)},
fw_(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fw_=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a6Q(h,d,e,f,g),$async$fw_)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.y8(e==null?"":e)
u=new B.aDY(s,t)
w=1
break}t=A.dG.aI(h)
t=A.k1.gct().aI(t)
u=new B.aDY(C.y8(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fw_,v)},
fRv(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ab(q)===0)return!1
if(J.cZ(q,"NGMYSLIDESYNC2|"))return!0
if(J.cZ(q,"NGMYSLIDECODE|"))return!0
if(J.cZ(q,"NGMY_SL:"))return!0
if(J.eY(q,s)||J.eY(q,r))return!0
if(J.cZ(q,"{"))try{w=A.R.aG(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hW1(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fRv(v))return v
u=A.a.cG(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b_(v,u))
if(C.fRv(t))return t}s=A.a.cG(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b_(v,s))
if(C.fRv(t))return t}}return null},
fvP(d){var w,v,u,t=A.a.i(d)
if(J.ab(t)===0||J.cZ(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cZ(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c4.c7(0,A.cB.aI(J.mu(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hET(w)
return v}catch(u){v=B.a([],x.D)
return v}},
afV(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$afV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.apz(t[1]),$async$afV)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fvP(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.y8(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.apz(r),$async$afV)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fvP(s)
w=1
break}u=B.a([],x.D)
w=1
break
case 9:w=A.a.a0(q,"NGMYSLIDESYNC2|")?11:12
break
case 11:t=q.split("|")
w=t.length>=2?13:14
break
case 13:w=15
return B.b(C.a6P(t[1]),$async$afV)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fvP(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fvP(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afV,v)},
hET(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.RD.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fRs(C.UQ(B.a0(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d7(u,x.f)
t=B.cC(t,new C.f4Q(w),t.$ti.k("G.E"),x.I)
t=B.B(t,B.a2(t).k("G.E"))
return t}return B.a([],x.D)},
fRs(d,e){var w,v,u,t,s,r,q,p,o=d.ad()
o.n(0,"id",C.cB())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gU(u)
if(t.b(s)){r=Date.now()
q=$.iW
$.iW=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.UQ(B.a0(o,x.N,x.z))
if(e&&C.km(p.w))p.Q=new B.Q(Date.now(),0,!1).a5().bN(144e8).ac()
return p},
bAe(){var w=0,v=B.j(x.aT),u,t,s
var $async$bAe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.FS(),$async$bAe)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.afV(s),$async$bAe)
case 4:t=e
u=J.ck(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAe,v)},
fEy(d){var w=0,v=B.j(x.T),u,t
var $async$fEy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hQ(D.Vh,!0,"Dismiss",d,new C.fEz(),new C.fEA(),A.En,!0,x.N),$async$fEy)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eGX)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEy,v)},
hZK(d,e,f,g,h){return B.a4(d,!1).ci(B.eo(new C.fEB(h,e,g,f),!0,null,x.H))},
fvN:function fvN(d){this.a=d},
cbs:function cbs(d){this.a=d},
fvT:function fvT(){},
f4Q:function f4Q(d){this.a=d},
fEz:function fEz(){},
fEA:function fEA(){},
fEB:function fEB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
US:function US(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCI:function aCI(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eoJ:function eoJ(){},
eoF:function eoF(d,e){this.a=d
this.b=e},
eoI:function eoI(d,e){this.a=d
this.b=e},
eoG:function eoG(d){this.a=d},
eoH:function eoH(d){this.a=d},
eoK:function eoK(d){this.a=d},
eoL:function eoL(d){this.a=d},
eoO:function eoO(d){this.a=d},
eoP:function eoP(d){this.a=d},
eoN:function eoN(d){this.a=d},
eoQ:function eoQ(d){this.a=d},
eoM:function eoM(d){this.a=d},
eoR:function eoR(d,e){this.a=d
this.b=e},
eoE:function eoE(d,e){this.a=d
this.b=e},
eoD:function eoD(d,e){this.a=d
this.b=e},
UT:function UT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
big:function big(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eoS:function eoS(d,e){this.a=d
this.b=e},
eoT:function eoT(d){this.a=d},
eoU:function eoU(){},
eoV:function eoV(d){this.a=d},
eoW:function eoW(d,e){this.a=d
this.b=e},
aCF:function aCF(d){this.a=d},
aCG:function aCG(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eim:function eim(d){this.a=d},
eil:function eil(){},
ein:function ein(d){this.a=d},
eii:function eii(d){this.a=d},
eih:function eih(){},
eij:function eij(d){this.a=d},
eik:function eik(d){this.a=d},
bst:function bst(){},
apB:function apB(d){this.a=d},
aCJ:function aCJ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eoY:function eoY(d){this.a=d},
eoX:function eoX(d){this.a=d},
hJZ(){var w,v,u,t
for(v=0;v<4;++v){w=D.cUu[v]
try{if(Aa.bTW(w)){u=w
return u}}catch(t){}}return null},
Q9(d,e){return C.hSJ(d,e)},
hSJ(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Q9=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hJZ()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nO?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qd(c6,!0)
b6.toString
p=B.a4(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gK(c3)
b9=$.aw()
o=new B.eK(b8,b9)
n=new B.eK("Getting ready\u2026",b9)
m=new B.eK(0,b9)
l=B.o6(new C.fq7(c2,b7,o),!1,!1)
b6.ly(0,l)
b9=x.H
B.c9(null,A.db,!1,null,new C.fq8(n,m),c6,null,!0,!0,b9)
k=new C.fqc(b7)
j=new C.fqd()
i=null
t=4
b3=c2.a
h=Ag.aQw(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fH4(h,30)
e=B.a([],x.aK)
b3=x.z
i=Aa.aVj(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.GI.xO(i,"dataavailable",new C.fq9(e))
d=new B.bS(new B.bg($.bw,x.dT),x.b2)
A.GI.xO(i,"stop",new C.fqa(d))
J.agt(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Q9)
case 8:w=7
return B.b(c5.$1(d0),$async$Q9)
case 7:a0=d0
J.fH6(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.agt(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.agt(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Q9)
case 15:w=14
return B.b(c5.$1(d0),$async$Q9)
case 14:a0=d0
case 13:J.fH6(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.agt(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.Q(Date.now(),0,!1).bN(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcu()
else b3=!0
if(!b3){w=17
break}J.fH6(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fv,null,b9),$async$Q9)
case 18:w=16
break
case 17:J.agt(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.agt(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cL(0,A.nx),$async$Q9)
case 19:a5=A.d.gK(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aJ(c3,b3,"_"))
c0=B.mV(a7)
c0.download=B.t(J.ab(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Ks(b0)
J.lL(b0)
B.bN(A.nw,new C.fqb(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a8(c4)
try{if(i!=null&&i.state!=="inactive")i.stop()}catch(c8){}c3=B.t(b1)
u="Could not make the video: "+c3
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
J.lL(l)
if(p.p8())p.eF()
c3=o
b3=$.aw()
c3.shM(b3)
J.aP6(c3,0)
c3=n
c3.shM(b3)
J.aP6(c3,0)
c3=m
c3.shM(b3)
J.aP6(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Q9,v)},
fq7:function fq7(d,e,f){this.a=d
this.b=e
this.c=f},
fq6:function fq6(){},
fq8:function fq8(d,e){this.a=d
this.b=e},
fqc:function fqc(d){this.a=d},
fqd:function fqd(){},
fq9:function fq9(d){this.a=d},
fqa:function fqa(d){this.a=d},
fqb:function fqb(d){this.a=d},
bsF:function bsF(d,e,f){this.c=d
this.d=e
this.a=f},
f_b:function f_b(){},
f_c:function f_c(){},
cbP(d){var w=0,v=B.j(x.at),u,t,s
var $async$cbP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.apL(d,A.yF),$async$cbP)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.by(new B.Q(Date.now(),0,!1))
if(t.a<0){u=A.bw
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cbP,v)},
cbO(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a6w:function a6w(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bi_:function bi_(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e6V:function e6V(d){this.a=d},
e6T:function e6T(d){this.a=d},
e6U:function e6U(d,e){this.a=d
this.b=e},
a7o:function a7o(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.o3$=k
_.o4$=l
_.o5$=m
_.nr$=n},
a7p:function a7p(d,e){this.a=d
this.b=e},
b0U:function b0U(){},
ce0:function ce0(){},
ce1:function ce1(){},
ce2:function ce2(d,e,f,g,h,i,j,k,l){var _=this
_.as=d
_.a=e
_.b=f
_.c=g
_.f=h
_.r=i
_.w=$
_.x=j
_.y=k
_.z=l},
hji(d){return new C.agL(d)},
a1F:function a1F(){},
agL:function agL(d){this.a=d},
aPr:function aPr(){},
av5:function av5(d,e){this.d=d
this.b=e
this.a=null},
aQV:function aQV(d){this.b=d
this.a=null},
flf(d,e){var w=0,v=B.j(x.H)
var $async$flf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gwZ().KN(d,e),$async$flf)
case 2:B.fyk()
return B.h(null,v)}})
return B.i($async$flf,v)},
h9W(d,e){return(A.qW[(d^e)&255]^A.o.aA(d,8))>>>0},
fiU(d,e,f,g,h,i){var w=C.hP5(d,A.da,f,null,A.cW,g,h,i)
return w},
hbO(d){var w=F.hcw(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hqQ(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oE.h(0,w)
if(v!=null)return v
for(u=A.oE.gdK(A.oE),u=u.gai(u);u.C();){t=u.gU(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hbW(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<33;++w)v+="- "+D.caw[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
byp(d,e){return C.hLI(d,e)},
hLI(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byp=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aSw(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cA(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jQ(o,"share",[p]),x.H),$async$byp)
case 7:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$byp,v)},
fRm(){var w=0,v=B.j(x.y),u,t,s
var $async$fRm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fbO
s=$.bxX
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.byp(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fRm,v)},
bzK(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bzK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fbO
l=$.bxX
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.h6A()?3:4
break
case 3:w=5
return B.b(C.byp(m,k),$async$bzK)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bxY
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mV(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Ks(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bzK)
case 10:J.lL(q)
u=!0
w=1
break
t=2
w=9
break
case 7:t=6
j=s.pop()
u=!1
w=1
break
w=9
break
case 6:w=2
break
case 9:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bzK,v)},
fRd(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fRd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bxY
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lj.ue(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fRd,v)},
fRu(d,e){var w=0,v=B.j(x.H),u,t
var $async$fRu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.lj.ue(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fRu,v)},
b_R(d,e){var w=0,v=B.j(x.y),u
var $async$b_R=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b_T(d,e),$async$b_R)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b_S(d),$async$b_R)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_R,v)}},D,H,Ak,A6,W,U,O,A7,G,F,E,P,X,Y,Z,Al,A8,K,A_,N,V,L,A9,Am,A0,An,Ao,Aa,Ab,Ap,Ac,Ad,Ae,Aq,Ar,Q,As,I,At,Au,R,S,M,A1,A2,A3,Av,Af
J=c[1]
B=c[0]
A=c[2]
A4=c[133]
Ag=c[55]
T=c[183]
A5=c[50]
Ah=c[104]
Ai=c[47]
Aj=c[194]
C=a.updateHolder(c[4],C)
D=c[181]
H=c[87]
Ak=c[34]
A6=c[186]
W=c[182]
U=c[171]
O=c[185]
A7=c[97]
G=c[152]
F=c[29]
E=c[184]
P=c[106]
X=c[27]
Y=c[140]
Z=c[110]
Al=c[148]
A8=c[112]
K=c[187]
A_=c[58]
N=c[162]
V=c[72]
L=c[121]
A9=c[115]
Am=c[189]
A0=c[95]
An=c[82]
Ao=c[85]
Aa=c[51]
Ab=c[158]
Ap=c[33]
Ac=c[70]
Ad=c[105]
Ae=c[193]
Aq=c[195]
Ar=c[192]
Q=c[64]
As=c[190]
I=c[137]
At=c[149]
Au=c[196]
R=c[45]
S=c[188]
M=c[169]
A1=c[191]
A2=c[90]
A3=c[54]
Av=c[168]
Af=c[63]
C.nE.prototype={
uz(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tq(t,v)
return new C.nE(t===0?!1:w,v,t)},
bHC(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Cn()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tq(w,u)
return new C.nE(r===0?!1:s,u,r)},
bI1(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Cn()
w=o-d
if(w<=0)return p.a?$.fSQ():$.Cn()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tq(w,u)
q=new C.nE(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aB(0,$.a1q())
return q},
dS(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.S(B.dH("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bHC(v)
u=w+v+1
t=new Uint16Array(u)
C.h3d(r.b,w,e,t)
w=r.a
s=C.tq(u,t)
return new C.nE(s===0?!1:w,t,s)},
m6(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.S(B.dH("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bI1(v)
t=w-v
if(t<=0)return n.a?$.fSQ():$.Cn()
s=n.b
r=new Uint16Array(t)
C.hAR(s,w,e,r)
w=n.a
q=C.tq(t,r)
p=new C.nE(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dS(1,u)-1)!==0)return p.aB(0,$.a1q())
for(o=0;o<v;++o)if(s[o]!==0)return p.aB(0,$.a1q())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cBE(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a6r(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a6r(t,e)
if(s===0)return $.Cn()
if(r===0)return t.a===e?t:t.uz(0)
w=s+1
v=new Uint16Array(w)
C.hAP(t.b,s,d.b,r,v)
u=C.tq(w,v)
return new C.nE(u===0?!1:e,v,u)},
Gr(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Cn()
w=d.c
if(w===0)return t.a===e?t:t.uz(0)
v=new Uint16Array(s)
C.b7S(t.b,s,d.b,w,v)
u=C.tq(s,v)
return new C.nE(u===0?!1:e,v,u)},
buO(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tq(r,u)
return new C.nE(!1,u,s)},
buN(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tq(u,r)
return new C.nE(!1,r,v)},
buP(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tq(p,m)
return new C.nE(s!==0,m,s)},
Tv(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Cn()
w=t.a
if(w===e.a){if(w){w=$.a1q()
return t.Gr(w,!0).buP(e.Gr(w,!0),!0).a6r(w,!0)}return t.buO(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.buN(v.Gr($.a1q(),!1),!1)},
ae(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a6r(e,v)
if(C.cBE(u.b,t,e.b,w)>=0)return u.Gr(e,v)
return e.Gr(u,!v)},
aB(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uz(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a6r(e,v)
if(C.cBE(u.b,t,e.b,w)>=0)return u.Gr(e,v)
return e.Gr(u,!v)},
aK(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Cn()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h3e(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tq(w,t)
return new C.nE(q===0?!1:r,t,q)},
bHB(d){var w,v,u,t
if(this.c<d.c)return $.Cn()
this.aOG(d)
w=$.fMr.c3()-$.avP.c3()
v=C.fMt($.fMq.c3(),$.avP.c3(),$.fMr.c3(),w)
u=C.tq(w,v)
t=new C.nE(!1,v,u)
return this.a!==d.a&&u>0?t.uz(0):t},
cio(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aOG(d)
w=C.fMt($.fMq.c3(),0,$.avP.c3(),$.avP.c3())
v=C.tq($.avP.c3(),w)
u=new C.nE(!1,w,v)
if($.fMs.c3()>0)u=u.m6(0,$.fMs.c3())
return t.a&&u.c>0?u.uz(0):u},
aOG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h3a&&d.c===$.h3c&&g.b===$.h39&&d.b===$.h3b)return
w=d.b
v=d.c
u=16-A.o.gaib(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h38(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h38(g.b,f,u,r)}else{r=C.fMt(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fMu(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cBE(r,q,n,m)>=0){k&2&&B.ai(r)
r[q]=1
C.b7S(r,l,n,m,r)}else{k&2&&B.ai(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b7S(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hAQ(p,r,i);--o
C.h3e(h,j,0,r,o,s)
if(r[i]<h){m=C.fMu(j,s,o,n)
C.b7S(r,l,n,m,r)
while(--h,r[i]<h)C.b7S(r,l,n,m,r)}--i}$.h39=g.b
$.h3a=f
$.h3b=w
$.h3c=v
$.fMq.b=r
$.fMr.b=l
$.avP.b=s
$.fMs.b=u},
gX(d){var w,v,u,t=new C.cBF(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cBG().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nE&&this.aL(0,e)===0},
rH(d,e){return this.aL(0,e)>0},
O(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
ut(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gaib(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cBH(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cBI(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kY(A.aG.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uz(0):r
while(v.c>1){u=$.hge()
if(u.c===0)B.ba(D.b_g)
t=v.cio(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bHB(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).fS(0)},
$iaQa:1,
$ihC:1}
C.aPB.prototype={
J(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gM(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cFR(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gK(d){return A.d.gK(this.a)},
gam(d){return A.d.gam(this.a)},
gal(d){return this.a.length===0},
gck(d){return this.a.length!==0},
gai(d){var w=this.a
return new J.jT(w,w.length,B.T(w).k("jT<1>"))}}
C.QM.prototype={
cNN(){var w,v
if(this.as==null)this.b9e()
w=this.as
v=w==null?null:w.amU()
return v==null?null:v.eA()},
b9e(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.amU().eA()
this.as=new C.bLh(v)}},
gY(d){return this.at}}
C.a2B.prototype={
a4(){return"CompressionType."+this.b}}
C.bFk.prototype={
eo(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cn()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dS(v,u)+(s.b&A.ye[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cn()}w=A.o.dS(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fv(u,t)&A.ye[d])
s.c=t}return v}}
C.bDG.prototype={
cE7(d,e){var w,v,u,t,s,r=this,q=new C.bFk(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eo(8)!==66||q.eo(8)!==90||q.eo(8)!==104)return!1
w=r.a=q.eo(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cgJ(q)
if(t<0)return!1
if(t===0){q.eo(8)
q.eo(8)
q.eo(8)
q.eo(8)
s=r.cgM(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eo(8)
q.eo(8)
q.eo(8)
q.eo(8)
return!0}}return!0},
cgJ(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eo(8)
if(t!==D.d8E[u])v=!1
if(t!==D.cOq[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cgM(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eo(1),d2=((d3.eo(8)<<8|d3.eo(8))<<8|d3.eo(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eo(1)
v.$flags&2&&B.ai(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eo(1)
v.$flags&2&&B.ai(v)
v[t+s]=u}c9.bXE()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eo(3)
if(q<2||q>6)return-1
v=d3.eo(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eo(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.ai(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.ai(u)
u[w]=l}c9.fr=B.c1(6,$.hel(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eo(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eo(1)===0)break
i=d3.eo(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ai(v)
v[w]=i}}v=$.hek()
u=x.an
c9.y=B.c1(6,v,!1,u)
c9.z=B.c1(6,v,!1,u)
c9.Q=B.c1(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bTf(v[j],u[j],o[j],n[j],h,g,r)
v=c9.as
v.$flags&2&&B.ai(v)
v[j]=h}e=c9.fx+1
v=c9.a
v===$&&B.c()
d=1e5*v
c9.at=new Int32Array(256)
v=new Uint8Array(4096)
c9.f=v
u=new Int32Array(16)
c9.r=u
for(a0=4095,a1=15;a1>=0;--a1){for(o=a1*16,a2=15;a2>=0;--a2){v[a0]=o+a2;--a0}u[a1]=a0+1}c9.ay=0
c9.ch=-1
a3=c9.arI(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.arI(d3)}while(a3===0||a3===1);++a5
v=c9.e
v===$&&B.c()
a7=v[c9.f[c9.r[0]]]
v=c9.at
u=v[a7]
v.$flags&2&&B.ai(v)
v[a7]=u+a5
for(v=c9.b;a5>0;){if(a4>=d)return-1
v===$&&B.c()
v.$flags&2&&B.ai(v)
v[a4]=a7;++a4;--a5}continue}else{if(a4>=d)return-1
a8=a3-1
v=c9.r
u=c9.f
if(a8<16){a9=v[0]
a7=u[a9+a8]
for(v=u.$flags|0;a8>3;){b0=a9+a8
o=b0-1
n=u[o]
v&2&&B.ai(u)
u[b0]=n
n=b0-2
u[o]=u[n]
o=b0-3
u[n]=u[o]
u[o]=u[b0-4]
a8-=4}while(a8>0){o=a9+a8
n=u[o-1]
v&2&&B.ai(u)
u[o]=n;--a8}v&2&&B.ai(u)
u[a9]=a7}else{b1=A.o.an(a8,16)
b2=A.o.F(a8,16)
a9=v[b1]+b2
a7=u[a9]
for(o=u.$flags|0;n=v[b1],a9>n;a9=b3){b3=a9-1
n=u[b3]
o&2&&B.ai(u)
u[a9]=n}v.$flags&2&&B.ai(v)
v[b1]=n+1
while(b1>0){v[b1]=v[b1]-1
n=v[b1];--b1
b4=u[v[b1]+16-1]
o&2&&B.ai(u)
u[n]=b4}v[0]=v[0]-1
n=v[0]
o&2&&B.ai(u)
u[n]=a7
if(v[0]===0)for(a0=4095,a1=15;a1>=0;--a1){for(a2=15;a2>=0;--a2){u[a0]=u[v[a1]+a2];--a0}v[a1]=a0+1}}v=c9.at
u=c9.e
u===$&&B.c()
o=u[a7]
n=v[o]
v.$flags&2&&B.ai(v)
v[o]=n+1
n=c9.b
n===$&&B.c()
u=u[a7]
n.$flags&2&&B.ai(n)
n[a4]=u;++a4
a3=c9.arI(d3)
continue}}if(d2>=a4)return-1
for(v=c9.at,w=0;w<=255;++w){u=v[w]
if(u<0||u>a4)return-1}v=c9.dy=new Int32Array(257)
v[0]=0
for(u=c9.at,w=1;w<=256;++w)v[w]=u[w-1]
for(w=1;w<=256;++w)v[w]=v[w]+v[w-1]
for(w=0;w<=256;++w){u=v[w]
if(u<0||u>a4)return-1}for(w=1;w<=256;++w)if(v[w-1]>v[w])return-1
for(u=c9.b,w=0;w<a4;++w){u===$&&B.c()
a7=u[w]&255
o=v[a7]
n=u[o]
u.$flags&2&&B.ai(u)
u[o]=(n|w<<8)>>>0
v[a7]=v[a7]+1}u===$&&B.c()
b5=u[d2]>>>8
v=d1!==0
if(v){if(b5>=1e5*c9.a)return-1
b5=u[b5]
b6=b5>>>8
b7=b5&255^0
b5=b6
b8=618
b9=1}else{if(b5>=1e5*c9.a)return d0
b5=u[b5]
b7=b5&255
b5=b5>>>8
b8=0
b9=0}c0=a4+1
c1=d0
if(v)for(c2=0,c3=0,c4=1;;c3=b7,b7=c6){for(v=c3&255;;){if(c2===0)break
d4.bF(c3)
c1=(c1<<8^D.Gd[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Gf[b9];++b9
if(b9===512)b9=0}--b8
u=b8===1?1:0
c5=b5&255^u;++c4
c2=1
if(c4===c0){c6=b7
b5=b6
continue}if(c5!==b7){c6=c5
b5=b6
continue}b5=v[b6]
b6=b5>>>8
if(b8===0){b8=D.Gf[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=2
continue}if(c5!==b7){c6=c5
b5=b6
c2=2
continue}b5=v[b6]
b6=b5>>>8
if(b8===0){b8=D.Gf[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Gf[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Gf[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bF(c3)
c1=c1<<8^D.Gd[c1>>>24&255^v];--c2}d4.bF(c3)
c1=(c1<<8^D.Gd[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bF(c7)
c1=(c1<<8^D.Gd[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bF(c7)
c1=(c1<<8^D.Gd[c1>>>24&255^c7&255])>>>0
c8=c7
continue}if(b5>=v)return-1
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
if(c4===c0){c8=c7
c2=2
continue}if(c5!==c7){c8=c5
c2=2
continue}if(b5>=v)return-1
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
if(c4===c0){c8=c7
c2=3
continue}if(c5!==c7){c8=c5
c2=3
continue}if(b5>=v)return-1
b5=u[b5]
b6=b5>>>8
c2=(b5&255)+4
if(b6>=v)return-1
b5=u[b6]
c8=b5&255
b5=b5>>>8
c4=c4+1+1}return c1},
arI(d){var w,v,u,t,s=this,r=s.ay
if(r===0){r=++s.ch
w=s.ax
w===$&&B.c()
if(r>=w)return-1
w=s.ay=50
v=s.x
v===$&&B.c()
r=s.CW=v[r]
v=s.as
v===$&&B.c()
s.cx=v[r]
v=s.y
v===$&&B.c()
s.cy=v[r]
v=s.Q
v===$&&B.c()
s.db=v[r]
v=s.z
v===$&&B.c()
s.dx=v[r]
r=w}s.ay=r-1
u=s.cx
t=d.eo(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eo(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bTf(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
for(w=f.$flags|0,v=h,u=0;v<=i;++v)for(t=0;t<j;++t)if(g[t]===v){w&2&&B.ai(f)
f[u]=t;++u}for(w=e.$flags|0,v=0;v<23;++v){w&2&&B.ai(e)
e[v]=0}for(v=0;v<j;++v){s=g[v]+1
r=e[s]
w&2&&B.ai(e)
e[s]=r+1}for(v=1;v<23;++v){s=e[v]
r=e[v-1]
w&2&&B.ai(e)
e[v]=s+r}for(s=d.$flags|0,v=0;v<23;++v){s&2&&B.ai(d)
d[v]=0}for(v=h,q=0;v<=i;v=p){p=v+1
q+=e[p]-e[v]
s&2&&B.ai(d)
d[v]=q-1
q=q<<1>>>0}for(v=h+1;v<=i;++v){s=d[v-1]
r=e[v]
w&2&&B.ai(e)
e[v]=(s+1<<1>>>0)-r}},
bXE(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ai(v)
v[u]=w}}}}
C.ctP.prototype={
aFg(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bKH(e)
if(q<0)return
e.c=q
if(e.aJ()!==101010256)return
e.aU()
e.aU()
e.aU()
e.aU()
r.f=e.aJ()
r.r=e.aJ()
w=e.aU()
if(w>0)e.aFj(w,!1)
r.ch6(e)
q=r.r
v=r.f
u=e.aIc(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aJ()!==33639248)break
s=new C.b6y()
s.cNM(0,u,e,f)
q.push(s)}},
ch6(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a64(20,r)
if(w.aJ()!==117853008){d.c=s
return}w.aJ()
v=w.rt()
w.aJ()
d.c=v
if(d.aJ()!==101075792){d.c=s
return}d.rt()
d.aU()
d.aU()
d.aJ()
d.aJ()
d.rt()
d.rt()
u=d.rt()
t=d.rt()
this.f=u
this.r=t
d.c=s},
bKH(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a64(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.akk(A.hR)
o.aJt(r.eA(),A.hR,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aJ()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.ctN.prototype={}
C.avt.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.ctQ.prototype={
aFg(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aJ()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aB0.h(0,e.aU())
o.c=w==null?D.Kw:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aJ()
o.r=e.aJ()
o.w=e.aJ()
v=e.aU()
u=e.aU()
o.x=e.alG(v)
o.y=e.h5(u).eA()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aQn:D.CN
o.ay=f
o.Q=e.h5(t)
if(o.at!==D.CN&&u>2){w=o.y
w.toString
s=B.qT(w,A.hR,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.alG(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aQo
o.ax=new C.ctN(r,q)
w=D.aB0.h(0,q)
o.c=w==null?D.Kw:w}}}if((o.b&8)!==0){p=e.aJ()
if(p===134695760)o.f=e.aJ()
else o.f=p
o.r=e.aJ()
o.w=e.aJ()}},
gM(d){return this.biy().length},
amU(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qT(new Uint8Array(0),A.hR,q,q)
w=r.at
if(w!==D.CN)if(p.gM(0)<=0)r.at=D.CN
else{if(w===D.aQn){p=r.bFW(p)
r.Q=p}else if(w===D.aQo){p=r.bFz(p)
r.Q=p}r.at=D.CN}w=r.c
if(w===D.ae_){v=p.c
u=B.de()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.p0.AQ(p.eA(),!0,!1)
else{t=B.a7d(A.hR,r.w)
p=r.Q
p.toString
A.p0.a2n(p,t,!0,!1)
u.b=t.G_()}r.Q.c=v
return B.qT(u.bb(),A.hR,q,q)}else if(w===D.ae0){s=B.a7d(A.hR,32768)
p=r.Q
v=p.c
C.hjt().cE7(p,s)
u=s.G_()
r.Q.c=v
return B.qT(u,A.hR,q,q)}else return B.qT(p.eA(),A.hR,q,q)},
biy(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eA()},
u(d){return this.x},
b5c(d){var w=this.ch,v=C.IS(C.h9W(w[0].O(0),d))
w[0]=v
v=w[1].ae(0,v.Tv(0,C.IS(255)))
w[1]=v
w[1]=v.aK(0,C.IS(134775813)).ae(0,C.IS(1)).Tv(0,C.IS(4294967295))
w[2]=C.IS(C.h9W(w[2].O(0),w[1].m6(0,24).O(0)))},
aO6(){var w=(this.ch[2].Tv(0,C.IS(65535)).O(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bFW(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qT(new Uint8Array(0),A.hR,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b5c(u[v.c++]^r.aO6())}t=r.Q.eA()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aO6()
r.b5c(s)
u&2&&B.ai(t)
t[w]=s}return B.qT(t,A.hR,q,q)},
bFz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h5(8).eA()
v=16}else if(k===2){w=d.h5(12).eA()
v=24}else{w=d.h5(16).eA()
v=32}u=d.h5(2).eA()
t=d.h5(d.gM(0)-10)
s=d.h5(10)
r=t.eA()
k=this.ay
k.toString
q=C.hAw(k,w,v)
p=new Uint8Array(B.cp(A.aG.dl(q,0,v)))
k=v*2
o=new Uint8Array(B.cp(A.aG.dl(q,v,k)))
if(!C.h2E(A.aG.dl(q,k,k+2),u))throw B.S(B.fk("password error"))
k=new Uint8Array(16)
n=new C.bCg(k,new Uint8Array(16),p)
k=x.S
m=J.a3Z(0,k)
m=n.r=new C.cdQ(m)
m.c=!0
m.b=m.bhR(!0,new C.ar8(p))
if(m.c)m.d=B.bl(D.nM,!0,k)
else m.d=B.bl(D.y7,!0,k)
l=C.h0Q(C.h0S(),64)
l.bby(new C.ar8(o))
n.w=l
n.cNk(r,0,r.length)
k=s.eA()
m=n.x
m===$&&B.c()
if(!C.h2E(k,m))throw B.S(B.fk("macs don't match"))
return B.qT(r,A.hR,null,null)}}
C.b6y.prototype={
cNM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aU()
e.aU()
e.aU()
e.aU()
e.aU()
e.aU()
e.aJ()
n.w=e.aJ()
n.x=e.aJ()
w=e.aU()
v=e.aU()
u=e.aU()
n.y=e.aU()
e.aU()
n.Q=e.aJ()
n.as=e.aJ()
if(w>0)n.at=e.alG(w)
if(v>0){t=e.h5(v).eA()
n.ax=t
if(v>=4){s=B.qT(t,A.hR,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a64(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rt()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rt()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rt()
p-=8}if(p>=4&&n.y===65535)n.y=o.aJ()}}}}if(u>0)e.alG(u)
f.c=n.as
t=new C.ctQ(D.Kw,n,D.CN,B.a([C.IS(0),C.IS(0),C.IS(0)],x.f3))
n.ch=t
t.aFg(0,f,g)},
u(d){return this.at}}
C.ctO.prototype={
cE8(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.ctP(B.a([],x.fT))
this.a=g
g.aFg(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aPB(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.QM(o,A.o.an(Date.now(),1000),0):C.fUc(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fUc(o,q.w,q)
if(k.as==null)k.b9e()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.akk(A.hR)
j.aJt(o,A.hR,h,h)}i=j==null?h:j.eA()
if(i!=null)new B.Jx(!1).H1(i,0,h,!0)}}return v}}
C.bCg.prototype={
cNk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.BK(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hjc(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dH("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dH("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bJ6(u,0,w,0,o)}else{o===$&&B.c()
q.bG_(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ai(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.K8(w,0)
m.x=A.aG.dl(m.x,0,10)
w=m.w
l=w.a
l.li(0)
w=w.d
w===$&&B.c()
l.BK(0,w,0,w.length)
return f}}
C.cdV.prototype={}
C.cdZ.prototype={}
C.cdT.prototype={}
C.ar8.prototype={}
C.cdY.prototype={
cEn(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.eg(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bby(new C.ar8(A.aG.fG(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bK4(n.a,n.b,t,s,r)
r+=v}A.aG.hf(f,g,g+w,s)
return o.a.c},
bK4(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.S(B.dH("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.BK(0,d,0,d.length)
v.BK(0,f,0,4)
u=m.c
u===$&&B.c()
w.K8(u,0)
u=m.c
A.aG.hf(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.BK(0,s,0,s.length)
w.K8(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ai(g)
g[p]=o^n}}}}
C.cdU.prototype={}
C.cdS.prototype={}
C.ar9.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.ar9){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rH(d,e){var w=this.a
w===$&&B.c()
w=A.o.rH(w,e.gbTw())
if(!w)e.gbTw()
return w},
aHF(d,e){this.a=0
this.b=d},
rL(d){return this.aHF(d,null)},
aIf(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fc(""),u=w.a
u===$&&B.c()
w.aY9(v,u)
u=w.b
u===$&&B.c()
w.aY9(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aY9(d,e){var w,v=A.o.fM(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bp(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cdX.prototype={
li(d){var w,v=this
v.a.rL(0)
v.c=0
A.aG.hm(v.b,0,4,0)
v.w=0
w=v.r
A.d.hm(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
amo(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ai(u)
u[t]=d&255
if(w===4){v.aZE(u,0)
v.c=0}v.a.aIf(1)},
BK(d,e,f,g){var w=this.cfB(e,f,g)
f+=w
g-=w
w=this.cfC(e,f,g)
this.cfs(e,f+w,g-w)},
K8(d,e){var w,v=this,u=C.h0R(v.a),t=u.a
t===$&&B.c()
t=C.fRY(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fRY(w,3)
v.cfw()
v.cft(u)
v.aqy()
v.c9K(d,e)
v.li(0)
return 20},
aZE(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nP(A.aG.gaP(d),d.byteOffset,d.length).getUint32(e,A.i2===w.d)
if(w.w===16)w.aqy()},
aqy(){this.cNj()
this.w=0
A.d.hm(this.r,0,16,0)},
cfs(d,e,f){while(f>0){this.amo(d[e]);++e;--f}},
cfC(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aZE(d,e)
e+=4
f-=4
w.aIf(4)
v+=4}return v},
cfB(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.amo(d[e]);++e;--f;++v}return v},
cfw(){this.amo(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.amo(0)}},
cft(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.aqy()
u=v.d
switch(u){case A.i2:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.De:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.S(B.bd("Invalid endianness: "+u.u(0)))}},
c9K(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i2===this.d,s=0;s<w;++s){r=v[s]
q=J.nP(A.aG.gaP(d),d.byteOffset,u)
q.$flags&2&&B.ai(q,11)
q.setUint32(e+s*4,r,t)}},
gdj(d){return this.f}}
C.ce_.prototype={
cNj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pP[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pP[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pP[30]
r=((r&i)<<30|r>>>2)>>>0
m=j+1
p=p+(((o&k)<<5|o>>>27)>>>0)+((n&r|~n&q)>>>0)+w[j]+1518500249>>>0
n=((n&i)<<30|n>>>2)>>>0
j=m+1
q=q+(((p&k)<<5|p>>>27)>>>0)+((o&n|~o&r)>>>0)+w[m]+1518500249>>>0
o=((o&i)<<30|o>>>2)>>>0
m=j+1
r=r+(((q&k)<<5|q>>>27)>>>0)+((p&o|~p&n)>>>0)+w[j]+1518500249>>>0
p=((p&i)<<30|p>>>2)>>>0
j=m+1
n=n+(((r&k)<<5|r>>>27)>>>0)+((q&p|~q&o)>>>0)+w[m]+1518500249>>>0
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pP[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pP[30]
r=((r&i)<<30|r>>>2)>>>0
m=j+1
p=p+(((o&k)<<5|o>>>27)>>>0)+((n^r^q)>>>0)+w[j]+1859775393>>>0
n=((n&i)<<30|n>>>2)>>>0
j=m+1
q=q+(((p&k)<<5|p>>>27)>>>0)+((o^n^r)>>>0)+w[m]+1859775393>>>0
o=((o&i)<<30|o>>>2)>>>0
m=j+1
r=r+(((q&k)<<5|q>>>27)>>>0)+((p^o^n)>>>0)+w[j]+1859775393>>>0
p=((p&i)<<30|p>>>2)>>>0
j=m+1
n=n+(((r&k)<<5|r>>>27)>>>0)+((q^p^o)>>>0)+w[m]+1859775393>>>0
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pP[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pP[30]
r=((r&i)<<30|r>>>2)>>>0
m=j+1
p=p+(((o&k)<<5|o>>>27)>>>0)+((n&r|n&q|r&q)>>>0)+w[j]+2400959708>>>0
n=((n&i)<<30|n>>>2)>>>0
j=m+1
q=q+(((p&k)<<5|p>>>27)>>>0)+((o&n|o&r|n&r)>>>0)+w[m]+2400959708>>>0
o=((o&i)<<30|o>>>2)>>>0
m=j+1
r=r+(((q&k)<<5|q>>>27)>>>0)+((p&o|p&n|o&n)>>>0)+w[j]+2400959708>>>0
p=((p&i)<<30|p>>>2)>>>0
j=m+1
n=n+(((r&k)<<5|r>>>27)>>>0)+((q&p|q&o|p&o)>>>0)+w[m]+2400959708>>>0
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pP[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pP[30]
r=((r&i)<<30|r>>>2)>>>0
m=j+1
p=p+(((o&k)<<5|o>>>27)>>>0)+((n^r^q)>>>0)+w[j]+3395469782>>>0
n=((n&i)<<30|n>>>2)>>>0
j=m+1
q=q+(((p&k)<<5|p>>>27)>>>0)+((o^n^r)>>>0)+w[m]+3395469782>>>0
o=((o&i)<<30|o>>>2)>>>0
m=j+1
r=r+(((q&k)<<5|q>>>27)>>>0)+((p^o^n)>>>0)+w[j]+3395469782>>>0
p=((p&i)<<30|p>>>2)>>>0
j=m+1
n=n+(((r&k)<<5|r>>>27)>>>0)+((q^p^o)>>>0)+w[m]+3395469782>>>0
q=((q&i)<<30|q>>>2)>>>0}t[0]=s+n>>>0
t[1]=t[1]+r>>>0
t[2]=t[2]+q>>>0
t[3]=t[3]+p>>>0
t[4]=t[4]+o>>>0}}
C.cdW.prototype={
bby(d){var w,v,u,t,s=this,r=s.a
r.li(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.BK(0,w,0,v)
w=s.d
w===$&&B.c()
r.K8(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hf(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hm(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hf(w,0,u,s.d)
s.b6l(s.d,u,54)
s.b6l(s.e,u,92)
u=s.d
r.BK(0,u,0,u.length)},
K8(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.K8(s,w)
s=u.e
t.BK(0,s,0,s.length)
v=t.K8(d,e)
s=u.e
A.aG.hm(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.BK(0,s,0,s.length)
return v},
b6l(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ai(d)
d[v]=u^f}}}
C.cdR.prototype={}
C.cdQ.prototype={
a0J(d){return(D.nM[d&255]&255|(D.nM[d>>>8&255]&255)<<8|(D.nM[d>>>16&255]&255)<<16|D.nM[d>>>24&255]<<24)>>>0},
bhR(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.S(B.dH("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e0(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c1(4,0,!1,u)
switch(v){case 4:q=J.nP(A.aG.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a0J((m>>>8|(m&$.pP[24])<<24)>>>0)^D.cr6[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nP(A.aG.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
l=q.getUint32(16,!0)
k=q.getUint32(20,!0)
for(r=1,j=1;;){e=s[r]
e[0]=l
e[1]=k
i=j<<1
p=(p^f.a0J((k>>>8|(k&$.pP[24])<<24)>>>0)^j)>>>0
e[2]=p
o=(o^p)>>>0
e[3]=o
n=(n^o)>>>0
e=s[r+1]
e[0]=n
m=(m^n)>>>0
e[1]=m
l=(l^m)>>>0
e[2]=l
k=(k^l)>>>0
e[3]=k
j=i<<1
p=(p^f.a0J((k>>>8|(k&$.pP[24])<<24)>>>0)^i)>>>0
e=s[r+2]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m
r+=3
if(r>=13)break
l=(l^m)>>>0
k=(k^l)>>>0}break
case 8:q=J.nP(A.aG.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
l=q.getUint32(16,!0)
e=s[1]
e[0]=l
k=q.getUint32(20,!0)
e[1]=k
h=q.getUint32(24,!0)
e[2]=h
g=q.getUint32(28,!0)
e[3]=g
for(r=2,j=1;;j=i){i=j<<1
p=(p^f.a0J((g>>>8|(g&$.pP[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a0J(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.S(B.bd("Should never get here"))}return s},
bJ6(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nP(A.aG.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e5[a8&255]
u=D.e5[a9>>>8&255]
t=$.pP[8]
s=D.e5[b0>>>16&255]
r=$.pP[16]
q=D.e5[b1>>>24&255]
p=$.pP[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e5[a9&255]
s=D.e5[b0>>>8&255]
u=D.e5[b1>>>16&255]
v=D.e5[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e5[b0&255]
u=D.e5[b1>>>8&255]
s=D.e5[a8>>>16&255]
q=D.e5[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e5[b1&255]
a8=D.e5[a8>>>8&255]
a9=D.e5[a9>>>16&255]
b0=D.e5[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e5[n&255]
b0=D.e5[m>>>8&255]
a9=D.e5[l>>>16&255]
a8=D.e5[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e5[m&255]
b0=D.e5[l>>>8&255]
o=D.e5[b1>>>16&255]
s=D.e5[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e5[l&255]
o=D.e5[b1>>>8&255]
b0=D.e5[n>>>16&255]
u=D.e5[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e5[b1&255]
o=D.e5[n>>>8&255]
s=D.e5[m>>>16&255]
v=D.e5[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e5[a8&255]^C.nb(D.e5[a9>>>8&255],24)^C.nb(D.e5[b0>>>16&255],16)^C.nb(D.e5[b1>>>24&255],8)^b6[w][0]
m=D.e5[a9&255]^C.nb(D.e5[b0>>>8&255],24)^C.nb(D.e5[b1>>>16&255],16)^C.nb(D.e5[a8>>>24&255],8)^b6[w][1]
l=D.e5[b0&255]^C.nb(D.e5[b1>>>8&255],24)^C.nb(D.e5[a8>>>16&255],16)^C.nb(D.e5[a9>>>24&255],8)^b6[w][2]
b1=D.e5[b1&255]^C.nb(D.e5[a8>>>8&255],24)^C.nb(D.e5[a9>>>16&255],16)^C.nb(D.e5[b0>>>24&255],8)^b6[w][3]
a7=D.nM[n&255]
b0=D.nM[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nM[l>>>8&255]
a9=D.nM[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nM[b1>>>8&255]
h=D.nM[n>>>16&255]
g=D.nM[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nM[l>>>24&255]
s=s[3]
a1=J.nP(A.aG.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.ai(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nP(A.aG.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.ai(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nP(A.aG.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.ai(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nP(A.aG.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.ai(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bG_(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nP(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nP(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nP(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nP(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e4[a6&255]
v=D.e4[b0>>>8&255]
u=$.pP[8]
t=D.e4[a5>>>16&255]
s=$.pP[16]
r=D.e4[a4>>>24&255]
q=$.pP[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e4[a4&255]
t=D.e4[a6>>>8&255]
v=D.e4[b0>>>16&255]
w=D.e4[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e4[a5&255]
v=D.e4[a4>>>8&255]
t=D.e4[a6>>>16&255]
r=D.e4[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e4[b0&255]
a5=D.e4[a5>>>8&255]
a4=D.e4[a4>>>16&255]
a6=D.e4[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e4[p&255]
a6=D.e4[b0>>>8&255]
a4=D.e4[n>>>16&255]
a5=D.e4[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e4[o&255]
a4=D.e4[p>>>8&255]
a7=D.e4[b0>>>16&255]
t=D.e4[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e4[n&255]
a7=D.e4[o>>>8&255]
a5=D.e4[p>>>16&255]
v=D.e4[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e4[b0&255]
a7=D.e4[n>>>8&255]
t=D.e4[o>>>16&255]
w=D.e4[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e4[a6&255]^C.nb(D.e4[b0>>>8&255],24)^C.nb(D.e4[a5>>>16&255],16)^C.nb(D.e4[a4>>>24&255],8)^b5[a9][0]
o=D.e4[a4&255]^C.nb(D.e4[a6>>>8&255],24)^C.nb(D.e4[b0>>>16&255],16)^C.nb(D.e4[a5>>>24&255],8)^b5[a9][1]
n=D.e4[a5&255]^C.nb(D.e4[a4>>>8&255],24)^C.nb(D.e4[a6>>>16&255],16)^C.nb(D.e4[b0>>>24&255],8)^b5[a9][2]
b0=D.e4[b0&255]^C.nb(D.e4[a5>>>8&255],24)^C.nb(D.e4[a4>>>16&255],16)^C.nb(D.e4[a6>>>24&255],8)^b5[a9][3]
a4=D.y7[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.y7[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.y7[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.y7[o>>>8&255]
i=D.y7[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.y7[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nP(A.aG.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.ai(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bLg.prototype={}
C.bLh.prototype={
gM(d){var w=this.a.length
return w},
amU(){return B.qT(this.a,A.hR,null,null)}}
C.b86.prototype={
uv(d){return C.hDJ(d)}}
C.cnN.prototype={
LI(d){var w=d.w,v=Math.max(1,A.k.dG(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a8L(v,t+20,u+16,t,u,B.tA(d.x))},
n2(d){return!1}}
C.bM9.prototype={
cyA(d){if(this.b)throw B.S(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bMa(),x.E))},
mm(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.S(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mm)
case 6:w=5
return B.b(p.flf(f,r),$async$mm)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mm,v)}}
C.aua.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7b.prototype={
A(d,e){if(e==null)return!1
if(J.bL(e)!==B.b_(this))return!1
return e instanceof C.a7b&&e.a===this.a},
gX(d){return B.bp(B.b_(this),B.wm(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fp4)return"["+(w+B.e1(this.a))+"]"
return"[ObjectKey "+(w+B.e1(this.a))+"]"}}
C.aTW.prototype={
bZ(d){var w=new C.az1(!0,this.e,null,new B.dc(),B.cg())
w.bX()
w.scA(null)
return w},
c6(d,e){var w
x.cQ.a(e)
e.sy5(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aDU()}}}
C.az1.prototype={
sy5(d,e){return},
gp5(){var w=this.ab$
return w!=null},
gkP(){var w=this.ab$
return w!=null},
Lx(d){var w=d==null?B.fWy(null):d
w.sa3f(this.ak)
return w}}
C.a_D.prototype={
T(){return new C.aHp(B.aY(x.N))},
cLw(d){return this.d.$1(d)},
cJk(){return this.e.$0()}}
C.aHp.prototype={
a_(){this.a1()
this.O4()},
O4(){var w=0,v=B.j(x.H),u,t=this,s
var $async$O4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cJk(),$async$O4)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eYE(t,s))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
XD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a1<1>")
p=B.B(new B.a1(r,new C.eYI(t),q),q.k("G.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.eYJ(t))
w=3
return B.b(C.am4(p),$async$XD)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eYK(t,s,p))
w=4
return B.b(t.O4(),$async$XD)
case 4:case 1:return B.h(u,v)}})
return B.i($async$XD,v)},
a_K(d){return this.cjB(d)},
cjB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a_K=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.eYF(t))
s=J.q(d,"id")
w=3
return B.b(C.bWq(J.k(s==null?"":s)),$async$a_K)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.eYG(t))
w=1
break}q=C.fRs(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cLw(B.a([q],x.D)),$async$a_K)
case 4:if(t.c==null){w=1
break}t.m(new C.eYH(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a_K,v)},
O3(d,e){return this.bGo(0,e)},
bGo(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$O3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.eYz(q),r,null,!0,!0,x.y),$async$O3)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.eYA(t))
s=s.h(e,"id")
w=4
return B.b(C.am3(J.k(s==null?"":s)),$async$O3)
case 4:if(t.c==null){w=1
break}t.m(new C.eYB(t))
w=5
return B.b(t.O4(),$async$O3)
case 5:case 1:return B.h(u,v)}})
return B.i($async$O3,v)},
cxE(d){var w=B.bi(d),v=w==null?null:w.bQ()
if(v==null)return""
return A.i8[B.bF(v)-1]+" "+B.bP(v)},
aNY(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.N3,A.n),w,e,w,w,w,w,w,e)},
aNX(d){return this.aNY(d,44)},
b3A(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.N3:u,r=B.m(14),q=B.V(e,t?A.c:A.ay,u,u,u,17),p=x.p
q=B.a([q,L.HV,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.ay,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.HV,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.brM,u,u,u)],p))}return B.D(B.aE(A.c5,B.df(u,B.A(q,A.m,u,A.b9,A.j,0,u,u),u,u,A.bb,new B.o(u,u,u,r,u,s,A.n),A.hV,u,u,u,A.uM,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eYO(this,d),u,u,u,u,u,u,!1,A.a9),1)},
cdB(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.W5,n=B.m(18),m=p?A.d6:A.dq
m=B.I(m,A.r,p?1.8:1)
w=this.aNX(A.py)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aNX,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.cZ,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aNZ,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.N3:q
u=p?q:B.I(A.b8,A.r,1.6)
r=p?D.bGl:q
return B.aE(q,B.df(q,B.A(B.a([w,A.bd,t,B.df(q,r,q,q,A.bb,new B.o(q,q,u,q,q,v,A.a6),A.fE,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bb,new B.o(o,q,m,n,q,q,A.n),A.fE,q,q,A.d8,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eYD(this,p,d),q,q,q,q,q,q,!1,A.a9)},
cl7(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cxE(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dq,A.r,1)
v=r.aNX(A.Mg)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aNX,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.cZ,B.d(p+" slides"+t,q,q,q,q,q,q,D.aNZ,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b0i(A.hx,A.bs,"Bring it back",r.r?q:new C.eYL(r,d))
return B.p(q,B.A(B.a([v,A.bd,t,p,A.bn,r.b0i(A.ea,A.cq,"Delete",r.r?q:new C.eYM(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.W5,q,w,o,q,q,A.n),q,q,q,A.d8,D.bmi,q,q,q)},
b0i(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hn(B.aE(w,B.p(w,B.V(d,v?A.b8:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a9),w,f,w,w)},
aqO(d,e,f){var w=null
return new B.C(D.bll,B.v(B.a([B.V(d,A.b8,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.eXH,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.eQm,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bS,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b8,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aNY(A.xV,46),A.bd,D.bsz],t)
if(j.r)s.push(D.dZM)
s.push(B.aH(i,i,i,i,A.MP,i,i,i,new C.eYR(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dq,A.r,1)
o=J.a7(h)
q=B.a([A.S,u,new B.C(D.boS,s,i),B.p(i,B.A(B.a([j.b3A(0,A.xu,"Save",j.a.c.length),j.b3A(1,A.Mw,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bnW,A.en,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cq:A.bs).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cq:A.bs).j(0.4),A.r,1)
p=j.y
n=p?A.Mi:A.ed
n=B.V(n,p?A.cq:A.bs,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a5X,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bnS,A.j5,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eTR,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eWO,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eYS(j,v),i,i,i,i,i,i,!1,A.a9))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.aqO(A.py,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cdB(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dZk)
else if(j.e==null)s.push(j.aqO(A.aiB,"Could not reach the database","Check the connection, then open this again."))
else if(o.gal(h))s.push(j.aqO(A.oo,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gai(h);r.C();)s.push(j.cl7(r.gU(r)))
A.d.v(u,s)}q.push(new B.dl(1,A.ch,B.cJ(u,i,W.afM,i,i,A.ai,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc_7()
p=s?i:D.N3
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b3.j(0.4),A.cw,18)],x.V)
u=u.a
m=u===0
k=B.V(A.xu,m?A.j2:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bou,B.aE(i,B.df(i,B.A(B.a([k,A.a5m,new B.dl(1,A.ch,B.f4(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j2:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.b9,A.j,0,i,i),i,i,A.bb,new B.o(s,i,i,o,n,p,A.n),A.hV,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a9),i))}else q.push(A.S)
return B.p(i,B.bq(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.aXf,i,i,i,i,i,i,i,i)}}
C.o5.prototype={
ad(){return B.E(["id",this.a,"doc",this.b.ad(),"updatedAt",this.c.a5().ac()],x.N,x.z)}}
C.Xq.prototype={
T(){return new C.aw0(B.a([],x.k),B.fe(null,x.H))},
gdV(){return this.c}}
C.aw0.prototype={
a_(){this.a1()
this.Ob()},
Ob(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ob=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a0C(t.a.c),$async$Ob)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cD2(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ob,v)},
cr6(d){var w,v,u,t=this
d.c=new B.Q(Date.now(),0,!1)
w=J.pX(t.d,new C.cD5(d))
v=w<0
if(v&&C.hAT(d))return t.f
u=t.d
if(v)J.pf(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fIk(new C.cD6(t),v)
return t.f=t.f.bz(new C.cD7(t,d),v).eP(new C.cD8())},
HM(d,e,f){return this.c7j(0,e,f)},
aVo(d,e){return this.HM(0,e,!1)},
c7j(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$HM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a4(s,!1).ci(B.eo(new C.cD1(t,e),!1,null,x.H)),$async$HM)
case 3:w=4
return B.b(t.f,$async$HM)
case 4:w=5
return B.b(t.Ob(),$async$HM)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HM,v)},
aUF(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dkY:d
this.HM(0,new C.o5(w,v,new B.Q(Date.now(),0,!1)),!0)},
bZD(){return this.aUF(null)},
abz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c_(A.K,null,new C.cD9(),r,!1,!1,!0,null,!1,!1,x.g2),$async$abz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aUF(s)
case 1:return B.h(u,v)}})
return B.i($async$abz,v)},
HL(d,e){return this.bGg(0,e)},
bGg(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$HL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.cCX(e),s,null,!0,!0,x.y),$async$HL)
case 3:if(g!==!0){w=1
break}t.m(new C.cCY(t,e))
w=4
return B.b(t.f,$async$HL)
case 4:w=5
return B.b(C.aeU(t.a.c,e.a),$async$HL)
case 5:w=6
return B.b(t.Ob(),$async$HL)
case 6:case 1:return B.h(u,v)}})
return B.i($async$HL,v)},
Ct(d){return this.byz(d)},
byz(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ct=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c_(A.K,null,new C.cCT(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Ct)
case 3:s=f
r=t.c
if(r==null){w=1
break}case 4:switch(s){case"open":w=6
break
case"print":w=7
break
case"delete":w=8
break
default:w=5
break}break
case 6:w=9
return B.b(t.aVo(0,d),$async$Ct)
case 9:w=5
break
case 7:w=10
return B.b(F.fS_(r,d.b,null),$async$Ct)
case 10:w=5
break
case 8:w=11
return B.b(t.HL(0,d),$async$Ct)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ct,v)},
bTt(){var w,v,u=null,t=[D.dl0,D.dkZ,D.dl_],s=new C.cD_(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.dm.j(0.4),A.eR,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aV(999,999)
n.push(B.p(u,new B.x(D.d5A[w],u,A.nX,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bs(v,v,v,v),u,u,A.n),u,u,u,u,A.nD,u,u,u))}return B.p(u,B.A(B.a([B.D(B.v(B.a([D.fkD,A.P,B.c4(A.bE,n,A.bx,6,6),A.aO,B.aE(u,B.p(u,D.ezB,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cI,10)],q),u,A.n),u,u,u,u,T.ag8,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cCZ(this),u,u,u,u,u,u,!1,A.a9)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a5(130,110,new B.an(A.A,u,A.aa,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bNG,A.n),u,u,u,u,D.bp1,u,u,u)},
byx(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cw,14)],x.V),r=x.p
s=B.p(v,B.bv(B.m(6),new B.an(A.W,v,A.b_,A.q,B.a([B.f4(A.A,F.amC(d.b),A.f,A.bQ),D.e43,B.ao(v,B.aE(v,B.p(v,D.bH7,A.f,v,v,D.aY9,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cCO(this,d),v,v,v,v,v,v,!1,A.a9),v,v,v,4,4,v)],r),v),A.ap),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eNP,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fF(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eU0,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,new C.cCP(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cCQ(this,d),v,v,v,v,v,v,!1,A.a9)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eC(B.a([new B.C(H.aeH,B.hn(B.aE(s,B.p(s,A.alh,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b3.j(0.5),A.J,12)],x.V),E.vk,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc_T(),s,s,s,s,s,s,!1,A.a9),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mH,s,s,s,!0,s,s,s,s,s,D.fkH,s,s,s,1,s,!0)
if(t.e)r=D.b0x
else{w=t.bTt()
v=B.a([D.f6U,A.ab],r)
if(J.cw(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ab(t.d),s,s,s,s,s,s,D.eNg,s,s,s),A.f,s,s,new B.o(D.b55,s,s,u,s,s,A.n),s,s,s,s,A.xb,s,s,s))}r=B.a([new B.nB(Af.Xc,new B.lW(w,s),s),new B.nB(D.boo,new B.lW(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ck(t.d))r.push(D.eFA)
else r.push(new B.nB(D.bnU,B.NX(new B.oa(new C.cDa(t),J.ab(t.d),!0,!0,!0,0,B.rz(),s),D.b_P),s))
r=B.vb(0,s,A.q,s,A.y,s,s,s,s,s,!1,s,A.ai,!1,r)}return B.cc(q,D.b3T,r,s,!1,!1,s,s)}}
C.Xo.prototype={
T(){return new C.avX(B.a([],x.bx))},
SM(d){return this.d.$1(d)}}
C.aDi.prototype={}
C.avX.prototype={
aYb(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b1,A.aN),w),u=this.gaVn()
v.aM(0,u)
w=new B.ar(new B.bb(e,A.b1,A.aN),w)
w.aM(0,u)
return new C.aDi(v,w,f)},
Di(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cM(A.pn,new C.cCh(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b1,A.aN),v)
t=m.gaVn()
u.aM(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.ar(new B.bb(w.b,A.b1,A.aN),v)
u.aM(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.ar(new B.bb(w.c,A.b1,A.aN),v)
u.aM(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b1,A.aN),v)
o.aM(0,t)
n=new B.ar(new B.bb(p.b,A.b1,A.aN),v)
n.aM(0,t)
r.push(new C.aDi(o,n,p.c))}if(r.length===0)r.push(m.aYb("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.goH()
q=r.a
q.SM(q.c)}q=r.d
q===$&&B.c()
w=q.S$=$.aw()
q.P$=0
q=r.e
q===$&&B.c()
q.S$=w
q.P$=0
q=r.f
q===$&&B.c()
q.S$=w
q.P$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.S$=w
s.P$=0
s=t.b
s.S$=w
s.P$=0}r.a2()},
goH(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&B.c()
n=A.a.i(n.a.a)
w=o.e
w===$&&B.c()
w=A.a.i(w.a.a)
v=o.f
v===$&&B.c()
v=A.a.i(v.a.a)
u=o.r
u===$&&B.c()
t=B.a([],x.B)
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.K)(s),++q){p=s[q]
t.push(new F.mf(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qY(n,w,v,t,u)},
A7(){var w=0,v=B.j(x.H),u=this,t
var $async$A7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.goH()
t=u.a
w=2
return B.b(t.SM(t.c),$async$A7)
case 2:return B.h(null,v)}})
return B.i($async$A7,v)},
c_R(){this.m(new C.cCg(this))
this.Di()},
aUn(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cCj(w,d,v))
w.Di()},
c_S(d,e){var w=A.d.cw(this.w,e)
this.m(new C.cCr())
this.Di()
$.aU.x1$.push(new C.cCs(w))},
Pi(d){return this.cdr(d)},
cdr(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pi=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().kS(80,1400,A.eF),$async$Pi)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$Pi)
case 8:p=f
o=q.b.toLowerCase()
n=J.agp(o,".png")?"image/png":"image/jpeg"
r.m(new C.cCk(d,n,p))
r.Di()
t=2
w=6
break
case 4:t=3
l=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pi,v)},
x8(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$x8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hdA(r,t.goH()),$async$x8)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cCi(t,s))
t.Di()
case 1:return B.h(u,v)}})
return B.i($async$x8,v)},
cdJ(d){var w,v=this,u=null,t=F.fpo(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hb(D.bAu,D.f9h,new C.cCm(v,d),u),u)
w=x.p
return new B.C(A.cK,new B.an(A.W,u,A.aa,A.q,B.a([B.bv(B.m(12),B.fK(t,A.A,u,u,A.cn,A.bQ,!0,140,!1,u,1/0),A.ap),B.ao(u,B.A(B.a([v.b0j(A.kH,new C.cCn(v,d)),A.bn,v.b0j(A.cv,new C.cCo(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b0j(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aK(!1,w,!0,new B.C(A.hu,B.V(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ae)},
HN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$HN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.A7(),$async$HN)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fS_(s,t.goH(),new C.cCq(t)),$async$HN)
case 4:case 1:return B.h(u,v)}})
return B.i($async$HN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eC(B.a([new B.C(A.qA,B.hb(D.bF6,D.ff4,n.gauq(),B.fu(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.alg,m,m,m,new C.cCt(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Vm,m,1,m,m,m,!1,m,!1,E.mH,m,m,m,!0,m,m,m,m,m,D.fa5,m,m,m,1,m,!0),j=Ap.aSH(N.kZ,A.c,Ac.Uj,A.nI,D.faP,n.gc_Q()),i=B.m(18),h=n.gaup(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jc,12)],x.V)
g=B.aE(m,B.p(m,new B.a5(92,142.1818181818182,B.f4(A.A,F.amC(n.goH()),A.f,A.dt),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a9)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eA,B.D(B.v(B.a([D.fma,A.au,B.d(F.fQw(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eZp,m,m,m),A.S,B.dp(E.aky,E.aOI,h,B.bk(A.dm,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Vm,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),h,m,m,m,m,m,2,B.bo(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nW,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),w,m,m,m,m,m,2,B.bo(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.az,h,A.P,w,A.P,B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),g,m,m,m,m,m,2,B.bo(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aV(16,16)
u=new B.az(N.kZ.j(0.18),1,A.r,-1)
t=v+1
s=B.aH(m,m,m,m,D.bDR,m,m,m,v===0?m:new C.cCu(n,v),m,m,m,m,"Move up",A.c7)
r=i.length
q=B.aH(m,m,m,m,D.bK3,m,m,m,v===r-1?m:new C.cCv(n,v),m,m,m,m,"Move down",A.c7)
r=r===1?m:new C.cCw(n,v)
p=new B.aV(12,12)
o=new B.aV(12,12)
g.push(B.p(m,B.v(B.a([new B.co(A.aU,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.eZV,m,m,m,m,m,m,m,m,m),A.b2,s,q,B.aH(m,m,m,m,B.V(A.ea,A.of,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c7)],l),m),B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),i[v].a,m,m,m,m,m,2,new B.e_(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bs(p,p,p,p),A.df),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cc,!0,A.a5,m,A.am,m,m,m,m),A.ao,n.cdJ(i[v]),B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),i[v].b,m,m,m,m,m,2,new B.e_(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bs(o,o,o,o),A.df),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ag,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mH,m,new B.bQ(u,u,u,u),new B.bs(w,w,w,w),m,m,A.n),m,m,new C.a7b(h),A.e3,D.bmx,m,m,m))}return B.o7(!0,B.cc(k,E.acU,B.cJ(g,m,D.bmZ,m,m,A.ai,!1),m,!1,!1,j,m),new C.cCx(n),x.C)}}
C.avZ.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cq:E.mH,q=B.m(16),p=B.m(16),o=s?A.aE.j(0.08):A.c.j(0.04)
s=s?A.aE.j(0.16):A.dm.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eY,B.aF(!1,A.a1,!0,t,B.aK(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aNl,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.ee,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ae),t)}}
C.aoJ.prototype={
T(){return new C.aC4()}}
C.aC4.prototype={
a_(){this.a1()
this.Ye()},
br(d){this.bE(d)
if(d.c!=this.a.c)this.a_z()},
a_z(){var w=0,v=B.j(x.H),u=this,t
var $async$a_z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dR(t,x.H),$async$a_z)
case 2:u.d=null
if(u.c!=null)u.m(new C.e1J(u))
w=3
return B.b(u.Ye(),$async$a_z)
case 3:return B.h(null,v)}})
return B.i($async$a_z,v)},
Ye(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ye=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ab(n)===0){w=1
break}t=4
if(J.cZ(n,"http://")||J.cZ(n,"https://")||J.cZ(n,"data:")){o=B.X1(B.cv(n,0,null),new B.Ok(!0))
r.d=o}else{o=B.fk("unsupported video ref")
throw B.S(o)}w=7
return B.b(o.i0(0).cL(0,A.pj),$async$Ye)
case 7:if(r.c==null){w=1
break}r.d.rN(!1)
r.m(new C.e1H(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a8(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e1I(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ye,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c2d(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fX(0)
w.m(new C.e1K(w))}else{v.po(0)
w.m(new C.e1L(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.iZ.j(0.92),D.JF.j(0.95)],x.O)
w=B.I(A.bU.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.pB,A.bU,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bX(B.av(B.v(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a6(A.ax,A.aC,A.x,m,o,o),A.n),A.be)}if(p.f)return B.av(B.V(A.ajS,A.ay,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b1l
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f4(A.A,new B.a5(r,q,new B.zz(s,o),o),A.q,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.V(A.iN,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.N(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bv(n,new B.an(A.W,o,A.b_,A.q,m,o),A.ap),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc2c(),o,o,o,o,o,o,!1,A.a9)}}
C.x6.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.jf.prototype={}
C.abW.prototype={
B(d){return B.oz(new C.dU7(this,B.M(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.abl.prototype={
B(d){var w,v,u=null,t=B.M(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.I(D.iZ.j(t?0.35:0.4),A.r,1),p=t?D.K9:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cw,14)],o),m=B.m(10),l=B.I(A.bU.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dz,6)],o)
w=this.c
o=B.D(B.p(u,new B.fF(0.5625,C.hT3(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.agA,u,u,u,u),1)
m=D.iZ.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iZ,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aK(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cZ,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.ay:D.baL,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bQ(new B.az(m,1,A.r,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.aeX,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ae)}}
C.x9.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nr.prototype={}
C.bh3.prototype={
UN(d){var w=null
return new B.bI(A.a3,w,w,B.D9(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
byd(){return this.UN(1)},
av1(d){var w=null,v=B.m(8),u=B.I(A.hT,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ab8,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hT,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dT(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hT,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b9,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ao,w.av1("TAARIFA ZA WANANDOA"),A.ao,w.byd(),A.cZ,w.UN(0.9),A.cZ,w.UN(0.7),A.P,w.av1("TAMKO LA MAKUBALIANO"),A.fV,w.UN(1),A.cZ,w.UN(0.95),A.P,w.av1("MASHAHIDI"),A.b2,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.abZ.prototype={
B(d){return B.oz(new C.e6Y(B.M(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.adD.prototype={
B(d){var w,v,u,t,s,r=null,q=B.M(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.I(A.av.j(q?0.35:0.4),A.r,1),m=q?D.bal:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cw,14)],l),j=B.m(10),i=B.I(A.av.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dz,6)],l)
w=this.c
v=C.fR0(w.a)
if(v==null)v=A.d.gK(D.Pw)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.D(B.p(r,new B.fF(0.5625,new B.an(A.W,r,A.b_,A.q,B.a([B.bY(0,B.fK(C.fR_(v.d),A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.afD,new C.bh3(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.agA,r,r,r,r),1)
j=A.av.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.Ka,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aK(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cZ,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.ay:D.b4p,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bQ(new B.az(j,1,A.r,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.aeX,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ae)}}
C.kI.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a6F.prototype={}
C.UF.prototype={
T(){var w=$.aw()
return new C.aCn(new B.cs(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mn(0,null,null),A.d.gK(D.a13),D.dvh,B.a([],x.L),B.a([],x.gE))}}
C.aCn.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.yY(C.fth(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fsd().bz(new C.eaf(v),w)
$.tL().k7(0,"assets/images/ngmy_logo.png").bz(new C.eag(v),w).eP(new C.eah())},
q(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a2()},
afp(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
I3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$I3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().kS(88,1600,A.eF),$async$I3)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$I3)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hdR(m,p),$async$I3)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bAT(new B.pt(o,1),m),$async$I3)
case 10:if(r.c!=null)r.m(new C.e9S(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a8(k)
r.afp("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$I3,v)},
Vv(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hdR(s,q),$async$Vv)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bAT(new B.pt(r,1),s),$async$Vv)
case 4:if(t.c!=null)t.m(new C.e9O(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Vv,v)},
ack(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ack=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.e9Z(q))
t=4
q.a.toString
p=C.hXt()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$ack)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ea_(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a8(i)
q.afp(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ea0(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ack,v)},
Yr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Yr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ab(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.e9U(q,i))
t=4
q.a.toString
p=C.hXs()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Yr)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.e9V(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a8(g)
if(q.c!=null)q.m(new C.e9W(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e9X(q))
$.aU.x1$.push(new C.e9Y(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Yr,v)},
c2U(d){this.m(new C.e9T(this,d))},
Dy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Dy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.e9Q(q))
t=4
w=7
return B.b($.aU.gmg(),$async$Dy)
case 7:w=8
return B.b(B.bN(A.mO,null,x.H),$async$Dy)
case 8:k=$.aU.ak$.x.h(0,q.d)
p=k==null?null:k.gb7()
if(!(p instanceof B.qg))throw B.S("The page is not ready yet.")
w=9
return B.b(p.m0(1800/p.gY(0).a),$async$Dy)
case 9:o=e
w=10
return B.b(o.hj(A.fS),$async$Dy)
case 10:n=e
if(n==null)throw B.S("Could not make the picture.")
w=11
return B.b(A5.aeX(J.fa(A.dE.gaP(n)),"ngmy_news.png","image/png"),$async$Dy)
case 11:m=e
q.afp(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a8(i)
q.afp(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e9R(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dy,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kJ,a2,a2,a2,new C.ea6(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bFC,a2,a2,a2,new C.ea7(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.ox,a2,a2,a2,a4?a1.gaWp():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eC(v,a2,a2,!0,!0,A.A6,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.ezK,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eR,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fF(0.7142857142857143,B.f4(A.A,new B.eq(new C.aZS(t,s,r,a1.x,a2),a1.d),A.f,A.dt),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.St,a2,a2,a2)
t=a1.as?a2:a1.gc2T()
t=B.a([B.D(B.dp(D.bGm,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cc,a2,a2,a2),t,B.bk(D.rT,a2,a2,a2,A.c,A.fK,a2,a2,new B.b7(B.m(14),O.wf),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bv(B.m(10),B.fK(r,A.A,a2,a2,A.cn,A.bQ,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.aw,r,B.aH(a2,a2,a2,a2,D.bD9,a2,a2,a2,a1.as?a2:a1.gbEU(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.St,a2,a2,a2)
q=B.aL(a2,A.T,!1,a2,!0,A.q,a2,B.aM(),a1.e,a2,a2,a2,a2,a2,2,a1.aPI("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ag,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dj,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d0y[o]
p.push(B.mw(a2,D.rT,new B.x(n.a,a2,A.oR,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hy,new C.ea8(a1,n),a2,a2,O.wf,a2))}p=B.c4(A.bE,p,A.bx,6,8)
m=a1.Q
m=B.c4(A.bE,B.a([D.fkQ,A.bd,B.jF(a2,a2,a2,D.f5M,a2,new C.ea9(a1),m==="en",a2,a2,a2,a2),A.ab,B.jF(a2,a2,a2,D.f5H,a2,new C.eaa(a1),m==="sw",a2,a2,a2,a2)],w),A.rr,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.St,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.da(D.a13,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bW(i,i.gM(0),h.k("bW<aj.E>")),h=h.k("aj.E");i.C();){g=i.d
k.push(a1.aOg(g==null?h.a(g):g))}k=B.cJ(k,a2,a2,a2,a2,A.aU,!1)
i=B.a([],w)
for(j=B.da(D.a13,10,a2,j),h=j.$ti,j=new B.bW(j,j.gM(0),h.k("bW<aj.E>")),h=h.k("aj.E");j.C();){g=j.d
i.push(a1.aOg(g==null?h.a(g):g))}j=B.cJ(i,a2,a2,a2,a2,A.aU,!1)
i=a1.as?a2:a1.gc2W()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.az,new B.C(A.cK,s,a2),t,A.az,new B.C(A.cK,r,a2),q,A.P,p,A.S,m,A.az,new B.C(A.cK,l,a2),new B.a5(a2,78,k,a2),A.P,new B.a5(a2,78,j,a2),A.aO,B.aE(a2,B.p(A.A,B.A(B.a([D.bGg,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fW,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tB,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a9)],w)
if(a4){u=B.a([A.e_,B.A(B.a([D.dfP,A.aw,D.bsR],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b3.j(0.35):D.rT
p=new B.aV(16,16)
d=new B.az(A.bF,1,A.r,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.eXt,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A6.U7,new B.o(q,a2,new B.bQ(d,d,d,d),new B.bs(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cK,A.j5,a2,a2,a2),a2))}u.push(A.ao)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cOP[o]
t.push(B.mw(a2,D.rT,new B.x(a0,a2,A.I5,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hy,new C.eab(a1,a0),a2,a2,O.wf,a2))}u.push(B.c4(A.bE,t,A.bx,6,8))
u.push(A.S)
t=B.D(B.aL(a2,A.T,!1,a2,!0,A.q,a2,B.aM(),a1.f,a2,a2,a2,a2,a2,2,a1.aPI("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ag,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eac(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dj,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc2V()
u.push(B.A(B.a([t,A.ab,B.GW(A.y_,s,B.nl(a2,A.b3,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.az)
t=a1.as?a2:a1.gaWp()
u.push(B.dp(A.ox,D.fgA,t,B.bk(A.d2,a2,a2,a2,a2,A.HT,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cJ(v,a1.r,A.afq,a2,a2,A.ai,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jE.j(0.5),A.r,1)
v.push(B.bY(0,B.ei(B.av(B.p(a2,B.A(B.a([E.a5n,A.eA,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iC,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.zZ,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bpj,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cc(a3,A.A6,new B.an(A.W,a2,A.aa,A.q,v,a2),a2,!1,!1,a2,a2)},
aPI(d){var w=null
return B.bo(w,new B.b4(4,B.m(14),A.Y),w,A.eN,w,w,w,w,!0,w,w,w,w,w,w,D.rT,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,V.I0,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aOg(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.lw,t,t,t,t),A.fV],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.blz,t,t,t,t))
w.push(A.cZ)
w.push(new B.C(A.jo,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.b9,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.j4,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e9P(this,d),t,t,t,t,t,t,!1,A.a9)}}
C.yY.prototype={
b8s(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yY(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cBU(d){var w=null
return this.b8s(w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aAh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c9P(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gU(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fu(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c9N(),B.T(w).k("J<1,n>")).bY(0,new C.c9O())
t=B.B(w,w.$ti.k("G.E"))}else t=k
w=h.$1("paper")
w=J.ab(w==null?"":w)===0?k:h.$1("paper")
v=h.$1(j)
v=J.ab(v==null?"":v)===0?k:h.$1(j)
s=h.$1("subhead")
r=h.$1("byline")
r=J.ab(r==null?"":r)===0?k:h.$1("byline")
q=h.$1("caption")
p=t!=null&&t.length!==0?t:k
o=h.$1("pullQuote")
n=h.$1("sidebarTitle")
m=h.$1("sidebarText")
l=h.$1(i)
return this.b8s(p,r,q,J.ab(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEI(d){return this.f}}
C.rV.prototype={
a4(){return"NewsLayout."+this.b}}
C.AP.prototype={
a4(){return"NewsFrame."+this.b}}
C.l5.prototype={}
C.aZS.prototype={
qN(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aWr(d,e,f,g){return this.qN(d,e,null,1.25,f,A.bi,g)},
OE(d,e,f,g,h){return this.qN(d,e,f,1.25,g,A.bi,h)},
av7(d,e,f,g,h){return this.qN(d,e,null,f,g,A.bi,h)},
av6(d,e,f,g,h){return this.qN(d,e,f,g,0,A.bi,h)},
aWt(d,e,f,g,h){return this.qN(d,e,null,f,0,g,h)},
c3_(d,e,f,g,h,i){return this.qN(d,e,f,g,0,h,i)},
av5(d,e,f,g){return this.qN(d,e,null,f,0,A.bi,g)},
acn(d,e,f){return this.qN(d,e,null,f,0,A.bi,A.cN)},
aWs(d,e,f,g,h){return this.qN(d,e,f,g,0,h,A.cN)},
c2Z(d,e,f,g){return this.qN(d,e,null,f,0,g,A.cN)},
c2Y(d,e,f,g){return this.qN(d,e,f,g,0,A.bi,A.cN)},
aco(d,e,f,g,h,i){return this.qN(d,e,f,g,h,A.bi,i)},
aWq(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.ku(new B.es(d,u,u,A.cQ,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.ci,new B.jC(1),u,u,h,u,A.cg,u)
v.Bd(g)
if(!v.b.a.c.gaBT())return w
w-=2}return j},
acl(d,e,f,g,h,i,j,k){return this.aWq(d,e,f,g,h,i,j,k,A.bi)},
axb(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
axa(d){return this.axb(null,!1,d)},
afd(d,e){return this.axb(null,d,e)},
ckg(d,e){return this.axb(d,!1,e)},
gaYz(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaSf(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
NA(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.acl(w.gaSf(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaSf(),v,g,A.a2,v,v,v,w.av6(u,t,f,1.02,A.O),e,v,v)},
aSk(d){return this.NA(d,A.L,null,2,78,30)},
a9S(d,e,f,g,h){return this.NA(d,e,null,f,g,h)},
bTl(d,e,f,g,h){return this.NA(d,A.L,e,f,g,h)},
bTk(d,e,f){return this.NA(d,A.L,null,e,f,30)},
Qy(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.kb,B.d(s,u,g,A.a2,u,u,u,v.aWs(w,v.aWq(t,w,A.cN,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b3g(d){return this.Qy(d,A.L,null,3,24)},
ayE(d,e,f,g){return this.Qy(d,e,null,f,g)},
crA(d,e,f){return this.Qy(d,A.L,e,3,f)},
b3h(d,e){return this.Qy(d,e,null,3,24)},
cry(d,e){return this.Qy(d,A.L,null,3,e)},
crz(d,e,f){return this.Qy(d,e,null,3,f)},
aoR(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.h4,B.d(u.toUpperCase(),v,v,v,v,v,v,w.OE("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Mx(){return this.aoR(null,!0)},
aoQ(d){return this.aoR(null,d)},
bAR(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.i7,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.c2Z(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
v1(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.Q(Date.now(),0,!1),i=m.gaYz(),h=A.o.an(j.by(B.bZ(B.bx(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hL7(Math.max(1,B.bx(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aWr(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.acl(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.acl(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eB,l,l,l,m.aco(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.N(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bA8(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hJ,A.j,0,l,l),A.ao,m.afd(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eA,B.D(B.d(i,l,1,A.eB,l,l,l,m.av5(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bA8(j),l,l,l,l,l,l,m.OE(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hJ,A.j,0,l,l),A.P,m.ckg(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaYz()
v=B.d("NGMY",l,l,l,l,l,l,m.av7(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eA(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qN(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.N(t,s,t,s),l,l,l),l),A.b2,new B.dl(1,A.ch,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.aco(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dK,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hJ,A.j,0,l,l)
t=m.afd(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.av5(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.au,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.afd(!0,1.4),A.au,B.d(C.bA8(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.axa(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.av7(v,u,1,3,A.O),A.L,l,l),A.P,m.afd(!0,1.2),A.au,B.A(B.a([B.d(C.bA8(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hJ,A.j,0,l,l),A.au,m.axa(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aaY(d){return this.v1(d,!1)},
acm(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.aco("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.N(v,u,v,u),w,w,w)},
c2X(d,e){return this.acm(d,null,e,null)},
aUf(d){var w=null,v=new B.Q(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b0(this.d.w).j(0.75),s=this.av6("Roboto",15,t,1,A.cs),r=B.V(E.ahY,t,w,w,w,18),q=A.a.ap(A.oB[B.bF(v)-1],0,3),p=A.a.aT(A.o.u(B.fX(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bP(v)+", "+B.bx(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fG,w,w,w,1),B.V(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
atU(){return this.aUf(A.mc)},
b0x(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.aco("Roboto",this.acl(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
axe(d,e,f){return this.b0x(d,e,f,30)},
ayH(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.uL,B.d(v,w,e,A.a2,w,w,w,this.c2Y("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b3l(d){return this.ayH(d,3,22)},
crL(d,e){return this.ayH(d,e,22)},
t4(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fK(r,A.A,s,s,A.cn,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.CJ(D.bs2,w,s)
if(v==="sepia")w=new B.CJ(D.bs1,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.V(A.xo,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bX(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.x,s,0,B.a([A.K,A.Vi.j(0.38)],x.O),s,s),A.n),A.be))
return new B.a5(d,e,new B.an(A.W,s,A.b_,A.q,v,s),s)},
pU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.r,3)
j=B.I(B.b0(j),A.r,1)
return B.p(k,B.p(k,l.t4(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.en,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m7,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.dVQ,14)],x.V)
v=l.t4(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eA(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.av(B.d(u,k,2,A.a2,k,k,k,l.aWs(j.as,13.5,D.b5Q,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.b8L,k,k,k,w,k,A.n),k,e,k,k,D.bmU,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.r,5)
return B.p(k,B.bv(B.m(25),l.t4(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.r,6)
j=B.b0(j.f)
v=t-10
return new B.a5(d,e,B.av(B.p(k,B.hR(l.t4(v,v),A.ap),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.m7,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.dVG,10)],x.V)
return B.eA(A.A,0.025,new B.a5(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bY(0,B.p(k,l.t4(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qD,k,k,k),0,0,0),B.ao(k,B.eA(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eA(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a5(d,e,B.b3(B.nf(l.t4(d,e),A.ap,D.fyU),new C.bai(j,k),k,k,A.at),k)
case 7:j=x.p
w=B.a([l.t4(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bw(u));++n){m=new B.aV(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bX,k,k,new B.bs(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cK(0,q,0,p,k,k,new B.co(A.aU,A.pF,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.q,w,k),A.f,A.e7,k,k,k,e,k,k,D.brj,k,k,d)
case 8:w=d/2
v=B.wv(A.hc,new B.aV(w,w))
j=B.I(B.b0(j.x),A.r,5)
w-=5
return B.p(k,B.bv(B.wv(A.i1,new B.aV(w,w)),l.t4(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fJ,22)],x.V)
return B.p(k,l.t4(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a5(d,e,B.nf(l.t4(d,e),A.ap,D.fEQ),k)
case 0:j=B.I(B.b0(j.w),A.r,2.4)
return B.p(k,l.t4(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.en,k,k,d)}},
aLT(d,e){return this.d.e===D.Q9?A.bH:this.bAR(d,e)},
V3(d){return this.aLT(d,A.L)},
gay_(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
axZ(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.I(B.b0(v.w),A.r,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.D(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aWt(v.Q,19,1.15,A.cD,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.OE("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.acn(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jp(B.v(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gcaZ(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a7C(d,e,f,g){return B.cm(new C.c9Q(this,e,d,f,g))},
a7B(d){return this.a7C(d,22,!0,18)},
Ve(d,e){return this.a7C(d,22,!0,e)},
aMV(d,e,f){return this.a7C(d,22,e,f)},
bCQ(d,e,f){return this.a7C(d,e,!0,f)},
b6b(d,e,f,g){return B.cm(new C.c9R(this,e,d,g,!0,f))},
c9O(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.aaY(824),A.az,k.aSk(824),k.b3g(824),A.P,k.Mx(),A.ac,B.av(k.pU(824,360),j,j,j),k.V3(824),A.ac,B.D(k.a7B(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.aaY(824),A.aO,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.v(B.a([k.a9S(440,A.bg,3,62,26),k.ayE(440,A.bg,2,20),A.b2,k.aoR(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.HU,B.v(B.a([k.pU(362,310),k.V3(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.axa(2),A.ac,B.D(k.a7B(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.v1(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bTl(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.crA(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.As,j,j,j)
u=B.a([B.av(k.pU(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Q9){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.av6(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lx,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.q,u,j),A.P,k.Mx(),A.S,B.D(k.Ve(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.v1(824,!0)
w=k.pU(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.q,B.a([w,B.ao(0,B.p(j,k.NA(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a6(A.b0,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.bpC,j,j,j),j,j,0,0,j,j)],u),j),k.b3h(824,A.bg),A.P,k.Mx(),A.S,B.D(k.a7B(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.aaY(824),A.az,k.aSk(824),k.b3g(824),A.P,k.Mx(),A.ac,B.D(k.b6b(3,300,B.v(B.a([k.pU(300,300),k.V3(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.v1(824,!0)
v=x.p
u=B.v(B.a([k.a9S(440,A.bg,3,62,26),k.ayE(440,A.bg,2,20),A.b2,k.aoQ(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bu,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aLo,new B.C(A.i7,k.pU(364,h.e===D.Q9?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.az,B.D(k.Ve(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.aaY(824),A.ac,k.bTk(824,2,70),k.cry(824,21),A.P,k.Mx(),A.ac,B.D(k.b6b(3,340,B.av(k.pU(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.v1(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bA8(new B.Q(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.OE(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.az],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aWt(h.Q,24,1.15,A.cD,A.O),j,j,j))
v.push(A.b2)
if(k.gay_())v.push(k.axZ(230,250))
return B.v(B.a([w,A.az,B.D(B.A(B.a([new B.a5(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.aeW,j,j,j,1.2),new B.a5(570,j,B.v(B.a([k.a9S(570,A.bg,3,62,28),k.crz(570,A.bg,20),A.P,k.aoQ(!1),A.P,B.av(k.pU(570,330),j,j,j),k.V3(570),A.S,B.D(k.aMV(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.v1(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.OE(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.ao,k.NA(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bnX,j,j,j),k.b3h(824,A.bg),A.S,B.av(k.pU(824,310),j,j,j),k.V3(824),A.P,k.Mx(),A.S,B.D(k.a7B(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.v1(824,!0),A.aO,new B.an(A.W,j,A.aa,A.q,B.a([k.pU(824,430),B.ao(18,k.c2X(k.c.b,17),j,j,18,j,j,j)],w),j),A.bu,k.axe(824,3,66),k.b3l(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.atU(),A.az,B.D(k.Ve(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.v1(824,!0),A.bu,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.v(B.a([k.acm(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b0x(410,4,58,28),k.ayH(410,6,20),A.b2],w),A.F,j,A.e,A.j,0,A.p),j),T.aLp,k.pU(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.az,k.atU(),A.aO,B.D(k.Ve(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.v1(824,!0)
v=k.pU(824,420)
u=B.ho0(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aO,new B.an(A.W,j,A.aa,A.q,B.a([v,B.ao(22,B.fr(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c3_(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bpS,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bu,k.axe(824,3,62),k.b3l(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aUf(A.l7),A.az,B.D(k.Ve(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.v1(824,!0)
u=h.w
t=x.p
w=B.a([k.pU(824,380),B.ao(j,k.acm(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.axe(824,2,60)
r=k.crL(824,2)
p=k.atU()
o=B.D(k.aMV(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aO,new B.an(A.W,j,A.aa,A.q,w,j),A.aO,s,r,A.S,p,A.az,o,A.ac,B.p(j,B.A(B.a([B.bv(B.m(14),k.t4(150,104),A.ap),A.nU,B.D(B.v(B.a([k.acm("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.av5(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.V(A.ee,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.v1(824,!0),A.bu,k.a9S(824,A.bg,3,62,30),k.ayE(824,A.bg,2,22),A.S,k.aoQ(!1),A.S,B.av(k.pU(824,330),j,j,j),k.aLT(824,A.bg),A.aO,B.D(k.bCQ(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bY(0,B.bX(s,new B.o(s,s,s,s,s,new B.a6(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.be),0,0,0)],o)
if(q.ax)n.push(B.bY(0,B.b3(s,s,s,new C.b6Q(B.b0(q.w),s),A.at),0,0,0))
w=q.w
n.push(new B.C(D.bqn,B.v(B.a([B.D(t.c9O(),1),A.P,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fV,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aWr(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.OE(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hJ,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bY(0,B.e2(B.b3(s,s,s,new C.bpb(v.j(q.ch?0.07:0.06),s),A.at),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hR(B.fK(q,A.A,s,s,A.cn,A.bQ,!1,30,!1,s,30),A.ap))
else o.push(B.V(A.mc,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.av7(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e2(B.db(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.brs,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jp(new B.an(A.W,s,A.aa,A.q,n,s),A.q,s),s)}}
C.baj.prototype={
iO(d){return C.h3k(d)},
jv(d){return!1}}
C.bai.prototype={
a6(d,e){var w,v=C.h3k(e)
$.W()
w=B.L()
w.r=this.b.gp(0)
w.b=A.af
w.c=6
return d.aN(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.brG.prototype={
iO(d){var w,v,u,t,s,r,q,p,o=new B.eT()
o.dI(3)
w=$.W()
v=B.a([],x.v)
u=new B.aP(w.r,A.aq,null,null,v)
u.E(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bx(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.E(new B.ap(t,8))
w=d.b
r=w-8
u.E(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bx(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.E(new B.ap(0,r))
u.E(new B.bE())
return u},
jv(d){return!1}}
C.b6Q.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eT()
k.dI(7)
$.W()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.aj()*0.07).gp(0)
q=k.aj()
p=k.aj()
o=k.aj()
n=w.H()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.aj()*u
p=k.aj()*t
m=50+k.aj()*90
w.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.JG.j(0.13),A.K],v),l,l).aw(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sau(l)},
ar(d){return!1}}
C.bpb.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.ih(u,u,u,u,B.dn(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.ci,u,A.eq,A.cg)
s.eR()
w=d.a
J.bA(w.save())
w.translate(t/2,e.b*0.52)
d.j_(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.UI.prototype={
T(){return new C.aCr()}}
C.aCr.prototype={
a_(){var w=this
w.a1()
B.ha6(w.a.c,null).bz(new C.ebq(),x.g7).bz(new C.ebr(w),x.a)
w.a.toString},
gaKI(){var w=D.asw[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gav8(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaKI()
w=r.f
v=r.r
u=r.w
t=p/q
if(t>o){s=o*q
t=o}else s=p
s/=w
t/=w
q=s/2
w=t/2
q=A.k.D(v*p,q,p-q)-q
w=A.k.D(u*o,w,o-w)-w
return new B.a9(q,w,q+s,w+t)},
Yt(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Yt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ebd(r))
t=4
q=r.gav8()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.rL()
m=B.Gn(n,null)
i=B.L()
i.Q=A.fQ
m.AW(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.q4().yL(J.fTX(p),J.fTX(o)),$async$Yt)
case 7:l=e
w=8
return B.b(l.hj(A.fS),$async$Yt)
case 8:k=e
j=r.c
if(j!=null){j=B.a4(j,!1)
i=k
i.toString
j.N(J.fa(J.wq(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ebe(r))
r.c.I(x.q).f.R(D.eIa)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Yt,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kJ,s,s,s,new C.ebk(d),s,s,s,s,s,s),p=x.p
q=B.eC(B.a([B.bK(!1,D.fiX,s,s,!0,s,s,t.y||r==null?s:t.gc30(),s,s)],p),s,s,!0,!0,A.A6,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fmL,s,s,s,1,s,!0)
if(r==null)p=A.lV
else{w=B.D(new B.C(A.c0,B.av(new B.fF(t.gaKI(),B.cm(new C.ebl(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.j4,B.jF(s,s,s,new B.x(D.asw[u].a,s,E.aN9,s,s,s,s,s,s,s,s,s),s,new C.ebm(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bq(!0,B.v(B.a([new B.a5(s,40,B.cJ(v,s,s,s,s,A.aU,!1),s),B.A(B.a([D.bGZ,B.D(B.kQ(s,s,s,6,1,new C.ebn(t),t.f),1),D.bGB],p),A.m,s,A.e,A.j,0,s,s),D.fgt,A.ao,B.bK(!1,D.fgd,s,s,!0,s,s,new C.ebo(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!1),A.f,D.Vw,s,s,s,s,s,s,D.bni,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cc(q,A.A6,p,s,!1,!1,s,s)}}
C.b9Q.prototype={
a6(d,e){var w
$.W()
w=B.L()
w.Q=A.cn
return d.AW(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.ZH.prototype={
T(){var w=$.aw(),v=x.A
return new C.aDP(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b1,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gK(D.a1z),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.S),A.L)}}
C.oh.prototype={}
C.aDP.prototype={
gaSs(){var w,v,u=this
if(u.p1)w=new B.wL(1,u.p2,0.9,u.p3).im().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.eKC(w))},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
Xa(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xa=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tL().k7(0,"assets/images/ngmy_logo.png"),$async$Xa)
case 7:q=e
p=J.fa(J.wq(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bAT(new B.pt(p,1),o),$async$Xa)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eJu(r,p))
t=2
w=6
break
case 4:t=3
m=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xa,v)},
OH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().kS(92,1800,A.eF),$async$OH)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$OH)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bAT(new B.pt(p,1),n),$async$OH)
case 9:if(r.c==null){w=1
break}r.m(new C.eJS(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a8(l)
n=r.c
if(n!=null)n.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$OH,v)},
b_V(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aF=w.aO=w.aE=w.az=w.Z=w.b5=w.bi=w.y2=0
w.b3=null
w.b0=0.25
w.ba=null
w.bJ=0.5
w.aR=1
w.c5=w.bR=w.bj=0
w.cU=w.cR=!1},
aU_(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bxB(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d2W)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bxB(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bxB(C.fP1(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bxB(C.fP1(1-a0*0.5,n,n,n),w)}return a1?C.bxB(C.fP1(-1,255,255,255),w):w},
ayM(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kH(0,this.d.a.a),t=B.B(u,B.a2(u).k("G.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yE(u,v,w)
this.dx.pL(new C.eK1(t),!0)
return t},
b2p(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.ayM()
w=C.hVc(e.d.a.a,e.db)
v=e.e.a.a
u=e.y
t=e.ay
s=e.ch
r=e.CW
q=e.cx
p=e.cy
o=e.dy
n=e.fr
m=e.p4!=null&&a0==null
l=e.fx
k=e.id
j=e.fy
i=e.go
h=e.k1
g=e.k2
f=e.k3
return C.hRH(d,k,v,a0,j,e.gaSs(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cpB(){return this.b2p(null)},
Cs(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Cs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gmg(),$async$Cs)
case 3:w=4
return B.b(B.bN(A.eM,null,x.H),$async$Cs)
case 4:w=5
return B.b($.aU.gmg(),$async$Cs)
case 5:s=$.aU.ak$.x.h(0,t.r)
r=s==null?null:s.gb7()
if(!(r instanceof B.qg)){u=null
w=1
break}w=7
return B.b(r.m0(1080/r.gY(0).a),$async$Cs)
case 7:w=6
return B.b(e.hj(A.fS),$async$Cs)
case 6:q=e
u=q==null?null:J.fa(A.dE.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Cs,v)},
a8t(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a8t=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eJd(q))
t=4
w=7
return B.b(q.Cs(),$async$a8t)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gct().aI(p)
n=C.B1(null,null,null,null,D.nO,6,!1,null,null,null,null,null,C.cB(),null,!1,null,"NGMY Quote",null,null,B.a([q.b2p(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a4(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a8(j)
l=q.c
if(l!=null)l.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eJe(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8t,v)},
zQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eJb(q))
t=4
w=7
return B.b($.aU.gmg(),$async$zQ)
case 7:w=8
return B.b(B.bN(A.oi,null,x.H),$async$zQ)
case 8:w=9
return B.b($.aU.gmg(),$async$zQ)
case 9:k=$.aU.ak$.x.h(0,q.f)
p=k==null?null:k.gb7()
if(!(p instanceof B.qg))throw B.S("The picture is not ready yet.")
w=10
return B.b(p.m0(1080/p.gY(0).a),$async$zQ)
case 10:o=e
w=11
return B.b(o.hj(A.fS),$async$zQ)
case 11:n=e
if(n==null)throw B.S("Could not make the picture.")
w=12
return B.b(A5.aeX(J.fa(A.dE.gaP(n)),"ngmy_quote.png","image/png"),$async$zQ)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.R(B.b2(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a8(i)
k=q.c
if(k!=null)k.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eJc(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zQ,v)},
ccT(){var w=this.p4
w.toString
return B.cm(new C.eJL(this,w))},
aWA(d,e){var w=null
return B.bo(w,w,w,w,w,D.eSa,w,w,!0,new B.b4(4,B.m(16),O.wf),w,w,w,w,w,D.rT,!0,w,w,w,w,new B.b4(4,B.m(16),D.aUV),w,w,w,w,w,w,w,w,A0.CE,e,w,w,w,w,w,w,w,D.eXk,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xh(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b3,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aNU,w,w,w))
return new B.C(D.bld,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aWz(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.r,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jt),A.f,w,w,new B.o(D.rT,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
v7(d){return this.aWz(d,A.by)},
nM(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tB:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.j2,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j2,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.df(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bb,new B.o(w,r,u,v,r,p,A.n),A.hV,r,r,r,A.Et,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a9)},
aed(d,e,f){return this.nM(d,null,e,f)},
avc(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b3.j(0.28):A.c.j(0.05),t=g?A.ex:A.bF,s=x.p
v=B.a([B.df(w,d,w,w,A.bb,new B.o(u,w,B.I(t,A.r,g?2:1),v,w,w,A.n),A.hV,w,e,w,new B.N(i,i,i,i),w,w,j)],s)
u=g?A.c:A.ay
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a5(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a9)},
aWD(d,e,f,g,h,i){return this.avc(d,e,f,g,h,5,i)},
jW(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.ePf,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.dZo,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eJY(this,h,i),u,u,u,u,u,u,!1,A.a9))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aN0,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.XC,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.atA(w).cDg(A.b3,A.bF,A.b3.j(0.2),A.c,D.ez4,4)
return new B.C(A.wX,B.v(B.a([s,B.a8H(B.kQ(u,u,u,g,f,new C.eJZ(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
agd(d,e,f,g,h,i){return this.jW(d,e,f,g,h,null,i)},
agD(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.b8
p=new B.az(q,r?3:1,A.r,-1)
t=t?D.bA6:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bQ(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eK0(this,e,u),o,o,o,o,o,o,!1,A.a9))}return B.c4(A.bE,n,A.bx,10,10)},
bGW(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a1z
else{v=x.a8
w=B.B(new B.a1(D.a1z,new C.eJ3(o),v),v.k("G.E"))}v=B.aL(n,A.T,!1,n,!0,A.q,n,B.aM(),o.d,n,n,n,n,n,2,o.aWA("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eJ4(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a6p,!0,A.a5,n,A.am,n,n,n,n)
u=B.aL(n,A.T,!1,n,!0,A.q,n,B.aM(),o.e,n,n,n,n,n,2,o.aWA("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eJ5(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.dj,!0,A.a5,n,A.am,n,n,n,n)
t=o.xh("DESIGNS",A.tp)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cGM[q]
r.push(new B.C(A.j4,o.aed(p,o.x===p,new C.eJ6(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.y,n,n,n,n,A.aU),A.ac,new B.a5(n,118,B.hD(n,new C.eJ7(o,w),w.length,n,n,A.aU,new C.eJ8(),!1),n),A.P,o.aWz(B.v(B.a([B.iB(A.b3,n,n,A.ah,!0,new C.eJ9(o),n,D.f7X,n,D.f4w,o.k3),B.iB(A.b3,n,n,A.ah,!0,new C.eJa(o),n,n,n,D.f1O,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.afp)],s),A.F,n,A.e,A.j,0,A.p)},
cxT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.ayM()
if(a7.length===0)return a5.v7(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Ib,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gam(v)+1
u=a5.dx
m=B.B(u,B.a2(u).k("cl.E"))
A.d.fe(m)
l=m.length!==0&&A.d.dc(m,new C.eKr(a5,m))?a5.db[A.d.gK(m)]:a6
k=new C.eKy(a5)
j=new C.eKA()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Ib,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aV(11,11)
f=u.t(0,h)?A.b3.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ex:A.bF
d=new B.az(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bQ(d,d,d,d),new B.bs(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Lr,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eKs(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a9))}o=a5.v7(B.c4(A.bE,o,A.rr,6,6))
i=B.a([a5.nM("All words",K.ajy,!1,new C.eKt(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.aed("Sentence "+a3,!1,new C.eKu(a5,a7,v,a2)))
a2=a3}}i.push(a5.aed("Clear picks",!1,new C.eKv(a5)))
i=B.c4(A.bE,i,A.bx,8,8)
g=a5.xh("SIZE OF THE PICKED WORDS",D.aj_)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.d8f[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eKw(e,k)
f.push(a5.aed(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.c4(A.bE,f,A.bx,8,8),A.S,a5.nM("Make every word normal",A.l6,!1,new C.eKx(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cte(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bsw,B.d(A.d.iK(D.aua,new C.eKa(q)).b,p,p,p,p,p,p,D.eQH,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cm(new C.eKb(q)),l=q.xh("HIGHLIGHT BEHIND THE WORDS",A.Zt),k=q.p1?-1:q.k4
k=q.agD(k,new C.eKc(q),D.cQG)
w=q.p1
v=w?A.c:A.b8
n=B.a([n,A.S,m,l,B.c4(A.bE,B.a([k,B.aE(p,B.p(p,D.bD3,A.f,p,p,new B.o(p,p,B.I(v,A.r,w?3:1),p,p,D.eKM,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eKf(q),p,p,p,p,p,p,!1,A.a9)],o),A.rr,10,10),A.ao,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Ib,p,p,p)],o)
if(q.gaSs()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.agd("Colour",l,0,360,new C.eKg(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.agd("Shade",k,0.15,0.9,new C.eKh(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.jW("Strength",l,0.15,1,new C.eKi(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.v7(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xh("LOOK",A.xO))
m=B.a([q.nM("Bold",I.aiY,q.fy,new C.eKj(q)),q.nM("Italic",I.aiZ,q.go,new C.eKk(q))],o)
for(u=0;u<3;++u){l={}
k=D.cHT[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tB:p
w=w?p:A.c.j(0.07)
s=new B.aV(14,14)
r=new B.az(q.id===l.a?A.K:A.bF,1,A.r,-1)
m.push(B.aE(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bQ(r,r,r,r),new B.bs(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eKl(l,q),p,p,p,p,p,p,!1,A.a9))}n.push(B.c4(A.bE,m,A.rr,8,8))
n.push(q.xh("COLOUR",A.nG))
n.push(q.agD(q.fx,new C.eKm(q),D.d04))
n.push(A.ao)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Ib,p,p,p))
n.push(q.xh("SIZE AND PLACE",A.Fp))
m=q.fr
m=q.jW("Text size",m,0.5,1.6,new C.eKd(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.v7(B.v(B.a([m,q.jW("Up / down",l,0.12,0.5,new C.eKe(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
ccU(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b3.j(0.6),A.r,1.6)
u=B.a([A.b3.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bIo,A.f,p,p,D.aXS,p,62,p,p,p,p,p,62),A.az,D.f5F,A.ao,D.fa3],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.rT,p,v,w,p,new B.a6(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bot,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaWC(),p,p,p,p,p,p,!1,A.a9)}w=x.p
v=B.A(B.a([B.bv(B.m(12),new B.a5(46,62,B.fK(o,A.A,120,p,A.cn,A.bQ,!1,p,!1,p,p),p),A.ap),A.bd,B.D(B.v(B.a([D.f5f,A.P,B.c4(A.bE,B.a([q.nM("Change",A.kH,!1,q.gaWC()),q.nM("Remove",A.ea,!1,new C.eJP(q))],w),A.bx,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cXJ[t]
u.push(q.nM(s.b,s.a,q.at===t,new C.eJQ(q,t)))}u=B.c4(A.bE,u,A.bx,8,8)
r=q.at
A:{if(0===r){s=q.bX8(o)
break A}if(1===r){s=q.bWc()
break A}if(2===r){s=q.bCP()
break A}if(3===r){s=q.bIY()
break A}s=q.bEV()
break A}return B.v(B.a([v,A.ac,u,A.az,s,A.S,new B.bI(A.a3,p,p,q.nM("Reset the whole picture",A.l6,!1,new C.eJR(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bX8(d){var w=this,v=x.p
return B.v(B.a([B.c4(A.bE,B.a([w.nM("Auto enhance",E.Z8,!1,new C.eJH(w)),w.nM("Make words easy to read",A.ot,!1,new C.eJI(w))],v),A.bx,8,8),A.az,B.cm(new C.eJJ(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bWc(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jW("Exposure",n,-1.5,1.5,new C.eJl(o),0,A.k.aa(n,1))
w=o.RG
w=o.jW("Brightness",w,-0.5,0.5,new C.eJm(o),0,""+A.k.V(w*100))
v=o.rx
v=o.jW("Contrast",v,0.4,2,new C.eJn(o),1,""+A.k.V(v*100))
u=o.xr
u=o.jW("Fade",u,0,1,new C.eJo(o),0,""+A.k.V(u*100))
t=o.aE
t=o.jW("Spotlight",t,0,1,new C.eJp(o),0,""+A.k.V(t*100))
s=o.Z
s=o.jW("Darken",s,0,0.85,new C.eJq(o),0,""+A.k.V(s*100))
r=o.b5
r=o.jW("Vignette",r,0,0.9,new C.eJr(o),0,""+A.k.V(r*100))
q=o.aF
q=o.jW("Shade behind words",q,0,0.85,new C.eJs(o),0,""+A.k.V(q*100))
p=o.aO
return o.v7(B.v(B.a([n,w,v,u,t,s,r,q,o.jW("Shade top & bottom",p,0,0.85,new C.eJt(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bCP(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jW("Colour strength",q,0,2.2,new C.eIH(s),1,""+A.k.V(q*100))
w=s.to
w=s.jW("Warmth",w,-1,1,new C.eII(s),0,""+A.k.V(w*100))
v=s.x1
v=s.jW("Tint",v,-1,1,new C.eIJ(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.v7(B.v(B.a([q,w,v,s.jW("Shift colours",u,-180,180,new C.eIK(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.nM("Negative",D.by4,s.y1,new C.eIL(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xh("COLOUR WASH",A.Mr)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.asW)
t=B.a([u,v,s.agD(w,new C.eIM(s),q),A.P],t)
if(s.b3!=null){q=s.b0
t.push(s.v7(s.agd("Wash strength",q,0,0.9,new C.eIN(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bIY(){var w,v,u,t,s,r=this,q=r.y2
q=r.jW("Blur",q,0,24,new C.eJf(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.jW("Soft focus",w,0,1,new C.eJg(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.v7(B.v(B.a([q,w,r.jW("Film grain",v,0,1,new C.eJh(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xh("LIGHT LEAK",H.aiU)
q=r.ba
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.da(D.asW,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.agD(q,new C.eJi(r),t),A.P],u)
if(r.ba!=null){q=r.bJ
u.push(r.v7(r.agd("Leak strength",q,0,1,new C.eJj(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bEV(){var w,v,u,t,s=this,r=s.aR
r=s.jW("Zoom",r,1,3,new C.eIR(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.jW("Left / right",w,-1,1,new C.eIS(s),0,""+A.k.V(w*100))
v=s.bR
v=s.jW("Up / down",v,-1,1,new C.eIT(s),0,""+A.k.V(v*100))
u=s.c5
t=x.p
return B.v(B.a([s.v7(B.v(B.a([r,w,v,s.jW("Turn",u,-180,180,new C.eIU(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.c4(A.bE,B.a([s.nM("Turn 90\xb0",D.bzF,!1,new C.eIV(s)),s.nM("Flip sideways",A.Fd,s.cR,new C.eIW(s)),s.nM("Flip upside down",A.Fd,s.cU,new C.eIX(s))],t),A.bx,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bZM(){var w=null,v=B.m(22),u=B.I(A.bF,A.r,1)
return B.p(w,B.v(B.a([D.ezg,A.S,D.f7_,A.az,B.aE(w,B.p(A.A,D.ezt,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tB,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eJK(this),w,w,w,w,w,w,!1,A.a9)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.rT,w,u,v,w,w,A.n),w,w,w,w,A.c0,w,w,w)},
bX0(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eJC(p),m=x.p,l=B.A(B.a([D.bsC,p.nM("Reset",A.l6,!1,new C.eJy(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Ib,o,o,o),j=p.xh("SHAPE",A.ak1),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Bl[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aWD(n.$2(t,p.cy),62,u.b,s===t,new C.eJz(v,p),62))}}i=B.c4(A.bE,i,A.bx,8,8)
v=p.xh("RING",A.qF)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Bg[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aWD(n.$2(p.cx,t),62,r.b,q===t,new C.eJA(s,p),62))}u=B.c4(A.bE,u,A.bx,8,8)
s=p.CW
return B.v(B.a([l,A.au,k,j,i,v,u,A.ac,p.v7(p.jW("Size",s,0.12,0.4,new C.eJB(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aZx(d){return new B.a5(null,d,new B.fF(0.5625,B.cm(new C.eJV(this)),null),null)},
csw(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tB:q
t=new B.aV(14,14)
s=D.cZJ[w]
r=v?A.c:A.ay
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.ay
l.push(new B.bG(1,A.bo,B.aE(A.c5,B.df(q,B.v(B.a([r,A.cZ,new B.q1(A.eg,A.A,A.f,new B.x(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bb,new B.o(q,q,q,new B.bs(t,t,t,t),q,u,A.n),D.bk9,q,q,q,A.hF,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eK3(this,w),q,q,q,q,q,q,!1,A.a9),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bmf,A.m7,q,q,q)},
aNq(){var w,v,u=this,t=null,s=u.csw(),r=u.as
A:{if(0===r){w=u.bGW()
break A}if(1===r){w=u.cxT()
break A}if(2===r){w=u.cte()
break A}if(3===r){w=u.ccU()
break A}if(4===r){w=u.bX0()
break A}w=u.bZM()
break A}v=x.p
return B.bv(A.rx,B.ei(B.v(B.a([s,B.D(B.cJ(B.a([w],v),t,D.bnj,t,t,A.ai,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Vw,!0),A.ap)},
aJG(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc3r(),p=B.m(16)
q=B.D(B.aE(r,B.p(r,D.ezC,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b8,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a9),1)
p=s.Q?r:s.gbIy()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cw,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eEu)
else t.push(D.bCa)
t.push(A.ab)
t.push(D.bul)
return B.p(r,B.A(B.a([q,A.aw,B.D(B.aE(r,B.p(r,B.A(t,A.m,r,A.b9,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tB,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a9),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aWZ,r,r,r,r,G.afd,r,r,r)},
aWB(){var w=null
return new B.C(S.Xy,B.A(B.a([B.aH(w,w,w,w,A.mg,w,w,w,new C.eJk(this),w,w,w,w,w,w),D.flK,A.b2,D.bKF],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cc(w,A.A6,B.bq(!0,B.cm(new C.eKB(this)),!0,!1,A.ah,!0,!0),w,!1,!1,w,w)}}
C.bdm.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eT()
m.dI(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.W()
t=B.L()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.L()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c5(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.r7.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.lT.prototype={}
C.z_.prototype={
ad(){var w=this
return B.E(["at",w.a.a5().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nv.prototype={}
C.vA.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a6N.prototype={}
C.apx.prototype={}
C.a_b.prototype={
T(){return new C.aFJ(new B.ar(A.as,$.aw()),B.kd(!0,null,!0,!0,null,null,!1),D.do1,B.a([],x.s),B.et([D.H3],x.Q))}}
C.aFJ.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
ZM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ZM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().Bp(90,700,700,A.eF),$async$ZM)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$ZM)
case 8:p=e
if(r.c!=null)r.m(new C.eQB(r,p,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZM,v)},
ZP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$ZP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hU().aEZ(78,n,1100,1100),$async$ZP)
case 7:q=e
if(J.ck(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gU(n)
if(J.ab(p)>=20){w=9
break}w=10
return B.b(o.fc(),$async$ZP)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c8(l,".png"))k="image/png"
else k=A.a.c8(l,".webp")?"image/webp":"image/jpeg"
J.cf(p,"data:"+k+";base64,"+A.cS.gct().aI(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eQC(r,p))
t=2
w=6
break
case 4:t=3
h=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZP,v)},
b0w(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fK(A.cB.aI(A.d.gam(d.split(","))),A.A,u,u,A.cn,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bir},
bX6(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cnB(C.fqE(w,this.b0w(d),f),g)},
aaJ(d,e,f,g,h){var w=null,v=new C.eQz(f,e),u=new C.eQA(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b3.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.V(f?A.B0:A.Mf,A.bZ,w,w,w,26),w,w,w),D.e3S],x.p),w),w)
else p=this.bX6(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.p(w,B.A(B.a([B.D(B.av(p,w,w,w),1),D.bBS],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.m8,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eQy(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ae)},
aU5(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bv(B.m(8),B.fK(A.cB.aI(A.d.gam(h.split(","))),A.A,p,p,A.cn,A.bQ,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bk.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.ew,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.a6u,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a_p,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a9))
return B.aF(!1,A.a1,!0,u,B.aK(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lw,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ae)},
a6W(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a6W=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fu4(),$async$a6W)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eQh(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a8(n)
if(r.c!=null)r.m(new C.eQi(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a6W,v)},
acw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$acw=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eQk(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eQl(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eQm(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cf(p,h)}w=7
return B.b(C.fpm(q,r.cx,j,new C.b_f(r.z,r.Q,r.as,r.at),new C.eQn(r),i,m,p,k),$async$acw)
case 7:o=a0
o.ch=r.r
p=r.w
m=p.a
if(m.length!==0){k=o
k.db=m
k.dx=p.b
k.dy=p.c
p=p.d
k.fr=p.length!==0?p:r.x}p=r.c
if(p!=null)B.a4(p,!1).N(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a8(e)
if(r.c!=null)r.m(new C.eQo(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acw,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eC,g).w
g=B.aI(d,A.bS,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b8,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bF1,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bk.j(0.5),A.J,24)],v),D.bNQ,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eQP(i),h,h,h,h,h,h,!1,A.a9),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a_p,h,h,h,i.ax?h:new C.eQQ(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbxV()
v=B.a([new B.ac(0,A.G,A.b3.j(0.45),A.J,10)],v)
s.push(B.hn(B.aF(!1,A.a1,!0,h,B.aK(!1,h,!0,B.p(h,B.V(i.e==null?A.v6:A.hw,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vk,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ae),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aL(h,A.T,!1,h,!0,A.q,h,B.aM(),i.d,h,h,h,h,h,2,B.bo(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.az(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aUs),h,h,h,h,h,h,h,h,V.I0,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.j4,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ag,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aNn,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eQR(i)
s=i.aU5(A.l8,q,r,i.gcdk(),s)
r=i.z
r=B.D(i.aaJ(new C.eQT(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.ao,B.A(B.a([r,A.bn,B.D(i.aaJ(new C.eQU(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gK(s)
p=i.y.length===0?h:new C.eQV(i)
s=i.aU5(A.v3,r,p,i.gcds(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gK(o)
p=B.D(i.aaJ(new C.eQW(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gK(n)
o=B.a([w,A.az,D.fbh,A.au,D.fe2,A.bu,u,A.P,D.fcw,A.az,v,A.bu,B.A(B.a([q,A.aw,B.D(B.v(B.a([s,A.ao,B.A(B.a([p,A.bn,B.D(i.aaJ(new C.eQX(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ao,D.ffH],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bbv,A.r,1)
w=C.afv(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.A(B.a([D.bG6,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eW5,h,h,h),B.aK(!1,h,!0,D.dZE,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eQY(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b5a,h,u,v,h,h,A.n),h,h,h,h,D.blV,h,h,h),h)],t))}o.push(A.bu)
o.push(D.f2w)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cSG[m]
v=i.ch===l?A.b3:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.ay:A.bF,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bG(1,A.bo,new B.C(A.jo,B.aE(h,B.df(A.A,new B.x(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bb,new B.o(v,h,new B.bQ(k,k,k,k),h,h,h,A.a6),A.eD,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eQZ(i,l),h,h,h,h,h,h,!1,A.a9),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bu)
o.push(D.fk2)
o.push(A.P)
o.push(B.cm(new C.eR_(i)))
o.push(A.bu)
o.push(D.f9s)
o.push(A.P)
w=B.a([i.b3e("auto","Let AI choose",A.dS,A.OX)],t)
for(v=x.O,m=0;m<11;++m){j=D.vp[m]
u=j.d
w.push(i.b3e(j.a,j.b,j.c,B.a([B.b0(A.d.gK(u).a),B.b0(A.d.gK(u).b)],v)))}o.push(B.c4(A.bE,w,A.bx,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bk.j(0.5):A.bF,A.r,1)
o.push(B.p(h,B.iB(h,A.bk,h,h,h,new C.eQS(i),D.bBj,D.fji,h,D.f4J,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.az,B.d(w,h,h,h,h,h,h,D.aMD,h,h,h)],t))
o.push(A.bu)
w=i.ax?h:i.gc3v()
v=B.fl(h,h,A.b3,A.b3.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eEk:A.FD
o.push(new B.a5(h,54,B.ll(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oQ,h,h,h),w,v),h))
return new B.C(new B.N(0,0,0,f.f.d),B.p(h,B.bq(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.q,h,A.y,h,A.uW,h,h,A.ai),!0,!1,A.ah,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.a9d,h,h,h,h,h,h,h,h),h)},
bK1(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eQp(this,p,d)
if(d===D.BX)return new C.aCg(p,o,q)
w=B.m(16)
v=p?E.vk:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.ay:A.bF,A.r,1)
s=B.V(p?A.ed:C.hv0(d),A.c,q,q,q,20)
r=C.hv1(d)
return B.aE(q,B.df(q,B.v(B.a([s,A.au,B.f4(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.b9,A.j,0,A.p),q,q,A.bb,new B.o(u,q,t,w,q,v,A.n),A.hV,q,64,q,A.hu,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a9)},
b3e(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a6(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.df(v,B.A(B.a([w,L.HV,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bb,new B.o(s,v,r,t,v,v,A.n),A.eD,v,v,v,L.ags,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eQE(this,d),v,v,v,v,v,v,!1,A.a9)}}
C.a_a.prototype={
T(){return new C.aFI(new B.ar(A.as,$.aw()))}}
C.aFI.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
acx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$acx=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ab(a0)<3){r.m(new C.eQa(r))
w=1
break}B.eO()
r.m(new C.eQb(r))
t=4
q=C.hW5(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hVQ(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eQc(r,q))
w=1
break}k=r.c
if(k!=null)B.a4(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fOI()
f=$.C1.h(0,k.a)
o=f==null||J.ck(f)?null:J.fn(f)
if(o==null){r.m(new C.eQd(r))
w=1
break}n=C.hVO(o,r.a.c)
C.hVK(r.a.c.a)
$.fNZ=!0
k=r.c
if(k!=null)B.a4(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fRp(j)
h=C.fRq(r.a.c)
e=C.fRr(r.a.c)
w=7
return B.b(C.bzN(k,r.a.c.a,j,h,new C.eQe(r),i,e,a0),$async$acx)
case 7:m=a3
k=r.c
if(k!=null)B.a4(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a8(a1)
if(r.c!=null)r.m(new C.eQf(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acx,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eC,i).w
i=B.aI(d,A.bS,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b8,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.akj,A.f,j,j,D.aWE,j,34,j,j,j,j,j,34),A.aw,D.btb],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,V.aN4,j,j,j)
s=A.c.j(0.05)
s=B.aL(j,A.T,!0,j,!0,A.q,j,B.aM(),k.d,j,j,j,j,j,2,B.bo(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.az(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),Am.a8I),j,j,j,j,j,j,j,j,V.I0,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ag,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aNn,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cPe[q]
o=A.c.j(0.06)
n=k.e?j:new C.eQg(k,p)
r.push(B.mw(j,o,new B.x(p,j,As.Sc,j,j,j,j,j,j,j,j,j),j,n,j,j,O.wf,j))}w=B.a([w,A.az,u,A.ao,t,A.az,s,A.S,B.c4(A.bE,r,A.bx,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aMD,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc3w()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bk.j(0.5),A.fu.j(0.5)],x.O):D.cnS
o=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.cw,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dZA:D.bFG
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aK(!1,s,!0,B.ex(B.A(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.iU,j,j,j)],v),A.m,j,A.b9,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a6(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ae))
return new B.C(new B.N(0,0,0,h.f.d),B.p(j,B.bq(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.q,j,A.y,j,A.uW,j,j,A.ai),!0,!1,A.ah,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.a9d,j,j,j,j,j,j,j,j),j)}}
C.b_f.prototype={}
C.aCg.prototype={
T(){return new C.bhX(null,null)}}
C.bhX.prototype={
gavd(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pl,null,1,null,v)
w.cF(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gavd().q()
this.brZ()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gavd(),new C.e6n(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a9)}}
C.bfy.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cUH[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.wM.j(0.25+r*0.6).gp(0)
n=o.H()
t.drawCircle(p,q,1+r*1.4,n)
n.delete()
if(r>0.85){m=4*(r-0.85)/0.15
o.c=1
n=o.H()
t.drawLine.apply(t,[p-m,q,p+m,q+0,n])
n.delete()
n=o.H()
t.drawLine.apply(t,[p,q-m,p+0,q+m,n])
n.delete()}}},
ar(d){return d.b!==this.b}}
C.aq6.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.Yz.prototype={
T(){return new C.azJ()}}
C.azJ.prototype={
gagA(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.afI(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzC(){var w=this.e
return w===$?this.e=C.fRp(this.a.c).t(0,D.BX):w},
a6J(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6J=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.df7(s))
u=3
r=A.d.iK(D.vp,new C.df8(s))
q=B.d9(C.fRp(s.a.c),x.Q)
l=q
J.hJ(l,D.BX)
p=l
if(s.gzC())J.cf(p,D.BX)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzC()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fRq(i.c)
g=C.fRr(s.a.c)
w=6
return B.b(C.bzN(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a6J)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.afI(q,s.gagA())
f=q==null?null:q.b
n=f==null?s.gagA():f
if(!J.y(n,r.a)&&!s.gzC())throw B.S("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a4(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a8(d)
if(s.c!=null)s.m(new C.df9(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a6J,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aQ:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aK,A.r,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dfc(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.V(A.cv,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vp[w]
u=o.gagA()
t=o.f?n:new C.dfd(o,v)
f.push(new C.bqg(v,u===v.a,t,n))}f=B.lP(1.25,f,3,10,10,n,A.dP,!0)
u=B.m(18)
t=o.gzC()?D.bQv:n
if(o.gzC())s=n
else s=m?A.bj:A.bN
r=B.V(A.dS,o.gzC()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzC()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzC()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzC()
f=B.a([f,A.az,B.p(n,B.A(B.a([r,A.aw,q,B.au5(n,A.c,n,A.bJ,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dfe(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.afg,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.eWo,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.y,n,A.EB,n,n,A.ai)
u=o.f?n:o.gbwU()
t=B.bk(A.K,n,n,n,n,n,A.ah,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bq(!0,B.p(n,B.v(B.a([new B.C(D.boX,e,n),new B.dl(1,A.ch,f,n),new B.C(A.EA,new B.a5(1/0,50,B.bJ(B.ex(B.av(o.f?A.rj:D.fbK,n,n,n),n,new B.o(n,n,n,s,n,D.bP5,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tb,n,n,n,n),!0,!1,A.ah,!0,!0)}}
C.bqg.prototype={
B(d){var w=null,v=this.c,u=A.d.gK(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.kU,w,w,B.V(v.c,A.ad,w,w,w,18),w),new B.bI(A.ll,w,w,B.d(v.b,w,w,w,w,w,w,D.eWm,w,w,w),w)],x.p)
if(q)v.push(D.aSy)
return B.aE(w,B.df(w,new B.an(A.W,w,A.aa,A.q,v,w),w,w,A.bb,new B.o(w,w,p,t,s,new B.a6(A.ax,A.aC,A.x,r,w,w),A.n),A.eD,w,w,w,A.cj,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a9)}}
C.e6k.prototype={
aCC(d,e,f){return e+"@"+A.a.aT(A.o.fM(f==null?this.a.c:f,16),8,"0").toUpperCase()},
w1(d,e){return this.aCC(0,e,null)}}
C.aKg.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.b_b.prototype={
B(d){var w,v,u=null,t=C.fQf(this.c)
if(t==null)w=D.bhd
else{w=B.aI(d,u,x.w).w.cCJ(D.bls,D.eDz)
v=this.d
w=B.u9(B.e2(B.amv(!1,t,!1,v,!1,390),!v,u),w)}return B.f4(A.A,new B.a5(416,870,new C.bjA(w,u),u),A.f,A.dt)}}
C.bjA.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.d4y[w]
u=new B.aV(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bs(u,u,u,u),t,D.amc,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.d5H[w]
u=new B.aV(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bs(u,u,u,u),t,D.amc,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bY(0,B.bX(t,new B.o(t,t,t,B.m(64),D.cFz,D.bNy,A.n),A.be),0,0,0))
s.push(B.bY(3,B.bX(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.be),3,3,3))
s.push(B.bY(13,B.bv(B.m(51),B.ei(this.c,A.w,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aSJ,B.p(t,t,A.f,t,t,D.aWX,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bY(13,B.e2(B.bv(B.m(51),D.bix,A.ap),!0,t),13,13,13))
s.push(B.ao(22,B.e2(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l2.prototype={
p7(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cB(),f=C.cB(),e=m.r
f=C.em(A.L,!1,e.l(),A.aB,"",k,42,A.bi,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bf,j,2,"Your Presentation Title",0,0,"",D.mm,D.cP,0.84,0.08,0.26)
w=C.cB()
v=m.w
w=C.em(A.L,!1,v.l(),A.aB,"",k,20,A.bi,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.bf,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dc,D.cP,0.76,0.12,0.56)
u=C.cB()
t=m.d
s=x.u
t=C.r8(i,l,0,0,B.a([f,w,C.em(A.bg,!1,4279310375,A.aB,"",t.j(0.8).l(),24,A.bi,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fn,t.l(),3,"",0,0,"",D.cf,D.eZ,0.3,0.35,0.72)],s),C.cB(),D.ml,"","","Welcome",D.dc)
u=C.cB()
u=C.em(A.bg,!1,e.l(),A.aB,"",k,34,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Agenda",0,0,"",D.cf,D.cP,0.84,0.08,0.08)
w=C.cB()
w=C.r8(i,l,0,0,B.a([u,C.em(A.bg,!0,v.l(),A.aB,"",k,22,A.bi,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.bf,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tQ,D.cP,0.8,0.1,0.26)],s),C.cB(),D.ml,"","","Agenda",D.dc)
u=C.cB()
u=C.em(A.bg,!1,e.l(),A.aB,"",k,32,A.bi,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Main Idea",0,0,"",D.cf,D.cP,0.84,0.08,0.08)
f=C.cB()
f=C.r8(i,l,0,0,B.a([u,C.em(A.bg,!0,v.l(),A.aB,"",k,21,A.bi,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.bf,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cf,D.cP,0.8,0.1,0.26)],s),C.cB(),D.ml,"","","Key Point 1",D.dc)
u=C.cB()
u=C.em(A.bg,!1,e.l(),A.aB,"",k,30,A.bi,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bf,j,2,"Compare & Contrast",0,0,"",D.cf,D.cP,0.84,0.08,0.08)
r=C.cB()
r=C.em(A.bg,!0,v.l(),A.aB,"",k,18,A.bi,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.bf,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cf,D.cP,0.4,0.08,0.24)
q=C.cB()
q=C.r8(i,l,0,0,B.a([u,r,C.em(A.bg,!0,v.l(),A.aB,"",k,18,A.bi,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.bf,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cf,D.cP,0.4,0.52,0.24)],s),C.cB(),D.ml,"","","Key Point 2",D.dc)
r=C.cB()
r=C.em(A.L,!1,e.l(),A.aB,"",k,48,A.bi,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bf,j,2,h,0,0,"",D.dc,D.cP,0.8,0.1,0.32)
e=C.cB()
p=C.B1(l,l,l,l,D.BT,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.r8(i,l,0,0,B.a([r,C.em(A.L,!1,v.l(),A.aB,"",k,22,A.bi,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.bf,j,2,"Questions?",0,0,"",D.cf,D.cP,0.7,0.15,0.58)],s),C.cB(),D.ml,"","",h,D.dc)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.E_.prototype={
bx(d){return this.e.$1(d)}}
C.ep.prototype={}
C.iU.prototype={}
C.DQ.prototype={
gaIe(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.afv(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a21(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.DQ(v,u,t,d==null?w.d:d)},
EP(d){return this.a21(null,d,null,null)},
aBo(d){return this.a21(null,null,null,d)},
cCH(d,e){return this.a21(d,e,null,null)},
b8j(d){return this.a21(d,null,null,null)},
b8q(d){return this.a21(null,null,d,null)}}
C.Mw.prototype={
T(){return new C.bhj(new B.eK(0,$.aw()),null,null)}}
C.bhj.prototype={
a_(){var w,v=this
v.a1()
w=v.q2(new C.dPS(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.j1(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.aw()
w.P$=0
this.brr()},
B(d){var w=C.afv(this.a.c.a)
if(w==null)w=A.d.gK(D.FY)
return B.cm(new C.dPR(this,w,C.h58(this.a.c.d)))}}
C.boR.prototype={
B(d){return B.nA(A.TZ,this.e,new C.ePo(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bcs.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aPX(d,e,v)
break
case"confetti":w.bDk(d,e,v)
break
case"crown":w.bEW(d,e,v)
break
case"aurora":w.bxZ(d,e,v)
break
case"champagne":w.bBb(d,e,v)
break
case"diamonds":w.bH4(d,e,v)
break
case"starburst":w.cqi(d,e,v)
break
case"balloons":w.byc(d,e,v)
break
case"galaxy":w.bLK(d,e,v)
break
case"redcarpet":w.chs(d,e,v)
break
case"coins":w.bCH(d,e,v)
break
case"lanterns":w.bVK(d,e,v)
break
case"hearts":w.bTp(d,e,v)
break
case"petals":w.ccM(d,e,v)
break
case"butterflies":w.bAd(d,e,v)
break
case"neon":w.bZw(d,e,v)
break
case"disco":w.bHf(d,e,v)
break
case"sunrise":w.crN(d,e,v)
break
case"pearls":w.cbQ(d,e,v)
break
case"snow":w.cpY(d,e,v)
break
case"laurel":w.bVQ(d,e,v)
break
case"ribbons":w.cjX(d,e,v)
break
case"kente":w.bVy(d,e,v)
break
case"trophy":w.cvn(d,e,v)
break
case"shooting":w.cnR(d,e,v)
break
case"bokeh":w.byw(d,e,v)
break
case"orbits":w.c9w(d,e,v)
break
case"flowers":w.bL1(d,e,v)
break
case"music":w.bZg(d,e,v)
break
case"mandala":w.bXI(d,e,v)
break
case"sparklers":w.cq6(d,e,v)
break
case"city":w.bC0(d,e,v)
break}},
r0(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.L()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.ne
u=new B.aP(w.r,A.aq,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.cR(w,t,w+f,t))
u.E(new B.cR(w,t,w,t+f))
u.E(new B.cR(w,t,w-f,t))
u.E(new B.cR(w,t,w,s))
u.E(new B.bE())
d.aN(u,v)
d.ag(e,f*0.18,v)},
lr(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cT(q,v)*2.5)+C.cT(q,u)*6.28)+1)/2
this.r0(d,new B.u(C.cT(q,t)*o,C.cT(q,s)*n),m*(0.006+0.014*C.cT(q,r))*(0.5+p),h,p*p)}},
aPX(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lr(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aL],w),B.a([A.ij,A.bA],w),B.a([A.er,A.aW],w),B.a([A.c,A.av],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bw(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cT(h,1))
f=g+c0*(C.cT(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cT(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.l8(new B.u(g,c1),new B.u(f,e),A.cp.av(0,i/0.22))
a0.toString
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new B.a6(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.ra(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.l8(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=A.c.gp(0)
a3=a2.H()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cp.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cT(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hr(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cT(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cT(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bO
b9.a=A.ne
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cT(h,b1+120)>0.5)this.r0(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bDk(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.L()
a0.sau(new B.a6(A.ax,A.aC,A.x,D.d_K,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.a9(0,0,f,e)))
a1.aX(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cT(u,1)))+C.cT(u,2)*w,w)
s=C.cT(u,3)
r=Math.sin(a3*(0.8+C.cT(u,4))+u)
q=h*(0.012+0.012*C.cT(u,5))
p=Math.cos(a3*(2+3*C.cT(u,6))+u)
o=D.Oq[A.o.D(A.k.bw(C.cT(u,7)*5),0,4)]
J.bA(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cT(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aP(d.r,A.aq,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bx(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.af
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cE(m.gbI().a.snapshot()):t).a,k)
k.delete()}else{t=B.ct(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c5(t),k)
k.delete()}f.restore()}this.lr(a1,a2,a3,25,A.bJ,30)},
bEW(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aP(o.r,A.aq,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.bJ.j(0.22),D.b6O],v),a4,a4).aw(0,B.bU(w,u)))
l=o.H()
o=m.gbI().a.snapshot()
t.drawPath((m.e=new B.cE(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aP($.W().r,A.aq,a4,a4,B.a([],r))
v=a6+j
i.E(new B.b5(a5,v))
u=j*0.3
s=a6+u
i.E(new B.ap(a5,s))
o=a6+j*0.6
i.E(new B.ap(a5+k*0.22,o))
i.E(new B.ap(a5+k*0.5,a6))
i.E(new B.ap(a5+k*0.78,o))
o=a5+k
i.E(new B.ap(o,s))
i.E(new B.ap(o,v))
i.E(new B.bE())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.L()
n.sau(new B.a6(A.b0,A.b5,A.x,D.cZE,a4,a4).aw(0,new B.a9(a5,a6,o,v)))
a8.aN(i,n)
for(v=[D.ecx,D.e6Q,D.elp],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.ad.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.hS.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wG(i),u=B.a([],x.X),o=new B.ve(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jO(y.M));--f
o.jb()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aP(n,v.b,a4,new B.cL([new B.GF(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.af
f.c=g
f.e=A.fx
f.r=A.bJ.gp(0)
l=f.H()
f=d.gbI().a.snapshot()
t.drawPath((d.e=new B.cE(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.r0(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lr(a8,a9,b0,45,A.bJ,40)},
bxZ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lr(a8,a9,b0,60,A.c,50)
w=[D.evd,D.euW,D.euR,D.ew8]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.W()
i=B.a([],p)
h=new B.aP(n.r,A.aq,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.af
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.ne
n.z=new B.hr(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbI().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.af
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.ne
n.z=new B.hr(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbI().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cT(a4,1))+C.cT(a4,2)*a3,a3)
r=C.cT(a4,3)
q=Math.sin(b0+a4)
p=C.cT(a4,4)
$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.wL.j(0.4+0.5*C.cT(a4,5)).gp(0)
n.a=A.ne
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bBb(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.L()
a0.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.hB.j(0.25+0.1*h),D.VF],x.O),l,l).aw(0,B.bU(new B.u(g,f),e)))
a1.ag(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aP(d.r,A.aq,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b5(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ap(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bx(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.af
a0.c=h
a0.r=D.Oq[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cE(u.gbI().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cT(w,1)))+C.cT(w,2)*o,o)
r=k*(0.1+0.8*C.cT(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cT(w,4))
if(n<f){this.r0(a1,new B.u(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.af
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.zU.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bH4(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lr(a9,b0,b1,30,A.kW,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cT(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cT(p,2))+C.cT(p,3)*n,n)-o*2
l=C.cT(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bA(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.W()
g=B.a([],q)
f=new B.aP(h.r,A.aq,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.b5(e,i))
h*=0.28
j*=0.6
g.push(new B.ap(h,j))
d=o*0.28
g.push(new B.ap(d,j))
a0=o*0.5
g.push(new B.ap(a0,i))
a1=k*0.6
g.push(new B.ap(0,a1))
g.push(new B.bE())
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a6(A.ax,A.aC,A.x,D.cVF,a5,a5).aw(0,B.ct(A.J,k*1.2,o)))
a2=g.H()
g=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cE(g)).a,a2)
a2.delete()
a3=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.b=A.af
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gp(0)
a2=a3.H()
v.drawLine.apply(v,[e,i,a0,i,a2])
a2.delete()
a2=a3.H()
v.drawLine.apply(v,[h,j,0,a1,a2])
a2.delete()
a2=a3.H()
v.drawLine.apply(v,[d,j,0,a1,a2])
a2.delete()
v.restore()
a4=Math.sin(u+p*1.7)
if(a4>0.85)this.r0(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cqi(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.W()
o=B.a([],v)
n=new B.aP(p.r,A.aq,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bJ.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbI().a.snapshot()
w.drawPath((n.e=new B.cE(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.W()
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.af
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bw(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cT(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bhU.av(0,k)*(0.5+0.5*C.cT(t,v)))
this.r0(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cT(t,3)),D.Oq[A.o.D(A.k.bw(C.cT(t,4)*5),0,4)],u)}},
byc(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cT(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cT(o,2))+C.cT(o,3)*m,m)
j=C.cT(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.atj[A.o.F(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aP(h.r,A.aq,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bx(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.af
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cE(f.gbI().a.snapshot()):d).a,a1)
a1.delete()
a2=B.ct(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sau(new B.bR(D.aSM,0.9,A.x,a3,0,B.a([A.c,i,d],t),U.ata,a3).aw(0,a2))
a1=l.H()
u.drawOval(B.c5(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aP(g.r,A.aq,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bE())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbI().a.snapshot()
u.drawPath((g.e=new B.cE(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cT(o,11))+C.cT(o,12)*m,m)
r=C.cT(o,13)
J.bA(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.ct(A.J,t,v)
$.W()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.atj[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c5(s),a1)
a1.delete()
u.restore()}},
bLK(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lr(b1,b2,b3,50,A.c,70)
for(w=[D.evl,D.ev1,D.ev7],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aw(0,B.bU(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cT(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cT(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bJ,A.ex,g)
k.toString
d=C.cT(i,3)
$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cT(i,4)).gp(0)
a0.a=A.ne
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.L()
a9.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.zU.j(0.55),D.acY],u),a4,a4).aw(0,B.bU(b0,a8)))
b1.ag(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bw(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cT(a2,9)),a6*0.1*C.cT(a2,8))
a5=B.l8(a3,a3.ae(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l8(a3,a5,0.6)
a6.toString
a8=B.L()
a8.sau(new B.a6(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.ra(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
chs(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.W()
n=B.a([],s)
m=new B.aP(o.r,A.aq,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(new B.bR(A.A,0.5,A.x,b5,0,B.a([A.zU.j(0.28),D.acY],w),b5,b5).aw(0,B.bU(new B.u(q,u),t)))
o.a=A.ne
l=o.H()
q=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eG:A.f1)
a9=$.W()
b0=B.a([],s)
m=new B.aP(a9.r,A.aq,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cR(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a9.sau(new B.a6(A.a3,A.a7,A.x,a7,b5,b5).aw(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cE(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hB.gp(0)
b1.c=o
b1.d=A.bO
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aP($.W().r,A.aq,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ap(b6*0.58,w))
b2.E(new B.ap(b6*0.8,b7))
b2.E(new B.ap(b6*0.2,b7))
b2.E(new B.bE())
v=B.L()
v.sau(D.bP_.aw(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aN(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cT(r,1))+C.cT(r,2)*b3,b3)
u=C.cT(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.r0(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cT(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bCH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cT(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cT(t,2))+C.cT(t,3)*r,r)-q
o=C.cT(t,4)*i
n=Math.cos(f*(2+3*C.cT(t,5))+t)
m=Math.abs(n)
l=B.ct(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new B.a6(A.ax,A.aC,A.x,n>0?D.d8L:D.ctv,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c5(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.af
j.c=Math.max(0.6,s*0.08)
j.r=D.bfc.gp(0)
k=j.H()
v.drawOval(B.c5(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.r0(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lr(d,e,f,30,A.bJ,110)},
bVK(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lr(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cT(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.sau(new B.bR(A.A,0.5,A.x,d,0,B.a([H.VP.j(0.45*k),D.abV],u),d,d).aw(0,B.bU(new B.u(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aP(i.r,A.aq,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b5(l-i,e))
j.push(new B.ap(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ap(l+i,h))
j.push(new B.ap(l-i,h))
j.push(new B.bE())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.b6Z,A.c,0.2*k)
i.toString
j.sau(new B.a6(A.b0,A.b5,A.x,B.a([D.bb9,i],u),d,d).aw(0,B.ct(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bTp(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cT(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bA(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.W()
l=B.a([],t)
i=new B.aP(m.r,A.aq,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pl(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pl(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cNc[A.o.F(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sau(new B.bR(A.ru,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a0x,d).aw(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbI().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lr(a3,a4,a5,30,A.ij,130)},
ccM(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cT(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cT(q,2))+C.cT(q,3)*o,o)
m=C.cT(q,4)
l=Math.sin(s+q*0.7)
J.bA(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cT(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aP(n.r,A.aq,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cR(p,l,0,p))
m.push(new B.cR(n,l,0,n))
m.push(new B.bE())
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cnR:D.cWS
n.sau(new B.a6(A.a3,A.a7,A.x,m,i,i).aw(0,B.bU(A.J,p)))
j=n.H()
n=k.gbI().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lr(d,e,a0,25,A.bJ,140)},
bAd(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lr(b0,b1,b2,40,A.bJ,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cT(r,1))
p=Math.sin(b2*(0.15+0.1*C.cT(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cT(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bA(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bA(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aP(a2.r,A.aq,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pl(f,e,l,d,h,0))
a3.push(new B.pl(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.sau(new B.a6(A.a3,A.a7,A.x,i?D.cWC:D.cZ9,a6,a6).aw(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbI().a.snapshot()
v.drawPath((a4.e=new B.cE(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.af
a2.c=Math.max(0.6,o)
a2.r=D.A0.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cE(a4.gbI().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bez.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bZw(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.af
q.c=v
q.r=D.auj[t].j((1-s)*0.9).gp(0)
q.z=new B.hr(A.G,v)
p=r*0.3
p=B.by(B.ct(e,r,r*1.6),new B.aV(p,p))
o=q.H()
u.drawRRect(B.ew(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cT(m,1)*4)+m)))
k=D.auj[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.by(new B.a9(j,i,j+w,i+l),new B.aV(v,v))
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hr(A.a8x,p)
o=j.H()
u.drawRRect(B.ew(i),o)
o.delete()}},
bHf(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cT(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cT(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.o4,A.dx][A.o.F(p,4)]
j=C.cT(p,3)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.ne
i.z=new B.hr(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.L()
t.r=A.ay.gp(0)
t.c=1.2
a3.bA(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.L()
t.r=A.dV.gp(0)
a3.ag(v,u,t)
J.bA(q.save())
a1=new B.aP(a1.r,A.aq,null,null,B.a([],x.v))
a1.E(new B.kC(B.bU(v,u)))
a3.tF(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bp,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c5(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.r0(a3,v.ae(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
crN(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cp.av(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aP(r.r,A.aq,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bJ.j(0.1).gp(0)
o=r.H()
r=p.gbI().a.snapshot()
w.drawPath((p.e=new B.cE(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.L()
a0.sau(new B.bR(A.A,0.5,A.x,h,0,B.a([D.b3e.j(0.6),D.abV],x.O),h,h).aw(0,B.bU(a1,d)))
a2.ag(a1,d,a0)
a0=e*0.2
d=B.L()
d.sau(D.e4H.aw(0,B.bU(a1,a0)))
a2.ag(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cT(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.ct(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c5(i),o)
o.delete()
i=B.ct(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c5(i),o)
o.delete()}this.lr(a2,a3,a4,20,A.hS,180)},
cbQ(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aP(r.r,A.aq,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bx(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bx(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bx(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cu,A.iY,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbI().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cT(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cT(i,2))+C.cT(i,3)*j,j)
n=C.cT(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.sau(new B.bR(A7.q8,0.5,A.x,f,0,D.d1f,f,f).aw(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lr(a1,a2,a3,25,A.c,190)},
cpY(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cT(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cT(r,2))+C.cT(r,3)*p,p)
n=C.cT(r,4)
m=Math.sin(t+r)
$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cT(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bO
J.bA(v.save())
v.translate(n*g+m*e*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
h=l.H()
v.drawLine.apply(v,[0,0,0,o,h])
h.delete()
h=l.H()
v.drawLine.apply(v,[0,n,m,k,h])
h.delete()
h=l.H()
v.drawLine.apply(v,[0,n,j,k,h])
h.delete()}v.restore()}this.lr(d,a0,a1,40,A.er,200)},
bVQ(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dG(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bA(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.ct(new B.u(p,0),q,r)
$.W()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.sau(D.bON.aw(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c5(g),e)
e.delete()
s.restore()}}$.W()
a0=B.L()
a0.b=A.af
a0.c=a2*0.003
a0.r=D.b7c.gp(0)
a3.ag(w,v*1.08,a0)
d=a5*0.8
this.r0(a3,w.ae(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lr(a3,a4,a5,40,A.bJ,210)},
cjX(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hB,A.hS],a6),B.a([A.oa,A.ij],a6),B.a([A.aD,A.ex],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bW<aj.E>"),q=s.k("aj.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
k=B.a([],o)
j=new B.aP(l.r,A.aq,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b5(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bW(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bx(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bx(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sau(new B.a6(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.atZ,new B.m8(w)).aw(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbI().a.snapshot()):l).a,a2)
a2.delete()}this.lr(a8,a9,b0,40,A.c,220)},
bVy(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bw(g/t),5)
a1=g+t
$.W()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a0A[a3].gp(0)
a4=a2.H()
s.drawRect(B.c5(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a0A[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c5(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cT(a0,1))+C.cT(a0,2)*a6,a6)
v=C.cT(a0,3)
t=C.cT(a0,4)
this.r0(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a0A[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cvn(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bJ.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aP($.W().r,A.aq,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b5(v,a2))
w=a1+w
l.E(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.cR(w,r,p,k))
w=a2+m*0.95
l.E(new B.ap(p,w))
p=n*0.3
j=a2+m
l.E(new B.ap(a1+p,j))
l.E(new B.ap(a1-p,j))
q=a1-q
l.E(new B.ap(q,w))
l.E(new B.ap(q,k))
l.E(new B.cR(v,r,v,a2))
l.E(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.ct(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.af
d.c=q
d.r=A.av.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c5(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.L()
a1.sau(new B.a6(A.a3,A.a7,A.x,D.d3l,A.atq,null).aw(0,new B.a9(v,a2,r,j)))
a4.aN(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.r0(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bDl(a4,a5,a6,60)},
bDl(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cT(p,31))+C.cT(p,32)*v,v)
n=C.cT(p,33)
J.bA(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.ct(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Oq[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c5(o),m)
m.delete()
u.restore()}},
cnR(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lr(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cT(o,1)*1.6
m=A.k.F(a2+C.cT(o,2)*n,n)/n
l=e*(C.cT(o*7+A.k.bw((a2+C.cT(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a6(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bJ],s),null,null).aw(0,B.ra(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.r0(a0,i,p,A.c,1-m)}},
byw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cT(r,1))
p=A.k.F(C.cT(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cT(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.avJ[l].j(n).gp(0)
m.a=A.ne
m.z=new B.hr(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.af
m.c=Math.max(0.6,q*0.05)
m.r=D.avJ[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
c9w(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bA(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.ct(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.af
o.c=u
o.r=A.bJ.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c5(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hS.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hB.j(0.4).gp(0)
k.z=new B.hr(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lr(d,e,f,45,A.bJ,270)},
bL1(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cT(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.cT(o,2)*4,4)/4
j=A.et.av(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cT(o,3))*(j*i)
if(h<=0.5)continue
g=D.cTY[A.o.F(o,5)]
J.bA(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.ct(new B.u(0,l),i,j)
$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.sau(new B.a6(A.b0,A.b5,A.x,B.a([A.c,g],u),null,null).aw(0,B.ct(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c5(d),a1)
a1.delete()}$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hB.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lr(a5,a6,a7,30,A.hS,280)},
bZg(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.af
j.c=v
j.r=D.asx[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c5(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cT(g,1))+C.cT(g,2)*h,h)
e=C.cT(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cT(g,4))
a0=D.asx[A.o.F(g,4)]
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bA(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.ct(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c5(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bXI(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bA(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.W()
a0=B.a([],s)
a1=new B.aP(d.r,A.aq,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cR(h,m,0,g))
a0.push(new B.cR(j,m,0,i))
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.af
d.c=t
d.r=B.aq(A.bJ,A.o4,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbI().a.snapshot()
v.drawPath((a1.e=new B.cE(d)).a,a2)
a2.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hS.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.L()
a5.sau(new B.bR(A.A,0.5,A.x,a3,0,B.a([A.hB.j(0.25),D.VF],x.O),a3,a3).aw(0,B.bU(w,a4)))
a7.ag(w,a4,a5)
this.lr(a7,a8,a9,30,A.bJ,300)},
cq6(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bp.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.sau(new B.bR(A.A,0.5,A.x,null,0,B.a([A.hS,A.hB.j(0.6),D.VF],o),null,null).aw(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cT(f,1)
d=A.k.F(b2+C.cT(f,2)*e,e)/e
a0=A.k.bw((b2+C.cT(f,2)*e)/e)
a1=C.cT(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cT(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hS,A.aL,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.ne
g=a6.H()
t.drawLine.apply(t,[j+h*a2*d*0.6,i+a3*a2*d*0.6,a4,a5,g])
g.delete()
if(d>0.6){h=a1+0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.H()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()
h=a1-0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.H()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()}}}this.lr(b0,b1,b2,35,A.bJ,310)},
bC0(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aPX(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cT(n,1))
l=a8*(0.14+0.24*C.cT(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(D.bPI.aw(0,j))
h=i.H()
r.drawRect(B.c5(j),h)
h.delete()
g=A.k.bw(m/q)
f=A.k.bw(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cT(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bJ.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c5(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aY6.prototype={
B(d){var w,v=null,u=new C.c5L(),t=new C.c5N(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.all,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c5M(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.FY[w]))
return B.c4(A.bE,s,A.bx,12,10)}}
C.Y7.prototype={
T(){return new C.ay6()}}
C.ay6.prototype={
gv8(){var w=this.d
return w===$?this.d=this.a.c:w},
gaWG(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b1,A.aN),$.aw())}return v},
gavf(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaIe()
v=$.aw()
u.f!==$&&B.bM()
t=u.f=new B.ar(new B.bb(w,A.b1,A.aN),v)}return t},
q(){var w=this.gaWG(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gavf()
w.S$=v
w.P$=0
this.a2()},
YE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$YE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().Bp(90,700,700,A.eF),$async$YE)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$YE)
case 8:p=e
o=q.b.toLowerCase()
n=J.agp(o,".png")?"image/png":"image/jpeg"
r.m(new C.d4m(r,n,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YE,v)},
aWF(d){var w=null,v=A.c.j(0.07)
return B.bo(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aNs,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.afv(p.gv8().a)
if(n==null)n=A.d.gK(D.FY)
w=p.gv8()
v=p.r
u=x.p
v=B.D(new B.an(A.W,o,A.aa,A.q,B.a([B.bY(0,new C.Mw(p.gv8(),!1,!0,new B.cz(w.a+v,x.W)),0,0,0),B.ao(o,B.GW(A.mg,new C.d4r(d),B.nl(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.GW(D.bAd,new C.d4s(p),B.nl(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aNm,o,o,o)
t=B.D(B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),p.gaWG(0),o,o,o,o,o,2,p.aWF("Big words"),A.y,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d4t(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hm,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hB.j(0.6),A.r,1)
if(p.gv8().d.length===0)q=D.bDx
else{q=C.h58(p.gv8().d)
if(q==null)q=new Uint8Array(0)
q=B.hR(B.fK(q,A.A,o,o,A.cn,A.bQ,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc3x(),o,o,o,o,o,o,!1,A.a9)],u)
if(p.gv8().d.length!==0)r.push(B.aH(o,o,o,o,D.a_p,o,o,o,new C.d4u(p),o,o,o,o,"Remove logo",o))
return B.cc(o,A.w,B.bq(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),p.gavf(),o,o,o,o,o,2,p.aWF("Line under it"),A.y,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d4v(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.dj,!0,A.a5,o,A.am,o,o,o,o),A.ac,B.dp(D.bCs,D.fkX,new C.d4w(p,d),B.bk(A.av,o,o,o,A.w,o,A.ce,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aX8,o,o,o,o,A.Ex,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),o,!1,!1,o,o)}}
C.aJK.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.Ys.prototype={
T(){return new C.bdW(new B.ar(A.as,$.aw()))}}
C.bdW.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.M(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aQ:A.ak,k=B.aI(d,A.bS,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aK,A.r,1),g=x.p,f=B.A(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.V(A.cv,l,o,o,o,o),o,o,o,new C.db7(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cF0[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gU(t)
r=new B.aV(12,12)
q=new B.aV(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aK(!1,new B.bs(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.ub,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bs(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.db8(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hF,new B.x(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.EQ(A.bE,6,6,A.bx,u,o)],g))}e.push(A.az)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bj:A.aP
e.push(B.A(B.a([B.D(B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),this.d,o,o,o,o,o,2,B.bo(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aOg,new C.db9(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bq(!0,B.p(o,B.v(B.a([f,new B.dl(1,A.ch,B.cJ(e,o,o,o,o,A.ai,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tb,A.Xf,o,o,o),!0,!1,A.ah,!0,!0)}}
C.bdj.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eT()
a2.dI(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.L()
u.z=A.Q_
t=B.L()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aD(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.aj()<0.25){f=B.aq(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
d=u.H()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gp(0)
d=t.H()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
ar(d){return d.b!==this.b}}
C.bd0.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.by(new B.a9(0,0,0+a7.a,0+a7.b),A.kk),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.L()
a5.b=A.af
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.ld
a6.aC(a1,a5)
a5=x.v
a4=new B.aP(a4.r,A.aq,a0,a0,B.a([],a5))
a4.E(new B.iS(a1))
v=new B.Rw(new B.ve(B.wG(a4),!1,B.a([],x.X))).gK(0)
a4=v.a
a3=v.b
a4.jb()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.F(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.af
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aP(r,k,a0,new B.cL([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}else{k=new B.aP(r,k,a0,new B.cL([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()
k=new B.aP(r,a2.b,a0,new B.cL([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}}a4.jb()
e=u[a3].LN(n).a
$.W()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A0.mk
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.blL.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eT()
e.dI(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hc()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gaky()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.W()
i=B.a([],n)
h=new B.aP(j.r,A.aq,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.sau(B.aTe(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jb
g=j.H()
j=h.gbI().a.snapshot()
q.drawPath((h.e=new B.cE(j)).a,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.b7Z.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eT()
a0.dI(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.aj()
l=a0.aj()
k=Math.min(t,r)*(0.03+a0.aj()*0.09)
j=a0.aj()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.W()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hr(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.af
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.b7C.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eT()
a0.dI(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aP(i.r,A.aq,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bx(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.af
i.c=r
i.d=A.bO
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hr(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cE(g.gbI().a.snapshot()):i).a,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.bsC.prototype={
a6(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.L()
t=(0.5+0.5*t)*0.12
w.sau(new B.bR(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cM2,null).aw(0,u))
d.aX(u,w)
w=u.cE(-3)
v=B.L()
v.b=A.af
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jb
d.aX(w,v)},
ar(d){return d.b!==this.b}}
C.bpE.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bw(d)*7,p=0;p<7;++p){o=new B.eT()
o.dI(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.gp(0)
i.c=1.4
i.d=A.bO
h=i.H()
r.drawLine.apply(r,[n-k,m,n+k,m+0,h])
h.delete()
g=k*1.4
h=i.H()
r.drawLine.apply(r,[n,m-g,n+0,m+g,h])
h.delete()
g=k*0.45
f=n-g
e=n+g
i.c=0.8
h=i.H()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=-k*0.45
h=i.H()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hr(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ar(d){return d.b!==this.b}}
C.boN.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.L()
v.a=A.ne
v.sau(new B.a6(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.aX(w,v)},
ar(d){return d.b!==this.b}}
C.bcl.prototype={
a6(d,e){var w,v,u,t,s,r=e.geb(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.L()
w.b=A.af
w.c=1.4
w.d=A.bO
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.L()
u.b=A.af
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.r_
r=new C.d43(this,r*0.16,d,u,w)
t=e.geb()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.x8.prototype={}
C.HV.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.apw.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.un.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mj.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hu.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eF.prototype={
hw(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.em(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ad(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdE(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hIX(v.z))
u.n(0,"color",v.Q)
u.n(0,"align",v.as.a)
u.n(0,"imageRef",v.at)
u.n(0,"shape",v.ax.b)
u.n(0,"fillColor",v.ay)
u.n(0,"strokeColor",v.ch)
u.n(0,"strokeWidth",v.CW)
u.n(0,"rotation",v.cx)
u.n(0,"bulletList",v.cy)
u.n(0,"fileName",v.db)
u.n(0,"pdfPage",v.dx)
u.n(0,"textTransition",v.dy.b)
u.n(0,"textAnimDelayMs",v.fr)
w=v.fx
if(w.length!==0)u.n(0,"morphKey",w)
w=v.fy
if(w.length!==0)u.n(0,"loopFx",w)
w=v.go
if(w.length!==0)u.n(0,"frame",w)
w=v.id
if(w.length!==0)u.n(0,"ring",w)
w=v.k1
if(w.length!==0)u.n(0,"textFx",w)
if(v.k2)u.n(0,"rich",!0)
w=v.k3
if(w!==0)u.n(0,"textBg",w)
return u}}
C.lv.prototype={
hw(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("J<1,eF>")
n=B.B(new B.J(n,new C.cb9(),m),m.k("aj.E"))
return C.r8(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ad(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("J<1,a3<n,@>>")
n=B.B(new B.J(n,new C.cba(),m),m.k("aj.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hX.prototype={
gb6F(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gR4(){if(!C.km(this.w))return!1
var w=this.gb6F()
if(w==null)return!1
return new B.Q(Date.now(),0,!1).cW(w.bQ())},
hw(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
if(a3==null)a3=null
else a3=B.B(a3,x.N)
w=p.cy
if(w==null)w=null
else w=B.B(w,x.N)
v=p.db
u=p.dx
t=p.dy
s=p.fr
r=p.r
q=B.T(r).k("J<1,lv>")
r=B.B(new B.J(r,new C.caZ(),q),q.k("aj.E"))
return C.B1(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ad(){var w,v,u=this,t=B.U(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a5().ac())
w=u.w
if(w!=null)t.n(0,"deckKind",w)
w=u.x
if(w!=null)t.n(0,"marriageState",w)
w=u.y
if(w!=null&&A.a.i(w).length!==0)t.n(0,"transferClaimCode",w)
if(u.z)t.n(0,"transferReceived",!0)
w=u.Q
if(w!=null&&A.a.i(w).length!==0)t.n(0,"adminShareEditUntil",w)
w=u.as
if(w!=null)t.n(0,"signatureStrokeWidth",w)
w=u.at
if(w!=null)t.n(0,"signatureInkColor",w)
w=u.ax
if(w!=null&&A.a.i(w).length!==0)t.n(0,"kiapoSignedAt",w)
if(u.ay)t.n(0,"cinematic",!0)
if(u.ch)t.n(0,"loop",!0)
w=u.CW
if((w==null?"":w).length!==0)t.n(0,"aiOutlineJson",w)
w=u.cx
if(w!=null)t.n(0,"aiSlideIds",w)
w=u.cy
if(w!=null)t.n(0,"aiExtras",w)
w=u.db
if((w==null?"":w).length!==0)t.n(0,"finaleStyle",w)
w=u.dx
if(w!=null)t.n(0,"finaleTitle",w)
w=u.dy
if(w!=null)t.n(0,"finaleSubtitle",w)
w=u.fr
if((w==null?"":w).length!==0)t.n(0,"finaleLogo",w)
w=u.r
v=B.T(w).k("J<1,a3<n,@>>")
w=B.B(new B.J(w,new C.cb_(),v),v.k("aj.E"))
t.n(0,"slides",w)
return t}}
C.jx.prototype={}
C.b_e.prototype={
B(d){return B.cm(new C.cb4(this))}}
C.amL.prototype={
T(){return new C.bh5(null,null)}}
C.bh5.prototype={
gaWH(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.hf,null,1,null,v)
w.cF(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gaWH().q()
this.brb()},
B(d){return B.c6(this.gaWH(),new C.dCJ(),this.a.c)}}
C.aJv.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.ac1.prototype={
OK(d,e,f,g){return this.bKJ(d,e,f,g)},
bKJ(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$OK=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$OK)
case 3:s=i
if(d.e==null){w=1
break}B.a4(d,!1).N(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.eh,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$OK,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b8,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dI,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.ao,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.D(new C.acj(A.hx,"Download",A.bU,new C.eio(w,d),!0,v),1),A.aw,B.D(new C.acj(A.v7,"Share",A.bl,new C.eip(w,d),!1,v),1),A.aw,B.D(new C.acj(A.hh,"Safari",A.aZ,new C.eiq(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.az)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eir(d),v,v))
return B.bq(!0,new B.C(A.po,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iJ,v,t,u,s,v,A.n),v,v,v,v,A.EE,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ah,!0,!0)}}
C.acj.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aK(!1,u,!0,B.ex(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bri,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ae)}}
C.b_c.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aoJ(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.N(v,w,v,w)}else{v=6*w
u=new B.N(v,10*w,v,12*w)}t=i.c3y().aiK(1.35)
s=B.au_(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bwu(v)
if(i.e&&i.w!=null)q=B.aL(h,A.T,!1,h,!0,A.q,h,B.aM(),i.w,A.bl,h,h,h,h,2,D.bLs,A.y,!0,h,!0,h,!1,i.x,A.ag,h,h,h,new B.cz("slide_tf_"+g.a,x.W),h,A.vM,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yX,A.am,h,A.S3,h,h)
else{v=g.r
p=A.a.i(v)
o=p.length===0||p.toLowerCase()==="click to edit text"||p.toLowerCase()==="tap to edit text"
n=o&&i.as
m=f&&A.a.t(g.db,"mahari_")
if(!n)f=g.k1.length===0&&!g.k2
else f=!0
if(f){if(n)f="Tap to select \xb7 Edit to type"
else f=o?"":v
v=A.a.gX(v)
w=n?t.cCu(B.b0(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eB:A.Cu
p=B.d(f,new B.cz("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.RV:s
$.W()
j=B.L()
j.b=A.af
j.c=3*w
j.e=A.fx
j.r=A.aA.gp(0)
j=i.ck_(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.q,B.a([j,i.cjY(k,t,l?A.RV:s)],x.p),h)}else w=i.cjZ(p,t,g.k2?A.RV:s,m)
v=new B.n1(w,new B.cz("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a9)}return new B.C(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bU2()
case 3:return i.cbP()
case 2:return B.b3(h,h,h,new C.b_9(g,h),A.eT)
case 5:g=g.r
return new C.b_b(g,!i.e&&i.z==null,h)}},
c3y(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jN
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cP(D.abT,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cP(l,A.J,6*v),new B.cP(l,A.J,16*v),new B.cP(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cr
w=A.aA
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mq
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cP(A.bA,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cP(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cP(A.ba,new B.u(-3*v,0),0),new B.cP(A.aE,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cP(A.cy,A.J,8*v),new B.cP(A.aE,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=H.UP
break
case"ice":v=o.d
e=B.a([new B.cP(A.aW,A.J,10*v),new B.cP(A.cu,A.J,22*v)],x.r)
k=A.O
w=A.er
break
case"chalk":h=o.d
e=B.a([new B.cP(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jN
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cNY[q]
u.push(new B.cP(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cP(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.L()
v=o.d
f.sau(D.bNf.aw(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cP(A.Jv,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.L()
v=o.d
f.sau(D.bNA.aw(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cP(l,A.J,14*o.d)],x.r)
w=l
k=A.a4
break
case"lowercase":h=2*o.d
w=l
k=A.cs
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cP(l.j(0.45),new B.u(u,u),0),new B.cP(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jN
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ax7(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eB4.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cb2(h)
v=r.k2?C.hVp(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eB:A.Cu
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.WE(B.dn(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
ck_(d,e,f,g){return this.ax7(d,e,f,!1,g)},
cjY(d,e,f){return this.ax7(d,e,f,!1,null)},
cjZ(d,e,f,g){return this.ax7(d,e,f,g,null)},
bwu(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bU2(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.V(s.b===D.kM?A.Fy:A.AN,A.ay,t,t,t,32),t,t,t)}w=u.bzs(r)
if(s.b===D.kM){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cm,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dz,6)],x.V),t,A.n),t,1/0,t,t,new B.N(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aLm(r,!0)
return C.fqE(s.go,v,s.id)}return w},
aLm(d,e){var w,v,u,t
try{w=C.hVI(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.cm(new C.cb1(this,w,v,e))
return u}catch(t){return D.a9T}},
bzs(d){return this.aLm(d,!1)},
cbP(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b1m
return C.hW_(v,w.db,w.dx)}}
C.b_9.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.L(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.L()
w.r=B.b0(f.ch).gp(0)
w.b=A.af
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aX(s,g)
d.aX(s,w)
break
case 1:d.hY(s,g)
d.hY(s,w)
break
case 2:r=new B.aP(h.r,A.aq,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bE())
d.aN(r,g)
d.aN(r,w)
break
case 3:r=new B.aP(h.r,A.aq,i,i,B.a([],x.v))
h=t*0.45
r.E(new B.b5(0,h))
f=u*0.65
r.E(new B.ap(f,h))
r.E(new B.ap(f,t*0.2))
r.E(new B.ap(u,t*0.5))
r.E(new B.ap(f,t*0.8))
t*=0.55
r.E(new B.ap(f,t))
r.E(new B.ap(0,t))
r.E(new B.bE())
d.aN(r,g)
d.aN(r,w)
break
case 4:h=t/2
w.c=v+2
d.bA(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aP(h.r,A.aq,i,i,B.a([],x.v))
r.E(new B.b5(q,0))
r.E(new B.ap(u,0))
r.E(new B.ap(u-q,t))
r.E(new B.ap(0,t))
r.E(new B.bE())
d.aN(r,g)
d.aN(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aP(h.r,A.aq,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
f.push(h)
v=r.f
if(v!=null)h.bx(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bx(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.E(new B.bE())
d.aN(r,g)
d.aN(r,w)
break}},
ar(d){return d.b!==this.b}}
C.aH6.prototype={
T(){return new C.bs8(null,null)}}
C.bs8.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.it,null,1,null,v)
w.cF(0)
v.d!==$&&B.aQ()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.btr()},
aLx(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bX(B.av(B.d(d,w,w,w,w,w,w,A.dI,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a6(A.a3,A.a7,A.x,v,w,w),A.n),A.be)},
bwI(){var w,v=this,u=null,t=v.aLx("Slide A",A.bl),s=v.aLx("Slide B",A.aZ)
if(v.a.c===D.cf)return new B.an(A.W,u,A.b_,A.q,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.eXK(v,s,t),u)},
B(d){return this.bwI()}}
C.aHJ.prototype={
iO(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jv(d){return d.b!==this.b}}
C.TU.prototype={
T(){return new C.bhg(null,null)}}
C.bhg.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.Ae,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cf){w.sp(0,1)
return}B.bN(B.dA(0,0,0,v.c.fr+v.f*120,0,0),new C.dO4(u),x.a)},
br(d){var w,v,u,t=this
t.bE(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cf)w.sp(0,1)
else B.bN(B.dA(0,0,0,v.c.fr+v.f*120,0,0),new C.dO3(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.brq()},
B(d){var w,v=this.a
if(v.c.dy===D.cf||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dO2(this),v.d)}}
C.HU.prototype={
B(d){return B.cm(new C.caV(this))}}
C.axQ.prototype={
T(){return new C.bbQ()}}
C.bbQ.prototype={
a_(){this.a1()
if(this.a.c!==D.cf)B.bN(A.KM,new C.d1i(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cf)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.TU(C.em(A.bg,!1,4279310375,A.aB,"",4294538006,24,A.bi,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bf,o,2,"",0,0,"",u,D.eZ,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cb,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cz("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.em(A.bg,!1,4294967295,A.aB,"",4280640491,22,A.bi,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bf,o,2,"Element flies in",0,0,"",q.a.c,D.cP,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.q,B.a([w,B.ao(32,new C.TU(t,B.p(p,D.f7a,A.f,p,p,new B.o(s,p,B.I(A.b8,A.r,1),r,p,p,A.n),p,p,p,p,A.j6,p,p,1/0),!0,1,new B.cz("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bX(n,D.aXI,A.be)}}
C.a6v.prototype={
T(){return new C.bhV(null,null)}}
C.bhV.prototype={
gaXd(){var w=this.a
if(w.e)w=D.eBb.t(0,w.c)||D.aKC.t(0,A.d.gK(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaXd()){w=C.hU4(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dA(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.brX()},
B(d){var w,v=this,u=v.d
if(!v.gaXd()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.e63(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aY9.prototype={
B(d){var w=null
return B.av(C.b_d(!0,w,!1,C.em(A.L,!1,this.e.l(),A.aB,"",4280640491,this.f,A.bi,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.bf,4280172719,2,"Aa",0,0,this.c,D.cf,D.cP,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bcZ.prototype={
iO(d){return C.a1a(this.b,new B.a9(0,0,0+d.a,0+d.b).cE(-this.c))},
jv(d){return d.b!==this.b||d.c!==this.c}}
C.bnM.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cE(-this.d),g=this.b,f=C.a1a(g,h),e=a1.geb(),d=new C.eN3()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sau(D.aM7.aw(0,h))
a0.aN(f,w)
g=C.a1a(g,h.cE(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bf_.gp(0)
a0.aN(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sau(D.eKJ.aw(0,h))
a0.aN(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hr(A.G,e*0.04)
a0.aN(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aN(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sau(D.eKH.aw(0,h))
a0.aN(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aN(f,w)
g=C.a1a(g,h.cE(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aN(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.ba.j(0.7).gp(0)
g.z=new B.hr(A.G,e*0.035)
a0.aN(f,g)
g=d.$1(e*0.016)
g.r=A.od.gp(0)
a0.aN(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sau(D.eKC.aw(0,h))
a0.aN(f,w)
w=C.a1a(g,h.cE(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b4H.gp(0)
a0.aN(w,v)
g=C.a1a(g,h.cE(e*0.03))
v=d.$1(e*0.004)
v.r=D.b71.gp(0)
a0.aN(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sau(D.aM7.aw(0,h))
a0.aN(f,g)
for(g=B.wG(f),w=B.a([],x.X),g=new B.ve(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jO(y.M));--q
g.jb()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bw(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jb()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jb()
m=w[q].LN(p*n/o).a
l=D.cLn[A.o.F(n,4)]
$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sau(D.eKL.aw(0,h))
g.z=new B.hr(A.G,e*0.03)
a0.aN(f,g)
g=d.$1(e*0.018)
g.sau(D.eKI.aw(0,h))
a0.aN(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aN(f,w)
g=C.a1a(g,h.cE(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nk.gp(0)
a0.aN(g,w)
break}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.boK.prototype={
a6(d,e){d.F3(C.a1a(this.b,new B.a9(0,0,0+e.a,0+e.b).cE(-this.c)),A.w,e.geb()*0.05,!1)},
ar(d){return d.b!==this.b||d.c!==this.c}}
C.aJJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aKe.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aLz.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.a6O.prototype={}
C.MZ.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aCH(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aY(v),null,null)},
gdV(){return this.c},
gSr(){return this.r},
gSs(){return this.w},
gKE(){return this.x}}
C.aCH.prototype={
a_(){var w,v=this
v.a1()
$.aU.c0$.push(v)
C.fvA()
$.hcG=new C.eoC(v)
w=B.bj(null,A.Ac,null,1,null,v)
w.f5(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.Hz()},
br(d){var w,v,u=this
u.bE(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Nr(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Hz()}},
iI(d){if(d===A.zl||d===A.rw||d===A.rv||d===A.oZ)this.t1()},
q(){var w,v,u,t=this
$.aU.hz(t)
w=t.at
if(w!=null)w.a9(0)
t.t1()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.ds(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.ds(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bK(0)
v.fY()}for(w=t.cx,w=new B.ds(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.bsa()},
ga9M(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gNL(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
aaf(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gR4())return!1
return!0},
jT(){return this.aaf(null)},
agS(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.eJ0)},
pN(){if(!this.jT())return!1
this.agS()
return!0},
aoW(d){var w,v,u,t,s,r=this
if(r.aaf(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hbN(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zh(){return this.aoW(null)},
Hz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Hz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.apy(k),$async$Hz)
case 3:j=e
w=4
return B.b(C.aob(k),$async$Hz)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fKB(j,t.bWS())
w=t.ga9M()?5:7
break
case 5:r=t.gNL()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aYn(r),$async$Hz)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.el_())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cm(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.el0())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.y8(m==null?"":m)!=null)continue
C.fvM(n,s)
p=!0}t.m(new C.el1(t,s))
if(p||s.length>J.ab(j))t.t1()
case 1:return B.h(u,v)}})
return B.i($async$Hz,v)},
bWS(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.km(w)&&w!==q}if(w)p.push(r)
return p},
ciq(d){var w,v=this,u=d.w
if(!C.km(u)||u==="hati_kiapo_uongozi")return
v.a8D(d)
w=A.d.be(v.d,new C.emA(d))
u=v.d
if(w>=0){u[w]=d.hw()
v.d[w].f=new B.Q(Date.now(),0,!1)}else A.d.cm(u,0,d.hw())
v.db=!1},
ccL(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.km(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ciq(t)
s=u.d
w=B.T(s)
v=w.k("cS<1,hX>")
s=B.B(new B.cS(new B.a1(s,new C.emo(),w.k("a1<1>")),new C.emp(),v),v.k("G.E"))
return s},
Nr(d){return this.bL5(d)},
t1(){return this.Nr(null)},
bL5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Nr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ccL()
w=3
return B.b(C.UR(d==null?t.a.c:d,s),$async$Nr)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aoW(r)?4:5
break
case 4:w=6
return B.b(C.a61(r),$async$Nr)
case 6:q=r.x
p=A.a.i(q==null?t.gNL():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.be(t.d,new C.ekn())
q=t.d
if(o>=0)q[o]=r.hw()
else A.d.cm(q,0,r.hw())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nr,v)},
oR(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.km(u.w))===!0?A.hV:A.lv
v.at=B.cM(w,new C.enI(v))},
aWI(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.adN(u.hw(),v.f,v.r))
if(w.length>40)A.d.cw(w,0)
A.d.a8(v.ay)},
cvz(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.adN(w.e.hw(),w.f,w.r))
w.m(new C.eoy(w,v.pop()))
w.oR()},
chx(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.adN(w.e.hw(),w.f,w.r))
w.m(new C.emy(w,v.pop()))
w.oR()},
nQ(){var w,v,u=this
if(u.e==null)return
w=A.d.be(u.d,new C.eol(u))
if(w>=0){u.d[w]=u.e.hw()
u.d[w].f=new B.Q(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.Q(Date.now(),0,!1)},
Wi(d){var w,v,u,t,s=this.gdm()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wT(){var w,v,u,t
for(w=this.ch,v=new B.ds(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.ds(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bK(0)
u.fY()}w.a8(0)},
Jd(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdm()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cS<1,n>")
t=B.d9(new B.cS(new B.a1(w,new C.eom(),v.k("a1<1>")),new C.eon(),u),u.k("G.E"))
w=this.ch
v=B.a2(w).k("cy<1>")
v=B.B(new B.cy(w,v),v.k("G.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bK(0)
p.fY()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cP)continue
p=n.a
m=w.cf(0,p,new C.eoo(n))
s.cf(0,p,new C.eop())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
GU(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b8(u.d,new C.ejM(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gNL()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cm(u.d,0,u.e.hw())}u.nQ()
u.oR()},
ahc(d,e){var w,v,u,t,s=this
if(s.jT())return
w=s.Wi(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.km(v.w))===!0
if(u){C.hU8(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdm()
if(t!=null)C.hU9(t,w.d+w.f*0.5)}}s.GU()
s.nQ()
s.oR()
if(u&&s.c!=null)s.m(new C.eoz())},
cwC(d,e){var w=this,v=w.gdm()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.GU()
w.nQ()
w.oR()},
gdm(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpR(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hSa(o)
if(w!=null)return w
v=q.gdm()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gK(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bUh(v)
t=q.bUg(v)
s=B.b0(v.e)
r=v.f
return new C.jx(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hvc(o)},
bUh(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cP)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bUg(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cP&&t.w<28)return B.b0(t.Q)}return A.aJ},
adb(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga9M()){w.c.I(x.q).f.R(D.eHD)
return}w.a8D(d)
w.aXU(C.bzO(d))
return}if(C.cbO(v)){w.a8D(d)
w.aXU(d)
return}w.m(new C.elH(w,d))},
apu(){var w,v,u,t,s,r,q=this
q.a0E(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.km(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.ejK(q))
if(r&&q.c!=null){u.toString
q.IO(u,s)}return}q.t1()
q.m(new C.ejL(q))},
aXT(d){this.a8D(d)
this.Ze(d,!0)},
a8D(d){if(!C.km(d.w))return
C.fvM(d,this.d)},
Ze(d,e){return this.c8K(d,e)},
aXU(d){return this.Ze(d,!1)},
c8K(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ze=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bzO(d)
if(e){r=s.x
q=A.a.i(r==null?t.gNL():r)
t.dy.W(0,q.toLowerCase())
C.aoc(t.a.c,q)}r=s}else r=d
w=C.cbO(r.w)?3:4
break
case 3:w=5
return B.b(t.a8E(r),$async$Ze)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b8(t.d,new C.em3(l))
o=l.a.hw()
n=C.km(o.w)&&C.hVk(o)
t.m(new C.em4(t,o,p))
if(n){m=A.d.be(t.d,new C.em5(o))
if(m>=0){t.d[m]=o.hw()
t.t1()}}if(!t.aaf(l.a))t.Xq()
r=!1
if(t.c!=null)if(!t.aaf(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aoW(r)&&C.frP(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.eIc)
case 1:return B.h(u,v)}})
return B.i($async$Ze,v)},
a8E(d){return this.bJm(d)},
bJm(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a8E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l6(r.c,A.yF),$async$a8E)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kK(!1,r,s.c,s.d,null,A.yF,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8E,v)},
nI(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cbO(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cbc(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nI,v)},
acT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$acT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.c9(null,null,!1,null,new C.elG(),s,null,!0,!0,x.H),$async$acT)
case 3:if(t.c==null){w=1
break}t.apu()
case 1:return B.h(u,v)}})
return B.i($async$acT,v)},
acS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$acS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.c9(null,null,!1,null,new C.elD(),s,null,!0,!0,x.H),$async$acS)
case 3:if(t.c==null){w=1
break}t.m(new C.elE())
t.apu()
case 1:return B.h(u,v)}})
return B.i($async$acS,v)},
Xq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Xq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ay(),$async$Xq)
case 3:r=e
if(B.k8(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$Xq)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eGg)
case 1:return B.h(u,v)}})
return B.i($async$Xq,v)},
IO(d,e){return this.ciR(d,e)},
ciR(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}case 3:switch(d){case"hati_kuhowa":w=5
break
case"hati_kuhoweya":w=6
break
case"hati_malipo_awamu":w=7
break
case"marriage_agreement":w=8
break
default:w=4
break}break
case 5:w=9
return B.b(C.af5(s,t.gDF(),t.gDE(),!0,e,t.d),$async$IO)
case 9:w=4
break
case 6:w=10
return B.b(C.af6(s,t.gDF(),t.gDE(),!0,e,t.d),$async$IO)
case 10:w=4
break
case 7:w=11
return B.b(C.af7(s,t.gDF(),t.gDE(),!0,e,t.d),$async$IO)
case 11:w=4
break
case 8:w=12
return B.b(C.af8(s,t.gDF(),t.gDE(),!0,e,t.d),$async$IO)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$IO,v)},
bVO(){var w,v,u,t,s=this
if(!s.ga9M()){s.c.I(x.q).f.R(D.eGt)
return}w=s.gNL()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.af4(u,t,v,new C.ekW(s),new C.ekX(s),w)},
adc(){var w=0,v=B.j(x.H),u=this,t,s
var $async$adc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c_(A.dB,null,new C.elN(u),s,!0,!0,!1,A.lf,!1,!1,x.N),$async$adc)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.af8(s,u.gDF(),u.gDE(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.af5(s,u.gDF(),u.gDE(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.af6(s,u.gDF(),u.gDE(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.af7(s,u.gDF(),u.gDE(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bVO()
return B.h(null,v)}})
return B.i($async$adc,v)},
c7R(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aWI()
w=C.cB()
v=C.B1(t,t,t,t,D.BT,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.elO(u,v))},
a84(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a84=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pN()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hZJ(s),$async$a84)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.dc(q.r,new C.ejO())
t.d_(new C.ejP(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a84,v)},
afa(d,e,f,g){var w=null,v=g?A.dq:A.bN,u=B.I(g?A.b8:A.cm,A.r,1)
return B.hn(B.aE(w,B.p(w,B.V(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a9),w,e,w,w)},
Zd(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pN()){w=1
break}s=t.jy()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a1<1>")
p=B.B(new B.a1(r,new C.elZ(),q),q.k("G.E"))}o=s!=null&&s.b===D.le?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.eIn)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c_(A.K,null,new C.em_(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Zd)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Zd,v)},
adu(){return this.c8J()},
c8J(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$adu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pN()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hZv(s,t.f+1,o),$async$adu)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.ks(s,B.T(s).c)
p.a=A.d.be(o.r,new C.em1(q))
t.d_(new C.em2(p,t,o,q,r))
t.c.I(x.q).f.R(D.eIM)
case 1:return B.h(u,v)}})
return B.i($async$adu,v)},
adB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$adB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pN()||!t.zh()){w=1
break}s=t.gdm()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a1<1>")
p=B.B(new B.a1(r,new C.emj(),q),q.k("G.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eG1)
w=1
break}o=new B.J(p,new C.emk(),B.T(p).k("J<1,O>")).fC(0,new C.eml())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b1,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.c_(A.K,null,new C.emm(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$adB)
case 3:for(r=new B.ds(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.emn())
case 1:return B.h(u,v)}})
return B.i($async$adB,v)},
adg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$adg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.pN()){w=1
break}s=t.c
s.toString
r=m.db
if(r==null)r=""
q=m.dx
if(q==null)q="NGMY"
p=m.dy
if(p==null)p=""
o=m.fr
w=3
return B.b(C.hdM(s,new C.DQ(r,q,p,o==null?"":o)),$async$adg)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d_(new C.elP(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.afv(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$adg,v)},
a8x(){return this.bIJ()},
bIJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a8x=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pN()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hZI(s,t.f+1,l),$async$a8x)
case 3:r=e
q=$.fNZ
$.fNZ=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d_(new C.ek4())
t.c.I(x.q).f.R(D.eFT)
w=1
break}if(!q){s=r.CW
s=C.hcE(l,s==null?"":s,!1)}else s=!1
if(s){t.d_(new C.ek5(t,l,r))
t.c.I(x.q).f.R(D.eJf)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.ks(s,B.T(s).c)
s=l.r
m.a=A.d.be(s,new C.ek6(p))
o=s.length
t.d_(new C.ek7(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8x,v)},
aNC(d,e){if(e){this.ae3()
return}this.c7R(d,!1)},
bEw(){return this.aNC(null,!1)},
ae3(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c_(A.bW,null,new C.emt(t),r,!0,!0,!0,A.oK,!1,!1,x.N),$async$ae3)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.emu(t,C.hS9(s).p7()))
case 1:return B.h(u,v)}})
return B.i($async$ae3,v)},
d_(d){var w=this
if(w.pN())return
w.GU()
w.aWI()
w.m(d)
w.Jd()
w.nQ()
w.oR()},
a6y(){this.d_(new C.eiJ(this,D.ml))},
aP_(){var w=this.gdm()
if(w==null)return
this.d_(new C.ek2(this,w))},
aOc(){var w=this.e
if(w==null||w.r.length<=1)return
this.d_(new C.ek0(this))},
b_P(d,e){if(this.e==null||d===e)return
this.d_(new C.emC(this,d,e))},
MZ(d){return this.bGu(d)},
bGu(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$MZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gNL():s)
w=5
return B.b(C.aoa(t.a.c,r),$async$MZ)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.apA(s)
w=6
return B.b(C.b_h(t.a.c,s),$async$MZ)
case 6:if(t.c==null){w=1
break}t.m(new C.ejX(t,d))
w=7
return B.b(t.t1(),$async$MZ)
case 7:case 1:return B.h(u,v)}})
return B.i($async$MZ,v)},
ciO(d,e){var w=this
if(d.z){w.agS()
return}w.m(new C.emB(w,d,e))
w.oR()},
jy(){var w,v,u,t,s,r=this.gdm()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Vj(d){return this.ch.cf(0,d.a,new C.ejN(d))},
ark(d){return this.CW.cf(0,d.a,new C.eko())},
a0E(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Wi(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ak$.d.c
if(u!=null)u.jp()},
b38(){return this.a0E(!0)},
a0C(d){var w,v,u=this
if(u.pN())return
if(!u.zh())return
w=u.Wi(d)
if(w==null||w.b!==D.cP)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Vj(w).saV(0,"")}u.m(new C.eoj(u,d))
$.aU.x1$.push(new C.eok(u,d,w))},
b3E(d){var w=this
if(d.b===D.cP&&!w.jT()&&w.zh()){w.a0C(d.a)
return}w.axx(d.a)},
axx(d){var w,v,u,t,s,r=this
if(r.jT())return
w=r.r
if(w!=null&&w!==d){v=r.Wi(w)
if(v!=null&&v.b===D.cP){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.enJ(r,s,d))
if(s||d==null){t=$.aU.ak$.d.c
if(t!=null)t.jp()}},
aJV(){this.d_(new C.eiK(this))},
oB(d){return this.bvM(d)},
bvM(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nI(),$async$oB)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d_(new C.eiH(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oB,v)},
Ut(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ut=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.FT(78,1920),$async$Ut)
case 3:s=e
if(s==null||t.gdm()==null){w=1
break}t.d_(new C.eix(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ut,v)},
Un(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Un=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdm()==null){w=1
break}w=3
return B.b(R.Cd(t.a.c),$async$Un)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gal(s)){t.c.I(x.q).f.R(D.eJP)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gK(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c_(null,null,new C.eiu(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Un)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdm()==null){w=1
break}t.d_(new C.eiv(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Un,v)},
aqj(){var w=this,v=w.r
if(v==null||w.gdm()==null)return
if(A.d.b8(w.gdm().z,new C.ejZ(v))){w.c.I(x.q).f.R(D.eIQ)
return}if(w.w===v)w.a0E(!0)
w.d_(new C.ek_(w,v))},
bCN(){var w=this.jy(),v=w==null
if((v?null:w.b)===D.eZ)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cP)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aKC(d,e){var w=this,v=w.jy(),u=w.gdm(),t=w.e
if(t==null)return
w.d_(new C.ejb(w,v,d,e,t,u))},
bxl(d){return this.aKC(d,null)},
a6Q(d){return this.bxt(d)},
bxt(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a6Q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a4Y.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nI(),$async$a6Q)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jy()
if(s!=null){r=s.b
if(r===D.cP)t.bxl(s.w>=28||s.x.gdE(0)>=A.I.gdE(0)?d.d:d.e)
else if(r===D.eZ){r=d.c
t.aKC(r.j(0.88),r)}w=1
break}t.d_(new C.ejg(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a6Q,v)},
a6P(d){return this.bxr(d)},
bxr(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a6P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jy()
r=t.gdm()
q=t.e
if(q==null){w=1
break}p=t.Q
if(p){w=3
break}else f=p
w=4
break
case 3:p=s==null
if(p){w=5
break}else f=p
w=6
break
case 5:w=7
return B.b(t.nI(),$async$a6P)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d_(new C.eje(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a6P,v)},
bxb(d){var w=this.gdm()
if(w==null)return
this.d_(new C.eja(this,w,d))},
Zi(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hZE(r),$async$Zi)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nQ()
t.m(new C.emd(t,s))
w=4
return B.b(t.t1(),$async$Zi)
case 4:if(t.c!=null)t.adb(s)
case 1:return B.h(u,v)}})
return B.i($async$Zi,v)},
a8p(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8p=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a0E(!0)
t.nQ()
s=t.c
s.toString
w=3
return B.b(C.Q9(s,q),$async$a8p)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8p,v)},
CP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$CP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nQ()
t=4
w=7
return B.b(C.aOg(m),$async$CP)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aNG(o,q,m.b),$async$CP)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a8(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$CP,v)},
Es(d,e){return this.cv4(d,e)},
cv4(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Es=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pN()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a0E(!0)
t.nQ()
s=h.a=t.e.hw()}else{r=A.d.be(t.d,new C.eos(d))
s=h.a=r>=0?t.d[r].hw():d.hw()}s=s.w
q=s==null
p=C.hT7(q?"":s)
o=C.hbA(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a1<1>")
n=B.B(new B.a1(s,new C.eot(h,p),q),q.k("G.E"))
s=h.a.b
w=3
return B.b(t.cox(n.length,o,s),$async$Es)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hT1(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gK(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.cow(n,o),$async$Es)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.iK(t.d,new C.eou(s))
s=h.a.b
w=11
return B.b(t.cou(k.b,s),$async$Es)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hw()
case 5:j=C.hT6(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.eK_)
w=1
break}w=12
return B.b(t.cov(j.a,s,o,j.c),$async$Es)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eov(h,t,i))
t.oR()
case 1:return B.h(u,v)}})
return B.i($async$Es,v)},
cox(d,e,f){var w=this.c
w.toString
return B.c_(A.K,null,new C.enZ(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cow(d,e){var w=this.c
w.toString
return B.c_(A.K,null,new C.enY(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cou(d,e){var w=this.c
w.toString
return B.c_(A.K,null,new C.enS(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cov(d,e,f,g){var w=this.c
w.toString
return B.c_(A.K,null,new C.enU(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a9Q(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b8,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a9R(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bW,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a6(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eA,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.eU1,u,u,u),A.ao,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aSb(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.SE,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aSe(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a6(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.V(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.n9,w,w,w),A.cZ,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.AQ,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.by,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ekS(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ae)},
bTe(d,e,f,g,h,i){return this.aSe(d,e,f,!1,g,h,i)},
asD(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.r,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dI,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.XA,w,w,w)},
aSd(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.ce,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.n7,w,w,w),new C.ekR(d,f),v)},
aSc(d,e){return this.aSd(d,e,null)},
J4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$J4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oQ(l,s.c,s.d),$async$J4)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aK("=",l.length)+"\n\n"
q=new B.fc(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gai(o.z),n=new B.hc(l,new C.enK());n.C();){m=l.gU(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a8A(l.charCodeAt(0)==0?l:l,r.b),$async$J4)
case 4:l=t.a
w=5
return B.b(B.oP(l.c,l.d),$async$J4)
case 5:case 1:return B.h(u,v)}})
return B.i($async$J4,v)},
Hf(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Hf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oQ(q,s.c,s.d),$async$Hf)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a8A(A.R.ao(r.ad(),null),r.b+".json"),$async$Hf)
case 4:q=t.a
w=5
return B.b(B.oP(q.c,q.d),$async$Hf)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hf,v)},
b2W(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nQ()
u.t1()
w=u.c
w.toString
v=B.eo(new C.eoi(u,t),!1,null,x.z)
B.a4(w,!1).ci(v)},
Gt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Gt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nI(),$async$Gt)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fvZ(),$async$Gt)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hVU(s.a)
q=t.c
q.toString
w=5
return B.b(B.c_(A.aA,null,new C.eiC(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Gt)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d_(new C.eiD(t,s))
w=1
break}if(p==="split")t.d_(new C.eiE(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Gt,v)},
Mk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Mk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pN()){w=1
break}w=3
return B.b(t.nI(),$async$Mk)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aOf(s,null,null),$async$Mk)
case 4:r=e
if(r==null||t.gdm()==null){w=1
break}t.d_(new C.eiI(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Mk,v)},
b_C(d){var w=this.e
if(w==null||!C.km(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aLU(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aOf(s,t==null?null:B.b0(t),u)},
a6w(d){return this.bvD(d)},
bvD(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a6w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pN()){w=1
break}if(!t.zh()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eKe)
w=1
break}w=3
return B.b(t.aLU(),$async$a6w)
case 3:r=f
if(r==null||t.gdm()==null){w=1
break}t.d_(new C.eiz(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a6w,v)},
aeO(d){return this.chA(d)},
chA(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pN()){w=1
break}if(!t.zh()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eJn)
w=1
break}w=3
return B.b(t.aLU(),$async$aeO)
case 3:r=f
if(r==null||t.gdm()==null){w=1
break}t.d_(new C.emz(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$aeO,v)},
c4y(){var w,v,u=this
if(u.jT())return
w=new B.Q(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cu9()}},
cu9(){var w,v,u,t,s,r=this.gdm()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d_(new C.eoq(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bTz(){var w,v,u,t,s,r=this.gdm()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d_(new C.ekV(this,r,u.d))},
bY3(d){var w
if(this.jT())return!1
w=this.e
if((w==null?null:C.km(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fsA(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kM&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
bY4(d){var w
if(this.jT())return!1
w=this.e
if((w==null?null:C.km(w.w))!==!0)return!0
if(!this.zh())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fsA(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kM&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Mt(d){return this.bxT(d)},
bxT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Mt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pN()){w=1
break}if(!t.zh()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eId)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aoe(p),$async$Mt)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.eIS)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gK(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a61(r)
w=1
break}t.m(new C.ejk(t,d,o))
t.nQ()
$.aU.x1$.push(new C.ejl(t))
case 1:return B.h(u,v)}})
return B.i($async$Mt,v)},
Ur(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ur=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nI(),$async$Ur)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bAu(),$async$Ur)
case 4:s=e
if(s==null||t.gdm()==null){w=1
break}t.d_(new C.eiw(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ur,v)},
Nc(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nI(),$async$Nc)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jy()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fvQ(r),$async$Nc)
case 4:q=e
if(q==null){w=1
break}t.d_(new C.ekm(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Nc,v)},
iG(d){this.d_(new C.eiF(this,d))},
pC(d){return this.bx4(d)},
bx4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pN()){w=1
break}m=!D.aKE.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nI(),$async$pC)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Gt()
w=1
break A
case"sign_paper":t.Mk()
w=1
break A
case"hd_photo":t.Ur()
w=1
break A
case"sharpen":t.Nc()
w=1
break A
case"print":t.CP()
w=1
break A
case"rotate":s=t.jy()
if(s!=null)t.d_(new C.eiO(s))
w=1
break A
case"text_box":t.aJV()
w=1
break A
case"picture":t.Ut()
w=1
break A
case"present":t.b2W()
w=1
break A
case"new_slide":t.a6y()
w=1
break A
case"export_json":t.Hf()
w=1
break A
case"outline_share":t.J4()
w=1
break A
case"flashcard_tool":t.uI(D.GZ)
w=1
break A
case"quiz_tool":t.uI(D.H_)
w=1
break A
case"worksheet_tool":t.uI(D.H0)
w=1
break A
case"duplicate_el":s=t.jy()
if(s==null){w=1
break A}t.d_(new C.eiP(t,s))
w=1
break A
case"delete_el":t.aqj()
w=1
break A
case"bring_fwd":s=t.jy()
if(s==null||t.gdm()==null){w=1
break A}t.d_(new C.eiQ(t,s))
w=1
break A
case"send_back":s=t.jy()
if(s==null||t.gdm()==null){w=1
break A}t.d_(new C.ej0(t,s))
w=1
break A
case"align_left":s=t.jy()
if(s!=null)t.d_(new C.ej3(s))
w=1
break A
case"align_center":s=t.jy()
if(s!=null)t.d_(new C.ej4(s))
w=1
break A
case"align_right":s=t.jy()
if(s!=null)t.d_(new C.ej5(s))
w=1
break A
case"grayscale":case"brighten":t.Nc()
w=1
break A
case"flip_h":s=t.jy()
if(s!=null)t.d_(new C.ej6(s))
w=1
break A
case"flip_v":s=t.jy()
if(s!=null)t.d_(new C.ej7(s))
w=1
break A
case"rectangle":t.oB(D.bf)
w=1
break A
case"circle":t.oB(D.eI)
w=1
break A
case"triangle":t.oB(D.jw)
w=1
break A
case"arrow":t.oB(D.BV)
w=1
break A
case"line":case"divider":t.oB(D.fn)
w=1
break A
case"word_count":r=t.gdm()
if(r==null){w=1
break A}for(q=A.d.gai(r.z),p=new B.hc(q,new C.ej8()),o=0;p.C();){n=A.a.fu(A.a.i(q.gU(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a1(n,new C.ej9(),B.T(n).k("a1<1>")).gM(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cB()
t.iG(C.iQ(A.L,!1,t.gpR().d.l(),A.aB,40,A.bi,A.u,0.18,q,"Presentation Title",0,D.mm,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cB()
t.iG(C.iQ(A.L,!1,t.gpR().e.l(),A.aB,22,A.bi,A.a4,0.12,q,"Subtitle goes here",0,D.dc,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iG(C.iQ(A.bg,!0,4279310375,A.aB,20,A.bi,A.a4,0.5,C.cB(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tQ,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,20,A.bi,A.a4,0.5,C.cB(),"1. First item\n2. Second item\n3. Third item",0,D.tP,0.8,0.1,0.22))
w=1
break A
case"quote":t.iG(C.iQ(A.L,!1,4279310375,A.aB,24,A.cD,A.a4,0.25,C.cB(),'"Insert meaningful quote here."',0,D.dc,0.8,0.1,0.3))
w=1
break A
case"citation":t.iG(C.iQ(A.bg,!1,4284773515,A.aB,14,A.bi,A.a4,0.1,C.cB(),"Author, Title (Year). Publisher.",0,D.tQ,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iG(C.iQ(A.dK,!1,4279310375,A.aB,14,A.bi,A.a4,0.08,C.cB(),C.bAw(),0,D.dc,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iG(C.iQ(A.dK,!1,4279310375,A.aB,13,A.bi,A.a4,0.06,C.cB(),"Page "+(t.f+1),0,D.dc,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d_(new C.eiR(t))
w=1
break A
case"footer_bar":t.d_(new C.eiS(t))
w=1
break A
case"highlight":t.d_(new C.eiT(t))
w=1
break A
case"redact":t.d_(new C.eiU(t))
w=1
break A
case"callout":t.d_(new C.eiV(t))
w=1
break A
case"checkboxes":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,20,A.bi,A.a4,0.45,C.cB(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dc,0.8,0.1,0.2))
w=1
break A
case"table":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,16,A.bi,A.a4,0.55,C.cB(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dc,0.8,0.1,0.18))
w=1
break A
case"memo":t.d_(new C.eiW(t))
w=1
break A
case"letter":t.iG(C.iQ(A.bg,!1,4279179050,A.aB,17,A.bi,A.a4,0.82,C.cB(),C.bAw()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,22,A.bi,A.O,0.76,C.cB(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tQ,0.8,0.1,0.12))
w=1
break A
case"toc":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,18,A.bi,A.a4,0.76,C.cB(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dc,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,16,A.bi,A.a4,0.08,C.cB(),"Signature: _________________________",0,D.dc,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,16,A.bi,A.a4,0.08,C.cB(),"Initials: ______",0,D.dc,0.3,0.65,0.78))
w=1
break A
case"approved":t.iG(C.iQ(A.L,!1,4278556265,A.aB,28,A.bi,A.u,0.12,C.cB(),"APPROVED",0,D.mm,0.32,0.62,0.08))
w=1
break A
case"draft":t.iG(C.iQ(A.L,!1,4292617766,A.aB,28,A.bi,A.u,0.12,C.cB(),"DRAFT",0,D.dc,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iG(C.iQ(A.L,!1,871318596,A.aB,36,A.bi,A.u,0.12,C.cB(),"CONFIDENTIAL",0,D.dc,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d_(new C.eiX(t))
w=1
break A
case"progress":t.d_(new C.eiY(t))
w=1
break A
case"stars":t.iG(C.iQ(A.L,!1,4279310375,A.aB,36,A.bi,A.a4,0.12,C.cB(),"\u2605\u2605\u2605\u2605\u2606",0,D.pL,0.8,0.1,0.4))
w=1
break A
case"equation":t.iG(C.iQ(A.L,!1,4279310375,A.aB,32,A.bi,A.O,0.14,C.cB(),"y = mx + b",0,D.dc,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iG(C.iQ(A.L,!1,4279310375,A.aB,18,A.bi,A.a4,0.2,C.cB(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.tP,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d_(new C.eiZ(t))
w=1
break A
case"compare":t.d_(new C.ej_(t))
w=1
break A
case"link_text":t.iG(C.iQ(A.bg,!1,4280640491,A.mq,16,A.bi,A.a4,0.1,C.cB(),"https://example.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"phone":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,18,A.bi,A.a4,0.1,C.cB(),"(555) 123-4567",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"email":t.iG(C.iQ(A.bg,!1,4280640491,A.aB,18,A.bi,A.a4,0.1,C.cB(),"name@email.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d_(new C.ej1(t))
w=1
break A
case"cover_page":r=t.gdm()
if(r==null){w=1
break A}t.d_(new C.ej2(t,r))
w=1
break A
case"invoice":t.iG(C.iQ(A.bg,!1,4279179050,A.aB,16,A.bi,A.a4,0.84,C.cB(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"resume":t.iG(C.iQ(A.bg,!1,4279179050,A.aB,17,A.bi,A.a4,0.84,C.cB(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,16,A.bi,A.a4,0.88,C.cB(),"MEETING MINUTES\nDate: "+C.bAw()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,17,A.bi,A.a4,0.88,C.cB(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iG(C.iQ(A.bg,!1,4279310375,A.aB,15,A.bi,A.a4,0.8,C.cB(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dc,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pC,v)},
cnZ(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eB8.t(0,this.z)},
cnY(d){if(this.jy()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b4t(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cf,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.r,o&&e?2:1)
t=C.hVJ(d)
s=o?12:18
r=o?A.I:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.N(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.MQ,A.f,p,p,D.Db,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fP,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a9),p)},
bIZ(d){var w,v=null,u=this.jy()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.ay:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.v(w,new B.J(D.Ph,new C.ekl(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uI(d){return this.bvL(d)},
bvL(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aKz.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nI(),$async$uI)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d_(new C.eiG(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.ezV
w=h.e
if(w==null)return h.bzy()
v=h.gdm()
v.toString
u=h.c
u.toString
t=B.M(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bS,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eC,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bW:D.b6w
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gR4()}else j=!1
if(j)k.push(new C.a6w(h.a.c,!1,h.e.gb6F(),h.gc4v(),g))
else if(s&&h.e!=null&&!h.jT()&&C.cbO(h.e.w)){j=h.a
k.push(new C.a6w(j.c,j.d,g,h.gc5E(),g))}if(s)k.push(h.bIV(w,t,r))
if(s&&h.jT()){w=t?A.ft:A.k9
j=B.m(14)
i=B.I(A.bl.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bFh,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.ft,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Aj,A.j5,g,g,g))}w=!n
if(w&&!h.jT())k.push(h.bZ_(t,r))
if(w&&h.jT())k.push(h.cv5(t))
if(r&&h.jy()!=null&&w&&!h.jT())k.push(h.bYW(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b2r(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b2r(t,!1),g))
i.push(B.D(new B.bI(A.b0,g,g,h.bAO(v,t,!s||p),g),1))
if(h.cnZ(r)&&u&&s&&!h.jT())i.push(h.c4j(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jT()&&h.cnY(!1))j.push(new B.a5(240,g,h.bLt(t),g))
k.push(B.D(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bYX(t))
return B.cc(g,m,B.bq(!1,new B.an(A.W,g,A.aa,A.q,w,g),!0,!1,A.ah,!0,!0),g,!1,!1,g,!1)},
bzy(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.M(p).ax.a===A.H
p=w?A.bW:A.bN
v=r.a.e
u=r.c3z(A.bl,A.pr,new C.ejo(r),r.gc7O(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.D(r.aJE(A.bl,A.hv,"Blank Presentation",new C.ejp(r)),1),A.aw,B.D(r.aJE(A.aZ,A.xL,"Class Template",new C.ejq(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bu,s,A.mp,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.ay:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bwx(w))
else{t=new B.hV(t,B.T(t).k("hV<1>"))
A.d.v(u,t.gdK(t).dr(0,new C.ejr(r,w),x.l))}return B.cc(q,p,B.bq(!1,B.cJ(u,q,new B.N(18,12,18,v),q,q,A.ai,!1),!0,!1,A.ah,!0,!0),q,!1,!1,q,q)},
bHi(){this.m(new C.ek1(this))
var w=this.c
w.toString
if(B.aI(w,A.bS,x.w).w.a.a<900){w=$.aU.ak$.d.c
if(w!=null)w.jp()}},
adv(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jy()==null){w=1
break}s=t.c
s.toString
s=B.M(s)
r=t.c
r.toString
w=3
return B.b(B.c_(A.K,null,new C.emc(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$adv)
case 3:case 1:return B.h(u,v)}})
return B.i($async$adv,v)},
Ac(d,e){return this.cok(d,e)},
cok(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Ac=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hQ(D.Vh,!0,"Dismiss",j,new C.enL(),new C.enM(d,e),A.ir,!0,x.N),$async$Ac)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.agS()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gR4()){r.agS()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aOg(d),$async$Ac)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aNG(j,q,d.b),$async$Ac)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a8(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Es(d,!1),$async$Ac)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hQ(D.Vh,!0,"Dismiss",j,new C.enN(),new C.enO(d),A.a1,!0,x.y),$async$Ac)
case 20:if(g===!0)r.MZ(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.aey("Rename presentation",d.b),$async$Ac)
case 24:l=g
if(l!=null)r.ciO(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ad()
k.n(0,"id",C.cB())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.enP(r,k))
r.oR()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ac,v)},
aYy(d,e){var w=null
return B.bK(!1,D.fgS,w,w,!0,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.at,w,A.lx,w,w,w,w,w,A.kg,w,w))},
bwx(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eiL(this,d),null)},
bFq(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.ejQ(),x.dv).bY(0,new C.ejR()),v=B.B(w,w.$ti.k("G.E"))
return new B.C(G.aeP,this.aKc(v,e,new C.ejS(),f),null)},
aKc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eb)
t=e.j(g?0.14:0.1)
s=new B.aV(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.ad:A.bv,n,n,n,10),A.pU],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.x(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.co(A.aU,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bQ(r,r,r,r),new B.bs(s,s,s,s),n,n,A.n),n,n,n,n,A.mS,n,n,n))
A.d.v(l,u)}return B.f4(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
bwv(d,e,f){return this.aKc(d,e,null,f)},
bFs(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d3B
else if(v==="hati_kuhoweya")w=D.cRt
else{if(v==="hati_kiapo_uongozi")v=D.cEV
else v=C.km(v)?D.cLH:A.OT
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.ejV(this,f,d,e,w),null)},
bYX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jy()
if(i==null||i.b!==D.cP)return A.bH
w=k.Vj(i)
v=k.ark(i)
u=A.w.j(0.55)
t=x.p
s=B.bq(!1,new B.C(A.Am,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b2,B.bK(!1,D.fcI,j,j,!0,j,j,new C.ell(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ah,!0,!0)
r=d?A.aA:A.c
q=B.m(18)
p=B.I(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h5,B.bX(new B.C(A.eN,B.aL(j,A.T,!0,j,!0,A.q,j,B.aM(),w,A.bl,j,j,j,j,2,D.bLa,A.y,!0,j,!0,j,!0,v,A.ag,j,j,j,j,j,A.vM,j,j,j,j,j,j,!1,"\u2022",j,new C.elm(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.yX,A.am,j,A.S3,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.be),j),1)
q=B.m(16)
p=d?A.bj:A.c
o=B.I(d?A.aJ:A.aK,A.r,1)
n=B.D(B.cd(B.A(B.a([k.tq(G.LP,j,new C.eln(k,i),d),k.tq(G.YJ,j,new C.elo(k,i),d),k.tq(I.aj0,j,new C.elp(k,i),d),k.tq(I.Zo,j,new C.elq(k,i),d),k.tq(k.bwt(i.as),j,new C.elr(k,i),d),k.tq(D.ak9,j,new C.els(k,i),d),k.tq(D.ak8,j,new C.elt(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.y,j,j,j,j,A.aU),1)
m=A.k.O(i.w)
return B.bY(0,B.aF(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(D.bm2,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.ay:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d9],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.l2,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ae),0,0,0)},
bYW(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jy()
if(m==null)return A.bH
w=m.b
v=w===D.cP
u=B.m(18)
t=x.O
t=d?B.a([A.bj,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aJ:A.aK,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cw,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b16(A.j7,"Edit",new C.el6(o,m),d,!0))
if(w===D.le)p.push(o.b16(A.Fs,"Shape & ring",new C.el7(o),d,!0))
p.push(o.tq(A.B5,"Format",new C.el8(o),d))
if(v)A.d.v(p,B.a([o.tq(G.LP,n,new C.el9(o,m),d),o.tq(D.ak9,n,new C.ela(o,m),d),o.tq(D.ak8,n,new C.elb(o,m),d)],q))
p.push(A.b2)
p.push(o.cmc(A.ea,n,o.gaOa(),d,!0))
p.push(o.tq(A.hw,"Done",new C.elc(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a6(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.Es,A.l2,n,n,n)},
bwt(d){switch(d.a){case 2:return D.Zl
case 1:case 5:return D.Zn
default:return D.Zm}},
bZN(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dK
default:return A.bg}},
axw(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aE
else if(h)w=A.c
else{v=g?A.ad:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?K.FN:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.V(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eb,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qA,B.aF(!1,A.a1,!0,n,B.aK(!1,v,!1,B.ex(new B.C(new B.N(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ae),n)},
tq(d,e,f,g){return this.axw(d,e,f,g,!1,!1)},
b16(d,e,f,g,h){return this.axw(d,e,f,g,h,!1)},
cmc(d,e,f,g,h){return this.axw(d,e,f,g,!1,h)},
bIV(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bj,A.M],m):B.a([A.c,A.mA],m)
w=B.I(e?A.aJ:A.p2,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cw,18)],x.V)
u=p.a13(A.ez,"Back",p.gbCx(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d9,B.D(B.A(B.a([new B.dl(1,A.ch,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bZ:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.t2,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.jT()){u=p.a13(A.qQ,"Undo",p.ax.length===0?o:p.gcvy(),e)
A.d.v(r,B.a([u,p.a13(D.byR,"Redo",p.ay.length===0?o:p.gchw(),e)],q))}r.push(p.a13(A.xq,"PDF",new C.eke(p),e))
r.push(p.a13(A.hx,"Download as video",new C.ekf(p),e))
if(!p.jT())r.push(B.Bf(o,o,B.V(A.nF,e?A.ad:A.bv,o,o,o,o),new C.ekg(p),A.J,new C.ekh(p),A.ah,"More",x.N))
r.push(A.d9)
r.push(B.aF(!1,A.a1,!0,o,B.aK(!1,B.m(14),!0,B.ex(D.dZH,o,new B.o(o,o,o,B.m(14),o,K.FN,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gayl(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ae))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a6(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.blY,D.br7,o,o,o)},
cv5(d){var w=this,v=null,u=B.m(18),t=d?A.aA.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aK,A.r,1)
return B.p(v,B.cd(B.A(B.a([w.iq(A.tw,"Print",new C.eow(w),d),w.iq(A.xq,"Download PDF",new C.eox(w),d),w.iq(A.py,"Present",w.gayl(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.y,v,v,v,v,A.aU),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Aj,G.agy,v,v,v)},
a13(d,e,f,g){var w,v=null
if(f==null)w=g?A.b8:A.dl
else w=g?A.ad:A.aJ
return B.aH(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c7)},
bZ_(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aA.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aK,A.r,1)
t=x.f0
t=B.B(new B.J(p,new C.elw(r,d),t),t.k("aj.E"))
t.push(new B.C(W.agf,new B.fj(new C.elx(r),q),q))
A.d.v(t,w?B.a([new B.C(Q.uX,r.afa(A.l3,"Ending celebration",r.gc80(),d),q),new B.C(Q.uX,r.afa(A.Fs,"Logo ring & frame",r.gc8H(),d),q)],x.p):A.h8)
A.d.v(t,w?B.a([new B.C(Q.uX,r.afa(A.nG,"Look and feel",r.gc8I(),d),q),new B.C(Q.uX,r.afa(A.ov,"Edit this slide's text",r.gc9d(),d),q)],x.p):A.h8)
t.push(new B.C(Q.uX,B.hn(B.aE(q,B.p(q,D.ezo,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.kZ.j(0.4),A.J,10)],x.V),D.am6,A.n),q,34,q,q,A.h4,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ely(r),q,q,q,q,q,q,!1,A.a9),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.y,q,D.brB,q,q,A.aU)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cjW(d),A.q,q,A.y,q,new B.N(8,2,8,s),q,q,A.aU)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Aj,q,q,q,q)},
cjW(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cYY[v]
u.a=null
s=u.a=t.b
w.push(e.lo(e.clC(s),t.a,new C.emV(u,e),a3,D.aKz.t(0,s)))}w.push(e.iq(A.kF,"Notes Slide",new C.emW(e),a3))
w.push(e.lo(A.Fr,"Quiz",new C.emX(e),a3,!0))
w.push(e.lo(L.F4,"Worksheet",new C.en7(e),a3,!0))
w.push(e.lo(U.Fu,"Flashcard",new C.eni(e),a3,!0))
w.push(e.lo(A.MG,"Lab Report",new C.ent(e),a3,!0))
w.push(e.lo(A.xx,"Rubric",new C.enA(e),a3,!0))
w.push(e.lo(A.op,"Minutes",new C.enB(e),a3,!0))
w.push(e.lo(A.pw,"Syllabus",new C.enC(e),a3,!0))
w.push(e.lo(A.MK,"Timeline",new C.enD(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d_8[v]
w.push(e.lo(r.b,r.c,new C.enE(e,r),a3,!D.aKE.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.iq(A.xO,a0,e.gaJU(),a3),e.iq(A.tt,"Picture",new C.emY(e),a3),e.iq(A.xH,"Bio link",new C.emZ(e),a3),e.iq(A.ZU,"Table",new C.en_(e),a3),e.iq(A.MJ,"Sticky",new C.en0(e),a3),e.iq(A.ts,"Divider",new C.en1(e),a3),e.iq(A.B6,"Header",new C.en2(e),a3),e.lo(A2.v5,"Rectangle",new C.en3(e),a3,!0),e.lo(A.qF,"Circle",new C.en4(e),a3,!0),e.lo(A.Ze,"Triangle",new C.en5(e),a3,!0),e.lo(A.js,"Arrow",new C.en6(e),a3,!0),e.lo(D.bxk,"Parallelogram",new C.en8(e),a3,!0),e.lo(D.bzP,"Hexagon",new C.en9(e),a3,!0),e.lo(A.ts,"Line",new C.ena(e),a3,!0),e.lo(A.xq,"PDF",new C.enb(e),a3,!0),e.lo(N.a_2,"Signature",new C.enc(e),a3,!0),e.iq(A1.AX,"Quote",new C.end(e),a3),e.iq(D.YR,a1,new C.ene(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bS,x.w).w
u=x.p
t=B.A(B.a([e.aKJ("Wide 16:9",D.BT,a3),e.aKJ("Short 9:16",D.nO,a3),new B.C(A.fP,B.mw(D.bBY,d,D.f99,d,new C.enf(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bCM("This slide",!e.Q,a3,new C.eng(e)),A.bn,e.aMU("All slides",e.Q,a3,new C.enh(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bCN()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bZ:A.bI,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.J(D.a0P,new C.enj(e),n),n.k("aj.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aU)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d00[v]
j=B.b0(k)
i=new B.az(k===4294967295?A.dl:A.b8,1.5,A.r,-1)
l.push(new B.C(A.fP,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bQ(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.enk(e,k),d,d,d,d,d,d,!1,A.a9),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aU)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bBN()
g=B.T(h).k("J<1,C>")
h=B.B(new B.J(h,new C.enl(e,a3),g),g.k("aj.E"))
return new B.a5(w.a.a-20,d,B.v(B.a([t,A.P,q,A.ao,p,A.P,o,A.au,n,A.P,m,A.au,l,A.P,j,A.au,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aU),A.ao,e.bVV(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jy()
w=e.c
w.toString
w=B.aI(w,A.bS,x.w).w
u=new C.emU(e)
t=new C.enF(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Ph,f.dy,new C.enm(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.au,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdm()
q=q==null?d:q.r
p.push(t.$4(D.Ph,q,new C.enn(e,u),A.bl))
return new B.a5(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.iq(A.kF,w,new C.eno(e),a3),e.iq(A.tw,"Print deck",new C.enp(e),a3),e.lo(D.ai4,"Export JSON",new C.enq(e),a3,!0),e.iq(A.fI,"Duplicate Slide",e.gaOZ(),a3),e.iq(A.ea,a2,e.gaOb(),a3),e.cpC(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jy()
w=x.p
u=B.a([e.iq(D.YR,a1,new C.enr(e),a3),e.iq(A.fI,"Duplicate",e.gaOZ(),a3),e.iq(A.ea,a2,e.gaOb(),a3),e.iq(A.py,"Present",e.gayl(),a3),e.iq(A.B4,a0,e.gaJU(),a3),e.iq(A.B_,"Fit Text",new C.ens(e),a3),e.iq(A.xq,"Download PDF",new C.enu(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iq(A.kH,"Transfer",new C.env(e),a3))
if(f!=null){w=B.a([A.ab,e.iq(G.LP,"Bold",new C.enw(e,f),a3),e.iq(G.YJ,"Italic",new C.enx(e,f),a3),e.iq(G.ahG,"Underline",new C.eny(e,f),a3),e.iq(Ac.LQ,"Bullets",new C.enz(e,f),a3),e.bLc(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bIZ(a3))
w.push(e.iq(D.bw0,"Delete",e.gaOa(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aKJ(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nO
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a6y,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d9,D.bB9],v))
return new B.C(A.fP,B.jF(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.ejj(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cpC(d){var w,v,u,t,s,r=this,q=null,p=r.gdm()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b8:A.cm,A.r,1)
u=B.m(8)
t=B.V(A.F2,d?A.ay:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.al6,q,q,q,new C.eo1(r,p),q,q,q,q,q,A.c7)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.akY,q,q,q,new C.eo2(r,p),q,q,q,q,q,A.c7)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.EJ,A.m8,q,q,q)},
clC(d){switch(d.a){case 6:return U.Fu
case 7:return A.Fr
case 8:return L.F4
case 4:return A.B6
default:return A.kF}},
bLc(d,e){var w=null,v=B.I(e?A.b8:A.cm,A.r,1),u=B.m(8),t=B.aH(w,w,w,w,D.al6,w,w,w,new C.ekr(this,d),w,w,w,w,w,A.c7),s=A.k.O(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.akY,w,w,w,new C.eks(this,d),w,w,w,w,w,A.c7)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.x9,A.m8,w,w,w)},
bVV(d){var w=null
return B.Bf(B.CH(B.V(Af.YU,d?A.ad:A.bv,w,w,w,16),w,w,D.feu,w,w,w),w,w,new C.ekZ(),A.J,this.gbxa(),A.cj,"Slide layout",x.fO)},
lo(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.I(g?A.dq:A.aK,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dx:A.bl,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.MQ,A.f,w,w,D.Db,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fP,B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.ex(new B.C(A.h5,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cZ,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ae),w)},
iq(d,e,f,g){return this.lo(d,e,f,g,!1)},
b2r(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ai:A.aU
v=B.hD(t,new C.eod(u,s,e,d),s.r.length,A.cj,t,w,new C.eoe(e),!1)
s=d?A.aA:A.bN
w=B.a([],x.p)
if(e&&!u.jT())w.push(new B.C(A.cj,B.GW(E.alj,new C.eof(u),B.nl(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aLh,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bAO(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nO?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.N(u,u,u,u),new B.bI(A.b0,v,v,new B.fF(w,B.aE(v,B.cm(new C.ejI(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ejJ(this),v,v,v,v,v,v,!1,A.a9),v),v),v)},
bAQ(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.km(a9.w))===!0,b1=b0&&C.fsA(b3),b2=b0&&b3.b===D.kM&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.jT())v=!b0||a7.bY4(b3)
else v=!1
if(!a7.jT())u=!b0||a7.bY3(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cb:A.bl
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fQQ(b3))o=a8
else if(p&&!a7.jT())o=a7.gc4x()
else o=a7.jT()?a8:new C.ejw(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jp
i=w&&C.fQQ(b3)&&a7.zh()?new C.ejx(a7,b3):a8
h=v&&b3.b===D.cP?new C.ejy(a7,b3):a8
g=u?new C.ejz(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bk
else e=q?A.bU:r
else e=A.K
e=B.I(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bU.j(0.08)
else a0=b3.b===D.kM?A.K:a8
if(b1){a1=a7.jT()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bU.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bS,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zh()
a3=b3.b===D.cP
a4=a3?a7.Vj(b3):a8
a5=a3?a7.ark(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bS,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ejA(a7,b3):a8
a3=v&&a3?new C.ejB(a7,b3):a8
a6=C.b_d(q,a4,a1,b3,a5,a2,a3,new C.ejC(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bDX,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ejD(a7,b3,b4,b5),a8,a8,new C.ejE(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a9),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jT()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bEB,A.f,a8,a8,new B.o(A.dV,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbTy(),a8,a8,a8,a8,a8,a8,!1,A.a9),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jT()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bG8,A.f,a8,a8,new B.o(A.bU,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ejF(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a9),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cP)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bS,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fmR,A.f,a8,a8,new B.o(A.bl,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kD,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ejG(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a9),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eA(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a9),k*b5,new B.cz("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aMU(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bl:A.bF,A.r,1)
if(e)t=A.bl
else t=f?A.ay:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d9,B.p(r,D.MQ,A.f,r,r,D.Db,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h3,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a9)},
bCM(d,e,f,g){return this.aMU(d,e,f,g,!1)},
c4j(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b1,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aA:A.aP
t=f?A.wc:l
if(f)s=new B.bQ(new B.az(e?A.bF:A.aK,1,A.r,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.r8,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b2,m.aYy(e,new C.elA(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bZ:A.bI,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.ao,B.D(B.aL(l,A.T,!1,l,!0,A.q,l,B.aM(),k,l,l,l,l,l,2,B.bo(l,new B.b4(4,B.m(10),A.df),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ag,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.elB(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.N(12,w,12,v),l,l,l)},
aQe(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jy()
if(a2==null)return A.bH
w=new C.ekF(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dP:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b2,a0.aYy(a3,a0.gbHh())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.f9C,B.D(B.kQ(a1,a1,a1,u,0.05,new C.ekG(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.flm,B.D(B.kQ(a1,a1,a1,t,0.05,new C.ekH(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cP
if(m)o.push(B.A(B.a([D.f3I,B.D(B.kQ(a1,a1,a1,96,10,new C.ekI(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.le
if(l||n===D.kM||n===D.QB)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.ff8,B.D(B.kQ(a1,a1,a1,s,0,new C.ekJ(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fmA,B.D(B.kQ(a1,a1,a1,r,0,new C.ekK(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Bl[j]
i.a=null
g=h.a
i.a=g
k.push(B.jF(a1,a1,a1,new B.x(h.b,a1,A.pZ,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ekL(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c4(A.bE,k,A.bx,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Bg[j]
f.a=null
g=e.a
f.a=g
h.push(B.jF(a1,a1,a1,new B.x(e.b,a1,A.pZ,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ekM(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ao,k,A.P,i,A.ao,B.c4(A.bE,h,A.bx,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.J(v,new C.ekN(w,a2),l),l.k("aj.E"))
k=x.fw
A.d.v(o,B.a([m,A.ao,B.c4(A.bE,l,A.bx,6,6),A.ac,B.h1J(new C.ekO(w,a2),D.cgi,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.eZ){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.J(v,new C.ekP(w,a2),m),m.k("aj.E"))
A.d.v(o,B.a([n,B.c4(A.bE,m,A.bx,0,6)],p))}o.push(A.ac)
o.push(B.dp(D.bFV,D.fh2,new C.ekQ(a0,a5),B.bk(A.bL,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cJ(o,a1,a1,q,a1,A.ai,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wc:a1
if(a4)o=new B.bQ(new B.az(a3?A.bF:A.aK,1,A.r,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.r8,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Ak,a1,a1,a1)},
bLt(d){return this.aQe(d,!1,!1,null)},
c3z(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.ekT(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eUV,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.D(B.v(B.a([w,A.bB,A.cZ,r.bwv(D.cJk,d,B.M(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dT(B.hn(B.aF(!1,A.a1,!0,q,B.aK(!1,q,!0,B.ex(D.eEF,q,new B.o(q,q,B.I(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.bU.j(0.4),A.ej,8)],p),D.amb,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ae),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.M(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.b3p,D.b3N],v):B.a([A.c,A.k9],v)
u=B.I(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cw,14)],p),new B.a6(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aJE(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eis(this,g,d,e,f),null)},
aey(d,e){return this.cfV(d,e)},
cfV(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$aey=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b1,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.emx(d,q),p,null,!0,!0,x.N),$async$aey)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aey,v)},
OL(d){var w=d.bQ()
return""+B.bF(w)+"/"+B.bP(w)+"/"+B.bx(w)}}
C.adN.prototype={}
C.axc.prototype={
T(){return new C.baD(null,null)}}
C.baD.prototype={
gcrK(){var w,v=this.a.c,u=v.f.bQ(),t=""+B.bF(u)+"/"+B.bP(u)+"/"+B.bx(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pl,u,1,u,v)
w.f5(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bj(u,D.bkt,u,1,u,v)
w.co(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bq3()},
I6(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cp.av(0,new B.hL(w,v,A.cp).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.bpZ,B.c6(new B.h2(B.a([u,w],x.dS)),new C.cYl(this),v),v),v,v,v)}}
C.baR.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aJ,A.r,1),t=x.p
return B.av(new B.C(D.bqf,B.aF(!1,A.a1,!0,w,B.p(w,B.bv(B.m(22),B.v(B.a([new B.C(D.bpr,B.v(B.a([B.p(w,D.bEH,A.f,w,w,new B.o(A.aE.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.fj1,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eW2,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e_,D.bjx,B.A(B.a([B.D(B.bK(!1,D.f7V,w,w,!0,w,w,new C.cYH(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bI,w,w,w,w,w,A.mP,w,A.nS,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bj,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.fd1,w,w,!0,w,w,new C.cYI(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.aE,w,w,w,w,w,A.mP,w,A.nS,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.ap),A.f,w,A6.U7,new B.o(A.aA,w,u,v,D.cJE,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ae),w),w,w,w)}}
C.IW.prototype={
T(){return new C.baC()}}
C.baC.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dz,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.V(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dT(B.db(B.aE(o,B.v3(B.df(o,B.A(B.a([r,A.aw,new B.dl(1,A.ch,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f9:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b9,A.Q,0,o,o),o,o,A.bb,new B.o(n,o,u,v,t,o,A.n),A.eD,o,o,o,A.ok,o,o,1/0),A.cp,A.jm,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cYg(p,d),new C.cYh(p),new C.cYi(p),new C.cYj(p),o,o,o,!1,A.a9),k),new B.u(0,(1-k)*16))}}
C.OB.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.r,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aK(!1,s,!0,new B.C(A.eN,B.A(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a6(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eA,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.n9,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.ee,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ae)}}
C.Zj.prototype={
T(){return new C.aCK(D.dc,null,null)}}
C.aCK.prototype={
gXw(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bk3,null,1,null,v)
v.w!==$&&B.bM()
v.w=w
u=w}return u},
b2R(d){if(!this.a.c.ay)return
this.x=d
this.gXw().ik(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.au7(D.eL0)
C.hSF()
v.Q9()},
q(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gXw().q()
v=w.z
if(v!=null)v.a9(0)
C.au7(D.eL1)
C.hSI()
w.bsb()},
cuw(){B.jc()
this.m(new C.epc())
var w=this.c.I(x.q).f
w.a39()
if($.bih)w.R(D.eHT)},
Q9(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dA(0,0,0,0,0,A.o.D(C.h_S(u,w),1,120)),new C.ep2(v))},
cub(){var w,v=this
v.m(new C.epb(v))
if(v.r)v.Q9()
else{w=v.f
if(w!=null)w.a9(0)}},
gaS4(){var w=this.a.c.db
return(w==null?"":w).length!==0},
coq(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.m(new C.ep3(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.l0,new C.ep4(w))},
au7(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.m(new C.eoZ(u))
u.Q9()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaS4()){u.coq()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ep_(u,A.o.F(w+1,s)))
u.b2R(w)
u.Q9()}},
ceA(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.m(new C.ep0(v))
v.Q9()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ep1(v,w,t))
v.b2R(w)
v.Q9()}},
cpO(d){var w,v=this,u=v.e
if(u===D.cf){u=v.d
u===$&&B.c()
return new B.n1(d,new B.cz(u,x.ac))}w=v.cpP(u)
u=v.d
u===$&&B.c()
return B.pZ(new B.n1(d,new B.cz(u,x.ac)),w,new C.ep9(),A.bb,A.bb,new C.epa(v))},
cpP(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bkp
case 16:return A.kA
case 18:return A.mO
default:return A.nz}},
cpN(d,e,f){var w,v,u,t=null,s=B.cH(A.cp,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cX(s,!1,e,t)
case 2:case 17:w=x.K
return B.ji(e,new B.bf(s,new B.bm(A.tY,A.J,w),w.k("bf<bH.T>")),t,!0)
case 3:w=x.K
return B.ji(e,new B.bf(s,new B.bm(A.QR,A.J,w),w.k("bf<bH.T>")),t,!0)
case 4:case 21:w=x.K
return B.ji(e,new B.bf(s,new B.bm(A.ic,A.J,w),w.k("bf<bH.T>")),t,!0)
case 5:w=x.K
return B.ji(e,new B.bf(s,new B.bm(A.tX,A.J,w),w.k("bf<bH.T>")),t,!0)
case 6:case 16:w=x.b
return B.ig(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bm(0.82,1,w),w.k("bf<bH.T>")))
case 7:w=x.b
return B.ig(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bm(1.18,1,w),w.k("bf<bH.T>")))
case 8:return B.c6(s,new C.ep5(s),e)
case 9:return B.c6(s,new C.ep6(s),e)
case 10:return B.c6(s,new C.ep7(s),e)
case 11:return B.c6(s,new C.ep8(s),e)
case 12:w=x.b
return new B.cX(s,!1,B.ig(A.A,e,t,new B.bf(s,new B.bm(1.03,1,w),w.k("bf<bH.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jp(B.ji(e,new B.bf(s,new B.bm(A.tY,A.J,v),v.k("bf<bH.T>")),t,!0),A.q,new C.bpe(w,t))
case 15:w=x.K
return B.ji(e,new B.bf(s,new B.bm(A.QR,A.J,w),w.k("bf<bH.T>")),t,!0)
case 19:w=B.dk()
w.mr((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.js(v,u,v,1)
return B.fr(A.A,B.db(e,s.gp(0)),t,w,!0)
case 20:return B.eA(A.A,(1-s.gp(0))*0.2,new B.cX(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jp(new C.amL(B.c6(n.gXw(),new C.epd(n,v,w),m),m),A.q,m)}else{t=B.rc(new C.HU(w,!0,!1,m))
l=B.b0(w.e)
u=n.cpO(B.ei(B.jp(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h_S(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.nX,m,m,m),A.bn,D.bGX],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fF,m,m,m)
l=B.a([],k)
r=n.y
q=n.a
if(r){r=q.c
q=r.db
if(q==null)q=""
p=r.dx
if(p==null)p="NGMY"
o=r.dy
if(o==null)o=""
r=r.fr
l.push(B.bY(0,new C.Mw(new C.DQ(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nO?0.5625:1.7777777777777777
l.push(B.av(new B.fF(r,B.jp(B.u5(A.ah,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bih){r=B.GW(A.kJ,new C.epe(d),B.nl(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bq(!0,B.A(B.a([r,A.ab,B.GW(B.V(n.r?Ah.xF:A.iN,m,m,m,m,m),n.gcua(),B.nl(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ah,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bq(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hm,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fF,m,m,m),!0,!1,A.ah,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bq(!0,B.aE(A.c5,B.p(A.kU,$.bih?A.bH:s,A.f,m,m,m,m,64,m,m,D.bla,m,m,150),A.y,!1,m,n.gcuv(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a9),!0,!1,A.ah,!0,!0),m,m,m,0,0,m))
return B.cc(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.q,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.epf(n,d),m,m,m,!1,A.a9),m,!1,!1,m,m)}}
C.J2.prototype={
B(d){var w=null
return B.p(w,B.bq(!0,new B.C(E.ag2,this.c,w),!0,!1,A.ah,!0,!1),A.f,w,w,D.aXq,w,w,w,w,w,w,w,w)}}
C.bpe.prototype={
iO(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jv(d){return d.b!==this.b}}
C.bfs.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aUe
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aD:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vk,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bb,new B.o(s.f,r,u,w,r,r,A.n),A.hV,r,64,r,r,r,r,64)
return B.aE(r,new B.a5(78,r,B.v(B.a([w,A.ao,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a9)}}
C.bfr.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dbO.h(0,p)
if(o==null)o=D.d_g
p=p==="none"
w=p?q:new B.a6(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.akk:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.en,q,q,52)
return B.aE(q,new B.a5(66,q,B.v(B.a([w,A.ao,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a9)}}
C.aIq.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
C.aKs.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.buX.prototype={}
C.aKt.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.b_g.prototype={}
C.US.prototype={
T(){return new C.aCI()},
bdc(d){return this.e.$1(d)}}
C.aCI.prototype={
gb1c(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga8N(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb1c()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaLz(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb1c()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb2q(){return A.d.cI(this.ga8N(),0,new C.eoJ())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gK(w).a
v.PL()},
PL(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b_R(s.c,s.f),$async$PL)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eoF(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$PL,v)},
I8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$I8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga8N()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fvM(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oQ(o,q.c,q.f),$async$I8)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eo(new C.eoI(t,p),!1,null,x.H)
w=4
return B.b(B.a4(o,!1).ci(q),$async$I8)
case 4:q=t.a
w=5
return B.b(B.oP(q.c,q.f),$async$I8)
case 5:w=6
return B.b(t.PL(),$async$I8)
case 6:case 1:return B.h(u,v)}})
return B.i($async$I8,v)},
Q7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Q7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.ht(o,D.dP_,!0,"NgmySlidesTransferScan",x.N),$async$Q7)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eoG(t))
w=4
return B.b(C.afV(s),$async$Q7)
case 4:r=e
t.m(new C.eoH(t))
o=J.a7(r)
if(o.gal(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eGM)
w=1
break}w=5
return B.b(t.a.bdc(r),$async$Q7)
case 5:q=t.c
if(q==null){w=1
break}B.a4(q,!1).N(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Q7,v)},
I7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$I7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga8N()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oQ(s,r.c,r.f),$async$I7)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fw0(null,A.d.gK(n),s,t.a.f)}else q=C.fw0(n,null,r.c,r.f)
if(n.length===1){s=A.d.gK(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.FH(q,"ngmy_slides_"+p,!1),$async$I7)
case 4:o=e
s=t.a
w=5
return B.b(B.oP(s.c,s.f),$async$I7)
case 5:w=6
return B.b(t.PL(),$async$I7)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$I7,v)},
a1e(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a1e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eoK(t))
w=3
return B.b(C.bAe(),$async$a1e)
case 3:s=e
t.m(new C.eoL(t))
if(s==null||J.ck(s)){w=1
break}w=4
return B.b(t.a.bdc(s),$async$a1e)
case 4:r=t.c
if(r==null){w=1
break}B.a4(r,!1).N(null)
r=t.c.I(x.q).f
q=J.a7(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a1e,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.M(d).ax.a===A.H,l=m?A.db:A.bN,k=o.ga8N().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.V(A.cv,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.eoO(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.yU],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.eR,24)],x.V)
u=B.ao(n,B.V(A.pr,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bHs,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eA,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bu5],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hn(B.aE(A.c5,D.eEH,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc9p(),n,n,n,n,n,n,!1,A.a9),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.a_x,A.n),n,n,n,n,E.Xo,n,n,1/0),A.e_,o.avg(m,"What to transfer"),A.ac,B.A(B.a([B.D(o.aUg(A.py,m,new C.eoP(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aUg(D.bxc,m,new C.eoQ(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.avg(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aA:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aK,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.ay:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c0,n,n,n))}else A.d.v(v,new B.J(u,new C.eoR(o,m),B.T(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.mp)
w.push(o.avg(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.D(o.ao5(A.aW,k,!0,A.ja,m,o.r,o.gc3D(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aJF(A.jF,!0,A.iO,m,o.gclc(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.D(o.bv2(A.aT,k,A.hx,m,o.r,o.gc3A(),"Download .json","Backup file"),1),A.aw,B.D(o.aJF(A.aL,!0,Ar.xQ,m,o.gcwN(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bl.j(0.28),A.r,1)
s=B.V(A.l5,A.bl.j(0.9),n,n,n,18)
r=o.gaLz()
q=o.gb2q()
p=o.gb2q()===1?"":"s"
A.d.v(w,B.a([A.bu,B.p(n,B.A(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.by,n,n,n)],h))}j=B.a([j,B.bq(!0,B.v(B.a([new B.C(Ae.Lq,i,n),B.D(B.cJ(w,n,D.boA,n,n,A.ai,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0)],h)
if(o.f)j.push(B.p(n,S.Uq,A.f,A.dy,n,n,n,n,n,n,n,n,n,n))
return B.cc(n,l,new B.an(A.W,n,A.aa,A.q,j,n),n,!1,!1,n,n)},
adI(){var w=0,v=B.j(x.H),u=this,t,s
var $async$adI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hYV(s,t.d,t.e),$async$adI)
case 2:return B.h(null,v)}})
return B.i($async$adI,v)},
avg(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bl,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.ay:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aUg(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aA:A.c
if(g)w=A.bl
else w=e?A.bF:A.aK
w=B.I(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cw,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bl,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cj,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.ex(new B.C(A.by,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.ay:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ae)},
bFr(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aA:A.c,m=B.m(16)
if(p)w=A.bl
else w=e?A.bF:A.aK
w=B.I(w,A.r,p?2:1)
v=B.p(q,D.bHD,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a6(A.a3,A.a7,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.ay:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ed:A.qF
if(p)r=A.bl
else r=e?A.b8:A.dl
return new B.C(A.cK,B.aF(!1,A.a1,!0,q,B.aK(!1,o,!0,B.p(q,B.A(B.a([v,A.bd,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.by,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eoE(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ae),q)},
ao5(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aA:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aK
w=B.I(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qD,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.akS,A.f,s,s,D.aXc,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aF(!1,A.a1,!0,s,B.aK(!1,p,!0,B.ex(new B.C(E.X3,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.ay:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ae),r)},
aJF(d,e,f,g,h,i,j){return this.ao5(d,e,!1,f,g,!1,h,i,j)},
bv2(d,e,f,g,h,i,j,k){return this.ao5(d,e,!1,f,g,h,i,j,k)}}
C.UT.prototype={
T(){return new C.big()}}
C.big.prototype={
a_(){this.a1()
this.acy()},
acy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$acy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fw0(null,A.d.gK(m),k,r.a.f):C.fw0(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gK(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.km(A.d.gK(n).w))C.fvM(A.d.gK(r.a.d),D.cYm)
n=r.a
m=n.c
n=C.hVZ(n.d)
w=7
return B.b(C.fw_(p,C.hW3(r.a.d),n,m,q),$async$acy)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eoS(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eoT(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acy,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.M(d).ax.a===A.H,h=i?A.db:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eoU())
v=B.aH(j,j,j,j,B.V(A.ez,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.eoV(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.yU],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dI,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a_x,A.n),j,j,j,j,E.Xo,j,j,1/0)
q=B.m(24)
s=B.I(A.aW.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a5Q,A.L,j,j))
else if(k.d==null)r.push(D.dZg)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aD.j(0.35),A.cw,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.f8n,A.ao,B.aE(j,B.p(j,B.A(B.a([D.bJa,A.aw,B.d(m,j,j,j,j,j,j,D.eWq,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bN3,A.n),j,j,j,j,A_.afP,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eoW(k,d),j,j,j,j,j,j,!1,A.a9),A.P,D.fcz,A.az],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pv(j,j,!1,l,j,!0,!0,j,!1,D.bgf),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cj,j,j,j))
A.d.v(r,p)}r.push(A.az)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hn,A.L,j,j))
return B.cc(j,h,B.bq(!0,B.v(B.a([new B.C(Ae.Lq,v,j),B.D(B.cd(B.v(B.a([t,A.aO,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bOW,A.n),j,j,j,j,A.tg,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.y,j,E.ag7,j,j,A.ai),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),j,!1,!1,j,j)}}
C.aCF.prototype={
T(){return new C.aCG(new B.ar(A.as,$.aw()),B.kd(!0,null,!0,!0,null,null,!1))}}
C.aCG.prototype={
a_(){var w=this
w.a1()
w.e.aM(0,new C.eim(w))
$.aU.x1$.push(new C.ein(w))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aWK(){var w,v=this.c
v.toString
w=C.y8(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a4(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eC,x.w).w,i=B.m(28),h=B.I(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.tW,36),D.a9n],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bEK,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.f5G,A.ao,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aXD,k,k,k,k,A.x8,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge3()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aA:A.M
o=new B.aV(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aJ
m=new B.az(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.J,12)],g):k
t.push(new B.bG(1,A.bo,B.df(A.A,new B.x(p,k,D.eQd,k,k,k,k,k,k,k,k,k),k,k,A.bb,new B.o(s,k,new B.bQ(m,m,m,m),new B.bs(o,o,o,o),n,k,A.n),A.hV,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.HV)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bY(0,B.db(B.aL(k,A.T,!0,k,!0,A.q,k,B.aM(),w,k,k,k,k,k,2,D.bLT,A.y,!0,k,!0,k,!1,v,A.ag,k,k,B.a([new B.tX(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.AL(5,k),new C.bst()],x.aS),k,k,A.aMv,k,5,k,1,k,k,!1,"\u2022",k,new C.eii(l),k,new C.eij(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lM,k,k,k,k),0),0,0,0)],a1)
d=C.y8(w.a.a.toUpperCase())==null?k:l.gc3E()
return B.av(new B.C(new B.N(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cW(Ab.Jg,B.p(k,B.bv(e,B.v(B.a([a0,new B.C(D.bp4,B.v(B.a([new B.an(A.W,k,A.aa,A.q,g,k),A.S,D.f46,A.bu,new B.a5(1/0,50,B.bJ(D.fjS,d,B.bk(A.bl,A.bj,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.ao,B.bK(!1,A.na,k,k,!0,k,k,new C.eik(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.ap),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ae),k),k,k,k)}}
C.bst.prototype={
o9(d,e){var w=e.a.toUpperCase()
return e.cCM(B.h7(A.bt,w.length),w)}}
C.apB.prototype={
T(){return new C.aCJ(B.yH(A.KH,A.nh,A.tE))}}
C.aCJ.prototype={
q(){this.d.q()
this.a2()},
aWJ(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iK(w,d)},
a8H(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fEy(s),$async$a8H)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aWJ("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a8H,v)},
c3C(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hW1(w[u])
if(t!=null){this.aWJ(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vh,s,s,s,t.gbJt(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eC(B.a([r,B.aH(s,s,s,s,B.V(q?A.qK:Aj.Mn,s,s,s,s,s),s,s,s,new C.eoY(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fl4,s,s,s,1,s,!0)
r=B.yG(t.d,A.bQ,t.gc3B())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.cc(p,A.w,new B.an(A.W,s,A.b_,A.q,B.a([r,w,B.ao(32,B.p(s,D.f9p,A.f,s,s,new B.o(v,s,B.I(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.j6,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bsF.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aJ,A.r,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bCV,A.f,w,w,D.aXm,w,56,w,w,w,w,w,56),A.aO,D.fkL,A.ao,new B.k7(this.c,new C.f_b(),w,w,x.cI),A.aO,new B.k7(this.d,new C.f_c(),w,w,x.cl),A.ac,D.fkI],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ab.Jg,new B.o(A.aA,w,u,v,w,w,A.n),w,w,w,K.Xv,D.bpI,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ae)}}
C.a6w.prototype={
T(){return new C.bi_(A.bw)},
gd7(){return this.c}}
C.bi_.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.YF()
w.d=B.dF(A.hf,new C.e6V(w))},
q(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
YF(){return this.chD()},
chD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.e6T(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.Q(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cbP(p.c),$async$YF)
case 6:r=e
q.a=r==null?A.bw:r
case 4:if(t.c==null){w=1
break}t.m(new C.e6U(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$YF,v)},
bLk(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.aE:A.bU
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.V(A.F2,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bLk(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,H.aeT,A.j5,r,r,1/0)}}
C.a7o.prototype={
mT(){var w,v,u,t=this
t.wE()
w=t.cx
v=t.c
w.bmI(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pC(B.E(["/S",D.e1V,"/URI",new B.r9(B.Vq(w.as),A.tZ,!0)],x.N,u),u))}}
C.a7p.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b0U.prototype={
bu8(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e0d],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcG1(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jH(w,new C.ce0(),B.a2(w).k("jH<cl.E,H>")).fC(0,new C.ce1())},
aAy(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h5(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.t6(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j6(d.a,d.b))
s.n(0,"/Border",B.t6(D.bQW))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fW(t.gcG1()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pC(w,x.Y))}}
C.ce2.prototype={}
C.a1F.prototype={}
C.agL.prototype={}
C.aPr.prototype={
fT(d){var w,v,u,t,s,r,q=this,p=null
q.l0(d)
q.L_(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bcz(w)
u=x.N
t=x.Y
s=new C.ce2(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bu8(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pC(B.E(["/Type",D.e1T],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a7o(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.av5.prototype={}
C.aQV.prototype={
fT(d){var w,v,u,t,s=this
s.l0(d)
w=s.b
if(w!=null){v=B.dk()
u=s.a
v.e0(u.a,u.b,0,1)
u=d.b
u.hV()
t=s.a
t.toString
u.K9(t)
u.Rl(0)
u.ou(0,v)
w.fT(d)
u.mW(0)}}}
var z=a.updateTypes(["ax<~>()","~(lv)","R(hX)","~()","R(eF)","R(o5)","R(lv)","~(hX)","R(eF,eF)","J2(X)","R(nv)","R(l2)","ax<R>()","H(H,hX)","a3<n,@>(hX)","ak<z_>()","n(nv)","R(a6N)","n(lv)","n(vA)","R(E_)","H(hX,hX)","n(eF)","r(eF)","cK(eF)","r(hu)","~(hu)","eF(un,O,O,O,O,H{fx:n,key:n,rotation:O})","eF(n,O,H)","H(o5,o5)","R(z_)","R(n,ak<z_>)","a3<n,@>(o5)","nv()","Xq(X)","eF(n,O,O,O,O,O{align:pI,anim:hu,bullets:R,color:H?,delay:H,fx:n,key:n,style:GS,weight:q3})","a_D(X)","eF(n,O,O,O,O{anim:hu,delay:H,fx:n,key:n})","ax<~>(o5)","R(mf)","Xo(X)","a_b(X)","a_a(X)","Or(X)","Yz(X)","eF(un,O,O,O,O,H,n,n{anim:hu,delay:H,rotation:O,stroke:H,strokeWidth:O})","eF(n,O,O,O,O,O,n,n,H)","eF(O,O,n,H{size:O})","r(qY,O,O)","l2()","o5(a3<@,@>)","~(ud)","E_()","fd(eF)","r(iU)","Y7(X)","~(DQ)","Ys(X)","H(eF,eF)","eF(eF)","a3<n,@>(eF)","eF(a3<@,@>)","lv(lv)","a3<n,@>(lv)","lv(a3<@,@>)","R(jx)","jx()","n(hX)","~(ak<o5>)","Q(ak<hX>)","Q(hX)","ak<hX>(n?)","abl(X,H)","~(R(eF,eF))","abZ(X)","adD(X,H)","w(lv,R)","UF(X)","ac1(X)","UI(X)","~(mj)","hX(hX)","O(eF)","ZH(X)","Zj(X)","hX()","ak<El>()","ax<~>(ak<hX>)","r(bu<H,hX>)","C(jx)","C(E_)","ax<~>(hu,~())","r(ak<hu>,hu?,~(hu),w)","R(lT)","ak<jh<mj>>(X)","jh<mj>(mj)","hX(a3<@,@>)","US(X)","eF(n,O,O,O,O,O,H{align:pI,style:GS,weight:q3})","UT(X)","r(hX)","~(lN)","HU(X,lv,r?)","H(a7p)","ax<ak<a3<n,@>>?>()","n(n)","ax<yY>({paper:n?,photo:dB?,request:n,template!l5})","ax<a6F>({doc!yY,history:ak<+(n,n)>,instruction!n,photo:dB?,template!l5})","abW(X)"])
C.cBF.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cBG.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cBH.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gaib(s):16;--w.c}w.b=A.o.dS(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.m6(v,t)
w.b=v-A.o.dS(q,t)
w.a=t
return q},
$S:74}
C.cBI.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ai(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bMa.prototype={
$1(d){return J.eU(A.dE.gaP(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fiT.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iE(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iE(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iE(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iE(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bWo.prototype={
$1(d){return B.a0(d,x.N,x.z)},
$S:26}
C.bWp.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:42}
C.bWr.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fyC.prototype={
$1(d){return new C.a_D(this.a,this.b,C.hWU(),null)},
$S:z+36}
C.eYE.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eYI.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.eYJ.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eYK.prototype={
$0(){var w,v,u=this.a
u.r=!1
w=this.b
v=this.c.length
if(w===v){v=w===1?"":"s"
u.x="Saved "+w+" presentation"+v+" to the database."
u.y=!1
u.d.a8(0)
u.w=1}else if(w===0){u.x="Could not save. Check the connection and try again."
u.y=!0}else{u.x="Saved "+w+" of "+v+". Try the rest again."
u.y=!0}},
$S:0}
C.eYF.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eYG.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eYH.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eYz.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hy,w,w,w)
return B.eh(B.a([B.bK(!1,D.f7R,w,w,!0,w,w,new C.eYx(d),w,w),B.bK(!1,D.f6Y,w,w,!0,w,w,new C.eYy(d),w,w)],x.p),w,w,D.W5,v,w,w,w,w,D.fll,w)},
$S:19}
C.eYx.prototype={
$0(){B.a4(this.a,!1).N(!1)
return null},
$S:0}
C.eYy.prototype={
$0(){B.a4(this.a,!1).N(!0)
return null},
$S:0}
C.eYA.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eYB.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eYO.prototype={
$0(){var w=this.a
return w.m(new C.eYN(w,this.b))},
$S:0}
C.eYN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eYD.prototype={
$0(){var w=this.a
return w.m(new C.eYC(w,this.b,this.c))},
$S:0}
C.eYC.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.eYL.prototype={
$0(){return this.a.a_K(this.b)},
$S:0}
C.eYM.prototype={
$0(){return this.a.O3(0,this.b)},
$S:0}
C.eYR.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.eYS.prototype={
$0(){var w=this.a
return w.m(new C.eYQ(w,this.b))},
$S:0}
C.eYQ.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.eYP(),B.T(w).k("J<1,n>")))}},
$S:0}
C.eYP.prototype={
$1(d){return d.a},
$S:z+67}
C.f4R.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a0(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fY7(w.b(t.h(0,"doc"))?B.a0(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.o5(s,v,u==null?new B.Q(Date.now(),0,!1):u)},
$S:z+50}
C.f4S.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.flk.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcu()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fli.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.flj.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fy6.prototype={
$1(d){return d.ad()},
$S:z+32}
C.fiz.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fyY.prototype={
$1(d){return new C.Xq(this.a,null)},
$S:z+34}
C.cD0.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cD2.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cD5.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cD6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cD4())},
$S:11}
C.cD4.prototype={
$0(){},
$S:0}
C.cD7.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a0C(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.be(s,new C.cD3(r))
if(p<0)q.cm(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ag3(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:292}
C.cD3.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cD8.prototype={
$1(d){},
$S:30}
C.cD1.prototype={
$1(d){return new C.Xo(this.b,this.a.gcr5(),null)},
$S:z+40}
C.cD9.prototype={
$1(d){return D.fxO},
$S:z+43}
C.cCX.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.VN,A.r,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bpu,B.v(B.a([B.p(w,D.bBZ,A.f,w,w,new B.o(A.aE.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.f63,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eVs,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e_,new B.C(A.po,B.A(B.a([B.D(B.dW(D.fcB,new C.cCV(d),B.dd(w,w,w,w,w,w,w,w,w,E.mH,w,w,A.ce,w,new B.b7(B.m(14),A.Y),D.aUE,w,w,w,w)),1),A.aw,B.D(B.bJ(D.fid,new C.cCW(d),B.bk(A.bL,w,w,w,w,w,A.ce,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wg,new B.o(D.aaV,w,u,v,D.cNV,w,A.n),w,w,w,K.Xv,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ae),w,w,w)},
$S:1668}
C.cCV.prototype={
$0(){B.a4(this.a,!1).N(!1)
return null},
$S:0}
C.cCW.prototype={
$0(){B.a4(this.a,!1).N(!0)
return null},
$S:0}
C.cCY.prototype={
$0(){return J.nc(this.a.d,new C.cCU(this.b))},
$S:0}
C.cCU.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cCT.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.VN,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bGQ,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.am6,A.n),t,44,t,t,t,t,t,44),A.bd,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aO6,t,t,t),A.bB,D.fia],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.az],q)
for(w=0;w<2;++w){v={}
u=D.d79[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.avZ(u[1],u[2],u[3],new C.cCR(v,d),!1,t))}q.push(A.ao)
q.push(D.bjA)
q.push(A.ao)
q.push(new C.avZ(A.ea,"Delete book","Remove it from this device",new C.cCS(d),!0,t))
return B.bq(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.aaV,t,r,s,t,t,A.n),t,t,t,A.tb,E.X9,t,t,t),!0,!1,A.ah,!0,!0)},
$S:32}
C.cCR.prototype={
$0(){var w=this.a.a
B.a4(this.b,!1).N(w)
return null},
$S:0}
C.cCS.prototype={
$0(){B.a4(this.a,!1).N("delete")
return null},
$S:0}
C.cD_.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aE6,12)],x.V)
return B.dT(B.eA(A.A,e,B.p(w,B.bv(B.m(4),new B.a5(62,95.81818181818181,B.f4(A.A,F.amC(d),A.f,A.dt),w),A.ap),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cCZ.prototype={
$0(){return this.a.bZD()},
$S:0}
C.cCQ.prototype={
$0(){return this.a.aVo(0,this.b)},
$S:0}
C.cCP.prototype={
$0(){return this.a.Ct(this.b)},
$S:0}
C.cCO.prototype={
$0(){return this.a.Ct(this.b)},
$S:0}
C.cDa.prototype={
$2(d,e){var w=this.a
return w.byx(J.q(w.d,e))},
$S:40}
C.cCh.prototype={
$0(){var w=this.a
if(w.c!=null)w.A7()},
$S:0}
C.cCg.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aYb("Page "+(v.length+1),"",""))},
$S:0}
C.cCj.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cCr.prototype={
$0(){},
$S:0}
C.cCs.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:8}
C.cCk.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gct().aI(this.c)},
$S:0}
C.cCi.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cCm.prototype={
$0(){return this.a.Pi(this.b)},
$S:0}
C.cCn.prototype={
$0(){return this.a.Pi(this.b)},
$S:0}
C.cCo.prototype={
$0(){var w=this.a
w.m(new C.cCl(this.b))
w.Di()},
$S:0}
C.cCl.prototype={
$0(){return this.a.c=""},
$S:0}
C.cCq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cCp(w,d))
w.Di()},
$S:z+51}
C.cCp.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cCx.prototype={
$2(d,e){if(d)this.a.A7()},
$S:120}
C.cCt.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.A7(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.eJh)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cCu.prototype={
$0(){return this.a.aUn(this.b,-1)},
$S:0}
C.cCv.prototype={
$0(){return this.a.aUn(this.b,1)},
$S:0}
C.cCw.prototype={
$0(){return this.a.c_S(0,this.b)},
$S:0}
C.fpS.prototype={
$1(d){return C.h72()},
$S:43}
C.fpT.prototype={
$1(d){return null},
$S:30}
C.f9e.prototype={
$1(d){return null},
$S:30}
C.fqR.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:274}
C.fqQ.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:268}
C.fqX.prototype={
$1(d){var w=this.a
return C.fQI(d)===w||C.hbw(d)===w},
$S:z+4}
C.f8h.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:76}
C.c69.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpQ.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fpR.prototype={
$1(d){return C.fsA(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fkG.prototype={
$1(d){var w=null
return B.bq(!0,new B.C(E.x7,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b8,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fda,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FE,D.f7y,new C.fkE(d),B.bk(A.bU,w,w,w,A.w,w,A.ce,w,w,w,w,w)),A.S,B.ez(A.vg,D.feo,new C.fkF(d),B.dd(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ce,w,w,P.wd,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:32}
C.fkE.prototype={
$0(){B.a4(this.a,!1).N("continue")
return null},
$S:0}
C.fkF.prototype={
$0(){B.a4(this.a,!1).N("new")
return null},
$S:0}
C.fkH.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,D.f3Z,w,w,!0,w,w,new C.fkC(d),w,w),B.bJ(D.fko,new C.fkD(d),w)],x.p),w,w,w,D.fme,w,w,w,w,D.f3T,w)},
$S:19}
C.fkC.prototype={
$0(){B.a4(this.a,!1).N(!1)
return null},
$S:0}
C.fkD.prototype={
$0(){B.a4(this.a,!1).N(!0)
return null},
$S:0}
C.e1J.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e1H.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e1I.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e1K.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e1L.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fqW.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:76}
C.fqS.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.D9(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fqU.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eWD,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:197}
C.fqV.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hT,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dT(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hT,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b9,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fqT.prototype={
$2$female$size(d,e){var w=null,v=d?D.acz:this.a,u=B.I(A.hT,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.q,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ab8,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fCp.prototype={
$1(d){return new C.abW(this.a,this.b,null)},
$S:z+108}
C.dU7.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bgG:A.Kd,q=B.I(D.iZ.j(0.25),A.r,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bU.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.akR,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.iZ.j(0.35),A.ej,10)],x.V),D.bPx,A.n),t,t,t,t,A.L0,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.Xk,B.v(B.a([p,A.az,B.A(B.a([o,A.bd,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iZ,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eVV,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ib(!0,t,e,A.y,D.aLy,new C.dU6(w,this.c),v,D.afK,t,A.ai,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.lR,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:111}
C.dU6.prototype={
$2(d,e){var w=this.a.d[e]
return new C.abl(w,new C.dU5(this.b,w),null)},
$S:z+72}
C.dU5.prototype={
$0(){B.a4(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fkK.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fkL.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.x7,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b8,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fgp,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FE,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fkI(d),B.bk(D.iZ,w,w,w,A.c,w,A.ce,w,w,w,w,w)),A.S,B.ez(A.nI,D.SK,new C.fkJ(d),B.dd(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ce,w,w,P.wd,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:32}
C.fkI.prototype={
$0(){B.a4(this.a,!1).N("continue")
return null},
$S:0}
C.fkJ.prototype={
$0(){B.a4(this.a,!1).N("new")
return null},
$S:0}
C.fkO.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fkP.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.x7,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b8,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f4X,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FE,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fkM(d),B.bk(D.iZ,w,w,w,A.c,w,A.ce,w,w,w,w,w)),A.S,B.ez(A.nI,D.SK,new C.fkN(d),B.dd(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ce,w,w,P.wd,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:32}
C.fkM.prototype={
$0(){B.a4(this.a,!1).N("continue")
return null},
$S:0}
C.fkN.prototype={
$0(){B.a4(this.a,!1).N("new")
return null},
$S:0}
C.fkS.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fkT.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.x7,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b8,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fb2,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FE,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fkQ(d),B.bk(D.iZ,w,w,w,A.c,w,A.ce,w,w,w,w,w)),A.S,B.ez(A.nI,D.SK,new C.fkR(d),B.dd(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ce,w,w,P.wd,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:32}
C.fkQ.prototype={
$0(){B.a4(this.a,!1).N("continue")
return null},
$S:0}
C.fkR.prototype={
$0(){B.a4(this.a,!1).N("new")
return null},
$S:0}
C.fDS.prototype={
$1(d){return D.fBu},
$S:z+74}
C.e6Y.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b8Z:A.Kd,s=B.I(A.av.j(0.25),A.r,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.av.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bJ6,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.bU.j(0.35),A.ej,10)],x.V),D.amb,A.n),v,v,v,v,A.L0,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.Xk,B.v(B.a([r,A.az,B.A(B.a([q,A.bd,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.Ka,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eTt,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ib(!0,v,e,A.y,D.aLy,new C.e6X(this.b),19,D.afK,v,A.ai,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.lR,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:111}
C.e6X.prototype={
$2(d,e){var w=D.Pw[e]
return new C.adD(w,new C.e6W(this.a,w),null)},
$S:z+75}
C.e6W.prototype={
$0(){B.a4(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fsE.prototype={
$0(){return B.fPH(C.hKu(this.a))},
$S:338}
C.fsD.prototype={
$0(){var w=C.fR_(this.a)
return"data:image/png;base64,"+A.cS.gct().aI(w)},
$S:22}
C.f6n.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j7(d,e),new B.j7(w,e+v),new B.j7(d+f*14,e),new B.j7(w,e-v)],x.J)
B.a0z(this.a,C.fx(4291404327),v)},
$S:681}
C.fE2.prototype={
$1(d){return new C.UF(this.a,null)},
$S:z+77}
C.eaf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eae())},
$S:27}
C.eae.prototype={
$0(){},
$S:0}
C.eag.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ead(w,d))},
$S:1673}
C.ead.prototype={
$0(){return this.a.x=J.fa(A.dE.gaP(this.b))},
$S:0}
C.eah.prototype={
$1(d){},
$S:30}
C.e9S.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e9O.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e9Z.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ea_.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eaz)},
$S:0}
C.ea0.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e9U.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bM(0,A.c3)},
$S:0}
C.e9V.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.e9W.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.e9X.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e9Y.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcX(v).Q
v.toString
w.lQ(v,A.dW,A.i6)}},
$S:8}
C.e9T.prototype={
$0(){var w=this.a,v=w.z,u=C.fth(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cBU(C.fth(t))},
$S:0}
C.e9Q.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e9R.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ea6.prototype={
$0(){return B.a4(this.a,!1).mn()},
$S:0}
C.ea7.prototype={
$0(){var w=this.a
return w.m(new C.ea5(w))},
$S:0}
C.ea5.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ea8.prototype={
$0(){var w=this.a
return w.m(new C.ea4(w,this.b))},
$S:0}
C.ea4.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.ea9.prototype={
$1(d){var w=this.a
return w.m(new C.ea3(w))},
$S:9}
C.ea3.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eaa.prototype={
$1(d){var w=this.a
return w.m(new C.ea2(w))},
$S:9}
C.ea2.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eab.prototype={
$0(){var w=this.a
return w.m(new C.ea1(w,this.b))},
$S:0}
C.ea1.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.eac.prototype={
$1(d){return this.a.Yr()},
$S:2}
C.e9P.prototype={
$0(){return this.a.c2U(this.b)},
$S:0}
C.c9P.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:453}
C.c9N.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c9O.prototype={
$1(d){return d.length!==0},
$S:3}
C.fse.prototype={
bhu(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bM9(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cyA($.tL().k7(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mm(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bhu(d,e)},
$S:1674}
C.fqw.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqy.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.dl(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:76}
C.fqx.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ih(t,t,t,t,B.dn(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.pX,A.ci,t,A.eq,A.cg)
v=this.a
w.Bd(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:31}
C.f5Z.prototype={
$1(d){var w=A.a.fu(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a1(w,new C.f6_(),B.T(w).k("a1<1>")).gM(0)},
$S:246}
C.f6_.prototype={
$1(d){return d.length!==0},
$S:3}
C.f5X.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.f5Y.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.c9Q.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gay_()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.fQH(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fNE(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcaZ(),"\n\n")
d=B.ih(a6,a6,a6,a6,B.dn(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.acn(k,q,1.28),j),A.pX,A.ci,a6,A.eq,A.cg)
d.Bd(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fQH(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bi,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fNE(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.acn(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.N(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bG(1,A.bo,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.pX,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.axZ(s,j))
i.push(new B.a5(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:427}
C.c9R.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.g,a7=a9.b
a7=isFinite(a7)?a7:824
w=a9.d
w=isFinite(w)?w:700
v=a4.b
u=(a7-v-44)/2
t=a4.c
s=t-1
r=(a7-22*s)/t
q=a4.d
p=w-q-12
o=a4.a
n=o.gay_()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.fQH(f,new B.F(!0,e,a5,i,a5,a5,h,A.cN,A.bi,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fNE(g.length===0?B.a([a6],n):g,l))break}a1=o.acn(i,h,1.28)
a2=new C.c9S(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.HU,new B.a5(v,a5,a4.f,a5),A.HU,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.brL,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bG(1,A.bo,new B.x(l[2+a3],a5,a1,a5,A.pX,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.axZ(r,g))
f.push(new B.a5(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a5(a5,q,v,a5),A.ac,B.D(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:152}
C.c9S.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.pX,w,w),w)},
$S:1675}
C.fE5.prototype={
$1(d){return new C.UI(this.a,this.b,null)},
$S:z+79}
C.ebq.prototype={
$1(d){return d.m3()},
$S:1676}
C.ebr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ebp(w,d))},
$S:1677}
C.ebp.prototype={
$0(){var w=this.b
return this.a.d=w.gfk(w)},
$S:0}
C.ebd.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ebe.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ebk.prototype={
$0(){return B.a4(this.a,!1).eF()},
$S:0}
C.ebl.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.r,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.b9Q(u,v.gav8(),w),A.eT),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ebi(v),new C.ebj(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a9)},
$S:35}
C.ebi.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:252}
C.ebj.prototype={
$1(d){var w=this.a
w.m(new C.ebf(w,d,this.b,this.c))},
$S:223}
C.ebf.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gav8()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ebm.prototype={
$1(d){var w=this.a
return w.m(new C.ebh(w,this.b))},
$S:9}
C.ebh.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ebn.prototype={
$1(d){var w=this.a
return w.m(new C.ebg(w,d))},
$S:6}
C.ebg.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ebo.prototype={
$0(){return B.a4(this.b,!1).N(this.a.a.c)},
$S:0}
C.fEl.prototype={
$1(d){return D.fEh},
$S:z+83}
C.eKC.prototype={
$1(d){return this.a.Xa()},
$S:8}
C.eJu.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gct().aI(v)},
$S:0}
C.eJS.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eK1.prototype={
$1(d){return d>=this.a.length},
$S:31}
C.eJd.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eJe.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eJb.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eJc.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eJL.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eJM(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jp(B.rc(p>0.2?C.fIv(q,B.a3R(p,p,A.x)):q),A.q,u)],x.p)
w=s.bi
if(w>0.02){v=B.a3R(12,12,A.x)
p.push(B.jp(B.db(B.rc(C.fIv(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b3
if(r!=null&&s.b0>0)p.push(B.ei(u,B.b0(r).j(s.b0),!0))
r=s.ba
if(r!=null&&s.bJ>0){r=B.b0(r).j(s.bJ)
w=s.ba
w.toString
p.push(B.bX(u,new B.o(u,u,u,u,u,new B.bR(D.aSW,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.be))}r=s.aE
if(r>0)p.push(B.bX(u,new B.o(u,u,u,u,u,new B.bR(D.aSH,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.be))
r=s.aO
if(r>0)p.push(B.bX(u,new B.o(u,u,u,u,u,new B.a6(A.b0,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aO)],x.O),D.cMA,u),A.n),A.be))
if(s.aF>0){r=s.k1
p.push(B.ao(u,B.bX(u,new B.o(u,u,u,u,u,new B.a6(A.b0,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aF),A.w.j(s.aF),A.w.j(0)],x.O),D.cWQ,u),A.n),A.be),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ei(u,A.w.j(r),!0))
r=s.b5
if(r>0)p.push(B.bX(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cU9,u),A.n),A.be))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.bdm(s,u),A.at))
return new B.an(A.W,u,A.b_,A.q,p,u)},
$S:64}
C.eJM.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fK(r.b,A.A,q,q,A.cn,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aU_(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c5,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bj
v=o.aR
u=v-1
t=o.bR
s=o.cR?-1:1
return B.dT(B.e9(A.A,B.eA(A.A,l,B.fr(A.A,new B.CJ(new B.yo(q,q,n,A.zH),p,q),q,B.vo(s,o.cU?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:548}
C.eJY.prototype={
$0(){return this.a.m(new C.eJX(this.b,this.c))},
$S:0}
C.eJX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eJZ.prototype={
$1(d){return this.a.m(new C.eJW(this.b,d))},
$S:6}
C.eJW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eK0.prototype={
$0(){return this.a.m(new C.eK_(this.b,this.c))},
$S:0}
C.eK_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eJ3.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eJ4.prototype={
$1(d){var w=this.a
return w.m(w.gcsu())},
$S:2}
C.eJ5.prototype={
$1(d){return this.a.m(new C.eJ2())},
$S:2}
C.eJ2.prototype={
$0(){},
$S:0}
C.eJ6.prototype={
$0(){var w=this.a
return w.m(new C.eJ1(w,this.b))},
$S:0}
C.eJ1.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eJ8.prototype={
$2(d,e){return A.aw},
$S:36}
C.eJ7.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.r,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bb,new B.o(w,w,q,s,w,new B.a6(A.b0,A.b5,A.x,r,w,w),A.n),A.hV,w,94,w,w,w,w,70)
return B.aE(w,new B.a5(70,w,B.v(B.a([r,A.fV,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.ay,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eJ0(u,v),w,w,w,w,w,w,!1,A.a9)},
$S:78}
C.eJ0.prototype={
$0(){var w=this.a
return w.m(new C.eIY(w,this.b))},
$S:0}
C.eIY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eJ9.prototype={
$1(d){var w=this.a
return w.m(new C.eJ_(w,d))},
$S:9}
C.eJ_.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eJa.prototype={
$1(d){var w=this.a
return w.m(new C.eIZ(w,d))},
$S:9}
C.eIZ.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eKr.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gK(this.b)]},
$S:31}
C.eKy.prototype={
$1(d){var w=this.a
return w.m(new C.eKz(w,d))},
$S:28}
C.eKz.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eKA.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:258}
C.eKs.prototype={
$0(){var w=this.a
return w.m(new C.eKq(w,this.b))},
$S:0}
C.eKq.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.eKt.prototype={
$0(){var w=this.a
return w.m(new C.eKp(w,this.b))},
$S:0}
C.eKp.prototype={
$0(){var w,v=this.b.length,u=J.e0(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eKu.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eKo(v,w.b,w.c,w.d))},
$S:0}
C.eKo.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eKv.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gr4(v))},
$S:0}
C.eKw.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eKx.prototype={
$0(){var w=this.a
return w.m(new C.eKn(w))},
$S:0}
C.eKn.prototype={
$0(){var w=this.a.db
return A.d.hm(w,0,w.length,0)},
$S:0}
C.eKa.prototype={
$1(d){return d.a===this.a.dy},
$S:226}
C.eKb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aua[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aV(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.avc(new B.nU(new B.bs(n,n,n,n),A.ap,new B.kF(new B.o(j,j,j,j,j,new B.a6(A.a3,A.a7,A.x,m,j,j),A.n),A.be,new C.aY9(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eK9(r,v),2,i))}return B.c4(A.bE,h,A.bx,7,7)},
$S:164}
C.eK9.prototype={
$0(){var w=this.b
return w.m(new C.eK4(this.a,w))},
$S:0}
C.eK4.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eKc.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:261}
C.eKf.prototype={
$0(){var w=this.a
return w.m(new C.eK8(w))},
$S:0}
C.eK8.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eKg.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eKh.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eKi.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eKj.prototype={
$0(){var w=this.a
return w.m(new C.eK7(w))},
$S:0}
C.eK7.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eKk.prototype={
$0(){var w=this.a
return w.m(new C.eK6(w))},
$S:0}
C.eK6.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eKl.prototype={
$0(){var w=this.b
return w.m(new C.eK5(this.a,w))},
$S:0}
C.eK5.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eKm.prototype={
$1(d){return this.a.fx=d},
$S:261}
C.eKd.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eKe.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eJP.prototype={
$0(){var w=this.a
return w.m(new C.eJO(w))},
$S:0}
C.eJO.prototype={
$0(){var w=this.a
w.p4=null
w.b_V()},
$S:0}
C.eJQ.prototype={
$0(){var w=this.a
return w.m(new C.eJN(w,this.b))},
$S:0}
C.eJN.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eJR.prototype={
$0(){var w=this.a
return w.m(w.gcjf())},
$S:0}
C.eJH.prototype={
$0(){var w=this.a
return w.m(new C.eJG(w))},
$S:0}
C.eJG.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eJI.prototype={
$0(){var w=this.a
return w.m(new C.eJF(w))},
$S:0}
C.eJF.prototype={
$0(){var w=this.a
w.aF=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eJJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cUv[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aV(9,9)
m.push(v.avc(new B.nU(new B.bs(p,p,p,p),A.ap,new B.a5(1/0,1/0,new B.CJ(new B.yo(o,o,v.aU_(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.zH),B.fK(u,A.A,140,o,A.cn,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eJE(v,s),3,n))}return B.c4(A.bE,m,A.bx,10,8)},
$S:164}
C.eJE.prototype={
$0(){var w=this.a
return w.m(new C.eJD(w,this.b))},
$S:0}
C.eJD.prototype={
$0(){var w=this.a,v=this.b
w.RG=v.b
w.rx=v.c
w.ry=v.d
w.to=v.e
w.x1=v.f
w.xr=v.r
w.R8=w.x2=0
w.y1=!1
return null},
$S:0}
C.eJl.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eJm.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eJn.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eJo.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eJp.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eJq.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eJr.prototype={
$1(d){return this.a.b5=d},
$S:6}
C.eJs.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eJt.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eIH.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eII.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eIJ.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eIK.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eIL.prototype={
$0(){var w=this.a
return w.m(new C.eIG(w))},
$S:0}
C.eIG.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eIM.prototype={
$1(d){return this.a.b3=d},
$S:261}
C.eIN.prototype={
$1(d){return this.a.b0=d},
$S:6}
C.eJf.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eJg.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eJh.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eJi.prototype={
$1(d){return this.a.ba=d},
$S:261}
C.eJj.prototype={
$1(d){return this.a.bJ=d},
$S:6}
C.eIR.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eIS.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eIT.prototype={
$1(d){return this.a.bR=d},
$S:6}
C.eIU.prototype={
$1(d){return this.a.c5=d},
$S:6}
C.eIV.prototype={
$0(){var w=this.a
return w.m(new C.eIQ(w))},
$S:0}
C.eIQ.prototype={
$0(){var w=this.a
return w.c5=A.k.F(w.c5+90+180,360)-180},
$S:0}
C.eIW.prototype={
$0(){var w=this.a
return w.m(new C.eIP(w))},
$S:0}
C.eIP.prototype={
$0(){var w=this.a
return w.cR=!w.cR},
$S:0}
C.eIX.prototype={
$0(){var w=this.a
return w.m(new C.eIO(w))},
$S:0}
C.eIO.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.eJK.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hZy(v,w.p4)},
$S:0}
C.eJC.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bgY:B.fK(v,A.A,w,w,A.cn,A.bQ,!1,w,!1,w,w)
return C.fqE(d.length===0?"rounded":d,u,e)},
$S:138}
C.eJy.prototype={
$0(){var w=this.a
return w.m(new C.eJx(w))},
$S:0}
C.eJx.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eJz.prototype={
$0(){var w=this.b
return w.m(new C.eJw(this.a,w))},
$S:0}
C.eJw.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eJA.prototype={
$0(){var w=this.b
return w.m(new C.eJv(this.a,w))},
$S:0}
C.eJv.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eJB.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eJV.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b3.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eq(n.ccT(),n.r))
l.push(new C.HU(n.cpB(),!1,!1,t))
o=B.bY(0,B.bv(o,new B.eq(new B.an(A.W,t,A.b_,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.q,B.a([o,B.ao(t,B.aE(A.c5,B.bX(t,new B.o(t,t,B.I(A.c.j(0.3),A.r,1),u,t,t,A.n),A.be),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eJU(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a9),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:213}
C.eJU.prototype={
$1(d){var w=this.a
return w.m(new C.eJT(w,d,this.b,this.c))},
$S:18}
C.eJT.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eK3.prototype={
$0(){var w=this.a
return w.m(new C.eK2(w,this.b))},
$S:0}
C.eK2.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eJk.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).mn()},
$S:0}
C.eKB.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.v(B.a([w.aWB(),B.D(B.av(w.aZx(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aNq(),1),w.aJG()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aWB(),new B.C(A.hF,B.av(s.aZx(u),t,t,t),t),B.D(s.aNq(),1),s.aJG()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:602}
C.fnU.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.em(k,!1,j,A.aB,"",4280640491,i,l,m,"",h,C.byb(),null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cf,D.cP,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bi,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bi,A.O)},
$S:z+98}
C.fnT.prototype={
$3(d,e,f){var w=this,v=C.byb(),u=w.b?A.I:A.cs,t=w.c?A.cD:A.bi
return C.em(w.d,!1,f,A.aB,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bf,4280172719,2,d,0,w.f,w.e,D.cf,D.cP,0.82,0.09,w.a)},
$S:z+28}
C.cbb.prototype={
$1(d){return B.t(d)},
$S:17}
C.fvB.prototype={
$0(){return this.a},
$S:z+15}
C.fcK.prototype={
$1(d){return d.a.cW(this.a)},
$S:z+30}
C.fcL.prototype={
$2(d,e){return J.ck(e)},
$S:z+31}
C.fvD.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fvG.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fvH.prototype={
$0(){return A.d.gK(D.vp)},
$S:z+33}
C.fvz.prototype={
$1(d){return d.a},
$S:z+16}
C.fvC.prototype={
$1(d){return d.a},
$S:z+16}
C.ftz.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.ftA.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftB.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fnY.prototype={
$0(){return C.cB()},
$S:22}
C.fo0.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cf,s=u?n:0
return C.em(j,l,v,A.aB,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bf,4280172719,2,d,s,0,"",t,D.cP,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,"","",A.bi,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,"",j,A.bi,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,j,k,A.bi,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bi,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bi,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dc,!1,k,l,"",m,A.bi,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bi,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,j,k,"",l,A.bi,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bi,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bi,A.a4)},
$S:z+35}
C.fo_.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.em(A.bg,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cf,D.eZ,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fnZ.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cf,t=v?j:0
return C.em(A.bg,!1,4279310375,A.aB,"",4280640491,24,A.bi,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.bf,4280172719,2,"",t,0,"",u,D.le,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pL,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fnX.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fqp.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.h84.cf(0,A.a.i(s.w).toLowerCase(),new C.fqn(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cf(0,s.r,new C.fqo(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bu(t.e,new B.bmc(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fqn.prototype={
$0(){return F.aM_(this.a.w)},
$S:185}
C.fqo.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bx5("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hy(2,w,A.c4,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:185}
C.f5U.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f5V.prototype={
$1(d){return d.a},
$S:z+18}
C.f5W.prototype={
$1(d){return d.b},
$S:z+19}
C.fEx.prototype={
$1(d){return D.fEx},
$S:z+41}
C.eQB.prototype={
$0(){return this.a.x=C.hCg(this.b,this.c.b)},
$S:0}
C.eQC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eQz.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:413}
C.eQA.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:413}
C.eQy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c_(A.aA,null,new C.eQt(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.pR,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b_(s,7)
if(r.length===0){n.m(new C.eQu(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hdN(o,m.cCH(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eQv(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eQt.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eQx(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b1_,A.f,p,p,D.aX6,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Bg:D.Bl,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fqE(v,i.b0w(h),u),p)))}t=B.lP(1,m,4,10,10,p,A.dP,!0)
if(!l)return B.bq(!0,new B.C(A8.Aq,t,p),!0,!1,A.ah,!0,!0)
s=new C.eQw(i,d)
m=B.aI(d,A.bS,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.FY[e]
l.push(s.$2(r.a,r.b))}return B.bq(!0,new B.cW(new B.aZ(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.f9w,A.S,t,A.e_,D.ezw,A.au,D.fjL,A.S,B.lP(1.15,l,3,10,10,p,A.dP,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.y,p,A8.Aq,p,p,A.ai),p),!0,!1,A.ah,!0,!0)},
$S:32}
C.eQx.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b3.j(0.22):A.c.j(0.04),s=v?A.bz:A.dq
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hu,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQs(this.b,d),w,w,w,w,w,w,!1,A.a9)},
$S:1682}
C.eQs.prototype={
$0(){B.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.eQw.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bF
r=B.I(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bv(w,d.length===0?B.p(v,D.all,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e2(new C.Mw(u.EP(d),!0,!1,v),!0,v),A.ap),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.au,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bJ:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eQr(this.b,d),v,v,v,v,v,v,!1,A.a9)},
$S:138}
C.eQr.prototype={
$0(){B.a4(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.eQu.prototype={
$0(){var w=this.a
return w.w=w.w.EP("")},
$S:0}
C.eQv.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eQh.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eQi.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eQk.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eQl.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eQm.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eQn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eQj(w,d))},
$S:2}
C.eQj.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eQo.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eQP.prototype={
$0(){return this.a.f.fD()},
$S:0}
C.eQQ.prototype={
$0(){var w=this.a
return w.m(new C.eQO(w))},
$S:0}
C.eQO.prototype={
$0(){return this.a.e=null},
$S:0}
C.eQR.prototype={
$0(){var w=this.a
return w.m(new C.eQN(w))},
$S:0}
C.eQN.prototype={
$0(){return this.a.x=null},
$S:0}
C.eQT.prototype={
$1(d){var w=this.a
return w.m(new C.eQM(w,d))},
$S:33}
C.eQM.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eQU.prototype={
$1(d){var w=this.a
return w.m(new C.eQL(w,d))},
$S:33}
C.eQL.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eQV.prototype={
$0(){var w=this.a
return w.m(new C.eQK(w))},
$S:0}
C.eQK.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eQW.prototype={
$1(d){var w=this.a
return w.m(new C.eQJ(w,d))},
$S:33}
C.eQJ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eQX.prototype={
$1(d){var w=this.a
return w.m(new C.eQI(w,d))},
$S:33}
C.eQI.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eQY.prototype={
$0(){var w=this.a
return w.m(new C.eQH(w))},
$S:0}
C.eQH.prototype={
$0(){var w=this.a
return w.w=w.w.EP("")},
$S:0}
C.eQZ.prototype={
$0(){var w=this.a
return w.m(new C.eQG(w,this.b))},
$S:0}
C.eQG.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eR_.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bK1(D.a1a[v]),null))
return B.c4(A.bE,t,A.bx,8,8)},
$S:164}
C.eQS.prototype={
$1(d){var w=this.a
return w.m(new C.eQF(w,d))},
$S:9}
C.eQF.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eQp.prototype={
$0(){var w=this.a
return w.m(new C.eQq(w,this.b,this.c))},
$S:0}
C.eQq.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.eQE.prototype={
$0(){var w=this.a
return w.m(new C.eQD(w,this.b))},
$S:0}
C.eQD.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fEw.prototype={
$1(d){return new C.a_a(this.a,this.b,null)},
$S:z+42}
C.eQa.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eQb.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eQc.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aDx?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eQd.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eQe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eQ9(w,d))},
$S:2}
C.eQ9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eQf.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eQg.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bM(0,new B.bb(w,B.h7(A.bt,w.length),A.aN))},
$S:0}
C.fc_.prototype={
$1(d){return d.a===this.a},
$S:226}
C.e6n.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gavd(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cGX:D.cWB
t=D.wM.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.r,v?1.8:1.2)
s=D.wM.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bY(0,B.b3(q,q,q,new C.bfy(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.bY(0,B.bMq(B.eA(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a6(A.a3,A.a7,A.x,B.a([A.K,D.b7v.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bv(s,new B.an(A.W,q,A.aa,A.q,B.a([n,o,B.av(B.v(B.a([B.V(p.a.c?A.ed:A.lB,D.wM,q,q,q,20),A.au,B.f4(A.A,B.nA(A.jf,D.f3n,new C.e6m()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f07,A.f,q,q,new B.o(D.wM,q,q,B.m(6),q,q,A.n),q,q,q,q,L.agn,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.f,q,q,new B.o(q,q,t,w,v,new B.a6(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:91}
C.e6m.prototype={
$1(d){return D.bNP.aw(0,d)},
$S:65}
C.fvI.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fvJ.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:226}
C.fvK.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fvL.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:13}
C.fvE.prototype={
$1(d){return d.a},
$S:z+18}
C.fvF.prototype={
$1(d){return d.b},
$S:z+19}
C.fDK.prototype={
$1(d){return new C.Yz(this.a,this.b,null)},
$S:z+44}
C.df7.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.df8.prototype={
$1(d){return d.a===this.a.gagA()},
$S:z+10}
C.df9.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dfc.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.dfd.prototype={
$0(){var w=this.a
return w.m(new C.dfb(w,this.b))},
$S:0}
C.dfb.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfe.prototype={
$1(d){var w=this.a
return w.m(new C.dfa(w,d))},
$S:9}
C.dfa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e6l.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.fn(w,this.a)
return B.da(w,0,B.dJ(e,"count",x.S),B.T(w).c).dC(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f2q.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.em(A.bg,!1,4279310375,A.aB,"",i,24,A.bi,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eZ,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cf,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f2s.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.em(A.L,!1,this.b.d,A.aB,"",4280640491,i,A.bi,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bf,4280172719,2,d,l,0,"",D.mm,D.cP,g,e,f)},
$S:z+46}
C.f2r.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.w1(0,"twinkle")
w=t===D.bf?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mm,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f2p.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fp5.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fp6.prototype={
$0(){return A.d.gK(D.G6)},
$S:z+49}
C.fp7.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f4p.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fva.prototype={
$1(d){var w=2450411,v=4281908728
C.dt(d,C.du(4280171146,1,0,D.bf,w,0,0.52,0,0))
C.dt(d,C.du(v,1,0,D.bf,w,0,0.04,0.48,0))
C.dt(d,C.du(4294047225,0.38,0,D.bf,w,0,0.48,0.52,0.62))
C.dt(d,C.du(v,0.006,0,D.fn,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fvb.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dt(d,C.du(4280172719,0.8,0,D.bf,w,0,0.36,0.58,0.1))
C.dt(d,C.du(v,0.64,0,D.bf,w,0,0.28,0.64,0.18))
C.dt(d,C.du(4282090230,0.44,0,D.bf,w,0,0.2,0.7,0.28))
C.dt(d,C.du(v,0.006,0,D.fn,v,3,0.22,0.08,0.12))
C.dt(d,C.du(u,0.004,0,D.fn,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fvc.prototype={
$1(d){var w=2450411,v=4279548070
C.dt(d,C.du(4279080072,0.11,0,D.bf,w,0,1,0,0))
C.dt(d,C.du(4279310375,0.11,0,D.bf,w,0,1,0,0.89))
C.dt(d,C.du(856528008,0.72,0,D.jx,w,0,0.28,0.72,0.14))
C.dt(d,C.du(1426953352,0.2,0,D.jx,w,0,0.2,0.78,0.22))
C.dt(d,C.du(v,0.004,0,D.fn,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fvn.prototype={
$1(d){var w=2450411
C.dt(d,C.du(4279203438,0.55,0,D.jx,w,0,0.5,0.55,-0.05))
C.dt(d,C.du(4280171146,0.5,0,D.jx,w,0,0.45,0.62,0.35))
C.dt(d,C.du(4280640491,0.4,0.3,D.jw,w,0,0.35,0.68,0.55))
C.dt(d,C.du(571438702,0.12,0,D.bf,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fvs.prototype={
$1(d){var w=4280472558
C.dt(d,C.du(4279310375,0.75,-0.4,D.jw,2450411,0,0.75,-0.15,0.35))
C.dt(d,C.du(w,0.55,0,D.bf,2450411,0,0.06,0.42,0.38))
C.dt(d,C.du(w,0.006,0,D.fn,w,3,0.35,0.08,0.08))
C.dt(d,C.du(2282478,0.12,0,D.bf,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fvt.prototype={
$1(d){var w=2450411,v=4280640491
C.dt(d,C.du(3423541034,0.48,0,D.bf,w,0,1,0,0))
C.dt(d,C.du(v,0.12,-0.08,D.jx,w,0,1.1,-0.05,0.38))
C.dt(d,C.du(858088427,0.35,0,D.bf,w,0,0.42,0.55,0.05))
C.dt(d,C.du(v,0.006,0,D.fn,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fvu.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cG0[w]
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eF("design_"+(""+1000*u+"_"+t),D.eZ,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,null,D.bf,v,4294967295,2,0,!1,"",0,D.cf,0,"","","","","",!1,0)
u=$.JA
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cm(d.z,0,v)}C.dt(d,C.du(s,0.006,0,D.fn,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fvv.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.m0,A.dx,w/3).l()
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eF("design_"+(""+1000*u+"_"+t),D.eZ,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,null,D.BV,v,2450411,0,0,!1,"",0,D.cf,0,"","","","","",!1,0)
u=$.JA
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cm(d.z,0,v)}C.dt(d,C.du(s,0.006,0,D.fn,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fvw.prototype={
$1(d){var w=4294967295
C.dt(d,C.du(4280640491,1,0,D.bf,2450411,0,0.42,0,0))
C.dt(d,C.du(4280110808,1.1,1.57,D.jw,2450411,0,0.18,0.35,-0.05))
C.dt(d,C.du(w,0.006,0,D.fn,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fvx.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dt(d,C.du(w,0.1,0,D.bf,v,0,1,0,0))
C.dt(d,C.du(u,0.012,0,D.bf,v,0,1,0,0.1))
C.dt(d,C.du(u,0.006,0,D.fn,u,3,0.42,0.06,0.14))
C.dt(d,C.du(403446057,0.68,0,D.jx,v,0,0.22,0.72,0.18))
C.dt(d,C.du(w,0.1,0,D.bf,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fvy.prototype={
$1(d){var w=4278630100
C.dt(d,C.du(4279310375,1.2,0.15,D.jx,2450411,0,0.55,-0.2,-0.1))
C.dt(d,C.du(w,1.1,0.15,D.bf,2450411,0,0.08,0.15,-0.05))
C.dt(d,C.du(1120295,0.18,0,D.bf,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fvd.prototype={
$1(d){var w=4292617766
C.dt(d,C.du(4282714634,0.65,-0.2,D.jw,2450411,0,0.65,-0.1,0.45))
C.dt(d,C.du(w,0.5,-0.15,D.jw,2450411,0,0.5,0.05,0.55))
C.dt(d,C.du(w,0.006,0,D.fn,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fve.prototype={
$1(d){var w=2450411
C.dt(d,C.du(4278413729,0.35,3.14,D.jw,w,0,0.45,-0.05,0.7))
C.dt(d,C.du(4278355143,0.3,3.14,D.jw,w,0,0.4,0.25,0.75))
C.dt(d,C.du(4279150057,0.32,3.14,D.jw,w,0,0.5,0.55,0.72))
C.dt(d,C.du(863884284,0.22,0,D.eI,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fvf.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dt(d,C.du(w,0.14,0,D.bf,v,0,0.14,0.02,0.02))
C.dt(d,C.du(2282478,0.14,0,D.bf,u,3,0.14,0.84,0.02))
C.dt(d,C.du(w,0.28,0,D.jx,v,0,0.35,-0.08,0.78))
C.dt(d,C.du(u,0.22,0.5,D.jw,v,0,0.3,0.72,0.78))
C.dt(d,C.du(w,0.006,0,D.fn,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fvg.prototype={
$1(d){var w=4293571336,v=1156231944
C.dt(d,C.du(1841431,0.92,0,D.bf,w,3,0.92,0.04,0.04))
C.dt(d,C.du(v,0.15,0,D.jw,2450411,0,0.15,0.02,0.02))
C.dt(d,C.du(v,0.15,3.14,D.jw,2450411,0,0.15,0.83,0.83))
C.dt(d,C.du(w,0.004,0,D.fn,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fvh.prototype={
$1(d){var w=4279080072,v=2450411
C.dt(d,C.du(w,0.14,0,D.kN,v,0,0.14,0.68,0.18))
C.dt(d,C.du(4279548070,0.14,0,D.kN,v,0,0.14,0.78,0.28))
C.dt(d,C.du(4281193663,0.14,0,D.kN,v,0,0.14,0.68,0.38))
C.dt(d,C.du(4284410580,0.14,0,D.kN,v,0,0.14,0.78,0.48))
C.dt(d,C.du(4279203438,0.14,0,D.kN,v,0,0.14,0.68,0.58))
C.dt(d,C.du(w,0.006,0,D.fn,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fvi.prototype={
$1(d){var w=2450411,v=4280640491
C.dt(d,C.du(3708753706,0.42,0,D.bf,w,0,1,0,0))
C.dt(d,C.du(v,0.06,-0.05,D.jx,w,0,1,0,0.38))
C.dt(d,C.du(859356664,0.25,0,D.eI,w,0,0.25,0.7,0.08))
C.dt(d,C.du(v,0.006,0,D.fn,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fvj.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.m0,A.dx,w/3).l()
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eF("design_"+(""+1000*u+"_"+t),D.eZ,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,null,D.BV,v,2450411,0,0,!1,"",0,D.cf,0,"","","","","",!1,0)
u=$.JA
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cm(d.z,0,v)}C.dt(d,C.du(4280172719,0.08,0,D.bf,2450411,0,1,0,0))
C.dt(d,C.du(s,0.006,0,D.fn,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fvk.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iW
$.iW=u+1
u=new C.eF("design_"+(""+1000*v+"_"+u),D.eZ,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bi,A.aB,s,A.bg,null,D.fn,t,t,0,0,!1,"",0,D.cf,0,"","","","","",!1,0)
v=$.JA
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cm(d.z,0,u)}C.dt(d,C.du(s,0.75,0,D.bf,2450411,0,0.22,0.72,0.1))
C.dt(d,C.du(872415231,0.16,0,D.bf,2450411,0,0.16,0.75,0.15))
C.dt(d,C.du(s,0.006,0,D.fn,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fvl.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dt(d,C.du(4674921,0.9,0,D.bf,4287931320,2,0.9,0.05,0.05))
C.dt(d,C.du(w,0.08,0,D.bf,v,0,0.08,0.03,0.03))
C.dt(d,C.du(u,0.08,0,D.bf,v,0,0.08,0.89,0.03))
C.dt(d,C.du(u,0.08,0,D.bf,v,0,0.08,0.03,0.89))
C.dt(d,C.du(w,0.08,0,D.bf,v,0,0.08,0.89,0.89))
C.dt(d,C.du(w,0.004,0,D.fn,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fvm.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iW
$.iW=t+1
t=new C.eF("design_"+(""+1000*u+"_"+t),D.eZ,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bi,A.aB,r,A.bg,null,D.bf,4294967295,4280640491,2,0,!1,"",0,D.cf,0,"","","","","",!1,0)
u=$.JA
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cm(d.z,0,t)
u=B.aq(A.dp,A.cx,w/2).l()
t=Date.now()
s=$.iW
$.iW=s+1
u=new C.eF("design_"+(""+1000*t+"_"+s),D.eZ,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bi,A.aB,r,A.bg,null,D.bf,u,q,0,0,!1,"",0,D.cf,0,"","","","","",!1,0)
v=$.JA
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cm(d.z,0,u)}C.dt(d,C.du(4280171146,1,0,D.bf,q,0,0.48,0,0))
C.dt(d,C.du(4280172719,1.1,1.57,D.jw,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fvo.prototype={
$1(d){var w=2450411
C.dt(d,C.du(870995980,0.55,0.45,D.jx,w,0,0.55,-0.12,-0.08))
C.dt(d,C.du(856996006,0.45,0.45,D.jx,w,0,0.45,0.62,-0.05))
C.dt(d,C.du(16777215,0.38,0.45,D.jx,4293548044,5,0.38,0.52,0.12))
C.dt(d,C.du(585783308,0.3,0.45,D.jx,w,0,0.3,0.56,0.16))
C.dt(d,C.du(4279548070,0.06,0,D.bf,w,0,0.16,0.38,0.04))
C.dt(d,C.du(1156208652,0.28,0,D.eI,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fvp.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dt(d,C.du(w,1,0,D.bf,v,0,0.07,0,0))
C.dt(d,C.du(u,0.1,0,D.bf,t,1,0.46,0.48,0.14))
C.dt(d,C.du(u,0.1,0,D.bf,t,1,0.46,0.48,0.28))
C.dt(d,C.du(u,0.1,0,D.bf,t,1,0.46,0.48,0.42))
C.dt(d,C.du(s,0.08,0,D.eI,v,0,0.08,0.5,0.16))
C.dt(d,C.du(w,0.08,0,D.eI,v,0,0.08,0.5,0.3))
C.dt(d,C.du(4279548070,0.08,0,D.eI,v,0,0.08,0.5,0.44))
C.dt(d,C.du(16777215,0.32,0.45,D.jx,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fvq.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dt(d,C.du(4294047225,0.08,0,D.bf,t,2,0.1,0.02,0.06))
C.dt(d,C.du(s,0.42,0,D.bf,2450411,0,0.36,0.58,0.18))
C.dt(d,C.du(872415231,0.12,0,D.bf,2450411,0,0.28,0.62,0.24))
C.dt(d,C.du(16777215,0.28,0,D.eI,s,4,0.32,0,0.72))
C.dt(d,C.du(r,0.006,0,D.fn,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iW
$.iW=u+1
u=new C.eF("design_"+(""+1000*v+"_"+u),D.eZ,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bi,A.aB,4279310375,A.bg,null,D.eI,16777215,t,2,0,!1,"",0,D.cf,0,"","","","","",!1,0)
v=$.JA
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cm(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fvr.prototype={
$1(d){var w=2450411,v=4279548070
C.dt(d,C.du(3423541034,0.55,0,D.bf,w,0,1,0,0))
C.dt(d,C.du(4009754623,0.56,0.45,D.jx,w,0,0.56,0.22,0.18))
C.dt(d,C.du(3439329279,0.44,0.45,D.jx,w,0,0.44,0.28,0.24))
C.dt(d,C.du(v,0.07,0,D.bf,w,0,0.22,0.34,0.62))
C.dt(d,C.du(v,1,0,D.bf,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fmV.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fmW.prototype={
$0(){return A.d.gK($.bBN())},
$S:z+52}
C.fbN.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fbM.prototype={
$1(d){return C.hJs(d,this.a,this.b)},
$S:z+53}
C.fvR.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vo(1.0375,1.01875,1)
return new B.fN(v,u,new C.aQV(B.hzi(A.un,C.hJv(w.c,w.d,v,u),t)))},
$S:469}
C.dPS.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dPR.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bX(w,new B.o(w,w,w,w,w,new B.bR(A.IV,1.2,A.x,w,0,u.d,w,w),A.n),A.be),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jp(new B.an(A.W,w,A.b_,A.q,B.a([t,new B.eq(B.b3(w,w,w,new C.bcs(u.a,r,q,r),A.at),w),B.av(new B.k7(r,new C.dPQ(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:391}
C.dPQ.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gK(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hR(B.fK(i,A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),A.ap),A.f,r,r,new B.o(r,r,r,r,u,new B.fR(A.A,0,6.283185307179586,A.x,t,r,new B.m8(e*0.8)),A.a6),r,w,r,r,new B.N(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.boR(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cP(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dT(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a6(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaIe(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.db(B.e9(A.A,new B.C(new B.N(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:108}
C.ePo.prototype={
$1(d){var w=this.b
return new B.a6(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:65}
C.c5L.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bF
t=B.I(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hB.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.bv(B.m(12),d,A.ap),v,v,A.bb,new B.o(v,v,t,u,w,v,A.n),A.eD,v,72,v,v,v,v,v)
return B.aE(v,new B.a5(112,v,B.v(B.a([w,A.fV,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bJ:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a9)},
$S:1685}
C.c5M.prototype={
$0(){var w=this.a
return w.d.$1(w.c.EP(""))},
$S:0}
C.c5N.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e2(new C.Mw(v.EP(u),!0,!1,null),!0,null),d.b,new C.c5O(w,this.c,d),v.a===u)},
$S:z+54}
C.c5O.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hdN(u.b,t.c.EP(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fC9.prototype={
$1(d){return new C.Y7(this.a,null)},
$S:z+55}
C.d4m.prototype={
$0(){var w=this.a
w.d=w.gv8().b8j("data:"+this.b+";base64,"+A.cS.gct().aI(this.c));++w.r},
$S:0}
C.d4r.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.d4s.prototype={
$0(){var w=this.a
return w.m(new C.d4q(w))},
$S:0}
C.d4q.prototype={
$0(){return this.a.r++},
$S:0}
C.d4t.prototype={
$1(d){var w=this.a
return w.m(new C.d4p(w,d))},
$S:2}
C.d4p.prototype={
$0(){var w=this.a
return w.d=w.gv8().aBo(this.b)},
$S:0}
C.d4u.prototype={
$0(){var w=this.a
return w.m(new C.d4o(w))},
$S:0}
C.d4o.prototype={
$0(){var w=this.a
return w.d=w.gv8().b8j("")},
$S:0}
C.d4v.prototype={
$1(d){var w=this.a
return w.m(new C.d4n(w,d))},
$S:2}
C.d4n.prototype={
$0(){var w=this.a
return w.d=w.gv8().b8q(this.b)},
$S:0}
C.d4w.prototype={
$0(){var w=this.a
w=w.gv8().b8q(w.gavf().a.a)
B.a4(this.b,!1).N(w)
return null},
$S:0}
C.fC8.prototype={
$1(d){var w={}
w.a=this.a
return new B.e5(new C.fC7(w),null)},
$S:20}
C.fC7.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bq(!0,new B.cW(new B.aZ(0,1/0,0,B.aI(d,A.bS,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b8,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.az,D.fh1,A.au,D.fhh,A.az,new C.aY6(v.a,new C.fC6(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,w,w,w,A.ai),w),!0,!1,A.ah,!0,!1),A.f,w,w,D.aXE,w,w,w,w,A.L9,w,w,w)},
$S:200}
C.fC6.prototype={
$1(d){this.b.$1(new C.fC5(this.a,d))
B.a4(this.c,!1).N(d)},
$S:z+56}
C.fC5.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fEv.prototype={
$1(d){return D.fzY},
$S:z+57}
C.db7.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.db8.prototype={
$0(){var w=this.a.c
w.toString
B.a4(w,!1).N(this.b)
return null},
$S:0}
C.db9.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a4(w,!1).N(v)}},
$S:0}
C.fsx.prototype={
$1(d){var w=this.b
return new B.a6(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:65}
C.d43.prototype={
$3(d,e,f){var w,v=this,u=new B.aP($.W().r,A.aq,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cR(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cR(w,q+p,w,q+p*1.2))
u.E(new B.Cr(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aN(u,v.d)
s.aN(u,v.e)
p=B.L()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ag(new B.u(w,o),2.2,p)},
$S:682}
C.fsB.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fkW.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fkX.prototype={
$1(d){var w=null,v=this.a
return B.bq(!0,new B.C(E.x7,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b8,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f0n,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FE,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fkU(d),B.bk(A.bU,w,w,w,A.c,w,A.ce,w,w,w,w,w)),A.S,B.ez(A.nI,D.SK,new C.fkV(d),B.dd(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ce,w,w,P.wd,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ah,!0,!0)},
$S:32}
C.fkU.prototype={
$0(){B.a4(this.a,!1).N("continue")
return null},
$S:0}
C.fkV.prototype={
$0(){B.a4(this.a,!1).N("new")
return null},
$S:0}
C.cb9.prototype={
$1(d){return d.hw()},
$S:z+59}
C.cba.prototype={
$1(d){return d.ad()},
$S:z+60}
C.cb8.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a0(b5,x.N,x.z),b3=B.aN(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.O(b3)
if(b4==null)b4=A.a4.gdE(0)
b3=B.aN(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.O(b3)
if(w==null)w=0
b3=B.aN(b2.h(0,"align"))
v=b3==null?b1:A.k.O(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hFk(b2.h(0,"type"))
t=B.aN(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aN(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aN(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aN(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aN(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.avR[A.o.D(b4,0,8)]
m=D.cIK[A.o.D(w,0,1)]
l=C.hIW(b2.h(0,"decoration"))
k=B.aN(b2.h(0,"color"))
k=k==null?b1:A.k.O(k)
if(k==null)k=4279310375
j=A.asJ[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hLG(b2.h(0,"shape"))
g=B.aN(b2.h(0,"fillColor"))
g=g==null?b1:A.k.O(g)
if(g==null)g=4280640491
f=B.aN(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.O(f)
if(f==null)f=4280172719
e=B.aN(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aN(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.y(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aN(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.O(a2)
if(a2==null)a2=0
a3=C.h98(b2.h(0,"textTransition"))
a4=B.aN(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.k.O(a4)
if(a4==null)a4=0
a5=b2.h(0,"morphKey")
a5=J.k(a5==null?"":a5)
a6=b2.h(0,"loopFx")
a6=J.k(a6==null?"":a6)
a7=b2.h(0,"frame")
a7=J.k(a7==null?"":a7)
a8=b2.h(0,"ring")
a8=J.k(a8==null?"":a8)
a9=b2.h(0,"textFx")
a9=J.k(a9==null?"":a9)
b0=J.y(b2.h(0,"rich"),!0)
b2=B.aN(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.O(b2)
return C.em(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.caZ.prototype={
$1(d){return d.hw()},
$S:z+62}
C.cb_.prototype={
$1(d){return d.ad()},
$S:z+63}
C.caW.prototype={
$1(d){return B.t(d)},
$S:17}
C.caX.prototype={
$1(d){return B.t(d)},
$S:17}
C.caY.prototype={
$1(d){return C.h_T(B.a0(d,x.N,x.z))},
$S:z+64}
C.cbq.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cbr.prototype={
$0(){return A.d.gK(D.a0P)},
$S:z+66}
C.cbl.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c9(d.f))w.n(0,u,d.hw())},
$S:z+7}
C.cbk.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cbg.prototype={
$1(d){return new B.J(d,new C.cbh(),B.T(d).k("J<1,Q>")).fC(0,new C.cbi())},
$S:z+69}
C.cbh.prototype={
$1(d){return d.f},
$S:z+70}
C.cbi.prototype={
$2(d,e){return d.c9(e)?d:e},
$S:683}
C.cbj.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hv9(d)},
$S:z+71}
C.cbm.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cbn.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cbo.prototype={
$1(d){return d.ad()},
$S:z+14}
C.ft9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ah(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.ft5.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.ft6.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.ft7.prototype={
$2(d,e){var w
if(d.b===D.cP){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.ft8.prototype={
$2(d,e){return d.b===D.eZ&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cb4.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hUk(b2,b3),b5=B.a2(b4).k("bc<2>")
b5=B.cC(new B.bc(b4,b5),new C.cb3(),b5.k("G.E"),x.N)
w=B.d9(b5,B.a2(b5).k("G.E"))
b1=b1.e
v=A.ph.av(0,A.k.D(b1,0,1))
u=new C.cb5()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cb6(a9,b7.d)
r=new C.cb7(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jI.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kM(A.k.D(1-k,0,1),B.dT(B.e9(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
l=b4.h(0,i.a)
if(l!=null){n=l.c
h=i.c
g=l.d
f=i.d
e=l.e
d=i.e
a0=l.f
a1=i.f
a2=l.cx
a3=a2+(i.cx-a2)*v
a2=i.b
if(a2===D.eZ){a4=i.hw()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.le&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.q,B.a([new B.kM(A.k.D(o,0,1),r.$1(l),a8),new B.kM(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iC(B.vS(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cf)a7=D.mm
p.push(s.$5(i.c,i.d,i.e,i.f,C.hbl(a7,a6,r.$1(i))))}}return B.bX(new B.an(A.W,a8,A.aa,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a6(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.be)},
$S:446}
C.cb3.prototype={
$1(d){return d.a},
$S:z+22}
C.cb5.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cb6.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cb7.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a6v(v,C.b_d(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dCJ.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e9(new B.d8(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cbd.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cbe.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fvY.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:276}
C.fv4.prototype={
$1(d){return new C.ac1(this.a,this.b,null)},
$S:z+78}
C.eio.prototype={
$0(){return this.a.OK(this.b,C.hXE(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eip.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.OK(this.b,C.hXG(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eiq.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.OK(this.b,C.hXF(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eir.prototype={
$0(){X.hb5()
B.a4(this.a,!1).N(null)},
$S:0}
C.cb2.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cb1.prototype={
$2(d,e){var w,v=this,u=null,t=B.dL(d,A.nc),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lF(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.dt
return B.fK(t,A.A,o,new C.cb0(),A.cn,w,!0,u,!1,new B.cz("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cb0.prototype={
$3(d,e,f){return D.a9T},
$S:221}
C.ft4.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a6(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.da(r,0,B.dJ(6,"count",x.S),B.T(r).c)
u=r.$ti.k("J<aj.E,cK>")
r=B.B(new B.J(r,new C.ft3(e.b,e.d),u),u.k("aj.E"))
return B.bv(s,B.bX(new B.an(A.W,t,A.aa,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.be),A.ap)},
$S:1692}
C.ft3.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b_d(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fe5.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fe3(d))
w=B.aI(d,A.bS,x.w).w
v=B.m(22)
u=B.I(A.bF,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fJ,28)],x.V)
s=x.p
return new B.cX(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kR,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.z4,q,q,!0,q,q,new C.fe4(p,d),q,B.fu(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Eu,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.az,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.aA,q,u,v,t,q,A.n),q,q,q,A.fG,A.ED,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ae),q,q,q),q)},
$C:"$3",
$R:3,
$S:238}
C.fe3.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a4(w,!0).p8())B.a4(w,!0).eF()},
$S:0}
C.fe4.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a4(this.b,!0).eF()},
$S:0}
C.eXK.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dT(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dT(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dT(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dT(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dk()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.001
s.ft(r*3.14159)
return B.fr(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dk()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.001
s.jI(r*3.14159)
return B.fr(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dk()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.002
s.ft(r*1.2)
s.jI(r*0.5)
return B.fr(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dk()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.002
s.ft(-r*1.4)
return B.fr(A.a7,B.db(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.db(B.e9(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.jp(u.b,A.q,new C.aHJ(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.jp(u.b,A.q,new C.aHJ(1-r,t))],x.p),t)
case 16:v=D.b00.av(0,r)
return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.db(B.ei(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dk()
s.mr(r*6.28)
s.js(r,r,r,1)
return B.fr(A.A,u.b,t,s,!0)
case 20:return B.eA(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:58}
C.dO4.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.co(0)}},
$S:11}
C.dO3.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.co(0)}},
$S:11}
C.dO2.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hbl(v,w,e)},
$S:58}
C.caV.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a6(A.a3,A.a7,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.T(v).k("J<1,cK>")
q=B.B(new B.J(v,new C.caU(q,w,e.b,e.d),s),s.k("aj.E"))
return B.bX(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.be)},
$S:446}
C.caU.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cf?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a6v(m,new C.TU(d,C.b_d(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d1i.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d1h(w))},
$S:11}
C.d1h.prototype={
$0(){return this.a.d++},
$S:0}
C.e63.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aKC.t(0,A.d.gK(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hU3(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dk()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.0016
w=Math.sin(t)
s.e0(0,w*7,0,1)
s.ft(Math.sin(t)*0.32)
s.jI(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.js(w,w,w,1)
return B.fr(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dT(B.e9(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.e9(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:58}
C.eN3.prototype={
$1(d){var w
$.W()
w=B.L()
w.b=A.af
w.c=d
w.e=A.fx
return w},
$S:1693}
C.fqF.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.geb()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.boK(u,t,r),A.at))
w.push(B.nf(s.d,A.ap,new C.bcZ(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bnM(u,q,t,r),A.at))
return B.av(new B.a5(v.a,v.b,new B.an(A.W,r,A.b_,A.q,w,r),r),r,r,r)},
$S:249}
C.fgU.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:274}
C.eoC.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(R.Cd(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gal(s)){u=null
w=1
break}u=r.dL(s,new C.eoA(),new C.eoB(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.eoA.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:180}
C.eoB.prototype={
$0(){return J.fn(this.a)},
$S:1696}
C.el_.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.el0.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.el1.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.emA.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.emo.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.emp.prototype={
$1(d){return d.hw()},
$S:z+81}
C.ekn.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.enI.prototype={
$0(){this.a.t1()},
$S:0}
C.eoy.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nQ()
w.Jd()},
$S:0}
C.emy.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nQ()
w.Jd()},
$S:0}
C.eol.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eom.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.eon.prototype={
$1(d){return d.a},
$S:z+22}
C.eoo.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b1,A.aN),$.aw())},
$S:264}
C.eop.prototype={
$0(){return B.kd(!0,null,!0,!0,null,null,!1)},
$S:686}
C.ejM.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eoz.prototype={
$0(){},
$S:0}
C.elH.prototype={
$0(){var w=this.a
w.e=this.b.hw()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wT()
w.Jd()},
$S:0}
C.ejK.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wT()},
$S:0}
C.ejL.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wT()},
$S:0}
C.em3.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.em4.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wT()
w.Jd()
w.z="Home"},
$S:0}
C.em5.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.elG.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,A.SJ,w,w,!0,w,w,new C.elF(d),w,w)],x.p),w,w,w,D.fiH,w,w,w,w,D.f0O,w)},
$S:19}
C.elF.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.elD.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,A.SJ,w,w,!0,w,w,new C.elC(d),w,w)],x.p),w,w,w,D.f4F,w,w,w,w,D.f2u,w)},
$S:19}
C.elC.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.elE.prototype={
$0(){},
$S:0}
C.ekW.prototype={
$1(d){return this.a.aXT(C.bzO(d))},
$S:z+7}
C.ekX.prototype={
$1(d){return this.a.adb(C.bzO(d))},
$S:z+7}
C.elN.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b8,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fiL,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bu,new C.OB(A.v6,D.au2,"HATI YA KUHOWA","Hati ya mahari",new C.elI(d),w),A.S,new C.OB(A.h7,D.cUw,"HATI YA KUHOWESHA","Hati ya kupokea",new C.elJ(d),w),A.S,new C.OB(A.hX,D.cH1,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.elK(d),w),A.S,new C.OB(A.hH,D.cFo,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.elL(d),w)],v)
if(this.a.ga9M())A.d.v(u,B.a([A.S,new C.OB(A.iP,D.cqz,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.elM(d),w)],v))
return B.bq(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,E.x7,w,w,A.ai),!0,!1,A.ah,!0,!0)},
$S:32}
C.elI.prototype={
$0(){B.a4(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.elJ.prototype={
$0(){B.a4(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.elK.prototype={
$0(){B.a4(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.elL.prototype={
$0(){B.a4(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.elM.prototype={
$0(){B.a4(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.elO.prototype={
$0(){var w=this.a
w.e=this.b.hw()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wT()},
$S:0}
C.ejO.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.ejP.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mS(r,v.f+1,q);++v.f
r=v}t.CW=s.CW
t.cx=s.cx
t.cy=s.cy
t.ay=t.ay||s.ay
t.ch=t.ch||s.ch
q=s.db
if((q==null?"":q).length!==0){t.db=q
t.dx=s.dx
t.dy=s.dy
t.fr=s.fr}r.r=null},
$S:0}
C.elZ.prototype={
$1(d){return d.b===D.le},
$S:z+4}
C.em_.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gK(v).go
w.b=A.d.gK(v).id
return new B.e5(new C.elX(w,this.a,v),null)},
$S:20}
C.elX.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.elY(p,o,a3,n),l=B.M(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aQ:A.ak,i=l?A.bj:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aK,A.r,1),e=x.p,d=B.A(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.V(A.cv,j,q,q,q,q),q,q,q,new C.elT(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Bl[w]
v.a=null
t=v.a=u.a
a1.push(new C.bfs(t,u.b,p.a===t,i,k,new C.elU(v,m),q))}a1=B.c4(A.bE,a1,A.bx,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Bg[w]
s.a=null
t=s.a=r.a
u.push(new C.bfr(t,r.b,p.b===t,k,j,new C.elV(s,m),q))}return B.bq(!0,B.p(q,B.cd(B.v(B.a([d,A.aO,a0,A.S,a1,A.bu,v,A.S,B.c4(A.bE,u,A.bx,12,12),A.bu,new B.a5(1/0,48,B.ez(D.bKL,D.fl5,new C.elW(o,n),B.dd(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b7(B.m(16),A.Y),D.aVa,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.q,q,A.y,q,q,q,q,A.ai),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tb,D.bod,q,q,q),!0,!1,A.ah,!0,!0)},
$S:96}
C.elY.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.elR(w.a,d,e))
w.b.d_(new C.elS(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.elR.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.elS.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.elT.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.elU.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.elV.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.elW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A3.FT(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d_(new C.elQ(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.elQ.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.em1.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.em2.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.em0(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mS(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wT()},
$S:0}
C.em0.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.emj.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.emk.prototype={
$1(d){return d.w},
$S:z+82}
C.eml.prototype={
$2(d,e){return d>e?d:e},
$S:93}
C.emm.prototype={
$1(d){var w=this,v=null,u=B.M(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aQ:A.ak,r=u?A.bj:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aK,A.r,1),n=B.aI(d,A.bS,x.w).w,m=w.a,l=x.p,k=w.b
return B.bq(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bEx,A.f,v,v,D.aWw,v,38,v,v,v,v,v,38),A.bd,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.V(A.cv,s,v,v,v,v),v,v,v,new C.emg(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.az,new B.dl(1,A.ch,B.hD(v,new C.emh(m,k,w.c,s,w.d,t,r),k.length,A.fP,v,A.ai,new C.emi(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tb,A.Xf,v,v,v),!0,!1,A.ah,!0,!0)},
$S:32}
C.emg.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.emi.prototype={
$2(d,e){return A.ac},
$S:36}
C.emh.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cs
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bHC,q,q,q,new C.eme(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bqs,n,q),B.aL(q,A.T,!1,q,!0,A.q,q,B.aM(),v,q,q,q,q,q,2,B.bo(q,new B.b4(4,B.m(16),A.Y),q,A.eN,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aUQ),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ag,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.emf(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:687}
C.eme.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hZH(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.ger()?p.a:q.a.length
n=p.ger()?p.b:q.a.length
m=A.a.ol(q.a,o,n,s)
r.bM(0,new B.bb(m,B.h7(A.bt,o+s.length),A.aN))
l.ahc(k,m)
l.oR()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.emf.prototype={
$1(d){var w=this.a
w.ahc(this.b.a,d)
w.oR()},
$S:2}
C.emn.prototype={
$0(){},
$S:0}
C.elP.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ek4.prototype={
$0(){},
$S:0}
C.ek5.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hcE(this.b,w,!0)
w=this.a
w.r=null
w.wT()},
$S:0}
C.ek6.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ek7.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.ek3(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mS(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wT()},
$S:0}
C.ek3.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.emt.prototype={
$1(d){return B.oz(new C.ems(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:131}
C.ems.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.ag5,B.v(B.a([D.fgr,A.ao,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ib(!0,w,e,A.y,D.eFf,new C.emr(this.a,this.b),20,A.te,w,A.ai,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:436}
C.emr.prototype={
$2(d,e){var w=null,v=D.G6[e],u=C.hv4(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fH,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bn,B.p(w,D.ezs,A.f,w,w,new B.o(A.dT.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mS,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aK(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b2,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a6(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.emq(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ae)},
$S:75}
C.emq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cbc(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a4(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.emu.prototype={
$0(){var w=this.a
w.e=this.b.hw()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wT()},
$S:0}
C.eiJ.prototype={
$0(){var w,v=this.a,u=v.gpR(),t=C.r8(4294967295,null,0,0,null,C.cB(),D.ml,"","","",D.dc),s=this.b
C.cbp(t,s,u)
w=v.gdm()
if(w!=null&&s!==D.BU){t.e=w.e
t.f=w.f}A.d.cm(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ek2.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ad()
q.n(0,"id",C.cB())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gU(v)
if(u.b(t)){s=Date.now()
r=$.iW
$.iW=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cm(v.e.r,v.f+1,C.h_T(q));++v.f},
$S:0}
C.ek0.prototype={
$0(){var w=this.a
A.d.cw(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.emC.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cw(v.e.r,u),s=this.c
A.d.cm(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ejX.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.ejW(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ejW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.emB.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.Q(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ejN.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b1,A.aN),$.aw())},
$S:264}
C.eko.prototype={
$0(){return B.kd(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eoj.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eok.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.ark(w).fD()
v=u.Vj(w)
v.srK(B.h7(A.bt,v.a.a.length))},
$S:8}
C.enJ.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Wi(v)
if(u!=null&&u.b===D.cP)w.Vj(u).saV(0,u.r)}else w.w=null},
$S:0}
C.eiK.prototype={
$0(){var w=C.cB(),v=this.a,u=C.em(A.bg,!1,v.gpR().e.l(),A.aB,"",4280640491,24,A.bi,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.bf,4280172719,2,"Tap to edit text",0,0,"",D.cf,D.cP,0.7,0.15,0.2)
A.d.J(v.gdm().z,u)
v.r=u.a},
$S:0}
C.eiH.prototype={
$0(){var w=C.cB(),v=this.a,u=C.em(A.bg,!1,4279310375,A.aB,"",v.gpR().c.j(0.25).l(),24,A.bi,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpR().c.l(),2,"",0,0,"",D.cf,D.eZ,0.25,0.3,0.3)
A.d.J(v.gdm().z,u)
v.r=u.a},
$S:0}
C.eix.prototype={
$0(){var w=C.em(A.bg,!1,4279310375,A.aB,"",4280640491,24,A.bi,A.a4,"",0.55,C.cB(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cf,D.le,0.6,0.2,0.18),v=this.a
A.d.J(v.gdm().z,w)
v.r=w.a},
$S:0}
C.eiu.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bQG],x.p)
for(w=J.aW(this.a);w.C();){v=w.gU(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gahN().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dO(!1,r,r,r,!0,r,r,r,!0,r,D.bCh,r,r,r,r,new C.eit(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bq(!0,B.cJ(q,r,r,r,r,A.ai,!0),!0,!1,A.ah,!0,!0)},
$S:32}
C.eit.prototype={
$0(){B.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.eiv.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cB(),u=this.b,t=A.R.ao(u.ad(),null),s=C.em(A.bg,!1,4279310375,A.aB,u.b,4280640491,24,A.bi,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.bf,4280172719,2,t,0,0,"",D.cf,D.a3h,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdm().z,s)
t.r=s.a},
$S:0}
C.ejZ.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ek_.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdm().z,new C.ejY(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.ejY.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ejb.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cP)s.Q=t.c.l()
else if(w===D.eZ){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ejc(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ejc.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ejg.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ejh(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdm()
if(t!=null)v.$1(t)}},
$S:0}
C.ejh.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eje.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cP){s.Q=t.c
return}w=new C.ejf(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ejf.prototype={
$1(d){var w,v,u
for(w=A.d.gai(d.z),v=new B.hc(w,new C.ejd()),u=this.a;v.C();)w.gU(0).Q=u},
$S:z+1}
C.ejd.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.eja.prototype={
$0(){return C.cbp(this.b,this.c,this.a.gpR())},
$S:0}
C.emd.prototype={
$0(){return A.d.cm(this.a.d,0,this.b)},
$S:0}
C.eos.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eot.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eou.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eov.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cm(s,0,v.b)
else{w=A.d.be(s,new C.eor(v))
if(w>=0)t.d[w]=v.b}if(v.a.gR4()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hw()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.wT()
t.Jd()}},
$S:0}
C.eor.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.enZ.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a9Q(),s=w.b,r=u.a9R(A.f6,A.kH,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bu,B.p(v,B.A(B.a([B.D(u.aSb(w.c,A.ak),1),new B.C(A.fm,B.p(v,D.bCn,A.f,v,v,new B.o(A.f6.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aSb(s,A.f6),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a6(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.by,v,v,v),A.bu,u.aSe(A.f6,d,D.bys,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bTe(A.aW,d,A.tq,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.az)
p.push(u.aSc(d,"Not now"))
return new C.J2(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.enY.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.J2(B.v(B.a([v.a9Q(),A.P,v.a9R(A.aW,D.by7,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cW(new B.aZ(0,1/0,0,B.aI(d,A.bS,x.w).w.a.b*0.42),B.hD(w,new C.enW(v,u,d),u.length,w,w,A.ai,new C.enX(),!0),w),A.az,v.aSc(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.enX.prototype={
$2(d,e){return A.S},
$S:36}
C.enW.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.r,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.akR,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bNK,A.n),w,42,w,w,w,w,w,42),A.bd,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.n9,w,w,w),A.cZ,B.d("Updated "+this.a.OL(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.ee,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.by,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.enV(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ae)},
$S:75}
C.enV.prototype={
$0(){B.a4(this.a,!1).N(this.b.a)
return null},
$S:0}
C.enS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a9Q()
t=t.a9R(A.aL,A.tz,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.J2(B.v(B.a([s,A.P,t,A.bu,B.A(B.a([B.D(B.dW(A.a6G,new C.enQ(d),B.dd(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ce,u,new B.b7(B.m(14),A.Y),new B.az(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bJ(D.f33,new C.enR(d),B.bk(A.f6,u,u,u,A.c,u,A.ce,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.enQ.prototype={
$0(){B.a4(this.a,!1).N(!1)
return null},
$S:0}
C.enR.prototype={
$0(){B.a4(this.a,!1).N(!0)
return null},
$S:0}
C.enU.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a9Q(),s=w.b,r=u.a9R(A.aT,A.ed,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.D(u.asD("Names",""+w.c),1),A.ab,B.D(u.asD("Fields",""+w.d),1),A.ab,B.D(u.asD("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bl,v,v,v,A.c,v,A.wY,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.J2(B.v(B.a([t,A.P,r,A.aO,p,A.bu,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.n7,v,v,v),new C.enT(d),o),A.S,u.aSd(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.enT.prototype={
$0(){B.a4(this.a,!1).N(!0)
return null},
$S:0}
C.ekS.prototype={
$0(){B.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.ekR.prototype={
$0(){B.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.enK.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.eoi.prototype={
$1(d){var w=this.a,v=this.b
return new C.Zj(A.d.dL(w.d,new C.eog(v),new C.eoh(v)).hw(),w.f,null)},
$S:z+84}
C.eog.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eoh.prototype={
$0(){return this.a},
$S:z+85}
C.eiC.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.by,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hm,w,w,w),w),B.dO(!1,w,w,w,!0,w,w,w,!0,w,D.bE7,w,w,w,w,new C.eiA(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.f17,w,w,w)],x.p)
if(v>1)t.push(B.dO(!1,w,w,w,!0,w,w,w,!0,w,D.bFg,w,w,w,w,new C.eiB(d),!1,w,w,w,w,w,D.fmf,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dj,w,w,w),w,w,w))
return B.bq(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!0)},
$S:32}
C.eiA.prototype={
$0(){B.a4(this.a,!1).N("scroll")
return null},
$S:0}
C.eiB.prototype={
$0(){B.a4(this.a,!1).N("split")
return null},
$S:0}
C.eiD.prototype={
$0(){var w=this.b,v=w.c,u=C.em(A.bg,!1,4279310375,A.aB,v,4280640491,24,A.bi,A.a4,"",0.84,C.cB(),w.b,"","",0,!1,"",0,D.bf,4280172719,2,v,0,0,"",D.cf,D.QB,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdm().z,u)
v.r=u.a},
$S:0}
C.eiE.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iW
$.iW=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iW
$.iW=k+1
m.push(new C.eF(""+1000*l+"_"+k,D.QB,0.04,0.06,0.92,0.88,v,24,A.a4,A.bi,A.aB,4279310375,A.bg,u,D.bf,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cf,0,"","","","","",!1,0))
A.d.cm(j.e.r,i+q-1,new C.lv(""+1000*p+"_"+o,r+n,"",D.pK,4294967295,null,D.dc,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eiI.prototype={
$0(){var w,v=C.cB(),u=this.a,t=u.e
t=(t==null?null:C.km(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.em(A.bg,!1,4279310375,A.aB,t,4280640491,24,A.bi,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cf,D.kM,0.35,0.55,0.62)
A.d.J(u.gdm().z,w)
u.r=w.a},
$S:0}
C.eiz.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b_C(o)
w=C.cB()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.em(A.bg,!1,4279310375,A.aB,"marriage_sign_placed_"+A.a.e6(v.db,"marriage_sign_",""),4280640491,24,A.bi,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cf,D.kM,s,u,t)
A.d.J(p.gdm().z,q)
A.d.bn(p.gdm().z,new C.eiy(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hTN(p)}},
$S:0}
C.eiy.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.emz.prototype={
$0(){var w=this.a,v=this.b
w.b_C(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eoq.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ekV.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.ekU())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.ekU.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ejk.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ejl.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.t1()},
$S:8}
C.eiw.prototype={
$0(){var w=C.em(A.bg,!1,4279310375,A.aB,"HD Photo",4280640491,24,A.bi,A.a4,"",0.8,C.cB(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cf,D.le,0.8,0.1,0.1),v=this.a
A.d.J(v.gdm().z,w)
v.r=w.a},
$S:0}
C.ekm.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eiF.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdm().z,v)
w.r=v.a},
$S:0}
C.eiO.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eiP.prototype={
$0(){var w=this.b.hw(),v=C.cB(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.em(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdm().z,f)
t.r=f.a},
$S:0}
C.eiQ.prototype={
$0(){var w=this.a.gdm().z,v=this.b,u=A.d.be(w,new C.eiN(v))
if(u>=0&&u<w.length-1){A.d.cw(w,u)
A.d.cm(w,u+1,v)}},
$S:0}
C.eiN.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ej0.prototype={
$0(){var w=this.a.gdm().z,v=this.b,u=A.d.be(w,new C.eiM(v))
if(u>0){A.d.cw(w,u)
A.d.cm(w,u-1,v)}},
$S:0}
C.eiM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ej3.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.ej4.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ej5.prototype={
$0(){return this.a.as=A.dK},
$S:0}
C.ej6.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ej7.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.ej8.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.ej9.prototype={
$1(d){return d.length!==0},
$S:3}
C.eiR.prototype={
$0(){var w=this.a,v=w.gdm().z,u=C.cB()
A.d.J(v,C.Ci(w.gpR().c.j(0.18).l(),0.1,u,D.bf,0,2,1,0,0))
u=w.gdm().z
v=C.cB()
A.d.J(u,C.iQ(A.bg,!1,w.gpR().d.l(),A.aB,18,A.bi,A.I,0.07,v,"Document Header",0,D.dc,0.9,0.05,0.02))},
$S:0}
C.eiS.prototype={
$0(){var w,v=this.a,u=v.gdm().z,t=C.cB()
A.d.J(u,C.Ci(v.gpR().c.j(0.12).l(),0.1,t,D.bf,0,2,1,0,0.9))
t=v.gdm().z
u=C.cB()
w=C.bAw()
A.d.J(t,C.iQ(A.L,!1,v.gpR().e.l(),A.aB,12,A.bi,A.a4,0.06,u,"Footer \xb7 "+w,0,D.dc,0.9,0.05,0.92))},
$S:0}
C.eiT.prototype={
$0(){A.d.J(this.a.gdm().z,C.Ci(1727914055,0.12,C.cB(),D.bf,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eiU.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdm().z,C.Ci(w,0.08,C.cB(),D.bf,w,2,0.5,0.2,0.4))},
$S:0}
C.eiV.prototype={
$0(){var w=this.a,v=w.gdm().z,u=C.cB()
A.d.J(v,C.Ci(w.gpR().c.j(0.35).l(),0.12,u,D.BV,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdm().z,C.iQ(A.bg,!1,4279310375,A.aB,18,A.bi,A.a4,0.15,C.cB(),"Important note",0,D.pL,0.5,0.38,0.52))},
$S:0}
C.eiW.prototype={
$0(){var w=this.a
A.d.J(w.gdm().z,C.Ci(4294507260,0.78,C.cB(),D.bf,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdm().z,C.iQ(A.bg,!1,4279179050,A.aB,16,A.bi,A.a4,0.7,C.cB(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bAw()+"\n\nSubject:\n\nBody text\u2026",0,D.dc,0.76,0.12,0.14))},
$S:0}
C.eiX.prototype={
$0(){var w=this.a
A.d.J(w.gdm().z,C.Ci(4294897802,0.28,C.cB(),D.bf,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdm().z,C.iQ(A.bg,!1,4285611794,A.aB,15,A.bi,A.a4,0.24,C.cB(),"Sticky note",0,D.aDm,0.26,0.64,0.14))},
$S:0}
C.eiY.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdm().z,C.Ci(4293060848,0.04,C.cB(),D.bf,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdm().z,C.Ci(w,0.04,C.cB(),D.bf,w,2,0.55,0.1,0.48))},
$S:0}
C.eiZ.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdm().z,C.iQ(A.bg,!1,w,A.aB,18,A.bi,A.a4,0.62,C.cB(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.H1,0.42,0.06,0.18))
A.d.J(v.gdm().z,C.iQ(A.bg,!1,w,A.aB,18,A.bi,A.a4,0.62,C.cB(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.tP,0.42,0.52,0.18))},
$S:0}
C.ej_.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdm().z,C.Ci(858088427,0.62,C.cB(),D.bf,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdm().z,C.Ci(856004201,0.62,C.cB(),D.bf,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdm().z,C.iQ(A.bg,!1,w,A.aB,20,A.bi,A.I,0.1,C.cB(),"Option A",0,D.dc,0.36,0.08,0.2))
A.d.J(v.gdm().z,C.iQ(A.bg,!1,w,A.aB,20,A.bi,A.I,0.1,C.cB(),"Option B",0,D.dc,0.36,0.56,0.2))},
$S:0}
C.ej1.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdm().z,C.Ci(4294967295,0.36,C.cB(),D.bf,w,2,0.24,0.38,0.28))
A.d.J(v.gdm().z,C.iQ(A.L,!1,w,A.aB,14,A.bi,A.a4,0.12,C.cB(),"[ QR CODE ]",0,D.dc,0.24,0.38,0.4))},
$S:0}
C.ej2.prototype={
$0(){return C.cbp(this.b,D.QC,this.a.gpR())},
$S:0}
C.ekl.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a4X.t(0,d),t=this.a
return t.b4t(d,v===d,A.aZ,this.c,new C.ekk(t,u,d,w),u)},
$S:z+25}
C.ekk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nI(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bBi(r,new C.ekj(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ekj.prototype={
$0(){return this.a.d_(new C.eki(this.b,this.c))},
$S:0}
C.eki.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eiG.prototype={
$0(){var w,v=this.a,u=v.gpR(),t=C.r8(4294967295,null,0,0,null,C.cB(),D.ml,"","","",D.dc),s=this.b
C.cbp(t,s,u)
w=v.gdm()
if(w!=null&&s!==D.BU){t.e=w.e
t.f=w.f}A.d.cm(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ejo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hZK(p,q.d,s,new C.ejn(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.t1(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ejn.prototype={
$1(d){return this.bgU(d)},
bgU(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.ejm(t,d))
w=2
return B.b(t.t1(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.ejm.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gU(w)
A.d.cm(v.d,0,u)}},
$S:0}
C.ejp.prototype={
$0(){return this.a.bEw()},
$S:0}
C.ejq.prototype={
$0(){return this.a.aNC("Class Presentation",!0)},
$S:0}
C.ejr.prototype={
$1(d){return this.a.bFs(d.b,this.b,d.a)},
$S:z+88}
C.ek1.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bS,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.emc.prototype={
$1(d){return new B.C(new B.N(0,0,0,B.aI(d,A.eC,x.w).w.f.d),new B.e5(new C.emb(this.a,this.b),null),null)},
$S:60}
C.emb.prototype={
$2(d,e){return B.oz(new C.ema(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:620}
C.ema.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aA:A.c,s=B.I(u?A.bF:A.aK,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.b8,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.afx,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b2,B.bK(!1,A.z4,v,v,!0,v,v,new C.em8(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cJ(B.a([p.aQe(u,!0,!0,new C.em9(p,w.d))],q),e,D.bm3,v,v,A.ai,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kt,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:111}
C.em8.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.em9.prototype={
$0(){this.b.$1(new C.em6())
var w=this.a
if(w.c!=null)w.m(new C.em7())},
$S:0}
C.em6.prototype={
$0(){},
$S:0}
C.em7.prototype={
$0(){},
$S:0}
C.enL.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:94}
C.enM.prototype={
$4(d,e,f,g){var w=A.cp.av(0,e.gp(0))
return B.db(B.e9(A.A,new C.axc(this.a,null),0.94+w*0.06,null,null),w)},
$S:341}
C.enN.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:94}
C.enO.prototype={
$4(d,e,f,g){var w=A.cp.av(0,e.gp(0))
return B.db(B.e9(A.A,new C.baR(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:341}
C.enP.prototype={
$0(){return A.d.cm(this.a.d,0,C.UQ(this.b))},
$S:0}
C.eiL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.72)],t):B.a([A.c.j(0.88),A.p6.j(0.75)],t)
r=B.I(A.b4.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b4.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b4.j(0.45+q),A.r,1)
t=B.p(p,B.V(A_.Z2,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bv(o,B.tD(A.fr,B.p(p,B.v(B.a([t,A.az,q,A.ao,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.ay:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a6(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ey,p,p,1/0),14,!1),A.ap)},
$S:296}
C.ejQ.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ejR.prototype={
$1(d){return d.length!==0},
$S:3}
C.ejS.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kd
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.Zx:A.AL}return w},
$S:690}
C.ejV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dH.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.78)],s):B.a([A.c.j(0.92),A.mA.j(0.82)],s)
r=m.e
q=A.d.gK(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.km(v.w)?A.v6:A.py,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a6(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.OL(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.OL(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.OL(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.OL(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.OL(v.f)
r=k.bFq(n,A.d.gK(r),t)
return B.p(l,B.bv(j,new B.a6G(B.aF(!1,A.a1,!0,l,B.aK(!1,l,!0,B.p(l,B.dO(!1,A.L6,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.V(A.nF,t?A.ay:A.bI,l,l,l,l),l,l,l,new C.ejT(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a6(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.ejU(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ae),l),A.ap),A.f,l,l,l,l,l,l,A.d8,l,l,l,l)},
$S:91}
C.ejU.prototype={
$0(){return this.a.adb(this.b)},
$S:0}
C.ejT.prototype={
$0(){return this.a.Ac(this.b,this.c)},
$S:0}
C.ell.prototype={
$0(){var w=this.a
w.b38()
w.m(new C.elk())},
$S:0}
C.elk.prototype={
$0(){},
$S:0}
C.elm.prototype={
$1(d){return this.a.ahc(this.b.a,d)},
$S:2}
C.eln.prototype={
$0(){this.a.d_(new C.elj(this.b))},
$S:0}
C.elj.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.elo.prototype={
$0(){this.a.d_(new C.eli(this.b))},
$S:0}
C.eli.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bi:A.cD},
$S:0}
C.elp.prototype={
$0(){this.a.d_(new C.elh(this.b))},
$S:0}
C.elh.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aB:A.mq},
$S:0}
C.elq.prototype={
$0(){this.a.d_(new C.elg(this.b))},
$S:0}
C.elg.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.elr.prototype={
$0(){var w=this.a
w.d_(new C.elf(w,this.b))},
$S:0}
C.elf.prototype={
$0(){var w=this.b
return w.as=this.a.bZN(w.as)},
$S:0}
C.els.prototype={
$0(){return this.a.d_(new C.ele(this.b))},
$S:0}
C.ele.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.elt.prototype={
$0(){return this.a.d_(new C.eld(this.b))},
$S:0}
C.eld.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.el6.prototype={
$0(){return this.a.a0C(this.b.a)},
$S:0}
C.el7.prototype={
$0(){this.a.Zd()
return null},
$S:0}
C.el8.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bS,x.w).w.a.a<900)w.adv()
else w.m(new C.el5(w))},
$S:0}
C.el5.prototype={
$0(){return this.a.as=!0},
$S:0}
C.el9.prototype={
$0(){this.a.d_(new C.el4(this.b))},
$S:0}
C.el4.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.ela.prototype={
$0(){return this.a.d_(new C.el3(this.b))},
$S:0}
C.el3.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.elb.prototype={
$0(){return this.a.d_(new C.el2(this.b))},
$S:0}
C.el2.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.elc.prototype={
$0(){return this.a.axx(null)},
$S:0}
C.eke.prototype={
$0(){this.a.CP()
return null},
$S:0}
C.ekf.prototype={
$0(){this.a.a8p()
return null},
$S:0}
C.ekh.prototype={
$1(d){return this.bgV(d)},
bgV(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:case 3:switch(d){case"share":w=5
break
case"timer":w=6
break
case"motion":w=7
break
case"loop":w=8
break
case"finale":w=9
break
default:w=4
break}break
case 5:w=10
return B.b(t.a.J4(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c_(A.aA,null,new C.ek9(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d_(new C.eka(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d_(new C.ekb(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d_(new C.ekc(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 9:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
o=r.db
if(o==null)o=""
n=r.dx
if(n==null)n="NGMY"
m=r.dy
if(m==null)m=""
l=r.fr
w=12
return B.b(C.hdM(q,new C.DQ(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d_(new C.ekd(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.afv(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:89}
C.ek9.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dZT],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bEe:r
q.push(B.dO(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.ek8(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dj,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bq(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!0)},
$S:32}
C.ek8.prototype={
$0(){B.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.eka.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ekb.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ekc.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ekd.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ekg.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.za(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.za(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.za(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.afv(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e3J,q,v,u,B.za(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:137}
C.eow.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bAt(w,v)}},
$S:0}
C.eox.prototype={
$0(){this.a.CP()
return null},
$S:0}
C.elw.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bNE:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aQ:A.bv
return new B.C(A.fP,B.aE(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bb,new B.o(w,u,u,r,u,q,A.n),A.eD,u,u,u,A.lx,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.elv(t,d),u,u,u,u,u,u,!1,A.a9),u)},
$S:130}
C.elv.prototype={
$0(){var w=this.a
return w.m(new C.elu(w,this.b))},
$S:0}
C.elu.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.elx.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a1l:E.au7
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbII():t.gbER()
return B.hn(B.aE(u,B.p(u,D.akj,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gK(v).j(0.45),A.J,10)],x.V),new B.a6(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a9),u,s,u,u)},
$S:1704}
C.ely.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hZ_(v,w.a.c)},
$S:0}
C.emV.prototype={
$0(){return this.b.uI(this.a.a)},
$S:0}
C.emW.prototype={
$0(){return this.a.uI(D.ml)},
$S:0}
C.emX.prototype={
$0(){return this.a.uI(D.H_)},
$S:0}
C.en7.prototype={
$0(){return this.a.uI(D.H0)},
$S:0}
C.eni.prototype={
$0(){return this.a.uI(D.GZ)},
$S:0}
C.ent.prototype={
$0(){return this.a.pC("lab_report")},
$S:0}
C.enA.prototype={
$0(){return this.a.pC("rubric")},
$S:0}
C.enB.prototype={
$0(){return this.a.pC("minutes")},
$S:0}
C.enC.prototype={
$0(){return this.a.pC("agenda")},
$S:0}
C.enD.prototype={
$0(){return this.a.pC("timeline")},
$S:0}
C.enE.prototype={
$0(){return this.a.pC(this.b.a)},
$S:0}
C.emY.prototype={
$0(){this.a.Ut()
return null},
$S:0}
C.emZ.prototype={
$0(){this.a.Un()
return null},
$S:0}
C.en_.prototype={
$0(){return this.a.pC("table")},
$S:0}
C.en0.prototype={
$0(){return this.a.pC("sticky")},
$S:0}
C.en1.prototype={
$0(){return this.a.pC("divider")},
$S:0}
C.en2.prototype={
$0(){return this.a.pC("header_bar")},
$S:0}
C.en3.prototype={
$0(){return this.a.oB(D.bf)},
$S:0}
C.en4.prototype={
$0(){return this.a.oB(D.eI)},
$S:0}
C.en5.prototype={
$0(){return this.a.oB(D.jw)},
$S:0}
C.en6.prototype={
$0(){return this.a.oB(D.BV)},
$S:0}
C.en8.prototype={
$0(){return this.a.oB(D.jx)},
$S:0}
C.en9.prototype={
$0(){return this.a.oB(D.kN)},
$S:0}
C.ena.prototype={
$0(){return this.a.oB(D.fn)},
$S:0}
C.enb.prototype={
$0(){this.a.Gt()
return null},
$S:0}
C.enc.prototype={
$0(){this.a.Mk()
return null},
$S:0}
C.end.prototype={
$0(){return this.a.pC("quote")},
$S:0}
C.ene.prototype={
$0(){return this.a.a6y()},
$S:0}
C.enf.prototype={
$0(){this.a.Zi()
return null},
$S:0}
C.eng.prototype={
$0(){var w=this.a
return w.m(new C.emL(w))},
$S:0}
C.emL.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.enh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nI(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.emT(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.emT.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.enj.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jy()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a4Y.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b8
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.r,v?2.5:1),s,s,new B.a6(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a4Y.t(0,q))u.push(B.ao(s,B.p(s,D.MQ,A.f,s,s,D.Db,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fP,B.aE(s,B.hn(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.emS(r,d),s,s,s,s,s,s,!1,A.a9),s)},
$S:z+89}
C.emS.prototype={
$0(){this.a.a6Q(this.b)
return null},
$S:0}
C.enk.prototype={
$0(){this.a.a6P(this.b)
return null},
$S:0}
C.enl.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hv5(d),p=this.a,o=B.m(8),n=p.gdm()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.b8
v=p.gdm()
n=B.I(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.r8(4294967295,r,0,0,r,"preview_"+w,D.pK,"","","",D.dc)
C.haJ(s,w)
w=x.p
u=B.a([B.bv(o,B.p(r,B.bv(t,C.hc2(s),A.ap),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.ao(r,B.p(r,D.akS,A.f,r,r,D.Db,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.j4,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.q,u,r),A.cZ,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.ay:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.emR(p,q,d),r,r,r,r,r,r,!1,A.a9),r)},
$S:z+90}
C.emR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdm()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.nI(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d_(new C.emH(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.emH.prototype={
$0(){return C.haJ(this.a,this.b.a)},
$S:0}
C.emU.prototype={
bgW(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a4X.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nI(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bgW(d,e)},
$S:z+91}
C.enF.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("J<1,r>")
v=B.B(new B.J(d,new C.enH(this.a,e,g,this.b,f),v),v.k("aj.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aU)},
$S:z+92}
C.enH.prototype={
$1(d){var w=this
return w.a.b4t(d,w.b===d,w.c,w.d,new C.enG(w.e,d),!D.a4X.t(0,d))},
$S:z+25}
C.enG.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.enm.prototype={
$1(d){this.b.$2(d,new C.emQ(this.a,d,this.c))
return null},
$S:z+26}
C.emQ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bBi(u,new C.emG(v,this.c,w),w)},
$S:0}
C.emG.prototype={
$0(){return this.a.d_(new C.emE(this.b,this.c))},
$S:0}
C.emE.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.enn.prototype={
$1(d){this.b.$2(d,new C.emP(this.a,d))
return null},
$S:z+26}
C.emP.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fFj(u,new C.emF(v,w),w)},
$S:0}
C.emF.prototype={
$0(){var w=this.a
return w.d_(new C.emD(w,this.b))},
$S:0}
C.emD.prototype={
$0(){return this.a.gdm().r=this.b},
$S:0}
C.eno.prototype={
$0(){var w=this.a
return w.m(new C.emO(w))},
$S:0}
C.emO.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.enp.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bAt(w,v)}},
$S:0}
C.enq.prototype={
$0(){this.a.Hf()
return null},
$S:0}
C.enr.prototype={
$0(){return this.a.a6y()},
$S:0}
C.ens.prototype={
$0(){var w=this.a,v=w.jy()
if(v!=null&&v.b===D.cP)w.d_(new C.emN(v))},
$S:0}
C.emN.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.enu.prototype={
$0(){this.a.CP()
return null},
$S:0}
C.env.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Es(v,!0)
return null},
$S:0}
C.enw.prototype={
$0(){this.a.d_(new C.emM(this.b))},
$S:0}
C.emM.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.enx.prototype={
$0(){this.a.d_(new C.emK(this.b))},
$S:0}
C.emK.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bi:A.cD},
$S:0}
C.eny.prototype={
$0(){this.a.d_(new C.emJ(this.b))},
$S:0}
C.emJ.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aB:A.mq},
$S:0}
C.enz.prototype={
$0(){this.a.d_(new C.emI(this.b))},
$S:0}
C.emI.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ejj.prototype={
$1(d){return this.bgT(d)},
bgT(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nI(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d_(new C.eji(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:183}
C.eji.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eo1.prototype={
$0(){var w=this.a
return w.d_(new C.eo0(w,this.b))},
$S:0}
C.eo0.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eo2.prototype={
$0(){var w=this.a
return w.d_(new C.eo_(w,this.b))},
$S:0}
C.eo_.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.ekr.prototype={
$0(){return this.a.d_(new C.ekq(this.b))},
$S:0}
C.ekq.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eks.prototype={
$0(){return this.a.d_(new C.ekp(this.b))},
$S:0}
C.ekp.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ekZ.prototype={
$1(d){var w=x.gh
w=B.B(new B.J(D.amy,new C.ekY(),w),w.k("aj.E"))
return w},
$S:z+94}
C.ekY.prototype={
$1(d){var w=null
return B.za(B.d(d.b,w,w,w,w,w,w,A.mt,w,w,w),48,d,x.fO)},
$S:z+95}
C.eoe.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:36}
C.eod.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jT()?q:new C.eob(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bl
else v=r.d?A.b8:A.cm
v=B.I(v,A.r,o?2:1)
u=r.d?A.cC:A.c
t=B.bY(0,C.hc2(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.q,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.n6,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ago,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eoc(p,e),q,q,q,q,q,q,!1,A.a9)},
$S:78}
C.eoc.prototype={
$0(){var w=this.a
return w.m(new C.eo7(w,this.b))},
$S:0}
C.eo7.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Jd()},
$S:0}
C.eob.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c_(null,null,new C.eo8(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eo9(q,s))
q.aP_()}else if(r==="del"){q=t.a
q.m(new C.eoa(q,s))
q.aOc()}else if(r==="up")t.a.b_P(s,s-1)
else if(r==="down")t.a.b_P(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eo8.prototype={
$1(d){var w=null,v=B.a([B.dO(!1,w,w,w,!0,w,w,w,!0,w,D.bFS,w,w,w,w,new C.eo3(d),!1,w,w,w,w,w,w,w,D.f21,w,w,w),B.dO(!1,w,w,w,!0,w,w,w,!0,w,D.bFL,w,w,w,w,new C.eo4(d),!1,w,w,w,w,w,w,w,A.vS,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dO(!1,w,w,w,!0,w,w,w,!0,w,D.bF2,w,w,w,w,new C.eo5(d),!1,w,w,w,w,w,w,w,D.f9M,w,w,w))
if(u<this.b.r.length-1)v.push(B.dO(!1,w,w,w,!0,w,w,w,!0,w,D.bH3,w,w,w,w,new C.eo6(d),!1,w,w,w,w,w,w,w,D.f1R,w,w,w))
return B.bq(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ah,!0,!0)},
$S:32}
C.eo3.prototype={
$0(){B.a4(this.a,!1).N("dup")
return null},
$S:0}
C.eo4.prototype={
$0(){B.a4(this.a,!1).N("del")
return null},
$S:0}
C.eo5.prototype={
$0(){B.a4(this.a,!1).N("up")
return null},
$S:0}
C.eo6.prototype={
$0(){B.a4(this.a,!1).N("down")
return null},
$S:0}
C.eo9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eoa.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eof.prototype={
$0(){return this.a.a6y()},
$S:0}
C.ejJ.prototype={
$0(){var w=this.a
w.b38()
w.axx(null)},
$S:0}
C.ejI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a6(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a6(A.ax,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bv(s,B.bX(A.km,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.be),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.ejH(this.a,e.b,e.d,q),B.T(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.ay:A.bI,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bX(new B.an(A.W,p,A.aa,A.f,s,new B.cz("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.be)},
$S:446}
C.ejH.prototype={
$1(d){var w=this
return w.a.bAQ(d,w.b,w.c,w.d)},
$S:z+23}
C.ejw.prototype={
$0(){var w=this
if(w.b){w.a.Mt(w.c)
return}if(w.d){w.a.a6w(w.c)
return}if(w.e){w.a.aeO(w.c)
return}if(w.f)w.a.b3E(w.c)},
$S:0}
C.ejx.prototype={
$0(){this.a.Mt(this.b)
return null},
$S:0}
C.ejy.prototype={
$0(){return this.a.a0C(this.b.a)},
$S:0}
C.ejz.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.ejv(u,d,w.c,w.d))
v.GU()
v.nQ()
v.oR()},
$S:18}
C.ejv.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ejA.prototype={
$1(d){return this.a.ahc(this.b.a,d)},
$S:2}
C.ejC.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fQQ(w))u.a.Mt(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b3E(v)},
$S:0}
C.ejB.prototype={
$0(){return this.a.a0C(this.b.a)},
$S:0}
C.ejD.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eju(w.b,d,w.c,w.d))
v.GU()
v.nQ()
v.oR()},
$S:18}
C.eju.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cP)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.ejE.prototype={
$1(d){var w=this.a
w.m(new C.ejt(this.b,d))
w.GU()
w.nQ()
w.oR()},
$S:223}
C.ejt.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cP)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.ejF.prototype={
$0(){var w=this.a
w.m(new C.ejs(this.b))
w.GU()
w.nQ()
w.oR()},
$S:0}
C.ejs.prototype={
$0(){this.a.r=C.hby()},
$S:0}
C.ejG.prototype={
$0(){return this.a.a0C(this.b.a)},
$S:0}
C.elA.prototype={
$0(){var w=this.a
return w.m(new C.elz(w))},
$S:0}
C.elz.prototype={
$0(){return this.a.y=!1},
$S:0}
C.elB.prototype={
$1(d){return this.a.cwC(this.b.a,d)},
$S:2}
C.ekF.prototype={
$1(d){var w
this.a.d_(d)
w=this.b
if(w!=null)w.$0()},
$S:154}
C.ekG.prototype={
$1(d){return this.a.$1(new C.ekE(this.b,d))},
$S:6}
C.ekE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ekH.prototype={
$1(d){return this.a.$1(new C.ekD(this.b,d))},
$S:6}
C.ekD.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ekI.prototype={
$1(d){return this.a.$1(new C.ekC(this.b,d))},
$S:6}
C.ekC.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ekJ.prototype={
$1(d){return this.a.$1(new C.ekB(this.b,d))},
$S:6}
C.ekB.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ekK.prototype={
$1(d){return this.a.$1(new C.ekA(this.b,d))},
$S:6}
C.ekA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ekL.prototype={
$1(d){return this.b.$1(new C.ekz(this.a,this.c))},
$S:9}
C.ekz.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ekM.prototype={
$1(d){return this.b.$1(new C.eky(this.a,this.c))},
$S:9}
C.eky.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ekN.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bl:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ekx(this.a,v,d),w,w,w,w,w,w,!1,A.a9)},
$S:448}
C.ekx.prototype={
$0(){return this.a.$1(new C.eku(this.b,this.c))},
$S:0}
C.eku.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ekO.prototype={
$1(d){return this.a.$1(new C.ekw(this.b,d))},
$S:1705}
C.ekw.prototype={
$0(){var w=this.b
return this.a.as=w.gK(w)},
$S:0}
C.ekP.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ekv(this.a,this.b,d),w,w,w,w,w,w,!1,A.a9)},
$S:448}
C.ekv.prototype={
$0(){return this.a.$1(new C.ekt(this.b,this.c))},
$S:0}
C.ekt.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ekQ.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a4(w,!1).p8()}else w=!1
if(w){w=v.a.c
w.toString
B.a4(w,!1).eF()}v.a.aqj()},
$S:0}
C.ekT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dH.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b4,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.V(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.V(A.tz,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mR,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aK(!1,m,!0,B.ex(new B.a5(48,48,new B.an(A.A,n,A.aa,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a6(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ae)},
$S:140}
C.eis.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b4,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.r,1)
return B.aF(!1,A.a1,!0,p,B.aK(!1,o,!0,B.ex(B.v(B.a([B.e9(A.A,B.p(p,B.V(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jY,A.L,p,p)],x.p),A.m,p,A.b9,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a6(A.ax,A.aC,A.x,u,p,p),A.n),p,A.Ey,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ae)},
$S:140}
C.emx.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aL(w,A.T,!0,w,!0,A.q,w,B.aM(),u,w,w,w,w,w,2,A.alI,A.y,!0,w,!0,w,!1,w,A.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.eh(B.a([B.bK(!1,A.dd,w,w,!0,w,w,new C.emv(d),w,w),B.bJ(A.oT,new C.emw(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.emv.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.emw.prototype={
$0(){var w=this.b.a.a
B.a4(this.a,!1).N(w)
return null},
$S:0}
C.cYl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dH.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.et.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dW.av(0,i)
v=B.m(22)
t=B.aq(A.aJ,A.d.gK(C.km(j.a.c.w)?D.tH:M.mY),w*0.35)
t.toString
t=B.I(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gK(C.km(j.a.c.w)?D.tH:M.mY).j(0.18+w*0.12),A.J,32+w*10),D.a9n],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.b0,0.9,A.x,k,0,B.a([A.d.gK(C.km(j.a.c.w)?D.tH:M.mY).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gK(C.km(j.a.c.w)?D.tH:M.mY).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.x,k,0,B.a([m,A.d.gam(C.km(j.a.c.w)?D.tH:M.mY).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.km(m)?D.tH:M.mY
s=B.a([new B.ac(0,A.G,A.d.gK(C.km(m)?D.tH:M.mY).j(0.45+w*0.2),A.cw,18)],s)
m=x.p
l=B.a([p,B.e9(A.A,B.p(k,B.V(C.km(j.a.c.w)?A.v6:A.py,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a6(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.q,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gK(C.km(j.a.c.w)?D.tH:M.mY).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fV,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eVq,A.L,k,k),A.au,B.d(j.gcrK(),k,k,k,k,k,k,D.eZS,A.L,k,k),A.az],m)
p=j.a.c
if(p.z){p=p.gR4()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gK(C.km(j.a.c.w)?D.tH:M.mY).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.IW(A.xq,"Download PDF","pdf",A.d6,j.I6(0),!1,k))
p=j.a.c
if(!p.z||p.gR4()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ao,new C.IW(A.kH,"Transfer to "+C.hbA(p==null?"":p),"transfer_hati",A.aT,j.I6(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.I6(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ao,new C.IW(D.bxv,"Rename presentation","rename",A.c8,n,!1,k),A.ao,new C.IW(A.ai0,"Duplicate","duplicate",A.b3,j.I6(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.IW(A.ea,"Delete presentation","delete",A.aE,j.I6(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.I6(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.I6(n)
s.push(B.dT(B.db(B.bK(!1,E.aOd,k,k,!0,k,k,new C.cYk(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,A.at,k,D.bp9,k,k,k,k,k,A.kg,k,k)),n),new B.u(0,(1-p)*8)))
return B.e9(A.A,B.db(B.aF(!1,A.a1,!0,k,B.p(k,B.bv(q,new B.an(A.W,k,A.aa,A.q,B.a([o,new B.C(D.boi,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.ap),A.f,k,A.U6,new B.o(A.aA,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ae),i),0.88+u*0.12,k,k)},
$S:45}
C.cYk.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.cYH.prototype={
$0(){B.a4(this.a,!1).N(!1)
return null},
$S:0}
C.cYI.prototype={
$0(){B.a4(this.a,!1).N(!0)
return null},
$S:0}
C.cYi.prototype={
$1(d){var w=this.a
return w.m(new C.cYe(w))},
$S:23}
C.cYe.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cYj.prototype={
$1(d){var w=this.a
return w.m(new C.cYd(w))},
$S:50}
C.cYd.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cYh.prototype={
$0(){var w=this.a
return w.m(new C.cYf(w))},
$S:0}
C.cYf.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cYg.prototype={
$0(){var w=this.a.a.e
B.a4(this.b,!1).N(w)
return null},
$S:0}
C.epc.prototype={
$0(){return $.bih=!$.bih},
$S:0}
C.ep2.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaS4())u.au7()},
$S:0}
C.epb.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ep3.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ep4.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.au7()},
$S:0}
C.eoZ.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gK(w.a.c.r).r
w.d=0},
$S:0}
C.ep_.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ep0.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ep1.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.ep9.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.q,w,null)},
$S:1706}
C.epa.prototype={
$2(d,e){var w
if(e.gc1(e)===A.hQ)return new B.cX(e,!1,d,null)
w=this.a
return w.cpN(w.e,d,e)},
$S:422}
C.ep5.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
v=this.a
w.ft((1-v.gp(0))*1.5708)
return B.fr(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.ep6.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
v=this.a
w.jI((1-v.gp(0))*1.5708)
return B.fr(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.ep7.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.002
v=this.a
w.ft(v.gp(0)*0.8)
w.jI(v.gp(0)*0.35)
return B.fr(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.ep8.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.0025
v=this.a
w.ft(-v.gp(0)*1.2)
return B.fr(A.a7,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.epd.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gXw().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gXw().x
t===$&&B.c()
return new C.b_e(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.HU(v.c,t,!0,new B.cz("cine"+u,x.W))},
$S:674}
C.epf.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bS,x.w).w.a.a*0.55)w.au7()
else w.ceA()},
$S:50}
C.epe.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.fvO.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:420}
C.fvX.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eh(B.a([B.bK(!1,A.dd,w,w,!0,w,w,new C.fvU(d),w,w),B.bK(!1,D.fgL,w,w,!0,w,w,new C.fvV(d,this.b,v),w,w),B.bJ(A.aOu,new C.fvW(d,v,this.c),w)],x.p),w,w,L.rW,new B.a5(320,w,t,w),w,w,w,w,D.fi9,w)},
$S:19}
C.fvU.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.fvV.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).N(null)
C.fRu(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fvW.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aOg(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aNG(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fvN.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cbs.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:587}
C.fvT.prototype={
$1(d){return d.ad()},
$S:z+14}
C.f4Q.prototype={
$1(d){return C.fRs(C.UQ(B.a0(d,x.N,x.z)),this.a)},
$S:z+96}
C.fEz.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:94}
C.fEA.prototype={
$4(d,e,f,g){var w=A.cp.av(0,e.gp(0))
return B.db(B.e9(A.A,D.fBw,0.94+w*0.06,null,null),w)},
$S:341}
C.fEB.prototype={
$1(d){var w=this
return new C.US(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eoJ.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eoF.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eoI.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.UT(u,this.b,w.gaLz(),v,null)},
$S:z+99}
C.eoG.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eoH.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eoK.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eoL.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eoO.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.eoP.prototype={
$0(){var w=this.a
return w.m(new C.eoN(w))},
$S:0}
C.eoN.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eoQ.prototype={
$0(){var w=this.a
return w.m(new C.eoM(w))},
$S:0}
C.eoM.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eoR.prototype={
$1(d){return this.a.bFr(d,this.b)},
$S:z+100}
C.eoE.prototype={
$0(){var w=this.a
return w.m(new C.eoD(w,this.b))},
$S:0}
C.eoD.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eoS.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eoT.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eoU.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eoV.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.eoW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fH(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.eIe)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eim.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eil())},
$S:0}
C.eil.prototype={
$0(){},
$S:0}
C.ein.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fD()},
$S:8}
C.eii.prototype={
$1(d){return this.a.m(new C.eih())},
$S:2}
C.eih.prototype={
$0(){},
$S:0}
C.eij.prototype={
$1(d){return this.a.aWK()},
$S:2}
C.eik.prototype={
$0(){B.a4(this.a,!1).N(null)
return null},
$S:0}
C.eoY.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.ps(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eoX(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoX.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fq7.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.eq(new B.k7(this.c,new C.fq6(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:219}
C.fq6.prototype={
$3(d,e,f){return new C.HU(e,!1,!1,new B.cz(e.a,x.W))},
$S:z+102}
C.fq8.prototype={
$1(d){var w=null
return B.o7(!1,B.av(new C.bsF(this.a,this.b,w),w,w,w),w,x.z)},
$S:315}
C.fqc.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gmg(),$async$$0)
case 3:w=4
return B.b(B.bN(A.nz,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gmg(),$async$$0)
case 5:s=$.aU.ak$.x.h(0,t.a)
r=s==null?null:s.gb7()
if(!(r instanceof B.qg))throw B.S("Could not draw the slide.")
u=r.m0(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fqd.prototype={
bhr(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hj(A.fS),$async$$1)
case 3:r=f
if(r==null)throw B.S("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.fa(A.dE.gaP(r))],"image/png"))
t.toString
s=Ak.fIt(t)
w=4
return B.b(new B.pJ(s,"load",!1,x.ev).gK(0).cL(0,A.jl),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bhr(d)},
$S:1710}
C.fq9.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:141}
C.fqa.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fJ(0)},
$S:141}
C.fqb.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f_b.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eS1,A.L,w,w)},
$S:1711}
C.f_c.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bv(v,B.mc(A.bj,w,A.dN,8,w,e===0?w:e,w),A.ap)},
$S:606}
C.e6V.prototype={
$1(d){this.a.YF()
return null},
$S:14}
C.e6T.prototype={
$0(){return this.a.e=D.bkj},
$S:0}
C.e6U.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bw
return this.b.e=w},
$S:0}
C.ce0.prototype={
$1(d){return A.o.dt(1,d.a)},
$S:z+103}
C.ce1.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aKg.prototype
w.brZ=w.q
w=C.aJK.prototype
w.brr=w.q
w=C.aJv.prototype
w.brb=w.q
w=C.aJJ.prototype
w.brq=w.q
w=C.aKe.prototype
w.brX=w.q
w=C.aLz.prototype
w.btr=w.q
w=C.aIq.prototype
w.bq3=w.q
w=C.aKs.prototype
w.bsa=w.q
w=C.aKt.prototype
w.bsb=w.q
w=C.b0U.prototype
w.bmI=w.aAy})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hWU","am2",104)
v(C.aHp.prototype,"gc_7","XD",0)
var r
u(r=C.aw0.prototype,"gcr5","cr6",38)
v(r,"gc_T","abz",0)
v(r=C.avX.prototype,"gaVn","Di",3)
v(r,"gc_Q","c_R",3)
v(r,"gaup","x8",0)
v(r,"gauq","HN",0)
t(C,"hXi","hsR",105)
v(C.aC4.prototype,"gc2c","c2d",3)
s(C,"hXt",0,null,["$4$paper$photo$request$template"],["fxc"],106,0)
s(C,"hXs",0,null,["$5$doc$history$instruction$photo$template"],["bzM"],107,0)
v(r=C.aCn.prototype,"gc2T","I3",0)
v(r,"gbEU","Vv",0)
v(r,"gc2W","ack",0)
v(r,"gc2V","Yr",0)
v(r,"gaWp","Dy",0)
v(C.aCr.prototype,"gc30","Yt",0)
v(r=C.aDP.prototype,"gaWC","OH",0)
v(r,"gcjf","b_V",3)
v(r,"gcsu","ayM",86)
v(r,"gbIy","a8t",0)
v(r,"gc3r","zQ",0)
v(r=C.aFJ.prototype,"gcdk","ZM",0)
v(r,"gcds","ZP",0)
v(r,"gbxV","a6W",0)
v(r,"gc3v","acw",0)
v(C.aFI.prototype,"gc3w","acx",0)
v(C.azJ.prototype,"gbwU","a6J",0)
v(C.ay6.prototype,"gc3x","YE",0)
w(C,"hXG","hVB",12)
w(C,"hXE","hSy",12)
w(C,"hXF","hUB",12)
v(r=C.aCH.prototype,"gcvy","cvz",3)
v(r,"gchw","chx",3)
u(r,"gDE","adb",7)
v(r,"gbCx","apu",3)
u(r,"gDF","aXT",7)
v(r,"gc5E","acT",0)
v(r,"gc4v","acS",0)
v(r,"gc7O","adc",0)
v(r,"gbER","a84",0)
v(r,"gc8H","Zd",0)
v(r,"gc8I","adu",0)
v(r,"gc9d","adB",0)
v(r,"gc80","adg",0)
v(r,"gbII","a8x",0)
v(r,"gaOZ","aP_",3)
v(r,"gaOb","aOc",3)
v(r,"gaJU","aJV",3)
v(r,"gaOa","aqj",3)
u(r,"gbxa","bxb",80)
v(r,"gayl","b2W",3)
v(r,"gc4x","c4y",3)
v(r,"gbTy","bTz",3)
v(r,"gbHh","bHi",3)
v(r=C.aCK.prototype,"gcuv","cuw",3)
v(r,"gcua","cub",3)
t(C,"hXH","hVS",2)
v(r=C.aCI.prototype,"gc3D","I8",0)
v(r,"gclc","Q7",0)
v(r,"gc3A","I7",0)
v(r,"gcwN","a1e",0)
v(r,"gc9p","adI",0)
v(C.aCG.prototype,"gc3E","aWK",3)
v(r=C.aCJ.prototype,"gbJt","a8H",0)
u(r,"gc3B","c3C",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nE,C.QM,C.bFk,C.bDG,C.ctP,C.ctN,C.bLg,C.b6y,C.ctO,C.bCg,C.cdV,C.cdT,C.cdU,C.cdS,C.ar9,C.cdR,C.bM9,C.o5,C.aDi,C.jf,C.nr,C.a6F,C.yY,C.l5,C.oh,C.lT,C.z_,C.nv,C.a6N,C.apx,C.b_f,C.e6k,C.l2,C.E_,C.ep,C.iU,C.DQ,C.x8,C.eF,C.lv,C.hX,C.jx,C.a6O,C.adN,C.b_g,C.b0U,C.a1F])
u(B.kD,[C.cBF,C.bWp,C.flj,C.cDa,C.cCx,C.fqQ,C.dU7,C.dU6,C.e6Y,C.e6X,C.fse,C.f5X,C.f5Y,C.c9Q,C.c9R,C.c9S,C.ebl,C.eJL,C.eJ8,C.eJ7,C.eKb,C.eJJ,C.eJC,C.eJV,C.eKB,C.fcL,C.eQx,C.eQw,C.eR_,C.e6n,C.fvK,C.dPR,C.fC7,C.fsB,C.cbk,C.cbi,C.cbn,C.ft5,C.ft6,C.ft7,C.ft8,C.cb4,C.cb5,C.dCJ,C.cb1,C.ft4,C.eXK,C.dO2,C.caV,C.e63,C.fqF,C.elX,C.eml,C.emi,C.emh,C.ems,C.emr,C.enX,C.enW,C.emb,C.ema,C.eiL,C.ejV,C.emU,C.eoe,C.eod,C.ejI,C.ekT,C.eis,C.cYl,C.ep9,C.epa,C.ep5,C.ep6,C.ep7,C.ep8,C.epd,C.cbs,C.eoJ,C.eoU,C.ce1])
u(B.i7,[C.cBG,C.cBH,C.bMa,C.fiT,C.bWo,C.bWr,C.fyC,C.eYI,C.eYz,C.eYP,C.f4R,C.f4S,C.flk,C.fli,C.fy6,C.fiz,C.fyY,C.cD0,C.cD5,C.cD7,C.cD3,C.cD8,C.cD1,C.cD9,C.cCX,C.cCU,C.cCT,C.cD_,C.cCs,C.cCq,C.fpS,C.fpT,C.f9e,C.fqR,C.fqX,C.f8h,C.c69,C.fpQ,C.fpR,C.fkG,C.fkH,C.fqW,C.fqS,C.fqU,C.fqV,C.fqT,C.fCp,C.fkK,C.fkL,C.fkO,C.fkP,C.fkS,C.fkT,C.fDS,C.f6n,C.fE2,C.eaf,C.eag,C.eah,C.e9Y,C.ea9,C.eaa,C.eac,C.c9P,C.c9N,C.c9O,C.fqw,C.fqy,C.fqx,C.f5Z,C.f6_,C.fE5,C.ebq,C.ebr,C.ebi,C.ebj,C.ebm,C.ebn,C.fEl,C.eKC,C.eK1,C.eJM,C.eJZ,C.eJ3,C.eJ4,C.eJ5,C.eJ9,C.eJa,C.eKr,C.eKy,C.eKA,C.eKa,C.eKc,C.eKg,C.eKh,C.eKi,C.eKm,C.eKd,C.eKe,C.eJl,C.eJm,C.eJn,C.eJo,C.eJp,C.eJq,C.eJr,C.eJs,C.eJt,C.eIH,C.eII,C.eIJ,C.eIK,C.eIM,C.eIN,C.eJf,C.eJg,C.eJh,C.eJi,C.eJj,C.eIR,C.eIS,C.eIT,C.eIU,C.eJB,C.eJU,C.fnU,C.fnT,C.cbb,C.fcK,C.fvG,C.fvz,C.fvC,C.ftz,C.ftA,C.ftB,C.fo0,C.fo_,C.fnZ,C.fnX,C.f5U,C.f5V,C.f5W,C.fEx,C.eQz,C.eQA,C.eQt,C.eQn,C.eQT,C.eQU,C.eQW,C.eQX,C.eQS,C.fEw,C.eQe,C.fc_,C.e6m,C.fvI,C.fvJ,C.fvL,C.fvE,C.fvF,C.fDK,C.df8,C.dfe,C.e6l,C.f2q,C.f2s,C.f2r,C.f2p,C.fp5,C.fp7,C.f4p,C.fva,C.fvb,C.fvc,C.fvn,C.fvs,C.fvt,C.fvu,C.fvv,C.fvw,C.fvx,C.fvy,C.fvd,C.fve,C.fvf,C.fvg,C.fvh,C.fvi,C.fvj,C.fvk,C.fvl,C.fvm,C.fvo,C.fvp,C.fvq,C.fvr,C.fmV,C.fbN,C.fbM,C.fvR,C.dPS,C.dPQ,C.ePo,C.c5L,C.c5N,C.fC9,C.d4t,C.d4v,C.fC8,C.fC6,C.fEv,C.fsx,C.d43,C.fkW,C.fkX,C.cb9,C.cba,C.cb8,C.caZ,C.cb_,C.caW,C.caX,C.caY,C.cbq,C.cbl,C.cbg,C.cbh,C.cbj,C.cbm,C.cbo,C.ft9,C.cb3,C.cb6,C.cb7,C.cbd,C.cbe,C.fvY,C.fv4,C.cb2,C.cb0,C.ft3,C.fe5,C.caU,C.eN3,C.fgU,C.eoA,C.el_,C.el0,C.emA,C.emo,C.emp,C.ekn,C.eol,C.eom,C.eon,C.ejM,C.em3,C.em5,C.elG,C.elD,C.ekW,C.ekX,C.elN,C.ejO,C.elZ,C.em_,C.elY,C.em1,C.em0,C.emj,C.emk,C.emm,C.emf,C.ek6,C.ek3,C.emt,C.ejW,C.eok,C.eiu,C.ejZ,C.ejY,C.ejc,C.ejh,C.ejf,C.ejd,C.eos,C.eot,C.eou,C.eor,C.enZ,C.enY,C.enS,C.enU,C.enK,C.eoi,C.eog,C.eiC,C.eiy,C.ekU,C.ejl,C.eiN,C.eiM,C.ej8,C.ej9,C.ekl,C.ejn,C.ejr,C.emc,C.enL,C.enM,C.enN,C.enO,C.ejQ,C.ejR,C.ejS,C.elm,C.ekh,C.ek9,C.ekg,C.elw,C.elx,C.enj,C.enl,C.enF,C.enH,C.enm,C.enn,C.ejj,C.ekZ,C.ekY,C.eo8,C.ejH,C.ejz,C.ejA,C.ejD,C.ejE,C.elB,C.ekF,C.ekG,C.ekH,C.ekI,C.ekJ,C.ekK,C.ekL,C.ekM,C.ekN,C.ekO,C.ekP,C.emx,C.cYi,C.cYj,C.epf,C.fvO,C.fvX,C.fvN,C.fvT,C.f4Q,C.fEz,C.fEA,C.fEB,C.eoI,C.eoR,C.ein,C.eii,C.eij,C.fq7,C.fq6,C.fq8,C.fqd,C.fq9,C.fqa,C.f_b,C.f_c,C.e6V,C.ce0])
u(B.jq,[C.cBI,C.eYE,C.eYJ,C.eYK,C.eYF,C.eYG,C.eYH,C.eYx,C.eYy,C.eYA,C.eYB,C.eYO,C.eYN,C.eYD,C.eYC,C.eYL,C.eYM,C.eYR,C.eYS,C.eYQ,C.cD2,C.cD6,C.cD4,C.cCV,C.cCW,C.cCY,C.cCR,C.cCS,C.cCZ,C.cCQ,C.cCP,C.cCO,C.cCh,C.cCg,C.cCj,C.cCr,C.cCk,C.cCi,C.cCm,C.cCn,C.cCo,C.cCl,C.cCp,C.cCt,C.cCu,C.cCv,C.cCw,C.fkE,C.fkF,C.fkC,C.fkD,C.e1J,C.e1H,C.e1I,C.e1K,C.e1L,C.dU5,C.fkI,C.fkJ,C.fkM,C.fkN,C.fkQ,C.fkR,C.e6W,C.fsE,C.fsD,C.eae,C.ead,C.e9S,C.e9O,C.e9Z,C.ea_,C.ea0,C.e9U,C.e9V,C.e9W,C.e9X,C.e9T,C.e9Q,C.e9R,C.ea6,C.ea7,C.ea5,C.ea8,C.ea4,C.ea3,C.ea2,C.eab,C.ea1,C.e9P,C.ebp,C.ebd,C.ebe,C.ebk,C.ebf,C.ebh,C.ebg,C.ebo,C.eJu,C.eJS,C.eJd,C.eJe,C.eJb,C.eJc,C.eJY,C.eJX,C.eJW,C.eK0,C.eK_,C.eJ2,C.eJ6,C.eJ1,C.eJ0,C.eIY,C.eJ_,C.eIZ,C.eKz,C.eKs,C.eKq,C.eKt,C.eKp,C.eKu,C.eKo,C.eKv,C.eKw,C.eKx,C.eKn,C.eK9,C.eK4,C.eKf,C.eK8,C.eKj,C.eK7,C.eKk,C.eK6,C.eKl,C.eK5,C.eJP,C.eJO,C.eJQ,C.eJN,C.eJR,C.eJH,C.eJG,C.eJI,C.eJF,C.eJE,C.eJD,C.eIL,C.eIG,C.eIV,C.eIQ,C.eIW,C.eIP,C.eIX,C.eIO,C.eJK,C.eJy,C.eJx,C.eJz,C.eJw,C.eJA,C.eJv,C.eJT,C.eK3,C.eK2,C.eJk,C.fvB,C.fvD,C.fvH,C.fnY,C.fqp,C.fqn,C.fqo,C.eQB,C.eQC,C.eQy,C.eQs,C.eQr,C.eQu,C.eQv,C.eQh,C.eQi,C.eQk,C.eQl,C.eQm,C.eQj,C.eQo,C.eQP,C.eQQ,C.eQO,C.eQR,C.eQN,C.eQM,C.eQL,C.eQV,C.eQK,C.eQJ,C.eQI,C.eQY,C.eQH,C.eQZ,C.eQG,C.eQF,C.eQp,C.eQq,C.eQE,C.eQD,C.eQa,C.eQb,C.eQc,C.eQd,C.eQ9,C.eQf,C.eQg,C.df7,C.df9,C.dfc,C.dfd,C.dfb,C.dfa,C.fp6,C.fmW,C.c5M,C.c5O,C.d4m,C.d4r,C.d4s,C.d4q,C.d4p,C.d4u,C.d4o,C.d4n,C.d4w,C.fC5,C.db7,C.db8,C.db9,C.fkU,C.fkV,C.cbr,C.eio,C.eip,C.eiq,C.eir,C.fe3,C.fe4,C.dO4,C.dO3,C.d1i,C.d1h,C.eoC,C.eoB,C.el1,C.enI,C.eoy,C.emy,C.eoo,C.eop,C.eoz,C.elH,C.ejK,C.ejL,C.em4,C.elF,C.elC,C.elE,C.elI,C.elJ,C.elK,C.elL,C.elM,C.elO,C.ejP,C.elR,C.elS,C.elT,C.elU,C.elV,C.elW,C.elQ,C.em2,C.emg,C.eme,C.emn,C.elP,C.ek4,C.ek5,C.ek7,C.emq,C.emu,C.eiJ,C.ek2,C.ek0,C.emC,C.ejX,C.emB,C.ejN,C.eko,C.eoj,C.enJ,C.eiK,C.eiH,C.eix,C.eit,C.eiv,C.ek_,C.ejb,C.ejg,C.eje,C.eja,C.emd,C.eov,C.enV,C.enQ,C.enR,C.enT,C.ekS,C.ekR,C.eoh,C.eiA,C.eiB,C.eiD,C.eiE,C.eiI,C.eiz,C.emz,C.eoq,C.ekV,C.ejk,C.eiw,C.ekm,C.eiF,C.eiO,C.eiP,C.eiQ,C.ej0,C.ej3,C.ej4,C.ej5,C.ej6,C.ej7,C.eiR,C.eiS,C.eiT,C.eiU,C.eiV,C.eiW,C.eiX,C.eiY,C.eiZ,C.ej_,C.ej1,C.ej2,C.ekk,C.ekj,C.eki,C.eiG,C.ejo,C.ejm,C.ejp,C.ejq,C.ek1,C.em8,C.em9,C.em6,C.em7,C.enP,C.ejU,C.ejT,C.ell,C.elk,C.eln,C.elj,C.elo,C.eli,C.elp,C.elh,C.elq,C.elg,C.elr,C.elf,C.els,C.ele,C.elt,C.eld,C.el6,C.el7,C.el8,C.el5,C.el9,C.el4,C.ela,C.el3,C.elb,C.el2,C.elc,C.eke,C.ekf,C.ek8,C.eka,C.ekb,C.ekc,C.ekd,C.eow,C.eox,C.elv,C.elu,C.ely,C.emV,C.emW,C.emX,C.en7,C.eni,C.ent,C.enA,C.enB,C.enC,C.enD,C.enE,C.emY,C.emZ,C.en_,C.en0,C.en1,C.en2,C.en3,C.en4,C.en5,C.en6,C.en8,C.en9,C.ena,C.enb,C.enc,C.end,C.ene,C.enf,C.eng,C.emL,C.enh,C.emT,C.emS,C.enk,C.emR,C.emH,C.enG,C.emQ,C.emG,C.emE,C.emP,C.emF,C.emD,C.eno,C.emO,C.enp,C.enq,C.enr,C.ens,C.emN,C.enu,C.env,C.enw,C.emM,C.enx,C.emK,C.eny,C.emJ,C.enz,C.emI,C.eji,C.eo1,C.eo0,C.eo2,C.eo_,C.ekr,C.ekq,C.eks,C.ekp,C.eoc,C.eo7,C.eob,C.eo3,C.eo4,C.eo5,C.eo6,C.eo9,C.eoa,C.eof,C.ejJ,C.ejw,C.ejx,C.ejy,C.ejv,C.ejC,C.ejB,C.eju,C.ejt,C.ejF,C.ejs,C.ejG,C.elA,C.elz,C.ekE,C.ekD,C.ekC,C.ekB,C.ekA,C.ekz,C.eky,C.ekx,C.eku,C.ekw,C.ekv,C.ekt,C.ekQ,C.emv,C.emw,C.cYk,C.cYH,C.cYI,C.cYe,C.cYd,C.cYh,C.cYf,C.cYg,C.epc,C.ep2,C.epb,C.ep3,C.ep4,C.eoZ,C.ep_,C.ep0,C.ep1,C.epe,C.fvU,C.fvV,C.fvW,C.eoF,C.eoG,C.eoH,C.eoK,C.eoL,C.eoO,C.eoP,C.eoN,C.eoQ,C.eoM,C.eoE,C.eoD,C.eoS,C.eoT,C.eoV,C.eoW,C.eim,C.eil,C.eih,C.eik,C.eoY,C.eoX,C.fqc,C.fqb,C.e6T,C.e6U])
t(C.aPB,B.G)
u(B.mq,[C.a2B,C.avt,C.aua,C.x6,C.x9,C.kI,C.rV,C.AP,C.r7,C.vA,C.aq6,C.HV,C.apw,C.un,C.mj,C.hu,C.a7p])
u(C.bLg,[C.ctQ,C.bLh])
u(C.cdV,[C.cdZ,C.ar8])
t(C.cdY,C.cdT)
t(C.cdX,C.cdS)
t(C.ce_,C.cdX)
t(C.cdW,C.cdU)
t(C.cdQ,C.cdR)
t(C.b86,B.ox)
t(C.cnN,B.atC)
t(C.a7b,B.wT)
t(C.aTW,B.dE)
t(C.az1,B.asu)
u(B.ag,[C.a_D,C.Xq,C.Xo,C.aoJ,C.UF,C.UI,C.ZH,C.a_b,C.a_a,C.aCg,C.Yz,C.Mw,C.Y7,C.Ys,C.amL,C.aH6,C.TU,C.axQ,C.a6v,C.MZ,C.axc,C.IW,C.Zj,C.US,C.UT,C.aCF,C.apB,C.a6w])
u(B.ah,[C.aHp,C.aw0,C.avX,C.aC4,C.aCn,C.aCr,C.aDP,C.aFJ,C.aFI,C.aKg,C.azJ,C.aJK,C.ay6,C.bdW,C.aJv,C.aLz,C.aJJ,C.bbQ,C.aKe,C.aKs,C.aIq,C.baC,C.aKt,C.aCI,C.big,C.aCG,C.aCJ,C.bi_])
u(B.au,[C.avZ,C.abW,C.abl,C.bh3,C.abZ,C.adD,C.aZS,C.bqg,C.b_b,C.bjA,C.boR,C.aY6,C.b_e,C.ac1,C.acj,C.b_c,C.HU,C.aY9,C.baR,C.OB,C.J2,C.bfs,C.bfr,C.bsF])
u(B.Gt,[C.baj,C.brG,C.aHJ,C.bcZ,C.bpe])
u(B.nh,[C.bai,C.b6Q,C.bpb,C.b9Q,C.bdm,C.bfy,C.bcs,C.bdj,C.bd0,C.blL,C.b7Z,C.b7C,C.bsC,C.bpE,C.boN,C.bcl,C.b_9,C.bnM,C.boK])
t(C.bhX,C.aKg)
t(C.bhj,C.aJK)
t(C.bh5,C.aJv)
t(C.bs8,C.aLz)
t(C.bhg,C.aJJ)
t(C.bhV,C.aKe)
t(C.buX,C.aKs)
t(C.aCH,C.buX)
t(C.baD,C.aIq)
t(C.aCK,C.aKt)
t(C.bst,B.iN)
t(C.a7o,B.kh)
t(C.ce2,C.b0U)
t(C.agL,C.a1F)
u(B.Ws,[C.aPr,C.aQV])
t(C.av5,C.aPr)
w(C.aKg,B.c8)
w(C.aJK,B.c8)
w(C.aJv,B.c8)
w(C.aJJ,B.c8)
w(C.aKe,B.c8)
w(C.aLz,B.c8)
w(C.aIq,B.eQ)
w(C.aKs,B.c8)
v(C.buX,B.eu)
w(C.aKt,B.c8)})()
B.kj(b.typeUniverse,JSON.parse('{"aQa":{"hC":["aQa"]},"nE":{"aQa":[],"hC":["aQa"]},"aPB":{"G":["QM"],"G.E":"QM"},"b86":{"ox":[]},"a7b":{"wT":[],"o_":[]},"aTW":{"dE":[],"cx":[],"r":[]},"az1":{"aS":[],"d4":["aS"],"aR":[],"cu":[]},"a_D":{"ag":[],"r":[]},"aHp":{"ah":["a_D"]},"Xq":{"ag":[],"r":[]},"Xo":{"ag":[],"r":[]},"aw0":{"ah":["Xq"]},"avX":{"ah":["Xo"]},"avZ":{"au":[],"r":[]},"aoJ":{"ag":[],"r":[]},"aC4":{"ah":["aoJ"]},"abW":{"au":[],"r":[]},"abl":{"au":[],"r":[]},"abZ":{"au":[],"r":[]},"adD":{"au":[],"r":[]},"bh3":{"au":[],"r":[]},"UF":{"ag":[],"r":[]},"aCn":{"ah":["UF"]},"aZS":{"au":[],"r":[]},"baj":{"aB":[]},"bai":{"aB":[]},"brG":{"aB":[]},"b6Q":{"aB":[]},"bpb":{"aB":[]},"UI":{"ag":[],"r":[]},"aCr":{"ah":["UI"]},"b9Q":{"aB":[]},"ZH":{"ag":[],"r":[]},"aDP":{"ah":["ZH"]},"bdm":{"aB":[]},"a_b":{"ag":[],"r":[]},"a_a":{"ag":[],"r":[]},"aCg":{"ag":[],"r":[]},"Yz":{"ag":[],"r":[]},"aFJ":{"ah":["a_b"]},"aFI":{"ah":["a_a"]},"bhX":{"ah":["aCg"]},"bfy":{"aB":[]},"azJ":{"ah":["Yz"]},"bqg":{"au":[],"r":[]},"b_b":{"au":[],"r":[]},"bjA":{"au":[],"r":[]},"Mw":{"ag":[],"r":[]},"Y7":{"ag":[],"r":[]},"bhj":{"ah":["Mw"]},"boR":{"au":[],"r":[]},"bcs":{"aB":[]},"aY6":{"au":[],"r":[]},"ay6":{"ah":["Y7"]},"Ys":{"ag":[],"r":[]},"bdW":{"ah":["Ys"]},"bdj":{"aB":[]},"bd0":{"aB":[]},"blL":{"aB":[]},"b7Z":{"aB":[]},"b7C":{"aB":[]},"bsC":{"aB":[]},"bpE":{"aB":[]},"boN":{"aB":[]},"bcl":{"aB":[]},"amL":{"ag":[],"r":[]},"b_e":{"au":[],"r":[]},"bh5":{"ah":["amL"]},"ac1":{"au":[],"r":[]},"acj":{"au":[],"r":[]},"aH6":{"ag":[],"r":[]},"TU":{"ag":[],"r":[]},"HU":{"au":[],"r":[]},"axQ":{"ag":[],"r":[]},"a6v":{"ag":[],"r":[]},"b_c":{"au":[],"r":[]},"b_9":{"aB":[]},"bs8":{"ah":["aH6"]},"aHJ":{"aB":[]},"bhg":{"ah":["TU"]},"bbQ":{"ah":["axQ"]},"bhV":{"ah":["a6v"]},"aY9":{"au":[],"r":[]},"bcZ":{"aB":[]},"bnM":{"aB":[]},"boK":{"aB":[]},"axc":{"ag":[],"r":[]},"IW":{"ag":[],"r":[]},"Zj":{"ag":[],"r":[]},"J2":{"au":[],"r":[]},"MZ":{"ag":[],"r":[]},"aCH":{"ah":["MZ"],"eu":[]},"baD":{"ah":["axc"]},"baR":{"au":[],"r":[]},"baC":{"ah":["IW"]},"OB":{"au":[],"r":[]},"aCK":{"ah":["Zj"]},"bpe":{"aB":[]},"bfs":{"au":[],"r":[]},"bfr":{"au":[],"r":[]},"US":{"ag":[],"r":[]},"UT":{"ag":[],"r":[]},"aCF":{"ag":[],"r":[]},"apB":{"ag":[],"r":[]},"aCI":{"ah":["US"]},"big":{"ah":["UT"]},"aCG":{"ah":["aCF"]},"bst":{"iN":[]},"aCJ":{"ah":["apB"]},"bsF":{"au":[],"r":[]},"a6w":{"ag":[],"r":[]},"bi_":{"ah":["a6w"]},"a7o":{"kh":["fq<eI>"],"k4":["fq<eI>"]},"agL":{"a1F":[]},"aPr":{"iY":[],"fd":[]},"av5":{"iY":[],"fd":[]},"aQV":{"iY":[],"fd":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.aA
return{bu:w("KO"),U:w("v6<pI>"),bz:w("w"),M:w("eV<n>"),bo:w("js"),g7:w("Lj"),gc:w("ax<is?>"),bq:w("ax<~>"),cc:w("a3G"),fS:w("Df"),an:w("akm"),bm:w("P<QM>"),X:w("P<ah0>"),f3:w("P<aQa>"),aK:w("P<mW>"),V:w("P<ac>"),O:w("P<w>"),fA:w("P<ln>"),d5:w("P<ax<bu<H,+icon3d,picture(n?,n?)>>>"),bH:w("P<ax<dB>>"),fG:w("P<ax<~>>"),aF:w("P<n0>"),cd:w("P<ak<jf>>"),ez:w("P<a3<n,aC>>"),d:w("P<a3<n,@>>"),B:w("P<mf>"),h:w("P<jf>"),gE:w("P<yY>"),k:w("P<o5>"),g:w("P<lv>"),D:w("P<hX>"),u:w("P<eF>"),m:w("P<un>"),i:w("P<hu>"),aC:w("P<a6N>"),o:w("P<z_>"),e3:w("P<aC>"),dN:w("P<u>"),v:w("P<hE>"),cR:w("P<iL>"),J:w("P<j7>"),gx:w("P<oS<n>>"),f2:w("P<+(a_,n)>"),L:w("P<+(n,n)>"),aD:w("P<+data,mimeType(n,n)>"),G:w("P<+(O,O)>"),ek:w("P<+(H,n)>"),n:w("P<+(H,H)>"),r:w("P<cP>"),s:w("P<n>"),aS:w("P<iN>"),p:w("P<r>"),eR:w("P<fd>"),fT:w("P<b6y>"),bx:w("P<aDi>"),gz:w("P<adN>"),x:w("P<O>"),t:w("P<H>"),dS:w("P<aB?>"),bA:w("P<u?>"),Z:w("P<H?>"),cA:w("P<cj>"),A:w("cs<ah<ag>>"),gL:w("ak<o5>"),R:w("ak<hX>"),j:w("ak<@>"),bW:w("ak<H>"),e:w("bu<H,+icon3d,picture(n?,n?)>"),P:w("a3<n,@>"),f:w("a3<@,@>"),gI:w("a3<H,+icon3d,picture(n?,n?)>"),bR:w("J<hu,r>"),eC:w("J<nv,n>"),cT:w("J<jx,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<H,pn>"),gh:w("J<mj,jh<mj>>"),w:w("iI"),ei:w("is"),g2:w("qY"),fB:w("DQ"),b6:w("yY"),gX:w("a6F"),dt:w("l5"),ea:w("o5"),bt:w("lv"),I:w("hX"),F:w("eF"),fO:w("mj"),ff:w("un"),fP:w("hu"),Q:w("vA"),dO:w("apx"),a:w("cn"),C:w("aC"),dw:w("ar9"),di:w("a7p"),Y:w("eI"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("El"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("dZ<n>"),N:w("n"),fw:w("pI"),bO:w("ar"),K:w("bm<u>"),b:w("bm<O>"),E:w("dB"),W:w("cz<n>"),ac:w("cz<H>"),ex:w("k7<lv>"),cI:w("k7<n>"),cl:w("k7<O>"),b4:w("a1<l2>"),a8:w("a1<lT>"),fR:w("a1<+(n,n)>"),co:w("e6<u>"),l:w("r"),b2:w("bS<~>"),ev:w("pJ<dU>"),dT:w("bg<~>"),cQ:w("az1"),q:w("mO"),y:w("R"),gR:w("O"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ak<a3<n,@>>?"),aT:w("ak<hX>?"),c:w("ak<@>?"),aP:w("is?"),af:w("hX?"),go:w("b_g?"),a6:w("a6O?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dB,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dB?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aSy=new B.bI(A.ax,null,null,H.als,null)
D.aSH=new B.d8(0,-0.15)
D.aSJ=new B.d8(0.62,0)
D.aSM=new B.d8(-0.35,-0.45)
D.aSW=new B.d8(0.9,-0.85)
D.aJh=new B.aV(30,30)
D.aUe=new B.bs(D.aJh,D.aJh,A.hc,A.hc)
D.aUs=new B.az(A.b3,1,A.r,-1)
D.bcj=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aUE=new B.az(D.bcj,1,A.r,-1)
D.aUQ=new B.az(A.aD,1.5,A.r,-1)
D.aUV=new B.az(A.b3,1.6,A.r,-1)
D.aVa=new B.az(A.aD,1.4,A.r,-1)
D.aWw=new B.o(null,null,null,null,null,K.FN,A.a6)
D.bOM=new B.a6(A.a3,A.a7,A.x,G.a1l,null,null)
D.aWE=new B.o(null,null,null,null,null,D.bOM,A.a6)
D.a9d=new B.o(A.aA,null,null,A.rx,null,null,A.n)
D.b6H=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bch=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cLk=w([D.b6H,D.bch],x.O)
D.e55=new B.bR(A.A,0.5,A.x,null,0,D.cLk,null,null)
D.aWX=new B.o(null,null,null,null,null,D.e55,A.a6)
D.Vw=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aWZ=new B.o(D.Vw,null,H.a8S,null,null,null,A.n)
D.bQt=new B.a6(A.a3,A.a7,A.x,A.OX,null,null)
D.aX6=new B.o(null,null,null,null,null,D.bQt,A.a6)
D.aaE=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aX8=new B.o(D.aaE,null,null,A.ry,null,null,A.n)
D.aXc=new B.o(A.k7,null,null,null,null,null,A.a6)
D.aVv=new B.bQ(A.zu,A.Y,A.Y,A.Y)
D.aXf=new B.o(Y.abD,null,D.aVv,A.lR,null,null,A.n)
D.Db=new B.o(A.dT,null,null,null,null,null,A.a6)
D.aXm=new B.o(null,null,null,null,null,E.vk,A.a6)
D.cQ_=w([E.acn,A.bW],x.O)
D.bQ5=new B.a6(A.b0,A.b5,A.x,D.cQ_,null,null)
D.aXq=new B.o(null,null,null,A.lR,null,D.bQ5,A.n)
D.d_2=w([A.bl,A.dT,A.jF],x.O)
D.a_x=new B.a6(A.ax,A.aC,A.x,D.d_2,null,null)
D.aXD=new B.o(null,null,null,null,null,D.a_x,A.n)
D.aXE=new B.o(D.aaE,null,null,A.kt,null,null,A.n)
D.cgu=w([A.dp,A.bl],x.O)
D.bPY=new B.a6(A.ax,A.aC,A.x,D.cgu,null,null)
D.aXI=new B.o(null,null,null,null,null,D.bPY,A.n)
D.aXS=new B.o(null,null,null,null,null,G.tB,A.a6)
D.aY9=new B.o(A.aco,null,null,null,null,null,A.a6)
D.b7q=new B.w(0.5647058823529412,0,0,0,A.t)
D.a9n=new B.ac(0,A.G,D.b7q,A.QN,28)
D.b_g=new B.aU8()
D.b_P=new C.cnN()
D.b00=new C.b86()
D.a9T=new B.cq(A.A,null,null,A.a_m,null)
D.b2s=new B.fh(null,null,null,null,null,E.mH,null,null,null,null)
D.b0x=new B.cq(A.A,null,null,D.b2s,null)
D.bAt=new B.ae(A.dS,28,A.c,null,null,null)
D.b1_=new B.cq(A.A,null,null,D.bAt,null)
D.b2p=new B.fh(2,null,null,null,null,A.bU,null,null,null,null)
D.b1l=new B.cq(A.A,null,null,D.b2p,null)
D.bAO=new B.ae(K.MD,40,A.bL,null,null,null)
D.b1m=new B.cq(A.A,null,null,D.bAO,null)
D.b3e=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b3p=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b3N=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b3T=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b4p=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b4H=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b4I=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.JF=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b55=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b5a=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aaV=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b5Q=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b6w=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.ab8=new B.w(1,1,1,0.9725490196078431,A.t)
D.b6O=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b6Z=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b71=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b7c=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b7v=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b8L=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Vh=new B.w(0.8509803921568627,0,0,0,A.t)
D.b8T=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b8Z=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.abT=new B.w(0.6,0,0,0,A.t)
D.abV=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bal=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rT=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.baL=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bb9=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bbv=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acz=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.VF=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.A0=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.K9=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iZ=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.acY=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.VN=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bez=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bf_=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bfc=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.W5=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bgf=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.wM=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bgG=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bgY=new B.hB(A.b8,!0,null,null)
D.eYa=new B.F(!0,A.ay,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm7=new B.x("Bio link",null,D.eYa,null,null,null,null,null,null,null,null,null)
D.b1f=new B.cq(A.A,null,null,D.fm7,null)
D.bhd=new B.hB(A.UG,!0,D.b1f,null)
D.Kw=new C.a2B(0,"none")
D.ae_=new C.a2B(1,"deflate")
D.ae0=new C.a2B(2,"bzip2")
D.bhU=new B.kb(0.165,0.84,0.44,1)
D.cQi=w([A.cb,A.dN,A.aD],x.O)
D.bPe=new B.a6(A.ax,A.aC,A.x,D.cQi,null,null)
D.aWB=new B.o(null,null,null,null,null,D.bPe,A.n)
D.bJz=new B.ae(A.eP,null,A.ad,null,null,null)
D.b1Q=new B.cq(A.A,null,null,D.bJz,null)
D.bir=new B.kF(D.aWB,A.be,D.b1Q,null)
D.beP=new B.w(0.058823529411764705,1,1,1,A.t)
D.cTk=w([A.bF,A.qm,A.qm,D.beP],x.O)
D.cxu=w([0,0.32,0.7,1],x.x)
D.bPN=new B.a6(A.ax,A.aC,A.x,D.cTk,D.cxu,null)
D.aWq=new B.o(null,null,null,null,null,D.bPN,A.n)
D.bix=new B.kF(D.aWq,A.be,null,null)
D.bjx=new B.m5(1,1,null,null,null,A.bj,null)
D.bjA=new B.m5(1,null,null,null,null,D.VN,null)
D.bk3=new B.b9(125e4)
D.bk9=new B.b9(17e4)
D.bkj=new B.b9(35964e8)
D.bkp=new B.b9(55e4)
D.bkt=new B.b9(68e4)
D.bkU=new B.i8(0,0,0,5)
D.bla=new B.N(0,16,16,0)
D.bld=new B.N(0,18,0,8)
D.bll=new B.N(0,36,0,36)
D.bls=new B.N(0,54,0,0)
D.blz=new B.N(10,0,10,3)
D.blK=new B.i8(10,16,10,10)
D.blV=new B.N(10,6,4,6)
D.blY=new B.N(10,8,10,6)
D.aeX=new B.N(11,8,11,11)
D.bm2=new B.N(12,0,12,10)
D.bm3=new B.N(12,0,12,24)
D.bmf=new B.N(12,12,12,4)
D.bmi=new B.N(12,12,8,12)
D.bmx=new B.N(12,8,8,12)
D.bmU=new B.N(14,14,14,0)
D.bmZ=new B.N(14,14,14,90)
D.bni=new B.N(16,10,16,16)
D.bnj=new B.N(16,10,16,20)
D.afK=new B.N(16,6,16,28)
D.bnS=new B.N(18,0,18,10)
D.bnU=new B.N(18,0,18,30)
D.bnW=new B.N(18,10,18,12)
D.bnX=new B.N(18,10,18,14)
D.bod=new B.N(18,16,14,18)
D.boi=new B.N(18,18,18,12)
D.boo=new B.N(18,26,18,12)
D.bot=new B.N(18,34,18,34)
D.bou=new B.N(18,4,18,14)
D.boA=new B.N(18,8,18,24)
D.boS=new B.N(20,16,14,4)
D.boX=new B.N(20,18,12,4)
D.bp1=new B.N(20,20,12,20)
D.bp4=new B.N(20,22,20,20)
D.bp9=new B.N(20,6,20,6)
D.bpj=new B.N(22,18,22,18)
D.bpr=new B.N(22,24,22,0)
D.bpu=new B.N(22,24,22,4)
D.bpC=new B.N(22,60,22,22)
D.bpI=new B.N(24,24,24,22)
D.bpS=new B.N(26,10,60,10)
D.bpZ=new B.N(28,44,28,44)
D.bqf=new B.N(32,44,32,44)
D.bqn=new B.N(38,30,38,20)
D.bqs=new B.N(4,0,0,6)
D.bqE=new B.i8(4,4,4,4)
D.br3=new B.i8(6,5,6,5)
D.br7=new B.N(6,6,8,6)
D.bri=new B.N(8,14,8,14)
D.brj=new B.N(8,22,8,22)
D.brs=new B.N(8,6,12,6)
D.brB=new B.N(8,8,8,4)
D.agA=new B.N(9,9,9,6)
D.brK=new B.i8(2.5,2.5,2.5,2.5)
D.brL=new B.N(10.5,0,10.5,0)
D.brM=new B.N(7,1.5,7,1.5)
D.cIA=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bs1=new B.yo(null,null,D.cIA,A.zH)
D.cFO=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bs2=new B.yo(null,null,D.cFO,A.zH)
D.aNU=new B.F(!0,A.ay,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fls=new B.x("WORD DESIGN",null,D.aNU,null,null,null,null,null,null,null,null,null)
D.bsw=new B.bG(1,A.bo,D.fls,null)
D.fl8=new B.x("Slides database",null,A9.z0,null,null,null,null,null,null,null,null,null)
D.fiu=new B.x("Admin only \xb7 keep as many as you like",null,T.aNq,null,null,null,null,null,null,null,null,null)
D.d6q=w([D.fl8,A.bB,D.fiu],x.p)
D.bhC=new B.fp(A.ai,A.e,A.j,A.F,null,A.p,null,0,D.d6q,null)
D.bsz=new B.bG(1,A.bo,D.bhC,null)
D.fdf=new B.x("NGMY logo",null,A.fW,null,null,null,null,null,null,null,null,null)
D.bsC=new B.bG(1,A.bo,D.fdf,null)
D.eW4=new B.F(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnk=new B.x("TALK TO THE EDITOR",null,D.eW4,null,null,null,null,null,null,null,null,null)
D.bsR=new B.bG(1,A.bo,D.fnk,null)
D.f7g=new B.x("Tell the AI what to change",null,A9.z0,null,null,null,null,null,null,null,null,null)
D.btb=new B.bG(1,A.bo,D.f7g,null)
D.bu1=new B.D5(!0,"video/mp4")
D.eUo=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5v=new B.x("Move presentations between devices",null,D.eUo,null,null,null,!1,null,null,1,null,null)
D.bu5=new B.q1(A.eg,A.a3,A.f,D.f5v,null)
D.f6x=new B.x("Edit in Slides",null,A.jY,null,null,null,null,null,null,null,null,null)
D.bu6=new B.q1(A.eg,A.A,A.f,D.f6x,null)
D.bul=new B.dl(1,A.ch,D.bu6,null)
D.YR=new B.a_(60988,"MaterialIcons",!1)
D.bw0=new B.a_(61352,"MaterialIcons",!1)
D.ai4=new B.a_(61531,"MaterialIcons",!1)
D.bxc=new B.a_(63062,"MaterialIcons",!1)
D.bxk=new B.a_(63109,"MaterialIcons",!1)
D.bxv=new B.a_(63206,"MaterialIcons",!1)
D.aiO=new B.a_(63238,"MaterialIcons",!1)
D.Zl=new B.a_(63365,"MaterialIcons",!1)
D.Zm=new B.a_(63367,"MaterialIcons",!1)
D.Zn=new B.a_(63368,"MaterialIcons",!1)
D.aj_=new B.a_(63384,"MaterialIcons",!1)
D.by4=new B.a_(63525,"MaterialIcons",!1)
D.by7=new B.a_(63568,"MaterialIcons",!1)
D.bys=new B.a_(983072,"MaterialIcons",!1)
D.byR=new B.a_(983271,"MaterialIcons",!0)
D.bzF=new B.a_(983924,"MaterialIcons",!1)
D.ak8=new B.a_(983965,"MaterialIcons",!1)
D.ak9=new B.a_(983966,"MaterialIcons",!1)
D.bzP=new B.a_(984592,"MaterialIcons",!1)
D.bA6=new B.ae(A.tn,16,A.ay,null,null,null)
D.bAd=new B.ae(A.md,null,A.c,null,null,null)
D.akj=new B.ae(A.px,18,A.c,null,null,null)
D.bAu=new B.ae(A.AK,18,N.kZ,null,null,null)
D.bB9=new B.ae(A.j8,11,null,null,null,null)
D.bBj=new B.ae(A.Z6,null,A.ew,null,null,null)
D.bBS=new B.ae(A.qJ,18,A.ay,null,null,null)
D.bBY=new B.ae(A1.AX,14,null,null,null,null)
D.bBZ=new B.ae(A.ea,28,A.cq,null,null,null)
D.bCa=new B.ae(A.py,20,A.c,null,null,null)
D.bCh=new B.ae(A.xH,null,null,null,null,null)
D.bCn=new B.ae(A.js,18,A.ht,null,null,null)
D.bCs=new B.ae(A.l3,null,null,null,null,null)
D.bCV=new B.ae(A.ZC,28,A.c,null,null,null)
D.bxf=new B.a_(63065,"MaterialIcons",!1)
D.bD3=new B.ae(D.bxf,15,A.c,null,null,null)
D.bxl=new B.a_(63113,"MaterialIcons",!1)
D.bD9=new B.ae(D.bxl,null,A.ad,null,null,null)
D.bDx=new B.ae(A.v3,22,A.bJ,null,null,null)
D.bDR=new B.ae(A.xs,18,null,null,null,null)
D.bDX=new B.ae(A.B_,12,A.c,null,null,null)
D.bzq=new B.a_(983687,"MaterialIcons",!1)
D.bE7=new B.ae(D.bzq,null,A.bl,null,null,null)
D.bEe=new B.ae(A.hw,null,A.bl,null,null,null)
D.bEx=new B.ae(A.ov,22,A.c,null,null,null)
D.bEB=new B.ae(A.cv,13,A.c,null,null,null)
D.bEH=new B.ae(A.ea,26,A.aE,null,null,null)
D.bEK=new B.ae(A.qO,26,A.c,null,null,null)
D.MQ=new B.ae(A.j8,8,A.c,null,null,null)
D.bF1=new B.ae(A.px,40,A.c,null,null,null)
D.bF2=new B.ae(A.buY,null,null,null,null,null)
D.bF6=new B.ae(A.tw,20,null,null,null,null)
D.bzp=new B.a_(983683,"MaterialIcons",!1)
D.bFg=new B.ae(D.bzp,null,A.aZ,null,null,null)
D.bFh=new B.ae(A.j8,16,A.bl,null,null,null)
D.bFC=new B.ae(A.qQ,null,null,null,null,null)
D.akR=new B.ae(A.v6,22,A.c,null,null,null)
D.bFG=new B.ae(A.dS,17,A.c,null,null,null)
D.akS=new B.ae(A.j8,9,A.c,null,null,null)
D.bFL=new B.ae(A.v0,null,null,null,null,null)
D.bve=new B.a_(57744,"MaterialIcons",!1)
D.bFS=new B.ae(D.bve,null,null,null,null,null)
D.bFV=new B.ae(A.v0,16,null,null,null,null)
D.bzY=new B.a_(985181,"MaterialIcons",!1)
D.FE=new B.ae(D.bzY,null,null,null,null,null)
D.bG6=new B.ae(A.l3,16,A.bJ,null,null,null)
D.bzi=new B.a_(983615,"MaterialIcons",!1)
D.bG8=new B.ae(D.bzi,12,A.c,null,null,null)
D.akY=new B.ae(A.xn,16,null,null,null,null)
D.bGg=new B.ae(A.dS,21,A.c,null,null,null)
D.bGl=new B.ae(A.hw,17,A.c,null,null,null)
D.bGm=new B.ae(A.v3,null,null,null,null,null)
D.bGB=new B.ae(A.a_0,20,A.ay,null,null,null)
D.bGQ=new B.ae(A.pw,22,E.mH,null,null,null)
D.bGX=new B.ae(A.pv,13,A.ad,null,null,null)
D.bGZ=new B.ae(A.ajW,20,A.ay,null,null,null)
D.buW=new B.a_(57495,"MaterialIcons",!1)
D.bH3=new B.ae(D.buW,null,null,null,null,null)
D.bH7=new B.ae(A.nF,18,A.c,null,null,null)
D.bHs=new B.ae(A.tz,28,A.c,null,null,null)
D.bHC=new B.ae(D.aiO,null,A.aD,null,null,null)
D.bHD=new B.ae(A.py,22,A.c,null,null,null)
D.al6=new B.ae(A.YN,16,null,null,null,null)
D.bIo=new B.ae(A.v3,32,A.c,null,null,null)
D.bJ6=new B.ae(A.iP,22,A.c,null,null,null)
D.bJa=new B.ae(A.qO,22,A.ad,null,null,null)
D.all=new B.ae(A.tn,null,A.bZ,null,null,null)
D.bK3=new B.ae(A.v4,18,null,null,null,null)
D.bKF=new B.ae(A.dS,18,A.cr,null,null,null)
D.a_p=new B.ae(A.cv,18,A.ay,null,null,null)
D.bKL=new B.ae(A.ajQ,null,null,null,null,null)
D.bLa=new B.e_(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aNH,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.eMP=new B.F(!0,A.bI,null,null,null,null,null,A.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bLs=new B.e_(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eMP,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.bLT=new B.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.cMe=w([A.dT,A.aD],x.O)
D.bN3=new B.a6(A.a3,A.a7,A.x,D.cMe,null,null)
D.bNf=new B.a6(A.b0,A.b5,A.SR,A.aso,null,null)
D.b3E=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b7y=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bam=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b5I=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cxw=w([D.b3E,D.b7y,D.bam,D.b5I],x.O)
D.bNy=new B.a6(A.ax,A.aC,A.x,D.cxw,A.Gc,null)
D.d6x=w([A.cy,A.bA,A.b3],x.O)
D.bNA=new B.a6(A.b0,A.b5,A.SR,D.d6x,null,null)
D.d7O=w([A.bl,A.c8],x.O)
D.bNE=new B.a6(A.a3,A.a7,A.x,D.d7O,null,null)
D.d37=w([A.hs,A.dm,A.aL],x.O)
D.bNG=new B.a6(A.ax,A.aC,A.x,D.d37,null,null)
D.cRR=w([A.cY,A.f6],x.O)
D.bNK=new B.a6(A.a3,A.a7,A.x,D.cRR,null,null)
D.d6s=w([N.kZ,A.dm],x.O)
D.am6=new B.a6(A.a3,A.a7,A.x,D.d6s,null,null)
D.b84=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.d6p=w([D.b84,D.wM,A.bU],x.O)
D.bNP=new B.a6(A.a3,A.a7,A.x,D.d6p,null,null)
D.cNQ=w([A.bc,A.d2,A.fu],x.O)
D.bNQ=new B.a6(A.ax,A.aC,A.x,D.cNQ,null,null)
D.N3=new B.a6(A.a3,A.a7,A.x,A.Gp,null,null)
D.bfz=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cqE=w([D.bfz,A.bU,A.j0],x.O)
D.amb=new B.a6(A.ax,A.aC,A.x,D.cqE,null,null)
D.cWL=w([A.wA,A.av,D.A0],x.O)
D.bON=new B.a6(A.a3,A.a7,A.x,D.cWL,null,null)
D.bgH=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b6v=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bbl=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cMZ=w([D.bgH,D.b6v,D.bbl],x.O)
D.amc=new B.a6(A.a3,A.a7,A.x,D.cMZ,null,null)
D.b85=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bQJ=w([Aq.adH,D.b85],x.O)
D.bOW=new B.a6(A.b0,A.b5,A.x,D.bQJ,null,null)
D.cL8=w([A.mG,A.bL],x.O)
D.bP_=new B.a6(A.b0,A.b5,A.x,D.cL8,null,null)
D.d0s=w([A.aD,A.dN],x.O)
D.bP5=new B.a6(A.a3,A.a7,A.x,D.d0s,null,null)
D.acI=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.au2=w([D.acI,D.iZ,D.JF],x.O)
D.bPx=new B.a6(A.ax,A.aC,A.x,D.au2,null,null)
D.cqw=w([A.du,A.dJ],x.O)
D.bPI=new B.a6(A.b0,A.b5,A.x,D.cqw,null,null)
D.cYM=w([A.ut,At.DL],x.O)
D.bQv=new B.a6(A.a3,A.a7,A.x,D.cYM,null,null)
D.feK=new B.x("Which Bio link?",null,A.ct,null,null,null,null,null,null,null,null,null)
D.bQG=new B.ps(null,D.feK,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.y7=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a3a=new C.kI(2,"elegantNavy")
D.fI3=w([A.VD,D.iZ,A.bU],x.O)
D.jv=new C.x6(0,"classic")
D.a2Y=new C.jf("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a3a,4294967035,4279378237,4290283019,D.jv)
D.aD2=new C.kI(3,"elegantGold")
D.b3d=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b47=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.abt=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fHw=w([D.b3d,D.b47,D.abt],x.O)
D.a2W=new C.jf("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aD2,4294966515,4281016592,4289102906,D.jv)
D.dss=new C.kI(22,"goldRibbon")
D.fHs=w([A.VD,D.iZ,A.hT],x.O)
D.a2P=new C.jf("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dss,4294967035,4279378237,4291404327,D.jv)
D.dst=new C.kI(23,"goldBaroque")
D.ac1=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fHy=w([D.ac1,A.av,A.j0],x.O)
D.a2Q=new C.jf("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dst,4294964964,4283053072,4292128567,D.jv)
D.dsv=new C.kI(4,"elegantEmerald")
D.b5g=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b64=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fHE=w([D.b5g,D.b64,A.hT],x.O)
D.a2R=new C.jf("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dsv,4294376440,4279122734,4291404327,D.jv)
D.dsw=new C.kI(5,"elegantBurgundy")
D.b9n=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fHL=w([D.b9n,A.aaO,A.hT],x.O)
D.a2U=new C.jf("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dsw,4294965238,4283043359,4291404327,D.jv)
D.dsp=new C.kI(19,"goldFiligree")
D.Kf=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fHz=w([D.Kf,A.av,A.j0],x.O)
D.a2S=new C.jf("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dsp,4294966259,4279378237,4292128567,D.jv)
D.dsq=new C.kI(20,"goldLaurel")
D.bfp=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fHM=w([A.Jz,A.hT,D.bfp],x.O)
D.a2T=new C.jf("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dsq,4294966776,4282000405,4291404327,D.jv)
D.dsr=new C.kI(21,"goldCrest")
D.aaH=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bfw=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fHB=w([D.aaH,A.av,D.bfw],x.O)
D.a2X=new C.jf("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dsr,4294965484,4283053072,4292128567,D.jv)
D.dsu=new C.kI(24,"goldStar")
D.bgC=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fHF=w([D.bgC,A.av,D.iZ],x.O)
D.a2V=new C.jf("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dsu,4294966518,4279378237,4292128567,D.jv)
D.FP=w([D.a2Y,D.a2W,D.a2P,D.a2Q,D.a2R,D.a2U,D.a2S,D.a2T,D.a2X,D.a2V],x.h)
D.pK=new C.mj(0,"blank")
D.QC=new C.mj(1,"title")
D.ml=new C.mj(2,"titleContent")
D.dN9=new C.mj(3,"twoColumn")
D.BU=new C.mj(4,"section")
D.dNa=new C.mj(5,"comparison")
D.GZ=new C.mj(6,"flashcard")
D.H_=new C.mj(7,"quiz")
D.H0=new C.mj(8,"worksheet")
D.amy=w([D.pK,D.QC,D.ml,D.dN9,D.BU,D.dNa,D.GZ,D.H_,D.H0],B.aA("P<mj>"))
D.bQW=w([0,0,0],x.cA)
D.auY=w([Z.V2,A.dJ],x.O)
D.kf=w([A.bU,A.bJ,A.hS,A.hB,D.A0],x.O)
D.dom=new C.iU("fireworks","Royal Fireworks","Thank you for celebrating with us",D.auY,D.kf)
D.bfH=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b9l=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cLl=w([D.bfH,D.b9l],x.O)
D.dod=new C.iU("confetti","Golden Confetti","Together we rise",D.cLl,D.kf)
D.cIF=w([A.ni,A.UJ],x.O)
D.doe=new C.iU("crown","Crown of Glory","Built for our community",D.cIF,D.kf)
D.b6m=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b90=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cP7=w([D.b6m,D.b90],x.O)
D.tD=w([A.bI,A.aP,A.c,A.aK,A.ak],x.O)
D.do8=new C.iU("aurora","Aurora Gala","A brighter future, together",D.cP7,D.tD)
D.bao=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cYS=w([G.aam,D.bao],x.O)
D.dop=new C.iU("champagne","Champagne Toast","Cheers to every member",D.cYS,D.kf)
D.doq=new C.iU("diamonds","Diamond Rain","Every member is a jewel",W.avy,D.tD)
D.b3Z=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b8x=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d2r=w([D.b3Z,D.b8x],x.O)
D.do3=new C.iU("starburst","Golden Starburst","Thank you!",D.d2r,D.kf)
D.bQP=w([A.f5,A.wE],x.O)
D.aat=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.OB=w([A.oa,A.ij,A.uG,A.o4,D.aat],x.O)
D.dox=new C.iU("balloons","Luxury Balloons","Let's celebrate",D.bQP,D.OB)
D.cHZ=w([A.US,A.w],x.O)
D.dol=new C.iU("galaxy","Galaxy Spiral","The sky is not the limit",D.cHZ,D.tD)
D.bdU=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cVC=w([A.k6,D.bdU],x.O)
D.dog=new C.iU("redcarpet","Red Carpet","Tonight we shine",D.cVC,D.kf)
D.bbW=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bab=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cZL=w([D.bbW,D.bab],x.O)
D.do5=new C.iU("coins","Gold Coin Rain","Every contribution counts",D.cZL,D.kf)
D.d5_=w([A.du,A.hA],x.O)
D.dob=new C.iU("lanterns","Sky Lanterns","Lighting the way together",D.d5_,D.kf)
D.b7g=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cG4=w([A.wG,D.b7g],x.O)
D.do7=new C.iU("hearts","Floating Hearts","Made with love",D.cG4,D.OB)
D.b4A=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b5m=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.d6n=w([D.b4A,D.b5m],x.O)
D.dow=new C.iU("petals","Rose Petals","Thank you, from our hearts",D.d6n,D.OB)
D.beN=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d2L=w([A.kY,D.beN],x.O)
D.do2=new C.iU("butterflies","Golden Butterflies","New beginnings",D.d2L,D.kf)
D.bbi=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cGZ=w([D.bbi,A.w],x.O)
D.doo=new C.iU("neon","Neon Night","Let's go!",D.cGZ,D.tD)
D.b8g=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d0C=w([A.JW,D.b8g],x.O)
D.dor=new C.iU("disco","Disco Ball","Party time",D.d0C,D.tD)
D.bbO=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d0b=w([A.hs,D.bbO],x.O)
D.do6=new C.iU("sunrise","Golden Sunrise","A new day for our community",D.d0b,D.kf)
D.d_P=w([A.qq,A.dJ],x.O)
D.dos=new C.iU("pearls","Ocean Pearls","Deep roots, bright future",D.d_P,D.tD)
D.b6r=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d02=w([D.b6r,A.dJ],x.O)
D.dov=new C.iU("snow","Winter Gala","Warm wishes to all",D.d02,D.tD)
D.b3l=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b4j=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.d5m=w([D.b3l,D.b4j],x.O)
D.dok=new C.iU("laurel","Laurel Victory","We did it together",D.d5m,D.kf)
D.b3c=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b8X=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cFd=w([D.b3c,D.b8X],x.O)
D.dou=new C.iU("ribbons","Silk Ribbons","Elegance in every step",D.cFd,D.kf)
D.b9W=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cqt=w([G.A_,D.b9W],x.O)
D.doh=new C.iU("kente","Kente Pride","Proud of our roots",D.cqt,D.kf)
D.bcs=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bf3=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cQC=w([D.bcs,D.bf3],x.O)
D.doc=new C.iU("trophy","Trophy Shine","Winners together",D.cQC,D.kf)
D.d08=w([Al.JL,A.w],x.O)
D.do4=new C.iU("shooting","Shooting Stars","Make a wish",D.d08,D.tD)
D.b3s=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.adx=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.d5B=w([D.b3s,D.adx],x.O)
D.doi=new C.iU("bokeh","Golden Bokeh","Shine bright",D.d5B,D.kf)
D.b3O=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cWp=w([D.b3O,A.w],x.O)
D.doa=new C.iU("orbits","Golden Orbits","Always moving forward",D.cWp,D.kf)
D.beO=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cTd=w([A.abr,D.beO],x.O)
D.dof=new C.iU("flowers","Blooming Garden","Growing together",D.cTd,D.OB)
D.b3C=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b4c=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.d4t=w([D.b3C,D.b4c],x.O)
D.do9=new C.iU("music","Music Party","Celebrate with us",D.d4t,D.tD)
D.b56=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bfs=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cGg=w([D.b56,D.bfs],x.O)
D.dot=new C.iU("mandala","Royal Mandala","Harmony and unity",D.cGg,D.kf)
D.cTi=w([G.A_,D.adx],x.O)
D.don=new C.iU("sparklers","Golden Sparklers","Light up the night",D.cTi,D.kf)
D.doj=new C.iU("city","City Lights","The whole city celebrates",D.auY,D.kf)
D.FY=w([D.dom,D.dod,D.doe,D.do8,D.dop,D.doq,D.do3,D.dox,D.dol,D.dog,D.do5,D.dob,D.do7,D.dow,D.do2,D.doo,D.dor,D.do6,D.dos,D.dov,D.dok,D.dou,D.doh,D.doc,D.do4,D.doi,D.doa,D.dof,D.do9,D.dot,D.don,D.doj],B.aA("P<iU>"))
D.e9U=new B.z("","No ring")
D.eo0=new B.z("platinum","Platinum")
D.eld=new B.z("glow","Glow")
D.edb=new B.z("double","Double line")
D.ec7=new B.z("framed","Gallery frame")
D.e9z=new B.z("rosegold","Rose gold")
D.elW=new B.z("jewels","Jeweled")
D.eiJ=new B.z("aurora","Aurora")
D.Bg=w([D.e9U,A.a4s,D.eo0,D.eld,H.aJv,D.edb,A.a4u,D.ec7,D.e9z,D.elW,D.eiJ],x.L)
D.ca7=w([D.a2S,D.a2T,D.a2X,D.a2P,D.a2Q,D.a2V],x.h)
D.caw=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CONSTRUCTION LAB: a trade school in real looking 3D, opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 9 apps inside the TV screen: NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, Growth Income, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.bGu=new B.ae(G.ahF,16,null,null,null,null)
D.aZC=new B.v6(A.bg,D.bGu,null,x.U)
D.bvn=new B.a_(58027,"MaterialIcons",!1)
D.bAc=new B.ae(D.bvn,16,null,null,null,null)
D.aZA=new B.v6(A.L,D.bAc,null,x.U)
D.bvo=new B.a_(58030,"MaterialIcons",!1)
D.bEd=new B.ae(D.bvo,16,null,null,null,null)
D.aZD=new B.v6(A.dK,D.bEd,null,x.U)
D.cgi=w([D.aZC,D.aZA,D.aZD],B.aA("P<v6<pI>>"))
D.cnR=w([A.A4,A.he],x.O)
D.cnS=w([A.bc,A.bk,A.fu],x.O)
D.Oq=w([A.bJ,A.hB,A.hS,A.av,A.o4],x.O)
D.cqz=w([A.bU,D.iZ,D.JF],x.O)
D.cr6=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.e7E=new B.z(4278913286,4280030216)
D.e7W=new B.z(4279373061,4278518787)
D.e82=new B.z(4279898630,4278847235)
D.cQ3=w([D.e7E,D.e7W,D.e82],x.n)
D.cM_=w(["\u265b","\u269c","\u2726"],x.s)
D.dsn=new C.x8("Royal Onyx & Gold",D.cQ3,4292128567,4294370209,4294965479,3874020544,D.cM_)
D.e7r=new B.z(4278326799,4278598442)
D.e7t=new B.z(4278395929,4278258953)
D.e7A=new B.z(4278599728,4278327826)
D.d4R=w([D.e7r,D.e7t,D.e7A],x.n)
D.cGS=w(["\u269c","\u2756","\u2727"],x.s)
D.dsk=new C.x8("Imperial Emerald",D.d4R,4293050997,4294699968,4294180856,3872254170,D.cGS)
D.e7u=new B.z(4278455076,4278918747)
D.e7z=new B.z(4278587439,4278322714)
D.e7N=new B.z(4279051376,4278455076)
D.d33=w([D.e7u,D.e7z,D.e7N],x.n)
D.cX_=w(["\u2654","\u2726","\u2748"],x.s)
D.dse=new C.x8("Sapphire Crown",D.d33,4291417834,4294967295,4294310143,3871986666,D.cX_)
D.e80=new B.z(4279894534,4283041554)
D.e8c=new B.z(4281008906,4279042307)
D.e8k=new B.z(4284221976,4279894534)
D.d8k=w([D.e80,D.e8c,D.e8k],x.n)
D.cI6=w(["\u265b","\u2766","\u2726"],x.s)
D.dsg=new C.x8("Ruby Throne",D.d8k,4293378685,4294963145,4294964466,3874213833,D.cI6)
D.e7V=new B.z(4279371039,4281995100)
D.e84=new B.z(4280092723,4278714896)
D.e8h=new B.z(4283045242,4279371039)
D.d5c=w([D.e7V,D.e84,D.e8h],x.n)
D.d3p=w(["\u2655","\u2756","\u2727"],x.s)
D.dsl=new C.x8("Amethyst Palace",D.d5c,4293314984,4294963421,4294702591,3873229802,D.d3p)
D.e7w=new B.z(4278519045,4280032287)
D.e7O=new B.z(4279111184,4278321666)
D.e89=new B.z(4280492839,4278716426)
D.d1Z=w([D.e7w,D.e7O,D.e89],x.n)
D.cVp=w(["\u2726","\u25c6","\u2742"],x.s)
D.dsi=new C.x8("Obsidian & Platinum",D.d1Z,4293256418,4294967295,4294638330,3872378836,D.cVp)
D.e81=new B.z(4279896588,4282194463)
D.e8a=new B.z(4280553487,4279043334)
D.e8i=new B.z(4283048488,4279896588)
D.cUW=w([D.e81,D.e8a,D.e8i],x.n)
D.d6L=w(["\u2766","\u273f","\u2727"],x.s)
D.dsf=new C.x8("Rose Gold Velvet",D.cUW,4293440672,4294960345,4294964979,3874214602,D.d6L)
D.e7x=new B.z(4278520340,4279180595)
D.e7C=new B.z(4278718495,4278322443)
D.e7Z=new B.z(4279510591,4278520340)
D.cxf=w([D.e7x,D.e7C,D.e7Z],x.n)
D.cW4=w(["\u269c","\u2736","\u2756"],x.s)
D.dsj=new C.x8("Midnight Brass",D.cxf,4291405148,4293975208,4294439914,3872837564,D.cW4)
D.e8x=new B.z(4294703086,4293780428)
D.e8t=new B.z(4294307549,4293187253)
D.e8y=new B.z(4294966517,4293977807)
D.cK8=w([D.e8x,D.e8t,D.e8y],x.n)
D.cWs=w(["\u269c","\u265b","\u2726"],x.s)
D.dsm=new C.x8("Ivory Marble & Gold",D.cK8,4289760572,4286209048,4280951062,3863625518,D.cWs)
D.e7I=new B.z(4278978566,4280555024)
D.e7Y=new B.z(4279504137,4278518530)
D.e8e=new B.z(4281211923,4278978566)
D.cHY=w([D.e7I,D.e7Y,D.e8e],x.n)
D.d46=w(["\u2742","\u2726","\u265c"],x.s)
D.dsh=new C.x8("Onyx & Copper",D.cHY,4291856987,4294365880,4294964718,3873885630,D.d46)
D.cre=w([D.dsn,D.dsk,D.dse,D.dsg,D.dsl,D.dsi,D.dsf,D.dsj,D.dsm,D.dsh],B.aA("P<x8>"))
D.ctv=w([A.av,D.A0,A.hB],x.O)
D.efc=new B.z("Original",null)
D.efk=new B.z("Wide 16:9",1.7777777777777777)
D.ehv=new B.z("Landscape 3:2",1.5)
D.eeH=new B.z("Photo 4:3",1.3333333333333333)
D.egm=new B.z("Square",1)
D.erv=new B.z("Portrait 3:4",0.75)
D.asw=w([D.efc,D.efk,D.ehv,D.eeH,D.egm,D.erv],B.aA("P<+(n,O?)>"))
D.asx=w([A.hB,A.bY,A.ba,A.bz],x.O)
D.ehF=new B.z("","Original")
D.ejr=new B.z("circle","Circle")
D.eoL=new B.z("rounded","Rounded")
D.epE=new B.z("triangle","Triangle")
D.elr=new B.z("hexagon","Hexagon")
D.ejQ=new B.z("diamond","Diamond")
D.eiI=new B.z("arch","Arch")
D.Bl=w([D.ehF,D.ejr,D.eoL,D.epE,D.elr,D.ejQ,D.eiI],x.L)
D.dns=new C.l2("classic_blue","Classic Blue","Normal",A.bl,A.c,A.k9,A.dp,A.aJ)
D.dnI=new C.l2("campus_green","Campus Green","Normal",A.aZ,A.mE,A.rQ,A.h2,A.es)
D.dnz=new C.l2("warm_sand","Warm Sand","Normal",A.e1,A.hS,A.bJ,A.ip,A.nm)
D.dnG=new C.l2("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aK,A.M,A.aJ)
D.dnr=new C.l2("coral_fresh","Coral Fresh","Normal",A.cb,A.il,A.qi,A.jH,A.rK)
D.dnH=new C.l2("lavender_calm","Lavender Calm","Normal",A.b3,A.p4,A.zR,A.p7,A.jh)
D.dnt=new C.l2("ocean_breeze","Ocean Breeze","Normal",A.f6,A.qt,A.rF,A.uv,A.no)
D.acO=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dnE=new C.l2("berry_pop","Berry Pop","Normal",A.fe,D.acO,A.k3,G.W3,A.E7)
D.dnu=new C.l2("midnight_pro","Midnight Pro","Professional",A.aD,A.M,A.du,A.k3,A.cm)
D.dnD=new C.l2("executive_navy","Executive Navy","Professional",A.d6,A.acd,A.dp,A.kW,A.bI)
D.dnB=new C.l2("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bj,A.M,A.aP,A.cm)
D.dnv=new C.l2("corporate_steel","Corporate Steel","Professional",A.mC,A.M,A.m0,A.ff,A.bI)
D.dny=new C.l2("gold_luxe","Gold Luxe","Luxury",A.o8,A.dB,A.o9,A.lr,A.bJ)
D.bbR=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dnC=new C.l2("rose_gold_elite","Rose Gold Elite","Luxury",A.he,D.bbR,A.VU,A.ij,A.o4)
D.dnF=new C.l2("platinum_night","Platinum Night","Luxury",A.cm,A.dJ,A.bj,A.aP,A.aK)
D.dnJ=new C.l2("emerald_prestige","Emerald Prestige","Luxury",A.aT,A.pa,A.eW,A.pg,A.ji)
D.dnq=new C.l2("royal_purple","Royal Purple","Luxury",A.mD,A.V8,A.jh,A.k3,A.Jy)
D.dnA=new C.l2("neon_pitch","Neon Pitch","Bold",A.ba,A.dJ,A.M,A.b4,A.aK)
D.dnx=new C.l2("crimson_impact","Crimson Impact","Bold",A.bL,A.k6,A.eG,A.t1,A.f9)
D.dnw=new C.l2("sunset_gallery","Sunset Gallery","Bold",A.fA,A.rK,A.jH,A.qi,A.ob)
D.G6=w([D.dns,D.dnI,D.dnz,D.dnG,D.dnr,D.dnH,D.dnt,D.dnE,D.dnu,D.dnD,D.dnB,D.dnv,D.dny,D.dnC,D.dnF,D.dnJ,D.dnq,D.dnA,D.dnx,D.dnw],B.aA("P<l2>"))
D.cEV=w([A.bU,D.iZ],x.O)
D.cVa=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eiu=new B.z("Faces & people",D.cVa)
D.ctz=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.e6C=new B.z("Ideas & work",D.ctz)
D.cMs=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.elw=new B.z("Nature",D.cMs)
D.cVi=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.efa=new B.z("Places & things",D.cVi)
D.cPE=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eiN=new B.z("Symbols",D.cPE)
D.cF0=w([D.eiu,D.e6C,D.elw,D.efa,D.eiN],B.aA("P<+(n,ak<n>)>"))
D.b3H=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cFo=w([A.bU,D.abt,D.b3H],x.O)
D.aYY=new B.ac(0,A.G,A.Jv,A.aDR,40)
D.aYF=new B.ac(0,A.G,A.nk,A.ej,8)
D.cFz=w([D.aYY,D.aYF],x.V)
D.cG0=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.asW=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a0A=w([A.hB,A.fu,A.bL,A.aA,A.cb],x.O)
D.cGM=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.abH=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cGX=w([A.VL,D.abH,A.VL],x.O)
D.cH1=w([A.hT,D.iZ,D.JF],x.O)
D.ef_=new B.z(A.bg,D.Zm)
D.egh=new B.z(A.L,D.Zl)
D.eaw=new B.z(A.dK,D.Zn)
D.cHT=w([D.ef_,D.egh,D.eaw],B.aA("P<+(pI,a_)>"))
D.cP=new C.HV(0,"text")
D.le=new C.HV(1,"image")
D.eZ=new C.HV(2,"shape")
D.QB=new C.HV(3,"pdf")
D.kM=new C.HV(4,"signature")
D.a3h=new C.HV(5,"bio")
D.cIJ=w([D.cP,D.le,D.eZ,D.QB,D.kM,D.a3h],B.aA("P<HV>"))
D.cIK=w([A.bi,A.cD],B.aA("P<GS>"))
D.cJk=w(["School","Documents","Sign & present"],x.s)
D.aZ2=new B.ac(0,A.G,A.adn,A.tW,28)
D.cJE=w([D.aZ2],x.V)
D.cJW=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.OJ=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.atj=w([A.hB,A.E6,A.aK,A.c,A.oa,A.av],x.O)
D.eqT=new B.z(0.1,0.08)
D.elu=new B.z(0.3,0.05)
D.ea3=new B.z(0.55,0.1)
D.ee1=new B.z(0.8,0.06)
D.egZ=new B.z(0.92,0.16)
D.egw=new B.z(0.2,0.2)
D.eet=new B.z(0.7,0.22)
D.ekb=new B.z(0.05,0.4)
D.ehn=new B.z(0.95,0.45)
D.eaJ=new B.z(0.12,0.7)
D.ecQ=new B.z(0.88,0.75)
D.ecY=new B.z(0.4,0.9)
D.e8M=new B.z(0.65,0.93)
D.edF=new B.z(0.25,0.97)
D.eeX=new B.z(0.85,0.9)
D.ebx=new B.z(0.5,0.04)
D.cLg=w([D.eqT,D.elu,D.ea3,D.ee1,D.egZ,D.egw,D.eet,D.ekb,D.ehn,D.eaJ,D.ecQ,D.ecY,D.e8M,D.edF,D.eeX,D.ebx],x.G)
D.cLn=w([A.c,A.he,A.aW,A.aT],x.O)
D.dOM=new C.jx("office_blue","Office Blue",A.bl,A.dp,A.aJ,A.c,A.k9)
D.dOX=new C.jx("campus_green","Campus Green",A.aZ,A.h2,A.es,A.mE,A.rQ)
D.dON=new C.jx("sunset","Sunset",A.fA,A.jH,A.nm,A.il,A.qi)
D.dOO=new C.jx("midnight","Midnight",A.aD,A.k3,A.cm,A.M,A.du)
D.dOZ=new C.jx("classic","Classic",A.dm,A.dB,A.ls,A.hS,A.fZ)
D.dOW=new C.jx("rose_gold","Rose Gold",A.he,A.wH,A.wG,A.uG,A.A4)
D.dOH=new C.jx("ocean_teal","Ocean Teal",A.f6,A.uv,A.no,A.qt,A.rF)
D.dOG=new C.jx("slate_pro","Slate Pro",A.bv,A.M,A.aJ,A.aP,A.aK)
D.dOF=new C.jx("neon_night","Neon Night",A.ba,A.b4,A.aK,A.dJ,A.M)
D.dOR=new C.jx("lavender","Lavender",A.b3,A.p7,A.jh,A.p4,A.zR)
D.dOT=new C.jx("coral","Coral",A.cb,A.jH,A.rK,A.il,A.ob)
D.dOI=new C.jx("forest","Forest",A.h_,A.e8,A.cC,A.lt,A.ew)
D.dOJ=new C.jx("berry","Berry",A.fe,G.W3,A.E7,D.acO,A.k3)
D.dOQ=new C.jx("sand","Sand",A.e1,A.ip,A.nm,A.hS,A.bJ)
D.dOV=new C.jx("ice","Ice",A.mC,A.JY,A.aJ,A.mA,A.ff)
D.dOL=new C.jx("charcoal","Charcoal",A.ak,A.aP,A.cm,A.bj,A.M)
D.dOE=new C.jx("mint","Mint",A.aT,A.fs,A.h2,A.lt,A.pg)
D.dOU=new C.jx("crimson","Crimson",A.bL,A.mG,A.k6,A.E4,A.t1)
D.b63=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dOP=new C.jx("gold","Gold",A.o8,A.ut,A.o9,D.b63,A.lr)
D.dOS=new C.jx("aqua","Aqua",A.bM,A.DU,A.o6,A.p6,A.od)
D.dOK=new C.jx("plum","Plum",A.mD,A.wE,A.E7,A.DI,A.rX)
D.dOY=new C.jx("steel","Steel",A.d6,A.dp,A.bj,A.k9,A.kW)
D.a0P=w([D.dOM,D.dOX,D.dON,D.dOO,D.dOZ,D.dOW,D.dOH,D.dOG,D.dOF,D.dOR,D.dOT,D.dOI,D.dOJ,D.dOQ,D.dOV,D.dOL,D.dOE,D.dOU,D.dOP,D.dOS,D.dOK,D.dOY],B.aA("P<jx>"))
D.cLH=w([A.bU,A.j0],x.O)
D.QD=new C.hu(10,"rotate3d")
D.H2=new C.hu(8,"flip")
D.aDl=new C.hu(19,"spiral")
D.pL=new C.hu(16,"bounce")
D.aDo=new C.hu(9,"flipVertical")
D.cLI=w([D.QD,D.H2,D.aDl,D.pL,D.aDo],x.i)
D.e4=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cM2=w([0.62,1],x.x)
D.cMA=w([0,0.32,0.68,1],x.x)
D.mm=new C.hu(6,"zoom")
D.tQ=new C.hu(4,"slideUp")
D.tP=new C.hu(2,"slideLeft")
D.cMJ=w([D.mm,D.H2,D.tQ,D.QD,D.tP],x.i)
D.cNc=w([A.bY,A.he,A.ij,A.hB,A.c],x.O)
D.aYT=new B.ac(0,A.G,D.abT,A.tW,30)
D.cNV=w([D.aYT],x.V)
D.dYa=new B.u(0,-2.5)
D.dY0=new B.u(-2.5,0)
D.dWJ=new B.u(2.5,0)
D.cNY=w([A.QT,A.a3E,A.aEm,A.a3D,D.dYa,H.aEi,D.dY0,D.dWJ],x.dN)
D.Gd=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cOq=w([23,114,69,56,80,144],x.t)
D.cOP=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cPe=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cQG=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cQK=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bf=new C.un(0,"rectangle")
D.eI=new C.un(1,"circle")
D.kN=new C.un(6,"hexagon")
D.cQW=w([D.bf,D.eI,D.kN],x.m)
D.nM=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.acV=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cRt=w([D.acV,A.e8],x.O)
D.eae=new B.z("","Classic")
D.e8Z=new B.z("caps","Bold caps")
D.eke=new B.z("elegant","Elegant")
D.ep3=new B.z("shadow","Shadow")
D.een=new B.z("neon","Neon glow")
D.enH=new B.z("outline","Outline")
D.emW=new B.z("marker","Highlighter")
D.epe=new B.z("stamp","Stamp")
D.eoG=new B.z("retro","Retro")
D.edm=new B.z("threed","3D")
D.ekK=new B.z("fire","Fire")
D.elF=new B.z("ice","Ice")
D.ejq=new B.z("chalk","Chalk")
D.ejv=new B.z("comic","Comic")
D.epg=new B.z("sunset","Sunset")
D.eqk=new B.z("softglow","Soft glow")
D.emD=new B.z("lowercase","Lowercase")
D.ejX=new B.z("double","Echo")
D.eqr=new B.z("whisper","Whisper")
D.aua=w([D.eae,D.e8Z,D.eke,D.ep3,D.een,D.enH,D.emW,D.epe,D.eoG,D.edm,H.aJt,D.ekK,D.elF,D.ejq,D.ejv,A.a4s,D.epg,D.eqk,D.emD,D.ejX,D.eqr],x.L)
D.cSG=w([3,5,7,10,12,15],x.t)
D.cTY=w([A.bY,A.bJ,A.c,A.ex,A.cy],x.O)
D.df5=new C.rV(10,"cardWorld")
D.BM=new C.AP(3,"rounded")
D.dvo=new C.l5("world","NGMY World",D.df5,D.BM,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.df6=new C.rV(11,"cardSplit")
D.dvk=new C.l5("business","Business Wire",D.df6,D.BM,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.df7=new C.rV(12,"cardBreaking")
D.dvx=new C.l5("breaking","Breaking Red",D.df7,D.BM,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.df8=new C.rV(13,"cardFeature")
D.dvq=new C.l5("feature","Tech Feature",D.df8,D.BM,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aBU=new C.rV(6,"circle")
D.aBO=new C.AP(4,"circle")
D.dvu=new C.l5("parchment","Royal Circle",D.aBU,D.aBO,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dvj=new C.l5("ocean","Blue Ocean",D.aBU,D.aBO,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dfb=new C.rV(7,"rail")
D.aBN=new C.AP(1,"double")
D.dvl=new C.l5("forest","Green Leaf",D.dfb,D.aBN,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aBR=new C.rV(1,"sideBySide")
D.dvz=new C.l5("herald","NGMY Herald",D.aBR,D.BM,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aBQ=new C.rV(0,"classic")
D.a2u=new C.AP(9,"shadow")
D.dvy=new C.l5("daily","The Daily",D.aBQ,D.a2u,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.df9=new C.rV(2,"splash")
D.aBP=new C.AP(6,"cutCorner")
D.dvi=new C.l5("tabloid","Big Tabloid",D.df9,D.aBP,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aBV=new C.rV(9,"minimal")
D.dvt=new C.l5("modern","Modern Digest",D.aBV,D.BM,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aBS=new C.rV(3,"magazine")
D.aBM=new C.AP(0,"plain")
D.dvp=new C.l5("midnight","Midnight Edition",D.aBS,D.aBM,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dfc=new C.rV(8,"banner")
D.dvr=new C.l5("metro","Metro Wire",D.dfc,D.aBP,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.df4=new C.AP(8,"arch")
D.dvs=new C.l5("sunrise","Sunrise Post",D.aBS,D.df4,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aBT=new C.rV(5,"scrapbook")
D.df3=new C.AP(5,"tape")
D.dvn=new C.l5("neon","Neon Beat",D.aBT,D.df3,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dfa=new C.rV(4,"wrap")
D.dvA=new C.l5("gold","Golden Press",D.dfa,D.a2u,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dvB=new C.l5("minimal","Paper White",D.aBV,D.a2u,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dvm=new C.l5("gazette","Fresh Gazette",D.aBQ,D.aBN,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dvw=new C.l5("times","Classic Times",D.aBR,D.aBM,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Q9=new C.AP(2,"polaroid")
D.dvv=new C.l5("scrapbook","Memory Scrapbook",D.aBT,D.Q9,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a13=w([D.dvo,D.dvk,D.dvx,D.dvq,D.dvu,D.dvj,D.dvl,D.dvz,D.dvy,D.dvi,D.dvt,D.dvp,D.dvr,D.dvs,D.dvn,D.dvA,D.dvB,D.dvm,D.dvw,D.dvv],B.aA("P<l5>"))
D.cU9=w([0.45,1],x.x)
D.Gf=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cUu=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fDe=new C.oh("Original",0,1,1,0,0,0)
D.fDi=new C.oh("Black & white",0,1.1,0,0,0,0)
D.fD5=new C.oh("Noir",-0.05,1.55,0,0,0,0)
D.fD9=new C.oh("Sepia",0,1,0.25,0.9,0,0)
D.fD8=new C.oh("Vivid",0,1.15,1.6,0,0,0)
D.fD1=new C.oh("Pop",0,1.3,1.9,0,0,0)
D.fD3=new C.oh("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fDf=new C.oh("Matte",0,0.9,0.85,0,0,0.55)
D.fDa=new C.oh("Cool",0,1.05,1,-0.8,0,0)
D.fDh=new C.oh("Warm",0.03,1.05,1.1,0.8,0,0)
D.fD2=new C.oh("Golden hour",0.04,1,1.25,1,0,0)
D.fD7=new C.oh("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fDg=new C.oh("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fD6=new C.oh("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fDc=new C.oh("Retro",0,0.9,0.7,0.4,0,0.35)
D.fDb=new C.oh("Forest",0,1,1.2,-0.1,-0.45,0)
D.fDd=new C.oh("Rose",0,1,1.1,0.3,0.4,0)
D.fD4=new C.oh("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cUv=w([D.fDe,D.fDi,D.fD5,D.fD9,D.fD8,D.fD1,D.fD3,D.fDf,D.fDa,D.fDh,D.fD2,D.fD7,D.fDg,D.fD6,D.fDc,D.fDb,D.fDd,D.fD4],B.aA("P<oh>"))
D.b37=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cUw=w([D.acV,A.e8,D.b37],x.O)
D.e6v=new B.z(0.12,0.3)
D.elQ=new B.z(0.26,0.75)
D.eka=new B.z(0.8,0.22)
D.epo=new B.z(0.9,0.7)
D.emC=new B.z(0.5,0.15)
D.enJ=new B.z(0.65,0.85)
D.ec0=new B.z(0.08,0.85)
D.cUH=w([D.e6v,D.elQ,D.eka,D.epo,D.emC,D.enJ,D.ec0],x.G)
D.auj=w([A.ba,A.bY,A.bz,A.bc],x.O)
D.cVt=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cVF=w([A.c,A.ff,A.dx,A.uw],x.O)
D.b6f=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cWB=w([D.b6f,D.abH],x.O)
D.cWC=w([A.wA,A.av],x.O)
D.cWQ=w([0,0.25,0.75,1],x.x)
D.cWS=w([A.ww,A.oa],x.O)
D.aCW=new C.kI(10,"kenteSunset")
D.fHu=w([D.ac1,A.jD,A.av],x.O)
D.dqG=new C.jf("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aCW,4294964964,4282000405,4279983648,D.jv)
D.aCX=new C.kI(11,"indigoMudcloth")
D.b43=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fHI=w([D.b43,A.abE,A.hT],x.O)
D.dqO=new C.jf("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aCX,4294439140,4279903102,4279903102,D.jv)
D.aCY=new C.kI(12,"adinkraRoyal")
D.bg6=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fHJ=w([D.aaH,D.bg6,A.av],x.O)
D.dqQ=new C.jf("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aCY,4294965484,4285218591,4287322667,D.jv)
D.aCZ=new C.kI(13,"nileLotus")
D.bcF=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b9B=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fHO=w([D.bcF,D.b9B,A.hT],x.O)
D.dqP=new C.jf("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aCZ,4294244340,4279196764,4279196764,D.jv)
D.aD_=new C.kI(14,"shweshweIvory")
D.b7X=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b6S=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b4y=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fHv=w([D.b7X,D.b6S,D.b4y],x.O)
D.dqL=new C.jf("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aD_,4294505710,4279970378,4291058750,D.jv)
D.r4=new C.kI(15,"certIvoryNavy")
D.fHt=w([D.Kf,D.iZ,A.hT],x.O)
D.aCs=new C.x6(1,"ringsNdoa")
D.dqI=new C.jf("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.r4,4294966259,4279378237,4291404327,D.aCs)
D.a3_=new C.x6(2,"coupleCards")
D.dqD=new C.jf("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.r4,4294966259,4279378237,4291404327,D.a3_)
D.BP=new C.kI(18,"certIvoryNavyBar")
D.aaG=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fHH=w([D.aaG,D.iZ,A.hT],x.O)
D.aCt=new C.x6(3,"kuhoweshaForm")
D.dqB=new C.jf("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.BP,4294966519,4279378237,4291404327,D.aCt)
D.abR=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fI0=w([D.Kf,D.abR,A.hT],x.O)
D.a30=new C.x6(4,"mahariPande")
D.dqE=new C.jf("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.r4,4294966259,4279904068,4291404327,D.a30)
D.aD0=new C.kI(16,"certIvoryGreen")
D.b7p=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fHx=w([A.Jz,D.b7p,A.hT],x.O)
D.aCu=new C.x6(5,"familiaMti")
D.dqK=new C.jf("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aD0,4294966776,4280241466,4291404327,D.aCu)
D.a31=new C.x6(6,"ndoaSafi")
D.dqC=new C.jf("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.BP,4294966519,4279378237,4291404327,D.a31)
D.bbh=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fHA=w([D.Kf,A.hT,D.bbh],x.O)
D.a32=new C.x6(7,"peteWide")
D.dqH=new C.jf("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.r4,4294966259,4282001936,4291404327,D.a32)
D.dqR=new C.x6(8,"muhuriCrest")
D.dqA=new C.jf("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.r4,4294966259,4279378237,4291404327,D.dqR)
D.fHK=w([D.aaG,D.abR,A.hT],x.O)
D.dqS=new C.x6(9,"fomuWazi")
D.dqN=new C.jf("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.BP,4294966519,4279904068,4291404327,D.dqS)
D.aD1=new C.kI(17,"certIvoryRose")
D.b7Z=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fHN=w([D.b7Z,D.acz,A.hT],x.O)
D.a2Z=new C.x6(10,"upendoOrnate")
D.dqJ=new C.jf("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aD1,4294965493,4286200650,4291404327,D.a2Z)
D.cXf=w([D.dqG,D.dqO,D.dqQ,D.dqP,D.dqL,D.dqI,D.dqD,D.dqB,D.dqE,D.dqK,D.dqC,D.dqH,D.dqA,D.dqN,D.dqJ],x.h)
D.e5=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.H3=new C.vA(0,"emojis")
D.BW=new C.vA(1,"pictures")
D.H4=new C.vA(2,"icons3d")
D.a3j=new C.vA(3,"animations")
D.QF=new C.vA(4,"videoMotion")
D.BX=new C.vA(5,"luxe")
D.a1a=w([D.H3,D.BW,D.H4,D.a3j,D.QF,D.BX],B.aA("P<vA>"))
D.eoj=new B.z(A.dS,"Looks")
D.edV=new B.z(A.xU,"Light")
D.edR=new B.z(A.nG,"Colour")
D.ec1=new B.z(A.xt,"Effects")
D.aiJ=new B.a_(63112,"MaterialIcons",!1)
D.e9b=new B.z(D.aiJ,"Crop")
D.cXJ=w([D.eoj,D.edV,D.edR,D.ec1,D.e9b],x.f2)
D.cYm=w([],x.D)
D.fHY=w([],x.L)
D.ecc=new B.z("Flashcard",D.GZ)
D.efL=new B.z("Quiz",D.H_)
D.ehA=new B.z("Worksheet",D.H0)
D.eeS=new B.z("Notes",D.ml)
D.egf=new B.z("Section",D.BU)
D.cYY=w([D.ecc,D.efL,D.ehA,D.eeS,D.egf],B.aA("P<+(n,mj)>"))
D.dsx=new C.kI(6,"beadedPearl")
D.bae=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fI1=w([H.VT,D.bae,A.hT],x.O)
D.aCq=new C.jf("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dsx,4294966774,4286209070,4291404327,D.jv)
D.dsy=new C.kI(7,"artDeco")
D.bdO=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bgm=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fI_=w([D.bdO,D.bgm,A.bU],x.O)
D.aCr=new C.jf("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dsy,4294440434,4280228630,4290283019,D.jv)
D.dsz=new C.kI(8,"rosetteCorners")
D.bfC=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b6h=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.ba9=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fHD=w([D.bfC,D.b6h,D.ba9],x.O)
D.aCp=new C.jf("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dsz,4294702831,4285218602,4291394365,D.jv)
D.dsA=new C.kI(9,"modernLedger")
D.fHC=w([A.c,D.iZ,D.iZ],x.O)
D.aCo=new C.jf("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dsA,4294967295,4279378237,4279378237,D.jv)
D.cZ1=w([D.aCq,D.aCr,D.aCp,D.aCo],x.h)
D.cZ9=w([A.ij,A.oa],x.O)
D.cf=new C.hu(0,"none")
D.dc=new C.hu(1,"fade")
D.H1=new C.hu(3,"slideRight")
D.aDn=new C.hu(5,"slideDown")
D.dNg=new C.hu(7,"zoomOut")
D.a3i=new C.hu(11,"cube")
D.dNb=new C.hu(12,"blur")
D.aDk=new C.hu(13,"dissolve")
D.dNc=new C.hu(14,"wipeLeft")
D.dNd=new C.hu(15,"wipeRight")
D.QE=new C.hu(17,"push")
D.dNe=new C.hu(18,"flash")
D.aDm=new C.hu(20,"swing")
D.dNf=new C.hu(21,"curtain")
D.Ph=w([D.cf,D.dc,D.tP,D.H1,D.tQ,D.aDn,D.mm,D.dNg,D.H2,D.aDo,D.QD,D.a3i,D.dNb,D.aDk,D.dNc,D.dNd,D.pL,D.QE,D.dNe,D.aDl,D.aDm,D.dNf],x.i)
D.Pi=w([D.a2Y,D.a2W,D.a2P,D.a2Q,D.a2R,D.a2U,D.a2S,D.a2T,D.a2X,D.a2V,D.aCq,D.aCr,D.aCp,D.aCo],x.h)
D.cZA=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cZE=w([A.zU,A.hB,A.bU],x.O)
D.edh=new B.z(A.tp,"Design")
D.epN=new B.z(D.aj_,"Word sizes")
D.emm=new B.z(A.B4,"Text")
D.byH=new B.a_(983182,"MaterialIcons",!1)
D.emq=new B.z(D.byH,"Photo")
D.e8O=new B.z(A.l8,"Logo")
D.eqR=new B.z(A.FB,"News")
D.cZJ=w([D.edh,D.epN,D.emm,D.emq,D.e8O,D.eqR],x.f2)
D.cZK=w(["golddust","sparkle","sheen"],x.s)
D.dOD=new C.ep("upload_pdf",K.MD,"Upload PDF")
D.dNN=new C.ep("sign_paper",A.Fy,"Sign Paper")
D.bxY=new B.a_(63438,"MaterialIcons",!1)
D.dOz=new C.ep("hd_photo",D.bxY,"HD Photo")
D.dNF=new C.ep("sharpen",E.Z8,"Sharpen")
D.dNP=new C.ep("print",K.MD,"Download PDF")
D.dOg=new C.ep("rotate",D.aiJ,"Rotate")
D.dNY=new C.ep("text_box",A.B4,"Text Box")
D.dO_=new C.ep("picture",A.tt,"Picture")
D.dNW=new C.ep("title",A.xO,"Title")
D.dNS=new C.ep("subtitle",S.ajA,"Subtitle")
D.dOp=new C.ep("bullets",I.Zo,"Bullet List")
D.dNT=new C.ep("numbered",A.Ms,"Numbered")
D.dOs=new C.ep("quote",A1.AX,"Quote")
D.dO4=new C.ep("citation",A.pw,"Citation")
D.dOv=new C.ep("date_stamp",Av.Zd,"Date Stamp")
D.dOi=new C.ep("page_number",A.xN,"Page #")
D.dOm=new C.ep("header_bar",A.B6,"Header")
D.dNZ=new C.ep("footer_bar",A7.ZW,"Footer")
D.dNO=new C.ep("divider",A.ts,"Divider")
D.dNK=new C.ep("highlight",A.Zt,"Highlight")
D.dOo=new C.ep("redact",A.xR,"Redact")
D.dOb=new C.ep("callout",A.AT,"Callout")
D.dOx=new C.ep("checkboxes",I.ahZ,"Checklist")
D.dO8=new C.ep("table",A.ZU,"Table")
D.dO2=new C.ep("memo",I.ZF,"Memo")
D.dOc=new C.ep("letter",A.Fn,"Letter")
D.bxA=new B.a_(63259,"MaterialIcons",!0)
D.dNE=new C.ep("agenda",D.bxA,"Agenda")
D.dNQ=new C.ep("toc",Au.ajc,"Contents")
D.bxU=new B.a_(63406,"MaterialIcons",!1)
D.dO9=new C.ep("sig_line",D.bxU,"Sign Line")
D.dNx=new C.ep("initial_line",A.j7,"Initials")
D.dNA=new C.ep("approved",A.l8,"APPROVED")
D.dOe=new C.ep("draft",A.ov,"DRAFT")
D.dOk=new C.ep("confidential",A.j8,"Confidential")
D.dOn=new C.ep("sticky",A.MJ,"Sticky Note")
D.dOw=new C.ep("progress",A.ajb,"Progress")
D.bza=new B.a_(983507,"MaterialIcons",!1)
D.dNL=new C.ep("stars",D.bza,"Star Rating")
D.dNv=new C.ep("equation",A.aj2,"Equation")
D.dNG=new C.ep("timeline",A.MK,"Timeline")
D.dO3=new C.ep("two_col",A.ZX,"Two Columns")
D.dNI=new C.ep("compare",A0.Zg,"Compare")
D.dNt=new C.ep("duplicate_el",A.fI,"Duplicate")
D.dOB=new C.ep("delete_el",A.ea,"Delete")
D.dOr=new C.ep("bring_fwd",H.aiW,"Bring Front")
D.dNy=new C.ep("send_back",H.aiV,"Send Back")
D.dOd=new C.ep("align_left",D.Zm,"Align L")
D.dOj=new C.ep("align_center",D.Zl,"Align C")
D.dOA=new C.ep("align_right",D.Zn,"Align R")
D.dNX=new C.ep("word_count",A_.YS,"Word Count")
D.dNU=new C.ep("link_text",A.hi,"Link")
D.dOh=new C.ep("phone",A.iw,"Phone")
D.dNJ=new C.ep("email",A.AV,"Email")
D.dOC=new C.ep("qr_placeholder",A.ja,"QR Placeholder")
D.dND=new C.ep("rectangle",A2.v5,"Rectangle")
D.dO7=new C.ep("circle",A.qF,"Circle")
D.dNz=new C.ep("arrow",A.js,"Arrow")
D.dOq=new C.ep("line",A.ts,"Line")
D.dNM=new C.ep("triangle",A.Ze,"Triangle")
D.bxI=new B.a_(63318,"MaterialIcons",!1)
D.dNR=new C.ep("grayscale",D.bxI,"Grayscale")
D.dO0=new C.ep("brighten",I.aii,"Brighten")
D.dO5=new C.ep("flip_h",A.Fd,"Flip H")
D.bxP=new B.a_(63348,"MaterialIcons",!1)
D.dOy=new C.ep("flip_v",D.bxP,"Flip V")
D.dOl=new C.ep("cover_page",A.pr,"Cover Page")
D.dNw=new C.ep("invoice",A.h7,"Invoice")
D.dNH=new C.ep("resume",A.m9,"Resume")
D.dNV=new C.ep("minutes",A.op,"Minutes")
D.dNB=new C.ep("lab_report",A.MG,"Lab Report")
D.dNC=new C.ep("rubric",A.xx,"Rubric")
D.dO6=new C.ep("flashcard_tool",U.Fu,"Flashcard")
D.dOt=new C.ep("quiz_tool",A.Fr,"Quiz Block")
D.dOa=new C.ep("worksheet_tool",L.F4,"Worksheet")
D.dOf=new C.ep("outline_share",A.MH,"Share Outline")
D.dOu=new C.ep("export_json",D.ai4,"Export JSON")
D.dNu=new C.ep("new_slide",D.YR,"New Slide")
D.dO1=new C.ep("present",A.py,"Present")
D.d_8=w([D.dOD,D.dNN,D.dOz,D.dNF,D.dNP,D.dOg,D.dNY,D.dO_,D.dNW,D.dNS,D.dOp,D.dNT,D.dOs,D.dO4,D.dOv,D.dOi,D.dOm,D.dNZ,D.dNO,D.dNK,D.dOo,D.dOb,D.dOx,D.dO8,D.dO2,D.dOc,D.dNE,D.dNQ,D.dO9,D.dNx,D.dNA,D.dOe,D.dOk,D.dOn,D.dOw,D.dNL,D.dNv,D.dNG,D.dO3,D.dNI,D.dNt,D.dOB,D.dOr,D.dNy,D.dOd,D.dOj,D.dOA,D.dNX,D.dNU,D.dOh,D.dNJ,D.dOC,D.dND,D.dO7,D.dNz,D.dOq,D.dNM,D.dNR,D.dO0,D.dO5,D.dOy,D.dOl,D.dNw,D.dNH,D.dNV,D.dNB,D.dNC,D.dO6,D.dOt,D.dOa,D.dOf,D.dOu,D.dNu,D.dO1],B.aA("P<ep>"))
D.d_g=w([A.cm,A.ak],x.O)
D.e8o=new B.z(4286331629,4292552567)
D.e8b=new B.z(4280640491,4278630100)
D.e8w=new B.z(4294538006,4292943176)
D.e7y=new B.z(4278556265,4280640491)
D.cUR=w([D.e8o,D.e8b,D.e8w,D.e7y],x.n)
D.cjZ=w([4294626325,4280472558,4294210230],x.t)
D.dNo=new C.nv("colorful","Colorful",A.nG,D.cUR,4294967295,3875536895,D.cjZ,D.mm)
D.e8_=new B.z(4279522093,4279657780)
D.e8f=new B.z(4281750292,4283268111)
D.e7B=new B.z(4278603323,4279203438)
D.e8g=new B.z(4282343954,4279599165)
D.cuM=w([D.e8_,D.e8f,D.e7B,D.e8g],x.n)
D.cjH=w([4288931381,4294829706,4287033260],x.t)
D.dNk=new C.nv("nature","Nature",A.Fz,D.cuM,4294442727,3874290891,D.cjH,D.dc)
D.e7U=new B.z(4279369771,4283178389)
D.e7R=new B.z(4279179050,4286456526)
D.e87=new B.z(4280163147,4290648157)
D.e7q=new B.z(4278322711,4285343961)
D.cLV=w([D.e7U,D.e7R,D.e87,D.e7q],x.n)
D.cjV=w([4294210230,4280472558,4289170426],x.t)
D.dNi=new C.nv("vibe","Vibe",A.Zr,D.cLV,4294967295,3874869502,D.cjV,D.tP)
D.e8s=new B.z(4290007817,4292552567)
D.e8m=new B.z(4286328082,4294286859)
D.e8r=new B.z(4288485197,4294538006)
D.e8l=new B.z(4285343961,4293675161)
D.bRe=w([D.e8s,D.e8m,D.e8r,D.e8l],x.n)
D.ck_=w([4294829706,4294967295,4284999929],x.t)
D.dNj=new C.nv("celebration","Celebration",A.l3,D.bRe,4294967295,4009752557,D.ck_,D.pL)
D.e7P=new B.z(4279179050,4280171146)
D.e7T=new B.z(4279310375,4280232247)
D.e7H=new B.z(4278916151,4280172719)
D.e7Q=new B.z(4279179050,4281549141)
D.cFh=w([D.e7P,D.e7T,D.e7H,D.e7Q],x.n)
D.cjC=w([4281908728,4294626325,4287931320],x.t)
D.dNn=new C.nv("professional","Professional",A.AR,D.cFh,4294967295,3872118241,D.cjC,D.QE)
D.e7L=new B.z(4278995566,4278413729)
D.e7D=new B.z(4278727492,4279137424)
D.e88=new B.z(4280171146,4278751666)
D.e7M=new B.z(4278995566,4279590517)
D.cnK=w([D.e7L,D.e7D,D.e88,D.e7M],x.n)
D.cjF=w([4286436348,4284410580,4294829706],x.t)
D.dNp=new C.nv("ocean","Ocean",I.ZZ,D.cnK,4294967295,3873501950,D.cjF,D.tQ)
D.e8n=new B.z(4286328082,4294538006)
D.e8p=new B.z(4286781507,4294677052)
D.e8j=new B.z(4283178389,4294197086)
D.e8q=new B.z(4288295954,4294688548)
D.cBu=w([D.e8n,D.e8p,D.e8j,D.e8q],x.n)
D.ck0=w([4294829706,4294967295,4294747557],x.t)
D.dNq=new C.nv("sunset","Sunset",A.MM,D.cBu,4294967295,4009749973,D.ck0,D.dc)
D.e8A=new B.z(4294967295,4294047225)
D.e8v=new B.z(4294507260,4294967295)
D.e8z=new B.z(4294967295,4293060848)
D.e8u=new B.z(4294507260,4294047225)
D.cOW=w([D.e8A,D.e8v,D.e8z,D.e8u],x.n)
D.cjA=w([4280640491,4279179050,4287931320],x.t)
D.dNm=new C.nv("minimal","Minimal",A2.v5,D.cOW,4279179050,4282865001,D.cjA,D.dc)
D.e7K=new B.z(4278979081,4280886564)
D.e83=new B.z(4280031511,4278979081)
D.e7S=new B.z(4279308561,4281148438)
D.e7J=new B.z(4278979081,4280031511)
D.d13=w([D.e7K,D.e83,D.e7S,D.e7J],x.n)
D.cjO=w([4292128567,4294829706,4289241758],x.t)
D.dNr=new C.nv("elegant","Elegant",A.lB,D.d13,4294898631,3873957348,D.cjO,D.aDk)
D.e85=new B.z(4280159034,4282058596)
D.e7G=new B.z(4278916151,4280163147)
D.e8d=new B.z(4281208933,4278916151)
D.e7X=new B.z(4279502891,4283178389)
D.d7j=w([D.e85,D.e7G,D.e8d,D.e7X],x.n)
D.cjX=w([4294296657,4292128567,4291081725],x.t)
D.dNl=new C.nv("royal","Royal Gold",A.iP,D.d7j,4294965222,3874084351,D.cjX,D.mm)
D.e7v=new B.z(4278464302,4280163147)
D.e7F=new B.z(4278916151,4279455306)
D.e86=new B.z(4280163147,4283040846)
D.e7s=new B.z(4278332450,4281413249)
D.cUz=w([D.e7v,D.e7F,D.e86,D.e7s],x.n)
D.cjB=w([4281193663,4289170426,4294210230],x.t)
D.dNs=new C.nv("aurora","Aurora Glow",A.dS,D.cUz,4293983738,3869766608,D.cjB,D.dc)
D.vp=w([D.dNo,D.dNk,D.dNi,D.dNj,D.dNn,D.dNp,D.dNq,D.dNm,D.dNr,D.dNl,D.dNs],B.aA("P<nv>"))
D.baJ=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d_K=w([A.qm,D.baJ,A.qm],x.O)
D.d00=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d04=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eme=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.ecS=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ehb=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.e5F=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.efV=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eef=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eij=new B.z("Surprise me","")
D.d0y=w([D.eme,D.ecS,D.ehb,D.e5F,D.efV,D.eef,D.eij],x.L)
D.b4B=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bef=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d1f=w([A.c,D.b4B,D.bef],x.O)
D.d2W=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aCU=new C.kI(0,"heritageGold")
D.b9q=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fI2=w([D.b9q,H.abZ,A.av],x.O)
D.dqM=new C.jf("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aCU,4294570461,4284234270,4292128567,D.jv)
D.aCV=new C.kI(1,"heritageCrimson")
D.b33=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b7Y=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.be6=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fHG=w([D.b33,D.b7Y,D.be6],x.O)
D.dqF=new C.jf("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aCV,4294635750,4285213214,4292912216,D.jv)
D.d3_=w([D.a2Y,D.a2W,D.dqM,D.dqF,D.a2R,D.a2U],x.h)
D.dwG=new C.r7(1,"circuit")
D.dx8=new C.lT("neural","Neural Link","Robotic",D.dwG,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dwF=new C.r7(0,"grid")
D.dx5=new C.lT("signal","Signal Grid","Robotic",D.dwF,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dwL=new C.r7(2,"hexes")
D.dwR=new C.lT("core","Core Protocol","Robotic",D.dwL,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aDh=new C.r7(11,"diagonal")
D.dx1=new C.lT("steel","Steel Tech","Robotic",D.aDh,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aDi=new C.r7(3,"rings")
D.dwQ=new C.lT("vault","Vault Gold","Robotic",D.aDi,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dwJ=new C.r7(13,"leaves")
D.dwT=new C.lT("forest","Forest Morning","Nature",D.dwJ,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aDj=new C.r7(5,"waves")
D.dx_=new C.lT("ocean","Ocean Calm","Nature",D.aDj,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dwM=new C.r7(6,"sunset")
D.dx4=new C.lT("sunset","Sunset Glow","Nature",D.dwM,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dwN=new C.r7(7,"mountains")
D.dwS=new C.lT("mountain","Mountain Air","Nature",D.dwN,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dwO=new C.r7(8,"stars")
D.dwZ=new C.lT("night","Night Sky","Nature",D.dwO,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a3g=new C.r7(4,"orbs")
D.dwX=new C.lT("aurora","Aurora","Nature",D.a3g,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dx6=new C.lT("sand","Sand Dune","Nature",D.aDj,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dwP=new C.r7(9,"rays")
D.dwW=new C.lT("golden","Golden Hour","Warm",D.dwP,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dwU=new C.lT("royal","Royal Purple","Warm",D.aDh,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dwV=new C.lT("rose","Rose Petal","Warm",D.a3g,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dwI=new C.r7(12,"blocks")
D.dwY=new C.lT("electric","Electric Blue","Bold",D.dwI,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dx7=new C.lT("mint","Fresh Mint","Bold",D.a3g,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dwK=new C.r7(14,"minimal")
D.dx3=new C.lT("white","Clean White","Clean",D.dwK,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dwH=new C.r7(10,"frame")
D.dx0=new C.lT("midnight","Midnight Gold","Clean",D.dwH,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dx2=new C.lT("community","Community Green","Clean",D.aDi,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a1z=w([D.dx8,D.dx5,D.dwR,D.dx1,D.dwQ,D.dwT,D.dx_,D.dx4,D.dwS,D.dwZ,D.dwX,D.dx6,D.dwW,D.dwU,D.dwV,D.dwY,D.dx7,D.dx3,D.dx0,D.dx2],B.aA("P<lT>"))
D.d3l=w([D.A0,A.wA,A.hB,A.bU],x.O)
D.d3B=w([D.acI,D.iZ],x.O)
D.d3K=w(["pdf","docx","txt","md"],x.s)
D.eu5=new B.bz(-3,150,34)
D.eu6=new B.bz(-3,214,62)
D.eu7=new B.bz(-3,288,62)
D.d4y=w([D.eu5,D.eu6,D.eu7],B.aA("P<+(O,O,O)>"))
D.d51=w(["rays","bokeh","aurora","spotlight"],x.s)
D.d5A=w(["Write","Design","Print & fold"],x.s)
D.jw=new C.un(2,"triangle")
D.BV=new C.un(3,"arrow")
D.fn=new C.un(4,"line")
D.jx=new C.un(5,"parallelogram")
D.d5C=w([D.bf,D.eI,D.jw,D.BV,D.fn,D.jx,D.kN],x.m)
D.e6J=new B.z(240,96)
D.e94=new B.z(560,46)
D.d5H=w([D.e6J,D.e94],x.G)
D.fId=new C.x9(0,"classic")
D.dsD=new C.nr("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aCU,4294570461,4282000405,4284234270)
D.dsP=new C.nr("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aCV,4294635750,4281999378,4285213214)
D.dsE=new C.nr("elegant_navy","Umoja Mzuri",y.s,D.a3a,4294967035,4279378237,4290283019)
D.dsR=new C.nr("elegant_gold","Umoja wa Dhahabu",y.Q,D.aD2,4294966515,4281016592,4289102906)
D.dsT=new C.nr("kente_sunset","Kente ya Jua",y.H,D.aCW,4294964964,4282000405,4279983648)
D.dsB=new C.nr("indigo_mudcloth","Nguo ya Indigo",y.n,D.aCX,4294439140,4279903102,4279903102)
D.dsG=new C.nr("adinkra_royal","Muhuri wa Adinkra",y.z,D.aCY,4294965484,4285218591,4287322667)
D.dsL=new C.nr("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aCZ,4294244340,4279196764,4279196764)
D.dsN=new C.nr("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aD_,4294505710,4279970378,4291058750)
D.fIe=new C.x9(1,"ringsNdoa")
D.dsF=new C.nr("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.r4,4294966259,4279378237,4291404327)
D.fIg=new C.x9(2,"coupleCards")
D.dsQ=new C.nr("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.r4,4294966259,4279378237,4291404327)
D.fIh=new C.x9(3,"kuhoweshaForm")
D.dsM=new C.nr("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.BP,4294966519,4279378237,4291404327)
D.fIi=new C.x9(4,"mahariPande")
D.dsC=new C.nr("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.r4,4294966259,4279904068,4291404327)
D.fIj=new C.x9(5,"familiaMti")
D.dsS=new C.nr("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aD0,4294966776,4280241466,4291404327)
D.fIk=new C.x9(6,"ndoaSafi")
D.dsJ=new C.nr("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.BP,4294966519,4279378237,4291404327)
D.fIl=new C.x9(7,"peteWide")
D.dsI=new C.nr("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.r4,4294966259,4282001936,4291404327)
D.fIm=new C.x9(8,"muhuriCrest")
D.dsH=new C.nr("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.r4,4294966259,4279378237,4291404327)
D.fIn=new C.x9(9,"fomuWazi")
D.dsK=new C.nr("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.BP,4294966519,4279904068,4291404327)
D.fIf=new C.x9(10,"upendoOrnate")
D.dsO=new C.nr("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aD1,4294965493,4286200650,4291404327)
D.Pw=w([D.dsD,D.dsP,D.dsE,D.dsR,D.dsT,D.dsB,D.dsG,D.dsL,D.dsN,D.dsF,D.dsQ,D.dsM,D.dsC,D.dsS,D.dsJ,D.dsI,D.dsH,D.dsK,D.dsO],B.aA("P<nr>"))
D.BT=new C.apw(0,"landscape169")
D.nO=new C.apw(1,"portrait916")
D.d6r=w([D.BT,D.nO],B.aA("P<apw>"))
D.avJ=w([A.hB,A.bJ,A.cy,A.ij,A.c],x.O)
D.tH=w([A.bU,A.ip],x.O)
D.e60=new B.z(1000,"M")
D.ea5=new B.z(900,"CM")
D.e9_=new B.z(500,"D")
D.e7o=new B.z(400,"CD")
D.e61=new B.z(100,"C")
D.ea6=new B.z(90,"XC")
D.e90=new B.z(50,"L")
D.e7p=new B.z(40,"XL")
D.e65=new B.z(10,"X")
D.eag=new B.z(9,"IX")
D.e9e=new B.z(5,"V")
D.e8N=new B.z(4,"IV")
D.e6q=new B.z(1,"I")
D.d7_=w([D.e60,D.ea5,D.e9_,D.e7o,D.e61,D.ea6,D.e90,D.e7p,D.e65,D.eag,D.e9e,D.e8N,D.e6q],x.ek)
D.ev_=new B.cL(["open",A.j7,"Open & write","Keep writing this book"])
D.evp=new B.cL(["print",A.tw,"Print as a book","Fold and staple it"])
D.d79=w([D.ev_,D.evp],B.aA("P<+(n,a_,n,n)>"))
D.d7N=w([D.a3i,D.mm,D.H2,D.QE,D.dc,D.QD],x.i)
D.emK=new B.z(-1,"Small")
D.e5O=new B.z(0,"Normal")
D.e6p=new B.z(1,"Big")
D.e6X=new B.z(2,"Huge")
D.d8f=w([D.emK,D.e5O,D.e6p,D.e6X],x.ek)
D.d8E=w([49,65,89,38,83,89],x.t)
D.d8L=w([A.wA,A.hB,A.bU],x.O)
D.d9b=w([D.dc,D.mm,D.tP,D.a3i,D.H2,D.QE],x.i)
D.aB0=new B.dI([0,D.Kw,8,D.ae_,12,D.ae0],B.aA("dI<H,a2B>"))
D.dTh={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.be_=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cFr=w([A.bJ,D.be_],x.O)
D.cYK=w([A.b4,A.bl],x.O)
D.cTL=w([A.bY,A.aW,A.cr],x.O)
D.d7a=w([A.cm,A.bv],x.O)
D.cMM=w([A.ba,A.fe],x.O)
D.cWg=w([A.b3,A.f5],x.O)
D.b7I=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cVA=w([D.b7I,A.oa],x.O)
D.cQt=w([A.fX,A.wB],x.O)
D.cMB=w([A.bs,A.c8],x.O)
D.dbO=new B.br(D.dTh,[D.cFr,H.amu,D.cYK,D.cTL,D.d7a,D.cMM,D.cWg,D.cVA,D.cQt,D.cMB],B.aA("br<n,ak<w>>"))
D.dSs={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a2a=new B.br(D.dSs,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.aA("br<n,n>"))
D.a2g=new B.br(A.ib,[],B.aA("br<H,+icon3d,picture(n?,n?)>"))
D.dfP=new F.M0(30,null)
D.dkU=new F.mf("Chapter 1","","","")
D.d6d=w([D.dkU],x.B)
D.dkY=new F.qY("My Book","","",D.d6d,E.aCf)
D.dkW=new F.ud("starry",null,null,null,null,"","","")
D.dkZ=new F.qY("Dream Big","","",E.a1j,D.dkW)
D.dkX=new F.ud("story",null,null,null,null,"","","")
D.dl_=new F.qY("Little Lion","","",E.a1j,D.dkX)
D.dkV=new F.ud("vintage",null,null,null,null,"","","")
D.dl0=new F.qY("Our Story","","",E.a1j,D.dkV)
D.do1=new C.DQ("","NGMY","","")
D.dvh=new C.yY("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dNh=new C.b_f(null,null,null,null)
D.dP_=new C.apB(null)
D.dPc=new C.aq6(0,"smaller")
D.dPd=new C.aq6(1,"bigger")
D.aDx=new C.aq6(2,"fit")
D.dVG=new B.u(3,6)
D.dVQ=new B.u(4,8)
D.dZg=new B.C(E.aeO,S.aa8,null)
D.dZk=new B.C(A.WP,A.lV,null)
D.bAs=new B.ae(A.l6,16,A.bZ,null,null,null)
D.dZo=new B.C(A.j4,D.bAs,null)
D.b2x=new B.fh(2.2,null,null,null,null,A.c,null,null,null,null)
D.dZA=new B.C(A.EI,D.b2x,null)
D.bKD=new B.ae(A.cv,16,A.ay,null,null,null)
D.dZE=new B.C(A.en,D.bKD,null)
D.f8C=new B.x("Play",null,A.n8,null,null,null,null,null,null,null,null,null)
D.cYZ=w([T.akZ,A.rh,D.f8C],x.p)
D.ezm=new B.co(A.aU,A.e,A.Q,A.m,null,A.p,null,0,D.cYZ,null)
D.dZH=new B.C(A.ok,D.ezm,null)
D.b2G=new B.fh(2.4,null,null,null,null,null,null,null,null,null)
D.eEA=new B.a5(20,20,D.b2G,null)
D.dZM=new B.C(A.j4,D.eEA,null)
D.fhk=new B.x("Seconds per slide",null,A.hm,null,null,null,null,null,null,null,null,null)
D.dZT=new B.C(A.bm,D.fhk,null)
D.e0d=new C.a7p(2,"print")
D.e0g=new B.iL(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e1T=new B.h5("/Annot")
D.e1V=new B.h5("/URI")
D.f3c=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e3J=new B.jh("share",48,D.f3c,null,B.aA("jh<n>"))
D.bKx=new B.ae(A.dS,14,A.ex,null,null,null)
D.e3S=new B.cK(null,-2,-2,null,null,null,D.bKx,null)
D.bb7=new B.w(0.3333333333333333,0,0,0,A.t)
D.cHk=w([D.bb7,A.K],x.O)
D.bQ4=new B.a6(A.a3,A.a7,A.x,D.cHk,null,null)
D.aWt=new B.o(null,null,null,null,null,D.bQ4,A.n)
D.bio=new B.kF(D.aWt,A.be,null,null)
D.e43=new B.cK(0,0,null,0,8,null,D.bio,null)
D.d2_=w([A.hS,A.ob,A.cb],x.O)
D.e4H=new B.bR(A.A,0.5,A.x,null,0,D.d2_,null,null)
D.e6Q=new B.z(0.22,A.bl)
D.eaz=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ecx=new B.z(0.5,A.he)
D.elp=new B.z(0.78,A.aT)
D.euR=new B.cL([A.bz,0.22,0.7,2.6])
D.euW=new B.cL([A.ba,0.36,1.2,1.3])
D.ev1=new B.cL([A.dN,0.28,0.2,0.4])
D.ev7=new B.cL([A.cu,0.05,0.3,0.35])
D.evd=new B.cL([A.bs,0.28,0.9,0])
D.evl=new B.cL([A.aD,-0.25,-0.15,0.45])
D.ew8=new B.cL([A.bY,0.42,1,4.1])
D.ez4=new B.a8h(9)
D.bBz=new B.ae(A.FB,28,A.cr,null,null,null)
D.fhQ=new B.x("NGMY News",null,A.dI,null,null,null,null,null,null,null,null,null)
D.bs9=new B.bG(1,A.bo,D.fhQ,null)
D.d54=w([D.bBz,A.aw,D.bs9],x.p)
D.ezg=new B.co(A.aU,A.e,A.j,A.m,null,A.p,null,0,D.d54,null)
D.bBK=new B.ae(A.pw,16,A.c,null,null,null)
D.fje=new B.x("Book",null,A.nV,null,null,null,null,null,null,null,null,null)
D.d8K=w([D.bBK,A.eb,D.fje],x.p)
D.ezo=new B.co(A.aU,A.e,A.Q,A.m,null,A.p,null,0,D.d8K,null)
D.bI9=new B.ae(A.j8,10,A.c,null,null,null)
D.f6M=new B.x("Pro",null,A.n6,null,null,null,null,null,null,null,null,null)
D.cZ3=w([D.bI9,A.pU,D.f6M],x.p)
D.ezs=new B.co(A.aU,A.e,A.Q,A.m,null,A.p,null,0,D.cZ3,null)
D.fhj=new B.x("Make a newspaper",null,Ao.Sz,null,null,null,null,null,null,null,null,null)
D.bRc=w([E.a_j,A.ab,D.fhj],x.p)
D.ezt=new B.co(A.aU,A.e,A.Q,A.m,null,A.p,null,0,D.bRc,null)
D.bGI=new B.ae(A.l3,18,A.bJ,null,null,null)
D.f8Q=new B.x("Ending celebration",null,A.iU,null,null,null,null,null,null,null,null,null)
D.d49=w([D.bGI,A.bn,D.f8Q],x.p)
D.ezw=new B.co(A.aU,A.e,A.j,A.m,null,A.p,null,0,D.d49,null)
D.bHW=new B.ae(A.j7,18,A.jH,null,null,null)
D.eOZ=new B.F(!0,A.jH,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjv=new B.x("Write",null,D.eOZ,null,null,null,null,null,null,null,null,null)
D.cOK=w([D.bHW,A.ab,D.fjv],x.p)
D.ezB=new B.co(A.aU,A.e,A.Q,A.m,null,A.p,null,0,D.cOK,null)
D.f6K=new B.x("Download picture",null,A.pY,null,null,null,null,null,null,null,null,null)
D.bu8=new B.q1(A.eg,A.A,A.f,D.f6K,null)
D.buj=new B.dl(1,A.ch,D.bu8,null)
D.cZq=w([K.akP,A.ab,D.buj],x.p)
D.ezC=new B.co(A.aU,A.b9,A.j,A.m,null,A.p,null,0,D.cZq,null)
D.bDv=new B.ae(A.FB,22,A.cr,null,null,null)
D.ffZ=new B.x("NGMY NEWS",null,H.a5U,null,null,null,null,null,null,null,null,null)
D.cGP=w([D.bDv,A.ab,D.ffZ],x.p)
D.ezK=new B.co(A.aU,A.e,A.Q,A.m,null,A.p,null,0,D.cGP,null)
D.ezV=new B.oT(!1,!1,null,S.Uq,null,A.bW,null,null,null)
D.a4X=new B.jI([D.cf,D.dc,D.tP,D.H1,D.tQ,D.aDn],B.aA("jI<hu>"))
D.dUu={title:0,quote:1,closing:2,bio:3}
D.eB2=new B.eV(D.dUu,4,x.M)
D.dSJ={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eB4=new B.eV(D.dSJ,5,x.M)
D.dU1={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a4Y=new B.eV(D.dU1,8,x.M)
D.dTp={Design:0,Transitions:1,Insert:2}
D.eB8=new B.eV(D.dTp,3,x.M)
D.fIv=new B.jI([D.a3j],B.aA("jI<vA>"))
D.dTw={float3d:0,drift:1,pulse:2}
D.eBb=new B.eV(D.dTw,3,x.M)
D.aKz=new B.jI([D.GZ,D.H_,D.H0],B.aA("jI<mj>"))
D.dSG={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aKC=new B.eV(D.dSG,14,x.M)
D.fIw=new B.eV(A.ib,0,B.aA("eV<vA>"))
D.dTt={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.RD=new B.eV(D.dTt,4,x.M)
D.dSA={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aKE=new B.eV(D.dSA,30,x.M)
D.dTB={circle:0,triangle:1,hexagon:2,diamond:3}
D.eBr=new B.eV(D.dTB,4,x.M)
D.eDz=new B.at(390,844)
D.eEk=new B.a5(20,20,A4.Jt,null)
D.aLq=new B.a5(null,2.5,null,null)
D.eEu=new B.a5(18,18,A4.Jt,null)
D.bI_=new B.ae(A.iP,19,A.c,null,null,null)
D.eEF=new B.a5(38,38,D.bI_,null)
D.bGi=new B.ae(A.xV,22,A.c,null,null,null)
D.eEH=new B.a5(40,40,D.bGi,null)
D.eFf=new B.hH(2,10,10,1.15,null)
D.aLy=new B.hH(2,16,14,0.62,null)
D.bqe=new B.N(32,30,32,40)
D.b3V=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bBw=new B.ae(A.pr,56,D.b3V,null,null,null)
D.ade=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eQV=new B.F(!0,D.ade,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd8=new B.x("Your books will live here.",null,D.eQV,null,A.L,null,null,null,null,null,null,null)
D.cRk=w([D.bBw,A.S,D.fd8],x.p)
D.bhB=new B.fp(A.ai,A.e,A.j,A.m,null,A.p,null,0,D.cRk,null)
D.dZR=new B.C(D.bqe,D.bhB,null)
D.eFA=new B.lW(D.dZR,null)
D.fd5=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eFS=new B.b1(D.fd5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fbg=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eFT=new B.b1(D.fbg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fg0=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eG1=new B.b1(D.fg0,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fgx=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eGg=new B.b1(D.fgx,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f9Z=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eGt=new B.b1(D.f9Z,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fnh=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eGM=new B.b1(D.fnh,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fkx=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eGX=new B.b1(D.fkx,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fgG=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eHD=new B.b1(D.fgG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f58=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eHT=new B.b1(D.f58,null,null,null,null,null,null,null,A.ie,null,null,null,null,A.pi,!1,null,null,null,A.q,null)
D.f6S=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eIa=new B.b1(D.f6S,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fcO=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eIc=new B.b1(D.fcO,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fcu=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eId=new B.b1(D.fcu,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fiz=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eIe=new B.b1(D.fiz,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f1p=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eIn=new B.b1(D.f1p,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f7Y=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eIK=new B.b1(D.f7Y,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fm5=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eIM=new B.b1(D.fm5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.flE=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eIQ=new B.b1(D.flE,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f0s=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eIS=new B.b1(D.f0s,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fhL=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eJ0=new B.b1(D.fhL,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.flf=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eJf=new B.b1(D.flf,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fl6=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eJh=new B.b1(D.fl6,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f0k=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eJn=new B.b1(D.f0k,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f49=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eJP=new B.b1(D.f49,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fkk=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eK_=new B.b1(D.fkk,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f3Y=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eKe=new B.b1(D.f3Y,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.baq=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cFE=w([A.ij,A.oa,D.baq,D.aat,A.ij],x.O)
D.eKC=new B.fR(A.A,0,6.283185307179586,A.x,D.cFE,null,null)
D.cNZ=w([A.bJ,A.bU,A.hB,D.A0,A.bJ],x.O)
D.aM7=new B.fR(A.A,0,6.283185307179586,A.x,D.cNZ,null,null)
D.d_Z=w([A.bY,A.bz,A.ba,A.bc,A.cr,A.bY],x.O)
D.eKH=new B.fR(A.A,0,6.283185307179586,A.x,D.d_Z,null,null)
D.cHy=w([A.pg,A.od,A.zR,A.ij,A.pg],x.O)
D.eKI=new B.fR(A.A,0,6.283185307179586,A.x,D.cHy,null,null)
D.d_T=w([A.aP,A.bI,A.aK,A.ak,A.aP],x.O)
D.eKJ=new B.fR(A.A,0,6.283185307179586,A.x,D.d_T,null,null)
D.d6R=w([A.bs,A.ba,A.bz,A.bY,A.bs],x.O)
D.eKL=new B.fR(A.A,0,6.283185307179586,A.x,D.d6R,null,null)
D.baI=new B.w(1,0,1,1,A.t)
D.b58=new B.w(1,1,0,1,A.t)
D.d3d=w([A.Dy,A.ac9,H.abd,D.baI,H.abz,D.b58,A.Dy],x.O)
D.eKM=new B.fR(A.A,0,6.283185307179586,A.x,D.d3d,null,null)
D.eL0=new C.aua(2,"immersiveSticky")
D.eL1=new C.aua(3,"edgeToEdge")
D.eL2=new C.aua(4,"manual")
D.eNg=new B.F(!0,A.o5,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMD=new B.F(!0,A.f9,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNP=new B.F(!0,E.mH,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePf=new B.F(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQd=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQm=new B.F(!0,A.bZ,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQH=new B.F(!0,A.ex,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS1=new B.F(!0,A.bI,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSa=new B.F(!0,A.j2,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSn=new B.rg(!0,A.Hk,null,null,null,null,A.dr,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSS=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTt=new B.F(!0,A.j0,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTR=new B.F(!0,A.ay,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e0j=new B.iL(1,1,0.7568627450980392,0.027450980392156862)
D.eTV=new B.rg(!0,D.e0j,null,null,null,null,A.dr,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.acf=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aNl=new B.F(!0,D.acf,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU0=new B.F(!0,D.ade,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU1=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNn=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUE=new B.rg(!0,A.oH,null,null,null,null,A.dr,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUV=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.St=new B.F(!0,A.ay,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVq=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVs=new B.F(!0,D.acf,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ib=new B.F(!0,A.ay,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVV=new B.F(!0,A.bU,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW2=new B.F(!0,A.bI,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW5=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWm=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.atD,null,null,null)
D.eWo=new B.F(!0,A.cq,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWq=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWD=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWO=new B.F(!0,A.dx,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXk=new B.F(!0,A.aQ,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXt=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXH=new B.F(!0,A.ad,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNX=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNZ=new B.F(!0,A.bZ,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bfr=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eZp=new B.F(!0,D.bfr,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO6=new B.F(!0,E.mH,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZS=new B.F(!0,A.bI,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZV=new B.F(!0,N.kZ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT4=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f07=new B.x("NEW",null,D.eT4,null,null,null,null,null,null,null,null,null)
D.f0n=new B.x("Hati ya Kuhowesha",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f0O=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.f17=new B.x("Scrollable PDF on this slide",null,A.dj,null,null,null,null,null,null,null,null,null)
D.f1O=new B.x("Big quote mark",null,A.iC,null,null,null,null,null,null,null,null,null)
D.f1R=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.f21=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.f2u=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.f2w=new B.x("How many slides?",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f33=new B.x("Transfer",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eP1=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3n=new B.x("Luxury FX",null,D.eP1,null,null,null,null,null,null,null,null,null)
D.f3I=new B.x("Font",null,A.rm,null,null,null,null,null,null,null,null,null)
D.f3T=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.f3Z=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.eYX=new B.F(!0,A.bI,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f46=new B.x("Example  GA847",null,D.eYX,null,null,null,null,null,null,null,null,null)
D.f4w=new B.x("Design shapes",null,A.iC,null,null,null,null,null,null,null,null,null)
D.f4F=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f4J=new B.x("Non-stop (loop)",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f4X=new B.x("Hati ya Kuhoweya",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f5f=new B.x("Photo studio",null,A.fW,null,null,null,null,null,null,null,null,null)
D.f5F=new B.x("Add your picture",null,A.kR,null,null,null,null,null,null,null,null,null)
D.eSo=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5G=new B.x("Enter document code",null,D.eSo,null,A.L,null,null,null,null,null,null,null)
D.f5H=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.f5M=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eQ3=new B.F(!0,E.mH,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f63=new B.x("Delete this book?",null,D.eQ3,null,A.L,null,null,null,null,null,null,null)
D.eUt=new B.F(!0,E.mH,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6U=new B.x("Your library",null,D.eUt,null,null,null,null,null,null,null,null,null)
D.f6Y=new B.x("Delete",null,A.aNe,null,null,null,null,null,null,null,null,null)
D.f7_=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,An.I9,null,null,null,null,null,null,null,null,null)
D.f7a=new B.x("Element flies in",null,A.aNr,null,null,null,null,null,null,null,null,null)
D.SK=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.f7y=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.f7R=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.f7V=new B.x("Cancel",null,E.aNB,null,null,null,null,null,null,null,null,null)
D.f7X=new B.x("The lines and circles that come with the design",null,A.hn,null,null,null,null,null,null,null,null,null)
D.eXP=new B.F(!0,A.h1,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new B.x("DOCUMENT CODE",null,D.eXP,null,null,null,null,null,null,null,null,null)
D.f99=new B.x("Quotes",null,G.a6y,null,null,null,null,null,null,null,null,null)
D.eRP=new B.F(!0,N.kZ,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9h=new B.x("Add a picture",null,D.eRP,null,null,null,null,null,null,null,null,null)
D.f9p=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a6b,null,A.L,null,null,null,null,null,null,null)
D.f9s=new B.x("Look & feel",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f9w=new B.x("Rings",null,A.iU,null,null,null,null,null,null,null,null,null)
D.f9C=new B.x("W",null,A.rm,null,null,null,null,null,null,null,null,null)
D.f9M=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fa3=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a6l,null,A.L,null,null,null,null,null,null,null)
D.fa5=new B.x("Write your book",null,A.ct,null,null,null,null,null,null,null,null,null)
D.faP=new B.x("Add page",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fb2=new B.x("Malipo ya Awamu ya Mahari",null,A.ho,null,null,null,null,null,null,null,null,null)
D.eSd=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbh=new B.x("Create with AI",null,D.eSd,null,A.L,null,null,null,null,null,null,null)
D.fbK=new B.x("Apply look",null,A.iU,null,null,null,null,null,null,null,null,null)
D.eSX=new B.F(!0,A.ew,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcw=new B.x("Type your presentation below",null,D.eSX,null,A.L,null,null,null,null,null,null,null)
D.fcz=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aO8,null,A.L,null,null,null,null,null,null,null)
D.fcB=new B.x("Keep it",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eO5=new B.F(!0,A.cx,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcI=new B.x("Done",null,D.eO5,null,null,null,null,null,null,null,null,null)
D.fd1=new B.x("Delete",null,A.n7,null,null,null,null,null,null,null,null,null)
D.fda=new B.x("Hati ya Kiapo cha Uongozi",null,A.ho,null,null,null,null,null,null,null,null,null)
D.eRc=new B.F(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe2=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eRc,null,A.L,null,null,null,null,null,null,null)
D.feo=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.feu=new B.x("Layout",null,A.SB,null,null,null,null,null,null,null,null,null)
D.ff4=new B.x("Print",null,A.ct,null,null,null,null,null,null,null,null,null)
D.ff8=new B.x("X",null,A.rm,null,null,null,null,null,null,null,null,null)
D.ffH=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Z.Sn,null,null,null,null,null,null,null,null,null)
D.fgd=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fgp=new B.x("Hati ya Kuhowa",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fgr=new B.x("Choose a class template",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fgt=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fgA=new B.x("Download the newspaper picture",null,A.ct,null,null,null,null,null,null,null,null,null)
D.fgL=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fgS=new B.x("Done",null,A.aNW,null,null,null,null,null,null,null,null,null)
D.fh1=new B.x("Ending celebration",null,A.dI,null,null,null,null,null,null,null,null,null)
D.fh2=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Z.a5Z,null,null,null,null,null,null,null,null,null)
D.fi9=new B.x("Export presentation",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fia=new B.x("What would you like to do?",null,D.aNl,null,null,null,null,null,null,null,null,null)
D.fid=new B.x("Delete",null,A.ct,null,null,null,null,null,null,null,null,null)
D.fiH=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fiL=new B.x("Hati (Documents)",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fiX=new B.x("Done",null,A.kS,null,null,null,null,null,null,null,null,null)
D.eYO=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new B.x("Delete presentation?",null,D.eYO,null,A.L,null,null,null,null,null,null,null)
D.fji=new B.x("After the last slide it starts again from the first",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fjt=new B.x("\ud83c\udf33",null,A.I6,null,A.L,null,null,null,null,null,null,null)
D.fjL=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fjS=new B.x("Transfer document",null,A.oQ,null,null,null,null,null,null,null,null,null)
D.fk2=new B.x("Add to the slides",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fko=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new B.x("Make a book",null,I.aMT,null,null,null,null,null,null,null,null,null)
D.fkH=new B.x("Books",null,A.ct,null,null,null,null,null,null,null,null,null)
D.eRI=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkI=new B.x("Keep this page open until it finishes.",null,D.eRI,null,null,null,null,null,null,null,null,null)
D.fkL=new B.x("Making your video",null,A.dI,null,null,null,null,null,null,null,null,null)
D.fkQ=new B.x("LANGUAGE",null,D.St,null,null,null,null,null,null,null,null,null)
D.fkX=new B.x("Use this ending",null,A.ct,null,null,null,null,null,null,null,null,null)
D.fl4=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fl5=new B.x("Upload a different logo",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fll=new B.x("Delete from the database?",null,A.kR,null,null,null,null,null,null,null,null,null)
D.flm=new B.x("H",null,A.rm,null,null,null,null,null,null,null,null,null)
D.flK=new B.x("NGMY Quotes",null,A.dI,null,null,null,null,null,null,null,null,null)
D.fma=new B.x("Cover",null,D.aO6,null,null,null,null,null,null,null,null,null)
D.fme=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fmf=new B.x("Each page becomes its own slide you can present",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fmA=new B.x("Y",null,A.rm,null,null,null,null,null,null,null,null,null)
D.fmL=new B.x("Crop the picture",null,A.kS,null,null,null,null,null,null,null,null,null)
D.fmR=new B.x("Edit text",null,A.I7,null,null,null,null,null,null,null,null,null)
D.fp4=B.dQ("a7b")
D.CN=new C.avt(0,"none")
D.aQn=new C.avt(1,"zipCrypto")
D.aQo=new C.avt(2,"aes")
D.fxO=new F.Or("","",null)
D.fyU=new C.baj(null)
D.fzY=new C.Ys(null)
D.fBu=new C.abZ(null)
D.fBw=new C.aCF(null)
D.fEh=new C.ZH(null)
D.fEx=new C.a_b(null)
D.fEQ=new C.brG(null)})();(function staticFields(){$.h39=null
$.h3a=null
$.h3b=null
$.h3c=null
$.fMq=B.uL("_lastQuoRemDigits")
$.fMr=B.uL("_lastQuoRemUsed")
$.avP=B.uL("_lastRemUsed")
$.fMs=B.uL("_lastRem_nsh")
$.pP=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a60=B.U(x.N,x.I)
$.fK_=!1
$.h7V=B.U(B.aA("kI"),x.N)
$.h87=B.U(B.aA("kI"),x.E)
$.h67=!1
$.bxj="q"
$.Pp=0
$.C1=B.U(x.N,B.aA("ak<z_>"))
$.h6u=!1
$.fNZ=!1
$.hcG=null
$.hGD=B.U(x.N,B.aA("ax<n?>"))
$.JA=""
$.iW=0
$.h_V=function(){var w=x.N
return B.U(w,w)}()
$.h_U=B.U(x.N,x.R)
$.fOj=!1
$.aeC=B.U(x.N,x.E)
$.fP6=0
$.bih=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i4C","Cn",()=>C.b7R(0))
w($,"i4A","a1q",()=>C.b7R(1))
w($,"i4B","hgg",()=>C.b7R(2))
w($,"i4z","fSQ",()=>$.a1q().uz(0))
w($,"i4x","hge",()=>C.b7R(1e4))
w($,"i4y","hgf",()=>B.Dy(8))
w($,"i0p","heh",()=>B.Dy(0))
w($,"i0x","hel",()=>B.Dy(0))
w($,"i0w","hek",()=>B.bVk(0))
w($,"i8g","hig",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a2a.gdK(D.a2a),v=v.gai(v);v.C();){u=v.gU(v)
t.n(0,u.b,u.a)}return t})
w($,"i8H","bBN",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mH(new C.fva(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mH(new C.fvb(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mH(new C.fvc(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mH(new C.fvn(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mH(new C.fvs(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mH(new C.fvt(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mH(new C.fvu(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mH(new C.fvv(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mH(new C.fvw(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mH(new C.fvx(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mH(new C.fvy(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mH(new C.fvd(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mH(new C.fve(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mH(new C.fvf(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mH(new C.fvg(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mH(new C.fvh(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mH(new C.fvi(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mH(new C.fvj(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mH(new C.fvk(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mH(new C.fvl(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mH(new C.fvm(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mH(new C.fvo(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mH(new C.fvp(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mH(new C.fvq(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mH(new C.fvr(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.aA("P<E_>"))})
w($,"i8j","hii",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["m8JBrJxTAbokqkRK0TYNPyAvB4s="]=a.current})($__dart_deferred_initializers__);