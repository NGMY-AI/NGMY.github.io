((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,A6,Ai,Aj,U,A7,Ak,Al,C={
tu(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fO0(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
IW(d){var w
if(d===0)return $.Cw()
if(d===1)return $.a1A()
if(d===2)return $.hhS()
if(Math.abs(d)<4294967296)return C.b82(A.o.O(d))
w=C.hCq(d)
return w},
b82(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tu(4,w)
return new C.nH(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tu(1,w)
return new C.nH(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tu(2,w)
return new C.nH(v===0?!1:s,w,v)}v=A.o.an(A.o.gaiB(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tu(v,w)
return new C.nH(v===0?!1:s,w,v)},
hCq(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.U(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Cw()
w=$.hhR()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ai(w)
w[u]=0}v=J.l_(A.aG.gaP(w))
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
q=new C.nH(!1,r,4)
if(s<0)p=q.m8(0,-s)
else p=s>0?q.dU(0,s):q
return p},
fO1(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ai(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ai(g)
g[w]=0}return e+f},
h4P(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fv(t,p)
v&2&&B.ai(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.ai(g)
g[r]=u},
h4K(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fO1(d,e,s,g)
w=e+s+1
C.h4P(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ai(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hCt(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fv(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.ai(g)
g[v]=(t|o)>>>0
o=A.o.fv(u,r)}w&2&&B.ai(g)
g[n]=o},
cBR(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hCr(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ai(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ai(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ai(h)
h[e]=v},
b83(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ai(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ai(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
h4Q(d,e,f,g,h,i){var w,v,u,t,s,r
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
hCs(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ei((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nH:function nH(d,e,f){this.a=d
this.b=e
this.c=f},
cBS:function cBS(){},
cBT:function cBT(){},
cBU:function cBU(d,e){this.a=d
this.b=e},
cBV:function cBV(d){this.a=d},
aPL:function aPL(d,e){this.a=d
this.b=e},
fVN(d,e,f){var w=new C.QT(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
QT:function QT(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a2M:function a2M(d,e){this.a=d
this.b=e},
bFA:function bFA(d){this.a=d
this.c=this.b=0},
hl4(){return new C.bDW()},
bDW:function bDW(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cu1:function cu1(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hC8(d,e,f){var w,v,u,t,s
if(d.gal(d))return new Uint8Array(0)
w=new Uint8Array(B.cp(d.gcRG(d)))
v=f*2+2
u=C.h2s(C.h2u(),64)
t=new C.ce9(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cea(e,1000,v)
s=new Uint8Array(v)
return A.aG.dn(s,0,t.cFm(w,0,s,0))},
cu_:function cu_(d,e){this.c=d
this.d=e},
avC:function avC(d,e){this.a=d
this.b=e},
cu2:function cu2(d,e,f,g){var _=this
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
b6K:function b6K(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cu0:function cu0(){this.a=$},
h4f(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hkO(d,e){var w
d.$flags&2&&B.ai(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bCw:function bCw(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fTx(d,e){e&=31
return(d&$.pT[e])<<e>>>0},
ne(d,e){e&=31
return(d>>>e|C.fTx(d,32-e))>>>0},
h2t(d){var w,v=new C.arj()
if(B.iE(d))v.aId(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h2u(){var w=C.h2t(0),v=new Uint8Array(4),u=x.S
u=new C.ceb(w,v,A.Dn,5,B.c1(5,0,!1,u),B.c1(80,0,!1,u))
u.lk(0)
return u},
h2s(d,e){var w=new C.ce7(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
ce6:function ce6(){},
cea:function cea(d,e,f){this.a=d
this.b=e
this.c=f},
ce4:function ce4(){},
ari:function ari(d){this.a=d},
ce9:function ce9(d){this.a=$
this.b=d
this.c=$},
ce5:function ce5(){},
ce3:function ce3(){},
arj:function arj(){this.b=this.a=$},
ce8:function ce8(){},
ceb:function ceb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ce7:function ce7(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
ce2:function ce2(){},
ce1:function ce1(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bLw:function bLw(){},
bLx:function bLx(d){this.a=d},
hFl(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b8i:function b8i(){},
co_:function co_(){},
bMp:function bMp(d,e){this.a=d
this.b=!1
this.c=e},
bMq:function bMq(){},
hO8(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
auf(d){var w=0,v=B.j(x.H),u
var $async$auf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eNJ?2:4
break
case 2:w=5
return B.b(A.jW.fS("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$auf)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jW.fS("SystemChrome.setEnabledSystemUIOverlays",C.hO8(null),u),$async$auf)
case 6:case 3:return B.h(null,v)}})
return B.i($async$auf,v)},
aui:function aui(d,e){this.a=d
this.b=e},
a7m:function a7m(d){this.a=d},
fK_(d,e){return new C.aU6(e,d,null)},
aU6:function aU6(d,e,f){this.e=d
this.c=e
this.a=f},
aza:function aza(d,e,f,g,h){var _=this
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
hQK(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fkp(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fkp:function fkp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ama(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ama=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.afD("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$ama)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d7(s,x.f)
t=B.cD(t,new C.bWL(),t.$ti.k("H.E"),x.P)
r=B.B(t,B.a3(t).k("H.E"))}else r=B.a([],x.d)
A.d.b1(r,new C.bWM())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ama,v)},
amc(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$amc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ama(),$async$amc)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.V(t,x.P)
for(r=J.aW(j);r.C();){q=r.gU(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a5().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nd("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.E(["deck",m.ad(),"savedAt",l],t,q),null),$async$amc)
case 7:if(!f){w=5
break}s.n(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.B(new B.bc(s,r),r.k("H.E"))
w=10
return B.b(B.nd("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],t,q),null),$async$amc)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amc,v)},
bWN(d){return C.hqs(d)},
hqs(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bWN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.afD("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hF),$async$bWN)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.UZ(B.a1(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a9(m)
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
return B.i($async$bWN,v)},
amb(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ama(),$async$amb)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nf(r,new C.bWO(d))
w=4
return B.b(B.nd("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),null),$async$amb)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aNN("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$amb)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amb,v)},
bWL:function bWL(){},
bWM:function bWM(){},
bWO:function bWO(d){this.a=d},
i_A(d,e,f){return B.bY(A.K,null,new C.fA7(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fA7:function fA7(d,e,f){this.a=d
this.b=e
this.c=f},
a_O:function a_O(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHz:function aHz(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f_3:function f_3(d,e){this.a=d
this.b=e},
f_7:function f_7(d){this.a=d},
f_8:function f_8(d){this.a=d},
f_9:function f_9(d,e,f){this.a=d
this.b=e
this.c=f},
f_4:function f_4(d){this.a=d},
f_5:function f_5(d){this.a=d},
f_6:function f_6(d,e){this.a=d
this.b=e},
eZZ:function eZZ(d){this.a=d},
eZX:function eZX(d){this.a=d},
eZY:function eZY(d){this.a=d},
f__:function f__(d){this.a=d},
f_0:function f_0(d){this.a=d},
f_d:function f_d(d,e){this.a=d
this.b=e},
f_c:function f_c(d,e){this.a=d
this.b=e},
f_2:function f_2(d,e,f){this.a=d
this.b=e
this.c=f},
f_1:function f_1(d,e,f){this.a=d
this.b=e
this.c=f},
f_a:function f_a(d,e){this.a=d
this.b=e},
f_b:function f_b(d,e){this.a=d
this.b=e},
f_g:function f_g(d){this.a=d},
f_h:function f_h(d,e){this.a=d
this.b=e},
f_f:function f_f(d,e){this.a=d
this.b=e},
f_e:function f_e(){},
h7c(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d7(w,x.f)
v=B.cD(v,new C.f6g(),v.$ti.k("H.E"),x.ea)
u=B.a3(v).k("a2<H.E>")
v=B.B(new B.a2(v,new C.f6h(),u),u.k("H.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a0M(d){return C.hS_(d)},
hS_(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a0M=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.V(x.N,x.ea)
m=new C.fmR(n)
t=4
j=m
i=C
w=7
return B.b(B.a1l("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a0M)
case 7:j.$1(i.h7c(f))
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
return B.b(B.az(),$async$a0M)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.h7c(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a2<H.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.f6p(d),$async$a0M)
case 13:p=j.B(new i.a2(h,new g.fmP(f),o),o.k("H.E"))
A.d.b1(p,new C.fmQ())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0M,v)},
agc(d,e){return C.i_f(d,e)},
i_f(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$agc=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fzC(),x.P)
n=B.B(n,n.$ti.k("aj.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ag4("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agc)
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
return B.b(B.az(),$async$agc)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agc)
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
return B.i($async$agc,v)},
f6p(d){return C.hGJ(d)},
hGJ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f6p=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$f6p)
case 7:r=f
q=r.rK("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kv(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aX(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$f6p,v)},
af2(d,e){return C.hQC(d,e)},
hQC(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$af2=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$af2)
case 6:s=g
r=B.aX(x.N)
q=s.rK("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fZ(r,q)
J.cf(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a3(q).k("cl.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$af2)
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
return B.b(C.a0M(d),$async$af2)
case 8:n=g
J.nf(n,new C.fk5(e))
w=9
return B.b(C.agc(d,n),$async$af2)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$af2,v)},
i_F(d,e){return B.a5(d,!1).ci(B.em(new C.fAt(e),!0,null,x.H))},
hCv(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.de(w.d,new C.cDd())},
o8:function o8(d,e,f){this.a=d
this.b=e
this.c=f},
f6g:function f6g(){},
f6h:function f6h(){},
fmR:function fmR(d){this.a=d},
fmP:function fmP(d){this.a=d},
fmQ:function fmQ(){},
fzC:function fzC(){},
fk5:function fk5(d){this.a=d},
fAt:function fAt(d){this.a=d},
XB:function XB(d,e){this.c=d
this.a=e},
aw9:function aw9(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cDd:function cDd(){},
cDf:function cDf(d,e){this.a=d
this.b=e},
cDi:function cDi(d){this.a=d},
cDj:function cDj(d){this.a=d},
cDh:function cDh(){},
cDk:function cDk(d,e){this.a=d
this.b=e},
cDg:function cDg(d){this.a=d},
cDl:function cDl(){},
cDe:function cDe(d,e){this.a=d
this.b=e},
cDm:function cDm(){},
cD9:function cD9(d){this.a=d},
cD7:function cD7(d){this.a=d},
cD8:function cD8(d){this.a=d},
cDa:function cDa(d,e){this.a=d
this.b=e},
cD6:function cD6(d){this.a=d},
cD5:function cD5(d){this.a=d},
cD3:function cD3(d,e){this.a=d
this.b=e},
cD4:function cD4(d){this.a=d},
cDc:function cDc(){},
cDb:function cDb(d){this.a=d},
cD2:function cD2(d,e){this.a=d
this.b=e},
cD1:function cD1(d,e){this.a=d
this.b=e},
cD0:function cD0(d,e){this.a=d
this.b=e},
cDn:function cDn(d){this.a=d},
Xz:function Xz(d,e,f){this.c=d
this.d=e
this.a=f},
aDs:function aDs(d,e,f){this.a=d
this.b=e
this.c=f},
aw5:function aw5(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cCu:function cCu(d){this.a=d},
cCt:function cCt(d){this.a=d},
cCw:function cCw(d,e,f){this.a=d
this.b=e
this.c=f},
cCE:function cCE(){},
cCF:function cCF(d){this.a=d},
cCx:function cCx(d,e,f){this.a=d
this.b=e
this.c=f},
cCv:function cCv(d,e){this.a=d
this.b=e},
cCz:function cCz(d,e){this.a=d
this.b=e},
cCA:function cCA(d,e){this.a=d
this.b=e},
cCB:function cCB(d,e){this.a=d
this.b=e},
cCy:function cCy(d){this.a=d},
cCD:function cCD(d){this.a=d},
cCC:function cCC(d,e){this.a=d
this.b=e},
cCK:function cCK(d){this.a=d},
cCG:function cCG(d,e){this.a=d
this.b=e},
cCH:function cCH(d,e){this.a=d
this.b=e},
cCI:function cCI(d,e){this.a=d
this.b=e},
cCJ:function cCJ(d,e){this.a=d
this.b=e},
aw7:function aw7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hUk(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bz(new C.fro(),x.H).eS(new C.frp())}}else if(s)C.h8E()}catch(t){}},
h8E(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eS(new C.faE())}catch(u){}},
hUn(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fro:function fro(){},
frp:function frp(){},
faE:function faE(){},
hdb(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.e7(v,w,"").split(":"))},
hd8(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kN)return null
return A.a.b_(w,14)},
fSh(d){var w
if(d.b!==D.kN)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b_(w,21)},
hUN(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hdc(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hUI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.V(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kI(0,f)
t=x.N
u=B.cD(u,new C.fsn(),B.a3(u).k("H.E"),t)
s=B.B(u,B.a3(u).k("H.E"))
if(s.length===0)return B.V(t,t)
for(u=v.kI(0,f),u=new B.IV(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.QA(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.QA(A.a.b_(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cC(w)
if(l==null)return B.V(t,t)
k=B.V(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hUG(d,e){var w,v,u,t,s,r=B.a3(e).k("cy<1>"),q=B.B(new B.cy(e,r),r.k("H.E"))
A.d.b1(q,new C.fsm())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c9(s,"]"))continue
w=B.aOK(w,u,s,0)}return w},
hUK(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a2v:$.hjS(),s=x.N,r=B.V(s,s)
for(s=t.gdL(t),s=s.gai(s);s.C();){w=s.gU(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c9(u,"]"))continue
r.n(0,w.b,u)}return r},
hd9(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f7h(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hdb(q)===e)return q}return null},
hUL(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b_(v,u)
return A.d.gL(D.G3).a},
hUM(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.acY(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.acY(0,0,0)
v=C.f7h(b6,b0)
u=C.f7h(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hUK(b2,C.hUI(C.hd9(b2),v.r))
if(s.a!==0){u.r=C.hUG(C.hd9(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hdb(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f7h(b6,n)
i=C.f7h(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gL(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fSh(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hd8(a8)===a0||C.fSh(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ai(a1,16)
A.d.Q9(a1,new C.fst(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iW
$.iW=a9+1
A.d.J(a1,new C.eG(""+1000*a6+"_"+a9,D.kN,a2,a3,a4,a5,"",24,A.a4,A.bm,A.aB,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cg,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.acY(k,t,e)},
hUH(d){var w=C.hUL(d)
if(d.w==="hati_kuhowa")return C.hcw("",w)
return C.hcv("",w)},
fsn:function fsn(){},
fsm:function fsm(){},
fst:function fst(d){this.a=d},
h8n(){var w=new B.S(Date.now(),0,!1),v=new C.f9H()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.bx(w)},
fSp(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
ftl(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kN&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hdp(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.ftl(d)
w=B.bi(u)
if(w==null)return!C.ftl(d)
return new B.S(Date.now(),0,!1).a5().cY(w.a5().bN(18e9))},
hVs(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a5().ac()},
hut(d){return A.a.i(d).toLowerCase()},
aoj(d){return C.huv(d)},
huv(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aoj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aoj)
case 7:r=f
p=r.rK("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.J(o,C.hYY(),B.T(o).k("J<1,n>")).bZ(0,new C.c6k())
o=B.d9(o,o.$ti.k("H.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aX(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoj,v)},
aoi(d,e){return C.huu(d,e)},
huu(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoi=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoj(d),$async$aoi)
case 3:r=g
if(!J.cf(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aoi)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q1(r)),$async$aoi)
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
return B.i($async$aoi,v)},
aok(d,e){return C.huw(d,e)},
huw(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aok=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoj(d),$async$aok)
case 3:r=g
if(!J.hJ(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aok)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q1(r)),$async$aok)
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
return B.i($async$aok,v)},
Ug(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ug=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fLu&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Ug)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.V(e,x.I)
for(d=J.jq(p),d=d.gai(d),a0=x.z;d.C();){n=d.gU(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.UZ(B.a1(f.a(n.b),e,a0)))}$.a6b=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a9(a2)
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
return B.b(B.c0(),$async$Ug)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tI("civic_hati_kiapo_uongozi",null,A.ed),$async$Ug)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.V(o,x.I)
for(f=x.f,e=J.jq(f.a(J.q(l,"byState"))),e=e.gai(e),d=x.z;e.C();){j=e.gU(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.UZ(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cJ(o,B.a3(o).k("cJ<1,2>")).gai(0);o.C();){f=o.d
f.toString
i=f
h=$.a6b.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcv()
else f=!0
f=!f}else f=!0
if(f)$.a6b.n(0,i.a,i.b)}w=20
return B.b(C.aol(),$async$Ug)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a9(a3)
$.am.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fLu=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ug,v)},
aol(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aol=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aol)
case 6:s=e
r=B.V(x.N,x.P)
for(o=$.a6b,o=new B.cJ(o,B.a3(o).k("cJ<1,2>")).gai(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ad())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aol)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a9(l)
$.am.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aol,v)},
aYy(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aYy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Ug(!1),$async$aYy)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6b.h(0,t)
r=s==null?null:s.hx()
if(r==null){u=null
w=1
break}u=C.bA2(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYy,v)},
a6c(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6c=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hx()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6b.n(0,d,o)
$.fLu=!0
w=3
return B.b(C.aol(),$async$a6c)
case 3:w=4
return B.b(B.c0(),$async$a6c)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.V(e,x.P)
for(n=$.a6b,n=new B.cJ(n,B.a3(n).k("cJ<1,2>")).gai(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ad())}w=9
return B.b(B.nd("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a5().ac()],e,x.z),null),$async$a6c)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a9(a0)
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
return B.i($async$a6c,v)},
aom(d){var w=0,v=B.j(x.T),u,t,s
var $async$aom=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hV().a4q(A.eG),$async$aom)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fc(),$async$aom)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aYx(t,d),$async$aom)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aom,v)},
aYx(d,e){return C.hux(d,e)},
hux(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aYx=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c0(),$async$aYx)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aJ(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eT().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i0("media")
w=8
return B.b(p.wx(q,new Uint8Array(B.cp(d)),D.bva),$async$aYx)
case 8:n=p.C8(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a9(k)
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
return B.i($async$aYx,v)},
JN(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.en(e,!1,f,A.aB,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
f8X(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bm,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.eZ,j,k,l)},
fPt(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.en(h,!1,j,A.aB,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
f8v(d,e,f,g){return C.f8X(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fPu(d,e,f,g,h,i,j,k){var w=C.cC()
return C.en(A.pY,!1,j,A.aB,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bm,A.a4,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
h8m(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.e7(v,w,"").split(":"))},
bA2(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gL(t)
t=x.N
r=B.V(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.h8m(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kN&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hx()}h=C.fRW(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.B9(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.h8m(m)
if(l!=null&&r.ag(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kN&&A.a.c9(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bn(a1.z,new C.frm(a2))}else A.d.bn(a1.z,new C.frn())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.ftl(a0))a0.ax=a6.f.a5().ac()
return a0},
fRW(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fu8(D.a3v),l=C.cC(),k=x.u,j=B.a([C.en(A.bg,!1,s,A.aB,"marriage_locked_bg",r,24,A.bm,A.a4,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lg,1,0,0)],k),i=B.a([],k)
i.push(C.JN("NGMY",A.L,236069181,52,A.bm,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.JN("TAREHE:",A.bg,o,16,A.bm,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fPt("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.h8n()))
i.push(C.f8v(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.JN("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bm,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.JN("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f8X(0,0.002,D.fp,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fPu("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fPu("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fPu("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f8X(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.JN("VIDEO YA KIAPO",A.bg,o,10,A.bm,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.en(A.bg,!1,s,A.aB,"__kiapo_video__",r,24,A.bm,A.a4,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lg,0.77,0.115,0.492))
i.push(C.JN("Rais Anayeapa:",A.bg,p,15,A.bm,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.JN("Jina:",A.bg,p,13,A.bm,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fPt("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.f8v(0.195,0.7130000000000001,0.62,n))
i.push(C.JN("Sahihi:",A.bg,p,13,A.bm,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.en(A.bg,!1,s,A.aB,"marriage_sign_rais",0,24,A.bm,A.a4,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.eZ,0.38,0.21500000000000002,0.73))
i.push(C.f8v(0.21500000000000002,0.795,0.38,n))
i.push(C.JN("Tarehe:",A.bg,p,13,A.bm,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fPt("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.h8n()))
i.push(C.f8v(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f8X(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.JN("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bm,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rd(4294967035,t,0,0,j,l,D.pM,"","",u,D.dc)
return C.B9(t,t,t,t,D.nQ,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
afd(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afd=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eIy)
w=1
break}w=3
return B.b(C.Ug(!0),$async$afd)
case 3:w=4
return B.b(C.aYy(p),$async$afd)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hdp(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bY(D.b9V,null,new C.fmc(p),f,!0,!0,!1,A.lh,!1,!1,x.N),$async$afd)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.c9(null,null,!0,null,new C.fmd(),f,null,!0,!0,x.y),$async$afd)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fRW(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fRW(p))
case 1:return B.h(u,v)}})
return B.i($async$afd,v)},
f9H:function f9H(){},
c6k:function c6k(){},
frm:function frm(d){this.a=d},
frn:function frn(){},
fmc:function fmc(d){this.a=d},
fma:function fma(d){this.a=d},
fmb:function fmb(d){this.a=d},
fmd:function fmd(){},
fm8:function fm8(d){this.a=d},
fm9:function fm9(d){this.a=d},
aoS:function aoS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCe:function aCe(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e37:function e37(d){this.a=d},
e35:function e35(d){this.a=d},
e36:function e36(d){this.a=d},
e38:function e38(d){this.a=d},
e39:function e39(d){this.a=d},
wb(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.en(e,!1,f,A.aB,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bm,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
h80(d,e,f){var w=4291404327
return B.a([C.pS(0,f,D.eI,w,2,"ring_l",f,d-f*0.42,e),C.pS(0,f,D.eI,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f7W(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pS(4294967288,f,D.eI,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pS(h,s,D.eI,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pS(h,f*0.46,D.eI,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pS(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bm,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.eZ,j,k,l)},
f7V(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.en(h,!1,k,A.aB,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cg,D.cQ,g,e,f)},
bxt(d,e,f,g){return C.pS(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
h8_(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pS(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wb(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hda(){var w=new B.S(Date.now(),0,!1),v=new C.fss()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.bx(w)},
h81(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wb(r+".",A.bg,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f7V("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.bxt(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wb("Sahihi:",A.bg,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.en(A.bg,!1,4279310375,A.aB,"marriage_sign_"+d+"_witness_"+r,0,24,A.bm,A.a4,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.eZ,s,t,g-0.004),C.bxt(t,g+0.044,s,w)],x.u)},
afF(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d5w,D.ccp,D.cZI,D.d0t],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gai(s[w]);v.C();){u=v.gU(0)
if(u.a===d)return u}return null},
fOO(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fu8(d.d),v=B.a([C.en(A.bg,!1,4279310375,A.aB,"marriage_locked_bg",4280640491,24,A.bm,A.a4,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lg,1,0,0)],x.u)
A.d.v(v,C.hJ7(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hJ7(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wb("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.h80(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.h80(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f7W(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f7W(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wb("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pS(0,0.062,D.eI,b1,1.6,"crest_o",0.11,0.445,0.012),C.pS(0,0.046,D.eI,b1,1,"crest_i",0.084,0.458,0.02),C.wb("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pS(0,0.002,D.fp,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pS(b9,0.016,D.kO,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pS(0,0.002,D.fp,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wb("TAREHE:",A.bg,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f7V("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hda()),C.bxt(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wb(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pS(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pS(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.en(A.bg,!1,b9,A.aB,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bm,A.cs,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.cg,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pS(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.en(A.L,!1,c0,A.aB,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bm,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cg,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.h8_(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wb(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f7V("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
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
d=B.a([new C.eG(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bm,A.aB,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cg,0,"","","","","",!1,0),j,new C.eG(""+1000*f+"_"+e,D.eZ,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bm,A.aB,b6,A.bg,a9,D.fp,0,b5,0.8,0,!1,g,0,D.cg,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eG(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bm,A.aB,b7,A.dK,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*i+"_"+h,D.eZ,a1,a2,0.046,0.025875,"",24,A.a4,A.bm,A.aB,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bm,A.aB,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*e+"_"+a3,D.eZ,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bm,A.aB,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cg,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.h8_("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a3k||w===D.a3m||w===D.a3j||w===D.a3l){w=t-0.008
A.d.v(c2,C.f7W(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f7W(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pS(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.pS(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pS(0,0.0022,D.fp,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wb("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wb("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.h81("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.h81("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pS(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wb("MWANDISHI",A.bg,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wb("Jina:",A.bg,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f7V("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.bxt(0.215,p,0.3116,b5),C.wb("Sahihi:",A.bg,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.en(A.bg,!1,b6,A.aB,"marriage_sign_mwandishi",0,24,A.bm,A.a4,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.eZ,0.3161999999999999,0.5738,s-0.044),C.bxt(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pS(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wb("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hUJ(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fSz(d.d),p=new C.fso(s),o=new C.fsp(s),n=d.z,m=n===D.a3k||n===D.a3m||n===D.a3j||n===D.a3l,l=n===D.aD0||n===D.a3n||n===D.aD1,k=B.bZ(0,B.fK(q,A.A,t,t,A.cn,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a3n?26:16
i.push(new C.fsr().$1$size(w))}if(n===D.aD2)i.push(D.fmk)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hK,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ao)
n=B.I(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aLZ,p.$1$w(0.9),D.aLZ,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b5E,t,n,w,t,t,A.n),t,t,t,t,A.agR,t,t,t))
i.push(A.ao)
i.push(new C.fsq(r).$1("NIMETOWE"))
i.push(A.fV)
v=J.e0(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Lb,new B.co(A.aQ,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d8,new B.bE(1,A.bi,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.q,B.a([k,new B.C(A.afr,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hcv(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.afF(e,t)
if(r==null)r=A.d.gL(D.G3)
w=C.cC()
v=C.rd(r.e,t,0,0,C.fOO(r,0.165,y.O,D.d12,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pM,"","",s,D.dc)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.B9(t,t,t,t,D.nQ,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hcw(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.afF(e,t)
if(r==null)r=A.d.gL(D.G3)
w=C.cC()
v=C.rd(r.e,t,0,0,C.fOO(r,0.165,y.f,D.cXV,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pM,"","",s,D.dc)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.B9(t,t,t,t,D.nQ,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bBp(d,e,f){var w=0,v=B.j(x.T),u
var $async$bBp=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bY(A.K,null,new C.fDV(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBp,v)},
afe(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afe=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fmg(),q),q.k("H.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bY(D.Ko,null,new C.fmh(p),d,!0,!0,!1,A.lh,!1,!1,x.N),$async$afe)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hx())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBp(d,"Hati ya Kuhowa",D.G3),$async$afe)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kq(d,"Tafuta jimbo\u2026","",A.jS,"Chagua jimbo"),$async$afe)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hcv(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afe,v)},
aff(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aff=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fmk(),q),q.k("H.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bY(D.Ko,null,new C.fml(p),d,!0,!0,!1,A.lh,!1,!1,x.N),$async$aff)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hx())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBp(d,"Hati ya Kuhoweya",D.G3),$async$aff)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kq(d,"Tafuta jimbo\u2026","",A.jS,"Chagua jimbo"),$async$aff)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hcw(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aff,v)},
afg(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$afg=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fmo(),n),n.k("H.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bY(D.Ko,null,new C.fmp(m),d,!0,!0,!1,A.lh,!1,!1,x.N),$async$afg)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hx())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBp(d,"Malipo ya Awamu ya Mahari",D.Py),$async$afg)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kq(d,"Tafuta jimbo\u2026","",A.jS,"Chagua jimbo"),$async$afg)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.afF(s,D.Py)
if(q==null)q=A.d.gL(D.Py)
n=C.cC()
p=C.rd(q.e,null,0,0,C.fOO(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cT4,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pM,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dc)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.B9(null,null,null,null,D.nQ,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afg,v)},
xa:function xa(d,e){this.a=d
this.b=e},
jg:function jg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fss:function fss(){},
fso:function fso(d){this.a=d},
fsq:function fsq(d){this.a=d},
fsr:function fsr(){},
fsp:function fsp(d){this.a=d},
fDV:function fDV(d,e){this.a=d
this.b=e},
ac4:function ac4(d,e,f){this.c=d
this.d=e
this.a=f},
dUA:function dUA(d,e,f){this.a=d
this.b=e
this.c=f},
dUz:function dUz(d,e){this.a=d
this.b=e},
dUy:function dUy(d,e){this.a=d
this.b=e},
abu:function abu(d,e,f){this.c=d
this.d=e
this.a=f},
fmg:function fmg(){},
fmh:function fmh(d){this.a=d},
fme:function fme(d){this.a=d},
fmf:function fmf(d){this.a=d},
fmk:function fmk(){},
fml:function fml(d){this.a=d},
fmi:function fmi(d){this.a=d},
fmj:function fmj(d){this.a=d},
fmo:function fmo(){},
fmp:function fmp(d){this.a=d},
fmm:function fmm(d){this.a=d},
fmn:function fmn(d){this.a=d},
JQ(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.en(e,!1,f,A.aB,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bm,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,k,l,m)},
Cc(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aB,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bm,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.eZ,j,k,l)},
h8H(d,e,f){return C.Cc(0,0.002,D.fp,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bxD(d,e,f,g,h){return B.a([C.Cc(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.JQ(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fPy(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cc(0,0.002,D.fp,g,1,"orn_l_"+t,u,d,v),C.Cc(h,0.016,D.kO,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cc(0,0.002,D.fp,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a09(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.JQ(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.en(A.L,!1,j,A.aB,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cD,A.O,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,t,u,g-0.002),C.h8H(u,g+0.018,t)],x.u)},
h8I(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cc(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Cc(w,0.024,D.kO,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cc(w,0.024,D.kO,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.JQ(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bxC(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.JQ("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.en(A.bg,!1,4279310375,A.aB,"marriage_sign_"+d,0,24,A.bm,A.a4,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.eZ,v,w,f-0.006),C.h8H(w,f+0.016,v)],x.u)},
fSA(d){var w,v
for(w=0;w<19;++w){v=D.PL[w]
if(v.a===d)return v}return null},
hX_(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.afF(A.a.b_(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.afF(A.a.b_(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b_(k,18)
w=C.afF(u,D.Py)
v=w==null?l:w.d
if(v==null){w=C.afF(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fSA(A.a.b_(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.h9w.a8(0)
$.h9J.a8(0)
t=C.fu8(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fTE(d){var w=0,v=B.j(x.T),u
var $async$fTE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bY(A.K,null,new C.fFn(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTE,v)},
xd:function xd(d,e){this.a=d
this.b=e},
nu:function nu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhh:function bhh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fFn:function fFn(){},
ac7:function ac7(d){this.a=d},
e8m:function e8m(d,e){this.a=d
this.b=e},
e8l:function e8l(d){this.a=d},
e8k:function e8k(d,e){this.a=d
this.b=e},
adM:function adM(d,e,f){this.c=d
this.d=e
this.a=f},
fSz(d){return $.h9J.cg(0,d,new C.fua(d))},
fu8(d){return $.h9w.cg(0,d,new C.fu9(d))},
fx(d){return B.fJ8(d>>>16&255,d>>>8&255,d&255,255)},
hM8(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.haM(4294570461,4293910718,4284234270,u)
case 1:return C.haM(4294635750,4293975240,t,4292912216)
case 2:w=C.f6w(s,4294505966,r)
C.bxn(w,14,16,p)
C.kn(w,8,9,464,836,u,1.2)
C.C8(w,2,2,1,1,u,10)
C.C8(w,478,2,-1,1,u,10)
C.C8(w,2,852,1,-1,u,10)
C.C8(w,478,852,-1,-1,u,10)
return w
case 3:return C.f6w(4294966515,4294373082,4289102906)
case 4:return C.hGW(C.f6w(4294376440,4293653998,4290287194))
case 5:w=C.f6w(4294965238,4294437098,4288444980)
C.bxn(w,14,16,4283043359)
C.kn(w,6,7,468,840,u,1)
C.kn(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,n,4294175448)
C.rx(v,n)
C.kn(v,24,24,432,806,4286209070,1)
C.a_Y(v,12,12,468,12,o,3,20)
C.a_Y(v,12,842,468,842,o,3,20)
C.a_Y(v,12,12,12,842,o,3,20)
C.a_Y(v,468,12,468,842,o,3,20)
return v
case 7:return C.hF1(4294440434,4293518297,4280228630,r)
case 8:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,m,4293911504)
C.rx(v,m)
C.kn(v,28,28,424,798,l,1)
C.feX(v,28,28,l,k)
C.feX(v,452,28,l,k)
C.feX(v,28,826,l,k)
C.feX(v,452,826,l,k)
return v
case 9:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,j,4294111986)
C.rx(v,j)
C.kn(v,18,18,444,818,4292401368,0.7)
B.iG(v,!0,C.fx(p),0,13,0,853)
return v
case 10:return C.hIU(i,4294173372)
case 11:return C.hJZ(4294439140,4293449662)
case 12:return C.hEU(h,4294239432)
case 13:return C.hJq(4294244340,4293193448)
case 14:return C.hNG(4294505710,4293780694)
case 15:return C.f5w(4294966259,4294439138,o,p,q)
case 16:return C.f5w(4294966776,4294178544,o,g,g)
case 17:return C.f5w(4294965493,4294504170,o,4286200650,q)
case 18:return C.f5w(4294966519,4294373862,o,p,p)
case 19:return C.hI0()
case 20:return C.hI1()
case 21:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,h,4293976768)
C.rx(v,h)
C.bxn(v,14,16,p)
B.iG(v,!0,C.fx(u),4,475,4,9)
B.iG(v,!0,C.fx(u),4,475,844,849)
B.iG(v,!0,C.fx(u),4,9,4,849)
B.iG(v,!0,C.fx(u),470,475,4,849)
C.a_Y(v,10,12,470,12,u,2,16)
C.a_Y(v,10,842,470,842,u,2,16)
C.a_Y(v,10,12,10,842,u,2,18)
C.a_Y(v,470,12,470,842,u,2,18)
C.C8(v,2,2,1,1,t,10)
C.C8(v,478,2,-1,1,t,10)
C.C8(v,2,852,1,-1,t,10)
C.C8(v,478,852,-1,-1,t,10)
C.kn(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,s,4294438872)
C.rx(v,s)
C.kn(v,14,16,452,822,o,2.2)
C.kn(v,22,24,436,806,o,1)
C.fQQ(v,!1,!1,o,p,p,36,14,16)
C.kz(v,240,20,7,o,!0)
C.kz(v,240,834,7,o,!0)
C.kz(v,18,427,7,o,!0)
C.kz(v,462,427,7,o,!0)
return v
case 23:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,i,4293910712)
C.rx(v,i)
B.iG(v,!0,C.fx(u),0,479,0,20)
B.iG(v,!0,C.fx(u),0,479,834,853)
B.iG(v,!0,C.fx(u),0,20,0,853)
B.iG(v,!0,C.fx(u),460,479,0,853)
B.iG(v,!0,C.fx(f),5,474,5,9)
B.iG(v,!0,C.fx(f),5,474,844,848)
B.iG(v,!0,C.fx(f),5,9,5,848)
B.iG(v,!0,C.fx(f),470,474,5,848)
C.kn(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,e,4294174404)
C.rx(v,e)
C.bxn(v,14,16,p)
B.iG(v,!0,C.fx(u),3,476,3,8)
B.iG(v,!0,C.fx(u),3,476,845,850)
B.iG(v,!0,C.fx(u),3,8,3,850)
B.iG(v,!0,C.fx(u),471,476,3,850)
C.kn(v,9,10,462,834,t,1)
C.kn(v,14,16,452,822,u,1.8)
C.kz(v,240,8,4,u,!0)
C.kz(v,240,846,4,u,!0)
C.kz(v,8,427,4,u,!0)
C.kz(v,472,427,4,u,!0)
C.kz(v,8,8,3,t,!0)
C.kz(v,472,8,3,t,!0)
C.kz(v,8,846,3,t,!0)
C.kz(v,472,846,3,t,!0)
return v}},
y2(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kB(d,!1,A.d9,new B.Rb(s),r,A.cW,1,0,w-1,k,k);++k}},
rx(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eS()
n.dH(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iB()
v=A.o.D(A.k.O(s.gb6(s))-3,0,255)
r=A.o.D(A.k.O(s.gbf())-3,0,255)
q=A.o.D(A.k.O(s.gbg(s))-2,0,255)
p=d.a
if(p!=null)p.ju(u,t,v,r,q,255)}},
kn(d,e,f,g,h,i,j){var w,v=null,u=C.fx(i),t=e+g
B.kB(d,!0,A.d9,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kB(d,!0,A.d9,u,v,A.cW,j,e,t,w,w)
B.kB(d,!0,A.d9,u,v,A.cW,j,e,e,f,w)
B.kB(d,!0,A.d9,u,v,A.cW,j,t,t,f,w)},
C8(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kB(d,!0,A.d9,C.fx(i),u,A.cW,2,e,e+g*j,f,f)
B.kB(d,!0,A.d9,C.fx(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kB(d,!0,A.d9,C.fx(i),u,A.cW,1,w,e+g*t,v,v)
B.kB(d,!0,A.d9,C.fx(i),u,A.cW,1,w,w,v,f+h*t)},
haM(d,e,f,g){var w=null,v=B.hk(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rx(v,d)
B.iG(v,!0,C.fx(f),0,479,0,28)
B.iG(v,!0,C.fx(f),0,479,826,853)
B.iG(v,!0,C.fx(f),0,28,0,853)
B.iG(v,!0,C.fx(f),452,479,0,853)
C.kn(v,5,5,470,844,g,1.1)
C.kn(v,28,28,424,798,g,1.6)
C.C8(v,2,2,1,1,g,11)
C.C8(v,478,2,-1,1,g,11)
C.C8(v,2,852,1,-1,g,11)
C.C8(v,478,852,-1,-1,g,11)
return v},
f6w(d,e,f){var w=null,v=B.hk(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rx(v,d)
C.kn(v,14,16,452,822,f,1.6)
C.kn(v,20,22,440,810,f,0.8)
return v},
bxn(d,e,f,g){var w,v=C.fx(g)
B.iG(d,!0,v,0,479,0,f-1)
w=854-f
B.iG(d,!0,v,0,479,w,853);--w
B.iG(d,!0,v,0,e-1,f,w)
B.iG(d,!0,v,480-e,479,f,w)},
hGW(d){var w,v,u=4291404327
C.bxn(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kz(d,w,8,3,u,!0)
C.kz(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kz(d,7,v,3,u,!0)
C.kz(d,473,v,3,u,!0)}return d},
fhW(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j8(e,f),new B.j8(e+g*n,f),new B.j8(e,f+h*n)],t)
B.a0J(d,C.fx(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j8(s,u),new B.j8(e+g*v,u),new B.j8(s,f+h*v)],t)
B.a0J(d,C.fx(k),t)
t=A.k.V(n*0.39)
C.kz(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kz(d,e+g*t,f+h*3,4,k,!0)
C.kz(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kz(d,e+g*t,f,5,k,!0)
C.kz(d,e,f+h*t,5,k,!0)}},
fQQ(d,e,f,g,h,i,j,k,l){var w,v
C.fhW(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fhW(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fhW(d,k,v,1,-1,e,f,g,h,i,j)
C.fhW(d,w,v,-1,-1,e,f,g,h,i,j)},
a_Y(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kV(d,!0,A.d9,new B.qK(p),null,A.cW,j,r,q)}},
fh4(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kB(d,!0,A.d9,new B.qK(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kB(d,!0,A.d9,new B.qK(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hF1(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hk(o,o,A.c9,0,A.e_,854,o,0,3,o,A.c9,480,!1)
C.y2(n,d,e)
C.rx(n,d)
C.kn(n,20,20,440,814,f,1.2)
C.fh4(n,0,0,1,1,g)
C.fh4(n,480,0,-1,1,g)
C.fh4(n,0,854,1,-1,g)
C.fh4(n,480,854,-1,-1,g)
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
B.kB(n,!0,A.d9,new B.qK(p),o,A.cW,1.2,240,r,60,q)}return n},
feX(d,e,f,g,h){var w
C.fkq(d,!0,C.fx(g),13,e,f)
C.fkq(d,!0,C.fx(g),9,e,f)
w=B.a([new B.j8(e,f-4),new B.j8(e+4,f),new B.j8(e,f+4),new B.j8(e-4,f)],x.J)
B.a0J(d,C.fx(h),w)},
kz(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j8(e,v),new B.j8(u,f),new B.j8(e,t),new B.j8(s,f)],x.J)
if(i){B.a0J(d,C.fx(h),r)
return}B.kB(d,!0,A.d9,C.fx(h),w,A.cW,1,e,u,v,f)
B.kB(d,!0,A.d9,C.fx(h),w,A.cW,1,u,e,f,t)
B.kB(d,!0,A.d9,C.fx(h),w,A.cW,1,e,s,t,f)
B.kB(d,!0,A.d9,C.fx(h),w,A.cW,1,s,e,f,v)},
f5v(d,e,f,g,h,i,j){var w,v=B.a([new B.j8(e,f),new B.j8(e+g*28,f),new B.j8(e,f+h*28)],x.J)
B.a0J(d,C.fx(i),v)
v=e+g*14
w=f+h*14
C.kz(d,v,w,6,j,!0)
C.kz(d,v,w,3,i,!0)},
f5w(d,e,f,g,h){var w=null,v=B.hk(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rx(v,d)
C.kn(v,18,18,444,818,f,2)
C.kn(v,26,26,428,802,f,0.9)
if(h!=null)B.iG(v,!0,C.fx(h),28,451,28,34)
C.f5v(v,18,18,1,1,g,f)
C.f5v(v,462,18,-1,1,g,f)
C.f5v(v,18,836,1,-1,g,f)
C.f5v(v,462,836,-1,-1,g,f)
return v},
hI0(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hk(v,v,A.c9,0,A.e_,854,v,0,3,v,A.c9,480,!1)
C.y2(r,u,4294240980)
C.rx(r,u)
C.kn(r,10,12,460,830,t,3.2)
C.kn(r,18,20,444,814,s,1.2)
C.kn(r,24,26,432,802,t,1.8)
C.fQQ(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kz(r,w,16,3,t,!0)
C.kz(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kz(r,16,w,3,t,!0)
C.kz(r,464,w,3,t,!0)}return r},
hI1(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hk(t,t,A.c9,0,A.e_,854,t,0,3,t,A.c9,480,!1)
C.y2(p,s,4294373080)
C.rx(p,s)
C.kn(p,16,18,448,818,r,2.4)
C.kn(p,24,26,432,802,4286209044,1)
w=new C.f7N(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fQQ(p,!1,!0,r,q,q,34,16,18)
return p},
by3(d,e,f,g,h,i){B.iG(d,!0,C.fx(i),e,e+g,f,f+h)},
byT(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kB(d,!1,A.d9,new B.Rb(i),null,A.cW,1,e,w,l,l)}},
hIT(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kB(d,!1,A.d9,new B.qK(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
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
B.kB(d,!1,A.d9,new B.qK(r),null,A.cW,1,t,t,f,s);++q}},
hIU(d,e){var w,v,u=null,t=B.hk(u,u,A.c9,0,A.e_,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hIT(t,v,w,30,D.cMf,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.by3(t,44,44,392,766,d)
C.byT(t,44,44,392,766,d,e)
C.rx(t,d)
C.kn(t,44,44,392,766,4292128567,2.2)
C.kn(t,50,50,380,754,4279898632,0.8)
return t},
hJY(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kz(d,e,f,7,h,!0)
C.kz(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kB(d,!0,A.d9,C.fx(h),o,A.cW,1.6,w,u,v,t)
B.kB(d,!0,A.d9,C.fx(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kB(d,!0,A.d9,new B.qK(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kB(d,!0,A.d9,C.fx(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kB(d,!0,A.d9,C.fx(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kV(d,!0,A.d9,C.fx(h),o,A.cW,2,e,f)}},
hJZ(d,e){var w,v,u,t,s=null,r=B.hk(s,s,A.c9,0,A.e_,854,s,0,3,s,A.c9,480,!1)
B.iG(r,!0,C.fx(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hJY(r,u,v,w,4292391514)}C.by3(r,46,46,388,762,d)
C.byT(r,46,46,388,762,d,e)
C.rx(r,d)
C.kn(r,46,46,388,762,4291404327,1.8)
return r},
h6g(d,e,f,g){C.fkq(d,!0,C.fx(g),16,e,f)
C.fkq(d,!0,C.fx(g),11,e,f)
C.kz(d,e,f,6,g,!0)
B.kB(d,!0,A.d9,C.fx(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kB(d,!0,A.d9,C.fx(g),null,A.cW,1.3,e,e,f-14,f+14)},
hEU(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hk(v,v,A.c9,0,A.e_,854,v,0,3,v,A.c9,480,!1)
B.iG(s,!0,C.fx(4280948752),0,479,0,853)
B.iG(s,!0,C.fx(u),0,479,0,78)
B.iG(s,!0,C.fx(u),0,479,776,853)
for(w=28;w<460;w+=44){C.h6g(s,w,39,t)
C.h6g(s,w,815,t)}C.by3(s,38,92,404,670,d)
C.byT(s,38,92,404,670,d,e)
C.rx(s,d)
C.kn(s,38,92,404,670,t,1.8)
C.kn(s,45,99,390,656,4287322667,0.8)
return s},
hJp(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j8(e,f),new B.j8(q-5,w),new B.j8(q,f-(18-Math.abs(r)*3)),new B.j8(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a0J(d,new B.qK(o),p)}B.kV(d,!0,A.d9,C.fx(4292128567),null,A.cW,3,e,f)},
hJq(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hk(s,s,A.c9,0,A.e_,854,s,0,3,s,A.c9,480,!1)
C.y2(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kB(q,!0,A.d9,new B.qK(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kB(q,!0,A.d9,new B.qK(u),s,A.cW,1.1,v,v,0,853)}B.iG(q,!0,C.fx(r),0,479,0,70)
B.iG(q,!0,C.fx(r),0,479,798,853)
for(t=0;t<5;++t)C.hJp(q,70+t*85,48,4292128567)
C.by3(q,48,78,384,712,d)
C.byT(q,48,78,384,712,d,e)
C.rx(q,d)
C.kn(q,48,78,384,712,4291404327,1.6)
return q},
hNG(d,e){var w,v,u,t=null,s=4279970378,r=B.hk(t,t,A.c9,0,A.e_,854,t,0,3,t,A.c9,480,!1)
B.iG(r,!0,C.fx(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kz(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kV(r,!0,A.d9,new B.qK(u),t,A.cW,1,v,w)}C.by3(r,40,40,400,774,d)
C.byT(r,40,40,400,774,d,e)
C.rx(r,d)
C.kn(r,40,40,400,774,4291058750,2)
C.kn(r,48,48,384,758,s,0.8)
return r},
kJ:function kJ(d,e){this.a=d
this.b=e},
fua:function fua(d){this.a=d},
fu9:function fu9(d){this.a=d},
f7N:function f7N(d){this.a=d},
fuO(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hJS(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fPr(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.of(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.afB(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
ae7(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$ae7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v2(null,""),$async$ae7)
case 3:n=g
if(A.a.i(n).length===0)throw B.U("AI is not available right now. Please try again later.")
t=B.mV(n)
if(e==null)s=A.hj
else{r=C.hJS(e)
s=B.a([new B.ZZ(A.cS.gcu().aI(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qC(t,d,s,E.EA),$async$ae7)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.U(q!=null&&B.Kf(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$ae7,v)},
bAw(d){return C.hWG(d)},
hWG(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bAw=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ad(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.ae7(r,null),$async$bAw)
case 7:q=f
p=C.fPr(q)
if(p==null){u=d
w=1
break}o=d.aAK(p)
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
return B.i($async$bAw,v)},
ha6(d){var w,v=F.fRS(d)
v=B.aJ(v,"book","newspaper")
if(F.a11(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fyJ(d,e,f,g){return C.hYx(d,e,f,g)},
hYx(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fyJ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fuO(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hdy()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.ae7('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.ha6(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fyJ)
case 3:r=m.fPr(i)
if(r==null)throw B.U(y.S)
q=new C.z1(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aAK(r)
t=q.r
if(t.length===0)throw B.U("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a11(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a11(A.d.aH(t," "))==="sw"?C.bAw(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyJ,v)},
bA0(d,e,f,g,h){return C.hUi(d,e,f,g,h)},
hUi(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bA0=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fG(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hdy()
k=A.R.ao(d.ad(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.ae7('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.ha6(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bA0)
case 3:p=j.fPr(a0)
if(p==null)throw B.U(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cw(o)){n=d.aAK(B.a1(o,x.N,x.z))
m=A.R.ao(n.ad(),null)!==A.R.ao(d.ad(),null)}else{n=d
m=!1}w=m&&F.a11(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bAw(n),$async$bA0)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a6Q(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bA0,v)},
a6Q:function a6Q(d,e,f){this.a=d
this.b=e
this.c=f},
i0d(d,e){return B.a5(d,!1).ci(B.em(new C.fFy(e),!0,null,x.H))},
fFy:function fFy(d){this.a=d},
UM:function UM(d,e){this.c=d
this.a=e},
aCx:function aCx(d,e,f,g,h,i,j,k){var _=this
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
ebE:function ebE(d){this.a=d},
ebD:function ebD(){},
ebF:function ebF(d){this.a=d},
ebC:function ebC(d,e){this.a=d
this.b=e},
ebG:function ebG(){},
ebg:function ebg(d,e){this.a=d
this.b=e},
ebc:function ebc(d,e){this.a=d
this.b=e},
ebn:function ebn(d){this.a=d},
ebo:function ebo(d,e){this.a=d
this.b=e},
ebp:function ebp(d){this.a=d},
ebi:function ebi(d,e){this.a=d
this.b=e},
ebj:function ebj(d,e){this.a=d
this.b=e},
ebk:function ebk(d,e){this.a=d
this.b=e},
ebl:function ebl(d){this.a=d},
ebm:function ebm(d){this.a=d},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebe:function ebe(d){this.a=d},
ebf:function ebf(d){this.a=d},
ebv:function ebv(d){this.a=d},
ebw:function ebw(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebx:function ebx(d,e){this.a=d
this.b=e},
ebt:function ebt(d,e){this.a=d
this.b=e},
eby:function eby(d){this.a=d},
ebs:function ebs(d){this.a=d},
ebz:function ebz(d){this.a=d},
ebr:function ebr(d){this.a=d},
ebA:function ebA(d,e){this.a=d
this.b=e},
ebq:function ebq(d,e){this.a=d
this.b=e},
ebB:function ebB(d){this.a=d},
ebd:function ebd(d,e){this.a=d
this.b=e},
ftK(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$ftK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h7J){w=1
break}r=new C.ftL()
t=4
q=x.s
w=7
return B.b(B.iI(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$ftK)
case 7:$.h7J=!0
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
return B.i($async$ftK,v)},
bAn(d){return A.Go[B.mo(d)-1]+", "+A.oB[B.bG(d)-1]+" "+B.bQ(d)+", "+B.bx(d)},
hMM(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.d9w[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fSg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fu(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.fs2(),B.T(v).k("a2<1>")))
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
continue}o=new C.fs4(j,h)
n=new C.fs3(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iR(o.$1(l)))
j.a+=l}return u},
fPb(d,e){var w=new C.f7o()
return A.d.cI(e,0,new C.f7m(w))>=A.d.cI(d,0,new C.f7n(w))},
h4W(d){var w,v,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v))
u.E(new B.b5(46,0))
w=d.a
u.E(new B.ap(w,0))
v=d.b
u.E(new B.ap(w,v-46))
u.E(new B.ap(w-46,v))
u.E(new B.ap(0,v))
u.E(new B.ap(0,46))
u.E(new B.bF())
return u},
z1:function z1(d,e,f,g,h,i,j,k,l,m){var _=this
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
ca0:function ca0(d){this.a=d},
c9Z:function c9Z(){},
ca_:function ca_(){},
rZ:function rZ(d,e){this.a=d
this.b=e},
AX:function AX(d,e){this.a=d
this.b=e},
l7:function l7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
ftL:function ftL(){},
fs2:function fs2(){},
fs4:function fs4(d,e){this.a=d
this.b=e},
fs3:function fs3(d,e,f){this.a=d
this.b=e
this.c=f},
f7o:function f7o(){},
f7p:function f7p(){},
f7m:function f7m(d){this.a=d},
f7n:function f7n(d){this.a=d},
b_2:function b_2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ca1:function ca1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ca2:function ca2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ca3:function ca3(d){this.a=d},
bav:function bav(d){this.a=d},
bau:function bau(d,e){this.b=d
this.a=e},
brU:function brU(d){this.a=d},
b71:function b71(d,e){this.b=d
this.a=e},
bpq:function bpq(d,e){this.b=d
this.a=e},
hft(d,e){return B.a5(d,!1).ci(B.em(new C.fFB(e,null),!0,null,x.E))},
fFB:function fFB(d,e){this.a=d
this.b=e},
UP:function UP(d,e,f){this.c=d
this.d=e
this.a=f},
aCB:function aCB(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ecP:function ecP(){},
ecQ:function ecQ(d){this.a=d},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecC:function ecC(d){this.a=d},
ecD:function ecD(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecH:function ecH(d){this.a=d},
ecI:function ecI(d,e,f){this.a=d
this.b=e
this.c=f},
ecE:function ecE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecL:function ecL(d,e){this.a=d
this.b=e},
ecG:function ecG(d,e){this.a=d
this.b=e},
ecM:function ecM(d){this.a=d},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecN:function ecN(d,e){this.a=d
this.b=e},
ba1:function ba1(d,e,f){this.b=d
this.c=e
this.a=f},
i0j(d){return B.a5(d,!1).ci(B.em(new C.fFR(),!0,null,x.I))},
bxP(d,e){var w,v,u,t,s,r,q=B.c1(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fQz(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fFR:function fFR(){},
ZS:function ZS(d){this.a=d},
ok:function ok(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aDZ:function aDZ(d,e,f,g,h,i,j,k,l){var _=this
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
_.c6=_.bR=_.bj=0
_.cW=_.cT=!1
_.c=_.a=null},
eM3:function eM3(d){this.a=d},
eKW:function eKW(d,e){this.a=d
this.b=e},
eLj:function eLj(d,e){this.a=d
this.b=e},
eLt:function eLt(d){this.a=d},
eKF:function eKF(d){this.a=d},
eKG:function eKG(d){this.a=d},
eKD:function eKD(d){this.a=d},
eKE:function eKE(d){this.a=d},
eLc:function eLc(d,e){this.a=d
this.b=e},
eLd:function eLd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLp:function eLp(d,e,f){this.a=d
this.b=e
this.c=f},
eLo:function eLo(d,e){this.a=d
this.b=e},
eLq:function eLq(d,e){this.a=d
this.b=e},
eLn:function eLn(d,e){this.a=d
this.b=e},
eLs:function eLs(d,e,f){this.a=d
this.b=e
this.c=f},
eLr:function eLr(d,e){this.a=d
this.b=e},
eKv:function eKv(d){this.a=d},
eKw:function eKw(d){this.a=d},
eKx:function eKx(d){this.a=d},
eKu:function eKu(){},
eKy:function eKy(d,e){this.a=d
this.b=e},
eKt:function eKt(d,e){this.a=d
this.b=e},
eKA:function eKA(){},
eKz:function eKz(d,e){this.a=d
this.b=e},
eKs:function eKs(d,e){this.a=d
this.b=e},
eKp:function eKp(d,e){this.a=d
this.b=e},
eKB:function eKB(d){this.a=d},
eKr:function eKr(d,e){this.a=d
this.b=e},
eKC:function eKC(d){this.a=d},
eKq:function eKq(d,e){this.a=d
this.b=e},
eLT:function eLT(d,e){this.a=d
this.b=e},
eM_:function eM_(d){this.a=d},
eM0:function eM0(d,e){this.a=d
this.b=e},
eM1:function eM1(){},
eLU:function eLU(d,e){this.a=d
this.b=e},
eLS:function eLS(d,e){this.a=d
this.b=e},
eLV:function eLV(d,e){this.a=d
this.b=e},
eLR:function eLR(d,e){this.a=d
this.b=e},
eLW:function eLW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLQ:function eLQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLX:function eLX(d){this.a=d},
eLY:function eLY(d,e){this.a=d
this.b=e},
eLZ:function eLZ(d){this.a=d},
eLP:function eLP(d){this.a=d},
eLC:function eLC(d){this.a=d},
eLD:function eLD(d){this.a=d},
eLB:function eLB(d,e){this.a=d
this.b=e},
eLw:function eLw(d,e){this.a=d
this.b=e},
eLE:function eLE(d){this.a=d},
eLH:function eLH(d){this.a=d},
eLA:function eLA(d){this.a=d},
eLI:function eLI(d){this.a=d},
eLJ:function eLJ(d){this.a=d},
eLK:function eLK(d){this.a=d},
eLL:function eLL(d){this.a=d},
eLz:function eLz(d){this.a=d},
eLM:function eLM(d){this.a=d},
eLy:function eLy(d){this.a=d},
eLN:function eLN(d,e){this.a=d
this.b=e},
eLx:function eLx(d,e){this.a=d
this.b=e},
eLO:function eLO(d){this.a=d},
eLF:function eLF(d){this.a=d},
eLG:function eLG(d){this.a=d},
eLg:function eLg(d){this.a=d},
eLf:function eLf(d){this.a=d},
eLh:function eLh(d,e){this.a=d
this.b=e},
eLe:function eLe(d,e){this.a=d
this.b=e},
eLi:function eLi(d){this.a=d},
eL8:function eL8(d){this.a=d},
eL7:function eL7(d){this.a=d},
eL9:function eL9(d){this.a=d},
eL6:function eL6(d){this.a=d},
eLa:function eLa(d,e){this.a=d
this.b=e},
eL5:function eL5(d,e){this.a=d
this.b=e},
eL4:function eL4(d,e){this.a=d
this.b=e},
eKN:function eKN(d){this.a=d},
eKO:function eKO(d){this.a=d},
eKP:function eKP(d){this.a=d},
eKQ:function eKQ(d){this.a=d},
eKR:function eKR(d){this.a=d},
eKS:function eKS(d){this.a=d},
eKT:function eKT(d){this.a=d},
eKU:function eKU(d){this.a=d},
eKV:function eKV(d){this.a=d},
eK8:function eK8(d){this.a=d},
eK9:function eK9(d){this.a=d},
eKa:function eKa(d){this.a=d},
eKb:function eKb(d){this.a=d},
eKc:function eKc(d){this.a=d},
eK7:function eK7(d){this.a=d},
eKd:function eKd(d){this.a=d},
eKe:function eKe(d){this.a=d},
eKH:function eKH(d){this.a=d},
eKI:function eKI(d){this.a=d},
eKJ:function eKJ(d){this.a=d},
eKK:function eKK(d){this.a=d},
eKL:function eKL(d){this.a=d},
eKi:function eKi(d){this.a=d},
eKj:function eKj(d){this.a=d},
eKk:function eKk(d){this.a=d},
eKl:function eKl(d){this.a=d},
eKm:function eKm(d){this.a=d},
eKh:function eKh(d){this.a=d},
eKn:function eKn(d){this.a=d},
eKg:function eKg(d){this.a=d},
eKo:function eKo(d){this.a=d},
eKf:function eKf(d){this.a=d},
eLb:function eLb(d){this.a=d},
eL3:function eL3(d){this.a=d},
eL_:function eL_(d){this.a=d},
eKZ:function eKZ(d){this.a=d},
eL0:function eL0(d,e){this.a=d
this.b=e},
eKY:function eKY(d,e){this.a=d
this.b=e},
eL1:function eL1(d,e){this.a=d
this.b=e},
eKX:function eKX(d,e){this.a=d
this.b=e},
eL2:function eL2(d){this.a=d},
eLm:function eLm(d){this.a=d},
eLl:function eLl(d,e,f){this.a=d
this.b=e
this.c=f},
eLk:function eLk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eLv:function eLv(d,e){this.a=d
this.b=e},
eLu:function eLu(d,e){this.a=d
this.b=e},
eKM:function eKM(d){this.a=d},
eM2:function eM2(d){this.a=d},
bdy:function bdy(d,e){this.b=d
this.a=e},
hWR(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hWS(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kI(0,d),m=B.B(n,B.a3(n).k("H.E"))
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
byp(){var w=$.bxx,v=$.Pv
$.Pv=v+1
return w+"_"+v},
i5(d,e,f,g,h,i,j){return C.en(A.bg,!1,4279310375,A.aB,"",i,24,A.bm,A.a4,"",h,C.byp(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cg,D.eZ,g,e,f)},
nL(d,e,f,g){var w=f*9
return C.i5(D.eI,d-f/2,e-w/32,f,w/16,g,0)},
hGy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bxx
p=$.Pv
$.Pv=p+1
w.push(new C.eG(q+"_"+p,D.eZ,0,r,1,0.0016,"",24,A.a4,A.bm,A.aB,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bxx
p=$.Pv
$.Pv=p+1
w.push(new C.eG(q+"_"+p,D.eZ,o,0,0.004,1,"",24,A.a4,A.bm,A.aB,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nL(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nL(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i5(D.be,0.08,0.08,0.5,0.003,v,0),C.i5(D.be,0.58,0.08,0.004,0.06,v,0),C.i5(D.be,0.58,0.14,0.34,0.003,v,0),C.i5(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i5(D.be,0.08,0.8,0.004,0.14,t,0),C.i5(D.be,0.08,0.94,0.6,0.003,t,0),C.nL(0.58,0.08,0.05,e),C.nL(0.92,0.22,0.05,e),C.nL(0.08,0.8,0.05,f),C.nL(0.68,0.94,0.05,f),C.nL(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i5(D.kO,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i5(D.kO,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i5(D.kO,0.7,0.8,0.22,0.12,w|1140850688,0),C.i5(D.kO,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nL(0.5,0.5,1.5,w|335544320),C.nL(0.5,0.5,1.15,w|402653184),C.nL(0.5,0.5,0.8,v|436207616),C.nL(0.95,0.05,0.4,v|855638016),C.nL(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nL(0.85,0.08,0.7,w|1140850688),C.nL(0.1,0.35,0.5,v|855638016),C.nL(0.9,0.62,0.55,v|771751936),C.nL(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i5(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i5(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i5(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i5(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nL(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nL(0.5,0.2,0.65,(w|3422552064)>>>0),C.nL(0.5,0.2,0.95,w|855638016),C.i5(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i5(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i5(D.jx,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i5(D.jx,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i5(D.jx,0.15,0.86,0.6,0.14,1712265002,0),C.nL(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cNA[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bxx
l=$.Pv
$.Pv=l+1
w.push(new C.eG(m+"_"+l,D.eZ,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bm,A.aB,k,A.bg,null,D.eI,q,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nL(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i5(D.jx,0.35,-0.1,0.3,0.62,w|855638016,0),C.i5(D.jx,0.05,-0.1,0.3,0.55,v,-0.5),C.i5(D.jx,0.65,-0.1,0.3,0.55,v,0.5),C.nL(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i5(D.be,0.06,0.04,0.88,0.002,e,0),C.i5(D.be,0.06,0.96,0.88,0.002,e,0),C.i5(D.be,0.06,0.04,0.004,0.92,e,0),C.i5(D.be,0.936,0.04,0.004,0.92,e,0),C.i5(D.be,0.09,0.07,0.82,0.001,w,0),C.i5(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i5(D.jy,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i5(D.jy,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i5(D.jy,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i5(D.be,0,0,0.3,0.09,w|1140850688,0),C.i5(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i5(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i5(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i5(D.eI,0.62,0.02,0.5,0.16,v,0.6),C.i5(D.eI,0.78,0.12,0.4,0.12,u,0.9),C.i5(D.eI,-0.12,0.8,0.5,0.16,u,-0.6),C.i5(D.eI,-0.05,0.9,0.4,0.12,v,-0.9),C.nL(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i5(D.be,0.09,0.12,0.16,0.006,e,0),C.i5(D.be,0.05,0.03,0.9,0.001,w,0),C.i5(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hTm(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bxx=j
$.Pv=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fpr()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.en(A.bg,!1,n,A.aB,"ngmy_quote_background",m,24,A.bm,A.a4,"",1,C.byp(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cg,D.lg,1,0,0))
if(a9)A.d.v(q,C.hGy(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.hWR(B.aJ(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fpq(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.en(A.bg,!1,n,A.aB,"ngmy_quote_logo",m,24,A.bm,A.a4,a1,a3*9/16,C.byp(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cg,D.lg,a3,a4,a5))
return C.rd(s,r,0,0,q,j+"_slide",D.pM,"","","",D.dc)},
rc:function rc(d,e){this.a=d
this.b=e},
lW:function lW(d,e,f,g,h,i,j,k,l,m){var _=this
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
fpr:function fpr(){},
fpq:function fpq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hwG(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a8(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cbn(),x.N)
s=B.B(u,u.$ti.k("aj.E"))}else s=B.a([],x.s)
u=v.bQ()
w=w.h(d,"request")
return new C.z3(u,t,s,B.t(w==null?"":w))},
fx6(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fx6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h85){w=1
break}$.h85=!0
t=4
w=7
return B.b(B.az(),$async$fx6)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jq(p),k=k.gai(k),j=x.j,i=x.o;k.C();){o=k.gU(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gU(h)
l=C.hwG(m)
if(l!=null)J.cf(n,l)}$.C9.cg(0,B.t(o.a),new C.fx7(n))}C.fQf()
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
return B.i($async$fx6,v)},
fQf(){var w,v=new B.S(Date.now(),0,!1).bN(-12e8)
for(w=new B.dt($.C9,$.C9.r,$.C9.e);w.C();)J.nf(w.d,new C.fe9(v))
$.C9.bn($.C9,new C.fea())},
aMw(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aMw=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aMw)
case 6:s=a0
m=x.N
l=x.z
r=B.V(m,l)
for(k=new B.cJ($.C9,B.a3($.C9).k("cJ<1,2>")).gai(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gU(h)
g=o
J.cf(p,B.E(["at",g.a.a5().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aMw)
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
return B.i($async$aMw,v)},
hXs(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fQf()
w=$.C9.cg(0,d,new C.fx9())
v=Date.now()
u=B.B(e,B.a3(e).k("cl.E"))
J.pj(w,0,new C.z3(new B.S(v,0,!1),f,u,g))
C.aMw()},
hXp(d){var w,v=$.C9.h(0,d)
if(v==null||J.ck(v))return
w=J.cE(v)
w.cz(v,0)
if(w.gal(v))$.C9.W(0,d)
C.aMw()},
z3:function z3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbn:function cbn(){},
fx7:function fx7(d){this.a=d},
fe9:function fe9(d){this.a=d},
fea:function fea(){},
fx9:function fx9(){},
hXu(d){return A.d.dM(D.vv,new C.fxc(d),new C.fxd())},
hwE(d){var w
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
hwD(d){var w
switch(d.a){case 0:w=D.aje
break
case 1:w=A.xP
break
case 2:w=A.akm
break
case 3:w=I.aiS
break
case 4:w=A.ajK
break
case 5:w=A.lE
break
default:w=null}return w},
hJv(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.OZ[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.OZ[w]
if(!B.ds(v.toLowerCase(),t,0))u=B.ds(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hwF(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=B.V(u,t)
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
hXq(d,e,f,g,h){var w=new B.J(D.vv,new C.fx5(),x.eC).aH(0,", "),v=""+d,u=C.hdq(h),t=F.fqQ(h),s=C.h9H(g),r=e.t(0,D.Hj)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Hk)?'- New slides get an "icon3d" from: '+A.d.aH(D.OZ,", ")+".\n":"",p=e.t(0,D.C4)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hXr(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.vv,new C.fx8(),x.eC).aH(0,", "),p=new B.fc("")
if(e.t(0,D.Hj)){p.a=s
w=s}else w=""
if(e.t(0,D.Hk))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.OZ,", ")+".\n")
if(e.t(0,D.C4))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hdq(d)
v=F.fqQ(d)
u=C.h9H(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
afR(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.Cy(a3,"{"),a5=J.fIJ(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.KB(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ck(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gU(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fv5(),m).bZ(0,new C.fv6())
k=B.B(l,l.$ti.k("H.E"))}else k=B.a([],n)
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
f=C.hJv(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cf(u,new C.a6Y(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ac(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b8(D.vv,new C.fv7(r))?r:a7
o=C.fdo(J.q(w,"logo_frame"),D.Bu)
n=C.fdo(J.q(w,"logo_ring"),D.Bp)
m=C.fdo(J.q(w,"photo_frame"),D.Bu)
l=C.fdo(J.q(w,"photo_ring"),D.Bp)
return new C.apH(q,p,u,o,n,m,l)}catch(a0){return a1}},
a0y(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hcy(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.C5),f7=f6?C.hDh():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eS()
v.dH(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.fn(t,v)
s=u.c
s=new C.ny("luxe",u.a,A.lE,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dc)
w=s}if(w==null)w=C.hXu(f9.b)
r=g2.t(0,D.a3E)||f6
q=g2.t(0,D.Hj)
p=g2.t(0,D.QU)
o=new C.fpv()
n=B.a([],x.g)
m=new C.fpy(o,w,r)
l=new C.fpx(o,r)
k=new C.fpw(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a8(g0),a7=!A.d.b8(u,new C.fpu(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cP5[b8]
c0=D.cO2[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eDI.t(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mo,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pN,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.QR
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eI,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kO,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.C2
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eI,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mo,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pN,500,f2,f0))
d3=D.mn
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eI,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tW:D.cg
c1.push(new C.eG(b4,D.a3C,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bm,A.aB,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mn
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eI,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mo,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pN,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.QR
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eI,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eI,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.be,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.be,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Hh,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mn}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dc,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hET(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dbK[A.o.F(b1,6)]:s
n.push(new C.ly(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.B9(e4,e4,e4,e4,D.C1,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
frT(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$frT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.C4)
n=e.t(0,D.Hk)
if(!o&&!n){u=D.a2B
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.frW(o,s[r],n,$.hIg,r).$0())
s=B.V(x.S,x.aH)
m=J
w=3
return B.b(B.iI(t,x.e),$async$frT)
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
return B.i($async$frT,v)},
fqT(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fqT=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hXr(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aLS(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fqT)
case 3:u=s.aMc(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fqT,v)},
bA1(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bA1=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ea(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.hXs(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.afR(i,"colorful")
t=C.hXq(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aLS(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hj),$async$bA1)
case 3:u=o.aMc(m,f,h,g,D.dPI,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bA1,v)},
aLS(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aLS=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v2(null,""),$async$aLS)
case 3:n=i
if(A.a.i(n).length===0)throw B.U("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mV(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qC(t,d,g,null),$async$aLS)
case 7:q=i
p=q.b
if(p!=null){o=C.afR(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.U(s!=null&&B.Kf(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aLS,v)},
aMc(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aMc=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.C4)||e.t(0,D.Hk)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d9(e,x.Q)
t.W(0,D.C4)}w=6
return B.b(C.frT(d,t),$async$aMc)
case 6:s=k
w=4
break
case 5:s=D.a2B
case 4:t=d.c
w=A.d.b8(t,new C.f7j())?7:9
break
case 7:r=$.hei
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dR(r,x.aP),$async$aMc)
case 10:q=k
p=q!=null?A.R.ao(q.ad(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hcy(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hwF(new C.apH(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("J<1,n>")
t=B.B(new B.J(m,new C.f7k(),n),n.k("aj.E"))
l.cx=t
t=B.a3(e).k("jI<cl.E,n>")
t=B.B(new B.jI(e,new C.f7l(),t),t.k("H.E"))
l.cy=t
l.ay=e.t(0,D.QU)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMc,v)},
fSZ(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a1v[v]
if(A.d.t(t,u.b))w.J(0,u)}return w},
i0o(d){return B.bY(A.K,null,new C.fG2(),d,!0,!0,!0,null,!1,!1,x.I)},
hDT(d,e){var w,v=e.toLowerCase()
if(A.a.c9(v,".png"))w="image/png"
else w=A.a.c9(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcu().aI(d)},
i0n(d,e,f){return B.bY(A.K,null,new C.fG1(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fT_(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fT0(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fdo(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b8(e,new C.fdp(w))?w:""},
h9H(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
heg(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.afR(a1==null?"":a1,a0),a3=C.afR(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qZ(new B.a2(r,new C.fxe(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("H.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.B(new B.a2(k,new C.fxf(),v),r)
A.d.b1(g,new C.fxg())
if(g.length===0)continue
f=new C.fxh(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hXL(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aE5
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dRD
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dRE
return null},
h9i(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bw(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dJ(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hXv(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nQ
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cQ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.h9i(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.h9i(n,i,v,u))if(n.w>10){f=h+1
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
hXt(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.afR(o,"colorful")
if(n==null)throw B.U("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a1v[r]
if(q.b===s)w.J(0,q)}}v=C.fT_(e)
u=C.fT0(e)
p=C.hcy(n,D.a2B,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("J<1,n>")
o=B.B(new B.J(o,new C.fxa(),u),u.k("aj.E"))
p.cx=o
o=w.$ti.k("jI<cl.E,n>")
o=B.B(new B.jI(w,new C.fxb(),o),o.k("H.E"))
p.cy=o
p.ay=w.t(0,D.QU)
return p},
i0a(d,e,f){return B.bY(A.K,null,new C.fFf(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hDh(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eS()
s.dH(t)
w=D.ctu[s.aB(10)]
v=new C.e7K(s)
u=x.N
return new C.e7J(w,s.aB(4),J.fo(v.$1$2(D.cTh,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.d7y,2+s.aB(2),u),v.$1$2(D.d1c,2,u),v.$1$2(D.dak,4,x.fP),t)},
hET(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eS()
a1.dH(a5.w+a3*13)
w=new C.f3Q(a4)
v=new C.f3S(a4,d)
u=new C.f3R(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fN(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fN(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.cn(a2,0,w.$8(D.eI,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a0y(a0,52),"lux_spot",a5.w7(0,"spotlight")))
else A.d.cn(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.w7(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cn(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aD7(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.w7(0,f),D.dc,150,C.a0y(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.w7(0,f),D.dc,120,C.a0y(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dc,260,C.a0y(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.w7(0,"filigree"),D.dc,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a0y(a0,208),"lux_rule",a5.aD7(0,"shimmer",r),D.tV,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a0y(a0,144),"lux_rule2","",D.Hh,220))}l=!A.d.b8(a2,new C.f3P())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.w7(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.w7(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a0y(r,242)
j=a5.w7(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pN,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eI,t-0.007,0.9495,0.014,0.025,C.a0y(r,242),"lux_g2",a5.w7(0,"orbit"),D.pN,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fN(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.w7(0,"velvet")))},
ny:function ny(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fxc:function fxc(d){this.a=d},
fxd:function fxd(){},
vE:function vE(d,e){this.a=d
this.b=e},
a6Y:function a6Y(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
apH:function apH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fx5:function fx5(){},
fx8:function fx8(){},
fv5:function fv5(){},
fv6:function fv6(){},
fv7:function fv7(d){this.a=d},
fpv:function fpv(){},
fpy:function fpy(d,e,f){this.a=d
this.b=e
this.c=f},
fpx:function fpx(d,e){this.a=d
this.b=e},
fpw:function fpw(d,e){this.a=d
this.b=e},
fpu:function fpu(d){this.a=d},
frW:function frW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frU:function frU(d){this.a=d},
frV:function frV(d){this.a=d},
f7j:function f7j(){},
f7k:function f7k(){},
f7l:function f7l(){},
fG2:function fG2(){},
a_m:function a_m(d){this.a=d},
aFT:function aFT(d,e,f,g,h){var _=this
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
eS2:function eS2(d,e,f){this.a=d
this.b=e
this.c=f},
eS3:function eS3(d,e){this.a=d
this.b=e},
eS0:function eS0(d,e){this.a=d
this.b=e},
eS1:function eS1(d,e){this.a=d
this.b=e},
eS_:function eS_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eRV:function eRV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eRZ:function eRZ(d,e){this.a=d
this.b=e},
eRU:function eRU(d,e){this.a=d
this.b=e},
eRY:function eRY(d,e){this.a=d
this.b=e},
eRT:function eRT(d,e){this.a=d
this.b=e},
eRW:function eRW(d){this.a=d},
eRX:function eRX(d,e){this.a=d
this.b=e},
eRJ:function eRJ(d,e){this.a=d
this.b=e},
eRK:function eRK(d,e){this.a=d
this.b=e},
eRM:function eRM(d){this.a=d},
eRN:function eRN(d){this.a=d},
eRO:function eRO(d){this.a=d},
eRP:function eRP(d){this.a=d},
eRL:function eRL(d,e){this.a=d
this.b=e},
eRQ:function eRQ(d,e){this.a=d
this.b=e},
eSg:function eSg(d){this.a=d},
eSh:function eSh(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSi:function eSi(d){this.a=d},
eSe:function eSe(d){this.a=d},
eSk:function eSk(d){this.a=d},
eSd:function eSd(d,e){this.a=d
this.b=e},
eSl:function eSl(d){this.a=d},
eSc:function eSc(d,e){this.a=d
this.b=e},
eSm:function eSm(d){this.a=d},
eSb:function eSb(d){this.a=d},
eSn:function eSn(d){this.a=d},
eSa:function eSa(d,e){this.a=d
this.b=e},
eSo:function eSo(d){this.a=d},
eS9:function eS9(d,e){this.a=d
this.b=e},
eSp:function eSp(d){this.a=d},
eS8:function eS8(d){this.a=d},
eSq:function eSq(d,e){this.a=d
this.b=e},
eS7:function eS7(d,e){this.a=d
this.b=e},
eSr:function eSr(d){this.a=d},
eSj:function eSj(d){this.a=d},
eS6:function eS6(d,e){this.a=d
this.b=e},
eRR:function eRR(d,e,f){this.a=d
this.b=e
this.c=f},
eRS:function eRS(d,e,f){this.a=d
this.b=e
this.c=f},
eS5:function eS5(d,e){this.a=d
this.b=e},
eS4:function eS4(d,e){this.a=d
this.b=e},
fG1:function fG1(d,e){this.a=d
this.b=e},
a_l:function a_l(d,e,f){this.c=d
this.d=e
this.a=f},
aFS:function aFS(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eRC:function eRC(d){this.a=d},
eRD:function eRD(d){this.a=d},
eRE:function eRE(d,e){this.a=d
this.b=e},
eRF:function eRF(d){this.a=d},
eRG:function eRG(d){this.a=d},
eRB:function eRB(d,e){this.a=d
this.b=e},
eRH:function eRH(d,e){this.a=d
this.b=e},
eRI:function eRI(d,e){this.a=d
this.b=e},
fdp:function fdp(d){this.a=d},
b_q:function b_q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCq:function aCq(d,e,f){this.c=d
this.d=e
this.a=f},
bib:function bib(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
e7M:function e7M(d){this.a=d},
e7L:function e7L(){},
bfK:function bfK(d,e){this.b=d
this.a=e},
fxe:function fxe(d){this.a=d},
fxf:function fxf(){},
fxg:function fxg(){},
fxh:function fxh(d){this.a=d},
aqg:function aqg(d,e){this.a=d
this.b=e},
fxa:function fxa(){},
fxb:function fxb(){},
fFf:function fFf(d,e){this.a=d
this.b=e},
YK:function YK(d,e,f){this.c=d
this.d=e
this.a=f},
azS:function azS(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dfk:function dfk(d){this.a=d},
dfl:function dfl(d){this.a=d},
dfm:function dfm(d,e){this.a=d
this.b=e},
dfp:function dfp(d){this.a=d},
dfq:function dfq(d,e){this.a=d
this.b=e},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfr:function dfr(d){this.a=d},
dfn:function dfn(d,e){this.a=d
this.b=e},
bqv:function bqv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e7J:function e7J(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e7K:function e7K(d){this.a=d},
f3Q:function f3Q(d){this.a=d},
f3S:function f3S(d,e){this.a=d
this.b=e},
f3R:function f3R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3P:function f3P(){},
aKq:function aKq(){},
fRP(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vw(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b_m:function b_m(d,e,f){this.c=d
this.d=e
this.a=f},
bjP:function bjP(d,e){this.c=d
this.a=e},
hTP(d){return A.d.dM(D.Gl,new C.fqC(d),new C.fqD())},
hTQ(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b_(t,6)
if(w.length===0)return null
v=new B.a2(D.Gl,new C.fqE(w),x.b4)
if(!v.gai(0).C())return null
u=v.gL(0)
return new C.jz("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l4:function l4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fqC:function fqC(d){this.a=d},
fqD:function fqD(){},
fqE:function fqE(d){this.a=d},
mJ(d,e,f,g,h){return new C.E7(f,g,d)},
hG5(d){var w=d.z,v=B.T(w).k("a2<1>")
w=B.B(new B.a2(w,new C.f5P(),v),v.k("H.E"))
d.z=w
d.x=""},
du(d,e){var w=$.JF
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cn(d.z,0,e)},
dv(d,e,f,g,h,i,j,k,l){return C.en(A.bg,!1,4279310375,A.aB,"",d,24,A.bm,A.a4,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cg,D.eZ,j,k,l)},
hcl(d,e){var w
C.hG5(d)
w=A.d.dM($.bC2(),new C.fos(e),new C.fot())
$.JF=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.JF=""}d.z=B.bl(d.z,!0,x.F)},
E7:function E7(d,e,f){this.a=d
this.b=e
this.e=f},
f5P:function f5P(){},
fwH:function fwH(){},
fwI:function fwI(){},
fwJ:function fwJ(){},
fwU:function fwU(){},
fwZ:function fwZ(){},
fx_:function fx_(){},
fx0:function fx0(){},
fx1:function fx1(){},
fx2:function fx2(){},
fx3:function fx3(){},
fx4:function fx4(){},
fwK:function fwK(){},
fwL:function fwL(){},
fwM:function fwM(){},
fwN:function fwN(){},
fwO:function fwO(){},
fwP:function fwP(){},
fwQ:function fwQ(){},
fwR:function fwR(){},
fwS:function fwS(){},
fwT:function fwT(){},
fwV:function fwV(){},
fwW:function fwW(){},
fwX:function fwX(){},
fwY:function fwY(){},
fos:function fos(d){this.a=d},
fot:function fot(){},
iQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.en(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
Cq(d,e,f,g,h,i,j,k,l){return C.en(A.bg,!1,4279310375,A.aB,"",d,24,A.bm,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cg,D.eZ,j,k,l)},
bAL(){var w=new B.S(Date.now(),0,!1)
return A.i8[B.bG(w)-1]+" "+B.bQ(w)+", "+B.bx(w)},
er:function er(d,e,f){this.a=d
this.b=e
this.c=f},
by9(d){return new B.iL((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hL7(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.alu(A.cB.aI(A.d.gam(d.split(","))))
return w}catch(v){return null}},
hLb(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.fdc(),x.dv).aH(0,"\n")},
hLa(d){switch(d.a){case 2:return A.n8
case 1:case 5:return A.eO2
default:return A.Sf}},
hL4(d){switch(d.a){case 2:return A.ut
case 1:case 5:return A.U2
default:return A.a8t}},
hL8(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.by9(u),q=(s&255)===0?v:C.by9(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nh(q,p,A.ku)
w=new B.pk(t,t,t,t)}switch(d.ax.a){case 1:return B.ln(v,v,v,new B.ks(r,w,v,A.a9H,v),v,v,v,v)
case 4:return u?new B.fN(v,v,v):B.wD(B.ln(v,v,q,v,p+0.4,v,v,v))
default:return B.ln(v,v,v,new B.ks(r,w,B.v9(4),A.hA,v),v,v,v,v)}},
hL6(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eZ?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hL4(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hLb(d)
t=C.by9(d.Q)
s=d.x.a>=700?A.ei:A.v2
r=d.y===A.cD?A.xr:A.ahJ
q=d.z
p=new B.CB(w,l,l,B.f7(u,l,l,l,B.h1(l,t,1===q.a?A.aMX:A.aMW,l,l,l,l,l,l,A.dr,l,l,v,r,s,l,!0,l,l,l,l),C.hLa(d.as)))
break
case 1:case 4:o=C.hL7(d.at)
n=i===D.lg&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wD(B.f7(w,l,l,l,B.h1(l,A.ra,l,l,l,l,l,l,l,A.dr,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.H6(o,n?A.a9D:A.Up,l,l)
break
case 3:w=new B.nh(A.HA,1,A.ku)
u=B.v9(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.ln(A.ut,B.f7(t,l,l,l,B.h1(l,D.e2K,l,l,l,l,l,l,l,A.dr,l,l,11,l,A.ei,l,!0,l,l,l,l),A.n8),l,new B.ks(E.aFn,new B.pk(w,w,w,w),u,A.hA,l),l,l,l,l)
break
case 2:p=C.hL8(d,e)
break
case 5:p=C.hL5(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.h48(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.ar1(m/255,p)}if(w)return new F.vK(k,l,j,l,new B.Ri(new B.kr(g,g,f,1/0),p))
if(i===D.kN){i=new B.nh(A.HA,1,A.ku)
i=B.ln(A.ut,p,l,new B.ks(A.oH,new B.pk(i,i,i,i),B.v9(4),A.hA,l),l,l,D.brM,l)}else i=p
return new F.vK(k,l,j,l,new B.fN(g,f,i))},
hL9(d,e,f,g){var w,v=null,u=C.by9(d.e),t=d.f
t=B.a([F.h2M(t!=null?B.ln(v,v,v,new B.ks(v,v,v,A.hA,new B.aUV(E.U3,A.a8n,B.a([u,C.by9(t)],x.cR),v)),v,v,v,v):B.ln(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.fdb(f,g),B.T(w).k("J<1,fd>")))
return F.cos(t)},
fT2(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fT2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a39(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Vy(A.vI,A.Hx,D.bsS,null,null,null,!1,null)
o=new B.Bf(o,new C.fxn(607,787,p,d))
o.LW(n,null)
r.push(o)}u=n.jO(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fT2,v)},
hL5(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fRP(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaib()
if(h==null)h=A.av9
j=B.tb(4279308564)
w=B.v9(18)
v=new B.nh(B.tb(4287531653),3,A.ku)
u=i.length===0?"My links":i
u=B.a([B.wD(B.f7(u,m,m,m,B.h1(m,A.oH,m,m,m,m,m,m,m,A.dr,m,m,12,m,A.ei,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wD(B.f7(A.a.i(l.c),m,m,m,D.eV7,m)))
u.push(new B.fN(m,8,m))
for(t=B.da(h,0,B.dJ(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bW(t,t.gM(0),s.k("bW<aj.E>")),s=s.k("aj.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tb(4280690220)
o=new B.a8c(8,8)
n=A.a.i(r.b)
u.push(new B.nz(D.bm3,new C.avd(new C.agU(q),B.ln(m,B.f7(n.length===0?A.a.i(r.c):n,m,m,m,D.eXo,A.n8),m,new B.ks(p,m,new B.ahk(o,o,o,o),A.hA,m),m,m,D.bsb,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wD(B.f7(k,m,m,m,D.eWE,m))
u.push(new C.avd(C.hkU(k),t))}return B.ln(m,B.yp(u,A.KU,A.le),m,new B.ks(j,new B.pk(v,v,v,v),w,A.hA,m),m,m,D.bmU,m)},
fdc:function fdc(){},
fdb:function fdb(d,e){this.a=d
this.b=e},
fxn:function fxn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afE(d){var w,v
for(w=0;w<32;++w){v=D.Gc[w]
if(v.a===d)return v}return null},
h6K(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cB.aI(A.a.b_(d,u+1))
return w}catch(v){return null}},
cT(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hfp(d,e){return B.a5(d,!1).ci(B.em(new C.fDF(e),!0,null,x.fB))},
hfo(d,e){return B.bY(A.K,null,new C.fDE(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iU:function iU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
DZ:function DZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ME:function ME(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhy:function bhy(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
dQk:function dQk(d){this.a=d},
dQj:function dQj(d,e,f){this.a=d
this.b=e
this.c=f},
dQi:function dQi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bp5:function bp5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eQQ:function eQQ(d,e){this.a=d
this.b=e},
bcE:function bcE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aYh:function aYh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5W:function c5W(){},
c5X:function c5X(d){this.a=d},
c5Y:function c5Y(d,e,f){this.a=d
this.b=e
this.c=f},
c5Z:function c5Z(d,e,f){this.a=d
this.b=e
this.c=f},
fDF:function fDF(d){this.a=d},
Yi:function Yi(d,e){this.c=d
this.a=e},
ayf:function ayf(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d4z:function d4z(d,e,f){this.a=d
this.b=e
this.c=f},
d4E:function d4E(d){this.a=d},
d4F:function d4F(d){this.a=d},
d4D:function d4D(d){this.a=d},
d4G:function d4G(d){this.a=d},
d4C:function d4C(d,e){this.a=d
this.b=e},
d4H:function d4H(d){this.a=d},
d4B:function d4B(d){this.a=d},
d4I:function d4I(d){this.a=d},
d4A:function d4A(d,e){this.a=d
this.b=e},
d4J:function d4J(d,e){this.a=d
this.b=e},
fDE:function fDE(d){this.a=d},
fDD:function fDD(d){this.a=d},
fDC:function fDC(d,e,f){this.a=d
this.b=e
this.c=f},
fDB:function fDB(d,e){this.a=d
this.b=e},
aJU:function aJU(){},
i0m(d){return B.bY(A.K,null,new C.fG0(),d,!0,!0,!0,null,!1,!1,x.N)},
fG0:function fG0(){},
YD:function YD(d){this.a=d},
be7:function be7(d){this.d=d
this.c=this.a=null},
dbk:function dbk(d){this.a=d},
dbl:function dbl(d,e){this.a=d
this.b=e},
dbm:function dbm(d){this.a=d},
hHz(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.wT},
hVK(d){var w,v=A.d.gL(d.split("@"))
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
hVJ(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hHz(d)
switch(q){case"shimmer":return B.nD(A.a8P,g,new C.fu3(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bdv(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dT(B.e9(A.A,B.dc(C.fK_(g,B.a42(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bdc(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eA(A.A,e*0.5,B.e9(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dl()
t=u.a
t.$flags&2&&B.ai(t)
t[11]=0.002
u.ft(e)
u.ms(Math.sin(e)*0.3)
return B.dT(B.fr(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.q,B.a([B.e2(B.b3(r,r,r,new C.bm_(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.q,B.a([B.e2(B.b3(r,r,r,new C.b8a(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.q,B.a([B.e2(B.b3(r,r,r,new C.b7O(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bsQ(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bpT(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bp1(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e2(B.b3(r,r,r,new C.bcx(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e2(B.e9(A.A,B.bX(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eA(A.A,s*0.06,B.e9(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fu3:function fu3(d,e){this.a=d
this.b=e},
bdv:function bdv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdc:function bdc(d,e,f){this.b=d
this.c=e
this.a=f},
bm_:function bm_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8a:function b8a(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b7O:function b7O(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsQ:function bsQ(d,e,f){this.b=d
this.c=e
this.a=f},
bpT:function bpT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bp1:function bp1(d,e,f){this.b=d
this.c=e
this.a=f},
bcx:function bcx(d,e,f){this.b=d
this.d=e
this.a=f},
d4g:function d4g(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xc:function xc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fu6(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kN},
hVP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b1(j,new C.fu7())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gL(B.aOK(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hVO(d,e){var w,v,u,t,s,r=d.db
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
afh(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afh=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fms(),f),f.k("H.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bY(A.dC,null,new C.fmt(e),d,!0,!0,!1,A.lh,!1,!1,x.N),$async$afh)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hx())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fTE(d),$async$afh)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Kq(d,"Search states\u2026","",A.jS,"Choose state"),$async$afh)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fSA(s)
if(p==null)p=A.d.gL(D.PL)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fu8(p.d)
k=x.u
j=B.a([C.en(A.bg,!1,4279310375,A.aB,"marriage_locked_bg",4280640491,24,A.bm,A.a4,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lg,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Cc(i,0.016,D.kO,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cc(0,0.058,D.eI,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cc(0,0.058,D.eI,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.JQ("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.JQ("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fPy(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bxD("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a09("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a09("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a09("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a09("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bxD("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cc(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.en(A.bg,!1,i,A.aB,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bm,A.cs,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cg,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fPy(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bxD("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.h8I("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.h8I("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a09("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a09("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bxC("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bxC("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bxD("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.JQ("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.JQ("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bxC("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bxC("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bxD("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a09("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bxC("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a09("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fPy(0.22,0.83,0.56,4291404327,i),h)
h.push(C.JQ("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.JQ("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.B9(null,null,null,null,D.nQ,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rd(m,null,0,0,j,n,D.pM,"","","Hati ya Ndoa",D.dc)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afh,v)},
fu7:function fu7(){},
fms:function fms(){},
fmt:function fmt(d){this.a=d},
fmq:function fmq(d){this.a=d},
fmr:function fmr(d){this.a=d},
hKA(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hKz(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.ms
case"lineThrough":return A.z5
default:return A.aB}},
en(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eG(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
haK(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Px[w]
if(v.b===u)return v}return D.dc},
hGX(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cL2[w]
if(v.b===u)return v}return D.cQ},
hNk(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.d88[w]
if(v.b===u)return v}return D.be},
rd(d,e,f,g,h,i,j,k,l,m,n){return new C.ly(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h1v(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hIY(d.h(0,"layout"))
t=B.aN(d.h(0,"background"))
t=t==null?m:A.k.O(t)
if(t==null)t=4294967295
s=B.aN(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.O(s)
r=C.haK(d.h(0,"transition"))
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
n=B.cD(n,new C.cbk(),n.$ti.k("H.E"),x.F)
n=B.B(n,B.a3(n).k("H.E"))}return C.rd(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hIY(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.an1[w]
if(v.b===u)return v}return D.mn},
B9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.hY(p,t,a1,h,i,w,a0==null?B.a([C.rd(4294967295,null,0,0,null,C.cC(),D.pM,"","","",D.dc)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
UZ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hF8(a6.h(0,"aspectRatio"))
t=B.aN(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.O(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bi(J.k(s==null?"":s))
if(s==null)s=new B.S(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kp(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kp(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.cb7(),x.N)
f=B.B(f,f.$ti.k("aj.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cb8(),x.N)
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
g=B.cD(g,new C.cb9(),g.$ti.k("H.E"),x.bt)
g=B.B(g,B.a3(g).k("H.E"))}return C.B9(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rd(4294967295,a3,0,0,a3,C.cC(),D.pM,"","","",D.dc)],x.g):g,v,p,o,s)},
kp(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hF8(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.d8Y[w]
if(v.b===u)return v}return D.C1},
cC(){var w=Date.now(),v=$.iW
$.iW=v+1
return""+1000*w+"_"+v},
cbB(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.C2){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.en(A.L,!1,f.d.l(),A.aB,"",n,40,A.bm,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.L,!1,f.e.l(),A.aB,"",n,20,A.bm,A.cs,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.cg,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aB,"",n,32,A.bm,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!0,f.e.l(),A.aB,"",n,20,A.bm,A.cs,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cg,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aB,"",n,30,A.bm,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.en(A.bg,!0,t.l(),A.aB,"",n,18,A.bm,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cg,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.en(A.bg,!0,t.l(),A.aB,"",n,18,A.bm,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cg,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.en(A.L,!1,4294967295,A.aB,"",n,42,A.bm,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cg,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aB,"",n,30,A.bm,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.en(A.bg,!1,l,A.aB,"",t.j(0.12).l(),24,A.bm,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cg,D.eZ,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.en(A.bg,!1,r.l(),A.aB,"",n,20,A.bm,A.O,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cg,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.en(A.bg,!1,l,A.aB,"",t.j(0.06).l(),24,A.bm,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cg,D.eZ,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.en(A.bg,!1,r.l(),A.aB,"",n,20,A.bm,A.O,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.cg,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.en(A.L,!1,f.d.l(),A.aB,"",n,36,A.bm,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.cg,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.L,!1,f.e.l(),A.aB,"",n,22,A.bm,A.cs,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cg,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aB,"",n,28,A.bm,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!1,f.e.l(),A.aB,"",n,20,A.bm,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cg,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aB,"",n,26,A.bm,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.cg,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!1,f.e.l(),A.aB,"",n,18,A.bm,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cg,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hwP(d){return A.d.dM(D.a19,new C.cbC(d),new C.cbD())},
hwM(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gU(t)
if(!q.b(u))continue
try{J.cf(v,C.UZ(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fM6(d,e){var w,v,u,t=B.V(x.N,x.I),s=new C.cbx(t)
for(w=J.aW(d);w.C();)s.$1(w.gU(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("H.E"))
A.d.b1(u,new C.cbw())
return u},
h1y(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cbs()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
apI(d){return C.hwK(d)},
hwK(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$apI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cbv()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1l(m),$async$apI)
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
return B.b(B.az(),$async$apI)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aU(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.h1x.h(0,m))
n=C.fM6(C.fM6(j,r),o)
if(n.length===0){u=C.h1y(C.h1y(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$apI,v)},
cbr(d){return C.hwJ(d)},
hwJ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cbr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cbr)
case 7:r=f
q=r.rK("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kv(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aX(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cbr,v)},
b_s(d,e){return C.hwL(d,e)},
hwL(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b_s=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b_s)
case 6:s=g
q=s.rK("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ac(r)>500?J.KA(r,J.ac(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b_s)
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
return B.i($async$b_s,v)},
V_(d,e){return C.hwN(d,e)},
hwN(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$V_=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ac(a0)===0){w=1
break}p=$.h1w.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.apI(a3),$async$V_)
case 5:p=a6
case 4:w=6
return B.b(C.cbr(a3),$async$V_)
case 6:o=a6
n=B.V(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gU(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcv()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a2<H.E>")
e=B.B(new B.a2(new B.bc(n,m),new C.cby(o),l),l.k("H.E"))
A.d.b1(e,new C.cbz())
$.h1w.n(0,a0,e)
n=B.T(e).k("J<1,a4<n,@>>")
n=B.B(new B.J(e,new C.cbA(),n),n.k("aj.E"))
r=A.R.ao(n,null)
$.h1x.n(0,a0,r)
t=8
w=11
return B.b(B.ag4(a0,r),$async$V_)
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
return B.b(B.az(),$async$V_)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$V_)
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
return B.i($async$V_,v)},
HZ:function HZ(d,e){this.a=d
this.b=e},
apG:function apG(d,e){this.a=d
this.b=e},
ur:function ur(d,e){this.a=d
this.b=e},
mm:function mm(d,e){this.a=d
this.b=e},
hv:function hv(d,e){this.a=d
this.b=e},
eG:function eG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
ly:function ly(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cbl:function cbl(){},
cbm:function cbm(){},
cbk:function cbk(){},
hY:function hY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cba:function cba(){},
cbb:function cbb(){},
cb7:function cb7(){},
cb8:function cb8(){},
cb9:function cb9(){},
jz:function jz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cbC:function cbC(d){this.a=d},
cbD:function cbD(){},
cbx:function cbx(d){this.a=d},
cbw:function cbw(){},
cbs:function cbs(){},
cbt:function cbt(){},
cbu:function cbu(){},
cbv:function cbv(){},
cby:function cby(d){this.a=d},
cbz:function cbz(){},
cbA:function cbA(){},
hW_(d,e){var w=x.N,v=B.V(w,x.F)
w=new C.fuG(e,v,d,B.aX(w))
w.$1(new C.fuC())
w.$1(new C.fuD())
w.$1(new C.fuE())
w.$1(new C.fuF())
return v},
fuG:function fuG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuC:function fuC(){},
fuD:function fuD(){},
fuE:function fuE(){},
fuF:function fuF(){},
b_p:function b_p(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbg:function cbg(d){this.a=d},
cbf:function cbf(){},
cbh:function cbh(){},
cbi:function cbi(d,e){this.a=d
this.b=e},
cbj:function cbj(d){this.a=d},
amT:function amT(d,e){this.c=d
this.a=e},
bhj:function bhj(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dCX:function dCX(){},
aJF:function aJF(){},
cbo(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cbo=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eLq)
u=!1
w=1
break}u=B.kL(!1,d,t,!1,null,A.a3G,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cbo,v)},
hwH(d){var w=A.d.be(D.Gl,new C.cbp(d))
if(w<0)return!0
return w>=4},
hwI(d){var w=A.d.be($.bC2(),new C.cbq(d))
if(w<0)return!0
return w>=5},
cbp:function cbp(d){this.a=d},
cbq:function cbq(d){this.a=d},
hXF(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.ye()
$.pZ().ps(t,new C.fxu(s),!0)
u=B.a([B.Dk(v,A.pQ,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eVB,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.mU,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.q,u,v)},
fxu:function fxu(d){this.a=d},
hXg(){return C.fSW()},
hUd(){return C.bzZ()},
hWg(){return C.fSN()},
aNQ(d,e,f){var w=0,v=B.j(x.H),u
var $async$aNQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fwA(d,f),$async$aNQ)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aNQ,v)},
fwA(d,e){var w=0,v=B.j(x.H),u
var $async$fwA=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bya
if(u==null)u=e+".pdf"
w=2
return B.b(B.bY(A.K,null,new C.fwB(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fwA)
case 2:return B.h(null,v)}})
return B.i($async$fwA,v)},
fwB:function fwB(d,e){this.a=d
this.b=e},
aca:function aca(d,e,f){this.c=d
this.d=e
this.a=f},
ejQ:function ejQ(d,e){this.a=d
this.b=e},
ejR:function ejR(d,e){this.a=d
this.b=e},
ejS:function ejS(d,e){this.a=d
this.b=e},
ejT:function ejT(d){this.a=d},
acs:function acs(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_o(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b_n(g,m,f,d,e,h,l,k,j,o,i,null)},
hdF(d){return B.cm(new C.fuB(d))},
fSY(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hXo(d){if(d===D.cg)return"None"
return C.fSY(d)},
byG(d,e,f,g){return C.hNr(d,e,f,g)},
hNr(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$byG=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fPR&&t.pa())t.eH()
$.fPR=!0
s.a=null
w=3
return B.b(B.hQ(A.bh,!0,"Animation preview",d,new C.ffv(s,e,g,f),null,A.eE,!0,x.H),$async$byG)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fPR=!1
case 1:return B.h(u,v)}})
return B.i($async$byG,v)},
fGP(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fGP=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bS,x.w).w.a.a*0.88,280,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fSY(f)+" Slide transition preview"
s=s?Af.EE:A.uO
w=3
return B.b(C.byG(d,s,new B.a6(t,t*0.56,B.bv(B.m(14),new C.aHg(f,null),A.aq),null),r),$async$fGP)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fGP,v)},
hcY(d,e,f){var w,v,u=null,t=A.cp.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dc(f,t)
case 2:case 17:return B.dT(B.dc(f,t),new B.u((1-t)*48,0))
case 3:return B.dT(B.dc(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dT(B.dc(f,t),new B.u(0,(1-t)*36))
case 5:return B.dT(B.dc(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.e9(A.A,B.dc(f,t),0.5+t*0.5,u,u)
case 7:return B.e9(A.A,B.dc(f,t),1.4-t*0.4,u,u)
case 8:w=B.dl()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
w.ft((1-t)*1.2)
return B.fr(A.A,B.dc(f,t),u,w,!0)
case 9:w=B.dl()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
w.jJ((1-t)*1.2)
return B.fr(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dl()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.002
w.ms((1-t)*0.8)
v=0.6+t*0.4
w.jt(v,v,v,1)
return B.fr(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dT(B.dc(f,t),new B.u((1-t)*24,0))}},
bBy(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bBy=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bS,x.w).w.a.a*0.88,300,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fSY(f)+" Element animation preview"
s=s?Af.EE:A.uO
w=3
return B.b(C.byG(d,s,new B.a6(t,t*0.62,B.bv(B.m(14),new C.axZ(f,null),A.aq),null),r),$async$bBy)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bBy,v)},
hXn(d){var w,v,u,t,s=$.aeL.W(0,d)
if(s!=null){$.aeL.n(0,d,s)
return s}w=A.cB.aI(A.a.b_(d,A.a.cJ(d,",")+1))
$.aeL.n(0,d,w)
v=$.fQE=$.fQE+w.length
u=B.a3($.aeL).k("cy<1>")
for(;;){if(!(v>41943040&&$.aeL.a>1))break
t=new B.cy($.aeL,u).gai(0)
if(!t.C())B.ba(B.fC())
v-=$.aeL.W(0,t.gU(0)).length
$.fQE=v}return w},
hX4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kI(0,d),j=B.B(k,B.a3(k).k("H.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.RS(s,A.u))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.RS(t,A.u))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.RS(u,A.cs))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b_(d,r)
v.push(B.dp(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1k(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.kE(e))
return m
case"rounded":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
w=e.ged()*0.18
m.E(new B.iS(B.by(e,new B.aV(w,w))))
return m
case"triangle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbP().a,e.b))
w=e.d
m.E(new B.ap(e.c,w))
m.E(new B.ap(e.a,w))
m.E(new B.bF())
return m
case"hexagon":w=$.X()
m=B.a([],m)
v=new B.aQ(w.r,A.ap,n,n,m)
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
v.e=null}}v.E(new B.bF())
return v
case"diamond":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbP().a,e.b))
m.E(new B.ap(e.c,e.gbP().b))
m.E(new B.ap(e.gbP().a,e.d))
m.E(new B.ap(e.a,e.gbP().b))
m.E(new B.bF())
return m
case"arch":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ap(w,p))
m.b7t(new B.u(t,p),new B.aV(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.nU(e))
return m}},
fsa(d,e,f){return B.cm(new C.fsb(D.eE6.t(0,d),d,f,e))},
b_n:function b_n(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cbe:function cbe(d){this.a=d},
cbd:function cbd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbc:function cbc(){},
b_k:function b_k(d,e){this.b=d
this.a=e},
fuB:function fuB(d){this.a=d},
fuA:function fuA(d,e){this.a=d
this.b=e},
ffv:function ffv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fft:function fft(d){this.a=d},
ffu:function ffu(d,e){this.a=d
this.b=e},
aHg:function aHg(d,e){this.c=d
this.a=e},
bsm:function bsm(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
eZ9:function eZ9(d,e,f){this.a=d
this.b=e
this.c=f},
aHT:function aHT(d,e){this.b=d
this.a=e},
U0:function U0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhv:function bhv(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dOx:function dOx(d){this.a=d},
dOw:function dOw(d){this.a=d},
dOv:function dOv(d){this.a=d},
HY:function HY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cb6:function cb6(d){this.a=d},
cb5:function cb5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axZ:function axZ(d,e){this.c=d
this.a=e},
bc1:function bc1(){this.d=0
this.c=this.a=null},
d1v:function d1v(d){this.a=d},
d1u:function d1u(d){this.a=d},
a6G:function a6G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bi9:function bi9(d,e){var _=this
_.d=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
e7s:function e7s(d,e,f){this.a=d
this.b=e
this.c=f},
aYk:function aYk(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bda:function bda(d,e,f){this.b=d
this.c=e
this.a=f},
bo0:function bo0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eOv:function eOv(){},
fsb:function fsb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
boZ:function boZ(d,e,f){this.b=d
this.c=e
this.a=f},
aJT:function aJT(){},
aKo:function aKo(){},
aLJ:function aLJ(){},
fvB(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fvB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wM.c4().Ll(D.d6g,A.tn,!0),$async$fvB)
case 3:r=e
if(r==null||J.ck(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.U("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.U("That file is too big. Use a file under 8 MB.")
u=C.hWZ(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fvB,v)},
hWZ(d,e){var w,v=d.toLowerCase()
if(A.a.c9(v,".pdf"))return new C.a6Z(d,new B.ZZ(A.cS.gcu().aI(e),"application/pdf"),"")
if(A.a.c9(v,".docx")){w=C.hP2(e)
if(A.a.i(w).length===0)throw B.U("No readable words were found in that Word file.")
return new C.a6Z(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c4.K8(0,e,!0)
if(A.a.i(w).length===0)throw B.U("That file is empty.")
return new C.a6Z(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hP2(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cu0().cF7(B.qY(d,A.hS,o,o),o,o,!1).cGO(0,"word/document.xml")
if(n==null)return""
w=n.cOI()
v=A.c4.K8(0,w==null?$.hfT():w,!0).split("</w:p>")
u=new B.fc("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kI(0,r)
p=A.a.i(B.cD(q,new C.fij(),B.a3(q).k("H.E"),t).fT(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a6Z:function a6Z(d,e,f){this.a=d
this.b=e
this.c=f},
fij:function fij(){},
hwO(d,e,f,g,h,i,j,k,l){return new C.N4(l,e,d,g,f,i,h,j,k,null)},
N4:function N4(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCR:function aCR(d,e,f,g,h,i,j,k,l){var _=this
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
eq3:function eq3(d){this.a=d},
eq1:function eq1(){},
eq2:function eq2(d){this.a=d},
emr:function emr(){},
ems:function ems(){},
emt:function emt(d,e){this.a=d
this.b=e},
eo1:function eo1(d){this.a=d},
enQ:function enQ(){},
enR:function enR(){},
elP:function elP(){},
ep9:function ep9(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
eo_:function eo_(d,e){this.a=d
this.b=e},
epN:function epN(d){this.a=d},
epO:function epO(){},
epP:function epP(){},
epQ:function epQ(d){this.a=d},
epR:function epR(){},
eld:function eld(d){this.a=d},
eq0:function eq0(){},
en8:function en8(d,e){this.a=d
this.b=e},
elb:function elb(d){this.a=d},
elc:function elc(d){this.a=d},
env:function env(d){this.a=d},
enw:function enw(d,e,f){this.a=d
this.b=e
this.c=f},
enx:function enx(d){this.a=d},
en7:function en7(){},
en6:function en6(d){this.a=d},
en4:function en4(){},
en3:function en3(d){this.a=d},
en5:function en5(){},
emn:function emn(d){this.a=d},
emo:function emo(d){this.a=d},
ene:function ene(d){this.a=d},
en9:function en9(d){this.a=d},
ena:function ena(d){this.a=d},
enb:function enb(d){this.a=d},
enc:function enc(d){this.a=d},
end:function end(d){this.a=d},
enf:function enf(d,e){this.a=d
this.b=e},
elf:function elf(){},
elg:function elg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enq:function enq(){},
enr:function enr(d,e){this.a=d
this.b=e},
eno:function eno(d,e,f){this.a=d
this.b=e
this.c=f},
enp:function enp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eni:function eni(d,e,f){this.a=d
this.b=e
this.c=f},
enj:function enj(d,e,f){this.a=d
this.b=e
this.c=f},
enk:function enk(d){this.a=d},
enl:function enl(d,e){this.a=d
this.b=e},
enm:function enm(d,e){this.a=d
this.b=e},
enn:function enn(d,e){this.a=d
this.b=e},
enh:function enh(d,e){this.a=d
this.b=e},
ent:function ent(d){this.a=d},
enu:function enu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ens:function ens(d){this.a=d},
enL:function enL(){},
enM:function enM(){},
enN:function enN(){},
enO:function enO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enI:function enI(d){this.a=d},
enK:function enK(){},
enJ:function enJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
enG:function enG(d,e,f){this.a=d
this.b=e
this.c=f},
enH:function enH(d,e){this.a=d
this.b=e},
enP:function enP(){},
eng:function eng(d,e){this.a=d
this.b=e},
elw:function elw(){},
elx:function elx(d,e,f){this.a=d
this.b=e
this.c=f},
ely:function ely(d){this.a=d},
elz:function elz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
elv:function elv(d){this.a=d},
enV:function enV(d){this.a=d},
enU:function enU(d,e){this.a=d
this.b=e},
enT:function enT(d,e){this.a=d
this.b=e},
enS:function enS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enW:function enW(d,e){this.a=d
this.b=e},
eka:function eka(d,e){this.a=d
this.b=e},
elu:function elu(d,e){this.a=d
this.b=e},
els:function els(d){this.a=d},
eo3:function eo3(d,e,f){this.a=d
this.b=e
this.c=f},
elo:function elo(d,e){this.a=d
this.b=e},
eln:function eln(d){this.a=d},
eo2:function eo2(d,e,f){this.a=d
this.b=e
this.c=f},
ele:function ele(d){this.a=d},
elQ:function elQ(){},
epL:function epL(d,e){this.a=d
this.b=e},
epM:function epM(d,e,f){this.a=d
this.b=e
this.c=f},
epa:function epa(d,e,f){this.a=d
this.b=e
this.c=f},
ekb:function ekb(d){this.a=d},
ek8:function ek8(d,e){this.a=d
this.b=e},
ejZ:function ejZ(d,e){this.a=d
this.b=e},
ejW:function ejW(d){this.a=d},
ejV:function ejV(d,e){this.a=d
this.b=e},
ejX:function ejX(d,e){this.a=d
this.b=e},
elq:function elq(d){this.a=d},
elr:function elr(d,e){this.a=d
this.b=e},
elp:function elp(d){this.a=d},
ekD:function ekD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ekE:function ekE(d,e){this.a=d
this.b=e},
ekI:function ekI(d,e){this.a=d
this.b=e},
ekJ:function ekJ(d){this.a=d},
ekG:function ekG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ekH:function ekH(d){this.a=d},
ekF:function ekF(){},
ekC:function ekC(d,e,f){this.a=d
this.b=e
this.c=f},
enF:function enF(d,e){this.a=d
this.b=e},
epU:function epU(d){this.a=d},
epV:function epV(d,e){this.a=d
this.b=e},
epW:function epW(d){this.a=d},
epX:function epX(d,e,f){this.a=d
this.b=e
this.c=f},
epT:function epT(d){this.a=d},
epq:function epq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epp:function epp(d,e,f){this.a=d
this.b=e
this.c=f},
epo:function epo(){},
epn:function epn(d,e,f){this.a=d
this.b=e
this.c=f},
epm:function epm(d,e){this.a=d
this.b=e},
epj:function epj(d,e,f){this.a=d
this.b=e
this.c=f},
eph:function eph(d){this.a=d},
epi:function epi(d){this.a=d},
epl:function epl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epk:function epk(d){this.a=d},
emj:function emj(d,e){this.a=d
this.b=e},
emi:function emi(d,e){this.a=d
this.b=e},
epb:function epb(){},
epK:function epK(d,e){this.a=d
this.b=e},
epI:function epI(d){this.a=d},
epJ:function epJ(d){this.a=d},
ek3:function ek3(d,e){this.a=d
this.b=e},
ek1:function ek1(d){this.a=d},
ek2:function ek2(d){this.a=d},
ek4:function ek4(d,e){this.a=d
this.b=e},
ek5:function ek5(d,e,f){this.a=d
this.b=e
this.c=f},
ek9:function ek9(d,e){this.a=d
this.b=e},
ek0:function ek0(d,e,f){this.a=d
this.b=e
this.c=f},
ek_:function ek_(d){this.a=d},
eo0:function eo0(d,e,f){this.a=d
this.b=e
this.c=f},
epS:function epS(d,e,f){this.a=d
this.b=e
this.c=f},
emm:function emm(d,e,f){this.a=d
this.b=e
this.c=f},
eml:function eml(){},
ekM:function ekM(d,e,f){this.a=d
this.b=e
this.c=f},
ekN:function ekN(d){this.a=d},
ejY:function ejY(d,e){this.a=d
this.b=e},
elO:function elO(d,e){this.a=d
this.b=e},
ek6:function ek6(d,e){this.a=d
this.b=e},
ekf:function ekf(d){this.a=d},
ekg:function ekg(d,e){this.a=d
this.b=e},
ekh:function ekh(d,e){this.a=d
this.b=e},
eke:function eke(d){this.a=d},
eks:function eks(d,e){this.a=d
this.b=e},
ekd:function ekd(d){this.a=d},
ekv:function ekv(d){this.a=d},
ekw:function ekw(d){this.a=d},
ekx:function ekx(d){this.a=d},
eky:function eky(d){this.a=d},
ekz:function ekz(d){this.a=d},
ekA:function ekA(){},
ekB:function ekB(){},
eki:function eki(d){this.a=d},
ekj:function ekj(d){this.a=d},
ekk:function ekk(d){this.a=d},
ekl:function ekl(d){this.a=d},
ekm:function ekm(d){this.a=d},
ekn:function ekn(d){this.a=d},
eko:function eko(d){this.a=d},
ekp:function ekp(d){this.a=d},
ekq:function ekq(d){this.a=d},
ekr:function ekr(d){this.a=d},
ekt:function ekt(d){this.a=d},
eku:function eku(d,e){this.a=d
this.b=e},
elN:function elN(d,e,f){this.a=d
this.b=e
this.c=f},
elM:function elM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
elL:function elL(d,e,f){this.a=d
this.b=e
this.c=f},
elK:function elK(d,e){this.a=d
this.b=e},
ek7:function ek7(d,e){this.a=d
this.b=e},
ekQ:function ekQ(d){this.a=d},
ekP:function ekP(d){this.a=d},
ekO:function ekO(d,e){this.a=d
this.b=e},
ekR:function ekR(d){this.a=d},
ekS:function ekS(d){this.a=d},
ekT:function ekT(d,e){this.a=d
this.b=e},
elt:function elt(d){this.a=d},
enE:function enE(d,e){this.a=d
this.b=e},
enD:function enD(d,e){this.a=d
this.b=e},
enC:function enC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enA:function enA(d){this.a=d},
enB:function enB(d,e){this.a=d
this.b=e},
eny:function eny(){},
enz:function enz(){},
epc:function epc(){},
epd:function epd(d,e){this.a=d
this.b=e},
epe:function epe(){},
epf:function epf(d){this.a=d},
epg:function epg(d,e){this.a=d
this.b=e},
ekc:function ekc(d,e){this.a=d
this.b=e},
elh:function elh(){},
eli:function eli(){},
elj:function elj(){},
elm:function elm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ell:function ell(d,e){this.a=d
this.b=e},
elk:function elk(d,e,f){this.a=d
this.b=e
this.c=f},
emN:function emN(d){this.a=d},
emM:function emM(){},
emO:function emO(d,e){this.a=d
this.b=e},
emP:function emP(d,e){this.a=d
this.b=e},
emL:function emL(d){this.a=d},
emQ:function emQ(d,e){this.a=d
this.b=e},
emK:function emK(d){this.a=d},
emR:function emR(d,e){this.a=d
this.b=e},
emJ:function emJ(d){this.a=d},
emS:function emS(d,e){this.a=d
this.b=e},
emI:function emI(d){this.a=d},
emT:function emT(d,e){this.a=d
this.b=e},
emH:function emH(d,e){this.a=d
this.b=e},
emU:function emU(d,e){this.a=d
this.b=e},
emG:function emG(d){this.a=d},
emV:function emV(d,e){this.a=d
this.b=e},
emF:function emF(d){this.a=d},
emy:function emy(d,e){this.a=d
this.b=e},
emz:function emz(d){this.a=d},
emA:function emA(d){this.a=d},
emx:function emx(d){this.a=d},
emB:function emB(d,e){this.a=d
this.b=e},
emw:function emw(d){this.a=d},
emC:function emC(d,e){this.a=d
this.b=e},
emv:function emv(d){this.a=d},
emD:function emD(d,e){this.a=d
this.b=e},
emu:function emu(d){this.a=d},
emE:function emE(d){this.a=d},
elG:function elG(d){this.a=d},
elH:function elH(d){this.a=d},
elJ:function elJ(d){this.a=d},
elB:function elB(d){this.a=d},
elA:function elA(d,e){this.a=d
this.b=e},
elC:function elC(d,e){this.a=d
this.b=e},
elD:function elD(d){this.a=d},
elE:function elE(d){this.a=d},
elF:function elF(d,e){this.a=d
this.b=e},
elI:function elI(d){this.a=d},
epY:function epY(d){this.a=d},
epZ:function epZ(d){this.a=d},
emY:function emY(d,e){this.a=d
this.b=e},
emX:function emX(d,e){this.a=d
this.b=e},
emW:function emW(d,e){this.a=d
this.b=e},
emZ:function emZ(d){this.a=d},
en_:function en_(d){this.a=d},
eom:function eom(d,e){this.a=d
this.b=e},
eon:function eon(d){this.a=d},
eoo:function eoo(d){this.a=d},
eoz:function eoz(d){this.a=d},
eoK:function eoK(d){this.a=d},
eoV:function eoV(d){this.a=d},
ep1:function ep1(d){this.a=d},
ep2:function ep2(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep4:function ep4(d){this.a=d},
ep5:function ep5(d,e){this.a=d
this.b=e},
eop:function eop(d){this.a=d},
eoq:function eoq(d){this.a=d},
eor:function eor(d){this.a=d},
eos:function eos(d){this.a=d},
eot:function eot(d){this.a=d},
eou:function eou(d){this.a=d},
eov:function eov(d){this.a=d},
eow:function eow(d){this.a=d},
eox:function eox(d){this.a=d},
eoy:function eoy(d){this.a=d},
eoA:function eoA(d){this.a=d},
eoB:function eoB(d){this.a=d},
eoC:function eoC(d){this.a=d},
eoD:function eoD(d){this.a=d},
eoE:function eoE(d){this.a=d},
eoF:function eoF(d){this.a=d},
eoG:function eoG(d){this.a=d},
eoH:function eoH(d){this.a=d},
eoI:function eoI(d){this.a=d},
eoc:function eoc(d){this.a=d},
eoJ:function eoJ(d){this.a=d},
eok:function eok(d){this.a=d},
eoL:function eoL(d){this.a=d},
eoj:function eoj(d,e){this.a=d
this.b=e},
eoM:function eoM(d,e){this.a=d
this.b=e},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoi:function eoi(d,e,f){this.a=d
this.b=e
this.c=f},
eo8:function eo8(d,e){this.a=d
this.b=e},
eol:function eol(d){this.a=d},
ep6:function ep6(d,e){this.a=d
this.b=e},
ep8:function ep8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ep7:function ep7(d,e){this.a=d
this.b=e},
eoO:function eoO(d,e,f){this.a=d
this.b=e
this.c=f},
eoh:function eoh(d,e,f){this.a=d
this.b=e
this.c=f},
eo7:function eo7(d,e,f){this.a=d
this.b=e
this.c=f},
eo5:function eo5(d,e){this.a=d
this.b=e},
eoP:function eoP(d,e){this.a=d
this.b=e},
eog:function eog(d,e){this.a=d
this.b=e},
eo6:function eo6(d,e){this.a=d
this.b=e},
eo4:function eo4(d,e){this.a=d
this.b=e},
eoQ:function eoQ(d){this.a=d},
eof:function eof(d){this.a=d},
eoR:function eoR(d){this.a=d},
eoS:function eoS(d){this.a=d},
eoT:function eoT(d){this.a=d},
eoU:function eoU(d){this.a=d},
eoe:function eoe(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoX:function eoX(d){this.a=d},
eoY:function eoY(d,e){this.a=d
this.b=e},
eod:function eod(d){this.a=d},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
eob:function eob(d){this.a=d},
ep_:function ep_(d,e){this.a=d
this.b=e},
eoa:function eoa(d){this.a=d},
ep0:function ep0(d,e){this.a=d
this.b=e},
eo9:function eo9(d){this.a=d},
ekL:function ekL(d,e,f){this.a=d
this.b=e
this.c=f},
ekK:function ekK(d,e){this.a=d
this.b=e},
ept:function ept(d,e){this.a=d
this.b=e},
eps:function eps(d,e){this.a=d
this.b=e},
epu:function epu(d,e){this.a=d
this.b=e},
epr:function epr(d,e){this.a=d
this.b=e},
elT:function elT(d,e){this.a=d
this.b=e},
elS:function elS(d){this.a=d},
elU:function elU(d,e){this.a=d
this.b=e},
elR:function elR(d){this.a=d},
emq:function emq(){},
emp:function emp(){},
epG:function epG(d){this.a=d},
epF:function epF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epE:function epE(d,e){this.a=d
this.b=e},
epz:function epz(d,e){this.a=d
this.b=e},
epD:function epD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epA:function epA(d,e){this.a=d
this.b=e},
epv:function epv(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epy:function epy(d){this.a=d},
epB:function epB(d,e){this.a=d
this.b=e},
epC:function epC(d,e){this.a=d
this.b=e},
epH:function epH(d){this.a=d},
ela:function ela(d){this.a=d},
el9:function el9(d,e,f){this.a=d
this.b=e
this.c=f},
el8:function el8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekY:function ekY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ekZ:function ekZ(d,e){this.a=d
this.b=e},
el_:function el_(d,e){this.a=d
this.b=e},
el0:function el0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekX:function ekX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
el1:function el1(d,e){this.a=d
this.b=e},
el3:function el3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
el2:function el2(d,e){this.a=d
this.b=e},
el4:function el4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekW:function ekW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
el5:function el5(d,e){this.a=d
this.b=e},
ekV:function ekV(d,e){this.a=d
this.b=e},
el6:function el6(d,e){this.a=d
this.b=e},
ekU:function ekU(d){this.a=d},
el7:function el7(d,e){this.a=d
this.b=e},
en1:function en1(d){this.a=d},
en0:function en0(d){this.a=d},
en2:function en2(d,e){this.a=d
this.b=e},
em6:function em6(d,e){this.a=d
this.b=e},
em7:function em7(d,e){this.a=d
this.b=e},
em5:function em5(d,e){this.a=d
this.b=e},
em8:function em8(d,e){this.a=d
this.b=e},
em4:function em4(d,e){this.a=d
this.b=e},
em9:function em9(d,e){this.a=d
this.b=e},
em3:function em3(d,e){this.a=d
this.b=e},
ema:function ema(d,e){this.a=d
this.b=e},
em2:function em2(d,e){this.a=d
this.b=e},
emb:function emb(d,e){this.a=d
this.b=e},
em1:function em1(d,e){this.a=d
this.b=e},
emc:function emc(d,e,f){this.a=d
this.b=e
this.c=f},
em0:function em0(d,e){this.a=d
this.b=e},
emd:function emd(d,e,f){this.a=d
this.b=e
this.c=f},
em_:function em_(d,e){this.a=d
this.b=e},
eme:function eme(d,e){this.a=d
this.b=e},
elZ:function elZ(d,e,f){this.a=d
this.b=e
this.c=f},
elW:function elW(d,e){this.a=d
this.b=e},
emf:function emf(d,e){this.a=d
this.b=e},
elY:function elY(d,e){this.a=d
this.b=e},
emg:function emg(d,e){this.a=d
this.b=e},
elX:function elX(d,e,f){this.a=d
this.b=e
this.c=f},
elV:function elV(d,e){this.a=d
this.b=e},
emh:function emh(d,e){this.a=d
this.b=e},
emk:function emk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejU:function ejU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
enZ:function enZ(d,e){this.a=d
this.b=e},
enX:function enX(d){this.a=d},
enY:function enY(d,e){this.a=d
this.b=e},
adW:function adW(d,e,f){this.a=d
this.b=e
this.c=f},
axl:function axl(d,e){this.c=d
this.a=e},
baP:function baP(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
cYy:function cYy(d){this.a=d},
cYx:function cYx(d){this.a=d},
bb2:function bb2(d,e){this.c=d
this.a=e},
cYU:function cYU(d){this.a=d},
cYV:function cYV(d){this.a=d},
J_:function J_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
baO:function baO(){this.d=!1
this.c=this.a=null},
cYv:function cYv(d){this.a=d},
cYr:function cYr(d){this.a=d},
cYw:function cYw(d){this.a=d},
cYq:function cYq(d){this.a=d},
cYu:function cYu(d){this.a=d},
cYs:function cYs(d){this.a=d},
cYt:function cYt(d,e){this.a=d
this.b=e},
OH:function OH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Zu:function Zu(d,e,f){this.c=d
this.d=e
this.a=f},
aCU:function aCU(d,e,f){var _=this
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
eqE:function eqE(){},
equ:function equ(d){this.a=d},
eqD:function eqD(d){this.a=d},
eqv:function eqv(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqq:function eqq(d){this.a=d},
eqr:function eqr(d,e){this.a=d
this.b=e},
eqs:function eqs(d){this.a=d},
eqt:function eqt(d,e,f){this.a=d
this.b=e
this.c=f},
eqB:function eqB(){},
eqC:function eqC(d){this.a=d},
eqx:function eqx(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqA:function eqA(d){this.a=d},
eqF:function eqF(d,e,f){this.a=d
this.b=e
this.c=f},
eqH:function eqH(d,e){this.a=d
this.b=e},
eqG:function eqG(d){this.a=d},
J6:function J6(d,e){this.c=d
this.a=e},
bpt:function bpt(d,e){this.b=d
this.a=e},
bfE:function bfE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfD:function bfD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIA:function aIA(){},
aKC:function aKC(){},
bva:function bva(){},
aKD:function aKD(){},
fxv(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fxv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wM.c4().Ll(B.a(["pdf"],x.s),A.tn,!0),$async$fxv)
case 3:q=e
if(q==null||J.ck(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bmM(s,"data:application/pdf;base64,"+A.cS.gcu().aI(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxv,v)},
hXz(d){var w,v,u,t,s,r
try{w=B.jk(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cC(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kI(0,w).gM(0)
if(t>0){s=J.aPb(t,1,200)
return s}}catch(r){}return 1},
fxm(d){return C.hXy(d)},
hXy(d){var w=0,v=B.j(x.T),u
var $async$fxm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxm,v)},
bAK(d,e,f,g){return C.hXI(d,e,f,g)},
hXI(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bAK=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e6(b6,x.co).gai(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hef(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lH(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lH(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lH(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lH(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.X()
g=new B.rP()
f=B.Gs(g,null)
a7=B.L()
a7.r=A.qn.gp(0)
f.aX(new B.aa(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fy
b1.b=A.ae
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
b2.delete()}a0=a2}a3=g.q8()
w=7
return B.b(a3.yT(800,h),$async$bAK)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hl(A.fS),$async$bAK)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.fa(A.dF.gaP(a5))
a7=A.cS.gcu().aI(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a9(b5)
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
return B.i($async$bAK,v)},
aOp(d,e,f){return C.hXw(d,e,f)},
hXw(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aOp=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aA:e
r.c=f==null?5.2:f
w=3
return B.b(B.agi(d,e,f,new C.fxk(r,q),q,"Sign document"),$async$aOp)
case 3:if(!new B.e6(q,x.co).gai(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bAK(q,t,r.b,r.c),$async$aOp)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b_r(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOp,v)},
hXG(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.h7v(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.h7v(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b_(A.a.aT(A.o.fN(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b_(A.a.aT(A.o.fN(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lg&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.h78(q.ay)+";border:2px solid "+C.h78(q.ch)+'"></div>'
break
case 5:l=C.fRP(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gaib()
if(p==null)p=A.av9
n=B.T(p)
k=n.k("pK<1>")
j=new B.pK(p,0,8,k)
j.GE(p,0,8,n.c)
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
h78(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
h7v(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
bAI(d,e){var w=0,v=B.j(x.H)
var $async$bAI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.c9(null,null,!0,null,new C.fxt(e,C.hXG(e),d),d,null,!0,!0,x.H),$async$bAI)
case 2:return B.h(null,v)}})
return B.i($async$bAI,v)},
bAJ(){var w=0,v=B.j(x.T),u,t,s
var $async$bAJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.FZ(92,2400),$async$bAJ)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fxm(s),$async$bAJ)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAJ,v)},
aOq(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aOq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fT2(d),$async$aOq)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=Z.fzK(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOq,v)},
h1u(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b_r:function b_r(d,e,f){this.a=d
this.b=e
this.c=f},
fxk:function fxk(d,e){this.a=d
this.b=e},
fxt:function fxt(d,e,f){this.a=d
this.b=e
this.c=f},
fxq:function fxq(d){this.a=d},
fxr:function fxr(d,e,f){this.a=d
this.b=e
this.c=f},
fxs:function fxs(d,e,f){this.a=d
this.b=e
this.c=f},
hXx(d){return C.kp(d.w)},
hXE(d){var w,v,u,t
if(d.length===0||!A.d.de(d,C.hZm()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yc(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.hjU()
if(w.b.test(u))return u
return null},
heh(d,e,f){var w,v,u=C.hsr(d),t=$.pf()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hXK(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aW(d.a),v=new B.h2(w,d.b);v.C();){u=w.gU(w).y
t=C.yc(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fxi(d,e){var w,v=d.y,u=C.yc(v==null?"":v)
if(u!=null)return d.y=u
w=C.hXK(new B.a2(e,new C.fxj(d),B.T(e).k("a2<1>")))
v=d.x
return d.y=C.heh(v==null?"":v,null,w)},
hXJ(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.kp(w.w))return null
v=w.y
return C.yc(v==null?"":v)},
hwQ(){var w,v=$.pf(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fT(u)},
V2(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$V2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c0(),$async$V2)
case 3:if(!e){u=B.V(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f0("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$V2)
case 8:r=e
if(r==null){u=B.V(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.a9(m)
$.am.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.V(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$V2,v)},
V3(d){return C.hwR(d)},
hwR(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$V3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c0(),$async$V3)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hA("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,A.cF,null),$async$V3)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a9(p)
$.am.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$V3,v)},
a70(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a70=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c0(),$async$a70)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.V2(),$async$a70)
case 4:s=a6
r=C.yc(a2==null?"":a2)
if(r==null)r=a3!=null?C.heh(a3,null,A.HY):null
q=x.N
p=B.aX(q)
for(o=J.dj(s),n=J.aW(o.ghV(s)),m=x.f;n.C();){l=n.gU(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yc(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdL(s),n=n.gai(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gU(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dH.aI(t)
g.n(0,"payload",A.cS.gcu().aI(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.RS.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yc(J.k(q==null?"":q))
if(f==null)f=C.h1z(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.V3(s),$async$a70)
case 7:u=new B.aEk(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hwQ()
n=r==null
d=n?C.h1z(p):r
q=B.V(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dH.aI(t)
q.n(0,"payload",A.cS.gcu().aI(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.RS.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.V3(s),$async$a70)
case 8:u=new B.aEk(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a70,v)},
h1z(d){var w,v,u=$.pf()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
apK(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$apK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c0(),$async$apK)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.V2(),$async$apK)
case 6:t=f
s=J.a8(t)
r=s.gM(t)
s.bn(t,new C.cbE(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.V3(t),$async$apK)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$apK,v)},
apJ(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$apJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yc(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c0(),$async$apJ)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.V2(),$async$apJ)
case 6:t=o.jq(f),t=t.gai(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gU(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yc(J.k(q==null?"":q))===p){u=C.a7_(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apJ,v)},
a7_(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7_=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c0(),$async$a7_)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.V2(),$async$a7_)
case 6:p=a1
o=J.a8(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a8(n)
k=B.aN(l.h(n,"usesRemaining"))
j=k==null?null:A.k.O(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ac(t)===0){u=null
w=1
break}s=null
try{s=A.c4.c8(0,A.cB.aI(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.RS.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dV(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=7
return B.b(C.V3(p),$async$a7_)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7_,v)},
hXD(d,e,f){var w,v=B.V(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("J<1,a4<n,@>>")
w=B.B(new B.J(d,new C.fxp(),w),w.k("aj.E"))
v.n(0,"decks",w)
return v},
fxx(d,e,f,g){var w
if(e!=null){w=B.V(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ad())
return A.R.ao(w,null)}return A.R.ao(C.hXD(d==null?B.a([],x.D):d,f,g),null)},
fxw(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fxw=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a70(h,d,e,f,g),$async$fxw)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yc(e==null?"":e)
u=new B.aE7(s,t)
w=1
break}t=A.dH.aI(h)
t=A.k1.gcu().aI(t)
u=new B.aE7(C.yc(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxw,v)},
fT4(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ac(q)===0)return!1
if(J.cZ(q,"NGMYSLIDESYNC2|"))return!0
if(J.cZ(q,"NGMYSLIDECODE|"))return!0
if(J.cZ(q,"NGMY_SL:"))return!0
if(J.eY(q,s)||J.eY(q,r))return!0
if(J.cZ(q,"{"))try{w=A.R.aG(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hXH(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fT4(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b_(v,u))
if(C.fT4(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b_(v,s))
if(C.fT4(t))return t}}return null},
fxl(d){var w,v,u,t=A.a.i(d)
if(J.ac(t)===0||J.cZ(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cZ(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c4.c8(0,A.cB.aI(J.mv(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hGv(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ag3(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ag3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.apJ(t[1]),$async$ag3)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fxl(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yc(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.apJ(r),$async$ag3)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fxl(s)
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
return B.b(C.a7_(t[1]),$async$ag3)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fxl(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fxl(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ag3,v)},
hGv(d){var w,v,u,t=J.a8(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.RS.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fT1(C.UZ(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d7(u,x.f)
t=B.cD(t,new C.f6f(w),t.$ti.k("H.E"),x.I)
t=B.B(t,B.a3(t).k("H.E"))
return t}return B.a([],x.D)},
fT1(d,e){var w,v,u,t,s,r,q,p,o=d.ad()
o.n(0,"id",C.cC())
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
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.UZ(B.a1(o,x.N,x.z))
if(e&&C.kp(p.w))p.Q=new B.S(Date.now(),0,!1).a5().bN(144e8).ac()
return p},
bAt(){var w=0,v=B.j(x.aT),u,t,s
var $async$bAt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.FY(),$async$bAt)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ag3(s),$async$bAt)
case 4:t=e
u=J.ck(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAt,v)},
fG3(d){var w=0,v=B.j(x.T),u,t
var $async$fG3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hQ(D.Vv,!0,"Dismiss",d,new C.fG4(),new C.fG5(),A.EC,!0,x.N),$async$fG3)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eJD)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fG3,v)},
i0p(d,e,f,g,h){return B.a5(d,!1).ci(B.em(new C.fG6(h,e,g,f),!0,null,x.H))},
fxj:function fxj(d){this.a=d},
cbE:function cbE(d){this.a=d},
fxp:function fxp(){},
f6f:function f6f(d){this.a=d},
fG4:function fG4(){},
fG5:function fG5(){},
fG6:function fG6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V0:function V0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCS:function aCS(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eqa:function eqa(){},
eq6:function eq6(d,e){this.a=d
this.b=e},
eq9:function eq9(d,e){this.a=d
this.b=e},
eq7:function eq7(d){this.a=d},
eq8:function eq8(d){this.a=d},
eqb:function eqb(d){this.a=d},
eqc:function eqc(d){this.a=d},
eqf:function eqf(d){this.a=d},
eqg:function eqg(d){this.a=d},
eqe:function eqe(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqd:function eqd(d){this.a=d},
eqi:function eqi(d,e){this.a=d
this.b=e},
eq5:function eq5(d,e){this.a=d
this.b=e},
eq4:function eq4(d,e){this.a=d
this.b=e},
V1:function V1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biv:function biv(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqk:function eqk(d){this.a=d},
eql:function eql(){},
eqm:function eqm(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
aCP:function aCP(d){this.a=d},
aCQ:function aCQ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ejO:function ejO(d){this.a=d},
ejN:function ejN(){},
ejP:function ejP(d){this.a=d},
ejK:function ejK(d){this.a=d},
ejJ:function ejJ(){},
ejL:function ejL(d){this.a=d},
ejM:function ejM(d){this.a=d},
bsH:function bsH(){},
apL:function apL(d){this.a=d},
aCT:function aCT(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eqp:function eqp(d){this.a=d},
eqo:function eqo(d){this.a=d},
hLD(){var w,v,u,t
for(v=0;v<4;++v){w=D.cWV[v]
try{if(Ac.bUi(w)){u=w
return u}}catch(t){}}return null},
Qg(d,e){return C.hUo(d,e)},
hUo(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Qg=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hLD()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nQ?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qi(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gL(c3)
b9=$.aw()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.o9(new C.frE(c2,b7,o),!1,!1)
b6.lz(0,l)
b9=x.H
B.c9(null,A.da,!1,null,new C.frF(n,m),c6,null,!0,!0,b9)
k=new C.frJ(b7)
j=new C.frK()
i=null
t=4
b3=c2.a
h=Aj.aQG(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fIA(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aVu(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.GY.xU(i,"dataavailable",new C.frG(e))
d=new B.bS(new B.bg($.bw,x.dT),x.b2)
A.GY.xU(i,"stop",new C.frH(d))
J.agC(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Qg)
case 8:w=7
return B.b(c5.$1(d0),$async$Qg)
case 7:a0=d0
J.fIC(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.agC(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.agC(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Qg)
case 15:w=14
return B.b(c5.$1(d0),$async$Qg)
case 14:a0=d0
case 13:J.fIC(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.agC(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bN(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcv()
else b3=!0
if(!b3){w=17
break}J.fIC(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fv,null,b9),$async$Qg)
case 18:w=16
break
case 17:J.agC(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.agC(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cN(0,A.nz),$async$Qg)
case 19:a5=A.d.gL(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aJ(c3,b3,"_"))
c0=B.mX(a7)
c0.download=B.t(J.ac(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Kx(b0)
J.lN(b0)
B.bN(A.ny,new C.frI(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a9(c4)
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
J.lN(l)
if(p.pa())p.eH()
c3=o
b3=$.aw()
c3.shN(b3)
J.aPg(c3,0)
c3=n
c3.shN(b3)
J.aPg(c3,0)
c3=m
c3.shN(b3)
J.aPg(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qg,v)},
frE:function frE(d,e,f){this.a=d
this.b=e
this.c=f},
frD:function frD(){},
frF:function frF(d,e){this.a=d
this.b=e},
frJ:function frJ(d){this.a=d},
frK:function frK(){},
frG:function frG(d){this.a=d},
frH:function frH(d){this.a=d},
frI:function frI(d){this.a=d},
bsT:function bsT(d,e,f){this.c=d
this.d=e
this.a=f},
f0B:function f0B(){},
f0C:function f0C(){},
cc0(d){var w=0,v=B.j(x.at),u,t,s
var $async$cc0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.apV(d,A.yN),$async$cc0)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.by(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cc0,v)},
cc_(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a6H:function a6H(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bie:function bie(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e8j:function e8j(d){this.a=d},
e8h:function e8h(d){this.a=d},
e8i:function e8i(d,e){this.a=d
this.b=e},
a7z:function a7z(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.o5$=k
_.o6$=l
_.o7$=m
_.nu$=n},
a7A:function a7A(d,e){this.a=d
this.b=e},
b14:function b14(){},
cec:function cec(){},
ced:function ced(){},
cee:function cee(d,e,f,g,h,i,j,k,l){var _=this
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
hkU(d){return new C.agU(d)},
a1P:function a1P(){},
agU:function agU(d){this.a=d},
aPB:function aPB(){},
avd:function avd(d,e){this.d=d
this.b=e
this.a=null},
aR4:function aR4(d){this.b=d
this.a=null},
fmM(d,e){var w=0,v=B.j(x.H)
var $async$fmM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.X().gx7().L4(d,e),$async$fmM)
case 2:B.fzQ()
return B.h(null,v)}})
return B.i($async$fmM,v)},
hby(d,e){return(A.qX[(d^e)&255]^A.o.aA(d,8))>>>0},
fkq(d,e,f,g,h,i){var w=C.hQK(d,A.d9,f,null,A.cW,g,h,i)
return w},
hdq(d){var w=F.he8(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hsr(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oE.h(0,w)
if(v!=null)return v
for(u=A.oE.gdL(A.oE),u=u.gai(u);u.C();){t=u.gU(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hdy(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<33;++w)v+="- "+D.cV4[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
byD(d,e){return C.hNm(d,e)},
hNm(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byD=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aSG(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cA(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jS(o,"share",[p]),x.H),$async$byD)
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
return B.i($async$byD,v)},
fSW(){var w=0,v=B.j(x.y),u,t,s
var $async$fSW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fdd
s=$.bya
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.byD(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSW,v)},
bzZ(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bzZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fdd
l=$.bya
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.h8b()?3:4
break
case 3:w=5
return B.b(C.byD(m,k),$async$bzZ)
case 5:if(e){u=!0
w=1
break}case 4:r=$.byb
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mX(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Kx(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bzZ)
case 10:J.lN(q)
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
return B.i($async$bzZ,v)},
fSN(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fSN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.byb
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.ll.ui(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fSN,v)},
fT3(d,e){var w=0,v=B.j(x.H),u,t
var $async$fT3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.ll.ui(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fT3,v)},
b01(d,e){var w=0,v=B.j(x.y),u
var $async$b01=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b03(d,e),$async$b01)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b02(d),$async$b01)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b01,v)}},D,H,Am,A8,Y,V,An,G,F,E,P,W,Q,Z,A_,A9,Ao,Aa,K,A0,N,X,Ap,L,Ab,Aq,O,A1,Ar,As,Ac,Ad,At,Ae,Af,Ag,Au,Av,R,Aw,Ax,I,Ay,Az,S,T,M,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[188]
A5=c[66]
A6=c[152]
Ai=c[48]
Aj=c[57]
U=c[203]
A7=c[52]
Ak=c[128]
Al=c[213]
C=a.updateHolder(c[4],C)
D=c[201]
H=c[114]
Am=c[36]
A8=c[205]
Y=c[202]
V=c[191]
An=c[119]
G=c[172]
F=c[31]
E=c[204]
P=c[91]
W=c[110]
Q=c[130]
Z=c[29]
A_=c[159]
A9=c[132]
Ao=c[168]
Aa=c[133]
K=c[206]
A0=c[60]
N=c[182]
X=c[75]
Ap=c[107]
L=c[140]
Ab=c[102]
Aq=c[208]
O=c[100]
A1=c[117]
Ar=c[86]
As=c[112]
Ac=c[53]
Ad=c[178]
At=c[35]
Ae=c[73]
Af=c[129]
Ag=c[212]
Au=c[214]
Av=c[211]
R=c[67]
Aw=c[106]
Ax=c[209]
I=c[156]
Ay=c[169]
Az=c[215]
S=c[46]
T=c[207]
M=c[189]
A2=c[210]
A3=c[96]
A4=c[56]
C.nH.prototype={
uD(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tu(t,v)
return new C.nH(t===0?!1:w,v,t)},
bIl(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Cw()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tu(w,u)
return new C.nH(r===0?!1:s,u,r)},
bIL(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Cw()
w=o-d
if(w<=0)return p.a?$.fUq():$.Cw()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tu(w,u)
q=new C.nH(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a1A())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.U(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bIl(v)
u=w+v+1
t=new Uint16Array(u)
C.h4P(r.b,w,e,t)
w=r.a
s=C.tu(u,t)
return new C.nH(s===0?!1:w,t,s)},
m8(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.U(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bIL(v)
t=w-v
if(t<=0)return n.a?$.fUq():$.Cw()
s=n.b
r=new Uint16Array(t)
C.hCt(s,w,e,r)
w=n.a
q=C.tu(t,r)
p=new C.nH(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aC(0,$.a1A())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a1A())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cBR(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a6O(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a6O(t,e)
if(s===0)return $.Cw()
if(r===0)return t.a===e?t:t.uD(0)
w=s+1
v=new Uint16Array(w)
C.hCr(t.b,s,d.b,r,v)
u=C.tu(w,v)
return new C.nH(u===0?!1:e,v,u)},
GF(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Cw()
w=d.c
if(w===0)return t.a===e?t:t.uD(0)
v=new Uint16Array(s)
C.b83(t.b,s,d.b,w,v)
u=C.tu(s,v)
return new C.nH(u===0?!1:e,v,u)},
bvv(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tu(r,u)
return new C.nH(!1,u,s)},
bvu(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tu(u,r)
return new C.nH(!1,r,v)},
bvw(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tu(p,m)
return new C.nH(s!==0,m,s)},
TO(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Cw()
w=t.a
if(w===e.a){if(w){w=$.a1A()
return t.GF(w,!0).bvw(e.GF(w,!0),!0).a6O(w,!0)}return t.bvv(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bvu(v.GF($.a1A(),!1),!1)},
ae(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a6O(e,v)
if(C.cBR(u.b,t,e.b,w)>=0)return u.GF(e,v)
return e.GF(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uD(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a6O(e,v)
if(C.cBR(u.b,t,e.b,w)>=0)return u.GF(e,v)
return e.GF(u,!v)},
aK(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Cw()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h4Q(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tu(w,t)
return new C.nH(q===0?!1:r,t,q)},
bIk(d){var w,v,u,t
if(this.c<d.c)return $.Cw()
this.aPe(d)
w=$.fNZ.c4()-$.avY.c4()
v=C.fO0($.fNY.c4(),$.avY.c4(),$.fNZ.c4(),w)
u=C.tu(w,v)
t=new C.nH(!1,v,u)
return this.a!==d.a&&u>0?t.uD(0):t},
cjj(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aPe(d)
w=C.fO0($.fNY.c4(),0,$.avY.c4(),$.avY.c4())
v=C.tu($.avY.c4(),w)
u=new C.nH(!1,w,v)
if($.fO_.c4()>0)u=u.m8(0,$.fO_.c4())
return t.a&&u.c>0?u.uD(0):u},
aPe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h4M&&d.c===$.h4O&&g.b===$.h4L&&d.b===$.h4N)return
w=d.b
v=d.c
u=16-A.o.gaiB(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h4K(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h4K(g.b,f,u,r)}else{r=C.fO0(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fO1(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cBR(r,q,n,m)>=0){k&2&&B.ai(r)
r[q]=1
C.b83(r,l,n,m,r)}else{k&2&&B.ai(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b83(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hCs(p,r,i);--o
C.h4Q(h,j,0,r,o,s)
if(r[i]<h){m=C.fO1(j,s,o,n)
C.b83(r,l,n,m,r)
while(--h,r[i]<h)C.b83(r,l,n,m,r)}--i}$.h4L=g.b
$.h4M=f
$.h4N=w
$.h4O=v
$.fNY.b=r
$.fNZ.b=l
$.avY.b=s
$.fO_.b=u},
gX(d){var w,v,u,t=new C.cBS(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cBT().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nH&&this.aL(0,e)===0},
rL(d,e){return this.aL(0,e)>0},
O(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
ux(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gaiB(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cBU(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cBV(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l_(A.aG.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uD(0):r
while(v.c>1){u=$.hhQ()
if(u.c===0)B.ba(D.b0c)
t=v.cjj(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bIk(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dA(w,x.bJ).fT(0)},
$iaQk:1,
$ihD:1}
C.aPL.prototype={
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
cGO(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gam(d){return A.d.gam(this.a)},
gal(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gai(d){var w=this.a
return new J.jV(w,w.length,B.T(w).k("jV<1>"))}}
C.QT.prototype={
cOI(){var w,v
if(this.as==null)this.b9P()
w=this.as
v=w==null?null:w.ani()
return v==null?null:v.eC()},
b9P(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ani().eC()
this.as=new C.bLx(v)}},
gY(d){return this.at}}
C.a2M.prototype={
a4(){return"CompressionType."+this.b}}
C.bFA.prototype={
eq(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.co()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.yl[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.co()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fv(u,t)&A.yl[d])
s.c=t}return v}}
C.bDW.prototype={
cF6(d,e){var w,v,u,t,s,r=this,q=new C.bFA(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eq(8)!==66||q.eq(8)!==90||q.eq(8)!==104)return!1
w=r.a=q.eq(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.chC(q)
if(t<0)return!1
if(t===0){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
s=r.chF(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
return!0}}return!0},
chC(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eq(8)
if(t!==D.dbc[u])v=!1
if(t!==D.cQM[u])w=!1
if(!w&&!v)return-1}return v?0:2},
chF(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eq(1),d2=((d3.eq(8)<<8|d3.eq(8))<<8|d3.eq(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eq(1)
v.$flags&2&&B.ai(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eq(1)
v.$flags&2&&B.ai(v)
v[t+s]=u}c9.bYp()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eq(3)
if(q<2||q>6)return-1
v=d3.eq(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eq(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.ai(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.ai(u)
u[w]=l}c9.fr=B.c1(6,$.hfX(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eq(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eq(1)===0)break
i=d3.eq(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ai(v)
v[w]=i}}v=$.hfW()
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
if(f<h)h=f}c9.bU_(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.as6(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.as6(d3)}while(a3===0||a3===1);++a5
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
a3=c9.as6(d3)
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
c1=(c1<<8^D.Gs[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Gu[b9];++b9
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
if(b8===0){b8=D.Gu[b9];++b9
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
if(b8===0){b8=D.Gu[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Gu[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Gu[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bF(c3)
c1=c1<<8^D.Gs[c1>>>24&255^v];--c2}d4.bF(c3)
c1=(c1<<8^D.Gs[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bF(c7)
c1=(c1<<8^D.Gs[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bF(c7)
c1=(c1<<8^D.Gs[c1>>>24&255^c7&255])>>>0
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
as6(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eq(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eq(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bU_(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bYp(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ai(v)
v[u]=w}}}}
C.cu1.prototype={
aFM(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bLq(e)
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
if(w>0)e.aFP(w,!1)
r.ci_(e)
q=r.r
v=r.f
u=e.aIL(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aJ()!==33639248)break
s=new C.b6K()
s.cOH(0,u,e,f)
q.push(s)}},
ci_(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a6r(20,r)
if(w.aJ()!==117853008){d.c=s
return}w.aJ()
v=w.rz()
w.aJ()
d.c=v
if(d.aJ()!==101075792){d.c=s
return}d.rz()
d.aU()
d.aU()
d.aJ()
d.aJ()
d.rz()
d.rz()
u=d.rz()
t=d.rz()
this.f=u
this.r=t
d.c=s},
bLq(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a6r(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.aks(A.hS)
o.aK1(r.eC(),A.hS,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aJ()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cu_.prototype={}
C.avC.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cu2.prototype={
aFM(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aJ()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aBy.h(0,e.aU())
o.c=w==null?D.KO:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aJ()
o.r=e.aJ()
o.w=e.aJ()
v=e.aU()
u=e.aU()
o.x=e.am6(v)
o.y=e.h6(u).eC()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aRg:D.CW
o.ay=f
o.Q=e.h6(t)
if(o.at!==D.CW&&u>2){w=o.y
w.toString
s=B.qY(w,A.hS,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.am6(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aRh
o.ax=new C.cu_(r,q)
w=D.aBy.h(0,q)
o.c=w==null?D.KO:w}}}if((o.b&8)!==0){p=e.aJ()
if(p===134695760)o.f=e.aJ()
else o.f=p
o.r=e.aJ()
o.w=e.aJ()}},
gM(d){return this.bje().length},
ani(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qY(new Uint8Array(0),A.hS,q,q)
w=r.at
if(w!==D.CW)if(p.gM(0)<=0)r.at=D.CW
else{if(w===D.aRg){p=r.bGF(p)
r.Q=p}else if(w===D.aRh){p=r.bGi(p)
r.Q=p}r.at=D.CW}w=r.c
if(w===D.aeo){v=p.c
u=B.df()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.p0.B_(p.eC(),!0,!1)
else{t=B.a7o(A.hS,r.w)
p=r.Q
p.toString
A.p0.a2J(p,t,!0,!1)
u.b=t.Gd()}r.Q.c=v
return B.qY(u.bc(),A.hS,q,q)}else if(w===D.aep){s=B.a7o(A.hS,32768)
p=r.Q
v=p.c
C.hl4().cF6(p,s)
u=s.Gd()
r.Q.c=v
return B.qY(u,A.hS,q,q)}else return B.qY(p.eC(),A.hS,q,q)},
bje(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eC()},
u(d){return this.x},
b5N(d){var w=this.ch,v=C.IW(C.hby(w[0].O(0),d))
w[0]=v
v=w[1].ae(0,v.TO(0,C.IW(255)))
w[1]=v
w[1]=v.aK(0,C.IW(134775813)).ae(0,C.IW(1)).TO(0,C.IW(4294967295))
w[2]=C.IW(C.hby(w[2].O(0),w[1].m8(0,24).O(0)))},
aOF(){var w=(this.ch[2].TO(0,C.IW(65535)).O(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bGF(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qY(new Uint8Array(0),A.hS,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b5N(u[v.c++]^r.aOF())}t=r.Q.eC()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aOF()
r.b5N(s)
u&2&&B.ai(t)
t[w]=s}return B.qY(t,A.hS,q,q)},
bGi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h6(8).eC()
v=16}else if(k===2){w=d.h6(12).eC()
v=24}else{w=d.h6(16).eC()
v=32}u=d.h6(2).eC()
t=d.h6(d.gM(0)-10)
s=d.h6(10)
r=t.eC()
k=this.ay
k.toString
q=C.hC8(k,w,v)
p=new Uint8Array(B.cp(A.aG.dn(q,0,v)))
k=v*2
o=new Uint8Array(B.cp(A.aG.dn(q,v,k)))
if(!C.h4f(A.aG.dn(q,k,k+2),u))throw B.U(B.fk("password error"))
k=new Uint8Array(16)
n=new C.bCw(k,new Uint8Array(16),p)
k=x.S
m=J.a4a(0,k)
m=n.r=new C.ce1(m)
m.c=!0
m.b=m.biy(!0,new C.ari(p))
if(m.c)m.d=B.bl(D.nO,!0,k)
else m.d=B.bl(D.ye,!0,k)
l=C.h2s(C.h2u(),64)
l.bc7(new C.ari(o))
n.w=l
n.cOg(r,0,r.length)
k=s.eC()
m=n.x
m===$&&B.c()
if(!C.h4f(k,m))throw B.U(B.fk("macs don't match"))
return B.qY(r,A.hS,null,null)}}
C.b6K.prototype={
cOH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.am6(w)
if(v>0){t=e.h6(v).eC()
n.ax=t
if(v>=4){s=B.qY(t,A.hS,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a6r(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rz()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rz()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rz()
p-=8}if(p>=4&&n.y===65535)n.y=o.aJ()}}}}if(u>0)e.am6(u)
f.c=n.as
t=new C.cu2(D.KO,n,D.CW,B.a([C.IW(0),C.IW(0),C.IW(0)],x.f3))
n.ch=t
t.aFM(0,f,g)},
u(d){return this.at}}
C.cu0.prototype={
cF7(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cu1(B.a([],x.fT))
this.a=g
g.aFM(0,d,f)
g=B.a([],x.bm)
w=B.V(x.N,x.S)
v=new C.aPL(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c9(o,"/")||A.a.c9(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.QT(o,A.o.an(Date.now(),1000),0):C.fVN(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fVN(o,q.w,q)
if(k.as==null)k.b9P()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.aks(A.hS)
j.aK1(o,A.hS,h,h)}i=j==null?h:j.eC()
if(i!=null)new B.JC(!1).Hg(i,0,h,!0)}}return v}}
C.bCw.prototype={
cOg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.BW(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hkO(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bJQ(u,0,w,0,o)}else{o===$&&B.c()
q.bGJ(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ai(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Kp(w,0)
m.x=A.aG.dn(m.x,0,10)
w=m.w
l=w.a
l.lk(0)
w=w.d
w===$&&B.c()
l.BW(0,w,0,w.length)
return f}}
C.ce6.prototype={}
C.cea.prototype={}
C.ce4.prototype={}
C.ari.prototype={}
C.ce9.prototype={
cFm(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ei(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bc7(new C.ari(A.aG.fG(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bKO(n.a,n.b,t,s,r)
r+=v}A.aG.hh(f,g,g+w,s)
return o.a.c},
bKO(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.U(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.BW(0,d,0,d.length)
v.BW(0,f,0,4)
u=m.c
u===$&&B.c()
w.Kp(u,0)
u=m.c
A.aG.hh(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.BW(0,s,0,s.length)
w.Kp(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ai(g)
g[p]=o^n}}}}
C.ce5.prototype={}
C.ce3.prototype={}
C.arj.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.arj){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rL(d,e){var w=this.a
w===$&&B.c()
w=A.o.rL(w,e.gbUg())
if(!w)e.gbUg()
return w},
aId(d,e){this.a=0
this.b=d},
rP(d){return this.aId(d,null)},
aIO(d){var w,v=this,u=v.b
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
w.aYM(v,u)
u=w.b
u===$&&B.c()
w.aYM(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aYM(d,e){var w,v=A.o.fN(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.br(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ce8.prototype={
lk(d){var w,v=this
v.a.rP(0)
v.c=0
A.aG.ha(v.b,0,4,0)
v.w=0
w=v.r
A.d.ha(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
amN(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ai(u)
u[t]=d&255
if(w===4){v.b_h(u,0)
v.c=0}v.a.aIO(1)},
BW(d,e,f,g){var w=this.cgu(e,f,g)
f+=w
g-=w
w=this.cgv(e,f,g)
this.cgl(e,f+w,g-w)},
Kp(d,e){var w,v=this,u=C.h2t(v.a),t=u.a
t===$&&B.c()
t=C.fTx(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fTx(w,3)
v.cgp()
v.cgm(u)
v.aqX()
v.caC(d,e)
v.lk(0)
return 20},
b_h(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nS(A.aG.gaP(d),d.byteOffset,d.length).getUint32(e,A.i2===w.d)
if(w.w===16)w.aqX()},
aqX(){this.cOf()
this.w=0
A.d.ha(this.r,0,16,0)},
cgl(d,e,f){while(f>0){this.amN(d[e]);++e;--f}},
cgv(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b_h(d,e)
e+=4
f-=4
w.aIO(4)
v+=4}return v},
cgu(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.amN(d[e]);++e;--f;++v}return v},
cgp(){this.amN(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.amN(0)}},
cgm(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.aqX()
u=v.d
switch(u){case A.i2:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Dn:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.U(B.bd("Invalid endianness: "+u.u(0)))}},
caC(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i2===this.d,s=0;s<w;++s){r=v[s]
q=J.nS(A.aG.gaP(d),d.byteOffset,u)
q.$flags&2&&B.ai(q,11)
q.setUint32(e+s*4,r,t)}},
gdl(d){return this.f}}
C.ceb.prototype={
cOf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pT[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pT[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pT[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pT[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pT[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pT[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pT[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pT[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pT[30]
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
C.ce7.prototype={
bc7(d){var w,v,u,t,s=this,r=s.a
r.lk(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.BW(0,w,0,v)
w=s.d
w===$&&B.c()
r.Kp(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hh(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.ha(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hh(w,0,u,s.d)
s.b6W(s.d,u,54)
s.b6W(s.e,u,92)
u=s.d
r.BW(0,u,0,u.length)},
Kp(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Kp(s,w)
s=u.e
t.BW(0,s,0,s.length)
v=t.Kp(d,e)
s=u.e
A.aG.ha(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.BW(0,s,0,s.length)
return v},
b6W(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ai(d)
d[v]=u^f}}}
C.ce2.prototype={}
C.ce1.prototype={
a14(d){return(D.nO[d&255]&255|(D.nO[d>>>8&255]&255)<<8|(D.nO[d>>>16&255]&255)<<16|D.nO[d>>>24&255]<<24)>>>0},
biy(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.U(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e0(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c1(4,0,!1,u)
switch(v){case 4:q=J.nS(A.aG.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a14((m>>>8|(m&$.pT[24])<<24)>>>0)^D.ctm[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nS(A.aG.gaP(e),e.byteOffset,w)
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
p=(p^f.a14((k>>>8|(k&$.pT[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a14((k>>>8|(k&$.pT[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nS(A.aG.gaP(e),e.byteOffset,w)
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
p=(p^f.a14((g>>>8|(g&$.pT[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a14(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.U(B.bd("Should never get here"))}return s},
bJQ(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nS(A.aG.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e6[a8&255]
u=D.e6[a9>>>8&255]
t=$.pT[8]
s=D.e6[b0>>>16&255]
r=$.pT[16]
q=D.e6[b1>>>24&255]
p=$.pT[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e6[a9&255]
s=D.e6[b0>>>8&255]
u=D.e6[b1>>>16&255]
v=D.e6[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e6[b0&255]
u=D.e6[b1>>>8&255]
s=D.e6[a8>>>16&255]
q=D.e6[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e6[b1&255]
a8=D.e6[a8>>>8&255]
a9=D.e6[a9>>>16&255]
b0=D.e6[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e6[n&255]
b0=D.e6[m>>>8&255]
a9=D.e6[l>>>16&255]
a8=D.e6[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e6[m&255]
b0=D.e6[l>>>8&255]
o=D.e6[b1>>>16&255]
s=D.e6[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e6[l&255]
o=D.e6[b1>>>8&255]
b0=D.e6[n>>>16&255]
u=D.e6[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e6[b1&255]
o=D.e6[n>>>8&255]
s=D.e6[m>>>16&255]
v=D.e6[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e6[a8&255]^C.ne(D.e6[a9>>>8&255],24)^C.ne(D.e6[b0>>>16&255],16)^C.ne(D.e6[b1>>>24&255],8)^b6[w][0]
m=D.e6[a9&255]^C.ne(D.e6[b0>>>8&255],24)^C.ne(D.e6[b1>>>16&255],16)^C.ne(D.e6[a8>>>24&255],8)^b6[w][1]
l=D.e6[b0&255]^C.ne(D.e6[b1>>>8&255],24)^C.ne(D.e6[a8>>>16&255],16)^C.ne(D.e6[a9>>>24&255],8)^b6[w][2]
b1=D.e6[b1&255]^C.ne(D.e6[a8>>>8&255],24)^C.ne(D.e6[a9>>>16&255],16)^C.ne(D.e6[b0>>>24&255],8)^b6[w][3]
a7=D.nO[n&255]
b0=D.nO[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nO[l>>>8&255]
a9=D.nO[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nO[b1>>>8&255]
h=D.nO[n>>>16&255]
g=D.nO[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nO[l>>>24&255]
s=s[3]
a1=J.nS(A.aG.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.ai(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nS(A.aG.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.ai(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nS(A.aG.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.ai(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nS(A.aG.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.ai(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bGJ(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nS(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nS(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nS(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nS(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e5[a6&255]
v=D.e5[b0>>>8&255]
u=$.pT[8]
t=D.e5[a5>>>16&255]
s=$.pT[16]
r=D.e5[a4>>>24&255]
q=$.pT[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e5[a4&255]
t=D.e5[a6>>>8&255]
v=D.e5[b0>>>16&255]
w=D.e5[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e5[a5&255]
v=D.e5[a4>>>8&255]
t=D.e5[a6>>>16&255]
r=D.e5[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e5[b0&255]
a5=D.e5[a5>>>8&255]
a4=D.e5[a4>>>16&255]
a6=D.e5[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e5[p&255]
a6=D.e5[b0>>>8&255]
a4=D.e5[n>>>16&255]
a5=D.e5[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e5[o&255]
a4=D.e5[p>>>8&255]
a7=D.e5[b0>>>16&255]
t=D.e5[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e5[n&255]
a7=D.e5[o>>>8&255]
a5=D.e5[p>>>16&255]
v=D.e5[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e5[b0&255]
a7=D.e5[n>>>8&255]
t=D.e5[o>>>16&255]
w=D.e5[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e5[a6&255]^C.ne(D.e5[b0>>>8&255],24)^C.ne(D.e5[a5>>>16&255],16)^C.ne(D.e5[a4>>>24&255],8)^b5[a9][0]
o=D.e5[a4&255]^C.ne(D.e5[a6>>>8&255],24)^C.ne(D.e5[b0>>>16&255],16)^C.ne(D.e5[a5>>>24&255],8)^b5[a9][1]
n=D.e5[a5&255]^C.ne(D.e5[a4>>>8&255],24)^C.ne(D.e5[a6>>>16&255],16)^C.ne(D.e5[b0>>>24&255],8)^b5[a9][2]
b0=D.e5[b0&255]^C.ne(D.e5[a5>>>8&255],24)^C.ne(D.e5[a4>>>16&255],16)^C.ne(D.e5[a6>>>24&255],8)^b5[a9][3]
a4=D.ye[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.ye[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.ye[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.ye[o>>>8&255]
i=D.ye[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.ye[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nS(A.aG.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.ai(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bLw.prototype={}
C.bLx.prototype={
gM(d){var w=this.a.length
return w},
ani(){return B.qY(this.a,A.hS,null,null)}}
C.b8i.prototype={
uz(d){return C.hFl(d)}}
C.co_.prototype={
M_(d){var w=d.w,v=Math.max(1,A.k.dJ(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a8W(v,t+20,u+16,t,u,B.tE(d.x))},
n5(d){return!1}}
C.bMp.prototype={
czx(d){if(this.b)throw B.U(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bMq(),x.E))},
mo(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.U(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mo)
case 6:w=5
return B.b(p.fmM(f,r),$async$mo)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mo,v)}}
C.aui.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7m.prototype={
A(d,e){if(e==null)return!1
if(J.bL(e)!==B.b_(this))return!1
return e instanceof C.a7m&&e.a===this.a},
gX(d){return B.br(B.b_(this),B.wq(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.frW)return"["+(w+B.e1(this.a))+"]"
return"[ObjectKey "+(w+B.e1(this.a))+"]"}}
C.aU6.prototype={
c_(d){var w=new C.aza(!0,this.e,null,new B.dd(),B.cg())
w.bY()
w.scB(null)
return w},
c7(d,e){var w
x.cQ.a(e)
e.syd(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aEp()}}}
C.aza.prototype={
syd(d,e){return},
gp7(){var w=this.ab$
return w!=null},
gkQ(){var w=this.ab$
return w!=null},
LP(d){var w=d==null?B.fYa(null):d
w.sa3B(this.ak)
return w}}
C.a_O.prototype={
T(){return new C.aHz(B.aX(x.N))},
cMs(d){return this.d.$1(d)},
cKg(){return this.e.$0()}}
C.aHz.prototype={
a_(){this.a1()
this.Ol()},
Ol(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ol=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cKg(),$async$Ol)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f_3(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ol,v)},
XW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f_7(t),q),q.k("H.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f_8(t))
w=3
return B.b(C.amc(p),$async$XW)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f_9(t,s,p))
w=4
return B.b(t.Ol(),$async$XW)
case 4:case 1:return B.h(u,v)}})
return B.i($async$XW,v)},
a04(d){return this.ckw(d)},
ckw(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a04=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f_4(t))
s=J.q(d,"id")
w=3
return B.b(C.bWN(J.k(s==null?"":s)),$async$a04)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f_5(t))
w=1
break}q=C.fT1(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cMs(B.a([q],x.D)),$async$a04)
case 4:if(t.c==null){w=1
break}t.m(new C.f_6(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a04,v)},
Ok(d,e){return this.bH7(0,e)},
bH7(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ok=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a8(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.eZZ(q),r,null,!0,!0,x.y),$async$Ok)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f__(t))
s=s.h(e,"id")
w=4
return B.b(C.amb(J.k(s==null?"":s)),$async$Ok)
case 4:if(t.c==null){w=1
break}t.m(new C.f_0(t))
w=5
return B.b(t.Ol(),$async$Ok)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ok,v)},
cyB(d){var w=B.bi(d),v=w==null?null:w.bQ()
if(v==null)return""
return A.i8[B.bG(v)-1]+" "+B.bQ(v)},
aOw(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Nj,A.n),w,e,w,w,w,w,w,e)},
aOv(d){return this.aOw(d,44)},
b4b(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Nj:u,r=B.m(14),q=B.W(e,t?A.c:A.ay,u,u,u,17),p=x.p
q=B.a([q,L.Ia,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.ay,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Ia,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bsU,u,u,u)],p))}return B.D(B.aE(A.c5,B.dg(u,B.A(q,A.m,u,A.ba,A.j,0,u,u),u,u,A.bb,new B.o(u,u,u,r,u,s,A.n),A.hW,u,u,u,A.uR,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f_d(this,d),u,u,u,u,u,u,!1,A.a9),1)},
cet(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d4.j(0.14):D.Wn,n=B.m(18),m=p?A.d4:A.dq
m=B.I(m,A.r,p?1.8:1)
w=this.aOv(A.pz)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aOx,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.d0,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aOz,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Nj:q
u=p?q:B.I(A.b5,A.r,1.6)
r=p?D.bI1:q
return B.aE(q,B.dg(q,B.A(B.a([w,A.bf,t,B.dg(q,r,q,q,A.bb,new B.o(q,q,u,q,q,v,A.a6),A.fF,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bb,new B.o(o,q,m,n,q,q,A.n),A.fF,q,q,A.db,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f_2(this,p,d),q,q,q,q,q,q,!1,A.a9)},
cm2(d){var w,v,u,t,s,r=this,q=null,p=J.a8(d),o=p.h(d,"savedAt"),n=r.cyB(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dq,A.r,1)
v=r.aOv(A.Mx)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aOx,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.d0,B.d(p+" slides"+t,q,q,q,q,q,q,D.aOz,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b0V(A.hx,A.bs,"Bring it back",r.r?q:new C.f_a(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bo,r.b0V(A.e4,A.cr,"Delete",r.r?q:new C.f_b(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Wn,q,w,o,q,q,A.n),q,q,q,A.db,D.bns,q,q,q)},
b0V(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.ho(B.aE(w,B.p(w,B.W(d,v?A.b5:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a9),w,f,w,w)},
ard(d,e,f){var w=null
return new B.C(D.bmv,B.v(B.a([B.W(d,A.b5,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f_s,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.eT4,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bS,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b5,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aOw(A.y1,46),A.bf,D.btJ],t)
if(j.r)s.push(D.e1e)
s.push(B.aH(i,i,i,i,A.N4,i,i,i,new C.f_g(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dq,A.r,1)
o=J.a8(h)
q=B.a([A.S,u,new B.C(D.bq0,s,i),B.p(i,B.A(B.a([j.b4b(0,A.xB,"Save",j.a.c.length),j.b4b(1,A.MM,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bp4,A.en,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cr:A.bs).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cr:A.bs).j(0.4),A.r,1)
p=j.y
n=p?A.My:A.ee
n=B.W(n,p?A.cr:A.bs,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a6g,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bp0,A.j5,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eWA,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eZz,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f_h(j,v),i,i,i,i,i,i,!1,A.a9))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.ard(A.pz,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cet(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e0N)
else if(j.e==null)s.push(j.ard(A.aj1,"Could not reach the database","Check the connection, then open this again."))
else if(o.gal(h))s.push(j.ard(A.oq,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gai(h);r.C();)s.push(j.cm2(r.gU(r)))
A.d.v(u,s)}q.push(new B.dm(1,A.ci,B.cB(u,i,Y.ag9,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc_T()
p=s?i:D.Nj
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ad(0,A.G,A.b4.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.W(A.xB,m?A.j2:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bpD,B.aE(i,B.dg(i,B.A(B.a([k,A.a5H,new B.dm(1,A.ci,B.f4(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j2:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.ba,A.j,0,i,i),i,i,A.bb,new B.o(s,i,i,o,n,p,A.n),A.hW,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a9),i))}else q.push(A.S)
return B.p(i,B.bo(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aYa,i,i,i,i,i,i,i,i)}}
C.o8.prototype={
ad(){return B.E(["id",this.a,"doc",this.b.ad(),"updatedAt",this.c.a5().ac()],x.N,x.z)}}
C.XB.prototype={
T(){return new C.aw9(B.a([],x.k),B.fe(null,x.H))},
gdX(){return this.c}}
C.aw9.prototype={
a_(){this.a1()
this.Os()},
Os(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Os=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a0M(t.a.c),$async$Os)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cDf(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Os,v)},
cs2(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.q0(t.d,new C.cDi(d))
v=w<0
if(v&&C.hCv(d))return t.f
u=t.d
if(v)J.pj(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fJQ(new C.cDj(t),v)
return t.f=t.f.bz(new C.cDk(t,d),v).eS(new C.cDl())},
I0(d,e,f){return this.c89(0,e,f)},
aVY(d,e){return this.I0(0,e,!1)},
c89(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$I0=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).ci(B.em(new C.cDe(t,e),!1,null,x.H)),$async$I0)
case 3:w=4
return B.b(t.f,$async$I0)
case 4:w=5
return B.b(t.Os(),$async$I0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I0,v)},
aVe(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dnu:d
this.I0(0,new C.o8(w,v,new B.S(Date.now(),0,!1)),!0)},
c_o(){return this.aVe(null)},
abW(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bY(A.K,null,new C.cDm(),r,!1,!1,!0,null,!1,!1,x.g2),$async$abW)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aVe(s)
case 1:return B.h(u,v)}})
return B.i($async$abW,v)},
I_(d,e){return this.bH_(0,e)},
bH_(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$I_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.cD9(e),s,null,!0,!0,x.y),$async$I_)
case 3:if(g!==!0){w=1
break}t.m(new C.cDa(t,e))
w=4
return B.b(t.f,$async$I_)
case 4:w=5
return B.b(C.af2(t.a.c,e.a),$async$I_)
case 5:w=6
return B.b(t.Os(),$async$I_)
case 6:case 1:return B.h(u,v)}})
return B.i($async$I_,v)},
CF(d){return this.bzh(d)},
bzh(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$CF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bY(A.K,null,new C.cD5(d),r,!0,!0,!1,null,!1,!1,x.N),$async$CF)
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
return B.b(t.aVY(0,d),$async$CF)
case 9:w=5
break
case 7:w=10
return B.b(F.fTz(r,d.b,null),$async$CF)
case 10:w=5
break
case 8:w=11
return B.b(t.I_(0,d),$async$CF)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$CF,v)},
bUd(){var w,v,u=null,t=[D.dnx,D.dnv,D.dnw],s=new C.cDc(),r=B.m(26),q=x.V,p=B.a([new B.ad(0,A.G,A.dj.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aV(999,999)
n.push(B.p(u,new B.x(D.d86[w],u,A.o_,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bs(v,v,v,v),u,u,A.n),u,u,u,u,A.nF,u,u,u))}return B.p(u,B.A(B.a([B.D(B.v(B.a([D.fnu,A.P,B.c3(A.bE,n,A.bw,6,6),A.aO,B.aE(u,B.p(u,D.eCg,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ad(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.agw,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cDb(this),u,u,u,u,u,u,!1,A.a9)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a6(130,110,new B.an(A.A,u,A.aa,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bPW,A.n),u,u,u,u,D.bqa,u,u,u)},
bzf(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ad(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bv(B.m(6),new B.an(A.W,v,A.b_,A.q,B.a([B.f4(A.A,F.amK(d.b),A.f,A.bQ),D.e6x,B.ao(v,B.aE(v,B.p(v,D.bIO,A.f,v,v,D.aZ5,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cD0(this,d),v,v,v,v,v,v,!1,A.a9),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eQw,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fF(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eWK,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,new C.cD1(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cD2(this,d),v,v,v,v,v,v,!1,A.a9)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eD(B.a([new B.C(H.af5,B.ho(B.aE(s,B.p(s,A.alL,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ad(0,A.G,A.b4.j(0.5),A.J,12)],x.V),E.vq,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc0E(),s,s,s,s,s,s,!1,A.a9),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mJ,s,s,s,!0,s,s,s,s,s,D.fny,s,s,s,1,s,!0)
if(t.e)r=D.b1t
else{w=t.bUd()
v=B.a([D.f9I,A.ab],r)
if(J.cw(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ac(t.d),s,s,s,s,s,s,D.ePX,s,s,s),A.f,s,s,new B.o(D.b62,s,s,u,s,s,A.n),s,s,s,s,A.xj,s,s,s))}r=B.a([new B.nE(A5.Xx,new B.lZ(w,s),s),new B.nE(D.bpx,new B.lZ(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ck(t.d))r.push(D.eIg)
else r.push(new B.nE(D.bp2,B.O2(new B.od(new C.cDn(t),J.ac(t.d),!0,!0,!0,0,B.rD(),s),D.b0L),s))
r=B.ve(0,s,A.q,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.cb(q,D.b4R,r,s,!1,!1,s,s)}}
C.Xz.prototype={
T(){return new C.aw5(B.a([],x.bx))},
T4(d){return this.d.$1(d)}}
C.aDs.prototype={}
C.aw5.prototype={
aYO(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b1,A.aN),w),u=this.gaVX()
v.aM(0,u)
w=new B.ar(new B.bb(e,A.b1,A.aN),w)
w.aM(0,u)
return new C.aDs(v,w,f)},
Du(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cM(A.pn,new C.cCu(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b1,A.aN),v)
t=m.gaVX()
u.aM(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ar(new B.bb(w.b,A.b1,A.aN),v)
u.aM(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ar(new B.bb(w.c,A.b1,A.aN),v)
u.aM(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b1,A.aN),v)
o.aM(0,t)
n=new B.ar(new B.bb(p.b,A.b1,A.aN),v)
n.aM(0,t)
r.push(new C.aDs(o,n,p.c))}if(r.length===0)r.push(m.aYO("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.goJ()
q=r.a
q.T4(q.c)}q=r.d
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
goJ(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mi(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.r2(n,w,v,t,u)},
Ah(){var w=0,v=B.j(x.H),u=this,t
var $async$Ah=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.goJ()
t=u.a
w=2
return B.b(t.T4(t.c),$async$Ah)
case 2:return B.h(null,v)}})
return B.i($async$Ah,v)},
c0C(){this.m(new C.cCt(this))
this.Du()},
aUX(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cCw(w,d,v))
w.Du()},
c0D(d,e){var w=A.d.cz(this.w,e)
this.m(new C.cCE())
this.Du()
$.aT.x1$.push(new C.cCF(w))},
PB(d){return this.cej(d)},
cej(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PB=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kT(80,1400,A.eG),$async$PB)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$PB)
case 8:p=f
o=q.b.toLowerCase()
n=J.agy(o,".png")?"image/png":"image/jpeg"
r.m(new C.cCx(d,n,p))
r.Du()
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
return B.i($async$PB,v)},
xf(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hfc(r,t.goJ()),$async$xf)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cCv(t,s))
t.Du()
case 1:return B.h(u,v)}})
return B.i($async$xf,v)},
ceB(d){var w,v=this,u=null,t=F.fqV(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hc(D.bC9,D.fc5,new C.cCz(v,d),u),u)
w=x.p
return new B.C(A.cG,new B.an(A.W,u,A.aa,A.q,B.a([B.bv(B.m(12),B.fK(t,A.A,u,u,A.cn,A.bQ,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b0W(A.kI,new C.cCA(v,d)),A.bo,v.b0W(A.cw,new C.cCB(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b0W(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aK(!1,w,!0,new B.C(A.hu,B.W(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cL,w,w,A.af)},
I1(){var w=0,v=B.j(x.H),u,t=this,s
var $async$I1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Ah(),$async$I1)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fTz(s,t.goJ(),new C.cCD(t)),$async$I1)
case 4:case 1:return B.h(u,v)}})
return B.i($async$I1,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eD(B.a([new B.C(A.qD,B.hc(D.bGN,D.fhW,n.gauQ(),B.fu(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.alK,m,m,m,new C.cCG(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.VA,m,1,m,m,m,!1,m,!1,E.mJ,m,m,m,!0,m,m,m,m,m,D.fcV,m,m,m,1,m,!0),j=At.aSR(N.l_,A.c,Ae.Ux,A.nJ,D.fdE,n.gc0B()),i=B.m(18),h=n.gauP(),g=B.a([new B.ad(0,A.G,A.w.j(0.4),A.jd,12)],x.V)
g=B.aE(m,B.p(m,new B.a6(92,142.1818181818182,B.f4(A.A,F.amK(n.goJ()),A.f,A.dt),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a9)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.ew,B.D(B.v(B.a([D.fp2,A.au,B.d(F.fS5(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f1b,m,m,m),A.S,B.dq(E.al1,E.aPi,h,B.bk(A.dj,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.VA,m,m,i,m,m,A.n),m,m,m,m,A.bl,m,m,m)
h=n.d
h===$&&B.c()
h=B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),h,m,m,m,m,m,2,B.bq(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nZ,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),w,m,m,m,m,m,2,B.bq(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.az,h,A.P,w,A.P,B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),g,m,m,m,m,m,2,B.bq(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aV(16,16)
u=new B.aA(N.l_.j(0.18),1,A.r,-1)
t=v+1
s=B.aH(m,m,m,m,D.bFx,m,m,m,v===0?m:new C.cCH(n,v),m,m,m,m,"Move up",A.c7)
r=i.length
q=B.aH(m,m,m,m,D.bLK,m,m,m,v===r-1?m:new C.cCI(n,v),m,m,m,m,"Move down",A.c7)
r=r===1?m:new C.cCJ(n,v)
p=new B.aV(12,12)
o=new B.aV(12,12)
g.push(B.p(m,B.v(B.a([new B.co(A.aQ,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f1I,m,m,m,m,m,m,m,m,m),A.b3,s,q,B.aH(m,m,m,m,B.W(A.e4,A.oi,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c7)],l),m),B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),i[v].a,m,m,m,m,m,2,new B.e_(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bs(p,p,p,p),A.df),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cc,!0,A.a5,m,A.am,m,m,m,m),A.ao,n.ceB(i[v]),B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),i[v].b,m,m,m,m,m,2,new B.e_(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bs(o,o,o,o),A.df),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mJ,m,new B.bP(u,u,u,u),new B.bs(w,w,w,w),m,m,A.n),m,m,new C.a7m(h),A.e3,D.bnH,m,m,m))}return B.oa(!0,B.cb(k,E.adk,B.cB(g,m,D.bo8,m,m,A.ah,!1),m,!1,!1,j,m),new C.cCK(n),x.C)}}
C.aw7.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cr:E.mJ,q=B.m(16),p=B.m(16),o=s?A.aC.j(0.08):A.c.j(0.04)
s=s?A.aC.j(0.16):A.dj.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eO,B.aF(!1,A.a1,!0,t,B.aK(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bz,B.d(u.e,t,t,t,t,t,t,D.aNV,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.W(A.eo,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.af),t)}}
C.aoS.prototype={
T(){return new C.aCe()}}
C.aCe.prototype={
a_(){this.a1()
this.Yy()},
br(d){this.bE(d)
if(d.c!=this.a.c)this.a_U()},
a_U(){var w=0,v=B.j(x.H),u=this,t
var $async$a_U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dR(t,x.H),$async$a_U)
case 2:u.d=null
if(u.c!=null)u.m(new C.e37(u))
w=3
return B.b(u.Yy(),$async$a_U)
case 3:return B.h(null,v)}})
return B.i($async$a_U,v)},
Yy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Yy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ac(n)===0){w=1
break}t=4
if(J.cZ(n,"http://")||J.cZ(n,"https://")||J.cZ(n,"data:")){o=B.Xc(B.cv(n,0,null),new B.Oq(!0))
r.d=o}else{o=B.fk("unsupported video ref")
throw B.U(o)}w=7
return B.b(o.i1(0).cN(0,A.pj),$async$Yy)
case 7:if(r.c==null){w=1
break}r.d.rR(!1)
r.m(new C.e35(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a9(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e36(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Yy,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c33(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fY(0)
w.m(new C.e38(w))}else{v.pr(0)
w.m(new C.e39(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.iZ.j(0.92),D.JX.j(0.95)],x.O)
w=B.I(A.bU.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.W(A.pC,A.bU,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bX(B.av(B.v(B.a([t,new B.a6(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a7(A.ax,A.aD,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.W(A.akk,A.ay,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b2h
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f4(A.A,new B.a6(r,q,new B.zE(s,o),o),A.q,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.W(A.iN,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bv(n,new B.an(A.W,o,A.b_,A.q,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc32(),o,o,o,o,o,o,!1,A.a9)}}
C.xa.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.jg.prototype={}
C.ac4.prototype={
B(d){return B.oD(new C.dUA(this,B.N(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.abu.prototype={
B(d){var w,v,u=null,t=B.N(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.I(D.iZ.j(t?0.35:0.4),A.r,1),p=t?D.Ko:A.c,o=x.V,n=B.a([new B.ad(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.m(10),l=B.I(A.bU.j(0.5),A.r,1)
o=B.a([new B.ad(0,A.G,A.w.j(0.14),A.dz,6)],o)
w=this.c
o=B.D(B.p(u,new B.fF(0.5625,C.hUJ(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ah_,u,u,u,u),1)
m=D.iZ.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iZ,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aK(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.d0,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.ay:D.bbP,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bP(new B.aA(m,1,A.r,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.afk,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.af)}}
C.xd.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nu.prototype={}
C.bhh.prototype={
V5(d){var w=null
return new B.bI(A.a3,w,w,B.Dj(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
byW(){return this.V5(1)},
avu(d){var w=null,v=B.m(8),u=B.I(A.hU,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.abu,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hU,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dT(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hU,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.ba,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ao,w.avu("TAARIFA ZA WANANDOA"),A.ao,w.byW(),A.d0,w.V5(0.9),A.d0,w.V5(0.7),A.P,w.avu("TAMKO LA MAKUBALIANO"),A.fV,w.V5(1),A.d0,w.V5(0.95),A.P,w.avu("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ac7.prototype={
B(d){return B.oD(new C.e8m(B.N(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.adM.prototype={
B(d){var w,v,u,t,s,r=null,q=B.N(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.I(A.av.j(q?0.35:0.4),A.r,1),m=q?D.bbp:A.c,l=x.V,k=B.a([new B.ad(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.m(10),i=B.I(A.av.j(0.5),A.r,1)
l=B.a([new B.ad(0,A.G,A.w.j(0.14),A.dz,6)],l)
w=this.c
v=C.fSA(w.a)
if(v==null)v=A.d.gL(D.PL)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.D(B.p(r,new B.fF(0.5625,new B.an(A.W,r,A.b_,A.q,B.a([B.bZ(0,B.fK(C.fSz(v.d),A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.ag0,new C.bhh(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ah_,r,r,r,r),1)
j=A.av.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.Kp,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aK(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.d0,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.ay:D.b5m,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bP(new B.aA(j,1,A.r,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.afk,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.af)}}
C.kJ.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a6Q.prototype={}
C.UM.prototype={
T(){var w=$.aw()
return new C.aCx(new B.cs(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mq(0,null,null),A.d.gL(D.a1o),D.dxN,B.a([],x.L),B.a([],x.gE))}}
C.aCx.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.z1(C.fuO(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.ftK().bz(new C.ebE(v),w)
$.tP().k9(0,"assets/images/ngmy_logo.png").bz(new C.ebF(v),w).eS(new C.ebG())},
q(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a2()},
afO(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
Ij(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Ij=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kT(88,1600,A.eG),$async$Ij)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$Ij)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hft(m,p),$async$Ij)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bB7(new B.px(o,1),m),$async$Ij)
case 10:if(r.c!=null)r.m(new C.ebg(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a9(k)
r.afO("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ij,v)},
VO(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hft(s,q),$async$VO)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bB7(new B.px(r,1),s),$async$VO)
case 4:if(t.c!=null)t.m(new C.ebc(t,r))
case 1:return B.h(u,v)}})
return B.i($async$VO,v)},
acJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$acJ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ebn(q))
t=4
q.a.toString
p=C.hZ8()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$acJ)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ebo(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a9(i)
q.afO(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ebp(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acJ,v)},
YL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$YL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ac(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ebi(q,i))
t=4
q.a.toString
p=C.hZ7()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$YL)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ebj(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a9(g)
if(q.c!=null)q.m(new C.ebk(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ebl(q))
$.aT.x1$.push(new C.ebm(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YL,v)},
c3K(d){this.m(new C.ebh(this,d))},
DL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$DL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ebe(q))
t=4
w=7
return B.b($.aT.gmi(),$async$DL)
case 7:w=8
return B.b(B.bN(A.mP,null,x.H),$async$DL)
case 8:k=$.aT.ak$.x.h(0,q.d)
p=k==null?null:k.gb7()
if(!(p instanceof B.ql))throw B.U("The page is not ready yet.")
w=9
return B.b(p.m2(1800/p.gY(0).a),$async$DL)
case 9:o=e
w=10
return B.b(o.hl(A.fS),$async$DL)
case 10:n=e
if(n==null)throw B.U("Could not make the picture.")
w=11
return B.b(A7.af5(J.fa(A.dF.gaP(n)),"ngmy_news.png","image/png"),$async$DL)
case 11:m=e
q.afO(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a9(i)
q.afO(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ebf(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DL,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kK,a2,a2,a2,new C.ebv(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bHi,a2,a2,a2,new C.ebw(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oy,a2,a2,a2,a4?a1.gaX1():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eD(v,a2,a2,!0,!0,A.Ag,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eCp,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ad(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fF(0.7142857142857143,B.f4(A.A,new B.et(new C.b_2(t,s,r,a1.x,a2),a1.d),A.f,A.dt),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.SF,a2,a2,a2)
t=a1.as?a2:a1.gc3J()
t=B.a([B.D(B.dq(D.bI2,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cc,a2,a2,a2),t,B.bk(D.rV,a2,a2,a2,A.c,A.fL,a2,a2,new B.b7(B.m(14),O.uv),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bv(B.m(10),B.fK(r,A.A,a2,a2,A.cn,A.bQ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.aw,r,B.aH(a2,a2,a2,a2,D.bEQ,a2,a2,a2,a1.as?a2:a1.gbFD(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.SF,a2,a2,a2)
q=B.aL(a2,A.T,!1,a2,!0,A.q,a2,B.aM(),a1.e,a2,a2,a2,a2,a2,2,a1.aQg("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d30[o]
p.push(B.mx(a2,D.rV,new B.x(n.a,a2,A.oR,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hz,new C.ebx(a1,n),a2,a2,O.uv,a2))}p=B.c3(A.bE,p,A.bw,6,8)
m=a1.Q
m=B.c3(A.bE,B.a([D.fnH,A.bf,B.jG(a2,a2,a2,D.f8A,a2,new C.eby(a1),m==="en",a2,a2,a2,a2),A.ab,B.jG(a2,a2,a2,D.f8v,a2,new C.ebz(a1),m==="sw",a2,a2,a2,a2)],w),A.rs,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.SF,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.da(D.a1o,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bW(i,i.gM(0),h.k("bW<aj.E>")),h=h.k("aj.E");i.C();){g=i.d
k.push(a1.aOP(g==null?h.a(g):g))}k=B.cB(k,a2,a2,a2,a2,A.aQ,!1)
i=B.a([],w)
for(j=B.da(D.a1o,10,a2,j),h=j.$ti,j=new B.bW(j,j.gM(0),h.k("bW<aj.E>")),h=h.k("aj.E");j.C();){g=j.d
i.push(a1.aOP(g==null?h.a(g):g))}j=B.cB(i,a2,a2,a2,a2,A.aQ,!1)
i=a1.as?a2:a1.gc3M()
h=B.m(18)
v=B.a([new B.ad(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.az,new B.C(A.cG,s,a2),t,A.az,new B.C(A.cG,r,a2),q,A.P,p,A.S,m,A.az,new B.C(A.cG,l,a2),new B.a6(a2,78,k,a2),A.P,new B.a6(a2,78,j,a2),A.aO,B.aE(a2,B.p(A.A,B.A(B.a([D.bHX,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fW,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tG,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a9)],w)
if(a4){u=B.a([A.e0,B.A(B.a([D.dil,A.aw,D.bu0],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b4.j(0.35):D.rV
p=new B.aV(16,16)
d=new B.aA(A.bF,1,A.r,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f_e,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.Ul,new B.o(q,a2,new B.bP(d,d,d,d),new B.bs(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cG,A.j5,a2,a2,a2),a2))}u.push(A.ao)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cRa[o]
t.push(B.mx(a2,D.rV,new B.x(a0,a2,A.Ik,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hz,new C.ebA(a1,a0),a2,a2,O.uv,a2))}u.push(B.c3(A.bE,t,A.bw,6,8))
u.push(A.S)
t=B.D(B.aL(a2,A.T,!1,a2,!0,A.q,a2,B.aM(),a1.f,a2,a2,a2,a2,a2,2,a1.aQg("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ebB(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc3L()
u.push(B.A(B.a([t,A.ab,B.H0(A.y6,s,B.nn(a2,A.b4,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.az)
t=a1.as?a2:a1.gaX1()
u.push(B.dq(A.oy,D.fjq,t,B.bk(A.cZ,a2,a2,a2,a2,A.I8,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cB(v,a1.r,A.afN,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jG.j(0.5),A.r,1)
v.push(B.bZ(0,B.ei(B.av(B.p(a2,B.A(B.a([E.a5I,A.ew,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iC,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.A8,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bqs,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cb(a3,A.Ag,new B.an(A.W,a2,A.aa,A.q,v,a2),a2,!1,!1,a2,a2)},
aQg(d){var w=null
return B.bq(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.rV,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,X.Ig,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aOP(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l2,t,t,t,t),A.fV],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bmJ,t,t,t,t))
w.push(A.d0)
w.push(new B.C(A.jq,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.ba,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.j4,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ebd(this,d),t,t,t,t,t,t,!1,A.a9)}}
C.z1.prototype={
b91(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.z1(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cCS(d){var w=null
return this.b91(w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aAK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ca0(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gU(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fu(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c9Z(),B.T(w).k("J<1,n>")).bZ(0,new C.ca_())
t=B.B(w,w.$ti.k("H.E"))}else t=k
w=h.$1("paper")
w=J.ac(w==null?"":w)===0?k:h.$1("paper")
v=h.$1(j)
v=J.ac(v==null?"":v)===0?k:h.$1(j)
s=h.$1("subhead")
r=h.$1("byline")
r=J.ac(r==null?"":r)===0?k:h.$1("byline")
q=h.$1("caption")
p=t!=null&&t.length!==0?t:k
o=h.$1("pullQuote")
n=h.$1("sidebarTitle")
m=h.$1("sidebarText")
l=h.$1(i)
return this.b91(p,r,q,J.ac(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEW(d){return this.f}}
C.rZ.prototype={
a4(){return"NewsLayout."+this.b}}
C.AX.prototype={
a4(){return"NewsFrame."+this.b}}
C.l7.prototype={}
C.b_2.prototype={
qR(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aX3(d,e,f,g){return this.qR(d,e,null,1.25,f,A.bm,g)},
OW(d,e,f,g,h){return this.qR(d,e,f,1.25,g,A.bm,h)},
avA(d,e,f,g,h){return this.qR(d,e,null,f,g,A.bm,h)},
avz(d,e,f,g,h){return this.qR(d,e,f,g,0,A.bm,h)},
aX5(d,e,f,g,h){return this.qR(d,e,null,f,0,g,h)},
c3Q(d,e,f,g,h,i){return this.qR(d,e,f,g,0,h,i)},
avy(d,e,f,g){return this.qR(d,e,null,f,0,A.bm,g)},
acM(d,e,f){return this.qR(d,e,null,f,0,A.bm,A.cN)},
aX4(d,e,f,g,h){return this.qR(d,e,f,g,0,h,A.cN)},
c3P(d,e,f,g){return this.qR(d,e,null,f,0,g,A.cN)},
c3O(d,e,f,g){return this.qR(d,e,f,g,0,A.bm,A.cN)},
acN(d,e,f,g,h,i){return this.qR(d,e,f,g,h,A.bm,i)},
aX2(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.km(new B.eo(d,u,u,A.cO,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.ch,new B.jm(1),u,u,h,u,A.cd,u)
v.Bo(g)
if(!v.b.a.c.gaCm())return w
w-=2}return j},
acK(d,e,f,g,h,i,j,k){return this.aX2(d,e,f,g,h,i,j,k,A.bm)},
axD(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a6(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
axC(d){return this.axD(null,!1,d)},
afC(d,e){return this.axD(null,d,e)},
clb(d,e){return this.axD(d,!1,e)},
gaZb(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaSO(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
NS(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.acK(w.gaSO(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaSO(),v,g,A.a2,v,v,v,w.avz(u,t,f,1.02,A.O),e,v,v)},
aST(d){return this.NS(d,A.L,null,2,78,30)},
aae(d,e,f,g,h){return this.NS(d,e,null,f,g,h)},
bU5(d,e,f,g,h){return this.NS(d,A.L,e,f,g,h)},
bU4(d,e,f){return this.NS(d,A.L,null,e,f,30)},
QS(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.kb,B.d(s,u,g,A.a2,u,u,u,v.aX4(w,v.aX2(t,w,A.cN,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b3S(d){return this.QS(d,A.L,null,3,24)},
az5(d,e,f,g){return this.QS(d,e,null,f,g)},
csx(d,e,f){return this.QS(d,A.L,e,3,f)},
b3T(d,e){return this.QS(d,e,null,3,24)},
csv(d,e){return this.QS(d,A.L,null,3,e)},
csw(d,e,f){return this.QS(d,e,null,3,f)},
apf(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.h4,B.d(u.toUpperCase(),v,v,v,v,v,v,w.OW("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
MP(){return this.apf(null,!0)},
ape(d){return this.apf(null,d)},
bBz(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.i7,new B.a6(d,w,B.d(v,w,2,A.a2,w,w,w,this.c3P(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
v5(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gaZb(),h=A.o.an(j.by(B.c_(B.bx(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hMM(Math.max(1,B.bx(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aX3(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.acK(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.acK(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eB,l,l,l,m.acN(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bAn(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hK,A.j,0,l,l),A.ao,m.afC(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ew,B.D(B.d(i,l,1,A.eB,l,l,l,m.avy(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bAn(j),l,l,l,l,l,l,m.OW(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hK,A.j,0,l,l),A.P,m.clb(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaZb()
v=B.d("NGMY",l,l,l,l,l,l,m.avA(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eA(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qR(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b3,new B.dm(1,A.ci,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.acN(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dK,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hK,A.j,0,l,l)
t=m.afC(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.avy(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.au,t,new B.a6(l,s,l,l),v,new B.a6(l,q,l,l),m.afC(!0,1.4),A.au,B.d(C.bAn(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.axC(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.avA(v,u,1,3,A.O),A.L,l,l),A.P,m.afC(!0,1.2),A.au,B.A(B.a([B.d(C.bAn(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hK,A.j,0,l,l),A.au,m.axC(3)],h),A.m,l,A.e,A.j,0,A.p)}},
abk(d){return this.v5(d,!1)},
acL(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.acN("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c3N(d,e){return this.acL(d,null,e,null)},
aUO(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.dh(v),12)===0?12:A.o.F(B.dh(v),12),t=B.b0(this.d.w).j(0.75),s=this.avz("Roboto",15,t,1,A.cs),r=B.W(E.aio,t,w,w,w,18),q=A.a.ap(A.oB[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fX(v)),2,"0"),o=B.dh(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.bx(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fH,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aui(){return this.aUO(A.me)},
b19(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.acN("Roboto",this.acK(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
axG(d,e,f){return this.b19(d,e,f,30)},
az8(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.uQ,B.d(v,w,e,A.a2,w,w,w,this.c3O("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b3X(d){return this.az8(d,3,22)},
csI(d,e){return this.az8(d,e,22)},
t8(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fK(r,A.A,s,s,A.cn,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.CS(D.bta,w,s)
if(v==="sepia")w=new B.CS(D.bt9,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.W(A.xw,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bX(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.x,s,0,B.a([A.K,A.Vw.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a6(d,e,new B.an(A.W,s,A.b_,A.q,v,s),s)},
pX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.r,3)
j=B.I(B.b0(j),A.r,1)
return B.p(k,B.p(k,l.t8(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.en,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lB,k,k,d)
case 2:w=B.a([new B.ad(0,A.G,A.w.j(0.35),D.dYl,14)],x.V)
v=l.t8(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eA(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.av(B.d(u,k,2,A.a2,k,k,k,l.aX4(j.as,13.5,D.b6O,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.b9N,k,k,k,w,k,A.n),k,e,k,k,D.bo3,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.r,5)
return B.p(k,B.bv(B.m(25),l.t8(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.r,6)
j=B.b0(j.f)
v=t-10
return new B.a6(d,e,B.av(B.p(k,B.hR(l.t8(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lB,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ad(0,A.G,A.w.j(0.3),D.dYb,10)],x.V)
return B.eA(A.A,0.025,new B.a6(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.t8(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qG,k,k,k),0,0,0),B.ao(k,B.eA(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eA(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a6(d,e,B.b3(B.ni(l.t8(d,e),A.aq,D.fEt),new C.bau(j,k),k,k,A.at),k)
case 7:j=x.p
w=B.a([l.t8(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bw(u));++n){m=new B.aV(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bW,k,k,new B.bs(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cK(0,q,0,p,k,k,new B.co(A.aQ,A.pH,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.q,w,k),A.f,A.e8,k,k,k,e,k,k,D.bsr,k,k,d)
case 8:w=d/2
v=B.wz(A.hc,new B.aV(w,w))
j=B.I(B.b0(j.x),A.r,5)
w-=5
return B.p(k,B.bv(B.wz(A.hy,new B.aV(w,w)),l.t8(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ad(0,A.G,A.w.j(0.35),A.fK,22)],x.V)
return B.p(k,l.t8(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a6(d,e,B.ni(l.t8(d,e),A.aq,D.fKr),k)
case 0:j=B.I(B.b0(j.w),A.r,2.4)
return B.p(k,l.t8(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.en,k,k,d)}},
aMr(d,e){return this.d.e===D.Qo?A.bH:this.bBz(d,e)},
Vm(d){return this.aMr(d,A.L)},
gayr(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
ayq(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.D(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aX5(v.Q,19,1.15,A.cD,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.OW("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.acM(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jr(B.v(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gcbR(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a7Z(d,e,f,g){return B.cm(new C.ca1(this,e,d,f,g))},
a7Y(d){return this.a7Z(d,22,!0,18)},
Vx(d,e){return this.a7Z(d,22,!0,e)},
aNt(d,e,f){return this.a7Z(d,22,e,f)},
bDy(d,e,f){return this.a7Z(d,e,!0,f)},
b6M(d,e,f,g){return B.cm(new C.ca2(this,e,d,g,!0,f))},
caG(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.abk(824),A.az,k.aST(824),k.b3S(824),A.P,k.MP(),A.ac,B.av(k.pX(824,360),j,j,j),k.Vm(824),A.ac,B.D(k.a7Y(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.abk(824),A.aO,new B.a6(j,350,B.A(B.a([new B.a6(440,j,B.v(B.a([k.aae(440,A.bg,3,62,26),k.az5(440,A.bg,2,20),A.b3,k.apf(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.I9,B.v(B.a([k.pX(362,310),k.Vm(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.axC(2),A.ac,B.D(k.a7Y(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.v5(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bU5(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.csx(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.AB,j,j,j)
u=B.a([B.av(k.pX(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Qo){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.avz(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lz,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.q,u,j),A.P,k.MP(),A.S,B.D(k.Vx(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.v5(824,!0)
w=k.pX(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b6,j,A.aa,A.q,B.a([w,B.ao(0,B.p(j,k.NS(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a7(A.b0,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bqL,j,j,j),j,j,0,0,j,j)],u),j),k.b3T(824,A.bg),A.P,k.MP(),A.S,B.D(k.a7Y(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.abk(824),A.az,k.aST(824),k.b3S(824),A.P,k.MP(),A.ac,B.D(k.b6M(3,300,B.v(B.a([k.pX(300,300),k.Vm(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.v5(824,!0)
v=x.p
u=B.v(B.a([k.aae(440,A.bg,3,62,26),k.az5(440,A.bg,2,20),A.b3,k.ape(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bu,new B.a6(j,400,B.A(B.a([new B.a6(440,j,u,j),A.aLX,new B.C(A.i7,k.pX(364,h.e===D.Qo?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.az,B.D(k.Vx(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.abk(824),A.ac,k.bU4(824,2,70),k.csv(824,21),A.P,k.MP(),A.ac,B.D(k.b6M(3,340,B.av(k.pX(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.v5(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bAn(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.OW(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bl,j,j,j),A.az],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aX5(h.Q,24,1.15,A.cD,A.O),j,j,j))
v.push(A.b3)
if(k.gayr())v.push(k.ayq(230,250))
return B.v(B.a([w,A.az,B.D(B.A(B.a([new B.a6(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.afj,j,j,j,1.2),new B.a6(570,j,B.v(B.a([k.aae(570,A.bg,3,62,28),k.csw(570,A.bg,20),A.P,k.ape(!1),A.P,B.av(k.pX(570,330),j,j,j),k.Vm(570),A.S,B.D(k.aNt(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.v5(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.OW(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.ao,k.NS(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bp5,j,j,j),k.b3T(824,A.bg),A.S,B.av(k.pX(824,310),j,j,j),k.Vm(824),A.P,k.MP(),A.S,B.D(k.a7Y(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.v5(824,!0),A.aO,new B.an(A.W,j,A.aa,A.q,B.a([k.pX(824,430),B.ao(18,k.c3N(k.c.b,17),j,j,18,j,j,j)],w),j),A.bu,k.axG(824,3,66),k.b3X(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aui(),A.az,B.D(k.Vx(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.v5(824,!0),A.bu,new B.a6(j,500,B.A(B.a([new B.a6(410,j,B.v(B.a([k.acL(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b19(410,4,58,28),k.az8(410,6,20),A.b3],w),A.F,j,A.e,A.j,0,A.p),j),U.aLY,k.pX(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.az,k.aui(),A.aO,B.D(k.Vx(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.v5(824,!0)
v=k.pX(824,420)
u=B.hpC(-0.25)
t=B.b0(h.x)
s=B.a([new B.ad(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aO,new B.an(A.W,j,A.aa,A.q,B.a([v,B.ao(22,B.fr(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c3Q(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.br0,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bu,k.axG(824,3,62),k.b3X(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aUO(A.l9),A.az,B.D(k.Vx(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.v5(824,!0)
u=h.w
t=x.p
w=B.a([k.pX(824,380),B.ao(j,k.acL(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.axG(824,2,60)
r=k.csI(824,2)
p=k.aui()
o=B.D(k.aNt(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aO,new B.an(A.W,j,A.aa,A.q,w,j),A.aO,s,r,A.S,p,A.az,o,A.ac,B.p(j,B.A(B.a([B.bv(B.m(14),k.t8(150,104),A.aq),A.nX,B.D(B.v(B.a([k.acL("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.avy(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.W(A.eo,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.v5(824,!0),A.bu,k.aae(824,A.bg,3,62,30),k.az5(824,A.bg,2,22),A.S,k.ape(!1),A.S,B.av(k.pX(824,330),j,j,j),k.aMr(824,A.bg),A.aO,B.D(k.bDy(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.bX(s,new B.o(s,s,s,s,s,new B.a7(A.ax,A.aD,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b71(B.b0(q.w),s),A.at),0,0,0))
w=q.w
n.push(new B.C(D.brw,B.v(B.a([B.D(t.caG(),1),A.P,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fV,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aX3(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.OW(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hK,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e2(B.b3(s,s,s,new C.bpq(v.j(q.ch?0.07:0.06),s),A.at),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hR(B.fK(q,A.A,s,s,A.cn,A.bQ,!1,30,!1,s,30),A.aq))
else o.push(B.W(A.me,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.avA(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e2(B.dc(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bsA,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a6(900,1260,B.jr(new B.an(A.W,s,A.aa,A.q,n,s),A.q,s),s)}}
C.bav.prototype={
iP(d){return C.h4W(d)},
jw(d){return!1}}
C.bau.prototype={
a6(d,e){var w,v=C.h4W(e)
$.X()
w=B.L()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aN(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.brU.prototype={
iP(d){var w,v,u,t,s,r,q,p,o=new B.eS()
o.dH(3)
w=$.X()
v=B.a([],x.v)
u=new B.aQ(w.r,A.ap,null,null,v)
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
u.E(new B.bF())
return u},
jw(d){return!1}}
C.b71.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eS()
k.dH(7)
$.X()
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
w.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.JY.j(0.13),A.K],v),l,l).aw(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sau(l)},
aq(d){return!1}}
C.bpq.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.ih(u,u,u,u,B.dp(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.ch,u,A.er,A.cd)
s.eO()
w=d.a
J.bA(w.save())
w.translate(t/2,e.b*0.52)
d.j5(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.u(-v/2,-t.gbb(t)/2))
w.restore()},
aq(d){return!d.b.A(0,this.b)}}
C.UP.prototype={
T(){return new C.aCB()}}
C.aCB.prototype={
a_(){var w=this
w.a1()
B.hbJ(w.a.c,null).bz(new C.ecP(),x.g7).bz(new C.ecQ(w),x.a)
w.a.toString},
gaLg(){var w=D.at0[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gavB(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaLg()
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
return new B.aa(q,w,q+s,w+t)},
YN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$YN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ecC(r))
t=4
q=r.gavB()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.X()
n=new B.rP()
m=B.Gs(n,null)
i=B.L()
i.Q=A.fQ
m.B5(g,q,new B.aa(0,0,0+p,0+o),i)
w=7
return B.b(n.q8().yT(J.fVx(p),J.fVx(o)),$async$YN)
case 7:l=e
w=8
return B.b(l.hl(A.fS),$async$YN)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.N(J.fa(J.wu(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ecD(r))
r.c.I(x.q).f.R(D.eKR)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YN,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kK,s,s,s,new C.ecJ(d),s,s,s,s,s,s),p=x.p
q=B.eD(B.a([B.bK(!1,D.flO,s,s,!0,s,s,t.y||r==null?s:t.gc3R(),s,s)],p),s,s,!0,!0,A.Ag,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fpD,s,s,s,1,s,!0)
if(r==null)p=A.lY
else{w=B.D(new B.C(A.bY,B.av(new B.fF(t.gaLg(),B.cm(new C.ecK(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.j4,B.jG(s,s,s,new B.x(D.at0[u].a,s,E.aNJ,s,s,s,s,s,s,s,s,s),s,new C.ecL(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bo(!0,B.v(B.a([new B.a6(s,40,B.cB(v,s,s,s,s,A.aQ,!1),s),B.A(B.a([D.bIF,B.D(B.kR(s,s,s,6,1,new C.ecM(t),t.f),1),D.bIh],p),A.m,s,A.e,A.j,0,s,s),D.fjk,A.ao,B.bK(!1,D.fj4,s,s,!0,s,s,new C.ecN(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.VL,s,s,s,s,s,s,D.bor,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cb(q,A.Ag,p,s,!1,!1,s,s)}}
C.ba1.prototype={
a6(d,e){var w
$.X()
w=B.L()
w.Q=A.cn
return d.B5(this.b,this.c,new B.aa(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.ZS.prototype={
T(){var w=$.aw(),v=x.A
return new C.aDZ(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b1,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gL(D.a1U),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.ok.prototype={}
C.aDZ.prototype={
gaT0(){var w,v,u=this
if(u.p1)w=new B.wP(1,u.p2,0.9,u.p3).i7().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eM3(w))},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
Xt(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tP().k9(0,"assets/images/ngmy_logo.png"),$async$Xt)
case 7:q=e
p=J.fa(J.wu(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bB7(new B.px(p,1),o),$async$Xt)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eKW(r,p))
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
return B.i($async$Xt,v)},
OZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kT(92,1800,A.eG),$async$OZ)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$OZ)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bB7(new B.px(p,1),n),$async$OZ)
case 9:if(r.c==null){w=1
break}r.m(new C.eLj(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a9(l)
n=r.c
if(n!=null)n.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$OZ,v)},
b0x(){var w=this
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
w.c6=w.bR=w.bj=0
w.cW=w.cT=!1},
aUy(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bxP(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d5s)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bxP(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bxP(C.fQz(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bxP(C.fQz(1-a0*0.5,n,n,n),w)}return a1?C.bxP(C.fQz(-1,255,255,255),w):w},
aze(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kI(0,this.d.a.a),t=B.B(u,B.a3(u).k("H.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yM(u,v,w)
this.dx.pO(new C.eLt(t),!0)
return t},
b31(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aze()
w=C.hWS(e.d.a.a,e.db)
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
return C.hTm(d,k,v,a0,j,e.gaT0(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cqw(){return this.b31(null)},
CE(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gmi(),$async$CE)
case 3:w=4
return B.b(B.bN(A.eN,null,x.H),$async$CE)
case 4:w=5
return B.b($.aT.gmi(),$async$CE)
case 5:s=$.aT.ak$.x.h(0,t.r)
r=s==null?null:s.gb7()
if(!(r instanceof B.ql)){u=null
w=1
break}w=7
return B.b(r.m2(1080/r.gY(0).a),$async$CE)
case 7:w=6
return B.b(e.hl(A.fS),$async$CE)
case 6:q=e
u=q==null?null:J.fa(A.dF.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CE,v)},
a8Q(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a8Q=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eKF(q))
t=4
w=7
return B.b(q.CE(),$async$a8Q)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcu().aI(p)
n=C.B9(null,null,null,null,D.nQ,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b31(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a9(j)
l=q.c
if(l!=null)l.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eKG(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8Q,v)},
A_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$A_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eKD(q))
t=4
w=7
return B.b($.aT.gmi(),$async$A_)
case 7:w=8
return B.b(B.bN(A.ol,null,x.H),$async$A_)
case 8:w=9
return B.b($.aT.gmi(),$async$A_)
case 9:k=$.aT.ak$.x.h(0,q.f)
p=k==null?null:k.gb7()
if(!(p instanceof B.ql))throw B.U("The picture is not ready yet.")
w=10
return B.b(p.m2(1080/p.gY(0).a),$async$A_)
case 10:o=e
w=11
return B.b(o.hl(A.fS),$async$A_)
case 11:n=e
if(n==null)throw B.U("Could not make the picture.")
w=12
return B.b(A7.af5(J.fa(A.dF.gaP(n)),"ngmy_quote.png","image/png"),$async$A_)
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
l=B.a9(i)
k=q.c
if(k!=null)k.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eKE(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$A_,v)},
cdL(){var w=this.p4
w.toString
return B.cm(new C.eLc(this,w))},
aXc(d,e){var w=null
return B.bq(w,w,w,w,w,D.eUU,w,w,!0,new B.b4(4,B.m(16),O.uv),w,w,w,w,w,D.rV,!0,w,w,w,w,new B.b4(4,B.m(16),D.aVP),w,w,w,w,w,w,w,w,A1.CO,e,w,w,w,w,w,w,w,D.f_5,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xn(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b4,w,w,w,15),A.bo],v))
u.push(B.d(d,w,w,w,w,w,w,D.aOu,w,w,w))
return new B.C(D.bmn,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aXb(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.r,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.ju),A.f,w,w,new B.o(D.rV,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vc(d){return this.aXb(d,A.bB)},
nO(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tG:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.j2,r,r,r,16),A.bo],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j2,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dg(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bb,new B.o(w,r,u,v,r,p,A.n),A.hW,r,r,r,A.EI,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a9)},
aeC(d,e,f){return this.nO(d,null,e,f)},
avF(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b4.j(0.28):A.c.j(0.05),t=g?A.ey:A.bF,s=x.p
v=B.a([B.dg(w,d,w,w,A.bb,new B.o(u,w,B.I(t,A.r,g?2:1),v,w,w,A.n),A.hW,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.ay
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a6(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a9)},
aXf(d,e,f,g,h,i){return this.avF(d,e,f,g,h,5,i)},
jY(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eRY,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e0R,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eLp(this,h,i),u,u,u,u,u,u,!1,A.a9))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aNA,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.XX,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.atI(w).cEe(A.b4,A.bF,A.b4.j(0.2),A.c,D.eBK,4)
return new B.C(A.x4,B.v(B.a([s,B.a8S(B.kR(u,u,u,g,f,new C.eLq(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
agC(d,e,f,g,h,i){return this.jY(d,e,f,g,h,null,i)},
ah1(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.b5
p=new B.aA(q,r?3:1,A.r,-1)
t=t?D.bBM:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bP(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eLs(this,e,u),o,o,o,o,o,o,!1,A.a9))}return B.c3(A.bE,n,A.bw,10,10)},
bHF(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a1U
else{v=x.a8
w=B.B(new B.a2(D.a1U,new C.eKv(o),v),v.k("H.E"))}v=B.aL(n,A.T,!1,n,!0,A.q,n,B.aM(),o.d,n,n,n,n,n,2,o.aXc("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eKw(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a6I,!0,A.a5,n,A.am,n,n,n,n)
u=B.aL(n,A.T,!1,n,!0,A.q,n,B.aM(),o.e,n,n,n,n,n,2,o.aXc("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eKx(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.dk,!0,A.a5,n,A.am,n,n,n,n)
t=o.xn("DESIGNS",A.tu)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cJ4[q]
r.push(new B.C(A.j4,o.aeC(p,o.x===p,new C.eKy(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.y,n,n,n,n,A.aQ),A.ac,new B.a6(n,118,B.hE(n,new C.eKz(o,w),w.length,n,n,A.aQ,new C.eKA(),!1),n),A.P,o.aXb(B.v(B.a([B.iC(A.b4,n,n,A.ag,!0,new C.eKB(o),n,D.faK,n,D.f7k,o.k3),B.iC(A.b4,n,n,A.ag,!0,new C.eKC(o),n,n,n,D.f4B,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.afM)],s),A.F,n,A.e,A.j,0,A.p)},
cyQ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aze()
if(a7.length===0)return a5.vc(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.It,a6,a6,a6))
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
m=B.B(u,B.a3(u).k("cl.E"))
A.d.fe(m)
l=m.length!==0&&A.d.de(m,new C.eLT(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eM_(a5)
j=new C.eM1()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.It,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aV(11,11)
f=u.t(0,h)?A.b4.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ey:A.bF
d=new B.aA(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bP(d,d,d,d),new B.bs(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.LI,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eLU(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a9))}o=a5.vc(B.c3(A.bE,o,A.rs,6,6))
i=B.a([a5.nO("All words",K.ak0,!1,new C.eLV(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.aeC("Sentence "+a3,!1,new C.eLW(a5,a7,v,a2)))
a2=a3}}i.push(a5.aeC("Clear picks",!1,new C.eLX(a5)))
i=B.c3(A.bE,i,A.bw,8,8)
g=a5.xn("SIZE OF THE PICKED WORDS",D.ajq)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.daO[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eLY(e,k)
f.push(a5.aeC(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.c3(A.bE,f,A.bw,8,8),A.S,a5.nO("Make every word normal",A.l8,!1,new C.eLZ(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cuc(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.btG,B.d(A.d.ix(D.auH,new C.eLC(q)).b,p,p,p,p,p,p,D.eTp,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cm(new C.eLD(q)),l=q.xn("HIGHLIGHT BEHIND THE WORDS",A.ZP),k=q.p1?-1:q.k4
k=q.ah1(k,new C.eLE(q),D.cT0)
w=q.p1
v=w?A.c:A.b5
n=B.a([n,A.S,m,l,B.c3(A.bE,B.a([k,B.aE(p,B.p(p,D.bEK,A.f,p,p,new B.o(p,p,B.I(v,A.r,w?3:1),p,p,D.eNs,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eLH(q),p,p,p,p,p,p,!1,A.a9)],o),A.rs,10,10),A.ao,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.It,p,p,p)],o)
if(q.gaT0()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.agC("Colour",l,0,360,new C.eLI(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.agC("Shade",k,0.15,0.9,new C.eLJ(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.jY("Strength",l,0.15,1,new C.eLK(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vc(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xn("LOOK",A.xV))
m=B.a([q.nO("Bold",I.ajo,q.fy,new C.eLL(q)),q.nO("Italic",I.ajp,q.go,new C.eLM(q))],o)
for(u=0;u<3;++u){l={}
k=D.cKc[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tG:p
w=w?p:A.c.j(0.07)
s=new B.aV(14,14)
r=new B.aA(q.id===l.a?A.K:A.bF,1,A.r,-1)
m.push(B.aE(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bP(r,r,r,r),new B.bs(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eLN(l,q),p,p,p,p,p,p,!1,A.a9))}n.push(B.c3(A.bE,m,A.rs,8,8))
n.push(q.xn("COLOUR",A.mX))
n.push(q.ah1(q.fx,new C.eLO(q),D.d2x))
n.push(A.ao)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.It,p,p,p))
n.push(q.xn("SIZE AND PLACE",A.FE))
m=q.fr
m=q.jY("Text size",m,0.5,1.6,new C.eLF(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vc(B.v(B.a([m,q.jY("Up / down",l,0.12,0.5,new C.eLG(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cdM(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b4.j(0.6),A.r,1.6)
u=B.a([A.b4.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bK4,A.f,p,p,D.aYN,p,62,p,p,p,p,p,62),A.az,D.f8t,A.ao,D.fcT],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.rV,p,v,w,p,new B.a7(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bpC,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaXe(),p,p,p,p,p,p,!1,A.a9)}w=x.p
v=B.A(B.a([B.bv(B.m(12),new B.a6(46,62,B.fK(o,A.A,120,p,A.cn,A.bQ,!1,p,!1,p,p),p),A.aq),A.bf,B.D(B.v(B.a([D.f83,A.P,B.c3(A.bE,B.a([q.nO("Change",A.kI,!1,q.gaXe()),q.nO("Remove",A.e4,!1,new C.eLg(q))],w),A.bw,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d_b[t]
u.push(q.nO(s.b,s.a,q.at===t,new C.eLh(q,t)))}u=B.c3(A.bE,u,A.bw,8,8)
r=q.at
A:{if(0===r){s=q.bXU(o)
break A}if(1===r){s=q.bWY()
break A}if(2===r){s=q.bDx()
break A}if(3===r){s=q.bJH()
break A}s=q.bFE()
break A}return B.v(B.a([v,A.ac,u,A.az,s,A.S,new B.bI(A.a3,p,p,q.nO("Reset the whole picture",A.l8,!1,new C.eLi(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bXU(d){var w=this,v=x.p
return B.v(B.a([B.c3(A.bE,B.a([w.nO("Auto enhance",E.Zt,!1,new C.eL8(w)),w.nO("Make words easy to read",A.ov,!1,new C.eL9(w))],v),A.bw,8,8),A.az,B.cm(new C.eLa(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bWY(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jY("Exposure",n,-1.5,1.5,new C.eKN(o),0,A.k.aa(n,1))
w=o.RG
w=o.jY("Brightness",w,-0.5,0.5,new C.eKO(o),0,""+A.k.V(w*100))
v=o.rx
v=o.jY("Contrast",v,0.4,2,new C.eKP(o),1,""+A.k.V(v*100))
u=o.xr
u=o.jY("Fade",u,0,1,new C.eKQ(o),0,""+A.k.V(u*100))
t=o.aE
t=o.jY("Spotlight",t,0,1,new C.eKR(o),0,""+A.k.V(t*100))
s=o.Z
s=o.jY("Darken",s,0,0.85,new C.eKS(o),0,""+A.k.V(s*100))
r=o.b5
r=o.jY("Vignette",r,0,0.9,new C.eKT(o),0,""+A.k.V(r*100))
q=o.aF
q=o.jY("Shade behind words",q,0,0.85,new C.eKU(o),0,""+A.k.V(q*100))
p=o.aO
return o.vc(B.v(B.a([n,w,v,u,t,s,r,q,o.jY("Shade top & bottom",p,0,0.85,new C.eKV(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bDx(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jY("Colour strength",q,0,2.2,new C.eK8(s),1,""+A.k.V(q*100))
w=s.to
w=s.jY("Warmth",w,-1,1,new C.eK9(s),0,""+A.k.V(w*100))
v=s.x1
v=s.jY("Tint",v,-1,1,new C.eKa(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vc(B.v(B.a([q,w,v,s.jY("Shift colours",u,-180,180,new C.eKb(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.nO("Negative",D.bzM,s.y1,new C.eKc(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xn("COLOUR WASH",A.MH)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.atq)
t=B.a([u,v,s.ah1(w,new C.eKd(s),q),A.P],t)
if(s.b3!=null){q=s.b0
t.push(s.vc(s.agC("Wash strength",q,0,0.9,new C.eKe(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bJH(){var w,v,u,t,s,r=this,q=r.y2
q=r.jY("Blur",q,0,24,new C.eKH(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.jY("Soft focus",w,0,1,new C.eKI(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vc(B.v(B.a([q,w,r.jY("Film grain",v,0,1,new C.eKJ(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xn("LIGHT LEAK",H.ajk)
q=r.ba
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.da(D.atq,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ah1(q,new C.eKK(r),t),A.P],u)
if(r.ba!=null){q=r.bJ
u.push(r.vc(r.agC("Leak strength",q,0,1,new C.eKL(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bFE(){var w,v,u,t,s=this,r=s.aR
r=s.jY("Zoom",r,1,3,new C.eKi(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.jY("Left / right",w,-1,1,new C.eKj(s),0,""+A.k.V(w*100))
v=s.bR
v=s.jY("Up / down",v,-1,1,new C.eKk(s),0,""+A.k.V(v*100))
u=s.c6
t=x.p
return B.v(B.a([s.vc(B.v(B.a([r,w,v,s.jY("Turn",u,-180,180,new C.eKl(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.c3(A.bE,B.a([s.nO("Turn 90\xb0",P.aky,!1,new C.eKm(s)),s.nO("Flip sideways",A.Fs,s.cT,new C.eKn(s)),s.nO("Flip upside down",A.Fs,s.cW,new C.eKo(s))],t),A.bw,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c_x(){var w=null,v=B.m(22),u=B.I(A.bF,A.r,1)
return B.p(w,B.v(B.a([D.eBW,A.S,D.f9O,A.az,B.aE(w,B.p(A.A,D.eC8,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tG,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eLb(this),w,w,w,w,w,w,!1,A.a9)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.rV,w,u,v,w,w,A.n),w,w,w,w,A.bY,w,w,w)},
bXM(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eL3(p),m=x.p,l=B.A(B.a([D.btM,p.nO("Reset",A.l8,!1,new C.eL_(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.It,o,o,o),j=p.xn("SHAPE",A.aku),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Bu[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aXf(n.$2(t,p.cy),62,u.b,s===t,new C.eL0(v,p),62))}}i=B.c3(A.bE,i,A.bw,8,8)
v=p.xn("RING",A.qI)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Bp[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aXf(n.$2(p.cx,t),62,r.b,q===t,new C.eL1(s,p),62))}u=B.c3(A.bE,u,A.bw,8,8)
s=p.CW
return B.v(B.a([l,A.au,k,j,i,v,u,A.ac,p.vc(p.jY("Size",s,0.12,0.4,new C.eL2(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b_a(d){return new B.a6(null,d,new B.fF(0.5625,B.cm(new C.eLm(this)),null),null)},
ctu(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tG:q
t=new B.aV(14,14)
s=D.d1b[w]
r=v?A.c:A.ay
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.ay
l.push(new B.bE(1,A.bi,B.aE(A.c5,B.dg(q,B.v(B.a([r,A.d0,new B.q5(A.eg,A.A,A.f,new B.x(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bb,new B.o(q,q,q,new B.bs(t,t,t,t),q,u,A.n),D.blj,q,q,q,A.hG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eLv(this,w),q,q,q,q,q,q,!1,A.a9),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bnp,A.lB,q,q,q)},
aNZ(){var w,v,u=this,t=null,s=u.ctu(),r=u.as
A:{if(0===r){w=u.bHF()
break A}if(1===r){w=u.cyQ()
break A}if(2===r){w=u.cuc()
break A}if(3===r){w=u.cdM()
break A}if(4===r){w=u.bXM()
break A}w=u.c_x()
break A}v=x.p
return B.bv(A.ry,B.ei(B.v(B.a([s,B.D(B.cB(B.a([w],v),t,D.bos,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.VL,!0),A.aq)},
aKe(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc4h(),p=B.m(16)
q=B.D(B.aE(r,B.p(r,D.eCh,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b5,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a9),1)
p=s.Q?r:s.gbJh()
w=B.m(16)
v=B.a([new B.ad(0,A.G,A.bA.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eHa)
else t.push(D.bDR)
t.push(A.ab)
t.push(D.bvu)
return B.p(r,B.A(B.a([q,A.aw,B.D(B.aE(r,B.p(r,B.A(t,A.m,r,A.ba,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tG,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a9),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aXV,r,r,r,r,G.afA,r,r,r)},
aXd(){var w=null
return new B.C(T.XT,B.A(B.a([B.aH(w,w,w,w,A.mi,w,w,w,new C.eKM(this),w,w,w,w,w,w),D.foC,A.b3,D.bMl],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cb(w,A.Ag,B.bo(!0,B.cm(new C.eM2(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bdy.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eS()
m.dH(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.X()
t=B.L()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.L()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c5(new B.aa(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.rc.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.lW.prototype={}
C.z3.prototype={
ad(){var w=this
return B.E(["at",w.a.a5().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.ny.prototype={}
C.vE.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a6Y.prototype={}
C.apH.prototype={}
C.a_m.prototype={
T(){return new C.aFT(new B.ar(A.as,$.aw()),B.kg(!0,null,!0,!0,null,null,!1),D.dqx,B.a([],x.s),B.ew([D.Hj],x.Q))}}
C.aFT.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().BA(90,700,700,A.eG),$async$a_6)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$a_6)
case 8:p=e
if(r.c!=null)r.m(new C.eS2(r,p,q))
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
return B.i($async$a_6,v)},
a_9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hV().aFu(78,n,1100,1100),$async$a_9)
case 7:q=e
if(J.ck(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gU(n)
if(J.ac(p)>=20){w=9
break}w=10
return B.b(o.fc(),$async$a_9)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c9(l,".png"))k="image/png"
else k=A.a.c9(l,".webp")?"image/webp":"image/jpeg"
J.cf(p,"data:"+k+";base64,"+A.cS.gcu().aI(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eS3(r,p))
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
return B.i($async$a_9,v)},
b18(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fK(A.cB.aI(A.d.gam(d.split(","))),A.A,u,u,A.cn,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bjB},
bXS(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cnO(C.fsa(w,this.b18(d),f),g)},
ab5(d,e,f,g,h){var w=null,v=new C.eS0(f,e),u=new C.eS1(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b4.j(0.6),A.r,1)
if(p)p=new B.a6(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.W(f?A.B9:A.Mw,A.c_,w,w,w,26),w,w,w),D.e6l],x.p),w),w)
else p=this.bXS(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.p(w,B.A(B.a([B.D(B.av(p,w,w,w),1),D.bDy],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.ma,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eS_(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.af)},
aUE(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bv(B.m(8),B.fK(A.cB.aI(A.d.gam(h.split(","))),A.A,p,p,A.cn,A.bQ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bk.j(0.6),A.r,1)
q=o
n=q==null?B.W(d,A.es,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.SS,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a_K,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a9))
return B.aF(!1,A.a1,!0,u,B.aK(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l2,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.af)},
a7i(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7i=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fvB(),$async$a7i)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eRJ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a9(n)
if(r.c!=null)r.m(new C.eRK(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7i,v)},
acV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$acV=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eRM(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eRN(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eRO(r))
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
return B.b(C.fqT(q,r.cx,j,new C.b_q(r.z,r.Q,r.as,r.at),new C.eRP(r),i,m,p,k),$async$acV)
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
if(p!=null)B.a5(p,!1).N(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a9(e)
if(r.c!=null)r.m(new C.eRQ(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eC,g).w
g=B.aI(d,A.bS,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b5,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bGI,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.r,2),h,B.a([new B.ad(2,A.G,A.bk.j(0.5),A.J,24)],v),D.bQ5,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eSg(i),h,h,h,h,h,h,!1,A.a9),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a_K,h,h,h,i.ax?h:new C.eSh(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbyD()
v=B.a([new B.ad(0,A.G,A.b4.j(0.45),A.J,10)],v)
s.push(B.ho(B.aF(!1,A.a1,!0,h,B.aK(!1,h,!0,B.p(h,B.W(i.e==null?A.vb:A.hw,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vq,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.af),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aL(h,A.T,!1,h,!0,A.q,h,B.aM(),i.d,h,h,h,h,h,2,B.bq(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aVm),h,h,h,h,h,h,h,h,X.Ig,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.j4,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aNX,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eSi(i)
s=i.aUE(A.la,q,r,i.gcec(),s)
r=i.z
r=B.D(i.ab5(new C.eSk(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.ao,B.A(B.a([r,A.bo,B.D(i.ab5(new C.eSl(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eSm(i)
s=i.aUE(A.v8,r,p,i.gcek(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.D(i.ab5(new C.eSn(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.az,D.fe6,A.au,D.fgU,A.bu,u,A.P,D.ffn,A.az,v,A.bu,B.A(B.a([q,A.aw,B.D(B.v(B.a([s,A.ao,B.A(B.a([p,A.bo,B.D(i.ab5(new C.eSo(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ao,D.fiy],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bcz,A.r,1)
w=C.afE(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.A(B.a([D.bHN,A.bo,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eYR,h,h,h),B.aK(!1,h,!0,D.e16,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eSp(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b67,h,u,v,h,h,A.n),h,h,h,h,D.bn4,h,h,h),h)],t))}o.push(A.bu)
o.push(D.f5j)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cV1[m]
v=i.ch===l?A.b4:A.c.j(0.06)
u=i.ch===l
k=new B.aA(u?A.ay:A.bF,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bE(1,A.bi,new B.C(A.jq,B.aE(h,B.dg(A.A,new B.x(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bb,new B.o(v,h,new B.bP(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eSq(i,l),h,h,h,h,h,h,!1,A.a9),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bu)
o.push(D.fmU)
o.push(A.P)
o.push(B.cm(new C.eSr(i)))
o.push(A.bu)
o.push(D.fcg)
o.push(A.P)
w=B.a([i.b3Q("auto","Let AI choose",A.dV,A.Pc)],t)
for(v=x.O,m=0;m<11;++m){j=D.vv[m]
u=j.d
w.push(i.b3Q(j.a,j.b,j.c,B.a([B.b0(A.d.gL(u).a),B.b0(A.d.gL(u).b)],v)))}o.push(B.c3(A.bE,w,A.bw,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bk.j(0.5):A.bF,A.r,1)
o.push(B.p(h,B.iC(h,A.bk,h,h,h,new C.eSj(i),D.bD_,D.fm9,h,D.f7x,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.az,B.d(w,h,h,h,h,h,h,D.aNb,h,h,h)],t))
o.push(A.bu)
w=i.ax?h:i.gc4l()
v=B.fm(h,h,A.b4,A.b4.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eH0:A.FS
o.push(new B.a6(h,54,B.lo(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oQ,h,h,h),w,v),h))
return new B.C(new B.Q(0,0,0,f.f.d),B.p(h,B.bo(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.q,h,A.y,h,A.v0,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.a9w,h,h,h,h,h,h,h,h),h)},
bKL(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eRR(this,p,d)
if(d===D.C5)return new C.aCq(p,o,q)
w=B.m(16)
v=p?E.vq:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.ay:A.bF,A.r,1)
s=B.W(p?A.ee:C.hwD(d),A.c,q,q,q,20)
r=C.hwE(d)
return B.aE(q,B.dg(q,B.v(B.a([s,A.au,B.f4(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.ba,A.j,0,A.p),q,q,A.bb,new B.o(u,q,t,w,q,v,A.n),A.hW,q,64,q,A.hu,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a9)},
b3Q(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.r,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a7(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dg(v,B.A(B.a([w,L.Ia,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bb,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.agS,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eS5(this,d),v,v,v,v,v,v,!1,A.a9)}}
C.a_l.prototype={
T(){return new C.aFS(new B.ar(A.as,$.aw()))}}
C.aFS.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
acW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$acW=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ac(a0)<3){r.m(new C.eRC(r))
w=1
break}B.eO()
r.m(new C.eRD(r))
t=4
q=C.hXL(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hXv(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eRE(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fQf()
f=$.C9.h(0,k.a)
o=f==null||J.ck(f)?null:J.fo(f)
if(o==null){r.m(new C.eRF(r))
w=1
break}n=C.hXt(o,r.a.c)
C.hXp(r.a.c.a)
$.fPw=!0
k=r.c
if(k!=null)B.a5(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fSZ(j)
h=C.fT_(r.a.c)
e=C.fT0(r.a.c)
w=7
return B.b(C.bA1(k,r.a.c.a,j,h,new C.eRG(r),i,e,a0),$async$acW)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a9(a1)
if(r.c!=null)r.m(new C.eRH(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eC,i).w
i=B.aI(d,A.bS,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b5,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.akN,A.f,j,j,D.aXA,j,34,j,j,j,j,j,34),A.aw,D.buk],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,X.aNE,j,j,j)
s=A.c.j(0.05)
s=B.aL(j,A.T,!0,j,!0,A.q,j,B.aM(),k.d,j,j,j,j,j,2,B.bq(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),Aq.a91),j,j,j,j,j,j,j,j,X.Ig,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aNX,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cRz[q]
o=A.c.j(0.06)
n=k.e?j:new C.eRI(k,p)
r.push(B.mx(j,o,new B.x(p,j,Ax.Sq,j,j,j,j,j,j,j,j,j),j,n,j,j,O.uv,j))}w=B.a([w,A.az,u,A.ao,t,A.az,s,A.S,B.c3(A.bE,r,A.bw,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aNb,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc4m()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bk.j(0.5),A.ff.j(0.5)],x.O):D.cq8
o=B.a([new B.ad(0,A.G,A.bk.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e12:D.bHm
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aK(!1,s,!0,B.ex(B.A(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jf,j,j,j)],v),A.m,j,A.ba,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.af))
return new B.C(new B.Q(0,0,0,h.f.d),B.p(j,B.bo(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.q,j,A.y,j,A.v0,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.a9w,j,j,j,j,j,j,j,j),j)}}
C.b_q.prototype={}
C.aCq.prototype={
T(){return new C.bib(null,null)}}
C.bib.prototype={
gavG(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pl,null,1,null,v)
w.cG(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gavG().q()
this.bsF()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gavG(),new C.e7M(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a9)}}
C.bfK.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cX8[s]
p=q.a*v
q=q.b*u
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.wT.j(0.25+r*0.6).gp(0)
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
aq(d){return d.b!==this.b}}
C.aqg.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.YK.prototype={
T(){return new C.azS()}}
C.azS.prototype={
gagZ(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.afR(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzK(){var w=this.e
return w===$?this.e=C.fSZ(this.a.c).t(0,D.C5):w},
a75(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a75=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dfk(s))
u=3
r=A.d.ix(D.vv,new C.dfl(s))
q=B.d9(C.fSZ(s.a.c),x.Q)
l=q
J.hJ(l,D.C5)
p=l
if(s.gzK())J.cf(p,D.C5)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzK()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fT_(i.c)
g=C.fT0(s.a.c)
w=6
return B.b(C.bA1(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a75)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.afR(q,s.gagZ())
f=q==null?null:q.b
n=f==null?s.gagZ():f
if(!J.y(n,r.a)&&!s.gzK())throw B.U("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a9(d)
if(s.c!=null)s.m(new C.dfm(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a75,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.N(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.r,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bz,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dfp(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.W(A.cw,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vv[w]
u=o.gagZ()
t=o.f?n:new C.dfq(o,v)
f.push(new C.bqv(v,u===v.a,t,n))}f=B.lR(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gzK()?D.bSM:n
if(o.gzK())s=n
else s=m?A.bn:A.bN
r=B.W(A.dV,o.gzK()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzK()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzK()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzK()
f=B.a([f,A.az,B.p(n,B.A(B.a([r,A.aw,q,B.aud(n,A.c,n,A.bJ,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dfr(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.afD,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.eZ9,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.y,n,A.EQ,n,n,A.ah)
u=o.f?n:o.gbxC()
t=B.bk(A.K,n,n,n,n,n,A.ag,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bo(!0,B.p(n,B.v(B.a([new B.C(D.bq5,e,n),new B.dm(1,A.ci,f,n),new B.C(A.EP,new B.a6(1/0,50,B.bJ(B.ex(B.av(o.f?A.rk:D.feA,n,n,n),n,new B.o(n,n,n,s,n,D.bRl,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tf,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bqv.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ad(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.kV,w,w,B.W(v.c,A.ad,w,w,w,18),w),new B.bI(A.ln,w,w,B.d(v.b,w,w,w,w,w,w,D.eZ7,w,w,w),w)],x.p)
if(q)v.push(D.aTs)
return B.aE(w,B.dg(w,new B.an(A.W,w,A.aa,A.q,v,w),w,w,A.bb,new B.o(w,w,p,t,s,new B.a7(A.ax,A.aD,A.x,r,w,w),A.n),A.eE,w,w,w,A.cj,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a9)}}
C.e7J.prototype={
aD7(d,e,f){return e+"@"+A.a.aT(A.o.fN(f==null?this.a.c:f,16),8,"0").toUpperCase()},
w7(d,e){return this.aD7(0,e,null)}}
C.aKq.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.b_m.prototype={
B(d){var w,v,u=null,t=C.fRP(this.c)
if(t==null)w=D.bim
else{w=B.aI(d,u,x.w).w.cDH(D.bmC,D.eGf)
v=this.d
w=B.ue(B.e2(B.amD(!1,t,!1,v,!1,390),!v,u),w)}return B.f4(A.A,new B.a6(416,870,new C.bjP(w,u),u),A.f,A.dt)}}
C.bjP.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.d74[w]
u=new B.aV(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bs(u,u,u,u),t,D.amG,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.d8d[w]
u=new B.aV(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bs(u,u,u,u),t,D.amG,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.bX(t,new B.o(t,t,t,B.m(64),D.cHS,D.bPO,A.n),A.bd),0,0,0))
s.push(B.bZ(3,B.bX(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bZ(13,B.bv(B.m(51),B.ei(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aTE,B.p(t,t,A.f,t,t,D.aXT,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e2(B.bv(B.m(51),D.bjH,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e2(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l4.prototype={
p9(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.en(A.L,!1,e.l(),A.aB,"",k,42,A.bm,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mo,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.en(A.L,!1,v.l(),A.aB,"",k,20,A.bm,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dc,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rd(i,l,0,0,B.a([f,w,C.en(A.bg,!1,4279310375,A.aB,"",t.j(0.8).l(),24,A.bm,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fp,t.l(),3,"",0,0,"",D.cg,D.eZ,0.3,0.35,0.72)],s),C.cC(),D.mn,"","","Welcome",D.dc)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aB,"",k,34,A.bm,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rd(i,l,0,0,B.a([u,C.en(A.bg,!0,v.l(),A.aB,"",k,22,A.bm,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tW,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mn,"","","Agenda",D.dc)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aB,"",k,32,A.bm,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rd(i,l,0,0,B.a([u,C.en(A.bg,!0,v.l(),A.aB,"",k,21,A.bm,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cg,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mn,"","","Key Point 1",D.dc)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aB,"",k,30,A.bm,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.en(A.bg,!0,v.l(),A.aB,"",k,18,A.bm,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rd(i,l,0,0,B.a([u,r,C.en(A.bg,!0,v.l(),A.aB,"",k,18,A.bm,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mn,"","","Key Point 2",D.dc)
r=C.cC()
r=C.en(A.L,!1,e.l(),A.aB,"",k,48,A.bm,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dc,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.B9(l,l,l,l,D.C1,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rd(i,l,0,0,B.a([r,C.en(A.L,!1,v.l(),A.aB,"",k,22,A.bm,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cg,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mn,"","",h,D.dc)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.E7.prototype={
bx(d){return this.e.$1(d)}}
C.er.prototype={}
C.iU.prototype={}
C.DZ.prototype={
gaIN(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.afE(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a2o(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.DZ(v,u,t,d==null?w.d:d)},
F2(d){return this.a2o(null,d,null,null)},
aBS(d){return this.a2o(null,null,null,d)},
cDF(d,e){return this.a2o(d,e,null,null)},
b8T(d){return this.a2o(d,null,null,null)},
b9_(d){return this.a2o(null,null,d,null)}}
C.ME.prototype={
T(){return new C.bhy(new B.eL(0,$.aw()),null,null)}}
C.bhy.prototype={
a_(){var w,v=this
v.a1()
w=v.q6(new C.dQk(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.iT(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.aw()
w.P$=0
this.bs7()},
B(d){var w=C.afE(this.a.c.a)
if(w==null)w=A.d.gL(D.Gc)
return B.cm(new C.dQj(this,w,C.h6K(this.a.c.d)))}}
C.bp5.prototype={
B(d){return B.nD(A.Ub,this.e,new C.eQQ(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bcE.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aQv(d,e,v)
break
case"confetti":w.bE2(d,e,v)
break
case"crown":w.bFF(d,e,v)
break
case"aurora":w.byH(d,e,v)
break
case"champagne":w.bBU(d,e,v)
break
case"diamonds":w.bHO(d,e,v)
break
case"starburst":w.cre(d,e,v)
break
case"balloons":w.byV(d,e,v)
break
case"galaxy":w.bMu(d,e,v)
break
case"redcarpet":w.cin(d,e,v)
break
case"coins":w.bDp(d,e,v)
break
case"lanterns":w.bWu(d,e,v)
break
case"hearts":w.bU9(d,e,v)
break
case"petals":w.cdE(d,e,v)
break
case"butterflies":w.bAW(d,e,v)
break
case"neon":w.c_h(d,e,v)
break
case"disco":w.bHZ(d,e,v)
break
case"sunrise":w.csK(d,e,v)
break
case"pearls":w.ccI(d,e,v)
break
case"snow":w.cqT(d,e,v)
break
case"laurel":w.bWA(d,e,v)
break
case"ribbons":w.ckS(d,e,v)
break
case"kente":w.bWi(d,e,v)
break
case"trophy":w.cwk(d,e,v)
break
case"shooting":w.coM(d,e,v)
break
case"bokeh":w.bze(d,e,v)
break
case"orbits":w.cao(d,e,v)
break
case"flowers":w.bLL(d,e,v)
break
case"music":w.c_1(d,e,v)
break
case"mandala":w.bYt(d,e,v)
break
case"sparklers":w.cr1(d,e,v)
break
case"city":w.bCJ(d,e,v)
break}},
r4(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.X()
v=B.L()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nh
u=new B.aQ(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.cS(w,t,w+f,t))
u.E(new B.cS(w,t,w,t+f))
u.E(new B.cS(w,t,w-f,t))
u.E(new B.cS(w,t,w,s))
u.E(new B.bF())
d.aN(u,v)
d.ah(e,f*0.18,v)},
lt(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cT(q,v)*2.5)+C.cT(q,u)*6.28)+1)/2
this.r4(d,new B.u(C.cT(q,t)*o,C.cT(q,s)*n),m*(0.006+0.014*C.cT(q,r))*(0.5+p),h,p*p)}},
aQv(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lt(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aJ],w),B.a([A.ij,A.bA],w),B.a([A.et,A.aX],w),B.a([A.c,A.av],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bw(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cT(h,1))
f=g+c0*(C.cT(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cT(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.la(new B.u(g,c1),new B.u(f,e),A.cp.av(0,i/0.22))
a0.toString
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new B.a7(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.rf(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.la(new B.u(g,c1),a0,0.75)
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
$.X()
a8=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hs(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cT(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cT(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.X()
b9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bO
b9.a=A.nh
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cT(h,b1+120)>0.5)this.r4(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bE2(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.X(),a0=B.L()
a0.sau(new B.a7(A.ax,A.aD,A.x,D.d2c,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.aa(0,0,f,e)))
a1.aX(new B.aa(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cT(u,1)))+C.cT(u,2)*w,w)
s=C.cT(u,3)
r=Math.sin(a3*(0.8+C.cT(u,4))+u)
q=h*(0.012+0.012*C.cT(u,5))
p=Math.cos(a3*(2+3*C.cT(u,6))+u)
o=D.OG[A.o.D(A.k.bw(C.cT(u,7)*5),0,4)]
J.bA(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cT(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aQ(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bx(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cF(m.gbI().a.snapshot()):t).a,k)
k.delete()}else{t=B.ct(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c5(t),k)
k.delete()}f.restore()}this.lt(a1,a2,a3,25,A.bJ,30)},
bFF(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.X()
n=B.a([],r)
m=new B.aQ(o.r,A.ap,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bF())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.bJ.j(0.22),D.b7M],v),a4,a4).aw(0,B.bU(w,u)))
l=o.H()
o=m.gbI().a.snapshot()
t.drawPath((m.e=new B.cF(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aQ($.X().r,A.ap,a4,a4,B.a([],r))
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
i.E(new B.bF())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.L()
n.sau(new B.a7(A.b0,A.b6,A.x,D.d16,a4,a4).aw(0,new B.aa(a5,a6,o,v)))
a8.aN(i,n)
for(v=[D.ef6,D.e9n,D.enZ],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.hT.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wK(i),u=B.a([],x.X),o=new B.vh(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jP(y.M));--f
o.je()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aQ(n,v.b,a4,new B.cL([new B.GK(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fy
f.r=A.bJ.gp(0)
l=f.H()
f=d.gbI().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.r4(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lt(a8,a9,b0,45,A.bJ,40)},
byH(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lt(a8,a9,b0,60,A.c,50)
w=[D.exT,D.exB,D.exw,D.eyO]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.X()
i=B.a([],p)
h=new B.aQ(n.r,A.ap,null,null,i)
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
h.e=null}}$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nh
n.z=new B.hs(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbI().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nh
n.z=new B.hs(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbI().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cT(a4,1))+C.cT(a4,2)*a3,a3)
r=C.cT(a4,3)
q=Math.sin(b0+a4)
p=C.cT(a4,4)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.wS.j(0.4+0.5*C.cT(a4,5)).gp(0)
n.a=A.nh
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bBU(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.X(),a0=B.L()
a0.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.hC.j(0.25+0.1*h),D.VV],x.O),l,l).aw(0,B.bU(new B.u(g,f),e)))
a1.ah(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aQ(d.r,A.ap,l,l,a0)
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
u.e=null}d=$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.OG[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbI().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cT(w,1)))+C.cT(w,2)*o,o)
r=k*(0.1+0.8*C.cT(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cT(w,4))
if(n<f){this.r4(a1,new B.u(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.A1.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bHO(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lt(a9,b0,b1,30,A.kX,60)
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
h=$.X()
g=B.a([],q)
f=new B.aQ(h.r,A.ap,a5,a5,g)
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
g.push(new B.bF())
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a7(A.ax,A.aD,A.x,D.cY6,a5,a5).aw(0,B.ct(A.J,k*1.2,o)))
a2=g.H()
g=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cF(g)).a,a2)
a2.delete()
a3=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.b=A.ae
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
if(a4>0.85)this.r4(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cre(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.X()
o=B.a([],v)
n=new B.aQ(p.r,A.ap,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bF())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bJ.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbI().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.X()
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bw(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cT(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bj3.av(0,k)*(0.5+0.5*C.cT(t,v)))
this.r4(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cT(t,3)),D.OG[A.o.D(A.k.bw(C.cT(t,4)*5),0,4)],u)}},
byV(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cT(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cT(o,2))+C.cT(o,3)*m,m)
j=C.cT(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.atP[A.o.F(o,6)]
h=$.X()
g=B.a([],s)
f=new B.aQ(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bx(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cF(f.gbI().a.snapshot()):d).a,a1)
a1.delete()
a2=B.ct(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sau(new B.bR(D.aTH,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.atG,a3).aw(0,a2))
a1=l.H()
u.drawOval(B.c5(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aQ(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bF())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbI().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cT(o,11))+C.cT(o,12)*m,m)
r=C.cT(o,13)
J.bA(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.ct(A.J,t,v)
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.atP[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c5(s),a1)
a1.delete()
u.restore()}},
bMu(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lt(b1,b2,b3,50,A.c,70)
for(w=[D.ey0,D.exH,D.exN],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.X()
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
k=B.aq(A.bJ,A.ey,g)
k.toString
d=C.cT(i,3)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cT(i,4)).gp(0)
a0.a=A.nh
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.X()
a9=B.L()
a9.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.A1.j(0.55),D.adm],u),a4,a4).aw(0,B.bU(b0,a8)))
b1.ah(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bw(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cT(a2,9)),a6*0.1*C.cT(a2,8))
a5=B.la(a3,a3.ae(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.la(a3,a5,0.6)
a6.toString
a8=B.L()
a8.sau(new B.a7(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.rf(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
cin(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.X()
n=B.a([],s)
m=new B.aQ(o.r,A.ap,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bF())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(new B.bR(A.A,0.5,A.x,b5,0,B.a([A.A1.j(0.28),D.adm],w),b5,b5).aw(0,B.bU(new B.u(q,u),t)))
o.a=A.nh
l=o.H()
q=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eD:A.eM)
a9=$.X()
b0=B.a([],s)
m=new B.aQ(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cS(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a9.sau(new B.a7(A.a3,A.a7,A.x,a7,b5,b5).aw(0,new B.aa(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hC.gp(0)
b1.c=o
b1.d=A.bO
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aQ($.X().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ap(b6*0.58,w))
b2.E(new B.ap(b6*0.8,b7))
b2.E(new B.ap(b6*0.2,b7))
b2.E(new B.bF())
v=B.L()
v.sau(D.bRf.aw(0,new B.aa(0,w,0+b6,w+b7*0.22)))
b9.aN(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cT(r,1))+C.cT(r,2)*b3,b3)
u=C.cT(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.r4(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cT(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bDp(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cT(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cT(t,2))+C.cT(t,3)*r,r)-q
o=C.cT(t,4)*i
n=Math.cos(f*(2+3*C.cT(t,5))+t)
m=Math.abs(n)
l=B.ct(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new B.a7(A.ax,A.aD,A.x,n>0?D.dbj:D.cvM,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c5(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bgk.gp(0)
k=j.H()
v.drawOval(B.c5(new B.aa(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.r4(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lt(d,e,f,30,A.bJ,110)},
bWu(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lt(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cT(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.sau(new B.bR(A.A,0.5,A.x,d,0,B.a([W.W5.j(0.45*k),D.ach],u),d,d).aw(0,B.bU(new B.u(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aQ(i.r,A.ap,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b5(l-i,e))
j.push(new B.ap(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ap(l+i,h))
j.push(new B.ap(l-i,h))
j.push(new B.bF())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.b7X,A.c,0.2*k)
i.toString
j.sau(new B.a7(A.b0,A.b6,A.x,B.a([D.bcd,i],u),d,d).aw(0,B.ct(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bU9(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
m=$.X()
l=B.a([],t)
i=new B.aQ(m.r,A.ap,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.po(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.po(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cPz[A.o.F(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sau(new B.bR(A.rv,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a0S,d).aw(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbI().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lt(a3,a4,a5,30,A.ij,130)},
cdE(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
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
n=$.X()
m=B.a([],u)
k=new B.aQ(n.r,A.ap,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cS(p,l,0,p))
m.push(new B.cS(n,l,0,n))
m.push(new B.bF())
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cq7:D.cZk
n.sau(new B.a7(A.a3,A.a7,A.x,m,i,i).aw(0,B.bU(A.J,p)))
j=n.H()
n=k.gbI().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lt(d,e,a0,25,A.bJ,140)},
bAW(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lt(b0,b1,b2,40,A.bJ,150)
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
a2=$.X()
a3=B.a([],u)
a4=new B.aQ(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.po(f,e,l,d,h,0))
a3.push(new B.po(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.sau(new B.a7(A.a3,A.a7,A.x,i?D.cZ4:D.d0B,a6,a6).aw(0,new B.aa(0,m,k,j)))
a5=a2.H()
a2=a4.gbI().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.Aa.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbI().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bfF.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c_h(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.auR[t].j((1-s)*0.9).gp(0)
q.z=new B.hs(A.G,v)
p=r*0.3
p=B.by(B.ct(e,r,r*1.6),new B.aV(p,p))
o=q.H()
u.drawRRect(B.ep(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cT(m,1)*4)+m)))
k=D.auR[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.by(new B.aa(j,i,j+w,i+l),new B.aV(v,v))
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hs(A.a8Q,p)
o=j.H()
u.drawRRect(B.ep(i),o)
o.delete()}},
bHZ(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cT(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cT(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.o7,A.dx][A.o.F(p,4)]
j=C.cT(p,3)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nh
i.z=new B.hs(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.X()
t=B.L()
t.r=A.ay.gp(0)
t.c=1.2
a3.bA(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.L()
t.r=A.dL.gp(0)
a3.ah(v,u,t)
J.bA(q.save())
a1=new B.aQ(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.kE(B.bU(v,u)))
a3.tI(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bp,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c5(new B.aa(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.r4(a3,v.ae(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
csK(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cp.av(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.X()
q=B.a([],u)
p=new B.aQ(r.r,A.ap,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bF())
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bJ.j(0.1).gp(0)
o=r.H()
r=p.gbI().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.X()
a0=B.L()
a0.sau(new B.bR(A.A,0.5,A.x,h,0,B.a([D.b4a.j(0.6),D.ach],x.O),h,h).aw(0,B.bU(a1,d)))
a2.ah(a1,d,a0)
a0=e*0.2
d=B.L()
d.sau(D.e7a.aw(0,B.bU(a1,a0)))
a2.ah(a1,a0,d)
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
o.delete()}this.lt(a2,a3,a4,20,A.hT,180)},
ccI(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.X()
q=B.a([],t)
p=new B.aQ(r.r,A.ap,f,f,q)
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
r=new B.bF()
q.push(r)
q=p.f
if(q!=null)r.bx(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cv,A.iX,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbI().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cT(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cT(i,2))+C.cT(i,3)*j,j)
n=C.cT(i,4)*e+Math.sin(a3+i)*a0*0.02
$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.sau(new B.bR(An.q9,0.5,A.x,f,0,D.d3J,f,f).aw(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lt(a1,a2,a3,25,A.c,190)},
cqT(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cT(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cT(r,2))+C.cT(r,3)*p,p)
n=C.cT(r,4)
m=Math.sin(t+r)
$.X()
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
h.delete()}v.restore()}this.lt(d,a0,a1,40,A.et,200)},
bWA(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dJ(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bA(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.ct(new B.u(p,0),q,r)
$.X()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.sau(D.bR2.aw(0,new B.aa(0,o,n,m)))
e=f.H()
s.drawOval(B.c5(g),e)
e.delete()
s.restore()}}$.X()
a0=B.L()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b89.gp(0)
a3.ah(w,v*1.08,a0)
d=a5*0.8
this.r4(a3,w.ae(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lt(a3,a4,a5,40,A.bJ,210)},
ckS(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hC,A.hT],a6),B.a([A.od,A.ij],a6),B.a([A.aE,A.ey],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bW<aj.E>"),q=s.k("aj.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.X()
k=B.a([],o)
j=new B.aQ(l.r,A.ap,null,null,k)
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dA(i,s),l=new B.bW(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bx(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bF()
k.push(l)
k=j.f
if(k!=null)l.bx(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sau(new B.a7(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.auv,new B.mc(w)).aw(0,new B.aa(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbI().a.snapshot()):l).a,a2)
a2.delete()}this.lt(a8,a9,b0,40,A.c,220)},
bWi(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bw(g/t),5)
a1=g+t
$.X()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a0V[a3].gp(0)
a4=a2.H()
s.drawRect(B.c5(new B.aa(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a0V[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c5(new B.aa(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cT(a0,1))+C.cT(a0,2)*a6,a6)
v=C.cT(a0,3)
t=C.cT(a0,4)
this.r4(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a0V[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cwk(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bJ.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b5(v,a2))
w=a1+w
l.E(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.cS(w,r,p,k))
w=a2+m*0.95
l.E(new B.ap(p,w))
p=n*0.3
j=a2+m
l.E(new B.ap(a1+p,j))
l.E(new B.ap(a1-p,j))
q=a1-q
l.E(new B.ap(q,w))
l.E(new B.ap(q,k))
l.E(new B.cS(v,r,v,a2))
l.E(new B.bF())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.ct(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.av.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c5(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.L()
a1.sau(new B.a7(A.a3,A.a7,A.x,D.d5S,A.atW,null).aw(0,new B.aa(v,a2,r,j)))
a4.aN(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.r4(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bE3(a4,a5,a6,60)},
bE3(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cT(p,31))+C.cT(p,32)*v,v)
n=C.cT(p,33)
J.bA(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.ct(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.OG[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c5(o),m)
m.delete()
u.restore()}},
coM(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lt(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cT(o,1)*1.6
m=A.k.F(a2+C.cT(o,2)*n,n)/n
l=e*(C.cT(o*7+A.k.bw((a2+C.cT(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.X()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a7(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bJ],s),null,null).aw(0,B.rf(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.r4(a0,i,p,A.c,1-m)}},
bze(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cT(r,1))
p=A.k.F(C.cT(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cT(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.X()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.awg[l].j(n).gp(0)
m.a=A.nh
m.z=new B.hs(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.awg[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cao(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bA(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.ct(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bJ.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c5(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hT.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hC.j(0.4).gp(0)
k.z=new B.hs(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lt(d,e,f,45,A.bJ,270)},
bLL(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cT(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.cT(o,2)*4,4)/4
j=A.ev.av(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cT(o,3))*(j*i)
if(h<=0.5)continue
g=D.cWn[A.o.F(o,5)]
J.bA(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.ct(new B.u(0,l),i,j)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.sau(new B.a7(A.b0,A.b6,A.x,B.a([A.c,g],u),null,null).aw(0,B.ct(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c5(d),a1)
a1.delete()}$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hC.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lt(a5,a6,a7,30,A.hT,280)},
c_1(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.at1[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c5(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cT(g,1))+C.cT(g,2)*h,h)
e=C.cT(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cT(g,4))
a0=D.at1[A.o.F(g,4)]
$.X()
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
bYt(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d=$.X()
a0=B.a([],s)
a1=new B.aQ(d.r,A.ap,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cS(h,m,0,g))
a0.push(new B.cS(j,m,0,i))
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bJ,A.o7,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbI().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hT.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.X()
a5=B.L()
a5.sau(new B.bR(A.A,0.5,A.x,a3,0,B.a([A.hC.j(0.25),D.VV],x.O),a3,a3).aw(0,B.bU(w,a4)))
a7.ah(w,a4,a5)
this.lt(a7,a8,a9,30,A.bJ,300)},
cr1(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bp.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.sau(new B.bR(A.A,0.5,A.x,null,0,B.a([A.hT,A.hC.j(0.6),D.VV],o),null,null).aw(0,B.bU(new B.u(j,i),p)))
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
a6.r=B.aq(A.hT,A.aJ,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.nh
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
g.delete()}}}this.lt(b0,b1,b2,35,A.bJ,310)},
bCJ(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aQv(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cT(n,1))
l=a8*(0.14+0.24*C.cT(n,2))
k=a8-l
j=new B.aa(o,k,o+m,k+l)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(D.bRZ.aw(0,j))
h=i.H()
r.drawRect(B.c5(j),h)
h.delete()
g=A.k.bw(m/q)
f=A.k.bw(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cT(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.X()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bJ.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c5(new B.aa(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aYh.prototype={
B(d){var w,v=null,u=new C.c5W(),t=new C.c5Y(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.alP,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c5X(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gc[w]))
return B.c3(A.bE,s,A.bw,12,10)}}
C.Yi.prototype={
T(){return new C.ayf()}}
C.ayf.prototype={
gvd(){var w=this.d
return w===$?this.d=this.a.c:w},
gaXi(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b1,A.aN),$.aw())}return v},
gavH(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaIN()
v=$.aw()
u.f!==$&&B.bM()
t=u.f=new B.ar(new B.bb(w,A.b1,A.aN),v)}return t},
q(){var w=this.gaXi(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gavH()
w.S$=v
w.P$=0
this.a2()},
YY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$YY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().BA(90,700,700,A.eG),$async$YY)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fc(),$async$YY)
case 8:p=e
o=q.b.toLowerCase()
n=J.agy(o,".png")?"image/png":"image/jpeg"
r.m(new C.d4z(r,n,p))
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
return B.i($async$YY,v)},
aXh(d){var w=null,v=A.c.j(0.07)
return B.bq(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aO1,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.afE(p.gvd().a)
if(n==null)n=A.d.gL(D.Gc)
w=p.gvd()
v=p.r
u=x.p
v=B.D(new B.an(A.W,o,A.aa,A.q,B.a([B.bZ(0,new C.ME(p.gvd(),!1,!0,new B.cz(w.a+v,x.W)),0,0,0),B.ao(o,B.H0(A.mi,new C.d4E(d),B.nn(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.H0(D.bBT,new C.d4F(p),B.nn(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aNW,o,o,o)
t=B.D(B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),p.gaXi(0),o,o,o,o,o,2,p.aXh("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d4G(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hm,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hC.j(0.6),A.r,1)
if(p.gvd().d.length===0)q=D.bFd
else{q=C.h6K(p.gvd().d)
if(q==null)q=new Uint8Array(0)
q=B.hR(B.fK(q,A.A,o,o,A.cn,A.bQ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc4n(),o,o,o,o,o,o,!1,A.a9)],u)
if(p.gvd().d.length!==0)r.push(B.aH(o,o,o,o,D.a_K,o,o,o,new C.d4H(p),o,o,o,o,"Remove logo",o))
return B.cb(o,A.w,B.bo(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),p.gavH(),o,o,o,o,o,2,p.aXh("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d4I(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a5,o,A.am,o,o,o,o),A.ac,B.dq(D.bE8,D.fnO,new C.d4J(p,d),B.bk(A.av,o,o,o,A.w,o,A.cf,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aY3,o,o,o,o,A.EM,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aJU.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.YD.prototype={
T(){return new C.be7(new B.ar(A.as,$.aw()))}}
C.be7.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.N(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bS,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.r,1),g=x.p,f=B.A(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.W(A.cw,l,o,o,o,o),o,o,o,new C.dbk(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cHi[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gU(t)
r=new B.aV(12,12)
q=new B.aV(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aK(!1,new B.bs(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uh,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bs(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dbl(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hG,new B.x(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.EW(A.bE,6,6,A.bw,u,o)],g))}e.push(A.az)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bn:A.aP
e.push(B.A(B.a([B.D(B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),this.d,o,o,o,o,o,2,B.bq(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aOR,new C.dbm(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bo(!0,B.p(o,B.v(B.a([f,new B.dm(1,A.ci,B.cB(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tf,A.XA,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bdv.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eS()
a2.dH(this.c)
w=this.b
v=w/6.283185307179586
$.X()
u=B.L()
u.z=A.Qe
t=B.L()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
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
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aq(d){return d.b!==this.b}}
C.bdc.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.by(new B.aa(0,0,0+a7.a,0+a7.b),A.kk),a2=this.b,a3=Math.sin(a2*2),a4=$.X(),a5=B.L()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lf
a6.aD(a1,a5)
a5=x.v
a4=new B.aQ(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iS(a1))
v=new B.RD(new B.vh(B.wK(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.je()
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
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aQ(r,k,a0,new B.cL([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aQ(r,k,a0,new B.cL([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aQ(r,a2.b,a0,new B.cL([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.je()
e=u[a3].M4(n).a
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mm
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
aq(d){return d.b!==this.b}}
C.bm_.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eS()
e.dH(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gakZ()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.X()
i=B.a([],n)
h=new B.aQ(j.r,A.ap,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bF())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.sau(B.aTp(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jc
g=j.H()
j=h.gbI().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b8a.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eS()
a0.dH(this.c*7+3)
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
f=e}$.X()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hs(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.b7O.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eS()
a0.dH(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.X()
h=B.a([],n)
g=new B.aQ(i.r,A.ap,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bx(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bO
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hs(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cF(g.gbI().a.snapshot()):i).a,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.bsQ.prototype={
a6(d,e){var w,v,u=new B.aa(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.X()
w=B.L()
t=(0.5+0.5*t)*0.12
w.sau(new B.bR(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cOn,null).aw(0,u))
d.aX(u,w)
w=u.cF(-3)
v=B.L()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jc
d.aX(w,v)},
aq(d){return d.b!==this.b}}
C.bpT.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bw(d)*7,p=0;p<7;++p){o=new B.eS()
o.dH(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.X()
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
g.z=new B.hs(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aq(d){return d.b!==this.b}}
C.bp1.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.aa(0,0,0+e.a,0+e.b)
$.X()
v=B.L()
v.a=A.nh
v.sau(new B.a7(A.ax,A.aD,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.aX(w,v)},
aq(d){return d.b!==this.b}}
C.bcx.prototype={
a6(d,e){var w,v,u,t,s,r=e.ged(),q=0.55+0.45*Math.sin(this.b)
$.X()
w=B.L()
w.b=A.ae
w.c=1.4
w.d=A.bO
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.L()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.r0
r=new C.d4g(this,r*0.16,d,u,w)
t=e.ged()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
aq(d){return d.b!==this.b}}
C.xc.prototype={}
C.HZ.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.apG.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.ur.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mm.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hv.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eG.prototype={
hx(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.en(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ad(){var w,v=this,u=B.V(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdG(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hKA(v.z))
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
C.ly.prototype={
hx(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("J<1,eG>")
n=B.B(new B.J(n,new C.cbl(),m),m.k("aj.E"))
return C.rd(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ad(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("J<1,a4<n,@>>")
n=B.B(new B.J(n,new C.cbm(),m),m.k("aj.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hY.prototype={
gb7f(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRp(){if(!C.kp(this.w))return!1
var w=this.gb7f()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cY(w.bQ())},
hx(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.T(r).k("J<1,ly>")
r=B.B(new B.J(r,new C.cba(),q),q.k("aj.E"))
return C.B9(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ad(){var w,v,u=this,t=B.V(x.N,x.z)
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
v=B.T(w).k("J<1,a4<n,@>>")
w=B.B(new B.J(w,new C.cbb(),v),v.k("aj.E"))
t.n(0,"slides",w)
return t}}
C.jz.prototype={}
C.b_p.prototype={
B(d){return B.cm(new C.cbg(this))}}
C.amT.prototype={
T(){return new C.bhj(null,null)}}
C.bhj.prototype={
gaXj(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.hf,null,1,null,v)
w.cG(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gaXj().q()
this.brS()},
B(d){return B.c6(this.gaXj(),new C.dCX(),this.a.c)}}
C.aJF.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aca.prototype={
P1(d,e,f,g){return this.bLs(d,e,f,g)},
bLs(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$P1=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$P1)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).N(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$P1,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.r,1),s=B.a([new B.ad(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b5,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dB,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.ao,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d6)
n.push(B.A(B.a([B.D(new C.acs(A.hx,"Download",A.bU,new C.ejQ(w,d),!0,v),1),A.aw,B.D(new C.acs(A.vd,"Share",A.bj,new C.ejR(w,d),!1,v),1),A.aw,B.D(new C.acs(A.hh,"Safari",A.aZ,new C.ejS(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.az)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ejT(d),v,v))
return B.bo(!0,new B.C(A.po,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iJ,v,t,u,s,v,A.n),v,v,v,v,A.ET,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.acs.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aK(!1,u,!0,B.ex(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bsq,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.af)}}
C.b_n.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aoS(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c4o().aj9(1.35)
s=B.au7(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bxc(v)
if(i.e&&i.w!=null)q=B.aL(h,A.T,!1,h,!0,A.q,h,B.aM(),i.w,A.bj,h,h,h,h,2,D.bN8,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cz("slide_tf_"+g.a,x.W),h,A.vR,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.z4,A.am,h,A.Si,h,h)
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
w=n?t.cDs(B.b0(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eB:A.CD
p=B.d(f,new B.cz("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.S9:s
$.X()
j=B.L()
j.b=A.ae
j.c=3*w
j.e=A.fy
j.r=A.aA.gp(0)
j=i.ckV(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.q,B.a([j,i.ckT(k,t,l?A.S9:s)],x.p),h)}else w=i.ckU(p,t,g.k2?A.S9:s,m)
v=new B.n3(w,new B.cz("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a9)}return new B.C(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bUN()
case 3:return i.ccH()
case 2:return B.b3(h,h,h,new C.b_k(g,h),A.f_)
case 5:g=g.r
return new C.b_m(g,!i.e&&i.z==null,h)}},
c4o(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jO
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cP(D.acf,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cP(l,A.J,6*v),new B.cP(l,A.J,16*v),new B.cP(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cq
w=A.aA
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.ms
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
e=B.a([new B.cP(A.b9,new B.u(-3*v,0),0),new B.cP(A.aC,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cP(A.cy,A.J,8*v),new B.cP(A.aC,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.V1
break
case"ice":v=o.d
e=B.a([new B.cP(A.aX,A.J,10*v),new B.cP(A.cv,A.J,22*v)],x.r)
k=A.O
w=A.et
break
case"chalk":h=o.d
e=B.a([new B.cP(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jO
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cQj[q]
u.push(new B.cP(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cP(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.X()
f=B.L()
v=o.d
f.sau(D.bPv.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cP(A.JM,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.X()
f=B.L()
v=o.d
f.sau(D.bPQ.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
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
k=A.jO
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
axz(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eDK.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cbe(h)
v=r.k2?C.hX4(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eB:A.CD
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.WP(B.dp(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
ckV(d,e,f,g){return this.axz(d,e,f,!1,g)},
ckT(d,e,f){return this.axz(d,e,f,!1,null)},
ckU(d,e,f,g){return this.axz(d,e,f,g,null)},
bxc(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bUN(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.W(s.b===D.kN?A.FN:A.AW,A.ay,t,t,t,32),t,t,t)}w=u.bAa(r)
if(s.b===D.kN){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cm,A.r,1),s,B.a([new B.ad(0,A.G,A.w.j(0.08),A.dz,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aLV(r,!0)
return C.fsa(s.go,v,s.id)}return w},
aLV(d,e){var w,v,u,t
try{w=C.hXn(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c9(u,"_bg")
u=B.cm(new C.cbd(this,w,v,e))
return u}catch(t){return D.aab}},
bAa(d){return this.aLV(d,!1)},
ccH(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b2i
return C.hXF(v,w.db,w.dx)}}
C.b_k.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.X(),g=B.L(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.L()
w.r=B.b0(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.aa(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aX(s,g)
d.aX(s,w)
break
case 1:d.hZ(s,g)
d.hZ(s,w)
break
case 2:r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aN(r,g)
d.aN(r,w)
break
case 3:r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
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
r.E(new B.bF())
d.aN(r,g)
d.aN(r,w)
break
case 4:h=t/2
w.c=v+2
d.bA(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(q,0))
r.E(new B.ap(u,0))
r.E(new B.ap(u-q,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aN(r,g)
d.aN(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aQ(h.r,A.ap,i,i,f)
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
r.e=null}}r.E(new B.bF())
d.aN(r,g)
d.aN(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aHg.prototype={
T(){return new C.bsm(null,null)}}
C.bsm.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.it,null,1,null,v)
w.cG(0)
v.d!==$&&B.aO()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bu7()},
aM5(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bX(B.av(B.d(d,w,w,w,w,w,w,A.dB,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a7(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
bxq(){var w,v=this,u=null,t=v.aM5("Slide A",A.bj),s=v.aM5("Slide B",A.aZ)
if(v.a.c===D.cg)return new B.an(A.W,u,A.b_,A.q,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.eZ9(v,s,t),u)},
B(d){return this.bxq()}}
C.aHT.prototype={
iP(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jw(d){return d.b!==this.b}}
C.U0.prototype={
T(){return new C.bhv(null,null)}}
C.bhv.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.Ao,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cg){w.sp(0,1)
return}B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dOx(u),x.a)},
br(d){var w,v,u,t=this
t.bE(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cg)w.sp(0,1)
else B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dOw(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bs6()},
B(d){var w,v=this.a
if(v.c.dy===D.cg||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dOv(this),v.d)}}
C.HY.prototype={
B(d){return B.cm(new C.cb6(this))}}
C.axZ.prototype={
T(){return new C.bc1()}}
C.bc1.prototype={
a_(){this.a1()
if(this.a.c!==D.cg)B.bN(A.L3,new C.d1v(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cg)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.U0(C.en(A.bg,!1,4279310375,A.aB,"",4294538006,24,A.bm,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.eZ,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cb,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cz("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.en(A.bg,!1,4294967295,A.aB,"",4280640491,22,A.bm,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.q,B.a([w,B.ao(32,new C.U0(t,B.p(p,D.f9Z,A.f,p,p,new B.o(s,p,B.I(A.b5,A.r,1),r,p,p,A.n),p,p,p,p,A.j6,p,p,1/0),!0,1,new B.cz("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bX(n,D.aYD,A.bd)}}
C.a6G.prototype={
T(){return new C.bi9(null,null)}}
C.bi9.prototype={
gaXQ(){var w=this.a
if(w.e)w=D.eDR.t(0,w.c)||D.aLa.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaXQ()){w=C.hVK(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cG(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bsD()},
B(d){var w,v=this,u=v.d
if(!v.gaXQ()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.e7s(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aYk.prototype={
B(d){var w=null
return B.av(C.b_o(!0,w,!1,C.en(A.L,!1,this.e.l(),A.aB,"",4280640491,this.f,A.bm,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cg,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bda.prototype={
iP(d){return C.a1k(this.b,new B.aa(0,0,0+d.a,0+d.b).cF(-this.c))},
jw(d){return d.b!==this.b||d.c!==this.c}}
C.bo0.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.aa(0,0,0+a1.a,0+a1.b).cF(-this.d),g=this.b,f=C.a1k(g,h),e=a1.ged(),d=new C.eOv()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sau(D.aMG.aw(0,h))
a0.aN(f,w)
g=C.a1k(g,h.cF(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bg7.gp(0)
a0.aN(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sau(D.eNp.aw(0,h))
a0.aN(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hs(A.G,e*0.04)
a0.aN(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aN(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sau(D.eNn.aw(0,h))
a0.aN(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aN(f,w)
g=C.a1k(g,h.cF(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aN(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b9.j(0.7).gp(0)
g.z=new B.hs(A.G,e*0.035)
a0.aN(f,g)
g=d.$1(e*0.016)
g.r=A.og.gp(0)
a0.aN(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sau(D.eNi.aw(0,h))
a0.aN(f,w)
w=C.a1k(g,h.cF(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b5D.gp(0)
a0.aN(w,v)
g=C.a1k(g,h.cF(e*0.03))
v=d.$1(e*0.004)
v.r=D.b8_.gp(0)
a0.aN(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sau(D.aMG.aw(0,h))
a0.aN(f,g)
for(g=B.wK(f),w=B.a([],x.X),g=new B.vh(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jP(y.M));--q
g.je()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bw(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.je()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.je()
m=w[q].M4(p*n/o).a
l=D.cNH[A.o.F(n,4)]
$.X()
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
g.sau(D.eNr.aw(0,h))
g.z=new B.hs(A.G,e*0.03)
a0.aN(f,g)
g=d.$1(e*0.018)
g.sau(D.eNo.aw(0,h))
a0.aN(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aN(f,w)
g=C.a1k(g,h.cF(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nn.gp(0)
a0.aN(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.boZ.prototype={
a6(d,e){d.Fh(C.a1k(this.b,new B.aa(0,0,0+e.a,0+e.b).cF(-this.c)),A.w,e.ged()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aJT.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aKo.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aLJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.a6Z.prototype={}
C.N4.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aCR(B.a([],x.D),B.a([],w),B.a([],w),B.V(v,u),B.V(v,x.bo),B.V(v,u),B.aX(v),null,null)},
gdX(){return this.c},
gSK(){return this.r},
gSL(){return this.w},
gKW(){return this.x}}
C.aCR.prototype={
a_(){var w,v=this
v.a1()
$.aT.c1$.push(v)
C.fx6()
$.hei=new C.eq3(v)
w=B.bj(null,A.Am,null,1,null,v)
w.f6(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.HO()},
br(d){var w,v,u=this
u.bE(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.NJ(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.HO()}},
iK(d){if(d===A.zs||d===A.rx||d===A.rw||d===A.oZ)this.t5()},
q(){var w,v,u,t=this
$.aT.hA(t)
w=t.at
if(w!=null)w.a9(0)
t.t5()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bK(0)
v.fZ()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.bsR()},
gaa8(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gO2(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
aaC(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRp())return!1
return!0},
jV(){return this.aaC(null)},
ahg(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.eLH)},
pQ(){if(!this.jV())return!1
this.ahg()
return!0},
apk(d){var w,v,u,t,s,r=this
if(r.aaC(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hdp(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zp(){return this.apk(null)},
HO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$HO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.apI(k),$async$HO)
case 3:j=e
w=4
return B.b(C.aoj(k),$async$HO)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fM6(j,t.bXD())
w=t.gaa8()?5:7
break
case 5:r=t.gO2()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aYy(r),$async$HO)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.emr())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cn(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.ems())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yc(m==null?"":m)!=null)continue
C.fxi(n,s)
p=!0}t.m(new C.emt(t,s))
if(p||s.length>J.ac(j))t.t5()
case 1:return B.h(u,v)}})
return B.i($async$HO,v)},
bXD(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kp(w)&&w!==q}if(w)p.push(r)
return p},
cjl(d){var w,v=this,u=d.w
if(!C.kp(u)||u==="hati_kiapo_uongozi")return
v.a9_(d)
w=A.d.be(v.d,new C.eo1(d))
u=v.d
if(w>=0){u[w]=d.hx()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.cn(u,0,d.hx())
v.db=!1},
cdD(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kp(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cjl(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,hY>")
s=B.B(new B.cQ(new B.a2(s,new C.enQ(),w.k("a2<1>")),new C.enR(),v),v.k("H.E"))
return s},
NJ(d){return this.bLP(d)},
t5(){return this.NJ(null)},
bLP(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$NJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cdD()
w=3
return B.b(C.V_(d==null?t.a.c:d,s),$async$NJ)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.apk(r)?4:5
break
case 4:w=6
return B.b(C.a6c(r),$async$NJ)
case 6:q=r.x
p=A.a.i(q==null?t.gO2():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.be(t.d,new C.elP())
q=t.d
if(o>=0)q[o]=r.hx()
else A.d.cn(q,0,r.hx())
case 5:case 1:return B.h(u,v)}})
return B.i($async$NJ,v)},
oT(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kp(u.w))===!0?A.hW:A.ly
v.at=B.cM(w,new C.ep9(v))},
aXk(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.adW(u.hx(),v.f,v.r))
if(w.length>40)A.d.cz(w,0)
A.d.a8(v.ay)},
cww(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.adW(w.e.hx(),w.f,w.r))
w.m(new C.eq_(w,v.pop()))
w.oT()},
cis(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.adW(w.e.hx(),w.f,w.r))
w.m(new C.eo_(w,v.pop()))
w.oT()},
nS(){var w,v,u=this
if(u.e==null)return
w=A.d.be(u.d,new C.epN(u))
if(w>=0){u.d[w]=u.e.hx()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
WB(d){var w,v,u,t,s=this.gdq()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
x_(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bK(0)
u.fZ()}w.a8(0)},
Jt(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdq()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,n>")
t=B.d9(new B.cQ(new B.a2(w,new C.epO(),v.k("a2<1>")),new C.epP(),u),u.k("H.E"))
w=this.ch
v=B.a3(w).k("cy<1>")
v=B.B(new B.cy(w,v),v.k("H.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bK(0)
p.fZ()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.epQ(n))
s.cg(0,p,new C.epR())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
H8(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b8(u.d,new C.eld(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gO2()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cn(u.d,0,u.e.hx())}u.nS()
u.oT()},
ahB(d,e){var w,v,u,t,s=this
if(s.jV())return
w=s.WB(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kp(v.w))===!0
if(u){C.hVO(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdq()
if(t!=null)C.hVP(t,w.d+w.f*0.5)}}s.H8()
s.nS()
s.oT()
if(u&&s.c!=null)s.m(new C.eq0())},
cxz(d,e){var w=this,v=w.gdq()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.H8()
w.nS()
w.oT()},
gdq(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpU(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hTQ(o)
if(w!=null)return w
v=q.gdq()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bV1(v)
t=q.bV0(v)
s=B.b0(v.e)
r=v.f
return new C.jz(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hwP(o)},
bV1(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bV0(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
adB(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaa8()){w.c.I(x.q).f.R(D.eKj)
return}w.a9_(d)
w.aYw(C.bA2(d))
return}if(C.cc_(v)){w.a9_(d)
w.aYw(d)
return}w.m(new C.en8(w,d))},
apT(){var w,v,u,t,s,r,q=this
q.a1_(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kp(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.elb(q))
if(r&&q.c!=null){u.toString
q.J3(u,s)}return}q.t5()
q.m(new C.elc(q))},
aYv(d){this.a9_(d)
this.Zy(d,!0)},
a9_(d){if(!C.kp(d.w))return
C.fxi(d,this.d)},
Zy(d,e){return this.c9A(d,e)},
aYw(d){return this.Zy(d,!1)},
c9A(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Zy=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bA2(d)
if(e){r=s.x
q=A.a.i(r==null?t.gO2():r)
t.dy.W(0,q.toLowerCase())
C.aok(t.a.c,q)}r=s}else r=d
w=C.cc_(r.w)?3:4
break
case 3:w=5
return B.b(t.a90(r),$async$Zy)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b8(t.d,new C.env(l))
o=l.a.hx()
n=C.kp(o.w)&&C.hX_(o)
t.m(new C.enw(t,o,p))
if(n){m=A.d.be(t.d,new C.enx(o))
if(m>=0){t.d[m]=o.hx()
t.t5()}}if(!t.aaC(l.a))t.XJ()
r=!1
if(t.c!=null)if(!t.aaC(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.apk(r)&&C.ftl(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.eKT)
case 1:return B.h(u,v)}})
return B.i($async$Zy,v)},
a90(d){return this.bK5(d)},
bK5(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a90=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l8(r.c,A.yN),$async$a90)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kL(!1,r,s.c,s.d,null,A.yN,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a90,v)},
nK(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cc_(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cbo(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nK,v)},
adi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.c9(null,null,!1,null,new C.en7(),s,null,!0,!0,x.H),$async$adi)
case 3:if(t.c==null){w=1
break}t.apT()
case 1:return B.h(u,v)}})
return B.i($async$adi,v)},
adh(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.c9(null,null,!1,null,new C.en4(),s,null,!0,!0,x.H),$async$adh)
case 3:if(t.c==null){w=1
break}t.m(new C.en5())
t.apT()
case 1:return B.h(u,v)}})
return B.i($async$adh,v)},
XJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$XJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$XJ)
case 3:r=e
if(B.ka(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$XJ)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eIX)
case 1:return B.h(u,v)}})
return B.i($async$XJ,v)},
J3(d,e){return this.cjM(d,e)},
cjM(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$J3=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.afe(s,t.gDS(),t.gDR(),!0,e,t.d),$async$J3)
case 9:w=4
break
case 6:w=10
return B.b(C.aff(s,t.gDS(),t.gDR(),!0,e,t.d),$async$J3)
case 10:w=4
break
case 7:w=11
return B.b(C.afg(s,t.gDS(),t.gDR(),!0,e,t.d),$async$J3)
case 11:w=4
break
case 8:w=12
return B.b(C.afh(s,t.gDS(),t.gDR(),!0,e,t.d),$async$J3)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$J3,v)},
bWy(){var w,v,u,t,s=this
if(!s.gaa8()){s.c.I(x.q).f.R(D.eJ9)
return}w=s.gO2()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.afd(u,t,v,new C.emn(s),new C.emo(s),w)},
adC(){var w=0,v=B.j(x.H),u=this,t,s
var $async$adC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bY(A.dC,null,new C.ene(u),s,!0,!0,!1,A.lh,!1,!1,x.N),$async$adC)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.afh(s,u.gDS(),u.gDR(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.afe(s,u.gDS(),u.gDR(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.aff(s,u.gDS(),u.gDR(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.afg(s,u.gDS(),u.gDR(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bWy()
return B.h(null,v)}})
return B.i($async$adC,v)},
c8H(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aXk()
w=C.cC()
v=C.B9(t,t,t,t,D.C1,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.enf(u,v))},
a8r(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a8r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pQ()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i0o(s),$async$a8r)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.de(q.r,new C.elf())
t.d1(new C.elg(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8r,v)},
afz(d,e,f,g){var w=null,v=g?A.dq:A.bN,u=B.I(g?A.b5:A.cm,A.r,1)
return B.ho(B.aE(w,B.p(w,B.W(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a9),w,e,w,w)},
Zx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pQ()){w=1
break}s=t.jz()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.enq(),q),q.k("H.E"))}o=s!=null&&s.b===D.lg?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.eL3)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bY(A.K,null,new C.enr(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Zx)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Zx,v)},
adT(){return this.c9z()},
c9z(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$adT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pQ()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i0a(s,t.f+1,o),$async$adT)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kv(s,B.T(s).c)
p.a=A.d.be(o.r,new C.ent(q))
t.d1(new C.enu(p,t,o,q,r))
t.c.I(x.q).f.R(D.eLs)
case 1:return B.h(u,v)}})
return B.i($async$adT,v)},
ae_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ae_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pQ()||!t.zp()){w=1
break}s=t.gdq()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.enL(),q),q.k("H.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eII)
w=1
break}o=new B.J(p,new C.enM(),B.T(p).k("J<1,P>")).fC(0,new C.enN())
r=B.V(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b1,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bY(A.K,null,new C.enO(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ae_)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.enP())
case 1:return B.h(u,v)}})
return B.i($async$ae_,v)},
adF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$adF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.pQ()){w=1
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
return B.b(C.hfo(s,new C.DZ(r,q,p,o==null?"":o)),$async$adF)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d1(new C.eng(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.afE(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$adF,v)},
a8U(){return this.bJs()},
bJs(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a8U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pQ()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i0n(s,t.f+1,l),$async$a8U)
case 3:r=e
q=$.fPw
$.fPw=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d1(new C.elw())
t.c.I(x.q).f.R(D.eIz)
w=1
break}if(!q){s=r.CW
s=C.heg(l,s==null?"":s,!1)}else s=!1
if(s){t.d1(new C.elx(t,l,r))
t.c.I(x.q).f.R(D.eLW)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kv(s,B.T(s).c)
s=l.r
m.a=A.d.be(s,new C.ely(p))
o=s.length
t.d1(new C.elz(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8U,v)},
aOa(d,e){if(e){this.aes()
return}this.c8H(d,!1)},
bFf(){return this.aOa(null,!1)},
aes(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aes=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bY(A.bV,null,new C.enV(t),r,!0,!0,!0,A.oK,!1,!1,x.N),$async$aes)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.enW(t,C.hTP(s).p9()))
case 1:return B.h(u,v)}})
return B.i($async$aes,v)},
d1(d){var w=this
if(w.pQ())return
w.H8()
w.aXk()
w.m(d)
w.Jt()
w.nS()
w.oT()},
a6V(){this.d1(new C.eka(this,D.mn))},
aPy(){var w=this.gdq()
if(w==null)return
this.d1(new C.elu(this,w))},
aOL(){var w=this.e
if(w==null||w.r.length<=1)return
this.d1(new C.els(this))},
b0r(d,e){if(this.e==null||d===e)return
this.d1(new C.eo3(this,d,e))},
Ng(d){return this.bHd(d)},
bHd(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ng=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gO2():s)
w=5
return B.b(C.aoi(t.a.c,r),$async$Ng)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.apK(s)
w=6
return B.b(C.b_s(t.a.c,s),$async$Ng)
case 6:if(t.c==null){w=1
break}t.m(new C.elo(t,d))
w=7
return B.b(t.t5(),$async$Ng)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Ng,v)},
cjJ(d,e){var w=this
if(d.z){w.ahg()
return}w.m(new C.eo2(w,d,e))
w.oT()},
jz(){var w,v,u,t,s,r=this.gdq()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
VC(d){return this.ch.cg(0,d.a,new C.ele(d))},
arJ(d){return this.CW.cg(0,d.a,new C.elQ())},
a1_(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.WB(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.ak$.d.c
if(u!=null)u.jq()},
b3K(){return this.a1_(!0)},
a0Y(d){var w,v,u=this
if(u.pQ())return
if(!u.zp())return
w=u.WB(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.VC(w).saV(0,"")}u.m(new C.epL(u,d))
$.aT.x1$.push(new C.epM(u,d,w))},
b4f(d){var w=this
if(d.b===D.cQ&&!w.jV()&&w.zp()){w.a0Y(d.a)
return}w.axZ(d.a)},
axZ(d){var w,v,u,t,s,r=this
if(r.jV())return
w=r.r
if(w!=null&&w!==d){v=r.WB(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.epa(r,s,d))
if(s||d==null){t=$.aT.ak$.d.c
if(t!=null)t.jq()}},
aKt(){this.d1(new C.ekb(this))},
oD(d){return this.bwu(d)},
bwu(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nK(),$async$oD)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d1(new C.ek8(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oD,v)},
UM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$UM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.FZ(78,1920),$async$UM)
case 3:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.ejZ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$UM,v)},
UG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdq()==null){w=1
break}w=3
return B.b(S.Cl(t.a.c),$async$UG)
case 3:s=e
if(t.c==null){w=1
break}r=J.a8(s)
if(r.gal(s)){t.c.I(x.q).f.R(D.eMv)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bY(null,null,new C.ejW(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$UG)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdq()==null){w=1
break}t.d1(new C.ejX(t,q))
case 1:return B.h(u,v)}})
return B.i($async$UG,v)},
aqI(){var w=this,v=w.r
if(v==null||w.gdq()==null)return
if(A.d.b8(w.gdq().z,new C.elq(v))){w.c.I(x.q).f.R(D.eLw)
return}if(w.w===v)w.a1_(!0)
w.d1(new C.elr(w,v))},
bDv(){var w=this.jz(),v=w==null
if((v?null:w.b)===D.eZ)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aLa(d,e){var w=this,v=w.jz(),u=w.gdq(),t=w.e
if(t==null)return
w.d1(new C.ekD(w,v,d,e,t,u))},
by3(d){return this.aLa(d,null)},
a7c(d){return this.byb(d)},
byb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a5i.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nK(),$async$a7c)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jz()
if(s!=null){r=s.b
if(r===D.cQ)t.by3(s.w>=28||s.x.gdG(0)>=A.I.gdG(0)?d.d:d.e)
else if(r===D.eZ){r=d.c
t.aLa(r.j(0.88),r)}w=1
break}t.d1(new C.ekI(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7c,v)},
a7b(d){return this.by9(d)},
by9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7b=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jz()
r=t.gdq()
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
return B.b(t.nK(),$async$a7b)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.ekG(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7b,v)},
bxU(d){var w=this.gdq()
if(w==null)return
this.d1(new C.ekC(this,w,d))},
ZD(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i0j(r),$async$ZD)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nS()
t.m(new C.enF(t,s))
w=4
return B.b(t.t5(),$async$ZD)
case 4:if(t.c!=null)t.adB(s)
case 1:return B.h(u,v)}})
return B.i($async$ZD,v)},
a8M(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1_(!0)
t.nS()
s=t.c
s.toString
w=3
return B.b(C.Qg(s,q),$async$a8M)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8M,v)},
D1(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$D1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nS()
t=4
w=7
return B.b(C.aOq(m),$async$D1)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aNQ(o,q,m.b),$async$D1)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a9(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D1,v)},
EF(d,e){return this.cw1(d,e)},
cw1(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$EF=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pQ()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1_(!0)
t.nS()
s=h.a=t.e.hx()}else{r=A.d.be(t.d,new C.epU(d))
s=h.a=r>=0?t.d[r].hx():d.hx()}s=s.w
q=s==null
p=C.hUN(q?"":s)
o=C.hdc(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a2<1>")
n=B.B(new B.a2(s,new C.epV(h,p),q),q.k("H.E"))
s=h.a.b
w=3
return B.b(t.cps(n.length,o,s),$async$EF)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hUH(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gL(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.cpr(n,o),$async$EF)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.ix(t.d,new C.epW(s))
s=h.a.b
w=11
return B.b(t.cpp(k.b,s),$async$EF)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hx()
case 5:j=C.hUM(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.eMG)
w=1
break}w=12
return B.b(t.cpq(j.a,s,o,j.c),$async$EF)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.epX(h,t,i))
t.oT()
case 1:return B.h(u,v)}})
return B.i($async$EF,v)},
cps(d,e,f){var w=this.c
w.toString
return B.bY(A.K,null,new C.epq(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cpr(d,e){var w=this.c
w.toString
return B.bY(A.K,null,new C.epp(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cpp(d,e){var w=this.c
w.toString
return B.bY(A.K,null,new C.epj(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cpq(d,e,f,g){var w=this.c
w.toString
return B.bY(A.K,null,new C.epl(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aac(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aad(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bV,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ad(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a7(A.ax,A.aD,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ew,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.eWL,u,u,u),A.ao,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aSK(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.SP,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aSN(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a7(A.ax,A.aD,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nc,w,w,w),A.d0,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.W(A.AZ,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.emj(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
bTZ(d,e,f,g,h,i){return this.aSN(d,e,f,!1,g,h,i)},
at1(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.r,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dB,w,w,w),A.bz,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.XV,w,w,w)},
aSM(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.na,w,w,w),new C.emi(d,f),v)},
aSL(d,e){return this.aSM(d,e,null)},
Jk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oU(l,s.c,s.d),$async$Jk)
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
for(l=A.d.gai(o.z),n=new B.h2(l,new C.epb());n.C();){m=l.gU(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a8L(l.charCodeAt(0)==0?l:l,r.b),$async$Jk)
case 4:l=t.a
w=5
return B.b(B.oT(l.c,l.d),$async$Jk)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jk,v)},
Hu(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Hu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oU(q,s.c,s.d),$async$Hu)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a8L(A.R.ao(r.ad(),null),r.b+".json"),$async$Hu)
case 4:q=t.a
w=5
return B.b(B.oT(q.c,q.d),$async$Hu)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hu,v)},
b3x(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nS()
u.t5()
w=u.c
w.toString
v=B.em(new C.epK(u,t),!1,null,x.z)
B.a5(w,!1).ci(v)},
GH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$GH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nK(),$async$GH)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fxv(),$async$GH)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hXz(s.a)
q=t.c
q.toString
w=5
return B.b(B.bY(A.aA,null,new C.ek3(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$GH)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d1(new C.ek4(t,s))
w=1
break}if(p==="split")t.d1(new C.ek5(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$GH,v)},
MC(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$MC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pQ()){w=1
break}w=3
return B.b(t.nK(),$async$MC)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aOp(s,null,null),$async$MC)
case 4:r=e
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.ek9(t,r))
case 1:return B.h(u,v)}})
return B.i($async$MC,v)},
b0e(d){var w=this.e
if(w==null||!C.kp(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aMs(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aOp(s,t==null?null:B.b0(t),u)},
a6T(d){return this.bwl(d)},
bwl(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a6T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pQ()){w=1
break}if(!t.zp()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eMV)
w=1
break}w=3
return B.b(t.aMs(),$async$a6T)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.ek0(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a6T,v)},
afc(d){return this.civ(d)},
civ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pQ()){w=1
break}if(!t.zp()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eM3)
w=1
break}w=3
return B.b(t.aMs(),$async$afc)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.eo0(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afc,v)},
c5o(){var w,v,u=this
if(u.jV())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cv6()}},
cv6(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d1(new C.epS(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bUj(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d1(new C.emm(this,r,u.d))},
bYP(d){var w
if(this.jV())return!1
w=this.e
if((w==null?null:C.kp(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fu6(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kN&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
bYQ(d){var w
if(this.jV())return!1
w=this.e
if((w==null?null:C.kp(w.w))!==!0)return!0
if(!this.zp())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fu6(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kN&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
ML(d){return this.byB(d)},
byB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$ML=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pQ()){w=1
break}if(!t.zp()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eKU)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aom(p),$async$ML)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.eLy)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6c(r)
w=1
break}t.m(new C.ekM(t,d,o))
t.nS()
$.aT.x1$.push(new C.ekN(t))
case 1:return B.h(u,v)}})
return B.i($async$ML,v)},
UK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$UK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nK(),$async$UK)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bAJ(),$async$UK)
case 4:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.ejY(t,s))
case 1:return B.h(u,v)}})
return B.i($async$UK,v)},
Nu(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nK(),$async$Nu)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jz()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fxm(r),$async$Nu)
case 4:q=e
if(q==null){w=1
break}t.d1(new C.elO(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Nu,v)},
iI(d){this.d1(new C.ek6(this,d))},
pF(d){return this.bxN(d)},
bxN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pQ()){w=1
break}m=!D.aLc.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nK(),$async$pF)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.GH()
w=1
break A
case"sign_paper":t.MC()
w=1
break A
case"hd_photo":t.UK()
w=1
break A
case"sharpen":t.Nu()
w=1
break A
case"print":t.D1()
w=1
break A
case"rotate":s=t.jz()
if(s!=null)t.d1(new C.ekf(s))
w=1
break A
case"text_box":t.aKt()
w=1
break A
case"picture":t.UM()
w=1
break A
case"present":t.b3x()
w=1
break A
case"new_slide":t.a6V()
w=1
break A
case"export_json":t.Hu()
w=1
break A
case"outline_share":t.Jk()
w=1
break A
case"flashcard_tool":t.uM(D.He)
w=1
break A
case"quiz_tool":t.uM(D.Hf)
w=1
break A
case"worksheet_tool":t.uM(D.Hg)
w=1
break A
case"duplicate_el":s=t.jz()
if(s==null){w=1
break A}t.d1(new C.ekg(t,s))
w=1
break A
case"delete_el":t.aqI()
w=1
break A
case"bring_fwd":s=t.jz()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.ekh(t,s))
w=1
break A
case"send_back":s=t.jz()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.eks(t,s))
w=1
break A
case"align_left":s=t.jz()
if(s!=null)t.d1(new C.ekv(s))
w=1
break A
case"align_center":s=t.jz()
if(s!=null)t.d1(new C.ekw(s))
w=1
break A
case"align_right":s=t.jz()
if(s!=null)t.d1(new C.ekx(s))
w=1
break A
case"grayscale":case"brighten":t.Nu()
w=1
break A
case"flip_h":s=t.jz()
if(s!=null)t.d1(new C.eky(s))
w=1
break A
case"flip_v":s=t.jz()
if(s!=null)t.d1(new C.ekz(s))
w=1
break A
case"rectangle":t.oD(D.be)
w=1
break A
case"circle":t.oD(D.eI)
w=1
break A
case"triangle":t.oD(D.jx)
w=1
break A
case"arrow":t.oD(D.C3)
w=1
break A
case"line":case"divider":t.oD(D.fp)
w=1
break A
case"word_count":r=t.gdq()
if(r==null){w=1
break A}for(q=A.d.gai(r.z),p=new B.h2(q,new C.ekA()),o=0;p.C();){n=A.a.fu(A.a.i(q.gU(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.ekB(),B.T(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iI(C.iQ(A.L,!1,t.gpU().d.l(),A.aB,40,A.bm,A.u,0.18,q,"Presentation Title",0,D.mo,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iI(C.iQ(A.L,!1,t.gpU().e.l(),A.aB,22,A.bm,A.a4,0.12,q,"Subtitle goes here",0,D.dc,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iI(C.iQ(A.bg,!0,4279310375,A.aB,20,A.bm,A.a4,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tW,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,20,A.bm,A.a4,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.tV,0.8,0.1,0.22))
w=1
break A
case"quote":t.iI(C.iQ(A.L,!1,4279310375,A.aB,24,A.cD,A.a4,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dc,0.8,0.1,0.3))
w=1
break A
case"citation":t.iI(C.iQ(A.bg,!1,4284773515,A.aB,14,A.bm,A.a4,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.tW,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iI(C.iQ(A.dK,!1,4279310375,A.aB,14,A.bm,A.a4,0.08,C.cC(),C.bAL(),0,D.dc,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iI(C.iQ(A.dK,!1,4279310375,A.aB,13,A.bm,A.a4,0.06,C.cC(),"Page "+(t.f+1),0,D.dc,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d1(new C.eki(t))
w=1
break A
case"footer_bar":t.d1(new C.ekj(t))
w=1
break A
case"highlight":t.d1(new C.ekk(t))
w=1
break A
case"redact":t.d1(new C.ekl(t))
w=1
break A
case"callout":t.d1(new C.ekm(t))
w=1
break A
case"checkboxes":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,20,A.bm,A.a4,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dc,0.8,0.1,0.2))
w=1
break A
case"table":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,16,A.bm,A.a4,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dc,0.8,0.1,0.18))
w=1
break A
case"memo":t.d1(new C.ekn(t))
w=1
break A
case"letter":t.iI(C.iQ(A.bg,!1,4279179050,A.aB,17,A.bm,A.a4,0.82,C.cC(),C.bAL()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,22,A.bm,A.O,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tW,0.8,0.1,0.12))
w=1
break A
case"toc":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,18,A.bm,A.a4,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dc,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,16,A.bm,A.a4,0.08,C.cC(),"Signature: _________________________",0,D.dc,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,16,A.bm,A.a4,0.08,C.cC(),"Initials: ______",0,D.dc,0.3,0.65,0.78))
w=1
break A
case"approved":t.iI(C.iQ(A.L,!1,4278556265,A.aB,28,A.bm,A.u,0.12,C.cC(),"APPROVED",0,D.mo,0.32,0.62,0.08))
w=1
break A
case"draft":t.iI(C.iQ(A.L,!1,4292617766,A.aB,28,A.bm,A.u,0.12,C.cC(),"DRAFT",0,D.dc,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iI(C.iQ(A.L,!1,871318596,A.aB,36,A.bm,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dc,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d1(new C.eko(t))
w=1
break A
case"progress":t.d1(new C.ekp(t))
w=1
break A
case"stars":t.iI(C.iQ(A.L,!1,4279310375,A.aB,36,A.bm,A.a4,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.pN,0.8,0.1,0.4))
w=1
break A
case"equation":t.iI(C.iQ(A.L,!1,4279310375,A.aB,32,A.bm,A.O,0.14,C.cC(),"y = mx + b",0,D.dc,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iI(C.iQ(A.L,!1,4279310375,A.aB,18,A.bm,A.a4,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.tV,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d1(new C.ekq(t))
w=1
break A
case"compare":t.d1(new C.ekr(t))
w=1
break A
case"link_text":t.iI(C.iQ(A.bg,!1,4280640491,A.ms,16,A.bm,A.a4,0.1,C.cC(),"https://example.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"phone":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,18,A.bm,A.a4,0.1,C.cC(),"(555) 123-4567",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"email":t.iI(C.iQ(A.bg,!1,4280640491,A.aB,18,A.bm,A.a4,0.1,C.cC(),"name@email.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d1(new C.ekt(t))
w=1
break A
case"cover_page":r=t.gdq()
if(r==null){w=1
break A}t.d1(new C.eku(t,r))
w=1
break A
case"invoice":t.iI(C.iQ(A.bg,!1,4279179050,A.aB,16,A.bm,A.a4,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"resume":t.iI(C.iQ(A.bg,!1,4279179050,A.aB,17,A.bm,A.a4,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,16,A.bm,A.a4,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bAL()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,17,A.bm,A.a4,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iI(C.iQ(A.bg,!1,4279310375,A.aB,15,A.bm,A.a4,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dc,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pF,v)},
coU(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eDO.t(0,this.z)},
coT(d){if(this.jz()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b53(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cg,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.r,o&&e?2:1)
t=C.hXo(d)
s=o?12:18
r=o?A.I:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.N5,A.f,p,p,D.Dk,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fw,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a9),p)},
bJI(d){var w,v=null,u=this.jz()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.ay:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bo],x.p)
A.d.v(w,new B.J(D.Px,new C.elN(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uM(d){return this.bwt(d)},
bwt(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aL7.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nK(),$async$uM)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.ek7(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eCA
w=h.e
if(w==null)return h.bAg()
v=h.gdq()
v.toString
u=h.c
u.toString
t=B.N(u).ax.a===A.H
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
m=t?A.bV:D.b7u
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRp()}else j=!1
if(j)k.push(new C.a6H(h.a.c,!1,h.e.gb7f(),h.gc5l(),g))
else if(s&&h.e!=null&&!h.jV()&&C.cc_(h.e.w)){j=h.a
k.push(new C.a6H(j.c,j.d,g,h.gc6u(),g))}if(s)k.push(h.bJE(w,t,r))
if(s&&h.jV()){w=t?A.fl:A.k9
j=B.m(14)
i=B.I(A.bj.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bGY,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fl,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.At,A.j5,g,g,g))}w=!n
if(w&&!h.jV())k.push(h.bZL(t,r))
if(w&&h.jV())k.push(h.cw2(t))
if(r&&h.jz()!=null&&w&&!h.jV())k.push(h.bZH(t))
j=B.a([],l)
if(q&&w)j.push(new B.a6(132,g,h.b33(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a6(g,72,h.b33(t,!1),g))
i.push(B.D(new B.bI(A.b0,g,g,h.bBw(v,t,!s||p),g),1))
if(h.coU(r)&&u&&s&&!h.jV())i.push(h.c59(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jV()&&h.coT(!1))j.push(new B.a6(240,g,h.bMc(t),g))
k.push(B.D(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a6(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bZI(t))
return B.cb(g,m,B.bo(!1,new B.an(A.W,g,A.aa,A.q,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bAg(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.N(p).ax.a===A.H
p=w?A.bV:A.bN
v=r.a.e
u=r.c4p(A.bj,A.ps,new C.ekQ(r),r.gc8E(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.D(r.aKc(A.bj,A.hv,"Blank Presentation",new C.ekR(r)),1),A.aw,B.D(r.aKc(A.aZ,A.xS,"Class Template",new C.ekS(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bu,s,A.mr,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.ay:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bxf(w))
else{t=new B.hW(t,B.T(t).k("hW<1>"))
A.d.v(u,t.gdL(t).dt(0,new C.ekT(r,w),x.l))}return B.cb(q,p,B.bo(!1,B.cB(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bI1(){this.m(new C.elt(this))
var w=this.c
w.toString
if(B.aI(w,A.bS,x.w).w.a.a<900){w=$.aT.ak$.d.c
if(w!=null)w.jq()}},
adU(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jz()==null){w=1
break}s=t.c
s.toString
s=B.N(s)
r=t.c
r.toString
w=3
return B.b(B.bY(A.K,null,new C.enE(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$adU)
case 3:case 1:return B.h(u,v)}})
return B.i($async$adU,v)},
Am(d,e){return this.cpf(d,e)},
cpf(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Am=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hQ(D.Vv,!0,"Dismiss",j,new C.epc(),new C.epd(d,e),A.ir,!0,x.N),$async$Am)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ahg()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRp()){r.ahg()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aOq(d),$async$Am)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aNQ(j,q,d.b),$async$Am)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a9(i)
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
return B.b(r.EF(d,!1),$async$Am)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hQ(D.Vv,!0,"Dismiss",j,new C.epe(),new C.epf(d),A.a1,!0,x.y),$async$Am)
case 20:if(g===!0)r.Ng(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.aeX("Rename presentation",d.b),$async$Am)
case 24:l=g
if(l!=null)r.cjJ(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ad()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.epg(r,k))
r.oT()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Am,v)},
aZa(d,e){var w=null
return B.bK(!1,D.fjI,w,w,!0,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.at,w,A.lz,w,w,w,w,w,A.kg,w,w))},
bxf(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.ekc(this,d),null)},
bG9(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.elh(),x.dv).bZ(0,new C.eli()),v=B.B(w,w.$ti.k("H.E"))
return new B.C(G.afd,this.aKL(v,e,new C.elj(),f),null)},
aKL(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eb)
t=e.j(g?0.14:0.1)
s=new B.aV(6,6)
r=new B.aA(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.ad:A.bv,n,n,n,10),A.pV],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.co(A.aQ,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bP(r,r,r,r),new B.bs(s,s,s,s),n,n,A.n),n,n,n,n,A.mU,n,n,n))
A.d.v(l,u)}return B.f4(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
bxd(d,e,f){return this.aKL(d,e,null,f)},
bGb(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d67
else if(v==="hati_kuhoweya")w=D.cTP
else{if(v==="hati_kiapo_uongozi")v=D.cHc
else v=C.kp(v)?D.cO1:A.P8
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.elm(this,f,d,e,w),null)},
bZI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jz()
if(i==null||i.b!==D.cQ)return A.bH
w=k.VC(i)
v=k.arJ(i)
u=A.w.j(0.55)
t=x.p
s=B.bo(!1,new B.C(A.Av,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bK(!1,D.ffz,j,j,!0,j,j,new C.emN(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.aA:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.r,1)
o=B.a([new B.ad(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h5,B.bX(new B.C(A.eP,B.aL(j,A.T,!0,j,!0,A.q,j,B.aM(),w,A.bj,j,j,j,j,2,D.bMR,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.vR,j,j,j,j,j,j,!1,"\u2022",j,new C.emO(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.z4,A.am,j,A.Si,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bn:A.c
o=B.I(d?A.aK:A.aL,A.r,1)
n=B.D(B.cd(B.A(B.a([k.tu(G.M5,j,new C.emP(k,i),d),k.tu(G.Z3,j,new C.emQ(k,i),d),k.tu(I.ajr,j,new C.emR(k,i),d),k.tu(I.ZK,j,new C.emS(k,i),d),k.tu(k.bxb(i.as),j,new C.emT(k,i),d),k.tu(D.akD,j,new C.emU(k,i),d),k.tu(D.akC,j,new C.emV(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.y,j,j,j,j,A.aQ),1)
m=A.k.O(i.w)
return B.bZ(0,B.aF(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(D.bnc,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.ay:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d8],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.l4,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.af),0,0,0)},
bZH(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jz()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bn,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.r,1)
r=B.a([new B.ad(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b1J(A.j8,"Edit",new C.emy(o,m),d,!0))
if(w===D.lg)p.push(o.b1J(A.FH,"Shape & ring",new C.emz(o),d,!0))
p.push(o.tu(A.Be,"Format",new C.emA(o),d))
if(v)A.d.v(p,B.a([o.tu(G.M5,n,new C.emB(o,m),d),o.tu(D.akD,n,new C.emC(o,m),d),o.tu(D.akC,n,new C.emD(o,m),d)],q))
p.push(A.b3)
p.push(o.cn8(A.e4,n,o.gaOJ(),d,!0))
p.push(o.tu(A.hw,"Done",new C.emE(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a7(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.EG,A.l4,n,n,n)},
bxb(d){switch(d.a){case 2:return D.ZH
case 1:case 5:return D.ZJ
default:return D.ZI}},
c_y(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dK
default:return A.bg}},
axY(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aC
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.G1:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eb,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qD,B.aF(!1,A.a1,!0,n,B.aK(!1,v,!1,B.ex(new B.C(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.af),n)},
tu(d,e,f,g){return this.axY(d,e,f,g,!1,!1)},
b1J(d,e,f,g,h){return this.axY(d,e,f,g,h,!1)},
cn8(d,e,f,g,h){return this.axY(d,e,f,g,!1,h)},
bJE(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bn,A.M],m):B.a([A.c,A.mC],m)
w=B.I(e?A.aK:A.p2,A.r,1.2)
v=B.a([new B.ad(0,A.G,A.bj.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a1p(A.eA,"Back",p.gbDf(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d8,B.D(B.A(B.a([new B.dm(1,A.ci,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.t5,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.jV()){u=p.a1p(A.qR,"Undo",p.ax.length===0?o:p.gcwv(),e)
A.d.v(r,B.a([u,p.a1p(D.bAx,"Redo",p.ay.length===0?o:p.gcir(),e)],q))}r.push(p.a1p(A.xy,"PDF",new C.elG(p),e))
r.push(p.a1p(A.hx,"Download as video",new C.elH(p),e))
if(!p.jV())r.push(B.Bn(o,o,B.W(A.nH,e?A.ad:A.bv,o,o,o,o),new C.elI(p),A.J,new C.elJ(p),A.ag,"More",x.N))
r.push(A.d8)
r.push(B.aF(!1,A.a1,!0,o,B.aK(!1,B.m(14),!0,B.ex(D.e19,o,new B.o(o,o,o,B.m(14),o,K.G1,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gayN(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.af))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a7(A.ax,A.aD,A.x,m,o,o),A.n),o,o,o,D.bn7,D.bsf,o,o,o)},
cw2(d){var w=this,v=null,u=B.m(18),t=d?A.aA.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.r,1)
return B.p(v,B.cd(B.A(B.a([w.ir(A.tA,"Print",new C.epY(w),d),w.ir(A.xy,"Download PDF",new C.epZ(w),d),w.ir(A.pz,"Present",w.gayN(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.y,v,v,v,v,A.aQ),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.At,G.agY,v,v,v)},
a1p(d,e,f,g){var w,v=null
if(f==null)w=g?A.b5:A.dm
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c7)},
bZL(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aA.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.r,1)
t=x.f0
t=B.B(new B.J(p,new C.emY(r,d),t),t.k("aj.E"))
t.push(new B.C(Y.agD,new B.fj(new C.emZ(r),q),q))
A.d.v(t,w?B.a([new B.C(R.v1,r.afz(A.l5,"Ending celebration",r.gc8R(),d),q),new B.C(R.v1,r.afz(A.FH,"Logo ring & frame",r.gc9x(),d),q)],x.p):A.h8)
A.d.v(t,w?B.a([new B.C(R.v1,r.afz(A.mX,"Look and feel",r.gc9y(),d),q),new B.C(R.v1,r.afz(A.ox,"Edit this slide's text",r.gca4(),d),q)],x.p):A.h8)
t.push(new B.C(R.v1,B.ho(B.aE(q,B.p(q,D.eC3,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ad(0,A.G,N.l_.j(0.4),A.J,10)],x.V),D.amA,A.n),q,34,q,q,A.h4,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.en_(r),q,q,q,q,q,q,!1,A.a9),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.y,q,D.bsJ,q,q,A.aQ)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.ckR(d),A.q,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aQ)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.At,q,q,q,q)},
ckR(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d0p[v]
u.a=null
s=u.a=t.b
w.push(e.lq(e.cmy(s),t.a,new C.eom(u,e),a3,D.aL7.t(0,s)))}w.push(e.ir(A.kG,"Notes Slide",new C.eon(e),a3))
w.push(e.lq(A.FG,"Quiz",new C.eoo(e),a3,!0))
w.push(e.lq(L.Fj,"Worksheet",new C.eoz(e),a3,!0))
w.push(e.lq(V.FJ,"Flashcard",new C.eoK(e),a3,!0))
w.push(e.lq(A.MW,"Lab Report",new C.eoV(e),a3,!0))
w.push(e.lq(A.xE,"Rubric",new C.ep1(e),a3,!0))
w.push(e.lq(A.or,"Minutes",new C.ep2(e),a3,!0))
w.push(e.lq(A.px,"Syllabus",new C.ep3(e),a3,!0))
w.push(e.lq(A.N_,"Timeline",new C.ep4(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d1B[v]
w.push(e.lq(r.b,r.c,new C.ep5(e,r),a3,!D.aLc.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.ir(A.xV,a0,e.gaKs(),a3),e.ir(A.tx,"Picture",new C.eop(e),a3),e.ir(A.xO,"Bio link",new C.eoq(e),a3),e.ir(A.a_e,"Table",new C.eor(e),a3),e.ir(A.MZ,"Sticky",new C.eos(e),a3),e.ir(A.tw,"Divider",new C.eot(e),a3),e.ir(A.Bf,"Header",new C.eou(e),a3),e.lq(A3.va,"Rectangle",new C.eov(e),a3,!0),e.lq(A.qI,"Circle",new C.eow(e),a3,!0),e.lq(A.Zz,"Triangle",new C.eox(e),a3,!0),e.lq(A.j7,"Arrow",new C.eoy(e),a3,!0),e.lq(D.bz1,"Parallelogram",new C.eoA(e),a3,!0),e.lq(D.bBu,"Hexagon",new C.eoB(e),a3,!0),e.lq(A.tw,"Line",new C.eoC(e),a3,!0),e.lq(A.xy,"PDF",new C.eoD(e),a3,!0),e.lq(N.a_n,"Signature",new C.eoE(e),a3,!0),e.ir(A2.B5,"Quote",new C.eoF(e),a3),e.ir(D.Zb,a1,new C.eoG(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bS,x.w).w
u=x.p
t=B.A(B.a([e.aLh("Wide 16:9",D.C1,a3),e.aLh("Short 9:16",D.nQ,a3),new B.C(A.fw,B.mx(D.bDE,d,D.fbY,d,new C.eoH(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bDu("This slide",!e.Q,a3,new C.eoI(e)),A.bo,e.aNs("All slides",e.Q,a3,new C.eoJ(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bDv()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bI,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.J(D.a19,new C.eoL(e),n),n.k("aj.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d2t[v]
j=B.b0(k)
i=new B.aA(k===4294967295?A.dm:A.b5,1.5,A.r,-1)
l.push(new B.C(A.fw,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bP(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eoM(e,k),d,d,d,d,d,d,!1,A.a9),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bC2()
g=B.T(h).k("J<1,C>")
h=B.B(new B.J(h,new C.eoN(e,a3),g),g.k("aj.E"))
return new B.a6(w.a.a-20,d,B.v(B.a([t,A.P,q,A.ao,p,A.P,o,A.au,n,A.P,m,A.au,l,A.P,j,A.au,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ),A.ao,e.bWF(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jz()
w=e.c
w.toString
w=B.aI(w,A.bS,x.w).w
u=new C.eol(e)
t=new C.ep6(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Px,f.dy,new C.eoO(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.au,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdq()
q=q==null?d:q.r
p.push(t.$4(D.Px,q,new C.eoP(e,u),A.bj))
return new B.a6(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.ir(A.kG,w,new C.eoQ(e),a3),e.ir(A.tA,"Print deck",new C.eoR(e),a3),e.lq(D.aiv,"Export JSON",new C.eoS(e),a3,!0),e.ir(A.fJ,"Duplicate Slide",e.gaPx(),a3),e.ir(A.e4,a2,e.gaOK(),a3),e.cqx(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jz()
w=x.p
u=B.a([e.ir(D.Zb,a1,new C.eoT(e),a3),e.ir(A.fJ,"Duplicate",e.gaPx(),a3),e.ir(A.e4,a2,e.gaOK(),a3),e.ir(A.pz,"Present",e.gayN(),a3),e.ir(A.Bd,a0,e.gaKs(),a3),e.ir(A.B8,"Fit Text",new C.eoU(e),a3),e.ir(A.xy,"Download PDF",new C.eoW(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ir(A.kI,"Transfer",new C.eoX(e),a3))
if(f!=null){w=B.a([A.ab,e.ir(G.M5,"Bold",new C.eoY(e,f),a3),e.ir(G.Z3,"Italic",new C.eoZ(e,f),a3),e.ir(G.ai6,"Underline",new C.ep_(e,f),a3),e.ir(Ae.M6,"Bullets",new C.ep0(e,f),a3),e.bLW(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bJI(a3))
w.push(e.ir(D.bxI,"Delete",e.gaOJ(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aLh(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nQ
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a6Q,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d8,D.bCQ],v))
return new B.C(A.fw,B.jG(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.ekL(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cqx(d){var w,v,u,t,s,r=this,q=null,p=r.gdq()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b5:A.cm,A.r,1)
u=B.m(8)
t=B.W(A.Fh,d?A.ay:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.alA,q,q,q,new C.ept(r,p),q,q,q,q,q,A.c7)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.alr,q,q,q,new C.epu(r,p),q,q,q,q,q,A.c7)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.EY,A.ma,q,q,q)},
cmy(d){switch(d.a){case 6:return V.FJ
case 7:return A.FG
case 8:return L.Fj
case 4:return A.Bf
default:return A.kG}},
bLW(d,e){var w=null,v=B.I(e?A.b5:A.cm,A.r,1),u=B.m(8),t=B.aH(w,w,w,w,D.alA,w,w,w,new C.elT(this,d),w,w,w,w,w,A.c7),s=A.k.O(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.alr,w,w,w,new C.elU(this,d),w,w,w,w,w,A.c7)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xh,A.ma,w,w,w)},
bWF(d){var w=null
return B.Bn(B.CQ(B.W(A5.Ze,d?A.ad:A.bv,w,w,w,16),w,w,D.fhl,w,w,w),w,w,new C.emq(),A.J,this.gbxT(),A.cj,"Slide layout",x.fO)},
lq(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.I(g?A.dq:A.aL,A.r,1),r=x.p,q=B.a([B.W(d,g?A.dx:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.N5,A.f,w,w,D.Dk,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fw,B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.ex(new B.C(A.h5,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.d0,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w)},
ir(d,e,f,g){return this.lq(d,e,f,g,!1)},
b33(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aQ
v=B.hE(t,new C.epF(u,s,e,d),s.r.length,A.cj,t,w,new C.epG(e),!1)
s=d?A.aA:A.bN
w=B.a([],x.p)
if(e&&!u.jV())w.push(new B.C(A.cj,B.H0(E.alN,new C.epH(u),B.nn(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aLQ,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bBw(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nQ?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.Q(u,u,u,u),new B.bI(A.b0,v,v,new B.fF(w,B.aE(v,B.cm(new C.el9(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ela(this),v,v,v,v,v,v,!1,A.a9),v),v),v)},
bBy(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kp(a9.w))===!0,b1=b0&&C.fu6(b3),b2=b0&&b3.b===D.kN&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.jV())v=!b0||a7.bYQ(b3)
else v=!1
if(!a7.jV())u=!b0||a7.bYP(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cb:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fSp(b3))o=a8
else if(p&&!a7.jV())o=a7.gc5n()
else o=a7.jV()?a8:new C.ekY(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jr
i=w&&C.fSp(b3)&&a7.zp()?new C.ekZ(a7,b3):a8
h=v&&b3.b===D.cQ?new C.el_(a7,b3):a8
g=u?new C.el0(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bk
else e=q?A.bU:r
else e=A.K
e=B.I(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bU.j(0.08)
else a0=b3.b===D.kN?A.K:a8
if(b1){a1=a7.jV()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bU.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bS,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zp()
a3=b3.b===D.cQ
a4=a3?a7.VC(b3):a8
a5=a3?a7.arJ(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bS,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.el1(a7,b3):a8
a3=v&&a3?new C.el2(a7,b3):a8
a6=C.b_o(q,a4,a1,b3,a5,a2,a3,new C.el3(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bFD,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.el4(a7,b3,b4,b5),a8,a8,new C.el5(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a9),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jV()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bGh,A.f,a8,a8,new B.o(A.dL,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ad(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbUi(),a8,a8,a8,a8,a8,a8,!1,A.a9),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jV()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bHP,A.f,a8,a8,new B.o(A.bU,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ad(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.el6(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a9),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bS,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fpJ,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ad(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kE,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.el7(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a9),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eA(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a9),k*b5,new B.cz("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aNs(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bF,A.r,1)
if(e)t=A.bj
else t=f?A.ay:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d8,B.p(r,D.N5,A.f,r,r,D.Dk,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h3,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a9)},
bDu(d,e,f,g){return this.aNs(d,e,f,g,!1)},
c59(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
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
t=f?A.wk:l
if(f)s=new B.bP(new B.aA(e?A.bF:A.aL,1,A.r,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ad(0,A.G,A.w.j(0.12),A.r9,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.aZa(e,new C.en1(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bI,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.ao,B.D(B.aL(l,A.T,!1,l,!0,A.q,l,B.aM(),k,l,l,l,l,l,2,B.bq(l,new B.b4(4,B.m(10),A.df),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.en2(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aQN(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jz()
if(a2==null)return A.bH
w=new C.em6(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.aZa(a3,a0.gbI0())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fcq,B.D(B.kR(a1,a1,a1,u,0.05,new C.em7(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.fod,B.D(B.kR(a1,a1,a1,t,0.05,new C.em8(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.f6v,B.D(B.kR(a1,a1,a1,96,10,new C.em9(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lg
if(l||n===D.kN||n===D.QQ)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fi_,B.D(B.kR(a1,a1,a1,s,0,new C.ema(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fps,B.D(B.kR(a1,a1,a1,r,0,new C.emb(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Bu[j]
i.a=null
g=h.a
i.a=g
k.push(B.jG(a1,a1,a1,new B.x(h.b,a1,A.q_,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.emc(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c3(A.bE,k,A.bw,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Bp[j]
f.a=null
g=e.a
f.a=g
h.push(B.jG(a1,a1,a1,new B.x(e.b,a1,A.q_,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.emd(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ao,k,A.P,i,A.ao,B.c3(A.bE,h,A.bw,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.J(v,new C.eme(w,a2),l),l.k("aj.E"))
k=x.fw
A.d.v(o,B.a([m,A.ao,B.c3(A.bE,l,A.bw,6,6),A.ac,B.h3k(new C.emf(w,a2),D.ciz,B.ew([a2.as],k),!0,a1,k)],p))}if(n===D.eZ){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.J(v,new C.emg(w,a2),m),m.k("aj.E"))
A.d.v(o,B.a([n,B.c3(A.bE,m,A.bw,0,6)],p))}o.push(A.ac)
o.push(B.dq(D.bHB,D.fjT,new C.emh(a0,a5),B.bk(A.bL,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cB(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wk:a1
if(a4)o=new B.bP(new B.aA(a3?A.bF:A.aL,1,A.r,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ad(0,A.G,A.w.j(0.12),A.r9,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.EH,a1,a1,a1)},
bMc(d){return this.aQN(d,!1,!1,null)},
c4p(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.emk(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eXF,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.D(B.v(B.a([w,A.bz,A.d0,r.bxd(D.cLE,d,B.N(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dT(B.ho(B.aF(!1,A.a1,!0,q,B.aK(!1,q,!0,B.ex(D.eHl,q,new B.o(q,q,B.I(A.c.j(0.55),A.r,1.3),q,B.a([new B.ad(0,A.G,A.bU.j(0.4),A.ej,8)],p),D.amF,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.N(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.b4m,D.b4L],v):B.a([A.c,A.k9],v)
u=B.I(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ad(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a7(A.ax,A.aD,A.x,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aKc(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.ejU(this,g,d,e,f),null)},
aeX(d,e){return this.cgO(d,e)},
cgO(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$aeX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b1,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.enZ(d,q),p,null,!0,!0,x.N),$async$aeX)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeX,v)},
P2(d){var w=d.bQ()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.bx(w)}}
C.adW.prototype={}
C.axl.prototype={
T(){return new C.baP(null,null)}}
C.baP.prototype={
gcsH(){var w,v=this.a.c,u=v.f.bQ(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.bx(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pl,u,1,u,v)
w.f6(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bj(u,D.blD,u,1,u,v)
w.cp(0)
v.e!==$&&B.aO()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bqK()},
Im(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cp.av(0,new B.hL(w,v,A.cp).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.br7,B.c6(new B.h3(B.a([u,w],x.dS)),new C.cYy(this),v),v),v,v,v)}}
C.bb2.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.r,1),t=x.p
return B.av(new B.C(D.bro,B.aF(!1,A.a1,!0,w,B.p(w,B.bv(B.m(22),B.v(B.a([new B.C(D.bqA,B.v(B.a([B.p(w,D.bGn,A.f,w,w,new B.o(A.aC.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.flT,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eYO,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e0,D.bkH,B.A(B.a([B.D(B.bK(!1,D.faI,w,w,!0,w,w,new C.cYU(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bI,w,w,w,w,w,A.mR,w,A.nU,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bn,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.ffT,w,w,!0,w,w,new C.cYV(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.aC,w,w,w,w,w,A.mR,w,A.nU,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.Ul,new B.o(A.aA,w,u,v,D.cLY,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w),w,w,w)}}
C.J_.prototype={
T(){return new C.baO()}}
C.baO.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ad(0,A.G,m.j(0.08),A.dz,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dT(B.dc(B.aE(o,B.v7(B.dg(o,B.A(B.a([r,A.aw,new B.dm(1,A.ci,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f9:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.ba,A.Q,0,o,o),o,o,A.bb,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.om,o,o,1/0),A.cp,A.jn,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cYt(p,d),new C.cYu(p),new C.cYv(p),new C.cYw(p),o,o,o,!1,A.a9),k),new B.u(0,(1-k)*16))}}
C.OH.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.r,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aK(!1,s,!0,new B.C(A.eP,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a7(A.ax,A.aD,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ew,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nc,v,v,v),A.bz,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.W(A.eo,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.af)}}
C.Zu.prototype={
T(){return new C.aCU(D.dc,null,null)}}
C.aCU.prototype={
gXP(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bld,null,1,null,v)
v.w!==$&&B.bM()
v.w=w
u=w}return u},
b3s(d){if(!this.a.c.ay)return
this.x=d
this.gXP().im(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.auf(D.eNH)
C.hUk()
v.Qs()},
q(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gXP().q()
v=w.z
if(v!=null)v.a9(0)
C.auf(D.eNI)
C.hUn()
w.bsS()},
cvt(){B.jd()
this.m(new C.eqE())
var w=this.c.I(x.q).f
w.a3v()
if($.biw)w.R(D.eKz)},
Qs(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dB(0,0,0,0,0,A.o.D(C.h1u(u,w),1,120)),new C.equ(v))},
cv8(){var w,v=this
v.m(new C.eqD(v))
if(v.r)v.Qs()
else{w=v.f
if(w!=null)w.a9(0)}},
gaSD(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cpl(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.m(new C.eqv(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.l1,new C.eqw(w))},
aux(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.m(new C.eqq(u))
u.Qs()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaSD()){u.cpl()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eqr(u,A.o.F(w+1,s)))
u.b3s(w)
u.Qs()}},
cfs(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.m(new C.eqs(v))
v.Qs()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eqt(v,w,t))
v.b3s(w)
v.Qs()}},
cqJ(d){var w,v=this,u=v.e
if(u===D.cg){u=v.d
u===$&&B.c()
return new B.n3(d,new B.cz(u,x.ac))}w=v.cqK(u)
u=v.d
u===$&&B.c()
return B.q2(new B.n3(d,new B.cz(u,x.ac)),w,new C.eqB(),A.bb,A.bb,new C.eqC(v))},
cqK(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.blz
case 16:return A.kB
case 18:return A.mP
default:return A.mQ}},
cqI(d,e,f){var w,v,u,t=null,s=B.cI(A.cp,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cX(s,!1,e,t)
case 2:case 17:w=x.K
return B.jj(e,new B.bf(s,new B.bm(A.u3,A.J,w),w.k("bf<bH.T>")),t,!0)
case 3:w=x.K
return B.jj(e,new B.bf(s,new B.bm(A.R5,A.J,w),w.k("bf<bH.T>")),t,!0)
case 4:case 21:w=x.K
return B.jj(e,new B.bf(s,new B.bm(A.ic,A.J,w),w.k("bf<bH.T>")),t,!0)
case 5:w=x.K
return B.jj(e,new B.bf(s,new B.bm(A.u2,A.J,w),w.k("bf<bH.T>")),t,!0)
case 6:case 16:w=x.b
return B.ig(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bm(0.82,1,w),w.k("bf<bH.T>")))
case 7:w=x.b
return B.ig(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bm(1.18,1,w),w.k("bf<bH.T>")))
case 8:return B.c6(s,new C.eqx(s),e)
case 9:return B.c6(s,new C.eqy(s),e)
case 10:return B.c6(s,new C.eqz(s),e)
case 11:return B.c6(s,new C.eqA(s),e)
case 12:w=x.b
return new B.cX(s,!1,B.ig(A.A,e,t,new B.bf(s,new B.bm(1.03,1,w),w.k("bf<bH.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jr(B.jj(e,new B.bf(s,new B.bm(A.u3,A.J,v),v.k("bf<bH.T>")),t,!0),A.q,new C.bpt(w,t))
case 15:w=x.K
return B.jj(e,new B.bf(s,new B.bm(A.R5,A.J,w),w.k("bf<bH.T>")),t,!0)
case 19:w=B.dl()
w.ms((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jt(v,u,v,1)
return B.fr(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eA(A.A,(1-s.gp(0))*0.2,new B.cX(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jr(new C.amT(B.c6(n.gXP(),new C.eqF(n,v,w),m),m),A.q,m)}else{t=B.rh(new C.HY(w,!0,!1,m))
l=B.b0(w.e)
u=n.cqJ(B.ei(B.jr(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h1u(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.o_,m,m,m),A.bo,D.bID],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fG,m,m,m)
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
l.push(B.bZ(0,new C.ME(new C.DZ(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nQ?0.5625:1.7777777777777777
l.push(B.av(new B.fF(r,B.jr(B.ua(A.ag,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.biw){r=B.H0(A.kK,new C.eqG(d),B.nn(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bo(!0,B.A(B.a([r,A.ab,B.H0(B.W(n.r?Ak.xM:A.iN,m,m,m,m,m),n.gcv7(),B.nn(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bo(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hm,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fG,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bo(!0,B.aE(A.c5,B.p(A.kV,$.biw?A.bH:s,A.f,m,m,m,m,64,m,m,D.bmk,m,m,150),A.y,!1,m,n.gcvs(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a9),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.cb(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.q,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eqH(n,d),m,m,m,!1,A.a9),m,!1,!1,m,m)}}
C.J6.prototype={
B(d){var w=null
return B.p(w,B.bo(!0,new B.C(E.agq,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.aYl,w,w,w,w,w,w,w,w)}}
C.bpt.prototype={
iP(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jw(d){return d.b!==this.b}}
C.bfE.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aV8
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dg(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vq,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bb,new B.o(s.f,r,u,w,r,r,A.n),A.hW,r,64,r,r,r,r,64)
return B.aE(r,new B.a6(78,r,B.v(B.a([w,A.ao,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a9)}}
C.bfD.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dem.h(0,p)
if(o==null)o=D.d1J
p=p==="none"
w=p?q:new B.a7(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.akO:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.en,q,q,52)
return B.aE(q,new B.a6(66,q,B.v(B.a([w,A.ao,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a9)}}
C.aIA.prototype={
aQ(){this.aY()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.aKC.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.bva.prototype={}
C.aKD.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.b_r.prototype={}
C.V0.prototype={
T(){return new C.aCS()},
bdN(d){return this.e.$1(d)}}
C.aCS.prototype={
gb1P(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga99(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb1P()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaM7(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb1P()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb32(){return A.d.cI(this.ga99(),0,new C.eqa())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Q3()},
Q3(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Q3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b01(s.c,s.f),$async$Q3)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eq6(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Q3,v)},
Io(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Io=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga99()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fxi(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oU(o,q.c,q.f),$async$Io)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.em(new C.eq9(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).ci(q),$async$Io)
case 4:q=t.a
w=5
return B.b(B.oT(q.c,q.f),$async$Io)
case 5:w=6
return B.b(t.Q3(),$async$Io)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Io,v)},
Qq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Qq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hu(o,D.dRq,!0,"NgmySlidesTransferScan",x.N),$async$Qq)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eq7(t))
w=4
return B.b(C.ag3(s),$async$Qq)
case 4:r=e
t.m(new C.eq8(t))
o=J.a8(r)
if(o.gal(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eJs)
w=1
break}w=5
return B.b(t.a.bdN(r),$async$Qq)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).N(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qq,v)},
In(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$In=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga99()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oU(s,r.c,r.f),$async$In)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fxx(null,A.d.gL(n),s,t.a.f)}else q=C.fxx(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.FN(q,"ngmy_slides_"+p,!1),$async$In)
case 4:o=e
s=t.a
w=5
return B.b(B.oT(s.c,s.f),$async$In)
case 5:w=6
return B.b(t.Q3(),$async$In)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$In,v)},
a1A(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a1A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eqb(t))
w=3
return B.b(C.bAt(),$async$a1A)
case 3:s=e
t.m(new C.eqc(t))
if(s==null||J.ck(s)){w=1
break}w=4
return B.b(t.a.bdN(s),$async$a1A)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).N(null)
r=t.c.I(x.q).f
q=J.a8(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a1A,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.N(d).ax.a===A.H,l=m?A.da:A.bN,k=o.ga99().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.W(A.cw,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.eqf(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.z1],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ad(0,A.G,A.bj.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.W(A.ps,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bJ8,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ew,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bve],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.ho(B.aE(A.c5,D.eHn,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcag(),n,n,n,n,n,n,!1,A.a9),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a_S,A.n),n,n,n,n,E.XJ,n,n,1/0),A.e0,o.avI(m,"What to transfer"),A.ac,B.A(B.a([B.D(o.aUQ(A.pz,m,new C.eqg(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aUQ(D.byU,m,new C.eqh(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d6,o.avI(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aA:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.ay:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bY,n,n,n))}else A.d.v(v,new B.J(u,new C.eqi(o,m),B.T(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.mr)
w.push(o.avI(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.D(o.aou(A.aX,k,!0,A.jb,m,o.r,o.gc4t(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aKd(A.jH,!0,A.iO,m,o.gcm7(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.D(o.bvK(A.aU,k,A.hx,m,o.r,o.gc4q(),"Download .json","Backup file"),1),A.aw,B.D(o.aKd(A.aJ,!0,Av.xX,m,o.gcxK(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.r,1)
s=B.W(A.l7,A.bj.j(0.9),n,n,n,18)
r=o.gaM7()
q=o.gb32()
p=o.gb32()===1?"":"s"
A.d.v(w,B.a([A.bu,B.p(n,B.A(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bo(!0,B.v(B.a([new B.C(Ag.LH,i,n),B.D(B.cB(w,n,D.bpJ,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,T.UE,A.f,A.dy,n,n,n,n,n,n,n,n,n,n))
return B.cb(n,l,new B.an(A.W,n,A.aa,A.q,j,n),n,!1,!1,n,n)},
ae6(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ae6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i_A(s,t.d,t.e),$async$ae6)
case 2:return B.h(null,v)}})
return B.i($async$ae6,v)},
avI(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.ay:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aUQ(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aA:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.r,g?2:1)
v=g?B.a([new B.ad(0,A.G,A.bj.j(0.2),A.cx,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cj,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.ex(new B.C(A.bB,B.v(B.a([t,A.S,u,A.bz,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.ay:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.af)},
bGa(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aA:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.r,p?2:1)
v=B.p(q,D.bJj,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a7(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.ay:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.qI
if(p)r=A.bj
else r=e?A.b5:A.dm
return new B.C(A.cG,B.aF(!1,A.a1,!0,q,B.aK(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eq5(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q)},
aou(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aA:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qG,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.all,A.f,s,s,D.aY7,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aF(!1,A.a1,!0,s,B.aK(!1,p,!0,B.ex(new B.C(E.Xo,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bz,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.ay:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.af),r)},
aKd(d,e,f,g,h,i,j){return this.aou(d,e,!1,f,g,!1,h,i,j)},
bvK(d,e,f,g,h,i,j,k){return this.aou(d,e,!1,f,g,h,i,j,k)}}
C.V1.prototype={
T(){return new C.biv()}}
C.biv.prototype={
a_(){this.a1()
this.acX()},
acX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$acX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fxx(null,A.d.gL(m),k,r.a.f):C.fxx(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kp(A.d.gL(n).w))C.fxi(A.d.gL(r.a.d),D.d_O)
n=r.a
m=n.c
n=C.hXE(n.d)
w=7
return B.b(C.fxw(p,C.hXJ(r.a.d),n,m,q),$async$acX)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eqj(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eqk(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acX,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.N(d).ax.a===A.H,h=i?A.da:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eql())
v=B.aH(j,j,j,j,B.W(A.eA,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.eqm(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.z1],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dB,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a_S,A.n),j,j,j,j,E.XJ,j,j,1/0)
q=B.m(24)
s=B.I(A.aX.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a6a,A.L,j,j))
else if(k.d==null)r.push(D.e0J)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ad(0,A.G,A.aE.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fba,A.ao,B.aE(j,B.p(j,B.A(B.a([D.bKR,A.aw,B.d(m,j,j,j,j,j,j,D.eZb,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bPj,A.n),j,j,j,j,A0.agc,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eqn(k,d),j,j,j,j,j,j,!1,A.a9),A.P,D.ffq,A.az],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pz(j,j,!1,l,j,!0,!0,j,!1,D.bhn),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cj,j,j,j))
A.d.v(r,p)}r.push(A.az)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hn,A.L,j,j))
return B.cb(j,h,B.bo(!0,B.v(B.a([new B.C(Ag.LH,v,j),B.D(B.cd(B.v(B.a([t,A.aO,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bRb,A.n),j,j,j,j,A.tk,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.y,j,E.agv,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aCP.prototype={
T(){return new C.aCQ(new B.ar(A.as,$.aw()),B.kg(!0,null,!0,!0,null,null,!1))}}
C.aCQ.prototype={
a_(){var w=this
w.a1()
w.e.aM(0,new C.ejO(w))
$.aT.x1$.push(new C.ejP(w))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aXm(){var w,v=this.c
v.toString
w=C.yc(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eC,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ad(0,A.G,A.bj.j(0.28),A.u1,36),D.a9G],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bGq,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.f8u,A.ao,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aYy,k,k,k,k,A.xg,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge4()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aA:A.M
o=new B.aV(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.aA(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ad(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bE(1,A.bi,B.dg(A.A,new B.x(p,k,D.eSW,k,k,k,k,k,k,k,k,k),k,k,A.bb,new B.o(s,k,new B.bP(m,m,m,m),new B.bs(o,o,o,o),n,k,A.n),A.hW,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Ia)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aL(k,A.T,!0,k,!0,A.q,k,B.aM(),w,k,k,k,k,k,2,D.bNz,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.u0(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.AS(5,k),new C.bsH()],x.aS),k,k,A.aN3,k,5,k,1,k,k,!1,"\u2022",k,new C.ejK(l),k,new C.ejL(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lP,k,k,k,k),0),0,0,0)],a1)
d=C.yc(w.a.a.toUpperCase())==null?k:l.gc4u()
return B.av(new B.C(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cU(Ad.Jw,B.p(k,B.bv(e,B.v(B.a([a0,new B.C(D.bqd,B.v(B.a([new B.an(A.W,k,A.aa,A.q,g,k),A.S,D.f6V,A.bu,new B.a6(1/0,50,B.bJ(D.fmJ,d,B.bk(A.bj,A.bn,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.ao,B.bK(!1,A.nd,k,k,!0,k,k,new C.ejM(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.af),k),k,k,k)}}
C.bsH.prototype={
ob(d,e){var w=e.a.toUpperCase()
return e.cDK(B.h8(A.bt,w.length),w)}}
C.apL.prototype={
T(){return new C.aCT(B.yL(A.KZ,A.nk,A.tJ))}}
C.aCT.prototype={
q(){this.d.q()
this.a2()},
aXl(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iK(w,d)},
a93(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a93=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fG3(s),$async$a93)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aXl("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a93,v)},
c4s(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hXH(w[u])
if(t!=null){this.aXl(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vn,s,s,s,t.gbKc(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eD(B.a([r,B.aH(s,s,s,s,B.W(q?A.qM:Al.MD,s,s,s,s,s),s,s,s,new C.eqp(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fnW,s,s,s,1,s,!0)
r=B.yK(t.d,A.bQ,t.gc4r())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.r,3),w,B.a([new B.ad(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.cb(p,A.w,new B.an(A.W,s,A.b_,A.q,B.a([r,w,B.ao(32,B.p(s,D.fcd,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.j6,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bsT.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.r,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bEB,A.f,w,w,D.aYh,w,56,w,w,w,w,w,56),A.aO,D.fnC,A.ao,new B.k9(this.c,new C.f0B(),w,w,x.cI),A.aO,new B.k9(this.d,new C.f0C(),w,w,x.cl),A.ac,D.fnz],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.Jw,new B.o(A.aA,w,u,v,w,w,A.n),w,w,w,K.XQ,D.bqR,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)}}
C.a6H.prototype={
T(){return new C.bie(A.bx)},
gd9(){return this.c}}
C.bie.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.YZ()
w.d=B.dG(A.hf,new C.e8j(w))},
q(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
YZ(){return this.ciy()},
ciy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.e8h(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cc0(p.c),$async$YZ)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.e8i(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$YZ,v)},
bM3(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.aC:A.bU
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.W(A.Fh,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bM3(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.afh,A.j5,r,r,1/0)}}
C.a7z.prototype={
mV(){var w,v,u,t=this
t.wL()
w=t.cx
v=t.c
w.bno(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pG(B.E(["/S",D.e4o,"/URI",new B.re(B.Vz(w.as),A.u4,!0)],x.N,u),u))}}
C.a7A.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b14.prototype={
buP(d,e,f,g,h,i,j,k,l,m){var w=B.ew([D.e2H],x.di)
this.w!==$&&B.aO()
this.w=w},
gcH_(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jI(w,new C.cec(),B.a3(w).k("jI<cl.E,G>")).fC(0,new C.ced())},
aB0(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.ta(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j7(d.a,d.b))
s.n(0,"/Border",B.ta(D.bTc))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fW(t.gcH_()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pG(w,x.Y))}}
C.cee.prototype={}
C.a1P.prototype={}
C.agU.prototype={}
C.aPB.prototype={
fU(d){var w,v,u,t,s,r,q=this,p=null
q.l1(d)
q.Lh(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bd9(w)
u=x.N
t=x.Y
s=new C.cee(q.d.a,"/Link",w,p,p,p,p,p,B.V(u,t))
s.buP(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pG(B.E(["/Type",D.e4m],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a7z(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.avd.prototype={}
C.aR4.prototype={
fU(d){var w,v,u,t,s=this
s.l1(d)
w=s.b
if(w!=null){v=B.dl()
u=s.a
v.e2(u.a,u.b,0,1)
u=d.b
u.hW()
t=s.a
t.toString
u.Kq(t)
u.RF(0)
u.ow(0,v)
w.fU(d)
u.mY(0)}}}
var z=a.updateTypes(["ay<~>()","~(ly)","R(hY)","~()","R(eG)","R(o8)","R(ly)","~(hY)","R(eG,eG)","J6(Y)","R(ny)","R(l4)","ay<R>()","G(G,hY)","a4<n,@>(hY)","ak<z3>()","n(ny)","R(a6Y)","n(ly)","n(vE)","R(E7)","G(hY,hY)","n(eG)","r(eG)","cK(eG)","r(hv)","~(hv)","eG(ur,P,P,P,P,G{fx:n,key:n,rotation:P})","eG(n,P,G)","G(o8,o8)","R(z3)","R(n,ak<z3>)","a4<n,@>(o8)","ny()","XB(Y)","eG(n,P,P,P,P,P{align:pM,anim:hv,bullets:R,color:G?,delay:G,fx:n,key:n,style:GX,weight:q7})","a_O(Y)","eG(n,P,P,P,P{anim:hv,delay:G,fx:n,key:n})","ay<~>(o8)","R(mi)","Xz(Y)","a_m(Y)","a_l(Y)","Ox(Y)","YK(Y)","eG(ur,P,P,P,P,G,n,n{anim:hv,delay:G,rotation:P,stroke:G,strokeWidth:P})","eG(n,P,P,P,P,P,n,n,G)","eG(P,P,n,G{size:P})","r(r2,P,P)","l4()","o8(a4<@,@>)","~(uh)","E7()","fd(eG)","r(iU)","Yi(Y)","~(DZ)","YD(Y)","G(eG,eG)","eG(eG)","a4<n,@>(eG)","eG(a4<@,@>)","ly(ly)","a4<n,@>(ly)","ly(a4<@,@>)","R(jz)","jz()","n(hY)","~(ak<o8>)","S(ak<hY>)","S(hY)","ak<hY>(n?)","abu(Y,G)","~(R(eG,eG))","ac7(Y)","adM(Y,G)","w(ly,R)","UM(Y)","aca(Y)","UP(Y)","~(mm)","hY(hY)","P(eG)","ZS(Y)","Zu(Y)","hY()","ak<Et>()","ay<~>(ak<hY>)","r(bu<G,hY>)","C(jz)","C(E7)","ay<~>(hv,~())","r(ak<hv>,hv?,~(hv),w)","R(lW)","ak<ji<mm>>(Y)","ji<mm>(mm)","hY(a4<@,@>)","V0(Y)","eG(n,P,P,P,P,P,G{align:pM,style:GX,weight:q7})","V1(Y)","r(hY)","~(lP)","HY(Y,ly,r?)","G(a7A)","ay<ak<a4<n,@>>?>()","n(n)","ay<z1>({paper:n?,photo:dC?,request:n,template!l7})","ay<a6Q>({doc!z1,history:ak<+(n,n)>,instruction!n,photo:dC?,template!l7})","ac4(Y)"])
C.cBS.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:74}
C.cBT.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:78}
C.cBU.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gaiB(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.m8(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:78}
C.cBV.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ai(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bMq.prototype={
$1(d){return J.eV(A.dF.gaP(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fkp.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iF(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iF(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iF(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iF(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bWL.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:26}
C.bWM.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:43}
C.bWO.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fA7.prototype={
$1(d){return new C.a_O(this.a,this.b,C.hYz(),null)},
$S:z+36}
C.f_3.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f_7.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f_8.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f_9.prototype={
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
C.f_4.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f_5.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f_6.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eZZ.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hz,w,w,w)
return B.eh(B.a([B.bK(!1,D.faE,w,w,!0,w,w,new C.eZX(d),w,w),B.bK(!1,D.f9M,w,w,!0,w,w,new C.eZY(d),w,w)],x.p),w,w,D.Wn,v,w,w,w,w,D.foc,w)},
$S:19}
C.eZX.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eZY.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.f__.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f_0.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f_d.prototype={
$0(){var w=this.a
return w.m(new C.f_c(w,this.b))},
$S:0}
C.f_c.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f_2.prototype={
$0(){var w=this.a
return w.m(new C.f_1(w,this.b,this.c))},
$S:0}
C.f_1.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.f_a.prototype={
$0(){return this.a.a04(this.b)},
$S:0}
C.f_b.prototype={
$0(){return this.a.Ok(0,this.b)},
$S:0}
C.f_g.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.f_h.prototype={
$0(){var w=this.a
return w.m(new C.f_f(w,this.b))},
$S:0}
C.f_f.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.f_e(),B.T(w).k("J<1,n>")))}},
$S:0}
C.f_e.prototype={
$1(d){return d.a},
$S:z+67}
C.f6g.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fZK(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.o8(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.f6h.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fmR.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcv()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fmP.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fmQ.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fzC.prototype={
$1(d){return d.ad()},
$S:z+32}
C.fk5.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fAt.prototype={
$1(d){return new C.XB(this.a,null)},
$S:z+34}
C.cDd.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cDf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cDi.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cDh())},
$S:11}
C.cDh.prototype={
$0(){},
$S:0}
C.cDk.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a0M(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.be(s,new C.cDg(r))
if(p<0)q.cn(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.agc(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:295}
C.cDg.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDl.prototype={
$1(d){},
$S:31}
C.cDe.prototype={
$1(d){return new C.Xz(this.b,this.a.gcs1(),null)},
$S:z+40}
C.cDm.prototype={
$1(d){return D.fDn},
$S:z+43}
C.cD9.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.W3,A.r,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bqD,B.v(B.a([B.p(w,D.bDF,A.f,w,w,new B.o(A.aC.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.f8S,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eYd,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e0,new B.C(A.po,B.A(B.a([B.D(B.dW(D.ffs,new C.cD7(d),B.de(w,w,w,w,w,w,w,w,w,E.mJ,w,w,A.cf,w,new B.b7(B.m(14),A.Y),D.aVy,w,w,w,w)),1),A.aw,B.D(B.bJ(D.fl4,new C.cD8(d),B.bk(A.bL,w,w,w,w,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wn,new B.o(D.abe,w,u,v,D.cQg,w,A.n),w,w,w,K.XQ,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w,w,w)},
$S:1668}
C.cD7.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cD8.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cDa.prototype={
$0(){return J.nf(this.a.d,new C.cD6(this.b))},
$S:0}
C.cD6.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cD5.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.W3,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bIw,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.amA,A.n),t,44,t,t,t,t,t,44),A.bf,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aOH,t,t,t),A.bz,D.fl1],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.az],q)
for(w=0;w<2;++w){v={}
u=D.d9G[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.aw7(u[1],u[2],u[3],new C.cD3(v,d),!1,t))}q.push(A.ao)
q.push(D.bkK)
q.push(A.ao)
q.push(new C.aw7(A.e4,"Delete book","Remove it from this device",new C.cD4(d),!0,t))
return B.bo(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.abe,t,r,s,t,t,A.n),t,t,t,A.tf,E.Xu,t,t,t),!0,!1,A.ag,!0,!0)},
$S:29}
C.cD3.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.cD4.prototype={
$0(){B.a5(this.a,!1).N("delete")
return null},
$S:0}
C.cDc.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ad(0,A.G,A.w.j(0.45),A.aEF,12)],x.V)
return B.dT(B.eA(A.A,e,B.p(w,B.bv(B.m(4),new B.a6(62,95.81818181818181,B.f4(A.A,F.amK(d),A.f,A.dt),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cDb.prototype={
$0(){return this.a.c_o()},
$S:0}
C.cD2.prototype={
$0(){return this.a.aVY(0,this.b)},
$S:0}
C.cD1.prototype={
$0(){return this.a.CF(this.b)},
$S:0}
C.cD0.prototype={
$0(){return this.a.CF(this.b)},
$S:0}
C.cDn.prototype={
$2(d,e){var w=this.a
return w.bzf(J.q(w.d,e))},
$S:41}
C.cCu.prototype={
$0(){var w=this.a
if(w.c!=null)w.Ah()},
$S:0}
C.cCt.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aYO("Page "+(v.length+1),"",""))},
$S:0}
C.cCw.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cCE.prototype={
$0(){},
$S:0}
C.cCF.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:8}
C.cCx.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcu().aI(this.c)},
$S:0}
C.cCv.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cCz.prototype={
$0(){return this.a.PB(this.b)},
$S:0}
C.cCA.prototype={
$0(){return this.a.PB(this.b)},
$S:0}
C.cCB.prototype={
$0(){var w=this.a
w.m(new C.cCy(this.b))
w.Du()},
$S:0}
C.cCy.prototype={
$0(){return this.a.c=""},
$S:0}
C.cCD.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cCC(w,d))
w.Du()},
$S:z+51}
C.cCC.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cCK.prototype={
$2(d,e){if(d)this.a.Ah()},
$S:116}
C.cCG.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Ah(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.eLY)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cCH.prototype={
$0(){return this.a.aUX(this.b,-1)},
$S:0}
C.cCI.prototype={
$0(){return this.a.aUX(this.b,1)},
$S:0}
C.cCJ.prototype={
$0(){return this.a.c0D(0,this.b)},
$S:0}
C.fro.prototype={
$1(d){return C.h8E()},
$S:44}
C.frp.prototype={
$1(d){return null},
$S:31}
C.faE.prototype={
$1(d){return null},
$S:31}
C.fsn.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:306}
C.fsm.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:237}
C.fst.prototype={
$1(d){var w=this.a
return C.fSh(d)===w||C.hd8(d)===w},
$S:z+4}
C.f9H.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:73}
C.c6k.prototype={
$1(d){return d.length!==0},
$S:3}
C.frm.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.frn.prototype={
$1(d){return C.fu6(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fmc.prototype={
$1(d){var w=null
return B.bo(!0,new B.C(E.xf,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fg1,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.FT,D.fam,new C.fma(d),B.bk(A.bU,w,w,w,A.w,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.vm,D.fhf,new C.fmb(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wl,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fma.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fmb.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fmd.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,D.f6N,w,w,!0,w,w,new C.fm8(d),w,w),B.bJ(D.fnf,new C.fm9(d),w)],x.p),w,w,w,D.fp6,w,w,w,w,D.f6H,w)},
$S:19}
C.fm8.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.fm9.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.e37.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e35.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e36.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e38.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e39.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fss.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:73}
C.fso.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Dj(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fsq.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eZo,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:181}
C.fsr.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hU,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dT(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hU,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.ba,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fsp.prototype={
$2$female$size(d,e){var w=null,v=d?D.acY:this.a,u=B.I(A.hU,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.q,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.abu,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fDV.prototype={
$1(d){return new C.ac4(this.a,this.b,null)},
$S:z+108}
C.dUA.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bhP:A.Ks,q=B.I(D.iZ.j(0.25),A.r,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bU.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.alk,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.r,1.2),o,B.a([new B.ad(0,A.G,D.iZ.j(0.35),A.ej,10)],x.V),D.bRO,A.n),t,t,t,t,A.Li,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.XF,B.v(B.a([p,A.az,B.A(B.a([o,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iZ,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bz,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eYG,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ib(!0,t,e,A.y,D.aM6,new C.dUz(w,this.c),v,D.ag7,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.lU,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:110}
C.dUz.prototype={
$2(d,e){var w=this.a.d[e]
return new C.abu(w,new C.dUy(this.b,w),null)},
$S:z+72}
C.dUy.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fmg.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fmh.prototype={
$1(d){var w=null,v=this.a
return B.bo(!0,new B.C(E.xf,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fjg,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.FT,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fme(d),B.bk(D.iZ,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nJ,D.SW,new C.fmf(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wl,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fme.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fmf.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fmk.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fml.prototype={
$1(d){var w=null,v=this.a
return B.bo(!0,new B.C(E.xf,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f7L,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.FT,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fmi(d),B.bk(D.iZ,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nJ,D.SW,new C.fmj(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wl,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fmi.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fmj.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fmo.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fmp.prototype={
$1(d){var w=null,v=this.a
return B.bo(!0,new B.C(E.xf,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fdS,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.FT,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fmm(d),B.bk(D.iZ,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nJ,D.SW,new C.fmn(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wl,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fmm.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fmn.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fFn.prototype={
$1(d){return D.fH5},
$S:z+74}
C.e8m.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.ba0:A.Ks,s=B.I(A.av.j(0.25),A.r,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.av.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bKN,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.r,1.2),q,B.a([new B.ad(0,A.G,A.bU.j(0.35),A.ej,10)],x.V),D.amF,A.n),v,v,v,v,A.Li,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.XF,B.v(B.a([r,A.az,B.A(B.a([q,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.Kp,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bz,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eWc,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ib(!0,v,e,A.y,D.aM6,new C.e8l(this.b),19,D.ag7,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.lU,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.e8l.prototype={
$2(d,e){var w=D.PL[e]
return new C.adM(w,new C.e8k(this.a,w),null)},
$S:z+75}
C.e8k.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fua.prototype={
$0(){return B.fRg(C.hM8(this.a))},
$S:329}
C.fu9.prototype={
$0(){var w=C.fSz(this.a)
return"data:image/png;base64,"+A.cS.gcu().aI(w)},
$S:22}
C.f7N.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j8(d,e),new B.j8(w,e+v),new B.j8(d+f*14,e),new B.j8(w,e-v)],x.J)
B.a0J(this.a,C.fx(4291404327),v)},
$S:539}
C.fFy.prototype={
$1(d){return new C.UM(this.a,null)},
$S:z+77}
C.ebE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ebD())},
$S:27}
C.ebD.prototype={
$0(){},
$S:0}
C.ebF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ebC(w,d))},
$S:1673}
C.ebC.prototype={
$0(){return this.a.x=J.fa(A.dF.gaP(this.b))},
$S:0}
C.ebG.prototype={
$1(d){},
$S:31}
C.ebg.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ebc.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ebn.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ebo.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.ed8)},
$S:0}
C.ebp.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ebi.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bM(0,A.c3)},
$S:0}
C.ebj.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ebk.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.ebl.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ebm.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.lR(v,A.dX,A.i6)}},
$S:8}
C.ebh.prototype={
$0(){var w=this.a,v=w.z,u=C.fuO(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cCS(C.fuO(t))},
$S:0}
C.ebe.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ebf.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ebv.prototype={
$0(){return B.a5(this.a,!1).lY()},
$S:0}
C.ebw.prototype={
$0(){var w=this.a
return w.m(new C.ebu(w))},
$S:0}
C.ebu.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ebx.prototype={
$0(){var w=this.a
return w.m(new C.ebt(w,this.b))},
$S:0}
C.ebt.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.eby.prototype={
$1(d){var w=this.a
return w.m(new C.ebs(w))},
$S:9}
C.ebs.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ebz.prototype={
$1(d){var w=this.a
return w.m(new C.ebr(w))},
$S:9}
C.ebr.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ebA.prototype={
$0(){var w=this.a
return w.m(new C.ebq(w,this.b))},
$S:0}
C.ebq.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.ebB.prototype={
$1(d){return this.a.YL()},
$S:2}
C.ebd.prototype={
$0(){return this.a.c3K(this.b)},
$S:0}
C.ca0.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:453}
C.c9Z.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ca_.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftL.prototype={
bia(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bMp(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.czx($.tP().k9(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mo(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bia(d,e)},
$S:1674}
C.fs2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fs4.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.dn(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:73}
C.fs3.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ih(t,t,t,t,B.dp(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.pY,A.ch,t,A.er,A.cd)
v=this.a
w.Bo(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:32}
C.f7o.prototype={
$1(d){var w=A.a.fu(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.f7p(),B.T(w).k("a2<1>")).gM(0)},
$S:263}
C.f7p.prototype={
$1(d){return d.length!==0},
$S:3}
C.f7m.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:221}
C.f7n.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:221}
C.ca1.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gayr()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.fSg(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bm,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fPb(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcbR(),"\n\n")
d=B.ih(a6,a6,a6,a6,B.dp(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.acM(k,q,1.28),j),A.pY,A.ch,a6,A.er,A.cd)
d.Bo(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fSg(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bm,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fPb(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.acM(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bE(1,A.bi,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.pY,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.ayq(s,j))
i.push(new B.a6(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:377}
C.ca2.prototype={
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
n=o.gayr()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.fSg(f,new B.F(!0,e,a5,i,a5,a5,h,A.cN,A.bm,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fPb(g.length===0?B.a([a6],n):g,l))break}a1=o.acM(i,h,1.28)
a2=new C.ca3(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.I9,new B.a6(v,a5,a4.f,a5),A.I9,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.bsT,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bE(1,A.bi,new B.x(l[2+a3],a5,a1,a5,A.pY,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.ayq(r,g))
f.push(new B.a6(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a6(a5,q,v,a5),A.ac,B.D(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:150}
C.ca3.prototype={
$2(d,e){var w=null
return new B.a6(e,w,B.d(d,w,w,w,w,w,w,this.a,A.pY,w,w),w)},
$S:1675}
C.fFB.prototype={
$1(d){return new C.UP(this.a,this.b,null)},
$S:z+79}
C.ecP.prototype={
$1(d){return d.m5()},
$S:1676}
C.ecQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ecO(w,d))},
$S:1677}
C.ecO.prototype={
$0(){var w=this.b
return this.a.d=w.gfk(w)},
$S:0}
C.ecC.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ecD.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ecJ.prototype={
$0(){return B.a5(this.a,!1).eH()},
$S:0}
C.ecK.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.r,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.ba1(u,v.gavB(),w),A.f_),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ecH(v),new C.ecI(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a9)},
$S:35}
C.ecH.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:241}
C.ecI.prototype={
$1(d){var w=this.a
w.m(new C.ecE(w,d,this.b,this.c))},
$S:217}
C.ecE.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gavB()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ecL.prototype={
$1(d){var w=this.a
return w.m(new C.ecG(w,this.b))},
$S:9}
C.ecG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecM.prototype={
$1(d){var w=this.a
return w.m(new C.ecF(w,d))},
$S:6}
C.ecF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ecN.prototype={
$0(){return B.a5(this.b,!1).N(this.a.a.c)},
$S:0}
C.fFR.prototype={
$1(d){return D.fJT},
$S:z+83}
C.eM3.prototype={
$1(d){return this.a.Xt()},
$S:8}
C.eKW.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcu().aI(v)},
$S:0}
C.eLj.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eLt.prototype={
$1(d){return d>=this.a.length},
$S:32}
C.eKF.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eKG.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eKD.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eKE.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eLc.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eLd(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jr(B.rh(p>0.2?C.fK_(q,B.a42(p,p,A.x)):q),A.q,u)],x.p)
w=s.bi
if(w>0.02){v=B.a42(12,12,A.x)
p.push(B.jr(B.dc(B.rh(C.fK_(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b3
if(r!=null&&s.b0>0)p.push(B.ei(u,B.b0(r).j(s.b0),!0))
r=s.ba
if(r!=null&&s.bJ>0){r=B.b0(r).j(s.bJ)
w=s.ba
w.toString
p.push(B.bX(u,new B.o(u,u,u,u,u,new B.bR(D.aTR,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.bX(u,new B.o(u,u,u,u,u,new B.bR(D.aTC,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aO
if(r>0)p.push(B.bX(u,new B.o(u,u,u,u,u,new B.a7(A.b0,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aO)],x.O),D.cOX,u),A.n),A.bd))
if(s.aF>0){r=s.k1
p.push(B.ao(u,B.bX(u,new B.o(u,u,u,u,u,new B.a7(A.b0,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aF),A.w.j(s.aF),A.w.j(0)],x.O),D.cZi,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ei(u,A.w.j(r),!0))
r=s.b5
if(r>0)p.push(B.bX(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cWz,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.bdy(s,u),A.at))
return new B.an(A.W,u,A.b_,A.q,p,u)},
$S:62}
C.eLd.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fK(r.b,A.A,q,q,A.cn,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aUy(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c6,l=m*3.141592653589793/180
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
s=o.cT?-1:1
return B.dT(B.e9(A.A,B.eA(A.A,l,B.fr(A.A,new B.CS(new B.ys(q,q,n,A.zO),p,q),q,B.vs(s,o.cW?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:506}
C.eLp.prototype={
$0(){return this.a.m(new C.eLo(this.b,this.c))},
$S:0}
C.eLo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eLq.prototype={
$1(d){return this.a.m(new C.eLn(this.b,d))},
$S:6}
C.eLn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eLs.prototype={
$0(){return this.a.m(new C.eLr(this.b,this.c))},
$S:0}
C.eLr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eKv.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eKw.prototype={
$1(d){var w=this.a
return w.m(w.gcts())},
$S:2}
C.eKx.prototype={
$1(d){return this.a.m(new C.eKu())},
$S:2}
C.eKu.prototype={
$0(){},
$S:0}
C.eKy.prototype={
$0(){var w=this.a
return w.m(new C.eKt(w,this.b))},
$S:0}
C.eKt.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eKA.prototype={
$2(d,e){return A.aw},
$S:36}
C.eKz.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.r,t?2.5:1)
r=B.dg(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bb,new B.o(w,w,q,s,w,new B.a7(A.b0,A.b6,A.x,r,w,w),A.n),A.hW,w,94,w,w,w,w,70)
return B.aE(w,new B.a6(70,w,B.v(B.a([r,A.fV,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.ay,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eKs(u,v),w,w,w,w,w,w,!1,A.a9)},
$S:75}
C.eKs.prototype={
$0(){var w=this.a
return w.m(new C.eKp(w,this.b))},
$S:0}
C.eKp.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eKB.prototype={
$1(d){var w=this.a
return w.m(new C.eKr(w,d))},
$S:9}
C.eKr.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eKC.prototype={
$1(d){var w=this.a
return w.m(new C.eKq(w,d))},
$S:9}
C.eKq.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eLT.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:32}
C.eM_.prototype={
$1(d){var w=this.a
return w.m(new C.eM0(w,d))},
$S:28}
C.eM0.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eM1.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:255}
C.eLU.prototype={
$0(){var w=this.a
return w.m(new C.eLS(w,this.b))},
$S:0}
C.eLS.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.eLV.prototype={
$0(){var w=this.a
return w.m(new C.eLR(w,this.b))},
$S:0}
C.eLR.prototype={
$0(){var w,v=this.b.length,u=J.e0(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eLW.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eLQ(v,w.b,w.c,w.d))},
$S:0}
C.eLQ.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eLX.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gr8(v))},
$S:0}
C.eLY.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eLZ.prototype={
$0(){var w=this.a
return w.m(new C.eLP(w))},
$S:0}
C.eLP.prototype={
$0(){var w=this.a.db
return A.d.ha(w,0,w.length,0)},
$S:0}
C.eLC.prototype={
$1(d){return d.a===this.a.dy},
$S:226}
C.eLD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.auH[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aV(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.avF(new B.nX(new B.bs(n,n,n,n),A.aq,new B.kG(new B.o(j,j,j,j,j,new B.a7(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aYk(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eLB(r,v),2,i))}return B.c3(A.bE,h,A.bw,7,7)},
$S:169}
C.eLB.prototype={
$0(){var w=this.b
return w.m(new C.eLw(this.a,w))},
$S:0}
C.eLw.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eLE.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:257}
C.eLH.prototype={
$0(){var w=this.a
return w.m(new C.eLA(w))},
$S:0}
C.eLA.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eLI.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eLJ.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eLK.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eLL.prototype={
$0(){var w=this.a
return w.m(new C.eLz(w))},
$S:0}
C.eLz.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eLM.prototype={
$0(){var w=this.a
return w.m(new C.eLy(w))},
$S:0}
C.eLy.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eLN.prototype={
$0(){var w=this.b
return w.m(new C.eLx(this.a,w))},
$S:0}
C.eLx.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eLO.prototype={
$1(d){return this.a.fx=d},
$S:257}
C.eLF.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eLG.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eLg.prototype={
$0(){var w=this.a
return w.m(new C.eLf(w))},
$S:0}
C.eLf.prototype={
$0(){var w=this.a
w.p4=null
w.b0x()},
$S:0}
C.eLh.prototype={
$0(){var w=this.a
return w.m(new C.eLe(w,this.b))},
$S:0}
C.eLe.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eLi.prototype={
$0(){var w=this.a
return w.m(w.gcka())},
$S:0}
C.eL8.prototype={
$0(){var w=this.a
return w.m(new C.eL7(w))},
$S:0}
C.eL7.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eL9.prototype={
$0(){var w=this.a
return w.m(new C.eL6(w))},
$S:0}
C.eL6.prototype={
$0(){var w=this.a
w.aF=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eLa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cWW[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aV(9,9)
m.push(v.avF(new B.nX(new B.bs(p,p,p,p),A.aq,new B.a6(1/0,1/0,new B.CS(new B.ys(o,o,v.aUy(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.zO),B.fK(u,A.A,140,o,A.cn,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eL5(v,s),3,n))}return B.c3(A.bE,m,A.bw,10,8)},
$S:169}
C.eL5.prototype={
$0(){var w=this.a
return w.m(new C.eL4(w,this.b))},
$S:0}
C.eL4.prototype={
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
C.eKN.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eKO.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eKP.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eKQ.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eKR.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eKS.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eKT.prototype={
$1(d){return this.a.b5=d},
$S:6}
C.eKU.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eKV.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eK8.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eK9.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eKa.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eKb.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eKc.prototype={
$0(){var w=this.a
return w.m(new C.eK7(w))},
$S:0}
C.eK7.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eKd.prototype={
$1(d){return this.a.b3=d},
$S:257}
C.eKe.prototype={
$1(d){return this.a.b0=d},
$S:6}
C.eKH.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eKI.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eKJ.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eKK.prototype={
$1(d){return this.a.ba=d},
$S:257}
C.eKL.prototype={
$1(d){return this.a.bJ=d},
$S:6}
C.eKi.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eKj.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eKk.prototype={
$1(d){return this.a.bR=d},
$S:6}
C.eKl.prototype={
$1(d){return this.a.c6=d},
$S:6}
C.eKm.prototype={
$0(){var w=this.a
return w.m(new C.eKh(w))},
$S:0}
C.eKh.prototype={
$0(){var w=this.a
return w.c6=A.k.F(w.c6+90+180,360)-180},
$S:0}
C.eKn.prototype={
$0(){var w=this.a
return w.m(new C.eKg(w))},
$S:0}
C.eKg.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eKo.prototype={
$0(){var w=this.a
return w.m(new C.eKf(w))},
$S:0}
C.eKf.prototype={
$0(){var w=this.a
return w.cW=!w.cW},
$S:0}
C.eLb.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i0d(v,w.p4)},
$S:0}
C.eL3.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bi6:B.fK(v,A.A,w,w,A.cn,A.bQ,!1,w,!1,w,w)
return C.fsa(d.length===0?"rounded":d,u,e)},
$S:139}
C.eL_.prototype={
$0(){var w=this.a
return w.m(new C.eKZ(w))},
$S:0}
C.eKZ.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eL0.prototype={
$0(){var w=this.b
return w.m(new C.eKY(this.a,w))},
$S:0}
C.eKY.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eL1.prototype={
$0(){var w=this.b
return w.m(new C.eKX(this.a,w))},
$S:0}
C.eKX.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eL2.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eLm.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ad(-4,A.G,A.b4.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.et(n.cdL(),n.r))
l.push(new C.HY(n.cqw(),!1,!1,t))
o=B.bZ(0,B.bv(o,new B.et(new B.an(A.W,t,A.b_,A.q,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.q,B.a([o,B.ao(t,B.aE(A.c5,B.bX(t,new B.o(t,t,B.I(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eLl(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a9),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:214}
C.eLl.prototype={
$1(d){var w=this.a
return w.m(new C.eLk(w,d,this.b,this.c))},
$S:18}
C.eLk.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eLv.prototype={
$0(){var w=this.a
return w.m(new C.eLu(w,this.b))},
$S:0}
C.eLu.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eKM.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).lY()},
$S:0}
C.eM2.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a6(Math.min(s*0.4,460),t,B.v(B.a([w.aXd(),B.D(B.av(w.b_a(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aNZ(),1),w.aKe()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aXd(),new B.C(A.hG,B.av(s.b_a(u),t,t,t),t),B.D(s.aNZ(),1),s.aKe()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:663}
C.fpr.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.en(k,!1,j,A.aB,"",4280640491,i,l,m,"",h,C.byp(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bm,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bm,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bm,A.O)},
$S:z+98}
C.fpq.prototype={
$3(d,e,f){var w=this,v=C.byp(),u=w.b?A.I:A.cs,t=w.c?A.cD:A.bm
return C.en(w.d,!1,f,A.aB,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cg,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cbn.prototype={
$1(d){return B.t(d)},
$S:17}
C.fx7.prototype={
$0(){return this.a},
$S:z+15}
C.fe9.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.fea.prototype={
$2(d,e){return J.ck(e)},
$S:z+31}
C.fx9.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fxc.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fxd.prototype={
$0(){return A.d.gL(D.vv)},
$S:z+33}
C.fx5.prototype={
$1(d){return d.a},
$S:z+16}
C.fx8.prototype={
$1(d){return d.a},
$S:z+16}
C.fv5.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fv6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fv7.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fpv.prototype={
$0(){return C.cC()},
$S:22}
C.fpy.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cg,s=u?n:0
return C.en(j,l,v,A.aB,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.be,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,"","",A.bm,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,"",j,A.bm,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,j,k,A.bm,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bm,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bm,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dc,!1,k,l,"",m,A.bm,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bm,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,j,k,"",l,A.bm,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bm,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bm,A.a4)},
$S:z+35}
C.fpx.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.en(A.bg,!1,4279310375,A.aB,"",i,24,A.bm,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cg,D.eZ,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fpw.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cg,t=v?j:0
return C.en(A.bg,!1,4279310375,A.aB,"",4280640491,24,A.bm,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lg,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pN,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fpu.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.frW.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.h9G.cg(0,A.a.i(s.w).toLowerCase(),new C.frU(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.frV(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bu(t.e,new B.bmr(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.frU.prototype={
$0(){return F.aM9(this.a.w)},
$S:196}
C.frV.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bxj("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c4,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:196}
C.f7j.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f7k.prototype={
$1(d){return d.a},
$S:z+18}
C.f7l.prototype={
$1(d){return d.b},
$S:z+19}
C.fG2.prototype={
$1(d){return D.fK8},
$S:z+41}
C.eS2.prototype={
$0(){return this.a.x=C.hDT(this.b,this.c.b)},
$S:0}
C.eS3.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eS0.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:400}
C.eS1.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:400}
C.eS_.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bY(A.aA,null,new C.eRV(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.nV,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b_(s,7)
if(r.length===0){n.m(new C.eRW(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hfp(o,m.cDF(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eRX(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eRV.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eRZ(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b1W,A.f,p,p,D.aY1,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Bp:D.Bu,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a6(64,64,C.fsa(v,i.b18(h),u),p)))}t=B.lR(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bo(!0,new B.C(Aa.Az,t,p),!0,!1,A.ag,!0,!0)
s=new C.eRY(i,d)
m=B.aI(d,A.bS,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gc[e]
l.push(s.$2(r.a,r.b))}return B.bo(!0,new B.cU(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fck,A.S,t,A.e0,D.eCb,A.au,D.fmC,A.S,B.lR(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.y,p,Aa.Az,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:29}
C.eRZ.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b4.j(0.22):A.c.j(0.04),s=v?A.by:A.dq
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hu,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eRU(this.b,d),w,w,w,w,w,w,!1,A.a9)},
$S:1682}
C.eRU.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eRY.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bF
r=B.I(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bv(w,d.length===0?B.p(v,D.alP,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e2(new C.ME(u.F2(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.au,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bJ:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eRT(this.b,d),v,v,v,v,v,v,!1,A.a9)},
$S:139}
C.eRT.prototype={
$0(){B.a5(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.eRW.prototype={
$0(){var w=this.a
return w.w=w.w.F2("")},
$S:0}
C.eRX.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eRJ.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eRK.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eRM.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eRN.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eRO.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eRP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eRL(w,d))},
$S:2}
C.eRL.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eRQ.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eSg.prototype={
$0(){return this.a.f.fD()},
$S:0}
C.eSh.prototype={
$0(){var w=this.a
return w.m(new C.eSf(w))},
$S:0}
C.eSf.prototype={
$0(){return this.a.e=null},
$S:0}
C.eSi.prototype={
$0(){var w=this.a
return w.m(new C.eSe(w))},
$S:0}
C.eSe.prototype={
$0(){return this.a.x=null},
$S:0}
C.eSk.prototype={
$1(d){var w=this.a
return w.m(new C.eSd(w,d))},
$S:33}
C.eSd.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eSl.prototype={
$1(d){var w=this.a
return w.m(new C.eSc(w,d))},
$S:33}
C.eSc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eSm.prototype={
$0(){var w=this.a
return w.m(new C.eSb(w))},
$S:0}
C.eSb.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eSn.prototype={
$1(d){var w=this.a
return w.m(new C.eSa(w,d))},
$S:33}
C.eSa.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eSo.prototype={
$1(d){var w=this.a
return w.m(new C.eS9(w,d))},
$S:33}
C.eS9.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eSp.prototype={
$0(){var w=this.a
return w.m(new C.eS8(w))},
$S:0}
C.eS8.prototype={
$0(){var w=this.a
return w.w=w.w.F2("")},
$S:0}
C.eSq.prototype={
$0(){var w=this.a
return w.m(new C.eS7(w,this.b))},
$S:0}
C.eS7.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eSr.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a6(u,null,w.bKL(D.a1v[v]),null))
return B.c3(A.bE,t,A.bw,8,8)},
$S:169}
C.eSj.prototype={
$1(d){var w=this.a
return w.m(new C.eS6(w,d))},
$S:9}
C.eS6.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eRR.prototype={
$0(){var w=this.a
return w.m(new C.eRS(w,this.b,this.c))},
$S:0}
C.eRS.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.eS5.prototype={
$0(){var w=this.a
return w.m(new C.eS4(w,this.b))},
$S:0}
C.eS4.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fG1.prototype={
$1(d){return new C.a_l(this.a,this.b,null)},
$S:z+42}
C.eRC.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eRD.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eRE.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aE5?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eRF.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eRG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eRB(w,d))},
$S:2}
C.eRB.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eRH.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eRI.prototype={
$0(){var w=this.b
if(A.a.c9(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bM(0,new B.bb(w,B.h8(A.bt,w.length),A.aN))},
$S:0}
C.fdp.prototype={
$1(d){return d.a===this.a},
$S:226}
C.e7M.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gavG(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cJf:D.cZ3
t=D.wT.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.r,v?1.8:1.2)
s=D.wT.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ad(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bfK(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.bZ(0,B.bMG(B.eA(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a7(A.a3,A.a7,A.x,B.a([A.K,D.b8t.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bv(s,new B.an(A.W,q,A.aa,A.q,B.a([n,o,B.av(B.v(B.a([B.W(p.a.c?A.ee:A.lE,D.wT,q,q,q,20),A.au,B.f4(A.A,B.nD(A.jh,D.f6a,new C.e7L()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f2U,A.f,q,q,new B.o(D.wT,q,q,B.m(6),q,q,A.n),q,q,q,q,L.agN,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a7(A.ax,A.aD,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:91}
C.e7L.prototype={
$1(d){return D.bQ4.aw(0,d)},
$S:66}
C.fxe.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fxf.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:226}
C.fxg.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fxh.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:13}
C.fxa.prototype={
$1(d){return d.a},
$S:z+18}
C.fxb.prototype={
$1(d){return d.b},
$S:z+19}
C.fFf.prototype={
$1(d){return new C.YK(this.a,this.b,null)},
$S:z+44}
C.dfk.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dfl.prototype={
$1(d){return d.a===this.a.gagZ()},
$S:z+10}
C.dfm.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dfp.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dfq.prototype={
$0(){var w=this.a
return w.m(new C.dfo(w,this.b))},
$S:0}
C.dfo.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfr.prototype={
$1(d){var w=this.a
return w.m(new C.dfn(w,d))},
$S:9}
C.dfn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e7K.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.fn(w,this.a)
return B.da(w,0,B.dJ(e,"count",x.S),B.T(w).c).dE(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f3Q.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.en(A.bg,!1,4279310375,A.aB,"",i,24,A.bm,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eZ,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cg,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f3S.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.en(A.L,!1,this.b.d,A.aB,"",4280640491,i,A.bm,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mo,D.cQ,g,e,f)},
$S:z+46}
C.f3R.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.w7(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mo,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f3P.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fqC.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fqD.prototype={
$0(){return A.d.gL(D.Gl)},
$S:z+49}
C.fqE.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f5P.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fwH.prototype={
$1(d){var w=2450411,v=4281908728
C.du(d,C.dv(4280171146,1,0,D.be,w,0,0.52,0,0))
C.du(d,C.dv(v,1,0,D.be,w,0,0.04,0.48,0))
C.du(d,C.dv(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fwI.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.du(d,C.dv(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.du(d,C.dv(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.du(d,C.dv(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.22,0.08,0.12))
C.du(d,C.dv(u,0.004,0,D.fp,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fwJ.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(4279080072,0.11,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.du(d,C.dv(856528008,0.72,0,D.jy,w,0,0.28,0.72,0.14))
C.du(d,C.dv(1426953352,0.2,0,D.jy,w,0,0.2,0.78,0.22))
C.du(d,C.dv(v,0.004,0,D.fp,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fwU.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4279203438,0.55,0,D.jy,w,0,0.5,0.55,-0.05))
C.du(d,C.dv(4280171146,0.5,0,D.jy,w,0,0.45,0.62,0.35))
C.du(d,C.dv(4280640491,0.4,0.3,D.jx,w,0,0.35,0.68,0.55))
C.du(d,C.dv(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fwZ.prototype={
$1(d){var w=4280472558
C.du(d,C.dv(4279310375,0.75,-0.4,D.jx,2450411,0,0.75,-0.15,0.35))
C.du(d,C.dv(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.35,0.08,0.08))
C.du(d,C.dv(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fx_.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3423541034,0.48,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.12,-0.08,D.jy,w,0,1.1,-0.05,0.38))
C.du(d,C.dv(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fx0.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cIj[w]
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.eZ,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bm,A.aB,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JF
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fx1.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.m3,A.dx,w/3).l()
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.eZ,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bm,A.aB,4279310375,A.bg,null,D.C3,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JF
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fx2.prototype={
$1(d){var w=4294967295
C.du(d,C.dv(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.du(d,C.dv(4280110808,1.1,1.57,D.jx,2450411,0,0.18,0.35,-0.05))
C.du(d,C.dv(w,0.006,0,D.fp,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fx3.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0))
C.du(d,C.dv(u,0.012,0,D.be,v,0,1,0,0.1))
C.du(d,C.dv(u,0.006,0,D.fp,u,3,0.42,0.06,0.14))
C.du(d,C.dv(403446057,0.68,0,D.jy,v,0,0.22,0.72,0.18))
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fx4.prototype={
$1(d){var w=4278630100
C.du(d,C.dv(4279310375,1.2,0.15,D.jy,2450411,0,0.55,-0.2,-0.1))
C.du(d,C.dv(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.du(d,C.dv(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fwK.prototype={
$1(d){var w=4292617766
C.du(d,C.dv(4282714634,0.65,-0.2,D.jx,2450411,0,0.65,-0.1,0.45))
C.du(d,C.dv(w,0.5,-0.15,D.jx,2450411,0,0.5,0.05,0.55))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fwL.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4278413729,0.35,3.14,D.jx,w,0,0.45,-0.05,0.7))
C.du(d,C.dv(4278355143,0.3,3.14,D.jx,w,0,0.4,0.25,0.75))
C.du(d,C.dv(4279150057,0.32,3.14,D.jx,w,0,0.5,0.55,0.72))
C.du(d,C.dv(863884284,0.22,0,D.eI,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fwM.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.du(d,C.dv(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.du(d,C.dv(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.du(d,C.dv(w,0.28,0,D.jy,v,0,0.35,-0.08,0.78))
C.du(d,C.dv(u,0.22,0.5,D.jx,v,0,0.3,0.72,0.78))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fwN.prototype={
$1(d){var w=4293571336,v=1156231944
C.du(d,C.dv(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.du(d,C.dv(v,0.15,0,D.jx,2450411,0,0.15,0.02,0.02))
C.du(d,C.dv(v,0.15,3.14,D.jx,2450411,0,0.15,0.83,0.83))
C.du(d,C.dv(w,0.004,0,D.fp,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fwO.prototype={
$1(d){var w=4279080072,v=2450411
C.du(d,C.dv(w,0.14,0,D.kO,v,0,0.14,0.68,0.18))
C.du(d,C.dv(4279548070,0.14,0,D.kO,v,0,0.14,0.78,0.28))
C.du(d,C.dv(4281193663,0.14,0,D.kO,v,0,0.14,0.68,0.38))
C.du(d,C.dv(4284410580,0.14,0,D.kO,v,0,0.14,0.78,0.48))
C.du(d,C.dv(4279203438,0.14,0,D.kO,v,0,0.14,0.68,0.58))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fwP.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3708753706,0.42,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.06,-0.05,D.jy,w,0,1,0,0.38))
C.du(d,C.dv(859356664,0.25,0,D.eI,w,0,0.25,0.7,0.08))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fwQ.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.m3,A.dx,w/3).l()
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.eZ,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bm,A.aB,4279310375,A.bg,null,D.C3,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JF
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fwR.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iW
$.iW=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.eZ,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bm,A.aB,s,A.bg,null,D.fp,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JF
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}C.du(d,C.dv(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.du(d,C.dv(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fwS.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.du(d,C.dv(4674921,0.9,0,D.be,4287931320,2,0.9,0.05,0.05))
C.du(d,C.dv(w,0.08,0,D.be,v,0,0.08,0.03,0.03))
C.du(d,C.dv(u,0.08,0,D.be,v,0,0.08,0.89,0.03))
C.du(d,C.dv(u,0.08,0,D.be,v,0,0.08,0.03,0.89))
C.du(d,C.dv(w,0.08,0,D.be,v,0,0.08,0.89,0.89))
C.du(d,C.dv(w,0.004,0,D.fp,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fwT.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iW
$.iW=t+1
t=new C.eG("design_"+(""+1000*u+"_"+t),D.eZ,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bm,A.aB,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JF
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,t)
u=B.aq(A.dp,A.cu,w/2).l()
t=Date.now()
s=$.iW
$.iW=s+1
u=new C.eG("design_"+(""+1000*t+"_"+s),D.eZ,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bm,A.aB,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JF
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}C.du(d,C.dv(4280171146,1,0,D.be,q,0,0.48,0,0))
C.du(d,C.dv(4280172719,1.1,1.57,D.jx,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fwV.prototype={
$1(d){var w=2450411
C.du(d,C.dv(870995980,0.55,0.45,D.jy,w,0,0.55,-0.12,-0.08))
C.du(d,C.dv(856996006,0.45,0.45,D.jy,w,0,0.45,0.62,-0.05))
C.du(d,C.dv(16777215,0.38,0.45,D.jy,4293548044,5,0.38,0.52,0.12))
C.du(d,C.dv(585783308,0.3,0.45,D.jy,w,0,0.3,0.56,0.16))
C.du(d,C.dv(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.du(d,C.dv(1156208652,0.28,0,D.eI,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fwW.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.du(d,C.dv(w,1,0,D.be,v,0,0.07,0,0))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.du(d,C.dv(s,0.08,0,D.eI,v,0,0.08,0.5,0.16))
C.du(d,C.dv(w,0.08,0,D.eI,v,0,0.08,0.5,0.3))
C.du(d,C.dv(4279548070,0.08,0,D.eI,v,0,0.08,0.5,0.44))
C.du(d,C.dv(16777215,0.32,0.45,D.jy,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fwX.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.du(d,C.dv(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.du(d,C.dv(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.du(d,C.dv(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.du(d,C.dv(16777215,0.28,0,D.eI,s,4,0.32,0,0.72))
C.du(d,C.dv(r,0.006,0,D.fp,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iW
$.iW=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.eZ,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bm,A.aB,4279310375,A.bg,null,D.eI,16777215,t,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JF
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fwY.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(3423541034,0.55,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4009754623,0.56,0.45,D.jy,w,0,0.56,0.22,0.18))
C.du(d,C.dv(3439329279,0.44,0.45,D.jy,w,0,0.44,0.28,0.24))
C.du(d,C.dv(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.du(d,C.dv(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fos.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fot.prototype={
$0(){return A.d.gL($.bC2())},
$S:z+52}
C.fdc.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fdb.prototype={
$1(d){return C.hL6(d,this.a,this.b)},
$S:z+53}
C.fxn.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vs(1.0375,1.01875,1)
return new B.fN(v,u,new C.aR4(B.hAV(A.ut,C.hL9(w.c,w.d,v,u),t)))},
$S:447}
C.dQk.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dQj.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bX(w,new B.o(w,w,w,w,w,new B.bR(A.Jb,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jr(new B.an(A.W,w,A.b_,A.q,B.a([t,new B.et(B.b3(w,w,w,new C.bcE(u.a,r,q,r),A.at),w),B.av(new B.k9(r,new C.dQi(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:426}
C.dQi.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ad(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hR(B.fK(i,A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fR(A.A,0,6.283185307179586,A.x,t,r,new B.mc(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a6(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bp5(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cP(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a6(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dT(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a7(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a6(r,m*0.022,r,r),B.d(w.a.c.gaIN(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.e9(A.A,new B.C(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:107}
C.eQQ.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aD,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:66}
C.c5W.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bF
t=B.I(t,A.r,g?2.5:1)
w=g?B.a([new B.ad(0,A.G,A.hC.j(0.4),A.J,14)],x.V):v
w=B.dg(v,B.bv(B.m(12),d,A.aq),v,v,A.bb,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a6(112,v,B.v(B.a([w,A.fV,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bJ:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a9)},
$S:1685}
C.c5X.prototype={
$0(){var w=this.a
return w.d.$1(w.c.F2(""))},
$S:0}
C.c5Y.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e2(new C.ME(v.F2(u),!0,!1,null),!0,null),d.b,new C.c5Z(w,this.c,d),v.a===u)},
$S:z+54}
C.c5Z.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hfp(u.b,t.c.F2(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fDF.prototype={
$1(d){return new C.Yi(this.a,null)},
$S:z+55}
C.d4z.prototype={
$0(){var w=this.a
w.d=w.gvd().b8T("data:"+this.b+";base64,"+A.cS.gcu().aI(this.c));++w.r},
$S:0}
C.d4E.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.d4F.prototype={
$0(){var w=this.a
return w.m(new C.d4D(w))},
$S:0}
C.d4D.prototype={
$0(){return this.a.r++},
$S:0}
C.d4G.prototype={
$1(d){var w=this.a
return w.m(new C.d4C(w,d))},
$S:2}
C.d4C.prototype={
$0(){var w=this.a
return w.d=w.gvd().aBS(this.b)},
$S:0}
C.d4H.prototype={
$0(){var w=this.a
return w.m(new C.d4B(w))},
$S:0}
C.d4B.prototype={
$0(){var w=this.a
return w.d=w.gvd().b8T("")},
$S:0}
C.d4I.prototype={
$1(d){var w=this.a
return w.m(new C.d4A(w,d))},
$S:2}
C.d4A.prototype={
$0(){var w=this.a
return w.d=w.gvd().b9_(this.b)},
$S:0}
C.d4J.prototype={
$0(){var w=this.a
w=w.gvd().b9_(w.gavH().a.a)
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.fDE.prototype={
$1(d){var w={}
w.a=this.a
return new B.e5(new C.fDD(w),null)},
$S:20}
C.fDD.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bo(!0,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bS,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.az,D.fjS,A.au,D.fk7,A.az,new C.aYh(v.a,new C.fDC(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.aYz,w,w,w,w,A.Lr,w,w,w)},
$S:174}
C.fDC.prototype={
$1(d){this.b.$1(new C.fDB(this.a,d))
B.a5(this.c,!1).N(d)},
$S:z+56}
C.fDB.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fG0.prototype={
$1(d){return D.fFx},
$S:z+57}
C.dbk.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dbl.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).N(this.b)
return null},
$S:0}
C.dbm.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).N(v)}},
$S:0}
C.fu3.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aD,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:66}
C.d4g.prototype={
$3(d,e,f){var w,v=this,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cS(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cS(w,q+p,w,q+p*1.2))
u.E(new B.CA(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aN(u,v.d)
s.aN(u,v.e)
p=B.L()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ah(new B.u(w,o),2.2,p)},
$S:632}
C.fu7.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fms.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fmt.prototype={
$1(d){var w=null,v=this.a
return B.bo(!0,new B.C(E.xf,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.f39,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dq(D.FT,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fmq(d),B.bk(A.bU,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nJ,D.SW,new C.fmr(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wl,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fmq.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fmr.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.cbl.prototype={
$1(d){return d.hx()},
$S:z+59}
C.cbm.prototype={
$1(d){return d.ad()},
$S:z+60}
C.cbk.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aN(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.O(b3)
if(b4==null)b4=A.a4.gdG(0)
b3=B.aN(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.O(b3)
if(w==null)w=0
b3=B.aN(b2.h(0,"align"))
v=b3==null?b1:A.k.O(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hGX(b2.h(0,"type"))
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
n=A.awo[A.o.D(b4,0,8)]
m=D.cL3[A.o.D(w,0,1)]
l=C.hKz(b2.h(0,"decoration"))
k=B.aN(b2.h(0,"color"))
k=k==null?b1:A.k.O(k)
if(k==null)k=4279310375
j=A.atd[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hNk(b2.h(0,"shape"))
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
a3=C.haK(b2.h(0,"textTransition"))
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
return C.en(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cba.prototype={
$1(d){return d.hx()},
$S:z+62}
C.cbb.prototype={
$1(d){return d.ad()},
$S:z+63}
C.cb7.prototype={
$1(d){return B.t(d)},
$S:17}
C.cb8.prototype={
$1(d){return B.t(d)},
$S:17}
C.cb9.prototype={
$1(d){return C.h1v(B.a1(d,x.N,x.z))},
$S:z+64}
C.cbC.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cbD.prototype={
$0(){return A.d.gL(D.a19)},
$S:z+66}
C.cbx.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hx())},
$S:z+7}
C.cbw.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cbs.prototype={
$1(d){return new B.J(d,new C.cbt(),B.T(d).k("J<1,S>")).fC(0,new C.cbu())},
$S:z+69}
C.cbt.prototype={
$1(d){return d.f},
$S:z+70}
C.cbu.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:640}
C.cbv.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hwM(d)},
$S:z+71}
C.cby.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cbz.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cbA.prototype={
$1(d){return d.ad()},
$S:z+14}
C.fuG.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ag(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fuC.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fuD.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fuE.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fuF.prototype={
$2(d,e){return d.b===D.eZ&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cbg.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hW_(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cbf(),b5.k("H.E"),x.N)
w=B.d9(b5,B.a3(b5).k("H.E"))
b1=b1.e
v=A.ph.av(0,A.k.D(b1,0,1))
u=new C.cbh()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cbi(a9,b7.d)
r=new C.cbj(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jK.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kN(A.k.D(1-k,0,1),B.dT(B.e9(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eZ){a4=i.hx()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lg&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.q,B.a([new B.kN(A.k.D(o,0,1),r.$1(l),a8),new B.kN(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iD(B.vW(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cg)a7=D.mo
p.push(s.$5(i.c,i.d,i.e,i.f,C.hcY(a7,a6,r.$1(i))))}}return B.bX(new B.an(A.W,a8,A.aa,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a7(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:361}
C.cbf.prototype={
$1(d){return d.a},
$S:z+22}
C.cbh.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cbi.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cbj.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a6G(v,C.b_o(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dCX.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e9(new B.d8(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cbp.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cbq.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fxu.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:313}
C.fwB.prototype={
$1(d){return new C.aca(this.a,this.b,null)},
$S:z+78}
C.ejQ.prototype={
$0(){return this.a.P1(this.b,C.hZj(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ejR.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.P1(this.b,C.hZl(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ejS.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.P1(this.b,C.hZk(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ejT.prototype={
$0(){Z.hcI()
B.a5(this.a,!1).N(null)},
$S:0}
C.cbe.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cbd.prototype={
$2(d,e){var w,v=this,u=null,t=B.dL(d,A.nf),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lH(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.dt
return B.fK(t,A.A,o,new C.cbc(),A.cn,w,!0,u,!1,new B.cz("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cbc.prototype={
$3(d,e,f){return D.aab},
$S:207}
C.fuB.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a7(A.ax,A.aD,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.da(r,0,B.dJ(6,"count",x.S),B.T(r).c)
u=r.$ti.k("J<aj.E,cK>")
r=B.B(new B.J(r,new C.fuA(e.b,e.d),u),u.k("aj.E"))
return B.bv(s,B.bX(new B.an(A.W,t,A.aa,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fuA.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b_o(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.ffv.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fft(d))
w=B.aI(d,A.bS,x.w).w
v=B.m(22)
u=B.I(A.bF,A.r,1)
t=B.a([new B.ad(0,A.G,A.w.j(0.45),A.fK,28)],x.V)
s=x.p
return new B.cX(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kS,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zb,q,q,!0,q,q,new C.ffu(p,d),q,B.fu(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.EJ,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.az,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aA,q,u,v,t,q,A.n),q,q,q,A.fH,A.ES,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q,q,q),q)},
$C:"$3",
$R:3,
$S:238}
C.fft.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pa())B.a5(w,!0).eH()},
$S:0}
C.ffu.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a5(this.b,!0).eH()},
$S:0}
C.eZ9.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dc(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dT(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dT(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dT(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dT(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.dc(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.dc(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.001
s.ft(r*3.14159)
return B.fr(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.001
s.jJ(r*3.14159)
return B.fr(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.002
s.ft(r*1.2)
s.jJ(r*0.5)
return B.fr(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.002
s.ft(-r*1.4)
return B.fr(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dc(B.e9(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.jr(u.b,A.q,new C.aHT(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.jr(u.b,A.q,new C.aHT(1-r,t))],x.p),t)
case 16:v=D.b0X.av(0,r)
return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dc(B.ei(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dl()
s.ms(r*6.28)
s.jt(r,r,r,1)
return B.fr(A.A,u.b,t,s,!0)
case 20:return B.eA(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:59}
C.dOx.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:11}
C.dOw.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:11}
C.dOv.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hcY(v,w,e)},
$S:59}
C.cb6.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a7(A.a3,A.a7,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.T(v).k("J<1,cK>")
q=B.B(new B.J(v,new C.cb5(q,w,e.b,e.d),s),s.k("aj.E"))
return B.bX(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:361}
C.cb5.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cg?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a6G(m,new C.U0(d,C.b_o(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d1v.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d1u(w))},
$S:11}
C.d1u.prototype={
$0(){return this.a.d++},
$S:0}
C.e7s.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aLa.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hVJ(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.0016
w=Math.sin(t)
s.e2(0,w*7,0,1)
s.ft(Math.sin(t)*0.32)
s.jJ(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jt(w,w,w,1)
return B.fr(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dT(B.e9(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.e9(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eOv.prototype={
$1(d){var w
$.X()
w=B.L()
w.b=A.ae
w.c=d
w.e=A.fy
return w},
$S:1693}
C.fsb.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.ged()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.boZ(u,t,r),A.at))
w.push(B.ni(s.d,A.aq,new C.bda(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bo0(u,q,t,r),A.at))
return B.av(new B.a6(v.a,v.b,new B.an(A.W,r,A.b_,A.q,w,r),r),r,r,r)},
$S:235}
C.fij.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:306}
C.eq3.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Cl(t.a.a.c),$async$$0)
case 3:s=e
r=J.a8(s)
if(r.gal(s)){u=null
w=1
break}u=r.dM(s,new C.eq1(),new C.eq2(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.eq1.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:183}
C.eq2.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.emr.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ems.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.emt.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eo1.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.enQ.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.enR.prototype={
$1(d){return d.hx()},
$S:z+81}
C.elP.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ep9.prototype={
$0(){this.a.t5()},
$S:0}
C.eq_.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nS()
w.Jt()},
$S:0}
C.eo_.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nS()
w.Jt()},
$S:0}
C.epN.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.epO.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epP.prototype={
$1(d){return d.a},
$S:z+22}
C.epQ.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b1,A.aN),$.aw())},
$S:258}
C.epR.prototype={
$0(){return B.kg(!0,null,!0,!0,null,null,!1)},
$S:649}
C.eld.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eq0.prototype={
$0(){},
$S:0}
C.en8.prototype={
$0(){var w=this.a
w.e=this.b.hx()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x_()
w.Jt()},
$S:0}
C.elb.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.x_()},
$S:0}
C.elc.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.x_()},
$S:0}
C.env.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.enw.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x_()
w.Jt()
w.z="Home"},
$S:0}
C.enx.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.en7.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,A.SV,w,w,!0,w,w,new C.en6(d),w,w)],x.p),w,w,w,D.fly,w,w,w,w,D.f3B,w)},
$S:19}
C.en6.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.en4.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,A.SV,w,w,!0,w,w,new C.en3(d),w,w)],x.p),w,w,w,D.f7t,w,w,w,w,D.f5h,w)},
$S:19}
C.en3.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.en5.prototype={
$0(){},
$S:0}
C.emn.prototype={
$1(d){return this.a.aYv(C.bA2(d))},
$S:z+7}
C.emo.prototype={
$1(d){return this.a.adB(C.bA2(d))},
$S:z+7}
C.ene.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.flC,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bu,new C.OH(A.vb,D.auz,"HATI YA KUHOWA","Hati ya mahari",new C.en9(d),w),A.S,new C.OH(A.h7,D.cWX,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ena(d),w),A.S,new C.OH(A.hY,D.cJl,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.enb(d),w),A.S,new C.OH(A.hI,D.cHG,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.enc(d),w)],v)
if(this.a.gaa8())A.d.v(u,B.a([A.S,new C.OH(A.iP,D.csP,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.end(d),w)],v))
return B.bo(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,E.xf,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:29}
C.en9.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.ena.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.enb.prototype={
$0(){B.a5(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.enc.prototype={
$0(){B.a5(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.end.prototype={
$0(){B.a5(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.enf.prototype={
$0(){var w=this.a
w.e=this.b.hx()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x_()},
$S:0}
C.elf.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.elg.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mU(r,v.f+1,q);++v.f
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
C.enq.prototype={
$1(d){return d.b===D.lg},
$S:z+4}
C.enr.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e5(new C.eno(w,this.a,v),null)},
$S:20}
C.eno.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.enp(p,o,a3,n),l=B.N(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bn:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.r,1),e=x.p,d=B.A(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bz,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.W(A.cw,j,q,q,q,q),q,q,q,new C.enk(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Bu[w]
v.a=null
t=v.a=u.a
a1.push(new C.bfE(t,u.b,p.a===t,i,k,new C.enl(v,m),q))}a1=B.c3(A.bE,a1,A.bw,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Bp[w]
s.a=null
t=s.a=r.a
u.push(new C.bfD(t,r.b,p.b===t,k,j,new C.enm(s,m),q))}return B.bo(!0,B.p(q,B.cd(B.v(B.a([d,A.aO,a0,A.S,a1,A.bu,v,A.S,B.c3(A.bE,u,A.bw,12,12),A.bu,new B.a6(1/0,48,B.ez(D.bMr,D.fnX,new C.enn(o,n),B.de(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aW4,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.q,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tf,D.bpm,q,q,q),!0,!1,A.ag,!0,!0)},
$S:96}
C.enp.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eni(w.a,d,e))
w.b.d1(new C.enj(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.eni.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.enj.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.enk.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.enl.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.enm.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.enn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.FZ(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d1(new C.enh(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.enh.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.ent.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.enu.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.ens(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mU(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x_()},
$S:0}
C.ens.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.enL.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.enM.prototype={
$1(d){return d.w},
$S:z+82}
C.enN.prototype={
$2(d,e){return d>e?d:e},
$S:86}
C.enO.prototype={
$1(d){var w=this,v=null,u=B.N(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bn:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.r,1),n=B.aI(d,A.bS,x.w).w,m=w.a,l=x.p,k=w.b
return B.bo(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bGd,A.f,v,v,D.aXs,v,38,v,v,v,v,v,38),A.bf,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.W(A.cw,s,v,v,v,v),v,v,v,new C.enI(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.az,new B.dm(1,A.ci,B.hE(v,new C.enJ(m,k,w.c,s,w.d,t,r),k.length,A.fw,v,A.ah,new C.enK(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tf,A.XA,v,v,v),!0,!1,A.ag,!0,!0)},
$S:29}
C.enI.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.enK.prototype={
$2(d,e){return A.ac},
$S:36}
C.enJ.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cs
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bJi,q,q,q,new C.enG(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.brB,n,q),B.aL(q,A.T,!1,q,!0,A.q,q,B.aM(),v,q,q,q,q,q,2,B.bq(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aVK),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.enH(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:658}
C.enG.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i0m(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geu()?p.a:q.a.length
n=p.geu()?p.b:q.a.length
m=A.a.on(q.a,o,n,s)
r.bM(0,new B.bb(m,B.h8(A.bt,o+s.length),A.aN))
l.ahB(k,m)
l.oT()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.enH.prototype={
$1(d){var w=this.a
w.ahB(this.b.a,d)
w.oT()},
$S:2}
C.enP.prototype={
$0(){},
$S:0}
C.eng.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.elw.prototype={
$0(){},
$S:0}
C.elx.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.heg(this.b,w,!0)
w=this.a
w.r=null
w.x_()},
$S:0}
C.ely.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.elz.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.elv(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mU(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x_()},
$S:0}
C.elv.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.enV.prototype={
$1(d){return B.oD(new C.enU(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:132}
C.enU.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.agt,B.v(B.a([D.fji,A.ao,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ib(!0,w,e,A.y,D.eHW,new C.enT(this.a,this.b),20,A.ti,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:353}
C.enT.prototype={
$2(d,e){var w=null,v=D.Gl[e],u=C.hwH(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fI,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bo,B.p(w,D.eC7,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mU,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aK(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a7(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.enS(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
$S:76}
C.enS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cbo(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.enW.prototype={
$0(){var w=this.a
w.e=this.b.hx()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x_()},
$S:0}
C.eka.prototype={
$0(){var w,v=this.a,u=v.gpU(),t=C.rd(4294967295,null,0,0,null,C.cC(),D.mn,"","","",D.dc),s=this.b
C.cbB(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.C2){t.e=w.e
t.f=w.f}A.d.cn(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.elu.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ad()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gU(v)
if(u.b(t)){s=Date.now()
r=$.iW
$.iW=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cn(v.e.r,v.f+1,C.h1v(q));++v.f},
$S:0}
C.els.prototype={
$0(){var w=this.a
A.d.cz(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eo3.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cz(v.e.r,u),s=this.c
A.d.cn(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.elo.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.eln(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eln.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eo2.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ele.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b1,A.aN),$.aw())},
$S:258}
C.elQ.prototype={
$0(){return B.kg(!0,null,!0,!0,null,null,!1)},
$S:649}
C.epL.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.epM.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.arJ(w).fD()
v=u.VC(w)
v.srO(B.h8(A.bt,v.a.a.length))},
$S:8}
C.epa.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.WB(v)
if(u!=null&&u.b===D.cQ)w.VC(u).saV(0,u.r)}else w.w=null},
$S:0}
C.ekb.prototype={
$0(){var w=C.cC(),v=this.a,u=C.en(A.bg,!1,v.gpU().e.l(),A.aB,"",4280640491,24,A.bm,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cg,D.cQ,0.7,0.15,0.2)
A.d.J(v.gdq().z,u)
v.r=u.a},
$S:0}
C.ek8.prototype={
$0(){var w=C.cC(),v=this.a,u=C.en(A.bg,!1,4279310375,A.aB,"",v.gpU().c.j(0.25).l(),24,A.bm,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpU().c.l(),2,"",0,0,"",D.cg,D.eZ,0.25,0.3,0.3)
A.d.J(v.gdq().z,u)
v.r=u.a},
$S:0}
C.ejZ.prototype={
$0(){var w=C.en(A.bg,!1,4279310375,A.aB,"",4280640491,24,A.bm,A.a4,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lg,0.6,0.2,0.18),v=this.a
A.d.J(v.gdq().z,w)
v.r=w.a},
$S:0}
C.ejW.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bSX],x.p)
for(w=J.aW(this.a);w.C();){v=w.gU(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaib().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bDY,r,r,r,r,new C.ejV(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bo(!0,B.cB(q,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:29}
C.ejV.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.ejX.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ad(),null),s=C.en(A.bg,!1,4279310375,A.aB,u.b,4280640491,24,A.bm,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cg,D.a3C,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdq().z,s)
t.r=s.a},
$S:0}
C.elq.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.elr.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdq().z,new C.elp(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.elp.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ekD.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.eZ){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ekE(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ekE.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ekI.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ekJ(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdq()
if(t!=null)v.$1(t)}},
$S:0}
C.ekJ.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ekG.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.ekH(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ekH.prototype={
$1(d){var w,v,u
for(w=A.d.gai(d.z),v=new B.h2(w,new C.ekF()),u=this.a;v.C();)w.gU(0).Q=u},
$S:z+1}
C.ekF.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ekC.prototype={
$0(){return C.cbB(this.b,this.c,this.a.gpU())},
$S:0}
C.enF.prototype={
$0(){return A.d.cn(this.a.d,0,this.b)},
$S:0}
C.epU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.epV.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.epW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.epX.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cn(s,0,v.b)
else{w=A.d.be(s,new C.epT(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRp()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hx()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.x_()
t.Jt()}},
$S:0}
C.epT.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.epq.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aac(),s=w.b,r=u.aad(A.f6,A.kI,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bu,B.p(v,B.A(B.a([B.D(u.aSK(w.c,A.ak),1),new B.C(A.fo,B.p(v,D.bE3,A.f,v,v,new B.o(A.f6.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aSK(s,A.f6),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a7(A.ax,A.aD,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.bu,u.aSN(A.f6,d,D.bA9,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bTZ(A.aX,d,A.tv,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.az)
p.push(u.aSL(d,"Not now"))
return new C.J6(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.epp.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.J6(B.v(B.a([v.aac(),A.P,v.aad(A.aX,D.bzP,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bS,x.w).w.a.b*0.42),B.hE(w,new C.epn(v,u,d),u.length,w,w,A.ah,new C.epo(),!0),w),A.az,v.aSL(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.epo.prototype={
$2(d,e){return A.S},
$S:36}
C.epn.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.r,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.alk,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bQ_,A.n),w,42,w,w,w,w,w,42),A.bf,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nc,w,w,w),A.d0,B.d("Updated "+this.a.P2(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.W(A.eo,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.epm(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
$S:76}
C.epm.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.epj.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aac()
t=t.aad(A.aJ,A.tE,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.J6(B.v(B.a([s,A.P,t,A.bu,B.A(B.a([B.D(B.dW(A.a6Y,new C.eph(d),B.de(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cf,u,new B.b7(B.m(14),A.Y),new B.aA(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bJ(D.f5R,new C.epi(d),B.bk(A.f6,u,u,u,A.c,u,A.cf,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eph.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.epi.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.epl.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aac(),s=w.b,r=u.aad(A.aU,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.D(u.at1("Names",""+w.c),1),A.ab,B.D(u.at1("Fields",""+w.d),1),A.ab,B.D(u.at1("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bj,v,v,v,A.c,v,A.x5,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.J6(B.v(B.a([t,A.P,r,A.aO,p,A.bu,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.na,v,v,v),new C.epk(d),o),A.S,u.aSM(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.epk.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.emj.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.emi.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.epb.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epK.prototype={
$1(d){var w=this.a,v=this.b
return new C.Zu(A.d.dM(w.d,new C.epI(v),new C.epJ(v)).hx(),w.f,null)},
$S:z+84}
C.epI.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.epJ.prototype={
$0(){return this.a},
$S:z+85}
C.ek3.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hm,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bFO,w,w,w,w,new C.ek1(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.f3V,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bGX,w,w,w,w,new C.ek2(d),!1,w,w,w,w,w,D.fp7,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dk,w,w,w),w,w,w))
return B.bo(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
C.ek1.prototype={
$0(){B.a5(this.a,!1).N("scroll")
return null},
$S:0}
C.ek2.prototype={
$0(){B.a5(this.a,!1).N("split")
return null},
$S:0}
C.ek4.prototype={
$0(){var w=this.b,v=w.c,u=C.en(A.bg,!1,4279310375,A.aB,v,4280640491,24,A.bm,A.a4,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cg,D.QQ,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdq().z,u)
v.r=u.a},
$S:0}
C.ek5.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iW
$.iW=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iW
$.iW=k+1
m.push(new C.eG(""+1000*l+"_"+k,D.QQ,0.04,0.06,0.92,0.88,v,24,A.a4,A.bm,A.aB,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cg,0,"","","","","",!1,0))
A.d.cn(j.e.r,i+q-1,new C.ly(""+1000*p+"_"+o,r+n,"",D.pM,4294967295,null,D.dc,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ek9.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.kp(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.en(A.bg,!1,4279310375,A.aB,t,4280640491,24,A.bm,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kN,0.35,0.55,0.62)
A.d.J(u.gdq().z,w)
u.r=w.a},
$S:0}
C.ek0.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b0e(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.en(A.bg,!1,4279310375,A.aB,"marriage_sign_placed_"+A.a.e7(v.db,"marriage_sign_",""),4280640491,24,A.bm,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kN,s,u,t)
A.d.J(p.gdq().z,q)
A.d.bn(p.gdq().z,new C.ek_(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hVs(p)}},
$S:0}
C.ek_.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eo0.prototype={
$0(){var w=this.a,v=this.b
w.b0e(v)
this.c.at=v.a
w.r=null},
$S:0}
C.epS.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.emm.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.eml())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eml.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ekM.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ekN.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.t5()},
$S:8}
C.ejY.prototype={
$0(){var w=C.en(A.bg,!1,4279310375,A.aB,"HD Photo",4280640491,24,A.bm,A.a4,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lg,0.8,0.1,0.1),v=this.a
A.d.J(v.gdq().z,w)
v.r=w.a},
$S:0}
C.elO.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ek6.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdq().z,v)
w.r=v.a},
$S:0}
C.ekf.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ekg.prototype={
$0(){var w=this.b.hx(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.en(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdq().z,f)
t.r=f.a},
$S:0}
C.ekh.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.be(w,new C.eke(v))
if(u>=0&&u<w.length-1){A.d.cz(w,u)
A.d.cn(w,u+1,v)}},
$S:0}
C.eke.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eks.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.be(w,new C.ekd(v))
if(u>0){A.d.cz(w,u)
A.d.cn(w,u-1,v)}},
$S:0}
C.ekd.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ekv.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.ekw.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ekx.prototype={
$0(){return this.a.as=A.dK},
$S:0}
C.eky.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ekz.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.ekA.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ekB.prototype={
$1(d){return d.length!==0},
$S:3}
C.eki.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.J(v,C.Cq(w.gpU().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdq().z
v=C.cC()
A.d.J(u,C.iQ(A.bg,!1,w.gpU().d.l(),A.aB,18,A.bm,A.I,0.07,v,"Document Header",0,D.dc,0.9,0.05,0.02))},
$S:0}
C.ekj.prototype={
$0(){var w,v=this.a,u=v.gdq().z,t=C.cC()
A.d.J(u,C.Cq(v.gpU().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdq().z
u=C.cC()
w=C.bAL()
A.d.J(t,C.iQ(A.L,!1,v.gpU().e.l(),A.aB,12,A.bm,A.a4,0.06,u,"Footer \xb7 "+w,0,D.dc,0.9,0.05,0.92))},
$S:0}
C.ekk.prototype={
$0(){A.d.J(this.a.gdq().z,C.Cq(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ekl.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdq().z,C.Cq(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.ekm.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.J(v,C.Cq(w.gpU().c.j(0.35).l(),0.12,u,D.C3,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdq().z,C.iQ(A.bg,!1,4279310375,A.aB,18,A.bm,A.a4,0.15,C.cC(),"Important note",0,D.pN,0.5,0.38,0.52))},
$S:0}
C.ekn.prototype={
$0(){var w=this.a
A.d.J(w.gdq().z,C.Cq(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdq().z,C.iQ(A.bg,!1,4279179050,A.aB,16,A.bm,A.a4,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bAL()+"\n\nSubject:\n\nBody text\u2026",0,D.dc,0.76,0.12,0.14))},
$S:0}
C.eko.prototype={
$0(){var w=this.a
A.d.J(w.gdq().z,C.Cq(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdq().z,C.iQ(A.bg,!1,4285611794,A.aB,15,A.bm,A.a4,0.24,C.cC(),"Sticky note",0,D.aDV,0.26,0.64,0.14))},
$S:0}
C.ekp.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdq().z,C.Cq(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdq().z,C.Cq(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.ekq.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdq().z,C.iQ(A.bg,!1,w,A.aB,18,A.bm,A.a4,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Hh,0.42,0.06,0.18))
A.d.J(v.gdq().z,C.iQ(A.bg,!1,w,A.aB,18,A.bm,A.a4,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.tV,0.42,0.52,0.18))},
$S:0}
C.ekr.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdq().z,C.Cq(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdq().z,C.Cq(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdq().z,C.iQ(A.bg,!1,w,A.aB,20,A.bm,A.I,0.1,C.cC(),"Option A",0,D.dc,0.36,0.08,0.2))
A.d.J(v.gdq().z,C.iQ(A.bg,!1,w,A.aB,20,A.bm,A.I,0.1,C.cC(),"Option B",0,D.dc,0.36,0.56,0.2))},
$S:0}
C.ekt.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdq().z,C.Cq(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.J(v.gdq().z,C.iQ(A.L,!1,w,A.aB,14,A.bm,A.a4,0.12,C.cC(),"[ QR CODE ]",0,D.dc,0.24,0.38,0.4))},
$S:0}
C.eku.prototype={
$0(){return C.cbB(this.b,D.QR,this.a.gpU())},
$S:0}
C.elN.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a5h.t(0,d),t=this.a
return t.b53(d,v===d,A.aZ,this.c,new C.elM(t,u,d,w),u)},
$S:z+25}
C.elM.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nK(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bBy(r,new C.elL(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.elL.prototype={
$0(){return this.a.d1(new C.elK(this.b,this.c))},
$S:0}
C.elK.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ek7.prototype={
$0(){var w,v=this.a,u=v.gpU(),t=C.rd(4294967295,null,0,0,null,C.cC(),D.mn,"","","",D.dc),s=this.b
C.cbB(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.C2){t.e=w.e
t.f=w.f}A.d.cn(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ekQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i0p(p,q.d,s,new C.ekP(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.t5(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ekP.prototype={
$1(d){return this.bhA(d)},
bhA(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.ekO(t,d))
w=2
return B.b(t.t5(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.ekO.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gU(w)
A.d.cn(v.d,0,u)}},
$S:0}
C.ekR.prototype={
$0(){return this.a.bFf()},
$S:0}
C.ekS.prototype={
$0(){return this.a.aOa("Class Presentation",!0)},
$S:0}
C.ekT.prototype={
$1(d){return this.a.bGb(d.b,this.b,d.a)},
$S:z+88}
C.elt.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bS,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.enE.prototype={
$1(d){return new B.C(new B.Q(0,0,0,B.aI(d,A.eC,x.w).w.f.d),new B.e5(new C.enD(this.a,this.b),null),null)},
$S:60}
C.enD.prototype={
$2(d,e){return B.oD(new C.enC(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:754}
C.enC.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aA:A.c,s=B.I(u?A.bF:A.aL,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.b5,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.afV,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bK(!1,A.zb,v,v,!0,v,v,new C.enA(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cB(B.a([p.aQN(u,!0,!0,new C.enB(p,w.d))],q),e,D.bnd,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kt,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.enA.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.enB.prototype={
$0(){this.b.$1(new C.eny())
var w=this.a
if(w.c!=null)w.m(new C.enz())},
$S:0}
C.eny.prototype={
$0(){},
$S:0}
C.enz.prototype={
$0(){},
$S:0}
C.epc.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:92}
C.epd.prototype={
$4(d,e,f,g){var w=A.cp.av(0,e.gp(0))
return B.dc(B.e9(A.A,new C.axl(this.a,null),0.94+w*0.06,null,null),w)},
$S:351}
C.epe.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:92}
C.epf.prototype={
$4(d,e,f,g){var w=A.cp.av(0,e.gp(0))
return B.dc(B.e9(A.A,new C.bb2(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:351}
C.epg.prototype={
$0(){return A.d.cn(this.a.d,0,C.UZ(this.b))},
$S:0}
C.ekc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dI.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.72)],t):B.a([A.c.j(0.88),A.p6.j(0.75)],t)
r=B.I(A.b2.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b2.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b2.j(0.45+q),A.r,1)
t=B.p(p,B.W(A0.Zn,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bv(o,B.tH(A.ft,B.p(p,B.v(B.a([t,A.az,q,A.ao,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.ay:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a7(A.ax,A.aD,A.x,s,p,p),A.n),p,p,p,p,A.ez,p,p,1/0),14,!1),A.aq)},
$S:280}
C.elh.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eli.prototype={
$1(d){return d.length!==0},
$S:3}
C.elj.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kd
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.ZT:A.AU}return w},
$S:704}
C.elm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dI.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.78)],s):B.a([A.c.j(0.92),A.mC.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.W(C.kp(v.w)?A.vb:A.pz,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a7(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.P2(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.P2(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.P2(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.P2(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.P2(v.f)
r=k.bG9(n,A.d.gL(r),t)
return B.p(l,B.bv(j,new B.a6R(B.aF(!1,A.a1,!0,l,B.aK(!1,l,!0,B.p(l,B.dN(!1,A.Lo,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.W(A.nH,t?A.ay:A.bI,l,l,l,l),l,l,l,new C.elk(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a7(A.ax,A.aD,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.ell(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.af),l),A.aq),A.f,l,l,l,l,l,l,A.db,l,l,l,l)},
$S:91}
C.ell.prototype={
$0(){return this.a.adB(this.b)},
$S:0}
C.elk.prototype={
$0(){return this.a.Am(this.b,this.c)},
$S:0}
C.emN.prototype={
$0(){var w=this.a
w.b3K()
w.m(new C.emM())},
$S:0}
C.emM.prototype={
$0(){},
$S:0}
C.emO.prototype={
$1(d){return this.a.ahB(this.b.a,d)},
$S:2}
C.emP.prototype={
$0(){this.a.d1(new C.emL(this.b))},
$S:0}
C.emL.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.emQ.prototype={
$0(){this.a.d1(new C.emK(this.b))},
$S:0}
C.emK.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bm:A.cD},
$S:0}
C.emR.prototype={
$0(){this.a.d1(new C.emJ(this.b))},
$S:0}
C.emJ.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aB:A.ms},
$S:0}
C.emS.prototype={
$0(){this.a.d1(new C.emI(this.b))},
$S:0}
C.emI.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.emT.prototype={
$0(){var w=this.a
w.d1(new C.emH(w,this.b))},
$S:0}
C.emH.prototype={
$0(){var w=this.b
return w.as=this.a.c_y(w.as)},
$S:0}
C.emU.prototype={
$0(){return this.a.d1(new C.emG(this.b))},
$S:0}
C.emG.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.emV.prototype={
$0(){return this.a.d1(new C.emF(this.b))},
$S:0}
C.emF.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.emy.prototype={
$0(){return this.a.a0Y(this.b.a)},
$S:0}
C.emz.prototype={
$0(){this.a.Zx()
return null},
$S:0}
C.emA.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bS,x.w).w.a.a<900)w.adU()
else w.m(new C.emx(w))},
$S:0}
C.emx.prototype={
$0(){return this.a.as=!0},
$S:0}
C.emB.prototype={
$0(){this.a.d1(new C.emw(this.b))},
$S:0}
C.emw.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.emC.prototype={
$0(){return this.a.d1(new C.emv(this.b))},
$S:0}
C.emv.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.emD.prototype={
$0(){return this.a.d1(new C.emu(this.b))},
$S:0}
C.emu.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.emE.prototype={
$0(){return this.a.axZ(null)},
$S:0}
C.elG.prototype={
$0(){this.a.D1()
return null},
$S:0}
C.elH.prototype={
$0(){this.a.a8M()
return null},
$S:0}
C.elJ.prototype={
$1(d){return this.bhB(d)},
bhB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Jk(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bY(A.aA,null,new C.elB(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d1(new C.elC(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.elD(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.elE(r))
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
return B.b(C.hfo(q,new C.DZ(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d1(new C.elF(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.afE(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:90}
C.elB.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e1m],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bFV:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.elA(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dk,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bo(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
C.elA.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.elC.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.elD.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.elE.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.elF.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.elI.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.ze(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.ze(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.ze(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.afE(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e6c,q,v,u,B.ze(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:138}
C.epY.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bAI(w,v)}},
$S:0}
C.epZ.prototype={
$0(){this.a.D1()
return null},
$S:0}
C.emY.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bPU:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.bv
return new B.C(A.fw,B.aE(u,B.dg(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bb,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lz,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.emX(t,d),u,u,u,u,u,u,!1,A.a9),u)},
$S:131}
C.emX.prototype={
$0(){var w=this.a
return w.m(new C.emW(w,this.b))},
$S:0}
C.emW.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.emZ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a1G:E.auF
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbJr():t.gbFA()
return B.ho(B.aE(u,B.p(u,D.akN,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ad(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a7(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a9),u,s,u,u)},
$S:1704}
C.en_.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i_F(v,w.a.c)},
$S:0}
C.eom.prototype={
$0(){return this.b.uM(this.a.a)},
$S:0}
C.eon.prototype={
$0(){return this.a.uM(D.mn)},
$S:0}
C.eoo.prototype={
$0(){return this.a.uM(D.Hf)},
$S:0}
C.eoz.prototype={
$0(){return this.a.uM(D.Hg)},
$S:0}
C.eoK.prototype={
$0(){return this.a.uM(D.He)},
$S:0}
C.eoV.prototype={
$0(){return this.a.pF("lab_report")},
$S:0}
C.ep1.prototype={
$0(){return this.a.pF("rubric")},
$S:0}
C.ep2.prototype={
$0(){return this.a.pF("minutes")},
$S:0}
C.ep3.prototype={
$0(){return this.a.pF("agenda")},
$S:0}
C.ep4.prototype={
$0(){return this.a.pF("timeline")},
$S:0}
C.ep5.prototype={
$0(){return this.a.pF(this.b.a)},
$S:0}
C.eop.prototype={
$0(){this.a.UM()
return null},
$S:0}
C.eoq.prototype={
$0(){this.a.UG()
return null},
$S:0}
C.eor.prototype={
$0(){return this.a.pF("table")},
$S:0}
C.eos.prototype={
$0(){return this.a.pF("sticky")},
$S:0}
C.eot.prototype={
$0(){return this.a.pF("divider")},
$S:0}
C.eou.prototype={
$0(){return this.a.pF("header_bar")},
$S:0}
C.eov.prototype={
$0(){return this.a.oD(D.be)},
$S:0}
C.eow.prototype={
$0(){return this.a.oD(D.eI)},
$S:0}
C.eox.prototype={
$0(){return this.a.oD(D.jx)},
$S:0}
C.eoy.prototype={
$0(){return this.a.oD(D.C3)},
$S:0}
C.eoA.prototype={
$0(){return this.a.oD(D.jy)},
$S:0}
C.eoB.prototype={
$0(){return this.a.oD(D.kO)},
$S:0}
C.eoC.prototype={
$0(){return this.a.oD(D.fp)},
$S:0}
C.eoD.prototype={
$0(){this.a.GH()
return null},
$S:0}
C.eoE.prototype={
$0(){this.a.MC()
return null},
$S:0}
C.eoF.prototype={
$0(){return this.a.pF("quote")},
$S:0}
C.eoG.prototype={
$0(){return this.a.a6V()},
$S:0}
C.eoH.prototype={
$0(){this.a.ZD()
return null},
$S:0}
C.eoI.prototype={
$0(){var w=this.a
return w.m(new C.eoc(w))},
$S:0}
C.eoc.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eoJ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nK(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eok(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eok.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eoL.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jz()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a5i.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b5
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.r,v?2.5:1),s,s,new B.a7(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a5i.t(0,q))u.push(B.ao(s,B.p(s,D.N5,A.f,s,s,D.Dk,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fw,B.aE(s,B.ho(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eoj(r,d),s,s,s,s,s,s,!1,A.a9),s)},
$S:z+89}
C.eoj.prototype={
$0(){this.a.a7c(this.b)
return null},
$S:0}
C.eoM.prototype={
$0(){this.a.a7b(this.b)
return null},
$S:0}
C.eoN.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hwI(d),p=this.a,o=B.m(8),n=p.gdq()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b5
v=p.gdq()
n=B.I(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rd(4294967295,r,0,0,r,"preview_"+w,D.pM,"","","",D.dc)
C.hcl(s,w)
w=x.p
u=B.a([B.bv(o,B.p(r,B.bv(t,C.hdF(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.all,A.f,r,r,D.Dk,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.j4,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.q,u,r),A.d0,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.ay:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eoi(p,q,d),r,r,r,r,r,r,!1,A.a9),r)},
$S:z+90}
C.eoi.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdq()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.nK(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d1(new C.eo8(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eo8.prototype={
$0(){return C.hcl(this.a,this.b.a)},
$S:0}
C.eol.prototype={
bhC(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a5h.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nK(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bhC(d,e)},
$S:z+91}
C.ep6.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("J<1,r>")
v=B.B(new B.J(d,new C.ep8(this.a,e,g,this.b,f),v),v.k("aj.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ)},
$S:z+92}
C.ep8.prototype={
$1(d){var w=this
return w.a.b53(d,w.b===d,w.c,w.d,new C.ep7(w.e,d),!D.a5h.t(0,d))},
$S:z+25}
C.ep7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eoO.prototype={
$1(d){this.b.$2(d,new C.eoh(this.a,d,this.c))
return null},
$S:z+26}
C.eoh.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bBy(u,new C.eo7(v,this.c,w),w)},
$S:0}
C.eo7.prototype={
$0(){return this.a.d1(new C.eo5(this.b,this.c))},
$S:0}
C.eo5.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eoP.prototype={
$1(d){this.b.$2(d,new C.eog(this.a,d))
return null},
$S:z+26}
C.eog.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fGP(u,new C.eo6(v,w),w)},
$S:0}
C.eo6.prototype={
$0(){var w=this.a
return w.d1(new C.eo4(w,this.b))},
$S:0}
C.eo4.prototype={
$0(){return this.a.gdq().r=this.b},
$S:0}
C.eoQ.prototype={
$0(){var w=this.a
return w.m(new C.eof(w))},
$S:0}
C.eof.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eoR.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bAI(w,v)}},
$S:0}
C.eoS.prototype={
$0(){this.a.Hu()
return null},
$S:0}
C.eoT.prototype={
$0(){return this.a.a6V()},
$S:0}
C.eoU.prototype={
$0(){var w=this.a,v=w.jz()
if(v!=null&&v.b===D.cQ)w.d1(new C.eoe(v))},
$S:0}
C.eoe.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eoW.prototype={
$0(){this.a.D1()
return null},
$S:0}
C.eoX.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.EF(v,!0)
return null},
$S:0}
C.eoY.prototype={
$0(){this.a.d1(new C.eod(this.b))},
$S:0}
C.eod.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.eoZ.prototype={
$0(){this.a.d1(new C.eob(this.b))},
$S:0}
C.eob.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bm:A.cD},
$S:0}
C.ep_.prototype={
$0(){this.a.d1(new C.eoa(this.b))},
$S:0}
C.eoa.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aB:A.ms},
$S:0}
C.ep0.prototype={
$0(){this.a.d1(new C.eo9(this.b))},
$S:0}
C.eo9.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ekL.prototype={
$1(d){return this.bhz(d)},
bhz(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nK(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d1(new C.ekK(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:177}
C.ekK.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ept.prototype={
$0(){var w=this.a
return w.d1(new C.eps(w,this.b))},
$S:0}
C.eps.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.epu.prototype={
$0(){var w=this.a
return w.d1(new C.epr(w,this.b))},
$S:0}
C.epr.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.elT.prototype={
$0(){return this.a.d1(new C.elS(this.b))},
$S:0}
C.elS.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.elU.prototype={
$0(){return this.a.d1(new C.elR(this.b))},
$S:0}
C.elR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.emq.prototype={
$1(d){var w=x.gh
w=B.B(new B.J(D.an1,new C.emp(),w),w.k("aj.E"))
return w},
$S:z+94}
C.emp.prototype={
$1(d){var w=null
return B.ze(B.d(d.b,w,w,w,w,w,w,A.mv,w,w,w),48,d,x.fO)},
$S:z+95}
C.epG.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a6(v,w?8:0,null,null)},
$S:36}
C.epF.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jV()?q:new C.epD(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b5:A.cm
v=B.I(v,A.r,o?2:1)
u=r.d?A.cC:A.c
t=B.bZ(0,C.hdF(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.q,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.n9,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.agO,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.epE(p,e),q,q,q,q,q,q,!1,A.a9)},
$S:75}
C.epE.prototype={
$0(){var w=this.a
return w.m(new C.epz(w,this.b))},
$S:0}
C.epz.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Jt()},
$S:0}
C.epD.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bY(null,null,new C.epA(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.epB(q,s))
q.aPy()}else if(r==="del"){q=t.a
q.m(new C.epC(q,s))
q.aOL()}else if(r==="up")t.a.b0r(s,s-1)
else if(r==="down")t.a.b0r(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epA.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bHy,w,w,w,w,new C.epv(d),!1,w,w,w,w,w,w,w,D.f4P,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bHr,w,w,w,w,new C.epw(d),!1,w,w,w,w,w,w,w,A.vY,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bGJ,w,w,w,w,new C.epx(d),!1,w,w,w,w,w,w,w,D.fcA,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIK,w,w,w,w,new C.epy(d),!1,w,w,w,w,w,w,w,D.f4E,w,w,w))
return B.bo(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
C.epv.prototype={
$0(){B.a5(this.a,!1).N("dup")
return null},
$S:0}
C.epw.prototype={
$0(){B.a5(this.a,!1).N("del")
return null},
$S:0}
C.epx.prototype={
$0(){B.a5(this.a,!1).N("up")
return null},
$S:0}
C.epy.prototype={
$0(){B.a5(this.a,!1).N("down")
return null},
$S:0}
C.epB.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.epC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.epH.prototype={
$0(){return this.a.a6V()},
$S:0}
C.ela.prototype={
$0(){var w=this.a
w.b3K()
w.axZ(null)},
$S:0}
C.el9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ad(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a7(A.ax,A.aD,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a7(A.ax,A.aD,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bv(s,B.bX(A.km,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.el8(this.a,e.b,e.d,q),B.T(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.ay:A.bI,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bX(new B.an(A.W,p,A.aa,A.f,s,new B.cz("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:361}
C.el8.prototype={
$1(d){var w=this
return w.a.bBy(d,w.b,w.c,w.d)},
$S:z+23}
C.ekY.prototype={
$0(){var w=this
if(w.b){w.a.ML(w.c)
return}if(w.d){w.a.a6T(w.c)
return}if(w.e){w.a.afc(w.c)
return}if(w.f)w.a.b4f(w.c)},
$S:0}
C.ekZ.prototype={
$0(){this.a.ML(this.b)
return null},
$S:0}
C.el_.prototype={
$0(){return this.a.a0Y(this.b.a)},
$S:0}
C.el0.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.ekX(u,d,w.c,w.d))
v.H8()
v.nS()
v.oT()},
$S:18}
C.ekX.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.el1.prototype={
$1(d){return this.a.ahB(this.b.a,d)},
$S:2}
C.el3.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fSp(w))u.a.ML(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b4f(v)},
$S:0}
C.el2.prototype={
$0(){return this.a.a0Y(this.b.a)},
$S:0}
C.el4.prototype={
$1(d){var w=this,v=w.a
v.m(new C.ekW(w.b,d,w.c,w.d))
v.H8()
v.nS()
v.oT()},
$S:18}
C.ekW.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.el5.prototype={
$1(d){var w=this.a
w.m(new C.ekV(this.b,d))
w.H8()
w.nS()
w.oT()},
$S:217}
C.ekV.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.el6.prototype={
$0(){var w=this.a
w.m(new C.ekU(this.b))
w.H8()
w.nS()
w.oT()},
$S:0}
C.ekU.prototype={
$0(){this.a.r=C.hda()},
$S:0}
C.el7.prototype={
$0(){return this.a.a0Y(this.b.a)},
$S:0}
C.en1.prototype={
$0(){var w=this.a
return w.m(new C.en0(w))},
$S:0}
C.en0.prototype={
$0(){return this.a.y=!1},
$S:0}
C.en2.prototype={
$1(d){return this.a.cxz(this.b.a,d)},
$S:2}
C.em6.prototype={
$1(d){var w
this.a.d1(d)
w=this.b
if(w!=null)w.$0()},
$S:164}
C.em7.prototype={
$1(d){return this.a.$1(new C.em5(this.b,d))},
$S:6}
C.em5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.em8.prototype={
$1(d){return this.a.$1(new C.em4(this.b,d))},
$S:6}
C.em4.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.em9.prototype={
$1(d){return this.a.$1(new C.em3(this.b,d))},
$S:6}
C.em3.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ema.prototype={
$1(d){return this.a.$1(new C.em2(this.b,d))},
$S:6}
C.em2.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.emb.prototype={
$1(d){return this.a.$1(new C.em1(this.b,d))},
$S:6}
C.em1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.emc.prototype={
$1(d){return this.b.$1(new C.em0(this.a,this.c))},
$S:9}
C.em0.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.emd.prototype={
$1(d){return this.b.$1(new C.em_(this.a,this.c))},
$S:9}
C.em_.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eme.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.elZ(this.a,v,d),w,w,w,w,w,w,!1,A.a9)},
$S:462}
C.elZ.prototype={
$0(){return this.a.$1(new C.elW(this.b,this.c))},
$S:0}
C.elW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.emf.prototype={
$1(d){return this.a.$1(new C.elY(this.b,d))},
$S:1705}
C.elY.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.emg.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.elX(this.a,this.b,d),w,w,w,w,w,w,!1,A.a9)},
$S:462}
C.elX.prototype={
$0(){return this.a.$1(new C.elV(this.b,this.c))},
$S:0}
C.elV.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.emh.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pa()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eH()}v.a.aqI()},
$S:0}
C.emk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dI.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b2,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.W(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.W(A.tE,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mT,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aK(!1,m,!0,B.ex(new B.a6(48,48,new B.an(A.A,n,A.aa,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a7(A.ax,A.aD,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.af)},
$S:130}
C.ejU.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dI.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b2,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.r,1)
return B.aF(!1,A.a1,!0,p,B.aK(!1,o,!0,B.ex(B.v(B.a([B.e9(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jB,A.L,p,p)],x.p),A.m,p,A.ba,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ax,A.aD,A.x,u,p,p),A.n),p,A.EN,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.af)},
$S:130}
C.enZ.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aL(w,A.T,!0,w,!0,A.q,w,B.aM(),u,w,w,w,w,w,2,A.amb,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.eh(B.a([B.bK(!1,A.dd,w,w,!0,w,w,new C.enX(d),w,w),B.bJ(A.oT,new C.enY(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.enX.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.enY.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).N(w)
return null},
$S:0}
C.cYy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dI.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dX.av(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gL(C.kp(j.a.c.w)?D.tN:M.n0),w*0.35)
t.toString
t=B.I(t,A.r,1.2)
s=x.V
r=B.a([new B.ad(w*2,A.G,A.d.gL(C.kp(j.a.c.w)?D.tN:M.n0).j(0.18+w*0.12),A.J,32+w*10),D.a9G],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.b0,0.9,A.x,k,0,B.a([A.d.gL(C.kp(j.a.c.w)?D.tN:M.n0).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.kp(j.a.c.w)?D.tN:M.n0).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.x,k,0,B.a([m,A.d.gam(C.kp(j.a.c.w)?D.tN:M.n0).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kp(m)?D.tN:M.n0
s=B.a([new B.ad(0,A.G,A.d.gL(C.kp(m)?D.tN:M.n0).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.e9(A.A,B.p(k,B.W(C.kp(j.a.c.w)?A.vb:A.pz,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a7(A.ax,A.aD,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.q,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kp(j.a.c.w)?D.tN:M.n0).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fV,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eYb,A.L,k,k),A.au,B.d(j.gcsH(),k,k,k,k,k,k,D.f1F,A.L,k,k),A.az],m)
p=j.a.c
if(p.z){p=p.gRp()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kp(j.a.c.w)?D.tN:M.n0).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.J_(A.xy,"Download PDF","pdf",A.d4,j.Im(0),!1,k))
p=j.a.c
if(!p.z||p.gRp()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ao,new C.J_(A.kI,"Transfer to "+C.hdc(p==null?"":p),"transfer_hati",A.aU,j.Im(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Im(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ao,new C.J_(D.bzc,"Rename presentation","rename",A.c8,n,!1,k),A.ao,new C.J_(A.air,"Duplicate","duplicate",A.b4,j.Im(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.J_(A.e4,"Delete presentation","delete",A.aC,j.Im(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Im(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Im(n)
s.push(B.dT(B.dc(B.bK(!1,E.aOO,k,k,!0,k,k,new C.cYx(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,A.at,k,D.bqi,k,k,k,k,k,A.kg,k,k)),n),new B.u(0,(1-p)*8)))
return B.e9(A.A,B.dc(B.aF(!1,A.a1,!0,k,B.p(k,B.bv(q,new B.an(A.W,k,A.aa,A.q,B.a([o,new B.C(D.bpr,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Uk,new B.o(A.aA,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.af),i),0.88+u*0.12,k,k)},
$S:45}
C.cYx.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.cYU.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cYV.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cYv.prototype={
$1(d){var w=this.a
return w.m(new C.cYr(w))},
$S:23}
C.cYr.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cYw.prototype={
$1(d){var w=this.a
return w.m(new C.cYq(w))},
$S:49}
C.cYq.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cYu.prototype={
$0(){var w=this.a
return w.m(new C.cYs(w))},
$S:0}
C.cYs.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cYt.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.eqE.prototype={
$0(){return $.biw=!$.biw},
$S:0}
C.equ.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaSD())u.aux()},
$S:0}
C.eqD.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eqv.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eqw.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.aux()},
$S:0}
C.eqq.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.eqr.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eqs.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eqt.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eqB.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.q,w,null)},
$S:1706}
C.eqC.prototype={
$2(d,e){var w
if(e.gc2(e)===A.hR)return new B.cX(e,!1,d,null)
w=this.a
return w.cqI(w.e,d,e)},
$S:348}
C.eqx.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
v=this.a
w.ft((1-v.gp(0))*1.5708)
return B.fr(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.eqy.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
v=this.a
w.jJ((1-v.gp(0))*1.5708)
return B.fr(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.eqz.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.002
v=this.a
w.ft(v.gp(0)*0.8)
w.jJ(v.gp(0)*0.35)
return B.fr(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.eqA.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.0025
v=this.a
w.ft(-v.gp(0)*1.2)
return B.fr(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.eqF.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gXP().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gXP().x
t===$&&B.c()
return new C.b_p(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.HY(v.c,t,!0,new B.cz("cine"+u,x.W))},
$S:497}
C.eqH.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bS,x.w).w.a.a*0.55)w.aux()
else w.cfs()},
$S:49}
C.eqG.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fxk.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:346}
C.fxt.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eh(B.a([B.bK(!1,A.dd,w,w,!0,w,w,new C.fxq(d),w,w),B.bK(!1,D.fjB,w,w,!0,w,w,new C.fxr(d,this.b,v),w,w),B.bJ(A.aP4,new C.fxs(d,v,this.c),w)],x.p),w,w,L.rY,new B.a6(320,w,t,w),w,w,w,w,D.fl0,w)},
$S:19}
C.fxq.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fxr.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
C.fT3(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fxs.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aOq(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aNQ(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fxj.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cbE.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:589}
C.fxp.prototype={
$1(d){return d.ad()},
$S:z+14}
C.f6f.prototype={
$1(d){return C.fT1(C.UZ(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fG4.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:92}
C.fG5.prototype={
$4(d,e,f,g){var w=A.cp.av(0,e.gp(0))
return B.dc(B.e9(A.A,D.fH7,0.94+w*0.06,null,null),w)},
$S:351}
C.fG6.prototype={
$1(d){var w=this
return new C.V0(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eqa.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eq6.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eq9.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.V1(u,this.b,w.gaM7(),v,null)},
$S:z+99}
C.eq7.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eq8.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eqb.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eqc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eqf.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eqg.prototype={
$0(){var w=this.a
return w.m(new C.eqe(w))},
$S:0}
C.eqe.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eqh.prototype={
$0(){var w=this.a
return w.m(new C.eqd(w))},
$S:0}
C.eqd.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eqi.prototype={
$1(d){return this.a.bGa(d,this.b)},
$S:z+100}
C.eq5.prototype={
$0(){var w=this.a
return w.m(new C.eq4(w,this.b))},
$S:0}
C.eq4.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eqj.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eqk.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eql.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eqm.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eqn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fH(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.eKV)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ejO.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.ejN())},
$S:0}
C.ejN.prototype={
$0(){},
$S:0}
C.ejP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fD()},
$S:8}
C.ejK.prototype={
$1(d){return this.a.m(new C.ejJ())},
$S:2}
C.ejJ.prototype={
$0(){},
$S:0}
C.ejL.prototype={
$1(d){return this.a.aXm()},
$S:2}
C.ejM.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eqp.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eqo(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqo.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.frE.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.et(new B.k9(this.c,new C.frD(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:219}
C.frD.prototype={
$3(d,e,f){return new C.HY(e,!1,!1,new B.cz(e.a,x.W))},
$S:z+102}
C.frF.prototype={
$1(d){var w=null
return B.oa(!1,B.av(new C.bsT(this.a,this.b,w),w,w,w),w,x.z)},
$S:285}
C.frJ.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gmi(),$async$$0)
case 3:w=4
return B.b(B.bN(A.mQ,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gmi(),$async$$0)
case 5:s=$.aT.ak$.x.h(0,t.a)
r=s==null?null:s.gb7()
if(!(r instanceof B.ql))throw B.U("Could not draw the slide.")
u=r.m2(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.frK.prototype={
bi7(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hl(A.fS),$async$$1)
case 3:r=f
if(r==null)throw B.U("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.fa(A.dF.gaP(r))],"image/png"))
t.toString
s=Am.fJY(t)
w=4
return B.b(new B.pN(s,"load",!1,x.ev).gL(0).cN(0,A.jm),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bi7(d)},
$S:1710}
C.frG.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:143}
C.frH.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fK(0)},
$S:143}
C.frI.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f0B.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eUL,A.L,w,w)},
$S:1711}
C.f0C.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bv(v,B.mf(A.bn,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:676}
C.e8j.prototype={
$1(d){this.a.YZ()
return null},
$S:14}
C.e8h.prototype={
$0(){return this.a.e=D.blt},
$S:0}
C.e8i.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cec.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.ced.prototype={
$2(d,e){return(d|e)>>>0},
$S:74};(function aliases(){var w=C.aKq.prototype
w.bsF=w.q
w=C.aJU.prototype
w.bs7=w.q
w=C.aJF.prototype
w.brS=w.q
w=C.aJT.prototype
w.bs6=w.q
w=C.aKo.prototype
w.bsD=w.q
w=C.aLJ.prototype
w.bu7=w.q
w=C.aIA.prototype
w.bqK=w.q
w=C.aKC.prototype
w.bsR=w.q
w=C.aKD.prototype
w.bsS=w.q
w=C.b14.prototype
w.bno=w.aB0})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hYz","ama",104)
v(C.aHz.prototype,"gc_T","XW",0)
var r
u(r=C.aw9.prototype,"gcs1","cs2",38)
v(r,"gc0E","abW",0)
v(r=C.aw5.prototype,"gaVX","Du",3)
v(r,"gc0B","c0C",3)
v(r,"gauP","xf",0)
v(r,"gauQ","I1",0)
t(C,"hYY","hut",105)
v(C.aCe.prototype,"gc32","c33",3)
s(C,"hZ8",0,null,["$4$paper$photo$request$template"],["fyJ"],106,0)
s(C,"hZ7",0,null,["$5$doc$history$instruction$photo$template"],["bA0"],107,0)
v(r=C.aCx.prototype,"gc3J","Ij",0)
v(r,"gbFD","VO",0)
v(r,"gc3M","acJ",0)
v(r,"gc3L","YL",0)
v(r,"gaX1","DL",0)
v(C.aCB.prototype,"gc3R","YN",0)
v(r=C.aDZ.prototype,"gaXe","OZ",0)
v(r,"gcka","b0x",3)
v(r,"gcts","aze",86)
v(r,"gbJh","a8Q",0)
v(r,"gc4h","A_",0)
v(r=C.aFT.prototype,"gcec","a_6",0)
v(r,"gcek","a_9",0)
v(r,"gbyD","a7i",0)
v(r,"gc4l","acV",0)
v(C.aFS.prototype,"gc4m","acW",0)
v(C.azS.prototype,"gbxC","a75",0)
v(C.ayf.prototype,"gc4n","YY",0)
w(C,"hZl","hXg",12)
w(C,"hZj","hUd",12)
w(C,"hZk","hWg",12)
v(r=C.aCR.prototype,"gcwv","cww",3)
v(r,"gcir","cis",3)
u(r,"gDR","adB",7)
v(r,"gbDf","apT",3)
u(r,"gDS","aYv",7)
v(r,"gc6u","adi",0)
v(r,"gc5l","adh",0)
v(r,"gc8E","adC",0)
v(r,"gbFA","a8r",0)
v(r,"gc9x","Zx",0)
v(r,"gc9y","adT",0)
v(r,"gca4","ae_",0)
v(r,"gc8R","adF",0)
v(r,"gbJr","a8U",0)
v(r,"gaPx","aPy",3)
v(r,"gaOK","aOL",3)
v(r,"gaKs","aKt",3)
v(r,"gaOJ","aqI",3)
u(r,"gbxT","bxU",80)
v(r,"gayN","b3x",3)
v(r,"gc5n","c5o",3)
v(r,"gbUi","bUj",3)
v(r,"gbI0","bI1",3)
v(r=C.aCU.prototype,"gcvs","cvt",3)
v(r,"gcv7","cv8",3)
t(C,"hZm","hXx",2)
v(r=C.aCS.prototype,"gc4t","Io",0)
v(r,"gcm7","Qq",0)
v(r,"gc4q","In",0)
v(r,"gcxK","a1A",0)
v(r,"gcag","ae6",0)
v(C.aCQ.prototype,"gc4u","aXm",3)
v(r=C.aCT.prototype,"gbKc","a93",0)
u(r,"gc4r","c4s",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nH,C.QT,C.bFA,C.bDW,C.cu1,C.cu_,C.bLw,C.b6K,C.cu0,C.bCw,C.ce6,C.ce4,C.ce5,C.ce3,C.arj,C.ce2,C.bMp,C.o8,C.aDs,C.jg,C.nu,C.a6Q,C.z1,C.l7,C.ok,C.lW,C.z3,C.ny,C.a6Y,C.apH,C.b_q,C.e7J,C.l4,C.E7,C.er,C.iU,C.DZ,C.xc,C.eG,C.ly,C.hY,C.jz,C.a6Z,C.adW,C.b_r,C.b14,C.a1P])
u(B.kc,[C.cBS,C.bWM,C.fmQ,C.cDn,C.cCK,C.fsm,C.dUA,C.dUz,C.e8m,C.e8l,C.ftL,C.f7m,C.f7n,C.ca1,C.ca2,C.ca3,C.ecK,C.eLc,C.eKA,C.eKz,C.eLD,C.eLa,C.eL3,C.eLm,C.eM2,C.fea,C.eRZ,C.eRY,C.eSr,C.e7M,C.fxg,C.dQj,C.fDD,C.fu7,C.cbw,C.cbu,C.cbz,C.fuC,C.fuD,C.fuE,C.fuF,C.cbg,C.cbh,C.dCX,C.cbd,C.fuB,C.eZ9,C.dOv,C.cb6,C.e7s,C.fsb,C.eno,C.enN,C.enK,C.enJ,C.enU,C.enT,C.epo,C.epn,C.enD,C.enC,C.ekc,C.elm,C.eol,C.epG,C.epF,C.el9,C.emk,C.ejU,C.cYy,C.eqB,C.eqC,C.eqx,C.eqy,C.eqz,C.eqA,C.eqF,C.cbE,C.eqa,C.eql,C.ced])
u(B.hS,[C.cBT,C.cBU,C.bMq,C.fkp,C.bWL,C.bWO,C.fA7,C.f_7,C.eZZ,C.f_e,C.f6g,C.f6h,C.fmR,C.fmP,C.fzC,C.fk5,C.fAt,C.cDd,C.cDi,C.cDk,C.cDg,C.cDl,C.cDe,C.cDm,C.cD9,C.cD6,C.cD5,C.cDc,C.cCF,C.cCD,C.fro,C.frp,C.faE,C.fsn,C.fst,C.f9H,C.c6k,C.frm,C.frn,C.fmc,C.fmd,C.fss,C.fso,C.fsq,C.fsr,C.fsp,C.fDV,C.fmg,C.fmh,C.fmk,C.fml,C.fmo,C.fmp,C.fFn,C.f7N,C.fFy,C.ebE,C.ebF,C.ebG,C.ebm,C.eby,C.ebz,C.ebB,C.ca0,C.c9Z,C.ca_,C.fs2,C.fs4,C.fs3,C.f7o,C.f7p,C.fFB,C.ecP,C.ecQ,C.ecH,C.ecI,C.ecL,C.ecM,C.fFR,C.eM3,C.eLt,C.eLd,C.eLq,C.eKv,C.eKw,C.eKx,C.eKB,C.eKC,C.eLT,C.eM_,C.eM1,C.eLC,C.eLE,C.eLI,C.eLJ,C.eLK,C.eLO,C.eLF,C.eLG,C.eKN,C.eKO,C.eKP,C.eKQ,C.eKR,C.eKS,C.eKT,C.eKU,C.eKV,C.eK8,C.eK9,C.eKa,C.eKb,C.eKd,C.eKe,C.eKH,C.eKI,C.eKJ,C.eKK,C.eKL,C.eKi,C.eKj,C.eKk,C.eKl,C.eL2,C.eLl,C.fpr,C.fpq,C.cbn,C.fe9,C.fxc,C.fx5,C.fx8,C.fv5,C.fv6,C.fv7,C.fpy,C.fpx,C.fpw,C.fpu,C.f7j,C.f7k,C.f7l,C.fG2,C.eS0,C.eS1,C.eRV,C.eRP,C.eSk,C.eSl,C.eSn,C.eSo,C.eSj,C.fG1,C.eRG,C.fdp,C.e7L,C.fxe,C.fxf,C.fxh,C.fxa,C.fxb,C.fFf,C.dfl,C.dfr,C.e7K,C.f3Q,C.f3S,C.f3R,C.f3P,C.fqC,C.fqE,C.f5P,C.fwH,C.fwI,C.fwJ,C.fwU,C.fwZ,C.fx_,C.fx0,C.fx1,C.fx2,C.fx3,C.fx4,C.fwK,C.fwL,C.fwM,C.fwN,C.fwO,C.fwP,C.fwQ,C.fwR,C.fwS,C.fwT,C.fwV,C.fwW,C.fwX,C.fwY,C.fos,C.fdc,C.fdb,C.fxn,C.dQk,C.dQi,C.eQQ,C.c5W,C.c5Y,C.fDF,C.d4G,C.d4I,C.fDE,C.fDC,C.fG0,C.fu3,C.d4g,C.fms,C.fmt,C.cbl,C.cbm,C.cbk,C.cba,C.cbb,C.cb7,C.cb8,C.cb9,C.cbC,C.cbx,C.cbs,C.cbt,C.cbv,C.cby,C.cbA,C.fuG,C.cbf,C.cbi,C.cbj,C.cbp,C.cbq,C.fxu,C.fwB,C.cbe,C.cbc,C.fuA,C.ffv,C.cb5,C.eOv,C.fij,C.eq1,C.emr,C.ems,C.eo1,C.enQ,C.enR,C.elP,C.epN,C.epO,C.epP,C.eld,C.env,C.enx,C.en7,C.en4,C.emn,C.emo,C.ene,C.elf,C.enq,C.enr,C.enp,C.ent,C.ens,C.enL,C.enM,C.enO,C.enH,C.ely,C.elv,C.enV,C.eln,C.epM,C.ejW,C.elq,C.elp,C.ekE,C.ekJ,C.ekH,C.ekF,C.epU,C.epV,C.epW,C.epT,C.epq,C.epp,C.epj,C.epl,C.epb,C.epK,C.epI,C.ek3,C.ek_,C.eml,C.ekN,C.eke,C.ekd,C.ekA,C.ekB,C.elN,C.ekP,C.ekT,C.enE,C.epc,C.epd,C.epe,C.epf,C.elh,C.eli,C.elj,C.emO,C.elJ,C.elB,C.elI,C.emY,C.emZ,C.eoL,C.eoN,C.ep6,C.ep8,C.eoO,C.eoP,C.ekL,C.emq,C.emp,C.epA,C.el8,C.el0,C.el1,C.el4,C.el5,C.en2,C.em6,C.em7,C.em8,C.em9,C.ema,C.emb,C.emc,C.emd,C.eme,C.emf,C.emg,C.enZ,C.cYv,C.cYw,C.eqH,C.fxk,C.fxt,C.fxj,C.fxp,C.f6f,C.fG4,C.fG5,C.fG6,C.eq9,C.eqi,C.ejP,C.ejK,C.ejL,C.frE,C.frD,C.frF,C.frK,C.frG,C.frH,C.f0B,C.f0C,C.e8j,C.cec])
u(B.j2,[C.cBV,C.f_3,C.f_8,C.f_9,C.f_4,C.f_5,C.f_6,C.eZX,C.eZY,C.f__,C.f_0,C.f_d,C.f_c,C.f_2,C.f_1,C.f_a,C.f_b,C.f_g,C.f_h,C.f_f,C.cDf,C.cDj,C.cDh,C.cD7,C.cD8,C.cDa,C.cD3,C.cD4,C.cDb,C.cD2,C.cD1,C.cD0,C.cCu,C.cCt,C.cCw,C.cCE,C.cCx,C.cCv,C.cCz,C.cCA,C.cCB,C.cCy,C.cCC,C.cCG,C.cCH,C.cCI,C.cCJ,C.fma,C.fmb,C.fm8,C.fm9,C.e37,C.e35,C.e36,C.e38,C.e39,C.dUy,C.fme,C.fmf,C.fmi,C.fmj,C.fmm,C.fmn,C.e8k,C.fua,C.fu9,C.ebD,C.ebC,C.ebg,C.ebc,C.ebn,C.ebo,C.ebp,C.ebi,C.ebj,C.ebk,C.ebl,C.ebh,C.ebe,C.ebf,C.ebv,C.ebw,C.ebu,C.ebx,C.ebt,C.ebs,C.ebr,C.ebA,C.ebq,C.ebd,C.ecO,C.ecC,C.ecD,C.ecJ,C.ecE,C.ecG,C.ecF,C.ecN,C.eKW,C.eLj,C.eKF,C.eKG,C.eKD,C.eKE,C.eLp,C.eLo,C.eLn,C.eLs,C.eLr,C.eKu,C.eKy,C.eKt,C.eKs,C.eKp,C.eKr,C.eKq,C.eM0,C.eLU,C.eLS,C.eLV,C.eLR,C.eLW,C.eLQ,C.eLX,C.eLY,C.eLZ,C.eLP,C.eLB,C.eLw,C.eLH,C.eLA,C.eLL,C.eLz,C.eLM,C.eLy,C.eLN,C.eLx,C.eLg,C.eLf,C.eLh,C.eLe,C.eLi,C.eL8,C.eL7,C.eL9,C.eL6,C.eL5,C.eL4,C.eKc,C.eK7,C.eKm,C.eKh,C.eKn,C.eKg,C.eKo,C.eKf,C.eLb,C.eL_,C.eKZ,C.eL0,C.eKY,C.eL1,C.eKX,C.eLk,C.eLv,C.eLu,C.eKM,C.fx7,C.fx9,C.fxd,C.fpv,C.frW,C.frU,C.frV,C.eS2,C.eS3,C.eS_,C.eRU,C.eRT,C.eRW,C.eRX,C.eRJ,C.eRK,C.eRM,C.eRN,C.eRO,C.eRL,C.eRQ,C.eSg,C.eSh,C.eSf,C.eSi,C.eSe,C.eSd,C.eSc,C.eSm,C.eSb,C.eSa,C.eS9,C.eSp,C.eS8,C.eSq,C.eS7,C.eS6,C.eRR,C.eRS,C.eS5,C.eS4,C.eRC,C.eRD,C.eRE,C.eRF,C.eRB,C.eRH,C.eRI,C.dfk,C.dfm,C.dfp,C.dfq,C.dfo,C.dfn,C.fqD,C.fot,C.c5X,C.c5Z,C.d4z,C.d4E,C.d4F,C.d4D,C.d4C,C.d4H,C.d4B,C.d4A,C.d4J,C.fDB,C.dbk,C.dbl,C.dbm,C.fmq,C.fmr,C.cbD,C.ejQ,C.ejR,C.ejS,C.ejT,C.fft,C.ffu,C.dOx,C.dOw,C.d1v,C.d1u,C.eq3,C.eq2,C.emt,C.ep9,C.eq_,C.eo_,C.epQ,C.epR,C.eq0,C.en8,C.elb,C.elc,C.enw,C.en6,C.en3,C.en5,C.en9,C.ena,C.enb,C.enc,C.end,C.enf,C.elg,C.eni,C.enj,C.enk,C.enl,C.enm,C.enn,C.enh,C.enu,C.enI,C.enG,C.enP,C.eng,C.elw,C.elx,C.elz,C.enS,C.enW,C.eka,C.elu,C.els,C.eo3,C.elo,C.eo2,C.ele,C.elQ,C.epL,C.epa,C.ekb,C.ek8,C.ejZ,C.ejV,C.ejX,C.elr,C.ekD,C.ekI,C.ekG,C.ekC,C.enF,C.epX,C.epm,C.eph,C.epi,C.epk,C.emj,C.emi,C.epJ,C.ek1,C.ek2,C.ek4,C.ek5,C.ek9,C.ek0,C.eo0,C.epS,C.emm,C.ekM,C.ejY,C.elO,C.ek6,C.ekf,C.ekg,C.ekh,C.eks,C.ekv,C.ekw,C.ekx,C.eky,C.ekz,C.eki,C.ekj,C.ekk,C.ekl,C.ekm,C.ekn,C.eko,C.ekp,C.ekq,C.ekr,C.ekt,C.eku,C.elM,C.elL,C.elK,C.ek7,C.ekQ,C.ekO,C.ekR,C.ekS,C.elt,C.enA,C.enB,C.eny,C.enz,C.epg,C.ell,C.elk,C.emN,C.emM,C.emP,C.emL,C.emQ,C.emK,C.emR,C.emJ,C.emS,C.emI,C.emT,C.emH,C.emU,C.emG,C.emV,C.emF,C.emy,C.emz,C.emA,C.emx,C.emB,C.emw,C.emC,C.emv,C.emD,C.emu,C.emE,C.elG,C.elH,C.elA,C.elC,C.elD,C.elE,C.elF,C.epY,C.epZ,C.emX,C.emW,C.en_,C.eom,C.eon,C.eoo,C.eoz,C.eoK,C.eoV,C.ep1,C.ep2,C.ep3,C.ep4,C.ep5,C.eop,C.eoq,C.eor,C.eos,C.eot,C.eou,C.eov,C.eow,C.eox,C.eoy,C.eoA,C.eoB,C.eoC,C.eoD,C.eoE,C.eoF,C.eoG,C.eoH,C.eoI,C.eoc,C.eoJ,C.eok,C.eoj,C.eoM,C.eoi,C.eo8,C.ep7,C.eoh,C.eo7,C.eo5,C.eog,C.eo6,C.eo4,C.eoQ,C.eof,C.eoR,C.eoS,C.eoT,C.eoU,C.eoe,C.eoW,C.eoX,C.eoY,C.eod,C.eoZ,C.eob,C.ep_,C.eoa,C.ep0,C.eo9,C.ekK,C.ept,C.eps,C.epu,C.epr,C.elT,C.elS,C.elU,C.elR,C.epE,C.epz,C.epD,C.epv,C.epw,C.epx,C.epy,C.epB,C.epC,C.epH,C.ela,C.ekY,C.ekZ,C.el_,C.ekX,C.el3,C.el2,C.ekW,C.ekV,C.el6,C.ekU,C.el7,C.en1,C.en0,C.em5,C.em4,C.em3,C.em2,C.em1,C.em0,C.em_,C.elZ,C.elW,C.elY,C.elX,C.elV,C.emh,C.enX,C.enY,C.cYx,C.cYU,C.cYV,C.cYr,C.cYq,C.cYu,C.cYs,C.cYt,C.eqE,C.equ,C.eqD,C.eqv,C.eqw,C.eqq,C.eqr,C.eqs,C.eqt,C.eqG,C.fxq,C.fxr,C.fxs,C.eq6,C.eq7,C.eq8,C.eqb,C.eqc,C.eqf,C.eqg,C.eqe,C.eqh,C.eqd,C.eq5,C.eq4,C.eqj,C.eqk,C.eqm,C.eqn,C.ejO,C.ejN,C.ejJ,C.ejM,C.eqp,C.eqo,C.frJ,C.frI,C.e8h,C.e8i])
t(C.aPL,B.H)
u(B.m0,[C.a2M,C.avC,C.aui,C.xa,C.xd,C.kJ,C.rZ,C.AX,C.rc,C.vE,C.aqg,C.HZ,C.apG,C.ur,C.mm,C.hv,C.a7A])
u(C.bLw,[C.cu2,C.bLx])
u(C.ce6,[C.cea,C.ari])
t(C.ce9,C.ce4)
t(C.ce8,C.ce3)
t(C.ceb,C.ce8)
t(C.ce7,C.ce5)
t(C.ce1,C.ce2)
t(C.b8i,B.oB)
t(C.co_,B.atK)
t(C.a7m,B.wX)
t(C.aU6,B.dF)
t(C.aza,B.asD)
u(B.ag,[C.a_O,C.XB,C.Xz,C.aoS,C.UM,C.UP,C.ZS,C.a_m,C.a_l,C.aCq,C.YK,C.ME,C.Yi,C.YD,C.amT,C.aHg,C.U0,C.axZ,C.a6G,C.N4,C.axl,C.J_,C.Zu,C.V0,C.V1,C.aCP,C.apL,C.a6H])
u(B.ah,[C.aHz,C.aw9,C.aw5,C.aCe,C.aCx,C.aCB,C.aDZ,C.aFT,C.aFS,C.aKq,C.azS,C.aJU,C.ayf,C.be7,C.aJF,C.aLJ,C.aJT,C.bc1,C.aKo,C.aKC,C.aIA,C.baO,C.aKD,C.aCS,C.biv,C.aCQ,C.aCT,C.bie])
u(B.au,[C.aw7,C.ac4,C.abu,C.bhh,C.ac7,C.adM,C.b_2,C.bqv,C.b_m,C.bjP,C.bp5,C.aYh,C.b_p,C.aca,C.acs,C.b_n,C.HY,C.aYk,C.bb2,C.OH,C.J6,C.bfE,C.bfD,C.bsT])
u(B.Gy,[C.bav,C.brU,C.aHT,C.bda,C.bpt])
u(B.mD,[C.bau,C.b71,C.bpq,C.ba1,C.bdy,C.bfK,C.bcE,C.bdv,C.bdc,C.bm_,C.b8a,C.b7O,C.bsQ,C.bpT,C.bp1,C.bcx,C.b_k,C.bo0,C.boZ])
t(C.bib,C.aKq)
t(C.bhy,C.aJU)
t(C.bhj,C.aJF)
t(C.bsm,C.aLJ)
t(C.bhv,C.aJT)
t(C.bi9,C.aKo)
t(C.bva,C.aKC)
t(C.aCR,C.bva)
t(C.baP,C.aIA)
t(C.aCU,C.aKD)
t(C.bsH,B.iN)
t(C.a7z,B.kk)
t(C.cee,C.b14)
t(C.agU,C.a1P)
u(B.WC,[C.aPB,C.aR4])
t(C.avd,C.aPB)
w(C.aKq,B.c8)
w(C.aJU,B.c8)
w(C.aJF,B.c8)
w(C.aJT,B.c8)
w(C.aKo,B.c8)
w(C.aLJ,B.c8)
w(C.aIA,B.eQ)
w(C.aKC,B.c8)
v(C.bva,B.eu)
w(C.aKD,B.c8)})()
B.jR(b.typeUniverse,JSON.parse('{"aQk":{"hD":["aQk"]},"nH":{"aQk":[],"hD":["aQk"]},"aPL":{"H":["QT"],"H.E":"QT"},"b8i":{"oB":[]},"a7m":{"wX":[],"o2":[]},"aU6":{"dF":[],"cx":[],"r":[]},"aza":{"aS":[],"d4":["aS"],"aR":[],"cu":[]},"a_O":{"ag":[],"r":[]},"aHz":{"ah":["a_O"]},"XB":{"ag":[],"r":[]},"Xz":{"ag":[],"r":[]},"aw9":{"ah":["XB"]},"aw5":{"ah":["Xz"]},"aw7":{"au":[],"r":[]},"aoS":{"ag":[],"r":[]},"aCe":{"ah":["aoS"]},"ac4":{"au":[],"r":[]},"abu":{"au":[],"r":[]},"ac7":{"au":[],"r":[]},"adM":{"au":[],"r":[]},"bhh":{"au":[],"r":[]},"UM":{"ag":[],"r":[]},"aCx":{"ah":["UM"]},"b_2":{"au":[],"r":[]},"bav":{"aB":[]},"bau":{"aB":[]},"brU":{"aB":[]},"b71":{"aB":[]},"bpq":{"aB":[]},"UP":{"ag":[],"r":[]},"aCB":{"ah":["UP"]},"ba1":{"aB":[]},"ZS":{"ag":[],"r":[]},"aDZ":{"ah":["ZS"]},"bdy":{"aB":[]},"a_m":{"ag":[],"r":[]},"a_l":{"ag":[],"r":[]},"aCq":{"ag":[],"r":[]},"YK":{"ag":[],"r":[]},"aFT":{"ah":["a_m"]},"aFS":{"ah":["a_l"]},"bib":{"ah":["aCq"]},"bfK":{"aB":[]},"azS":{"ah":["YK"]},"bqv":{"au":[],"r":[]},"b_m":{"au":[],"r":[]},"bjP":{"au":[],"r":[]},"ME":{"ag":[],"r":[]},"Yi":{"ag":[],"r":[]},"bhy":{"ah":["ME"]},"bp5":{"au":[],"r":[]},"bcE":{"aB":[]},"aYh":{"au":[],"r":[]},"ayf":{"ah":["Yi"]},"YD":{"ag":[],"r":[]},"be7":{"ah":["YD"]},"bdv":{"aB":[]},"bdc":{"aB":[]},"bm_":{"aB":[]},"b8a":{"aB":[]},"b7O":{"aB":[]},"bsQ":{"aB":[]},"bpT":{"aB":[]},"bp1":{"aB":[]},"bcx":{"aB":[]},"amT":{"ag":[],"r":[]},"b_p":{"au":[],"r":[]},"bhj":{"ah":["amT"]},"aca":{"au":[],"r":[]},"acs":{"au":[],"r":[]},"aHg":{"ag":[],"r":[]},"U0":{"ag":[],"r":[]},"HY":{"au":[],"r":[]},"axZ":{"ag":[],"r":[]},"a6G":{"ag":[],"r":[]},"b_n":{"au":[],"r":[]},"b_k":{"aB":[]},"bsm":{"ah":["aHg"]},"aHT":{"aB":[]},"bhv":{"ah":["U0"]},"bc1":{"ah":["axZ"]},"bi9":{"ah":["a6G"]},"aYk":{"au":[],"r":[]},"bda":{"aB":[]},"bo0":{"aB":[]},"boZ":{"aB":[]},"axl":{"ag":[],"r":[]},"J_":{"ag":[],"r":[]},"Zu":{"ag":[],"r":[]},"J6":{"au":[],"r":[]},"N4":{"ag":[],"r":[]},"aCR":{"ah":["N4"],"eu":[]},"baP":{"ah":["axl"]},"bb2":{"au":[],"r":[]},"baO":{"ah":["J_"]},"OH":{"au":[],"r":[]},"aCU":{"ah":["Zu"]},"bpt":{"aB":[]},"bfE":{"au":[],"r":[]},"bfD":{"au":[],"r":[]},"V0":{"ag":[],"r":[]},"V1":{"ag":[],"r":[]},"aCP":{"ag":[],"r":[]},"apL":{"ag":[],"r":[]},"aCS":{"ah":["V0"]},"biv":{"ah":["V1"]},"aCQ":{"ah":["aCP"]},"bsH":{"iN":[]},"aCT":{"ah":["apL"]},"bsT":{"au":[],"r":[]},"a6H":{"ag":[],"r":[]},"bie":{"ah":["a6H"]},"a7z":{"kk":["fq<eJ>"],"k6":["fq<eJ>"]},"agU":{"a1P":[]},"aPB":{"iY":[],"fd":[]},"avd":{"iY":[],"fd":[]},"aR4":{"iY":[],"fd":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("KT"),U:w("va<pM>"),bz:w("w"),M:w("eU<n>"),bo:w("jt"),g7:w("Lo"),gc:w("ay<is?>"),bq:w("ay<~>"),cc:w("a3S"),fS:w("Dp"),an:w("aku"),bm:w("O<QT>"),X:w("O<a1X>"),f3:w("O<aQk>"),aK:w("O<mY>"),V:w("O<ad>"),O:w("O<w>"),fA:w("O<lq>"),d5:w("O<ay<bu<G,+icon3d,picture(n?,n?)>>>"),bH:w("O<ay<dC>>"),fG:w("O<ay<~>>"),aF:w("O<n2>"),cd:w("O<ak<jg>>"),ez:w("O<a4<n,aC>>"),d:w("O<a4<n,@>>"),B:w("O<mi>"),h:w("O<jg>"),gE:w("O<z1>"),k:w("O<o8>"),g:w("O<ly>"),D:w("O<hY>"),u:w("O<eG>"),m:w("O<ur>"),i:w("O<hv>"),aC:w("O<a6Y>"),o:w("O<z3>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hm>"),cR:w("O<iL>"),J:w("O<j8>"),gx:w("O<oW<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(P,P)>"),ek:w("O<+(G,n)>"),n:w("O<+(G,G)>"),r:w("O<cP>"),s:w("O<n>"),aS:w("O<iN>"),p:w("O<r>"),eR:w("O<fd>"),fT:w("O<b6K>"),bx:w("O<aDs>"),gz:w("O<adW>"),x:w("O<P>"),t:w("O<G>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<G?>"),cA:w("O<cj>"),A:w("cs<ah<ag>>"),gL:w("ak<o8>"),R:w("ak<hY>"),j:w("ak<@>"),bW:w("ak<G>"),e:w("bu<G,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<G,+icon3d,picture(n?,n?)>"),bR:w("J<hv,r>"),eC:w("J<ny,n>"),cT:w("J<jz,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<G,pq>"),gh:w("J<mm,ji<mm>>"),w:w("iy"),ei:w("is"),g2:w("r2"),fB:w("DZ"),b6:w("z1"),gX:w("a6Q"),dt:w("l7"),ea:w("o8"),bt:w("ly"),I:w("hY"),F:w("eG"),fO:w("mm"),ff:w("ur"),fP:w("hv"),Q:w("vE"),dO:w("apH"),a:w("cn"),C:w("aC"),dw:w("arj"),di:w("a7A"),Y:w("eJ"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Et"),dB:w("dA<u>"),bJ:w("dA<n>"),_:w("dZ<n>"),N:w("n"),fw:w("pM"),bO:w("ar"),K:w("bm<u>"),b:w("bm<P>"),E:w("dC"),W:w("cz<n>"),ac:w("cz<G>"),ex:w("k9<ly>"),cI:w("k9<n>"),cl:w("k9<P>"),b4:w("a2<l4>"),a8:w("a2<lW>"),fR:w("a2<+(n,n)>"),co:w("e6<u>"),l:w("r"),b2:w("bS<~>"),ev:w("pN<dU>"),dT:w("bg<~>"),cQ:w("aza"),q:w("mQ"),y:w("R"),gR:w("P"),z:w("@"),S:w("G"),at:w("b9?"),gw:w("ak<a4<n,@>>?"),aT:w("ak<hY>?"),c:w("ak<@>?"),aP:w("is?"),af:w("hY?"),go:w("b_r?"),a6:w("a6Z?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dC,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aTs=new B.bI(A.ax,null,null,P.alW,null)
D.aTC=new B.d8(0,-0.15)
D.aTE=new B.d8(0.62,0)
D.aTH=new B.d8(-0.35,-0.45)
D.aTR=new B.d8(0.9,-0.85)
D.aJQ=new B.aV(30,30)
D.aV8=new B.bs(D.aJQ,D.aJQ,A.hc,A.hc)
D.aVm=new B.aA(A.b4,1,A.r,-1)
D.bdo=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aVy=new B.aA(D.bdo,1,A.r,-1)
D.aVK=new B.aA(A.aE,1.5,A.r,-1)
D.aVP=new B.aA(A.b4,1.6,A.r,-1)
D.aW4=new B.aA(A.aE,1.4,A.r,-1)
D.aXs=new B.o(null,null,null,null,null,K.G1,A.a6)
D.bR1=new B.a7(A.a3,A.a7,A.x,G.a1G,null,null)
D.aXA=new B.o(null,null,null,null,null,D.bR1,A.a6)
D.a9w=new B.o(A.aA,null,null,A.ry,null,null,A.n)
D.b7F=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bdm=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cNE=w([D.b7F,D.bdm],x.O)
D.e7z=new B.bR(A.A,0.5,A.x,null,0,D.cNE,null,null)
D.aXT=new B.o(null,null,null,null,null,D.e7z,A.a6)
D.VL=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aWk=new B.bP(O.uv,A.Y,A.Y,A.Y)
D.aXV=new B.o(D.VL,null,D.aWk,null,null,null,A.n)
D.bSK=new B.a7(A.a3,A.a7,A.x,A.Pc,null,null)
D.aY1=new B.o(null,null,null,null,null,D.bSK,A.a6)
D.aaZ=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aY3=new B.o(D.aaZ,null,null,A.rz,null,null,A.n)
D.aY7=new B.o(A.k7,null,null,null,null,null,A.a6)
D.aWr=new B.bP(A.zB,A.Y,A.Y,A.Y)
D.aYa=new B.o(A_.abZ,null,D.aWr,A.lU,null,null,A.n)
D.Dk=new B.o(A.dS,null,null,null,null,null,A.a6)
D.aYh=new B.o(null,null,null,null,null,E.vq,A.a6)
D.cSk=w([E.acM,A.bV],x.O)
D.bSm=new B.a7(A.b0,A.b6,A.x,D.cSk,null,null)
D.aYl=new B.o(null,null,null,A.lU,null,D.bSm,A.n)
D.d1v=w([A.bj,A.dS,A.jH],x.O)
D.a_S=new B.a7(A.ax,A.aD,A.x,D.d1v,null,null)
D.aYy=new B.o(null,null,null,null,null,D.a_S,A.n)
D.aYz=new B.o(D.aaZ,null,null,A.kt,null,null,A.n)
D.ciL=w([A.dp,A.bj],x.O)
D.bSe=new B.a7(A.ax,A.aD,A.x,D.ciL,null,null)
D.aYD=new B.o(null,null,null,null,null,D.bSe,A.n)
D.aYN=new B.o(null,null,null,null,null,G.tG,A.a6)
D.aZ5=new B.o(A.acN,null,null,null,null,null,A.a6)
D.b8o=new B.w(0.5647058823529412,0,0,0,A.t)
D.a9G=new B.ad(0,A.G,D.b8o,A.R1,28)
D.b0c=new B.aUj()
D.b0L=new C.co_()
D.b0X=new C.b8i()
D.aab=new B.cq(A.A,null,null,A.a_H,null)
D.b3o=new B.fh(null,null,null,null,null,E.mJ,null,null,null,null)
D.b1t=new B.cq(A.A,null,null,D.b3o,null)
D.bC8=new B.ae(A.dV,28,A.c,null,null,null)
D.b1W=new B.cq(A.A,null,null,D.bC8,null)
D.b3l=new B.fh(2,null,null,null,null,A.bU,null,null,null,null)
D.b2h=new B.cq(A.A,null,null,D.b3l,null)
D.bCu=new B.ae(K.MT,40,A.bL,null,null,null)
D.b2i=new B.cq(A.A,null,null,D.bCu,null)
D.b4a=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b4m=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b4L=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b4R=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b5m=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b5D=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b5E=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.JX=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b62=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b67=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.abe=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b6O=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b7u=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.abu=new B.w(1,1,1,0.9725490196078431,A.t)
D.b7M=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b7X=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b8_=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b89=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b8t=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b9N=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Vv=new B.w(0.8509803921568627,0,0,0,A.t)
D.b9V=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.ba0=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.acf=new B.w(0.6,0,0,0,A.t)
D.ach=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bbp=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rV=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bbP=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bcd=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bcz=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acY=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.VV=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.Aa=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Ko=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iZ=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.adm=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.W3=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bfF=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bg7=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bgk=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Wn=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bhn=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.wT=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bhP=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bi6=new B.hC(A.b5,!0,null,null)
D.f_W=new B.F(!0,A.ay,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp_=new B.x("Bio link",null,D.f_W,null,null,null,null,null,null,null,null,null)
D.b2b=new B.cq(A.A,null,null,D.fp_,null)
D.bim=new B.hC(A.UU,!0,D.b2b,null)
D.KO=new C.a2M(0,"none")
D.aeo=new C.a2M(1,"deflate")
D.aep=new C.a2M(2,"bzip2")
D.bj3=new B.ke(0.165,0.84,0.44,1)
D.cSD=w([A.cb,A.dO,A.aE],x.O)
D.bRu=new B.a7(A.ax,A.aD,A.x,D.cSD,null,null)
D.aXx=new B.o(null,null,null,null,null,D.bRu,A.n)
D.bLf=new B.ae(A.eR,null,A.ad,null,null,null)
D.b2M=new B.cq(A.A,null,null,D.bLf,null)
D.bjB=new B.kG(D.aXx,A.bd,D.b2M,null)
D.bfV=new B.w(0.058823529411764705,1,1,1,A.t)
D.cVI=w([A.bF,A.qn,A.qn,D.bfV],x.O)
D.czM=w([0,0.32,0.7,1],x.x)
D.bS3=new B.a7(A.ax,A.aD,A.x,D.cVI,D.czM,null)
D.aXm=new B.o(null,null,null,null,null,D.bS3,A.n)
D.bjH=new B.kG(D.aXm,A.bd,null,null)
D.bkH=new B.m9(1,1,null,null,null,A.bn,null)
D.bkK=new B.m9(1,null,null,null,null,D.W3,null)
D.bld=new B.b9(125e4)
D.blj=new B.b9(17e4)
D.blt=new B.b9(35964e8)
D.blz=new B.b9(55e4)
D.blD=new B.b9(68e4)
D.bm3=new B.i8(0,0,0,5)
D.bmk=new B.Q(0,16,16,0)
D.bmn=new B.Q(0,18,0,8)
D.bmv=new B.Q(0,36,0,36)
D.bmC=new B.Q(0,54,0,0)
D.bmJ=new B.Q(10,0,10,3)
D.bmU=new B.i8(10,16,10,10)
D.bn4=new B.Q(10,6,4,6)
D.bn7=new B.Q(10,8,10,6)
D.afk=new B.Q(11,8,11,11)
D.bnc=new B.Q(12,0,12,10)
D.bnd=new B.Q(12,0,12,24)
D.bnp=new B.Q(12,12,12,4)
D.bns=new B.Q(12,12,8,12)
D.bnH=new B.Q(12,8,8,12)
D.bo3=new B.Q(14,14,14,0)
D.bo8=new B.Q(14,14,14,90)
D.bor=new B.Q(16,10,16,16)
D.bos=new B.Q(16,10,16,20)
D.ag7=new B.Q(16,6,16,28)
D.bp0=new B.Q(18,0,18,10)
D.bp2=new B.Q(18,0,18,30)
D.bp4=new B.Q(18,10,18,12)
D.bp5=new B.Q(18,10,18,14)
D.bpm=new B.Q(18,16,14,18)
D.bpr=new B.Q(18,18,18,12)
D.bpx=new B.Q(18,26,18,12)
D.bpC=new B.Q(18,34,18,34)
D.bpD=new B.Q(18,4,18,14)
D.bpJ=new B.Q(18,8,18,24)
D.bq0=new B.Q(20,16,14,4)
D.bq5=new B.Q(20,18,12,4)
D.bqa=new B.Q(20,20,12,20)
D.bqd=new B.Q(20,22,20,20)
D.bqi=new B.Q(20,6,20,6)
D.bqs=new B.Q(22,18,22,18)
D.bqA=new B.Q(22,24,22,0)
D.bqD=new B.Q(22,24,22,4)
D.bqL=new B.Q(22,60,22,22)
D.bqR=new B.Q(24,24,24,22)
D.br0=new B.Q(26,10,60,10)
D.br7=new B.Q(28,44,28,44)
D.bro=new B.Q(32,44,32,44)
D.brw=new B.Q(38,30,38,20)
D.brB=new B.Q(4,0,0,6)
D.brM=new B.i8(4,4,4,4)
D.bsb=new B.i8(6,5,6,5)
D.bsf=new B.Q(6,6,8,6)
D.bsq=new B.Q(8,14,8,14)
D.bsr=new B.Q(8,22,8,22)
D.bsA=new B.Q(8,6,12,6)
D.bsJ=new B.Q(8,8,8,4)
D.ah_=new B.Q(9,9,9,6)
D.bsS=new B.i8(2.5,2.5,2.5,2.5)
D.bsT=new B.Q(10.5,0,10.5,0)
D.bsU=new B.Q(7,1.5,7,1.5)
D.cKU=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bt9=new B.ys(null,null,D.cKU,A.zO)
D.cI6=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bta=new B.ys(null,null,D.cI6,A.zO)
D.aOu=new B.F(!0,A.ay,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foj=new B.x("WORD DESIGN",null,D.aOu,null,null,null,null,null,null,null,null,null)
D.btG=new B.bE(1,A.bi,D.foj,null)
D.fo_=new B.x("Slides database",null,Ab.vS,null,null,null,null,null,null,null,null,null)
D.fll=new B.x("Admin only \xb7 keep as many as you like",null,U.aO_,null,null,null,null,null,null,null,null,null)
D.d8X=w([D.fo_,A.bz,D.fll],x.p)
D.biM=new B.fl(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.d8X,null)
D.btJ=new B.bE(1,A.bi,D.biM,null)
D.fg6=new B.x("NGMY logo",null,A.fW,null,null,null,null,null,null,null,null,null)
D.btM=new B.bE(1,A.bi,D.fg6,null)
D.eYQ=new B.F(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new B.x("TALK TO THE EDITOR",null,D.eYQ,null,null,null,null,null,null,null,null,null)
D.bu0=new B.bE(1,A.bi,D.fqc,null)
D.fa4=new B.x("Tell the AI what to change",null,Ab.vS,null,null,null,null,null,null,null,null,null)
D.buk=new B.bE(1,A.bi,D.fa4,null)
D.bva=new B.De(!0,"video/mp4")
D.eX8=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8j=new B.x("Move presentations between devices",null,D.eX8,null,null,null,!1,null,null,1,null,null)
D.bve=new B.q5(A.eg,A.a3,A.f,D.f8j,null)
D.f9l=new B.x("Edit in Slides",null,A.jB,null,null,null,null,null,null,null,null,null)
D.bvf=new B.q5(A.eg,A.A,A.f,D.f9l,null)
D.bvu=new B.dm(1,A.ci,D.bvf,null)
D.Zb=new B.a0(60988,"MaterialIcons",!1)
D.bxI=new B.a0(61352,"MaterialIcons",!1)
D.aiv=new B.a0(61531,"MaterialIcons",!1)
D.byU=new B.a0(63062,"MaterialIcons",!1)
D.bz1=new B.a0(63109,"MaterialIcons",!1)
D.bzc=new B.a0(63206,"MaterialIcons",!1)
D.aje=new B.a0(63238,"MaterialIcons",!1)
D.ZH=new B.a0(63365,"MaterialIcons",!1)
D.ZI=new B.a0(63367,"MaterialIcons",!1)
D.ZJ=new B.a0(63368,"MaterialIcons",!1)
D.ajq=new B.a0(63384,"MaterialIcons",!1)
D.bzM=new B.a0(63525,"MaterialIcons",!1)
D.bzP=new B.a0(63568,"MaterialIcons",!1)
D.bA9=new B.a0(983072,"MaterialIcons",!1)
D.bAx=new B.a0(983271,"MaterialIcons",!0)
D.akC=new B.a0(983965,"MaterialIcons",!1)
D.akD=new B.a0(983966,"MaterialIcons",!1)
D.bBu=new B.a0(984592,"MaterialIcons",!1)
D.bBM=new B.ae(A.ts,16,A.ay,null,null,null)
D.bBT=new B.ae(A.mf,null,A.c,null,null,null)
D.akN=new B.ae(A.py,18,A.c,null,null,null)
D.bC9=new B.ae(A.AT,18,N.l_,null,null,null)
D.bCQ=new B.ae(A.j9,11,null,null,null,null)
D.bD_=new B.ae(A.Zr,null,A.es,null,null,null)
D.bDy=new B.ae(A.qL,18,A.ay,null,null,null)
D.bDE=new B.ae(A2.B5,14,null,null,null,null)
D.bDF=new B.ae(A.e4,28,A.cr,null,null,null)
D.bDR=new B.ae(A.pz,20,A.c,null,null,null)
D.bDY=new B.ae(A.xO,null,null,null,null,null)
D.bE3=new B.ae(A.j7,18,A.ht,null,null,null)
D.bE8=new B.ae(A.l5,null,null,null,null,null)
D.bEB=new B.ae(A.ZY,28,A.c,null,null,null)
D.byX=new B.a0(63065,"MaterialIcons",!1)
D.bEK=new B.ae(D.byX,15,A.c,null,null,null)
D.bz2=new B.a0(63113,"MaterialIcons",!1)
D.bEQ=new B.ae(D.bz2,null,A.ad,null,null,null)
D.bFd=new B.ae(A.v8,22,A.bJ,null,null,null)
D.bFx=new B.ae(A.v9,18,null,null,null,null)
D.bFD=new B.ae(A.B8,12,A.c,null,null,null)
D.bB6=new B.a0(983687,"MaterialIcons",!1)
D.bFO=new B.ae(D.bB6,null,A.bj,null,null,null)
D.bFV=new B.ae(A.hw,null,A.bj,null,null,null)
D.bGd=new B.ae(A.ox,22,A.c,null,null,null)
D.bGh=new B.ae(A.cw,13,A.c,null,null,null)
D.bGn=new B.ae(A.e4,26,A.aC,null,null,null)
D.bGq=new B.ae(A.qQ,26,A.c,null,null,null)
D.N5=new B.ae(A.j9,8,A.c,null,null,null)
D.bGI=new B.ae(A.py,40,A.c,null,null,null)
D.bGJ=new B.ae(A.bwF,null,null,null,null,null)
D.bGN=new B.ae(A.tA,20,null,null,null,null)
D.bB5=new B.a0(983683,"MaterialIcons",!1)
D.bGX=new B.ae(D.bB5,null,A.aZ,null,null,null)
D.bGY=new B.ae(A.j9,16,A.bj,null,null,null)
D.bHi=new B.ae(A.qR,null,null,null,null,null)
D.alk=new B.ae(A.vb,22,A.c,null,null,null)
D.bHm=new B.ae(A.dV,17,A.c,null,null,null)
D.all=new B.ae(A.j9,9,A.c,null,null,null)
D.bHr=new B.ae(A.v5,null,null,null,null,null)
D.bwW=new B.a0(57744,"MaterialIcons",!1)
D.bHy=new B.ae(D.bwW,null,null,null,null,null)
D.bHB=new B.ae(A.v5,16,null,null,null,null)
D.bBD=new B.a0(985181,"MaterialIcons",!1)
D.FT=new B.ae(D.bBD,null,null,null,null,null)
D.bHN=new B.ae(A.l5,16,A.bJ,null,null,null)
D.bAZ=new B.a0(983615,"MaterialIcons",!1)
D.bHP=new B.ae(D.bAZ,12,A.c,null,null,null)
D.alr=new B.ae(A.xv,16,null,null,null,null)
D.bHX=new B.ae(A.dV,21,A.c,null,null,null)
D.bI1=new B.ae(A.hw,17,A.c,null,null,null)
D.bI2=new B.ae(A.v8,null,null,null,null,null)
D.bIh=new B.ae(A.a_l,20,A.ay,null,null,null)
D.bIw=new B.ae(A.px,22,E.mJ,null,null,null)
D.bID=new B.ae(A.pw,13,A.ad,null,null,null)
D.bIF=new B.ae(A.ako,20,A.ay,null,null,null)
D.bwD=new B.a0(57495,"MaterialIcons",!1)
D.bIK=new B.ae(D.bwD,null,null,null,null,null)
D.bIO=new B.ae(A.nH,18,A.c,null,null,null)
D.bJ8=new B.ae(A.tE,28,A.c,null,null,null)
D.bJi=new B.ae(D.aje,null,A.aE,null,null,null)
D.bJj=new B.ae(A.pz,22,A.c,null,null,null)
D.alA=new B.ae(A.Z7,16,null,null,null,null)
D.bK4=new B.ae(A.v8,32,A.c,null,null,null)
D.bKN=new B.ae(A.iP,22,A.c,null,null,null)
D.bKR=new B.ae(A.qQ,22,A.ad,null,null,null)
D.alP=new B.ae(A.ts,null,A.c_,null,null,null)
D.bLK=new B.ae(A.tr,18,null,null,null,null)
D.bMl=new B.ae(A.dV,18,A.cq,null,null,null)
D.a_K=new B.ae(A.cw,18,A.ay,null,null,null)
D.bMr=new B.ae(A.aki,null,null,null,null,null)
D.bMR=new B.e_(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aOh,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ex,!0,null,null,null,null)
D.ePv=new B.F(!0,A.bI,null,null,null,null,null,A.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bN8=new B.e_(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.ePv,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ex,!0,null,null,null,null)
D.bNz=new B.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ex,!0,null,null,null,null)
D.cOz=w([A.dS,A.aE],x.O)
D.bPj=new B.a7(A.a3,A.a7,A.x,D.cOz,null,null)
D.bPv=new B.a7(A.b0,A.b6,A.T2,A.asT,null,null)
D.b4B=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b8w=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bbq=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b6G=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.czO=w([D.b4B,D.b8w,D.bbq,D.b6G],x.O)
D.bPO=new B.a7(A.ax,A.aD,A.x,D.czO,A.Gr,null)
D.d93=w([A.cy,A.bA,A.b4],x.O)
D.bPQ=new B.a7(A.b0,A.b6,A.T2,D.d93,null,null)
D.dal=w([A.bj,A.c8],x.O)
D.bPU=new B.a7(A.a3,A.a7,A.x,D.dal,null,null)
D.d5E=w([A.hs,A.dj,A.aJ],x.O)
D.bPW=new B.a7(A.ax,A.aD,A.x,D.d5E,null,null)
D.cUc=w([A.cY,A.f6],x.O)
D.bQ_=new B.a7(A.a3,A.a7,A.x,D.cUc,null,null)
D.d8Z=w([N.l_,A.dj],x.O)
D.amA=new B.a7(A.a3,A.a7,A.x,D.d8Z,null,null)
D.b93=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.d8W=w([D.b93,D.wT,A.bU],x.O)
D.bQ4=new B.a7(A.a3,A.a7,A.x,D.d8W,null,null)
D.cQb=w([A.bc,A.cZ,A.ff],x.O)
D.bQ5=new B.a7(A.ax,A.aD,A.x,D.cQb,null,null)
D.Nj=new B.a7(A.a3,A.a7,A.x,A.GF,null,null)
D.bgH=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.csU=w([D.bgH,A.bU,A.j0],x.O)
D.amF=new B.a7(A.ax,A.aD,A.x,D.csU,null,null)
D.cZd=w([A.wH,A.av,D.Aa],x.O)
D.bR2=new B.a7(A.a3,A.a7,A.x,D.cZd,null,null)
D.bhQ=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b7t=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bcp=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cPl=w([D.bhQ,D.b7t,D.bcp],x.O)
D.amG=new B.a7(A.a3,A.a7,A.x,D.cPl,null,null)
D.b95=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bT_=w([Au.ae6,D.b95],x.O)
D.bRb=new B.a7(A.b0,A.b6,A.x,D.bT_,null,null)
D.cNr=w([A.mI,A.bL],x.O)
D.bRf=new B.a7(A.b0,A.b6,A.x,D.cNr,null,null)
D.d2V=w([A.aE,A.dO],x.O)
D.bRl=new B.a7(A.a3,A.a7,A.x,D.d2V,null,null)
D.ad8=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.auz=w([D.ad8,D.iZ,D.JX],x.O)
D.bRO=new B.a7(A.ax,A.aD,A.x,D.auz,null,null)
D.csM=w([A.du,A.dJ],x.O)
D.bRZ=new B.a7(A.b0,A.b6,A.x,D.csM,null,null)
D.d0d=w([A.uA,Ay.DZ],x.O)
D.bSM=new B.a7(A.a3,A.a7,A.x,D.d0d,null,null)
D.fhB=new B.x("Which Bio link?",null,A.ct,null,null,null,null,null,null,null,null,null)
D.bSX=new B.pw(null,D.fhB,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.ye=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a3v=new C.kJ(2,"elegantNavy")
D.fNF=w([A.VT,D.iZ,A.bU],x.O)
D.jw=new C.xa(0,"classic")
D.a3i=new C.jg("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a3v,4294967035,4279378237,4290283019,D.jw)
D.aDB=new C.kJ(3,"elegantGold")
D.b49=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b55=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.abP=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fN7=w([D.b49,D.b55,D.abP],x.O)
D.a3g=new C.jg("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aDB,4294966515,4281016592,4289102906,D.jw)
D.duY=new C.kJ(22,"goldRibbon")
D.fN3=w([A.VT,D.iZ,A.hU],x.O)
D.a39=new C.jg("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.duY,4294967035,4279378237,4291404327,D.jw)
D.duZ=new C.kJ(23,"goldBaroque")
D.aco=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fN9=w([D.aco,A.av,A.j0],x.O)
D.a3a=new C.jg("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.duZ,4294964964,4283053072,4292128567,D.jw)
D.dv0=new C.kJ(4,"elegantEmerald")
D.b6d=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b72=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fNf=w([D.b6d,D.b72,A.hU],x.O)
D.a3b=new C.jg("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dv0,4294376440,4279122734,4291404327,D.jw)
D.dv1=new C.kJ(5,"elegantBurgundy")
D.bap=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fNm=w([D.bap,A.ab7,A.hU],x.O)
D.a3e=new C.jg("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dv1,4294965238,4283043359,4291404327,D.jw)
D.duV=new C.kJ(19,"goldFiligree")
D.Kv=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fNa=w([D.Kv,A.av,A.j0],x.O)
D.a3c=new C.jg("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.duV,4294966259,4279378237,4292128567,D.jw)
D.duW=new C.kJ(20,"goldLaurel")
D.bgx=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fNn=w([A.JQ,A.hU,D.bgx],x.O)
D.a3d=new C.jg("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.duW,4294966776,4282000405,4291404327,D.jw)
D.duX=new C.kJ(21,"goldCrest")
D.ab0=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bgE=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fNc=w([D.ab0,A.av,D.bgE],x.O)
D.a3h=new C.jg("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.duX,4294965484,4283053072,4292128567,D.jw)
D.dv_=new C.kJ(24,"goldStar")
D.bhK=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fNg=w([D.bhK,A.av,D.iZ],x.O)
D.a3f=new C.jg("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dv_,4294966518,4279378237,4292128567,D.jw)
D.G3=w([D.a3i,D.a3g,D.a39,D.a3a,D.a3b,D.a3e,D.a3c,D.a3d,D.a3h,D.a3f],x.h)
D.pM=new C.mm(0,"blank")
D.QR=new C.mm(1,"title")
D.mn=new C.mm(2,"titleContent")
D.dPA=new C.mm(3,"twoColumn")
D.C2=new C.mm(4,"section")
D.dPB=new C.mm(5,"comparison")
D.He=new C.mm(6,"flashcard")
D.Hf=new C.mm(7,"quiz")
D.Hg=new C.mm(8,"worksheet")
D.an1=w([D.pM,D.QR,D.mn,D.dPA,D.C2,D.dPB,D.He,D.Hf,D.Hg],B.ax("O<mm>"))
D.bTc=w([0,0,0],x.cA)
D.avv=w([A9.Vg,A.dJ],x.O)
D.kf=w([A.bU,A.bJ,A.hT,A.hC,D.Aa],x.O)
D.dqS=new C.iU("fireworks","Royal Fireworks","Thank you for celebrating with us",D.avv,D.kf)
D.bgP=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.ban=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cNF=w([D.bgP,D.ban],x.O)
D.dqJ=new C.iU("confetti","Golden Confetti","Together we rise",D.cNF,D.kf)
D.cKZ=w([A.nl,A.UX],x.O)
D.dqK=new C.iU("crown","Crown of Glory","Built for our community",D.cKZ,D.kf)
D.b7k=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.ba2=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cRs=w([D.b7k,D.ba2],x.O)
D.tI=w([A.bI,A.aP,A.c,A.aL,A.ak],x.O)
D.dqE=new C.iU("aurora","Aurora Gala","A brighter future, together",D.cRs,D.tI)
D.bbs=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d0j=w([G.aaG,D.bbs],x.O)
D.dqV=new C.iU("champagne","Champagne Toast","Cheers to every member",D.d0j,D.kf)
D.dqW=new C.iU("diamonds","Diamond Rain","Every member is a jewel",Y.aw5,D.tI)
D.b4X=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b9z=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d4Y=w([D.b4X,D.b9z],x.O)
D.dqz=new C.iU("starburst","Golden Starburst","Thank you!",D.d4Y,D.kf)
D.bT5=w([A.f5,A.wL],x.O)
D.aaO=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.OR=w([A.od,A.ij,A.uM,A.o7,D.aaO],x.O)
D.dr2=new C.iU("balloons","Luxury Balloons","Let's celebrate",D.bT5,D.OR)
D.cKi=w([A.V5,A.w],x.O)
D.dqR=new C.iU("galaxy","Galaxy Spiral","The sky is not the limit",D.cKi,D.tI)
D.bf0=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cY3=w([A.k6,D.bf0],x.O)
D.dqM=new C.iU("redcarpet","Red Carpet","Tonight we shine",D.cY3,D.kf)
D.bd0=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bbf=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d1d=w([D.bd0,D.bbf],x.O)
D.dqB=new C.iU("coins","Gold Coin Rain","Every contribution counts",D.d1d,D.kf)
D.d7w=w([A.du,A.hB],x.O)
D.dqH=new C.iU("lanterns","Sky Lanterns","Lighting the way together",D.d7w,D.kf)
D.b8d=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cIn=w([A.wN,D.b8d],x.O)
D.dqD=new C.iU("hearts","Floating Hearts","Made with love",D.cIn,D.OR)
D.b5w=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b6j=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.d8U=w([D.b5w,D.b6j],x.O)
D.dr1=new C.iU("petals","Rose Petals","Thank you, from our hearts",D.d8U,D.OR)
D.bfT=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d5h=w([A.kZ,D.bfT],x.O)
D.dqy=new C.iU("butterflies","Golden Butterflies","New beginnings",D.d5h,D.kf)
D.bcm=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cJi=w([D.bcm,A.w],x.O)
D.dqU=new C.iU("neon","Neon Night","Let's go!",D.cJi,D.tI)
D.b9i=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d34=w([A.Kc,D.b9i],x.O)
D.dqX=new C.iU("disco","Disco Ball","Party time",D.d34,D.tI)
D.bcS=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d2E=w([A.hs,D.bcS],x.O)
D.dqC=new C.iU("sunrise","Golden Sunrise","A new day for our community",D.d2E,D.kf)
D.d2h=w([A.qr,A.dJ],x.O)
D.dqY=new C.iU("pearls","Ocean Pearls","Deep roots, bright future",D.d2h,D.tI)
D.b7p=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d2v=w([D.b7p,A.dJ],x.O)
D.dr0=new C.iU("snow","Winter Gala","Warm wishes to all",D.d2v,D.tI)
D.b4i=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b5g=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.d7T=w([D.b4i,D.b5g],x.O)
D.dqQ=new C.iU("laurel","Laurel Victory","We did it together",D.d7T,D.kf)
D.b48=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b9Z=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cHv=w([D.b48,D.b9Z],x.O)
D.dr_=new C.iU("ribbons","Silk Ribbons","Elegance in every step",D.cHv,D.kf)
D.baZ=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.csJ=w([G.A9,D.baZ],x.O)
D.dqN=new C.iU("kente","Kente Pride","Proud of our roots",D.csJ,D.kf)
D.bdx=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bgb=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cSX=w([D.bdx,D.bgb],x.O)
D.dqI=new C.iU("trophy","Trophy Shine","Winners together",D.cSX,D.kf)
D.d2B=w([Ao.K2,A.w],x.O)
D.dqA=new C.iU("shooting","Shooting Stars","Make a wish",D.d2B,D.tI)
D.b4p=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.adX=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.d87=w([D.b4p,D.adX],x.O)
D.dqO=new C.iU("bokeh","Golden Bokeh","Shine bright",D.d87,D.kf)
D.b4M=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cYS=w([D.b4M,A.w],x.O)
D.dqG=new C.iU("orbits","Golden Orbits","Always moving forward",D.cYS,D.kf)
D.bfU=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cVB=w([A.abN,D.bfU],x.O)
D.dqL=new C.iU("flowers","Blooming Garden","Growing together",D.cVB,D.OR)
D.b4z=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b5a=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.d7_=w([D.b4z,D.b5a],x.O)
D.dqF=new C.iU("music","Music Party","Celebrate with us",D.d7_,D.tI)
D.b63=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bgA=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cIz=w([D.b63,D.bgA],x.O)
D.dqZ=new C.iU("mandala","Royal Mandala","Harmony and unity",D.cIz,D.kf)
D.cVG=w([G.A9,D.adX],x.O)
D.dqT=new C.iU("sparklers","Golden Sparklers","Light up the night",D.cVG,D.kf)
D.dqP=new C.iU("city","City Lights","The whole city celebrates",D.avv,D.kf)
D.Gc=w([D.dqS,D.dqJ,D.dqK,D.dqE,D.dqV,D.dqW,D.dqz,D.dr2,D.dqR,D.dqM,D.dqB,D.dqH,D.dqD,D.dr1,D.dqy,D.dqU,D.dqX,D.dqC,D.dqY,D.dr0,D.dqQ,D.dr_,D.dqN,D.dqI,D.dqA,D.dqO,D.dqG,D.dqL,D.dqF,D.dqZ,D.dqT,D.dqP],B.ax("O<iU>"))
D.ect=new B.z("","No ring")
D.eqG=new B.z("platinum","Platinum")
D.enN=new B.z("glow","Glow")
D.efL=new B.z("double","Double line")
D.eeH=new B.z("framed","Gallery frame")
D.ec6=new B.z("rosegold","Rose gold")
D.eov=new B.z("jewels","Jeweled")
D.eli=new B.z("aurora","Aurora")
D.Bp=w([D.ect,A.a4N,D.eqG,D.enN,H.aK3,D.efL,A.a4P,D.eeH,D.ec6,D.eov,D.eli],x.L)
D.ccp=w([D.a3c,D.a3d,D.a3h,D.a39,D.a3a,D.a3f],x.h)
D.bIa=new B.ae(G.ai5,16,null,null,null,null)
D.b_y=new B.va(A.bg,D.bIa,null,x.U)
D.bx4=new B.a0(58027,"MaterialIcons",!1)
D.bBS=new B.ae(D.bx4,16,null,null,null,null)
D.b_w=new B.va(A.L,D.bBS,null,x.U)
D.bx5=new B.a0(58030,"MaterialIcons",!1)
D.bFU=new B.ae(D.bx5,16,null,null,null,null)
D.b_z=new B.va(A.dK,D.bFU,null,x.U)
D.ciz=w([D.b_y,D.b_w,D.b_z],B.ax("O<va<pM>>"))
D.cq7=w([A.Ae,A.he],x.O)
D.cq8=w([A.bc,A.bk,A.ff],x.O)
D.OG=w([A.bJ,A.hC,A.hT,A.av,A.o7],x.O)
D.csP=w([A.bU,D.iZ,D.JX],x.O)
D.ctm=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eab=new B.z(4278913286,4280030216)
D.eat=new B.z(4279373061,4278518787)
D.eaA=new B.z(4279898630,4278847235)
D.cSo=w([D.eab,D.eat,D.eaA],x.n)
D.cOk=w(["\u265b","\u269c","\u2726"],x.s)
D.duT=new C.xc("Royal Onyx & Gold",D.cSo,4292128567,4294370209,4294965479,3874020544,D.cOk)
D.e9Z=new B.z(4278326799,4278598442)
D.ea0=new B.z(4278395929,4278258953)
D.ea7=new B.z(4278599728,4278327826)
D.d7n=w([D.e9Z,D.ea0,D.ea7],x.n)
D.cJa=w(["\u269c","\u2756","\u2727"],x.s)
D.duQ=new C.xc("Imperial Emerald",D.d7n,4293050997,4294699968,4294180856,3872254170,D.cJa)
D.ea1=new B.z(4278455076,4278918747)
D.ea6=new B.z(4278587439,4278322714)
D.eak=new B.z(4279051376,4278455076)
D.d5A=w([D.ea1,D.ea6,D.eak],x.n)
D.cZs=w(["\u2654","\u2726","\u2748"],x.s)
D.duK=new C.xc("Sapphire Crown",D.d5A,4291417834,4294967295,4294310143,3871986666,D.cZs)
D.eay=new B.z(4279894534,4283041554)
D.eaK=new B.z(4281008906,4279042307)
D.eaS=new B.z(4284221976,4279894534)
D.daT=w([D.eay,D.eaK,D.eaS],x.n)
D.cKq=w(["\u265b","\u2766","\u2726"],x.s)
D.duM=new C.xc("Ruby Throne",D.daT,4293378685,4294963145,4294964466,3874213833,D.cKq)
D.eas=new B.z(4279371039,4281995100)
D.eaC=new B.z(4280092723,4278714896)
D.eaP=new B.z(4283045242,4279371039)
D.d7J=w([D.eas,D.eaC,D.eaP],x.n)
D.d5W=w(["\u2655","\u2756","\u2727"],x.s)
D.duR=new C.xc("Amethyst Palace",D.d7J,4293314984,4294963421,4294702591,3873229802,D.d5W)
D.ea3=new B.z(4278519045,4280032287)
D.eal=new B.z(4279111184,4278321666)
D.eaH=new B.z(4280492839,4278716426)
D.d4v=w([D.ea3,D.eal,D.eaH],x.n)
D.cXR=w(["\u2726","\u25c6","\u2742"],x.s)
D.duO=new C.xc("Obsidian & Platinum",D.d4v,4293256418,4294967295,4294638330,3872378836,D.cXR)
D.eaz=new B.z(4279896588,4282194463)
D.eaI=new B.z(4280553487,4279043334)
D.eaQ=new B.z(4283048488,4279896588)
D.cXn=w([D.eaz,D.eaI,D.eaQ],x.n)
D.d9h=w(["\u2766","\u273f","\u2727"],x.s)
D.duL=new C.xc("Rose Gold Velvet",D.cXn,4293440672,4294960345,4294964979,3874214602,D.d9h)
D.ea4=new B.z(4278520340,4279180595)
D.ea9=new B.z(4278718495,4278322443)
D.eaw=new B.z(4279510591,4278520340)
D.czw=w([D.ea4,D.ea9,D.eaw],x.n)
D.cYw=w(["\u269c","\u2736","\u2756"],x.s)
D.duP=new C.xc("Midnight Brass",D.czw,4291405148,4293975208,4294439914,3872837564,D.cYw)
D.eb4=new B.z(4294703086,4293780428)
D.eb0=new B.z(4294307549,4293187253)
D.eb5=new B.z(4294966517,4293977807)
D.cMs=w([D.eb4,D.eb0,D.eb5],x.n)
D.cYV=w(["\u269c","\u265b","\u2726"],x.s)
D.duS=new C.xc("Ivory Marble & Gold",D.cMs,4289760572,4286209048,4280951062,3863625518,D.cYV)
D.eaf=new B.z(4278978566,4280555024)
D.eav=new B.z(4279504137,4278518530)
D.eaM=new B.z(4281211923,4278978566)
D.cKh=w([D.eaf,D.eav,D.eaM],x.n)
D.d6D=w(["\u2742","\u2726","\u265c"],x.s)
D.duN=new C.xc("Onyx & Copper",D.cKh,4291856987,4294365880,4294964718,3873885630,D.d6D)
D.ctu=w([D.duT,D.duQ,D.duK,D.duM,D.duR,D.duO,D.duL,D.duP,D.duS,D.duN],B.ax("O<xc>"))
D.cvM=w([A.av,D.Aa,A.hC],x.O)
D.ehM=new B.z("Original",null)
D.ehU=new B.z("Wide 16:9",1.7777777777777777)
D.ek4=new B.z("Landscape 3:2",1.5)
D.ehg=new B.z("Photo 4:3",1.3333333333333333)
D.eiW=new B.z("Square",1)
D.eua=new B.z("Portrait 3:4",0.75)
D.at0=w([D.ehM,D.ehU,D.ek4,D.ehg,D.eiW,D.eua],B.ax("O<+(n,P?)>"))
D.at1=w([A.hC,A.bZ,A.b9,A.by],x.O)
D.eke=new B.z("","Original")
D.em0=new B.z("circle","Circle")
D.erq=new B.z("rounded","Rounded")
D.esj=new B.z("triangle","Triangle")
D.eo0=new B.z("hexagon","Hexagon")
D.emp=new B.z("diamond","Diamond")
D.elh=new B.z("arch","Arch")
D.Bu=w([D.eke,D.em0,D.erq,D.esj,D.eo0,D.emp,D.elh],x.L)
D.dpZ=new C.l4("classic_blue","Classic Blue","Normal",A.bj,A.c,A.k9,A.dp,A.aK)
D.dqe=new C.l4("campus_green","Campus Green","Normal",A.aZ,A.mG,A.rS,A.h2,A.eu)
D.dq5=new C.l4("warm_sand","Warm Sand","Normal",A.dT,A.hT,A.bJ,A.ip,A.np)
D.dqc=new C.l4("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aL,A.M,A.aK)
D.dpY=new C.l4("coral_fresh","Coral Fresh","Normal",A.cb,A.il,A.qj,A.jJ,A.rM)
D.dqd=new C.l4("lavender_calm","Lavender Calm","Normal",A.b4,A.p4,A.zY,A.p7,A.jj)
D.dq_=new C.l4("ocean_breeze","Ocean Breeze","Normal",A.f6,A.qw,A.rG,A.uC,A.nq)
D.ade=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dqa=new C.l4("berry_pop","Berry Pop","Normal",A.fg,D.ade,A.k3,G.Wl,A.El)
D.dq0=new C.l4("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.du,A.k3,A.cm)
D.dq9=new C.l4("executive_navy","Executive Navy","Professional",A.d4,A.acA,A.dp,A.kX,A.bI)
D.dq7=new C.l4("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bn,A.M,A.aP,A.cm)
D.dq1=new C.l4("corporate_steel","Corporate Steel","Professional",A.mE,A.M,A.m3,A.fh,A.bI)
D.dq4=new C.l4("gold_luxe","Gold Luxe","Luxury",A.ob,A.dC,A.oc,A.lt,A.bJ)
D.bcW=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dq8=new C.l4("rose_gold_elite","Rose Gold Elite","Luxury",A.he,D.bcW,A.Wa,A.ij,A.o7)
D.dqb=new C.l4("platinum_night","Platinum Night","Luxury",A.cm,A.dJ,A.bn,A.aP,A.aL)
D.dqf=new C.l4("emerald_prestige","Emerald Prestige","Luxury",A.aU,A.pa,A.eX,A.pg,A.jk)
D.dpX=new C.l4("royal_purple","Royal Purple","Luxury",A.mF,A.Vn,A.jj,A.k3,A.JP)
D.dq6=new C.l4("neon_pitch","Neon Pitch","Bold",A.b9,A.dJ,A.M,A.b2,A.aL)
D.dq3=new C.l4("crimson_impact","Crimson Impact","Bold",A.bL,A.k6,A.eD,A.t3,A.f9)
D.dq2=new C.l4("sunset_gallery","Sunset Gallery","Bold",A.fB,A.rM,A.jJ,A.qj,A.oe)
D.Gl=w([D.dpZ,D.dqe,D.dq5,D.dqc,D.dpY,D.dqd,D.dq_,D.dqa,D.dq0,D.dq9,D.dq7,D.dq1,D.dq4,D.dq8,D.dqb,D.dqf,D.dpX,D.dq6,D.dq3,D.dq2],B.ax("O<l4>"))
D.cHc=w([A.bU,D.iZ],x.O)
D.cXC=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.el3=new B.z("Faces & people",D.cXC)
D.cvQ=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.e97=new B.z("Ideas & work",D.cvQ)
D.cON=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eo5=new B.z("Nature",D.cON)
D.cXK=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ehK=new B.z("Places & things",D.cXK)
D.cRZ=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.elm=new B.z("Symbols",D.cRZ)
D.cHi=w([D.el3,D.e97,D.eo5,D.ehK,D.elm],B.ax("O<+(n,ak<n>)>"))
D.b4E=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cHG=w([A.bU,D.abP,D.b4E],x.O)
D.aZU=new B.ad(0,A.G,A.JM,A.aEp,40)
D.aZB=new B.ad(0,A.G,A.nn,A.ej,8)
D.cHS=w([D.aZU,D.aZB],x.V)
D.cIj=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.atq=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a0V=w([A.hC,A.ff,A.bL,A.aA,A.cb],x.O)
D.cJ4=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ac2=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cJf=w([A.W0,D.ac2,A.W0],x.O)
D.cJl=w([A.hU,D.iZ,D.JX],x.O)
D.ehz=new B.z(A.bg,D.ZI)
D.eiR=new B.z(A.L,D.ZH)
D.ed5=new B.z(A.dK,D.ZJ)
D.cKc=w([D.ehz,D.eiR,D.ed5],B.ax("O<+(pM,a0)>"))
D.cQ=new C.HZ(0,"text")
D.lg=new C.HZ(1,"image")
D.eZ=new C.HZ(2,"shape")
D.QQ=new C.HZ(3,"pdf")
D.kN=new C.HZ(4,"signature")
D.a3C=new C.HZ(5,"bio")
D.cL2=w([D.cQ,D.lg,D.eZ,D.QQ,D.kN,D.a3C],B.ax("O<HZ>"))
D.cL3=w([A.bm,A.cD],B.ax("O<GX>"))
D.cLE=w(["School","Documents","Sign & present"],x.s)
D.aZZ=new B.ad(0,A.G,A.adN,A.u1,28)
D.cLY=w([D.aZZ],x.V)
D.cMf=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.OZ=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.atP=w([A.hC,A.Ek,A.aL,A.c,A.od,A.av],x.O)
D.ety=new B.z(0.1,0.08)
D.eo3=new B.z(0.3,0.05)
D.ecD=new B.z(0.55,0.1)
D.egB=new B.z(0.8,0.06)
D.ejy=new B.z(0.92,0.16)
D.ej5=new B.z(0.2,0.2)
D.eh2=new B.z(0.7,0.22)
D.emL=new B.z(0.05,0.4)
D.ejX=new B.z(0.95,0.45)
D.edi=new B.z(0.12,0.7)
D.efp=new B.z(0.88,0.75)
D.efx=new B.z(0.4,0.9)
D.ebj=new B.z(0.65,0.93)
D.ege=new B.z(0.25,0.97)
D.ehw=new B.z(0.85,0.9)
D.ee6=new B.z(0.5,0.04)
D.cNA=w([D.ety,D.eo3,D.ecD,D.egB,D.ejy,D.ej5,D.eh2,D.emL,D.ejX,D.edi,D.efp,D.efx,D.ebj,D.ege,D.ehw,D.ee6],x.G)
D.cNH=w([A.c,A.he,A.aX,A.aU],x.O)
D.dRc=new C.jz("office_blue","Office Blue",A.bj,A.dp,A.aK,A.c,A.k9)
D.dRn=new C.jz("campus_green","Campus Green",A.aZ,A.h2,A.eu,A.mG,A.rS)
D.dRd=new C.jz("sunset","Sunset",A.fB,A.jJ,A.np,A.il,A.qj)
D.dRe=new C.jz("midnight","Midnight",A.aE,A.k3,A.cm,A.M,A.du)
D.dRp=new C.jz("classic","Classic",A.dj,A.dC,A.lu,A.hT,A.fZ)
D.dRm=new C.jz("rose_gold","Rose Gold",A.he,A.wO,A.wN,A.uM,A.Ae)
D.dR7=new C.jz("ocean_teal","Ocean Teal",A.f6,A.uC,A.nq,A.qw,A.rG)
D.dR6=new C.jz("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aP,A.aL)
D.dR5=new C.jz("neon_night","Neon Night",A.b9,A.b2,A.aL,A.dJ,A.M)
D.dRh=new C.jz("lavender","Lavender",A.b4,A.p7,A.jj,A.p4,A.zY)
D.dRj=new C.jz("coral","Coral",A.cb,A.jJ,A.rM,A.il,A.oe)
D.dR8=new C.jz("forest","Forest",A.h_,A.e9,A.cC,A.lv,A.es)
D.dR9=new C.jz("berry","Berry",A.fg,G.Wl,A.El,D.ade,A.k3)
D.dRg=new C.jz("sand","Sand",A.dT,A.ip,A.np,A.hT,A.bJ)
D.dRl=new C.jz("ice","Ice",A.mE,A.Kd,A.aK,A.mC,A.fh)
D.dRb=new C.jz("charcoal","Charcoal",A.ak,A.aP,A.cm,A.bn,A.M)
D.dR4=new C.jz("mint","Mint",A.aU,A.fu,A.h2,A.lv,A.pg)
D.dRk=new C.jz("crimson","Crimson",A.bL,A.mI,A.k6,A.Ei,A.t3)
D.b71=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dRf=new C.jz("gold","Gold",A.ob,A.uA,A.oc,D.b71,A.lt)
D.dRi=new C.jz("aqua","Aqua",A.bM,A.E7,A.o9,A.p6,A.og)
D.dRa=new C.jz("plum","Plum",A.mF,A.wL,A.El,A.DV,A.rZ)
D.dRo=new C.jz("steel","Steel",A.d4,A.dp,A.bn,A.k9,A.kX)
D.a19=w([D.dRc,D.dRn,D.dRd,D.dRe,D.dRp,D.dRm,D.dR7,D.dR6,D.dR5,D.dRh,D.dRj,D.dR8,D.dR9,D.dRg,D.dRl,D.dRb,D.dR4,D.dRk,D.dRf,D.dRi,D.dRa,D.dRo],B.ax("O<jz>"))
D.cO1=w([A.bU,A.j0],x.O)
D.QS=new C.hv(10,"rotate3d")
D.Hi=new C.hv(8,"flip")
D.aDU=new C.hv(19,"spiral")
D.pN=new C.hv(16,"bounce")
D.aDX=new C.hv(9,"flipVertical")
D.cO2=w([D.QS,D.Hi,D.aDU,D.pN,D.aDX],x.i)
D.e5=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cOn=w([0.62,1],x.x)
D.cOX=w([0,0.32,0.68,1],x.x)
D.mo=new C.hv(6,"zoom")
D.tW=new C.hv(4,"slideUp")
D.tV=new C.hv(2,"slideLeft")
D.cP5=w([D.mo,D.Hi,D.tW,D.QS,D.tV],x.i)
D.cPz=w([A.bZ,A.he,A.ij,A.hC,A.c],x.O)
D.aZP=new B.ad(0,A.G,D.acf,A.u1,30)
D.cQg=w([D.aZP],x.V)
D.e_G=new B.u(0,-2.5)
D.e_w=new B.u(-2.5,0)
D.dZe=new B.u(2.5,0)
D.cQj=w([A.R7,A.a3Z,A.aEV,A.a3Y,D.e_G,H.aER,D.e_w,D.dZe],x.dN)
D.Gs=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cQM=w([23,114,69,56,80,144],x.t)
D.cRa=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cRz=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cT0=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cT4=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.ur(0,"rectangle")
D.eI=new C.ur(1,"circle")
D.kO=new C.ur(6,"hexagon")
D.cTh=w([D.be,D.eI,D.kO],x.m)
D.nO=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.adl=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cTP=w([D.adl,A.e9],x.O)
D.ecO=new B.z("","Classic")
D.ebw=new B.z("caps","Bold caps")
D.emO=new B.z("elegant","Elegant")
D.erJ=new B.z("shadow","Shadow")
D.egX=new B.z("neon","Neon glow")
D.eqm=new B.z("outline","Outline")
D.epB=new B.z("marker","Highlighter")
D.erU=new B.z("stamp","Stamp")
D.erl=new B.z("retro","Retro")
D.efW=new B.z("threed","3D")
D.enj=new B.z("fire","Fire")
D.eoe=new B.z("ice","Ice")
D.em_=new B.z("chalk","Chalk")
D.em4=new B.z("comic","Comic")
D.erW=new B.z("sunset","Sunset")
D.et_=new B.z("softglow","Soft glow")
D.epc=new B.z("lowercase","Lowercase")
D.emw=new B.z("double","Echo")
D.et6=new B.z("whisper","Whisper")
D.auH=w([D.ecO,D.ebw,D.emO,D.erJ,D.egX,D.eqm,D.epB,D.erU,D.erl,D.efW,H.aK1,D.enj,D.eoe,D.em_,D.em4,A.a4N,D.erW,D.et_,D.epc,D.emw,D.et6],x.L)
D.cV1=w([3,5,7,10,12,15],x.t)
D.cV4=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 9 apps inside the TV screen: NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, Growth Income, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cWn=w([A.bZ,A.bJ,A.c,A.ey,A.cy],x.O)
D.dhC=new C.rZ(10,"cardWorld")
D.BV=new C.AX(3,"rounded")
D.dxU=new C.l7("world","NGMY World",D.dhC,D.BV,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dhD=new C.rZ(11,"cardSplit")
D.dxQ=new C.l7("business","Business Wire",D.dhD,D.BV,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dhE=new C.rZ(12,"cardBreaking")
D.dy2=new C.l7("breaking","Breaking Red",D.dhE,D.BV,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dhF=new C.rZ(13,"cardFeature")
D.dxW=new C.l7("feature","Tech Feature",D.dhF,D.BV,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aCr=new C.rZ(6,"circle")
D.aCl=new C.AX(4,"circle")
D.dy_=new C.l7("parchment","Royal Circle",D.aCr,D.aCl,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dxP=new C.l7("ocean","Blue Ocean",D.aCr,D.aCl,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dhI=new C.rZ(7,"rail")
D.aCk=new C.AX(1,"double")
D.dxR=new C.l7("forest","Green Leaf",D.dhI,D.aCk,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aCo=new C.rZ(1,"sideBySide")
D.dy4=new C.l7("herald","NGMY Herald",D.aCo,D.BV,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aCn=new C.rZ(0,"classic")
D.a2P=new C.AX(9,"shadow")
D.dy3=new C.l7("daily","The Daily",D.aCn,D.a2P,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dhG=new C.rZ(2,"splash")
D.aCm=new C.AX(6,"cutCorner")
D.dxO=new C.l7("tabloid","Big Tabloid",D.dhG,D.aCm,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aCs=new C.rZ(9,"minimal")
D.dxZ=new C.l7("modern","Modern Digest",D.aCs,D.BV,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aCp=new C.rZ(3,"magazine")
D.aCj=new C.AX(0,"plain")
D.dxV=new C.l7("midnight","Midnight Edition",D.aCp,D.aCj,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dhJ=new C.rZ(8,"banner")
D.dxX=new C.l7("metro","Metro Wire",D.dhJ,D.aCm,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dhB=new C.AX(8,"arch")
D.dxY=new C.l7("sunrise","Sunrise Post",D.aCp,D.dhB,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aCq=new C.rZ(5,"scrapbook")
D.dhA=new C.AX(5,"tape")
D.dxT=new C.l7("neon","Neon Beat",D.aCq,D.dhA,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dhH=new C.rZ(4,"wrap")
D.dy5=new C.l7("gold","Golden Press",D.dhH,D.a2P,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dy6=new C.l7("minimal","Paper White",D.aCs,D.a2P,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dxS=new C.l7("gazette","Fresh Gazette",D.aCn,D.aCk,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dy1=new C.l7("times","Classic Times",D.aCo,D.aCj,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Qo=new C.AX(2,"polaroid")
D.dy0=new C.l7("scrapbook","Memory Scrapbook",D.aCq,D.Qo,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a1o=w([D.dxU,D.dxQ,D.dy2,D.dxW,D.dy_,D.dxP,D.dxR,D.dy4,D.dy3,D.dxO,D.dxZ,D.dxV,D.dxX,D.dxY,D.dxT,D.dy5,D.dy6,D.dxS,D.dy1,D.dy0],B.ax("O<l7>"))
D.cWz=w([0.45,1],x.x)
D.Gu=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cWV=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fIQ=new C.ok("Original",0,1,1,0,0,0)
D.fIU=new C.ok("Black & white",0,1.1,0,0,0,0)
D.fIH=new C.ok("Noir",-0.05,1.55,0,0,0,0)
D.fIL=new C.ok("Sepia",0,1,0.25,0.9,0,0)
D.fIK=new C.ok("Vivid",0,1.15,1.6,0,0,0)
D.fID=new C.ok("Pop",0,1.3,1.9,0,0,0)
D.fIF=new C.ok("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fIR=new C.ok("Matte",0,0.9,0.85,0,0,0.55)
D.fIM=new C.ok("Cool",0,1.05,1,-0.8,0,0)
D.fIT=new C.ok("Warm",0.03,1.05,1.1,0.8,0,0)
D.fIE=new C.ok("Golden hour",0.04,1,1.25,1,0,0)
D.fIJ=new C.ok("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fIS=new C.ok("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fII=new C.ok("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fIO=new C.ok("Retro",0,0.9,0.7,0.4,0,0.35)
D.fIN=new C.ok("Forest",0,1,1.2,-0.1,-0.45,0)
D.fIP=new C.ok("Rose",0,1,1.1,0.3,0.4,0)
D.fIG=new C.ok("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cWW=w([D.fIQ,D.fIU,D.fIH,D.fIL,D.fIK,D.fID,D.fIF,D.fIR,D.fIM,D.fIT,D.fIE,D.fIJ,D.fIS,D.fII,D.fIO,D.fIN,D.fIP,D.fIG],B.ax("O<ok>"))
D.b44=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cWX=w([D.adl,A.e9,D.b44],x.O)
D.e90=new B.z(0.12,0.3)
D.eop=new B.z(0.26,0.75)
D.emK=new B.z(0.8,0.22)
D.es3=new B.z(0.9,0.7)
D.epb=new B.z(0.5,0.15)
D.eqo=new B.z(0.65,0.85)
D.eeA=new B.z(0.08,0.85)
D.cX8=w([D.e90,D.eop,D.emK,D.es3,D.epb,D.eqo,D.eeA],x.G)
D.auR=w([A.b9,A.bZ,A.by,A.bc],x.O)
D.cXV=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cY6=w([A.c,A.fh,A.dx,A.uD],x.O)
D.b7d=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cZ3=w([D.b7d,D.ac2],x.O)
D.cZ4=w([A.wH,A.av],x.O)
D.cZi=w([0,0.25,0.75,1],x.x)
D.cZk=w([A.wD,A.od],x.O)
D.aDu=new C.kJ(10,"kenteSunset")
D.fN5=w([D.aco,A.jF,A.av],x.O)
D.dtb=new C.jg("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aDu,4294964964,4282000405,4279983648,D.jw)
D.aDv=new C.kJ(11,"indigoMudcloth")
D.b51=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fNj=w([D.b51,A.ac_,A.hU],x.O)
D.dtj=new C.jg("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aDv,4294439140,4279903102,4279903102,D.jw)
D.aDw=new C.kJ(12,"adinkraRoyal")
D.bhe=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fNk=w([D.ab0,D.bhe,A.av],x.O)
D.dtl=new C.jg("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aDw,4294965484,4285218591,4287322667,D.jw)
D.aDx=new C.kJ(13,"nileLotus")
D.bdM=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.baD=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fNp=w([D.bdM,D.baD,A.hU],x.O)
D.dtk=new C.jg("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aDx,4294244340,4279196764,4279196764,D.jw)
D.aDy=new C.kJ(14,"shweshweIvory")
D.b8W=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b7Q=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b5v=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fN6=w([D.b8W,D.b7Q,D.b5v],x.O)
D.dtg=new C.jg("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aDy,4294505710,4279970378,4291058750,D.jw)
D.r5=new C.kJ(15,"certIvoryNavy")
D.fN4=w([D.Kv,D.iZ,A.hU],x.O)
D.aD0=new C.xa(1,"ringsNdoa")
D.dtd=new C.jg("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.r5,4294966259,4279378237,4291404327,D.aD0)
D.a3k=new C.xa(2,"coupleCards")
D.dt8=new C.jg("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.r5,4294966259,4279378237,4291404327,D.a3k)
D.BY=new C.kJ(18,"certIvoryNavyBar")
D.ab_=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fNi=w([D.ab_,D.iZ,A.hU],x.O)
D.aD1=new C.xa(3,"kuhoweshaForm")
D.dt6=new C.jg("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.BY,4294966519,4279378237,4291404327,D.aD1)
D.acd=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fNC=w([D.Kv,D.acd,A.hU],x.O)
D.a3l=new C.xa(4,"mahariPande")
D.dt9=new C.jg("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.r5,4294966259,4279904068,4291404327,D.a3l)
D.aDz=new C.kJ(16,"certIvoryGreen")
D.b8m=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fN8=w([A.JQ,D.b8m,A.hU],x.O)
D.aD2=new C.xa(5,"familiaMti")
D.dtf=new C.jg("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aDz,4294966776,4280241466,4291404327,D.aD2)
D.a3m=new C.xa(6,"ndoaSafi")
D.dt7=new C.jg("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.BY,4294966519,4279378237,4291404327,D.a3m)
D.bcl=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fNb=w([D.Kv,A.hU,D.bcl],x.O)
D.a3n=new C.xa(7,"peteWide")
D.dtc=new C.jg("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.r5,4294966259,4282001936,4291404327,D.a3n)
D.dtm=new C.xa(8,"muhuriCrest")
D.dt5=new C.jg("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.r5,4294966259,4279378237,4291404327,D.dtm)
D.fNl=w([D.ab_,D.acd,A.hU],x.O)
D.dtn=new C.xa(9,"fomuWazi")
D.dti=new C.jg("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.BY,4294966519,4279904068,4291404327,D.dtn)
D.aDA=new C.kJ(17,"certIvoryRose")
D.b8Y=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fNo=w([D.b8Y,D.acY,A.hU],x.O)
D.a3j=new C.xa(10,"upendoOrnate")
D.dte=new C.jg("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aDA,4294965493,4286200650,4291404327,D.a3j)
D.cZI=w([D.dtb,D.dtj,D.dtl,D.dtk,D.dtg,D.dtd,D.dt8,D.dt6,D.dt9,D.dtf,D.dt7,D.dtc,D.dt5,D.dti,D.dte],x.h)
D.e6=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Hj=new C.vE(0,"emojis")
D.C4=new C.vE(1,"pictures")
D.Hk=new C.vE(2,"icons3d")
D.a3E=new C.vE(3,"animations")
D.QU=new C.vE(4,"videoMotion")
D.C5=new C.vE(5,"luxe")
D.a1v=w([D.Hj,D.C4,D.Hk,D.a3E,D.QU,D.C5],B.ax("O<vE>"))
D.eqZ=new B.z(A.dV,"Looks")
D.egu=new B.z(A.y0,"Light")
D.egq=new B.z(A.mX,"Colour")
D.eeB=new B.z(A.xA,"Effects")
D.aj9=new B.a0(63112,"MaterialIcons",!1)
D.ebJ=new B.z(D.aj9,"Crop")
D.d_b=w([D.eqZ,D.egu,D.egq,D.eeB,D.ebJ],x.f2)
D.d_O=w([],x.D)
D.fNz=w([],x.L)
D.eeM=new B.z("Flashcard",D.He)
D.eik=new B.z("Quiz",D.Hf)
D.ek9=new B.z("Worksheet",D.Hg)
D.ehr=new B.z("Notes",D.mn)
D.eiP=new B.z("Section",D.C2)
D.d0p=w([D.eeM,D.eik,D.ek9,D.ehr,D.eiP],B.ax("O<+(n,mm)>"))
D.dv2=new C.kJ(6,"beadedPearl")
D.bbi=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fND=w([P.W9,D.bbi,A.hU],x.O)
D.aCZ=new C.jg("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dv2,4294966774,4286209070,4291404327,D.jw)
D.dv3=new C.kJ(7,"artDeco")
D.beV=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bht=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fNB=w([D.beV,D.bht,A.bU],x.O)
D.aD_=new C.jg("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dv3,4294440434,4280228630,4290283019,D.jw)
D.dv4=new C.kJ(8,"rosetteCorners")
D.bgK=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b7f=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bbd=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fNe=w([D.bgK,D.b7f,D.bbd],x.O)
D.aCY=new C.jg("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dv4,4294702831,4285218602,4291394365,D.jw)
D.dv5=new C.kJ(9,"modernLedger")
D.fNd=w([A.c,D.iZ,D.iZ],x.O)
D.aCX=new C.jg("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dv5,4294967295,4279378237,4279378237,D.jw)
D.d0t=w([D.aCZ,D.aD_,D.aCY,D.aCX],x.h)
D.d0B=w([A.ij,A.od],x.O)
D.cg=new C.hv(0,"none")
D.dc=new C.hv(1,"fade")
D.Hh=new C.hv(3,"slideRight")
D.aDW=new C.hv(5,"slideDown")
D.dPH=new C.hv(7,"zoomOut")
D.a3D=new C.hv(11,"cube")
D.dPC=new C.hv(12,"blur")
D.aDT=new C.hv(13,"dissolve")
D.dPD=new C.hv(14,"wipeLeft")
D.dPE=new C.hv(15,"wipeRight")
D.QT=new C.hv(17,"push")
D.dPF=new C.hv(18,"flash")
D.aDV=new C.hv(20,"swing")
D.dPG=new C.hv(21,"curtain")
D.Px=w([D.cg,D.dc,D.tV,D.Hh,D.tW,D.aDW,D.mo,D.dPH,D.Hi,D.aDX,D.QS,D.a3D,D.dPC,D.aDT,D.dPD,D.dPE,D.pN,D.QT,D.dPF,D.aDU,D.aDV,D.dPG],x.i)
D.Py=w([D.a3i,D.a3g,D.a39,D.a3a,D.a3b,D.a3e,D.a3c,D.a3d,D.a3h,D.a3f,D.aCZ,D.aD_,D.aCY,D.aCX],x.h)
D.d12=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d16=w([A.A1,A.hC,A.bU],x.O)
D.efR=new B.z(A.tu,"Design")
D.ess=new B.z(D.ajq,"Word sizes")
D.eoW=new B.z(A.Bd,"Text")
D.bAo=new B.a0(983182,"MaterialIcons",!1)
D.ep_=new B.z(D.bAo,"Photo")
D.ebl=new B.z(A.la,"Logo")
D.etw=new B.z(A.FQ,"News")
D.d1b=w([D.efR,D.ess,D.eoW,D.ep_,D.ebl,D.etw],x.f2)
D.d1c=w(["golddust","sparkle","sheen"],x.s)
D.dR3=new C.er("upload_pdf",K.MT,"Upload PDF")
D.dQd=new C.er("sign_paper",A.FN,"Sign Paper")
D.bzF=new B.a0(63438,"MaterialIcons",!1)
D.dR_=new C.er("hd_photo",D.bzF,"HD Photo")
D.dQ5=new C.er("sharpen",E.Zt,"Sharpen")
D.dQf=new C.er("print",K.MT,"Download PDF")
D.dQH=new C.er("rotate",D.aj9,"Rotate")
D.dQo=new C.er("text_box",A.Bd,"Text Box")
D.dQq=new C.er("picture",A.tx,"Picture")
D.dQm=new C.er("title",A.xV,"Title")
D.dQi=new C.er("subtitle",T.ak2,"Subtitle")
D.dQQ=new C.er("bullets",I.ZK,"Bullet List")
D.dQj=new C.er("numbered",A.MI,"Numbered")
D.dQT=new C.er("quote",A2.B5,"Quote")
D.dQv=new C.er("citation",A.px,"Citation")
D.dQW=new C.er("date_stamp",Ah.Zy,"Date Stamp")
D.dQJ=new C.er("page_number",A.xU,"Page #")
D.dQN=new C.er("header_bar",A.Bf,"Header")
D.dQp=new C.er("footer_bar",Aw.a_g,"Footer")
D.dQe=new C.er("divider",A.tw,"Divider")
D.dQa=new C.er("highlight",A.ZP,"Highlight")
D.dQP=new C.er("redact",A.xY,"Redact")
D.dQC=new C.er("callout",A.B1,"Callout")
D.dQY=new C.er("checkboxes",I.aip,"Checklist")
D.dQz=new C.er("table",A.a_e,"Table")
D.dQt=new C.er("memo",I.a_0,"Memo")
D.dQD=new C.er("letter",A.FC,"Letter")
D.bzh=new B.a0(63259,"MaterialIcons",!0)
D.dQ4=new C.er("agenda",D.bzh,"Agenda")
D.dQg=new C.er("toc",Az.ajD,"Contents")
D.bzB=new B.a0(63406,"MaterialIcons",!1)
D.dQA=new C.er("sig_line",D.bzB,"Sign Line")
D.dPY=new C.er("initial_line",A.j8,"Initials")
D.dQ0=new C.er("approved",A.la,"APPROVED")
D.dQF=new C.er("draft",A.ox,"DRAFT")
D.dQL=new C.er("confidential",A.j9,"Confidential")
D.dQO=new C.er("sticky",A.MZ,"Sticky Note")
D.dQX=new C.er("progress",A.ajC,"Progress")
D.bAR=new B.a0(983507,"MaterialIcons",!1)
D.dQb=new C.er("stars",D.bAR,"Star Rating")
D.dPW=new C.er("equation",A.ajt,"Equation")
D.dQ6=new C.er("timeline",A.N_,"Timeline")
D.dQu=new C.er("two_col",A.a_h,"Two Columns")
D.dQ8=new C.er("compare",A1.ZB,"Compare")
D.dPU=new C.er("duplicate_el",A.fJ,"Duplicate")
D.dR1=new C.er("delete_el",A.e4,"Delete")
D.dQS=new C.er("bring_fwd",P.ajm,"Bring Front")
D.dPZ=new C.er("send_back",P.ajl,"Send Back")
D.dQE=new C.er("align_left",D.ZI,"Align L")
D.dQK=new C.er("align_center",D.ZH,"Align C")
D.dR0=new C.er("align_right",D.ZJ,"Align R")
D.dQn=new C.er("word_count",A0.Zc,"Word Count")
D.dQk=new C.er("link_text",A.hi,"Link")
D.dQI=new C.er("phone",A.iw,"Phone")
D.dQ9=new C.er("email",A.B3,"Email")
D.dR2=new C.er("qr_placeholder",A.jb,"QR Placeholder")
D.dQ3=new C.er("rectangle",A3.va,"Rectangle")
D.dQy=new C.er("circle",A.qI,"Circle")
D.dQ_=new C.er("arrow",A.j7,"Arrow")
D.dQR=new C.er("line",A.tw,"Line")
D.dQc=new C.er("triangle",A.Zz,"Triangle")
D.bzp=new B.a0(63318,"MaterialIcons",!1)
D.dQh=new C.er("grayscale",D.bzp,"Grayscale")
D.dQr=new C.er("brighten",I.aiJ,"Brighten")
D.dQw=new C.er("flip_h",A.Fs,"Flip H")
D.bzw=new B.a0(63348,"MaterialIcons",!1)
D.dQZ=new C.er("flip_v",D.bzw,"Flip V")
D.dQM=new C.er("cover_page",A.ps,"Cover Page")
D.dPX=new C.er("invoice",A.h7,"Invoice")
D.dQ7=new C.er("resume",A.mb,"Resume")
D.dQl=new C.er("minutes",A.or,"Minutes")
D.dQ1=new C.er("lab_report",A.MW,"Lab Report")
D.dQ2=new C.er("rubric",A.xE,"Rubric")
D.dQx=new C.er("flashcard_tool",V.FJ,"Flashcard")
D.dQU=new C.er("quiz_tool",A.FG,"Quiz Block")
D.dQB=new C.er("worksheet_tool",L.Fj,"Worksheet")
D.dQG=new C.er("outline_share",A.MX,"Share Outline")
D.dQV=new C.er("export_json",D.aiv,"Export JSON")
D.dPV=new C.er("new_slide",D.Zb,"New Slide")
D.dQs=new C.er("present",A.pz,"Present")
D.d1B=w([D.dR3,D.dQd,D.dR_,D.dQ5,D.dQf,D.dQH,D.dQo,D.dQq,D.dQm,D.dQi,D.dQQ,D.dQj,D.dQT,D.dQv,D.dQW,D.dQJ,D.dQN,D.dQp,D.dQe,D.dQa,D.dQP,D.dQC,D.dQY,D.dQz,D.dQt,D.dQD,D.dQ4,D.dQg,D.dQA,D.dPY,D.dQ0,D.dQF,D.dQL,D.dQO,D.dQX,D.dQb,D.dPW,D.dQ6,D.dQu,D.dQ8,D.dPU,D.dR1,D.dQS,D.dPZ,D.dQE,D.dQK,D.dR0,D.dQn,D.dQk,D.dQI,D.dQ9,D.dR2,D.dQ3,D.dQy,D.dQ_,D.dQR,D.dQc,D.dQh,D.dQr,D.dQw,D.dQZ,D.dQM,D.dPX,D.dQ7,D.dQl,D.dQ1,D.dQ2,D.dQx,D.dQU,D.dQB,D.dQG,D.dQV,D.dPV,D.dQs],B.ax("O<er>"))
D.d1J=w([A.cm,A.ak],x.O)
D.eaW=new B.z(4286331629,4292552567)
D.eaJ=new B.z(4280640491,4278630100)
D.eb3=new B.z(4294538006,4292943176)
D.ea5=new B.z(4278556265,4280640491)
D.cXi=w([D.eaW,D.eaJ,D.eb3,D.ea5],x.n)
D.cmf=w([4294626325,4280472558,4294210230],x.t)
D.dPP=new C.ny("colorful","Colorful",A.mX,D.cXi,4294967295,3875536895,D.cmf,D.mo)
D.eax=new B.z(4279522093,4279657780)
D.eaN=new B.z(4281750292,4283268111)
D.ea8=new B.z(4278603323,4279203438)
D.eaO=new B.z(4282343954,4279599165)
D.cx2=w([D.eax,D.eaN,D.ea8,D.eaO],x.n)
D.clY=w([4288931381,4294829706,4287033260],x.t)
D.dPL=new C.ny("nature","Nature",A.FO,D.cx2,4294442727,3874290891,D.clY,D.dc)
D.ear=new B.z(4279369771,4283178389)
D.eao=new B.z(4279179050,4286456526)
D.eaF=new B.z(4280163147,4290648157)
D.e9Y=new B.z(4278322711,4285343961)
D.cOf=w([D.ear,D.eao,D.eaF,D.e9Y],x.n)
D.cmb=w([4294210230,4280472558,4289170426],x.t)
D.dPJ=new C.ny("vibe","Vibe",A.ZN,D.cOf,4294967295,3874869502,D.cmb,D.tV)
D.eb_=new B.z(4290007817,4292552567)
D.eaU=new B.z(4286328082,4294286859)
D.eaZ=new B.z(4288485197,4294538006)
D.eaT=new B.z(4285343961,4293675161)
D.bTv=w([D.eb_,D.eaU,D.eaZ,D.eaT],x.n)
D.cmg=w([4294829706,4294967295,4284999929],x.t)
D.dPK=new C.ny("celebration","Celebration",A.l5,D.bTv,4294967295,4009752557,D.cmg,D.pN)
D.eam=new B.z(4279179050,4280171146)
D.eaq=new B.z(4279310375,4280232247)
D.eae=new B.z(4278916151,4280172719)
D.ean=new B.z(4279179050,4281549141)
D.cHz=w([D.eam,D.eaq,D.eae,D.ean],x.n)
D.clT=w([4281908728,4294626325,4287931320],x.t)
D.dPO=new C.ny("professional","Professional",A.B_,D.cHz,4294967295,3872118241,D.clT,D.QT)
D.eai=new B.z(4278995566,4278413729)
D.eaa=new B.z(4278727492,4279137424)
D.eaG=new B.z(4280171146,4278751666)
D.eaj=new B.z(4278995566,4279590517)
D.cq0=w([D.eai,D.eaa,D.eaG,D.eaj],x.n)
D.clW=w([4286436348,4284410580,4294829706],x.t)
D.dPQ=new C.ny("ocean","Ocean",I.a_j,D.cq0,4294967295,3873501950,D.clW,D.tW)
D.eaV=new B.z(4286328082,4294538006)
D.eaX=new B.z(4286781507,4294677052)
D.eaR=new B.z(4283178389,4294197086)
D.eaY=new B.z(4288295954,4294688548)
D.cDM=w([D.eaV,D.eaX,D.eaR,D.eaY],x.n)
D.cmh=w([4294829706,4294967295,4294747557],x.t)
D.dPR=new C.ny("sunset","Sunset",A.N1,D.cDM,4294967295,4009749973,D.cmh,D.dc)
D.eb7=new B.z(4294967295,4294047225)
D.eb2=new B.z(4294507260,4294967295)
D.eb6=new B.z(4294967295,4293060848)
D.eb1=new B.z(4294507260,4294047225)
D.cRg=w([D.eb7,D.eb2,D.eb6,D.eb1],x.n)
D.clR=w([4280640491,4279179050,4287931320],x.t)
D.dPN=new C.ny("minimal","Minimal",A3.va,D.cRg,4279179050,4282865001,D.clR,D.dc)
D.eah=new B.z(4278979081,4280886564)
D.eaB=new B.z(4280031511,4278979081)
D.eap=new B.z(4279308561,4281148438)
D.eag=new B.z(4278979081,4280031511)
D.d3x=w([D.eah,D.eaB,D.eap,D.eag],x.n)
D.cm4=w([4292128567,4294829706,4289241758],x.t)
D.dPS=new C.ny("elegant","Elegant",A.lE,D.d3x,4294898631,3873957348,D.cm4,D.aDT)
D.eaD=new B.z(4280159034,4282058596)
D.ead=new B.z(4278916151,4280163147)
D.eaL=new B.z(4281208933,4278916151)
D.eau=new B.z(4279502891,4283178389)
D.d9Q=w([D.eaD,D.ead,D.eaL,D.eau],x.n)
D.cmd=w([4294296657,4292128567,4291081725],x.t)
D.dPM=new C.ny("royal","Royal Gold",A.iP,D.d9Q,4294965222,3874084351,D.cmd,D.mo)
D.ea2=new B.z(4278464302,4280163147)
D.eac=new B.z(4278916151,4279455306)
D.eaE=new B.z(4280163147,4283040846)
D.ea_=new B.z(4278332450,4281413249)
D.cX_=w([D.ea2,D.eac,D.eaE,D.ea_],x.n)
D.clS=w([4281193663,4289170426,4294210230],x.t)
D.dPT=new C.ny("aurora","Aurora Glow",A.dV,D.cX_,4293983738,3869766608,D.clS,D.dc)
D.vv=w([D.dPP,D.dPL,D.dPJ,D.dPK,D.dPO,D.dPQ,D.dPR,D.dPN,D.dPS,D.dPM,D.dPT],B.ax("O<ny>"))
D.bbN=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d2c=w([A.qn,D.bbN,A.qn],x.O)
D.d2t=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d2x=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eoO=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.efr=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ejL=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.e88=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eiu=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.egP=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.ekT=new B.z("Surprise me","")
D.d30=w([D.eoO,D.efr,D.ejL,D.e88,D.eiu,D.egP,D.ekT],x.L)
D.b5x=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bfm=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d3J=w([A.c,D.b5x,D.bfm],x.O)
D.d5s=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aDs=new C.kJ(0,"heritageGold")
D.bas=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fNE=w([D.bas,W.acl,A.av],x.O)
D.dth=new C.jg("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aDs,4294570461,4284234270,4292128567,D.jw)
D.aDt=new C.kJ(1,"heritageCrimson")
D.b40=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b8X=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bfd=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fNh=w([D.b40,D.b8X,D.bfd],x.O)
D.dta=new C.jg("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aDt,4294635750,4285213214,4292912216,D.jw)
D.d5w=w([D.a3i,D.a3g,D.dth,D.dta,D.a3b,D.a3e],x.h)
D.dz9=new C.rc(1,"circuit")
D.dzC=new C.lW("neural","Neural Link","Robotic",D.dz9,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dz8=new C.rc(0,"grid")
D.dzz=new C.lW("signal","Signal Grid","Robotic",D.dz8,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dze=new C.rc(2,"hexes")
D.dzk=new C.lW("core","Core Protocol","Robotic",D.dze,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aDQ=new C.rc(11,"diagonal")
D.dzv=new C.lW("steel","Steel Tech","Robotic",D.aDQ,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aDR=new C.rc(3,"rings")
D.dzj=new C.lW("vault","Vault Gold","Robotic",D.aDR,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dzc=new C.rc(13,"leaves")
D.dzm=new C.lW("forest","Forest Morning","Nature",D.dzc,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aDS=new C.rc(5,"waves")
D.dzt=new C.lW("ocean","Ocean Calm","Nature",D.aDS,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dzf=new C.rc(6,"sunset")
D.dzy=new C.lW("sunset","Sunset Glow","Nature",D.dzf,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dzg=new C.rc(7,"mountains")
D.dzl=new C.lW("mountain","Mountain Air","Nature",D.dzg,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dzh=new C.rc(8,"stars")
D.dzs=new C.lW("night","Night Sky","Nature",D.dzh,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a3B=new C.rc(4,"orbs")
D.dzq=new C.lW("aurora","Aurora","Nature",D.a3B,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dzA=new C.lW("sand","Sand Dune","Nature",D.aDS,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dzi=new C.rc(9,"rays")
D.dzp=new C.lW("golden","Golden Hour","Warm",D.dzi,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dzn=new C.lW("royal","Royal Purple","Warm",D.aDQ,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dzo=new C.lW("rose","Rose Petal","Warm",D.a3B,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dzb=new C.rc(12,"blocks")
D.dzr=new C.lW("electric","Electric Blue","Bold",D.dzb,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dzB=new C.lW("mint","Fresh Mint","Bold",D.a3B,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dzd=new C.rc(14,"minimal")
D.dzx=new C.lW("white","Clean White","Clean",D.dzd,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dza=new C.rc(10,"frame")
D.dzu=new C.lW("midnight","Midnight Gold","Clean",D.dza,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dzw=new C.lW("community","Community Green","Clean",D.aDR,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a1U=w([D.dzC,D.dzz,D.dzk,D.dzv,D.dzj,D.dzm,D.dzt,D.dzy,D.dzl,D.dzs,D.dzq,D.dzA,D.dzp,D.dzn,D.dzo,D.dzr,D.dzB,D.dzx,D.dzu,D.dzw],B.ax("O<lW>"))
D.d5S=w([D.Aa,A.wH,A.hC,A.bU],x.O)
D.d67=w([D.ad8,D.iZ],x.O)
D.d6g=w(["pdf","docx","txt","md"],x.s)
D.ewL=new B.bz(-3,150,34)
D.ewM=new B.bz(-3,214,62)
D.ewN=new B.bz(-3,288,62)
D.d74=w([D.ewL,D.ewM,D.ewN],B.ax("O<+(P,P,P)>"))
D.d7y=w(["rays","bokeh","aurora","spotlight"],x.s)
D.d86=w(["Write","Design","Print & fold"],x.s)
D.jx=new C.ur(2,"triangle")
D.C3=new C.ur(3,"arrow")
D.fp=new C.ur(4,"line")
D.jy=new C.ur(5,"parallelogram")
D.d88=w([D.be,D.eI,D.jx,D.C3,D.fp,D.jy,D.kO],x.m)
D.e9e=new B.z(240,96)
D.ebC=new B.z(560,46)
D.d8d=w([D.e9e,D.ebC],x.G)
D.fNP=new C.xd(0,"classic")
D.dv8=new C.nu("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aDs,4294570461,4282000405,4284234270)
D.dvk=new C.nu("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aDt,4294635750,4281999378,4285213214)
D.dv9=new C.nu("elegant_navy","Umoja Mzuri",y.s,D.a3v,4294967035,4279378237,4290283019)
D.dvm=new C.nu("elegant_gold","Umoja wa Dhahabu",y.Q,D.aDB,4294966515,4281016592,4289102906)
D.dvo=new C.nu("kente_sunset","Kente ya Jua",y.H,D.aDu,4294964964,4282000405,4279983648)
D.dv6=new C.nu("indigo_mudcloth","Nguo ya Indigo",y.n,D.aDv,4294439140,4279903102,4279903102)
D.dvb=new C.nu("adinkra_royal","Muhuri wa Adinkra",y.z,D.aDw,4294965484,4285218591,4287322667)
D.dvg=new C.nu("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aDx,4294244340,4279196764,4279196764)
D.dvi=new C.nu("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aDy,4294505710,4279970378,4291058750)
D.fNQ=new C.xd(1,"ringsNdoa")
D.dva=new C.nu("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.r5,4294966259,4279378237,4291404327)
D.fNS=new C.xd(2,"coupleCards")
D.dvl=new C.nu("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.r5,4294966259,4279378237,4291404327)
D.fNT=new C.xd(3,"kuhoweshaForm")
D.dvh=new C.nu("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.BY,4294966519,4279378237,4291404327)
D.fNU=new C.xd(4,"mahariPande")
D.dv7=new C.nu("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.r5,4294966259,4279904068,4291404327)
D.fNV=new C.xd(5,"familiaMti")
D.dvn=new C.nu("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aDz,4294966776,4280241466,4291404327)
D.fNW=new C.xd(6,"ndoaSafi")
D.dve=new C.nu("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.BY,4294966519,4279378237,4291404327)
D.fNX=new C.xd(7,"peteWide")
D.dvd=new C.nu("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.r5,4294966259,4282001936,4291404327)
D.fNY=new C.xd(8,"muhuriCrest")
D.dvc=new C.nu("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.r5,4294966259,4279378237,4291404327)
D.fNZ=new C.xd(9,"fomuWazi")
D.dvf=new C.nu("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.BY,4294966519,4279904068,4291404327)
D.fNR=new C.xd(10,"upendoOrnate")
D.dvj=new C.nu("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aDA,4294965493,4286200650,4291404327)
D.PL=w([D.dv8,D.dvk,D.dv9,D.dvm,D.dvo,D.dv6,D.dvb,D.dvg,D.dvi,D.dva,D.dvl,D.dvh,D.dv7,D.dvn,D.dve,D.dvd,D.dvc,D.dvf,D.dvj],B.ax("O<nu>"))
D.C1=new C.apG(0,"landscape169")
D.nQ=new C.apG(1,"portrait916")
D.d8Y=w([D.C1,D.nQ],B.ax("O<apG>"))
D.awg=w([A.hC,A.bJ,A.cy,A.ij,A.c],x.O)
D.tN=w([A.bU,A.ip],x.O)
D.e8u=new B.z(1000,"M")
D.ecF=new B.z(900,"CM")
D.ebx=new B.z(500,"D")
D.e9W=new B.z(400,"CD")
D.e8v=new B.z(100,"C")
D.ecG=new B.z(90,"XC")
D.eby=new B.z(50,"L")
D.e9X=new B.z(40,"XL")
D.e8z=new B.z(10,"X")
D.ecQ=new B.z(9,"IX")
D.ebM=new B.z(5,"V")
D.ebk=new B.z(4,"IV")
D.e8W=new B.z(1,"I")
D.d9w=w([D.e8u,D.ecF,D.ebx,D.e9W,D.e8v,D.ecG,D.eby,D.e9X,D.e8z,D.ecQ,D.ebM,D.ebk,D.e8W],x.ek)
D.exF=new B.cL(["open",A.j8,"Open & write","Keep writing this book"])
D.ey4=new B.cL(["print",A.tA,"Print as a book","Fold and staple it"])
D.d9G=w([D.exF,D.ey4],B.ax("O<+(n,a0,n,n)>"))
D.dak=w([D.a3D,D.mo,D.Hi,D.QT,D.dc,D.QS],x.i)
D.epl=new B.z(-1,"Small")
D.e8h=new B.z(0,"Normal")
D.e8V=new B.z(1,"Big")
D.e9u=new B.z(2,"Huge")
D.daO=w([D.epl,D.e8h,D.e8V,D.e9u],x.ek)
D.dbc=w([49,65,89,38,83,89],x.t)
D.dbj=w([A.wH,A.hC,A.bU],x.O)
D.dbK=w([D.dc,D.mo,D.tV,D.a3D,D.Hi,D.QT],x.i)
D.aBy=new B.dQ([0,D.KO,8,D.aeo,12,D.aep],B.ax("dQ<G,a2M>"))
D.dVM={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bf6=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cHJ=w([A.bJ,D.bf6],x.O)
D.d0b=w([A.b2,A.bj],x.O)
D.cW9=w([A.bZ,A.aX,A.cq],x.O)
D.d9H=w([A.cm,A.bv],x.O)
D.cP8=w([A.b9,A.fg],x.O)
D.cYJ=w([A.b4,A.f5],x.O)
D.b8H=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cY1=w([D.b8H,A.od],x.O)
D.cSO=w([A.fX,A.wI],x.O)
D.cOY=w([A.bs,A.c8],x.O)
D.dem=new B.bp(D.dVM,[D.cHJ,H.amY,D.d0b,D.cW9,D.d9H,D.cP8,D.cYJ,D.cY1,D.cSO,D.cOY],B.ax("bp<n,ak<w>>"))
D.dUX={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a2v=new B.bp(D.dUX,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bp<n,n>"))
D.a2B=new B.bp(A.ib,[],B.ax("bp<G,+icon3d,picture(n?,n?)>"))
D.dil=new F.M7(30,null)
D.dnq=new F.mi("Chapter 1","","","")
D.d8K=w([D.dnq],x.B)
D.dnu=new F.r2("My Book","","",D.d8K,E.aCN)
D.dns=new F.uh("starry",null,null,null,null,"","","")
D.dnv=new F.r2("Dream Big","","",E.a1E,D.dns)
D.dnt=new F.uh("story",null,null,null,null,"","","")
D.dnw=new F.r2("Little Lion","","",E.a1E,D.dnt)
D.dnr=new F.uh("vintage",null,null,null,null,"","","")
D.dnx=new F.r2("Our Story","","",E.a1E,D.dnr)
D.dqx=new C.DZ("","NGMY","","")
D.dxN=new C.z1("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dPI=new C.b_q(null,null,null,null)
D.dRq=new C.apL(null)
D.dRD=new C.aqg(0,"smaller")
D.dRE=new C.aqg(1,"bigger")
D.aE5=new C.aqg(2,"fit")
D.dYb=new B.u(3,6)
D.dYl=new B.u(4,8)
D.e0J=new B.C(E.afc,T.aar,null)
D.e0N=new B.C(A.X7,A.lY,null)
D.bC7=new B.ae(A.l8,16,A.c_,null,null,null)
D.e0R=new B.C(A.j4,D.bC7,null)
D.b3t=new B.fh(2.2,null,null,null,null,A.c,null,null,null,null)
D.e12=new B.C(A.EX,D.b3t,null)
D.bMj=new B.ae(A.cw,16,A.ay,null,null,null)
D.e16=new B.C(A.en,D.bMj,null)
D.fbp=new B.x("Play",null,A.nb,null,null,null,null,null,null,null,null,null)
D.d0q=w([U.als,A.ri,D.fbp],x.p)
D.eC1=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.d0q,null)
D.e19=new B.C(A.om,D.eC1,null)
D.b3C=new B.fh(2.4,null,null,null,null,null,null,null,null,null)
D.eHg=new B.a6(20,20,D.b3C,null)
D.e1e=new B.C(A.j4,D.eHg,null)
D.fka=new B.x("Seconds per slide",null,A.hm,null,null,null,null,null,null,null,null,null)
D.e1m=new B.C(A.bl,D.fka,null)
D.e2H=new C.a7A(2,"print")
D.e2K=new B.iL(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e4m=new B.h6("/Annot")
D.e4o=new B.h6("/URI")
D.f6_=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e6c=new B.ji("share",48,D.f6_,null,B.ax("ji<n>"))
D.bMd=new B.ae(A.dV,14,A.ey,null,null,null)
D.e6l=new B.cK(null,-2,-2,null,null,null,D.bMd,null)
D.bcb=new B.w(0.3333333333333333,0,0,0,A.t)
D.cJE=w([D.bcb,A.K],x.O)
D.bSl=new B.a7(A.a3,A.a7,A.x,D.cJE,null,null)
D.aXp=new B.o(null,null,null,null,null,D.bSl,A.n)
D.bjy=new B.kG(D.aXp,A.bd,null,null)
D.e6x=new B.cK(0,0,null,0,8,null,D.bjy,null)
D.d4w=w([A.hT,A.oe,A.cb],x.O)
D.e7a=new B.bR(A.A,0.5,A.x,null,0,D.d4w,null,null)
D.e9n=new B.z(0.22,A.bj)
D.ed8=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ef6=new B.z(0.5,A.he)
D.enZ=new B.z(0.78,A.aU)
D.exw=new B.cL([A.by,0.22,0.7,2.6])
D.exB=new B.cL([A.b9,0.36,1.2,1.3])
D.exH=new B.cL([A.dO,0.28,0.2,0.4])
D.exN=new B.cL([A.cv,0.05,0.3,0.35])
D.exT=new B.cL([A.bs,0.28,0.9,0])
D.ey0=new B.cL([A.aE,-0.25,-0.15,0.45])
D.eyO=new B.cL([A.bZ,0.42,1,4.1])
D.eBK=new B.a8s(9)
D.bDf=new B.ae(A.FQ,28,A.cq,null,null,null)
D.fkH=new B.x("NGMY News",null,A.dB,null,null,null,null,null,null,null,null,null)
D.bth=new B.bE(1,A.bi,D.fkH,null)
D.d7B=w([D.bDf,A.aw,D.bth],x.p)
D.eBW=new B.co(A.aQ,A.e,A.j,A.m,null,A.p,null,0,D.d7B,null)
D.bDq=new B.ae(A.px,16,A.c,null,null,null)
D.fm5=new B.x("Book",null,A.nY,null,null,null,null,null,null,null,null,null)
D.dbi=w([D.bDq,A.eb,D.fm5],x.p)
D.eC3=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.dbi,null)
D.bJQ=new B.ae(A.j9,10,A.c,null,null,null)
D.f9A=new B.x("Pro",null,A.n9,null,null,null,null,null,null,null,null,null)
D.d0v=w([D.bJQ,A.pV,D.f9A],x.p)
D.eC7=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.d0v,null)
D.fk9=new B.x("Make a newspaper",null,As.SL,null,null,null,null,null,null,null,null,null)
D.bTt=w([E.a_E,A.ab,D.fk9],x.p)
D.eC8=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.bTt,null)
D.bIo=new B.ae(A.l5,18,A.bJ,null,null,null)
D.fbD=new B.x("Ending celebration",null,A.jf,null,null,null,null,null,null,null,null,null)
D.d6G=w([D.bIo,A.bo,D.fbD],x.p)
D.eCb=new B.co(A.aQ,A.e,A.j,A.m,null,A.p,null,0,D.d6G,null)
D.bJC=new B.ae(A.j8,18,A.jJ,null,null,null)
D.eRH=new B.F(!0,A.jJ,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmm=new B.x("Write",null,D.eRH,null,null,null,null,null,null,null,null,null)
D.cR5=w([D.bJC,A.ab,D.fmm],x.p)
D.eCg=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.cR5,null)
D.f9y=new B.x("Download picture",null,A.pZ,null,null,null,null,null,null,null,null,null)
D.bvh=new B.q5(A.eg,A.A,A.f,D.f9y,null)
D.bvs=new B.dm(1,A.ci,D.bvh,null)
D.d0S=w([K.ali,A.ab,D.bvs],x.p)
D.eCh=new B.co(A.aQ,A.ba,A.j,A.m,null,A.p,null,0,D.d0S,null)
D.bFb=new B.ae(A.FQ,22,A.cq,null,null,null)
D.fiQ=new B.x("NGMY NEWS",null,H.a6e,null,null,null,null,null,null,null,null,null)
D.cJ7=w([D.bFb,A.ab,D.fiQ],x.p)
D.eCp=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.cJ7,null)
D.eCA=new B.oX(!1,!1,null,T.UE,null,A.bV,null,null,null)
D.a5h=new B.jJ([D.cg,D.dc,D.tV,D.Hh,D.tW,D.aDW],B.ax("jJ<hv>"))
D.dX_={title:0,quote:1,closing:2,bio:3}
D.eDI=new B.eU(D.dX_,4,x.M)
D.dVd={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eDK=new B.eU(D.dVd,5,x.M)
D.dWx={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a5i=new B.eU(D.dWx,8,x.M)
D.dVV={Design:0,Transitions:1,Insert:2}
D.eDO=new B.eU(D.dVV,3,x.M)
D.fO6=new B.jJ([D.a3E],B.ax("jJ<vE>"))
D.dW1={float3d:0,drift:1,pulse:2}
D.eDR=new B.eU(D.dW1,3,x.M)
D.aL7=new B.jJ([D.He,D.Hf,D.Hg],B.ax("jJ<mm>"))
D.dVa={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aLa=new B.eU(D.dVa,14,x.M)
D.fO7=new B.eU(A.ib,0,B.ax("eU<vE>"))
D.dVZ={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.RS=new B.eU(D.dVZ,4,x.M)
D.dV4={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aLc=new B.eU(D.dV4,30,x.M)
D.dW6={circle:0,triangle:1,hexagon:2,diamond:3}
D.eE6=new B.eU(D.dW6,4,x.M)
D.eGf=new B.at(390,844)
D.eH0=new B.a6(20,20,A6.JJ,null)
D.aLZ=new B.a6(null,2.5,null,null)
D.eHa=new B.a6(18,18,A6.JJ,null)
D.bJG=new B.ae(A.iP,19,A.c,null,null,null)
D.eHl=new B.a6(38,38,D.bJG,null)
D.bHZ=new B.ae(A.y1,22,A.c,null,null,null)
D.eHn=new B.a6(40,40,D.bHZ,null)
D.eHW=new B.hH(2,10,10,1.15,null)
D.aM6=new B.hH(2,16,14,0.62,null)
D.brn=new B.Q(32,30,32,40)
D.b4T=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bDc=new B.ae(A.ps,56,D.b4T,null,null,null)
D.adE=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eTD=new B.F(!0,D.adE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg_=new B.x("Your books will live here.",null,D.eTD,null,A.L,null,null,null,null,null,null,null)
D.cTG=w([D.bDc,A.S,D.fg_],x.p)
D.biL=new B.fl(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cTG,null)
D.e1k=new B.C(D.brn,D.biL,null)
D.eIg=new B.lZ(D.e1k,null)
D.ffX=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eIy=new B.b1(D.ffX,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fe5=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eIz=new B.b1(D.fe5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fiT=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eII=new B.b1(D.fiT,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fjo=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eIX=new B.b1(D.fjo,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fcN=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eJ9=new B.b1(D.fcN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fq9=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eJs=new B.b1(D.fq9,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fno=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eJD=new B.b1(D.fno,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fjw=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eKj=new B.b1(D.fjw,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f7X=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eKz=new B.b1(D.f7X,null,null,null,null,null,null,null,A.ie,null,null,null,null,A.pi,!1,null,null,null,A.q,null)
D.f9G=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eKR=new B.b1(D.f9G,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.ffF=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eKT=new B.b1(D.ffF,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.ffl=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eKU=new B.b1(D.ffl,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.flq=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eKV=new B.b1(D.flq,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f4c=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eL3=new B.b1(D.f4c,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.faL=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eLq=new B.b1(D.faL,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.foY=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eLs=new B.b1(D.foY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fow=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eLw=new B.b1(D.fow,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f3e=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eLy=new B.b1(D.f3e,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fkC=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eLH=new B.b1(D.fkC,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fo6=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eLW=new B.b1(D.fo6,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fnY=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eLY=new B.b1(D.fnY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f36=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eM3=new B.b1(D.f36,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f6Y=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eMv=new B.b1(D.f6Y,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fnb=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eMG=new B.b1(D.fnb,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f6M=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eMV=new B.b1(D.f6M,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.bbv=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cHX=w([A.ij,A.od,D.bbv,D.aaO,A.ij],x.O)
D.eNi=new B.fR(A.A,0,6.283185307179586,A.x,D.cHX,null,null)
D.cQk=w([A.bJ,A.bU,A.hC,D.Aa,A.bJ],x.O)
D.aMG=new B.fR(A.A,0,6.283185307179586,A.x,D.cQk,null,null)
D.d2r=w([A.bZ,A.by,A.b9,A.bc,A.cq,A.bZ],x.O)
D.eNn=new B.fR(A.A,0,6.283185307179586,A.x,D.d2r,null,null)
D.cJS=w([A.pg,A.og,A.zY,A.ij,A.pg],x.O)
D.eNo=new B.fR(A.A,0,6.283185307179586,A.x,D.cJS,null,null)
D.d2l=w([A.aP,A.bI,A.aL,A.ak,A.aP],x.O)
D.eNp=new B.fR(A.A,0,6.283185307179586,A.x,D.d2l,null,null)
D.d9n=w([A.bs,A.b9,A.by,A.bZ,A.bs],x.O)
D.eNr=new B.fR(A.A,0,6.283185307179586,A.x,D.d9n,null,null)
D.bbM=new B.w(1,0,1,1,A.t)
D.b65=new B.w(1,1,0,1,A.t)
D.d5K=w([A.DK,A.acv,H.abz,D.bbM,H.abV,D.b65,A.DK],x.O)
D.eNs=new B.fR(A.A,0,6.283185307179586,A.x,D.d5K,null,null)
D.eNH=new C.aui(2,"immersiveSticky")
D.eNI=new C.aui(3,"edgeToEdge")
D.eNJ=new C.aui(4,"manual")
D.ePX=new B.F(!0,A.o8,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNb=new B.F(!0,A.f9,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQw=new B.F(!0,E.mJ,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRY=new B.F(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSW=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT4=new B.F(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTp=new B.F(!0,A.ey,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUL=new B.F(!0,A.bI,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUU=new B.F(!0,A.j2,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV7=new B.rl(!0,A.HA,null,null,null,null,A.dr,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVB=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWc=new B.F(!0,A.j0,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWA=new B.F(!0,A.ay,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e2N=new B.iL(1,1,0.7568627450980392,0.027450980392156862)
D.eWE=new B.rl(!0,D.e2N,null,null,null,null,A.dr,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.acC=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aNV=new B.F(!0,D.acC,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWK=new B.F(!0,D.adE,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWL=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNX=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXo=new B.rl(!0,A.oH,null,null,null,null,A.dr,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXF=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.SF=new B.F(!0,A.ay,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYb=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYd=new B.F(!0,D.acC,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.It=new B.F(!0,A.ay,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYG=new B.F(!0,A.bU,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYO=new B.F(!0,A.bI,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYR=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ7=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.au8,null,null,null)
D.eZ9=new B.F(!0,A.cr,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZb=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZo=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZz=new B.F(!0,A.dx,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_5=new B.F(!0,A.aR,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_e=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_s=new B.F(!0,A.ad,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOx=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOz=new B.F(!0,A.c_,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bgz=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f1b=new B.F(!0,D.bgz,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOH=new B.F(!0,E.mJ,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1F=new B.F(!0,A.bI,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1I=new B.F(!0,N.l_,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVO=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2U=new B.x("NEW",null,D.eVO,null,null,null,null,null,null,null,null,null)
D.f39=new B.x("Hati ya Kuhowesha",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f3B=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.f3V=new B.x("Scrollable PDF on this slide",null,A.dk,null,null,null,null,null,null,null,null,null)
D.f4B=new B.x("Big quote mark",null,A.iC,null,null,null,null,null,null,null,null,null)
D.f4E=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.f4P=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.f5h=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.f5j=new B.x("How many slides?",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f5R=new B.x("Transfer",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eRK=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6a=new B.x("Luxury FX",null,D.eRK,null,null,null,null,null,null,null,null,null)
D.f6v=new B.x("Font",null,A.rn,null,null,null,null,null,null,null,null,null)
D.f6H=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.f6N=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f0J=new B.F(!0,A.bI,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6V=new B.x("Example  GA847",null,D.f0J,null,null,null,null,null,null,null,null,null)
D.f7k=new B.x("Design shapes",null,A.iC,null,null,null,null,null,null,null,null,null)
D.f7t=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f7x=new B.x("Non-stop (loop)",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f7L=new B.x("Hati ya Kuhoweya",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f83=new B.x("Photo studio",null,A.fW,null,null,null,null,null,null,null,null,null)
D.f8t=new B.x("Add your picture",null,A.kS,null,null,null,null,null,null,null,null,null)
D.eV8=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8u=new B.x("Enter document code",null,D.eV8,null,A.L,null,null,null,null,null,null,null)
D.f8v=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.f8A=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eSM=new B.F(!0,E.mJ,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8S=new B.x("Delete this book?",null,D.eSM,null,A.L,null,null,null,null,null,null,null)
D.eXd=new B.F(!0,E.mJ,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new B.x("Your library",null,D.eXd,null,null,null,null,null,null,null,null,null)
D.f9M=new B.x("Delete",null,A.aNO,null,null,null,null,null,null,null,null,null)
D.f9O=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ar.Iq,null,null,null,null,null,null,null,null,null)
D.f9Z=new B.x("Element flies in",null,A.aO0,null,null,null,null,null,null,null,null,null)
D.SW=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fam=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.faE=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.faI=new B.x("Cancel",null,E.aOa,null,null,null,null,null,null,null,null,null)
D.faK=new B.x("The lines and circles that come with the design",null,A.hn,null,null,null,null,null,null,null,null,null)
D.f_A=new B.F(!0,A.h1,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fba=new B.x("DOCUMENT CODE",null,D.f_A,null,null,null,null,null,null,null,null,null)
D.fbY=new B.x("Quotes",null,G.a6Q,null,null,null,null,null,null,null,null,null)
D.eUy=new B.F(!0,N.l_,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc5=new B.x("Add a picture",null,D.eUy,null,null,null,null,null,null,null,null,null)
D.fcd=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a6v,null,A.L,null,null,null,null,null,null,null)
D.fcg=new B.x("Look & feel",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fck=new B.x("Rings",null,A.jf,null,null,null,null,null,null,null,null,null)
D.fcq=new B.x("W",null,A.rn,null,null,null,null,null,null,null,null,null)
D.fcA=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fcT=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a6E,null,A.L,null,null,null,null,null,null,null)
D.fcV=new B.x("Write your book",null,A.ct,null,null,null,null,null,null,null,null,null)
D.fdE=new B.x("Add page",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fdS=new B.x("Malipo ya Awamu ya Mahari",null,A.ho,null,null,null,null,null,null,null,null,null)
D.eUY=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new B.x("Create with AI",null,D.eUY,null,A.L,null,null,null,null,null,null,null)
D.feA=new B.x("Apply look",null,A.jf,null,null,null,null,null,null,null,null,null)
D.eVG=new B.F(!0,A.es,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffn=new B.x("Type your presentation below",null,D.eVG,null,A.L,null,null,null,null,null,null,null)
D.ffq=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aOJ,null,A.L,null,null,null,null,null,null,null)
D.ffs=new B.x("Keep it",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eQO=new B.F(!0,A.cu,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new B.x("Done",null,D.eQO,null,null,null,null,null,null,null,null,null)
D.ffT=new B.x("Delete",null,A.na,null,null,null,null,null,null,null,null,null)
D.fg1=new B.x("Hati ya Kiapo cha Uongozi",null,A.ho,null,null,null,null,null,null,null,null,null)
D.eTV=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgU=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eTV,null,A.L,null,null,null,null,null,null,null)
D.fhf=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new B.x("Layout",null,A.SN,null,null,null,null,null,null,null,null,null)
D.fhW=new B.x("Print",null,A.ct,null,null,null,null,null,null,null,null,null)
D.fi_=new B.x("X",null,A.rn,null,null,null,null,null,null,null,null,null)
D.fiy=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Ap.SA,null,null,null,null,null,null,null,null,null)
D.fj4=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fjg=new B.x("Hati ya Kuhowa",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fji=new B.x("Choose a class template",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fjk=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fjq=new B.x("Download the newspaper picture",null,A.ct,null,null,null,null,null,null,null,null,null)
D.fjB=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fjI=new B.x("Done",null,A.aOw,null,null,null,null,null,null,null,null,null)
D.fjS=new B.x("Ending celebration",null,A.dB,null,null,null,null,null,null,null,null,null)
D.fjT=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fk7=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A9.a6i,null,null,null,null,null,null,null,null,null)
D.fl0=new B.x("Export presentation",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fl1=new B.x("What would you like to do?",null,D.aNV,null,null,null,null,null,null,null,null,null)
D.fl4=new B.x("Delete",null,A.ct,null,null,null,null,null,null,null,null,null)
D.fly=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.flC=new B.x("Hati (Documents)",null,A.ho,null,null,null,null,null,null,null,null,null)
D.flO=new B.x("Done",null,A.kT,null,null,null,null,null,null,null,null,null)
D.f0A=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flT=new B.x("Delete presentation?",null,D.f0A,null,A.L,null,null,null,null,null,null,null)
D.fm9=new B.x("After the last slide it starts again from the first",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fmk=new B.x("\ud83c\udf33",null,A.In,null,A.L,null,null,null,null,null,null,null)
D.fmC=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fmJ=new B.x("Transfer document",null,A.oQ,null,null,null,null,null,null,null,null,null)
D.fmU=new B.x("Add to the slides",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fnf=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fnu=new B.x("Make a book",null,I.aNs,null,null,null,null,null,null,null,null,null)
D.fny=new B.x("Books",null,A.ct,null,null,null,null,null,null,null,null,null)
D.eUr=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnz=new B.x("Keep this page open until it finishes.",null,D.eUr,null,null,null,null,null,null,null,null,null)
D.fnC=new B.x("Making your video",null,A.dB,null,null,null,null,null,null,null,null,null)
D.fnH=new B.x("LANGUAGE",null,D.SF,null,null,null,null,null,null,null,null,null)
D.fnO=new B.x("Use this ending",null,A.ct,null,null,null,null,null,null,null,null,null)
D.fnW=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fnX=new B.x("Upload a different logo",null,A.cc,null,null,null,null,null,null,null,null,null)
D.foc=new B.x("Delete from the database?",null,A.kS,null,null,null,null,null,null,null,null,null)
D.fod=new B.x("H",null,A.rn,null,null,null,null,null,null,null,null,null)
D.foC=new B.x("NGMY Quotes",null,A.dB,null,null,null,null,null,null,null,null,null)
D.fp2=new B.x("Cover",null,D.aOH,null,null,null,null,null,null,null,null,null)
D.fp6=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fp7=new B.x("Each page becomes its own slide you can present",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fps=new B.x("Y",null,A.rn,null,null,null,null,null,null,null,null,null)
D.fpD=new B.x("Crop the picture",null,A.kT,null,null,null,null,null,null,null,null,null)
D.fpJ=new B.x("Edit text",null,A.Io,null,null,null,null,null,null,null,null,null)
D.frW=B.dP("a7m")
D.CW=new C.avC(0,"none")
D.aRg=new C.avC(1,"zipCrypto")
D.aRh=new C.avC(2,"aes")
D.fDn=new F.Ox("","",null)
D.fEt=new C.bav(null)
D.fFx=new C.YD(null)
D.fH5=new C.ac7(null)
D.fH7=new C.aCP(null)
D.fJT=new C.ZS(null)
D.fK8=new C.a_m(null)
D.fKr=new C.brU(null)})();(function staticFields(){$.h4L=null
$.h4M=null
$.h4N=null
$.h4O=null
$.fNY=B.uP("_lastQuoRemDigits")
$.fNZ=B.uP("_lastQuoRemUsed")
$.avY=B.uP("_lastRemUsed")
$.fO_=B.uP("_lastRem_nsh")
$.pT=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6b=B.V(x.N,x.I)
$.fLu=!1
$.h9w=B.V(B.ax("kJ"),x.N)
$.h9J=B.V(B.ax("kJ"),x.E)
$.h7J=!1
$.bxx="q"
$.Pv=0
$.C9=B.V(x.N,B.ax("ak<z3>"))
$.h85=!1
$.fPw=!1
$.hei=null
$.hIg=B.V(x.N,B.ax("ay<n?>"))
$.JF=""
$.iW=0
$.h1x=function(){var w=x.N
return B.V(w,w)}()
$.h1w=B.V(x.N,x.R)
$.fPR=!1
$.aeL=B.V(x.N,x.E)
$.fQE=0
$.biw=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i6h","Cw",()=>C.b82(0))
w($,"i6f","a1A",()=>C.b82(1))
w($,"i6g","hhS",()=>C.b82(2))
w($,"i6e","fUq",()=>$.a1A().uD(0))
w($,"i6c","hhQ",()=>C.b82(1e4))
w($,"i6d","hhR",()=>B.DH(8))
w($,"i24","hfT",()=>B.DH(0))
w($,"i2c","hfX",()=>B.DH(0))
w($,"i2b","hfW",()=>B.bVH(0))
w($,"i9W","hjS",()=>{var v,u,t=x.N
t=B.V(t,t)
for(v=D.a2v.gdL(D.a2v),v=v.gai(v);v.C();){u=v.gU(v)
t.n(0,u.b,u.a)}return t})
w($,"iam","bC2",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mJ(new C.fwH(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mJ(new C.fwI(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mJ(new C.fwJ(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mJ(new C.fwU(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mJ(new C.fwZ(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mJ(new C.fx_(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mJ(new C.fx0(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mJ(new C.fx1(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mJ(new C.fx2(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mJ(new C.fx3(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mJ(new C.fx4(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mJ(new C.fwK(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mJ(new C.fwL(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mJ(new C.fwM(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mJ(new C.fwN(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mJ(new C.fwO(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mJ(new C.fwP(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mJ(new C.fwQ(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mJ(new C.fwR(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mJ(new C.fwS(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mJ(new C.fwT(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mJ(new C.fwV(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mJ(new C.fwW(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mJ(new C.fwX(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mJ(new C.fwY(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<E7>"))})
w($,"i9Z","hjU",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["jNIP339/FwZv3Bzc4rRL5yfLpK4="]=a.current})($__dart_deferred_initializers__);